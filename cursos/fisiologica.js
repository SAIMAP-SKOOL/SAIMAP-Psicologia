(function(window){
// SAIMAP Psicología · Psicología Fisiológica
// Contenido alineado con el temario SAIMAP «Psicología Fisiológica» (v1.0, noviembre de 2026).
window.COURSE = {
  id: "fisiologica",
  title: "Psicología Fisiológica",
  short: "Fisiológica",
  area: "Bases biológicas",
  rutas: { grado: { curso: 2 }, pir: { bloque: "Psicobiología" } },
  temario: "Psicologia-Fisiologica_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Seleccionar lo importante: redes atencionales y sus fallos", from: 1, to: 2 },
    { n: 2, t: "Dos hemisferios, un solo cerebro: lateralización y plasticidad", from: 3, to: 4 },
    { n: 3, t: "Hablar, comprender y planificar: lenguaje y corteza prefrontal", from: 5, to: 7 },
    { n: 4, t: "El cerebro emocional: teorías, circuitos y estrés", from: 8, to: 9 },
    { n: 5, t: "De la sinapsis al recuerdo: neurobiología del aprendizaje y la memoria", from: 10, to: 11 },
    { n: 6, t: "Relojes internos, sueño y diferenciación sexual", from: 12, to: 14 },
    { n: 7, t: "Beber, comer y desear: homeostasis y recompensa", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Fisiológica · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "La atención: qué es y cómo la estudia la neurociencia", cap: 1, pir: "alta", mods: [
  { t: "De William James a las redes neurales",
    tip: "La atención es el conjunto de procesos que seleccionan la información relevante, la mantienen y regulan los recursos de procesamiento. James (1890) distinguió la atención que arrastran los estímulos de la voluntaria. Moruzzi y Magoun (1949) mostraron que la formación reticular activa la corteza, y Posner y Petersen (1990) concibieron la atención como varias redes separables, no como una capacidad única.",
    v: [
      "Atención=Procesos que seleccionan lo relevante, lo mantienen y regulan los recursos de procesamiento",
      "William James (1890)=Describió la selección de un objeto entre varios y separó atención involuntaria y voluntaria",
      "Cherry (1953)=Del mensaje ignorado se captaban rasgos físicos, como el cambio de voz, pero apenas el contenido",
      "Filtro de Broadbent=Mecanismo que selecciona la información en fases tempranas del procesamiento",
      "Procesamiento automático=Rápido y sin esfuerzo, frente al controlado, lento, consciente y limitado",
      "Sistema atencional supervisor=Interviene cuando las rutinas automáticas no bastan (Norman y Shallice, 1986)",
      "Sistema activador reticular ascendente=Proyección del tronco que mantiene la corteza en condiciones de procesar",
      "Desincronización del EEG=Patrón de activación cortical propio de la vigilia"
    ],
    g: [
      "Moruzzi y Magoun comprobaron que estimular la formación reticular ___ el EEG.|desincronizaba|sincronizaba|enlentecía",
      "Shiffrin y Schneider describieron el procesamiento controlado como lento, consciente y ___ en capacidad.|limitado|ilimitado|flexible",
      "Broadbent (1958) situó la selección de la información en fases ___ del procesamiento.|tempranas|tardías|semánticas",
      "Posner y Petersen propusieron su modelo de tres redes atencionales en ___.|1990|2012|1986",
      "En los experimentos de Cherry, del mensaje ignorado se captaba sobre todo el cambio de ___.|voz|tema|idioma"
    ],
    tf: [
      "La atención es una función aislada que actúa solo sobre la percepción.|F|Es transversal: interviene en la percepción, la memoria, el control del movimiento y la toma de decisiones.",
      "Moruzzi y Magoun obtuvieron sus datos sobre la formación reticular en animales.|V",
      "Norman y Shallice propusieron el filtro temprano de la atención.|F|El filtro temprano es de Broadbent (1958). Norman y Shallice (1986) describieron el sistema atencional supervisor.",
      "La idea de que la atención no es unitaria cuenta hoy con amplio acuerdo.|V"
    ],
    q: [
      "Un viajero lee un correo en una estación ruidosa, ignora los avisos que no le afectan y levanta la vista al oír su andén. ¿Qué ilustra la escena?|Que la atención combina varios procesos|Que la atención depende de un filtro único|Que la atención es un proceso automático|Necesita a la vez estar despierto, orientarse, ignorar distractores y detectar lo relevante: la atención no es unitaria.",
      "¿Qué demostraron Moruzzi y Magoun (1949)?|Que la activación depende de un sistema neural|Que la selección ocurre en fases tempranas|Que existen tres redes atencionales separables|Fue la primera prueba de que el nivel de activación, base de toda atención, depende de un sistema neural identificable.",
      "¿Qué tipos de datos integraron Posner y Petersen (1990) en su modelo?|Lesiones, registros animales y neuroimagen|Introspección, diarios y escucha dicótica|Tiempos de reacción y cuestionarios clínicos|El cambio decisivo llegó al combinar estudios de lesión, registros en animales y neuroimagen.",
      "¿En qué etapa histórica se planteó la pregunta «qué mantiene activa la corteza»?|Neurofisiología|Psicología cognitiva|Introspección|Corresponde a la neurofisiología, con el sistema reticular activador de Moruzzi y Magoun (1949)."
    ],
    inc: [
      "Sobre la historia del estudio de la atención|Broadbent describió el sistema atencional supervisor|James distinguió atención involuntaria y voluntaria|Cherry presentó un mensaje distinto a cada oído|El sistema atencional supervisor es de Norman y Shallice (1986). Broadbent (1958) propuso un filtro temprano."
    ],
    seq: [
      "Hitos en el estudio de la atención|James (1890)>Moruzzi y Magoun (1949)>Cherry (1953)>Broadbent (1958)>Shiffrin y Schneider (1977)>Norman y Shallice (1986)>Posner y Petersen (1990)"
    ],
    cls: [] },
  { t: "Alerta, orientación y control ejecutivo según Posner y Petersen",
    tip: "Posner y Petersen (1990) distinguen tres redes: alerta (¿estoy preparado?), orientación (¿hacia dónde miro?) y control ejecutivo (¿qué hago con lo que encuentro?). La alerta depende del locus coeruleus y la noradrenalina, la orientación tiene como modulador la acetilcolina y el control ejecutivo se apoya en el cingulado anterior, la prefrontal lateral y la dopamina. En 2012 dividieron el control ejecutivo en un sistema frontoparietal y otro cíngulo-opercular.",
    v: [
      "Red de alerta=Consigue y mantiene un estado de preparación para responder",
      "Alerta tónica=Activación de fondo que oscila despacio a lo largo de horas",
      "Alerta fásica=Aumento breve de la preparación tras una señal de aviso",
      "Red de orientación=Selecciona una posición del espacio y dirige hacia ella los recursos",
      "Control ejecutivo=Red que resuelve conflictos entre respuestas, detecta errores y mantiene la meta",
      "Locus coeruleus=Núcleo de origen de la proyección noradrenérgica de la red de alerta",
      "Sistema frontoparietal=Ajuste rápido del control de un ensayo a otro, como tras un error",
      "Sistema cíngulo-opercular=Mantenimiento estable de la tarea durante toda la sesión"
    ],
    g: [
      "El modulador principal de la red de orientación es la ___.|acetilcolina|noradrenalina|dopamina",
      "La red de alerta incluye regiones frontales y parietales sobre todo ___.|derechas|izquierdas|bilaterales",
      "El semáforo en ámbar, que acorta el tiempo de reacción para frenar, ilustra la alerta ___.|fásica|tónica|sostenida",
      "La revisión de las tres redes la publicaron Petersen y Posner en ___.|2012|1990|2002",
      "La atención sostenida o vigilancia se apoya sobre todo en la alerta ___.|tónica|fásica|espacial"
    ],
    tf: [
      "En el modelo de Posner y Petersen, la red de alerta se asocia a la acetilcolina.|F|La alerta se asocia a la noradrenalina del locus coeruleus. La acetilcolina corresponde a la orientación.",
      "La red de orientación puede dirigir la atención sin mover los ojos.|V",
      "En 2012, Petersen y Posner sustituyeron las tres redes por dos sistemas ejecutivos.|F|Mantuvieron las tres redes y solo dividieron el control ejecutivo en un sistema frontoparietal y otro cíngulo-opercular.",
      "El control ejecutivo puede frenar una orientación automática hacia un distractor.|V"
    ],
    q: [
      "El navegador indica girar a la izquierda, pero la costumbre empuja a la conductora hacia la derecha. ¿Qué red le ayuda a imponer la respuesta menos habitual?|La de control ejecutivo|La de orientación espacial|La de alerta fásica|La red ejecutiva resuelve el conflicto entre respuestas posibles y mantiene la conducta orientada a la meta.",
      "¿Qué estructuras forman la red de control ejecutivo?|Cingulado anterior y prefrontal lateral|Locus coeruleus y parietal derecho|Colículo superior y campos oculares frontales|El locus coeruleus pertenece a la alerta, y el colículo y los campos oculares frontales, a la orientación.",
      "¿Qué función tiene el sistema cíngulo-opercular en la revisión de 2012?|Mantener la tarea durante la sesión|Ajustar el control tras cada error|Mantener la alerta tónica de fondo|Mantiene la tarea de forma estable. El ajuste rápido de un ensayo a otro corresponde al sistema frontoparietal.",
      "¿A qué pregunta responde la red de orientación?|¿Hacia dónde miro?|¿Estoy preparado?|¿Qué hago con lo que encuentro?|La alerta responde a si estoy preparado, y el control ejecutivo, a qué hago con lo que encuentro."
    ],
    inc: [
      "Sobre las redes de Posner y Petersen|La dopamina se asocia a la red de orientación|La noradrenalina se asocia a la red de alerta|El cingulado anterior forma parte de la red ejecutiva|La dopamina se asocia al control ejecutivo. El modulador principal de la orientación es la acetilcolina."
    ],
    seq: [],
    cls: [
      "Red atencional|Alerta: noradrenalina; locus coeruleus; semáforo en ámbar|Orientación: acetilcolina; pulvinar; colículo superior|Control ejecutivo: dopamina; cingulado anterior; prefrontal lateral"
    ] },
  { t: "Atención involuntaria y voluntaria: captura y control",
    tip: "La distinción de James sigue vigente. La atención involuntaria (pasiva, exógena, de abajo arriba) la dirigen los rasgos salientes del estímulo, es rápida y transitoria y depende del colículo superior, el pulvinar y la red ventral. La voluntaria (activa, endógena, de arriba abajo) se guía por metas y depende de la red dorsal y la prefrontal. Según la exigencia de la tarea, la atención es focalizada, sostenida, alternante o dividida, y cada modalidad combina las tres redes.",
    v: [
      "Atención exógena=Atención dirigida por los rasgos salientes del estímulo, sin intención",
      "Atención endógena=Atención guiada por metas, expectativas e instrucciones",
      "Respuesta de orientación=Giro de cabeza y ojos hacia algo nuevo, con cambios cardiacos y de la piel",
      "Captura atencional=Un estímulo saliente atrae la atención aunque no se busque",
      "Atención focalizada=Atender a una fuente descartando los distractores",
      "Atención sostenida=Mantener el rendimiento durante un periodo largo",
      "Atención alternante=Cambiar el foco de una tarea a otra de forma intercalada",
      "Atención dividida=Repartir los recursos entre varias tareas simultáneas"
    ],
    g: [
      "La atención voluntaria también se denomina activa, endógena o ___.|de arriba abajo|de abajo arriba|exógena",
      "La atención involuntaria es rápida y ___.|transitoria|sostenida|deliberada",
      "Cocinar dos platos a la vez exige atención ___, que requiere flexibilidad.|alternante|sostenida|focalizada",
      "Un controlador que vigila una pantalla en la que casi nunca ocurre nada necesita atención ___.|sostenida|alternante|dividida",
      "La atención alternante y la dividida descansan en el control ejecutivo y en la memoria de ___.|trabajo|largo plazo|reconocimiento"
    ],
    tf: [
      "Las modalidades de atención son sistemas independientes, cada uno con su propio sustrato.|F|Son combinaciones de las tres redes. Por eso una misma lesión puede alterar varias modalidades a la vez.",
      "Las metas pueden modular qué estímulos capturan la atención.|V",
      "La captura atencional depende sobre todo de la red dorsal y de la corteza prefrontal.|F|Depende del colículo superior, el pulvinar y la red ventral derecha. La red dorsal sostiene la atención voluntaria.",
      "Cuando dos tareas simultáneas exigen recursos parecidos, el rendimiento empeora en al menos una de ellas.|V"
    ],
    q: [
      "Una mujer lee en una terraza y levanta la vista al oír un vaso que se rompe. ¿Qué fenómeno muestra?|Captura atencional|Atención alternante|Alerta tónica|Un estímulo saliente e inesperado atrae la atención sin intención previa: es atención involuntaria.",
      "Buscar la cara de una amiga entre la gente que sale de un concierto depende sobre todo de…|la red dorsal y la prefrontal|el colículo y el pulvinar|la red ventral y el colículo superior|Es atención voluntaria: exige mantener sus rasgos en mente y explorar de forma ordenada.",
      "La atención sostenida descansa sobre todo en…|la alerta tónica|la orientación espacial|el control ejecutivo|La selectiva se apoya en la orientación y el control, y la alternante y la dividida, en el control y la memoria de trabajo.",
      "Quien espera un mensaje importante reacciona antes a la vibración del móvil. ¿Qué ilustra?|Las metas modulan la captura|La captura es siempre voluntaria|La vigilancia cae con el tiempo|Las dos formas de atención interactúan: las expectativas modulan qué estímulos capturan la atención."
    ],
    inc: [
      "Sobre la atención involuntaria y voluntaria|La voluntaria es rápida y transitoria|La involuntaria requiere un esfuerzo mínimo|La voluntaria se guía por metas y expectativas|La voluntaria es más lenta en instaurarse y puede sostenerse. La rápida y transitoria es la involuntaria."
    ],
    seq: [],
    cls: [
      "Tipo de atención|Involuntaria: exógena; de abajo arriba; colículo superior; red ventral|Voluntaria: endógena; de arriba abajo; red dorsal; corteza prefrontal"
    ] },
  { t: "Cómo se miden las redes: señalización espacial, flancos y la ANT",
    tip: "Para estudiar una red hace falta una tarea que la aísle, y se comparan tiempos de reacción. En la tarea de señalización de Posner (1980), la señal válida produce un beneficio y la inválida un coste, porque hay que desenganchar y reorientar la atención. Los flancos (Eriksen y Eriksen, 1974) y el Stroop miden el conflicto. La ANT (Fan et al., 2002) combina señalización y flancos, pero la fiabilidad de cada puntuación es modesta.",
    v: [
      "Señal válida=Indica el lado en que aparecerá el objetivo y acelera la respuesta",
      "Señal inválida=Indica el lado contrario y produce un coste de reorientación",
      "Señal central=Flecha que hay que interpretar y que mide la orientación voluntaria",
      "Señal periférica=Destello en la posición que mide la captura involuntaria",
      "Tarea de flancos=Responder a una flecha central rodeada de otras congruentes o incongruentes",
      "Tarea de Stroop=Nombrar el color de la tinta de una palabra que designa otro color",
      "Paradigma oddball=Detectar un estímulo distinto e infrecuente en una serie repetida",
      "Escala de coma de Glasgow=Valora el nivel de conciencia por apertura ocular y respuestas verbales y motoras"
    ],
    g: [
      "En la ANT, la puntuación de alerta se obtiene restando a los ensayos sin señal los de señal ___.|doble|central|espacial",
      "En la ANT, la puntuación de orientación es la diferencia entre señal central y señal ___.|espacial|doble|neutra",
      "Tras una señal neutra, el tiempo de reacción es ___.|intermedio|el más rápido|el más lento",
      "Las correlaciones entre las tres puntuaciones de la ANT son ___.|bajas|altas|negativas",
      "La tarea de flancos la diseñaron Eriksen y Eriksen en ___.|1974|1980|2002"
    ],
    tf: [
      "En la tarea de Posner, una señal inválida acorta el tiempo de reacción respecto a una neutra.|F|Lo alarga: la atención ya estaba en el lado equivocado y hay que desengancharla y reorientarla.",
      "Con señales periféricas, la tarea de señalización mide sobre todo la captura involuntaria.|V",
      "La ANT permite interpretar con seguridad la puntuación de red de una sola persona.|F|La fiabilidad de cada puntuación es modesta: sirve para comparar grupos, no para interpretar un caso individual.",
      "El paradigma oddball se combina a menudo con potenciales evocados.|V"
    ],
    q: [
      "En un experimento, una flecha central señala la izquierda y el objetivo aparece a la derecha. ¿Qué se espera?|Un coste por tener que reorientar|Un beneficio por la señal previa|Un tiempo igual al de la señal neutra|Es una señal inválida: la atención ya se había desplazado y hay que desengancharla, lo que alarga la respuesta.",
      "¿Qué resta da la puntuación de conflicto en la ANT?|Incongruente menos congruente|Sin señal menos señal doble|Señal central menos espacial|Mide el coste de resolver la interferencia de los flancos. Las otras restas dan la alerta y la orientación.",
      "¿Por qué las correlaciones bajas de la ANT no bastan para probar que las redes son independientes?|Porque las puntuaciones son poco fiables|Porque la ANT no mide la alerta fásica|Porque las tres redes usan dopamina|Una correlación baja puede deberse en parte a que las medidas son ruidosas.",
      "¿Qué tarea mide el mismo tipo de proceso que la de flancos?|La de Stroop|La de Posner|El oddball|Ambas son tareas de conflicto que miden el control ejecutivo. La de Posner mide la orientación."
    ],
    inc: [
      "Sobre la medida de las redes|La señal central mide la captura involuntaria|La señal válida produce un beneficio en el tiempo|La tarea de flancos mide el coste del conflicto|La señal central, una flecha que hay que interpretar, mide la orientación voluntaria. La periférica mide la captura."
    ],
    seq: [
      "Ensayo de la tarea de señalización de Posner|Mirar el punto de fijación>Aparece la señal>Aparece el objetivo>Respuesta y tiempo de reacción"
    ],
    cls: [
      "Red que mide la tarea|Alerta: señal de aviso; tareas largas de vigilancia; EEG|Orientación: señalización de Posner; señal válida o inválida|Control ejecutivo: flancos; Stroop"
    ] }
] },
{ n: 2, t: "El sustrato neural de la atención y sus trastornos", cap: 1, pir: "alta", mods: [
  { t: "Del tronco al tálamo: formación reticular, pulvinar y colículos",
    tip: "Las estructuras extracorticales aportan activación, filtran la información y orientan con rapidez. La formación reticular regula el arousal, y su lesión extensa puede causar coma. El núcleo reticular del tálamo actúa como compuerta, y el pulvinar selecciona la información visual y suprime distractores. El colículo superior controla los sacádicos, los ganglios basales seleccionan la acción y la amígdala prioriza lo emocional, sin ser un «centro del miedo».",
    v: [
      "Formación reticular=Red de núcleos del tronco que regula la activación cortical y la vigilia",
      "Núcleo reticular del tálamo=Lámina inhibidora que actúa como compuerta de la información hacia la corteza",
      "Pulvinar=Núcleo talámico posterior que selecciona la información visual y suprime distractores",
      "Colículo superior=Estructura del techo del mesencéfalo que controla la orientación rápida de la mirada",
      "Movimientos sacádicos=Saltos rápidos de la mirada",
      "Ganglios basales=Favorecen la respuesta adecuada e inhiben las que compiten con ella",
      "Amígdala=Da prioridad a los estímulos con valor emocional y modula otras redes",
      "Arousal=Nivel de activación general que hace posible atender"
    ],
    g: [
      "Una lesión extensa de la formación reticular puede causar ___.|coma|negligencia|afasia",
      "Casi toda la información sensorial que llega a la corteza pasa antes por el ___.|tálamo|colículo|cerebelo",
      "El colículo superior interviene sobre todo en la orientación ___.|involuntaria|voluntaria|ejecutiva",
      "Las alteraciones de los circuitos frontoestriatales ___ se han relacionado con el trastorno por déficit de atención e hiperactividad.|dopaminérgicos|colinérgicos|noradrenérgicos",
      "Los colículos superiores se sitúan en el techo del ___.|mesencéfalo|bulbo raquídeo|diencéfalo"
    ],
    tf: [
      "El núcleo reticular del tálamo es una lámina de neuronas que rodea los demás núcleos talámicos y puede inhibirlos.|V",
      "La amígdala es el centro del miedo y por eso prioriza las caras amenazantes.|F|No es un «centro del miedo»: su papel es detectar relevancia emocional y modular otras redes, entre ellas las atencionales.",
      "El sistema activador reticular ascendente llega a la corteza solo a través del tálamo.|F|Llega a la corteza directamente y también a través del tálamo.",
      "El colículo prepara el giro de la mirada antes de que haya una decisión consciente de mirar.|V"
    ],
    q: [
      "Un ciclista circula de madrugada por una carretera vacía y unas luces aparecen a un lado. ¿Qué estructuras orientan su mirada hacia ellas?|Colículo superior y pulvinar|Ganglios basales y frontal|Formación reticular y amígdala|La formación reticular mantiene la activación, la amígdala marca el peligro y los ganglios basales seleccionan la respuesta.",
      "¿Qué estructura actúa como compuerta que deja pasar o atenúa la información hacia la corteza?|El núcleo reticular del tálamo|El núcleo pulvinar del tálamo|La formación reticular del tronco|Es una lámina inhibidora que rodea el tálamo. El pulvinar selecciona la información visual y suprime distractores.",
      "¿Cuál es la función principal de los ganglios basales en la atención?|Seleccionar la acción adecuada|Controlar los movimientos sacádicos|Mantener la activación de la corteza|Favorecen la respuesta adecuada e inhiben las que compiten con ella, en circuitos con la corteza frontal.",
      "¿Qué estructura participa en la transición entre el sueño y la vigilia?|La formación reticular|El núcleo pulvinar|El colículo superior|Regula el nivel de activación o arousal, por lo que interviene en el paso del sueño a la vigilia."
    ],
    inc: [
      "Sobre las estructuras extracorticales|El pulvinar está en el techo del mesencéfalo|La formación reticular está en el tronco|Los ganglios basales están en la base del telencéfalo|El pulvinar está en el tálamo posterior. En el techo del mesencéfalo se sitúa el colículo superior."
    ],
    seq: [],
    cls: [] },
  { t: "Parietal, frontal y cingulado: las redes dorsal y ventral",
    tip: "La corteza parietal posterior elabora mapas de prioridad del espacio. Los campos oculares frontales controlan la mirada voluntaria y los desplazamientos de la atención sin mover los ojos, y la prefrontal dorsolateral mantiene las metas. El cingulado anterior monitoriza el conflicto. Corbetta y Shulman (2002) separan una red dorsal bilateral, de arriba abajo, y una red ventral derecha que detecta lo relevante e inesperado y actúa como interruptor.",
    v: [
      "Mapa de prioridad=Representación del espacio en que cada posición pesa según su saliencia y relevancia",
      "Campos oculares frontales=Controlan la mirada voluntaria y los desplazamientos atencionales sin mover los ojos",
      "Prefrontal dorsolateral=Mantiene las metas y las reglas de la tarea frente a la distracción",
      "Cingulado anterior=Monitoriza el conflicto, detecta errores y señala que hace falta más control",
      "Red dorsal=Surco intraparietal y campos oculares frontales de ambos hemisferios",
      "Red ventral=Unión temporoparietal y frontal inferior del hemisferio derecho",
      "Surco intraparietal=Nodo parietal de la red bilateral que dirige la atención según metas",
      "Interruptor=Función ventral que corta la actividad dorsal y obliga a reorientarse"
    ],
    g: [
      "La red dorsal de Corbetta y Shulman es ___.|bilateral|derecha|izquierda",
      "La red ventral está formada por la unión temporoparietal y la corteza frontal ___.|inferior|superior|medial",
      "El cingulado anterior se activa cuando hay respuestas que compiten, como en la tarea de ___.|Stroop|Posner|oddball",
      "La lesión de la corteza parietal posterior puede producir ___.|heminegligencia|hemianopsia|aprosodia",
      "La red dorsal controla la atención de ___, según las metas y las expectativas.|arriba abajo|abajo arriba|forma refleja"
    ],
    tf: [
      "La red ventral es bilateral y selecciona estímulos según las metas.|F|Esa es la dorsal. La ventral está lateralizada a la derecha y detecta lo relevante e inesperado.",
      "La red dorsal y la ventral forman parte de la red de orientación de Posner y Petersen.|V",
      "El ruido de alguien que pasa una página activa la red ventral porque es inesperado.|F|La red ventral responde a lo inesperado y relevante. Un ruido irrelevante no activa el interruptor.",
      "La corteza parietal posterior integra información visual, auditiva y somatosensorial en coordenadas espaciales.|V"
    ],
    q: [
      "Una estudiante repasa en la biblioteca y suena la alarma de incendios. ¿Qué red detecta el estímulo y obliga a reorientar la atención?|La red ventral derecha|La red dorsal bilateral|La red de alerta tónica|La red ventral actúa como interruptor ante lo inesperado y relevante, y la dorsal desplaza el foco hacia la salida.",
      "¿Qué nodos forman la red dorsal?|Intraparietal y campos oculares frontales|Unión temporoparietal y frontal inferior|Cingulado anterior y prefrontal lateral|La unión temporoparietal y la frontal inferior forman la red ventral derecha.",
      "¿Hacia dónde se dirige la atención según el mapa de prioridad parietal?|Hacia los picos del mapa|Hacia el centro del campo|Hacia el lado contralateral|Cada posición pesa según su saliencia y su relevancia para la meta, y la atención va hacia las de más peso.",
      "¿Qué región mantiene las metas y las reglas de la tarea para sostener la atención voluntaria?|La prefrontal dorsolateral|El cingulado anterior|La unión temporoparietal|El cingulado monitoriza el conflicto, y la unión temporoparietal forma parte de la red ventral."
    ],
    inc: [
      "Sobre las redes de Corbetta y Shulman|La red ventral está lateralizada a la izquierda|La red dorsal dirige la atención según metas|La red ventral detecta lo relevante e inesperado|La red ventral está lateralizada a la derecha. Confundir la dorsal bilateral con la ventral derecha es una trampa típica."
    ],
    seq: [],
    cls: [
      "Red de orientación|Dorsal: surco intraparietal; campos oculares frontales; bilateral; según metas|Ventral: unión temporoparietal; frontal inferior; hemisferio derecho; lo inesperado"
    ] },
  { t: "Delírium: un fallo agudo de la atención",
    tip: "El delírium o síndrome confusional agudo es un trastorno de inicio agudo y curso fluctuante de la atención y el nivel de conciencia, que suele empeorar al final del día. Es la manifestación cerebral de una enfermedad médica, un fármaco o una abstinencia, y por eso es una urgencia. Tiene subtipos hiperactivo, hipoactivo (el que más pasa desapercibido) y mixto. Se distingue de la demencia por su patrón temporal.",
    v: [
      "Delírium=Trastorno agudo y fluctuante de la atención y la conciencia por una causa médica",
      "Delírium hiperactivo=Agitación, inquietud e intentos de quitarse las vías o levantarse",
      "Delírium hipoactivo=Somnolencia, lentitud y apatía, el subtipo que más pasa desapercibido",
      "Delírium mixto=Alterna rasgos de agitación y de somnolencia",
      "Factor predisponente=Vulnerabilidad de base, como la edad avanzada o la demencia previa",
      "Factor precipitante=Desencadenante, como una infección, una cirugía o los anticolinérgicos",
      "CAM=Instrumento de detección de Inouye et al. (1990) basado en inicio agudo e inatención",
      "Déficit colinérgico=Hipótesis coherente con que los anticolinérgicos precipiten el cuadro"
    ],
    g: [
      "Los síntomas del delírium suelen empeorar al ___ del día.|final|comienzo|centro",
      "El delírium afecta a alrededor del ___ de los pacientes médicos hospitalizados.|23 %|2 %|50 %",
      "En el delírium son frecuentes las alucinaciones, sobre todo ___.|visuales|auditivas|táctiles",
      "Según una hipótesis, la inflamación sistémica activaría la ___ y alteraría el funcionamiento neuronal.|microglía|astroglía|mielina",
      "En una persona muy vulnerable basta un precipitante ___, como una infección urinaria.|leve|grave|crónico"
    ],
    tf: [
      "El delírium hiperactivo es el subtipo que más pasa desapercibido.|F|Es el hipoactivo: el paciente está somnoliento y lento, «no da guerra», y se confunde con cansancio o tristeza.",
      "El CAM exige inicio agudo y curso fluctuante, inatención y, además, pensamiento desorganizado o alteración del nivel de conciencia.|V",
      "La fisiopatología del delírium está establecida: se debe a un exceso dopaminérgico.|F|Sigue en hipótesis compatibles (inflamación, déficit colinérgico y exceso dopaminérgico) sin saber cuánto pesa cada una.",
      "La demencia es uno de los principales factores de riesgo de delírium.|V"
    ],
    q: [
      "Un hombre de 84 años, independiente, ingresa por neumonía. La segunda noche no sabe dónde está y por la mañana está somnoliento. Su hija dice que nunca había estado así. ¿Qué sugiere el cuadro?|Un delírium|Una demencia|Una heminegligencia|El cambio brusco y fluctuante en una persona antes independiente orienta a un delírium, que obliga a buscar la causa.",
      "¿Qué rasgo distingue mejor el delírium de la demencia?|El inicio brusco con curso fluctuante|La afectación de la memoria reciente|La mayor frecuencia en personas mayores|La memoria se altera en ambas y ambas son más frecuentes en mayores. Lo distintivo es el inicio y el curso.",
      "¿Qué medida forma parte de la prevención no farmacológica del delírium?|Asegurar que use gafas y audífonos|Mantenerlo en cama hasta el alta|Evitar las visitas de familiares|Se favorece la orientación con visitas, se protege el sueño, se moviliza pronto y se asegura la hidratación y el uso de gafas y audífonos.",
      "¿Por qué el delírium es una urgencia médica?|Porque obliga a buscar la causa médica|Porque evoluciona siempre hacia demencia|Porque solo responde a fármacos|Es la manifestación cerebral de una enfermedad, un fármaco o una abstinencia, que hay que identificar."
    ],
    inc: [
      "Sobre el delírium|Empieza de forma insidiosa y progresa lentamente|Altera sobre todo la atención y el nivel de conciencia|Su curso fluctúa y suele empeorar al final del día|El inicio insidioso y la progresión lenta son propios de la demencia. El delírium empieza en horas o días."
    ],
    seq: [],
    cls: [
      "Cuadro|Delírium: inicio en horas o días; curso fluctuante; atención alterada primero|Demencia: inicio insidioso; progresión lenta; memoria afectada primero"
    ] },
  { t: "Heminegligencia: cuando desaparece la mitad del mundo",
    tip: "La heminegligencia es un fallo para atender o responder al lado contralesional que no se explica por un déficit sensorial o motor. Suele afectar al espacio izquierdo tras lesiones de la parietal inferior y la unión temporoparietal derechas, aunque también aparece tras lesiones frontales, subcorticales y del fascículo longitudinal superior. Tiene variantes, se acompaña de extinción y anosognosia y se distingue de la hemianopsia porque el paciente no compensa.",
    v: [
      "Heminegligencia=Fallo para atender al lado contralesional sin déficit sensorial o motor que lo explique",
      "Extinción=Se pierde el estímulo contralesional solo si compite con otro ipsilesional",
      "Negligencia extrapersonal=Se descuida el espacio lejano, fuera del alcance de la mano",
      "Hemianopsia=Pérdida de medio campo visual por lesión de la vía visual",
      "Negligencia representacional=Omisión de la mitad izquierda de las imágenes mentales",
      "Negligencia peripersonal=Se descuida el espacio al alcance de la mano",
      "Negligencia personal=Se descuida la mitad izquierda del propio cuerpo",
      "Fascículo longitudinal superior=Haz de sustancia blanca que une regiones parietales y frontales"
    ],
    g: [
      "Tras un ictus, la prevalencia de negligencia tras lesión derecha es de alrededor del ___.|38 %|18 %|29 %",
      "En la prueba de bisección, el paciente sitúa el centro de la línea desplazado a la ___.|derecha|izquierda|parte superior",
      "Bisiach y Luzzatti pidieron describir de memoria la plaza de la Catedral de ___.|Milán|Roma|Turín",
      "Un paciente que apenas mueve el brazo izquierdo sin estar paralizado presenta negligencia ___.|motora|perceptiva|personal",
      "La adaptación ___, con gafas que desvían la visión, tiene una evidencia mixta.|prismática|perceptiva|exploratoria"
    ],
    tf: [
      "La heminegligencia se produce sobre todo tras lesiones del hemisferio izquierdo.|F|Se produce sobre todo tras lesiones derechas y afecta al lado izquierdo. Situarla a la izquierda es una trampa típica.",
      "El paciente con hemianopsia sin negligencia sabe que no ve un lado y compensa moviendo la mirada.|V",
      "En el estudio de Bisiach y Luzzatti, los pacientes omitían los mismos edificios fuera cual fuera la perspectiva.|F|Omitían los que quedaban a su izquierda en cada perspectiva, aunque los hubieran nombrado desde la otra.",
      "La heminegligencia también puede aparecer tras lesiones subcorticales, como del tálamo o los ganglios basales.|V"
    ],
    q: [
      "Un paciente detecta un toque en la mano izquierda cuando se aplica solo, pero no cuando se tocan las dos manos a la vez. ¿Qué presenta?|Extinción|Anosognosia|Hemianopsia|El estímulo izquierdo solo se pierde cuando compite con otro en el lado derecho.",
      "Una paciente con lesión derecha deja sin tocar la comida de la mitad izquierda del plato. ¿Qué variante muestra?|Peripersonal|Extrapersonal|Representacional|Afecta al espacio al alcance de la mano. La extrapersonal afecta al espacio lejano.",
      "¿Cómo explica el modelo de Corbetta y Shulman la negligencia?|Por un desequilibrio entre redes dorsales|Por la pérdida de la vía visual izquierda|Por un daño exclusivo del colículo superior|La lesión de la red ventral derecha desequilibra las redes dorsales de ambos hemisferios y sesga la atención a la derecha.",
      "¿Qué dato muestra que la negligencia no es un problema de vista?|Afecta también al espacio imaginado|Se acompaña de pérdida del campo visual|Mejora al cerrar el ojo izquierdo|Los pacientes de Bisiach y Luzzatti omitían el lado izquierdo de una plaza que solo imaginaban."
    ],
    inc: [
      "Sobre la heminegligencia|Se debe a una lesión de la vía visual|Con anosognosia, la rehabilitación es más difícil|Puede afectar a la lectura de cada línea|La pérdida por lesión de la vía visual es la hemianopsia. La negligencia aparece con la vía visual intacta."
    ],
    seq: [],
    cls: [
      "Trastorno|Heminegligencia: vía visual intacta; no explora el lado izquierdo; espacio imaginado|Hemianopsia: lesión de la vía visual; sabe que no ve; compensa con la mirada"
    ] }
] },
{ n: 3, t: "Especialización hemisférica: anatomía y métodos", cap: 2, pir: "alta", mods: [
  { t: "Qué hace cada hemisferio: una especialización relativa",
    tip: "La lateralización es la especialización funcional relativa de cada hemisferio: casi todas las tareas activan ambos, y lo que cambia es cuál contribuye más. Un hemisferio es dominante para una función si su lesión la altera mucho más que la del contrario. El izquierdo predomina en producción, sintaxis y fonología, y el derecho en prosodia, ironía, caras y atención espacial. En la emoción compiten la hipótesis del hemisferio derecho y la de la valencia.",
    v: [
      "Comisuras=Haces de fibras que cruzan de un hemisferio a otro",
      "Cuerpo calloso=La mayor de las comisuras interhemisféricas",
      "Lateralización=Especialización funcional relativa de un hemisferio para una función",
      "Dominancia=Una lesión en ese hemisferio altera la función mucho más que una en el contrario",
      "Control contralateral=Cada hemisferio recibe y controla la mitad opuesta del cuerpo",
      "Hipótesis de la valencia=Derecho para emociones negativas o de retirada, izquierdo para las positivas",
      "Hipótesis del hemisferio derecho=Propone que este domina el procesamiento emocional en general",
      "Lenguaje figurado=Sentido no literal del discurso, con fuerte participación del hemisferio derecho"
    ],
    g: [
      "Además del cuerpo calloso, hay comisuras más pequeñas, como la anterior y la ___.|hipocampal|calcarina|cingulada",
      "El hemisferio derecho muestra ventaja para ___, la rotación mental y las melodías.|las caras|la sintaxis|la fonología",
      "Con mucha formación musical, la melodía tiende a analizarse de forma más ___.|secuencial|global|espacial",
      "El control contralateral no es una especialización, sino una propiedad de las ___.|vías|redes|comisuras",
      "El hemisferio izquierdo tiene un procesamiento secuencial, analítico y centrado en ___.|detalles|conjuntos|relaciones"
    ],
    tf: [
      "El hemisferio derecho no entiende ninguna palabra.|F|Entiende palabras sencillas. La especialización es de grado, no exclusiva.",
      "Una persona con lesión derecha puede entender el sentido literal de un mensaje y no captar la broma.|V",
      "La hipótesis de la valencia se ha impuesto a la del hemisferio derecho.|F|Ninguna se ha impuesto, y quizá describan aspectos distintos: percibir la emoción y experimentarla.",
      "Las diferencias hemisféricas son promedios estadísticos, y una parte de la población tiene patrones distintos.|V"
    ],
    q: [
      "Tras un ictus, un paciente entiende el sentido literal de «genial, otra vez lunes», pero no capta la ironía. ¿Qué lesión es más probable?|Derecha|Izquierda|Bilateral occipital|El izquierdo descifra palabras y gramática. El lenguaje figurado y la ironía dependen con fuerza del derecho.",
      "¿Qué significa que un hemisferio sea dominante para una función?|Que su lesión la altera mucho más|Que solo él la realiza|Que está unido por el cuerpo calloso|La especialización es relativa: casi todas las tareas activan ambos hemisferios y lo que cambia es cuál contribuye más.",
      "Según la hipótesis de la valencia, el hemisferio izquierdo se ocupa sobre todo de las emociones…|positivas o de aproximación|negativas o de retirada|básicas, como el miedo y la ira|El derecho se ocuparía de las negativas o de retirada. La hipótesis del hemisferio derecho le atribuye toda la emoción.",
      "¿Cómo se resume mejor la diferencia entre hemisferios?|Cada uno tiene un estilo de procesamiento|Cada uno tiene un catálogo cerrado de funciones|Cada uno se asocia a un tipo de personalidad|Son diferencias de grado en el estilo de procesamiento, no un reparto cerrado de funciones."
    ],
    inc: [
      "Sobre la especialización hemisférica|El izquierdo no procesa relaciones espaciales|El derecho entiende palabras sencillas|Casi todas las tareas activan ambos hemisferios|El izquierdo procesa relaciones espaciales, aunque peor que el derecho. Las diferencias son de grado."
    ],
    seq: [],
    cls: [
      "Predominio hemisférico|Izquierdo: sintaxis; fonología; praxis; rasgos locales|Derecho: prosodia; ironía; caras; rotación mental; atención espacial"
    ] },
  { t: "Asimetrías visibles: planum temporale, cisura de Silvio y petalias",
    tip: "Geschwind y Levitsky (1968) midieron el planum temporale en 100 cerebros: era mayor a la izquierda en el 65 %, a la derecha en el 11 % y simétrico en el 24 %. La cisura de Silvio izquierda suele ser más larga y horizontal, y las petalias típicas son frontal derecha y occipital izquierda. La anatomía no basta para situar el lenguaje: la asimetría existe antes del lenguaje, aparece en babuinos y no siempre coincide con la función.",
    v: [
      "Planum temporale=Región temporal superior situada detrás de la corteza auditiva primaria",
      "Geschwind y Levitsky=Midieron en 1968 la asimetría del planum en 100 cerebros post mortem",
      "Cisura de Silvio=Más larga y horizontal a la izquierda en la mayoría de las personas",
      "Petalia=Zona en la que un hemisferio sobresale respecto al otro",
      "Petalia frontal derecha=El polo frontal derecho es más prominente",
      "Petalia occipital izquierda=El polo occipital izquierdo se extiende más hacia atrás",
      "Witelson y Pallie (1973)=Describieron la asimetría del planum antes del nacimiento",
      "Marie et al. (2018)=Hallaron sesgo izquierdo del planum en el 62,5 % de los babuinos"
    ],
    g: [
      "En el estudio de Geschwind y Levitsky, el planum era simétrico en el ___ de los cerebros.|24 %|11 %|65 %",
      "Visto desde arriba, por las petalias, el cerebro parece ligeramente ___.|torcido|alargado|aplanado",
      "La cisura de Silvio derecha se curva hacia ___ antes que la izquierda.|arriba|abajo|delante",
      "Como grupo, las personas zurdas presentan ___ asimetría anatómica que las diestras.|menos|más|igual",
      "La asimetría del planum pudo surgir para procesar ___ complejos y ser aprovechada después por el lenguaje.|sonidos|movimientos|rostros"
    ],
    tf: [
      "En el estudio de Geschwind y Levitsky, el planum mayor a la derecha fue el segundo patrón más frecuente.|F|Fue el menos frecuente (11 %). El segundo fue el simétrico (24 %), tras el mayor a la izquierda (65 %).",
      "El planum temporale ocupa parte del suelo de la cisura de Silvio.|V",
      "Que el planum sea mayor a la izquierda garantiza que el lenguaje esté en ese lado.|F|Un tercio de los cerebros no muestra la asimetría típica, muchos más que las personas con lenguaje a la derecha.",
      "La asimetría del planum se ha observado en fetos y recién nacidos.|V"
    ],
    q: [
      "¿Qué dato de otras especies cuestiona que la asimetría del planum sea lingüística?|Un sesgo izquierdo en babuinos|Un planum mayor a la derecha en babuinos|Un planum ausente en primates no humanos|El 62,5 % de los babuinos estudiados tenía sesgo izquierdo, una proporción parecida a la humana en animales que no hablan.",
      "Una RM muestra en un paciente un planum temporale mayor a la izquierda. Antes de una cirugía, ¿qué conviene concluir?|Que hay que medir la función|Que el lenguaje está a la izquierda|Que es zurdo con lenguaje bilateral|Las asimetrías anatómicas son reales, pero no bastan para saber qué hace cada hemisferio de una persona.",
      "¿Qué patrón de petalias es el típico?|Frontal derecha y occipital izquierda|Frontal izquierda y occipital derecha|Frontal y occipital derechas|El polo frontal derecho es más prominente y el occipital izquierdo se extiende más hacia atrás.",
      "¿Por qué la asimetría en fetos no prueba que su función sea lingüística?|Se programa antes de que exista lenguaje|Desaparece al empezar a adquirir el lenguaje|Solo aparece en fetos de babuino|Se programa en el desarrollo, pero eso no prueba que su función sea lingüística desde el principio."
    ],
    inc: [
      "Sobre las asimetrías anatómicas|La cisura de Silvio izquierda es más corta|El planum suele ser mayor a la izquierda|Los zurdos muestran menos asimetría como grupo|En la mayoría de las personas, la cisura de Silvio izquierda es más larga y más horizontal."
    ],
    seq: [
      "Estudios sobre la asimetría del planum|Geschwind y Levitsky (1968)>Witelson y Pallie (1973)>Wada et al. (1975)>Marie et al. (2018)"
    ],
    cls: [] },
  { t: "Lecciones de la lesión y del cerebro dividido",
    tip: "El método lesional infiere la lateralización comparando lesiones de cada lado. Broca estudió en 1861 a Leborgne y en 1865 defendió que hablamos con el hemisferio izquierdo. Las lesiones derechas causan aprosodia, heminegligencia y prosopagnosia. En el cerebro dividido, lo que aparece en el campo visual izquierdo llega solo al hemisferio derecho. Gazzaniga describió el intérprete del hemisferio izquierdo, y si hay dos conciencias sigue en debate (Pinto et al., 2017).",
    v: [
      "Leborgne=Paciente de Broca que solo podía emitir la sílaba «tan»",
      "Marc Dax (1836)=Relacionó la pérdida del habla con la lesión izquierda, con prioridad discutida",
      "Aprosodia=Dificultad para producir o entender la entonación emocional",
      "Prosopagnosia=Déficit para reconocer caras tras lesiones bilaterales o derechas",
      "Comisurotomía=Sección del cuerpo calloso para tratar la epilepsia resistente a fármacos",
      "Intérprete=Hemisferio izquierdo que inventa explicaciones de conductas cuya causa ignora",
      "Síndrome de la mano ajena=Una mano actúa como si tuviera voluntad propia",
      "Sperry y Gazzaniga=Diseñaron en los sesenta pruebas para estudiar cada hemisferio por separado"
    ],
    g: [
      "Broca estudió a Leborgne en ___.|1861|1865|1874",
      "Sperry recibió el premio Nobel en 1981, compartido con Hubel y ___.|Wiesel|Gazzaniga|Bogen",
      "En el cerebro dividido, el estímulo dura menos de unos 150–200 ms para que el paciente no pueda mover los ___.|ojos|dedos|labios",
      "En el experimento de la pata de pollo y la escena nevada, la mano izquierda elegía una ___.|pala|gallina|llave",
      "Las lesiones naturales van seguidas de ___, de modo que lo observado meses después no refleja solo la zona perdida.|reorganización|extinción|desconexión"
    ],
    tf: [
      "En el cerebro dividido, una palabra presentada en el campo visual izquierdo puede nombrarse en voz alta.|F|Llega al hemisferio derecho, que no controla el habla. El paciente dice no ver nada, pero la mano izquierda elige el objeto.",
      "En la vida diaria, los pacientes con comisurotomía parecían casi normales.|V",
      "Pinto et al. (2017) confirmaron con muchos pacientes que hay dos esferas de conciencia.|F|Con dos pacientes hallaron percepción dividida con respuesta unificada. La interpretación sigue abierta.",
      "Las operaciones de Bogen y Vogel reducían las crisis epilépticas de estos pacientes.|V"
    ],
    q: [
      "A un paciente con el cuerpo calloso seccionado se le presenta «LLAVE» en el campo visual izquierdo. ¿Qué es lo esperable?|No la nombra, pero la elige con la mano izquierda|La nombra, pero no la elige con ninguna mano|No la nombra, pero la elige con la mano derecha|El campo visual izquierdo proyecta al hemisferio derecho, que no controla el habla pero sí la mano izquierda.",
      "Preguntado por qué eligió una pala, el paciente responde que sirve para limpiar el gallinero. ¿Qué ilustra?|El intérprete del hemisferio izquierdo|El síndrome de la mano ajena|La aprosodia del hemisferio derecho|El izquierdo inventa una explicación coherente para una conducta iniciada por el derecho, que vio la escena nevada.",
      "¿Por qué se seccionaba el cuerpo calloso en estos pacientes?|Para impedir que las crisis pasaran al otro lado|Para estudiar cada hemisferio por separado|Para tratar la prosopagnosia de origen derecho|Era un tratamiento de la epilepsia grave resistente. El estudio de cada hemisferio vino después, con Sperry y Gazzaniga.",
      "¿Qué limitación tiene el método lesional?|Las lesiones no respetan fronteras de regiones|Solo permite estudiar el hemisferio izquierdo|Exige seccionar siempre el cuerpo calloso|Las lesiones naturales dañan conexiones y van seguidas de reorganización, lo que complica atribuir el déficit a una zona."
    ],
    inc: [
      "Sobre los estudios del cerebro dividido|Muestran el funcionamiento de un cerebro sano|Los pacientes habían sufrido años de epilepsia|Parte de la información viaja por otras vías|Eran cerebros alterados por la epilepsia y desconectados, y los pacientes compensaban. No son un modelo del cerebro sano."
    ],
    seq: [
      "Experimento con cerebro dividido|Fijar la mirada en el punto central>«LLAVE» aparece en el campo visual izquierdo>La palabra llega solo al hemisferio derecho>El paciente dice no haber visto nada>La mano izquierda elige la llave al tacto"
    ],
    cls: [
      "Déficit tras lesión|Izquierda: pérdida del habla; caso Leborgne; afasia de Wernicke|Derecha: aprosodia; heminegligencia izquierda; prosopagnosia"
    ] },
  { t: "Lateralización en personas sanas: escucha dicótica, campo dividido, Wada y RMf",
    tip: "Kimura (1961) halló con escucha dicótica la ventaja del oído derecho para material verbal, porque la vía contralateral domina cuando dos sonidos compiten, no porque ese oído oiga mejor. El campo visual dividido muestra ventajas pequeñas, y campo visual no es lo mismo que ojo. El test de Wada anestesia un hemisferio con amobarbital. La RMf concuerda con el Wada en un 80,6 % para el lenguaje, pero poco en patrones atípicos y en memoria.",
    v: [
      "Escucha dicótica=Presentación simultánea de dos estímulos distintos, uno a cada oído",
      "Ventaja del oído derecho=Mejor informe del material verbal presentado a ese lado (Kimura, 1961)",
      "Vía contralateral=Vía auditiva más fuerte, que domina cuando dos sonidos compiten",
      "Test de Wada=Amobarbital en una carótida interna para anestesiar un hemisferio unos minutos",
      "Wada y Rasmussen (1960)=Perfeccionaron la prueba de anestesia hemisférica ideada en 1949",
      "Doppler transcraneal funcional=Mide el flujo en las arterias cerebrales medias durante una tarea verbal",
      "Estimulación magnética transcraneal=Interfiere brevemente con el funcionamiento de una zona",
      "Bauer et al. (2014)=Metaanálisis con un 80,6 % de concordancia entre RMf y Wada para el lenguaje"
    ],
    g: [
      "Con melodías, la escucha dicótica muestra ventaja del oído ___.|izquierdo|derecho|ipsilateral",
      "En el campo visual dividido, las palabras se reconocen algo mejor en el campo visual ___.|derecho|izquierdo|central",
      "El metaanálisis de Bauer et al. incluyó 22 estudios con ___ pacientes.|504|1.011|242",
      "Para la memoria, la concordancia entre la RMf y el test de Wada fue ___.|pobre|alta|perfecta",
      "En el test de Wada, si el ___ se detiene, el hemisferio anestesiado es dominante para el lenguaje.|habla|pulso|movimiento"
    ],
    tf: [
      "La ventaja del oído derecho indica que ese oído oye mejor.|F|Indica que su información llega antes, por la vía contralateral, al hemisferio izquierdo, que procesa el lenguaje.",
      "Cada ojo recoge información de los dos hemicampos visuales.|V",
      "La RMf concuerda con el test de Wada sobre todo en pacientes con patrón atípico o bilateral.|F|Es al revés: concuerda bien con el patrón típico y mal con el atípico o bilateral, cuando la decisión es más delicada.",
      "En el test de Wada también se valora la memoria del hemisferio que sigue despierto.|V"
    ],
    q: [
      "En escucha dicótica, una persona oye /ba/ por el oído izquierdo y /da/ por el derecho a la vez, y dice haber oído /da/. ¿Por qué?|La vía contralateral lleva /da/ al hemisferio izquierdo|El oído derecho tiene más sensibilidad que el izquierdo|La vía ipsilateral del oído derecho es la más rápida|Cuando dos sonidos compiten, la vía ipsilateral queda suprimida y la sílaba del oído derecho llega directa al hemisferio del lenguaje.",
      "¿Dónde se inyecta el amobarbital sódico en el test de Wada?|En la arteria carótida interna de un lado|En la arteria vertebral de ambos lados|En el líquido cefalorraquídeo lumbar|Anestesia durante unos minutos el hemisferio de ese lado. Después se repite en el otro.",
      "¿Por qué las ventajas del campo visual dividido en personas sanas son pequeñas?|El cuerpo calloso transmite la información enseguida|Cada ojo envía la información a un solo hemisferio|El estímulo dura demasiado para medir diferencias|Sin sección del cuerpo calloso, la información pasa al otro hemisferio casi de inmediato.",
      "¿Para qué se usa el test de Wada?|Para estimar las funciones en riesgo antes de operar|Para tratar la epilepsia grave resistente a fármacos|Para medir la preferencia manual de los pacientes|Se emplea antes de una cirugía cerebral, por ejemplo en algunas epilepsias, para conocer la dominancia del lenguaje y la memoria."
    ],
    inc: [
      "Sobre las técnicas de lateralización|Campo visual y ojo son lo mismo|La RMf es menos invasiva que el Wada|El Doppler mide el flujo de las cerebrales medias|Es un error típico: cada ojo recoge los dos hemicampos, y es cada mitad del campo visual la que proyecta a un hemisferio."
    ],
    seq: [
      "Procedimiento del test de Wada|Inyectar amobarbital en una carótida interna>Se anestesia ese hemisferio unos minutos>Contar, nombrar objetos y repetir frases>Valorar la memoria del hemisferio despierto>Repetir la prueba en el otro lado"
    ],
    cls: [
      "Técnica|Invasiva: test de Wada; amobarbital intracarotídeo|Menos invasiva: RMf; EEG; Doppler transcraneal funcional; estimulación magnética transcraneal"
    ] }
] },
{ n: 4, t: "Origen de las asimetrías y reorganización cerebral", cap: 2, pir: "alta", mods: [
  { t: "Asimetrías antes de nacer y preferencia manual",
    tip: "El patrón básico de lateralización se establece antes del nacimiento y se consolida después. La preferencia manual aparece pronto, pero es inestable en los bebés y se estabiliza a lo largo de la infancia. Es un rasgo poligénico con contribución genética modesta, al que se suman hipótesis prenatales y presiones culturales. Se mide con cuestionarios, como el inventario de Edimburgo, o con pruebas de ejecución, y es una variable continua.",
    v: [
      "Preferencia manual=Tendencia a usar una mano para las tareas que exigen precisión",
      "Inventario de Edimburgo=Cuestionario de uso de la mano que da un índice continuo de lateralidad",
      "Rasgo poligénico=Influido por muchas variantes genéticas de efecto pequeño",
      "Pruebas de ejecución=Comparan la habilidad de cada mano, por ejemplo al colocar clavijas",
      "Preferencia mixta=Uso de manos distintas según la tarea, reflejado en el índice global",
      "Factores prenatales=Postura fetal o ambiente hormonal, hipótesis que necesitan más investigación",
      "Lateralización en el pollo=La luz que recibe el embrión en el huevo influye en sus asimetrías visuales",
      "Presión cultural=Obligar a los niños zurdos a escribir con la derecha"
    ],
    g: [
      "Según los estudios con gemelos, la contribución genética a la preferencia manual es ___.|modesta|nula|total",
      "En los bebés, la preferencia manual aparece pronto, pero es ___.|inestable|definitiva|bilateral",
      "En el pollo, por la postura del embrión, la luz llega sobre todo a uno de los ___.|ojos|hemisferios|oídos",
      "Obligar a un zurdo a escribir con la derecha cambiaba la mano de escritura, pero no necesariamente la ___ cerebral.|organización|actividad|maduración",
      "Además de la preferencia manual, hay preferencia de pie, de ojo y de ___.|oído|tacto|olfato"
    ],
    tf: [
      "Existe un gen de la zurdera que explica la mayor parte de la preferencia manual.|F|Es un rasgo poligénico, con muchas variantes de efecto pequeño. Los modelos de un solo gen no se han confirmado.",
      "Preferencia y habilidad manual se relacionan, pero no son lo mismo.|V",
      "Las asimetrías cerebrales son un producto tardío del aprendizaje de la escritura.|F|El patrón básico se establece antes del nacimiento y se consolida después con la maduración y la experiencia.",
      "La preferencia de mano, pie, ojo y oído no siempre coincide en una misma persona.|V"
    ],
    q: [
      "Lucía escribe con la derecha porque así le enseñaron, pero usa la izquierda para el ratón, las tijeras y el cepillo de dientes. ¿Qué conclusión es la más adecuada?|Su clasificación depende del criterio usado|Es diestra, porque escribe con la derecha|Es zurda, porque así lo indica su genética|Será diestra, zurda o de preferencia mixta según el criterio. La preferencia manual es una variable continua.",
      "¿Qué indica el ejemplo del pollo sobre la lateralización?|Que el ambiente temprano la modula|Que depende solo de los genes|Que es exclusiva de los mamíferos|La luz que recibe el embrión influye en sus asimetrías visuales: la lateralización no es exclusiva de nuestra especie ni solo genética.",
      "Un padre afirma que su bebé de seis meses es zurdo porque hoy ha cogido el sonajero con la izquierda. ¿Qué cabe responder?|Que la preferencia aún es inestable|Que la zurdera ya está fijada|Que debe medirse con un test de Wada|En los bebés la preferencia aparece pronto pero cambia, y se estabiliza a lo largo de la infancia con la práctica.",
      "¿Qué ofrece el inventario de Edimburgo?|Un índice continuo de lateralidad|Una medida de la habilidad de cada mano|Una prueba genética de la zurdera|Pregunta por la mano usada en varias tareas. La habilidad de cada mano se compara con pruebas de ejecución."
    ],
    inc: [
      "Sobre la preferencia manual|Queda fijada de forma definitiva en el primer año|Tiende a darse en familias, con base poligénica|Recibe influencias genéticas, prenatales y culturales|Es inestable en los bebés y se va estabilizando a lo largo de la infancia."
    ],
    seq: [],
    cls: [
      "Factor de la preferencia manual|Genético: rasgo poligénico; contribución modesta; agregación familiar|Prenatal: postura fetal; ambiente hormonal|Cultural: obligar a escribir con la derecha"
    ] },
  { t: "Zurdera y dominancia para el lenguaje",
    tip: "La zurdera afecta aproximadamente al 10,6 % con el criterio de Edimburgo (Papadatou-Pastou et al., 2020), con un rango del 9 al 18 % según el criterio. Knecht et al. (2000) hallaron con Doppler lenguaje derecho en un 4 % de diestros fuertes, un 15 % de ambidiestros y un 27 % de zurdos fuertes. La mayoría de los zurdos tiene el lenguaje a la izquierda: la zurdera cambia las probabilidades, no las invierte.",
    v: [
      "Papadatou-Pastou et al. (2020)=Metaanálisis que estimó la zurdera en un 10,6 % con el criterio de Edimburgo",
      "Knecht et al. (2000)=Midieron con Doppler la lateralización del lenguaje según la mano preferida",
      "Representación bilateral=Participación sustancial de ambos hemisferios en una función",
      "Patrón atípico=Lenguaje lateralizado a la derecha o de forma bilateral",
      "Zurdera extrema=Criterio estricto que reduce la prevalencia estimada",
      "Generación de palabras=Tarea verbal usada por Knecht et al. durante el registro Doppler",
      "Hipótesis motora secuencial=El izquierdo se especializó en encadenar movimientos, base del habla y la mano",
      "Variable continua=Forma adecuada de tratar la preferencia manual, con grados entre extremos"
    ],
    g: [
      "Según Knecht et al., tiene el lenguaje en el hemisferio derecho alrededor del ___ de los ambidiestros.|15 %|4 %|27 %",
      "Según el criterio, la prevalencia de zurdera va aproximadamente del 9 % al ___.|18 %|27 %|50 %",
      "Entre los zurdos fuertes, aproximadamente ___ de cada cuatro tienen el lenguaje a la izquierda.|tres|dos|uno",
      "La relación entre zurdera y lenguaje es probabilística y ___.|graduada|binaria|inversa",
      "Si un paciente zurdo sufre una lesión izquierda en las zonas del lenguaje, lo más probable es que presente ___.|afasia|aprosodia|negligencia"
    ],
    tf: [
      "Si en los diestros el lenguaje está a la izquierda, en los zurdos está a la derecha.|F|La mayoría de los zurdos lo tiene a la izquierda. Incluso entre los zurdos fuertes, solo un 27 % lo tiene a la derecha.",
      "Los diestros también pueden tener patrones atípicos de lenguaje, aunque con poca frecuencia.|V",
      "En los casos atípicos, la RMf y el test de Wada concuerdan mejor que en los típicos.|F|Concuerdan peor en los casos atípicos (Bauer et al., 2014), que son más frecuentes en las personas zurdas.",
      "Una persona con lenguaje bilateral puede presentar una afasia menos grave tras un ictus.|V"
    ],
    q: [
      "Una paciente zurda fuerte va a ser operada cerca de las áreas del lenguaje. ¿Qué es lo más probable sobre su dominancia?|Izquierda, aunque con más riesgo de atípica|Derecha, como imagen en espejo del diestro|Bilateral, como en todos los zurdos|Unos tres de cada cuatro zurdos fuertes tienen el lenguaje a la izquierda, pero los patrones atípicos son más frecuentes.",
      "¿Qué proporción aproximada de zurdos fuertes tiene el lenguaje a la derecha según Knecht et al.?|Alrededor de la cuarta parte|Aproximadamente la mitad del grupo|La gran mayoría, cerca del 90 %|Aproximadamente el 27 %. La mayoría de los zurdos fuertes mantiene el lenguaje a la izquierda.",
      "¿Por qué se relacionan mano y lenguaje según una hipótesis clásica?|Ambos exigen control fino y secuencial|Ambos dependen de un único gen de la zurdera|Ambos se apoyan en la red ventral derecha|El izquierdo se habría especializado en el control motor secuencial, aunque la relación es débil y puede disociarse.",
      "¿Por qué varían las estimaciones de prevalencia de la zurdera?|Por el criterio usado para definirla|Por la técnica de neuroimagen empleada|Por la edad de los participantes|Si se exige zurdera extrema la cifra baja, y si se cuenta a todo el que no es diestro de forma consistente, sube."
    ],
    inc: [
      "Sobre zurdera y lenguaje|La zurdera determina el lenguaje derecho|La zurdera aumenta la probabilidad de lenguaje atípico|La representación bilateral es más frecuente en zurdos|Ser zurdo aumenta la probabilidad de un patrón atípico, pero no lo determina."
    ],
    seq: [],
    cls: [] },
  { t: "Reorganización tras la lesión: edad, hemisferectomía y mecanismos",
    tip: "La plasticidad es la capacidad del sistema nervioso de modificar su estructura y su función con la experiencia o tras una lesión. El principio de Kennard sostiene que las lesiones tempranas tienen consecuencias menos graves, pero algunas tienen peores efectos. Tras una hemisferectomía izquierda infantil, el derecho puede asumir el lenguaje, según la edad y la causa. Los mecanismos son la resolución de la diasquisis, el desenmascaramiento, los brotes axonales, la sinaptogénesis y la reorganización de mapas.",
    v: [
      "Plasticidad cerebral=Capacidad de modificar estructura y función con la experiencia o una lesión",
      "Principio de Kennard=Las lesiones tempranas tendrían consecuencias menos graves que las tardías",
      "Hemisferectomía=Extirpación o desconexión casi completa de un hemisferio",
      "Encefalitis de Rasmussen=Enfermedad de un solo hemisferio que puede motivar su extirpación",
      "Diasquisis=Tejido que deja de funcionar por edema, inflamación o pérdida de entradas",
      "Desenmascaramiento=Sinapsis existentes pero inhibidas que se vuelven funcionales",
      "Brote axonal=Ramas nuevas de neuronas supervivientes que ocupan sinapsis vacantes",
      "Sinaptogénesis=Formación lenta de sinapsis nuevas, dependiente de la actividad"
    ],
    g: [
      "Maguire et al. (2000) hallaron que los taxistas de Londres tenían mayor el hipocampo ___.|posterior|anterior|izquierdo",
      "El principio de Kennard se basó en trabajos con ___.|monos|ratas|niños",
      "En la agenesia del cuerpo calloso, muchas personas apenas muestran signos de ___.|desconexión|plasticidad|lateralización",
      "La recuperación por resolución de la diasquisis se produce sobre todo en las primeras ___.|semanas|horas|décadas",
      "Tras una hemisferectomía, los niños suelen tener debilidad en el lado opuesto y pérdida de medio ___.|campo visual|campo auditivo|cuerpo"
    ],
    tf: [
      "El principio de Kennard es una ley sin excepciones.|F|Algunas lesiones tempranas tienen peores efectos, porque alteran circuitos que aún no se habían formado.",
      "La sinaptogénesis es más lenta que el desenmascaramiento y depende del entrenamiento.|V",
      "El brote axonal consiste en activar sinapsis que ya existían pero estaban inhibidas.|F|Eso es el desenmascaramiento. El brote axonal crea ramas nuevas que ocupan sinapsis vacantes.",
      "En los taxistas de Londres, el volumen del hipocampo posterior se relacionaba con los años de experiencia.|V"
    ],
    q: [
      "Andrés tuvo un ictus izquierdo a los 60 años y sigue con dificultades para encontrar palabras. Su sobrina tuvo una lesión izquierda perinatal y habla con normalidad. ¿Qué explica mejor la diferencia?|La edad, el tipo de lesión y la rehabilitación|Solo la edad a la que ocurrió la lesión|Que la sobrina es zurda y tiene lenguaje derecho|La diferencia no depende solo de la edad, sino también del tipo de lesión y de la rehabilitación.",
      "¿De qué depende sobre todo que el derecho asuma el lenguaje tras una hemisferectomía izquierda?|De la edad del daño y de su causa|Del tamaño del cuerpo calloso|De la preferencia manual previa|No es lo mismo una lesión presente desde el nacimiento que una enfermedad que aparece con el lenguaje ya consolidado.",
      "¿Qué mecanismo explica parte de la recuperación en las primeras semanas, al remitir el edema?|La resolución de la diasquisis|La sinaptogénesis guiada|La reorganización de mapas|Al resolverse el edema, la inflamación o la pérdida de entradas, el tejido cercano y conectado recupera su función.",
      "¿Qué enfermedad puede motivar una hemisferectomía en un niño?|La encefalitis de Rasmussen|La agenesia del cuerpo calloso|La heminegligencia izquierda|Se hace en niños con epilepsia grave por enfermedades de un hemisferio, como la encefalitis de Rasmussen o algunas displasias."
    ],
    inc: [
      "Sobre la plasticidad cerebral|Solo aparece como respuesta a una lesión|Acompaña también al aprendizaje intenso|La neurorrehabilitación la aprovecha y dirige|También acompaña al aprendizaje intenso, como en los taxistas de Londres (Maguire et al., 2000)."
    ],
    seq: [],
    cls: [
      "Mecanismo de reorganización|Recupera lo existente: resolución de la diasquisis; desenmascaramiento|Crea conexiones nuevas: brotes axonales; sinaptogénesis"
    ] },
  { t: "Mitos sobre los hemisferios y lo que sí sabemos",
    tip: "Los resultados del cerebro dividido llegaron a la cultura popular muy simplificados. Nielsen et al. (2013), con RM en reposo en 1.011 personas, hallaron redes locales lateralizadas, pero ningún individuo con un hemisferio globalmente dominante. La creatividad y el razonamiento usan redes de ambos hemisferios, y es falso que solo usemos el 10 % del cerebro. Dekker et al. (2012) mostraron que estos mitos persisten incluso entre docentes.",
    v: [
      "Nielsen et al. (2013)=RM en reposo en 1.011 personas de 7 a 29 años, sin hemisferio globalmente dominante",
      "Dekker et al. (2012)=Encuesta a 242 docentes de Reino Unido y Países Bajos sobre neuromitos",
      "Mito del 10 %=Creencia de que solo se usa una pequeña parte del cerebro",
      "Lateralización de redes=Conexiones locales asimétricas, como lenguaje a la izquierda y atención a la derecha",
      "Estilos de aprendizaje=Neuromito aceptado por la mayoría de los docentes encuestados",
      "Creatividad=Recuperar, combinar y evaluar ideas e inhibir las obvias, con redes de ambos hemisferios",
      "Estilo de procesamiento=Diferencia real entre hemisferios, en lugar de tipos de personalidad",
      "Ejercicios para activar hemisferios=Soluciones fáciles derivadas de los mitos que carecen de apoyo"
    ],
    g: [
      "En la encuesta de Dekker et al., aproximadamente ___ de los docentes creía en el mito del 10 %.|la mitad|la décima parte|la totalidad",
      "Nielsen et al. estudiaron a personas de entre 7 y ___ años.|29|18|65",
      "En el estudio de Nielsen et al., las redes de la atención aparecían lateralizadas a la ___.|derecha|izquierda|línea media",
      "Casi cualquier lesión cerebral, por pequeña que sea, produce algún ___.|déficit|beneficio|desenmascaramiento",
      "Las diferencias entre sexos en la lateralización del lenguaje son ___ y discutidas.|pequeñas|grandes|definitivas"
    ],
    tf: [
      "Nielsen et al. (2013) hallaron que las personas creativas tienen el hemisferio derecho más conectado.|F|No hallaron ningún individuo con un hemisferio globalmente más usado o conectado: la lateralización es propia de las redes.",
      "Los mitos sobre los hemisferios exageran un dato real: que los hemisferios son diferentes.|V",
      "Las diferencias de lateralización entre hombres y mujeres permiten hablar de dos tipos de cerebro.|F|Las diferencias de grupo descritas son pequeñas y discutidas, y no permiten hablar de dos tipos de cerebro.",
      "El razonamiento usa el lenguaje del hemisferio izquierdo y también la representación espacial del derecho.|V"
    ],
    q: [
      "Un centro educativo ofrece ejercicios para «activar el hemisferio derecho» y potenciar la creatividad. ¿Qué valoración es correcta?|Carecen de apoyo porque la creatividad es bilateral|Funcionan solo en personas de hemisferio derecho|Son útiles si se combinan con ejercicios del izquierdo|La creatividad reúne procesos con redes distribuidas en ambos hemisferios, y esos ejercicios no tienen apoyo.",
      "¿Por qué es falso que solo usemos el 10 % del cerebro?|Hay actividad en todo el cerebro|Solo se usa el hemisferio dominante|Las regiones de reserva son pequeñas|La neuroimagen muestra actividad en todo el cerebro y casi cualquier lesión produce algún déficit: no hay regiones de reserva.",
      "¿Por qué persisten los mitos sobre los hemisferios?|Son sencillos y prometen soluciones fáciles|Se basan en datos falsos de neuroimagen|Los defienden los estudios de cerebro dividido|Exageran un dato real, que los hemisferios son diferentes, y atraen por su sencillez.",
      "¿Qué concluye la evidencia sobre la idea de personas «de hemisferio izquierdo»?|Hay redes lateralizadas, no personas así|Es cierta en adultos, pero no en niños|Solo se aplica a las personas zurdas|La lateralización es una propiedad de las redes, no un rasgo de personalidad (Nielsen et al., 2013)."
    ],
    inc: [
      "Sobre los neuromitos|Pocos docentes de Dekker et al. creían en el mito del 10 %|La creatividad depende de redes de ambos hemisferios|Casi cualquier lesión, por pequeña que sea, produce algún déficit|Aproximadamente la mitad de los 242 docentes encuestados por Dekker et al. (2012) creía en el mito del 10 %."
    ],
    seq: [],
    cls: [
      "Afirmación|Mito: personas de hemisferio izquierdo o derecho; derecho creativo e izquierdo lógico; usamos el 10 % del cerebro|Evidencia: redes lateralizadas; creatividad con ambos hemisferios; actividad en todo el cerebro"
    ] }
] }
);

// SAIMAP Psicología · Fisiológica · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Cerebro y lenguaje: de Broca a la doble vía", cap: 3, pir: "alta", mods: [
  { t: "El lenguaje como capacidad biológica: evolución y FOXP2",
    tip: "El lenguaje humano es combinatorio, recursivo, simbólico y permite el desplazamiento, y esas propiedades no aparecen juntas en ningún otro sistema de comunicación. Depende sobre todo del hemisferio izquierdo, también en la mayoría de los zurdos, aunque el derecho aporta la prosodia emocional. FOXP2 es un factor de transcripción cuya mutación en la familia KE causa dispraxia verbal y dificultades gramaticales, no ausencia de lenguaje: no es «el gen del lenguaje».",
    v: [
      "Combinatoriedad=Construir mensajes ilimitados con un repertorio limitado de sonidos y palabras",
      "Recursividad=Incluir una estructura dentro de otra del mismo tipo",
      "Carácter simbólico=Relación arbitraria entre la palabra y lo que designa",
      "Desplazamiento=Capacidad de hablar de lo pasado, lo futuro o lo inexistente",
      "FOXP2=Gen de un factor de transcripción mutado en la familia KE",
      "Familia KE=Familia británica con dispraxia verbal del desarrollo y dificultades gramaticales",
      "Dispraxia verbal=Dificultad para coordinar los movimientos orofaciales necesarios para hablar",
      "Prosodia emocional=Entonación que indica enfado, ironía o alegría, con aporte del hemisferio derecho"
    ],
    g: [
      "La dominancia del hemisferio izquierdo para el lenguaje aparece en torno al ___ de los diestros.|95 %|75 %|50 %",
      "Nada en el sonido «mesa» se parece a una mesa, porque el lenguaje es ___.|simbólico|recursivo|combinatorio",
      "La mutación de FOXP2 en la familia KE la describieron Lai et al. en ___.|2001|1967|2018",
      "FOXP2 codifica un factor de ___ que regula la expresión de muchos otros genes.|transcripción|crecimiento|traducción",
      "El hemisferio derecho contribuye a la prosodia emocional y a los aspectos no ___ del discurso.|literales|gramaticales|fonológicos"
    ],
    tf: [
      "Los primates no humanos muestran precursores del lenguaje, como gestos comunicativos y lateralización de ciertas conductas.|V",
      "Los miembros afectados de la familia KE carecían por completo de lenguaje.|F|Presentaban dispraxia verbal del desarrollo y dificultades gramaticales, no ausencia de lenguaje.",
      "FOXP2 es un gen exclusivo de la especie humana.|F|Existe también en otros vertebrados y actúa en el desarrollo de varios tejidos y circuitos, entre ellos motores.",
      "Como el lenguaje no deja fósiles, su evolución se estudia con pruebas indirectas.|V"
    ],
    q: [
      "Un titular anuncia «el gen que nos hace hablar» tras estudiar a una familia con problemas articulatorios. ¿Qué conclusión es la adecuada?|La mutación altera el habla sin ser su causa única|El gen es necesario y suficiente para hablar|El gen solo se expresa en las áreas del lenguaje|Como FOXP2, sería una pieza de una red genética amplia. Que su avería altere el habla no lo convierte en el gen del lenguaje.",
      "¿Qué propiedad del lenguaje ilustra la frase «la amiga del vecino que vive en el tercero que te presenté ayer»?|Recursividad|Desplazamiento|Simbolismo|Una estructura se incluye dentro de otra del mismo tipo, lo que permite formar mensajes ilimitados.",
      "Según Knecht et al. (2000), ¿en qué proporción de diestros fuertes aparecía el lenguaje en el hemisferio derecho?|≈ 4 %|≈ 15 %|≈ 27 %|El 15 % corresponde a los ambidiestros y el 27 % a los zurdos fuertes.",
      "Una niña cuenta lo que hará mañana en la excursión del colegio. ¿Qué propiedad del lenguaje pone en juego?|Desplazamiento|Recursividad|Combinatoriedad|El desplazamiento permite hablar de lo que ocurrió, de lo que pasará o de lo que no existe."
    ],
    inc: [
      "Sobre FOXP2|Es el gen que por sí solo permite hablar|Es un factor de transcripción|Existe también en otros vertebrados|El lenguaje depende de muchos genes de efecto pequeño y de la experiencia, no de un único gen."
    ],
    seq: [],
    cls: [] },
  { t: "Periodos sensibles para adquirir el lenguaje",
    tip: "Lenneberg (1967) propuso un periodo crítico que se cierra hacia la pubertad. Hoy se habla de periodos sensibles graduados y en plural, porque cada componente tiene su trayectoria: el vocabulario crece toda la vida, mientras la gramática y la pronunciación dependen más de la edad de inicio. Hartshorne et al. (2018) estimaron que la capacidad de aprender gramática se mantiene alta hasta ≈ 17,4 años. El caso Genie debe usarse con cautela.",
    v: [
      "Periodo crítico=Ventana de límites nítidos fuera de la cual la capacidad no se desarrolla con normalidad",
      "Periodo sensible=Etapa de aprendizaje más fácil cuyo final es gradual",
      "Lenneberg (1967)=Propuso que la facilidad para adquirir el lenguaje se reduce hacia la pubertad",
      "Genie=Niña hallada en 1970 tras un aislamiento extremo, con una sintaxis muy limitada",
      "Hartshorne et al. (2018)=Analizaron un test de gramática inglesa respondido por 669.498 personas",
      "Segunda lengua=Permite estudiar la edad de adquisición sin privación",
      "Vocabulario=Componente del lenguaje que se amplía durante toda la vida",
      "Recuperación tras lesión=Mejor reorganización del lenguaje en el cerebro infantil, aunque no siempre"
    ],
    g: [
      "Lenneberg relacionaba el periodo crítico con la maduración cerebral y la ___.|lateralización|mielinización|poda sináptica",
      "Según Hartshorne et al., la capacidad de aprender gramática se mantiene alta hasta ≈ ___ años.|17,4|12,0|25,3",
      "Genie fue descubierta en ___ tras años de aislamiento extremo.|1970|1967|1985",
      "La gramática y la ___ parecen más sensibles a la edad de inicio que el vocabulario.|pronunciación|semántica|pragmática",
      "Hoy se habla de periodos sensibles ___, porque los componentes siguen trayectorias diferentes.|graduados|bruscos|únicos"
    ],
    tf: [
      "Según la visión actual, la ventana para la gramática se cierra de forma gradual y más tarde que la pubertad.|V",
      "El caso de Genie demuestra de forma concluyente la existencia de un periodo crítico.|F|Debe usarse con cautela: sufrió malnutrición, maltrato y aislamiento, y no se sabe si tenía alteraciones previas.",
      "Una vez cerrado un periodo sensible, el aprendizaje de ese componente se detiene por completo.|F|Fuera de él se sigue aprendiendo, aunque con más esfuerzo y peor resultado medio.",
      "Con la intervención, Genie aprendió vocabulario, pero su sintaxis quedó muy limitada.|V"
    ],
    q: [
      "Una familia se traslada a Italia con dos hijos pequeños. Años después, los niños hablan como nativos y los padres conservan acento y errores gramaticales. ¿Qué lo explica mejor?|Un periodo sensible de final gradual|Un periodo crítico cerrado en la pubertad|Una lateralización incompleta adulta|Los padres no han dejado de aprender: aprenden con otro techo. La ventaja temprana es gradual, no un corte brusco.",
      "¿Qué ventaja tienen los estudios de segunda lengua frente a los casos de privación?|Estudian la edad sin privación|Usan muestras clínicas pequeñas|Eliminan el peso del vocabulario|Permiten estudiar la edad de adquisición sin los factores de confusión de la privación, y con muestras muy grandes.",
      "¿Qué componente del lenguaje es menos sensible a la edad de inicio?|El vocabulario|La gramática|La pronunciación|Un adulto aprende sin dificultad palabras nuevas como «criptomoneda», mientras que gramática y pronunciación dependen más de la edad.",
      "Según Hartshorne et al. (2018), los datos de segunda lengua…|confirman una ventaja temprana que declina tarde|refutan cualquier ventaja de la edad temprana|sitúan el cierre de la ventana en la pubertad|Hay ventaja temprana, como predecía Lenneberg, pero la ventana se cierra más tarde de lo que suponía la hipótesis clásica."
    ],
    inc: [
      "Sobre la hipótesis del periodo crítico|Lenneberg situó su final hacia los 17 años|Lenneberg la propuso en 1967|La relacionaba con la lateralización|Lenneberg situó el final hacia la pubertad. Los ≈ 17,4 años proceden de Hartshorne et al. (2018)."
    ],
    seq: [],
    cls: [
      "Visión del periodo|Hipótesis clásica: periodo crítico; límite hacia la pubertad; casos de privación|Visión actual: periodos sensibles graduados; declive más tardío; grandes muestras de segunda lengua"
    ] },
  { t: "El modelo clásico: Broca, Wernicke, Lichtheim y Geschwind",
    tip: "El método anatomoclínico relacionó la pérdida del habla de Leborgne con la frontal inferior izquierda (Broca, 1861) y la comprensión alterada con la temporal superior posterior (Wernicke, 1874). Wernicke planteó un esquema conexionista y predijo la afasia de conducción. Lichtheim (1885) añadió el centro de conceptos, lo que explica las afasias transcorticales, y Geschwind (1965) recuperó el modelo con los síndromes de desconexión.",
    v: [
      "Método anatomoclínico=Observar el trastorno en vida y localizar la lesión en la autopsia",
      "Casa de Lichtheim=Diagrama con un centro auditivo (A), uno motor (M) y uno de conceptos (B)",
      "Área de Broca=Circunvolución frontal inferior izquierda, áreas 44 y 45 de Brodmann",
      "Área de Wernicke=Tercio posterior de la circunvolución temporal superior izquierda, área 22",
      "Fascículo arqueado=Haz que, en el esquema de Wernicke, une el centro auditivo con el motor",
      "Centro de conceptos=Elemento B que añadió Lichtheim en 1885",
      "Síndrome de desconexión=Trastorno por interrupción de las fibras que unen dos centros sanos",
      "Wernicke-Geschwind=Modelo con dos rutas: repetir una palabra oída y leer en voz alta una escrita"
    ],
    g: [
      "Lichtheim completó el esquema de Wernicke con un centro de conceptos en ___.|1885|1874|1865",
      "El área de Broca ocupa las porciones opercular y ___ de la circunvolución frontal inferior.|triangular|orbitaria|angular",
      "Wernicke predijo que una lesión del fascículo arqueado produciría una afasia de ___.|conducción|Broca|Wernicke",
      "Geschwind recuperó el modelo clásico en ___ con la idea de los síndromes de desconexión.|1965|1885|1937",
      "Para leer en voz alta, la ruta de Wernicke-Geschwind va de la corteza visual a la circunvolución ___.|angular|supramarginal|cingulada"
    ],
    tf: [
      "En la casa de Lichtheim, una lesión entre el centro de conceptos y el centro motor deja intacta la repetición.|V",
      "Wernicke describió en 1874 pacientes con habla no fluida y comprensión conservada.|F|Describió el cuadro opuesto: habla fluida con poco sentido y comprensión alterada.",
      "Broca sostuvo en 1865 que hablamos con el hemisferio izquierdo.|V",
      "El fascículo arqueado fue el elemento que Lichtheim añadió al esquema de Wernicke.|F|El fascículo arqueado ya estaba en el esquema de Wernicke. Lichtheim añadió el centro de conceptos (B)."
    ],
    q: [
      "Según el modelo de Wernicke-Geschwind, ¿qué ruta sigue la repetición de una palabra oída?|Auditiva, Wernicke, arqueado, Broca, motora|Auditiva, angular, Wernicke, Broca, motora|Visual, angular, Wernicke, arqueado, motora|La circunvolución angular solo entra en la ruta de la lectura en voz alta, que parte de la corteza visual.",
      "En el esquema de Lichtheim, un paciente repite lo que oye sin entenderlo. ¿Qué conexión está interrumpida?|La que va de A a B|La que va de B a M|La que va de A a M|Si se corta A–B, el sonido llega al centro motor y se repite, pero no accede a los conceptos.",
      "¿Cuál fue el mayor acierto del modelo de Lichtheim?|Explicar las afasias transcorticales|Localizar la comprensión en el área 22|Descubrir el fascículo arqueado|Con el centro de conceptos pudo explicar cuadros con repetición conservada y otros dominios alterados.",
      "¿Dónde situó Wernicke, en el hemisferio izquierdo, la lesión de sus pacientes con habla fluida y comprensión alterada?|Temporal superior posterior|Frontal inferior posterior|Angular y supramarginal|La situó en el tercio posterior de la circunvolución temporal superior (área 22), cerca de la corteza auditiva."
    ],
    inc: [
      "Sobre el modelo clásico|Geschwind lo abandonó en favor de la doble vía|Lichtheim añadió un centro de conceptos|Wernicke lo planteó como un esquema conexionista|Geschwind no lo abandonó: lo recuperó y amplió en 1965. La doble vía es de Hickok y Poeppel (2007)."
    ],
    seq: [
      "Leer en voz alta según Wernicke-Geschwind|Corteza visual>Circunvolución angular>Área de Wernicke>Fascículo arqueado>Área de Broca>Corteza motora"
    ],
    cls: [] },
  { t: "La doble vía y la revisión de las áreas clásicas",
    tip: "El modelo de doble vía de Hickok y Poeppel (2007) parte de la corteza temporal superior. La vía ventral, bilateral, convierte el sonido en significado, y la dorsal, lateralizada a la izquierda y con el área Spt, lo convierte en articulación. Dronkers et al. (2007) mostraron que la lesión de Leborgne iba más allá de la frontal inferior, y hoy se debate si conservar las etiquetas «Broca» y «Wernicke».",
    v: [
      "Modelo de doble vía=Propuesta de Hickok y Poeppel (2007) inspirada en las dos vías visuales",
      "Vía ventral=Ruta bilateral que convierte el sonido en significado",
      "Vía dorsal=Ruta izquierda que convierte el sonido en articulación",
      "Área Spt=Región de la cisura de Silvio en el límite parietotemporal, nodo de la vía dorsal",
      "Corteza temporal superior=Punto de partida de ambas vías, donde se analizan los sonidos del habla",
      "Fascículo uncinado=Haz de la vía ventral, junto con la cápsula extrema y el fronto-occipital inferior",
      "Longitudinal superior=Fascículo que sostiene la vía dorsal junto con el arqueado",
      "Tremblay y Dick (2016)=Proponen sustituir las etiquetas clásicas por términos anatómicos precisos"
    ],
    g: [
      "La vía ventral es ___, lo que ayuda a explicar que la comprensión de palabras resista lesiones de un hemisferio.|bilateral|izquierda|derecha",
      "Para Binder (2015), la comprensión depende de una corteza temporal ___ amplia.|posterior|anterior|medial",
      "Dronkers et al. (2007) hallaron que las lesiones de Leborgne y Lelong se extendían ___.|medialmente|lateralmente|posteriormente",
      "La vía ventral se apoya en el fascículo fronto-occipital inferior, el uncinado y la ___.|cápsula extrema|cápsula interna|cápsula externa",
      "La vía dorsal es necesaria para repetir y para aprender palabras ___.|nuevas|abstractas|frecuentes"
    ],
    tf: [
      "La vía dorsal está lateralizada a la izquierda y la ventral es bilateral.|V",
      "En el modelo de Hickok y Poeppel, la vía ventral está lateralizada a la izquierda.|F|Es una trampa típica: la ventral es bilateral, y la lateralizada a la izquierda es la dorsal.",
      "Dronkers et al. (2007) confirmaron que la lesión de Leborgne se limitaba a las áreas 44 y 45.|F|La lesión se extendía medialmente, más allá de la circunvolución frontal inferior.",
      "El modelo clásico sigue considerándose una buena primera aproximación clínica.|V"
    ],
    q: [
      "Un turista repite el nombre de una calle en un idioma que desconoce. ¿Qué vía usa sobre todo?|La dorsal, porque reproduce sonidos|La ventral, porque accede al significado|Ambas por igual, porque es bilateral|Reproduce sonidos sin acceder a ningún significado, que es la función de la vía dorsal.",
      "¿Dónde se sitúa el área Spt?|En la cisura de Silvio, límite parietotemporal|En la frontal inferior, entre áreas 44 y 45|En la temporal media, junto a la vía ventral|Está en la cisura de Silvio, en el límite entre los lóbulos parietal y temporal, y forma parte de la vía dorsal.",
      "¿Qué proponen Tremblay y Dick (2016)?|Sustituir las etiquetas clásicas|Ampliar el área de Wernicke|Recuperar el esquema de Lichtheim|Las etiquetas «área de Broca» y «área de Wernicke» sugieren funciones únicas que no se corresponden con los datos.",
      "¿Qué haz de sustancia blanca pertenece a la vía dorsal?|Fascículo longitudinal superior|Fascículo uncinado|Fascículo fronto-occipital inferior|La dorsal se apoya en el arqueado y el longitudinal superior. Uncinado y fronto-occipital inferior son ventrales."
    ],
    inc: [
      "Sobre el modelo de doble vía|La vía dorsal convierte el sonido en significado|Ambas vías parten de la corteza temporal superior|La vía ventral es de organización bilateral|La vía dorsal conecta los sonidos con la articulación. La ventral es la que los conecta con el significado."
    ],
    seq: [],
    cls: [
      "Vía del lenguaje|Dorsal: área Spt; fascículo arqueado; lateralizada a la izquierda|Ventral: fascículo uncinado; cápsula extrema; bilateral"
    ] }
] },
{ n: 6, t: "Las afasias y otras alteraciones del lenguaje", cap: 3, pir: "alta", mods: [
  { t: "Tres preguntas para clasificar: fluidez, comprensión y repetición",
    tip: "La afasia es una alteración adquirida del lenguaje por daño cerebral que no se explica por un déficit sensorial, motor o de motivación. Los síndromes clásicos se clasifican con tres preguntas: si el habla es fluida, si la comprensión se conserva y si la repetición se conserva. La repetición alterada apunta a la región perisilviana, y la conservada, a las transcorticales. La anomia aparece en casi todas y es poco localizadora.",
    v: [
      "Afasia=Alteración adquirida del lenguaje por daño cerebral, no explicable por déficit sensorial o motor",
      "Carácter adquirido=Aparece en alguien que ya había desarrollado el lenguaje",
      "Ictus de la cerebral media=Causa más frecuente de afasia cuando afecta al hemisferio izquierdo",
      "Región perisilviana=Zona alrededor de la cisura de Silvio, dañada cuando falla la repetición",
      "Afasias transcorticales=Grupo con repetición conservada y lesión fuera de la región perisilviana",
      "Anomia=Dificultad para encontrar palabras, el síntoma más común de las afasias",
      "Habla no fluida=Lenta, con frases cortas, pausas y esfuerzo visible",
      "Repetición=Dominio explorado con palabras, pseudopalabras y frases de longitud creciente"
    ],
    g: [
      "La primera bifurcación del árbol diagnóstico separa el habla fluida de la ___.|no fluida|telegráfica|ecolálica",
      "La ___ no aparece en la tabla de clasificación porque está alterada en casi todas las afasias.|denominación|repetición|comprensión",
      "Si la repetición está alterada, la lesión suele ser ___.|perisilviana|subcortical|occipital",
      "La comprensión se explora con órdenes, preguntas de sí o no y ___ de objetos.|señalamiento|denominación|descripción",
      "En las semanas posteriores a un ictus, una afasia puede evolucionar hacia una forma más ___.|leve|grave|compleja"
    ],
    tf: [
      "La anomia es el síntoma más útil para localizar la lesión en una afasia.|F|Es el síntoma más común y el menos útil para localizar, porque aparece en casi todas las afasias.",
      "La correspondencia entre síndrome afásico y lesión es una tendencia, no una regla fija.|V",
      "Una persona sorda que no entiende lo que se le dice cumple la definición de afasia.|F|La afasia no se explica por un problema sensorial como la sordera, ni por uno motor o de motivación.",
      "La afasia de conducción combina fluidez y comprensión conservadas con repetición alterada.|V"
    ],
    q: [
      "Una paciente habla con soltura y buena entonación y sigue bien la orden de tocarse la oreja izquierda, pero repite «el niño come pan» como «el nilo cone pan». ¿Qué afasia indica el árbol?|De conducción|Anómica|Transcortical sensorial|Fluidez y comprensión conservadas con repetición alterada llevan a la afasia de conducción.",
      "Un paciente tiene habla no fluida, comprensión alterada y repetición conservada. ¿Qué afasia presenta?|Transcortical mixta|Global|Transcortical motora|La global tiene también la repetición alterada, y la transcortical motora conserva relativamente la comprensión.",
      "¿Qué dominio separa las afasias perisilvianas de las transcorticales?|La repetición|La comprensión|La fluidez|Repetición alterada indica lesión perisilviana, y conservada, lesión fuera de esa región, como predice la casa de Lichtheim.",
      "¿Cuál es una limitación de la clasificación clásica de las afasias?|Muchos pacientes presentan formas mixtas|La repetición no puede explorarse bien|La fluidez no se relaciona con la lesión|Además, el cuadro cambia con el tiempo y la relación síndrome-lesión es solo una tendencia."
    ],
    inc: [
      "Sobre la clasificación de las afasias|La afasia anómica tiene la repetición alterada|La global altera fluidez, comprensión y repetición|La transcortical motora conserva la repetición|En la anómica se conservan fluidez, comprensión y repetición. El problema central es la anomia."
    ],
    seq: [],
    cls: [
      "Repetición|Alterada: Broca; Wernicke; conducción; global|Conservada: transcortical motora; transcortical sensorial; transcortical mixta; anómica"
    ] },
  { t: "Afasias de Broca, de Wernicke y de conducción",
    tip: "Las tres son perisilvianas y tienen la repetición alterada. La de Broca es no fluida y agramatical, falla con la sintaxis compleja y el paciente es consciente del déficit. La de Wernicke es fluida, con parafasias, neologismos, comprensión alterada y anosognosia. La de conducción tiene una repetición muy alterada con conducta de aproximación, y hoy se asocia a daño cortical en el área Spt y la supramarginal.",
    v: [
      "Agramatismo=Omisión de palabras funcionales y de terminaciones verbales",
      "Habla telegráfica=Discurso con sustantivos y verbos principales, sin palabras funcionales",
      "Parafasia semántica=Sustitución por una palabra relacionada en significado, como tenedor por cuchillo",
      "Parafasia fonémica=Cambio de sonidos dentro de la palabra, como «lápid» por «lápiz»",
      "Neologismo=Palabra inexistente producida en el habla afásica",
      "Jergafasia=Discurso fluido incomprensible por la abundancia de parafasias y neologismos",
      "Anosognosia=Falta de conciencia del propio déficit, típica de la afasia de Wernicke",
      "Conducta de aproximación=Intentos sucesivos de corregir un error hasta acercarse a la palabra correcta"
    ],
    g: [
      "En la afasia de Broca es frecuente la hemiparesia ___ por la proximidad de la corteza motora.|derecha|izquierda|bilateral",
      "En la afasia de conducción, la repetición empeora con frases largas y con ___.|pseudopalabras|palabras concretas|nombres propios",
      "Hoy la afasia de conducción se asocia a daño cortical en el área Spt y la circunvolución ___.|supramarginal|frontal inferior|temporal media",
      "Ante «el perro es perseguido por el gato», el paciente con afasia de Broca puede entender que el perro persigue porque se guía por el ___.|orden de las palabras|tono de la frase|significado léxico",
      "Cuando las parafasias son muy abundantes, el discurso de la afasia de Wernicke se convierte en ___.|jergafasia|ecolalia|agramatismo"
    ],
    tf: [
      "El paciente con afasia de Broca suele ser consciente de su déficit.|V",
      "La anosognosia es un rasgo típico de la afasia de Broca.|F|Es una trampa típica: la anosognosia caracteriza a la afasia de Wernicke. El paciente con afasia de Broca suele ser consciente.",
      "En la afasia de Broca se conserva la comprensión de la sintaxis compleja.|F|La comprensión cotidiana es relativamente buena, pero falla con la sintaxis compleja.",
      "La afasia de conducción encaja con un fallo de la vía dorsal.|V"
    ],
    q: [
      "Un hombre dice «Ayer… hijo… médico… bien», con mucho esfuerzo, y se frustra al no lograr expresarse. ¿Qué afasia es más probable?|De Broca|De conducción|Transcortical motora|El agramatismo con habla telegráfica y conciencia del déficit es típico de Broca. La transcortical motora destaca por iniciar poco el habla.",
      "Al intentar decir «plátano», un paciente produce «pa… pla… plata… plátano». ¿Cómo se llama esta conducta?|Conducta de aproximación|Conducta de utilización|Ecolalia diferida|Es típica de la afasia de conducción: el paciente detecta sus errores fonémicos e intenta corregirlos.",
      "¿Qué rasgo distingue la afasia de Wernicke de la de conducción?|La comprensión alterada|La repetición alterada|El habla fluida|Ambas son fluidas y tienen la repetición alterada, pero solo en la de Wernicke está alterada la comprensión.",
      "¿Qué explicación clásica dieron Wernicke y Geschwind a la afasia de conducción?|Desconexión del fascículo arqueado|Lesión del área de Broca|Aislamiento del área del lenguaje|Hoy se discute: se asocia con frecuencia a daño cortical en el área Spt y la supramarginal."
    ],
    inc: [
      "Sobre la afasia de Wernicke|El paciente suele ser muy consciente de su déficit|El habla es fluida pero con poco contenido|La comprensión está alterada, a veces gravemente|Un rasgo decisivo es la anosognosia: el paciente no es consciente de que su habla no tiene sentido."
    ],
    seq: [],
    cls: [
      "Afasia perisilviana|Broca: agramatismo; habla telegráfica; hemiparesia derecha|Wernicke: jergafasia; anosognosia; neologismos|Conducción: conducta de aproximación; lesión supramarginal y Spt; repetición muy alterada"
    ] },
  { t: "Afasias transcorticales, global y anómica",
    tip: "Las transcorticales conservan la repetición y suelen deberse a lesiones fuera de la región perisilviana, a menudo en territorios frontera. La motora inicia poco el habla, la sensorial muestra ecolalia sin comprensión y la mixta aísla el área del lenguaje. La global es la más grave y la anómica, la más leve y menos localizadora. También hay afasias subcorticales y la alexia pura sin agrafia de Déjerine.",
    v: [
      "Transcortical motora=Inicia poco el habla, repite bien y comprende de forma relativamente adecuada",
      "Transcortical sensorial=Habla fluida, comprensión alterada, repetición conservada y ecolalia",
      "Transcortical mixta=Aislamiento del área del lenguaje, con ecolalia y habla espontánea pobre",
      "Ecolalia=Repetición automática de lo que se oye, incluso preguntas, sin entenderlo",
      "Afasia global=Forma más grave, con todos los dominios alterados por una lesión perisilviana extensa",
      "Circunloquio=Rodeo descriptivo que sustituye a la palabra que no se encuentra",
      "Alexia pura sin agrafia=El paciente escribe con normalidad pero no lee lo que acaba de escribir",
      "Territorios frontera=Zonas entre arterias cerebrales donde suelen situarse las lesiones transcorticales"
    ],
    g: [
      "La alexia pura sin agrafia fue descrita por ___.|Déjerine|Lichtheim|Geschwind",
      "La afasia transcortical motora se debe a una lesión anterior o ___ al área de Broca.|superior|inferior|posterior",
      "La afasia ___ es una forma habitual de evolución de otras afasias con la recuperación.|anómica|global|mixta",
      "Las lesiones del tálamo y de los ___ izquierdos también pueden producir afasia.|ganglios basales|cuerpos mamilares|núcleos del rafe",
      "En la afasia global pueden conservarse algunas expresiones ___, como series aprendidas o fórmulas sociales.|automáticas|abstractas|complejas"
    ],
    tf: [
      "La transcortical sensorial y la de conducción comparten una comprensión conservada.|F|La transcortical sensorial tiene la comprensión alterada y la repetición conservada, al revés que la de conducción.",
      "La afasia anómica es la menos localizadora de las afasias.|V",
      "La alexia pura sin agrafia se interpreta como un síndrome de desconexión.|V",
      "Las lesiones del tálamo y de los ganglios basales no producen afasia, porque el lenguaje es solo cortical.|F|Pueden producirla, con cuadros variables. El lenguaje depende de redes que incluyen estructuras profundas."
    ],
    q: [
      "Al preguntarle «¿cómo se llama usted?», una paciente responde «¿cómo se llama usted?» y no sigue órdenes sencillas, aunque habla con fluidez. ¿Qué afasia es más probable?|Transcortical sensorial|De conducción|Transcortical motora|Ecolalia sin comprensión con habla fluida. En la de conducción la comprensión es buena y la repetición, muy mala.",
      "Un paciente con habla espontánea muy pobre, comprensión alterada y repetición conservada con ecolalia presenta…|aislamiento del área del lenguaje|lesión perisilviana extensa|lesión temporal superior aislada|Es la transcortical mixta: las regiones perisilvianas quedan sanas, pero desconectadas del resto de la corteza.",
      "Una mujer recuperada de un ictus habla con fluidez, comprende y repite bien, pero dice «eso que sirve para abrir las puertas» en vez de «llave». ¿Qué afasia presenta?|Anómica|Transcortical motora|De conducción|Los circunloquios con fluidez, comprensión y repetición conservadas definen la afasia anómica.",
      "Un paciente escribe una nota con normalidad, pero no puede leerla después. ¿Qué cuadro presenta?|Alexia pura sin agrafia|Agrafia sin alexia|Afasia transcortical mixta|La información visual no llega a las regiones del lenguaje izquierdas, que siguen funcionando para escribir."
    ],
    inc: [
      "Sobre las afasias transcorticales|Tienen la repetición alterada|Suelen respetar la región perisilviana|La mixta combina la motora y la sensorial|Su rasgo común es la repetición conservada, a veces sorprendentemente buena."
    ],
    seq: [],
    cls: [
      "Afasia y lesión típica|Transcortical motora: frontal anterior o superior a Broca|Transcortical sensorial: temporoparietal posterior|Global: lesión perisilviana extensa"
    ] },
  { t: "Más allá del modelo clásico: afasia progresiva primaria y nuevas técnicas",
    tip: "La afasia progresiva primaria es un síndrome neurodegenerativo en el que el lenguaje se deteriora de forma lenta y es al principio el déficit principal. Gorno-Tempini et al. (2011) distinguen las variantes agramatical, semántica y logopénica. El mapeo lesión-síntoma, la tractografía, las interfaces cerebro-ordenador y la estimulación no invasiva describen el lenguaje como redes solapadas. La rehabilitación sigue basándose en la logopedia.",
    v: [
      "Afasia progresiva primaria=Síndrome neurodegenerativo con deterioro lento y predominante del lenguaje",
      "Variante agramatical=Habla con esfuerzo y agramatismo, con afectación frontal inferior posterior e ínsula",
      "Variante semántica=Pérdida del significado de las palabras con habla fluida y afectación temporal anterior",
      "Variante logopénica=Pausas para encontrar palabras y mala repetición de frases, temporoparietal izquierda",
      "Gorno-Tempini et al. (2011)=Establecieron la clasificación de referencia de la APP en tres variantes",
      "Mapeo lesión-síntoma=Comparación vóxel a vóxel de lesiones y puntuaciones de muchos pacientes",
      "Tractografía=Reconstrucción de los haces de sustancia blanca con RM de difusión",
      "Interfaz cerebro-ordenador=Sistema que decodifica en palabras la actividad cortical de quien perdió el habla"
    ],
    g: [
      "La variante ___ de la APP se relaciona con el fallo de la vía dorsal y de la memoria fonológica a corto plazo.|logopénica|semántica|agramatical",
      "En la variante semántica, la región más afectada es el lóbulo temporal ___.|anterior|posterior|medial",
      "La estimulación magnética transcraneal se ensaya como complemento de la ___.|logopedia|farmacología|neurocirugía",
      "Las interfaces cerebro-ordenador todavía se limitan a estudios con muy ___ pacientes.|pocos|jóvenes|graves",
      "A diferencia de las afasias clásicas, la APP no se debe a una lesión de aparición ___.|brusca|lenta|tardía"
    ],
    tf: [
      "Una persona con la variante semántica puede leer en voz alta «ardilla» sin saber qué es.|V",
      "La variante logopénica se caracteriza por la pérdida del significado de las palabras.|F|Eso define la variante semántica. La logopénica muestra pausas para encontrar palabras y mala repetición de frases.",
      "La eficacia de la estimulación cerebral no invasiva en la afasia ya está demostrada.|F|Se ensaya como complemento de la logopedia, pero su eficacia aún se está evaluando.",
      "La recuperación de una afasia depende también de qué conexiones quedan y de cuánto se reorganiza la red.|V"
    ],
    q: [
      "Una mujer pierde en dos años el significado de palabras comunes y llama «una cosa» a un animal con cola y pelo, aunque habla con fluidez. ¿Qué variante de APP es más probable?|Semántica|Logopénica|Agramatical|La variante semántica separa significado y forma de las palabras, con habla fluida y afectación temporal anterior.",
      "¿Qué aporta el mapeo lesión-síntoma basado en vóxeles?|Ligar regiones a déficits sin síndromes previos|Reconstruir los haces de sustancia blanca|Decodificar la actividad cortical en palabras|Compara punto a punto las lesiones de muchos pacientes con sus puntuaciones, sin partir de síndromes predefinidos.",
      "¿Qué variante de APP recuerda a una afasia de Broca que avanza con los meses?|Agramatical|Logopénica|Semántica|Cursa con habla con esfuerzo, agramatismo y errores de articulación, con afectación frontal inferior posterior.",
      "¿Por qué conviene un diagnóstico precoz de la APP?|Orienta el pronóstico y la intervención|Permite revertir la neurodegeneración|Evita que aparezca la anomia|Sus primeros síntomas pueden confundirse con problemas de memoria, de ánimo o de audición."
    ],
    inc: [
      "Sobre la afasia progresiva primaria|Se debe a un ictus en la cerebral media|Tiene tres variantes según Gorno-Tempini|Sus primeros síntomas pueden confundirse con otros|Es un síndrome neurodegenerativo de evolución lenta, no una lesión brusca como un ictus."
    ],
    seq: [],
    cls: [
      "Variante de APP|Agramatical: agramatismo; frontal inferior posterior e ínsula|Semántica: pérdida del significado; temporal anterior|Logopénica: pausas y mala repetición; temporoparietal izquierda"
    ] }
] },
{ n: 7, t: "Funciones ejecutivas y corteza prefrontal", cap: 3, pir: "alta", mods: [
  { t: "Qué son las funciones ejecutivas: de Luria a Miyake",
    tip: "Las funciones ejecutivas son procesos de control que dirigen la conducta hacia metas, sobre todo en situaciones nuevas. Miyake et al. (2000) hallaron actualización, cambio e inhibición, correlacionadas pero separables. Friedman y Miyake (2017) proponen un factor común, que absorbe casi toda la inhibición, más factores específicos. Diamond (2013), en cambio, sitúa la inhibición en el núcleo junto a la memoria de trabajo y la flexibilidad.",
    v: [
      "Funciones ejecutivas=Procesos de control que guían la conducta hacia metas en situaciones nuevas",
      "Ejecutivo central=Componente que controla los subsistemas de la memoria de trabajo",
      "Stuss y Benson=Integraron los datos clínicos sobre los lóbulos frontales",
      "Lezak (1982)=Acuñó el término en la neuropsicología clínica",
      "Diamond (2013)=Núcleo de inhibición, memoria de trabajo y flexibilidad cognitiva",
      "Actualización=Renovar el contenido de la memoria de trabajo",
      "Cambio=Alternar entre tareas o reglas",
      "Factor común=Capacidad de mantener activa la meta, que absorbe casi toda la inhibición"
    ],
    g: [
      "Miyake et al. (2000) aplicaron una batería de tareas a ___ estudiantes.|137|669|90",
      "Para Luria, la ___ unidad funcional, frontal, programa, regula y verifica la actividad.|tercera|primera|segunda",
      "Para Friedman y Miyake (2017), la ___ se solapa casi por completo con el factor común.|inhibición|actualización|flexibilidad",
      "Diamond (2013) incluye en su núcleo la inhibición, la memoria de trabajo y la flexibilidad ___.|cognitiva|emocional|motora",
      "El término «funciones ejecutivas» lo acuñó ___ en 1982.|Lezak|Luria|Fuster"
    ],
    tf: [
      "Atarse los zapatos es una conducta que exige funciones ejecutivas.|F|No son necesarias para lo rutinario, sino para lo nuevo o cuando la respuesta habitual no sirve.",
      "Miyake et al. (2000) hallaron tres funciones correlacionadas, pero separables.|V",
      "Diamond (2013) considera la planificación y el razonamiento funciones de orden superior.|V",
      "En Friedman y Miyake (2017), la inhibición conserva mucha varianza propia tras descontar el factor común.|F|No queda varianza propia de la inhibición una vez descontado lo compartido."
    ],
    q: [
      "Alguien cocina una receta nueva mientras atiende una llamada y no echa sal por costumbre, porque la receta no la lleva. ¿Qué función ilustra este último detalle?|Inhibición|Actualización|Cambio|Frenar una respuesta dominante es inhibición. Recordar el siguiente ingrediente sería actualización.",
      "¿En qué difieren sobre todo Diamond (2013) y Friedman y Miyake (2017)?|En el estatus de la inhibición|En el papel de la memoria de trabajo|En el número de funciones superiores|Para Diamond es un componente central, y para Friedman y Miyake, casi indistinguible del factor común.",
      "¿Quiénes propusieron el ejecutivo central que controla los subsistemas de la memoria de trabajo?|Baddeley y Hitch|Norman y Shallice|Stuss y Benson|Norman y Shallice propusieron el sistema atencional supervisor, y Stuss y Benson integraron datos clínicos frontales.",
      "¿Cómo se interpreta el factor común del modelo de unidad y diversidad?|Mantener activa la meta para guiar la conducta|Alternar con rapidez entre reglas distintas|Renovar el contenido de la memoria de trabajo|Alternar es el factor específico de cambio y renovar, el de actualización."
    ],
    inc: [
      "Sobre el modelo de unidad y diversidad|Las tres funciones de Miyake son independientes|Hay factores específicos de actualización y cambio|El rendimiento depende de un factor común y otro específico|Están correlacionadas pero son separables: comparten algo común y cada una conserva algo propio."
    ],
    seq: [],
    cls: [
      "Autor y aportación|Luria: tres unidades funcionales; unidad frontal que programa y verifica|Fuster: ciclo percepción-acción; organización temporal de la conducta|Norman y Shallice: sistema atencional supervisor; control ante rutinas insuficientes"
    ] },
  { t: "Por qué importan y cómo se evalúan",
    tip: "Las funciones ejecutivas predicen el rendimiento académico y la salud, y se alteran en el TDAH, la esquizofrenia, las adicciones, la demencia frontotemporal y el TCE. Se evalúan con WCST, Stroop, Torre de Londres, fluidez verbal, Trail Making B, Go/No-go y n-back. Dos problemas limitan la evaluación: la impureza de las tareas y la escasa validez ecológica, que ilustra el paciente EVR.",
    v: [
      "WCST=Clasificar tarjetas según una regla oculta que cambia sin aviso",
      "Fluidez verbal=Decir en un minuto palabras que empiecen por una letra",
      "Torre de Londres=Alcanzar una configuración de piezas en el mínimo de movimientos",
      "Trail Making Test B=Unir números y letras alternándolos",
      "Go/No-go=Responder a un estímulo y frenar la respuesta ante otro",
      "N-back=Indicar si el estímulo actual coincide con el de n posiciones atrás",
      "Impureza de las tareas=Ninguna prueba mide una sola función sin implicar otros procesos",
      "Validez ecológica=Grado en que el resultado de una prueba refleja el funcionamiento cotidiano"
    ],
    g: [
      "En el WCST se registran sobre todo las respuestas ___.|perseverativas|anticipatorias|desinhibidas",
      "La fluidez verbal valora la generación de respuestas y la búsqueda ___.|organizada|aleatoria|automática",
      "En las pruebas, el ___ hace buena parte del trabajo ejecutivo al estructurar la tarea.|examinador|paciente|cuestionario",
      "El caso del paciente EVR lo describieron Eslinger y Damasio en ___.|1985|1994|2000",
      "En el traumatismo craneoencefálico, los lóbulos ___ son especialmente vulnerables.|frontales|occipitales|parietales"
    ],
    tf: [
      "Un paciente puede decir que la regla del WCST ha cambiado y seguir aplicándola.|V",
      "Unos resultados normales en las pruebas ejecutivas garantizan una buena organización de la vida diaria.|F|Hay pacientes, como EVR, con pruebas normales y una vida diaria desorganizada: es el problema de la validez ecológica.",
      "El Stroop mide de forma pura la inhibición.|F|Ninguna tarea es pura: el Stroop exige también leer, percibir colores, hablar y mantener la instrucción.",
      "Las funciones ejecutivas predicen el rendimiento académico y diversos indicadores de salud.|V"
    ],
    q: [
      "Tras un TCE, un hombre puntúa normal en las pruebas, pero su pareja cuenta que deja la comida en el fuego y ya no planifica la compra. ¿Qué problema de evaluación ilustra?|Validez ecológica|Impureza de las tareas|Efecto techo|El examinador estructura la tarea y hace parte del trabajo ejecutivo. Las quejas de la familia son aquí el dato más valioso.",
      "¿Qué prueba valora sobre todo la planificación?|Torre de Londres|Trail Making Test B|Fluidez verbal|El Trail Making B valora el cambio entre series, y la fluidez verbal, la generación de respuestas.",
      "¿Por qué los estudios como el de Miyake usan varias tareas por función?|Para afrontar la impureza de las tareas|Para mejorar la validez ecológica|Para reducir el tiempo de aplicación|Extraen lo común a varias tareas con análisis factoriales, porque ninguna mide una sola función.",
      "¿Qué prueba valora la actualización de la memoria de trabajo?|N-back|Go/No-go|Stroop|Go/No-go y Stroop valoran la inhibición de respuesta."
    ],
    inc: [
      "Sobre las pruebas ejecutivas|El Go/No-go valora sobre todo la planificación|El Trail Making Test B valora el cambio entre series|El WCST registra respuestas perseverativas|El Go/No-go valora la inhibición de respuesta. La planificación se evalúa con la Torre de Londres o de Hanói."
    ],
    seq: [],
    cls: [
      "Prueba y función|Inhibición: Stroop; Go/No-go|Flexibilidad o cambio: WCST; Trail Making Test B|Planificación: Torre de Londres; Torre de Hanói"
    ] },
  { t: "Divisiones prefrontales y circuitos frontoestriatales",
    tip: "La corteza prefrontal es una corteza de asociación supramodal con divisiones dorsolateral, orbitofrontal, ventromedial y cingulada anterior. Alexander, DeLong y Strick (1986) describieron cinco circuitos paralelos corteza, estriado, pálido o sustancia negra, tálamo y corteza, tres de ellos prefrontales. Una lesión en cualquier punto del bucle, como en el Parkinson o en un infarto del caudado, puede dar síntomas frontales.",
    v: [
      "Corteza prefrontal=Parte más anterior del lóbulo frontal, de asociación supramodal",
      "Asociación supramodal=Procesa información ya elaborada por otras regiones, no la de un solo sentido",
      "CPF dorsolateral=División ligada a memoria de trabajo, planificación y flexibilidad",
      "CPF orbitofrontal=División ligada a conducta social, inhibición y valor de las recompensas",
      "CPF ventromedial=División ligada a decisiones con valor emocional y al marcador somático",
      "Circuito motor=Bucle que parte de la corteza motora y premotora y controla el cuerpo",
      "Circuitos frontoestriatales=Bucles paralelos que salen de la corteza frontal y vuelven a ella por el tálamo",
      "Ganglios basales=Seleccionan acciones y asumen las conductas automatizadas"
    ],
    g: [
      "Alexander, DeLong y Strick describieron en 1986 ___ circuitos paralelos.|cinco|tres|siete",
      "El circuito ___ parte de los campos oculares frontales.|oculomotor|motor|dorsolateral",
      "El circuito del cingulado anterior se relaciona con la motivación y la ___.|iniciativa|inhibición|planificación",
      "Algunos infartos del núcleo ___ o del tálamo dan síntomas que parecen frontales.|caudado|rojo|subtalámico",
      "Las conexiones ___ con la parietal posterior son importantes para la atención y la memoria de trabajo.|frontoparietales|frontoestriatales|frontotemporales"
    ],
    tf: [
      "Una lesión subcortical no puede producir síntomas de tipo frontal.|F|Es una trampa típica: una lesión en cualquier punto del bucle, como el caudado o el tálamo, puede dar un síndrome parecido al frontal.",
      "La enfermedad de Parkinson puede producir alteraciones ejecutivas por afectar a los ganglios basales.|V",
      "El circuito orbitofrontal lateral interviene en la conducta social y la inhibición.|V",
      "Los circuitos frontoestriatales parten de la corteza frontal y terminan en el cerebelo.|F|Son bucles cerrados que pasan por estriado, pálido o sustancia negra y tálamo, y vuelven a la región cortical de origen."
    ],
    q: [
      "Un conductor hace a diario la misma ruta de forma automática, pero el día que cortan una calle necesita buscar una alternativa. ¿Qué estructura vuelve a ser necesaria?|La corteza prefrontal|Los ganglios basales|El cerebelo|La ruta habitual se apoya en los ganglios basales, pero lo nuevo requiere de nuevo el control prefrontal.",
      "¿Cuáles son los circuitos prefrontales de Alexander, DeLong y Strick?|Dorsolateral, orbitofrontal lateral y cingulado|Motor, oculomotor y dorsolateral prefrontal|Orbitofrontal, ventromedial y cingulado|Los otros dos de los cinco circuitos son el motor y el oculomotor.",
      "¿Qué división prefrontal se asocia sobre todo a la monitorización del conflicto y de los errores?|Cingulada anterior|Orbitofrontal lateral|Ventromedial|La cingulada anterior monitoriza conflicto y errores y se relaciona con la motivación.",
      "¿Por qué la enfermedad de Huntington produce alteraciones ejecutivas?|Daña un punto de los bucles frontoestriatales|Destruye directamente la CPF dorsolateral|Interrumpe las conexiones frontoparietales|Afecta a los ganglios basales, y una lesión en cualquier punto del bucle puede dar síntomas frontales."
    ],
    inc: [
      "Sobre la corteza prefrontal|Procesa directamente los estímulos de un solo sentido|Mantiene conexiones recíprocas con casi todo el cerebro|Sus divisiones ventromedial y orbitofrontal se solapan|Es una corteza de asociación supramodal: trabaja con información ya elaborada por otras regiones."
    ],
    seq: [
      "Recorrido de un circuito frontoestriatal|Región cortical frontal de origen>Estriado>Globo pálido o sustancia negra>Tálamo>Vuelta a la región cortical de origen"
    ],
    cls: [] },
  { t: "Síndromes frontales y el caso de Phineas Gage",
    tip: "El daño prefrontal produce tres síndromes que a menudo se combinan: disejecutivo o dorsolateral, orbitofrontal y cingulado o mesial. La apatía corresponde al cingulado, y la desinhibición, al orbitofrontal. Phineas Gage cambió de personalidad tras su accidente de 1848, pero Macmillan y Lena (2010) hallaron indicios de recuperación social. EVR, con lesión ventromedial y CI normal, tomaba decisiones vitales desastrosas.",
    v: [
      "Síndrome disejecutivo=Término de Baddeley y Wilson (1988) para los déficits ejecutivos tras daño frontal",
      "Síndrome orbitofrontal=Desinhibición, impulsividad, conducta social inapropiada y euforia",
      "Síndrome cingulado=Apatía, abulia y, en casos graves, mutismo acinético",
      "Mutismo acinético=Vigilia con seguimiento visual, pero casi sin movimiento ni habla",
      "Conducta de utilización=Coger y usar cualquier objeto al alcance sin instrucción alguna",
      "John Harlow=Médico que describió el caso de Gage en 1848 y 1868",
      "Macmillan y Lena (2010)=Reunieron indicios de la recuperación social de Phineas Gage",
      "Paciente EVR=Caso con lesión ventromedial, CI normal y decisiones vitales desastrosas"
    ],
    g: [
      "Damasio et al. (___) concluyeron que el daño de Gage afectó sobre todo a la CPF ventromedial.|1994|1985|2010",
      "Gage trabajó durante años como conductor de diligencias en ___.|Chile|México|Perú",
      "El paciente dorsolateral muestra perseveración, planificación pobre, rigidez y apatía ___.|cognitiva|afectiva|motora",
      "El paciente orbitofrontal ___ a menudo el rendimiento en las pruebas.|conserva|pierde|mejora",
      "EVR sufrió una lesión ventromedial tras la extirpación de un ___.|tumor|aneurisma|quiste"
    ],
    tf: [
      "La apatía y la abulia son propias del síndrome orbitofrontal.|F|Es una trampa típica: apatía y abulia caracterizan al síndrome cingulado o mesial. El orbitofrontal cursa con desinhibición.",
      "En la práctica, los síndromes frontales aparecen a menudo combinados.|V",
      "Las reconstrucciones posteriores del daño de Gage subrayan también la lesión de la sustancia blanca.|V",
      "Macmillan y Lena (2010) confirmaron que Gage quedó incapacitado para cualquier trabajo.|F|Hallaron indicios de recuperación social: trabajó años como conductor de diligencias en Chile."
    ],
    q: [
      "Durante una exploración, un paciente se pone unas gafas que el examinador ha dejado en la mesa, aunque ya lleva las suyas. ¿Qué signo muestra?|Conducta de utilización|Conducta de aproximación|Perseveración motora|Su conducta queda capturada por el entorno en lugar de guiarse por metas propias, un signo prefrontal.",
      "Tras un tumor en la cara medial frontal, una mujer está despierta y sigue con la mirada, pero apenas habla ni se mueve. ¿Qué cuadro presenta?|Mutismo acinético|Síndrome disejecutivo|Afasia transcortical motora|Es la forma grave del síndrome cingulado o mesial, con ausencia casi total de habla y movimiento espontáneos.",
      "¿Qué región se asocia con desinhibición, impulsividad y euforia?|Orbitofrontal|Cingulada anterior|Dorsolateral|El síndrome cingulado cursa con apatía, y el dorsolateral, con perseveración y planificación pobre.",
      "¿Qué enseña el caso de Phineas Gage tras la revisión de Macmillan y Lena?|Papel de la CPF y posibilidad de recuperarse|Una psicopatía permanente tras el daño frontal|Que la barra respetó la corteza prefrontal|Gage muestra el papel de la CPF en la conducta social y, a la vez, que hubo recuperación. Su degeneración se exageró."
    ],
    inc: [
      "Sobre Phineas Gage|Se convirtió para siempre en un psicópata|Harlow describió cambios de personalidad|Damasio et al. reconstruyeron la trayectoria|Es un mito: trabajó años como conductor de diligencias en Chile, y los relatos de su degeneración se exageraron."
    ],
    seq: [],
    cls: [
      "Síndrome frontal|Dorsolateral: perseveración; planificación pobre; rigidez|Orbitofrontal: desinhibición; impulsividad; euforia|Cingulado: apatía; abulia; mutismo acinético"
    ] }
] },
{ n: 8, t: "Teorías biológicas de la emoción", cap: 4, pir: "alta", mods: [
  { t: "Qué es una emoción y por qué estudiar su base cerebral",
    tip: "Una emoción es una respuesta breve y organizada ante algo relevante, con componentes fisiológico, expresivo, conductual y subjetivo que pueden disociarse. El sentimiento es solo su componente subjetivo, y el estado de ánimo, un tono más difuso y duradero. Estudiar su base cerebral importa para la psicopatología, la toma de decisiones, como muestra EVR, y la salud.",
    v: [
      "Emoción=Respuesta breve y multicomponente ante una situación relevante para el organismo",
      "Sentimiento=Experiencia subjetiva y consciente de una emoción",
      "Estado de ánimo=Tono afectivo difuso, duradero y poco intenso, a menudo sin desencadenante claro",
      "Componente fisiológico=Cambios autónomos y endocrinos como pulso, sudoración o cortisol",
      "Componente expresivo=Gestos faciales, tono de voz y postura",
      "Componente conductual=Tendencias de acción como huir, acercarse o quedarse inmóvil",
      "Componente subjetivo=Experiencia consciente, estudiada con autoinformes y escalas",
      "Registro psicofisiológico=Medida de los cambios autónomos que acompañan a la emoción"
    ],
    g: [
      "Estar «de bajón» toda la semana es un ___, y asustarse con un portazo, una emoción.|estado de ánimo|rasgo afectivo|sentimiento",
      "Los estudios sólidos combinan varias ___, porque los componentes no siempre van a la par.|medidas|teorías|especies",
      "La respuesta de estrés conecta la emoción con el sistema endocrino y el ___.|inmunitario|somatosensorial|vestibular",
      "La depresión y los trastornos de ansiedad son, en gran parte, alteraciones de la emoción y de su ___.|regulación|expresión|percepción",
      "Una emoción es una respuesta ___ ante una situación relevante para las metas o el bienestar.|breve|duradera|difusa"
    ],
    tf: [
      "El sentimiento es la respuesta emocional completa, con sus cambios corporales y conductuales.|F|El sentimiento es solo el componente subjetivo y consciente de la emoción.",
      "Se puede tener el pulso disparado antes de un examen sin saber decir qué se siente.|V",
      "El estado de ánimo es más intenso y breve que la emoción.|F|Es al revés: el estado de ánimo es más difuso, duradero y de menor intensidad.",
      "El caso EVR muestra que las emociones no son un estorbo para la razón.|V"
    ],
    q: [
      "Un perro grande corre hacia usted: se le acelera el corazón, abre mucho los ojos, da un paso atrás y piensa «me va a morder». ¿Qué componente corresponde al paso atrás?|Conductual|Expresivo|Fisiológico|Es una tendencia de acción. Abrir los ojos sería expresivo, y el corazón acelerado, fisiológico.",
      "Ante una teoría que afirma que «la emoción es X», ¿qué conviene preguntarse?|A qué componente se refiere|Qué estructura la produce|Cuánto dura la respuesta|Como la emoción tiene varios componentes que pueden disociarse, hay que saber de cuál habla la teoría.",
      "¿Cómo se estudia sobre todo el componente subjetivo de la emoción?|Con autoinformes y escalas|Con registros hormonales|Con codificación facial|Los registros hormonales miden el componente fisiológico, y la codificación facial, el expresivo.",
      "¿Por qué importa distinguir emoción y sentimiento para el debate actual sobre el miedo?|Porque se discute si comparten circuitos|Porque el sentimiento no tiene base cerebral|Porque la emoción carece de componente corporal|El debate gira en torno a si los circuitos de la respuesta corporal son los mismos que generan el sentimiento."
    ],
    inc: [
      "Sobre los componentes de la emoción|Siempre van a la par en cualquier emoción|Incluyen cambios autónomos y endocrinos|Incluyen tendencias de acción como huir|Suelen aparecer juntos, pero no siempre van a la par: pueden disociarse."
    ],
    seq: [],
    cls: [
      "Término afectivo|Emoción: desencadenante concreto; breve; multicomponente|Sentimiento: experiencia subjetiva; consciente|Estado de ánimo: difuso; duradero; poco intenso"
    ] },
  { t: "Del cuerpo a la experiencia: James-Lange y Cannon-Bard",
    tip: "Para James-Lange, el estímulo provoca cambios corporales y la percepción de esos cambios es la emoción. Cannon criticó que las vísceras son lentas, poco específicas y que separarlas no elimina la emoción, y propuso que el tálamo envía la señal en paralelo a corteza y cuerpo. Bard describió la falsa rabia. Ninguna se sostiene tal cual, y la retroalimentación facial tiene un apoyo modesto.",
    v: [
      "Teoría de James-Lange=La emoción es la percepción de los cambios corporales provocados por el estímulo",
      "Teoría de Cannon-Bard=El tálamo activa en paralelo la experiencia y la respuesta corporal",
      "Falsa rabia=Ataques de rabia ante estímulos mínimos en gatos sin corteza con hipotálamo intacto",
      "Philip Bard=Discípulo de Cannon que aportó la observación de la falsa rabia",
      "Retroalimentación facial=Hipótesis de que la propia expresión modula lo que se siente",
      "Many Smiles Collaboration=Estudio en 19 países que halló un efecto pequeño de posar una sonrisa",
      "Wagenmakers et al. (2016)=Registro multicéntrico que no replicó el efecto del bolígrafo en los dientes",
      "Carl Lange=Autor que en 1885 llegó de forma independiente a la tesis de James"
    ],
    g: [
      "William James propuso su teoría en ___.|1884|1885|1927",
      "Cannon situó la estructura que envía la señal en paralelo en el ___.|tálamo|hipotálamo|cerebelo",
      "Para Cannon, las vísceras son ___ y poco sensibles.|lentas|rápidas|específicas",
      "La falsa rabia aparecía en gatos sin corteza siempre que se conservara el ___.|hipotálamo|hipocampo|cerebelo",
      "La Many Smiles Collaboration halló un efecto ___ de posar una sonrisa sobre la felicidad autoinformada.|pequeño|nulo|grande"
    ],
    tf: [
      "Según Cannon-Bard, los cambios corporales causan la experiencia emocional.|F|Es una trampa típica: para Cannon-Bard el cuerpo es una consecuencia paralela, no la causa.",
      "James-Lange predice un patrón corporal propio para cada emoción.|V",
      "Una inyección de adrenalina basta para sentir una emoción genuina, como señaló Cannon.|F|Cannon argumentó lo contrario: provocar artificialmente los cambios viscerales no basta para sentir una emoción genuina.",
      "La Many Smiles Collaboration no halló efecto con la técnica del bolígrafo.|V"
    ],
    q: [
      "Al bajar del coche de noche oye un ruido, el corazón se le dispara y la toma de conciencia de ese corazón desbocado es su miedo. ¿Qué teoría describe esta secuencia?|James-Lange|Cannon-Bard|Schachter-Singer|El cambio corporal precede a la emoción, y la emoción es su percepción.",
      "¿Qué observación de Cannon apunta contra la especificidad corporal de cada emoción?|El pulso se acelera en miedo, ira y ejercicio|Las vísceras tardan más que la experiencia|Los gatos sin corteza muestran falsa rabia|Un patrón tan poco específico no permite distinguir el miedo de la ira.",
      "¿Qué mostraba la falsa rabia descrita por Bard?|Que la expresión es sobre todo subcortical|Que la corteza genera la expresión emocional|Que el tálamo es el centro de la emoción|La expresión dependía de estructuras subcorticales, con el hipotálamo intacto, y la corteza la mantenía bajo control.",
      "¿Qué queda hoy de la intuición de James?|La información corporal contribuye a la experiencia|Cada emoción tiene un patrón visceral propio|El tálamo dispara la emoción y el cuerpo a la vez|La recuperan Damasio y los construccionistas, aunque la teoría no se sostiene en su forma original."
    ],
    inc: [
      "Sobre James-Lange y Cannon-Bard|Cannon-Bard se sostiene tal cual en la actualidad|James-Lange sitúa el cuerpo antes de la emoción|Cannon criticó la lentitud de las vísceras|Ninguna se sostiene tal cual. El tálamo no es el centro de la emoción, y el hipotálamo y la amígdala son decisivos."
    ],
    seq: [],
    cls: [
      "Teoría|James-Lange: el cuerpo causa la emoción; patrones corporales específicos|Cannon-Bard: tálamo en paralelo; activación poco específica; falsa rabia"
    ] },
  { t: "Papez, MacLean y Schachter-Singer: aciertos y límites",
    tip: "Papez (1937) propuso un circuito que une hipotálamo y corteza, pero hoy se relaciona sobre todo con la memoria y no incluía la amígdala. MacLean añadió la amígdala y popularizó el sistema límbico, una etiqueta sin criterios claros, y después el cerebro trino, ya descartado. Schachter y Singer (1962) propusieron activación más etiqueta cognitiva, pero las réplicas fallaron y solo queda un efecto modesto de atribución errónea.",
    v: [
      "Circuito de Papez=Bucle propuesto en 1937 que hoy se relaciona sobre todo con la memoria",
      "Cuerpos mamilares=Estructuras hipotalámicas del circuito que reciben el fórnix",
      "Sistema límbico=Término de MacLean para las estructuras del borde medial de los hemisferios",
      "Cerebro trino=Teoría de MacLean (1990) de tres capas cerebrales, hoy descartada",
      "Teoría de los dos factores=Activación inespecífica más una etiqueta cognitiva según el contexto",
      "Atribución errónea=Interpretar la activación de un café o del ejercicio como nervios o atracción",
      "Reisenzein (1983)=Revisión con escasa evidencia de que la activación sea necesaria para la emoción",
      "Epinefrina=Sustancia inyectada como supuesta vitamina en el experimento de 1962"
    ],
    g: [
      "En el circuito de Papez, la corteza ___ devuelve la información al hipocampo.|entorrinal|cingulada|prefrontal",
      "MacLean añadió a la propuesta de Papez, entre otras estructuras, la ___.|amígdala|ínsula|corteza orbitaria",
      "Según la teoría de los dos factores, la activación determina la ___, y la etiqueta, la cualidad.|intensidad|duración|valencia",
      "Marshall y Zimbardo (1979) y ___ (1979) no replicaron la forma fuerte de la teoría.|Maslach|Reisenzein|Lindquist",
      "En el diseño de 1962, los participantes esperaban con un cómplice eufórico o ___.|enfadado|asustado|triste"
    ],
    tf: [
      "La amígdala formaba parte del circuito original de Papez.|F|Es una trampa típica: la amígdala no estaba en el circuito. La incorporó después MacLean.",
      "La mayor parte del circuito de Papez participa sobre todo en la memoria.|V",
      "Las réplicas posteriores demostraron la teoría de Schachter y Singer.|F|No replicaron su forma fuerte. Solo se mantiene un efecto modesto de atribución errónea de la activación.",
      "Ni todas las estructuras límbicas son emocionales ni toda la emoción es límbica.|V"
    ],
    q: [
      "Tras subir corriendo unas escaleras, un estudiante se encuentra con una compañera y atribuye su pulso acelerado a la atracción. ¿Qué fenómeno ilustra?|Atribución errónea de la activación|Retroalimentación facial positiva|Marcador somático anticipatorio|Es lo que se mantiene de Schachter y Singer: a veces interpretamos mal el origen de la activación.",
      "¿Cuál fue el principal acierto de Papez?|Proponer un circuito y no un centro|Situar la emoción en la amígdala|Descubrir la vía baja al tálamo|Unió estructuras subcorticales y corticales. Su error fue de contenido: el bucle es sobre todo de memoria.",
      "¿Qué crítica recibe el término «sistema límbico»?|No hay criterios claros de inclusión|Excluye el hipocampo y el fórnix|Se limita a estructuras corticales|Además, sus componentes cumplen funciones muy distintas, y la ínsula y la prefrontal son esenciales en la emoción.",
      "En el experimento de Schachter y Singer, ¿qué grupo debía «contagiarse» más del cómplice?|El activado sin explicación|El informado de los efectos|El que recibió placebo|Quien no tenía explicación para su activación debía etiquetarla según el cómplice eufórico o enfadado."
    ],
    inc: [
      "Sobre el circuito de Papez|Coincide con el sistema límbico de MacLean|Incluye el núcleo anterior del tálamo|Es un bucle que vuelve al hipocampo|Es otra trampa típica: MacLean amplió la propuesta de Papez y añadió otras estructuras, como la amígdala."
    ],
    seq: [
      "Circuito de Papez|Hipocampo>Fórnix>Cuerpos mamilares>Núcleo anterior del tálamo>Corteza cingulada>Corteza entorrinal"
    ],
    cls: [] },
  { t: "Modelos actuales: LeDoux, Damasio y la emoción construida",
    tip: "LeDoux describió una vía baja, del tálamo a la amígdala, y una vía alta cortical, y con Pine (2016) separó la respuesta defensiva del sentimiento consciente de miedo: la amígdala no «siente miedo». El marcador somático de Damasio se apoya en la Iowa Gambling Task, pero recibe críticas de peso. Frente a las emociones básicas de Panksepp, Barrett defiende la emoción construida, y el debate sigue abierto.",
    v: [
      "Vía baja=Ruta rápida y tosca del tálamo directamente a la amígdala",
      "Vía alta=Ruta más lenta y detallada hacia la amígdala que pasa por la corteza",
      "Modelo de dos sistemas=LeDoux y Pine (2016) separan la respuesta defensiva del sentimiento de miedo",
      "Marcador somático=Estado corporal asociado a una situación que sesga la decisión",
      "Bucle «como si»=Simulación cerebral del estado corporal sin pasar por el cuerpo",
      "Iowa Gambling Task=Elección entre mazos con ganancias y pérdidas ocultas",
      "Emoción construida=Teoría de Barrett que combina interocepción, conceptos y contexto",
      "Panksepp=Describió sistemas emocionales subcorticales como SEEKING, RAGE o FEAR"
    ],
    g: [
      "LeDoux estudió en ratas el condicionamiento de ___.|amenaza|evitación|recompensa",
      "Para Damasio, la corteza prefrontal ___ ligaría los marcadores somáticos a cada situación.|ventromedial|dorsolateral|cingulada",
      "El metaanálisis de Lindquist et al. (2012) reunió unos ___ estudios de neuroimagen.|90|137|14",
      "Según Maia y McClelland (2004), los participantes saben ___ de lo que se pensaba qué mazos son malos.|antes|más tarde|peor",
      "Fanselow y Pennington consideran el modelo de dos sistemas un ___ para la psiquiatría.|retroceso|avance|consenso"
    ],
    tf: [
      "Según LeDoux y Pine (2016), la amígdala genera el sentimiento consciente de miedo.|F|La amígdala detecta la amenaza y organiza respuestas defensivas. El sentimiento lo construyen circuitos corticales.",
      "Lindquist et al. (2012) hallaron que la amígdala, la ínsula y el cingulado se activan en muchas emociones distintas.|V",
      "Las respuestas anticipatorias de conductancia en la Iowa Gambling Task solo admiten la lectura del marcador somático.|F|Dunn et al. (2006) señalan que pueden reflejar simple expectativa, y el rendimiento se explica con aprendizaje por refuerzo.",
      "Bechara et al. (1994) hallaron que los pacientes ventromediales seguían eligiendo los mazos desventajosos.|V"
    ],
    q: [
      "Un excursionista salta hacia atrás al ver una manguera en el suelo, antes de comprobar que no es una serpiente. ¿Qué ruta explica la rapidez del salto?|Tálamo a amígdala directamente|Tálamo a corteza y luego amígdala|Corteza a hipotálamo directamente|Es la vía baja de LeDoux, rápida y tosca. La vía alta, que pasa por la corteza, es más lenta y detallada.",
      "Un fármaco reduce la congelación de ratas ante un tono asociado a descargas. Según LeDoux y Pine, ¿qué puede concluirse?|Que no alivia por fuerza el miedo humano|Que eliminará el miedo consciente humano|Que la amígdala siente miedo en la rata|Reducir la respuesta defensiva no implica aliviar el sentimiento consciente de miedo, que depende de otro sistema.",
      "¿Qué teoría explica que el mismo nudo en el estómago se viva como nervios o como ilusión?|La de la emoción construida|La de las emociones básicas|La de la vía baja de LeDoux|El cerebro combina sensaciones corporales con conceptos aprendidos y con el contexto.",
      "¿Cuál es una crítica de Dunn, Dalgleish y Lawrence (2006) al marcador somático?|El rendimiento se explica con aprendizaje por refuerzo|Los pacientes ventromediales eligen mazos ventajosos|La conductancia de la piel no cambia antes de elegir|También señalan que los participantes saben pronto qué mazos son malos y que la respuesta anticipatoria puede ser expectativa."
    ],
    inc: [
      "Sobre los modelos actuales de la emoción|Lindquist et al. localizaron cada emoción en una región|Panksepp defendió sistemas emocionales subcorticales|El marcador somático puede generarse por un bucle «como si»|Lindquist et al. (2012) no hallaron ninguna región específica de una emoción discreta."
    ],
    seq: [],
    cls: [
      "Postura sobre la emoción|Emociones básicas: Panksepp; sistemas SEEKING, RAGE o FEAR; circuitos propios heredados|Emoción construida: Barrett; interocepción y conceptos; Lindquist et al. (2012)"
    ] }
] }
);

