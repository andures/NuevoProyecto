import { supabase } from '@/lib/supabase';

export class BackendService {
  
  async crearFicha(fichaData: any) {
    try {
      console.log('📝 Creando ficha con Supabase...', fichaData);

      // 1. Verificar si el código de expediente ya existe ANTES de insertar
      if (fichaData.codigo_expediente && fichaData.codigo_expediente.trim() !== '') {
        const { data: fichaExistente, error: errorBusqueda } = await supabase
          .from('fichas_seguridad')
          .select('id, codigo_expediente, nombre_adolescente')
          .eq('codigo_expediente', fichaData.codigo_expediente)
          .maybeSingle();

        if (errorBusqueda) {
          console.error('❌ Error buscando expediente:', errorBusqueda);
        }

        if (fichaExistente) {
          throw new Error(`Ya existe una ficha con el código de expediente "${fichaData.codigo_expediente}" perteneciente a: ${fichaExistente.nombre_adolescente}`);
        }
      }

      // 2. Generar código automáticamente si está vacío
      if (!fichaData.codigo_expediente || fichaData.codigo_expediente.trim() === '') {
        fichaData.codigo_expediente = this.generarCodigoUnico();
        console.log('🔧 Código de expediente generado:', fichaData.codigo_expediente);
      }

      // 3. Preparar datos con tipos correctos
      const datosParaEnviar = {
        ...fichaData,
        // Convertir a booleanos explícitos
        es_reincidente: Boolean(fichaData.es_reincidente),
        estado_centro_anterior: Boolean(fichaData.estado_centro_anterior),
        proceso_judicial_anterior: Boolean(fichaData.proceso_judicial_anterior),
        golpeado_aprehension: Boolean(fichaData.golpeado_aprehension),
        golpeado_traslado: Boolean(fichaData.golpeado_traslado),
        // Fecha actual
        fecha_creacion: new Date().toISOString(),
        // Estado por defecto
        estado: fichaData.estado || 'activo'
      };

      console.log('📤 Datos preparados para enviar:', datosParaEnviar);

      // 4. Insertar en la base de datos
      const { data, error } = await supabase
        .from('fichas_seguridad')
        .insert([datosParaEnviar])
        .select()
        .single();

      if (error) {
        console.error('❌ Error de Supabase:', error);
        
        // Manejar específicamente el error de duplicado
        if (error.code === '23505') {
          if (error.message.includes('codigo_expediente')) {
            // Generar nuevo código y reintentar una vez
            const nuevoCodigo = this.generarCodigoUnico();
            console.log('🔄 Reintentando con nuevo código:', nuevoCodigo);
            
            const { data: dataRetry, error: errorRetry } = await supabase
              .from('fichas_seguridad')
              .insert([{ ...datosParaEnviar, codigo_expediente: nuevoCodigo }])
              .select()
              .single();

            if (errorRetry) {
              console.error('❌ Error en reintento:', errorRetry);
              throw new Error('No se pudo crear la ficha. Por favor, intenta con un código de expediente diferente.');
            }
            
            return dataRetry;
          }
        }
        
        throw new Error(`Error de base de datos: ${error.message}`);
      }

      console.log('✅ Ficha creada exitosamente:', data);
      return data;
      
    } catch (error: any) {
      console.error('❌ Error creando ficha:', error);
      throw error; // Propagar el error original
    }
  }

  // Método para generar código único
  private generarCodigoUnico(): string {
    const fecha = new Date();
    const timestamp = fecha.getTime();
    const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `INAMI-${fecha.getFullYear()}${(fecha.getMonth() + 1).toString().padStart(2, '0')}${fecha.getDate().toString().padStart(2, '0')}-${randomNum}`;
  }

  async obtenerFichas(search?: string, estado?: string) {
    try {
      let query = supabase.from('fichas_seguridad').select('*');
      
      if (search) {
        query = query.or(`nombre_adolescente.ilike.%${search}%,expediente_administrativo.ilike.%${search}%`);
      }
      
      if (estado) {
        query = query.eq('estado', estado);
      }
      
      const { data, error } = await query.order('fecha_creacion', { ascending: false });
      
      if (error) throw error;
      return data;
      
    } catch (error: any) {
      console.error('❌ Error obteniendo fichas:', error);
      throw new Error(error.message || 'Error al obtener fichas');
    }
  }

  async obtenerFicha(id: string) {
    try {
      const { data, error } = await supabase
        .from('fichas_seguridad')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
      
    } catch (error: any) {
      console.error('❌ Error obteniendo ficha:', error);
      throw new Error(error.message || 'Error al obtener la ficha');
    }
  }

  async actualizarFicha(id: string, datos: any) {
    try {
      const { data, error } = await supabase
        .from('fichas_seguridad')
        .update(datos)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
      
    } catch (error: any) {
      console.error('❌ Error actualizando ficha:', error);
      throw error;
    }
  }

  async eliminarFicha(id: string) {
    try {
      const { error } = await supabase
        .from('fichas_seguridad')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      return { success: true, message: 'Ficha eliminada correctamente' };
      
    } catch (error: any) {
      console.error('❌ Error eliminando ficha:', error);
      throw new Error(error.message || 'Error al eliminar ficha');
    }
  }

  // Método adicional para verificar si un código ya existe
  async verificarCodigoExpediente(codigo: string): Promise<{ existe: boolean; ficha?: any }> {
    try {
      const { data, error } = await supabase
        .from('fichas_seguridad')
        .select('id, nombre_adolescente, codigo_expediente')
        .eq('codigo_expediente', codigo)
        .maybeSingle();

      if (error) throw error;
      
      return {
        existe: !!data,
        ficha: data
      };
    } catch (error) {
      console.error('Error verificando código:', error);
      return { existe: false };
    }
  }
}

export const backendService = new BackendService();