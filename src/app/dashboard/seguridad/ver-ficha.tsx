'use client';

import { Eye, X, Edit, Download, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FichaSeguridad {
  id: number;
  codigo_expediente: string;
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
  juzgado_remitente: string;
  juez_remite: string;
  expediente_judicial: string;
  numero_oficio_ingreso: string;
  infraccion_penal: string;
  es_reincidente: boolean;
  estado_centro_anterior: boolean;
  proceso_judicial_anterior: boolean;
  forma_ingreso: string;
  golpes: string;
  heridas: string;
  cicatrices: string;
  enfermedad: string;
  impedimentos_fisicos: string;
  ansiedad: string;
  personal_medico_atendio: string;
  fecha_aprehension: string;
  quien_aprehendio: string;
  golpeado_aprehension: boolean;
  golpeado_traslado: boolean;
  quien_traslado: string;
  observaciones: string;
  nombre_supervisor_seguridad: string;
  fecha_entrevista: string;
  foto_persona?: string;
  estado: string;
  fecha_creacion: string;
}

interface VerFichaSeguridadProps {
  isOpen: boolean;
  onClose: () => void;
  onEditar: () => void;
  onDescargar: (ficha: FichaSeguridad) => void;
  onImprimir: (ficha: FichaSeguridad) => void;
  ficha: FichaSeguridad | null;
}

export function VerFichaSeguridad({ 
  isOpen, 
  onClose, 
  onEditar, 
  onDescargar, 
  onImprimir, 
  ficha 
}: VerFichaSeguridadProps) {
  if (!isOpen || !ficha) return null;

  const formatDate = (dateString: string) => {
    if (!dateString || dateString.trim() === '') return 'No especificado';
    try {
      return new Date(dateString).toLocaleDateString('es-ES');
    } catch {
      return 'Fecha inválida';
    }
  };

  const formatTime = (timeString: string) => {
    if (!timeString || timeString.trim() === '') return 'No especificado';
    return timeString;
  };

  const formatBoolean = (value: boolean) => value ? 'Sí' : 'No';

  const formatText = (text: string) => {
    if (!text || text.trim() === '') return 'No especificado';
    return text;
  };

  const handleDescargar = () => {
    onDescargar(ficha);
  };

  const handleImprimir = () => {
    onImprimir(ficha);
  };

  const handleEditar = () => {
    onEditar();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[95vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Ficha de {ficha.nombre_adolescente}</h2>
              <p className="text-muted-foreground">Código: {ficha.codigo_expediente}</p>
              <p className="text-sm text-muted-foreground">
                Estado: <span className={`font-semibold ${
                  ficha.estado === 'activo' ? 'text-green-600' :
                  ficha.estado === 'inactivo' ? 'text-red-600' :
                  'text-blue-600'
                }`}>
                  {ficha.estado?.toUpperCase() || 'NO ESPECIFICADO'}
                </span>
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleEditar}>
                <Edit className="h-4 w-4 mr-2" />
                Editar
              </Button>
              <Button variant="outline" size="sm" onClick={handleDescargar}>
                <Download className="h-4 w-4 mr-2" />
                Descargar
              </Button>
              <Button variant="outline" size="sm" onClick={handleImprimir}>
                <Printer className="h-4 w-4 mr-2" />
                Imprimir
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* SECCIÓN 1: FOTO Y DATOS PERSONALES */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Columna de Foto */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">FOTO DEL ADOLESCENTE</h3>
              <div className="border-2 border-gray-300 rounded-lg p-4 text-center">
                {ficha.foto_persona ? (
                  <img 
                    src={ficha.foto_persona} 
                    alt={ficha.nombre_adolescente} 
                    className="w-32 h-32 object-cover rounded-lg mx-auto"
                  />
                ) : (
                  <div className="py-8">
                    <Eye className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Sin foto</p>
                  </div>
                )}
              </div>
            </div>

            {/* Columna de Datos Personales */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">DATOS PERSONALES DEL ADOLESCENTE</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoItem label="Nombre completo" value={formatText(ficha.nombre_adolescente)} />
                <InfoItem label="No. Expediente Administrativo" value={formatText(ficha.expediente_administrativo)} />
                <InfoItem label="Código de Expediente" value={formatText(ficha.codigo_expediente)} />
                <InfoItem label="Edad" value={formatText(ficha.edad)} />
                <InfoItem label="Fecha de Nacimiento" value={formatDate(ficha.fecha_nacimiento)} />
                <InfoItem label="Originario" value={formatText(ficha.originario)} />
                <InfoItem label="Residente" value={formatText(ficha.residente)} />
                <InfoItem label="Fecha de Ingreso" value={formatDate(ficha.fecha_ingreso)} />
                <InfoItem label="Hora de Ingreso" value={formatTime(ficha.hora_ingreso)} />
                <InfoItem label="Número de DNI" value={formatText(ficha.numero_dni)} />
                <InfoItem label="Alias" value={formatText(ficha.alias)} />
                <InfoItem label="Simpatizante" value={formatText(ficha.simpatizante)} />
                <InfoItem label="Estado civil" value={formatText(ficha.estado_civil)} />
                <InfoItem label="Grado de Escolaridad" value={formatText(ficha.grado_escolaridad)} />
                <InfoItem label="Nombre del responsable" value={formatText(ficha.nombre_responsable)} />
                <InfoItem label="Teléfono del responsable" value={formatText(ficha.telefono_responsable)} />
              </div>
            </div>
          </div>

          {/* SECCIÓN 2: DATOS JUDICIALES */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">DATOS JUDICIALES</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem label="Juzgado remitente" value={formatText(ficha.juzgado_remitente)} />
              <InfoItem label="Juez que remite" value={formatText(ficha.juez_remite)} />
              <InfoItem label="Expediente Judicial" value={formatText(ficha.expediente_judicial)} />
              <InfoItem label="No. de Oficio de Ingreso" value={formatText(ficha.numero_oficio_ingreso)} />
              <InfoItem label="Infracción Penal" value={formatText(ficha.infraccion_penal)} />
              <InfoItem label="Es reincidente" value={formatBoolean(ficha.es_reincidente)} />
              <InfoItem label="Ha estado en otro Centro" value={formatBoolean(ficha.estado_centro_anterior)} />
              <InfoItem label="Proceso judicial anterior" value={formatBoolean(ficha.proceso_judicial_anterior)} />
              <InfoItem label="Forma de Ingreso" value={formatText(ficha.forma_ingreso)} />
            </div>
          </div>

          {/* SECCIÓN 3: ESTADO FÍSICO */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">ESTADO FÍSICO AL INGRESO</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem label="Golpes" value={formatText(ficha.golpes)} />
              <InfoItem label="Heridas" value={formatText(ficha.heridas)} />
              <InfoItem label="Cicatrices" value={formatText(ficha.cicatrices)} />
              <InfoItem label="Enfermedad" value={formatText(ficha.enfermedad)} />
              <InfoItem label="Impedimentos físicos" value={formatText(ficha.impedimentos_fisicos)} />
              <InfoItem label="Ansiedad" value={formatText(ficha.ansiedad)} />
              <InfoItem label="Personal médico que atendió" value={formatText(ficha.personal_medico_atendio)} />
            </div>
          </div>

          {/* SECCIÓN 4: APREHENSIÓN Y TRASLADO */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">APREHENSIÓN Y TRASLADO</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem label="Fecha de Aprehensión" value={formatDate(ficha.fecha_aprehension)} />
              <InfoItem label="Quién lo aprehendió" value={formatText(ficha.quien_aprehendio)} />
              <InfoItem label="Golpeado durante aprehensión" value={formatBoolean(ficha.golpeado_aprehension)} />
              <InfoItem label="Golpeado durante traslado" value={formatBoolean(ficha.golpeado_traslado)} />
              <InfoItem label="Quién trasladó al CPI" value={formatText(ficha.quien_traslado)} />
              <InfoItem label="Nombre del supervisor" value={formatText(ficha.nombre_supervisor_seguridad)} />
              <InfoItem label="Fecha de entrevista" value={formatDate(ficha.fecha_entrevista)} />
              <InfoItem label="Observaciones" value={formatText(ficha.observaciones)} />
            </div>
          </div>

          {/* INFORMACIÓN DEL SISTEMA */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">INFORMACIÓN DEL SISTEMA</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InfoItem label="Estado" value={formatText(ficha.estado)} />
              <InfoItem label="Fecha de creación" value={formatDate(ficha.fecha_creacion)} />
              <InfoItem label="Código único" value={formatText(ficha.codigo_expediente)} />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente auxiliar para mostrar información
function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <p className="text-sm bg-gray-50 p-2 rounded border min-h-[40px] flex items-center">
        {value || 'No especificado'}
      </p>
    </div>
  );
}