// SAIMAP Psicología · Fisiológica · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Circuitos emocionales, estrés y trastornos afectivos", cap: 4, pir: "alta", mods: [
  { t: "Amígdala e hipotálamo: detectar la amenaza y movilizar el cuerpo",
    tip: "La amígdala recibe la información sensorial por el núcleo lateral, añade contexto y valor por el basal y organiza la respuesta por el central, que proyecta al hipotálamo lateral, a la sustancia gris periacueductal y al núcleo paraventricular. El hipotálamo integra las respuestas autónomas y endocrinas. La amígdala detecta posibles amenazas y moviliza el cuerpo, pero la paciente SM, sin amígdala, sintió pánico al inhalar CO₂.",
    v: [
      "Núcleo lateral=Entrada de la amígdala, donde se asocian tono y descarga en el condicionamiento",
      "Núcleo basal=Conecta con hipocampo y prefrontal y aporta el contexto y el valor de los estímulos",
      "Núcleo central=Salida de la amígdala hacia hipotálamo, sustancia gris periacueductal y eje HHA",
      "BNST=Núcleo del lecho de la estría terminal, ligado a la amenaza sostenida o impredecible",
      "Paciente SM=Lesión amigdalina bilateral por Urbach-Wiethe, sin miedo a serpientes ni arañas",
      "Síndrome de Klüver-Bucy=Mansedumbre, hiperoralidad, hipersexualidad y agnosia visual tras lesión temporal",
      "Walter Hess=Nobel de 1949 que evocó respuestas defensivas estimulando el hipotálamo de gatos",
      "Sustancia gris periacueductal=Destino del núcleo central que organiza la congelación"
    ],
    g: [
      "El núcleo central activa el sistema nervioso autónomo a través del hipotálamo ___.|lateral|anterior|posterior",
      "La congelación ante la amenaza la organiza la sustancia gris ___.|periacueductal|periventricular|perirrinal",
      "La lesión amigdalina de la paciente SM se debe a la enfermedad de ___.|Urbach-Wiethe|Huntington|Creutzfeldt-Jakob",
      "Al inhalar aire con un 35 % de ___, SM sufrió un ataque de pánico.|CO₂|oxígeno|nitrógeno",
      "El simpático libera adrenalina desde la ___ suprarrenal en cuestión de segundos.|médula|corteza|cápsula"
    ],
    tf: [
      "El núcleo lateral es la principal salida de la amígdala hacia el hipotálamo y la sustancia gris periacueductal.|F|El lateral es la entrada. La salida hacia hipotálamo, sustancia gris periacueductal y eje HHA es el núcleo central.",
      "La lesión de la amígdala impide que una rata aprenda a congelarse ante un tono asociado a una descarga.|V",
      "La paciente SM fue incapaz de sentir miedo incluso ante una amenaza interna como el CO₂ inhalado.|F|Sufrió miedo intenso y un ataque de pánico: una amenaza interna basta para producir miedo sin amígdala.",
      "Adolphs et al. (1994) observaron que SM no reconocía bien las expresiones faciales de miedo.|V"
    ],
    q: [
      "Un mono con una lesión temporal bilateral que incluye la amígdala se acerca sin temor a una serpiente, se lleva objetos a la boca, muestra hipersexualidad y no reconoce objetos por la vista. ¿Qué cuadro presenta?|Síndrome de Klüver-Bucy|Falsa rabia de Bard|Enfermedad de Urbach-Wiethe|Mansedumbre, hiperoralidad, hipersexualidad y agnosia visual tras lesión temporal bilateral definen el síndrome de Klüver-Bucy.",
      "¿Qué estructura se ha relacionado con la amenaza sostenida o impredecible, más próxima a la ansiedad?|El BNST|El núcleo lateral|El núcleo central|El núcleo del lecho de la estría terminal se asocia a la amenaza sostenida, frente al miedo puntual.",
      "¿Qué destino del núcleo central pone en marcha la liberación de cortisol?|El núcleo paraventricular|El hipotálamo lateral|La sustancia gris periacueductal|El paraventricular activa el eje HHA. El hipotálamo lateral activa el sistema autónomo y la sustancia gris, la congelación.",
      "Alguien se queda inmóvil con el corazón acelerado ante algo alargado en el sendero y enseguida ve que es una rama. ¿Qué ha hecho su amígdala?|Detectar la amenaza y movilizar el cuerpo|Generar la experiencia consciente de miedo|Identificar el objeto y frenar la respuesta|La amígdala detecta una posible amenaza. La corteza identifica la rama y la prefrontal frena la respuesta."
    ],
    inc: [
      "Sobre la amígdala y el hipotálamo|El núcleo central recibe la entrada sensorial del tálamo|El hipotálamo integra respuestas autónomas y endocrinas|El eje HHA es más lento que la vía simpática|La información sensorial del tálamo y la corteza llega al núcleo lateral. El central es la salida."
    ],
    seq: [],
    cls: [
      "Núcleo de la amígdala|Lateral: entrada sensorial; asociación tono-descarga|Basal: contexto; valor de los estímulos|Central: salida; órdenes al hipotálamo; congelación"
    ] },
  { t: "Cingulado, ínsula, prefrontal, hemisferio derecho y neurotransmisores",
    tip: "La corteza cingulada anterior participa en el componente afectivo del dolor, el conflicto y la regulación, y su porción subgenual se ha relacionado con la depresión. La ínsula integra la interocepción con la emoción y destaca en el asco. La prefrontal ventromedial y orbitofrontal representa el valor y apoya la extinción, y la dorsolateral sostiene la reevaluación. Ninguna sustancia es «la» de una emoción: cada neurotransmisor modula aspectos concretos.",
    v: [
      "Cingulado subgenual=Área 25, relacionada con la depresión y diana de estimulación profunda",
      "Ensayo BROADEN=Estudio multicéntrico de estimulación subgenual sin diferencia significativa",
      "Interocepción=Percepción del estado interno del cuerpo, como el latido o la respiración",
      "Reevaluación cognitiva=Reinterpretar una situación para cambiar su impacto emocional",
      "Regulación descendente=Control de la amígdala por la corteza prefrontal",
      "Opioides y endocannabinoides=Moduladores del dolor, del placer y del estrés",
      "Asimetría frontal alfa=Medida de EEG estudiada por Davidson con evidencia mixta",
      "CRF=Inicia la respuesta de estrés y actúa también en la amígdala"
    ],
    g: [
      "La CCA participa en lo ___ que resulta el dolor, más que en dónde duele.|desagradable|intenso|localizado",
      "Craig (2009) situó la ínsula en la base de la conciencia ___.|corporal|moral|visual",
      "Ochsner y Gross mostraron que reevaluar reduce la actividad de la ___.|amígdala|ínsula|corteza prefrontal",
      "Las benzodiacepinas ansiolíticas actúan sobre los receptores de ___.|GABA|glutamato|serotonina",
      "La ___ refuerza la consolidación de lo vivido con intensidad emocional.|noradrenalina|oxitocina|dopamina"
    ],
    tf: [
      "La lesión del hemisferio derecho puede alterar la prosodia emocional.|V",
      "La prefrontal dorsolateral representa el valor de los estímulos y frena a la amígdala durante la extinción.|F|Esa es la ventromedial y orbitofrontal. La dorsolateral interviene en la reevaluación cognitiva.",
      "La estimulación profunda del cingulado subgenual ha demostrado su eficacia en la depresión resistente.|F|El ensayo multicéntrico BROADEN no encontró una diferencia significativa, y su eficacia sigue en debate.",
      "La implicación de la ínsula en el asco abarca tanto sentirlo como reconocerlo en la cara de otra persona.|V"
    ],
    q: [
      "Marta piensa que su amigo no contesta porque va conduciendo, no porque esté enfadado, y se calma. ¿Qué región interviene sobre todo en esta estrategia?|La prefrontal dorsolateral|La prefrontal orbitofrontal|La cingulada subgenual|Es reevaluación cognitiva, ligada a la dorsolateral. La ventromedial y orbitofrontal representa el valor y apoya la extinción.",
      "¿Qué se ha estudiado como posible índice de la hipótesis de la valencia?|La asimetría frontal alfa en el EEG|La prosodia emocional tras lesión derecha|La actividad del cingulado subgenual|Davidson estudió la asimetría frontal alfa, con evidencia mixta. La prosodia alterada tras lesión derecha apoya la otra hipótesis.",
      "¿Qué se sabe del papel de la oxitocina en la vinculación social?|Se apoya sobre todo en datos animales|Está bien replicado en humanos por vía intranasal|Es la sustancia propia del apego humano|Los efectos de la oxitocina intranasal en humanos se han replicado poco, así que conviene prudencia.",
      "¿Qué sustancia se relaciona sobre todo con la regulación del ánimo y de la impulsividad?|Serotonina|Noradrenalina|Dopamina|La noradrenalina se liga a la alerta y la memoria emocional, y la dopamina, a la motivación y la búsqueda de recompensas."
    ],
    inc: [
      "Sobre la base cortical de la emoción|La ínsula solo participa en el asco|La CCA participa en la detección de conflicto|Reevaluar aumenta la actividad prefrontal|La ínsula es típica del asco, pero también participa en muchas otras emociones."
    ],
    seq: [],
    cls: [
      "Región prefrontal|Ventromedial y orbitofrontal: valor de los estímulos; extinción del miedo; freno de la amígdala|Dorsolateral: reevaluación cognitiva; Ochsner y Gross"
    ] },
  { t: "El eje HHA, Selye y la carga alostática",
    tip: "La respuesta de estrés usa dos sistemas: el simpático-adrenomedular, rápido, que libera adrenalina desde la médula suprarrenal, y el eje HHA, más lento, en el que la CRH del paraventricular estimula la ACTH de la adenohipófisis y esta, el cortisol de la corteza suprarrenal. El cortisol se frena por retroalimentación negativa sobre hipocampo, hipotálamo e hipófisis. Selye describió alarma, resistencia y agotamiento, y McEwen, la alostasis y la carga alostática.",
    v: [
      "Homeostasis=Mantenimiento de un medio interno estable, concepto acuñado por Cannon",
      "Eje simpático-adrenomedular=Sistema rápido que libera adrenalina y noradrenalina en segundos",
      "CRH=Hormona del núcleo paraventricular que inicia el eje HHA",
      "ACTH=Corticotropina que la adenohipófisis libera a la sangre",
      "Cortisol=Principal glucocorticoide humano, moviliza energía y modula inmunidad y cognición",
      "Retroalimentación negativa=Freno del cortisol sobre hipocampo, hipotálamo e hipófisis",
      "Alostasis=Mantener la estabilidad mediante el cambio (McEwen, 1998)",
      "Carga alostática=Desgaste acumulado por activar en exceso o mal los sistemas de estrés"
    ],
    g: [
      "La ACTH se libera desde la ___.|adenohipófisis|neurohipófisis|corteza suprarrenal",
      "El cortisol lo libera la ___ suprarrenal.|corteza|médula|cápsula",
      "Selye (1936) llamó síndrome general de ___ a la respuesta común ante agentes muy distintos.|adaptación|alarma|agotamiento",
      "En la fase de ___, el organismo sostiene la respuesta con protagonismo de los glucocorticoides.|resistencia|alarma|agotamiento",
      "Ponerse igual de nervioso en cada reunión semanal ilustra el patrón de falta de ___.|habituación|recuperación|respuesta"
    ],
    tf: [
      "La ACTH la libera el hipotálamo y actúa directamente sobre la médula suprarrenal.|F|La ACTH procede de la adenohipófisis y estimula la corteza suprarrenal, que libera cortisol.",
      "El hipocampo es uno de los lugares donde el cortisol ejerce su retroalimentación negativa.|V",
      "Para McEwen, subir el cortisol o la presión arterial cuando hace falta ya es carga alostática.|F|Eso es alostasis, que es adaptativa. La carga alostática es el desgaste cuando la respuesta se usa mal o en exceso.",
      "En roedores, el estrés crónico produce atrofia dendrítica en el hipocampo e hipertrofia en la amígdala.|V"
    ],
    q: [
      "Horas después de una discusión, Luis sigue alterado y no logra calmarse, aunque el conflicto ya terminó. ¿Qué patrón de McEwen ilustra?|Respuesta prolongada|Falta de habituación|Estrés repetido|La respuesta no se apaga cuando el estresor termina. La falta de habituación es no reducirla ante un estresor que se repite.",
      "¿Cuál es el orden correcto del eje HHA?|CRH, ACTH y cortisol|ACTH, CRH y cortisol|CRH, cortisol y ACTH|El paraventricular libera CRH, la adenohipófisis libera ACTH y la corteza suprarrenal libera cortisol.",
      "¿Qué patrón de McEwen corresponde a una respuesta de cortisol plana ante un estresor real?|Respuesta insuficiente|Respuesta prolongada|Falta de habituación|Si el sistema no responde lo bastante, otros sistemas se descompensan.",
      "¿Qué caracteriza la fase de alarma del síndrome general de adaptación?|El simpático y la adrenalina|Los glucocorticoides sostenidos|El derrumbe de la adaptación|La alarma es el primer choque. La resistencia la sostienen los glucocorticoides y el agotamiento es el derrumbe."
    ],
    inc: [
      "Sobre la respuesta de estrés|La médula suprarrenal libera cortisol|El eje HHA es más lento y duradero|Cannon describió la lucha o huida|La médula suprarrenal libera adrenalina y noradrenalina. El cortisol procede de la corteza suprarrenal."
    ],
    seq: [
      "Eje HHA|El núcleo paraventricular libera CRH>La adenohipófisis libera ACTH>La corteza suprarrenal libera cortisol>El cortisol frena el eje por retroalimentación negativa"
    ],
    cls: [
      "Sistema de respuesta al estrés|Simpático-adrenomedular: segundos; médula suprarrenal; adrenalina|Eje HHA: minutos; corteza suprarrenal; cortisol"
    ] },
  { t: "Neurobiología de la depresión y la ansiedad, y retos de la investigación",
    tip: "La depresión es heterogénea y multifactorial: los modelos monoaminérgico, de HHA hiperactivo, neurotrófico, de redes e inflamatorio describen piezas que pesan distinto en cada persona, y no hay evidencia consistente de serotonina baja. ENIGMA halló un hipocampo algo menor con un efecto pequeño. En la ansiedad destacan la amígdala hiperreactiva, el BNST y una regulación prefrontal deficiente. La neuroimagen con muestras pequeñas da inferencias frágiles.",
    v: [
      "Modelo monoaminérgico=Déficit de serotonina o noradrenalina, hoy de valor histórico",
      "Prueba de dexametasona=Prueba de supresión alterada solo en una parte de los pacientes deprimidos",
      "Modelo neurotrófico=Hipótesis de menos BDNF y menos neurogénesis hipocampal",
      "Consorcio ENIGMA=Halló un hipocampo algo menor en la depresión, con d de aproximadamente −0,14",
      "Border et al. (2019)=Sin efecto de 18 genes candidatos ni de su interacción con el estrés",
      "Genética poligénica=Muchas variantes de efecto mínimo, en lugar de un único gen de la depresión",
      "Eklund et al. (2016)=Hallaron hasta un 70 % de falsos positivos en inferencias por clúster",
      "Weaver et al. (2004)=El cuidado materno cambió la metilación del receptor de glucocorticoides en ratas"
    ],
    g: [
      "Según Marek et al. (2022), con muestras de unas ___ personas las asociaciones cerebro-conducta no se replican.|25|2.500|250",
      "En el TEPT destaca el fallo de la ___, en la que intervienen la CPF ventromedial y el hipocampo.|extinción|habituación|consolidación",
      "El modelo ___ propone que una inflamación sistémica afecta al cerebro en un subgrupo de pacientes.|inflamatorio|neurotrófico|monoaminérgico",
      "El hipocampo es necesario para saber que un ___ ya es seguro.|contexto|estímulo|recuerdo",
      "La genética de la depresión es ___, con muchas variantes de efecto mínimo.|poligénica|monogénica|mendeliana"
    ],
    tf: [
      "La revisión de Moncrieff et al. (2022) demostró que los antidepresivos no son eficaces.|F|No halló evidencia consistente de serotonina baja, pero eso no refuta la eficacia de los antidepresivos.",
      "La interacción entre el 5-HTTLPR y el estrés propuesta por Caspi et al. (2003) no ha resistido a muestras mayores.|V",
      "El efecto del hipocampo menor en la depresión es más marcado en el inicio temprano y en los episodios recurrentes.|V",
      "Está demostrado en humanos que el cuidado materno modifica la metilación del receptor de glucocorticoides.|F|El dato procede de ratas (Weaver et al., 2004), y su extrapolación a humanos requiere cautela."
    ],
    q: [
      "Un paciente con trastorno de pánico sufre una crisis al inhalar CO₂ en el laboratorio. ¿Qué enseña el caso de SM sobre este fenómeno?|Que puede producirse sin amígdala|Que exige una amígdala hiperreactiva|Que depende de un BNST intacto|Feinstein et al. (2013) mostraron que una señal interna como el CO₂ basta para el pánico incluso sin amígdala.",
      "¿Qué modelo de la depresión se apoya en una CCA subgenual y una amígdala hiperactivas con CPF dorsolateral hipoactiva?|De redes|Neurotrófico|Inflamatorio|Es el modelo de redes, con apoyo en neuroimagen. El neurotrófico se centra en el BDNF y la neurogénesis.",
      "Un estudio de RMf con 20 participantes informa de una correlación fuerte entre una medida cerebral y un rasgo. ¿Qué cabe esperar según Marek et al. (2022)?|Que no se replique en otra muestra|Que se mantenga en muestras grandes|Que refleje una relación causal|Con unos 50.000 participantes, las asociaciones típicas eran minúsculas, y con unas 25 personas no se replicaban.",
      "¿Qué aporta la optogenética frente a la neuroimagen?|Probar qué hace una población neuronal|Medir la actividad durante la emoción|Detectar variantes de efecto mínimo|Permite activar o silenciar neuronas concretas en animales y ver qué hacen, no solo con qué se correlacionan."
    ],
    inc: [
      "Sobre la ansiedad|La amígdala apenas responde a la amenaza|El BNST participa en la amenaza sostenida|La regulación prefrontal es deficiente|Los modelos coinciden en una amígdala hiperreactiva a la amenaza, no hiporreactiva."
    ],
    seq: [],
    cls: [
      "Trastorno|Depresión: CCA subgenual hiperactiva; hipocampo algo menor; HHA hiperactivo|Ansiedad: BNST; pánico por CO₂ inhalado; fallo de la extinción en el TEPT"
    ] }
] },
{ n: 10, t: "Aprender con sinapsis: de Aplysia a la LTP", cap: 5, pir: "alta", mods: [
  { t: "Aprendizaje y memoria: definiciones y fases",
    tip: "El aprendizaje es un cambio relativamente duradero en la conducta, o en su potencial, producido por la experiencia, y la memoria es la capacidad de retenerlo y recuperarlo. Se distinguen codificación, consolidación, almacenamiento y recuperación. La consolidación sináptica dura horas y requiere síntesis de proteínas, y la sistémica reorganiza la huella entre hipocampo y corteza durante semanas o años. El aprendizaje puede ser no asociativo o asociativo.",
    v: [
      "Aprendizaje=Cambio relativamente duradero de la conducta, o de su potencial, por la experiencia",
      "Memoria=Capacidad de retener lo aprendido y de recuperarlo después",
      "Codificación=Transformación de la información percibida en una huella",
      "Consolidación sistémica=Reorganización de la huella entre hipocampo y corteza en semanas o años",
      "Consolidación sináptica=Estabilización en horas de un cambio sináptico con síntesis de proteínas",
      "Reconsolidación=Nueva estabilización de un recuerdo que se volvió inestable al recuperarse",
      "Habituación=Descenso de la respuesta ante un estímulo repetido e inocuo",
      "Sensibilización=Aumento de la respuesta tras un estímulo intenso o nocivo"
    ],
    g: [
      "El condicionamiento del parpadeo depende del núcleo ___ del cerebelo.|interpósito|dentado|fastigio",
      "El aprendizaje instrumental de hábitos se apoya sobre todo en el ___.|estriado|cerebelo|hipocampo",
      "Para Carlson y Birkett, aprender las relaciones entre estímulos, como en la memoria espacial, es aprendizaje ___.|relacional|perceptivo|motor",
      "La neurociencia busca el aprendizaje sobre todo en cambios de la eficacia ___.|sináptica|metabólica|vascular",
      "Dejar de oír el tráfico de una avenida a las pocas semanas de mudarse es un caso de ___.|habituación|sensibilización|extinción"
    ],
    tf: [
      "La consolidación sináptica dura semanas o años y reorganiza la huella entre hipocampo y corteza.|F|Eso es la consolidación sistémica. La sináptica dura horas y depende de expresión génica y síntesis de proteínas.",
      "Quien aprende el camino a una tienda nueva ya ha aprendido, aunque su conducta no cambie hasta que necesite ir.|V",
      "El condicionamiento clásico y el operante son formas de aprendizaje no asociativo.|F|Son asociativos. Los no asociativos son la habituación y la sensibilización, que afectan a la respuesta a un solo estímulo.",
      "La experiencia no se guarda como una copia, sino que modifica las conexiones por las que circula la información.|V"
    ],
    q: [
      "Tras un frenazo justo a su lado, Ana se sobresalta de forma exagerada ante cualquier ruido durante un rato. ¿Qué tipo de aprendizaje muestra?|Sensibilización|Habituación|Condicionamiento clásico|Un estímulo intenso aumenta la respuesta a otros estímulos posteriores. No hay asociación entre dos estímulos concretos.",
      "¿En qué fase la huella se reactiva reproduciendo el patrón de actividad original?|Recuperación|Almacenamiento|Codificación|En la recuperación la huella se reactiva y se usa. El almacenamiento la mantiene mediante cambios estructurales.",
      "¿Qué estructura sostiene el condicionamiento del parpadeo, según los trabajos de Thompson?|El cerebelo|El estriado|La amígdala|Depende del núcleo interpósito del cerebelo. El estriado sostiene los hábitos y la amígdala, el aprendizaje de miedo.",
      "En la clasificación de Carlson y Birkett, ¿qué tipo de aprendizaje es adquirir una destreza como teclear?|Motor|Perceptivo|Relacional|El motor consiste en adquirir destrezas. El perceptivo es reconocer estímulos y el relacional, aprender relaciones entre ellos."
    ],
    inc: [
      "Sobre la consolidación|La sináptica no requiere síntesis de proteínas|La sistémica implica al hipocampo y la corteza|La sináptica se completa en cuestión de horas|La consolidación sináptica se estabiliza gracias a la expresión de genes y la síntesis de proteínas."
    ],
    seq: [
      "Fases de la memoria|Codificación>Consolidación>Almacenamiento>Recuperación"
    ],
    cls: [
      "Tipo de aprendizaje|No asociativo: habituación; sensibilización|Asociativo: condicionamiento clásico; condicionamiento operante"
    ] },
  { t: "Habituación, sensibilización y condicionamiento en Aplysia",
    tip: "Kandel estudió el reflejo de retirada de la branquia y el sifón de Aplysia, en el que una neurona sensorial libera glutamato sobre una motora. En la habituación, la sensorial libera menos glutamato. En la sensibilización, interneuronas facilitadoras liberan serotonina, que eleva el AMPc y activa la PKA, y la sensorial libera más glutamato. La versión a largo plazo requiere CREB, síntesis de proteínas y nuevas sinapsis.",
    v: [
      "Aplysia californica=Liebre de mar con neuronas grandes e identificables estudiada por Kandel",
      "Eric Kandel=Premio Nobel en 2000 por estudiar el aprendizaje neurona a neurona en un molusco",
      "Interneurona facilitadora=Libera serotonina sobre la terminal de la neurona sensorial",
      "Habituación en Aplysia=La neurona sensorial libera menos glutamato tras toques repetidos",
      "PKA=Proteína cinasa activada por el AMPc en la terminal sensorial",
      "CREB=Factor de transcripción que activa los genes de la memoria a largo plazo",
      "AMPc=Segundo mensajero que aumenta tras la llegada de serotonina",
      "Facilitación dependiente de actividad=Respuesta mayor de la terminal sensorial que estaba activa al llegar la serotonina"
    ],
    g: [
      "La neurona sensorial del sifón libera ___ sobre la neurona motora.|glutamato|serotonina|dopamina",
      "Varias descargas ___ producen una sensibilización que dura días.|espaciadas|seguidas|débiles",
      "La sensibilización producida por una sola descarga dura ___.|minutos|días|semanas",
      "En el condicionamiento clásico de Aplysia, el estímulo condicionado es un toque débil en el ___.|sifón|cola|branquia",
      "Si se bloquea la síntesis de proteínas, solo se forma la memoria a ___ plazo.|corto|largo|medio"
    ],
    tf: [
      "En la habituación de Aplysia, la neurona sensorial deja de responder al toque del sifón.|F|La neurona sensorial sigue respondiendo, pero libera menos glutamato. El cambio está en la sinapsis.",
      "La memoria a largo plazo de Aplysia implica el crecimiento de nuevas conexiones sinápticas.|V",
      "La sensibilización a corto plazo requiere la síntesis de proteínas nuevas.|F|Solo modifica proteínas ya existentes mediante la PKA. La síntesis de proteínas es imprescindible a largo plazo.",
      "Moléculas descubiertas en Aplysia, como el AMPc, la PKA y CREB, reaparecen en la memoria de los mamíferos.|V"
    ],
    q: [
      "En un experimento con Aplysia se aplica un inhibidor de la síntesis de proteínas antes de varias descargas espaciadas en la cola. ¿Qué cabe esperar?|Solo sensibilización a corto plazo|Sensibilización duradera de días|Ninguna sensibilización en absoluto|Si se bloquea la síntesis de proteínas, solo se forma la memoria a corto plazo, que modifica proteínas ya existentes.",
      "¿Cuál es la cascada de la sensibilización en la terminal sensorial?|Serotonina, AMPc y PKA|Glutamato, PKA y AMPc|Serotonina, PKA y AMPc|La serotonina eleva el AMPc, que activa la PKA, y la neurona sensorial libera más glutamato.",
      "¿Por qué el condicionamiento clásico en Aplysia supera a la sensibilización sola?|La terminal activa detecta la coincidencia|La neurona motora libera más serotonina|La descarga habitúa el reflejo del sifón|Es una facilitación presináptica dependiente de actividad: la terminal activa al llegar la serotonina responde con más fuerza.",
      "¿Qué reflejo estudió Kandel en Aplysia?|Retirada de la branquia y el sifón|Contracción de la cola ante el toque|Apertura del sifón ante el agua|Al tocar el sifón, la branquia se retrae para protegerse. Es un circuito corto de neurona sensorial a neurona motora."
    ],
    inc: [
      "Sobre la sensibilización en Aplysia|El cambio ocurre en la neurona motora|Una descarga en la cola intensifica el reflejo|La serotonina actúa sobre la terminal sensorial|La serotonina actúa sobre la terminal de la neurona sensorial, que libera más glutamato al volver a activarse."
    ],
    seq: [
      "Sensibilización a largo plazo en Aplysia|Descarga en la cola>La interneurona facilitadora libera serotonina>Aumenta el AMPc>Se activa la PKA>La PKA activa CREB en el núcleo>Síntesis de proteínas y nuevas sinapsis"
    ],
    cls: [
      "Memoria en Aplysia|Corto plazo: minutos; proteínas ya existentes; sin cambio estructural|Largo plazo: días o semanas; CREB; nuevas conexiones sinápticas"
    ] },
  { t: "La LTP: descubrimiento y propiedades",
    tip: "Hebb (1949) propuso que una conexión se refuerza si una neurona contribuye repetidamente a que otra dispare. Bliss y Lømo (1973) lo comprobaron al estimular la vía perforante de conejos anestesiados con trenes de alta frecuencia: la respuesta del giro dentado aumentaba durante 30 minutos a 10 horas. La LTP es específica, cooperativa y asociativa, y su proceso inverso es la LTD.",
    v: [
      "Regla de Hebb=Si una neurona hace disparar a otra repetidamente, su conexión se refuerza",
      "Vía perforante=Axones de la corteza entorrinal que terminan en el giro dentado",
      "LTP=Aumento duradero de la eficacia sináptica tras una estimulación intensa",
      "Especificidad=Solo se potencian las sinapsis activas durante la estimulación",
      "Cooperatividad=Hace falta activar a la vez suficientes fibras",
      "Asociatividad=Una entrada débil se potencia si coincide con una fuerte",
      "LTD=Descenso duradero de la eficacia sináptica, a menudo por baja frecuencia prolongada",
      "Estimulación theta=Ráfagas cortas repetidas a un ritmo parecido al del hipocampo al explorar"
    ],
    g: [
      "Bliss y Lømo trabajaron con ___ anestesiados.|conejos|ratas|gatos",
      "El efecto de Bliss y Lømo apareció en 15 de los ___ animales estudiados.|18|25|30",
      "Hoy la LTP se induce sobre todo en la sinapsis entre las células de CA3 y las de ___.|CA1|CA2|CA4",
      "La ___ es la versión celular de la regla de Hebb.|asociatividad|especificidad|cooperatividad",
      "La LTD permite debilitar conexiones y evita que el sistema se ___.|sature|inhiba|habitúe"
    ],
    tf: [
      "Una estimulación débil de pocas fibras induce LTP siempre que sea de alta frecuencia.|F|No basta: por la cooperatividad, hace falta activar a la vez suficientes fibras.",
      "Gracias a la especificidad, una neurona puede guardar asociaciones distintas en distintas sinapsis.|V",
      "La LTP se ha descrito solo en el hipocampo.|F|También se ha descrito en la amígdala, donde acompaña al condicionamiento de miedo, y en la corteza.",
      "En el experimento de Bliss y Lømo, la potenciación duraba entre 30 minutos y 10 horas.|V"
    ],
    q: [
      "En un corte de hipocampo, una entrada débil a una neurona de CA1 no se potencia sola, pero sí cuando se estimula a la vez que una entrada fuerte. ¿Qué propiedad muestra?|Asociatividad|Cooperatividad|Especificidad|La entrada débil se refuerza al coincidir con la fuerte. La cooperatividad se refiere a cuántas fibras deben activarse.",
      "¿Qué vía estimulaban Bliss y Lømo?|La vía perforante hacia el giro dentado|Las colaterales de CA3 hacia CA1|El fórnix hacia los cuerpos mamilares|Sus axones parten de la corteza entorrinal y terminan en el giro dentado. La sinapsis CA3-CA1 es la que hoy se usa en cortes.",
      "Tras tetanizar una vía, otra sinapsis de la misma neurona que no recibió el tren no cambia. ¿Qué propiedad ilustra?|Especificidad|Asociatividad|Cooperatividad|Solo se potencian las sinapsis que estaban activas durante la estimulación.",
      "¿Cómo suele inducirse la LTD?|Con baja frecuencia prolongada|Con un tren breve de alta frecuencia|Con ráfagas a ritmo theta|La tetanización y la estimulación theta son protocolos de LTP. La LTD suele inducirse con baja frecuencia prolongada."
    ],
    inc: [
      "Sobre la LTP|Es un fenómeno que dura solo unos segundos|Se descubrió en el hipocampo de conejo|Tiene un proceso inverso llamado LTD|Es un aumento duradero: en Bliss y Lømo se mantenía de 30 minutos a 10 horas."
    ],
    seq: [
      "Experimento de Bliss y Lømo|Medir la respuesta a estímulos sueltos>Aplicar trenes de alta frecuencia>Volver a los estímulos sueltos>Registrar una respuesta aumentada"
    ],
    cls: [
      "Propiedad de la LTP|Especificidad: solo sinapsis activas|Cooperatividad: suficientes fibras a la vez|Asociatividad: entrada débil junto a una fuerte; versión celular de Hebb"
    ] },
  { t: "NMDA, AMPA y cambios estructurales en la sinapsis",
    tip: "En la sinapsis CA3-CA1, el glutamato actúa sobre receptores AMPA, que dejan pasar sodio en la transmisión ordinaria, y NMDA, taponados por Mg²⁺ en reposo. El NMDA solo se abre con glutamato y despolarización a la vez, por lo que es un detector de coincidencia. El calcio que entra activa CaMKII y PKC, que fosforilan e insertan receptores AMPA en la fase temprana. La fase tardía requiere CREB, síntesis de proteínas y cambios en las espinas.",
    v: [
      "Receptor AMPA=Receptor de glutamato que deja pasar sodio en la transmisión ordinaria",
      "Receptor NMDA=Receptor de glutamato taponado por magnesio en reposo",
      "Detector de coincidencia=Se abre solo con glutamato presináptico y despolarización postsináptica",
      "Calcio=Ion que entra por el canal NMDA y pone en marcha la LTP",
      "CaMKII=Cinasa activada por el calcio que fosforila receptores AMPA",
      "Fase temprana de la LTP=Inserción de AMPA durante horas, sin síntesis de proteínas",
      "Fase tardía de la LTP=Requiere CREB, síntesis de proteínas y cambios en las espinas",
      "AP5=Antagonista del receptor NMDA usado por Morris et al. (1986)"
    ],
    g: [
      "En reposo, el canal NMDA está taponado por un ion ___.|magnesio|calcio|sodio",
      "En la asociatividad, la entrada fuerte aporta la ___ y la débil, el glutamato en su sinapsis.|despolarización|hiperpolarización|inhibición",
      "En la fase tardía, las espinas dendríticas se vuelven más ___ y estables.|gruesas|finas|largas",
      "En el laberinto de agua de Morris, la plataforma está ___.|sumergida|elevada|señalizada",
      "Tras la entrada de calcio se ___ nuevos receptores AMPA en la membrana de la espina.|insertan|degradan|bloquean"
    ],
    tf: [
      "El receptor AMPA es el que permite la entrada de calcio que induce la LTP.|F|Es al revés: el NMDA deja entrar el calcio, y el AMPA es el que se inserta y expresa la potenciación.",
      "La fase temprana de la LTP no requiere síntesis de proteínas.|V",
      "El estudio de Morris et al. (1986) demostró que la memoria espacial es LTP.|F|Mostró que los receptores NMDA son necesarios para ese aprendizaje. La LTP es un mecanismo candidato, no la memoria misma.",
      "En la LTP también se han descrito cambios presinápticos, como un aumento de la liberación de glutamato.|V"
    ],
    q: [
      "Unas ratas reciben AP5 y después se entrenan en el laberinto de agua de Morris. ¿Qué resultado obtuvieron Morris et al. (1986)?|Les costaba aprender la plataforma|Aprendían la tarea más deprisa|Olvidaban recuerdos de meses antes|El bloqueo del NMDA impidió la LTP hipocampal y empeoró el aprendizaje espacial: una relación, no una identidad.",
      "¿Por qué la LTP en CA1 muestra cooperatividad?|Hacen falta muchas fibras para despolarizar|El AMPA se inserta solo en sinapsis activas|El magnesio entra junto con el calcio|Sin despolarización suficiente, el Mg²⁺ no sale del canal NMDA aunque haya glutamato.",
      "¿Qué mecanismo explica la expresión de la fase temprana de la LTP?|Más receptores AMPA en la membrana|Más receptores NMDA sin magnesio|Nuevas espinas por síntesis proteica|Con más AMPA, el mismo glutamato produce una respuesta mayor. Las espinas nuevas son propias de la fase tardía.",
      "¿Qué se discute sobre la LTP tardía?|Qué molécula la mantiene|Si su inducción depende del NMDA|Si la fase temprana inserta AMPA|Los ratones sin PKMζ mantienen LTP por compensación, y Tsokas et al. (2024) proponen el complejo KIBRA-PKMζ."
    ],
    inc: [
      "Sobre el receptor NMDA|Se abre con glutamato aunque haya reposo|Une glutamato, igual que el receptor AMPA|Al abrirse deja entrar calcio en la neurona|En reposo el Mg²⁺ tapona el canal: sin despolarización no pasa corriente aunque llegue el glutamato."
    ],
    seq: [
      "Cascada de la LTP|El glutamato activa los receptores AMPA>Despolarización postsináptica>Sale el Mg²⁺ del canal NMDA>Entra calcio>Se activan CaMKII y PKC>Se insertan más receptores AMPA"
    ],
    cls: [
      "Receptor de glutamato|AMPA: deja pasar sodio; transmisión ordinaria; se inserta en la LTP|NMDA: tapón de magnesio; entrada de calcio; detector de coincidencia"
    ] }
] },
{ n: 11, t: "Sistemas de memoria, consolidación y amnesias", cap: 5, pir: "alta", mods: [
  { t: "Tipos de memoria según su duración y su contenido",
    tip: "Por su duración, el modelo de Atkinson y Shiffrin distingue memoria sensorial, a corto plazo o de trabajo y a largo plazo. Por su contenido, Squire separa la declarativa, episódica y semántica y accesible a la conciencia, de la no declarativa: procedimental, priming, condicionamiento clásico y aprendizaje no asociativo. Tulving (1972) diferenció la episódica de la semántica. La fuerza de esta clasificación procede de las disociaciones.",
    v: [
      "Memoria icónica=Memoria sensorial visual que dura fracciones de segundo",
      "Memoria ecoica=Copia sensorial auditiva casi literal de lo oído",
      "Memoria de trabajo=Sistema de Baddeley y Hitch con varios componentes y un ejecutivo central",
      "Memoria episódica=Sucesos personales situados en un tiempo y un lugar",
      "Memoria semántica=Conocimiento general sin referencia al momento en que se aprendió",
      "Priming=Procesamiento facilitado por una exposición previa",
      "Memoria procedimental=Habilidades y hábitos que se adquieren con la práctica",
      "Disociación=Una lesión destruye un tipo de memoria y respeta otro"
    ],
    g: [
      "Los sustratos principales de la memoria de trabajo son la corteza prefrontal dorsolateral y la corteza ___.|parietal|occipital|entorrinal",
      "El sustrato principal del priming es la ___.|neocorteza|amígdala|ínsula",
      "Saber que París es la capital de Francia es memoria ___.|semántica|episódica|procedimental",
      "Los pacientes con Parkinson pueden recordar una sesión de entrenamiento y aun así aprender mal un ___.|hábito|suceso|nombre",
      "Atkinson y Shiffrin propusieron su modelo multialmacén en ___.|1968|1972|1974"
    ],
    tf: [
      "El condicionamiento clásico forma parte de la memoria declarativa porque se aprende una relación entre estímulos.|F|Es memoria no declarativa, con sustrato en la amígdala y el cerebelo.",
      "H. M. perdió la capacidad de formar recuerdos declarativos nuevos, pero siguió aprendiendo habilidades motoras.|V",
      "La memoria a largo plazo tiene una capacidad que en la práctica no tiene un límite conocido.|V",
      "Tulving (1972) introdujo la distinción entre memoria declarativa y no declarativa.|F|Tulving distinguió la episódica de la semántica. La terminología declarativa y no declarativa la popularizó Squire."
    ],
    q: [
      "Al volver en bicicleta, Pablo recuerda que ayer casi le atropella un patinete. ¿Qué tipo de memoria usa para ese recuerdo?|Episódica|Semántica|Procedimental|Es un suceso personal situado en un tiempo y un lugar, reforzado por la emoción. Pedalear sería memoria procedimental.",
      "¿Qué forma de memoria no declarativa se apoya sobre todo en vías reflejas?|Aprendizaje no asociativo|Condicionamiento clásico|Memoria procedimental|La habituación y la sensibilización dependen de vías reflejas. El condicionamiento implica amígdala y cerebelo.",
      "¿Qué sustrato corresponde a la memoria procedimental?|Estriado, cerebelo y corteza motora|Lóbulo temporal medial y diencéfalo|Amígdala y cerebelo|La declarativa depende del lóbulo temporal medial y el diencéfalo, y el condicionamiento clásico, de amígdala y cerebelo.",
      "¿De dónde procede la fuerza de la clasificación de la memoria por su contenido?|De las disociaciones tras lesiones|De la introspección de los participantes|De la duración de cada almacén|Una lesión puede destruir un tipo de memoria y respetar otro, como en H. M. o en la enfermedad de Parkinson."
    ],
    inc: [
      "Sobre la memoria declarativa|Se expresa sin acceso a la conciencia|Incluye la episódica y la semántica|Puede formarse en un solo ensayo|La memoria declarativa es accesible a la conciencia y se puede expresar con palabras."
    ],
    seq: [],
    cls: [
      "Sistema de memoria a largo plazo|Declarativa: episódica; semántica|No declarativa: procedimental; priming; condicionamiento clásico; habituación"
    ] },
  { t: "Hipocampo, amígdala, ganglios basales y corteza",
    tip: "El hipocampo une los elementos de una experiencia con su contexto y es clave para la memoria espacial, con sus células de lugar, a las que se suman las células de rejilla de la entorrinal. La amígdala sostiene el condicionamiento de miedo y modula la consolidación en otras estructuras. El estriado sostiene los hábitos, el cerebelo el aprendizaje motor y el parpadeo, y la corteza es el almacén a largo plazo.",
    v: [
      "Función relacional=Unir quién, qué, dónde y cuándo de una experiencia con su contexto",
      "Células de lugar=Neuronas del hipocampo que disparan en una posición concreta del entorno",
      "Células de rejilla=Neuronas entorrinales que disparan en una retícula regular de posiciones",
      "McGaugh=Mostró que la activación noradrenérgica amigdalina refuerza la consolidación",
      "Predicción del tiempo=Tarea probabilística con tarjetas de Knowlton, Mangels y Squire (1996)",
      "Estriado=Caudado y putamen, base del aprendizaje de hábitos",
      "Demencia semántica=Pérdida progresiva del significado por daño del lóbulo temporal anterior",
      "Nobel de 2014=Concedido a O'Keefe y a May-Britt y Edvard Moser"
    ],
    g: [
      "O'Keefe y Dostrovsky describieron las células de lugar en ___.|1971|1957|1986",
      "Las células de rejilla se describieron en la corteza ___.|entorrinal|perirrinal|prefrontal",
      "En la tarea de predicción del tiempo, los pacientes amnésicos aprendían la tarea, pero no recordaban la ___.|sesión|regla|respuesta",
      "En el condicionamiento de miedo, la información del estímulo condicionado y la del incondicionado convergen en el núcleo ___.|lateral|central|basal",
      "Los sucesos con carga emocional se recuerdan mejor porque la amígdala ___ su consolidación.|refuerza|sustituye|bloquea"
    ],
    tf: [
      "Los pacientes con Parkinson aprendían mal la tarea de predicción del tiempo, aunque recordaban la sesión.|V",
      "Según McGaugh, la amígdala almacena los recuerdos emocionales en lugar del hipocampo.|F|La amígdala modula la consolidación de recuerdos guardados en otras estructuras mediante su activación noradrenérgica.",
      "El conocimiento semántico se apoya en redes neocorticales, con un papel destacado del lóbulo temporal anterior.|V",
      "Las células de rejilla se encuentran en el hipocampo y las de lugar, en la corteza entorrinal.|F|Es al revés: las de lugar están en el hipocampo y las de rejilla, en la corteza entorrinal."
    ],
    q: [
      "Un paciente aprende poco a poco a predecir si lloverá a partir de unas tarjetas, pero no recuerda haber hecho la tarea. ¿Qué perfil encaja?|Amnesia por lesión del lóbulo temporal medial|Enfermedad de Parkinson con afectación estriatal|Demencia semántica temporal anterior|Los amnésicos aprendían la tarea de hábitos sin recordar la sesión, y los pacientes con Parkinson mostraban lo contrario.",
      "Aprender a conducir empieza con la memoria de trabajo prefrontal. ¿En qué se apoya cuando ya es automático?|En el estriado y el cerebelo|En el hipocampo y la amígdala|En el lóbulo temporal anterior|Termina como un hábito estriatal y cerebeloso que permite cambiar de marcha sin pensar.",
      "¿Qué patrón forman los resultados de Knowlton, Mangels y Squire (1996)?|Una doble disociación|Una disociación simple|Un gradiente temporal|En el Parkinson falla el hábito y se conserva el recuerdo de la sesión, y en la amnesia se da el patrón inverso.",
      "Una rata con lesión hipocampal se entrena en una piscina con una plataforma sumergida. ¿Qué cabe esperar?|Que aprenda mal su posición|Que aprenda antes que los controles|Que olvide solo el miedo al agua|Las ratas con lesión hipocampal aprenden mal el laberinto de agua de Morris, una tarea de memoria espacial."
    ],
    inc: [
      "Sobre la amígdala y la memoria|Es el almacén principal del conocimiento semántico|Sostiene el condicionamiento de miedo|Modula la consolidación en otras estructuras|El conocimiento semántico se apoya en la neocorteza, con papel destacado del lóbulo temporal anterior."
    ],
    seq: [],
    cls: [
      "Estructura y memoria|Hipocampo: memoria declarativa; memoria espacial; células de lugar|Estriado: hábitos; predicción del tiempo|Cerebelo: aprendizaje motor; condicionamiento del parpadeo"
    ] },
  { t: "Las redes corticales de Fuster y los modelos de consolidación",
    tip: "Para Fuster (2003), la memoria es una propiedad de la organización cortical: los cógnitos son redes distribuidas, solapadas y jerárquicas, con una jerarquía perceptiva posterior y otra ejecutiva frontal unidas por el ciclo percepción-acción. El gradiente de Ribot inspira los modelos de consolidación. El estándar hace al recuerdo independiente del hipocampo, mientras que la huella múltiple y la transformación mantienen su dependencia para el detalle episódico.",
    v: [
      "Cógnito=Red cortical distribuida y solapada que representa un recuerdo según Fuster",
      "Jerarquía perceptiva=Red posterior que va de las sensaciones a los conceptos",
      "Jerarquía ejecutiva=Red frontal que va de los actos motores a las acciones conceptuales",
      "Ciclo percepción-acción=Lo percibido guía la conducta y esta cambia lo que se percibe",
      "Ley de Ribot=En la amnesia retrógrada se pierden más los recuerdos recientes que los antiguos",
      "Modelo estándar=El hipocampo hace de índice temporal hasta que la corteza se independiza",
      "Huella múltiple=Cada recuperación episódica forma una nueva huella con participación del hipocampo",
      "Teoría de la transformación=El recuerdo detallado se vuelve esquemático y cortical con el tiempo"
    ],
    g: [
      "Fuster propuso su paradigma reticular en ___.|2003|1997|1957",
      "Como los cógnitos se ___, un recuerdo evoca otros.|solapan|aíslan|degradan",
      "La teoría de la huella múltiple fue propuesta por Nadel y ___.|Moscovitch|Winocur|Squire",
      "Durante el sueño de ondas ___, el hipocampo reactiva secuencias de la experiencia previa.|lentas|rápidas|alfa",
      "Según la huella múltiple, los recuerdos ___ pueden independizarse del hipocampo.|semánticos|episódicos|recientes"
    ],
    tf: [
      "Para Fuster, la memoria se guarda en un almacén cortical localizado.|F|Para Fuster la memoria es una propiedad de la organización cortical, en redes distribuidas y solapadas.",
      "El modelo estándar explica bien el gradiente temporal de Ribot.|V",
      "Que los recuerdos episódicos antiguos dejen de depender del hipocampo es un hecho consensuado.|F|Está en debate: el modelo estándar lo defiende, pero la huella múltiple y la transformación sostienen que siempre lo necesitan.",
      "Según la teoría de la transformación, la versión detallada de un recuerdo sigue necesitando el hipocampo.|V"
    ],
    q: [
      "Tras una lesión hipocampal extensa, una paciente sabe que lloró su primer día de colegio, pero no puede revivir el olor del aula. ¿Qué modelo predice mejor este patrón?|La teoría de la huella múltiple|El modelo estándar de consolidación|El paradigma reticular de Fuster|Conserva el esquema semántico, cortical, pero pierde el detalle episódico, que siempre dependería del hipocampo.",
      "¿Qué predice el modelo estándar para un recuerdo episódico muy antiguo tras una lesión hipocampal?|Que se conserve|Que se pierda por completo|Que se transforme en semántico|Con el tiempo las conexiones corticales se refuerzan y el recuerdo deja de necesitar el hipocampo.",
      "¿Qué jerarquía de Fuster organiza la secuencia de giros del volante al aparcar?|La ejecutiva frontal|La perceptiva posterior|La semántica temporal|La ejecutiva, frontal, va de los actos motores a los planes. La perceptiva registra la distancia a las líneas.",
      "¿Qué papel se atribuye al sueño en la consolidación sistémica?|El hipocampo reactiva secuencias previas|La corteza borra las huellas antiguas|La amígdala sustituye al hipocampo|En el sueño de ondas lentas se repiten secuencias de la experiencia, lo que contribuiría a reforzar las conexiones corticales."
    ],
    inc: [
      "Sobre los cógnitos de Fuster|Cada neurona pertenece a una sola red|Están distribuidos por amplias zonas corticales|Se organizan en jerarquías de lo concreto a lo abstracto|Se solapan: una misma neurona puede pertenecer a muchas redes, y por eso un recuerdo evoca otros."
    ],
    seq: [
      "Jerarquía perceptiva de Fuster, de lo concreto a lo abstracto|Sensaciones>Episodios>Conocimiento semántico>Conceptos"
    ],
    cls: [
      "Modelo de consolidación|Modelo estándar: índice temporal; independencia del hipocampo; gradiente de Ribot|Huella múltiple: Nadel y Moscovitch; nueva huella en cada recuperación; detalle episódico siempre hipocampal"
    ] },
  { t: "Amnesias y fronteras actuales: engramas, reconsolidación y neurogénesis",
    tip: "La amnesia anterógrada impide formar recuerdos declarativos nuevos y la retrógrada afecta a lo previo a la lesión, a menudo según la ley de Ribot. H. M., operado en 1953, conservó la memoria de trabajo y aprendió el dibujo en espejo. El Korsakoff daña cuerpos mamilares y tálamo mediodorsal. En roedores, reactivar un engrama evoca el recuerdo y la reconsolidación es sólida, pero su uso clínico y la neurogénesis adulta humana siguen en debate.",
    v: [
      "Amnesia anterógrada=Incapacidad de formar recuerdos declarativos nuevos desde la lesión",
      "Amnesia retrógrada=Olvido de lo vivido o aprendido antes de la lesión",
      "Henry Molaison=Paciente operado en 1953 de ambos lóbulos temporales mediales",
      "Síndrome de Korsakoff=Déficit de tiamina con lesión de cuerpos mamilares y tálamo mediodorsal",
      "Amnesia global transitoria=Episodio brusco de amnesia anterógrada que se resuelve en horas",
      "Amnesia del desarrollo=Episódica muy alterada y semántica conservada por daño hipocampal temprano",
      "Engrama=Conjunto de cambios físicos que almacena un recuerdo concreto",
      "Anisomicina=Inhibidor de la síntesis de proteínas usado por Nader, Schafe y LeDoux"
    ],
    g: [
      "H. M. mejoró día tras día en una tarea de dibujo en ___.|espejo|perspectiva|relieve",
      "Tras su muerte, el cerebro de H. M. se cortó en ___ secciones histológicas.|2.401|1.953|3.000",
      "Clive Wearing sufrió una amnesia grave por encefalitis ___.|herpética|bacteriana|autoinmune",
      "Liu, Ramirez y Tonegawa reactivaron con ___ las neuronas del engrama en el giro dentado.|optogenética|electrodos|fármacos",
      "Nader, Schafe y LeDoux inyectaban anisomicina en ___.|la amígdala|el hipocampo|la corteza"
    ],
    tf: [
      "H. M. no podía aprender nada nuevo tras la operación.|F|Es la trampa típica: aprendía tareas procedimentales, como el dibujo en espejo, sin recordar haberlas practicado.",
      "El síndrome de Korsakoff se debe sobre todo a una lesión del hipocampo.|F|Se debe al déficit de tiamina y lesiona los cuerpos mamilares y el tálamo mediodorsal.",
      "Sin reactivación previa del recuerdo, la anisomicina en la amígdala no eliminaba el miedo condicionado.|V",
      "La balanza se inclina hacia que existe neurogénesis adulta humana, aunque su magnitud y su papel en la memoria son inciertos.|V"
    ],
    q: [
      "Un hombre con alcoholismo crónico no retiene lo que se le cuenta, ha olvidado años previos y rellena huecos con relatos inventados. ¿Qué estructuras están dañadas?|Cuerpos mamilares y tálamo mediodorsal|Hipocampo y corteza entorrinal bilateral|Lóbulo temporal anterior izquierdo|Es un síndrome de Korsakoff por déficit de tiamina, con amnesia anterógrada y retrógrada y confabulación.",
      "¿Qué conservaba H. M. tras la cirugía?|La memoria de trabajo|La formación de recuerdos declarativos|Los recuerdos del año previo|Mantenía la memoria de trabajo, la inteligencia y muchos recuerdos antiguos, pero no formaba recuerdos declarativos nuevos.",
      "¿Qué mostró el experimento de Liu, Ramirez y Tonegawa (2012)?|Activar un engrama evoca el recuerdo|La neurogénesis humana es un hecho|El propranolol borra el miedo|Reactivar con optogenética las neuronas marcadas bastó para que los ratones se quedaran inmóviles en otro contexto.",
      "¿Cuál es el estado actual de la reconsolidación como tratamiento en humanos?|Su uso clínico no está demostrado|Es eficaz según todos los metaanálisis|Carece de base en estudios animales|Los metaanálisis discrepan y Raut et al. (2022) hallan efectos limitados en el TEPT. En roedores el fenómeno es sólido."
    ],
    inc: [
      "Sobre las amnesias|La retrógrada es olvidar el futuro|La anterógrada impide formar recuerdos nuevos|Ambas suelen coexistir con distinta gravedad|Retrógrada significa olvidar lo vivido antes de la lesión, no el futuro."
    ],
    seq: [
      "Experimento de reconsolidación de Nader, Schafe y LeDoux|Condicionar el miedo a un tono>Esperar un día>Volver a presentar el tono>Inyectar anisomicina en la amígdala>Pérdida del miedo condicionado"
    ],
    cls: [
      "Tipo de amnesia|Anterógrada: no se forman recuerdos nuevos; H. M.; amnesia global transitoria|Retrógrada: pérdida de lo previo a la lesión; ley de Ribot"
    ] }
] },
{ n: 12, t: "Relojes biológicos y regulación de la vigilia", cap: 6, pir: "alta", mods: [
  { t: "Tipos de ritmos y el núcleo supraquiasmático",
    tip: "Los ritmos se clasifican en circadianos (unas 24 h), ultradianos (menos) e infradianos (más). El libre curso demuestra que son endógenos, y los zeitgebers, sobre todo la luz, los encarrilan. El periodo humano es de unas 24,18 h (Czeisler et al., 1999), no de 25. El NSQ es el reloj principal: su lesión suprime los ritmos, sus células oscilan en cultivo y su trasplante transmite el periodo del donante.",
    v: [
      "Ritmo circadiano=Ritmo endógeno con un periodo cercano a 24 horas",
      "Ritmo ultradiano=Periodo inferior a 24 horas, como el ciclo NREM-REM",
      "Ritmo infradiano=Periodo superior a 24 horas, como el ciclo menstrual",
      "Libre curso=Mantenimiento del ritmo sin pistas horarias, prueba de que es endógeno",
      "Zeitgeber=Señal ambiental que pone en hora el reloj interno",
      "Encarrilamiento=Ajuste del reloj interno al ciclo de una señal ambiental",
      "Desincronización forzada=Protocolo de Czeisler con días artificiales muy distintos de 24 horas",
      "Relojes periféricos=Osciladores del hígado o del corazón que el NSQ sincroniza"
    ],
    g: [
      "Czeisler et al. (1999) estimaron un periodo circadiano humano de unas ___ horas.|24,18|25,00|23,50",
      "El NSQ está situado justo encima del ___ óptico.|quiasma|tracto|nervio",
      "Los hámsteres homocigotos para la mutación tau tienen un periodo de unas ___ horas.|20|22|25",
      "El zeitgeber más potente es la ___.|luz|comida|temperatura",
      "Ralph et al. (1990) trasplantaron a los hámsteres tejido de NSQ ___.|fetal|adulto|periférico"
    ],
    tf: [
      "El ciclo humano en libre curso es de unas 25 horas.|F|Esa cifra estaba inflada por la luz artificial de la tarde. Con desincronización forzada se estimó en unas 24,18 h.",
      "Tras lesionar el NSQ, el animal deja de dormir y de comer.|F|Sigue durmiendo y comiendo, pero repartido al azar a lo largo del día: lo que se pierde es el ritmo.",
      "Las células del NSQ mantienen una actividad rítmica aisladas en cultivo.|V",
      "Con horarios de comida muy desplazados, algunos relojes periféricos pueden desacoplarse del central.|V"
    ],
    q: [
      "Un hámster normal con el NSQ lesionado recibe un trasplante de NSQ de un hámster homocigoto tau. ¿Qué ritmo mostrará?|Uno de unas 20 horas|Uno de unas 24 horas|Ningún ritmo estable|El periodo viaja con el tejido: el receptor adopta el ritmo del donante (Ralph et al., 1990).",
      "¿Qué demuestra que el ritmo sueño-vigilia persista sin pistas horarias?|Que es endógeno|Que está encarrilado|Que es ultradiano|En libre curso el ritmo se mantiene, aunque con un periodo que ya no es exactamente de 24 horas.",
      "¿A qué tipo de ritmo pertenece el ciclo NREM-REM de unos 90 minutos?|Ultradiano|Infradiano|Circadiano|Su periodo es inferior a 24 horas. Los infradianos, como el ciclo menstrual, superan las 24 horas.",
      "¿Qué refleja la duración del malestar del desfase horario tras volar de Madrid a Nueva York?|El tiempo de reencarrilarse|La pérdida del ritmo endógeno|El paso a un ritmo infradiano|Dura lo que tarda el reloj en volver a encarrilarse con la luz del nuevo huso horario."
    ],
    inc: [
      "Sobre el núcleo supraquiasmático|Está situado en la glándula pineal|Se localiza en el hipotálamo anterior|Sincroniza los relojes periféricos|Situar el reloj en la pineal es una trampa típica: la pineal es solo una vía de salida."
    ],
    seq: [],
    cls: [
      "Tipo de ritmo|Circadiano: ciclo sueño-vigilia; temperatura corporal; secreción de melatonina|Ultradiano: ciclo NREM-REM|Infradiano: ciclo menstrual; hibernación"
    ] },
  { t: "Genes reloj, melanopsina y melatonina",
    tip: "En el bucle molecular, CLOCK y BMAL1 activan los genes Per y Cry, cuyas proteínas se acumulan, entran en el núcleo e inhiben a CLOCK/BMAL1 hasta degradarse, en unas 24 horas. La luz llega al NSQ por el tracto retinohipotalámico desde células ganglionares con melanopsina. El NSQ comunica la hora mediante la melatonina pineal, secretada de noche y suprimida por la luz: una señal de oscuridad, no un somnífero.",
    v: [
      "Gen period=Primer gen reloj, hallado en mutantes de mosca por Konopka y Benzer (1971)",
      "CLOCK y BMAL1=Proteínas que se unen y activan la transcripción de Per y Cry",
      "PER y CRY=Proteínas que entran en el núcleo y frenan su propia producción",
      "Caseína cinasa 1ε=Enzima que fosforila PER, alterada en la mutación tau",
      "Tracto retinohipotalámico=Vía que lleva la información de luz de la retina al NSQ",
      "Melanopsina=Fotopigmento de células ganglionares que informan al NSQ del nivel de luz",
      "Glándula pineal=Secreta melatonina como vía de salida del reloj",
      "Ganglio cervical superior=Ganglio simpático previo a la pineal en la vía de la melatonina"
    ],
    g: [
      "Hall, Rosbash y Young recibieron el Nobel en ___ por el mecanismo del reloj circadiano.|2017|2000|2014",
      "Las células ganglionares con melanopsina funcionan como un ___ que informa del nivel de luz.|luxómetro|detector de formas|cronómetro",
      "La duración del bucle depende en especial de la estabilidad de las proteínas ___.|PER|CLOCK|BMAL1",
      "La melatonina se secreta sobre todo durante la ___.|noche|mañana|tarde",
      "Mirar una pantalla brillante a medianoche puede ___ el inicio de la secreción de melatonina.|retrasar|adelantar|duplicar"
    ],
    tf: [
      "La información de luz que encarrila el NSQ procede sobre todo de conos y bastones.|F|Procede de células ganglionares con melanopsina. Algunas personas ciegas sin conos ni bastones funcionales se encarrilan.",
      "La melatonina es un somnífero natural que el cuerpo libera para hacernos dormir.|F|Es una señal de hora biológica: en especies nocturnas también se secreta de noche, cuando están activas.",
      "La duración nocturna de la secreción de melatonina permite a muchos animales detectar la estación del año.|V",
      "La mutación tau del hámster altera la degradación de PER y hace que el bucle gire más deprisa.|V"
    ],
    q: [
      "Una persona ciega, sin conos ni bastones funcionales, mantiene su ritmo encarrilado al ciclo de luz. ¿Qué lo explica?|Las ganglionares con melanopsina|La secreción constante de melatonina|Los relojes periféricos del hígado|Estas células no distinguen formas, pero informan al NSQ del nivel general de luz por el tracto retinohipotalámico.",
      "¿Qué ocurre cuando PER y CRY entran en el núcleo?|Inhiben a CLOCK/BMAL1|Activan a CLOCK/BMAL1|Activan a Per y Cry|Frenan su propia producción. Cuando se degradan, CLOCK/BMAL1 queda libre y el ciclo vuelve a empezar.",
      "¿Qué estructura sigue al núcleo paraventricular en la vía de la melatonina?|Columna intermediolateral|Ganglio cervical superior|Glándula pineal|La vía va del NSQ al paraventricular, la columna intermediolateral de la médula, el ganglio cervical superior y la pineal.",
      "¿Quiénes identificaron el gen period en la mosca de la fruta?|Konopka y Benzer|Hall, Rosbash y Young|Berson, Dunn y Takao|Lo hicieron en 1971. Hall, Rosbash y Young descifraron el mecanismo, y Berson, Dunn y Takao estudiaron la melanopsina."
    ],
    inc: [
      "Sobre la melatonina|Su secreción aumenta con la luz|La secreta la glándula pineal|Funciona como señal de oscuridad|La luz suprime la melatonina, que se secreta sobre todo durante la noche."
    ],
    seq: [
      "Vía de la melatonina|Núcleo supraquiasmático>Núcleo paraventricular del hipotálamo>Columna intermediolateral de la médula>Ganglio cervical superior>Glándula pineal"
    ],
    cls: [] },
  { t: "Los sistemas que nos mantienen despiertos",
    tip: "La vigilia la mantienen redes con neurotransmisores distintos: acetilcolina de la protuberancia, el mesencéfalo y el prosencéfalo basal, noradrenalina del locus coeruleus, serotonina del rafe, histamina del tuberomamilar, orexina del hipotálamo lateral y dopamina del mesencéfalo. La orexina estabiliza la vigilia. El VLPO libera GABA y galanina para silenciar esos sistemas, y la adenosina acumulada favorece la somnolencia.",
    v: [
      "Prosencéfalo basal=Origen de grupos colinérgicos que activan la corteza en vigilia y REM",
      "Núcleos del rafe=Origen de la serotonina, casi silentes en REM",
      "Núcleo tuberomamilar=Grupo histaminérgico del hipotálamo posterior",
      "Orexina=Péptido del hipotálamo lateral que estabiliza la vigilia, también llamado hipocretina",
      "VLPO=Núcleo preóptico ventrolateral, que promueve el sueño",
      "Galanina=Sustancia inhibidora que el VLPO libera junto con el GABA",
      "Adenosina=Señal de presión de sueño que crece con la vigilia prolongada",
      "Narcolepsia de tipo 1=Enfermedad causada por la pérdida de las neuronas de orexina"
    ],
    g: [
      "Los antihistamínicos clásicos dan somnolencia porque bloquean los receptores cerebrales de ___.|histamina|adenosina|orexina",
      "La cafeína bloquea los receptores de ___.|adenosina|histamina|GABA",
      "Las neuronas ___ están activas tanto en vigilia como en REM.|colinérgicas|serotoninérgicas|noradrenérgicas",
      "El VLPO se sitúa en el hipotálamo ___.|anterior|lateral|posterior",
      "Las neuronas de orexina se sitúan en el hipotálamo ___.|lateral|anterior|posterior"
    ],
    tf: [
      "Las neuronas noradrenérgicas, serotoninérgicas e histaminérgicas disparan mucho en vigilia y casi nada en REM.|V",
      "La cafeína elimina el cansancio acumulado al reducir la adenosina cerebral.|F|Bloquea los receptores de adenosina: impide que la señal se detecte, y el cansancio reaparece al pasar el efecto.",
      "Hoy se considera que el sistema reticular activador es un sistema único con un solo neurotransmisor.|F|Es un conjunto de redes con neurotransmisores distintos, como acetilcolina, noradrenalina, serotonina, histamina u orexina.",
      "La función principal de la orexina es mantener la vigilia estable más que despertar.|V"
    ],
    q: [
      "Tras tomar un antihistamínico antiguo para la alergia, Elena siente mucho sueño. ¿Qué sistema activador se ha bloqueado?|El del núcleo tuberomamilar|El del locus coeruleus|El de los núcleos del rafe|Los antihistamínicos que cruzan la barrera hematoencefálica bloquean la histamina del núcleo tuberomamilar.",
      "¿Qué neurotransmisor corresponde al locus coeruleus?|Noradrenalina|Serotonina|Acetilcolina|El rafe es serotoninérgico, y la protuberancia, el mesencéfalo y el prosencéfalo basal aportan acetilcolina.",
      "¿Sobre qué actúa el VLPO durante el sueño?|Sobre los sistemas del despertar|Sobre las células con melanopsina|Sobre el núcleo supraquiasmático|Libera GABA y galanina sobre el locus coeruleus, el rafe, el tuberomamilar y los grupos colinérgicos.",
      "¿Qué sistema activador está muy activo tanto en vigilia como en REM?|El colinérgico|El serotoninérgico|El histaminérgico|En ambos estados la corteza muestra actividad rápida. Los sistemas serotoninérgico e histaminérgico casi callan en REM."
    ],
    inc: [
      "Sobre la orexina|Su exceso causa la narcolepsia de tipo 1|Proyecta a los demás sistemas activadores|También se denomina hipocretina|La narcolepsia de tipo 1 se debe a la pérdida de neuronas de orexina, no a su exceso."
    ],
    seq: [],
    cls: [
      "Actividad durante el REM|Activos en REM: grupos colinérgicos de la protuberancia; grupos colinérgicos del prosencéfalo basal|Casi silentes en REM: locus coeruleus; núcleos del rafe; núcleo tuberomamilar"
    ] },
  { t: "El interruptor del sueño y el modelo de dos procesos",
    tip: "Saper, Chou y Scammell (2001) describen un interruptor flip-flop: el VLPO y los sistemas del despertar se inhiben mutuamente, por lo que el paso entre vigilia y sueño es brusco. La orexina sujeta el interruptor en la vigilia, y sin ella oscila, como en la narcolepsia. Las neuronas REM-on del núcleo sublaterodorsal producen la atonía del REM. Borbély (1982) explicó la propensión al sueño con el proceso S, homeostático, y el C, circadiano.",
    v: [
      "Interruptor flip-flop=Circuito biestable de inhibición mutua entre VLPO y sistemas del despertar",
      "Neuronas REM-on=Neuronas del núcleo sublaterodorsal que inician el REM",
      "Neuronas REM-off=Neuronas de la protuberancia que frenan el sueño REM",
      "Atonía muscular=Parálisis típica del REM que impide ejecutar los movimientos del sueño",
      "Proceso S=Presión de sueño que aumenta con la vigilia y disminuye al dormir",
      "Proceso C=Oscilación de unas 24 horas, controlada por el NSQ, que favorece la vigilia de día",
      "Borbély (1982)=Autor del modelo de dos procesos de la propensión al sueño",
      "Segundo aire=Vigilia a media mañana tras una noche en blanco por empuje circadiano"
    ],
    g: [
      "En el interruptor, el VLPO y los sistemas del despertar se inhiben de forma ___.|mutua|aditiva|gradual",
      "Las neuronas REM-on provocan la atonía a través de conexiones con el ___.|bulbo|cerebelo|tálamo",
      "La adenosina es una de las señales del proceso ___.|homeostático|circadiano|ultradiano",
      "El sueño se inicia cuando la presión homeostática supera el ___ que marca el proceso circadiano.|umbral|ritmo|periodo",
      "Una siesta larga a las ocho de la tarde ___ el proceso S y dificulta dormirse a la hora habitual.|reduce|aumenta|retrasa"
    ],
    tf: [
      "Como el cansancio crece de forma gradual, el paso de la vigilia al sueño también es gradual.|F|Por la inhibición mutua del interruptor, dormirse es relativamente brusco y apenas hay estados intermedios.",
      "El proceso C favorece el sueño durante la noche biológica con independencia de cuánto se haya dormido.|V",
      "El proceso S está controlado por el núcleo supraquiasmático.|F|El NSQ controla el proceso C, circadiano. El S es homeostático y depende del tiempo de vigilia.",
      "Sin orexina, el interruptor oscila con facilidad entre vigilia y sueño.|V"
    ],
    q: [
      "Tras una noche sin dormir, Jorge nota a media mañana que se le pasa el sueño durante un rato. ¿Qué lo explica según Borbély?|El proceso C empuja hacia la vigilia|El proceso S ha bajado por completo|La adenosina se ha acumulado más|Es el «segundo aire»: el proceso circadiano favorece la vigilia aunque la presión homeostática siga muy alta.",
      "¿Qué inconveniente tiene un interruptor biestable como el del sueño?|Se vuelve inestable si un lado se debilita|Permanece mucho en estados intermedios|Impide pasar con rapidez de un estado a otro|Por eso la orexina, al reforzar el lado de la vigilia, actúa como un dedo que sujeta el interruptor.",
      "¿Dónde se sitúan las neuronas REM-on?|En el núcleo sublaterodorsal|En el núcleo preóptico ventrolateral|En el núcleo tuberomamilar|Están en la protuberancia, en el núcleo sublaterodorsal o región perilocus coeruleus.",
      "¿Qué estructura controla el proceso C del modelo de Borbély?|El núcleo supraquiasmático|El núcleo preóptico ventrolateral|El núcleo sublaterodorsal|El proceso C es la oscilación circadiana del NSQ. El VLPO promueve el sueño y el sublaterodorsal inicia el REM."
    ],
    inc: [
      "Sobre el modelo de dos procesos|El proceso S disminuye durante la vigilia|El proceso C oscila con un periodo de 24 horas|El despertar llega cuando baja la presión|El proceso S aumenta con la vigilia y disminuye durante el sueño."
    ],
    seq: [],
    cls: [
      "Proceso de Borbély|Proceso S: homeostático; adenosina; sube con la vigilia|Proceso C: circadiano; núcleo supraquiasmático; oscilación de 24 horas"
    ] }
] }
);

