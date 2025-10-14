export type Expediente = {
    id: string; 
    nombre_completo: string;
    expediente_administrativo: string;
    [key: string]: any; // Permite campos adicionales para autocompletar
};

export type FormularioInfo = {
    id: string;
    title: string;
    icon: React.ComponentType<any>;
    tableName: string;
};

export type Familiar = {
    id: number;
    parentesco: string;
    edad: string;
    escolaridad: string;
    ocupacion: string;
}
