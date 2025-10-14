module.exports = {

"[project]/.next-internal/server/app/api/seguridad/fichas/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@opentelemetry/api", () => require("@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/lib/database.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "connectDB": (()=>connectDB),
    "pool": (()=>pool)
});
(()=>{
    const e = new Error("Cannot find module 'pg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const poolConfig = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false
    },
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000
};
const pool = new Pool(poolConfig);
async function connectDB() {
    const client = await pool.connect();
    await client.query('SELECT NOW()');
    console.log('✅ Conexión a Supabase establecida');
    return client;
}
;
}}),
"[project]/src/app/api/seguridad/fichas/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/database.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    let conn;
    try {
        console.log('📥 GET /api/seguridad/fichas recibida');
        conn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const query = 'SELECT * FROM fichas_seguridad ORDER BY id DESC';
        const [fichas] = await conn.execute(query);
        console.log(`✅ ${fichas.length} fichas encontradas`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(fichas);
    } catch (error) {
        console.error('❌ Error obteniendo fichas:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Error interno del servidor al obtener fichas'
        }, {
            status: 500
        });
    } finally{
        if (conn) conn.release();
    }
}
async function POST(request) {
    let conn;
    try {
        console.log('📥 POST /api/seguridad/fichas recibida');
        const fichaData = await request.json();
        console.log('📝 Datos recibidos:', fichaData);
        // Validar datos requeridos - USANDO LOS CAMPOS CORRECTOS
        if (!fichaData.expediente_administrativo || !fichaData.nombre_adolescente) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Expediente administrativo y nombre del adolescente son campos requeridos'
            }, {
                status: 400
            });
        }
        conn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        // Insertar nueva ficha - USANDO LOS CAMPOS CORRECTOS
        const query = `
      INSERT INTO fichas_seguridad 
      (
        codigo_expediente, estado, nombre_adolescente, expediente_administrativo,
        edad, fecha_nacimiento, originario, residente, fecha_ingreso,
        hora_ingreso, numero_dni, alias, simpatizante, estado_civil,
        grado_escolaridad, nombre_responsable, telefono_responsable,
        juzgado_remitente, juez_remite, expediente_judicial, numero_oficio_ingreso,
        infraccion_penal, es_reincidente, estado_centro_anterior, proceso_judicial_anterior,
        forma_ingreso, golpes, heridas, cicatrices, enfermedad, impedimentos_fisicos,
        ansiedad, personal_medico_atendio, fecha_aprehension, quien_aprehendio,
        golpeado_aprehension, golpeado_traslado, quien_traslado, observaciones,
        nombre_supervisor_seguridad, fecha_entrevista, foto_persona
      ) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
        const values = [
            // Datos Personales
            fichaData.codigo_expediente || null,
            fichaData.estado || 'activo',
            fichaData.nombre_adolescente,
            fichaData.expediente_administrativo,
            fichaData.edad || null,
            fichaData.fecha_nacimiento || null,
            fichaData.originario || null,
            fichaData.residente || null,
            fichaData.fecha_ingreso || null,
            fichaData.hora_ingreso || null,
            fichaData.numero_dni || null,
            fichaData.alias || null,
            fichaData.simpatizante || null,
            fichaData.estado_civil || null,
            fichaData.grado_escolaridad || null,
            fichaData.nombre_responsable || null,
            fichaData.telefono_responsable || null,
            // Datos Judiciales
            fichaData.juzgado_remitente || null,
            fichaData.juez_remite || null,
            fichaData.expediente_judicial || null,
            fichaData.numero_oficio_ingreso || null,
            fichaData.infraccion_penal || null,
            fichaData.es_reincidente ? 1 : 0,
            fichaData.estado_centro_anterior ? 1 : 0,
            fichaData.proceso_judicial_anterior ? 1 : 0,
            fichaData.forma_ingreso || null,
            // Estado Físico
            fichaData.golpes || null,
            fichaData.heridas || null,
            fichaData.cicatrices || null,
            fichaData.enfermedad || null,
            fichaData.impedimentos_fisicos || null,
            fichaData.ansiedad || null,
            fichaData.personal_medico_atendio || null,
            // Aprehensión y Traslado
            fichaData.fecha_aprehension || null,
            fichaData.quien_aprehendio || null,
            fichaData.golpeado_aprehension ? 1 : 0,
            fichaData.golpeado_traslado ? 1 : 0,
            fichaData.quien_traslado || null,
            fichaData.observaciones || null,
            fichaData.nombre_supervisor_seguridad || null,
            fichaData.fecha_entrevista || null,
            fichaData.foto_persona || null
        ];
        const [result] = await conn.execute(query, values);
        const nuevaFichaId = result.insertId;
        // Obtener la ficha recién creada
        const [fichas] = await conn.execute('SELECT * FROM fichas_seguridad WHERE id = ?', [
            nuevaFichaId
        ]);
        console.log(`✅ Nueva ficha creada con ID: ${nuevaFichaId}`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Ficha creada correctamente',
            ficha: fichas[0]
        }, {
            status: 201
        });
    } catch (error) {
        console.error('❌ Error creando ficha:', error);
        // Manejar errores específicos
        if (error.message.includes('Duplicate entry')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Ya existe una ficha con ese expediente'
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Error interno del servidor al crear ficha: ' + error.message
        }, {
            status: 500
        });
    } finally{
        if (conn) conn.release();
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b479ae36._.js.map