// SAIMAP Psicología · Fisiológica · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "La arquitectura del sueño y sus alteraciones", cap: 6, pir: "alta", mods: [
  { t: "Del EEG a los estadios: N1, N2, N3 y REM",
    tip: "El sueño se estudia con polisomnografía, que combina EEG, EOG y EMG. La AASM (Iber et al., 2007) unió los estadios 3 y 4 de Rechtschaffen y Kales en N3, de modo que hoy se distinguen W, N1, N2, N3 y R. Cada estadio tiene su rasgo EEG: alfa en la vigilia relajada, theta y ondas del vértex en N1, husos y complejos K en N2, ondas delta en N3 y baja amplitud con atonía en REM.",
    v: [
      "Polisomnografía=Registro simultáneo de EEG, EOG y EMG, más canales clínicos, durante el sueño",
      "Electrooculograma=Canal que registra los movimientos de los ojos durante el sueño",
      "Electromiograma=Canal que mide el tono muscular, normalmente en el mentón",
      "Husos del sueño=Ráfagas breves de actividad de unos 12–14 Hz que marcan el N2",
      "Complejo K=Onda amplia y aislada, espontánea o provocada por un ruido, típica del N2",
      "Ondas delta=Actividad de 2 Hz o menos y 75 µV o más, propia del N3",
      "Sueño paradójico=Otro nombre del REM: EEG parecido a la vigilia con los músculos posturales paralizados",
      "Ondas del vértex=Ondas agudas que, junto a theta de baja amplitud, caracterizan el N1"
    ],
    g: [
      "En la vigilia relajada con los ojos cerrados domina el ritmo ___.|alfa|theta|delta",
      "Aserinsky y Kleitman describieron el sueño REM en ___.|1953|1957|1968",
      "Para puntuar una época como N3, las ondas delta deben ocupar al menos el ___ de ella.|20 %|50 %|75 %",
      "La AASM unió los antiguos estadios 3 y 4 porque solo diferían en ___.|grado|frecuencia|duración",
      "Durante el REM siguen activos los músculos oculares y los ___.|respiratorios|del mentón|posturales"
    ],
    tf: [
      "Al despertar en periodos REM, los participantes de Aserinsky y Kleitman informaron de sueños en 20 de 27 ocasiones.|V",
      "La clasificación actual de la AASM mantiene cuatro estadios de sueño no REM.|F|Desde Iber et al. (2007), los estadios 3 y 4 forman el N3, así que el NREM tiene tres estadios: N1, N2 y N3.",
      "En el sueño NREM también se sueña, aunque con relatos más breves que en el REM.|V",
      "Los husos del sueño y los complejos K son el rasgo distintivo del N3.|F|Marcan el N2. El N3 se define por ondas delta en al menos el 20 % de cada época de registro."
    ],
    q: [
      "Un registro muestra movimientos oculares rápidos, EEG de baja amplitud y frecuencias mixtas y un EMG del mentón casi plano. ¿Qué estadio es?|R (REM)|N1|Vigilia (W)|Movimientos oculares rápidos con atonía muscular definen el REM, pese a su EEG parecido al de la vigilia.",
      "Un ruido provoca en el EEG una onda grande y aislada sobre un fondo theta. ¿En qué estadio está la persona?|N2|N3|REM|El complejo K, espontáneo o provocado por un ruido, es junto a los husos el marcador del N2.",
      "¿Por qué el N3 produce ondas lentas y amplias?|Las neuronas corticales disparan muy sincronizadas|La corteza queda casi inactiva y en silencio|Los músculos posturales entran en atonía completa|La sincronía del disparo cortical genera las ondas delta. Es además el estadio del que más cuesta despertar.",
      "Suena el despertador en mitad del N3, al principio de la noche. ¿Qué es lo más probable?|Un despertar torpe y desorientado|Recordar con detalle lo soñado|Un despertar rápido y lúcido|El N3 es el sueño más profundo. Al final de la noche es más fácil interrumpir un REM y recordar lo soñado."
    ],
    inc: [
      "Sobre la polisomnografía y los estadios|El EMG registra los movimientos de los ojos|El N1 es una etapa de transición al sueño|El REM se llama también sueño paradójico|Los movimientos oculares los registra el EOG. El EMG mide el tono muscular, normalmente en el mentón."
    ],
    seq: [
      "Historia de la clasificación del sueño|Aserinsky y Kleitman describen el REM>Dement y Kleitman describen los ciclos>Rechtschaffen y Kales definen cuatro estadios NREM>La AASM une los estadios 3 y 4 en N3"
    ],
    cls: [
      "Rasgo característico del estadio|N2: husos del sueño; complejos K|N3: ondas delta; máxima sincronía cortical|REM: ondas en dientes de sierra; movimientos oculares rápidos; atonía muscular"
    ] },
  { t: "Ciclos, edad y funciones del sueño",
    tip: "Una noche adulta tiene de cuatro a seis ciclos NREM-REM de unos 90 minutos, un ritmo ultradiano. El N3 predomina en la primera mitad, ligado al proceso homeostático, y los periodos REM se alargan hacia el final, ligados al reloj circadiano. El REM baja desde el 50 % del recién nacido, y en la vejez disminuye el N3 y aumentan los despertares. La función del sueño sigue en debate y probablemente es múltiple.",
    v: [
      "Ciclo de sueño=Recorrido NREM-REM de unos 90 minutos que se repite de cuatro a seis veces",
      "Sueño en la vejez=Menos N3, más despertares y un descanso más fragmentado",
      "Hipnograma=Gráfico que representa la sucesión de estadios a lo largo de una noche",
      "Hipótesis restauradora=El sueño recuperaría organismo y cerebro del desgaste de la vigilia",
      "Homeostasis sináptica=Propuesta de Tononi y Cirelli: el sueño lento reajusta a la baja las sinapsis",
      "Sistema glinfático=Circulación de LCR que eliminaría desechos cerebrales, hipótesis discutida",
      "Compensación tras privación=Más sueño profundo en cuanto se puede dormir después de perder sueño",
      "Hormona del crecimiento=Se secreta en buena parte durante el sueño de ondas lentas"
    ],
    g: [
      "En un adulto joven, el sueño REM ocupa aproximadamente ___ del total.|una cuarta parte|la mitad|una décima parte",
      "En los recién nacidos, el sueño REM supone en torno al ___ del sueño.|50 %|25 %|10 %",
      "El N3 se asocia sobre todo al proceso ___.|homeostático|circadiano|ultradiano",
      "La tendencia a retrasar la hora de dormir y de despertar es típica de la ___.|adolescencia|infancia|vejez",
      "La hipótesis glinfática se basó en estudios con ___ (Xie et al., 2013).|ratones|primates|humanos"
    ],
    tf: [
      "El N2 ocupa alrededor de la mitad del sueño de un adulto joven.|V",
      "Los periodos REM son más largos en los primeros ciclos de la noche.|F|Es al revés: en la primera mitad predomina el N3 y los periodos REM se alargan hacia el final.",
      "Que una persona mayor tenga menos N3 y más despertares indica por sí mismo un trastorno del sueño.|F|Forma parte del envejecimiento normal y no indica por sí solo un trastorno.",
      "Miao et al. (2024) hallaron menos eliminación de un colorante en ratones dormidos que en despiertos.|V"
    ],
    q: [
      "Una estudiante pasa la noche en vela antes de un examen. ¿Qué cabe esperar?|Peor rendimiento y sueño muy profundo la noche siguiente|Rendimiento normal si duerme una siesta breve al día siguiente|Menos sueño profundo la noche siguiente por adaptación|La privación empeora atención y rendimiento, y el organismo la compensa con más sueño profundo en cuanto puede.",
      "¿Por qué el N3 se concentra al principio de la noche?|Porque la presión homeostática es máxima|Porque el reloj circadiano lo favorece entonces|Porque los periodos REM son entonces más largos|El sueño de ondas lentas sigue al proceso homeostático, más alto al inicio. El REM está más ligado al reloj circadiano.",
      "Según Tononi y Cirelli, ¿qué ocurre durante el sueño de ondas lentas?|Se reajustan a la baja las sinapsis|Se crean sinapsis nuevas de forma masiva|Se eliminan desechos a través del LCR|Proponen que la vigilia refuerza muchas sinapsis y que el sueño lento las reajusta para mantener el equilibrio.",
      "¿Qué afirmación sobre la función del sueño refleja mejor el estado actual?|Probablemente cumple varias funciones|Su función única es consolidar memoria|Sirve sobre todo para limpiar toxinas|No hay una respuesta única aceptada. La limpieza glinfática es una hipótesis discutida, no un hecho."
    ],
    inc: [
      "Sobre los cambios del sueño con la edad|En la infancia el REM aumenta respecto al nacimiento|El recién nacido duerme en periodos cortos repartidos|En la vejez el sueño se fragmenta más|En la infancia el REM baja desde el 50 % del recién nacido y el sueño se concentra en la noche."
    ],
    seq: [
      "Primer ciclo de la noche|Vigilia relajada>N1>N2>N3>Ascenso a estadios más ligeros>Primer periodo REM breve"
    ],
    cls: [
      "Mitad de la noche en que predomina|Primera mitad: abundante N3; mayor presión homeostática; despertar torpe y desorientado|Segunda mitad: periodos REM más largos; mayor peso circadiano; recuerdo de lo soñado"
    ] },
  { t: "Insomnio, narcolepsia y apnea",
    tip: "El insomnio da síntomas a un tercio de los adultos y cumple criterios de trastorno en un 10 %. Es más frecuente en mujeres y su primera línea es la TCC-I. La narcolepsia de tipo 1 se debe a la pérdida del 85–95 % de las neuronas de orexina (Thannickal et al., 2000), con una base probablemente autoinmune. En la apnea obstructiva la vía aérea se colapsa mientras persiste el esfuerzo respiratorio, y se trata con CPAP.",
    v: [
      "Insomnio=Dificultad para iniciar o mantener el sueño, o despertar precoz, con malestar diurno",
      "TCC-I=Primera línea del insomnio crónico: restricción del tiempo en cama y control de estímulos",
      "Cataplejía=Pérdida brusca del tono muscular, con conciencia, desencadenada por emociones",
      "Parálisis del sueño=Incapacidad para moverse al quedarse dormido o al despertar",
      "Alucinaciones hipnagógicas=Imágenes vívidas parecidas a sueños en la transición al sueño",
      "HLA-DQB1∗06:02=Alelo muy asociado a la narcolepsia, que apunta a un origen autoinmune",
      "Apnea central=Cese a la vez de flujo y esfuerzo por fallo de la orden respiratoria del tronco",
      "CPAP=Mascarilla que mantiene abierta la vía aérea con un flujo de aire continuo"
    ],
    g: [
      "Thannickal et al. hallaron una reducción del ___ de las neuronas de orexina en la narcolepsia.|85–95 %|40–50 %|10–20 %",
      "Alrededor del ___ de los adultos cumple criterios de trastorno de insomnio.|10 %|33 %|50 %",
      "La cataplejía es una intrusión en la vigilia de la ___ propia del REM.|atonía|sincronía|actividad",
      "En la apnea obstructiva, el aire deja de pasar aunque el ___ respiratorio continúa.|esfuerzo|flujo|ronquido",
      "La prevalencia de la narcolepsia se estima en 25–50 casos por cada ___ habitantes.|100.000|10.000|1.000"
    ],
    tf: [
      "Durante un ataque de cataplejía la persona pierde la conciencia.|F|Es una trampa típica. La persona sigue consciente y pierde de forma brusca el tono muscular.",
      "En el líquido cefalorraquídeo de la narcolepsia de tipo 1, la orexina está muy baja o es indetectable.|V",
      "Acostarse antes para recuperar el sueño perdido es la base de la TCC-I.|F|La TCC-I restringe el tiempo en la cama para romper la asociación entre la cama y la preocupación.",
      "Cada apnea obstructiva suele terminar con un microdespertar que la persona no recuerda.|V"
    ],
    q: [
      "Un hombre ronca, su pareja observa pausas en su respiración y, aunque duerme muchas horas, se levanta cansado. ¿Qué conviene sospechar?|Apnea obstructiva del sueño|Narcolepsia de tipo 1|Insomnio de mantenimiento|Ronquidos, pausas observadas y somnolencia pese a dormir mucho son típicos. El diagnóstico se basa en la polisomnografía.",
      "Una joven se desploma sin perder la conciencia cada vez que ríe a carcajadas y tiene ataques de sueño diurnos. ¿Qué alteración biológica es más probable?|Pérdida de neuronas de orexina|Lesión del núcleo supraquiasmático|Colapso de la vía aérea superior|Cataplejía y somnolencia diurna son propias de la narcolepsia de tipo 1, debida a la pérdida de neuronas de orexina.",
      "¿Qué distingue una apnea central de una obstructiva?|Se detiene también el esfuerzo respiratorio|Persiste el esfuerzo aunque cese el flujo|Solo aparece durante la fase de sueño REM|En la central falla la orden respiratoria del tronco del encéfalo y cesan a la vez el flujo y el esfuerzo.",
      "¿Qué apoya un origen autoinmune de la narcolepsia de tipo 1?|Su fuerte asociación con un alelo HLA|Su asociación con el ritmo circadiano|Su relación con un exceso de melatonina|La estrecha asociación con el alelo HLA-DQB1∗06:02 apunta a un mecanismo autoinmune."
    ],
    inc: [
      "Sobre el insomnio|Es más frecuente en hombres|Un tercio de los adultos tiene síntomas|Su primera línea crónica es la TCC-I|Es más frecuente en mujeres. Alrededor del 10 % de los adultos cumple criterios de trastorno."
    ],
    seq: [],
    cls: [
      "Trastorno del sueño|Narcolepsia de tipo 1: cataplejía; parálisis del sueño; pérdida de orexina|Apnea obstructiva: ronquidos; colapso de la vía aérea; tratamiento con CPAP|Insomnio: despertar precoz; tratamiento con TCC-I"
    ] },
  { t: "Parasomnias, trastorno de conducta del sueño REM y ritmos alterados",
    tip: "Las parasomnias del NREM, como el sonambulismo y los terrores nocturnos, son despertares incompletos desde el N3: aparecen en la primera mitad de la noche, son más frecuentes en la infancia y no se recuerdan. Las del REM, como las pesadillas y el TCSR, aparecen en la segunda mitad y suelen recordarse. El TCSR idiopático es un marcador prodrómico de sinucleinopatías, con una conversión del 6,3 % anual (Postuma et al., 2019).",
    v: [
      "Parasomnias=Conductas o experiencias anormales durante el sueño o en sus transiciones",
      "Terror nocturno=Despertar incompleto desde el N3 con gritos y activación, sin recuerdo posterior",
      "Pesadilla=Sueño angustioso del REM del que se despierta orientado y que se puede contar",
      "TCSR=Fallo de la atonía del REM que lleva a representar lo soñado",
      "Sinucleinopatías=Parkinson, demencia con cuerpos de Lewy y atrofia multisistémica",
      "Piernas inquietas=Necesidad imperiosa de mover las piernas en reposo, por la tarde-noche",
      "Insomnio familiar fatal=Enfermedad priónica muy rara que daña el tálamo y suprime el sueño",
      "Fase de sueño retrasada=Dormirse y despertarse mucho más tarde de lo deseado, típico en adolescentes"
    ],
    g: [
      "En el estudio de Postuma et al., la conversión del TCSR idiopático a sinucleinopatía fue del ___ anual.|6,3 %|10,6 %|73,5 %",
      "A los 8 años, ___ de los pacientes con TCSR idiopático había desarrollado una sinucleinopatía.|la mitad|un tercio|la décima parte",
      "Las parasomnias del NREM surgen sobre todo del estadio ___.|N3|N2|REM",
      "El TCSR aparece sobre todo en ___.|adultos mayores|niños pequeños|adolescentes",
      "El insomnio familiar fatal es una enfermedad por ___ que daña el tálamo.|priones|virus|autoanticuerpos"
    ],
    tf: [
      "Los terrores nocturnos son parasomnias del sueño REM.|F|Es la trampa típica: surgen del N3, en la primera mitad de la noche, y no se recuerdan.",
      "Al despertar a una persona con TCSR, suele relatar un sueño coherente con sus movimientos.|V",
      "En el jet lag, el reloj interno se ajusta al nuevo horario en cuanto se recibe la luz local.|F|Tras cruzar varios husos horarios, el reloj tarda días en encarrilarse con la nueva luz.",
      "El síndrome de piernas inquietas aparece en reposo y dificulta conciliar el sueño.|V"
    ],
    q: [
      "Un hombre de 67 años da puñetazos dormido y, al despertarlo, cuenta que se defendía de un ataque. No hay otra causa. ¿Qué conviene vigilar a largo plazo?|La aparición de una sinucleinopatía|La pérdida de neuronas de orexina|El colapso de la vía aérea superior|El TCSR idiopático es un marcador prodrómico de Parkinson, demencia con cuerpos de Lewy y atrofia multisistémica.",
      "Un niño se despierta de madrugada angustiado, reconoce a sus padres y les cuenta que un monstruo le perseguía. ¿Qué es lo más probable?|Una pesadilla|Un terror nocturno|Un despertar confusional|Despertar orientado y relato del sueño indican una pesadilla del REM. En el terror nocturno no reconoce a nadie ni recuerda nada.",
      "¿Qué mecanismo explica que en el TCSR se representen los sueños?|Desaparece la atonía muscular del REM|El despertar desde el N3 es incompleto|Aumenta la sincronía cortical del N3|Durante el REM falla la atonía muscular y la persona ejecuta lo que sueña, a veces con lesiones.",
      "Una enfermera que trabaja de noche duerme mal por la mañana. ¿Qué lo explica mejor?|Su reloj favorece la vigilia cuando intenta dormir|Su presión homeostática es nula tras la guardia|Su sueño REM se desplaza a la primera mitad|En el trabajo a turnos se intenta dormir cuando el reloj favorece la vigilia y estar despierto cuando favorece el sueño."
    ],
    inc: [
      "Sobre las parasomnias del NREM|Suelen aparecer en la segunda mitad de la noche|Son más frecuentes en la infancia|Son despertares incompletos desde el N3|Surgen del N3, abundante en la primera mitad de la noche. La segunda mitad es la de las parasomnias del REM."
    ],
    seq: [],
    cls: [
      "Tipo de parasomnia|Parasomnias del NREM: sonambulismo; terrores nocturnos; despertar confusional; escaso recuerdo|Parasomnias del REM: pesadillas; trastorno de conducta del sueño REM; recuerdo del sueño"
    ] }
] },
{ n: 14, t: "Diferenciación sexual y conducta reproductora", cap: 6, pir: "media", mods: [
  { t: "De los cromosomas a las gónadas: SRY y el principio de Jost",
    tip: "La diferenciación sexual avanza en tres niveles: cromosómico, gonadal y fenotípico. El gen SRY del cromosoma Y (Sinclair et al., 1990) convierte la gónada indiferenciada en testículo. Según el principio de Jost, el fenotipo masculino requiere las secreciones del testículo fetal: testosterona para los conductos de Wolff, AMH para la regresión de los de Müller y DHT para los genitales externos. El fenotipo femenino no es pasivo: el ovario requiere genes propios.",
    v: [
      "SRY=Gen del cromosoma Y que convierte la gónada indiferenciada en testículo",
      "Gónada indiferenciada=Órgano embrionario que puede convertirse en testículo o en ovario",
      "Principio de Jost=Sin secreciones del testículo fetal, el fenotipo resultante es femenino",
      "Células de Leydig=Células testiculares que producen la testosterona fetal",
      "Células de Sertoli=Células testiculares que secretan la hormona antimülleriana",
      "Conductos de Wolff=Originan el epidídimo, los conductos deferentes y las vesículas seminales",
      "Conductos de Müller=Formarían el útero, las trompas y la parte superior de la vagina",
      "5α-reductasa=Enzima que forma DHT a partir de testosterona en los tejidos diana"
    ],
    g: [
      "La DHT masculiniza los genitales externos y la ___.|próstata|vesícula seminal|trompa",
      "Sinclair et al. identificaron el gen SRY en ___.|1990|1959|1974",
      "Jost extirpó las gónadas a fetos de ___ antes de que se diferenciaran.|conejo|cobaya|rata",
      "Los genitales externos femeninos dependen sobre todo de la ausencia de ___.|andrógenos|estrógenos|progesterona",
      "La AMH hace ___ los conductos de Müller.|regresar|desarrollarse|masculinizarse"
    ],
    tf: [
      "En el embrión XY, la testosterona es la responsable de la regresión de los conductos de Müller.|F|Es la trampa típica: la regresión de Müller se debe a la AMH de Sertoli. La testosterona desarrolla los de Wolff.",
      "Hay personas XX que portan un fragmento del Y con SRY y desarrollan testículos.|V",
      "Los genitales externos femeninos se forman por acción de los estrógenos fetales.|F|Dependen sobre todo de la ausencia de andrógenos, no de los estrógenos fetales.",
      "En el experimento de Jost, los fetos de conejo sin gónadas nacieron con fenotipo femenino, fueran XX o XY.|V"
    ],
    q: [
      "Un embrión XY tiene testículos que producen testosterona, pero carece de AMH funcional. ¿Qué cabe esperar?|Conservará derivados de los conductos de Müller|Tendrá genitales externos de aspecto femenino|No llegará a desarrollar los conductos de Wolff|Sin AMH los conductos de Müller no regresan. La testosterona y la DHT siguen actuando sobre Wolff y los genitales.",
      "¿Qué demuestra que lo decisivo es el gen SRY y no el cromosoma Y entero?|Personas XX con SRY que desarrollan testículos|Fetos de conejo castrados con fenotipo femenino|Personas XY sin útero por acción de la AMH|Hay personas XX con un fragmento del Y con SRY que forman testículos, y personas XY con SRY inactivo que no.",
      "¿Qué célula fetal produce la hormona que desarrolla los conductos de Wolff?|La célula de Leydig|La célula de Sertoli|El folículo ovárico|La testosterona de las células de Leydig desarrolla los conductos de Wolff. Sertoli secreta la AMH.",
      "¿Qué matiz conviene añadir al llamar «por defecto» al fenotipo femenino?|El ovario también requiere genes propios|Los estrógenos fetales forman los genitales|La AMH actúa también en el embrión XX|El fenotipo femenino no es un camino pasivo en sentido literal: la formación del ovario requiere genes propios."
    ],
    inc: [
      "Sobre las secreciones del testículo fetal|La DHT desarrolla epidídimo y vesículas seminales|La AMH procede de las células de Sertoli|La testosterona procede de las células de Leydig|Epidídimo y vesículas seminales derivan de Wolff por la testosterona. La DHT actúa en genitales externos y próstata."
    ],
    seq: [
      "Cascada de la diferenciación masculina|Expresión del gen SRY>La gónada indiferenciada forma un testículo>Leydig y Sertoli secretan testosterona y AMH>La 5α-reductasa forma DHT en los tejidos diana>Se masculinizan los genitales externos"
    ],
    cls: [
      "Hormona testicular y su acción|Testosterona: desarrollo de los conductos de Wolff; epidídimo y vesículas seminales|AMH: regresión de los conductos de Müller; células de Sertoli|DHT: pene y escroto; próstata"
    ] },
  { t: "Hormonas organizadoras y activadoras, y dimorfismos cerebrales",
    tip: "Phoenix et al. (1959) mostraron que la testosterona prenatal masculiniza de forma duradera la conducta de las cobayas hembras. Los efectos organizadores actúan en un periodo crítico temprano y son permanentes, y los activadores aparecen desde la pubertad y son reversibles. En roedores masculiniza sobre todo el estradiol formado por la aromatasa, y la alfa-fetoproteína protege a las hembras. Hay diferencias cerebrales medias entre sexos, pero no dos tipos discretos de cerebro.",
    v: [
      "Lordosis=Postura de receptividad sexual de las hembras de roedor",
      "Efecto organizador=Acción hormonal temprana que modifica tejidos y circuitos de forma permanente",
      "Efecto activador=Acción hormonal reversible sobre circuitos ya formados, desde la pubertad",
      "Aromatasa=Enzima neuronal que convierte la testosterona en estradiol",
      "Alfa-fetoproteína=Proteína de la sangre fetal que se une al estradiol y le impide llegar al cerebro",
      "SDN-POA=Núcleo del área preóptica claramente mayor en ratas macho, descrito por Gorski",
      "Cerebro mosaico=Mezcla de rasgos más frecuentes en un sexo con otros del otro (Joel et al., 2015)",
      "GnRH=Hormona hipotalámica de liberación pulsátil que inicia la activación puberal"
    ],
    g: [
      "Phoenix et al. inyectaron testosterona a ___ gestantes.|cobayas|conejas|ratas",
      "En la fase ___, el cuerpo lúteo produce progesterona, que prepara el útero.|lútea|folicular|ovulatoria",
      "La ovulación se desencadena por un pico de ___.|LH|FSH|GnRH",
      "Joel et al. (2015) analizaron más de ___ cerebros de cuatro bases de datos.|1.400|14.000|400",
      "En los primates parece tener más peso la acción ___ de los andrógenos sobre su receptor.|directa|aromatizada|indirecta"
    ],
    tf: [
      "Los efectos organizadores de las hormonas son reversibles y dependen del nivel hormonal actual.|F|Eso define los activadores. Los organizadores actúan en un periodo crítico temprano y son permanentes.",
      "En roedores, gran parte de la masculinización cerebral la produce el estradiol formado a partir de testosterona.|V",
      "Del Giudice et al. (2016) clasificaron el sexo con precisión alta combinando muchas medidas cerebrales.|V",
      "Los resultados de Joel et al. y de Del Giudice et al. son incompatibles entre sí.|F|Son compatibles: hay diferencias medias reales, pero no dos tipos discretos de cerebro."
    ],
    q: [
      "Un hombre adulto pierde deseo sexual por un hipogonadismo y lo recupera al reponer testosterona. ¿Qué ilustra?|Un efecto activador|Un efecto organizador|Un efecto prenatal|Actúa sobre circuitos ya formados y es reversible: depende del nivel hormonal actual.",
      "¿Por qué los estrógenos maternos no masculinizan el cerebro de los fetos hembra de roedor?|La alfa-fetoproteína se une al estradiol|La aromatasa materna los destruye antes|La placenta los transforma en andrógenos|La alfa-fetoproteína de la sangre fetal se une al estradiol y le impide llegar al cerebro.",
      "¿Qué hallaron Phoenix et al. (1959) en las hembras expuestas a testosterona prenatal?|Menos lordosis y más monta|Más lordosis y menos monta|La misma conducta que el control|La exposición temprana tuvo un efecto organizador que masculinizó de forma duradera su conducta adulta.",
      "Conociendo solo el sexo de una persona, ¿qué puede afirmarse de su cerebro?|No puede deducirse región por región|Pertenece a uno de dos tipos discretos|Tendrá un núcleo preóptico mayor|Hay diferencias medias, pero con gran solapamiento y cerebros en mosaico: no se deduce cómo es cada región."
    ],
    inc: [
      "Sobre la pubertad y el ciclo ovárico|La FSH desencadena la ovulación con un pico|La GnRH se libera de forma pulsátil|El ciclo menstrual es un ritmo infradiano|La ovulación la desencadena un pico de LH. La FSH hace crecer los folículos en la fase folicular."
    ],
    seq: [
      "Activación puberal del eje gonadal|Liberación pulsátil de GnRH en el hipotálamo>La hipófisis secreta LH y FSH>Las gónadas aumentan testosterona o estradiol>Aparecen los caracteres sexuales secundarios"
    ],
    cls: [
      "Tipo de efecto hormonal|Organizador: periodo crítico temprano; permanente; masculinización de los circuitos de la cópula|Activador: pubertad y vida adulta; reversible; deseo que se recupera al reponer testosterona"
    ] },
  { t: "Diferencias del desarrollo sexual",
    tip: "Las diferencias del desarrollo sexual son condiciones congénitas con desarrollo cromosómico, gonadal o anatómico atípico, y funcionan como experimentos naturales. En la insensibilidad completa a andrógenos, una persona XY tiene testículos internos, no tiene útero y presenta fenotipo femenino. En la HSC, el déficit de 21-hidroxilasa viriliza los genitales externos de niñas XX. En el déficit de 5α-reductasa hay virilización en la pubertad. Ningún factor aislado explica la identidad.",
    v: [
      "DSD=Condiciones congénitas con desarrollo cromosómico, gonadal o anatómico atípico",
      "Insensibilidad a andrógenos=Receptor androgénico no funcional en una persona XY con testículos",
      "21-hidroxilasa=Enzima cuyo déficit causa la hiperplasia suprarrenal congénita",
      "Guevedoces=Nombre local dominicano de personas XY con déficit de 5α-reductasa",
      "Síndrome de Turner=Cariotipo X0: fenotipo femenino, gónadas poco desarrolladas y talla baja",
      "Síndrome de Klinefelter=Cariotipo XXY: fenotipo masculino, testículos pequeños e infertilidad frecuente",
      "Experimento natural=Condición que separa factores que suelen ir juntos, como hormonas y crianza",
      "Imperato-McGinley et al.=Equipo que estudió en 1974 una comunidad dominicana con déficit de DHT"
    ],
    g: [
      "En la insensibilidad completa a andrógenos, en la pubertad se desarrollan las ___, porque parte de la testosterona se convierte en estradiol.|mamas|trompas|vesículas seminales",
      "La hiperplasia suprarrenal congénita se debe a un déficit de ___.|21-hidroxilasa|5α-reductasa|aromatasa",
      "El síndrome de Klinefelter corresponde al cariotipo ___.|XXY|X0|XYY",
      "Imperato-McGinley et al. publicaron su estudio sobre el déficit de 5α-reductasa en ___.|1974|1959|1990",
      "Términos antiguos como «hermafroditismo» se han abandonado por inexactos y ___.|estigmatizantes|redundantes|técnicos"
    ],
    tf: [
      "En la insensibilidad completa a andrógenos hay útero, porque los conductos de Müller no reciben señal androgénica.|F|Es una trampa típica: la AMH funciona y hace regresar los conductos de Müller, así que no hay útero.",
      "Las mujeres con insensibilidad completa a andrógenos tienen en general una identidad de género femenina típica.|V",
      "En la HSC, las niñas XX tienen ovarios y útero típicos con genitales externos virilizados en grado variable.|V",
      "El caso de los guevedoces demuestra que la identidad de género depende solo de la testosterona.|F|Se discute si refleja la testosterona prenatal y puberal o también el reconocimiento social de la condición."
    ],
    q: [
      "Una joven de 16 años consulta porque no le ha llegado la menstruación. Tiene mamas desarrolladas, no tiene útero y presenta testículos internos. ¿Qué es lo más probable?|Insensibilidad completa a andrógenos|Hiperplasia suprarrenal congénita|Déficit de 5α-reductasa|Cariotipo XY, testículos con AMH funcional y ningún tejido que responda a andrógenos: fenotipo femenino sin útero.",
      "Una persona XY nace con genitales de aspecto femenino y se viriliza en la pubertad. ¿Qué falla?|La formación de DHT|El receptor de andrógenos|La secreción de AMH|Sin DHT no se masculinizan los genitales externos, pero el aumento puberal de testosterona produce virilización.",
      "¿Qué se ha observado en algunos estudios con niñas con HSC?|Más preferencia por juegos típicos de niños|Identidad masculina en la mayoría de ellas|Ausencia de útero y de ovarios funcionales|Se interpreta como efecto organizador de los andrógenos, con matices: gran variabilidad, peso del entorno y mayoría con identidad de mujer.",
      "¿Qué conclusión general se extrae de las DSD?|Ningún factor aislado explica la identidad|La crianza determina por sí sola la identidad|Los cromosomas fijan la identidad de género|Cromosomas, gónadas, hormonas y crianza intervienen, y ninguno explica por sí solo la identidad o la conducta."
    ],
    inc: [
      "Sobre las diferencias del desarrollo sexual|Una DSD es un trastorno de la identidad de género|Se insiste en decisiones multidisciplinares|Se debate cuándo hacer cirugías no urgentes|Una DSD es una variación del desarrollo del cuerpo, no un trastorno de la identidad."
    ],
    seq: [],
    cls: [
      "Origen de la diferencia|Hormonal o del receptor: insensibilidad completa a andrógenos; hiperplasia suprarrenal congénita; déficit de 5α-reductasa|Cromosómica numérica: síndrome de Turner; síndrome de Klinefelter"
    ] },
  { t: "Control neural y hormonal de la conducta sexual, y orientación sexual",
    tip: "La testosterona mantiene el deseo sexual en los hombres y contribuye a él en las mujeres. En roedores, el área preóptica medial es esencial para la cópula masculina, la amígdala medial procesa señales feromonales y el núcleo ventromedial hace posible la lordosis. La orientación sexual no tiene una causa única: Ganna et al. (2019) hallaron muchas variantes de efecto pequeño, y el hallazgo del INAH-3 de LeVay (1991) tiene limitaciones importantes.",
    v: [
      "Área preóptica medial=Región hipotalámica cuya lesión suprime la cópula en machos de muchas especies",
      "Amígdala medial=Recibe información olfativa y feromonal y la envía al hipotálamo, en roedores",
      "Núcleo ventromedial=Región hipotalámica donde estradiol y progesterona permiten la lordosis",
      "Ciclo de respuesta sexual=Excitación, meseta, orgasmo y resolución (Masters y Johnson, 1966)",
      "Topillo de pradera=Roedor monógamo con receptores de oxitocina y V1a en zonas de recompensa",
      "INAH-3=Núcleo del hipotálamo anterior estudiado por LeVay en relación con la orientación",
      "Orden de nacimiento fraterno=Más probabilidad de homosexualidad masculina con más hermanos varones mayores",
      "Orientación sexual=Patrón de atracción hacia personas del mismo sexo, del otro o de ambos"
    ],
    g: [
      "Ganna et al. (2019) encontraron ___ loci con asociación significativa.|5|50|1",
      "Las variantes comunes explican entre el 8 y el ___ % de la variación en la conducta sexual con personas del mismo sexo.|25|50|80",
      "Ganna et al. (2019) estudiaron a ___ personas.|477.522|47.752|4.775",
      "Blanchard describió el efecto del orden de nacimiento ___.|fraterno|materno|gemelar",
      "Masters y Johnson describieron un ciclo de respuesta sexual en ___ fases.|cuatro|tres|cinco"
    ],
    tf: [
      "En la mujer, la conducta sexual depende mucho más del contexto y de la relación que del ciclo hormonal.|V",
      "Los datos de los topillos permiten llamar a la oxitocina «hormona del amor» en los seres humanos.|F|Son datos animales muy sólidos, pero no justifican esa etiqueta en los seres humanos.",
      "Una crítica al estudio de LeVay es que todos los hombres homosexuales estudiados habían muerto de sida.|V",
      "El efecto del orden de nacimiento fraterno se refiere al número de hermanas mayores de la misma madre.|F|Se refiere a hermanos varones mayores. Una explicación propuesta es una respuesta inmunitaria materna."
    ],
    q: [
      "Tras una lesión hipotalámica, una rata macho deja de copular aunque come y se mueve con normalidad. ¿Qué región es más probable que esté dañada?|El área preóptica medial|El núcleo ventromedial|La amígdala medial|El área preóptica medial es esencial para la conducta sexual masculina. El ventromedial es necesario para la lordosis.",
      "¿Qué hormonas actúan sobre el núcleo ventromedial para hacer posible la lordosis?|Estradiol seguido de progesterona|Testosterona seguida de DHT|Oxitocina seguida de vasopresina|En las hembras de roedor la receptividad está ligada al ciclo: el estradiol y luego la progesterona actúan sobre el ventromedial.",
      "¿Qué ocurre si se bloquean los receptores de oxitocina y vasopresina en topillos de pradera?|No se forma la preferencia por la pareja|Aumenta la conducta de monta de los machos|Desaparece la lordosis de las hembras|Las dos especies difieren en esos receptores en zonas de recompensa, y bloquearlos impide la preferencia por la pareja.",
      "Un titular afirma que un análisis genético permitirá saber la orientación sexual de un bebé. ¿Qué responde la evidencia?|Muchos genes de efecto pequeño no la predicen|Un único locus del cromosoma X la determina|No existe ninguna influencia genética medible|Ganna et al. (2019) hallaron 5 loci de efecto pequeño. Las variantes comunes explican el 8–25 % y no predicen la de nadie."
    ],
    inc: [
      "Sobre el estudio de LeVay (1991)|Se replicó por completo en número de neuronas|La orientación de los controles se presumía|Los grupos de comparación se solapaban|Byne et al. (2001) solo hallaron una tendencia en el volumen y ninguna diferencia en el número de neuronas."
    ],
    seq: [
      "Ciclo de respuesta sexual de Masters y Johnson|Excitación>Meseta>Orgasmo>Resolución"
    ],
    cls: [
      "Región y función en roedores|Área preóptica medial: cópula masculina; su lesión la suprime|Amígdala medial: información olfativa; señales feromonales|Núcleo ventromedial: lordosis; acción del estradiol y la progesterona"
    ] }
] },
{ n: 15, t: "Sed y hambre: regulación homeostática", cap: 7, pir: "media", mods: [
  { t: "Homeostasis y los dos tipos de sed",
    tip: "Un sistema homeostático combina detector, punto de ajuste, mecanismo corrector y retroalimentación negativa, y el cuerpo añade anticipación: la saciedad preabsortiva. La sed osmótica surge cuando sube la concentración de solutos y la detectan osmorreceptores del OVLT y del órgano subfornical. La volumétrica surge cuando baja el volumen extracelular y la detectan barorreceptores y el riñón, que activa la renina y la angiotensina II. El preóptico mediano integra ambas.",
    v: [
      "Punto de ajuste=Valor que un sistema homeostático tiende a mantener",
      "Retroalimentación negativa=Apagado del corrector cuando la desviación se ha corregido",
      "Saciedad anticipatoria=Dejar de beber por señales de boca, garganta y estómago antes de la absorción",
      "OVLT=Órgano vasculoso de la lámina terminal, con osmorreceptores",
      "Órgano circunventricular=Región sin barrera hematoencefálica completa que lee la composición de la sangre",
      "Vasopresina=Hormona antidiurética que hace que el riñón reabsorba agua",
      "Aldosterona=Hormona suprarrenal que retiene sodio y genera apetito de sal",
      "Núcleo preóptico mediano=Integra las señales de los dos tipos de sed"
    ],
    g: [
      "Aproximadamente ___ del agua corporal está dentro de las células.|dos tercios|la mitad|un tercio",
      "La vasopresina se libera desde la ___.|neurohipófisis|adenohipófisis|corteza suprarrenal",
      "La señal de los osmorreceptores llega a los núcleos supraóptico y ___ del hipotálamo.|paraventricular|arcuato|ventromedial",
      "La angiotensina II estimula en la corteza suprarrenal la secreción de ___.|aldosterona|cortisol|adrenalina",
      "Tras una hemorragia, la sed es de tipo ___.|volumétrico|osmótico|hedónico"
    ],
    tf: [
      "En la sed osmótica, el agua sale de las células por ósmosis y estas se deshidratan.|V",
      "La angiotensina II provoca sed actuando sobre el núcleo arcuato.|F|Actúa sobre el órgano subfornical, un órgano circunventricular. El arcuato regula la ingesta.",
      "En la sed volumétrica se busca solo agua, porque la concentración del plasma no cambia.|F|Se busca agua y sal: si solo se repusiera agua, el líquido extracelular se diluiría.",
      "El cuerpo deja de beber antes de que el agua ingerida se absorba.|V"
    ],
    q: [
      "Tras una tarde comiendo pipas saladas, Marta tiene mucha sed. ¿Qué detecta el cambio?|Osmorreceptores del OVLT y del órgano subfornical|Barorreceptores de las aurículas, aorta y carótidas|Células renales que liberan renina|La sal concentra el plasma y deshidrata las células, lo que detectan los osmorreceptores circunventriculares.",
      "¿Por qué tiene sentido que la aldosterona genere apetito de sal en la sed volumétrica?|Reponer solo agua diluiría el líquido extracelular|La sal estimula directamente a los osmorreceptores|El sodio inhibe la secreción de vasopresina|La aldosterona retiene sodio y genera apetito de sal, porque reponer solo agua diluiría el medio extracelular.",
      "¿Qué distingue el control homeostático del cuerpo del termostato de una casa?|La anticipación|El punto de ajuste|La retroalimentación negativa|El termostato tiene detector, punto de ajuste y retroalimentación, pero el cuerpo además se anticipa, como en la saciedad preabsortiva.",
      "Un paciente pierde mucho líquido por una diarrea intensa. ¿Qué respuesta hormonal se pone en marcha?|Renina, angiotensina II y aldosterona|Más vasopresina y mayor volumen de orina|Menos renina y más excreción de sodio|La caída de volumen reduce el flujo renal y activa renina y angiotensina II, que estimula la aldosterona."
    ],
    inc: [
      "Sobre los órganos circunventriculares de la sed|El órgano subfornical solo responde a la osmolaridad|Carecen de una barrera hematoencefálica completa|El OVLT contiene osmorreceptores|El órgano subfornical tiene osmorreceptores y además responde a la angiotensina II de la sed volumétrica."
    ],
    seq: [
      "Sed volumétrica|Baja el volumen extracelular>El riñón recibe menos flujo y libera renina>Se forma angiotensina II>La angiotensina II actúa sobre el órgano subfornical>Aparecen la sed y la liberación de vasopresina"
    ],
    cls: [
      "Tipo de sed|Sed osmótica: comida muy salada; deshidratación celular; osmorreceptores del OVLT|Sed volumétrica: hemorragia; barorreceptores; renina y angiotensina II; apetito de sal"
    ] },
  { t: "Señales de hambre y de saciedad",
    tip: "Las señales a corto plazo regulan cada comida. La grelina del estómago es orexígena y sube antes de las comidas habituales, mientras que la distensión gástrica, la CCK del duodeno y el PYY y el GLP-1 del íleon favorecen la saciedad, en buena parte por vía vagal hasta el núcleo del tracto solitario. Las señales a largo plazo, leptina e insulina, informan de las reservas. La obesidad común cursa con leptina alta y resistencia a ella.",
    v: [
      "Señal orexígena=Estimula el apetito y favorece que empiece una comida",
      "Grelina=Hormona del estómago que sube antes de las comidas habituales y estimula el apetito",
      "Colecistocinina=Péptido del duodeno que favorece la saciedad por vía vagal",
      "GLP-1=Péptido del íleon que reduce el apetito y estimula la secreción de insulina",
      "Leptina=Hormona del tejido adiposo, proporcional a la grasa, que reduce la ingesta",
      "Resistencia a la leptina=Hormona alta con escasa respuesta a ella, típica de la obesidad común",
      "Núcleo del tracto solitario=Núcleo del tronco que integra las señales vagales y las envía al hipotálamo",
      "Teoría glucostática=Propuesta histórica de Mayer: el hambre depende sobre todo de la glucosa"
    ],
    g: [
      "La grelina fue identificada por ___ et al. (1999).|Kojima|Zhang|Mayer",
      "Zhang et al. (1994) clonaron el gen ___, cuya mutación deja a los ratones sin leptina.|ob|MC4R|POMC",
      "El PYY₃₋₃₆ y el GLP-1 se liberan en el ___.|íleon|duodeno|estómago",
      "La leptina informa de las reservas de energía a ___ plazo.|largo|corto|medio",
      "Tras una comida abundante casi nadie rechaza el postre, porque la saciedad afecta sobre todo a lo ya ___.|comido|digerido|absorbido"
    ],
    tf: [
      "La leptina se produce en el estómago y la grelina, en el tejido adiposo.|F|Es al revés: la grelina procede del estómago y la leptina, del tejido adiposo.",
      "Se puede tener hambre a la hora de siempre aunque se haya desayunado tarde, porque la grelina sube antes de las comidas habituales.|V",
      "La mayoría de las personas con obesidad común carece de leptina, como los ratones ob/ob.|F|Suelen tenerla alta y responder poco a ella. El déficit congénito de leptina existe, pero es raro.",
      "Hoy se considera que la glucosa es una señal más entre muchas en la regulación del hambre.|V"
    ],
    q: [
      "Lucía come lentejas tras una mañana en ayunas y se sacia antes de que los nutrientes lleguen a la sangre. ¿Qué señal apenas cambia ese día?|La leptina|La colecistocinina|La distensión gástrica|La leptina refleja reservas de semanas. La distensión, la CCK, el PYY y el GLP-1 actúan en cada comida.",
      "Un niño con obesidad grave desde muy pequeño no tiene leptina detectable. ¿Qué tratamiento tiene sentido?|Administrar la hormona|Reducir su grelina|Bloquear su MC4R|El déficit congénito de leptina es raro y se trata administrando la hormona.",
      "¿Por qué vía actúan sobre todo la distensión gástrica y la CCK?|Por el nervio vago|Por la eminencia media|Por la neurohipófisis|Sus señales vagales llegan al núcleo del tracto solitario, que las integra y las envía al hipotálamo.",
      "¿Qué señal combina reducir el apetito con estimular la secreción de insulina?|El GLP-1|La grelina|La leptina|El GLP-1 del íleon reduce el apetito y además estimula la insulina. La grelina, en cambio, es orexígena."
    ],
    inc: [
      "Sobre las señales de la ingesta|La insulina informa de las reservas y aumenta el apetito|La CCK se libera en el duodeno|La grelina baja después de comer|La insulina, como la leptina, informa al cerebro de las reservas y reduce el apetito."
    ],
    seq: [],
    cls: [
      "Plazo de la señal|Corto plazo: grelina; colecistocinina; PYY; GLP-1; distensión gástrica|Largo plazo: leptina; insulina"
    ] },
  { t: "El hipotálamo y la ingesta: del doble centro a los circuitos",
    tip: "El modelo del doble centro surgió de lesiones en ratas: la del ventromedial producía hiperfagia (Hetherington y Ranson, 1940) y la del lateral, afagia (Anand y Brobeck, 1951). Se abandonó porque las lesiones laterales dañaban fibras de paso y las ventromediales alteraban el metabolismo. Hoy la pieza central es el núcleo arcuato, con neuronas NPY/AgRP orexígenas y POMC/CART anorexígenas que convergen en el receptor MC4R del paraventricular.",
    v: [
      "Hiperfagia=Ingesta excesiva, como tras lesionar el hipotálamo ventromedial",
      "Afagia=Cese de la ingesta, observado tras lesionar el hipotálamo lateral",
      "Fibras de paso=Axones que atraviesan una región, como la vía nigroestriatal en el hipotálamo lateral",
      "Núcleo arcuato=Núcleo junto a la eminencia media con dos poblaciones de efectos opuestos",
      "Neuronas POMC/CART=Neuronas anorexígenas del arcuato activadas por leptina e insulina",
      "α-MSH=Péptido de las neuronas POMC que activa el MC4R y reduce la ingesta",
      "AgRP=Péptido orexígeno que antagoniza el receptor MC4R",
      "MCH=Hormona concentradora de melanina, orexígena, del hipotálamo lateral"
    ],
    g: [
      "Hetherington y Ranson describieron en ___ la hiperfagia tras la lesión ventromedial.|1940|1951|1994",
      "La grelina ___ las neuronas NPY/AgRP.|activa|inhibe|silencia",
      "Las mutaciones del gen del ___ son la causa monogénica más frecuente de obesidad.|MC4R|POMC|ob",
      "El núcleo arcuato se sitúa junto a la ___, donde la barrera hematoencefálica es más permeable.|eminencia media|lámina terminal|sustancia negra",
      "Las lesiones del ventromedial aumentaban la secreción de ___.|insulina|grelina|leptina"
    ],
    tf: [
      "El hipotálamo lateral sigue siendo relevante porque contiene neuronas de orexina y de MCH.|V",
      "La AgRP reduce la ingesta porque activa el receptor MC4R.|F|La AgRP antagoniza el MC4R y favorece la ingesta. Es la α-MSH la que lo activa y reduce la ingesta.",
      "Las lesiones del hipotálamo lateral producían afagia solo por falta de hambre.|F|Dañaban fibras de paso, como la vía nigroestriatal, y causaban déficits motores y motivacionales generales.",
      "La leptina inhibe las neuronas NPY/AgRP y activa las POMC/CART.|V"
    ],
    q: [
      "En un experimento clásico, una rata con lesión del hipotálamo lateral deja de comer, pero también se mueve poco y muestra poca motivación general. ¿Qué lo explica mejor?|Daño de fibras de paso como la vía nigroestriatal|Destrucción del único centro del hambre|Hiperactividad de las neuronas POMC del arcuato|La lesión dañaba fibras de paso, entre ellas la vía nigroestriatal, y producía déficits motores y motivacionales generales.",
      "Según la revisión del modelo, ¿por qué la lesión del ventromedial producía obesidad?|Alteraba el metabolismo y almacenaba grasa|Destruía un centro aislado de la saciedad|Eliminaba las neuronas de orexina|Aumentaba la secreción de insulina y favorecía almacenar energía como grasa, lo que por sí mismo empuja a comer más.",
      "¿Dónde actúan en común la α-MSH y la AgRP?|En el receptor MC4R del paraventricular|En el receptor de leptina del arcuato|En la orexina del hipotálamo lateral|La α-MSH activa el MC4R y reduce la ingesta, y la AgRP lo antagoniza. El balance entre ambas inclina la conducta.",
      "Tras varias horas de ayuno sube la grelina. ¿Qué patrón cabe esperar en el arcuato?|Más actividad NPY/AgRP|Más actividad POMC/CART|Más liberación de α-MSH|La grelina activa las neuronas orexígenas NPY/AgRP, cuya AgRP antagoniza el MC4R."
    ],
    inc: [
      "Sobre los circuitos hipotalámicos de la ingesta|Las neuronas POMC/CART son orexígenas|El arcuato contiene dos poblaciones opuestas|El tracto solitario aporta información vagal|Las POMC/CART son anorexígenas. Las orexígenas del arcuato son las NPY/AgRP."
    ],
    seq: [
      "Vía anorexígena de la leptina|La leptina activa las neuronas POMC/CART>Las neuronas POMC liberan α-MSH>La α-MSH activa el MC4R del paraventricular>Se reduce la ingesta"
    ],
    cls: [
      "Efecto sobre la ingesta|Orexígenas: neuronas NPY/AgRP; orexina; hormona concentradora de melanina; grelina|Anorexígenas: neuronas POMC/CART; α-MSH; leptina; colecistocinina"
    ] },
  { t: "Alteraciones de la sed y de la ingesta",
    tip: "La diabetes insípida produce poliuria y polidipsia por falta de vasopresina (central) o por falta de respuesta renal (nefrogénica). La polidipsia psicógena y el exceso de ADH pueden causar hiponatremia. La obesidad es multifactorial y poligénica, con formas raras de causa concreta. Los agonistas del GLP-1 reducen el peso mientras se toman, pero al retirarlos se recupera gran parte. En los trastornos alimentarios, la neurobiología conocida es parcial y no equivale a una causa única.",
    v: [
      "Diabetes insípida=Pérdida de la capacidad de concentrar la orina, con poliuria y polidipsia",
      "Diabetes insípida nefrogénica=Forma en que el riñón no responde a la vasopresina",
      "Polidipsia psicógena=Ingesta excesiva de agua sin necesidad fisiológica que la justifique",
      "Hiponatremia=Descenso del sodio en sangre por dilución, que puede ser grave",
      "Entorno obesogénico=Comida muy sabrosa, barata y siempre disponible",
      "Síndrome de Prader-Willi=Trastorno genético raro con hambre persistente",
      "STEP-1=Ensayo de semaglutida 2,4 mg con un 14,9 % de pérdida media de peso en 68 semanas",
      "Poligenia=Contribución de muchos genes de efecto pequeño a un rasgo"
    ],
    g: [
      "En el ensayo STEP-1, el grupo placebo perdió un ___ del peso de media.|2,4 %|14,9 %|8,5 %",
      "Al retirar la semaglutida se recuperaron aproximadamente ___ de lo perdido en un año.|dos tercios|la mitad|un tercio",
      "La polidipsia psicógena se observa en algunos pacientes con ___.|esquizofrenia|bulimia nerviosa|anorexia nerviosa",
      "La leptina baja de la anorexia nerviosa es una ___ de la desnutrición.|consecuencia|causa|precursora",
      "En la bulimia nerviosa se han descrito alteraciones serotoninérgicas y del control ___.|inhibitorio|homeostático|circadiano"
    ],
    tf: [
      "La diabetes insípida comparte con la diabetes mellitus un fallo de la insulina.|F|No tiene relación con la diabetes mellitus, salvo el síntoma de orinar mucho.",
      "El síndrome de secreción inadecuada de ADH puede producir hiponatremia.|V",
      "Los agonistas del GLP-1 reajustan el sistema, de modo que el peso perdido se mantiene tras retirarlos.|F|Actúan mientras se toman: en la extensión de STEP-1 se recuperaron unos dos tercios de lo perdido en un año.",
      "La anorexia nerviosa tiene una heredabilidad alta.|V"
    ],
    q: [
      "Tras un traumatismo con lesión hipotálamo-hipofisaria, un paciente orina mucha orina diluida y tiene sed intensa. ¿Qué es lo más probable?|Diabetes insípida central|Diabetes insípida nefrogénica|Polidipsia psicógena|La lesión hipotálamo-hipofisaria impide liberar vasopresina, y el riñón no concentra la orina.",
      "Un paciente con esquizofrenia bebe muchos litros de agua al día sin necesidad fisiológica. ¿Cuál es el principal riesgo?|Hiponatremia por dilución|Hipernatremia por pérdida renal|Deshidratación celular grave|En la polidipsia psicógena, el exceso de agua diluye el sodio en sangre, lo que puede ser grave.",
      "¿Qué afirmación sobre la obesidad común es más fiel a la evidencia?|Es multifactorial y poligénica|Se debe a mutaciones del MC4R|Se explica por falta de leptina|Intervienen muchos genes de efecto pequeño, un entorno obesogénico y factores psicosociales. Las formas monogénicas son raras.",
      "¿Qué indica la leptina baja de las personas con anorexia nerviosa?|Que es consecuencia de la desnutrición|Que causa la restricción de la ingesta|Que explica el miedo a ganar peso|Es una consecuencia del estado de desnutrición, no su causa. Ninguna alteración descrita equivale a una causa única."
    ],
    inc: [
      "Sobre la neurobiología de los trastornos alimentarios|Se reducen a un déficit de serotonina|En la anorexia se alteran señales de recompensa|En la bulimia se altera el control inhibitorio|Es un error reducirlos a un neurotransmisor: se altera la integración de la ingesta con la recompensa, la emoción y el control."
    ],
    seq: [],
    cls: [
      "Mecanismo del trastorno de la sed|Falta de acción de la vasopresina: diabetes insípida central; diabetes insípida nefrogénica|Exceso de agua o de vasopresina: polidipsia psicógena; secreción inadecuada de ADH"
    ] }
] },
{ n: 16, t: "Recompensa y adicción", cap: 7, pir: "alta", mods: [
  { t: "Qué es una recompensa: aprender, querer y gustar",
    tip: "Una recompensa es un estímulo por el que el organismo se esfuerza y que aumenta la conducta que lo precede. Olds y Milner (1954) descubrieron la autoestimulación intracraneal. Berridge separó aprendizaje, «querer» (saliencia de incentivo) y «gustar» (impacto hedónico), que pueden disociarse. Schultz, Dayan y Montague (1997) mostraron que la dopamina codifica el error de predicción: su disparo pasa a la señal predictora y cae si la recompensa esperada no llega.",
    v: [
      "Recompensa=Estímulo por el que se trabaja y que aumenta la conducta que lo precede",
      "Recompensas naturales=Comida, agua, contacto sexual y aprobación social",
      "Autoestimulación intracraneal=Presionar una palanca para recibir estimulación eléctrica cerebral",
      "Saliencia de incentivo=Empuje motivacional que hace atractiva una señal: el «querer»",
      "«Gustar»=Impacto hedónico o placer en el momento de consumir la recompensa",
      "Error de predicción=Diferencia entre lo que se esperaba y lo que ocurre",
      "Diferencias temporales=Modelos computacionales cuya señal de error coincide con la dopaminérgica",
      "Región septal=Lugar de los electrodos con que Olds y Milner observaron la autoestimulación"
    ],
    g: [
      "Olds y Milner describieron la autoestimulación intracraneal en ___.|1954|1997|1981",
      "Si una señal predice la recompensa con fiabilidad, el disparo dopaminérgico se desplaza a la ___.|señal|recompensa|omisión",
      "Según Berridge, la saliencia de incentivo corresponde al componente de ___.|«querer»|«gustar»|aprendizaje",
      "La lógica del error de predicción dopaminérgico se parece a la del modelo de ___, que se estudia en Aprendizaje.|Rescorla-Wagner|Robinson-Berridge|Koob-Le Moal",
      "Schultz, Dayan y Montague describieron el error de predicción a partir de registros en ___.|monos|ratas|humanos"
    ],
    tf: [
      "Ante una recompensa inesperada, las neuronas dopaminérgicas disparan con fuerza.|V",
      "«Querer» y «gustar» son el mismo proceso medido de dos formas.|F|Suelen ir juntos, pero pueden disociarse: en la adicción el «querer» crece mientras el «gustar» se mantiene o baja.",
      "La investigación posterior a Olds y Milner confirmó la existencia de «centros del placer».|F|La etiqueta de «centros del placer» se ha matizado mucho con la investigación posterior.",
      "Cuando una señal predice la recompensa de forma fiable, la recompensa ya esperada deja de provocar el disparo dopaminérgico.|V"
    ],
    q: [
      "Una aplicación da un bono sorpresa. Si después se repite cada lunes tras un aviso, ¿qué ocurrirá con la respuesta dopaminérgica?|Pasará al aviso que lo anuncia|Seguirá apareciendo con el bono|Desaparecerá con el aviso y el bono|Cuando una señal predice la recompensa, el disparo se traslada a la señal. Si un lunes falta el bono, la actividad cae.",
      "Una persona desbloquea el móvil cada pocos minutos con un fuerte impulso, pero apenas disfruta al ver las notificaciones. ¿Qué ilustra?|Disociación entre «querer» y «gustar»|Un error de predicción siempre positivo|Un aumento progresivo del impacto hedónico|El impulso refleja la saliencia de incentivo, y el escaso placer, un «gustar» bajo. Ambos componentes pueden separarse.",
      "Tras una señal que predice un zumo, el zumo no llega. ¿Qué registra una neurona dopaminérgica en ese momento?|Una caída por debajo del nivel basal|Un pico igual al de la recompensa|Ningún cambio respecto al basal|La omisión de la recompensa esperada produce un error de predicción negativo: la actividad cae por debajo del basal.",
      "¿Qué codifica la dopamina según Schultz et al. (1997)?|La diferencia entre lo esperado y lo obtenido|El placer que produce consumir la recompensa|La intensidad física de la recompensa|La dopamina actúa como señal de enseñanza: indica si las cosas han ido mejor, igual o peor de lo previsto."
    ],
    inc: [
      "Sobre la definición de recompensa|Las drogas usan circuitos distintos a los naturales|La comida y el agua son recompensas naturales|Una recompensa aumenta la conducta que la precede|Las drogas y la estimulación eléctrica actúan directamente sobre los mismos circuitos que las recompensas naturales."
    ],
    seq: [
      "Desplazamiento del error de predicción|Recompensa inesperada con disparo fuerte>Una señal empieza a predecir la recompensa>El disparo se traslada a la señal>La omisión de la recompensa hace caer la actividad"
    ],
    cls: [
      "Componente de la recompensa|«Querer»: saliencia de incentivo; dopamina; crece con la sensibilización|«Gustar»: impacto hedónico; opioides y endocannabinoides; puntos hedónicos"
    ] },
  { t: "Anatomía y neurotransmisores del sistema de recompensa",
    tip: "El núcleo del sistema son las neuronas dopaminérgicas del área tegmental ventral, cuyos axones viajan por el haz prosencefálico medial. La vía mesolímbica, del ATV al accumbens, se asocia al «querer» y al error de predicción, la mesocortical a la valoración y el control, la nigroestriatal al movimiento y los hábitos, y la tuberoinfundibular inhibe la prolactina. Opioides y endocannabinoides generan el «gustar» en puntos hedónicos, y el glutamato aporta la memoria de la droga.",
    v: [
      "Área tegmental ventral=Origen mesencefálico de la dopamina mesolímbica y mesocortical",
      "Haz prosencefálico medial=Haz que atraviesa el hipotálamo lateral, donde la autoestimulación es más eficaz",
      "Núcleo accumbens=Estriado ventral que integra el valor de incentivo y lo convierte en acción",
      "Vía mesocortical=Proyección del ATV a la corteza prefrontal: valoración, memoria de trabajo y control",
      "Vía tuberoinfundibular=Dopamina del hipotálamo a la hipófisis que inhibe la prolactina",
      "Puntos hedónicos=Zonas pequeñas del shell del accumbens y del pálido ventral donde los opioides aumentan el agrado",
      "Pálido ventral=Estación que recibe del accumbens y contiene puntos hedónicos",
      "Vía nigroestriatal=Proyección de la sustancia negra al estriado dorsal, degenerada en el Parkinson"
    ],
    g: [
      "Las neuronas de proyección del accumbens son ___.|gabaérgicas|dopaminérgicas|glutamatérgicas",
      "La ___ se relaciona con la impulsividad y la capacidad de esperar una recompensa.|serotonina|dopamina|noradrenalina",
      "El glutamato llega al accumbens desde la corteza prefrontal, la amígdala y el ___.|hipocampo|cerebelo|pálido ventral",
      "El hipotálamo lateral une las necesidades corporales con la motivación mediante la ___.|orexina|prolactina|melatonina",
      "Los puntos hedónicos del accumbens se sitúan en su ___.|capa|zona nuclear|porción dorsal"
    ],
    tf: [
      "La dopamina es el neurotransmisor del «querer», no del placer.|V",
      "La vía nigroestriatal parte del área tegmental ventral y llega al núcleo accumbens.|F|Esa es la mesolímbica. La nigroestriatal va de la sustancia negra al estriado dorsal.",
      "La vía tuberoinfundibular forma parte del circuito de recompensa en sentido estricto.|F|Va del hipotálamo a la hipófisis, donde inhibe la prolactina, y no forma parte del circuito en sentido estricto.",
      "El glutamato tiene un papel destacado en la memoria de la droga y en la recaída.|V"
    ],
    q: [
      "Al pasar por la panadería, el olor a pan crea un fuerte impulso de entrar. ¿Qué explica sobre todo ese impulso?|La dopamina hacia el accumbens|Los opioides del pálido ventral|La dopamina nigroestriatal|La señal aprendida dispara dopamina mesolímbica y crea el «querer». El placer del bocado depende más de los puntos hedónicos.",
      "Las ratas privadas de dopamina con 6-OHDA siguen mostrando agrado ante el sabor dulce. ¿Qué indica?|Que el «gustar» no depende de la dopamina|Que la dopamina produce el placer del dulce|Que el «querer» aumenta tras la lesión|Berridge y Robinson (1998): el placer depende sobre todo de puntos hedónicos opioides y endocannabinoides, no de la dopamina.",
      "Un paciente con degeneración de la sustancia negra tiene problemas motores. ¿Qué vía está afectada?|Nigroestriatal|Mesolímbica|Mesocortical|La vía nigroestriatal va de la sustancia negra al estriado dorsal y su degeneración causa la enfermedad de Parkinson.",
      "¿Qué estructura aporta el contexto en que se obtuvo la recompensa?|El hipocampo|La amígdala|El pálido ventral|La amígdala asocia señales con su valor emocional, y el hipocampo aporta el contexto de la recompensa."
    ],
    inc: [
      "Sobre los neurotransmisores de la recompensa|Los opioides generan el «querer»|La dopamina codifica el error de predicción|Hay interneuronas gabaérgicas en el ATV|Los opioides y endocannabinoides generan el «gustar» en puntos hedónicos. El «querer» depende de la dopamina."
    ],
    seq: [],
    cls: [
      "Vía dopaminérgica|Mesolímbica: núcleo accumbens; estriado ventral; error de predicción|Mesocortical: corteza prefrontal; valoración de opciones; memoria de trabajo|Nigroestriatal: sustancia negra; estriado dorsal; enfermedad de Parkinson"
    ] },
  { t: "Drogas, cerebro y modelos de la adicción",
    tip: "Las drogas adictivas aumentan la dopamina en el accumbens por mecanismos distintos: la cocaína bloquea el transportador, las anfetaminas lo invierten y los opioides y el cannabis desinhiben el ATV. Varios modelos explican la adicción: sensibilización al incentivo (Robinson y Berridge), ciclo con antirrecompensa (Koob y Le Moal), paso del objetivo al hábito (Everitt y Robbins) y menor disponibilidad de D2 (Volkow), un hallazgo correlacional. Si es una enfermedad cerebral sigue en debate.",
    v: [
      "Desinhibición=Quitar el freno gabaérgico que contiene a las neuronas dopaminérgicas",
      "Sensibilización al incentivo=Las señales de la droga ganan un «querer» exagerado sin más «gustar»",
      "Antirrecompensa=Sistemas de estrés, como CRF y dinorfina, que generan malestar en la abstinencia",
      "Refuerzo negativo=Consumir para aliviar el malestar más que para obtener placer",
      "Del objetivo al hábito=Paso del control del estriado ventral al dorsal (Everitt y Robbins)",
      "Receptores D2=Su menor disponibilidad estriatal en la adicción es un hallazgo correlacional",
      "Cocaína=Droga que bloquea el transportador de dopamina e impide su recaptación",
      "Anfetaminas=Invierten el transportador y hacen salir la dopamina de la terminal"
    ],
    g: [
      "La nicotina activa receptores ___ de acetilcolina en neuronas del ATV.|nicotínicos|muscarínicos|dopaminérgicos",
      "El THC activa receptores ___ que reducen la liberación de GABA en el ATV.|CB1|D2|MC4R",
      "La MDMA libera sobre todo ___ a través de su transportador.|serotonina|dopamina|noradrenalina",
      "En el ciclo de Koob y Le Moal, tras el atracón y la intoxicación llega la etapa de ___.|abstinencia y afecto negativo|preocupación y anticipación|sensibilización al incentivo",
      "Lewis (2015) entiende la adicción como una forma de ___.|aprendizaje|enfermedad|desinhibición"
    ],
    tf: [
      "Los opioides aumentan la dopamina actuando directamente sobre las neuronas dopaminérgicas del ATV.|F|Inhiben las interneuronas gabaérgicas del ATV y así liberan a las dopaminérgicas: es una desinhibición.",
      "La menor disponibilidad de receptores D2 en la adicción demuestra que precede al consumo.|F|Es un hallazgo correlacional: no permite saber si precede al consumo o es su consecuencia.",
      "Que una sustancia aumente la dopamina no explica por qué solo una parte de quienes la consumen desarrolla adicción.|V",
      "Heilig et al. (2021) defienden el modelo de enfermedad cerebral reconociendo que esos cambios no son específicos de la adicción.|V"
    ],
    q: [
      "Andrés apenas disfruta ya del cigarrillo, pero el café de la mañana le dispara unas ganas intensas. ¿Qué modelo lo predice mejor?|Sensibilización al incentivo|Ciclo de Koob y Le Moal|Déficit de receptores D2|Poco placer y mucho deseo ante las señales: el «querer» crece aunque el «gustar» no lo haga (Robinson y Berridge, 1993).",
      "Una droga hace salir la dopamina de la terminal invirtiendo el transportador. ¿Cuál es?|Anfetamina|Cocaína|Morfina|La cocaína bloquea el transportador e impide la recaptación, y los opioides desinhiben el ATV.",
      "Según Koob y Le Moal, ¿por qué se consume en las fases avanzadas de la adicción?|Para aliviar el malestar|Por un placer creciente|Por simple curiosidad|Se activan sistemas de antirrecompensa, como el CRF y la dinorfina, y el refuerzo pasa de positivo a negativo.",
      "El consumo se dispara ante las señales como un hábito, sin que medie una meta. ¿Qué cambio describen Everitt y Robbins?|Del estriado ventral al dorsal|Del estriado dorsal al ventral|De la amígdala al hipocampo|Lo que empezó como una acción dirigida a una meta pasa al estriado dorsal y se convierte en un hábito."
    ],
    inc: [
      "Sobre el mecanismo de las drogas|La cocaína invierte el transportador de dopamina|La nicotina activa receptores nicotínicos en el ATV|El alcohol potencia el GABA y libera opioides|La cocaína bloquea el transportador e impide la recaptación. Invertirlo es propio de las anfetaminas."
    ],
    seq: [
      "Ciclo de la adicción de Koob y Le Moal|Atracón e intoxicación>Abstinencia y afecto negativo>Preocupación y anticipación"
    ],
    cls: [
      "Mecanismo de la droga|Desinhibición del ATV: opioides; cannabis|Acción sobre el transportador: cocaína; anfetaminas; MDMA"
    ] },
  { t: "Lo que enseñan (y no) los modelos animales",
    tip: "Los paradigmas animales principales son la autoestimulación intracraneal, la autoadministración intravenosa, el condicionamiento de preferencia de lugar y la reinstauración, modelo de la recaída, a los que se suma la optogenética. Aciertan en el mecanismo, pero su validez traslacional es limitada: con alternativas, muchas ratas prefieren sacarosa a cocaína (Lenoir et al., 2007). Rat Park (Alexander et al., 1981) no se replicó de forma directa (Petrie, 1996), aunque el enriquecimiento puede proteger.",
    v: [
      "Autoadministración intravenosa=El animal recibe droga por catéter cada vez que presiona una palanca",
      "Preferencia de lugar=El animal pasa más tiempo en el compartimento asociado a la droga",
      "Reinstauración=Reaparición de la búsqueda extinguida ante droga, señal o estrés",
      "Optogenética=Técnica que activa o silencia con luz neuronas identificadas",
      "Validez traslacional=Grado en que un hallazgo animal se aplica a las personas",
      "Rat Park=Estudio de Alexander et al. (1981) con ratas en colonia enriquecida frente a aisladas",
      "Petrie (1996)=Réplica directa que no reprodujo el resultado de Rat Park",
      "Lenoir et al. (2007)=Mostraron que muchas ratas prefieren sacarosa a cocaína si pueden elegir"
    ],
    g: [
      "La autoadministración intravenosa es el modelo con mayor validez para el consumo, porque el animal ___.|decide|aprende|sufre",
      "En Rat Park, las ratas ___ consumían más solución de morfina.|aisladas|enriquecidas|jóvenes",
      "La reinstauración es el modelo de laboratorio de la ___.|recaída|tolerancia|abstinencia",
      "En paradigmas de elección, muchas ratas prefieren la ___ a la cocaína.|sacarosa|morfina|nicotina",
      "Las réplicas ___ apoyan un efecto protector del enriquecimiento ambiental.|conceptuales|directas|exactas"
    ],
    tf: [
      "Rat Park demostró que la adicción se debe a la jaula y que el entorno lo explica todo.|F|La réplica directa de Petrie (1996) no lo reprodujo. El entorno importa, pero no lo explica todo.",
      "En una fase de la réplica de Petrie, las ratas de la colonia consumieron incluso más.|V",
      "La mayoría de los experimentos se hacen con animales aislados, en jaulas pobres y sin otras opciones.|V",
      "En el condicionamiento de preferencia de lugar, el animal recibe la droga cada vez que presiona una palanca.|F|Eso es la autoadministración. En la preferencia de lugar se mide el tiempo en el compartimento asociado a la droga."
    ],
    q: [
      "Tras extinguir la autoadministración de cocaína, unas ratas vuelven a presionar la palanca al oír el tono que acompañaba a la droga. ¿Qué paradigma es?|Reinstauración|Preferencia de lugar|Autoestimulación|La reaparición de la búsqueda extinguida ante una señal, la droga o el estrés es la reinstauración, modelo de la recaída.",
      "Un fármaco reduce mucho el consumo en ratas aisladas, pero falla en personas cuyo consumo se sostiene por la soledad. ¿Qué límite ilustra?|La validez traslacional|La precisión causal del modelo|El control experimental del modelo|El modelo animal acierta en el mecanismo, pero no siempre en el problema completo, que en humanos incluye factores sociales.",
      "Un equipo quiere comprobar si activar con luz neuronas dopaminérgicas identificadas basta para que un ratón repita una conducta. ¿Qué técnica usará?|Optogenética|Preferencia de lugar|Reinstauración|La optogenética activa o silencia con luz neuronas identificadas y permite comprobar su efecto causal en la conducta.",
      "¿Qué conclusión sobre Rat Park es la más razonable?|El entorno importa, pero no lo explica todo|La jaula es la causa única de la adicción|El entorno no influye en el consumo de droga|La réplica directa falló, pero las réplicas conceptuales apoyan un efecto protector del enriquecimiento."
    ],
    inc: [
      "Sobre los modelos animales de la recompensa|Rat Park se replicó de forma directa y exacta|Permitieron distinguir el «querer» del «gustar»|Describieron el papel del glutamato en la recaída|Petrie (1996) no reprodujo Rat Park en una réplica directa. Solo hay réplicas conceptuales del efecto del enriquecimiento."
    ],
    seq: [
      "Paradigma de reinstauración|Autoadministración de la droga>Extinción de la respuesta>Exposición a droga, señal o estrés>Reaparición de la búsqueda de droga"
    ],
    cls: [
      "Paradigma y lo que modela|Consumo voluntario: autoadministración intravenosa|Valor de recompensa: preferencia de lugar; autoestimulación intracraneal|Recaída: reinstauración"
    ] }
] }
);

SP.register(window.COURSE);
})({});
