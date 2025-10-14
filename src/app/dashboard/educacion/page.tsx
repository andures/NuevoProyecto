"use client"; // Directiva necesaria en Next.js App Router para componentes con interactividad

import React, { useState, useEffect, ReactNode } from "react";
import { createClient } from "@/lib/supabase/client";
import { toast } from "@/hooks/use-toast";

// ===============================================================
// ICONOS SVG (Sin dependencias externas)
// ===============================================================
const IconPlus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
      clipRule="evenodd"
    />
  </svg>
);
const IconArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
const IconArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
);
const IconQuestionCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.546-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const IconFileSignature = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);
const IconChalkboardTeacher = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 4v12l-4-2-4 2V4M6 20h12M6 4h12v12H6z"
    />
  </svg>
);
const IconChartLine = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);
const IconFlagCheckered = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12zM4 15v6m0-6H2m2 0h2"
    />
  </svg>
);
const IconFileInvoice = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 9v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2m10 0H7"
    />
  </svg>
);
const IconStarOfLife = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 11.25l-3.25 6.25-6.25-3.25L8.75 12 2.5 8.75l6.25-3.25L12 11.25zM12 11.25l3.25-6.25 6.25 3.25L15.25 12l6.25 3.25-6.25 3.25L12 11.25z"
    />
  </svg>
);
const IconTrash = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

// ===============================================================
// TIPOS (TYPESCRIPT)
// ===============================================================
type Expediente = {
  id: string;
  nombre_completo: string;
  expediente_administrativo: string;
  [key: string]: any;
};

type FormularioInfo = {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  tableName: string;
};

type Familiar = {
  id: number;
  parentesco: string;
  edad: string;
  escolaridad: string;
  ocupacion: string;
};

// ===============================================================
// DATOS CONSTANTES
// ===============================================================
const allForms: FormularioInfo[] = [
  {
    id: "form-entrevista-inicial",
    title: "1. Entrevista Inicial Educativa",
    icon: IconQuestionCircle,
    tableName: "entrevistas_iniciales_educacion",
  },
  {
    id: "form-informe-inicial",
    title: "2. Informe Inicial Educativo",
    icon: IconFileSignature,
    tableName: "informes_iniciales_educacion",
  },
  {
    id: "form-entrevista-seguimiento",
    title: "3. Entrevista de Seguimiento",
    icon: IconChalkboardTeacher,
    tableName: "entrevistas_seguimiento_educacion",
  },
  {
    id: "form-informe-seguimiento",
    title: "4. Informe de Seguimiento",
    icon: IconChartLine,
    tableName: "informes_seguimiento_educacion",
  },
  {
    id: "form-entrevista-cierre",
    title: "5. Entrevista de Cierre",
    icon: IconFlagCheckered,
    tableName: "",
  }, // No hay tabla para este formulario en el schema
  {
    id: "form-informe-cierre",
    title: "6. Informe de Cierre",
    icon: IconFileInvoice,
    tableName: "informes_cierre_educacion",
  },
  {
    id: "form-informe-especial",
    title: "7. Informe Especial",
    icon: IconStarOfLife,
    tableName: "informes_especiales_educacion",
  },
];

// ===============================================================
// COMPONENTE PRINCIPAL DE LA PÁGINA
// ===============================================================
export default function ModuloEducacionPage() {
  const [currentView, setCurrentView] = useState<"dashboard" | "case" | "form">(
    "dashboard"
  );
  const [expedientes, setExpedientes] = useState<Expediente[]>([]);
  const [selectedExpediente, setSelectedExpediente] =
    useState<Expediente | null>(null);
  const [selectedForm, setSelectedForm] = useState<FormularioInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const fetchExpedientes = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("expedientes_educacion")
        .select("*");

      if (error) {
        console.error("Error fetching expedientes:", error);
        toast({
          title: "Error al cargar expedientes",
          description: error.message,
          variant: "destructive",
        });
        setExpedientes([]);
      } else {
        setExpedientes(data || []);
      }
      setIsLoading(false);
    };
    fetchExpedientes();
  }, []);

  const handleSelectExpediente = (expediente: Expediente) => {
    setSelectedExpediente(expediente);
    setCurrentView("case");
  };

  const handleSelectForm = (formInfo: FormularioInfo) => {
    if (!formInfo.tableName) {
      toast({
        title: "Formulario no disponible",
        description:
          "Este formulario aún no tiene una tabla de base de datos asociada.",
        variant: "destructive",
      });
      return;
    }
    setSelectedForm(formInfo);
    setCurrentView("form");
  };

  const handleCreateNew = () => {
    setSelectedExpediente(null);
    handleSelectForm(allForms[0]);
  };

  const navigateBack = () => {
    if (currentView === "form") {
      setCurrentView(selectedExpediente ? "case" : "dashboard");
    } else if (currentView === "case") {
      setCurrentView("dashboard");
    }
  };

  const handleSaveForm = async (formData: any) => {
    if (!selectedForm) return;

    toast({ title: "Guardando datos...", description: "Por favor espera." });

    try {
      // Caso 1: Creando un nuevo expediente.
      if (selectedForm.id === "form-entrevista-inicial") {
        // Primero, crea el registro en la tabla principal `expedientes_educacion`
        const { data: newExpediente, error: expedienteError } = await supabase
          .from("expedientes_educacion")
          .insert({
            nombre_completo: formData.nombre_completo,
            expediente_administrativo: formData.expediente_administrativo,
          })
          .select()
          .single();

        if (expedienteError) throw expedienteError;

        // Luego, guarda el resto del formulario en `entrevistas_iniciales_educacion`
        const interviewData = { ...formData, expediente_id: newExpediente.id };
        const { error: interviewError } = await supabase
          .from(selectedForm.tableName)
          .insert(interviewData);

        if (interviewError) throw interviewError;

        // Actualiza el estado local para mostrar el nuevo expediente en la UI
        setExpedientes((prev) => [...prev, newExpediente]);
      } else {
        // Caso 2: Guardando un formulario para un expediente existente.
        if (!selectedExpediente) {
          throw new Error(
            "necesita seleccionar un expediente para guardar este formulario."
          );
        }

        const dataToSave = {
          ...formData,
          expediente_id: selectedExpediente.id,
        };

        const { error } = await supabase
          .from(selectedForm.tableName)
          .insert(dataToSave);

        if (error) throw error;
      }

      toast({
        title: "¡Éxito!",
        description: "Los datos del formulario se han guardado correctamente.",
      });

      navigateBack();
    } catch (error: any) {
      toast({
        title: "Error al guardar",
        description: `Error: ${error.message}`,
        variant: "destructive",
      });
      console.error("Error saving form data:", error);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case "case":
        return (
          <CaseView
            expediente={selectedExpediente!}
            onSelectForm={handleSelectForm}
            onBack={navigateBack}
          />
        );
      case "form":
        return (
          <FormView
            formInfo={selectedForm!}
            expediente={selectedExpediente}
            onSave={handleSaveForm}
            onBack={navigateBack}
          />
        );
      default:
        return (
          <DashboardView
            expedientes={expedientes}
            onSelectExpediente={handleSelectExpediente}
            onCreateNew={handleCreateNew}
            isLoading={isLoading}
          />
        );
    }
  };

  return <div className="p-4 md:p-8 max-w-7xl mx-auto">{renderContent()}</div>;
}

