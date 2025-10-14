import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';

// GET - Obtener todas las fichas
export async function GET(request: NextRequest) {
  let conn;
  try {
    console.log('📥 GET /api/seguridad/fichas recibida');
    
    conn = await connectDB();
    const query = 'SELECT * FROM fichas_seguridad ORDER BY id DESC';
    
    const [fichas] = await conn.execute(query) as any[];
    
    console.log(`✅ ${fichas.length} fichas encontradas`);
    return NextResponse.json(fichas);
    
  } catch (error) {
    console.error('❌ Error obteniendo fichas:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor al obtener fichas' },
      { status: 500 }
    );
  } finally {
    if (conn) conn.release();
  }
}

export async function POST(request: NextRequest) {
  let conn;
  try {
    console.log('📥 POST /api/seguridad/fichas recibida');
    
    const fichaData = await request.json();
    console.log('📝 Datos recibidos:', fichaData);
    
    // Validar datos requeridos - USANDO LOS CAMPOS CORRECTOS
    if (!fichaData.expediente_administrativo || !fichaData.nombre_adolescente) {
      return NextResponse.json(
        { error: 'Expediente administrativo y nombre del adolescente son campos requeridos' },
        { status: 400 }
      );
    }
    
    conn = await connectDB();
    
    // Insertar nueva ficha - USANDO LOS CAMPOS CORRECTOS
    const query = `
      INSERT INTO fichas_seguridad 
      (
        codigo_expediente, estado, nombre_adolescente, expediente_administrativo,
        edad, fecha_nacimiento, originario, residente, fecha_ingreso,
        hora_ingreso, numero_dni, alias, simpatizante, estado_civil,
        grado_escolaridad, nombre_responsable, telefono_responsable,
        juzgado_remitente, juez_remite, expediente_judicial, numero_oficio_ingreso,
        infraccion_penal, es_reincidente, estado_centro_anterior, proceso_judicial_anterior,
        forma_ingreso, golpes, heridas, cicatrices, enfermedad, impedimentos_fisicos,
        ansiedad, personal_medico_atendio, fecha_aprehension, quien_aprehendio,
        golpeado_aprehension, golpeado_traslado, quien_traslado, observaciones,
        nombre_supervisor_seguridad, fecha_entrevista, foto_persona
      ) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const values = [
      // Datos Personales
      fichaData.codigo_expediente || null,
      fichaData.estado || 'activo',
      fichaData.nombre_adolescente,
      fichaData.expediente_administrativo,
      fichaData.edad || null,
      fichaData.fecha_nacimiento || null,
      fichaData.originario || null,
      fichaData.residente || null,
      fichaData.fecha_ingreso || null,
      fichaData.hora_ingreso || null,
      fichaData.numero_dni || null,
      fichaData.alias || null,
      fichaData.simpatizante || null,
      fichaData.estado_civil || null,
      fichaData.grado_escolaridad || null,
      fichaData.nombre_responsable || null,
      fichaData.telefono_responsable || null,
      // Datos Judiciales
      fichaData.juzgado_remitente || null,
      fichaData.juez_remite || null,
      fichaData.expediente_judicial || null,
      fichaData.numero_oficio_ingreso || null,
      fichaData.infraccion_penal || null,
      fichaData.es_reincidente ? 1 : 0,
      fichaData.estado_centro_anterior ? 1 : 0,
      fichaData.proceso_judicial_anterior ? 1 : 0,
      fichaData.forma_ingreso || null,
      // Estado Físico
      fichaData.golpes || null,
      fichaData.heridas || null,
      fichaData.cicatrices || null,
      fichaData.enfermedad || null,
      fichaData.impedimentos_fisicos || null,
      fichaData.ansiedad || null,
      fichaData.personal_medico_atendio || null,
      // Aprehensión y Traslado
      fichaData.fecha_aprehension || null,
      fichaData.quien_aprehendio || null,
      fichaData.golpeado_aprehension ? 1 : 0,
      fichaData.golpeado_traslado ? 1 : 0,
      fichaData.quien_traslado || null,
      fichaData.observaciones || null,
      fichaData.nombre_supervisor_seguridad || null,
      fichaData.fecha_entrevista || null,
      fichaData.foto_persona || null
    ];
    
    const [result] = await conn.execute(query, values) as any;
    const nuevaFichaId = result.insertId;
    
    // Obtener la ficha recién creada
    const [fichas] = await conn.execute(
      'SELECT * FROM fichas_seguridad WHERE id = ?', 
      [nuevaFichaId]
    ) as any[];
    
    console.log(`✅ Nueva ficha creada con ID: ${nuevaFichaId}`);
    
    return NextResponse.json(
      {
        success: true,
        message: 'Ficha creada correctamente',
        ficha: fichas[0]
      },
      { status: 201 }
    );
    
  } catch (error: any) {
    console.error('❌ Error creando ficha:', error);
    
    // Manejar errores específicos
    if (error.message.includes('Duplicate entry')) {
      return NextResponse.json(
        { error: 'Ya existe una ficha con ese expediente' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Error interno del servidor al crear ficha: ' + error.message },
      { status: 500 }
    );
  } finally {
    if (conn) conn.release();
  }
}