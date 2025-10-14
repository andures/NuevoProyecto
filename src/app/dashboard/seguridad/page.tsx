'use client';
import { useState, useEffect } from 'react';
import { Search, Plus, Download, Edit, Eye, Trash2, Printer, Filter, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CrearFichaSeguridad } from './crear-ficha';
import { EditarFichaSeguridad } from './editar-ficha';
import { VerFichaSeguridad } from './ver-ficha';
import { backendService } from '@/lib/backend-service';
import jsPDF from 'jspdf';
import { generarPDF } from '@/lib/pdf-generator';

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

// Datos mock como respaldo
const mockFichas: FichaSeguridad[] = [
  {
    id: 1,
    codigo_expediente: 'EXP-2024-001',
    nombre_adolescente: 'Juan Pérez',
    expediente_administrativo: 'ADM-2024-001',
    edad: '16',
    fecha_nacimiento: '2008-01-15',
    originario: 'Ciudad de México',
    residente: 'Ciudad de México',
    fecha_ingreso: '2024-01-15',
    hora_ingreso: '14:30',
    numero_dni: '12345678',
    alias: 'JP',
    simpatizante: 'No',
    estado_civil: 'Soltero',
    grado_escolaridad: 'Secundaria',
    nombre_responsable: 'María Pérez',
    telefono_responsable: '555-1234',
    juzgado_remitente: 'Juzgado Primero',
    juez_remite: 'Juez Martínez',
    expediente_judicial: 'J-2024-001',
    numero_oficio_ingreso: 'OF-2024-001',
    infraccion_penal: 'Robo',
    es_reincidente: false,
    estado_centro_anterior: false,
    proceso_judicial_anterior: false,
    forma_ingreso: 'Voluntario',
    golpes: 'No presenta',
    heridas: 'No presenta',
    cicatrices: 'No presenta',
    enfermedad: 'Ninguna',
    impedimentos_fisicos: 'Ninguno',
    ansiedad: 'Leve',
    personal_medico_atendio: 'Dr. García',
    fecha_aprehension: '2024-01-14',
    quien_aprehendio: 'Policía Municipal',
    golpeado_aprehension: false,
    golpeado_traslado: false,
    quien_traslado: 'Patrulla 245',
    observaciones: 'Adolescente colaborativo',
    nombre_supervisor_seguridad: 'Carlos López',
    fecha_entrevista: '2024-01-15',
    foto_persona: undefined,
    estado: 'activo',
    fecha_creacion: '2024-01-15'
  },
];

