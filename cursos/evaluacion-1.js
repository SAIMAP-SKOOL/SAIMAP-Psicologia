(function(window){
// SAIMAP Psicología · Evaluación Psicológica I
// Contenido alineado con el temario SAIMAP «Evaluación Psicológica I. Procesos, garantías y métodos» (v1.0, noviembre de 2026).
window.COURSE = {
  id: "evaluacion-1",
  title: "Evaluación Psicológica I",
  short: "Evaluación I",
  area: "Personalidad y evaluación",
  rutas: { grado: { curso: 2 }, pir: { bloque: "Evaluación y personalidad" } },
  temario: "Evaluacion-Psicologica-I_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Qué es evaluar: concepto, historia y enfoques", from: 1, to: 4 },
    { n: 2, t: "El proceso de evaluación y el informe", from: 5, to: 7 },
    { n: 3, t: "Garantías éticas y científicas", from: 8, to: 10 },
    { n: 4, t: "La entrevista de evaluación", from: 11, to: 12 },
    { n: 5, t: "Observar la conducta", from: 13, to: 14 },
    { n: 6, t: "Autoinformes y cuestionarios", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Evaluación I · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "Qué es evaluar en psicología", cap: 1, pir: "baja", mods: [
  { t: "Concepto y objetivos de la evaluación psicológica",
    tip: "En la línea de Fernández-Ballesteros, la evaluación psicológica explora y analiza el comportamiento de una persona o de un grupo para describir, clasificar, predecir, explicar, orientar el cambio y valorar. Es un proceso de toma de decisiones que contrasta hipótesis con instrumentos de garantías comprobables. No termina en una puntuación, sino en una respuesta razonada a la demanda.",
    v: [
      "Evaluación psicológica=Análisis científico de la conducta para describir, clasificar, predecir, explicar, cambiar o valorar",
      "Describir=Objetivo que responde a cómo es la persona o qué le pasa",
      "Clasificar o diagnosticar=Objetivo que decide a qué categoría corresponde un caso",
      "Predecir=Objetivo que estima qué es probable que ocurra, como el rendimiento en un puesto",
      "Explicar=Objetivo que identifica por qué ocurre algo, como qué mantiene una evitación",
      "Orientar el cambio=Objetivo que elige las metas y las técnicas de una intervención",
      "Valorar=Objetivo que comprueba si lo que se hizo ha funcionado",
      "Contraste de hipótesis=Proponer explicaciones posibles de la demanda y ponerlas a prueba con datos"
    ],
    g: [
      "Los objetivos de orientar el cambio y valorar aparecen cuando hay ___.|intervención|selección|diagnóstico",
      "Una selección de personal suele terminar con una predicción y una ___.|decisión|intervención|valoración",
      "La evaluación es a la vez una actividad profesional y un campo de ___.|investigación|intervención|clasificación",
      "Comparar las medidas antes y después del tratamiento corresponde al objetivo de ___.|valorar|describir|predecir",
      "La doble vía de la evaluación es descriptivo-predictiva e ___.|interventivo-valorativa|explicativo-clasificatoria|diagnóstico-normativa"
    ],
    tf: [
      "Los cuatro primeros objetivos clásicos pueden cerrar una evaluación por sí solos, sin intervención posterior.|V",
      "Evaluar consiste sobre todo en reunir el mayor número posible de datos sobre la persona.|F|El evaluador parte de una pregunta, propone hipótesis y elige las técnicas que permiten contrastarlas.",
      "Lo que se evalúa incluye, además de lo que la persona hace, piensa y siente, sus respuestas fisiológicas y rasgos estables.|V",
      "La evaluación psicológica termina cuando se obtiene la puntuación del test principal.|F|Termina con una respuesta razonada a la demanda, comunicada de forma comprensible y respetando las normas éticas."
    ],
    q: [
      "Unos padres consultan porque su hija de nueve años «no se concentra en los deberes». ¿Qué debería hacer primero la evaluadora?|Formular hipótesis y elegir datos para cada una|Aplicar una batería amplia de tests de atención|Aceptar la etiqueta que traen los padres|Caben varias hipótesis (lectura, atención, cambio familiar, deberes largos) y cada una pide datos distintos.",
      "Identificar qué mantiene la conducta de evitación de un paciente corresponde al objetivo de…|explicar|describir|clasificar|Explicar responde a por qué ocurre algo. Describir responde a cómo es, y clasificar, a qué categoría corresponde.",
      "¿Qué objetivo cumple un perfil de fortalezas y dificultades de un alumno?|Describir|Predecir|Valorar|Describir responde a cómo es o qué le pasa. Valorar exige comparar antes y después de una intervención.",
      "¿Qué rasgo de la definición separa la evaluación de una simple recogida de pruebas?|Que contrasta hipótesis para decidir|Que usa siempre tests estandarizados|Que se centra en clasificar trastornos|Evaluar es contrastar hipótesis orientadas a una decisión. Los tests son solo una herramienta del proceso."
    ],
    inc: [
      "Sobre la definición de evaluación psicológica|Uno de sus objetivos es prescribir fármacos|Puede evaluarse a una familia o a un equipo|Se apoya en instrumentos con garantías comprobables|Prescribir fármacos no es un objetivo. Lo son describir, clasificar, predecir, explicar, orientar el cambio y valorar."
    ],
    seq: [],
    cls: [
      "Vía de la evaluación|Descriptivo-predictiva: describir; clasificar o diagnosticar; predecir; explicar|Interventivo-valorativa: orientar el cambio; valorar"
    ] },
  { t: "Evaluación, diagnóstico, medida y valoración",
    tip: "Varios términos se solapan con la evaluación psicológica, pero cada uno tiene origen y alcance propios. El psicodiagnóstico tiene raíz médica y proyectiva y busca la etiqueta. El testing produce puntuaciones y el assessment las integra con la historia, la entrevista y la observación (Meyer et al., 2001). La evaluación de programas valora intervenciones, no personas.",
    v: [
      "Psicodiagnóstico=Término de raíz médica y proyectiva centrado en la patología y la etiqueta",
      "Testing=Aplicación de tests y cuantificación de resultados, solo una fase del proceso",
      "Assessment=Proceso integrador que combina fuentes e interpreta los datos en su contexto",
      "Evaluación conductual=Busca relaciones funcionales entre conducta, antecedentes y consecuencias, sin etiquetas",
      "Análisis de conducta=Versión más estrictamente operante de la evaluación de relaciones funcionales",
      "Evaluación de programas=Valoración de intervenciones, como un plan contra el acoso escolar, no de personas",
      "Valoración psicológica=Término de contextos administrativos y legales, como la dependencia o el daño psíquico",
      "Examen del estado mental=Exploración estructurada de conciencia, orientación, ánimo y pensamiento actuales"
    ],
    g: [
      "El término psicodiagnóstico se popularizó con la obra de ___ (1921).|Rorschach|Binet|Murray",
      "Meyer et al. (2001) subrayaron que el testing produce puntuaciones y el assessment las ___.|integra|sustituye|ordena",
      "La herramienta central de la evaluación conductual es el análisis ___.|funcional|factorial|normativo",
      "El examen del estado mental forma parte de la entrevista ___.|clínica|de devolución|de selección",
      "Pesar a alguien es medir, decir que tiene sobrepeso es ___ y averiguar qué hábitos lo mantienen es evaluar.|clasificar|predecir|explicar"
    ],
    tf: [
      "La evaluación de programas comparte métodos con la evaluación psicológica, pero su objeto son las intervenciones.|V",
      "Testing y evaluación psicológica son sinónimos en la literatura actual.|F|El testing es solo una parte del proceso: produce datos que la evaluación integra con otras fuentes.",
      "El diagnóstico psicológico subraya un objetivo, identificar y clasificar, que es solo uno de los seis clásicos.|V",
      "El término assessment designa en inglés la mera aplicación de tests estandarizados.|F|Designa el proceso que combina fuentes e interpreta los datos. Es el término más próximo a evaluación psicológica."
    ],
    q: [
      "Un ayuntamiento quiere saber si su taller de habilidades sociales para adolescentes cambia algo. ¿De qué se trata?|De evaluación de programas|De evaluación conductual|De psicodiagnóstico|Se valora una intervención, no a una persona concreta. Comparte métodos con la evaluación psicológica, pero su objeto es distinto.",
      "¿Qué término es el más próximo a «evaluación psicológica»?|Assessment|Testing|Psicodiagnóstico|El assessment integra las puntuaciones con la historia, la entrevista y la observación, como la evaluación en sentido pleno.",
      "Una psicóloga se limita a comprobar si se cumplen los criterios de un trastorno y se detiene ahí. ¿Qué concepción refleja?|La de psicodiagnóstico|La de assessment|La de evaluación conductual|El psicodiagnóstico se centra en la patología y la etiqueta. La evaluación en sentido pleno formula hipótesis e integra fuentes.",
      "¿En qué contexto se usa sobre todo el término «valoración psicológica»?|Administrativo y legal|Clínico y proyectivo|Educativo y escolar|Se emplea, por ejemplo, para valorar la dependencia o el daño psíquico."
    ],
    inc: [
      "Sobre los términos afines|La evaluación conductual parte de una etiqueta diagnóstica|El examen del estado mental es parte de la entrevista clínica|El psicodiagnóstico tiene raíz médica y proyectiva|La evaluación conductual busca relaciones funcionales sin necesidad de etiquetas diagnósticas."
    ],
    seq: [],
    cls: [
      "Término afín|Psicodiagnóstico: patología; etiqueta; raíz médica y proyectiva|Testing: puntuaciones; solo una fase del proceso|Assessment: integra varias fuentes; persona en su contexto"
    ] },
  { t: "Ámbitos y tipos de demanda",
    tip: "La evaluación está presente en los ámbitos clínico, educativo, organizacional, forense, neuropsicológico, comunitario, deportivo y de investigación. Toda evaluación parte de una demanda que hay que analizar: quién pide, a quién se evalúa, qué se pregunta, qué decisión depende y con qué voluntariedad se acude. En las demandas de terceros, como el peritaje o la selección, hay que vigilar la distorsión intencionada.",
    v: [
      "Demanda=Petición, explícita o no, que alguien formula al psicólogo y origina la evaluación",
      "Cliente=Quien encarga la evaluación cuando no coincide con la persona evaluada",
      "Demanda voluntaria=La persona pide ayuda para sí misma y suele colaborar",
      "Demanda de terceros=La persona evaluada no ha elegido estar allí y puede distorsionar",
      "Distorsión intencionada=Mostrarse mejor o peor de lo que se está, típica en selección y peritaje",
      "Ámbito forense=Peritajes en procesos civiles, penales, de familia o laborales",
      "Ámbito neuropsicológico=Estado de las funciones cognitivas tras una lesión o en un proceso degenerativo",
      "Reformular la demanda=Traducir la petición a términos evaluables sin aceptar la hipótesis de quien la trae"
    ],
    g: [
      "Los padres que consultan por un hijo son ___, pero la persona evaluada es otra.|clientes|peritos|terapeutas",
      "La valoración de la custodia de un menor es una demanda típica del ámbito ___.|forense|educativo|comunitario",
      "Las quejas de memoria en una persona mayor son una demanda típica del ámbito ___.|neuropsicológico|educativo|deportivo",
      "En selección y en peritaje hay que prestar especial atención a la ___ intencionada de las respuestas.|distorsión|omisión|repetición",
      "Un programa municipal de apoyo a cuidadores corresponde al ámbito social y ___.|comunitario|organizacional|educativo"
    ],
    tf: [
      "La persona que pide la evaluación coincide siempre con la persona evaluada.|F|No siempre: los padres que consultan por un hijo o la empresa que encarga una selección son clientes.",
      "La demanda inicial no siempre es la verdadera pregunta de la evaluación.|V",
      "Quién recibe el informe y quién da el consentimiento dependen de quién pide y de quién es evaluado.|V",
      "Si unos padres separados discrepan sobre la evaluación de su hijo, basta con la voluntad del que llama primero.|F|No basta con la voluntad del que llama primero. Es una cuestión ética que exige analizar quién pide y quién es evaluado."
    ],
    q: [
      "Un profesor deriva a un alumno «por hiperactivo». ¿Cómo debe tratar la psicóloga esa demanda?|Reformularla en términos evaluables|Aceptarla como hipótesis principal|Limitarse a confirmar la etiqueta|La demanda ya trae una etiqueta, y quizá el alumno se aburre porque va por delante. Reformularla forma parte del trabajo.",
      "Un candidato a un puesto responde a un cuestionario de personalidad. ¿Qué riesgo debe vigilar sobre todo la evaluadora?|Que se muestre mejor de lo que es|Que exagere sus dificultades|Que no entienda las instrucciones|En una demanda de terceros como la selección, el candidato quiere el puesto y puede mostrarse mejor de lo que está.",
      "¿Qué rasgo define una demanda voluntaria?|La persona pide ayuda para sí misma|La persona acude por orden judicial|Un tercero paga la evaluación|En la demanda voluntaria la persona pide ayuda para sí y suele colaborar. En las de terceros no ha elegido estar allí.",
      "En un peritaje, la psicóloga tiene presente que de su informe puede depender una sentencia. ¿Qué aspecto de la demanda analiza?|La decisión que depende del resultado|El grado de voluntariedad del evaluado|Quién formula la petición inicial|Del resultado puede depender un tratamiento, una adaptación escolar, una contratación o una sentencia."
    ],
    inc: [
      "Sobre el análisis de la demanda|La distorsión intencionada es típica de la demanda voluntaria|Hay que analizar el grado de voluntariedad del evaluado|La demanda puede proceder de un juzgado o una aseguradora|La distorsión preocupa sobre todo en las demandas de terceros, como la selección o el peritaje, no en la voluntaria."
    ],
    seq: [],
    cls: [
      "Tipo de demanda|Voluntaria: pide ayuda para sí misma; suele colaborar; adulto con ataques de pánico|De terceros: no ha elegido estar allí; candidato en una selección; parte en un juicio"
    ] },
  { t: "Una evaluación multimétodo y multiinformante",
    tip: "Ningún método ni fuente basta, porque cada uno capta una parte del comportamiento y tiene sus propios errores. El metaanálisis de Achenbach, McConaughy y Howell (1987) halló acuerdos medios de 0,60 entre informantes similares, 0,28 entre informantes de distinto tipo y 0,22 entre el sujeto y los demás. El desacuerdo es información, no prueba de que alguien mienta, y cada técnica debe aportar validez incremental.",
    v: [
      "Evaluación multimétodo=Uso combinado de varias técnicas para compensar los sesgos de cada una",
      "Evaluación multiinformante=Datos de varias personas que ven al sujeto en contextos distintos",
      "Informantes similares=Fuentes como padre y madre, con un acuerdo medio de 0,60",
      "Informantes de distinto tipo=Fuentes como un progenitor y un profesor, con acuerdo medio de 0,28",
      "Acuerdo sujeto-otros=Correlación media de 0,22 entre el propio evaluado y los demás",
      "Validez incremental=Información útil que una técnica añade a la que ya se tiene",
      "Registros de productos=Huellas de la conducta, como notas escolares o partes de baja",
      "Achenbach et al. (1987)=Metaanálisis de 119 estudios sobre acuerdo entre informantes en niños y adolescentes"
    ],
    g: [
      "El metaanálisis de Achenbach, McConaughy y Howell reunió ___ estudios.|119|38|60",
      "El riesgo típico del autoinforme son la deseabilidad social y los ___ de respuesta.|estilos|tiempos|formatos",
      "La observación capta mejor la conducta ___ en su contexto.|motora|cognitiva|fisiológica",
      "El riesgo típico de la observación son la ___ y los errores del observador.|reactividad|deseabilidad|artificialidad",
      "La validez incremental es una idea de la evaluación basada en la evidencia de Hunsley y ___.|Mash|Meyer|Mischel"
    ],
    tf: [
      "El bajo acuerdo entre informantes indica que alguno de ellos miente o se equivoca.|F|El desacuerdo es información: muestra en qué situaciones aparece el problema y qué parte es visible para otros.",
      "En el metaanálisis de Achenbach et al., el acuerdo medio más bajo se dio entre el propio sujeto y los demás.|V",
      "Una buena evaluación multimétodo consiste en aplicar todas las pruebas disponibles.|F|No se trata de acumular pruebas, sino de elegir las que aportan información nueva a la pregunta del caso.",
      "Que alguien diga no tener miedo a volar y siga con el corazón acelerado al despegar justifica usar varios métodos.|V"
    ],
    q: [
      "La tutora de Pablo, de 12 años, describe interrupciones constantes, sus padres no ven nada parecido en casa y la observación las sitúa en matemáticas. ¿Cómo debe interpretarse la discrepancia?|Como información sobre el contexto|Como prueba de que los padres mienten|Como error de medida que hay que descartar|El desacuerdo indica en qué situaciones aparece el problema. Juntas, las fuentes sugieren una dificultad de aprendizaje.",
      "¿Qué acuerdo medio halló el metaanálisis entre un progenitor y un profesor?|0,28|0,60|0,22|Entre informantes de distinto tipo fue de 0,28, frente a 0,60 entre similares y 0,22 entre el sujeto y los demás.",
      "¿Qué método capta mejor pensamientos, emociones y experiencias privadas?|El autoinforme|La observación|El registro de productos|Su riesgo típico es la deseabilidad social y los estilos de respuesta.",
      "¿Qué riesgo típico se atribuye a los tests de rendimiento?|Situación artificial y motivación variable|Deseabilidad social y estilos de respuesta|Reactividad y errores del observador|Miden aptitudes en condiciones controladas, a costa de una situación artificial. Las otras opciones son del autoinforme y la observación."
    ],
    inc: [
      "Sobre la evaluación multimétodo|Existe una regla única para ponderar a cada informante|Integrar datos discrepantes exige juicio del evaluador|Cada método tiene ventajas y sesgos característicos|No hay una regla única para decidir cuánto peso dar a cada informante. Es una cuestión en debate."
    ],
    seq: [],
    cls: [
      "Método|Entrevista: historia; contexto; significado|Observación: conducta motora; reactividad|Autoinforme: experiencias privadas; deseabilidad social"
    ] }
] },
{ n: 2, t: "De Galton a hoy: historia de la evaluación", cap: 1, pir: "media", mods: [
  { t: "Precursores: de los exámenes imperiales a Wundt",
    tip: "Los exámenes de la China imperial aportan la idea de una prueba común, Huarte de San Juan (1575) el ajuste entre ingenio y oficio, y Esquirol la gradación de capacidades. Wundt (Leipzig, 1879) aportó el control de la situación de medida, pero trataba las diferencias individuales como error. Kraepelin y Ebbinghaus aplicaron las primeras tareas mentales a individuos.",
    v: [
      "Exámenes imperiales chinos=Pruebas escritas comunes para seleccionar funcionarios, no por linaje",
      "Examen de ingenios=Obra de Huarte (1575) que ajusta estudios y oficio a la aptitud de cada persona",
      "Huarte de San Juan=Médico precursor de la orientación profesional y patrón de la psicología en España",
      "Esquirol (1838)=Distinguió demencia e idiocia y usó el lenguaje para graduar la deficiencia",
      "Tablero de formas=Ideado por Séguin, antecedente de las pruebas manipulativas",
      "Frenología=Doctrina de Gall que leía las capacidades en los relieves del cráneo",
      "Wundt (1879)=Laboratorio de Leipzig que aportó el control riguroso de la situación de medida",
      "Kraepelin=Discípulo de Wundt que aplicó a pacientes asociación de palabras y cálculo continuado"
    ],
    g: [
      "El Examen de ingenios para las ciencias se publicó en Baeza en ___.|1575|1603|1838",
      "Esquirol usó el ___ como criterio para graduar los niveles de deficiencia.|lenguaje|cráneo|tiempo de reacción",
      "Ebbinghaus propuso una tarea de ___ frases para evaluar a escolares.|completar|ordenar|repetir",
      "Wundt buscaba leyes generales de la mente y trataba las diferencias individuales como ___.|error|norma|signo",
      "La medicina hipocrática explicaba el temperamento por el predominio de uno de los cuatro ___.|humores|ingenios|órganos"
    ],
    tf: [
      "Wundt fundó la evaluación psicológica centrada en las diferencias individuales.|F|Fundó el laboratorio de la psicología experimental y aportó el control de la medida, pero trataba las diferencias como error.",
      "Las fuentes no permiten fijar un año único para el origen de los exámenes imperiales chinos.|V",
      "Esquirol ideó el tablero de formas, antecedente de las pruebas manipulativas.|F|El tablero de formas es de Séguin. Esquirol distinguió demencia e idiocia y graduó la deficiencia por el lenguaje.",
      "La frenología era falsa, pero anticipaba la idea de inferir características psicológicas de indicadores observables.|V"
    ],
    q: [
      "¿Qué aportó Wundt a la evaluación psicológica?|El control de la situación de medida|El estudio de las diferencias individuales|La primera escala práctica de inteligencia|Instrucciones fijas, aparatos precisos y condiciones repetibles. Las diferencias individuales llegarían con Galton.",
      "¿Qué distinción introdujo Esquirol (1838)?|Demencia frente a idiocia|Rasgo frente a estado|Signo frente a muestra|La demencia es una pérdida de capacidades que se tenían, y la idiocia, un desarrollo insuficiente desde el principio.",
      "Un orientador defiende ajustar los estudios de cada alumno a su aptitud particular. ¿Qué precursor anticipó esta idea?|Huarte de San Juan|Jean-Étienne Esquirol|Wilhelm Wundt|Huarte (1575) proponía ajustar estudios y profesión al ingenio de cada persona.",
      "¿Qué ingrediente decisivo faltaba en los precursores y llegó con Galton?|El interés por las diferencias individuales|El control riguroso de la situación de medida|La idea de una prueba común para todos|China aportó la prueba común y Wundt el control de la medida. El interés por las diferencias entre personas llegó con Galton."
    ],
    inc: [
      "Sobre los precursores|Kraepelin propuso completar frases con escolares|Séguin ideó el tablero de formas o form board|Huarte es el patrón de la psicología en España|La tarea de completar frases es de Ebbinghaus. Kraepelin aplicó a pacientes asociación de palabras y cálculo continuado."
    ],
    seq: [
      "Precursores en orden cronológico|Huarte publica el Examen de ingenios>Esquirol distingue demencia e idiocia>Wundt abre su laboratorio en Leipzig>Galton abre su laboratorio antropométrico"
    ],
    cls: [] },
  { t: "La etapa fundacional: de Galton a Terman",
    tip: "Galton aporta el método, Cattell la tecnología y el nombre, y Binet el concepto. Galton abrió su laboratorio antropométrico en 1884, Cattell acuñó «mental test» en 1890 y Binet y Simon publicaron en 1905 la primera escala práctica de inteligencia, cuyas revisiones expresaban el resultado como edad mental. El cociente es de Stern (1912) y el ×100, de Terman (1916).",
    v: [
      "Laboratorio antropométrico=Galton, Londres, 1884: estatura, agudeza sensorial, fuerza o tiempo de reacción",
      "Mental test=Expresión de Cattell (1890) para pruebas breves sensoriales y motoras",
      "Wissler (1901)=Mostró que las pruebas de Cattell apenas se relacionaban con las notas",
      "Escala Binet-Simon=Primera escala práctica de inteligencia (1905), con tareas ordenadas por dificultad",
      "Edad mental=Edad cuyos niños típicos resuelven lo mismo que el evaluado",
      "Cociente intelectual=Edad mental entre edad cronológica, propuesto por Stern en 1912",
      "Stanford-Binet=Adaptación estadounidense de Terman (1916) que multiplicó el cociente por 100",
      "Witmer (1896)=Abrió la primera clínica psicológica y acuñó «psicología clínica»"
    ],
    g: [
      "Binet sostuvo que había que medir funciones ___, como el juicio o el razonamiento.|superiores|sensoriales|motoras",
      "Un niño de 10 años con una edad mental de 12 obtiene un CI de ___.|120|83|112",
      "Las tareas de la escala Binet-Simon se agruparon por edades en las revisiones de 1908 y ___.|1911|1916|1912",
      "Galton suponía que la agudeza ___ reflejaba la capacidad intelectual.|sensorial|verbal|motora",
      "El programa de Galton estaba unido a la ___, con consecuencias sociales muy graves.|eugenesia|frenología|psicotecnia"
    ],
    tf: [
      "Binet inventó el cociente intelectual al dividir la edad mental entre la cronológica.|F|Binet usó la edad mental. El cociente es de Stern (1912) y la multiplicación por 100, de Terman (1916).",
      "Wissler (1901) comprobó que las pruebas de Cattell apenas se relacionaban entre sí ni con las calificaciones.|V",
      "Cattell se doctoró con Wundt en Leipzig, pero se interesó por las diferencias entre personas.|V",
      "La escala Binet-Simon de 1905 nació para seleccionar a los reclutas del ejército francés.|F|El Ministerio de Instrucción Pública necesitaba identificar a los escolares que precisaban enseñanza especial."
    ],
    q: [
      "Una niña de 8 años resuelve las tareas propias de los niños de 10. Según Stern y Terman, ¿cuál es su CI?|125|80|120|10 / 8 × 100 da 125. El 80 resulta de invertir el cociente (8 / 10).",
      "¿Quién multiplicó el cociente intelectual por 100 para evitar decimales?|Terman|Stern|Binet|Terman lo hizo en el Stanford-Binet (1916). Stern propuso el cociente en 1912 y Binet usó la edad mental.",
      "¿Por qué fracasó en lo esencial el programa de los mental tests de Cattell?|Las funciones simples no predecían el rendimiento|Las pruebas eran demasiado largas y de tipo verbal|Se aplicaban solo a niños con discapacidad|Wissler (1901) halló que apenas se relacionaban entre sí ni con las calificaciones académicas.",
      "¿Qué ventaja tenía el cociente de Stern frente a la edad mental?|Comparar niños de edades diferentes|Medir funciones sensoriales simples|Expresar la posición en el grupo adulto|Dos años de retraso no significan lo mismo a los cinco que a los doce."
    ],
    inc: [
      "Sobre la etapa fundacional|Galton acuñó la expresión «mental test» en 1884|Witmer abrió en 1896 la primera clínica psicológica|Galton desarrolló el germen de la correlación|«Mental test» lo acuñó Cattell en 1890. En 1884 Galton abrió su laboratorio antropométrico en Londres."
    ],
    seq: [
      "Etapa fundacional en orden cronológico|Laboratorio antropométrico de Galton>Cattell acuña «mental test»>Escala Binet-Simon>Cociente intelectual de Stern>Stanford-Binet de Terman"
    ],
    cls: [
      "Aportación|Binet: edad mental; funciones superiores; escala de 1905|Stern: cociente EM / EC; 1912|Terman: multiplicar por 100; Stanford-Binet; 1916"
    ] },
  { t: "Expansión, crisis y renovación en el siglo XX",
    tip: "En 1917 el grupo de Yerkes elaboró el Army Alpha, verbal, y el Army Beta, no verbal, pruebas colectivas. Siguieron Rorschach (1921), el TAT (1935), el Wechsler-Bellevue (1939), con el CI de desviación, y el MMPI (1943). Meehl (1954), la correlación ilusoria, Kanfer y Saslow (1965) y Mischel (1968) abrieron una crisis que llevó a más garantías, a las GAP (2001) y a los Standards (2014).",
    v: [
      "Army Alpha=Prueba colectiva verbal de 1917 para reclutas que sabían leer inglés",
      "Army Beta=Prueba colectiva no verbal para analfabetos o quienes no dominaban el idioma",
      "CI de desviación=Posición respecto al grupo de edad, con media 100 y DT 15 (Wechsler-Bellevue, 1939)",
      "MMPI=Inventario de 1943 con ítems elegidos por diferenciar grupos clínicos",
      "TAT=Técnica proyectiva de Morgan y Murray (1935)",
      "Yerkes=Dirigió el grupo que elaboró en 1917 las pruebas colectivas del ejército de EE. UU.",
      "Meehl (1954)=Mostró que la predicción estadística igualaba o superaba al juicio clínico",
      "GAP=Guías para el Proceso de Evaluación (Fernández-Ballesteros et al., 2001)"
    ],
    g: [
      "El Army ___ era la prueba no verbal para analfabetos.|Beta|Alpha|Gamma",
      "El Wechsler-Bellevue sustituyó el cociente de edades porque en adultos la edad mental deja de ___.|crecer|existir|importar",
      "Los estudios de Chapman y Chapman sobre la correlación ___ criticaron las técnicas proyectivas.|ilusoria|espuria|parcial",
      "Los Standards de AERA, APA y NCME (2014) fijaron que se valida la ___ de las puntuaciones para un uso concreto.|interpretación|fiabilidad|estructura",
      "La teoría de respuesta al ítem permite los tests ___ informatizados.|adaptativos|colectivos|proyectivos"
    ],
    tf: [
      "El Army Alpha era la versión no verbal destinada a reclutas analfabetos.|F|Es al revés: el Alpha era verbal, y el Beta, no verbal, para analfabetos y quienes no dominaban el inglés.",
      "Los ítems del MMPI se seleccionaron por su capacidad para diferenciar grupos clínicos de personas sin trastorno.|V",
      "Mischel (1968) abrió el debate persona-situación al cuestionar que los rasgos predijeran bien la conducta concreta.|V",
      "Tras la crisis de los años cincuenta a setenta, la evaluación psicológica se abandonó en favor de la terapia.|F|No desapareció: cambió hacia enfoques interactivos y cognitivo-conductuales y mejoró sus garantías."
    ],
    q: [
      "Un adulto de 40 años obtiene un CI de 100 en una escala de Wechsler. ¿Qué significa?|Que está en la media de su grupo de edad|Que su edad mental iguala su edad real|Que resuelve el 100 % de las tareas|Es un CI de desviación: expresa la posición respecto al grupo de edad, con media 100 y desviación típica 15.",
      "¿Qué mostró Meehl (1954) en Clinical versus Statistical Prediction?|Que la vía estadística predecía igual o mejor|Que el juicio clínico superaba a las fórmulas|Que los tests proyectivos eran muy fiables|La combinación estadística de datos predecía igual o mejor que el juicio de los clínicos.",
      "¿Qué propusieron Kanfer y Saslow (1965) como alternativa a la clasificación diagnóstica?|El análisis conductual|El CI de desviación|El modelo de rasgos|Con su propuesta nacía la evaluación conductual, centrada en la conducta y en sus determinantes actuales.",
      "¿Qué orden cronológico es el correcto?|Rorschach, TAT, Wechsler-Bellevue, MMPI|TAT, Rorschach, MMPI, Wechsler-Bellevue|Rorschach, Wechsler-Bellevue, TAT, MMPI|Rorschach es de 1921, el TAT de 1935, el Wechsler-Bellevue de 1939 y el MMPI de 1943."
    ],
    inc: [
      "Sobre la expansión de los tests|El Wechsler-Bellevue introdujo el cociente de edades|El Army Alpha y el Beta se elaboraron en 1917|El TAT de Morgan y Murray presenta estímulos ambiguos|El Wechsler-Bellevue sustituyó el cociente de edades por el CI de desviación."
    ],
    seq: [
      "Instrumentos del siglo XX en orden cronológico|Army Alpha y Army Beta>Rorschach>TAT>Wechsler-Bellevue>MMPI"
    ],
    cls: [
      "Crítica de la crisis|Meehl (1954): predicción estadística frente a clínica|Chapman y Chapman: correlación ilusoria; técnicas proyectivas|Mischel (1968): consistencia entre situaciones; debate persona-situación"
    ] },
  { t: "La evaluación psicológica en España",
    tip: "La evaluación científica llegó a España con la psicotecnia. Mira i López dirigió el laboratorio del Institut d'Orientació Professional y en 1922 estudió la selección de conductores de autobús. Tras la guerra, Germain dirigió el departamento del CSIC. La Escuela de Psicología y Psicotecnia (1953), la cátedra de Yela y TEA (1957), el Colegio (1979–80) y el Código Deontológico (1987) marcan la institucionalización.",
    v: [
      "Psicotecnia=Aplicación de la psicología a la orientación y la selección profesional",
      "Mira i López=Jefe del laboratorio del Institut d'Orientació Professional desde 1919",
      "Selección de conductores (1922)=Estudio considerado inicio de la evaluación empírica de aptitudes en España",
      "José Germain=Dirigió el Departamento de Psicología Experimental del CSIC tras la guerra",
      "Mariano Yela=Primer catedrático de la nueva etapa, con cátedra de Psicología General en 1957",
      "TEA Ediciones=Fundada por Roberto Cuñat en 1957, adaptó tests con Yela",
      "Fernández-Ballesteros=Autora de referencia que coordinó las GAP (2001)",
      "Código Deontológico=Aprobado el 22 de mayo de 1987, con un nuevo proyecto en tramitación en 2026"
    ],
    g: [
      "La Escuela de Psicología y Psicotecnia de la Universidad de Madrid se creó en ___.|1953|1971|1957",
      "La primera promoción de licenciados en Psicología salió en ___.|1971|1953|1987",
      "La Sociedad Española de Psicología se fundó en ___.|1952|1943|1968",
      "Antes de Yela ya existía la cátedra de Psicología Experimental de ___.|Simarro|Germain|Mira",
      "El Colegio Oficial de Psicólogos se creó por la Ley ___.|43/1979|15/1987|43/1953"
    ],
    tf: [
      "Mariano Yela fue el primer catedrático de psicología de la historia de España.|F|Fue el primero de la nueva etapa. A comienzos del siglo XX ya existía la cátedra de Psicología Experimental de Simarro.",
      "Las fuentes discrepan sobre si el departamento del CSIC dirigido por Germain se creó en 1943 o en 1948.|V",
      "La Escuela de Psicología y Psicotecnia de Madrid fue la primera institución española de psicotecnia.|F|Antes, en 1918–1919, se creó en Barcelona el Institut d'Orientació Professional, con Mira i López.",
      "La Guerra Civil interrumpió el desarrollo de la psicotecnia, y Mira i López marchó al exilio.|V"
    ],
    q: [
      "¿Qué estudio se considera el inicio de la evaluación empírica de aptitudes profesionales en España?|La selección de conductores de Mira (1922)|El Examen de ingenios de Huarte (1575)|Las adaptaciones de tests de TEA (1958)|Mira estudió la selección de conductores de la Compañía General de Autobuses de Barcelona.",
      "¿En qué institución se formaron Yela, Pinillos, Siguán y Secadas?|En el departamento del CSIC de Germain|En el Institut d'Orientació Professional|En la Escuela de Psicotecnia de Madrid|Se formaron en el Departamento de Psicología Experimental del CSIC, en el Instituto Luis Vives.",
      "¿Qué obra NO corresponde a Fernández-Ballesteros?|Examen de ingenios para las ciencias|Introducción a la evaluación psicológica|Psicodiagnóstico (1980)|El Examen de ingenios es de Huarte (1575). Fernández-Ballesteros publicó Psicodiagnóstico y dirigió la Introducción (1992).",
      "¿Qué orden es el correcto?|Escuela de Psicotecnia, primeros licenciados, Colegio, Código|Primeros licenciados, Escuela de Psicotecnia, Colegio, Código|Escuela de Psicotecnia, Colegio, primeros licenciados, Código|La Escuela es de 1953, los primeros licenciados de 1971, el Colegio de 1979–80 y el Código de 1987."
    ],
    inc: [
      "Sobre la evaluación en España|TEA Ediciones fue fundada por Mira i López en 1922|El Código Deontológico se aprobó el 22 de mayo de 1987|Fernández-Ballesteros coordinó las GAP en 2001|TEA la fundó Roberto Cuñat en 1957. En 1922 Mira estudió la selección de conductores en Barcelona."
    ],
    seq: [
      "Hitos de la evaluación en España|Examen de ingenios de Huarte>Selección de conductores de Mira>Escuela de Psicología y Psicotecnia>Cátedra de Yela y fundación de TEA>Primera promoción de licenciados>Colegio Oficial de Psicólogos>Código Deontológico"
    ],
    cls: [] }
] },
{ n: 3, t: "Grandes enfoques de la evaluación", cap: 1, pir: "media", mods: [
  { t: "El modelo psicométrico o del atributo",
    tip: "El modelo psicométrico, del atributo o correlacional supone que la conducta depende de rasgos y aptitudes internos y relativamente estables, que se infieren tratando las respuestas como signos. Usa el método correlacional, baremos e interpretación normativa, y sus garantías centrales son la fiabilidad y la validez. Su inferencia es alta, y la crítica de Mischel (1968) a la consistencia entre situaciones abrió el debate persona-situación.",
    v: [
      "Modelo de evaluación=Supuestos sobre qué determina la conducta, qué evaluar y con qué técnicas",
      "Modelo psicométrico=Infiere rasgos y aptitudes estables a partir de tests y los compara con normas",
      "Constructo hipotético=Etiqueta teórica para un patrón de conductas que tienden a aparecer juntas",
      "Grupo normativo=Muestra de referencia con la que se compara la puntuación de una persona",
      "Interpretación normativa=Comparación de la puntuación con la de un grupo de referencia",
      "Método correlacional=Relacionar puntuaciones entre sí y con criterios externos en muestras amplias",
      "Debate persona-situación=Discusión abierta por Mischel sobre si los rasgos predicen la conducta concreta",
      "Muñiz et al. (2020)=Estudio que sitúa los tests psicométricos como los más usados en España"
    ],
    g: [
      "En el modelo psicométrico, las respuestas a un test se tratan como ___ del atributo.|signos|muestras|síntomas",
      "Un percentil 85 indica que la persona rinde mejor que el ___ de su grupo de referencia.|85 %|15 %|50 %",
      "El nivel de inferencia del modelo psicométrico es ___.|alto|bajo|medio",
      "El modelo psicométrico pesa sobre todo en los contextos educativo y ___.|organizacional|forense|comunitario",
      "Además de describir y clasificar, el objetivo principal del modelo psicométrico es ___.|predecir|explicar|intervenir"
    ],
    tf: [
      "Los rasgos del modelo psicométrico se observan directamente en la conducta de la persona.|F|No se observan: se infieren de sus manifestaciones. Un rasgo es un constructo hipotético deducido de una regularidad.",
      "En España, los tests más usados por los psicólogos son psicométricos.|V",
      "Una crítica al modelo psicométrico es que conocer el nivel de un rasgo dice poco sobre cómo intervenir.|V",
      "El modelo psicométrico procede de la tradición experimental de Wundt.|F|Procede de la psicología diferencial que iniciaron Galton, J. McKeen Cattell y Binet."
    ],
    q: [
      "Un aspirante a conductor obtiene un percentil 85 en atención sostenida, y la prueba se relaciona con la siniestralidad. ¿Para qué sirve sobre todo esa puntuación en este modelo?|Para predecir su desempeño|Para explicar sus accidentes|Para planificar una intervención|El modelo psicométrico busca describir, clasificar y, sobre todo, predecir, comparando con un grupo normativo.",
      "Alguien llega puntual, planifica sus tareas y revisa su trabajo, y se le atribuye un nivel alto de responsabilidad. ¿Qué es esa responsabilidad?|Un constructo hipotético|Una muestra de conducta|Un síntoma observable|El rasgo no se ve: es una etiqueta teórica deducida de la regularidad de esas conductas.",
      "¿Qué garantías son centrales en el modelo psicométrico?|Fiabilidad y validez|Validez social y ecológica|Utilidad de tratamiento|Como se basa en tests y baremos, la fiabilidad y la validez de las pruebas son sus garantías centrales.",
      "¿Qué crítica de Mischel (1968) afectó sobre todo al modelo psicométrico?|La escasa consistencia entre situaciones|La falta de baremos poblacionales|La baja fiabilidad de las entrevistas|Los rasgos predicen peor la conducta concreta en una situación concreta, lo que abrió el debate persona-situación."
    ],
    inc: [
      "Sobre el modelo psicométrico|Su nivel de inferencia es bajo porque mide conducta|Interpreta las puntuaciones de forma normativa|Supone atributos internos relativamente estables en el tiempo|Su inferencia es alta: de unas respuestas se salta a un atributo interno y, a menudo, a una predicción."
    ],
    seq: [],
    cls: [] },
  { t: "Los modelos médico y dinámico",
    tip: "Ambos sitúan las causas de la conducta dentro del organismo. El modelo médico recoge síntomas para identificar un síndrome y llegar a un diagnóstico que oriente el tratamiento, con entrevista clínica, examen del estado mental, DSM y CIE, e inferencia medio-alta. El dinámico, de raíz psicoanalítica, busca conflictos inconscientes con técnicas proyectivas y tiene la inferencia más alta.",
    v: [
      "Modelo médico=Evalúa síntomas para diagnosticar un trastorno que oriente el tratamiento",
      "Síndrome=Cuadro que forman juntos los síntomas, o entidad nosológica",
      "Modelo dinámico=Busca conflictos y estructuras inconscientes, sobre todo con técnicas proyectivas",
      "Técnica proyectiva=Estímulo ambiguo ante el que la persona revelaría su organización psíquica",
      "Funcionamiento intrapsíquico=Impulsos, conflictos inconscientes, defensas y estructura de personalidad",
      "Rettew et al. (2009)=Hallaron baja concordancia entre diagnóstico rutinario y entrevistas estandarizadas",
      "DSM-5-TR y CIE-11=Sistemas de clasificación de referencia actuales del enfoque psiquiátrico",
      "Inferencia muy alta=Nivel propio del enfoque psicoanalítico, que pasa de una lámina a conflictos ignorados"
    ],
    g: [
      "El nivel de inferencia del modelo médico es ___.|medio-alto|muy alto|bajo-medio",
      "En la práctica psicoanalítica no hay una fase de evaluación separada del ___.|tratamiento|diagnóstico|informe",
      "El Código Deontológico pide cautela con etiquetas como «normal/anormal» en su artículo ___.|12|25|6",
      "El modelo dinámico deriva del ___.|psicoanálisis|conductismo|humanismo",
      "El modelo médico aporta un ___ común entre profesionales y da acceso a prestaciones.|lenguaje|baremo|método"
    ],
    tf: [
      "En el modelo dinámico, el objeto de estudio es la conducta en sí misma.|F|Le interesa lo que la conducta expresa de la vida mental inconsciente, no la conducta en sí.",
      "Dos personas con el mismo diagnóstico pueden necesitar intervenciones distintas.|V",
      "En el modelo médico, cada síntoma interesa por sí mismo, con independencia del cuadro que forme con otros.|F|Interesa qué cuadro forman juntos, el síndrome: cada síntoma funciona como una pista del trastorno de fondo.",
      "Los modelos médico y dinámico comparten con el psicométrico la idea de que las causas de la conducta son internas.|V"
    ],
    q: [
      "Un clínico pide a una paciente que describa láminas ambiguas y deduce de ellas conflictos de su infancia que ella desconoce. ¿Qué modelo aplica?|El dinámico|El fenomenológico|El médico|Usa técnicas proyectivas para inferir conflictos inconscientes. Es el modelo con el nivel de inferencia más alto.",
      "¿Qué técnicas usa preferentemente el modelo médico?|Entrevista clínica y examen del estado mental|Láminas ambiguas y asociación libre|Observación directa y análisis funcional|Las completa con escalas de síntomas y observación, y toma como referencia el DSM y la CIE.",
      "¿Qué límite se atribuye al diagnóstico del modelo médico?|La etiqueta no explica qué mantiene el problema|No permite un lenguaje común entre profesionales|Impide el acceso a tratamientos y prestaciones|Además, dos personas con el mismo diagnóstico pueden necesitar intervenciones distintas, y la etiqueta puede estigmatizar.",
      "¿Qué problema principal se atribuye al modelo dinámico?|Cuesta someter a prueba sus inferencias|Su nivel de inferencia es demasiado bajo|Ignora las experiencias de la infancia|Además, muchas interpretaciones proyectivas tienen garantías débiles, como mostraron los estudios sobre correlación ilusoria."
    ],
    inc: [
      "Sobre los modelos médico y dinámico|El modelo dinámico se usa mucho fuera de la clínica|El modelo médico se apoya en el DSM y la CIE|El modelo dinámico prefiere situaciones abiertas|Como no separa evaluación y tratamiento, el modelo dinámico apenas se usa fuera de la clínica."
    ],
    seq: [],
    cls: [
      "Modelo|Médico: síntomas; síndrome; DSM y CIE; inferencia medio-alta|Dinámico: conflictos inconscientes; técnicas proyectivas; inferencia muy alta"
    ] },
  { t: "Los modelos fenomenológico y constructivista",
    tip: "Para estos modelos importa cómo vive e interpreta la persona su experiencia. El fenomenológico, de raíz rogeriana, evalúa el autoconcepto con la entrevista centrada en el cliente, autoinformes y el Q-sort (Stephenson, 1953), con inferencia media. El constructivista parte de Kelly (1955) y usa la rejilla de constructos personales. La evaluación dinámica de Vygotsky y Luria mide el potencial de aprendizaje y no tiene relación con el modelo psicoanalítico.",
    v: [
      "Modelo fenomenológico=Evalúa la experiencia subjetiva y el autoconcepto desde el marco del propio sujeto",
      "Q-sort=Ordenar frases según lo bien que describen a uno, ajustándose a una distribución fija",
      "Yo ideal=Cómo le gustaría ser a la persona, comparado con el yo real en la tradición rogeriana",
      "Constructo personal=Dimensión bipolar con la que alguien organiza su experiencia",
      "Rejilla de constructos=Técnica de Kelly que obtiene y puntúa las dimensiones personales de un sujeto",
      "George Kelly (1955)=Vio a cada persona como un científico que formula y prueba hipótesis",
      "Evaluación dinámica=Mide el potencial de aprendizaje con ayuda, en la zona de desarrollo próximo",
      "Zona de desarrollo próximo=Distancia entre lo que se resuelve sin ayuda y lo que se resuelve con ella"
    ],
    g: [
      "El nivel de inferencia del modelo fenomenológico es ___.|medio|alto|bajo",
      "En la rejilla, la persona compara figuras en grupos de ___ para obtener sus constructos.|tres|dos|cuatro",
      "El Q-sort genera puntuaciones ___, porque ordena las frases dentro de la misma persona.|ipsativas|normativas|criteriales",
      "La entrevista centrada en el cliente se basa en la empatía, la aceptación y la ___.|autenticidad|confrontación|interpretación",
      "La evaluación dinámica se usa sobre todo en la escuela y en la rehabilitación ___.|neuropsicológica|psiquiátrica|laboral"
    ],
    tf: [
      "La rejilla de constructos personales es la técnica característica del modelo humanista de Rogers.|F|La rejilla es de Kelly y su teoría de los constructos personales. A la tradición rogeriana se asocia el Q-sort.",
      "La rejilla muestra que lo idiográfico no está reñido con lo cuantitativo.|V",
      "La evaluación dinámica de Vygotsky y Luria deriva del modelo dinámico o psicoanalítico.|F|Pese al nombre, no tiene relación con él: se basa en la zona de desarrollo próximo y mide el potencial de aprendizaje.",
      "El riesgo del modelo fenomenológico es depender casi por completo del autoinforme.|V"
    ],
    q: [
      "Una psicóloga pide a un paciente que compare de tres en tres a su madre, su pareja y su «yo ideal» y diga en qué se parecen dos y difieren del tercero. ¿Qué técnica usa?|La rejilla de constructos|El Q-sort de Stephenson|La entrevista centrada en el cliente|Así surgen los constructos personales, que después se puntúan en una matriz analizable (Kelly, 1955).",
      "En la tradición rogeriana, ¿para qué se usa el Q-sort?|Para comparar el yo real y el yo ideal|Para obtener constructos bipolares|Para estimar el potencial de aprendizaje|Compara cómo se ve la persona con cómo le gustaría ser. Los constructos bipolares se obtienen con la rejilla de Kelly.",
      "Un evaluador da pistas a un niño durante una tarea y registra cuánto mejora con ayuda. ¿Qué enfoque aplica?|La evaluación dinámica|El modelo dinámico|El modelo fenomenológico|Mide la distancia entre lo que resuelve solo y con ayuda, en la tradición de Vygotsky y Luria.",
      "¿Qué imagen de la persona propuso Kelly?|Un científico que prueba hipótesis|Un ordenador que procesa información|Un organismo que responde a estímulos|Cada persona elabora hipótesis sobre el mundo con sus constructos y las pone a prueba."
    ],
    inc: [
      "Sobre estos modelos|El modelo fenomenológico se basa en normas de grupo|Los constructos de Kelly son dimensiones bipolares|El Q-sort exige ajustarse a una distribución fija|El modelo fenomenológico desconfía de las etiquetas diagnósticas y de las comparaciones con normas."
    ],
    seq: [],
    cls: [
      "Enfoque|Fenomenológico: Rogers; Q-sort; entrevista centrada en el cliente|Constructivista: Kelly; rejilla de constructos; constructos bipolares|Psicología soviética: Vygotsky y Luria; evaluación dinámica; zona de desarrollo próximo"
    ] },
  { t: "Los modelos conductual y cognitivo-conductual",
    tip: "El modelo conductual, nacido en los sesenta con Kanfer y Saslow (1965) y la crítica de Mischel (1968), pregunta qué hace la persona, en qué situaciones y qué lo mantiene. Trata la respuesta como muestra, tiene inferencia baja, metodología experimental y une evaluación e intervención. El cognitivo-conductual añade cogniciones y emociones, con autorregistros y autoinformes como el ATQ, e inferencia bajo-media. Hoy los modelos se consideran complementarios.",
    v: [
      "Modelo conductual=Evalúa la conducta y sus determinantes ambientales actuales con baja inferencia",
      "Modelo cognitivo-conductual=Añade pensamientos, expectativas, atribuciones y emociones a lo evaluado",
      "ATQ=Autoinforme de cogniciones de Hollon y Kendall (1980)",
      "Autorregistro=Técnica en la que la propia persona anota su conducta o sus pensamientos",
      "Evaluación tradicional=Conjunto de los modelos psicométrico, médico y dinámico",
      "Modelo biopsicosocial=Recuerda que en todo problema intervienen factores biológicos, psicológicos y sociales",
      "Evaluación basada en evidencia=Elegir instrumentos por validez, utilidad clínica y validez incremental",
      "Diseño de caso único=Medidas repetidas de una persona para comprobar qué controla su conducta"
    ],
    g: [
      "El nivel de inferencia del modelo cognitivo-conductual es ___.|bajo-medio|medio-alto|bajo",
      "En la evaluación conductual, la puntuación se compara con ___ a lo largo del tiempo.|la propia persona|un grupo normativo|un criterio externo",
      "La técnica preferente del modelo conductual es la observación ___.|directa|participante|clínica",
      "La metodología del modelo conductual es de inspiración ___.|experimental|correlacional|clínica",
      "La evaluación conductual está unida a la ___: se evalúa para decidir qué cambiar.|intervención|clasificación|predicción"
    ],
    tf: [
      "La evaluación conductual no usa autoinformes y solo admite la observación directa.|F|Usa autoinformes, entrevistas y autorregistros, pero interpreta las respuestas como muestras y no como signos.",
      "Cone (1978) incluye la entrevista y el autoinforme entre los métodos de su cubo de evaluación conductual.|V",
      "En la evaluación conductual, los determinantes son ambientales y actuales, en interacción con el organismo.|V",
      "El modelo cognitivo-conductual tiene una inferencia más baja que el conductual porque usa autorregistros.|F|Es algo mayor, bajo-media, porque los pensamientos solo son accesibles a través de lo que la persona informa."
    ],
    q: [
      "Una persona con fobia a volar responde en un cuestionario «evito los aviones siempre que puedo». ¿Cómo lo interpreta una evaluadora conductual?|Como muestra de su evitación|Como signo de neuroticismo|Como síntoma de un síndrome|Los modelos conductuales usan autoinformes, pero toman la respuesta como muestra de conducta, no como indicador de un rasgo.",
      "¿Qué pregunta caracteriza al modelo conductual frente a los tradicionales?|Qué hace y qué lo mantiene|Qué rasgo tiene la persona|Qué conflicto inconsciente expresa|Ya no se trata de saber qué tiene la persona, sino qué hace, en qué situaciones y qué lo mantiene.",
      "¿En qué se basa la evaluación basada en la evidencia para elegir un instrumento?|En su validez para el propósito concreto|En la escuela teórica del evaluador|En la tradición de uso del instrumento|Hunsley y Mash piden validez para el propósito, utilidad clínica y validez incremental, no adscripción a una escuela.",
      "Un evaluador usa en el mismo caso un test normativo de ansiedad, una entrevista diagnóstica y un análisis funcional. ¿Qué ilustra?|La complementariedad de los modelos|Un error por mezclar enfoques incompatibles|La primacía del modelo médico|Hoy los modelos se entienden como complementarios al servicio de la pregunta de evaluación."
    ],
    inc: [
      "Sobre la evaluación conductual frente a la tradicional|La conductual evalúa solo antes de intervenir|La tradicional busca determinantes internos y estables|La conductual trata la respuesta como muestra|La evaluación conductual se aplica antes, durante y después de intervenir. Evaluar solo antes es propio de la tradicional."
    ],
    seq: [
      "Modelos de mayor a menor nivel de inferencia|Dinámico>Psicométrico>Médico>Fenomenológico>Cognitivo-conductual>Conductual"
    ],
    cls: [
      "Evaluación|Tradicional: determinantes internos; signo; inferencia alta; grupo normativo|Conductual: determinantes ambientales; muestra; inferencia baja; la propia persona"
    ] }
] },
{ n: 4, t: "Disyuntivas clásicas y evaluación conductual", cap: 1, pir: "alta", mods: [
  { t: "Nomotético, idiográfico e idiotético; cuantitativo y cualitativo",
    tip: "Allport (1937) popularizó la distinción entre lo nomotético, que busca leyes generales y sitúa al individuo respecto a una norma, y lo idiográfico, que estudia el caso único. Lamiell propuso el enfoque idiotético: describir sin normas de grupo y buscar principios generales, propuesta criticada por Paunonen (1986). Cuantitativo y cualitativo son complementarios y no equivalen a objetivo y subjetivo.",
    v: [
      "Enfoque nomotético=Estudia a las personas como miembros de una clase y busca leyes generales",
      "Enfoque idiográfico=Estudia a la persona como caso único, con su historia y su contexto",
      "Enfoque idiotético=Describe al individuo sin normas de grupo y busca principios generales",
      "Allport (1937)=Popularizó la distinción entre leyes generales y caso único en personalidad",
      "Lamiell (1981, 1997)=Propuso una tercera vía entre lo general y lo individual",
      "Paunonen (1986)=Autor de críticas metodológicas a la tercera vía de Lamiell",
      "Evaluación cualitativa=Comprensión global del significado de la experiencia, con entrevista abierta o relato",
      "Evaluación cuantitativa=Medición estandarizada y análisis estadístico de los datos"
    ],
    g: [
      "Cattell, Eysenck y Costa y McCrae son ejemplos de autores ___.|nomotéticos|idiográficos|idiotéticos",
      "Freud, Rogers y Kelly son ejemplos de autores de orientación ___.|idiográfica|nomotética|idiotética",
      "El enfoque idiotético describe a cada persona sin transformar sus puntuaciones en ___ de grupo.|normas|criterios|medias",
      "Una escala de 0 a 10 en la que el paciente puntúa su dolor es cuantitativa y ___ a la vez.|subjetiva|objetiva|cualitativa",
      "El enfoque idiotético busca principios generales a partir de muchas descripciones ___.|individuales|normativas|grupales"
    ],
    tf: [
      "Cuantitativo y objetivo son equivalentes, igual que cualitativo y subjetivo.|F|No coinciden: una escala de dolor de 0 a 10 es cuantitativa y subjetiva, y un registro narrativo puede ser riguroso.",
      "Allport, que popularizó la distinción entre nomotético e idiográfico, es él mismo un autor de orientación idiográfica.|V",
      "El enfoque idiotético ha desplazado a los enfoques nomotético e idiográfico clásicos.|F|No los ha desplazado y recibió críticas metodológicas (Paunonen, 1986), aunque muestra que pueden articularse.",
      "Una entrevista abierta puede generar hipótesis que después se contrastan con medidas cuantitativas.|V"
    ],
    q: [
      "Para evaluar la timidez de Lucía, una psicóloga explora en qué situaciones se cohíbe, qué piensa y qué hace, y elabora una descripción que solo vale para ella. ¿Qué enfoque sigue?|Idiográfico|Nomotético|Ipsativo|La estudia como caso único. Si comparara su puntuación con la de las mujeres de su edad, sería nomotético.",
      "¿Qué distingue lo ipsativo de lo idiográfico?|Lo ipsativo es un tipo de puntuación|Lo ipsativo busca leyes generales|Lo ipsativo usa normas de grupo|Lo idiográfico es una orientación hacia el caso único. Lo ipsativo compara a la persona consigo misma.",
      "¿Qué propuso Lamiell con el enfoque idiotético?|Generalizar a partir de descripciones individuales|Comparar a cada persona con la norma de su grupo de edad|Estudiar casos únicos renunciando a cualquier generalización|Describir a cada persona sin normas de grupo y buscar principios generales a partir de muchas descripciones.",
      "Un registro narrativo detallado de lo que hace un niño en el recreo es…|cualitativo y puede ser riguroso|cuantitativo por ser sistemático|subjetivo y por ello poco válido|La oposición cualitativo y cuantitativo no coincide con la de subjetivo y objetivo."
    ],
    inc: [
      "Sobre las disyuntivas|Nomotético e idiográfico nunca se combinan en la práctica|La evaluación cualitativa puede generar hipótesis|Un dato numérico puede necesitar explicación cualitativa|Las disyuntivas parecen excluirse, pero en la práctica suelen combinarse."
    ],
    seq: [],
    cls: [
      "Enfoque|Nomotético: leyes generales; norma de grupo; Eysenck|Idiográfico: caso único; historia y contexto; Rogers|Idiotético: sin normas de grupo; principios generales; Lamiell"
    ] },
  { t: "Signo y muestra, normativo y criterial, rasgo y estado",
    tip: "Según Goodenough (1949), una respuesta es signo si indica un atributo distinto de ella misma y muestra si es parte representativa de la conducta de interés. Las puntuaciones se interpretan de forma normativa, criterial o ipsativa, y esta última no permite comparar sujetos. El STAI separa ansiedad estado y rasgo. Otras disyuntivas son estructura frente a función, molar frente a molecular y ancho de banda frente a fidelidad.",
    v: [
      "Signo=Respuesta interpretada como indicador de un atributo distinto de ella misma",
      "Muestra=Parte representativa del conjunto de conductas que interesan",
      "Interpretación criterial=Comparación con un nivel de dominio fijado de antemano",
      "Puntuación ipsativa=Compara las puntuaciones de una persona entre sí, no entre sujetos",
      "Estado=Condición transitoria ligada a la situación",
      "Topografía=Forma de una conducta, que puede cumplir funciones distintas",
      "Unidad molecular=Conducta muy concreta, como levantar la mano, que facilita el acuerdo",
      "Ancho de banda=Amplitud de información de un instrumento, a costa de su precisión en cada aspecto"
    ],
    g: [
      "La distinción entre signo y muestra la formuló ___ (1949).|Goodenough|Mischel|Allport",
      "«Resuelve correctamente 18 de los 20 tipos de problema que exige el programa» es una interpretación ___.|criterial|normativa|ipsativa",
      "Las puntuaciones ipsativas aparecen en los formatos de elección ___ y en el Q-sort.|forzada|múltiple|libre",
      "Cronbach y Gleser señalaron que más ancho de banda suele implicar menos ___.|fidelidad|validez|amplitud",
      "En el STAI, la pregunta «¿cómo se siente ahora mismo?» corresponde a la ansiedad ___.|estado|rasgo|general"
    ],
    tf: [
      "Las puntuaciones ipsativas permiten comparar directamente a distintas personas.|F|Ordenan las preferencias dentro de la misma persona, así que no permiten comparar directamente a distintos sujetos.",
      "Para la muestra, el problema central es demostrar que es representativa de la conducta en otras situaciones y momentos.|V",
      "Las unidades molares facilitan el acuerdo entre observadores, aunque pueden perder significado.|F|Son las unidades moleculares las que facilitan el acuerdo entre observadores, a riesgo de perder significado.",
      "Un test específico de atención tiene poco ancho de banda y mucha fidelidad.|V"
    ],
    q: [
      "Un niño llora en clase. La psicóloga averigua que unas veces lo hace para obtener atención y otras para evitar una tarea difícil. ¿Qué disyuntiva ilustra?|Estructura frente a función|Rasgo frente a estado|Molar frente a molecular|La misma topografía puede cumplir funciones distintas: describir la conducta no basta, hay que saber para qué sirve.",
      "Una opositora puntúa alto en ansiedad estado la mañana del examen y medio en ansiedad rasgo. ¿Cómo se interpreta?|Una reacción pasajera a la situación|Un error de medida del cuestionario|Una tendencia estable muy elevada|El estado es una condición transitoria ligada a la situación. El rasgo es una tendencia estable, aquí media.",
      "Alguien responde «sí» a «me preocupo por muchas cosas» y el evaluador infiere un rasgo de ansiedad. Trata la respuesta como…|un signo|una muestra|un estado|La interpreta como indicador de algo distinto de ella misma, un atributo interno.",
      "En todos los ítems, una persona elige entre «me gusta organizar» y «me gusta crear». ¿Qué no puede concluirse?|Que le guste organizar más que a otra|Que ella prefiera organizar antes que crear|Cuál es su orden de preferencias|Las puntuaciones ipsativas ordenan preferencias dentro de la persona, pero no permiten comparar sujetos."
    ],
    inc: [
      "Sobre estas disyuntivas|La interpretación normativa compara con un nivel de dominio|La interpretación ipsativa compara a la persona consigo misma|La unidad elegida fija la fiabilidad alcanzable|La comparación con un nivel de dominio fijado es criterial. La normativa compara con un grupo de referencia."
    ],
    seq: [],
    cls: [
      "Referencia de interpretación|Normativa: grupo de referencia; percentil 40 de su curso|Criterial: nivel de dominio; 18 de 20 tipos de problema|Ipsativa: misma persona; elección forzada; Q-sort"
    ] },
  { t: "El análisis funcional y el modelo E-O-R-K-C",
    tip: "El análisis funcional identifica qué variables controlan una conducta problema. Kanfer y Saslow (1965) lo propusieron como alternativa a la clasificación diagnóstica. La fórmula E-O-R-K-C tomó la K de Lindsley (1964) y la sistematizaron Kanfer y Phillips (1970): estímulo, organismo, respuesta, contingencia y consecuencia. Para Haynes y O'Brien (1990) es idiográfico, busca relaciones causales controlables y es una hipótesis revisable.",
    v: [
      "Análisis funcional=Identificación de relaciones causales importantes y controlables de las conductas de un cliente",
      "Estímulo (E)=Antecedentes que preceden a la conducta: cuándo y dónde ocurre",
      "Organismo (O)=Estado biológico e historia de aprendizaje de la persona",
      "Respuesta (R)=Conducta motora, cognitiva y fisiológica",
      "Contingencia (K)=Relación o programa que une la respuesta con lo que la sigue",
      "Consecuencia (C)=Lo que ocurre tras la conducta: qué gana o qué evita la persona",
      "Excesos conductuales=Lo que ocurre demasiado, en el análisis inicial de Kanfer y Saslow",
      "Refuerzo negativo=Retirada de un malestar que mantiene la conducta, como el alivio al evitar"
    ],
    g: [
      "La K de la fórmula E-O-R-K-C procede de ___ (1964).|Lindsley|Kanfer|Phillips",
      "La fórmula E-O-R-K-C quedó sistematizada en Kanfer y ___ (1970).|Phillips|Saslow|Lindsley",
      "En el análisis inicial de Kanfer y Saslow se identifican excesos, déficits y ___.|recursos|reforzadores|síntomas",
      "Una historia de burlas en la infancia ayuda a entender el caso, pero no es una variable ___.|controlable|histórica|relevante",
      "En el caso de Daniel, la contingencia es ___: siempre que evita la exposición, se alivia.|continua|intermitente|variable"
    ],
    tf: [
      "En la fórmula E-O-R-K-C, la K designa la consecuencia que sigue a la respuesta.|F|La K es la contingencia o programa: la regularidad con que la consecuencia sigue a la respuesta.",
      "Según Haynes y O'Brien, el análisis funcional es una hipótesis que se revisa también durante el tratamiento.|V",
      "El análisis funcional es un procedimiento nomotético que vale para todos los casos con el mismo diagnóstico.|F|Es idiográfico: vale para una persona concreta y para su conjunto de conductas.",
      "La guía de siete áreas de Kanfer y Saslow incluye el análisis motivacional y el del autocontrol.|V"
    ],
    q: [
      "A Daniel le tiembla la voz al exponer, piensa que hará el ridículo y pide a otro que presente por él. Al evitarlo siente un alivio inmediato. ¿Qué mantiene la evitación?|El refuerzo negativo|El refuerzo positivo|El castigo positivo|El alivio retira el malestar, y eso refuerza negativamente la evitación.",
      "En el análisis E-O-R-K-C de Daniel, ¿qué elemento recoge su historia de burlas y su activación alta?|El organismo|El estímulo|La contingencia|El organismo recoge el estado biológico y la historia de aprendizaje: lo que aporta la persona.",
      "¿Qué pregunta guía corresponde a la K?|Con qué regularidad sigue la consecuencia|Qué gana o qué evita la persona al hacerlo|Cuándo y dónde ocurre la conducta problema|La K es la contingencia o programa. Qué gana o evita corresponde a la C, y cuándo y dónde, a la E.",
      "¿Por qué el análisis funcional se centra en relaciones controlables?|Porque busca dónde se puede intervenir|Porque solo lo controlable es causal|Porque así puede compararse con normas|Las variables históricas ayudan a entender el caso, pero no pueden cambiarse. La evitación actual sí."
    ],
    inc: [
      "Sobre el análisis funcional|Kanfer y Saslow lo propusieron para completar el diagnóstico|Haynes y O'Brien lo integraron en el modelo FACCM del caso clínico|Su núcleo es identificar qué variables controlan la conducta|Kanfer y Saslow lo propusieron como alternativa a la clasificación diagnóstica, no como complemento."
    ],
    seq: [
      "Elementos de la fórmula en su orden|Estímulo>Organismo>Respuesta>Contingencia>Consecuencia"
    ],
    cls: [
      "Elemento en el caso de Daniel|Estímulo: tener que exponer en clase|Respuesta: temblor; pensar que hará el ridículo; evitación|Consecuencia: alivio inmediato; refuerzo negativo"
    ] },
  { t: "El triple sistema de respuesta y el cubo de Cone",
    tip: "Lang (1968) propuso que las respuestas emocionales se expresan en tres sistemas débilmente acoplados: motor, cognitivo-verbal y fisiológico. El término desincronía es de Rachman y Hodgson (1974). El cubo de Cone (1978) cruza contenidos, métodos de más indirecto a más directo y universos de generalización. La evaluación conductual subraya además la validez ecológica, la de tratamiento y la social.",
    v: [
      "Triple sistema de respuesta=Expresión emocional en los planos motor, cognitivo-verbal y fisiológico (Lang)",
      "Desincronía=Falta de concordancia entre sistemas de respuesta (Rachman y Hodgson, 1974)",
      "Acoplamiento débil=Los sistemas no siempre cambian a la vez ni en la misma medida",
      "Cubo de Cone=Clasificación de procedimientos conductuales por contenidos, métodos y generalización",
      "Universos de generalización=Observador, ítem, tiempo, situación, método y dimensión",
      "Validez ecológica=Lo evaluado representa la conducta en los contextos naturales",
      "Validez de tratamiento=La evaluación mejora los resultados de la intervención (treatment utility)",
      "Validez social=Objetivos, procedimientos y resultados relevantes y aceptables para la persona"
    ],
    g: [
      "En el cubo de Cone, el método más indirecto es la ___.|entrevista|autoobservación|calificación por otros",
      "Cone propuso reformular fiabilidad y validez como cuestiones de ___.|generalizabilidad|consistencia|representatividad",
      "Un autorregistro diario de cigarrillos es autoobservación de una conducta ___.|motora|cognitiva|fisiológica",
      "La frecuencia cardiaca y la sudoración pertenecen al sistema ___.|fisiológico|motor|cognitivo-verbal",
      "La teoría de la generalizabilidad que sigue Cone es de Cronbach, Gleser, Nanda y ___ (1972).|Rajaratnam|Lindsley|Hodgson"
    ],
    tf: [
      "El término desincronía fue introducido por Lang (1968) junto con el triple sistema.|F|Lang propuso el triple sistema débilmente acoplado. El término desincronía es de Rachman y Hodgson (1974).",
      "Una discrepancia entre los tres sistemas no es necesariamente un error de medida.|V",
      "En el cubo de Cone, la calificación por otros es un método más directo que la autoobservación.|F|El orden va de la entrevista, el autoinforme y la calificación por otros a la autoobservación y la observación directa.",
      "La validez social pregunta si los objetivos y los resultados son aceptables para la persona y su entorno.|V"
    ],
    q: [
      "Durante el tratamiento de su miedo a los ascensores, una paciente dice «ya no me da miedo», su frecuencia cardiaca sigue alta y ya se acerca al ascensor. ¿Qué describe?|Una desincronía entre sistemas|Un error de medida del evaluador|Un fracaso del tratamiento|Los sistemas avanzan a ritmos distintos (Rachman y Hodgson, 1974). Por eso conviene medir los tres.",
      "¿Qué aportación clave se atribuye a Lang (1968)?|Los tres sistemas se acoplan débilmente|Acuñar el término desincronía en 1968|Proponer el cubo de evaluación conductual|Lang describió los sistemas como débilmente acoplados. El término desincronía es de Rachman y Hodgson, y el cubo, de Cone.",
      "Un autorregistro de cigarrillos plantea si los datos de unos días se generalizan a otros. ¿Qué universo de generalización interesa?|El tiempo|La situación|El observador|Es autoobservación de una conducta motora, y la pregunta relevante es su generalización en el tiempo.",
      "¿Qué validez pregunta si la evaluación mejora los resultados de la intervención?|La de tratamiento|La validez ecológica|La validez social|Es la treatment utility. La ecológica se refiere a los contextos naturales, y la social, a la aceptabilidad."
    ],
    inc: [
      "Sobre el cubo de Cone|Sus contenidos son los universos de generalización|Sus métodos van de más indirecto a más directo|Cada procedimiento ocupa una celda concreta del cubo|Los contenidos son los tres sistemas de respuesta. Los universos de generalización forman un eje distinto."
    ],
    seq: [
      "Métodos del cubo de Cone de más indirecto a más directo|Entrevista>Autoinforme>Calificación por otros>Autoobservación>Observación directa"
    ],
    cls: [
      "Sistema de respuesta|Motor: huir; evitar; acercarse|Cognitivo-verbal: lo que piensa; lo que dice sentir|Fisiológico: frecuencia cardiaca; sudoración; tensión muscular"
    ] }
] }
);

// SAIMAP Psicología · Evaluación I · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Las fases del proceso evaluador", cap: 2, pir: "alta", mods: [
  { t: "La evaluación como proceso de toma de decisiones",
    tip: "Evaluar no es aplicar una batería y leer resultados: es una cadena de decisiones que, en la línea de Fernández-Ballesteros, sigue la lógica del método científico. Se recoge información, se plantean hipótesis, se deducen consecuencias comprobables y se contrastan con instrumentos fiables y válidos. Hay dos ramas, la descriptivo-predictiva (correlacional) y la interventivo-valorativa (cercana a la experimental), y el proceso es iterativo, no lineal.",
    v: [
      "Proceso de evaluación=Secuencia iterativa de decisiones para responder a una demanda contrastando hipótesis",
      "Rama descriptivo-predictiva=Camino que describe, clasifica o predice, con lógica correlacional",
      "Rama interventivo-valorativa=Camino que añade un tratamiento y comprueba el cambio, con lógica casi experimental",
      "Proceso iterativo=Si los datos no apoyan una hipótesis, se vuelve atrás y se plantea otra",
      "Contrastación=Fase en la que se comprueba si los datos apoyan las hipótesis",
      "Lógica correlacional=Comparar puntuaciones con normas o criterios y estimar qué cabe esperar",
      "Fase de seguimiento=Repetir las medidas tiempo después para saber si la mejora se mantiene",
      "Fernández-Ballesteros=Autora cuyo modelo de fases sigue la lógica del método científico"
    ],
    g: [
      "Una selección de personal puede cerrarse en la rama ___ del proceso.|descriptivo-predictiva|interventivo-valorativa|funcional-explicativa",
      "La rama interventivo-valorativa sigue una lógica cercana a la ___.|experimental|correlacional|idiográfica",
      "Las fases básicas del proceso son ___, y se añade otra cuando hay intervención.|cuatro|tres|seis",
      "La flecha de retorno de la figura indica que la ___ puede obligar a reformular las hipótesis.|contrastación|demanda|devolución",
      "En la rama descriptivo-predictiva, las puntuaciones se comparan con normas o ___.|criterios|tratamientos|hipótesis"
    ],
    tf: [
      "En el modelo de Fernández-Ballesteros, las conclusiones deben apoyarse en datos que otro evaluador podría revisar.|V",
      "Evaluar es una secuencia lineal: se recoge información, se pasa una batería de tests y se redacta el informe.|F|Es un mito: el proceso es cíclico y la contrastación puede obligar a reformular las hipótesis.",
      "Durante la intervención puede aparecer información que obligue a revisar lo que se creía saber del caso.|V",
      "La rama descriptivo-predictiva introduce un tratamiento y mide su efecto.|F|Eso es propio de la rama interventivo-valorativa. La descriptivo-predictiva compara con normas o criterios."
    ],
    q: [
      "Una madre consulta porque su hija de 14 años ya no quiere ir al instituto. La evaluadora piensa en acoso, pero las entrevistas lo descartan. ¿Qué debe hacer?|Volver a la fase de hipótesis|Redactar el informe sobre acoso|Pasar a la fase de tratamiento|El proceso es iterativo: si los datos no apoyan una hipótesis, se plantea otra y se buscan datos nuevos.",
      "Un servicio de orientación vocacional estima qué estudios encajan mejor con un alumno. ¿Qué rama del proceso sigue?|Descriptivo-predictiva|Interventivo-valorativa|Funcional-explicativa|Basta con describir y predecir comparando con normas o criterios: lógica correlacional.",
      "¿Qué lógica sigue el proceso de evaluación según Fernández-Ballesteros?|La del método científico|La del juicio de autoridad|La de una batería fija|Se recogen datos, se formulan hipótesis, se deducen consecuencias y se contrastan con instrumentos con garantías.",
      "¿Qué fase se añade a las cuatro básicas cuando hay intervención?|Tratamiento, valoración y seguimiento|Análisis de la demanda y entrevista|Hipótesis y enunciados verificables|Las cuatro básicas acaban en resultados e informe. Con intervención sigue el tratamiento, su valoración y el seguimiento."
    ],
    inc: [
      "Sobre el proceso de evaluación|Termina siempre al entregar el informe escrito|Puede volver a empezar si la conducta reaparece|Se apoya en datos revisables por otro evaluador|Sin intervención acaba en el informe, pero con intervención siguen la valoración y el seguimiento, que pueden reabrir el proceso."
    ],
    seq: [
      "Fases del proceso de evaluación|Recogida de información>Hipótesis y enunciados verificables>Contrastación>Resultados e informe>Tratamiento, valoración y seguimiento"
    ],
    cls: [
      "Rama del proceso|Descriptivo-predictiva: lógica correlacional; diagnóstico; selección de personal; orientación vocacional|Interventivo-valorativa: lógica experimental; tratamiento; valoración del cambio; seguimiento"
    ] },
  { t: "Recogida de información y formulación de hipótesis",
    tip: "La recogida de información incluye el análisis de la demanda, la primera entrevista y la comprobación de las condiciones de partida. Conviene usar varias fuentes, porque concuerdan poco (Achenbach, McConaughy y Howell, 1987). Las hipótesis pueden ser de cuantificación, de semejanza, de asociación o predictivas y funcionales o explicativas, y se traducen en enunciados verificables que indican qué medir, con qué técnica y en qué condiciones.",
    v: [
      "Análisis de la demanda=Aclarar quién pide la evaluación, qué pide, para qué y qué espera obtener",
      "Condiciones de partida=Competencia del evaluador, legitimidad de la demanda e información a la persona",
      "Hipótesis de cuantificación=Afirma cuánto, con qué frecuencia o intensidad se da algo",
      "Hipótesis de semejanza=Afirma que el sujeto se parece o difiere de otros o de sí mismo",
      "Hipótesis de asociación=Afirma que dos variables van juntas, lo que permite predecir",
      "Hipótesis funcional=Explica por qué ocurre la conducta: qué la provoca y qué la mantiene",
      "Enunciado verificable=Predicción concreta que indica qué se debería observar si la hipótesis es cierta",
      "Primera entrevista=Recogida inicial del problema, su historia, su contexto y los recursos de la persona"
    ],
    g: [
      "En el metaanálisis de Achenbach y cols., la correlación media entre dos profesores fue de ___.|0,60|0,28|0,22",
      "«Si se le dan fichas más fáciles, se levantará menos que en la línea base» es un enunciado ___.|verificable|normativo|diagnóstico",
      "El Código Deontológico pide rechazar un encargo que se vaya a usar contra los intereses de las personas en su art. ___.|24|25|39",
      "Las hipótesis ___ son las que más información dan para intervenir.|funcionales|de semejanza|de cuantificación",
      "Rettew et al. (2009) hallaron una concordancia ___ entre el diagnóstico rutinario y el de entrevistas estandarizadas.|baja|alta|perfecta"
    ],
    tf: [
      "Quien consulta no siempre es quien va a ser evaluado.|V",
      "Comprobar las condiciones de partida consiste en revisar que el material de los tests esté completo.|F|Consiste en verificar la competencia del evaluador, la legitimidad de la demanda y que la persona esté informada.",
      "Las hipótesis funcionales suelen apoyarse en hipótesis de cuantificación, semejanza o asociación.|V",
      "«Las interrupciones son más frecuentes con tareas escritas largas» es una hipótesis funcional.|F|Solo dice que dos variables van juntas: es de asociación o predictiva. La funcional explica por qué ocurre."
    ],
    q: [
      "Hugo, de 9 años, interrumpe la clase. La evaluadora propone que levantarse le permite escapar de las tareas difíciles. ¿Qué tipo de hipótesis es?|Funcional o explicativa|De asociación o predictiva|De semejanza|Explica qué mantiene la conducta, en este caso un refuerzo negativo por escape de la tarea.",
      "«El nivel de atención de Hugo es inferior al de los niños de su edad.» ¿Qué tipo de hipótesis es?|De semejanza|De cuantificación|Funcional|Compara al sujeto con otros niños de su edad, lo propio de las hipótesis de semejanza.",
      "Un padre pide «un test de inteligencia», pero le inquieta si su hijo debe repetir curso. ¿Qué tarea revela esta diferencia?|El análisis de la demanda|La contrastación de hipótesis|La elección de la técnica|Lo que se pide no siempre coincide con lo que preocupa. Traducir la demanda a términos evaluables es una decisión técnica.",
      "¿Qué define un buen enunciado verificable?|Qué medir, con qué técnica y cuándo|La causa última de la conducta|El diagnóstico que debe confirmarse|Es una predicción concreta que fija a la vez la técnica, la medida y las condiciones de observación."
    ],
    inc: [
      "Sobre la recogida de información|Las fuentes suelen coincidir casi por completo|Conviene usar varias fuentes y varios métodos|Cada informante ve una parte de la conducta|Concuerdan menos de lo que se supone: de 0,60 entre informantes similares a 0,22 entre el niño y los demás."
    ],
    seq: [],
    cls: [
      "Tipo de hipótesis|De cuantificación: frecuencia; intensidad; cuántas veces se levanta|De asociación: dos variables van juntas; predicción; más interrupciones con tareas largas|Funcional: qué la provoca y la mantiene; escapar de tareas difíciles"
    ] },
  { t: "Contrastación, resultados y seguimiento",
    tip: "Las técnicas se eligen por pertinencia, garantías, variedad de métodos y fuentes y coste. Si los datos apoyan la hipótesis se avanza, si la contradicen se vuelve a la fase 2 y si son ambiguos se buscan más datos. En la rama interventivo-valorativa se usan diseños de caso único: línea base y medidas repetidas durante y después del tratamiento, más un seguimiento que puede reabrir el proceso.",
    v: [
      "Pertinencia=La técnica mide lo que el enunciado predice",
      "Garantías=Fiabilidad y validez demostradas para ese uso y esa población",
      "Coste y carga=Tiempo, dinero y molestias para la persona evaluada",
      "Conductas objetivo=Conductas seleccionadas para cambiar en la intervención",
      "Línea base=Medida de la conducta antes de intervenir que sirve de referencia",
      "Medidas repetidas=Registro continuado de la conducta durante y después del tratamiento",
      "Diseño de caso único=Diseño que valora el cambio en un solo individuo comparando tendencias",
      "Datos ambiguos=Desenlace de la contrastación que obliga a buscar información adicional"
    ],
    g: [
      "Si la hipótesis habla de frecuencia en el aula, un cuestionario de personalidad incumple el criterio de ___.|pertinencia|coste|variedad",
      "Si los datos contradicen la hipótesis, se descarta y se vuelve a la fase ___.|2|1|4",
      "Tras la línea base, la conducta de Hugo se sigue registrando durante el tratamiento mediante medidas ___.|repetidas|aisladas|únicas",
      "Cuando no hay intervención prevista, la evaluación acaba en la fase de ___.|resultados e informe|contrastación|seguimiento",
      "Si la conducta reaparece tras el seguimiento, el proceso vuelve a empezar con hipótesis ___.|nuevas|iguales|previas"
    ],
    tf: [
      "La elección de técnicas depende sobre todo de las pruebas que el evaluador tenga más a mano.|F|Depende de cuatro criterios: pertinencia, garantías, variedad de métodos y fuentes y coste y carga.",
      "Volver a la fase de hipótesis tras la contrastación no es un fracaso del evaluador.|V",
      "En la rama interventivo-valorativa, si el cambio es insuficiente se ajusta la intervención o se replantean las hipótesis.|V",
      "En un diseño de caso único basta con una medida antes y otra después del tratamiento.|F|Lo esencial es la línea base y las medidas repetidas, que permiten comparar tendencias."
    ],
    q: [
      "Se registra durante dos semanas cuántas veces se levanta Hugo, se introducen tareas fraccionadas y la frecuencia baja, para subir al retirar los cambios. ¿Qué indica?|Que la hipótesis funcional gana apoyo|Que la línea base estaba mal medida|Que el tratamiento debe suspenderse|El cambio que aparece con la intervención y se revierte al retirarla apoya la explicación funcional.",
      "Los resultados de la contrastación no permiten aceptar ni descartar la hipótesis. ¿Qué procede?|Buscar datos adicionales|Descartar la hipótesis|Redactar el informe final|Hay tres desenlaces: apoyar y avanzar, contradecir y volver a la fase 2, o ambigüedad y buscar más datos.",
      "¿Qué criterio de elección de técnicas se refiere a la fiabilidad y validez para esa población?|Garantías|Pertinencia|Coste y carga|Las garantías son fiabilidad y validez demostradas para ese uso y esa población (Unidades 9 y 10).",
      "Tres meses después de terminar la intervención se repite el registro de la conducta. ¿Qué fase es?|Seguimiento|Línea base|Contrastación|El seguimiento repite las medidas pasado un tiempo para saber si la mejora ha resistido."
    ],
    inc: [
      "Sobre los criterios para elegir técnicas|Conviene limitarse a un único método fiable|La técnica debe medir lo que predice el enunciado|Hay que valorar el tiempo y las molestias|Uno de los criterios es la variedad de métodos y fuentes: entrevista, observación, autoinforme y tests se complementan."
    ],
    seq: [
      "Ciclo de la rama interventivo-valorativa|Seleccionar conductas objetivo e hipótesis>Diseñar y aplicar el tratamiento recogiendo datos>Valorar el cambio>Comunicar los resultados finales>Seguimiento"
    ],
    cls: [
      "Desenlace de la contrastación|Datos que apoyan: se avanza; se integra en el informe|Datos que contradicen: se descarta la hipótesis; vuelta a la fase 2|Datos ambiguos: se buscan datos adicionales"
    ] },
  { t: "Las Guías para el Proceso de Evaluación (GAP)",
    tip: "Las GAP las elaboró un grupo de la EAPA coordinado por Rocío Fernández-Ballesteros y se publicaron en 2001 en el European Journal of Psychological Assessment. Son 96 directrices de consenso, organizadas por fases del proceso, generales para cualquier ámbito y enfoque, y de buena práctica, no normas legales. A diferencia de los Standards (2014) y de la ITC, centrados en los tests, cubren el proceso completo.",
    v: [
      "GAP=96 directrices de consenso para todo el proceso de evaluación",
      "EAPA=European Association of Psychological Assessment, origen de las directrices",
      "Fernández-Ballesteros et al.=Autores de las Guidelines for the Assessment Process (2001)",
      "Directrices de consenso=Recomendaciones cuya autoridad procede del acuerdo profesional, no de una ley",
      "Standards (2014)=Normas de AERA, APA y NCME centradas sobre todo en los tests",
      "Código Deontológico=Norma que regula la conducta ética del profesional",
      "Lista de comprobación=Uso práctico de las GAP para revisar cada fase del proceso",
      "European Journal of Psychological Assessment=Revista en la que se publicaron las GAP en 2001"
    ],
    g: [
      "Las GAP contienen ___ directrices.|96|69|100",
      "Las GAP se publicaron en el año ___.|2001|2014|1987",
      "Las GAP están organizadas según las ___ del proceso.|fases|técnicas|escuelas",
      "Las directrices de la ITC y los Standards se centran sobre todo en los ___.|tests|informes|procesos",
      "La autoridad de las GAP procede del ___ profesional.|consenso|mandato|registro"
    ],
    tf: [
      "Las GAP son normas legales de obligado cumplimiento en la Unión Europea.|F|Son recomendaciones de buena práctica. Su autoridad procede del consenso profesional, no de una ley.",
      "Las GAP sirven para cualquier ámbito y cualquier enfoque teórico.|V",
      "Las GAP se citan, junto con el Código, como referencia para elaborar informes.|V",
      "Las GAP fueron elaboradas por la APA junto con la AERA y el NCME.|F|Eso corresponde a los Standards (2014). Las GAP proceden de un grupo de trabajo de la EAPA."
    ],
    q: [
      "Un psicólogo de empresa recibe el encargo de evaluar a un empleado por «problemas de actitud». Según el espíritu de las GAP, ¿qué hace primero?|Aclarar la conducta y la legitimidad|Aplicar un test de personalidad|Elegir una batería de actitudes|Antes de aplicar pruebas aclara qué conducta preocupa, quién recibe el informe, si el trabajador está informado y si la demanda es legítima.",
      "¿Qué distingue a las GAP de los Standards (2014)?|Cubren el proceso completo|Son normas legales europeas|Regulan solo la ética|Los Standards se centran en los tests. Las GAP abarcan desde la demanda hasta el seguimiento.",
      "¿Quién coordinó el grupo de trabajo que elaboró las GAP?|Rocío Fernández-Ballesteros|Paul Meehl|Mariano Yela|El grupo de la EAPA lo coordinó Fernández-Ballesteros, y se publicaron como Fernández-Ballesteros et al. (2001).",
      "En la fase de hipótesis, ¿qué cuestión de control ayudan a revisar las GAP?|Si hay explicaciones alternativas|Si el informe es comprensible|Si se ha previsto el seguimiento|En la fase de hipótesis se revisa si se han considerado alternativas y si son contrastables."
    ],
    inc: [
      "Sobre las GAP|Recomiendan una batería fija de tests por demanda|Fueron alcanzadas por consenso entre expertos|Abarcan desde la demanda hasta el seguimiento|No son un listado de tests: la elección de técnicas depende de las hipótesis, no de una batería fija."
    ],
    seq: [],
    cls: [
      "Referencia normativa|GAP: proceso completo; EAPA; 96 directrices|Standards e ITC: construcción y uso de tests; AERA, APA y NCME|Código Deontológico: conducta ética del profesional"
    ] }
] },
{ n: 6, t: "Juicio clínico, sesgos y evaluación basada en la evidencia", cap: 2, pir: "alta", mods: [
  { t: "Predicción clínica frente a predicción actuarial",
    tip: "Lo que se compara es el método de combinación de los datos, no su origen: «en la cabeza» del evaluador (clínica) o con una regla explícita (actuarial o mecánica). Meehl (1954) concluyó que las reglas igualaban o superaban a los clínicos, y Grove et al. (2000), con 136 estudios, que la mecánica era en promedio un 10 % más precisa. Cerca de la mitad de los estudios fueron empates, y el clínico sigue siendo necesario.",
    v: [
      "Predicción clínica=El evaluador integra los datos con su experiencia y su criterio",
      "Predicción actuarial=Combinación con una regla explícita que da siempre el mismo resultado",
      "Método de combinación=Lo que se compara en el debate, no el origen de la información",
      "Meehl (1954)=Autor de Clinical versus Statistical Prediction",
      "Grove et al. (2000)=Metaanálisis de 136 estudios sobre predicción clínica y mecánica",
      "Inconsistencia=El mismo caso puede valorarse distinto en dos días diferentes",
      "Escasa retroalimentación=El clínico rara vez sabe si su predicción se cumplió",
      "Superioridad mecánica=Resultado en un 33–47 % de los estudios del metaanálisis"
    ],
    g: [
      "En el metaanálisis de Grove et al., la combinación mecánica fue en promedio alrededor de un ___ más precisa.|10 %|30 %|50 %",
      "La predicción clínica fue superior en un ___ de los estudios de Grove et al.|6–16 %|33–47 %|25–35 %",
      "Ambos métodos tuvieron un acierto similar en ___ de los estudios.|en torno a la mitad|casi la totalidad|apenas una décima parte",
      "Una entrevista puede aportar datos que luego se combinen con una ___.|fórmula|intuición|impresión",
      "El metaanálisis de Grove et al. resumió ___ estudios.|136|119|38"
    ],
    tf: [
      "Según Grove et al. (2000), el clínico nunca acierta más que una fórmula.|F|Es la trampa típica: la clínica fue superior en un 6–16 % y cerca de la mitad de los estudios fueron empates.",
      "Las puntuaciones de un test pueden combinarse de forma intuitiva, lo que sería predicción clínica.|V",
      "Una vez reunidos los datos, sumarlos de forma intuitiva suele ser menos preciso que hacerlo con una regla.|V",
      "La predicción actuarial se define por usar datos de tests, y la clínica por usar datos de entrevista.|F|La distinción se refiere al método de combinación, no al origen de los datos."
    ],
    q: [
      "Un equipo de orientación decide qué alumnos necesitan refuerzo lector, y cada orientadora pondera distinto caligrafía, conducta e informe familiar. ¿Qué mejora más la coherencia?|Una regla validada que combine los datos|Más años de experiencia del equipo|Una entrevista más larga con cada familia|Una regla explícita pondera siempre igual. La orientadora sigue revisando los casos dudosos.",
      "Un clínico veterano sostiene que su intuición integra los datos mejor que cualquier regla. ¿Qué indica la evidencia desde Meehl (1954)?|Que suele ocurrir lo contrario|Que tiene razón si es experto|Que depende solo del tipo de dato|La combinación mecánica iguala o supera al juicio en la gran mayoría de las comparaciones (Grove et al., 2000).",
      "¿Para qué sigue siendo imprescindible el clínico pese a los datos de Grove et al.?|Para detectar circunstancias excepcionales|Para sumar los datos ya reunidos|Para ponderar las variables del caso|También analiza la demanda, decide qué datos recoger, los obtiene y comunica los resultados.",
      "¿Qué cuestión sigue en debate sobre el juicio clínico?|En qué situaciones concretas añade valor|Si la mecánica supera en la mayoría|Si el juicio humano tiene sesgos|Dado que cerca de la mitad de las comparaciones terminan en empate, se discute cuándo aporta valor."
    ],
    inc: [
      "Sobre las ventajas de una fórmula frente al juicio|Contempla cualquier circunstancia excepcional|Pondera los datos siempre del mismo modo|No se deja influir por un detalle llamativo|Detectar circunstancias excepcionales que ninguna fórmula contempla es precisamente una tarea del clínico."
    ],
    seq: [],
    cls: [
      "Resultado en Grove et al. (2000)|Mecánica superior: 33–47 % de los estudios|Acierto similar: en torno a la mitad|Clínica superior: 6–16 % de los estudios"
    ] },
  { t: "Sesgos del evaluador y efecto Barnum",
    tip: "Los sesgos cognitivos son errores sistemáticos de juicio, en una dirección previsible (Garb, 2005): confirmación, anclaje, disponibilidad, correlación ilusoria (Chapman y Chapman), omisión de la tasa base, halo y exceso de confianza. Forer (1949) dio a todos sus estudiantes el mismo perfil vago y lo juzgaron muy ajustado. Meehl (1956) popularizó el nombre de efecto Barnum. Para reducir sesgos no basta conocerlos: hacen falta estrategias estructurales.",
    v: [
      "Sesgo de confirmación=Buscar e interpretar solo la información que apoya la hipótesis inicial",
      "Anclaje=Dar un peso excesivo a la primera información recibida",
      "Disponibilidad=Juzgar la probabilidad por la facilidad con que vienen a la mente casos parecidos",
      "Correlación ilusoria=Percibir una relación entre variables que no existe en los datos",
      "Efecto halo=Una impresión global tiñe la valoración de rasgos concretos",
      "Exceso de confianza=Creer que los propios juicios son más acertados de lo que son",
      "Efecto Barnum=Aceptar como precisa una descripción vaga válida para casi todos",
      "Garb (2005)=Revisión de referencia sobre los sesgos en la evaluación clínica"
    ],
    g: [
      "El término efecto Barnum lo popularizó ___ en 1956.|Meehl|Forer|Garb",
      "Chapman y Chapman estudiaron la correlación ilusoria con dibujos de la figura humana y con el ___.|Rorschach|MMPI|WISC",
      "Si el diagnóstico del informe de derivación condiciona toda la evaluación, se trata de ___.|anclaje|disponibilidad|halo",
      "El efecto Barnum también se conoce como efecto ___.|Forer|Garb|Chapman",
      "El exceso de confianza no lo corrige la experiencia si no hay ___.|retroalimentación|supervisión|formación"
    ],
    tf: [
      "Los sesgos cognitivos aparecen al azar y tienden a compensarse entre sí.|F|Son errores sistemáticos: aparecen en una dirección previsible, no al azar.",
      "En el estudio de Forer, los estudiantes recibieron todos el mismo perfil, hecho de frases aplicables a cualquiera.|V",
      "Conocer los sesgos basta para que el evaluador deje de cometerlos.|F|No basta con conocerlos. Las estrategias con más apoyo son estructurales, como hipótesis alternativas e instrumentos estructurados.",
      "En los estudios de Chapman y Chapman, las relaciones parecían lógicas aunque los datos no las apoyaban.|V"
    ],
    q: [
      "Tras atender un caso muy llamativo de un trastorno poco frecuente, una psicóloga empieza a verlo en los pacientes siguientes. ¿Qué sesgo es?|Disponibilidad|Anclaje|Confirmación|Juzga la probabilidad por la facilidad con que recuerda un caso parecido y reciente.",
      "Un evaluador que sospecha un TDAH desde la primera llamada pregunta solo por síntomas de inatención. ¿Qué sesgo muestra?|Confirmación|Disponibilidad|Halo|Busca la información que confirma su hipótesis inicial y pasa por alto la que podría contradecirla.",
      "¿Cuál de estas frases de un informe evita mejor el efecto Barnum?|Evitó opinar en las tres situaciones observadas|Necesita sentirse valorada por los demás|A veces duda de sus propias decisiones|Una descripción específica y apoyada en datos describe a una persona concreta, no a casi cualquiera.",
      "¿Qué estrategia tiene más apoyo para reducir los sesgos del evaluador?|Plantear hipótesis alternativas desde el inicio|Confiar en la primera impresión del caso|Leer una lista de sesgos antes de evaluar|Hay que buscar activamente datos que puedan refutarlas, usar instrumentos estructurados y consultar tasas base."
    ],
    inc: [
      "Sobre el efecto Barnum|Forer lo bautizó así en su estudio de 1949|Explica que un informe vago parezca acertado|Obliga a redactar descripciones específicas|El nombre lo popularizó Meehl (1956). Forer hizo el estudio en 1949, por eso también se llama efecto Forer."
    ],
    seq: [],
    cls: [
      "Sesgo del evaluador|Anclaje: primera información; informe de derivación|Disponibilidad: casos que vienen a la mente; caso llamativo reciente|Correlación ilusoria: Chapman y Chapman; dibujos de la figura humana"
    ] },
  { t: "Tasas base y razonamiento probabilístico",
    tip: "La tasa base es la frecuencia del problema en la población de la persona evaluada. La sensibilidad y la especificidad son propiedades bastante estables de la prueba, pero el VPP y el VPN cambian con la tasa base. Con sensibilidad y especificidad de 0,90 y una prevalencia del 5 %, el VPP es de un 32 %. En un cribado, un positivo es una señal para evaluar más a fondo, no un diagnóstico.",
    v: [
      "Tasa base=Frecuencia del problema en la población a la que pertenece la persona",
      "Sensibilidad=Proporción de personas con el problema que la prueba detecta",
      "Especificidad=Proporción de personas sin el problema que la prueba descarta",
      "Valor predictivo positivo=Probabilidad de tener el problema si la prueba da positivo",
      "Valor predictivo negativo=Probabilidad de no tener el problema si la prueba da negativo",
      "Falso positivo=Persona sin el problema a la que la prueba señala como caso",
      "Cribado=Aplicación de una prueba a toda una población para detectar posibles casos",
      "Teorema de Bayes=Formaliza cómo actualizar la tasa base con el resultado de una prueba"
    ],
    g: [
      "Con sensibilidad y especificidad de 0,90 y prevalencia del 5 %, el VPP es aproximadamente del ___.|32 %|90 %|50 %",
      "Con la misma prueba y una prevalencia del 50 %, el VPP es del ___.|90 %|32 %|99 %",
      "Con prevalencia del 5 %, de cada tres personas que dan positivo, ___ no tienen el problema.|dos|una|ninguna",
      "Con una prevalencia baja, el ___ es altísimo y un negativo descarta el problema con seguridad.|VPN|VPP|índice de falsos positivos",
      "Cuando la tasa base es muy baja, decir siempre que ___ puede acertar más que la prueba.|no|sí|depende"
    ],
    tf: [
      "El VPP es una propiedad fija de la prueba, igual en cualquier contexto.|F|Es una trampa típica: el VPP cambia con la tasa base. Lo relativamente estable son la sensibilidad y la especificidad.",
      "Con prevalencia baja, una buena prueba puede producir más falsos positivos que verdaderos positivos.|V",
      "La misma prueba aplicada en una consulta especializada tendrá un VPP mayor que en la población general.|V",
      "Si una prueba detecta el 90 % de los casos, un positivo indica un 90 % de probabilidad de tener el problema.|F|Confunde sensibilidad con VPP. El razonamiento correcto parte de la tasa base y la actualiza con el resultado."
    ],
    q: [
      "Un instituto aplica a todos sus alumnos un cuestionario de riesgo de suicidio con buena sensibilidad y especificidad. Un alumno da positivo. ¿Qué significa?|Que conviene evaluarlo más a fondo|Que tiene casi seguro el riesgo|Que la prueba ha fallado|En un cribado con tasa base baja hay muchos falsos positivos. Un positivo es una señal, no un diagnóstico.",
      "Con 1.000 personas, prevalencia del 5 % y sensibilidad y especificidad de 0,90, ¿cuántos falsos positivos hay?|95|45|5|De 950 personas sin el problema, el 10 % da positivo, es decir, 95. Los 45 son los verdaderos positivos.",
      "¿Por qué con baja prevalencia hay tantos falsos positivos?|El error recae sobre un grupo muy grande|La sensibilidad baja con la prevalencia|La especificidad cae con la prevalencia|El 10 % de error sobre 950 personas sanas supera en número a todos los casos reales.",
      "¿Qué índices responden a la pregunta del evaluador ante un resultado concreto?|VPP y VPN|Sensibilidad y especificidad|Tasa base y prevalencia|La sensibilidad y la especificidad describen la prueba. El VPP y el VPN dicen qué significa un resultado."
    ],
    inc: [
      "Sobre las tasas base|La sensibilidad cambia mucho con la prevalencia|El VPN aumenta cuando la prevalencia es baja|Hay que valorar si la prueba supera a la tasa base|La sensibilidad y la especificidad son propiedades bastante estables de la prueba. Lo que cambia es el VPP y el VPN."
    ],
    seq: [],
    cls: [
      "Tipo de índice|Describe la prueba: sensibilidad; especificidad|Depende de la tasa base: valor predictivo positivo; valor predictivo negativo"
    ] },
  { t: "Evaluación basada en la evidencia y evaluación digital",
    tip: "La evaluación debe apoyarse en instrumentos con apoyo empírico para el propósito concreto. Hunsley y Mash proponen tres criterios: validez para el propósito, utilidad clínica y validez incremental. La EMA reduce el sesgo de recuerdo y gana validez ecológica, a costa de carga y reactividad. Los TAI eligen cada ítem según las respuestas anteriores, y la validez de la sensorización pasiva sigue en discusión. La Ley de IA de la UE prohíbe, salvo excepciones, el reconocimiento de emociones en el trabajo y en la educación.",
    v: [
      "Validez para el propósito=Pruebas de que el instrumento sirve para esa decisión y esa población",
      "Utilidad clínica=Mejora las decisiones o los resultados del caso y compensa su coste",
      "Validez incremental=Información que no se tenía ya con otros datos más baratos",
      "EMA=Preguntas breves en el móvil varias veces al día en el entorno habitual",
      "TAI=Test que elige cada ítem según las respuestas anteriores, basado en la TRI",
      "Sensorización pasiva=Registro de actividad, sueño o desplazamientos sin que la persona responda",
      "Ley europea de IA=Reglamento 2024/1689 que restringe ciertos usos de la IA",
      "Hunsley y Mash=Autores que sistematizaron los criterios de la evaluación basada en la evidencia"
    ],
    g: [
      "La validez ___ es especialmente útil para decidir qué no aplicar.|incremental|de contenido|aparente",
      "La EMA se describe en el trabajo de Shiffman, Stone y ___ (2008).|Hufford|Mash|Garb",
      "La EMA reduce el sesgo de ___ porque pregunta por lo que ocurre en el momento.|recuerdo|confirmación|deseabilidad",
      "Los TAI se basan en la teoría de ___ al ítem.|respuesta|generalización|decisión",
      "La Ley de IA de la UE clasifica como de ___ riesgo ciertos usos en el empleo y la educación.|alto|bajo|mínimo"
    ],
    tf: [
      "La EMA elimina por completo la reactividad de la medida.|F|Puede ser reactiva: registrar el estado de ánimo varias veces al día puede modificarlo. Además supone carga.",
      "Los TAI logran mediciones precisas con menos ítems.|V",
      "La validez de las métricas pasivas para inferir estados psicológicos está bien establecida.|F|Sigue en discusión. Prometen datos continuos y poco reactivos, pero su validez está todavía en debate.",
      "La sensorización pasiva registra datos sin que la persona tenga que responder.|V"
    ],
    q: [
      "Una entrevista breve y un cuestionario ya permiten decidir si una paciente necesita tratamiento. ¿Cuándo se justifica añadir una prueba larga?|Si mejora el acierto de la decisión|Si la paciente tiene tiempo libre|Si la prueba es muy conocida|Es el criterio de validez incremental: solo se añade si aporta información que no se tenía ya.",
      "Una empresa quiere analizar la cara de los candidatos en una videoentrevista para inferir sus emociones. ¿Qué dice la Ley de IA de la UE?|Lo prohíbe salvo excepciones|Lo permite con consentimiento|No regula ese tipo de uso|El reglamento prohíbe, salvo excepciones, el reconocimiento de emociones en el lugar de trabajo y en los centros educativos.",
      "¿De qué técnica clásica es la EMA la versión digital?|Del autorregistro|De la entrevista|Del test proyectivo|La EMA traslada al móvil el autorregistro, que se estudia en la Unidad 16.",
      "¿Qué criterio de Hunsley y Mash pregunta si el instrumento compensa su coste?|Utilidad clínica|Validez incremental|Validez para el propósito|La utilidad clínica valora si mejora las decisiones o los resultados del caso y si compensa su coste."
    ],
    inc: [
      "Sobre la evaluación digital|Un dato digital ya no requiere una hipótesis|La EMA gana validez ecológica|Los TAI eligen ítems según las respuestas previas|La tecnología no cambia los principios: el dato necesita una hipótesis, garantías y un evaluador que responda de él."
    ],
    seq: [],
    cls: [
      "Vía de evaluación digital|EMA: preguntas en el móvil; menos sesgo de recuerdo; carga y reactividad|TAI: teoría de respuesta al ítem; menos ítems|Sensorización pasiva: wearables; sueño y actividad; validez en discusión"
    ] }
] },
{ n: 7, t: "Redactar y comunicar el informe", cap: 2, pir: "media", mods: [
  { t: "Funciones y tipos de informe",
    tip: "El informe integra lo que aportan las técnicas, responde a la demanda y justifica cada conclusión. Comunica, fundamenta decisiones, documenta y tiene efectos legales y profesionales. Según el canal hay devolución oral e informe escrito, y según función y destinatario, informe técnico, personal, certificado y pericial. Aunque la evaluación la pida un tercero, el evaluado tiene derecho a conocer el informe (art. 42).",
    v: [
      "Informe técnico=Dirigido a otros profesionales, con terminología especializada",
      "Informe personal=Para el evaluado o su familia, en lenguaje llano, como apoyo de la devolución",
      "Certificado=Breve, para un uso único y predeterminado, con solo los datos necesarios",
      "Informe pericial=Dirigido a un órgano judicial y ceñido al objeto de la pericia",
      "Entrevista de devolución=Comunicación oral de resultados, la forma más usada en clínica",
      "Función de documentar=Dejar constancia de qué se hizo, con qué técnicas y en qué fechas",
      "Artículo 42=Derecho del evaluado a conocer el informe aunque lo pida un tercero",
      "Firma del informe=Hace al psicólogo responsable de un documento con efectos legales"
    ],
    g: [
      "La forma de informe más usada en la práctica clínica es la entrevista de ___.|devolución|derivación|admisión",
      "Si quien pide el certificado es un familiar, hace falta antes la ___ de la persona evaluada.|autorización|firma|presencia",
      "Para el equipo de orientación del colegio de Clara, la psicóloga elabora un informe ___.|técnico|personal|pericial",
      "El derecho del evaluado a conocer el informe tiene como excepción un grave ___ para él o para el psicólogo.|perjuicio|conflicto|retraso",
      "El informe pericial se estudia en detalle en la asignatura de Psicología ___.|Jurídica|Clínica|Social"
    ],
    tf: [
      "La devolución oral y el informe escrito son excluyentes: se elige uno de los dos.|F|No son excluyentes: la devolución puede acompañarse del informe escrito si la persona lo pide.",
      "Un mismo proceso de evaluación puede dar lugar a varios informes distintos.|V",
      "Si la evaluación la encarga una empresa, el evaluado pierde el derecho a conocer el informe.|F|Lo conserva salvo grave perjuicio para él o para el psicólogo (art. 42). Es una trampa típica.",
      "El valor del informe no está en listar puntuaciones, sino en integrar y justificar las conclusiones.|V"
    ],
    q: [
      "Los padres de Clara, de 8 años, necesitan acreditar ante el colegio que su hija requiere más tiempo en los exámenes. ¿Qué documento corresponde?|Un certificado|Un informe técnico|Un informe personal|El certificado es breve, para un uso único y predeterminado, sin más datos que los imprescindibles.",
      "¿Qué rasgo es propio del informe personal y no del técnico?|Lenguaje llano para el evaluado|Inclusión de puntuaciones|Uso único y predeterminado|El personal se dirige al evaluado o su familia, sin tecnicismos. El técnico se dirige a otros profesionales.",
      "Una aseguradora encarga una evaluación y el evaluado pide ver el informe. ¿Qué procede?|Reconocer su derecho a conocerlo|Negárselo por no ser el cliente|Remitirle a la aseguradora|El art. 42 reconoce ese derecho aunque lo solicite un tercero, salvo grave perjuicio.",
      "¿Qué función cumple el informe al permitir que otro profesional revise lo hecho?|Documentar|Comunicar|Certificar|Documentar es dejar constancia de qué se hizo, con qué técnicas y en qué fechas."
    ],
    inc: [
      "Sobre los tipos de informe|El certificado recoge todos los datos de la evaluación|El técnico puede incluir puntuaciones e instrumentos|El pericial se dirige a un órgano judicial|Atribuir al certificado un contenido amplio es una trampa típica: es breve y solo incluye lo necesario para su fin."
    ],
    seq: [],
    cls: [
      "Tipo de informe|Técnico: otros profesionales; terminología especializada; puntuaciones|Personal: evaluado o familia; lenguaje llano; apoyo de la devolución|Certificado: uso único; breve; solo lo necesario"
    ] },
  { t: "Estructura y contenido del informe escrito",
    tip: "El contenido mínimo se organiza en ocho bloques, de la identificación a la firma con el número de colegiado, y la integración es el núcleo. El art. 48 exige informes claros, precisos, rigurosos e inteligibles, con alcance, limitaciones y grado de certeza, y el art. 12 pide cautela con las etiquetas devaluadoras. Hay que separar datos de interpretaciones, integrar por áreas funcionales en lugar de test por test y ser específico.",
    v: [
      "Contenido mínimo=Elementos que cualquier informe debería contener, sea cual sea la plantilla",
      "Integración=Interpretación conjunta de los datos y respuesta a la demanda, núcleo del informe",
      "Motivo de la evaluación=La demanda tal como se formuló y el objetivo de la evaluación",
      "Limitaciones=Hasta dónde llegan las conclusiones y con qué grado de certeza",
      "Artículo 48=Exige informes claros, precisos, rigurosos e inteligibles para su destinatario",
      "Artículo 12=Pide cautela con etiquetas devaluadoras como «adaptado o inadaptado»",
      "Áreas funcionales=Organización por atención, ánimo o relaciones, combinando fuentes",
      "Inferencia=Interpretación que va más allá de lo observado y debe apoyarse en datos"
    ],
    g: [
      "El informe se organiza en ___ bloques de contenido mínimo.|ocho|cinco|diez",
      "En la identificación debe figurar el número de ___ del evaluador.|colegiado|registro|expediente",
      "«Lloró dos veces al hablar de su padre» es un ___.|dato|diagnóstico|juicio",
      "Presentar los resultados test por test obliga al lector a hacer la ___.|integración|corrección|baremación",
      "Conviene anotar la demanda con las palabras de ___.|quien la trae|quien evalúa|quien juzga"
    ],
    tf: [
      "El art. 48 exige que el informe exprese su alcance, sus limitaciones y el grado de certeza de sus conclusiones.|V",
      "Reconocer las limitaciones en el informe es una debilidad que conviene minimizar.|F|Reconocer los límites es parte del rigor. Si faltan baremos o una fuente, hay que decirlo.",
      "Datos e inferencias pueden figurar en el informe, pero el lector debe poder distinguirlos.|V",
      "Organizar los resultados test por test es la forma recomendada de integrar la información.|F|Es preferible organizarlos por áreas funcionales y combinar dentro de cada una lo que dicen las fuentes."
    ],
    q: [
      "Un borrador dice: «En el test A obtuvo un percentil 30, en el cuestionario B puntuó alto en ansiedad». ¿Qué error comete?|Yuxtapone en lugar de integrar|Mezcla datos con inferencias|Omite el motivo de la evaluación|Presenta los resultados test por test. Debería organizarlos por áreas y combinar las fuentes.",
      "¿Qué bloque del informe se considera su núcleo?|La integración|Los resultados|Las conclusiones|La integración interpreta conjuntamente los datos y responde a la demanda.",
      "¿Cuál de estas frases es una inferencia y no un dato?|Tiene un duelo no resuelto|Lloró dos veces en la entrevista|Llegó veinte minutos tarde|Un duelo no resuelto es una interpretación. Debe apoyarse en datos mencionados en el informe.",
      "Una prueba no tiene baremos para la población de la persona evaluada. ¿En qué bloque se indica?|Limitaciones|Técnicas y fechas|Motivo de la evaluación|Las limitaciones señalan hasta dónde llegan las conclusiones, por ejemplo por falta de baremos adecuados."
    ],
    inc: [
      "Sobre el art. 48 del Código|Exige informes técnicos para garantizar su rigor|Exige que sean inteligibles para su destinatario|Exige expresar el grado de certeza|El art. 48 pide informes claros, precisos, rigurosos e inteligibles, no más técnicos."
    ],
    seq: [
      "Bloques del informe escrito|Identificación>Motivo de la evaluación>Técnicas y fechas>Resultados>Integración>Conclusiones y recomendaciones>Limitaciones>Firma y número de colegiado"
    ],
    cls: [
      "Tipo de enunciado|Dato: lloró dos veces al hablar de su padre; evitó opinar en tres situaciones de grupo|Inferencia: tiene un duelo no resuelto; necesita sentirse valorada"
    ] },
  { t: "Redactar con claridad",
    tip: "Harvey (1997, 2006) halló que los informes exigen a menudo un nivel lector universitario o superior, incluso para padres o profesores, y que la jerga es la principal barrera. Se recomienda usar frases cortas, definir los términos, organizar por áreas, explicar las puntuaciones, usar tablas, evitar etiquetas y mantener un tono respetuoso. Claridad no significa perder rigor. La investigación sobre informes accesibles es reciente y aún no permite conclusiones firmes.",
    v: [
      "Harvey (1997, 2006)=Analizó la legibilidad de los informes psicológicos",
      "Jerga técnica=Principal barrera para comprender los informes",
      "Nivel lector=Formación lectora que exige un texto, a menudo universitaria en los informes",
      "Explicar las puntuaciones=Traducir un percentil a cuántos de cada 100 iguala o supera",
      "Bejnö et al. (2025)=Estudios sobre cómo adaptar los informes para que el evaluado los use",
      "Etiqueta estigmatizante=Calificar a la persona en lugar de describir su conducta",
      "Prepublicación=Trabajo aún no revisado, que debe tomarse como indicio",
      "Informe accesible=Adaptado para que la persona evaluada lo comprenda y lo use"
    ],
    g: [
      "Según Harvey, los informes exigen con frecuencia un nivel lector ___ o superior.|universitario|de bachillerato|de primaria",
      "Un percentil 85 se explica a una familia como igual o superior a ___ de cada 100 niños de su edad.|85|15|50",
      "Para los datos numéricos conviene usar ___ en lugar de encadenarlos en el texto.|tablas|notas|anexos",
      "Para un colega, la terminología técnica ahorra ___.|espacio|rigor|tiempo de evaluación",
      "Los trabajos de 2025 disponibles solo como prepublicaciones deben tomarse como ___.|indicios|pruebas|normas"
    ],
    tf: [
      "Cuanto más técnico es un informe, más riguroso es.|F|Es un mito: el rigor depende de las técnicas, los datos y la justificación, no del vocabulario.",
      "Harvey encontró informes difíciles de leer incluso cuando iban dirigidos a padres o profesores.|V",
      "Un informe técnico, aunque se dirija a colegas, también debe leerse sin esfuerzo y apoyar sus inferencias en datos.|V",
      "La investigación actual ya ha establecido cuántos datos numéricos incluir para un destinatario no técnico.|F|Es una cuestión en debate. La investigación sobre informes accesibles es reciente y no permite conclusiones firmes."
    ],
    q: [
      "Un informe para unos padres dice: «Es un niño inmaduro y desadaptado». ¿Qué redacción lo mejora?|En el recreo suele jugar solo y se enfada al perder|Presenta inmadurez y dificultades de adaptación|Muestra un perfil desadaptativo en lo social|Describe conductas en lugar de calificar a la persona, como pide el art. 12.",
      "¿Qué identificó Harvey como principal barrera de comprensión de los informes?|La jerga técnica|La longitud excesiva|La falta de tablas|Los informes suelen exigir un nivel lector universitario, sobre todo por la terminología especializada.",
      "¿Qué comprobación práctica se recomienda antes de entregar un informe personal?|Si el destinatario podría explicarlo a otro|Si incluye todas las puntuaciones|Si usa la terminología del manual|Si no podría contar con sus palabras qué se encontró y qué se recomienda, hay que reescribir.",
      "«Muestra un déficit en las funciones ejecutivas de inhibición.» ¿Cuál es la versión clara?|Contesta antes de terminar de leer la pregunta|Tiene problemas de control inhibitorio|Presenta un déficit ejecutivo leve|Traduce el término técnico a una conducta concreta y observable."
    ],
    inc: [
      "Sobre la redacción clara|Simplificar el lenguaje supone perder rigor|Conviene definir los términos técnicos|Se recomiendan frases cortas y sencillas|Escribir con claridad no significa perder rigor: cambia la forma de comunicar los datos, no las técnicas ni los datos."
    ],
    seq: [],
    cls: [
      "Redacción|Poco clara: elevaciones en escalas de internalización; déficit de inhibición; niño inmaduro|Clara: más tristeza y preocupación de lo habitual; contesta antes de terminar de leer; juega solo en el recreo"
    ] },
  { t: "La entrevista de devolución y el informe pericial",
    tip: "La devolución sigue cinco pasos: recordar la demanda, exponer los hallazgos empezando por los recursos, comprobar la comprensión y la reacción, dar recomendaciones concretas y entregar el informe escrito si se pide. No se ocultan los aspectos negativos, se presentan de forma comprensible. El informe pericial responde al objeto de la pericia, separa datos de inferencias y hace constar sus límites. El perito no decide: aporta conocimiento para que decida el juez.",
    v: [
      "Recomendaciones=Cuarto paso de la devolución: propuestas concretas y viables",
      "Empezar por los recursos=Exponer primero los puntos fuertes antes que las dificultades",
      "Comprobar la comprensión=Preguntar qué se ha entendido, cómo se siente y qué dudas hay",
      "Objeto de la pericia=Preguntas concretas que el procedimiento judicial plantea al perito",
      "Perito=Aporta conocimiento técnico para que decida el juez",
      "Órgano judicial=Destinatario último del informe pericial",
      "Límites de la pericia=Lo que no se pudo evaluar, las fuentes que faltaron y la certeza",
      "Contraste en la devolución=La reacción de la persona puede matizar alguna interpretación"
    ],
    g: [
      "La estructura recomendada de la devolución tiene ___ pasos.|cinco|cuatro|siete",
      "Tras recordar la demanda, se exponen los hallazgos empezando por los ___.|recursos|déficits|diagnósticos",
      "Qué se dice depende de lo que la persona puede entender y ___ en ese momento.|asumir|recordar|firmar",
      "El informe pericial puede pedirlo un juzgado o una de las ___.|partes|familias|aseguradoras",
      "La devolución mantiene el carácter ___ del proceso de evaluación.|iterativo|lineal|pericial"
    ],
    tf: [
      "En la devolución conviene ocultar los aspectos negativos para no desanimar a la persona.|F|No se trata de ocultarlos, sino de presentarlos de forma comprensible, con datos y con un plan.",
      "El informe pericial debe poder defenderse ante preguntas de las partes.|V",
      "El perito decide sobre la cuestión judicial que se le plantea.|F|El perito no decide: aporta conocimiento técnico para que decida el juez.",
      "La reacción de la persona en la devolución puede aportar información que matice una interpretación.|V"
    ],
    q: [
      "En la devolución a los padres de Clara, la psicóloga ya ha recordado la demanda y explicado que comprende bien lo que oye. ¿Qué viene después?|Explicar que lee más despacio, con ejemplos|Acordar las medidas para casa y colegio|Entregar el informe escrito sin más|Tras los recursos se exponen las dificultades con ejemplos. Después se comprueba la comprensión y se dan recomendaciones.",
      "¿Qué exigencia es propia del informe pericial?|Separar datos e inferencias|Usar lenguaje llano|Empezar por los recursos|Debe separarlos para que el tribunal valore en qué se apoya cada conclusión. También declara sus límites.",
      "En una pericia sobre la situación de unos menores, el informe opina sobre una cuestión que no se le ha preguntado. ¿Qué exigencia incumple?|Responder al objeto de la pericia|Separar datos de inferencias|Hacer constar sus límites|El informe pericial responde a las preguntas concretas planteadas, y no a otras.",
      "¿Qué paso de la devolución consiste en preguntar cómo se siente la persona y qué dudas tiene?|Comprobar la comprensión y la reacción|Recordar la demanda inicial|Dar las recomendaciones|Es el tercer paso, entre la exposición de los hallazgos y las recomendaciones."
    ],
    inc: [
      "Sobre el informe pericial|Se dirige en último término a la persona evaluada|Responde al objeto de la pericia|Hace constar qué no se pudo evaluar|Su destinatario último es el órgano judicial, no la persona evaluada."
    ],
    seq: [
      "Estructura de la entrevista de devolución|Recordar la demanda>Exponer los hallazgos empezando por los recursos>Comprobar la comprensión y la reacción>Dar las recomendaciones>Entregar el informe escrito si se pide"
    ],
    cls: [
      "Forma de comunicar|Devolución: oral; empieza por los recursos; comprueba la comprensión|Informe pericial: órgano judicial; objeto de la pericia; separa datos e inferencias"
    ] }
] },
{ n: 8, t: "Ética y deontología en la evaluación", cap: 3, pir: "media", mods: [
  { t: "El Código Deontológico y la evaluación",
    tip: "Las garantías éticas protegen a la persona evaluada, y las científicas, la calidad de los datos, pero son inseparables: usar un test sin garantías es también una falta ética. El Código Deontológico del COP se aprobó el 22 de mayo de 1987 y se modificó en 2010, 2014 y 2015. Es el vigente. Los artículos 6, 12, 17, 18, 19, 24 y 25 recogen principios generales, y los 39 a 49, el tratamiento de la información.",
    v: [
      "Garantías éticas=Requisitos que protegen los derechos de la persona evaluada en todo el proceso",
      "Garantías científicas=Requisitos sobre la calidad de la información, como fiabilidad y validez",
      "Artículo 6=Respeto, honestidad y prudencia en la aplicación de instrumentos",
      "Artículo 12=Cautela con etiquetas como «inteligente o deficiente»",
      "Artículo 18=Informar antes del carácter experimental de procedimientos no contrastados",
      "Artículo 19=Material de evaluación reservado a psicólogos, que deben custodiarlo",
      "Artículo 24=Rechazar el encargo si se va a usar contra los intereses de las personas",
      "COP, 2015=Forma habitual de citar la versión consolidada del Código vigente"
    ],
    g: [
      "El Código Deontológico del Psicólogo se aprobó el 22 de mayo de ___.|1987|2010|2015",
      "La modificación de 2010 adaptó el Código a la llamada Ley ___.|Ómnibus|Orgánica|de Autonomía",
      "Si las láminas o ítems de un test circulan libremente, se vulnera el art. ___.|19|12|24",
      "La competencia profesional y la actualización se recogen en el art. ___.|17|19|25",
      "Los artículos 39 a 49 tratan sobre la ___.|información|competencia|formación"
    ],
    tf: [
      "Aplicar un test sin pruebas de que sirve para ese uso es solo un problema técnico, no ético.|F|Es también ético, porque las decisiones que se tomen con él pueden perjudicar a alguien.",
      "Elegir bien el instrumento es una obligación deontológica según los artículos 6, 17 y 18.|V",
      "Decir en un informe que un niño «es deficiente» se ajusta al art. 12 si la puntuación lo respalda.|F|El art. 12 pide cautela con esas etiquetas. Lo adecuado es describir el rendimiento por áreas con su margen de error.",
      "El Código vigente obliga a los psicólogos colegiados.|V"
    ],
    q: [
      "Un psicólogo aplica una técnica novedosa sin estudios que la respalden y no avisa al cliente. ¿Qué artículo vulnera sobre todo?|Art. 18|Art. 19|Art. 45|El art. 18 exige informar antes del carácter experimental de los procedimientos no contrastados.",
      "Una psicóloga recibe a un adolescente derivado por su centro. Antes de empezar, ¿qué le exige el art. 25?|Explicar qué va a hacer y para qué|Pedir permiso al centro escolar|Aplicar solo pruebas de su gabinete|El art. 25 obliga a informar del método. Con menores, se hará saber a sus padres o tutores.",
      "Un cuestionario descargado de una web sin baremos ni estudios de validez se usa para un diagnóstico. ¿Qué artículos lo desaconsejan?|Los artículos 6, 17 y 18|Los artículos 12, 19 y 24|Los artículos 40, 42 y 43|Exigen conocer las garantías de lo que se aplica y no presentar como contrastado lo que no lo está.",
      "Una psicóloga evalúa a un adolescente derivado por su centro y debe decidir con la familia qué información llega al centro. ¿Qué artículo lo regula?|Art. 41|Art. 46|Art. 49|El art. 41 permite comunicar a terceros solo con autorización del interesado."
    ],
    inc: [
      "Sobre el Código Deontológico vigente|Solo obliga a los psicólogos sanitarios|Su versión consolidada se cita como COP, 2015|Se modificó en 2010, 2014 y 2015|Obliga a los psicólogos colegiados, no solo a los de un ámbito concreto como el sanitario."
    ],
    seq: [
      "Historia del Código Deontológico vigente|Aprobación por el COP (1987)>Adaptación a la Ley Ómnibus (2010)>Modificación de 2014>Modificación de 2015"
    ],
    cls: [
      "Tipo de garantía|Ética: consentimiento; secreto profesional; custodia de registros|Científica: fiabilidad; validez"
    ] },
  { t: "Confidencialidad, secreto profesional y protección de datos",
    tip: "Intimidad, confidencialidad, secreto profesional y protección de datos no son lo mismo. Los artículos 39 a 49 desarrollan las obligaciones: recabar solo lo necesario (39), secreto (40), comunicar a terceros solo con autorización (41), derecho a conocer el informe (42), ceñirse a lo acordado con instituciones (43) y custodiar los registros (46). El RGPD trata los datos de salud como categoría especial, la LOPDGDD lo adapta a España y la Ley 41/2002 regula la autonomía del paciente.",
    v: [
      "Intimidad=Derecho a que no se invada la vida privada",
      "Confidencialidad=Compromiso de no revelar lo conocido en la relación profesional",
      "Secreto profesional=Obligación deontológica y legal que concreta ese compromiso (art. 40)",
      "Protección de datos=Marco legal sobre recoger, guardar, comunicar y destruir datos personales",
      "Artículo 43=Los informes para instituciones se ajustan a lo acordado",
      "Artículo 46=Custodia de los registros, también los electrónicos",
      "Categoría especial=Datos, como los de salud, que el RGPD protege de forma reforzada",
      "LOPDGDD=Ley Orgánica 3/2018 que adapta el RGPD al ordenamiento español"
    ],
    g: [
      "El secreto profesional persiste tras el fallecimiento de la persona según el art. ___.|49|45|40",
      "El anonimato al exponer casos con fines docentes se regula en el art. ___.|45|44|47",
      "La prohibición de usar la información obtenida en beneficio propio figura en el art. ___.|44|46|42",
      "La Ley ___ regula la información, el consentimiento y la documentación clínica en el ámbito sanitario.|41/2002|3/2018|2024/1689",
      "La excepción al secreto debe justificarse y no convertirse en la ___.|norma|excepción|sanción"
    ],
    tf: [
      "La empresa que encarga la evaluación de un candidato puede recibir toda la información que este haya contado.|F|Es una trampa típica: según el art. 43, el informe para la institución se limita a lo acordado para ese fin.",
      "Dejar un informe abierto en un ordenador compartido vulnera el Código, aunque no haya mala fe.|V",
      "El secreto profesional es ilimitado y no admite ninguna excepción.|F|Hay situaciones excepcionales, como un riesgo grave o un requerimiento judicial, que deben justificarse.",
      "La custodia del art. 46 incluye las copias en la nube y las aplicaciones de corrección en línea.|V"
    ],
    q: [
      "Un psicólogo evalúa el estrés laboral de una trabajadora a petición de la empresa, y ella cuenta que atraviesa un divorcio. ¿Puede incluirlo en el informe?|Solo con su autorización|Sí, si explica su malestar|No, en ningún caso|El informe se ciñe a lo acordado (art. 43). Mencionar el divorcio exige su autorización (art. 41).",
      "En una evaluación para un puesto de administrativo se pregunta por la vida sexual del candidato. ¿Qué principio se vulnera?|La intimidad|El secreto profesional|La custodia de registros|El art. 39 obliga a recabar solo la información necesaria para responder a la demanda.",
      "Un profesor universitario quiere exponer un caso en clase. ¿Qué exige el Código?|Preservar el anonimato|Pedir permiso al COP|Esperar a su fallecimiento|El art. 45 exige el anonimato al exponer casos con fines docentes o científicos.",
      "¿Qué norma considera los datos de salud una categoría especial con protección reforzada?|El RGPD|La Ley 41/2002|El art. 46 del Código|El RGPD de la Unión Europea, y buena parte de la información psicológica entra en esa categoría."
    ],
    inc: [
      "Sobre los conceptos de protección|Confidencialidad y secreto profesional son lo mismo|La intimidad obliga a recabar solo lo necesario|La protección de datos es un marco legal|La confidencialidad es el compromiso, y el secreto profesional, la obligación deontológica y legal que lo concreta."
    ],
    seq: [],
    cls: [
      "Norma|Código Deontológico: art. 40; art. 43; art. 46|Legislación general: RGPD; LOPDGDD; Ley 41/2002"
    ] },
  { t: "Consentimiento y evaluación de menores",
    tip: "El art. 25 obliga a informar del método, y el consentimiento informado incluye objetivo, técnicas, destinatarios, límites de la confidencialidad y derecho a preguntar y retirarse. Con menores, el art. 25 dice «se hará saber a sus padres o tutores», no que exija el consentimiento de ambos. En 2002 el Consejo General acordó exigirlo para los tratamientos, y para la evaluación los colegios autonómicos difieren. Lo prudente es informar a ambos, documentarlo e informar al menor, guiándose por su interés.",
    v: [
      "Consentimiento informado=Aceptación tras conocer objetivo, técnicas, destinatarios y límites",
      "Artículo 25=Informar del método y, con menores, hacerlo saber a padres o tutores",
      "Artículo 47=Presencia de terceros solo con consentimiento del evaluado",
      "Acuerdo de 2002=El Consejo General exige el consentimiento de ambos progenitores para tratar",
      "Interés del menor=Criterio que guía las decisiones, no la comodidad de quien encarga",
      "Tercero solicitante=Empresa, juzgado, centro o aseguradora que pide la evaluación",
      "Documentar=Registrar a quién se informó, cuándo y con qué respuesta",
      "Límites de la confidencialidad=Parte del consentimiento que explica cuándo podría romperse el secreto"
    ],
    g: [
      "El art. 25 establece que, con menores, «se hará ___ a sus padres o tutores».|saber|firmar|constar",
      "El Consejo General acordó en ___ exigir el consentimiento de ambos progenitores para los tratamientos.|2002|1987|2015",
      "Para la evaluación de menores, los colegios ___ interpretan la cuestión de manera diferente.|autonómicos|europeos|judiciales",
      "Si hay un desacuerdo abierto entre progenitores, puede ser necesaria una resolución ___.|judicial|colegial|médica",
      "Si un profesional en formación quiere estar presente, hace falta el consentimiento del ___.|evaluado|centro|tutor"
    ],
    tf: [
      "El art. 25 exige literalmente el consentimiento de ambos progenitores para evaluar a un menor.|F|Dice «se hará saber a sus padres o tutores». El consentimiento de ambos lo acordó el Consejo General en 2002 para tratamientos.",
      "La conducta prudente incluye informar también al menor, con un lenguaje adaptado a su edad.|V",
      "Si un progenitor paga la evaluación de su hijo, decide él solo.|F|Es un mito: pagar no otorga la decisión. Lo prudente es informar a ambos, documentarlo y guiarse por el interés del menor.",
      "Si la evaluación la pide un tercero, el evaluado debe saber que el informe no es para él, aunque conserve el derecho a conocerlo.|V"
    ],
    q: [
      "Una madre separada pide evaluar la atención de su hija de nueve años y paga las sesiones. El padre no sabe nada. ¿Qué es lo prudente?|Informar también al padre|Evaluar solo con la madre|Pedir permiso al colegio|Pagar no da la decisión en exclusiva: el padre debe ser informado, y en muchos colegios se exigiría su conformidad.",
      "Una madre separada quiere usar en un procedimiento de custodia el informe sobre la atención de su hija. ¿Qué ocurre?|La evaluación entra en el terreno pericial|La evaluación se mantiene como clínica|El informe pasa a ser un certificado|Cambia de naturaleza y entra en el terreno pericial, con exigencias propias de Psicología Jurídica.",
      "¿Qué elemento forma parte del consentimiento informado en evaluación?|Quién recibirá los resultados|El precio de cada sesión|La puntuación esperada|Incluye objetivo y solicitante, técnicas y tiempo, destinatarios, límites de la confidencialidad y derechos.",
      "Un psicólogo sabe que una empresa usará su evaluación para perjudicar a un trabajador. ¿Qué le exige el Código?|Rechazar el encargo|Avisar al trabajador|Pedir más honorarios|El art. 24 obliga a rechazar el encargo si se va a usar contra los intereses de las personas."
    ],
    inc: [
      "Sobre la evaluación de menores|Basta con informar al progenitor que la solicita|Conviene documentar a quién se ha informado|El criterio rector es el interés del menor|Lo prudente es informar a ambos progenitores e intentar obtener la conformidad de los dos, sobre todo si están separados."
    ],
    seq: [
      "Conducta prudente ante la evaluación de un menor|Informar a ambos progenitores>Documentar a quién y cuándo se informó>Valorar si hay desacuerdo abierto>Informar al menor con lenguaje adaptado"
    ],
    cls: [
      "Ámbito del criterio|Art. 25: evaluación; hacer saber a padres o tutores|Acuerdo de 2002: tratamientos; consentimiento de ambos progenitores o resolución judicial"
    ] },
  { t: "Marcos internacionales y nuevo Código en tramitación",
    tip: "El Metacódigo de la EFPA (Atenas, 1995, revisado en Granada en 2005) es una guía para los códigos nacionales con cuatro principios: respeto, competencia, responsabilidad e integridad. Otros marcos son la Declaración Universal de Principios Éticos (IUPsyS e IAAP, 2008), las directrices de la ITC y las GAP. El nuevo Código del Consejo General sigue en tramitación: proyecto aprobado por la Junta de Gobierno el 21-2-2026, audiencia pública e informe de la CNMC. Hasta su aprobación, el vigente es el de 1987.",
    v: [
      "Metacódigo de la EFPA=Guía europea para los códigos nacionales, no para aplicar directamente",
      "EFPA=Federación Europea de Asociaciones de Psicólogos",
      "Principio de respeto=Derechos y dignidad, concretado en intimidad y consentimiento",
      "Principio de competencia=Formación y elección de técnicas (arts. 17 y 18)",
      "Principio de responsabilidad=Rechazo de encargos dañinos y custodia (arts. 24 y 46)",
      "Principio de integridad=Honestidad y no beneficio propio (arts. 6 y 44)",
      "Declaración Universal=Marco ético común de IUPsyS e IAAP para todo el mundo (2008)",
      "Nuevo Código=Proyecto del Consejo General aún en tramitación"
    ],
    g: [
      "El Metacódigo de la EFPA se aprobó en Atenas en ___.|1995|2005|2008",
      "El Metacódigo se revisó en ___ en 2005.|Granada|Atenas|Madrid",
      "La Junta de Gobierno aprobó el proyecto de nuevo Código el 21 de febrero de ___.|2026|2025|2024",
      "El informe sobre el proyecto de nuevo Código lo emitió la ___.|CNMC|EFPA|ITC",
      "Si se aprueba, el nuevo Código entraría en vigor ___ días después.|20|30|15"
    ],
    tf: [
      "En noviembre de 2026, el nuevo Código Deontológico ya está vigente.|F|Sigue en tramitación: falta la aprobación por la Junta General. Presentarlo como vigente es una trampa típica.",
      "El Metacódigo de la EFPA no está pensado para aplicarse directamente, sino como guía para las asociaciones nacionales.|V",
      "La eficiencia es uno de los cuatro principios del Metacódigo de la EFPA.|F|Los cuatro son respeto, competencia, responsabilidad e integridad.",
      "Un psicólogo que use una herramienta de inteligencia artificial sigue siendo responsable de las conclusiones que firma.|V"
    ],
    q: [
      "Un psicólogo comete una falta al usar en beneficio propio la información de un evaluado. ¿Con qué principio de la EFPA se relaciona sobre todo?|Integridad|Competencia|Respeto|La integridad se concreta en la honestidad y el no beneficio propio (arts. 6 y 44).",
      "En un examen de noviembre de 2026 se pregunta qué Código debe citarse en un informe. ¿Cuál es?|El de 1987 con sus modificaciones|El aprobado por la Junta de Gobierno|El Metacódigo de la EFPA revisado|El nuevo Código solo tiene aprobado el proyecto. Hasta su aprobación definitiva rige el de 1987.",
      "¿Qué principio de la EFPA ordena los artículos 24 y 46 del Código español?|Responsabilidad|Integridad|Competencia|La responsabilidad se concreta en rechazar encargos dañinos (art. 24) y custodiar los registros (art. 46).",
      "¿Qué organismos promovieron la Declaración Universal de Principios Éticos para Psicólogos?|IUPsyS e IAAP|EFPA y COP|ITC y EAPA|La Declaración de 2008 de la IUPsyS y la IAAP busca un marco común para la psicología de todo el mundo."
    ],
    inc: [
      "Sobre la tramitación del nuevo Código|La Junta General ya lo aprobó en julio de 2026|Hubo audiencia pública hasta el 15-3-2026|La CNMC emitió un informe el 1-7-2026|La aprobación por la Junta General está pendiente. En julio de 2026 se emitió el informe de la CNMC."
    ],
    seq: [
      "Tramitación del nuevo Código Deontológico|Aprobación del proyecto por la Junta de Gobierno>Audiencia pública>Informe de la CNMC>Aprobación por la Junta General>Entrada en vigor"
    ],
    cls: [
      "Principio de la EFPA|Respeto: intimidad; consentimiento; arts. 25 y 39 a 42|Competencia: formación; elección de técnicas; arts. 17 y 18|Responsabilidad: rechazo de encargos dañinos; custodia; arts. 24 y 46"
    ] }
] }
);

