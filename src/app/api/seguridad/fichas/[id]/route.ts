import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';

// GET - Obtener una ficha específica por ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ← CAMBIAR
) {
  let client;
  try {
    const { id } = await params; // ← CAMBIAR: agregar await
    console.log(`📥 GET /api/seguridad/fichas/${id} recibida`);
    
    // Validar que el ID sea un número
    if (isNaN(Number(id))) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    client = await connectDB();
    const query = 'SELECT * FROM fichas_seguridad WHERE id = $1'; // ← CAMBIAR: ? → $1
    
    const result = await client.query(query, [id]); // ← CAMBIAR: execute → query
    
    if (result.rows.length === 0) { // ← CAMBIAR: rows en lugar de array
      return NextResponse.json(
        { error: 'Ficha no encontrada' },
        { status: 404 }
      );
    }
    
    console.log(`✅ Ficha ${id} encontrada`);
    return NextResponse.json(result.rows[0]); // ← CAMBIAR: rows[0]
    
  } catch (error) {
    console.error(`❌ Error obteniendo ficha:`, error); // ← QUITAR params.id
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  } finally {
    if (client) client.release(); // ← CAMBIAR: conn → client
  }
}

// PUT - Actualizar una ficha específica
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ← CAMBIAR
) {
  let client;
  try {
    const { id } = await params; // ← CAMBIAR: agregar await
    console.log(`📥 PUT /api/seguridad/fichas/${id} recibida`);
    
    // Validar ID
    if (isNaN(Number(id))) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    const updates = await request.json();
    console.log('📝 Datos recibidos para actualizar:', updates);
    
    client = await connectDB();
    
    // Verificar que la ficha existe
    const fichaExistente = await client.query(
      'SELECT id FROM fichas_seguridad WHERE id = $1', // ← CAMBIAR: ? → $1
      [id]
    );
    
    if (fichaExistente.rows.length === 0) { // ← CAMBIAR: rows
      return NextResponse.json(
        { error: 'Ficha no encontrada' },
        { status: 404 }
      );
    }

    // Validar datos mínimos para actualización
    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: 'No hay datos para actualizar' },
        { status: 400 }
      );
    }

    // Construir la consulta de actualización
    const camposPermitidos = [
      'expediente', 'nombre', 'apellidos', 'fecha_nacimiento', 'genero',
      'direccion', 'telefono', 'email', 'departamento', 'puesto',
      'fecha_ingreso', 'estado', 'observaciones'
    ];
    
    const camposActualizacion = Object.keys(updates).filter(key => 
      camposPermitidos.includes(key)
    );
    
    if (camposActualizacion.length === 0) {
      return NextResponse.json(
        { error: 'No hay campos válidos para actualizar' },
        { status: 400 }
      );
    }

    const setClause = camposActualizacion.map((key, index) => `${key} = $${index + 1}`).join(', '); // ← CAMBIAR: ? → $
    const values = camposActualizacion.map(key => {
      const value = updates[key];
      return value === '' ? null : value;
    });
    values.push(id);
    
    const query = `UPDATE fichas_seguridad SET ${setClause} WHERE id = $${values.length}`; // ← CAMBIAR: ? → $
    console.log('🔍 Query:', query);
    console.log('📊 Values:', values);
    
    await client.query(query, values); // ← CAMBIAR: execute → query
    
    console.log(`✅ Ficha ${id} actualizada exitosamente`);
    
    // Obtener la ficha actualizada para devolverla
    const fichaActualizada = await client.query(
      'SELECT * FROM fichas_seguridad WHERE id = $1', // ← CAMBIAR: ? → $1
      [id]
    );
    
    return NextResponse.json({
      success: true,
      message: 'Ficha actualizada correctamente',
      ficha: fichaActualizada.rows[0] // ← CAMBIAR: rows[0]
    });
    
  } catch (error: any) {
    console.error(`❌ Error actualizando ficha:`, error); // ← QUITAR params.id
    
    // Manejar errores específicos de PostgreSQL
    if (error.code === '23505') { // ← CAMBIAR: código de duplicado en PostgreSQL
      return NextResponse.json(
        { error: 'Ya existe una ficha con ese expediente' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Error interno del servidor al actualizar ficha: ' + error.message },
      { status: 500 }
    );
  } finally {
    if (client) client.release(); // ← CAMBIAR: conn → client
  }
}

// DELETE - Eliminar una ficha específica - CORREGIDO
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ← CAMBIAR
) {
  let client;
  try {
    const { id } = await params; // ← CAMBIAR: agregar await
    console.log(`🗑️ DELETE /api/seguridad/fichas/${id} recibida (PostgreSQL)`);
    
    // Validar ID
    if (isNaN(Number(id))) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    client = await connectDB();
    
    // Verificar que la ficha existe
    const fichaExistente = await client.query(
      'SELECT id, nombre_adolescente FROM fichas_seguridad WHERE id = $1', // ← CAMBIAR: ? → $1
      [id]
    );
    
    if (fichaExistente.rows.length === 0) { // ← CAMBIAR: rows
      return NextResponse.json(
        { error: 'Ficha no encontrada' },
        { status: 404 }
      );
    }
    
    console.log(`🔍 Ficha encontrada: ${fichaExistente.rows[0].nombre_adolescente}`);
    
    // SOLUCIÓN PARA CLAVES FORÁNEAS
    await client.query('BEGIN'); // ← Iniciar transacción
    
    try {
      // 1. Primero eliminar registros en auditoria_fichas
      console.log(`🔍 Eliminando registros de auditoría para ficha ${id}...`);
      await client.query(
        'DELETE FROM auditoria_fichas WHERE ficha_id = $1', // ← CAMBIAR: ? → $1
        [id]
      );
      
      // 2. Ahora eliminar la ficha
      const result = await client.query(
        'DELETE FROM fichas_seguridad WHERE id = $1', // ← CAMBIAR: ? → $1
        [id]
      );
      
      await client.query('COMMIT'); // ← Confirmar transacción
      
      console.log(`✅ Ficha ${id} eliminada exitosamente. Filas afectadas:`, result.rowCount);
      
      return NextResponse.json({
        success: true,
        message: 'Ficha eliminada correctamente',
        id: parseInt(id),
        affectedRows: result.rowCount // ← CAMBIAR: rowCount
      });
      
    } catch (error: any) {
      await client.query('ROLLBACK'); // ← Revertir en caso de error
      console.error(`❌ Error en transacción de eliminación:`, error);
      
      // Manejar error de clave foránea en PostgreSQL
      if (error.code === '23503') { // ← CAMBIAR: código de restricción en PostgreSQL
        return NextResponse.json(
          { 
            error: 'Restricción de integridad referencial',
            message: 'No se puede eliminar la ficha porque está siendo referenciada por otros registros.'
          },
          { status: 409 }
        );
      }
      
      throw error;
    }
    
  } catch (error: any) {
    console.error(`❌ Error eliminando ficha:`, error); // ← QUITAR params.id
    
    // Manejar errores específicos de PostgreSQL
    if (error.code === '23503') { // ← CAMBIAR: código de restricción en PostgreSQL
      return NextResponse.json(
        { 
          error: 'Restricción de integridad referencial',
          message: 'No se puede eliminar la ficha porque está siendo referenciada por otros registros.'
        },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { error: 'Error interno del servidor al eliminar ficha' },
      { status: 500 }
    );
  } finally {
    if (client) client.release(); // ← CAMBIAR: conn → client
  }
}