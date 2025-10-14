import React from 'react';
import { Expediente, FormularioInfo } from '@/types/educacion';
import { IconArrowLeft } from '@/components/educacion/ui/Icons';
import FormularioEntrevistaInicial from '@/components/educacion/forms/FormularioEntrevistaInicial';
import FormularioInformeInicial from '@/components/educacion/forms/FormularioInformeInicial';
import FormularioEntrevistaSeguimiento from '@/components/educacion/forms/FormularioEntrevistaSeguimiento';
import FormularioInformeSeguimiento from '@/components/educacion/forms/FormularioInformeSeguimiento';
import FormularioInformeCierre from '@/components/educacion/forms/FormularioInformeCierre';
import FormularioInformeEspecial from '@/components/educacion/forms/FormularioInformeEspecial';

interface FormViewProps {
    formInfo: FormularioInfo;
    expediente: Expediente | null;
    onSave: (data: any) => void;
    onBack: () => void;
}

export default function FormView({ formInfo, expediente, onSave, onBack }: FormViewProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        onSave(data);
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <header className="mb-6 border-b pb-4">
                <button onClick={onBack} className="text-blue-600 hover:underline mb-4 flex items-center text-sm">
                    <IconArrowLeft /> <span className="ml-2">Volver</span>
                </button>
                <h2 className="text-2xl font-bold">{formInfo.title}</h2>
                {expediente ? <p className="text-md text-gray-600">Para: <strong>{expediente.nombre_completo}</strong></p> : <p className="text-md text-gray-600">Creando un nuevo expediente...</p>}
            </header>
            
            <form onSubmit={handleSubmit}>
                {formInfo.id === 'form-entrevista-inicial' && <FormularioEntrevistaInicial />}
                {formInfo.id === 'form-informe-inicial' && <FormularioInformeInicial expediente={expediente}/>}
                {formInfo.id === 'form-entrevista-seguimiento' && <FormularioEntrevistaSeguimiento expediente={expediente} />}
                {formInfo.id === 'form-informe-seguimiento' && <FormularioInformeSeguimiento expediente={expediente} />}
                {formInfo.id === 'form-informe-cierre' && <FormularioInformeCierre expediente={expediente} />}
                {formInfo.id === 'form-informe-especial' && <FormularioInformeEspecial expediente={expediente} />}
                
                {![
                    'form-entrevista-inicial',
                    'form-informe-inicial',
                    'form-entrevista-seguimiento',
                    'form-informe-seguimiento',
                    'form-informe-cierre',
                    'form-informe-especial'
                ].includes(formInfo.id) && <p className="text-center text-gray-500 mt-6">... (Aquí irían los campos del formulario: {formInfo.title}) ...</p>}
                
                <div className="mt-8 pt-5 border-t flex justify-end space-x-3">
                    <button onClick={onBack} type="button" className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition">Cancelar</button>
                    <button type="submit" className="bg-green-600 text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:bg-green-700 transition">Guardar</button>
                </div>
            </form>
        </div>
    );
}