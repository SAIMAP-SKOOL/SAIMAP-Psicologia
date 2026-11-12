(function(window){
// SAIMAP Psicología · Psicología del Pensamiento
// Contenido alineado con el temario SAIMAP «Psicología del Pensamiento» (v1.0, noviembre de 2026).
window.COURSE = {
  id: "pensamiento",
  title: "Psicología del Pensamiento",
  short: "Pensamiento",
  area: "Procesos psicológicos básicos",
  rutas: { grado: { curso: 3 }, pir: { bloque: "Procesos básicos" } },
  temario: "Psicologia-del-Pensamiento_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Fundamentos y evolución del estudio del pensamiento", from: 1, to: 3 },
    { n: 2, t: "Procesos cognitivos que sustentan el pensamiento", from: 4, to: 5 },
    { n: 3, t: "Tipologías del pensamiento", from: 6, to: 8 },
    { n: 4, t: "El razonamiento humano", from: 9, to: 12 },
    { n: 5, t: "Solución de problemas y toma de decisiones", from: 13, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Pensamiento · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "Qué estudiamos cuando estudiamos el pensamiento", cap: 1, pir: "baja", mods: [
  { t: "El pensamiento como proceso y como producto",
    tip: "Pensar es manipular representaciones mentales para ir más allá de la información disponible. El proceso es la secuencia de operaciones, y el producto, su resultado: un concepto, un juicio, una conclusión, una decisión o una solución. El proceso no se observa: se infiere a partir de la respuesta, la latencia y el protocolo, y los errores sistemáticos delatan la estrategia empleada.",
    v: [
      "Pensar=Manipular representaciones mentales para ir más allá de la información disponible",
      "Pensamiento como proceso=Encadenamiento de operaciones que transforma unas representaciones en otras",
      "Pensamiento como producto=Resultado de las operaciones: concepto, juicio, conclusión, decisión o solución",
      "Latencia=Tiempo que se tarda en responder, indicio del número de pasos",
      "Protocolo=Lo que la persona dice mientras resuelve la tarea pensando en voz alta",
      "Error sistemático=Equivocación que sigue un patrón y delata la estrategia usada",
      "Pregunta normativa=Si el producto es correcto según la lógica o la probabilidad",
      "Pregunta descriptiva=Qué hace realmente la mente para llegar a una respuesta"
    ],
    g: [
      "Quien ve el suelo mojado y concluye que ha llovido no ha percibido la lluvia, la ha ___.|inferido|recordado|observado",
      "Que un tipo de problema exija más tiempo que otro sugiere que implica más ___.|pasos|productos|errores",
      "El juicio «es poco probable que el banco me pida la clave por SMS» es un ___ del pensamiento.|producto|proceso|protocolo",
      "Los sesgos de juicio se descubrieron sobre todo analizando errores ___.|sistemáticos|aleatorios|aislados",
      "Preguntar qué hace realmente la mente para llegar a una conclusión es plantear la pregunta ___.|descriptiva|normativa|lógica"
    ],
    tf: [
      "Dos personas pueden dar la misma respuesta correcta por caminos muy distintos.|V",
      "El proceso de pensamiento puede registrarse directamente si la tarea está bien diseñada.|F|El proceso no se observa: se registran productos y huellas, como respuestas, latencias y protocolos, y de ellos se infiere.",
      "Una respuesta errónea puede revelar más sobre el proceso que una acertada.|V",
      "La pregunta normativa se refiere al proceso, y la descriptiva, al producto.|F|Es al revés: la normativa evalúa el producto según la lógica o la probabilidad, y la descriptiva estudia el proceso."
    ],
    q: [
      "Dos estudiantes calculan de cabeza 25 × 12 y responden «300». Una tarda bastante y la otra contesta casi al instante. ¿Qué datos permiten distinguir sus procesos?|La latencia y el protocolo|La respuesta y su exactitud|El tipo de producto obtenido|El producto es idéntico. Solo el tiempo de respuesta y lo que cada una verbaliza revelan caminos distintos.",
      "¿Cuál de estos es un ejemplo de pensamiento como proceso?|Descartar una alternativa|Un juicio de probabilidad|La solución de un problema|Descartar alternativas es una operación. El juicio y la solución son productos del pensamiento.",
      "Un investigador registra cuánto tardan los participantes en evaluar distintos argumentos. ¿Qué está midiendo?|Un indicio para inferir el proceso|El proceso de forma directa|El contenido consciente del proceso|La latencia es un dato del que se infiere el proceso, que no se observa directamente.",
      "¿Qué constituye el núcleo de lo que estudia la psicología del pensamiento?|Llegar a algo que no estaba dado|Registrar con fidelidad lo percibido|Recuperar lo ya guardado en memoria|Pensar es ir más allá de la información disponible: concluir, resolver, decidir o juzgar."
    ],
    inc: [
      "Sobre proceso y producto|El proceso se mide igual que el producto|El producto puede ser un concepto o una decisión|El proceso se infiere de respuestas y latencias|El proceso no se observa directamente. Solo los productos pueden registrarse y medirse."
    ],
    seq: [],
    cls: [
      "Pensamiento|Proceso: comparar; inferir; buscar; evaluar|Producto: concepto; juicio; conclusión; solución"
    ] },
  { t: "Pensamiento, cognición y conciencia",
    tip: "La cognición abarca percepción, atención, memoria, aprendizaje, lenguaje y pensamiento. El pensamiento es un proceso superior que se apoya en los demás, y estos actúan como restricciones. No se identifica con la conciencia, porque hay inferencias automáticas e incubación y percibir no es inferir. Tampoco con el lenguaje, porque se puede razonar sin palabras.",
    v: [
      "Cognición=Procesos con los que se adquiere, transforma, almacena y usa la información",
      "Procesos superiores=Parte de la cognición a la que pertenece el pensamiento",
      "Restricciones=Límites que percepción, atención y memoria imponen al razonamiento",
      "Procesos de Tipo 1=Inferencias rápidas y automáticas de las que solo se conoce el resultado",
      "Incubación=Periodo sin trabajar en un problema tras el que puede aparecer la solución",
      "Razonar sin palabras=Imaginar si un sofá cabe por una puerta girándolo mentalmente",
      "Conciencia sin pensamiento=Ver un color o sentir dolor sin inferir, decidir ni resolver nada",
      "Evans y Stanovich (2013)=Describen procesos autónomos que a menudo solo entregan su resultado"
    ],
    g: [
      "La percepción, la atención y la memoria actúan como ___ del pensamiento.|restricciones|productos|protocolos",
      "Ver el color de un semáforo es una experiencia consciente que no implica necesariamente ___.|inferir|percibir|atender",
      "Repetir una fórmula de cortesía muestra que se puede ___ sin pensar mucho.|hablar|razonar|decidir",
      "Para razonar sobre un problema hay que mantener los datos en la memoria ___.|de trabajo|sensorial|episódica",
      "El conductismo identificó el pensamiento con una forma de ___ silencioso.|lenguaje|cálculo|recuerdo"
    ],
    tf: [
      "Escuchar una canción es ya una forma de pensamiento, porque es una experiencia consciente.|F|No todo lo consciente es pensamiento: escuchar o sentir dolor no exige inferir, decidir ni resolver nada.",
      "La solución de un problema puede aparecer tras un tiempo sin trabajar en él sin que se sepa cómo se llegó a ella.|V",
      "El conductor que frena porque sospecha que un niño va a cruzar no piensa, porque decide sin palabras y sin conciencia del proceso.|F|Es pensamiento: anticipa una consecuencia a partir de la postura del niño y de su experiencia, aunque sea rápido y sin palabras.",
      "Como percepción, memoria y razonamiento se solapan en muchas tareas, se discute dónde trazar la frontera del pensamiento.|V"
    ],
    q: [
      "Una persona imagina si su sofá cabrá por la puerta girándolo mentalmente, sin formular ninguna palabra. ¿Qué ilustra?|Que se puede razonar sin palabras|Que no todo lo consciente es pensamiento|Que el pensamiento es habla interna|El lenguaje ayuda a organizar el pensamiento, pero no se identifica con él: se puede razonar sin palabras.",
      "¿Qué afirmación sobre pensamiento y conciencia es correcta?|Solo se conoce el resultado de algunas inferencias|Toda experiencia consciente supone hacer una inferencia|Pensar exige ser consciente de cada operación mental|Los procesos de Tipo 1 son automáticos y a menudo solo entregan su resultado a la conciencia.",
      "¿Por qué se dice que la percepción, la atención y la memoria restringen el pensamiento?|Lo que no procesan no llega al razonamiento|Sustituyen al pensamiento en tareas simples|Son productos que el pensamiento genera|Para razonar hay que percibir, atender y mantener datos. Lo que no se percibe o no cabe no entra en el proceso.",
      "¿Con qué dos fenómenos identificaron erróneamente el pensamiento la psicología introspectiva y el conductismo?|Con la conciencia y con el lenguaje|Con la percepción y con la memoria|Con la cognición y con la atención|La introspección lo estudió a través de la conciencia, y el conductismo lo identificó con lenguaje silencioso."
    ],
    inc: [
      "Sobre pensamiento, cognición y conciencia|Pensar es hablar por dentro con palabras|El pensamiento forma parte de la cognición|Hay inferencias automáticas sin conciencia|El lenguaje influye en el pensamiento, pero no se identifica con él: se puede razonar sin palabras."
    ],
    seq: [],
    cls: [
      "Valoración de la afirmación|Correcta: el pensamiento forma parte de la cognición; hay inferencias automáticas; se puede razonar sin palabras|Incorrecta: pensar es ser consciente de lo que se piensa; todo lo consciente es pensamiento; pensar es hablar por dentro"
    ] },
  { t: "Estructuralismo e introspección",
    tip: "Wundt fundó su laboratorio en Leipzig en 1879 y usó la introspección experimental con estímulos controlados, pero dejó los procesos superiores fuera del laboratorio, en la Völkerpsychologie. Titchener, con la introspección analítica, redujo el pensamiento a sensaciones, imágenes y afectos. El método tenía problemas de fiabilidad, reactividad y acceso limitado, aunque estableció que la mente podía estudiarse con control experimental.",
    v: [
      "Wilhelm Wundt=Fundó en 1879 el primer laboratorio de psicología experimental, en Leipzig",
      "Introspección experimental=Autoobservación entrenada de la experiencia ante estímulos controlados",
      "Völkerpsychologie=Estudio de los procesos superiores a través de la lengua, los mitos y las costumbres",
      "Edward B. Titchener=Discípulo de Wundt que desarrolló el estructuralismo en Estados Unidos",
      "Introspección analítica=Reducción de toda experiencia a sensaciones, imágenes y afectos",
      "Fiabilidad=Problema de informes que dependían del observador y no podían comprobarse",
      "Reactividad=Atender a la propia experiencia para describirla la modifica",
      "Acceso limitado=Se es consciente del resultado, pero no de las operaciones que llevan a él"
    ],
    g: [
      "Wundt puso en marcha su laboratorio en ___ en 1879.|Leipzig|Würzburg|Berlín",
      "Según Wundt, el pensamiento y el lenguaje debían estudiarse a través de sus productos ___.|colectivos|individuales|conscientes",
      "Para Titchener, pensar en algo era tener en la conciencia una serie de ___ enlazadas.|imágenes|palabras|acciones",
      "Los observadores de Titchener debían describir los elementos sin ___ el objeto al que se referían.|nombrar|percibir|imaginar",
      "Que analizar un enfado lo haga cambiar ilustra el problema de la ___ de la introspección.|reactividad|fiabilidad|validez"
    ],
    tf: [
      "Wundt aplicó la introspección experimental al estudio del pensamiento en su laboratorio de Leipzig.|F|Wundt dejó los procesos superiores fuera del laboratorio. Los abordaron experimentalmente sus críticos de Würzburg.",
      "Titchener consideraba los procesos superiores analizables en sensaciones, imágenes y afectos.|V",
      "Cuando dos laboratorios introspectivos obtenían resultados contradictorios, no había forma de decidir quién tenía razón.|V",
      "La etapa estructuralista no dejó ninguna aportación que recuperara después la psicología cognitiva.|F|Estableció que la mente podía estudiarse con control experimental, y la psicología cognitiva recuperó los informes verbales."
    ],
    q: [
      "En un laboratorio de finales del siglo XIX, un observador entrenado escucha un tono y describe su experiencia inmediata en condiciones repetibles. ¿Qué método se aplica?|Introspección experimental|Introspección retrospectiva|Protocolo verbal concurrente|Es el método de Wundt: autoobservación entrenada ante estímulos controlados. La retrospectiva sistemática es de Würzburg.",
      "Según Wundt, ¿cómo debían estudiarse el pensamiento y el lenguaje?|A través de sus productos colectivos|Con introspección analítica de imágenes|Mediante experimentos con tiempos de reacción|Wundt los remitía a la Völkerpsychologie. Reducirlos a elementos es la postura de Titchener.",
      "¿Qué elementos básicos buscaba la introspección analítica de Titchener?|Sensaciones, imágenes y afectos|Juicios, conceptos y conclusiones|Actos, contenidos y objetos|Titchener reducía cualquier experiencia, incluido el pensamiento, a sensaciones, imágenes y afectos.",
      "¿Qué problema de la introspección se resume en que muchos procesos no dejan huella consciente?|El acceso limitado|La reactividad|La falta de fiabilidad|Se tiene conciencia del resultado, pero no de las operaciones que llevan a él."
    ],
    inc: [
      "Sobre Wundt y Titchener|Wundt veía el pensamiento como imágenes asociadas|Titchener llevó el estructuralismo a Estados Unidos|Wundt usaba estímulos controlados y repetibles|Ver el pensamiento como sucesión de imágenes asociadas es la postura de Titchener. Para Wundt era un producto colectivo."
    ],
    seq: [],
    cls: [
      "Autor|Wundt: introspección experimental; procesos simples; Völkerpsychologie|Titchener: introspección analítica; sensaciones, imágenes y afectos; sucesión de imágenes asociadas"
    ] },
  { t: "Funcionalismo y psicología del acto",
    tip: "El funcionalismo preguntó para qué sirve la mente y, influido por la teoría de la evolución, vio el pensamiento como herramienta de adaptación. James (1890) describió la conciencia como una corriente continua, y Dewey (1910), el pensamiento reflexivo que surge ante una situación problemática. Brentano (1874) definió lo mental por la intencionalidad y distinguió el acto de su contenido.",
    v: [
      "Funcionalismo=Enfoque que preguntó para qué sirve la mente como herramienta de adaptación",
      "Corriente de conciencia=Flujo continuo, personal y selectivo que no se trocea sin falsearlo",
      "The Principles of Psychology=Obra de William James publicada en 1890",
      "Pensamiento reflexivo=Surge cuando algo no encaja y aparece la duda, según Dewey",
      "How We Think=Obra de Dewey de 1910",
      "Intencionalidad=Propiedad de todo fenómeno psíquico de estar dirigido a un objeto",
      "Psicología del acto=Enfoque de Brentano que sitúa en juzgar, desear o recordar el objeto de estudio",
      "Husserl=Discípulo de Brentano que llevó la intencionalidad a la fenomenología"
    ],
    g: [
      "Brentano expuso su psicología del acto en ___.|1874|1890|1910",
      "Para James, buscar «átomos» de conciencia es como intentar entender un río examinando ___ de agua.|cubos|corrientes|fuentes",
      "Según Dewey, el pensamiento reflexivo surge ante una situación ___.|problemática|cotidiana|habitual",
      "El funcionalismo entendió los procesos mentales como herramientas de ___ al medio.|adaptación|respuesta|asociación",
      "Brentano distinguía el ___ mental, como juzgar o desear, de su contenido.|acto|objeto|elemento"
    ],
    tf: [
      "El funcionalismo amplió la psicología a las diferencias individuales, la conducta animal y la educación.|V",
      "Brentano situaba el objeto propio de la psicología en el contenido mental y no en el acto.|F|Es al revés: distinguía acto y contenido y situaba en el acto (juzgar, desear, recordar) el objeto de la psicología.",
      "Funcionalismo y psicología del acto ven el pensamiento como algo que se hace, con dirección y propósito.|V",
      "Para James, la conciencia puede dividirse en elementos fijos si el observador está bien entrenado.|F|James la describió como una corriente continua y cambiante que no puede trocearse en elementos fijos sin falsearla."
    ],
    q: [
      "Alguien va cada día al trabajo por la misma ruta sin pensar en ella. El día que encuentra la calle cortada, empieza a pensar. ¿Qué concepto ilustra?|El pensamiento reflexivo de Dewey|La intencionalidad de Brentano|La corriente de conciencia de James|Para Dewey, el pensamiento reflexivo surge cuando algo no encaja y aparece la duda ante una situación problemática.",
      "¿Qué pregunta principal guiaba a la psicología del acto?|Qué hace la mente|Para qué sirve la mente|De qué se compone la mente|El estructuralismo preguntaba de qué se compone la mente, y el funcionalismo, para qué sirve. Brentano, qué hace.",
      "La idea de un pensamiento dirigido a una meta, que se activa ante un problema, reaparece después en…|Würzburg, la Gestalt y el cognitivismo|el estructuralismo y la introspección analítica|la Völkerpsychologie y el estructuralismo|Reaparece en las tendencias determinantes, en la Gestalt y en la definición cognitiva de la solución de problemas.",
      "¿Qué influencia teórica marcó al funcionalismo estadounidense?|La teoría de la evolución|La lingüística de Chomsky|La teoría de la información|Influido por la evolución, el funcionalismo entendió los procesos mentales como herramientas de adaptación."
    ],
    inc: [
      "Sobre funcionalismo y psicología del acto|James propuso la intencionalidad|Dewey describió el pensamiento reflexivo|Husserl fue discípulo de Brentano|La intencionalidad la propuso Brentano (1874). James describió la conciencia como una corriente continua."
    ],
    seq: [],
    cls: [
      "Enfoque|Estructuralismo: de qué se compone la mente; Titchener; imágenes y sensaciones|Funcionalismo: para qué sirve la mente; James y Dewey; adaptación|Psicología del acto: qué hace la mente; Brentano; intencionalidad"
    ] }
] },
{ n: 2, t: "De Würzburg a Vygotsky", cap: 1, pir: "media", mods: [
  { t: "La escuela de Würzburg y el pensamiento sin imágenes",
    tip: "Entre 1901 y 1907, la escuela de Würzburg, dirigida por Külpe, aplicó la introspección retrospectiva sistemática a tareas que exigían pensar. Halló pensamientos sin imágenes (Marbe, Bühler) y tendencias determinantes (Ach): la meta fijada por la tarea dirige el pensamiento sin ser consciente, y la instrucción previa decide qué asociación aparece (Watt). Titchener lo atribuyó a imágenes débiles, y la controversia sin salida desacreditó la introspección.",
    v: [
      "Oswald Külpe=Dirigió el grupo que aplicó la introspección a tareas de pensar",
      "Introspección retrospectiva sistemática=Primero se resuelve la tarea y después se informa de ella",
      "Pensamiento sin imágenes=Contenidos de pensamiento que no son sensaciones, imágenes ni afectos",
      "Tendencia determinante=Influencia de la tarea que dirige el pensamiento sin ser consciente",
      "Aufgabe=Tarea o instrucción que, según Ach, genera las tendencias determinantes",
      "Marbe (1901)=Halló juicios sin imágenes conscientes que explicaran cómo se formaban",
      "Watt (1905)=Mostró que la instrucción previa decide qué asociación aparece",
      "Bühler (1907)=Recogió Gedanken sin imágenes ante preguntas que exigían reflexión"
    ],
    g: [
      "La escuela de Würzburg trabajó en estos temas entre 1901 y ___.|1907|1913|1920",
      "Ach (1905) llamó ___ a la tarea o instrucción que dirige el pensamiento.|Aufgabe|Gedanken|Völkerpsychologie",
      "Ante «6 y 2», la respuesta pasa de 4 a 12 según la ___ recibida.|instrucción|asociación|imagen",
      "Según Watt, lo decisivo ocurre ___ de presentarse el estímulo.|antes|después|además",
      "Para Titchener, los pensamientos sin imágenes eran en realidad imágenes o sensaciones ___, a menudo corporales.|débiles|intensas|olvidadas"
    ],
    tf: [
      "Titchener aceptó los pensamientos sin imágenes, pero los atribuyó a un mal entrenamiento de los observadores.|F|Los rechazó: sostuvo que eran imágenes o sensaciones débiles que los observadores, mal entrenados, no habían sabido analizar.",
      "La controversia entre Würzburg y Titchener favoreció el ascenso del conductismo.|V",
      "Según la escuela de Würzburg, lo que dirige el pensamiento es una cadena de asociaciones entre imágenes.|F|Lo dirige la meta fijada por la tarea, la tendencia determinante. La cadena de asociaciones era la idea del asociacionismo.",
      "Sigue vigente la idea de Würzburg de que buena parte del proceso de pensar no deja rastro consciente.|V"
    ],
    q: [
      "Un participante ve «6 y 2» tras la instrucción «multiplica» y responde «12» sin recordar de forma consciente la instrucción. ¿Qué concepto lo explica?|Tendencia determinante|Pensamiento sin imágenes|Asociación por contigüidad|La meta fijada por la tarea dirige la respuesta sin que haya que recordarla de forma consciente (Ach, 1905).",
      "¿Qué técnica empleó la escuela de Würzburg?|Introspección retrospectiva sistemática|Introspección analítica de Titchener|Verbalización concurrente de nivel 1|Primero se resolvía la tarea y después se informaba con detalle de lo vivido.",
      "¿Por qué se dice que la controversia sobre el pensamiento sin imágenes no tenía salida?|Nadie podía comprobar la experiencia ajena|Los dos bandos usaban tareas muy distintas|Würzburg nunca llegó a publicar sus datos|Cada laboratorio obtenía lo que su teoría predecía, y la experiencia privada de otro no podía comprobarse.",
      "¿Qué autor de Würzburg informó de pensamientos (Gedanken) sin imágenes ante preguntas que exigían reflexión?|Bühler|Marbe|Watt|Fue Bühler (1907). Marbe estudió juicios sencillos, y Watt, asociaciones controladas."
    ],
    inc: [
      "Sobre la escuela de Würzburg|Siguió el criterio de Wundt|Estuvo dirigida por Oswald Külpe|Describió tendencias determinantes|Hizo justo lo que Wundt desaconsejaba: aplicar la introspección a tareas que exigían pensar."
    ],
    seq: [],
    cls: [
      "Autor de Würzburg|Ach (1905): Aufgabe; tendencias determinantes|Watt (1905): asociaciones controladas; instrucción previa|Bühler (1907): preguntas que exigían reflexión; Gedanken sin imágenes"
    ] },
  { t: "El conductismo: el pensamiento como conducta implícita",
    tip: "Watson (1913) propuso estudiar solo la conducta observable. No negó el pensamiento: lo redefinió como habla subvocal, una conducta implícita (1920). El experimento con curare (Smith et al., 1947) refutó esa versión estricta. Skinner (1957) lo trató como conducta verbal encubierta, y Tolman (1948) introdujo mapas cognitivos y variables intermedias. La crítica de Chomsky (1959) impulsó la revolución cognitiva.",
    v: [
      "Habla subvocal=Habla silenciosa con movimientos mínimos de laringe y lengua, según Watson",
      "Conducta implícita=Pensamiento entendido como conducta aprendida que no se ve",
      "Experimento con curare=Mostró que se entiende y recuerda con los músculos paralizados",
      "Conducta verbal encubierta=Concepción del pensamiento de Skinner, explicable por el refuerzo",
      "Verbal Behavior=Obra de Skinner de 1957, criticada por Chomsky en 1959",
      "Mapa cognitivo=Representación interna del entorno que permite tomar atajos nunca recorridos",
      "Variables intermedias=Expectativas y metas que Tolman situó entre estímulo y respuesta",
      "Crítica de Chomsky=El refuerzo no explica que los niños produzcan frases que nunca han oído"
    ],
    g: [
      "Watson publicó en ___ el artículo considerado el manifiesto del conductismo.|1913|1920|1948",
      "Según Watson, pensar produce movimientos mínimos de la laringe y la ___.|lengua|mandíbula|faringe",
      "Tolman defendió que las ratas que aprendían un laberinto formaban mapas ___.|cognitivos|motores|verbales",
      "Para Skinner, los procesos internos existen, pero no ___ nada.|explican|producen|refuerzan",
      "El conductismo legó a la psicología cognitiva su rigor ___.|metodológico|teórico|introspectivo"
    ],
    tf: [
      "El conductismo negó la existencia del pensamiento.|F|Watson lo redefinió como habla subvocal y Skinner, como conducta verbal encubierta. Lo que se rechazó fue la introspección.",
      "Tras el experimento con curare se conserva la idea de que la actividad del habla puede acompañar a algunos pensamientos.|V",
      "Para Skinner, los procesos internos no existen y por eso no deben estudiarse.|F|Admitía que existen, pero no les daba valor explicativo: son conducta que hay que explicar por la historia de refuerzo.",
      "La tesis de Watson sobre el pensamiento era comprobable y se puso a prueba.|V"
    ],
    q: [
      "Un investigador recibe curare, que paraliza sus músculos, y mientras dura el efecto sigue entendiendo lo que le dicen y lo recuerda después. ¿Qué tesis queda refutada?|La versión estricta de Watson|Los mapas cognitivos de Tolman|La conducta verbal de Skinner|Si pensar fuera mover el aparato fonador, paralizarlo impediría pensar. No ocurrió así (Smith et al., 1947).",
      "¿Qué autor introdujo, dentro del conductismo, variables intermedias como las expectativas y las metas?|Tolman|Skinner|Watson|Tolman (1948) propuso los mapas cognitivos y anticipó ideas de la psicología cognitiva.",
      "¿Qué argumentó Chomsky (1959) contra Verbal Behavior?|Que el refuerzo no explica frases nuevas|Que el habla subvocal no puede medirse|Que la introspección era un método fiable|Los niños producen frases que nunca han oído, algo que el refuerzo no puede explicar. Fue un detonante de la revolución cognitiva.",
      "¿Qué fenómenos centrales del pensamiento dejó sin explicar el conductismo?|La planificación y la creatividad|La adquisición de hábitos simples|Las respuestas a estímulos reforzados|Planificación, creatividad, lenguaje productivo y solución de problemas nuevos quedaron sin explicar."
    ],
    inc: [
      "Sobre el conductismo y el pensamiento|Tolman rechazó las variables intermedias|Skinner lo trató como conducta verbal encubierta|Watson lo identificó con habla subvocal|Tolman introdujo variables intermedias, como expectativas y metas, y propuso los mapas cognitivos (1948)."
    ],
    seq: [
      "Cronología del estudio del pensamiento|Laboratorio de Wundt en Leipzig (1879)>Escuela de Würzburg (1901–1907)>Manifiesto de Watson (1913)>Revolución cognitiva (1956)"
    ],
    cls: [
      "Autor conductista|Watson: habla subvocal; refutado con curare; 1913|Skinner: conducta verbal encubierta; Verbal Behavior; 1957|Tolman: mapas cognitivos; variables intermedias; 1948"
    ] },
  { t: "Piaget y el desarrollo del pensamiento",
    tip: "Piaget preguntó cómo se construye el pensamiento: el niño lo construye con su acción, mediante asimilación, acomodación y equilibración, en cuatro estadios cualitativamente distintos y de orden invariable. Las operaciones formales serían una lógica mental hipotético-deductiva, pero Wason mostró que la mayoría de los adultos falla la tarea de selección abstracta. Por eso el razonamiento formal se ve hoy como una capacidad potencial.",
    v: [
      "Epistemología genética=Tesis de que el niño construye el pensamiento lógico con su acción",
      "Asimilación=Incorporar lo nuevo a los esquemas que ya se tienen",
      "Acomodación=Modificar los esquemas cuando no encajan con la experiencia",
      "Equilibración=Regula asimilación y acomodación hacia estructuras más estables",
      "Permanencia del objeto=Logro del estadio sensoriomotor, de 0 a 2 años",
      "Operaciones concretas=Operaciones lógicas reversibles sobre objetos reales, de 7 a 11 o 12 años",
      "Pensamiento hipotético-deductivo=Razonamiento sobre posibilidades y proposiciones abstractas",
      "Habla egocéntrica=Habla en voz alta sin función social que desaparece al socializarse, según Piaget"
    ],
    g: [
      "Un niño que llama «guau» a todos los animales de cuatro patas ___ la vaca a su esquema de perro.|asimila|acomoda|equilibra",
      "Según Piaget, la diferencia entre el niño y el adulto no es de cantidad de conocimientos, sino de ___.|organización|velocidad|memoria",
      "La conservación, la clasificación y la seriación aparecen en el estadio de operaciones ___.|concretas|formales|simbólicas",
      "Para Piaget, el lenguaje aparece con la función simbólica, junto con el juego simbólico y la imitación ___.|diferida|inmediata|refleja",
      "Hoy el razonamiento formal se considera una capacidad ___ que muchos adultos no aplican de forma general.|potencial|universal|innata"
    ],
    tf: [
      "Para Piaget, el pensamiento lógico es innato y se despliega con la maduración.|F|No es innato ni se copia del exterior: el niño lo construye mediante su acción sobre el mundo.",
      "Los estadios de Piaget son cualitativamente distintos y siguen un orden invariable.|V",
      "Los resultados de Wason invalidan la teoría de Piaget como descripción del desarrollo infantil.|F|No la invalidan como descripción del desarrollo infantil, sino la idea de un punto de llegada lógico y universal.",
      "Para Piaget, el lenguaje depende del desarrollo del pensamiento y no al revés.|V"
    ],
    q: [
      "Un niño de cinco años cree que hay más zumo en un vaso alto y estrecho que en uno bajo y ancho, aunque ha visto trasvasar el mismo líquido. ¿En qué estadio está?|Preoperacional|Operaciones concretas|Sensoriomotor|El estadio preoperacional (2–7 años) carece de conservación, que se adquiere en las operaciones concretas.",
      "¿Qué idea de Piaget cuestionan sobre todo los resultados de Wason en la tarea de selección?|Que los adultos razonen con lógica formal|Que el niño construya el conocimiento actuando|Que el estadio sensoriomotor sea el primero|La mayoría de los adultos falla la versión abstracta y responde según el contenido, no solo según la forma lógica.",
      "¿Qué rasgo define el estadio de operaciones formales?|Razonar sobre hipótesis no observadas|Operar con objetos reales y presentes|Adquirir la permanencia del objeto|Desde los 11 o 12 años se razona sobre posibilidades y proposiciones abstractas, con independencia del contenido.",
      "¿Qué mecanismo regula la asimilación y la acomodación?|La equilibración|La mediación|La interiorización|La equilibración empuja hacia formas de equilibrio más estables. Mediación e interiorización son conceptos de Vygotsky."
    ],
    inc: [
      "Sobre la teoría de Piaget|El estadio preoperacional ya tiene conservación|El sensoriomotor es una inteligencia práctica|Las operaciones formales son hipotético-deductivas|La conservación se adquiere en las operaciones concretas. El pensamiento preoperacional es egocéntrico y sin conservación."
    ],
    seq: [
      "Estadios de Piaget|Sensoriomotor>Preoperacional>Operaciones concretas>Operaciones formales"
    ],
    cls: [
      "Mecanismo de Piaget|Asimilación: incorporar lo nuevo al esquema; llamar «guau» a la vaca|Acomodación: modificar el esquema; crear una categoría nueva para la vaca"
    ] },
  { t: "Vygotsky: pensamiento, lenguaje y cultura",
    tip: "Vygotsky propuso una perspectiva sociocultural (Pensamiento y lenguaje, 1934). Las funciones superiores aparecen primero entre personas, están mediadas por signos, sobre todo el lenguaje, y se desarrollan en la zona de desarrollo próximo. Pensamiento y lenguaje tienen raíces distintas y convergen hacia los dos años. El habla privada no desaparece: se interioriza como habla interna y sirve para autorregularse.",
    v: [
      "Perspectiva sociocultural=Las funciones superiores nacen de la interacción y de las herramientas culturales",
      "Origen social=Toda función superior aparece primero entre personas y luego en el niño",
      "Mediación=El pensamiento se apoya en signos, como el trabajo en herramientas",
      "Zona de desarrollo próximo=Distancia entre lo que el niño hace solo y lo que logra con ayuda",
      "Pensamiento preverbal=Inteligencia práctica del bebé, anterior a la convergencia con el lenguaje",
      "Lenguaje preintelectual=Balbuceo o llanto con función expresiva y social",
      "Habla privada=Habla en voz alta dirigida a uno mismo para guiar la acción",
      "Habla interna=Forma abreviada y silenciosa en que se interioriza el habla privada"
    ],
    g: [
      "Vygotsky publicó «Pensamiento y lenguaje» en ___.|1934|1920|1956",
      "Según Vygotsky, las líneas del pensamiento y del lenguaje convergen hacia los ___ años.|dos|cuatro|siete",
      "Para Vygotsky, el lenguaje no solo comunica el pensamiento, sino que lo ___.|transforma|refleja|sustituye",
      "Cuando la tarea se complica, el habla privada del niño ___.|aumenta|desaparece|disminuye",
      "La regulación verbal de la conducta la estudió después ___.|Luria|Piaget|Tolman"
    ],
    tf: [
      "Para Vygotsky, el habla en voz alta del niño es un residuo del egocentrismo que desaparece con la socialización.|F|Esa es la interpretación de Piaget. Para Vygotsky es habla privada autorreguladora que se interioriza como habla interna.",
      "Piaget y Vygotsky observaron el mismo fenómeno, pero le atribuyeron distinta función y distinto destino.|V",
      "Para Vygotsky, pensamiento y lenguaje tienen un mismo origen y se desarrollan juntos desde el nacimiento.|F|Tienen raíces distintas: pensamiento preverbal y lenguaje preintelectual se desarrollan por separado y convergen hacia los dos años.",
      "El habla interna como herramienta de autorregulación es hoy un campo de investigación activo.|V"
    ],
    q: [
      "Una niña de cuatro años construye una torre y murmura «esta grande abajo… no, se cae… la otra», y habla más cuando la tarea se complica. Según Vygotsky, ¿qué hace?|Se da instrucciones para guiar su acción|Expresa un egocentrismo que desaparecerá|Habla sin ninguna función reguladora|Es habla privada: se da instrucciones a sí misma, como antes se las daba su padre, y luego la interiorizará.",
      "¿Cuál es el papel del adulto según Vygotsky?|Guiar al niño dentro de la ZDP|Ofrecer un entorno que el niño explore|Reforzar las respuestas correctas|Ofrecer un entorno para explorar corresponde a Piaget. Vygotsky subraya la guía dentro de la zona de desarrollo próximo.",
      "Un niño aprende a planificar un puzle porque antes un adulto lo planificó con él en voz alta. ¿Qué principio ilustra?|El origen social de las funciones|La equilibración de los esquemas|La acomodación al objeto nuevo|Toda función superior aparece primero entre personas, en el plano social, y después dentro del niño.",
      "¿Qué motor del desarrollo destaca Vygotsky frente a Piaget?|La interacción social y la mediación|La acción individual y la equilibración|La maduración interna del sistema nervioso|Para Piaget el motor es la acción individual y la equilibración. Para Vygotsky, la interacción social y la mediación cultural."
    ],
    inc: [
      "Sobre Vygotsky|La ZDP es lo que el niño logra sin ayuda|El lenguaje transforma el pensamiento|Las funciones superiores son primero sociales|La ZDP es la distancia entre lo que el niño hace solo y lo que logra con ayuda de alguien más competente."
    ],
    seq: [],
    cls: [
      "Interpretación del habla del niño|Piaget: habla egocéntrica; sin función social; desaparece|Vygotsky: habla privada; autorreguladora; se interioriza"
    ] }
] },
{ n: 3, t: "La revolución cognitiva y sus métodos", cap: 1, pir: "media", mods: [
  { t: "Miller, Newell y Simon",
    tip: "El año 1956 se cita como el nacimiento simbólico de la psicología cognitiva. Miller propuso el 7 ± 2 y la recodificación en fragmentos con sentido. Newell, Shaw y Simon crearon el Logic Theorist y el GPS, basado en el análisis medios-fines, y mostraron que manipular símbolos puede parecerse a pensar. Simon (1955) propuso además la racionalidad acotada: se buscan soluciones satisfactorias, no óptimas.",
    v: [
      "Recodificación=Agrupar la información en unidades con sentido para superar el límite",
      "Fragmento=Unidad con sentido a la que se aplica el límite de capacidad (chunk)",
      "Logic Theorist=Programa de 1956 capaz de demostrar teoremas de lógica",
      "General Problem Solver=Programa que resolvía problemas de cualquier tipo con un mismo procedimiento",
      "Análisis medios-fines=Reducir la diferencia entre el estado actual y la meta mediante submetas",
      "Submeta=Condiciones que faltan para aplicar un operador, convertidas en objetivo",
      "Racionalidad acotada=Buscar soluciones satisfactorias por límites de información, tiempo y cálculo",
      "Human Problem Solving=Obra de Newell y Simon de 1972 que sistematizó el espacio del problema"
    ],
    g: [
      "Miller observó que la capacidad inmediata tenía un límite en torno a ___ elementos.|siete|cuatro|doce",
      "Estimaciones posteriores, como la de Cowan (2001), sitúan la capacidad en torno a ___ fragmentos.|cuatro|siete|dos",
      "Newell y Simon desarrollaron sus primeros programas con J. C. ___.|Shaw|Miller|Marr",
      "Newell y Simon compararon los pasos del GPS con los de personas que pensaban en ___.|voz alta|silencio|grupo",
      "Según la racionalidad acotada, las personas no maximizan, sino que buscan soluciones ___.|satisfactorias|óptimas|aleatorias"
    ],
    tf: [
      "Para Miller, el límite de capacidad se aplica a las unidades físicas, como cada cifra de un número.|F|Se aplica a unidades con sentido: un número de nueve cifras se recuerda mejor en tres bloques de tres.",
      "El GPS pretendía resolver problemas de cualquier tipo con un mismo procedimiento general.|V",
      "En el análisis medios-fines, si un operador no puede aplicarse, se abandona la meta y se elige otra.|F|Las condiciones que faltan para aplicarlo se convierten en una submeta, y se repite hasta alcanzar la meta.",
      "La revolución cognitiva conservó el experimento y la medida objetiva del conductismo.|V"
    ],
    q: [
      "Para llegar a una entrevista en otra ciudad, Ana ve que la distancia es la diferencia principal, elige el tren y se propone conseguir antes el billete. ¿Qué método aplica?|Análisis medios-fines|Reestructuración del campo|Recodificación en fragmentos|Detecta la diferencia, busca un operador (el tren) y convierte en submeta lo que falta para aplicarlo (el billete).",
      "¿A qué enfoque se debe el análisis medios-fines?|Al de Newell y Simon|A la psicología de la Gestalt|A la escuela funcionalista|Es el método del GPS de Newell y Simon. Atribuirlo a la Gestalt es una trampa típica.",
      "Confundir la racionalidad acotada de Simon con otra teoría es una trampa típica. ¿Qué afirma realmente?|Que se buscan soluciones satisfactorias|Que las pérdidas pesan más que las ganancias|Que se maximiza la utilidad esperada|Por límites de información, tiempo y cálculo no se maximiza, sino que se busca lo satisfactorio. Lo de las pérdidas es la teoría de la perspectiva.",
      "¿Por qué se cita 1956 como año de nacimiento simbólico de la psicología cognitiva?|Coincidieron varios trabajos fundacionales|Watson publicó su manifiesto conductista|Se publicó Human Problem Solving|Ese año coincidieron, entre otros, el artículo de Miller sobre el 7 ± 2 y el Logic Theorist de Newell y Simon."
    ],
    inc: [
      "Sobre Newell y Simon|El GPS se basaba en la reestructuración súbita|El Logic Theorist demostraba teoremas de lógica|Simon propuso la racionalidad acotada en 1955|El GPS se basaba en el análisis medios-fines. La reestructuración es la explicación gestáltica del insight."
    ],
    seq: [
      "Análisis medios-fines|Comparar el estado actual con la meta>Buscar un operador que reduzca la diferencia>Convertir en submeta las condiciones que faltan>Repetir hasta alcanzar la meta"
    ],
    cls: [] },
  { t: "La metáfora computacional de la mente",
    tip: "La metáfora computacional ve la mente como un sistema que recibe, codifica, almacena y transforma información y produce una salida, con representaciones, computación, capacidad limitada, etapas e independencia del soporte. Newell y Simon (1976) formularon la hipótesis fuerte del sistema de símbolos físicos. Marr (1982) distinguió los niveles computacional, algorítmico y de implementación. Hoy se usa como herramienta de modelado, no como afirmación literal.",
    v: [
      "Metáfora computacional=La mente funciona, en sentido abstracto, como un ordenador",
      "Procesamiento de la información=Marco de entrada, codificación, almacenamiento, transformación y salida",
      "Independencia del soporte=Lo que importa es el programa y no el material en que se ejecuta",
      "Sistema de símbolos físicos=Tesis de que manipular símbolos es necesario y suficiente para la acción inteligente",
      "Nivel computacional=Qué problema resuelve el sistema y cuál sería la respuesta óptima",
      "Nivel algorítmico=Con qué representaciones y procedimientos se resuelve el problema",
      "Nivel de implementación=Cómo se realiza físicamente, por ejemplo en qué redes cerebrales",
      "Cognición corporeizada=La acción, la percepción y el entorno físico influyen en cómo se piensa"
    ],
    g: [
      "Newell y Simon formularon la hipótesis del sistema de símbolos físicos en ___.|1976|1956|1982",
      "Calcular la probabilidad correcta según el teorema de Bayes corresponde al nivel ___ de Marr.|computacional|algorítmico|de implementación",
      "Usar frecuencias, heurísticos o modelos mentales para juzgar una probabilidad corresponde al nivel ___.|algorítmico|computacional|de implementación",
      "Los primeros modelos procesaban paso a paso, mientras que el cerebro trabaja en ___.|paralelo|serie|bloques",
      "Hoy la metáfora se usa como herramienta de ___, no como afirmación literal.|modelado|medida|terapia"
    ],
    tf: [
      "La mayoría de los psicólogos acepta hoy la hipótesis del sistema de símbolos físicos en su forma fuerte.|F|Pocos la aceptan en su forma fuerte. Sigue vigente la versión moderada: la mente procesa representaciones.",
      "Según la independencia del soporte, una misma operación puede realizarla un cerebro o un ordenador.|V",
      "Dos teorías pueden coincidir en un nivel de Marr y discrepar en otro.|V",
      "La crítica de la serialidad impulsó sobre todo la cognición corporeizada.|F|Impulsó el conexionismo. La cognición corporeizada responde a la crítica de que la mente no es un programa sin cuerpo."
    ],
    q: [
      "Un modelo describe cómo elegir un piso de alquiler aplicando criterios a precios y distancias, pero deja fuera el agobio que se siente en la visita. ¿Qué crítica a la metáfora ilustra?|El olvido de la emoción|La serialidad del proceso|La independencia del soporte|Los modelos clásicos trataban el pensamiento como cálculo frío y dejaban fuera la emoción, que influye en la decisión.",
      "Un estudio investiga qué redes cerebrales intervienen al juzgar probabilidades. ¿En qué nivel de Marr se sitúa?|Implementación|Computacional|Algorítmico|El nivel de implementación pregunta cómo se realiza físicamente el procesamiento.",
      "¿Cuál de estos NO es un supuesto de la metáfora computacional?|Procesamiento sin límites de capacidad|Representaciones internas simbólicas|Descomposición del proceso en etapas|El sistema tiene límites de capacidad y de velocidad, sobre todo en la memoria de trabajo.",
      "¿Qué afirma la hipótesis del sistema de símbolos físicos?|Basta manipular símbolos para la inteligencia|La mente procesa toda la información en paralelo|El pensamiento se apoya en el cuerpo y la acción|Un sistema que manipula símbolos tiene los medios necesarios y suficientes para la acción inteligente (Newell y Simon, 1976)."
    ],
    inc: [
      "Sobre los niveles de Marr|Una teoría computacional explica cómo calcula la mente|El nivel algorítmico trata representaciones y pasos|El de implementación trata la realización física|Una teoría puede describir qué calcula la mente sin decir cómo lo hace. El cómo corresponde al nivel algorítmico."
    ],
    seq: [
      "Flujo del procesamiento de la información|Entrada>Codificación>Almacenamiento>Transformación>Salida"
    ],
    cls: [
      "Nivel de Marr|Computacional: qué problema resuelve; respuesta óptima; teorema de Bayes|Algorítmico: representaciones y procedimientos; frecuencias; heurísticos|Implementación: realización física; redes cerebrales"
    ] },
  { t: "Métodos para estudiar el pensamiento",
    tip: "El pensamiento se estudia combinando métodos. En los protocolos verbales se piensa en voz alta. Nisbett y Wilson (1977) mostraron que se construyen explicaciones a posteriori, pero Ericsson y Simon distinguieron tres niveles, y solo el nivel 3, explicar o justificar, altera el proceso. Los informes concurrentes son más fiables que los retrospectivos. Cronometría, errores, movimientos oculares, simulación, neuroimagen y estudios naturalistas completan el repertorio.",
    v: [
      "Protocolo verbal=Registro de lo que alguien dice mientras resuelve una tarea en voz alta",
      "Nivel 1=Verbalizar contenidos que ya están en forma verbal",
      "Nivel 2=Recodificar en palabras contenidos no verbales, como una imagen",
      "Nivel 3=Explicar o justificar lo que se hace, lo que altera el proceso",
      "Informe concurrente=Verbalización dada mientras se resuelve la tarea",
      "Informe retrospectivo=Verbalización posterior, dependiente de la memoria y vulnerable a reconstrucciones",
      "Nisbett y Wilson (1977)=Mostraron que se construyen explicaciones plausibles a posteriori de la conducta",
      "Cronometría mental=Uso de tiempos de reacción para inferir las operaciones de una tarea"
    ],
    g: [
      "«Siete por ocho, cincuenta y seis, me llevo cinco» es una verbalización de nivel ___.|1|2|3",
      "La verbalización de nivel 2 puede hacer la tarea más ___, pero no cambia la secuencia de pasos.|lenta|precisa|breve",
      "Las críticas de Nisbett y Wilson afectan sobre todo a preguntas sobre ___ y a informes retrospectivos.|causas|pasos|imágenes",
      "La limitación principal de la neuroimagen es que sus datos son ___.|correlacionales|experimentales|cualitativos",
      "Observar a bomberos que deciden en una urgencia es un ejemplo de estudio ___.|naturalista|cronométrico|de simulación"
    ],
    tf: [
      "Según Ericsson y Simon, cualquier verbalización altera la secuencia del proceso de pensamiento.|F|Solo la altera el nivel 3, explicar o justificar. Los niveles 1 y 2 pueden ralentizar la tarea, pero no cambian la secuencia.",
      "Los informes retrospectivos son más vulnerables a reconstrucciones que los concurrentes.|V",
      "Ajustar bien un modelo de simulación a los datos prueba que el modelo es el correcto.|F|Es justo la limitación de la simulación: que un modelo se ajuste a los datos no prueba que sea el correcto.",
      "La cronometría ofrece una medida objetiva del coste de cada operación, pero exige tareas simples.|V"
    ],
    q: [
      "En un estudio se pide a los participantes que, mientras resuelven un problema, expliquen por qué eligen cada paso. ¿Qué cabe esperar según Ericsson y Simon?|Que cambie la secuencia de pasos|Que la tarea solo se haga más lenta|Que el protocolo gane fiabilidad|Justificar es nivel 3: obliga a atender a aspectos que no se atenderían y altera el proceso.",
      "Describir en voz alta una imagen mental mientras se resuelve una tarea corresponde al nivel…|2|1|3|Recodificar en palabras un contenido no verbal es nivel 2: puede hacer la tarea más lenta sin alterar la secuencia.",
      "¿Qué método destaca por su validez ecológica, a costa de poco control de variables?|Los estudios naturalistas|Los protocolos verbales|La cronometría mental|Observar decisiones en contextos reales, como bomberos en una urgencia, gana validez ecológica y pierde control.",
      "¿A qué se aplican sobre todo las críticas de Nisbett y Wilson (1977)?|A preguntas por causas y a informes posteriores|A verbalizar en voz alta lo que ya es verbal|A describir imágenes mentales durante la tarea|No afectan a la verbalización concurrente de niveles 1 y 2, sino a preguntas sobre causas y a informes retrospectivos."
    ],
    inc: [
      "Sobre los métodos para estudiar el pensamiento|La simulación tiene alta validez ecológica|El análisis de errores revela estrategias y sesgos|Los movimientos oculares muestran a qué se atiende|La simulación aporta teorías precisas y comprobables. La validez ecológica es el punto fuerte de los estudios naturalistas."
    ],
    seq: [],
    cls: [
      "Nivel de verbalización|No altera la secuencia: nivel 1; nivel 2; repetir los pasos de un cálculo; describir una imagen mental|Altera la secuencia: nivel 3; justificar cada elección; explicar por qué se hace algo"
    ] },
  { t: "Enfoques contemporáneos",
    tip: "La psicología del pensamiento actual no sigue un único paradigma. El conexionismo representa el conocimiento como patrones de activación distribuidos, la cognición corporeizada integra cuerpo y entorno, la neurociencia halla redes distribuidas sin una «zona del pensamiento» y los modelos bayesianos tratan el pensamiento como inferencia probabilística. La replicación a gran escala, como Many Labs 1, es hoy un criterio central para valorar los efectos.",
    v: [
      "Conexionismo=Conocimiento como patrones de activación en redes de unidades simples",
      "Procesamiento distribuido en paralelo=Modelos de Rumelhart y McClelland (1986)",
      "Pesos de conexión=Valores que cambian con la experiencia en una red conexionista",
      "Tenenbaum et al. (2011)=Defendieron que el enfoque bayesiano explica aprender de muy pocos ejemplos",
      "Redes distribuidas=Base cerebral del razonamiento y la decisión, sin una zona específica",
      "Modelos bayesianos=Pensamiento como combinación del conocimiento previo con datos nuevos",
      "Many Labs 1=Proyecto que puso a prueba 13 efectos en 36 muestras con 6.344 participantes",
      "Debate de niveles=Si una teoría computacional explica el pensamiento o solo lo describe"
    ],
    g: [
      "En Many Labs 1 se reprodujeron ___ de los 13 efectos estudiados.|10|13|6",
      "El proyecto Many Labs 1 reunió 36 muestras con un total de ___ participantes.|6.344|3.428|4.098",
      "El punto débil clásico del conexionismo es el razonamiento basado en reglas ___.|estrictas|probabilísticas|implícitas",
      "Según Tenenbaum y colaboradores (2011), el enfoque bayesiano explica el aprendizaje a partir de muy ___ ejemplos.|pocos|variados|numerosos",
      "En las redes del pensamiento, la corteza ___ tiene un papel importante, pero no exclusivo.|prefrontal|occipital|temporal"
    ],
    tf: [
      "La neurociencia cognitiva ha localizado una zona cerebral específica del pensamiento en la corteza prefrontal.|F|No hay una zona del pensamiento: intervienen redes distribuidas en las que la prefrontal es importante, pero no exclusiva.",
      "Para la cognición corporeizada, contar con los dedos forma parte del proceso de pensar y no es un simple acompañamiento.|V",
      "Los modelos conexionistas representan el conocimiento con símbolos y reglas explícitas.|F|Lo representan como patrones de activación en redes de unidades simples, con pesos que cambian con la experiencia.",
      "Muchos modelos bayesianos se sitúan en el nivel computacional de Marr.|V"
    ],
    q: [
      "Un modelo explica cómo un niño aprende una relación causal tras ver solo dos ejemplos, combinando lo que ya sabía con los datos nuevos. ¿Qué enfoque es?|Bayesiano|Conexionista|Corporeizado|Los modelos bayesianos tratan el pensamiento como inferencia probabilística y explican el aprendizaje con muy pocos ejemplos.",
      "¿Qué critican los detractores de los modelos bayesianos?|Que describen sin explicar el proceso|Que no generalizan a casos nuevos|Que ignoran el cuerpo y la acción|Se sitúan en el nivel computacional: dicen qué sería óptimo, pero no cómo llega la mente ni por qué hay errores sistemáticos.",
      "¿Qué explica bien el conexionismo?|El aprendizaje gradual y la generalización|El razonamiento con reglas lógicas estrictas|La planificación explícita paso a paso|Explica el aprendizaje gradual, la generalización y la tolerancia al daño. Su punto débil son las reglas estrictas.",
      "¿Qué ha cambiado el movimiento de ciencia abierta en la evaluación de la evidencia?|Importan el tamaño del efecto y su réplica|Basta un hallazgo original significativo|Se prefieren estudios de un solo laboratorio|Hoy importan tanto el tamaño del efecto y su replicación como el hallazgo original."
    ],
    inc: [
      "Sobre los enfoques contemporáneos|El simbólico clásico destaca por su flexibilidad|El corporeizado es menos preciso al predecir|El conexionista representa patrones distribuidos|La crítica principal al enfoque simbólico clásico es justamente su rigidez, junto con su serialidad."
    ],
    seq: [],
    cls: [
      "Enfoque|Simbólico clásico: símbolos y reglas; rigidez y serialidad|Conexionista: patrones distribuidos de activación; dificultad con reglas estrictas|Bayesiano: distribuciones de probabilidad; inferencia con pocos datos"
    ] }
] },
{ n: 4, t: "Los cimientos cognitivos del pensamiento", cap: 2, pir: "media", mods: [
  { t: "Percepción y atención al servicio del pensamiento",
    tip: "Ningún razonamiento es mejor que la información sobre la que trabaja. La percepción organiza e interpreta lo sensorial con conocimiento previo, expectativas y contexto, así que es una construcción. La atención, selectiva, sostenida o dividida, decide qué se procesa a fondo y hace de portero de la memoria de trabajo. Lo saliente pesa más, la presentación cambia la representación y ver el problema de otro modo puede resolverlo.",
    v: [
      "Sensación=Registro de la energía física por los receptores",
      "Percepción=Organización e interpretación de lo sensorial con ayuda del conocimiento previo",
      "Atención selectiva=Concentra el procesamiento en una fuente e ignora el resto",
      "Atención sostenida=Mantiene el foco durante un tiempo prolongado",
      "Atención dividida=Reparte recursos entre varias tareas, con coste en precisión",
      "Ceguera por falta de atención=No detectar un estímulo visible por atender a otra tarea",
      "Simons y Chabris (1999)=Estudio del gorila que no se ve mientras se cuentan pases",
      "Saliencia=Lo llamativo, reciente o emocional, que capta la atención y pesa más en los juicios"
    ],
    g: [
      "Seguir una cadena larga de inferencias exige sobre todo atención ___.|sostenida|dividida|selectiva",
      "La atención actúa como ___ de la memoria de trabajo.|portero|almacén|copia",
      "Decidir con muchas variables a la vez exige atención ___, con coste en precisión.|dividida|sostenida|selectiva",
      "El heurístico de ___ es, en parte, una consecuencia de que lo saliente capte la atención.|disponibilidad|representatividad|anclaje",
      "La Gestalt describió el insight como una reestructuración ___ del problema.|perceptiva|lógica|verbal"
    ],
    tf: [
      "Basta con que un dato esté delante de la persona para que entre en su razonamiento.|F|Tiene que ser atendido: la ceguera por falta de atención muestra que lo visible puede pasar inadvertido.",
      "Dos personas que oyen el mismo ruido nocturno pueden razonar bien y llegar a conclusiones opuestas.|V",
      "La percepción es una copia fiel del mundo que el pensamiento interpreta después.|F|La percepción ya interpreta: organiza el registro sensorial con conocimiento previo, expectativas y contexto.",
      "Expresar un mismo dato como ganancia o como pérdida puede llevar a respuestas distintas.|V"
    ],
    q: [
      "Dos vecinas oyen el mismo ruido de madrugada en el portal. Una concluye que es el vecino que vuelve tarde y la otra, que hay un intruso. ¿Qué explica la diferencia?|Partir de premisas perceptivas distintas|Un error lógico en una de las dos|Una diferencia en la sensación auditiva|La percepción interpreta con expectativas y contexto. Ambas pueden razonar bien a partir de premisas perceptivas distintas.",
      "¿Por qué razonar con distracciones produce más errores?|Cada tarea recibe menos recursos|La percepción deja de interpretar|Se bloquea la memoria a largo plazo|Cuando la atención se reparte entre dos tareas exigentes, cada una recibe menos recursos.",
      "¿Qué diferencia la sensación de la percepción?|La percepción da significado al registro|La sensación usa el conocimiento previo|La percepción precede a la sensación|La sensación registra energía física. La percepción la organiza y le da significado con conocimiento previo y contexto.",
      "¿Qué fenómeno ilustra el estudio de Simons y Chabris (1999)?|La ceguera por falta de atención|La reestructuración perceptiva|El heurístico de disponibilidad|Muchos que contaban pases no vieron al gorila: no basta con que la información esté presente, debe ser atendida."
    ],
    inc: [
      "Sobre percepción y atención en el pensamiento|Lo saliente pesa menos en los juicios|La atención selectiva evita datos irrelevantes|La forma de presentar un dato cambia su representación|Lo llamativo, reciente o emocional capta la atención y entra con más facilidad en los juicios."
    ],
    seq: [],
    cls: [
      "Modalidad de atención|Selectiva: una sola fuente; evitar datos irrelevantes|Sostenida: foco prolongado; cadenas largas de inferencias|Dividida: varias tareas a la vez; coste en precisión"
    ] },
  { t: "La memoria de trabajo como cuello de botella",
    tip: "Baddeley y Hitch (1974) propusieron una memoria de trabajo que mantiene y manipula información, con ejecutivo central, bucle fonológico y agenda visoespacial, más el búfer episódico (Baddeley, 2000). Es el cuello de botella del pensamiento: si los elementos y sus relaciones superan lo que cabe, el rendimiento cae, y con carga se recurre a atajos. El límite se sortea agrupando, automatizando y externalizando.",
    v: [
      "Ejecutivo central=Controla la atención y coordina los demás componentes",
      "Bucle fonológico=Mantiene información verbal mediante repaso subvocal",
      "Agenda visoespacial=Mantiene imágenes y posiciones",
      "Búfer episódico=Integra fuentes distintas y conecta con la memoria a largo plazo",
      "Doble tarea=Añadir una carga secundaria para ocupar la memoria de trabajo",
      "Externalizar=Usar papel, esquemas o una hoja de cálculo como memoria ampliada",
      "Automatizar=Practicar hasta que una habilidad deje de consumir recursos",
      "Conocimiento condicional=Saber cuándo y por qué conviene aplicar una estrategia"
    ],
    g: [
      "Recordar un número de teléfono exige mantener, pero calcular 47 × 6 de cabeza exige además ___.|manipular|repasar|codificar",
      "Kyllonen y Christal (1990) hallaron una correlación muy ___ entre memoria de trabajo y razonamiento.|alta|baja|negativa",
      "El búfer episódico lo añadió Baddeley en ___.|2000|1974|1990",
      "Chase y Simon (1973) mostraron con el ___ que los expertos agrupan en fragmentos.|ajedrez|cálculo|lenguaje",
      "La memoria ___ aporta experiencias concretas que sirven de ejemplo o de análogo.|episódica|semántica|procedimental"
    ],
    tf: [
      "Un silogismo que solo admite un modelo mental es más fácil que uno que obliga a comparar varios.|V",
      "En los estudios de doble tarea, la carga secundaria perjudica sobre todo los problemas que se resuelven bien con una respuesta intuitiva.|F|Perjudica sobre todo a los que exigen inhibir la respuesta intuitiva y revisar la primera conclusión.",
      "Mientras no se pase de siete datos, se puede razonar sin sobrecargar la memoria de trabajo.|F|Lo decisivo es cuánto se manipula: tres datos pueden desbordarla si obligan a construir y comparar varios modelos.",
      "Se discute si la relación entre memoria de trabajo y razonamiento refleja una capacidad común o estrategias distintas.|V"
    ],
    q: [
      "Marta compara tres ofertas de alquiler y, en vez de hacerlo de cabeza, las anota en una tabla. ¿Qué vía usa para sortear el límite de la memoria de trabajo?|Externalizar|Automatizar|Agrupar en fragmentos|El papel o la hoja de cálculo funcionan como una memoria de trabajo ampliada.",
      "¿Qué componente de la memoria de trabajo coordina la atención y los demás subsistemas?|El ejecutivo central|El bucle fonológico|El búfer episódico|El bucle fonológico y la agenda visoespacial mantienen información. El ejecutivo central los coordina.",
      "Un estudiante sabe aplicar la fórmula de Bayes, pero no advierte que un problema la requiere. ¿Qué conocimiento le falla?|El condicional|El procedimental|El declarativo|Sabe qué es y cómo se aplica, pero no cuándo ni por qué usarla.",
      "¿Por qué la memoria de trabajo es una de las bases de los modelos duales?|El Tipo 2 se define por requerirla|El Tipo 1 depende de su capacidad|Ambos tipos la consumen por igual|Lo que define al procesamiento de Tipo 2 es precisamente que requiere memoria de trabajo."
    ],
    inc: [
      "Sobre la memoria de trabajo|El búfer episódico guarda posiciones|El bucle fonológico usa repaso subvocal|El ejecutivo central controla la atención|Mantener imágenes y posiciones es función de la agenda visoespacial. El búfer episódico integra fuentes y conecta con la MLP."
    ],
    seq: [],
    cls: [
      "Vía para sortear el límite|Agrupar: fragmentos con sentido; ajedrez de Chase y Simon|Automatizar: tablas de multiplicar; lectura|Externalizar: papel y pizarra; hoja de cálculo"
    ] },
  { t: "Conceptos y categorización",
    tip: "Un concepto representa una clase de entidades, y categorizar es ya inferir. Bruner, Goodnow y Austin (1956) trataron la formación de conceptos como comprobación de hipótesis. La visión clásica usa rasgos necesarios y suficientes, Rosch (1975) mostró la estructura graduada en torno al prototipo, Medin y Schaffer (1978) propusieron ejemplares, y Murphy y Medin (1985), conceptos basados en teorías. El nivel básico no es el prototipo.",
    v: [
      "Categorización=Proceso de asignar un caso a una categoría",
      "Visión clásica=Concepto como lista de rasgos necesarios y suficientes",
      "Estructura graduada=Unos miembros de la categoría son más típicos que otros",
      "Prototipo=Miembro ideal que resume los rasgos más frecuentes de la categoría",
      "Modelo de ejemplares=Se guardan casos concretos y se clasifica por semejanza con ellos",
      "Nivel básico=Nivel de la jerarquía usado por defecto, que equilibra informatividad y distintividad",
      "Teoría-teoría=Conceptos apoyados en conocimiento causal sobre qué rasgos importan",
      "Bruner, Goodnow y Austin=Estudiaron en 1956 la formación de conceptos como comprobación de hipótesis"
    ],
    g: [
      "En la jerarquía «mueble, mesa, mesa de cocina», el nivel básico es ___.|mesa|mueble|mesa de cocina",
      "Es difícil decir qué rasgos comparten todos los ___, lo que cuestiona la visión clásica.|deportes|números primos|triángulos",
      "Medin y Schaffer propusieron el modelo de ejemplares en ___.|1978|1975|1985",
      "El modelo de ejemplares conserva información sobre la ___ de la categoría que el prototipo pierde.|variabilidad|definición|jerarquía",
      "Al categorizar algo se le atribuyen propiedades no observadas, por eso categorizar es ya una forma de ___.|inferencia|percepción|memoria"
    ],
    tf: [
      "Rosch defendió la visión clásica de los conceptos basada en rasgos necesarios y suficientes.|F|Es una trampa típica: el trabajo de Rosch es precisamente la crítica a la visión clásica, con la estructura graduada.",
      "Los miembros típicos de una categoría se verifican antes y se nombran primero.|V",
      "El nivel básico es el miembro más típico de una categoría.|F|Ese es el prototipo. El nivel básico es un nivel de la jerarquía, como «mesa» entre «mueble» y «mesa de cocina».",
      "Sigue en debate si los conceptos se representan como prototipos, como ejemplares o con sistemas mixtos.|V"
    ],
    q: [
      "Un niño ve una ballena y, aunque se parece a un pez, la clasifica como mamífero por lo que sabe de su biología. ¿Qué visión de los conceptos apoya?|La basada en teorías|La de prototipos|La de ejemplares|El conocimiento causal sobre qué rasgos importan pesa más que la semejanza superficial (Murphy y Medin, 1985).",
      "Alguien dice «mira, un perro», y no «un animal» ni «un teckel». ¿Qué está usando?|El nivel básico|El prototipo|El nivel superordinado|El nivel básico es el que se usa por defecto para nombrar. No debe confundirse con el prototipo.",
      "¿Qué punto débil se atribuye a la visión de prototipos?|Pierde la variabilidad de la categoría|No explica la tipicidad de los miembros|Exige rasgos necesarios y suficientes|El prototipo resume la categoría, así que pierde su variabilidad. No explicar la tipicidad es el punto débil de la visión clásica.",
      "Según Rosch (1975), ¿de qué depende la pertenencia a una categoría natural?|De la semejanza con el prototipo|De cumplir una definición estricta|Del recuerdo de casos concretos|La pertenencia es graduada y depende de la semejanza con el miembro ideal. Los casos concretos son el modelo de ejemplares."
    ],
    inc: [
      "Sobre las visiones de los conceptos|Los ejemplares ahorran almacenamiento|La visión clásica no explica la tipicidad|Las teorías explican qué rasgos importan|El modelo de ejemplares tiene un coste de almacenamiento alto y permite poca abstracción."
    ],
    seq: [],
    cls: [
      "Visión del concepto|Clásica: rasgos necesarios y suficientes; número primo|Prototipos: estructura graduada; petirrojo más típico que pingüino|Ejemplares: casos concretos; variabilidad de la categoría"
    ] },
  { t: "Esquemas, guiones y aprendizaje como reorganización",
    tip: "Un esquema es una estructura genérica con huecos y valores por defecto, idea que procede de Bartlett (1932), y un guion es un esquema de una secuencia de acciones (Schank y Abelson, 1977). Permiten inferencias por defecto, guían el razonamiento y representan el problema, aunque normalizan lo que no encaja. Aprender es reorganizar: el aprendizaje significativo y profundo favorece la transferencia.",
    v: [
      "Esquema=Estructura genérica de conocimiento con huecos y valores por defecto",
      "Valor por defecto=Dato que se asume si nadie dice lo contrario",
      "Guion=Esquema de una secuencia ordenada de acciones, como ir al médico",
      "Esquemas pragmáticos=Estructuras como la de permiso con las que razonamos, según Cheng y Holyoak",
      "Chi, Feltovich y Glaser=Mostraron que los expertos clasifican problemas por principios profundos",
      "Aprendizaje significativo=Conectar lo nuevo con lo que ya se sabe para poder transferirlo (Ausubel)",
      "Aprendizaje profundo=Busca el sentido y las relaciones, no la reproducción literal",
      "Aprendizaje implícito=No verbalizable, automatiza y libera recursos (Reber, 1967)"
    ],
    g: [
      "Si alguien cuenta que ha cenado en un restaurante, se infiere que pagó: es una inferencia ___.|por defecto|deductiva|perceptiva",
      "Los guiones fueron propuestos por Schank y ___ en 1977.|Abelson|Holyoak|Glaser",
      "Los novatos clasifican los problemas por sus rasgos ___.|superficiales|profundos|causales",
      "Köhler observó la reestructuración en ___.|chimpancés|palomas|ratas",
      "La distinción entre aprendizaje profundo y superficial se debe a Marton y ___.|Säljö|Ausubel|Reber"
    ],
    tf: [
      "La idea de esquema procede de Bartlett (1932), que la usó para explicar cómo el conocimiento previo transforma lo recordado.|V",
      "Según Cheng y Holyoak (1985), razonamos sobre todo con reglas lógicas abstractas.|F|Propusieron lo contrario: razonamos con esquemas pragmáticos, como el de permiso, y no con reglas lógicas abstractas.",
      "Para pensar mejor, el aprendizaje explícito es útil y el implícito no lo es.|F|Ambos son útiles: el explícito es verbalizable, y el implícito automatiza y libera recursos.",
      "Los esquemas pueden producir errores al rellenar con lo esperado y normalizar lo que no encaja.|V"
    ],
    q: [
      "Dos amigos preparan el carné de conducir. Uno memoriza las respuestas de los tests y el otro entiende por qué existe cada norma. ¿Quién razonará mejor ante una situación nueva?|El que organiza el saber en principios|El que retiene más respuestas literales|Ambos por igual, al saber lo mismo|La diferencia no está en la cantidad de información, sino en su estructura: el aprendizaje significativo se transfiere.",
      "¿Qué diferencia un guion de un concepto?|Representa una secuencia de acciones|Representa una clase de entidades|Carece de valores por defecto|Los conceptos representan clases, los esquemas, situaciones completas, y el guion, una secuencia ordenada de acciones.",
      "¿Qué tipo de aprendizaje es el que más directamente mejora el pensamiento?|El estratégico|El memorístico|El implícito|Aprender a comparar, planificar o comprobar es lo que más directamente mejora el pensamiento.",
      "Un experto reconoce que un problema difícil es de un tipo que ya conoce y lo resuelve enseguida. ¿Qué función del esquema actúa?|Representar el problema|Inferir por defecto|Normalizar lo extraño|El esquema adecuado convierte un problema difícil en uno conocido. Los expertos atienden a principios profundos."
    ],
    inc: [
      "Sobre aprender como reorganización|Aprender consiste sobre todo en añadir datos|Piaget habló de asimilación y acomodación|La Gestalt habló de reestructuración del campo|El aprendizaje no solo añade información: cambia la forma en que está organizada."
    ],
    seq: [
      "Guion de ir al médico|Pedir cita>Esperar>Entrar>Explicar los síntomas>Recibir indicaciones"
    ],
    cls: [
      "Polo de la distinción|Más útil para pensar: significativo; profundo|Menos útil para pensar: memorístico; superficial"
    ] }
] }
);

// SAIMAP Psicología · Pensamiento · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Lenguaje y pensamiento", cap: 2, pir: "media", mods: [
  { t: "El lenguaje como sistema simbólico",
    tip: "El lenguaje es un sistema de símbolos, signos que representan por convención y no por parecido. La combinatoriedad, el desplazamiento (Hockett, 1960), la abstracción y la estructura proposicional permiten pensar en lo ausente, lo hipotético y lo abstracto. Pero pensamiento y lenguaje no son lo mismo: personas con afasia grave conservan la aritmética o el razonamiento sobre intenciones ajenas (Fedorenko y Varley, 2016). El consenso es intermedio: el lenguaje no es condición de todo pensamiento, pero amplía mucho su alcance.",
    v: [
      "Símbolo=Signo que representa algo por convención y no por semejanza",
      "Combinatoriedad=Con palabras y reglas finitas se construye un número ilimitado de frases nuevas",
      "Desplazamiento=Propiedad que permite referirse a lo ausente en el espacio o en el tiempo",
      "Postura de Piaget=El lenguaje expresa estructuras de pensamiento ya formadas",
      "Abstracción=Tener palabras para entidades que no se ven ni se tocan, como «deuda»",
      "Estructura proposicional=Frases que expresan relaciones entre conceptos y sirven de premisas",
      "Fedorenko y Varley (2016)=Revisaron casos de afasia grave con aritmética y razonamiento conservados",
      "Pensamiento sin lenguaje=Expectativas de bebés que aún no hablan o problemas que resuelven otros animales"
    ],
    g: [
      "Que la palabra «árbol» no se parezca a un árbol muestra que el lenguaje es ___.|simbólico|icónico|proposicional",
      "Hablar del verano pasado o de lo que habría ocurrido con otra decisión ilustra la propiedad de ___.|desplazamiento|combinatoriedad|abstracción",
      "«Si sube el precio, baja la demanda» es un ejemplo de estructura ___ que puede servir de premisa.|proposicional|combinatoria|simbólica",
      "Según Piaget, el lenguaje ___ estructuras de pensamiento ya formadas.|expresa|crea|determina",
      "La postura que identifica pensar con hablar internamente está hoy ___.|rechazada|confirmada|en debate"
    ],
    tf: [
      "Las regiones cerebrales que responden al lenguaje se distinguen de las que se activan en muchas tareas de razonamiento.|V",
      "Las personas con afasia grave pierden también la aritmética y el razonamiento sobre las intenciones ajenas.|F|Fedorenko y Varley (2016) revisaron casos de afasia grave que conservaban esas capacidades: hay pensamiento sin lenguaje.",
      "Para Vygotsky (1934), las palabras reorganizan la actividad mental, una postura muy influyente.|V",
      "La estructura proposicional es la propiedad que permite hablar de lo que no está presente.|F|Esa es el desplazamiento (Hockett, 1960). La estructura proposicional expresa relaciones entre conceptos que sirven de premisas."
    ],
    q: [
      "Una paciente con afasia grave tras un ictus apenas comprende frases, pero sigue calculando el cambio al pagar y entiende las intenciones de sus nietos. ¿Qué apoya el caso?|Que hay pensamiento sin lenguaje|Que pensar es hablar internamente|Que la lengua determina el pensamiento|Casos así, revisados por Fedorenko y Varley (2016), muestran que el lenguaje no es condición de todo pensamiento.",
      "¿Qué propiedad del lenguaje describió Hockett (1960)?|El desplazamiento|La combinatoriedad|La estructura proposicional|El desplazamiento permite referirse a lo que no está presente, en el espacio o en el tiempo.",
      "¿Qué valoración recibe la postura de Piaget de que el pensamiento precede al lenguaje?|Válida para parte del desarrollo temprano|Rechazada por los casos de afasia grave|Confirmada para todo el pensamiento adulto|El lenguaje expresaría estructuras ya formadas, algo válido para parte del desarrollo temprano.",
      "¿Cuál es la conclusión de consenso sobre lenguaje y pensamiento?|El lenguaje amplía el alcance del pensamiento|El lenguaje es condición de todo pensamiento|El lenguaje apenas influye en el pensamiento|Es intermedia: el lenguaje no es necesario para todo pensamiento, pero amplía mucho su alcance."
    ],
    inc: [
      "Sobre el lenguaje como sistema simbólico|El símbolo se parece a lo que representa|El desplazamiento permite hablar de lo ausente|La combinatoriedad permite crear frases nuevas|Un símbolo representa por convención, no por parecido: la palabra «árbol» no se parece a un árbol."
    ],
    seq: [],
    cls: [] },
  { t: "La función estructurante del lenguaje",
    tip: "Además de representar, el lenguaje organiza: segmenta la experiencia continua, la etiqueta y la agrupa en jerarquías, y la gramática añade condicionales, negación y conectores causales. Los numerales son una tecnología cognitiva (Frank et al., 2008). Pero las palabras no son neutras: una etiqueta deforma el recuerdo de un dibujo ambiguo (Carmichael, Hogan y Walter, 1932) y describir un rostro empeora su reconocimiento, el ensombrecimiento verbal. El lenguaje estructura el pensamiento sin determinarlo.",
    v: [
      "Segmentar=Cortar la experiencia continua en unidades, como distinguir decepción de tristeza",
      "Etiquetar=Nombrar algo para situarlo en una categoría y activar lo que se sabe de ella",
      "Jerarquía léxica=Serie como caniche, perro y mamífero que hace posibles inferencias",
      "Condicional=Forma «si…, entonces…» que permite simular consecuencias",
      "Negación=Recurso gramatical para representar lo que no ocurre",
      "Tecnología cognitiva=Invención cultural, como los numerales, que amplía lo que la mente puede hacer",
      "Ensombrecimiento verbal=Peor reconocimiento de un estímulo tras describirlo con palabras",
      "Carmichael, Hogan y Walter=Mostraron en 1932 que una etiqueta deforma el recuerdo de dibujos ambiguos"
    ],
    g: [
      "Tener una palabra como «simetría» permite reconocer esa relación en casos sin parecido superficial, base del pensamiento ___.|analógico|lateral|intuitivo",
      "Frank et al. (2008) describieron los ___ como una tecnología cognitiva.|numerales|condicionales|esquemas",
      "En el estudio de Carmichael, Hogan y Walter, la etiqueta había guiado la ___ del dibujo.|codificación|percepción|recuperación",
      "Describir con palabras un rostro visto poco antes ___ después su reconocimiento.|empeora|mejora|no altera",
      "Escribir los pros y contras de una decisión ___ la memoria de trabajo.|descarga|sobrecarga|sustituye"
    ],
    tf: [
      "Una etiqueta común como «herramienta» puede reunir un martillo, un destornillador y una aplicación del móvil.|V",
      "El ensombrecimiento verbal consiste en que describir un estímulo con palabras mejora su reconocimiento posterior.|F|Es al revés: describir un rostro empeoraba después su reconocimiento (Schooler y Engstler-Schooler, 1990).",
      "En el estudio de Carmichael, Hogan y Walter, los dibujos se reproducían deformados en la dirección de la etiqueta.|V",
      "La función estructurante implica que el lenguaje determina qué operaciones de pensamiento son posibles.|F|Las estructura sin determinarlas: ofrece moldes que facilitan unas operaciones y dificultan otras."
    ],
    q: [
      "Un testigo describe por escrito y con detalle la cara de un atracador y, al día siguiente, falla al reconocerlo en una rueda. ¿Qué fenómeno lo explica mejor?|El ensombrecimiento verbal|La supresión articulatoria|El efecto de la etiqueta previa|Forzar la traducción verbal de algo difícil de expresar, como una cara, empeora su representación (Schooler y Engstler-Schooler, 1990).",
      "Alguien agobiado por «todo lo pendiente» lo escribe como «tres trámites, dos trabajos y una llamada». ¿Qué función del lenguaje usa sobre todo?|Segmentar|Relacionar|Negar|Al nombrar las partes, el problema se divide en unidades manejables.",
      "¿Qué recurso gramatical hace explícitas las relaciones que se usan al argumentar?|Los conectores causales|Las jerarquías léxicas|Las etiquetas comunes|«Porque» y «por tanto» explicitan esas relaciones. Las jerarquías léxicas permiten inferencias por inclusión.",
      "En el estudio de Carmichael, Hogan y Walter (1932), un mismo dibujo iba acompañado de «gafas» o de «pesas». ¿Qué ocurrió al reproducirlo?|Se deformaba hacia la etiqueta|Se reproducía con más exactitud|Se olvidaba antes con «pesas»|La palabra guió la codificación, y el recuerdo se desvió en la dirección de la etiqueta."
    ],
    inc: [
      "Sobre la función estructurante del lenguaje|Verbalizar siempre mejora la representación|Las etiquetas facilitan la abstracción|Los condicionales permiten simular consecuencias|Lo difícil de expresar, como una cara o un vino, puede representarse peor si se fuerza su traducción verbal."
    ],
    seq: [],
    cls: [
      "Función del lenguaje|Segmentar: distinguir decepción de tristeza; «tres trámites, dos trabajos y una llamada»|Etiquetar: llamar «gasto fijo» a varias facturas; reunir objetos bajo «herramienta»|Relacionar: «si no entrego hoy, pierdo la nota»; usar «porque» y «por tanto»"
    ] },
  { t: "Habla interna y autorregulación",
    tip: "Para Vygotsky (1934), el pensamiento verbal nace de interiorizar el lenguaje social: el niño es guiado por el adulto, después se habla en voz alta (habla privada) y por último esa habla se vuelve interna, silenciosa y abreviada. Piaget llamó habla egocéntrica a esa habla y pensó que desaparecía. Para Vygotsky se interioriza y autorregula. Luria estudió la regulación verbal de la conducta, base de las autoinstrucciones de Meichenbaum y Goodman (1971), y la supresión articulatoria aumenta el coste de cambiar de tarea.",
    v: [
      "Habla privada=Habla en voz alta dirigida a uno mismo que, según Vygotsky, se interioriza",
      "Habla egocéntrica=Término de Piaget para el habla del niño consigo mismo, destinada a desaparecer",
      "Habla interna=Lenguaje silencioso y abreviado dirigido a uno mismo para planificar y controlar",
      "Luria (1961)=Estudió cómo las palabras llegan a iniciar, mantener e inhibir acciones",
      "Autoinstrucciones=Técnica de Meichenbaum y Goodman (1971) para guiar la conducta con frases",
      "Supresión articulatoria=Repetir una sílaba en voz baja para impedir el habla interna",
      "Habla interna condensada=Variante casi telegráfica, frente a la expandida con frases completas",
      "Alderson-Day y Fernyhough=Revisaron en 2015 la investigación sobre habla interna desde cuatro perspectivas"
    ],
    g: [
      "Repetir un código mientras se usa ilustra la función de ___ información del habla interna.|mantener|supervisar|planificar",
      "Para Piaget, el habla egocéntrica ___ al superar el egocentrismo.|desaparece|se interioriza|se automatiza",
      "Impedir el habla interna con supresión articulatoria aumenta el coste de ___ de tarea.|cambiar|aprender|empezar",
      "«Venga, que queda poco» ilustra la función de ___ del habla interna.|motivación|supervisión|planificación",
      "La perspectiva ___ de Alderson-Day y Fernyhough relaciona el habla interna con las alucinaciones verbales.|clínica|evolutiva|cognitiva"
    ],
    tf: [
      "Para Piaget, el habla que el niño se dirige a sí mismo se interioriza y pasa a autorregular su conducta.|F|Esa es la postura de Vygotsky. Para Piaget, el habla egocéntrica refleja el egocentrismo y desaparece.",
      "En el entrenamiento en autoinstrucciones, las frases se dicen primero en voz alta y luego en silencio.|V",
      "La investigación actual identifica todo el pensamiento con el habla subvocal, como hacía Watson.|F|Recupera el habla interna sin reducir a ella todo el pensamiento. Esa reducción era la tesis de Watson (1913, 1920).",
      "Una hipótesis influyente propone que algunas alucinaciones auditivas verbales son habla interna no reconocida como propia.|V"
    ],
    q: [
      "Un terapeuta enseña a un niño impulsivo a decirse «primero miro, luego contesto», al principio en voz alta y después en silencio. ¿Qué técnica aplica?|Entrenamiento en autoinstrucciones|Supresión articulatoria|Habla egocéntrica guiada por el adulto|Es la técnica de Meichenbaum y Goodman (1971), derivada de la línea de Luria sobre la regulación verbal de la conducta.",
      "En tareas que exigen alternar sumas y restas, ¿qué efecto tiene la supresión articulatoria (Emerson y Miyake, 2003)?|Aumenta el coste de cambiar de tarea|Mejora la rapidez del cálculo mental|Reduce los errores de reconocimiento|Sin la voz interna que dice «ahora toca restar», cuesta más mantener el plan.",
      "¿Qué autor, discípulo y colaborador de Vygotsky, estudió la regulación verbal de la conducta?|Luria|Meichenbaum|Piaget|Luria (1961) estudió cómo las palabras inician, mantienen e inhiben acciones. Meichenbaum desarrolló después las autoinstrucciones.",
      "¿Qué subraya la revisión de Alderson-Day y Fernyhough (2015) sobre el habla interna?|Que no es uniforme entre personas|Que es siempre un monólogo completo|Que todas las personas la tienen igual|Puede ser condensada o expandida, monólogo o diálogo, y algunas personas dicen apenas tenerla."
    ],
    inc: [
      "Sobre el habla interna|Hoy solo la estudia la psicología clínica|Sirve para planificar y supervisar la conducta|Puede ser condensada o expandida|Alderson-Day y Fernyhough (2015) la revisan desde cuatro perspectivas: evolutiva, cognitiva, clínica y neurocientífica."
    ],
    seq: [
      "Origen del habla interna según Vygotsky|Guía por las palabras del adulto>Habla privada en voz alta>Habla interna silenciosa y abreviada"
    ],
    cls: [
      "Función del habla interna|Planificar: «primero llamo al banco, luego reviso el correo»; ordenar los pasos|Supervisar: «espera, esto no cuadra»; detectar y corregir errores|Motivarse: «venga, que queda poco»; regular la emoción"
    ] },
  { t: "Relatividad lingüística: qué dicen los datos",
    tip: "La hipótesis de Sapir-Whorf tiene una versión fuerte, el determinismo lingüístico, hoy abandonada, y una débil, según la cual la lengua influye en algunos procesos, con apoyo mixto según el dominio. El número da los datos más claros: mundurukú y pirahã manejan cantidades aproximadas, pero fallan con la cantidad exacta que hay que recordar, porque los numerales son una tecnología cognitiva. Los efectos sobre el color son modulados y con réplicas discrepantes, y el tiempo vertical en mandarín (Boroditsky, 2001) no se replicó.",
    v: [
      "Relatividad lingüística=Hipótesis de que la lengua influye en cómo se percibe y se piensa el mundo",
      "Determinismo lingüístico=Versión fuerte de Sapir-Whorf: la lengua determina el pensamiento",
      "Versión débil=La lengua hace más fáciles o habituales ciertas distinciones",
      "Winawer et al. (2007)=Hablantes de ruso distinguían antes dos azules separados por su frontera léxica",
      "Pica et al. (2004)=Estudiaron a 55 mundurukú, cuya lengua tiene numerales hasta cinco",
      "Frank et al. (2008)=Pirahã que emparejaban cantidades a la vista, pero fallaban al recordarlas",
      "Boroditsky (2001)=Informó de un tiempo más vertical en hablantes de mandarín, que no se replicó",
      "Levinson (2003)=Defendió que los marcos espaciales absolutos cambian el recuerdo de posiciones"
    ],
    g: [
      "Pica et al. (2004) hallaron que los mundurukú fallaban en la aritmética ___ por encima de cuatro o cinco.|exacta|aproximada|mental",
      "Con los objetos a la vista, los pirahã acertaron ___ de 56 ensayos de emparejamiento uno a uno.|54|24|36",
      "En Winawer et al. (2007), el efecto se ___ con una tarea verbal simultánea.|reducía|ampliaba|invertía",
      "Gordon (2004) estudió a 7 pirahã, aunque la mayoría de sus datos procedían de cuatro ___.|varones|niños|ancianos",
      "Li y Gleitman (2002) atribuyeron parte de los resultados sobre el espacio al ___ de la prueba.|entorno|idioma|examinador"
    ],
    tf: [
      "La versión fuerte de la hipótesis de Sapir-Whorf está abandonada.|V",
      "Los mundurukú, sin numerales mayores que cinco, no pueden comparar cantidades aproximadas grandes.|F|Las comparaban y sumaban con soltura. Fallaban en la aritmética exacta por encima de cuatro o cinco (Pica et al., 2004).",
      "El resultado de Boroditsky (2001) sobre el tiempo vertical en mandarín es una prueba sólida del whorfianismo.|F|No se replicó (January y Kako, 2007, con seis intentos), y el debate sigue abierto.",
      "Los efectos del ruso sobre el color se interpretan como categoriales y modulados, no como incapacidad para ver colores sin nombre.|V"
    ],
    q: [
      "Un investigador pide a adultos de un pueblo sin numerales exactos que reproduzcan una fila de piedras. Con la fila a la vista aciertan casi siempre, y si se tapa fallan mucho. ¿Qué interpretación es la más aceptada?|Les falta una herramienta para guardarla|Carecen de la noción misma de cantidad|Su percepción visual de la fila es deficiente|Los numerales son una tecnología cognitiva para guardar y transmitir cantidades exactas (Frank et al., 2008).",
      "¿Qué dominio ofrece el apoyo más claro a la versión débil de la relatividad lingüística?|El número|El color|El tiempo|Sin numerales falla la cantidad exacta que hay que recordar. El color da réplicas discrepantes y el tiempo no se replicó.",
      "¿Qué estudio no reprodujo los efectos del ruso sobre la distinción de azules?|Martinovic et al. (2020)|January y Kako (2007)|Li y Gleitman (2002)|January y Kako no replicaron el efecto del tiempo en mandarín, y Li y Gleitman discutieron los marcos espaciales.",
      "¿Qué afirma la versión fuerte de la hipótesis de Sapir-Whorf?|Que lo que no tiene nombre no puede pensarse|Que la lengua facilita ciertas distinciones|Que los numerales amplían lo que se puede hacer|La versión fuerte, o determinismo, está abandonada. Facilitar ciertas distinciones corresponde a la versión débil."
    ],
    inc: [
      "Sobre la relatividad lingüística|Los pirahã fallaban emparejando a la vista|La versión fuerte de la hipótesis está abandonada|El número da el apoyo más claro a la versión débil|Emparejaban casi sin error con los objetos a la vista (54 de 56). Fallaban cuando debían recordar la cantidad."
    ],
    seq: [],
    cls: [
      "Estado de la evidencia|Apoyo más claro: número; mundurukú; pirahã|No replicado: tiempo vertical en mandarín; Boroditsky (2001)|Discrepante o en debate: color en ruso; marcos espaciales"
    ] }
] },
{ n: 6, t: "Pensamiento analítico y procesamiento dual", cap: 3, pir: "media", mods: [
  { t: "Pensamiento formal frente a pensamiento intuitivo",
    tip: "El pensamiento formal aplica reglas independientes del contenido: un argumento es válido por su forma. Es lento, sigue pasos y carga la memoria de trabajo. El intuitivo es rápido, asociativo y muy sensible a las creencias. Es un consenso que el contenido y las creencias modulan el razonamiento lógico, como muestran el sesgo de creencia y el efecto del contenido en la tarea de Wason. La intuición no es un defecto: en dominios con práctica y retroalimentación clara resume años de experiencia.",
    v: [
      "Pensamiento formal=Aplicación de reglas válidas con independencia del contenido",
      "Pensamiento intuitivo=Modo rápido y asociativo, apoyado en la experiencia y sensible a las creencias",
      "No contradicción=Principio de que no cabe afirmar y negar lo mismo a la vez y en el mismo sentido",
      "Validez=Propiedad de un argumento que depende de su forma y no de su tema",
      "Sesgo de creencia=Aceptar conclusiones inválidas creíbles y rechazar válidas increíbles",
      "Efecto del contenido=La versión de Wason con normas sociales resulta mucho más fácil que la abstracta",
      "Negación del antecedente=Falacia que de «si p, entonces q» y «no p» concluye «no q»",
      "Riesgo del pensamiento formal=Bloquearse o tardar demasiado en llegar a una respuesta"
    ],
    g: [
      "El pensamiento formal es lento y exige mantener varias representaciones en la memoria ___.|de trabajo|semántica|episódica",
      "El riesgo típico del pensamiento intuitivo es sustituir la validez por la ___.|credibilidad|velocidad|abstracción",
      "Evans, Barston y Pollard (___) describieron el sesgo de creencia en los silogismos.|1983|1974|1966",
      "«Si un producto es natural, es sano. Este champú no es natural. Luego no es sano» comete una ___ del antecedente.|negación|afirmación|inversión",
      "Los trabajos de ___ mostraron que muchos adultos no razonan formalmente en tareas abstractas.|Wason|Piaget|Dewey"
    ],
    tf: [
      "En el pensamiento formal, la sensibilidad al contenido es idealmente nula.|V",
      "Las personas suelen razonar de forma puramente formal cuando el problema tiene una estructura lógica clara.|F|Casi nunca razonan de forma puramente formal: el contenido y las creencias modulan el razonamiento lógico.",
      "La enfermera veterana que nota que «algo no va bien» usa un reconocimiento de patrones nada arbitrario.|V",
      "En la tarea de selección de Wason, la versión abstracta resulta más fácil que la de normas sociales.|F|Es al revés: la versión abstracta casi nadie la resuelve, y la de normas sociales resulta mucho más fácil."
    ],
    q: [
      "Ana acepta «Si un producto es natural, es sano. Este champú no es natural. Luego no es sano», pero rechaza al instante el mismo argumento con perros y mamíferos. ¿Qué ilustra?|Que el contenido modula la lógica|Que Ana razona de forma formal|Que el primer argumento es válido|La forma es idéntica, una negación del antecedente, y solo cambia el contenido que ayuda o engaña.",
      "¿Cuándo se vuelve problemática la intuición?|Fuera de su dominio o en tareas trampa|En dominios con retroalimentación clara|Cuando resume años de práctica experta|Falla si se aplica fuera de su dominio o si la tarea está diseñada para que la primera respuesta sea errónea.",
      "¿Qué rasgo corresponde al pensamiento intuitivo y no al formal?|Alta sensibilidad al contenido|Reglas explícitas por pasos|Alta demanda de memoria de trabajo|El intuitivo es rápido, asociativo y muy sensible a las creencias y al contenido concreto del problema.",
      "¿Qué garantizan las reglas de inferencia del pensamiento formal?|Conclusión verdadera si las premisas lo son|Que las premisas de partida sean verdaderas|Conclusión creíble para quien razona|Si las premisas son verdaderas, la conclusión también lo es. No garantizan que las premisas lo sean ni que la conclusión parezca creíble."
    ],
    inc: [
      "Sobre el pensamiento formal e intuitivo|La intuición es siempre una fuente de error|El pensamiento formal carga la memoria de trabajo|El intuitivo es rápido y asociativo|En dominios con mucha práctica y retroalimentación clara, la intuición resume años de experiencia."
    ],
    seq: [],
    cls: [
      "Modo de pensamiento|Formal: reglas explícitas; lento y por pasos; alta demanda de memoria de trabajo|Intuitivo: asociaciones y experiencia; rápido; muy sensible al contenido"
    ] },
  { t: "Dewey y el pensamiento reflexivo",
    tip: "En How We Think (1910), Dewey definió el pensamiento reflexivo como el examen activo, persistente y cuidadoso de una creencia a la luz de sus fundamentos y de las conclusiones a las que conduce. Se inicia ante la duda, cuando una situación problemática interrumpe la conducta habitual, y su función es adaptativa. Lo describió en cinco fases que no forman una secuencia rígida: es una descripción normativa, no un modelo experimental.",
    v: [
      "How We Think=Libro breve de 1910 en el que Dewey trató qué distingue el buen pensar",
      "Pensamiento reflexivo=Examen activo, persistente y cuidadoso de una creencia y de sus fundamentos",
      "Situación problemática=Algo que no encaja e interrumpe la conducta habitual",
      "Función adaptativa=Salir de la perplejidad y recuperar una forma de actuar que funcione",
      "Persistencia=No detenerse en la primera explicación que encaja",
      "Pensamiento metacognitivo=Supervisión del propio proceso de pensamiento",
      "Descripción normativa=Propuesta sobre cómo debería pensarse, no un modelo experimental",
      "D'Zurilla y Goldfried (1971)=Entrenamiento en solución de problemas cuyas fases recuerdan a Dewey"
    ],
    g: [
      "Para Dewey, el pensamiento reflexivo se inicia ante la ___.|duda|rutina|costumbre",
      "Dewey fue una de las figuras del ___ estadounidense.|funcionalismo|estructuralismo|conductismo",
      "En la cuarta fase de Dewey se desarrollan por ___ las consecuencias de cada sugerencia.|razonamiento|observación|intuición",
      "La pregunta «¿por qué creo esto y qué implica?» corresponde al pensamiento ___.|reflexivo|lógico|metacognitivo",
      "La definición de Dewey es la raíz de muchas definiciones del pensamiento ___.|crítico|lateral|intuitivo"
    ],
    tf: [
      "Para Dewey, el pensamiento reflexivo surge sobre todo cuando la conducta habitual funciona bien.|F|Se inicia cuando una situación problemática interrumpe la acción habitual: mientras todo funciona, no hay motivo.",
      "Las cinco fases de Dewey forman una secuencia rígida comprobada experimentalmente.|F|Es una descripción normativa, no un modelo experimental, y sus fases no forman una secuencia rígida.",
      "Lógica, reflexión y metacognición comparten la exigencia de frenar la respuesta inmediata.|V",
      "Dewey distinguió el pensamiento reflexivo de las creencias aceptadas sin examen, por costumbre.|V"
    ],
    q: [
      "Un estudiante que siempre aprueba releyendo suspende y piensa «el examen era injusto». Después revisa qué preguntas falló y ve que eran los ejercicios. ¿Qué hace, en sentido deweyano?|Tratar su creencia como hipótesis|Supervisar su proceso de lectura|Aplicar reglas lógicas al examen|Reflexionar es examinar una creencia a la luz de sus fundamentos y comprobar lo que se sigue de ella.",
      "¿Qué fase de Dewey sigue a localizar y definir el problema?|Sugerir posibles soluciones|Comprobar la sugerencia elegida|Sentir una dificultad|El orden es dificultad, definición, sugerencias, desarrollo por razonamiento y comprobación.",
      "¿Cuál es el objeto del pensamiento reflexivo, frente al lógico y al metacognitivo?|Las creencias y sus fundamentos|La validez de un argumento|El propio proceso de pensamiento|La lógica evalúa la validez de estructuras, y la metacognición supervisa el propio proceso.",
      "¿Qué tres rasgos definen el pensamiento reflexivo de Dewey?|Activo, persistente y atento a fundamentos|Rápido, asociativo y basado en la experiencia|Formal, lento e independiente del contenido|Pone a prueba las ideas, no se detiene en la primera explicación y pregunta por qué se cree algo."
    ],
    inc: [
      "Sobre Dewey|Basta la primera explicación que encaja|El pensamiento reflexivo tiene una función adaptativa|Escribió How We Think en 1910|El pensamiento reflexivo es persistente: no se detiene en la primera explicación que encaja."
    ],
    seq: [
      "Fases del pensamiento reflexivo (Dewey, 1910)|Sentir una dificultad>Localizar y definir el problema>Sugerir posibles soluciones>Desarrollar sus consecuencias por razonamiento>Comprobar la sugerencia elegida"
    ],
    cls: [
      "Forma de pensamiento|Lógica: validez de un argumento; ¿qué se sigue de estas premisas?|Reflexiva: creencias propias y sus fundamentos; ¿por qué creo esto?|Metacognitiva: el propio proceso; ¿estoy pensando bien sobre esto?"
    ] },
  { t: "Modelos duales y sus críticas",
    tip: "Varios autores propusieron un modo rápido y otro lento. Evans y Stanovich (2013) hablan de procesos Tipo 1, definidos por ser autónomos y no requerir memoria de trabajo, y Tipo 2, que requieren memoria de trabajo y permiten el desacoplamiento cognitivo. Rapidez o inconsciencia son solo correlatos. Stanovich distingue la mente algorítmica (capacidad) de la reflexiva (disposiciones). Hay críticas de sistema único (Kruglanski y Gigerenzer, 2011) y modelos híbridos con intuiciones lógicas (De Neys).",
    v: [
      "Proceso Tipo 1=Proceso autónomo que no requiere memoria de trabajo",
      "Proceso Tipo 2=Requiere memoria de trabajo y permite el desacoplamiento cognitivo",
      "Desacoplamiento cognitivo=Mantener una representación aparte, como hipótesis, para simularla",
      "Correlato=Rasgo que suele acompañar a un tipo de proceso sin definirlo, como la rapidez",
      "Mente algorítmica=Capacidad de procesamiento, en buena parte la que miden los tests de inteligencia",
      "Mente reflexiva=Disposiciones de pensamiento, como la tendencia a dudar de la primera respuesta",
      "Mente autónoma=Nivel de Stanovich que agrupa los procesos Tipo 1",
      "Lógica intuitiva=Propuesta de De Neys de que algunas respuestas lógicas se generan sin deliberar"
    ],
    g: [
      "Sloman (1996) contrapuso un sistema asociativo a un sistema basado en ___.|reglas|creencias|imágenes",
      "Epstein distinguió un sistema ___ de un sistema racional.|experiencial|heurístico|asociativo",
      "Evans y Stanovich hablan de procesos Tipo 1 y Tipo 2 para no sugerir dos sistemas ___ separados.|cerebrales|lógicos|sociales",
      "Melnikoff y Bargh (2018) señalaron que los rasgos atribuidos a cada sistema no se ___ en la práctica.|alinean|replican|observan",
      "Según De Neys (2023), la deliberación se activa cuando la ___ entre intuiciones que compiten es alta.|incertidumbre|semejanza|coherencia"
    ],
    tf: [
      "Para Evans y Stanovich (2013), la rapidez es un rasgo definitorio de los procesos Tipo 1.|F|Es un correlato. Lo definitorio del Tipo 1 es la autonomía y no requerir memoria de trabajo.",
      "Kruglanski y Gigerenzer (2011) defienden que los juicios intuitivos y deliberados se basan en reglas comunes.|V",
      "Los procesos Tipo 2 siempre corrigen los errores de los Tipo 1.|F|Los Tipo 1 resuelven bien la mayoría de las tareas, y los Tipo 2 pueden servir para racionalizar una conclusión previa.",
      "En los estudios de De Neys, incluso quienes responden mal muestran indicios de haber detectado el conflicto con la norma.|V"
    ],
    q: [
      "Una persona con un CI muy alto falla un problema trampa porque no se detiene a revisar su primera respuesta. Según Stanovich, ¿qué nivel ha fallado?|La mente reflexiva|La mente algorítmica|La mente autónoma|Tener mucha capacidad sirve de poco si la mente reflexiva, la de las disposiciones, no decide usarla.",
      "¿Qué crítica plantearon Keren y Schul (2009) a los modelos duales?|Que los dos sistemas están mal definidos|Que todo juicio se basa en reglas comunes|Que existen intuiciones lógicas en conflicto|Cuestionaron que la idea de dos sistemas esté bien definida y pueda ponerse a prueba. El sistema único es de Kruglanski y Gigerenzer.",
      "¿Qué indicio de detección del conflicto describió De Neys (2012) en quienes responden mal?|Menor confianza en versiones con conflicto|Mayor rapidez en versiones con conflicto|Respuestas idénticas con y sin conflicto|Muestran menor confianza que en las versiones sin conflicto, como si hubieran notado el choque con la norma.",
      "¿Qué autores usaron la etiqueta Sistema 1 y Sistema 2 en 2000, antes de que la popularizara Kahneman (2011)?|Stanovich y West|Kruglanski y Gigerenzer|Melnikoff y Bargh|Stanovich y West (2000) hablan de Sistema 1 y Sistema 2. Los otros dos pares son críticos de la arquitectura dual."
    ],
    inc: [
      "Sobre los modelos duales y sus críticas|Melnikoff y Bargh propusieron un sistema único|El Tipo 2 permite el desacoplamiento cognitivo|Hay modelos híbridos con intuiciones lógicas|El sistema único es de Kruglanski y Gigerenzer (2011). Melnikoff y Bargh criticaron que los rasgos de cada sistema no se alinean."
    ],
    seq: [],
    cls: [
      "Tipo de proceso|Tipo 1: autónomo; no requiere memoria de trabajo; rapidez como correlato|Tipo 2: requiere memoria de trabajo; desacoplamiento cognitivo; lentitud como correlato"
    ] },
  { t: "Metarrazonamiento y Test de Reflexión Cognitiva",
    tip: "La metacognición es el conocimiento y control de los propios procesos (Flavell, 1979), con funciones de planificar, supervisar y evaluar. El metarrazonamiento estudia qué activa el procesamiento Tipo 2 (Ackerman y Thompson, 2017). Con el paradigma de las dos respuestas, un sentimiento de acierto alto reduce el tiempo dedicado a repensar y la probabilidad de cambiar. El CRT de Frederick (2005), de 3 ítems, mide sobre todo la tendencia a inhibir una respuesta intuitiva errónea, no la inteligencia sin más.",
    v: [
      "Metacognición=Conocimiento y control de los propios procesos cognitivos (Flavell, 1979)",
      "Metarrazonamiento=Procesos que vigilan el razonamiento y deciden cuánto esfuerzo invertir",
      "Sentimiento de acierto=Seguridad que acompaña a la respuesta inicial y reduce la reconsideración",
      "Dos respuestas=Paradigma con respuesta rápida y valorada, y luego una respuesta final pensada",
      "CRT=Prueba de 3 ítems con una respuesta intuitiva errónea y otra que exige frenarla",
      "Frederick (2005)=Aplicó el CRT a 3.428 participantes en 35 estudios",
      "Ackerman y Thompson (2017)=Autores de referencia sobre el metarrazonamiento",
      "Supervisar=Función metacognitiva que vigila la tarea mientras se realiza"
    ],
    g: [
      "En la muestra global de Frederick, la media del CRT fue de ___ aciertos sobre 3.|1,24|2,18|1,75",
      "En la muestra global, un ___ no acertó ningún ítem del CRT.|33 %|17 %|48 %",
      "Entre los estudiantes del MIT, un ___ acertó los tres ítems.|48 %|17 %|33 %",
      "Cuanto mayor es el sentimiento de acierto inicial, ___ tiempo se dedica a repensar la respuesta.|menos|más|el mismo",
      "Si un bocadillo y un zumo cuestan 3,20 euros y el bocadillo cuesta 3 euros más, el zumo cuesta ___.|10 céntimos|20 céntimos|30 céntimos"
    ],
    tf: [
      "El CRT es, ante todo, una medida de inteligencia general.|F|Mide sobre todo la tendencia a inhibir una respuesta intuitiva errónea, cercana a la mente reflexiva de Stanovich.",
      "La sensación de que algo «está claro» actúa como señal de parada aunque la respuesta sea errónea.|V",
      "Una limitación del CRT es que sus ítems exigen cierta competencia numérica, que se mezcla con la reflexión.|V",
      "En la muestra del MIT, la mayoría de los estudiantes acertó los tres ítems del CRT.|F|Los acertó un 48 %: más de la mitad falló al menos uno, pese a su alta capacidad."
    ],
    q: [
      "En el paradigma de las dos respuestas, Pablo da una primera respuesta errónea y se siente muy seguro de ella. ¿Qué es lo más probable?|Que apenas la repiense y no la cambie|Que dedique más tiempo a repensarla|Que la cambie al pensar sin prisa|Un sentimiento de acierto alto reduce el tiempo de reconsideración y la probabilidad de cambio (Thompson et al., 2011).",
      "¿Qué pregunta, abierta por los modelos duales, aborda el metarrazonamiento?|Qué activa el procesamiento Tipo 2|Qué define a los procesos Tipo 1|Qué regiones sostienen cada sistema|Estudia los procesos que deciden cuánto esfuerzo invertir, cuándo seguir y cuándo parar (Ackerman y Thompson, 2017).",
      "Quien, haciendo tests de práctica, nota que falla siempre las mismas preguntas y vuelve a ese tema ejerce sobre todo la función de…|supervisar|planificar|automatizar|Vigila su rendimiento mientras trabaja y ajusta su estrategia. Planificar es previo a la tarea.",
      "¿Qué dos limitaciones se señalan al CRT?|Ítems muy difundidos y carga numérica|Pocos participantes y ítems verbales|Falta de respuesta intuitiva y de norma|Sus ítems se han difundido mucho y exigen competencia numérica, que se mezcla con la reflexión."
    ],
    inc: [
      "Sobre el Test de Reflexión Cognitiva|La media global fue de 2,18 aciertos|Cada ítem tiene una respuesta intuitiva incorrecta|Lo diseñó Frederick (2005) con 3 ítems|La media global fue de 1,24 sobre 3. La de 2,18 corresponde a los estudiantes del MIT."
    ],
    seq: [
      "Paradigma de las dos respuestas|Dar la primera respuesta que se ocurre>Valorar el sentimiento de acierto>Pensar sin prisa>Dar la respuesta final"
    ],
    cls: [] }
] },
{ n: 7, t: "Pensamiento crítico", cap: 3, pir: "alta", mods: [
  { t: "Falacias formales e informales",
    tip: "El pensamiento crítico es la evaluación razonada de afirmaciones y argumentos antes de aceptarlos: ajustar la confianza a la calidad de las razones. Las falacias formales son errores de estructura, como la afirmación del consecuente y la negación del antecedente, y se detectan sustituyendo los términos por letras. Las informales fallan en el contenido o la pertinencia, como el ad hominem o el hombre de paja. Trampa típica: la afirmación del consecuente es formal, no informal.",
    v: [
      "Pensamiento crítico=Evaluación razonada de afirmaciones y argumentos antes de aceptarlos",
      "Falacia=Argumento defectuoso que parece convincente",
      "Falacia formal=Argumento inválido por su estructura, sea cual sea su contenido",
      "Afirmación del consecuente=De «si p, entonces q» y «q», concluir «p»",
      "Ad hominem=Atacar a la persona en lugar de su argumento",
      "Hombre de paja=Deformar la postura contraria para refutarla con facilidad",
      "Petición de principio=Dar por supuesta en las premisas la conclusión que se quiere probar",
      "Post hoc=Suponer que lo que ocurre después es efecto de lo anterior"
    ],
    g: [
      "«O apruebas todo en junio o has perdido el año» es una falsa ___.|dicotomía|analogía|premisa",
      "«Si dejamos salir a los chicos el viernes, acabarán dejando los estudios» es una pendiente ___.|resbaladiza|engañosa|circular",
      "«Si lo usa tanta gente, por algo será» es una apelación a la ___.|mayoría|autoridad|tradición",
      "Las falacias formales se detectan sustituyendo los términos por ___.|letras|ejemplos|sinónimos",
      "El modus ponens y el modus tollens son inferencias ___.|válidas|informales|falaces"
    ],
    tf: [
      "La afirmación del consecuente es una falacia informal, porque depende del contenido del ejemplo.|F|Es formal: el fallo está en la forma del argumento. Clasificarla como informal es una trampa típica.",
      "Citar el consenso de los especialistas en un tema es una razón legítima, aunque no definitiva.|V",
      "La secuencia temporal no tiene ningún papel en la causalidad, y por eso el post hoc es falaz.|F|La secuencia temporal sí es condición de la causalidad. El error del post hoc es tomarla como prueba suficiente.",
      "Un argumento válido puede tener una conclusión falsa.|V"
    ],
    q: [
      "En un grupo de mensajería alguien escribe: «Los que critican esta dieta comen comida basura». ¿Qué falacia comete?|Ad hominem|Hombre de paja|Falsa dicotomía|Ataca a quienes critican la dieta en lugar de responder a sus argumentos.",
      "«Si alguien tiene gripe, tiene fiebre. Marta tiene fiebre. Luego tiene gripe.» ¿Qué falacia es?|Afirmación del consecuente|Negación del antecedente|Petición de principio|Se afirma q para concluir p. Es una falacia formal: la fiebre puede deberse a otra causa.",
      "«Si llueve, se suspende el partido. No llueve. Luego no se suspende.» ¿Qué comete este argumento?|Una negación del antecedente|Una afirmación del consecuente|Un modus tollens válido|Se niega p para concluir no q, y el partido puede suspenderse por otra razón.",
      "«Quieres limitar el móvil en clase, o sea, quieres volver a la Edad Media.» ¿Qué falacia es?|Hombre de paja|Pendiente resbaladiza|Ad hominem|Deforma la postura contraria para refutarla con facilidad. La pendiente resbaladiza anuncia sin pruebas una cadena de males."
    ],
    inc: [
      "Sobre las falacias|Toda apelación a una autoridad es falaz|La petición de principio da por supuesta la conclusión|Las informales fallan en el contenido o la pertinencia|Citar el consenso de especialistas es legítimo. Lo falaz es apelar a una autoridad ajena al tema o usarla para cerrar el debate."
    ],
    seq: [],
    cls: [
      "Tipo de falacia|Formal: afirmación del consecuente; negación del antecedente|Informal: ad hominem; hombre de paja; falsa dicotomía; post hoc"
    ] },
  { t: "Heurísticos y sesgos de juicio",
    tip: "Tversky y Kahneman (1974) describieron tres heurísticos que producen sesgos sistemáticos: representatividad (parecido con el caso típico), disponibilidad (facilidad con que vienen ejemplos) y anclaje con ajuste insuficiente. En el problema de Linda, el 85 % juzgó más probable la conjunción, aunque nunca puede serlo. En el problema del taxi, la respuesta típica ronda 0,80, pero la normativa es 0,41, porque hay que tener en cuenta la tasa base.",
    v: [
      "Heurístico=Atajo de juicio que suele funcionar pero produce sesgos sistemáticos",
      "Representatividad=Estimar la probabilidad por el parecido con el caso típico de una categoría",
      "Disponibilidad=Juzgar la frecuencia por la facilidad con que vienen ejemplos a la mente",
      "Anclaje y ajuste=Partir de un valor inicial, aunque sea arbitrario, y ajustarlo de forma insuficiente",
      "Falacia de la conjunción=Juzgar más probable una conjunción que uno de sus componentes",
      "Tasa base=Frecuencia previa de cada categoría",
      "Sesgo retrospectivo=Tras conocer un resultado, creer que era más previsible (Fischhoff, 1975)",
      "Exceso de confianza=Seguridad en los propios juicios mayor de lo que justifica su acierto"
    ],
    g: [
      "En el problema de Linda, el ___ de 142 estudiantes juzgó más probable la conjunción.|85 %|41 %|15 %",
      "Juzgar la frecuencia por la facilidad con que vienen ejemplos a la mente es el heurístico de ___.|disponibilidad|representatividad|anclaje",
      "Un precio de salida alto que arrastra hacia arriba la contraoferta ilustra el heurístico de ___.|anclaje y ajuste|disponibilidad|representatividad",
      "En el problema del taxi, la respuesta normativa es aproximadamente ___.|0,41|0,80|0,15",
      "Buscar y valorar más la información que apoya lo que ya se cree es el sesgo de ___.|confirmación|creencia|anclaje"
    ],
    tf: [
      "Una conjunción de dos sucesos puede ser más probable que uno de ellos si la descripción encaja bien.|F|Nunca puede ser más probable: toda cajera feminista es cajera. La semejanza sustituye a la probabilidad.",
      "En el problema del taxi, la respuesta típica toma la fiabilidad del testigo por la probabilidad buscada.|V",
      "Los sesgos sistemáticos son errores con una dirección predecible.|V",
      "Juzgar frecuente algo porque vienen a la mente muchos ejemplos es un caso del heurístico de representatividad.|F|Es disponibilidad, que se basa en la facilidad de recuerdo. La representatividad juzga por el parecido."
    ],
    q: [
      "Tras una semana de noticias sobre incendios en viviendas, Marta cree que son mucho más frecuentes de lo que indican los datos. ¿Qué heurístico usa?|Disponibilidad|Representatividad|Anclaje y ajuste|Juzga la frecuencia por la facilidad con que vienen ejemplos a la mente.",
      "En el problema del taxi (85 % verdes, 15 % azules, testigo fiable al 80 %), ¿cuántos de cada 100 taxis son azules y el testigo los ve azules?|12|17|29|0,15 × 0,8 da 12. Los 17 son verdes confundidos con azules, y 29 es el total visto como azul.",
      "¿Por qué el 85 % eligió «cajera y feminista» en el problema de Linda?|La descripción se parece a una feminista|Recordaban muchas cajeras feministas|Se anclaron en la primera opción leída|La representatividad hace que la semejanza sustituya a la probabilidad.",
      "Un vendedor pide de salida un precio muy alto por un coche y el comprador hace una contraoferta. ¿Qué cabe esperar?|Que la contraoferta quede alta|Que la contraoferta sea muy baja|Que el precio inicial no influya|El anclaje parte de un valor inicial y lo ajusta de forma insuficiente (Jacowitz y Kahneman, 1995)."
    ],
    inc: [
      "Sobre heurísticos y sesgos|Los sesgos son fallos de personas descuidadas|Los heurísticos suelen ahorrar tiempo y acertar|El programa arrancó con Tversky y Kahneman (1974)|Son consecuencias regulares de atajos que casi siempre ahorran tiempo y aciertan razonablemente."
    ],
    seq: [],
    cls: [
      "Heurístico|Representatividad: problema de Linda; descuido de la tasa base|Disponibilidad: reportajes sobre robos; facilidad de recuerdo|Anclaje: precio de salida alto; ajuste insuficiente"
    ] },
  { t: "Qué sesgos han resistido la replicación",
    tip: "Many Labs 1 (Klein et al., 2014) repitió 13 efectos en 36 muestras con 6.344 participantes y replicó 10. El anclaje dio efectos grandes con heterogeneidad, el efecto marco se replicó con d de 0,60 frente a 1,13 y el coste hundido, con efecto pequeño. Ruggeri et al. (2020) replicaron la teoría de la perspectiva en 19 países, con efectos atenuados. La falacia de la conjunción es robusta, pero su interpretación está en debate. Muchos sesgos son relativamente independientes de la inteligencia.",
    v: [
      "Crisis de replicación=Muchos efectos publicados se reducen o desaparecen al repetirse",
      "Coste hundido=Sesgo replicado en Many Labs 1, pero con un efecto pequeño",
      "Heterogeneidad=Diferencias del efecto entre muestras o versiones que un promedio puede ocultar",
      "Ruggeri et al. (2020)=Replicaron la teoría de la perspectiva con 4.098 personas de 19 países",
      "Kühberger (1998)=Metaanálisis que estimó un efecto marco medio en torno a d ≈ 0,31",
      "Lectura pragmática=Entender «probable» como verosímil o coherente con la descripción",
      "Disposiciones de pensamiento=Tendencias que aportan al razonamiento algo propio, más allá de la capacidad",
      "Tamaño del efecto=Magnitud de un resultado, más informativa que su mera significación"
    ],
    g: [
      "En Many Labs 1, el efecto marco de la enfermedad asiática se replicó con un d de ___.|0,60|1,13|0,31",
      "En Many Labs 1, varias versiones del anclaje produjeron efectos con d superior a ___.|1|0,3|0,6",
      "Ruggeri et al. (2020) replicaron el ___ de los ítems de la teoría de la perspectiva.|94 %|85 %|60 %",
      "Si el problema de Linda se formula en frecuencias, el error se ___, pero no desaparece.|reduce|invierte|duplica",
      "Que un efecto medio oculte grandes diferencias entre muestras o versiones se llama ___.|heterogeneidad|replicabilidad|significación"
    ],
    tf: [
      "Ruggeri et al. (2020) replicaron la teoría de la perspectiva con efectos mayores que los originales.|F|Replicaron 12 de los 13 contrastes, pero con efectos atenuados respecto a los originales.",
      "El coste hundido se replicó, pero con un efecto pequeño.|V",
      "Las personas con mucha capacidad cognitiva apenas caen en los sesgos aunque nada en la tarea les avise.|F|Caen casi tanto como el resto: muchos sesgos son relativamente independientes de la capacidad.",
      "Un efecto original enorme obtenido con una muestra pequeña es el que más probablemente se reducirá al repetirse.|V"
    ],
    q: [
      "Un titular presenta un sesgo «revolucionario» hallado con 30 participantes, con un efecto enorme y sin réplicas. Con criterio crítico, ¿qué cabe esperar?|Que se reduzca al repetirse|Que crezca con muestras grandes|Que se mantenga sin cambios|Un efecto original enorme con muestra pequeña es el que más probablemente se reducirá al repetirse.",
      "¿Qué propusieron Hertwig y Gigerenzer (1999) sobre la falacia de la conjunción?|Una lectura pragmática de «probable»|Que el efecto no se replica en frecuencias|Que depende del anclaje inicial|«Probable» tiene en el lenguaje cotidiano significados no matemáticos, como «verosímil». Así, elegir la conjunción no siempre sería un error.",
      "¿Qué efecto dio en Many Labs 1 algunos de los mayores tamaños del proyecto?|El anclaje|El coste hundido|El efecto marco|Varias versiones del anclaje dieron d superior a 1, aunque con heterogeneidad entre muestras y versiones.",
      "¿Qué fenómenos han dado resultados casi nulos en réplicas y metaanálisis?|Agotamiento del ego y sobrecarga general|Anclaje y falacia de la conjunción|Efecto marco y teoría de la perspectiva|El agotamiento del ego y la sobrecarga de elección como fenómeno general no se sostienen. Se tratan en la Unidad 16."
    ],
    inc: [
      "Sobre las réplicas de los sesgos|El efecto marco replicado fue mayor que el original|El anclaje resultó robusto, con heterogeneidad|La teoría de la perspectiva resistió en 19 países|Fue aproximadamente la mitad: d de 0,60 frente a 1,13 en el estudio original."
    ],
    seq: [],
    cls: [
      "Estado tras las réplicas|Replicado: anclaje; efecto marco; falacia de la conjunción; coste hundido; teoría de la perspectiva|Casi nulo: agotamiento del ego; sobrecarga de elección como efecto general"
    ] },
  { t: "Cómo se enseña a pensar críticamente",
    tip: "El metaanálisis de Abrami et al. (2015), con 341 tamaños del efecto, halló una mejora real pero modesta, g+ de 0,30, mayor con diálogo, problemas auténticos y mentoría. Considerar lo contrario reduce la evaluación sesgada de las pruebas más que pedir imparcialidad (Lord, Lepper y Preston, 1984). La transferencia no es automática. Cambiar el formato, como pasar a frecuencias naturales, mejora el razonamiento bayesiano. Y sin la disposición a usarlas, las habilidades no bastan.",
    v: [
      "Abrami et al. (2015)=Metaanálisis de 341 tamaños del efecto sobre la enseñanza del pensamiento crítico",
      "Diálogo=Discutir preguntas y argumentos con otros en lugar de escuchar una exposición",
      "Problemas auténticos=Casos y situaciones reales o realistas, no solo ejercicios abstractos",
      "Mentoría=Acompañamiento individual de un docente o tutor",
      "Considerar lo contrario=Buscar razones por las que la propia conclusión podría ser falsa",
      "Transferencia=Aplicar lo aprendido en un contexto a otros distintos",
      "Frecuencias naturales=Formato «de cada 100 casos…» que mejora el razonamiento bayesiano",
      "Disposición=Tendencia a usar de hecho las habilidades de pensamiento que se tienen"
    ],
    g: [
      "El efecto medio hallado por Abrami et al. (2015) fue g+ de ___.|0,30|0,60|1,13",
      "Lord, Lepper y Preston (___) estudiaron la estrategia de considerar lo contrario.|1984|1974|1995",
      "Preguntarse «¿aceptaría este argumento con otro tema?» contrarresta el sesgo de ___.|creencia|confirmación|anclaje",
      "Gigerenzer y Hoffrage (1995) mostraron que las frecuencias ___ mejoran el razonamiento bayesiano.|naturales|relativas|acumuladas",
      "Preguntarse «¿lo vería igual dicho como pérdida o como ganancia?» contrarresta el ___.|efecto marco|anclaje|sesgo retrospectivo"
    ],
    tf: [
      "Considerar lo contrario reducía la evaluación sesgada más que pedir simplemente que se fuera imparcial.|V",
      "Aprender a detectar falacias en un curso de lógica garantiza detectarlas en una discusión familiar.|F|La transferencia no es automática: lo aprendido tiende a quedarse en su contexto si no se practica en otros.",
      "Según Abrami et al. (2015), las intervenciones expositivas sin diálogo eran las más eficaces.|F|Funcionaban mejor las que incluían diálogo, problemas auténticos y mentoría.",
      "Algunos sesgos se reducen cambiando la presentación del problema, sin cambiar a la persona.|V"
    ],
    q: [
      "Ante el titular «Quienes desayunan sacan mejores notas», ¿qué respuesta refleja mejor el pensamiento crítico?|Preguntar si es correlación o experimento|Concluir que el titular es falso|Aceptarlo si lo publica un medio serio|No se trata de concluir que es falso, sino de no aceptarlo con más confianza de la que justifican los datos.",
      "Un estudiante convencido de su hipótesis quiere evitar el sesgo de confirmación. ¿Qué estrategia está mejor estudiada?|Buscar por qué podría ser falsa|Proponerse ser imparcial al leer|Reunir más datos que la apoyen|El sesgo de confirmación no se corrige con buena voluntad, sino generando la información que no se buscaba.",
      "¿Qué pregunta contrarresta el descuido de la tasa base?|Cuán frecuente es esto en general|Si lo aceptaría con otro tema|Si el resultado se ha replicado|Buscar la tasa base obliga a considerar la frecuencia previa. Las otras preguntas atacan el sesgo de creencia y la credulidad.",
      "¿Por qué no basta con enseñar habilidades de pensamiento crítico?|Falta a veces la disposición a usarlas|Las habilidades se olvidan en días|Solo funcionan en personas muy capaces|Saber qué es el descuido de la tasa base no sirve si uno no se detiene a buscarla."
    ],
    inc: [
      "Sobre la enseñanza del pensamiento crítico|Su efecto medio es grande y uniforme|Mejora más con diálogo y mentoría|Las frecuencias naturales ayudan al razonamiento bayesiano|Abrami et al. (2015) hallaron un efecto real pero modesto, g+ de 0,30, que variaba según los moderadores."
    ],
    seq: [],
    cls: [
      "Estrategia y sesgo que contrarresta|Considerar lo contrario: confirmación; exceso de confianza|Pasar a frecuencias: errores con probabilidades condicionadas|Separar forma y contenido: sesgo de creencia"
    ] }
] },
{ n: 8, t: "Creatividad y otros modos de pensar", cap: 3, pir: "media", mods: [
  { t: "Pensamiento divergente, convergente y lateral",
    tip: "Creativo es lo original y adecuado. Guilford distinguió el pensamiento convergente, que busca la respuesta correcta, del divergente, que genera muchas, y lo puntuó por fluidez, flexibilidad, originalidad y elaboración. Se mide con usos alternativos, los tests de Torrance y el Test de Asociaciones Remotas de Mednick (1962), que exige también convergencia. Divergencia y convergencia son fases complementarias. El pensamiento lateral de De Bono (1967) es divulgativo y poco validado.",
    v: [
      "Creatividad=Producto o idea original y adecuada para el problema",
      "Pensamiento divergente=Generación de muchas respuestas posibles ante un problema abierto",
      "Pensamiento convergente=Búsqueda de la respuesta correcta a un problema bien definido",
      "Fluidez=Número de respuestas producidas",
      "Flexibilidad=Número de categorías distintas a las que pertenecen las respuestas",
      "Originalidad=Rareza de las respuestas en la muestra",
      "Elaboración=Grado de detalle y desarrollo de las respuestas",
      "Asociaciones Remotas=Test de Mednick que pide una palabra relacionada con otras tres"
    ],
    g: [
      "Guilford (___) reclamó atención a una capacidad que los tests de inteligencia apenas medían.|1950|1967|1962",
      "Con «botella», «lluvia» y «mineral», la respuesta del Test de Asociaciones Remotas es «___».|agua|vaso|río",
      "Los tests de ___ incluyen tareas verbales y gráficas, como completar dibujos a partir de unos trazos.|Torrance|Mednick|Guilford",
      "Usar una pinza de la ropa como pinza para la nariz al nadar puntúa sobre todo en ___.|originalidad|fluidez|elaboración",
      "De Bono acuñó el término pensamiento lateral en ___.|1967|1950|1926"
    ],
    tf: [
      "Una respuesta absurda es nueva y, por tanto, creativa.|F|Para ser creativa debe ser original y también adecuada para el problema.",
      "El Test de Asociaciones Remotas exige también un componente convergente, porque tiene una sola respuesta correcta.|V",
      "Divergencia y convergencia son procesos opuestos que se excluyen entre sí.|F|Son fases complementarias: primero se generan ideas y después se criban.",
      "El pensamiento lateral es una propuesta divulgativa poco validada empíricamente.|V"
    ],
    q: [
      "Una persona da quince usos para un ladrillo, pero todos son de construcción. ¿Cómo puntúa?|Alta fluidez y baja flexibilidad|Alta flexibilidad y baja fluidez|Alta originalidad y elaboración|Muchas respuestas indican fluidez. Que sean de una sola categoría indica poca flexibilidad.",
      "Una cafetería se llena de clientes que pasan horas con un solo café. ¿Qué propuesta refleja pensamiento lateral?|Cobrar por tiempo y no por café|Pedir a los clientes que se vayan|Poner un cartel de tiempo máximo|El enfoque lateral cuestiona el supuesto de cobrar por consumición. Buscar cómo echarlos es el enfoque lineal.",
      "¿Qué componente de Guilford mide el número de categorías distintas de las respuestas?|Flexibilidad|Fluidez|Elaboración|Confundir flexibilidad (variedad de categorías) con fluidez (número de respuestas) es la trampa típica.",
      "Una ingeniera genera muchas ideas para una mochila de repartidor y luego las criba según coste, peso y seguridad. ¿Qué secuencia sigue?|Divergente y luego convergente|Convergente y luego divergente|Lateral y luego divergente|Primero genera posibilidades y después las evalúa: son fases complementarias."
    ],
    inc: [
      "Sobre el pensamiento divergente|Sus medidas agotan la creatividad real|La fluidez es el número de respuestas|La elaboración es el grado de detalle|Predicen algo del rendimiento creativo, pero no lo agotan: hacen falta también conocimiento y motivación."
    ],
    seq: [],
    cls: [
      "Tipo de producción|Divergente: usos alternativos; tests de Torrance; título para una historia|Convergente: resolver una ecuación; encontrar el error de un argumento"
    ] },
  { t: "Las etapas de Wallas y la incubación",
    tip: "Wallas (1926) ordenó el proceso creativo en preparación, incubación, iluminación y verificación, a partir de relatos introspectivos retrospectivos, y sus etapas no son lineales. Sio y Ormerod (2009), con 117 estudios, hallaron un efecto de incubación pequeño-moderado, d ponderada de 0,29. Era mayor en tareas divergentes, con preparación más larga y, en problemas lingüísticos, con una tarea de baja demanda en la pausa. Ninguna explicación del mecanismo ha desplazado a las demás.",
    v: [
      "Preparación=Trabajo consciente sobre el problema, que a menudo acaba en un callejón sin salida",
      "Incubación=Etapa en la que se deja el problema y que puede facilitar la solución",
      "Iluminación=Aparición de la idea, a menudo súbita, como un insight",
      "Verificación=Comprobar, desarrollar y ajustar la idea",
      "Sio y Ormerod (2009)=Metaanálisis de 117 estudios sobre el efecto de la pausa",
      "Olvido de la pista falsa=Se debilita una idea errónea que bloqueaba la solución",
      "Procesamiento inconsciente=La mente sigue elaborando el problema sin que la persona lo advierta",
      "Tarea de baja demanda=Actividad ligera en la pausa que favorecía la solución de problemas lingüísticos"
    ],
    g: [
      "Wallas propuso su modelo del proceso creativo en ___.|1926|1910|1953",
      "En Sio y Ormerod (2009), la d sin ponderar del efecto de incubación fue ___.|0,41|0,29|0,26",
      "Las tareas ___ se beneficiaban más de la incubación que los problemas con una única solución.|divergentes|convergentes|numéricas",
      "Una explicación propone que la pausa repone los recursos agotados: es la recuperación del ___.|cansancio|insight|esquema",
      "El papel del ___ en la incubación (Wagner et al., 2004) se estudia junto con el insight.|sueño|ejercicio|ayuno"
    ],
    tf: [
      "En el modelo de Wallas, la iluminación precede a la incubación.|F|El orden es preparación, incubación, iluminación y verificación. Situar la iluminación antes es una trampa típica.",
      "Las etapas de Wallas no son lineales: tras una verificación fallida se vuelve a preparar.|V",
      "La incubación es un efecto enorme que aparece aunque no se haya trabajado antes el problema.|F|Es pequeño-moderado (d ponderada de 0,29) y crece con una preparación más larga antes de la pausa.",
      "En los problemas lingüísticos, ocupar la pausa con una tarea de baja demanda daba mejores resultados que el simple reposo.|V"
    ],
    q: [
      "Una diseñadora pasa la mañana con un logotipo que no funciona en tamaño pequeño, sale a correr y en mitad de la carrera se le ocurre eliminar un elemento. ¿En qué etapa de Wallas surge la idea?|Iluminación|Incubación|Verificación|La idea súbita es la iluminación. Correr es la incubación, y probarla en varios tamaños será la verificación.",
      "Según Sio y Ormerod (2009), ¿cuándo es mayor el efecto de incubación?|Con una preparación previa más larga|Con problemas de una sola solución|Con una pausa muy exigente|La incubación ayuda más cuando ya se ha trabajado el problema. También la favorecen las tareas divergentes.",
      "¿En qué se apoyó Wallas para proponer sus etapas?|En relatos de científicos y artistas|En experimentos con grupos control|En registros de actividad cerebral|Se basó en relatos introspectivos retrospectivos, que pueden embellecer el proceso.",
      "Que una tarea de baja demanda supere al descanso puro es compatible sobre todo con…|algún procesamiento no consciente|la recuperación del cansancio|la llegada de nuevas claves|Si solo contara el descanso, el reposo no rendiría menos. Aun así, ninguna explicación ha desplazado a las demás."
    ],
    inc: [
      "Sobre la incubación|Se debe solo a procesamiento inconsciente|Su efecto medio ponderado es d de 0,29|Las tareas divergentes se benefician más|Se barajan varias explicaciones que no se excluyen, y ninguna ha desplazado a las demás."
    ],
    seq: [
      "Etapas del proceso creativo (Wallas, 1926)|Preparación>Incubación>Iluminación>Verificación"
    ],
    cls: [] },
  { t: "Factores de la creatividad, neurociencia y mitos",
    tip: "La relación entre CI y creatividad es positiva pero moderada, y la hipótesis del umbral, en torno a un CI de 120, está en debate. El rasgo de personalidad más ligado a la creatividad es la apertura a la experiencia, y Amabile destacó la motivación intrínseca. Beaty et al. (2018) asociaron la capacidad creativa a la conectividad entre la red por defecto, la de control ejecutivo y la de saliencia, en ambos hemisferios. La creatividad no es del hemisferio derecho y los grupos nominales superan a la lluvia de ideas en grupo.",
    v: [
      "Hipótesis del umbral=Por encima de un CI de unos 120, el CI dejaría de predecir la creatividad",
      "Apertura a la experiencia=Rasgo de curiosidad, imaginación y tolerancia a la ambigüedad",
      "Motivación intrínseca=Interés por la tarea en sí, que favorece la creatividad según Amabile",
      "Red neuronal por defecto=Red activa al divagar, ligada a la generación espontánea de ideas",
      "Red de control ejecutivo=Red relacionada con la evaluación y el desarrollo de las ideas",
      "Red de saliencia=Red que ayuda a alternar entre generar y evaluar ideas",
      "Grupo nominal=Personas que trabajan solas y suman sus ideas no repetidas",
      "Bloqueo de producción=Pérdida de ideas en grupo porque solo puede hablar uno a la vez"
    ],
    g: [
      "Osborn (___) popularizó la lluvia de ideas en grupo.|1953|1987|1926",
      "Diehl y Stroebe (1987) atribuyeron gran parte de la pérdida de productividad al bloqueo de ___.|producción|evaluación|atención",
      "Beaty et al. (2018) midieron la capacidad creativa con tareas de pensamiento ___.|divergente|convergente|lateral",
      "El «genio loco» se apoya en casos célebres fáciles de recordar, un ejemplo de ___.|disponibilidad|representatividad|anclaje",
      "Un clima que permite ___ facilita las ideas, y el miedo a la evaluación tiende a reducirlas.|equivocarse|competir|destacar"
    ],
    tf: [
      "La hipótesis del umbral de inteligencia para la creatividad es un hecho consensuado.|F|Está en debate: los resultados cambian según cómo se mida la creatividad y qué criterio fije el umbral.",
      "La asociación entre creatividad y psicopatología es débil y depende del dominio creativo.|V",
      "Los grupos de lluvia de ideas interactiva producen más ideas que los grupos nominales del mismo tamaño.|F|Producen menos: los nominales generan más, en parte por el bloqueo de producción (Diehl y Stroebe, 1987).",
      "La red de saliencia ayuda a alternar entre la red por defecto y la de control ejecutivo.|V"
    ],
    q: [
      "Una empresa quiere el máximo de ideas para una campaña y duda entre reunir a ocho personas en una lluvia de ideas o hacerlas trabajar por separado y sumar sus ideas. ¿Qué recomiendan los datos?|Trabajar por separado y sumar|Reunirlas en una sesión conjunta|Alternar ambas por igual|Los grupos nominales producen más ideas que la lluvia de ideas en grupo (Diehl y Stroebe, 1987).",
      "¿Qué rasgo de personalidad se asocia con más regularidad a la creatividad?|La apertura a la experiencia|La estabilidad emocional|La amabilidad con los demás|Implica curiosidad intelectual, gusto por la novedad, imaginación y tolerancia a la ambigüedad.",
      "Según Beaty et al. (2018), ¿de qué depende la capacidad creativa?|De la cooperación entre redes|Del hemisferio derecho|De la red de saliencia sola|Se asocia a la conectividad entre tres redes distribuidas en ambos hemisferios, no a una región o un hemisferio.",
      "Según Amabile, ¿qué favorece más la creatividad?|El interés por la tarea en sí|Una recompensa por el resultado|Una evaluación externa clara|La motivación intrínseca favorece la creatividad más que hacer la tarea por una recompensa o una evaluación."
    ],
    inc: [
      "Sobre factores y mitos de la creatividad|La creatividad está en el hemisferio derecho|La relación entre CI y creatividad es moderada|Nadie es creativo en un campo que no conoce|Depende de redes bilaterales que cooperan (Beaty et al., 2018), no de un hemisferio dominante."
    ],
    seq: [],
    cls: [
      "Red cerebral|Red por defecto: generación de ideas; divagación mental|Control ejecutivo: evaluación de ideas; desarrollo de ideas|Saliencia: alternar entre las otras dos redes"
    ] },
  { t: "Pensamiento analógico, práctico, sistémico y moral",
    tip: "En la analogía se traslada estructura de una fuente a un objetivo. La teoría de la correspondencia estructural de Gentner (1983) empareja relaciones, no rasgos, y prefiere sistemas coherentes. En Gick y Holyoak (1980), con la historia de la fortaleza y una pista, el 92 % resolvió el problema de la radiación, y sin pista, el 20 %: el cuello de botella es la recuperación espontánea. El pensamiento práctico se apoya en el conocimiento tácito, el sistémico busca bucles, y el enfoque racionalista de Kohlberg sobre lo moral lo han matizado Greene y Haidt.",
    v: [
      "Fuente=Dominio conocido que se usa para entender otro",
      "Objetivo=Dominio que se quiere entender o resolver mediante la analogía",
      "Correspondencia estructural=Teoría de Gentner (1983) que empareja relaciones y no rasgos sueltos",
      "Sistematicidad=Preferencia por emparejamientos que forman un conjunto coherente de relaciones",
      "Conocimiento tácito=Saberes no enseñados explícitamente que se adquieren con la experiencia",
      "Retroalimentación=El efecto de una acción vuelve sobre su causa",
      "Intuicionismo moral=La intuición precede y el razonamiento la justifica después (Haidt, 2001)",
      "Juicio deontológico=Juicio moral basado en normas, más frecuente en dilemas personales"
    ],
    g: [
      "Con la historia de la fortaleza y una pista para usarla, el ___ resolvió el problema de la radiación.|92 %|20 %|50 %",
      "El problema de la radiación usado por Gick y Holyoak procede de ___.|Duncker|Gentner|Sternberg",
      "Kohlberg describió tres niveles de razonamiento moral con un total de ___ estadios.|seis|tres|nueve",
      "Greene et al. (2001) hallaron que los dilemas ___ activan más regiones asociadas a la emoción.|personales|impersonales|abstractos",
      "Ampliar una avenida que acaba atrayendo más coches ilustra un bucle de ___.|retroalimentación|sistematicidad|correspondencia"
    ],
    tf: [
      "En una buena analogía, lo importante es que fuente y objetivo se parezcan en la superficie.|F|Lo importante es que compartan estructura: se emparejan relaciones, no rasgos superficiales (Gentner, 1983).",
      "En Gick y Holyoak (1980), la mayoría aplicaba de forma espontánea la historia leída, sin necesidad de pista.|F|Sin pista solo lo resolvía el 20 %: tendemos a recuperar casos por su parecido superficial, no por su estructura.",
      "Para Haidt (2001), en el juicio moral la intuición precede y el razonamiento llega después.|V",
      "El enfoque de Kohlberg es racionalista: el juicio moral es razonamiento.|V"
    ],
    q: [
      "Un médico debe destruir un tumor sin dañar el tejido sano y recuerda la historia de un general que divide su ejército. ¿Qué solución traslada?|Varios rayos débiles que converjan|Un único rayo intenso y breve|Operar antes de irradiar el tumor|Se traslada la relación de dividir la fuerza y hacerla converger, no rasgos superficiales del ejército.",
      "¿Cuál es el principal cuello de botella de la analogía según Gick y Holyoak (1980)?|La recuperación espontánea de la fuente|La aplicación de la solución ya hallada|La comprensión de la historia análoga|La mayoría leía la historia con la solución, pero pocos la aplicaban si nadie les indicaba que servía.",
      "Organizar una semana con tres turnos de trabajo o negociar con un casero son ejemplos de pensamiento…|práctico|sistémico|analógico|Se aplica a problemas cotidianos, mal definidos y ligados al contexto, y se apoya en el conocimiento tácito.",
      "¿Qué hallaron Greene et al. (2001) al comparar empujar a alguien para salvar a cinco con accionar una palanca?|Más emoción y juicios basados en normas|Menos emoción que con la palanca|La misma activación en ambos dilemas|Los dilemas personales activan más regiones emocionales y suelen dar juicios deontológicos."
    ],
    inc: [
      "Sobre otros modos de pensar|Kohlberg propuso seis niveles con dos estadios cada uno|El pensamiento sistémico busca bucles y efectos diferidos|La analogía empareja relaciones entre elementos|Kohlberg propuso tres niveles, cada uno con dos estadios: seis estadios en total."
    ],
    seq: [
      "Niveles del razonamiento moral (Kohlberg)|Preconvencional>Convencional>Posconvencional"
    ],
    cls: [
      "Modo de pensar|Analógico: Gentner (1983); Gick y Holyoak (1980)|Práctico: conocimiento tácito; teoría triárquica de Sternberg|Moral: Kohlberg; Greene et al. (2001); Haidt (2001)"
    ] }
] }
);

