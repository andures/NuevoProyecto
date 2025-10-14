(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/dashboard/educacion/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ModuloEducacionPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client'; // Directiva necesaria en Next.js App Router para componentes con interactividad
;
// ===============================================================
// ICONOS SVG (Sin dependencias externas)
// ===============================================================
const IconPlus = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
            lineNumber: 8,
            columnNumber: 124
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 8,
        columnNumber: 24
    }, this);
_c = IconPlus;
const IconArrowRight = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
            lineNumber: 9,
            columnNumber: 130
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 9,
        columnNumber: 30
    }, this);
_c1 = IconArrowRight;
const IconArrowLeft = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
            lineNumber: 10,
            columnNumber: 129
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 10,
        columnNumber: 29
    }, this);
_c2 = IconArrowLeft;
const IconQuestionCircle = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.546-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
            lineNumber: 11,
            columnNumber: 148
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 11,
        columnNumber: 34
    }, this);
_c3 = IconQuestionCircle;
const IconFileSignature = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
            lineNumber: 12,
            columnNumber: 147
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 12,
        columnNumber: 33
    }, this);
_c4 = IconFileSignature;
const IconChalkboardTeacher = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M16 4v12l-4-2-4 2V4M6 20h12M6 4h12v12H6z"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
            lineNumber: 13,
            columnNumber: 151
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 13,
        columnNumber: 37
    }, this);
_c5 = IconChalkboardTeacher;
const IconChartLine = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
            lineNumber: 14,
            columnNumber: 143
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 14,
        columnNumber: 29
    }, this);
_c6 = IconChartLine;
const IconFlagCheckered = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12zM4 15v6m0-6H2m2 0h2"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
            lineNumber: 15,
            columnNumber: 147
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 15,
        columnNumber: 33
    }, this);
_c7 = IconFlagCheckered;
const IconFileInvoice = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M17 9v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2m10 0H7"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
            lineNumber: 16,
            columnNumber: 145
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 16,
        columnNumber: 31
    }, this);
_c8 = IconFileInvoice;
const IconStarOfLife = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 11.25l-3.25 6.25-6.25-3.25L8.75 12 2.5 8.75l6.25-3.25L12 11.25zM12 11.25l3.25-6.25 6.25 3.25L15.25 12l6.25 3.25-6.25 3.25L12 11.25z"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
            lineNumber: 17,
            columnNumber: 144
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 17,
        columnNumber: 30
    }, this);
_c9 = IconStarOfLife;
const IconTrash = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
            lineNumber: 18,
            columnNumber: 125
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 18,
        columnNumber: 25
    }, this);
