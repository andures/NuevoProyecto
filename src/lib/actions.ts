'use server'

import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

// Definimos el esquema de validación para los datos del formulario
const ExpedienteSchema = z.object({
  nombre_completo: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres.' }),
  expediente_administrativo: z.string().min(1, { message: 'El número de expediente es obligatorio.' }),
})

// Este es el estado inicial que usaremos para el formulario
export type FormState = {
  message: string;
  errors?: {
    nombre_completo?: string[];
    expediente_administrativo?: string[];
  };
}

export async function crearExpediente(prevState: FormState, formData: FormData): Promise<FormState> {
  // 1. Validar los datos del formulario
  const validatedFields = ExpedienteSchema.safeParse({
    nombre_completo: formData.get('nombre_completo'),
    expediente_administrativo: formData.get('expediente_administrativo'),
  })

  if (!validatedFields.success) {
    return {
      message: 'Error de validación. Por favor, corrige los campos.',
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { nombre_completo, expediente_administrativo } = validatedFields.data
  const supabase = createClient()

  // 2. Insertar los datos en la base de datos
  const { error } = await supabase
    .from('expedientes_educacion')
    .insert([{ nombre_completo, expediente_administrativo }])

  // 3. Manejar errores de la base de datos
  if (error) {
    console.error('Error de base de datos:', error)
    // Error específico si el expediente ya existe
    if (error.code === '23505') { // Código de error para violación de unicidad
        return { message: 'Error: El número de expediente administrativo ya existe.' }
    }
    return { message: 'Error en el servidor: No se pudo crear el expediente.' }
  }

  // 4. Refrescar los datos en la página y devolver un mensaje de éxito
  revalidatePath('/dashboard/educacion') // Asume que tienes una página que lista los expedientes aquí
  return { message: `Éxito: Se ha creado el expediente para ${nombre_completo}.` }
}
