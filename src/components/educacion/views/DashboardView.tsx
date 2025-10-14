import React from 'react';

// Tipos - Idealmente, estos estarían en un archivo de tipos compartido
type Expediente = {
    id: string; 
    nombre_completo: string;
    expediente_administrativo: string;
    [key: string]: any;
};

// Iconos - Idealmente, estos estarían en un archivo de iconos compartido
const IconPlus = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>;
const IconArrowRight = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;
const IconWifi = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L10 14.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>;

interface DashboardViewProps {
    expedientes: Expediente[];
    onSelectExpediente: (exp: Expediente) => void;
    onCreateNew: () => void;
    isLoading: boolean;
    onTestConnection: () => void;
    isTestingConnection: boolean;
}

export default function DashboardView({ expedientes, onSelectExpediente, onCreateNew, isLoading, onTestConnection, isTestingConnection }: DashboardViewProps) {
    return (
        <div>
            <header className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-700">Módulo de Gestión Educativa</h1>
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                    <button onClick={onTestConnection} disabled={isTestingConnection} className="bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center disabled:opacity-50">
                        <IconWifi /> <span className="ml-2">{isTestingConnection ? 'Probando...' : 'Probar Conexión'}</span>
                    </button>
                    <button onClick={onCreateNew} className="bg-[#88cfe0] text-black font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-opacity-80 transition duration-300 flex items-center">
                        <IconPlus /> <span className="ml-2">Crear Nuevo Expediente</span>
                    </button>
                </div>
            </header>
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Lista de Expedientes</h2>
                {isLoading ? (
                    <p>Cargando expedientes...</p>
                ) : expedientes.length > 0 ? (
                    <div className="space-y-3">
                        {expedientes.map(exp => (
                            <div key={exp.id} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition">
                                <div>
                                    <p className="font-bold text-lg">{exp.nombre_completo}</p>
                                    <p className="text-sm text-gray-500">Expediente Admin: <span className="font-mono">{exp.expediente_administrativo}</span></p>
                                </div>
                                <button onClick={() => onSelectExpediente(exp)} className="bg-[#949699] text-white font-semibold py-2 px-4 rounded-lg hover:bg-opacity-80 transition flex items-center">
                                    Gestionar <IconArrowRight />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-500">No hay expedientes registrados.</p>
                        <p className="text-gray-500 mt-2">
                            Para comenzar, haz clic en el botón de{' '}
                            <strong className="text-gray-600">Crear Nuevo Expediente</strong>.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}