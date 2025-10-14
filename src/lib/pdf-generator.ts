import jsPDF from 'jspdf';

export interface FichaSeguridad {
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

export const generarPDF = (ficha: FichaSeguridad): jsPDF => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 20;
  let yPosition = 25;

  // Configuración de fuentes
  pdf.setFont('helvetica');

  // Función para formatear fecha
  const formatDate = (dateString: string): string => {
    if (!dateString || dateString.trim() === '') return '__________';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES');
    } catch {
      return dateString;
    }
  };

  // Función para formatear booleanos
  const formatBoolean = (value: boolean): string => {
    return value ? 'Sí' : 'No';
  };

  // Función para formatear texto
  const formatText = (text: string): string => {
    if (!text || text.trim() === '') return '__________';
    return text;
  };

  // Función para agregar texto
  const addText = (text: string, x: number, y: number, options: any = {}): number => {
    const { fontSize = 10, isBold = false, align = 'left' } = options;
    
    pdf.setFontSize(fontSize);
    pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
    
    if (align === 'center') {
      const textWidth = pdf.getTextWidth(text);
      x = (pageWidth - textWidth) / 2;
    }

    pdf.text(text, x, y);
    return y;
  };

  // Función para dibujar línea horizontal
  const drawLine = (y: number, length: number = pageWidth - margin * 2): void => {
    pdf.setDrawColor(0, 0, 0);
    pdf.setLineWidth(0.5);
    pdf.line(margin, y, margin + length, y);
  };

  // Función para dibujar checkbox
  const drawCheckbox = (x: number, y: number, checked: boolean = false): void => {
    pdf.setDrawColor(0, 0, 0);
    pdf.setLineWidth(0.5);
    pdf.rect(x, y - 3, 4, 4, 'S'); // Cuadrado pequeño
    
    if (checked) {
      pdf.setFontSize(8);
      pdf.text('✓', x + 1, y + 0.5);
    }
  };

  // ===== PÁGINA 1 =====
  
  // Encabezado principal - EXACTAMENTE COMO EN PAG4
  yPosition = addText('CENTRO PEDAGOGICO DE INTERNAMIENTO _____', pageWidth / 2, yPosition, { 
    fontSize: 12, 
    isBold: true, 
    align: 'center' 
  });
  
  yPosition += 6;
  
  yPosition = addText('ÁREA DE SEGURIDAD', pageWidth / 2, yPosition, { 
    fontSize: 12, 
    isBold: true, 
    align: 'center' 
  });
  
  yPosition += 8;
  
  yPosition = addText('Ficha de Ingreso', pageWidth / 2, yPosition, { 
    fontSize: 14, 
    isBold: false, 
    align: 'center' 
  });

  yPosition += 12;

  // DATOS PERSONALES DEL ADOLESCENTE - SIN NEGRITA
  yPosition = addText('DATOS PERSONALES DE ADOLESCENTE', margin, yPosition, { 
    fontSize: 11, 
    isBold: false 
  });

  yPosition += 8;

  // Función para agregar texto en dos columnas con líneas
  const addDualField = (leftLabel: string, leftValue: string, rightLabel: string, rightValue: string, y: number): number => {
    // Campo izquierdo
    const leftText = `${leftLabel} : ${leftValue}`;
    addText(leftText, margin, y, { fontSize: 10 });
    
    // Campo derecho
    const rightText = `${rightLabel} : ${rightValue}`;
    addText(rightText, pageWidth / 2, y, { fontSize: 10 });
    
    return y + 7;
  };

  // Datos personales - EXACTAMENTE COMO EN PAG4
  yPosition = addDualField(
    'Nombre', formatText(ficha.nombre_adolescente),
    'No. de Expediente Administrativo', formatText(ficha.expediente_administrativo),
    yPosition
  );

  yPosition = addDualField(
    'Edad', formatText(ficha.edad),
    'Fecha de Nacimiento', formatDate(ficha.fecha_nacimiento),
    yPosition
  );

  yPosition = addDualField(
    'Originario', formatText(ficha.originario),
    'Residente', formatText(ficha.residente),
    yPosition
  );

  yPosition = addDualField(
    'Fecha de Ingreso', formatDate(ficha.fecha_ingreso),
    'Hora de Ingreso', formatText(ficha.hora_ingreso),
    yPosition
  );

  yPosition = addDualField(
    'Número de DNI', formatText(ficha.numero_dni),
    'Alias', formatText(ficha.alias),
    yPosition
  );

  yPosition = addDualField(
    'Simpatizante', formatText(ficha.simpatizante),
    'Estado civil', formatText(ficha.estado_civil),
    yPosition
  );

  yPosition = addDualField(
    'Grado de Escolaridad', formatText(ficha.grado_escolaridad),
    'Nombre del responsable', formatText(ficha.nombre_responsable),
    yPosition
  );

  // Último campo solo - con línea
  const telefonoText = `Teléfono de la persona Responsable : ${formatText(ficha.telefono_responsable)}`;
  addText(telefonoText, margin, yPosition, { fontSize: 10 });
  yPosition += 7;

  // ===== PÁGINA 2 =====
  pdf.addPage();
  yPosition = 25;

  // DATOS JUDICIALES - EXACTAMENTE COMO EN PAG5
  yPosition = addText('DATOS JUDICIALES', pageWidth / 2, yPosition, { 
    fontSize: 14, 
    isBold: true, 
    align: 'center' 
  });

  yPosition += 10;

  // Datos judiciales - uno por línea con líneas
  const datosJudiciales = [
    { label: 'Juzgado remitente', value: formatText(ficha.juzgado_remitente) },
    { label: 'Juez que Remite al adolescente', value: formatText(ficha.juez_remite) },
    { label: 'Expediente Judicial', value: formatText(ficha.expediente_judicial) },
    { label: 'No. de Oficio de Ingreso', value: formatText(ficha.numero_oficio_ingreso) },
    { label: 'Infracción Penal por la que ingreso', value: formatText(ficha.infraccion_penal) },
    { label: 'Es reincidente', value: formatBoolean(ficha.es_reincidente) },
    { label: 'Ha estado en Otro Centro Pedagógico de Intenamiento', value: formatBoolean(ficha.estado_centro_anterior) },
    { label: 'Ha estado sometido a otro Proceso Judicial', value: formatBoolean(ficha.proceso_judicial_anterior) }
  ];

  datosJudiciales.forEach(item => {
    const fullText = `${item.label} : ${item.value}`;
    addText(fullText, margin, yPosition, { fontSize: 10 });
    yPosition += 6;
  });

  yPosition += 8;

  // FORMA DE INGRESO - CON CHECKBOXES COMO EN PAG5
  yPosition = addText('Forma de Ingreso:', margin, yPosition, { 
    fontSize: 12, 
    isBold: true 
  });

  yPosition += 8;

  // Opciones de forma de ingreso con checkboxes
  const formasIngreso = [
    'Cumplimiento de Medida Cautelar',
    'Sanción Privativa de Libertad', 
    'Traslado'
  ];

  formasIngreso.forEach((forma, index) => {
    const isSelected = ficha.forma_ingreso?.toLowerCase().includes(forma.toLowerCase());
    drawCheckbox(margin, yPosition + 1, isSelected);
    addText(`${index + 1}. ${forma}`, margin + 8, yPosition, { fontSize: 10 });
    yPosition += 6;
  });

  yPosition += 8;

  // Línea divisoria como en PAG5
  drawLine(yPosition, 50);
  yPosition += 12;

  // ESTADO FÍSICO - EXACTAMENTE COMO EN PAG5
  yPosition = addText('ESTADO FÍSICO AL MOMENTO DE SU INGRESO', pageWidth / 2, yPosition, { 
    fontSize: 14, 
    isBold: true, 
    align: 'center' 
  });

  yPosition += 10;

  // Estado físico
  const estadoFisico = [
    { label: 'Golpes', value: formatText(ficha.golpes) },
    { label: 'Heridas', value: formatText(ficha.heridas) },
    { label: 'Cicatrices', value: formatText(ficha.cicatrices) },
    { label: 'Enfermedad', value: formatText(ficha.enfermedad) },
    { label: 'Impedimentos físicos', value: formatText(ficha.impedimentos_fisicos) },
    { label: 'Ansiedad', value: formatText(ficha.ansiedad) },
    { label: 'Personal del área médica que lo atendió', value: formatText(ficha.personal_medico_atendio) }
  ];

  estadoFisico.forEach(item => {
    const fullText = `${item.label} : ${item.value}`;
    addText(fullText, margin, yPosition, { fontSize: 10 });
    yPosition += 6;
  });

  // ===== PÁGINA 3 =====
  pdf.addPage();
  yPosition = 25;

  // APREHENSIÓN Y TRASLADO - EXACTAMENTE COMO EN PAG6
  yPosition = addText('APREHENSION Y TRASLADO AL CPI', pageWidth / 2, yPosition, { 
    fontSize: 14, 
    isBold: true, 
    align: 'center' 
  });

  yPosition += 12;

  // Datos de aprehensión
  const aprehension = [
    { label: 'Fecha de Aprehensión', value: formatDate(ficha.fecha_aprehension) },
    { label: 'Quien lo aprehendió', value: formatText(ficha.quien_aprehendio) },
    { label: 'Fue golpeado o maltratado durante su Aprehensión', value: formatBoolean(ficha.golpeado_aprehension) },
    { label: 'Fue golpeado o maltratado durante su traslado al CPI', value: formatBoolean(ficha.golpeado_traslado) },
    { label: 'Por quien fue trasladado al CPI', value: formatText(ficha.quien_traslado) }
  ];

  aprehension.forEach(item => {
    const fullText = `${item.label} : ${item.value}`;
    addText(fullText, margin, yPosition, { fontSize: 10 });
    yPosition += 7;
  });

  yPosition += 8;

  // OBSERVACIONES - CON MÚLTIPLES LÍNEAS COMO EN PAG6
  yPosition = addText('OBSERVACIONES:', margin, yPosition, { 
    fontSize: 12, 
    isBold: true 
  });

  yPosition += 8;

  // Campo de observaciones - 4 líneas como en PAG6
  if (ficha.observaciones) {
    const lineas = pdf.splitTextToSize(ficha.observaciones, pageWidth - margin * 2);
    lineas.forEach((linea: string, index: number) => {
      if (index < 4) {
        addText(linea || '__________', margin, yPosition, { fontSize: 10 });
        yPosition += 6;
      }
    });
    // Completar con líneas vacías si es necesario
    for (let i = lineas.length; i < 4; i++) {
      addText('__________', margin, yPosition, { fontSize: 10 });
      yPosition += 6;
    }
  } else {
    for (let i = 0; i < 4; i++) {
      addText('__________', margin, yPosition, { fontSize: 10 });
      yPosition += 6;
    }
  }

  yPosition += 8;

  // Información final
  addText(`Nombre del supervisor de Seguridad: ${formatText(ficha.nombre_supervisor_seguridad)}`, margin, yPosition, { fontSize: 10 });
  yPosition += 7;
  
  addText(`Fecha de la Entrevista: ${formatDate(ficha.fecha_entrevista)}`, margin, yPosition, { fontSize: 10 });

  yPosition += 15;

  // FIRMAS - EXACTAMENTE COMO EN PAG6
  const firmaWidth = 70;
  const espacioEntreFirmas = 20;
  
  // Texto de firmas primero (como en PAG6)
  addText('Firma del NNA', margin, yPosition, { fontSize: 10, isBold: true });
  addText('Firma', margin + firmaWidth + espacioEntreFirmas, yPosition, { fontSize: 10, isBold: true });
  
  yPosition += 4;
  
  addText('Supervisor de Seguridad', margin + firmaWidth + espacioEntreFirmas, yPosition, { fontSize: 10, isBold: true });
  
  yPosition += 8;
  
  // Líneas para firmas debajo del texto
  drawLine(yPosition, firmaWidth);
  drawLine(yPosition, firmaWidth, margin + firmaWidth + espacioEntreFirmas);

  return pdf;
};

// Funciones auxiliares
export const descargarPDF = (ficha: FichaSeguridad, nombreArchivo: string = 'ficha_ingreso_seguridad.pdf'): void => {
  const pdf = generarPDF(ficha);
  pdf.save(nombreArchivo);
};

export const verPDF = (ficha: FichaSeguridad): void => {
  const pdf = generarPDF(ficha);
  const blob = pdf.output('blob');
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
};