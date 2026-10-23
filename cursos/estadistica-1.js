(function(window){
// SAIMAP Psicología · Fundamentos de Estadística
// Contenido alineado con el temario SAIMAP «Fundamentos de Estadística» (v1.0, octubre de 2026).
window.COURSE = {
  id: "estadistica-1",
  title: "Fundamentos de Estadística",
  short: "Estadística I",
  area: "Metodología y psicometría",
  rutas: { grado: { curso: 1 }, pir: { bloque: "Metodología" } },
  temario: "Fundamentos-de-Estadistica_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Ciencia, método e investigación en psicología", from: 1, to: 4 },
    { n: 2, t: "Estadística descriptiva", from: 5, to: 9 },
    { n: 3, t: "Probabilidad", from: 10, to: 11 },
    { n: 4, t: "Relación entre variables", from: 12, to: 14 },
    { n: 5, t: "Inferencia estadística", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Fundamentos de Estadística · Unidades 1–4
window.COURSE.units.push(
{ n: 1, t: "La ciencia y el método científico", cap: 1, pir: "baja", mods: [
  { t: "Formas de conocer y conocimiento científico",
    tip: "Tradición, autoridad, experiencia personal y razonamiento son fuentes de conocimiento con problemas propios. La ciencia no los sustituye, sino que los somete a comprobación: su rasgo definitorio es contrastar las afirmaciones con datos obtenidos de forma controlada y pública. Persigue cuatro objetivos de exigencia creciente: describir, explicar, predecir y controlar.",
    v: [
      "Sentido común=Lo que «todo el mundo sabe», a menudo con creencias contradictorias",
      "Autoridad=Aceptar algo por el prestigio de quien lo afirma, sin comprobarlo",
      "Experiencia personal=Lo vivido por uno mismo, con pocas observaciones y recuerdo selectivo",
      "Razonamiento=Fuente basada en la lógica que puede partir de premisas falsas",
      "Explicar=Objetivo científico de identificar las causas de un fenómeno",
      "Predecir=Objetivo científico de anticipar qué ocurrirá en condiciones determinadas",
      "Controlar=Objetivo más exigente: intervenir para modificar el fenómeno",
      "Indicador observable=Respuesta, conducta o medida registrable con que se estudia algo no visible"
    ],
    g: [
      "El rasgo definitorio de la ciencia es que sus afirmaciones se ___ con datos obtenidos de forma controlada y pública.|contrastan|justifican|ilustran",
      "Refranes como «los polos opuestos se atraen» y «Dios los cría y ellos se juntan» muestran que el ___ contiene creencias contradictorias.|sentido común|razonamiento|método científico",
      "Un argumento lógicamente válido puede llevar a error si parte de ___ falsas.|premisas|hipótesis|observaciones",
      "Anticipar qué ocurrirá en condiciones determinadas corresponde al objetivo de ___.|predecir|explicar|describir",
      "Para estudiar la ansiedad, que no se observa directamente, se recurre a ___ como las respuestas a un cuestionario.|indicadores observables|definiciones teóricas|criterios de autoridad"
    ],
    tf: [
      "Los cuatro objetivos de la ciencia, en orden creciente de exigencia, son describir, explicar, predecir y controlar.|V",
      "La ciencia se distingue porque prescinde del razonamiento y de la experiencia personal.|F|La ciencia utiliza el razonamiento y la experiencia, pero los somete a comprobación con datos.",
      "El principal problema de la experiencia personal es que se basa en pocas observaciones y en un recuerdo selectivo.|V",
      "Averiguar qué porcentaje de estudiantes tiene insomnio es un objetivo de explicación.|F|Establecer qué ocurre y con qué frecuencia es describir; explicar implica identificar las causas."
    ],
    q: [
      "Un programa aplicado en una facultad reduce el insomnio de los estudiantes. ¿Qué objetivo de la ciencia ilustra mejor?|Controlar|Predecir|Explicar|Intervenir para modificar un fenómeno, como un tratamiento que reduce el insomnio, es el objetivo de control, el más exigente.",
      "¿Cuál es el principal problema de aceptar una afirmación por la autoridad de quien la hace?|Que no se comprueba lo que se afirma|Que contiene creencias contradictorias|Que parte de muy pocas observaciones|La autoridad puede equivocarse y lo que dice no se comprueba. Las contradicciones son propias del sentido común.",
      "Una investigadora quiere saber por qué algunos estudiantes duermen peor antes de los exámenes. ¿Qué objetivo persigue?|Explicar|Describir|Controlar|Preguntarse por qué ocurre algo es buscar sus causas, lo que corresponde al objetivo de explicar.",
      "¿Qué fuente de conocimiento falla sobre todo por el sesgo de confirmación?|La experiencia personal|La tradición|El razonamiento lógico|La experiencia personal se basa en pocas observaciones, con recuerdo selectivo y sesgo de confirmación."
    ],
    inc: [
      "Sobre las fuentes de conocimiento|La ciencia ofrece conclusiones rápidas y definitivas|El razonamiento puede partir de premisas falsas|La autoridad puede equivocarse sin que se compruebe|La ciencia es más lenta que otras fuentes y sus conclusiones son siempre provisionales."
    ],
    seq: [
      "Objetivos de la ciencia, de menor a mayor exigencia|Describir>Explicar>Predecir>Controlar"
    ],
    cls: [
      "Problema principal de cada fuente|Sentido común: creencias contradictorias|Experiencia personal: pocas observaciones; recuerdo selectivo|Razonamiento: premisas falsas"
    ] },
  { t: "Características del conocimiento científico",
    tip: "El conocimiento científico es empírico, sistemático, intersubjetivo, público, replicable, refutable, provisional y acumulativo. La objetividad no es la ausencia de investigador, sino la posibilidad de que otros comprueben su trabajo y obtengan los mismos datos. Por eso la ciencia no demuestra teorías de forma definitiva: acepta provisionalmente las que mejor resisten la contrastación.",
    v: [
      "Empírico=Apoyado en la observación de la realidad, no solo en la opinión o la lógica",
      "Sistemático=Que sigue un procedimiento ordenado y explícito, no observaciones casuales",
      "Intersubjetividad=Distintos observadores con el mismo procedimiento obtienen los mismos datos",
      "Público y comunicable=Métodos y resultados publicados con detalle para que otros los evalúen",
      "Replicable=Otro equipo puede repetir el estudio y comprobar si obtiene lo mismo",
      "Refutable=Sus afirmaciones pueden resultar falsas si los datos las contradicen",
      "Provisional y autocorrectivo=Ninguna conclusión es definitiva; nuevos datos pueden corregirla",
      "Acumulativo=Cada estudio se apoya en los anteriores"
    ],
    g: [
      "La objetividad científica se entiende mejor como ___: que otros observadores obtengan los mismos datos.|intersubjetividad|neutralidad valorativa|exactitud",
      "Que otro equipo pueda repetir un estudio y comprobar si obtiene lo mismo hace al conocimiento ___.|replicable|acumulativo|sistemático",
      "La ciencia no ___ las teorías de forma definitiva: acumula pruebas a favor o en contra.|demuestra|describe|comunica",
      "Que cualquier conclusión pueda corregirse con nuevos datos refleja el carácter ___ de la ciencia.|provisional|empírico|público",
      "Seguir un procedimiento ordenado y explícito, y no observaciones casuales, hace al conocimiento ___.|sistemático|replicable|refutable"
    ],
    tf: [
      "La objetividad científica exige que el investigador no tenga ningún valor ni punto de vista.|F|La objetividad no es ausencia de investigador, sino intersubjetividad: que otros puedan comprobar su trabajo.",
      "El carácter público de la ciencia exige describir los métodos con detalle suficiente para que otros los evalúen.|V",
      "Una teoría que ha superado muchas contrastaciones queda demostrada de forma definitiva.|F|La ciencia acepta provisionalmente las teorías que mejor resisten la contrastación; nuevos datos pueden corregirlas.",
      "El conocimiento científico es acumulativo porque cada estudio se apoya en los anteriores.|V"
    ],
    q: [
      "Dos observadores registran la misma conducta con el mismo sistema de categorías y obtienen datos casi idénticos. ¿Qué característica se pone de manifiesto?|La intersubjetividad|La provisionalidad|La acumulación|Que distintos observadores lleguen a los mismos datos con el mismo procedimiento define la intersubjetividad.",
      "¿Qué rasgo del conocimiento científico implica que sus afirmaciones podrían resultar falsas ante ciertos datos?|La refutabilidad|La replicabilidad|La sistematicidad|Una afirmación refutable es la que podría resultar falsa si los datos la contradicen.",
      "Un equipo repite un estudio publicado siguiendo el procedimiento descrito por sus autores. ¿Qué rasgos lo hacen posible?|Que sea replicable y público|Que sea empírico y provisional|Que sea refutable y acumulativo|Para repetirlo hace falta que el método se haya comunicado con detalle (público) y que el estudio pueda reproducirse (replicable).",
      "¿Qué afirmación describe mejor la relación de la ciencia con las teorías?|Acepta de forma provisional las que mejor resisten|Demuestra las que acumulan más datos a favor|Descarta las que no tienen apoyo de una autoridad|La ciencia no demuestra de forma definitiva: acumula pruebas y acepta provisionalmente las teorías que mejor resisten."
    ],
    inc: [
      "Sobre las características del conocimiento científico|La objetividad supone eliminar al investigador|El conocimiento científico se apoya en la observación|Las conclusiones pueden corregirse con nuevos datos|La objetividad se entiende como intersubjetividad: otros pueden comprobar el trabajo, no que no haya investigador."
    ],
    seq: [],
    cls: [] },
  { t: "Hipótesis, refutación y ciclo del método",
    tip: "Una hipótesis es una respuesta tentativa a un problema, formulada para contrastarse con datos; debe ser contrastable, refutable, precisa y coherente. Popper señaló que ninguna cantidad de confirmaciones demuestra del todo una afirmación general, pero una observación contraria bien establecida puede refutarla. Se distinguen hipótesis conceptual, operativa y estadística, y el método hipotético-deductivo sigue un ciclo de cinco fases.",
    v: [
      "Hipótesis=Respuesta tentativa a un problema, formulada para contrastarse con datos",
      "Refutabilidad=Propiedad de una afirmación que podría resultar falsa ante ciertos datos",
      "Karl Popper=Filósofo que señaló la asimetría lógica entre confirmar y refutar",
      "Hipótesis conceptual=Relación teórica entre constructos, sin concretar cómo se miden",
      "Hipótesis operativa=Formulación en términos de variables medibles y condiciones concretas",
      "Hipótesis estadística=Afirmación sobre parámetros poblacionales que se formaliza como H₀ y H₁",
      "Método hipotético-deductivo=Formular hipótesis, deducir consecuencias observables y contrastarlas",
      "Contrastable=Que puede comprobarse con datos observables"
    ],
    g: [
      "Una hipótesis que puede explicar a posteriori cualquier conducta no es ___.|refutable|coherente|conceptual",
      "En el método hipotético-deductivo, de la hipótesis se ___ consecuencias observables que se contrastan con datos.|deducen|inducen|observan",
      "La estadística interviene en la fase de ___ del ciclo del método científico.|análisis|hipótesis|problema",
      "«Quienes duermen menos de 6 horas obtienen menos aciertos en una tarea de dígitos» es una hipótesis ___.|operativa|conceptual|estadística",
      "Según Popper, basta una observación ___ bien establecida para refutar una afirmación general.|contraria|coincidente|probable"
    ],
    tf: [
      "Por muchas observaciones que encajen con una afirmación general, nunca se demuestra del todo.|V",
      "En la práctica, un único resultado contrario suele bastar para abandonar una teoría.|F|Un resultado contrario rara vez derriba una teoría: puede deberse a un error de medida o a un fallo del diseño.",
      "La hipótesis estadística se refiere a parámetros de poblaciones, como la media de aciertos.|V",
      "Una hipótesis compatible con cualquier resultado posible está muy confirmada y es especialmente sólida.|F|Si ningún dato puede contradecirla, no es refutable y no informa de nada."
    ],
    q: [
      "«Todo comportamiento tiene un motivo, aunque a veces sea inconsciente», si cualquier conducta puede explicarse a posteriori, es una afirmación…|no refutable|demasiado precisa|operativa y contrastable|Si cualquier resultado puede encajar en ella, ningún dato podría contradecirla: no es refutable.",
      "«La media de aciertos de la población A es menor que la de la población B» es una hipótesis…|estadística|operativa|conceptual|Se refiere a parámetros de poblaciones (medias poblacionales); se formaliza como H₀ y H₁.",
      "En el ciclo del método científico, ¿qué fase sigue inmediatamente a la formulación de la hipótesis?|Diseño y recogida de datos|Análisis estadístico|Conclusión y comunicación|El orden es problema, hipótesis, diseño y recogida de datos, análisis estadístico y conclusión y comunicación.",
      "¿Por qué el método científico busca datos que podrían refutar una hipótesis?|Porque confirmarla nunca la demuestra del todo|Porque una refutación siempre derriba la teoría|Porque las hipótesis deben ser imprecisas|Por la asimetría de Popper: las confirmaciones no demuestran una afirmación general, pero una contraria puede refutarla."
    ],
    inc: [
      "Sobre una buena hipótesis|Debe poder explicar cualquier resultado|Debe poder contrastarse con datos observables|Debe indicar qué variables se relacionan|Una hipótesis que encaja con cualquier resultado no es refutable; una buena hipótesis debe poder fallar."
    ],
    seq: [
      "Ciclo del método científico|Problema>Hipótesis>Diseño y recogida de datos>Análisis estadístico>Conclusión y comunicación"
    ],
    cls: [] },
  { t: "El papel de la estadística y sus pioneros",
    tip: "La estadística recoge, organiza, resume y analiza datos y extrae conclusiones con incertidumbre; en psicología es imprescindible por la variabilidad entre personas y entre ocasiones. Comprende la descriptiva, la probabilidad y la inferencial. Galton, Pearson, Gosset y Fisher construyeron buena parte de sus herramientas; reconocer su obra técnica no implica aceptar la eugenesia que algunos defendieron.",
    v: [
      "Estadística=Disciplina que recoge, organiza, resume y analiza datos con incertidumbre",
      "Variabilidad=Diferencias en las respuestas entre personas y entre ocasiones",
      "Estadística descriptiva=Rama que resume los datos de una muestra con tablas, gráficos e índices",
      "Estadística inferencial=Rama que generaliza de la muestra a la población cuantificando el error",
      "Francis Galton=Describió la regresión a la media y formuló la idea de correlación",
      "Karl Pearson=Formalizó el coeficiente de correlación y propuso la prueba χ²",
      "W. S. Gosset=Químico de Guinness que desarrolló la distribución t con seudónimo",
      "Ronald A. Fisher=Sentó las bases del diseño experimental y del análisis de varianza"
    ],
    g: [
      "La razón principal por la que la psicología necesita la estadística es la ___.|variabilidad|medición|causalidad",
      "Gosset publicó en 1908 la distribución t con el seudónimo «___».|Student|Fisher|Guinness",
      "Galton montó en Londres en 1884 un laboratorio ___.|antropométrico|psicofísico|experimental",
      "Karl Pearson cofundó en 1901 la revista ___.|Biometrika|Science|Psychometrika",
      "La probabilidad es el lenguaje matemático del ___ que sirve de puente entre descripción e inferencia.|azar|error|método"
    ],
    tf: [
      "Gosset trabajaba como químico para la cervecera Guinness y necesitaba métodos para muestras pequeñas.|V",
      "La prueba χ² y el análisis de varianza se deben ambos a Ronald A. Fisher.|F|La prueba χ² la propuso Karl Pearson; Fisher desarrolló el análisis de varianza y el diseño experimental.",
      "Con la estadística se puede demostrar cualquier cosa, porque los análisis se eligen a conveniencia.|F|Puede usarse mal, pero sus reglas permiten detectarlo; además, no demuestra: cuantifica el apoyo y la incertidumbre.",
      "La regresión a la media fue descrita por Francis Galton.|V"
    ],
    q: [
      "¿Qué pionero sentó las bases del diseño experimental con aleatorización y control?|Ronald A. Fisher|Francis Galton|Karl Pearson|Fisher fundamentó el diseño experimental, el análisis de varianza y las pruebas de significación.",
      "Una psicóloga resume con una tabla y un gráfico la ansiedad de sus 40 participantes, sin generalizar a nadie más. ¿Qué rama aplica?|La descriptiva|La inferencial|La probabilidad|Resumir los datos de la muestra con tablas, gráficos e índices es estadística descriptiva; generalizar sería inferencia.",
      "¿Qué papel cumple la probabilidad dentro de la estadística?|Es el puente entre descripción e inferencia|Resume los datos con tablas y gráficos|Sustituye a la inferencia con muestras grandes|La probabilidad es el lenguaje del azar que conecta la descripción de la muestra con la inferencia a la población.",
      "¿Qué afirmación sobre los pioneros es correcta?|Galton formuló la idea de correlación|Pearson desarrolló la distribución t|Fisher fundó la revista Biometrika|Galton formuló la idea; Pearson formalizó el coeficiente y cofundó Biometrika; la t es de Gosset."
    ],
    inc: [
      "Sobre la estadística en psicología|Permite demostrar de forma definitiva una conclusión|Ayuda a separar un efecto real del azar|La inferencia generaliza de la muestra a la población|La estadística no demuestra: cuantifica cuánto apoyan los datos una conclusión y cuánta incertidumbre queda."
    ],
    seq: [],
    cls: [
      "Aportación de cada pionero|Galton: regresión a la media; idea de correlación|Pearson: coeficiente de correlación; prueba χ²|Fisher: diseño experimental; análisis de varianza"
    ] }
] },

{ n: 2, t: "Investigar en psicología", cap: 1, pir: "media", mods: [
  { t: "Tipos de investigación según el control",
    tip: "Los diseños se ordenan por el control del investigador: ¿manipula la VI? ¿Asigna al azar? El experimental hace ambas cosas y es el único que permite conclusiones causales con garantías; el cuasiexperimental manipula sin asignación aleatoria; el no experimental mide sin manipular (incluye los ex post facto), y el observacional registra la conducta, a menudo en su contexto natural. Más control suele implicar menos naturalidad.",
    v: [
      "Diseño experimental=Manipulación de la VI con asignación aleatoria a las condiciones",
      "Diseño cuasiexperimental=Manipulación de la VI sin asignación aleatoria, con grupos ya formados",
      "Diseño no experimental=Se miden las variables tal como se presentan, sin manipularlas",
      "Estudio ex post facto=Compara grupos definidos por una característica que ya existe",
      "Diseño observacional=Registro de la conducta con categorías previas, a menudo en contexto natural",
      "Asignación aleatoria=Reparto al azar que hace equivalentes los grupos en promedio",
      "Estudio transversal=Una sola medición en un momento dado",
      "Estudio longitudinal=Las mismas personas medidas varias veces a lo largo del tiempo"
    ],
    g: [
      "Lo que distingue un cuasiexperimento de un experimento es la ausencia de ___.|asignación aleatoria|manipulación de la VI|variable dependiente",
      "Comparar la memoria de fumadores y no fumadores es un estudio ___.|ex post facto|experimental|cuasiexperimental",
      "Comparar en un mismo momento a grupos de distintas edades es un estudio ___.|transversal|longitudinal|experimental",
      "El diseño observacional destaca por su alta ___, pero tiene poco control.|naturalidad|validez interna|aleatorización",
      "En un diseño no experimental, el control de las variables extrañas, si existe, es sobre todo ___.|estadístico|experimental|aleatorio"
    ],
    tf: [
      "Un estudio que compara personas con y sin diagnóstico de depresión es experimental porque compara dos grupos.|F|Los grupos se definen por una característica ya existente; sin manipulación, es un estudio ex post facto.",
      "En un cuasiexperimento el investigador manipula la variable independiente.|V",
      "La asignación aleatoria hace que, en promedio, los grupos sean equivalentes en todo lo demás.|V",
      "Un diseño correlacional bien hecho permite afirmar causalidad con las mismas garantías que un experimento.|F|Los diseños no experimentales permiten describir y predecir, pero no establecer causalidad."
    ],
    q: [
      "Se aplica un programa contra el acoso escolar en un colegio y se compara con otro colegio que no lo recibe. ¿Qué diseño es?|Cuasiexperimental|Experimental|No experimental|Hay manipulación (el programa), pero no asignación aleatoria: se trabaja con grupos ya formados.",
      "Se asigna al azar a 60 estudiantes a dormir 4 u 8 horas y se mide su memoria de trabajo. ¿Qué permite este diseño?|Inferir causalidad con garantías|Solo describir la relación observada|Predecir sin poder explicar nada|Con manipulación y asignación aleatoria es un experimento, el único diseño que permite conclusiones causales con garantías.",
      "¿Qué diseño combina la mayor naturalidad del contexto con el menor control?|Observacional|Experimental|Cuasiexperimental|La observación en contexto natural gana naturalidad y pierde control; el laboratorio hace lo contrario.",
      "Un equipo mide el uso del móvil y la calidad del sueño de 500 adolescentes. ¿Qué tipo de diseño es?|No experimental|Cuasiexperimental|Experimental|No se manipula nada: se miden las variables tal como se presentan (estudio correlacional o de encuesta)."
    ],
    inc: [
      "Sobre los tipos de diseño|El cuasiexperimento no manipula la VI|El experimento asigna al azar a los participantes|El estudio ex post facto no manipula ninguna variable|En el cuasiexperimento sí se manipula la VI; lo que falta es la asignación aleatoria."
    ],
    seq: [],
    cls: [
      "Manipulación de la VI|Con manipulación: experimental; cuasiexperimental|Sin manipulación: no experimental; observacional; ex post facto"
    ] },
  { t: "Las fases de una investigación",
    tip: "Una investigación concreta el ciclo del método en diez pasos, desde el planteamiento del problema hasta la comunicación. El plan de análisis se decide antes de ver los datos, y los estudios con personas requieren un comité de ética, consentimiento informado y protección de datos. Los pasos intermedios se condicionan: la escala de medida limita los análisis posibles, y el tamaño de la muestra, los efectos detectables.",
    v: [
      "Revisión de la literatura=Estudio de lo que ya se sabe y de lo que falta por saber",
      "Operacionalización=Paso en que se define cómo se medirán las variables",
      "Plan de análisis=Pruebas estadísticas previstas, decididas antes de ver los datos",
      "Comité de ética=Órgano que evalúa los estudios con personas antes de realizarlos",
      "Consentimiento informado=Aceptación del participante tras recibir información sobre el estudio",
      "Selección de participantes=Paso en que se decide a quién estudiar y con qué tamaño de muestra",
      "Elección del diseño=Decidir entre experimental, cuasiexperimental, no experimental u observacional",
      "Comunicación=Último paso: dar a conocer los resultados"
    ],
    g: [
      "El plan de análisis debe decidirse ___ de ver los datos.|antes|después|a la vez",
      "La escala de medida de una variable condiciona qué ___ se pueden hacer.|análisis|hipótesis|muestreos",
      "El tamaño de la muestra condiciona qué ___ se podrán detectar.|efectos|variables|sesgos",
      "Los estudios con personas requieren la evaluación de un ___.|comité de ética|revisor externo|tribunal médico",
      "La protección de los ___ de los participantes forma parte de la aprobación ética.|datos personales|resultados globales|análisis previstos"
    ],
    tf: [
      "La recogida de datos se realiza antes de obtener la aprobación ética del estudio.|F|La aprobación ética (paso 7) es previa a la recogida de datos (paso 8).",
      "Definir cómo se medirán las variables es un paso anterior a la elección del diseño.|V",
      "La definición de variables, el diseño, la muestra y el plan de análisis son pasos independientes entre sí.|F|Se condicionan: la escala de medida limita los análisis posibles, y el tamaño muestral, los efectos detectables.",
      "El planteamiento del problema va unido a la revisión de lo que ya se sabe sobre el tema.|V"
    ],
    q: [
      "Un equipo decide qué pruebas estadísticas aplicará después de explorar los datos recogidos. ¿Qué fallo comete?|Fijar el plan de análisis demasiado tarde|Omitir la revisión de la literatura previa|Confundir la variable independiente y la dependiente|El plan de análisis debe decidirse antes de ver los datos (paso 6), no después de explorarlos.",
      "¿Qué paso va inmediatamente antes de la recogida de datos?|La aprobación ética|El plan de análisis|La elección del diseño|El orden es plan de análisis (6), aprobación ética (7) y recogida de datos (8).",
      "¿Por qué la escala de medida de una variable debe pensarse junto al plan de análisis?|Porque limita los análisis posibles|Porque determina el tamaño de la muestra|Porque sustituye a la aprobación ética|La escala de medida condiciona qué análisis estadísticos se pueden aplicar a una variable.",
      "¿Qué requisitos éticos se exigen para investigar con personas?|Comité, consentimiento y protección de datos|Preregistro, revisión por pares y datos abiertos|Consentimiento, muestra aleatoria y doble ciego|Se requiere evaluación de un comité de ética, consentimiento informado y protección de los datos personales."
    ],
    inc: [
      "Sobre las fases de una investigación|El plan de análisis se fija tras recoger los datos|La revisión de la literatura acompaña al problema|Los objetivos e hipótesis se formulan antes del diseño|El plan de análisis se decide antes de ver los datos (paso 6), antes de la aprobación ética y de la recogida."
    ],
    seq: [
      "Fases de una investigación|Problema y revisión de la literatura>Objetivos e hipótesis>Definición de las variables>Elección del diseño>Selección de los participantes>Plan de análisis>Aprobación ética>Recogida de datos>Análisis e interpretación>Comunicación"
    ],
    cls: [] },
  { t: "El artículo científico",
    tip: "Los resultados se comunican en artículos de revistas con revisión por pares. En psicología se siguen las normas APA: título, resumen, introducción, método, resultados, discusión y referencias. El método debe permitir replicar el estudio, los resultados se presentan sin interpretar y la interpretación va en la discusión; los estándares JARS concretan qué informar en cada sección.",
    v: [
      "Revisión por pares=Evaluación anónima de un trabajo por otros investigadores antes de publicarlo",
      "Resumen=Síntesis de objetivo, método, resultados y conclusión en unas 250 palabras",
      "Introducción=Problema, estudios previos, justificación, objetivos e hipótesis",
      "Método=Participantes, instrumentos, procedimiento, diseño y plan de análisis",
      "Resultados=Análisis estadísticos con tablas y figuras, aún sin interpretar",
      "Discusión=Interpretación, relación con estudios previos, limitaciones e implicaciones",
      "Referencias=Fuentes citadas, en formato APA",
      "JARS=Estándares de la APA sobre qué información incluir en cada sección"
    ],
    g: [
      "Las limitaciones del estudio se comentan en la sección de ___.|discusión|resultados|método",
      "El método debe ofrecer detalle suficiente para que otro equipo pueda ___ el estudio.|replicar|publicar|financiar",
      "Los estándares JARS piden informar de los tamaños del efecto con sus ___.|intervalos de confianza|niveles de significación|hipótesis alternativas",
      "En la revisión por pares, otros investigadores evalúan el trabajo de forma ___.|anónima|pública|remunerada",
      "Los análisis estadísticos, con tablas y figuras, se presentan en ___.|los resultados|la discusión|la introducción"
    ],
    tf: [
      "En la sección de resultados se interpretan los análisis y se relacionan con estudios previos.|F|Los resultados se presentan sin interpretar; la interpretación y la relación con otros estudios van en la discusión.",
      "Las hipótesis del estudio se presentan en la introducción.|V",
      "Los estándares JARS piden indicar cómo se decidió el tamaño de la muestra y cuántos participantes abandonaron.|V",
      "Según JARS, basta con informar de los valores p, sin necesidad de tamaños del efecto.|F|JARS pide los tamaños del efecto con sus intervalos de confianza, no solo los valores p."
    ],
    q: [
      "Un lector quiere saber cuántos participantes hubo y qué instrumentos se usaron. ¿Qué sección debe consultar?|Método|Resultados|Introducción|El método describe participantes, instrumentos, procedimiento, diseño y plan de análisis.",
      "Un autor escribe que su hallazgo contradice un estudio anterior y que su muestra era pequeña. ¿En qué sección debe ir?|Discusión|Resultados|Método|La relación con estudios previos y las limitaciones se tratan en la discusión.",
      "¿Cuál es la extensión máxima habitual del resumen de un artículo APA?|Unas 250 palabras|Unas 500 palabras|Unas 100 palabras|El resumen sintetiza objetivo, método, resultados y conclusión en normalmente no más de 250 palabras.",
      "¿Qué es la revisión por pares?|Evaluación anónima por otros investigadores|Comprobación de los datos por el comité de ética|Repetición del estudio por un laboratorio externo|Antes de publicar, otros investigadores evalúan el trabajo de forma anónima y pueden pedir cambios o rechazarlo."
    ],
    inc: [
      "Sobre la estructura de un artículo APA|Los resultados incluyen ya su interpretación|El resumen sintetiza objetivo, método y resultados|El método describe a los participantes y el procedimiento|Los resultados se presentan sin interpretar; la interpretación corresponde a la discusión."
    ],
    seq: [
      "Secciones de un artículo empírico APA|Título>Resumen>Introducción>Método>Resultados>Discusión>Referencias"
    ],
    cls: [] },
  { t: "Replicabilidad y ciencia abierta",
    tip: "En 2015, la Open Science Collaboration intentó replicar 100 estudios: el 97 % de los originales eran significativos, pero solo el 36 % de las réplicas, con efectos de la mitad de tamaño. Entre las causas se señalan el sesgo de publicación, las muestras pequeñas, el p-hacking y el HARKing. La ciencia abierta responde con preregistro, informes registrados, datos abiertos y réplicas; aún se debate cómo definir el éxito de una réplica.",
    v: [
      "Replicabilidad=Un estudio con datos nuevos y el mismo procedimiento obtiene un resultado compatible",
      "Open Science Collaboration=Proyecto que en 2015 intentó replicar 100 estudios de psicología",
      "Sesgo de publicación=Tendencia a publicar sobre todo resultados significativos",
      "p-hacking=Probar análisis o decisiones sobre los datos hasta obtener p < 0,05",
      "HARKing=Presentar como hipótesis previa lo descubierto al explorar los datos",
      "Preregistro=Registro público con fecha de hipótesis, diseño y análisis antes de recoger datos",
      "Informe registrado=La revista acepta el proyecto antes de conocer los resultados",
      "Many Labs 2=Proyecto que replicó 28 hallazgos en decenas de laboratorios"
    ],
    g: [
      "En el proyecto de la Open Science Collaboration, solo el ___ de las réplicas fue significativo.|36 %|97 %|5 %",
      "Los efectos de las réplicas fueron, en promedio, de aproximadamente ___ del tamaño original.|la mitad|el doble|un tercio",
      "Los ___ eliminan el sesgo de publicación porque la revista acepta el proyecto antes de conocer los resultados.|informes registrados|estudios de réplica|datos abiertos",
      "Simmons, Nelson y Simonsohn mostraron que unas pocas decisiones flexibles llevan los falsos positivos, nominalmente del ___, a más del 60 %.|5 %|1 %|36 %",
      "El preregistro permite distinguir lo confirmatorio de lo ___.|exploratorio|replicable|significativo"
    ],
    tf: [
      "Si un resultado no se replica, lo más probable es que el estudio original fuera un fraude.|F|El fraude es raro: puede deberse al azar, a poca potencia, a prácticas cuestionables no intencionadas o al contexto.",
      "Explorar los datos después de recogerlos es, en sí mismo, una mala práctica.|F|Explorar no es malo; lo incorrecto es presentar lo exploratorio como si se hubiera planeado.",
      "Las muestras pequeñas, con poca potencia, tienden a producir resultados inestables y efectos exagerados.|V",
      "No hay acuerdo sobre cómo definir el éxito de una réplica.|V"
    ],
    q: [
      "Una investigadora añade participantes poco a poco y mira el valor p tras cada tanda, hasta que baja de 0,05. ¿Qué práctica es?|p-hacking|HARKing|Preregistro|Añadir participantes o probar análisis hasta obtener p < 0,05 es p-hacking, y eleva la tasa de falsos positivos.",
      "Un equipo encuentra un efecto inesperado al explorar los datos y lo presenta como su hipótesis inicial. ¿Qué práctica es?|HARKing|p-hacking|Sesgo de publicación|HARKing es presentar como hipótesis previa lo que se descubrió después de conocer los resultados.",
      "¿Qué medida ataca directamente el sesgo de publicación?|Los informes registrados|Las réplicas con menos sujetos|La revisión tras los resultados|En los informes registrados la revista acepta el proyecto antes de conocer los resultados, sean o no significativos.",
      "Según el consenso actual sobre la crisis de replicabilidad, ¿qué afirmación es correcta?|Parte de los hallazgos no se replica igual|La crisis afecta por igual a todas las áreas|Toda réplica fallida se debe a malas prácticas|Hay consenso en lo primero; si afecta igual a todas las áreas y qué parte se debe a malas prácticas sigue en debate."
    ],
    inc: [
      "Sobre la ciencia abierta|El preregistro garantiza un resultado significativo|Los datos abiertos permiten verificar los análisis|El preregistro fija hipótesis y análisis por adelantado|El preregistro no garantiza nada sobre el resultado: sirve para distinguir lo planeado de lo exploratorio."
    ],
    seq: [],
    cls: [
      "Causa o respuesta a la crisis de replicabilidad|Causas: sesgo de publicación; muestras pequeñas; p-hacking; HARKing|Respuestas: preregistro; informes registrados; datos abiertos; estudios de replicación"
    ] }
] },

{ n: 3, t: "Variables y escalas de medida", cap: 1, pir: "alta", mods: [
  { t: "Variables, constantes y medición",
    tip: "Una variable toma distintos valores en los elementos estudiados; una constante toma uno solo en ese estudio, y convertir una variable extraña en constante es una forma de control. Medir es asignar números o categorías según reglas, de modo que reflejen relaciones entre propiedades. Los constructos no se observan directamente y deben operacionalizarse; ninguna operacionalización los agota.",
    v: [
      "Variable=Característica que puede tomar distintos valores en los elementos estudiados",
      "Modalidad=Cada valor posible de una variable cuando es una categoría",
      "Constante=Característica con un solo valor en un estudio concreto",
      "Medir=Asignar números o categorías según reglas que reflejen relaciones entre propiedades",
      "Constructo=Concepto teórico que no se observa directamente, como la autoestima",
      "Operacionalizar=Especificar las operaciones concretas que servirán de indicador",
      "Definición operativa=Descripción del procedimiento concreto con que se mide un concepto",
      "Escala de medida=Determina qué relaciones entre los números se conservan al medir"
    ],
    g: [
      "Si todos los participantes son de primer curso, el curso es en ese estudio una ___.|constante|modalidad|variable",
      "La inteligencia o la autoestima son ___: conceptos teóricos que no se observan directamente.|constructos|modalidades|constantes",
      "Cada valor posible de una variable categórica se denomina ___.|modalidad|constante|indicador",
      "«La puntuación total en un cuestionario de 20 ítems aplicado la víspera del examen» es una definición ___.|operativa|conceptual|nominal",
      "Un mismo constructo admite varias operacionalizaciones, y ninguna lo ___.|agota|refleja|nombra"
    ],
    tf: [
      "Si todos los participantes son de primer curso, el curso sigue siendo una variable de ese estudio.|F|Si todos tienen el mismo valor, el curso es una constante en ese estudio, aunque en general sea una variable.",
      "Convertir en constante una variable que podría interferir es una forma de control.|V",
      "Una buena operacionalización recoge por completo el constructo que se quiere medir.|F|Un mismo constructo admite varias operacionalizaciones, y ninguna lo agota.",
      "Qué relaciones entre los números se conservan al medir depende de la escala de medida.|V"
    ],
    q: [
      "Un estudio sobre ansiedad incluye solo a mujeres. ¿Qué es el sexo en ese estudio?|Una constante|Una variable de confusión|Una modalidad|Toma un solo valor en el estudio, así que es una constante; mantenerla así es además una forma de control.",
      "¿Qué hace falta para medir científicamente la autoestima?|Operacionalizarla con un indicador|Observarla directamente en la conducta|Definirla de forma puramente teórica|La autoestima es un constructo: hay que especificar qué prueba o registro concreto servirá de indicador.",
      "¿Qué es medir?|Asignar números según reglas|Asignar números al azar a los participantes|Ordenar a los participantes de mayor a menor|Medir es asignar números o categorías siguiendo reglas, de forma que reflejen relaciones entre las propiedades medidas.",
      "Una investigadora mide la «ansiedad ante los exámenes» con un cuestionario y otra, con la frecuencia cardiaca. ¿Qué ilustra?|Dos operacionalizaciones del mismo constructo|Dos constructos distintos con el mismo nombre|Un error de medida de la segunda investigadora|Un mismo constructo admite varias operacionalizaciones; ninguna lo agota."
    ],
    inc: [
      "Sobre variables y medición|Un constructo se observa directamente|Una constante toma un solo valor en el estudio|Un mismo constructo admite varias operacionalizaciones|Los constructos no se observan directamente: se miden con indicadores elegidos al operacionalizarlos."
    ],
    seq: [],
    cls: [] },
  { t: "Las escalas de medida de Stevens",
    tip: "Stevens (1946) propuso cuatro escalas, de menos a más información: nominal (igualdad), ordinal (orden), de intervalo (distancias iguales, cero arbitrario) y de razón (cero absoluto, cocientes con sentido). Admiten, respectivamente, recodificaciones uno a uno, transformaciones monótonas crecientes, lineales y proporcionales. La escala depende del procedimiento de medida, no de la variable en sí.",
    v: [
      "Escala nominal=Solo distingue categorías; admite cualquier recodificación uno a uno",
      "Escala ordinal=Distingue y ordena; admite transformaciones monótonas crecientes",
      "Escala de intervalo=Intervalos iguales con cero arbitrario; admite transformaciones lineales",
      "Escala de razón=Intervalos iguales con cero absoluto; los cocientes tienen sentido",
      "Cero arbitrario=Valor cero que no indica ausencia de la propiedad",
      "Cero absoluto=Valor cero que indica ausencia real de la propiedad",
      "Transformación lineal=Del tipo a + b·y con b positivo; conserva la igualdad de intervalos",
      "Stanley S. Stevens=Psicólogo que propuso en 1946 cuatro niveles de medida"
    ],
    g: [
      "La temperatura en kelvin se mide en escala ___.|de razón|de intervalo|ordinal",
      "La transformación más general que admite una escala ordinal sin perder información es la ___.|monótona creciente|lineal positiva|proporcional",
      "Con F = 32 + 1,8 · C, si 10 °C equivalen a 50 °F, 20 °C equivalen a ___.|68 °F|100 °F|60 °F",
      "En una escala de razón tienen sentido los ___ entre valores.|cocientes|signos|códigos",
      "Si se codifica «1 = soltero, 2 = casado, 3 = divorciado», la variable sigue siendo ___.|nominal|ordinal|de intervalo"
    ],
    tf: [
      "La temperatura en grados Celsius es de razón, porque 0 °C indica ausencia de temperatura.|F|El cero de la escala Celsius es arbitrario: es de intervalo. La temperatura en kelvin sí es de razón.",
      "Cada escala de Stevens conserva las propiedades de la anterior y añade una nueva.|V",
      "La edad en categorías («niño», «adolescente», «adulto») es ordinal, aunque la edad en años sea de razón.|V",
      "En una escala de intervalo, multiplicar por una constante positiva es la única transformación admisible.|F|Admite cualquier transformación lineal (a + b·y, con b > 0), no solo la proporcional."
    ],
    q: [
      "En Celsius, 20 °C es el doble que 10 °C. En Fahrenheit son 68 °F y 50 °F. ¿Cuánto vale ese mismo cociente?|1,36|2|1,5|68 / 50 = 1,36: el cociente cambia al cambiar de unidad, así que en una escala de intervalo no tiene significado.",
      "Un tiempo de reacción es de 600 ms y otro de 300 ms. ¿Qué afirmación es legítima?|Que el primero es el doble|Solo que el primero es mayor|Solo que son distintos|El tiempo de reacción es de razón: tiene cero absoluto y los cocientes tienen sentido.",
      "¿Qué estadístico es adecuado para una variable ordinal, pero no para una nominal?|La mediana|La moda|La media|La mediana requiere orden; la moda vale ya para la nominal, y la media exige al menos escala de intervalo.",
      "Con F = 32 + 1,8 · C, ¿qué temperatura en Fahrenheit corresponde a 25 °C?|77 °F|45 °F|57 °F|1,8 · 25 = 45, y 45 + 32 = 77 °F. Olvidar sumar 32 da 45; sumar 32 sin multiplicar da 57."
    ],
    inc: [
      "Sobre las escalas de Stevens|En la de intervalo tienen sentido los cocientes|En la ordinal se conserva el orden de los valores|La de razón tiene un cero absoluto|Los cocientes solo tienen sentido con cero absoluto (razón); en la de intervalo cambian al cambiar de unidad."
    ],
    seq: [
      "Escalas de Stevens, de menos a más información|Nominal>Ordinal>De intervalo>De razón"
    ],
    cls: [
      "Escala de cada ejemplo|Nominal: estado civil; lateralidad; diagnóstico|Ordinal: nivel de estudios; puesto en una carrera|De razón: tiempo de reacción; número de errores; temperatura en kelvin"
    ] },
  { t: "Tipos de variables según la información que aportan",
    tip: "Las variables categóricas (nominales) no tienen orden; las cuasicuantitativas (ordinales) tienen orden, pero no distancias iguales; las cuantitativas o métricas (intervalo o razón) pueden ser discretas o continuas. Una categórica es dicotómica o politómica, y dicotomizar una cuantitativa pierde información. SPSS agrupa intervalo y razón en la opción «Escala».",
    v: [
      "Variable categórica=Medida en escala nominal; sus valores son categorías sin orden",
      "Variable cuasicuantitativa=Medida en escala ordinal; con orden pero sin distancias iguales",
      "Variable cuantitativa=Medida en escala de intervalo o de razón; valores con significado de cantidad",
      "Variable discreta=Solo toma valores aislados, sin valores intermedios posibles",
      "Variable continua=Entre dos valores cualesquiera siempre hay otros posibles",
      "Variable dicotómica=Categórica con solo dos categorías",
      "Variable politómica=Categórica con más de dos categorías",
      "Dicotomizar=Convertir una cuantitativa en dos categorías, con pérdida de información"
    ],
    g: [
      "El número de ataques de pánico en un mes es una variable cuantitativa ___.|discreta|continua|ordinal",
      "En SPSS, la opción «Escala» de la columna Medida agrupa las escalas de intervalo y de ___.|razón|ordinal|nominal",
      "Las variables medidas en escala ordinal se denominan ___.|cuasicuantitativas|cuantitativas discretas|cualitativas",
      "El tiempo de reacción es una variable continua, aunque en la práctica se registre con una ___ limitada.|precisión|escala|frecuencia",
      "«Tipo de tratamiento: A, B o C» es una variable categórica ___.|politómica|dicotómica|ordinal"
    ],
    tf: [
      "Una variable discreta es lo mismo que una variable categórica.|F|La discreta es cuantitativa (p. ej., número de hijos); la categórica es nominal, sin significado de cantidad.",
      "Dicotomizar las horas de sueño en «menos de 6 horas: sí o no» supone perder información.|V",
      "En jamovi, el tipo de medida se elige entre Nominal, Ordinal y Continuous.|V",
      "Las horas de sueño son una variable discreta porque se registran con una precisión limitada.|F|La variable en sí es continua; la precisión limitada del registro no la convierte en discreta."
    ],
    q: [
      "¿Qué variable es cuantitativa discreta?|Número de errores en una tarea|Horas de sueño por noche|Nivel de estudios alcanzado|El número de errores solo toma valores enteros; las horas de sueño son continuas y el nivel de estudios es ordinal.",
      "En la clasificación del temario, «aprobado o suspenso» es una variable…|categórica dicotómica|cuantitativa discreta|categórica politómica|Es una variable categórica con dos categorías, es decir, dicotómica.",
      "Un investigador declara en SPSS como «Escala» la comunidad autónoma de residencia, codificada de 1 a 17. ¿Qué error comete?|Tratar como métrica una variable nominal|Tratar como ordinal una variable métrica|Tratar como discreta una variable continua|Los códigos son una convención: la comunidad autónoma es nominal, y su «media» no tendría significado.",
      "¿Qué ocurre al dicotomizar una variable cuantitativa?|Se pierde información|Se gana precisión|Se convierte en continua|Pasar de muchos valores a dos categorías (p. ej., «menos de 6 horas: sí o no») descarta información."
    ],
    inc: [
      "Sobre los tipos de variables|Las cuasicuantitativas tienen distancias iguales|Las cuantitativas pueden ser discretas o continuas|Las categóricas se describen con frecuencias|Las cuasicuantitativas (ordinales) tienen orden, pero no distancias iguales entre sus valores."
    ],
    seq: [],
    cls: [
      "Variable cuantitativa discreta o continua|Discreta: número de hijos; número de errores; ataques de pánico al mes|Continua: tiempo de reacción; peso; horas de sueño"
    ] },
  { t: "Papel metodológico: dependientes, independientes y extrañas",
    tip: "La VI es la que se manipula o cuyo efecto se estudia; la VD, la que se mide. Una variable extraña relacionada con la VI se convierte en variable de confusión, porque su efecto se mezcla con el de la VI. Las técnicas de control son eliminación, constancia, equilibración, aleatorización y control estadístico; la aleatorización es la más potente porque reparte también lo no previsto.",
    v: [
      "Variable independiente=La que se manipula o cuyo efecto se quiere estudiar",
      "Variable dependiente=La que se mide para ver si cambia en función de la VI",
      "Variable de confusión=Variable extraña relacionada con la VI cuyo efecto se mezcla con el suyo",
      "Constancia=Mantener la variable igual para todos, como evaluar a la misma hora",
      "Equilibración=Repartir la variable por igual entre las condiciones",
      "Aleatorización=Asignar al azar para repartir en promedio incluso lo no previsto",
      "Variable predictora=La que se usa para pronosticar en un estudio no experimental",
      "Variable criterio=La que se pronostica en un estudio no experimental"
    ],
    g: [
      "Medir la ansiedad previa al tratamiento e incluirla en el análisis es un ejemplo de control ___.|estadístico|experimental|por constancia",
      "Los valores de una variable independiente se llaman niveles o ___.|condiciones|criterios|indicadores",
      "Asignar el mismo número de hombres y mujeres a cada grupo es una técnica de ___.|equilibración|constancia|eliminación",
      "Aislar del ruido la sala de evaluación es una técnica de control por ___.|eliminación|constancia|aleatorización",
      "En un estudio no experimental, en lugar de VI se prefiere hablar de variable ___.|predictora|criterio|extraña"
    ],
    tf: [
      "La aleatorización es la técnica de control más potente porque reparte también las variables extrañas no previstas.|V",
      "Toda variable extraña es una variable de confusión.|F|Solo es confusora si además está relacionada con la VI y su efecto se mezcla con el de esta.",
      "Evaluar a todos los participantes a la misma hora es una técnica de equilibración.|F|Mantener la variable igual para todos es constancia; la equilibración la reparte por igual entre condiciones.",
      "Llamar «independiente» a una variable en un estudio no experimental puede sugerir una causalidad que el diseño no permite.|V"
    ],
    q: [
      "Los pacientes en terapia se evalúan por la mañana y los de lista de espera, por la tarde. ¿Qué es la hora de evaluación?|Una variable de confusión|Una variable de control|Una variable dependiente|La hora está relacionada con la VI (el tratamiento) y su efecto se mezcla con el de esta: es una variable de confusión.",
      "Se mide el nivel de estrés para pronosticar el rendimiento académico, sin manipular nada. ¿Qué término se prefiere para el rendimiento?|Variable criterio|Variable dependiente|Variable predictora|Sin manipulación se prefiere hablar de predictora (el estrés) y criterio (el rendimiento) para no sugerir causalidad.",
      "¿Por qué la aleatorización es la técnica de control más potente?|Reparte también lo que no se ha previsto|Elimina por completo las variables extrañas|Mantiene constantes todas las variables|Al asignar al azar, en promedio se reparten por igual incluso las variables extrañas que el investigador no previó.",
      "Se asigna al azar a 80 estudiantes a un programa de higiene del sueño o a un grupo de control, y se registra su nota en un examen. ¿Qué papel tiene la nota?|Variable dependiente|Variable independiente|Variable de control|La nota se mide para ver si cambia según el grupo, que es la VI manipulada."
    ],
    inc: [
      "Sobre las técnicas de control|La equilibración mantiene la variable igual para todos|La constancia evalúa a todos en las mismas condiciones|La aleatorización sortea la condición de cada participante|Mantener la variable igual para todos es la constancia; la equilibración la reparte por igual entre condiciones."
    ],
    seq: [],
    cls: [
      "Papel de cada variable en el estudio del programa de sueño|VI: grupo (programa o control)|VD: número de despertares; horas de sueño; nota del examen|Extraña: sexo; curso"
    ] }
] },

{ n: 4, t: "Población, muestra y validez", cap: 1, pir: "media", mods: [
  { t: "Población y muestra, parámetros y estadísticos",
    tip: "La población (N) es el conjunto al que se quieren aplicar las conclusiones; la muestra (n), el subconjunto estudiado, que debe ser representativo. Los parámetros describen la población y se escriben con letras griegas (μ, σ, π, ρ); los estadísticos se calculan en la muestra y se escriben con letras latinas (x̄, s, p, r). El parámetro es fijo y suele ser desconocido; el estadístico cambia de una muestra a otra, y esa diferencia debida al azar es el error muestral.",
    v: [
      "Población=Conjunto completo de elementos al que se quieren aplicar las conclusiones",
      "Muestra=Subconjunto de la población que se estudia, de tamaño n",
      "Representatividad=Parecido de la muestra a la población en las características relevantes",
      "Parámetro=Valor numérico que describe a la población, con letra griega",
      "Estadístico=Valor numérico calculado en la muestra, con letra latina",
      "Error muestral=Diferencia entre estadístico y parámetro debida al azar de la selección",
      "μ=Símbolo de la media poblacional",
      "ρ=Símbolo de la correlación en la población"
    ],
    g: [
      "La desviación típica de la población se representa con ___.|σ|s|μ",
      "La proporción muestral se representa con ___.|p|π|ρ",
      "El parámetro es un valor fijo, normalmente ___.|desconocido|calculado|aleatorio",
      "Si se extraen diez muestras de la misma población se obtienen, por azar, diez ___ distintas.|medias muestrales|medias poblacionales|desviaciones de población",
      "La inferencia recorre el camino de los ___ a los parámetros.|estadísticos|estratos|muestreos"
    ],
    tf: [
      "El estadístico es un valor fijo, mientras que el parámetro cambia de una muestra a otra.|F|Es al revés: el parámetro es fijo (y suele ser desconocido); el estadístico varía de una muestra a otra.",
      "La correlación en la población se representa con ρ, y en la muestra, con r.|V",
      "La media muestral x̄ es un parámetro, ya que describe el centro de los datos.|F|x̄ es un estadístico: se calcula en la muestra y se escribe con letra latina; la media poblacional es μ.",
      "Casi nunca se estudia a toda la población, por coste, por tiempo o porque es infinita o cambiante.|V"
    ],
    q: [
      "¿Qué par de símbolos corresponde a un parámetro y a su estadístico, en ese orden?|π y p|p y π|μ y s|π es la proporción poblacional y p la muestral; μ se estima con x̄, no con s.",
      "En una encuesta a 300 estudiantes de Psicología, el 40 % declara insomnio. Ese 40 % es…|un estadístico, p|un parámetro, π|un parámetro, p|Se calcula en la muestra, así que es un estadístico y se escribe con letra latina, p.",
      "¿Qué es el error muestral?|Diferencia entre estadístico y parámetro por azar|Sesgo por un procedimiento de selección defectuoso|Diferencia entre dos poblaciones distintas|Es la diferencia debida solo al azar de la selección; el sesgo, en cambio, es un error sistemático.",
      "¿Qué ocurre con la media muestral si se extraen varias muestras de la misma población?|Varía de una muestra a otra|Coincide siempre con μ|Permanece fija y desconocida|El estadístico cambia de una muestra a otra; lo fijo (y normalmente desconocido) es el parámetro."
    ],
    inc: [
      "Sobre parámetros y estadísticos|El parámetro varía de una muestra a otra|El estadístico se escribe con letra latina|El parámetro suele ser desconocido|Lo que varía de una muestra a otra es el estadístico; el parámetro es un valor fijo de la población."
    ],
    seq: [],
    cls: [
      "Parámetro o estadístico|Parámetro: μ; σ; π; ρ|Estadístico: x̄; s; p; r"
    ] },
  { t: "Muestreo probabilístico",
    tip: "En el muestreo probabilístico todos los elementos tienen una probabilidad conocida y distinta de cero de ser elegidos; requiere un marco muestral y es el único que permite calcular el error muestral. Tipos: aleatorio simple, sistemático (k = N / n), estratificado (estratos homogéneos por dentro, se muestrean todos) y por conglomerados (grupos naturales heterogéneos por dentro, se eligen solo algunos).",
    v: [
      "Marco muestral=Lista o registro de los elementos de la población",
      "Aleatorio simple=Todas las muestras posibles de tamaño n tienen igual probabilidad",
      "Muestreo sistemático=Se toma un elemento cada k desde un inicio elegido al azar",
      "Estrato=Subgrupo homogéneo de la población según una variable relevante",
      "Afijación proporcional=Cada estrato aporta a la muestra su mismo porcentaje en la población",
      "Conglomerado=Grupo natural de la población, como un colegio o un hospital",
      "Muestreo polietápico=Selección por conglomerados en varias etapas sucesivas",
      "Muestreo probabilístico=Selección al azar con probabilidad conocida y no nula para cada elemento"
    ],
    g: [
      "Con N = 4 000 y n = 200, el intervalo del muestreo sistemático es k = ___.|20|200|0,05",
      "En el muestreo por conglomerados se eligen al azar ___ completos, no personas.|grupos naturales|estratos homogéneos|marcos muestrales",
      "Los estratos son ___ por dentro y se muestrean todos.|homogéneos|heterogéneos|aleatorios",
      "El muestreo sistemático puede sesgarse si la lista tiene un patrón ___ que coincide con k.|periódico|aleatorio|creciente",
      "Con afijación proporcional, un estrato de 900 personas de una población de 4 000 aporta ___ a una muestra de 200.|45|90|50"
    ],
    tf: [
      "Los conglomerados son homogéneos por dentro y se muestrean todos.|F|Eso describe los estratos; los conglomerados son heterogéneos por dentro y solo se eligen algunos.",
      "El muestreo estratificado garantiza que todos los estratos estén representados y suele reducir el error muestral.|V",
      "Con el mismo tamaño, el muestreo por conglomerados suele tener menos error que el aleatorio simple.|F|Suele tener más error, porque las personas de un mismo conglomerado se parecen entre sí.",
      "El muestreo probabilístico exige disponer de un marco muestral.|V"
    ],
    q: [
      "De una lista de N = 1 200 personas se quiere una muestra sistemática de n = 80. Si el inicio sorteado es el 4, ¿cuál es el tercer elegido?|34|19|12|k = 1 200 / 80 = 15; se eligen el 4, el 19 y el 34. El 19 es el segundo.",
      "Una facultad tiene 1 400 estudiantes de 1.º sobre un total de 4 000. ¿Cuántos de 1.º entrarán en una muestra estratificada proporcional de n = 200?|70|50|140|La fracción de muestreo es 200 / 4 000 = 0,05, y 0,05 · 1 400 = 70. Repartir por igual entre 4 cursos daría 50.",
      "Un equipo sortea 10 colegios de una comunidad y evalúa a todos sus alumnos. ¿Qué muestreo usa?|Por conglomerados|Estratificado|Aleatorio simple|Se eligen al azar grupos naturales completos (colegios), no personas: es muestreo por conglomerados.",
      "¿Qué ventaja principal tiene el muestreo por conglomerados?|Abarata el estudio con poblaciones dispersas|Reduce el error frente al aleatorio simple|Garantiza la presencia de todos los estratos|Es más barato con poblaciones dispersas, pero suele tener más error que un aleatorio simple del mismo tamaño."
    ],
    inc: [
      "Sobre el muestreo probabilístico|El aleatorio simple no necesita marco muestral|En el sistemático se toma un elemento cada k|En el estratificado se muestrean todos los estratos|Todo muestreo probabilístico requiere un marco muestral, una lista de los elementos de la población."
    ],
    seq: [
      "Muestreo sistemático paso a paso|Calcular k dividiendo N entre n>Sortear un punto de partida entre 1 y k>Tomar el elemento de partida>Seguir tomando un elemento cada k"
    ],
    cls: [
      "Estratos o conglomerados|Estratos: homogéneos por dentro; se muestrean todos; suelen reducir el error|Conglomerados: heterogéneos por dentro; se eligen solo algunos; abaratan el estudio"
    ] },
  { t: "Muestreo no probabilístico y tamaño de la muestra",
    tip: "En el muestreo no probabilístico (incidental, por cuotas, bola de nieve, intencional) la probabilidad de cada elemento es desconocida; no invalida un estudio, pero limita la generalización. El error muestral es proporcional a 1 / √n: para reducirlo a la mitad hay que cuadruplicar la muestra. El sesgo, en cambio, no disminuye al aumentar n.",
    v: [
      "Muestreo incidental=Se estudia a quien está disponible, sin intervención del azar",
      "Muestreo por cuotas=Composición fijada como la de la población, eligiendo por conveniencia",
      "Bola de nieve=Cada participante recluta a otros de su entorno",
      "Muestreo intencional=El investigador elige los casos que juzga típicos o informativos",
      "Error muestral aleatorio=Error por el azar de la selección, que baja al aumentar n",
      "Sesgo=Error sistemático por un procedimiento de selección defectuoso",
      "Error típico de la media=Cociente σ / √n, que mide el error de la media muestral",
      "Literary Digest=Encuesta de 1936 con más de dos millones de respuestas que falló por sesgo"
    ],
    g: [
      "Con σ = 15, el error típico de la media vale 3 con n = 25 y ___ con n = 100.|1,5|0,75|0,15",
      "Para reducir a la mitad el error muestral, el tamaño de la muestra debe ___.|cuadruplicarse|duplicarse|reducirse a la mitad",
      "Con poblaciones difíciles de localizar, como personas sin hogar, se usa el muestreo de ___.|bola de nieve|cuotas|conglomerados",
      "El muestreo por cuotas se parece al estratificado, pero sin el ___.|sorteo|tamaño|registro",
      "El margen de error al 95 % de una proporción con p = 0,5 y n = 400 es de unos ± ___ puntos.|4,9|9,8|2,45"
    ],
    tf: [
      "Una muestra muy grande siempre es representativa de la población.|F|El tamaño reduce el error aleatorio, no el sesgo: una muestra enorme pero sesgada sigue siendo sesgada.",
      "El muestreo no probabilístico invalida cualquier estudio que lo utilice.|F|No lo invalida, pero limita la generalización y obliga a describir bien a los participantes.",
      "Con un muestreo de conveniencia, el margen de error calculado no cubre el sesgo.|V",
      "El muestreo no probabilístico es el más frecuente en la investigación psicológica real.|V"
    ],
    q: [
      "Con σ = 20, ¿cuál es el error típico de la media en una muestra de n = 16?|5|1,25|4,47|σ / √n = 20 / 4 = 5. Dividir entre n en vez de entre √n da 1,25; 4,47 es √20.",
      "Una encuesta por muestreo aleatorio busca un margen de ± 5 puntos (e = 0,05) con p = 0,5 al 95 %. ¿Cuántas personas hacen falta?|385|384|400|n = 1,96² · 0,25 / 0,05² = 384,16, y se redondea siempre hacia arriba: 385.",
      "En 1936, el Literary Digest reunió más de dos millones de respuestas y erró su pronóstico electoral. ¿Por qué?|Su muestra estaba sesgada|Su muestra era pequeña|Tuvo mucho error aleatorio|Sus listas sobrerrepresentaban a personas con más recursos: el sesgo no disminuye por mucho que crezca n.",
      "Un investigador recluta a estudiantes de su clase y se asegura de que la mitad sean mujeres, eligiéndolas por conveniencia. ¿Qué muestreo usa?|Por cuotas|Estratificado|Bola de nieve|Fija la composición de la muestra, pero dentro de cada cuota elige por conveniencia, sin sorteo: es muestreo por cuotas."
    ],
    inc: [
      "Sobre el tamaño de la muestra|Aumentar n corrige un muestreo sesgado|El error muestral es proporcional a 1 / √n|El sesgo no disminuye al aumentar n|Un n mayor reduce el error aleatorio, pero no el sesgo de un procedimiento de selección defectuoso."
    ],
    seq: [],
    cls: [
      "Tipo de muestreo|Probabilístico: aleatorio simple; sistemático; estratificado; por conglomerados|No probabilístico: incidental; por cuotas; bola de nieve; intencional"
    ] },
  { t: "Validez de una investigación",
    tip: "Se distinguen cuatro tipos de validez: interna (relación causal entre VI y VD), externa (generalización a personas, contextos y momentos), de constructo (las variables representan los conceptos) y de conclusión estadística. Las amenazas a la validez interna incluyen historia, maduración, medición previa, instrumentación, regresión a la media, selección, mortalidad y expectativas. La validez interna y la externa suelen estar en tensión.",
    v: [
      "Validez interna=Seguridad de que la relación entre VI y VD es causal",
      "Validez externa=Posibilidad de generalizar a otras personas, contextos y momentos",
      "Validez de constructo=Grado en que las variables representan los conceptos teóricos",
      "Validez ecológica=Generalización de los resultados a otros contextos",
      "Historia=Acontecimiento externo que ocurre entre las mediciones",
      "Maduración=Cambios naturales de los participantes con el paso del tiempo",
      "Regresión a la media=Las puntuaciones extremas tienden a ser menos extremas al repetir la medida",
      "Mortalidad experimental=Abandono de participantes, sobre todo si difiere entre grupos"
    ],
    g: [
      "La validez interna es máxima en los experimentos con ___.|asignación aleatoria|muestras muy grandes|contextos naturales",
      "Los procedimientos de simple o doble ciego controlan la amenaza de las ___.|expectativas|instrumentaciones|maduraciones",
      "Si un cuestionario de «ansiedad» mide sobre todo cansancio, falla la validez ___.|de constructo|de conclusión estadística|ecológica",
      "La validez externa referida a otras personas se denomina validez ___.|poblacional|ecológica|temporal",
      "Cambiar el criterio de los evaluadores entre una medición y otra es una amenaza de ___.|instrumentación|regresión a la media|mortalidad"
    ],
    tf: [
      "Aumentar el control de laboratorio mejora a la vez la validez interna y la externa.|F|Suelen estar en tensión: el control aumenta la validez interna pero aleja la situación de la vida real.",
      "La selección es una amenaza típica de los cuasiexperimentos, porque los grupos pueden diferir de partida.|V",
      "La regresión a la media solo aparece si se aplica algún tratamiento entre las mediciones.|F|Ocurre aunque no se haga nada: quienes puntúan extremo tienden a puntuar menos extremo al repetir la medida.",
      "La salida a la tensión entre validez interna y externa es acumular estudios con diseños distintos.|V"
    ],
    q: [
      "Se selecciona a los estudiantes con más ansiedad, se les aplica un taller y, al repetir la medida, su ansiedad ha bajado. Sin grupo de control, ¿qué amenaza es más evidente?|Regresión a la media|Mortalidad experimental|Instrumentación|Quienes se eligen por puntuaciones extremas tienden a puntuar menos extremo al repetir la medida, aunque no se haga nada.",
      "Un programa de seis meses para niños de 7 años mejora sus habilidades motoras, que también habrían mejorado al crecer. ¿Qué amenaza es?|Maduración|Historia|Selección|Los cambios naturales de los participantes con el paso del tiempo (crecimiento) constituyen la maduración.",
      "Abandonan el estudio sobre todo los participantes del grupo de tratamiento que no mejoran. ¿Qué amenaza aparece?|Mortalidad experimental|Regresión a la media|Efecto de la medición previa|El abandono de participantes, sobre todo si es distinto entre grupos, es la mortalidad experimental.",
      "¿Cómo se llama la validez referida a generalizar los resultados a otros momentos?|Externa temporal|Externa ecológica|Interna por historia|La validez temporal o histórica forma parte de la externa; la «historia» es, en cambio, una amenaza a la validez interna."
    ],
    inc: [
      "Sobre los tipos de validez|La validez interna depende de la representatividad|La de constructo depende de la operacionalización|La validez externa incluye la ecológica|La interna depende del control; la representatividad de la muestra condiciona sobre todo la validez externa."
    ],
    seq: [],
    cls: [
      "Tipo de validez afectado|Interna: historia; maduración; selección; regresión a la media|Externa: muestra de conveniencia; situación artificial de laboratorio|Conclusión estadística: baja potencia; medida poco fiable; p-hacking"
    ] }
] }
);

// SAIMAP Psicología · Fundamentos de Estadística · Unidades 5–8
window.COURSE.units.push(
{ n: 5, t: "Describir variables categóricas", cap: 2, pir: "baja", mods: [
  { t: "La distribución de frecuencias",
    tip: "El primer paso de la estadística descriptiva es contar cuántas veces aparece cada categoría. La distribución de frecuencias asocia a cada categoría su frecuencia absoluta (nᵢ), su proporción (pᵢ, que es nᵢ / n) y su porcentaje. Las categorías deben ser exhaustivas y mutuamente excluyentes, y en una variable nominal el orden de las filas es arbitrario.",
    v: [
      "Matriz de datos=Tabla con un participante por fila y una variable por columna",
      "Distribución de frecuencias=Tabla que asocia a cada categoría el número de veces que aparece",
      "Frecuencia absoluta=Número de casos que pertenecen a una categoría",
      "Frecuencia relativa=Parte del total que representa una categoría, nᵢ / n",
      "Porcentaje=Proporción de una categoría multiplicada por 100",
      "Exhaustividad=Propiedad de un sistema de categorías en el que todo caso cabe en alguna",
      "Exclusión mutua=Propiedad por la que ningún caso puede pertenecer a dos categorías",
      "Suma de las proporciones=Total de la columna pᵢ, que siempre vale 1"
    ],
    g: [
      "La proporción de una categoría se obtiene dividiendo nᵢ entre ___.|n|100|nₐ",
      "Si 12 de 48 personas eligen una categoría, su porcentaje es ___.|25 %|0,25 %|12 %",
      "En una variable nominal, el orden de las filas de la tabla es ___.|arbitrario|ascendente|obligatorio",
      "Si los porcentajes redondeados suman 100,1, conviene ___ en una nota.|indicarlo|corregirlo|ocultarlo",
      "En los textos científicos se suele dar el porcentaje junto con la frecuencia ___.|absoluta|acumulada|esperada"
    ],
    tf: [
      "Que los porcentajes redondeados de una tabla sumen 99,9 indica un error de cálculo.|F|Es efecto del redondeo; no es un error, aunque conviene indicarlo en una nota.",
      "La suma de las frecuencias absolutas de todas las categorías es igual al tamaño de la muestra.|V",
      "La proporción y el porcentaje expresan la misma información en distinta escala.|V",
      "En una variable nominal, las filas deben seguir el orden de los códigos numéricos asignados.|F|El orden es arbitrario; suele ordenarse de mayor a menor frecuencia, con «Otros» al final."
    ],
    q: [
      "De 40 personas atendidas, 6 presentan un trastorno obsesivo-compulsivo. ¿Cuál es la frecuencia relativa de esa categoría?|0,15|15|0,06|pᵢ = nᵢ / n = 6 / 40 = 0,15. El valor 15 es el porcentaje, y 0,06 resulta de dividir entre 100 en lugar de entre n.",
      "En una muestra de 50 personas, una categoría tiene pᵢ = 0,36. ¿Cuántos casos tiene?|18|36|14|nᵢ = pᵢ · n = 0,36 · 50 = 18; 36 confunde el porcentaje con el número de casos.",
      "Un investigador clasifica a los pacientes en «ansiedad», «depresión», «trastorno emocional» y «otros». ¿Qué pauta incumple?|La exclusión mutua de las categorías|La exhaustividad de las categorías|El orden natural de las categorías|Un mismo paciente podría caber en «trastorno emocional» y en otra categoría: las categorías se solapan.",
      "Sin redondeo, ¿cuánto suma la columna de porcentajes de una distribución de frecuencias?|100|1|n|Σ%ᵢ = 100; la suma de las proporciones es 1 y la de las frecuencias absolutas, n."
    ],
    inc: [
      "Sobre la distribución de frecuencias de una variable categórica|Las proporciones de todas las categorías suman 100|Las frecuencias absolutas suman el tamaño de la muestra|Las categorías deben ser exhaustivas y excluyentes|Las proporciones suman 1; son los porcentajes los que suman 100."
    ],
    seq: [],
    cls: [] },
  { t: "Variables ordinales, frecuencias acumuladas y moda",
    tip: "Cuando las categorías tienen orden, pueden acumularse frecuencias: la frecuencia acumulada de una categoría suma sus casos y los de todas las inferiores. En una variable nominal acumular no tiene sentido. La moda es la categoría más frecuente, no su frecuencia, y es el único índice de tendencia central aplicable a variables nominales; en las ordinales también puede calcularse la mediana.",
    v: [
      "Frecuencia absoluta acumulada=Casos de una categoría y de todas las inferiores",
      "Porcentaje acumulado=Porcentaje de casos con una categoría o una inferior",
      "Moda=Categoría con mayor frecuencia en la distribución",
      "Distribución bimodal=Distribución con dos categorías de máxima frecuencia",
      "Distribución multimodal=Distribución con varias modas",
      "Mediana en variable ordinal=Categoría que ocupa la posición central de los casos ordenados",
      "Porcentaje válido=Porcentaje calculado excluyendo los datos perdidos",
      "Datos perdidos=Respuestas que faltan porque algunas personas no contestan"
    ],
    g: [
      "Acumular frecuencias solo tiene sentido si las categorías tienen ___.|orden|etiqueta|código",
      "La moda de una variable nominal es una ___, no un número de casos.|categoría|frecuencia|proporción",
      "Si todas las categorías tienen la misma frecuencia, la distribución no tiene ___.|moda|mediana|total",
      "En SPSS, el porcentaje acumulado se calcula sobre los casos ___.|válidos|totales|perdidos",
      "Con frecuencias 6, 20, 14 y 10 en cuatro categorías ordenadas, la frecuencia acumulada de la tercera es ___.|40|14|34"
    ],
    tf: [
      "Decir «la moda es 18» cuando la categoría más frecuente tiene 18 casos es correcto.|F|La moda es la categoría (por ejemplo, «Ansiedad»), no su frecuencia.",
      "La moda es el único índice de tendencia central aplicable a variables nominales.|V",
      "En una variable nominal, la frecuencia acumulada dependería del orden arbitrario en que se escriban las filas.|V",
      "En una tabla con datos perdidos, el porcentaje y el porcentaje válido coinciden.|F|El porcentaje usa el total, incluidos los perdidos; el válido los excluye, así que difieren."
    ],
    q: [
      "50 estudiantes valoran una asignatura: Fácil 6, Normal 20, Difícil 14, Muy difícil 10. ¿Qué porcentaje la considera difícil o muy difícil?|48 %|28 %|80 %|(14 + 10) / 50 = 0,48, es decir, 48 %. El 80 % es el porcentaje acumulado hasta «Difícil», que incluye las categorías inferiores.",
      "Con esos mismos datos (Fácil 6, Normal 20, Difícil 14, Muy difícil 10), ¿cuál es la mediana?|Normal|Difícil|20|Con n = 50, los casos centrales son el 25.º y el 26.º; nₐ pasa de 6 a 26 en «Normal», así que ambos están en esa categoría.",
      "¿En qué variable tiene sentido calcular frecuencias acumuladas?|Nivel de estudios|Motivo de consulta|Lugar de nacimiento|El nivel de estudios es ordinal; el motivo de consulta y el lugar de nacimiento son nominales, sin orden.",
      "Una tabla tiene Ansiedad 18, Depresión 18, Estrés 9 y Otros 5. ¿Qué se puede decir de la moda?|Hay dos: Ansiedad y Depresión|No existe porque hay un empate|Es 18, la frecuencia máxima|Puede haber dos modas (distribución bimodal); y la moda es la categoría, no su frecuencia."
    ],
    inc: [
      "Sobre la moda|Es la frecuencia de la categoría más repetida|Puede haber más de una en la misma distribución|Es el único índice válido para variables nominales|La moda es la categoría más frecuente, no su frecuencia."
    ],
    seq: [],
    cls: [
      "¿Tiene sentido acumular frecuencias?|Sí, variable ordinal: Nivel de satisfacción; Nivel de estudios; Gravedad del síntoma|No, variable nominal: Motivo de consulta; Estado civil; Lugar de nacimiento"
    ] },
  { t: "Diagramas de barras y de sectores",
    tip: "El diagrama de barras representa cada categoría con una barra separada de altura proporcional a su frecuencia; el de sectores divide un círculo en porciones de ángulo pᵢ × 360°. Juzgamos con más precisión longitudes alineadas que ángulos o áreas, por eso las barras son la opción por defecto y los sectores se reservan para pocas categorías y mensajes de «parte de un todo». Para comparar grupos se usan porcentajes dentro de cada grupo.",
    v: [
      "Diagrama de barras=Gráfico con una barra separada por categoría, de altura proporcional a la frecuencia",
      "Diagrama de sectores=Círculo dividido en porciones de ángulo proporcional a la frecuencia relativa",
      "Ángulo del sector=Proporción de la categoría multiplicada por 360°",
      "Barras separadas=Rasgo que indica que entre categorías no hay continuidad",
      "Barras agrupadas o apiladas=Gráficos para comparar la distribución de una variable en varios grupos",
      "Porcentajes dentro del grupo=Base adecuada para comparar grupos de distinto tamaño",
      "Longitud sobre base común=Elemento visual que juzgamos con más precisión que ángulos o áreas",
      "Parte de un todo=Mensaje que mejor comunica el diagrama de sectores"
    ],
    g: [
      "Una categoría con pᵢ = 0,25 ocupa en el diagrama de sectores un ángulo de ___.|90°|25°|45°",
      "En el diagrama de barras de una variable categórica, las barras van ___.|separadas|contiguas|solapadas",
      "En una variable ordinal, las barras deben respetar el ___ natural de las categorías.|orden|color|tamaño",
      "Para comparar el motivo de consulta de hombres y mujeres conviene usar ___ dentro de cada grupo.|porcentajes|frecuencias absolutas|frecuencias acumuladas",
      "Juzgamos con más precisión longitudes alineadas que ___ o áreas.|ángulos|colores|texturas"
    ],
    tf: [
      "El diagrama de sectores permite comparar dos categorías de frecuencia parecida con más precisión que el de barras.|F|Al revés: comparamos mejor longitudes alineadas sobre una base común que ángulos o áreas.",
      "El histograma es un gráfico adecuado para una variable categórica.|F|El histograma es propio de variables cuantitativas; para las categóricas se usan barras o sectores.",
      "Una categoría con el 36 % de los casos ocupa en un diagrama de sectores un ángulo de 129,6°.|V",
      "Para comparar grupos de distinto tamaño se recomiendan porcentajes dentro de cada grupo, no frecuencias absolutas.|V"
    ],
    q: [
      "En una muestra de 30 pacientes, 9 abandonan la terapia. ¿Qué ángulo ocupa esa categoría en un diagrama de sectores?|108°|30°|90°|pᵢ = 9 / 30 = 0,30 y 0,30 × 360° = 108°; 30° toma el porcentaje como si fueran grados.",
      "Hay que representar la frecuencia de ocho motivos de consulta con porcentajes parecidos. ¿Qué gráfico es más adecuado?|Un diagrama de barras|Un diagrama de sectores|Un histograma|Con muchas categorías y diferencias pequeñas, las barras permiten comparar mejor; el histograma es para variables cuantitativas.",
      "¿Por qué se recomienda el diagrama de barras como opción por defecto?|Porque comparamos mejor longitudes que ángulos|Porque muestra mejor la idea de parte de un todo|Porque sus barras deben ir siempre contiguas|El motivo es perceptivo: juzgamos con más precisión longitudes alineadas sobre una base común.",
      "Un estudio compara el motivo de consulta de 200 mujeres y 50 hombres. ¿Qué conviene representar?|Porcentajes dentro de cada sexo|Frecuencias absolutas de cada sexo|Porcentajes sobre el total de 250|Los grupos tienen distinto tamaño: con frecuencias absolutas, cualquier categoría parecería mayor en las mujeres."
    ],
    inc: [
      "Sobre los gráficos para variables categóricas|Las barras de una variable nominal deben ir juntas|El ángulo de cada sector es pᵢ × 360°|Las categorías nominales pueden ordenarse por frecuencia|Las barras van separadas porque entre categorías no hay continuidad; juntas van las del histograma."
    ],
    seq: [],
    cls: [] },
  { t: "Buenas prácticas, un ejemplo histórico y software",
    tip: "Un gráfico mal hecho puede transmitir una conclusión falsa con datos correctos: el eje de un diagrama de barras debe empezar en cero, sin efectos tridimensionales, con los ejes rotulados y el tamaño de la muestra a la vista. Florence Nightingale usó en 1858 un diagrama de área polar para mostrar que la mayoría de los soldados morían de enfermedades prevenibles. En SPSS, las tablas de frecuencias se piden en Analizar, Estadísticos descriptivos, Frecuencias.",
    v: [
      "Eje que empieza en cero=Pauta que evita que diferencias pequeñas parezcan grandes en las barras",
      "Efectos tridimensionales=Recursos de perspectiva que deforman alturas y áreas",
      "Florence Nightingale=Enfermera que en 1858 representó las causas de muerte del ejército británico en Crimea",
      "Diagrama de área polar=Gráfico de cuñas, una por mes, con área proporcional al número de muertes",
      "Categoría «Otros»=Agrupación de las categorías minoritarias en un diagrama de sectores",
      "Generador de gráficos=Opción de SPSS para elaborar gráficos más complejos",
      "Etiquetas de valor=Nombres que deben tener los códigos numéricos antes de interpretar la salida",
      "Título informativo=Rótulo que dice qué muestra el gráfico, no solo el nombre de la variable"
    ],
    g: [
      "En un diagrama de barras, el eje vertical debe empezar en ___.|cero|la media|el mínimo",
      "Nightingale mostró que la mayoría de los soldados morían de enfermedades infecciosas ___.|prevenibles|incurables|hereditarias",
      "En el diagrama de Nightingale, cada cuña corresponde a un ___.|mes|regimiento|hospital",
      "En SPSS, las tablas de frecuencias se obtienen en Analizar, Estadísticos descriptivos, ___.|Frecuencias|Explorar|Descriptivos",
      "Con n = 4, cada persona supone ___ puntos porcentuales.|25|4|40"
    ],
    tf: [
      "Cortar el eje vertical de un diagrama de barras exagera visualmente las diferencias pequeñas.|V",
      "Un porcentaje transmite la misma información sea cual sea el tamaño de la muestra.|F|«El 50 % mejoró» puede ser 2 de 4 o 200 de 400; por eso se informa también de n o de la frecuencia absoluta.",
      "Los efectos tridimensionales mejoran la precisión con la que se leen las alturas de las barras.|F|La perspectiva y el 3D deforman las alturas y las áreas; se desaconsejan.",
      "El gráfico de Nightingale contribuyó a impulsar reformas sanitarias en el ejército británico.|V"
    ],
    q: [
      "Dos barras valen 48 y 52, pero el eje vertical empieza en 46. ¿Cuántas veces más alta parece la segunda barra?|3 veces|1,08 veces|2 veces|Se ven 52 − 46 = 6 y 48 − 46 = 2 unidades: parece el triple, aunque en realidad es solo un 8 % mayor.",
      "En un estudio con 5 participantes, ¿cuántos puntos cambia un porcentaje si una sola persona pasa de una categoría a otra?|20|5|1|Con n = 5 cada persona vale 100 / 5 = 20 puntos: con muestras pequeñas, un solo caso cambia mucho el porcentaje.",
      "¿Qué representaba el área de cada cuña en el diagrama de Nightingale?|El número de muertes del mes|El porcentaje de heridos del año|La duración de cada campaña|Cada cuña corresponde a un mes y su área es proporcional al número de muertes.",
      "Antes de interpretar una tabla de frecuencias en SPSS, ¿qué conviene comprobar?|Que los códigos tengan sus etiquetas|Que la variable esté definida como escala|Que el eje vertical empiece en cero|Hay que verificar que la variable sea nominal u ordinal y que los códigos numéricos tengan sus etiquetas."
    ],
    inc: [
      "Sobre las buenas prácticas en gráficos|El color debe bastar para distinguir la información|Los ejes deben indicar la variable y la unidad|El tamaño de la muestra debe estar a la vista|No hay que depender solo del color: debe ser distinguible también por personas con daltonismo."
    ],
    seq: [],
    cls: [
      "Pautas al elaborar un gráfico|Recomendable: Eje vertical desde cero; Ejes rotulados; Tamaño de la muestra a la vista; Título informativo|Desaconsejable: Efectos tridimensionales; Eje vertical cortado; Muchas categorías en sectores; Depender solo del color"
    ] }
] },

{ n: 6, t: "Tablas de frecuencias con intervalos y cuantiles", cap: 2, pir: "media", mods: [
  { t: "Agrupar en intervalos",
    tip: "Cuando una variable cuantitativa toma muchos valores distintos, se agrupa en intervalos. Con datos enteros, los límites exactos están medio punto por debajo y por encima de los aparentes; la amplitud es su diferencia y el punto medio representa a todos los casos del intervalo. Agrupar tiene un coste: se pierde información, y los cálculos con datos agrupados son aproximaciones.",
    v: [
      "Límites aparentes=Valores que se escriben en la tabla para delimitar un intervalo",
      "Límites exactos=Límites que cierran el hueco entre intervalos consecutivos",
      "Amplitud del intervalo=Diferencia entre los límites exactos superior e inferior",
      "Marca de clase=Centro del intervalo, que representa a todos sus casos en los cálculos",
      "Notación [10, 15)=Intervalo que incluye el 10 y excluye el 15",
      "Número recomendado de intervalos=Entre 5 y 15, según el tamaño de la muestra",
      "Pérdida de información=Coste de agrupar: se desconoce el valor exacto de cada caso",
      "Supuesto de reparto uniforme=Suposición de que los casos se distribuyen por igual dentro del intervalo"
    ],
    g: [
      "Con datos enteros, el intervalo 15–19 tiene como límites exactos 14,5 y ___.|19,5|19|20",
      "La amplitud del intervalo [20, 30) es ___.|10|9|11",
      "Con datos enteros, el punto medio del intervalo 30–39 es ___.|34,5|35|34",
      "Usar demasiados intervalos vuelve la distribución ___.|irregular|simétrica|uniforme",
      "Los cálculos con datos agrupados dan ___.|aproximaciones|valores exactos|cotas máximas"
    ],
    tf: [
      "Con datos enteros, el intervalo 10–14 tiene una amplitud de 4.|F|La amplitud se calcula con los límites exactos: 14,5 − 9,5 = 5.",
      "En la notación [10, 15), los límites escritos ya son los exactos.|V",
      "Usar muy pocos intervalos puede ocultar la forma de la distribución.|V",
      "Agrupar en intervalos conserva toda la información de los datos originales.|F|Se pierde información: dentro de un intervalo ya no se sabe el valor exacto de cada caso."
    ],
    q: [
      "Con datos enteros, ¿cuál es la amplitud del intervalo 20–24?|5|4|4,5|Límites exactos 19,5 y 24,5: 24,5 − 19,5 = 5. Restar los límites aparentes (24 − 20) es el error típico.",
      "¿Cuál es la marca de clase del intervalo [15, 20)?|17,5|17|15|xᵢ = (15 + 20) / 2 = 17,5; con la notación [Lᵢ, Lₛ) los límites escritos ya son los exactos.",
      "Una variable registra el número de hijos, de 0 a 4. ¿Cómo conviene construir su tabla de frecuencias?|Una fila por valor|Intervalos de amplitud 2|Intervalos de amplitud 5|Con pocos valores distintos, la tabla se construye como la de una variable ordinal: una fila por valor.",
      "¿Qué supuesto subyace a los cálculos con datos agrupados?|Que los casos se reparten uniformemente en él|Que los casos coinciden con el límite inferior|Que la variable sigue una distribución normal|Se supone un reparto uniforme dentro de cada intervalo; por eso los resultados son aproximaciones."
    ],
    inc: [
      "Sobre el intervalo 10–14 con datos enteros|Su amplitud es 14 − 10 = 4|Sus límites exactos son 9,5 y 14,5|Su punto medio es 12|La amplitud se calcula con los límites exactos: 14,5 − 9,5 = 5."
    ],
    seq: [],
    cls: [] },
  { t: "Histograma, polígono de frecuencias y ojiva",
    tip: "El histograma es el gráfico de una variable cuantitativa agrupada: barras juntas sobre una escala numérica, en las que el área representa la frecuencia. El polígono de frecuencias une puntos situados sobre los puntos medios de los intervalos y sirve para superponer grupos. La ojiva representa las frecuencias acumuladas sobre los límites superiores exactos y permite leer percentiles de forma aproximada.",
    v: [
      "Histograma=Gráfico de barras contiguas cuya área es proporcional a la frecuencia de cada intervalo",
      "Densidad=Frecuencia dividida por la amplitud del intervalo",
      "Polígono de frecuencias=Línea que une los puntos situados sobre los puntos medios de los intervalos",
      "Ojiva=Gráfico de las frecuencias acumuladas sobre los límites superiores exactos",
      "Intervalo vacío a cada lado=Recurso para cerrar el polígono sobre el eje horizontal",
      "Barras contiguas=Rasgo que refleja que los intervalos se suceden sin huecos",
      "Lectura de percentiles=Uso de la ojiva trazando una horizontal hasta la curva y bajando al eje",
      "Escala numérica horizontal=Eje en el que cada barra ocupa exactamente su intervalo"
    ],
    g: [
      "En el histograma, la frecuencia de cada intervalo la representa el ___ de la barra.|área|color|grosor",
      "Si los intervalos tienen distinta amplitud, la altura de cada barra debe ser la ___.|densidad|frecuencia|proporción",
      "En la ojiva, cada punto se sitúa sobre el límite ___ exacto del intervalo.|superior|inferior|central",
      "El polígono de frecuencias resulta útil para ___ las distribuciones de varios grupos.|superponer|acumular|ordenar",
      "Un intervalo de amplitud 10 con 30 casos tiene una densidad de ___.|3|30|300"
    ],
    tf: [
      "La ojiva siempre es creciente, empieza en 0 % y termina en 100 %.|V",
      "En la ojiva, los puntos se sitúan sobre los puntos medios de los intervalos.|F|Se sitúan sobre los límites superiores exactos; sobre los puntos medios se sitúa el polígono de frecuencias.",
      "Si todos los intervalos tienen la misma amplitud, en el histograma basta con la altura de las barras.|V",
      "En el histograma las barras van separadas, igual que en el diagrama de barras.|F|Van juntas, porque los intervalos son contiguos y la variable es continua."
    ],
    q: [
      "En una tabla de ansiedad (n = 120), los intervalos [20, 25) y [25, 30) tienen 35 y 39 casos. ¿Qué porcentaje puntúa entre 20 y 30?|61,7 %|74 %|32,5 %|(35 + 39) / 120 = 0,617, es decir, 61,7 %; 74 es la frecuencia absoluta y 32,5 % corresponde a un solo intervalo.",
      "Con datos enteros, ¿sobre qué valor del eje se sitúa en la ojiva el punto del intervalo 10–14?|14,5|12|14|La ojiva usa el límite superior exacto (14,5); 12 es el punto medio, propio del polígono de frecuencias.",
      "En una ojiva, la línea del 50 % corta la curva en 25. ¿Qué indica?|Que la mediana es 25|Que la moda es 25|Que el 25 % está por debajo|Trazar una horizontal desde el 50 % hasta la curva y bajar al eje da la mediana (P₅₀).",
      "Un investigador quiere comparar en un mismo gráfico la distribución de ansiedad de tres grupos. ¿Qué gráfico es más útil?|Varios polígonos superpuestos|Tres diagramas de sectores|Un diagrama de barras separadas|El polígono de frecuencias permite superponer varias distribuciones en un mismo gráfico."
    ],
    inc: [
      "Sobre los gráficos de variables cuantitativas agrupadas|La ojiva puede decrecer si un intervalo está vacío|El histograma representa la frecuencia con el área|El polígono se cierra con un intervalo vacío a cada lado|La ojiva acumula frecuencias, así que nunca decrece; un intervalo vacío solo la deja plana."
    ],
    seq: [],
    cls: [
      "Gráfico según el tipo de variable|Variable categórica: Diagrama de barras; Diagrama de sectores|Variable cuantitativa agrupada: Histograma; Polígono de frecuencias; Ojiva"
    ] },
  { t: "Percentiles, cuartiles y deciles",
    tip: "Los cuantiles dividen la distribución ordenada en partes con el mismo número de casos. El percentil k es la puntuación que deja por debajo el k % de los casos; cuartiles y deciles son percentiles concretos, y la mediana es P₅₀. Con datos sin agrupar, el método de SPSS calcula la posición k · (n + 1) / 100 e interpola si tiene decimales; con datos agrupados se interpola dentro del intervalo crítico.",
    v: [
      "Cuantiles=Valores que dividen la distribución ordenada en partes con igual número de casos",
      "Percentil k=Puntuación que deja por debajo el k % de los casos",
      "Primer cuartil (Q₁)=Valor que deja por debajo la cuarta parte de los casos",
      "Tercer cuartil (Q₃)=Valor que deja por debajo el 75 % de los casos",
      "Deciles=Valores que dividen la distribución en diez partes con igual número de casos",
      "Mediana=Cuantil que equivale a Q₂, D₅ y P₅₀",
      "Intervalo crítico=Primer intervalo cuya frecuencia acumulada alcanza k · n / 100",
      "Posición del percentil=Lugar del dato buscado, k · (n + 1) / 100 en el método de SPSS"
    ],
    g: [
      "En total hay ___ percentiles.|99|100|101",
      "El tercer cuartil equivale al percentil ___.|75|25|33",
      "Con n = 19 datos ordenados, P₂₅ ocupa la posición ___ según el método de SPSS.|5|4,75|4",
      "El decil 3 equivale al percentil ___.|30|3|33",
      "Un percentil es una ___, no un porcentaje.|puntuación|frecuencia|proporción"
    ],
    tf: [
      "Si P₉₀ = 32,8, el 90 % de las personas tiene 32,8 puntos o menos.|V",
      "Con los mismos datos, SPSS, R y Excel dan por defecto el mismo valor para un percentil.|F|Hay varios métodos: SPSS usa por defecto el promedio ponderado y R o Excel otro, con resultados algo distintos.",
      "Las diferencias entre métodos de cálculo de percentiles aumentan con el tamaño de la muestra.|F|Son pequeñas y se reducen al aumentar n.",
      "La mediana coincide con el segundo cuartil y con el quinto decil.|V"
    ],
    q: [
      "Datos ordenados: 10, 12, 15, 17, 20, 22, 25. ¿Cuánto vale P₄₀ con el método de SPSS?|15,4|15,2|17|Posición 40 · 8 / 100 = 3,2: entre 15 y 17, P₄₀ = 15 + 0,2 · (17 − 15) = 15,4. 15,2 olvida multiplicar por la diferencia.",
      "Con 15 puntuaciones de estrés ordenadas (12, 15, 18, 21, 23, 23, 25, 27, 28, 30, 31, 34, 36, 41, 47), ¿cuánto vale P₆₀ con el método de SPSS?|29,2|28,6|30|Posición 60 · 16 / 100 = 9,6: entre 28 y 30, P₆₀ = 28 + 0,6 · (30 − 28) = 29,2.",
      "Una tabla tiene intervalos de amplitud 5 desde 10 y n = 120, con nₐ de 6, 25, 60, 99, 115, 119 y 120. ¿Cuál es el intervalo crítico de P₈₀?|[25, 30)|[30, 35)|[20, 25)|k · n / 100 = 80 · 120 / 100 = 96; la primera nₐ que alcanza 96 es 99, la del cuarto intervalo, [25, 30).",
      "En un grupo, P₃₀ = 22,6. ¿Qué significa?|El 30 % puntúa 22,6 o menos|El 22,6 % puntúa 30 o menos|El 30 % acierta 22,6 ítems|El percentil es una puntuación: 22,6 deja por debajo el 30 % de los casos."
    ],
    inc: [
      "Sobre los cuantiles|Q₁ deja por debajo el 75 % de los casos|D₁ equivale al percentil 10|La mediana equivale a P₅₀|Q₁ (P₂₅) deja por debajo el 25 % de los casos; el 75 % lo deja Q₃."
    ],
    seq: [
      "Calcular un percentil con datos sin agrupar (método de SPSS)|Ordenar los datos de menor a mayor>Calcular la posición k · (n + 1) / 100>Localizar los dos datos vecinos de esa posición>Interpolar con la parte decimal de la posición"
    ],
    cls: [] },
  { t: "Rango percentil y diagrama de tallo y hojas",
    tip: "El rango percentil es la operación inversa del percentil: dada una puntuación, indica qué porcentaje de casos queda por debajo. Percentiles y rangos percentiles son la base de los baremos, pero forman una escala ordinal: en el centro de la distribución pocos puntos separan percentiles alejados y en las colas ocurre lo contrario. El diagrama de tallo y hojas muestra la forma de la distribución sin perder los valores originales.",
    v: [
      "Rango percentil=Porcentaje de casos que queda por debajo de una puntuación dada",
      "Baremo=Tabla para interpretar una puntuación comparándola con un grupo normativo",
      "Grupo normativo=Grupo de referencia con el que se compara la puntuación de una persona",
      "Carácter ordinal de los percentiles=Distancias iguales en percentiles no equivalen a distancias iguales en puntos",
      "Diagrama de tallo y hojas=Representación que agrupa los datos conservando sus valores originales",
      "Tallo=Dígitos iniciales de cada dato, por ejemplo las decenas",
      "Hoja=Último dígito de cada dato, por ejemplo las unidades",
      "Explorar (SPSS)=Cuadro desde el que se genera el diagrama de tallo y hojas"
    ],
    g: [
      "El rango percentil es la operación ___ del percentil.|inversa|idéntica|complementaria",
      "En el diagrama de tallo y hojas, el último dígito de cada dato es la ___.|hoja|raíz|base",
      "En una distribución normal, pasar del percentil 50 al 60 exige ___ puntos que pasar del 90 al 99.|menos|más|tantos",
      "Con cientos de datos, el diagrama de tallo y hojas resulta poco ___.|manejable|preciso|ordenado",
      "Si el tallo 3 tiene las hojas 0, 4 y 6 (decenas y unidades), el mayor de esos datos es ___.|36|63|3,6"
    ],
    tf: [
      "Estar en el percentil 80 de un test significa haber acertado el 80 % de las preguntas.|F|El percentil indica la posición relativa respecto a un grupo de referencia, no la proporción de aciertos.",
      "Promediar percentiles como si fueran puntuaciones es correcto porque forman una escala de intervalo.|F|Los percentiles son una escala ordinal: distancias iguales en percentiles no son distancias iguales en puntos.",
      "El diagrama de tallo y hojas permite localizar la mediana sin perder información.|V",
      "Con un rango percentil de 63, una persona supera aproximadamente al 63 % del grupo.|V"
    ],
    q: [
      "En una tabla de ansiedad (n = 120), hay 60 casos acumulados antes del intervalo [25, 30). ¿Cuál es el rango percentil de x = 25?|50|25|60|RP = (60 / 120) · 100 = 50: x está en el límite inferior, así que no suma casos del intervalo. 60 es la frecuencia acumulada.",
      "En esa misma tabla, el intervalo [25, 30) tiene 39 casos y la nₐ anterior es 60 (n = 120). ¿Cuál es el RP de x = 30?|82,5|99|39|Al final del intervalo se han acumulado 60 + 39 = 99 casos: (99 / 120) · 100 = 82,5. 99 es la frecuencia, no el porcentaje.",
      "Una persona acierta el 50 % de los ítems de un test difícil y su rango percentil es 80. ¿Cómo se interpreta?|Supera al 80 % de su grupo|Ha acertado el 80 % de los ítems|Está 30 puntos sobre la media|El rango percentil indica posición relativa: puede acertar la mitad y superar al 80 % si la mayoría acierta menos.",
      "En una distribución normal, ¿qué exige recorrer más puntos?|Pasar del percentil 90 al 99|Pasar del percentil 50 al 60|Ambos exigen lo mismo|En el centro hay muchos casos por punto y los percentiles están juntos; en las colas, más separados."
    ],
    inc: [
      "Sobre el diagrama de tallo y hojas|Es especialmente útil con muestras muy grandes|Conserva los valores originales de los datos|Girado 90°, muestra la forma de la distribución|Es útil con muestras pequeñas o medianas; con cientos de datos resulta poco manejable."
    ],
    seq: [],
    cls: [] }
] },

{ n: 7, t: "Tendencia central", cap: 2, pir: "media", mods: [
  { t: "La media aritmética",
    tip: "La media aritmética es la suma de los valores dividida entre el número de casos (x̄ en la muestra, μ en la población) y exige una variable cuantitativa. Con datos agrupados se aproxima representando cada caso por el punto medio de su intervalo. Al combinar grupos de distinto tamaño hay que usar la media ponderada, en la que cada media pesa según su número de casos.",
    v: [
      "Índice de tendencia central=Valor que resume dónde se sitúa el centro de una distribución",
      "Media aritmética=Suma de los valores dividida entre el número de casos",
      "Símbolo μ=Media de la población",
      "Símbolo x̄=Media de la muestra",
      "Media con datos agrupados=Aproximación que representa cada caso por el punto medio de su intervalo",
      "Media ponderada=Media en la que cada grupo pesa según su número de casos",
      "Promedio simple de medias=Cálculo que da a un grupo pequeño el mismo peso que a uno grande",
      "Requisito de la media=Variable cuantitativa, en escala de intervalo o de razón"
    ],
    g: [
      "La media de 3, 5, 6 y 10 es ___.|6|5,5|8",
      "Dos grupos de 20 y 30 personas tienen medias de 10 y 15; la media conjunta es ___.|13|12,5|14",
      "La media poblacional se representa con la letra ___.|μ|σ|ρ",
      "Con datos agrupados, cada caso se representa por el ___ de su intervalo.|punto medio|límite inferior|límite superior",
      "La media ponderada y el promedio simple de medias coinciden si todos los grupos tienen el mismo ___.|tamaño|rango|origen"
    ],
    tf: [
      "Si un grupo de 10 personas tiene media 12 y otro de 40 tiene media 22, la media conjunta es 17.|F|Cada media pesa según su número de casos: (10 · 12 + 40 · 22) / 50 = 20; 17 es el promedio simple.",
      "La media calculada con datos agrupados coincide exactamente con la de los datos originales.|F|Es una aproximación: en el ejemplo de ansiedad da 24,83 frente a 24,28 con los datos originales.",
      "Para calcular una media, la variable debe medirse en escala de intervalo o de razón.|V",
      "Si 8 personas suman en total 40 despertares, su media es de 5 despertares.|V"
    ],
    q: [
      "Un centro tiene dos grupos de terapia: 10 pacientes con media 12 en bienestar y 30 con media 20. ¿Cuál es la media global?|18|16|20|(10 · 12 + 30 · 20) / 40 = 720 / 40 = 18; 16 es el promedio simple, que ignora el tamaño de los grupos.",
      "Cinco pacientes faltan a 1, 2, 2, 4 y 6 sesiones. ¿Cuál es la media de faltas?|3|2|3,75|x̄ = 15 / 5 = 3; 3,75 resulta de dividir entre n − 1 = 4, un error típico.",
      "Una tabla agrupada tiene 4 casos en [0, 10) y 6 casos en [10, 20). ¿Cuál es la media aproximada?|11|10|7,5|x̄ ≈ (4 · 5 + 6 · 15) / 10 = 110 / 10 = 11: cada caso se representa por el punto medio de su intervalo.",
      "¿Qué problema tiene usar el promedio simple de las medias de grupos de distinto tamaño?|El grupo pequeño pesa igual que el grande|El grupo grande pesa más que el pequeño|Se obtiene siempre la mediana global|El promedio simple da a cada media el mismo peso, sin tener en cuenta su número de casos."
    ],
    inc: [
      "Sobre la media aritmética|Puede calcularse en variables nominales codificadas con números|Su versión poblacional se representa con μ|Con datos agrupados se obtiene de forma aproximada|Exige una variable cuantitativa (intervalo o razón); los códigos de una variable nominal son solo etiquetas."
    ],
    seq: [],
    cls: [] },
  { t: "Propiedades de la media",
    tip: "La suma de las desviaciones respecto a la media es cero: la media es el punto de equilibrio de los datos. La suma de las desviaciones al cuadrado respecto a ella es mínima, base de la varianza y de los mínimos cuadrados. Si a cada dato se le suma una constante, la media aumenta en ella; si se multiplica, la media queda multiplicada. Como usa todos los datos, es sensible a los atípicos; la media recortada reduce esa sensibilidad.",
    v: [
      "Desviación respecto a la media=Diferencia entre un dato y la media, xᵢ − x̄",
      "Punto de equilibrio=Interpretación de la media, pues las desviaciones respecto a ella suman cero",
      "Propiedad de mínimos cuadrados=Ningún valor da menor suma de desviaciones al cuadrado que la media",
      "Transformación lineal=Cambio de los datos a la forma a + b · X",
      "Media recortada=Media calculada tras eliminar un porcentaje de casos en cada extremo",
      "Sensibilidad a los atípicos=Inconveniente de la media por depender de la magnitud de todos los datos",
      "Eficiencia de la media=Ventaja que se deriva de que usa todos los datos",
      "Media recortada al 5 %=Versión que SPSS ofrece en el cuadro Explorar"
    ],
    g: [
      "La suma de las desviaciones respecto a la media siempre vale ___.|cero|uno|n",
      "Si x̄ = 4 y se aplica Y = 2 + 3 · X, la nueva media es ___.|14|12|18",
      "La propiedad de mínimos cuadrados de la media es la base de la ___.|varianza|mediana|moda",
      "En los datos 2, 4, 6 y 8, la desviación del 8 respecto a la media es ___.|3|4|−3",
      "Para reducir la sensibilidad a los atípicos se usa la media ___.|recortada|ponderada|agrupada"
    ],
    tf: [
      "La suma de las desviaciones al cuadrado es menor respecto a la mediana que respecto a la media.|F|Es mínima respecto a la media: con los despertares, 32 respecto a la media frente a 34 respecto a la mediana.",
      "Si a cada dato se le suman 10 puntos, la media aumenta en 10 puntos.|V",
      "Multiplicar todos los datos por 3 deja la media sin cambios.|F|La media queda multiplicada por 3: si Y = b · X, entonces ȳ = b · x̄.",
      "Un solo valor extremo puede desplazar la media por encima de casi todos los datos.|V"
    ],
    q: [
      "Las desviaciones respecto a la media de cuatro datos son −2, −1, 0 y un cuarto valor. ¿Cuál es ese valor?|3|1|−3|Las desviaciones respecto a la media suman cero: −2 − 1 + 0 + 3 = 0.",
      "Las notas de un grupo tienen x̄ = 6. El profesor multiplica todas por 1,5 y después suma 1. ¿Cuál es la nueva media?|10|7,5|10,5|ȳ = 1 + 1,5 · 6 = 10; 10,5 resulta de sumar antes de multiplicar, (6 + 1) · 1,5.",
      "Datos: 3, 4, 5, 6 y 32. Si se elimina un caso por cada extremo, ¿cuánto vale la media recortada?|5|10|4,5|Se eliminan el 3 y el 32 y se promedian 4, 5 y 6: 15 / 3 = 5. La media sin recortar es 50 / 5 = 10.",
      "¿Por qué la media es sensible a los valores atípicos?|Porque usa la magnitud de todos los datos|Porque solo depende de los datos centrales|Porque se basa en el valor más frecuente|Al usar todos los datos, un valor extremo arrastra la suma y, con ella, la media."
    ],
    inc: [
      "Sobre las propiedades de la media|Sumar 5 a todos los datos multiplica la media por 5|Las desviaciones respecto a ella suman cero|Minimiza la suma de desviaciones al cuadrado|Sumar una constante aumenta la media en esa constante: ȳ = a + x̄."
    ],
    seq: [],
    cls: [] },
  { t: "Mediana y moda",
    tip: "La mediana es el valor central de los datos ordenados (P₅₀): con n impar es el dato de la posición (n + 1) / 2 y con n par, la media de los dos datos centrales. Solo exige que los datos se puedan ordenar y es resistente a los extremos. La moda es el valor más frecuente: sirve con cualquier escala, puede no ser única o no existir y es poco estable en muestras pequeñas.",
    v: [
      "Mediana=Valor que deja la mitad de los casos ordenados por debajo y la mitad por encima",
      "Resistencia=Propiedad de un índice poco afectado por los valores extremos",
      "Posición central con n impar=Lugar (n + 1) / 2 de los datos ordenados",
      "Moda=Valor más frecuente de la distribución",
      "Intervalo modal=Intervalo con mayor frecuencia en una tabla agrupada",
      "Distribución amodal=Distribución en la que ningún valor se repite",
      "Distribución bimodal=Distribución con dos valores o zonas de máxima frecuencia",
      "Inestabilidad de la moda=Cambio del valor más frecuente al modificar un solo dato en muestras pequeñas"
    ],
    g: [
      "La mediana de 3, 7, 8, 12 y 20 es ___.|8|10|11,5",
      "La mediana de 2, 5, 6, 9, 11 y 15 es ___.|7,5|8,5|6",
      "La mediana solo exige que los datos se puedan ___.|ordenar|sumar|promediar",
      "En una tabla agrupada, el intervalo de mayor frecuencia se llama intervalo ___.|modal|mediano|crítico",
      "Una distribución bimodal suele indicar que se han mezclado dos ___ distintos.|grupos|índices|métodos"
    ],
    tf: [
      "La mediana es la media de los dos valores extremos de la distribución.|F|Es el valor central de los datos ordenados; con n par, la media de los dos datos centrales.",
      "Cambiar el dato mayor por otro mucho más extremo no altera la mediana.|V",
      "La moda solo puede calcularse en variables nominales.|F|Es el único índice válido para nominales, pero puede usarse con cualquier escala.",
      "Ante una distribución bimodal, conviene analizar los grupos por separado.|V"
    ],
    q: [
      "Tiempos de reacción ordenados (ms): 300, 320, 340, 360 y 900. ¿Qué índice describe mejor el caso típico y cuánto vale?|La mediana, 340 ms|La media, 444 ms|La moda, 900 ms|La media (2 220 / 5 = 444 ms) está arrastrada por el 900; la mediana, 340 ms, es resistente. No hay moda.",
      "Número de sesiones de 7 pacientes: 4, 6, 6, 6, 8, 9, 10. ¿Cuáles son la mediana y la moda?|Md 6 y Mo 6|Md 8 y Mo 3|Md 7 y Mo 6|Con n = 7 la mediana ocupa la posición 4 (un 6); el 6 aparece tres veces, así que Mo = 6, no su frecuencia, 3. 7 es la media.",
      "¿En cuál de estas variables es la mediana el índice habitual de tendencia central?|Nivel de estudios|Grupo sanguíneo|Lugar de residencia|La mediana exige poder ordenar: es la habitual en variables ordinales; las otras dos son nominales.",
      "Datos: 2, 4, 4, 4, 5, 5, 7, 9. ¿Qué ocurre si el 9 se convierte en 41?|La mediana no cambia|La moda pasa a ser 41|La mediana sube a 5|La mediana depende de la posición de los datos, no de su magnitud; la media, en cambio, pasaría de 5 a 9."
    ],
    inc: [
      "Sobre la mediana y la moda|La moda de una distribución siempre es única|La mediana es el percentil 50|La mediana sirve para variables ordinales|La moda puede no ser única (bimodal, multimodal) o incluso no existir."
    ],
    seq: [],
    cls: [] },
  { t: "Elegir el índice: escala de medida y forma de la distribución",
    tip: "El primer criterio es la escala: en nominales solo la moda; en ordinales, la mediana; en intervalo o razón, la media si la distribución es simétrica y la mediana si es asimétrica o hay atípicos. La media se desplaza hacia la cola larga: en la asimetría positiva, Mo < Md < x̄, y en la negativa, x̄ < Md < Mo (regla orientativa). Conviene informar del centro junto con un índice de variabilidad coherente.",
    v: [
      "Asimetría positiva=Forma con la cola larga hacia la derecha",
      "Asimetría negativa=Forma con la cola larga hacia la izquierda",
      "Distribución simétrica unimodal=Distribución en la que media, mediana y moda coinciden",
      "Índice para escala nominal=La moda, único aplicable",
      "Índice habitual en escala ordinal=La mediana, que solo exige ordenar los datos",
      "Media con desviación típica=Pareja de centro y variabilidad para distribuciones simétricas",
      "Comparar media y mediana=Pista rápida sobre la asimetría de una distribución",
      "Ítem tipo Likert=Ítem de respuesta graduada cuya media es objeto de debate"
    ],
    g: [
      "En la asimetría positiva, la media es ___ que la mediana.|mayor|menor|igual",
      "Los tiempos de reacción suelen tener asimetría ___.|positiva|negativa|nula",
      "Un examen muy fácil suele producir asimetría ___.|negativa|positiva|nula",
      "En las variables nominales, el único índice de tendencia central aplicable es la ___.|moda|mediana|media",
      "La mediana se informa junto con la amplitud ___.|intercuartil|total|relativa"
    ],
    tf: [
      "En una distribución con asimetría negativa, lo habitual es que x̄ < Md < Mo.|V",
      "El orden Mo < Md < x̄ de la asimetría positiva es igual de fiable en distribuciones discretas o multimodales que en las continuas unimodales.|F|Es una regla orientativa para distribuciones unimodales y continuas; en discretas o multimodales puede no cumplirse.",
      "Calcular la media de un único ítem tipo Likert es una práctica aceptada sin discusión.|F|Es un debate abierto: según Stevens sería ordinal; se hace a menudo y se aconseja informar también de la mediana.",
      "Las puntuaciones totales de escalas de muchos ítems suelen describirse con la media y la desviación típica.|V"
    ],
    q: [
      "En una distribución, x̄ = 52, Md = 45 y Mo = 40. ¿Qué forma es más probable?|Asimetría positiva|Asimetría negativa|Simétrica|La media supera a la mediana y esta a la moda (Mo < Md < x̄): la cola larga está a la derecha.",
      "Se describen los ingresos mensuales de 200 familias; unas pocas ganan muchísimo más que el resto. ¿Qué índice conviene?|La mediana|La media|La moda|Los ingresos tienen asimetría positiva: la media se desplaza hacia la cola y la mediana describe mejor el caso típico.",
      "Tiempos (ms): 310, 325, 330, 340, 345, 350, 360, 375, 410 y 655, con x̄ = 380 y Md = 347,5. ¿Cuántos tiempos quedan por debajo de la media?|8|5|9|Solo 410 y 655 superan 380 ms: ocho de diez quedan por debajo, así que la media no describe bien el caso típico.",
      "¿Qué índice es el habitual para una variable de razón con distribución simétrica y sin atípicos?|La media|La mediana|La moda|En intervalo o razón con distribución simétrica se usa la media; con asimetría o atípicos, la mediana."
    ],
    inc: [
      "Sobre la elección del índice de tendencia central|En la asimetría positiva, la media queda por debajo de la mediana|En las variables ordinales, el índice habitual es la mediana|En una distribución simétrica unimodal, los tres índices coinciden|En la asimetría positiva la cola derecha arrastra la media hacia arriba: Mo < Md < x̄."
    ],
    seq: [],
    cls: [
      "Índice habitual según la escala de medida|Moda: Estado civil; Grupo sanguíneo; Motivo de consulta|Mediana: Nivel de estudios; Puesto en una clasificación; Gravedad del síntoma (leve, moderada, grave)|Media: Altura con distribución simétrica; Puntuación total de una escala de 20 ítems"
    ] }
] },

{ n: 8, t: "Variabilidad", cap: 2, pir: "media", mods: [
  { t: "Por qué medir la variabilidad. La amplitud total",
    tip: "Dos grupos pueden tener la misma media y ser muy distintos: la variabilidad indica cuánto se diferencian los datos entre sí o respecto a su centro, y cuanto menor es, mejor representa la media a cada caso. La amplitud total (máximo menos mínimo) es fácil de calcular, pero solo usa dos datos, depende por completo de los extremos y tiende a crecer con el tamaño de la muestra.",
    v: [
      "Variabilidad=Grado en que los datos se diferencian entre sí o respecto a su centro",
      "Dispersión=Otro nombre de la variabilidad de los datos",
      "Amplitud total=Distancia entre el valor máximo y el mínimo",
      "Rango=Otro nombre de la diferencia entre el máximo y el mínimo",
      "Limitación de la amplitud total=Solo usa dos datos y depende por completo de los extremos",
      "Efecto del tamaño muestral=Tendencia de la amplitud total a crecer cuando hay más casos",
      "Índice de variabilidad=Valor que resume cuánto se dispersan los datos",
      "Representatividad de la media=Es mayor cuanto menos se dispersan los datos"
    ],
    g: [
      "La amplitud total de 3, 7, 8, 12 y 15 es ___.|12|15|9",
      "La amplitud total solo usa ___ datos.|dos|tres|cuatro",
      "Con más casos es más probable encontrar extremos, por lo que la amplitud total tiende a ___.|crecer|decrecer|estabilizarse",
      "Cuanto menor es la variabilidad, ___ representa la media a cada caso.|mejor|peor|igual",
      "Dos clases con media 100, una entre 95 y 105 y otra entre 70 y 130, difieren en ___.|variabilidad|tendencia central|tamaño"
    ],
    tf: [
      "Dos grupos con la misma media tienen necesariamente la misma variabilidad.|F|Pueden ser muy distintos: con media 100, un grupo puede ir de 95 a 105 y otro de 70 a 130.",
      "Un índice de tendencia central sin uno de variabilidad da una descripción incompleta.|V",
      "La amplitud total es resistente a los valores atípicos.|F|Depende por completo de los extremos: si el 9 de los despertares fuera un 41, pasaría de 7 a 39.",
      "La amplitud total tiende a aumentar con el tamaño de la muestra.|V"
    ],
    q: [
      "Despertares de 8 personas: 2, 4, 4, 4, 5, 5, 7, 9. Si el 9 fuera en realidad un 41, ¿cuánto valdría la amplitud total?|39|7|32|AT = 41 − 2 = 39; antes valía 9 − 2 = 7. Basta un dato extremo para disparar la amplitud total.",
      "Puntuaciones sin ordenar: 14, 22, 9, 30, 17. ¿Cuál es la amplitud total?|21|16|8|AT = 30 − 9 = 21: se toman el máximo y el mínimo, no los datos según el orden en que aparecen escritos.",
      "¿Por qué la amplitud total es un índice de variabilidad limitado?|Solo usa dos datos, los extremos|Exige que la variable sea ordinal|Da el resultado en unidades al cuadrado|Solo usa el máximo y el mínimo, así que depende por completo de los valores extremos.",
      "Dos clases tienen media 100 en un test; en una las puntuaciones van de 95 a 105 y en la otra de 70 a 130. ¿En cuál representa mejor la media a cada alumno?|En la primera|En la segunda|En las dos por igual|Cuanto menor es la variabilidad, mejor representa la media a cada caso."
    ],
    inc: [
      "Sobre la amplitud total|Es independiente del tamaño de la muestra|Se calcula como máximo menos mínimo|Es fácil de calcular y de entender|Tiende a crecer con n, porque con más casos es más probable encontrar valores extremos."
    ],
    seq: [],
    cls: [] },
  { t: "La amplitud intercuartil",
    tip: "La amplitud intercuartil (AIQ o RIC) es Q₃ − Q₁ y abarca el 50 % central de los datos. Como ignora el 25 % de casos de cada extremo, es resistente a los atípicos: es el índice de variabilidad que acompaña a la mediana y la base del diagrama de caja. Su valor depende del método de cálculo de los cuartiles, sobre todo en muestras pequeñas.",
    v: [
      "Amplitud intercuartil=Distancia entre el tercer y el primer cuartil",
      "Rango intercuartil=Otro nombre de la AIQ, abreviado RIC",
      "50 % central=Parte de los datos que abarca la AIQ",
      "Resistencia de la AIQ=Consecuencia de ignorar el 25 % de casos de cada extremo",
      "Diagrama de caja=Gráfico basado en la amplitud intercuartil",
      "Mediana y AIQ=Pareja de índices de centro y variabilidad coherentes entre sí",
      "Dependencia del método=Variación del RIC según cómo se calculen los cuartiles",
      "Método de SPSS=Promedio ponderado con la posición k · (n + 1) / 100"
    ],
    g: [
      "Si Q₁ = 18 y Q₃ = 30, el RIC vale ___.|12|24|48",
      "La amplitud intercuartil abarca el ___ central de los datos.|50 %|25 %|75 %",
      "El RIC es el índice de variabilidad que acompaña a la ___.|mediana|media|moda",
      "Con muestras grandes, la diferencia entre métodos de cálculo del RIC se vuelve ___.|irrelevante|enorme|negativa",
      "El RIC ignora el ___ de casos de cada extremo.|25 %|50 %|5 %"
    ],
    tf: [
      "Sustituir el dato mayor por un valor muy extremo cambia mucho el RIC.|F|El RIC ignora el 25 % de casos de cada extremo: con los despertares, cambiar el 9 por un 41 no lo altera.",
      "Con los despertares, el método de SPSS da RIC = 2,5 y el método por defecto de R o Excel, 1,5.|V",
      "El RIC es la base del diagrama de caja.|V",
      "La amplitud intercuartil se calcula como Q₃ − Q₂.|F|Es Q₃ − Q₁; Q₂ es la mediana."
    ],
    q: [
      "Datos ordenados: 4, 6, 7, 9, 11, 14, 16. Con el método de SPSS, ¿cuánto vale el RIC?|8|12|7|Q₁ ocupa la posición 25 · 8 / 100 = 2 (6) y Q₃ la posición 6 (14): RIC = 14 − 6 = 8. 12 es la amplitud total.",
      "Horas de sueño ordenadas: 5, 6, 7, 7, 8, 9. ¿Cuánto vale Q₁ con el método de SPSS?|5,75|5,5|6|Posición 25 · 7 / 100 = 1,75: Q₁ = 5 + 0,75 · (6 − 5) = 5,75.",
      "Unos tiempos de reacción tienen varios atípicos muy altos. ¿Qué índice de variabilidad es más adecuado?|El rango intercuartil|La amplitud total|La desviación típica|El RIC prescinde del 25 % de casos de cada extremo, así que los atípicos no le afectan.",
      "Dos programas dan RIC distintos para la misma muestra pequeña. ¿Cuál es la explicación más probable?|Calculan los cuartiles con otro método|Uno divide la varianza entre n − 1|Uno elimina antes los valores atípicos|Los cuantiles dependen del método de cálculo; en muestras pequeñas la diferencia es apreciable."
    ],
    inc: [
      "Sobre la amplitud intercuartil|Usa todos los datos, por lo que es sensible a los atípicos|Abarca el 50 % central de la distribución|Se obtiene restando Q₁ a Q₃|El RIC prescinde del 25 % de casos de cada extremo: es resistente, no sensible, a los atípicos."
    ],
    seq: [],
    cls: [
      "Índices según su resistencia a los atípicos|Resistentes: Mediana; Amplitud intercuartil|Sensibles: Media; Amplitud total; Varianza; Desviación típica"
    ] },
  { t: "Varianza y desviación típica",
    tip: "Las desviaciones respecto a la media suman cero, así que se elevan al cuadrado: la varianza (S²) es su media y la desviación típica (S), su raíz, en las unidades de la variable. La cuasivarianza divide entre n − 1 y se usa para estimar σ²; la versión con n describe la propia muestra. SPSS, jamovi, JASP y R dan por defecto la versión con n − 1, y la notación varía entre manuales.",
    v: [
      "Varianza (S²)=Media de las desviaciones al cuadrado respecto a la media",
      "Desviación típica=Raíz cuadrada de la varianza, en las unidades de la variable",
      "Cuasivarianza=Suma de desviaciones al cuadrado dividida entre n − 1",
      "Varianza insesgada=Versión con n − 1, que estima σ² sin sesgo",
      "Numerador de la varianza=Suma de las desviaciones al cuadrado respecto a la media",
      "Fórmula abreviada=Media de los cuadrados menos el cuadrado de la media",
      "Unidades al cuadrado=Rasgo que dificulta interpretar la varianza",
      "Símbolo σ²=Varianza de la población"
    ],
    g: [
      "Con los datos 1, 3, 5, 7 y 9, la varianza calculada con n vale ___.|8|10|40",
      "Con los datos 1, 3, 5, 7 y 9, la cuasivarianza vale ___.|10|8|9",
      "La desviación típica devuelve el índice a las ___ originales de la variable.|unidades|categorías|frecuencias",
      "SPSS calcula por defecto la desviación típica dividiendo entre ___.|n − 1|n|n + 1",
      "La varianza y la desviación típica valen cero solo si todos los datos son ___.|iguales|positivos|enteros"
    ],
    tf: [
      "La varianza calculada con n está mal; la correcta es siempre la de n − 1.|F|Ambas son correctas para fines distintos: con n se describe la muestra y con n − 1 se estima σ² sin sesgo.",
      "La desviación típica puede ser negativa si muchos datos están por debajo de la media.|F|La varianza y la desviación típica son siempre ≥ 0, porque las desviaciones se elevan al cuadrado.",
      "Con n = 100, la cuasivarianza es solo un 1 % mayor que la varianza calculada con n.|V",
      "El símbolo S² indica por sí solo que la varianza se ha calculado dividiendo entre n.|F|La notación no coincide: algunos usan S² para la versión con n − 1, así que hay que comprobar el denominador."
    ],
    q: [
      "Datos: 1, 3, 5, 7, 9, con Σxᵢ² = 165 y x̄ = 5. ¿Cuánto vale la varianza con S² = Σxᵢ² / n − x̄²?|8|33|10|165 / 5 = 33 y 33 − 5² = 8. 33 olvida restar x̄²; 10 sería la cuasivarianza, 40 / 4.",
      "En una muestra de n = 5, S² = 4. ¿Cuánto vale la cuasivarianza?|5|3,2|4|s²ₙ₋₁ = S² · n / (n − 1) = 4 · 5 / 4 = 5; 3,2 resulta de multiplicar por (n − 1) / n, al revés.",
      "SPSS da «Desv. típ. = 1,414» para unas horas de sueño, pero a mano se obtuvo S = 1,291. ¿Qué ocurre?|SPSS divide entre n − 1|Hay un error en el cálculo a mano|SPSS usa la amplitud intercuartil|No hay contradicción: es la misma variabilidad, calculada con n − 1 en lugar de con n.",
      "La suma de desviaciones al cuadrado de 4 datos es 36. ¿Cuál es la desviación típica calculada con n?|3|9|3,46|S² = 36 / 4 = 9 y S = √9 = 3. 9 es la varianza; 3,46 es la raíz de la cuasivarianza (√12)."
    ],
    inc: [
      "Sobre la varianza y la desviación típica|La varianza está en las mismas unidades que la variable|La desviación típica es la raíz de la varianza|Ambas son sensibles a los valores atípicos|La varianza está en unidades al cuadrado; la desviación típica devuelve el índice a las unidades originales."
    ],
    seq: [
      "Calcular a mano la desviación típica (con n)|Calcular la media>Obtener la desviación de cada dato>Elevar al cuadrado cada desviación>Sumar los cuadrados>Dividir entre n>Extraer la raíz cuadrada"
    ],
    cls: [] },
  { t: "Coeficiente de variación y transformaciones lineales",
    tip: "El coeficiente de variación expresa la desviación típica como porcentaje de la media y permite comparar la variabilidad de variables con distintas unidades o medias; solo tiene sentido en variables de razón con media positiva. Sumar una constante no cambia la amplitud, el RIC, la varianza ni la desviación típica; multiplicar por b multiplica la desviación típica por el valor absoluto de b y la varianza por b².",
    v: [
      "Coeficiente de variación=Desviación típica expresada como porcentaje de la media",
      "Requisito del CV=Variable de razón con media positiva",
      "Sumar una constante=Transformación que desplaza la distribución sin alterar las distancias",
      "Multiplicar por una constante=Transformación que multiplica las distancias entre los datos",
      "Varianza tras multiplicar por b=Varianza original multiplicada por b²",
      "S tras multiplicar por b=Desviación típica original por el valor absoluto de b",
      "Cambio de horas a minutos=Multiplica media y desviación típica por 60, y varianza por 3 600",
      "Cero arbitrario=Rasgo de la escala de intervalo que quita sentido al CV"
    ],
    g: [
      "Si S = 3 y x̄ = 12, el coeficiente de variación es ___.|25 %|4 %|36 %",
      "Si S = 4 y se aplica Y = 10 + 2 · X, la nueva desviación típica es ___.|8|18|16",
      "Si la varianza es 9 y todos los datos se multiplican por 2, la nueva varianza es ___.|36|18|11",
      "Sumar una constante a todos los datos deja la varianza ___.|sin cambios|aumentada|reducida",
      "El CV solo tiene sentido en variables de ___ con media positiva.|razón|intervalo|orden"
    ],
    tf: [
      "Sumar 10 puntos a todos los datos aumenta la desviación típica en 10.|F|Sumar una constante desplaza la distribución sin cambiar las distancias: la desviación típica no cambia.",
      "Si Y = 5 − 3 · X y S(X) = 4, entonces S(Y) = 12.|V",
      "Multiplicar todos los datos por 3 multiplica la varianza por 3.|F|La varianza se multiplica por b² = 9; es la desviación típica la que se multiplica por 3.",
      "En una escala de intervalo, el CV cambia con solo desplazar el origen de la escala.|V"
    ],
    q: [
      "En una tarea, el tiempo de reacción tiene x̄ = 400 ms y S = 60 ms; los errores, x̄ = 5 y S = 2. ¿Qué variable es relativamente más variable?|Los errores (CV de 40 %)|El tiempo (CV de 15 %)|Ninguna, porque los CV son iguales|CV = 60 / 400 · 100 = 15 % frente a 2 / 5 · 100 = 40 %: aunque 60 es mayor que 2, los errores varían más.",
      "Unos despertares tienen x̄ = 5 y S = 2. Si se aplica Y = 50 + 10 · X, ¿cuáles son la nueva media y la nueva varianza?|100 y 400|100 y 40|55 y 400|ȳ = 50 + 10 · 5 = 100; S²(Y) = 10² · 4 = 400. Multiplicar por 10 multiplica la varianza por 100.",
      "Una variable medida en horas tiene S = 1,5. ¿Cuál es su desviación típica en minutos?|90|1,5|5 400|Pasar de horas a minutos multiplica la desviación típica por 60: 1,5 · 60 = 90. Por 3 600 se multiplicaría la varianza.",
      "Unas puntuaciones tienen x̄ = 5 y S = 2 (CV de 40 %). Si se suman 10 puntos a todas, ¿cuánto vale el nuevo CV?|13,3 %|40 %|60 %|S sigue siendo 2 y la media pasa a 15: 2 / 15 · 100 = 13,3 %. Por eso el CV no tiene sentido si el cero es arbitrario."
    ],
    inc: [
      "Sobre las transformaciones lineales Y = a + b · X|Sumar a multiplica el RIC por a|Multiplicar por b multiplica la varianza por b²|Sumar a no altera la desviación típica|Sumar una constante desplaza los datos sin cambiar las distancias: el RIC, como la amplitud y S, no cambia."
    ],
    seq: [],
    cls: [
      "Efecto de sumar una constante a todos los datos|No cambian: Desviación típica; Varianza; Amplitud total; Amplitud intercuartil|Cambian: Media; Mediana; Coeficiente de variación"
    ] }
] }
);

// SAIMAP Psicología · Fundamentos de Estadística · Unidades 9–12
window.COURSE.units.push(
{ n: 9, t: "Forma, puntuaciones típicas y gráficos", cap: 2, pir: "alta", mods: [
  { t: "Asimetría",
    tip: "La forma de una distribución se resume con la asimetría y la curtosis. El signo de la asimetría lo marca el lado de la cola larga: positiva si se alarga hacia los valores altos, negativa si se alarga hacia los bajos. Todos los índices valen 0 con simetría, y el de Fisher (g₁) es el más usado. Un solo atípico puede cambiar mucho el índice, así que siempre hay que mirar el gráfico.",
    v: [
      "Asimetría positiva=Forma con la cola más larga hacia los valores altos",
      "Asimetría negativa=Forma con la cola más larga hacia los valores bajos",
      "Distribución simétrica=Sus dos mitades son imágenes especulares respecto al centro",
      "Efecto techo=Prueba demasiado fácil en la que casi todos se acercan al máximo",
      "Índice de Pearson=Diferencia entre media y moda dividida por la desviación típica",
      "Índice basado en cuartiles=Compara Q₃ − Md con Md − Q₁ y divide entre la amplitud intercuartil",
      "Índice de Fisher (g₁)=Desviaciones al cubo promediadas y divididas por S³; el más usado",
      "Asimetría=Grado en que los datos no se reparten por igual a ambos lados del centro"
    ],
    g: [
      "Si la mayoría puntúa bajo y unos pocos muy alto, la asimetría es ___.|positiva|negativa|nula",
      "El índice de Fisher eleva las desviaciones a la potencia ___, lo que conserva su signo.|tercera|segunda|cuarta",
      "Con x̄ = 12, Mo = 10 y S = 4, el índice de asimetría de Pearson vale ___.|0,5|2|−0,5",
      "Con Q₁ = 20, Md = 24 y Q₃ = 30, el índice de asimetría basado en cuartiles vale ___.|0,2|2|−0,2",
      "Una prueba demasiado fácil produce un efecto ___ y asimetría negativa.|techo|suelo|halo"
    ],
    tf: [
      "La asimetría positiva corresponde a una distribución con la cola larga hacia los valores altos.|V",
      "En una prueba muy fácil, con casi todos cerca del máximo, la asimetría es positiva.|F|La cola se alarga hacia los valores bajos: es asimetría negativa (efecto techo).",
      "Todos los índices de asimetría valen 0 en una distribución simétrica.|V",
      "Un único valor atípico apenas modifica el índice de asimetría de Fisher en una muestra de 20 datos.|F|En un ejemplo con 20 datos, un solo 24 lleva el índice de −0,20 a 1,44; por eso hay que mirar el gráfico."
    ],
    q: [
      "En una tarea, casi todos los tiempos de reacción son rápidos y unos pocos, muy lentos. ¿Qué forma esperas?|Asimetría positiva|Asimetría negativa|Distribución simétrica|La cola se alarga hacia los valores altos (los tiempos lentos), así que la asimetría es positiva.",
      "Con x̄ = 30, Mo = 33 y S = 6, ¿cuánto vale el índice de asimetría de Pearson?|−0,5|0,5|−3|Aₚ = (30 − 33) / 6 = −0,5. Sin dividir por S se obtiene −3; el signo positivo invierte la resta.",
      "SPSS da una asimetría de 1,2 con un error típico de 0,4. Según la práctica extendida, ¿qué se concluye?|Apreciable: el cociente es 3|No apreciable: 1,2 no llega a 1,96|Apreciable: el cociente es 0,33|1,2 / 0,4 = 3, que supera 1,96. Ojo: este criterio depende mucho del tamaño muestral y su uso se debate.",
      "Con Q₁ = 10, Md = 15 y Q₃ = 18, el índice de asimetría basado en cuartiles indica…|asimetría negativa (−0,25)|asimetría positiva (0,25)|simetría perfecta (0)|(18 + 10 − 30) / 8 = −0,25: la mediana está más cerca de Q₃, así que la cola va hacia los valores bajos."
    ],
    inc: [
      "Sobre la asimetría|La asimetría negativa tiene la cola hacia los valores altos|El índice de Fisher (g₁) es el más usado en la práctica|Con asimetría positiva, los índices dan valores positivos|El signo lo marca el lado de la cola larga: con asimetría negativa, la cola se alarga hacia los valores bajos."
    ],
    seq: [],
    cls: [
      "Tipo de asimetría habitual|Positiva: tiempos de reacción; ingresos; número de síntomas en población general|Negativa: prueba demasiado fácil; efecto techo"
    ] },
  { t: "Curtosis",
    tip: "La curtosis compara la forma con la de una normal de igual media y varianza, y refleja sobre todo el peso de las colas, no la altura del pico. El índice de Fisher resta 3 para que la normal valga 0 (exceso de curtosis): g₂ > 0 indica leptocurtosis, g₂ ≈ 0 mesocurtosis y g₂ < 0 platicurtosis. Un solo atípico puede disparar el índice.",
    v: [
      "Curtosis=Grado en que una distribución concentra peso en el centro y las colas respecto a la normal",
      "Leptocúrtica=Más apuntada y con colas más pesadas que la normal",
      "Mesocúrtica=Con el mismo peso de centro y colas que la normal",
      "Platicúrtica=Más aplanada y con colas más ligeras que la normal",
      "Exceso de curtosis=Índice de Fisher al que se resta 3 para que la normal valga 0",
      "Distribución uniforme=Ejemplo de forma aplanada, con un exceso de curtosis de −1,2",
      "Distribución de Laplace=Ejemplo de forma apuntada, con un exceso de curtosis de 3",
      "Error típico del índice=Valor entre el que se divide el índice para juzgar si es apreciable"
    ],
    g: [
      "Una distribución con colas más pesadas que la normal es ___.|leptocúrtica|platicúrtica|mesocúrtica",
      "Para que la normal valga 0, al índice de curtosis de Fisher se le resta ___.|3|1|1,96",
      "Si Σ(xᵢ − x̄)⁴ / (n · S⁴) vale 4,5, el exceso de curtosis g₂ vale ___.|1,5|4,5|−1,5",
      "Hoy se subraya que la curtosis refleja sobre todo el peso de ___.|las colas|el pico|la media",
      "La distribución uniforme tiene un exceso de curtosis de ___, por lo que es platicúrtica.|−1,2|3|0"
    ],
    tf: [
      "Una distribución platicúrtica tiene colas más ligeras que la normal.|V",
      "Un g₂ positivo indica una distribución más aplanada que la normal.|F|g₂ > 0 indica leptocurtosis, con colas más pesadas; la forma aplanada (platicúrtica) da g₂ < 0.",
      "La curtosis refleja ante todo la altura del pico de la distribución.|F|Hoy se subraya que refleja sobre todo el peso de las colas, es decir, la presencia de valores extremos.",
      "Un solo valor atípico puede disparar el índice de curtosis.|V"
    ],
    q: [
      "Si Σ(xᵢ − x̄)⁴ / (n · S⁴) vale 2,4, la distribución es…|platicúrtica (g₂ = −0,6)|leptocúrtica (g₂ = 2,4)|mesocúrtica (g₂ = 0)|g₂ = 2,4 − 3 = −0,6 < 0: platicúrtica. Olvidar restar 3 llevaría a creerla leptocúrtica.",
      "SPSS da una curtosis de 0,9 con un error típico de 0,6. Con el criterio de ±1,96, ¿qué se concluye?|No es apreciable (1,5)|Es apreciable (1,5)|Es apreciable (0,54)|0,9 / 0,6 = 1,5, que no supera 1,96 (0,54 sale de multiplicar). El criterio depende del tamaño muestral y no hay acuerdo.",
      "Al comparar una distribución leptocúrtica, una mesocúrtica y una platicúrtica, ¿qué pueden tener en común?|Media y varianza|Media y curtosis|Varianza y curtosis|La curtosis se define frente a una normal con la misma media y varianza; lo que cambia entre las tres es la curtosis.",
      "En una muestra, un solo dato de 24 lleva la curtosis a 4,15. ¿Qué refleja sobre todo ese valor?|Una cola con un extremo|Un pico central muy alto|Una forma aplanada|La curtosis refleja sobre todo el peso de las colas, y un único atípico puede dispararla."
    ],
    inc: [
      "Sobre la curtosis|La normal tiene un exceso de curtosis de 3|La leptocúrtica tiene g₂ mayor que 0|La platicúrtica tiene colas más ligeras|Al índice de Fisher se le resta 3 precisamente para que la normal valga 0."
    ],
    seq: [],
    cls: [
      "Curtosis según g₂|Leptocúrtica: g₂ mayor que 0; colas pesadas; distribución de Laplace|Mesocúrtica: g₂ próximo a 0; distribución normal|Platicúrtica: g₂ menor que 0; colas ligeras; distribución uniforme"
    ] },
  { t: "Puntuaciones típicas (z) y escalas derivadas",
    tip: "La puntuación z expresa un dato como su distancia a la media en desviaciones típicas: z = (x − x̄) / S. Las z de una muestra tienen media 0 y desviación típica 1, no tienen unidades y conservan la forma de la distribución: tipificar no normaliza. Las escalas derivadas las transforman linealmente: T = 50 + 10 · z y CI = 100 + 15 · z.",
    v: [
      "Puntuación z=Distancia de un dato a la media expresada en desviaciones típicas",
      "Puntuación T=Escala derivada con media 50 y desviación típica 10",
      "Escala de CI=Escala derivada con media 100 y desviación típica 15",
      "z nula=El dato coincide exactamente con la media del grupo",
      "Adimensional=Sin unidades; permite comparar variables medidas en escalas distintas",
      "Tipificar=Restar la media a cada dato y dividir por la desviación típica",
      "Escala derivada=Transformación lineal de z con otra media y otra desviación típica",
      "Puntuación directa=Valor bruto obtenido en la prueba, que aislado dice poco"
    ],
    g: [
      "Con x̄ = 40 y S = 4, una puntuación directa de 46 equivale a z = ___.|1,5|6|−1,5",
      "Una persona con z = −1 tiene una puntuación T de ___.|40|60|49",
      "Con z = 1,5, la puntuación en la escala de CI es ___.|122,5|115|101,5",
      "La desviación típica de las puntuaciones z de una muestra es ___.|1|0|n − 1",
      "Al tipificar, la forma de la distribución ___.|se conserva|se normaliza|se simetriza"
    ],
    tf: [
      "Las puntuaciones z de una muestra tienen media 0 y desviación típica 1.|V",
      "Tipificar una distribución asimétrica la convierte en normal.|F|Es una transformación lineal: conserva la forma. Solo si la original es normal, las z siguen la normal tipificada.",
      "Aunque la distribución no sea normal, z = 1,5 deja por debajo el 93,3 % de los casos.|F|Esa correspondencia entre z y percentil solo vale si la variable se distribuye normalmente.",
      "Al pasar de z a T o a CI, la posición relativa de cada persona no cambia.|V"
    ],
    q: [
      "Una persona saca 46 en memoria (media 40, S 4) y 70 en atención (media 80, S 20). ¿En cuál rinde mejor respecto a su grupo?|En memoria (z = 1,5)|En atención (z = −0,5)|Igual en ambas (z = 1)|z(memoria) = (46 − 40) / 4 = 1,5; z(atención) = (70 − 80) / 20 = −0,5. Las directas llevarían a la conclusión contraria.",
      "En un test con x̄ = 20 y S = 5, ¿qué puntuación directa corresponde a z = −0,4?|18|22|19,6|x = 20 + 5 · (−0,4) = 18. 22 resulta de cambiar el signo y 19,6, de restar z sin multiplicarla por S.",
      "Un paciente obtiene T = 35 en un test. ¿Qué CI equivalente le corresponde?|77,5|85|65|z = (35 − 50) / 10 = −1,5; CI = 100 + 15 · (−1,5) = 77,5. 85 correspondería a z = −1.",
      "Al guardar puntuaciones tipificadas desde Analizar > Estadísticos descriptivos > Descriptivos, ¿qué desviación típica usa SPSS?|sₙ₋₁|S, con n|σ poblacional|SPSS usa sₙ₋₁. Puede usarse S o sₙ₋₁; lo importante es usar la misma en todos los datos."
    ],
    inc: [
      "Sobre las puntuaciones z|Tipificar vuelve simétrica la distribución|Permiten comparar variables con escalas distintas|Su media es 0 y su desviación típica es 1|Tipificar es una transformación lineal y conserva la forma: la asimetría es la misma antes y después."
    ],
    seq: [
      "De la puntuación directa a la puntuación T|Restar la media del grupo>Dividir por la desviación típica>Multiplicar la z por 10>Sumar 50"
    ],
    cls: [] },
  { t: "Diagrama de caja y valores atípicos",
    tip: "El diagrama de caja resume centro, dispersión, asimetría y atípicos. La caja va de Q₁ a Q₃ (su longitud es el RIC) con la mediana dentro; las vallas, Q₁ − 1,5 · RIC y Q₃ + 1,5 · RIC, separan los atípicos, y a más de 3 RIC de la caja están los extremos. Ante un atípico, primero se comprueba si es un error; si es real, no se elimina de forma automática.",
    v: [
      "Caja=Rectángulo entre Q₁ y Q₃ que contiene el 50 % central de los datos",
      "Línea interior=Marca la mediana dentro del rectángulo central",
      "Vallas=Límites no dibujados en Q₁ − 1,5 · RIC y Q₃ + 1,5 · RIC",
      "Bigotes=Líneas que llegan hasta el dato más extremo dentro de las vallas",
      "Valor atípico=Dato a más de 1,5 RIC por debajo de Q₁ o por encima de Q₃",
      "Valor extremo=Dato a más de 3 RIC de la caja, marcado con asterisco en SPSS",
      "Índices resistentes=Mediana, RIC o media recortada, poco afectados por los atípicos",
      "Explorar=Procedimiento de SPSS con descriptivos, cajas, tallo y hojas e histogramas"
    ],
    g: [
      "Con Q₁ = 20 y Q₃ = 30, la valla superior para detectar atípicos está en ___.|45|40|60",
      "Con Q₁ = 12 y Q₃ = 20, la valla inferior está en ___.|0|8|−4",
      "SPSS marca los valores extremos con ___ y los atípicos con un círculo.|un asterisco|un triángulo|una cruz",
      "Si la mediana está cerca de Q₁ y el bigote superior es largo, hay asimetría ___.|positiva|negativa|nula",
      "La longitud de la caja coincide con la amplitud ___.|intercuartil|total|semiintercuartil"
    ],
    tf: [
      "El criterio de valor atípico se aplica con 1,5 RIC desde los cuartiles, no desde la mediana.|V",
      "Los bigotes llegan siempre hasta las vallas.|F|Llegan hasta el dato más extremo que queda dentro de las vallas; las vallas no se dibujan.",
      "Un valor atípico real debe eliminarse siempre antes del análisis.|F|Si no es un error, no se elimina sin más: se analiza con y sin él o se usan índices resistentes.",
      "La caja contiene el 50 % central de los datos.|V"
    ],
    q: [
      "Con Q₁ = 7,75 y Q₃ = 12, ¿cómo se clasifica un dato de 24?|Atípico, pero no extremo|Extremo, pues supera 18,375|Típico, pues no llega a 24,75|RIC = 4,25; valla superior 18,375; límite de extremos 12 + 3 · 4,25 = 24,75. El 24 supera la valla, pero no ese límite.",
      "En un test, Q₁ = 40, Md = 45 y Q₃ = 50. ¿Cómo se clasifica un dato de 28?|Típico: no baja de 25|Atípico: baja de 30|Atípico: baja de 35|RIC = 10; valla inferior = 40 − 15 = 25, y 28 queda dentro. Medir desde la mediana (45 − 15 = 30) es el error típico.",
      "Un participante tiene un tiempo de reacción muy superior al del resto. ¿Qué conviene hacer primero?|Comprobar si es un error|Eliminarlo del análisis|Sustituirlo por la media|Primero se comprueba si es un error de registro o de codificación; si lo es, se corrige. Si es real, no se elimina sin más.",
      "¿Qué indica un diagrama de caja con la mediana centrada y bigotes de longitud parecida?|Simetría aproximada|Asimetría positiva|Ausencia de atípicos|Mediana centrada y bigotes parecidos indican una distribución aproximadamente simétrica."
    ],
    inc: [
      "Sobre el diagrama de caja|Los bigotes acaban en las vallas|La línea interior es la mediana|La caja va de Q₁ a Q₃|Los bigotes llegan al dato más extremo que queda dentro de las vallas, que no se dibujan."
    ],
    seq: [
      "Detectar atípicos con el diagrama de caja|Calcular Q₁ y Q₃>Obtener el RIC>Calcular las vallas con 1,5 · RIC>Marcar como atípicos los datos fuera de las vallas"
    ],
    cls: [] }
] },
{ n: 10, t: "Fundamentos de probabilidad", cap: 3, pir: "baja", mods: [
  { t: "Experimentos aleatorios, espacio muestral y sucesos",
    tip: "Un experimento aleatorio puede repetirse en condiciones análogas, tiene resultados posibles conocidos y no permite predecir cuál saldrá en cada realización. El espacio muestral reúne todos esos resultados, y un suceso es cualquier subconjunto suyo. La unión (A ∪ B) se lee «A o B», la intersección (A ∩ B), «A y B», y dos sucesos son incompatibles si su intersección es vacía.",
    v: [
      "Experimento aleatorio=Repetible, con resultados conocidos pero impredecibles en cada realización",
      "Experimento determinista=Produce siempre el mismo resultado en las mismas condiciones",
      "Espacio muestral=Conjunto de todos los resultados posibles, representado por E u Ω",
      "Suceso elemental=Subconjunto con un único resultado",
      "Suceso seguro=Coincide con el espacio muestral y ocurre siempre",
      "Suceso imposible=No contiene ningún resultado (∅)",
      "Complementario de A=Ocurre cuando no ocurre A; se escribe Ā o A′",
      "Sucesos incompatibles=No pueden ocurrir a la vez; su intersección es vacía"
    ],
    g: [
      "La ___ de A y B ocurre cuando se dan A y B a la vez.|intersección|unión|partición",
      "Con un dado, A = {2, 4, 6} y B = {4, 5, 6}; la intersección A ∩ B es ___.|{4, 6}|{2, 4, 5, 6}|{6}",
      "Con un dado, la unión de «par» y «mayor que 4» contiene ___ resultados.|cuatro|cinco|tres",
      "«Sacar un 2» y «sacar un 5» en una sola tirada son sucesos ___.|incompatibles|independientes|complementarios",
      "«Sacar un 7» con un dado es un suceso ___.|imposible|elemental|compuesto"
    ],
    tf: [
      "«Sacar par» y «sacar más de 4» con un dado son sucesos incompatibles.|F|Comparten el 6, así que su intersección no es vacía.",
      "Un suceso es cualquier subconjunto del espacio muestral.|V",
      "El complementario de «par» al lanzar un dado es {1, 3, 5}.|V",
      "Un experimento es aleatorio si da siempre el mismo resultado en condiciones análogas.|F|Eso define un experimento determinista; en el aleatorio no se puede predecir el resultado de cada realización."
    ],
    q: [
      "Se lanza una moneda dos veces y se anota el resultado de cada lanzamiento. ¿Cuántos sucesos elementales tiene el espacio muestral?|4|2|3|E = {CC, CX, XC, XX}. Anotar solo «cara» o «cruz» da 2, y contar el número de caras (0, 1 o 2) da 3.",
      "Una persona responde a un ítem de tres opciones y se anota la opción elegida. ¿Cuál es el espacio muestral?|{a, b, c}|{acierto, error, omisión}|{a, b}|El espacio muestral reúne todos los resultados posibles del experimento: las tres opciones del ítem.",
      "Con un dado, A = «menor que 3» y B = «impar». ¿Qué es A ∩ B?|{1}|{1, 2, 3, 5}|{1, 2}|A = {1, 2} y B = {1, 3, 5}; solo el 1 está en ambos. {1, 2, 3, 5} es la unión.",
      "Cada paciente de un servicio se clasifica como «con ansiedad» o «sin ansiedad». ¿Qué relación tienen esos dos sucesos?|Incompatibles y complementarios|Independientes y compatibles|Compatibles, pero no complementarios|No pueden darse a la vez y su unión es todo el espacio muestral: uno es el complementario del otro."
    ],
    inc: [
      "Sobre los sucesos|El suceso seguro es el conjunto vacío|La intersección exige que ocurran A y B|La unión de A y B se lee «A o B»|El conjunto vacío (∅) es el suceso imposible; el seguro coincide con el espacio muestral."
    ],
    seq: [],
    cls: [
      "Tipo de suceso al lanzar un dado|Elemental: sacar un 5; sacar un 2|Compuesto: sacar par; sacar más de 4|Imposible: sacar un 7; sacar un 0"
    ] },
  { t: "Tres formas de entender la probabilidad",
    tip: "La probabilidad es un número entre 0 y 1. El enfoque clásico (Laplace) divide casos favorables entre posibles, pero exige resultados equiprobables. El frecuentista la define como el límite de la frecuencia relativa en muchas repeticiones y es el de la inferencia clásica. El subjetivo o bayesiano la entiende como grado de creencia coherente. Los tres obedecen las mismas reglas de cálculo.",
    v: [
      "Enfoque clásico=Casos favorables entre casos posibles, con resultados equiprobables",
      "Enfoque frecuentista=Límite de la frecuencia relativa al repetir muchas veces el experimento",
      "Enfoque subjetivo=Grado de creencia coherente de una persona sobre un suceso",
      "Ley de los grandes números=Estabilización de la frecuencia relativa al aumentar las repeticiones",
      "Pierre-Simon Laplace=Sistematizó el enfoque clásico a principios del siglo XIX",
      "Frecuencia relativa=Cociente entre las veces que ocurre un suceso y las repeticiones",
      "Falacia del jugador=Creer que el azar compensa las rachas a corto plazo",
      "Probabilidad=Número entre 0 y 1 que expresa lo esperable que es un suceso"
    ],
    g: [
      "Con un dado equilibrado, la probabilidad de sacar un múltiplo de 3 es ___.|1/3|1/2|1/6",
      "Si 45 de 300 pacientes de un registro amplio abandonan la terapia, la probabilidad estimada de abandono es ___.|0,15|0,45|0,30",
      "El enfoque ___ es el que usa la estadística inferencial clásica.|frecuentista|clásico|subjetivo",
      "El enfoque clásico exige que los resultados sean ___.|equiprobables|repetibles|independientes",
      "En el enfoque subjetivo, las creencias se actualizan con los datos mediante el teorema de ___.|Bayes|Kolmogórov|Laplace"
    ],
    tf: [
      "El enfoque clásico permite calcular la probabilidad de que un paciente abandone la terapia.|F|Abandonar y no abandonar no tienen por qué ser igual de probables; el enfoque clásico exige simetría.",
      "Con pocas repeticiones, la frecuencia relativa oscila mucho; con muchas, se estabiliza.|V",
      "Tras diez rojos seguidos en una ruleta, es más probable que salga negro.|F|Cada tirada es independiente: es la falacia del jugador. El azar no compensa las rachas a corto plazo.",
      "Los tres enfoques de la probabilidad obedecen las mismas reglas de cálculo.|V"
    ],
    q: [
      "Una clínica estima en un 70 % la probabilidad de que un tratamiento funcione en un paciente concreto. ¿Qué enfoque usa?|Subjetivo|Clásico|Frecuentista|Es un grado de creencia sobre un suceso único, propio del enfoque subjetivo o bayesiano.",
      "Se elige al azar a un participante de una lista de 40, de los que 12 son zurdos. ¿Cuál es la probabilidad de elegir a un zurdo?|0,30|0,12|0,70|Con extracción al azar, los 40 son equiprobables: 12/40 = 0,30. 0,70 es la probabilidad del complementario.",
      "¿Cuál es la principal limitación del enfoque frecuentista?|Exige repetir el experimento|Exige resultados simétricos|Depende de quién la asigna|El frecuentista necesita poder repetir el experimento; la simetría la exige el clásico y la dependencia de quien asigna es del subjetivo.",
      "Con 10 lanzamientos de una moneda salen 7 caras; con 10 000, la proporción de caras es 0,502. ¿Qué ilustra?|La ley de los grandes números|La falacia del jugador en rachas|El axioma de la suma de Kolmogórov|Con muchas repeticiones, la frecuencia relativa se estabiliza en torno a la probabilidad."
    ],
    inc: [
      "Sobre los enfoques de la probabilidad|El frecuentista exige resultados equiprobables|El clásico exige que haya simetría entre resultados|El subjetivo depende de quién la asigna|La equiprobabilidad la exige el enfoque clásico; el frecuentista exige poder repetir el experimento."
    ],
    seq: [],
    cls: [
      "Enfoque de probabilidad en cada caso|Clásico: tirar un dado equilibrado; extraer al azar de una lista|Frecuentista: tasa de abandono en un registro amplio; frecuencia a largo plazo|Subjetivo: confianza de un clínico en un caso único; grado de creencia personal"
    ] },
  { t: "Axiomas y propiedades básicas",
    tip: "Kolmogórov (1933) formuló tres axiomas: P(A) ≥ 0, P(E) = 1 y, si A y B son incompatibles, P(A ∪ B) = P(A) + P(B). De ellos se deducen la acotación entre 0 y 1, P(∅) = 0, la regla del complementario, P(Ā) = 1 − P(A), y la monotonía. El complementario simplifica cálculos del tipo «al menos uno».",
    v: [
      "Andréi Kolmogórov=Formuló en 1933 la probabilidad como teoría basada en tres axiomas",
      "Primer axioma=La probabilidad de cualquier suceso es no negativa",
      "Segundo axioma=El suceso seguro tiene probabilidad 1",
      "Tercer axioma=Con sucesos incompatibles, la probabilidad de la unión es la suma",
      "Acotación=Toda probabilidad está entre 0 y 1",
      "Regla del complementario=La probabilidad de que no ocurra A es 1 menos P(A)",
      "Monotonía=Si A está incluido en B, P(A) no supera P(B)",
      "P(∅)=Probabilidad del suceso imposible, que vale 0"
    ],
    g: [
      "Si P(A) = 0,30, la probabilidad de su complementario es ___.|0,70|0,30|1,30",
      "Al lanzar dos dados, P(ningún 6) = ___.|25/36|5/6|11/36",
      "Al lanzar dos dados, P(al menos un 6) es aproximadamente ___.|0,306|0,333|0,167",
      "Por la propiedad de ___, «sacar un 6» no puede ser más probable que «sacar par».|monotonía|acotación|complementariedad",
      "Kolmogórov formuló sus axiomas de la probabilidad en ___.|1933|1763|1951"
    ],
    tf: [
      "Los axiomas de Kolmogórov solo son válidos en el enfoque frecuentista.|F|Son válidos para cualquiera de los tres enfoques: clásico, frecuentista y subjetivo.",
      "La probabilidad del suceso imposible es 0.|V",
      "Si A está incluido en B, entonces P(A) ≤ P(B).|V",
      "El tercer axioma establece que P(A ∪ B) = P(A) + P(B) para dos sucesos cualesquiera.|F|Solo vale para sucesos incompatibles; si comparten resultados hay que restar la intersección."
    ],
    q: [
      "Un alumno responde al azar dos ítems independientes de tres opciones. ¿Qué probabilidad tiene de acertar al menos uno?|5/9|2/3|1/9|P(ningún acierto) = (2/3) · (2/3) = 4/9; P(al menos uno) = 1 − 4/9 = 5/9. 2/3 suma 1/3 + 1/3 y 1/9 es acertar ambos.",
      "Un cálculo da P(A) = 1,15. ¿Qué indica?|Un error: viola la acotación|Que A es casi seguro|Que A incluye su complementario|Ninguna probabilidad supera 1; suele deberse a sumar sin restar la intersección.",
      "Si P(Ā) = 0,85, ¿cuánto vale P(A)?|0,15|0,85|1,85|P(A) = 1 − P(Ā) = 1 − 0,85 = 0,15.",
      "¿Qué propiedad garantiza que P(sacar un 6) ≤ P(sacar par) con un dado?|La monotonía|El primer axioma|La regla del complementario|{6} está incluido en {2, 4, 6}, así que su probabilidad no puede ser mayor."
    ],
    inc: [
      "Sobre los axiomas y sus propiedades|Un suceso muy raro puede tener P negativa|El suceso seguro tiene probabilidad 1|P(Ā) es igual a 1 menos P(A)|El primer axioma exige P(A) ≥ 0 para cualquier suceso, por raro que sea."
    ],
    seq: [],
    cls: [
      "Axioma o propiedad deducida|Axiomas: P(A) no negativa; P(E) igual a 1; suma de incompatibles|Propiedades: acotación entre 0 y 1; P(∅) igual a 0; regla del complementario; monotonía"
    ] },
  { t: "Regla de la suma e intersección de sucesos",
    tip: "Para dos sucesos cualesquiera, P(A ∪ B) = P(A) + P(B) − P(A ∩ B): se resta la intersección porque, si no, los casos comunes se cuentan dos veces. Si son incompatibles, la intersección vale 0. Con sucesos independientes, P(A ∩ B) = P(A) · P(B). Ojo: dos sucesos incompatibles con probabilidad mayor que cero son dependientes.",
    v: [
      "Regla de la suma=P(A ∪ B) es P(A) más P(B) menos P(A ∩ B)",
      "Intersección=Ocurrencia simultánea de dos sucesos",
      "Unión=Ocurre uno de los sucesos, el otro o ambos",
      "Probabilidad marginal=Probabilidad de un suceso por separado, en los márgenes de la tabla",
      "Casilla interior=Frecuencia conjunta que, dividida por el total, da una intersección",
      "Sucesos independientes=Su probabilidad conjunta coincide con el producto de las de cada uno",
      "Sucesos asociados=Su intersección observada difiere del producto de sus probabilidades",
      "Tabla de doble entrada=Formato habitual de los datos para obtener probabilidades conjuntas"
    ],
    g: [
      "Si P(A) = 0,30, P(I) = 0,25 y P(A ∩ I) = 0,15, P(A ∪ I) vale ___.|0,40|0,55|0,075",
      "Con sucesos incompatibles, P(A ∩ B) vale ___.|0|1|P(A) · P(B)",
      "Una probabilidad de la unión mayor que 1 suele deberse a no restar la ___.|intersección|unión|marginal",
      "Si A y B son independientes, P(A ∩ B) = ___.|P(A) · P(B)|P(A) + P(B)|0",
      "Dos sucesos con probabilidad mayor que cero que son incompatibles son siempre ___.|dependientes|independientes|complementarios"
    ],
    tf: [
      "Dos sucesos incompatibles son, por eso mismo, independientes.|F|Si ocurre uno, el otro no puede ocurrir: conocer uno cambia la probabilidad del otro, así que son dependientes.",
      "En una tabla de doble entrada, las casillas interiores divididas por el total dan las intersecciones.|V",
      "Si P(A) = 0,6 y P(B) = 0,5, la probabilidad de la unión es 1,1.|F|Ninguna probabilidad supera 1: falta restar P(A ∩ B), que aquí vale al menos 0,1.",
      "Si P(A ∩ B) = 0, la regla de la suma se reduce al tercer axioma.|V"
    ],
    q: [
      "En una residencia de 200 estudiantes, 60 tienen ansiedad, 50 insomnio y 30 ambos. ¿Qué proporción tiene exactamente uno de los dos problemas?|0,25|0,40|0,55|Solo ansiedad 30 y solo insomnio 20: 50/200 = 0,25. 0,40 es la unión y 0,55, sumar sin restar.",
      "En esa residencia, P(A) = 0,30, P(I) = 0,25 y P(A ∩ I) = 0,15. ¿Son independientes ansiedad e insomnio?|No: el producto sería 0,075|Sí: la intersección no es 0|No: son incompatibles|Con independencia, P(A ∩ I) sería 0,30 · 0,25 = 0,075; la observada es el doble, así que están asociados.",
      "En un grupo, P(depresión) = 0,20, P(ansiedad) = 0,30 y P(ambas) = 0,10. ¿Qué probabilidad hay de no tener ninguna?|0,60|0,50|0,40|P(D ∪ A) = 0,20 + 0,30 − 0,10 = 0,40; P(ninguna) = 1 − 0,40 = 0,60. 0,50 resulta de no restar la intersección.",
      "Con un dado, ¿cuánto vale P(impar ∪ menor que 3)?|4/6|5/6|3/6|Impar = {1, 3, 5} y menor que 3 = {1, 2}; comparten el 1: 3/6 + 2/6 − 1/6 = 4/6."
    ],
    inc: [
      "Sobre la regla de la suma|Para sucesos compatibles basta sumar P(A) y P(B)|Si son incompatibles, la intersección vale 0|Se resta la intersección para no contarla dos veces|Si comparten resultados, sumar sin restar P(A ∩ B) cuenta dos veces los casos comunes."
    ],
    seq: [],
    cls: [
      "Relación entre sucesos|Incompatibles: P(A ∩ B) igual a 0; sacar un 2 y sacar un 5 en una tirada|Independientes: P(A ∩ B) igual a P(A) · P(B); resultados de dos dados distintos"
    ] }
] },
{ n: 11, t: "Probabilidad condicionada y teorema de Bayes", cap: 3, pir: "media", mods: [
  { t: "Probabilidad condicionada y regla del producto",
    tip: "P(A ∣ B) = P(A ∩ B) / P(B) es la probabilidad de A sabiendo que ha ocurrido B: el espacio muestral se reduce a los casos de B. No es simétrica, y confundir P(A ∣ B) con P(B ∣ A) es la falacia de la inversión de la condicional. Despejando se obtiene la regla del producto, P(A ∩ B) = P(B) · P(A ∣ B), útil en extracciones sucesivas.",
    v: [
      "Probabilidad condicionada=Probabilidad de A sabiendo que ha ocurrido B",
      "Regla del producto=Intersección obtenida como P(B) multiplicada por P(A ∣ B)",
      "Inversión de la condicional=Falacia de confundir P(A ∣ B) con P(B ∣ A)",
      "Sin reposición=Extracción en la que el elegido no vuelve al grupo",
      "Con reposición=Extracción en la que la misma persona puede volver a salir",
      "Espacio muestral reducido=Los casos de B, a los que se limita el cálculo al condicionar",
      "Requisito P(B) > 0=Condición para que P(A ∣ B) esté definida",
      "Extracciones sucesivas=Situación típica en la que se aplica la regla del producto"
    ],
    g: [
      "En la residencia, P(A ∣ I) = 0,15 / 0,25 = ___.|0,60|0,50|0,0375",
      "De los 60 estudiantes con ansiedad, 30 tienen insomnio, así que P(I ∣ A) = ___.|0,50|0,60|0,15",
      "Si P(B) = 0,4 y P(A ∣ B) = 0,5, entonces P(A ∩ B) = ___.|0,20|0,90|0,80",
      "Al elegir dos de 10 personas sin reposición, con 4 de puntuación alta, P(ambas altas) es aproximadamente ___.|0,133|0,160|0,400",
      "La probabilidad condicionada no es ___: P(A ∣ B) suele diferir de P(B ∣ A).|simétrica|aditiva|acotada"
    ],
    tf: [
      "P(A ∣ B) y P(B ∣ A) son siempre iguales.|F|No es simétrica: en la residencia, P(A ∣ I) = 0,60 y P(I ∣ A) = 0,50.",
      "Al condicionar por B, el espacio muestral se reduce a los casos de B.|V",
      "Con reposición, la probabilidad de elegir dos veces a alguien con puntuación alta en un grupo de 10 con 4 altos es 0,16.|V",
      "En extracciones sin reposición, la segunda probabilidad no depende de la primera.|F|Tras sacar a una persona quedan menos casos: la segunda probabilidad cambia (3/9 en lugar de 4/10)."
    ],
    q: [
      "En una clase de 20, 8 tienen ansiedad alta. Se eligen dos sin reposición. ¿Qué probabilidad hay de que ambos tengan ansiedad alta?|0,147|0,160|0,400|(8/20) · (7/19) = 56/380 ≈ 0,147. 0,160 = (8/20)² supondría reposición; 0,400 es solo la primera extracción.",
      "Un 40 % de la muestra recibe terapia (T) y P(mejora ∣ T) = 0,70. ¿Qué proporción del total recibe terapia y mejora?|0,28|0,70|0,57|P(T ∩ M) = 0,40 · 0,70 = 0,28. 0,57 resulta de dividir 0,40 entre 0,70.",
      "En un estudio, P(positivo ∩ trastorno) = 0,06 y P(trastorno) = 0,08. ¿Cuánto vale P(positivo ∣ trastorno)?|0,75|0,14|0,0048|0,06 / 0,08 = 0,75. 0,0048 multiplica en vez de dividir y 0,14 suma ambas probabilidades.",
      "Un clínico razona: «casi todos los pacientes con este trastorno tienen cefalea; esta paciente tiene cefalea, luego casi seguro lo tiene». ¿Qué error comete?|Invertir la condicional|La falacia del jugador|Restringir el rango|Confunde P(cefalea ∣ trastorno) con P(trastorno ∣ cefalea), dos probabilidades distintas."
    ],
    inc: [
      "Sobre la probabilidad condicionada|P(A ∣ B) se define aunque P(B) valga 0|P(A ∩ B) es igual a P(A) · P(B ∣ A)|P(A ∣ B) puede diferir de P(B ∣ A)|La definición exige P(B) > 0, porque P(B) está en el denominador."
    ],
    seq: [],
    cls: [] },
  { t: "Independencia de sucesos",
    tip: "A y B son independientes cuando saber que uno ha ocurrido no cambia la probabilidad del otro: P(A ∣ B) = P(A). La comprobación más rápida es P(A ∩ B) = P(A) · P(B). La independencia se comprueba con números, no con el sentido común, y aplicada a variables enteras es la base de la prueba χ² de la Unidad 14.",
    v: [
      "Independencia=Conocer un suceso no modifica la probabilidad del otro",
      "Dependencia=Conocer B cambia la probabilidad de A",
      "Comprobación por el producto=Ver si P(A ∩ B) coincide con P(A) · P(B)",
      "Incompatibilidad=Intersección con probabilidad cero",
      "Prueba χ²=Aplica la idea de independencia a dos variables categóricas",
      "Frecuencia esperada=Producto de las probabilidades marginales por el total, bajo independencia",
      "Sucesos asociados=La intersección observada difiere de la esperada por azar",
      "Sentido común=Guía poco fiable para juzgar la independencia sin calcular"
    ],
    g: [
      "Si P(A) = 0,4, P(B) = 0,5 y P(A ∩ B) = 0,2, los sucesos son ___.|independientes|incompatibles|dependientes",
      "Si P(A) = 0,3, P(B) = 0,2 y P(A ∩ B) = 0,1, los sucesos son ___.|dependientes|independientes|incompatibles",
      "Si A y B son independientes y P(A) = 0,25, entonces P(A ∣ B) = ___.|0,25|0,75|0,50",
      "Si A y B son independientes, con P(A) = 0,5 y P(B) = 0,2, P(A ∩ B) vale ___.|0,10|0,70|0,40",
      "En la residencia, saber que alguien duerme mal ___ la probabilidad de que tenga ansiedad.|duplica|reduce a la mitad|no modifica"
    ],
    tf: [
      "Dos sucesos son independientes si P(A ∩ B) = 0.|F|Eso define sucesos incompatibles; la independencia exige P(A ∩ B) = P(A) · P(B).",
      "Si P(A ∣ B) = P(A), A y B son independientes.|V",
      "Dos sucesos que parecen relacionados pueden ser independientes; por eso se comprueba con números.|V",
      "La independencia entre sucesos no guarda relación con la prueba χ².|F|χ² aplica la misma idea a variables: con independencia, la frecuencia esperada es el producto de marginales por el total."
    ],
    q: [
      "En 100 pacientes, 40 son mujeres, 30 mejoran y 12 son mujeres que mejoran. ¿Son independientes sexo y mejora?|Sí, porque 0,40 · 0,30 = 0,12|No, porque 0,12 no es 0|No, porque 0,40 + 0,30 ≠ 0,12|P(mujer ∩ mejora) = 0,12 coincide con P(mujer) · P(mejora) = 0,40 · 0,30 = 0,12: son independientes.",
      "Se sabe que P(A) = 0,30 y P(A ∣ B) = 0,60. ¿Qué se concluye?|Que son dependientes|Que son independientes|Que son incompatibles|Conocer B duplica la probabilidad de A; si fueran independientes, P(A ∣ B) sería 0,30.",
      "Se clasifica a 200 personas en dos variables independientes, con P(A) = 0,30 y P(B) = 0,25. ¿Cuántas se esperan en la casilla «A y B»?|15|30|110|200 · 0,30 · 0,25 = 15. 110 resulta de sumar (200 · 0,55) en lugar de multiplicar.",
      "¿Cuál de estas condiciones indica que A y B son dependientes?|P(A ∩ B) ≠ P(A) · P(B)|P(A ∣ B) = P(A)|P(A ∩ B) = P(A) · P(B)|Si la intersección difiere del producto de las marginales, conocer uno cambia la probabilidad del otro."
    ],
    inc: [
      "Sobre la independencia|Incompatibles e independientes son sinónimos|Si son independientes, P(A ∣ B) coincide con P(A)|Con dependencia, conocer B cambia P(A)|Dos sucesos incompatibles con probabilidad positiva son dependientes: si ocurre uno, el otro ya no puede ocurrir."
    ],
    seq: [],
    cls: [
      "Relación entre los sucesos|Independientes: P(A) 0,4, P(B) 0,5 y P(A ∩ B) 0,2; P(A ∣ B) igual a P(A)|Dependientes: P(A) 0,3, P(B) 0,2 y P(A ∩ B) 0,1; incompatibles con probabilidad positiva"
    ] },
  { t: "Probabilidad total y teorema de Bayes",
    tip: "Si B₁, …, Bₖ forman una partición, P(A) es la suma de P(Bᵢ) · P(A ∣ Bᵢ): teorema de la probabilidad total. El teorema de Bayes da la vuelta a la condicional: P(Bᵢ ∣ A) = P(Bᵢ) · P(A ∣ Bᵢ) / P(A). Sus piezas son la probabilidad a priori, la verosimilitud y la probabilidad a posteriori, y es la base de la estadística bayesiana.",
    v: [
      "Partición=Sucesos incompatibles cuya unión es todo el espacio muestral",
      "Probabilidad total=Suma de P(Bᵢ) · P(A ∣ Bᵢ) sobre todas las partes",
      "Teorema de Bayes=Obtiene P(Bᵢ ∣ A) a partir de las P(A ∣ Bᵢ)",
      "Probabilidad a priori=Lo que se sabe de Bᵢ antes de observar A, como la prevalencia",
      "Verosimilitud=Lo probable que es la observación A si Bᵢ es cierto",
      "Probabilidad a posteriori=Probabilidad de Bᵢ actualizada tras observar A",
      "Thomas Bayes=Reverendo cuyo ensayo se publicó póstumamente en 1763",
      "Estadística bayesiana=Trata los parámetros como inciertos y actualiza creencias con datos"
    ],
    g: [
      "Si P(B) = 0,2, P(A ∣ B) = 0,5 y P(A ∣ B̄) = 0,1, por probabilidad total P(A) = ___.|0,18|0,60|0,10",
      "Con esos mismos datos, P(B ∣ A) vale aproximadamente ___.|0,56|0,50|0,10",
      "En un cribado, la sensibilidad desempeña en el teorema de Bayes el papel de la ___.|verosimilitud|probabilidad a priori|probabilidad a posteriori",
      "La prevalencia de un trastorno es su probabilidad ___.|a priori|a posteriori|condicionada",
      "Laplace ___ el teorema de Bayes poco después de su publicación.|desarrolló|refutó|tradujo"
    ],
    tf: [
      "Para aplicar la probabilidad total, los sucesos Bᵢ deben ser incompatibles y cubrir todo el espacio muestral.|V",
      "La verosimilitud es la probabilidad de la hipótesis una vez observados los datos.|F|Esa es la probabilidad a posteriori; la verosimilitud es P(A ∣ Bᵢ), lo probable que es la observación si Bᵢ es cierto.",
      "El teorema de Bayes se deduce de la regla del producto y de la probabilidad total.|V",
      "Thomas Bayes publicó su teorema en vida y Laplace lo refutó poco después.|F|Su ensayo se publicó póstumamente en 1763, y Laplace lo desarrolló y generalizó."
    ],
    q: [
      "En un centro, el 30 % de los pacientes recibe TCC y el 70 %, otra terapia. Mejoran el 60 % con TCC y el 40 % con la otra. ¿Qué proporción total mejora?|0,46|0,50|0,18|0,30 · 0,60 + 0,70 · 0,40 = 0,18 + 0,28 = 0,46. Promediar 0,60 y 0,40 sin ponderar da 0,50.",
      "En ese mismo centro, si un paciente ha mejorado, ¿qué probabilidad hay de que recibiera TCC?|≈ 0,39|0,60|0,30|P(TCC ∣ mejora) = 0,18 / 0,46 ≈ 0,39. 0,60 es la verosimilitud P(mejora ∣ TCC) y 0,30, la a priori.",
      "En el teorema de Bayes, ¿qué es el denominador P(A)?|La probabilidad total de A|La verosimilitud de Bᵢ|La probabilidad a priori|P(A) se obtiene con el teorema de la probabilidad total sobre la partición.",
      "¿Qué hace la estadística bayesiana con los parámetros?|Los trata como inciertos|Los fija como constantes|Los estima sin datos previos|Trata los parámetros como inciertos y actualiza las creencias con los datos mediante el teorema de Bayes."
    ],
    inc: [
      "Sobre el teorema de Bayes|La a posteriori se obtiene antes de observar A|La a priori es lo que se sabe antes de observar A|La verosimilitud es P(A ∣ Bᵢ)|La probabilidad a posteriori es la actualizada después de observar A."
    ],
    seq: [],
    cls: [
      "Elemento del teorema de Bayes en un cribado|Probabilidad a priori: prevalencia del trastorno|Verosimilitud: sensibilidad de la prueba|Probabilidad a posteriori: valor predictivo positivo"
    ] },
  { t: "Cribado diagnóstico y frecuencias naturales",
    tip: "Sensibilidad y especificidad son propiedades de la prueba; los valores predictivos (VPP y VPN) dependen además de la prevalencia y se obtienen con Bayes. Con un trastorno raro, los falsos positivos de la mayoría sana superan a los verdaderos: con prevalencia del 1 %, sensibilidad del 90 % y especificidad del 95 %, el VPP es ≈ 0,15. Ignorar la prevalencia es la falacia de la tasa base; las frecuencias naturales ayudan a evitarla.",
    v: [
      "Sensibilidad=Probabilidad de dar positivo si se tiene el trastorno",
      "Especificidad=Probabilidad de dar negativo si no se tiene el trastorno",
      "Valor predictivo positivo=Probabilidad de tener el trastorno si se da positivo",
      "Valor predictivo negativo=Probabilidad de no tener el trastorno si se da negativo",
      "Prevalencia=Proporción de la población con el trastorno; la a priori del cribado",
      "Falacia de la tasa base=Ignorar la probabilidad a priori al interpretar un resultado",
      "Frecuencias naturales=Recuentos sobre una población concreta, como 90 de cada 10 000",
      "Falso positivo=Persona sin el trastorno a la que la prueba clasifica como positiva"
    ],
    g: [
      "Con prevalencia del 1 %, sensibilidad del 90 % y especificidad del 95 %, el VPP es aproximadamente ___.|0,15|0,90|0,95",
      "De los 585 positivos del árbol de 10 000 personas, solo ___ tienen el trastorno.|90|495|100",
      "Con esa misma prueba, si la prevalencia sube al 10 %, el VPP pasa a ___.|0,667|0,154|0,900",
      "La probabilidad de dar negativo si no se tiene el trastorno es la ___.|especificidad|sensibilidad|prevalencia",
      "Un cribado poblacional de un trastorno raro sirve más para ___ que para diagnosticar.|descartar|confirmar|tratar"
    ],
    tf: [
      "El VPP de una prueba no depende de la prevalencia del trastorno.|F|Sensibilidad y especificidad son de la prueba; los valores predictivos cambian mucho con la prevalencia.",
      "Si una prueba tiene una sensibilidad del 90 %, un positivo implica un 90 % de probabilidad de tener el trastorno.|F|La sensibilidad es P(+ ∣ T); lo preguntado es P(T ∣ +), que depende de la prevalencia (≈ 0,15 con el 1 %).",
      "Tras un primer positivo, el VPP de ese paso se convierte en la probabilidad a priori de una segunda prueba.|V",
      "El contraste clásico proporciona P(datos ∣ H₀), no P(H₀ ∣ datos).|V"
    ],
    q: [
      "En 1 000 personas, con prevalencia del 10 %, sensibilidad del 90 % y especificidad del 90 %, ¿cuál es el VPP?|0,50|0,90|0,10|100 con trastorno → 90 positivos; 900 sin él → 90 falsos positivos. VPP = 90/180 = 0,50. 0,90 confunde VPP con sensibilidad.",
      "Con esos mismos datos (1 000 personas), ¿cuánto vale aproximadamente el VPN?|0,988|0,900|0,810|Negativos: 810 sin trastorno y 10 con él. VPN = 810/820 ≈ 0,988. 0,900 es la especificidad.",
      "Una psicóloga aplica la misma prueba en una unidad especializada en lugar de en población general. ¿Qué cambia?|Sube el VPP|Sube la sensibilidad|Baja la especificidad|Al aumentar la prevalencia (la a priori) sube el VPP; sensibilidad y especificidad son propiedades de la prueba.",
      "Con prevalencia del 1 %, sensibilidad del 90 % y especificidad del 95 %, ¿qué proporción de los positivos son falsos positivos?|≈ 0,85|≈ 0,05|≈ 0,10|495/585 ≈ 0,846. 0,05 es P(+ ∣ sin trastorno) y 0,10, el complemento de la sensibilidad."
    ],
    inc: [
      "Sobre los índices de un cribado|La especificidad depende de la prevalencia|El VPN responde a «si doy negativo, ¿no lo tengo?»|La sensibilidad es una propiedad de la prueba|Sensibilidad y especificidad son propiedades de la prueba; lo que cambia con la prevalencia son los valores predictivos."
    ],
    seq: [
      "Calcular el VPP con frecuencias naturales|Tomar una población de referencia, como 10 000 personas>Separar con y sin trastorno según la prevalencia>Repartir positivos y negativos en cada rama>Sumar todos los positivos>Dividir los verdaderos positivos entre el total de positivos"
    ],
    cls: [
      "Propiedad de la prueba o dependiente de la prevalencia|De la prueba: sensibilidad; especificidad|Depende de la prevalencia: VPP; VPN"
    ] }
] },
{ n: 12, t: "Asociación y causalidad", cap: 4, pir: "media", mods: [
  { t: "Relación no es causa",
    tip: "Dos variables están relacionadas cuando ciertos valores de una tienden a acompañar a ciertos valores de la otra. Una asociación entre X e Y admite al menos cinco explicaciones: X causa Y, causalidad inversa, causalidad bidireccional, una tercera variable o el azar. La asociación se describe con estadísticos; la causalidad no es un estadístico y depende sobre todo del diseño.",
    v: [
      "Asociación=Tendencia de los valores de dos variables a presentarse juntos",
      "Causalidad inversa=El supuesto efecto es en realidad la causa",
      "Causalidad bidireccional=Las dos variables se influyen mutuamente",
      "Tercera variable=Factor que influye a la vez en X y en Y",
      "Azar=Origen de una relación muestral que no existe en la población",
      "Covarianza y correlación=Estadísticos que describen la asociación entre variables cuantitativas",
      "χ² y sus coeficientes=Describen la asociación entre variables categóricas",
      "Diseño de investigación=Determina sobre todo si una conclusión causal es legítima"
    ],
    g: [
      "Si se supone que dormir bien mejora las notas, que ir bien en los estudios mejore el sueño sería causalidad ___.|inversa|directa|bidireccional",
      "Una relación causal implica asociación, pero una asociación no implica ___.|causalidad|covariación|dependencia",
      "La causalidad no es un ___, sino una conclusión que depende sobre todo del diseño.|estadístico|supuesto|requisito",
      "Un horario laboral exigente que reduce a la vez el sueño y el tiempo de estudio actúa como ___.|tercera variable|causa inversa|efecto bidireccional",
      "En una muestra pequeña puede aparecer por ___ una relación que no existe en la población.|azar|confusión|inversión"
    ],
    tf: [
      "Si una correlación es muy alta, puede concluirse que una variable causa la otra.|F|El tamaño de la correlación no garantiza causalidad: la conclusión causal depende del diseño.",
      "Toda relación causal implica asociación entre las variables.|V",
      "La causalidad bidireccional supone que X e Y se influyen mutuamente.|V",
      "Un coeficiente de correlación permite distinguir si X causa Y o si Y causa X.|F|El coeficiente describe la asociación, no su dirección causal; eso exige diseño y precedencia temporal."
    ],
    q: [
      "De 50 estudiantes que duermen más de 7 horas aprueban 40; de 50 que duermen menos, aprueban 20. ¿Qué puede afirmarse?|Hay asociación: 0,80 frente a 0,40|Dormir más causa el aprobado|No hay relación: aprueban 60|Las proporciones de aprobado difieren (40/50 = 0,80 y 20/50 = 0,40): hay covariación, pero el dato no dice por qué.",
      "En un grupo, 30 de 60 fumadores y 10 de 40 no fumadores presentan ansiedad. ¿Hay covariación entre ambas variables?|Sí: 0,50 frente a 0,25|No: hay 40 casos en 100|No: los grupos no son iguales|Se comparan proporciones dentro de cada grupo (30/60 = 0,50 y 10/40 = 0,25), no recuentos brutos ni tamaños.",
      "Los niños que ven más televisión violenta resultan ser más agresivos. ¿Qué explicación corresponde a la causalidad inversa?|Los agresivos buscan más violencia|La televisión causa la agresión|Un factor familiar causa ambas|En la causalidad inversa, el supuesto efecto (la agresividad) sería la causa de ver más televisión violenta.",
      "¿Con qué se describe la asociación entre dos variables categóricas?|Con χ² y sus coeficientes|Con la covarianza|Con el diseño experimental|La covarianza y la correlación describen variables cuantitativas; χ² y sus coeficientes, categóricas. El diseño no es un estadístico."
    ],
    inc: [
      "Explicaciones de una asociación entre X e Y|La asociación demuestra que X precede a Y|Y puede ser la causa de X|Una tercera variable puede causar X e Y|La asociación no informa del orden temporal ni de la dirección causal."
    ],
    seq: [],
    cls: [
      "Explicación de la asociación|Causalidad inversa: el buen rendimiento reduce el estrés y mejora el sueño|Tercera variable: el horario laboral reduce sueño y estudio; el calor aumenta helados y baños|Azar: relación en una muestra pequeña que no existe en la población"
    ] },
  { t: "Requisitos para inferir causalidad",
    tip: "Desde Mill, afirmar que X causa Y exige covariación, precedencia temporal y eliminación de explicaciones alternativas. El experimento cumple la tercera mediante manipulación y asignación aleatoria, y por eso tiene la mayor validez interna. Con datos observacionales se usan los criterios de Bradford Hill (1965), de los que solo la temporalidad es imprescindible. La confusión se controla en el diseño o en el análisis.",
    v: [
      "Covariación=Las dos variables están relacionadas",
      "Precedencia temporal=La causa ocurre antes que el efecto",
      "Asignación aleatoria=Reparto por azar de los participantes entre las condiciones",
      "Validez interna=Grado en que un diseño permite concluir causalidad",
      "Criterios de Bradford Hill=Guía epidemiológica de 1965 para valorar causas con datos observacionales",
      "Variable de confusión=Tercera variable ligada a la supuesta causa y al efecto",
      "Estratificar=Analizar por separado cada nivel de una variable",
      "Correlación espuria=Relación sin vínculo directo, debida a una tercera variable o al azar"
    ],
    g: [
      "De los criterios de Bradford Hill, el único imprescindible es la ___.|temporalidad|fuerza|consistencia",
      "El experimento elimina explicaciones alternativas mediante la manipulación y la ___.|asignación aleatoria|selección intencional|medición repetida",
      "Ventas de helados y ahogamientos crecen juntos por el calor: es una correlación ___.|espuria|inversa|restringida",
      "Mantener constante una variable es una forma de controlar la confusión en el ___.|diseño|análisis|muestreo",
      "Los criterios de Bradford Hill se usan en epidemiología desde ___.|1965|1854|1951"
    ],
    tf: [
      "Para Mill bastan la covariación y la precedencia temporal para afirmar causalidad.|F|Falta la tercera condición, la más difícil: eliminar explicaciones alternativas.",
      "La asignación aleatoria reparte por igual entre los grupos tanto las variables conocidas como las desconocidas.|V",
      "Cumplir uno de los criterios de Bradford Hill basta para afirmar causalidad.|F|Ninguno es suficiente por sí solo; solo la temporalidad es imprescindible.",
      "Una variable de confusión puede crear, ocultar o invertir una relación.|V"
    ],
    q: [
      "Un estudio observacional con 20 000 personas halla r = 0,70 entre ejercicio y bienestar. ¿Permite concluir causalidad?|No sin controlar la confusión|Sí, por el tamaño de la muestra|Sí, por la fuerza de la relación|Ni una muestra grande ni una correlación alta eliminan las variables de confusión.",
      "Se asigna al azar a 60 participantes a terapia o a lista de espera y después se mide la ansiedad. ¿Qué requisito asegura sobre todo el azar?|Eliminar alternativas|Precedencia temporal|Covariación|La asignación aleatoria reparte las demás características entre los grupos y descarta explicaciones alternativas.",
      "En un experimento mejoran 24 de 40 con terapia y 12 de 40 en lista de espera. ¿Qué diferencia de proporciones hay?|0,30|12|0,50|24/40 = 0,60 y 12/40 = 0,30: la diferencia es 0,30. 12 es la diferencia en recuentos, no en proporción.",
      "Para controlar la confusión en el análisis, un investigador examina la relación por separado en hombres y en mujeres. ¿Qué hace?|Estratificar|Aleatorizar|Emparejar|Analizar por separado cada nivel de la variable es estratificar; aleatorizar y emparejar se hacen en el diseño."
    ],
    inc: [
      "Sobre la inferencia causal|El experimento tiene la menor validez interna|La temporalidad es imprescindible en Bradford Hill|La aleatorización controla la confusión en el diseño|El experimento con asignación aleatoria es el diseño con mayor validez interna."
    ],
    seq: [],
    cls: [
      "Control de la confusión|En el diseño: aleatorización; emparejamiento; mantener constante la variable|En el análisis: estratificar; técnicas multivariadas"
    ] },
  { t: "La paradoja de Simpson y la restricción de rango",
    tip: "En la paradoja de Simpson, una relación presente en cada subgrupo desaparece o se invierte al juntar los datos, porque una variable de confusión se reparte de forma desigual entre los grupos; la conclusión correcta sale del análisis estratificado. La restricción de rango aparece cuando la muestra solo cubre parte de los valores de una variable: la correlación observada suele ser menor que en la población.",
    v: [
      "Paradoja de Simpson=Inversión o desaparición de una relación al agregar subgrupos",
      "Edward Simpson=Describió en 1951 la inversión de relaciones al juntar datos",
      "Restricción de rango=Reducción de la correlación al estudiar solo parte de los valores",
      "Datos agregados=Todos los subgrupos juntos, que pueden engañar",
      "Análisis estratificado=Examen de la relación dentro de cada subgrupo",
      "Gravedad del caso=Confusora en el ejemplo de las dos terapias",
      "Validación con admitidos=Situación típica de restricción en pruebas de selección",
      "Atenuación=Efecto habitual de un rango reducido sobre la correlación"
    ],
    g: [
      "En el ejemplo de las dos terapias, la terapia A mejora al ___ de los casos leves.|90 %|80 %|66 %",
      "En el total, la terapia A logra un 66 % de mejoría y la B, un ___.|74 %|60 %|50 %",
      "Al estudiar solo a los seleccionados, la correlación entre la prueba de admisión y el rendimiento baja de 0,60 a ___.|0,42|0,72|0,18",
      "La paradoja de Simpson ocurre cuando una variable de confusión se reparte de forma ___ entre los grupos.|desigual|aleatoria|equilibrada",
      "Restringir el rango de una variable suele ___ la correlación observada.|reducir|aumentar|invertir"
    ],
    tf: [
      "La paradoja de Simpson es un error de cálculo al sumar los subgrupos.|F|No es un error: muestra que los datos agregados pueden engañar cuando hay variables relevantes sin controlar.",
      "En el ejemplo de las terapias, la conclusión correcta procede del análisis estratificado.|V",
      "Estudiar la relación entre CI y rendimiento solo en universitarios tiende a inflar la correlación.|F|Su rango de CI es más reducido que el de la población general, así que la correlación tiende a ser menor.",
      "En la paradoja de Simpson, la relación global puede tener el signo contrario a la de cada grupo.|V"
    ],
    q: [
      "Con la terapia A mejoran 18 de 20 casos leves y 48 de 80 graves. ¿Qué porcentaje global de mejoría tiene?|66 %|75 %|60 %|(18 + 48) / 100 = 66 %. Promediar el 90 % y el 60 % sin ponderar da 75 %.",
      "Con la terapia B mejoran 64 de 80 leves y 10 de 20 graves. ¿Por qué B parece mejor que A en el total?|Trató sobre todo casos leves|Es mejor en ambos estratos|Tuvo más pacientes en total|B atendió 80 leves, que mejoran más con cualquier terapia; en cada estrato, A es mejor. La gravedad es la confusora.",
      "Una universidad valida su prueba de acceso solo con los admitidos y obtiene r = 0,20. ¿Qué cabe pensar?|Que subestima la validez real|Que la prueba no es válida|Que sobrestima la validez real|Al estudiar solo a los admitidos se restringe el rango de X y la correlación se atenúa.",
      "Con un fármaco mejoran 9 de 10 leves y 30 de 60 graves; sin él, 40 de 50 leves y 5 de 20 graves. ¿Qué ocurre?|Mejor en cada estrato, peor en total|Peor en cada estrato y en total|Mejor en cada estrato y en total|Leves 0,90 frente a 0,80 y graves 0,50 frente a 0,25, pero en total 39/70 ≈ 0,56 frente a 45/70 ≈ 0,64: Simpson."
    ],
    inc: [
      "Sobre Simpson y la restricción de rango|La restricción de rango suele aumentar la correlación|Simpson se da con variables cuantitativas y categóricas|La paradoja refleja una confusora mal repartida|Al reducir la variabilidad de una variable, la correlación observada suele ser menor, no mayor."
    ],
    seq: [],
    cls: [] },
  { t: "John Snow y el cólera: razonar con datos",
    tip: "En el brote de cólera del Soho (1854), John Snow, frente a la teoría de los miasmas, situó cada muerte en un mapa y vio que se concentraban en torno a la bomba de Broad Street. El mapa solo mostraba una asociación espacial; Snow reforzó la inferencia analizando las excepciones y comparando hogares abastecidos por dos compañías de agua, un experimento natural.",
    v: [
      "John Snow=Médico que defendió que el cólera se transmitía por el agua",
      "Teoría de los miasmas=Atribuía la enfermedad al aire contaminado",
      "Broad Street=Calle de la bomba de agua en torno a la que se acumulaban las muertes",
      "Asociación espacial=Lo que mostraba por sí solo el mapa de defunciones",
      "Experimento natural=Un factor externo asigna las condiciones de forma casi aleatoria",
      "Fábrica de cerveza=Excepción: sus trabajadores, con pozo propio, apenas enfermaron",
      "Comparación entre compañías=Hogares parecidos que solo diferían en el agua recibida",
      "1854=Año del brote de cólera del Soho"
    ],
    g: [
      "Snow situó cada muerte en un ___ del barrio del Soho.|mapa|censo|registro",
      "Entre las excepciones que reforzaron el argumento estaban los trabajadores de una fábrica de ___.|cerveza|tabaco|pan",
      "La comparación entre dos compañías de agua funcionó como un experimento ___.|natural|controlado|simulado",
      "Una de las compañías captaba el agua de un tramo del Támesis contaminado por ___.|aguas residuales|vertidos industriales|agua de mar",
      "La manivela de la bomba se retiró cuando el brote ya estaba ___.|remitiendo|empezando|en su pico"
    ],
    tf: [
      "La epidemia del Soho se detuvo de golpe al retirar la manivela de la bomba.|F|El brote ya remitía, en parte porque muchos vecinos habían huido; el argumento de Snow descansa en los datos.",
      "El mapa de Snow, por sí solo, mostraba una asociación espacial, no una prueba causal.|V",
      "Algunas víctimas que vivían lejos habían bebido agua de la bomba de Broad Street porque la preferían.|V",
      "En la comparación entre compañías, los hogares diferían en muchas características además del agua.|F|Eran parecidos en todo salvo en el agua recibida, lo que reducía el peligro de confusión."
    ],
    q: [
      "Al comparar los hogares de las dos compañías de agua, ¿qué encontró Snow?|Mortalidad muchas veces mayor con el agua contaminada|Mortalidad parecida con ambas compañías de agua|Mortalidad mayor con el agua captada río arriba|Los hogares abastecidos desde el tramo del Támesis contaminado por aguas residuales tuvieron una mortalidad muchas veces mayor.",
      "¿Por qué la comparación entre compañías reforzaba la inferencia causal?|El agua no dependía de las familias|Las muertes rodeaban la bomba|Snow retiró la manivela a tiempo|La «asignación» al agua contaminada no dependía de las características de las familias, lo que reducía la confusión.",
      "¿Qué parte del trabajo de Snow corresponde a la búsqueda de explicaciones alternativas?|El análisis de las excepciones|El recuento total de muertes|La teoría de los miasmas|Examinar casos que no encajaban, como la cervecería o las víctimas lejanas, puso a prueba su hipótesis.",
      "Antes de Snow, ¿a qué atribuía la teoría dominante el cólera?|Al aire contaminado|Al agua del Támesis|A la falta de higiene|La teoría de los miasmas atribuía la enfermedad al aire contaminado; Snow defendía la transmisión por el agua."
    ],
    inc: [
      "Sobre el caso de John Snow|Su argumento se basaba en retirar la manivela|Analizó las excepciones al patrón|Comparó la mortalidad de dos compañías de agua|Su argumento descansa en el patrón de los datos y en la comparación entre compañías, no en la retirada de la manivela."
    ],
    seq: [],
    cls: [
      "Elemento del argumento de Snow|Asociación: muertes en torno a la bomba; mapa de defunciones|Explicaciones alternativas: trabajadores de la cervecería; víctimas lejanas que preferían esa agua|Experimento natural: dos compañías de agua en las mismas calles"
    ] }
] }
);

// SAIMAP Psicología · Fundamentos de Estadística · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Covarianza y correlación de Pearson", cap: 4, pir: "alta", mods: [
  { t: "Diagrama de dispersión y covarianza",
    tip: "El diagrama de dispersión es el primer paso para estudiar dos variables cuantitativas: muestra la dirección, la forma y la intensidad de la relación, además de atípicos y grupos. La covarianza promedia los productos de las puntuaciones diferenciales: es positiva si la relación lineal es directa, negativa si es inversa y próxima a 0 si no hay relación lineal. Su problema es que depende de las unidades y no tiene un máximo fijo.",
    v: [
      "Diagrama de dispersión=Gráfico en el que cada caso es un punto con coordenadas (xᵢ, yᵢ)",
      "Covarianza=Media de los productos de las puntuaciones diferenciales de X e Y",
      "Cuasicovarianza=Versión que divide entre n − 1; la que da SPSS por defecto",
      "Puntuación diferencial=Distancia de cada valor a la media de su variable",
      "Relación directa=Al aumentar X tiende a aumentar Y; covarianza positiva",
      "Relación inversa=Al aumentar X tiende a disminuir Y; covarianza negativa",
      "Forma de la relación=Aspecto lineal o curvilíneo que adopta la nube de puntos",
      "Sₓₓ=Covarianza de una variable consigo misma, que coincide con su varianza"
    ],
    g: [
      "Si un caso está por debajo de la media en X y también en Y, el producto de sus diferenciales es ___.|positivo|negativo|nulo",
      "Una covarianza próxima a 0 indica ausencia de relación ___, pero no excluye una relación curvilínea.|lineal|causal|ordinal",
      "Si el tiempo de reacción pasa de segundos a milisegundos, la covarianza se multiplica por ___.|1 000|100|10",
      "SPSS ofrece la cuasicovarianza porque es un estimador ___ de la covarianza poblacional.|insesgado|robusto|estandarizado",
      "Si los productos de las diferenciales suman 16 en n = 4 casos, la covarianza (con n) vale ___.|4|5,33|16"
    ],
    tf: [
      "Una covarianza igual a 0 demuestra que las dos variables no tienen ninguna relación.|F|Solo indica ausencia de relación lineal; puede haber una relación curvilínea muy clara.",
      "La covarianza no tiene un máximo fijo, por lo que no permite juzgar si una relación es fuerte o débil.|V",
      "La covarianza de una variable consigo misma es su varianza.|V",
      "Como no depende de las unidades, la covarianza permite comparar relaciones medidas en escalas distintas.|F|Sí depende de ellas: pasar de segundos a milisegundos la multiplica por 1 000 aunque la relación sea idéntica."
    ],
    q: [
      "X: 1, 3, 5, 7; Y: 2, 2, 6, 6. Los productos de las puntuaciones diferenciales suman 16. ¿Cuánto vale la covarianza con n?|4|5,33|16|Sₓᵧ = 16/4 = 4. Dividir entre n − 1 (16/3 ≈ 5,33) da la cuasicovarianza; 16 es solo la suma de productos.",
      "Una investigadora registra horas de estudio y errores en un examen; la nube de puntos baja de izquierda a derecha. ¿Qué signo tendrá la covarianza?|Negativo|Positivo|Próximo a cero|Si los puntos bajan, quien está por encima de la media en X tiende a estar por debajo en Y: productos negativos.",
      "¿Qué tres aspectos de la relación muestra un diagrama de dispersión?|Dirección, forma e intensidad|Causa, dirección y significación|Media, varianza y asimetría|La nube de puntos muestra dirección (positiva, negativa o nula), forma (lineal o curva) e intensidad, además de atípicos.",
      "¿Qué versión de la covarianza da SPSS por defecto?|La que divide entre n − 1|La que divide entre n|La que divide entre n + 1|SPSS calcula la cuasicovarianza (n − 1), que estima sin sesgo la covarianza de la población."
    ],
    inc: [
      "Sobre la covarianza|Su valor máximo es 1, como el de r|Se basa en las puntuaciones diferenciales|Es positiva en una relación lineal directa|La covarianza no tiene máximo fijo y depende de las unidades; el rango entre −1 y +1 es propio de r."
    ],
    seq: [],
    cls: [
      "Signo de la covarianza|Positiva: relación directa; casos por encima de la media en ambas variables|Negativa: relación inversa; casos por encima en una y por debajo en la otra"
    ] },
  { t: "El coeficiente de correlación de Pearson",
    tip: "r es la covarianza dividida entre el producto de las desviaciones típicas: una covarianza estandarizada, sin unidades, entre −1 y +1. El signo indica la dirección y el valor absoluto, la intensidad de la relación lineal. No cambia al sumar constantes ni al multiplicar por constantes positivas; con una constante negativa solo cambia de signo. No es la pendiente: mide el ajuste a una recta, no su inclinación.",
    v: [
      "Correlación de Pearson=Covarianza dividida entre el producto de las desviaciones típicas",
      "Correlación perfecta=Todos los puntos están sobre una recta; r vale +1 o −1",
      "Simetría de r=La correlación de X con Y es la misma que la de Y con X",
      "Correlación de Spearman=Correlación de Pearson calculada sobre los rangos de los datos",
      "Pendiente (b)=Inclinación de la recta de regresión; depende de las unidades",
      "Correlación nula=Ausencia de relación lineal, no de cualquier relación",
      "Referencias de Cohen=0,10 pequeña, 0,30 media y 0,50 grande, en valor absoluto",
      "Invarianza de r=No cambia al sumar constantes o multiplicar por constantes positivas"
    ],
    g: [
      "Si se multiplica X por una constante negativa, r cambia de ___ pero no de valor absoluto.|signo|escala|unidades",
      "r no varía si la covarianza y las desviaciones típicas se calculan con n o con n − 1, siempre que se use el mismo ___ en todas.|divisor|signo|origen",
      "Con Sₓᵧ = 12, Sₓ = 4 y Sᵧ = 5, la correlación de Pearson vale ___.|0,60|0,03|1,33",
      "Para variables ordinales o con atípicos influyentes se prefiere la correlación de ___.|Spearman|Pearson|Cramer",
      "La correlación y la pendiente de la recta de regresión comparten siempre el ___.|signo|valor|origen"
    ],
    tf: [
      "Si dos muestras tienen r = 0,60, sus rectas de regresión tienen necesariamente la misma pendiente.|F|r mide el ajuste, no la inclinación: b = r · (Sᵧ / Sₓ) depende de las desviaciones típicas.",
      "Sumar 10 puntos a todas las puntuaciones de X no modifica su correlación con Y.|V",
      "Multiplicar X por −2 hace que r se multiplique por −2.|F|Con una constante negativa r solo cambia de signo; su valor absoluto se mantiene.",
      "Cuando r = 0, la pendiente de la recta de regresión también es 0.|V"
    ],
    q: [
      "Con Sₓᵧ = 12, Sₓ² = 16 y Sᵧ² = 25, ¿cuánto vale r?|0,60|0,03|1,33|r = 12/(4 · 5) = 0,60. Dividir entre el producto de varianzas (12/400) es un error, y 1,33 es imposible: r no supera 1.",
      "En un estudio, ansiedad y rendimiento correlacionan r = 0,40. Si las puntuaciones de ansiedad se multiplican por −1, ¿qué valor tendrá r?|−0,40|0,40|−0,16|Multiplicar por una constante negativa invierte el signo de r y mantiene su valor absoluto.",
      "Con r = 0,50, Sᵧ = 10 y Sₓ = 5, ¿cuánto vale la pendiente de Y sobre X?|1|0,50|0,25|b = r · (Sᵧ / Sₓ) = 0,50 · 2 = 1. La pendiente no coincide con r porque depende de las desviaciones típicas.",
      "¿Qué indica el valor absoluto de r?|La intensidad lineal|La dirección de la relación|La inclinación de la recta|El signo da la dirección; el valor absoluto, la intensidad de la relación lineal, no la pendiente."
    ],
    inc: [
      "Sobre las propiedades de r|Cambia al pasar de segundos a milisegundos|Su signo indica la dirección de la relación|Es muy sensible a los casos atípicos|r no tiene unidades: multiplicar una variable por una constante positiva, como 1 000, no lo altera."
    ],
    seq: [],
    cls: [
      "Efecto sobre r de transformar X|No cambia: sumar una constante; multiplicar por 3|Cambia de signo: multiplicar por −1; multiplicar por −0,5"
    ] },
  { t: "Coeficiente de determinación y matrices",
    tip: "El coeficiente de determinación, r², es la proporción de varianza compartida por dos variables; 1 − r² es la no compartida. Hace ver que correlaciones aparentemente altas dejan mucha variabilidad sin explicar y que r = 0,60 comparte cuatro veces más varianza que r = 0,30. Con más de dos variables se usan matrices cuadradas y simétricas: la de varianzas-covarianzas lleva varianzas en la diagonal y la de correlaciones, unos.",
    v: [
      "Coeficiente de determinación=Cuadrado de r; proporción de varianza compartida por dos variables",
      "1 − r²=Proporción de varianza que las dos variables no comparten",
      "Matriz de correlaciones=Tabla simétrica con unos en la diagonal y la r de cada par fuera",
      "Matriz de varianzas-covarianzas=Tabla con varianzas en la diagonal y covarianzas fuera de ella",
      "Unos en la diagonal=Reflejan que toda variable correlaciona perfectamente consigo misma",
      "Matriz simétrica=Su triángulo superior es igual que el inferior",
      "Bivariadas=Opción de SPSS, en Analizar > Correlacionar, para obtener r o rₛ",
      "Correlation Matrix=Opción de jamovi, dentro de Regression, para obtener correlaciones"
    ],
    g: [
      "Con r = 0,70, las dos variables comparten el ___ de su varianza.|49 %|70 %|51 %",
      "En la diagonal de una matriz de varianzas-covarianzas aparecen las ___.|varianzas|covarianzas|correlaciones",
      "Una correlación de 0,60 comparte ___ varianza que una de 0,30.|cuatro veces más|el doble de la|la mitad de la",
      "Basta con leer un triángulo de la matriz porque esta es ___.|simétrica|diagonal|triangular",
      "En SPSS, la covarianza que se pide en las Opciones de Bivariadas se calcula con ___.|n − 1|n|n + 1"
    ],
    tf: [
      "Con r = 0,50, las variables comparten el 50 % de su varianza.|F|La varianza compartida es r² = 0,25, es decir, el 25 %.",
      "En una matriz de correlaciones la diagonal está formada por unos.|V",
      "Una correlación de 0,60 supone el doble de varianza compartida que una de 0,30.|F|Supone el cuádruple: 0,36 frente a 0,09.",
      "Con r = −0,80, el coeficiente de determinación es 0,64.|V"
    ],
    q: [
      "Un estudio halla r = 0,70 entre horas de sueño y estado de ánimo. ¿Qué proporción de varianza no comparten?|0,51|0,30|0,49|1 − r² = 1 − 0,49 = 0,51. 0,30 resta r en vez de r², y 0,49 es la varianza compartida.",
      "Una matriz de varianzas-covarianzas tiene varianzas 9 y 16 y covarianza 6. ¿Cuánto vale r?|0,50|0,04|0,25|r = 6/(√9 · √16) = 6/12 = 0,50. Dividir entre el producto de varianzas (6/144) o dar r² son errores típicos.",
      "Si r = −0,80, ¿cuánto vale el coeficiente de determinación?|0,64|−0,64|0,80|Al elevar al cuadrado desaparece el signo: (−0,80)² = 0,64.",
      "¿Qué aporta r² frente a r al interpretar una correlación?|Muestra la varianza compartida|Indica la dirección del efecto|Demuestra una relación causal|r² expresa la proporción de varianza compartida; pierde el signo y no dice nada sobre causalidad."
    ],
    inc: [
      "Sobre las matrices de correlaciones|Fuera de la diagonal hay varianzas|Son matrices cuadradas y simétricas|Tienen unos en toda la diagonal|Las varianzas están en la diagonal de la matriz de varianzas-covarianzas; fuera de la diagonal de la de correlaciones hay correlaciones."
    ],
    seq: [],
    cls: [
      "Contenido de cada matriz|Varianzas-covarianzas: varianzas en la diagonal; covarianzas fuera de la diagonal|Correlaciones: unos en la diagonal; correlaciones fuera de la diagonal"
    ] },
  { t: "Limitaciones de r: el cuarteto de Anscombe",
    tip: "Anscombe (1973) construyó cuatro conjuntos de 11 pares con las mismas medias, la misma recta y r ≈ 0,82, pero con formas muy distintas: lineal, curva, lineal con un atípico y un único caso que fabrica la correlación. La lección es mirar los datos antes de calcular. r solo mide relación lineal, es sensible a atípicos, se atenúa con la restricción de rango y la baja fiabilidad, puede alterarse por subgrupos y no indica causalidad.",
    v: [
      "Cuarteto de Anscombe=Cuatro conjuntos con la misma r y formas muy distintas",
      "Francis Anscombe=Estadístico que en 1973 mostró la necesidad de mirar los datos",
      "Conjunto I=Relación lineal con ruido; el único bien resumido por r",
      "Conjunto II=Relación fuerte pero curva, que r describe mal",
      "Conjunto III=Relación lineal perfecta salvo un atípico que rebaja r",
      "Conjunto IV=X constante salvo un caso que fabrica por sí solo la correlación",
      "Restricción de rango=Reducción de la variabilidad de una variable que atenúa r",
      "Paradoja de Simpson=Relación inflada o invertida al mezclar subgrupos"
    ],
    g: [
      "En el conjunto III de Anscombe, un único atípico ___ una correlación que sin él sería casi perfecta.|rebaja|fabrica|invierte",
      "En el conjunto IV, todos los puntos están en x = 8 salvo ___.|uno|dos|tres",
      "Los cuatro conjuntos de Anscombe comparten r ≈ 0,82 y la recta y = 3 + ___x.|0,5|0,82|1,5",
      "La baja fiabilidad de las medidas tiende a ___ la correlación observada.|atenuar|inflar|invertir",
      "Con r ≈ 0,82, la varianza compartida en los conjuntos de Anscombe ronda el ___.|67 %|82 %|18 %"
    ],
    tf: [
      "Los cuatro conjuntos de Anscombe tienen la misma r porque sus nubes de puntos tienen formas parecidas.|F|Tienen la misma r con formas completamente distintas: lineal, curva, con un atípico y con un caso aislado.",
      "Solo en el conjunto I de Anscombe es razonable resumir la relación con r.|V",
      "La restricción de rango tiende a inflar el valor de r.|F|La restricción de rango atenúa r, igual que la baja fiabilidad de las medidas.",
      "En muestras pequeñas, r es muy inestable.|V"
    ],
    q: [
      "Una investigadora obtiene r = 0,02 entre activación y rendimiento, pero el diagrama muestra una U invertida muy clara. ¿Qué concluye?|Hay relación, pero no lineal|No hay relación entre ambas|La relación es lineal y débil|r solo capta la relación lineal; una U invertida es una relación clara que r pasa por alto.",
      "En el conjunto II de Anscombe, ¿por qué r describe mal la relación?|Porque es curva|Porque es débil|Porque X no varía|La relación del conjunto II es fuerte pero curvilínea, y r solo mide relación lineal.",
      "¿Qué enseñanza principal se extrae del cuarteto de Anscombe?|Hay que mirar los datos antes de calcular|r mide bien cualquier tipo de relación|Las medias resumen bien cualquier conjunto|Cuatro conjuntos con resúmenes casi idénticos tienen formas muy distintas: el diagrama de dispersión es imprescindible.",
      "Si en el conjunto III se eliminara el atípico, ¿qué ocurriría con r?|Se acercaría a 1|Se acercaría a 0|Cambiaría de signo|Sin el atípico la relación sería lineal perfecta: el atípico rebaja una r que sería prácticamente 1."
    ],
    inc: [
      "Sobre las limitaciones de r|Un valor alto de r demuestra que X causa Y|Es muy sensible a los casos atípicos|Puede inflarse o invertirse por subgrupos|Una correlación, por alta que sea, no indica causalidad (Unidad 12)."
    ],
    seq: [],
    cls: [
      "¿Resume bien r la relación?|Sí: conjunto I|No: conjunto II; conjunto III; conjunto IV"
    ] }
] },
{ n: 14, t: "Tablas de contingencia y chi cuadrado", cap: 4, pir: "media", mods: [
  { t: "Tablas de contingencia",
    tip: "Con dos variables categóricas, los datos se resumen en una tabla de contingencia: frecuencias conjuntas en las casillas, marginales en los totales y N en la esquina. Para comparar grupos de distinto tamaño se usan porcentajes por fila, por columna o sobre el total; los de fila y columna son distribuciones condicionadas. Se calculan en la dirección de la variable explicativa y se comparan en la otra.",
    v: [
      "Tabla de contingencia=Tabla de doble entrada con las frecuencias conjuntas de dos variables categóricas",
      "Frecuencia conjunta=Número de casos en una casilla, nᵢⱼ",
      "Frecuencias marginales=Totales de cada fila y de cada columna",
      "Tabla I × J=Tabla con I filas y J columnas",
      "Porcentaje por fila=Cada casilla dividida entre el total de su fila",
      "Porcentaje por columna=Cada casilla dividida entre el total de su columna",
      "Distribución condicionada=Porcentajes por fila o por columna de una tabla",
      "Independencia=Distribuciones condicionadas iguales en todas las filas"
    ],
    g: [
      "Los totales de cada fila y de cada columna son las frecuencias ___.|marginales|conjuntas|esperadas",
      "Si el taller es la posible causa y está en las filas, los porcentajes se calculan por ___.|fila|columna|total",
      "Una tabla con 3 filas y 4 columnas se denomina tabla ___.|3 × 4|4 × 3|12 × 1",
      "De 40 hombres, 10 presentan ansiedad; su porcentaje por fila es el ___.|25 %|10 %|40 %",
      "Si las distribuciones condicionadas difieren entre filas, se dice que hay ___.|asociación|independencia|causalidad"
    ],
    tf: [
      "Los porcentajes por fila y por columna son distribuciones condicionadas.|V",
      "Las frecuencias marginales describen la relación entre las dos variables.|F|Los marginales describen cada variable por separado; la relación se ve en las distribuciones condicionadas.",
      "Si las distribuciones condicionadas son iguales en todas las filas, las variables son independientes.|V",
      "Con grupos de distinto tamaño, lo adecuado es comparar las frecuencias absolutas de cada casilla.|F|Las frecuencias absolutas se comparan mal con grupos desiguales; por eso se calculan porcentajes."
    ],
    q: [
      "En una muestra, presentan ansiedad 10 de 40 hombres y 24 de 60 mujeres. ¿Qué porcentajes por fila se comparan?|25 % y 40 %|10 % y 24 %|29 % y 71 %|10/40 = 25 % y 24/60 = 40 %. 29 % y 71 % (10/34 y 24/34) serían porcentajes por columna.",
      "En la tabla del taller, 30 de los 50 aprobados hicieron el taller. ¿Qué responde ese 60 % por columna?|De los que aprobaron, cuántos hicieron el taller|De los que hicieron el taller, cuántos aprobaron|Qué parte del total hizo el taller y aprobó|El porcentaje por columna divide entre el total de la columna «Aprueba»: de los que aprobaron, el 60 % hizo el taller.",
      "Un estudio relaciona tipo de terapia (filas) y mejoría (columnas). ¿Cómo conviene calcular los porcentajes?|Por fila, en la dirección de la terapia|Por columna, en la dirección de la mejoría|Sobre el total de la tabla|Se calculan en la dirección de la variable explicativa (la terapia) y se comparan en la otra dirección.",
      "¿Qué significa que dos variables categóricas sean independientes?|La fila no altera la probabilidad de cada columna|Todas las filas tienen los mismos totales marginales|Todas las casillas presentan la misma frecuencia|Si son independientes, las distribuciones condicionadas son iguales: saber la fila no cambia la probabilidad de cada columna."
    ],
    inc: [
      "Sobre las tablas de contingencia|Las marginales están en el interior de la tabla|Las conjuntas son las frecuencias de cada casilla|N es el número total de casos de la tabla|Las marginales son los totales de filas y columnas; el interior lo ocupan las frecuencias conjuntas."
    ],
    seq: [],
    cls: [
      "Tipo de frecuencia en la tabla del taller|Conjunta: hicieron el taller y aprobaron; no hicieron el taller y suspendieron|Marginal: total de los que hicieron el taller; total de aprobados"
    ] },
  { t: "Frecuencias esperadas y estadístico χ²",
    tip: "Las frecuencias esperadas son las que habría con independencia manteniendo los marginales: total de fila por total de columna entre N. χ² suma, casilla a casilla, (n − e)²/e: vale 0 si observadas y esperadas coinciden y nunca es negativo. Sus gl son (I − 1) · (J − 1); con gl = 1 y α = 0,05 el valor crítico es 3,84. El supuesto de frecuencias mínimas se refiere a las esperadas, no a las observadas.",
    v: [
      "Frecuencia esperada=(total de fila × total de columna) / N; lo esperable con independencia",
      "Chi cuadrado de Pearson=Suma de (n − e)² / e; discrepancia entre observadas y esperadas",
      "Grados de libertad=(I − 1) · (J − 1) en una tabla I × J",
      "Valor crítico con gl 1=3,84, para α de 0,05",
      "Valor crítico con gl 2=5,99, para α de 0,05",
      "Prueba exacta de Fisher=Alternativa en tablas 2 × 2 si no se cumple el supuesto de las esperadas",
      "χ² nulo=Coincidencia total entre frecuencias observadas y esperadas",
      "Observaciones independientes=Cada caso aparece en una sola casilla de la tabla"
    ],
    g: [
      "Con un total de fila de 40, un total de columna de 50 y N = 200, la frecuencia esperada es ___.|10|0,8|2 000",
      "Una tabla 2 × 5 tiene ___ grados de libertad.|4|10|6",
      "El supuesto de que haya al menos 5 casos por casilla se refiere a las frecuencias ___.|esperadas|observadas|marginales",
      "Como las diferencias se elevan al cuadrado, χ² nunca es ___.|negativo|positivo|decimal",
      "Con gl = 1 y α = 0,05, se rechaza la independencia si χ² supera ___.|3,84|1,96|5,99"
    ],
    tf: [
      "χ² = 0 indica que las frecuencias observadas coinciden con las esperadas.|V",
      "Si alguna frecuencia observada es menor que 5, no puede aplicarse χ².|F|La regla se refiere a las frecuencias esperadas, no a las observadas.",
      "Una tabla 2 × 2 tiene 1 grado de libertad: fijados los marginales, una casilla determina las demás.|V",
      "Un χ² negativo indica una asociación inversa entre las variables.|F|χ² nunca es negativo, porque las diferencias entre observadas y esperadas se elevan al cuadrado."
    ],
    q: [
      "En la tabla del taller (30, 20 / 20, 30; N = 100), todas las esperadas valen 25. ¿Cuánto vale χ²?|4,00|1,00|4,17|Cada casilla aporta 5²/25 = 1 y la suma es 4,00. Dividir entre las observadas en vez de entre las esperadas da 4,17.",
      "¿Cuántos grados de libertad tiene una tabla 3 × 4?|6|12|7|(3 − 1) · (4 − 1) = 6. 12 es el número de casillas y 7, la suma de filas y columnas.",
      "En una tabla 2 × 2, una casilla tiene una frecuencia esperada de 3,2. ¿Qué se recomienda?|Usar la prueba exacta de Fisher|Aplicar χ² sin más cambios|Eliminar los casos de esa casilla|En 2 × 2 se suele exigir que todas las esperadas sean al menos 5; si no, se usa la prueba exacta de Fisher.",
      "Una tabla 3 × 2 da χ² = 4,50. Con α = 0,05, ¿qué se decide?|Mantener la independencia|Rechazar la independencia|Rechazar, porque supera 3,84|gl = (3 − 1)(2 − 1) = 2 y el crítico es 5,99, que 4,50 no supera. Comparar con 3,84 (gl = 1) es un error típico."
    ],
    inc: [
      "Sobre el estadístico χ²|Puede tomar valores negativos|Vale 0 con independencia perfecta|Crece con la discrepancia respecto a lo esperado|χ² suma cuadrados divididos entre frecuencias positivas, así que nunca es negativo."
    ],
    seq: [
      "Cálculo e interpretación de χ²|Calcular los totales marginales>Obtener las frecuencias esperadas>Calcular (n − e)²/e en cada casilla>Sumar los cocientes>Comparar con el valor crítico según los gl"
    ],
    cls: [] },
  { t: "Intensidad de la asociación: φ y V de Cramer",
    tip: "χ² depende del tamaño de la muestra: multiplicar todas las frecuencias por 10 multiplica χ² por 10 sin cambiar las proporciones. Por eso indica si la asociación es compatible con el azar, pero no si es fuerte. Para la intensidad se usan φ, en tablas 2 × 2, y la V de Cramer, en tablas de cualquier tamaño; ambas eliminan el efecto de N y van de 0 a 1.",
    v: [
      "Coeficiente phi=√(χ² / N); intensidad de la asociación en tablas 2 × 2",
      "V de Cramer=√(χ² / (N · (k − 1))); intensidad en tablas de cualquier tamaño",
      "k (V de Cramer)=Menor de los números de filas y columnas",
      "φ con signo=Correlación de Pearson entre dos dicotómicas codificadas con 0 y 1",
      "Dependencia de N=Propiedad de χ²: crece con la muestra aunque no cambien las proporciones",
      "Asociación pequeña (2 × 2)=Valor orientativo de φ o V en torno a 0,10",
      "Asociación media (2 × 2)=Valor orientativo de φ o V en torno a 0,30",
      "Asociación grande (2 × 2)=Valor orientativo de φ o V en torno a 0,50"
    ],
    g: [
      "Con χ² = 9 y N = 100, el coeficiente φ vale ___.|0,30|0,09|0,90",
      "En una tabla 2 × 2, la V de Cramer coincide con el valor absoluto de ___.|φ|χ²|r²",
      "Si se multiplican por 10 todas las frecuencias, χ² se multiplica por 10 y φ ___.|no cambia|se multiplica por 10|se divide entre 10",
      "En una tabla 3 × 4, el término k − 1 de la V de Cramer vale ___.|2|3|6",
      "Cuando φ se calcula con las frecuencias lleva signo, que depende del ___ de las categorías.|orden|número|tamaño"
    ],
    tf: [
      "Un χ² muy grande indica necesariamente una asociación fuerte.|F|χ² crece con N; para la intensidad hay que mirar φ o la V de Cramer y los porcentajes.",
      "La V de Cramer puede usarse en tablas de cualquier tamaño.|V",
      "El coeficiente φ es la medida de intensidad adecuada para una tabla 3 × 3.|F|φ es para tablas 2 × 2; en tablas mayores se usa la V de Cramer.",
      "En tablas mayores que 2 × 2, las referencias 0,10, 0,30 y 0,50 deben interpretarse con prudencia.|V"
    ],
    q: [
      "Una tabla 3 × 3 con N = 100 da χ² = 18. ¿Cuánto vale la V de Cramer?|0,30|0,42|0,18|V = √(18 / (100 · 2)) = √0,09 = 0,30. Olvidar k − 1 da √0,18 ≈ 0,42, y 0,18 es χ²/N sin raíz.",
      "Dos tablas 2 × 2 tienen las mismas proporciones en cada casilla, una con N = 100 y otra con N = 1 000. ¿Qué ocurre?|Igual φ y χ² diez veces mayor en la segunda|Igual χ² y φ diez veces mayor en la segunda|χ² y φ diez veces mayores en la segunda|Con las mismas proporciones, φ no cambia; χ² se multiplica por 10 (en la tabla del taller, de 4 a 40).",
      "Una tabla 2 × 2 con N = 100 da χ² = 4,00. ¿Cuánto vale φ?|0,20|0,04|2,00|φ = √(4/100) = 0,20. 0,04 olvida la raíz y 2,00 olvida dividir entre N.",
      "¿Qué pregunta responde χ² que no responden φ ni V?|Si la asociación es compatible con el azar|Cuán fuerte es la asociación entre ambas|Qué porcentaje de casos hay en cada fila|χ² valora la compatibilidad con la independencia; φ y V miden la intensidad sin depender de N."
    ],
    inc: [
      "Sobre φ y V de Cramer|Ambos aumentan al multiplicar N por 10|Eliminan el efecto del tamaño muestral|Valen 0 si las variables son independientes|Al multiplicar las frecuencias por 10 crece χ², pero φ y V no cambian porque las proporciones son las mismas."
    ],
    seq: [],
    cls: [
      "Qué informa cada medida|Compatibilidad con el azar: χ²; valor p de χ²|Intensidad de la asociación: φ; V de Cramer"
    ] },
  { t: "Tablas de contingencia en SPSS e informe de resultados",
    tip: "En SPSS se usa Analizar > Estadísticos descriptivos > Tablas cruzadas, con la explicativa habitualmente en filas; en Estadísticos se marcan Chi-cuadrado y Phi y V de Cramer, y en Casillas se piden esperadas y porcentajes. En tablas 2 × 2 la salida añade la corrección de Yates y la prueba exacta de Fisher, y una nota indica las casillas con esperada menor que 5. El informe da porcentajes, χ² con gl y N, p y una medida de intensidad.",
    v: [
      "Tablas cruzadas=Procedimiento de SPSS para tablas de contingencia y χ²",
      "Casillas=Botón de Tablas cruzadas para pedir esperadas y porcentajes",
      "Botón Estadísticos=Lugar donde se marcan Chi-cuadrado y Phi y V de Cramer",
      "Corrección de Yates=Versión más conservadora de χ² que SPSS muestra en tablas 2 × 2",
      "Nota al pie=Indica cuántas casillas tienen frecuencia esperada menor que 5",
      "Chi-cuadrado de Pearson=Fila de la salida con el estadístico explicado en la unidad",
      "Contingency Tables=Procedimiento de jamovi, dentro de Frequencies, para estas tablas",
      "Informe de χ²=Porcentajes, estadístico con gl y N, valor p y medida de intensidad"
    ],
    g: [
      "Con la corrección de Yates, el χ² del ejemplo del taller baja de 4,00 a ___.|3,24|3,84|2,00",
      "En Tablas cruzadas, la variable explicativa se coloca habitualmente en ___.|filas|columnas|capas",
      "Las frecuencias esperadas y los porcentajes se piden en el botón ___.|Casillas|Estadísticos|Formato",
      "La nota al pie informa de cuántas casillas tienen frecuencia esperada menor que ___.|5|1|10",
      "La corrección de continuidad de Yates es una versión más ___ del χ².|conservadora|permisiva|arriesgada"
    ],
    tf: [
      "En tablas 2 × 2, SPSS muestra además la corrección de Yates y la prueba exacta de Fisher.|V",
      "Para informar de una tabla de contingencia basta con dar el valor p de χ².|F|Hay que dar porcentajes, χ² con gl y N, el valor p y una medida de intensidad como φ.",
      "La nota al pie de la tabla de χ² permite comprobar rápidamente el supuesto de las frecuencias esperadas.|V",
      "La corrección de Yates es más liberal que el χ² de Pearson: rechaza la independencia con más facilidad.|F|Es más conservadora: en el ejemplo del taller χ² baja de 4,00 a 3,24 y p sube de 0,046 a 0,072."
    ],
    q: [
      "En el informe «χ²(1, N = 100) = 4,00, p = 0,046, φ = 0,20», ¿qué indica el 1?|Los grados de libertad|El número de tablas|El tamaño del efecto|Entre paréntesis van los gl, (2 − 1)(2 − 1) = 1, y el número de casos.",
      "En el estudio del taller, χ² = 4,00 (p = 0,046) y con Yates χ² = 3,24 (p = 0,072). ¿Qué lectura es la más prudente?|El resultado está en el límite|La asociación es muy fuerte|No hay ninguna asociación|El resultado está en el límite y conviene no darle más peso del que tiene; además, φ = 0,20 es una asociación pequeña-media.",
      "En el estudio del taller, los estudiantes se asignaron al azar a los grupos. ¿Por qué importa?|Permite atribuirla al taller|Hace que χ² no dependa de N|Garantiza esperadas mayores que 5|Con asignación aleatoria la diferencia puede atribuirse con razonable confianza al taller; si eligieran, la motivación podría confundir.",
      "¿Dentro de qué menú de SPSS se encuentra Tablas cruzadas?|Estadísticos descriptivos|Comparar medias y proporciones|Modelos lineales generales|La ruta es Analizar > Estadísticos descriptivos > Tablas cruzadas."
    ],
    inc: [
      "Sobre el informe de una tabla de contingencia|No hace falta indicar los gl ni N|Se dan los porcentajes relevantes|Se incluye φ o la V de Cramer|El formato es χ²(gl, N) seguido del valor, p y una medida de intensidad, como en χ²(1, N = 100) = 4,00."
    ],
    seq: [
      "Tabla de contingencia en SPSS|Abrir Analizar, Estadísticos descriptivos, Tablas cruzadas>Colocar una variable en Filas y otra en Columnas>Marcar Chi-cuadrado y Phi y V de Cramer en Estadísticos>Pedir esperadas y porcentajes en Casillas>Revisar la nota sobre esperadas menores que 5"
    ],
    cls: [] }
] },
{ n: 15, t: "Distribuciones muestrales y distribución normal", cap: 5, pir: "media", mods: [
  { t: "Variables aleatorias",
    tip: "Una variable aleatoria asigna un número a cada resultado de un experimento aleatorio. Las discretas toman valores contables y se describen con una función de probabilidad; las continuas, con una función de densidad de área total 1, en la que un valor exacto tiene probabilidad 0 y solo los intervalos tienen probabilidad. La esperanza μ y la varianza σ² son parámetros, y la función de distribución F(x) da la probabilidad acumulada.",
    v: [
      "Variable aleatoria=Regla que asigna un número a cada resultado de un experimento aleatorio",
      "Variable discreta=Toma valores aislados que se pueden contar",
      "Variable continua=Puede tomar cualquier valor dentro de un intervalo",
      "Función de probabilidad=Da la probabilidad de cada valor de una variable discreta",
      "Función de densidad=Curva de área total 1; las probabilidades son áreas bajo ella",
      "Esperanza=Media teórica de una variable aleatoria, E(X)",
      "Función de distribución=F(x); probabilidad acumulada hasta un valor, P(X ≤ x)",
      "Máquina de Galton=Dispositivo en el que la suma de muchos rebotes al azar forma una campana"
    ],
    g: [
      "En una variable continua, la probabilidad de un valor exacto es ___.|0|1|0,5",
      "El número de aciertos en un test de 20 ítems es una variable aleatoria ___.|discreta|continua|constante",
      "La función de distribución es la versión teórica de la frecuencia relativa ___.|acumulada|conjunta|marginal",
      "La esperanza y la varianza de una variable aleatoria son ___, no valores de un grupo concreto.|parámetros|estimadores|frecuencias",
      "Si F(a) = 0,70 en una variable continua, la probabilidad de superar a es ___.|0,30|0,70|1,70"
    ],
    tf: [
      "El tiempo de reacción en milisegundos es una variable aleatoria continua.|V",
      "En una variable continua, P(X = 20) se obtiene leyendo la altura de la función de densidad en 20.|F|En una continua, un valor exacto tiene probabilidad 0; solo los intervalos tienen probabilidad, igual al área.",
      "El área total bajo una función de densidad vale 1.|V",
      "La esperanza de una variable aleatoria es la media de un grupo concreto de datos.|F|Es un parámetro: describe la variable en la población o «a la larga», no un grupo concreto de datos."
    ],
    q: [
      "Un psicólogo registra cuántos episodios de insomnio tiene un paciente en un mes. ¿Cómo se describe esta variable?|Con una función de probabilidad|Con una función de densidad|Con una función de regresión|Es discreta (valores contables); la función de densidad es propia de las variables continuas.",
      "En una variable continua, F(10) = 0,40 y F(15) = 0,85. ¿Cuánto vale P(10 ≤ X ≤ 15)?|0,45|1,25|0,85|P = F(15) − F(10) = 0,85 − 0,40 = 0,45. Sumar las áreas o quedarse con F(15) son errores.",
      "¿Por qué muchas variables psicológicas tienden a tener forma de campana?|Suman muchos factores pequeños independientes|Dependen de un solo factor genético potente|Se miden siempre con escalas de intervalo|Genes, experiencias, estado del día y errores de medida se suman; como en la máquina de Galton, el resultado tiende a la campana.",
      "¿Qué tiene probabilidad distinta de 0 en una variable continua?|Los intervalos de valores|Cada valor exacto|Solo los valores enteros|La probabilidad es el área bajo la curva entre dos límites; un valor exacto no tiene área."
    ],
    inc: [
      "Sobre las variables aleatorias|La densidad da la probabilidad de cada valor exacto|Una discreta se describe con una función de probabilidad|F(x) es la probabilidad acumulada hasta x|En una continua, la probabilidad de un valor exacto es 0; solo los intervalos tienen probabilidad."
    ],
    seq: [],
    cls: [
      "Tipo de variable aleatoria|Discreta: aciertos en un test de 20 ítems; episodios de insomnio en un mes|Continua: tiempo de reacción en ms; estatura"
    ] },
  { t: "La distribución normal",
    tip: "La normal queda definida por μ y σ: es simétrica, con media, mediana y moda en μ, asintótica, con puntos de inflexión en μ − σ y μ + σ, y mesocúrtica. Sea cual sea la normal, μ ± 1σ recoge el 68,3 % de los casos, μ ± 2σ el 95,4 %, μ ± 3σ el 99,7 % y μ ± 1,96σ exactamente el 95 %. Tipificar con z = (x − μ)/σ la convierte en N(0, 1) sin cambiar su forma.",
    v: [
      "Distribución normal=Distribución continua, simétrica y en campana definida por μ y σ",
      "Normal tipificada=Normal con media 0 y desviación típica 1",
      "Asintótica=Sus colas se acercan al eje horizontal sin llegar a tocarlo",
      "Puntos de inflexión=En una normal, se sitúan en μ − σ y μ + σ",
      "μ ± 1σ=Intervalo que recoge el 68,3 % de los casos en una normal",
      "μ ± 1,96σ=Intervalo que recoge exactamente el 95 % de los casos",
      "Mesocúrtica=Apuntamiento de la normal, que sirve de referencia para la curtosis",
      "Tipificar=Restar la media y dividir entre la desviación típica"
    ],
    g: [
      "Con el CI, N(100, 15), alrededor del 95 % de la población puntúa entre 70 y ___.|130|115|145",
      "En una distribución normal, la media, la mediana y la moda ___.|coinciden|difieren|se anulan",
      "Con el CI, N(100, 15), una persona con 85 puntos tiene una z de ___.|−1|1|−15",
      "Algunos manuales escriben N(μ, σ²), con la ___ en lugar de la desviación típica.|varianza|media|mediana",
      "En una normal, por encima de μ + 1σ queda aproximadamente el ___ de los casos.|16 %|32 %|34 %"
    ],
    tf: [
      "En una normal, entre μ − 2σ y μ + 2σ queda exactamente el 95 % de los casos.|F|μ ± 2σ recoge el 95,4 %; el 95 % exacto corresponde a μ ± 1,96σ.",
      "Tipificar una variable normal cambia su escala, pero no su forma.|V",
      "Como la normal es asintótica, cualquier valor es posible, aunque los alejados de μ son muy improbables.|V",
      "Los puntos de inflexión de la normal están en μ − 2σ y μ + 2σ.|F|Están a una desviación típica de la media: en μ − σ y μ + σ."
    ],
    q: [
      "Con el CI distribuido como N(100, 15), ¿qué puntuación corresponde a z = 2?|130|115|102|x = μ + z · σ = 100 + 2 · 15 = 130. 102 suma z a la media sin multiplicar por σ.",
      "En una normal, ¿qué porcentaje aproximado de casos queda entre μ y μ + 1σ?|34 %|68 %|16 %|Por simetría, la mitad del 68,3 %: un 34 %. El 16 % es lo que queda por encima de μ + 1σ.",
      "Una escala normal tiene μ = 50 y σ = 10. ¿Qué z obtiene una persona con 35 puntos?|−1,5|1,5|−15|z = (35 − 50)/10 = −1,5. Olvidar dividir entre σ da −15; el signo indica que está por debajo de la media.",
      "Además de describir variables como el CI, ¿por qué es tan importante la normal?|Describe cómo varían las medias de muestras|Es la única distribución que puede tipificarse|Todas las variables psicológicas son normales|Su papel central es describir la distribución de las medias muestrales, base de toda la inferencia (15.4)."
    ],
    inc: [
      "Sobre la distribución normal|Su media y su mediana pueden diferir|Es simétrica respecto a μ|Su área total bajo la curva vale 1|En la normal, media, mediana y moda coinciden en μ."
    ],
    seq: [],
    cls: [
      "Proporción de casos en una normal|Alrededor del 68 %: μ ± 1σ|Alrededor del 95 %: μ ± 2σ; μ ± 1,96σ|Más del 99 %: μ ± 3σ"
    ] },
  { t: "La tabla de la normal tipificada",
    tip: "La tabla habitual da el área acumulada a la izquierda de z, P(Z ≤ z). Con ella y la simetría se resuelve todo: la cola derecha es 1 − P(Z ≤ a), los valores negativos se obtienen por simetría, los intervalos restando dos lecturas y los percentiles por búsqueda inversa. Conviene recordar 1,645 (5 % en una cola), 1,96 (95 % central), 2,576 (99 % central) y 0,84 (potencia de 0,80).",
    v: [
      "P(Z ≤ a)=Lectura directa en la tabla de áreas a la izquierda",
      "P(Z ≥ a)=Se obtiene como 1 − P(Z ≤ a)",
      "z de 1,645=Deja el 5 % en una cola; contraste unilateral con α de 0,05",
      "z de 1,96=Deja el 2,5 % en cada cola, el 95 % central",
      "z de 2,576=Deja el 0,5 % en cada cola, el 99 % central",
      "z de 0,84=Deja el 20 % en la cola derecha; se usa en el cálculo de la potencia",
      "Búsqueda inversa=Localizar una proporción en el cuerpo de la tabla para hallar su z",
      "Percentil 90 de Z=Valor de aproximadamente 1,28, que deja el 90 % por debajo"
    ],
    g: [
      "Si P(Z ≤ 1,50) = 0,9332, entonces P(Z ≥ 1,50) vale ___.|0,0668|0,9332|0,4332",
      "Por simetría, si P(Z ≤ 1,50) = 0,9332, P(Z ≤ −1,50) vale ___.|0,0668|0,4332|0,5668",
      "P(−1 ≤ Z ≤ 1) se calcula como 0,8413 − ___ = 0,6826.|0,1587|0,8413|0,5000",
      "El valor z que deja por debajo el 90 % de los casos es aproximadamente ___.|1,28|1,645|0,90",
      "Para un contraste unilateral con α = 0,05, el valor de referencia es z = ___.|1,645|1,96|2,576"
    ],
    tf: [
      "Todas las tablas de la normal dan el área acumulada a la izquierda de z.|F|Algunas dan el área entre 0 y z o solo la mitad derecha; hay que comprobar qué área recoge cada tabla.",
      "P(Z ≥ 2,00) vale 0,0228, algo más del 2 %.|V",
      "El valor 2,576 deja el 0,5 % en cada cola y se usa en el IC al 99 %.|V",
      "Si P(Z ≤ 1,5) = 0,9332, entonces P(Z ≤ −1,5) = 0,4332.|F|Por simetría, P(Z ≤ −1,5) = 1 − 0,9332 = 0,0668; 0,4332 es el área entre 0 y 1,5."
    ],
    q: [
      "Con el CI como N(100, 15) y P(Z ≤ 1,50) = 0,9332, ¿qué proporción tiene un CI de 122,5 o menos?|0,9332|0,0668|0,4332|z = (122,5 − 100)/15 = 1,50 y la tabla da directamente el área a la izquierda: 0,9332.",
      "Con el CI como N(100, 15) y P(Z ≤ 2) = 0,9772, ¿qué proporción supera 130?|0,0228|0,9772|0,0456|z = 2,00 y P(Z ≥ 2) = 1 − 0,9772 = 0,0228. 0,0456 suma las dos colas.",
      "Si P(Z ≤ 1,5) = 0,9332, ¿cuánto vale P(0 ≤ Z ≤ 1,5)?|0,4332|0,9332|0,0668|Se resta la mitad izquierda de la curva: 0,9332 − 0,5 = 0,4332.",
      "Con el CI como N(100, 15), ¿qué puntuación corresponde al percentil 90 (z ≈ 1,28)?|119,2|101,28|113,5|x = 100 + 1,28 · 15 = 119,2. 101,28 suma z sin multiplicar por σ, y 113,5 usa 0,90 como si fuera z."
    ],
    inc: [
      "Sobre los valores z que conviene recordar|1,96 deja el 5 % en cada cola|1,645 deja el 5 % en una cola|2,576 deja el 99 % en el centro|1,96 deja el 2,5 % en cada cola (95 % central); el 5 % en una sola cola corresponde a 1,645."
    ],
    seq: [
      "Calcular una proporción con la tabla normal|Tipificar el valor con z igual a (x − μ)/σ>Comprobar qué área recoge la tabla>Leer el área acumulada para ese z>Aplicar el complemento o la simetría si hace falta"
    ],
    cls: [] },
  { t: "Distribución muestral de la media y teorema central del límite",
    tip: "Las medias de muestras de tamaño n varían de una muestra a otra; su distribución muestral tiene media μ y desviación típica σ/√n, el error típico. Para reducir el error típico a la mitad hay que cuadruplicar n. Si la población es normal, x̄ es normal con cualquier n; si no, el TCL asegura que se aproxima a la normal al crecer n. El TCL habla de la media, no de los datos. Si σ se estima con s, se usa la t de Student.",
    v: [
      "Distribución muestral=Distribución de un estadístico en todas las muestras posibles de tamaño n",
      "Error típico de la media=Desviación típica de la distribución muestral de la media, σ/√n",
      "Teorema central del límite=La media muestral tiende a distribuirse normalmente al aumentar n",
      "E(x̄)=Media de la distribución muestral, que coincide con μ",
      "t de Student=Distribución que sustituye a la normal cuando σ se estima con s",
      "William S. Gosset=Químico de Guinness que publicó la t en 1908 como «Student»",
      "gl de la t=n − 1 en el contraste de una media, al estimar σ con s",
      "Regla de n ≥ 30=Criterio práctico, no teorema, para dar por buena la aproximación normal"
    ],
    g: [
      "Con σ = 20 y n = 100, el error típico de la media vale ___.|2|0,2|20",
      "Para reducir el error típico a la mitad hay que multiplicar n por ___.|4|2|√2",
      "Frente a la normal, la t de Student tiene colas más ___.|pesadas|ligeras|asimétricas",
      "El teorema central del límite se refiere a la distribución de la ___.|media muestral|puntuación individual|varianza muestral",
      "El valor t que deja el 95 % central con 24 gl es ___, frente a 1,96 en la normal.|2,064|1,984|1,645"
    ],
    tf: [
      "Con 30 o más participantes, la distribución de los datos de la muestra se vuelve normal.|F|El TCL dice que se aproxima a la normal la distribución de la media muestral, no la de los datos.",
      "Si la población es normal, la distribución de x̄ es normal para cualquier tamaño muestral.|V",
      "La t de Student se aproxima a la normal a medida que aumentan los grados de libertad.|V",
      "La regla n ≥ 30 es un teorema que garantiza la normalidad de x̄ en cualquier población.|F|Es una regla práctica: con poblaciones muy asimétricas o con valores extremos puede hacer falta bastante más."
    ],
    q: [
      "Con el CI como N(100, 15) y P(Z ≤ 2) = 0,9772, ¿qué probabilidad hay de que la media de 25 personas sea 106 o más?|0,0228|0,3446|0,9772|ET = 15/√25 = 3; z = 6/3 = 2 y P(Z ≥ 2) = 0,0228. 0,3446 es la probabilidad para una sola persona (z = 0,40).",
      "Una prueba tiene σ = 12. ¿Cuál es el error típico de la media con n = 36?|2|0,33|12|σ/√n = 12/6 = 2. 0,33 divide entre n (12/36) en lugar de entre √n; 12 confunde σ con el error típico.",
      "Un equipo amplía su muestra de n = 25 a n = 100. ¿Qué ocurre con el error típico?|Se reduce a la mitad|Se reduce a la cuarta parte|No cambia, depende de σ|El ET disminuye con √n: multiplicar n por 4 divide el ET entre √4 = 2.",
      "¿Por qué la t de Student tiene colas más pesadas que la normal?|Porque s varía entre muestras|Porque la población es asimétrica|Porque usa n en vez de n − 1|Al sustituir σ por s se añade incertidumbre, ya que s también cambia de una muestra a otra."
    ],
    inc: [
      "Sobre el error típico de la media|Mide cuánto difieren las personas entre sí|Disminuye al aumentar el tamaño muestral|Mide la precisión de x̄ para estimar μ|Cuánto difieren las personas lo mide σ; el error típico mide cuánto varían las medias de una muestra a otra."
    ],
    seq: [],
    cls: [
      "Desviación típica frente a error típico|Desviación típica (σ): variabilidad entre personas; no disminuye al crecer n|Error típico (σ/√n): variabilidad entre medias muestrales; disminuye al crecer n"
    ] }
] },
{ n: 16, t: "Estimación por intervalos y contraste de hipótesis", cap: 5, pir: "alta", mods: [
  { t: "Estimación puntual e intervalos de confianza",
    tip: "Un parámetro puede estimarse con un único valor (estimación puntual) o con un intervalo. Un buen estimador es insesgado, eficiente, consistente y suficiente; la cuasivarianza es insesgada y la varianza con n, sesgada. El IC para la media con σ conocida es x̄ ± z · σ/√n; su amplitud crece con la confianza y con σ y disminuye con n. El 95 % se refiere al procedimiento, no a un intervalo concreto.",
    v: [
      "Estimador insesgado=Su valor esperado coincide con el parámetro",
      "Estimador eficiente=Entre los insesgados, el que tiene menor varianza",
      "Estimador consistente=Se acerca cada vez más al parámetro al aumentar n",
      "Estimador suficiente=Aprovecha toda la información relevante de la muestra",
      "Intervalo de confianza=Rango de valores plausibles del parámetro, con un nivel de confianza",
      "Margen de error=z · σ/√n; mitad de la amplitud del intervalo",
      "Nivel de confianza=1 − α, normalmente el 95 %",
      "Cuasivarianza=Estimador insesgado de σ², calculado con n − 1"
    ],
    g: [
      "Con x̄ = 50, σ = 10 y n = 25, el margen de error al 95 % es ___.|3,92|1,96|19,6",
      "La varianza calculada con n tiende a quedarse ___ de σ².|por debajo|por encima|a la altura",
      "Para reducir el margen de error a la mitad hay que multiplicar n por ___.|4|2|8",
      "Al pasar del 95 % al 99 % de confianza, el valor z pasa de 1,96 a ___.|2,576|1,645|3,00",
      "Si σ es desconocida, en lugar de 1,96 se usa el valor crítico de la ___ con n − 1 gl.|t de Student|χ² de Pearson|normal tipificada"
    ],
    tf: [
      "Un IC al 95 % de [94,12; 105,88] significa que hay un 95 % de probabilidad de que μ esté en él.|F|En el enfoque clásico, el 95 % describe el método: alrededor del 95 % de los intervalos así construidos contiene μ.",
      "La amplitud del intervalo aumenta con el nivel de confianza y con la variabilidad.|V",
      "La media muestral es un estimador insesgado y consistente de μ.|V",
      "Al aumentar el tamaño de la muestra, el intervalo de confianza se hace más ancho.|F|Ocurre lo contrario: al crecer n baja el error típico y el intervalo se estrecha."
    ],
    q: [
      "Con x̄ = 50, σ = 10 y n = 25, ¿cuál es el IC al 95 % para μ?|[46,08; 53,92]|[48,04; 51,96]|[30,40; 69,60]|ET = 10/5 = 2 y margen = 1,96 · 2 = 3,92. Usar σ en lugar del ET da [30,40; 69,60]; olvidar el ET, [48,04; 51,96].",
      "Un estudio da un IC al 95 % de [94,12; 105,88] para μ. ¿Qué interpretación es correcta?|El 95 % de los IC así obtenidos contiene μ|El 95 % de las personas puntúa en ese rango|Hay un 95 % de probabilidad de que x̄ esté ahí|La confianza se refiere al procedimiento: el 95 % de los intervalos así construidos contiene μ. No habla de personas ni de x̄.",
      "Con x̄ = 50, σ = 10 y n = 25, ¿cuánto vale el margen de error al 99 %?|5,15|3,92|2,58|2,576 · 10/5 = 5,152 ≈ 5,15. 3,92 corresponde al 95 %, y 2,58 olvida multiplicar por el error típico.",
      "¿Qué caracteriza a un estimador eficiente?|Menor varianza entre los insesgados|Valor esperado igual al parámetro|Usa toda la información relevante|Eficiente es, entre los insesgados, el que menos varía de una muestra a otra. Las otras opciones definen insesgado y suficiente."
    ],
    inc: [
      "Sobre la amplitud del intervalo de confianza|Disminuye al aumentar el nivel de confianza|Aumenta con la variabilidad de la población|Disminuye al aumentar el tamaño muestral|Al subir la confianza (del 95 % al 99 %), z pasa de 1,96 a 2,576 y el intervalo se ensancha."
    ],
    seq: [],
    cls: [
      "Sesgo de los estimadores|Insesgado: x̄ para μ; cuasivarianza para σ²|Sesgado: varianza calculada con n para σ²"
    ] },
  { t: "La lógica del contraste de hipótesis",
    tip: "El contraste supone que no hay efecto (H₀) y comprueba si los datos serían raros bajo ese supuesto. H₀ incluye siempre la igualdad; H₁ puede ser bilateral o unilateral y debe fijarse antes de ver los datos. Si el estadístico cae en la región crítica, se rechaza H₀; si no, se mantiene, lo que no prueba que sea verdadera. Con α = 0,05, los críticos son ±1,96 (bilateral) y 1,645 (unilateral derecho).",
    v: [
      "Hipótesis nula (H₀)=Hipótesis de ausencia de efecto que se somete a contraste",
      "Hipótesis alternativa (H₁)=Lo que se acepta si se rechaza la hipótesis de ausencia de efecto",
      "Contraste bilateral=H₁ admite diferencias en cualquier dirección, con el signo ≠",
      "Contraste unilateral=H₁ fija una dirección, mayor o menor que el valor de H₀",
      "Nivel de significación (α)=Probabilidad máxima de rechazar H₀ siendo verdadera que se asume",
      "Región crítica=Valores del estadístico tan extremos que llevan a rechazar H₀",
      "Estadísticamente significativo=Resultado cuyo estadístico cae en la región crítica",
      "Mantener H₀=No rechazarla, sin que ello demuestre que es verdadera"
    ],
    g: [
      "La hipótesis nula siempre incluye la ___.|igualdad|diferencia|dirección",
      "En un contraste bilateral con α = 0,05, en cada cola queda una probabilidad de ___.|0,025|0,05|0,01",
      "Si el estadístico no cae en la región crítica, se dice que se ___ H₀.|mantiene|acepta|demuestra",
      "Con x̄ = 104, μ₀ = 100, σ = 12 y n = 36, el estadístico z vale ___.|2|0,33|4",
      "Elegir la cola después de ver los datos duplica en la práctica el riesgo de error ___.|tipo I|tipo II|de medida"
    ],
    tf: [
      "No rechazar H₀ demuestra que es verdadera.|F|Puede que el efecto exista y la muestra sea pequeña para detectarlo: H₀ se mantiene, no se acepta.",
      "Rechazar H₀ prueba que H₁ es verdadera.|F|Solo indica que los datos son poco compatibles con H₀; no prueba H₁.",
      "Un contraste unilateral solo es legítimo si la dirección se fijó antes de ver los datos.|V",
      "Con σ desconocida, el estadístico para una media sigue una t de Student con n − 1 gl si H₀ es verdadera.|V"
    ],
    q: [
      "Una muestra de 36 personas obtiene x̄ = 104 en una escala con μ₀ = 100 y σ = 12. Con contraste bilateral y α = 0,05, ¿qué se decide?|Rechazar H₀ (z = 2,00)|Mantener H₀ (z = 0,33)|Rechazar H₀ (z = 4,00)|ET = 12/√36 = 2 y z = 4/2 = 2,00 > 1,96: se rechaza H₀. 0,33 olvida la raíz de n y 4,00 no divide entre el ET.",
      "Un equipo plantea, antes de recoger datos, H₁: μ > 100. Con α = 0,05, ¿cuál es el valor crítico de z?|1,645|1,96|2,576|En un contraste unilateral derecho todo α está en una cola: z crítico 1,645. 1,96 corresponde al bilateral.",
      "¿Por qué se contrasta H₀ y no directamente H₁?|Fija un valor concreto del parámetro|Es la hipótesis de investigación|Siempre es la hipótesis verdadera|Al fijar un valor concreto, H₀ permite saber qué distribución seguiría el estadístico; la de investigación suele ser H₁.",
      "Un estudio con n = 12 no rechaza H₀. ¿Qué conclusión es correcta?|Los datos no permiten rechazar H₀|Queda demostrado que no hay efecto|Se debe aceptar H₀ como verdadera|Mantener no es aceptar: con muestras pequeñas un efecto real puede pasar inadvertido."
    ],
    inc: [
      "Sobre la formulación de hipótesis|H₀ puede plantearse como μ ≠ 100|H₁ puede ser bilateral o unilateral|H₀ afirma que no hay efecto ni diferencia|H₀ incluye siempre la igualdad; μ ≠ 100 es una H₁ bilateral."
    ],
    seq: [
      "Pasos del contraste de hipótesis|Formular H₀ y H₁>Comprobar los supuestos>Elegir el estadístico de contraste>Fijar el nivel de significación α>Determinar la región crítica>Calcular el estadístico>Decidir si se rechaza H₀"
    ],
    cls: [] },
  { t: "El valor p y el contraste mediante intervalos",
    tip: "El valor p es la probabilidad de obtener un resultado igual de extremo o más que el observado si H₀ es verdadera, y se rechaza H₀ si p ≤ α. No es la probabilidad de que H₀ sea cierta ni la de que el resultado se deba al azar, y no mide el tamaño del efecto. Un contraste bilateral rechaza H₀ si y solo si μ₀ queda fuera del IC al (1 − α) · 100 %. Qué hacer con el umbral de significación sigue en debate.",
    v: [
      "Valor p=Probabilidad de un resultado igual o más extremo si H₀ es verdadera",
      "Sig.=Etiqueta con la que SPSS muestra el valor p",
      "p bilateral=Suma de las dos colas; el doble de la cola del valor observado",
      "p unilateral=Área de la cola en la dirección prevista",
      "Regla de decisión=Rechazar H₀ cuando p es menor o igual que α",
      "Nueva estadística=Propuesta de centrarse en tamaños del efecto, IC y metaanálisis",
      "Factor de Bayes=Compara cuánto más probables son los datos con una hipótesis que con otra",
      "Declaración de la ASA=Seis principios sobre el valor p publicados en 2016"
    ],
    g: [
      "Con z = 2,30, la p unilateral es 0,0107 y la bilateral, aproximadamente ___.|0,021|0,011|0,989",
      "Se rechaza H₀ cuando el valor p es ___ que α.|menor o igual|mayor o igual|mucho mayor",
      "Si el IC al 95 % de una media es [101,02; 112,78], el contraste bilateral de H₀: μ = 100 con α = 0,05 es ___.|significativo|no significativo|indeterminado",
      "A diferencia de p, el factor de Bayes puede aportar evidencia a favor de ___.|H₀|H₁|α",
      "Benjamin et al. (2018) propusieron un α de ___ para afirmar nuevos descubrimientos.|0,005|0,01|0,10"
    ],
    tf: [
      "Un p = 0,021 significa que hay un 2,1 % de probabilidad de que H₀ sea cierta.|F|p se calcula suponiendo H₀ verdadera: es P(datos ∣ H₀), no P(H₀ ∣ datos).",
      "Un p más pequeño indica siempre un efecto más grande.|F|p depende también de n: con muestras muy grandes, efectos minúsculos dan p muy pequeños.",
      "Si μ₀ queda fuera del IC al 95 %, el contraste bilateral con α = 0,05 rechaza H₀.|V",
      "Un grupo de trabajo de la ASA defendió en 2021 que los valores p, bien aplicados, siguen siendo útiles.|V"
    ],
    q: [
      "Un contraste bilateral da z = 2,00. Si P(Z ≥ 2) = 0,0228, ¿cuál es el valor p?|0,0456|0,0228|0,9772|En un contraste bilateral se suman las dos colas: 2 · 0,0228 = 0,0456. 0,0228 sería la p unilateral.",
      "Un estudio obtiene p = 0,021 en un contraste bilateral. ¿Qué afirmación es correcta?|Con α = 0,01 se mantendría H₀|Hay un 97,9 % de probabilidad de efecto real|El resultado se replicará con un 97,9 % de probabilidad|0,021 > 0,01, así que con α = 0,01 no se rechaza. p no da la probabilidad de H₁ ni de replicación.",
      "Con 20 000 participantes se obtiene p < 0,001 y d = 0,05. ¿Qué conclusión es adecuada?|Significativo, pero de efecto muy pequeño|Efecto grande, porque p es muy pequeño|Error tipo I con toda seguridad|Con n muy grande, efectos minúsculos resultan significativos; p no mide la magnitud del efecto.",
      "¿Qué cuestión sigue abierta en el debate sobre el valor p?|Qué hacer con el umbral|Si mide la probabilidad de H₀|Si depende del tamaño muestral|Hay consenso en que p no da la probabilidad de H₀ y depende de n; lo que se discute es qué hacer con el umbral de significación."
    ],
    inc: [
      "Sobre la interpretación del valor p|Es la probabilidad de que H₀ sea cierta|Se calcula suponiendo que H₀ es verdadera|No mide el tamaño ni la importancia del efecto|Para obtener la probabilidad de H₀ hace falta un enfoque bayesiano con probabilidades previas."
    ],
    seq: [],
    cls: [
      "Interpretaciones del valor p|Correcta: probabilidad de datos tan extremos o más si H₀ fuera cierta|Incorrecta: probabilidad de que H₀ sea cierta; probabilidad de que el resultado se deba al azar; 1 − p como probabilidad de replicación"
    ] },
  { t: "Errores, potencia y tamaño del efecto",
    tip: "Rechazar H₀ siendo verdadera es un error tipo I (probabilidad α); mantenerla siendo falsa, un error tipo II (β). La potencia, 1 − β, es la probabilidad de detectar un efecto que existe; se busca al menos 0,80. Aumenta con el tamaño del efecto, con n, con α y con menor variabilidad; con n y efecto fijos, α y β varían en sentido contrario. La d de Cohen expresa la diferencia en desviaciones típicas, con independencia de n.",
    v: [
      "Error tipo I=Rechazar H₀ cuando es verdadera; falso positivo",
      "Error tipo II=Mantener H₀ cuando es falsa; falso negativo",
      "Potencia=Probabilidad de rechazar H₀ cuando es falsa, 1 − β",
      "β=Probabilidad de cometer un error tipo II",
      "d de Cohen=Diferencia de medias expresada en desviaciones típicas",
      "Análisis de potencia=Cálculo previo del n necesario para detectar un efecto plausible",
      "Tamaño del efecto=Magnitud de un efecto con independencia del tamaño muestral",
      "1 − α=Probabilidad de mantener H₀ cuando es verdadera"
    ],
    g: [
      "Si β = 0,20, la potencia del contraste es ___.|0,80|0,20|0,95",
      "Con n y tamaño del efecto fijos, al reducir α la probabilidad β ___.|aumenta|disminuye|no cambia",
      "Con x̄ = 106,9, μ₀ = 100 y σ = 15, la d de Cohen es ___.|0,46|2,30|6,90",
      "Para d = 0,5, α = 0,05 bilateral y potencia 0,80, una t de dos grupos necesita unas ___ personas por grupo.|64|26|394",
      "Un falso negativo es un error ___.|tipo II|tipo I|de medida"
    ],
    tf: [
      "La probabilidad de error tipo II la fija directamente el investigador al elegir α.|F|El investigador fija α (error tipo I); β depende del tamaño del efecto, de n y de α.",
      "Aumentar el tamaño muestral aumenta la potencia, porque reduce el error típico.|V",
      "Con n y tamaño del efecto fijos, reducir α reduce también β.|F|α y β varían en sentido contrario: un α más estricto aumenta β y reduce la potencia.",
      "Según Cohen, d = 0,5 se considera un efecto mediano.|V"
    ],
    q: [
      "Dos grupos obtienen medias de 52 y 48 con una desviación típica combinada de 8. ¿Cuánto vale d?|0,50|4,00|2,00|d = (52 − 48)/8 = 0,50, un efecto mediano. 4,00 es la diferencia bruta y 2,00 invierte el cociente (8/4).",
      "Un tratamiento eficaz no resulta significativo en un ensayo con 20 personas por grupo y d = 0,5. ¿Qué error es probable?|Error tipo II, por baja potencia|Error tipo I, por α demasiado alto|Ningún error: el efecto no existe|Con 20 por grupo y d = 0,5 la potencia es solo de 0,34: mantener H₀ siendo falsa es un error tipo II.",
      "¿Qué cambio aumenta la potencia de un contraste?|Usar medidas más fiables|Reducir el tamaño muestral|Pasar de α = 0,05 a 0,01|Menos variabilidad (medidas fiables) aumenta la potencia; reducir n o reducir α la disminuyen.",
      "¿Qué piden las normas APA (JARS) al informar de un contraste?|p exacto, tamaño del efecto e IC|Solo «p < 0,05» y la decisión|El estadístico, sin sus gl|Se pide el estadístico con sus gl, el p exacto, el tamaño del efecto con su IC y los descriptivos."
    ],
    inc: [
      "Sobre la potencia|Disminuye si el tamaño del efecto crece|Aumenta al aumentar el tamaño muestral|Por convención, se busca al menos 0,80|Un efecto mayor separa más las distribuciones de H₀ y H₁, así que aumenta la potencia."
    ],
    seq: [],
    cls: [
      "Tipo de decisión en un contraste|Error: rechazar H₀ verdadera; mantener H₀ falsa|Acierto: rechazar H₀ falsa; mantener H₀ verdadera"
    ] }
] }
);

SP.register(window.COURSE);
})({});
