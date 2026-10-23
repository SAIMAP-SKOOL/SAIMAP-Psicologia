(function(window){
// SAIMAP Psicología · Psicología de la Atención y la Percepción
// Contenido alineado con el temario SAIMAP «Psicología de la Atención y la Percepción» (v1.0, octubre de 2026).
window.COURSE = {
  id: "atencion-percepcion",
  title: "Psicología de la Atención y la Percepción",
  short: "Atención y Percepción",
  area: "Procesos psicológicos básicos",
  rutas: { grado: { curso: 1 }, pir: { bloque: "Procesos básicos" } },
  temario: "Atencion-y-Percepcion_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Fundamentos de la percepción", from: 1, to: 4 },
    { n: 2, t: "Los sistemas sensoriales", from: 5, to: 10 },
    { n: 3, t: "La atención", from: 11, to: 14 },
    { n: 4, t: "Ilusiones, sesgos y trastornos de la atención", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Atención y Percepción · Unidades 1–4
window.COURSE.units.push(
{ n: 1, t: "El proceso perceptivo", cap: 1, pir: "media", mods: [
  { t: "Sensación, percepción y el ciclo perceptivo",
    tip: "Percibir es una cadena de transformaciones: del objeto del entorno (estímulo distal) a la energía que llega a los receptores (estímulo proximal), y de ahí a la transducción, la transmisión, el procesamiento neural, la percepción, el reconocimiento y la acción. Sensación y percepción se tratan hoy como un continuo más que como fases separadas. Además es un ciclo: la acción cambia el estímulo y el conocimiento modula lo que se procesa después.",
    v: [
      "Sensación=Registro inicial de una propiedad simple del estímulo, ligado a los receptores",
      "Percepción=Experiencia organizada y con significado que resulta de interpretar las señales",
      "Estímulo distal=Objeto o suceso real del entorno que se percibe",
      "Estímulo proximal=Energía que llega a los receptores, como la imagen retiniana",
      "Transducción=Conversión de la energía física en señal eléctrica en los receptores",
      "Reconocimiento=Asignación de una categoría con significado a lo percibido",
      "Agnosia=Trastorno por lesión cerebral en que se ven formas y colores sin identificar el objeto",
      "Ciclo perceptivo=Idea de que la acción y el conocimiento modifican la percepción siguiente"
    ],
    g: [
      "La imagen de la taza proyectada en la retina es el estímulo ___.|proximal|distal|transducido",
      "La conversión de la luz en señal eléctrica por los fotorreceptores se denomina ___.|transducción|transmisión|percepción",
      "Alargar la mano y coger la taza por el asa corresponde a la etapa de ___.|acción|reconocimiento|transmisión",
      "Los manuales actuales tratan la distinción entre sensación y percepción como un ___.|continuo|error|dualismo",
      "En las ___, la persona percibe formas y colores pero no identifica el objeto.|agnosias|ilusiones|afasias"
    ],
    tf: [
      "El estímulo distal nunca llega al cerebro: lo que llega son representaciones de él.|V",
      "La transducción es la etapa en que se asigna al objeto una categoría con significado.|F|Eso es el reconocimiento; la transducción convierte la energía física en señal eléctrica en los receptores.",
      "Se habla de ciclo perceptivo porque la acción cambia el estímulo y el conocimiento modula el procesamiento posterior.|V",
      "En la retina todavía no hay procesamiento: las señales empiezan a transformarse en el tálamo.|F|Ya en la retina hay procesamiento; por eso sensación y percepción se tratan como un continuo."
    ],
    q: [
      "Una paciente con una lesión cerebral describe bien la forma y el color de unas llaves, pero no sabe qué son. ¿Qué etapa está alterada?|El reconocimiento|La transducción|La percepción|En la agnosia se conserva la percepción y falla la asignación de una categoría con significado: se percibe sin reconocer.",
      "¿Qué orden de etapas es el correcto?|Transducción, transmisión, procesamiento neural|Transmisión, transducción, procesamiento neural|Procesamiento neural, transducción, transmisión|Primero los receptores convierten la energía, luego las señales viajan por las vías y después se combinan en redes de neuronas.",
      "Al mover la cabeza cambia la imagen en la retina, aunque la taza siga quieta. ¿Qué idea ilustra?|El carácter cíclico de la percepción|La disociación entre percepción y reconocimiento|La primacía del estímulo distal|La acción modifica el estímulo proximal; por eso el proceso perceptivo se describe como un ciclo y no como una línea.",
      "En el ejemplo de la taza de café, ¿qué es el estímulo distal?|La taza sobre la mesa|La imagen retiniana de la taza|La respuesta de los fotorreceptores|El distal es el objeto real del entorno; la imagen en la retina es el estímulo proximal."
    ],
    inc: [
      "Sobre las etapas del proceso perceptivo|El estímulo proximal es el objeto real del entorno|La transmisión lleva las señales del nervio óptico al tálamo y la corteza|En el procesamiento neural se extraen bordes, colores y formas|El objeto real es el estímulo distal; el proximal es la energía que llega a los receptores, como la imagen retiniana."
    ],
    seq: [
      "Etapas del proceso perceptivo|Estímulo distal>Estímulo proximal>Transducción>Transmisión>Procesamiento neural>Percepción>Reconocimiento>Acción"
    ],
    cls: [] },
  { t: "Procesamiento abajo-arriba y arriba-abajo",
    tip: "El procesamiento abajo-arriba parte de la información que llega a los receptores; el arriba-abajo está guiado por el conocimiento, el contexto, las expectativas y los objetivos. Las dos direcciones actúan a la vez. Ejemplos clásicos del segundo son la superioridad de la palabra, la figura rata-hombre, el contexto de escena de Palmer y la lectura de textos con erratas.",
    v: [
      "Abajo-arriba=Procesamiento guiado por la información que llega a los receptores",
      "Arriba-abajo=Procesamiento guiado por el conocimiento, el contexto y las expectativas",
      "Superioridad de la palabra=Una letra se identifica mejor dentro de una palabra que aislada",
      "Figura rata-hombre=Dibujo ambiguo cuya interpretación depende de las imágenes vistas antes",
      "Bugelski y Alampay=Autores que en 1961 mostraron el sesgo de la experiencia inmediata",
      "Palmer (1975)=Estudio en que un objeto breve se identifica mejor si encaja en la escena previa",
      "Erratas inadvertidas=Fallo al revisar un texto propio porque el lector anticipa las palabras",
      "Errores sistemáticos=Precio del procesamiento guiado por expectativas cuando estas no se cumplen"
    ],
    g: [
      "El procesamiento arriba-abajo también se llama guiado por el ___.|conocimiento|estímulo|receptor",
      "Una barra de pan presentada brevemente se identifica mejor tras ver una ___.|cocina|playa|calle",
      "Las erratas pasan inadvertidas al revisar un texto propio porque el lector ___ las palabras.|anticipa|transduce|ignora",
      "El procesamiento arriba-abajo permite percibir rápido con información ___.|incompleta|redundante|irrelevante",
      "Ver el dibujo ambiguo como una rata tras mirar imágenes de animales muestra la influencia de la experiencia ___.|inmediata|remota|ajena"
    ],
    tf: [
      "Las direcciones abajo-arriba y arriba-abajo actúan a la vez durante la percepción.|V",
      "El efecto de superioridad de la palabra es un ejemplo de procesamiento abajo-arriba.|F|Es arriba-abajo: el conocimiento léxico ayuda a resolver la letra.",
      "El procesamiento arriba-abajo es adaptativo, aunque produce errores sistemáticos cuando las expectativas fallan.|V",
      "En la figura rata-hombre, la interpretación depende sobre todo de los rasgos físicos del dibujo.|F|El dibujo es el mismo; lo que cambia la interpretación son las imágenes vistas antes (animales o caras)."
    ],
    q: [
      "Un autor revisa su propio artículo y no ve una errata evidente que un compañero detecta enseguida. ¿Qué lo explica mejor?|La anticipación de las palabras|Un fallo en la transducción visual|Un procesamiento abajo-arriba excesivo|Quien conoce el texto anticipa las palabras y lee con fluidez; por eso las erratas pasan inadvertidas.",
      "En el experimento de Palmer (1975), ¿cuándo se identificaba mejor un objeto presentado brevemente?|Cuando encajaba en la escena previa|Cuando aparecía sin escena previa|Cuando contrastaba con la escena|El contexto de escena facilita la identificación de los objetos congruentes con ella.",
      "¿Qué afirmación describe mejor la relación entre ambos tipos de procesamiento?|Actúan a la vez y se complementan|El arriba-abajo actúa solo si falla el otro|El abajo-arriba se limita a la retina|Sin entrada sensorial no hay percepción y, sin conocimiento, la entrada sería a menudo ambigua o incompleta.",
      "Una letra se reconoce mejor en «MESA» que en «XQTA». ¿Qué tipo de procesamiento lo explica?|Arriba-abajo, por el conocimiento léxico|Abajo-arriba, por el contraste de la letra|Abajo-arriba, por la posición en la serie|Es el efecto de superioridad de la palabra: el conocimiento léxico ayuda a resolver la letra."
    ],
    inc: [
      "Sobre el procesamiento arriba-abajo|Parte de la información que llega a los receptores|Incluye la influencia del contexto y las expectativas|Explica la lectura fluida de textos con erratas|Partir de la información de los receptores define al abajo-arriba; el arriba-abajo está guiado por el conocimiento."
    ],
    seq: [],
    cls: [
      "Tipo de procesamiento|Abajo-arriba: guiado por los datos; parte de los receptores|Arriba-abajo: superioridad de la palabra; figura rata-hombre; contexto de escena de Palmer"
    ] },
  { t: "Breve historia del estudio de la percepción",
    tip: "Weber (1834) y Fechner (1860) ponen las bases de la psicofísica; Helmholtz propone la inferencia inconsciente; Wundt abre el primer laboratorio (1879) con un enfoque estructuralista, al que la Gestalt responde con el fenómeno phi (Wertheimer, 1912). Después llegan el enfoque ecológico de Gibson, los detectores de rasgos de Hubel y Wiesel y el enfoque computacional de Marr. Desde los noventa, la neurociencia cognitiva recupera la inferencia en forma probabilística.",
    v: [
      "Ernst Weber=Halló que la diferencia mínima detectable es proporcional a la intensidad (1834)",
      "Gustav Fechner=Fundó la psicofísica con «Elementos de psicofísica» (1860)",
      "Hermann von Helmholtz=Percepción como inferencia inconsciente y teoría tricromática con Young",
      "Wilhelm Wundt=Primer laboratorio de psicología en Leipzig (1879) e introspección analítica",
      "Fenómeno phi=Movimiento aparente que estudió Wertheimer en 1912",
      "Affordance=Posibilidad de acción que un objeto ofrece a un observador",
      "Esbozo 2½D=Representación de superficies y profundidad desde el punto de vista del observador",
      "Hubel y Wiesel=Descubrieron neuronas visuales que responden a rasgos concretos (Nobel en 1981)"
    ],
    g: [
      "El primer laboratorio de psicología lo fundó Wundt en 1879 en ___.|Leipzig|Berlín|Viena",
      "Según Marr, el esbozo 2½D va precedido del esbozo ___.|primario|tridimensional|ecológico",
      "El enfoque ___ de Gibson incluye el flujo óptico, los invariantes y las affordances.|ecológico|computacional|estructuralista",
      "La Gestalt reaccionó contra el ___ de Wundt, que descomponía la experiencia en sensaciones elementales.|estructuralismo|funcionalismo|conductismo",
      "Marr propuso estudiar la visión en tres niveles: el problema, el algoritmo y la ___.|implementación|introspección|inferencia"
    ],
    tf: [
      "El movimiento aparente muestra que se percibe algo que no está en ninguno de los elementos por separado.|V",
      "El modelo 3D de Marr representa el objeto desde el punto de vista del observador.|F|Eso es el esbozo 2½D; el modelo 3D representa el objeto con independencia del punto de vista.",
      "El marco dominante hoy en investigación concibe la percepción como inferencia probabilística, lo que enlaza con Helmholtz.|V",
      "La noción de affordance procede del enfoque computacional de Marr.|F|Las affordances son un concepto de Gibson, dentro de su enfoque ecológico."
    ],
    q: [
      "Un investigador sostiene que una silla «ofrece» sentarse y que esa información se capta directamente. ¿Con qué autor se alinea?|Gibson|Helmholtz|Marr|La captación directa y las affordances son nociones del enfoque ecológico de Gibson.",
      "¿Qué orden de representaciones propuso Marr?|Esbozo primario, esbozo 2½D, modelo 3D|Esbozo 2½D, esbozo primario, modelo 3D|Modelo 3D, esbozo primario, esbozo 2½D|Primero bordes y contornos, luego superficies desde el punto de vista del observador y, al final, el objeto independiente de él.",
      "¿Qué fenómeno usó la Gestalt para criticar el estructuralismo?|El movimiento aparente|La inferencia inconsciente|El flujo óptico|Dos luces que se encienden sucesivamente producen movimiento, algo que no está en ninguno de los elementos.",
      "¿Qué aportación corresponde a Helmholtz?|Teoría tricromática, con Young|Ley logarítmica de la sensación|Primer laboratorio de psicología|Helmholtz propuso la inferencia inconsciente y, con Young, la teoría tricromática; la ley logarítmica es de Fechner."
    ],
    inc: [
      "Sobre la historia del estudio de la percepción|Hubel y Wiesel fundaron la psicofísica en 1860|Weber estudió la diferencia mínima detectable|Wertheimer estudió el fenómeno phi en 1912|La psicofísica nace con Fechner en 1860; Hubel y Wiesel describieron detectores de rasgos en la corteza visual."
    ],
    seq: [
      "Hitos del estudio de la percepción|Weber y la diferencia mínima>Fechner y la psicofísica>Inferencia inconsciente de Helmholtz>Laboratorio de Wundt>Fenómeno phi de Wertheimer>Detectores de Hubel y Wiesel>Vision de Marr>Modelos bayesianos y predictivos"
    ],
    cls: [] },
  { t: "La percepción como inferencia",
    tip: "La imagen retiniana es bidimensional y compatible con infinitos objetos: es el problema de la proyección inversa. Helmholtz lo resolvía con inferencias inconscientes; el enfoque bayesiano combina probabilidad previa y verosimilitud en una probabilidad posterior, y el procesamiento predictivo transmite sobre todo el error de predicción. Frente a ello, Gibson defiende la percepción directa; hoy muchos manuales ven ambos enfoques como complementarios.",
    v: [
      "Proyección inversa=Problema de que una misma imagen retiniana es compatible con muchos objetos",
      "Inferencia inconsciente=Deducción del objeto más probable sin que el observador lo advierta",
      "Probabilidad previa=Lo probable que es cada interpretación según la experiencia y el entorno",
      "Verosimilitud=Grado en que la imagen actual es compatible con cada interpretación",
      "Probabilidad posterior=Combinación de previa y verosimilitud; se percibe la que la maximiza",
      "Error de predicción=Diferencia entre lo esperado y lo recibido, que se transmite hacia arriba",
      "Flujo óptico=Expansión de los elementos desde el punto hacia el que uno se desplaza",
      "Invariantes=Información de la luz que especifica sin ambigüedad la disposición del entorno"
    ],
    g: [
      "Una mancha circular más clara por arriba se ve como un ___.|relieve|hueco|reflejo",
      "El sistema visual asume que la luz suele venir de ___.|arriba|abajo|lado",
      "En el procesamiento predictivo, lo que se transmite hacia arriba es sobre todo el ___ de predicción.|error|modelo|acierto",
      "Para Gibson, la ambigüedad perceptiva es sobre todo un problema de ___.|laboratorio|aprendizaje|transducción",
      "Un plato redondo inclinado y una bandeja ovalada vista de frente proyectan la misma ___.|elipse|sombra|textura"
    ],
    tf: [
      "Según el enfoque bayesiano, se percibe la interpretación con mayor probabilidad posterior.|V",
      "En el procesamiento predictivo, lo que se transmite hacia arriba es sobre todo la entrada sensorial completa.|F|Se transmite sobre todo el error de predicción, la diferencia entre lo esperado y lo recibido.",
      "Muchos manuales presentan hoy la inferencia y la percepción directa como enfoques complementarios.|V",
      "La percepción directa de Gibson es hoy el marco mayoritario en la investigación sobre percepción.|F|El marco mayoritario es el bayesiano; el ecológico sigue influyendo en el estudio de la relación entre percepción y acción."
    ],
    q: [
      "Se presenta una mancha circular más clara por abajo y el observador la ve como un hueco. ¿Qué lo explica según el enfoque bayesiano?|La previa de que la luz viene de arriba|La verosimilitud nula del relieve|La ausencia de invariantes en la imagen|El sistema asume que la luz suele venir de arriba; con esa probabilidad previa, la parte clara abajo indica una concavidad.",
      "¿Qué dos fuentes de información combina el enfoque bayesiano?|Probabilidad previa y verosimilitud|Error de predicción y affordances|Flujo óptico e invariantes|La previa resume la experiencia y la verosimilitud la compatibilidad con la imagen; juntas dan la probabilidad posterior.",
      "Un conductor ve que los elementos del paisaje se expanden desde el punto al que se dirige. Para Gibson, esta información…|especifica directamente su dirección|requiere una inferencia inconsciente|es ambigua sin conocimiento previo|Según la percepción directa, el flujo óptico especifica la dirección del desplazamiento sin necesidad de inferencias.",
      "¿Qué afirmación sobre el debate entre inferencia y percepción directa es correcta?|Muchos manuales los ven complementarios|La percepción directa quedó ya refutada|El enfoque bayesiano quedó superado|El marco bayesiano domina en investigación y el ecológico sigue siendo influyente en la relación entre percepción y acción."
    ],
    inc: [
      "Sobre la percepción como inferencia|Para Gibson, la luz necesita completarse con inferencias|Helmholtz habló de inferencias inconscientes|El procesamiento predictivo usa errores para actualizar el modelo|Gibson sostenía lo contrario: la luz contiene invariantes que especifican el entorno sin necesidad de inferencias."
    ],
    seq: [],
    cls: [
      "Enfoque|Inferencia: Helmholtz; probabilidad previa; error de predicción|Percepción directa: Gibson; flujo óptico; invariantes"
    ] }
] },
{ n: 2, t: "Psicofísica clásica", cap: 1, pir: "alta", mods: [
  { t: "Umbral absoluto y umbral diferencial",
    tip: "El umbral absoluto es la intensidad mínima detectable, pero no es una frontera nítida: la proporción de detecciones crece de forma gradual (función psicométrica) y, por convención, el umbral es el valor detectado el 50 % de las veces. El umbral diferencial o DAP es la diferencia mínima entre un estándar y un estímulo de comparación detectada el 50 % de las veces, y depende del estímulo de partida.",
    v: [
      "Psicofísica=Estudio cuantitativo de la relación entre el estímulo físico y la experiencia",
      "Umbral absoluto=Intensidad mínima detectada el 50 % de las veces",
      "Función psicométrica=Curva en S entre la intensidad y la proporción de detecciones",
      "DAP=Diferencia mínima entre dos estímulos detectada el 50 % de las veces",
      "Estímulo estándar=Valor fijo con el que se comparan los demás para medir la DAP",
      "Estímulo de comparación=Valor algo mayor o menor que se contrasta con el de referencia",
      "Hecht, Shlaer y Pirenne=Estimaron que bastan unos 5–14 fotones absorbidos para ver un destello",
      "Galanter (1962)=Autor de los ejemplos clásicos de umbrales absolutos de los sentidos"
    ],
    g: [
      "Por convención, el umbral absoluto es la intensidad que se detecta en el ___ de los ensayos.|50 %|75 %|100 %",
      "Al aumentar la intensidad, la proporción de detecciones dibuja una ___.|curva en S|línea recta|campana",
      "El término psicofísica lo acuñó ___ en 1860.|Fechner|Weber|Wundt",
      "Hecht, Shlaer y Pirenne estimaron que bastan unos 5–14 ___ absorbidos por los bastones.|fotones|lúmenes|fosfenos",
      "Fechner imaginaba el umbral como una frontera ___, idea que los datos no confirman.|nítida|gradual|estadística"
    ],
    tf: [
      "Un estímulo algo por debajo del umbral absoluto puede detectarse en algunos ensayos.|V",
      "La DAP es una cantidad fija para cada sentido, independiente del estímulo de partida.|F|Weber observó que la DAP depende del estímulo estándar: es proporcional a su intensidad.",
      "El umbral se define de forma estadística porque la detección de un mismo estímulo débil varía entre ensayos.|V",
      "El valor del umbral absoluto es independiente del método psicofísico y de la disposición del observador.|F|Depende del método empleado y de lo dispuesto que esté el observador a responder «sí»."
    ],
    q: [
      "Un estímulo de intensidad 12 se detecta en el 30 % de los ensayos, y otro de intensidad 15, en el 50 %. ¿Cuál es el umbral absoluto?|15|12|13,5|El umbral absoluto es, por convención, la intensidad que se detecta el 50 % de las veces.",
      "¿Qué mostraron los datos frente a la idea de umbral de Fechner?|Que la detección aumenta gradualmente|Que el umbral es una frontera nítida|Que el umbral no depende del método|Las detecciones crecen poco a poco con la intensidad, así que el umbral es un punto estadístico y no un corte.",
      "En una prueba de discriminación de pesos, el estímulo de 100 g que se mantiene fijo en todos los ensayos es…|el estímulo estándar|el estímulo de comparación|el umbral absoluto|La DAP se mide comparando un estándar fijo con estímulos de comparación algo mayores o menores.",
      "¿Cómo se define el umbral diferencial?|Diferencia mínima detectada el 50 % de las veces|Intensidad mínima detectada el 50 % de las veces|Diferencia máxima que pasa siempre inadvertida|Es la DAP, la mínima diferencia entre dos estímulos detectada en la mitad de los ensayos; la intensidad mínima es el umbral absoluto."
    ],
    inc: [
      "Sobre los umbrales|El umbral absoluto es la intensidad detectada el 75 % de las veces|La función psicométrica crece de forma gradual|Un estímulo supraumbral puede pasar inadvertido|Por convención, el umbral absoluto es la intensidad detectada el 50 % de las veces; el 75 % se usa para calcular la DAP."
    ],
    seq: [],
    cls: [] },
  { t: "Leyes de Weber y de Fechner",
    tip: "Según la ley de Weber, la DAP es una proporción constante del estándar (ΔI / I igual a k); cuanto menor es k, más fina es la discriminación, y la ley falla en los extremos de intensidad. Fechner supuso que todas las DAP son subjetivamente iguales y dedujo que la sensación crece con el logaritmo de la intensidad (S igual a k · log I). Ese supuesto es discutible y no se comprobó directamente.",
    v: [
      "Ley de Weber=La diferencia apenas perceptible es una proporción constante del estándar",
      "Fracción de Weber=Constante k, cociente entre la DAP y la intensidad del estándar",
      "Ley de Fechner=La sensación crece con el logaritmo de la intensidad",
      "Supuesto de Fechner=Todas las DAP son subjetivamente iguales",
      "Discriminación relativa=Lo que se detecta es una diferencia proporcional, no absoluta",
      "Descarga eléctrica=Continuo con la fracción de Weber más baja de la tabla, en torno a 0,01",
      "Intensidad luminosa=Continuo con una fracción de Weber aproximada de 0,08, como el salado",
      "Escala de decibelios=Medida sonora que refleja la idea de compresión logarítmica"
    ],
    g: [
      "Si para 100 g la DAP es 2 g, para un estándar de 1 000 g será de unos ___.|20 g|2 g|200 g",
      "Cuanto ___ es la fracción de Weber, más fina es la discriminación en ese continuo.|menor|mayor|más variable",
      "La ley de Weber se cumple bien en la zona ___ de intensidades.|media|baja|alta",
      "Según Fechner, la sensación crece de forma ___ con la intensidad.|logarítmica|lineal|exponencial",
      "El peso levantado tiene una fracción de Weber aproximada de ___.|0,02|0,08|0,20"
    ],
    tf: [
      "Con estímulos muy débiles o muy intensos, la fracción de Weber aumenta.|V",
      "Según la ley de Weber, la DAP es la misma cantidad absoluta para cualquier estándar.|F|Es una proporción constante del estándar: si el estándar se multiplica por diez, la DAP también.",
      "Según Fechner, para que la sensación suba en pasos iguales la intensidad debe multiplicarse por un mismo factor.|V",
      "Fechner comprobó directamente que todas las DAP son subjetivamente iguales.|F|Es un supuesto discutible que no se comprobó directamente; de él dedujo Fechner su ley logarítmica."
    ],
    q: [
      "Una persona detecta 4 g de diferencia sobre un estándar de 200 g. Si se cumple la ley de Weber, ¿qué DAP tendrá con un estándar de 50 g?|1 g|4 g|0,4 g|k vale 4 / 200, es decir, 0,02; y 0,02 · 50 da 1 g.",
      "Con un estándar de 500 g y una fracción de Weber de 0,02, la DAP esperada es de…|10 g|2 g|25 g|0,02 · 500 da 10 g: la ley de Weber predice una diferencia relativa constante.",
      "¿Qué continuo permite la discriminación más fina según las fracciones de Weber de manual?|La descarga eléctrica|La intensidad luminosa|La intensidad sonora|Su fracción ronda 0,01, frente a 0,04 del sonido y 0,08 de la luz; cuanto menor es k, más fina es la discriminación.",
      "¿Qué crítica se hace a la ley de Fechner?|Que su supuesto central es discutible|Que contradice la ley de Weber|Que exige la estimación de magnitudes|Parte de que todas las DAP valen lo mismo subjetivamente, algo no comprobado; además, no toda sensación crece comprimida."
    ],
    inc: [
      "Sobre las leyes de Weber y de Fechner|Fechner predice un crecimiento lineal de la sensación|La ley de Fechner parte de la ley de Weber|La ley de Weber falla en los extremos de intensidad|Fechner predice un crecimiento logarítmico, comprimido: rápido al principio y cada vez más lento."
    ],
    seq: [
      "Razonamiento de Fechner|Partir de la ley de Weber>Suponer que todas las DAP son subjetivamente iguales>Contar DAP equivale a medir sensación>Deducir la ley logarítmica"
    ],
    cls: [] },
  { t: "Ley potencial de Stevens",
    tip: "Stevens (1957) midió la magnitud percibida preguntándola directamente, con la estimación de magnitudes, y halló una función potencial: S igual a k · Iⁿ. Con n menor que 1 hay compresión (brillo, sonoridad), con n cercano a 1, relación lineal (longitud, frío), y con n mayor que 1, expansión (pesadez, calor, descarga eléctrica). Al duplicar la intensidad, la sensación se multiplica por 2ⁿ.",
    v: [
      "Estimación de magnitudes=Asignar números proporcionales a lo intenso que parece cada estímulo",
      "Exponente n=Parámetro que caracteriza cómo crece la sensación en cada continuo",
      "Compresión=La sensación crece más despacio que la intensidad (n menor que 1)",
      "Expansión=La sensación crece más deprisa que la intensidad (n mayor que 1)",
      "Brillo=Continuo con exponente en torno a 0,33",
      "Descarga eléctrica=Continuo con exponente en torno a 3,5",
      "Longitud visual=Continuo con exponente 1, de relación lineal",
      "Coordenadas logarítmicas=Representación en la que la función potencial es una recta de pendiente n"
    ],
    g: [
      "En la ley de Stevens, un exponente menor que 1 indica ___.|compresión|expansión|linealidad",
      "Si la referencia vale 10 y un estímulo parece el doble de intenso, el observador debe decir ___.|20|5|12",
      "La ___ del dolor por descarga eléctrica hace que pequeños aumentos se noten mucho.|expansión|compresión|habituación",
      "La sonoridad de un tono de 3 000 Hz tiene un exponente aproximado de ___.|0,67|1,45|3,5",
      "En coordenadas logarítmicas, la pendiente de la recta es el ___.|exponente|umbral|criterio"
    ],
    tf: [
      "Al duplicar la intensidad de un punto luminoso, su brillo parece aproximadamente un 26 % mayor.|V",
      "Un exponente de Stevens menor que 1, como el del brillo, indica expansión.|F|Indica compresión: la sensación crece más despacio que la intensidad; la expansión corresponde a n mayor que 1.",
      "Duplicar la intensidad de una descarga eléctrica la hace parecer unas once veces más intensa.|V",
      "La pesadez, con un exponente en torno a 1,45, muestra compresión.|F|Con n mayor que 1 hay expansión; ejemplos de compresión son el brillo, el olor y la sonoridad."
    ],
    q: [
      "Si se duplica la intensidad de un tono de 3 000 Hz (n ≈ 0,67), ¿cuánto aumenta aproximadamente su sonoridad?|Se multiplica por 1,6|Se multiplica por 2|Se multiplica por 1,3|2 elevado a 0,67 da unos 1,59: la sonoridad crece, pero menos que la intensidad, porque hay compresión.",
      "¿Qué ventaja adaptativa tiene la compresión del brillo y la sonoridad?|Manejar rangos enormes sin saturarse|Notar mucho los aumentos peligrosos|Discriminar mejor las intensidades medias|La compresión permite cubrir rangos de intensidad enormes; notar mucho los pequeños aumentos es la ventaja de la expansión.",
      "Un participante estima el calor de un estímulo térmico (n ≈ 1,6). Si la intensidad física se duplica, el calor percibido…|se multiplica aproximadamente por 3|se duplica, como la intensidad|se multiplica aproximadamente por 1,5|2 elevado a 1,6 da unos 3,03: con un exponente mayor que 1, la sensación crece más deprisa que la intensidad.",
      "¿Qué diferencia metodológica separa a Stevens de Fechner?|Stevens pide estimar la magnitud directamente|Stevens cuenta DAP para medir la sensación|Stevens usa sobre todo el método de límites|Fechner derivaba la sensación sumando DAP; Stevens la preguntaba directamente mediante la estimación de magnitudes."
    ],
    inc: [
      "Sobre la ley de Stevens|El olor del café muestra expansión|La longitud visual tiene un exponente cercano a 1|El frío se comporta de forma lineal|El olor del café tiene n ≈ 0,55: crece más despacio que la intensidad, es decir, muestra compresión."
    ],
    seq: [],
    cls: [
      "Exponente de Stevens|Compresión: brillo; olor del café; sonoridad|Lineal: longitud visual; frío|Expansión: pesadez; calor; descarga eléctrica"
    ] },
  { t: "Métodos psicofísicos",
    tip: "Fechner propuso tres métodos. En el de límites se alternan series ascendentes y descendentes para compensar los errores de habituación y de anticipación. El de estímulos constantes presenta de 5 a 9 valores en orden aleatorio: es el más preciso y el más lento. En el de ajuste el observador controla el estímulo: es el más rápido y el menos preciso. Los métodos adaptativos de escalera (PEST, QUEST) concentran los ensayos cerca del umbral.",
    v: [
      "Método de los límites=Series ascendentes y descendentes hasta que cambia la respuesta",
      "Estímulos constantes=Entre 5 y 9 intensidades fijas presentadas muchas veces en orden aleatorio",
      "Método de ajuste=El observador modifica la intensidad hasta el umbral o la igualdad",
      "Error de habituación=Tendencia a mantener la respuesta anterior, que retrasa el cambio",
      "Error de anticipación=Tendencia a cambiar de respuesta antes de tiempo por expectativa",
      "Punto de igualdad subjetiva=Valor de comparación que se juzga «mayor» el 50 % de las veces",
      "Método de escalera=La intensidad baja tras detectar y sube tras omitir, rondando el umbral",
      "QUEST=Procedimiento que estima el umbral de forma estadística ensayo a ensayo"
    ],
    g: [
      "El método de ___ es el más rápido y el más cercano a la vida real.|ajuste|límites|escalera",
      "El método de estímulos constantes presenta los valores en orden ___.|aleatorio|ascendente|descendente",
      "Seguir respondiendo «sí» en una serie descendente cuando ya no se percibe el estímulo es un error de ___.|habituación|anticipación|tendencia central",
      "La DAP se calcula como la ___ de la distancia entre los puntos del 75 % y del 25 %.|mitad|cuarta parte|totalidad",
      "En los métodos de escalera, la intensidad ___ tras una detección.|baja|sube|se mantiene"
    ],
    tf: [
      "En el método de los límites se alternan series ascendentes y descendentes para compensar los errores de habituación y anticipación.|V",
      "El método de ajuste es el más preciso porque el propio observador controla el estímulo.|F|El ajuste es el más rápido pero el menos preciso; el más preciso es el de estímulos constantes.",
      "Los métodos adaptativos son los más usados hoy en audiometría y campimetría.|V",
      "El error de anticipación consiste en seguir dando la misma respuesta que en los ensayos anteriores.|F|Eso es el error de habituación o perseveración; la anticipación consiste en cambiar de respuesta antes de tiempo."
    ],
    q: [
      "En una serie ascendente, un observador dice «sí» antes de que el tono sea audible porque espera que ya toque. ¿Qué error comete?|Anticipación|Habituación|Tendencia central|Cambiar la respuesta antes de tiempo porque se espera que el cambio esté cerca es el error de anticipación.",
      "Un estímulo de comparación se juzga «mayor» el 25 % de las veces a 96 g y el 75 % a 104 g. ¿Cuál es la DAP?|4 g|8 g|2 g|La DAP es la mitad de la distancia entre los puntos del 75 % y del 25 %: (104 − 96) / 2 da 4 g.",
      "¿Qué método deja el control del estímulo en manos del observador?|El de ajuste|El de los límites|El de estímulos constantes|En el ajuste el observador mueve el mando; en los otros dos, el experimentador presenta los valores.",
      "Una audióloga necesita estimar umbrales en poco tiempo y con buena precisión. ¿Qué opción es la habitual hoy?|Un método adaptativo de escalera|El método de estímulos constantes|El método de ajuste libre|Las escaleras como PEST o QUEST concentran los ensayos alrededor del umbral y ahorran mucho tiempo."
    ],
    inc: [
      "Sobre los métodos psicofísicos|Los estímulos constantes favorecen la anticipación|El de ajuste es el más rápido y el menos preciso|El de límites alterna series para compensar errores|Al presentar los valores en orden aleatorio, el de estímulos constantes es el que menos se ve afectado por las expectativas."
    ],
    seq: [],
    cls: [
      "Método psicofísico|Límites: series ordenadas; errores de habituación y anticipación|Estímulos constantes: orden aleatorio; máxima precisión|Ajuste: control del observador; máxima rapidez"
    ] }
] },
{ n: 3, t: "Teoría de detección de señales", cap: 1, pir: "alta", mods: [
  { t: "Los límites del umbral y los supuestos de la TDS",
    tip: "El umbral clásico mezcla lo que el observador percibe con lo dispuesto que está a decir que lo percibe. La TDS, llegada de la ingeniería de radar (Tanner y Swets, 1954; Green y Swets, 1966), supone que siempre hay ruido, que la actividad interna en los ensayos de ruido y de señal + ruido sigue distribuciones normales y que un proceso sensorial (sensibilidad) y otro de decisión (criterio) son independientes. Por eso incluye ensayos sin señal.",
    v: [
      "TDS=Teoría que separa la sensibilidad del observador de su criterio de respuesta",
      "Ruido=Actividad sensorial de fondo presente aunque no haya señal",
      "Distribución R=Actividad interna en los ensayos en que no se presenta estímulo",
      "Distribución SR=Actividad interna en ensayos con estímulo, desplazada a valores mayores",
      "Sensibilidad=Separación entre las distribuciones, fijada por el proceso sensorial",
      "Criterio=Punto de corte por encima del cual el observador responde «sí»",
      "Ensayos de captura=Ensayos sin señal mezclados con los que sí la contienen",
      "Green y Swets (1966)=Obra de exposición clásica de la teoría de detección"
    ],
    g: [
      "La TDS surgió en la ingeniería de ___.|radar|sonido|telefonía",
      "Según la TDS, el observador no decide entre algo y nada, sino entre ruido y señal + ___.|ruido|criterio|umbral",
      "En el modelo básico, las distribuciones de ruido y de señal + ruido tienen la misma ___.|varianza|media|probabilidad",
      "Tanner y ___ aplicaron la teoría de detección a la percepción en 1954.|Swets|Green|Stevens",
      "Para aplicar la TDS se mezclan ensayos con señal y ensayos en ___.|blanco|serie|escalera"
    ],
    tf: [
      "Según la TDS, incluso sin estímulo hay actividad sensorial de fondo.|V",
      "La TDS supone que la sensibilidad y el criterio dependen de un mismo proceso.|F|Son dos procesos independientes: uno sensorial, que separa las distribuciones, y otro de decisión, que fija el criterio.",
      "Con el umbral clásico, un observador que dice «sí» con facilidad puede parecer más sensible sin serlo.|V",
      "Los métodos clásicos ya registraban de forma sistemática las respuestas «sí» en ensayos sin señal.|F|Apenas las registraban; la TDS incluye ensayos en blanco para saber cuántas veces se dice «sí» sin señal."
    ],
    q: [
      "Dos personas con el mismo oído escuchan tonos débiles; una dice «sí» en cuanto le parece oír algo y la otra solo si está segura. Con el umbral clásico…|la primera parecerá más sensible|ambas tendrán el mismo umbral|la segunda parecerá más sensible|El umbral clásico mezcla percepción y disposición a responder: decir «sí» con facilidad baja el umbral aparente.",
      "¿Qué determina, según la TDS, la ejecución en una tarea de detección?|La sensibilidad y el criterio|El umbral y la fracción de Weber|La atención y la memoria de trabajo|Son los dos procesos independientes del modelo; esta cuestión apareció en el PIR de 2025.",
      "¿Por qué un experimento de TDS incluye ensayos sin señal?|Para medir los «sí» cuando no hay señal|Para ajustar la intensidad al umbral|Para que descanse la atención del observador|Sin ensayos en blanco no se pueden calcular las falsas alarmas, necesarias para separar sensibilidad y criterio.",
      "¿Qué representa la distancia entre las distribuciones R y SR?|La sensibilidad|El criterio|El sesgo de respuesta|La separación la fija el proceso sensorial; el criterio es el punto de corte que fija el proceso de decisión."
    ],
    inc: [
      "Sobre los supuestos de la TDS|El ruido aparece solo en ensayos sin señal|La actividad interna se representa con dos normales|El criterio lo fija un proceso de decisión|El ruido está siempre presente; en los ensayos con señal la actividad corresponde a señal + ruido."
    ],
    seq: [],
    cls: [
      "Proceso de la TDS|Sensorial: separación de las distribuciones; sensibilidad|Decisión: punto de corte; criterio de respuesta"
    ] },
  { t: "La matriz de respuestas y la sensibilidad (d′)",
    tip: "Cada ensayo cae en una casilla: acierto, omisión, falsa alarma o rechazo correcto. Las tasas se calculan por filas, así que basta con la tasa de aciertos (H) y la de falsas alarmas (FA). La sensibilidad d′ es z(H) − z(FA): vale 0 cuando H y FA coinciden y crece al separarse las distribuciones. Depende de factores sensoriales, no de lo que el observador gane o pierda.",
    v: [
      "Acierto=Responder «sí» cuando la señal está presente",
      "Omisión=Responder «no» cuando la señal está presente",
      "Falsa alarma=Responder «sí» cuando la señal está ausente",
      "Rechazo correcto=Responder «no» cuando la señal está ausente",
      "d′=Distancia entre las medias de R y SR en desviaciones típicas",
      "d′ nula=Solapamiento completo; tasa de aciertos igual a la de falsas alarmas",
      "Corrección de tasas=Ajuste previo cuando H vale 1 o FA vale 0, que darían z infinita",
      "Puntuación z=Transformación de cada tasa mediante la inversa de la normal"
    ],
    g: [
      "La tasa de aciertos más la de ___ suma 1.|omisiones|falsas alarmas|rechazos correctos",
      "Si H vale 0,84 y FA vale 0,16, d′ vale aproximadamente ___.|2|1|0",
      "Si la tasa de aciertos es igual a la de falsas alarmas, d′ vale ___.|0|1|0,5",
      "La sensibilidad depende de factores ___, como la claridad de la señal o la fatiga.|sensoriales|motivacionales|económicos",
      "Valores de d′ en torno a ___ indican una detección buena.|2–3|0–0,5|0,5–1"
    ],
    tf: [
      "Responder «no» cuando no hay señal es un rechazo correcto.|V",
      "Ofrecer más dinero por cada acierto aumenta la d′ del observador.|F|Los pagos cambian el criterio, no la sensibilidad, que depende de factores sensoriales.",
      "El entrenamiento perceptivo puede modificar d′.|V",
      "Para describir la ejecución completa hacen falta las cuatro tasas, porque son independientes entre sí.|F|Las tasas se calculan por filas y suman 1 de dos en dos; basta con la de aciertos y la de falsas alarmas."
    ],
    q: [
      "Una radióloga detecta el 60 % de los tumores con un 5 % de falsas alarmas, y un colega el 95 % con un 40 %. ¿Qué se concluye?|Tienen la misma sensibilidad|El colega es más sensible|Ella es más sensible|z(0,60) − z(0,05) y z(0,95) − z(0,40) dan ambos unos 1,90: ven igual de bien y difieren en el criterio.",
      "Un observador acierta el 69 % de las señales con un 31 % de falsas alarmas. ¿Cuál es su d′ aproximada?|1|0,38|2|z(0,69) ≈ 0,50 y z(0,31) ≈ −0,50; la diferencia es aproximadamente 1, una detección moderada.",
      "¿Cuál de estos factores modifica d′?|La fatiga sensorial|La matriz de pagos|La probabilidad de la señal|La sensibilidad depende del estado sensorial, la claridad de la señal, el ruido y el entrenamiento; pagos y probabilidad mueven el criterio.",
      "¿Por qué la tasa de aciertos por sí sola no mide la sensibilidad?|Porque sube al relajar el criterio|Porque depende del ruido externo|Porque no admite puntuaciones z|Un criterio laxo aumenta los aciertos a costa de más falsas alarmas; d′ combina ambas tasas."
    ],
    inc: [
      "Sobre la matriz de respuestas|Una omisión es responder «sí» sin señal|Un acierto es responder «sí» con señal|Un rechazo correcto es responder «no» sin señal|Responder «sí» sin señal es una falsa alarma; la omisión es responder «no» cuando hay señal."
    ],
    seq: [],
    cls: [
      "Casillas de la matriz|Hay señal: acierto; omisión|No hay señal: falsa alarma; rechazo correcto"
    ] },
  { t: "El criterio de respuesta",
    tip: "El criterio es el punto de corte sobre la actividad interna. Uno conservador da pocas falsas alarmas y menos aciertos; uno liberal, más aciertos y más falsas alarmas. Moverlo no cambia d′. Cuidado con los índices: c es positivo si es conservador y negativo si es liberal; β es mayor que 1 si es conservador y menor que 1 si es liberal. Lo mueven la probabilidad a priori de la señal, la matriz de pagos, las instrucciones y la motivación.",
    v: [
      "Criterio conservador=Decir «sí» solo con mucha evidencia; pocas falsas alarmas",
      "Criterio liberal=Decir «sí» con poca evidencia; más aciertos y más falsas alarmas",
      "Índice c=Menos la mitad de la suma de z(H) y z(FA)",
      "β=Razón entre las alturas de las curvas SR y R en el punto de corte",
      "Criterio neutral=c igual a 0 o β igual a 1",
      "Matriz de pagos=Ganancias y pérdidas asociadas a cada tipo de respuesta",
      "Probabilidad a priori=Frecuencia previa de la señal, que desplaza el punto de corte",
      "β óptimo=Valor del criterio que maximiza la ganancia esperada"
    ],
    g: [
      "Un β igual a 3 indica un criterio ___.|conservador|liberal|neutral",
      "Un valor de c negativo indica un criterio ___.|liberal|conservador|neutral",
      "Si la señal es rara, conviene un criterio más ___.|conservador|liberal|sensible",
      "Cuando no ver un tumor es muy costoso, el criterio se vuelve ___.|liberal|conservador|neutral",
      "Mover el criterio no cambia d′: solo intercambia un tipo de ___ por otro.|error|señal|estímulo"
    ],
    tf: [
      "Un valor de c de 0,7 indica un criterio conservador.|V",
      "Un β de 0,5 indica un criterio conservador, porque es un valor positivo.|F|β menor que 1 indica criterio liberal; es en el índice c donde los valores positivos son conservadores.",
      "Si la señal y el ruido son igual de probables y todos los resultados valen lo mismo, β óptimo vale 1.|V",
      "Cuando condenar a un inocente se considera muy costoso, el jurado tiende a un criterio más liberal.|F|Si lo costoso es la falsa alarma, el criterio se vuelve conservador: hace falta más evidencia para decir «sí»."
    ],
    q: [
      "Un observador obtiene H de 0,93 y FA de 0,50; otro, H de 0,50 y FA de 0,07. ¿Qué los diferencia?|El criterio, con igual sensibilidad|La sensibilidad, con igual criterio|Tanto la sensibilidad como el criterio|Ambos tienen d′ ≈ 1,48; el primero tiene c ≈ −0,74 (liberal) y el segundo c ≈ +0,74 (conservador).",
      "Un controlador aéreo recibe la instrucción de no dejar pasar ninguna posible colisión, aunque genere alertas innecesarias. ¿Qué ocurrirá?|Su criterio se hará más liberal|Su d′ aumentará|Su criterio se hará más conservador|Si la omisión es muy costosa, el observador baja el criterio: más aciertos y más falsas alarmas, con la misma sensibilidad.",
      "¿Qué combinación de índices indica un criterio conservador?|c mayor que 0 y β mayor que 1|c menor que 0 y β mayor que 1|c mayor que 0 y β menor que 1|En el criterio conservador c es positivo y β supera 1; los dos índices tienen referencias neutrales distintas (0 y 1).",
      "Según la fórmula del β óptimo, si la señal se vuelve más frecuente, el criterio óptimo…|se desplaza hacia lo liberal|se desplaza hacia lo conservador|permanece en el valor neutral|Al aumentar P(SR), el cociente P(R) / P(SR) baja y también β óptimo: conviene decir «sí» con menos evidencia."
    ],
    inc: [
      "Sobre el criterio de respuesta|Un criterio liberal reduce las falsas alarmas|Las instrucciones pueden desplazar el criterio|Un criterio conservador reduce los aciertos|El criterio liberal aumenta los aciertos, pero también las falsas alarmas."
    ],
    seq: [],
    cls: [
      "Tipo de criterio|Conservador: c positivo; β mayor que 1; pocas falsas alarmas|Liberal: c negativo; β menor que 1; muchos aciertos"
    ] },
  { t: "Curvas ROC y aplicaciones",
    tip: "La curva ROC (COR) representa los aciertos frente a las falsas alarmas cuando solo cambia el criterio; por eso es una curva de isosensibilidad. La diagonal indica d′ nula, la curvatura indica la sensibilidad y la posición sobre la curva, el criterio. El área bajo la curva va de 0,5 (azar) a 1 y no depende del criterio. Se aplica al diagnóstico, el testimonio, la vigilancia y la memoria de reconocimiento.",
    v: [
      "Curva ROC=Aciertos frente a falsas alarmas al variar el criterio con sensibilidad fija",
      "Isosensibilidad=Propiedad de los puntos de una ROC, que comparten la misma d′",
      "Diagonal de la ROC=Línea en que aciertos y falsas alarmas coinciden, propia del azar",
      "Área bajo la curva=Índice de sensibilidad independiente del criterio, entre 0,5 y 1",
      "Escala de confianza=Calificaciones en que cada nivel funciona como un criterio distinto",
      "Elección forzada=Elegir cuál de dos intervalos contenía la señal, sin poder decir «no»",
      "Sensibilidad de una prueba=Tasa de aciertos de un test diagnóstico",
      "Especificidad=Tasa de rechazos correctos de una prueba diagnóstica"
    ],
    g: [
      "Con varianzas iguales, una d′ de 1 corresponde a un área bajo la curva de unos ___.|0,76|0,50|0,92",
      "El punto de una ROC más cercano al origen corresponde a un criterio ___.|conservador|liberal|neutral",
      "En una prueba diagnóstica, el ___ funciona como un criterio de la TDS.|punto de corte|área bajo la curva|valor de d′",
      "En la elección forzada entre dos alternativas, la proporción de aciertos equivale al ___ bajo la curva ROC.|área|punto|criterio",
      "La especificidad de una prueba es su tasa de ___.|rechazos correctos|falsas alarmas|aciertos"
    ],
    tf: [
      "Desplazarse a lo largo de una misma curva ROC cambia el criterio pero no la sensibilidad.|V",
      "Un área bajo la curva ROC de 0,5 indica una detección perfecta.|F|0,5 corresponde al azar (la diagonal); la detección perfecta da un área de 1.",
      "Un testigo con buena memoria puede identificar a un inocente en una rueda si su criterio es laxo.|V",
      "Cuanto más se arquea la curva ROC hacia la esquina inferior derecha, mayor es d′.|F|La curva con mayor d′ se arquea hacia la esquina superior izquierda: muchos aciertos con pocas falsas alarmas."
    ],
    q: [
      "Un testigo tiene buena memoria (d′ alto), pero señala a alguien en una rueda en la que no está el culpable. ¿Qué lo explica mejor?|Un criterio laxo|Una sensibilidad baja|Un área bajo la curva de 0,5|Aun con buena memoria, un criterio liberal lleva a identificar a alguien aunque el culpable no esté.",
      "¿Cuál es la forma más eficiente de obtener varios puntos de una curva ROC?|Pedir calificaciones de confianza|Cambiar los pagos en varios bloques|Aumentar la intensidad de la señal|Cada nivel de confianza funciona como un criterio distinto; cambiar la intensidad cambiaría d′, no el criterio.",
      "Un hospital compara dos pruebas de cribado para elegir la mejor. ¿Qué índice conviene usar?|El área bajo la curva ROC|La tasa de aciertos de cada prueba|La especificidad de cada prueba|El área no depende del punto de corte; las tasas de aciertos o de rechazos varían según dónde se fije.",
      "¿Por qué la elección forzada entre dos alternativas elimina el sesgo hacia el «sí»?|Porque no se puede responder «no»|Porque aumenta la intensidad de la señal|Porque fija el criterio en un β de 3|El observador siempre elige un intervalo; sin opción de negar, el sesgo desaparece y los aciertos equivalen al área bajo la curva."
    ],
    inc: [
      "Sobre la lectura de una curva ROC|Su curvatura indica el criterio|La diagonal indica sensibilidad nula|Su área no depende del criterio|La curvatura indica la sensibilidad; el criterio lo indica la posición del punto sobre la curva."
    ],
    seq: [],
    cls: [] }
] },
{ n: 4, t: "Objetos, Gestalt y codificación neural", cap: 1, pir: "media", mods: [
  { t: "Organización perceptiva: la Gestalt",
    tip: "La Gestalt (Wertheimer, Köhler y Koffka) sostiene que el todo es distinto de la suma de las partes y que cada patrón se percibe de la forma más simple posible (ley de la pregnancia). Sus leyes de agrupamiento incluyen proximidad, semejanza, cierre, buena continuidad, destino común, simetría y familiaridad; Palmer añadió la región común y, con Rock, la conexión uniforme. Hoy se ven como heurísticos probabilísticos que describen más de lo que explican.",
    v: [
      "Pregnancia=Cada patrón se percibe de la manera más simple posible",
      "Proximidad=Se agrupan los elementos más cercanos entre sí",
      "Semejanza=Se agrupan los elementos parecidos en color, forma o tamaño",
      "Cierre=Se completa una figura aunque tenga huecos",
      "Buena continuidad=Se agrupan los elementos que siguen una línea o curva suave",
      "Destino común=Se agrupan los elementos que se mueven en la misma dirección",
      "Región común=Se agrupan los elementos situados dentro de una misma zona delimitada",
      "Conexión uniforme=Se agrupan los elementos unidos por un elemento continuo"
    ],
    g: [
      "Rubin (1915) ilustró la relación figura-fondo con su figura del jarrón y las dos ___.|caras|manos|copas",
      "En el triángulo de ___ se ve un contorno que no existe físicamente.|Kanizsa|Necker|Rubin",
      "Tienden a verse como figura las regiones más ___, simétricas y convexas.|pequeñas|grandes|oscuras",
      "La ley de la región común la propuso ___ en 1992.|Palmer|Wertheimer|Koffka",
      "Hoy las leyes de la Gestalt se entienden como heurísticos ___.|probabilísticos|innatos|infalibles"
    ],
    tf: [
      "Tienden a verse como figura las regiones situadas en la parte inferior del campo.|V",
      "Las leyes de la Gestalt explican con detalle los mecanismos neurales de la organización perceptiva.|F|La Gestalt describe bien la organización perceptiva, pero explica poco sus mecanismos.",
      "En el cubo de Necker la interpretación cambia espontáneamente aunque la imagen sea la misma.|V",
      "La conexión uniforme fue una de las leyes originales de Wertheimer, Köhler y Koffka.|F|La propusieron Palmer y Rock en 1994, después de la región común de Palmer (1992)."
    ],
    q: [
      "Una bandada de pájaros que vuelan en la misma dirección se ve como un grupo frente a otros que vuelan al azar. ¿Qué ley actúa?|Destino común|Proximidad|Buena continuidad|Se agrupan los elementos que se mueven juntos en la misma dirección.",
      "Unos puntos se agrupan porque están dentro del mismo recuadro, aunque no estén más cerca entre sí. ¿Qué ley lo explica?|Región común|Proximidad|Cierre|La región común (Palmer, 1992) agrupa los elementos que comparten una zona delimitada.",
      "Una fila de puntos rojos y otra de cuadrados azules se ven como grupos distintos. ¿Qué ley actúa?|Semejanza|Proximidad|Simetría|Los elementos se agrupan por su parecido en color y forma.",
      "¿Por qué se dice que las leyes de la Gestalt son heurísticos probabilísticos?|Porque reflejan regularidades del entorno|Porque solo se cumplen en el laboratorio|Porque se aprenden por ensayo y error|Lo que está junto o se mueve junto suele ser un mismo objeto; por eso las reglas suelen acertar, aunque no siempre."
    ],
    inc: [
      "Sobre la figura y el fondo|El fondo parece estar delante y tener forma propia|Las regiones convexas tienden a verse como figura|Las regiones con significado tienden a ser figura|Es la figura la que parece tener forma y estar delante; el fondo parece continuar por detrás sin forma propia."
    ],
    seq: [],
    cls: [
      "Ley de agrupamiento|Gestalt clásica: proximidad; semejanza; cierre; destino común|Palmer: región común; conexión uniforme"
    ] },
  { t: "Reconocimiento de objetos y caras",
    tip: "El gran problema del reconocimiento es la invariancia. Biederman (RBC) propone unos 36 geones identificados por propiedades no accidentales y predice un reconocimiento independiente del punto de vista; los modelos basados en vistas (Tarr y Bülthoff) predicen peor rendimiento con ángulos poco habituales. La esencia de una escena se capta en unos 100 ms. En la corteza temporal ventral hay áreas con preferencia por caras (FFA), lugares (PPA) y cuerpos (EBA).",
    v: [
      "Invariancia=Reconocer un objeto pese a cambios de tamaño, orientación o punto de vista",
      "Geones=Unas 36 formas volumétricas simples que componen los objetos",
      "Propiedades no accidentales=Rasgos que se mantienen desde casi cualquier punto de vista",
      "Principio de recuperación=Borrar vértices y uniones de los geones dificulta reconocer el objeto",
      "Modelos basados en vistas=El sistema almacena imágenes concretas y compara la entrada con ellas",
      "Esencia de la escena=Significado global de una escena captado en unos 100 ms",
      "FFA=Área fusiforme que responde sobre todo a caras",
      "PPA=Área parahipocampal que responde sobre todo a lugares y escenas"
    ],
    g: [
      "Según Biederman, los objetos se representan como combinaciones de unos 36 ___.|geones|rasgos|píxeles",
      "La esencia de una escena se capta en unos ___.|100 ms|10 ms|1 s",
      "La lesión de la región fusiforme puede producir ___.|prosopagnosia|acromatopsia|acinetopsia",
      "La EBA responde sobre todo a ___.|cuerpos|caras|lugares",
      "La colinealidad, la simetría y la coterminación son propiedades ___.|no accidentales|accidentales|dependientes de la vista"
    ],
    tf: [
      "La teoría de Biederman predice un reconocimiento independiente del punto de vista, siempre que los geones sean visibles.|V",
      "La independencia del punto de vista es la predicción central de los modelos basados en vistas.|F|Es una predicción de Biederman; los modelos basados en vistas predicen peor reconocimiento con ángulos poco habituales.",
      "Un paciente con prosopagnosia puede reconocer a una persona conocida por su voz.|V",
      "La hipótesis de Gauthier, según la cual la FFA responde a la pericia, es hoy la postura predominante.|F|Sigue en debate; predomina la especificidad para caras, con cierta contribución de la pericia (hipótesis de Gauthier)."
    ],
    q: [
      "Tras una lesión temporal ventral, un paciente no reconoce la cara de su mujer, pero la identifica al oírla hablar. ¿Qué presenta?|Prosopagnosia|Agnosia auditiva|Heminegligencia|La lesión de la región fusiforme puede impedir reconocer caras conocidas, mientras se reconoce a la persona por la voz.",
      "Se borra la misma cantidad de contorno en dos dibujos de un objeto: en uno se eliminan vértices y en otro tramos rectos. Según Biederman, ¿cuál cuesta más reconocer?|El de los vértices borrados|El de los tramos borrados|Ambos por igual|Principio de recuperación: borrar vértices y uniones impide identificar los geones.",
      "Un participante tarda más en reconocer una taza vista desde abajo que de lado. ¿Qué modelo lo predice mejor?|El basado en vistas|El de Biederman|El de la Gestalt|Estos modelos predicen un reconocimiento más lento y menos preciso con ángulos poco habituales.",
      "¿Qué postura predomina en el debate sobre el reconocimiento de objetos?|Ambos procesamientos coexisten según la tarea|Los modelos estructurales han sido refutados|Las redes profundas confirman solo a Biederman|Las redes neuronales profundas han reabierto la cuestión; lo más extendido es que ambos tipos coexisten y su peso depende de la tarea."
    ],
    inc: [
      "Sobre las áreas especializadas|La PPA responde sobre todo a caras|La FFA responde sobre todo a caras|La EBA responde sobre todo a cuerpos|La PPA, área parahipocampal de lugares (Epstein y Kanwisher, 1998), responde sobre todo a lugares y escenas."
    ],
    seq: [],
    cls: [
      "Área de la corteza temporal ventral|FFA: caras|PPA: lugares; escenas|EBA: cuerpos; partes del cuerpo"
    ] },
  { t: "Principios fisiológicos de la percepción",
    tip: "Según Müller, la cualidad de la sensación depende de la vía activada. Los receptores generan potenciales graduados y, si alcanzan el umbral, potenciales de acción de todo o nada; la intensidad se codifica por la frecuencia de disparo y el número de neuronas. La convergencia da sensibilidad a costa de detalle, la inhibición lateral realza los bordes, y Hubel y Wiesel describieron en V1 células simples, complejas y terminales.",
    v: [
      "Energías nerviosas específicas=La cualidad de la sensación depende de la vía nerviosa activada",
      "Potencial de receptor=Respuesta graduada del receptor según la intensidad del estímulo",
      "Convergencia=Varias neuronas envían señales a una sola: más sensibilidad, menos detalle",
      "Campo receptivo=Zona sensorial cuya estimulación cambia la actividad de una neurona",
      "Inhibición lateral=Inhibición mutua entre neuronas vecinas que realza los bordes",
      "Célula simple=Responde a barras con orientación y posición concretas",
      "Célula compleja=Responde a una orientación en cualquier punto del campo, a menudo en movimiento",
      "Célula terminal=Responde a barras de longitud determinada o que acaban en un punto"
    ],
    g: [
      "La presión sobre el ojo cerrado produce destellos llamados ___.|fosfenos|fotones|escotomas",
      "Kuffler describió en la retina del gato campos receptivos de tipo ___.|centro-periferia|barra orientada|doble oponencia",
      "Hartline estudió la inhibición lateral en el ojo del ___.|Limulus|gato|mono",
      "Los gatitos criados solo con rayas verticales tenían de adultos pocas neuronas sensibles a la orientación ___.|horizontal|vertical|oblicua",
      "La intensidad del estímulo se codifica por la ___ de disparo y por el número de neuronas reclutadas.|frecuencia|amplitud|duración"
    ],
    tf: [
      "Los potenciales de acción son de todo o nada, mientras que el potencial de receptor es graduado.|V",
      "La convergencia aumenta tanto la sensibilidad como el detalle de la respuesta.|F|Gana sensibilidad pero pierde detalle, porque la neurona ya no sabe cuál de sus entradas se activó.",
      "Las bandas de Mach y la rejilla de Hermann se explican por la inhibición lateral.|V",
      "Las células simples de V1 responden a una orientación en cualquier punto de su campo receptivo.|F|Eso define a la célula compleja; la simple exige una orientación y una posición concretas."
    ],
    q: [
      "Al estimular eléctricamente el nervio auditivo, un paciente oye un zumbido y no siente un cosquilleo. ¿Qué principio lo explica?|Las energías nerviosas específicas|La inhibición lateral de la vía auditiva|La convergencia de las fibras auditivas|La cualidad de la sensación depende de la vía activada, no del estímulo, igual que la presión sobre el ojo produce fosfenos.",
      "Una neurona de la retina dispara más con un punto de luz en el centro de su campo y menos si la luz cae en la periferia. ¿Qué campo tiene?|Centro excitador y periferia inhibidora|Centro inhibidor y periferia excitadora|Centro y periferia excitadores|Es el campo de centro on descrito por Kuffler; el de centro off muestra el patrón contrario.",
      "Blakemore y Cooper criaron gatitos viendo solo rayas verticales. ¿Qué muestra su resultado?|Que la experiencia ajusta el sistema|Que la orientación es innata|Que la convergencia reduce el detalle|De adultos tenían pocas neuronas sensibles a la orientación horizontal: el sistema perceptivo se ajusta al entorno de desarrollo.",
      "¿Cómo responde una neurona de centro-periferia a una luz uniforme que cubre todo su campo?|Responde poco|Responde al máximo|Deja de responder del todo|Estas neuronas responden poco a la luz uniforme y mucho a los contrastes."
    ],
    inc: [
      "Sobre los detectores de rasgos de Hubel y Wiesel|Las células terminales responden a la luz difusa|Las simples tienen zonas excitadoras e inhibidoras|Se organizan en columnas de orientación y dominancia ocular|Las terminales (hipercomplejas) responden a barras de longitud determinada o que terminan en un punto."
    ],
    seq: [
      "Del estímulo al código de intensidad|Transducción en el receptor>Potencial de receptor graduado>Alcance del umbral>Potenciales de acción de todo o nada>Codificación por frecuencia de disparo"
    ],
    cls: [
      "Célula de V1|Simple: orientación concreta; posición concreta|Compleja: cualquier posición; a menudo en movimiento|Terminal: longitud determinada; final de la barra"
    ] },
  { t: "Codificación neural y métodos de investigación",
    tip: "El código por especificidad («neurona abuela») es poco realista como código general; los códigos poblacional y disperso son muy aceptados. Las neuronas muy selectivas del lóbulo temporal medial (Quiroga et al., 2005) encajan en un código disperso. Cada método tiene su punto fuerte: el EEG, la resolución temporal; la RMf, la espacial; la EMT, las inferencias causales; las lesiones, qué zonas son necesarias. La doble disociación indica mecanismos separables.",
    v: [
      "Código por especificidad=Cada objeto lo representa una neurona muy selectiva",
      "Código poblacional=Cada objeto se representa por el patrón de actividad de muchas neuronas",
      "Codificación dispersa=Cada objeto activa a un grupo pequeño de neuronas",
      "Neurona abuela=Ejemplo hipotético de neurona que respondería a un único objeto",
      "Doble disociación=Un paciente pierde A y conserva B, y otro muestra lo contrario",
      "Decodificación multivariada=Inferir el estímulo visto a partir del patrón de muchos vóxeles",
      "EMT=Alteración breve de una zona cortical que permite inferencias causales",
      "Señal BOLD=Cambio en el flujo sanguíneo que registra la RMf"
    ],
    g: [
      "El ___ tiene una resolución temporal de milisegundos, pero localiza con imprecisión.|EEG|RMf|estudio de lesiones",
      "La RMf tiene buena resolución espacial, pero su resolución temporal es de ___.|segundos|milisegundos|microsegundos",
      "La EMT solo puede alterar zonas ___.|superficiales|profundas|subcorticales",
      "La neurona que respondía a distintas fotos de una misma actriz forma parte de un código ___.|disperso|específico|uniforme",
      "El registro ___ ofrece la máxima precisión, pero es invasivo y casi siempre se hace en animales.|unicelular|magnético|electrodérmico"
    ],
    tf: [
      "La decodificación multivariada de la RMf apoya el código poblacional.|V",
      "Las neuronas selectivas descritas por Quiroga et al. (2005) confirman el código por especificidad.|F|Encajan en un código disperso: cada una responde a más de un estímulo.",
      "El estudio de lesiones muestra qué zonas son necesarias para una función, aunque las lesiones suelen estar poco delimitadas.|V",
      "La MEG tiene una resolución temporal pobre, de segundos, como la RMf.|F|La MEG tiene buena resolución temporal; la de segundos es propia de la RMf."
    ],
    q: [
      "Un paciente no reconoce caras pero sí objetos, y otro reconoce caras pero no objetos. ¿Qué indica este patrón?|Mecanismos separables para caras y objetos|Un único mecanismo con distinta gravedad|Un código por especificidad para caras|Es una doble disociación: cada función puede alterarse sin la otra, lo que indica mecanismos separables.",
      "Una investigadora quiere saber si una zona parietal es causalmente necesaria para una tarea en voluntarios sanos. ¿Qué método elegiría?|EMT|RMf|EEG|La EMT altera brevemente la zona estimulada y permite inferencias causales; la RMf y el EEG solo registran actividad.",
      "¿Por qué el código por especificidad es poco realista como código general?|Haría falta una neurona por objeto|Las neuronas carecen de selectividad|No permite la doble disociación|Necesitaría una neurona para cada objeto y su pérdida borraría el objeto, algo que no ocurre.",
      "Se quiere saber con precisión de milisegundos cuándo se procesa una cara. ¿Qué método conviene más?|Potenciales evocados|Resonancia funcional|Estudio de lesiones|El EEG y los potenciales evocados tienen resolución temporal de milisegundos; la RMf, de segundos."
    ],
    inc: [
      "Sobre la codificación neural|La pérdida de unas pocas neuronas borra un objeto|El código disperso es intermedio entre los otros dos|En el código poblacional cada neurona entra en muchos patrones|Como cada objeto se representa por un patrón de varias neuronas, perder unas pocas no borra su representación."
    ],
    seq: [],
    cls: [
      "Tipo de código neural|Especificidad: neurona abuela; una neurona por objeto|Poblacional: patrón de muchas neuronas; decodificación multivariada|Disperso: grupo pequeño de neuronas; neuronas de Quiroga"
    ] }
] }
);

// SAIMAP Psicología · Atención y Percepción · Unidades 5–8
window.COURSE.units.push(
{ n: 5, t: "El sistema visual", cap: 2, pir: "alta", mods: [
  { t: "La luz y el ojo",
    tip: "La luz visible es la franja del espectro entre unos 400 y 700 nm. El ojo enfoca una imagen nítida sobre la retina y la transduce en señales nerviosas: la córnea aporta unos dos tercios del enfoque, con potencia fija, y el cristalino ajusta el resto mediante la acomodación. No percibimos el punto ciego porque el sistema visual lo completa con el entorno.",
    v: [
      "Luz visible=Franja del espectro electromagnético de unos 400 a 700 nm que capta el ojo humano",
      "Fotón=Unidad en que los fotorreceptores absorben la luz",
      "Córnea=Cubierta transparente anterior que aporta unos dos tercios del enfoque, con potencia fija",
      "Iris=Estructura que regula el diámetro de la pupila según la luz",
      "Acomodación=Cambio de forma del cristalino para enfocar a distintas distancias",
      "Fóvea=Centro de la mácula, donde la visión de detalle es máxima",
      "Disco óptico=Salida del nervio óptico y entrada de los vasos, sin fotorreceptores",
      "Retina=Capa nerviosa del fondo del ojo, tejido del sistema nervioso central"
    ],
    g: [
      "Para ver de cerca, el cristalino se ___ gracias al cuerpo ciliar.|abomba|aplana|opacifica",
      "La estructura que aporta alrededor de dos tercios del poder de enfoque del ojo es ___.|la córnea|el cristalino|la esclerótica",
      "Por el disco óptico sale el ___ y entran los vasos sanguíneos.|nervio óptico|tracto óptico|quiasma óptico",
      "En penumbra, la pupila se ___ para dejar pasar más luz.|dilata|contrae|acomoda",
      "Lo que miramos directamente cae en la ___, donde la agudeza es máxima.|fóvea|papila|coroides"
    ],
    tf: [
      "La imagen que se forma en la retina está invertida, pero el cerebro no necesita «enderezarla».|V",
      "El cristalino es la estructura que más contribuye al poder de enfoque del ojo.|F|La córnea aporta unos dos tercios del enfoque, con potencia fija; el cristalino aporta el resto y es el que se ajusta.",
      "No percibimos un agujero en el punto ciego sobre todo porque el sistema visual lo completa con el color y la textura del entorno.|V",
      "El ojo funciona como una cámara: la retina se limita a transmitir al cerebro la imagen que capta.|F|Es un mito: la retina ya procesa la imagen (convergencia, inhibición lateral, canales paralelos) y el cerebro construye lo que vemos."
    ],
    q: [
      "Un estudiante mira fijamente una letra del libro. ¿Dónde cae su imagen en la retina?|En la fóvea, solo con conos|En el disco óptico, sin receptores|En la periferia, rica en bastones|Lo que miramos directamente cae en la fóvea, centro de la mácula, con solo conos y máxima agudeza.",
      "Una persona deja de mirar el móvil y mira una montaña lejana. ¿Qué ocurre en su ojo?|El cristalino se aplana|La córnea cambia de curvatura|El cristalino se abomba|Para ver de lejos el cristalino se aplana; para ver de cerca se abomba. La córnea tiene una potencia fija.",
      "¿Por qué no hay fotorreceptores en el disco óptico?|Por él sale el nervio óptico|Allí se concentran los bastones|Es la zona central de la mácula|El disco óptico es la salida del nervio óptico y la entrada de los vasos; por eso carece de conos y bastones (punto ciego).",
      "¿Qué rango de longitudes de onda corresponde aproximadamente a la luz visible para el ojo humano?|Entre 400 y 700 nm|Entre 200 y 400 nm|Entre 700 y 1000 nm|Fuera de esa franja quedan el ultravioleta y el infrarrojo; en sus límites más extremos, va de unos 380 a 760 nm."
    ],
    inc: [
      "Sobre las estructuras del ojo|La retina pertenece al sistema nervioso periférico|El iris regula el diámetro de la pupila según la luz|La córnea aporta unos dos tercios del enfoque total|La retina es tejido del sistema nervioso central, no periférico."
    ],
    seq: [
      "Recorrido de la luz hasta los fotorreceptores|Córnea>Pupila>Cristalino>Humor vítreo>Retina"
    ],
    cls: [] },
  { t: "Fotorreceptores: conos y bastones",
    tip: "Hay unos 120 millones de bastones y 6 millones de conos por ojo. Los conos se concentran en la fóvea y sirven a la visión fotópica, del color y del detalle; los bastones, ausentes en la fóvea, sirven a la visión escotópica. La alta convergencia de los bastones suma señales débiles a costa de perder agudeza. Al absorber un fotón, el retinal se isomeriza y el fotorreceptor se hiperpolariza.",
    v: [
      "Bastones=Receptores muy sensibles, sin color, máximos hacia los 20° de excentricidad",
      "Conos=Receptores de visión fotópica, de tres tipos, concentrados en la fóvea",
      "Opsina=Proteína que forma, con el retinal, el pigmento visual",
      "Isomerización=Cambio de forma del retinal al absorber un fotón",
      "Rodopsina=Pigmento de los bastones, con su máximo hacia los 500 nm",
      "Visión escotópica=Visión con poca luz, a cargo de los bastones",
      "Convergencia=Varios receptores envían su señal a una misma neurona",
      "Quiebre cono-bastón=Punto de la curva de adaptación a la oscuridad en que los bastones relevan a los conos"
    ],
    g: [
      "Los fotorreceptores responden a la luz con una ___, a diferencia de la mayoría de receptores.|hiperpolarización|despolarización|potenciación",
      "En la periferia, del orden de ___ bastones convergen en una sola célula ganglionar.|120|12|1200",
      "La rama de los conos de la curva de adaptación a la oscuridad se estabiliza en unos ___.|5–10 minutos|20–30 minutos|60–90 segundos",
      "Al anochecer, los ___ se oscurecen antes que los azules y verdes por el desplazamiento de Purkinje.|rojos|violetas|turquesas",
      "Los bastones alcanzan su máxima densidad hacia los ___ de excentricidad.|20°|0°|60°"
    ],
    tf: [
      "La adaptación a la oscuridad de los conos es más rápida porque su pigmento se regenera más deprisa que la rodopsina.|V",
      "La alta convergencia de los bastones explica que tengan mayor agudeza visual que los conos.|F|La convergencia suma señales y aumenta la sensibilidad, pero pierde detalle: la agudeza de los bastones es baja.",
      "En la fóvea central solo hay conos, y su densidad cae bruscamente fuera de ella.|V",
      "En visión escotópica, la sensibilidad máxima se sitúa en torno a 555 nm.|F|555 nm corresponde a la visión fotópica (conos); en escotópica el máximo está hacia 505 nm (desplazamiento de Purkinje)."
    ],
    q: [
      "Un astrónomo aficionado ve mejor una estrella tenue si no la mira directamente, sino un poco de lado. ¿Por qué?|La imagen cae en zona de bastones|La fóvea concentra los bastones|Mirar de lado activa más conos|Fuera de la fóvea abundan los bastones, muy sensibles por su alta convergencia; en la fóvea central solo hay conos.",
      "Al entrar en un cine a oscuras, la sensibilidad sigue aumentando pasados 15 minutos. ¿A qué se debe esa mejora tardía?|A la rama de los bastones|A la rama de los conos|Al ajuste del cristalino|La rama de los conos se estabiliza en 5–10 minutos; la de los bastones sigue bajando el umbral hasta los 20–30 minutos.",
      "¿Qué compromiso implica la convergencia de muchos receptores sobre una sola ganglionar?|Más sensibilidad y menos detalle|Más detalle y menos sensibilidad|Más color y menos sensibilidad|Sumar respuestas débiles permite ver con poca luz, pero si muchos receptores comparten salida no se sabe cuál se activó.",
      "¿Qué ocurre primero cuando el pigmento visual absorbe un fotón?|El retinal se isomeriza|La opsina abre canales de sodio|La célula se despolariza|El retinal cambia de forma (isomerización) y desencadena una cascada química que hiperpolariza el fotorreceptor."
    ],
    inc: [
      "Sobre conos y bastones|Los bastones son máximos en la fóvea central|Los conos tienen baja convergencia en la fóvea|La rodopsina es el pigmento de los bastones|Los bastones faltan en la fóvea central y son máximos hacia los 20° de excentricidad."
    ],
    seq: [
      "Curva de adaptación a la oscuridad|Rama de los conos>Quiebre cono-bastón>Rama de los bastones"
    ],
    cls: [
      "Rasgos de cada fotorreceptor|Bastones: visión escotópica; alta convergencia; adaptación lenta; rodopsina|Conos: visión fotópica; alta agudeza; tres tipos S, M y L; máxima densidad en la fóvea"
    ] },
  { t: "De la retina a la corteza",
    tip: "La señal va de los fotorreceptores a las bipolares y de ahí a las ganglionares, cuyos axones forman el nervio óptico; horizontales y amacrinas permiten la inhibición lateral. En el quiasma cruzan las fibras de las retinas nasales, de modo que cada hemicampo llega al hemisferio contrario. Cerca del 90 % de los axones va al NGL, cuyas seis capas separan los canales magno, parvo y konio, y de allí a V1.",
    v: [
      "Células ganglionares=Neuronas de salida de la retina, cuyos axones forman el nervio óptico",
      "Quiasma óptico=Punto donde cruzan las fibras de las retinas nasales",
      "Colículo superior=Destino de cerca del 10 % de los axones; orienta la mirada y mueve los ojos",
      "Núcleo pretectal=Estructura que controla el reflejo pupilar",
      "Capas magnocelulares=Capas 1 y 2 del NGL: movimiento y contraste, sin color",
      "Capas koniocelulares=Zonas entre capas del NGL que llevan señales de los conos S",
      "Magnificación cortical=La fóvea, ≈ 0,01 % de la retina, ocupa del orden del 8–10 % de V1",
      "Hemianopsia homónima=Pérdida del hemicampo contrario por lesión de la vía tras el quiasma"
    ],
    g: [
      "Las capas ___ del NGL reciben de las ganglionares enanas y procesan detalle fino y color rojo-verde.|parvocelulares|magnocelulares|koniocelulares",
      "V1 se sitúa en el polo occipital, alrededor de la cisura ___.|calcarina|de Silvio|central",
      "Que puntos vecinos de la retina se representen en puntos vecinos de V1 se llama ___.|retinotopía|tonotopía|somatotopía",
      "El nervio óptico tiene alrededor de ___ de axones, señal de que la retina ya ha comprimido la información.|1–1,2 millones|120 millones|6 millones",
      "La señal retiniana recorre el camino fotorreceptores, células bipolares y células ___.|ganglionares|horizontales|amacrinas"
    ],
    tf: [
      "Las fibras de las retinas temporales cruzan al hemisferio contrario en el quiasma óptico.|F|Cruzan las de las retinas nasales; las de las temporales siguen por el mismo lado.",
      "Una lesión del tracto óptico derecho produce la pérdida del hemicampo visual izquierdo en ambos ojos.|V",
      "Las capas magnocelulares del NGL son rápidas y transitorias y responden al color rojo-verde.|F|Son acromáticas y responden al movimiento y al contraste; el color rojo-verde corresponde a las capas parvocelulares (3 a 6).",
      "Cada capa del NGL recibe información de un solo ojo.|V"
    ],
    q: [
      "Una paciente sufre un ictus que daña las radiaciones ópticas del hemisferio izquierdo. ¿Qué alteración visual es esperable?|Hemianopsia homónima derecha|Ceguera completa del ojo izquierdo|Hemianopsia homónima izquierda|Tras el quiasma, cada hemisferio recibe el hemicampo contrario: la lesión izquierda hace perder el hemicampo derecho de ambos ojos.",
      "¿A qué estructura llega la mayoría (≈ 90 %) de los axones del nervio óptico?|Al núcleo geniculado lateral|Al colículo superior|Al núcleo geniculado medial|Cerca del 90 % va al NGL del tálamo y un 10 % al colículo superior. El geniculado medial pertenece a la vía auditiva.",
      "Un investigador registra en el NGL neuronas de campo receptivo pequeño, respuesta sostenida y sensibles al rojo-verde. ¿En qué capas está?|Parvocelulares, 3 a 6|Magnocelulares, 1 y 2|Koniocelulares, entre capas|Las capas parvocelulares reciben de las ganglionares enanas: campos pequeños, respuesta sostenida, detalle fino y color rojo-verde.",
      "¿Qué permite la inhibición lateral en la retina?|Campos receptivos centro-periferia|La transducción de los fotones|El cruce de fibras en el quiasma|Las células horizontales y amacrinas conectan en horizontal y crean la inhibición lateral, base de los campos centro-periferia."
    ],
    inc: [
      "Sobre la corteza visual primaria (V1)|Ocupa sobre todo la cara lateral del lóbulo temporal|Se llama también corteza estriada o área 17|Contiene detectores de rasgos organizados en columnas|V1 está en el polo occipital, alrededor de la cisura calcarina."
    ],
    seq: [
      "Vía visual hacia la corteza|Fotorreceptores>Células bipolares>Células ganglionares>Nervio óptico>Quiasma óptico>Tracto óptico>Núcleo geniculado lateral>Radiaciones ópticas>V1"
    ],
    cls: [
      "Capas del NGL|Magnocelulares: capas 1 y 2; ganglionares parasol; movimiento y contraste|Parvocelulares: capas 3 a 6; ganglionares enanas; detalle fino y color rojo-verde|Koniocelulares: entre capas; ganglionares biestratificadas; señales de los conos S"
    ] },
  { t: "Las vías ventral y dorsal",
    tip: "Ungerleider y Mishkin (1982) distinguieron una vía ventral, occipitotemporal, del «qué», y una dorsal, occipitoparietal, del «dónde». Goodale y Milner (1992) reinterpretaron la dorsal como vía del «cómo», que guía la acción, apoyándose en la doble disociación entre la paciente D. F. y la ataxia óptica. Áreas como V4, MT/V5 o FFA son nodos de redes amplias, y el modelo de dos vías es una simplificación.",
    v: [
      "Vía ventral=Ruta occipitotemporal necesaria para reconocer objetos",
      "Vía dorsal=Ruta occipitoparietal que guía la acción sobre los objetos",
      "Ataxia óptica=Fallo al alcanzar objetos que sí se reconocen, por daño parietal",
      "Paciente D. F.=Agnosia visual de la forma, pero orientaba la mano al meter una carta en una ranura",
      "V4=Área ventral del color y la forma; su lesión causa acromatopsia cerebral",
      "MT/V5=Área dorsal del movimiento; su lesión causa acinetopsia",
      "FFA=Área fusiforme de las caras; su lesión se asocia a prosopagnosia",
      "PPA=Área parahipocampal especializada en lugares y escenas"
    ],
    g: [
      "Ungerleider y Mishkin llamaron a la vía dorsal vía del «___».|dónde|cómo|qué",
      "El caso L. M., incapaz de percibir el movimiento, ilustra la ___.|acinetopsia|acromatopsia|prosopagnosia",
      "De forma simplificada, el canal ___ alimenta sobre todo la vía dorsal.|magnocelular|parvocelular|koniocelular",
      "El área ___ de la vía ventral responde selectivamente a los cuerpos.|EBA|PPA|FFA",
      "Goodale y Milner propusieron que la vía dorsal sirve a la visión para la ___, en gran parte sin conciencia.|acción|memoria|identificación"
    ],
    tf: [
      "La distinción entre una vía del «qué» y otra del «cómo» se debe a Ungerleider y Mishkin.|F|Ungerleider y Mishkin propusieron «qué» y «dónde»; la reinterpretación «qué» y «cómo» es de Goodale y Milner (1992).",
      "La paciente D. F. y los casos de ataxia óptica forman una doble disociación entre percibir y actuar.|V",
      "El modelo de las dos vías se considera una simplificación, porque ambas intercambian información constantemente.|V",
      "La vía ventral se dirige del occipital al parietal y su lesión produce ataxia óptica.|F|La ventral va al temporal inferior; la que se dirige al parietal es la dorsal, cuyo daño produce ataxia óptica."
    ],
    q: [
      "Un paciente con daño parietal reconoce y nombra una taza, pero al intentar cogerla desvía la mano. ¿Qué presenta?|Ataxia óptica|Agnosia visual de la forma|Acinetopsia|En la ataxia óptica, por daño de la vía dorsal, se reconocen los objetos pero se falla al alcanzarlos: lo contrario que en D. F.",
      "¿Qué hacía la paciente D. F. que apoyó la propuesta de Goodale y Milner?|Orientaba la mano en una ranura|Decía la orientación de la ranura|Reconocía caras pero no objetos|Con agnosia visual de la forma, no sabía decir la orientación de la ranura, pero introducía una carta con la mano bien orientada.",
      "Tras una lesión, una persona deja de reconocer caras familiares, aunque reconoce objetos. ¿Qué área es más probable que esté afectada?|La FFA, en la vía ventral|La MT/V5, en la vía dorsal|La PPA, en la vía dorsal|El área fusiforme de las caras (Kanwisher, McDermott y Chun, 1997), en la vía ventral, se asocia a la prosopagnosia.",
      "Según el consenso actual, ¿qué interpretación de la vía dorsal es la más aceptada?|La del «cómo», de Goodale y Milner|La del «dónde», de Ungerleider y Mishkin|La del «qué», de Hubel y Wiesel|Hoy se acepta sobre todo la versión «qué/cómo», aunque el modelo de dos vías se considera una simplificación."
    ],
    inc: [
      "Sobre las áreas visuales especializadas|MT/V5 pertenece a la vía ventral|La lesión de V4 produce acromatopsia cerebral|La PPA procesa lugares y escenas|MT/V5, especializada en el movimiento, pertenece a la vía dorsal."
    ],
    seq: [],
    cls: [
      "Efecto de la lesión según la vía|Vía ventral: acromatopsia cerebral; prosopagnosia; agnosia visual de la forma|Vía dorsal: acinetopsia; ataxia óptica"
    ] }
] },
{ n: 6, t: "La percepción del color", cap: 2, pir: "alta", mods: [
  { t: "Dimensiones del color y mezclas",
    tip: "El color no es una propiedad de la luz ni de los objetos, sino una construcción del sistema visual. Tiene tres dimensiones: tono, saturación y brillo. En la mezcla aditiva se suman luces (rojo, verde y azul dan blanco); en la sustractiva cada pigmento absorbe parte del espectro (cian, magenta y amarillo dan casi negro). Por el metamerismo, luces físicamente distintas pueden verse iguales.",
    v: [
      "Tono=Dimensión del color que depende sobre todo de la longitud de onda dominante",
      "Saturación=Pureza de un color, o cuánto se aleja del gris",
      "Brillo=Dimensión del color que va de claro a oscuro",
      "Reflexión selectiva=Reflejar unas longitudes de onda más que otras, propio de los objetos cromáticos",
      "Objetos acromáticos=Blancos, grises o negros: reflejan todas las longitudes de onda por igual",
      "Mezcla aditiva=Mezcla de luces en la que se suman las longitudes de onda",
      "Mezcla sustractiva=Mezcla de pigmentos en la que cada uno absorbe parte del espectro",
      "Metámeros=Luces de composición espectral distinta que se perciben del mismo color"
    ],
    g: [
      "El púrpura no está en el espectro: surge al mezclar luz de los dos ___.|extremos|centros|tercios",
      "Mezclar luz roja y luz verde produce ___ por mezcla aditiva.|amarillo|marrón|cian",
      "La pintura azul más la amarilla da verde porque la franja ___ es la única que ninguna absorbe.|media|corta|larga",
      "Un rosa pálido difiere de un rojo intenso sobre todo en ___.|saturación|tono|longitud de onda",
      "Que una pantalla con tres tipos de puntos de luz reproduzca casi cualquier color se debe al ___.|metamerismo|contraste simultáneo|desplazamiento de Purkinje"
    ],
    tf: [
      "Rojo, verde y azul juntos dan blanco en la mezcla aditiva.|V",
      "Cian, magenta y amarillo producen casi negro cuando se mezclan como luces.|F|Dan casi negro como pigmentos, en la mezcla sustractiva; al mezclar luces, las longitudes de onda se suman.",
      "Un tomate se ve rojo porque refleja sobre todo las longitudes de onda largas.|V",
      "Los objetos blancos, grises y negros difieren en las longitudes de onda que reflejan.|F|Los acromáticos reflejan todas las longitudes de onda por igual; solo difieren en la proporción de luz que reflejan."
    ],
    q: [
      "Un técnico de iluminación superpone en un escenario focos rojo, verde y azul. ¿Qué color verá el público en la zona común?|Blanco|Casi negro|Marrón|Es una mezcla aditiva: las longitudes de onda se suman, y los tres primarios juntos dan blanco.",
      "¿Por qué el color se considera una construcción del sistema visual?|Estímulos distintos pueden verse iguales|La luz posee color por sí misma|Cada longitud de onda tiene un color fijo|El mismo estímulo puede verse de colores distintos según el contexto, y estímulos físicamente distintos pueden verse iguales (metámeros).",
      "¿Aproximadamente a partir de qué longitud de onda las luces se ven rojas?|Por encima de unos 620 nm|Por debajo de unos 490 nm|Entre unos 500 y 575 nm|Las cortas (400–490 nm) se ven violetas y azules; las intermedias (500–575 nm), verdes; por encima de unos 620 nm, rojas.",
      "Un impresor mezcla tinta cian y tinta amarilla para obtener verde. ¿Qué tipo de mezcla realiza?|Sustractiva, porque absorben luz|Aditiva, porque suman longitudes|Sustractiva, porque suman luces|Pigmentos y tintes restan parte del espectro: es la mezcla sustractiva, propia de la pintura y la impresión."
    ],
    inc: [
      "Sobre las dimensiones del color|La saturación depende de la longitud de onda dominante|El brillo o la luminosidad va de lo claro a lo oscuro|El tono depende sobre todo de la longitud de onda|La longitud de onda dominante determina sobre todo el tono; la saturación es la pureza del color."
    ],
    seq: [],
    cls: [
      "Tipo de mezcla|Aditiva: luces; pantallas; iluminación; rojo, verde y azul dan blanco|Sustractiva: pigmentos; pintura; impresión; cian, magenta y amarillo dan casi negro"
    ] },
  { t: "Teoría tricromática",
    tip: "Young y Helmholtz propusieron que la visión del color depende de tres mecanismos receptores con sensibilidades distintas, y que el color se codifica por el patrón conjunto de actividad. La igualación de colores lo apoya: con tres primarios, una persona con visión normal iguala cualquier color. Un solo receptor confunde longitud de onda e intensidad; el cociente entre dos o más resuelve la ambigüedad. En 1964 la microespectrofotometría confirmó los conos S, M y L.",
    v: [
      "Teoría tricromática=Propuesta de Young y Helmholtz de tres mecanismos receptores para el color",
      "Igualación de colores=Tarea que muestra que bastan tres luces primarias para igualar cualquier color",
      "Microespectrofotometría=Técnica que midió en 1964 la luz absorbida por conos individuales",
      "Cono S=Receptor de onda corta, con máximo hacia 420 nm",
      "Cono M=Receptor de onda media, con máximo hacia 530 nm",
      "Cono L=Receptor de onda larga, con máximo hacia 560 nm",
      "Patrón de actividad=Respuesta conjunta de los tres tipos de cono que codifica el color",
      "Cociente de respuestas=Relación entre receptores que depende de la longitud de onda, no de la intensidad"
    ],
    g: [
      "Con solo ___ luces primarias, una persona con visión normal no iguala todas las longitudes de onda.|dos|tres|cuatro",
      "El cono L tiene su máximo en la zona ___, pese a su nombre tradicional de «rojo».|amarillo-verdosa|rojo-anaranjada|azul-violeta",
      "Los conos ___ son una pequeña minoría y faltan en el centro de la fóvea.|S|M|L",
      "Con un solo tipo de receptor, una luz débil de su longitud preferida y otra ___ de una longitud poco eficaz pueden dar la misma respuesta.|intensa|tenue|breve",
      "La teoría tricromática explica bien la igualación de colores y el ___.|metamerismo|contraste simultáneo|color de memoria"
    ],
    tf: [
      "Las curvas de sensibilidad de los conos M y L se solapan mucho.|V",
      "Cada tipo de cono «ve» un color concreto: el cono M ve el verde y el L, el rojo.|F|Ningún cono ve un color por sí solo: el color depende del patrón conjunto, y el máximo del cono L está en la zona amarillo-verdosa.",
      "Con dos tipos de receptores ya es posible cierta visión del color, aunque limitada.|V",
      "La teoría tricromática explica las posimágenes complementarias.|F|Las posimágenes, el contraste simultáneo y la cancelación de tono apoyan la teoría de los procesos oponentes."
    ],
    q: [
      "En una tarea de igualación, un participante con visión normal reproduce un color de prueba mezclando primarios. ¿Cuántos necesita para igualar cualquier color?|Tres bien elegidos|Dos bien elegidos|Cuatro o más|Con tres primarios bien elegidos lo logra cualquier persona con visión normal; con dos, solo algunas personas con alteraciones del color.",
      "Un participante iguala cualquier color usando solo dos luces primarias. ¿Qué es lo más probable?|Que sea dicrómata|Que sea tricrómata anómalo|Que sea tricrómata normal|Con dos tipos de conos funcionales, los dicrómatas igualan cualquier color con dos luces; quien tiene tres tipos necesita tres.",
      "¿Por qué un solo tipo de receptor no basta para ver colores?|Confunde longitud de onda e intensidad|Responde solo a longitudes de onda largas|No responde a luces de baja intensidad|Un receptor informa de cuánta luz absorbe, no de cuál: una luz intensa poco eficaz puede igualar a una débil de su longitud preferida.",
      "¿Qué aportaron en 1964 Marks, Dobelle y MacNichol, y Brown y Wald?|La prueba fisiológica de tres conos|La prueba de los canales oponentes|La primera curva de adaptación|Midieron por microespectrofotometría la luz absorbida por conos individuales y confirmaron tres tipos: S, M y L."
    ],
    inc: [
      "Sobre la teoría tricromática|Se debe a Hering (1878)|Se apoya en la igualación de colores|Explica el metamerismo|La propusieron Young (1802) y Helmholtz (hacia 1852); Hering formuló la teoría de los procesos oponentes."
    ],
    seq: [],
    cls: [] },
  { t: "Procesos oponentes y teoría dual",
    tip: "Hering (1878) propuso tres mecanismos oponentes, rojo–verde, azul–amarillo y blanco–negro, cuyos polos se inhiben; por eso no existe un verde rojizo. Lo apoyan las posimágenes complementarias, el contraste simultáneo, la cancelación de tono de Hurvich y Jameson y las neuronas oponentes del NGL. La teoría dual integra ambas propuestas: tricromática en los receptores y oponente en la etapa postreceptoral.",
    v: [
      "Ewald Hering=Autor de la teoría de los procesos oponentes (1878)",
      "Posimagen=Imagen complementaria que aparece tras mirar fijamente un color",
      "Contraste simultáneo=Un gris rodeado de rojo tiende a verse verdoso",
      "Cancelación de tono=Método de Hurvich y Jameson para medir la fuerza de los canales oponentes",
      "Neuronas oponentes=Células del NGL excitadas por unas longitudes de onda e inhibidas por otras",
      "Canal L − M=Canal que señala si predominan longitudes de onda largas o medias",
      "Canal L + M=Canal de luminancia que señala la intensidad total, sin color",
      "Teoría dual=Integra la etapa tricromática de los conos y la oponente postreceptoral"
    ],
    g: [
      "El canal ___ se obtiene como L + M.|claro–oscuro|rojo–verde|azul–amarillo",
      "Tras mirar fijamente una mancha azul, sobre un fondo blanco aparece una posimagen ___.|amarilla|verde|roja",
      "Según la teoría dual, la etapa ___ explica la igualación de colores y el metamerismo.|receptoral|postreceptoral|cortical",
      "Las posimágenes se deben a la ___ de un canal oponente.|adaptación|activación|maduración",
      "De Valois y colaboradores registraron neuronas oponentes en el ___ de monos.|NGL|colículo superior|cuerpo calloso"
    ],
    tf: [
      "Según Hering, el amarillo se percibe como un color puro, no como una mezcla de rojo y verde.|V",
      "La teoría tricromática y la de los procesos oponentes son incompatibles: si una es cierta, la otra queda refutada.|F|La teoría dual las integra: la tricromática describe los receptores y la oponente, la etapa postreceptoral.",
      "La cancelación de tono consiste en añadir a una luz la cantidad justa del color opuesto para anular su tono.|V",
      "Los canales registrados en el NGL coinciden exactamente con los pares rojo–verde y azul–amarillo descritos por Hering.|F|Es un punto en debate: L − M y S − (L + M) no coinciden exactamente con los pares que Hering describía desde la experiencia."
    ],
    q: [
      "Tras mirar fijamente un minuto una bandera roja, una persona mira una pared blanca y ve una mancha verde. ¿Qué lo explica?|La adaptación del canal L − M|La fatiga de los conos S|La mezcla sustractiva retiniana|Al fatigarse el polo rojo del canal L − M, al pasar al blanco domina el verde: es una prueba de los procesos oponentes.",
      "¿Qué fenómeno apoya directamente la teoría de los procesos oponentes?|El contraste simultáneo|La igualación de colores|El metamerismo|El contraste simultáneo, las posimágenes y la cancelación de tono apoyan a Hering; la igualación y el metamerismo, a la tricromática.",
      "Según Hering, ¿por qué no podemos ver un verde rojizo?|Un canal no señala sus dos polos a la vez|Los conos M y L no se solapan en absoluto|El verde y el rojo se suman en blanco|Rojo y verde son polos de un mismo mecanismo oponente que se inhiben entre sí: el canal no puede señalar ambos a la vez.",
      "¿Por qué restar las señales de los conos M y L es una recodificación eficiente?|Destaca la diferencia que informa del color|Elimina la información de intensidad total|Aumenta la resolución espacial de la fóvea|Como las curvas de M y L se solapan mucho, restarlas destaca justo la diferencia que informa sobre el color."
    ],
    inc: [
      "Sobre la teoría dual|Las posimágenes se explican en la etapa receptoral|La etapa receptoral sigue la teoría tricromática|Los canales oponentes se forman en ganglionares, NGL y corteza|Posimágenes, contraste simultáneo y cancelación de tono se explican en la etapa oponente, postreceptoral."
    ],
    seq: [],
    cls: [
      "Qué teoría apoya cada fenómeno|Tricromática: igualación de colores; metamerismo; dicrómatas que igualan con dos luces|Procesos oponentes: posimágenes; contraste simultáneo; cancelación de tono; neuronas oponentes del NGL"
    ] },
  { t: "Color en la corteza, constancia y alteraciones",
    tip: "En V1 las neuronas del color se agrupan en los blobs, muchas de doble oponencia; la vía ventral lleva la información a V4, cuya lesión produce acromatopsia cerebral. La constancia del color se apoya en la adaptación cromática, la comparación con el entorno (retinex de Land) y el color de memoria. La mayoría de las alteraciones son congénitas: tricromatopsia anómala, dicromatismo y, muy raro, monocromatismo; las rojo-verde están ligadas al X.",
    v: [
      "Blobs=Manchas de V1 donde se agrupan las neuronas sensibles al color",
      "Doble oponencia=Propiedad de neuronas de V1 que responden a los bordes entre colores",
      "Acromatopsia cerebral=Visión en grises con conos normales por lesión occipitotemporal ventral",
      "Teoría retinex=Propuesta de Land: el color depende de la relación con las superficies vecinas",
      "Color de memoria=Influencia del color conocido de los objetos familiares en cómo los vemos",
      "Protanopía=Dicromatismo por ausencia de conos L",
      "Deuteranomalía=Cono M con sensibilidad desplazada; la alteración del color más frecuente",
      "Punto neutro=Longitud de onda que un dicrómata ve gris"
    ],
    g: [
      "Ante una iluminación dominante, los conos más estimulados reducen su sensibilidad: es la adaptación ___.|cromática|oscura|retiniana",
      "Las alteraciones rojo-verde afectan a cerca del ___ de los varones de ascendencia europea.|8 %|0,5 %|25 %",
      "La tritanopía se debe a la ausencia de conos ___.|S|M|L",
      "El cribado más conocido de las alteraciones del color son las láminas de ___.|Ishihara|Hering|Munsell",
      "Una hoja blanca en la sombra sigue viéndose blanca gracias a la constancia de la ___.|luminosidad|forma|saturación"
    ],
    tf: [
      "La mayoría de las personas daltónicas ven el mundo en blanco y negro.|F|Es un mito: la mayoría son tricrómatas anómalas o dicrómatas y ven colores; ver solo en grises (monocromatismo) es muy raro.",
      "Las alteraciones rojo-verde son más frecuentes en varones porque los genes de las opsinas L y M están en el cromosoma X.|V",
      "Las neuronas de V4 responden al color pero no a la forma, por lo que V4 es un centro del color aislado.|F|Sus neuronas también responden a la forma y el color depende de una red; el grado de especialización de V4 está en debate.",
      "El monocromatismo de bastones se acompaña de baja agudeza y molestia ante la luz.|V"
    ],
    q: [
      "Tras un ictus occipitotemporal, un pintor con conos normales empieza a ver el mundo en tonos de gris. ¿Qué presenta?|Acromatopsia cerebral|Monocromatismo de bastones|Deuteranopía|Es una alteración adquirida por lesión cortical en la vía ventral (región de V4), no un problema de los conos.",
      "Un varón confunde algunos rojos y verdes, pero no logra igualar todos los colores con solo dos primarios. ¿Qué alteración es más compatible?|Tricromatopsia anómala|Dicromatismo|Acromatopsia cerebral|Los dicrómatas igualan cualquier color con dos luces; el tricrómata anómalo conserva tres tipos de conos, uno con sensibilidad desplazada.",
      "Un plátano se ve amarillo al sol y bajo una bombilla anaranjada. Según la teoría retinex, ¿de qué depende sobre todo su color?|De la relación con lo que le rodea|De la luz absoluta que refleja|Del pico de sensibilidad del cono L|Edwin Land propuso que el color depende de la relación de cada superficie con las vecinas, no de la luz absoluta.",
      "¿Por qué las alteraciones rojo-verde son mucho menos frecuentes en mujeres (≈ 0,5 %)?|Necesitan el alelo en ambos X|Tienen más conos S en la fóvea|Sus opsinas L y M son autosómicas|Los genes de las opsinas L y M están en el X: al varón le basta un alelo; la mujer necesita tenerlo en sus dos cromosomas X."
    ],
    inc: [
      "Sobre las alteraciones del color|La tritanopía es la más frecuente|Los dicrómatas tienen un punto neutro|Las hay adquiridas por fármacos o lesiones|La más frecuente es la deuteranomalía; las del eje azul-amarillo, como la tritanopía, son mucho menos frecuentes."
    ],
    seq: [],
    cls: [
      "Tipo de alteración del color|Tricromatopsia anómala: protanomalía; deuteranomalía; tritanomalía|Dicromatismo: protanopía; deuteranopía; tritanopía"
    ] }
] },
{ n: 7, t: "Audición I: el sonido, el oído y el tono", cap: 2, pir: "alta", mods: [
  { t: "El sonido y sus propiedades",
    tip: "El sonido es una onda de compresiones y rarefacciones que viaja a unos 340 m/s en el aire. La frecuencia se relaciona sobre todo con el tono y la amplitud con la sonoridad, pero decibelios y sonoridad no son lo mismo: según las curvas de igual sonoridad, los graves necesitan más dB para sonar igual de fuertes. El timbre depende de los armónicos y la envolvente, y la fundamental ausente muestra que el tono se oye aunque falte su frecuencia.",
    v: [
      "Rarefacción=Zona de menor presión que deja la fuente sonora al retroceder",
      "Tono puro=Onda sinusoidal de presión, el sonido más simple",
      "Hercio=Unidad de frecuencia: un ciclo por segundo",
      "Fonio=Unidad de las curvas de igual sonoridad, referida a un tono de 1000 Hz",
      "Presbiacusia=Descenso con la edad del límite superior de audición",
      "Armónicos=Múltiplos de la frecuencia fundamental en un tono complejo",
      "Envolvente=Forma en que un sonido empieza (ataque) y se apaga",
      "Fundamental ausente=Se oye el tono de un sonido complejo aunque falte su frecuencia básica"
    ],
    g: [
      "La sensibilidad auditiva es máxima entre unos 2000 y ___ Hz, franja clave para el habla.|5000|10 000|15 000",
      "Cada ___ dB más multiplican por 10 la presión sonora.|20|10|3",
      "La exposición prolongada por encima de unos ___ dB puede dañar el oído.|85|60|30",
      "La misma nota en violín y en flauta se distingue por su ___.|timbre|tono|sonoridad",
      "La sonoridad crece de forma comprimida con la intensidad, con un exponente de Stevens de ≈ ___.|0,67|1,5|3,5"
    ],
    tf: [
      "Dos tonos con el mismo nivel en decibelios suenan igual de fuertes aunque difieran en frecuencia.|F|Es un mito: los dB miden presión física; a igual nivel, un tono de unos 3000 Hz suena más fuerte que uno muy grave.",
      "Al oír una voz grave por teléfono seguimos percibiendo su tono aunque falte la fundamental.|V",
      "El conducto auditivo resuena hacia los 3000 Hz, lo que contribuye a la mayor sensibilidad en esa franja.|V",
      "El timbre depende sobre todo de la amplitud de la onda.|F|El timbre depende de los armónicos presentes y de la envolvente; la amplitud se relaciona sobre todo con la sonoridad."
    ],
    q: [
      "Un técnico de sonido sube un altavoz de 60 a 100 dB SPL. ¿Por cuánto se ha multiplicado la presión sonora?|Por 100|Por 40|Por 1000|Cada 20 dB multiplican por 10 la presión: 40 dB más equivalen a 10 por 10, es decir, 100 veces más presión.",
      "Escuchando música a volumen bajo, alguien nota que los bajos casi desaparecen. ¿Qué lo explica?|Las curvas de igual sonoridad|La presbiacusia del oyente|La fundamental ausente|Los graves necesitan más dB para sonar igual de fuertes, sobre todo a volumen bajo (Fletcher y Munson, 1933).",
      "¿Cuál es el rango audible aproximado de una persona joven?|De 20 a 20 000 Hz|De 200 a 2000 Hz|De 2 a 200 000 Hz|Va de unos 20 a 20 000 Hz en jóvenes; el límite superior desciende con la edad (presbiacusia).",
      "¿Qué propiedad física se relaciona sobre todo con el timbre?|Composición espectral y envolvente|Amplitud de la onda de presión|Frecuencia fundamental del sonido|El timbre distingue sonidos de igual tono y sonoridad; depende de los armónicos presentes y de cómo empieza y se apaga el sonido."
    ],
    inc: [
      "Sobre las propiedades del sonido|La frecuencia determina sobre todo la sonoridad|Hacia 120–130 dB el sonido empieza a resultar doloroso|En el aire, el sonido viaja a unos 340 m/s|La frecuencia se relaciona sobre todo con el tono; la sonoridad depende sobre todo de la amplitud."
    ],
    seq: [],
    cls: [
      "Propiedad física de cada cualidad perceptiva|Tono: frecuencia; frecuencia fundamental|Sonoridad: amplitud; nivel en dB SPL|Timbre: armónicos; envolvente"
    ] },
  { t: "El oído: anatomía y fisiología",
    tip: "El oído externo conduce el sonido hasta el tímpano; en el medio, martillo, yunque y estribo igualan impedancias y aumentan la presión unas 20 veces para pasar del aire al líquido coclear. En la cóclea, el órgano de Corti se asienta sobre la membrana basilar: las células ciliadas internas transmiten casi toda la información y las externas la amplifican por electromotilidad. Al inclinarse los estereocilios se abren canales, entra potasio y la célula se despolariza.",
    v: [
      "Trompa de Eustaquio=Conducto que comunica el oído medio con la faringe e iguala la presión",
      "Estribo=Osículo apoyado en la ventana oval",
      "Igualación de impedancias=Aumento de presión de los osículos para pasar el sonido del aire al líquido",
      "Reflejo acústico=Acción de dos músculos del oído medio que reduce la transmisión ante sonidos intensos",
      "Membrana de Reissner=Separa la rampa media de la vestibular",
      "Órgano de Corti=Estructura sobre la membrana basilar que contiene las células ciliadas",
      "Prestina=Proteína que permite la electromotilidad de las células ciliadas externas",
      "Otoemisiones acústicas=Sonidos generados por las ciliadas externas, usados en el cribado neonatal"
    ],
    g: [
      "La rampa ___ acaba en la ventana redonda.|timpánica|vestibular|media",
      "Las células ciliadas internas aportan alrededor del ___ de las fibras del nervio auditivo.|90–95 %|10–15 %|50–60 %",
      "Las células ciliadas externas se disponen en ___ filas.|tres|una|cinco",
      "Al inclinarse los estereocilios en un sentido entran iones positivos, sobre todo ___.|potasio|sodio|magnesio",
      "Una pérdida auditiva por daño en las células ciliadas se clasifica como ___.|neurosensorial|de transmisión|conductiva"
    ],
    tf: [
      "Las células ciliadas externas son más numerosas que las internas, pero envían muy pocas fibras aferentes.|V",
      "Las células ciliadas internas forman el amplificador coclear gracias a su electromotilidad.|F|El amplificador coclear son las ciliadas externas (prestina); las internas transmiten la información al cerebro.",
      "Sin los osículos, casi toda la energía del sonido se reflejaría al pasar del aire al líquido coclear.|V",
      "La membrana basilar separa la rampa media de la vestibular.|F|Eso lo hace la membrana de Reissner; la basilar separa la rampa media de la timpánica y sostiene el órgano de Corti."
    ],
    q: [
      "Un trabajador expuesto durante años a ruido intenso empieza a perder audición. ¿Qué células son las más vulnerables a ese ruido?|Las ciliadas externas|Las ciliadas internas|Las del ganglio espiral|Las ciliadas externas son las más vulnerables al ruido; al dañarse se pierde amplificación y selectividad de frecuencia.",
      "En el cribado auditivo de un recién nacido se registran otoemisiones acústicas. ¿Qué evalúan principalmente?|La función de las ciliadas externas|La conducción en la corteza auditiva|La movilidad de la trompa de Eustaquio|Las otoemisiones las generan las ciliadas externas, el amplificador coclear; por eso se usan en el cribado neonatal.",
      "¿Cómo logran los osículos la igualación de impedancias?|Concentran la vibración y hacen palanca|Amortiguan las vibraciones del tímpano|Igualan la presión con la faringe|La vibración del tímpano, grande, se concentra en la base del estribo, mucho menor, y los huesecillos hacen de palanca.",
      "¿Qué estructura iguala la presión del aire a ambos lados del tímpano?|La trompa de Eustaquio|La ventana redonda|El reflejo acústico|La trompa de Eustaquio comunica la caja del tímpano con la faringe; el reflejo acústico reduce la transmisión de sonidos intensos."
    ],
    inc: [
      "Sobre las células ciliadas|Las internas se disponen en tres filas|Las externas cambian de longitud con su potencial|Las internas transmiten la mayor parte de la información|Las internas forman una sola fila (≈ 3500); las externas, unas 12 000, se disponen en tres filas."
    ],
    seq: [
      "Recorrido del sonido hasta la cóclea|Pabellón auricular>Conducto auditivo externo>Membrana timpánica>Martillo>Yunque>Estribo>Ventana oval"
    ],
    cls: [
      "Parte del oído|Oído externo: pabellón auricular; conducto auditivo externo|Oído medio: martillo; yunque; estribo; trompa de Eustaquio|Oído interno: cóclea; órgano de Corti; membrana basilar"
    ] },
  { t: "Teorías de la percepción del tono",
    tip: "La frecuencia puede codificarse por dónde vibra más la cóclea o por cuándo disparan las neuronas. Békésy describió la onda viajera: la base, estrecha y rígida, responde a los agudos y el ápice, ancho y flexible, a los graves. Rutherford propuso la teoría de la frecuencia, limitada por la tasa máxima de disparo, y Wever y Bray el principio de descarga, útil hasta unos 4000–5000 Hz. Hoy se combinan: temporal en graves, ambos en intermedias y lugar en agudos.",
    v: [
      "Onda viajera=Onda que recorre la membrana basilar con máximo en un punto según la frecuencia",
      "Georg von Békésy=Describió la onda viajera; Nobel de Medicina en 1961",
      "Teoría de resonancia=Versión de Helmholtz: fibras de distinta longitud resuenan como cuerdas de piano",
      "Teoría del teléfono=Propuesta de Rutherford: la membrana vibra entera y las fibras siguen su ritmo",
      "Principio de descarga=Grupos de fibras disparan por turnos para seguir frecuencias altas",
      "Sincronización de fase=Disparo de las fibras siempre en la misma fase de la onda",
      "Tonotopía=Organización ordenada por frecuencias de la cóclea a la corteza",
      "Ápice coclear=Extremo ancho y flexible de la membrana basilar, que responde a los graves"
    ],
    g: [
      "La base de la membrana basilar es estrecha y rígida y responde a las frecuencias ___.|altas|bajas|medias",
      "Una neurona no puede disparar más de unas ___ veces por segundo.|1000|100|10 000",
      "El principio de descarga funciona hasta unos ___ Hz.|4000–5000|1000–1500|15 000–20 000",
      "Para las frecuencias bajas, hasta unos 1000 Hz, predomina el código ___.|temporal|de lugar|tonotópico",
      "El principio de descarga se atribuye a ___.|Wever y Bray|Rutherford|Békésy"
    ],
    tf: [
      "La onda viajera alcanza su máximo cerca del ápice con los sonidos agudos.|F|Los agudos producen el máximo en la base, estrecha y rígida; el ápice, ancho y flexible, responde a los graves.",
      "La teoría de la frecuencia de Rutherford choca con que una neurona no puede disparar más de unas 1000 veces por segundo.|V",
      "En el principio de descarga, cada fibra dispara en una fase distinta de la onda para repartirse los ciclos.|F|Todas disparan en la misma fase (sincronización de fase), aunque se salten ciclos; entre todas marcan cada ciclo.",
      "Cómo extrae el cerebro el tono de la fundamental ausente sigue en debate entre modelos de lugar y de periodicidad.|V"
    ],
    q: [
      "Un tono de 12 000 Hz llega a un oído sano. ¿Qué código lo representa principalmente?|El de lugar, cerca de la base|El temporal, por descarga|El de lugar, cerca del ápice|Por encima de unos 4000–5000 Hz deja de funcionar el código temporal y domina el de lugar; los agudos vibran en la base.",
      "¿Qué fenómeno supone una dificultad para la teoría de lugar pura?|La fundamental ausente|La tonotopía coclear|La onda viajera|El lugar de la fundamental no se activa y aun así se oye ese tono, que parece deducirse de la periodicidad de los armónicos.",
      "¿Qué aporta el principio de descarga frente a la teoría de Rutherford?|Supera el límite de disparo de cada neurona|Sitúa el máximo de vibración según la frecuencia|Describe la amplificación de las ciliadas externas|Grupos de fibras disparan por turnos y entre todas siguen frecuencias superiores a la tasa máxima de una sola neurona.",
      "¿Por qué la teoría de lugar clásica no explica bien la finura de la discriminación de frecuencia?|La onda pasiva de Békésy es poco precisa|Las ciliadas internas no son tonotópicas|La base no responde a los agudos|La onda pasiva no basta: la precisión fina se debe al amplificador coclear de las ciliadas externas."
    ],
    inc: [
      "Sobre las teorías del tono|Rutherford describió la onda viajera|Helmholtz propuso una versión de resonancia|La tonotopía se mantiene hasta la corteza|La onda viajera la describió Békésy; Rutherford propuso la teoría de la frecuencia o del teléfono."
    ],
    seq: [],
    cls: [
      "Autor de cada teoría del tono|Teoría de lugar: Helmholtz; Békésy|Teoría de la frecuencia: Rutherford|Principio de descarga: Wever y Bray"
    ] },
  { t: "Vía y corteza auditivas",
    tip: "La rama coclear del VIII par lleva la señal a los núcleos cocleares, el complejo olivar superior (primera estación binaural), el lemnisco lateral, el colículo inferior, el geniculado medial y A1, en el giro de Heschl. Cada hemisferio recibe de ambos oídos, por lo que una lesión unilateral no deja sordo un oído. A1 es tonotópica, y el procesamiento sigue en el cinturón y el paracinturón y en dos vías, ventral («qué») y dorsal («dónde»).",
    v: [
      "Núcleos cocleares=Primera estación de la vía auditiva, en el bulbo, del mismo lado del oído",
      "Complejo olivar superior=Primera estación binaural, en la protuberancia",
      "Lemnisco lateral=Haz ascendente de la vía auditiva",
      "Colículo inferior=Estación auditiva del mesencéfalo",
      "Núcleo geniculado medial=Relevo talámico de la vía auditiva",
      "Giro de Heschl=Localización de la corteza auditiva primaria, en el temporal superior",
      "Sordera verbal pura=Agnosia auditiva en la que se oye pero no se reconocen las palabras",
      "Amusia=Agnosia auditiva para la música"
    ],
    g: [
      "Desde la ___, cada hemisferio recibe información de ambos oídos.|oliva superior|cóclea|corteza auditiva",
      "El relevo talámico de la vía auditiva es el núcleo geniculado ___.|medial|lateral|posterior",
      "Rauschecker y Tian describieron una vía auditiva ___ que identifica qué suena.|ventral|dorsal|medial",
      "Alrededor de A1 se sitúan el cinturón y el ___, que responden a sonidos más complejos.|paracinturón|lemnisco|giro angular",
      "La vía auditiva parte de la rama coclear del par craneal ___.|VIII|II|V"
    ],
    tf: [
      "Una lesión de la corteza auditiva de un hemisferio deja sordo el oído contrario.|F|Cada hemisferio recibe de ambos oídos; la lesión unilateral altera tareas complejas como localizar sonidos o entender el habla con ruido.",
      "Los núcleos cocleares ya reciben información de los dos oídos.|F|Reciben del oído de su lado; la primera estación binaural es el complejo olivar superior.",
      "A1 conserva la organización tonotópica de la cóclea.|V",
      "El colículo inferior es una estación de la vía auditiva y el superior, de la visual.|V"
    ],
    q: [
      "Tras un ictus temporal, un paciente oye los sonidos pero no reconoce las palabras habladas, aunque lee bien. ¿Qué presenta?|Sordera verbal pura|Amusia|Hipoacusia de transmisión|Es una agnosia auditiva: oye, pero no reconoce las palabras. La amusia afecta a la música.",
      "¿Cuál es la primera estación de la vía auditiva que compara tiempo e intensidad entre los oídos?|Complejo olivar superior|Núcleo geniculado medial|Núcleos cocleares del bulbo|El complejo olivar superior, en la protuberancia, es la primera estación binaural; los núcleos cocleares reciben de un solo oído.",
      "Un paciente con lesión cortical auditiva unilateral oye por ambos oídos, pero le cuesta localizar sonidos y seguir el habla con ruido. ¿Por qué no está sordo de un oído?|Cada hemisferio recibe de ambos oídos|La cóclea compensa la lesión cortical|Las vías auditivas no cruzan la línea media|Desde la oliva, cada hemisferio recibe información de los dos oídos, con predominio del contrario.",
      "Según Rauschecker y Tian, ¿qué procesa la vía auditiva dorsal?|Dónde está la fuente sonora|Qué objeto produce el sonido|El timbre de las voces conocidas|La vía dorsal o posterior, hacia el parietal, procesa dónde está la fuente; la ventral o anterior identifica qué suena."
    ],
    inc: [
      "Sobre la vía auditiva|El colículo inferior se sitúa en el tálamo|El lemnisco lateral es un haz ascendente|A1 está en la parte superior del temporal|El colículo inferior está en el mesencéfalo; el relevo talámico es el núcleo geniculado medial."
    ],
    seq: [
      "Vía auditiva ascendente|Núcleos cocleares>Complejo olivar superior>Lemnisco lateral>Colículo inferior>Núcleo geniculado medial>Corteza auditiva primaria (A1)"
    ],
    cls: [
      "Estructura auditiva o visual|Vía auditiva: colículo inferior; núcleo geniculado medial; giro de Heschl|Vía visual: colículo superior; núcleo geniculado lateral; cisura calcarina"
    ] }
] },
{ n: 8, t: "Audición II: localización, escena auditiva e integración multisensorial", cap: 2, pir: "media", mods: [
  { t: "Localización horizontal",
    tip: "La posición de una fuente se calcula a partir de claves; para el acimut, las principales son binaurales. La ITD, de hasta 600–700 µs, sirve para los graves y se calcula en la oliva superior medial; la ILD, debida a la sombra acústica de la cabeza, sirve para los agudos y se procesa en la oliva superior lateral. Es la teoría dúplex de Rayleigh (1907). El cono de confusión se resuelve moviendo la cabeza y con las claves espectrales.",
    v: [
      "Acimut=Coordenada izquierda-derecha de la posición de una fuente sonora",
      "ITD=Diferencia en el momento de llegada del sonido a cada oído; útil en graves",
      "ILD=Diferencia de intensidad entre los oídos por la sombra acústica; útil en agudos",
      "Sombra acústica=Atenuación que produce la cabeza en el oído lejano",
      "Teoría dúplex=Propuesta de Rayleigh: la ITD sirve para los graves y la ILD para los agudos",
      "Modelo de Jeffress=Detectores de coincidencias con caminos de distinta longitud desde cada oído",
      "Cono de confusión=Posiciones que producen las mismas claves binaurales, como delante y detrás",
      "Oliva superior medial=Núcleo donde se calcula la diferencia interaural de tiempo"
    ],
    g: [
      "La ITD alcanza su valor máximo, unos ___, cuando la fuente está a un lado.|600–700 µs|60–70 ms|6–7 µs",
      "La ILD es eficaz para frecuencias por encima de unos ___ Hz.|2000|500|20 000",
      "Los tonos puros se localizan peor en una franja intermedia, en torno a ___ Hz.|1500–3000|200–500|8000–12 000",
      "La ILD se procesa en la oliva superior ___.|lateral|medial|anterior",
      "La precisión de la localización horizontal es máxima para fuentes situadas ___.|delante|a los lados|detrás"
    ],
    tf: [
      "La ITD es una clave especialmente útil para localizar sonidos agudos.|F|La ITD es útil en los graves (por debajo de unos 1500 Hz); con agudos no se puede emparejar cada ciclo entre los dos oídos.",
      "Las ondas largas de los graves rodean la cabeza sin apenas atenuarse, por lo que generan poca ILD.|V",
      "Una fuente justo delante y otra en la posición simétrica detrás producen la misma ITD y la misma ILD.|V",
      "El modelo de Jeffress se cumple bien en mamíferos, mientras que en aves encaja mejor un código de poblaciones.|F|Es al revés: Jeffress se cumple bien en aves; en mamíferos encaja mejor un código que compara poblaciones de cada hemisferio."
    ],
    q: [
      "Un oyente intenta localizar un tono puro de 200 Hz que suena a su derecha. ¿En qué clave se basará sobre todo?|En la ITD, procesada en la oliva medial|En la ILD, procesada en la oliva lateral|En la ILD, procesada en la oliva medial|Con los graves la sombra acústica es mínima; la ITD, calculada en la oliva superior medial, es la clave eficaz.",
      "Un tono puro de 6000 Hz suena a la izquierda del oyente. ¿Qué clave binaural es la más útil?|La diferencia de intensidad|La diferencia temporal de llegada|El cono de confusión|Por encima de unos 2000 Hz la onda es más corta que la cabeza, que hace sombra acústica: la ILD es la clave eficaz.",
      "En una prueba, una persona confunde a veces si un sonido viene de delante o de detrás. ¿Qué le ayudaría más a resolverlo?|Mover un poco la cabeza|Taparse un oído|Subir el volumen del sonido|Mover la cabeza cambia las claves de forma distinta según la posición; también ayudan las claves espectrales del pabellón.",
      "¿Por qué la ITD deja de ser útil con frecuencias altas?|Los ciclos no se emparejan entre oídos|La cabeza no proyecta sombra acústica|El sonido llega a la vez a los dos oídos|Con los agudos la onda es tan corta que no se puede emparejar cada ciclo entre los dos oídos."
    ],
    inc: [
      "Sobre la teoría dúplex|Atribuye la ILD a los sonidos graves|Se debe a Lord Rayleigh (1907)|Explica la mala localización de tonos puros intermedios|La ILD sirve para los agudos, de onda más corta que la cabeza; la ITD, para los graves."
    ],
    seq: [],
    cls: [
      "Clave binaural|ITD: frecuencias bajas; oliva superior medial; modelo de Jeffress|ILD: frecuencias altas; oliva superior lateral; sombra acústica"
    ] },
  { t: "Elevación, distancia y efecto de precedencia",
    tip: "Para la elevación usamos claves espectrales monaurales: el pabellón, la cabeza y los hombros filtran el sonido según su dirección (HRTF), y el cerebro aprende a interpretar sus propias orejas. La distancia es la dimensión peor estimada y se apoya en la intensidad, la relación entre sonido directo y reverberado, el espectro y el paralaje de movimiento. Por el efecto de precedencia, el primer frente de onda determina la localización y los ecos próximos se fusionan.",
    v: [
      "Elevación=Coordenada arriba-abajo de la posición de una fuente sonora",
      "HRTF=Filtrado del sonido por el pabellón, la cabeza y el torso según su dirección",
      "Claves espectrales=Refuerzos y atenuaciones de frecuencias que dejan una firma por dirección",
      "Claves monaurales=Claves que se obtienen con un solo oído, como las del pabellón",
      "Sonido reverberado=Sonido que llega reflejado por paredes y techo",
      "Paralaje de movimiento auditivo=Al desplazarnos, las fuentes cercanas cambian de dirección más deprisa",
      "Efecto de precedencia=El primer frente de onda fija la localización y los ecos próximos se fusionan",
      "Eco=Repetición que se oye aparte cuando el sonido reflejado llega con un retraso mayor"
    ],
    g: [
      "La dimensión espacial del sonido peor estimada es la ___.|distancia|elevación|dirección",
      "A grandes distancias el aire atenúa más los ___, por eso un trueno lejano suena más grave.|agudos|graves|ecos",
      "El efecto de precedencia fue descrito por ___ y colaboradores en 1949.|Wallach|Bregman|Jeffress",
      "Si se altera artificialmente el pabellón, la localización en ___ empeora y se recupera tras un período de adaptación.|elevación|acimut|distancia",
      "Las HRTF se aplican en el sonido ___ de auriculares y realidad virtual.|espacial|monoaural|comprimido"
    ],
    tf: [
      "Las claves que permiten estimar la elevación son binaurales, por lo que requieren los dos oídos.|F|Las claves espectrales del pabellón son monaurales; por eso con un solo oído aún se estima en parte la elevación.",
      "Cuanto más lejos está una fuente en un recinto, mayor es la proporción de sonido reverberado que llega.|V",
      "En el efecto de precedencia, la localización la determina el sonido más intenso, aunque llegue después.|F|La determina el primero en llegar: si dos altavoces emiten lo mismo y uno se adelanta un poco, todo parece salir de él.",
      "Las claves espectrales dependen de la forma de las orejas de cada persona.|V"
    ],
    q: [
      "En una sala, dos altavoces emiten la misma voz, pero el izquierdo se adelanta unas pocas milésimas de segundo. ¿Qué oye el público?|Una voz que sale del izquierdo|Dos voces, una de cada altavoz|Una voz desde el punto medio|Es el efecto de precedencia: los sonidos casi simultáneos se fusionan y la localización la fija el primero en llegar.",
      "Un sonido suena justo encima de la cabeza. ¿Qué permite distinguirlo de uno situado justo delante?|Las claves espectrales del pabellón|La diferencia interaural de tiempo|La diferencia interaural de intensidad|En esas posiciones la ITD y la ILD son nulas; el pabellón, la cabeza y los hombros dejan una firma espectral distinta.",
      "Una persona lleva durante semanas unos moldes que alteran la forma de sus orejas. ¿Qué cabe esperar?|Peor elevación y adaptación posterior|Pérdida permanente de la localización|Peor acimut, sin adaptación posible|Al alterar el pabellón empeora la localización en elevación, que se recupera tras un período de adaptación.",
      "Al oír muy débil la voz de un amigo, alguien juzga que está lejos. ¿Qué clave de distancia usa?|La intensidad de una fuente conocida|El efecto de precedencia|La diferencia interaural de tiempo|La intensidad es útil para estimar la distancia cuando se conoce la intensidad habitual de la fuente, como una voz."
    ],
    inc: [
      "Sobre las claves de distancia|La ITD es la clave principal de distancia|Los agudos se atenúan más con la distancia|El sonido reverberado aumenta con la distancia|Las claves de distancia son la intensidad, el reverberado, el espectro y el paralaje de movimiento; la ITD sirve para el acimut."
    ],
    seq: [],
    cls: [
      "Clave según la dimensión|Elevación: claves espectrales; HRTF; forma del pabellón|Distancia: intensidad; reverberación; espectro; paralaje de movimiento"
    ] },
  { t: "Análisis de la escena auditiva",
    tip: "A cada tímpano llega una sola onda, suma de todas las fuentes; el análisis de la escena auditiva (Bregman, 1990) la descompone y asigna cada componente a su fuente. El agrupamiento simultáneo usa el inicio común, la armonicidad, la localización y la modulación común; el secuencial forma corrientes por proximidad en frecuencia y en tiempo, timbre y continuidad. Además del agrupamiento primitivo, de abajo arriba, hay otro basado en esquemas, de arriba abajo.",
    v: [
      "Albert Bregman=Autor del marco del análisis de la escena auditiva (1990)",
      "Agrupamiento simultáneo=Decidir qué frecuencias presentes a la vez pertenecen a la misma fuente",
      "Armonicidad=Las frecuencias múltiplos de una fundamental se oyen como un solo sonido",
      "Streaming auditivo=Agrupamiento de sonidos sucesivos en corrientes de una misma fuente",
      "Ilusión de continuidad=Un tono interrumpido por ráfagas de ruido se sigue oyendo sin cortes",
      "Agrupamiento por esquemas=Organización guiada por el conocimiento previo, de arriba abajo",
      "Enmascaramiento=Un sonido se oye peor por la presencia de otro, sobre todo de frecuencia próxima",
      "Problema del cóctel=Seguir una voz entre otras, estudiado por Cherry (1953)"
    ],
    g: [
      "Si un armónico de un tono complejo se desafina, tiende a ___ del resto.|separarse|fusionarse|enmascararse",
      "Al alternar rápido un tono grave y uno agudo muy separados se oyen ___.|dos corrientes|una melodía|un acorde",
      "La ilusión de continuidad es el equivalente auditivo del ___ visual.|completamiento|enmascaramiento|movimiento aparente",
      "El agrupamiento ___ está guiado por el estímulo, de abajo arriba.|primitivo|esquemático|atencional",
      "Los componentes que empiezan y acaban juntos suelen pertenecer a la misma ___.|fuente|octava|rampa"
    ],
    tf: [
      "Si un tono grave y uno agudo próximos en frecuencia se alternan lentamente, se oye una sola melodía.|V",
      "La armonicidad es una clave de agrupamiento secuencial.|F|Es una clave de agrupamiento simultáneo: decide qué frecuencias presentes a la vez pertenecen a la misma fuente.",
      "El propio nombre se separa con más facilidad del fondo gracias al agrupamiento basado en esquemas.|V",
      "Bregman planteó el análisis de la escena auditiva como un proceso ajeno a los principios de la Gestalt.|F|Bregman lo comparó con la organización perceptiva de la Gestalt; varias de sus claves tienen equivalentes visuales."
    ],
    q: [
      "Un experimentador alterna rápidamente un tono de 400 Hz y otro de 2000 Hz. ¿Qué suelen percibir los oyentes?|Dos corrientes paralelas|Una única melodía alterna|Un solo tono intermedio|Con alternancia rápida y gran separación en frecuencia se forman dos corrientes; si están próximos o va lento, una melodía.",
      "Un tono continuo se interrumpe con breves ráfagas de ruido intenso. ¿Qué oyen los participantes?|Un tono continuo bajo el ruido|El tono cortado en fragmentos|Solo el ruido, sin el tono|Es la ilusión de continuidad: el tono parece pasar «por detrás» del ruido, como en el completamiento visual.",
      "Una persona con pérdida auditiva se queja de no poder seguir una conversación en un restaurante ruidoso. ¿Qué proceso le falla principalmente?|El análisis de la escena auditiva|La igualación de impedancias|El reflejo acústico del oído medio|Separar una voz de la mezcla exige agrupar los componentes por fuente; es una de las primeras quejas en la pérdida auditiva.",
      "¿Qué ejemplo corresponde al agrupamiento basado en esquemas?|Separar una melodía conocida del fondo|Agrupar componentes con inicio común|Separar un armónico desafinado|El agrupamiento por esquemas depende del conocimiento previo; el inicio común y la armonicidad son claves primitivas."
    ],
    inc: [
      "Sobre el agrupamiento de Bregman|La continuidad agrupa componentes simultáneos|La modulación común agrupa componentes simultáneos|La semejanza de timbre agrupa sonidos sucesivos|La continuidad, como en la ilusión de continuidad, es una clave de agrupamiento secuencial."
    ],
    seq: [],
    cls: [
      "Tipo de agrupamiento|Simultáneo: inicio y final comunes; armonicidad; modulación común|Secuencial: proximidad en frecuencia; semejanza de timbre; continuidad"
    ] },
  { t: "Integración multisensorial",
    tip: "El cerebro combina las señales de varios sentidos sobre un mismo suceso, lo que mejora la detección y la identificación, sobre todo con señales pobres. En el efecto McGurk, oír /ba/ viendo /ga/ produce /da/; en el efecto ventrílocuo, la visión captura la localización del sonido. Ningún sentido domina siempre: cada señal se pondera según su fiabilidad para la tarea. La integración es más probable si las señales coinciden en tiempo y espacio, y se discute si requiere atención.",
    v: [
      "Efecto McGurk=Percepción de una sílaba intermedia cuando el audio y los labios no coinciden",
      "Efecto ventrílocuo=El sonido se percibe en la posición de un estímulo visual simultáneo",
      "Ponderación por fiabilidad=Dar más peso a la señal más precisa para cada tarea",
      "Neuronas multisensoriales=Células que responden más a la combinación de sentidos que a cada uno aislado",
      "Colículo superior=Estructura con neuronas multisensoriales que integran varios sentidos",
      "Coincidencia temporal=Condición que favorece la integración: señales que ocurren a la vez",
      "Percepción del habla=Proceso audiovisual que integra la voz y el movimiento de los labios",
      "Captura visual=Dominio de la visión sobre la localización auditiva"
    ],
    g: [
      "En el estudio de McGurk y MacDonald se oía /ba/ y los labios articulaban ___.|/ga/|/da/|/pa/",
      "Para juzgar ___ ocurre algo suele ser más precisa la audición.|cuándo|dónde|cómo",
      "Si la señal visual se degrada con poca luz, el sonido ___ influencia.|gana|pierde|mantiene",
      "Las neuronas multisensoriales responden mucho más a la combinación, sobre todo si los estímulos aislados son ___.|débiles|intensos|familiares",
      "El habla activa regiones temporales con predominio ___.|izquierdo|derecho|frontal"
    ],
    tf: [
      "En el efecto ventrílocuo domina la visión porque suele ser más precisa para localizar.|V",
      "Cuando visión y audición entran en conflicto, la visión determina tanto el dónde como el cuándo del suceso.|F|Para el cuándo suele ser más precisa la audición: los pitidos que acompañan a destellos rápidos cambian cuántos destellos se perciben.",
      "Según el consenso actual, la integración multisensorial es un proceso automático que no depende de la atención.|F|Es un debate abierto: algunos efectos, como el McGurk, se reducen cuando la atención está ocupada.",
      "Un doblaje se acepta si el desfase entre labios y voz es pequeño, porque la integración tolera pequeños desfases.|V"
    ],
    q: [
      "En un experimento se oye /ba/ mientras el vídeo muestra unos labios que dicen /ga/. ¿Qué perciben muchos participantes?|/da/|/ba/|/ga/|Es el efecto McGurk: la información visual cambia lo que oímos; con los ojos cerrados se vuelve a oír /ba/.",
      "En el cine, la voz del actor parece salir de su boca en la pantalla, aunque los altavoces estén a los lados. ¿Qué fenómeno es?|El efecto ventrílocuo|El efecto de precedencia|El efecto McGurk|Si sonido e imagen coinciden en el tiempo pero no en el lugar, el sonido se percibe en la posición del estímulo visual.",
      "Un participante ve dos destellos rápidos acompañados de tres pitidos. ¿Qué es probable que ocurra?|Que perciba más destellos|Que oiga solo dos pitidos|Que no perciba los destellos|Para el cuándo suele dominar la audición: el número de pitidos puede cambiar el número de destellos percibidos.",
      "¿Qué predice la ponderación por fiabilidad si la escena visual está casi a oscuras?|Que el sonido gane peso en la localización|Que la visión siga dominando la localización|Que se suprima la información auditiva|Si la señal visual se degrada pierde peso, y el sonido gana influencia también en la localización."
    ],
    inc: [
      "Sobre la integración multisensorial|Se favorece cuando las señales difieren en el espacio|Mejora la detección sobre todo con señales pobres|Hay neuronas multisensoriales en el colículo superior|La integración es más probable cuando las señales coinciden en tiempo y en espacio."
    ],
    seq: [],
    cls: [
      "Qué sentido suele dominar|Visión: localización espacial; efecto ventrílocuo|Audición: momento de los sucesos; número de destellos con pitidos"
    ] }
] }
);

// SAIMAP Psicología · Atención y Percepción · Unidades 9–12
window.COURSE.units.push(
{ n: 9, t: "Tacto y dolor", cap: 2, pir: "media", mods: [
  { t: "Mecanorreceptores y vías somatosensoriales",
    tip: "En la piel glabra hay cuatro mecanorreceptores que se distinguen por su velocidad de adaptación y el tamaño de su campo receptivo: Merkel y Meissner son superficiales (campo pequeño); Ruffini y Pacini, profundos (campo grande). El tacto fino, la vibración y la propiocepción suben por la columna dorsal–lemnisco medial y cruzan en el bulbo; el dolor y la temperatura, por la vía espinotalámica, que cruza en la médula. Ambas llegan por el tálamo a S1, en el giro poscentral.",
    v: [
      "Discos de Merkel=Receptores superficiales de adaptación lenta para presión fina y bordes",
      "Corpúsculos de Meissner=Receptores superficiales de adaptación rápida para aleteo y deslizamiento",
      "Corpúsculos de Ruffini=Receptores profundos de adaptación lenta que captan el estiramiento de la piel",
      "Corpúsculos de Pacini=Receptores profundos de adaptación rápida, máximamente sensibles hacia 250 Hz",
      "TRPV1=Canal que detecta el calor y que también activa la capsaicina",
      "TRPM8=Canal que detecta el frío y que activa el mentol",
      "Vía espinotalámica=Vía anterolateral del dolor y la temperatura que cruza en la médula",
      "Homúnculo sensorial=Mapa somatotópico de S1 con manos, labios y lengua sobrerrepresentados"
    ],
    g: [
      "Los receptores de adaptación ___ siguen respondiendo mientras dura el estímulo.|lenta|rápida|cruzada",
      "Las capas concéntricas del corpúsculo de ___ amortiguan la presión mantenida.|Pacini|Merkel|Ruffini",
      "La vía de la columna dorsal–lemnisco medial cruza al lado contrario en el ___.|bulbo raquídeo|asta dorsal|mesencéfalo",
      "El dolor lento y sordo viaja por fibras ___, finas y sin mielina.|C|Aδ|Aβ",
      "La corteza somatosensorial primaria se sitúa en el giro ___ del lóbulo parietal.|poscentral|precentral|angular"
    ],
    tf: [
      "Los discos de Merkel y los corpúsculos de Meissner tienen campos receptivos pequeños.|V",
      "El corpúsculo de Pacini es un receptor superficial de adaptación lenta especializado en el detalle fino.|F|Eso describe al disco de Merkel; el Pacini es profundo, de adaptación rápida y detecta la vibración rápida.",
      "La vía espinotalámica hace sinapsis en el asta dorsal y cruza enseguida, en la propia médula.|V",
      "La propiocepción asciende por la vía espinotalámica junto con la temperatura.|F|La propiocepción, con el tacto fino y la vibración, sube por la columna dorsal–lemnisco medial."
    ],
    q: [
      "Un paciente con una lesión que afecta a la vía espinotalámica en la médula pierde sobre todo la sensibilidad a…|el dolor y la temperatura|la vibración y el tacto fino|la posición de las articulaciones|La vía espinotalámica lleva dolor y temperatura; vibración, tacto fino y propiocepción van por la vía lemniscal.",
      "¿Qué combinación de propiedades corresponde al corpúsculo de Ruffini?|Profundo y de adaptación lenta|Superficial y de adaptación lenta|Profundo y de adaptación rápida|El Ruffini (SA2) es profundo, con campo grande, y de adaptación lenta; detecta el estiramiento de la piel.",
      "¿Por qué el homúnculo sensorial tiene manos y labios enormes?|Porque ocupan más superficie de S1|Porque tienen más fibras de tipo C|Porque su vía cruza en el bulbo|S1 es somatotópica y dedica un espacio desproporcionado a manos, labios y lengua (Penfield y Rasmussen, 1950).",
      "Un caramelo de menta produce sensación de frescor porque el mentol activa…|el canal TRPM8|el canal TRPV1|los canales Piezo|El frío se detecta con TRPM8, que activa el mentol; TRPV1 detecta el calor y lo activa la capsaicina."
    ],
    inc: [
      "Sobre las fibras y vías somatosensoriales|Las fibras Aβ son finas y sin mielina|Las fibras Aδ conducen el dolor rápido y el frío|Ambas vías llegan al núcleo ventral posterior del tálamo|Las Aβ son gruesas y mielinizadas y llevan el tacto; las finas y sin mielina son las C."
    ],
    seq: [
      "Recorrido de la vía lemniscal|Mecanorreceptor de la piel>Columna dorsal de la médula, del mismo lado>Cruce en el bulbo raquídeo>Núcleo ventral posterior del tálamo>Corteza somatosensorial primaria"
    ],
    cls: [
      "Profundidad del mecanorreceptor|Superficial, campo pequeño: discos de Merkel; corpúsculos de Meissner|Profundo, campo grande: corpúsculos de Ruffini; corpúsculos de Pacini"
    ] },
  { t: "Agudeza táctil, vibración y textura",
    tip: "La agudeza táctil se mide con el umbral de dos puntos (2–4 mm en las yemas, 30–40 mm en la espalda) o, hoy, con la agudeza de rejilla; depende de la densidad de receptores de Merkel y de la magnificación cortical. Según la teoría dúplex, las texturas gruesas se perciben con claves espaciales (Merkel) y las finas con claves vibratorias al deslizar el dedo (Pacini). El tacto activo o háptico combina piel, músculos, articulaciones y órdenes motoras.",
    v: [
      "Umbral de dos puntos=Separación mínima entre dos contactos simultáneos para percibirlos como dos",
      "Agudeza de rejilla=Separación mínima entre surcos a la que se acierta su orientación",
      "Magnificación cortical=Mayor superficie de S1 dedicada a las zonas más sensibles del cuerpo",
      "Teoría dúplex=Explicación de la textura por claves espaciales y vibratorias (Katz, 1925)",
      "Claves espaciales=Patrón de relieves que presiona la piel, útil para texturas gruesas",
      "Claves vibratorias=Vibraciones al deslizar el dedo, útiles para texturas finas",
      "Percepción háptica=Reconocimiento activo de objetos combinando piel, músculos, articulaciones y movimiento",
      "Procedimientos exploratorios=Movimientos espontáneos de la mano según la propiedad que se busca"
    ],
    g: [
      "El umbral de dos puntos en la yema de los dedos es de unos ___.|2–4 mm|30–40 mm|10–15 mm",
      "Según la teoría dúplex, las texturas gruesas se perciben sobre todo con claves ___.|espaciales|vibratorias|térmicas",
      "Las vibraciones lentas, percibidas como un aleteo, las detectan los corpúsculos de ___.|Meissner|Pacini|Ruffini",
      "Para averiguar la dureza de un objeto, el procedimiento exploratorio espontáneo es ___.|presionar|frotar|sostener",
      "La mayor agudeza de las yemas se debe en parte a su alta densidad de discos de ___.|Merkel|Pacini|Ruffini"
    ],
    tf: [
      "Sin movimiento del dedo, una superficie muy fina apenas se distingue de una lisa.|V",
      "Las texturas finas, por debajo de unos 0,2 mm, se perciben sobre todo por el patrón espacial que codifican los discos de Merkel.|F|Se perciben por claves vibratorias al deslizar el dedo, que detectan los corpúsculos de Pacini.",
      "Hoy se prefiere la agudeza de rejilla al umbral de dos puntos como medida de la agudeza táctil.|V",
      "Según Lederman y Klatzky, para conocer el peso de un objeto lo frotamos con las yemas.|F|Frotar sirve para la textura; para el peso se sostiene el objeto sin apoyo."
    ],
    q: [
      "Una investigadora toca la espalda de un participante con dos puntas separadas 15 mm, y él dice notar una sola. ¿Qué lo explica mejor?|Menor densidad de receptores de Merkel|Adaptación rápida de los Pacini|Cruce de la vía lemniscal en el bulbo|En la espalda el umbral ronda los 30–40 mm: hay pocos receptores de Merkel y poca magnificación cortical.",
      "Para reconocer a ciegas la forma exacta de una llave, el procedimiento exploratorio adecuado es…|seguir su contorno|envolverla con la mano|sostenerla sin apoyo|Seguir el contorno da la forma exacta; envolver con la mano, la forma global, y sostener sin apoyo, el peso.",
      "¿Qué diferencia el tacto activo del pasivo?|Integra información motora y propioceptiva|Depende solo de receptores de adaptación lenta|Se procesa fuera de la corteza somatosensorial|La percepción háptica combina la piel con músculos, articulaciones y órdenes motoras; así se reconocen objetos en uno o dos segundos.",
      "¿A qué se parece la magnificación cortical de las yemas en S1?|A la sobrerrepresentación de la fóvea en V1|A la convergencia de receptores en glomérulos|A la adaptación del corpúsculo de Pacini|Igual que la fóvea ocupa más superficie en V1, las zonas táctiles más sensibles ocupan más superficie en S1."
    ],
    inc: [
      "Sobre la percepción de la textura y la vibración|La vibración rápida la detectan los discos de Merkel|La teoría dúplex de la textura se remonta a Katz (1925)|Las texturas finas requieren deslizar el dedo|La vibración rápida corresponde al corpúsculo de Pacini; el Merkel detecta presión fina y detalle espacial."
    ],
    seq: [],
    cls: [
      "Clave de la textura según la teoría dúplex|Claves espaciales: texturas gruesas; discos de Merkel; basta apoyar el dedo|Claves vibratorias: texturas finas; corpúsculos de Pacini; hay que deslizar el dedo"
    ] },
  { t: "El dolor: definición y tipos",
    tip: "La IASP (2020) define el dolor como «una experiencia sensorial y emocional desagradable asociada, o similar a la asociada, a un daño tisular real o potencial». Dolor y nocicepción son fenómenos distintos: puede haber uno sin la otra. Según su mecanismo, el dolor es nociceptivo, neuropático o nociplástico, y la CIE-11 lo considera crónico cuando persiste o reaparece durante más de tres meses.",
    v: [
      "Nocicepción=Proceso neural de detección de estímulos dañinos",
      "Nociceptores=Terminaciones libres de fibras Aδ y C que responden a estímulos dañinos",
      "Doble dolor=Dolor agudo y localizado seguido de otro sordo, difuso y duradero",
      "Dolor nociceptivo=Dolor por daño real o amenaza de daño en tejidos no nerviosos",
      "Dolor neuropático=Dolor por lesión o enfermedad del sistema nervioso somatosensorial",
      "Dolor nociplástico=Nocicepción alterada sin daño tisular ni lesión nerviosa que la expliquen",
      "Dolor crónico=Dolor que persiste o reaparece durante más de tres meses (CIE-11)",
      "Insensibilidad congénita al dolor=Condición en la que se sufren lesiones graves sin advertirlas"
    ],
    g: [
      "Según la IASP, no poder ___ el dolor no significa que no exista.|comunicar|localizar|tolerar",
      "El dolor agudo y bien localizado que se nota primero al golpearse un dedo lo conducen las fibras ___.|Aδ|C|Aβ",
      "La categoría de dolor ___ se añadió en 2017.|nociplástico|neuropático|inflamatorio",
      "La dimensión afectivo-motivacional del dolor se asocia a la corteza cingulada anterior y la ___.|ínsula|corteza S2|corteza motora",
      "La neuralgia del trigémino es un ejemplo de dolor ___.|neuropático|nociceptivo|nociplástico"
    ],
    tf: [
      "Un deportista lesionado que sigue jugando sin notar dolor ilustra que puede haber nocicepción sin dolor.|V",
      "Según la IASP, el dolor puede deducirse de la actividad de las neuronas sensoriales.|F|La IASP subraya que dolor y nocicepción son distintos: el dolor no puede deducirse solo de esa actividad.",
      "La fibromialgia se suele citar como ejemplo de dolor nociplástico.|V",
      "La dimensión sensorial-discriminativa del dolor depende sobre todo de la corteza cingulada anterior y la ínsula.|F|Cingulada anterior e ínsula se asocian a la dimensión afectivo-motivacional; la sensorial-discriminativa, a S1 y S2."
    ],
    q: [
      "Una paciente amputada sigue sintiendo dolor en la pierna que ya no tiene. ¿Qué ilustra?|Dolor sin nocicepción|Nocicepción sin dolor|Dolor nociceptivo puro|El miembro fantasma duele sin estímulos dañinos en ese tejido: es dolor sin nocicepción.",
      "Un paciente con neuropatía diabética refiere quemazón en los pies. ¿Qué tipo de dolor es según la IASP?|Neuropático|Nociplástico|Nociceptivo|La neuropatía diabética es una lesión o enfermedad del sistema nervioso somatosensorial: dolor neuropático.",
      "¿Qué recoge la definición de dolor de la IASP de 2020?|Una experiencia sensorial y emocional|Una señal proporcional al daño tisular|Una respuesta refleja de los nociceptores|Lo define como experiencia sensorial y emocional desagradable asociada, o similar a la asociada, a un daño real o potencial.",
      "¿Qué muestran las personas con insensibilidad congénita al dolor?|El valor adaptativo del dolor|Que el dolor carece de base cortical|Que existe un centro del dolor|Sufren lesiones graves sin advertirlas, lo que revela la función protectora del dolor."
    ],
    inc: [
      "Sobre el dolor según la IASP y la CIE-11|Existe un centro cerebral único del dolor|El dolor crónico dura más de tres meses|El dolor nociceptivo procede de tejidos no nerviosos|No hay un «centro del dolor», sino una red distribuida con bases en parte distintas para cada dimensión."
    ],
    seq: [],
    cls: [
      "Tipo de dolor según su mecanismo|Nociceptivo: quemadura; fractura; inflamación articular|Neuropático: neuralgia del trigémino; neuropatía diabética|Nociplástico: fibromialgia"
    ] },
  { t: "La teoría de la puerta de control y la modulación del dolor",
    tip: "Melzack y Wall (1965) propusieron que en el asta dorsal (sustancia gelatinosa) una «puerta» regula cuánta señal nociceptiva llega a las células T: las fibras gruesas Aβ la cierran, las finas Aδ y C la abren y el control descendente también la modula. La modulación descendente parte de la sustancia gris periacueductal y se apoya en los opioides endógenos. La idea central sigue vigente, aunque el circuito concreto no se ha confirmado tal cual.",
    v: [
      "Células T=Neuronas de transmisión que envían la señal nociceptiva al cerebro",
      "Sustancia gelatinosa=Región del asta dorsal donde se situaría la puerta de control",
      "Fibras Aβ=Fibras gruesas de tacto no doloroso que cierran la puerta",
      "Sustancia gris periacueductal=Región del mesencéfalo que inicia la analgesia descendente",
      "Naloxona=Antagonista opioide que bloquea en parte la analgesia por placebo",
      "Efecto nocebo=Empeoramiento del dolor por esperar un daño",
      "TENS=Estimulación eléctrica nerviosa transcutánea, basada en la puerta de control",
      "Neuromatriz=Red cerebral modelada por la experiencia que genera la vivencia del dolor y del cuerpo"
    ],
    g: [
      "Según Melzack y Wall, las fibras finas Aδ y C ___ la puerta del dolor.|abren|cierran|eliminan",
      "Frotarse la zona golpeada alivia el dolor porque activa fibras ___.|Aβ|C|Aδ",
      "La teoría de la puerta sustituyó al modelo de ___, según el cual el dolor es proporcional al daño.|vía directa|neuromatriz|doble dolor",
      "Según la teoría, cuanto más se activan las ___, más dolor se siente.|células T|interneuronas|fibras Aβ",
      "Melzack propuso en 1999 la ___, que explica que el miembro fantasma siga doliendo.|neuromatriz|puerta de control|vía directa"
    ],
    tf: [
      "Las fibras gruesas Aβ activan interneuronas inhibidoras que frenan a las células T.|V",
      "Según Melzack y Wall, las fibras nociceptivas Aδ y C cierran la puerta al activar interneuronas inhibidoras.|F|Es al revés: las finas inhiben esas interneuronas y abren la puerta; las gruesas Aβ la cierran.",
      "Hoy se considera confirmado tal cual el circuito de interneuronas y células T que dibujaron Melzack y Wall.|F|No se ha confirmado tal cual; el valor actual de la teoría es sobre todo conceptual.",
      "Estimular eléctricamente la sustancia gris periacueductal produce analgesia.|V"
    ],
    q: [
      "Un niño se golpea el codo y se lo frota con fuerza; el dolor disminuye. Según la teoría de la puerta, ¿por qué?|Las fibras Aβ cierran la puerta|Las fibras C activan la SGPA|Las células T se adaptan rápido|Frotar activa fibras gruesas Aβ, que excitan interneuronas inhibidoras y reducen la salida de las células T.",
      "En un ensayo, la analgesia por placebo se reduce al administrar naloxona. ¿Qué sugiere?|Que en ella intervienen opioides endógenos|Que el placebo actúa sobre las fibras Aβ|Que la puerta se abre por la vía directa|La naloxona es un antagonista opioide; si bloquea en parte el placebo, este se apoya en opioides endógenos.",
      "¿Qué hecho no podía explicar el modelo de vía directa del dolor?|Que una herida duela distinto según el contexto|Que las fibras C conduzcan el dolor lento y sordo|Que un estímulo intenso active los nociceptores|Suponía un dolor proporcional al daño; no explica el miembro fantasma ni el efecto del contexto.",
      "Según la teoría de la puerta, ¿cómo influyen la atención, la emoción y las expectativas?|Mediante el control descendente|Mediante las fibras gruesas Aβ|Mediante el relevo del tálamo|El control descendente desde el cerebro puede abrir o cerrar la puerta; así actúan la atención, la emoción y las expectativas."
    ],
    inc: [
      "Sobre los factores psicológicos que modulan el dolor|La ansiedad tiende a reducir el dolor|Distraerse tiende a reducir el dolor|Esperar daño lo empeora (efecto nocebo)|La ansiedad y el miedo intensifican el dolor; la distracción y esperar alivio lo reducen."
    ],
    seq: [
      "Vía de modulación descendente del dolor|Sustancia gris periacueductal>Bulbo rostroventromedial>Médula espinal>Inhibición de la transmisión nociceptiva"
    ],
    cls: [
      "Efecto sobre la puerta de control|Abren la puerta: fibras Aδ; fibras C|Cierran la puerta: fibras Aβ; frotar la zona golpeada; TENS"
    ] }
] },
{ n: 10, t: "Olfato y gusto", cap: 2, pir: "baja", mods: [
  { t: "El sistema olfativo",
    tip: "Cada neurona receptora olfativa expresa un solo tipo de receptor (unos 350–400 funcionales en humanos; Buck y Axel, 1991), y todas las del mismo tipo convergen en el mismo glomérulo del bulbo. Cada olor se identifica por el patrón de receptores activados: el código combinatorio. Del bulbo la información va a la corteza piriforme, la amígdala y la corteza entorrinal sin relevo talámico previo, y después a la orbitofrontal.",
    v: [
      "Ruta ortonasal=Llegada de los odorantes a la nariz al inspirar",
      "Ruta retronasal=Paso de odorantes de la boca a la nariz al masticar y tragar",
      "Lámina cribosa=Hueso del etmoides que atraviesan los axones olfativos hacia el bulbo",
      "Glomérulo=Unidad del bulbo donde convergen las neuronas con el mismo receptor",
      "Células mitrales=Neuronas del bulbo que reciben las sinapsis de los receptores en los glomérulos",
      "Código combinatorio=Identificación de cada olor por el patrón de receptores activados",
      "Corteza piriforme=Corteza olfativa primaria",
      "Corteza orbitofrontal=Área olfativa secundaria donde se identifica y valora el olor"
    ],
    g: [
      "Buck y Axel recibieron el Nobel en 2004 por descubrir la familia de genes de los receptores ___.|olfativos|gustativos|táctiles",
      "En los seres humanos hay unos ___ tipos de receptores olfativos funcionales.|350–400|25–30|900–1000",
      "Las neuronas receptoras olfativas se sustituyen aproximadamente cada ___.|uno o dos meses|una o dos semanas|uno o dos años",
      "A diferencia de los demás sentidos, el olfato llega a la corteza sin pasar antes por el ___.|tálamo|bulbo|hipocampo",
      "Según el principio «una neurona, un receptor», cada neurona receptora expresa ___.|un solo tipo de receptor|varios tipos de receptor|todos los receptores"
    ],
    tf: [
      "Las neuronas que expresan el mismo receptor están agrupadas en una misma zona del epitelio olfativo.|F|Están dispersas por el epitelio; lo que se agrupa es su destino: convergen en el mismo glomérulo.",
      "Cada odorante activa varios tipos de receptores y cada receptor responde a varios odorantes.|V",
      "Los humanos tienen unos 800–900 genes de receptores olfativos, pero aproximadamente la mitad son pseudogenes.|V",
      "El olfato carece por completo de conexiones con el tálamo.|F|Llega a la corteza sin relevo talámico previo, pero existe una vía secundaria a través del tálamo."
    ],
    q: [
      "¿Qué ayuda a explicar el fuerte vínculo entre olores, emociones y recuerdos?|La conexión directa con amígdala y región entorrinal|El relevo previo por el núcleo ventral posterior|La convergencia de varios receptores en cada neurona|El bulbo proyecta directamente a la amígdala y a la corteza entorrinal, puerta del hipocampo.",
      "Con unos 400 tipos de receptores, una persona distingue muchísimos más olores. ¿Qué principio lo permite?|El código combinatorio|Una neurona, muchos receptores|La ruta ortonasal|Lo que identifica un olor es el patrón de receptores activados, y con unos 400 tipos caben enormes combinaciones.",
      "¿Dónde hacen sinapsis los axones de las neuronas receptoras olfativas?|En los glomérulos del bulbo olfativo|En la corteza piriforme directamente|En el núcleo del tracto solitario|Atraviesan la lámina cribosa y hacen sinapsis con células mitrales y en penacho en los glomérulos del bulbo.",
      "¿Qué región se considera la corteza olfativa primaria?|La corteza piriforme|La corteza orbitofrontal|La ínsula anterior|La piriforme es la primaria; la orbitofrontal es el área olfativa secundaria, donde se identifica y valora el olor."
    ],
    inc: [
      "Sobre el sistema olfativo|Las neuronas receptoras olfativas son unipolares|Sus axones atraviesan la lámina cribosa del etmoides|El epitelio olfativo ocupa unos 10 cm² en total|Son neuronas bipolares: sus cilios captan los odorantes en la mucosa y su axón llega al bulbo."
    ],
    seq: [
      "Recorrido de la información olfativa|Cilios de la neurona receptora en la mucosa>Axón a través de la lámina cribosa>Glomérulo del bulbo olfativo>Corteza piriforme>Corteza orbitofrontal"
    ],
    cls: [] },
  { t: "Capacidades olfativas",
    tip: "El olfato humano es muy sensible para algunas sustancias, como los mercaptanos que se añaden al gas doméstico. Lo difícil es identificar y nombrar los olores (fenómeno de la «punta de la nariz»), sobre todo por su conexión con el lenguaje. Cuántos olores distinguimos sigue en debate: el billón de Bushdid et al. (2014) depende de supuestos discutidos (Gerkin y Castro, 2015), y la idea de un olfato humano pobre es un mito del siglo XIX (McGann, 2017).",
    v: [
      "Mercaptanos=Compuestos de azufre añadidos al gas doméstico porque se detectan en cantidades ínfimas",
      "Umbral de detección=Concentración mínima a la que se nota que algo huele",
      "Umbral de reconocimiento=Concentración, más alta, a la que se identifica qué es el olor",
      "Punta de la nariz=Olor familiar cuyo nombre no se encuentra",
      "Adaptación olfativa=Dejar de notar un olor tras una exposición continuada",
      "Efecto Proust=Evocación por los olores de recuerdos autobiográficos antiguos y emotivos",
      "Anosmia=Pérdida total del olfato",
      "Hiposmia=Pérdida parcial del olfato"
    ],
    g: [
      "No percibimos el olor de nuestra propia casa debido a la ___.|adaptación|hiposmia|convergencia",
      "Al identificar olores sin contexto, el rendimiento mejora mucho si se dan ___.|opciones|más moléculas|olores mezclados",
      "Bushdid y colaboradores (2014) estimaron que podríamos distinguir más de un ___ de mezclas.|billón|millar|millón",
      "Según McGann (2017), la idea de que los humanos tenemos un olfato pobre es un mito del siglo ___.|XIX|XVII|XX",
      "La pérdida total del olfato se denomina ___.|anosmia|hiposmia|ageusia"
    ],
    tf: [
      "El umbral de reconocimiento de un olor es más bajo que su umbral de detección.|F|Es al revés: primero se nota que «huele a algo» y, a una concentración más alta, se identifica qué es.",
      "Los olores naturales, formados por muchas moléculas, se perciben como un único objeto olfativo.|V",
      "Gerkin y Castro (2015) confirmaron que los humanos distinguimos más de un billón de olores.|F|Mostraron que esa estimación depende mucho de los supuestos y concluyeron que la cifra sigue siendo desconocida.",
      "La dificultad para identificar olores se debe sobre todo a su conexión con el lenguaje.|V"
    ],
    q: [
      "Una persona dice: «Este olor lo conozco, pero no sé decir qué es». Si se le ofrecen tres opciones, acierta. ¿Qué ilustra?|Que el problema está en nombrar el olor|Que su umbral de detección es muy alto|Que sufre una hiposmia de origen viral|Es el fenómeno de la «punta de la nariz»: el olor se reconoce, pero falla el acceso a su nombre.",
      "¿Por qué se añaden mercaptanos al gas doméstico?|Porque se notan en dosis bajísimas|Porque refuerzan la adaptación olfativa|Porque activan receptores de umbral alto|El gas no huele por sí mismo, y estos compuestos de azufre se detectan en partes por mil millones.",
      "¿Qué puede afirmarse hoy sobre el número de olores que distinguimos?|Que es muy grande pero desconocido|Que superan con certeza el billón|Que coinciden con los 400 receptores|La cifra de Bushdid et al. depende de supuestos discutidos; está claro que es muy grande, pero se desconoce.",
      "Un paciente con hiposmia sin causa aparente acude a consulta. ¿Por qué conviene tenerlo en cuenta?|Puede anticipar Parkinson o Alzheimer|Indica siempre una lesión del bulbo|Revela un déficit del umbral gustativo|La hiposmia puede ser un marcador temprano de enfermedades neurodegenerativas como el Parkinson y el Alzheimer."
    ],
    inc: [
      "Sobre las capacidades olfativas humanas|El olfato humano pobre está demostrado por medición|Los olores evocan recuerdos autobiográficos emotivos|La COVID-19 hizo muy conocida la anosmia|La idea del olfato pobre nació de supuestos anatómicos y filosóficos, no de medir lo que las personas huelen (McGann, 2017)."
    ],
    seq: [],
    cls: [] },
  { t: "El sistema gustativo",
    tip: "La lengua tiene cuatro tipos de papilas, y las filiformes no tienen botones gustativos. Se aceptan cinco gustos básicos con receptores identificados: dulce (T1R2 + T1R3), umami (T1R1 + T1R3), amargo (familia T2R), salado (ENaC) y ácido (OTOP1). Los nervios facial, glosofaríngeo y vago llevan la información al núcleo del tracto solitario y, por el tálamo, a la corteza gustativa de la ínsula y el opérculo frontal.",
    v: [
      "Papilas filiformes=Papilas de toda la lengua, sin botones gustativos y de función táctil",
      "Papilas caliciformes=Papilas que forman una «V» en la parte posterior de la lengua",
      "Papilas fungiformes=Papilas de la parte anterior, sobre todo de la punta y los bordes",
      "Botón gustativo=Estructura con 50–150 células receptoras que asoman por un poro",
      "Umami=Gusto básico del glutamato, señal de presencia de proteínas",
      "T2R=Familia de unos 25 receptores del amargo",
      "Núcleo del tracto solitario=Núcleo del bulbo raquídeo al que llegan los nervios gustativos",
      "Líneas marcadas=Codificación de cada gusto por fibras dedicadas"
    ],
    g: [
      "El canal ___ detecta el gusto ácido.|OTOP1|ENaC|TRPM8",
      "Los dos tercios anteriores de la lengua envían la información gustativa por el nervio ___.|facial|glosofaríngeo|vago",
      "La corteza gustativa primaria se encuentra en la ínsula y el ___ frontal.|opérculo|polo|giro",
      "Las células receptoras del gusto se renuevan aproximadamente cada ___.|diez días|dos meses|seis meses",
      "El umami lo describió ___ en 1908 a partir del caldo de algas.|Ikeda|Collings|Bartoshuk"
    ],
    tf: [
      "Las papilas filiformes, que cubren toda la superficie de la lengua, contienen botones gustativos.|F|Las filiformes no tienen botones gustativos; su función es táctil.",
      "El receptor del dulce y el del umami comparten la subunidad T1R3.|V",
      "El umami se aceptó como gusto básico poco después de que Ikeda lo describiera en 1908.|F|No se aceptó de forma general hasta los años 2000, cuando se identificó su receptor.",
      "Como el centro de la lengua solo tiene papilas filiformes, allí apenas se perciben gustos.|V"
    ],
    q: [
      "Un paciente con una lesión de la cuerda del tímpano nota menos los gustos. ¿Qué zona de la lengua estará afectada?|Los dos tercios anteriores|El tercio posterior|La faringe y la epiglotis|El facial (VII), por la cuerda del tímpano, inerva los dos tercios anteriores; el glosofaríngeo, el tercio posterior.",
      "¿Qué receptor detecta el gusto umami?|T1R1 + T1R3|T1R2 + T1R3|Canal ENaC|El umami (glutamato) usa T1R1 + T1R3; T1R2 + T1R3 detecta lo dulce, y el ENaC, lo salado.",
      "En ratones a los que se cambia un receptor gustativo, su preferencia o rechazo cambia de forma predecible. ¿Qué propuesta apoya?|Las líneas marcadas|El patrón de distribución|El código combinatorio olfativo|La evidencia molecular apoya fibras dedicadas a cada gusto, aunque en niveles superiores intervienen patrones de actividad.",
      "¿Qué función adaptativa se atribuye al gusto amargo?|Evitar sustancias tóxicas|Detectar fuentes de energía|Regular el equilibrio de sales|Muchas sustancias tóxicas son amargas; el dulce señala energía y el salado regula el equilibrio de sales."
    ],
    inc: [
      "Sobre la vía gustativa|El gusto llega a la corteza sin relevo en el tálamo|El vago lleva la información de la faringe y la epiglotis|Los nervios gustativos llegan al núcleo del tracto solitario|El gusto sí pasa por el tálamo (núcleo ventral posteromedial); es el olfato el que llega a la corteza sin relevo talámico previo."
    ],
    seq: [
      "Vía gustativa|Botón gustativo>Nervios facial, glosofaríngeo y vago>Núcleo del tracto solitario>Núcleo ventral posteromedial del tálamo>Ínsula y opérculo frontal>Corteza orbitofrontal"
    ],
    cls: [
      "Receptor de cada gusto básico|Receptores T1R: dulce; umami|Familia T2R: amargo|Canales iónicos: salado; ácido"
    ] },
  { t: "Sabor, supercatadores y el mito del mapa de la lengua",
    tip: "El sabor combina gusto, olor retronasal (lo que más aporta a identificar el alimento) y somatosensación, como el picante (TRPV1) o el frescor del mentol (TRPM8), y se integra en la corteza orbitofrontal. Los supercatadores perciben con mucha intensidad el amargor del PTC o el PROP, en parte por variantes del gen TAS2R38. El mapa de la lengua es falso, y que la grasa sea un sexto gusto sigue sin consenso.",
    v: [
      "Sabor=Combinación de gusto, olor retronasal y somatosensación",
      "Olor retronasal=Aromas que suben de la boca a la nariz al masticar y tragar",
      "Supercatador=Persona que percibe con gran intensidad el amargor del PTC o el PROP",
      "TAS2R38=Gen de un receptor del amargo ligado a la sensibilidad al PROP",
      "Oleogustus=Propuesta de la grasa como gusto básico",
      "Kokumi=Sensación de plenitud en la boca propuesta como posible gusto",
      "Linda Bartoshuk=Investigadora que describió a los supercatadores",
      "Collings (1974)=Mostró que todas las zonas con botones responden a todos los gustos"
    ],
    g: [
      "El picante de la guindilla se debe a que la capsaicina activa el receptor ___.|TRPV1|TRPM8|T1R3",
      "El mito del mapa de la lengua procede de una representación de los datos hecha por ___ (1942).|Boring|Hänig|Collings",
      "Hänig (1901) solo había encontrado pequeñas diferencias de ___ entre zonas de la lengua.|umbral|receptor|papila",
      "La sensibilidad de los supercatadores se ha asociado a una mayor densidad de papilas ___.|fungiformes|filiformes|caliciformes",
      "Entre los receptores candidatos para los ácidos grasos están CD36 y ___.|GPR120|TRPV1|OTOP1"
    ],
    tf: [
      "Los receptores de los cinco gustos se encuentran en todas las regiones de la lengua con botones gustativos.|V",
      "La grasa ya se acepta de forma general como sexto gusto básico.|F|Hay receptores candidatos y datos psicofísicos, pero no hay consenso para incluirla entre los básicos.",
      "La corteza orbitofrontal integra información gustativa, olfativa, táctil y visual en la percepción del sabor.|V",
      "La sensibilidad de los supercatadores se debe a que tienen más papilas filiformes.|F|Depende en parte del gen TAS2R38 y se asocia a más papilas fungiformes; las filiformes no tienen botones."
    ],
    q: [
      "Una persona con anosmia tras una infección dice que «la comida no le sabe a nada», aunque distingue lo dulce de lo salado. ¿Qué ha perdido?|El olor retronasal|Los botones gustativos|La vía del facial|El sabor depende sobre todo del olor retronasal; los gustos básicos de la lengua se conservan.",
      "¿Qué demostró Collings (1974)?|Que las diferencias entre zonas son pequeñas|Que la punta de la lengua detecta solo lo dulce|Que los bordes concentran los receptores salados|Todas las zonas con botones responden a todos los gustos, con pequeñas diferencias de sensibilidad.",
      "El frescor de un chicle de menta forma parte del sabor, pero ¿de qué componente?|De la somatosensación|Del gusto básico ácido|Del olor ortonasal|El mentol activa TRPM8, un receptor de frío: es una sensación somatosensorial, no un gusto.",
      "Una persona apenas nota el amargor del PROP. ¿Cómo se la clasifica?|No catadora|Supercatadora|Anósmica|Los supercatadores perciben ese amargor con mucha intensidad; en el otro extremo están los «no catadores», que apenas lo notan."
    ],
    inc: [
      "Sobre el sabor y el gusto|La lengua distingue el sabor a fresa|El picante es una sensación somatosensorial|El kokumi es un candidato a gusto básico|La lengua solo distingue los cinco gustos básicos; la fresa se reconoce por el olor retronasal."
    ],
    seq: [],
    cls: [
      "Componente del sabor|Gusto: dulce; umami; amargo|Olor retronasal: aroma de fresa; aroma de café|Somatosensación: picante; frescor del mentol; textura"
    ] }
] },
{ n: 11, t: "Qué es la atención y sus bases neurales", cap: 3, pir: "media", mods: [
  { t: "Concepto y funciones de la atención",
    tip: "La atención no es un proceso unitario, sino un conjunto de mecanismos que seleccionan, modulan, mantienen y controlan el procesamiento; los necesitamos porque la capacidad del sistema nervioso es limitada. Se distinguen la atención selectiva, la dividida, la sostenida y la alternante, todas apoyadas en el nivel de alerta. Además puede ser exógena o endógena, abierta o encubierta, y espacial, basada en objetos o basada en rasgos.",
    v: [
      "Atención selectiva=Atender a un estímulo o tarea e ignorar los demás",
      "Atención dividida=Atender a la vez a dos o más fuentes o tareas",
      "Atención sostenida=Mantener la atención durante un periodo prolongado",
      "Atención alternante=Cambiar el foco de una tarea a otra de forma flexible",
      "Decremento de la vigilancia=Empeoramiento de la detección con el tiempo en tareas monótonas",
      "Atención encubierta=Atender a un lugar sin dirigir la mirada hacia él",
      "Atención exógena=Atención captada de forma automática por un estímulo llamativo",
      "Atención basada en rasgos=Selección de un color o una dirección de movimiento en todo el campo visual"
    ],
    g: [
      "William James (1890) escribió que «todo el mundo sabe lo que es la ___».|atención|percepción|conciencia",
      "Mackworth (1948) estudió la atención sostenida con el test del ___.|reloj|cubo|laberinto",
      "La base de todas las funciones atencionales es el nivel de ___.|alerta|memoria|motivación",
      "Egly, Driver y Rafal (1994) mostraron que la atención se extiende mejor dentro de un mismo ___.|objeto|hemicampo|color",
      "Vigilar a alguien «de reojo» es un ejemplo de atención ___.|encubierta|abierta|alternante"
    ],
    tf: [
      "La atención es necesaria porque el sistema nervioso recibe más información de la que puede procesar a fondo.|V",
      "El decremento de la vigilancia aparece sobre todo en tareas variadas en las que los estímulos relevantes son frecuentes.|F|Aparece en tareas monótonas en las que los estímulos relevantes son raros, como el test del reloj.",
      "Los procesos atencionales básicos e involuntarios dependen sobre todo de la corteza prefrontal.|F|Dependen sobre todo de estructuras subcorticales; los voluntarios y complejos, de la corteza frontal y parietal.",
      "En la atención abierta se mueven los ojos o la cabeza hacia lo atendido.|V"
    ],
    q: [
      "Un vigilante de seguridad detecta peor las incidencias al final de su turno ante las pantallas. ¿Qué fenómeno ilustra?|El decremento de la vigilancia|La alternancia atencional voluntaria|La captura exógena de la atención|En tareas monótonas con estímulos relevantes raros, la detección empeora con el tiempo (Mackworth, 1948).",
      "Una persona sigue una conversación en un bar ruidoso. ¿Qué tipo de atención emplea sobre todo?|Selectiva|Dividida|Sostenida|Atender a un estímulo (una voz) e ignorar los demás es atención selectiva o focalizada.",
      "¿Qué ilustró el experimento de Egly, Driver y Rafal (1994)?|La atención basada en objetos|La atención basada en rasgos|La atención sostenida|La atención se extiende con más facilidad dentro de un mismo objeto que entre objetos distintos.",
      "¿Por qué cuesta encontrar una definición única de atención?|Porque no es un proceso unitario|Porque solo depende del arousal|Porque no tiene bases neurales|Es un conjunto de mecanismos que seleccionan, modulan, mantienen y controlan el procesamiento."
    ],
    inc: [
      "Sobre las funciones de la atención|Modular implica procesar lo atendido con menos detalle|Seleccionar deja en segundo plano lo irrelevante|Controlar ayuda a resolver conflictos entre respuestas|Lo atendido se procesa con más rapidez, precisión y detalle."
    ],
    seq: [],
    cls: [
      "Criterio de clasificación de la atención|Origen del control: exógena; endógena|Movimiento de los ojos: abierta; encubierta|Objeto de selección: espacial; basada en objetos; basada en rasgos"
    ] },
  { t: "Estructuras subcorticales",
    tip: "La formación reticular (SARA) mantiene la vigilia y la alerta; el locus coeruleus aporta noradrenalina; el colículo superior dirige los sacádicos y la orientación hacia la periferia; el pulvinar refuerza el lugar atendido, y el núcleo reticular del tálamo actúa como «puerta talámica». Según Posner, orientar la atención exige desenganchar (parietal posterior), mover (colículo superior) y enganchar (pulvinar).",
    v: [
      "SARA=Sistema reticular activador ascendente, base del nivel de alerta",
      "Locus coeruleus=Núcleo de la protuberancia, principal fuente de noradrenalina",
      "Colículo superior=Estructura del techo del mesencéfalo que dirige los movimientos sacádicos",
      "Pulvinar=Parte posterior del tálamo que refuerza el procesamiento del lugar atendido",
      "Núcleo reticular del tálamo=Capa de neuronas inhibidoras que actúa como «puerta talámica»",
      "Ganglios basales=Núcleos profundos que seleccionan acciones e inhiben respuestas no deseadas",
      "Desenganchar=Soltar el foco actual, operación atribuida al parietal posterior",
      "Sistema límbico=Aporta el componente emocional que prioriza estímulos amenazantes"
    ],
    g: [
      "Según Posner, mover la atención a un nuevo lugar se atribuye al ___.|colículo superior|pulvinar|locus coeruleus",
      "El locus coeruleus es la principal fuente de ___ del encéfalo.|noradrenalina|dopamina|serotonina",
      "Toda la información sensorial, salvo la ___, pasa por el tálamo antes de llegar a la corteza.|olfativa|auditiva|gustativa",
      "Las lesiones graves del tronco del encéfalo que afectan a la formación reticular pueden producir ___.|coma|heminegligencia|hemianopsia",
      "Según Posner, enganchar la atención en el nuevo lugar depende del ___.|pulvinar|colículo superior|cerebelo"
    ],
    tf: [
      "El colículo superior, situado en el techo del mesencéfalo, dirige los movimientos sacádicos.|V",
      "El locus coeruleus, en el mesencéfalo, es la principal fuente de dopamina del encéfalo.|F|Está en la protuberancia y es la principal fuente de noradrenalina, que ajusta la alerta.",
      "El núcleo reticular del tálamo es uno de los posibles mecanismos de la selección temprana.|V",
      "En la secuencia de Posner, el pulvinar se encarga de desenganchar la atención del foco actual.|F|Desenganchar corresponde a la corteza parietal posterior; el pulvinar engancha la atención en el nuevo lugar."
    ],
    q: [
      "Un paciente con una lesión del colículo superior tarda en orientarse hacia estímulos que aparecen en la periferia. ¿Qué operación de Posner está más afectada?|Mover|Desenganchar|Enganchar|Posner atribuye mover la atención al colículo superior, que dirige los sacádicos y la orientación hacia la periferia.",
      "¿Qué estructura forma el núcleo del sistema reticular activador ascendente?|La formación reticular|El núcleo pulvinar|Los ganglios basales|La formación reticular del tronco activa de forma difusa toda la corteza a través del tálamo.",
      "¿Por qué una cara de enfado tiende a captar la atención con prioridad?|Por el aporte del sistema límbico|Por el filtro del núcleo reticular|Por la acción de los ganglios basales|La amígdala y el giro cingulado aportan el componente emocional: los estímulos con carga emocional captan la atención.",
      "Un fármaco que reduce la actividad del locus coeruleus afectaría sobre todo a…|la alerta y la preparación|la selección de acciones|la percepción del olor|El locus coeruleus, principal fuente de noradrenalina, ajusta la alerta y la preparación ante estímulos."
    ],
    inc: [
      "Sobre las estructuras subcorticales de la atención|El tálamo es una simple estación de relevo|El pulvinar está en la parte posterior del tálamo|La formación reticular activa la corteza de forma difusa|El tálamo es mucho más que un relevo: su núcleo reticular puede atenuar o dejar pasar las señales."
    ],
    seq: [
      "Operaciones de orientación de Posner|Desenganchar del foco actual>Mover al nuevo lugar>Enganchar en el nuevo lugar"
    ],
    cls: [
      "Localización de la estructura|Tronco del encéfalo: formación reticular; locus coeruleus; colículo superior|Tálamo: pulvinar; núcleo reticular"
    ] },
  { t: "Estructuras corticales y el modelo de Mesulam",
    tip: "En la corteza, la atención depende sobre todo de los lóbulos parietal y frontal: parietal posterior (mapas del espacio), campos oculares frontales (orientación voluntaria), unión temporoparietal (reorientación ante lo inesperado), prefrontal dorsolateral (objetivos) y cingulada anterior (conflicto). Mesulam propuso una red a gran escala con cuatro componentes: sensorial (parietal), motor (frontal), motivacional (cingulado) y de activación (reticular y tálamo).",
    v: [
      "Surco intraparietal=Parte de la corteza parietal posterior con mapas del espacio relevante",
      "Campos oculares frontales=Área que controla los movimientos oculares y la orientación voluntaria",
      "Unión temporoparietal=Región que detecta estímulos relevantes e inesperados y reorienta",
      "Prefrontal dorsolateral=Corteza que mantiene activos los objetivos de la tarea",
      "Cingulada anterior=Corteza que detecta conflictos entre respuestas",
      "Componente representacional=Mapa interno del espacio en la corteza parietal posterior",
      "Componente motor de Mesulam=Programas frontales para explorar, buscar y dirigir ojos y mano",
      "Componente de activación=Nivel de alerta aportado por el sistema reticular y el tálamo"
    ],
    g: [
      "En el modelo de Mesulam, el componente motivacional corresponde al giro ___.|cingulado|angular|poscentral",
      "Mesulam describió la atención espacial dirigida como una red a ___ escala.|gran|pequeña|media",
      "La corteza cingulada anterior participa en el control ejecutivo, como en el efecto ___.|Stroop|cóctel|Proust",
      "Si se daña el componente ___, predomina el déficit en la exploración y la respuesta motora.|frontal|parietal|cingulado",
      "Los circuitos inespecíficos o ___ regulan la atención con independencia de la modalidad.|supramodales|sensoriales|unimodales"
    ],
    tf: [
      "Según Mesulam, la atención espacial se altera con la lesión parietal, pero no con la del componente frontal.|F|La lesión de cualquiera de los nodos puede alterarla, con matices distintos según el componente dañado.",
      "Los campos oculares frontales intervienen en la orientación voluntaria, tanto abierta como encubierta.|V",
      "En el modelo de Mesulam, el componente de activación corresponde a la corteza prefrontal dorsolateral.|F|El componente de activación lo forman el sistema reticular y el tálamo, que mantienen el nivel de alerta.",
      "Para Mesulam, la atención surge de la interacción entre nodos corticales y subcorticales.|V"
    ],
    q: [
      "Un paciente con lesión frontal derecha explora mal el lado izquierdo y apenas dirige la mano hacia él, aunque su representación del espacio parece conservada. ¿Qué componente de Mesulam está más afectado?|El motor o exploratorio|El sensorial o representacional|El motivacional o límbico|Con lesión frontal predomina el déficit en la exploración y la respuesta motora; con lesión parietal, en la representación del espacio.",
      "¿Qué estructura cortical detecta estímulos relevantes e inesperados y ayuda a reorientar la atención?|La unión temporoparietal|La prefrontal dorsolateral|Los campos oculares frontales|La TPJ detecta lo relevante e inesperado; la prefrontal dorsolateral mantiene objetivos y los FEF controlan la mirada.",
      "¿Qué aporta el giro cingulado a la red de Mesulam?|El valor de los estímulos|El mapa interno del espacio exterior|El nivel de alerta de toda la red|Es el componente motivacional o límbico: el valor que tienen los estímulos y los lugares para la persona.",
      "¿Qué combina la atención según ambas lecturas del modelo de Mesulam?|Activación ascendente y control descendente|Áreas sensoriales y nervios craneales motores|Recursos múltiples y alta carga perceptiva|Combina la activación de abajo arriba, que depende de la alerta y los estímulos, con el control de arriba abajo, según los objetivos."
    ],
    inc: [
      "Sobre las estructuras corticales de la atención|La prefrontal dorsolateral detecta conflictos entre respuestas|La corteza parietal posterior contiene mapas del espacio|Los campos oculares frontales controlan los movimientos oculares|Detectar conflictos entre respuestas es propio de la cingulada anterior; la prefrontal dorsolateral mantiene los objetivos."
    ],
    seq: [],
    cls: [
      "Componente de la red de Mesulam|Sensorial: corteza parietal posterior|Motor: campos oculares frontales|Motivacional: giro cingulado"
    ] },
  { t: "Asimetría hemisférica de la atención",
    tip: "La heminegligencia es más frecuente y grave tras una lesión del hemisferio derecho (en torno al 38 % frente al 18 % tras un ictus). La explican tres hipótesis compatibles: la asimetría de Mesulam y Heilman (el derecho atiende a ambos hemicampos), la rivalidad interhemisférica de Kinsbourne y el modelo de redes de Corbetta y Shulman (red ventral lateralizada a la derecha). En personas sanas, la asimetría deja una huella pequeña: la pseudonegligencia.",
    v: [
      "Heminegligencia=Fallo atencional para orientarse hacia un lado del espacio",
      "Hemianopsia=Pérdida de un hemicampo visual por lesión de la vía visual",
      "Pseudonegligencia=Ligera desviación a la izquierda de las personas sanas al bisecar líneas",
      "Hipótesis de la asimetría=El derecho atiende a ambos hemicampos y el izquierdo sobre todo al derecho",
      "Rivalidad interhemisférica=Cada hemisferio empuja la atención al lado contrario y frena al otro",
      "Red ventral=Red que detecta lo relevante e inesperado, lateralizada a la derecha",
      "Kinsbourne=Autor de la hipótesis de la rivalidad entre hemisferios",
      "Corbetta y Shulman=Autores del modelo de redes dorsal y ventral de la asimetría"
    ],
    g: [
      "Al bisecar líneas, las personas sanas se desvían ligeramente hacia la ___.|izquierda|derecha|parte inferior",
      "La heminegligencia aparece en torno al ___ de los pacientes con ictus derecho.|38 %|18 %|8 %",
      "Según Kinsbourne, una lesión derecha libera al hemisferio izquierdo de su ___.|freno|mapa|alerta",
      "El hemisferio derecho predomina también en la ___ y la vigilancia sostenida.|alerta|lectura|memoria",
      "Según Corbetta y Shulman, la lesión derecha deprime a distancia la red ___ del mismo hemisferio.|dorsal|ventral|límbica"
    ],
    tf: [
      "La heminegligencia es más frecuente tras lesión del hemisferio izquierdo, dominante para el lenguaje.|F|Es más frecuente y grave tras lesión derecha: en torno al 38 % frente al 18 % en pacientes con ictus.",
      "Según Mesulam y Heilman, si se lesiona el hemisferio izquierdo, el derecho compensa y cubre ambos lados.|V",
      "Un paciente con hemianopsia no ve una mitad del campo visual, pero lo sabe y lo compensa moviendo los ojos.|V",
      "En la heminegligencia, el fallo se debe necesariamente a una lesión de la vía visual.|F|La vía visual puede estar intacta: el fallo es atencional; la lesión de la vía visual define la hemianopsia."
    ],
    q: [
      "Tras un ictus, una paciente deja sin comer la mitad izquierda del plato y no parece darse cuenta, aunque su campo visual es normal. ¿Qué es más probable?|Heminegligencia por lesión derecha|Hemianopsia por lesión derecha|Heminegligencia por lesión izquierda|Con la vía visual intacta, ignorar el lado izquierdo sin advertirlo es negligencia, más frecuente tras lesión derecha.",
      "Según la hipótesis de Kinsbourne, ¿por qué una lesión derecha desvía la atención hacia la derecha?|El izquierdo queda libre de su freno|El derecho atiende a ambos lados|La red dorsal se activa en exceso|Cada hemisferio frena al otro; sin el derecho, el empuje del izquierdo hacia la derecha queda sin contrapeso.",
      "¿Qué propuesta destaca la lateralización derecha de la red ventral y de los sistemas de alerta?|El modelo de redes de Corbetta y Shulman|La hipótesis de la asimetría de Mesulam|La rivalidad interhemisférica de Kinsbourne|Corbetta y Shulman (2011) atribuyen la asimetría a una red ventral derecha cuyo daño deprime la red dorsal.",
      "¿Cómo se consideran hoy las tres explicaciones de la asimetría atencional?|Como complementarias entre sí|Como incompatibles entre sí|Como refutadas por la neuroimagen|Ponen el acento en mecanismos distintos y se tienden a ver como complementarias; gana peso la desconexión frontoparietal."
    ],
    inc: [
      "Sobre la asimetría hemisférica de la atención|El hemisferio izquierdo atiende a ambos hemicampos|La pseudonegligencia es una desviación hacia la izquierda|La red ventral está lateralizada a la derecha|Según Mesulam y Heilman, es el derecho el que atiende a ambos hemicampos; el izquierdo atiende sobre todo al derecho."
    ],
    seq: [],
    cls: [
      "Heminegligencia o hemianopsia|Heminegligencia: fallo atencional; vía visual intacta; falta de conciencia del déficit|Hemianopsia: lesión de la vía visual; el paciente sabe que no ve; compensa moviendo los ojos"
    ] }
] },
{ n: 12, t: "Modelos de filtro y de recursos", cap: 3, pir: "alta", mods: [
  { t: "Escucha dicótica y el filtro de Broadbent",
    tip: "Cherry (1953) estudió el «efecto cóctel» con la escucha dicótica y el sombreado: del mensaje no atendido apenas se recordaba el contenido, pero sí se notaban sus cambios físicos. Broadbent (1958) propuso el filtro rígido: un almacén sensorial breve, un filtro que elige un canal por sus rasgos físicos y un canal de capacidad limitada donde se analiza el significado. Es un modelo de selección temprana y de todo o nada.",
    v: [
      "Efecto cóctel=Capacidad de seguir una conversación entre muchas voces",
      "Escucha dicótica=Presentación simultánea de un mensaje distinto a cada oído",
      "Sombreado=Repetir en voz alta el mensaje atendido mientras se oye",
      "Filtro rígido=Selección temprana por rasgos físicos y de todo o nada",
      "Almacén sensorial=Depósito de muy corta duración en el que entra toda la información",
      "Canal de capacidad limitada=Etapa en la que se analiza el significado del canal seleccionado",
      "Amplitud dividida=Pares de dígitos simultáneos, uno a cada oído, que hay que recordar",
      "Perception and Communication=Obra de 1958 en la que Broadbent formuló su modelo"
    ],
    g: [
      "En el modelo de Broadbent, el filtro selecciona un canal por sus características ___.|físicas|semánticas|emocionales",
      "Cherry pedía a los participantes ___ el mensaje del oído atendido para asegurarse de que lo seguían.|sombrear|resumir|memorizar",
      "Broadbent propuso un modelo de selección ___, porque el filtro actúa antes de analizar el significado.|temprana|tardía|gradual",
      "En la tarea de amplitud dividida, las personas prefieren recordar los dígitos ___.|oído por oído|par por par|en orden inverso",
      "Según Broadbent, la información no seleccionada se pierde del almacén ___ en poco tiempo.|sensorial|semántico|de trabajo"
    ],
    tf: [
      "En los experimentos de Cherry, los participantes recordaban bien el contenido del mensaje no atendido.|F|Apenas recordaban su contenido; sí notaban cambios físicos, como el paso de voz masculina a femenina o a un tono puro.",
      "Para Broadbent, el filtro deja pasar un canal entero o nada.|V",
      "En el modelo de Broadbent, el análisis del significado ocurre antes del filtro selectivo.|F|El filtro actúa antes del análisis del significado; por eso es un modelo de selección temprana.",
      "Broadbent interpretó la tarea de amplitud dividida como prueba de que cambiar de canal lleva tiempo.|V"
    ],
    q: [
      "En una escucha dicótica, el mensaje no atendido pasa de una voz masculina a un tono puro. ¿Qué es más probable que note el participante?|El cambio en las características físicas|El significado de las palabras omitidas|El tema del que hablaba el mensaje|Cherry halló que del mensaje no atendido se notan los cambios físicos, pero apenas se recuerda el contenido.",
      "¿Qué criterio NO usa el filtro de Broadbent para seleccionar?|El significado del mensaje|El oído por el que llega|El tono de la voz del hablante|Selecciona por rasgos físicos (oído, tono, localización) antes de analizar el significado.",
      "Un participante oye a la vez 7-2-9 por un oído y 4-6-1 por el otro, y los recuerda como 7-2-9-4-6-1. ¿Qué tarea es y cómo la interpretó Broadbent?|Amplitud dividida; se selecciona por canal físico|Escucha dicótica; se selecciona por significado|Sombreado; el filtro atenúa el canal no atendido|Se prefiere recordar oído por oído: según Broadbent, el filtro selecciona por canal y cambiar de canal lleva tiempo.",
      "¿Cómo se clasifica el modelo de Broadbent?|Selección temprana y todo o nada|Selección tardía y todo o nada|Selección temprana y gradual|El filtro actúa antes del significado y deja pasar un canal entero o nada; la selección gradual es propia de Treisman."
    ],
    inc: [
      "Sobre el modelo de filtro de Broadbent|Lo no seleccionado se analiza semánticamente|El canal seleccionado puede llegar a la memoria|Toda la información entra en un almacén sensorial|Lo no seleccionado no se procesa semánticamente y se pierde del almacén sensorial en poco tiempo."
    ],
    seq: [
      "Modelo de filtro de Broadbent|Almacén sensorial de muy corta duración>Filtro selectivo por rasgos físicos>Canal de capacidad limitada>Análisis del significado y memoria"
    ],
    cls: [] },
  { t: "Atenuación y selección tardía",
    tip: "Los datos de Moray (el propio nombre), Gray y Wedderburn («Dear Aunt Jane») y Treisman (seguir la frase al otro oído) mostraron que parte del significado no atendido se procesa. Treisman propuso que el filtro atenúa el canal no atendido y que solo se reconocen las palabras con umbral bajo en el diccionario. Deutsch y Deutsch (1963) y Norman (1968) defendieron la selección tardía, tras analizar el significado de todos los mensajes.",
    v: [
      "Atenuación=Debilitamiento del canal no atendido sin bloquearlo",
      "Diccionario de Treisman=Almacén de palabras con umbrales de activación distintos",
      "Umbral permanentemente bajo=Propiedad del propio nombre o de palabras de alarma",
      "Umbral bajo por contexto=Propiedad de las palabras que encajan con lo recién oído",
      "Selección tardía=Selección tras el análisis del significado de todos los mensajes",
      "Pertinencia=Importancia según expectativas y memoria, clave en el modelo de Norman",
      "Efecto del propio nombre=Detección del nombre en el canal no atendido por un tercio de las personas",
      "Dear Aunt Jane=Agrupación por significado entre oídos (Gray y Wedderburn, 1960)"
    ],
    g: [
      "Moray (1959) halló que alrededor de ___ de los participantes detectaba su propio nombre en el oído no atendido.|un tercio|la mitad|un 10 %",
      "Para Treisman, el filtro no bloquea el canal no atendido, sino que lo ___.|atenúa|amplifica|analiza",
      "En el modelo de Deutsch y Deutsch, todos los mensajes se analizan hasta el nivel del ___.|significado|rasgo físico|almacén sensorial",
      "Norman (1968) añadió que la selección depende de la intensidad de la entrada y de su ___.|pertinencia|duración|localización",
      "Wood y Cowan (1995) vieron que quien detectaba su nombre cometía más errores al ___ justo después.|sombrear|filtrar|atenuar"
    ],
    tf: [
      "Según Treisman, el canal no atendido se bloquea por completo salvo cuando el participante cambia de oído.|F|Treisman propuso atenuación, no un bloqueo de todo o nada: la señal debilitada llega al diccionario.",
      "Gray y Wedderburn mostraron que los participantes podían agrupar la información por significado, saltando de un oído a otro.|V",
      "Deutsch y Deutsch defendieron un modelo de selección temprana basado en los rasgos físicos.|F|Defendieron la selección tardía: todo se analiza hasta el significado y se selecciona después, al responder o recordar.",
      "Wood y Cowan (1995) concluyeron que detectar el propio nombre supone un desplazamiento real de la atención al canal no atendido.|V"
    ],
    q: [
      "En una escucha dicótica, un participante que sombrea el oído derecho detecta «¡fuego!» en el izquierdo. ¿Qué modelo lo explica mejor?|Atenuación de Treisman|Filtro rígido de Broadbent|Recurso único de Kahneman|«¡Fuego!» es una palabra de alarma con umbral permanentemente bajo, que se reconoce aunque llegue atenuada.",
      "¿Qué diferencia el modelo de Treisman del de Broadbent?|Lo no atendido se debilita, no se bloquea|La selección ocurre tras el significado|El filtro elige por la pertinencia|Treisman mantiene una selección temprana, pero gradual: el canal no atendido se atenúa y no se bloquea.",
      "La frase sombreada pasa al otro oído y el participante la sigue unas palabras. ¿Qué tipo de umbral interviene?|Umbral bajo por el contexto|Umbral permanentemente bajo|Umbral alto por la atenuación|Las palabras que encajan con lo recién oído tienen el umbral rebajado por el contexto.",
      "¿Qué afirma el modelo de selección tardía sobre lo no atendido?|Se analiza, pero no se responde a ello|Se bloquea antes de analizar el significado|Se atenúa y solo pasa lo de umbral bajo|Según Deutsch y Deutsch y Norman, todo se analiza; lo no seleccionado no recibe respuesta ni pasa a la memoria."
    ],
    inc: [
      "Sobre los datos que cuestionaron el filtro rígido|Todos los participantes detectaban su nombre|Gray y Wedderburn hallaron agrupación por significado|Treisman vio que se seguía la frase en el otro oído|Solo alrededor de un tercio detectaba su propio nombre (Moray, 1959; Wood y Cowan, 1995)."
    ],
    seq: [],
    cls: [
      "Dónde se selecciona según cada modelo|Selección temprana: Broadbent; Treisman|Selección tardía: Deutsch y Deutsch; Norman"
    ] },
  { t: "Modelos de recursos y automatización",
    tip: "Los modelos de recursos preguntan cuánta capacidad hay y cómo se reparte, con la tarea dual como paradigma. Kahneman (1973) propuso un recurso único de esfuerzo cuya capacidad varía con el arousal y que reparte una política de asignación; Wickens, recursos múltiples según etapas, códigos, modalidades y canales visuales. La práctica con mapeo consistente automatiza los procesos (Shiffrin y Schneider, 1977).",
    v: [
      "Tarea dual=Paradigma de hacer dos tareas a la vez y medir cuánto empeora cada una",
      "Recurso único=Reserva común de esfuerzo de la que tiran todas las tareas (Kahneman)",
      "Política de asignación=Mecanismo que reparte la capacidad disponible según Kahneman",
      "Disposiciones duraderas=Reglas involuntarias que dan prioridad a ciertos estímulos",
      "Pupilometría=Uso de la dilatación de la pupila como índice del esfuerzo",
      "Limitado por los datos=Rendimiento que no mejora con más atención por la mala calidad del estímulo",
      "Recursos múltiples=Varias reservas según etapa, código, modalidad y canal visual (Wickens)",
      "Mapeo consistente=Asignación fija de cada estímulo a su categoría, necesaria para automatizar"
    ],
    g: [
      "Según Kahneman, la capacidad disponible aumenta con el nivel de ___, hasta cierto punto.|activación|práctica|carga",
      "Kahneman expuso su modelo de recurso único en la obra Attention and ___.|Effort|Memory|Perception",
      "Según Wickens, dos tareas interfieren más cuanto más ___ comparten.|recursos|minutos|errores",
      "Con mapeo ___, la búsqueda sigue siendo lenta y controlada aunque se practique mucho.|variado|consistente|automático",
      "Los procesos automáticos son rápidos y funcionan en ___.|paralelo|serie|secuencia"
    ],
    tf: [
      "Para Kahneman, la capacidad atencional es una cantidad fija para cada persona.|F|La capacidad disponible no es fija: aumenta con el nivel de activación, hasta cierto punto.",
      "Según Wickens, conducir y leer un mensaje en el móvil interfieren mucho porque ambas tareas son visuales.|V",
      "Los procesos controlados son rápidos, funcionan en paralelo y son difíciles de suprimir.|F|Eso describe los automáticos; los controlados son lentos, en serie, voluntarios y flexibles.",
      "Hoy la automaticidad se considera una propiedad gradual.|V"
    ],
    q: [
      "Un conductor escucha la radio sin problemas, pero se sale de su carril al leer un mensaje en el móvil. ¿Qué modelo lo explica mejor?|Recursos múltiples de Wickens|Filtro rígido de Broadbent|Atenuación de Treisman|Leer y conducir comparten la modalidad visual; escuchar la radio usa la auditiva y compite menos por los recursos.",
      "Intentar oír un susurro muy débil no mejora por mucha atención que se ponga. Según Norman y Bobrow, ¿cómo está limitado el rendimiento?|Por los datos|Por los recursos|Por la práctica|El problema es la calidad del estímulo, no la atención dedicada: es un rendimiento limitado por los datos.",
      "Un lector experto no puede evitar leer la palabra «ROJO» escrita en tinta azul. ¿Qué característica de los procesos automáticos ilustra?|Son difíciles de suprimir|Consumen muchos recursos|Requieren control voluntario|La lectura está automatizada: es involuntaria y difícil de suprimir, como muestra el efecto Stroop.",
      "En la política de asignación de Kahneman, que algo en movimiento capte la atención se debe a…|las disposiciones duraderas|las intenciones momentáneas|la evaluación de las demandas|Las disposiciones duraderas son reglas involuntarias que dan prioridad a ciertos estímulos, como algo que se mueve."
    ],
    inc: [
      "Sobre los procesos automáticos y controlados|Los controlados exigen mucha práctica|Los automáticos apenas consumen recursos|Los controlados son conscientes y flexibles|Los automáticos surgen de mucha práctica; los controlados no requieren práctica previa."
    ],
    seq: [],
    cls: [
      "Proceso automático o controlado|Automático: rápido y en paralelo; involuntario; poco accesible a la conciencia|Controlado: lento y en serie; voluntario y flexible; consciente"
    ] },
  { t: "La teoría de la carga perceptiva",
    tip: "Lavie propuso que la selección temprana y la tardía ocurren ambas, según la carga perceptiva de la tarea. Con alta carga perceptiva, la tarea agota la capacidad y los distractores no se procesan; con baja carga, la capacidad sobrante se derrama sobre ellos y estos interfieren. La carga cognitiva tiene el efecto contrario: si es alta, aumenta la interferencia.",
    v: [
      "Carga perceptiva=Demanda perceptiva de la tarea, como el número de elementos en pantalla",
      "Carga cognitiva=Demanda sobre la memoria de trabajo o el control",
      "Derrame de capacidad=Procesamiento de distractores con la capacidad perceptiva sobrante",
      "Tarea de flancos=Paradigma de Eriksen y Eriksen con distractores compatibles o incompatibles",
      "Distractor incompatible=Estímulo irrelevante asociado a una respuesta distinta de la correcta",
      "Ceguera por falta de atención=No ver un estímulo inesperado que está a la vista",
      "Circularidad=Crítica de definir la carga a partir de sus propios efectos",
      "Dilución=Explicación alternativa por la que los elementos de la pantalla debilitan al distractor"
    ],
    g: [
      "Según Lavie, con alta carga ___, los distractores apenas se procesan.|perceptiva|cognitiva|emocional",
      "Con baja carga perceptiva, la capacidad sobrante se ___ sobre los distractores.|derrama|retira|reserva",
      "Retener una lista de números mientras se hace la tarea aumenta la carga ___.|cognitiva|perceptiva|sensorial",
      "Según Lavie, dentro de la capacidad perceptiva el procesamiento es ___: no se puede dejar capacidad sin usar.|automático|voluntario|selectivo",
      "La teoría predice que la ceguera por falta de atención ___ con una alta carga perceptiva.|aumenta|disminuye|desaparece"
    ],
    tf: [
      "Según Lavie, una alta carga cognitiva reduce la interferencia de los distractores, igual que la perceptiva.|F|Tiene el efecto contrario: con alta carga cognitiva los distractores se perciben y falta control para frenarlos.",
      "Para Lavie, la selección temprana y la tardía pueden darse ambas, según la carga perceptiva.|V",
      "Con baja carga perceptiva, un distractor incompatible enlentece la respuesta.|V",
      "La teoría de la carga se considera libre de críticas porque la carga se define con independencia de sus efectos.|F|Se le critica justo que cuesta definir la carga sin mirar sus efectos, con riesgo de razonamiento circular."
    ],
    q: [
      "Se busca una letra entre otras cinco distintas mientras a un lado aparece una letra incompatible. Comparado con buscarla sola, ¿qué se espera?|Menos interferencia del distractor|Más interferencia del distractor|La misma interferencia en ambos casos|Buscar entre varias letras es alta carga perceptiva: no queda capacidad para el distractor, que apenas interfiere.",
      "Un participante debe retener seis dígitos mientras hace una tarea de flancos sencilla. Según Lavie, los distractores…|interferirán más|interferirán menos|no se percibirán|La alta carga cognitiva deja los distractores percibidos y resta control para frenarlos: aumenta la interferencia.",
      "¿Cuál es la principal crítica a la teoría de la carga perceptiva?|El riesgo de razonamiento circular|Que niega la capacidad limitada|Que solo admite la selección tardía|Cuesta definir la carga sin sus efectos: si un distractor no interfiere, se tiende a concluir que la carga era alta.",
      "¿A qué se parece la selección en condiciones de baja carga perceptiva?|A una selección tardía|A una selección temprana|A un filtro rígido|Los distractores se procesan e interfieren, como si la selección fuera tardía."
    ],
    inc: [
      "Sobre la teoría de la carga de Lavie|La carga perceptiva y la cognitiva tienen el mismo efecto|La capacidad perceptiva se considera limitada|La teoría propone una salida al debate entre selección temprana y tardía|Tienen efectos opuestos: la alta carga perceptiva reduce la interferencia y la alta carga cognitiva la aumenta."
    ],
    seq: [],
    cls: [
      "Efecto sobre la interferencia de los distractores|Menos interferencia: alta carga perceptiva; muchos elementos en pantalla; discriminación difícil|Más interferencia: baja carga perceptiva; alta carga cognitiva; retener una lista de números"
    ] }
] }
);

// SAIMAP Psicología · Atención y Percepción · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Redes atencionales y paradigmas experimentales", cap: 3, pir: "alta", mods: [
  { t: "Las redes de Posner y Petersen",
    tip: "Posner y Petersen (1990) conciben la atención como un sistema de redes separables que cooperan: alerta (noradrenalina), orientación (acetilcolina) y control ejecutivo (dopamina). La orientación supone desenganchar, mover y enganchar la atención. El ANT de Fan et al. (2002) mide las tres redes como diferencias de tiempos de reacción, que apenas correlacionan entre sí.",
    v: [
      "Red de alerta=Logra y mantiene la preparación para procesar; se asocia con la noradrenalina",
      "Red de orientación=Selecciona información sensorial, sobre todo por su localización; acetilcolina",
      "Control ejecutivo=Resuelve el conflicto entre respuestas e inhibe tendencias automáticas; dopamina",
      "Alerta tónica=Nivel de activación sostenido que varía con el ciclo sueño-vigilia",
      "Alerta fásica=Aumento breve de la preparación tras una señal de aviso",
      "Orientación encubierta=Desplazamiento de la atención sin mover los ojos",
      "Attention Network Test=Tarea de Fan y colaboradores (2002) que mide las tres redes a la vez",
      "ANT-I=Versión del grupo de Granada con señal auditiva y claves de validez variable"
    ],
    g: [
      "En el modelo de Posner y Petersen, la red de orientación se asocia con la ___.|acetilcolina|noradrenalina|dopamina",
      "Según Posner, el colículo superior se encarga de ___ la atención hacia la nueva localización.|mover|desenganchar|enganchar",
      "Petersen y Posner (2012) dividieron el control ejecutivo en una red frontoparietal y otra ___.|cíngulo-opercular|temporoparietal|occipitofrontal",
      "La red de alerta incluye el locus coeruleus, el tálamo y regiones frontales y parietales ___.|derechas|izquierdas|mediales",
      "La alerta tónica es la base de la ___.|vigilancia|inhibición|orientación"
    ],
    tf: [
      "La red de alerta se asocia con la dopamina, y la de control ejecutivo, con la noradrenalina.|F|Es al revés: la alerta se asocia con la noradrenalina y el control ejecutivo, con la dopamina.",
      "En el ANT, el efecto de alerta se calcula restando al TR sin clave el TR con doble clave.|V",
      "En el ANT, las puntuaciones de las tres redes correlacionaban mucho, lo que indicaba un sistema único.|F|Apenas correlacionaban, lo que se interpretó como independencia relativa de las redes.",
      "La alerta fásica es el aumento breve de preparación que provoca, por ejemplo, un semáforo en ámbar.|V"
    ],
    q: [
      "En el ANT, una participante tarda 590 ms sin clave, 550 ms con doble clave, 560 ms con clave central y 510 ms con clave espacial. ¿Cuál es su efecto de orientación?|50 ms|40 ms|80 ms|Orientación es TR con clave central menos TR con clave espacial (560 − 510); 40 ms sería su efecto de alerta (590 − 550).",
      "Un conductor responde más rápido justo después de que el semáforo se ponga en ámbar. ¿Qué componente refleja sobre todo?|Alerta fásica|Alerta tónica|Control ejecutivo|Es un aumento breve de la preparación tras una señal de aviso; la tónica es el nivel sostenido ligado al ciclo sueño-vigilia.",
      "¿Qué estructura se encarga, según Posner, de enganchar la atención en el nuevo estímulo?|El pulvinar|El colículo superior|La corteza parietal|Desenganchar depende de la corteza parietal, mover del colículo superior y enganchar del pulvinar.",
      "¿Qué diferencia de TR mide el control ejecutivo en el ANT?|Incongruente menos congruente|Sin clave menos doble clave|Clave central menos espacial|El conflicto es TR incongruente menos TR congruente; las otras dos diferencias miden la alerta y la orientación."
    ],
    inc: [
      "Sobre las redes de Posner y Petersen|La red de orientación se asocia con la dopamina|La red de alerta se asocia con la noradrenalina|El cíngulo anterior forma parte del control ejecutivo|La orientación se asocia con la acetilcolina; la dopamina corresponde al control ejecutivo."
    ],
    seq: [
      "Operaciones de la orientación según Posner|Desenganchar la atención (corteza parietal)>Moverla (colículo superior)>Engancharla en el nuevo estímulo (pulvinar)"
    ],
    cls: [
      "Estructuras de cada red de Posner|Alerta: locus coeruleus; tálamo|Orientación: colículo superior; pulvinar; campos oculares frontales|Control ejecutivo: cíngulo anterior; ganglios basales"
    ] },
  { t: "Redes dorsal y ventral (Corbetta y Shulman)",
    tip: "Corbetta y Shulman (2002) distinguen dos sistemas frontoparietales. La red dorsal, bilateral, aplica un control arriba-abajo guiado por metas; la ventral, lateralizada en el hemisferio derecho, actúa como un «interruptor de circuito» que reorienta la atención ante estímulos inesperados y relevantes para la conducta. No deben confundirse con las vías visuales dorsal y ventral.",
    v: [
      "Red dorsal=Sistema frontoparietal bilateral que dirige la atención según metas y expectativas",
      "Red ventral=Sistema lateralizado a la derecha que reorienta ante lo inesperado y relevante",
      "Surco intraparietal=Componente parietal de la red dorsal, junto al lóbulo parietal superior",
      "Unión temporoparietal=Nodo posterior de la red ventral",
      "Corteza frontal ventral=Giros frontales inferior y medio, componente anterior de la red ventral",
      "Campos oculares frontales=Componente frontal de la red dorsal",
      "Interruptor de circuito=Imagen de la red ventral, que corta la tarea en curso",
      "Control arriba-abajo=Selección guiada por metas, expectativas e instrucciones"
    ],
    g: [
      "La red dorsal de Corbetta y Shulman es ___.|bilateral|derecha|izquierda",
      "La red ventral reorienta la atención hacia estímulos inesperados pero ___ para la conducta.|relevantes|llamativos|neutros",
      "Mientras se persigue una meta, la red dorsal ___ lo que llega a la red ventral.|filtra|amplifica|duplica",
      "Corbetta y Shulman (2011) aplicaron su marco a la ___.|heminegligencia|prosopagnosia|hemianopsia",
      "La red ventral ayuda a explicar el predominio ___ de la atención espacial.|derecho|izquierdo|bilateral"
    ],
    tf: [
      "La red ventral de Corbetta y Shulman está lateralizada en el hemisferio derecho.|V",
      "La red ventral se activa ante cualquier estímulo llamativo, aunque sea irrelevante para la tarea.|F|Lo llamativo pero irrelevante no interrumpe la tarea; la red ventral salta ante lo inesperado y relevante.",
      "La red dorsal de Corbetta y Shulman equivale a la vía visual dorsal del «dónde».|F|Son conceptos distintos: las redes atencionales no deben confundirse con las vías visuales dorsal y ventral.",
      "La red dorsal equivale a la orientación voluntaria de Posner.|V"
    ],
    q: [
      "Una conductora concentrada en buscar una calle advierte de pronto que un peatón cruza delante del coche. ¿Qué red la reorienta hacia él?|La red ventral derecha|La red dorsal bilateral|La red de alerta tónica|Un estímulo inesperado y relevante para la conducta activa la red ventral, que obliga a la dorsal a reorientarse.",
      "¿Qué componentes forman la red dorsal?|Surco intraparietal y campos oculares frontales|Unión temporoparietal y giro frontal inferior|Locus coeruleus, tálamo y corteza frontal derecha|La unión temporoparietal y el giro frontal inferior son de la red ventral; el locus coeruleus pertenece a la alerta de Posner.",
      "¿Qué imagen describe mejor la función de la red ventral?|Un interruptor que corta la tarea|Un foco que se dirige a voluntad|Un filtro que bloquea lo novedoso|La red ventral actúa como un «interruptor de circuito»; el foco dirigido a voluntad es la imagen de la red dorsal.",
      "Mientras alguien resuelve una tarea exigente aparece un estímulo llamativo pero irrelevante. Según Corbetta y Shulman, lo más probable es que…|no interrumpa la tarea en curso|active de inmediato la red ventral|desactive la red dorsal bilateral|La red dorsal filtra lo que llega a la ventral; solo lo inesperado y relevante para la conducta la hace saltar."
    ],
    inc: [
      "Sobre las redes de Corbetta y Shulman|La red ventral es bilateral y guiada por metas|La red dorsal aplica el control arriba-abajo|La red ventral incluye la unión temporoparietal|La ventral está lateralizada a la derecha y es abajo-arriba; la bilateral y guiada por metas es la dorsal."
    ],
    seq: [],
    cls: [
      "Componentes de cada red|Red dorsal: surco intraparietal; lóbulo parietal superior; campos oculares frontales|Red ventral: unión temporoparietal; giro frontal inferior; giro frontal medio"
    ] },
  { t: "Paradigmas de atención visual",
    tip: "En el paradigma de Posner, la señal válida produce un beneficio y la inválida un coste; con SOA menores que una sacada, el efecto demuestra la atención encubierta. Las señales centrales orientan de forma endógena y solo si son predictivas; las periféricas, de forma exógena, rápida y transitoria. Con señales periféricas no predictivas y SOA largos aparece la inhibición de retorno. Stroop y flancos miden el control ejecutivo.",
    v: [
      "Beneficio=Ventaja en TR de los ensayos válidos frente a los neutros",
      "Coste=Desventaja en TR de los ensayos inválidos frente a los neutros",
      "SOA=Intervalo entre el inicio de la señal y el del objetivo",
      "Inhibición de retorno=Enlentecimiento en la posición señalada periféricamente con SOA largos",
      "Señal central=Flecha en el centro que orienta de forma endógena si es predictiva",
      "Atención basada en objetos=Ventaja para detectar dentro del mismo rectángulo señalado frente a otro",
      "Efecto Stroop=Interferencia de la palabra al nombrar la tinta en estímulos incongruentes",
      "Efecto de compatibilidad=Aumento del TR cuando los flancos se asocian a la respuesta contraria"
    ],
    g: [
      "Como el SOA suele ser menor que lo que tarda una sacada, la señalización demuestra la atención ___.|encubierta|abierta|sostenida",
      "Con una señal periférica, la facilitación aparece en torno a los ___ y es transitoria.|100–150 ms|300–500 ms|600–800 ms",
      "La inhibición de retorno puede durar hasta unos ___.|3 s|300 ms|30 s",
      "Eriksen y Eriksen usaron la tarea de flancos para estimar el tamaño mínimo del ___ atencional.|foco|filtro|recurso",
      "El efecto Stroop es asimétrico porque la ___ está mucho más automatizada que nombrar colores.|lectura|escritura|percepción"
    ],
    tf: [
      "La inhibición de retorno aparece típicamente con señales centrales predictivas y SOA cortos.|F|Aparece con señales periféricas no predictivas y SOA largos (más de ≈ 300 ms).",
      "Una señal periférica orienta la atención aunque no prediga dónde aparecerá el objetivo.|V",
      "En el Stroop, la tinta interfiere en la lectura de la palabra tanto como la palabra en el nombrado de la tinta.|F|El efecto es asimétrico: la palabra interfiere en el nombrado del color, pero no al revés.",
      "Los potenciales P1 y N1 son mayores ante estímulos en la posición atendida.|V"
    ],
    q: [
      "Con una flecha central válida en el 80 % de los ensayos, apenas hay beneficio si el SOA es de 100 ms, pero sí con 400 ms. ¿Por qué?|La orientación endógena tarda unos 300 ms|La flecha capta la atención de forma exógena|Con SOA largos aparece la inhibición de retorno|La señal central orienta de forma voluntaria y su efecto aparece a partir de ≈ 300 ms; la IR exige señales periféricas.",
      "Un destello periférico no predictivo precede al objetivo en 600 ms. ¿Qué se espera en la posición señalada?|Un TR más lento|Un TR más rápido|Ningún cambio de TR|Con señales periféricas no predictivas y SOA largos aparece la inhibición de retorno: la respuesta se enlentece allí.",
      "¿Qué mostraron Egly, Driver y Rafal (1994)?|Que la atención se propaga por el objeto|Que la señal central capta la atención|Que la IR dura hasta unos tres segundos|Tras señalar un extremo de un rectángulo, el objetivo se detecta antes en su otro extremo que, a igual distancia, en otro rectángulo.",
      "¿Qué función se atribuye a la inhibición de retorno?|Favorecer la exploración de sitios nuevos|Mantener la atención en lo ya inspeccionado|Acelerar la respuesta en la posición señalada|La IR favorece explorar lugares nuevos en lugar de volver a los ya inspeccionados (Klein, 2000)."
    ],
    inc: [
      "Sobre la señalización de Posner|Las señales periféricas solo funcionan si son predictivas|Las señales centrales producen un efecto que se mantiene|El coste compara los ensayos inválidos con los neutros|Las periféricas orientan de forma exógena aunque no predigan nada; las que exigen ser predictivas son las centrales."
    ],
    seq: [],
    cls: [
      "Tipo de señal en el paradigma de Posner|Señal central: flecha que apunta a un lado; orientación endógena; efecto desde ≈ 300 ms|Señal periférica: destello en el recuadro; orientación exógena; efecto a ≈ 100–150 ms"
    ] },
  { t: "Paradigmas temporales y de tarea dual",
    tip: "En el parpadeo atencional, la detección de T2 cae entre ≈ 200 y 500 ms tras T1, salvo en el lag 1. En el PRP, cuanto más corto es el SOA más se alarga el TR a la segunda tarea, porque la selección de la respuesta es un cuello de botella central (Pashler, 1994). Cambiar de tarea deja un coste residual incluso con preparación, y las puntuaciones de diferencia son poco fiables para comparar personas.",
    v: [
      "RSVP=Presentación visual serial rápida en el mismo punto, a unos 10 estímulos por segundo",
      "Parpadeo atencional=Caída de la detección de T2 entre ≈ 200 y 500 ms después de T1",
      "Preservación del lag 1=Buena detección de T2 cuando sigue inmediatamente a T1",
      "Coste dual=Diferencia entre hacer cada tarea sola o combinada",
      "Periodo refractario psicológico=Alargamiento del TR a la segunda tarea cuando el SOA es corto",
      "Cuello de botella central=Selección de las respuestas de una en una (Pashler, 1994)",
      "Coste residual=Parte del coste de cambio que persiste pese a la preparación",
      "Paradoja de la fiabilidad=Efectos robustos en grupo que discriminan mal entre personas"
    ],
    g: [
      "El parpadeo atencional fue descrito por Raymond, Shapiro y ___ (1992).|Arnell|Monsell|Welford",
      "Según Pashler, en el PRP pueden solaparse percepción y ejecución, pero no la ___ de la respuesta.|selección|ejecución|codificación",
      "Alternar entre dos tareas produce un coste de ___ frente a repetirlas.|cambio|vigilancia|conflicto",
      "El test del reloj de ___ (1948) muestra el decremento de la vigilancia.|Mackworth|Jersild|Telford",
      "En el PRP, cuanto más ___ es el SOA, más se alarga el TR a la segunda tarea.|corto|largo|variable"
    ],
    tf: [
      "Si T2 aparece inmediatamente después de T1, su detección suele conservarse.|V",
      "El PRP desaparece cuando las dos tareas son sencillas y de modalidades distintas.|F|Aparece aunque las tareas sean sencillas y de modalidades distintas, por el cuello de botella en la selección de respuesta.",
      "Con suficiente tiempo de preparación, el coste de cambio de tarea llega a desaparecer.|F|Disminuye con la preparación, pero queda un coste residual (Monsell, 2003).",
      "Los efectos de grupo del Stroop o los flancos son robustos, pero sus puntuaciones de diferencia son poco fiables para comparar personas.|V"
    ],
    q: [
      "En una tarea RSVP, un participante identifica bien T1. ¿En qué caso es más probable que no detecte T2?|Si aparece unos 300 ms después|Si aparece justo después de T1|Si aparece un segundo después|La detección de T2 cae entre ≈ 200 y 500 ms; en el lag 1 se conserva y después se recupera.",
      "Una persona cree que puede contestar mensajes mientras sigue una reunión sin perder nada. ¿Qué dato lo cuestiona mejor?|La selección de respuestas es serial|La alerta tónica varía a lo largo del día|El efecto Stroop es asimétrico|El PRP muestra un cuello de botella en la selección de respuestas; la multitarea suele ser alternancia rápida con costes.",
      "¿Qué explicación del parpadeo atencional es influyente, aunque no la única?|Consolidar T1 ocupa un recurso limitado|T1 enmascara visualmente a T2 siempre|La IR se extiende al segundo objetivo|Consolidar T1 en la memoria de trabajo ocuparía un recurso limitado durante unos cientos de milisegundos.",
      "¿Por qué una medida como el efecto Stroop puede discriminar mal entre personas?|Porque varía poco entre ellas|Porque apenas se replica en grupo|Porque depende del SOA elegido|Es la paradoja de la fiabilidad (Hedge et al., 2018): un efecto es robusto porque varía poco entre personas."
    ],
    inc: [
      "Sobre los paradigmas temporales y de tarea dual|El parpadeo es máximo cuando T2 sigue de inmediato a T1|El PRP se explica por un cuello de botella central|La vigilancia decae en tareas largas con señales infrecuentes|Si T2 sigue de inmediato a T1 (lag 1) suele detectarse bien; la caída se da entre ≈ 200 y 500 ms."
    ],
    seq: [
      "Detección de T2 según su distancia a T1|Detección conservada en el lag 1>Caída entre ≈ 200 y 500 ms>Recuperación posterior"
    ],
    cls: [] }
] },
{ n: 14, t: "Tipos de atención y relación con la percepción", cap: 3, pir: "alta", mods: [
  { t: "Atención exógena y endógena y sus determinantes",
    tip: "La atención exógena la inicia el estímulo: es rápida, transitoria y no depende de que la señal sea predictiva. La endógena la dirige la persona: es más lenta y se sostiene mientras dura la intención. Se discute si la captura es puramente automática (saliencia, Theeuwes) o depende de lo que se busca (control contingente, Folk et al., 1992), con la historia de selección como tercera fuerza.",
    v: [
      "Atención exógena=Captada de forma automática por las propiedades físicas de un estímulo",
      "Atención endógena=Dirigida de forma voluntaria según metas, expectativas o instrucciones",
      "Respuesta de orientación=Giro automático de ojos y cabeza hacia algo nuevo o brusco",
      "Inicio abrupto=Aparición repentina que capta la atención con mucha eficacia",
      "Postura de Theeuwes=El estímulo más saliente capta la atención sea cual sea la tarea",
      "Control contingente=Capta la atención lo que comparte rasgos con lo que se busca",
      "Historia de selección=Lo atendido o recompensado antes también guía la atención",
      "Ley de Yerkes-Dodson=Relación en U invertida entre activación y rendimiento"
    ],
    g: [
      "Los inicios abruptos captan la atención con mucha eficacia (Yantis y ___, 1984).|Jonides|Theeuwes|Remington",
      "La atención endógena tarda en desplegarse unos ___.|300 ms|100 ms|30 ms",
      "Según el control contingente, quien busca algo rojo es capturado por destellos ___.|rojos|brillantes|móviles",
      "Las expectativas sobre qué, dónde y cuándo aparecerá un estímulo son un determinante ___ de la atención.|interno|externo|físico",
      "La ley de Yerkes-Dodson se considera hoy una ___.|simplificación|refutación|tautología"
    ],
    tf: [
      "La atención exógena requiere que la señal prediga dónde aparecerá el objetivo.|F|La que depende de que la señal sea predictiva es la endógena; la exógena funciona aunque no prediga nada.",
      "Tras la orientación exógena puede aparecer inhibición de retorno.|V",
      "Según Folk, Remington y Johnston, el estímulo más saliente capta la atención con independencia de la tarea.|F|Esa es la postura de Theeuwes; Folk et al. proponen que capta lo que comparte rasgos con lo que se busca.",
      "La atención puede seleccionar una región del espacio, un objeto o un rasgo.|V"
    ],
    q: [
      "Un participante busca una letra roja entre letras negras. Un destello verde muy brillante en la periferia apenas le distrae, pero uno rojo sí. ¿Qué hipótesis apoya?|El control contingente|La saliencia de Theeuwes|La respuesta de orientación|Capta la atención lo que comparte rasgos con lo que se busca (Folk, Remington y Johnston, 1992).",
      "¿Qué característica es propia de la atención endógena?|Se mantiene mientras dura la intención|Se despliega en unos 100–150 ms y decae|Funciona aunque la señal no sea predictiva|La endógena es más lenta (≈ 300 ms) y sostenida, y solo funciona con señales predictivas.",
      "¿Cuál de estos es un determinante interno de la atención?|El estado emocional|El contraste de color|La novedad del estímulo|Los determinantes internos son de la persona (motivación, expectativas, emoción, fatiga); el contraste y la novedad son del estímulo.",
      "Según Awh, Belopolsky y Theeuwes (2012), además de las metas y la saliencia, guía la atención…|la historia de selección|la ley de Yerkes-Dodson|la respuesta de orientación|Lo atendido o recompensado antes actúa como tercera fuerza de guía."
    ],
    inc: [
      "Sobre la atención exógena y endógena|La endógena se asocia a señales periféricas|La exógena es rápida y transitoria|La endógena depende de que la señal sea predictiva|La señal típica de la endógena es central o simbólica; la periférica corresponde a la exógena."
    ],
    seq: [],
    cls: [
      "Determinantes de la atención|Externos: intensidad; movimiento; novedad; contraste con el entorno|Internos: motivación; expectativas; estado emocional; fatiga"
    ] },
  { t: "Integración de rasgos y búsqueda guiada",
    tip: "La FIT de Treisman y Gelade (1980) propone una etapa preatentiva, en paralelo y sin atención, que registra rasgos en mapas separados, y una de atención focalizada que une los rasgos de cada localización. La búsqueda de un rasgo es casi plana (pop-out); la de conjunción crece con cada elemento, y el doble si el objetivo falta. La búsqueda guiada de Wolfe sustituye la dicotomía por un mapa de prioridad.",
    v: [
      "Problema de la unión=Cómo se combinan en un objeto rasgos procesados en áreas distintas",
      "Etapa preatentiva=Registro en paralelo y sin atención de rasgos simples en mapas separados",
      "Mapa maestro de localizaciones=Mapa que recorre la atención focalizada para unir rasgos",
      "Efecto pop-out=El objetivo salta a la vista y el TR apenas aumenta con los elementos",
      "Búsqueda serial autoterminada=Revisión elemento a elemento que se detiene al hallar el objetivo",
      "Conjunción ilusoria=Combinación errónea de rasgos de objetos distintos cuando falta atención",
      "Asimetría de búsqueda=Es más fácil hallar un elemento con un rasgo entre otros que carecen de él",
      "Mapa de prioridad=Suma de saliencia abajo-arriba y guía arriba-abajo que ordena la búsqueda"
    ],
    g: [
      "En la búsqueda de un rasgo, el TR aumenta solo unos ___ por elemento.|0–10 ms|20–30 ms|40–60 ms",
      "El paciente R. M., con síndrome de ___, cometía muchas conjunciones ilusorias.|Bálint|Korsakoff|Capgras",
      "Según la FIT, la atención actúa como el ___ que une los rasgos.|pegamento|filtro|interruptor",
      "Es más fácil encontrar una Q entre O que una O entre Q: es una ___ de búsqueda.|asimetría|conjunción|pendiente",
      "Según Wolfe (1998), las pendientes de búsqueda forman un continuo, no dos ___.|grupos|mapas|etapas"
    ],
    tf: [
      "En la búsqueda de una conjunción, la pendiente es aproximadamente el doble cuando el objetivo está ausente.|V",
      "Según la FIT, el color y la orientación se registran en paralelo durante la etapa de atención focalizada.|F|El registro en paralelo de rasgos simples es la etapa preatentiva; la focalizada los une en cada localización.",
      "La búsqueda guiada predice que una conjunción se busca más rápido de lo que predice una búsqueda serial pura.|V",
      "Las pendientes de búsqueda se dividen nítidamente en dos grupos, rasgo y conjunción, como predecía la FIT.|F|Forman un continuo de eficiencia (Wolfe, 1998), y algunas conjunciones se buscan con eficacia."
    ],
    q: [
      "En una búsqueda de conjunción, el TR crece 25 ms por elemento con el objetivo presente. Si la búsqueda es serial autoterminada, ¿cuánto crecerá aproximadamente si falta?|50 ms por elemento|25 ms por elemento|12,5 ms por elemento|Con el objetivo presente se revisa de media la mitad; si falta, hay que revisarlo todo, así que la pendiente se duplica.",
      "Con la atención ocupada, un observador informa de un triángulo rojo tras ver un triángulo verde y un círculo rojo. ¿Qué fenómeno ilustra?|Una conjunción ilusoria|Un efecto pop-out|Una asimetría de búsqueda|Sin atención, los rasgos de objetos distintos se combinan mal (Treisman y Schmidt, 1982).",
      "Alguien busca una taza en la cocina y mira primero la encimera, no el techo. ¿Qué factor de guía de Wolfe y Horowitz ilustra?|La estructura de la escena|La saliencia abajo-arriba|La historia de selección|Wolfe y Horowitz (2017) incluyen la estructura de la escena entre los cinco factores que guían la búsqueda.",
      "En la búsqueda guiada, ¿qué combina el mapa de prioridad?|Saliencia y guía por rasgos del objetivo|Mapas de rasgos y conjunciones ilusorias|Etapa preatentiva y búsqueda serial pura|Suma la saliencia abajo-arriba y la guía arriba-abajo por los rasgos del objetivo; la atención visita los elementos por prioridad."
    ],
    inc: [
      "Sobre la teoría de integración de rasgos|Un rasgo se busca revisando uno a uno|La etapa preatentiva actúa en paralelo|La atención une los rasgos en cada lugar|En la búsqueda de un rasgo el objetivo salta a la vista; la revisión uno a uno es propia de la conjunción."
    ],
    seq: [
      "Procesamiento de un objeto según la FIT|Registro preatentivo de los rasgos en mapas separados>Atención focalizada en una posición del mapa maestro de localizaciones>Unión de los rasgos de esa posición en un objeto"
    ],
    cls: [
      "Tipo de búsqueda visual|Búsqueda de un rasgo: círculo rojo entre azules; efecto pop-out; TR casi plano|Búsqueda de una conjunción: círculo rojo entre cuadrados rojos y círculos azules; TR que crece con los elementos"
    ] },
  { t: "Ceguera por falta de atención y ceguera al cambio",
    tip: "La ceguera por falta de atención es no advertir un estímulo inesperado y visible con la atención ocupada (Mack y Rock, 1998; gorila de Simons y Chabris, 1999). La ceguera al cambio es no detectar una diferencia entre dos momentos que coincide con una interrupción (flicker de Rensink; estudio de la puerta). Los expertos no están protegidos, y se debate si la representación es escasa o rica.",
    v: [
      "Ceguera por falta de atención=No advertir un estímulo inesperado y visible con la atención ocupada",
      "Ceguera al cambio=No detectar cambios en una escena cuando coinciden con una interrupción",
      "Paradigma de flicker=Foto y versión modificada alternadas con una pantalla en blanco entre ambas",
      "Estudio de la puerta=Sustitución del interlocutor mientras pasa una puerta entre ambos",
      "Tarea de la cruz=Juicio de qué brazo es más largo en el que se añade una figura inesperada",
      "Drew, Võ y Wolfe (2013)=El 83 % de los radiólogos no vio un gorila insertado en una tomografía",
      "Ceguera a la elección=Fenómeno relacionado descrito por Johansson y colaboradores (2005)",
      "Representación escasa=Solo se codifica lo atendido, y el mundo actúa como memoria externa"
    ],
    g: [
      "En el estudio de Simons y Chabris (1999), alrededor del ___ no notó el gorila.|46 %|16 %|86 %",
      "La ceguera por falta de atención aumenta cuando el estímulo no se ___ a lo atendido.|parece|opone|antepone",
      "En el paradigma de flicker, la pantalla en blanco elimina la señal de ___.|movimiento|contraste|color",
      "Wolfe (1999) planteó si se trata de ceguera o de ___ inatencional.|amnesia|agnosia|apatía",
      "Según O'Regan (1992), el mundo actúa como su propia memoria ___.|externa|icónica|implícita"
    ],
    tf: [
      "Ser experto en un campo protege de la ceguera por falta de atención en esa tarea.|F|El 83 % de los radiólogos que buscaban nódulos no vio un gorila insertado en una tomografía (Drew et al., 2013).",
      "La ceguera por falta de atención aumenta con la carga perceptiva de la tarea.|V",
      "El paradigma de flicker de Rensink se usa para estudiar el parpadeo atencional.|F|Estudia la ceguera al cambio; el parpadeo atencional se estudia con presentación visual serial rápida.",
      "Según Nartker et al. (2025), quienes dicen no haber visto nada aciertan la ubicación del estímulo por encima del azar.|V"
    ],
    q: [
      "Un radiólogo concentrado en buscar nódulos no advierte la figura de un gorila insertada en la imagen. ¿Qué fenómeno es?|Ceguera por falta de atención|Ceguera al cambio por flicker|Parpadeo atencional en RSVP|Un estímulo inesperado y visible pasa inadvertido con la atención ocupada en otra tarea; no hay comparación entre escenas.",
      "¿Qué proceso falla en la ceguera al cambio?|La comparación entre dos escenas|La detección de un objeto inesperado|La consolidación del segundo objetivo|Falla la comparación entre la escena anterior y la actual; la detección de lo inesperado falla en la ceguera inatencional.",
      "¿Qué concluyeron Nartker et al. (2025)?|Que la ceguera inatencional no sería de todo o nada|Que la ceguera inatencional es un puro artefacto|Que los expertos son inmunes a esta ceguera visual|Hallaron detección por encima del azar con criterio conservador, aunque consideran provisional lo de una visión consciente residual.",
      "Un peatón no nota que el desconocido que le pregunta una dirección ha sido sustituido tras pasar una puerta entre ambos. ¿Qué ilustra?|La ceguera al cambio|La ceguera inatencional|La inhibición de retorno|Es el estudio de la puerta (Simons y Levin, 1998): falla la comparación entre dos momentos."
    ],
    inc: [
      "Sobre la ceguera por falta de atención|Disminuye cuando la tarea principal es exigente|Aumenta si el estímulo no se espera|Puede explicar accidentes de «miré, pero no lo vi»|Aumenta, no disminuye, cuando la tarea es exigente (carga perceptiva alta; Lavie)."
    ],
    seq: [],
    cls: [
      "Paradigma de cada fenómeno|Ceguera por falta de atención: cruz de Mack y Rock; gorila de Simons y Chabris|Ceguera al cambio: flicker de Rensink; estudio de la puerta"
    ] },
  { t: "Percepción sin atención y multitarea",
    tip: "La atención aumenta el contraste aparente y la resolución espacial, y el modelo de normalización lo explica como un aumento de la ganancia neural. Con atención mínima se capta la esencia de una escena, el propio nombre o información implícita. La multitarea solo es viable con tareas automatizadas o recursos distintos; si no, es alternancia rápida con costes, como al hablar por el móvil conduciendo, incluso con manos libres.",
    v: [
      "Carrasco, Ling y Read (2004)=Mostraron que un estímulo atendido se ve con más contraste aparente",
      "Modelo de normalización=Explica el efecto de la atención como aumento de la ganancia neural",
      "Gist=Esencia de una escena que se capta con atención mínima",
      "Supertaskers=≈ 2,5 % sin coste al combinar conducción simulada y una tarea verbal exigente",
      "Strayer y Johnston (2001)=Hablar por el móvil, incluso con manos libres, empeora la conducción",
      "Koch y Tsuchiya (2007)=Defienden que atención y conciencia pueden disociarse",
      "Cohen, Alvarez y Nakayama (2011)=Replican que lo percibido «sin atención» recibe algo de ella",
      "Ophir, Nass y Wagner (2009)=Asociaron la multitarea digital intensa a peor filtrado de distractores"
    ],
    g: [
      "El modelo de normalización explica el efecto de la atención como un aumento de la ___ neural.|ganancia|latencia|inhibición",
      "Hablar por el móvil al conducir es un problema ___, no manual.|atencional|auditivo|postural",
      "Con atención mínima se puede saber si una escena contiene un ___ (Li y colaboradores, 2002).|animal|rostro|texto",
      "En la muestra de Watson y Strayer (2010), en torno al ___ no mostró coste.|2,5 %|25 %|12,5 %",
      "La multitarea es viable si una tarea está muy ___ o si usan recursos distintos.|automatizada|vigilada|reforzada"
    ],
    tf: [
      "Hablar por el móvil con manos libres elimina el coste de la conversación sobre la conducción.|F|Incluso con manos libres se reduce la detección de señales y se alarga el frenado: el problema es atencional.",
      "Las réplicas del estudio de Ophir et al. (2009) muestran efectos pequeños e inconsistentes.|V",
      "Para categorizar una escena como «con animal» hace falta atención focalizada en ella.|F|Con atención mínima se capta la esencia de una escena y se puede categorizar (Li y colaboradores, 2002).",
      "La práctica reduce los costes de la multitarea, pero no elimina los límites centrales de la atención.|V"
    ],
    q: [
      "Un conductor habla por el móvil con manos libres y frena más tarde ante un peatón. ¿Cuál es la explicación más precisa?|La conversación ocupa la atención|Una mano sigue ocupada con el móvil|El sonido enmascara lo que se ve|Strayer y Johnston (2001) hallaron el coste también con manos libres: el problema es atencional, no manual.",
      "¿Qué efecto tiene atender a un estímulo sobre su percepción?|Aumenta su contraste aparente|Reduce su resolución espacial|Disminuye la respuesta neural|Lo atendido se ve con más contraste y resolución, y las neuronas que lo codifican responden con más fuerza.",
      "Un estudiante dice que puede estudiar y chatear a la vez sin coste. ¿Qué es lo más preciso?|Suele alternar rápido, con costes|Es viable porque usan recursos distintos|Solo lo consigue con mucha práctica|Si las tareas no están automatizadas ni usan recursos distintos, la multitarea es alternancia con costes de cambio.",
      "¿Qué sostienen Cohen, Alvarez y Nakayama (2011) frente a Koch y Tsuchiya (2007)?|Lo percibido sin atención recibe algo de ella|Atención y conciencia se disocian por completo|Sin atención no se procesa ninguna escena|Replican que lo que se percibe «sin atención» recibe en realidad algo de ella; Koch y Tsuchiya defienden la disociación."
    ],
    inc: [
      "Sobre la percepción con atención mínima|El propio nombre no se detecta si no se atiende|Se puede captar la esencia de una escena|En la heminegligencia hay procesamiento implícito|El propio nombre es un estímulo muy relevante que puede detectarse con atención mínima."
    ],
    seq: [],
    cls: [] }
] },
{ n: 15, t: "Ilusiones y sesgos", cap: 4, pir: "media", mods: [
  { t: "Ilusiones geométricas",
    tip: "Una ilusión perceptiva es una discrepancia sistemática entre lo percibido y la medida física, que persiste aunque se conozca y revela supuestos útiles; la alucinación, en cambio, es una percepción sin estímulo externo. Se clasifican en distorsiones, ambigüedades, ficciones y paradojas. En la Müller-Lyer parece más largo el segmento con las aletas abiertas hacia fuera; Gregory lo explicó como una constancia de tamaño mal aplicada.",
    v: [
      "Ilusión perceptiva=Discrepancia sistemática entre lo percibido y la medida física, que persiste aunque se sepa",
      "Alucinación=Percepción sin estímulo externo",
      "Distorsión=Error al percibir el tamaño, la longitud, la curvatura o la luminosidad",
      "Ficción=Percepción de algo que no está dibujado",
      "Paradoja=Percepción de un objeto imposible en tres dimensiones",
      "Ilusión de Ponzo=Entre líneas convergentes, la barra cercana a la convergencia parece mayor",
      "Ilusión de Ebbinghaus=Un círculo rodeado de círculos grandes parece menor que rodeado de pequeños",
      "Ilusión de Hering=Rectas paralelas que parecen curvarse sobre líneas que irradian de un punto"
    ],
    g: [
      "En la ilusión de Müller-Lyer parece más largo el segmento con las aletas abiertas hacia ___.|fuera|dentro|arriba",
      "Gregory (1966) explicó la Müller-Lyer como una constancia de ___ mal aplicada.|tamaño|color|forma",
      "El triángulo de Kanizsa produce contornos ___.|ilusorios|ambiguos|imposibles",
      "Las bandas de Mach y la rejilla de Hermann son ilusiones de origen ___.|fisiológico|cognitivo|físico",
      "Aglioti y colaboradores (1995) hallaron que la apertura de los dedos al agarrar apenas se dejaba engañar por la ilusión de ___.|Ebbinghaus|Müller-Lyer|Hering"
    ],
    tf: [
      "En la Müller-Lyer, el segmento con las aletas en punta de flecha parece más largo.|F|Parece más largo el de las aletas abiertas hacia fuera; el de punta de flecha parece más corto.",
      "Una ilusión perceptiva persiste aunque la persona sepa que es una ilusión.|V",
      "Según Gregory, las aletas abiertas sugieren una esquina interior que se aleja, y el sistema agranda ese segmento.|V",
      "Que la acción escapa a la ilusión de Ebbinghaus es un hallazgo cerrado desde Aglioti et al. (1995).|F|Franz y colaboradores (2000) lo discutieron por problemas de método; sigue en debate."
    ],
    q: [
      "El palo que parece quebrado al meterlo en el agua es una ilusión de origen…|físico|fisiológico|cognitivo|Se debe a la refracción de la luz, no al sistema visual; las posimágenes son fisiológicas y las inferencias, cognitivas.",
      "Según Gregory, ¿por qué el segmento con aletas abiertas parece más largo?|Se interpreta como más lejano|Se interpreta como más cercano|Las aletas inhiben la retina|Las aletas abiertas recuerdan una esquina interior que se aleja, y el sistema agranda lo que interpreta como más lejano.",
      "¿A qué tipo de ilusión pertenece el triángulo de Penrose?|Paradoja|Ficción|Distorsión|Es un objeto imposible en tres dimensiones; el triángulo de Kanizsa, en cambio, es una ficción.",
      "Un paciente ve con claridad a su difunto padre sentado en una silla vacía. ¿Por qué no es una ilusión perceptiva?|Porque no hay estímulo externo|Porque persiste aunque se conozca|Porque afecta al tamaño percibido|Es una alucinación: percepción sin estímulo externo. La ilusión deforma un estímulo que sí existe."
    ],
    inc: [
      "Sobre las explicaciones de la Müller-Lyer|Se explica por inhibición lateral en la retina|Gregory propuso una constancia de tamaño mal aplicada|Howe y Purves aluden a la estadística de escenas naturales|Las explicaciones son la constancia mal aplicada, la estadística de escenas naturales y la asimilación o marco."
    ],
    seq: [],
    cls: [
      "Tipo de ilusión según el error|Distorsiones: Müller-Lyer; Ponzo; Ebbinghaus|Ambigüedades: cubo de Necker; jarrón de Rubin; pato-conejo|Ficciones: triángulo de Kanizsa; contornos ilusorios"
    ] },
  { t: "Ilusiones de luminosidad, color y profundidad; figuras ambiguas",
    tip: "El sistema visual estima la superficie descontando la iluminación: así logra la constancia, pero genera ilusiones como el contraste simultáneo, el tablero de Adelson o «el vestido». La habitación de Ames sacrifica la constancia de tamaño para mantener el supuesto de sala rectangular. Las figuras reversibles alternan dos lecturas que nunca se ven a la vez, y las imposibles combinan claves coherentes por zonas.",
    v: [
      "Contraste simultáneo=Un gris parece más claro sobre fondo negro que sobre fondo blanco",
      "Tablero de Adelson=Dos casillas del mismo gris; la que está en sombra se ve más clara",
      "Habitación de Ames=Sala trapezoidal que, vista por la mirilla, parece rectangular",
      "Biestabilidad perceptiva=Alternancia de dos interpretaciones sin que cambie el estímulo",
      "Fenómeno phi=Movimiento aparente de una sola luz que se desplaza (Wertheimer)",
      "Efecto autocinético=Un punto fijo en la oscuridad parece moverse",
      "Ilusión tamaño-peso=A igual peso, el objeto pequeño parece más pesado (Charpentier, 1891)",
      "Efecto posterior de movimiento=Tras mirar una cascada, lo quieto parece subir"
    ],
    g: [
      "En el tablero de Adelson, la casilla B, situada en la ___, se ve más clara que A.|sombra|luz|esquina",
      "El pato-conejo fue descrito por ___ (1899).|Jastrow|Necker|Rubin",
      "En la habitación de Ames, el sistema mantiene el supuesto de sala rectangular a costa de la constancia de ___.|tamaño|color|claridad",
      "En la ilusión tamaño-peso, a igual peso, el objeto ___ parece más pesado.|pequeño|grande|oscuro",
      "En las figuras reversibles, la intención puede favorecer una lectura, pero no impide la ___.|alternancia|percepción|fijación"
    ],
    tf: [
      "La ilusión de la Luna tiene hoy una explicación definitiva basada en la refracción atmosférica.|F|Sigue sin explicación definitiva; las más citadas aluden a la distancia aparente y a la comparación con el paisaje.",
      "En el cubo de Necker, con esfuerzo se pueden ver las dos interpretaciones a la vez.|F|Las dos lecturas de una figura reversible nunca se ven a la vez, aunque la intención favorezca una.",
      "La ilusión del tablero de Adelson es un efecto secundario del mecanismo que permite la constancia.|V",
      "En la ilusión tamaño-peso, el objeto más pequeño parece más pesado aunque pesen lo mismo.|V"
    ],
    q: [
      "Con #TheDress, unos vieron el vestido azul y negro y otros blanco y dorado. ¿Cuál es la explicación más probable?|Cada uno suponía una iluminación distinta|Algunos tenían una anomalía en los conos|La foto alternaba entre dos versiones|Cada observador probablemente suponía una iluminación distinta y la descontaba de forma diferente.",
      "Dos personas de igual estatura parecen de tamaños muy distintos al mirar por la mirilla de una sala. ¿Qué ilusión es?|La habitación de Ames|La ilusión de Ponzo|La ilusión de la Luna|La sala trapezoidal parece rectangular, y el sistema mantiene ese supuesto a costa de la constancia de tamaño.",
      "¿Qué ilusión procede de una modalidad no visual?|La ilusión tamaño-peso|El efecto autocinético|El fenómeno phi|La ilusión tamaño-peso (Charpentier, 1891) aparece al sopesar objetos; las otras dos son ilusiones visuales de movimiento.",
      "¿Qué caracteriza a figuras imposibles como el triángulo de Penrose?|Claves coherentes por partes, no en conjunto|Dos interpretaciones que se alternan en el tiempo|Bordes que se perciben sin estar dibujados en ellas|Combinan claves de profundidad coherentes por zonas e incompatibles en conjunto; la alternancia define a las reversibles."
    ],
    inc: [
      "Sobre las ilusiones de luminosidad y profundidad|El sistema mide sin más la luz retiniana|Un gris parece más claro sobre fondo negro|La habitación de Ames es trapezoidal|El sistema estima la superficie descontando la iluminación; no mide sin más la luz que llega a la retina."
    ],
    seq: [],
    cls: [
      "Ilusiones de movimiento y de otras modalidades|Movimiento visual: fenómeno phi; efecto autocinético; efecto posterior de movimiento|Multisensoriales o no visuales: efecto McGurk; mano de goma; ilusión tamaño-peso"
    ] },
  { t: "Cultura y percepción",
    tip: "Segall, Campbell y Herskovits (1963, 1966) hallaron más ilusión de Müller-Lyer en muestras urbanas occidentales y lo atribuyeron a crecer entre ángulos rectos. Jahoda (1971) y la hipótesis de la pigmentación retiniana la cuestionaron, y Amir y Firestone (2025) reunieron cinco tipos de pruebas contra la explicación cultural. Hoy es influyente pero muy cuestionada; la cultura sí influye en atender más al contexto o a los objetos centrales.",
    v: [
      "Mundo carpinteado=Hipótesis de que vivir entre ángulos rectos aumenta la ilusión de Müller-Lyer",
      "Segall, Campbell y Herskovits=Hallaron más Müller-Lyer en muestras urbanas occidentales",
      "Jahoda (1971)=No halló diferencias entre grupos urbanos y rurales de una misma población",
      "Pigmentación de la retina=Explicación alternativa de parte de las diferencias entre grupos",
      "Amir y Firestone (2025)=Reunieron cinco tipos de pruebas contra la explicación cultural",
      "Versión háptica=Forma táctil de la ilusión de Müller-Lyer",
      "Muestras WEIRD=Occidentales, educadas, industrializadas, ricas y democráticas",
      "Henrich, Heine y Norenzayan=Advirtieron en 2010 de la escasa representatividad de las muestras habituales"
    ],
    g: [
      "Según la hipótesis del mundo carpinteado, crecer entre edificios enseña a leer los ángulos como ___ en profundidad.|esquinas|bordes|sombras",
      "Jahoda (1971) no halló diferencias entre grupos urbanos y ___ de una misma población.|rurales|costeros|nómadas",
      "La ilusión aparece en personas con ceguera congénita ___ después de recuperar la vista.|inmediatamente|años|meses",
      "La hipótesis del mundo carpinteado se apoyaba en la explicación de ___ de la Müller-Lyer.|Gregory|Kanizsa|Jastrow",
      "Hoy se considera que la base de la ilusión de Müller-Lyer es en gran medida ___.|universal|cultural|aprendida"
    ],
    tf: [
      "Según Amir y Firestone (2025), versiones de la Müller-Lyer sin líneas rectas ni ángulos también producen la ilusión.|V",
      "Las estadísticas de escenas naturales, sin construcciones humanas, no bastan para producir la ilusión.|F|Según Amir y Firestone, sí bastan: es una de sus cinco líneas de evidencia contra la explicación cultural.",
      "La hipótesis del mundo carpinteado se mantiene hoy como la explicación aceptada de la Müller-Lyer.|F|Fue muy influyente, pero hoy está muy cuestionada: la base de la ilusión parece en gran medida universal.",
      "La cultura influye en la tendencia a atender más al contexto o a los objetos centrales de una escena.|V"
    ],
    q: [
      "Un investigador quiere mostrar que la Müller-Lyer no depende de crecer entre edificios. ¿Qué dato le sería más útil?|Que aparezca en otras especies|Que sea mayor en las ciudades|Que dependa de los ángulos rectos|Que la ilusión aparezca en especies no humanas es una de las pruebas de Amir y Firestone contra la explicación cultural.",
      "¿Qué halló el estudio de Segall, Campbell y Herskovits?|Más ilusión en muestras urbanas occidentales|Ninguna diferencia entre poblaciones|Más ilusión en poblaciones rurales africanas|La Müller-Lyer era mayor en muestras urbanas occidentales que en algunas poblaciones rurales africanas.",
      "¿Qué crítica temprana recibió la hipótesis del mundo carpinteado?|La pigmentación de la retina|La existencia de una versión táctil|La presencia en especies no humanas|Jahoda (1971) y la pigmentación retiniana son críticas tempranas; las otras pruebas las reunieron Amir y Firestone en 2025.",
      "¿Qué advierte el término WEIRD?|Que muchas muestras son poco representativas|Que las ilusiones son mayores en países ricos|Que la cultura no influye en la percepción|Gran parte de la psicología se basa en muestras WEIRD, poco representativas de la humanidad (Henrich et al., 2010)."
    ],
    inc: [
      "Sobre las pruebas de Amir y Firestone (2025)|Desaparece en ciegos evaluados por tacto|La ilusión aparece en muchas especies no humanas|Existe una versión táctil de la ilusión|La ilusión aparece también en personas ciegas de por vida evaluadas por el tacto."
    ],
    seq: [],
    cls: [
      "Pruebas sobre el mundo carpinteado|A favor: Segall, Campbell y Herskovits|En contra: Jahoda (1971); especies no humanas; versión háptica; ceguera congénita recuperada"
    ] },
  { t: "Sesgos perceptivos y atencionales",
    tip: "Un sesgo perceptivo o atencional favorece cierta información sin deformar lo percibido, y no debe confundirse con el sesgo de respuesta de la TDS. Las personas ansiosas muestran un sesgo moderado hacia la amenaza (Bar-Haim et al., 2007), medido con dot-probe o Stroop emocional. La modificación del sesgo atencional (ABM) tiene efectos pequeños o nulos en los metaanálisis rigurosos y no es un tratamiento de primera línea.",
    v: [
      "Sesgo atencional=Tendencia sistemática a procesar antes, o con más peso, unos estímulos que otros",
      "Disposición perceptiva=Percibir con más facilidad lo que se espera según el contexto",
      "Congruencia emocional=Atender más a lo que encaja con el estado de ánimo",
      "Pseudonegligencia=Ligera desviación a la izquierda al marcar el centro de una línea en personas sanas",
      "Tarea dot-probe=Sonda que sustituye a uno de dos estímulos simultáneos, amenazante o neutro",
      "Stroop emocional=Más lentitud al nombrar la tinta de palabras amenazantes en personas ansiosas",
      "Vigilancia-evitación=Facilitación hacia la amenaza seguida de evitación posterior (Mogg y Bradley)",
      "ABM=Entrenamiento con dot-probe para apartar la atención de la amenaza"
    ],
    g: [
      "Bar-Haim y colaboradores (2007) hallaron en personas ansiosas un sesgo a la amenaza de tamaño ___.|moderado|grande|nulo",
      "En el ABM, la sonda aparece casi siempre tras el estímulo ___.|neutro|amenazante|positivo",
      "La pseudonegligencia fue descrita por Bowers y ___ (1980).|Heilman|Halligan|Bradley",
      "El dot-probe fue introducido por MacLeod, Mathews y ___ (1986).|Tata|Mogg|Cuijpers",
      "Un sesgo atencional no ___ lo percibido, como la ilusión, sino que favorece cierta información.|deforma|duplica|retrasa"
    ],
    tf: [
      "El ABM se considera un tratamiento de primera línea para los trastornos de ansiedad.|F|Los metaanálisis rigurosos hallan efectos pequeños o nulos; como mucho, es un complemento de baja intensidad.",
      "En el metaanálisis de Bar-Haim et al. (2007), el sesgo a la amenaza no aparecía en las personas no ansiosas.|V",
      "El sesgo atencional equivale al sesgo de respuesta de la teoría de detección de señales.|F|El sesgo de respuesta es el criterio de decisión de la TDS; el atencional favorece el procesamiento de ciertos estímulos.",
      "Muchos sesgos atencionales son adaptativos y se vuelven problemáticos cuando son rígidos o excesivos.|V"
    ],
    q: [
      "En un dot-probe, una persona con ansiedad social responde antes cuando la sonda sustituye a un rostro enfadado. ¿Qué indica?|Que su atención estaba en la amenaza|Que evita los estímulos amenazantes|Que adopta un criterio de respuesta laxo|Responder antes cuando la sonda sustituye al estímulo amenazante indica que la atención ya estaba allí.",
      "¿Qué hallaron Fodor y colaboradores (2020) al comparar el ABM con un entrenamiento simulado?|Ninguna diferencia significativa|Un efecto grande a favor del ABM|Más remisiones que con la TCC|La diferencia fue prácticamente nula (SMD −0,05; IC del 95 %: −0,22 a 0,12), y tampoco frente a la lista de espera.",
      "¿Por qué Cristea, Kok y Cuijpers (2015) rebajaron la eficacia del ABM?|Por sesgo de publicación|Por empeorar la ansiedad|Por usar solo adultos sanos|Hallaron efectos pequeños y heterogéneos, con indicios de sesgo de publicación, que dejaban de ser significativos al corregirlos.",
      "Una persona deprimida se fija sobre todo en lo que encaja con su ánimo triste. ¿Qué sesgo ilustra mejor?|Congruencia emocional|Sesgo hacia la novedad|Disposición perceptiva|Atender más a lo que encaja con el estado de ánimo del momento es la congruencia emocional."
    ],
    inc: [
      "Sobre el sesgo atencional en la ansiedad|Solo incluye la facilitación hacia la amenaza|Se mide con el dot-probe y el Stroop emocional|Puede incluir dificultad para desengancharse|Incluye facilitación, dificultad para desengancharse y, a veces, evitación posterior."
    ],
    seq: [],
    cls: [] }
] },
{ n: 16, t: "Trastornos de la atención", cap: 4, pir: "alta", mods: [
  { t: "Disprosexias",
    tip: "Las disprosexias se dividen en cuantitativas (hiperprosexia, hipoprosexia y aprosexia) y cualitativas (paraprosexia y pseudoaprosexia). La terminología no es uniforme entre manuales, así que conviene seguir el de referencia. El déficit atencional puede ser el núcleo de un cuadro, como en el síndrome confusional, o un síntoma acompañante, como la hipoprosexia de la depresión.",
    v: [
      "Hiperprosexia=Aumento de la atención, a menudo fijada en ciertos temas o estímulos",
      "Hipoprosexia=Disminución de la capacidad para concentrarse y mantener la atención",
      "Aprosexia=Ausencia de atención; forma extrema de la disminución atencional",
      "Paraprosexia=Atención inestable o desviada hacia lo irrelevante",
      "Pseudoaprosexia=Apariencia de falta de atención con la capacidad conservada",
      "Atención en túnel=Estrechamiento del campo atencional por estrés o miedo intenso",
      "Inatención selectiva=Evitar atender a lo que genera malestar",
      "Síndrome confusional=Alteración de la atención y la conciencia de inicio agudo y curso fluctuante"
    ],
    g: [
      "La aprosexia aparece típicamente en el estupor, el coma o la ___ grave.|confusión|ansiedad|euforia",
      "La hipervigilancia hacia la amenaza en la ansiedad es un ejemplo de ___.|hiperprosexia|paraprosexia|hipoprosexia",
      "La paraprosexia se clasifica como una disprosexia ___.|cualitativa|cuantitativa|transitoria",
      "En el DSM-5-TR, el síndrome confusional es de inicio agudo y curso ___.|fluctuante|progresivo|estable",
      "La ___ es la disminución de la capacidad de concentración típica de la depresión.|hipoprosexia|aprosexia|paraprosexia"
    ],
    tf: [
      "La pseudoaprosexia es una disprosexia cuantitativa.|F|Es cualitativa: hay apariencia de falta de atención con la capacidad conservada.",
      "La aprosexia es la forma extrema de la hipoprosexia.|V",
      "Los manuales de referencia coinciden en cómo definen la paraprosexia y la pseudoaprosexia.|F|La terminología no es uniforme: manuales como Belloch, Sandín y Ramos no las definen igual.",
      "En la depresión, el déficit atencional suele ser un síntoma acompañante y no el núcleo del cuadro.|V"
    ],
    q: [
      "Un paciente en fase maníaca cambia sin parar de tema, atraído por cualquier ruido o detalle irrelevante. Según la clasificación de esta unidad, ¿qué disprosexia presenta?|Paraprosexia|Hipoprosexia|Pseudoaprosexia|La atención inestable o desviada hacia lo irrelevante (distraibilidad) es la paraprosexia, típica de la manía.",
      "Una paciente en estupor no responde a ningún estímulo del entorno. ¿Qué término describe su atención?|Aprosexia|Hipoprosexia|Paraprosexia|La ausencia de atención, forma extrema de la hipoprosexia, aparece en el estupor, el coma o la confusión grave.",
      "¿En qué cuadro es el déficit atencional el núcleo del trastorno?|Síndrome confusional|Episodio depresivo|Trastorno de ansiedad|El DSM-5-TR define el delirium por una alteración de la atención y la conciencia; en la depresión es un síntoma acompañante.",
      "Bajo un miedo intenso, una persona solo atiende a la salida más cercana e ignora todo lo demás. ¿Qué fenómeno ilustra?|Atención en túnel|Inatención selectiva|Pseudoaprosexia|Es el estrechamiento del campo atencional por estrés o miedo intenso; la inatención selectiva evita lo que genera malestar."
    ],
    inc: [
      "Sobre las disprosexias|La hiperprosexia es una disprosexia cualitativa|La hipoprosexia aparece en la fatiga y las demencias|La paraprosexia se asocia a distraibilidad|La hiperprosexia es cuantitativa: la atención aumenta."
    ],
    seq: [],
    cls: [
      "Tipo de disprosexia|Cuantitativas: hiperprosexia; hipoprosexia; aprosexia|Cualitativas: paraprosexia; pseudoaprosexia"
    ] },
  { t: "TDAH: criterios diagnósticos",
    tip: "El DSM-5-TR exige al menos 6 de 9 síntomas de inatención y/o de hiperactividad-impulsividad durante 6 meses (5 desde los 17 años), varios antes de los 12 años, en dos o más contextos, con deterioro y sin mejor explicación. Habla de presentaciones, no de subtipos. La CIE-11 (6A05) no fija un número mínimo de síntomas. El diagnóstico es clínico.",
    v: [
      "Edad de inicio DSM-5-TR=Varios síntomas presentes antes de los 12 años",
      "Umbral desde los 17 años=Bastan 5 síntomas en una o en ambas dimensiones",
      "Presentación=Término que sustituye a «subtipo» porque el cuadro cambia con el tiempo",
      "Presentación combinada=Cumple criterios de inatención y de hiperactividad-impulsividad",
      "6A05=Código del TDAH en la CIE-11, entre los trastornos del neurodesarrollo",
      "F90=Código de la CIE-10, «trastorno hipercinético», más restrictivo",
      "Criterio C=Varios síntomas presentes en dos o más ámbitos",
      "Criterio E=Los síntomas no se explican mejor por otro trastorno mental"
    ],
    g: [
      "En el DSM-IV, la edad de inicio exigida era antes de los ___.|7 años|12 años|17 años",
      "Tanto el DSM-5-TR como la CIE-11 exigen una duración de al menos ___.|6 meses|12 meses|3 meses",
      "Desde el DSM-5 se permite el diagnóstico conjunto con el trastorno del ___.|espectro autista|desarrollo intelectual|lenguaje",
      "En la CIE-11, el código 6A05.2 corresponde a la presentación ___.|combinada|inatenta|hiperactiva-impulsiva",
      "El DSM-5-TR enumera ___ síntomas de inatención y otros tantos de hiperactividad-impulsividad.|9|6|5"
    ],
    tf: [
      "A partir de los 17 años, el DSM-5-TR exige al menos 5 síntomas en una o en ambas dimensiones.|V",
      "El DSM-5-TR exige que varios síntomas estén presentes antes de los 7 años.|F|Antes de los 12 años; el límite de 7 años era del DSM-IV.",
      "La CIE-11 exige, como el DSM-5-TR, un mínimo de 6 síntomas.|F|La CIE-11 no fija un número mínimo de síntomas: ofrece una descripción clínica.",
      "Ninguna prueba neuropsicológica ni marcador biológico establece por sí solo el diagnóstico de TDAH.|V"
    ],
    q: [
      "Un adulto de 25 años presenta 5 síntomas de inatención desde los 9 años, en el trabajo y en casa, con deterioro claro. Según el DSM-5-TR…|cumple el umbral de síntomas|no llega al mínimo de 6|no cumple la edad de inicio|Desde los 17 años bastan 5 síntomas, y el inicio antes de los 12 años se cumple.",
      "Un niño muestra muchos síntomas en el colegio, pero ninguno en casa ni con los amigos. ¿Qué criterio no cumple?|El de contextos|El de deterioro|El de duración|El criterio C exige que varios síntomas estén presentes en dos o más ámbitos.",
      "¿Por qué el DSM-5-TR habla de «presentaciones» y no de «subtipos»?|Porque el cuadro cambia con el tiempo|Porque la CIE-11 eliminó el término|Porque no hay diferencias entre ellas|La presentación se especifica según los últimos 6 meses, porque el cuadro varía a lo largo del tiempo.",
      "¿En qué coinciden el DSM-5-TR y la CIE-11?|En exigir al menos 6 meses|En fijar 6 síntomas mínimos|En el inicio antes de los 12 años|Ambos exigen 6 meses; la CIE-11 no fija número de síntomas y sitúa el inicio durante el periodo del desarrollo."
    ],
    inc: [
      "Sobre los criterios del TDAH en el DSM-5-TR|Exige 6 síntomas en cada dimensión|Los síntomas deben interferir en el funcionamiento|Varios síntomas deben aparecer antes de los 12 años|Se exigen al menos 6 en una o en ambas dimensiones, no en cada una (5 desde los 17 años)."
    ],
    seq: [],
    cls: [
      "Dimensión de cada síntoma|Inatención: pierde objetos necesarios; olvida actividades cotidianas; le cuesta organizarse|Hiperactividad-impulsividad: habla en exceso; interrumpe o se entromete; le cuesta esperar su turno"
    ] },
  { t: "TDAH: prevalencia, curso y debate",
    tip: "La prevalencia infantil del TDAH oscila entre el 3,4 % y el 8 % según el método (5,29 % en Polanczyk et al., 2007), y en adultos es del 2,58 % si se exige persistencia desde la infancia. Las diferencias se deben a cómo se diagnostica, no al país ni a la época, y la prevalencia comunitaria es estable. Conviven el sobrediagnóstico (casos leves, edad relativa) y el infradiagnóstico (niñas, adultos).",
    v: [
      "Polanczyk et al. (2007)=Prevalencia mundial en niños y adolescentes del 5,29 %",
      "Polanczyk et al. (2014)=Sin aumento de la prevalencia comunitaria en tres décadas",
      "Catalá-López et al. (2012)=Prevalencia del 6,8 % en niños y adolescentes en España",
      "Song et al. (2021)=Adultos: 2,58 % con persistencia desde la infancia y 6,76 % con síntomas",
      "Efecto de la edad relativa=Más diagnósticos en los niños más pequeños de su curso",
      "Kazda et al. (2021)=Indicios de sobrediagnóstico y sobretratamiento, sobre todo en casos leves",
      "Infradiagnóstico en niñas=Frecuente porque suelen ser inatentas y poco disruptivas",
      "Faraone et al. (2021)=Alta heredabilidad y peores resultados del TDAH sin tratar"
    ],
    g: [
      "En la infancia, el TDAH es más frecuente en varones, en una proporción de ≈ ___ en población general.|2 a 1|5 a 1|1 a 1",
      "Según Ayano et al. (2023), la presentación más frecuente es la ___.|inatenta|combinada|hiperactiva",
      "Con la edad, la hiperactividad motora suele convertirse en ___ interna.|inquietud|ansiedad|rigidez",
      "Las diferencias de prevalencia se deben sobre todo a ___ se diagnostica.|cómo|dónde|cuándo",
      "En adultos con síntomas, sin exigir inicio infantil, la prevalencia es del ___ (Song et al., 2021).|6,76 %|2,58 %|8,0 %"
    ],
    tf: [
      "La prevalencia comunitaria del TDAH ha aumentado mucho en las últimas tres décadas.|F|Polanczyk et al. (2014) no hallaron aumento; lo que ha crecido son los diagnósticos y las prescripciones.",
      "Con la edad, la inatención y la desorganización tienden a persistir más que la hiperactividad motora.|V",
      "Las diferencias de prevalencia entre estudios se explican sobre todo por el país donde se realizan.|F|Se deben sobre todo a cómo se diagnostica (criterios, deterioro, informantes), no al país ni a la época.",
      "En el TDAH conviven el sobrediagnóstico y el infradiagnóstico.|V"
    ],
    q: [
      "En un colegio, los niños nacidos justo antes de la fecha de corte, los más pequeños de su curso, reciben más diagnósticos de TDAH. ¿Cómo se llama este fenómeno?|Efecto de la edad relativa|Infradiagnóstico en niñas|Sobretratamiento de casos leves|Los más pequeños del curso tienen más probabilidad de diagnóstico (Layton et al., 2018).",
      "¿Por qué el TDAH se infradiagnostica en niñas?|Suelen ser inatentas y poco disruptivas|Su prevalencia real es casi inexistente|Los criterios las excluyen expresamente|Más a menudo presentan inatención sin conductas disruptivas, lo que llama menos la atención.",
      "¿Qué prevalencia en adultos corresponde a un TDAH persistente desde la infancia?|2,58 %|6,76 %|5,29 %|Song et al. (2021): 2,58 % con persistencia desde la infancia y 6,76 % si no se exige inicio infantil.",
      "Según Kazda et al. (2021), ¿dónde se concentran los indicios de sobrediagnóstico?|En los casos leves|En las niñas inatentas|En los adultos jóvenes|Hallaron sobrediagnóstico y sobretratamiento sobre todo en casos leves, con beneficios inciertos."
    ],
    inc: [
      "Sobre el curso del TDAH|Su heredabilidad se considera baja|Una parte importante continúa en la edad adulta|Son frecuentes los trastornos por consumo de sustancias|La heredabilidad del TDAH es alta (Faraone et al., 2021)."
    ],
    seq: [],
    cls: [
      "Problemas diagnósticos del TDAH|Sobrediagnóstico: casos leves; niños más pequeños del curso|Infradiagnóstico: niñas inatentas; adultos; grupos con menos acceso a servicios"
    ] },
  { t: "Heminegligencia",
    tip: "La heminegligencia es la dificultad para atender al lado contrario a la lesión sin un déficit sensorial o motor primario que la explique. Es más frecuente y grave tras lesiones derechas del lóbulo parietal inferior y la unión temporoparietal. En la bisección de líneas, la marca se desvía hacia la derecha, el lado de la lesión. Se diferencia de la hemianopsia, que es sensorial, y se asocia a extinción y anosognosia.",
    v: [
      "Heminegligencia=Dificultad para atender al lado contralesional sin déficit sensorial o motor primario",
      "Extinción=No detectar un estímulo contralesional si a la vez aparece otro ipsilesional",
      "Anosognosia=Falta de conciencia del déficit, que empeora el pronóstico (Babinski)",
      "Negligencia alocéntrica=Omisión del lado izquierdo de cada objeto, esté donde esté",
      "Negligencia representacional=Omisión de la mitad de las imágenes mentales",
      "Hemianopsia=Pérdida sensorial de medio campo visual, que el paciente suele advertir",
      "Adaptación prismática=Técnica de rehabilitación con prismas (Rossetti et al., 1998)",
      "Escala Catherine Bergego=Evaluación de la negligencia en la vida diaria"
    ],
    g: [
      "En la bisección de líneas, el paciente con negligencia izquierda desvía la marca hacia la ___.|derecha|izquierda|línea media",
      "Tras un ictus, alrededor del ___ de los pacientes con lesiones derechas presenta negligencia.|38 %|18 %|8 %",
      "La explicación del desequilibrio interhemisférico se debe a ___.|Kinsbourne|Mesulam|Bisiach",
      "Los pacientes de Bisiach y Luzzatti omitían edificios al imaginar la plaza de la catedral de ___.|Milán|Turín|Roma",
      "La paciente de Marshall y Halligan prefería la casa que no ardía, una prueba de procesamiento ___.|implícito|explícito|consciente"
    ],
    tf: [
      "En la bisección de líneas, el paciente con negligencia izquierda desvía el centro hacia la izquierda.|F|Lo desvía hacia la derecha, el lado de la lesión, como si faltara la parte izquierda de la línea.",
      "La extinción suele persistir cuando la negligencia remite.|V",
      "La heminegligencia es igual de frecuente tras lesiones izquierdas que tras lesiones derechas.|F|Es más frecuente tras lesiones derechas: 38 % frente a 18 % (Esposito, Shekhtman y Chen, 2021).",
      "La negligencia puede darse con la vía visual intacta.|V"
    ],
    q: [
      "Tras un ictus parietal derecho, una paciente detecta un toque aislado en la mano izquierda, pero no cuando se le tocan ambas manos a la vez. ¿Qué presenta?|Extinción|Hemianopsia|Anosognosia|Detecta el estímulo contralesional aislado, pero no ante estimulación bilateral simultánea: es la extinción.",
      "Un paciente ha perdido el campo visual izquierdo, lo advierte y mueve los ojos para compensarlo. ¿Qué es lo más probable?|Hemianopsia|Heminegligencia|Extinción táctil|La hemianopsia es una pérdida sensorial que el paciente suele advertir y compensar; la negligencia es atencional.",
      "¿Qué propone la explicación de la asimetría hemisférica (Mesulam; Heilman)?|El derecho atiende a ambos lados|El izquierdo atiende a ambos lados|Cada hemisferio atiende a su lado|El izquierdo atiende sobre todo al lado derecho, así que solo la lesión izquierda queda compensada por el derecho.",
      "Al copiar un ramo, un paciente omite el lado izquierdo de cada flor, esté donde esté en la hoja. ¿Qué forma de negligencia es?|Alocéntrica|Egocéntrica|Representacional|En la alocéntrica se omite el lado izquierdo de cada objeto, con independencia de su posición respecto al cuerpo."
    ],
    inc: [
      "Sobre la evaluación de la heminegligencia|En la cancelación se omiten los estímulos de la derecha|La desviación en la bisección crece con la longitud de la línea|La BIT incluye una prueba de cancelación de estrellas|En la cancelación se omiten los estímulos de la izquierda, el lado contrario a la lesión."
    ],
    seq: [],
    cls: [
      "Formas de heminegligencia|Espacio afectado: personal; peripersonal; extrapersonal|Marco de referencia: egocéntrica; alocéntrica|Componente: perceptiva; motora o intencional"
    ] }
] }
);

SP.register(window.COURSE);
})({});
