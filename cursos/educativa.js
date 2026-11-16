(function(window){
// SAIMAP Psicología · Psicología Educativa
// Contenido alineado con el temario SAIMAP «Psicología Educativa» (v1.0, noviembre de 2026).
window.COURSE = {
  id: "educativa",
  title: "Psicología Educativa",
  short: "Educativa",
  area: "Psicología aplicada",
  rutas: { grado: { curso: 2 }, pir: { bloque: "Desarrollo y social" } },
  temario: "Psicologia-Educativa_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Una disciplina entre la psicología y la escuela", from: 1, to: 3 },
    { n: 2, t: "Cómo se aprende: de los refuerzos a la mente que construye", from: 4, to: 6 },
    { n: 3, t: "Aprender bien hoy: competencias, estrategias y evidencia", from: 7, to: 10 },
    { n: 4, t: "Querer, sentir y verse capaz", from: 11, to: 12 },
    { n: 5, t: "La vida del aula: orden, clima y relaciones", from: 13, to: 14 },
    { n: 6, t: "El psicólogo en la escuela: prevenir, intervenir e incluir", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Educativa · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "Qué estudia la psicología de la educación", cap: 1, pir: "baja", mods: [
  { t: "Una definición con tres dimensiones",
    tip: "La psicología de la educación estudia los procesos psicológicos de cambio, sobre todo aprendizaje y desarrollo, que se producen al participar en situaciones educativas formales o informales. Su unidad de análisis es el alumno en interacción, no aislado. Coll la presenta como una disciplina puente, con objeto y métodos propios, y distingue tres dimensiones que se necesitan entre sí: teórica, tecnológica y práctica.",
    v: [
      "Psicología de la educación=Estudio de los cambios psicológicos que produce participar en situaciones educativas",
      "Disciplina puente=Saber entre psicología y educación con objeto, preguntas y métodos propios (Coll)",
      "Dimensión teórica=Explica cómo y por qué se aprende en situaciones educativas",
      "Dimensión tecnológica=Diseña la enseñanza a partir de las explicaciones sobre el aprendizaje",
      "Dimensión práctica=Interviene y asesora a alumnado, docentes, familias y centros",
      "Situación educativa formal=Contexto organizado de enseñanza, como la escuela o la universidad",
      "Situación educativa informal=Contexto como la familia, un museo o un vídeo divulgativo",
      "Psicología aplicada=Visión de un solo sentido en la que la escuela aplica lo hallado en el laboratorio"
    ],
    g: [
      "Coll presenta la psicología de la educación como una disciplina ___, con objeto y métodos propios.|puente|aplicada|auxiliar",
      "Preparar una secuencia sobre decimales que provoque y resuelva un error frecuente corresponde a la dimensión ___.|tecnológica|teórica|práctica",
      "Según la definición, la unidad de análisis no es el alumno ___, sino el alumno en interacción.|aislado|motivado|evaluado",
      "Coll expone esta visión en «Desarrollo psicológico y educación», obra coordinada con Palacios y ___.|Marchesi|Bruner|Ausubel",
      "Que la práctica devuelva preguntas a la teoría muestra que las tres dimensiones se ___ entre sí.|necesitan|excluyen|sustituyen"
    ],
    tf: [
      "Según el perfil del COP, el psicólogo de la educación trabaja con personas, grupos e instituciones.|V",
      "La psicología de la educación se ocupa de cualquier aprendizaje, sea cual sea el contexto en que ocurra.|F|Se ocupa del aprendizaje en contextos organizados, con intención de enseñar o con un entorno pensado para aprender.",
      "Orientar a un tutor sobre una alumna que no avanza en matemáticas es un ejemplo de dimensión tecnológica.|F|Asesorar e intervenir es la dimensión práctica. La tecnológica es la que diseña la enseñanza.",
      "Un vídeo divulgativo puede constituir una situación educativa informal.|V"
    ],
    q: [
      "Varios grupos de 1.º de ESO suspenden física y la orientadora revisa la investigación sobre las ideas previas acerca de la fuerza. ¿Qué dimensión pone en juego en ese paso?|La teórica o explicativa|La tecnológica o proyectiva|La práctica o de intervención|Revisar la investigación para explicar el error es la dimensión teórica. Rediseñar las clases sería la tecnológica.",
      "Explicar por qué muchos alumnos creen que multiplicar siempre hace más grande un número responde a la pregunta…|¿cómo se aprende y por qué?|¿cómo se diseña la enseñanza?|¿cómo se interviene y asesora?|Explicar un error de aprendizaje es la dimensión teórica o explicativa.",
      "¿Por qué resulta insuficiente la visión de una psicología aplicada a la educación?|Hay fenómenos que solo surgen en el aula|La psicología general carece de método|La escuela no admite la investigación|El efecto de una buena explicación o el clima de una clase no aparecen en el laboratorio y hay que estudiarlos donde ocurren.",
      "¿Qué subraya la definición del COP al incluir a grupos e instituciones?|Que también se trabaja con docentes, familias y centros|Que el psicólogo se limita al diagnóstico individual|Que la intervención ha de ser solo preventiva|El psicólogo educativo no trabaja solo con alumnos, sino también con docentes, familias y centros."
    ],
    inc: [
      "Sobre las dimensiones de la disciplina|La práctica puede prescindir de la teórica|La tecnológica diseña la enseñanza|La práctica es la que define al profesional|Las tres se necesitan: la práctica sin las otras dos se reduce a la intuición de cada profesional."
    ],
    seq: [],
    cls: [
      "Dimensión de Coll|Teórica: explicar un error frecuente; revisar las ideas previas sobre la fuerza|Tecnológica: diseñar una secuencia sobre decimales; rediseñar las primeras clases|Práctica: asesorar al profesorado; orientar a un tutor"
    ] },
  { t: "El objeto de estudio: los cambios que produce educar",
    tip: "El objeto de la disciplina es el cambio que produce educar: aprendizaje, desarrollo y socialización. Estos cambios afectan a lo cognitivo, lo afectivo-motivacional, lo social y lo motor, tienden a ser duraderos y están en interacción. Las variables intrapersonales, interpersonales, contextuales y curriculares actúan juntas, así que la pregunta no es qué método es el mejor, sino para quién, para qué contenido y en qué condiciones funciona.",
    v: [
      "Aprendizaje=Cambio relativamente estable en la conducta o el conocimiento debido a la experiencia",
      "Desarrollo=Cambios ligados a la edad que la educación puede favorecer, frenar u orientar",
      "Socialización=Adquisición de normas, valores y formas de relacionarse propias de una cultura",
      "Variables intrapersonales=Rasgos del alumnado y del docente, como conocimiento previo o motivación",
      "Variables interpersonales=Factores de la interacción entre docente y alumnado y entre iguales",
      "Variables contextuales=Espacio, tiempo, número de alumnos, recursos y clima del centro",
      "Variables curriculares=Contenidos que se enseñan y medios para transmitirlos",
      "Intervención preventiva=La que se aplica antes de que aparezca el problema"
    ],
    g: [
      "Aprender a respetar el turno de palabra es un ejemplo de cambio por ___.|socialización|desarrollo|maduración",
      "Una clase de treinta alumnos a última hora del viernes ilustra una variable ___.|contextual|curricular|interpersonal",
      "Un libro de texto con ejemplos resueltos frente a otro sin ellos ilustra una variable ___.|curricular|contextual|intrapersonal",
      "El paso del pensamiento concreto al abstracto es un cambio de ___.|desarrollo|socialización|aprendizaje",
      "La intervención ___ actúa cuando el problema ya existe.|correctiva|preventiva|predictiva"
    ],
    tf: [
      "El interés y el autoconcepto ante el estudio pertenecen a la dimensión afectivo-motivacional.|V",
      "La disciplina busca establecer qué método de enseñanza es el mejor en general.|F|Evita esa pregunta y estudia para quién, para qué contenido y en qué condiciones funciona un método.",
      "Las variables de una situación educativa actúan por separado, de modo que su efecto es aditivo.|F|No actúan por separado: la misma explicación puede funcionar con un grupo y fracasar con otro.",
      "Un cambio en el autoconcepto de un alumno puede modificar su esfuerzo y, con él, lo que aprende.|V"
    ],
    q: [
      "Dos hermanos estudian con el mismo libro y el mismo horario, y solo uno avanza. ¿Qué explicación es incompleta por ignorar el resto de variables?|Que uno es más listo que el otro|Que el segundo arrastra lagunas previas|Que el segundo cree que no vale para ello|Atribuirlo solo a la capacidad ignora el resto de variables, como las lagunas, el aula o el autoconcepto.",
      "Las preguntas que hace la profesora y cómo responde a los errores son variables…|interpersonales|intrapersonales|curriculares|Pertenecen a la interacción entre docente y alumnado, es decir, a las variables interpersonales.",
      "¿Qué funciones cumple el conocimiento de los procesos de cambio educativo?|Explicar, predecir y orientar la intervención|Describir, clasificar y diagnosticar trastornos|Medir, comparar y certificar los resultados|Permite explicar por qué se aprende o no, predecir dificultades y orientar la intervención preventiva o correctiva.",
      "¿Qué reúne siempre una situación educativa, dentro de un contexto?|Quien aprende, quien enseña y un contenido|El alumno, su familia y el centro escolar|Unos objetivos, un método y una evaluación|Una situación educativa es el encuentro entre quien aprende, quien enseña y un contenido, dentro de un contexto."
    ],
    inc: [
      "Sobre los cambios que estudia la disciplina|Son transitorios y se limitan a lo cognitivo|Se producen en un contexto con intención educativa|Están en interacción constante entre sí|Tienden a ser duraderos y afectan a lo cognitivo, lo afectivo-motivacional, lo social y lo motor."
    ],
    seq: [],
    cls: [
      "Tipo de variable|Intrapersonal: conocimiento previo; motivación; estrategias|Interpersonal: preguntas de la profesora; respuesta a los errores; interacción entre iguales|Contextual: número de alumnos; horario; clima del centro"
    ] },
  { t: "Enfoques teóricos que conviven",
    tip: "No hay una teoría única: los enfoques conductual, cognitivo, constructivista, sociocultural, humanista y ecológico responden de forma distinta a qué es aprender y a menudo se combinan. El modelo ecológico de Bronfenbrenner (1979) sitúa a la persona en micro, meso, exo y macrosistema. El constructivismo goza de amplia aceptación como teoría de cómo se aprende, pero está muy cuestionado como receta de mínima guía (Kirschner, Sweller y Clark, 2006).",
    v: [
      "Enfoque conductual=Aprender es cambiar la conducta según sus consecuencias",
      "Enfoque cognitivo=Codificar, organizar y recuperar información con una memoria de trabajo limitada",
      "Enfoque constructivista=Construir y reorganizar esquemas propios a partir de lo que ya se sabe",
      "Enfoque sociocultural=Interiorizar lo que primero se hace con otros, mediado por el lenguaje",
      "Enfoque humanista=Crecer como persona en un clima de aceptación (Rogers, Maslow)",
      "Microsistema=Entornos en los que la persona participa directamente, como el aula o la familia",
      "Mesosistema=Relaciones entre los entornos en los que la persona participa directamente",
      "Exosistema=Entornos en los que la persona no participa, pero que le afectan"
    ],
    g: [
      "La comunicación entre la familia y el tutor forma parte del ___.|mesosistema|microsistema|exosistema",
      "El horario laboral de los padres se sitúa, para el niño, en el ___.|exosistema|mesosistema|macrosistema",
      "La legislación educativa forma parte del ___.|macrosistema|exosistema|mesosistema",
      "Trabajar en la zona de desarrollo próximo, con ayudas que se retiran, deriva del enfoque ___.|sociocultural|constructivista|humanista",
      "Plantear conflictos cognitivos y ajustar la tarea al nivel de desarrollo deriva del enfoque ___.|constructivista|sociocultural|cognitivo"
    ],
    tf: [
      "Como receta didáctica de mínima guía, el constructivismo está muy cuestionado, sobre todo con principiantes.|V",
      "Para un alumno, las decisiones del claustro forman parte de su mesosistema.|F|Es un entorno en el que el alumno no participa, pero que le afecta: el exosistema.",
      "Lo razonable es adherirse a una escuela teórica y aplicarla con coherencia en toda la clase.|F|Los enfoques se combinan. Lo razonable es saber qué explica bien cada uno y qué evidencia lo apoya.",
      "El enfoque ecológico lleva a coordinar escuela, familia y comunidad.|V"
    ],
    q: [
      "Ante el absentismo de un alumno, el equipo se limita a cambiar la metodología del aula. ¿Qué objetaría el modelo ecológico?|Que el problema puede tener raíces en varios niveles|Que el aula no forma parte del microsistema|Que el absentismo depende solo del macrosistema|Un problema de absentismo puede originarse en varios sistemas a la vez, y actuar solo en el aula se queda corto.",
      "Usar ejemplos resueltos para no saturar la memoria de trabajo se justifica desde el enfoque…|cognitivo|conductual|humanista|El enfoque cognitivo propone dosificar la información porque la memoria de trabajo es limitada.",
      "¿Qué trabajo cuestiona el constructivismo como receta de enseñanza con mínima guía?|Kirschner, Sweller y Clark (2006)|Dekker y colaboradores (2012)|Ferrero, Garaizar y Vadillo (2016)|Kirschner, Sweller y Clark (2006) critican la enseñanza con mínima guía, sobre todo con principiantes.",
      "¿Qué enfoque añade que la construcción del conocimiento tiene un origen social?|El sociocultural|El constructivista|El humanista|Para el enfoque sociocultural, primero se hace con otros y después en solitario, mediado por el lenguaje."
    ],
    inc: [
      "Sobre los enfoques teóricos|Como teoría del aprendizaje, el constructivismo está desacreditado|El enfoque cognitivo atiende a la atención y la memoria|El humanista atiende a las necesidades y la autonomía|Como teoría de cómo se aprende goza de amplia aceptación. Lo cuestionado es la receta de mínima guía."
    ],
    seq: [
      "Sistemas de Bronfenbrenner, del más próximo al más amplio|Microsistema>Mesosistema>Exosistema>Macrosistema"
    ],
    cls: [] },
  { t: "Vecinas y aliadas: las ciencias afines",
    tip: "La disciplina comparte territorio con áreas psicológicas, como la evolutiva, la del aprendizaje, la social o la psicometría, y con las ciencias de la educación, como la pedagogía, las didácticas o la sociología de la educación. La psicología de la instrucción estudia cómo se aprenden contenidos escolares concretos. Con la neurociencia, la relación sensata es de cautela: inspira hipótesis, pero no prescribe métodos, y sin esa cautela surgen los neuromitos.",
    v: [
      "Psicología de la instrucción=Estudia cómo se aprenden contenidos escolares concretos en situaciones diseñadas",
      "Pedagogía=Reflexiona sobre los fines y los modelos educativos",
      "Didácticas específicas=Se ocupan de cómo enseñar cada materia, como la lengua o las matemáticas",
      "Sociología de la educación=Analiza la escuela como institución y su relación con la desigualdad",
      "Psicometría=Mide las diferencias individuales",
      "Psicología evolutiva=Describe cómo cambian las capacidades con la edad",
      "Neuroeducación=Intento de trasladar al aula los hallazgos sobre el cerebro",
      "Neuromitos=Creencias falsas con apariencia científica, muy extendidas entre los docentes"
    ],
    g: [
      "Cada cuántos días conviene repasar se responde con experimentos ___ sobre el espaciado del estudio.|conductuales|neurales|genéticos",
      "Ferrero, Garaizar y Vadillo (___) hallaron que en docentes españoles saber más del cerebro predecía creer en más mitos.|2016|2012|2006",
      "Los trastornos del aprendizaje se estudian en Psicopatología, y aquí, su detección y la respuesta ___.|escolar|clínica|familiar",
      "Las expectativas, el liderazgo y la cooperación proceden de la psicología ___.|social|evolutiva|diferencial",
      "La neurociencia ayuda a entender el desarrollo de la corteza ___ en la adolescencia.|prefrontal|occipital|temporal"
    ],
    tf: [
      "Muchos autores consideran la psicología de la instrucción una rama de la psicología de la educación.|V",
      "El interés por la neurociencia protege a los docentes de los neuromitos.|F|No los protege (Dekker et al., 2012). En docentes españoles, saber más del cerebro predijo creer en más mitos.",
      "Las relaciones con las disciplinas afines son de doble dirección.|V",
      "Los fundamentos del espaciado y el olvido corresponden a Psicología del Aprendizaje.|F|Efecto de evaluación, espaciado y olvido se remiten a la asignatura de Memoria. Aquí se tratan las técnicas de estudio."
    ],
    q: [
      "Una formadora defiende un método porque «activa la corteza prefrontal». ¿Qué respuesta es más coherente con el temario?|Pedir estudios que midan el aprendizaje en el aula|Adoptarlo, ya que se apoya en datos cerebrales|Descartar toda aportación de la neurociencia|Los datos cerebrales inspiran hipótesis, pero las decisiones de aula requieren estudios de aprendizaje en contextos educativos.",
      "¿Qué disciplina analiza la escuela como institución y su relación con la desigualdad?|La sociología de la educación|La organización escolar|La psicología social|Es la sociología de la educación, una de las ciencias de la educación afines.",
      "Las aplicaciones de los programas de refuerzo en el aula se estudian aquí. ¿Dónde se estudian sus fundamentos?|En Psicología del Aprendizaje|En Motivación y Emoción|En Evaluación Psicológica|Condicionamiento, programas de refuerzo y aprendizaje observacional se remiten a Psicología del Aprendizaje.",
      "¿Qué papel corresponde a los datos de la neurociencia en las decisiones de aula?|Inspirar hipótesis|Prescribir métodos|Sustituir la evidencia|La neurociencia describe mecanismos e inspira hipótesis, pero no prescribe métodos de enseñanza."
    ],
    inc: [
      "Sobre neurociencia y educación|Indica cada cuántos días conviene repasar|Ayuda a entender la consolidación de la memoria|No prescribe por sí misma métodos de enseñanza|El intervalo de repaso procede de experimentos conductuales sobre el espaciado, no de saber qué región interviene."
    ],
    seq: [],
    cls: [
      "Disciplina afín|Psicológica: psicología evolutiva; psicometría; psicología del aprendizaje|Ciencia de la educación: pedagogía; didácticas específicas; sociología de la educación"
    ] }
] },
{ n: 2, t: "De James a la ciencia del aprendizaje", cap: 1, pir: "media", mods: [
  { t: "Los precursores del siglo XIX",
    tip: "La disciplina solo fue posible cuando la psicología se constituyó como ciencia experimental, a finales del siglo XIX. Herbart propuso los pasos formales de la instrucción, Galton abrió el estudio de las diferencias individuales, Cattell acuñó «test mental» (1890), Hall impulsó el estudio del niño y James (1899) sostuvo que la psicología es una ciencia y enseñar, un arte. Al acabar el siglo confluían tres líneas: aprendizaje experimental, medida de las diferencias y desarrollo infantil.",
    v: [
      "Herbart=Filósofo y pedagogo que propuso los pasos formales de la instrucción",
      "Galton=Abrió la línea de las diferencias individuales y su medida",
      "Cattell=Acuñó en 1890 una expresión para pruebas breves y estandarizadas",
      "Test mental=Prueba breve y estandarizada para comparar a las personas",
      "G. Stanley Hall=Impulsó el estudio del niño mediante cuestionarios sistemáticos",
      "Talks to Teachers=Conferencias de William James dirigidas a maestros, publicadas en 1899",
      "Pasos formales de la instrucción=Secuencia ordenada de la lección que parte de lo que el alumno ya sabe",
      "Mente intermedia e inventiva=La que, según James, traduce la ciencia a decisiones de clase"
    ],
    g: [
      "La idea de Herbart de que lo nuevo se apoya en lo conocido reaparece en el aprendizaje significativo de ___.|Ausubel|Bruner|Thorndike",
      "Hall fue el primer presidente de la APA, fundada en ___.|1892|1899|1890",
      "Los test de Cattell medían sobre todo procesos ___ y de tiempo de reacción.|sensoriales|verbales|lógicos",
      "Para James, la psicología es una ciencia y enseñar es un ___.|arte|oficio|método",
      "Sin la línea abierta por ___ no habrían existido los test escolares ni la psicometría.|Galton|Herbart|Hall"
    ],
    tf: [
      "Los test mentales de Cattell resultaron muy útiles para predecir el rendimiento escolar.|F|Su utilidad para predecir el rendimiento escolar fue escasa, lo que preparó el terreno para la propuesta de Binet.",
      "Hall difundió la idea de que la escuela debía adaptarse al desarrollo infantil.|V",
      "Según James, las ciencias generan artes de manera directa.|F|James sostenía lo contrario: hace falta una mente intermedia e inventiva que traduzca el conocimiento a la clase.",
      "La tesis de James anticipa la relación entre teoría y práctica que hoy se describe como dimensión tecnológica.|V"
    ],
    q: [
      "Una profesora sabe que el repaso espaciado mejora la memoria, pero debe repartir los repasos entre exámenes, excursiones y festivos. ¿Qué idea de James ilustra?|La ciencia orienta, pero no sustituye al juicio|La ciencia fija la programación más eficaz|El docente debe prescindir de la ciencia|Decidir cómo repartir los repasos es un problema de diseño que la ciencia orienta, pero que resuelve el docente.",
      "¿Qué tres líneas de trabajo había al acabar el siglo XIX?|Aprendizaje, diferencias individuales y desarrollo|Condicionamiento, cognición y cultura escolar|Pedagogía, didáctica y organización de centros|Estudio experimental del aprendizaje, medida de las diferencias individuales y estudio del desarrollo infantil.",
      "¿Qué precursor usó cuestionarios para recoger lo que sabían y pensaban los niños de distintas edades?|Hall|Galton|Cattell|G. Stanley Hall impulsó el estudio del niño con cuestionarios sistemáticos.",
      "¿Qué aportación se asocia con Herbart?|Los pasos formales de la instrucción|La expresión «test mental»|El estudio del niño con cuestionarios|Herbart quiso fundamentar la pedagogía en una psicología y propuso pasos formales para ordenar la lección."
    ],
    inc: [
      "Sobre los precursores|Galton acuñó la expresión «test mental»|Herbart quiso fundar la pedagogía en la psicología|James publicó Talks to Teachers en 1899|La expresión «test mental» (1890) es de Cattell. Galton abrió la línea de las diferencias individuales y su medida."
    ],
    seq: [],
    cls: [
      "Precursor|Herbart: pasos formales de la instrucción; partir de lo que el alumno sabe|Galton y Cattell: diferencias individuales; test mental|Hall: estudio del niño; cuestionarios; primer presidente de la APA"
    ] },
  { t: "Los años fundacionales, de 1900 a 1920",
    tip: "Entre 1900 y 1920 la disciplina adquirió nombre, revistas y programas. Thorndike (1903) formuló con sus cajas problema la ley del efecto, un condicionamiento instrumental (el operante es de Skinner), y explicó la transferencia por elementos idénticos, frente a la generalización de principios de Judd. Binet y Simon (1905) crearon la primera escala de inteligencia para detectar necesidades de enseñanza especial. Terman publicó la Stanford-Binet (1916), Dewey defendió el aprender haciendo y Claparède, la escuela a medida.",
    v: [
      "Ley del efecto=Las respuestas seguidas de consecuencias satisfactorias se fortalecen",
      "Elementos idénticos=Hay transferencia en la medida en que dos tareas comparten elementos",
      "Generalización de principios=Se transfiere lo que se comprende como principio general (Judd)",
      "Cajas problema=Dispositivos de los que unos gatos debían salir accionando un mecanismo",
      "Escala de Binet-Simon=Primera escala de inteligencia (1905), creada para detectar necesidades de apoyo",
      "Stanford-Binet=Adaptación estadounidense de la escala de Binet, publicada por Terman en 1916",
      "Escuela a medida=Lema de Claparède: adaptar la enseñanza a cada alumno",
      "Escuela laboratorio=Centro fundado por Dewey en Chicago para enseñar y ensayar ideas educativas"
    ],
    g: [
      "Thorndike publicó «Educational Psychology» en ___.|1903|1899|1905",
      "El Journal of Educational Psychology apareció en ___.|1910|1912|1916",
      "Claparède fundó en Ginebra el Instituto Jean-Jacques Rousseau en ___.|1912|1910|1896",
      "Dewey fundó en 1896 una escuela laboratorio en la Universidad de ___.|Chicago|Columbia|Stanford",
      "La ley del efecto pertenece al condicionamiento ___.|instrumental|operante|clásico"
    ],
    tf: [
      "La idea de los elementos idénticos chocaba con la creencia de que estudiar latín «entrenaba la mente» en general.|V",
      "Thorndike acuñó el término condicionamiento operante a partir de sus cajas problema.|F|Thorndike estudió el condicionamiento instrumental. El término operante corresponde a Skinner, décadas después.",
      "La escala de Binet y Simon ordenaba las tareas según la edad a la que la mayoría de los niños podía resolverlas.|V",
      "Binet creó su escala para medir una inteligencia fija e innata y clasificar a los niños.|F|Su fin era detectar al alumnado que necesitaba enseñanza especial. Binet pensaba que la inteligencia podía mejorar."
    ],
    q: [
      "Un alumno que entiende por qué funciona una regla de física la aplica a un problema que no se parece en la superficie. ¿Qué explicación encaja mejor?|La generalización de principios de Judd|Los elementos idénticos de Thorndike|La ley del efecto de Thorndike|Para Judd se transfiere lo que se comprende como principio general, aunque las tareas no se parezcan.",
      "¿Qué autor inició un estudio longitudinal de niños superdotados?|Terman|Binet|Simon|Terman, autor de la Stanford-Binet (1916), lo inició. Es un antecedente de la investigación sobre altas capacidades.",
      "¿Qué defendía Dewey con el «aprender haciendo»?|Resolver problemas reales ligados a la experiencia|Avanzar en pasos pequeños con feedback inmediato|Adaptar la enseñanza como un sastre adapta un traje|Para Dewey el alumno aprende resolviendo problemas reales. El sastre es la imagen de la escuela a medida de Claparède.",
      "¿Qué pedía Claparède con su lema de la «escuela a medida»?|Adaptar la enseñanza a cada alumno|Medir a cada alumno con un test|Agrupar a los alumnos por su edad|Igual que un sastre adapta el traje a quien lo lleva, la enseñanza debía adaptarse a cada alumno."
    ],
    inc: [
      "Sobre los años fundacionales|Judd explicó la transferencia por elementos idénticos|Terman publicó la Stanford-Binet en 1916|Claparède reclamaba una escuela a medida|Los elementos idénticos son de Thorndike. Judd defendió la generalización de principios."
    ],
    seq: [
      "Hitos de la disciplina, en orden cronológico|Escuela laboratorio de Dewey>Talks to Teachers de James>Educational Psychology de Thorndike>Escala de Binet y Simon>Journal of Educational Psychology>Instituto Rousseau de Claparède>Stanford-Binet de Terman"
    ],
    cls: [] },
  { t: "Del conductismo al giro cognitivo y sociocultural",
    tip: "La historia se resume en cuatro momentos: la etapa conductista y psicométrica, tras el manifiesto de Watson (1913), produjo la enseñanza programada de Skinner. La revolución cognitiva (Bloom, Bruner, Ausubel, Gagné) trajo el procesamiento de la información y la psicología de la instrucción. El giro sociocultural difundió a Vygotsky y a Bronfenbrenner, y la etapa actual de ciencia del aprendizaje se apoya en la evidencia. Las etapas no se sustituyen por completo.",
    v: [
      "Manifiesto de Watson=Propuesta de 1913 de estudiar solo la conducta observable",
      "Enseñanza programada=Pasos pequeños, respuesta activa, feedback inmediato y ritmo propio (Skinner)",
      "Máquinas de enseñar=Dispositivos con los que Skinner aplicó su propuesta de instrucción",
      "Procesamiento de la información=Metáfora cognitiva que sustituyó a la del organismo que responde a estímulos",
      "Psicología de la instrucción=Estudio de cómo se aprende a leer, escribir, calcular o comprender ciencias",
      "Giro sociocultural=Etapa que difundió a Vygotsky y la idea del origen social de la mente",
      "Declaración de Salamanca=Texto de la UNESCO (1994) que defendió escuelas ordinarias para todos",
      "Ciencia del aprendizaje=Etapa que lleva la investigación al aula con ensayos y metaanálisis"
    ],
    g: [
      "Skinner propuso la enseñanza programada en ___ y 1958.|1954|1913|1965",
      "Bloom publicó su taxonomía de objetivos en ___.|1956|1965|1963",
      "Gagné describió las condiciones del aprendizaje en ___.|1965|1956|1963",
      "Anderson y Krathwohl revisaron la taxonomía de Bloom en ___.|2001|2013|1994",
      "El estudio de Rosenthal y Jacobson (1968) sobre las expectativas docentes se publicó en la etapa ___.|cognitiva|conductista|sociocultural"
    ],
    tf: [
      "Con la revolución cognitiva, la investigación pasó a estudiar cómo se aprenden contenidos escolares concretos.|V",
      "Cada etapa sustituyó por completo a la anterior, y las técnicas operantes han caído en desuso.|F|Las etapas no se sustituyen por completo: las técnicas operantes siguen usándose en la gestión del aula.",
      "Vygotsky escribió su obra en los años sesenta y setenta, cuando se tradujo al inglés.|F|La escribió en los años veinte y treinta en la Unión Soviética. Las traducciones al inglés son de 1962 y 1978.",
      "La evaluación de técnicas de estudio de Dunlosky et al. (2013) ejemplifica la etapa de la ciencia del aprendizaje.|V"
    ],
    q: [
      "¿En qué etapa la pregunta central es «cómo se interioriza lo que se hace con otros»?|La sociocultural|La cognitiva|La ciencia del aprendizaje|El giro sociocultural ve al alumno como participante en prácticas culturales.",
      "Un programa informático divide la lección en pasos breves, pide una respuesta en cada uno, corrige al instante y deja avanzar a cada alumno a su ritmo. ¿De qué propuesta deriva?|La enseñanza programada de Skinner|La ley del efecto de Thorndike|El descubrimiento guiado de Bruner|Pasos pequeños, respuesta activa, feedback inmediato y ritmo propio son los rasgos de la enseñanza programada.",
      "¿Qué imagen del alumno corresponde a la etapa cognitiva?|Un procesador activo de información|Un organismo que responde a consecuencias|Un participante en prácticas culturales|La metáfora del procesamiento de la información sustituyó a la del organismo que responde a estímulos.",
      "¿Qué autores han propuesto periodizaciones distintas de la historia de la disciplina?|Coll, y Beltrán y Bueno|Anderson y Krathwohl|Rosenthal y Jacobson|Coll o Beltrán y Bueno proponen periodizaciones distintas. Cómo periodizar sigue en debate."
    ],
    inc: [
      "Sobre la revolución cognitiva|Se inició con el manifiesto de Watson (1913)|Bloom publicó su taxonomía en 1956|Ausubel formuló el aprendizaje significativo|El manifiesto de Watson (1913) inaugura la etapa conductista, no la revolución cognitiva."
    ],
    seq: [
      "Etapas de la disciplina|Conductista y psicométrica>Revolución cognitiva>Giro sociocultural>Ciencia del aprendizaje y evidencia"
    ],
    cls: [] },
  { t: "El recorrido en España",
    tip: "En España la disciplina creció ligada a la renovación pedagógica y a la orientación. Tras la Institución Libre de Enseñanza (1876) y los institutos de orientación profesional de los años veinte, la LGE (1970) creó los primeros servicios de orientación. La LOGSE (1990) hizo la orientación parte de la función docente, introdujo las NEE y llevó a generalizar EOEP y departamentos de orientación. En la red pública, el psicólogo suele trabajar como orientador, en una plaza compartida.",
    v: [
      "Institución Libre de Enseñanza=Iniciativa de 1876 de renovación pedagógica inspirada en Europa",
      "Mira y López=Figura de la psicología aplicada que trabajó en el instituto de Barcelona",
      "LGE=Ley de 1970 que puso en marcha los primeros servicios de orientación",
      "LOGSE=Ley de 1990 que hizo la orientación parte de la función docente e introdujo las NEE",
      "EOEP=Equipos de orientación educativa y psicopedagógica de infantil y primaria",
      "Departamento de orientación=Estructura de orientación propia de los centros de secundaria",
      "LOE=Ley de 2006 que introdujo las necesidades específicas de apoyo educativo",
      "LOMLOE=Ley de 2020 que hizo de la inclusión un principio general"
    ],
    g: [
      "Los institutos de orientación profesional de Barcelona y Madrid se crearon en los años ___.|veinte|treinta|setenta",
      "La LOGSE introdujo el concepto de necesidades educativas ___.|especiales|específicas|singulares",
      "En la red pública, el psicólogo suele ocupar una plaza de profesorado de secundaria de la especialidad de ___.|Orientación Educativa|Psicología Escolar|Pedagogía Terapéutica",
      "El grupo de ___ (González-Pienda, Núñez y colaboradores) estudió autoconcepto, atribuciones y estrategias.|Oviedo|Valencia|Salamanca",
      "Los estudios de Alonso Tapia tratan la motivación y el ___ del aula.|contexto|diseño|horario"
    ],
    tf: [
      "La LGE de 1970 generalizó los EOEP y los departamentos de orientación.|F|La LGE creó los primeros servicios. EOEP y departamentos se generalizaron en los años noventa, con la LOGSE.",
      "La plaza de Orientación Educativa de la red pública la comparten psicólogos, pedagogos y psicopedagogos.|V",
      "El COP, con una división de Psicología Educativa, reivindica una figura propia de psicólogo educativo.|V",
      "La LOE (2006) introdujo el concepto de necesidades educativas especiales.|F|Las NEE las introdujo la LOGSE (1990). La LOE añadió las necesidades específicas de apoyo educativo."
    ],
    q: [
      "Una familia pide en un colegio público de primaria «que vea al niño el psicólogo». ¿Quién interviene habitualmente?|El orientador del equipo de orientación|Un psicólogo clínico del sistema sanitario|El tutor, sin apoyo especializado|Lo habitual es que intervenga el orientador del EOEP, que puede ser psicólogo, pedagogo o psicopedagogo.",
      "¿Qué ley consideró la orientación parte de la función docente y factor de calidad de la enseñanza?|La LOGSE|La LGE|La LOMLOE|La LOGSE (1990) dio ese paso decisivo e introdujo además las necesidades educativas especiales.",
      "¿Qué aportación española se asocia con Beltrán?|El análisis de los procesos de aprendizaje|La disciplina como puente entre saberes|El estudio de los neuromitos docentes|La idea de puente es de Coll, y los neuromitos los estudiaron Ferrero, Garaizar y Vadillo (2016).",
      "¿A qué dos realidades se vinculó el desarrollo de la disciplina en España?|La renovación pedagógica y la orientación|La psicometría y la clínica infantil|La neurociencia y la educación especial|Se desarrolló ligada a la renovación pedagógica y a la orientación, primero profesional y después escolar."
    ],
    inc: [
      "Sobre el orientador de un centro público|Ha de ser siempre graduado en Psicología|Realiza la evaluación psicopedagógica|Asesora al profesorado y se coordina con la familia|Puede ser psicólogo, pedagogo o psicopedagogo, porque la plaza de Orientación Educativa es compartida."
    ],
    seq: [
      "Hitos de la orientación en España|Institución Libre de Enseñanza>Institutos de orientación profesional>LGE>LOGSE>LOE>LOMLOE"
    ],
    cls: [] }
] },
{ n: 3, t: "Investigar en educación", cap: 1, pir: "baja", mods: [
  { t: "Diseños para estudiar el aula",
    tip: "El diseño depende de la pregunta: describir, detectar asociaciones o atribuir causas. Los estudios correlacionales no permiten concluir causalidad, el experimento lo logra mediante asignación aleatoria (por alumno, aula o centro) y el cuasiexperimento compara grupos ya formados. La validez interna es poder atribuir el resultado a la variable estudiada, y la externa, poder generalizarlo. Los diseños de caso único, como el ABAB o la línea base múltiple, son habituales en la intervención conductual.",
    v: [
      "Validez interna=Grado en que el resultado se atribuye a la variable estudiada y no a otras causas",
      "Validez externa=Grado en que un resultado se generaliza a otras personas, contextos o momentos",
      "Diseño cuasiexperimental=Comparación de grupos ya formados, sin asignación aleatoria",
      "Asignación aleatoria=El azar decide quién recibe la intervención, y los grupos quedan parecidos",
      "Diseño ABAB=Caso único que alterna fases sin intervención y con intervención",
      "Línea base múltiple=Introducción escalonada de la intervención en varias conductas, alumnos o contextos",
      "Investigación-acción=La realizan los docentes en ciclos de planificar, actuar, observar y reflexionar",
      "Investigación basada en diseño=Desarrolla y ajusta una intervención en aulas reales en varias iteraciones"
    ],
    g: [
      "Suele convenir aleatorizar por aula o por centro porque los alumnos de una misma clase se ___ entre sí.|influyen|ignoran|evalúan",
      "Cuando retirar la intervención no es ético, en lugar de un ABAB se usa una línea base ___.|múltiple|simple|invertida",
      "Un experimento de laboratorio muy controlado puede tener alta validez interna y poca validez ___.|externa|de contenido|predictiva",
      "Los métodos ___, como las entrevistas o la observación participante, ayudan a entender por qué y cómo.|cualitativos|cuantitativos|experimentales",
      "La limitación principal de un estudio longitudinal es el ___ de participantes.|abandono|sesgo|tamaño"
    ],
    tf: [
      "Si los alumnos que hacen más deberes sacan mejores notas, queda demostrado que los deberes mejoran el rendimiento.|F|Una asociación no demuestra una causa: puede que los buenos alumnos hagan más deberes o que influya un tercer factor.",
      "El abandono de participantes es una amenaza a la validez interna.|V",
      "En un cuasiexperimento, el riesgo principal es que los grupos ya fueran diferentes antes de empezar.|V",
      "Los métodos cuantitativos y cualitativos compiten entre sí, y la evidencia aconseja quedarse con los primeros.|F|No compiten: los cuantitativos dicen si algo funciona y cuánto, y los cualitativos ayudan a entender por qué y cómo."
    ],
    q: [
      "Se registra la conducta disruptiva de un alumno sin intervención, con un programa de refuerzo, otra vez sin él y de nuevo con él. ¿Qué diseño es?|Un diseño ABAB|Una línea base múltiple|Un cuasiexperimento|Alterna fases sin intervención (A) y con ella (B). Si la conducta cambia con cada fase, es razonable atribuirle el cambio.",
      "Un estudio sigue a los mismos alumnos desde 1.º de primaria hasta 4.º de ESO. ¿Cuál es su limitación principal?|El abandono de participantes|Su generalización limitada|El coste de aleatorizar|Es un diseño longitudinal, cuyas limitaciones son el abandono de participantes y el largo plazo.",
      "¿Qué diseño permite con más claridad atribuir el efecto a la intervención?|El ensayo aleatorizado|El estudio correlacional|La investigación-acción|Al decidir el azar quién recibe la intervención, los grupos son parecidos en todo lo demás.",
      "Un claustro quiere mejorar su propia práctica en ciclos de planificar, actuar, observar y reflexionar. ¿Qué enfoque utiliza?|La investigación-acción|El diseño cuasiexperimental|La línea base múltiple|La investigación-acción la llevan a cabo los propios docentes para mejorar su práctica en esos ciclos."
    ],
    inc: [
      "Sobre los diseños de investigación|PISA permite concluir relaciones causales|El ensayo aleatorizado puede ser costoso|El cuasiexperimento compara grupos ya formados|Los estudios descriptivos y correlacionales como PISA detectan asociaciones, pero no permiten concluir causalidad."
    ],
    seq: [
      "Fases de un diseño ABAB|Línea base sin intervención>Primera intervención>Retirada de la intervención>Reintroducción de la intervención"
    ],
    cls: [
      "Validez|Interna: abandono de participantes; mala aplicación de las pruebas; causas alternativas|Externa: generalizar a otros centros; generalizar a otros momentos; aplicar a otras personas"
    ] },
  { t: "Tamaño del efecto y metaanálisis",
    tip: "La significación estadística indica que una diferencia probablemente no se debe al azar, pero no dice cuánto, y para medir la magnitud está el tamaño del efecto (d de Cohen, g de Hedges o r). Las etiquetas de Cohen (0,2, 0,5 y 0,8) encajan mal en educación, donde efectos de 0,10 a 0,25 desviaciones típicas pueden ser relevantes. El metaanálisis combina efectos y analiza heterogeneidad y moderadores, pero sufre el sesgo de publicación. Visible Learning de Hattie sirve como mapa, no como clasificación.",
    v: [
      "Significación estadística=Indica que una diferencia probablemente no se debe al azar",
      "Tamaño del efecto=Magnitud de una diferencia o asociación, por ejemplo en desviaciones típicas",
      "d de Cohen=Diferencia de medias de dos grupos dividida por su desviación típica",
      "g de Hedges=Índice que se interpreta como d y corrige su ligero sesgo con muestras pequeñas",
      "Metaanálisis=Síntesis estadística de los tamaños del efecto de muchos estudios sobre una pregunta",
      "Heterogeneidad=Grado en que los estudios de una síntesis coinciden o varían mucho",
      "Moderadores=Variables como la edad o el tipo de prueba que explican diferencias entre estudios",
      "Sesgo de publicación=Mayor publicación de resultados positivos, que infla los efectos medios"
    ],
    g: [
      "Hattie propone un «punto de bisagra» en una d de ___.|0,40|0,50|0,20",
      "Según las referencias de Cohen, un efecto de 0,8 se considera ___.|grande|mediano|pequeño",
      "En pruebas estandarizadas aplicadas a muchos alumnos, efectos de 0,10 a ___ desviaciones típicas pueden ser relevantes.|0,25|0,50|0,80",
      "En el metaanálisis de Kluger y DeNisi (1996), más del ___ de los efectos del feedback fue negativo.|38 %|25 %|50 %",
      "En la actualización de Korpershoek, de Boer y Mouw (2026), la g de 0,22 baja a ___ al corregir el sesgo de publicación.|0,17|0,11|0,05"
    ],
    tf: [
      "Con muestras enormes, diferencias mínimas pueden resultar estadísticamente significativas.|V",
      "Una d de 0,50 indica que la intervención funciona en la mitad de los alumnos.|F|Indica que el grupo de intervención supera al de control en media desviación típica.",
      "El efecto negativo de las recompensas tangibles (−0,34, Deci et al., 1999) se midió sobre el rendimiento escolar.|F|Se midió sobre la motivación intrínseca, no sobre el rendimiento.",
      "Combinar muchos estudios débiles en un metaanálisis no produce una conclusión sólida.|V"
    ],
    q: [
      "Un programa barato aplicado a todo el alumnado de un país mejora una prueba estandarizada en 0,15 desviaciones típicas. ¿Cómo debe valorarse?|Puede ser relevante, aunque sea «pequeño»|Es irrelevante por no llegar a 0,2|Es grande, porque supera el punto de bisagra|En educación, efectos de 0,10 a 0,25 pueden importar, sobre todo si la intervención es barata y llega a mucha población.",
      "¿Qué crítica principal recibe Visible Learning de Hattie?|Mezcla metaanálisis muy heterogéneos|Reúne demasiado pocos estudios|Prescinde del tamaño del efecto|Reúne más de 800 metaanálisis con diseños, edades y pruebas distintos. Se considera útil como mapa, no como clasificación.",
      "¿Qué índice expresa la fuerza de la asociación entre dos variables?|r|d de Cohen|g de Hedges|El coeficiente de correlación r expresa la fuerza de la asociación. d y g expresan diferencias de medias.",
      "En Alfieri et al. (2011), el descubrimiento sin ayuda obtuvo −0,38. ¿Qué indica el signo negativo?|Que rinde peor que la comparación|Que el efecto no es significativo|Que es pequeño en valor absoluto|Un valor negativo indica que la intervención rinde peor que la comparación, aquí la instrucción explícita."
    ],
    inc: [
      "Sobre las fuentes de síntesis de evidencia|La EEF es una agencia estadounidense|El WWC es una agencia estadounidense|La OCDE publica informes de evidencia|La Education Endowment Foundation es británica. El What Works Clearinghouse sí es estadounidense."
    ],
    seq: [],
    cls: [
      "Signo del efecto medio|Positivo: feedback; descubrimiento guiado; gestión del aula; Pigmalión|Negativo: recompensas tangibles sobre la motivación intrínseca; descubrimiento sin ayuda"
    ] },
  { t: "Clásicos revisados y neuromitos",
    tip: "Al revisar los clásicos, el patrón se repite: el fenómeno existe, pero es más pequeño y más dependiente del contexto. Pigmalión tiene una d media de 0,11 (Raudenbush, 1984), las intervenciones de mentalidad de crecimiento, de 0,08 y 0,05, y el test del malvavisco pierde fuerza al controlar el origen familiar. Los neuromitos están muy extendidos: los docentes españoles no reconocieron como falsos el 49,1 % de media, y saber más del cerebro predijo más creencia. La defensa es preguntar qué estudios con alumnos reales los apoyan.",
    v: [
      "Neuromito=Creencia falsa sobre el cerebro presentada como científica para justificar prácticas",
      "Efecto Mozart=Creencia de que escuchar música clásica mejora la inteligencia",
      "Brain Gym=Movimientos coordinados a los que se atribuye, sin base, mejorar el aprendizaje",
      "Hipótesis del ajuste=Enseñar en el estilo preferido de cada alumno mejoraría su aprendizaje",
      "Raudenbush (1984)=Metaanálisis que halló una d media de 0,11 en el efecto Pigmalión",
      "Watts, Duncan y Quan=Autores que revisaron en 2018 el test del malvavisco",
      "Pashler et al. (2008)=Sin evidencia adecuada de que enseñar en el estilo preferido mejore el aprendizaje",
      "Yerkes y Dodson (1908)=Ley del nivel óptimo de activación obtenida con ratones, no con alumnos"
    ],
    g: [
      "Ferrero, Garaizar y Vadillo encuestaron a ___ docentes españoles de 15 comunidades autónomas.|284|328|248",
      "De media, los docentes españoles no reconocieron como falsos el ___ de los neuromitos.|49,1 %|91,1 %|38 %",
      "Que se aprende mejor en el estilo preferido lo dio por cierto el ___ de los docentes españoles.|91,1 %|94 %|82 %",
      "Según Raudenbush (1984), con más de dos semanas de contacto previo el efecto Pigmalión fue de ___.|−0,06|0,23|0,11",
      "Macdonald et al. (2017) comprobaron que la formación en neurociencia ___ los neuromitos, pero no los elimina.|reduce|refuerza|mantiene"
    ],
    tf: [
      "El estudio de Lewin, Lippitt y White (1939) demostró la superioridad del estilo democrático.|F|Fue un estudio exploratorio con muestras muy pequeñas. Tiene valor histórico, pero no demuestra esa superioridad.",
      "El efecto Pigmalión fue mayor cuando el docente conocía al alumnado desde hacía meses.|F|Fue al revés: mayor (0,23) con dos semanas o menos de contacto, y −0,06 con más contacto previo.",
      "El neuromito más aceptado por los docentes españoles fue que los ambientes ricos en estímulos mejoran el cerebro de los preescolares.|V",
      "Dekker et al. (2012) hallaron que el interés por la neurociencia no protege de los neuromitos.|V"
    ],
    q: [
      "Un centro va a contratar un taller que promete «activar el hemisferio derecho» para mejorar el aprendizaje. ¿Qué debería preguntar primero la orientadora?|Qué estudios con alumnos reales lo apoyan|Cuántos centros lo han contratado ya|Qué región cerebral dice estimular|La defensa más eficaz ante un neuromito es preguntar siempre qué estudios con alumnos reales apoyan la afirmación.",
      "Al revisar el test del malvavisco (Watts, Duncan y Quan, 2018), ¿qué ocurrió con la asociación con el rendimiento a los 15 años?|Fue la mitad y cayó al controlar el origen familiar|Se duplicó al controlar el origen familiar|Se mantuvo igual tras controlar el origen familiar|Fue la mitad de la original y cayó unos dos tercios al controlar el origen familiar y las capacidades tempranas.",
      "¿Qué tamaño tuvieron las intervenciones de mentalidad de crecimiento en Sisk et al. (2018)?|Una d de 0,08|Una d de 0,40|Una d de 0,23|Sisk et al. (2018) hallaron una d de 0,08, y Macnamara y Burgoyne (2023), una d de 0,05.",
      "¿Qué patrón suele repetirse al revisar los clásicos de la disciplina?|El fenómeno existe, pero es menor y contextual|El fenómeno desaparece por completo|El efecto original estaba subestimado|Los clásicos abrieron preguntas importantes, pero muestran que un solo estudio no basta para fundamentar una práctica."
    ],
    inc: [
      "Sobre los estilos de aprendizaje|Enseñar en el estilo preferido mejora el aprendizaje|Conviene ajustar el formato al contenido|Es una creencia muy aceptada entre docentes|No hay evidencia adecuada de la hipótesis del ajuste (Pashler et al., 2008). Lo útil es ajustar el formato al contenido."
    ],
    seq: [],
    cls: [
      "Tipo de idea|Neuromito: solo se usa el 10 % del cerebro; efecto Mozart; Brain Gym; hemisferio dominante|Clásico revisado: Pigmalión; test del malvavisco; mentalidad de crecimiento; ley de Yerkes y Dodson"
    ] },
  { t: "Líneas de investigación abiertas",
    tip: "Los programas de investigación han sido el proceso-producto, el de la cognición del alumno y el ecológico, que hoy conviven y se combinan. Entre las líneas activas están la ciencia cognitiva aplicada, la autorregulación, la motivación, las emociones académicas, el aprendizaje socioemocional, la inclusión, la inteligencia artificial y la replicabilidad. La IA generativa plantea el riesgo de que el alumno descargue en ella el esfuerzo cognitivo. Ante una propuesta, conviene preguntar por la comparación, el tamaño del efecto, el contexto y la replicación.",
    v: [
      "Programa proceso-producto=Relaciona conductas observables del docente con el rendimiento del alumnado",
      "Cognición del alumno=Programa centrado en lo que piensa, cree y espera quien aprende",
      "Programa ecológico=Estudia el aula como un sistema de relaciones, inspirado en Bronfenbrenner",
      "Replicabilidad=Que un resultado se mantenga cuando lo reproducen equipos independientes",
      "Competencias genéricas=Capacidades como el pensamiento crítico o la creatividad",
      "Tutores inteligentes=Sistemas que han mostrado efectos positivos en metaanálisis",
      "IA generativa=Frontera abierta con riesgo de que el alumno deje de supervisar su comprensión",
      "EEF y WWC=Síntesis de evidencia con criterios explícitos, británica y estadounidense"
    ],
    g: [
      "En el programa de la cognición del alumno, sus cogniciones ___ entre lo que hace el docente y lo que se aprende.|median|compiten|alternan",
      "Los estudios sobre IA generativa de 2024 a 2026 son ___ y heterogéneos.|preliminares|concluyentes|negativos",
      "La investigación sobre la pericia indica que las competencias genéricas dependen mucho del conocimiento del ___.|dominio|alumno|docente",
      "La replicabilidad exige ensayos aleatorizados por aula o por centro y corregir el sesgo de ___.|publicación|selección|respuesta",
      "Durante décadas predominó el programa ___, que relacionaba conductas del docente con el rendimiento.|proceso-producto|ecológico|cognitivo"
    ],
    tf: [
      "Los tutores inteligentes han mostrado efectos positivos en metaanálisis.|V",
      "La investigación ya ha establecido que la IA generativa mejora el aprendizaje autónomo.|F|Es una frontera abierta: los estudios de 2024 a 2026 son preliminares y heterogéneos.",
      "Si un programa carece de estudios controlados, queda desacreditado.|F|No está necesariamente desacreditado, pero tampoco tiene evidencia que justifique invertir en él tiempo y dinero.",
      "En el programa ecológico, el docente no es el único protagonista del aula.|V"
    ],
    q: [
      "A una orientadora le ofrecen un programa «basado en el cerebro» para mejorar la atención, avalado solo por testimonios. ¿Qué es lo más razonable concluir?|Que no hay evidencia que justifique invertir|Que está desacreditado y debe rechazarse|Que los testimonios bastan como evidencia|Sin estudios controlados no está necesariamente desacreditado, pero no justifica invertir tiempo y dinero del centro.",
      "¿Qué pregunta abierta corresponde a la línea de autorregulación y metacognición?|Si el profesorado habitual puede enseñarlas con eficacia|Cómo llevar la recuperación y el espaciado a la clase|Qué componentes de los programas producen efectos|Se pregunta si el profesorado habitual puede enseñarlas con la eficacia de los investigadores.",
      "¿Cuándo gana credibilidad un resultado de investigación?|Cuando lo reproducen equipos independientes|Cuando lo publica una revista de prestigio|Cuando alcanza una significación muy alta|La replicación por equipos independientes es lo que da credibilidad a un resultado.",
      "¿Qué debate de fondo sigue abierto sobre el pensamiento crítico o la creatividad?|Si se transfieren sin saber de la materia|Si pueden medirse con pruebas estándar|Si dependen de la maduración prefrontal|Se discute si pueden enseñarse y transferirse sin conocimiento del dominio. La pericia indica que dependen mucho de él."
    ],
    inc: [
      "Sobre la lectura crítica de una propuesta educativa|Bastan testimonios favorables de otros centros|Hay que preguntar por el tamaño del efecto|Conviene saber con qué alumnado se obtuvo|La primera pregunta es si hay estudios con grupo de comparación o solo testimonios."
    ],
    seq: [
      "Preguntas de lectura crítica, en el orden del temario|¿Hay estudios con grupo de comparación?>¿De qué tamaño es el efecto?>¿Con qué alumnado y contexto se obtuvo?>¿Se ha replicado o lo resume una síntesis fiable?"
    ],
    cls: [] }
] },
{ n: 4, t: "El conductismo entra en clase", cap: 2, pir: "alta", mods: [
  { t: "Aprender y educar no son lo mismo",
    tip: "El aprendizaje es un cambio relativamente estable en la conducta o el conocimiento debido a la experiencia, y ocurre a todas horas. La educación es un proceso intencional y social que organiza experiencias para que se produzcan ciertos aprendizajes. Por eso puede haber educación sin aprendizaje y aprendizaje no buscado. Los enfoques conductual, cognitivo, constructivista y sociocultural difieren en qué cambia, qué hace el alumno y qué hace el docente, y se complementan.",
    v: [
      "Aprendizaje=Cambio relativamente estable en la conducta o el conocimiento debido a la experiencia",
      "Educación=Proceso intencional y social que organiza experiencias para provocar ciertos aprendizajes",
      "Maduración=Fuente de cambios, como empezar a andar, que no se deben a la experiencia",
      "Aprendizaje no buscado=El que se produce sin intención de enseñarlo, a veces de forma indeseada",
      "Teorías del aprendizaje=Responden qué cambia al aprender, qué hace el alumno y qué hace el docente",
      "Docente conductual=Organiza estímulos, práctica y refuerzos",
      "Docente sociocultural=Media y ajusta la ayuda en actividades compartidas",
      "Neurociencia educativa=Centros y programas que acercan la investigación sobre el cerebro a la escuela"
    ],
    g: [
      "Rendir peor un día por estar cansado no es aprender, porque el cambio no es relativamente ___.|estable|consciente|observable",
      "Para el enfoque constructivista, lo que cambia al aprender son los ___, que se reorganizan.|esquemas|refuerzos|hábitos",
      "Para el enfoque cognitivo, el alumno selecciona, procesa y ___ información.|almacena|construye|interioriza",
      "Ante un alumno que no entiende las fracciones, el enfoque ___ partiría de lo que ya cree sobre repartir.|constructivista|conductual|cognitivo",
      "A diferencia del aprendizaje, la educación es un proceso intencional y ___.|social|individual|espontáneo"
    ],
    tf: [
      "Empezar a andar es un aprendizaje, porque supone un cambio estable de conducta.|F|Los cambios que se deben solo a la maduración, como empezar a andar, no son aprendizaje.",
      "Puede haber educación sin aprendizaje.|V",
      "Lo aprendido se manifiesta siempre de inmediato en la conducta.|F|Se puede saber algo y no demostrarlo hasta que hay un motivo para hacerlo, como mostró Bandura.",
      "Las decisiones de aula se apoyan sobre todo en estudios hechos en contextos educativos.|V"
    ],
    q: [
      "Un alumno descubre que interrumpir es la forma más rápida de conseguir la atención de la profesora. ¿Qué ilustra?|Un aprendizaje no buscado e indeseado|Una educación sin ningún aprendizaje|Un cambio debido a la maduración|Es un aprendizaje real, debido a la experiencia, pero no buscado por la enseñanza y además indeseado.",
      "Ante un alumno que no entiende las fracciones, ¿qué haría el enfoque sociocultural?|Resolver con él problemas, retirando la ayuda|Descomponer la tarea y reforzar cada acierto|Cuidar la presentación para no saturar la memoria|Resolvería con él problemas cada vez más difíciles y retiraría la ayuda poco a poco. Las otras son las miradas conductual y cognitiva.",
      "Según el enfoque conductual, ¿qué papel tiene el alumno?|Responde a las contingencias del entorno|Construye a partir de lo que ya sabe|Participa en actividades compartidas|Para el enfoque conductual, el alumno responde a las contingencias, y el docente organiza estímulos, práctica y refuerzos.",
      "¿Qué rasgo distingue la educación del aprendizaje?|Su carácter intencional y social|Su estabilidad en el tiempo|Su origen en la experiencia|La estabilidad y el origen en la experiencia definen el aprendizaje. La educación es intencional y social."
    ],
    inc: [
      "Sobre la definición de aprendizaje|Lo aprendido se nota siempre de inmediato|Exige un cambio relativamente estable|Puede afectar a la conducta o al conocimiento|Se puede saber algo y no demostrarlo hasta que hay un motivo para hacerlo, como mostró Bandura."
    ],
    seq: [],
    cls: [
      "Enfoque|Conductual: la conducta cambia según sus consecuencias; el docente organiza refuerzos|Constructivista: los esquemas se reorganizan; el docente plantea retos ajustados al nivel|Sociocultural: funciones ejercidas primero con otros; el docente media y ajusta la ayuda"
    ] },
  { t: "Condicionamiento y enseñanza programada",
    tip: "El conductismo, formulado por Watson en 1913, se centra en lo observable. Pavlov describió el condicionamiento clásico, útil para entender reacciones emocionales en el aula. Thorndike formuló la ley del efecto y la del ejercicio (condicionamiento instrumental), y Skinner sistematizó el operante: el refuerzo aumenta la conducta y el castigo la reduce, y ambos pueden ser positivos (añadir) o negativos (quitar). La razón variable es el programa más resistente a la extinción, y la enseñanza programada lleva estos principios al aula.",
    v: [
      "Estímulo condicionado=Estímulo antes neutro que, tras emparejarse con el EI, provoca por sí solo la respuesta",
      "Ley del ejercicio=La práctica refuerza las conexiones (Thorndike)",
      "Refuerzo negativo=Retirada de un estímulo aversivo tras una conducta, que aumenta su probabilidad",
      "Castigo negativo=Retirada de un estímulo agradable tras una conducta, que reduce su probabilidad",
      "Extinción=Debilitamiento gradual de una conducta que deja de recibir refuerzo",
      "Razón variable=Se refuerza tras un número de respuestas que cambia",
      "Intervalo fijo=Se refuerza la primera respuesta emitida tras un tiempo constante",
      "Refuerzo continuo=Se da siempre y es útil para instaurar una conducta nueva"
    ],
    g: [
      "Un sello por cada cinco ejercicios terminados es un programa de ___.|razón fija|razón variable|intervalo fijo",
      "Los controles sorpresa, que compensan estudiar con regularidad, siguen un programa de ___.|intervalo variable|intervalo fijo|razón fija",
      "El programa de refuerzo más resistente a la extinción es el de ___.|razón variable|intervalo variable|razón fija",
      "En el condicionamiento operante, «negativo» significa ___ un estímulo.|retirar|evitar|castigar",
      "El refuerzo intermitente es útil sobre todo para ___ una conducta.|mantener|instaurar|extinguir"
    ],
    tf: [
      "En el refuerzo negativo se retira algo aversivo y la conducta se vuelve más probable.|V",
      "Con un examen cada cuatro semanas, los alumnos tienden a estudiar con regularidad durante todo el periodo.|F|Es un intervalo fijo: se tiende a estudiar justo antes. Estudiar con regularidad lo favorece el intervalo variable.",
      "Thorndike observó que los gatos aprendían por ensayo y error a abrir las cajas problema.|V",
      "Skinner diseñó la enseñanza programada para que todo el grupo avanzara a un mismo ritmo.|F|Le preocupaba justo el ritmo común: su propuesta permite que cada alumno avance a su propio ritmo."
    ],
    q: [
      "Una alumna empieza a llegar puntual porque así el tutor deja de enviar avisos a su casa. ¿Qué contingencia opera?|Refuerzo negativo|Castigo negativo|Refuerzo positivo|Se retira algo aversivo (los avisos) y la conducta aumenta. Es refuerzo, no castigo.",
      "Las primeras clases de matemáticas de un niño se asociaron a reprimendas en público, y ahora el simple cuaderno le provoca tensión. En términos de Pavlov, el cuaderno es…|un estímulo condicionado|un estímulo incondicionado|una respuesta condicionada|El cuaderno, antes neutro, se emparejó con las reprimendas y ahora provoca por sí solo la tensión.",
      "¿Qué le preocupaba a Skinner de la clase tradicional?|Que el alumno tardara días en saber si acertó|Que el contenido se dividiera en pasos pequeños|Que se pidiera una respuesta activa al alumno|Por eso propuso feedback inmediato. Los pasos pequeños y la respuesta activa son principios de su propia propuesta.",
      "Levantar la mano y recibir a veces la palabra y un elogio, sin saber cuándo, sigue un programa de…|razón variable|intervalo fijo|razón fija|El refuerzo llega tras un número de respuestas que cambia. Es el programa más resistente a la extinción."
    ],
    inc: [
      "Sobre las contingencias operantes|«Positivo» indica que la consecuencia es agradable|El refuerzo siempre aumenta la conducta|El castigo siempre reduce la conducta|«Positivo» y «negativo» significan añadir y quitar, no bueno y malo."
    ],
    seq: [
      "Condicionamiento clásico|Estímulo neutro>Emparejamiento repetido con el EI>El estímulo se vuelve condicionado>El EC provoca por sí solo la RC"
    ],
    cls: [
      "Contingencia operante|Refuerzo positivo: elogiar a quien participa; un sello por ejercicios terminados|Refuerzo negativo: dejar de enviar avisos al llegar puntual; dejar de recordar los deberes al entregarlos|Castigo negativo: coste de respuesta; tiempo fuera"
    ] },
  { t: "Técnicas operantes en el aula",
    tip: "Para instaurar conductas se usan el moldeamiento, el encadenamiento y el principio de Premack. Para mantenerlas o reducirlas, la economía de fichas, el contrato de contingencias, el coste de respuesta y el tiempo fuera (ambos castigos negativos), el refuerzo diferencial (DRO, DRA, DRI) y la extinción, con su estallido inicial. Para el grupo están el Good Behavior Game y el PBIS en tres niveles. Conviene reforzar con inmediatez y consistencia, preferir el refuerzo al castigo y retirar gradualmente los refuerzos artificiales.",
    v: [
      "Moldeamiento=Reforzar aproximaciones sucesivas a la conducta final",
      "Encadenamiento=Secuencia de pasos en la que cada paso sirve de señal para el siguiente",
      "Principio de Premack=Una actividad muy probable puede reforzar otra menos probable",
      "Coste de respuesta=Pérdida de parte de un refuerzo ya ganado por una conducta inadecuada",
      "Tiempo fuera=Retirada breve del acceso a situaciones reforzantes",
      "DRO=Reforzar que la conducta problema no aparezca durante un intervalo",
      "DRI=Reforzar una conducta incompatible con la problemática",
      "Estallido de extinción=Aumento pasajero de una conducta al dejar de reforzarla"
    ],
    g: [
      "«Cuando termines los problemas, puedes elegir libro en el rincón de lectura» aplica el principio de ___.|Premack|Thorndike|Skinner",
      "El Good Behavior Game lo propusieron Barrish, Saunders y Wolf en ___.|1969|1965|1977",
      "El contrato de contingencias es un acuerdo ___ que fija conductas, consecuencias y plazos.|escrito|verbal|tácito",
      "Reforzar una conducta alternativa más adecuada se denomina ___.|DRA|DRO|DRI",
      "Reforzar primero una frase, luego un párrafo y luego un texto con estructura es un ejemplo de ___.|moldeamiento|encadenamiento|modelado"
    ],
    tf: [
      "El coste de respuesta es un castigo negativo.|V",
      "Al aplicar la extinción, la conducta disminuye de forma gradual desde el primer día.|F|Al principio suele aumentar en frecuencia o intensidad antes de desaparecer: es el estallido de extinción.",
      "Si el docente cede durante el estallido de extinción, refuerza una versión más intensa con un programa intermitente.|V",
      "El tiempo fuera es un refuerzo negativo, porque consiste en retirar algo.|F|Retira el acceso a situaciones reforzantes y reduce la conducta: es un castigo negativo."
    ],
    q: [
      "Leo se levanta una y otra vez durante las tareas individuales, y su tutora le elogia en los momentos en que está sentado y trabajando. ¿Qué técnica aplica?|DRI|DRO|DRA|Estar sentado es incompatible con deambular, así que refuerza una conducta incompatible con la problemática.",
      "En el Good Behavior Game, ¿quién obtiene el premio?|Los equipos que no superan un límite de faltas|El equipo con más conductas positivas|Cada alumno que no cometa ninguna falta|Cada infracción suma un punto al equipo, y el premio es para los equipos que no superan el límite fijado.",
      "¿Cómo organizan los sistemas de apoyo conductual positivo (PBIS) la intervención?|En tres niveles, del centro al individuo|Mediante un contrato con cada alumno|Con un sistema de fichas para la etapa|Normas y refuerzo para todo el centro, apoyos adicionales para algunos y planes individuales para unos pocos.",
      "Antes de intervenir con Leo, su tutora observa cuándo ocurre la conducta y qué la sigue. ¿Cómo se llama ese paso?|Análisis funcional|Línea base múltiple|Moldeamiento|Observar los antecedentes y consecuencias de la conducta es el análisis funcional, que se estudia en la Unidad 15."
    ],
    inc: [
      "Sobre las pautas para aplicar técnicas operantes|Los refuerzos artificiales deben mantenerse siempre|Hay que reforzar con inmediatez y consistencia|Es preferible reforzar lo adecuado a castigar|Los refuerzos artificiales se retiran gradualmente para pasar a consecuencias naturales, como el elogio."
    ],
    seq: [
      "Niveles del PBIS|Normas y refuerzo para todo el centro>Apoyos adicionales para algunos alumnos>Planes individuales para unos pocos"
    ],
    cls: [
      "Finalidad de la técnica|Instaurar conductas: moldeamiento; encadenamiento; principio de Premack|Reducir conductas: coste de respuesta; tiempo fuera; extinción"
    ] },
  { t: "Aprender observando: Bandura",
    tip: "Bandura mostró que gran parte de lo que se aprende procede de observar a otros. En los estudios del muñeco Bobo (1961, 1963 y 1965), los niños que veían castigado al modelo lo imitaban menos, pero con un incentivo las diferencias casi desaparecían: aprender no equivale a ejecutar. El modelado requiere atención, retención, reproducción y motivación, esta última ligada al refuerzo vicario. Bandura añadió el determinismo recíproco y la autoeficacia (1977), y sirve de puente hacia los enfoques cognitivos.",
    v: [
      "Aprendizaje observacional=El que procede de ver a otros, también llamado modelado",
      "Muñeco Bobo=Muñeco hinchable usado por Bandura en sus estudios sobre imitación",
      "Refuerzo vicario=Aumento de una conducta al observar que otro recibe un refuerzo por ella",
      "Determinismo recíproco=Influencia mutua entre la persona, su conducta y el ambiente",
      "Autoeficacia=Confianza en la propia capacidad para realizar una tarea concreta (Bandura, 1977)",
      "Retención=Guardar lo observado en forma de imágenes o palabras",
      "Reproducción=Ser capaz de ejecutar lo que se ha retenido",
      "Pensar en voz alta=Hacer observable un proceso de resolución que normalmente es invisible"
    ],
    g: [
      "En el primer estudio del muñeco Bobo (___), niños de preescolar reproducían las agresiones de un adulto.|1961|1963|1965",
      "El estudio de 1963 mostró que también se imitaba a modelos ___.|filmados|castigados|desconocidos",
      "Señalar qué hay que mirar en una demostración favorece el proceso de ___.|atención|retención|reproducción",
      "Los compañeros pueden ser modelos más eficaces porque el observador los percibe ___ a sí mismo.|parecidos|superiores|ajenos",
      "Resumir los pasos de una demostración en una frase o un esquema favorece la ___.|retención|atención|motivación"
    ],
    tf: [
      "En el estudio de 1965, los niños que vieron castigado al modelo no llegaron a aprender la conducta.|F|La habían aprendido: con un incentivo, las diferencias casi desaparecieron. El castigo al modelo solo frenó la ejecución.",
      "El elogio a un alumno concreto también informa al resto de la clase.|V",
      "En el determinismo recíproco, el ambiente determina por sí solo la conducta y las creencias.|F|Persona, conducta y ambiente se influyen mutuamente, sin que ninguno determine por sí solo a los otros.",
      "El modelado no tiene por qué limitarse a conductas motoras.|V"
    ],
    q: [
      "Un alumno que se cree negado para el dibujo evita dibujar, tiene pocas oportunidades de mejorar y confirma su creencia. ¿Qué concepto ilustra?|El determinismo recíproco|El refuerzo vicario|El estallido de extinción|Creencias, conducta y ambiente se influyen mutuamente y se refuerzan en círculo.",
      "¿Qué aportación central se desprende del estudio de Bandura de 1965?|Distinguir aprendizaje y ejecución|Probar la imitación de modelos filmados|Formular el concepto de autoeficacia|Todos aprendieron la conducta, aunque no todos la ejecutaran. La imitación filmada es de 1963 y la autoeficacia, de 1977.",
      "Un profesor verbaliza su razonamiento mientras resuelve un problema en la pizarra. ¿Qué está haciendo?|Modelar un proceso cognitivo|Aplicar un refuerzo vicario|Moldear una conducta motora|Pensar en voz alta convierte en observable un proceso normalmente invisible.",
      "¿Por qué se considera a Bandura un puente entre el conductismo y los enfoques cognitivos?|Atiende a consecuencias y expectativas|Niega el papel de las consecuencias|Reduce el aprendizaje a ensayo y error|Conserva el interés por la conducta y sus consecuencias, pero da un papel central a la atención, la memoria y las expectativas."
    ],
    inc: [
      "Sobre el aprendizaje observacional|Exige que el observador reciba refuerzo directo|Requiere atención, retención, reproducción y motivación|Los ejemplos resueltos son una forma de modelado|Gran parte del aprendizaje procede de observar a otros, sin necesidad de refuerzo directo."
    ],
    seq: [
      "Procesos del aprendizaje observacional|Atención>Retención>Reproducción>Motivación"
    ],
    cls: [] }
] }
);

// SAIMAP Psicología · Educativa · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Piaget, Vygotsky, Bruner y Ausubel", cap: 2, pir: "alta", mods: [
  { t: "Piaget: el alumno que construye",
    tip: "Para Piaget el alumno construye activamente su comprensión a partir de la maduración y la experiencia. Los esquemas cambian por asimilación, que incorpora lo nuevo a un esquema existente, y por acomodación, que modifica el esquema. El motor es la equilibración, que resuelve el conflicto cognitivo. Su teoría no pide un docente pasivo, sino uno que diseñe situaciones, plantee problemas y escuche el razonamiento.",
    v: [
      "Esquema=Estructura organizada de acciones o ideas que se aplica a situaciones parecidas",
      "Asimilación=Incorporación de lo nuevo a una estructura que ya existe, sin modificarla",
      "Acomodación=Modificación de una estructura porque lo nuevo no encaja en ella",
      "Equilibración=Tendencia a resolver contradicciones entre lo que se espera y lo que se encuentra",
      "Conflicto cognitivo=Contradicción incómoda que empuja a revisar una idea previa",
      "Desfases (décalages)=Resolver una tarea con un material y fallarla con otro distinto",
      "Operaciones concretas=Estadio de 7–11 años con conservación, clasificación y seriación",
      "Operaciones formales=Estadio desde los 11–12 años con razonamiento hipotético-deductivo"
    ],
    g: [
      "Una niña que solo conoce perros llama «perro» al primer gato que ve: está ___.|asimilando|acomodando|equilibrando",
      "El egocentrismo y la ausencia de conservación caracterizan el estadio ___.|preoperacional|sensoriomotor|concreto",
      "La permanencia del objeto se adquiere en el estadio ___.|sensoriomotor|preoperacional|formal",
      "Una tarea demasiado alejada de los esquemas disponibles no produce conflicto, sino ___.|desconcierto|equilibrio|acomodación",
      "Para Piaget, la actividad del alumno que importa es ante todo ___.|mental|manipulativa|social"
    ],
    tf: [
      "Piaget defendía que el docente no interviniera y se limitara a esperar el desarrollo del alumno.|F|Es un error frecuente: su teoría pide un docente que diseñe situaciones, plantee problemas y escuche el razonamiento.",
      "Manipular objetos ayuda a aprender si obliga a pensar, no por sí mismo.|V",
      "Con tareas más sencillas, los niños muestran capacidades antes de lo que predecían los estadios de Piaget.|V",
      "Piaget concedió un gran peso a la cultura y a la instrucción en el desarrollo cognitivo.|F|Les concedió poco peso. Fue Vygotsky quien puso la cultura y la instrucción en el centro."
    ],
    q: [
      "Un alumno cree que los objetos pesados se hunden y ve flotar un enorme barco de acero. Según Piaget, ¿qué genera esa experiencia?|Un conflicto cognitivo|Una asimilación directa|Un desfase horizontal|La contradicción entre lo esperado y lo observado rompe el equilibrio y empuja a revisar la idea previa.",
      "Un niño llama «pájaro» a un murciélago y, tras observar que no tiene plumas y es un mamífero, crea una categoría nueva. ¿Qué proceso muestra el cambio?|Acomodación|Asimilación|Conservación|El esquema se modifica porque lo nuevo no encaja: eso es acomodación. Llamarlo pájaro sin dudar habría sido asimilación.",
      "Un mismo niño resuelve una tarea de conservación con plastilina y la falla con agua. ¿Qué crítica a Piaget ilustra?|Los desfases entre materiales|La subestimación de la cultura|El papel del habla privada|Los décalages son difíciles de encajar en los estadios globales que proponía la teoría.",
      "¿Qué estrategia docente es especialmente piagetiana?|Predecir y comprobar que falla|Repetir hasta automatizar|Dar la regla y aplicarla|Predecir qué pasará y ver que no ocurre así provoca conflicto cognitivo, el motor de la revisión de las ideas."
    ],
    inc: [
      "Sobre Piaget y la enseñanza|Los estadios tienen edades fijas e iguales para todos|El alumno construye su comprensión del mundo|El conflicto cognitivo empuja a revisar las ideas|Las edades de los estadios son aproximadas y varían de unas personas a otras."
    ],
    seq: [
      "Estadios de Piaget|Sensoriomotor>Preoperacional>Operaciones concretas>Operaciones formales"
    ],
    cls: [
      "Proceso de cambio del esquema|Asimilación: llamar perro al primer gato; aplicar un esquema existente; llamar pájaro al murciélago sin dudar|Acomodación: crear la categoría gato; modificar el esquema; revisar la idea de que lo pesado se hunde"
    ] },
  { t: "Vygotsky: aprender con otros",
    tip: "Para Vygotsky las funciones psicológicas superiores tienen origen social y están mediadas por signos, sobre todo el lenguaje. Según la ley de doble formación, toda función aparece primero en el plano interpsicológico y después en el intrapsicológico. La ZDP es la distancia entre el nivel de desarrollo real y el potencial, y en ella trabaja la enseñanza eficaz: el aprendizaje tira del desarrollo.",
    v: [
      "Funciones superiores=Atención voluntaria, memoria lógica y razonamiento, de origen social",
      "Mediación=Transformación del pensamiento mediante instrumentos y signos culturales",
      "Ley de doble formación=Toda función aparece primero entre personas y después dentro del niño",
      "Habla privada=Instrucciones en voz alta que el niño se da para regular su acción",
      "Nivel de desarrollo real=Lo que el niño resuelve solo",
      "Nivel de desarrollo potencial=Lo que el niño resuelve con ayuda de un adulto o compañero más capaz",
      "ZDP=Distancia entre lo que se resuelve solo y lo que se resuelve con ayuda",
      "Evaluación dinámica=Observar cuánto mejora el alumno cuando recibe pistas"
    ],
    g: [
      "Para Vygotsky, el signo mediador más importante es el ___.|lenguaje|número|dibujo",
      "Según la ley de doble formación, una función aparece primero en el plano ___.|interpsicológico|intrapsicológico|biológico",
      "Piaget había interpretado el habla privada como habla ___.|egocéntrica|interior|social",
      "La obra de Vygotsky llegó al público occidental con traducciones al inglés de 1962 y ___.|1978|1976|1956",
      "Para Vygotsky, el aprendizaje ___ del desarrollo.|tira|depende|procede"
    ],
    tf: [
      "Según Vygotsky, la buena enseñanza espera a que el desarrollo esté completo antes de introducir un contenido.|F|Sostenía lo contrario: el aprendizaje tira del desarrollo y la buena enseñanza se adelanta a él.",
      "Enseñar lo que el alumno ya domina no le hace avanzar, según el planteamiento de la ZDP.|V",
      "Dos alumnos con la misma puntuación inicial pueden diferir mucho en lo que logran con un poco de apoyo.|V",
      "Para Vygotsky, el habla privada es un síntoma de egocentrismo que desaparece sin función.|F|Esa era la lectura de Piaget. Para Vygotsky es una herramienta de pensamiento que acaba interiorizándose."
    ],
    q: [
      "Una niña resuelve sola sumas de una cifra y, con pistas de su profesora, logra sumas con llevadas. ¿Qué delimita esa diferencia?|La zona de desarrollo próximo|El estadio de operaciones concretas|El modo de representación icónico|La ZDP va del nivel real, lo que resuelve sola, al potencial, lo que resuelve con ayuda.",
      "Un niño hace un puzle diciéndose en voz alta «primero las esquinas». Según Vygotsky, ¿qué hace?|Regula su acción con el lenguaje|Muestra un pensamiento egocéntrico|Asimila el puzle a un esquema|El habla privada es un paso intermedio: el lenguaje social empieza a regular la propia acción.",
      "Un adulto dice «mira, aquí» para guiar la atención del niño, que con el tiempo se guía solo. ¿Qué principio ilustra?|La ley de doble formación|El currículo en espiral|La reconciliación integradora|La función aparece primero en el plano interpsicológico y después en el intrapsicológico.",
      "¿Qué prácticas actuales se apoyan en las aportaciones de Vygotsky?|Trabajo cooperativo y tutoría entre iguales|Enseñanza programada y refuerzo|Organizadores previos y mapas conceptuales|La interacción social está detrás del trabajo cooperativo, la tutoría entre iguales y el diálogo en clase."
    ],
    inc: [
      "Sobre Vygotsky|Formuló el término andamiaje en sus primeras obras|Las funciones superiores tienen origen social|La ZDP inspiró la evaluación dinámica|Vygotsky formuló la ZDP. El término andamiaje procede de Wood, Bruner y Ross (1976)."
    ],
    seq: [
      "Ley de doble formación|Un adulto guía la atención del niño («mira, aquí»)>El niño se da instrucciones en voz alta>El niño se guía con el lenguaje interiorizado"
    ],
    cls: [
      "Concepto y autor|Vygotsky: zona de desarrollo próximo; ley de doble formación; habla privada como herramienta|Wood, Bruner y Ross (1976): andamiaje; ayuda ajustada; retirada gradual del apoyo"
    ] },
  { t: "Bruner: descubrimiento y currículo en espiral",
    tip: "Bruner distinguió tres modos de representación, enactivo, icónico y simbólico, que aparecen en ese orden y conviven en el adulto. Su currículo en espiral retoma las ideas fundamentales con creciente profundidad. Propuso el aprendizaje por descubrimiento, pero la evidencia obliga a matizarlo: el descubrimiento sin ayuda rinde menos que la instrucción explícita y el guiado funciona mejor (Alfieri et al., 2011).",
    v: [
      "Modo enactivo=Representar el conocimiento mediante la acción",
      "Modo icónico=Representar el conocimiento mediante imágenes o esquemas",
      "Modo simbólico=Representar el conocimiento con el lenguaje y la notación",
      "Currículo en espiral=Volver a las ideas básicas con creciente profundidad a lo largo de los cursos",
      "Descubrimiento=El alumno encuentra relaciones y reglas explorando y resolviendo problemas",
      "Descubrimiento guiado=Exploración con andamiaje, ejemplos resueltos o autoexplicación",
      "Alfieri et al. (2011)=Metaanálisis sobre descubrimiento sin ayuda frente a guiado",
      "Kirschner, Sweller y Clark=Sostuvieron en 2006 que la mínima guía no funciona con principiantes"
    ],
    g: [
      "Cortar una tortilla en cuatro trozos iguales y repartirlos es una representación ___.|enactiva|icónica|simbólica",
      "Escribir 3/4 y operar con la notación corresponde al modo ___.|simbólico|icónico|enactivo",
      "La proporcionalidad en infantil, con recetas en primaria y como función lineal en secundaria ilustra el currículo en ___.|espiral|bloque|cascada",
      "Según Alfieri et al. (2011), el descubrimiento ___ da peores resultados que la instrucción explícita.|sin ayuda|guiado|explicado",
      "Para Kirschner, Sweller y Clark, la mínima guía falla con ___.|principiantes|expertos|adultos"
    ],
    tf: [
      "Los tres modos de representación de Bruner aparecen en orden durante el desarrollo y desaparecen los primeros en el adulto.|F|Aparecen en ese orden, pero conviven después en el adulto.",
      "El constructivismo como teoría del aprendizaje cuenta con amplio apoyo, a diferencia de la receta de mínima guía.|V",
      "El metaanálisis de Alfieri et al. (2011) concluyó que cualquier forma de descubrimiento supera a la instrucción explícita.|F|El descubrimiento sin ayuda rinde peor que la instrucción explícita. Solo el guiado supera a otras formas.",
      "Bruner firmó con Wood y Ross el trabajo que dio nombre al andamiaje.|V"
    ],
    q: [
      "Un profesor deja el material de la palanca y pide «averiguad cómo funciona». Otro plantea una pregunta, propone medir distancias, comenta intentos y pide formular la regla. ¿Qué los distingue?|Solo el segundo guía el descubrimiento|Solo el primero hace descubrimiento|Ninguno de los dos hace descubrimiento|Los dos hacen descubrimiento, pero solo el segundo lo guía con pregunta concreta, comentario y formulación final.",
      "¿Por qué la mínima guía no funciona con principiantes, según Kirschner, Sweller y Clark?|Buscan soluciones sin saber reconocerlas|Rechazan explorar el material propuesto|Ya dominan el contenido que se enseña|Les exige buscar soluciones sin los conocimientos necesarios para reconocerlas.",
      "Una maestra introduce las fracciones dibujando un círculo en cuartos antes de usar la notación. ¿Qué secuencia aplica?|Pasar de lo icónico a lo simbólico|Pasar de lo simbólico a lo enactivo|Pasar de lo enactivo a lo icónico|Dibujar es icónico y la notación es simbólica. Con principiantes conviene apoyar lo simbólico con lo enactivo o icónico.",
      "Según Bruner, ¿qué ventajas tiene lo que uno descubre?|Se comprende, se recuerda y se transfiere mejor|Se aprende más deprisa y con menos esfuerzo|Se memoriza de forma literal y estable|Bruner sostenía que lo descubierto se comprende mejor, se recuerda más, se transfiere con facilidad y enseña a aprender."
    ],
    inc: [
      "Sobre Bruner y el descubrimiento|Descubrir exige que el alumno lo haga solo|Las ideas básicas pueden presentarse en los primeros cursos|El descubrimiento guiado supera a otras formas de enseñanza|Descubrir no tiene por qué significar descubrir solo: Bruner participó en el trabajo que dio nombre al andamiaje."
    ],
    seq: [
      "Modos de representación de Bruner en el desarrollo|Enactivo>Icónico>Simbólico"
    ],
    cls: [
      "Modo de representación|Enactivo: repartir trozos de tortilla; manipular piezas; acción|Icónico: círculo coloreado en cuartos; esquema dibujado; imagen|Simbólico: escribir 3/4; operar con la notación; lenguaje"
    ] },
  { t: "Ausubel: el aprendizaje significativo",
    tip: "Para Ausubel lo que el alumno ya sabe es lo que más influye en lo que puede aprender. Separó dos ejes independientes: recepción frente a descubrimiento, cómo llega el contenido, y significativo frente a memorístico, cómo se integra. Defendía la recepción significativa, que exige material potencialmente significativo, inclusores pertinentes y disposición. Los organizadores previos tienden un puente cuando faltan inclusores.",
    v: [
      "Eje recepción–descubrimiento=Cómo llega el contenido, en su forma final o teniendo que encontrarlo",
      "Eje significativo–memorístico=Cómo se integra el contenido en lo que ya se sabe",
      "Inclusores=Conocimientos previos pertinentes con los que conectar lo nuevo",
      "Organizador expositivo=Introducción con ideas generales para acoger un material nuevo",
      "Organizador comparativo=Relaciona un material familiar con lo conocido por semejanzas y diferencias",
      "Diferenciación progresiva=Presentar primero lo más general e ir desplegando los detalles",
      "Reconciliación integradora=Relacionar ideas, señalar semejanzas y resolver contradicciones aparentes",
      "Aprendizaje supraordenado=Lo nuevo es más general e incluye ideas ya conocidas"
    ],
    g: [
      "Saber qué es un mamífero y aprender que el murciélago lo es constituye aprendizaje ___.|subordinado|supraordenado|combinatorio",
      "Relacionar oferta y demanda con la idea de equilibrio en física es aprendizaje ___.|combinatorio|subordinado|supraordenado",
      "Aprender el significado de una palabra aislada es aprendizaje significativo ___.|representacional|proposicional|de conceptos",
      "Comparar el corazón con una bomba antes de estudiar la circulación es un organizador ___.|comparativo|expositivo|conceptual",
      "Los mapas conceptuales de ___ hacen visibles las relaciones entre ideas.|Novak|Bruner|Gagné"
    ],
    tf: [
      "En Ausubel, el aprendizaje significativo es lo mismo que el aprendizaje por descubrimiento.|F|Es la trampa típica: son ejes distintos. Una exposición puede dar aprendizaje significativo y un descubrimiento, memorístico.",
      "Ausubel defendía la recepción significativa como la forma más eficiente de aprender grandes cuerpos de conocimiento.|V",
      "Un material bien organizado basta para garantizar el aprendizaje significativo.|F|Deben cumplirse tres condiciones a la vez: material, inclusores pertinentes y disposición a aprender así.",
      "Los organizadores comparativos se usan con material relativamente familiar.|V"
    ],
    q: [
      "Un alumno da con la solución de un problema por ensayo y error sin entender por qué funciona. Según Ausubel, ¿qué aprendizaje es?|Por descubrimiento y memorístico|Por descubrimiento y significativo|Por recepción y memorístico|Lo encontró él (descubrimiento), pero no lo relacionó con lo que sabe (memorístico). Los ejes son independientes.",
      "Una estudiante prepara el examen repitiendo la lección para aprobar, con un buen material y conocimientos previos. ¿Qué condición falla?|La disposición a aprender así|El material potencialmente significativo|Los inclusores pertinentes|Si el alumno solo quiere aprobar repitiendo, ni el mejor material garantiza el aprendizaje significativo.",
      "Tras conocer perros, delfines y caballos, un niño aprende el concepto «mamífero». ¿Qué tipo de aprendizaje es?|Supraordenado|Subordinado|Combinatorio|Lo nuevo es más general e incluye ideas ya conocidas. En el subordinado lo nuevo queda bajo una idea más general.",
      "¿Qué factor consideraba Ausubel el que más influye en lo que se puede aprender?|Lo que el alumno ya sabe|La forma en que llega el contenido|La motivación por las notas|Hoy forma parte del consenso: el conocimiento previo es el mejor predictor del nuevo aprendizaje."
    ],
    inc: [
      "Sobre las ideas de Ausubel|La recepción produce siempre aprendizaje memorístico|Los dos ejes de su teoría son independientes|Los organizadores previos sirven de puente con lo nuevo|Recibir el contenido no impide que sea significativo: una buena exposición relacionada con lo sabido lo es."
    ],
    seq: [],
    cls: [
      "Tipo de aprendizaje según la relación con lo sabido|Subordinado: el murciélago es un mamífero; lo nuevo bajo una idea general|Supraordenado: aprender mamífero tras perros y delfines; lo nuevo incluye lo conocido|Combinatorio: oferta y demanda con el equilibrio físico; ni incluye ni queda incluido"
    ] }
] },
{ n: 6, t: "Inteligencias y edades del aprendizaje", cap: 2, pir: "alta", mods: [
  { t: "Inteligencia general, inteligencias múltiples y altas capacidades",
    tip: "Spearman (1904) propuso el factor g, y hoy el modelo de mayor consenso es el jerárquico CHC. Gardner (1983) defendió varias inteligencias relativamente independientes, cuyo estatus científico se discute por su escasa validación psicométrica y neurocientífica (Waterhouse, 2006), y que no son estilos de aprendizaje. En altas capacidades, Renzulli añade creatividad y compromiso con la tarea, y Françoys Gagné separa dotación y talento.",
    v: [
      "Factor g=Componente común a todas las tareas intelectuales que explica sus correlaciones",
      "Modelo CHC=Estructura jerárquica con factor general, capacidades amplias y específicas",
      "Frames of Mind=Obra de Gardner de 1983 con las siete inteligencias iniciales",
      "Inteligencia naturalista=Reconocer y clasificar seres vivos y elementos del entorno",
      "Teoría triárquica=Propuesta de Sternberg con aspectos analítico, creativo y práctico",
      "Tres anillos=Capacidad por encima de la media, creatividad y compromiso con la tarea",
      "Dotación=Potencial natural en el modelo diferenciado de Françoys Gagné",
      "Talento=Competencia ya desarrollada en un campo, según Françoys Gagné"
    ],
    g: [
      "Spearman propuso el factor g en ___.|1904|1916|1983",
      "Gardner añadió la inteligencia naturalista en los años ___.|noventa|ochenta|setenta",
      "Terman es autor de la adaptación Stanford-Binet de ___.|1916|1904|1905",
      "En el modelo de Sternberg, adaptarse al entorno y resolver problemas cotidianos es la inteligencia ___.|práctica|creativa|analítica",
      "Las medidas de capacidades distintas tienden a ___ entre sí, lo que encaja con un factor general.|correlacionar|diferenciarse|anularse"
    ],
    tf: [
      "Gardner seleccionó sus inteligencias con criterios propios, no psicométricos.|V",
      "El propio Gardner presentó sus inteligencias como estilos de aprendizaje a los que ajustar la enseñanza.|F|Gardner niega que sean estilos de aprendizaje, y ajustar la enseñanza al modo preferido no tiene evidencia adecuada.",
      "La evidencia es favorable a la aceleración y al agrupamiento flexible por nivel en determinadas materias.|V",
      "El modelo diferenciado de dotación y talento es obra de Robert Gagné, autor de los eventos de la instrucción.|F|Es de Françoys Gagné. Confundirlo con Robert Gagné es una trampa típica del PIR."
    ],
    q: [
      "¿Qué componentes integra el modelo de los tres anillos de Renzulli?|Capacidad alta, creatividad y compromiso con la tarea|Dotación, talento y práctica deliberada|Inteligencia analítica, creativa y práctica|La superdotación está en la intersección de los tres anillos. Dotación y talento son de Françoys Gagné, y lo triárquico, de Sternberg.",
      "¿Qué autor señaló en 2006 la falta de validación psicométrica y neurocientífica de las inteligencias múltiples?|Waterhouse|Pashler|Renzulli|Waterhouse (2006) es la referencia de esta crítica. Pashler et al. (2008) revisaron los estilos de aprendizaje.",
      "¿Qué inteligencia llegó a plantear Gardner y dejó solo como propuesta?|La existencial|La naturalista|La intrapersonal|La naturalista se añadió en los noventa. La existencial quedó como propuesta.",
      "Según el modelo diferenciado de Françoys Gagné, ¿qué explica el paso de la dotación al talento?|La práctica, la motivación y el entorno|La creatividad y el compromiso con la tarea|El factor g y las capacidades amplias|El paso lo explican la práctica, la motivación y el entorno. Creatividad y compromiso son anillos de Renzulli."
    ],
    inc: [
      "Sobre la inteligencia general|Predice por sí sola casi todo el rendimiento académico|Predice el rendimiento de forma moderada-alta|Ocupa la cúspide del modelo CHC|Deja mucho margen a otras variables, como la motivación, el conocimiento previo o la calidad de la enseñanza."
    ],
    seq: [],
    cls: [
      "Modelo de la inteligencia|Gardner: siete inteligencias iniciales; naturalista añadida; criterios no psicométricos|Sternberg: analítica; creativa; práctica|CHC: factor general en la cúspide; capacidades amplias; capacidades específicas"
    ] },
  { t: "Los primeros años en la escuela",
    tip: "En los primeros años la formación de sinapsis es muy rápida y la poda consolida lo que se usa, así que la experiencia esculpe el cerebro. Hay periodos sensibles, pero «cuantos más estímulos, mejor» es un neuromito: basta un entorno ordinario rico en interacción, lenguaje y afecto. El vínculo, el juego, el lenguaje oral y las funciones ejecutivas sostienen el aprendizaje, y leer requiere enseñanza explícita.",
    v: [
      "Poda sináptica=Eliminación de las conexiones que no se usan y consolidación de las usadas",
      "Periodo sensible=Momento en que un aprendizaje concreto resulta especialmente fácil",
      "Juego simbólico=Hacer de médico regulando la conducta según las normas del papel",
      "Funciones ejecutivas=Procesos que permiten controlar la propia conducta y el pensamiento",
      "Inhibición=Frenar una respuesta automática o una distracción",
      "Flexibilidad cognitiva=Cambiar de regla o de perspectiva",
      "Conciencia fonológica=Capacidad de reconocer y manipular los sonidos de las palabras",
      "Decodificación=Paso de lo escrito a los sonidos que, enseñado de forma sistemática, sostiene la lectura"
    ],
    g: [
      "La percepción de los sonidos del habla se ajusta a la lengua del entorno ya durante el primer ___.|año|mes|lustro",
      "Seguir una instrucción de tres pasos exige sobre todo ___.|memoria de trabajo|inhibición|flexibilidad cognitiva",
      "Pasar de sumar a restar en una misma ficha exige ___.|flexibilidad cognitiva|inhibición|memoria de trabajo",
      "En el juego simbólico, el niño actúa por ___ de su nivel habitual.|encima|debajo|fuera",
      "Preguntar qué queda si a «sol» le quitas la s trabaja la conciencia ___.|fonológica|semántica|ejecutiva"
    ],
    tf: [
      "Cuantos más estímulos reciba un niño pequeño, mejor será su desarrollo cerebral.|F|Es un neuromito muy extendido. Lo que necesita es un entorno ordinario rico en interacción, lenguaje y afecto.",
      "Aprender a leer es tan natural como aprender a hablar y no requiere enseñanza.|F|Leer requiere enseñanza. La explícita y sistemática de conciencia fonológica y decodificación es la base de la alfabetización.",
      "La falta de vínculos afectivos y de atención personalizada es uno de los factores de riesgo más importantes para el desarrollo.|V",
      "Las funciones ejecutivas se desarrollan durante toda la infancia y siguen madurando en la adolescencia.|V"
    ],
    q: [
      "Un niño de cuatro años espera su turno en lugar de gritar la respuesta. ¿Qué función ejecutiva ejerce?|Inhibición|Memoria de trabajo|Flexibilidad cognitiva|Frenar una respuesta automática es inhibición. Seguir tres pasos sería memoria de trabajo y cambiar de regla, flexibilidad.",
      "¿Qué ocurre con las conexiones sinápticas tras la fase de formación rápida?|Se consolidan las usadas y se eliminan las demás|Se mantienen todas de forma estable|Se eliminan sobre todo las más usadas|Tras formarse sinapsis a gran velocidad llega la poda: la experiencia esculpe el cerebro.",
      "¿Qué recurso de aula reduce la carga sobre las funciones ejecutivas mientras se fortalecen?|Rutinas claras e instrucciones cortas|Tareas largas con varias reglas a la vez|Menos apoyos visuales y más consignas orales|Rutinas claras, instrucciones cortas y apoyos visuales alivian estas funciones en desarrollo.",
      "¿Por qué el vocabulario y la comprensión oral previos a la escuela son tan importantes?|Son la base de la comprensión lectora|Sustituyen la enseñanza de la decodificación|Determinan el periodo sensible del habla|Son la base de la comprensión lectora posterior. Conversar y leer en voz alta los enriquecen."
    ],
    inc: [
      "Sobre los primeros años|El juego es lo contrario de aprender|Una relación segura permite tolerar el error|La experiencia esculpe el cerebro|Jugar no es lo contrario de aprender: en el juego simbólico el niño actúa por encima de su nivel habitual."
    ],
    seq: [],
    cls: [
      "Función ejecutiva|Inhibición: esperar el turno; frenar una distracción|Memoria de trabajo: seguir una instrucción de tres pasos; mantener y manipular información|Flexibilidad cognitiva: pasar de sumar a restar; cambiar de perspectiva"
    ] },
  { t: "Adolescentes en el aula",
    tip: "El pensamiento formal no aparece en todos los adolescentes ni en todos los dominios a la vez: depende del conocimiento del dominio y de la instrucción. La corteza prefrontal madura hasta bien entrada la veintena, mientras crece la sensibilidad a la recompensa y a los iguales. El sueño se retrasa por un cambio en la melatonina, y Erikson situó aquí la construcción de la identidad.",
    v: [
      "Pensamiento formal=Razonar sobre hipótesis, controlar variables y pensar en lo posible",
      "Corteza prefrontal=Región de planificación, control de impulsos y regulación emocional",
      "Sensibilidad a los iguales=Mayor peso de la opinión de los amigos en las decisiones",
      "Melatonina=Hormona cuya secreción más tardía retrasa el sueño adolescente",
      "Identidad=Construcción de quién soy, qué se me da bien y qué quiero hacer",
      "Erikson=Autor que describió la adolescencia como etapa de construcción de la identidad",
      "Responsabilidad individual=Condición del cooperativo para aprovechar la influencia de los iguales",
      "Estructura para planificar=Plazos intermedios, guías y agendas que suplen la madurez prefrontal"
    ],
    g: [
      "La corteza prefrontal madura de forma prolongada, hasta bien entrada la ___.|veintena|pubertad|treintena",
      "Piaget situaba hacia los ___ años el inicio de las operaciones formales.|11–12|7–8|14–15",
      "Una alumna puede razonar de forma abstracta sobre música y de forma ___ sobre química.|concreta|formal|simbólica",
      "El cansancio de primera hora del adolescente se explica en parte por el ___ retrasado.|sueño|desarrollo|vínculo",
      "Dar opciones reales y explicar la utilidad de lo aprendido responde a la búsqueda de ___.|autonomía|recompensa|estructura"
    ],
    tf: [
      "El pensamiento formal aparece en todos los adolescentes hacia los 12 años y en todos los dominios a la vez.|F|No es universal y depende del conocimiento del dominio y de la instrucción recibida.",
      "Un adolescente que sabe qué es lo prudente puede asumir más riesgos cuando está con sus amigos.|V",
      "La tendencia adolescente a dormirse y despertarse más tarde es sobre todo una cuestión de pereza.|F|No es pereza: la melatonina se segrega más tarde, un cambio biológico con efectos en atención y memoria.",
      "La sensibilidad a los iguales puede jugar a favor si el trabajo en grupo está bien estructurado.|V"
    ],
    q: [
      "Iker, de 15 años, dice que la física «no sirve para nada». Su profesora le propone calcular la distancia de frenado de una moto, le da los pasos y le deja seguir en pareja. ¿Qué combina?|Identidad, autonomía, estructura e iguales|Recompensa, castigo, repetición y control|Conflicto cognitivo, modo enactivo y espiral|La tarea conecta con su identidad, da autonomía, ofrece estructura y aprovecha a un compañero.",
      "¿Qué implicación docente se deriva de que el pensamiento formal dependa del dominio?|Enseñar a razonar en cada materia|Esperar a que madure por sí solo|Darlo por supuesto desde los 12 años|El docente de secundaria no puede dar por supuesto el razonamiento abstracto: debe enseñarlo dentro de cada materia.",
      "¿Qué respuesta a la maduración prefrontal prolongada recoge la unidad?|Plazos intermedios, guías y agendas|Más exámenes finales y menos entregas|Trabajo autónomo sin supervisión|La planificación aún madura, así que conviene ofrecer estructura externa para planificar.",
      "¿Qué dos rasgos juntos ayudan a explicar la mayor asunción de riesgos con los amigos?|Sensibilidad a la recompensa y a los iguales|Sueño retrasado y búsqueda de identidad|Pensamiento formal y maduración precoz|La sensibilidad a la recompensa y a la opinión de los iguales coincide con una corteza prefrontal aún inmadura."
    ],
    inc: [
      "Sobre la adolescencia y el aprendizaje|La corteza prefrontal madura antes de los 15 años|El sueño se retrasa por un cambio en la melatonina|La identidad se construye también en la escuela|La corteza prefrontal madura de forma prolongada, hasta bien entrada la veintena."
    ],
    seq: [],
    cls: [
      "Rasgo de la etapa|Pensamiento formal dependiente del dominio: enseñar a razonar en cada materia|Maduración prefrontal prolongada: plazos intermedios; guías; agendas|Sensibilidad a los iguales: trabajo cooperativo con responsabilidad individual"
    ] },
  { t: "Aprender de adulto",
    tip: "El cerebro conserva plasticidad toda la vida. La inteligencia fluida alcanza su máximo en la juventud y declina de forma gradual, mientras la cristalizada se mantiene o crece en ausencia de enfermedad (Cattell y Horn). La andragogía de Knowles reúne supuestos útiles, como autodirección, experiencia, orientación a problemas y motivación interna, más que una teoría contrastada.",
    v: [
      "Plasticidad=Capacidad del cerebro de cambiar con la práctica durante toda la vida",
      "Inteligencia fluida=Razonar y resolver problemas nuevos con independencia de lo ya sabido",
      "Inteligencia cristalizada=Conocimiento y habilidades acumulados, como vocabulario o cultura general",
      "Andragogía=Supuestos de Knowles sobre cómo aprenden y deben enseñarse los adultos",
      "Autodirección=Querer decidir qué y cómo se aprende sin ser tratado como un niño",
      "Orientación a problemas=Implicarse más si lo aprendido resuelve problemas de la vida o el trabajo",
      "Motivación interna=Interés, autoestima o calidad de vida por encima de recompensas externas",
      "Aprendizaje permanente=Seguir aprendiendo a lo largo de la vida como objetivo educativo"
    ],
    g: [
      "La inteligencia fluida depende sobre todo de la eficiencia del ___.|procesamiento|vocabulario|contexto",
      "Explicar el significado de un refrán es un ejemplo de inteligencia ___.|cristalizada|fluida|práctica",
      "Resolver un rompecabezas lógico nuevo es un ejemplo de inteligencia ___.|fluida|cristalizada|creativa",
      "Knowles propuso la andragogía por contraste con la ___.|pedagogía|psicometría|didáctica",
      "Para seguir aprendiendo importa que el adulto atribuya sus logros a causas ___.|internas|externas|fortuitas"
    ],
    tf: [
      "La andragogía de Knowles es una teoría contrastada mediante ensayos controlados.|F|Es más un conjunto de supuestos útiles que una teoría contrastada.",
      "La inteligencia cristalizada se mantiene o incluso crece hasta edades avanzadas, en ausencia de enfermedad.|V",
      "La experiencia del adulto es siempre un recurso y nunca dificulta el aprendizaje.|F|Es un recurso, pero a veces también una fuente de ideas difíciles de cambiar.",
      "La práctica de recuperación y el repaso espaciado se aplican a cualquier edad.|V"
    ],
    q: [
      "Carmen, de 52 años, olvida casi todo un curso de dos horas sobre un programa. Su compañera le enseña con las facturas reales y le deja hacerlas. ¿Por qué funciona la segunda forma?|Se orienta a un problema y le pide hacer|Le presenta todas las funciones a la vez|Evita usar su experiencia previa|Respeta su experiencia, se orienta a un problema concreto y le pide que haga y recuerde, no solo que escuche.",
      "¿Qué evolución sigue la inteligencia fluida en la edad adulta?|Declive gradual|Mantenimiento estable|Crecimiento sostenido|Alcanza su máximo en la juventud y declina de forma gradual. La cristalizada es la que se mantiene o aumenta.",
      "Ante un contenido muy nuevo, un adulto necesita tanta estructura como cualquier principiante. ¿Qué límite de la andragogía ilustra?|No todos los adultos encajan en sus supuestos|Los adultos carecen de motivación interna|La plasticidad desaparece en la edad adulta|Sus principios no se aplican a todos los adultos, y muchos valen también para adolescentes.",
      "¿Quiénes distinguieron la inteligencia fluida de la cristalizada?|Cattell y Horn|Spearman y Terman|Knowles y Erikson|Cattell y Horn distinguieron estos dos grandes componentes, integrados después en el modelo CHC."
    ],
    inc: [
      "Sobre los supuestos de la andragogía|Los adultos prefieren las recompensas externas|Quieren decidir qué aprenden y cómo|Se implican más si lo aprendido resuelve problemas|Uno de sus supuestos es la motivación interna: les mueven más el interés o la autoestima que las recompensas."
    ],
    seq: [],
    cls: [
      "Componente de la inteligencia|Fluida: razonar ante problemas nuevos; eficiencia del procesamiento; declive gradual|Cristalizada: conocimiento acumulado; experiencia y educación; se mantiene o aumenta"
    ] }
] },
{ n: 7, t: "Competencias y calidad del aprendizaje", cap: 3, pir: "baja", mods: [
  { t: "Qué se espera del alumnado actual",
    tip: "Con la información a un clic, memorizar listas deja de ser el objetivo principal, pero el conocimiento no sobra: sin él no se puede buscar, juzgar ni seguir aprendiendo. El proyecto DeSeCo de la OCDE definió la competencia como responder a demandas complejas en un contexto movilizando conocimientos, habilidades y actitudes. PISA evalúa si se sabe aplicar lo aprendido a problemas nuevos.",
    v: [
      "Competencia=Responder a demandas complejas en un contexto movilizando recursos integrados",
      "DeSeCo=Proyecto de la OCDE, con informes de 2003 a 2005, que definió la competencia",
      "PISA=Evaluación de la OCDE de la aplicación de lectura, matemáticas y ciencias a los 15 años",
      "Informe Delors (1996)=Documento para la UNESCO con cuatro fines: conocer, hacer, convivir y ser",
      "Aprender a aprender=Dominar las estrategias para adquirir, organizar y revisar contenidos",
      "Formación integral=Contribuir al desarrollo personal, social y emocional además del académico",
      "Actuar de forma autónoma=Categoría DeSeCo de decidir, planificar y defender los propios derechos",
      "Nativos digitales=Etiqueta de Prensky (2001) que no garantiza competencia digital"
    ],
    g: [
      "La clave de la definición de competencia de DeSeCo está en el verbo «___».|movilizar|acumular|memorizar",
      "PISA evalúa aproximadamente cada ___ años al alumnado de 15 años.|tres|cuatro|dos",
      "Organizar con compañeros muy distintos un trabajo común corresponde a interactuar en grupos ___.|heterogéneos|homogéneos|reducidos",
      "Comparar dos ofertas de tarifa móvil es usar herramientas de forma ___.|interactiva|autónoma|cooperativa",
      "El informe Delors se elaboró para la ___.|UNESCO|OCDE|Unión Europea"
    ],
    tf: [
      "PISA mide si el alumnado ha aprendido el currículo concreto de su país.|F|PISA mide si se sabe aplicar lo aprendido a problemas nuevos, no si se ha cubierto el currículo de cada país.",
      "Las capacidades generales, como el pensamiento crítico, dependen mucho del conocimiento del dominio.|V",
      "Haber crecido rodeado de pantallas da por sí mismo una mejor competencia digital y una mayor capacidad multitarea.|F|Es el mito de los nativos digitales. Usar mucho el móvil no equivale a saber buscar información fiable o proteger datos.",
      "Las declaraciones de fines como la del informe Delors no dicen nada sobre cómo se aprende.|V"
    ],
    q: [
      "Un estudiante recita la fórmula del interés compuesto, pero no se da cuenta de que un préstamo rápido con cuota pequeña le saldrá carísimo. ¿Qué le falta?|Movilizar lo que sabe en la situación|Conocer la fórmula del interés compuesto|Memorizar más fórmulas financieras|Tiene el conocimiento, pero no lo moviliza cuando hace falta: la competencia exige saber y reconocer cuándo usarlo.",
      "¿Qué categoría DeSeCo ilustra preparar un plan de estudio realista para los exámenes?|Actuar de forma autónoma|Usar herramientas de forma interactiva|Interactuar en grupos heterogéneos|Tomar decisiones y planificar corresponde a actuar de forma autónoma.",
      "¿Qué lectura de las competencias desaconseja la unidad?|Que sustituyen a los contenidos|Que integran conocimientos y actitudes|Que exigen movilizar lo aprendido|La pericia muestra que las capacidades generales dependen del dominio: las competencias no sustituyen a los contenidos.",
      "¿Qué tres áreas evalúa PISA?|Lectura, matemáticas y ciencias|Lectura, idiomas y tecnología|Matemáticas, ciencias y civismo|Desde 2000, PISA evalúa lectura, matemáticas y ciencias del alumnado de 15 años."
    ],
    inc: [
      "Sobre las ideas compartidas por los marcos educativos|La formación termina con la escolaridad obligatoria|Importa aprender las estrategias, no solo los contenidos|Se espera de la escuela una formación integral|Una de esas ideas es aprender a lo largo de la vida: la escuela debe dejar al alumnado en condiciones de seguir aprendiendo."
    ],
    seq: [],
    cls: [
      "Categoría DeSeCo|Usar herramientas de forma interactiva: comparar tarifas móviles; manejar números e información|Interactuar en grupos heterogéneos: cooperar; resolver conflictos|Actuar de forma autónoma: planificar el estudio; defender los propios derechos"
    ] },
  { t: "Las competencias clave en España",
    tip: "La LOMLOE (Ley Orgánica 3/2020) adopta las ocho competencias clave de la Recomendación del Consejo de la UE de 22 de mayo de 2018. Son transversales, se orientan a un perfil de salida al terminar la educación básica e integran conocimientos, destrezas y actitudes. Bien entendido, el enfoque competencial exige más conocimiento, no menos, porque solo se puede movilizar lo que se tiene.",
    v: [
      "Competencias clave=Las ocho de la Recomendación de la UE de 2018 que adopta la LOMLOE",
      "Perfil de salida=Competencias esperadas al terminar la educación básica",
      "Transversalidad=Ninguna competencia pertenece a una sola asignatura",
      "Competencia plurilingüe=Usar varias lenguas para comunicarse y aprender",
      "Competencia emprendedora=Convertir ideas en proyectos con valor para otros",
      "Competencia ciudadana=Participar en la vida social conociendo sus normas y valores",
      "Competencia STEM=Razonar con números y datos y explicar el mundo con método científico",
      "Aprender a aprender=Parte de la competencia personal y social que gestiona el propio aprendizaje"
    ],
    g: [
      "La LOMLOE es la Ley Orgánica 3/2020, de 29 de ___.|diciembre|mayo|junio",
      "La Recomendación del Consejo de la UE sobre competencias clave es de 22 de mayo de ___.|2018|2020|2006",
      "Comprobar el origen de una imagen que circula en redes es una tarea de competencia ___.|digital|ciudadana|lingüística",
      "Montar una exposición sobre el patrimonio del barrio trabaja la conciencia y expresión ___.|culturales|ciudadanas|digitales",
      "Revisar por qué salió mal un examen y cambiar el método trabaja la competencia personal, social y de ___.|aprender a aprender|emprendimiento|comunicación"
    ],
    tf: [
      "La competencia artística-musical es una de las ocho competencias clave de la LOMLOE.|F|La competencia relacionada es conciencia y expresión culturales, que es más amplia.",
      "Saber estudiar no es un talento innato, sino algo que se puede y se debe enseñar.|V",
      "Interpretar una gráfica de crecimiento en Biología puede trabajar la competencia matemática.|V",
      "Bien entendido, el enfoque competencial supone enseñar menos contenido para dejar sitio a las destrezas.|F|Exige más conocimiento, no menos, porque solo se puede movilizar lo que se tiene."
    ],
    q: [
      "Un grupo entrega un vídeo muy bien montado sobre el cambio climático, pero no ha aprendido nada de climatología. ¿Qué riesgo ilustra?|Interpretar las competencias como menos contenido|Convertirlas en una lista de indicadores|Dejar de coordinar al profesorado|Leído como «menos contenido», el enfoque produce tareas atractivas pero vacías.",
      "¿Por qué el enfoque competencial obliga a coordinar al profesorado?|Las competencias son transversales|Cada competencia tiene su asignatura|El perfil de salida lo fija cada docente|Ninguna competencia pertenece a una sola asignatura, así que hay que planificar tareas que integren materias.",
      "¿Qué pregunta añade el perfil de salida a la programación?|Qué sabe hacer el alumnado con lo dado|Qué temas se han dado en el curso|Cuántas horas tiene cada materia|La pregunta deja de ser solo qué temas se han dado y pasa a ser también qué sabe hacer el alumnado con ellos.",
      "¿Qué competencia clave se apoya más en contenidos de la psicología de la educación?|Personal, social y de aprender a aprender|Matemática y en ciencia y tecnología|Conciencia y expresión culturales|Se apoya en estrategias de estudio, metacognición, motivación y gestión emocional."
    ],
    inc: [
      "Sobre las competencias clave|Se demuestran con un examen de definiciones|Integran conocimientos, destrezas y actitudes|Requieren aplicar lo aprendido en un contexto|Una competencia requiere tareas en contexto con un producto observable, no un examen de definiciones."
    ],
    seq: [
      "Hitos del enfoque competencial|Informe Delors para la UNESCO>Primera evaluación PISA>Informes DeSeCo de la OCDE>Recomendación de la UE sobre competencias clave>LOMLOE"
    ],
    cls: [] },
  { t: "De qué depende aprender bien",
    tip: "La calidad del aprendizaje depende de variables intrapersonales y contextuales que interactúan, y la que mejor predice lo que se aprenderá es el conocimiento previo. Marton y Säljö (1976) distinguieron el enfoque profundo del superficial, y Biggs añadió el de logro. Los enfoques dependen de la tarea y la evaluación, de ahí el alineamiento constructivo. Las grandes síntesis, como la de Hattie, sirven de mapa, no de clasificación exacta.",
    v: [
      "Enfoque profundo=Estudiar buscando el significado y relacionándolo con lo que ya se sabe",
      "Enfoque superficial=Retener datos sueltos para reproducirlos",
      "Enfoque de logro=Obtener la mejor nota posible con el menor coste (Biggs)",
      "Alineamiento constructivo=Coherencia entre objetivos, actividades de enseñanza y evaluación",
      "Variables intrapersonales=Conocimiento previo, capacidad, motivación, estrategias y emociones",
      "Variables contextuales=Instrucción, feedback, clima de aula, familia y nivel socioeconómico",
      "Experimento STAR=Estudio de Tennessee sobre ratio con beneficios modestos en primeros cursos",
      "Punto de bisagra=Tamaño del efecto de 0,40 que propone Hattie como referencia"
    ],
    g: [
      "Marton y Säljö describieron los enfoques profundo y superficial en ___.|1976|1996|1986",
      "El enfoque de logro puede ___ con cualquiera de los otros dos.|combinarse|confundirse|sustituirse",
      "Según la EEF, el impacto medio de la repetición de curso es ___.|negativo|nulo|modesto",
      "En la revisión de Cooper, Robinson y Patall (2006), los deberes se asociaban más con el rendimiento en ___.|secundaria|primaria|infantil",
      "Visible Learning de Hattie reúne más de ___ metaanálisis.|800|300|1.200"
    ],
    tf: [
      "Los enfoques de aprendizaje son rasgos fijos de cada estudiante que no dependen de la tarea.|F|No son rasgos fijos: dependen mucho de la tarea y de cómo se evalúa.",
      "El enfoque de logro de Biggs es otra forma de llamar al enfoque profundo.|F|Es una trampa típica: el de logro busca la mejor nota con el menor coste y puede combinarse con cualquiera.",
      "Una buena explicación aprovecha poco a quien no tiene los conocimientos previos necesarios.|V",
      "Un alumno muy capaz puede rendir menos en un aula desordenada.|V"
    ],
    q: [
      "En una asignatura el objetivo es analizar casos clínicos, pero el examen pide recitar criterios diagnósticos. ¿Qué principio se incumple?|El alineamiento constructivo|El enfoque de logro|El punto de bisagra|Objetivos, actividades y evaluación deben apuntar a lo mismo: el examen debería pedir analizar un caso nuevo.",
      "Dos estudiantes igual de motivados reciben la misma explicación y salen con aprendizajes muy distintos. ¿Qué lo explica mejor?|El conocimiento previo|El nivel socioeconómico|El clima de aula|Es la variable que mejor predice lo que se aprenderá, la idea central de Ausubel.",
      "Un examen que solo pide repetir definiciones empuja al alumnado hacia el enfoque…|superficial|profundo|de logro|Los enfoques dependen de cómo se evalúa: pedir reproducir favorece el enfoque superficial.",
      "¿Qué encontró el experimento STAR de Tennessee al reducir el número de alumnos por clase?|Beneficios modestos en los primeros cursos|Mejoras grandes en todas las etapas|Un efecto medio negativo en secundaria|Halló beneficios modestos en los primeros cursos. El efecto medio negativo corresponde a la repetición de curso."
    ],
    inc: [
      "Sobre las grandes síntesis de evidencia|Ofrecen una clasificación exacta de intervenciones|Ayudan a orientarse como mapa general|Hay que leerlas con cuidado|La síntesis de Hattie sirve como mapa general, no como clasificación exacta de intervenciones."
    ],
    seq: [],
    cls: [
      "Tipo de variable|Intrapersonal: conocimiento previo; motivación; estrategias de aprendizaje; emociones|Contextual: calidad de la instrucción; clima de aula; familia; nivel socioeconómico"
    ] },
  { t: "Enseñanza explícita o descubrimiento",
    tip: "El constructivismo como teoría del aprendizaje está aceptado, pero como receta de mínima guía lo cuestiona la evidencia. En el metaanálisis de Alfieri et al. (2011), con 164 estudios, el descubrimiento sin ayuda rindió menos que la instrucción explícita y el guiado superó a otras formas de enseñanza. Lo decisivo es la guía. Con alumnado experto, las tareas abiertas pueden ayudar por el efecto de inversión por pericia.",
    v: [
      "Instrucción explícita=Enseñanza clara y en pasos, con modelado, práctica guiada y feedback frecuente",
      "Descubrimiento sin ayuda=El alumno explora prácticamente solo tras recibir la tarea",
      "Descubrimiento guiado=Exploración estructurada por el docente con ejemplos o andamiaje",
      "Constructivismo como teoría=Cada persona construye su conocimiento sobre lo que ya sabe",
      "Receta de mínima guía=Creer que la mejor forma de enseñar es guiar lo menos posible",
      "Direct Instruction=Programa muy estructurado y guionizado desarrollado por Engelmann",
      "Stockard et al. (2018)=Revisión de 328 estudios cuyos autores califican los efectos de moderados a grandes",
      "Inversión por pericia=Lo que ayuda al novato puede estorbar al experto"
    ],
    g: [
      "El metaanálisis de Alfieri et al. (2011) reunió ___ estudios.|164|328|580",
      "El descubrimiento sin ayuda frente a la instrucción explícita obtuvo un tamaño del efecto de ___.|−0,38|0,30|−0,30",
      "El descubrimiento guiado se analizó en ___ comparaciones.|360|580|413",
      "La revisión de Stockard et al. (2018) abarcó estudios publicados entre 1966 y ___.|2016|2006|2011",
      "Para el novato, el descubrimiento sin ayuda supone una carga ___.|muy alta|ajustada|mínima"
    ],
    tf: [
      "La instrucción explícita equivale a una clase magistral en la que el alumnado escucha de forma pasiva.|F|No equivale a eso: el alumnado responde, practica y recibe feedback continuamente.",
      "Según Alfieri et al. (2011), la conclusión es que explorar resulta inútil.|F|La conclusión es que la guía es lo decisivo: el descubrimiento guiado obtuvo un efecto positivo.",
      "Las ayudas del descubrimiento guiado incluían andamiaje, autoexplicaciones y ejemplos resueltos.|V",
      "Con estudiantes que ya dominan lo básico, los problemas poco estructurados pueden servir para consolidar y transferir.|V"
    ],
    q: [
      "Una profesora reparte objetos y una báscula y pide que «descubran» por qué unos flotan, y muchos concluyen que flotan los ligeros. ¿Qué cambio recomienda la evidencia?|Ejemplo resuelto, predicción y explicación|Más tiempo libre de exploración|Sustituir la práctica por una lectura|El descubrimiento guiado, con ejemplo resuelto, predicción justificada y explicación final, pone la exploración al servicio de una idea.",
      "¿Qué caracteriza a Direct Instruction, el programa de Engelmann?|Está muy estructurado y guionizado|Deja explorar al alumnado sin guía|Se adapta al estilo de cada alumno|Es un programa muy estructurado y guionizado. Stockard et al. (2018) hallaron efectos que sus autores califican de moderados a grandes.",
      "¿Qué tamaño del efecto obtuvo el descubrimiento guiado en Alfieri et al. (2011)?|0,30|0,38|0,40|Fue de 0,30 en 360 comparaciones. El 0,40 es el punto de bisagra de Hattie.",
      "Un grupo de expertos rinde peor con instrucciones paso a paso que con un problema abierto. ¿Qué fenómeno explica el resultado?|El efecto de inversión por pericia|El descubrimiento sin ayuda|El alineamiento constructivo|Lo que ayuda al novato puede estorbar al experto, para quien las tareas abiertas pueden consolidar y transferir."
    ],
    inc: [
      "Sobre el debate entre explicar y descubrir|El aprendizaje activo supera siempre a la instrucción explícita|El constructivismo como teoría está ampliamente aceptado|Con novatos, la guía es lo decisivo|Es la trampa típica: con novatos, el descubrimiento sin ayuda rinde menos que la instrucción explícita."
    ],
    seq: [],
    cls: [
      "Papel del docente|Descubrimiento sin ayuda: presenta la tarea y se retira; evidencia desfavorable con novatos|Descubrimiento guiado: estructura, pregunta y orienta; ayudas como ejemplos resueltos|Instrucción explícita: explica y modela; retira la ayuda poco a poco"
    ] }
] },
{ n: 8, t: "Procesos, estrategias y carga cognitiva", cap: 3, pir: "media", mods: [
  { t: "Los procesos que intervienen al aprender",
    tip: "Beltrán (1993) propuso una secuencia de procesos: sensibilización, atención, adquisición, personalización y control, recuperación, transferencia y evaluación. La adquisición es el núcleo e incluye comprensión, retención y transformación. La transferencia es la meta última de la escuela, pero la lejana es poco frecuente sin enseñanza explícita. Los procesos no ocurren en orden estricto: se solapan y se repiten.",
    v: [
      "Sensibilización=Activación de la motivación, las emociones y las actitudes hacia la tarea",
      "Atención=Filtro que deja pasar solo una parte de lo percibido a la memoria de trabajo",
      "Adquisición=Núcleo del proceso, con comprensión, retención y transformación",
      "Transformación=Reelaborar la información, como convertir un texto en un esquema",
      "Personalización y control=Apropiarse del contenido, valorarlo y vigilar si se entiende",
      "Transferencia=Aplicar lo aprendido a situaciones distintas de aquella en que se aprendió",
      "Elementos idénticos=Explicación de Thorndike de la transferencia por rasgos compartidos",
      "Generalización de principios=Explicación de Judd de la transferencia"
    ],
    g: [
      "Mostrar para qué sirve el contenido y plantear una pregunta intrigante apoya la ___.|sensibilización|adquisición|recuperación",
      "Proponer preguntas frecuentes sin apuntes delante apoya la ___.|recuperación|atención|sensibilización",
      "Variar los contextos y los ejemplos favorece la ___.|transferencia|retención|personalización",
      "Recordar es más fácil cuando las ___ disponibles coinciden con las usadas al aprender.|claves|metas|técnicas",
      "La personalización y el control conectan con la ___.|metacognición|sensibilización|transferencia"
    ],
    tf: [
      "Los procesos descritos por Beltrán ocurren siempre en un orden estricto, uno tras otro.|F|No ocurren en orden estricto, sino que se solapan y se repiten.",
      "Un móvil vibrando sobre la mesa compite con la explicación aunque no se mire.|V",
      "La transferencia lejana, entre dominios muy distintos, es frecuente aunque no se enseñe de forma explícita.|F|Es poco frecuente sin enseñanza explícita. Conviene variar ejemplos y señalar la estructura común.",
      "El propio acto de recuperar refuerza la huella de lo aprendido.|V"
    ],
    q: [
      "Una alumna resuelve bien los ejercicios de porcentajes del libro, pero no sabe calcular un descuento en una tienda. ¿Qué proceso falla?|La transferencia|La sensibilización|La atención|No aplica lo aprendido fuera del contexto en que lo aprendió. Ayuda variar ejemplos y señalar la estructura común.",
      "¿Qué componente de la adquisición se trabaja al convertir un texto en un esquema?|La transformación|La retención|La comprensión|Reelaborar la información, como pasar un texto a esquema o aplicar una regla a un caso, es transformación.",
      "¿Qué papel cumple la atención en el aprendizaje?|Filtra lo que pasa a la memoria de trabajo|Almacena lo comprendido a largo plazo|Aplica lo aprendido a casos nuevos|De lo que llega a los sentidos, solo una parte pasa a la memoria de trabajo: por eso un móvil que vibra compite con la explicación.",
      "Si el contenido no parece valioso o la persona está muy ansiosa, ¿qué ocurre según la unidad?|La atención se dispersa|La recuperación mejora|La transferencia aumenta|El aprendizaje empieza por la disposición: sin valor percibido o con mucha ansiedad, la atención se dispersa."
    ],
    inc: [
      "Sobre la adquisición|Sin repaso, lo aprendido se conserva intacto mucho tiempo|La comprensión relaciona lo nuevo con lo sabido|La retención se apoya en la práctica espaciada|Sin repaso, lo aprendido se olvida con rapidez, algo que la práctica espaciada ayuda a contrarrestar."
    ],
    seq: [
      "Procesos del aprendizaje según Beltrán (1993)|Sensibilización>Atención>Adquisición>Personalización y control>Recuperación>Transferencia>Evaluación"
    ],
    cls: [
      "Explicación de la transferencia|Thorndike: elementos idénticos; rasgos compartidos entre situaciones|Judd: generalización de principios; aplicar una regla general"
    ] },
  { t: "Estrategias y técnicas de estudio",
    tip: "Una técnica es un procedimiento concreto, y una estrategia, un plan consciente e intencional que decide qué técnicas usar, cuándo y para qué. Dunlosky et al. (2013) dieron utilidad alta a la práctica de recuperación y a la distribuida, y baja a releer y subrayar. Releer gana en la prueba inmediata, pero recuperar gana en la demorada (Roediger y Karpicke, 2006). Bjork habló de dificultades deseables.",
    v: [
      "Técnica=Procedimiento concreto, como subrayar o hacer fichas de preguntas",
      "Estrategia=Plan consciente que decide qué técnicas usar, cuándo y para qué",
      "Uso condicional=Saber cuándo merece la pena aplicar un procedimiento",
      "Enseñanza estratégica=Enseñar técnicas dentro de las materias junto a la reflexión sobre su utilidad",
      "Práctica de recuperación=Autoevaluarse intentando recordar sin consultar el material",
      "Práctica distribuida=Repartir el estudio en varias sesiones separadas en el tiempo",
      "Ilusión de fluidez=Sensación de dominio por familiaridad que no garantiza el recuerdo",
      "Dificultades deseables=Condiciones costosas que mejoran la retención a largo plazo (Bjork)"
    ],
    g: [
      "Weinstein y Mayer propusieron su clasificación de estrategias en ___.|1986|1993|2013",
      "Buscar ejemplos o analogías para relacionar lo nuevo con lo conocido es una estrategia de ___.|elaboración|organización|repetición",
      "Estructurar la información en tablas o jerarquías es una estrategia de ___.|organización|elaboración|repetición",
      "Gestionar la ansiedad y organizar el tiempo son estrategias ___.|afectivo-motivacionales|de elaboración|de organización",
      "Según Cepeda et al., el intervalo óptimo entre repasos ___ cuanto más lejos está la fecha del recuerdo.|crece|disminuye|se mantiene"
    ],
    tf: [
      "Releer el tema es eficaz porque mejora el rendimiento en la prueba inmediata.|F|Es la trampa típica: releer gana en la prueba inmediata, pero recuperar gana en la demorada, que es la que importa.",
      "La interrogación elaborativa y la autoexplicación obtuvieron utilidad moderada en la revisión de Dunlosky et al. (2013).|V",
      "Monereo y Pozo, entre otros, sitúan lo estratégico en el uso condicional del conocimiento.|V",
      "Resumir y usar imágenes mentales para textos obtuvieron utilidad alta en la revisión de Dunlosky et al. (2013).|F|Obtuvieron utilidad baja, junto a releer, subrayar y la palabra clave."
    ],
    q: [
      "Un estudiante decide que, para un examen de desarrollo, hará primero un esquema y luego lo explicará en voz alta sin mirar. ¿Qué está aplicando?|Una estrategia de aprendizaje|Una técnica de estudio|Un proceso de sensibilización|Es un plan intencional que elige técnicas según la tarea. El esquema por sí solo sería una técnica.",
      "¿Qué par de técnicas obtuvo utilidad alta según Dunlosky et al. (2013)?|Recuperación y práctica distribuida|Autoexplicación y práctica intercalada|Interrogación elaborativa y resumen|La autoexplicación, la intercalada y la interrogación elaborativa son de utilidad moderada. Resumir es de utilidad baja.",
      "Una alumna tiene el examen dentro de una semana. Según Cepeda et al., ¿cuándo le conviene repasar?|A los pocos días|Solo la víspera|Al cabo de un mes|El intervalo óptimo crece con la distancia a la fecha: para una semana, conviene repasar a los pocos días.",
      "¿Qué critica la enseñanza estratégica de un curso aislado de técnicas de estudio?|Que separa las técnicas de las materias|Que enseña demasiadas técnicas a la vez|Que se centra en la práctica distribuida|Propone enseñar las técnicas dentro de las materias y con reflexión sobre cuándo son útiles."
    ],
    inc: [
      "Sobre las dificultades deseables|Hacen el estudio más fluido y menos costoso|Incluyen recuperar, espaciar e intercalar problemas|Mejoran la retención a largo plazo|Hacen el estudio más costoso y menos fluido, pero mejoran la retención a largo plazo."
    ],
    seq: [],
    cls: [
      "Utilidad según Dunlosky et al. (2013)|Alta: práctica de recuperación; práctica distribuida|Moderada: interrogación elaborativa; autoexplicación; práctica intercalada|Baja: releer; subrayar; resumir; palabra clave; imágenes mentales para textos"
    ] },
  { t: "La teoría de la carga cognitiva",
    tip: "Sweller (1988) parte de una memoria de trabajo muy limitada ante lo nuevo y una memoria a largo plazo casi ilimitada organizada en esquemas. La carga intrínseca depende de la complejidad del contenido para ese alumno, la extrínseca de un mal diseño y la pertinente del esfuerzo por construir esquemas. El diseño no cambia la complejidad, pero sí la carga que añade. Los efectos de ejemplo resuelto, atención dividida, redundancia e inversión por pericia guían la enseñanza.",
    v: [
      "Carga intrínseca=Complejidad del contenido según los elementos que interactúan y lo que ya se sabe",
      "Carga extrínseca=Carga de la memoria de trabajo causada por un mal diseño del material",
      "Carga pertinente=También llamada germana: la debida al esfuerzo de construir esquemas",
      "Esquema=Conocimiento organizado que permite manejar un contenido complejo como una unidad",
      "Ejemplo resuelto=Problema ya solucionado paso a paso que enseña más al novato",
      "Atención dividida=Integrar mentalmente dos fuentes separadas, como diagrama y texto",
      "Redundancia=Presentar la misma información por duplicado, lo que llega a perjudicar",
      "Inversión por pericia=Lo que ayuda al novato, como el ejemplo resuelto, estorba al experto"
    ],
    g: [
      "Sweller propuso la teoría de la carga cognitiva en ___.|1988|1986|2006",
      "Un conductor experto no piensa en el embrague porque tiene el ___ automatizado.|esquema|refuerzo|canal",
      "Secuenciar de lo simple a lo complejo y asegurar los prerrequisitos regula la carga ___.|intrínseca|extrínseca|pertinente",
      "Colocar las etiquetas sobre el propio diagrama evita el efecto de atención ___.|dividida|selectiva|sostenida",
      "Para el experto, los ejemplos resueltos resultan ___.|redundantes|imprescindibles|integrados"
    ],
    tf: [
      "La carga intrínseca es fija y no depende del alumno que aprende.|F|Depende del alumno: una ecuación de segundo grado supone mucha carga para quien empieza y muy poca para un profesor.",
      "Si la suma de cargas supera la capacidad de la memoria de trabajo, el aprendizaje se resiente aunque el alumno se esfuerce.|V",
      "Un diagrama en una página y su explicación en la siguiente generan sobre todo carga intrínseca.|F|Es un problema de diseño que genera carga extrínseca por atención dividida.",
      "Se discute si la carga pertinente es un tipo independiente o una forma de describir el esfuerzo dedicado a la intrínseca.|V"
    ],
    q: [
      "Un tutor prepara una diapositiva del corazón con un párrafo largo, la misma información leída en voz alta y una animación de fondo. ¿Qué mejora recomienda la teoría?|Etiquetas breves y explicar de palabra|Añadir un segundo párrafo de resumen|Mantener la animación y leer más despacio|Juntos saturan la memoria de trabajo. Mejor etiquetas sobre el dibujo, sin animación decorativa y con explicación oral.",
      "Para un grupo de principiantes, ¿qué enseña más un procedimiento matemático?|Estudiar problemas resueltos paso a paso|Resolver por su cuenta problemas equivalentes|Descubrir el procedimiento sin ayuda|Buscar la solución a ciegas consume la memoria de trabajo necesaria para aprender el procedimiento.",
      "Un texto repite lo que el diagrama ya muestra con claridad. ¿Qué efecto se produce?|Redundancia|Atención dividida|Inversión por pericia|La información duplicada no ayuda e incluso perjudica, porque obliga a procesar algo innecesario.",
      "Con el mismo contenido, ¿qué cambia un buen diseño del material?|Reduce la extrínseca y deja sitio a la pertinente|Reduce la intrínseca y aumenta la extrínseca|Elimina la pertinente y mantiene la intrínseca|El diseño no cambia la complejidad del contenido, pero sí la carga que añade."
    ],
    inc: [
      "Sobre la teoría de la carga cognitiva|La memoria a largo plazo tiene una capacidad muy limitada|Aprender es construir y automatizar esquemas|Explica por qué falla el descubrimiento sin ayuda con novatos|La capacidad muy limitada es la de la memoria de trabajo ante lo nuevo. La de largo plazo es prácticamente ilimitada."
    ],
    seq: [],
    cls: [
      "Tipo de carga cognitiva|Intrínseca: complejidad del contenido; elementos que interactúan; prerrequisitos|Extrínseca: mal diseño; atención dividida; redundancia|Pertinente: construir esquemas; buenas tareas que orientan el esfuerzo"
    ] },
  { t: "Aprendizaje multimedia, tecnología e IA",
    tip: "La teoría de Mayer sostiene que se aprende mejor con palabras e imágenes que solo con palabras si el material está bien diseñado. Se basa en canal dual, capacidad limitada y procesamiento activo, y de ahí salen principios como coherencia, señalización, contigüidad o modalidad. La tecnología ayuda cuando aplica buenos principios, como los tutores inteligentes. La IA generativa arriesga descargar el esfuerzo cognitivo, y su evidencia es aún preliminar.",
    v: [
      "Canal dual=Información verbal y visual procesadas por vías en parte separadas",
      "Procesamiento activo=Seleccionar, organizar e integrar la información con lo ya sabido",
      "Principio de coherencia=Eliminar lo decorativo o anecdótico que no aporta al objetivo",
      "Principio de señalización=Destacar la estructura con títulos, flechas o resaltados",
      "Principio de modalidad=Acompañar una animación con narración mejor que con texto en pantalla",
      "Segmentación=Dividir una explicación compleja en partes que controla el alumno",
      "Preentrenamiento=Enseñar antes los nombres y características de los elementos clave",
      "Pereza metacognitiva=Dejar de supervisar la propia comprensión porque la respuesta llega hecha"
    ],
    g: [
      "Usar un estilo conversacional en lugar de uno impersonal es el principio de ___.|personalización|modalidad|coherencia",
      "Presentar juntas las palabras y las imágenes que se corresponden es el principio de ___.|contigüidad|señalización|segmentación",
      "La coherencia y la redundancia reducen la carga ___.|extrínseca|intrínseca|pertinente",
      "Los sistemas de tutoría ___ adaptan las tareas y el feedback a las respuestas de cada alumno.|inteligente|programada|distribuida",
      "Destacar la estructura con títulos, flechas o resaltados es el principio de ___.|señalización|segmentación|contigüidad"
    ],
    tf: [
      "Según Mayer, añadir imágenes a las palabras mejora el aprendizaje sea cual sea el diseño del material.|F|Se aprende mejor con palabras e imágenes siempre que el material esté bien diseñado.",
      "La ventaja de los tutores inteligentes procede de la práctica activa, la corrección inmediata y el ajuste al nivel, no de la pantalla.|V",
      "La tecnología mejora el aprendizaje por sí misma, aunque no aplique buenos principios de enseñanza.|F|No lo mejora por sí misma: lo hace cuando aplica buenos principios de enseñanza.",
      "Pedir a la IA que formule preguntas o dé pistas graduadas es uno de sus usos más prometedores.|V"
    ],
    q: [
      "Un docente prepara un vídeo con párrafos leídos en voz alta y música de fondo. ¿Qué principios incumple?|Coherencia y redundancia|Preentrenamiento y segmentación|Señalización y personalización|La música decorativa incumple la coherencia, y el texto idéntico a la narración, la redundancia.",
      "Un alumno pide a un asistente de IA que redacte su trabajo completo y lo entrega sin revisarlo. ¿Qué riesgo ilustra?|Descargar el esfuerzo cognitivo|El efecto de modalidad|La transferencia lejana|Si la herramienta selecciona, organiza e integra por él, obtiene el producto sin construir el esquema.",
      "Una animación sobre la formación del rayo se acompaña de narración en lugar de texto en pantalla. ¿Qué principio aplica?|Modalidad|Contigüidad|Coherencia|El principio de modalidad recomienda narración mejor que texto escrito para acompañar una animación.",
      "¿Qué principio evita el efecto de atención dividida de la carga cognitiva?|La contigüidad|La personalización|El preentrenamiento|Presentar juntas palabras e imágenes relacionadas evita tener que integrar mentalmente fuentes separadas."
    ],
    inc: [
      "Sobre la IA generativa en el aprendizaje|Ya hay conclusiones firmes sobre cuándo ayuda a aprender|Ofrece un tutor paciente a cualquier hora|Puede llevar a dejar de supervisar la propia comprensión|Es una frontera abierta: falta evidencia sólida sobre cuándo ayuda y cuándo sustituye el esfuerzo necesario."
    ],
    seq: [
      "Procesamiento activo según Mayer|Seleccionar la información relevante>Organizarla en una representación coherente>Integrarla con el conocimiento previo"
    ],
    cls: [] }
] }
);

