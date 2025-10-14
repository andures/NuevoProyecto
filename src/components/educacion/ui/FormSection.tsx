import React, { ReactNode } from 'react';

export const FormSection: React.FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
    <fieldset className="border border-gray-300 p-4 rounded-lg">
        <legend className="text-lg font-semibold px-2 text-gray-700">{title}</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
            {children}
        </div>
    </fieldset>
);

export default FormSection;