// SAIMAP Psicología · Evaluación I · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Fiabilidad, error de medida y puntuaciones", cap: 3, pir: "alta", mods: [
  { t: "Teoría clásica de los tests y concepto de fiabilidad",
    tip: "La fiabilidad es la precisión de una medida, el grado en que está libre de error aleatorio. La teoría clásica de los tests, que arranca de Spearman (1904), descompone la puntuación observada en verdadera más error y define la fiabilidad como la proporción de varianza observada que es varianza verdadera. No es una propiedad fija del test, sino de las puntuaciones en una muestra y unas condiciones, y es necesaria pero no suficiente para la validez.",
    v: [
      "Fiabilidad=Precisión de una medida, grado en que está libre de error aleatorio",
      "Puntuación verdadera=Media de las puntuaciones en infinitas aplicaciones en las mismas condiciones",
      "Puntuación observada=La que se obtiene realmente al aplicar el test",
      "Coeficiente rxx=Índice de 0 a 1 de la proporción de varianza observada que es verdadera",
      "Error sistemático=Sesgo constante, como una báscula que marca siempre dos kilos de más",
      "Teoría de la generalizabilidad=Marco de Cronbach y col. (1972) que separa varias fuentes de error a la vez",
      "TRI=Marco que estima la precisión para cada nivel del atributo",
      "Spearman (1904)=Autor de los trabajos de los que arranca la teoría clásica"
    ],
    g: [
      "Uno de los supuestos de la TCT es que el error medio de medida es ___.|cero|positivo|constante",
      "Un rxx de 0,90 indica que el ___ de las diferencias observadas refleja diferencias reales.|90 %|10 %|81 %",
      "En muestras muy homogéneas, el coeficiente de fiabilidad tiende a ___.|bajar|subir|mantenerse",
      "Un error ___ no reduce la fiabilidad, pero sí afecta a la validez.|sistemático|aleatorio|de muestreo",
      "La idea de la teoría de la generalizabilidad la retomó ___ al proponer su cubo.|Cone|Spearman|Messick"
    ],
    tf: [
      "La fiabilidad es una propiedad fija del test, válida para cualquier muestra.|F|Es de las puntuaciones en una muestra y unas condiciones: en muestras homogéneas baja aunque el test no cambie.",
      "Según la TCT, el error no se relaciona con la puntuación verdadera.|V",
      "Un test que da resultados muy estables mide necesariamente lo que pretende medir.|F|La fiabilidad es necesaria pero no suficiente: un test estable puede medir con precisión otra cosa.",
      "En el test-retest, cuanto mayor es el intervalo, más cambio real y menor coeficiente.|V"
    ],
    q: [
      "Un test de vocabulario muy fiable en población general da un coeficiente bastante menor en licenciados en Filología. ¿Qué lo explica mejor?|La menor variabilidad de la muestra|Un cambio en el contenido del test|Un error sistemático de corrección|En muestras homogéneas, que puntúan todos alto, el coeficiente baja aunque el test sea el mismo.",
      "Una báscula marca siempre dos kilos de más. ¿Qué garantía se ve afectada?|La validez, no la fiabilidad|La fiabilidad, no la validez|Ambas en la misma medida|Es un error sistemático: no reduce la precisión entre medidas, pero sesga la conclusión.",
      "Según la TCT, la fiabilidad se define como…|la proporción de varianza verdadera|la correlación con un criterio externo|la media de los errores de medida|Es la proporción de la varianza observada que se debe a la varianza verdadera, expresada con rxx.",
      "¿Qué marco estima un error distinto para cada nivel del atributo?|La teoría de respuesta al ítem|La teoría clásica de los tests|La teoría de la generalizabilidad|La TRI da la precisión por niveles y es la base de los tests adaptativos. La TCT ofrece un único coeficiente."
    ],
    inc: [
      "Sobre la TCT y la fiabilidad|Alargar el test con ítems equivalentes la reduce|El error medio se supone igual a cero|Instrucciones confusas añaden error a la medida|Con más ítems equivalentes los errores se compensan y la fiabilidad sube."
    ],
    seq: [],
    cls: [
      "Efecto sobre la fiabilidad|La aumenta: más ítems equivalentes; muestra heterogénea|La reduce: instrucciones confusas; muestra homogénea; corrección subjetiva; intervalo largo en el retest"
    ] },
  { t: "Tipos de fiabilidad",
    tip: "Cada tipo de fiabilidad responde a una fuente de error: test-retest (estabilidad), formas paralelas (equivalencia), consistencia interna (dos mitades con Spearman-Brown, KR-20, α y ω) y entre jueces (kappa para categorías, CCI para puntuaciones). El test-retest sirve para rasgos, no para estados. Un α alto no demuestra unidimensionalidad: eso se comprueba con análisis factorial.",
    v: [
      "Test-retest=Mismo test aplicado dos veces a las mismas personas para ver su estabilidad",
      "Formas paralelas=Dos versiones de contenido distinto pero equivalente que se correlacionan",
      "Dos mitades=Correlación entre partes del test, como pares e impares, corregida después",
      "KR-20=Coeficiente de consistencia interna para ítems dicotómicos",
      "α de Cronbach=Generalización de 1951 para ítems de cualquier formato, como los Likert",
      "ω de McDonald=Coeficiente factorial que no exige que todos los ítems pesen igual",
      "Kappa de Cohen=Acuerdo entre jueces en categorías, corregido por el azar",
      "CCI=Coeficiente intraclase para el acuerdo entre jueces en puntuaciones cuantitativas"
    ],
    g: [
      "Si las dos mitades correlacionan 0,70, Spearman-Brown estima para el test completo un ___.|0,82|0,70|0,85",
      "Si un test con rxx de 0,60 se alarga al doble, su fiabilidad estimada pasa a ___.|0,75|0,80|0,72",
      "Según Landis y Koch, un kappa por encima de 0,80 indica un acuerdo ___.|casi perfecto|sustancial|moderado",
      "Para ítems de acierto o error, el coeficiente clásico de consistencia interna es el ___.|KR-20|CCI|kappa",
      "Las decisiones sobre ___ exigen coeficientes de fiabilidad más altos.|individuos|grupos|muestras"
    ],
    tf: [
      "Un α de 0,92 en un test largo demuestra que mide un único constructo.|F|El α depende del número de ítems y de su correlación media. La unidimensionalidad exige análisis factorial.",
      "El test-retest es poco adecuado para estimar la fiabilidad de una escala de ansiedad estado.|V",
      "El CCI es el índice indicado para el acuerdo entre jueces en categorías nominales.|F|Para categorías se usa el kappa de Cohen. El CCI se reserva para puntuaciones cuantitativas.",
      "Si el α de Cronbach debe sustituirse de forma general por el ω de McDonald es una cuestión en debate.|V"
    ],
    q: [
      "Un equipo crea un sistema de observación de conductas disruptivas en el aula que dos observadores codifican en categorías. ¿Qué fiabilidad debe priorizar?|El acuerdo entre jueces con kappa|La estabilidad con test-retest|La consistencia interna con α|Cuando la puntuación depende del juicio de evaluadores y hay categorías, se usa el kappa de Cohen.",
      "¿Por qué se aplica la fórmula de Spearman-Brown en el método de las dos mitades?|Porque cada mitad es más corta|Porque los ítems son dicotómicos|Porque las mitades no son paralelas|La correlación entre mitades corresponde a un test de la mitad de longitud, y hay que corregirla.",
      "¿Qué supuesto del α de Cronbach no exige el ω de McDonald?|Que todos los ítems pesen igual|Que los ítems sean dicotómicos|Que haya dos aplicaciones|El ω parte de un modelo factorial y admite pesos distintos, un supuesto del α que rara vez se cumple.",
      "Para comprobar que un cuestionario mide una sola dimensión, ¿qué procede?|Un análisis factorial|Calcular el α de Cronbach|Aplicar Spearman-Brown|La unidimensionalidad es una evidencia de estructura interna y se comprueba con análisis factorial, no con el α."
    ],
    inc: [
      "Sobre los tipos de fiabilidad|El α se estima con dos aplicaciones del mismo test|Kappa corrige el acuerdo debido al azar|Las escalas de tres o cuatro ítems suelen tener fiabilidad modesta|El α es un índice de consistencia interna y se estima con una sola aplicación."
    ],
    seq: [],
    cls: [
      "Procedimiento de estimación|Una sola aplicación: dos mitades; KR-20; α de Cronbach; ω de McDonald|Dos aplicaciones o formas: test-retest; formas paralelas|Dos o más evaluadores: kappa de Cohen; CCI"
    ] },
  { t: "Error típico de medida e intervalos de confianza",
    tip: "El error típico de medida (ETM) es la desviación típica de los errores y se calcula multiplicando la DT del test por la raíz de 1 − rxx. Describe cuánto oscilaría la puntuación de una misma persona, mientras que la DT describe cuánto difieren las personas entre sí. Con él se construyen intervalos: X ± 1·ETM al 68 % y X ± 1,96·ETM al 95 %. Hay que informar con intervalos y ser prudente con los puntos de corte, las diferencias y el cambio.",
    v: [
      "Error típico de medida=Desviación típica de los errores de una misma persona",
      "Desviación típica del test=Cuánto difieren las personas entre sí en sus puntuaciones",
      "Intervalo del 68 %=Puntuación observada más y menos un error típico",
      "Intervalo del 95 %=Puntuación observada más y menos 1,96 errores típicos",
      "Fiabilidad perfecta=Caso en que el error típico vale cero",
      "Fiabilidad nula=Caso en que el error típico iguala la desviación típica del test",
      "Precisión en la TRI=Error distinto por nivel, que suele ser menor en la zona central",
      "Art. 48 del Código=Pide expresar el grado de certeza de las conclusiones"
    ],
    g: [
      "Con DT de 15 y rxx de 0,91, el ETM es de ___ puntos.|4,5|1,35|9",
      "Con DT de 10 y rxx de 0,64, el ETM es de ___ puntos.|6|3,6|4",
      "Para el intervalo del 95 % se multiplica el ETM por ___.|1,96|1|1,64",
      "Con ETM de 3 y un CI observado de 100, el intervalo del 95 % va de 94,1 a ___.|105,9|103|106,5",
      "En una escala de CI, pasar de rxx 0,84 a 0,96 reduce el ETM ___.|a la mitad|un 12 %|a la décima parte"
    ],
    tf: [
      "El ETM describe cuánto difieren las personas entre sí en el test.|F|Eso lo describe la DT. El ETM indica cuánto variaría la puntuación de una misma persona por el error.",
      "Una mejora de 4 puntos entre dos evaluaciones puede ser solo error si el ETM es de 5 puntos.|V",
      "Cada centésima que gana la fiabilidad reduce el ETM en la misma cantidad.|F|La relación no es lineal: cerca de 1, cada mejora de la fiabilidad recorta mucho más el error.",
      "En la TCT, el ETM es el mismo para todas las puntuaciones del test.|V"
    ],
    q: [
      "Un centro exige un CI de 130 para un programa de altas capacidades. Una alumna obtiene 128 con un ETM de 3. ¿Qué puede afirmarse?|Que no consta que esté por debajo|Que está por debajo del corte|Que su CI verdadero es 128|Su intervalo del 95 % llega hasta casi 134, así que no puede afirmarse que esté por debajo del corte.",
      "Un test tiene media 100, DT 15 y rxx 0,75. Un estudiante obtiene 112. ¿Qué permite concluir el intervalo del 95 %?|Que no consta que supere la media|Que supera la media con seguridad|Que está por debajo de la media|El ETM es 7,5 y el intervalo va de 97,3 a 126,7, que incluye valores por debajo de 100.",
      "¿Qué ocurre con el ETM si la fiabilidad del test es nula?|Iguala la desviación típica|Duplica la desviación típica|Se vuelve igual a cero|Con rxx de 0 la puntuación no dice nada de la persona: el error es tan grande como la DT del test.",
      "Un estudiante obtiene 112 en un test con ETM de 4,5. ¿Cómo se expresa mejor en el informe?|Entre 103 y 121 al 95 %|CI exacto de 112 puntos|Entre 107 y 117 al 95 %|112 ± 1,96·4,5 da de 103,18 a 120,82. El intervalo de 107,5 a 116,5 es el del 68 %."
    ],
    inc: [
      "Sobre el ETM y los intervalos|El intervalo del 95 % se obtiene con X ± 1·ETM|Informar con intervalos refleja lo que se sabe|Los tests suelen medir mejor en la zona central|El intervalo X ± 1·ETM es el del 68 %. Para el del 95 % se usa 1,96·ETM."
    ],
    seq: [
      "Interpretar una puntuación con su error|Calcular el ETM>Multiplicar el ETM por 1,96>Sumar y restar a la puntuación observada>Interpretar el intervalo resultante"
    ],
    cls: [] },
  { t: "Baremos y puntuaciones típicas",
    tip: "Una puntuación directa no significa nada sin una referencia. La interpretación normativa la compara con un grupo mediante baremos representativos, amplios y actuales, y la criterial, con un criterio de dominio. Las escalas típicas se obtienen de z con transformaciones lineales: T (50 y 10), CI (100 y 15), escalar Wechsler (10 y 3), eneatipo (5 y 2) y decatipo (5,5 y 2). El percentil es ordinal y no se puede promediar ni restar.",
    v: [
      "Baremo=Tabla que transforma puntuaciones directas en derivadas según una muestra normativa",
      "Muestra normativa=Grupo representativo, amplio y actual con el que se elabora el baremo",
      "Puntuación z=Distancia a la media expresada en desviaciones típicas",
      "Puntuación T=Escala de media 50 y desviación típica 10",
      "Escalar Wechsler=Escala de media 10 y desviación típica 3 de las subpruebas",
      "Eneatipo=Escala de 1 a 9 con media 5 y desviación típica 2",
      "Decatipo=Escala de 1 a 10 con media 5,5 y desviación típica 2",
      "Percentil=Porcentaje del grupo normativo con puntuación igual o inferior"
    ],
    g: [
      "Una puntuación T de 35 equivale a un CI de ___.|77,5|85|92,5",
      "Con z de 1, en una distribución normal, la persona se sitúa en torno al percentil ___.|84|68|75",
      "A dos desviaciones típicas por debajo de la media, la puntuación escalar Wechsler es ___.|4|7|6",
      "Un CI de 112 en una escala de media 100 y DT 15 equivale a una T de ___.|58|62|56",
      "Entre P90 y P99 hay una diferencia de ___ una desviación típica.|más de|menos de|justo"
    ],
    tf: [
      "Si un niño está en el percentil 50 en una subprueba y en el 99 en otra, su percentil medio es 74,5.|F|Los percentiles son ordinales y no se promedian. Para combinar se usan z o T, o el baremo de la compuesta.",
      "De P50 a P60 hay menos distancia en el atributo que de P90 a P99.|V",
      "Las equivalencias exactas entre percentiles y típicas valen con cualquier distribución.|F|Solo valen si la distribución es normal. Si no lo es, el baremo debe dar los percentiles empíricos.",
      "Un percentil 84 también tiene su intervalo de confianza.|V"
    ],
    q: [
      "Una orientadora quiere saber si un alumno domina el 80 % de las operaciones aritméticas del curso, sin compararlo con nadie. ¿Qué interpretación usa?|Criterial|Normativa|Ipsativa|Compara con un criterio de dominio o un punto de corte. No importa cómo lo hagan los demás.",
      "Una persona obtiene un eneatipo de 7. ¿A qué puntuación T equivale?|60|70|57|z vale (7 − 5) / 2, es decir 1, y la T es 50 + 10·1, que da 60.",
      "Un adolescente español se compara con un baremo elaborado hace décadas en otro país. ¿Qué requisito falla?|Que sea representativo y actual|Que tenga fiabilidad entre jueces|Que admita interpretación criterial|Un baremo útil exige una muestra normativa representativa, suficientemente amplia y actual.",
      "Un decatipo de 7,5 equivale a una puntuación z de…|1|1,25|0,75|(7,5 − 5,5) / 2 da 1. Usar media 5 en lugar de 5,5 lleva al error de 1,25."
    ],
    inc: [
      "Sobre las puntuaciones derivadas|Los percentiles forman una escala de intervalo|z es la base de las demás escalas típicas|La T se usa en cuestionarios clínicos y de personalidad|Los percentiles son ordinales: las distancias entre ellos no son iguales en el atributo medido."
    ],
    seq: [],
    cls: [
      "Tipo de interpretación|Normativa: baremo; muestra normativa; percentil; puntuación T|Criterial: punto de corte de dominio; porcentaje de operaciones dominadas"
    ] }
] },
{ n: 10, t: "Validez y calidad de los tests", cap: 3, pir: "alta", mods: [
  { t: "La validez según los Standards (2014)",
    tip: "Según los Standards (AERA, APA y NCME, 2014), la validez es el grado en que la evidencia y la teoría apoyan las interpretaciones de las puntuaciones para los usos propuestos. No se valida el test, sino una interpretación para un uso, y la validez es gradual y unitaria, con cinco fuentes de evidencia. Supera la visión trinitaria: Cronbach y Meehl (1955) definieron la validez de constructo y Messick (1989) la unificó. La validez aparente no es una evidencia técnica.",
    v: [
      "Validez=Grado en que evidencia y teoría apoyan interpretar las puntuaciones para un uso",
      "Visión trinitaria=Clasificación clásica en validez de contenido, criterio y constructo",
      "Cronbach y Meehl (1955)=Autores que definieron la validez de constructo",
      "Messick (1989)=Defendió que toda validez es de constructo e incorporó las consecuencias",
      "Procesos de respuesta=Fuente que comprueba si se responde con los procesos que el test supone",
      "Estructura interna=Fuente que examina si las relaciones entre ítems coinciden con la teoría",
      "Validez aparente=Grado en que el test parece adecuado a quien lo responde",
      "Utilidad=Criterio añadido: que el test aporte algo a la decisión y compense su coste"
    ],
    g: [
      "Según los Standards, la validez es una cuestión de ___, no de todo o nada.|grado|tipo|método",
      "Las entrevistas cognitivas sobre cómo se interpreta cada ítem aportan evidencia de ___.|procesos de respuesta|estructura interna|contenido",
      "Que jueces expertos comprueben que un examen de conducir cubre todas las normas es evidencia de ___.|contenido|consecuencias|estructura interna",
      "Messick incorporó a la validez las ___ del uso del test.|consecuencias|evidencias|fuentes",
      "En la terminología clásica, la validez de ___ abarca hoy todo el argumento.|constructo|criterio|contenido"
    ],
    tf: [
      "La validez aparente es una de las cinco fuentes técnicas de evidencia de los Standards.|F|No es evidencia técnica: un test puede parecer adecuado y no medir bien. Sí influye en la colaboración.",
      "Un cuestionario puede estar bien respaldado para el cribado en atención primaria y no para seleccionar personal.|V",
      "Según los Standards, hay tres tipos de validez independientes que se evalúan por separado.|F|La validez es unitaria: hay distintas fuentes de evidencia que contribuyen a un mismo argumento.",
      "Si las consecuencias del uso deben formar parte de la validez es una cuestión en debate.|V"
    ],
    q: [
      "Una prueba de selección perjudica sin justificación a un grupo de candidatos. ¿Qué fuente de evidencia lo pone de manifiesto?|Consecuencias|Contenido|Procesos de respuesta|Las consecuencias examinan los efectos, previstos o no, de usar el test. Su lugar dentro de la validez sigue en debate.",
      "Un psicólogo escribe en su informe «este test es válido». ¿Qué objeción haría alguien que siga los Standards?|Que falta precisar para qué uso|Que falta un α de al menos 0,90|Que la validez es solo aparente|Se valida una interpretación para un uso, no el test: válido para qué, con quién y para tomar qué decisión.",
      "Un análisis factorial confirma las tres dimensiones que propone la teoría. ¿Qué evidencia aporta?|Estructura interna|Procesos de respuesta|Relaciones con otras variables|Comprobar que las relaciones entre los ítems coinciden con la teoría es evidencia de estructura interna.",
      "Varios pacientes abandonan un cuestionario porque les parece absurdo. ¿Qué aspecto está fallando?|La validez aparente|La validez de contenido|La validez predictiva|No es una evidencia técnica, pero si el test parece absurdo la persona colabora poco o lo abandona."
    ],
    inc: [
      "Sobre la validez según los Standards|Se valida el test en sí, una vez publicado|La validez es unitaria y una cuestión de grado|Distinguen cinco fuentes de evidencia de validez|Lo que se valida es la interpretación de las puntuaciones para un uso, no el test."
    ],
    seq: [],
    cls: [
      "Fuente de evidencia|Contenido: jueces expertos; representatividad del dominio|Estructura interna: análisis factorial; dimensiones previstas por la teoría|Procesos de respuesta: entrevistas cognitivas; interpretación de cada ítem"
    ] },
  { t: "Evidencias convergentes, discriminantes y de criterio",
    tip: "Las relaciones con otras variables son la fuente de evidencia más usada. La convergente exige correlaciones altas con medidas del mismo constructo, y la discriminante, bajas con constructos distintos. La de criterio puede ser predictiva, concurrente o retrospectiva y depende de la calidad del criterio. La matriz multirrasgo-multimétodo de Campbell y Fiske (1959) reúne ambas evidencias y permite detectar la varianza de método.",
    v: [
      "Evidencia convergente=Correlación alta con otras medidas del mismo constructo",
      "Evidencia discriminante=Correlación baja con medidas de constructos distintos",
      "Validez predictiva=El criterio se mide después de aplicar el test",
      "Validez concurrente=El criterio se recoge a la vez que el test",
      "Validez retrospectiva=El criterio procede del pasado, como el historial académico",
      "Contaminación del criterio=Quien valora el criterio conoce las puntuaciones del test",
      "Varianza de método=Parte de lo medido que se debe al instrumento y no al rasgo",
      "Matriz multirrasgo-multimétodo=Varios rasgos medidos con varios métodos (Campbell y Fiske)"
    ],
    g: [
      "Con rxx de 0,81 y ryy de 0,64, el coeficiente de validez máximo posible es ___.|0,72|0,52|0,81",
      "En la matriz de Campbell y Fiske, los valores más altos deben estar en la diagonal de ___.|fiabilidad|validez convergente|validez discriminante",
      "Mismo rasgo con distinto método corresponde a la diagonal de validez ___.|convergente|discriminante|incremental",
      "Campbell y Fiske propusieron la matriz multirrasgo-multimétodo en ___.|1959|1955|1989",
      "Correlacionar un cuestionario actual con el historial académico previo es evidencia ___.|retrospectiva|concurrente|predictiva"
    ],
    tf: [
      "Si dos rasgos distintos medidos con el mismo método correlacionan más que un mismo rasgo con métodos distintos, hay varianza de método.|V",
      "Un criterio poco fiable no afecta a la correlación entre un buen test y ese criterio.|F|Si el criterio es poco fiable, la correlación baja aunque el test sea bueno.",
      "Si una escala de depresión correlaciona tanto con deseabilidad social como con otra de depresión, falla la evidencia convergente.|F|Falla la discriminante: debería correlacionar bajo con un constructo distinto como la deseabilidad social.",
      "El coeficiente de validez no puede superar la raíz cuadrada del producto de las fiabilidades del test y del criterio.|V"
    ],
    q: [
      "Un cuestionario de cribado se aplica el mismo día que una entrevista estructurada que sirve de criterio diagnóstico. ¿Qué evidencia se obtiene?|Concurrente|Predictiva|Retrospectiva|El criterio se mide a la vez que el test. Si se midiera después, sería evidencia predictiva.",
      "Un supervisor valora el rendimiento de unos empleados conociendo sus puntuaciones en la prueba de selección. ¿Qué problema hay?|Contaminación del criterio|Varianza de método|Falta de validez aparente|El juicio del supervisor puede estar influido por las puntuaciones del test.",
      "En una matriz multirrasgo-multimétodo, la ansiedad por autoinforme correlaciona 0,30 con la ansiedad observada y 0,65 con la extraversión por autoinforme. ¿Qué indica?|Varianza de método|Buena validez convergente|Alta fiabilidad del autoinforme|Rasgos distintos con el mismo método correlacionan más que el mismo rasgo con métodos distintos.",
      "¿En qué fuente de evidencia de los Standards se integra la validez de criterio?|Relaciones con otras variables|Contenido del dominio evaluado|Procesos de respuesta al ítem|La validez de criterio, con sus variantes predictiva, concurrente y retrospectiva, forma parte de las relaciones con otras variables."
    ],
    inc: [
      "Sobre las relaciones con otras variables|La predictiva recoge el criterio a la vez que el test|La evidencia discriminante exige correlaciones bajas|Un criterio poco fiable limita el coeficiente de validez|En la predictiva el criterio se mide después. Medirlo a la vez corresponde a la validez concurrente."
    ],
    seq: [],
    cls: [
      "Evidencia de criterio|Predictiva: rendimiento en el puesto un año después; criterio medido después|Concurrente: diagnóstico por entrevista el mismo día; criterio medido a la vez|Retrospectiva: historial académico previo; criterio del pasado"
    ] },
  { t: "Utilidad diagnóstica: sensibilidad, especificidad y curvas ROC",
    tip: "Cuando un test clasifica, su validez se expresa con índices de utilidad diagnóstica frente a un criterio. La sensibilidad y la especificidad son propiedades del test, mientras que los valores predictivos dependen de la tasa base. Bajar el punto de corte sube la sensibilidad y baja la especificidad, y la elección depende del coste de cada error. La curva ROC muestra todos los puntos de corte, y su área (AUC) va de 0,5, azar, a 1, discriminación perfecta.",
    v: [
      "Utilidad diagnóstica=Validez de un test que clasifica, expresada frente a un criterio",
      "Criterio de referencia=Clasificación, como una entrevista estructurada, con la que se compara el test",
      "Valor predictivo positivo=Proporción de positivos que realmente tienen el trastorno",
      "Valor predictivo negativo=Proporción de negativos que realmente no lo tienen",
      "Verdadero negativo=Persona sin el trastorno a la que el test clasifica como negativa",
      "Curva ROC=Sensibilidad frente a 1 − especificidad para cada punto de corte",
      "AUC=Área bajo la curva, índice resumen de discriminación",
      "Punto de corte=Valor a partir del cual una puntuación continua se considera positiva"
    ],
    g: [
      "Con 34 verdaderos positivos y 16 falsos positivos, el VPP es ___.|0,68|0,85|0,90",
      "Un test detecta a 45 de 50 personas con el trastorno, así que su sensibilidad es ___.|0,90|0,69|0,45",
      "En un cribado, donde un positivo solo lleva a una evaluación más completa, se prefiere una ___ alta.|sensibilidad|especificidad|tasa base",
      "Un AUC de ___ indica que el test no discrimina mejor que el azar.|0,5|0,7|1",
      "En la curva ROC, el eje horizontal representa ___.|1 − especificidad|la sensibilidad|el VPP"
    ],
    tf: [
      "El AUC solo puede calcularse una vez fijado el punto de corte.|F|El AUC resume todos los puntos de corte a la vez y permite comparar tests con independencia de él.",
      "Bajar el punto de corte aumenta la sensibilidad y reduce la especificidad.|V",
      "La sensibilidad indica la probabilidad de tener el trastorno cuando se ha dado positivo.|F|Eso es el VPP. La sensibilidad es la proporción de personas con el trastorno que el test detecta.",
      "Si el criterio de referencia también se equivoca, los índices de utilidad diagnóstica quedan distorsionados.|V"
    ],
    q: [
      "Un cuestionario se aplica a 100 personas, 20 con el trastorno según la entrevista. Detecta a 16 de ellas y da positivo en 8 de las 80 sanas. ¿Cuál es su VPP?|0,67|0,80|0,90|VPP de 16 / 24, es decir 0,67. La sensibilidad sería 16 / 20 (0,80) y la especificidad, 72 / 80 (0,90).",
      "Un test va a apoyar una medida judicial con consecuencias graves. ¿Qué conviene priorizar al fijar el punto de corte?|Una especificidad alta|Una sensibilidad alta|Un VPN elevado|Cuando un positivo tiene consecuencias graves se prefiere una especificidad alta, que reduce los falsos positivos.",
      "¿Cómo puede interpretarse un AUC de 0,80?|Que un afectado al azar supere a un sano|Que detecta al 80 % de los afectados|Que el 80 % de los positivos lo tienen|El AUC es la probabilidad de que una persona del grupo con el trastorno puntúe más que una del grupo sin él.",
      "Un cribado de depresión da 34 verdaderos positivos, 16 falsos positivos, 6 falsos negativos y 144 verdaderos negativos. ¿Cuál es el VPN?|0,96|0,90|0,85|144 / 150 da 0,96. El 0,90 es la especificidad (144 / 160), y el 0,85, la sensibilidad (34 / 40)."
    ],
    inc: [
      "Sobre la utilidad diagnóstica|Un AUC de 1 indica un test que no discrimina|Subir el punto de corte aumenta la especificidad|Los valores predictivos dependen de la tasa base|Un AUC de 1 es discriminación perfecta. El azar corresponde a 0,5."
    ],
    seq: [],
    cls: [
      "Celda de la tabla de clasificación|Test positivo: verdaderos positivos; falsos positivos|Test negativo: verdaderos negativos; falsos negativos"
    ] },
  { t: "Calidad y uso de los tests: CET-R, directrices ITC y uso en España",
    tip: "Quien evalúa es sobre todo usuario de tests y debe escogerlos con información fiable. El CET-R (Hernández et al., 2016), revisión del cuestionario de Prieto y Muñiz (2000) basada en el modelo de la EFPA, guía la revisión experta, y la Comisión de Test del COP publica revisiones desde 2010. La ITC tiene directrices de uso, adaptación (2.ª ed., 2017), seguridad y control de calidad. En España dominan los tests psicométricos, pero solo el 22,5 % conocía las revisiones.",
    v: [
      "CET-R=Cuestionario revisado en 2016 para valorar la calidad de un test",
      "Prieto y Muñiz (2000)=Autores de la primera versión del cuestionario de evaluación de tests",
      "Modelo EFPA=Modelo europeo de evaluación de tests en que se basa el CET-R",
      "Comisión de Test del COP=Publica revisiones periódicas de tests editados en España desde 2010",
      "Directriz de adaptación=Norma ITC para llevar un test a otra lengua y cultura con equivalencia",
      "Directriz de seguridad=Norma ITC para proteger los materiales y los resultados",
      "Control de calidad=Norma ITC para asegurar la aplicación, la corrección y el informe",
      "Muñiz y Fernández-Hermida=Hallaron en 2000 que los tests de inteligencia eran los más usados"
    ],
    g: [
      "El CET-R se publicó en ___.|2016|2000|2013",
      "En la encuesta de 2010, el test más usado en España fue el ___.|WISC|MCMI|MMPI",
      "Según la encuesta de 2020, solo el ___ conocía las revisiones de la Comisión de Test.|22,5 %|52,5 %|12,5 %",
      "La segunda edición de la directriz ITC de traducción y adaptación es de ___.|2017|2015|2010",
      "En la encuesta de 2020, los 25 tests más usados eran todos ___.|psicométricos|proyectivos|conductuales"
    ],
    tf: [
      "Para adaptar un test a otra cultura basta con una buena traducción de sus ítems.|F|Hay que comprobar que los ítems significan lo mismo, que la estructura se mantiene y que hay baremos propios.",
      "La encuesta de Muñiz y Fernández-Hermida (2000) reunió a 3.455 psicólogos.|V",
      "En la encuesta de 2010, el MCMI ocupó el primer lugar, por delante del WISC.|F|Fue al revés: el WISC quedó en primer lugar y el MCMI, en segundo.",
      "Elegir un test solo porque es el que hay en el centro, sin revisar sus evidencias para ese uso, contradice las buenas prácticas.|V"
    ],
    q: [
      "Una psicóloga va a usar en España un cuestionario traducido por un compañero, sin estudios de equivalencia ni baremos propios. ¿Qué directriz incumple?|La de traducción y adaptación|La de seguridad de materiales|La de control de calidad|La adaptación exige equivalencia de significado y de estructura y baremos propios. También choca con los arts. 6 y 18.",
      "¿En qué modelo se basa el CET-R?|El modelo europeo de la EFPA|Las directrices de la ITC|Los Standards de la AERA|La revisión de 2016 siguió el modelo europeo de evaluación de tests de la EFPA (Evers et al., 2013).",
      "¿Qué dato de las encuestas españolas resulta más preocupante?|Que pocos conocen las revisiones|Que los proyectivos lideran el uso|Que el WISC ha dejado de usarse|Solo el 22,5 % conocía las revisiones de la Comisión de Test: la información existe, pero no se consulta.",
      "Antes de usar un test, ¿qué pregunta de la lista de comprobación remite al art. 17 del Código?|Si se es competente para usarlo|Si sus baremos son actuales y amplios|Si lo revisó la Comisión de Test|El art. 17 exige competencia para aplicar, corregir e interpretar el test."
    ],
    inc: [
      "Sobre la calidad y el uso de los tests|El CET-R se usa para corregir cada protocolo|La ITC tiene una directriz sobre seguridad|El WISC era el más usado en la encuesta de 2010|El CET-R es una guía para que revisores expertos valoren la calidad de un test con criterios explícitos."
    ],
    seq: [
      "Hitos en la evaluación de la calidad de los tests|Primer cuestionario de Prieto y Muñiz>Inicio de las revisiones de la Comisión de Test>Modelo europeo de la EFPA>Publicación del CET-R>Encuesta de Muñiz, Hernández y Fernández-Hermida"
    ],
    cls: [
      "Directriz de la ITC|Uso de los tests: elección del test; comunicación de resultados|Traducción y adaptación: equivalencia cultural; baremos propios|Seguridad: protección de materiales; protección de resultados"
    ] }
] },
{ n: 11, t: "La entrevista: concepto, clasificación y habilidades", cap: 4, pir: "media", mods: [
  { t: "Concepto, ventajas y limitaciones",
    tip: "La entrevista psicológica es una conversación dirigida con propósito evaluador, con objetivo previo, roles diferenciados, interacción en dos sentidos y doble canal. El entrevistador es a la vez instrumento y fuente de error. Tiene el máximo ancho de banda (Cronbach y Gleser), pero una fidelidad variable, y en el cubo de Cone ocupa el extremo más indirecto. Sus limitaciones proceden sobre todo de la falta de control.",
    v: [
      "Entrevista psicológica=Conversación dirigida con propósito evaluador para obtener información de otro",
      "Ancho de banda=Amplitud de aspectos que abarca un método en poco tiempo",
      "Fidelidad=Precisión con la que un método mide cada aspecto",
      "Doble canal=Recoger lo que se dice y cómo se dice",
      "Roles diferenciados=Uno pregunta y dirige y el otro informa, en una relación asimétrica",
      "Interacción en dos sentidos=Lo que dice cada uno modifica lo que pregunta o cuenta el otro",
      "Efecto halo=Extender una característica llamativa al juicio global",
      "Primacía y recencia=Dar más peso a lo dicho al principio o al final"
    ],
    g: [
      "En términos de Cronbach y Gleser, la entrevista es el método de máximo ___.|ancho de banda|grado de fidelidad|nivel de control",
      "En el cubo de Cone, la entrevista ocupa el extremo más ___ de los métodos.|indirecto|directo|objetivo",
      "Por parte del entrevistado, la ___ social lleva a presentarse de forma favorable.|deseabilidad|aceptación|desinhibición",
      "A diferencia de la entrevista, un ___ busca obtener datos aunque sea contra la voluntad del otro.|interrogatorio|cuestionario|coloquio",
      "Como el entrevistador forma parte de la medida, la entrevista exige más ___ que aplicar un cuestionario.|formación|brevedad|rigidez"
    ],
    tf: [
      "Una charla entre amigos cumple los rasgos de la entrevista si hay interacción en dos sentidos.|F|Le faltan el objetivo fijado de antemano y los roles diferenciados.",
      "La entrevista es útil con personas que no saben o no pueden leer.|V",
      "Que la entrevista tenga gran ancho de banda significa que mide cada aspecto con gran precisión.|F|La precisión en cada aspecto es la fidelidad, que en la entrevista es variable.",
      "Si dos entrevistadores no preguntan lo mismo ni deciden con los mismos criterios, pueden llegar a conclusiones distintas.|V"
    ],
    q: [
      "Un psicólogo recibe a un joven derivado por problemas de conducta, lo imagina enseguida como consumidor de drogas y no explora el acoso escolar que sufre. ¿Qué sesgo actúa?|Sesgo de confirmación|Efecto de recencia|Efecto halo|La primera impresión guía las preguntas. La solución es estructurar la entrevista y contrastar con otros métodos.",
      "¿Qué rasgo distingue la entrevista de una charla entre amigos?|El objetivo fijado de antemano|La interacción en dos sentidos|El uso del canal no verbal|Ambas tienen interacción y canal no verbal. Lo propio de la entrevista es el objetivo previo y los roles diferenciados.",
      "¿De dónde proceden sobre todo las limitaciones de la entrevista?|De la falta de control|Del escaso ancho de banda|De su coste económico|Si no se pregunta lo mismo ni se decide con los mismos criterios, aumentan la variación y los sesgos.",
      "Un entrevistador da más peso a lo que el paciente dijo en los últimos minutos de la sesión. ¿Qué efecto actúa?|Recencia|Primacía|Halo|La recencia da más peso a lo dicho al final. La primacía, a lo dicho al principio."
    ],
    inc: [
      "Sobre la entrevista como método|Su fiabilidad es alta aunque no tenga estructura|Permite observar a la vez la conducta no verbal|Ayuda a construir la relación de trabajo|Sin estructura, la fiabilidad de la entrevista es baja."
    ],
    seq: [],
    cls: [
      "Ventaja o limitación de la entrevista|Ventajas: flexibilidad; acceso a la historia personal; observación no verbal; útil con quien no sabe leer|Limitaciones: coste en tiempo; sesgos del entrevistador; deseabilidad social; información difícil de ordenar"
    ] },
  { t: "Tipos de entrevista",
    tip: "Las entrevistas se clasifican por grado de estructura, objetivo, número de participantes y momento del proceso, y los criterios se combinan. La estructura es el criterio más importante porque condiciona la fiabilidad: la libre es la menos fiable, la semiestructurada la más habitual en clínica y la estructurada la más fiable. En selección, la estructurada predice mejor el desempeño (r ≈ 0,42 frente a 0,19, según Sackett et al., 2022).",
    v: [
      "Entrevista libre=Sin guion: se sigue el hilo de lo que cuenta la persona",
      "Entrevista semiestructurada=Guion de áreas y preguntas que se adapta en orden y profundidad",
      "Entrevista estructurada=Preguntas, orden y codificación fijados, con resultado por reglas",
      "Entrevista conjunta=Con una pareja o una familia, permite ver cómo interactúan",
      "Entrevista de anamnesis=Reconstruye la historia vital, a veces con una línea de vida",
      "Entrevista de profundización=Explora áreas concretas o contrasta hipótesis",
      "Entrevista de orientación=Ayuda a decidir un itinerario, como elegir estudios",
      "Comparabilidad=Todas las personas reciben las mismas preguntas y criterios"
    ],
    g: [
      "En selección, la entrevista no estructurada predice el desempeño con r ≈ ___.|0,19|0,42|0,38",
      "La entrevista ___ es la más fiable y la más adecuada para investigación.|estructurada|semiestructurada|libre",
      "Por su objetivo, la entrevista motivacional se clasifica como entrevista ___.|terapéutica|diagnóstica|de selección",
      "En la entrevista ___, cuanto mayor es el grupo, menos detalle se obtiene de cada miembro.|grupal|conjunta|individual",
      "La entrevista de ___ valora la evolución tras una intervención.|seguimiento|profundización|devolución"
    ],
    tf: [
      "Una misma entrevista puede ser a la vez semiestructurada, diagnóstica, individual e inicial.|V",
      "La entrevista libre es la más válida porque es más profunda y se adapta a cada persona.|F|Su fiabilidad es la más baja: la flexibilidad aumenta la variación entre entrevistadores.",
      "En la entrevista estructurada, el resultado se obtiene por la impresión global del entrevistador.|F|Se obtiene aplicando reglas de codificación fijadas, no por impresión del entrevistador.",
      "En la entrevista conjunta, cada miembro puede callar cosas delante de los demás.|V"
    ],
    q: [
      "Una adolescente acude obligada por su familia. ¿Qué secuencia de formatos es la más probable?|De abierta a semiestructurada|De estructurada a libre|Estructurada de principio a fin|Se empieza de forma abierta para construir la relación y se pasa después a un formato semiestructurado.",
      "Un estudio epidemiológico con muchas personas y entrevistadores formados necesita datos comparables. ¿Qué entrevista conviene?|Estructurada de investigación|Libre de orientación|Semiestructurada terapéutica|La estructurada da comparabilidad y es la más adecuada para investigación y cribados amplios.",
      "¿Qué entrevista, según el momento del proceso, analiza la demanda, establece la relación e informa del proceso?|Inicial|De profundización|De seguimiento|Es el primer contacto. La de profundización explora áreas concretas y la de seguimiento valora la evolución.",
      "¿Qué ganan sobre todo las entrevistas estructuradas frente a las libres?|Comparabilidad entre personas|Mayor ancho de banda temático|Flexibilidad ante cada caso|Todas las personas reciben las mismas preguntas y se juzgan con los mismos criterios."
    ],
    inc: [
      "Sobre la clasificación de las entrevistas|La semiestructurada impide cambiar el orden|La estructurada es la más fiable de las tres|La libre sirve en los primeros minutos|En la semiestructurada se puede cambiar el orden, reformular y añadir preguntas de seguimiento."
    ],
    seq: [],
    cls: [
      "Grado de estructura|Libre: sin guion; fiabilidad más baja|Semiestructurada: guion adaptable; la más habitual en clínica|Estructurada: codificación por reglas; la más fiable"
    ] },
  { t: "Actitudes del entrevistador",
    tip: "Carl Rogers describió tres actitudes básicas, hoy necesarias en cualquier entrevista: empatía (comprender desde el marco del otro y comunicárselo), aceptación incondicional o calidez y autenticidad o congruencia. La escucha activa las pone en práctica. No son un adorno: facilitan la franqueza y ayudan a controlar la deseabilidad social. Empatía no es complicidad ni darle la razón a la persona.",
    v: [
      "Empatía=Comprender la experiencia del otro desde su marco y comunicárselo",
      "Aceptación incondicional=Respeto por la persona con independencia de lo que cuente",
      "Autenticidad=Coherencia entre lo que se piensa, se dice y se expresa con el cuerpo",
      "Escucha activa=Atender sin interrumpir, mostrar que se sigue y devolver lo escuchado",
      "Carl Rogers=Autor humanista que describió las tres actitudes básicas",
      "Discrepancia no verbal=Desajuste entre lo que se cuenta y cómo se expresa",
      "Complicidad=Tomar partido por el paciente y cerrar la exploración",
      "Vigilar la propia influencia=Atender a las expectativas, reacciones y estilo del entrevistador"
    ],
    g: [
      "Otro nombre de la autenticidad es ___.|congruencia|calidez|aceptación",
      "Otro nombre de la aceptación incondicional es ___.|calidez|empatía|congruencia",
      "La empatía es la base de la técnica del ___.|reflejo|resumen|embudo",
      "Ante lo no verbal, lo útil es fijarse en las ___.|discrepancias|regularidades|gesticulaciones",
      "Desde el principio hay que garantizar la confidencialidad y explicar sus ___.|límites|ventajas|orígenes"
    ],
    tf: [
      "Empatía significa sentir lo mismo que la persona y darle la razón.|F|Consiste en entender qué siente y por qué, y comunicárselo, sin sentir lo mismo ni darle la razón.",
      "Las actitudes rogerianas se consideran necesarias en cualquier entrevista de evaluación, sea cual sea el modelo.|V",
      "La autenticidad obliga al entrevistador a contar todo lo que piensa.|F|No significa contarlo todo, sino no fingir: un interés impostado se nota.",
      "Quien no se siente juzgado tiene menos motivos para presentarse de forma favorable.|V"
    ],
    q: [
      "Un paciente dice que deja de ir a trabajar porque su jefe «es insoportable». ¿Qué respuesta es empática?|«Ir a trabajar se le hace muy cuesta arriba»|«Es normal, yo en su lugar haría lo mismo»|«Tiene que intentar ir aunque le cueste»|Reconoce el malestar y deja abierta la conversación. Dar la razón es complicidad y cierra la exploración.",
      "Un entrevistador muestra rechazo ante un consumo elevado de alcohol. ¿Qué efecto es más probable?|Que la persona rebaje las cifras|Que la persona aumente su franqueza|Que mejore la alianza de trabajo|Falla la aceptación incondicional: la persona tenderá a rebajar las cifras en la siguiente pregunta.",
      "Una paciente cuenta una pérdida reciente con una sonrisa. ¿Cómo conviene tratarlo?|Como una discrepancia a entender|Como una prueba de que miente|Como un gesto de significado fijo|Hay que fijarse en las discrepancias y tratarlas con tacto como pistas, no como pruebas de que la persona miente.",
      "¿Qué actitud se refiere a la coherencia entre lo que el entrevistador piensa, dice y expresa con el cuerpo?|Autenticidad|Empatía|Aceptación|La autenticidad o congruencia no exige contarlo todo, sino no fingir."
    ],
    inc: [
      "Sobre las actitudes del entrevistador|Aceptar a la persona implica aprobar su conducta|La escucha activa pone en juego las tres actitudes|Hay que hablar como habla la persona|Se acepta a la persona, no necesariamente su conducta."
    ],
    seq: [],
    cls: [
      "Actitud básica|Empatía: marco de referencia del otro; base del reflejo|Aceptación incondicional: calidez; respeto sin juzgar|Autenticidad: congruencia; no fingir interés"
    ] },
  { t: "Técnicas de entrevista",
    tip: "Hay técnicas para obtener información (preguntas) y para devolverla (escucha). Las preguntas abiertas, semiabiertas y cerradas se ordenan en embudo, o en embudo invertido con personas poco habladoras o ansiosas, y conviene evitar las sugestivas, dobles y encadenadas. La clarificación es una pregunta que pide precisar, la paráfrasis devuelve el contenido, el reflejo la emoción y el resumen ordena varios temas. La confrontación exige una relación ya establecida.",
    v: [
      "Pregunta abierta=Permite que la persona elija qué contar y con qué palabras",
      "Pregunta semiabierta=Acota el tema sin dar la respuesta, como «¿En qué situaciones le pasa?»",
      "Pregunta sugestiva=Contiene la respuesta esperada",
      "Pregunta doble=Plantea dos cuestiones a la vez",
      "Clarificación=Pregunta que pide precisar algo ambiguo",
      "Paráfrasis=Devuelve con otras palabras el contenido de lo dicho",
      "Reflejo=Devuelve la emoción percibida, aunque no se haya nombrado",
      "Resumen=Recoge varios temas de la sesión y los ordena"
    ],
    g: [
      "La secuencia que va de las preguntas abiertas a las cerradas se llama ___.|embudo|abanico|escalera",
      "«¿Duerme y come bien?» es un ejemplo de pregunta ___.|doble|sugestiva|encadenada",
      "«Supongo que discuten mucho, ¿no?» es una pregunta ___.|sugestiva|doble|semiabierta",
      "La paráfrasis se queda en los hechos, y el reflejo apunta a los ___.|sentimientos|contenidos|problemas",
      "Las expresiones breves como «ya» o «siga» se llaman ___.|facilitaciones|clarificaciones|paráfrasis"
    ],
    tf: [
      "La clarificación es una técnica de devolución, igual que la paráfrasis y el reflejo.|F|La clarificación es una pregunta que pide precisar algo ambiguo, no una devolución.",
      "La paráfrasis y el reflejo se formulan de forma tentativa para que la persona pueda corregir.|V",
      "La confrontación es más eficaz en los primeros minutos, antes de que la persona se ponga a la defensiva.|F|Solo debe usarse con la relación ya establecida. Al principio suele provocar una actitud defensiva.",
      "Las preguntas cerradas son precisas, pero pueden dejar fuera lo importante si se usan demasiado pronto.|V"
    ],
    q: [
      "Una paciente dice: «Desde que empecé el trabajo nuevo no duermo y llego a casa agotada». El psicólogo responde: «Parece que se siente desbordada con esta etapa». ¿Qué técnica usa?|Reflejo|Paráfrasis|Clarificación|Devuelve una emoción que no se ha nombrado. La paráfrasis devolvería el contenido: duerme mal y acaba sin energía.",
      "Una paciente dice que no duerme desde que cambió de trabajo, y el psicólogo pregunta: «¿Le cuesta dormirse o se despierta por la noche?». ¿Qué técnica es?|Clarificación|Paráfrasis|Resumen|Pide precisar algo ambiguo. Es una pregunta, no una técnica de devolución.",
      "«Me cuenta que la relación con su hermano va bien, y a la vez que lleva meses sin cogerle el teléfono.» ¿Qué técnica es?|Confrontación|Paráfrasis|Clarificación|Señala una discrepancia sin tono acusador. Exige que la relación ya esté establecida.",
      "Con un paciente muy ansioso y poco hablador, ¿qué secuencia de preguntas conviene?|Embudo invertido|Embudo clásico|Preguntas encadenadas|Se empieza por preguntas concretas y fáciles y se abre a medida que la persona se siente cómoda."
    ],
    inc: [
      "Sobre las técnicas de entrevista|El reflejo devuelve el contenido de lo dicho|El resumen recoge y ordena varios temas de la sesión|Los silencios invitan a la persona a seguir hablando|El reflejo devuelve la emoción. Devolver el contenido con otras palabras es la paráfrasis."
    ],
    seq: [],
    cls: [
      "Tipo de técnica|Obtener información: pregunta abierta; pregunta cerrada; pregunta semiabierta; clarificación|Devolver información: paráfrasis; reflejo; resumen"
    ] }
] },
{ n: 12, t: "El proceso y los tipos de entrevista", cap: 4, pir: "media", mods: [
  { t: "Fases de la entrevista",
    tip: "La entrevista tiene cinco fases: preentrevista (análisis de la demanda, guion y encuadre), apertura (presentación, información y rapport), desarrollo (exploración hipotético-deductiva en embudo), cierre (resumen, dudas y siguientes pasos) y reflexión posterior (ordenar notas, separar lo observado de lo inferido y revisar hipótesis). Suele repartirse en varias sesiones y el proceso no es lineal.",
    v: [
      "Preentrevista=Análisis de la demanda y preparación del guion y del encuadre",
      "Encuadre=Espacio tranquilo, sin interrupciones y con tiempo suficiente",
      "Rapport=Clima de confianza y colaboración que facilita hablar con franqueza",
      "Apertura=Fase en que el entrevistador se presenta, informa y crea el clima",
      "Desarrollo=Fase central de exploración guiada por hipótesis",
      "Cierre=Resumir, resolver dudas y explicar los siguientes pasos",
      "Reflexión posterior=Ordenar notas, separar lo observado de lo inferido y revisar hipótesis",
      "Razonamiento hipotético-deductivo=Formular hipótesis provisionales y elegir preguntas que las contrasten"
    ],
    g: [
      "Analizar quién pide la evaluación y para qué corresponde a la ___.|preentrevista|apertura|reflexión posterior",
      "El objetivo principal de la apertura es crear ___.|rapport|hipótesis|encuadre",
      "En el cierre conviene no abrir temas nuevos con carga ___.|emocional|cognitiva|diagnóstica",
      "Quedarse con la primera hipótesis es el error típico de la fase de ___.|desarrollo|apertura|cierre",
      "En la reflexión posterior, el entrevistador separa lo observado de lo ___.|inferido|olvidado|deseado"
    ],
    tf: [
      "Pasar directamente a las preguntas cerradas es el error típico de la apertura.|V",
      "Mezclar lo observado con lo interpretado es el error típico del cierre.|F|Es el error típico de la reflexión posterior, cuando se ordenan los datos y se revisan las hipótesis.",
      "El proceso de entrevista es lineal: cada fase se completa antes de pasar a la siguiente.|F|No es lineal: una respuesta inesperada puede obligar a recordar la confidencialidad o a replantear hipótesis.",
      "Lo habitual es que la entrevista de evaluación no se complete en una sola sesión.|V"
    ],
    q: [
      "Tras la sesión, una psicóloga ordena sus notas y se pregunta si guio demasiado al paciente. ¿En qué fase está?|Reflexión posterior|Cierre de la sesión|Desarrollo final|En la reflexión posterior también se examina la propia actuación: si se guio demasiado o quedaron áreas sin explorar.",
      "Un entrevistador avisa de que queda poco tiempo, resume lo principal y explica que habrá cuestionarios para casa. ¿Qué fase es?|Cierre|Desarrollo|Apertura|El cierre incluye avisar, resumir, resolver dudas y explicar los siguientes pasos.",
      "En la apertura, ¿qué se pide a la persona?|Que cuente el motivo a su manera|Que conteste preguntas cerradas|Que precise frecuencia y duración|Se la invita a exponer el motivo de consulta con sus palabras, sin interrumpirla, para crear rapport.",
      "¿Qué riesgo tiene empezar el desarrollo por preguntas cerradas?|Imponer el mapa del entrevistador|Obtener datos demasiado precisos|Alargar en exceso la entrevista|La persona se limita a contestar lo que se le pregunta y no aparecen temas imprevistos."
    ],
    inc: [
      "Sobre las fases de la entrevista|El rapport se crea sobre todo en la reflexión posterior|El desarrollo sigue un razonamiento hipotético-deductivo|La preentrevista incluye cuidar el encuadre|El rapport se crea en la apertura. La reflexión posterior tiene lugar después de la sesión."
    ],
    seq: [
      "Fases de la entrevista|Preentrevista>Apertura>Desarrollo>Cierre>Reflexión posterior"
    ],
    cls: [] },
  { t: "Entrevistas estandarizadas y diagnóstico",
    tip: "Dos clínicos discrepan porque preguntan cosas distintas o porque deciden con criterios distintos, y las entrevistas estandarizadas reducen ambas fuentes. La SCID-5 y la ADIS-5 son semiestructuradas y las aplican clínicos, mientras que la CIDI y la MINI son estructuradas. Aportan exhaustividad, comparabilidad y formación, pero no explican el caso. Rettew et al. (2009) hallaron una concordancia media baja con el diagnóstico rutinario (κ 0,27), lo que no prueba que este sea peor.",
    v: [
      "SCID-5=Entrevista semiestructurada según el DSM-5 aplicada por clínicos (First et al.)",
      "ADIS-5=Entrevista semiestructurada centrada en la ansiedad y trastornos relacionados",
      "CIDI=Entrevista estructurada que aplican entrevistadores legos entrenados",
      "MINI=Entrevista estructurada breve, útil para cribados y como primer paso",
      "Exhaustividad=Obligación de explorar todas las áreas previstas",
      "Comparabilidad=Posibilidad de comparar pacientes, centros y estudios",
      "Rettew et al. (2009)=Metaanálisis de 38 estudios sobre diagnóstico rutinario frente a estandarizado",
      "Brown y Barlow (2014)=Autores de la entrevista específica para los trastornos de ansiedad"
    ],
    g: [
      "En Rettew et al. (2009), la concordancia más baja fue en el trastorno de ansiedad generalizada, con un κ de ___.|0,19|0,27|0,86",
      "La SCID-5 sigue los criterios del ___.|DSM-5|CIE-11|DSM-IV",
      "En las entrevistas ___, la decisión se obtiene por reglas y pueden aplicarlas legos entrenados.|estructuradas|semiestructuradas|libres",
      "La concordancia más alta en Rettew et al. se dio en la ___.|anorexia|depresión|esquizofrenia",
      "El metaanálisis de Rettew et al. reunió a ___ personas.|15.967|3.455|2.500"
    ],
    tf: [
      "La SCID-5 es una entrevista estructurada pensada para que la apliquen entrevistadores legos.|F|La SCID-5 es semiestructurada y la aplican clínicos. Lo de legos entrenados corresponde a la CIDI.",
      "Una entrevista estandarizada dice si se cumplen unos criterios, pero no explica qué mantiene el problema.|V",
      "Rettew et al. (2009) demostraron que el diagnóstico clínico rutinario es peor que el estandarizado.|F|Los autores advierten que solo indica que ambas vías no llegan al mismo resultado, no cuál es peor.",
      "En la SCID-5, el clínico puede añadir preguntas para aclarar y decide con su juicio si se cumple un criterio.|V"
    ],
    q: [
      "Dos psicólogas atienden al mismo paciente con preocupación y tensión. Una explora la duración y el control de la preocupación, y la otra, los sucesos recientes. Llegan a diagnósticos distintos. ¿Qué lo habría evitado mejor?|Una entrevista semiestructurada|Una entrevista libre y más larga|Más tiempo dedicado al rapport|Con la misma entrevista semiestructurada, ambas habrían explorado los mismos criterios.",
      "Un estudio epidemiológico con miles de personas contará con entrevistadores sin formación clínica. ¿Qué entrevista es adecuada?|CIDI|SCID-5|ADIS-5|La CIDI es estructurada y la pueden aplicar entrevistadores legos entrenados en estudios epidemiológicos amplios.",
      "¿Qué dos fuentes de desacuerdo entre clínicos reducen las entrevistas estandarizadas?|Preguntar y decidir de forma distinta|Edad del paciente y tipo de centro|Rapport y duración de la sesión|Fijan qué hay que preguntar y cómo se codifica cada respuesta respecto a los criterios diagnósticos.",
      "Un servicio de ansiedad busca una entrevista semiestructurada específica de sus trastornos. ¿Cuál elegiría?|ADIS-5|CIDI|MINI|La ADIS-5 (Brown y Barlow, 2014) es semiestructurada y se centra en los trastornos de ansiedad y relacionados."
    ],
    inc: [
      "Sobre las entrevistas estandarizadas|Sustituyen a la evaluación completa del caso|Obligan a explorar todas las áreas previstas|Su calidad depende del entrenamiento de quien las usa|No sustituyen a la evaluación completa: dicen si se cumplen criterios, no por qué aparece el problema."
    ],
    seq: [],
    cls: [
      "Formato de la entrevista diagnóstica|Semiestructurada, aplicada por clínicos: SCID-5; ADIS-5|Estructurada: CIDI; MINI"
    ] },
  { t: "Entrevista clínica, conductual y motivacional",
    tip: "La entrevista clínica incluye el examen del estado mental, de tradición médica, que revisa aspecto, lenguaje, afecto, pensamiento, percepción, cognición y juicio. La conductual no busca una etiqueta, sino las conductas problema y las variables que las controlan, organizadas con E-O-R-K-C (Kanfer y Saslow, 1965). La motivacional de Miller y Rollnick (1991) ayuda a resolver la ambivalencia ante el cambio con el estilo OARS y se considera terapéutica.",
    v: [
      "Examen del estado mental=Exploración ordenada de cómo se presenta la persona en la entrevista",
      "Insight=Conciencia del problema",
      "Afecto y humor=Estado emocional observado y el que la persona describe",
      "Fórmula E-O-R-K-C=Estímulos, organismo, respuesta, contingencia y consecuencias",
      "Ambivalencia=No tener claro que se quiera cambiar una conducta",
      "OARS=Abiertas, afirmaciones, reflejos y resúmenes",
      "Afirmaciones=Expresiones que reconocen esfuerzos y capacidades",
      "Miller y Rollnick (1991)=Autores de la entrevista motivacional"
    ],
    g: [
      "El examen del estado mental procede de la tradición ___.|médica|conductual|humanista",
      "En las siglas OARS, la A corresponde a ___.|afirmaciones|aclaraciones|acuerdos",
      "La entrevista motivacional se usa mucho con conductas ___ y de salud.|adictivas|psicóticas|disociativas",
      "La tercera edición de la obra de Miller y Rollnick sobre la entrevista motivacional es de ___.|2013|2009|2002",
      "En la entrevista conductual, las preguntas más útiles suelen ser las de qué, cuándo, dónde y ___.|cómo|por qué|quién"
    ],
    tf: [
      "La entrevista conductual busca sobre todo asignar una etiqueta diagnóstica.|F|Busca identificar las conductas problema y las variables que las controlan, como alternativa a la clasificación.",
      "La entrevista motivacional suele clasificarse como entrevista terapéutica o de intervención.|V",
      "El examen del estado mental se basa sobre todo en cuestionarios autoaplicados.|F|Se basa sobre todo en la observación y en preguntas específicas durante la entrevista.",
      "Las entrevistas clínica, conductual y motivacional pueden combinarse en una misma consulta.|V"
    ],
    q: [
      "Un paciente dice: «Me pongo fatal en las reuniones». ¿Qué pregunta es más propia de la entrevista conductual?|«¿Qué estaba haciendo justo antes?»|«¿Cómo era su relación con su padre?»|«¿Qué diagnóstico cree que tiene?»|Busca antecedentes concretos para convertir la queja vaga en una cadena de hechos observables.",
      "En una entrevista motivacional, el psicólogo dice: «Venir hoy ya ha supuesto un paso». ¿Qué elemento de OARS es?|Afirmación|Reflejo|Resumen|Reconoce un esfuerzo o una capacidad de la persona: es una afirmación.",
      "«Por un lado le relaja, y por otro le está costando discusiones en casa.» ¿Qué elemento de OARS es?|Reflejo|Resumen|Afirmación|Devuelve los dos lados de la ambivalencia: es un reflejo.",
      "Explorar la orientación, la atención y la memoria del paciente corresponde al área de…|cognición|percepción|juicio e insight|En el examen del estado mental, la cognición incluye orientación, atención y memoria."
    ],
    inc: [
      "Sobre los tipos de entrevista clínica|La motivacional requiere un deseo claro de cambio|La conductual organiza la información con E-O-R-K-C|El estado mental incluye percepción y cognición|Se usa cuando la persona no tiene claro que quiera cambiar, para ayudarla a resolver su ambivalencia."
    ],
    seq: [],
    cls: [
      "Área del examen del estado mental|Cognición: orientación; atención; memoria|Pensamiento: curso; contenido; ideas de muerte|Aspecto y conducta: aseo; actividad motora; colaboración"
    ] },
  { t: "Entrevista forense, de selección y con niños",
    tip: "La entrevista cognitiva de Fisher y Geiselman combina cuatro técnicas: reinstauración del contexto, informar de todo, cambio de orden y cambio de perspectiva. Aumenta mucho los detalles correctos y poco los incorrectos, pero no protege frente a la sugestión posterior. La entrevista de selección estructurada predice mejor el desempeño, y con niños hay que adaptar el lenguaje, evitar la sugestión y contar con varios informantes.",
    v: [
      "Entrevista cognitiva=Entrevista forense con cuatro técnicas basadas en la memoria",
      "Reinstauración del contexto=Reconstruir mentalmente el lugar, el momento y lo que se sentía",
      "Informar de todo=Contar cualquier detalle aunque parezca irrelevante o incompleto",
      "Cambio de orden=Relatar los hechos en otra secuencia, por ejemplo desde el final",
      "Cambio de perspectiva=Describir lo ocurrido como lo habría visto otra persona presente",
      "Escalas con anclajes=Describen cómo es una respuesta pobre, aceptable o excelente",
      "Memoria reconstructiva=Razón por la que las preguntas sugestivas pueden añadir detalles falsos",
      "Köhnken et al. (1999)=Metaanálisis con unos 2.500 entrevistados sobre la entrevista cognitiva"
    ],
    g: [
      "Según Köhnken et al. (1999), la entrevista cognitiva aumentó los detalles correctos con una d de ___.|0,87|0,28|1,20",
      "Con la entrevista cognitiva, la exactitud global fue del 85 % frente al ___ de la estándar.|82 %|62 %|75 %",
      "En Memon, Meissner y Fraser (2010), las confabulaciones aumentaron con una d de solo ___.|0,08|0,24|0,91",
      "Sackett et al. (2022) revisaron a la baja las cifras de ___ y Hunter (1998).|Schmidt|Salgado|Lievens",
      "La revisión de Sackett et al. (2022) fue criticada por Oh, Le y ___ (2023).|Roth|Hunter|Fiske"
    ],
    tf: [
      "La entrevista cognitiva protege al testigo frente a la información engañosa que reciba después.|F|Es su límite real: no protege frente a la sugestión posterior.",
      "El efecto de la entrevista cognitiva es algo menor en niños.|V",
      "Según Schmidt y Hunter (1998), la entrevista estructurada tenía una validez de 0,42.|F|Schmidt y Hunter daban 0,51 y 0,38. El 0,42 es la cifra revisada de Sackett et al. (2022).",
      "Con niños conviene usar frases cortas, palabras conocidas y una sola pregunta cada vez.|V"
    ],
    q: [
      "Una policía pide a una testigo que cuente el robo empezando por el final. ¿Qué técnica de la entrevista cognitiva usa?|Cambio de orden|Cambio de perspectiva|Reinstauración del contexto|Relatar los hechos en otro orden, por ejemplo desde el final, es la técnica del cambio de orden.",
      "Una empresa quiere que su entrevista de selección prediga mejor el desempeño. ¿Qué cambio es más eficaz?|Usar escalas con anclajes|Dar libertad al entrevistador|Confiar en la primera impresión|La versión que mejor funciona usa las mismas preguntas, escalas con anclajes y varios evaluadores independientes.",
      "Al entrevistar a una niña de cinco años, el psicólogo repite una pregunta que ella ya ha contestado. ¿Qué riesgo corre?|Que crea que su respuesta era errónea|Que recuerde mejor lo que ocurrió|Que gane confianza en el entrevistador|Los niños pequeños tienden a contestar lo que creen que el adulto espera, y repetir la pregunta sugiere que la primera respuesta falló.",
      "Según la evidencia, ¿qué consigue la entrevista cognitiva frente a la estándar?|Más detalles correctos y pocos más errores|Más errores que detalles correctos nuevos|Igual número de errores y de aciertos|d de 0,87 en correctos y de 0,28 en incorrectos, con una exactitud global similar (85 % frente a 82 %)."
    ],
    inc: [
      "Sobre la entrevista forense, de selección y con niños|La entrevista cognitiva llena el testimonio de errores|En la selección conviene que puntúen varios evaluadores|Con niños son útiles apoyos como el dibujo o el juego|Aumenta mucho los detalles correctos y poco los incorrectos, y la exactitud global se mantiene."
    ],
    seq: [],
    cls: [
      "Rasgo de la entrevista|Entrevista cognitiva: reinstauración del contexto; cambio de perspectiva; informar de todo|Selección estructurada: escalas con anclajes; varios evaluadores; mismas preguntas para todos|Entrevista con niños: apoyo del dibujo o el juego; varios informantes; lenguaje acorde con la edad"
    ] }
] }
);