// SAIMAP Psicología · Educativa · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Objetivos, instrucción y pericia", cap: 3, pir: "media", mods: [
  { t: "Objetivos de aprendizaje: de Bloom a su revisión",
    tip: "Un objetivo de aprendizaje describe lo que el alumnado debería ser capaz de hacer al acabar una secuencia. Bloom (1956) ordenó seis categorías del dominio cognitivo, de conocimiento a evaluación. La revisión de Anderson y Krathwohl (2001) usa verbos, sustituye la síntesis por crear, que sube a la cima por encima de evaluar, y añade cuatro tipos de conocimiento que forman una tabla de 4 × 6.",
    v: [
      "Objetivo de aprendizaje=Lo que el alumnado debería ser capaz de hacer al acabar una secuencia",
      "Bloom (1956)=Taxonomía de objetivos educativos para el dominio cognitivo",
      "Dominio afectivo=Ámbito de actitudes y valores descrito por Krathwohl (1964)",
      "Dominio psicomotor=Ámbito de los objetivos referidos a destrezas físicas",
      "Anderson y Krathwohl (2001)=Revisión de la taxonomía que hoy es la versión de referencia",
      "Dimensión del conocimiento=Conocimiento factual, conceptual, procedimental y metacognitivo",
      "Tabla de 4 × 6=Cruce de cuatro tipos de conocimiento con seis procesos, una celda por objetivo",
      "Síntesis=Categoría de 1956 que combina elementos en algo nuevo y desaparece en la revisión"
    ],
    g: [
      "En la revisión de Bloom, las categorías pasan de sustantivos a ___.|verbos|adjetivos|adverbios",
      "En la versión revisada, el lugar de la síntesis lo ocupa ___.|crear|evaluar|analizar",
      "«Comparar dos modelos de memoria» es analizar conocimiento ___.|conceptual|factual|metacognitivo",
      "Predecir qué pasará con un charco en un día de sol es una tarea de ___.|aplicar|comprender|analizar",
      "Krathwohl describió en 1964 el dominio ___, referido a actitudes y valores.|afectivo|psicomotor|cognitivo"
    ],
    tf: [
      "En la revisión de Anderson y Krathwohl, «evaluar» ocupa la cima de la taxonomía.|F|En la cima está «crear», que sustituye a la síntesis y sube por encima de evaluar, la cima de 1956.",
      "La revisión mantiene la idea de complejidad creciente, pero admite que las categorías se solapen.|V",
      "Como los niveles bajos valen menos, la enseñanza debe centrarse en analizar y crear.|F|El conocimiento de base es la materia prima de los procesos superiores. No se analiza ni se crea sobre lo que no se conoce.",
      "La taxonomía de 1956 pretendía ofrecer un lenguaje común para clasificar objetivos y preguntas de examen.|V"
    ],
    q: [
      "Un profesor dice querer fomentar el pensamiento crítico, pero su examen solo tiene preguntas de recordar. ¿Qué problema ilustra?|Falta de alineamiento|Exceso de complejidad|Un solapamiento de niveles|Objetivos, actividades y examen deben estar alineados. El examen transmite al alumnado qué es lo que de verdad cuenta.",
      "«Ver el tema de la fotosíntesis» no se considera un objetivo de aprendizaje porque…|no describe qué hará el alumno|no se refiere a ningún contenido|no incluye un criterio de nota|Un objetivo describe lo que el alumno debería ser capaz de hacer, como explicar por qué una planta sin luz deja de crecer.",
      "«Decidir qué técnica de estudio conviene para un examen de desarrollo» es, en la tabla de 4 × 6…|evaluar conocimiento metacognitivo|aplicar conocimiento procedimental|analizar conocimiento conceptual|Juzgar qué conviene es evaluar, y el objeto es el propio aprendizaje: conocimiento metacognitivo.",
      "Diseñar un experimento casero que muestre la condensación corresponde al proceso de…|crear|evaluar|aplicar|Producir algo que antes no existía es crear, la categoría situada en la cima de la versión revisada."
    ],
    inc: [
      "Sobre la taxonomía de Bloom|Hay que agotar cada nivel antes del siguiente|Una buena tarea suele combinar varios niveles|Los niveles bajos son la base de los superiores|Es un malentendido frecuente: en la práctica, una buena tarea suele combinar varios niveles a la vez."
    ],
    seq: [
      "Taxonomía revisada de menor a mayor complejidad|Recordar>Comprender>Aplicar>Analizar>Evaluar>Crear"
    ],
    cls: [
      "Versión de la taxonomía|Bloom (1956): sustantivos; síntesis; evaluación en la cima|Anderson y Krathwohl (2001): verbos; crear en la cima; tabla de 4 × 6"
    ] },
  { t: "Aprendizaje para el dominio y el problema de las dos sigmas",
    tip: "Bloom partió de Carroll (1963): la aptitud es el tiempo que cada alumno necesita para aprender, no un límite. En el aprendizaje para el dominio se fija el resultado y varían el tiempo y la ayuda, con pruebas formativas, correctivos y ampliación. La tutoría individual con dominio rindió unas dos desviaciones típicas por encima de la clase convencional (Bloom, 1984), pero es una hipótesis estimulante, no un dato replicado.",
    v: [
      "Carroll (1963)=Entendió la aptitud como el tiempo que cada alumno necesita para aprender algo",
      "Aprendizaje para el dominio=Unidades breves con prueba formativa y correctivos hasta alcanzar un criterio",
      "Criterio de dominio=Nivel de logro fijado de antemano que hay que alcanzar antes de avanzar",
      "Prueba formativa=Control corto que no cuenta para la nota y muestra quién alcanza el criterio",
      "Correctivos=Otra explicación, otro material, trabajo con un compañero o más práctica",
      "Ampliación=Actividades para quien ya alcanzó el criterio mientras otros reciben ayuda",
      "Dos sigmas=Supuesta ventaja de dos desviaciones típicas de la tutoría (Bloom, 1984), no replicada",
      "VanLehn (2011)=Revisión que halla efectos de la tutoría humana bastante menores"
    ],
    g: [
      "Si se quiere fijar el resultado, lo que debe variar es el tiempo y la ___.|ayuda|nota|edad",
      "La segunda prueba es ___ a la primera y comprueba el dominio antes de avanzar.|paralela|previa|ajena",
      "Un efecto de dos desviaciones típicas en educación sería ___.|extraordinario|habitual|modesto",
      "En la comparación de Bloom (1984), el dominio en grupo quedó en una posición ___.|intermedia|inferior|superior",
      "El método anticipa la evaluación ___ descrita por Black y Wiliam (1998).|formativa|sumativa|normativa"
    ],
    tf: [
      "Las dificultades del aprendizaje para el dominio son sobre todo teóricas.|F|Son sobre todo prácticas: exige tiempo, materiales alternativos y un aula que atienda a la vez a todos.",
      "La cifra de las dos sigmas procedía de unos pocos estudios del grupo de Bloom en condiciones muy favorables.|V",
      "La revisión de VanLehn (2011) confirmó un efecto de la tutoría humana de unas dos desviaciones típicas.|F|VanLehn halló efectos bastante menores. Las dos sigmas son una hipótesis estimulante, no un dato replicado.",
      "El aprendizaje para el dominio recoge la idea de no avanzar sobre lagunas, porque lo previo condiciona lo nuevo.|V"
    ],
    q: [
      "Tras dos sesiones de ecuaciones, una profesora pone un control sin nota y trabaja aparte con seis alumnos que fallan con los signos negativos. ¿Qué hace el resto?|Actividades de ampliación|La segunda prueba paralela|Correctivos con un compañero|Quien alcanza el criterio hace actividades de ampliación mientras quien no lo alcanza recibe correctivos.",
      "¿Qué «problema» planteaba Bloom en 1984?|Lograr en grupo lo que da la tutoría|Dar un tutor individual a cada alumno|Replicar el efecto en otros países|Dar un tutor a cada alumno no es viable, así que buscaba métodos para grupos completos que se acercaran a ese resultado.",
      "¿Qué tres condiciones comparó Bloom (1984)?|Clase convencional, dominio en grupo y tutoría con dominio|Clase convencional, tutoría entre iguales y enseñanza programada|Dominio en grupo, tutoría inteligente y clase invertida|La tutoría individual con dominio rindió unas dos sigmas más que la clase convencional, y el dominio en grupo quedó en medio.",
      "¿Cómo debe valorarse hoy el problema de las dos sigmas?|Como una hipótesis estimulante|Como un efecto bien replicado|Como un efecto pequeño y fiable|Un efecto de dos desviaciones típicas sería extraordinario. La cifra no se ha reproducido con esa magnitud."
    ],
    inc: [
      "Sobre el aprendizaje para el dominio|La aptitud marca el límite de lo que se puede aprender|El temario se divide en unidades breves con objetivos|Quien no alcanza el criterio recibe correctivos|Parte de Carroll (1963): la aptitud es el tiempo que cada alumno necesita, no un límite de lo que puede aprender."
    ],
    seq: [
      "Secuencia del aprendizaje para el dominio|Dividir el temario en unidades con criterio>Enseñar la unidad al grupo>Pasar una prueba formativa sin nota>Correctivos o ampliación>Segunda prueba paralela"
    ],
    cls: [
      "Tras la prueba formativa|No alcanza el criterio: otra explicación; otro material; trabajo con un compañero|Alcanza el criterio: actividades de ampliación; problemas de enunciado más difíciles"
    ] },
  { t: "Gagné: capacidades y eventos de la instrucción",
    tip: "Gagné (1965) sostiene que no hay un único tipo de aprendizaje: distingue cinco capacidades, y cada una requiere condiciones distintas. Las habilidades intelectuales forman una jerarquía de discriminaciones, conceptos, reglas y reglas de orden superior. Los nueve eventos de la instrucción son acciones externas que apoyan procesos internos del aprendizaje, y no deben aplicarse como una plantilla rígida.",
    v: [
      "The Conditions of Learning=Obra de Gagné (1965) que une aprendizaje y diseño de la instrucción",
      "Información verbal=Capacidad de enunciar hechos, nombres o ideas",
      "Habilidades intelectuales=Capacidad de usar símbolos para operar con el entorno",
      "Estrategias cognitivas=Capacidad de gestionar el propio aprender, recordar y pensar",
      "Actitudes=Capacidad aprendida que inclina a elegir ciertas acciones",
      "Reglas de orden superior=Combinaciones de reglas para resolver problemas nuevos",
      "Condiciones internas=Lo que el alumno ya sabe y su estado de motivación",
      "Eventos de la instrucción=Nueve acciones externas que apoyan los procesos internos del aprendizaje"
    ],
    g: [
      "Para Gagné, las habilidades motoras se benefician sobre todo de la práctica repetida con ___.|feedback|modelos|contexto",
      "Las actitudes se aprenden sobre todo por la observación de ___ y sus consecuencias.|modelos|reglas|objetivos",
      "En la jerarquía de habilidades intelectuales, las discriminaciones son requisito de los ___.|conceptos|hechos|eventos",
      "Informar del objetivo crea ___ en el alumnado.|expectativas|recuerdos|actitudes",
      "Hacerse preguntas al terminar cada página es un ejemplo de estrategia ___.|cognitiva|intelectual|verbal"
    ],
    tf: [
      "Las capacidades de Gagné y los niveles de Bloom son dos nombres de la misma clasificación.|F|Es una confusión típica: Gagné distingue cinco tipos de capacidades, y Bloom ordena niveles de complejidad.",
      "Para calcular un porcentaje hay que dominar antes el concepto de fracción y la regla de la multiplicación.|V",
      "Según Gagné, toda sesión debe incluir los nueve eventos en su orden exacto.|F|No toda sesión necesita los nueve eventos ni en ese orden. Su valor está en recordar qué funciones no deben faltar.",
      "La propuesta de Gagné es muy próxima a la instrucción explícita.|V"
    ],
    q: [
      "En una clase sobre porcentajes, la profesora repasa qué es una fracción de cien antes de explicar el procedimiento. ¿Qué evento de Gagné aplica?|Activar prerrequisitos|Guiar el aprendizaje|Presentar el contenido|Es el tercer evento: recupera lo necesario para el aprendizaje nuevo antes de presentar el contenido.",
      "Preferir reciclar aunque cueste más esfuerzo es, para Gagné, un ejemplo de…|actitud|estrategia cognitiva|información verbal|Las actitudes inclinan a elegir ciertas acciones y se aprenden sobre todo observando modelos y sus consecuencias.",
      "¿A qué proceso interno se dirige el evento de dar feedback?|A confirmar o corregir la respuesta|A crear expectativas sobre la meta|A recuperar los conocimientos previos|Informar del objetivo crea expectativas, activar prerrequisitos recupera lo necesario y el feedback confirma o corrige.",
      "Tras una clase sobre descuentos, el alumnado calcula el IVA de un tique. ¿Qué evento se aplica?|Favorecer la transferencia|Evaluar la ejecución final|Provocar la ejecución|Es el noveno evento: aplicar lo aprendido a situaciones nuevas favorece la retención y la transferencia."
    ],
    inc: [
      "Sobre la teoría de Gagné|Existe un único tipo de aprendizaje con condiciones comunes|Cada capacidad requiere condiciones externas diferentes|El aprendizaje depende de condiciones internas y externas|Su punto de partida es el contrario: hay distintos resultados o capacidades, y cada uno requiere condiciones diferentes."
    ],
    seq: [
      "Nueve eventos de la instrucción de Gagné|Captar la atención>Informar del objetivo>Activar prerrequisitos>Presentar el contenido>Guiar el aprendizaje>Provocar la ejecución>Dar feedback>Evaluar la ejecución>Favorecer la retención y la transferencia"
    ],
    cls: [
      "Capacidad de Gagné|Información verbal: decir en qué año empezó la Guerra Civil|Habilidades intelectuales: calcular un 15 % de descuento|Habilidades motoras: nadar a crol; escribir con letra legible"
    ] },
  { t: "De novato a experto",
    tip: "Los expertos no tienen mejor memoria general ni piensan más rápido en cualquier tarea: tienen mucho conocimiento del dominio, bien organizado. Lo muestran Chase y Simon (1973) con el ajedrez y Chi, Feltovich y Glaser (1981) con problemas de física. La pericia es específica del dominio. Ericsson et al. (1993) destacaron la práctica deliberada, aunque explica solo una parte de las diferencias (Macnamara et al., 2014).",
    v: [
      "Pericia=Dominio de un campo basado en un conocimiento amplio y bien organizado",
      "Chase y Simon (1973)=Mostraron que la ventaja de los maestros de ajedrez desaparece con piezas al azar",
      "Chunks=Configuraciones familiares con las que el experto percibe una posición",
      "Chi, Feltovich y Glaser=Estudiaron cómo agrupaban problemas de física expertos y novatos (1981)",
      "Práctica deliberada=Práctica con metas precisas, feedback inmediato y esfuerzo alto para mejorar",
      "Ericsson, Krampe y Tesch-Römer=Estudiaron a estudiantes de violín de un conservatorio (1993)",
      "Regla de las 10.000 horas=Simplificación divulgativa que el trabajo original no sostiene como regla",
      "Específica del dominio=Rasgo de la pericia: un gran ajedrecista no es mejor estratega empresarial"
    ],
    g: [
      "Los novatos de Chi et al. clasificaban los problemas por rasgos ___.|superficiales|profundos|numéricos",
      "Los expertos en física agrupaban los problemas por el ___ que los resuelve.|principio|objeto|enunciado",
      "Según Macnamara, Hambrick y Oswald (2014), la práctica explica ___ de las diferencias de rendimiento.|solo una parte|casi la totalidad|la mayor parte",
      "En el experto, la memoria de trabajo queda ___ para lo nuevo.|liberada|saturada|bloqueada",
      "Aislar los tres compases que fallan y trabajarlos más despacio es práctica ___.|deliberada|repetida|distribuida"
    ],
    tf: [
      "Los maestros de Chase y Simon recordaban mejor también las posiciones con piezas al azar.|F|Con piezas al azar su ventaja desaparecía: estaba en el conocimiento almacenado, no en la capacidad de memoria.",
      "Un gran ajedrecista no es por ello mejor estratega empresarial, porque la pericia es específica del dominio.|V",
      "Tocar diez veces la pieza que ya sale bien es un buen ejemplo de práctica deliberada.|F|Eso es repetir. La práctica deliberada aísla lo que falla y lo trabaja con metas precisas y feedback.",
      "La evidencia sobre pericia indica que competencias genéricas como el pensamiento crítico dependen mucho del conocimiento del campo.|V"
    ],
    q: [
      "Un profesor de física pide comparar dos problemas de aspecto distinto, uno con muelles y otro con un plano inclinado, que se resuelven con el mismo principio. ¿Qué busca?|Que se vea la estructura profunda|Que se automaticen los procedimientos|Que se practique de forma deliberada|Conviene enseñar a ver la estructura profunda de los problemas, que es como los representan los expertos.",
      "¿Qué explicó la ventaja de los maestros en el estudio de Chase y Simon?|El conocimiento almacenado|Una memoria general superior|Una mayor rapidez mental|Percibían la posición como unas pocas configuraciones familiares. Con piezas al azar, la ventaja desaparecía.",
      "¿Qué rasgo caracteriza la supervisión en el experto, frente al novato?|Comprueba y corrige sobre la marcha|Detecta sus errores al terminar|Delega la revisión en otras personas|El novato detecta tarde sus errores, mientras que el experto comprueba y corrige sobre la marcha.",
      "¿Qué estatus tiene la «regla de las 10.000 horas»?|Una simplificación divulgativa|Un hallazgo replicado de Ericsson|Una conclusión de Macnamara|El trabajo original no la sostiene como regla, y el peso de la práctica en la pericia sigue en debate."
    ],
    inc: [
      "Sobre la enseñanza a novatos y expertos|Los ejemplos resueltos ayudan igual al experto|Los novatos necesitan una guía explícita al inicio|La autonomía puede crecer con el conocimiento|Los ejemplos resueltos son muy útiles al principio y redundantes después: es el efecto de inversión por pericia."
    ],
    seq: [],
    cls: [
      "Rasgo|Novato: conocimiento fragmentado; rasgos superficiales; detecta tarde sus errores|Experto: conocimiento interconectado; principios profundos; procedimientos automatizados"
    ] }
] },
{ n: 10, t: "Aprender a aprender: metacognición y regulación", cap: 3, pir: "media", mods: [
  { t: "Pensar sobre el propio pensamiento",
    tip: "La metacognición es el conocimiento y la regulación de la propia cognición (Flavell, 1976, 1979). Flavell distinguió el conocimiento metacognitivo, con variables de persona, tarea y estrategia, y las experiencias metacognitivas, que pueden ser engañosas, como la ilusión de fluidez. Brown (1987) subrayó la regulación: planificación, supervisión y evaluación. El conocimiento condicional es saber cuándo y por qué usar una estrategia.",
    v: [
      "Metacognición=Conocimiento y regulación de la propia cognición",
      "Variable de persona=Lo que se sabe de uno mismo y de los demás como aprendices",
      "Variable de tarea=Lo que se sabe de las demandas de cada actividad",
      "Variable de estrategia=Lo que se sabe de los procedimientos y de su utilidad",
      "Experiencia metacognitiva=Sensación consciente durante la tarea, como notar que uno se ha perdido",
      "Ilusión de fluidez=Creer dominar un tema releído porque resulta familiar",
      "Conocimiento condicional=Saber cuándo y por qué conviene usar una estrategia",
      "Conocimiento procedimental=Saber aplicar una estrategia, por ejemplo taparse las respuestas"
    ],
    g: [
      "El término metacognición se debe a ___, que lo estudió primero en la memoria de los niños.|Flavell|Brown|Zimmerman",
      "«Un examen tipo test exige distinguir conceptos parecidos» es conocimiento sobre la variable ___.|tarea|persona|estrategia",
      "Comprobar durante la tarea si se está entendiendo es un proceso de ___.|supervisión|planificación|evaluación",
      "Saber que existe una técnica llamada práctica de recuperación es conocimiento ___.|declarativo|procedimental|condicional",
      "La tradición iniciada por ___ puso el acento en la regulación de la propia actividad.|Brown|Flavell|Pintrich"
    ],
    tf: [
      "Darse cuenta a mitad de página de que no se ha entendido el párrafo es una actividad cognitiva, no metacognitiva.|F|Leer es cognitivo. Darse cuenta de que no se entiende y decidir volver atrás es metacognitivo.",
      "Las experiencias metacognitivas son valiosas porque disparan decisiones, pero pueden ser engañosas.|V",
      "Supervisión y evaluación son pasos que se dan una sola vez, al final de la tarea.|F|Se repiten constantemente y realimentan la planificación.",
      "Cuanto más se sabe de una materia, mejor se detecta lo que no se entiende de ella.|V"
    ],
    q: [
      "Un alumno dice: «Me concentro peor después de comer». Según Flavell, ¿qué tipo de conocimiento metacognitivo expresa?|Sobre la variable persona|Sobre la variable tarea|Sobre la variable estrategia|Es conocimiento sobre uno mismo como aprendiz. La tarea se refiere a sus demandas, y la estrategia, a los procedimientos.",
      "Tras releer tres veces un tema, Marta lo nota familiar y cree dominarlo, pero no sabe explicarlo sin el libro. ¿Qué le ocurre?|Una ilusión de fluidez|Un fallo de planificación|Falta de conocimiento declarativo|La familiaridad del texto releído da impresión de dominio. Autoevaluarse sin mirar el material convierte esa impresión en un dato.",
      "A muchos estudiantes que conocen las técnicas de estudio les falta sobre todo conocimiento…|condicional|declarativo|procedimental|Saben que existen y cómo se aplican, pero no cuándo y por qué conviene cada una.",
      "¿Qué proceso de regulación incluye calcular el tiempo y activar lo que ya se sabe?|La planificación|La supervisión|La evaluación|La planificación ocurre antes de empezar: aclarar la meta, prever los pasos, calcular el tiempo y activar lo sabido."
    ],
    inc: [
      "Sobre la metacognición|Es una capacidad fija que no cambia con la edad|Se desarrolla en la infancia y la adolescencia|Depende también del dominio de conocimiento|La metacognición se desarrolla a lo largo de la infancia y la adolescencia, y además depende del dominio."
    ],
    seq: [
      "Procesos de regulación metacognitiva|Planificación>Supervisión>Evaluación"
    ],
    cls: [
      "Variable metacognitiva de Flavell|Persona: me concentro peor después de comer|Tarea: un test exige distinguir conceptos parecidos|Estrategia: preguntarme sin mirar me sirve más que releer"
    ] },
  { t: "El ciclo de Zimmerman",
    tip: "El aprendizaje autorregulado es un conjunto de procesos que se aprenden, no un rasgo. Zimmerman (2000), desde una raíz sociocognitiva heredera de Bandura, lo describe como un ciclo de tres fases: previsión (análisis de la tarea y creencias motivacionales), ejecución (autocontrol y autoobservación) y autorreflexión (autoevaluación, atribuciones y reacción). Lo que se concluye al reflexionar alimenta la previsión siguiente.",
    v: [
      "Aprendizaje autorregulado=El alumno fija metas y regula cognición, motivación y conducta para lograrlas",
      "Previsión=Fase previa a la tarea, con análisis de la tarea y creencias motivacionales",
      "Ejecución=Fase en la que se trabaja, con autocontrol y autoobservación",
      "Autorreflexión=Fase final con autoevaluación, atribuciones y reacción ante el resultado",
      "Análisis de la tarea=Fijar metas y planificar las estrategias antes de actuar",
      "Autocontrol=Uso de estrategias para mantener la atención y llevar a cabo la tarea",
      "Autoobservación=Registrar lo que se hace y los resultados que se obtienen",
      "Reacción defensiva=Respuesta al resultado como evitar la tarea la próxima vez"
    ],
    g: [
      "El modelo de Zimmerman tiene una raíz ___, heredera de las ideas de Bandura.|sociocognitiva|conductista|psicoanalítica",
      "La autoeficacia forma parte de la fase de ___.|previsión|ejecución|autorreflexión",
      "Apagar el móvil para organizar el entorno de estudio es una forma de ___.|autocontrol|autoobservación|autoevaluación",
      "Comparar el resultado obtenido con la meta es ___, dentro de la autorreflexión.|autoevaluación|autoobservación|autocontrol",
      "Atribuir un mal resultado a la falta de capacidad ___ la expectativa de mejorar.|hunde|mantiene|refuerza"
    ],
    tf: [
      "En el modelo de Zimmerman, las atribuciones causales pertenecen a la fase de ejecución.|F|Es la trampa típica: las atribuciones, como la autoevaluación, pertenecen a la autorreflexión.",
      "Un alumno que conoce las estrategias pero no se cree capaz de usarlas no las pondrá en marcha.|V",
      "El interés por la tarea y el tipo de meta forman parte de las creencias motivacionales de la previsión.|V",
      "La autoobservación pertenece a la autorreflexión, porque consiste en mirar lo hecho al acabar.|F|Pertenece a la ejecución: consiste en registrar lo que se hace y sus resultados mientras se trabaja."
    ],
    q: [
      "Tras una semana de estudio, Pablo ve que falla en probabilidad condicionada y lo achaca a no haber practicado suficientes casos. ¿En qué fase está?|En la autorreflexión|En la fase de ejecución|En la fase de previsión|Atribuir el resultado a una causa es parte de la autorreflexión. Al ser una causa controlable, le lleva a planificar más práctica.",
      "Un estudiante anota mientras trabaja cuántos problemas resuelve y cuánto tarda. ¿Qué subproceso aplica?|Autoobservación|Autoevaluación|Autocontrol|Registrar lo que se hace y sus resultados es autoobservación, en la ejecución. Autoevaluar es comparar con la meta al terminar.",
      "¿Qué atribución tras un mal resultado mantiene la expectativa de mejorar?|A la estrategia empleada|A la falta de capacidad|A la dificultad del examen|Atribuir el resultado a la estrategia o al esfuerzo, causas controlables, mantiene la expectativa. La falta de capacidad la hunde.",
      "¿Qué idea destaca el modelo sobre la fase de autorreflexión?|Es decisiva para el ciclo siguiente|Ocurre antes de iniciar la tarea|Solo aparece tras los fracasos|Lo que se concluye al reflexionar alimenta la planificación de la tarea siguiente."
    ],
    inc: [
      "Sobre el aprendizaje autorregulado|Es un rasgo estable que se tiene o no se tiene|Es un conjunto de procesos que se aprenden|Varía según la tarea y el contexto|No es un rasgo que se tenga o no se tenga, sino un conjunto de procesos que se aprenden y varían según la tarea."
    ],
    seq: [
      "Fases del ciclo de Zimmerman|Previsión>Ejecución>Autorreflexión"
    ],
    cls: [
      "Fase de Zimmerman|Previsión: análisis de la tarea; autoeficacia; interés por la tarea|Ejecución: autocontrol; autoinstrucciones; autoobservación|Autorreflexión: autoevaluación; atribuciones; reacción ante el resultado"
    ] },
  { t: "El modelo de Pintrich",
    tip: "Pintrich (2000) parte de que el alumno es activo, puede controlar parte de su cognición, motivación y conducta, necesita una meta o criterio, y de que la autorregulación media entre persona, contexto y rendimiento. Su aportación es una matriz de cuatro fases (previsión y planificación, supervisión, control, reacción y reflexión) por cuatro áreas (cognición, motivación y afecto, conducta y contexto). Separa darse cuenta de actuar.",
    v: [
      "Pintrich (2000)=Marco de autorregulación con una matriz de cuatro fases por cuatro áreas",
      "Supervisión=Fase de darse cuenta de la comprensión, el ánimo o el esfuerzo",
      "Control=Fase de hacer algo al respecto, como ajustar estrategias o pedir ayuda",
      "Reacción y reflexión=Última fase, con juicios sobre el resultado y atribuciones",
      "Área del contexto=Regulación del entorno, como cambiar de sitio o silenciar notificaciones",
      "Motivación y afecto=Área que incluye manejar el aburrimiento ante un tema árido",
      "Pedir ayuda=Conducta autorregulada, lejos de ser un signo de dependencia",
      "MSLQ=Autoinforme de Pintrich sobre motivación y uso de estrategias de aprendizaje"
    ],
    g: [
      "Darse cuenta de que no se entiende un párrafo pertenece a la fase de ___.|supervisión|control|planificación",
      "Para Pintrich, la autorregulación ___ entre las características de la persona y del contexto y el rendimiento.|media|compite|oscila",
      "Cambiar o renegociar la tarea es una forma de control del ___.|contexto|afecto|esfuerzo",
      "Aumentar o reducir el esfuerzo y persistir es control en el área de la ___.|conducta|cognición|motivación",
      "Darse cuenta del propio ánimo es supervisión en el área de la ___.|motivación|cognición|conducta"
    ],
    tf: [
      "Pintrich sostiene que todo aprendizaje académico es autorregulado.|F|Advirtió que no todo lo es: mucho se hace por rutina o porque lo pide el docente.",
      "Darse cuenta de que no se entiende sirve de poco si no se dispone de una estrategia para resolverlo.|V",
      "En el modelo de Pintrich, la motivación aparece solo en la previsión y en la reacción.|F|Eso se parece más a Zimmerman. En Pintrich, motivación y afecto son un área propia en todas las fases.",
      "Como todo autoinforme, el MSLQ recoge lo que el estudiante cree que hace, que no siempre coincide con lo que hace.|V"
    ],
    q: [
      "Una estudiante entiende bien los temas, pero estudia en una cafetería con ruido sin notar que eso la perjudica. ¿Qué área de Pintrich falla?|El contexto|La cognición|La conducta|La inclusión del contexto es característica de Pintrich: cambiar de sitio o silenciar notificaciones también es autorregularse.",
      "¿Qué distingue la estructura de Pintrich de la de Zimmerman?|Cuatro fases cruzadas con cuatro áreas|Tres fases que se suceden en un ciclo|Dos fases separadas por la ejecución|Zimmerman propone tres fases en ciclo. Pintrich cruza cuatro fases con cuatro áreas de regulación.",
      "Un alumno nota que se está aburriendo, pero no hace nada para remediarlo. ¿Qué proceso le falta?|El control|La supervisión|La planificación|Ya se ha dado cuenta, que es supervisar, pero no actúa. Pintrich separa supervisión y control porque fallan por separado.",
      "¿Cuál de estos supuestos forma parte del modelo de Pintrich?|El alumno necesita una meta o criterio|El alumno siempre controla su cognición|Las fases ocurren en orden estricto|Parte de que el alumno es activo, controla al menos parte de su actividad y necesita una meta o criterio con que comparar."
    ],
    inc: [
      "Sobre el modelo de Pintrich|Pedir ayuda indica una regulación deficiente|Las fases pueden solaparse y ocurrir a la vez|Separa la supervisión del control|Pedir ayuda a tiempo, lejos de ser un signo de dependencia, es una conducta autorregulada."
    ],
    seq: [],
    cls: [
      "Modelo de autorregulación|Zimmerman (2000): tres fases en ciclo; autoobservación; contexto dentro del autocontrol|Pintrich (2000): cuatro fases por cuatro áreas; contexto como área propia; MSLQ"
    ] },
  { t: "Enseñar a autorregularse",
    tip: "La autorregulación se puede enseñar. Dignath y Büttner (2008) hallaron un efecto medio de 0,69, mayor cuando intervenían los investigadores que con el profesorado habitual. Funcionan la enseñanza explícita de estrategias con su conocimiento condicional, el modelado en voz alta, la práctica dentro de las materias y la retirada gradual de la ayuda. Las autoinstrucciones de Meichenbaum y Goodman (1971) pasan del habla externa del adulto al habla interna del niño.",
    v: [
      "Dignath y Büttner (2008)=Metaanálisis con 49 estudios de primaria y 35 de secundaria",
      "Modelado en voz alta=El docente muestra cómo planifica, detecta un error y lo corrige",
      "Retirada gradual=Pasar de guías y plantillas a recordatorios y, al final, a nada",
      "Autoinstrucciones=Entrenamiento para niños impulsivos de Meichenbaum y Goodman (1971)",
      "Guía externa manifiesta=El niño hace la tarea mientras el adulto le da las instrucciones en voz alta",
      "Autoinstrucción encubierta=Último paso, en el que el niño guía su conducta con el habla interna",
      "Pereza metacognitiva=Ahorrarse planificar, supervisar y evaluar al usar una IA que resuelve la tarea",
      "Autorregistro=Anotar lo que se hace para ver el progreso y aportar datos a la reflexión"
    ],
    g: [
      "En Dignath y Büttner, el efecto en rendimiento fue de 0,61 en primaria y de ___ en secundaria.|0,54|0,69|0,45",
      "El efecto medio de los programas de entrenamiento en autorregulación fue de ___.|0,69|0,61|0,54",
      "En el cuarto paso de Meichenbaum y Goodman, el niño se da las instrucciones ___.|en susurros|en voz alta|en silencio",
      "Las estrategias deben practicarse dentro de los ___ de la materia.|contenidos|horarios|exámenes",
      "Las autoinstrucciones se han usado mucho con alumnado con ___.|TDAH|dislexia|altas capacidades"
    ],
    tf: [
      "En Dignath y Büttner, los efectos fueron mayores cuando aplicaba los programas el profesorado habitual.|F|Fueron mayores cuando intervenían los investigadores, lo que plantea el reto de llevarlos a las aulas reales.",
      "Los programas funcionan mejor en sesiones aisladas de técnicas de estudio que dentro de las materias.|F|Se recomienda practicar dentro de los contenidos de la materia, no en sesiones aisladas de técnicas de estudio.",
      "Los estudios sobre IA generativa y autorregulación son todavía preliminares y heterogéneos.|V",
      "Ayudar a atribuir los resultados a causas controlables forma parte de unir estrategia y motivación.|V"
    ],
    q: [
      "Una orientadora trabaja con un niño impulsivo, que ahora hace la tarea dándose las instrucciones en voz alta. ¿En qué paso está?|Autoguía manifiesta|Guía externa manifiesta|Autoguía atenuada|Es el tercer paso. En la guía externa las instrucciones las da el adulto, y en la atenuada el niño las susurra.",
      "¿Qué dato matiza el optimismo del metaanálisis de Dignath y Büttner?|Rendían más con investigadores|No hubo efecto en secundaria|Los efectos fueron negativos en primaria|Los efectos fueron mayores cuando intervenían los investigadores que cuando lo hacía el profesorado habitual.",
      "¿Qué riesgo plantea un asistente de IA que resuelve la tarea?|Ahorrar el esfuerzo metacognitivo|Aumentar la carga de supervisión|Impedir el conocimiento declarativo|Puede ahorrar justo el esfuerzo de planificar, supervisar y evaluar si no se acompaña de andamiaje.",
      "Un tutor de 2.º de ESO usa una hoja en la que el alumno anota qué entregará, en qué pasos lo divide y, al final, qué le funcionó. ¿Qué técnica aplica?|Autoobservación y autorregistro|Autoinstrucciones encubiertas|Modelado en voz alta|Anotar lo que se hace vuelve visible el progreso y aporta datos a la autorreflexión."
    ],
    inc: [
      "Sobre cómo enseñar a autorregularse|Basta con enseñar qué es cada estrategia|Conviene modelar pensando en voz alta|La ayuda debe retirarse de forma gradual|Hay que enseñar también su conocimiento condicional: qué es, cómo se hace, cuándo conviene y por qué funciona."
    ],
    seq: [
      "Autoinstrucciones de Meichenbaum y Goodman|Modelado cognitivo>Guía externa manifiesta>Autoguía manifiesta>Autoguía manifiesta atenuada>Autoinstrucción encubierta"
    ],
    cls: [] }
] },
{ n: 11, t: "La motivación académica", cap: 4, pir: "alta", mods: [
  { t: "Expectativas y valor de la tarea",
    tip: "La motivación pone en marcha la conducta, la dirige y la mantiene. Para Atkinson, la tendencia a emprender una tarea depende del motivo, la probabilidad de éxito y el incentivo, y es máxima con dificultad intermedia. Quienes temen el fracaso eligen tareas muy fáciles o muy difíciles. Eccles y Wigfield combinan de forma multiplicativa la expectativa de éxito y el valor de la tarea, que tiene cuatro componentes: logro, intrínseco, utilidad y coste.",
    v: [
      "Motivación=Procesos que ponen en marcha una conducta, le dan dirección y la mantienen",
      "Motivación extrínseca=Depende de consecuencias externas a la tarea, como una nota o un premio",
      "Motivo de logro=Tendencia relativamente estable a buscar el éxito",
      "Incentivo del éxito=Para Atkinson, es mayor cuanto más difícil es la tarea",
      "Expectativa de éxito=Componente que responde a la pregunta «¿puedo hacerlo?»",
      "Valor de utilidad=Componente que responde a «¿me sirve para algo que quiero?»",
      "Coste=Lo que se pierde al hacer la tarea en tiempo, esfuerzo o exposición",
      "Valor de logro=Importancia personal de hacer bien la tarea"
    ],
    g: [
      "Según Atkinson, el producto de probabilidad e incentivo es máximo con tareas de dificultad ___.|intermedia|muy baja|muy alta",
      "En el modelo de Eccles, expectativa y valor se combinan de forma ___.|multiplicativa|aditiva|independiente",
      "Disfrutar resolviendo acertijos de lógica refleja el valor ___.|intrínseco|de utilidad|de logro",
      "Estudiar inglés porque se quiere trabajar en otro país refleja el valor de ___.|utilidad|logro|coste",
      "En España, la línea de ___ subraya que la motivación depende de cómo el profesorado plantea las tareas.|Alonso Tapia|González-Pienda|García y Musitu"
    ],
    tf: [
      "Según Atkinson, quienes temen el fracaso prefieren tareas de dificultad intermedia.|F|Esas las prefieren quienes buscan el éxito. Quienes temen el fracaso eligen tareas muy fáciles o muy difíciles.",
      "En el modelo de expectativa-valor, si la expectativa es casi nula, la motivación cae aunque el valor sea alto.|V",
      "Decir «esto entra en el examen» apela a todos los componentes del valor de la tarea.|F|Solo apela a un tipo de valor. El docente puede actuar también sobre el interés, la utilidad o el coste.",
      "Una tarea interesante y útil puede evitarse si exige demasiado tiempo, esfuerzo o exposición ante los demás.|V"
    ],
    q: [
      "Un alumno con mucho miedo a fracasar se apunta al problema más imposible de la lista de ejercicios voluntarios. Según Atkinson, ¿qué indica?|Que se está protegiendo|Que busca el éxito|Que valora la utilidad|Fracasar en una tarea muy difícil no dice nada de uno mismo. No muestra ambición, sino protección.",
      "Una alumna renuncia a entrenar con su equipo para preparar un examen. ¿Qué componente del valor refleja esa renuncia?|El coste|El valor de logro|El valor intrínseco|El coste es lo que se pierde al hacer la tarea. Puede llevar a evitar tareas interesantes y útiles.",
      "¿Por qué el incentivo del éxito es mayor en las tareas difíciles?|Porque aprobar lo fácil enorgullece poco|Porque su probabilidad de éxito es alta|Porque el motivo de logro aumenta con ellas|Probabilidad e incentivo se mueven en sentido contrario: aprobar un examen fácil enorgullece poco.",
      "¿En qué tres aspectos de la conducta se observa la motivación en el aula?|Elección, esfuerzo y persistencia|Atención, memoria y comprensión|Expectativa, valor y coste|Se observa en qué tareas elige el alumno, cuánto esfuerzo invierte y cuánto persiste ante las dificultades."
    ],
    inc: [
      "Sobre la motivación intrínseca y extrínseca|Toda motivación extrínseca es poco autónoma|La intrínseca nace del interés por la actividad|La extrínseca depende de consecuencias externas|La dicotomía se queda corta: hay formas de motivación extrínseca muy autónomas, como muestra la autodeterminación."
    ],
    seq: [],
    cls: [
      "Componente del valor|Valor intrínseco: disfrutar con acertijos de lógica|Valor de utilidad: estudiar inglés para trabajar fuera|Coste: renunciar a entrenar para preparar un examen"
    ] },
  { t: "Atribuciones y defensa de la autovalía",
    tip: "Weiner clasifica las causas por locus, estabilidad y controlabilidad. La capacidad es interna, estable e incontrolable, y el esfuerzo, interno, inestable y controlable. La dificultad es externa, estable e incontrolable, y la suerte, externa, inestable e incontrolable. El locus afecta al orgullo, la estabilidad a las expectativas y la controlabilidad a emociones como culpa o vergüenza. Covington explica el autosabotaje como defensa de la autovalía.",
    v: [
      "Atribución causal=Explicación que se da a la causa de un resultado propio o ajeno",
      "Locus=Dimensión que sitúa la causa dentro o fuera de la persona",
      "Estabilidad=Dimensión que indica si la causa se mantiene o cambia en el tiempo",
      "Controlabilidad=Grado en que la persona puede modificar la causa de un resultado",
      "Reentrenamiento atribucional=Sustituir atribuciones dañinas por otras modificables, como la estrategia",
      "Indefensión aprendida=Pasividad cuando se percibe que los resultados no dependen de la propia conducta",
      "Autosabotaje=Crearse obstáculos antes de una prueba para proteger la imagen de capacidad",
      "Teoría de la autovalía=Propuesta de Covington (1984) en la que valer se confunde con ser capaz"
    ],
    g: [
      "Según Weiner, la estabilidad de la causa afecta sobre todo a las ___.|expectativas futuras|emociones morales|creencias de valor",
      "Atribuir el suspenso a la falta de capacidad provoca ___.|vergüenza|culpa|ira",
      "Un docente que muestra ___ excesiva ante un fallo puede comunicar «no te veo capaz».|compasión|exigencia|indiferencia",
      "La reformulación atribucional de Abramson, Seligman y Teasdale es de ___.|1978|1985|1979",
      "La dificultad de la tarea es una causa externa, ___ e incontrolable.|estable|inestable|global"
    ],
    tf: [
      "El esfuerzo es la única de las cuatro causas clásicas que es a la vez interna y controlable.|V",
      "Según Weiner, la suerte es una causa externa, estable e incontrolable.|F|La suerte es externa, inestable e incontrolable. Externa, estable e incontrolable es la dificultad de la tarea.",
      "Atribuir el fracaso al esfuerzo suele ser más útil que atribuirlo a la estrategia.|F|Suele ser al revés: la estrategia indica qué cambiar y evita el mensaje de que bastaría con dedicar más horas.",
      "La globalidad de la atribución explica que un alumno generalice un fracaso a toda su vida escolar.|V"
    ],
    q: [
      "Antes de un examen importante, Javier sale hasta tarde y no repasa. Si suspende, dirá que no se preparó. ¿Qué explica su conducta?|La defensa de la autovalía|La indefensión aprendida|La regulación introyectada|Es autosabotaje (Covington): si fracasa, la causa no será la falta de capacidad, sino la falta de preparación.",
      "¿Qué dimensión comparten la capacidad y el esfuerzo según Weiner?|El locus interno|La estabilidad|La controlabilidad|Ambas son internas. Difieren en que la capacidad es estable e incontrolable, y el esfuerzo, inestable y controlable.",
      "Según Weiner, ¿qué dimensión regula sobre todo el orgullo y la autoestima?|El locus|La estabilidad|La controlabilidad|Aprobar «porque me lo he trabajado» enorgullece más que aprobar «porque el examen era fácil».",
      "Según la reformulación de la indefensión aprendida, ¿qué atribuciones del fracaso aumentan el riesgo?|Internas, estables y globales|Internas, inestables y controlables|Externas, estables e incontrolables|Abramson, Seligman y Teasdale (1978) añadieron la globalidad. Es una trampa típica confundirla con la tabla de Weiner."
    ],
    inc: [
      "Sobre la teoría de la autovalía|Esforzarse siempre protege la imagen de capacidad|En la escuela, valer se confunde con ser capaz|Conviene separar la valía personal del resultado|Si el fracaso tras mucho esfuerzo demuestra poca capacidad, esforzarse se vuelve arriesgado: es un arma de doble filo."
    ],
    seq: [],
    cls: [
      "Estabilidad de la causa según Weiner|Estable: capacidad; dificultad de la tarea|Inestable: esfuerzo; suerte"
    ] },
  { t: "Autodeterminación y recompensas",
    tip: "La teoría de la autodeterminación de Deci y Ryan propone tres necesidades básicas: autonomía, competencia y relación. Sustituye la dicotomía intrínseca-extrínseca por un continuo que va de la amotivación a la motivación intrínseca, con cuatro regulaciones extrínsecas cada vez más autónomas. Las recompensas tangibles y esperadas por tareas ya interesantes reducen la libre elección (d de −0,34), y el feedback positivo la aumenta (Deci, Koestner y Ryan, 1999).",
    v: [
      "Autonomía=Sentir que lo que se hace nace de uno mismo y no de una presión ajena",
      "Competencia=Necesidad de sentirse eficaz ante los retos",
      "Relación=Necesidad de sentirse vinculado y aceptado por los demás",
      "Amotivación=No ver razón alguna para hacer la actividad",
      "Regulación introyectada=Se actúa por culpa, orgullo o presión interna",
      "Regulación identificada=Se considera la actividad valiosa e importante",
      "Regulación integrada=La actividad encaja con los propios valores",
      "Sobrejustificación=Pérdida de interés tras recibir recompensas esperadas por la actividad"
    ],
    g: [
      "En el estudio de Lepper, Greene y Nisbett, la recompensa era un ___.|diploma|caramelo|juguete",
      "En el metaanálisis de Deci, Koestner y Ryan, las recompensas ___ no tuvieron efecto.|inesperadas|tangibles|esperadas",
      "El feedback positivo verbal aumentó la conducta de libre elección, con una d de ___.|0,33|0,31|0,28",
      "Recompensar participar en la tarea produjo una d de ___.|−0,40|−0,36|−0,28",
      "El docente que apoya la autonomía usa un lenguaje ___.|informativo|de obligación|amenazante"
    ],
    tf: [
      "Las cuatro regulaciones centrales del continuo son formas de motivación extrínseca.|V",
      "Las recompensas tangibles y esperadas reducen la motivación también en tareas sin ningún interés inicial.|F|El efecto se refiere a tareas que ya interesaban. Sin interés inicial, no hay motivación intrínseca que socavar.",
      "Cameron y Pierce invirtieron la conclusión principal sobre los efectos de las recompensas.|F|Defendieron que los efectos negativos son más limitados. El debate ha matizado las condiciones, no ha invertido la conclusión.",
      "El elogio aumenta la motivación intrínseca porque informa de la competencia.|V"
    ],
    q: [
      "Una alumna dice: «Leo porque me ayuda a escribir mejor». ¿Qué tipo de regulación expresa?|Identificada|Integrada|Introyectada|Considera la lectura valiosa e importante. La integrada implica que encaja con quién es, y la introyectada, culpa o presión.",
      "A unos preescolares que ya disfrutaban dibujando se les promete un diploma por dibujar. Semanas después, en juego libre, ¿qué cabe esperar?|Que dibujen menos que los demás|Que dibujen más que los demás|Que dibujen igual que los demás|Es la sobrejustificación: la recompensa esperada cambia la razón percibida de la actividad («dibujo por el diploma»).",
      "¿Qué muestra la sobrejustificación que no predice el refuerzo?|Que el interés cae al retirar la recompensa|Que la conducta aumenta mientras hay premio|Que solo actúan las recompensas verbales|El refuerzo aumenta la conducta mientras se mantiene, pero la recompensa esperada puede reducir el interés cuando desaparece.",
      "¿Qué hace un docente que apoya la autonomía?|Ofrece opciones y explica sus razones|Impone las tareas con un lenguaje claro|Promete premios por cada tarea hecha|El docente que apoya la autonomía ofrece opciones, explica sus razones y usa un lenguaje informativo."
    ],
    inc: [
      "Sobre el metaanálisis de Deci, Koestner y Ryan (1999)|Recompensar hacerlo bien aumentó la libre elección|Reunió 128 experimentos sobre recompensas|El feedback positivo aumentó el interés declarado|Recompensar hacerlo bien también redujo la libre elección (d de −0,28), igual que participar o terminar."
    ],
    seq: [
      "Continuo de la autodeterminación|Amotivación>Regulación externa>Regulación introyectada>Regulación identificada>Regulación integrada>Motivación intrínseca"
    ],
    cls: [
      "Efecto sobre la libre elección (Deci, Koestner y Ryan, 1999)|La reduce: recompensa tangible y esperada; recompensa por participar; recompensa por terminar|Sin efecto: recompensa inesperada|La aumenta: feedback positivo verbal"
    ] },
  { t: "Metas, autoeficacia y mentalidad",
    tip: "Dweck, Nicholls y Ames distinguen metas de aprendizaje, centradas en mejorar, y de rendimiento, centradas en demostrar capacidad. Elliot y McGregor (2001) las cruzan con aproximación y evitación en un modelo 2 × 2. La autoeficacia (Bandura) es específica de la tarea, y su fuente más potente son las experiencias de dominio. Las intervenciones de mentalidad de crecimiento tienen un efecto real, pequeño y dependiente del contexto.",
    v: [
      "Metas de aprendizaje=Orientación a entender y mejorar la propia competencia",
      "Metas de rendimiento=Orientación a demostrar capacidad o no parecer incapaz",
      "Modelo 2 × 2=Cruce de dominio y rendimiento con aproximación y evitación (Elliot y McGregor)",
      "TARGET=Tarea, autoridad, reconocimiento, agrupamiento, evaluación y tiempo (Ames, 1992)",
      "Autoeficacia=Creencia en la propia capacidad para realizar una tarea concreta",
      "Experiencia vicaria=Ver a alguien parecido a uno conseguirlo",
      "Mentalidad fija=Teoría de la entidad: la inteligencia es una cantidad dada",
      "Mentalidad de crecimiento=Teoría incremental: la inteligencia puede desarrollarse"
    ],
    g: [
      "Elliot y McGregor propusieron su modelo 2 × 2 en ___.|2001|1992|1998",
      "Según Bandura, la fuente más potente de autoeficacia es la experiencia ___.|de dominio|vicaria|emocional",
      "Mueller y Dweck (1998) trabajaron con alumnado de ___ curso.|quinto|tercero|sexto",
      "Sisk et al. (2018) hallaron un efecto medio de las intervenciones de mentalidad de d de ___.|0,08|0,05|0,02",
      "En los seis estudios de mayor calidad, Macnamara y Burgoyne obtuvieron una d de ___.|0,02|0,05|0,08"
    ],
    tf: [
      "Las metas de evitación del rendimiento suelen acompañar a los patrones de estudio menos adaptativos.|V",
      "La autoeficacia es una autoestima general que se aplica por igual a todas las tareas.|F|Es específica: se puede tener alta autoeficacia para escribir un comentario de texto y baja para resolver ecuaciones.",
      "Enseñar mentalidad de crecimiento es una palanca general que mejora mucho el rendimiento de todo el alumnado.|F|Los efectos medios son muy pequeños y se concentran en alumnado de bajo rendimiento o en riesgo.",
      "En Mueller y Dweck, los niños elogiados por su inteligencia preferían después tareas fáciles.|V"
    ],
    q: [
      "Un alumno dice: «No quiero ser el peor de la clase». Según el modelo 2 × 2, ¿qué meta expresa?|Evitación del rendimiento|Evitación del dominio|Aproximación al rendimiento|Busca no quedar mal frente a los demás. La evitación del dominio sería no querer dejar de entender lo que ya sabe.",
      "¿Qué hallaron Yeager et al. (2019) en el alumnado de bajo rendimiento?|Una mejora de 0,10 en la nota media|Una mejora de dos desviaciones típicas|Ningún efecto tras corregir el sesgo|Con 12.490 alumnos de 65 institutos y una intervención en línea breve, la mejora fue mayor donde las normas apoyaban asumir retos.",
      "Un profesor publica rankings y valora solo el resultado. Según Ames, ¿hacia dónde empuja al alumnado?|Hacia metas de rendimiento|Hacia metas de dominio|Hacia la regulación integrada|El aula crea una estructura de metas (TARGET). Valorar el progreso, en cambio, empuja hacia metas de dominio.",
      "Ver a un compañero parecido resolver el problema corresponde a la fuente de autoeficacia de…|la experiencia vicaria|la persuasión verbal|la experiencia de dominio|Es la segunda fuente por potencia. La más potente son los éxitos propios en tareas parecidas."
    ],
    inc: [
      "Sobre las metas de logro|En las de rendimiento, el error se ve como información|En las de aprendizaje, el objetivo es mejorar la competencia|El aula crea una estructura de metas (TARGET)|En las metas de rendimiento el error se ve como amenaza. Como información se ve en las de aprendizaje."
    ],
    seq: [
      "Fuentes de autoeficacia de más a menos potente|Experiencias de dominio>Experiencia vicaria>Persuasión verbal>Estados fisiológicos y emocionales"
    ],
    cls: [
      "Orientación de meta|Metas de aprendizaje: entender y mejorar; error como información; valorar el progreso|Metas de rendimiento: demostrar capacidad; error como amenaza; rankings públicos"
    ] }
] },
{ n: 12, t: "Ansiedad, emociones y autoconcepto", cap: 4, pir: "alta", mods: [
  { t: "Ansiedad y exámenes",
    tip: "Spielberger distinguió la ansiedad rasgo, una tendencia estable, de la ansiedad estado, una reacción transitoria (STAI, 1970). Liebert y Morris (1967) separaron la preocupación, cognitiva, de la emocionalidad, fisiológico-afectiva. Según von der Embse et al. (2018), el componente cognitivo se asocia más con peor rendimiento. Los modelos de interferencia y de déficit de habilidades son compatibles. La U invertida de Yerkes y Dodson es un esquema útil, no una ley medida en el alumnado.",
    v: [
      "Ansiedad rasgo=Tendencia estable a reaccionar con ansiedad ante muchas situaciones",
      "Ansiedad estado=Reacción transitoria en un momento concreto, como al entrar al examen",
      "STAIC=Versión infantil del cuestionario de ansiedad de Spielberger",
      "Preocupación=Componente cognitivo, con pensamientos como «voy a suspender»",
      "Emocionalidad=Componente fisiológico-afectivo, con taquicardia, sudor o tensión",
      "Modelo de interferencia=La preocupación ocupa memoria de trabajo y resta recursos a la tarea",
      "Déficit de habilidades=El alumno ansioso rinde peor porque estudia peor, y lo sabe",
      "Desensibilización sistemática=Técnica de exposición gradual de Wolpe usada ante la ansiedad a los exámenes"
    ],
    g: [
      "Spielberger midió la ansiedad rasgo y la ansiedad estado con el ___.|STAI|SDQ|MSLQ",
      "Von der Embse et al. (2018) revisaron ___ estudios sobre ansiedad ante los exámenes.|238|128|63",
      "El componente cognitivo correlacionó −0,29 con el rendimiento en los exámenes de ___.|clase|admisión|oposición",
      "En las tareas difíciles, el rendimiento óptimo se alcanza con una activación más ___.|baja|alta|variable",
      "Enseñar técnicas de estudio se dirige sobre todo al ___ de habilidades del alumno ansioso.|déficit|dominio|exceso"
    ],
    tf: [
      "El componente fisiológico de la ansiedad ante los exámenes es el que más se asocia con peor rendimiento.|F|Es la trampa típica: se asocia más el cognitivo (−0,29 y −0,26) que el afectivo-fisiológico (−0,18 y −0,13).",
      "Un alumno con ansiedad rasgo baja puede sentir mucha ansiedad estado ante un examen oral decisivo.|V",
      "Los modelos de interferencia y de déficit de habilidades son incompatibles entre sí.|F|Son compatibles: la preocupación resta memoria de trabajo y, además, el alumno ansioso suele estudiar peor.",
      "Hembree (1988) halló una relación negativa con el rendimiento y la eficacia de los tratamientos cognitivo-conductuales.|V"
    ],
    q: [
      "Durante un examen, Irene no deja de pensar «me voy a quedar en blanco» y le cuesta seguir el razonamiento de los problemas. ¿Qué modelo lo explica mejor?|El de interferencia|El de déficit de habilidades|El de la U invertida|La preocupación ocupa parte de la memoria de trabajo durante el examen y deja menos recursos para la tarea.",
      "¿Qué cautela se aplica a la «ley» de Yerkes y Dodson en educación?|Procede de ratones con descargas|Se basa en exámenes de clase|Solo vale para tareas sencillas|El experimento original se hizo con ratones y descargas. En educación es un esquema útil, no una ley medida.",
      "¿Qué medida forma parte de las intervenciones con apoyo para la ansiedad ante los exámenes?|Reestructurar pensamientos catastróficos|Publicar las notas para motivar al grupo|Evitar los simulacros antes del examen|Se combinan técnicas de estudio, reestructuración cognitiva, relajación y exposición gradual, como en la desensibilización de Wolpe.",
      "¿Qué dirección causal se debate entre ansiedad y rendimiento?|Rendir mal también puede generar ansiedad|La ansiedad estado causa la ansiedad rasgo|El rendimiento no influye en la ansiedad|El alumnado menos competente también está más ansioso, así que parte de la asociación puede ir del rendimiento a la ansiedad."
    ],
    inc: [
      "Sobre la ansiedad ante los exámenes|La emocionalidad es su componente cognitivo|La preocupación incluye compararse con los demás|Las correlaciones van de −0,13 a −0,40|La emocionalidad es el componente fisiológico-afectivo. El cognitivo es la preocupación."
    ],
    seq: [],
    cls: [
      "Componente de la ansiedad ante los exámenes|Preocupación: voy a suspender; me voy a quedar en blanco; compararse con los demás|Emocionalidad: taquicardia; sudor; nudo en el estómago"
    ] },
  { t: "Las emociones de logro",
    tip: "Pekrun (2006) llama emociones de logro a las ligadas a actividades y resultados juzgados según un criterio de calidad. Dependen del control percibido y del valor. La ansiedad surge con un resultado importante y un control incierto, y el aburrimiento, con poco valor o con un control demasiado alto o demasiado bajo. Se clasifican por valencia, activación y foco, y el modelo es circular: los resultados modifican las valoraciones.",
    v: [
      "Emociones de logro=Ligadas a actividades y resultados juzgados según un criterio de calidad",
      "Control percibido=Cuánto cree el alumno que la actividad y su resultado dependen de él",
      "Valor=Cuánto le importa al alumno la actividad o su resultado",
      "Valencia=Criterio que separa emociones positivas y negativas",
      "Activación=Criterio que separa emociones activadoras y desactivadoras",
      "Foco=Criterio que distingue la actividad en curso de un resultado futuro o pasado",
      "Alivio=Emoción retrospectiva positiva pero desactivadora",
      "Desesperanza=Emoción prospectiva negativa y desactivadora"
    ],
    g: [
      "Según Pekrun, el aburrimiento aparece cuando el control es demasiado alto o demasiado ___.|bajo|incierto|estable",
      "La ansiedad es una emoción negativa y ___.|activadora|desactivadora|retrospectiva",
      "El orgullo es una emoción positiva centrada en un resultado ___.|retrospectivo|prospectivo|incierto",
      "El disfrute y el aburrimiento tienen como foco la ___.|actividad|evaluación|meta",
      "Convertir la clase en una competición sube el valor sin aumentar el ___, la combinación que produce ansiedad.|control|interés|feedback"
    ],
    tf: [
      "Según Pekrun, un alumno seguro de suspender sentirá la máxima ansiedad.|F|Si se está seguro de aprobar o de suspender, no hay ansiedad: surge con un resultado importante y un control incierto.",
      "La ansiedad, negativa pero activadora, puede empujar a algunos alumnos a estudiar más a costa del bienestar.|V",
      "En la teoría del control-valor, las emociones influyen en el rendimiento, pero los resultados no modifican las valoraciones.|F|El modelo es circular: los resultados cambian la sensación de control y el valor que se da a la materia.",
      "El control percibido de Pekrun se parece a la expectativa de éxito y a la controlabilidad de Weiner.|V"
    ],
    q: [
      "En una clase de repaso, Hugo ya domina todo lo que se explica y la tarea le resulta trivial. Según Pekrun, ¿qué emoción es más probable?|Aburrimiento|Ansiedad|Desesperanza|El aburrimiento aparece con poco valor o con un control demasiado alto, como en una tarea trivial, o demasiado bajo.",
      "¿Cuándo surge la ansiedad según la teoría del control-valor?|Resultado importante y control incierto|Resultado importante y control muy alto|Resultado poco importante y control bajo|Si el examen no importa no hay ansiedad, y si se está seguro del resultado, tampoco.",
      "¿Qué emoción de logro es positiva pero desactivadora?|El alivio|El orgullo|La esperanza|Disfrute, esperanza y orgullo son positivas y activadoras. El alivio es positivo pero desactivador.",
      "¿Qué práctica aumenta sobre todo el control percibido, según Pekrun?|Dar feedback que indique qué hacer|Mostrar entusiasmo por la materia|Vincular cada error a una nota pública|El entusiasmo del docente aumenta el valor. Las tareas ajustadas, los criterios claros y el feedback útil aumentan el control."
    ],
    inc: [
      "Sobre las emociones de logro|La vergüenza es negativa y desactivadora|La desesperanza es negativa y desactivadora|La ira es negativa y activadora|Ira, ansiedad y vergüenza son negativas y activadoras. La desesperanza y el aburrimiento son las desactivadoras."
    ],
    seq: [],
    cls: [
      "Foco de la emoción de logro|Actividad: disfrute; aburrimiento; ira|Resultado prospectivo: esperanza; ansiedad; desesperanza|Resultado retrospectivo: orgullo; alivio; vergüenza"
    ] },
  { t: "Autoconcepto, autoestima y autoeficacia",
    tip: "El autoconcepto es la descripción cognitiva de uno mismo por dominios. La autoestima es la valoración afectiva global (Rosenberg, 1965), y la autoeficacia, la creencia en la capacidad para una tarea concreta y futura. Shavelson, Hubner y Stanton (1976) describen un autoconcepto multidimensional y jerárquico, y Marsh y Shavelson (1985) hallaron que el verbal y el matemático son casi independientes. Autoconcepto académico y rendimiento se influyen mutuamente (Marsh y Craven, 2006).",
    v: [
      "Autoconcepto=Descripción cognitiva de uno mismo, organizada por dominios",
      "Autoestima=Valoración afectiva global de uno mismo",
      "Rosenberg (1965)=Autor de la escala clásica de valoración global de la propia valía",
      "Modelo jerárquico=Autoconcepto general dividido en académico y no académico (Shavelson et al.)",
      "Autoconcepto no académico=Facetas social, emocional y física, con habilidad y aspecto",
      "Efectos recíprocos=Autoconcepto académico y rendimiento se influyen mutuamente (Marsh y Craven)",
      "SDQ=Cuestionario de Marsh que respeta la estructura del autoconcepto por dominios",
      "AF-5=Cuestionario español de autoconcepto de García y Musitu"
    ],
    g: [
      "Una nota baja en un examen de matemáticas afecta primero al autoconcepto ___.|matemático|académico|general",
      "Marsh y Shavelson (1985) comprobaron que los autoconceptos verbal y matemático son casi ___.|independientes|idénticos|opuestos",
      "Valentine, DuBois y Cooper (2004) hallaron un efecto ___ de las autocreencias sobre el rendimiento posterior.|pequeño|grande|nulo",
      "La autoeficacia mira hacia una tarea concreta que está ___.|por venir|ya hecha|en curso",
      "El modelo de efectos recíprocos es de Marsh y ___.|Craven|Shavelson|Seaton"
    ],
    tf: [
      "Los programas que solo elevan la autoestima global, sin mejorar competencias, tienen poco efecto sobre las notas.|V",
      "En el modelo de Shavelson, cuanto más arriba en la jerarquía, más ligado está el autoconcepto a la experiencia concreta.|F|Es al revés: cuanto más abajo, más específico y más ligado a la experiencia concreta.",
      "El modelo de efectos recíprocos sostiene que el autoconcepto causa el rendimiento, pero no al revés.|F|Ambos se influyen con el tiempo: las buenas notas mejoran el autoconcepto, y este lleva a esforzarse y persistir más.",
      "En el modelo de Shavelson, el autoconcepto físico incluye la habilidad y el aspecto.|V"
    ],
    q: [
      "Un alumno dice: «En general, me siento a gusto con quien soy». ¿Qué expresa?|Autoestima|Autoconcepto|Autoeficacia|Es una valoración afectiva global. El autoconcepto describe dominios, y la autoeficacia se refiere a una tarea concreta.",
      "Una alumna piensa: «Puedo resolver este problema de proporciones». ¿Qué expresa?|Autoeficacia|Autoconcepto académico|Autoestima|Es una creencia sobre una tarea concreta y futura, según Bandura. Confundir los tres términos es la trampa típica.",
      "¿Qué corrigieron Marsh y Shavelson (1985) del modelo jerárquico?|Que el académico no es homogéneo|Que no es multidimensional|Que la autoestima ocupa la cima|Los autoconceptos verbal y matemático son casi independientes, en lugar de formar un único autoconcepto académico.",
      "¿Qué recomienda la evidencia para mejorar las notas a través del autoconcepto?|Mejorar competencias y ayudar a reconocerlas|Elevar la autoestima con mensajes positivos|Evitar el feedback sobre los errores|Las mejoras reales de rendimiento, con un feedback que ayude a reconocerlas, refuerzan el autoconcepto de la materia."
    ],
    inc: [
      "Sobre el modelo de Shavelson, Hubner y Stanton|Su cima es la autoestima global de Rosenberg|Es multidimensional y jerárquico|Incluye facetas social, emocional y física|En la cima está el autoconcepto general. La autoestima es un constructo distinto, la valoración afectiva global."
    ],
    seq: [
      "Del más general al más específico en el modelo de Shavelson|Autoconcepto general>Autoconcepto académico>Autoconcepto matemático"
    ],
    cls: [
      "Constructo|Autoconcepto: descripción por dominios; soy bueno en historia y malo en dibujo|Autoestima: valoración afectiva global; escala de Rosenberg|Autoeficacia: tarea concreta y futura; puedo resolver este problema"
    ] },
  { t: "Compararse: el pez grande en el estanque pequeño",
    tip: "Según el modelo del marco de referencia interno/externo de Marsh (1986), el alumnado se compara con los demás y entre sus propias materias. La comparación interna separa los autoconceptos verbal y matemático. Por la comparación externa, a igual capacidad, estudiar en un grupo de nivel medio alto reduce el autoconcepto académico (Marsh, 1987). Seaton, Marsh y Craven (2009) hallaron el efecto en los 41 países analizados de PISA 2003.",
    v: [
      "Comparación externa=Contrastar las propias notas con las de los compañeros",
      "Comparación interna=Contrastar el rendimiento entre las propias materias",
      "Marco de referencia=Modelo de Marsh (1986) con dos comparaciones simultáneas",
      "Pez grande, estanque pequeño=A igual capacidad, un grupo de nivel alto reduce el autoconcepto académico",
      "Marsh (1987)=Describió el efecto de compararse con compañeros de nivel alto",
      "Seaton, Marsh y Craven=Analizaron los datos de PISA 2003 en 41 países (2009)",
      "Grupo de referencia=Compañeros con los que el alumno compara su rendimiento",
      "Programa selectivo=Agrupamiento por nivel que puede costar autoconcepto a quien queda abajo"
    ],
    g: [
      "Seaton, Marsh y Craven hallaron un efecto del nivel medio del centro de ___ sobre el autoconcepto matemático.|−0,49|−0,34|−0,29",
      "El efecto fue negativo en los 41 países y significativo en ___.|38|41|35",
      "«Se me dan mejor las matemáticas que la lengua» es una comparación ___.|interna|externa|social",
      "Publicar rankings y comparar en voz alta refuerza la comparación ___.|externa|interna|temporal",
      "Ante un alumno que se ha hundido al cambiar de centro, conviene comprobar si solo ha cambiado su grupo de ___.|referencia|amigos|clase"
    ],
    tf: [
      "A igual capacidad, el alumno de un centro de nivel medio alto tiende a tener mejor autoconcepto académico.|F|Tiende a tenerlo más bajo: ser un pez mediano entre peces grandes hace sentirse menos capaz.",
      "Por la comparación interna, notas medianas en dos materias pueden dar un autoconcepto matemático alto y uno verbal bajo.|V",
      "El efecto del pez grande en el estanque pequeño implica que los centros exigentes deben evitarse.|F|No es una condena de los centros exigentes: hay que vigilar el coste para quienes quedan en la parte baja del grupo.",
      "El efecto del pez grande en el estanque pequeño es uno de los resultados más consistentes sobre autoconcepto.|V"
    ],
    q: [
      "Dos alumnos con resultados casi idénticos en primaria van a institutos distintos, uno selectivo, donde queda en la mitad baja, y otro de barrio, donde está entre los primeros. Un curso después, ¿qué cabe esperar?|Mejor autoconcepto en el de barrio|Mejor autoconcepto en el selectivo|Igual autoconcepto en ambos|A igual capacidad, un grupo de referencia de nivel alto reduce el autoconcepto académico.",
      "¿Qué reduce el peso de la comparación externa en el aula?|Valorar el progreso individual|Publicar los rankings de notas|Premiar solo a los mejores|Valorar el progreso y usar criterios de dominio reduce su peso. Los rankings y premiar solo a los mejores lo refuerzan.",
      "¿Qué explica, según Marsh, que los autoconceptos verbal y matemático sean casi independientes?|La comparación interna|La comparación externa|El efecto Pigmalión|Compararse entre las propias materias los separa, incluso con notas medianas en ambas.",
      "¿Qué se recomienda ante los programas selectivos y los agrupamientos por nivel?|Vigilar a quienes quedan abajo|Eliminarlos por su coste emocional|Aplicarlos sin ninguna precaución|Pueden tener ventajas académicas, pero hay que vigilar el coste para el autoconcepto de quienes quedan en la parte baja."
    ],
    inc: [
      "Sobre el efecto del pez grande en el estanque pequeño|Requiere un cambio en la capacidad|Se da a igual capacidad del alumnado|Lo describió Marsh en 1987|El efecto aparece a igual capacidad: lo que cambia es el grupo de referencia, no la capacidad."
    ],
    seq: [],
    cls: [
      "Comparación del modelo de Marsh|Externa: con los compañeros; pez grande en el estanque pequeño; rankings|Interna: entre materias; autoconceptos verbal y matemático casi independientes"
    ] }
] }
);

