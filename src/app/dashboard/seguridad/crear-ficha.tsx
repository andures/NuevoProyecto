'use client';
import { useState, useRef } from 'react';
import { X, Save, Camera, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { backendService } from '@/lib/backend-service';

// Define la interfaz completa para los datos de la ficha
interface FichaSeguridad {
  id?: number;
  // Datos Personales
  nombre_adolescente: string;
  expediente_administrativo: string;
  edad: string;
  fecha_nacimiento: string;
  originario: string;
  residente: string;
  fecha_ingreso: string;
  hora_ingreso: string;
  numero_dni: string;
  alias: string;
  simpatizante: string;
  estado_civil: string;
  grado_escolaridad: string;
  nombre_responsable: string;
  telefono_responsable: string;
  
  // Datos Judiciales
  juzgado_remitente: string;
  juez_remite: string;
  expediente_judicial: string;
  numero_oficio_ingreso: string;
  infraccion_penal: string;
  es_reincidente: boolean;
  estado_centro_anterior: boolean;
  proceso_judicial_anterior: boolean;
  forma_ingreso: string;

  // Estado Físico
  golpes: string;
  heridas: string;
  cicatrices: string;
  enfermedad: string;
  impedimentos_fisicos: string;
  ansiedad: string;
  personal_medico_atendio: string;

  // Aprehensión y Traslado
  fecha_aprehension: string;
  quien_aprehendio: string;
  golpeado_aprehension: boolean;
  golpeado_traslado: boolean;
  quien_traslado: string;
  observaciones: string;
  nombre_supervisor_seguridad: string;
  fecha_entrevista: string;

  // Propiedades adicionales
  codigo_expediente: string;
  estado: string;
  fecha_creacion: string;
  foto_persona?: string;
}

interface CrearFichaSeguridadProps {
  isOpen: boolean;
  onClose: () => void;
  onFichaCreada: (nuevaFicha: Omit<FichaSeguridad, "id">) => void;
}

export function CrearFichaSeguridad({ isOpen, onClose, onFichaCreada }: CrearFichaSeguridadProps) {
  const [formData, setFormData] = useState({
    // Datos Personales
    nombre_adolescente: '',
    expediente_administrativo: '',
    edad: '',
    fecha_nacimiento: '',
    originario: '',
    residente: '',
    fecha_ingreso: '',
    hora_ingreso: '',
    numero_dni: '',
    alias: '',
    simpatizante: '',
    estado_civil: '',
    grado_escolaridad: '',
    nombre_responsable: '',
    telefono_responsable: '',
    
    // Datos Judiciales
    juzgado_remitente: '',
    juez_remite: '',
    expediente_judicial: '',
    numero_oficio_ingreso: '',
    infraccion_penal: '',
    es_reincidente: false,
    estado_centro_anterior: false,
    proceso_judicial_anterior: false,
    forma_ingreso: '',

    // Estado Físico
    golpes: '',
    heridas: '',
    cicatrices: '',
    enfermedad: '',
    impedimentos_fisicos: '',
    ansiedad: '',
    personal_medico_atendio: '',

    // Aprehensión y Traslado
    fecha_aprehension: '',
    quien_aprehendio: '',
    golpeado_aprehension: false,
    golpeado_traslado: false,
    quien_traslado: '',
    observaciones: '',
    nombre_supervisor_seguridad: '',
    fecha_entrevista: '',

    // Propiedades adicionales con valores por defecto
    codigo_expediente: '',
    estado: 'activo',
    fecha_creacion: new Date().toISOString().split('T')[0],
  });

  const [fotoPreview, setFotoPreview] = useState<string | null>(null);
  const [fotoArchivo, setFotoArchivo] = useState<File | null>(null);
  const [guardando, setGuardando] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Manejar selección de foto
  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Por favor selecciona un archivo de imagen válido');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('La imagen no debe superar los 5MB');
        return;
      }
      setFotoArchivo(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setFotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEliminarFoto = () => {
    setFotoPreview(null);
    setFotoArchivo(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGuardando(true);

    try {
      console.log('📝 Creando nueva ficha...');

      // Validaciones básicas
      if (!formData.nombre_adolescente.trim()) {
        alert('El nombre del adolescente es requerido');
        return;
      }

      if (!formData.expediente_administrativo.trim()) {
        alert('El expediente administrativo es requerido');
        return;
      }

      if (!formData.fecha_ingreso) {
        alert('La fecha de ingreso es requerida');
        return;
      }

      // Generar código de expediente único si no se proporcionó
      const datosParaEnviar = {
        ...formData,
        codigo_expediente: formData.codigo_expediente || `EXP-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`,
        fecha_creacion: new Date().toISOString().split('T')[0],
      };

      console.log('📤 Enviando datos al backend:', datosParaEnviar);

      // Crear ficha en el backend
      const resultado = await backendService.crearFicha(datosParaEnviar);
      
      console.log('✅ Ficha creada exitosamente:', resultado);

      // Llamar onFichaCreada con los datos del formulario
      onFichaCreada(datosParaEnviar);
      onClose();
      
      // Limpiar formulario
      resetForm();
      
    } catch (error: any) {
      console.error('❌ Error creando ficha:', error);
      alert('Error al guardar la ficha: ' + error.message);
    } finally {
      setGuardando(false);
    }
  };

  const resetForm = () => {
    setFormData({
      nombre_adolescente: '',
      expediente_administrativo: '',
      edad: '',
      fecha_nacimiento: '',
      originario: '',
      residente: '',
      fecha_ingreso: '',
      hora_ingreso: '',
      numero_dni: '',
      alias: '',
      simpatizante: '',
      estado_civil: '',
      grado_escolaridad: '',
      nombre_responsable: '',
      telefono_responsable: '',
      juzgado_remitente: '',
      juez_remite: '',
      expediente_judicial: '',
      numero_oficio_ingreso: '',
      infraccion_penal: '',
      es_reincidente: false,
      estado_centro_anterior: false,
      proceso_judicial_anterior: false,
      forma_ingreso: '',
      golpes: '',
      heridas: '',
      cicatrices: '',
      enfermedad: '',
      impedimentos_fisicos: '',
      ansiedad: '',
      personal_medico_atendio: '',
      fecha_aprehension: '',
      quien_aprehendio: '',
      golpeado_aprehension: false,
      golpeado_traslado: false,
      quien_traslado: '',
      observaciones: '',
      nombre_supervisor_seguridad: '',
      fecha_entrevista: '',
      codigo_expediente: '',
      estado: 'activo',
      fecha_creacion: new Date().toISOString().split('T')[0],
    });
    setFotoPreview(null);
    setFotoArchivo(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  // Función para manejar checkboxes específicamente
  const handleBooleanChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[95vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Nueva Ficha de Ingreso - Área de Seguridad</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* SECCIÓN 1: FOTO Y DATOS PERSONALES */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Columna de Foto */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">FOTO DEL ADOLESCENTE</h3>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  {fotoPreview ? (
                    <div className="space-y-2">
                      <img 
                        src={fotoPreview} 
                        alt="Preview" 
                        className="w-32 h-32 object-cover rounded-lg mx-auto"
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        onClick={handleEliminarFoto}
                        className="text-red-600"
                      >
                        Eliminar Foto
                      </Button>
                    </div>
                  ) : (
                    <div className="py-8">
                      <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">No hay foto seleccionada</p>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFotoChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full flex items-center gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Subir Foto
                  </Button>
                </div>
              </div>
            </div>

            {/* Columna de Datos Personales */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">DATOS PERSONALES DEL ADOLESCENTE</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre completo *</label>
                  <Input
                    name="nombre_adolescente"
                    value={formData.nombre_adolescente}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">No. Expediente Administrativo *</label>
                  <Input
                    name="expediente_administrativo"
                    value={formData.expediente_administrativo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Código de Expediente</label>
                  <Input
                    name="codigo_expediente"
                    value={formData.codigo_expediente}
                    onChange={handleChange}
                    placeholder="Se generará automáticamente si está vacío"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Edad</label>
                  <Input
                    name="edad"
                    type="number"
                    value={formData.edad}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Fecha de Nacimiento</label>
                  <Input
                    name="fecha_nacimiento"
                    type="date"
                    value={formData.fecha_nacimiento}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Originario</label>
                  <Input
                    name="originario"
                    value={formData.originario}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Residente</label>
                  <Input
                    name="residente"
                    value={formData.residente}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Fecha de Ingreso *</label>
                  <Input
                    name="fecha_ingreso"
                    type="date"
                    value={formData.fecha_ingreso}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Hora de Ingreso</label>
                  <Input
                    name="hora_ingreso"
                    type="time"
                    value={formData.hora_ingreso}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Número de DNI</label>
                  <Input
                    name="numero_dni"
                    value={formData.numero_dni}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Alias</label>
                  <Input
                    name="alias"
                    value={formData.alias}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Simpatizante</label>
                  <Input
                    name="simpatizante"
                    value={formData.simpatizante}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Estado civil</label>
                  <Input
                    name="estado_civil"
                    value={formData.estado_civil}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Grado de Escolaridad</label>
                  <Input
                    name="grado_escolaridad"
                    value={formData.grado_escolaridad}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre del responsable</label>
                  <Input
                    name="nombre_responsable"
                    value={formData.nombre_responsable}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Teléfono del responsable</label>
                  <Input
                    name="telefono_responsable"
                    value={formData.telefono_responsable}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECCIÓN 2: DATOS JUDICIALES */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">DATOS JUDICIALES</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Juzgado remitente</label>
                <Input
                  name="juzgado_remitente"
                  value={formData.juzgado_remitente}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Juez que remite</label>
                <Input
                  name="juez_remite"
                  value={formData.juez_remite}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Expediente Judicial</label>
                <Input
                  name="expediente_judicial"
                  value={formData.expediente_judicial}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">No. de Oficio de Ingreso</label>
                <Input
                  name="numero_oficio_ingreso"
                  value={formData.numero_oficio_ingreso}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Infracción Penal por la que ingreso</label>
                <Textarea
                  name="infraccion_penal"
                  value={formData.infraccion_penal}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="es_reincidente"
                  checked={formData.es_reincidente}
                  onChange={(e) => handleBooleanChange('es_reincidente', e.target.checked)}
                />
                <label className="text-sm font-medium">Es reincidente</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="estado_centro_anterior"
                  checked={formData.estado_centro_anterior}
                  onChange={(e) => handleBooleanChange('estado_centro_anterior', e.target.checked)}
                />
                <label className="text-sm font-medium">Ha estado en otro Centro</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="proceso_judicial_anterior"
                  checked={formData.proceso_judicial_anterior}
                  onChange={(e) => handleBooleanChange('proceso_judicial_anterior', e.target.checked)}
                />
                <label className="text-sm font-medium">Proceso judicial anterior</label>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Forma de Ingreso</label>
                <select
                  name="forma_ingreso"
                  value={formData.forma_ingreso}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2"
                >
                  <option value="">Seleccionar...</option>
                  <option value="medida_cautelar">Medida Cautelar</option>
                  <option value="sancion_privativa">Sanción Privativa</option>
                  <option value="traslado">Traslado</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECCIÓN 3: ESTADO FÍSICO */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">ESTADO FÍSICO AL MOMENTO DE SU INGRESO</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Golpes</label>
                <Textarea
                  name="golpes"
                  value={formData.golpes}
                  onChange={handleChange}
                  rows={2}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Heridas</label>
                <Textarea
                  name="heridas"
                  value={formData.heridas}
                  onChange={handleChange}
                  rows={2}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Cicatrices</label>
                <Textarea
                  name="cicatrices"
                  value={formData.cicatrices}
                  onChange={handleChange}
                  rows={2}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Enfermedad</label>
                <Textarea
                  name="enfermedad"
                  value={formData.enfermedad}
                  onChange={handleChange}
                  rows={2}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Impedimentos físicos</label>
                <Textarea
                  name="impedimentos_fisicos"
                  value={formData.impedimentos_fisicos}
                  onChange={handleChange}
                  rows={2}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Ansiedad</label>
                <Textarea
                  name="ansiedad"
                  value={formData.ansiedad}
                  onChange={handleChange}
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Personal del área médica que lo atendió</label>
                <Input
                  name="personal_medico_atendio"
                  value={formData.personal_medico_atendio}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* SECCIÓN 4: APREHENSIÓN Y TRASLADO */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">APREHENSIÓN Y TRASLADO AL CPI</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Fecha de Aprehensión</label>
                <Input
                  name="fecha_aprehension"
                  type="date"
                  value={formData.fecha_aprehension}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Quién lo aprehendió</label>
                <Input
                  name="quien_aprehendio"
                  value={formData.quien_aprehendio}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="golpeado_aprehension"
                  checked={formData.golpeado_aprehension}
                  onChange={(e) => handleBooleanChange('golpeado_aprehension', e.target.checked)}
                />
                <label className="text-sm font-medium">Fue golpeado durante aprehensión</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="golpeado_traslado"
                  checked={formData.golpeado_traslado}
                  onChange={(e) => handleBooleanChange('golpeado_traslado', e.target.checked)}
                />
                <label className="text-sm font-medium">Fue golpeado durante traslado</label>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Quién trasladó al CPI</label>
                <Input
                  name="quien_traslado"
                  value={formData.quien_traslado}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nombre del supervisor</label>
                <Input
                  name="nombre_supervisor_seguridad"
                  value={formData.nombre_supervisor_seguridad}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Fecha de entrevista</label>
                <Input
                  name="fecha_entrevista"
                  type="date"
                  value={formData.fecha_entrevista}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Observaciones</label>
                <Textarea
                  name="observaciones"
                  value={formData.observaciones}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-2 justify-end pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={guardando} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              {guardando ? 'Guardando...' : 'Guardar Ficha'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}