_c10 = IconTrash;
// ===============================================================
// DATOS CONSTANTES
// ===============================================================
const allForms = [
    {
        id: 'form-entrevista-inicial',
        title: '1. Entrevista Inicial Educativa',
        icon: IconQuestionCircle,
        tableName: 'entrevistas'
    },
    {
        id: 'form-informe-inicial',
        title: '2. Informe Inicial Educativo',
        icon: IconFileSignature,
        tableName: 'informes_iniciales'
    },
    {
        id: 'form-entrevista-seguimiento',
        title: '3. Entrevista de Seguimiento',
        icon: IconChalkboardTeacher,
        tableName: 'entrevistas_seguimiento'
    },
    {
        id: 'form-informe-seguimiento',
        title: '4. Informe de Seguimiento',
        icon: IconChartLine,
        tableName: 'informes_seguimiento'
    },
    {
        id: 'form-entrevista-cierre',
        title: '5. Entrevista de Cierre',
        icon: IconFlagCheckered,
        tableName: 'entrevistas_cierre'
    },
    {
        id: 'form-informe-cierre',
        title: '6. Informe de Cierre',
        icon: IconFileInvoice,
        tableName: 'informes_cierre'
    },
    {
        id: 'form-informe-especial',
        title: '7. Informe Especial',
        icon: IconStarOfLife,
        tableName: 'informes_especiales'
    }
];
function ModuloEducacionPage() {
    _s();
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [expedientes, setExpedientes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedExpediente, setSelectedExpediente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedForm, setSelectedForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuloEducacionPage.useEffect": ()=>{
            const fetchExpedientes = {
                "ModuloEducacionPage.useEffect.fetchExpedientes": async ()=>{
                    setIsLoading(true);
                    // *** AQUÍ VA LA LLAMADA A SUPABASE PARA OBTENER LOS EXPEDIENTES ***
                    // Ejemplo:
                    // const { data, error } = await supabase.from('expedientes').select('*');
                    // if (error) console.error('Error fetching expedientes:', error);
                    // else setExpedientes(data || []);
                    // Por ahora, iniciamos con una lista vacía hasta conectar Supabase.
                    setExpedientes([]);
                    setIsLoading(false);
                }
            }["ModuloEducacionPage.useEffect.fetchExpedientes"];
            fetchExpedientes();
        }
    }["ModuloEducacionPage.useEffect"], []);
    const handleSelectExpediente = (expediente)=>{
        setSelectedExpediente(expediente);
        setCurrentView('case');
    };
    const handleSelectForm = (formInfo)=>{
        setSelectedForm(formInfo);
        setCurrentView('form');
    };
    const handleCreateNew = ()=>{
        setSelectedExpediente(null);
        // Lleva directamente al primer formulario para crear un nuevo expediente
        handleSelectForm(allForms[0]);
    };
    const navigateBack = ()=>{
        if (currentView === 'form') {
            setCurrentView(selectedExpediente ? 'case' : 'dashboard');
        } else if (currentView === 'case') {
            setCurrentView('dashboard');
        }
    };
    const handleSaveForm = async (formData)=>{
        if (!selectedForm) return;
        console.log(`Simulando guardado en tabla: ${selectedForm.tableName}`, formData);
        alert('¡Datos guardados con éxito! (Simulación)');
        navigateBack();
    };
    const renderContent = ()=>{
        switch(currentView){
            case 'case':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CaseView, {
                    expediente: selectedExpediente,
                    onSelectForm: handleSelectForm,
                    onBack: navigateBack
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                    lineNumber: 120,
                    columnNumber: 24
                }, this);
            case 'form':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormView, {
                    formInfo: selectedForm,
                    expediente: selectedExpediente,
                    onSave: handleSaveForm,
                    onBack: navigateBack
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                    lineNumber: 122,
                    columnNumber: 24
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardView, {
                    expedientes: expedientes,
                    onSelectExpediente: handleSelectExpediente,
                    onCreateNew: handleCreateNew,
                    isLoading: isLoading
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                    lineNumber: 124,
                    columnNumber: 24
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 md:p-8 max-w-7xl mx-auto",
        children: renderContent()
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 128,
        columnNumber: 12
    }, this);
}
_s(ModuloEducacionPage, "0oGcKQNfCxTa0mKbJPJHYMxHGYM=");
_c11 = ModuloEducacionPage;
// ===============================================================
// SUB-COMPONENTES PARA VISTAS (Dashboard, Case)
// ===============================================================
function DashboardView({ expedientes, onSelectExpediente, onCreateNew, isLoading }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col md:flex-row justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-700",
                        children: "Módulo de Gestión Educativa"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCreateNew,
                        className: "mt-4 md:mt-0 bg-[#88cfe0] text-black font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-opacity-80 transition duration-300 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPlus, {}, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2",
                                children: "Crear Nuevo Expediente"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 141,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-xl shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4 border-b pb-2",
                        children: "Lista de Expedientes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 145,
                        columnNumber: 17
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Cargando expedientes..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 147,
                        columnNumber: 21
                    }, this) : expedientes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: expedientes.map((exp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-lg",
                                                children: exp.nombre_completo
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    "Expediente Admin: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono",
                                                        children: exp.expediente_administrativo
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 92
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onSelectExpediente(exp),
                                        className: "bg-[#949699] text-white font-semibold py-2 px-4 rounded-lg hover:bg-opacity-80 transition flex items-center",
                                        children: [
                                            "Gestionar ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconArrowRight, {}, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 47
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, exp.id, true, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 151,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 149,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "No hay expedientes registrados."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 164,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 mt-2",
                                children: [
                                    "Para comenzar, haz clic en el botón de",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-gray-600",
                                        children: "Crear Nuevo Expediente"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 29
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 165,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 163,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 137,
        columnNumber: 9
    }, this);
}
_c12 = DashboardView;
function CaseView({ expediente, onSelectForm, onBack }) {
    // En una implementación real, aquí consultarías en Supabase qué formularios ya tienen datos
    // para este 'expediente.id' y poblarías 'filledFormsIds' dinámicamente.
    const filledFormsIds = [
        'form-entrevista-inicial'
    ]; // Simulación
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "text-blue-600 hover:underline mb-4 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconArrowLeft, {}, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 185,
                                columnNumber: 21
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2",
                                children: "Volver al Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 185,
                                columnNumber: 39
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-lg shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold",
                                children: expediente.nombre_completo
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 188,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-md text-gray-600",
                                children: [
                                    "Expediente Administrativo: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: expediente.expediente_administrativo
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 85
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 189,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 187,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-xl shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: "Formularios y Reportes Disponibles"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 193,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
                        children: allForms.map((form)=>{
                            const isDone = filledFormsIds.includes(form.id);
                            const Icon = form.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border rounded-lg p-4 flex flex-col justify-between ${isDone ? 'bg-green-50' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "text-2xl mr-4 text-gray-500 mt-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-lg",
                                                children: form.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onSelectForm(form),
                                            className: `${isDone ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-[#88cfe0] hover:bg-opacity-80'} text-black font-semibold text-sm py-2 px-4 rounded-lg transition`,
                                            children: isDone ? 'Ver/Editar' : 'Llenar Formulario'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, form.id, true, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 199,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 194,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 192,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 182,
        columnNumber: 9
    }, this);
}
_c13 = CaseView;
// ===============================================================
// VISTA PRINCIPAL DEL FORMULARIO
// ===============================================================
function FormView({ formInfo, expediente, onSave, onBack }) {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        onSave(data);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 md:p-8 rounded-xl shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-6 border-b pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "text-blue-600 hover:underline mb-4 flex items-center text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconArrowLeft, {}, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 233,
                                columnNumber: 21
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2",
                                children: "Volver"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 233,
                                columnNumber: 39
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 232,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: formInfo.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 235,
                        columnNumber: 17
                    }, this),
                    expediente ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-md text-gray-600",
                        children: [
                            "Para: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: expediente.nombre_completo
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 236,
                                columnNumber: 74
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 236,
                        columnNumber: 31
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-md text-gray-600",
                        children: "Creando un nuevo expediente..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 236,
                        columnNumber: 126
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 231,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    formInfo.id === 'form-entrevista-inicial' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormularioEntrevistaInicial, {}, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 240,
                        columnNumber: 63
                    }, this),
                    formInfo.id === 'form-informe-inicial' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormularioInformeInicial, {
                        expediente: expediente
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 241,
                        columnNumber: 60
                    }, this),
                    formInfo.id === 'form-entrevista-seguimiento' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormularioEntrevistaSeguimiento, {
                        expediente: expediente
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 242,
                        columnNumber: 67
                    }, this),
                    formInfo.id === 'form-informe-seguimiento' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormularioInformeSeguimiento, {
                        expediente: expediente
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 243,
                        columnNumber: 64
                    }, this),
                    formInfo.id === 'form-entrevista-cierre' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormularioEntrevistaCierre, {
                        expediente: expediente
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 244,
                        columnNumber: 62
                    }, this),
                    formInfo.id === 'form-informe-cierre' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormularioInformeCierre, {
                        expediente: expediente
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 245,
                        columnNumber: 59
                    }, this),
                    formInfo.id === 'form-informe-especial' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormularioInformeEspecial, {
                        expediente: expediente
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 246,
                        columnNumber: 61
                    }, this),
                    ![
                        'form-entrevista-inicial',
                        'form-informe-inicial',
                        'form-entrevista-seguimiento',
                        'form-informe-seguimiento',
                        'form-entrevista-cierre',
                        'form-informe-cierre',
                        'form-informe-especial'
                    ].includes(formInfo.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-500 mt-6",
                        children: [
                            "... (Aquí irían los campos del formulario: ",
                            formInfo.title,
                            ") ..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 256,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 pt-5 border-t flex justify-end space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                type: "button",
                                className: "bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition",
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 259,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "bg-green-600 text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:bg-green-700 transition",
                                children: "Guardar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 260,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 258,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 239,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 230,
        columnNumber: 9
    }, this);
}
_c14 = FormView;
// ===============================================================
// COMPONENTE DETALLADO PARA EL FORMULARIO DE ENTREVISTA INICIAL
// ===============================================================
function FormularioEntrevistaInicial() {
    _s1();
    const [tieneHijos, setTieneHijos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [familiares, setFamiliares] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            parentesco: '',
            edad: '',
            escolaridad: '',
            ocupacion: ''
        }
    ]);
    const addFamiliar = ()=>{
        setFamiliares([
            ...familiares,
            {
                id: Date.now(),
                parentesco: '',
                edad: '',
                escolaridad: '',
                ocupacion: ''
            }
        ]);
    };
    const removeFamiliar = (id)=>{
        setFamiliares(familiares.filter((f)=>f.id !== id));
    };
    const handleFamiliarChange = (id, field, value)=>{
        setFamiliares(familiares.map((f)=>f.id === id ? {
                ...f,
                [field]: value
            } : f));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Datos Generales",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Nombre Completo",
                        name: "nombre_completo",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 289,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "N° Expediente Administrativo",
                        name: "expediente_administrativo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 290,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Fecha de Evaluación",
                        name: "fecha_evaluacion",
                        type: "date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 291,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Fecha de Nacimiento",
                        name: "fecha_nacimiento",
                        type: "date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 292,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                        label: "Sexo",
                        name: "sexo",
                        options: [
                            'Masculino',
                            'Femenino'
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 293,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Edad",
                        name: "edad",
                        type: "number",
                        min: "0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 294,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                        label: "Estado Familiar",
                        name: "estado_familiar",
                        options: [
                            'Soltero',
                            'Casado',
                            'Acompañado'
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 295,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Tiene Hijos?",
                        name: "tiene_hijos",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ],
                        onChange: (e)=>setTieneHijos(e.target.value === 'true')
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 296,
                        columnNumber: 17
                    }, this),
                    tieneHijos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Número de Hijos",
                        name: "numero_hijos",
                        type: "number",
                        min: "0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 297,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "N° Celular",
                        name: "celular"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 298,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "DNI",
                        name: "dni"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 299,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Nacionalidad",
                        name: "nacionalidad"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 300,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Departamento",
                        name: "departamento"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 301,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Municipio",
                        name: "municipio"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 302,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Dirección Completa",
                        name: "direccion",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 303,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                        label: "Zona donde reside",
                        name: "zona_residencia",
                        options: [
                            'Urbana',
                            'Rural'
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 304,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Ocupación",
                        name: "ocupacion"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 305,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Lugar de Trabajo",
                        name: "lugar_trabajo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 306,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Teléfono del Trabajo",
                        name: "telefono_trabajo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 307,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 288,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Datos Judiciales",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Juzgado que remite",
                        name: "juzgado_remite"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 311,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Juez que remite",
                        name: "juez_remite"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 312,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Tipo de infracción",
                        name: "tipo_infraccion"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 313,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "N° expediente Judicial",
                        name: "expediente_judicial"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 314,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Medida Socioeducativa Impuesta",
                        name: "medida_socioeducativa_impuesta",
                        rows: 2
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 315,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Tiempo de la Medida",
                        name: "tiempo_medida_socioeducativa"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 316,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Nombre del CPI que Egresó",
                        name: "cpi_egreso_nombre"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 317,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Fecha de Ingreso al CPI",
                        name: "cpi_fecha_ingreso",
                        type: "date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 318,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-4 md:col-span-2 lg:col-span-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Tiempo en CPI (Años)",
                                name: "cpi_tiempo_estancia_anios",
                                type: "number",
                                min: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 320,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Tiempo en CPI (Meses)",
                                name: "cpi_tiempo_estancia_meses",
                                type: "number",
                                min: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 321,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Tiempo en CPI (Días)",
                                name: "cpi_tiempo_estancia_dias",
                                type: "number",
                                min: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 322,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 319,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Fecha de Egreso del CPI",
                        name: "cpi_fecha_egreso",
                        type: "date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 324,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 310,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Información del Representante Legal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Nombre (padre, madre u otro)",
                        name: "rep_legal_nombre"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 328,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Parentesco",
                        name: "rep_legal_parentesco"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 329,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "DNI del Representante",
                        name: "rep_legal_dni"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 330,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Profesión / Oficio",
                        name: "rep_legal_profesion_oficio"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 331,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Teléfono Celular",
                        name: "rep_legal_celular"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 332,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Lugar de Trabajo",
                        name: "rep_legal_lugar_trabajo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 333,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Teléfono del Trabajo",
                        name: "rep_legal_telefono_trabajo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 334,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Otros teléfonos y Observaciones",
                        name: "rep_legal_observaciones",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 335,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 327,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Educación Formal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Último grado cursado",
                        name: "escolaridad"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 339,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Año en que estudió el grado anterior",
                        name: "anio_estudio_grado_anterior",
                        type: "number",
                        min: "0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 340,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxGroup, {
                        label: "Habilidades básicas",
                        options: [
                            {
                                label: 'Sabe leer y escribir',
                                name: 'sabe_leer_escribir'
                            },
                            {
                                label: 'Sabe operaciones matemáticas',
                                name: 'sabe_operaciones_matematicas'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 341,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Observaciones (Habilidades)",
                        name: "observaciones_estudio",
                        rows: 2
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 342,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Reprobó grados?",
                        name: "reprobo_grados",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 343,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Qué grados reprobó?",
                        name: "grados_reprobados"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 344,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Motivo de la reprobación",
                        name: "motivo_reprobacion",
                        rows: 2
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 345,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Desertó de algún grado?",
                        name: "deserto_grados",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 346,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Qué grados desertó?",
                        name: "grados_desertados"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 347,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Motivo de la deserción",
                        name: "motivo_desercion",
                        rows: 2
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 348,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Estudia Actualmente?",
                        name: "estudia_actualmente",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 349,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Si no estudia, ¿por qué?",
                        name: "motivo_no_estudia",
                        rows: 3,
                        placeholder: "Falta de recursos económicos, Falta de ofertas académicas, Falta de motivación, Debe sostener su familia, Inseguridad en la zona, Otros..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 350,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Grado que cursa",
                        name: "grado_cursa_actualmente"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 351,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Sección",
                        name: "seccion"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 352,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Jornada",
                        name: "jornada"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 353,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Centro Educativo",
                        name: "centro_educativo_actual"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 354,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Dirección del Centro Educativo",
                        name: "direccion_centro_educativo",
                        rows: 2
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 355,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Remitido a Orientación?",
                        name: "remitido_orientacion",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 356,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Motivo de remisión",
                        name: "motivo_remision_orientacion",
                        rows: 2
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 357,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Modalidad de Media de Interés",
                        name: "interes_modalidad_media",
                        rows: 2,
                        placeholder: "BCH, BTP Contaduría, BTP Informática..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 358,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Carrera Universitaria de Interés",
                        name: "interes_carrera_universitaria"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 359,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Observaciones Generales (Educación Formal)",
                        name: "observaciones_educacion_formal",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 360,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 338,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Entorno Educativo",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Hay centro educativo en su comunidad?",
                        name: "entorno_hay_centro",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 364,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Tipo de Programa Educativo",
                        name: "entorno_tipo_programa",
                        placeholder: "Ordinario, SEMED, Educatodos, Nocturna..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 365,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Distancia/Tiempo de traslado",
                        name: "entorno_distancia"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 366,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Medio de movilización",
                        name: "entorno_medio_movilizacion",
                        placeholder: "Caminando, Bus, Mototaxi..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 367,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Observaciones (Entorno)",
                        name: "entorno_observaciones",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 368,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 363,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Apoyo Educativo en el Hogar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ApoyoHogarInput, {
                        pregunta: "Al momento que se presenta una dificultad en alguna tarea ¿cuentas con el apoyo para poder elaborarla?",
                        name: "apoyo_hogar_dificultad_tarea"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 372,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ApoyoHogarInput, {
                        pregunta: "Los padres o responsable revisan si le dejaron tarea",
                        name: "apoyo_hogar_revisan_tarea"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 373,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ApoyoHogarInput, {
                        pregunta: "Los padres o responsable asisten periódicamente para supervisar su rendimiento escolar",
                        name: "apoyo_hogar_supervisan_rendimiento"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 374,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ApoyoHogarInput, {
                        pregunta: "Los padres o responsable asisten cuando se le hace una convocatoria en el centro educativo",
                        name: "apoyo_hogar_asisten_convocatoria"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 375,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Quién está más pendiente de sus estudios?",
                        name: "apoyo_hogar_quien_pendiente"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 376,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Observaciones (Apoyo Hogar)",
                        name: "apoyo_hogar_observaciones",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 377,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 371,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Nivel Educativo en la Familia",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-full space-y-4",
                    children: [
                        familiares.map((familiar, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-5 gap-4 items-end p-3 border rounded-md bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        label: "Parentesco",
                                        name: `familiar_${index}_parentesco`,
                                        value: familiar.parentesco,
                                        onChange: (e)=>handleFamiliarChange(familiar.id, 'parentesco', e.target.value),
                                        noBg: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 384,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        label: "Edad",
                                        name: `familiar_${index}_edad`,
                                        type: "number",
                                        min: "0",
                                        value: familiar.edad,
                                        onChange: (e)=>handleFamiliarChange(familiar.id, 'edad', e.target.value),
                                        noBg: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        label: "Escolaridad",
                                        name: `familiar_${index}_escolaridad`,
                                        value: familiar.escolaridad,
                                        onChange: (e)=>handleFamiliarChange(familiar.id, 'escolaridad', e.target.value),
                                        noBg: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        label: "Ocupación",
                                        name: `familiar_${index}_ocupacion`,
                                        value: familiar.ocupacion,
                                        onChange: (e)=>handleFamiliarChange(familiar.id, 'ocupacion', e.target.value),
                                        noBg: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 387,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>removeFamiliar(familiar.id),
                                        className: "bg-[#db473c] text-white p-2 rounded-md hover:bg-opacity-80 h-10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTrash, {}, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 388,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, familiar.id, true, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 383,
                                columnNumber: 25
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: addFamiliar,
                            className: "bg-blue-100 text-blue-800 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 transition",
                            children: "+ Añadir Familiar"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                            lineNumber: 393,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                    lineNumber: 381,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 380,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Educación No Formal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Sabe algún oficio?",
                        name: "oficio_sabe_alguno",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 400,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Cuál?",
                        name: "oficio_cual"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 401,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "¿Cómo lo aprendió?",
                        name: "oficio_como_aprendio",
                        rows: 2
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 402,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Ha trabajado de ese oficio?",
                        name: "oficio_ha_trabajado",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 403,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Dónde?",
                        name: "oficio_donde_trabajo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 404,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Tiene certificados?",
                        name: "oficio_tiene_certificados",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 405,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Le gustaría perfeccionar el oficio?",
                        name: "oficio_quiere_perfeccionar",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 406,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Cómo?",
                        name: "oficio_como_perfeccionar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 407,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Le gustaría aprender un nuevo oficio?",
                        name: "oficio_quiere_aprender_nuevo",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 408,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Cuál?",
                        name: "oficio_cual_nuevo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 409,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Ha participado en cursos antes?",
                        name: "oficio_participo_cursos_antes",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 410,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Cuáles?",
                        name: "oficio_cuales_cursos_antes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 411,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Talleres o Cursos en los que Participó en el CPI",
                        name: "oficio_cursos_cpi",
                        rows: 2
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 412,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Cuenta con diplomas del CPI?",
                        name: "oficio_tiene_diplomas_cpi",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                'value': 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 413,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Cuáles?",
                        name: "oficio_cuales_diplomas_cpi"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 414,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Le gustaría participar en un curso?",
                        name: "oficio_quiere_participar_curso",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 415,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Cuál?",
                        name: "oficio_cual_curso_gustaria"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 416,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Observaciones (Educación No Formal)",
                        name: "observaciones_educacion_no_formal",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 417,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 399,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Habilidades y Destrezas",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Cuenta con algún talento?",
                        name: "talento_tiene",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 421,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Cuál?",
                        name: "talento_cual"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 422,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Ha trabajado de ese talento?",
                        name: "talento_ha_trabajado",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 423,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Dónde?",
                        name: "talento_donde_trabajo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 424,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "¿Cómo aprendió ese talento?",
                        name: "talento_como_aprendio",
                        rows: 2
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 425,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Le gustaría desarrollar más talentos?",
                        name: "talento_quiere_desarrolar",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 426,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Cómo?",
                        name: "talento_como_desarrollar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 427,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Le gustaría perfeccionar sus talentos?",
                        name: "talento_quiere_perfeccionar",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 428,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Cuál?",
                        name: "talento_cual_perfeccionar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 429,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Le gustaría trabajar de sus talentos?",
                        name: "talento_quiere_trabajar",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 430,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿Dónde?",
                        name: "talento_donde_trabajar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 431,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Observaciones (Habilidades y Destrezas)",
                        name: "observaciones_habilidades",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 432,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 420,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Entorno Social",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntornoSocialInput, {
                        pregunta: "¿Tiene amigos?",
                        name: "entorno_social_amigos"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 436,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntornoSocialInput, {
                        pregunta: "¿Tiene novio(a)/Pareja?",
                        name: "entorno_social_pareja"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 437,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntornoSocialInput, {
                        pregunta: "¿Practica algún deporte?",
                        name: "entorno_social_deporte"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 438,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntornoSocialInput, {
                        pregunta: "¿Participa en grupo juvenil?",
                        name: "entorno_social_grupo_juvenil"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 439,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntornoSocialInput, {
                        pregunta: "¿Asiste a la iglesia?",
                        name: "entorno_social_iglesia"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 440,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntornoSocialInput, {
                        pregunta: "¿Tiene pasatiempos específicos?",
                        name: "entorno_social_pasatiempos"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 441,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 435,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Salud y Condición Física (Consumo de Sustancias)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Consumía drogas antes de este proceso?",
                        name: "consumia_drogas_antes",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 445,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "¿A qué edad tuvo el primer contacto?",
                        name: "edad_primer_contacto_drogas",
                        type: "number",
                        min: "0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 446,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "¿Consume actualmente?",
                        name: "consume_drogas_actualmente",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 447,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-full mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Marque las sustancias que consume y su frecuencia:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 449,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SustanciaInput, {
                                        nombre: "Alcohol",
                                        name: "sustancia_alcohol"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SustanciaInput, {
                                        nombre: "Tabaco",
                                        name: "sustancia_tabaco"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 452,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SustanciaInput, {
                                        nombre: "Marihuana",
                                        name: "sustancia_marihuana"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SustanciaInput, {
                                        nombre: "Cocaína",
                                        name: "sustancia_cocaina"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 454,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SustanciaInput, {
                                        nombre: "Crack",
                                        name: "sustancia_crack"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SustanciaInput, {
                                        nombre: "Heroína",
                                        name: "sustancia_heroina"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SustanciaInput, {
                                        nombre: "Resistol",
                                        name: "sustancia_resistol"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 457,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SustanciaInput, {
                                        nombre: "Tiner",
                                        name: "sustancia_tiner"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SustanciaInput, {
                                        nombre: "Pastillas",
                                        name: "sustancia_pastillas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 450,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 448,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Observaciones (Salud)",
                        name: "observaciones_salud",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 462,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 444,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Diagnóstico y Cierre",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Diagnóstico Educativo",
                        name: "diagnostico_educativo",
                        rows: 4
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 466,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Pronóstico",
                        name: "pronostico",
                        rows: 4
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 467,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Recomendaciones",
                        name: "recomendaciones",
                        rows: 4
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 468,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Nombre del Pedagogo",
                        name: "nombre_pedagogo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 469,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 465,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 287,
        columnNumber: 9
    }, this);
}
_s1(FormularioEntrevistaInicial, "eIfNqEaN5kUI5o3vpRjtmnsQIHs=");
_c15 = FormularioEntrevistaInicial;
// ===============================================================
// COMPONENTE DETALLADO PARA EL FORMULARIO DE INFORME INICIAL
// ===============================================================
function FormularioInformeInicial({ expediente }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Datos Generales (Referencia)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Nombre Completo",
                        value: expediente?.nombre_completo
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 482,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Expediente Administrativo",
                        value: expediente?.expediente_administrativo
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 483,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Fecha de Nacimiento",
                        value: expediente?.fecha_nacimiento
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 484,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Sexo",
                        value: expediente?.sexo
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 485,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Edad",
                        value: expediente?.edad?.toString()
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 486,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Estado Familiar",
                        value: expediente?.estado_familiar
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 487,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Celular",
                        value: expediente?.celular
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 488,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "DNI",
                        value: expediente?.dni
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 489,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Ocupación",
                        value: expediente?.ocupacion
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 490,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Representante Legal",
                        value: expediente?.rep_legal_nombre
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 491,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Parentesco",
                        value: expediente?.rep_legal_parentesco
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 492,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 481,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Datos Judiciales (Referencia)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Juzgado que remite",
                        value: expediente?.juzgado_remite
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 496,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Juez que remite",
                        value: expediente?.juez_remite
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 497,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Tipo de Infracción",
                        value: expediente?.tipo_infraccion
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 498,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Expediente Judicial",
                        value: expediente?.expediente_judicial
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 499,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Medida Socioeducativa",
                        value: expediente?.medida_socioeducativa_impuesta
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 500,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Tiempo de la Medida",
                        value: expediente?.tiempo_medida_socioeducativa
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 501,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 495,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Elaboración del Informe",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    label: "Fecha de Elaboración",
                    name: "fecha_elaboracion",
                    type: "date"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                    lineNumber: 505,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 504,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Análisis y Conclusiones",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "SITUACIÓN ÁREA DE EDUCACIÓN FORMAL",
                        name: "situacion_educacion_formal",
                        rows: 6
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 509,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "SITUACIÓN ÁREA DE EDUCACIÓN NO FORMAL",
                        name: "situacion_educacion_no_formal",
                        rows: 6
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 510,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "SITUACIÓN EDUCATIVA FAMILIAR Y SOCIAL",
                        name: "situacion_educativa_familiar_social",
                        rows: 6
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 511,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "VALORACIÓN TÉCNICA",
                        name: "valoracion_tecnica",
                        rows: 6
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 512,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "PRONÓSTICO",
                        name: "pronostico",
                        rows: 6
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 513,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "RECOMENDACIONES",
                        name: "recomendaciones",
                        rows: 6
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 514,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 508,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Firma",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    label: "Nombre del Pedagogo",
                    name: "nombre_pedagogo"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                    lineNumber: 518,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 517,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 480,
        columnNumber: 9
    }, this);
}
_c16 = FormularioInformeInicial;
// ===============================================================
// COMPONENTE DETALLADO PARA FORMULARIO DE ENTREVISTA DE SEGUIMIENTO
// ===============================================================
function FormularioEntrevistaSeguimiento({ expediente }) {
    _s2();
    const [asisteCentroEducativo, setAsisteCentroEducativo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [estaLaborando, setEstaLaborando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [laboroAnteriormente, setLaboroAnteriormente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Datos de Referencia",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Nombre Completo",
                        value: expediente?.nombre_completo
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 535,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Edad",
                        value: expediente?.edad?.toString()
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 536,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Expediente Administrativo",
                        value: expediente?.expediente_administrativo
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 537,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Expediente Judicial",
                        value: expediente?.expediente_judicial
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 538,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Fecha de Elaboración",
                        name: "fecha_elaboracion",
                        type: "date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 539,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 534,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Avances en el Área de Educación Formal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                                label: "Asiste a un centro educativo:",
                                name: "asiste_centro_educativo",
                                options: [
                                    {
                                        label: 'Sí',
                                        value: 'true'
                                    },
                                    {
                                        label: 'No',
                                        value: 'false'
                                    }
                                ],
                                onChange: (e)=>setAsisteCentroEducativo(e.target.value === 'true')
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 544,
                                columnNumber: 21
                            }, this),
                            asisteCentroEducativo === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700",
                                        children: "Observación / Si no Estudia:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 552,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 grid grid-cols-2 gap-x-4 gap-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Rezago Escolar",
                                                name: "motivo_no_estudia_rezago"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Desmotivación",
                                                name: "motivo_no_estudia_desmotivacion"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 555,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Riesgo Social",
                                                name: "motivo_no_estudia_riesgo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 556,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Poca oferta educativa",
                                                name: "motivo_no_estudia_oferta"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 557,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Prioridad al trabajo",
                                                name: "motivo_no_estudia_trabajo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 558,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Tiene familia",
                                                name: "motivo_no_estudia_familia"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 559,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Problemas de Salud",
                                                name: "motivo_no_estudia_salud"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 560,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Bajos Rec. Económicos",
                                                name: "motivo_no_estudia_recursos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 561,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 553,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 551,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 543,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Observaciones (Educación Formal)",
                        name: "observaciones_educacion_formal",
                        rows: 4
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 566,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Nombre del Centro Educativo",
                        name: "nombre_centro_educativo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 567,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Ubicación del Centro Educativo",
                        name: "ubicacion_centro_educativo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 568,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Grado",
                        name: "grado"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 569,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Jornada",
                        name: "jornada"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 570,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Parcial",
                        name: "parcial"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 571,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Semestre",
                        name: "semestre"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 572,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "Presenta sus tareas y estudia a diario",
                        name: "presenta_tareas",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 573,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                                label: "Tiene dificultad en alguna asignatura",
                                name: "tiene_dificultad",
                                options: [
                                    {
                                        label: 'Sí',
                                        value: 'true'
                                    },
                                    {
                                        label: 'No',
                                        value: 'false'
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 575,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "¿Cuál?",
                                name: "dificultad_asignatura_cual"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 576,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 574,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                                label: "Ha reprobado alguna asignatura",
                                name: "ha_reprobado",
                                options: [
                                    {
                                        label: 'Sí',
                                        value: 'true'
                                    },
                                    {
                                        label: 'No',
                                        value: 'false'
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 579,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "¿Cuál?",
                                name: "reprobado_asignatura_cual"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 580,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 578,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                        label: "Relación con los docentes y compañeros",
                        name: "relacion_docentes_companeros",
                        options: [
                            'Muy Mala',
                            'Mala',
                            'Regular',
                            'Buena',
                            'Muy buena',
                            'Excelente'
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 582,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                        label: "Conducta del/la NNAJ en los últimos meses",
                        name: "conducta_ultimos_meses",
                        options: [
                            'Muy Mala',
                            'Mala',
                            'Regular',
                            'Buena',
                            'Muy buena',
                            'Excelente'
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 583,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 542,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Avances en el Área de Educación No Formal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                                label: "Está participando en algún curso",
                                name: "participa_curso",
                                options: [
                                    {
                                        label: 'Sí',
                                        value: 'true'
                                    },
                                    {
                                        label: 'No',
                                        value: 'false'
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 588,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Curso en el que participa",
                                name: "curso_participa_nombre"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 589,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 587,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Nombre de la Institución",
                        name: "curso_institucion"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 591,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Duración del Curso",
                        name: "curso_duracion"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 592,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Fecha Inicial",
                        name: "curso_fecha_inicial",
                        type: "date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 593,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Fecha Final",
                        name: "curso_fecha_final",
                        type: "date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 594,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Horario que asiste",
                        name: "curso_horario",
                        placeholder: "Ej: L-V 8am-12pm"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 595,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                        label: "Relación con el instructor y compañeros",
                        name: "relacion_instructor_companeros",
                        options: [
                            'Muy Mala',
                            'Mala',
                            'Regular',
                            'Buena',
                            'Muy buena',
                            'Excelente'
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 596,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "¿Qué habilidades ha adquirido en el curso?",
                        name: "habilidades_adquiridas_curso",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 597,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 586,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Avance en el Área Laboral",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                        label: "Se encuentra laborando",
                        name: "esta_laborando",
                        options: [
                            {
                                label: 'Sí',
                                value: 'true'
                            },
                            {
                                label: 'No',
                                value: 'false'
                            }
                        ],
                        onChange: (e)=>{
                            const isWorking = e.target.value === 'true';
                            setEstaLaborando(isWorking);
                            if (isWorking) {
                                setLaboroAnteriormente(null); // Reset previous work state if currently working
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 601,
                        columnNumber: 17
                    }, this),
                    estaLaborando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "Tipo de Empleo",
                                name: "laboral_tipo_empleo",
                                options: [
                                    "Formal",
                                    "No formal"
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 615,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Cantidad que gana",
                                name: "laboral_salario",
                                type: "number",
                                min: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 616,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "Frecuencia de Pago",
                                name: "laboral_frecuencia_pago",
                                options: [
                                    "Diaria",
                                    "Semanal",
                                    "Quincenal",
                                    "Mensual"
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 617,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-3 grid grid-cols-4 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        label: "Años laborando",
                                        name: "laboral_tiempo_anios",
                                        type: "number",
                                        min: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 619,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        label: "Meses",
                                        name: "laboral_tiempo_meses",
                                        type: "number",
                                        min: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        label: "Semanas",
                                        name: "laboral_tiempo_semanas",
                                        type: "number",
                                        min: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 621,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        label: "Días",
                                        name: "laboral_tiempo_dias",
                                        type: "number",
                                        min: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 622,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 618,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Horario que tiene",
                                name: "laboral_horario"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 624,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Nombre de la empresa",
                                name: "laboral_empresa"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 625,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Cargo que desempeña",
                                name: "laboral_cargo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 626,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Ubicación donde trabaja",
                                name: "laboral_ubicacion"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 627,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Nombre jefe inmediato",
                                name: "laboral_jefe"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 628,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "N° de teléfono (Jefe)",
                                name: "laboral_jefe_telefono"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 629,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                                label: "¿En el trabajo, saben de su proceso Judicial actual?",
                                name: "laboral_saben_proceso",
                                options: [
                                    {
                                        label: 'Sí',
                                        value: 'true'
                                    },
                                    {
                                        label: 'No',
                                        value: 'false'
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 630,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700",
                                        children: "¿Como Administra los ingresos devengados?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 632,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 grid grid-cols-2 md:grid-cols-3 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Aporte al hogar",
                                                name: "admin_ingresos_hogar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 634,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Gastos de Alimentación",
                                                name: "admin_ingresos_alimentacion"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 635,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Gastos para higiene personal",
                                                name: "admin_ingresos_higiene"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 636,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Gastos de transporte",
                                                name: "admin_ingresos_transporte"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 637,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Pago de alquiler",
                                                name: "admin_ingresos_alquiler"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 638,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Sustento de hijos/as",
                                                name: "admin_ingresos_hijos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 639,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Gastos para estudios",
                                                name: "admin_ingresos_estudios"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 640,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Apoyo estudios hermanos/as",
                                                name: "admin_ingresos_hermanos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 641,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                label: "Medicamentos",
                                                name: "admin_ingresos_medicamentos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 642,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 633,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 631,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true),
                    estaLaborando === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-3 mt-4 pt-4 border-t border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                                label: "¿Anteriormente estuvo laborando?",
                                name: "laboro_anteriormente",
                                options: [
                                    {
                                        label: 'Sí',
                                        value: 'true'
                                    },
                                    {
                                        label: 'No',
                                        value: 'false'
                                    }
                                ],
                                onChange: (e)=>setLaboroAnteriormente(e.target.value === 'true')
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 649,
                                columnNumber: 25
                            }, this),
                            laboroAnteriormente && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 space-y-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 bg-gray-50 p-4 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        label: "Nombre de la empresa que laboró",
                                        name: "anterior_empresa"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 657,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        label: "Cargo que desempeñó",
                                        name: "anterior_cargo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 658,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700",
                                                children: "Motivo por el cual dejó de laborar:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 660,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 grid grid-cols-2 md:grid-cols-3 gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                        label: "Fin de contrato",
                                                        name: "motivo_fin_contrato"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                        lineNumber: 662,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                        label: "Mejor oportunidad",
                                                        name: "motivo_mejor_oportunidad"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                        lineNumber: 663,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                        label: "Dificultades en trabajo",
                                                        name: "motivo_dificultades"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                        lineNumber: 664,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                        label: "Falta de Pago",
                                                        name: "motivo_falta_pago"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                        lineNumber: 665,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                        label: "Problemas personales",
                                                        name: "motivo_problemas_personales"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                        lineNumber: 666,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                        label: "Amenazas",
                                                        name: "motivo_amenazas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                        lineNumber: 667,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                        label: "Problemas de salud",
                                                        name: "motivo_problemas_salud"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                        lineNumber: 668,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                        label: "Mala relación",
                                                        name: "motivo_mala_relacion"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                        lineNumber: 669,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                        label: "Por estudios",
                                                        name: "motivo_por_estudios"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                        label: "Desmotivación",
                                                        name: "motivo_desmotivacion"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                        lineNumber: 671,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                                lineNumber: 661,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                        lineNumber: 659,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 656,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 648,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 600,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Cierre",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Obstáculos Presentados en el Proceso",
                        name: "obstaculos_proceso",
                        rows: 5
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 681,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Observaciones Generales",
                        name: "observaciones_generales",
                        rows: 5
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 682,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Nombre del Pedagogo",
                        name: "nombre_pedagogo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 683,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 680,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 533,
        columnNumber: 9
    }, this);
}
_s2(FormularioEntrevistaSeguimiento, "ap9Mc2qo0GglrsMpOcKXC9d/zn4=");
_c17 = FormularioEntrevistaSeguimiento;
// ===============================================================
// COMPONENTE DETALLADO PARA EL FORMULARIO DE INFORME DE SEGUIMIENTO
// ===============================================================
function FormularioInformeSeguimiento({ expediente }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Datos Generales (Referencia)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Nombre Completo",
                        value: expediente?.nombre_completo
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 696,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Edad",
                        value: expediente?.edad?.toString()
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 697,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Expediente Administrativo",
                        value: expediente?.expediente_administrativo
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 698,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Expediente Judicial",
                        value: expediente?.expediente_judicial
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 699,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 695,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Elaboración del Informe",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    label: "Fecha de Elaboración",
                    name: "fecha_elaboracion",
                    type: "date"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                    lineNumber: 703,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 702,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Análisis y Avances",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "AVANCES ÁREA DE EDUCACIÓN FORMAL",
                        name: "avances_educacion_formal",
                        rows: 5
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 707,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "AVANCES ÁREA DE EDUCACIÓN NO FORMAL",
                        name: "avances_educacion_no_formal",
                        rows: 5
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 708,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "AVANCES ÁREA LABORAL",
                        name: "avances_area_laboral",
                        rows: 5
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 709,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "OBSTACULOS PRESENTADOS EN EL PROCESO",
                        name: "obstaculos_proceso",
                        rows: 5
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 710,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "CONCLUSIONES",
                        name: "conclusiones",
                        rows: 5
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 711,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 706,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Anexo: Verificación de Matrícula (SACE)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Centro",
                        name: "sace_centro"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 715,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Periodo",
                        name: "sace_periodo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 716,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Modalidad",
                        name: "sace_modalidad"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 717,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Grado",
                        name: "sace_grado"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 718,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Jornada",
                        name: "sace_jornada"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 719,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Sección",
                        name: "sace_seccion"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 720,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Estado",
                        name: "sace_estado"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 721,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Fecha de Verificación",
                        name: "sace_fecha_verificacion",
                        type: "date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 722,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Observaciones de Matrícula",
                        name: "sace_observaciones",
                        rows: 4
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 723,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-3 bg-blue-50 p-4 rounded-lg border border-blue-200 text-sm text-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold mb-2",
                                children: "NOTA INFORMATIVA"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 725,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Mediante la verificación en el Sistema Administrativo de Centros Educativos (SACE), se constata la matrícula del joven. Este anexo no es un documento oficial, el cual solo puede ser emitido por la Secretaría de Educación. Los datos reflejados se encuentran en el SACE y se presentan para efectos de agilizar los informes de avances."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 726,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 724,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 714,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Firma",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    label: "Nombre del Pedagogo",
                    name: "nombre_pedagogo"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                    lineNumber: 735,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 734,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 694,
        columnNumber: 9
    }, this);
}
_c18 = FormularioInformeSeguimiento;
// ===============================================================
// COMPONENTE DETALLADO PARA EL FORMULARIO DE ENTREVISTA DE CIERRE
// ===============================================================
function FormularioEntrevistaCierre({ expediente }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Datos de Referencia",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Nombre Completo",
                        value: expediente?.nombre_completo
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 748,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Expediente Administrativo",
                        value: expediente?.expediente_administrativo
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 749,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Fecha de Elaboración",
                        name: "fecha_elaboracion",
                        type: "date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 750,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 747,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Cierre del Proceso",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Resumen de logros y avances durante el proceso.",
                        name: "resumen_logros",
                        rows: 6
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 753,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Situación actual del NNAJ (Educativa, Laboral, Familiar).",
                        name: "situacion_actual",
                        rows: 6
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 754,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "Recomendaciones finales.",
                        name: "recomendaciones_finales",
                        rows: 6
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 755,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 752,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Firma",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    label: "Nombre del Pedagogo",
                    name: "nombre_pedagogo"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                    lineNumber: 758,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 757,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 746,
        columnNumber: 9
    }, this);
}
_c19 = FormularioEntrevistaCierre;
// ===============================================================
// COMPONENTE DETALLADO PARA EL FORMULARIO DE INFORME DE CIERRE
// ===============================================================
function FormularioInformeCierre({ expediente }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Datos Generales (Referencia)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Nombre Completo",
                        value: expediente?.nombre_completo
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 772,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Edad",
                        value: expediente?.edad?.toString()
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 773,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Expediente Administrativo",
                        value: expediente?.expediente_administrativo
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 774,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Expediente Judicial",
                        value: expediente?.expediente_judicial
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 775,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 771,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Elaboración del Informe",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    label: "Fecha de Elaboración",
                    name: "fecha_elaboracion",
                    type: "date"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                    lineNumber: 779,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 778,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Logros y Valoración",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "LOGROS OBTENIDOS EN EL ÁREA DE EDUCACIÓN FORMAL",
                        name: "logros_educacion_formal",
                        rows: 6
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 783,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "LOGROS OBTENIDOS EN EL ÁREA DE EDUCACIÓN NO FORMAL",
                        name: "logros_educacion_no_formal",
                        rows: 6
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 784,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "SITUACIÓN LABORAL ACTUAL",
                        name: "situacion_laboral_actual",
                        rows: 6
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 785,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        label: "VALORACIÓN TÉCNICA",
                        name: "valoracion_tecnica",
                        rows: 6
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 786,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 782,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Firma",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    label: "Nombre del Pedagogo",
                    name: "nombre_pedagogo"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                    lineNumber: 790,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 789,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 770,
        columnNumber: 9
    }, this);
}
_c20 = FormularioInformeCierre;
// ===============================================================
// COMPONENTE DETALLADO PARA EL FORMULARIO DE INFORME ESPECIAL
// ===============================================================
function FormularioInformeEspecial({ expediente }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Datos Generales",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Nombre del NNAJ",
                        value: expediente?.nombre_completo
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 803,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Edad",
                        value: expediente?.edad?.toString()
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 804,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayField, {
                        label: "Número de Expediente Administrativo",
                        value: expediente?.expediente_administrativo
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 805,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Fecha de Ingreso",
                        name: "fecha_ingreso",
                        type: "date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 806,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        label: "Fecha de Elaboración",
                        name: "fecha_elaboracion",
                        type: "date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 807,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 802,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Informe",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                    label: "SITUACIÓN EDUCATIVA",
                    name: "situacion_educativa",
                    rows: 10
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                    lineNumber: 811,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 810,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                title: "Firma",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    label: "Nombre del Pedagogo",
                    name: "nombre_pedagogo"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                    lineNumber: 815,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 814,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 801,
        columnNumber: 9
    }, this);
}
_c21 = FormularioInformeEspecial;
// ===============================================================
// COMPONENTES AUXILIARES PARA FORMULARIOS (Helpers)
// ===============================================================
const FormSection = ({ title, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        className: "border border-gray-300 p-4 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                className: "text-lg font-semibold px-2 text-gray-700",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 827,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 828,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 826,
        columnNumber: 5
    }, this);
_c22 = FormSection;
const Input = ({ label, name, type = 'text', noBg = false, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 836,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                name: name,
                id: name,
                ...props,
                className: `mt-1 block w-full rounded-lg border border-gray-400 px-3 py-2 shadow-sm focus:border-[#88cfe0] focus:ring focus:ring-[#88cfe0] focus:ring-opacity-50 sm:text-sm ${noBg ? 'bg-white' : 'bg-gray-100'}`
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 837,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 835,
        columnNumber: 5
    }, this);
_c23 = Input;
const Textarea = ({ label, name, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:col-span-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 843,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: name,
                id: name,
                ...props,
                className: "mt-1 block w-full rounded-lg border border-gray-400 px-3 py-2 shadow-sm focus:border-[#88cfe0] focus:ring focus:ring-[#88cfe0] focus:ring-opacity-50 sm:text-sm bg-gray-100"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 844,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 842,
        columnNumber: 5
    }, this);
_c24 = Textarea;
const Select = ({ label, name, options, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 850,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                name: name,
                id: name,
                ...props,
                className: "mt-1 block w-full rounded-lg border border-gray-400 px-3 py-2 shadow-sm focus:border-[#88cfe0] focus:ring focus:ring-[#88cfe0] focus:ring-opacity-50 sm:text-sm bg-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Seleccione..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 852,
                        columnNumber: 13
                    }, this),
                    options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: opt,
                            children: opt
                        }, opt, false, {
                            fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                            lineNumber: 853,
                            columnNumber: 33
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 851,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 849,
        columnNumber: 5
    }, this);
_c25 = Select;
const RadioGroup = ({ label, name, options, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:col-span-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 860,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex space-x-4",
                children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: `${name}-${opt.value}`,
                                name: name,
                                value: opt.value,
                                type: "radio",
                                ...props,
                                className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 864,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${name}-${opt.value}`,
                                className: "ml-2 block text-sm text-gray-900",
                                children: opt.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 865,
                                columnNumber: 21
                            }, this)
                        ]
                    }, opt.value, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 863,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 861,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 859,
        columnNumber: 5
    }, this);
_c26 = RadioGroup;
const Checkbox = ({ label, name, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: name,
                name: name,
                type: "checkbox",
                ...props,
                className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 874,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "ml-2 block text-sm text-gray-900",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 875,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 873,
        columnNumber: 5
    }, this);
_c27 = Checkbox;
const CheckboxGroup = ({ label, options })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:col-span-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 881,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex space-x-4",
                children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: opt.name,
                                name: opt.name,
                                type: "checkbox",
                                className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 885,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: opt.name,
                                className: "ml-2 block text-sm text-gray-900",
                                children: opt.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 886,
                                columnNumber: 21
                            }, this)
                        ]
                    }, opt.name, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 884,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 882,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 880,
        columnNumber: 5
    }, this);
_c28 = CheckboxGroup;
const SustanciaInput = ({ nombre, name })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-2 border p-2 rounded-lg bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: name,
                name: `${name}_consume`,
                type: "checkbox",
                className: "h-4 w-4 text-blue-600 border-gray-300 rounded"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 895,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "flex-grow text-sm text-gray-900",
                children: nombre
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 896,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: `${name}_frecuencia`,
                placeholder: "Frecuencia",
                className: "block w-1/2 rounded-md border-gray-400 border focus:border-[#88cfe0] focus:ring focus:ring-[#88cfe0] focus:ring-opacity-50 sm:text-sm text-xs p-1 bg-gray-100"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 897,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 894,
        columnNumber: 5
    }, this);
_c29 = SustanciaInput;
const ApoyoHogarInput = ({ pregunta, name })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:col-span-3 border-t pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-700",
                children: pregunta
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 903,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: `${name}-si`,
                                name: name,
                                value: "si",
                                type: "radio",
                                className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 906,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${name}-si`,
                                className: "ml-2 block text-sm text-gray-900",
                                children: "Sí"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 907,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 905,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: `${name}-no`,
                                name: name,
                                value: "no",
                                type: "radio",
                                className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 910,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${name}-no`,
                                className: "ml-2 block text-sm text-gray-900",
                                children: "No"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 911,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 909,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: `${name}-aveces`,
                                name: name,
                                value: "aveces",
                                type: "radio",
                                className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 914,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${name}-aveces`,
                                className: "ml-2 block text-sm text-gray-900",
                                children: "A veces"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 915,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 913,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 904,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 902,
        columnNumber: 5
    }, this);
_c30 = ApoyoHogarInput;
const EntornoSocialInput = ({ pregunta, name })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:col-span-3 grid grid-cols-3 gap-4 items-center border-t pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-700 col-span-1",
                children: pregunta
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 923,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex space-x-4 col-span-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: `${name}-si`,
                                name: `${name}_respuesta`,
                                value: "si",
                                type: "radio",
                                className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 926,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${name}-si`,
                                className: "ml-2 block text-sm text-gray-900",
                                children: "Sí"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 927,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 925,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: `${name}-no`,
                                name: `${name}_respuesta`,
                                value: "no",
                                type: "radio",
                                className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 930,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${name}-no`,
                                className: "ml-2 block text-sm text-gray-900",
                                children: "No"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                                lineNumber: 931,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                        lineNumber: 929,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 924,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                label: "Tiempo que dedica",
                name: `${name}_tiempo`,
                noBg: true
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 934,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 922,
        columnNumber: 5
    }, this);
_c31 = EntornoSocialInput;
const DisplayField = ({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 940,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 text-gray-600 sm:text-sm",
                children: value || 'No disponible'
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/educacion/page.tsx",
                lineNumber: 941,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/educacion/page.tsx",
        lineNumber: 939,
        columnNumber: 5
    }, this);
_c32 = DisplayField;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32;
__turbopack_context__.k.register(_c, "IconPlus");
__turbopack_context__.k.register(_c1, "IconArrowRight");
__turbopack_context__.k.register(_c2, "IconArrowLeft");
__turbopack_context__.k.register(_c3, "IconQuestionCircle");
__turbopack_context__.k.register(_c4, "IconFileSignature");
__turbopack_context__.k.register(_c5, "IconChalkboardTeacher");
__turbopack_context__.k.register(_c6, "IconChartLine");
__turbopack_context__.k.register(_c7, "IconFlagCheckered");
__turbopack_context__.k.register(_c8, "IconFileInvoice");
__turbopack_context__.k.register(_c9, "IconStarOfLife");
__turbopack_context__.k.register(_c10, "IconTrash");
__turbopack_context__.k.register(_c11, "ModuloEducacionPage");
__turbopack_context__.k.register(_c12, "DashboardView");
__turbopack_context__.k.register(_c13, "CaseView");
__turbopack_context__.k.register(_c14, "FormView");
__turbopack_context__.k.register(_c15, "FormularioEntrevistaInicial");
__turbopack_context__.k.register(_c16, "FormularioInformeInicial");
__turbopack_context__.k.register(_c17, "FormularioEntrevistaSeguimiento");
__turbopack_context__.k.register(_c18, "FormularioInformeSeguimiento");
__turbopack_context__.k.register(_c19, "FormularioEntrevistaCierre");
__turbopack_context__.k.register(_c20, "FormularioInformeCierre");
__turbopack_context__.k.register(_c21, "FormularioInformeEspecial");
__turbopack_context__.k.register(_c22, "FormSection");
__turbopack_context__.k.register(_c23, "Input");
__turbopack_context__.k.register(_c24, "Textarea");
__turbopack_context__.k.register(_c25, "Select");
__turbopack_context__.k.register(_c26, "RadioGroup");
__turbopack_context__.k.register(_c27, "Checkbox");
__turbopack_context__.k.register(_c28, "CheckboxGroup");
__turbopack_context__.k.register(_c29, "SustanciaInput");
__turbopack_context__.k.register(_c30, "ApoyoHogarInput");
__turbopack_context__.k.register(_c31, "EntornoSocialInput");
__turbopack_context__.k.register(_c32, "DisplayField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_dashboard_educacion_page_tsx_6618bdc8._.js.map