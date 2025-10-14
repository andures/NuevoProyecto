import React from 'react';
import { Expediente, FormularioInfo } from '@/types/educacion';
import { IconArrowLeft } from '@/components/educacion/ui/Icons';

interface CaseViewProps {
    expediente: Expediente;
    onSelectForm: (form: FormularioInfo) => void;
    onBack: () => void;
    allForms: FormularioInfo[];
}

export default function CaseView({ expediente, onSelectForm, onBack, allForms }: CaseViewProps) {
    // En una implementación real, aquí consultarías en Supabase qué formularios ya tienen datos
    // para este 'expediente.id' y poblarías 'filledFormsIds' dinámicamente.
    const filledFormsIds: string[] = ['form-entrevista-inicial']; // Simulación

    return (
        <div>
            <header className="mb-6">
                <button onClick={onBack} className="text-blue-600 hover:underline mb-4 flex items-center">
                    <IconArrowLeft /> <span className="ml-2">Volver al Dashboard</span>
                </button>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-2xl font-bold">{expediente.nombre_completo}</h2>
                    <p className="text-md text-gray-600">Expediente Administrativo: <span className="font-mono">{expediente.expediente_administrativo}</span></p>
                </div>
            </header>
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Formularios y Reportes Disponibles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {allForms.map(form => {
                        const isDone = filledFormsIds.includes(form.id);
                        const Icon = form.icon;
                        return (
                            <div key={form.id} className={`border rounded-lg p-4 flex flex-col justify-between ${isDone ? 'bg-green-50' : ''}`}>
                                <div className="flex items-start mb-4">
                                    <Icon className="text-2xl mr-4 text-gray-500 mt-1" />
                                    <h3 className="font-semibold text-lg">{form.title}</h3>
                                </div>
                                <div className="text-right">
                                    <button onClick={() => onSelectForm(form)} className={`${isDone ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-[#88cfe0] hover:bg-opacity-80'} text-black font-semibold text-sm py-2 px-4 rounded-lg transition`}>
                                        {isDone ? 'Ver/Editar' : 'Llenar Formulario'}
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