// SAIMAP Psicología · Educativa · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Gestionar el aula", cap: 5, pir: "media", mods: [
  { t: "El espacio y los recursos",
    tip: "La gestión del aula es el conjunto de decisiones del docente para crear un entorno ordenado en el que se pueda aprender, y cada minuto perdido es un minuto que no se dedica a aprender. No existe una disposición ideal: la mejor depende de la tarea. La zona de acción concentra la interacción con el docente, y ningún recurso mejora el aprendizaje por estar en el aula, sino por la tarea y la rutina que lo rodean.",
    v: [
      "Gestión del aula=Decisiones del docente para crear un entorno ordenado en el que se pueda aprender",
      "Zona de acción=Parte delantera y central del aula, donde se concentra la interacción con el docente",
      "Disposición en filas=Favorece la atención al frente y el trabajo individual",
      "Grupos de mesas=Disposición que favorece la interacción y la cooperación",
      "U o círculo=Disposición en la que todos se ven y se escuchan",
      "Accesibilidad=Pasillos despejados y materiales de uso frecuente al alcance del alumnado",
      "Visibilidad=El docente ve a todo el grupo, y todos ven la pizarra o la pantalla",
      "Rutinas visibles=Horario, normas y pasos de la tarea a la vista para evitar preguntas repetidas"
    ],
    g: [
      "Para un examen o una tarea de concentración, la disposición más adecuada es en ___.|filas|grupos|círculo",
      "Una asamblea o una puesta en común encaja mejor con las mesas en ___.|U|filas|grupos",
      "Quien se sienta en la ___ recibe más preguntas, más miradas y más feedback.|zona de acción|última fila|zona lateral",
      "Una tableta ayuda o estorba según la tarea y según reduzca o aumente la carga ___ innecesaria.|cognitiva|emocional|visual",
      "Las paredes llenas de carteles y los dispositivos encendidos sin uso compiten por una atención ___.|limitada|dividida|sostenida"
    ],
    tf: [
      "Los grupos de mesas son la disposición más adecuada para cualquier tarea, porque favorecen la cooperación.|F|No hay disposición ideal: depende de la tarea. En una explicación larga, los grupos multiplican las conversaciones laterales.",
      "El docente puede compensar el efecto de la zona de acción moviéndose por el aula y cambiando a menudo a los alumnos de sitio.|V",
      "Lo práctico es que el alumnado sepa cambiar de disposición en poco tiempo, como una rutina más.|V",
      "Una pantalla interactiva mejora el aprendizaje por el mero hecho de estar en el aula.|F|Ningún aparato mejora el aprendizaje por estar ahí: depende de la tarea y de la rutina que lo rodea."
    ],
    q: [
      "Un profesor sienta a la clase en grupos de mesas y después da una explicación de cuarenta minutos. ¿Qué problema es más probable?|Más conversaciones laterales|Menos cooperación en el grupo|Menos preguntas al docente|Elegir la disposición por lo que transmite y no por la tarea obliga a girarse a medio grupo y multiplica las charlas laterales.",
      "Dos aulas contiguas tienen las mismas tabletas, pero en una se reparten y se recogen en dos minutos. ¿Qué marca la diferencia?|La rutina que rodea al recurso|El modelo de tableta utilizado|El número de tabletas del aula|El recurso es el mismo. Lo que cambia es la rutina, como el carro numerado y el encargado de material.",
      "¿Qué principio del espacio se cuida al dejar a la vista el horario y los pasos de una tarea?|Rutinas visibles|Accesibilidad|Visibilidad|Tenerlos a la vista reduce las preguntas repetidas. La visibilidad se refiere a que el docente vea a todos y todos vean la pizarra.",
      "¿Por qué la gestión del aula no es un asunto menor ni previo a la enseñanza?|Cada minuto perdido resta tiempo de aprender|Determina por sí sola el rendimiento del grupo|Sustituye a la explicación del docente|Repartir material o esperar a que el grupo se calme consume minutos que no se dedican a aprender."
    ],
    inc: [
      "Sobre el espacio y los recursos|La disposición en filas es la idónea para un debate|La zona de acción concentra la interacción con el docente|Un aula sin barreras físicas es condición mínima de inclusión|Con todos mirando a la nuca del compañero de delante, un debate es casi imposible. Encaja con la U o el círculo."
    ],
    seq: [],
    cls: [
      "Disposición del aula|Filas: explicaciones; exámenes; tareas de concentración|Grupos de mesas: trabajo en equipo; proyectos; laboratorio|U o círculo: debates; asambleas; puestas en común"
    ] },
  { t: "Prevenir antes que corregir: normas y autocontrol",
    tip: "Kounin (1970) halló que los buenos gestores no se distinguían por cómo reaccionaban ante la mala conducta, sino porque prevenían, y describió el withitness, el solapamiento, la fluidez, la alerta grupal, la saciedad y el efecto onda. Canter (1976) propuso la disciplina asertiva, y las normas deben ser pocas, en positivo y enseñadas. El objetivo último es que el control pase del docente al propio alumno.",
    v: [
      "Withitness=Dar a entender que se sabe lo que pasa en todo el aula",
      "Solapamiento=Atender dos situaciones a la vez",
      "Momentum=Fluidez y ritmo: transiciones ágiles, sin tiempos muertos",
      "Alerta grupal=Plantear la pregunta a toda la clase y solo después decir quién responde",
      "Evitar la saciedad=Introducir variedad para que no decaiga el interés",
      "Efecto onda=Influencia sobre el grupo de la corrección dirigida a un solo alumno",
      "Disciplina asertiva=Normas claras, consecuencias conocidas y estilo firme y respetuoso (Canter, 1976)",
      "Autoinstrucciones=Guiar la propia conducta con el habla, primero en voz alta y después en silencio"
    ],
    g: [
      "Kounin publicó su análisis de grabaciones de aulas bien y mal gestionadas en ___.|1970|1976|1971",
      "El estilo ___ anuncia consecuencias que luego no hace cumplir.|pasivo|hostil|asertivo",
      "Según Evertson y Emmer, las normas y rutinas se ___ en las primeras semanas del curso.|enseñan|negocian|imponen",
      "En la jerarquía de intervención, lo primero es la mirada o la ___ física.|proximidad|contención|separación",
      "Meichenbaum y Goodman (1971) enseñaron autoinstrucciones a niños ___.|impulsivos|ansiosos|retraídos"
    ],
    tf: [
      "Kounin esperaba encontrar la clave en la reacción ante la mala conducta, pero la halló en la prevención.|V",
      "En el metaanálisis de Korpershoek et al. (2016), los programas de gestión del aula mejoraron sobre todo la motivación.|F|Mejoraron resultados académicos, conductuales y socioemocionales, pero no los motivacionales.",
      "«No gritar» es una formulación preferible a «levantamos la mano para hablar».|F|Se recomiendan normas en positivo: «levantamos la mano para hablar» es mejor que «no gritar».",
      "Korpershoek et al. (2016) reunieron 54 estudios controlados de gestión del aula en primaria.|V"
    ],
    q: [
      "Una profesora ayuda a un grupo y, con un gesto, indica a otra mesa que baje el volumen. ¿Qué concepto de Kounin ilustra?|Solapamiento|Withitness|Efecto onda|Atender dos cosas a la vez es solapamiento. Confundirlo con withitness, estar al tanto de todo el aula, es la trampa típica.",
      "Ante un alumno que habla durante la explicación, ¿qué debería hacer primero el docente según la jerarquía de intervención?|Acercarse a su mesa|Recordarle la norma|Anunciarle una consecuencia|Se avanza de menor a mayor intrusividad: mirada o proximidad, después nombrar o recordar la norma y luego la consecuencia.",
      "Un alumno comprueba al acabar: «¿he terminado los cinco ejercicios?». ¿Qué técnica de autocontrol aplica?|Autoevaluación|Autorregistro|Autorrefuerzo|Comparar lo hecho con un criterio es autoevaluación. El autorregistro anota frecuencias, y el autorrefuerzo premia cumplir la meta.",
      "Un alumno impulsivo se dice antes de cada ejercicio «¿qué tengo que hacer?, voy despacio, compruebo». ¿Qué técnica aplica?|Autoinstrucciones|Autorregistro|Autorrefuerzo|Guiarse con el habla es la técnica de Meichenbaum y Goodman (1971). El autorregistro consiste en anotar la frecuencia de una conducta."
    ],
    inc: [
      "Sobre la prevención y la disciplina|Kounin halló la clave en la dureza del castigo|Las normas deben ser pocas y formuladas en positivo|Las intervenciones suaves interrumpen menos la clase|Es la trampa típica: Kounin halló la diferencia en la prevención, no en la forma de reaccionar ante la mala conducta."
    ],
    seq: [
      "Jerarquía de intervención ante la conducta disruptiva|Mirada o proximidad física>Nombrar al alumno o recordar la norma>Consecuencia anunciada>Conversación aparte o implicar a otros profesionales"
    ],
    cls: [
      "Estilo docente según Canter|Asertivo: firme y respetuoso; consecuencias conocidas de antemano|Pasivo: no hace cumplir lo que anuncia|Hostil: humilla al alumno"
    ] },
  { t: "Fomentar el trabajo autónomo",
    tip: "La meta del orden es que el alumnado aprenda por su cuenta. Según la teoría de la autodeterminación (Deci y Ryan, 2000), la motivación de mayor calidad aparece al satisfacer autonomía, competencia y relación. Apoyar la autonomía se opone al estilo controlador, no al orden: ofrece elección, da razones y usa un lenguaje no controlador. Las ayudas se retiran poco a poco, porque la mínima guía no funciona con novatos.",
    v: [
      "Motivación intrínseca=La actividad es su propia recompensa",
      "Motivación extrínseca=Lo que se busca está fuera de la actividad",
      "Autodeterminación=Teoría de Deci y Ryan (2000) sobre autonomía, competencia y relación",
      "Apoyo a la autonomía=Estilo que ofrece elección dentro de límites y da razones de lo que se pide",
      "Estilo controlador=Impone sin explicar y usa un lenguaje que presiona en vez de informar",
      "Metas próximas=Objetivos cercanos y específicos en que se descompone un trabajo largo",
      "Andamiaje=Ayudas que se retiran poco a poco a medida que el alumno las interioriza",
      "Elección dentro de límites=Decidir qué problema resolver primero o con qué formato presentar un trabajo"
    ],
    g: [
      "Leer una novela porque se quiere saber cómo acaba es un ejemplo de motivación ___.|intrínseca|extrínseca|introyectada",
      "Apoyar la autonomía se opone al estilo ___, no al orden.|controlador|directivo|estructurado",
      "La sensación de competencia nace de tareas situadas un poco ___ de lo que ya se domina.|por encima|por debajo|al margen",
      "«Os quedan diez minutos, ¿qué parte os falta?» es lenguaje que ___ en vez de presionar.|informa|evalúa|corrige",
      "Retirar las ayudas demasiado pronto deja a los ___ sin guía.|principiantes|expertos|mayores"
    ],
    tf: [
      "Apoyar la autonomía significa dejar hacer al alumnado sin intervenir.|F|No es dejar hacer: es ofrecer elección dentro de límites, dar razones y usar un lenguaje no controlador.",
      "«Esta semana, buscar tres fuentes y hacer el índice» funciona mejor como meta que «hacer un buen trabajo para junio».|V",
      "«Muy bien, así me gusta» es un ejemplo de lenguaje que apoya la autonomía.|F|Es lenguaje controlador. Apoya la autonomía señalar el proceso: «has comprobado cada paso, por eso te ha salido».",
      "La teoría de la autodeterminación propone tres necesidades: autonomía, competencia y relación.|V"
    ],
    q: [
      "Un profesor de ESO prepara él mismo una exposición pensando en voz alta, después da a los grupos un guion con plazos y al final solo el tema y una rúbrica. ¿Qué lógica sigue?|La retirada gradual de las ayudas|La enseñanza con mínima guía|El descubrimiento sin ninguna pauta|Es el andamiaje: la autonomía final resulta de una secuencia muy guiada al principio cuyas ayudas se retiran poco a poco.",
      "¿Qué frase de un docente apoya la autonomía?|«El resumen sirve para repasar, elegid el formato»|«Haced el resumen exactamente como os he dicho»|«Tenéis que terminar esto ya, sin más excusas»|Da razones y ofrece elección. Las otras dos imponen sin explicar y presionan.",
      "Una tarea muy por debajo de lo que el alumno ya domina tiende a…|aburrirle|desanimarle|motivarle|Una tarea demasiado fácil aburre y una imposible desanima. La competencia nace de tareas un poco por encima de lo dominado.",
      "¿Qué tres rasgos definen el estilo docente que apoya la autonomía?|Elección, razones y lenguaje no controlador|Libertad total, elogio y ausencia de normas|Premios, plazos y supervisión muy constante|Apoyar la autonomía no es dejar hacer: se ofrece elección dentro de límites, se dan razones y se informa en vez de presionar."
    ],
    inc: [
      "Sobre el trabajo autónomo|Con novatos conviene dar mínima guía desde el inicio|El feedback útil se centra en la tarea y en el proceso|Cada meta cumplida alimenta la autoeficacia|La enseñanza con mínima guía no funciona con novatos (Kirschner, Sweller y Clark, 2006): las ayudas se retiran poco a poco."
    ],
    seq: [
      "Hacia la exposición autónoma en el minicaso de ESO|El profesor la prepara pensando en voz alta>Los grupos siguen un guion con plazos intermedios>Los grupos se organizan solos con el tema y una rúbrica"
    ],
    cls: [
      "Lenguaje docente|Controlador: «Tenéis que terminar esto ya»; «Haced el resumen como os he dicho»; «Muy bien, así me gusta»|Apoya la autonomía: «¿Qué parte os falta?»; «Elegid si lo hacéis en esquema o en texto»; «Has comprobado cada paso»"
    ] },
  { t: "Clima de aula y aprendizaje socioemocional",
    tip: "El clima de aula es la calidad percibida de las relaciones y del ambiente de una clase. El marco CLASS de Pianta observa tres dominios: apoyo emocional, organización del aula y apoyo instruccional. El aprendizaje socioemocional enseña de forma explícita las cinco competencias CASEL, con efectos pequeños pero fiables. No debe confundirse con la inteligencia emocional, un constructo sobre diferencias individuales.",
    v: [
      "Clima de aula=Calidad percibida de las relaciones y del ambiente de una clase",
      "CLASS=Marco de Pianta para observar la interacción docente en tres dominios",
      "Apoyo emocional=Calidez, sensibilidad a las necesidades y respeto por los puntos de vista",
      "Apoyo instruccional=Preguntas que hacen pensar, feedback de calidad y uso rico del lenguaje",
      "Aprendizaje socioemocional=Enseñanza explícita de habilidades para regular emociones, relacionarse y decidir",
      "CASEL=Marco de referencia que distingue cinco competencias socioemocionales",
      "Autogestión=Competencia que se ve al respirar y retomar la tarea tras un enfado",
      "Inteligencia emocional=Constructo de Salovey y Mayer (1990) sobre diferencias individuales"
    ],
    g: [
      "Durlak et al. (2011) hallaron una ganancia de ___ puntos percentiles en rendimiento académico.|11|22|17",
      "Cipriano et al. (2023) reunieron 424 estudios de ___ países.|53|213|27",
      "Advertir que un compañero se ha quedado solo en el patio corresponde a la ___.|conciencia social|autoconciencia|autogestión",
      "En CLASS, la gestión de la conducta pertenece al dominio de ___.|organización del aula|apoyo emocional|apoyo instruccional",
      "Durlak et al. (2011) revisaron 213 programas ___, con más de 270.000 estudiantes.|universales|selectivos|indicados"
    ],
    tf: [
      "El aprendizaje socioemocional y la inteligencia emocional son dos nombres del mismo constructo.|F|El SEL es un enfoque educativo que enseña habilidades. La inteligencia emocional es un constructo sobre diferencias individuales.",
      "Según el marco CLASS, clima, gestión y enseñanza se observan en las mismas interacciones.|V",
      "Cipriano et al. (2023) hallaron un efecto del SEL sobre el rendimiento comparable al de enseñar los contenidos.|F|El efecto fue g de 0,11: pequeño pero fiable. El SEL complementa la enseñanza de contenidos, no la sustituye.",
      "El desgaste profesional del docente acaba notándose en el clima del grupo.|V"
    ],
    q: [
      "Una alumna se da cuenta de que está nerviosa antes de salir a la pizarra. ¿Qué competencia CASEL muestra?|Autoconciencia|Autogestión|Conciencia social|Reconocer el propio estado emocional es autoconciencia. Regularlo, como respirar y retomar la tarea, sería autogestión.",
      "¿Qué conclusión de consenso se extrae de los metaanálisis sobre aprendizaje socioemocional?|Efectos pequeños pero fiables|Efectos grandes pero inestables|Efectos nulos sobre las notas|Durlak et al. (2011) y Cipriano et al. (2023) coinciden en efectos modestos pero consistentes.",
      "Un observador valora si el docente hace preguntas que obligan a pensar y da feedback de calidad. ¿Qué dominio de CLASS evalúa?|Apoyo instruccional|Apoyo emocional|Organización del aula|El apoyo instruccional incluye preguntas que hacen pensar, feedback de calidad y uso rico del lenguaje.",
      "¿Por qué un clima negativo reduce la participación en clase?|Si equivocarse provoca burlas, pocos se arriesgan|Porque reduce el tiempo de instrucción directa|Porque impide aplicar la jerarquía de intervención|Un clima positivo facilita la participación. Donde el error se castiga con burlas, pocos se arriesgan a responder."
    ],
    inc: [
      "Sobre el aprendizaje socioemocional|Sustituye a la enseñanza de contenidos|Enseña habilidades de forma explícita|Su marco de referencia es el de CASEL|Que mejore algo las notas no significa que sustituya a la enseñanza de los contenidos: la complementa."
    ],
    seq: [],
    cls: [
      "Dominio del marco CLASS|Apoyo emocional: calidez; sensibilidad a las necesidades; respeto por los puntos de vista|Organización del aula: gestión de la conducta; aprovechamiento del tiempo|Apoyo instruccional: preguntas que hacen pensar; feedback de calidad; uso rico del lenguaje"
    ] }
] }
,
{ n: 14, t: "Relaciones que enseñan", cap: 5, pir: "media", mods: [
  { t: "Aprender entre iguales",
    tip: "El grupo-clase tiene una estructura formal y otra informal, que la sociometría permite conocer. Coie, Dodge y Coppotelli (1982) distinguieron cinco estatus, y el rechazado es el que más preocupa. Se aprende de los iguales por el conflicto sociocognitivo, la zona de desarrollo próximo y la tutoría entre iguales. Cooperar exige los cinco elementos de Johnson y Johnson, y Slavin subrayó las metas de grupo y la responsabilidad individual.",
    v: [
      "Estructura informal=Amistades, rechazos, subgrupos y líderes no oficiales del grupo-clase",
      "Sociometría=Preguntar a cada alumno con quién quiere trabajar o jugar y con quién no",
      "Alumno controvertido=Recibe muchas elecciones y muchos rechazos",
      "Alumno ignorado=Recibe pocas elecciones y pocos rechazos",
      "Conflicto sociocognitivo=Confrontación de puntos de vista entre iguales que obliga a reorganizar el pensamiento",
      "Interdependencia positiva=Nadie triunfa si el grupo no triunfa",
      "Aula puzle=Cada alumno domina una parte del tema y la enseña a su grupo (Aronson, 1971)",
      "Efecto polizón=Dejar que otros hagan el trabajo y beneficiarse de la nota común"
    ],
    g: [
      "Coie, Dodge y Coppotelli clasificaron al alumnado en ___ tipos según elecciones y rechazos.|cinco|cuatro|tres",
      "Doise, Mugny y Perret-Clermont estudiaron el conflicto sociocognitivo desde la escuela de ___.|Ginebra|Chicago|Harvard",
      "En una estructura de meta ___, lo que logra uno no afecta al resto.|individualista|competitiva|cooperativa",
      "En STAD, los equipos suman puntos según la ___ individual de cada miembro en una prueba.|mejora|nota|asistencia",
      "Esforzarse menos cuando el trabajo es colectivo se denomina holgazanería ___.|social|grupal|pasiva"
    ],
    tf: [
      "Juntar a cuatro alumnos en una mesa basta para que cooperen.|F|No basta: Johnson y Johnson señalaron cinco elementos necesarios, como la interdependencia positiva.",
      "En la tutoría entre iguales suelen aprender tanto quien enseña como quien aprende.|V",
      "Los alumnos ignorados son el grupo con más riesgo de convertirse en víctima de acoso.|F|Ese riesgo corresponde a los rechazados. En los ignorados conviene averiguar si están a gusto solos o intentan integrarse.",
      "La revisión de Kyndt et al. (2013) halló efectos positivos del aprendizaje cooperativo en el rendimiento y en las actitudes.|V"
    ],
    q: [
      "En un trabajo en grupo con una sola nota, dos alumnos dejan que los demás lo hagan todo. ¿Qué elemento falla sobre todo?|La responsabilidad individual|La interacción cara a cara|El procesamiento grupal|Es el efecto polizón, que aparece cuando no se pide cuentas a cada miembro de su parte y de lo aprendido.",
      "Una tutora de 5.º forma los equipos mirando solo la lista oficial y sienta juntos a dos alumnos que no se hablan. ¿Qué ha pasado por alto?|La estructura informal|La estructura formal|La estructura de meta|La estructura informal está hecha de amistades, rechazos y subgrupos, y la sociometría permite conocerla.",
      "¿Con qué fin creó Aronson el aula puzle en 1971?|Reducir la hostilidad entre grupos étnicos|Acelerar el ritmo de las clases de ciencias|Detectar a los alumnos rechazados del aula|Buscaba reducir la hostilidad tras la desegregación escolar: cada alumno enseña su parte, de modo que todos se necesitan.",
      "¿Qué dos claves subrayó Slavin para el aprendizaje cooperativo?|Metas de grupo y responsabilidad individual|Conflicto sociocognitivo y tutoría entre iguales|Interacción cara a cara y procesamiento grupal|Las técnicas STAD y TGT se apoyan en metas de grupo y en la responsabilidad individual de cada miembro."
    ],
    inc: [
      "Sobre el aprendizaje entre iguales|La estructura informal coincide siempre con la formal|Explicar a otro obliga a ordenar lo que se sabe|Un compañero más capaz puede actuar en la ZDP del otro|Los líderes y subgrupos informales no siempre coinciden con los oficiales, como el delegado o los equipos asignados."
    ],
    seq: [],
    cls: [
      "Estructura de meta (Deutsch)|Cooperativa: nadie triunfa si el grupo no triunfa; aula puzle|Competitiva: si uno gana, otros pierden|Individualista: lo que logra uno no afecta al resto"
    ] },
  { t: "Expectativas, liderazgo y vínculo con el docente",
    tip: "Rosenthal y Jacobson (1968) presentaron a un 20 % de alumnos elegidos al azar como a punto de «florecer», y estos ganaron más CI solo en 1.º y 2.º. Raudenbush (1984) halló un efecto medio pequeño, d de 0,11, que solo se apreciaba cuando el docente apenas conocía al alumnado. En el estudio de Lewin, Lippitt y White (1939), el estilo democrático favoreció la cohesión y la autonomía. La buena relación con el docente se asocia con la implicación y, a través de ella, con el rendimiento.",
    v: [
      "Efecto Pigmalión=Mejora del rendimiento inducida por las expectativas altas del docente",
      "Efecto Golem=Empeoramiento del rendimiento por expectativas bajas del docente",
      "Efecto Galatea=Las expectativas del propio alumno sobre sí mismo influyen en su rendimiento",
      "Efecto Hawthorne=La conducta cambia por saberse observado, no por expectativas ajenas",
      "Profecía autocumplida=Expectativa que acaba provocando su propio cumplimiento",
      "Jussim y Harber (2005)=Concluyeron que las profecías autocumplidas existen, pero son pequeñas",
      "Estilo democrático=Liderazgo con más cohesión y autonomía, en el que se trabaja aunque el líder salga",
      "Estilo autoritativo=Estilo docente cálido y exigente a la vez, por analogía con Baumrind"
    ],
    g: [
      "En el estudio de Rosenthal y Jacobson, los alumnos señalados se habían elegido ___.|al azar|por su CI|por sus notas",
      "Las mayores ganancias de CI de los alumnos señalados aparecieron solo en ___.|1.º y 2.º|5.º y 6.º|3.º y 4.º",
      "Según Raudenbush, el efecto era de d de ___ cuando docente y alumnado se conocían desde hacía dos semanas o menos.|0,23|0,11|0,41",
      "Con el estilo ___ aparecían más agresividad o apatía y dependencia del líder.|autocrático|democrático|laissez-faire",
      "Roorda et al. (2017) mostraron que la ___ hace de puente entre la buena relación y el rendimiento.|implicación|autoeficacia|autoestima"
    ],
    tf: [
      "Basta con que el profesor crea en sus alumnos para que su rendimiento mejore mucho, porque el efecto Pigmalión es enorme.|F|Raudenbush (1984) halló un efecto medio pequeño, d de 0,11, que solo se apreciaba cuando el docente apenas conocía al alumnado.",
      "Según Jussim y Harber (2005), las expectativas docentes suelen ser bastante precisas porque se basan en el rendimiento real.|V",
      "En el estudio de Lewin, Lippitt y White, el estilo laissez-faire produjo la mayor autonomía.|F|La mayor autonomía correspondió al democrático. Con el laissez-faire hubo menos productividad y más desorden.",
      "Según Roorda et al. (2011), la relación positiva con el docente se asocia más con la implicación que con el rendimiento.|V"
    ],
    q: [
      "Una alumna convencida de que se le dan bien las matemáticas rinde mejor en esa materia. ¿Qué efecto ilustra?|Galatea|Pigmalión|Hawthorne|Galatea es la expectativa del propio alumno sobre sí mismo. Pigmalión es la expectativa del docente.",
      "En una clase, el rendimiento sube en cuanto el grupo sabe que un investigador observa las sesiones, aunque nadie espera nada concreto de ellos. ¿Qué efecto es?|Hawthorne|Pigmalión|Golem|La conducta cambia por saberse observado, no por las expectativas de nadie. Confundirlo con Pigmalión es una trampa típica.",
      "¿Qué cuatro vías propuso Rosenthal para la transmisión de las expectativas?|Clima, input, output y feedback|Calidez, normas, notas y elogio|Clima, refuerzo, castigo y nota|Más calidez, más contenido y más exigente, más oportunidades de responder y feedback más detallado.",
      "¿Qué valor se atribuye hoy al estudio de Lewin, Lippitt y White (1939)?|Histórico e ilustrativo|Prueba cuantitativa sólida|Metaanalítico y concluyente|Era un estudio exploratorio con muestras muy pequeñas: su valor es histórico e ilustrativo, no una prueba cuantitativa."
    ],
    inc: [
      "Sobre el efecto Pigmalión|Sus efectos se mantienen intactos con el tiempo|Recibió críticas de medida desde el principio|Es mayor en grupos estigmatizados|Según Jussim y Harber (2005), las profecías autocumplidas existen, pero son pequeñas y pueden disiparse con el tiempo."
    ],
    seq: [],
    cls: [
      "Estilo de liderazgo (Lewin, Lippitt y White)|Autocrático: agresividad o apatía; dependencia del líder; solo se trabaja en su presencia|Democrático: cohesión; autonomía; se sigue trabajando si el líder sale|Laissez-faire: menos productividad; más desorden"
    ] },
  { t: "Qué debe saber hacer un docente",
    tip: "La asimetría del aula hace que gestos mínimos del docente tengan mucho peso. Shulman (1986, 1987) distinguió conocimiento del contenido, pedagógico general y didáctico del contenido (PCK), su aportación más influyente. Perrenoud (2004) describió diez nuevas competencias, y la investigación asocia más aprendizaje con claridad, feedback, gestión y relación. El burnout, según Maslach, tiene tres dimensiones y deteriora el clima.",
    v: [
      "Asimetría del aula=Uno de los interlocutores reparte los turnos de palabra y pone la nota",
      "Conocimiento del contenido=Saber la materia",
      "Conocimiento pedagógico general=Saber gestionar un aula, planificar o evaluar, sea cual sea la materia",
      "PCK=Saber cómo se enseña una materia concreta y qué errores suscita",
      "Perrenoud (2004)=Describió diez nuevas competencias para enseñar",
      "Agotamiento emocional=Dimensión del burnout que consiste en no poder más",
      "Despersonalización=Trato frío o distante hacia el alumnado",
      "Baja realización personal=Sensación de no lograr nada con el propio trabajo"
    ],
    g: [
      "La aportación más influyente de Shulman es el conocimiento ___ del contenido.|didáctico|pedagógico|disciplinar",
      "En España, el Marco de referencia de la competencia digital docente es de ___.|2022|2004|2018",
      "Shulman propuso que enseñar bien requiere ___ tipos de conocimiento.|tres|cuatro|diez",
      "Referirse al grupo como «los de 2.º B, que no tienen remedio» refleja ___.|despersonalización|baja realización|agotamiento emocional",
      "Lo que distingue a los docentes que mejoran con los años es ___ la propia práctica con datos.|revisar|repetir|justificar"
    ],
    tf: [
      "Un matemático experto en fracciones domina por ello el conocimiento didáctico del contenido.|F|Puede no saber que muchos niños creen que un tercio es mayor que un medio, ni cómo deshacer esa idea: eso es PCK.",
      "El bienestar del profesorado es una condición de la enseñanza, no un asunto solo personal.|V",
      "En el modelo de Maslach, el burnout consta de agotamiento emocional, despersonalización y ansiedad.|F|La tercera dimensión es la baja realización personal, la sensación de no lograr nada.",
      "La investigación sobre eficacia docente asocia la claridad con más aprendizaje.|V"
    ],
    q: [
      "Una maestra sabe que muchos niños creen que un tercio es mayor que un medio y lleva una tarta dibujada para mostrarlo. ¿Qué conocimiento muestra?|Didáctico del contenido|Pedagógico general|Del contenido matemático|Saber qué errores comete el alumnado y cómo deshacerlos es el PCK, la aportación más influyente de Shulman.",
      "Una tutora empieza a tratar a su grupo de forma fría y distante. ¿Qué dimensión del burnout refleja?|Despersonalización|Agotamiento emocional|Baja realización personal|La despersonalización es el trato frío o distante. Sin apoyo el patrón tiende a agravarse, y con apoyo puede revertirse.",
      "¿Qué rasgo de la clase explica que el tiempo que se espera antes de dar la respuesta tenga tanto peso?|La asimetría entre docente y alumnado|El número de alumnos de cada grupo|La disposición del mobiliario del aula|Nadie elige a sus interlocutores, y uno reparte los turnos y pone la nota, así que gestos mínimos pesan mucho.",
      "Un profesor comprueba qué preguntas del examen falló la mayoría y qué explicó mal. ¿Qué hábito muestra?|Revisar la propia práctica con datos|Acumular experiencia docente año tras año|Aplicar una evaluación sumativa final|Es lo que distingue a los docentes que mejoran con los años de los que solo acumulan experiencia."
    ],
    inc: [
      "Sobre las competencias del docente|Perrenoud describió cinco competencias básicas|Shulman distinguió tres tipos de conocimiento|El burnout deteriora el clima de aula|Perrenoud (2004) describió diez nuevas competencias para enseñar, que amplían el papel del docente más allá de la explicación."
    ],
    seq: [],
    cls: [
      "Dimensión del burnout (Maslach)|Agotamiento emocional: no poder más; llegar exhausta|Despersonalización: trato frío o distante; «no tienen remedio»|Baja realización personal: sensación de no lograr nada; pensar que nada sirve"
    ] },
  { t: "Evaluación formativa y feedback",
    tip: "Scriven (1967) distinguió la evaluación sumativa, que certifica al final, de la formativa, que ajusta durante el proceso. Black y Wiliam (1998) la consideraron una de las prácticas con más potencial, y Wiliam la concretó en cinco estrategias. Kluger y DeNisi (1996) hallaron un efecto medio de d de 0,41, pero más del 38 % de los efectos fue negativo. Según Hattie y Timperley (2007), el feedback responde a tres preguntas y se dirige a cuatro niveles, y el del yo es el menos eficaz.",
    v: [
      "Evaluación sumativa=Balance al final de un periodo para certificar lo aprendido",
      "Evaluación formativa=Valoración durante el proceso para ajustar la enseñanza y el aprendizaje",
      "Scriven (1967)=Distinguió las dos funciones de la evaluación",
      "Coevaluación=Forma de activar a los compañeros como recurso",
      "Kluger y DeNisi (1996)=Metaanálisis de 607 efectos del feedback, más del 38 % negativos",
      "Feedback de proceso=«Haz un esquema antes de escribir para ordenar los argumentos»",
      "Feedback de autorregulación=«Relee tu texto con la rúbrica: ¿qué criterio crees que cumples menos?»",
      "Feedback al yo=Nivel menos eficaz, porque no informa de qué hacer"
    ],
    g: [
      "El metaanálisis de Kluger y DeNisi encontró un efecto medio del feedback de d de ___.|0,41|0,11|0,23",
      "En Kluger y DeNisi, el feedback empeoraba el rendimiento sobre todo cuando llevaba la atención a la ___.|persona|tarea|meta",
      "La pregunta «¿adónde voy?» del modelo de Hattie y Timperley se refiere a la ___.|meta|tarea|nota",
      "El feedback sobre la ___ es útil cuando hay errores concretos que corregir.|tarea|persona|meta",
      "Un examen es ___ si sirve para replantear el tema y reforzar lo que falla.|formativo|sumativo|final"
    ],
    tf: [
      "El feedback siempre mejora el rendimiento, aunque a veces lo haga poco.|F|Más del 38 % de los efectos fue negativo (Kluger y DeNisi, 1996), sobre todo cuando se centraba en la persona.",
      "Un mismo examen puede cumplir una función sumativa o formativa según lo que se haga con sus resultados.|V",
      "El feedback de proceso y el de autorregulación ayudan más a transferir lo aprendido a tareas nuevas.|V",
      "Según Hattie y Timperley, el feedback dirigido al yo es el más motivador y, por ello, el más eficaz.|F|Es el menos eficaz, porque no informa de qué hacer. El elogio de la inteligencia puede llevar a evitar retos."
    ],
    q: [
      "Un profesor de Física plantea tres preguntas rápidas en tarjetas, ve que la mitad confunde masa y peso y cambia la explicación prevista. ¿Qué ha hecho?|Evaluación formativa|Evaluación sumativa|Feedback dirigido al yo|Ha usado la evaluación para decidir qué enseñar, no para poner una nota.",
      "«¡Qué bien escribes, eres un crack!» es feedback de nivel…|yo|tarea|proceso|Habla de la persona y no informa de qué hacer, por lo que es el nivel menos eficaz.",
      "Un docente devuelve primero solo los comentarios y, cuando el alumno ha corregido su trabajo, la calificación. ¿Qué idea aplica?|Una nota sola no informa del camino|El feedback debe dirigirse al yo|La nota debe llegar siempre primero|Una nota informa del resultado, pero no del camino. El feedback debe ser específico y dejar algo que hacer.",
      "¿Qué estrategia de Wiliam se aplica al pedir a los alumnos que evalúen el trabajo de un compañero?|Activar a los compañeros como recurso|Activar al alumno como dueño de su aprendizaje|Clarificar las metas y los criterios|La coevaluación activa a los compañeros. La autoevaluación es la vía para activar al alumno como dueño de su aprendizaje."
    ],
    inc: [
      "Sobre el modelo de Hattie y Timperley|El feedback se dirige a tres niveles|El feedback responde a tres preguntas|El nivel del yo es el menos eficaz|Son cuatro niveles: tarea, proceso, autorregulación y yo. Las preguntas sí son tres: adónde voy, cómo voy y qué sigue."
    ],
    seq: [
      "Preguntas del feedback eficaz (Hattie y Timperley)|¿Adónde voy? (la meta)>¿Cómo voy? (el progreso)>¿Qué sigue? (el paso siguiente)"
    ],
    cls: [
      "Función de la evaluación (Scriven)|Sumativa: balance al final; certificar lo aprendido; solo poner la nota|Formativa: durante el proceso; ajustar la enseñanza; replantear el tema y reforzar lo que falla"
    ] }
] }
,
{ n: 15, t: "Prevención y respuesta a las dificultades", cap: 6, pir: "alta", mods: [
  { t: "El psicólogo educativo en España",
    tip: "El COP define al psicólogo de la educación por su intervención en cualquier situación educativa para desarrollar capacidades, no solo para tratar problemas. Sus funciones se ordenan por destinatarios y Garaigordobil las resume en evaluar, asesorar e intervenir. En la red pública trabaja como orientador, en el departamento de orientación o en los EOEP. Su herramienta central es la evaluación psicopedagógica, que no busca etiquetar, sino decidir qué apoyo se necesita.",
    v: [
      "Psicólogo de la educación=Profesional que interviene en situaciones educativas desarrollando capacidades (COP)",
      "Modelo clínico=Atención individual al caso, el más tradicional y de menor alcance",
      "Modelo de programas=Actuaciones planificadas para grupos o para todo el centro",
      "Modelo de consulta=El psicólogo trabaja con el docente, que es quien interviene a diario",
      "EOEP=Equipos que atienden la orientación de varios colegios de infantil y primaria",
      "Orientación Educativa=Especialidad de profesorado de secundaria por la que se accede a la plaza",
      "Evaluación psicopedagógica=Análisis del alumno y sus contextos para identificar necesidades y decidir apoyos",
      "Dictamen de escolarización=Documento que, cuando procede, sigue al informe psicopedagógico"
    ],
    g: [
      "La ___ (1970) crea los primeros servicios de orientación.|LGE|LOGSE|LOE",
      "La LOE (2006) amplía la categoría a necesidades ___ de apoyo educativo.|específicas|especiales|básicas",
      "La LOPIVI crea en los centros el coordinador de ___ y protección.|bienestar|convivencia|orientación",
      "Según Garaigordobil, la intervención puede ser correctiva, preventiva u ___.|optimizadora|orientadora|integradora",
      "En secundaria, el psicólogo de la red pública trabaja en el ___ de orientación del instituto.|departamento|equipo|servicio"
    ],
    tf: [
      "La LOGSE (1990) introdujo el concepto de necesidades específicas de apoyo educativo.|F|La LOGSE introdujo las necesidades educativas especiales. La LOE (2006) amplió la categoría a NEAE.",
      "La LOMCE (2013) menciona expresamente el TDAH.|V",
      "El COP considera suficiente la figura actual del orientador docente.|F|El COP reivindica una figura específica de psicólogo educativo, distinta del orientador docente. Es un punto en debate.",
      "Cada comunidad autónoma regula su procedimiento de evaluación psicopedagógica.|V"
    ],
    q: [
      "Una orientadora se reúne cada semana con un tutor para diseñar cómo atender a un alumno, y es el tutor quien aplica las medidas en clase. ¿Qué modelo sigue?|De consulta|Clínico|De programas|En el modelo de consulta o asesoramiento colaborativo, el psicólogo trabaja con el docente, que es quien interviene a diario.",
      "¿Cuál es la finalidad de la evaluación psicopedagógica?|Decidir qué apoyo se necesita|Etiquetar el trastorno del alumno|Emitir un diagnóstico clínico|No se evalúa para etiquetar, sino para identificar necesidades y fundamentar decisiones educativas.",
      "¿Qué ley hace de la inclusión un principio y amplía de nuevo las NEAE?|LOMLOE|LOMCE|LOE|La LOMLOE (2020). La LOE (2006) creó las NEAE, y la LOMCE (2013) mencionó expresamente el TDAH.",
      "Un psicólogo de un EOEP atiende a varios centros. ¿Con qué etapas trabaja?|Infantil y primaria|Secundaria y bachillerato|Formación profesional|Los EOEP atienden a varios colegios de infantil y primaria. En secundaria se trabaja en el departamento de orientación."
    ],
    inc: [
      "Sobre el psicólogo educativo|Su campo se limita a la escuela|Su meta es desarrollar capacidades|Asesora también a las familias|La definición del COP abarca cualquier situación educativa, no solo la escuela."
    ],
    seq: [
      "Leyes españolas y orientación|LGE: primeros servicios de orientación>LOGSE: necesidades educativas especiales>LOE: NEAE>LOMCE: mención expresa del TDAH>LOMLOE: inclusión como principio>LOPIVI: coordinador de bienestar y protección"
    ],
    cls: [
      "Modelo de intervención|Clínico: atención individual al caso; el más tradicional|De programas: técnicas de estudio para un grupo; convivencia en todo el centro|De consulta: trabajo con el docente; el docente interviene a diario"
    ] },
  { t: "Prevenir antes de derivar",
    tip: "Caplan (1964) distinguió prevención primaria, que evita que el problema aparezca, secundaria, que lo detecta e interviene pronto, y terciaria, que reduce secuelas. Gordon (1983) la clasificó por destinatarios en universal, selectiva e indicada. La respuesta a la intervención organiza el apoyo en tres niveles de intensidad creciente y sustituye la lógica de «esperar al fracaso». Las proporciones del 80 %, 15 % y 5 % son orientativas.",
    v: [
      "Prevención primaria=Evitar que el problema aparezca, con acciones dirigidas a toda la población",
      "Prevención secundaria=Detectar e intervenir pronto, cuando el problema empieza a manifestarse",
      "Prevención terciaria=Reducir secuelas y recaídas cuando el problema ya está establecido",
      "Prevención selectiva=Dirigida a grupos con factores de riesgo (Gordon, 1983)",
      "Prevención indicada=Dirigida a quienes ya muestran señales",
      "Respuesta a la intervención=Modelo de apoyo en tres niveles con cribado universal y seguimiento del progreso",
      "Esperar al fracaso=Dar apoyo solo cuando el retraso es grande, propio del criterio de discrepancia",
      "MTSS=Sistemas de apoyo multinivel en los que hoy se integra la RtI"
    ],
    g: [
      "Un programa de convivencia para todo el centro es prevención ___.|primaria|secundaria|terciaria",
      "Gordon (1983) clasificó la prevención según ___ se dirige.|a quién|cuándo|por qué",
      "En el nivel 2 de la RtI, el apoyo adicional se da en ___.|pequeño grupo|sesión individual|gran grupo",
      "Las proporciones del 80 %, 15 % y 5 % del alumnado son ___.|orientativas|obligatorias|fijas",
      "En la RtI, la ___ a una ayuda de calidad es en sí misma informativa.|respuesta|resistencia|asistencia"
    ],
    tf: [
      "Un cribado de lectura en primero de primaria es un ejemplo de prevención terciaria.|F|Es prevención secundaria: detección e intervención tempranas. La terciaria reduce las secuelas de un problema establecido.",
      "En la RtI, la ayuda empieza en cuanto se detecta el riesgo.|V",
      "Las proporciones del 80 %, 15 % y 5 % describen un reparto fijo que el centro debe cumplir.|F|Son orientativas: describen lo que se espera en un centro que funciona bien, no un reparto fijo.",
      "Ante factores de riesgo como la pobreza, la escuela debe centrarse en la enseñanza, el clima del aula y la relación con la familia.|V"
    ],
    q: [
      "Seis niños de primero quedan en octubre por debajo del punto de corte y reciben veinte minutos diarios de práctica en pequeño grupo. En febrero, dos no han mejorado. ¿Qué procede?|Apoyo individual y evaluación psicopedagógica|Esperar a que acumulen más retraso en lectura|Mantenerlos en el mismo nivel de apoyo|Quien no mejora con un buen apoyo necesita algo más intenso: pasa al nivel 3 y el orientador inicia su evaluación.",
      "Según Gordon, ¿qué prevención se dirige a alumnos con factores de riesgo que aún no muestran señales?|Selectiva|Indicada|Universal|La selectiva se dirige a grupos con factores de riesgo. La indicada, a quienes ya muestran señales.",
      "¿Cuál es la ventaja principal de la RtI frente al criterio de discrepancia entre CI y rendimiento?|Evita esperar al fracaso|Reduce la necesidad de cribados|Sustituye a la evaluación psicopedagógica|Con la discrepancia, el niño debía acumular retraso antes de recibir ayuda. En la RtI, la ayuda empieza al detectar el riesgo.",
      "Según Caplan, un programa para reducir las recaídas de alumnos con un problema de conducta ya establecido es prevención…|terciaria|secundaria|primaria|Reducir secuelas y recaídas de un problema establecido es prevención terciaria. Confundirla con la secundaria es la trampa típica."
    ],
    inc: [
      "Sobre la respuesta a la intervención|El nivel 1 se dirige solo al alumnado en riesgo|El nivel 2 incluye un seguimiento frecuente del progreso|El nivel 3 es una intervención intensiva e individualizada|El nivel 1 es para todos: enseñanza de calidad basada en la evidencia y cribado universal."
    ],
    seq: [
      "Niveles de la respuesta a la intervención|Enseñanza de calidad y cribado universal para todos>Apoyo en pequeño grupo con seguimiento del progreso>Intervención intensiva e individualizada>Evaluación psicopedagógica si procede"
    ],
    cls: [
      "Nivel de prevención (Caplan)|Primaria: convivencia para todo el centro; evitar que el problema aparezca|Secundaria: cribado de lectura en primero; detección temprana|Terciaria: reducir secuelas; evitar recaídas"
    ] },
  { t: "Dificultades de aprendizaje y TDAH",
    tip: "El trastorno específico del aprendizaje y el TDAH son trastornos del neurodesarrollo de diagnóstico clínico, y al orientador le corresponde detectar, evaluar necesidades y coordinar. El primero exige dificultades que persisten al menos seis meses pese a la intervención, de inicio escolar, y ya no requiere discrepancia entre CI y rendimiento. La dislexia se explica por un déficit fonológico. El TDAH exige síntomas antes de los 12 años y en dos o más contextos.",
    v: [
      "Dislexia=Término admitido para el trastorno específico del aprendizaje de la lectura",
      "Discalculia=Dificultad específica que afecta a las matemáticas",
      "Déficit fonológico=Dificultad para representar y manipular los sonidos del habla",
      "6A03=Código CIE-11 del trastorno del desarrollo del aprendizaje",
      "Diagnóstico clínico=Lo realiza un profesional sanitario con el DSM-5-TR o la CIE-11",
      "Presentación combinada=Forma del TDAH con inatención e hiperactividad-impulsividad",
      "Tarjeta de seguimiento diario=Medida sobre las consecuencias que conecta casa y escuela",
      "Ajustes de evaluación=Más tiempo o examen oral para que la dificultad no impida demostrar lo aprendido"
    ],
    g: [
      "El DSM-5-TR estima una prevalencia del trastorno específico del aprendizaje del ___ en edad escolar.|5–15 %|1–3 %|20–25 %",
      "En el TDAH se exigen seis o más síntomas de una dimensión, o ___ desde los 17 años.|cinco|cuatro|siete",
      "Sentar al alumno con TDAH cerca del docente y lejos de distractores es una medida sobre los ___.|antecedentes|consecuentes|hábitos",
      "La intervención eficaz en dislexia es la instrucción explícita en conciencia fonológica y ___.|decodificación|percepción visual|coordinación motora",
      "La prevalencia infantil del TDAH ronda aproximadamente el ___.|5 %|15 %|1 %"
    ],
    tf: [
      "El DSM-5-TR exige una discrepancia entre CI y rendimiento para diagnosticar un trastorno específico del aprendizaje.|F|Ya no se exige: es uno de los cambios importantes respecto a los criterios anteriores.",
      "Para el TDAH, algunos síntomas deben estar presentes antes de los 12 años.|V",
      "Las lentes de colores son un apoyo con evidencia para la dislexia.|F|La dislexia se explica por un déficit fonológico. Las lentes de colores y el entrenamiento perceptivo-motor carecen de evidencia.",
      "Las dificultades del trastorno específico del aprendizaje pueden no hacerse evidentes hasta que las exigencias superan la capacidad del alumno.|V"
    ],
    q: [
      "Un alumno de 9 años muestra inatención en clase, pero en casa y en otras actividades se concentra sin problemas. ¿Qué criterio del TDAH no cumple?|Síntomas en dos o más contextos|Síntomas antes de los 12 años|Duración de al menos seis meses|El DSM-5-TR exige que el patrón se manifieste en dos o más contextos, como casa y colegio.",
      "Una alumna de 8 años con dificultades lectoras lleva tres meses de apoyo sin mejorar. ¿Se cumple ya el criterio temporal del trastorno específico del aprendizaje?|No, se exigen al menos seis meses|Sí, si su CI supera su rendimiento|Sí, basta un trimestre sin mejoras|Las dificultades deben mantenerse al menos seis meses pese a la intervención, y ya no se exige discrepancia CI-rendimiento.",
      "¿Qué corresponde al orientador ante un posible TDAH?|Detectar, evaluar necesidades y coordinar|Emitir el diagnóstico con el DSM-5-TR|Prescribir el tratamiento farmacológico|El diagnóstico es clínico y lo hace un profesional sanitario. La escuela detecta, evalúa necesidades y coordina con familia y sanidad.",
      "Un alumno con TDAH pierde a menudo los deberes. ¿Qué medida es más adecuada?|Una agenda revisada a diario|Un sermón sobre responsabilidad|Más deberes para crear hábito|No necesita sermones, sino una agenda revisada a diario y tareas partidas en pasos."
    ],
    inc: [
      "Sobre el trastorno específico del aprendizaje|Puede deberse a falta de instrucción adecuada|Se gradúa como leve, moderado o grave|Las dificultades empiezan en la edad escolar|No debe explicarse mejor por falta de instrucción, discapacidad intelectual, déficits sensoriales u otras causas."
    ],
    seq: [],
    cls: [
      "Frente de intervención en el TDAH|Antecedentes: sentarlo cerca del docente; tareas fragmentadas; instrucciones de una en una|Consecuencias: refuerzo inmediato y frecuente; tarjeta de seguimiento diario|Habilidades: agenda; listas de comprobación; gestión de materiales"
    ] },
  { t: "Problemas de conducta y acoso escolar",
    tip: "Ante un problema de conducta, primero se define en términos observables y se cuantifica. El análisis funcional estudia la secuencia A-B-C para saber para qué sirve la conducta: atención, escape, algo tangible o estimulación sensorial. El plan de apoyo enseña una conducta alternativa con la misma función. Olweus definió el acoso por intencionalidad, repetición y desequilibrio de poder, y KiVa actúa sobre los papeles del grupo. Los programas reducen la perpetración en torno a un 19–20 %.",
    v: [
      "Análisis funcional=Estudio de antecedentes y consecuencias para saber para qué sirve una conducta",
      "Secuencia A-B-C=Antecedentes, conducta y consecuencias de cada episodio",
      "Función de escape=La conducta sirve para librarse de una tarea difícil o aburrida",
      "Plan de apoyo conductual=Cambiar antecedentes, dejar de reforzar y enseñar una alternativa",
      "PBIS=Apoyo conductual positivo organizado en tres niveles a escala de centro",
      "Acoso escolar=Agresión intencional y repetida con desequilibrio de poder (Olweus)",
      "KiVa=Programa finlandés de Salmivalli que pone el foco en el grupo",
      "Defensores=Papel de quienes se ponen del lado de la víctima"
    ],
    g: [
      "«Se levanta de la silla sin permiso unas ocho veces por sesión» define la conducta en términos ___.|observables|funcionales|clínicos",
      "Si los compañeros se ríen siempre que interrumpe y la conducta aparece en cualquier tarea, su función probable es la ___.|atención|evitación|estimulación",
      "El programa OBPP de Olweus se creó en ___.|Noruega|Finlandia|Suecia",
      "Según Gaffney, Ttofi y Farrington (2019), los programas reducen la victimización en torno a un ___.|15–16 %|19–20 %|9–15 %",
      "Una pelea ___ entre dos alumnos no es acoso.|puntual|repetida|habitual"
    ],
    tf: [
      "La pregunta clave del análisis funcional es por qué el alumno «es así».|F|La pregunta clave es para qué le sirve la conducta, a partir de sus antecedentes y consecuencias.",
      "Reducir una conducta sin enseñar qué hacer en su lugar rara vez da resultados duraderos.|V",
      "El programa KiVa se centra sobre todo en sancionar con dureza al agresor.|F|Pone el foco en el grupo: si los espectadores dejan de reír y defienden, el agresor pierde su recompensa social.",
      "La LOPIVI asigna al coordinador de bienestar y protección un papel central en la prevención y detección del acoso.|V"
    ],
    q: [
      "Lucas hace ruidos casi solo durante los dictados, la tarea que peor se le da, y cada vez la maestra lo manda al pasillo. ¿Qué función tiene probablemente su conducta?|Escape de la tarea|Atención del docente|Estimulación sensorial|Salir al pasillo retira el dictado y refuerza negativamente la conducta, que aparece casi solo en esa tarea.",
      "En el plan de apoyo para Lucas, ¿qué conducta alternativa conviene enseñarle?|Pedir una pausa con una tarjeta|Copiar el dictado en el pasillo|Quedarse sin recreo cada vez|La alternativa debe cumplir la misma función, el escape, de una forma adecuada.",
      "¿Qué tres rasgos caracterizan el acoso escolar según Olweus?|Intencionalidad, repetición y desequilibrio de poder|Agresión física, difusión pública y varios agresores|Intencionalidad, gravedad y lesiones físicas visibles|Por eso una pelea puntual no es acoso: falta la repetición y, a menudo, el desequilibrio de poder.",
      "¿Cuánto reducen la perpetración los programas contra el acoso según Gaffney, Ttofi y Farrington (2019)?|En torno a un 19–20 %|En torno a un 15–16 %|En torno a un 50 %|Con 100 evaluaciones, la perpetración baja en torno a un 19–20 % y la victimización, en torno a un 15–16 %."
    ],
    inc: [
      "Sobre el plan de apoyo conductual|Con los mayores se usan solo técnicas aplicadas por adultos|Si el problema aparece en casa, la familia aplica las mismas pautas|El alumno debe conocer qué consecuencias tendrá cada conducta|Con los mayores se añaden estrategias cognitivas, como las autoinstrucciones, y se les implica en el plan."
    ],
    seq: [
      "Pasos ante un problema de conducta|Definir la conducta en términos observables>Cuantificar frecuencia, intensidad y duración>Registrar antecedentes y consecuencias>Formular la hipótesis sobre su función>Diseñar el plan de apoyo conductual"
    ],
    cls: [
      "Programa contra el acoso|OBPP: Olweus; Noruega; actúa sobre todo el centro|KiVa: Salmivalli; Finlandia; foco en los papeles del grupo"
    ] }
] },
{ n: 16, t: "Inclusión y pedagogías alternativas", cap: 6, pir: "baja", mods: [
  { t: "De la integración a la escuela inclusiva",
    tip: "La atención a la diversidad ha pasado de la segregación a la integración, en la que se adapta el alumno, y a la inclusión, en la que la escuela elimina sus barreras. El Informe Warnock (1978) introdujo las necesidades educativas especiales, y la Declaración de Salamanca (1994) defendió que la escuela ordinaria acoja a todos. Ainscow resume la meta en presencia, participación y progreso. El DUA planifica para la variedad desde el principio, aunque su evidencia causal es todavía poca.",
    v: [
      "Segregación=Modelo en el que cada déficit requiere una escuela especial",
      "Integración=El alumno se incorpora a la escuela ordinaria y recibe apoyos para adaptarse",
      "Inclusión=La escuela cambia y elimina barreras para que todos aprendan y participen",
      "Informe Warnock=Documento británico de 1978 que introdujo las necesidades educativas especiales",
      "Declaración de Salamanca=Texto de la UNESCO (1994) que pide que la escuela ordinaria acoja a todos",
      "Index for Inclusion=Guía de Booth y Ainscow (2000) para revisar culturas, políticas y prácticas",
      "Presencia, participación y progreso=Las tres palabras con que Ainscow resume la meta inclusiva",
      "DUA=Planificar desde el principio para la variedad del alumnado en lugar de adaptar después"
    ],
    g: [
      "La Convención de la ONU de 2006 reconoce el derecho a una educación inclusiva en su artículo ___.|24|12|9",
      "El Index for Inclusion ayuda a identificar las ___ para el aprendizaje y la participación.|barreras|ayudas|metas",
      "El DUA fue desarrollado por el ___ (Rose y Meyer).|CAST|COP|CASEL",
      "Las múltiples formas de ___ responden al «qué» del aprendizaje.|representación|implicación|expresión",
      "La LOMLOE añadió a las NEAE situaciones como la vulnerabilidad ___.|socioeducativa|económica|familiar"
    ],
    tf: [
      "En la integración es la escuela la que cambia para eliminar sus propias barreras.|F|Eso define la inclusión. En la integración es el alumno quien se adapta, con apoyos.",
      "Un alumno que está en el aula pero pasa la mañana coloreando aparte cumple la presencia, pero falla en participación y progreso.|V",
      "Hay una sólida evidencia causal de que el DUA mejora el aprendizaje.|F|Funciona como marco inspirador de la planificación, pero su evidencia causal es todavía poca y heterogénea.",
      "La LOGSE (1990) adoptó en España la noción de necesidades educativas especiales.|V"
    ],
    q: [
      "Un centro, en lugar de preparar actividades aparte para un alumno con baja visión, revisa qué barreras de su aula le impiden aprender y participar. ¿Qué modelo aplica?|Inclusión|Integración|Segregación|En la inclusión, la pregunta es qué barreras del centro impiden aprender. En la integración se adapta el alumno.",
      "Una profesora presenta cada tema con texto, audio e imágenes. ¿Qué principio del DUA aplica?|Múltiples formas de representación|Múltiples formas de implicación|Múltiples formas de acción y expresión|La representación es el «qué»: texto, audio, imagen o manipulación. La implicación es el porqué, y la acción y expresión, el cómo.",
      "¿Qué hito sustituyó las categorías de deficiencia por las necesidades de apoyo del alumno?|El Informe Warnock (1978)|La Declaración de Salamanca (1994)|La Convención de la ONU (2006)|Para Warnock, lo relevante no es la etiqueta clínica, sino los apoyos que el alumno necesita. La LOGSE adoptó esa noción.",
      "¿Qué ilustra la metáfora de la rampa en el DUA?|Lo pensado para unos sirve también a otros|Que hay que adaptar después a cada alumno|Que la evidencia del DUA es concluyente|Pensada para la silla de ruedas, la rampa sirve también a quien lleva un carrito: se planifica para todos desde el principio."
    ],
    inc: [
      "Sobre las NEAE en la legislación española|La LOMLOE eliminó la categoría de NEAE|La LOE incluyó las altas capacidades|La LOMCE mencionó además el TDAH|La LOMLOE no la eliminó: hizo de la inclusión un principio y amplió de nuevo las NEAE."
    ],
    seq: [
      "Hitos internacionales de la inclusión|Informe Warnock>Declaración de Salamanca>Index for Inclusion>Convención de la ONU sobre discapacidad"
    ],
    cls: [
      "Modelo de atención a la diversidad|Segregación: centros separados; una escuela especial para cada déficit|Integración: el alumno se adapta; salidas a apoyo|Inclusión: la escuela cambia; aula diseñada para la diversidad"
    ] },
  { t: "Montessori",
    tip: "Maria Montessori, médica, abrió la primera Casa dei Bambini en Roma en 1907. Su método se basa en el ambiente preparado, materiales autocorrectivos con control del error, libre elección dentro de límites, aulas de edades mezcladas y el adulto como guía. Es la pedagogía alternativa mejor estudiada: Randolph et al. (2023) hallaron efectos positivos, mayores en infantil, primaria y centros privados, lo que obliga a la prudencia. La conclusión es de efectos de pequeños a moderados.",
    v: [
      "Casa dei Bambini=Primera escuela de Montessori, abierta en Roma en 1907",
      "Ambiente preparado=Aula ordenada, a medida del niño y con cada material en su sitio",
      "Control del error=El propio material muestra al niño si se ha equivocado",
      "Periodos sensibles=Etapas de especial receptividad a ciertos aprendizajes, como el orden o el lenguaje",
      "Aulas multiedad=Grupos en tramos de unos tres años donde los mayores ayudan a los pequeños",
      "Perlas doradas=Material para manipular unidades, decenas y centenas antes de usar símbolos",
      "Randolph et al. (2023)=Revisión de 32 estudios con efectos positivos frente a la enseñanza tradicional",
      "Lillard et al. (2017)=Estudio por sorteo de plazas en dos escuelas públicas de Estados Unidos"
    ],
    g: [
      "Randolph et al. (2023) hallaron un efecto de g de ___ en resultados académicos.|0,24|0,33|0,11",
      "En resultados no académicos, el efecto de Montessori fue de g de ___.|0,33|0,24|0,41",
      "Lillard et al. (2017) compararon a 70 niños de 3 a 6 años que obtuvieron plaza con ___ que no la obtuvieron.|71|61|81",
      "Maria Montessori era de formación ___.|médica|pedagógica|psicológica",
      "La progresión de las perlas doradas recuerda la representación enactiva, icónica y simbólica de ___.|Bruner|Piaget|Vygotsky"
    ],
    tf: [
      "Que los efectos de Montessori sean mayores en centros privados obliga a la prudencia, porque las familias que los eligen pueden diferir.|V",
      "En el método Montessori, el niño depende del adulto para saber si ha hecho bien la tarea.|F|Los materiales son autocorrectivos: el control del error permite al niño detectarlo sin el adulto.",
      "Montessori es la pedagogía alternativa mejor estudiada.|V",
      "El método Montessori usa notas y premios para mantener la motivación.|F|Uno de sus rasgos es precisamente la ausencia de notas y de premios."
    ],
    q: [
      "Un niño encaja piezas en un tablero y, al sobrarle una, ve por sí mismo que se ha equivocado sin que intervenga la maestra. ¿Qué rasgo Montessori ilustra?|Control del error|Ambiente preparado|Periodo sensible|El material autocorrectivo muestra el error, de modo que el niño no depende del adulto para saber si lo ha hecho bien.",
      "¿Por qué tienen especial valor los estudios de Montessori que asignan las plazas por sorteo?|Evitan que difieran las familias|Permiten usar muestras mayores|Eliminan la necesidad de un grupo control|Las familias que eligen Montessori pueden diferir de las demás. El sorteo evita ese sesgo de selección.",
      "¿Qué hallaron Lillard et al. (2017) en los niños que obtuvieron plaza?|Mejor rendimiento y comprensión social|Peor rendimiento pero más creatividad|Ninguna diferencia con el otro grupo|También mayor orientación al dominio. Lillard y Else-Quest (2006), otro estudio por sorteo, apuntaba en la misma dirección.",
      "¿Qué conclusión prudente se extrae sobre la eficacia de Montessori?|Efectos de pequeños a moderados|Efectos grandes en todas las etapas|Efectos nulos frente a la tradicional|Bien aplicada muestra efectos positivos de pequeños a moderados, con una base de estudios limitada."
    ],
    inc: [
      "Sobre el método Montessori|El adulto actúa sobre todo como transmisor|Los ciclos de trabajo son largos y sin interrupciones|El niño elige su actividad dentro de límites|El adulto es un guía que observa y presenta los materiales, más que un transmisor."
    ],
    seq: [],
    cls: [] },
  { t: "Waldorf y Reggio Emilia",
    tip: "Steiner fundó la primera escuela Waldorf en Stuttgart en 1919. Se apoya en la antroposofía, una doctrina espiritual y no una teoría científica, de la que proceden los septenios. Reggio Emilia, impulsada por Malaguzzi tras la Segunda Guerra Mundial, es una filosofía con la imagen del niño competente, los cien lenguajes y el ambiente como «tercer maestro». No hay metaanálisis ni ensayos controlados de calidad sobre ninguna de las dos, y ausencia de evidencia no es prueba de ineficacia.",
    v: [
      "Antroposofía=Doctrina espiritual creada por Steiner en la que se apoya Waldorf",
      "Septenios=Periodos de siete años con necesidades educativas propias",
      "Euritmia=Arte de movimiento propio del método Waldorf",
      "Loris Malaguzzi=Impulsor de las escuelas infantiles municipales de Reggio Emilia",
      "Cien lenguajes=El niño piensa y se expresa con palabras, dibujo, arcilla, música o movimiento",
      "Tercer maestro=El ambiente, que educa junto a los docentes y las familias",
      "Tallerista=Profesional de formación artística a cargo del atelier",
      "Documentación pedagógica=Fotos, transcripciones y trabajos que hacen visible el proceso"
    ],
    g: [
      "Steiner fundó la primera escuela Waldorf en Stuttgart en ___.|1919|1907|1918",
      "En Waldorf, la lectoescritura formal comienza hacia los ___ años.|siete|cinco|cuatro",
      "Reggio Emilia se considera más una ___ que un método cerrado.|filosofía|doctrina|técnica",
      "En Reggio Emilia, los proyectos ___ surgen de las preguntas de los niños.|emergentes|dirigidos|cerrados",
      "La documentación pedagógica de Reggio se parece a la evaluación ___.|formativa|sumativa|externa"
    ],
    tf: [
      "Los septenios de Waldorf proceden de una teoría científica del desarrollo.|F|Proceden de la antroposofía, una doctrina espiritual creada por Steiner, no de una teoría científica.",
      "Que no haya ensayos controlados sobre Reggio Emilia demuestra que es ineficaz.|F|Ausencia de evidencia no es prueba de ineficacia, aunque tampoco permite afirmar que funcione mejor que otras opciones.",
      "En Waldorf, el mismo maestro acompaña al grupo durante varios cursos.|V",
      "La diversidad de lenguajes de Reggio se aproxima al principio de múltiples formas de representación y expresión del DUA.|V"
    ],
    q: [
      "Tras una tormenta, unos niños de cinco años preguntan adónde va el agua de los charcos y durante semanas observan desagües y construyen canales con arcilla. ¿Qué rasgo de Reggio Emilia ilustra?|Proyecto emergente|Texto libre|Control del error|Los proyectos emergentes surgen de las preguntas de los niños. La maestra documenta cada paso para decidir la siguiente propuesta.",
      "¿Qué se puede afirmar sobre la eficacia de Waldorf?|Faltan ensayos controlados de calidad|Supera a Montessori en metaanálisis|Los ensayos demuestran que es ineficaz|No se han localizado metaanálisis ni ensayos controlados de calidad, lo que no prueba ineficacia ni superioridad.",
      "¿Por qué conviene contrastar el retraso deliberado de la lectoescritura en Waldorf?|Choca con la enseñanza explícita y temprana|Reduce el tiempo dedicado al trabajo manual|Impide que el maestro siga con el grupo|Lo que se sabe sobre la enseñanza explícita y temprana de la lectura aconseja contrastar ese retraso.",
      "¿Qué práctica Waldorf conecta con lo que se sabe sobre el vínculo docente-alumno?|El mismo maestro durante varios cursos|La euritmia como arte de movimiento|La poca tecnología en los primeros años|La relación estable con un docente tiene buena fundamentación en la investigación sobre el vínculo."
    ],
    inc: [
      "Sobre Reggio Emilia|El ambiente es el «primer maestro»|Los niños se expresan con cien lenguajes|Las familias participan de forma intensa|El ambiente es el «tercer maestro», junto a los docentes y las familias."
    ],
    seq: [],
    cls: [
      "Pedagogía|Montessori: control del error; aulas multiedad; Casa dei Bambini|Waldorf: antroposofía; septenios; euritmia|Reggio Emilia: cien lenguajes; ambiente como tercer maestro; tallerista"
    ] },
  { t: "Raíces constructivistas, Freinet y proyectos",
    tip: "Casi todas las pedagogías activas se reconocen en el constructivismo, con el conflicto cognitivo de Piaget y la mediación social de Vygotsky. Como teoría del aprendizaje está ampliamente aceptado, pero como receta de mínima guía está muy cuestionado: según Mayer (2004), lo decisivo es la actividad cognitiva, no la física. Freinet desarrolló la escuela moderna, cooperativa, y Kilpatrick formuló el aprendizaje basado en proyectos (1918), que no debe confundirse con el basado en problemas de Barrows.",
    v: [
      "Conflicto cognitivo=Choque entre lo esperado y lo que ocurre que obliga a reorganizar esquemas",
      "Mediación social=Aprender con otros más capaces dentro de la zona de desarrollo próximo",
      "Actividad cognitiva=Seleccionar, organizar y relacionar, lo que hace eficaz el aprendizaje (Mayer)",
      "Texto libre=Técnica de Freinet en la que el alumno escribe sobre lo que quiere",
      "Tanteo experimental=Aprender probando, equivocándose y corrigiendo",
      "Plan de trabajo=Cada alumno organiza sus tareas para un periodo",
      "The Project Method=Obra de Kilpatrick (1918) que formuló el aprendizaje basado en proyectos",
      "Aprendizaje basado en problemas=Enfoque de Barrows surgido en la formación médica de McMaster"
    ],
    g: [
      "En la ___ de clase, técnica de Freinet, el grupo organiza su vida y resuelve conflictos.|asamblea|imprenta|correspondencia",
      "Freinet desarrolló su escuela moderna en los años veinte y ___.|treinta|cuarenta|diez",
      "Hoy la imprenta escolar de Freinet puede ser un ___ de clase.|blog|periódico|mural",
      "Un proyecto se organiza en torno a una pregunta guía, una investigación sostenida y un producto ___.|público|individual|evaluable",
      "El aprendizaje basado en proyectos es heredero de la idea de aprender haciendo de ___.|Dewey|Freinet|Barrows"
    ],
    tf: [
      "El constructivismo como teoría de cómo se aprende está ampliamente aceptado.|V",
      "Hay evidencia experimental sólida sobre la eficacia de la pedagogía Freinet.|F|No se ha localizado evidencia experimental sobre la pedagogía Freinet.",
      "Aprender activamente significa sobre todo que el alumno se mueva y manipule objetos.|F|Lo decisivo es la actividad cognitiva, no la física (Mayer, 2004). La manipulación ayuda si provoca ese procesamiento.",
      "El metaanálisis de Chen y Yang (2019) halló un efecto positivo del aprendizaje basado en proyectos sobre el rendimiento.|V"
    ],
    q: [
      "Un alumno escucha muy concentrado una buena explicación y otro recorta cartulinas sin un objetivo claro. Según Mayer (2004), ¿quién aprende de forma más activa?|El que escucha la explicación|El que recorta las cartulinas|Ambos por igual, al estar ocupados|Lo decisivo es la actividad cognitiva. Se puede estar muy activo escuchando y muy pasivo recortando cartulinas.",
      "Un proyecto sin objetivos claros, sin enseñanza explícita de lo necesario y sin seguimiento corre el riesgo de convertirse en…|descubrimiento sin ayuda|aprendizaje cooperativo|enseñanza expositiva pura|El efecto del aprendizaje basado en proyectos depende mucho de la calidad de la guía.",
      "¿Quién desarrolló el aprendizaje basado en problemas?|Barrows|Kilpatrick|Dewey|Barrows lo desarrolló en la formación médica de McMaster. Kilpatrick formuló el método de proyectos. Confundirlos es la trampa típica.",
      "Una clase compone e imprime sus textos y los intercambia por carta con otra escuela. ¿Qué pedagogía aplica?|Freinet|Montessori|Waldorf|La imprenta escolar y la correspondencia interescolar son técnicas de Freinet: escribir para un propósito y un público reales."
    ],
    inc: [
      "Sobre las técnicas de Freinet|El texto libre tiene un tema impuesto|La asamblea organiza la vida del grupo|La correspondencia une a dos escuelas|En el texto libre el alumno escribe sobre lo que quiere, sin tema impuesto."
    ],
    seq: [],
    cls: [
      "Enfoque|Proyectos: Kilpatrick (1918); pregunta guía; producto público|Problemas: Barrows; formación médica; Universidad McMaster"
    ] }
] }
);

SP.register(window.COURSE);
})({});