// ... (El resto de los componentes de UI se mantienen igual)

// ===============================================================
// SUB-COMPONENTES PARA VISTAS (Dashboard, Case)
// ===============================================================

function DashboardView({
  expedientes,
  onSelectExpediente,
  onCreateNew,
  isLoading,
}: {
  expedientes: Expediente[];
  onSelectExpediente: (exp: Expediente) => void;
  onCreateNew: () => void;
  isLoading: boolean;
}) {
  return (
    <div>
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-700">
          Módulo de Gestión Educativa
        </h1>
        <button
          onClick={onCreateNew}
          className="mt-4 md:mt-0 bg-[#88cfe0] text-black font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-opacity-80 transition duration-300 flex items-center"
        >
          <IconPlus /> <span className="ml-2">Crear Nuevo Expediente</span>
        </button>
      </header>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">
          Lista de Expedientes
        </h2>
        {isLoading ? (
          <p>Cargando expedientes...</p>
        ) : expedientes.length > 0 ? (
          <div className="space-y-3">
            {expedientes.map((exp) => (
              <div
                key={exp.id}
                className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition"
              >
                <div>
                  <p className="font-bold text-lg">{exp.nombre_completo}</p>
                  <p className="text-sm text-gray-500">
                    Expediente Admin:{" "}
                    <span className="font-mono">
                      {exp.expediente_administrativo}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => onSelectExpediente(exp)}
                  className="bg-[#949699] text-white font-semibold py-2 px-4 rounded-lg hover:bg-opacity-80 transition flex items-center"
                >
                  Gestionar <IconArrowRight />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No hay expedientes registrados.</p>
            <p className="text-gray-500 mt-2">
              Para comenzar, haz clic en el botón de{" "}
              <strong className="text-gray-600">Crear Nuevo Expediente</strong>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function CaseView({
  expediente,
  onSelectForm,
  onBack,
}: {
  expediente: Expediente;
  onSelectForm: (form: FormularioInfo) => void;
  onBack: () => void;
}) {
  const filledFormsIds: string[] = ["form-entrevista-inicial"]; // Simulación

  return (
    <div>
      <header className="mb-6">
        <button
          onClick={onBack}
          className="text-blue-600 hover:underline mb-4 flex items-center"
        >
          <IconArrowLeft /> <span className="ml-2">Volver al Dashboard</span>
        </button>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-2xl font-bold">{expediente.nombre_completo}</h2>
          <p className="text-md text-gray-600">
            Expediente Administrativo:{" "}
            <span className="font-mono">
              {expediente.expediente_administrativo}
            </span>
          </p>
        </div>
      </header>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Formularios y Reportes Disponibles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allForms.map((form) => {
            const isDone = filledFormsIds.includes(form.id);
            const Icon = form.icon;
            return (
              <div
                key={form.id}
                className={`border rounded-lg p-4 flex flex-col justify-between ${
                  isDone ? "bg-green-50" : ""
                }`}
              >
                <div className="flex items-start mb-4">
                  <Icon className="text-2xl mr-4 text-gray-500 mt-1" />
                  <h3 className="font-semibold text-lg">{form.title}</h3>
                </div>
                <div className="text-right">
                  <button
                    onClick={() => onSelectForm(form)}
                    className={`${
                      isDone
                        ? "bg-yellow-500 hover:bg-yellow-600"
                        : "bg-[#88cfe0] hover:bg-opacity-80"
                    } text-black font-semibold text-sm py-2 px-4 rounded-lg transition`}
                  >
                    {isDone ? "Ver/Editar" : "Llenar Formulario"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ===============================================================
// VISTA PRINCIPAL DEL FORMULARIO
// ===============================================================
function FormView({
  formInfo,
  expediente,
  onSave,
  onBack,
}: {
  formInfo: FormularioInfo;
  expediente: Expediente | null;
  onSave: (data: any) => void;
  onBack: () => void;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSave(data);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
      <header className="mb-6 border-b pb-4">
        <button
          onClick={onBack}
          className="text-blue-600 hover:underline mb-4 flex items-center text-sm"
        >
          <IconArrowLeft /> <span className="ml-2">Volver</span>
        </button>
        <h2 className="text-2xl font-bold">{formInfo.title}</h2>
        {expediente ? (
          <p className="text-md text-gray-600">
            Para: <strong>{expediente.nombre_completo}</strong>
          </p>
        ) : (
          <p className="text-md text-gray-600">
            Creando un nuevo expediente...
          </p>
        )}
      </header>

      <form onSubmit={handleSubmit}>
        {formInfo.id === "form-entrevista-inicial" && (
          <FormularioEntrevistaInicial />
        )}
        {formInfo.id === "form-informe-inicial" && (
          <FormularioInformeInicial expediente={expediente} />
        )}
        {formInfo.id === "form-entrevista-seguimiento" && (
          <FormularioEntrevistaSeguimiento expediente={expediente} />
        )}
        {formInfo.id === "form-informe-seguimiento" && (
          <FormularioInformeSeguimiento expediente={expediente} />
        )}
        {formInfo.id === "form-entrevista-cierre" && (
          <FormularioEntrevistaCierre expediente={expediente} />
        )}
        {formInfo.id === "form-informe-cierre" && (
          <FormularioInformeCierre expediente={expediente} />
        )}
        {formInfo.id === "form-informe-especial" && (
          <FormularioInformeEspecial expediente={expediente} />
        )}

        {![
          "form-entrevista-inicial",
          "form-informe-inicial",
          "form-entrevista-seguimiento",
          "form-informe-seguimiento",
          "form-entrevista-cierre",
          "form-informe-cierre",
          "form-informe-especial",
        ].includes(formInfo.id) && (
          <p className="text-center text-gray-500 mt-6">
            ... (Aquí irían los campos del formulario: {formInfo.title}) ...
          </p>
        )}

        <div className="mt-8 pt-5 border-t flex justify-end space-x-3">
          <button
            onClick={onBack}
            type="button"
            className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

// ===============================================================
// COMPONENTE DETALLADO PARA EL FORMULARIO DE ENTREVISTA INICIAL
// ===============================================================
function FormularioEntrevistaInicial() {
  const [tieneHijos, setTieneHijos] = useState<boolean | null>(null);
  const [familiares, setFamiliares] = useState<Familiar[]>([
    { id: 1, parentesco: "", edad: "", escolaridad: "", ocupacion: "" },
  ]);

  const addFamiliar = () => {
    setFamiliares([
      ...familiares,
      {
        id: Date.now(),
        parentesco: "",
        edad: "",
        escolaridad: "",
        ocupacion: "",
      },
    ]);
  };

  const removeFamiliar = (id: number) => {
    setFamiliares(familiares.filter((f) => f.id !== id));
  };

  const handleFamiliarChange = (
    id: number,
    field: keyof Omit<Familiar, "id">,
    value: string
  ) => {
    setFamiliares(
      familiares.map((f) => (f.id === id ? { ...f, [field]: value } : f))
    );
  };

  return (
    <div className="space-y-8">
      <FormSection title="Datos Generales">
        <Input label="Nombre Completo" name="nombre_completo" required />
        <Input
          label="N° Expediente Administrativo"
          name="expediente_administrativo"
        />
        <Input
          label="Fecha de Evaluación"
          name="fecha_evaluacion"
          type="date"
        />
        <Input
          label="Fecha de Nacimiento"
          name="fecha_nacimiento"
          type="date"
        />
        <Select label="Sexo" name="sexo" options={["Masculino", "Femenino"]} />
        <Input label="Edad" name="edad" type="number" min="0" />
        <Select
          label="Estado Familiar"
          name="estado_familiar"
          options={["Soltero", "Casado", "Acompañado"]}
        />
        <RadioGroup
          label="¿Tiene Hijos?"
          name="tiene_hijos"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
          onChange={(e) => setTieneHijos(e.target.value === "true")}
        />
        {tieneHijos && (
          <Input
            label="Número de Hijos"
            name="numero_hijos"
            type="number"
            min="0"
          />
        )}
        <Input label="N° Celular" name="celular" />
        <Input label="DNI" name="dni" />
        <Input label="Nacionalidad" name="nacionalidad" />
        <Input label="Departamento" name="departamento" />
        <Input label="Municipio" name="municipio" />
        <Textarea label="Dirección Completa" name="direccion" rows={3} />
        <Select
          label="Zona donde reside"
          name="zona_residencia"
          options={["Urbana", "Rural"]}
        />
        <Input label="Ocupación" name="ocupacion" />
        <Input label="Lugar de Trabajo" name="lugar_trabajo" />
        <Input label="Teléfono del Trabajo" name="telefono_trabajo" />
      </FormSection>

      <FormSection title="Datos Judiciales">
        <Input label="Juzgado que remite" name="juzgado_remite" />
        <Input label="Juez que remite" name="juez_remite" />
        <Input label="Tipo de infracción" name="tipo_infraccion" />
        <Input label="N° expediente Judicial" name="expediente_judicial" />
        <Textarea
          label="Medida Socioeducativa Impuesta"
          name="medida_socioeducativa_impuesta"
          rows={2}
        />
        <Input
          label="Tiempo de la Medida"
          name="tiempo_medida_socioeducativa"
        />
        <Input label="Nombre del CPI que Egresó" name="cpi_egreso_nombre" />
        <Input
          label="Fecha de Ingreso al CPI"
          name="cpi_fecha_ingreso"
          type="date"
        />
        <div className="grid grid-cols-3 gap-4 md:col-span-2 lg:col-span-3">
          <Input
            label="Tiempo en CPI (Años)"
            name="cpi_tiempo_estancia_anios"
            type="number"
            min="0"
          />
          <Input
            label="Tiempo en CPI (Meses)"
            name="cpi_tiempo_estancia_meses"
            type="number"
            min="0"
          />
          <Input
            label="Tiempo en CPI (Días)"
            name="cpi_tiempo_estancia_dias"
            type="number"
            min="0"
          />
        </div>
        <Input
          label="Fecha de Egreso del CPI"
          name="cpi_fecha_egreso"
          type="date"
        />
      </FormSection>

      <FormSection title="Información del Representante Legal">
        <Input label="Nombre (padre, madre u otro)" name="rep_legal_nombre" />
        <Input label="Parentesco" name="rep_legal_parentesco" />
        <Input label="DNI del Representante" name="rep_legal_dni" />
        <Input label="Profesión / Oficio" name="rep_legal_profesion_oficio" />
        <Input label="Teléfono Celular" name="rep_legal_celular" />
        <Input label="Lugar de Trabajo" name="rep_legal_lugar_trabajo" />
        <Input label="Teléfono del Trabajo" name="rep_legal_telefono_trabajo" />
        <Textarea
          label="Otros teléfonos y Observaciones"
          name="rep_legal_observaciones"
          rows={3}
        />
      </FormSection>

      <FormSection title="Educación Formal">
        <Input label="Último grado cursado" name="escolaridad" />
        <Input
          label="Año en que estudió el grado anterior"
          name="anio_estudio_grado_anterior"
          type="number"
          min="0"
        />
        <CheckboxGroup
          label="Habilidades básicas"
          options={[
            { label: "Sabe leer y escribir", name: "sabe_leer_escribir" },
            {
              label: "Sabe operaciones matemáticas",
              name: "sabe_operaciones_matematicas",
            },
          ]}
        />
        <Textarea
          label="Observaciones (Habilidades)"
          name="observaciones_estudio"
          rows={2}
        />
        <RadioGroup
          label="¿Reprobó grados?"
          name="reprobo_grados"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Qué grados reprobó?" name="grados_reprobados" />
        <Textarea
          label="Motivo de la reprobación"
          name="motivo_reprobacion"
          rows={2}
        />
        <RadioGroup
          label="¿Desertó de algún grado?"
          name="deserto_grados"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Qué grados desertó?" name="grados_desertados" />
        <Textarea
          label="Motivo de la deserción"
          name="motivo_desercion"
          rows={2}
        />
        <RadioGroup
          label="¿Estudia Actualmente?"
          name="estudia_actualmente"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Textarea
          label="Si no estudia, ¿por qué?"
          name="motivo_no_estudia"
          rows={3}
          placeholder="Falta de recursos económicos, Falta de ofertas académicas, Falta de motivación, Debe sostener su familia, Inseguridad en la zona, Otros..."
        />
        <Input label="Grado que cursa" name="grado_cursa_actualmente" />
        <Input label="Sección" name="seccion" />
        <Input label="Jornada" name="jornada" />
        <Input label="Centro Educativo" name="centro_educativo_actual" />
        <Textarea
          label="Dirección del Centro Educativo"
          name="direccion_centro_educativo"
          rows={2}
        />
        <RadioGroup
          label="¿Remitido a Orientación?"
          name="remitido_orientacion"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Textarea
          label="Motivo de remisión"
          name="motivo_remision_orientacion"
          rows={2}
        />
        <Textarea
          label="Modalidad de Media de Interés"
          name="interes_modalidad_media"
          rows={2}
          placeholder="BCH, BTP Contaduría, BTP Informática..."
        />
        <Input
          label="Carrera Universitaria de Interés"
          name="interes_carrera_universitaria"
        />
        <Textarea
          label="Observaciones Generales (Educación Formal)"
          name="observaciones_educacion_formal"
          rows={3}
        />
      </FormSection>

      <FormSection title="Entorno Educativo">
        <RadioGroup
          label="¿Hay centro educativo en su comunidad?"
          name="entorno_hay_centro"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input
          label="Tipo de Programa Educativo"
          name="entorno_tipo_programa"
          placeholder="Ordinario, SEMED, Educatodos, Nocturna..."
        />
        <Input label="Distancia/Tiempo de traslado" name="entorno_distancia" />
        <Input
          label="Medio de movilización"
          name="entorno_medio_movilizacion"
          placeholder="Caminando, Bus, Mototaxi..."
        />
        <Textarea
          label="Observaciones (Entorno)"
          name="entorno_observaciones"
          rows={3}
        />
      </FormSection>

      <FormSection title="Apoyo Educativo en el Hogar">
        <ApoyoHogarInput
          pregunta="Al momento que se presenta una dificultad en alguna tarea ¿cuentas con el apoyo para poder elaborarla?"
          name="apoyo_hogar_dificultad_tarea"
        />
        <ApoyoHogarInput
          pregunta="Los padres o responsable revisan si le dejaron tarea"
          name="apoyo_hogar_revisan_tarea"
        />
        <ApoyoHogarInput
          pregunta="Los padres o responsable asisten periódicamente para supervisar su rendimiento escolar"
          name="apoyo_hogar_supervisan_rendimiento"
        />
        <ApoyoHogarInput
          pregunta="Los padres o responsable asisten cuando se le hace una convocatoria en el centro educativo"
          name="apoyo_hogar_asisten_convocatoria"
        />
        <Input
          label="¿Quién está más pendiente de sus estudios?"
          name="apoyo_hogar_quien_pendiente"
        />
        <Textarea
          label="Observaciones (Apoyo Hogar)"
          name="apoyo_hogar_observaciones"
          rows={3}
        />
      </FormSection>

      <FormSection title="Nivel Educativo en la Familia">
        <div className="col-span-full space-y-4">
          {familiares.map((familiar, index) => (
            <div
              key={familiar.id}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end p-3 border rounded-md bg-gray-50"
            >
              <Input
                label="Parentesco"
                name={`familiar_${index}_parentesco`}
                value={familiar.parentesco}
                onChange={(e) =>
                  handleFamiliarChange(
                    familiar.id,
                    "parentesco",
                    e.target.value
                  )
                }
                noBg
              />
              <Input
                label="Edad"
                name={`familiar_${index}_edad`}
                type="number"
                min="0"
                value={familiar.edad}
                onChange={(e) =>
                  handleFamiliarChange(familiar.id, "edad", e.target.value)
                }
                noBg
              />
              <Input
                label="Escolaridad"
                name={`familiar_${index}_escolaridad`}
                value={familiar.escolaridad}
                onChange={(e) =>
                  handleFamiliarChange(
                    familiar.id,
                    "escolaridad",
                    e.target.value
                  )
                }
                noBg
              />
              <Input
                label="Ocupación"
                name={`familiar_${index}_ocupacion`}
                value={familiar.ocupacion}
                onChange={(e) =>
                  handleFamiliarChange(familiar.id, "ocupacion", e.target.value)
                }
                noBg
              />
              <button
                type="button"
                onClick={() => removeFamiliar(familiar.id)}
                className="bg-[#db473c] text-white p-2 rounded-md hover:bg-opacity-80 h-10 flex items-center justify-center"
              >
                <IconTrash />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addFamiliar}
            className="bg-blue-100 text-blue-800 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 transition"
          >
            + Añadir Familiar
          </button>
        </div>
      </FormSection>

      <FormSection title="Educación No Formal">
        <RadioGroup
          label="¿Sabe algún oficio?"
          name="oficio_sabe_alguno"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Cuál?" name="oficio_cual" />
        <Textarea
          label="¿Cómo lo aprendió?"
          name="oficio_como_aprendio"
          rows={2}
        />
        <RadioGroup
          label="¿Ha trabajado de ese oficio?"
          name="oficio_ha_trabajado"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Dónde?" name="oficio_donde_trabajo" />
        <RadioGroup
          label="¿Tiene certificados?"
          name="oficio_tiene_certificados"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <RadioGroup
          label="¿Le gustaría perfeccionar el oficio?"
          name="oficio_quiere_perfeccionar"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Cómo?" name="oficio_como_perfeccionar" />
        <RadioGroup
          label="¿Le gustaría aprender un nuevo oficio?"
          name="oficio_quiere_aprender_nuevo"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Cuál?" name="oficio_cual_nuevo" />
        <RadioGroup
          label="¿Ha participado en cursos antes?"
          name="oficio_participo_cursos_antes"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Cuáles?" name="oficio_cuales_cursos_antes" />
        <Textarea
          label="Talleres o Cursos en los que Participó en el CPI"
          name="oficio_cursos_cpi"
          rows={2}
        />
        <RadioGroup
          label="¿Cuenta con diplomas del CPI?"
          name="oficio_tiene_diplomas_cpi"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Cuáles?" name="oficio_cuales_diplomas_cpi" />
        <RadioGroup
          label="¿Le gustaría participar en un curso?"
          name="oficio_quiere_participar_curso"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Cuál?" name="oficio_cual_curso_gustaria" />
        <Textarea
          label="Observaciones (Educación No Formal)"
          name="observaciones_educacion_no_formal"
          rows={3}
        />
      </FormSection>

      <FormSection title="Habilidades y Destrezas">
        <RadioGroup
          label="¿Cuenta con algún talento?"
          name="talento_tiene"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Cuál?" name="talento_cual" />
        <RadioGroup
          label="¿Ha trabajado de ese talento?"
          name="talento_ha_trabajado"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Dónde?" name="talento_donde_trabajo" />
        <Textarea
          label="¿Cómo aprendió ese talento?"
          name="talento_como_aprendio"
          rows={2}
        />
        <RadioGroup
          label="¿Le gustaría desarrollar más talentos?"
          name="talento_quiere_desarrolar"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Cómo?" name="talento_como_desarrollar" />
        <RadioGroup
          label="¿Le gustaría perfeccionar sus talentos?"
          name="talento_quiere_perfeccionar"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Cuál?" name="talento_cual_perfeccionar" />
        <RadioGroup
          label="¿Le gustaría trabajar de sus talentos?"
          name="talento_quiere_trabajar"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input label="¿Dónde?" name="talento_donde_trabajar" />
        <Textarea
          label="Observaciones (Habilidades y Destrezas)"
          name="observaciones_habilidades"
          rows={3}
        />
      </FormSection>

      <FormSection title="Entorno Social">
        <EntornoSocialInput
          pregunta="¿Tiene amigos?"
          name="entorno_social_amigos"
        />
        <EntornoSocialInput
          pregunta="¿Tiene novio(a)/Pareja?"
          name="entorno_social_pareja"
        />
        <EntornoSocialInput
          pregunta="¿Practica algún deporte?"
          name="entorno_social_deporte"
        />
        <EntornoSocialInput
          pregunta="¿Participa en grupo juvenil?"
          name="entorno_social_grupo_juvenil"
        />
        <EntornoSocialInput
          pregunta="¿Asiste a la iglesia?"
          name="entorno_social_iglesia"
        />
        <EntornoSocialInput
          pregunta="¿Tiene pasatiempos específicos?"
          name="entorno_social_pasatiempos"
        />
      </FormSection>

      <FormSection title="Salud y Condición Física (Consumo de Sustancias)">
        <RadioGroup
          label="¿Consumía drogas antes de este proceso?"
          name="consumia_drogas_antes"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <Input
          label="¿A qué edad tuvo el primer contacto?"
          name="edad_primer_contacto_drogas"
          type="number"
          min="0"
        />
        <RadioGroup
          label="¿Consume actualmente?"
          name="consume_drogas_actualmente"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <div className="col-span-full mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Marque las sustancias que consume y su frecuencia:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SustanciaInput nombre="Alcohol" name="sustancia_alcohol" />
            <SustanciaInput nombre="Tabaco" name="sustancia_tabaco" />
            <SustanciaInput nombre="Marihuana" name="sustancia_marihuana" />
            <SustanciaInput nombre="Cocaína" name="sustancia_cocaina" />
            <SustanciaInput nombre="Crack" name="sustancia_crack" />
            <SustanciaInput nombre="Heroína" name="sustancia_heroina" />
            <SustanciaInput nombre="Resistol" name="sustancia_resistol" />
            <SustanciaInput nombre="Tiner" name="sustancia_tiner" />
            <SustanciaInput nombre="Pastillas" name="sustancia_pastillas" />
          </div>
        </div>
        <Textarea
          label="Observaciones (Salud)"
          name="observaciones_salud"
          rows={3}
        />
      </FormSection>

      <FormSection title="Diagnóstico y Cierre">
        <Textarea
          label="Diagnóstico Educativo"
          name="diagnostico_educativo"
          rows={4}
        />
        <Textarea label="Pronóstico" name="pronostico" rows={4} />
        <Textarea label="Recomendaciones" name="recomendaciones" rows={4} />
        <Input label="Nombre del Pedagogo" name="nombre_pedagogo" />
      </FormSection>
    </div>
  );
}

// ===============================================================
// COMPONENTE DETALLADO PARA EL FORMULARIO DE INFORME INICIAL
// ===============================================================
function FormularioInformeInicial({
  expediente,
}: {
  expediente: Expediente | null;
}) {
  return (
    <div className="space-y-8">
      <FormSection title="Datos Generales (Referencia)">
        <DisplayField
          label="Nombre Completo"
          value={expediente?.nombre_completo}
        />
        <DisplayField
          label="Expediente Administrativo"
          value={expediente?.expediente_administrativo}
        />
        <DisplayField
          label="Fecha de Nacimiento"
          value={expediente?.fecha_nacimiento}
        />
        <DisplayField label="Sexo" value={expediente?.sexo} />
        <DisplayField label="Edad" value={expediente?.edad?.toString()} />
        <DisplayField
          label="Estado Familiar"
          value={expediente?.estado_familiar}
        />
        <DisplayField label="Celular" value={expediente?.celular} />
        <DisplayField label="DNI" value={expediente?.dni} />
        <DisplayField label="Ocupación" value={expediente?.ocupacion} />
        <DisplayField
          label="Representante Legal"
          value={expediente?.rep_legal_nombre}
        />
        <DisplayField
          label="Parentesco"
          value={expediente?.rep_legal_parentesco}
        />
      </FormSection>

      <FormSection title="Datos Judiciales (Referencia)">
        <DisplayField
          label="Juzgado que remite"
          value={expediente?.juzgado_remite}
        />
        <DisplayField label="Juez que remite" value={expediente?.juez_remite} />
        <DisplayField
          label="Tipo de Infracción"
          value={expediente?.tipo_infraccion}
        />
        <DisplayField
          label="Expediente Judicial"
          value={expediente?.expediente_judicial}
        />
        <DisplayField
          label="Medida Socioeducativa"
          value={expediente?.medida_socioeducativa_impuesta}
        />
        <DisplayField
          label="Tiempo de la Medida"
          value={expediente?.tiempo_medida_socioeducativa}
        />
      </FormSection>

      <FormSection title="Elaboración del Informe">
        <Input
          label="Fecha de Elaboración"
          name="fecha_elaboracion"
          type="date"
        />
      </FormSection>

      <FormSection title="Análisis y Conclusiones">
        <Textarea
          label="SITUACIÓN ÁREA DE EDUCACIÓN FORMAL"
          name="situacion_educacion_formal"
          rows={6}
        />
        <Textarea
          label="SITUACIÓN ÁREA DE EDUCACIÓN NO FORMAL"
          name="situacion_educacion_no_formal"
          rows={6}
        />
        <Textarea
          label="SITUACIÓN EDUCATIVA FAMILIAR Y SOCIAL"
          name="situacion_educativa_familiar_social"
          rows={6}
        />
        <Textarea
          label="VALORACIÓN TÉCNICA"
          name="valoracion_tecnica"
          rows={6}
        />
        <Textarea label="PRONÓSTICO" name="pronostico" rows={6} />
        <Textarea label="RECOMENDACIONES" name="recomendaciones" rows={6} />
      </FormSection>

      <FormSection title="Firma">
        <Input label="Nombre del Pedagogo" name="nombre_pedagogo" />
      </FormSection>
    </div>
  );
}

// ===============================================================
// COMPONENTE DETALLADO PARA FORMULARIO DE ENTREVISTA DE SEGUIMIENTO
// ===============================================================
function FormularioEntrevistaSeguimiento({
  expediente,
}: {
  expediente: Expediente | null;
}) {
  const [asisteCentroEducativo, setAsisteCentroEducativo] = useState<
    boolean | null
  >(null);
  const [estaLaborando, setEstaLaborando] = useState<boolean | null>(null);
  const [laboroAnteriormente, setLaboroAnteriormente] = useState<
    boolean | null
  >(null);

  return (
    <div className="space-y-8">
      <FormSection title="Datos de Referencia">
        <DisplayField
          label="Nombre Completo"
          value={expediente?.nombre_completo}
        />
        <DisplayField label="Edad" value={expediente?.edad?.toString()} />
        <DisplayField
          label="Expediente Administrativo"
          value={expediente?.expediente_administrativo}
        />
        <DisplayField
          label="Expediente Judicial"
          value={expediente?.expediente_judicial}
        />
        <Input
          label="Fecha de Elaboración"
          name="fecha_elaboracion"
          type="date"
        />
      </FormSection>

      <FormSection title="Avances en el Área de Educación Formal">
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          <RadioGroup
            label="Asiste a un centro educativo:"
            name="asiste_centro_educativo"
            options={[
              { label: "Sí", value: "true" },
              { label: "No", value: "false" },
            ]}
            onChange={(e) =>
              setAsisteCentroEducativo(e.target.value === "true")
            }
          />
          {asisteCentroEducativo === false && (
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Observación / Si no Estudia:
              </label>
              <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2">
                <Checkbox
                  label="Rezago Escolar"
                  name="motivo_no_estudia_rezago"
                />
                <Checkbox
                  label="Desmotivación"
                  name="motivo_no_estudia_desmotivacion"
                />
                <Checkbox
                  label="Riesgo Social"
                  name="motivo_no_estudia_riesgo"
                />
                <Checkbox
                  label="Poca oferta educativa"
                  name="motivo_no_estudia_oferta"
                />
                <Checkbox
                  label="Prioridad al trabajo"
                  name="motivo_no_estudia_trabajo"
                />
                <Checkbox
                  label="Tiene familia"
                  name="motivo_no_estudia_familia"
                />
                <Checkbox
                  label="Problemas de Salud"
                  name="motivo_no_estudia_salud"
                />
                <Checkbox
                  label="Bajos Rec. Económicos"
                  name="motivo_no_estudia_recursos"
                />
              </div>
            </div>
          )}
        </div>
        <Textarea
          label="Observaciones (Educación Formal)"
          name="observaciones_educacion_formal"
          rows={4}
        />
        <Input
          label="Nombre del Centro Educativo"
          name="nombre_centro_educativo"
        />
        <Input
          label="Ubicación del Centro Educativo"
          name="ubicacion_centro_educativo"
        />
        <Input label="Grado" name="grado" />
        <Input label="Jornada" name="jornada" />
        <Input label="Parcial" name="parcial" />
        <Input label="Semestre" name="semestre" />
        <RadioGroup
          label="Presenta sus tareas y estudia a diario"
          name="presenta_tareas"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <RadioGroup
            label="Tiene dificultad en alguna asignatura"
            name="tiene_dificultad"
            options={[
              { label: "Sí", value: "true" },
              { label: "No", value: "false" },
            ]}
          />
          <Input label="¿Cuál?" name="dificultad_asignatura_cual" />
        </div>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <RadioGroup
            label="Ha reprobado alguna asignatura"
            name="ha_reprobado"
            options={[
              { label: "Sí", value: "true" },
              { label: "No", value: "false" },
            ]}
          />
          <Input label="¿Cuál?" name="reprobado_asignatura_cual" />
        </div>
        <Select
          label="Relación con los docentes y compañeros"
          name="relacion_docentes_companeros"
          options={[
            "Muy Mala",
            "Mala",
            "Regular",
            "Buena",
            "Muy buena",
            "Excelente",
          ]}
        />
        <Select
          label="Conducta del/la NNAJ en los últimos meses"
          name="conducta_ultimos_meses"
          options={[
            "Muy Mala",
            "Mala",
            "Regular",
            "Buena",
            "Muy buena",
            "Excelente",
          ]}
        />
      </FormSection>

      <FormSection title="Avances en el Área de Educación No Formal">
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <RadioGroup
            label="Está participando en algún curso"
            name="participa_curso"
            options={[
              { label: "Sí", value: "true" },
              { label: "No", value: "false" },
            ]}
          />
          <Input
            label="Curso en el que participa"
            name="curso_participa_nombre"
          />
        </div>
        <Input label="Nombre de la Institución" name="curso_institucion" />
        <Input label="Duración del Curso" name="curso_duracion" />
        <Input label="Fecha Inicial" name="curso_fecha_inicial" type="date" />
        <Input label="Fecha Final" name="curso_fecha_final" type="date" />
        <Input
          label="Horario que asiste"
          name="curso_horario"
          placeholder="Ej: L-V 8am-12pm"
        />
        <Select
          label="Relación con el instructor y compañeros"
          name="relacion_instructor_companeros"
          options={[
            "Muy Mala",
            "Mala",
            "Regular",
            "Buena",
            "Muy buena",
            "Excelente",
          ]}
        />
        <Textarea
          label="¿Qué habilidades ha adquirido en el curso?"
          name="habilidades_adquiridas_curso"
          rows={3}
        />
      </FormSection>

      <FormSection title="Avance en el Área Laboral">
        <RadioGroup
          label="Se encuentra laborando"
          name="esta_laborando"
          options={[
            { label: "Sí", value: "true" },
            { label: "No", value: "false" },
          ]}
          onChange={(e) => {
            const isWorking = e.target.value === "true";
            setEstaLaborando(isWorking);
            if (isWorking) {
              setLaboroAnteriormente(null); // Reset previous work state if currently working
            }
          }}
        />
        {estaLaborando && (
          <>
            <Select
              label="Tipo de Empleo"
              name="laboral_tipo_empleo"
              options={["Formal", "No formal"]}
            />
            <Input
              label="Cantidad que gana"
              name="laboral_salario"
              type="number"
              min="0"
            />
            <Select
              label="Frecuencia de Pago"
              name="laboral_frecuencia_pago"
              options={["Diaria", "Semanal", "Quincenal", "Mensual"]}
            />
            <div className="md:col-span-3 grid grid-cols-4 gap-2">
              <Input
                label="Años laborando"
                name="laboral_tiempo_anios"
                type="number"
                min="0"
              />
              <Input
                label="Meses"
                name="laboral_tiempo_meses"
                type="number"
                min="0"
              />
              <Input
                label="Semanas"
                name="laboral_tiempo_semanas"
                type="number"
                min="0"
              />
              <Input
                label="Días"
                name="laboral_tiempo_dias"
                type="number"
                min="0"
              />
            </div>
            <Input label="Horario que tiene" name="laboral_horario" />
            <Input label="Nombre de la empresa" name="laboral_empresa" />
            <Input label="Cargo que desempeña" name="laboral_cargo" />
            <Input label="Ubicación donde trabaja" name="laboral_ubicacion" />
            <Input label="Nombre jefe inmediato" name="laboral_jefe" />
            <Input label="N° de teléfono (Jefe)" name="laboral_jefe_telefono" />
            <RadioGroup
              label="¿En el trabajo, saben de su proceso Judicial actual?"
              name="laboral_saben_proceso"
              options={[
                { label: "Sí", value: "true" },
                { label: "No", value: "false" },
              ]}
            />
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                ¿Como Administra los ingresos devengados?
              </label>
              <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                <Checkbox label="Aporte al hogar" name="admin_ingresos_hogar" />
                <Checkbox
                  label="Gastos de Alimentación"
                  name="admin_ingresos_alimentacion"
                />
                <Checkbox
                  label="Gastos para higiene personal"
                  name="admin_ingresos_higiene"
                />
                <Checkbox
                  label="Gastos de transporte"
                  name="admin_ingresos_transporte"
                />
                <Checkbox
                  label="Pago de alquiler"
                  name="admin_ingresos_alquiler"
                />
                <Checkbox
                  label="Sustento de hijos/as"
                  name="admin_ingresos_hijos"
                />
                <Checkbox
                  label="Gastos para estudios"
                  name="admin_ingresos_estudios"
                />
                <Checkbox
                  label="Apoyo estudios hermanos/as"
                  name="admin_ingresos_hermanos"
                />
                <Checkbox
                  label="Medicamentos"
                  name="admin_ingresos_medicamentos"
                />
              </div>
            </div>
          </>
        )}
        {estaLaborando === false && (
          <div className="md:col-span-3 mt-4 pt-4 border-t border-gray-200">
            <RadioGroup
              label="¿Anteriormente estuvo laborando?"
              name="laboro_anteriormente"
              options={[
                { label: "Sí", value: "true" },
                { label: "No", value: "false" },
              ]}
              onChange={(e) =>
                setLaboroAnteriormente(e.target.value === "true")
              }
            />
            {laboroAnteriormente && (
              <div className="mt-4 space-y-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 bg-gray-50 p-4 rounded-lg">
                <Input
                  label="Nombre de la empresa que laboró"
                  name="anterior_empresa"
                />
                <Input label="Cargo que desempeñó" name="anterior_cargo" />
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Motivo por el cual dejó de laborar:
                  </label>
                  <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                    <Checkbox
                      label="Fin de contrato"
                      name="motivo_fin_contrato"
                    />
                    <Checkbox
                      label="Mejor oportunidad"
                      name="motivo_mejor_oportunidad"
                    />
                    <Checkbox
                      label="Dificultades en trabajo"
                      name="motivo_dificultades"
                    />
                    <Checkbox label="Falta de Pago" name="motivo_falta_pago" />
                    <Checkbox
                      label="Problemas personales"
                      name="motivo_problemas_personales"
                    />
                    <Checkbox label="Amenazas" name="motivo_amenazas" />
                    <Checkbox
                      label="Problemas de salud"
                      name="motivo_problemas_salud"
                    />
                    <Checkbox
                      label="Mala relación"
                      name="motivo_mala_relacion"
                    />
                    <Checkbox label="Por estudios" name="motivo_por_estudios" />
                    <Checkbox
                      label="Desmotivación"
                      name="motivo_desmotivacion"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </FormSection>

      <FormSection title="Cierre">
        <Textarea
          label="Obstáculos Presentados en el Proceso"
          name="obstaculos_proceso"
          rows={5}
        />
        <Textarea
          label="Observaciones Generales"
          name="observaciones_generales"
          rows={5}
        />
        <Input label="Nombre del Pedagogo" name="nombre_pedagogo" />
      </FormSection>
    </div>
  );
}

// ===============================================================
// COMPONENTE DETALLADO PARA EL FORMULARIO DE INFORME DE SEGUIMIENTO
// ===============================================================
function FormularioInformeSeguimiento({
  expediente,
}: {
  expediente: Expediente | null;
}) {
  return (
    <div className="space-y-8">
      <FormSection title="Datos Generales (Referencia)">
        <DisplayField
          label="Nombre Completo"
          value={expediente?.nombre_completo}
        />
        <DisplayField label="Edad" value={expediente?.edad?.toString()} />
        <DisplayField
          label="Expediente Administrativo"
          value={expediente?.expediente_administrativo}
        />
        <DisplayField
          label="Expediente Judicial"
          value={expediente?.expediente_judicial}
        />
      </FormSection>

      <FormSection title="Elaboración del Informe">
        <Input
          label="Fecha de Elaboración"
          name="fecha_elaboracion"
          type="date"
        />
      </FormSection>

      <FormSection title="Análisis y Avances">
        <Textarea
          label="AVANCES ÁREA DE EDUCACIÓN FORMAL"
          name="avances_educacion_formal"
          rows={5}
        />
        <Textarea
          label="AVANCES ÁREA DE EDUCACIÓN NO FORMAL"
          name="avances_educacion_no_formal"
          rows={5}
        />
        <Textarea
          label="AVANCES ÁREA LABORAL"
          name="avances_area_laboral"
          rows={5}
        />
        <Textarea
          label="OBSTACULOS PRESENTADOS EN EL PROCESO"
          name="obstaculos_proceso"
          rows={5}
        />
        <Textarea label="CONCLUSIONES" name="conclusiones" rows={5} />
      </FormSection>

      <FormSection title="Anexo: Verificación de Matrícula (SACE)">
        <Input label="Centro" name="sace_centro" />
        <Input label="Periodo" name="sace_periodo" />
        <Input label="Modalidad" name="sace_modalidad" />
        <Input label="Grado" name="sace_grado" />
        <Input label="Jornada" name="sace_jornada" />
        <Input label="Sección" name="sace_seccion" />
        <Input label="Estado" name="sace_estado" />
        <Input
          label="Fecha de Verificación"
          name="sace_fecha_verificacion"
          type="date"
        />
        <Textarea
          label="Observaciones de Matrícula"
          name="sace_observaciones"
          rows={4}
        />
        <div className="md:col-span-3 bg-blue-50 p-4 rounded-lg border border-blue-200 text-sm text-gray-700">
          <p className="font-semibold mb-2">NOTA INFORMATIVA</p>
          <p>
            Mediante la verificación en el Sistema Administrativo de Centros
            Educativos (SACE), se constata la matrícula del joven. Este anexo no
            es un documento oficial, el cual solo puede ser emitido por la
            Secretaría de Educación. Los datos reflejados se encuentran en el
            SACE y se presentan para efectos de agilizar los informes de
            avances.
          </p>
        </div>
      </FormSection>

      <FormSection title="Firma">
        <Input label="Nombre del Pedagogo" name="nombre_pedagogo" />
      </FormSection>
    </div>
  );
}

// ===============================================================
// COMPONENTE DETALLADO PARA EL FORMULARIO DE ENTREVISTA DE CIERRE
// ===============================================================
function FormularioEntrevistaCierre({
  expediente,
}: {
  expediente: Expediente | null;
}) {
  return (
    <div className="space-y-8">
      <FormSection title="Datos de Referencia">
        <DisplayField
          label="Nombre Completo"
          value={expediente?.nombre_completo}
        />
        <DisplayField
          label="Expediente Administrativo"
          value={expediente?.expediente_administrativo}
        />
        <Input
          label="Fecha de Elaboración"
          name="fecha_elaboracion"
          type="date"
        />
      </FormSection>
      <FormSection title="Cierre del Proceso">
        <Textarea
          label="Resumen de logros y avances durante el proceso."
          name="resumen_logros"
          rows={6}
        />
        <Textarea
          label="Situación actual del NNAJ (Educativa, Laboral, Familiar)."
          name="situacion_actual"
          rows={6}
        />
        <Textarea
          label="Recomendaciones finales."
          name="recomendaciones_finales"
          rows={6}
        />
      </FormSection>
      <FormSection title="Firma">
        <Input label="Nombre del Pedagogo" name="nombre_pedagogo" />
      </FormSection>
    </div>
  );
}

// ===============================================================
// COMPONENTE DETALLADO PARA EL FORMULARIO DE INFORME DE CIERRE
// ===============================================================
function FormularioInformeCierre({
  expediente,
}: {
  expediente: Expediente | null;
}) {
  return (
    <div className="space-y-8">
      <FormSection title="Datos Generales (Referencia)">
        <DisplayField
          label="Nombre Completo"
          value={expediente?.nombre_completo}
        />
        <DisplayField label="Edad" value={expediente?.edad?.toString()} />
        <DisplayField
          label="Expediente Administrativo"
          value={expediente?.expediente_administrativo}
        />
        <DisplayField
          label="Expediente Judicial"
          value={expediente?.expediente_judicial}
        />
      </FormSection>

      <FormSection title="Elaboración del Informe">
        <Input
          label="Fecha de Elaboración"
          name="fecha_elaboracion"
          type="date"
        />
      </FormSection>

      <FormSection title="Logros y Valoración">
        <Textarea
          label="LOGROS OBTENIDOS EN EL ÁREA DE EDUCACIÓN FORMAL"
          name="logros_educacion_formal"
          rows={6}
        />
        <Textarea
          label="LOGROS OBTENIDOS EN EL ÁREA DE EDUCACIÓN NO FORMAL"
          name="logros_educacion_no_formal"
          rows={6}
        />
        <Textarea
          label="SITUACIÓN LABORAL ACTUAL"
          name="situacion_laboral_actual"
          rows={6}
        />
        <Textarea
          label="VALORACIÓN TÉCNICA"
          name="valoracion_tecnica"
          rows={6}
        />
      </FormSection>

      <FormSection title="Firma">
        <Input label="Nombre del Pedagogo" name="nombre_pedagogo" />
      </FormSection>
    </div>
  );
}

// ===============================================================
// COMPONENTE DETALLADO PARA EL FORMULARIO DE INFORME ESPECIAL
// ===============================================================
function FormularioInformeEspecial({
  expediente,
}: {
  expediente: Expediente | null;
}) {
  return (
    <div className="space-y-8">
      <FormSection title="Datos Generales">
        <DisplayField
          label="Nombre del NNAJ"
          value={expediente?.nombre_completo}
        />
        <DisplayField label="Edad" value={expediente?.edad?.toString()} />
        <DisplayField
          label="Número de Expediente Administrativo"
          value={expediente?.expediente_administrativo}
        />
        <Input label="Fecha de Ingreso" name="fecha_ingreso" type="date" />
        <Input
          label="Fecha de Elaboración"
          name="fecha_elaboracion"
          type="date"
        />
      </FormSection>

      <FormSection title="Informe">
        <Textarea
          label="SITUACIÓN EDUCATIVA"
          name="situacion_educativa"
          rows={10}
        />
      </FormSection>

      <FormSection title="Firma">
        <Input label="Nombre del Pedagogo" name="nombre_pedagogo" />
      </FormSection>
    </div>
  );
}

// ===============================================================
// COMPONENTES AUXILIARES PARA FORMULARIOS (Helpers)
// ===============================================================
const FormSection: React.FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => (
  <fieldset className="border border-gray-300 p-4 rounded-lg">
    <legend className="text-lg font-semibold px-2 text-gray-700">
      {title}
    </legend>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
      {children}
    </div>
  </fieldset>
);

const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    noBg?: boolean;
  }
> = ({ label, name, type = "text", noBg = false, ...props }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      {...props}
      className={`mt-1 block w-full rounded-lg border border-gray-400 px-3 py-2 shadow-sm focus:border-[#88cfe0] focus:ring focus:ring-[#88cfe0] focus:ring-opacity-50 sm:text-sm ${
        noBg ? "bg-white" : "bg-gray-100"
      }`}
    />
  </div>
);

const Textarea: React.FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }
> = ({ label, name, ...props }) => (
  <div className="md:col-span-3">
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <textarea
      name={name}
      id={name}
      {...props}
      className="mt-1 block w-full rounded-lg border border-gray-400 px-3 py-2 shadow-sm focus:border-[#88cfe0] focus:ring focus:ring-[#88cfe0] focus:ring-opacity-50 sm:text-sm bg-gray-100"
    />
  </div>
);

const Select: React.FC<
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    options: string[];
  }
> = ({ label, name, options, ...props }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <select
      name={name}
      id={name}
      {...props}
      className="mt-1 block w-full rounded-lg border border-gray-400 px-3 py-2 shadow-sm focus:border-[#88cfe0] focus:ring focus:ring-[#88cfe0] focus:ring-opacity-50 sm:text-sm bg-gray-100"
    >
      <option value="">Seleccione...</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const RadioGroup: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    options: { label: string; value: string }[];
  }
> = ({ label, name, options, ...props }) => (
  <div className="md:col-span-1">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="mt-2 flex space-x-4">
      {options.map((opt) => (
        <div key={opt.value} className="flex items-center">
          <input
            id={`${name}-${opt.value}`}
            name={name}
            value={opt.value}
            type="radio"
            {...props}
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
          />
          <label
            htmlFor={`${name}-${opt.value}`}
            className="ml-2 block text-sm text-gray-900"
          >
            {opt.label}
          </label>
        </div>
      ))}
    </div>
  </div>
);

const Checkbox: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & { label: string }
> = ({ label, name, ...props }) => (
  <div className="flex items-center">
    <input
      id={name}
      name={name}
      type="checkbox"
      {...props}
      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
    />
    <label htmlFor={name} className="ml-2 block text-sm text-gray-900">
      {label}
    </label>
  </div>
);

const CheckboxGroup: React.FC<{
  label: string;
  options: { label: string; name: string }[];
}> = ({ label, options }) => (
  <div className="md:col-span-1">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="mt-2 flex space-x-4">
      {options.map((opt) => (
        <div key={opt.name} className="flex items-center">
          <input
            id={opt.name}
            name={opt.name}
            type="checkbox"
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label
            htmlFor={opt.name}
            className="ml-2 block text-sm text-gray-900"
          >
            {opt.label}
          </label>
        </div>
      ))}
    </div>
  </div>
);

const SustanciaInput: React.FC<{ nombre: string; name: string }> = ({
  nombre,
  name,
}) => (
  <div className="flex items-center space-x-2 border p-2 rounded-lg bg-gray-50">
    <input
      id={name}
      name={`${name}_consume`}
      type="checkbox"
      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
    />
    <label htmlFor={name} className="flex-grow text-sm text-gray-900">
      {nombre}
    </label>
    <input
      type="text"
      name={`${name}_frecuencia`}
      placeholder="Frecuencia"
      className="block w-1/2 rounded-md border-gray-400 border focus:border-[#88cfe0] focus:ring focus:ring-[#88cfe0] focus:ring-opacity-50 sm:text-sm text-xs p-1 bg-gray-100"
    />
  </div>
);

const ApoyoHogarInput: React.FC<{ pregunta: string; name: string }> = ({
  pregunta,
  name,
}) => (
  <div className="md:col-span-3 border-t pt-4">
    <label className="block text-sm font-medium text-gray-700">
      {pregunta}
    </label>
    <div className="mt-2 flex space-x-4">
      <div className="flex items-center">
        <input
          id={`${name}-si`}
          name={name}
          value="si"
          type="radio"
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
        />
        <label
          htmlFor={`${name}-si`}
          className="ml-2 block text-sm text-gray-900"
        >
          Sí
        </label>
      </div>
      <div className="flex items-center">
        <input
          id={`${name}-no`}
          name={name}
          value="no"
          type="radio"
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
        />
        <label
          htmlFor={`${name}-no`}
          className="ml-2 block text-sm text-gray-900"
        >
          No
        </label>
      </div>
      <div className="flex items-center">
        <input
          id={`${name}-aveces`}
          name={name}
          value="aveces"
          type="radio"
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
        />
        <label
          htmlFor={`${name}-aveces`}
          className="ml-2 block text-sm text-gray-900"
        >
          A veces
        </label>
      </div>
    </div>
  </div>
);

const EntornoSocialInput: React.FC<{ pregunta: string; name: string }> = ({
  pregunta,
  name,
}) => (
  <div className="md:col-span-3 grid grid-cols-3 gap-4 items-center border-t pt-4">
    <label className="block text-sm font-medium text-gray-700 col-span-1">
      {pregunta}
    </label>
    <div className="flex space-x-4 col-span-1">
      <div className="flex items-center">
        <input
          id={`${name}-si`}
          name={`${name}_respuesta`}
          value="si"
          type="radio"
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
        />
        <label
          htmlFor={`${name}-si`}
          className="ml-2 block text-sm text-gray-900"
        >
          Sí
        </label>
      </div>
      <div className="flex items-center">
        <input
          id={`${name}-no`}
          name={`${name}_respuesta`}
          value="no"
          type="radio"
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
        />
        <label
          htmlFor={`${name}-no`}
          className="ml-2 block text-sm text-gray-900"
        >
          No
        </label>
      </div>
    </div>
    <Input label="Tiempo que dedica" name={`${name}_tiempo`} noBg />
  </div>
);

const DisplayField: React.FC<{
  label: string;
  value: string | undefined | null;
}> = ({ label, value }) => (
  <div>
    <p className="block text-sm font-medium text-gray-700 mb-1">{label}</p>
    <p className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 text-gray-600 sm:text-sm">
      {value || "No disponible"}
    </p>
  </div>
);