// SAIMAP Psicología · Pensamiento · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Razonamiento deductivo I: relaciones y silogismos", cap: 4, pir: "media", mods: [
  { t: "Deducción, inducción y abducción",
    tip: "Razonar es obtener una conclusión a partir de unas premisas. La deducción preserva la verdad sin añadir información, la inducción va más allá de las premisas y solo da conclusiones probables, y la abducción infiere la mejor explicación de un hecho. La validez es una propiedad de la forma y no equivale a la verdad de la conclusión. La lógica es normativa, y la psicología del razonamiento, descriptiva.",
    v: [
      "Premisas=Información de partida de la que se obtiene una conclusión",
      "Deducción=Inferencia de conclusión necesaria si las premisas son verdaderas y la forma válida",
      "Inducción=Inferencia que va más allá de los casos y solo da una conclusión probable",
      "Abducción=Inferencia de la mejor explicación posible de un hecho observado",
      "Validez=Propiedad de la forma: es imposible tener premisas verdaderas y conclusión falsa",
      "Verdad=Propiedad de cada enunciado por separado, no de la forma del argumento",
      "Lógica=Disciplina normativa que dice qué conclusiones se siguen de unas premisas",
      "Psicología del razonamiento=Disciplina descriptiva que estudia qué conclusiones sacan de hecho las personas"
    ],
    g: [
      "La deducción preserva la verdad, pero no añade ___ nueva.|información|evidencia|premisa",
      "El diagnóstico típico, elegir la causa más plausible y comprobarla, es una forma de ___.|abducción|deducción|inducción",
      "Piaget situó el pensamiento hipotético-deductivo en el estadio de las operaciones ___.|formales|concretas|abstractas",
      "Las desviaciones respecto a la norma se tratan como ___ que revelan cómo funciona el proceso.|datos|ruido|despistes",
      "La investigación sobre deducción se ha centrado en el razonamiento transitivo, el silogístico y el ___.|proposicional|probabilístico|analógico"
    ],
    tf: [
      "Un argumento cuya conclusión es falsa puede ser válido.|V",
      "Si la conclusión de un argumento es verdadera, el argumento es válido.|F|La validez depende de la forma. Un argumento inválido puede tener una conclusión verdadera en el mundo real.",
      "Una conclusión inductiva puede ser falsa aunque todas sus premisas sean verdaderas.|V",
      "La lógica es una disciplina descriptiva que estudia qué conclusiones sacan de hecho las personas.|F|La lógica es normativa. Lo descriptivo corresponde a la psicología del razonamiento."
    ],
    q: [
      "«El móvil no carga, así que lo más probable es que el cable esté roto.» ¿Qué tipo de inferencia es?|Abducción|Deducción|Inducción|Se infiere la explicación más plausible de un hecho observado, no una conclusión necesaria ni una generalización.",
      "«Todos los peces vuelan, las sardinas son peces, luego las sardinas vuelan.» ¿Cómo se califica este argumento?|Válido con conclusión falsa|Inválido por su conclusión falsa|Inválido por una premisa falsa|La forma es impecable. La conclusión es falsa porque falla una premisa, y eso no afecta a la validez.",
      "«Algunos médicos son mujeres, algunas mujeres son madres, luego algunos médicos son madres.» ¿Qué ilustra?|Inválido con conclusión verdadera|Válido con conclusión verdadera|Válido con una premisa falsa|La conclusión es cierta en el mundo real, pero no se sigue de las premisas.",
      "¿Por qué los problemas deductivos ponen a prueba la memoria de trabajo?|Hay que combinar varias premisas|Hay que conocer la lógica formal|Las premisas suelen ser abstractas|En el razonamiento transitivo, el silogístico y el proposicional hay que mantener y combinar varias premisas a la vez."
    ],
    inc: [
      "Sobre los tipos de inferencia|La inducción preserva la verdad de las premisas|La deducción no añade información nueva|La abducción elige la explicación más plausible|Es la deducción la que preserva la verdad. La inducción va más allá de las premisas y su conclusión solo es probable."
    ],
    seq: [],
    cls: [
      "Tipo de inferencia|Deducción: conclusión necesaria; de lo general a lo particular; la biblioteca cierra los lunes|Inducción: conclusión probable; de casos a una generalización; el autobús 27 llega tarde|Abducción: mejor explicación; diagnóstico; el cable del móvil está roto"
    ] },
  { t: "Razonamiento transitivo o lineal",
    tip: "El razonamiento transitivo deduce la relación entre dos elementos que no se han comparado a partir de su relación con un término medio, y solo funciona con relaciones transitivas. La dificultad depende de cómo se formulan las premisas. El modelo espacial (De Soto, London y Handel, 1965), el de imagen (Huttenlocher, 1968) y el lingüístico (Clark, 1969) lo explican de forma distinta. El debate no tuvo ganador y muchos autores aceptan que intervienen ambos tipos de representación.",
    v: [
      "Razonamiento transitivo=Deducir la relación entre dos elementos a partir de su relación con un tercero",
      "Término medio=Elemento compartido por las premisas que permite relacionar los otros dos",
      "Series de tres términos=Problemas como «A es más caro que B y B es más caro que C»",
      "Relación transitiva=La que se traslada a través de un tercer elemento, como «anterior a»",
      "Marcado léxico=Los adjetivos no marcados, como «bueno», se procesan mejor que los marcados",
      "Principio de congruencia=Se responde antes si la pregunta usa los términos con que se almacenó",
      "Distancia simbólica=Comparar elementos alejados en una serie es más rápido que comparar contiguos",
      "Modelo espacial=Las premisas se representan como una fila ordenada, como en una escala"
    ],
    g: [
      "Que Ana sea amiga de Berta y Berta de Carmen no permite concluir nada, porque la amistad no es una relación ___.|transitiva|simétrica|recíproca",
      "Según Huttenlocher, es más fácil integrar una premisa cuando el término que hay que situar es el ___ de la frase.|sujeto|objeto|predicado",
      "Según el modelo espacial, resulta más fácil que cada premisa empiece por un ___ de la serie.|extremo|punto medio|término medio",
      "Para Clark, se retiene antes la relación sujeto-predicado que la información ___.|comparativa|espacial|semántica",
      "«Bajo» es un adjetivo ___, y por eso se procesa con más dificultad que «alto».|marcado|neutro|congruente"
    ],
    tf: [
      "El efecto de distancia simbólica es fácil de explicar si solo se guardan las premisas tal como se leyeron.|F|Así es difícil de explicar. Se explica bien si se ha construido una representación ordenada en la que se leen las distancias.",
      "«A es mejor que B, B es mejor que C» resulta más fácil que «B es peor que A, B es mejor que C», aunque digan lo mismo.|V",
      "Clark (1969) defendió que las premisas se guardan como una ordenación espacial de los elementos.|F|Eso propusieron De Soto, London y Handel (1965). Clark defendió una representación proposicional con información lingüística.",
      "El debate entre el enfoque espacial y el lingüístico del razonamiento transitivo no tuvo un ganador.|V"
    ],
    q: [
      "Se aprende que Lucía llegó antes que Marcos, Marcos antes que Nerea y Nerea antes que Óscar. ¿Qué juicio se confirmará más deprisa?|Lucía antes que Óscar|Marcos antes que Nerea|Nerea antes que Óscar|Es el efecto de distancia simbólica: los elementos alejados se comparan antes, aunque esa relación no se diera de forma explícita.",
      "Tras leer «A es mejor que B», ¿qué pregunta se responde antes según Clark?|«¿Cuál es mejor?»|«¿Cuál es peor?»|«¿Cuál es menos malo?»|Es el principio de congruencia: se responde antes si la pregunta usa los mismos términos con que se almacenó la información.",
      "En piedra, papel o tijera, la piedra gana a la tijera y la tijera al papel. ¿Por qué no se sigue que la piedra gane al papel?|Porque «ganar a» no es transitiva|Porque la tijera no es término medio|Porque la premisa usa un adjetivo marcado|La inferencia transitiva solo funciona con relaciones transitivas. En este juego, el papel gana a la piedra.",
      "Según muchos autores, ¿cómo intervienen los dos enfoques?|Lenguaje al comprender y orden al integrar|Orden al comprender y lenguaje al integrar|Solo una representación proposicional|Información lingüística al comprender las premisas y representación ordenada al integrarlas, idea que recogen los modelos mentales."
    ],
    inc: [
      "Sobre los modelos del razonamiento transitivo|Huttenlocher (1968) propuso el modelo lingüístico|De Soto, London y Handel propusieron el espacial|Clark formuló los principios de marcado y congruencia|Huttenlocher propuso el modelo de imagen, como colocar objetos en fila. El lingüístico es de Clark (1969)."
    ],
    seq: [],
    cls: [
      "Modelo del razonamiento transitivo|Espacial: De Soto, London y Handel; fila ordenada; empezar por un extremo|De imagen: Huttenlocher; colocar objetos en fila; término como sujeto|Lingüístico: Clark; marcado léxico; congruencia"
    ] },
  { t: "El silogismo categórico",
    tip: "El silogismo categórico tiene dos premisas y una conclusión con tres términos: sujeto, predicado y un término medio que desaparece de la conclusión. Cada premisa adopta un modo (A, E, I, O), y la figura es la posición del término medio, lo que da 64 pares de premisas. Con diagramas de Euler, basta una disposición en que la conclusión falle para que sea inválido. Los errores típicos son el efecto atmósfera, la conversión ilícita, el término medio no distribuido y el efecto de figura.",
    v: [
      "Modo A=Universal afirmativo: «Todos los X son Y»",
      "Modo E=Universal negativo: «Ningún X es Y»",
      "Modo I=Particular afirmativo: «Algunos X son Y»",
      "Modo O=Particular negativo: «Algunos X no son Y»",
      "Figura=Posición que ocupa el término medio en las premisas",
      "Efecto atmósfera=Los cuantificadores de las premisas se trasladan a la conclusión",
      "Conversión ilícita=Interpretar las premisas como reversibles (Chapman y Chapman, 1959)",
      "Diagramas de Euler=Un círculo por categoría y todas las disposiciones compatibles con las premisas"
    ],
    g: [
      "Combinar cuatro modos en cada premisa con cuatro figuras da ___ pares de premisas.|64|16|256",
      "El efecto atmósfera lo describieron Woodworth y Sells en ___.|1935|1959|1965",
      "Las conversiones de los modos E e I son lógicamente ___.|correctas|incorrectas|ambiguas",
      "Si alguna premisa es negativa, el efecto atmósfera lleva a aceptar una conclusión ___.|negativa|particular|universal",
      "El efecto atmósfera es una explicación ___: atiende a los cuantificadores, no al contenido.|sintáctica|semántica|pragmática"
    ],
    tf: [
      "Pasar de «Todos los A son B» a «Todos los B son A» es una conversión lógicamente correcta.|F|Las conversiones de los modos A y O no son correctas. Solo lo son las de los modos E e I.",
      "Con premisas del tipo A–B y B–C se prefieren conclusiones A–C, aunque la dirección C–A sea igual de legítima.|V",
      "El efecto atmósfera predice bien que la gente responda a menudo «no se sigue ninguna conclusión».|F|No lo prevé: la atmósfera empuja siempre hacia una conclusión con los cuantificadores de las premisas.",
      "Para que un silogismo sea inválido basta un diagrama de Euler compatible con las premisas en el que la conclusión no se cumpla.|V"
    ],
    q: [
      "«Todos los cirujanos son médicos, algunos médicos son madrugadores, luego algunos cirujanos son madrugadores.» Un alumno la acepta. ¿Qué falla en el argumento?|No distribuye el término medio|Una premisa universal es negativa|La conclusión debería ser universal|Ninguna premisa habla de todos los médicos, así que los médicos madrugadores podrían ser todos de familia.",
      "Una estudiante lee «Todos los psicólogos son lectores» y razona como si todos los lectores fueran psicólogos. ¿Qué muestra?|Conversión ilícita|Efecto atmósfera|Efecto de figura|Interpretar como reversible una premisa del modo A es la conversión ilícita descrita por Chapman y Chapman (1959).",
      "¿Qué define la figura de un silogismo?|La posición del término medio|La cantidad de cada premisa|La cualidad de la conclusión|La figura es la posición del término medio en las premisas. La cantidad y la cualidad definen el modo.",
      "¿Qué modo corresponde a «Algunos socios no pagan cuota»?|O|I|E|Es particular negativo, el modo O. El I es particular afirmativo, y el E, universal negativo."
    ],
    inc: [
      "Sobre el silogismo categórico|El término medio está en la conclusión|Intervienen tres términos en total|Tiene dos premisas y una conclusión|El término medio aparece en ambas premisas y desaparece de la conclusión."
    ],
    seq: [
      "Comprobar la validez con diagramas de Euler|Representar cada categoría como un círculo>Dibujar todas las disposiciones compatibles>Comprobar si la conclusión se cumple en todas"
    ],
    cls: [
      "Conversión de una premisa|Lícita: modo E; modo I|Ilícita: modo A; modo O"
    ] },
  { t: "Sesgo de creencia y teorías del silogismo",
    tip: "Con contenidos reales se tiende a aceptar las conclusiones creíbles y a rechazar las increíbles con independencia de su validez. Evans, Barston y Pollard (1983) hallaron un efecto de la lógica, un efecto de la creencia y una interacción: la creencia pesa mucho más en los silogismos inválidos. El sesgo de creencia depende del contenido, y el efecto atmósfera, de la forma. Las teorías del silogismo son de superficie, de interpretación y de modelos mentales, y ninguna explica todos los datos (Khemlani y Johnson-Laird, 2012).",
    v: [
      "Sesgo de creencia=Aceptar conclusiones creíbles y rechazar increíbles con independencia de su validez",
      "Evans, Barston y Pollard=Cruzaron validez y credibilidad en un diseño 2 × 2 en 1983",
      "Efecto de la lógica=Se aceptan más las conclusiones válidas que las inválidas",
      "Interacción lógica-creencia=La credibilidad pesa mucho más en los silogismos inválidos",
      "Creencias como filtro=Lo creíble se acepta sin examen y ante lo increíble se busca un contraejemplo",
      "Heurísticas de superficie=Teorías que explican la respuesta por rasgos superficiales de las premisas",
      "Teorías de interpretación=Sitúan el error en cómo se entienden las premisas, no en la deducción",
      "Khemlani y Johnson-Laird=Revisaron en 2012 doce teorías del silogismo y ninguna lo explicaba todo"
    ],
    g: [
      "En Evans, Barston y Pollard, las conclusiones inválidas pero creíbles se aceptaron en torno al ___.|71 %|10 %|89 %",
      "Las conclusiones válidas pero increíbles se aceptaron en torno al ___.|56 %|71 %|10 %",
      "El sesgo de creencia depende del ___ de la conclusión, y el efecto atmósfera, de su forma.|contenido|cuantificador|modo",
      "Según los modelos mentales, la dificultad de un silogismo depende del número de ___ que hay que construir.|modelos|pasos|premisas",
      "Khemlani y Johnson-Laird contrastaron ___ de las doce teorías con los datos de seis estudios.|siete|cinco|nueve"
    ],
    tf: [
      "El sesgo de creencia es igual de intenso en los argumentos válidos que en los inválidos.|F|Es mucho mayor en los inválidos: en el tercer experimento, se aceptó el 67 % de las inválidas creíbles y el 6 % de las increíbles.",
      "Los datos de Evans, Barston y Pollard muestran que las personas también son sensibles a la lógica.|V",
      "Desde los modelos duales, resistir una respuesta rápida basada en la credibilidad exige inhibición.|V",
      "La revisión de Khemlani y Johnson-Laird concluyó que la teoría de los modelos mentales explica todos los resultados.|F|Concluyó que ninguna de las teorías contrastadas explica todos los resultados. El silogismo sigue siendo un problema abierto."
    ],
    q: [
      "A partir de dos premisas universales afirmativas, un participante acepta la conclusión inválida «Algunos coches caros no son seguros» porque le parece obvia. ¿Qué lo explica?|El sesgo de creencia|El efecto atmósfera|La conversión ilícita|Con premisas universales afirmativas, la atmósfera no lleva a una conclusión particular negativa. Lo que pesa es la credibilidad del contenido.",
      "¿Qué patrón muestra la interacción de Evans, Barston y Pollard?|La credibilidad pesa más en los inválidos|La credibilidad pesa más en los válidos|La credibilidad pesa igual en ambos|Las conclusiones inválidas creíbles se aceptan mucho más que las inválidas increíbles. En los válidos la diferencia es menor.",
      "Según los modelos mentales, ¿por qué se acepta a menudo un silogismo inválido de varios modelos?|Se para en el primer modelo construido|Se invierte la premisa universal|Se sigue la atmósfera de las premisas|Los errores aparecen cuando se detiene la búsqueda en el primer modelo y no se buscan contraejemplos.",
      "¿A qué tipo de teoría pertenece la conversión ilícita de Chapman y Chapman?|De interpretación|De superficie|De modelos mentales|Sitúa el error en cómo se entienden las premisas, no en la deducción misma."
    ],
    inc: [
      "Sobre el sesgo de creencia|Se basa en la forma de los cuantificadores|Depende de la credibilidad del contenido|Es mayor en los argumentos inválidos|Lo que se basa en los cuantificadores es el efecto atmósfera. El sesgo de creencia depende del contenido de la conclusión."
    ],
    seq: [],
    cls: [
      "Tipo de teoría del silogismo|Heurísticas de superficie: efecto atmósfera; Woodworth y Sells|De interpretación: conversión ilícita; Chapman y Chapman|De modelos mentales: búsqueda de contraejemplos; Johnson-Laird"
    ] }
] },
{ n: 10, t: "Razonamiento deductivo II: el condicional", cap: 4, pir: "alta", mods: [
  { t: "Las cuatro inferencias condicionales",
    tip: "En «si p, entonces q», p es el antecedente y q el consecuente, y el condicional solo es falso si se da p y no se da q. El modus ponens y el modus tollens son válidos, y la afirmación del consecuente y la negación del antecedente son falacias formales. Las personas aceptan casi siempre el MP, mucho menos el MT y con frecuencia las dos falacias (Oberauer, 2006). La interpretación bicondicional y el contenido explican parte de este patrón.",
    v: [
      "Antecedente=La parte p de «si p, entonces q»",
      "Consecuente=La parte q de «si p, entonces q»",
      "Modus ponens=De «si p, entonces q» y p se concluye q",
      "Modus tollens=De «si p, entonces q» y no-q se concluye no-p",
      "Afirmación del consecuente=Falacia: de «si p, entonces q» y q se concluye p",
      "Negación del antecedente=Falacia: de «si p, entonces q» y no-p se concluye no-q",
      "Interpretación bicondicional=Entender el condicional como «si y solo si»",
      "Silogismo disyuntivo=«O voy en metro o en bici, no voy en metro, luego voy en bici»"
    ],
    g: [
      "Con condicionales abstractos, el modus ponens se acepta en torno al ___.|97 %|57 %|44 %",
      "El modus tollens se acepta en torno al ___ de los casos.|57 %|97 %|38 %",
      "La afirmación del consecuente y la negación del antecedente son falacias ___.|formales|informales|pragmáticas",
      "«Si pagas la cuota, puedes usar el gimnasio» se incumple si alguien que ha ___ no puede entrar.|pagado|entrado|dejado de pagar",
      "Encadenar «si p, entonces q» y «si q, entonces r» para concluir «si p, entonces r» es el silogismo ___.|hipotético|disyuntivo|categórico"
    ],
    tf: [
      "La afirmación del consecuente se acepta menos cuando es fácil pensar en otras causas del consecuente.|V",
      "El modus tollens, por ser válido, se acepta casi tanto como el modus ponens.|F|Hay una gran asimetría: el modus ponens ronda el 97 %, y el modus tollens, igual de válido, el 57 %.",
      "Respecto a una lectura bicondicional, aceptar la afirmación del consecuente deja de ser un error.|V",
      "En lógica, «si es festivo, el museo abre gratis» se incumple si abre gratis un día que no es festivo.|F|El condicional solo es falso si se da p y no q, es decir, si un día festivo el museo no abre gratis."
    ],
    q: [
      "«Si es festivo, el museo abre gratis. Hoy no es festivo. Luego no abre gratis.» ¿Qué inferencia es?|Negación del antecedente|Afirmación del consecuente|Modus tollens|De no-p se concluye no-q. Es una falacia formal, porque el museo podría abrir gratis por una jornada de puertas abiertas.",
      "«Si es festivo, el museo abre gratis. Hoy no abre gratis.» ¿Qué se concluye válidamente?|Que hoy no es festivo|Que hoy es festivo|No se sigue nada|Es un modus tollens: de no-q se concluye no-p. Responder que no se sigue nada es un error frecuente.",
      "¿Qué orden de aceptación de las inferencias condicionales es el habitual?|MP, MT, AC y DA|MP, AC, MT y DA|MT, MP, DA y AC|El MP se acepta casi siempre, el MT bastante menos y las falacias en proporción considerable, la DA igual o algo menos que la AC.",
      "Un padre dice «si recoges tu cuarto, podrás salir», y el hijo entiende que, si no lo recoge, no saldrá. ¿Cómo se explica?|Por una lectura bicondicional|Por aplicar el modus tollens|Por el principio de congruencia|En el lenguaje cotidiano muchos condicionales se entienden como «si y solo si», y respecto a esa lectura la DA no es un error."
    ],
    inc: [
      "Sobre la aceptación de las inferencias condicionales|La DA se acepta más que el modus tollens|El modus ponens se acepta casi siempre|Las dos falacias se aceptan a menudo|El orden habitual es MP, MT, AC y DA: la DA ronda el 38 % y el modus tollens, el 57 %."
    ],
    seq: [],
    cls: [
      "Inferencia condicional|Válida: modus ponens; modus tollens|Falacia formal: afirmación del consecuente; negación del antecedente"
    ] },
  { t: "La tarea de selección de Wason",
    tip: "En la tarea de selección se ven las cartas E, K, 4 y 7 y la regla «si hay una vocal por un lado, hay un número par por el otro». Lo correcto es girar E y 7 (p y no-q), pero con material abstracto acierta menos del 10 % y la elección más frecuente es E y 4. Se busca confirmación en vez de falsación y se olvida la carta que exige un modus tollens. Con la regla deóntica de la edad para beber (Griggs y Cox, 1982) casi todos aciertan, aunque la estructura lógica es la misma.",
    v: [
      "Tarea de selección=Elegir qué cartas girar para saber si un condicional es falso (Wason, 1966)",
      "Carta p=La E, que hay que girar porque podría esconder un impar",
      "Carta no-q=El 7, que hay que girar porque podría esconder una vocal",
      "Carta q=El 4, que nunca puede contradecir la regla",
      "Elección modal=E y 4, la respuesta más frecuente en la versión abstracta",
      "Regla indicativa=Condicional que describe cómo es el mundo",
      "Regla deóntica=Condicional que expresa una obligación o un permiso",
      "Falsación=Buscar los casos que podrían refutar una hipótesis"
    ],
    g: [
      "Con material abstracto, aciertan la tarea de selección menos del ___ de los participantes.|10 %|30 %|50 %",
      "Elegir la carta 4 es buscar confirmación en lugar de ___.|falsación|inducción|deducción",
      "Elegir la carta 7 equivale a aplicar el ___.|modus tollens|modus ponens|bicondicional",
      "La versión de la edad para beber la estudiaron Griggs y Cox en ___.|1982|1971|1966",
      "En la versión de la edad, hay que comprobar la carta «cerveza» y la carta «___».|16 años|22 años|refresco"
    ],
    tf: [
      "La versión de la edad para beber tiene una estructura lógica distinta de la versión abstracta.|F|La estructura es la misma, p y no-q. Cambia el tipo de regla: deóntica en lugar de indicativa.",
      "En la versión abstracta también es habitual elegir solo la carta E.|V",
      "La carta K debe girarse porque podría esconder un número par.|F|La regla no dice nada de las consonantes, así que la K no puede refutarla.",
      "La versión deóntica pide buscar a quien incumple la regla, y la indicativa, comprobar si una descripción es verdadera.|V"
    ],
    q: [
      "Una inspectora comprueba la norma «si un plato lleva gluten, la carta lo marca con una G». ¿Qué platos debe revisar?|Los que llevan gluten y los que no tienen G|Los que llevan gluten y los que tienen G|Solo los platos que tienen la G|Son p y no-q: los platos con gluten y los que no llevan la G, los únicos que pueden esconder una infracción.",
      "En una réplica con las cartas A, D, 2 y 5 y la regla «si hay una vocal, hay un número par», ¿qué cartas hay que girar?|A y 5|A y 2|D y 5|Son p y no-q, las únicas que pueden esconder una vocal con un impar. A y 2 repite la elección modal.",
      "¿Qué diferencia psicológicamente la versión de la edad de la versión abstracta?|El tipo de regla|La forma lógica|El número de cartas|La versión de la edad es deóntica y pide buscar a quien incumple. La abstracta es indicativa.",
      "¿Qué dos tendencias muestran los errores en la versión abstracta?|Elegir el 4 y olvidar el 7|Elegir la K y olvidar la E|Elegir el 7 y olvidar el 4|Se busca confirmación con la carta 4 y se omite la 7, que exige aplicar el modus tollens."
    ],
    inc: [
      "Sobre la tarea de selección|Lo correcto es girar E y 4|La regla de la edad es deóntica|La carta 4 no puede refutar la regla|E y 4 es la elección modal. La correcta, E y 7, la elige menos del 10 % con material abstracto."
    ],
    seq: [],
    cls: [
      "Carta de la tarea de selección|Hay que girarla: E; 7; cerveza; 16 años|No hace falta girarla: K; 4; refresco; 22 años"
    ] },
  { t: "Teorías del efecto del contenido",
    tip: "El contenido eleva mucho los aciertos en la tarea de selección: 62,5 % en la versión de viajes de Wason y Shapiro (1971), 81 % con la regla postal de Johnson-Laird, Legrenzi y Legrenzi (1972) y en torno al 74 % con la edad para beber. Se han propuesto la familiaridad, los esquemas de razonamiento pragmático (Cheng y Holyoak, 1985), el contrato social (Cosmides, 1989) y la selección óptima de datos (Oaksford y Chater, 1994). Los tres últimos enfoques siguen en debate.",
    v: [
      "Hipótesis de la familiaridad=El contenido conocido permite recordar infracciones en lugar de razonar",
      "Esquemas pragmáticos=Conocimiento aprendido para permisos y obligaciones (Cheng y Holyoak)",
      "Esquema de permiso=«Para hacer la acción, hay que cumplir la condición»",
      "Contrato social=Mecanismo especializado para detectar tramposos (Cosmides, 1989)",
      "Tramposo=Quien obtiene un beneficio sin pagar el coste exigido",
      "Selección óptima de datos=La tarea como búsqueda probabilística de información (Oaksford y Chater)",
      "Versión de Wason y Shapiro=Regla temática sobre viajes entre ciudades y medios de transporte",
      "Regla postal=Versión sobre el franqueo de los sobres cerrados, con un 81 % de aciertos"
    ],
    g: [
      "La versión temática de Wason y Shapiro (1971) obtuvo un ___ de aciertos.|62,5 %|81 %|74 %",
      "La teoría del contrato social procede de la psicología ___.|evolucionista|conductista|del desarrollo",
      "Según Oaksford y Chater, si las vocales y los pares son poco ___, girar la carta q puede aportar información.|frecuentes|creíbles|conocidos",
      "Los esquemas de Cheng y Holyoak no son lógica formal ni recuerdo concreto, sino un conocimiento ___ aprendido.|intermedio|innato|modular",
      "A la teoría del contrato social se le critica suponer un ___ innato difícil de poner a prueba.|módulo|esquema|sesgo"
    ],
    tf: [
      "La hipótesis de la familiaridad explica por qué las reglas deónticas ayudan en situaciones poco familiares.|F|Ese es justo su límite: las reglas deónticas también ayudan en situaciones poco familiares.",
      "Para Oaksford y Chater, elegir E y 4 puede ser una estrategia razonable y no un error irracional.|V",
      "Hay acuerdo en que la tarea de Wason no mide una lógica abstracta que se aplique igual a cualquier contenido.|V",
      "La selección óptima de datos explica sobre todo la mejora con permisos y obligaciones.|F|Explica mejor las elecciones en la versión abstracta. La mejora con permisos la explican los esquemas pragmáticos."
    ],
    q: [
      "Con la regla «si alguien recibe el descuento, debe haber presentado el carné» mejoran los aciertos, y el autor lo atribuye a un mecanismo innato para detectar a quien se beneficia sin pagar el coste. ¿Qué teoría sigue?|Contrato social|Esquemas pragmáticos|Selección óptima|Cosmides propuso un mecanismo especializado para detectar tramposos en intercambios de un beneficio a cambio de un requisito.",
      "¿Qué crítica principal recibe la selección óptima de datos?|Cambia la pregunta de la tarea|Supone un módulo innato no comprobable|No define qué cuenta como esquema|No evalúa la tarea según la lógica deductiva, sino como un problema de búsqueda de información.",
      "¿Qué autores propusieron que con la experiencia se adquieren esquemas para permisos y obligaciones?|Cheng y Holyoak (1985)|Cosmides (1989)|Oaksford y Chater (1994)|Son los esquemas de razonamiento pragmático: cuando la tarea activa el esquema de permiso, la selección correcta se sigue casi sola.",
      "¿Qué tienen en común los esquemas pragmáticos, el contrato social y la selección óptima de datos?|Siguen en debate|Suponen un módulo innato|Se basan en recordar casos|Ninguno de los tres enfoques se ha impuesto. Solo el contrato social supone un módulo innato."
    ],
    inc: [
      "Sobre las teorías del efecto del contenido|Los esquemas pragmáticos son recuerdos concretos|El contrato social busca detectar tramposos|La selección óptima es un enfoque probabilístico|Los esquemas no son lógica formal ni recuerdo concreto, sino un conocimiento intermedio aprendido."
    ],
    seq: [],
    cls: [
      "Teoría del efecto del contenido|Esquemas pragmáticos: Cheng y Holyoak; permisos y obligaciones; conocimiento aprendido|Contrato social: Cosmides; detección de tramposos; módulo innato|Selección óptima de datos: Oaksford y Chater; búsqueda de información; enfoque probabilístico"
    ] },
  { t: "Reglas mentales frente a modelos mentales",
    tip: "Para la teoría de las reglas mentales (Braine, 1978, y Rips, 1994, con PSYCOP), la mente aplica reglas de inferencia abstractas y la dificultad depende del número de pasos, por lo que el modus tollens exige una reducción al absurdo. Para la de los modelos mentales (Johnson-Laird, 1983, y Johnson-Laird y Byrne, 1991), se construyen representaciones de situaciones posibles guiadas por el principio de verdad, y el modus tollens exige desplegar el modelo implícito. Que el MP sea más fácil que el MT no decide entre ambas.",
    v: [
      "Lógica natural=Repertorio mental de reglas de inferencia abstractas (Braine, 1978)",
      "PSYCOP=Programa de Rips (1994) que simula la deducción como pasos de prueba",
      "Reducción al absurdo=Suponer una premisa, derivar una contradicción y concluir su negación",
      "Modelo mental=Representación de una situación posible compatible con las premisas",
      "Principio de verdad=Los modelos representan solo lo verdadero según las premisas",
      "Modelo implícito=Marca («…») de que hay otras posibilidades sin detallarlas",
      "Despliegue=Hacer explícitos los casos que el modelo inicial deja sin detallar",
      "Ilusiones inferenciales=Conclusiones erróneas a las que se llega con seguridad al representar solo lo verdadero"
    ],
    g: [
      "Según las reglas mentales, la dificultad de un problema depende del número de ___.|pasos|modelos|premisas",
      "Al desplegar «si p, entonces q» se obtienen ___ casos compatibles.|tres|dos|cuatro",
      "Según Rips, el modus tollens es difícil porque no hay una regla que lo produzca en un solo ___.|paso|modelo|despliegue",
      "El principio de verdad sirve para ahorrar ___.|memoria de trabajo|tiempo de lectura|atención selectiva",
      "La idea de una lógica natural la defendió ___ (1978).|Braine|Rips|Byrne"
    ],
    tf: [
      "El principio de verdad pertenece a la teoría de las reglas mentales.|F|Pertenece a la teoría de los modelos mentales de Johnson-Laird. Es una confusión típica de examen.",
      "Que el modus ponens sea más fácil que el modus tollens no permite decidir entre las dos teorías.|V",
      "Según los modelos mentales, quien despliega el condicional solo en parte, como un bicondicional, acepta también la negación del antecedente.|V",
      "Para la teoría de las reglas mentales, las falacias se deben a un fallo de las reglas de inferencia.|F|La teoría atribuye las falacias a la interpretación de las premisas, no a las reglas."
    ],
    q: [
      "Un programa resuelve problemas deductivos encadenando pasos de prueba y tarda más cuantos más pasos exige el problema. ¿Qué teoría modeliza?|Reglas mentales|Modelos mentales|Esquemas pragmáticos|Es el enfoque de Rips (1994) con PSYCOP: la dificultad depende del número de pasos de la prueba.",
      "Según los modelos mentales, ¿por qué se acepta la afirmación del consecuente?|Se queda con el modelo inicial|Despliega todos los modelos|Aplica una regla de inferencia|Quien se queda con el modelo inicial [p q] solo ve q unido a p y acepta la afirmación del consecuente.",
      "¿Qué predicción distintiva hace la teoría de los modelos mentales?|Ilusiones inferenciales|Problemas largos, más difíciles|Inhibición de la intuición|Al representar solo lo verdadero, casi todos llegan con seguridad a una conclusión errónea en ciertos problemas.",
      "¿Cómo explica la teoría de las reglas mentales la dificultad del modus tollens?|Exige reducción al absurdo|Exige desplegar el modelo|Exige inhibir la creencia|Hay que suponer p, deducir q, chocar con no-q y concluir no-p. Desplegar el modelo es la explicación rival."
    ],
    inc: [
      "Sobre las dos teorías de la deducción|Los modelos mentales miden la dificultad por pasos|Las reglas mentales usan formas lógicas abstractas|Los modelos explican con naturalidad el contenido|La dificultad por número de pasos es de las reglas mentales. Los modelos la miden por el número de modelos."
    ],
    seq: [
      "Reducción al absurdo en el modus tollens|Suponer p>Deducir q>Chocar con no-q>Concluir no-p"
    ],
    cls: [
      "Teoría de la deducción|Reglas mentales: Rips; PSYCOP; número de pasos; reducción al absurdo|Modelos mentales: Johnson-Laird; principio de verdad; número de modelos; ilusiones inferenciales"
    ] }
] },
{ n: 11, t: "Razonamiento inductivo y probabilístico", cap: 4, pir: "alta", mods: [
  { t: "Modalidades de la inferencia inductiva",
    tip: "La inducción parte de casos observados y llega a una conclusión que va más allá de ellos: amplía el conocimiento, pero no lo garantiza. No se habla de validez, sino de fuerza inductiva, que es graduada y depende sobre todo del número, la diversidad y la representatividad de los casos. Según el modelo de similitud-cobertura (Osherson et al., 1990), un argumento basado en categorías es más fuerte cuanto más se parecen las premisas a la conclusión y mejor cubren la categoría general.",
    v: [
      "Fuerza inductiva=Grado en que las premisas hacen probable la conclusión",
      "Generalización=Regla general inferida a partir de varios casos",
      "Analogía=Atribuir una propiedad a un caso nuevo por su parecido con otro",
      "Inducción estadística=Propiedad de una población inferida a partir de una muestra",
      "Razonamiento probabilístico=Grado de creencia en una hipótesis ante datos nuevos",
      "Similitud-cobertura=Modelo de Osherson et al. (1990) para la inducción basada en categorías",
      "Cobertura=Grado en que las premisas, en conjunto, representan bien la categoría general",
      "Similitud=Parecido entre las categorías de las premisas y la de la conclusión"
    ],
    g: [
      "En inducción no se habla de validez, sino de ___ inductiva.|fuerza|certeza|verdad",
      "Diez opiniones de amigos del mismo grupo dicen poco sobre una ciudad porque les falta ___.|diversidad|cantidad|validez",
      "«El 60 % de los encuestados quiere más carril bici» es una inducción ___.|estadística|causal|analógica",
      "Según Osherson et al., hipopótamos y hámsteres apoyan mejor una conclusión sobre los mamíferos por su mayor ___.|cobertura|similitud|tipicidad",
      "«Este casero es como el anterior y tardará en devolver la fianza» es un razonamiento por ___.|analogía|generalización|deducción"
    ],
    tf: [
      "Diez mangos maduros en una frutería apoyan poco que todos los mangos lo estén, pero bastante más que lo esté el próximo de esa frutería.|V",
      "Según el modelo de similitud-cobertura, dos premisas muy parecidas entre sí dan el argumento más fuerte.|F|Añaden poca cobertura porque casi dicen lo mismo. Las premisas diversas cubren mejor la categoría general.",
      "La inducción amplía el conocimiento, pero no lo garantiza.|V",
      "La fuerza de una inducción depende sobre todo de lo creíble que resulte su conclusión.|F|Depende sobre todo del número, la diversidad y la representatividad de los casos."
    ],
    q: [
      "Una investigadora quiere saber si un hábito se da en los adultos y duda entre preguntar a 50 compañeros de su facultad o a 50 personas de edades y trabajos distintos. ¿Qué muestra da más fuerza inductiva?|La más diversa|La más homogénea|Las dos por igual|La fuerza inductiva aumenta con la diversidad y la representatividad de los casos, no solo con su número.",
      "¿Por qué «hipopótamos y rinocerontes» apoya poco una conclusión sobre todos los mamíferos?|Porque cubren poco la categoría|Porque son poco parecidos entre sí|Porque solo son dos casos|Son muy parecidos entre sí y cubren una parte pequeña de la categoría «mamíferos».",
      "«Cuando riego de más, las hojas amarillean.» ¿Qué modalidad inductiva es?|Inducción causal|Generalización estadística|Analogía|Se infiere que un suceso produce otro, que es la inducción causal.",
      "¿Con qué contenido de la asignatura enlaza el modelo de similitud-cobertura?|Conceptos y tipicidad|Reglas mentales|Esquemas pragmáticos|El modelo enlaza con lo visto sobre conceptos y tipicidad en la Unidad 4."
    ],
    inc: [
      "Sobre las modalidades inductivas|La analogía infiere una regla a partir de varios casos|La inducción estadística va de una muestra a la población|La inducción causal infiere que un suceso produce otro|Inferir una regla general a partir de varios casos es la generalización. La analogía se basa en el parecido con otro caso."
    ],
    seq: [],
    cls: [
      "Modalidad inductiva|Generalización: el gimnasio lleno a las ocho; regla a partir de casos|Analogía: el casero como el anterior; parecido con otro caso|Inducción estadística: encuesta sobre el carril bici; de una muestra a la población"
    ] },
  { t: "Comprobar hipótesis: la tarea 2-4-6",
    tip: "En la tarea 2-4-6 de Wason (1960) hay que descubrir la regla del experimentador proponiendo series de tres números. La regla era cualquier serie ascendente, pero se formulan hipótesis más estrechas y se prueban series que las cumplen: solo 6 de 29 participantes acertaron sin anunciar antes una regla incorrecta. Klayman y Ha (1987) lo explican por una estrategia de prueba positiva, razonable en muchos entornos, que falla de forma sistemática cuando la hipótesis está anidada en la regla.",
    v: [
      "Tarea 2-4-6=Descubrir una regla proponiendo series de tres números (Wason, 1960)",
      "Regla real=Cualquier serie de números ascendentes",
      "Hipótesis anidada=La que es un subconjunto de la regla verdadera",
      "Prueba positiva=Examinar casos que la hipótesis predice que cumplen la regla",
      "Prueba negativa=Proponer series que la hipótesis predice que no cumplen la regla",
      "Klayman y Ha (1987)=Reinterpretaron el fallo como uso de un heurístico razonable",
      "Sesgo de confirmación=Tendencia a confirmar las propias hipótesis, que Wason anticipó",
      "Serie prohibida=Serie que la hipótesis excluye, como 1, 5, 20"
    ],
    g: [
      "En el estudio original, ___ de 29 participantes anunciaron la regla correcta sin anuncios incorrectos previos.|6|13|9",
      "«Números que aumentan de dos en dos» es una hipótesis más ___ que la regla real.|estrecha|amplia|exacta",
      "Para descubrir el error hay que proponer series que la hipótesis ___.|prohíbe|cumple|predice",
      "Klayman y Ha publicaron su reinterpretación de la tarea en ___.|1987|1960|1966",
      "Una prueba positiva también puede recibir un «___» y refutar la hipótesis.|no|sí|quizá"
    ],
    tf: [
      "Para Klayman y Ha, la prueba positiva equivale a buscar confirmación a toda costa.|F|No equivale: una prueba positiva puede recibir un «no» y refutar la hipótesis. Es un heurístico razonable en muchos entornos.",
      "Si la hipótesis está dentro de la regla verdadera, cualquier serie que la cumple recibe un «sí».|V",
      "En el estudio de Wason, la mayoría de los participantes acertó la regla al primer anuncio.|F|Solo 6 de 29 lo hicieron. 13 anunciaron una regla incorrecta antes de acertar y 9, dos o más incorrectas.",
      "La prueba positiva falla de forma sistemática cuando la hipótesis es más estrecha que la regla verdadera.|V"
    ],
    q: [
      "Tras oír «2, 4, 6», un participante prueba 8, 10, 12 y 20, 22, 24, recibe «sí» en ambas y anuncia «pares de dos en dos». ¿Qué serie le habría revelado el error?|1, 5, 20|30, 32, 34|10, 12, 14|Es una serie que su hipótesis prohíbe y que también cumple la regla real, cualquier serie ascendente.",
      "Alguien cree que su compañera de piso está molesta con él porque le contesta con monosílabos. ¿Qué comprobación sería más informativa?|Si contesta igual a los demás|Si a él le contesta siempre así|Si hoy le contesta con monosílabos|La pregunta útil es qué observaría si su hipótesis fuera falsa, por ejemplo, si también contesta así a otros tras dormir poco.",
      "Según Klayman y Ha, ¿por qué falla la estrategia habitual en la tarea 2-4-6?|La hipótesis está anidada en la regla|Se busca confirmar a toda costa|La regla real es demasiado estrecha|El fallo es estructural: la hipótesis es un subconjunto de la regla. Atribuirlo a buscar confirmación es la trampa típica.",
      "¿Qué tarea de Wason estudia la búsqueda de datos para comprobar una hipótesis inductiva?|La tarea 2-4-6|La tarea de selección|El problema de la mamografía|La 2-4-6 (1960) es inductiva: hay que descubrir una regla. La de selección (1966) es deductiva."
    ],
    inc: [
      "Sobre la tarea 2-4-6|La regla real era «aumentan de dos en dos»|La regla real era muy general|Hay que proponer series de tres números|La regla real era cualquier serie ascendente. «De dos en dos» es la hipótesis estrecha típica."
    ],
    seq: [
      "Procedimiento de la tarea 2-4-6|Presentar la serie 2, 4, 6>Proponer una serie de tres números>Recibir si cumple o no la regla>Anunciar la regla"
    ],
    cls: [
      "Estrategia de comprobación|Prueba positiva: 8, 10, 12; series que la hipótesis predice que cumplen|Prueba negativa: 1, 5, 20; series que la hipótesis prohíbe"
    ] },
  { t: "Razonamiento causal y usos de la inducción",
    tip: "Hume señaló tres claves de la causalidad, la contigüidad, la prioridad temporal y la conjunción constante, y ninguna basta por sí sola. Mill propuso los métodos de concordancia, diferencia y variaciones concomitantes. La contingencia (ΔP) es la diferencia entre la probabilidad del efecto con la causa y sin ella, y la teoría del poder causal de Cheng (1997) la corrige por las otras causas del efecto. En clínica, desatender la prevalencia lleva a sobrestimar el valor predictivo positivo.",
    v: [
      "Contigüidad=Cercanía espacial y temporal entre la supuesta causa y el efecto",
      "Prioridad temporal=La causa precede al efecto",
      "Conjunción constante=Causa y efecto aparecen juntos de forma repetida",
      "Método de concordancia=Si varios casos del efecto solo comparten un factor, es candidato a causa",
      "Método de diferencia=Dos situaciones que solo difieren en un factor, y el efecto aparece en una",
      "Variaciones concomitantes=El efecto varía cuando varía un factor",
      "Contingencia (ΔP)=Probabilidad del efecto con la causa menos la probabilidad sin ella",
      "Poder causal=Contingencia corregida por la tasa del efecto sin la causa (Cheng, 1997)"
    ],
    g: [
      "El trueno sigue siempre al relámpago y no lo causa: la conjunción constante no ___ la causa.|garantiza|descarta|precede",
      "Si de 20 noches con café se duerme mal en 12 y de 20 sin café en 4, ΔP vale ___.|0,4|0,5|0,6",
      "En ese mismo ejemplo, el poder causal de Cheng vale ___.|0,5|0,4|0,8",
      "Dos noches iguales salvo el café de la tarde, y solo en una se duerme mal, ilustran el método de ___.|diferencia|concordancia|variaciones",
      "Desatender la prevalencia lleva a sobrestimar el valor predictivo ___ de una prueba.|positivo|negativo|clínico"
    ],
    tf: [
      "Según Cheng (1997), las personas estiman solo la contingencia entre la causa y el efecto.|F|Para Cheng estiman el poder de la causa, descontando lo que ocurre sin ella, porque el efecto puede tener otras causas.",
      "En la práctica se da mucho peso a los casos en que causa y efecto coinciden y poco a los demás.|V",
      "Una correlación entre dormir poco y rendir peor basta para afirmar una relación causal.|F|Puede deberse a un tercer factor, como el estrés. Una correlación no basta para afirmar una causa.",
      "En la ciencia, la inducción se somete a control con muestras planificadas, grupos de comparación, estadística y replicación.|V"
    ],
    q: [
      "Varios amigos con dolor de estómago descubren que solo coincidieron en haber comido la misma ensaladilla. ¿Qué método de Mill aplican?|Concordancia|Diferencia|Variaciones concomitantes|Varios casos del efecto solo comparten un factor, que pasa a ser candidato a causa.",
      "«Cuantas más horas de pantalla por la noche, más se tarda en dormir.» ¿Qué método de Mill ilustra?|Variaciones concomitantes|Método de la concordancia|Método de la diferencia|El efecto varía cuando varía el factor, lo que indica que ambos están relacionados.",
      "Un efecto aparece en el 50 % de los casos con la posible causa y en el 50 % sin ella. ¿Qué contingencia hay?|Nula|Positiva|Negativa|ΔP es la diferencia entre ambas probabilidades, y 0,5 menos 0,5 da cero.",
      "¿Qué uso de la inducción recurre a atajos como la representatividad, la disponibilidad o el anclaje?|La inducción heurística|La inducción científica|La inducción clínica|Es la inducción heurística, tratada con los heurísticos de juicio en la Unidad 7."
    ],
    inc: [
      "Sobre las claves de Hume|Cada clave garantiza por sí sola la causa|La causa precede al efecto|Causa y efecto aparecen juntos de forma repetida|Ninguna clave garantiza sola la causa: el trueno sigue siempre al relámpago y no lo causa."
    ],
    seq: [],
    cls: [
      "Herramienta del razonamiento causal|Claves de Hume: contigüidad; prioridad temporal; conjunción constante|Métodos de Mill: concordancia; diferencia; variaciones concomitantes"
    ] },
  { t: "Modelos de casos y modelo bayesiano",
    tip: "Los modelos de casos explican inferencias que comparan con experiencias concretas: son rápidos en quien tiene experiencia, pero dependen de los casos más disponibles. El modelo bayesiano actualiza la probabilidad a priori con los datos para obtener la probabilidad a posteriori, y es la norma del razonamiento probabilístico. En el problema de la mamografía se descuida la tasa base y se responde cerca del 80 %, cuando la respuesta es alrededor del 7,8 %. Las frecuencias naturales mejoran mucho los aciertos, aunque no del todo (Gigerenzer y Hoffrage, 1995).",
    v: [
      "Modelos de casos=Inferir comparando con experiencias concretas guardadas en la memoria",
      "Probabilidad a priori=Grado de creencia en la hipótesis antes de conocer los datos",
      "Probabilidad a posteriori=Grado de creencia en la hipótesis una vez conocidos los datos",
      "Descuido de la tasa base=Ignorar la probabilidad previa al estimar la probabilidad tras el dato",
      "Frecuencias naturales=Recuentos obtenidos al clasificar una muestra",
      "Conjuntos anidados=Los positivos con cáncer son un subconjunto de todos los positivos",
      "Menú corto=Formato que da solo los dos datos imprescindibles",
      "Visión ecológico-evolutiva=La mente está adaptada a la información en forma de recuentos (Gigerenzer)"
    ],
    g: [
      "De 1.000 mujeres, 10 tienen cáncer y ___ de ellas dan positivo en la mamografía.|8|80|95",
      "En el problema de la mamografía, la probabilidad de cáncer tras un positivo es de alrededor del ___.|7,8 %|80 %|9,6 %",
      "Con el menú estándar, las frecuencias naturales elevan las respuestas bayesianas del 16 % al ___.|46 %|50 %|28 %",
      "Para Barbey y Sloman (2007), las frecuencias hacen visibles los conjuntos ___.|anidados|disjuntos|completos",
      "El punto débil de los modelos de casos es que dependen de los casos más ___.|recientes o llamativos|antiguos o frecuentes|típicos o representativos"
    ],
    tf: [
      "Con frecuencias naturales, prácticamente todas las respuestas pasan a ser bayesianas.|F|La mejora es grande, pero no completa: alrededor de la mitad de las respuestas siguen sin ser bayesianas.",
      "En los modelos de casos, la semejanza estructural es mejor guía que la superficial.|V",
      "Se discute si los modelos bayesianos describen qué problema resuelve la mente o cómo lo resuelve.|V",
      "Dar como probabilidad a posteriori el 80 % de aciertos de la mamografía es aplicar bien el teorema de Bayes.|F|El 80 % es la tasa de aciertos de la prueba. Darla como probabilidad a posteriori es el descuido de la tasa base."
    ],
    q: [
      "De 1.000 mujeres, 103 dan positivo en la mamografía y 8 de ellas tienen cáncer. Una mujer da positivo. ¿Qué probabilidad hay de que tenga cáncer?|Alrededor del 8 %|Alrededor del 80 %|Alrededor del 1 %|Basta comparar los positivos con cáncer (8) con todos los positivos (103), lo que da en torno a un 7,8 %.",
      "Una fisioterapeuta ve una lesión que le recuerda a la de un paciente de hace años y prueba el mismo ejercicio. ¿Qué modelo describe su inferencia?|Modelo de casos|Modelo bayesiano|Similitud-cobertura|Recupera un caso parecido de la memoria y traslada su desenlace al caso actual.",
      "¿Qué explicación del efecto de las frecuencias naturales defiende Gigerenzer?|La mente está adaptada a los recuentos|Hacen visibles los conjuntos anidados|Obligan a aplicar la fórmula de Bayes|Es la visión ecológico-evolutiva. Los conjuntos anidados son la explicación de Barbey y Sloman (2007).",
      "Tenenbaum, Kemp, Griffiths y Goodman (2011) usan el enfoque bayesiano como…|teoría de la cognición|norma de la lógica|modelo de casos|Describen muchos aprendizajes inductivos como inferencia bayesiana."
    ],
    inc: [
      "Sobre el modelo bayesiano|La a posteriori es la tasa de aciertos|Parte de una probabilidad a priori|Es la norma del razonamiento probabilístico|Confundir la tasa de aciertos de la prueba con la probabilidad a posteriori es la trampa típica."
    ],
    seq: [
      "Actualización bayesiana de una creencia|Probabilidad a priori>Llegada de un dato nuevo>Probabilidad a posteriori"
    ],
    cls: [
      "Explicación del efecto de las frecuencias|Gigerenzer: visión ecológico-evolutiva; mente adaptada a los recuentos|Barbey y Sloman: conjuntos anidados visibles; relación de subconjunto"
    ] }
] },
{ n: 12, t: "Razonar en contexto", cap: 4, pir: "media", mods: [
  { t: "Razonamiento reflexivo e inhibición",
    tip: "El razonamiento reflexivo examina de forma deliberada una conclusión antes de aceptarla y es más restringido que el pensamiento reflexivo de Dewey (1910). Corresponde al Tipo 2, cuyo rasgo definitorio es el uso de la memoria de trabajo y el desacoplamiento cognitivo (Evans y Stanovich, 2013). Reflexionar implica detectar el conflicto, inhibir la respuesta inicial y generar una alternativa. Muchos detectan el conflicto aunque fallen (De Neys, 2012), y un sentimiento de acierto intenso reduce la reconsideración (Thompson et al., 2011).",
    v: [
      "Razonamiento reflexivo=Examen deliberado de una conclusión mediante análisis antes de aceptarla",
      "Pensamiento reflexivo=Examen cuidadoso de una creencia y sus fundamentos (Dewey, 1910)",
      "Desacoplamiento cognitivo=Mantener una representación aparte de la realidad para razonar sobre ella",
      "Detección de conflicto=Percibir, a veces de forma implícita, que la intuición choca con otra consideración",
      "Inhibición=Frenar la respuesta inicial para que no se emita de forma automática",
      "Sentimiento de acierto=Señal metacognitiva que, si es intensa, reduce la reconsideración",
      "Test de Reflexión Cognitiva=Prueba de Frederick (2005) cuyos ítems despiertan una intuición errónea",
      "Considerar lo contrario=Consigna que reduce algunos sesgos de juicio (Lord, Lepper y Preston, 1984)"
    ],
    g: [
      "Para Evans y Stanovich, lo definitorio del Tipo 2 no es la lentitud ni la conciencia, sino el uso de la memoria de ___.|trabajo|largo plazo|reconocimiento",
      "La instrucción en pensamiento crítico tiene un efecto medio de g+ de ___.|0,30|0,80|0,04",
      "Según De Neys, el fallo estaría más en la ___ que en la detección.|inhibición|percepción|motivación",
      "El Test de Reflexión Cognitiva mide sobre todo la ___ de la respuesta intuitiva.|inhibición|detección|generación",
      "En problemas con conflicto, quienes responden mal tardan más y se sienten ___ seguros que en los de control.|menos|más|igual de"
    ],
    tf: [
      "Todo pensamiento reflexivo es razonamiento reflexivo, pero no al revés.|F|Es al revés: todo razonamiento reflexivo es pensamiento reflexivo, pero no todo pensamiento reflexivo evalúa argumentos.",
      "Reflexionar no garantiza acertar, porque el Tipo 2 también puede usarse para justificar una idea ya decidida.|V",
      "La transferencia del entrenamiento en pensamiento crítico a contextos nuevos es automática.|F|No es automática: hay que practicarla de forma explícita.",
      "Un sentimiento de acierto intenso ante la primera respuesta reduce la probabilidad de reconsiderarla.|V"
    ],
    q: [
      "Un cliente nota que algo no le encaja en el contrato, pero firma igual. ¿En qué paso ha fallado la reflexión?|Inhibición|Detección|Alternativa|Percibió el conflicto, así que la detección funcionó, pero la respuesta intuitiva se impuso.",
      "Un cartel anuncia «3 × 2 en yogures», pero el pack de cuatro sale más barato por unidad. ¿Qué hace falta para descubrirlo?|Frenar la impresión y dividir|Confiar en la oferta más visible|Buscar el pack con más unidades|Solo quien inhibe la primera impresión y calcula el precio por unidad comprueba que la oferta es peor.",
      "¿Qué indica que los participantes de De Neys tarden más y estén menos seguros en los problemas con conflicto?|Que detectan el conflicto|Que no detectan el conflicto|Que inhiben bien la intuición|Habría una sensibilidad intuitiva a la lógica: el conflicto se detecta aunque la respuesta final sea errónea.",
      "Una estudiante sospecha de su intuición y quiere calcular la probabilidad, pero no sabe cómo. ¿Qué paso falla?|Generar la alternativa|Detectar el conflicto|Inhibir la intuición|Ha detectado el conflicto y frenado la intuición, pero no sabe construir la respuesta correcta con procesamiento de Tipo 2."
    ],
    inc: [
      "Sobre el razonamiento reflexivo|Su rasgo definitorio es la lentitud|Usa la memoria de trabajo|Implica desacoplamiento cognitivo|Para Evans y Stanovich lo definitorio no es la lentitud ni la conciencia, sino la memoria de trabajo y el desacoplamiento."
    ],
    seq: [
      "Pasos de la reflexión|Detectar el conflicto>Inhibir la respuesta inicial>Generar y evaluar una alternativa"
    ],
    cls: [] },
  { t: "Disposiciones de pensamiento",
    tip: "Stanovich separa dentro del Tipo 2 la mente algorítmica, la capacidad de cómputo y desacoplamiento que miden los tests de inteligencia, y la mente reflexiva, las disposiciones de pensamiento que deciden si esa capacidad se usa. Por eso muchos sesgos son relativamente independientes de la capacidad cognitiva, y la inteligencia no protege por sí sola de ellos. El pensamiento activamente abierto es una disposición muy estudiada, y las disposiciones pueden cultivarse con hábitos concretos.",
    v: [
      "Mente autónoma=Procesos rápidos de Tipo 1 que no requieren memoria de trabajo",
      "Mente algorítmica=Capacidad de cómputo y desacoplamiento que miden los tests de inteligencia",
      "Mente reflexiva=Disposiciones de pensamiento que deciden si se pone en marcha la capacidad",
      "Disposiciones de pensamiento=Tendencias a buscar información, dudar y ajustar las creencias a la evidencia",
      "Pensamiento activamente abierto=Buscar razones contra la propia postura y estar dispuesto a cambiarla",
      "Capacidad cognitiva=Eficacia para mantener información, desacoplar representaciones y calcular",
      "Fallo de la mente reflexiva=No intentar resolver el problema",
      "Fallo de la mente algorítmica=No saber resolverlo aunque se intente"
    ],
    g: [
      "Los tests de inteligencia miden sobre todo la mente ___.|algorítmica|reflexiva|autónoma",
      "El CRT capta la tendencia a ___ la primera respuesta.|frenar|recordar|justificar",
      "Muchos sesgos son relativamente ___ de la capacidad cognitiva.|independientes|dependientes|derivados",
      "El pensamiento activamente abierto se asocia a Baron y a Stanovich y ___.|West|Evans|Frederick",
      "Preguntarse «¿qué me haría cambiar de opinión?» ayuda a cultivar las ___ de pensamiento.|disposiciones|capacidades|habilidades"
    ],
    tf: [
      "Una persona muy inteligente queda protegida por su capacidad frente a la mayoría de los sesgos.|F|Si la tarea no avisa de que hay que razonar, responde con la misma intuición que cualquiera: lo decisivo son las disposiciones.",
      "Pensar de forma activamente abierta es compatible con defender una postura firme.|V",
      "Para Stanovich, los dos niveles del Tipo 2 son la mente autónoma y la algorítmica.|F|Son la mente algorítmica y la reflexiva. La mente autónoma corresponde a los procesos de Tipo 1.",
      "El CRT predice el rendimiento en tareas de razonamiento aunque no sea un test de inteligencia sin más.|V"
    ],
    q: [
      "Dos estudiantes con notas parecidas en matemáticas leen un estudio sobre un alimento y la longevidad. Uno lo comparte enseguida y la otra pregunta cuántas personas participaron. ¿En qué difieren?|En disposición|En capacidad|En mente autónoma|No difieren en capacidad, sino en la tendencia a examinar la evidencia, propia de la mente reflexiva.",
      "Una persona intenta resolver un problema de razonamiento con todo su empeño y no lo logra. ¿Qué nivel falla según Stanovich?|La mente algorítmica|La mente reflexiva|La mente autónoma|No saber resolver aunque se intente es el fallo típico de la capacidad, es decir, de la mente algorítmica.",
      "¿Qué nivel de Stanovich miden las escalas de estilos de pensamiento y el CRT?|La mente reflexiva|La mente algorítmica|La mente autónoma|Miden disposiciones de pensamiento. Los tests de inteligencia miden la mente algorítmica.",
      "¿Por qué la formación técnica no inmuniza contra los errores de juicio?|No asegura el hábito de usarla|No aumenta la capacidad cognitiva|No mejora la memoria de trabajo|Aporta conocimientos y capacidad, pero no el hábito de usarlos cuando la tarea no avisa de que hace falta."
    ],
    inc: [
      "Sobre el pensamiento activamente abierto|Consiste en no tener opiniones firmes|Pondera por igual la evidencia contraria|Busca razones contra la propia postura|No es lo mismo que no tener opiniones: se puede defender una postura firme y saber qué dato la cambiaría."
    ],
    seq: [],
    cls: [
      "Nivel de Stanovich|Mente autónoma: Tipo 1; respuesta intuitiva inadecuada|Mente algorítmica: tests de inteligencia; no saber resolver|Mente reflexiva: CRT; no intentar resolver"
    ] },
  { t: "Racionalidad acotada y racionalidad ecológica",
    tip: "Simon (1955) propuso la racionalidad acotada: con información, tiempo y cálculo limitados, las personas buscan a menudo una opción suficientemente buena, lo que no equivale a irracionalidad. El programa de heurísticos y sesgos (Tversky y Kahneman, 1974) ve los atajos como fuente de errores, y el de heurísticos rápidos y frugales (Gigerenzer y Goldstein, 1996), como herramientas adaptadas. Reglas como tomar el mejor o el reconocimiento son precisas cuando se ajustan a la estructura del entorno: es la racionalidad ecológica.",
    v: [
      "Racionalidad acotada=Razonar y decidir con información, tiempo y cálculo limitados (Simon, 1955)",
      "Estrategia de satisfacción=Buscar una opción suficientemente buena en lugar de la óptima",
      "Racionalidad ecológica=Ajuste entre un heurístico y la estructura del entorno en que se aplica",
      "Tomar el mejor=Decidir con la primera señal válida que discrimina, sin mirar las demás",
      "Heurístico de reconocimiento=Elegir la opción que se reconoce cuando la otra no",
      "Heurísticos y sesgos=Programa de Tversky y Kahneman (1974) sobre las desviaciones de la norma",
      "Rápidos y frugales=Programa de Gigerenzer y Goldstein (1996) sobre atajos que funcionan",
      "Criterio normativo=Razonar bien es ajustarse a la lógica y a la teoría de la probabilidad"
    ],
    g: [
      "El heurístico tomar el mejor ordena las señales según su ___.|validez|frecuencia|novedad",
      "El reconocimiento ayuda si lo conocido tiende a ser también lo mayor o lo ___.|mejor|cercano|reciente",
      "Para el programa de heurísticos y sesgos, el criterio de éxito es la ___ con la lógica y la probabilidad.|coherencia|precisión|rapidez",
      "Kruglanski y Gigerenzer (2011) defienden que intuición y deliberación siguen las ___ reglas.|mismas|distintas|pocas",
      "Simon argumentó que la norma ideal supone una capacidad de cálculo ___.|infinita|limitada|media"
    ],
    tf: [
      "La racionalidad acotada de Simon equivale a afirmar que las personas son irracionales.|F|Sostiene que razonan lo mejor que pueden con recursos limitados. Confundirla con irracionalidad es una trampa típica.",
      "Gigerenzer considera los heurísticos sobre todo como una fuente de errores sistemáticos.|F|Esa visión es la del programa de Tversky y Kahneman. Para Gigerenzer son herramientas adaptadas a ciertos entornos.",
      "Los dos programas aceptan que se usan atajos y que estos pueden fallar.|V",
      "El efecto de las frecuencias naturales se considera un argumento a favor de la visión ecológica.|V"
    ],
    q: [
      "En una ciudad desconocida, un turista elige entre dos restaurantes el que tiene más gente dentro. ¿Cuándo deja de funcionar este atajo?|En una calle turística siempre llena|Cuando elige con una sola señal válida|En una ciudad que no ha visitado nunca|Funciona si la afluencia refleja la calidad. En una calle turística, todos se llenan por su ubicación.",
      "Hay que decidir cuál de dos ciudades tiene más habitantes y solo se reconoce una de ellas. ¿Qué haría el heurístico de reconocimiento?|Elegir la ciudad reconocida|Elegir la ciudad no reconocida|Buscar todas las señales|Elige la opción que se reconoce cuando la otra no, y acierta si lo conocido tiende a ser también lo mayor.",
      "¿Qué pregunta guía el programa de heurísticos rápidos y frugales?|¿Cuándo funciona bien un atajo?|¿En qué se aparta de la norma?|¿Cuánta información se integra?|Gigerenzer pregunta cuándo funcionan los atajos. Tversky y Kahneman, en qué se aparta el juicio de la norma.",
      "¿Qué estudio ejemplifica el programa de heurísticos y sesgos frente al de Gigerenzer?|Falacia de la conjunción|Decidir con una sola señal|Heurístico de reconocimiento|La falacia de la conjunción muestra una desviación de la norma. Decidir con una sola señal es propio del enfoque ecológico."
    ],
    inc: [
      "Sobre la racionalidad ecológica|Un atajo simple es siempre menos preciso que integrarlo todo|Un heurístico acierta si se ajusta a la estructura del entorno|Tomar el mejor decide con la primera señal que discrimina|Gigerenzer y Goldstein (1996) mostraron que reglas muy simples pueden ser tan precisas como métodos que integran toda la información."
    ],
    seq: [],
    cls: [
      "Programa de investigación|Heurísticos y sesgos: Tversky y Kahneman; coherencia con la norma; falacia de la conjunción|Rápidos y frugales: Gigerenzer y Goldstein; tomar el mejor; heurístico de reconocimiento"
    ] },
  { t: "Cultura, emoción y teoría argumentativa",
    tip: "Nisbett, Peng, Choi y Norenzayan (2001) propusieron un estilo holístico en Asia oriental y uno analítico en Occidente, una idea influyente y en debate. Las emociones pueden informar de lo que importa, como propone el marcador somático de Damasio, pero también sesgar, y para Haidt (2001) la intuición moral llega antes que el razonamiento. La teoría argumentativa de Mercier y Sperber (2011) sostiene que razonar sirve para producir y evaluar argumentos, por lo que funciona mejor en el diálogo entre quienes discrepan.",
    v: [
      "Estilo holístico=Atención al contexto y a las relaciones, con tolerancia de la contradicción",
      "Estilo analítico=Atención a los objetos, las categorías y las reglas formales",
      "Marcador somático=Señales corporales de experiencias pasadas que guían la decisión (Damasio)",
      "Haidt (2001)=En el juicio moral, la intuición llega primero y el razonamiento la justifica después",
      "Teoría argumentativa=El razonamiento sirve para producir y evaluar argumentos",
      "Mercier y Sperber=Autores que propusieron en 2011 la función argumentativa del razonamiento",
      "Enfoque normativo clásico=Razonar sirve para llegar a conclusiones verdaderas",
      "Polarización grupal=Radicalización cuando todos piensan igual y solo circulan argumentos a favor"
    ],
    g: [
      "Nisbett et al. asociaron el estilo ___ a las culturas de Asia oriental.|holístico|analítico|formal",
      "Que la lengua y la cultura modulen el pensamiento no supone que lo ___.|determinen|reflejen|expresen",
      "Según la teoría argumentativa, se es más exigente al ___ los argumentos ajenos que al producir los propios.|evaluar|aceptar|resumir",
      "Para la teoría argumentativa, el sesgo de confirmación al producir argumentos es ___.|esperable|irracional|accidental",
      "En el juicio moral, Haidt defiende que la ___ llega primero.|intuición|deliberación|norma"
    ],
    tf: [
      "La distinción entre pensamiento holístico y analítico es un hecho general aceptado sin discusión.|F|Está en debate: agrupa culturas muy diversas, la variación interna es grande y los estilos cambian con la situación.",
      "Según Mercier y Sperber, en grupos donde todos piensan igual las posturas pueden radicalizarse.|V",
      "Las emociones son solo ruido que perjudica el razonamiento.|F|Pueden informar de lo que importa y orientar la elección cuando el análisis completo es imposible, aunque también sesgan.",
      "Es más fácil aceptar una conclusión que agrada, en línea con el sesgo de creencia.|V"
    ],
    q: [
      "Un equipo quiere detectar los fallos de su propuesta antes de presentarla. Según la teoría argumentativa, ¿qué le conviene?|Que alguien lleve la contraria|Que cada uno revise a solas|Que todos estén de acuerdo|Exponer las ideas a la crítica de otros detecta fallos que nadie habría visto en solitario.",
      "Ante un dilema moral, alguien siente enseguida que una acción está mal y solo después busca razones que lo justifiquen. ¿Qué propuesta lo describe?|La de Haidt (2001) sobre el juicio moral|El marcador somático de Damasio|El estilo holístico de Nisbett et al.|Para Haidt, en el juicio moral la intuición llega primero y el razonamiento sirve después para justificarla.",
      "¿Qué crítica se hace a la propuesta de Nisbett et al. (2001)?|Agrupa culturas diversas en dos bloques|Niega toda influencia de la cultura|Defiende un determinismo lingüístico|Agrupa culturas muy diversas, la variación dentro de cada una es grande y los estilos cambian con la situación.",
      "¿Qué se discute de la teoría argumentativa?|Cuánto añade a otras explicaciones|Si explica los datos ya conocidos|Si el diálogo mejora el razonamiento|Explica bien muchos datos conocidos. Se discute cuánto añade y si deja el razonamiento individual en un papel secundario."
    ],
    inc: [
      "Sobre la teoría argumentativa|El razonamiento funciona mejor en solitario|Se es más exigente con los argumentos ajenos|Su función es producir y evaluar argumentos|Debería funcionar mejor en el diálogo entre personas que discrepan, donde cada parte critica las razones de la otra."
    ],
    seq: [],
    cls: [
      "Enfoque sobre la función del razonamiento|Normativo clásico: llegar a conclusiones verdaderas; el sesgo de confirmación es un error|Teoría argumentativa: convencer y evaluar argumentos; el sesgo de confirmación es esperable"
    ] }
] }
);