export default function SeguridadPage() {
  const [fichas, setFichas] = useState<FichaSeguridad[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEstado, setFilterEstado] = useState('');
  const [modalAbierto, setModalAbierto] = useState<'crear' | 'ver' | 'editar' | null>(null);
  const [fichaSeleccionada, setFichaSeleccionada] = useState<FichaSeguridad | null>(null);
  const [cargando, setCargando] = useState(true);
  const [conexionEstado, setConexionEstado] = useState<{ success: boolean; message: string } | null>(null);

  // ✅ CONECTAR AL BACKEND REAL (Next.js API Routes)
  const cargarFichas = async () => {
    try {
      setCargando(true);
      console.log('🔗 Cargando fichas desde API Routes...');
      
      const fichasData = await backendService.obtenerFichas();
      console.log('✅ Fichas cargadas:', fichasData.length);
      setFichas(fichasData);
      
    } catch (error) {
      console.error('❌ Error cargando fichas:', error);
      // Usar datos mock como respaldo
      setFichas(mockFichas);
      console.log('📋 Usando datos de demostración');
    } finally {
      setCargando(false);
    }
  };

  // ✅ ELIMINAR FICHA (Opción recomendada - MEJORADA)
const eliminarFicha = async (id: number, nombre: string) => {
  if (confirm(`¿Está seguro de que desea eliminar la ficha de "${nombre}"?\n\nEsta acción no se puede deshacer.`)) {
    try {
      console.log('🗑️ Eliminando ficha:', id);
      
      // Convertir ID a string
      const idString = id.toString();
      await backendService.eliminarFicha(idString);
      
      // Actualizar la lista local
      setFichas(fichas.filter(f => f.id !== id));
      console.log('✅ Ficha eliminada exitosamente');
      
    } catch (error: any) {
      console.error('❌ Error eliminando ficha:', error);
      alert('Error al eliminar la ficha: ' + error.message);
    }
  }
};

  // ✅ CREAR FICHA
  const handleFichaCreada = async (nuevaFicha: Omit<FichaSeguridad, 'id'>) => {
    try {
      const resultado = await backendService.crearFicha(nuevaFicha);
      await cargarFichas(); // Recargar la lista
      setModalAbierto(null);
      alert('Ficha creada exitosamente');
    } catch (error: any) {
      alert('Error al crear la ficha: ' + error.message);
    }
  };

// ✅ ACTUALIZAR FICHA
const handleFichaActualizada = async (fichaActualizada: FichaSeguridad) => {
  try {
    // Convertir el ID de number a string
    const idString = fichaActualizada.id.toString();
    
    await backendService.actualizarFicha(idString, fichaActualizada);
    await cargarFichas(); // Recargar la lista
    setModalAbierto(null);
    alert('Ficha actualizada exitosamente');
  } catch (error: any) {
    alert('Error al actualizar la ficha: ' + error.message);
  }
};

  // ✅ PROBAR CONEXIÓN
  const probarConexion = async () => {
    try {
      setConexionEstado(null);
      const resultado = await backendService.probarConexion();
      setConexionEstado(resultado);
      
      if (resultado.success) {
        // Recargar fichas si la conexión es exitosa
        await cargarFichas();
      }
    } catch (error) {
      setConexionEstado({
        success: false,
        message: 'Error probando conexión'
      });
    }
  };

  // Cargar fichas al iniciar
  useEffect(() => {
    cargarFichas();
  }, []);

  const filtrarFichas = fichas.filter(ficha => {
    const coincideBusqueda = 
      ficha.nombre_adolescente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ficha.codigo_expediente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ficha.expediente_judicial.toLowerCase().includes(searchTerm.toLowerCase());
    
    const coincideEstado = filterEstado ? ficha.estado === filterEstado : true;
    
    return coincideBusqueda && coincideEstado;
  });

  const abrirVerFicha = (ficha: FichaSeguridad) => {
    setFichaSeleccionada(ficha);
    setModalAbierto('ver');
  };

  const abrirEditarFicha = (ficha: FichaSeguridad) => {
    setFichaSeleccionada(ficha);
    setModalAbierto('editar');
  };

const descargarPDF = async (ficha: FichaSeguridad) => {
  try {
    const pdf = generarPDF(ficha); // ← Usa la función importada
    pdf.save(`ficha-seguridad-${ficha.codigo_expediente}.pdf`);
  } catch (error) {
    console.error('Error descargando PDF:', error);
    alert('Error al descargar la ficha');
  }
};

const imprimirFicha = async (ficha: FichaSeguridad) => {
  try {
    const pdf = generarPDF(ficha); // ← Usa la función importada
    pdf.autoPrint();
    const pdfBlob = pdf.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const printWindow = window.open(pdfUrl);
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  } catch (error) {
    console.error('Error imprimiendo ficha:', error);
    alert('Error al imprimir la ficha');
  }
};

  return (
    <div className="space-y-6">
      {/* Header con estado de conexión */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Área de Seguridad</h1>
          <p className="text-muted-foreground">Gestión de Fichas de Ingreso</p>
          
          {conexionEstado && (
            <div className={`text-sm mt-1 ${
              conexionEstado.success ? 'text-green-600' : 'text-red-600'
            }`}>
              {conexionEstado.message}
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={probarConexion}
            className="flex items-center gap-2"
            disabled={cargando}
          >
            <RefreshCw className={`h-4 w-4 ${cargando ? 'animate-spin' : ''}`} />
            Probar Conexión
          </Button>
          
          <Button 
            onClick={() => setModalAbierto('crear')}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Nueva Ficha
          </Button>
        </div>
      </div>

      {/* Filtros y Búsqueda */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre, código o expediente..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select 
                value={filterEstado}
                onChange={(e) => setFilterEstado(e.target.value)}
                className="border rounded-md px-3 py-2"
              >
                <option value="">Todos los estados</option>
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
                <option value="egresado">Egresado</option>
              </select>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filtros
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Estado de carga */}
      {cargando ? (
        <div className="text-center py-8">
          <div className="flex items-center justify-center gap-2">
            <RefreshCw className="h-5 w-5 animate-spin" />
            Cargando fichas...
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            Conectando con el sistema...
          </div>
        </div>
      ) : (
        <div className="grid gap-4">
          {filtrarFichas.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No se encontraron fichas. 
              {fichas === mockFichas && (
                <div className="mt-2">
                  <div>⚠️ Usando datos de demostración</div>
                  <button 
                    onClick={cargarFichas}
                    className="text-blue-500 hover:text-blue-700 text-sm mt-1"
                  >
                    Reintentar conexión
                  </button>
                </div>
              )}
            </div>
          ) : (
            filtrarFichas.map((ficha) => (
              <Card key={ficha.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{ficha.nombre_adolescente}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                            <span>
                              <strong>Exp. Admin:</strong> {ficha.codigo_expediente}
                            </span>
                            <span>
                              <strong>Exp. Judicial:</strong> {ficha.expediente_judicial}
                            </span>
                            <span>
                              <strong>Juzgado:</strong> {ficha.juzgado_remitente}
                            </span>
                            <span>
                              <strong>Ingreso:</strong> {new Date(ficha.fecha_ingreso).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          ficha.estado === 'activo' ? 'bg-green-100 text-green-800' :
                          ficha.estado === 'inactivo' ? 'bg-gray-100 text-gray-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {ficha.estado}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="sm" onClick={() => abrirVerFicha(ficha)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => abrirEditarFicha(ficha)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => descargarPDF(ficha)}>
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => imprimirFicha(ficha)}>
                        <Printer className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => eliminarFicha(ficha.id, ficha.nombre_adolescente)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}

      {/* Modales */}
      {modalAbierto === 'crear' && (
        <CrearFichaSeguridad 
          isOpen={true}
          onClose={() => setModalAbierto(null)}
          onFichaCreada={handleFichaCreada}
        />
      )}

      {modalAbierto === 'editar' && fichaSeleccionada && (
        <EditarFichaSeguridad
          isOpen={true}
          onClose={() => setModalAbierto(null)}
          onFichaActualizada={handleFichaActualizada}
          ficha={fichaSeleccionada}
        />
      )}

      {modalAbierto === 'ver' && fichaSeleccionada && (
        <VerFichaSeguridad
          isOpen={true}
          onClose={() => setModalAbierto(null)}
          onEditar={() => setModalAbierto('editar')}
          onDescargar={descargarPDF}
          onImprimir={imprimirFicha}
          ficha={fichaSeleccionada}
        />
      )}
    </div>
  );
}