// SAIMAP Psicología · Evaluación I · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Qué registrar y cómo hacerlo", cap: 5, pir: "media", mods: [
  { t: "Concepto de observación y unidades de análisis",
    tip: "La observación como técnica es un registro deliberado y sistemático, con objetivo previo, reglas definidas y observador entrenado. Puede hacerla un profesional no participante, alguien que participa en la situación o la propia persona (autoobservación). Las unidades de análisis se ordenan por su nivel de inferencia, desde las conductas definidas operativamente hasta los atributos, que exigen la máxima. Cuanto más molar e inferencial es la unidad, más difícil es el acuerdo entre observadores.",
    v: [
      "Observación sistemática=Registro deliberado con objetivo previo, protocolo definido y observador entrenado",
      "Observación no participante=La realiza un profesional ajeno a la situación observada",
      "Observación participante=La hace alguien que forma parte de la situación, como una profesora en su aula",
      "Continuo del comportamiento=Descripción continua en lenguaje cotidiano, sin seleccionar antes las conductas",
      "Definición operativa=Descripción en términos observables, como «levantarse sin permiso»",
      "Interacciones=Secuencias entre conductas de varias personas, en la línea de Patterson",
      "Producto de conducta=Resultado permanente que deja una acción, como los deberes terminados",
      "Atributos o rasgos=Características internas inferidas de lo observado, con máxima inferencia"
    ],
    g: [
      "Lo que separa la observación como técnica de la mirada cotidiana es la ___.|sistematización|participación|naturalidad",
      "Las interacciones como unidad de análisis se asocian a los trabajos de ___ sobre la familia.|Patterson|Anguera|Bellack",
      "Los productos de conducta recogidos de lo que la persona ya hizo son medidas no ___.|reactivas|permanentes|fiables",
      "El continuo del comportamiento es propio de la fase ___ y de la perspectiva naturalista.|exploratoria|de valoración|de seguimiento",
      "Cuanto más ___ e inferencial es la unidad, más difícil es que dos observadores coincidan.|molar|molecular|operativa"
    ],
    tf: [
      "Una profesora que registra la conducta de sus alumnos en su propia aula hace observación participante.|V",
      "Los productos de conducta son la unidad de máxima inferencia porque hay que deducir quién los produjo.|F|La máxima inferencia corresponde a los atributos. Los productos son permanentes, aunque su autoría a veces es dudosa.",
      "Al observar interacciones hay que fijar antes de empezar qué conductas de cada persona se registrarán.|V",
      "El continuo del comportamiento exige definir operativamente las conductas antes de observar.|F|Se describe todo en lenguaje cotidiano sin decidir antes qué conductas interesan. La definición operativa es propia de las conductas."
    ],
    q: [
      "En el informe de un adolescente se lee: «entrega tres de diez ejercicios». ¿Qué unidad de análisis se ha usado?|Un producto de conducta|Un atributo del alumno|Una interacción en clase|Es el resultado que deja la conducta. «Está desmotivado» sería un atributo, y «le llaman la atención y guarda el móvil», una interacción.",
      "¿Qué unidad de análisis queda más expuesta a los sesgos del observador?|Los atributos o rasgos|Las conductas operativas|Los productos de conducta|Es la unidad de máxima inferencia: se deducen características internas a partir de lo observado.",
      "¿Qué inconveniente tienen los productos de conducta como unidad de análisis?|No informan del proceso|Son siempre reactivos|Exigen máxima inferencia|Son permanentes y, si ya existían, no reactivos, pero no informan del proceso y a veces no se sabe quién es el autor.",
      "Una evaluadora anota todo lo que hace un niño en el recreo, sin haber decidido qué conductas le interesan. ¿Qué unidad usa?|El continuo del comportamiento|Las conductas operativas del niño|Las interacciones con sus iguales|Describir lo que ocurre de forma continua y en lenguaje cotidiano es propio de la fase exploratoria y del enfoque naturalista."
    ],
    inc: [
      "Sobre la observación como técnica|La observación es objetiva por definición|Requiere un observador entrenado|Exige un objetivo previo y reglas definidas|El observador elige qué mirar, cómo nombrarlo y cuándo anotarlo. La objetividad se construye con definiciones, entrenamiento y control del acuerdo."
    ],
    seq: [],
    cls: [
      "Unidad de análisis|Conducta: mira el móvil bajo la mesa; levantarse sin permiso|Interacción: le llaman la atención y guarda el móvil; secuencia entre padre e hijo|Producto: entrega tres de diez ejercicios; colillas del cenicero"
    ] },
  { t: "Unidades de medida",
    tip: "La unidad de medida es la propiedad de la conducta que se cuantifica: ocurrencia, frecuencia, tasa, duración, latencia, tiempo entre respuestas o intensidad. Se elige según la pregunta de evaluación, la forma de la conducta y el coste. Si las sesiones no duran lo mismo, la frecuencia bruta engaña y hay que usar la tasa. Registrar más de una propiedad protege de conclusiones falsas sobre un tratamiento.",
    v: [
      "Ocurrencia=Si la conducta aparece o no en el periodo de observación",
      "Frecuencia=Número de veces que se produce la conducta",
      "Tasa=Número de episodios por unidad de tiempo",
      "Duración=Tiempo que ocupa cada episodio o el total de la sesión",
      "Latencia=Tiempo desde la aparición del estímulo hasta que empieza la respuesta",
      "Tiempo entre respuestas=Intervalo que pasa entre un episodio y el siguiente",
      "Intensidad o magnitud=Fuerza con que ocurre la conducta, a menudo en escala ordinal",
      "Calidad o adecuación=Valoración de la ejecución, por ejemplo aciertos y errores en una tarea"
    ],
    g: [
      "Si las sesiones no duran lo mismo, la frecuencia bruta engaña y conviene usar la ___.|tasa|latencia|ocurrencia",
      "Los segundos entre «a la ducha» y que el niño se levanta son una medida de ___.|latencia|duración|frecuencia",
      "En un programa para dejar de fumar, alargar el ___ es un objetivo intermedio.|tiempo entre cigarrillos|número de cigarrillos|tiempo de cada cigarrillo",
      "Las conductas discretas y breves se cuentan, y las continuas se miden por su ___.|duración|frecuencia|ocurrencia",
      "La intensidad medida con escalas ordinales introduce juicio del observador, salvo que se use un ___.|sonómetro|cuestionario|diario"
    ],
    tf: [
      "Una niña con dos rabietas diarias de cuarenta minutos tiene un problema menor que otra con diez de un minuto, porque su frecuencia es menor.|F|Aquí importa el tiempo que ocupa la conducta: la duración puede revelar un problema mayor pese a la menor frecuencia.",
      "La frecuencia es útil cuando la conducta tiene un principio y un final claros y episodios de duración parecida.|V",
      "Cuando no se puede registrar todo, el muestreo por intervalos estima estas medidas sin error.|F|Las estima a cambio de cierto error, que depende de la estrategia de muestreo y de la longitud del intervalo.",
      "La duración puede expresarse por episodio o como porcentaje del tiempo de observación.|V"
    ],
    q: [
      "Un programa reduce las discusiones de una pareja de cinco a dos por semana, pero cada una pasa de diez minutos a una hora. ¿Qué se concluye?|Frecuencia y duración se contradicen|El tratamiento ha funcionado sin duda|Solo importa la reducción de frecuencia|La frecuencia sugiere mejoría y la duración, lo contrario. Registrar más de una propiedad protege de este error.",
      "Preocupa que un niño tarde mucho en obedecer las instrucciones de sus padres. ¿Qué medida conviene?|La latencia|La frecuencia|La duración|La pregunta de evaluación guía la elección: interesa cuánto tarda en empezar la respuesta, no cuántas órdenes cumple.",
      "Diez interrupciones en una sesión de una hora y diez en una de veinte minutos…|no equivalen, por lo que se usa la tasa|equivalen, porque la frecuencia es la misma|no equivalen, por lo que se usa la latencia|Con sesiones de distinta duración la frecuencia bruta engaña. La tasa expresa los episodios por unidad de tiempo.",
      "Para evaluar cuánto tiempo juega un niño con otros en el recreo, ¿qué medida es la más adecuada?|La duración|La tasa|La ocurrencia|Interesa cuánto tiempo ocupa la conducta, no cuántas veces aparece. Puede expresarse como porcentaje del tiempo."
    ],
    inc: [
      "Sobre la elección de la unidad de medida|Es una decisión neutra que no afecta a las conclusiones|Depende de la pregunta de evaluación|Depende de la forma de la conducta y del coste|No es neutra: una misma conducta puede parecer que mejora o que empeora según la propiedad que se mida."
    ],
    seq: [],
    cls: [
      "Unidad de medida|Frecuencia: preguntas en clase; golpes; cigarrillos|Duración: llorar; jugar con otros niños; estar concentrado|Latencia: obedecer una instrucción; tiempo en dormirse"
    ] },
  { t: "Cómo registrar lo observado",
    tip: "La técnica de registro es el formato en que se anota lo observado, desde la descripción libre hasta la codificación cerrada. Al principio conviene un registro abierto para descubrir y después uno estructurado para contar. Las escalas de apreciación son juicios retrospectivos expuestos al halo, la lenidad o severidad, la tendencia central y el error lógico. El registro de productos que ya existían es la técnica menos reactiva.",
    v: [
      "Registro narrativo=Descripción libre de lo que ocurre, sin esquema previo, útil para crear categorías",
      "Registro anecdótico=Variante del diario que recoge episodios llamativos",
      "Escala de apreciación=Valoración al final de un periodo del grado en que se da una conducta",
      "Catálogo de conducta=Lista de conductas definidas de antemano en la que se marca cuáles aparecen",
      "Lenidad o severidad=Tendencia a puntuar a todos alto o a todos bajo",
      "Error lógico=Puntuar parecido rasgos que el observador cree relacionados",
      "Matriz de interacción=Cruza conductas de dos personas para ver qué sigue a qué",
      "Mapa de conducta=Sitúa lo observado en el espacio y el tiempo, como dónde juega cada niño"
    ],
    g: [
      "Las escalas de apreciación ofrecen un juicio ___, no un registro en el momento.|retrospectivo|prospectivo|continuo",
      "Evitar los extremos de la escala al valorar a todos los alumnos se llama tendencia ___.|central|extrema|severa",
      "Pedir a un niño un dibujo para analizar el producto convierte la medida en ___.|reactiva|ecológica|molecular",
      "Las ___ cruzan las conductas de profesora y alumno para ver qué sigue a qué.|matrices de interacción|escalas de apreciación|listas de productos",
      "Muchas escalas de calificación por padres y profesores son escalas de ___.|apreciación|categorías|productos"
    ],
    tf: [
      "El registro narrativo es fácil de enseñar a un familiar, pero es selectivo y poco fiable.|V",
      "Las escalas de apreciación registran en el momento, por lo que evitan los errores de memoria del observador.|F|Son juicios retrospectivos al final de un periodo y arrastran halo, lenidad, tendencia central y error lógico.",
      "Los catálogos de conducta pueden incluir, o no, los antecedentes y consecuentes de cada conducta.|V",
      "El registro de productos es no reactivo incluso cuando se pide a la persona que haga la tarea para evaluarla.|F|Si la persona sabe que se evalúa su producto, la medida es reactiva. Solo es no reactivo con productos que ya existían."
    ],
    q: [
      "Para estudiar las peleas entre dos hermanos, la psicóloga pide primero a la madre un diario de una semana y luego una lista de tres conductas. ¿Qué función cumplió el diario?|Descubrir qué conductas contar|Contar con precisión cada pelea|Calcular el acuerdo con la madre|El registro narrativo sirve para explorar y generar categorías. La lista posterior, ya estructurada, sirve para contar.",
      "Una profesora puntúa muy alto en todas las áreas a casi todos sus alumnos. ¿Qué error muestra?|Lenidad|Tendencia central|Error lógico|Puntuar a todos alto es lenidad. La tendencia central evita los extremos, y el error lógico iguala rasgos que se creen relacionados.",
      "Un evaluador da puntuaciones parecidas en «organización» y «puntualidad» porque cree que van juntas. ¿Qué error comete?|El error lógico|El efecto halo|La severidad|Iguala rasgos que cree relacionados. En el halo, una impresión general tiñe la valoración de los aspectos concretos.",
      "¿Qué técnica conviene para situar dónde juega cada niño del patio en cada momento?|Un mapa de conducta|Una matriz de interacción|Un registro anecdótico|Los mapas de conducta sitúan lo observado en el espacio y el tiempo. La matriz cruza conductas de dos personas."
    ],
    inc: [
      "Sobre las técnicas de registro|Conviene empezar siempre con un código cerrado|El registro abierto ayuda a descubrir qué ocurre|El registro estructurado permite contar y comparar|Al principio conviene un registro abierto. Un código cerrado demasiado pronto puede dejar fuera lo relevante."
    ],
    seq: [],
    cls: [
      "Técnica de registro|Registro narrativo: diario; registro anecdótico; generar categorías|Escala de apreciación: juicio retrospectivo; efecto halo; tendencia central|Catálogo de conducta: listas de conductas; matrices de interacción; mapas de conducta"
    ] },
  { t: "Sistemas de categorías y registro automático",
    tip: "Un sistema de categorías clasifica cada acontecimiento en un conjunto cerrado que debe ser exhaustivo y mutuamente excluyente (Anguera). Si el fenómeno tiene varias dimensiones se usan formatos de campo. Cuantas más categorías, menor acuerdo, y cada definición necesita ejemplos y contraejemplos. Los registros automáticos aumentan la objetividad del registro, pero no resuelven la validez de la inferencia.",
    v: [
      "Sistema de categorías=Conjunto cerrado para clasificar cada acontecimiento observado",
      "Exhaustividad=Cualquier conducta del ámbito estudiado puede asignarse a alguna categoría",
      "Mutua exclusividad=Cada conducta encaja en una sola categoría, sin solapamientos",
      "Formato de campo=Codifica cada acontecimiento en varias dimensiones a la vez",
      "Contraejemplo=Caso que se indica expresamente que no pertenece a la categoría",
      "Actigrafía=Registro del movimiento con un dispositivo en la muñeca para estimar sueño y actividad",
      "Dispositivos ponibles=Aparatos que se llevan puestos y recogen datos pasivos, como los desplazamientos",
      "Anguera=Autora que desarrolló en España la metodología observacional"
    ],
    g: [
      "Que cualquier conducta del ámbito pueda asignarse a alguna categoría es el requisito de ___.|exhaustividad|mutua exclusividad|homogeneidad",
      "Para codificar a la vez qué dice un niño, a quién y con qué tono se usan los ___.|formatos de campo|catálogos de conducta|mapas de conducta",
      "Los sistemas de categorías permiten un análisis ___: qué categoría tiende a seguir a cuál.|secuencial|factorial|normativo",
      "El vídeo con codificación posterior permite revisar las escenas y calcular el ___ con calma.|acuerdo|baremo|sesgo",
      "Los registros automáticos de datos de salud exigen consentimiento informado y cumplir el ___.|RGPD|DSM|BIDR"
    ],
    tf: [
      "Si el actígrafo marca inactividad, puede concluirse que la persona estaba dormida.|F|El dato no distingue si dormía, estaba tumbada despierta o se había quitado la pulsera: la inferencia sigue abierta.",
      "En la práctica clínica rara vez se construye un sistema de categorías para un solo caso.|V",
      "Un sistema con más categorías, al ser más detallado, logra más acuerdo entre observadores.|F|Ocurre lo contrario: cuantas más categorías, menor acuerdo entre observadores.",
      "Los sensores de frecuencia cardiaca o de conductancia de la piel son procedimientos automáticos de registro.|V"
    ],
    q: [
      "Un sistema define «agresión física» como contacto que puede causar daño, incluye empujar y pellizcar y excluye chocar sin querer en la fila. ¿Para qué sirve esta última frase?|Para que los observadores coincidan|Para hacer el sistema exhaustivo|Para crear un formato de campo|El contraejemplo delimita la categoría. Sin él, dos observadores registrarían cosas distintas.",
      "Un observador codifica un hecho en dos categorías del mismo sistema porque se solapan. ¿Qué requisito incumple el sistema?|La mutua exclusividad|La exhaustividad|La validez ecológica|Cada conducta debe encajar en una sola categoría. La exhaustividad exige que toda conducta tenga alguna.",
      "El móvil de un paciente apenas sale de casa durante dos semanas. ¿Qué puede afirmarse?|Que no indica por sí solo la causa|Que confirma un episodio depresivo|Que descarta una enfermedad física|Puede deberse a depresión, a una baja laboral o a una gripe. El registro es preciso, pero la inferencia psicológica sigue abierta.",
      "¿Para qué tipo de acontecimientos se recomienda un sistema de categorías?|Complejos pero bien especificados|Poco conocidos, en fase exploratoria|Interacciones entre dos personas|Para explorar sirve el registro narrativo y para interacciones, una matriz de interacción."
    ],
    inc: [
      "Sobre los procedimientos automáticos de registro|Garantizan la validez de la interpretación psicológica|Aumentan la objetividad del registro|Sus datos exigen consentimiento y cumplir el RGPD|El aparato no se cansa ni tiene expectativas, pero qué significa el dato sigue siendo una inferencia."
    ],
    seq: [],
    cls: [
      "Procedimiento automático de registro|Lo que mejora: objetividad del registro; ausencia de cansancio; ausencia de expectativas|Lo que no resuelve: validez de la inferencia; significado psicológico del dato"
    ] }
] },
{ n: 14, t: "Muestreo, garantías y planificación de la observación", cap: 5, pir: "alta", mods: [
  { t: "Muestreo de tiempo, situaciones y sujetos",
    tip: "Casi nunca puede observarse todo, así que se muestrean tiempos, situaciones y sujetos de forma representativa. El registro continuo es el criterio de comparación. El intervalo parcial sobreestima la duración, el intervalo total la infraestima y el muestreo momentáneo yerra en ambos sentidos. El error crece al alargar el intervalo (Powell et al., 1975), y el porcentaje de intervalos no equivale al porcentaje de tiempo real.",
    v: [
      "Registro continuo=Anotar cada episodio con su inicio y su final",
      "Intervalo parcial=Se marca si la conducta aparece en algún momento del intervalo",
      "Intervalo total=Se marca solo si la conducta ocupa entero el periodo",
      "Muestreo momentáneo=Se anota si la conducta ocurre en un instante prefijado",
      "Preobservación=Observación breve previa para decidir el muestreo de tiempo",
      "Muestreo de situaciones=Observar en varios contextos para saber si el problema es general o específico",
      "Muestreo de sujetos=Seleccionar y rotar a quién se observa en cada periodo dentro de un grupo",
      "Powell et al. (1975)=Compararon las estrategias de muestreo con el registro continuo"
    ],
    g: [
      "El intervalo parcial ___ la duración de la conducta.|sobreestima|infraestima|reproduce",
      "Si no se sabe lo bastante de la conducta para decidir el muestreo de tiempo, conviene una ___ breve.|preobservación|devolución|anamnesis",
      "El ___ es el criterio de comparación de los demás métodos de muestreo.|registro continuo|intervalo parcial|muestreo momentáneo",
      "Para no dejar escapar conductas breves, como un tic, sirve el muestreo de intervalo ___.|parcial|total|largo",
      "Si se evalúa una residencia, se selecciona a algunas personas y se ___ a quién se observa.|rota|repite|empareja"
    ],
    tf: [
      "El intervalo parcial es la estrategia de muestreo más precisa porque no deja escapar ninguna conducta.|F|No deja escapar conductas breves, pero sobreestima la duración. Creer que es el más preciso es una trampa típica.",
      "El muestreo momentáneo con intervalos cortos estima bien el tiempo que ocupa una conducta continua.|V",
      "Los umbrales de longitud de intervalo propuestos para el muestreo momentáneo, como 120 o 240 s, son orientativos.|V",
      "El porcentaje de intervalos marcados puede tratarse como el porcentaje de tiempo real de la conducta.|F|Ninguna estrategia por intervalos coincide con el tiempo real. El porcentaje de intervalos solo lo estima, con error."
    ],
    q: [
      "En una sesión de 60 s con seis intervalos, la conducta ocupa el 41,7 % del tiempo y el registro da un 66,7 %. ¿Qué estrategia se usó?|El intervalo parcial|El intervalo total|El muestreo momentáneo|Basta un instante de conducta para marcar el intervalo, así que sobreestima. El total dio un 16,7 % y el momentáneo, un 33,3 %.",
      "Un niño se porta bien en el colegio y mal en casa. ¿Qué muestreo responde si el problema es general o específico?|El muestreo de situaciones|El muestreo de sujetos rotados|El muestreo de tiempo fijo|Hay que observar en varias situaciones y comparar, a partir de una lista de las situaciones relevantes.",
      "Según Powell, Martindale y Kulp (1975), el error del muestreo por intervalos…|crece al alargar el intervalo|es nulo con conductas breves|desaparece con el intervalo total|Depende de la duración de los episodios y aumenta con la longitud del intervalo.",
      "Se quiere estimar el tiempo que un alumno pasa concentrado en la tarea sin registro continuo. ¿Qué estrategia es más adecuada?|Muestreo momentáneo con intervalos cortos|Intervalo parcial con intervalos largos|Intervalo total con intervalos largos|El momentáneo con intervalos cortos estima mejor el tiempo de una conducta continua. El parcial sobreestima y el total infraestima."
    ],
    inc: [
      "Sobre el muestreo de tiempo|El muestreo momentáneo siempre infraestima la duración|El registro continuo exige atención plena o vídeo|El intervalo total marca solo intervalos ocupados enteros|El muestreo momentáneo yerra en ambos sentidos. El que infraestima de forma sistemática es el intervalo total."
    ],
    seq: [],
    cls: [
      "Estrategia de muestreo|Intervalo parcial: cualquier instante del intervalo; sobreestima la duración|Intervalo total: todo el intervalo ocupado; infraestima la duración|Momentáneo: un instante prefijado; yerra en ambos sentidos"
    ] },
  { t: "Observación natural y análoga",
    tip: "La observación natural tiene alta validez ecológica y muestra los antecedentes y consecuentes reales, pero ofrece poco control. La análoga provoca la conducta en un escenario preparado, con role-playing, tests situacionales o el BAT, y gana control y validez interna a costa de la validez externa. En ningún punto del continuo desaparece la reactividad, y los datos análogos se contrastan siempre con otras fuentes.",
    v: [
      "Situación natural=Medio habitual de la persona, como la casa, el aula o el trabajo",
      "Situación análoga=Escenario preparado por el evaluador para provocar la conducta",
      "Validez ecológica=Grado en que la conducta observada es la que ocurre en la vida diaria",
      "Role-playing=Representar una escena con el evaluador o un colaborador como interlocutor",
      "Test situacional=Estímulos o tareas que provocan la conducta, como discutir diez minutos en pareja",
      "BAT=Acercarse paso a paso al estímulo temido mientras se registra hasta dónde se llega",
      "Pruebas de rol de Bellack=Breves situaciones sociales, como rechazar una petición, para evaluar habilidades",
      "Observador del entorno=Padre o profesora que observa muchas horas con poca reactividad"
    ],
    g: [
      "La observación análoga gana validez ___, pero pierde validez externa.|interna|ecológica|de contenido",
      "El ___ permite observar a la vez la conducta motora, la activación fisiológica y lo que la persona dice.|BAT|role-playing|registro de productos",
      "Pedir a una pareja que discuta diez minutos un tema en el que no se pone de acuerdo es un ___.|test situacional|test de evitación|mapa de conducta",
      "Delegar el registro natural en padres o docentes ahorra visitas a costa de ___.|precisión|validez ecológica|reactividad",
      "El principal precio de la observación en situación natural es la falta de ___.|control|realismo|validez ecológica"
    ],
    tf: [
      "En la observación análoga desaparece la reactividad porque la situación está controlada.|F|En ningún punto del continuo entre lo natural y lo análogo desaparece la reactividad.",
      "La observación natural permite ver los antecedentes y consecuentes reales, necesarios para el análisis funcional.|V",
      "Rechazar bien una petición en un role-playing garantiza que la persona lo haga con su jefe.|F|La situación análoga pierde validez externa: sus datos se contrastan con entrevista, autoinforme u observación natural.",
      "Para acortar la distancia con la vida real, las escenas análogas se construyen con situaciones que la persona vive a menudo.|V"
    ],
    q: [
      "Una mujer con miedo a las arañas debe acercarse paso a paso a un terrario mientras se registra hasta dónde llega. ¿Qué procedimiento es?|Un test de evitación conductual|Una prueba de representación de papeles|Una observación en situación natural|El BAT se hace en situación análoga y permite observar a la vez los tres sistemas de respuesta.",
      "¿Qué ventaja define a la observación en situación análoga?|El control de la situación|La alta validez ecológica|La ausencia de reactividad|Todos afrontan la misma situación, se puede repetir y se provoca justo la conducta que interesa.",
      "¿Qué riesgo principal tiene un profesional que observa como participante?|Reactividad e implicación|Falta de entrenamiento|Menor tiempo de observación|Accede desde dentro, pero su implicación puede sesgar el registro y la reactividad es mayor.",
      "Una psicóloga pasa una tarde entera en casa de una familia y no aparece la rabieta que quería observar. ¿Qué limitación ilustra?|La falta de control de la observación natural|La baja validez ecológica de la observación|La reactividad del control de fiabilidad|En el medio natural no se puede provocar la conducta. La situación análoga la provoca a cambio de validez externa."
    ],
    inc: [
      "Sobre la observación análoga|Se usa sobre todo cuando la conducta es frecuente y pública|Provoca la conducta en un escenario preparado|Sus datos se contrastan con otras fuentes|Se recurre a ella cuando la conducta es rara, privada o difícil de alcanzar en su medio."
    ],
    seq: [],
    cls: [
      "Situación de observación|Natural: validez ecológica; antecedentes y consecuentes reales; poco control|Análoga: role-playing; test situacional; BAT; mayor validez interna"
    ] },
  { t: "Fuentes de error del observador",
    tip: "Los errores proceden del observado, del observador y del sistema de registro. En la reactividad cambia la persona observada, que se habitúa con el tiempo, y en la deriva cambia el observador, que modifica poco a poco las definiciones. Las expectativas sesgan más las calificaciones globales que los registros por categorías (Kent et al., 1974). El acuerdo baja cuando el control de fiabilidad es encubierto (Reid, 1970, Romanczyk et al., 1973).",
    v: [
      "Reactividad=Cambio de conducta del observado porque sabe que le observan",
      "Habituación=Disminución de la reactividad al pasar la novedad de ser observado",
      "Expectativas del observador=Ver, sin querer, lo que se espera de la persona o del tratamiento",
      "Deriva del observador=Cambio gradual e inadvertido en cómo se aplican las definiciones",
      "Control encubierto=Comprobación del acuerdo sin que los observadores lo sepan",
      "Reid (1970)=Halló que la exactitud cae cuando creen que nadie comprueba su trabajo",
      "Kent et al. (1974)=Las expectativas sesgan más las calificaciones globales que las categorías",
      "O'Leary y Kent (1973)=Describieron parejas de observadores que coinciden sin ser exactas"
    ],
    g: [
      "En la ___ cambia el observado, y en la deriva, el observador.|reactividad|habituación|expectativa",
      "Conviene descartar las primeras sesiones porque la reactividad disminuye con la ___.|habituación|deriva|práctica",
      "Con control encubierto, los observadores registraban ___ conducta disruptiva.|menos|más|la misma",
      "Para evitar sesgos, conviene que los observadores no conozcan las ___ ni la fase del tratamiento.|hipótesis|categorías|definiciones",
      "La deriva es más peligrosa cuando dos observadores se forman y trabajan ___.|juntos|a distancia|por turnos"
    ],
    tf: [
      "Un acuerdo alto entre dos observadores que trabajan juntos descarta la deriva.|F|Pueden redefinir el código entre ellos y coincidir mucho sin ser exactos respecto a la definición original.",
      "Las expectativas del observador sesgan más los registros por categorías que las calificaciones globales.|F|Es al revés: Kent et al. (1974) hallaron más sesgo en las calificaciones globales.",
      "El acuerdo medido en las sesiones de control puede ser más alto que el que hay en el resto del registro.|V",
      "Los cambios bruscos de frecuencia sin cambios en la situación son una señal de alarma de error del observador.|V"
    ],
    q: [
      "Dos observadores formados juntos llevan meses codificando y coinciden en un 95 %, pero al compararlos con vídeos de referencia se alejan de la definición. ¿Qué ocurre?|Deriva del observador|Reactividad del observado|Efecto de las expectativas|Han redefinido el código entre ellos. Se corrige reentrenando con material de referencia, rotando parejas y con un criterio externo.",
      "Un niño se comporta de forma ejemplar las primeras sesiones con un observador en el aula y luego vuelve a su conducta habitual. ¿Qué explica el cambio inicial?|La reactividad del observado|La deriva del observador|La reactividad del control|La persona cambia porque sabe que la observan, sobre todo al principio, y después se habitúa.",
      "Según Romanczyk et al. (1973), ¿con qué tipo de control de fiabilidad era más bajo el acuerdo?|Encubierto|Abierto con evaluador identificado|Abierto con evaluador no identificado|El acuerdo era alto con control abierto e identificado, menor sin identificar y el más bajo con control encubierto.",
      "Una observadora sabe que el niño acaba de empezar un tratamiento y registra una mejoría que otros no ven. ¿Qué medida lo habría prevenido?|Ocultarle la fase del tratamiento|Aumentar el número de categorías|Prolongar la sesión de observación|Es un sesgo de expectativas. Conviene que los observadores no conozcan las hipótesis ni la fase del tratamiento."
    ],
    inc: [
      "Sobre la reactividad del control de fiabilidad|Los controles deben anunciarse siempre a los observadores|Reid (1970) vio que la exactitud cae sin comprobación|Conviene que los controles sean periódicos y encubiertos|El acuerdo sube cuando se saben controlados, así que los controles deben ser periódicos y, si es posible, encubiertos o aleatorios."
    ],
    seq: [],
    cls: [
      "Fuente de error|Reactividad: cambia el observado; mayor al principio; se reduce con la habituación|Deriva: cambia el observador; parejas que trabajan juntas; reentrenamiento periódico|Expectativas: conocer las hipótesis; más sesgo en calificaciones globales"
    ] },
  { t: "Acuerdo entre observadores, criterios de bondad y planificación",
    tip: "La fiabilidad interobservadores indica si dos observadores independientes registran lo mismo. El porcentaje de acuerdo total es el más laxo, y el acuerdo por intervalos no corrige el azar. Kappa de Cohen (1960) descuenta el acuerdo esperado por azar, y con conductas raras el porcentaje de acuerdo engaña. Acuerdo no es exactitud, y la observación se planifica en ocho pasos, con entrenamiento y controles encubiertos.",
    v: [
      "Fiabilidad interobservadores=Grado en que dos observadores independientes registran lo mismo",
      "Acuerdo total=Comparación de los totales de cada observador, el índice más laxo",
      "Acuerdo por intervalos=Acuerdos entre acuerdos más desacuerdos, intervalo a intervalo",
      "Índice por secuencia=Comprueba si los observadores encadenan los acontecimientos igual",
      "Kappa de Cohen=Índice de acuerdo que descuenta el esperado por azar",
      "Landis y Koch (1977)=Propusieron franjas convencionales para interpretar kappa",
      "Estabilidad temporal=Mantenimiento de la conducta registrada en distintas sesiones",
      "Criterio de acuerdo=Nivel fijado de antemano que deben alcanzar los observadores al entrenarse"
    ],
    g: [
      "Con un acuerdo observado de 0,70 y un acuerdo por azar de 0,40, kappa vale ___.|0,50|0,30|0,70",
      "Si un observador cuenta 18 conductas y otro 20, el acuerdo total es del ___.|90 %|80 %|95 %",
      "Un kappa de 0,60 queda en el techo de la franja ___ de Landis y Koch.|moderada|sustancial|casi perfecta",
      "El acuerdo por intervalos es más exigente que el total, pero no corrige el acuerdo por ___.|azar|deriva|reactividad",
      "La estabilidad temporal se comprueba ___ los datos de dos o más momentos.|correlacionando|promediando|sumando"
    ],
    tf: [
      "Kappa vale 0 cuando el acuerdo no supera al que cabría esperar por azar.|V",
      "Con conductas poco frecuentes, el porcentaje de acuerdo suele infravalorar la fiabilidad real.|F|Ocurre lo contrario: coincidir en que «no pasa nada» infla el porcentaje. Un 90 % puede quedarse en un κ de 0,44.",
      "Las franjas de Landis y Koch (1977) son un punto de corte universal de kappa.|F|Son convencionales: no hay un punto de corte universal de kappa.",
      "Dos observadores pueden coincidir en el total de conductas habiendo contado episodios distintos.|V"
    ],
    q: [
      "Dos observadores registran 20 intervalos. Coinciden en 16 y el acuerdo esperado por azar es 0,50. ¿Cuánto vale kappa?|0,60|0,80|0,30|El acuerdo observado es 16/20, 0,80. Kappa es (0,80 − 0,50) / (1 − 0,50), es decir, 0,30 / 0,50, que da 0,60.",
      "Dos observadores coinciden en el 90 % de los intervalos al registrar una conducta muy rara. ¿Qué conviene concluir?|Hay que calcular kappa antes de valorarlo|El registro es exacto y no necesita revisión|El acuerdo es casi perfecto según Landis y Koch|Con conductas raras el acuerdo por azar es muy alto. Con una conducta rara, un 90 % de acuerdo puede quedarse en un κ de 0,44.",
      "¿Qué índice de acuerdo entre observadores es el más laxo?|El acuerdo total|El acuerdo por intervalos|El kappa de Cohen|Compara solo los totales: los observadores pueden haber contado episodios distintos y coincidir en la suma.",
      "En la planificación de la observación, ¿qué paso va justo antes de entrenar a los observadores?|Decidir el muestreo|Elegir la técnica de registro|Analizar los datos|El orden es objetivo, definiciones operativas, unidades, técnica, muestreo, entrenamiento, controles y análisis."
    ],
    inc: [
      "Sobre el acuerdo entre observadores|Un acuerdo alto garantiza la exactitud del registro|El índice por secuencia importa en las interacciones|Kappa vale 1 con acuerdo perfecto|Acuerdo no es exactitud: puede haber deriva compartida, acuerdo inflado por azar o por saberse controlados."
    ],
    seq: [
      "Planificación de la observación|Definir el objetivo y las conductas>Elaborar definiciones operativas>Elegir unidad de análisis y de medida>Elegir la técnica de registro>Decidir el muestreo>Entrenar a los observadores>Controlar el acuerdo de forma periódica>Analizar los datos y revisar el sistema"
    ],
    cls: [
      "Índice de acuerdo|Sin corrección del azar: acuerdo total; acuerdo por intervalos|Con corrección del azar: kappa de Cohen"
    ] }
] },
{ n: 15, t: "Fundamentos del autoinforme", cap: 6, pir: "alta", mods: [
  { t: "El autoinforme y el procesamiento de la información",
    tip: "El autoinforme es cualquier procedimiento en que la persona informa sobre sí misma, y responder es una tarea cognitiva. Tourangeau, Rips y Rasinski (2000) la dividen en comprensión, recuperación, juicio y respuesta, cada una con su error típico. Nisbett y Wilson (1977) mostraron que no se informa con exactitud de las causas de la conducta, y Ericsson y Simon matizaron que sí puede verbalizarse el contenido de la memoria de trabajo. Es más fiable preguntar qué que por qué.",
    v: [
      "Autoinforme=Información verbal o escrita que la persona aporta sobre sí misma",
      "Comprensión=Fase en que se entiende la pregunta como la entiende el evaluador",
      "Recuperación=Fase de búsqueda en la memoria de los episodios relevantes",
      "Juicio=Fase en que se suma, estima o compara lo recuperado para formar una respuesta",
      "Efecto telescopio=Sucesos lejanos fechados como más recientes de lo que son",
      "Anclaje=Influencia de un valor de referencia, como el primer número de la escala",
      "Accesibilidad=Si la persona puede llegar de verdad a la información que se le pide",
      "Contrastabilidad=Si otra persona puede comprobar la información aportada"
    ],
    g: [
      "En el modelo de Tourangeau, el anclaje es un error típico de la fase de ___.|juicio|recuperación|comprensión",
      "La pregunta «¿Bebe a menudo?» ilustra un problema de la fase de ___.|comprensión|recuperación|respuesta",
      "La deseabilidad social y los estilos de respuesta actúan en la fase de ___.|respuesta|juicio|recuperación",
      "Según Nisbett y Wilson, al explicar su conducta las personas recurren a teorías ___.|implícitas|explícitas|científicas",
      "Que alguien evita el metro puede verlo un acompañante, pero su miedo no: es una cuestión de ___.|contrastabilidad|accesibilidad|deseabilidad"
    ],
    tf: [
      "Nisbett y Wilson (1977) concluyeron que ningún autoinforme verbal es válido.|F|Su crítica se refiere a las causas de la conducta, no a todo autoinforme. Es una trampa típica del PIR.",
      "Por el efecto telescopio, sucesos anteriores al periodo preguntado acaban incluidos en él.|V",
      "En el cubo de Cone, el autoinforme ocupa una posición directa porque informa de la conducta en el momento.|F|Ocupa una posición indirecta: casi siempre informa de una conducta ocurrida en otro lugar o en otro momento.",
      "Es más fiable preguntar a la persona qué hizo o sintió que preguntarle por qué lo hizo.|V"
    ],
    q: [
      "Ante «¿Cuántas veces ha ido al médico en el último año?», un paciente contesta «unas cuatro» porque le parece una cifra normal. ¿En qué fase surge el error?|Juicio|Recuperación|Comprensión|Al no contar los episodios uno a uno, estima con heurísticos. Dudar si cuenta el dentista sería un problema de comprensión.",
      "¿Qué matizaron Ericsson y Simon respecto a Nisbett y Wilson?|Que el contenido presente sí se verbaliza bien|Que las causas de la conducta son accesibles|Que la introspección nunca es fiable|Lo que puede verbalizarse con fiabilidad es el contenido de la memoria de trabajo, no las causas de la conducta.",
      "Un encuestado sitúa en los últimos seis meses una mudanza que hizo hace casi un año. ¿Qué error comete?|Efecto telescopio|Error de anclaje|Sesgo de aquiescencia|Es un error de recuperación: los hechos lejanos se fechan como más recientes y entran en el periodo preguntado.",
      "Según Fernández-Ballesteros (2011), ¿qué lugar ocupa el autoinforme entre los métodos de evaluación?|La categoría más amplia|La categoría más objetiva|La categoría menos usada|Por su variedad, va desde cuestionarios con opciones cerradas hasta autobiografías abiertas."
    ],
    inc: [
      "Sobre el proceso de respuesta a un autoinforme|Responder equivale a leer un archivo interno|La comprensión puede fallar por ambigüedad|El olvido es un error de la recuperación|Es una tarea cognitiva: interpretar, buscar en la memoria, combinar y traducir al formato del instrumento."
    ],
    seq: [
      "Fases de respuesta según Tourangeau, Rips y Rasinski|Comprensión>Recuperación>Juicio>Respuesta"
    ],
    cls: [
      "Error del autoinforme según la fase|Recuperación: olvido; efecto telescopio|Juicio: anclaje; heurísticos de frecuencia|Respuesta: deseabilidad social; aquiescencia"
    ] },
  { t: "Autoinformes directos e indirectos",
    tip: "Fernández-Ballesteros distingue el autoinforme directo o isomórfico, cuya respuesta se toma como muestra, del indirecto o inferencial, cuyas respuestas son indicadores de un constructo. La distinción enlaza con la disyuntiva signo frente a muestra. Isomórfico no significa objetivo: cambia la inferencia del evaluador, no la exactitud de la persona. Sin criterio externo, la información se refuerza por triangulación.",
    v: [
      "Autoinforme directo=Respuesta tomada como muestra de lo evaluado, sin inferir más",
      "Autoinforme indirecto=Respuestas usadas como indicadores de un constructo no explícito",
      "Signo frente a muestra=Disyuntiva entre tomar la respuesta como indicador o como parte de lo evaluado",
      "Triangulación=Contrastar la respuesta con otras ocasiones, formatos, huellas e informantes",
      "Tipo de manifestación=Variable que distingue respuesta motora, fisiológica, cognitiva o subjetiva",
      "Variable tiempo=Si lo preguntado se refiere al pasado, al presente o al futuro",
      "Indicador=Respuesta que remite a un constructo que no aparece en ella de forma literal",
      "Huella comprobable=Rastro externo como un ticket o un historial de llamadas"
    ],
    g: [
      "Fernández-Ballesteros clasifica los autoinformes según cuánto tiene que ___ el evaluador.|interpretar|preguntar|observar",
      "La evaluación conductual prefiere los autoinformes ___ porque reducen la inferencia.|directos|indirectos|proyectivos",
      "Si un paciente anota que se despierta tres veces cada noche, esa respuesta ya es el ___ que interesa.|dato|signo|síntoma",
      "Pensar «me voy a desmayar» corresponde a una manifestación ___.|cognitiva|motora|fisiológica",
      "Un mismo instrumento puede usarse de forma directa o indirecta según cómo se ___.|interprete|aplique|construya"
    ],
    tf: [
      "Un autoinforme isomórfico es objetivo porque no requiere inferencia del evaluador.|F|Sigue pasando por las cuatro fases de respuesta: cambia la inferencia del evaluador, no la exactitud de la persona.",
      "Los modelos psicométrico y dinámico usan con más frecuencia autoinformes indirectos.|V",
      "Notar taquicardia es un ejemplo de manifestación cognitiva en un autoinforme.|F|Es una manifestación fisiológica. Lo cognitivo sería pensar «me voy a desmayar», y lo motor, evitar el metro.",
      "Las horas de sueño son más contrastables con criterios externos que el grado de tristeza.|V"
    ],
    q: [
      "Un evaluador infiere un nivel de ansiedad rasgo a partir del acuerdo con «me cuesta relajarme» y otras frases. ¿Qué tipo de autoinforme usa?|Indirecto o inferencial|Directo o isomórfico|Autorregistro de muestra|Las respuestas son indicadores de un constructo que no aparece en ellas de forma literal.",
      "Un paciente anota que se despierta tres veces cada noche. ¿Qué limitación conserva este dato aunque sea isomórfico?|Puede estar mal recordado o redondeado|Exige una inferencia alta del evaluador|Solo vale si se compara con un baremo|Un autoinforme directo sigue expuesto a errores de recuerdo y de juicio. Lo que se reduce es la inferencia del evaluador.",
      "Sin un criterio externo, ¿cómo se refuerza la información de un autoinforme?|Por triangulación con otras fuentes|Aumentando el número de ítems|Repitiendo la misma pregunta seguida|Se comprueba si se mantiene otro día, con otro formato, con huellas comprobables y con otros informantes.",
      "«¿Qué cree que pasará si va a la fiesta?» se clasifica, según la variable tiempo, como un autoinforme sobre…|el futuro|el presente|el pasado|La variable tiempo distingue pasado, presente y futuro. «¿Cuándo empezó el problema?» se referiría al pasado."
    ],
    inc: [
      "Sobre la clasificación de los autoinformes|El autoinforme evalúa solo lo cognitivo|Puede clasificarse por el tiempo al que se refiere|Puede clasificarse por su contrastabilidad|También evalúa lo motor, lo fisiológico y lo subjetivo. Como los tres sistemas están débilmente acoplados, no siempre coinciden."
    ],
    seq: [],
    cls: [
      "Tipo de autoinforme|Directo: muestra; registro de despertares; preferido por la evaluación conductual|Indirecto: signo; escala de neuroticismo; modelos psicométrico y dinámico"
    ] },
  { t: "Variables evaluadas y formatos de respuesta",
    tip: "Cada modelo pide al autoinforme una información distinta: rasgos, estados, repertorios clínico-conductuales o cognitivos, construcciones idiográficas o narrativa. Los ítems de rasgo se eligen por vía racional, empírica o factorial. Las preguntas pueden ser estructuradas, semiestructuradas o no estructuradas, y los formatos de respuesta van del abierto al Q-sort. Ningún formato es neutro: cada uno favorece errores distintos.",
    v: [
      "Estado=Cómo se encuentra la persona en una situación o momento concretos",
      "Rasgo=Disposición estable comparada con un grupo normativo",
      "Vía empírica=Ítems elegidos por su capacidad para diferenciar grupos, como en el MMPI",
      "Vía factorial=Ítems elegidos por su peso en un factor, como en el 16PF",
      "Elección forzada=Elegir entre afirmaciones de deseabilidad parecida",
      "Vía racional=Ítems elegidos según lo que propone la teoría",
      "Escala analógico-visual=Línea de 100 mm entre dos extremos en la que se marca un punto",
      "Q-sort=Reparto de tarjetas en montones según una distribución forzada cuasinormal"
    ],
    g: [
      "El Fear Survey Schedule (Wolpe y Lang, 1964) evalúa repertorios ___.|clínico-conductuales|cognitivos|narrativos",
      "El ATQ de Hollon y Kendall evalúa repertorios ___.|cognitivos|clínico-conductuales|narrativos",
      "Las construcciones ___, como las de la rejilla de constructos, muestran cómo organiza la persona su propio mundo.|idiográficas|normativas|criteriales",
      "Con un número ___ de opciones en una escala Likert se evita el punto medio.|par|impar|alto",
      "El Q-sort fue propuesto por ___ en 1953.|Stephenson|Spielberger|Kelly"
    ],
    tf: [
      "En la escala analógico-visual la persona elige entre cuatro y siete opciones de respuesta.|F|Marca un punto en una línea de 100 mm entre dos extremos. Entre 4 y 7 opciones es lo habitual en las escalas Likert.",
      "El formato dicotómico favorece la aquiescencia, y el Likert, la tendencia central o extrema.|V",
      "Las preguntas no estructuradas son iguales para todos y tienen respuestas predeterminadas.|F|Eso define las estructuradas. Las no estructuradas plantean una consigna abierta, como «Cuénteme cómo es un día normal».",
      "El autorregistro es el ejemplo típico de pregunta semiestructurada.|V"
    ],
    q: [
      "Para seguir día a día un dolor crónico, la psicóloga pide marcar un punto en una línea de 100 mm entre «nada de dolor» y «el peor dolor imaginable». ¿Qué formato usa?|Escala analógico-visual|Escala Likert de siete puntos|Formato de elección forzada|Es una línea continua entre dos extremos y encaja bien para seguir un dolor crónico con registros diarios.",
      "¿Qué vía de selección de ítems utilizó el MMPI?|Empírica|Factorial|Racional|Eligió los ítems por su capacidad para diferenciar grupos. El 16PF siguió la vía factorial.",
      "Los repertorios clínico-conductuales y cognitivos interesan en la evaluación conductual como…|muestras del problema|signos de un rasgo|índices normativos|Interesan las conductas o los pensamientos como muestras del problema, no como signos de un rasgo.",
      "¿Qué desventaja tiene el formato de respuesta abierto?|Exige codificar las respuestas|Obliga a decidir en casos dudosos|Produce puntuaciones ipsativas|Da riqueza, pero hay que codificar las respuestas. Obligar a decidir en casos dudosos es propio del dicotómico."
    ],
    inc: [
      "Sobre los formatos de respuesta|El formato dicotómico permite matizar los casos dudosos|Las escalas Likert suelen tener entre 4 y 7 opciones|El formato abierto da riqueza a las respuestas|El dicotómico es rápido, pero obliga a decidir en los casos dudosos."
    ],
    seq: [],
    cls: [
      "Vía de selección de ítems de rasgo|Racional: según la teoría|Empírica: diferencia entre grupos; MMPI|Factorial: peso en un factor; 16PF"
    ] },
  { t: "Fuentes de error",
    tip: "La simulación busca dar peor imagen y la disimulación, ocultar problemas. Paulhus (1984) dividió la deseabilidad social en autoengaño, que es sincero, y manejo de la impresión, que es deliberado, y los midió con el BIDR. La aquiescencia se controla con ítems equilibrados, y los errores escalares son la tendencia central y la extrema. La mayoría de los errores no son mentiras y pueden controlarse.",
    v: [
      "Simulación=Intento deliberado de dar una imagen peor de la real",
      "Disimulación=Ocultar problemas para parecer más ajustado",
      "Autoengaño=Visión de uno mismo positivamente sesgada, pero sincera",
      "Manejo de la impresión=Ajuste deliberado de las respuestas para causar buena impresión",
      "BIDR=Inventario de Paulhus con las escalas SDE e IM",
      "Aquiescencia=Tendencia a responder «sí» o «de acuerdo» sea cual sea el contenido",
      "Ítems equilibrados=La mitad redactados en un sentido y la mitad en el contrario",
      "Tendencia extrema=Elegir siempre los polos de la escala de respuesta"
    ],
    g: [
      "Paulhus y Reid (1991) dividieron el autoengaño en realce y ___.|negación|simulación|aquiescencia",
      "La escala L del MMPI se sitúa sobre todo del lado del ___.|manejo de la impresión|autoengaño|realce autoengañoso",
      "Ocultar problemas en una evaluación de custodia para parecer más ajustado es ___.|disimulación|simulación|aquiescencia",
      "La aquiescencia se controla con ítems ___.|equilibrados|dicotómicos|abiertos",
      "Los efectos de recuerdo aumentan cuanto más ___ y menos llamativo es el suceso.|lejano|reciente|concreto"
    ],
    tf: [
      "Un autoengaño alto significa que la persona miente para causar buena impresión.|F|El autoengaño es sincero: la persona se ve mejor de lo que la ven los demás. Mentir sería manejo de la impresión.",
      "Que el manejo de la impresión refleje un rasgo real de autocontrol interpersonal está en debate.|V",
      "La simulación es el intento de ocultar problemas para parecer más ajustado.|F|Eso es la disimulación. La simulación busca dar una imagen peor de la real, por ejemplo para obtener una baja.",
      "Garantizar la confidencialidad y explicar el uso de la información reduce las respuestas defensivas.|V"
    ],
    q: [
      "Un trabajador con dolor lumbar que solicita una incapacidad laboral puntúa muy alto en quejas físicas. ¿Qué debe hacer el evaluador?|Combinar el autoinforme con otras fuentes|Descartar el autoinforme por poco fiable|Concluir que está simulando de forma deliberada|Puede exagerar sin querer, a propósito o incluso minimizar. Se combina con escalas de validez, otros informantes y datos funcionales.",
      "¿Qué escalas del BIDR corresponden a los dos componentes de Paulhus?|SDE e IM|L y K|Realce y negación|SDE mide el realce autoengañoso e IM, el manejo de la impresión. Realce y negación son la división posterior del autoengaño.",
      "Una persona responde «de acuerdo» a casi todos los ítems, incluso a los que se contradicen. ¿Qué estilo de respuesta muestra?|Aquiescencia|Tendencia central|Manejo de la impresión|Es la tendencia a decir «sí» con independencia del contenido. Se controla con ítems equilibrados en ambos sentidos.",
      "¿En qué condiciones es más exacto el autoinforme?|Pregunta concreta sobre sucesos recientes|Pregunta general sobre sucesos lejanos|Pregunta abierta sobre causas pasadas|También ayuda que la persona esté motivada, conozca bien la conducta y se le pida poca inferencia."
    ],
    inc: [
      "Sobre la deseabilidad social|Es siempre una mentira deliberada|Incluye un componente de autoengaño sincero|Se mide con el BIDR de Paulhus|Paulhus (1984) distinguió el autoengaño, sincero, del manejo de la impresión, deliberado."
    ],
    seq: [],
    cls: [
      "Componente de la deseabilidad social|Autoengaño: sincero; escala SDE; realce y negación|Manejo de la impresión: deliberado; escala IM; escala L del MMPI"
    ] }
] },
{ n: 16, t: "Tipos de autoinforme", cap: 6, pir: "media", mods: [
  { t: "Cuestionarios, inventarios y escalas",
    tip: "Cuestionarios, inventarios y escalas son autoinformes estructurados con ítems fijos, respuesta cerrada y corrección estandarizada. Destacan por su economía, estandarización, comparabilidad y garantías conocidas, pero no recogen lo específico del caso. Sirven para cribar, cuantificar, describir y medir el cambio, no para diagnosticar por sí solos. Un α alto no demuestra que el test mida una sola dimensión.",
    v: [
      "Cuestionario=Autoinforme estructurado con ítems fijos y corrección estandarizada",
      "Inventario=Nombre habitual cuando se recorre de forma amplia un ámbito",
      "Escala=Nombre habitual cuando se mide la intensidad de una dimensión",
      "Listado=La persona marca qué elementos de una lista le corresponden",
      "Estandarización=Todos responden a lo mismo y se corrigen igual",
      "Cribado=Detectar posibles problemas que habrá que confirmar después",
      "BDI-II=21 ítems sobre la gravedad de los síntomas depresivos",
      "SCL-90-R=90 ítems sobre síntomas psicopatológicos en varias dimensiones"
    ],
    g: [
      "La adaptación española del BDI-II se estudió primero con ___ universitarios.|590|90|21",
      "Un α alto indica que los ítems ___, pero no prueba la unidimensionalidad.|covarían|discriminan|predicen",
      "El SCL-90-R es de ___ y su adaptación española la publica TEA.|Derogatis|Spielberger|Beck",
      "La adaptación española del BAI es de Sanz y ___ (2003).|Navarro|Vázquez|Perdigón",
      "Poder situar a la persona en un baremo es la ventaja de la ___ de los cuestionarios.|comparabilidad|economía|estandarización"
    ],
    tf: [
      "La adaptación española del BDI-II se estudió solo con población clínica.|F|Se estudió primero con 590 universitarios y después en población general (Sanz, Perdigón y Vázquez, 2003).",
      "Una puntuación alta en el BDI-II basta para diagnosticar un episodio depresivo.|F|Indica síntomas intensos, pero el diagnóstico exige entrevista clínica, historia del caso y otros datos.",
      "Los nombres cuestionario, inventario y escala se usan de forma bastante intercambiable.|V",
      "Medir el cambio antes, durante y después de una intervención es uno de los usos de los cuestionarios.|V"
    ],
    q: [
      "Una estudiante puntúa alto en el BDI-II en época de exámenes. ¿Qué paso sigue?|Una entrevista para precisar el cuadro|Comunicar un diagnóstico de depresión|Repetir el BDI-II al día siguiente|La entrevista mostrará si es un malestar transitorio ligado al estrés o un episodio depresivo.",
      "¿Qué limitación es propia de los cuestionarios por su estructura?|No recogen lo específico del caso|Dependen mucho del evaluador|Carecen de baremos de referencia|Los ítems son iguales para todos y las respuestas cerradas no permiten matizar.",
      "¿Qué evalúa el STAI de Spielberger?|Ansiedad estado y rasgo|Gravedad de la depresión|Síntomas en varias dimensiones|Su adaptación española la publica TEA. La depresión la evalúa el BDI-II, y las varias dimensiones, el SCL-90-R.",
      "Cuando un instrumento recorre de forma amplia los síntomas o los intereses, se le suele llamar…|inventario|escala|listado|«Escala» se usa para la intensidad de una dimensión, y «listado» cuando se marcan elementos de una lista."
    ],
    inc: [
      "Sobre los cuestionarios|Eliminan la deseabilidad y la aquiescencia|Se aplican de forma individual o colectiva|Reducen la influencia del evaluador|Los errores del autoinforme, como la deseabilidad, la aquiescencia y los efectos de recuerdo, siguen presentes."
    ],
    seq: [],
    cls: [
      "Instrumento|Ansiedad: STAI; BAI|Depresión: BDI-II|Varias dimensiones: SCL-90-R"
    ] },
  { t: "Autorregistros",
    tip: "El autorregistro consiste en observar y anotar la propia conducta cuando ocurre, con dos componentes, discriminar y registrar (Korotitsch y Nelson-Gray, 1999). Debe planificarse en seis pasos. Según Nelson (1977), es más reactivo con conductas de valencia clara, registro previo, dispositivo visible y metas con retroalimentación. La reactividad es un problema para evaluar y una ventaja para tratar.",
    v: [
      "Autorregistro=Observar y anotar la propia conducta cuando ocurre o poco después",
      "Discriminar=Advertir que la conducta objetivo se ha producido",
      "Hoja ABC=Antecedente, conducta o pensamiento y consecuencia de cada episodio",
      "Valencia=Carácter deseable o indeseable de la conducta registrada",
      "Registro previo=Anotar la conducta antes de realizarla, como el cigarrillo antes de encenderlo",
      "Metas y retroalimentación=Factor que, según Nelson, aumenta la reactividad del autorregistro",
      "Nelson (1977)=Describió los factores que aumentan la reactividad del autorregistro",
      "Korotitsch y Nelson-Gray=Describieron en 1999 los dos componentes de la autoobservación anotada"
    ],
    g: [
      "Las conductas deseables tienden a ___ al autorregistrarlas.|aumentar|disminuir|estabilizarse",
      "Conviene anotar la conducta ___, no al final del día.|justo después|a la semana|antes de dormir",
      "El autorregistro es una técnica ___, porque el evaluador define qué se anota y la persona observa.|semiestructurada|estructurada|no estructurada",
      "Una libreta, un contador de muñeca o una aplicación sirven si la persona puede usarlos en el ___.|momento|despacho|fin de semana",
      "Para el tratamiento, la reactividad del autorregistro es una ___.|ventaja|amenaza|limitación"
    ],
    tf: [
      "La reactividad del autorregistro hace aumentar cualquier conducta que se registre.|F|Las conductas deseables tienden a aumentar y las indeseables a disminuir.",
      "Un dispositivo de registro visible aumenta la reactividad del autorregistro.|V",
      "Para la evaluación, la reactividad es una ventaja porque mejora la línea base.|F|Es un problema: la línea base puede no reflejar la conducta habitual. Para el tratamiento sí es una ventaja.",
      "Con varias semanas de hoja ABC se ve qué situaciones preceden al problema y qué consecuencias lo mantienen.|V"
    ],
    q: [
      "Un paciente que quiere dejar de fumar anota cada cigarrillo antes de encenderlo y lleva un contador bien visible. ¿Qué cabe esperar?|Que fume menos por la reactividad|Que el registro refleje su línea base|Que fume más al prestarle atención|Registro previo, dispositivo visible y conducta indeseable aumentan la reactividad: la conducta tiende a disminuir.",
      "¿Qué dos componentes tiene el autorregistro según Korotitsch y Nelson-Gray (1999)?|Discriminar y registrar|Observar y autorreforzar|Registrar y autoevaluar|Primero hay que advertir que la conducta objetivo se ha producido y después anotarla.",
      "¿Qué ventaja tiene la EMA frente a un registro hecho al final del día?|Reduce el sesgo de recuerdo|Elimina toda la reactividad|Reduce la carga del paciente|Se responde en el momento y el lugar reales. A cambio, supone más carga y cierta reactividad.",
      "¿Qué formato de autorregistro aporta datos directos para el análisis funcional?|La hoja ABC|La escala de duración|El contador de frecuencia|Recoge antecedentes, conducta o pensamiento y consecuencias de cada episodio."
    ],
    inc: [
      "Sobre la planificación del autorregistro|Conviene una hoja con muchos campos detallados|Hay que entrenar a la persona con ejemplos|Los registros se revisan en cada sesión|La hoja debe ser sencilla, con pocos campos y fácil de llevar encima."
    ],
    seq: [
      "Planificación de un autorregistro|Definir la conducta>Elegir los parámetros>Diseñar la hoja>Entrenar a la persona>Anotar justo después de la conducta>Revisar los registros en cada sesión"
    ],
    cls: [] },
  { t: "El pensamiento en voz alta",
    tip: "En el pensamiento en voz alta la persona verbaliza lo que piensa durante una tarea, como monólogo continuo, muestreo de pensamientos o registro de sucesos. Ericsson y Simon distinguen tres niveles: verbalizar, recodificar y explicar. Según Fox, Ericsson y Best (2011), los niveles 1 y 2 no cambian el rendimiento (r de –0,03), aunque alargan la tarea, y el nivel 3 sí lo altera. La instrucción adecuada pide decir lo que se piensa, no explicar por qué.",
    v: [
      "Pensamiento en voz alta=Verbalizar lo que se piensa durante una tarea o justo después",
      "Monólogo continuo=Decir todo lo que pasa por la cabeza mientras se hace la tarea",
      "Muestreo de pensamientos=Ante una señal, decir qué se tenía en la cabeza en ese instante",
      "Registro de sucesos=Hablar solo al detectar un pensamiento acordado",
      "Análisis de protocolos=Método de Ericsson y Simon para recoger y codificar verbalizaciones",
      "Nivel 1=Decir en voz alta lo que ya está en forma verbal",
      "Nivel 2=Poner en palabras contenidos no verbales, como imágenes",
      "Nivel 3=Explicar o justificar los propios procesos"
    ],
    g: [
      "El metaanálisis de Fox, Ericsson y Best (2011) reunió ___ estudios.|94|21|590",
      "Con instrucciones de solo verbalizar, el rendimiento no cambia, aunque la tarea se ___.|alarga|acorta|interrumpe",
      "En el muestreo de pensamientos, el calendario de señales lo fija ___.|el evaluador|la persona|el azar",
      "Decir «veo el mapa y estoy girando a la izquierda» corresponde al nivel ___ de verbalización.|2|1|3",
      "La instrucción adecuada es «diga en voz alta todo lo que ___ mientras lo hace».|piense|explique|justifique"
    ],
    tf: [
      "El pensamiento en voz alta siempre altera el proceso que se quiere estudiar.|F|Solo lo altera pedir explicaciones (nivel 3). Verbalizar lo pensado no cambia el rendimiento, aunque hace la tarea más lenta.",
      "Los datos de Fox, Ericsson y Best son compatibles con las conclusiones de Nisbett y Wilson.|V",
      "En el registro de sucesos, la persona habla cada vez que suena una señal fijada por el evaluador.|F|Eso es el muestreo de pensamientos. En el registro de sucesos la persona habla solo al detectar el pensamiento acordado.",
      "La principal limitación del pensamiento en voz alta es práctica: grabar, transcribir y codificar.|V"
    ],
    q: [
      "Un estudiante con ansiedad ante los exámenes resuelve problemas en voz alta y dice «esto no me va a salir». ¿Cómo se trata después ese material?|Se transcribe y se codifica en categorías|Se compara con un baremo normativo del test|Se interpreta como un signo proyectivo latente|Las verbalizaciones se codifican, por ejemplo, en pensamientos de tarea, autoevaluaciones negativas y pensamientos irrelevantes.",
      "¿Qué instrucción altera el rendimiento según Fox, Ericsson y Best (2011)?|Explique por qué lo hace así|Diga todo lo que piense|Describa la imagen que ve|Pedir explicaciones corresponde al nivel 3. Verbalizar y recodificar no alteran el rendimiento.",
      "Una persona dice en voz alta «siete por ocho, cincuenta y seis» mientras calcula. ¿Qué nivel de verbalización es?|Nivel 1, verbalizar|Nivel 2, recodificar|Nivel 3, explicar|Saca fuera lo que ya está en forma verbal. Recodificar sería poner en palabras imágenes o sensaciones.",
      "¿Qué relación con el rendimiento encontraron Fox, Ericsson y Best para los niveles 1 y 2?|Prácticamente nula|Claramente negativa|Claramente positiva|La correlación fue de –0,03, a cambio de una tarea más lenta."
    ],
    inc: [
      "Sobre el análisis de protocolos|Permite verbalizar bien las causas de la conducta|Se centra en el contenido de la memoria de trabajo|Distingue tres niveles distintos de verbalización|Lo verbalizable con fiabilidad es el contenido presente en la memoria de trabajo, no las causas de la conducta."
    ],
    seq: [
      "Niveles de verbalización de Ericsson y Simon|Verbalizar lo que ya es verbal>Recodificar contenido no verbal>Explicar los propios procesos"
    ],
    cls: [
      "Forma de organizar el pensamiento en voz alta|Monólogo continuo: todo lo que pasa por la cabeza; durante la tarea|Muestreo de pensamientos: señal fijada por el evaluador; contenido de ese instante|Registro de sucesos: iniciativa de la persona; pensamiento acordado"
    ] },
  { t: "La entrevista como autoinforme, la autobiografía y los métodos narrativos",
    tip: "La entrevista es el autoinforme más usado: es interactiva, permite observar lo no verbal y acompaña todo el proceso. La autobiografía, libre o guiada, es un método idiográfico al que se suman documentos personales y la línea de vida. Desde McAdams, la identidad es una historia de vida interiorizada, y los relatos se leen sobre todo con análisis de contenido. Lo recomendable es combinar los distintos tipos de autoinforme.",
    v: [
      "Autobiografía=Relato propio de la vida en el que la persona la cuenta y la interpreta",
      "Autobiografía guiada=El evaluador marca un índice de etapas o temas",
      "Línea de vida=Flecha del nacimiento al presente con los hechos importantes y su valencia",
      "Documentos personales=Diarios, cartas o álbumes que complementan el relato",
      "Historia de vida=Identidad como relato interiorizado y en evolución, según McAdams",
      "Análisis de contenido=Lectura de temas, tono y estructura de un relato",
      "Método idiográfico=Busca comprender la historia singular de la persona, sin compararla",
      "Otros informantes=Familiares o docentes cuya información ya no es autoinforme"
    ],
    g: [
      "Cuando informan familiares o docentes, la información deja de ser un ___.|autoinforme|registro|testimonio",
      "Desde el enfoque de ___, la identidad es una historia de vida interiorizada.|McAdams|Kelly|Stephenson",
      "La línea de vida ayuda especialmente a quien tiene dificultades para ___.|escribir|recordar|hablar",
      "Al relato autobiográfico pueden sumarse documentos ___, como un diario o una carta.|personales|clínicos|oficiales",
      "El principal riesgo de la autobiografía es la ___ del recuerdo.|reconstrucción|reactividad|aquiescencia"
    ],
    tf: [
      "La autobiografía busca comparar la historia de la persona con la de un grupo normativo.|F|Es un método idiográfico: busca comprender cómo vive esa persona su historia, no compararla con otras.",
      "El riesgo principal del autorregistro, comparado con otros autoinformes, es la reactividad y el abandono.|V",
      "Los relatos autobiográficos solo pueden analizarse de forma cualitativa.|F|Se leen sobre todo de forma cualitativa, pero también pueden codificarse y contarse.",
      "Un mismo despido puede aparecer en un relato como una caída y en otro como el comienzo de una etapa mejor.|V"
    ],
    q: [
      "La psicóloga pide a un paciente que dibuje una flecha desde su nacimiento hasta hoy y sitúe los hechos importantes más arriba o más abajo según su valencia. ¿Qué técnica usa?|Una línea de vida|Un Q-sort biográfico|Una autobiografía libre|Ofrece de un vistazo la estructura de una biografía y ayuda a quien tiene dificultades para escribir.",
      "¿Qué ventaja tiene la autobiografía guiada frente a la libre?|Es más fácil cotejarla con otros|Recoge mejor lo espontáneo|Evita la reconstrucción del recuerdo|El índice de etapas o temas da orden al relato y facilita compararlo con lo que cuentan otros.",
      "¿Qué riesgo principal se asocia a la entrevista como autoinforme?|Sesgos del entrevistador sin estructura|Alteración si se piden explicaciones|Reactividad y abandono del registro|La alteración por explicaciones es del pensamiento en voz alta, y la reactividad y el abandono, del autorregistro.",
      "Un evaluador quiere cuantificar síntomas, ver la conducta día a día e integrarlo todo con la historia. ¿Qué combinación es la recomendada?|Cuestionario, autorregistro y entrevista|Autobiografía, Q-sort y pensamiento en voz alta|Línea de vida, autobiografía y documentos personales|Cada tipo de autoinforme ofrece un equilibrio distinto entre estructura, cercanía al momento y riqueza de la información."
    ],
    inc: [
      "Sobre la entrevista como autoinforme|Impide observar la conducta no verbal|Es interactiva y permite aclarar preguntas|Se usa desde el primer contacto hasta el seguimiento|Permite observar la conducta no verbal mientras se habla, uno de los rasgos que la distinguen del resto."
    ],
    seq: [],
    cls: [
      "Tipo de autoinforme|Cuestionario: estructura alta; deseabilidad y estilos de respuesta|Autorregistro: estructura media; reactividad y abandono|Pensamiento en voz alta: estructura baja; alteración si se piden explicaciones"
    ] }
] }
);

SP.register(window.COURSE);
})({});