// SAIMAP Psicología · Pensamiento · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Solución de problemas I: Gestalt e insight", cap: 5, pir: "alta", mods: [
  { t: "Reestructuración y pensamiento productivo",
    tip: "Para Duncker (1945) hay problema cuando se tiene un objetivo y no se sabe de antemano cómo alcanzarlo. Frente al ensayo y error, la Gestalt (Köhler, Wertheimer, Duncker) explicó la solución como reestructuración: reorganizar los elementos hasta comprender la estructura, con un insight súbito. El pensamiento productivo crea una organización nueva, y el reproductivo aplica una solución ya aprendida.",
    v: [
      "Problema=Tener un objetivo sin saber de antemano cómo alcanzarlo (Duncker, 1945)",
      "Ensayo y error=Probar respuestas y retener las que funcionan, explicación del aprendizaje animal",
      "Reestructuración=Reorganizar los elementos de un problema para verlos de otra manera",
      "Insight=Comprensión repentina de la solución que acompaña a la reorganización",
      "Pensamiento productivo=Crea una organización nueva a partir de comprender la estructura",
      "Pensamiento reproductivo=Aplica una solución ya aprendida, basada en la experiencia y el hábito",
      "Köhler=Estudió chimpancés en Tenerife entre 1913 y 1917",
      "Problema de los nueve puntos=Unir una matriz de 3 × 3 con cuatro rectas sin levantar el lápiz"
    ],
    g: [
      "Köhler estudió a los chimpancés en Tenerife entre ___ y 1917.|1913|1931|1935",
      "Algunos chimpancés de Köhler encajaban dos ___ para formar una vara más larga.|cañas|cajas|cuerdas",
      "Según Köhler, una vez encontrada, la solución se ejecutaba sin ___.|vacilación|transferencia|comprensión",
      "Wertheimer (1945) ilustró la diferencia con el cálculo del área del ___.|paralelogramo|triángulo|círculo",
      "Weisberg y Alba (___) observaron que avisar de que se podía salir del cuadrado ayudaba poco.|1981|1945|1926"
    ],
    tf: [
      "Para la Gestalt, resolver un problema consiste en comprender su estructura y reorganizar sus elementos.|V",
      "Köhler describió en sus chimpancés una mejora gradual de la solución, típica del ensayo y error.|F|Describió soluciones súbitas, ejecutadas sin vacilación y transferibles, rasgos que las separaban del ensayo y error.",
      "El riesgo del pensamiento reproductivo es la rigidez cuando la situación cambia.|V",
      "Weisberg y Alba hallaron que avisar de que se podía salir del cuadrado resolvía casi siempre los nueve puntos.|F|Ayudaba menos de lo esperado, un dato que alimentó el debate sobre si el insight exige procesos especiales."
    ],
    q: [
      "Un alumno que memorizó la fórmula del área del paralelogramo se bloquea cuando la figura aparece girada. ¿Qué tipo de pensamiento ha usado?|Reproductivo|Productivo|Divergente|Aplica una solución aprendida sin comprender la estructura. Quien ve que se recompone como un rectángulo piensa de forma productiva.",
      "¿Cuál de estas situaciones es un problema según la definición de Duncker?|Reactivar el microondas tras un apagón|Calentar la leche en el microondas de casa|Encender la luz del pasillo al entrar|Hay problema cuando no existe una respuesta disponible que baste con ejecutar para alcanzar el objetivo.",
      "¿Qué tres rasgos destacó Köhler en las soluciones de sus chimpancés?|Súbita, sin vacilación y transferible|Gradual, reforzada y transferible|Súbita, imitada y poco transferible|Estos rasgos separaban la solución del ensayo y error, que progresa de forma gradual.",
      "Según la Gestalt, ¿qué impide resolver el problema de los nueve puntos?|Una restricción perceptiva no enunciada|La falta de práctica con el lápiz|La sobrecarga de la memoria de trabajo|La configuración impone el supuesto de no salir del cuadrado, aunque nadie lo haya enunciado."
    ],
    inc: [
      "Sobre la explicación gestáltica|Se resuelve reteniendo las respuestas reforzadas|La solución llega al reorganizar los elementos|El insight acompaña a la reestructuración|Retener lo que funciona es el ensayo y error del aprendizaje animal, la explicación que la Gestalt rechazó."
    ],
    seq: [],
    cls: [
      "Tipo de pensamiento|Reproductivo: solución aprendida; experiencia y hábito; problemas ya resueltos|Productivo: organización nueva; comprensión de la estructura; problemas nuevos"
    ] },
  { t: "Fijeza funcional y Einstellung",
    tip: "En los dos obstáculos mejor documentados, el conocimiento previo estorba. La fijeza funcional impide usar un objeto de un modo distinto a su función habitual, como en la vela de Duncker o las cuerdas de Maier. El efecto Einstellung lleva a repetir un procedimiento que funcionó aunque haya otro más sencillo, como en las jarras de Luchins (1942). En la primera se fija la función de un objeto, y en el segundo, un procedimiento.",
    v: [
      "Fijeza funcional=Dificultad para usar un objeto de un modo distinto a su función habitual",
      "Efecto Einstellung=Seguir aplicando un procedimiento que funcionó aunque exista otro más sencillo",
      "Problema de la vela=Fijar una vela a la pared con una caja de chinchetas y cerillas (Duncker)",
      "Adamson (1952)=Réplica con 57 participantes, con un 86 % de éxito con cajas vacías y un 41 % con llenas",
      "Problema de las dos cuerdas=Atarlas haciendo oscilar unos alicates como un péndulo (Maier, 1931)",
      "Pista de Maier=Rozar una cuerda para moverla, lo que ayudaba sin que se reconociera",
      "Problema de las jarras=Obtener una cantidad exacta de agua con tres jarras A, B y C (Luchins)",
      "Problema de extinción=Ensayo de Luchins que solo se resuelve por la vía simple A − C"
    ],
    g: [
      "En el problema de la vela, la solución es usar la caja como ___.|repisa|martillo|recipiente",
      "Adamson (1952) halló que resolvía cerca del 86 % cuando las cajas se daban ___.|vacías|llenas|abiertas",
      "En el problema de las dos cuerdas, la solución es hacer oscilar una de ellas como un ___.|péndulo|látigo|columpio",
      "Los problemas de entrenamiento de Luchins se resolvían con la fórmula ___.|B − A − 2C|A − B − 2C|B − 2A − C",
      "En una réplica con protocolos verbales, alrededor del ___ de las respuestas iniciales seguía la vía aprendida.|85 %|41 %|23 %"
    ],
    tf: [
      "Los participantes de Maier solían mencionar después que la cuerda en movimiento les había dado la idea.|F|A menudo no mencionaban la pista: actuaba sin que se reconociera como origen de la idea.",
      "La consigna «No seas ciego», escrita en la hoja, reducía en parte el efecto Einstellung.|V",
      "El problema de la vela lo ideó Köhler en sus estudios con chimpancés.|F|Es de Duncker (1945). Atribuirlo a Köhler es una confusión típica.",
      "Los grupos de Duncker eran muy pequeños, por lo que el dato de la vela se cita sobre todo a partir de réplicas.|V"
    ],
    q: [
      "Tras años con la misma ruta al trabajo, Ana sigue tomándola aunque una calle nueva le ahorraría diez minutos. ¿Qué fenómeno muestra?|Efecto Einstellung|Fijeza funcional|Impasse representacional|Se fija un procedimiento de solución. En la fijeza funcional lo que se fija es la función de un objeto.",
      "Durante una acampada, nadie ve que la cuchara puede usarse como destornillador. ¿Qué fenómeno ilustra?|Fijeza funcional|Efecto Einstellung|Relajación de restricciones|El objeto se ve solo en su función habitual. El Einstellung afecta a procedimientos, no a objetos.",
      "¿Qué resultado obtuvo Luchins con los participantes no entrenados?|Veían enseguida la vía corta|Usaban también la fórmula larga|Fallaban el problema de extinción|Sin entrenamiento no había disposición mental previa, y la vía simple aparecía de inmediato.",
      "En el resumen de Landrum (1990) sobre el problema de las dos cuerdas, ¿qué proporción lo resolvió sin ayuda?|Alrededor del 39 %|Alrededor del 23 %|Alrededor del 86 %|Cerca del 39 % lo resolvió sin ayuda, del 38 % tras las pistas y del 23 % no lo resolvió (cifras aproximadas)."
    ],
    inc: [
      "Sobre la fijeza funcional y el Einstellung|En el Einstellung se fija la función de un objeto|Luchins lo demostró con el problema de las jarras|Maier estudió el problema de las dos cuerdas|En el Einstellung se fija un procedimiento. Fijar la función de un objeto es la fijeza funcional."
    ],
    seq: [
      "Fases del problema de las jarras de Luchins|Problemas de entrenamiento con B − A − 2C>Problemas críticos con dos vías posibles>Problema de extinción solo con A − C"
    ],
    cls: [
      "Obstáculo|Fijeza funcional: función de un objeto; vela de Duncker; dos cuerdas de Maier|Efecto Einstellung: procedimiento de solución; jarras de Luchins; ruta de siempre al trabajo"
    ] },
  { t: "Cambio representacional y neurociencia del insight",
    tip: "Ohlsson (1992) traduce la reestructuración a términos cognitivos: una representación inadecuada lleva al impasse, y el insight surge cuando la representación cambia por relajación de restricciones o por descomposición de fragmentos. Knoblich et al. (1999) lo confirmaron con problemas de cerillas. El insight se asocia a la circunvolución temporal superior anterior derecha y a una ráfaga gamma, y el sueño favoreció descubrir una regla oculta (Wagner et al., 2004).",
    v: [
      "Teoría del cambio representacional=Propuesta de Ohlsson (1992) que traduce la reestructuración a términos cognitivos",
      "Impasse=Sensación de no tener nada más que probar con la representación actual",
      "Relajación de restricciones=Abandonar un supuesto que se había impuesto sin necesidad",
      "Descomposición de fragmentos=Separar una unidad percibida como indivisible en partes recombinables",
      "Problemas de cerillas=Igualdades falsas en números romanos que se corrigen moviendo un palo",
      "Asociados remotos compuestos=Tres palabras para las que hay que hallar una cuarta común",
      "Ráfaga gamma=Actividad en la región temporal derecha poco antes de responder con insight",
      "Tarea de reducción numérica=Transformar series de cifras con reglas que esconden un atajo (Wagner)"
    ],
    g: [
      "Knoblich et al. (1999) hallaron que los problemas más difíciles eran los que exigían ___ una restricción arraigada.|relajar|descomponer|aplicar",
      "Para «pasta», «cepillo» e «hilo», la palabra que forma expresión con las tres es «___».|dental|limpio|fino",
      "Las soluciones con insight se asociaron a la porción ___ de la circunvolución temporal superior derecha.|anterior|posterior|medial",
      "En el estudio de Wagner et al. (2004), descubrió la regla el ___ del grupo que había dormido.|59,1 %|22,7 %|86,0 %",
      "Deshacer los palos cruzados de la X exige ___ un fragmento compacto.|descomponer|relajar|codificar"
    ],
    tf: [
      "En los problemas de cerillas, cambiar solo el valor de un número resultó el tipo de cambio más fácil.|V",
      "La circunvolución temporal superior derecha es el centro del insight.|F|Es una región dentro de una red más amplia, no «el centro del insight».",
      "En la tarea de Wagner et al. (2004), el atajo oculto era que la respuesta final coincidía siempre con la segunda.|V",
      "Para Ohlsson, el impasse aparece cuando la representación inicial activa demasiados operadores a la vez.|F|Aparece cuando la representación es inadecuada y la búsqueda se agota: no queda nada más que probar."
    ],
    q: [
      "Un participante intenta corregir una igualdad de cerillas y, tras mucho probar, se da cuenta de que también puede cambiar el signo de la operación. Según Ohlsson, ¿qué mecanismo ha actuado?|Relajación de restricciones|Descomposición de fragmentos|Análisis de medios y fines|Abandona el supuesto autoimpuesto de que los signos no se tocan, el cambio más difícil en Knoblich et al. (1999).",
      "¿Qué tipo de problemas usaron Jung-Beeman et al. (2004)?|Asociados remotos compuestos|Problemas de cerillas romanas|Tareas de reducción numérica|Tres palabras para las que se busca una cuarta. Tras cada solución se indicaba si había llegado por insight o de forma analítica.",
      "¿Qué función se ha propuesto para la región temporal derecha asociada al insight?|Integrar asociaciones semánticas lejanas|Inhibir la respuesta intuitiva inicial|Mantener la meta en la memoria de trabajo|Integraría asociaciones lejanas, lo que encaja con un acceso repentino a una relación poco evidente. No es «el centro del insight».",
      "¿Qué condición fue necesaria para que el sueño favoreciera el descubrimiento del atajo en Wagner et al. (2004)?|Una sesión previa de práctica|Dormir antes de ver la tarea|Recibir una pista sobre la regla|El sueño ayudó solo después de practicar con la tarea, lo que contradice la idea del insight sin trabajo previo."
    ],
    inc: [
      "Sobre el insight según Ohlsson y la neurociencia|El insight surge sin un cambio de representación|El impasse precede al cambio de representación|El sueño favoreció hallar el atajo de la tarea|Para Ohlsson, el insight es precisamente un cambio de representación que activa conocimientos antes no disponibles."
    ],
    seq: [
      "Dificultad en los problemas de cerillas, de menor a mayor|Cambiar el valor de un número>Descomponer un fragmento compacto>Relajar una restricción arraigada"
    ],
    cls: [
      "Mecanismo de Ohlsson|Relajación de restricciones: salir del cuadrado; cambiar un signo de la operación|Descomposición de fragmentos: deshacer los palos cruzados de la X; separar una unidad compacta"
    ] },
  { t: "Insight frente a procesos ordinarios",
    tip: "El insight se vive de forma distinta: en Metcalfe y Wiebe (1987), el sentimiento de calor salta justo antes de la solución, mientras que en los problemas algebraicos sube poco a poco. Weisberg y Perkins sostienen que bastan la memoria y los heurísticos corrientes. Hoy dominan las posturas integradoras, que sitúan un cambio de representación no deliberado entre fases de búsqueda ordinaria, y el insight no se considera un golpe de suerte.",
    v: [
      "Sentimiento de calor=Sensación de cercanía a la solución que se indica cada poco tiempo",
      "Metcalfe y Wiebe (1987)=Midieron la sensación de cercanía en problemas algebraicos y de insight",
      "Procesos ordinarios=Postura según la cual la solución surge de la memoria y heurísticos corrientes",
      "Weisberg y Perkins=Autores que niegan que el insight requiera mecanismos especiales",
      "Posturas integradoras=Insight como cambio de representación entre fases de búsqueda corriente",
      "Solución algorítmica=Avance paso a paso en problemas bien definidos y con reglas claras",
      "Algoritmo=Procedimiento que garantiza la solución si se aplica bien",
      "Sio y Ormerod (2009)=Metaanálisis según el cual la incubación ayuda más tras una larga preparación"
    ],
    g: [
      "En los problemas de insight, el sentimiento de calor se mantiene bajo y ___ justo antes de la solución.|salta|baja|oscila",
      "En los problemas ___, la sensación de cercanía sube de forma gradual.|algebraicos|de insight|de cerillas",
      "Según las posturas integradoras, el cambio de representación no se controla de forma ___.|deliberada|automática|inconsciente",
      "Un obstáculo típico de la solución por insight son las restricciones ___.|autoimpuestas|de cálculo|de memoria",
      "En el esquema de Wallas (1926), la iluminación llega después de una ___ intensa.|preparación|verificación|evaluación"
    ],
    tf: [
      "En el estudio de Metcalfe y Wiebe, las personas podían prever cuándo iban a resolver un problema de insight.|F|Sabían cuándo progresaban en los problemas rutinarios, pero no podían prever la solución de los de insight.",
      "Que avisar de que se puede salir del cuadrado ayude poco apoya la postura de los procesos ordinarios.|V",
      "Las posturas integradoras ven el insight como un proceso aparte que sustituye a la búsqueda ordinaria.|F|Lo ven como un cambio de representación inserto entre fases de búsqueda ordinaria, no como un proceso aparte.",
      "La solución por insight y la algorítmica pueden alternarse dentro de un mismo problema.|V"
    ],
    q: [
      "Marta prepara un horario con método durante media hora y, de pronto, ve que todo encaja si cambia de día una asignatura que daba por fija. ¿Qué ha ocurrido?|Ha relajado una restricción autoimpuesta|Ha aplicado un algoritmo hasta el final|Ha sufrido un efecto Einstellung|Avanzaba de forma algorítmica, y el cambio súbito llega al abandonar un supuesto que se había impuesto.",
      "¿Qué datos se citan a favor de la postura de los procesos especiales?|Sentimiento de calor y actividad cerebral|Escasa eficacia de las pistas perceptivas|Uso de búsqueda en memoria y heurísticos|El calor, la actividad cerebral diferenciada y la relajación de restricciones sugieren un cambio cualitativo al resolver.",
      "¿Qué dato contradice la idea de que el insight es un golpe de suerte sin trabajo previo?|La incubación ayuda más tras más preparación|La ráfaga gamma justo antes de la respuesta|El salto del sentimiento de calor al final|Sio y Ormerod (2009) hallaron que la incubación ayuda más cuanto más larga ha sido la preparación previa.",
      "¿Qué rasgo corresponde a la solución algorítmica y no a la solución por insight?|Sentimiento de cercanía creciente|Representación inicial engañosa|Bloqueo seguido de cambio súbito|En la solución algorítmica se avanza paso a paso, y la sensación de cercanía crece a medida que se progresa."
    ],
    inc: [
      "Sobre el debate del insight|El debate se cerró a favor de los procesos especiales|Dominan hoy las posturas integradoras|Sigue abierto qué provoca el cambio de representación|El debate sigue abierto: dominan las posturas integradoras y se discute cómo interpretar los correlatos cerebrales."
    ],
    seq: [
      "Secuencia según las posturas integradoras|Búsqueda ordinaria con la representación inicial>Impasse>Cambio de representación no deliberado>Búsqueda corriente con la nueva representación"
    ],
    cls: [
      "Tipo de solución|Por insight: bloqueo y cambio súbito; calor bajo hasta el final; caja de chinchetas como repisa|Algorítmica: paso a paso; calor creciente; despejar una incógnita"
    ] }
] },
{ n: 14, t: "Solución de problemas II: el procesamiento de la información", cap: 5, pir: "media", mods: [
  { t: "El espacio del problema",
    tip: "Newell y Simon (1972) describen un problema como un espacio de estados en el que se busca un camino, con estado inicial, meta, operadores, restricciones y estados intermedios. La Torre de Hanói con tres discos tiene 27 estados y se resuelve en un mínimo de 7 movimientos (2ⁿ − 1). Como la memoria de trabajo impide explorarlo entero, la búsqueda es selectiva, y los problemas pueden estar bien o mal definidos.",
    v: [
      "Espacio del problema=Conjunto de situaciones posibles por las que puede pasar quien resuelve",
      "Estado inicial=Situación de partida",
      "Estado meta=Situación que se quiere alcanzar",
      "Operador=Acción que transforma un estado en otro",
      "Restricciones=Reglas que limitan qué acciones se aplican y cuándo",
      "Torre de Hanói=Trasladar discos entre tres varillas sin poner uno sobre otro menor",
      "Problema mal definido=Estado inicial, meta u operadores poco especificados",
      "Inducción de estructura=Tipo de Greeno en que hay que descubrir la relación entre elementos"
    ],
    g: [
      "Con tres discos, el espacio de la Torre de Hanói tiene ___ estados posibles.|27|7|9",
      "Con n discos, el mínimo de movimientos de la Torre de Hanói es ___.|2ⁿ − 1|3ⁿ − 1|2n − 1",
      "Según Greeno (1978), los anagramas son problemas de ___.|ordenación|transformación|inducción de estructura",
      "Newell y Simon publicaron «Human Problem Solving» en ___.|1972|1956|1978",
      "Como la memoria de trabajo es limitada, la búsqueda humana es ___.|selectiva|exhaustiva|aleatoria"
    ],
    tf: [
      "Organizar una boda es un ejemplo de problema bien definido, con operadores explícitos.|F|Es mal definido: la meta es vaga, los operadores hay que inventarlos y hay varias soluciones más o menos buenas.",
      "En la clasificación de Greeno (1978), la Torre de Hanói es un problema de ordenación.|F|Es de transformación: se llega a la meta aplicando una secuencia de operadores. Los anagramas son de ordenación.",
      "Una representación inadecuada puede dejar la solución fuera del espacio de búsqueda.|V",
      "El marco del espacio del problema ha sido muy fértil con problemas bien definidos.|V"
    ],
    q: [
      "En la Torre de Hanói, la regla «no colocar nunca un disco sobre otro más pequeño» es…|una restricción|un operador|un estado meta|Las restricciones limitan qué operadores se pueden aplicar. Mover un disco es el operador.",
      "Según Greeno (1978), ¿de qué tipo es completar una serie numérica?|Inducción de estructura|Transformación de estados|Ordenación de elementos|Hay que descubrir la relación entre los elementos, como en las analogías. Los anagramas son de ordenación.",
      "Un estudiante quiere «mejorar la relación con su compañero de piso», pero no sabe qué significaría lograrlo ni qué podría hacer. ¿Qué problema tiene?|Uno mal definido|Uno de transformación|Uno bien definido|La meta es vaga y los operadores están abiertos, rasgos del problema mal definido.",
      "¿Por qué el espacio de la Torre de Hanói con tres discos tiene 27 estados?|Cada disco va en una de tres varillas|Hay tres discos y nueve movimientos|Cada movimiento triplica los estados|Fijada la varilla, la posición en la pila la determina el tamaño, así que hay 3 × 3 × 3 estados."
    ],
    inc: [
      "Sobre el espacio del problema|Casi siempre se explora por completo|Los operadores transforman un estado en otro|Resolver consiste en buscar un camino en él|El espacio crece muy deprisa y la memoria de trabajo es limitada, por eso casi nunca se explora entero."
    ],
    seq: [],
    cls: [
      "Tipo de problema|Bien definido: Torre de Hanói; sudoku; meta clara|Mal definido: organizar una boda; meta vaga; operadores abiertos"
    ] },
  { t: "Heurísticos de búsqueda",
    tip: "Un algoritmo garantiza la solución si se aplica bien, y un heurístico reduce la búsqueda sin garantizar el éxito. Newell y Simon describieron el análisis de medios y fines, que crea submetas y usaba el GPS, la subida de la cuesta, con el riesgo de los máximos locales, y el trabajo hacia atrás. La analogía falla sobre todo al recuperar el análogo, y nada de esto debe confundirse con los heurísticos de juicio de Tversky y Kahneman.",
    v: [
      "Heurístico=Atajo que reduce la búsqueda pero no garantiza el éxito",
      "Análisis de medios y fines=Reducir la diferencia principal con la meta y crear submetas",
      "Submeta=Conseguir las condiciones para poder aplicar un operador",
      "Subir la cuesta=Elegir en cada paso el movimiento que deja la situación más parecida a la meta",
      "Máximo local=Estado desde el que todo movimiento parece alejar de la meta sin haberla alcanzado",
      "Trabajar hacia atrás=Partir de la meta y buscar qué estado previo permitiría alcanzarla",
      "General Problem Solver=Programa de Newell, Shaw y Simon, sucesor del Logic Theorist",
      "Misioneros y caníbales=Cruce de un río que exige devolver a dos personas a la orilla de partida"
    ],
    g: [
      "Probar una a una las combinaciones de un candado de cuatro cifras puede exigir hasta ___ intentos.|10.000|4.000|1.000",
      "El heurístico que implementaba el GPS era el análisis de medios y ___.|fines|metas|operadores",
      "En el problema de los misioneros y los caníbales, la barca tiene ___ plazas.|dos|tres|cuatro",
      "Trabajar hacia atrás es inútil si la meta es ___.|vaga|única|lejana",
      "La mayor dificultad de la analogía es ___ espontáneamente el análogo adecuado.|recuperar|aplicar|construir"
    ],
    tf: [
      "Subir la cuesta exige mucha memoria, porque obliga a mantener muchas submetas.|F|Es sencillo y exige poca memoria. La sobrecarga por muchas submetas es el riesgo del análisis de medios y fines.",
      "Los heurísticos de búsqueda de Newell y Simon son los mismos que los heurísticos de juicio de Tversky y Kahneman.|F|Unos guían la búsqueda de una solución y otros, la estimación de probabilidades, como la representatividad.",
      "El General Problem Solver fue el sucesor del Logic Theorist (1956).|V",
      "Empezar por las fechas importantes del dueño para abrir su candado es un heurístico.|V"
    ],
    q: [
      "Para llegar a un congreso en otra ciudad, Pablo ve que la diferencia principal es la distancia, decide coger el tren y se propone llegar a la estación pidiendo un taxi. ¿Qué heurístico usa?|Medios y fines|Trabajar hacia atrás|Subir la cuesta|Reduce la diferencia principal y crea submetas sucesivas (estación, taxi) para poder aplicar el operador.",
      "Quien debe estar en el aeropuerto a las nueve calcula la facturación, el trayecto, la hora de salir de casa y la de despertarse. ¿Qué heurístico aplica?|Trabajar hacia atrás|Análisis de medios y fines|Subir la cuesta|Parte de la meta y retrocede hasta el estado inicial, algo útil cuando la meta es única y está bien definida.",
      "¿Por qué muchas personas se atascan en el problema de los misioneros y los caníbales?|Exige un movimiento que parece retroceder|Hay que crear demasiadas submetas a la vez|Hay que recuperar un análogo superficial|Subir la cuesta lleva a un máximo local: devolver a dos personas a la orilla de partida parece alejar de la meta.",
      "¿Qué distingue un algoritmo de un heurístico?|El algoritmo garantiza la solución si existe|El heurístico garantiza una solución rápida|El algoritmo reduce la búsqueda al mínimo|Un algoritmo bien aplicado garantiza la solución, aunque sea lento. El heurístico reduce la búsqueda sin garantizar el éxito."
    ],
    inc: [
      "Sobre los heurísticos de búsqueda|El GPS implementaba el heurístico de subir la cuesta|Un heurístico reduce la búsqueda sin garantizar el éxito|Trabajar hacia atrás parte de la meta y retrocede|El General Problem Solver de Newell, Shaw y Simon implementaba el análisis de medios y fines."
    ],
    seq: [
      "Análisis de medios y fines|Comparar el estado actual con la meta>Identificar la diferencia más importante>Elegir un operador que la reduzca>Crear una submeta si no puede aplicarse"
    ],
    cls: [
      "Heurístico de búsqueda|Medios y fines: submetas; GPS; viaje al congreso|Subir la cuesta: máximos locales; misioneros y caníbales|Trabajar hacia atrás: partir de la meta; llegar al aeropuerto a las nueve"
    ] },
  { t: "Pericia y solución de problemas",
    tip: "La ventaja del experto no es una capacidad general, sino conocimiento organizado. Chase y Simon (1973) vieron que los maestros de ajedrez recordaban más piezas en posiciones reales, pero no al azar, porque reconocen fragmentos. Chi, Feltovich y Glaser (1981) hallaron que los expertos clasifican los problemas de física por principios profundos y los novatos, por rasgos superficiales. La pericia es específica del dominio y puede producir efecto Einstellung.",
    v: [
      "Pericia=Dominio experto basado en un conocimiento acumulado y organizado",
      "Fragmento=Unidad que agrupa varios elementos y ocupa un solo hueco en la memoria",
      "Chase y Simon (1973)=Tableros de ajedrez reales o al azar que había que reproducir de memoria",
      "De Groot=Autor de los trabajos previos sobre memoria de posiciones de ajedrez",
      "Chi, Feltovich y Glaser=Compararon cómo clasifican problemas de física expertos y novatos (1981)",
      "Rasgos superficiales=Planos inclinados o poleas, criterio de agrupación de los novatos",
      "Principio profundo=Ley que permite resolver, como la conservación de la energía",
      "Especificidad del dominio=La ventaja experta no se extiende a otros campos"
    ],
    g: [
      "Chase y Simon (1973) partieron de trabajos previos de ___ sobre el ajedrez.|De Groot|Newell|Greeno",
      "Para un experto, un enroque típico de cinco piezas ocupa ___ hueco en la memoria de trabajo.|un solo|cinco|dos",
      "Los novatos de Chi et al. agrupaban los problemas por rasgos ___.|superficiales|profundos|matemáticos",
      "Frente al novato, el experto dedica ___ tiempo a entender el problema antes de actuar.|más|menos|el mismo",
      "La relación entre experiencia y decisión rápida se retoma con la decisión primada por ___ (Klein, 1998).|reconocimiento|recompensa|simulación"
    ],
    tf: [
      "Los maestros de ajedrez recuerdan más piezas que los principiantes incluso cuando están colocadas al azar.|F|Con posiciones al azar la ventaja casi desaparecía: depende de reconocer configuraciones con sentido.",
      "Reconocer una configuración sugiere al experto los movimientos que suelen funcionar en ella.|V",
      "Un gran maestro de ajedrez resuelve mejor que la media los problemas de física.|F|La pericia es específica del dominio: su ventaja no se transfiere a otros campos.",
      "Los procedimientos muy practicados del experto pueden producir un efecto Einstellung ante un problema nuevo.|V"
    ],
    q: [
      "Una mecánica con experiencia escucha un motor unos segundos y piensa en la correa de distribución, mientras un aprendiz revisa pieza a pieza. ¿Qué explica la diferencia?|Un repertorio de patrones de averías|Un oído más fino que el del aprendiz|Una memoria general más amplia|No tiene mejor oído, sino patrones aprendidos, que pueden despistarla si la avería es rara.",
      "¿Cómo clasificaban los expertos los problemas de física en Chi, Feltovich y Glaser (1981)?|Por el principio que permite resolverlos|Por los objetos que aparecen en ellos|Por la longitud del cálculo necesario|Los agrupaban por principios profundos, como la conservación de la energía, aunque su aspecto fuera muy distinto.",
      "¿Qué dos efectos tiene el conocimiento experto sobre la solución de problemas?|Reduce la carga y sugiere el movimiento|Amplía la memoria y acelera el cálculo|Aumenta la búsqueda y la precisión|Manejar fragmentos grandes descarga la memoria de trabajo, y reconocer una configuración activa los movimientos útiles.",
      "¿Qué rasgo describe la búsqueda del experto frente a la del novato?|Reducida y guiada por el reconocimiento|Amplia y guiada por heurísticos generales|Exhaustiva y guiada por algoritmos|El novato busca de forma amplia con heurísticos generales, y el experto apenas necesita buscar."
    ],
    inc: [
      "Sobre la pericia|Se basa en una memoria general superior|Es específica del dominio en que se adquiere|Se basa en conocimiento organizado en fragmentos|La ventaja depende de un conocimiento específico y organizado del dominio, no de una memoria general mejor."
    ],
    seq: [],
    cls: [
      "Nivel de pericia|Novato: rasgos superficiales; elementos sueltos; búsqueda amplia|Experto: principios profundos; fragmentos grandes; búsqueda guiada por el reconocimiento"
    ] },
  { t: "Problemas de la vida diaria y entrenamiento en solución de problemas",
    tip: "Los problemas cotidianos suelen estar mal definidos, con metas en conflicto, información incompleta, opciones por inventar y emociones. D'Zurilla y Goldfried (1971) propusieron entrenar su solución, y D'Zurilla y Nezu distinguieron la orientación hacia el problema, positiva o negativa, y los estilos racional, impulsivo y evitativo. El estilo racional sigue cuatro pasos deliberados, que no deben confundirse con las etapas de Wallas.",
    v: [
      "Orientación hacia el problema=Actitud general con que se afrontan las dificultades",
      "Orientación positiva=Ver los problemas como retos abordables y confiar en resolverlos",
      "Orientación negativa=Ver los problemas como amenazas y dudar de la propia capacidad",
      "Estilo racional=Aplicar de forma sistemática los pasos de solución",
      "Estilo impulsivo=Actuar deprisa, con pocas alternativas y sin evaluarlas",
      "Estilo evitativo=Aplazar, delegar o esperar a que el problema se resuelva solo",
      "Generar alternativas=Producir muchas opciones sin juzgarlas, porque la cantidad favorece la calidad",
      "Pensamiento práctico=Capacidad de adaptar lo que se sabe a la situación concreta"
    ],
    g: [
      "D'Zurilla y Goldfried propusieron el entrenamiento en solución de problemas en ___.|1971|1926|1987",
      "Al generar alternativas, las opciones se producen sin ___ todavía.|juzgarlas|anotarlas|ordenarlas",
      "En el primer paso hay que separar los hechos de las ___.|suposiciones|emociones|alternativas",
      "Al tomar la decisión se valoran las consecuencias a corto y a ___ plazo.|largo|medio|muy corto",
      "Actuar deprisa, con pocas alternativas y sin evaluarlas define el estilo ___.|impulsivo|evitativo|racional"
    ],
    tf: [
      "Los pasos de D'Zurilla y Goldfried describen cómo surge espontáneamente una idea creativa.|F|Eso describen las etapas de Wallas. D'Zurilla y Goldfried proponen un procedimiento deliberado que se puede enseñar.",
      "En los problemas cotidianos, a menudo no se sabe cuál era la mejor solución hasta mucho después.|V",
      "Ver los problemas como amenazas y frustrarse con facilidad corresponde al estilo evitativo.|F|Es la orientación negativa, una actitud general. El estilo evitativo consiste en aplazar, delegar o esperar.",
      "Si la solución aplicada no funciona, el último paso permite volver a un paso anterior.|V"
    ],
    q: [
      "Laura discute con su compañera de piso por la limpieza, piensa que «no tiene arreglo» y deja pasar las semanas. ¿Qué combinación muestra?|Orientación negativa y estilo evitativo|Orientación negativa y estilo impulsivo|Orientación positiva y estilo evitativo|Pensar que no tiene arreglo es orientación negativa, y dejar pasar el tiempo, estilo evitativo.",
      "Laura concreta su problema como «la cocina se queda sucia entre semana». ¿En qué paso está?|Definir y formular el problema|Generar alternativas sin juzgar|Aplicar la solución y verificarla|Concretar el problema, separar hechos de suposiciones y fijar metas realistas es el primer paso.",
      "¿Qué rasgo NO es típico de los problemas de la vida diaria?|Una lista cerrada de operadores|Metas que entran en conflicto|Información que cambia al resolver|En los problemas cotidianos no hay una lista cerrada de operadores: las opciones hay que inventarlas.",
      "¿Qué estilo de solución se entrena con la secuencia de pasos de D'Zurilla?|El racional|El impulsivo|El evitativo|El estilo racional aplica de forma sistemática los pasos: definir, generar alternativas, decidir y verificar."
    ],
    inc: [
      "Sobre los problemas de la vida diaria|Suelen tener una única solución correcta|Intervienen emociones y otras personas|Las opciones hay que inventarlas|La mayoría están mal definidos: hay soluciones mejores y peores, no una sola correcta."
    ],
    seq: [
      "Pasos del entrenamiento de D'Zurilla y Goldfried|Definir y formular el problema>Generar alternativas>Tomar una decisión>Aplicar la solución y verificarla"
    ],
    cls: [
      "Estilo de solución|Racional: pasos sistemáticos; turno semanal a prueba|Impulsivo: actuar deprisa; pocas alternativas sin evaluar|Evitativo: aplazar; delegar; esperar a que se resuelva solo"
    ] }
] },
{ n: 15, t: "Decidir bajo riesgo", cap: 5, pir: "alta", mods: [
  { t: "Utilidad esperada y sus paradojas",
    tip: "Decidir compromete una acción, mientras que juzgar estima probabilidades. La teoría de la utilidad esperada (Von Neumann y Morgenstern, 1944) es normativa y descansa en cuatro axiomas, y Savage (1954) la extendió a probabilidades subjetivas. Allais (1953) mostró violaciones de la independencia por el efecto certeza, y Ellsberg (1961), tras la distinción de Knight entre riesgo e incertidumbre, mostró la aversión a la ambigüedad.",
    v: [
      "Valor esperado=Suma de los resultados multiplicados por sus probabilidades",
      "Utilidad=Valor subjetivo que crece cada vez menos al aumentar la cantidad",
      "Modelo normativo=Indica cómo debería elegir un agente plenamente racional",
      "Axioma de independencia=Un resultado común a dos opciones no debe alterar la preferencia",
      "Transitividad=Si se prefiere A a B y B a C, se prefiere A a C",
      "Utilidad subjetiva esperada=Extensión de Savage (1954) a probabilidades que no están dadas",
      "Efecto certeza=Pasar del 99 % al 100 % pesa mucho más que pasar del 10 % al 11 %",
      "Aversión a la ambigüedad=Evitar las opciones de probabilidad desconocida (Ellsberg, 1961)"
    ],
    g: [
      "Una apuesta con un 50 % de ganar 100 € y un 50 % de no ganar nada tiene un valor esperado de ___.|50 €|100 €|45 €",
      "El axioma de ___ exige que, ante dos opciones, se prefiera una o se sea indiferente.|completitud|continuidad|transitividad",
      "Knight distinguió el riesgo de la incertidumbre en ___.|1921|1944|1961",
      "En problemas como el de Allais, muchas personas eligen A en la primera elección y ___ en la segunda.|D|C|B",
      "La segunda bolsa de Ellsberg contiene ___ bolas en proporción desconocida.|100|50|90"
    ],
    tf: [
      "Quien elige A en la primera elección de Allais debería, por el axioma de independencia, elegir C en la segunda.|V",
      "La paradoja de Ellsberg muestra sobre todo una violación de la independencia por el efecto certeza.|F|Ellsberg muestra aversión a la ambigüedad. El efecto certeza y la violación de la independencia corresponden a Allais.",
      "Abrir un bar en un barrio nuevo es, en términos de Knight, una decisión bajo riesgo.|F|Es incertidumbre: no se conocen las probabilidades. El riesgo supone probabilidades conocidas, como en una ruleta.",
      "Tras Ellsberg, la utilidad esperada sigue siendo la norma, aunque no describe bien cómo se elige.|V"
    ],
    q: [
      "Elena prefiere 45 € seguros a una apuesta con un 50 % de ganar 100 €. ¿Qué concepto explica que no sea irracional?|La utilidad decreciente del dinero|La aversión a la ambigüedad de Ellsberg|El axioma de transitividad de Von Neumann|Lo que cuenta es el valor subjetivo, que crece cada vez menos a medida que aumenta la cantidad.",
      "¿Qué diferencia hay entre juzgar y decidir?|Decidir compromete una acción|Juzgar compromete una acción|Decidir estima una probabilidad|El juicio estima lo probable que es algo. La decisión elige una acción y combina probabilidades con el valor de las consecuencias.",
      "¿Qué explicación se da habitualmente a la paradoja de Allais?|El efecto certeza|La aversión a la ambigüedad|La sensibilidad decreciente|Pasar del 99 % al 100 % de seguridad pesa mucho más que pasar del 10 % al 11 %.",
      "En la tarea de Ellsberg, casi todos prefieren la bolsa conocida tanto si se gana con roja como con negra. ¿Por qué es una paradoja?|Ninguna creencia justifica ambas elecciones|Ambas bolsas tienen el mismo valor esperado|Viola el axioma de completitud|Preferir la conocida para roja implica creer que la otra tiene menos rojas, y entonces convendría para negra."
    ],
    inc: [
      "Sobre la utilidad esperada|Describe bien cómo eligen las personas|Se formalizó a partir de cuatro axiomas|Savage la amplió a probabilidades subjetivas|Es normativa: indica cómo debería elegir un agente racional. Las paradojas muestran que no describe bien la elección."
    ],
    seq: [
      "Cronología de la teoría de la decisión|Knight (1921)>Von Neumann y Morgenstern (1944)>Allais (1953)>Savage (1954)>Ellsberg (1961)"
    ],
    cls: [
      "Paradoja|Allais: axioma de independencia; efecto certeza; 3.000 € seguros|Ellsberg: aversión a la ambigüedad; bolsa de proporción desconocida; incertidumbre"
    ] },
  { t: "Racionalidad limitada y satisfacción",
    tip: "Simon (1955) señaló que nadie conoce todas las alternativas ni calcula sin coste: la racionalidad limitada nace de los límites cognitivos y del entorno. Propuso la satisfacción, que consiste en fijar un nivel de aspiración, elegir la primera opción que lo alcanza y ajustarlo según la búsqueda. De ahí surgieron el programa de heurísticos y sesgos, que mira dónde fallan los atajos, y el de racionalidad ecológica de Gigerenzer, que mira dónde aciertan.",
    v: [
      "Racionalidad limitada=Decisión condicionada por los límites cognitivos y del entorno (Simon)",
      "Satisfacción=Elegir la primera alternativa que alcanza un nivel de aspiración",
      "Satisficing=Término inglés que mezcla «satisfacer» y «bastar»",
      "Nivel de aspiración=Umbral de suficiencia que se rebaja o se eleva según la búsqueda",
      "Optimizar=Buscar de forma exhaustiva la mejor opción posible",
      "Heurísticos y sesgos=Programa de Tversky y Kahneman centrado en los errores sistemáticos",
      "Racionalidad ecológica=Programa de Gigerenzer en el que los atajos funcionan si encajan con el entorno",
      "Heurísticos rápidos y frugales=Decidir por la mejor razón disponible e ignorar el resto"
    ],
    g: [
      "Si tras buscar un tiempo nada alcanza el nivel de aspiración, este se ___.|rebaja|eleva|mantiene",
      "Simon publicó su propuesta de racionalidad limitada en ___.|1955|1974|1996",
      "Los heurísticos rápidos y frugales los propusieron Gigerenzer y ___ (1996).|Goldstein|Tversky|Kahneman",
      "Para Simon, satisfacer es una adaptación ___ a los propios límites.|razonable|irracional|inconsciente",
      "Bajo ___, cuando no se conocen las probabilidades, calcular la utilidad esperada deja de ser posible.|incertidumbre|riesgo|certeza"
    ],
    tf: [
      "Al satisfacer, el nivel de aspiración se mantiene fijo durante toda la búsqueda.|F|Se ajusta: si tras buscar un tiempo nada lo alcanza se rebaja, y si todo lo supera con facilidad se eleva.",
      "El programa de racionalidad ecológica sostiene que ciertos heurísticos pueden igualar a métodos mucho más complejos.|V",
      "Satisfacer garantiza buenas elecciones aunque el nivel de aspiración esté mal fijado.|F|Un nivel de aspiración mal fijado conduce a elecciones pobres: satisfacer no garantiza acertar.",
      "Tanto el programa de heurísticos y sesgos como el de racionalidad ecológica aceptan que la mente no maximiza.|V"
    ],
    q: [
      "Lucía compra el primer portátil ligero, con batería para un día de clase y por debajo de su presupuesto, sin mirar el resto. ¿Qué estrategia sigue?|Satisfacción|Optimización|Ponderación|Fija un nivel de aspiración y elige la primera opción que lo alcanza, como propuso Simon (1955).",
      "Nerea lleva meses sin decidir si acepta un trabajo en otra ciudad porque quiere asegurarse de elegir lo óptimo. ¿Qué riesgo corre?|Que buscar lo óptimo le impida decidir|Que la utilidad esperada sea demasiado baja|Que su nivel de aspiración sea muy bajo|Bajo incertidumbre no puede calcularse la utilidad esperada, y buscar la opción óptima puede llevar a no decidir nunca.",
      "¿Qué dos hechos fundamentan la racionalidad limitada de Simon?|Límites cognitivos y entorno incompleto|Aversión a la pérdida y efecto certeza|Sesgos de juicio y presión emocional|Memoria, atención y tiempo son limitados, y el entorno rara vez ofrece toda la información.",
      "Ante los 300 pisos de alquiler de la ciudad, ¿qué hace quien optimiza?|Compara todos para elegir el mejor|Elige el primero que cumple sus criterios|Rebaja su nivel de aspiración|Optimizar exige una búsqueda exhaustiva de coste muy alto. Quedarse con el primero que cumple es satisfacer."
    ],
    inc: [
      "Sobre la racionalidad limitada|El decisor real conoce todas las alternativas|La memoria y el tiempo no dan para todas las opciones|Las alternativas aparecen poco a poco|Ese es el supuesto de la utilidad esperada que Simon criticó: ninguna persona real cumple esas condiciones."
    ],
    seq: [
      "Estrategia de satisfacción|Fijar un nivel de aspiración>Examinar las alternativas a medida que aparecen>Elegir la primera que alcanza el nivel"
    ],
    cls: [
      "Estrategia|Optimizar: la mejor opción; búsqueda exhaustiva; coste muy alto|Satisfacer: opción suficientemente buena; nivel de aspiración; coste asumible"
    ] },
  { t: "La teoría de la perspectiva",
    tip: "La teoría de la perspectiva (Kahneman y Tversky, 1979) es descriptiva. En la fase de edición se codifican los resultados como ganancias o pérdidas respecto a un punto de referencia, y en la de evaluación se aplican la función de valor, cóncava en ganancias y convexa y más pronunciada en pérdidas, y la de ponderación, que sobrepondera las probabilidades bajas. La estructura se replica, pero λ ronda 1,96, no exactamente 2.",
    v: [
      "Teoría de la perspectiva=Modelo descriptivo de la decisión con riesgo (Kahneman y Tversky, 1979)",
      "Punto de referencia=Nivel respecto al cual se codifican ganancias y pérdidas",
      "Fase de edición=Codificar, simplificar y descartar componentes comunes",
      "Sensibilidad decreciente=Entre 10 € y 20 € se nota más la diferencia que entre 1.010 € y 1.020 €",
      "Aversión a la pérdida=Una pérdida pesa más que una ganancia de la misma cuantía",
      "Pesos de decisión=Probabilidades transformadas por la función de ponderación",
      "Patrón cuádruple=Cuatro actitudes ante el riesgo según dominio y probabilidad (1992)",
      "Ruggeri et al. (2020)=Réplica en 19 países, con el 94 % de los ítems y efectos más atenuados"
    ],
    g: [
      "La función de valor es ___ en las ganancias.|cóncava|convexa|lineal",
      "La función de ponderación ___ las probabilidades bajas.|sobrepondera|infrapondera|ignora",
      "El metaanálisis de Brown et al. (2024) obtuvo una media de λ de ___.|1,955|2,25|1,50",
      "Ruggeri et al. (2020) replicaron los problemas con 4.098 participantes de ___ países.|19|13|36",
      "Quien va perdiendo prefiere ___ antes que aceptar una pérdida segura.|jugársela|retirarse|asegurarse"
    ],
    tf: [
      "En el patrón cuádruple, comprar un décimo de lotería es búsqueda del riesgo en ganancias de probabilidad baja.|V",
      "Las pérdidas pesan exactamente el doble que las ganancias, como establecieron Tversky y Kahneman (1992).|F|El 2,25 procede de un solo estudio sin dispersión. El metaanálisis de Brown et al. (2024) sitúa la media en torno a 1,96.",
      "En pérdidas de probabilidad alta, el patrón cuádruple predice aversión al riesgo.|F|Predice búsqueda del riesgo, como seguir litigando para evitar una condena casi segura.",
      "La función de ponderación explica el efecto certeza de Allais.|V"
    ],
    q: [
      "A Raúl le suben el sueldo un 3 %. Se alegra porque esperaba congelación, pero se decepciona al saber que a sus compañeros se lo han subido un 6 %. ¿Qué rasgo de la función de valor ilustra?|Dependencia del punto de referencia|Sensibilidad decreciente a las ganancias|Aversión a la pérdida de igual cuantía|Lo que se valora son cambios respecto a una referencia, no estados finales.",
      "Aceptar un acuerdo seguro antes que ir a juicio con buenas opciones corresponde a…|aversión al riesgo en ganancias probables|búsqueda del riesgo en ganancias probables|aversión al riesgo en pérdidas improbables|Con ganancias de probabilidad alta se prefiere lo seguro. La aversión en pérdidas improbables es contratar un seguro.",
      "¿Qué hace la función de ponderación con una probabilidad del 90 %?|La infrapondera|La sobrepondera|La usa tal cual|La curva en S invertida sobrepondera las probabilidades bajas e infrapondera las medias y altas.",
      "¿Qué se discute hoy de la teoría de la perspectiva?|La magnitud de la aversión a la pérdida|La forma en S de la función de valor|Su replicación en otros países|La estructura general es sólida (Ruggeri et al., 2020). Se discute cuánto pesan las pérdidas y si es un principio general."
    ],
    inc: [
      "Sobre la teoría de la perspectiva|Es un modelo normativo de cómo se debe elegir|Valora cambios respecto a un punto de referencia|Distingue una fase de edición y otra de evaluación|Es descriptiva: no pretende decir cómo se debe elegir, sino recoger de forma sistemática cómo se elige."
    ],
    seq: [],
    cls: [
      "Actitud en el patrón cuádruple|Aversión al riesgo: acuerdo seguro antes que juicio; contratar un seguro|Búsqueda del riesgo: décimo de lotería; seguir litigando ante una condena casi segura"
    ] },
  { t: "Heurísticos de juicio y efectos del punto de referencia",
    tip: "Los juicios de probabilidad usan disponibilidad, representatividad y anclaje, este último con efectos grandes en Many Labs 1. El punto de referencia produce el efecto marco, como en la enfermedad asiática, además del efecto dotación, el sesgo del statu quo y la falacia del coste hundido. El marco es robusto, pero menor que en el estudio original (d de 1,13 frente a 0,60).",
    v: [
      "Disponibilidad=Estimar la frecuencia por la facilidad con que vienen ejemplos a la mente",
      "Representatividad=Juzgar por el parecido con un caso típico, desatendiendo la tasa base",
      "Anclaje y ajuste=Partir de una cifra inicial y ajustarla poco",
      "Efecto marco=Descripciones equivalentes del mismo problema llevan a elecciones distintas",
      "Enfermedad asiática=Problema de 600 vidas presentado como salvadas o como muertes (1981)",
      "Efecto dotación=La disposición a aceptar por lo propio supera a la disposición a pagar",
      "Sesgo del statu quo=Mantener la opción actual aunque haya alternativas mejores",
      "Coste hundido=Seguir invirtiendo por lo ya pagado aunque no compense"
    ],
    g: [
      "En el marco de pérdida de la enfermedad asiática, el ___ eligió el programa arriesgado.|78 %|72 %|50 %",
      "Kahneman, Knetsch y Thaler describieron el efecto dotación en ___.|1990|1979|1981",
      "El metaanálisis de Kühberger (1998) estimó para el efecto marco una d de alrededor de ___.|0,31|0,60|1,13",
      "En Many Labs 1, la falacia del coste hundido se replicó con un tamaño ___.|pequeño|grande|nulo",
      "Sobrestimar el riesgo de incendio tras un verano con muchos en las noticias se debe al heurístico de ___.|disponibilidad|representatividad|anclaje"
    ],
    tf: [
      "En el problema de la enfermedad asiática, los programas A y C son idénticos.|V",
      "En el marco de pérdida, la mayoría muestra aversión al riesgo y elige el programa seguro.|F|En las pérdidas aparece búsqueda del riesgo: el 78 % eligió el programa arriesgado. Es una confusión típica.",
      "En Many Labs 1, el efecto marco obtuvo un tamaño mayor que en el estudio original.|F|Fue menor, d de 0,60 frente a 1,13 en el original, aunque se replicó.",
      "Desprenderse de un objeto propio se codifica como pérdida, lo que explica el efecto dotación.|V"
    ],
    q: [
      "Iván se queda hasta el final de una película aburrida porque la entrada le costó 10 €. ¿Qué fenómeno muestra?|Coste hundido|Statu quo|Efecto dotación|El dinero ya está gastado y no debería influir. En Many Labs 1 el efecto se replicó, pero con un tamaño pequeño.",
      "¿Por qué se invierte la preferencia en la enfermedad asiática?|Las muertes sitúan las opciones en la zona convexa|Las vidas salvadas activan la aversión a la pérdida|Las muertes se codifican con probabilidad baja|Las vidas salvadas sitúan las opciones en la zona cóncava, con aversión al riesgo, y las muertes, en la convexa.",
      "Un yogur «con un 90 % sin grasa» parece más sano que otro «con un 10 % de grasa». ¿Qué efecto es?|Efecto marco|Efecto dotación|Efecto anclaje|Dos descripciones equivalentes del mismo producto llevan a valoraciones distintas.",
      "Una compañía telefónica sabe que sus clientes rara vez cambian de tarifa aunque haya otras mejores. ¿Qué sesgo aprovecha?|Sesgo del statu quo|Efecto de anclaje|Sesgo de disponibilidad|Cambiar supone arriesgar pérdidas, y como las pérdidas pesan más, se mantiene la opción actual."
    ],
    inc: [
      "Sobre los heurísticos de juicio|La representatividad se basa en recordar ejemplos|El anclaje parte de una cifra inicial y ajusta poco|La representatividad desatiende la tasa base|La facilidad de recordar ejemplos define la disponibilidad. La representatividad juzga por el parecido con un caso típico."
    ],
    seq: [],
    cls: [
      "Heurístico de juicio|Disponibilidad: facilidad de recordar ejemplos; incendios en las noticias|Representatividad: parecido con un caso típico; desatención de la tasa base|Anclaje: cifra inicial; ajuste insuficiente"
    ] }
] },
{ n: 16, t: "Decidir en el mundo real", cap: 5, pir: "media", mods: [
  { t: "La sobrecarga de elección",
    tip: "En el estudio de las mermeladas (Iyengar y Lepper, 2000), 24 variedades atraían a más gente pero vendían mucho menos que 6. Sin embargo, el metaanálisis de Scheibehenne et al. (2010) halló un efecto medio prácticamente nulo (D de 0,02). Chernev et al. (2015) concluyeron que la sobrecarga es condicional y depende de la complejidad, la dificultad, la incertidumbre de preferencias y la meta.",
    v: [
      "Sobrecarga de elección=Peor decisión o satisfacción con muchas opciones, efecto condicional",
      "Estudio de las mermeladas=Puesto de degustación con 24 o 6 variedades (Iyengar y Lepper, 2000)",
      "Scheibehenne et al. (2010)=Metaanálisis de 50 experimentos con un efecto medio prácticamente nulo",
      "Chernev et al. (2015)=Metaanálisis que halló una sobrecarga condicionada a cuatro moderadores",
      "Complejidad del conjunto=Opciones difíciles de comparar o sin una claramente mejor",
      "Incertidumbre de preferencias=No saber bien qué se quiere ni dominar el tema",
      "Meta de decisión=Buscar elegir y comprometerse, no solo curiosear",
      "Dificultad de la tarea=Poco tiempo, muchos atributos o exigencia de justificar la elección"
    ],
    g: [
      "Ante 24 mermeladas compró alrededor del ___ de quienes se detuvieron.|3 %|30 %|60 %",
      "El efecto medio en Scheibehenne et al. (2010) fue D de ___.|0,02|0,43|0,60",
      "Chernev et al. (2015) analizaron 99 observaciones con ___ participantes.|7.202|5.036|2.141",
      "Ordenar y ___ las opciones por categorías ayuda a reducir la sobrecarga.|agrupar|ampliar|ocultar",
      "Fijar un nivel de aspiración para elegir sigue la línea de la ___ de Simon.|satisfacción|maximización|ponderación"
    ],
    tf: [
      "En el estudio de las mermeladas, el puesto con 24 variedades atrajo a más clientes que el de 6.|V",
      "Los metaanálisis confirmaron que demasiadas opciones paralizan siempre la decisión.|F|Scheibehenne et al. hallaron un efecto medio prácticamente nulo, y Chernev et al., un efecto solo condicional.",
      "Un aficionado al café con preferencias claras suele salir perjudicado ante una carta larga de cafés.|F|Un gran surtido no perjudica a quien sabe qué busca: la sobrecarga es más probable con preferencias inciertas.",
      "Según Chernev et al. (2015), la sobrecarga es más probable cuando se busca elegir y comprometerse que cuando solo se curiosea.|V"
    ],
    q: [
      "Marcos debe elegir una de las 40 optativas de su grado. Filtra por horario compatible y por sus dos áreas de interés, y le quedan cinco. ¿Qué ha hecho?|Aclarar preferencias y filtrar|Ampliar el surtido para comparar|Elegir al azar entre las cuarenta|Decidir primero qué importa y filtrar por ello vuelve manejable la comparación y reduce la sobrecarga.",
      "Elegir seguro médico en una sola tarde, con muchos atributos, corresponde al moderador…|dificultad de la tarea|complejidad del conjunto|meta de decisión|Poco tiempo y muchos atributos aumentan la dificultad de la tarea, uno de los cuatro moderadores de Chernev et al.",
      "¿Qué conclusión se extrae de Scheibehenne et al. (2010)?|No hay una regla general de sobrecarga|La sobrecarga es grande y consistente|Más opciones siempre mejoran la decisión|Unos estudios hallaban sobrecarga, otros lo contrario y otros nada, con un efecto medio de D de 0,02.",
      "¿Qué lección general ilustra la historia de la sobrecarga de elección?|Un resultado llamativo se generalizó pronto|Un metaanálisis basta para descartar un efecto|Un estudio de campo vale más que un metaanálisis|Se difundió como ley general antes de que la investigación acumulada valorara su tamaño."
    ],
    inc: [
      "Sobre la sobrecarga de elección|Es un efecto general y robusto en cualquier contexto|Puede perjudicar a quien no tiene preferencias claras|Ordenar y agrupar las opciones ayuda a reducirla|Es condicional: aparece con opciones complejas, tareas difíciles, preferencias inciertas y la meta de elegir."
    ],
    seq: [
      "Investigación sobre la sobrecarga de elección|Iyengar y Lepper (2000)>Scheibehenne, Greifeneder y Todd (2010)>Chernev et al. (2015)"
    ],
    cls: [] },
  { t: "Decisión naturalista y marcador somático",
    tip: "La decisión naturalista estudia a profesionales en situaciones reales. Klein (1998) propuso la decisión primada por reconocimiento: reconocer la situación, simular mentalmente una acción y ejecutarla o modificarla, una forma de satisfacción guiada por la pericia. Damasio propuso que unas señales corporales asociadas a las opciones, dependientes de la corteza prefrontal ventromedial, orientan la elección. Su prueba principal, la Iowa Gambling Task, ha recibido críticas, y el mecanismo sigue en debate.",
    v: [
      "Decisión naturalista=Estudio de cómo deciden los profesionales en su entorno real",
      "Decisión primada por reconocimiento=Reconocer, simular una acción y ejecutarla si funciona (Klein, 1998)",
      "Simulación mental=Comprobar en la imaginación si una acción funcionará",
      "Marcador somático=Señal corporal asociada a una opción que orienta la elección (Damasio)",
      "Corteza prefrontal ventromedial=Región de la que dependerían las señales corporales de Damasio",
      "Iowa Gambling Task=Elegir cartas de cuatro mazos, dos ventajosos y dos desventajosos",
      "Phineas Gage=Capataz del ferrocarril cuyo comportamiento cambió tras una lesión frontal",
      "Maia y McClelland (2004)=Hallaron conocimiento consciente de los mazos buenos antes de lo supuesto"
    ],
    g: [
      "Klein desarrolló su modelo a partir de estudios con mandos de ___ y otros profesionales.|bomberos|policía|aviación",
      "En la IGT, los mazos desventajosos dan ganancias altas, pero pérdidas aún ___.|mayores|menores|escasas",
      "La Iowa Gambling Task la presentaron Bechara et al. en ___.|1994|2004|2006",
      "El reconocimiento del experto solo es fiable cuando el entorno es ___.|regular|nuevo|caótico",
      "Dunn, Dalgleish y Lawrence (2006) concluyeron que el apoyo a la hipótesis es más ___ de lo que se creía.|débil|sólido|amplio"
    ],
    tf: [
      "Según Klein, los expertos suelen generar varias opciones y compararlas antes de actuar.|F|Evalúan una opción cada vez mediante simulación mental y aceptan la primera que funciona.",
      "Los pacientes con daño prefrontal ventromedial siguen eligiendo los mazos desventajosos en la IGT.|V",
      "Que la emoción interviene en la decisión es una idea aceptada, aunque el mecanismo del marcador somático siga en debate.|V",
      "Maia y McClelland confirmaron que la guía corporal precede al conocimiento consciente de qué mazos convienen.|F|Hallaron que muchos sabían de forma consciente qué mazos convenían antes de lo supuesto, lo que debilita la hipótesis."
    ],
    q: [
      "Un jefe de bomberos llega a un incendio, lo identifica como un caso típico, imagina cómo funcionaría entrar por la fachada y, al ver un problema, ajusta el plan. ¿Qué modelo describe su decisión?|Decisión primada por reconocimiento|Maximización de la utilidad esperada|Hipótesis del marcador somático|Reconoce la situación, simula mentalmente la acción y la modifica si detecta problemas (Klein, 1998).",
      "¿Cuál es el principal límite de la decisión primada por reconocimiento?|Falla en situaciones nuevas o irregulares|Exige comparar muchas opciones a la vez|Solo funciona con probabilidades conocidas|El reconocimiento es fiable en entornos regulares con información clara sobre los aciertos y los errores.",
      "¿Qué observaron estudios posteriores del grupo de Bechara en los participantes sanos?|Respuestas fisiológicas antes de elegir mazos malos|Preferencia inicial y estable por los mazos buenos|Ausencia de respuesta corporal ante las pérdidas|Mostraban respuestas fisiológicas anticipatorias antes de elegir de los mazos desventajosos.",
      "¿Por qué se considera la decisión primada por reconocimiento una forma de satisfacción?|Acepta la primera opción que funciona|Busca la mejor de todas las opciones|Elige la opción de menor riesgo|Se evalúa una opción cada vez y se acepta la primera satisfactoria, guiada por la pericia."
    ],
    inc: [
      "Sobre el marcador somático|Su mecanismo está hoy plenamente confirmado|Dependería de la corteza prefrontal ventromedial|Su prueba principal fue la Iowa Gambling Task|Sigue en debate: Maia y McClelland y Dunn et al. señalaron que la IGT admite explicaciones alternativas."
    ],
    seq: [
      "Decisión primada por reconocimiento|Reconocer la situación como un caso típico>Simular mentalmente la acción>Ejecutarla o modificarla"
    ],
    cls: [
      "Enfoque|Decisión primada por reconocimiento: Klein (1998); mandos de bomberos; simulación mental|Marcador somático: Damasio; Iowa Gambling Task; corteza prefrontal ventromedial"
    ] },
  { t: "Decidir en grupo",
    tip: "Janis llamó pensamiento grupal a la búsqueda de unanimidad en grupos cohesionados que anula la crítica, un concepto apoyado sobre todo en estudios de caso. La polarización grupal lleva a posturas más extremas en la dirección dominante. El brainstorming de Osborn (1953) produce menos ideas que un grupo nominal, sobre todo por el bloqueo de producción (Diehl y Stroebe, 1987), así que los grupos necesitan un procedimiento.",
    v: [
      "Pensamiento grupal=Búsqueda de unanimidad en grupos cohesionados que anula la crítica (Janis)",
      "Autocensura=Quien tiene dudas no las expresa",
      "Polarización grupal=Tras discutir, postura más extrema en la dirección que ya predominaba",
      "Argumentos persuasivos=Se oyen más razones a favor de la postura dominante",
      "Comparación social=Cada uno quiere situarse algo por encima de la norma del grupo",
      "Brainstorming=Generar ideas en grupo sin criticarlas, buscando cantidad (Osborn, 1953)",
      "Grupo nominal=Personas que trabajan por su cuenta y suman después sus ideas sin repetir",
      "Bloqueo de producción=Pérdida de ideas por tener que esperar turno para hablar"
    ],
    g: [
      "Janis describió el pensamiento grupal a partir del análisis de ___ políticos.|fracasos|discursos|programas",
      "Por comparación social, cada miembro quiere situarse algo por ___ de la norma del grupo.|encima|debajo|fuera",
      "Para reducir la polarización conviene ___ antes de discutir.|votar|debatir|negociar",
      "Osborn propuso la tormenta de ideas en ___.|1953|1972|1987",
      "Diehl y Stroebe atribuyeron la pérdida de productividad sobre todo al ___ de producción.|bloqueo|exceso|reparto"
    ],
    tf: [
      "Un grupo de brainstorming genera más ideas que un grupo nominal del mismo tamaño.|F|El grupo nominal produce más ideas, sobre todo por el bloqueo de producción que sufre el grupo.",
      "El pensamiento grupal es una teoría bien comprobada mediante numerosos experimentos.|F|Se apoya sobre todo en estudios de caso, y su contrastación experimental ha sido limitada.",
      "La polarización grupal se explica por los argumentos persuasivos y por la comparación social.|V",
      "Nombrar un abogado del diablo y que el líder opine al final ayuda a reducir el pensamiento grupal.|V"
    ],
    q: [
      "Un grupo de amigos, algo partidario de un viaje arriesgado, sale de la conversación más decidido a hacerlo. ¿Qué fenómeno muestra?|Polarización grupal|Pensamiento grupal|Bloqueo de producción|Tras discutir, el grupo adopta una postura más extrema en la dirección que ya predominaba.",
      "Un equipo de profesores quiere obtener más propuestas para un proyecto. ¿Qué procedimiento le conviene?|Que cada uno escriba ideas antes de reunirse|Que discutan todos juntos desde el principio|Que el líder proponga primero su opción|Generar ideas por escrito e individualmente antes de ponerlas en común evita el bloqueo de producción.",
      "¿Qué síntoma del pensamiento grupal consiste en no expresar las propias dudas?|Autocensura|Racionalización|Ilusión de unanimidad|La autocensura se suma a la ilusión de invulnerabilidad, la presión sobre los disidentes y la racionalización de las alarmas.",
      "¿Qué es un grupo nominal en la investigación sobre brainstorming?|Personas que trabajan solas y suman sus ideas|Un grupo que genera ideas sin criticarlas|Un grupo con un líder que modera los turnos|Se suman las ideas sin repetir. Comparado con él, el grupo de brainstorming produce menos ideas."
    ],
    inc: [
      "Sobre la decisión en grupo|Los grupos deciden siempre peor que los individuos|El bloqueo se reduce generando ideas por escrito|La polarización sigue la dirección dominante|Los grupos no deciden necesariamente peor, pero necesitan un procedimiento."
    ],
    seq: [],
    cls: [
      "Fenómeno grupal|Pensamiento grupal: autocensura; ilusión de invulnerabilidad; abogado del diablo|Polarización: posturas más extremas; argumentos persuasivos; votar antes de discutir|Bloqueo de producción: esperar turno; Diehl y Stroebe; ideas por escrito"
    ] },
  { t: "Autocontrol, nudges y crisis de replicación",
    tip: "Las personas descuentan mucho lo futuro cuando la recompensa inmediata está cerca, y el agotamiento del ego no se replicó (d de 0,04 en Hagger et al., 2016). Los nudges de Thaler y Sunstein (2008) cambian la arquitectura de la elección sin prohibir, pero su efecto medio baja mucho al corregir el sesgo de publicación. Many Labs 1 replicó 10 de 13 efectos, como el marco y el anclaje, con tamaños menores.",
    v: [
      "Descuento del futuro=Restar valor a lo diferido, sobre todo si lo inmediato está muy cerca",
      "Agotamiento del ego=Hipótesis de que el autocontrol gasta un recurso limitado (Baumeister)",
      "Hagger et al. (2016)=Réplica registrada en 23 laboratorios con un efecto prácticamente nulo",
      "Nudge=Cambio que orienta la conducta sin prohibir opciones ni alterar los incentivos",
      "Arquitectura de la elección=Forma en que se presentan las opciones a quien decide",
      "Opción por defecto=Inscripción automática con posibilidad de salir",
      "Sesgo de publicación=Se publican más los estudios con resultados positivos",
      "Many Labs 1=Proyecto con 36 muestras que replicó 10 de 13 efectos (Klein et al., 2014)"
    ],
    g: [
      "La réplica de Hagger et al. (2016) contó con ___ participantes.|2.141|6.344|4.098",
      "Mertens et al. (2022) obtuvieron, sin corregir, un efecto medio de los nudges de d de ___.|0,43|0,31|0,08",
      "Inscribir automáticamente en un plan de ahorro aprovecha el sesgo del ___.|statu quo|coste hundido|anclaje",
      "Maier et al. (2022) concluyeron que, tras la corrección, quizá solo queda efecto en ___.|alimentación|ahorro|impuestos",
      "Many Labs 1 reunió ___ muestras y 6.344 participantes.|36|23|19"
    ],
    tf: [
      "El agotamiento del ego se considera hoy un efecto sólido tras la réplica registrada en 23 laboratorios.|F|La réplica obtuvo una d de 0,04, prácticamente nula: no puede considerarse un efecto sólido.",
      "Colocar la fruta a la altura de los ojos en un comedor escolar es un ejemplo de nudge.|V",
      "El Klein de Many Labs 1 (2014) es el mismo autor que propuso la decisión primada por reconocimiento (1998).|F|Son autores distintos: no hay que confundir a Klein et al. (2014) con Klein (1998).",
      "La teoría de la perspectiva resistió los proyectos de réplica.|V"
    ],
    q: [
      "El domingo, Sara planea ir al gimnasio el lunes, pero cuando llega el lunes por la tarde prefiere quedarse viendo una serie. ¿Qué lo explica?|El descuento fuerte de lo diferido|El agotamiento de un recurso limitado|El sesgo del statu quo|Cuando la recompensa inmediata está muy cerca, lo futuro se descuenta mucho. El agotamiento del ego no se replicó.",
      "Al corregir un sesgo de publicación moderado, ¿qué efecto medio estimaron Mertens et al. (2022) para los nudges?|d de 0,31|d de 0,08|d de 0,43|El 0,43 es el efecto sin corregir, y el 0,08 corresponde a un sesgo de publicación severo.",
      "En Many Labs 1, ¿qué efecto dio algunos de los mayores tamaños del proyecto, con d superior a 1?|El anclaje|El efecto marco|El coste hundido|Varias versiones del anclaje superaron d de 1, con heterogeneidad. El marco dio 0,60, y el coste hundido, un efecto pequeño.",
      "Un ayuntamiento envía un mensaje que indica que la mayoría de los vecinos paga sus impuestos a tiempo. ¿Qué es?|Un nudge de norma social|Un incentivo económico|Una prohibición encubierta|Orienta la conducta sin prohibir opciones ni cambiar los incentivos, mediante una norma social."
    ],
    inc: [
      "Sobre la crisis de replicación|Many Labs 1 replicó los 13 efectos estudiados|El agotamiento del ego no llegó a replicarse|La sobrecarga como regla general no se sostiene|Many Labs 1 replicó 10 de 13 efectos, entre ellos el marco y el anclaje, con tamaños menores que los originales."
    ],
    seq: [
      "Hitos en la revisión de los efectos de la decisión|Thaler y Sunstein (2008)>Many Labs 1 (2014)>Hagger et al. (2016)>Ruggeri et al. (2020)>Mertens et al. (2022)"
    ],
    cls: [
      "Resultado tras la réplica|Se replica: efecto marco; anclaje; teoría de la perspectiva|No se sostiene: agotamiento del ego; sobrecarga de elección general"
    ] }
] }
);

SP.register(window.COURSE);
})({});
