(function(window){
// SAIMAP Psicología · Psicología: historia, ciencia y profesión
// Contenido alineado con el temario SAIMAP «Psicología: historia, ciencia y profesión» (v1.0, octubre de 2026).
window.COURSE = {
  id: "historia",
  title: "Psicología: historia, ciencia y profesión",
  short: "Historia",
  area: "Fundamentos e historia",
  rutas: { grado: { curso: 1 }, pir: { bloque: "Historia, profesión y deontología" } },
  temario: "Psicologia-Historia-Ciencia-y-Profesion_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "La historia de la psicología y sus orígenes", from: 1, to: 3 },
    { n: 2, t: "Europa hasta la II Guerra Mundial", from: 4, to: 7 },
    { n: 3, t: "Estados Unidos hasta la II Guerra Mundial", from: 8, to: 10 },
    { n: 4, t: "La psicología después de la II Guerra Mundial", from: 11, to: 14 },
    { n: 5, t: "La profesión: España, ética y deontología", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Historia · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "¿Qué es la historia de la psicología?", cap: 1, pir: "baja", mods: [
  { t: "Para qué sirve la historia de una ciencia",
    tip: "La psicología tiene un pasado largo, el de la reflexión filosófica, y una historia corta, que empieza en el siglo XIX con el laboratorio y la medida. Su historia ayuda a entender los conceptos, a pensar de forma crítica, a dar identidad a la profesión y a aprender de abusos pasados. También sirve para corregir los manuales: cuando una fuente secundaria contradice a una primaria, prevalece la primaria.",
    v: [
      "Historia de la psicología=Reconstrucción de cómo surgieron las preguntas, conceptos y procedimientos de la disciplina",
      "Pasado largo=Reflexión filosófica previa sobre el alma, el conocimiento y las pasiones",
      "Historia corta=Etapa iniciada en el siglo XIX, con medida, laboratorio y enseñanza universitaria",
      "Fuentes primarias=Documentos de la época, como artículos originales, cartas o cuadernos de laboratorio",
      "Fuentes secundarias=Interpretaciones posteriores, como manuales, biografías o revisiones",
      "Mito frecuente=Recuadro del libro que corrige relatos repetidos de manual en manual",
      "Pensamiento crítico=Función de ver que el consenso de una época puede caer",
      "Conciencia ética=Función de aprender de abusos pasados, como la eugenesia"
    ],
    g: [
      "Cuando una fuente secundaria contradice a una primaria, prevalece la ___.|primaria|secundaria|más reciente",
      "El concepto de «umbral» nace de la ___ del siglo XIX.|psicofísica|frenología|reflexología",
      "Que la frenología fuera popular y no tuviera base ilustra la función de ___.|pensamiento crítico|identidad profesional|conciencia ética",
      "Harris (___) volvió al artículo original del pequeño Albert y mostró que su generalización se había exagerado.|1979|1997|1965",
      "Naturaleza frente a crianza ilustra la función de evitar ___, porque el debate reaparece con cada técnica nueva.|repeticiones|anacronismos|presentismos"
    ],
    tf: [
      "Tres manuales que repiten el mismo dato equivalen a tres pruebas independientes.|F|Muchas fuentes secundarias se copian entre sí. Lo decisivo es volver a las fuentes primarias.",
      "Un concepto con historia se entiende mejor que un concepto memorizado de forma aislada.|V",
      "Los debates entre mente y cerebro o entre herencia y ambiente son problemas surgidos con la neurociencia actual.|F|No son nuevos: la historia permite situarlos como debates que reaparecen con cada técnica nueva.",
      "La historia muestra que ideas marginadas en su día pueden recuperarse después.|V"
    ],
    q: [
      "Una estudiante lee en tres manuales que Pávlov hacía sonar siempre una campana. ¿Qué debería hacer para comprobarlo?|Acudir a estudios de las fuentes primarias|Buscar un cuarto manual que lo confirme|Aceptarlo porque coinciden tres autores|Las secundarias se copian entre sí. Las revisiones de textos y aparatos (Thomas, 1997, y Todes, 2014) muestran que solía usarse un metrónomo.",
      "Saber que la medida de la inteligencia nació en un contexto escolar concreto ayuda sobre todo a…|usar los tests con más prudencia|rechazar los tests por poco fiables|atribuir los tests a la eugenesia|Es la función de entender los conceptos: conocer su origen y su reinterpretación posterior invita a usarlos con prudencia.",
      "¿Qué actitud promueve la historia al mostrar que ideas muy aceptadas resultaron erróneas?|Sostener las teorías según su evidencia|Desconfiar de toda teoría científica|Preferir las teorías más antiguas|No lleva al escepticismo radical, sino a sostener las teorías con la fuerza que da la evidencia, y no más.",
      "¿Qué función de la historia ilustra que la psicología clínica, la básica y la social compartan un origen común?|La identidad profesional|El pensamiento crítico|La conciencia ética|Dar unidad a una disciplina muy fragmentada es la función de identidad profesional."
    ],
    inc: [
      "Sobre el estudio de la historia de la psicología|Su historia corta empieza con la filosofía griega|Las fuentes primarias prevalecen sobre las secundarias|Ayuda a usar los conceptos con más prudencia|La historia corta empieza en el siglo XIX. La reflexión filosófica anterior es su pasado largo."
    ],
    seq: [],
    cls: [
      "Tipo de fuente|Primaria: artículo original; carta; cuaderno de laboratorio; acta|Secundaria: manual; biografía; revisión"
    ] },
  { t: "Presentismo e historicismo, internalismo y externalismo",
    tip: "La historiografía distingue dos ejes independientes. El presentismo juzga el pasado con los criterios actuales, y el historicismo intenta comprenderlo en su propio contexto (Stocking, 1965). El internalismo explica la ciencia por su lógica interna, y el externalismo, por factores sociales e institucionales. La historiografía actual combina factores internos y externos y evita el juicio anacrónico.",
    v: [
      "Historia whig=Lectura del pasado como camino recto que desemboca en el presente",
      "Butterfield (1931)=Autor que criticó la lectura del pasado como progreso hacia el presente",
      "Stocking (1965)=Llevó la crítica a las ciencias del comportamiento con dos términos opuestos",
      "Presentismo=Juzgar el pasado con los criterios, valores y conocimientos actuales",
      "Historicismo=Comprender el pasado en su contexto, con las preguntas y recursos de su época",
      "Juicio anacrónico=Reprochar a un autor no haber usado métodos que aún no existían",
      "Internalismo=Explicación de la ciencia por sus teorías, datos, métodos y problemas",
      "Externalismo=Explicación de la ciencia por financiación, guerras, universidades o demanda social"
    ],
    g: [
      "Decir que Gall «perdió el tiempo» midiendo cráneos es una lectura ___.|presentista|historicista|externalista",
      "Explicar la psicofísica porque Fechner dio forma matemática a los datos de Weber es un relato ___.|internalista|externalista|contextual",
      "El presentismo se refiere al punto de vista del historiador, y el internalismo, al tipo de ___.|explicación|fuente|época",
      "Según la historiografía actual, algo de presentismo es ___.|inevitable|recomendable|eliminable",
      "Butterfield criticó en 1931 la llamada historia ___.|whig|social|archivística"
    ],
    tf: [
      "Una historia puede ser a la vez historicista e internalista.|V",
      "Presentismo e internalismo son dos nombres para la misma postura historiográfica.|F|Son ejes independientes: el presentismo es el punto de vista del historiador, y el internalismo, el tipo de explicación.",
      "Los términos presentismo e historicismo los introdujo Butterfield en 1931.|F|Butterfield criticó la historia whig. Los dos términos los propuso Stocking (1965) para las ciencias del comportamiento.",
      "La expansión de los tests mentales se explica a la vez por la correlación estadística y por la escuela obligatoria.|V"
    ],
    q: [
      "Un historiador explica el auge del laboratorio en el siglo XIX porque la universidad alemana premiaba la investigación y ofrecía puestos. ¿Qué enfoque adopta?|Externalista|Internalista|Presentista|Invoca factores institucionales, no la lógica interna de las teorías. Nada indica que juzgue el pasado con criterios actuales.",
      "Un manual reprocha a un autor del siglo XIX no haber usado la estadística inferencial actual. ¿Qué comete?|Un juicio anacrónico|Un relato externalista|Una lectura historicista|Reprochar no haber usado métodos que aún no existían es el juicio anacrónico que la historiografía procura evitar.",
      "¿Qué celda ocupa la historia whig en los dos ejes de la historiografía?|Presentista e internalista|Historicista y externalista|Presentista y externalista|Lee el progreso de las ideas desde el presente. La nueva historia ocupa la celda historicista y externalista.",
      "Una lectura historicista de la frenología de Gall se preguntaría sobre todo…|por qué resultó atractiva en su época|por qué sus autores se equivocaron|qué acertó según la neurociencia actual|Busca comprender el pasado en su contexto: qué se sabía, por qué atrajo y qué dejó, como la idea de localización."
    ],
    inc: [
      "Sobre los ejes historiográficos|Los dos ejes dependen el uno del otro|El historicismo atiende a los recursos de cada época|El externalismo invoca factores institucionales|Son independientes: puede haber historias historicistas e internalistas, o presentistas y externalistas."
    ],
    seq: [],
    cls: [
      "Tipo de explicación|Internalismo: teorías; datos; métodos; Fechner formaliza los datos de Weber|Externalismo: financiación; guerras; universidades; demanda de servicios"
    ] },
  { t: "Grandes hombres, Zeitgeist y paradigmas",
    tip: "Tres marcos explican por qué cambian las ideas. El de los grandes hombres lo atribuye a individuos excepcionales, y el Zeitgeist, popularizado por Boring, al clima intelectual de la época. Kuhn (1962) propuso un ciclo de ciencia normal, anomalías, crisis, revolución y nuevo paradigma. Ningún marco basta, y está en debate que la psicología haya tenido un paradigma en sentido kuhniano.",
    v: [
      "Grandes hombres=Enfoque que atribuye el avance de la ciencia a individuos excepcionales",
      "Zeitgeist=«Espíritu de la época», clima intelectual que hace posibles las ideas",
      "Boring (1929)=Popularizó el espíritu de la época en A History of Experimental Psychology",
      "Paradigma=Supuestos, problemas legítimos, métodos y ejemplos de una comunidad científica",
      "Ciencia normal=Resolución de problemas dentro del marco vigente sin cuestionarlo",
      "Anomalía=Resultado que no encaja en el marco vigente",
      "Multiparadigmática=Ciencia en la que conviven varios marcos a la vez",
      "Preparadigmática=Ciencia que nunca ha alcanzado un acuerdo general"
    ],
    g: [
      "Kuhn publicó «La estructura de las revoluciones científicas» en ___.|1962|1929|1950",
      "El Zeitgeist explica bien los descubrimientos casi ___.|simultáneos|accidentales|individuales",
      "El punto débil del Zeitgeist es su ___, porque se invoca para explicarlo todo.|vaguedad|rigidez|novedad",
      "En el ciclo de Kuhn, la acumulación de anomalías desemboca en una ___.|crisis|síntesis|paradoja",
      "___ ha criticado que se hable de «revoluciones» conductista y cognitiva.|Leahey|Boring|Butterfield"
    ],
    tf: [
      "El Zeitgeist y el enfoque de los grandes hombres son dos versiones de la misma explicación.|F|Son contrarios: el Zeitgeist ve a los individuos como portavoces de su época, no como genios que imponen sus ideas.",
      "En una revolución kuhniana, el nuevo paradigma cambia lo que se considera un problema o una solución.|V",
      "Es un hecho consensuado que el conductismo fue una revolución kuhniana que sustituyó a la psicología anterior.|F|Está en debate: domina la idea de una psicología multiparadigmática, y el conductismo no sustituyó de golpe a lo anterior.",
      "El enfoque de los grandes hombres tiende a convertir episodios complejos en anécdotas.|V"
    ],
    q: [
      "Un profesor explica dos descubrimientos casi simultáneos en países distintos porque el clima intelectual de la época los hacía posibles. ¿Qué marco usa?|El Zeitgeist|Los grandes hombres|El ciclo de Kuhn|Atribuir las ideas al espíritu de la época, y no a genios aislados, es la explicación del Zeitgeist, popularizada por Boring.",
      "Según Kuhn, ¿qué ocurre justo después de una revolución científica?|Se reanuda la ciencia normal|Aparecen nuevas anomalías|Se abre un periodo de crisis|Con el nuevo paradigma se reanuda la ciencia normal, que resuelve problemas dentro del marco sin cuestionarlo.",
      "¿Cuál es la postura dominante sobre la psicología en términos kuhnianos?|Es multiparadigmática|Tiene un paradigma único|Vive una crisis permanente|Conviven varios marcos a la vez, o incluso nunca ha habido un acuerdo general, es decir, sería preparadigmática.",
      "¿Qué punto débil se atribuye al enfoque de los grandes hombres?|Ignora colaboradores e instituciones|Es vago y muy difícil de contrastar|No sirve en una ciencia multiparadigmática|La vaguedad es el punto débil del Zeitgeist. El relato heroico olvida colaboradores, instituciones y a quienes quedaron fuera."
    ],
    inc: [
      "Sobre el ciclo de Kuhn|La revolución solo amplía el paradigma anterior|La crisis surge al acumularse las anomalías|La ciencia normal no cuestiona el paradigma|La revolución no se limita a ampliar el paradigma anterior: cambia lo que se considera un problema o una solución."
    ],
    seq: [
      "Ciclo de Kuhn|Ciencia normal>Anomalías>Crisis>Revolución>Nuevo paradigma"
    ],
    cls: [
      "Marco explicativo|Grandes hombres: genios individuales; claridad narrativa|Zeitgeist: clima intelectual; Boring; vaguedad|Paradigmas: Kuhn; anomalías y crisis; revoluciones"
    ] },
  { t: "La nueva historia y las mujeres invisibilizadas",
    tip: "Furumoto (1989) llamó nueva historia a la que hacen historiadores profesionales: contextual, archivística, crítica y profesional. Un ejemplo es Constructing the Subject de Danziger (1990). Esta revisión recupera a pioneras como Calkins, Washburn, Ladd‑Franklin, Hollingworth y Mamie Phipps Clark, que no estaban ausentes, sino excluidas de títulos, sociedades y puestos, y después de los manuales.",
    v: [
      "Nueva historia=La que hacen historiadores profesionales, según Furumoto (1989)",
      "Constructing the Subject=Historia social del método experimental de Danziger (1990)",
      "Mary Whiton Calkins=Primera presidenta de la APA (1905), sin doctorado pese a cumplir los requisitos",
      "Archivística=Rasgo de la nueva historia: trabaja con fuentes primarias, no solo con manuales",
      "Profesional=Rasgo de la nueva historia: aplica los métodos de la historiografía general",
      "Leta Stetter Hollingworth=Mostró que el ciclo menstrual no merma el rendimiento (1914)",
      "Mamie Phipps Clark=Autora, con Kenneth Clark, de estudios con muñecas desde 1939‑40",
      "Brown v. Board of Education=Sentencia de 1954 que declaró inconstitucional la segregación escolar"
    ],
    g: [
      "Harvard se negó a conceder a Calkins el doctorado, cuyos requisitos completó en ___.|1895|1905|1894",
      "Washburn publicó «The Animal Mind» en ___.|1908|1894|1921",
      "Ladd‑Franklin fue excluida de los «Experimentalists» de ___.|Titchener|Hall|James",
      "Hollingworth publicó «Functional Periodicity» en ___.|1914|1908|1939",
      "Mamie Phipps Clark sufrió una doble exclusión, por género y por ___.|raza|clase|edad"
    ],
    tf: [
      "Calkins fue la primera mujer doctora en psicología, en Cornell.|F|Esa fue Washburn (1894). Calkins completó los requisitos en Harvard, que le negó el título, y presidió la APA en 1905.",
      "Los estudios con muñecas de Mamie Phipps Clark se citaron en la sentencia Brown v. Board of Education.|V",
      "Según la nueva historia, en los primeros laboratorios no había mujeres porque no se interesaban por la ciencia.|F|No estaban ausentes, sino excluidas de títulos, sociedades y puestos, y después de los manuales.",
      "Hollingworth criticó la hipótesis de que los varones son más variables y abundan más entre los genios.|V"
    ],
    q: [
      "Un manual afirma que en los primeros laboratorios «no había mujeres». ¿Qué pregunta plantearía la nueva historia?|Si se les permitía doctorarse o firmar|Si su trabajo era de menor calidad científica|Si les interesaba la psicología experimental|La nueva historia pregunta si no las había o si no se las dejaba firmar, doctorarse o entrar en las reuniones.",
      "¿Qué rasgo caracteriza la nueva historia descrita por Furumoto (1989)?|Trabaja con fuentes primarias|Se organiza en torno a fundadores|Selecciona a quienes anticiparon el presente|Es archivística, contextual y crítica. Las otras opciones describen el relato heroico y la historia whig.",
      "¿Quién sometió a prueba que la menstruación redujera la capacidad de las mujeres y no halló tal efecto?|Hollingworth|Washburn|Ladd‑Franklin|En Functional Periodicity (1914), Hollingworth no encontró que el ciclo menstrual mermara el rendimiento.",
      "¿Qué estudia Constructing the Subject de Danziger (1990)?|Cómo se definieron experimentador y sujeto|Qué mujeres fundaron los primeros laboratorios|Cómo se formó el paradigma conductista|Es una historia social del método experimental: qué papeles tenían experimentador y sujeto y quién podía ocupar cada uno."
    ],
    inc: [
      "Sobre las pioneras|Washburn presidió la APA antes que Calkins|Ladd‑Franklin propuso una teoría de la visión del color|Calkins ideó el método de pares asociados|Calkins presidió la APA en 1905, y Washburn, en 1921."
    ],
    seq: [],
    cls: [
      "Enfoque historiográfico|Nueva historia: contextual; archivística; crítica; Constructing the Subject|Relato tradicional: grandes hombres; fechas fundacionales; psicólogos que repasan a sus antecesores"
    ] }
] },
{ n: 2, t: "Antecedentes filosóficos y fisiológicos", cap: 1, pir: "alta", mods: [
  { t: "Descartes y el empirismo británico",
    tip: "Descartes formuló un dualismo interaccionista: mente y cuerpo son sustancias distintas que interactúan en la glándula pineal, y su idea del acto reflejo es su legado más duradero. Frente a las ideas innatas, Locke defendió que todo conocimiento procede de la experiencia. El asociacionismo explicó cómo las ideas simples se unen en complejas, y John Stuart Mill habló de química mental.",
    v: [
      "Dualismo interaccionista=Mente y cuerpo son sustancias distintas que actúan una sobre otra",
      "Glándula pineal=Lugar donde Descartes situaba el contacto entre el alma y el cuerpo",
      "Acto reflejo=Respuesta automática del cuerpo a un estímulo, sin intervención del alma",
      "Tabula rasa=Imagen de Locke de la mente al nacer como una tablilla en blanco",
      "Empirismo=Postura según la cual todo conocimiento procede de la experiencia",
      "Asociacionismo=Las ideas simples se unen en complejas al presentarse juntas o seguidas",
      "Química mental=Al combinarse, las ideas forman un compuesto con propiedades nuevas",
      "Hartley=Sistematizó el asociacionismo en el siglo XVIII"
    ],
    g: [
      "Descartes desarrolló sus ideas en «Les passions de l'âme» (___).|1649|1664|1690",
      "El «Traité de l'homme» de Descartes se publicó de forma ___ en 1664.|póstuma|anónima|parcial",
      "Locke publicó el «Ensayo sobre el entendimiento humano» en ___.|1690|1649|1664",
      "James Mill planteó la asociación como una combinación casi ___ de elementos.|mecánica|química|creadora",
      "La idea de que el todo es más que la suma de sus partes reaparece en Wundt y, con otra forma, en la ___.|Gestalt|reflexología|frenología"
    ],
    tf: [
      "Para Descartes, la mente piensa y no ocupa espacio, y el cuerpo funciona como una máquina.|V",
      "La química mental es la idea de James Mill de que las ideas se combinan de forma mecánica.|F|Es de su hijo John Stuart Mill: el compuesto puede tener propiedades nuevas. James Mill la veía casi mecánica.",
      "Locke y los empiristas aceptaban la idea cartesiana de que algunas ideas son innatas.|F|La rechazaron: para ellos todo conocimiento procede de la experiencia, y la mente al nacer es una tabula rasa.",
      "Descartes dejó planteado cómo puede algo no material actuar sobre algo material.|V"
    ],
    q: [
      "Una persona aparta la mano del fuego antes de darse cuenta de que quema. ¿Qué concepto cartesiano ilustra?|El acto reflejo|La glándula pineal|La química mental|Un estímulo externo pone en marcha una respuesta automática del cuerpo sin intervención del alma.",
      "¿Quiénes siguieron a Locke examinando cómo se forman y combinan las ideas?|Berkeley y Hume|Descartes y Hartley|Müller y Helmholtz|Berkeley y Hume continuaron el empirismo británico. Descartes defendía la existencia de ideas innatas.",
      "¿Qué trabajo posterior convirtió en experimento la vieja pregunta asociacionista?|Las listas de sílabas de Ebbinghaus|La estimulación cortical de Fritsch|La medida nerviosa de Helmholtz|Ebbinghaus con sus listas y Thorndike con su gato estudiaron de forma experimental cómo se forman las asociaciones.",
      "¿Qué parte del legado de Descartes se considera más duradera para la psicología?|La idea del acto reflejo|La glándula pineal como enlace|El dualismo de dos sustancias|La explicación mecánica del reflejo perdura. Cómo interactúan mente y cuerpo sigue sin una solución aceptada por todos."
    ],
    inc: [
      "Sobre el empirismo y el asociacionismo|Hartley lo sistematizó en el siglo XIX|Locke comparó la mente con una tabula rasa|John Stuart Mill habló de química mental|Hartley lo sistematizó en el siglo XVIII. En el XIX lo desarrollaron James Mill y su hijo John Stuart Mill."
    ],
    seq: [],
    cls: [
      "Postura|Descartes: dualismo interaccionista; glándula pineal; acto reflejo|Empirismo británico: tabula rasa; Berkeley y Hume; química mental"
    ] },
  { t: "Fisiología sensorial: Müller y Helmholtz",
    tip: "Müller formuló la ley de las energías nerviosas específicas: cada nervio sensorial produce su propia cualidad, sea cual sea el estímulo. Su discípulo Helmholtz midió en 1850 la velocidad de conducción nerviosa, mucho más lenta de lo que se creía, desarrolló la teoría tricromática y propuso la inferencia inconsciente. Si los procesos nerviosos tardan un tiempo medible, los mentales pueden cronometrarse.",
    v: [
      "Energías nerviosas específicas=Cada nervio sensorial da su propia cualidad, sea cual sea el estímulo",
      "Handbuch der Physiologie=Obra de Müller (1833‑1840) donde formuló su ley sensorial",
      "Velocidad de conducción nerviosa=Medida de Helmholtz (1850) con nervio de rana, más lenta de lo esperado",
      "Teoría tricromática=La visión del color depende de tres tipos de receptores",
      "Óptica fisiológica=Tratado de Helmholtz sobre la visión (1856‑1867)",
      "Inferencia inconsciente=Conclusión perceptiva rápida y automática basada en la experiencia",
      "Cronometría mental=Medida del tiempo que tardan los procesos de la mente",
      "Constancia del tamaño=Quien se aleja no parece encoger aunque su imagen en la retina mengüe"
    ],
    g: [
      "Al frotarse los ojos cerrados se ven destellos, como predice la ley de ___.|Müller|Helmholtz|Weber",
      "Helmholtz midió la velocidad de conducción nerviosa en ___.|1850|1860|1833",
      "La teoría tricromática se conoce también como teoría de ___‑Helmholtz.|Young|Müller|Weber",
      "Para Müller, lo que percibimos directamente no es el mundo, sino el estado de nuestros ___.|nervios|juicios|recuerdos",
      "La medida de la velocidad nerviosa está en la base de la cronometría ___ que desarrollaría Wundt.|mental|sensorial|nerviosa"
    ],
    tf: [
      "Helmholtz comprobó que el impulso nervioso era prácticamente instantáneo.|F|Comprobó lo contrario: era mucho más lento de lo que se creía. La transmisión instantánea era la idea previa.",
      "Helmholtz fue discípulo de Johannes Müller.|V",
      "Para Helmholtz, la percepción es un registro pasivo de los datos sensoriales.|F|Para él, el sistema perceptivo completa los datos con inferencias rápidas y automáticas que no llegan a la conciencia.",
      "Müller y Helmholtz no se consideraban psicólogos.|V"
    ],
    q: [
      "Tras un golpe en la cabeza, una persona dice que «ha visto las estrellas» aunque no había ninguna luz. ¿Qué principio lo explica?|Las energías nerviosas específicas|La inferencia inconsciente de Helmholtz|La equipotencialidad de Flourens|El nervio óptico produce sensaciones visuales sea cual sea el estímulo que lo active, también una presión o un golpe.",
      "Una amiga se aleja por la calle y su imagen en la retina se reduce, pero no parece encoger. ¿Cómo lo explicaba Helmholtz?|Por una inferencia inconsciente|Por una energía nerviosa específica|Por un cálculo consciente de la distancia|El sistema perceptivo tiene en cuenta la distancia y mantiene constante el tamaño percibido sin que el ajuste llegue a la conciencia.",
      "¿Qué consecuencia tuvo para la psicología la medida de la velocidad nerviosa?|Que los procesos mentales se podían medir|Que el color depende de tres receptores|Que cada nervio produce su propia cualidad|Si los procesos nerviosos tardan un tiempo medible, los mentales también, lo que abrió el camino a la cronometría mental.",
      "¿Con qué preparación midió Helmholtz la conducción nerviosa?|Nervio de rana|Corteza de perro|Retina humana|Usó preparaciones de nervio de rana. La estimulación de la corteza de perros fue obra de Fritsch y Hitzig (1870)."
    ],
    inc: [
      "Sobre Müller y Helmholtz|Helmholtz formuló las energías específicas|Helmholtz propuso la inferencia inconsciente|Müller escribió el Handbuch der Physiologie|La ley de las energías nerviosas específicas es de Müller, maestro de Helmholtz."
    ],
    seq: [],
    cls: [
      "Autor|Müller: energías nerviosas específicas; Handbuch der Physiologie|Helmholtz: velocidad nerviosa; teoría tricromática; inferencia inconsciente"
    ] },
  { t: "La psicofísica: Weber y Fechner",
    tip: "La psicofísica estudia la relación cuantitativa entre estímulo y sensación. Weber (De tactu, 1834) halló que el umbral diferencial es proporcional a la intensidad inicial. Fechner (Elemente der Psychophysik, 1860) propuso que la sensación crece con el logaritmo del estímulo y sistematizó los métodos de límites, estímulos constantes y ajuste. Stevens (1957) propuso después una ley potencial.",
    v: [
      "Psicofísica=Estudio de la relación cuantitativa entre la intensidad del estímulo y la sensación",
      "Umbral diferencial=Cambio mínimo del estímulo que se nota el 50 % de las veces",
      "Umbral absoluto=Intensidad mínima que se detecta el 50 % de las veces",
      "Ley de Weber=El umbral diferencial es proporcional a la intensidad inicial",
      "Ley de Fechner=La sensación crece con el logaritmo de la intensidad del estímulo",
      "Ley de Stevens=La sensación es una potencia del estímulo, con un exponente propio por sentido",
      "Método de límites=Aumentar o reducir el estímulo paso a paso hasta detectarlo o dejar de hacerlo",
      "Método de ajuste=La propia persona regula el estímulo hasta igualarlo con otro"
    ],
    g: [
      "Si para notar que una bolsa de 100 g pesa más hay que añadir 2 g, con una de 200 g habrá que añadir unos ___.|4 g|2 g|8 g",
      "Fechner publicó «Elemente der Psychophysik» en ___.|1860|1834|1879",
      "Según Fechner, si el estímulo crece en progresión geométrica, la sensación crece en progresión ___.|aritmética|geométrica|logarítmica",
      "El método de ajuste se llama también método del error ___.|medio|típico|constante",
      "En la estimación directa de la magnitud percibida se ajusta mejor la ley ___ de Stevens.|potencial|logarítmica|proporcional"
    ],
    tf: [
      "Weber propuso que la sensación crece con el logaritmo de la intensidad del estímulo.|F|Es la trampa típica: Weber estableció la proporción del umbral diferencial, y Fechner, la ley logarítmica.",
      "La constante k de la ley de Weber varía según el sentido.|V",
      "El umbral absoluto es la intensidad mínima que se detecta en todos los ensayos.|F|Es la que se detecta el 50 % de las veces: la detección no pasa de golpe de nunca a siempre.",
      "La ley de Weber se refiere al umbral diferencial, y la de Fechner, a la magnitud de la sensación.|V"
    ],
    q: [
      "En un experimento se presentan tonos de varias intensidades fijas, mezclados en orden aleatorio. ¿Qué método psicofísico se usa?|Método de estímulos constantes|Método de límites ascendentes|Método de ajuste o error medio|En el de límites el estímulo cambia paso a paso, y en el de ajuste lo regula la propia persona.",
      "¿Qué define el umbral absoluto?|Detección en el 50 % de los ensayos|Detección en el primer ensayo realizado|Detección en todos los ensayos sin fallo|Es una definición estadística, porque la detección no pasa de golpe de nunca a siempre. Apareció en el PIR de 2025.",
      "¿Qué ley relaciona la magnitud de la sensación con el logaritmo del estímulo?|La de Fechner|La de Weber|La de Stevens|Weber describe la proporción del umbral diferencial, y Stevens, una función potencial.",
      "¿Qué obra recoge los estudios de Weber sobre la discriminación de pesos y presiones?|De tactu (1834)|Elemente der Psychophysik (1860)|Handbuch der Physiologie (1833‑1840)|Elemente der Psychophysik es de Fechner, y el Handbuch der Physiologie, de Müller."
    ],
    inc: [
      "Sobre la psicofísica|El umbral diferencial es una cantidad fija|Fechner sistematizó los métodos clásicos|Stevens propuso una ley potencial en 1957|Weber observó que el umbral diferencial no es fijo, sino proporcional a la intensidad del estímulo de partida."
    ],
    seq: [
      "Cronología de la psicofísica|Weber, De tactu (1834)>Fechner, Elemente der Psychophysik (1860)>Stevens, ley potencial (1957)"
    ],
    cls: [
      "Ley psicofísica|Weber: umbral diferencial; proporción constante; De tactu|Fechner: logaritmo del estímulo; progresión aritmética de la sensación|Stevens: función potencial; estimación directa de magnitud"
    ] },
  { t: "La localización cerebral: de la frenología a Broca y Wernicke",
    tip: "La frenología de Gall y Spurzheim asignaba facultades a zonas del cráneo sin base, aunque legó la idea de localización. Flourens (1824) defendió la equipotencialidad. Broca (1861) halló en Leborgne una lesión frontal inferior izquierda ligada a la producción del habla, Fritsch y Hitzig (1870) mostraron una corteza motora y Wernicke (1874) describió la afasia de comprensión.",
    v: [
      "Frenología=Doctrina de Gall y Spurzheim que leía el carácter palpando el cráneo",
      "Equipotencialidad=La corteza funciona como un todo y la pérdida depende de cuánto tejido falta",
      "Leborgne=Paciente «Tan», que comprendía pero apenas podía hablar",
      "Afasia de Broca=Alteración de la producción del habla por lesión frontal inferior izquierda",
      "Afasia de Wernicke=Habla fluida con mala comprensión y poco sentido",
      "Fritsch y Hitzig=Provocaron movimientos estimulando eléctricamente la corteza de perros (1870)",
      "Phineas Gage=Obrero que en 1848 sobrevivió a una barra de hierro que le atravesó el lóbulo frontal",
      "Macmillan (2000)=Revisó el caso Gage y documentó una probable recuperación social parcial"
    ],
    g: [
      "Flourens concluyó que la pérdida de función dependía de ___ tejido se extirpaba.|cuánto|dónde|cuándo",
      "Broca encontró en Leborgne una lesión en la región frontal inferior ___.|izquierda|derecha|medial",
      "Wernicke llamó a la afasia que describió afasia ___.|sensorial|motora|global",
      "Tras el accidente, Gage llegó a trabajar como cochero de diligencias en ___.|Chile|México|Perú",
      "Fritsch y Hitzig aportaron una prueba ___ de que existe una corteza motora localizada.|experimental|clínica|frenológica"
    ],
    tf: [
      "La frenología no tenía base, pero legó la idea de que funciones distintas dependen de zonas distintas.|V",
      "Leborgne hablaba con fluidez, pero no comprendía lo que se le decía.|F|Era al revés: comprendía, pero apenas podía pronunciar más que «tan». Habla fluida sin comprensión es la afasia de Wernicke.",
      "Phineas Gage se convirtió para siempre en otra persona, sin ninguna recuperación.|F|Los relatos se exageraron. Probablemente tuvo una recuperación social parcial y trabajó como cochero en Chile (Macmillan, 2000).",
      "Los métodos de Flourens eran más rigurosos que los de la frenología.|V"
    ],
    q: [
      "Un paciente habla con fluidez, pero sus frases tienen poco sentido y entiende mal lo que se le dice. ¿Qué cuadro describe?|La afasia de Wernicke|La afasia de Broca|Una lesión motora|Wernicke (1874) describió esta afasia sensorial o de comprensión. Broca corresponde a la producción del habla.",
      "¿Qué posición sostiene la neurociencia actual sobre la localización?|Regiones especializadas que trabajan juntas|Equipotencialidad estricta de la corteza|Facultades independientes en zonas del cráneo|No da la razón ni a la frenología ni a la equipotencialidad estricta: las funciones complejas dependen del trabajo conjunto.",
      "¿Qué orden cronológico es el correcto?|Flourens, Broca, Wernicke|Broca, Flourens, Wernicke|Flourens, Wernicke, Broca|Flourens es de 1824, Broca de 1861 y Wernicke de 1874.",
      "¿Qué aportó Broca en 1861?|La primera prueba clínica sólida de localización|La primera prueba experimental de corteza motora|La doctrina de la equipotencialidad cortical|La prueba experimental de la corteza motora es de Fritsch y Hitzig (1870), y la equipotencialidad, de Flourens."
    ],
    inc: [
      "Sobre la localización cerebral|Wernicke asoció la comprensión al lóbulo frontal|Gall y Spurzheim asignaban facultades a la corteza|Flourens defendió la equipotencialidad cortical|La lesión frontal inferior izquierda es la de Broca, ligada a la producción. Wernicke describió otra región del hemisferio izquierdo."
    ],
    seq: [
      "Hitos de la localización cerebral|Frenología de Gall y Spurzheim (hacia 1810)>Equipotencialidad de Flourens (1824)>Leborgne y Broca (1861)>Fritsch y Hitzig (1870)>Afasia de Wernicke (1874)"
    ],
    cls: [
      "Afasia|Broca: producción del habla; Leborgne; región frontal inferior izquierda|Wernicke: comprensión; habla fluida sin sentido; afasia sensorial"
    ] }
] },
{ n: 3, t: "La fundación de la psicología moderna", cap: 1, pir: "media", mods: [
  { t: "La institucionalización de una nueva ciencia",
    tip: "Una disciplina nace cuando consigue laboratorios, títulos, revistas, asociaciones, aplicación y financiación. La psicología lo logró en el último cuarto del siglo XIX, con un perfil propio en cada país: laboratorio en Alemania (Wundt), medida y herencia en Gran Bretaña (Galton) y utilidad práctica en Estados Unidos (James y Hall). Las fechas fundacionales son simbólicas.",
    v: [
      "Institucionalización=Proceso por el que una disciplina obtiene laboratorios, títulos, revistas y asociaciones",
      "Psicotecnia=Psicología aplicada a las demandas de la escuela, la industria o la clínica",
      "Fecha fundacional=Momento elegido después para representar un proceso largo",
      "París (1889)=Sede del Primer Congreso Internacional de Psicología",
      "Laboratorio=Seña de identidad de la nueva psicología, con instrumental propio",
      "Cattell=Se doctoró con Wundt y acuñó la expresión «mental tests» (1890)",
      "Evolucionismo=Influencia que llevó a preguntarse para qué sirve la mente",
      "Tradición estadounidense=Perfil centrado en el funcionalismo y la aplicación práctica"
    ],
    g: [
      "El Primer Congreso Internacional de Psicología se celebró en París en ___.|1889|1879|1892",
      "Tras la I Guerra Mundial, la lengua científica dominante pasó a ser el ___.|inglés|francés|alemán",
      "La pregunta central de la tradición británica era en qué se ___ las personas y por qué.|diferencian|parecen|adaptan",
      "En Estados Unidos, la pregunta característica era para qué ___ la mente.|sirve|piensa|siente",
      "La psicología se institucionalizó en el último cuarto del siglo ___.|XIX|XVIII|XX"
    ],
    tf: [
      "La psicología nació en un año concreto con la publicación de un libro decisivo.|F|Una disciplina nace al conseguir espacios, cargos, títulos y revistas. Las fechas fundacionales son simbólicas.",
      "Las tradiciones alemana, británica y estadounidense se desarrollaron sin influirse entre sí.|F|Muchos estadounidenses se formaron en Leipzig y combinaron lo aprendido con la medida de Galton, como Cattell.",
      "La psicotecnia forma parte del patrón de institucionalización de la psicología.|V",
      "Entre los factores que favorecieron la institucionalización está el prestigio de la medida objetiva.|V"
    ],
    q: [
      "Un historiador investiga cuándo tuvo la psicología revistas, cátedras y asociaciones propias en un país. ¿Qué proceso estudia?|Su institucionalización|Su cambio de paradigma|Su Zeitgeist fundacional|Es el proceso por el que una disciplina obtiene espacios, cargos, títulos, revistas y asociaciones.",
      "¿Qué figura y rasgo corresponden a la tradición británica?|Galton, medida y herencia|Wundt, laboratorio y experimento|James, utilidad y aplicación|Gran Bretaña se centró en las diferencias individuales, con medida, estadística y herencia.",
      "¿Qué combinó Cattell en su formación?|El laboratorio de Wundt y la medida de Galton|La psicofísica de Weber y la clínica francesa|El funcionalismo de James y la frenología|Se doctoró con Wundt, conoció el trabajo de Galton y acuñó la expresión «mental tests» (1890).",
      "¿Por qué se dice que las fechas fundacionales son simbólicas?|Se eligen después para representar un proceso|Se basan en documentos de dudosa autenticidad|Las fijó cada país para reclamar prioridad|Marcan un momento elegido a posteriori para representar un proceso largo de institucionalización."
    ],
    inc: [
      "Sobre la institucionalización|El inglés fue la lengua dominante antes de 1914|La psicotecnia respondía a demandas aplicadas|Las asociaciones forman parte del proceso|El alemán fue la lengua científica dominante hasta la I Guerra Mundial, y después lo fue el inglés."
    ],
    seq: [
      "Hitos de la fundación|Velocidad nerviosa de Helmholtz (1850)>Psicofísica de Fechner (1860)>Laboratorio de Leipzig (1879)>Congreso de París (1889)>Fundación de la APA (1892)>Escala de Binet y Simon (1905)>Manifiesto de Watson (1913)"
    ],
    cls: [
      "Tradición nacional|Alemania: Wundt; laboratorio; experiencia consciente|Gran Bretaña: Galton; estadística; herencia|Estados Unidos: James y Hall; funcionalismo; aplicación práctica"
    ] },
  { t: "Wundt y el laboratorio de Leipzig",
    tip: "Wundt delimitó una psicología experimental con un objeto propio, la experiencia inmediata (Grundzüge, 1873‑74). 1879 es la fecha convencional de su laboratorio, aunque desde 1875 dispuso de un espacio para demostraciones. Usó la cronometría mental y la autoobservación experimental. Su sistema es un voluntarismo, y su Völkerpsychologie estudiaba el lenguaje, los mitos y las costumbres: no era estructuralista.",
    v: [
      "Experiencia inmediata=Objeto propio de la psicología experimental para Wundt",
      "Philosophische Studien=Revista fundada por Wundt en 1881 para publicar las investigaciones",
      "Método sustractivo=Restar tiempos de reacción de dos tareas para estimar un proceso (Donders)",
      "Autoobservación experimental=Informes breves de observadores entrenados en condiciones controladas",
      "Apercepción=Proceso activo por el que la atención selecciona y organiza contenidos en un todo",
      "Síntesis creadora=El todo psíquico tiene propiedades que no estaban en sus partes",
      "Voluntarismo=Nombre del sistema de Wundt, por el carácter activo y dirigido de la apercepción",
      "Völkerpsychologie=Psicología de los pueblos sobre lenguaje, mitos y costumbres (1900‑1920)"
    ],
    g: [
      "Wundt se incorporó a la Universidad de Leipzig en ___.|1875|1879|1881",
      "Wundt criticó en 1907 los «experimentos de interrogatorio» de la Escuela de ___.|Würzburgo|Cornell|Gotinga",
      "La teoría tridimensional del sentimiento incluye placer‑displacer, tensión‑relajación y ___.|excitación‑calma|agrado‑desagrado|atención‑distracción",
      "Titchener llamó «estructuralismo» a su propia psicología en ___.|1898|1929|1879",
      "La Völkerpsychologie de Wundt ocupó ___ volúmenes.|diez|tres|veinte"
    ],
    tf: [
      "Wundt fue el fundador del estructuralismo.|F|La etiqueta es de Titchener (1898) y la difundió Boring (1929). Wundt era voluntarista.",
      "Para Wundt, los procesos superiores debían estudiarse a través de sus productos colectivos.|V",
      "Wundt consideraba fiable la percepción interna informal si el observador estaba motivado.|F|La distinguía de la autoobservación experimental, con observadores entrenados y condiciones controladas, y la veía poco fiable.",
      "Muchos discípulos de Wundt adoptaron su modelo de laboratorio, pero no su teoría.|V"
    ],
    q: [
      "Se mide cuánto se tarda en responder a una luz y cuánto en responder solo a una luz de un color concreto. La diferencia estima la duración del proceso añadido. ¿Qué método se usa?|El método sustractivo|La percepción interna|El informe retrospectivo|Es la cronometría mental con el método sustractivo de Donders, que Wundt usó en Leipzig.",
      "¿Por qué 1879 es la fecha convencional del laboratorio de Leipzig?|Empezaron las primeras investigaciones|Wundt se incorporó a la universidad|Se fundó la revista del laboratorio|En 1875 se incorporó y dispuso de un espacio para demostraciones. Philosophische Studien es de 1881.",
      "¿Qué estudiaba la Völkerpsychologie de Wundt?|El lenguaje, los mitos y las costumbres|Los tiempos de reacción complejos|Las diferencias individuales heredadas|Para Wundt, los procesos superiores no se investigan en el laboratorio, sino a través de sus productos colectivos.",
      "¿Quién difundió en 1929 la imagen de Wundt como estructuralista?|Boring|Titchener|Leahey|Titchener acuñó la etiqueta en 1898, Boring la difundió en su historia y Leahey (1981) contribuyó a corregirla."
    ],
    inc: [
      "Sobre Wundt|Era introspeccionista al estilo de Titchener|Fundó la revista Philosophische Studien en 1881|Publicó los Grundzüge entre 1873 y 1874|La investigación histórica ha corregido esa imagen: Wundt no era estructuralista ni introspeccionista al estilo de Titchener."
    ],
    seq: [
      "Wundt en Leipzig|Grundzüge (1873‑74)>Llegada a Leipzig (1875)>Investigaciones de estudiantes (1879)>Philosophische Studien (1881)>Völkerpsychologie (1900‑1920)"
    ],
    cls: [
      "Parte del programa de Wundt|Laboratorio: cronometría mental; método sustractivo; autoobservación experimental|Völkerpsychologie: lenguaje; mitos; costumbres"
    ] },
  { t: "Galton y la medida de las diferencias individuales",
    tip: "Galton, primo de Darwin, se centró en las diferencias individuales y su herencia: Hereditary Genius (1869), gemelos (1875), laboratorio antropométrico (1884) y regresión y correlación (1888). Concibió la correlación, pero el coeficiente producto‑momento lo formalizó Pearson (1896). Acuñó también el término eugenesia, cuyas aplicaciones posteriores causaron graves daños.",
    v: [
      "Hereditary Genius=Obra de 1869 sobre familias eminentes y herencia de la capacidad",
      "Estudio de gemelos=Recurso de Galton (1875) para separar herencia y ambiente",
      "Laboratorio antropométrico=Medidas físicas y sensoriales de visitantes en Londres (1884)",
      "Correlación=Grado en que dos variables varían juntas",
      "Coeficiente producto‑momento=Fórmula de la r formalizada por Pearson (1896)",
      "Eugenesia=Proyecto de «mejorar» la población favoreciendo la reproducción de los más aptos",
      "Naturaleza frente a crianza=Oposición entre herencia y ambiente que Galton popularizó",
      "Inquiries into Human Faculty=Recopilación de 1883 de sus trabajos sobre facultades humanas"
    ],
    g: [
      "El laboratorio antropométrico se instaló en la International Health Exhibition de Londres en ___.|1884|1869|1888",
      "Galton era primo de ___.|Charles Darwin|Karl Pearson|William James",
      "Galton ideó también un test de asociación de ___.|palabras|imágenes|números",
      "Galton presentó la regresión y la correlación en ___.|1888|1896|1883",
      "Las políticas eugenésicas incluyeron ___ forzosas en varios países.|esterilizaciones|vacunaciones|migraciones"
    ],
    tf: [
      "Galton formuló el coeficiente de correlación producto‑momento que se usa hoy.|F|Concibió la idea de correlación. El coeficiente producto‑momento lo formalizó Pearson en 1896.",
      "Galton acuñó el término eugenesia.|V",
      "Una lectura historicista de la eugenesia justifica sus propuestas por el contexto de su época.|F|Explica por qué resultaron atractivas en su época, pero no las justifica.",
      "Mientras Wundt buscaba leyes generales de la mente, Galton se centró en las diferencias individuales.|V"
    ],
    q: [
      "Un estudio informa de que las horas de sueño y la nota media de un grupo de estudiantes correlacionan. ¿Qué herencia metodológica usa?|La idea de Galton con la fórmula de Pearson|La fórmula de Galton con la idea de Pearson|La idea de Spearman con la fórmula de Galton|Galton concibió la correlación y Pearson formalizó el coeficiente. Además, la correlación no prueba que una variable cause la otra.",
      "¿Con qué propósito usó Galton a los gemelos (1875)?|Separar herencia y ambiente|Medir la velocidad de reacción|Estudiar familias eminentes|Los gemelos permitían separar herencia y ambiente. Las familias eminentes son el tema de Hereditary Genius (1869).",
      "¿De qué convicción partía la eugenesia de Galton?|Las capacidades valiosas eran heredadas|El ambiente determinaba toda capacidad|La inteligencia era educable en la escuela|Partía de que las capacidades valiosas eran sobre todo heredadas. La educabilidad de la inteligencia la defendió Binet.",
      "¿Quién llevó a Estados Unidos la medida de las diferencias individuales de Galton?|Cattell|Hall|Titchener|Cattell acuñó «mental tests» (1890). En la tradición británica, el legado de Galton siguió con Pearson y Spearman."
    ],
    inc: [
      "Sobre Galton|Ideó el factor g a partir de correlaciones|Instaló un laboratorio antropométrico en Londres|Ideó un test de asociación de palabras|El factor g es de Spearman (1904). Galton concibió la correlación y la regresión."
    ],
    seq: [
      "Obras y aportaciones de Galton|Hereditary Genius (1869)>Estudio de gemelos (1875)>Inquiries into Human Faculty (1883)>Laboratorio antropométrico (1884)>Regresión y correlación (1888)"
    ],
    cls: [
      "Autor|Galton: idea de correlación; regresión; eugenesia|Pearson: coeficiente producto‑momento; 1896|Cattell: mental tests; doctorado con Wundt"
    ] },
  { t: "William James, Hall y la psicología en Estados Unidos",
    tip: "La psicología estadounidense preguntó para qué sirve la mente. James aportó el marco intelectual con The Principles of Psychology (1890): corriente de conciencia, funciones adaptativas, pragmatismo y teoría James‑Lange. Hall construyó las instituciones, con el laboratorio de Johns Hopkins (1883), el American Journal of Psychology (1887) y la APA (1892). Quién fundó el primer laboratorio depende de cómo se defina.",
    v: [
      "The Principles of Psychology=Obra de James de 1890 que formó a generaciones de estudiantes",
      "Briefer Course=Versión abreviada de la gran obra de James (1892)",
      "Corriente de conciencia=Flujo continuo, personal y cambiante, no un mosaico de elementos",
      "Pragmatismo=El valor de una idea se juzga por sus consecuencias prácticas",
      "Teoría James‑Lange=Primero los cambios corporales, y su percepción es la emoción",
      "Münsterberg=Formado con Wundt, dirigió la investigación experimental en Harvard",
      "American Journal of Psychology=Revista fundada por Hall en 1887",
      "Clark University=Institución desde la que Hall invitó a Freud y Jung en 1909"
    ],
    g: [
      "La APA se fundó en julio de 1892 y celebró su primera reunión en ___.|diciembre|septiembre|enero",
      "Hall abrió un laboratorio de investigación en Johns Hopkins en ___.|1883|1875|1887",
      "James dispuso hacia 1875 de una sala de ___ para su enseñanza.|demostraciones|investigación|consultas",
      "Para James, la conciencia existe porque es ___.|útil|innata|material",
      "Según la teoría James‑Lange, la percepción de los cambios corporales ___ la emoción.|es|sigue a|inhibe"
    ],
    tf: [
      "La APA se fundó en 1879, el mismo año que el laboratorio de Leipzig.|F|Es una trampa típica: 1879 es el año simbólico del laboratorio de Wundt. La APA es de 1892.",
      "James fue sobre todo un experimentador de laboratorio.|F|No fue un hombre de laboratorio: por eso llevó a Harvard a Münsterberg. Su influencia fue intelectual.",
      "Hall fue el primer presidente de la APA.|V",
      "Si se exige investigación sistemática, el primer laboratorio estadounidense es el de Hall (1883).|V"
    ],
    q: [
      "Ante un estudiante que se distrae en clase, un psicólogo se pregunta para qué le sirve atender y cómo mejorar su rendimiento. ¿Qué orientación refleja?|Funcionalista|Wundtiana|Estructuralista|Un wundtiano preguntaría cómo se organiza su experiencia atencional. Preguntar por la utilidad es propio del funcionalismo.",
      "¿Qué papel se atribuye a James frente a Hall?|James dio el marco y Hall las instituciones|Hall dio el marco y James las instituciones|Ambos fundaron la APA en Johns Hopkins|James aportó las ideas, con los Principles, y Hall levantó laboratorios, revistas y la APA.",
      "Un manual afirma sin más que James fundó el primer laboratorio estadounidense hacia 1875. ¿Qué matiz conviene añadir?|Depende de cómo se defina laboratorio|Lo fundó en realidad Hall en Harvard|Lo fundó Münsterberg en Harvard|Si basta un espacio de demostración, fue James (hacia 1875). Si se exige investigación sistemática, fue Hall (1883).",
      "¿Qué idea de James contradice la imagen de la conciencia como mosaico de elementos?|La corriente de conciencia|La teoría James‑Lange|El pragmatismo de James|La conciencia es un flujo continuo, personal y cambiante: no se baña uno dos veces en el mismo estado mental."
    ],
    inc: [
      "Sobre la psicología estadounidense|Hall publicó los Principles en 1890|Hall fundó el American Journal of Psychology|Cattell acuñó la expresión «mental tests»|The Principles of Psychology (1890) es la gran obra de William James. Hall fundó la revista en 1887."
    ],
    seq: [
      "Logros institucionales de Hall|Laboratorio en Johns Hopkins (1883)>American Journal of Psychology (1887)>Fundación de la APA (1892)>Invitación a Freud y Jung (1909)"
    ],
    cls: [
      "Figura|James: corriente de conciencia; pragmatismo; Principles (1890)|Hall: Johns Hopkins; primer presidente de la APA; Clark University"
    ] }
] },
{ n: 4, t: "Los funcionalismos europeos", cap: 2, pir: "alta", mods: [
  { t: "Ebbinghaus y la memoria en el laboratorio",
    tip: "Ebbinghaus cruzó la frontera de Wundt al estudiar en el laboratorio un proceso superior. En Über das Gedächtnis (1885) fue su único sujeto y usó sílabas sin sentido. Medía el ahorro al reaprender una lista hasta recitarla dos veces seguidas sin error. El olvido es muy rápido al principio y cada vez más lento, y Murre y Dros (2015) replicaron la curva.",
    v: [
      "Funcionalismos europeos=Corrientes interesadas en lo que la mente hace y para qué sirve",
      "Über das Gedächtnis=Obra de Ebbinghaus de 1885 sobre la memoria",
      "Sílaba sin sentido=Consonante, vocal y consonante que no forman palabra",
      "Método de ahorro=Compara el esfuerzo del aprendizaje inicial con el del reaprendizaje",
      "Recuerdo libre=Reproducir el material aprendido, medida menos sensible que el ahorro",
      "Curva del olvido=Pérdida muy rápida al principio y cada vez más lenta después",
      "Murre y Dros (2015)=Réplica con un único participante durante unas 70 horas",
      "Georg Elias Müller=Continuó en Gotinga un programa sobre psicofísica y memoria"
    ],
    g: [
      "Ebbinghaus repetía cada lista hasta recitarla ___ veces seguidas sin error.|dos|tres|cinco",
      "A los 31 días, el ahorro seguía en torno al ___.|21 %|34 %|44 %",
      "Al cabo de un día, el ahorro rondaba el ___.|34 %|21 %|58 %",
      "Los intervalos de retención de Ebbinghaus fueron de 20 minutos a ___.|31 días|7 días|un año",
      "La réplica de Murre y Dros mostró un probable repunte a las ___.|24 horas|6 horas|48 horas"
    ],
    tf: [
      "El método de ahorro y el recuerdo libre miden lo mismo con distinto nombre.|F|El recuerdo libre pide reproducir el material. El ahorro solo compara dos procesos de aprendizaje y es más sensible.",
      "Ebbinghaus demostró que un proceso superior podía medirse con precisión, en contra de lo que pensaba Wundt.|V",
      "Ebbinghaus usó sílabas sin sentido para estudiar cómo el significado transforma el recuerdo.|F|Las usó para que el significado previo no contaminara los resultados. Estudiar el significado fue el objetivo de Bartlett.",
      "Aunque no recordara ninguna sílaba de forma explícita, un reaprendizaje más rápido indicaba retención.|V"
    ],
    q: [
      "Un estudiante necesitó 20 repeticiones para aprender una lista y, un mes después, 16 para reaprenderla, aunque creía no recordar nada. ¿Qué indica el método de Ebbinghaus?|Que conserva un 20 % de ahorro|Que conserva un 80 % de ahorro|Que no queda nada en la memoria|Ahorró 4 de 20 repeticiones, un 20 %. Si reaprende más deprisa, algo ha quedado en la memoria aunque no lo recuerde.",
      "¿Qué límite se señala al método de Ebbinghaus?|Un solo sujeto que era el investigador|Una medida menos sensible que el recuerdo|Intervalos de retención demasiado breves|Un único sujeto, que era además el investigador, y un material artificial. Aun así, el resultado se ha replicado.",
      "¿Qué ahorro aproximado obtuvo Ebbinghaus a la hora?|44 %|58 %|34 %|Cerca del 58 % a los 20 minutos, del 44 % a la hora y del 34 % al cabo de un día.",
      "¿Por qué se agrupa a estas corrientes bajo la etiqueta de funcionalismos europeos?|Les interesaba lo que la mente hace|Estudiaban los contenidos de la conciencia|Seguían el programa de Leipzig|Les interesaba menos el inventario de contenidos de la conciencia que lo que la mente hace y para qué sirve."
    ],
    inc: [
      "Sobre Ebbinghaus|Usó a muchos estudiantes como sujetos|Calculaba el ahorro tras un intervalo|Leía las listas a un ritmo constante|Fue el único sujeto de su programa, uno de sus límites junto al material artificial."
    ],
    seq: [
      "Procedimiento de Ebbinghaus|Leer la lista hasta dos repeticiones seguidas sin error>Anotar las repeticiones necesarias>Esperar un intervalo de retención>Reaprender la lista hasta el mismo criterio>Calcular el ahorro"
    ],
    cls: [
      "Medida de retención|Ahorro: comparar aprendizaje y reaprendizaje; medida más sensible; Ebbinghaus|Recuerdo libre: reproducir el material; medida menos sensible"
    ] },
  { t: "Brentano, Stumpf y la Escuela de Würzburgo",
    tip: "Brentano (1874) propuso estudiar actos y no contenidos, con la intencionalidad como rasgo definitorio. Stumpf llevó esta tradición a la percepción musical. Külpe, discípulo de Wundt, estudió el pensamiento en Würzburgo con informes retrospectivos y llegó al pensamiento sin imágenes. Wundt criticó el método en 1907 y Titchener negó los resultados, y la polémica desacreditó la introspección.",
    v: [
      "Psicología del acto=Estudia ver, juzgar, recordar o desear, y no sensaciones e imágenes",
      "Intencionalidad=Rasgo de todo acto mental de dirigirse hacia algo",
      "Tonpsychologie=Obra de Stumpf sobre la percepción musical (1883/1890)",
      "Informe retrospectivo=Relato del observador, tras la tarea, de lo que había vivido",
      "Aufgabe=Tarea que orienta el pensamiento antes del estímulo (Watt, 1905)",
      "Tendencia determinante=Disposición de la instrucción que dirige las asociaciones sin hacerse consciente",
      "Pensamiento sin imágenes=Pensar sin imágenes ni sensaciones identificables en la conciencia",
      "Bühler (1907)=Describió los pensamientos como unidades irreductibles a imágenes"
    ],
    g: [
      "Brentano publicó «Psychologie vom empirischen Standpunkte» en ___.|1874|1883|1901",
      "Entre los oyentes de Brentano en Viena estuvo un joven ___.|Freud|Külpe|Jung",
      "En el instituto de Stumpf en Berlín se formaron Köhler y ___.|Koffka|Külpe|Bühler",
      "Mayer y Orth (___) hallaron estados de conciencia que no eran imágenes ni sensaciones.|1901|1905|1907",
      "La tendencia determinante la propuso ___ en 1905.|Ach|Watt|Bühler"
    ],
    tf: [
      "La Escuela de Würzburgo fue una simple prolongación del programa de Wundt.|F|Külpe era discípulo de Wundt, pero estudió el pensamiento en el laboratorio y usó informes retrospectivos, contra su maestro.",
      "Titchener sostuvo que sus observadores encontraban imágenes o sensaciones débiles en todo pensamiento.|V",
      "Brentano desarrolló un amplio programa experimental en Viena.|F|Hizo poco trabajo experimental. Su influencia fue sobre todo filosófica.",
      "La polémica sobre el pensamiento sin imágenes contribuyó al descrédito de la introspección como método.|V"
    ],
    q: [
      "Se pide a una persona que diga una fruta tropical y responde «mango» sin notar ninguna imagen. Según Würzburgo, ¿dónde ocurrió lo decisivo?|En la preparación que creó la tarea|En una imagen débil de la fruta tropical|En la asociación libre que vino después|La instrucción ya había preparado la búsqueda antes del estímulo: es la tarea (Watt) o la tendencia determinante (Ach).",
      "¿Por qué criticó Wundt en 1907 los experimentos de Würzburgo?|Por falta de control experimental|Porque estudiaban actos y no contenidos|Porque usaban observadores no entrenados|El observador hacía la tarea y a la vez debía observarse, y su informe dependía de cómo le preguntaran.",
      "¿Qué rasgo define, según Brentano, todo acto mental?|La intencionalidad|La apercepción|La síntesis creadora|Todo acto está dirigido hacia algo: no se ve sin ver algo. Apercepción y síntesis creadora son conceptos de Wundt.",
      "¿Por qué el desacuerdo entre Würzburgo y Titchener no tuvo solución?|Cada laboratorio confiaba en sus observadores|Faltaban instrumentos para medir los tiempos|Los informes se publicaban en lenguas distintas|No había forma de contrastar los informes entre laboratorios, lo que contribuyó al descrédito de la introspección."
    ],
    inc: [
      "Sobre la Escuela de Würzburgo|Külpe se formó con Titchener en Cornell|Watt destacó el papel de la tarea|Bühler habló de pensamientos irreductibles|Külpe se doctoró con Wundt y fue su colaborador en Leipzig antes de separarse de él."
    ],
    seq: [
      "Hallazgos de Würzburgo|Mayer y Orth (1901)>Watt y Ach (1905)>Bühler (1907)"
    ],
    cls: [
      "Autor o escuela|Brentano: psicología del acto; intencionalidad|Stumpf: Tonpsychologie; instituto de Berlín|Würzburgo: Külpe; informe retrospectivo; pensamiento sin imágenes"
    ] },
  { t: "La tradición británica: Spearman, Pearson, McDougall y Bartlett",
    tip: "La tradición británica fue evolucionista, centrada en las diferencias individuales y apoyada en la estadística. Pearson formalizó en 1896 el coeficiente producto‑momento, y Spearman (1904) propuso el factor g con un análisis factorial incipiente. McDougall defendió una psicología hórmica basada en instintos, y Bartlett (1932) mostró que recordar es reconstruir, guiado por esquemas.",
    v: [
      "Coeficiente por rangos=Medida de correlación que se debe también a Spearman",
      "Factor g=Capacidad general común a todas las tareas cognitivas (Spearman, 1904)",
      "Análisis factorial=Técnica que Spearman desarrolló de forma incipiente",
      "Psicología hórmica=Enfoque de McDougall, del griego «impulso», con conducta propositiva",
      "Instinto=Disposición innata a percibir, sentir y actuar de cierta manera ante un objeto",
      "Remembering=Obra de Bartlett publicada en 1932",
      "Reproducción serial=Cada participante cuenta el relato al siguiente, como en el juego del teléfono",
      "Esquema=Estructura de conocimiento previo que organiza la experiencia"
    ],
    g: [
      "Spearman analizó las correlaciones entre las calificaciones escolares y diversas pruebas ___.|sensoriales|verbales|motoras",
      "Spearman ideó también un coeficiente de correlación por ___.|rangos|momentos|factores",
      "McDougall publicó «An Introduction to Social Psychology» en ___.|1908|1904|1932",
      "Tras la I Guerra Mundial, McDougall se trasladó a ___, donde chocó con el conductismo.|Harvard|Cornell|Clark",
      "«La guerra de los fantasmas» estaba llena de detalles extraños para un lector ___.|británico|estadounidense|francés"
    ],
    tf: [
      "Spearman atribuyó la covariación entre pruebas solo a un factor general, sin factores específicos.|F|Propuso un factor general, g, junto a factores específicos de cada tarea.",
      "Es un hecho consensuado que g es una capacidad psicológica real.|F|Se discute si g es una capacidad real o un resumen estadístico de las correlaciones entre pruebas.",
      "El concepto de esquema pasó casi inadvertido durante el auge conductista y se recuperó con la psicología cognitiva.|V",
      "Las listas de instintos de McDougall se abandonaron, pero su idea de una conducta con dirección pervive en la motivación.|V"
    ],
    q: [
      "En la boda de un amigo, un invitado «recuerda» un discurso que nunca se pronunció, pero que suele haber en las bodas. ¿Qué autor lo explicaría mejor?|Bartlett|Ebbinghaus|McDougall|Recordar es reconstruir el pasado a partir de lo que se sabe y se espera, guiado por esquemas (Bartlett, 1932).",
      "¿Qué ocurría con las sucesivas versiones de «La guerra de los fantasmas»?|Se acortaban y lo extraño se volvía familiar|Se alargaban con detalles cada vez más extraños|Se mantenían casi literales en cada cadena|Se adaptaban a las convenciones culturales de los participantes, guiadas por sus esquemas.",
      "¿Qué distingue la imagen de la memoria de Bartlett de la de Ebbinghaus?|Reconstrucción guiada por esquemas|Huellas que se debilitan con el tiempo|Ahorro medido en el reaprendizaje|Para Ebbinghaus, la memoria son huellas que se debilitan. Para Bartlett, una reconstrucción guiada por esquemas.",
      "Según McDougall, ¿cuál es el motor de la conducta propositiva?|Los instintos|Los reflejos|Los hábitos|Los instintos, disposiciones innatas a percibir, sentir y actuar. Por eso llamó a su enfoque psicología hórmica."
    ],
    inc: [
      "Sobre la tradición británica|Spearman formalizó la r producto‑momento|Pearson fue colaborador y continuador de Galton|Spearman se había formado con Wundt|El coeficiente producto‑momento lo formalizó Pearson (1896). Spearman propuso el factor g y un coeficiente por rangos."
    ],
    seq: [],
    cls: [
      "Programa de memoria|Ebbinghaus (1885): sílabas sin sentido; ahorro en el reaprendizaje; huellas que se debilitan|Bartlett (1932): relatos con significado; reproducción serial; esquemas"
    ] },
  { t: "La tradición francesa: Ribot, Charcot, Janet y Binet",
    tip: "La psicología francesa usó el método patológico: estudiar las alteraciones para entender lo normal. Ribot fue el gran organizador, Charcot estudió la histeria y la hipnosis en la Salpêtrière y Janet propuso la disociación (1889). Binet y Simon crearon en 1905 la primera escala práctica de inteligencia, revisada en 1908 y 1911. Binet veía la inteligencia como educable.",
    v: [
      "Método patológico=Estudiar las alteraciones de la mente para entender su funcionamiento normal",
      "Revue philosophique=Revista fundada por Ribot en 1876",
      "Salpêtrière=Hospital de París donde Charcot estudió la histeria y la hipnosis",
      "Escuela de Nancy=Explicó la hipnosis por sugestión, posible también en personas sanas",
      "Disociación=Experiencias traumáticas separadas de la conciencia que producen síntomas (Janet)",
      "Edad mental=Nivel estimado con las pruebas agrupadas por edades desde 1908",
      "Cociente mental=Razón entre edad mental y edad cronológica propuesta por Stern (1912)",
      "Stanford‑Binet=Adaptación de Terman (1916) que popularizó el CI"
    ],
    g: [
      "Janet publicó «L'automatisme psychologique» en ___.|1889|1876|1905",
      "Charcot consideraba la hipnosis un estado ligado a la patología ___.|histérica|obsesiva|depresiva",
      "Ribot ocupó la primera cátedra de psicología experimental y comparada del ___.|Collège de France|hospital de la Salpêtrière|laboratorio de la Sorbona",
      "La escala de Binet y Simon respondía a un encargo de las autoridades ___.|educativas|sanitarias|militares",
      "En la revisión de ___, Binet y Simon agruparon las pruebas por edades.|1908|1905|1911"
    ],
    tf: [
      "Binet creó su escala porque pensaba que la inteligencia es fija y hereditaria.|F|Binet la veía educable y temía las etiquetas de por vida. La lectura hereditarista fue de Goddard y Terman.",
      "Con el tiempo se impuso la postura de la escuela de Nancy sobre la hipnosis.|V",
      "Ribot fue un gran experimentador que dirigió el laboratorio de la Sorbona.|F|Apenas experimentó: fue el gran organizador. El laboratorio de la Sorbona lo dirigió Binet.",
      "Binet estudió el pensamiento observando en parte cómo resolvían tareas sus dos hijas.|V"
    ],
    q: [
      "Un psicólogo usa la escala de Binet para etiquetar a un niño como incapaz de por vida. ¿Qué habría objetado Binet?|Que la inteligencia es educable|Que la escala mide solo herencia|Que el CI no varía con la edad|Binet temía que una puntuación se convirtiera en una etiqueta de por vida. La lectura hereditarista fue de Goddard y Terman.",
      "¿Qué proceso propuso Janet para explicar ciertos síntomas?|La disociación|La sugestión|La apercepción|Experiencias traumáticas quedan separadas de la conciencia y actúan como ideas fijas. La sugestión explicaba la hipnosis en Nancy.",
      "¿Qué replicó la escuela de Nancy a Charcot?|Que la hipnosis se debía a la sugestión|Que la hipnosis era un estado histérico|Que la histeria era una lesión cerebral|Para Nancy, los fenómenos hipnóticos se explicaban por sugestión y podían darse en personas sanas.",
      "¿Quién propuso en 1912 la razón entre edad mental y edad cronológica?|Stern|Terman|Simon|Stern propuso el cociente mental (1912). Terman publicó la Stanford‑Binet (1916), que popularizó el CI."
    ],
    inc: [
      "Sobre la escala de Binet|Terman la entendió como medida educable|Se revisó en 1908 y de nuevo en 1911|Se publicó en 1905 con Théodore Simon|Goddard y Terman la leyeron en clave hereditarista, como medida de una capacidad innata y estable."
    ],
    seq: [
      "De la escala de Binet al CI|Escala de Binet y Simon (1905)>Revisión por edades (1908)>Revisión de 1911>Cociente mental de Stern (1912)>Stanford‑Binet de Terman (1916)"
    ],
    cls: [
      "Autor francés|Ribot: Revue philosophique; Collège de France|Charcot: Salpêtrière; histeria e hipnosis|Janet: disociación; L'automatisme psychologique"
    ] }
] }
);

// SAIMAP Psicología · Historia · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Psicología animal y reflexología rusa", cap: 2, pir: "alta", mods: [
  { t: "Darwin y la continuidad mental",
    tip: "Darwin rompió con la idea cartesiana de los animales como autómatas: On the Origin of Species (1859), The Descent of Man (1871) y The Expression of the Emotions (1872). De ahí la tesis de la continuidad mental, con diferencias de grado y no de naturaleza. Legitimó el estudio animal, introdujo la pregunta por la función y situó el aprendizaje en el centro. El riesgo era el antropomorfismo, y la salida fue sustituir la anécdota por la observación controlada.",
    v: [
      "Continuidad mental=Tesis darwiniana: mente humana y animal difieren en grado, no en naturaleza",
      "Postura cartesiana=Los animales son autómatas y solo el ser humano tiene mente",
      "On the Origin of Species=Obra de 1859 sobre la descendencia de las especies por selección natural",
      "The Descent of Man=Obra de 1871 que incluyó de forma explícita al ser humano en la evolución",
      "Expresión de las emociones=Libro de Darwin (1872) que comparó la expresión emocional humana y animal",
      "Valor adaptativo=Función de una capacidad mental, la pregunta típica de los funcionalismos",
      "Antropomorfismo=Atribución sin pruebas de capacidades mentales humanas a los animales",
      "Aprendizaje=Criterio observable para comparar especies y separar lo innato de lo adquirido"
    ],
    g: [
      "Para Darwin, entre la mente humana y la animal hay diferencias de ___, no de naturaleza.|grado|origen|función",
      "The Descent of Man, publicada en ___, incluyó al ser humano en el proceso evolutivo.|1871|1859|1872",
      "Darwin explicó gestos como mostrar los dientes por su utilidad en ___ comunes.|antepasados|entornos|aprendizajes",
      "La pregunta por la ___ de una capacidad mental caracteriza a todos los funcionalismos.|función|estructura|localización",
      "Atribuir a los animales capacidades humanas sin pruebas se llama ___.|antropomorfismo|mentalismo|vitalismo"
    ],
    tf: [
      "Mientras se aceptó que los animales eran autómatas, no había motivo para estudiar científicamente su mente.|V",
      "La continuidad mental implica que la mente humana y la animal difieren en naturaleza, no solo en grado.|F|Es al revés: la tesis darwiniana sostiene diferencias de grado, no de naturaleza.",
      "El supuesto de continuidad sostiene buena parte de la psicología del aprendizaje del siglo XX.|V",
      "La primera generación de psicólogos comparados resolvió el problema de método con experimentos controlados.|F|Reunió anécdotas leídas desde la experiencia humana. El control llegó después, con Lloyd Morgan y Pfungst."
    ],
    q: [
      "Un dueño asegura que su perro «sabe» que es domingo porque se inquieta a la hora del paseo largo. ¿Qué explicación más simple habría que descartar antes?|Las señales que da el propio dueño|El recuento mental de los días|Una memoria de las fechas pasadas|La misma conducta puede deberse a las señales del dueño al cambiar su rutina. Leerla como un recuento de días es antropomorfismo.",
      "¿Qué consecuencia de la continuidad mental anticipa la pregunta de los funcionalismos?|Que cada capacidad tiene valor adaptativo|Que el aprendizaje es igual en las especies|Que la mente animal es un autómata|Si las capacidades mentales evolucionaron, tienen una función. Es la pregunta de los funcionalismos europeos y americanos.",
      "¿Qué obra de Darwin trató la expresión emocional como un rasgo heredado y compartido?|La obra de 1872 sobre las emociones|La obra de 1871 sobre el ser humano|La obra de 1859 sobre las especies|The Expression of the Emotions (1872) explicó gestos como mostrar los dientes por su utilidad en antepasados comunes.",
      "¿Por qué la continuidad mental planteaba un problema de método?|Había que probar razonamientos o intenciones|Impedía estudiar la conducta de los animales|Obligaba a usar solo sujetos humanos|Había que demostrar que un animal razona, recuerda o tiene intenciones, y la anécdota no bastaba."
    ],
    inc: [
      "Sobre Darwin y la psicología animal|Desaconsejó generalizar de animales a humanos|Legitimó el estudio de la conducta animal|Situó el aprendizaje en el centro|La continuidad hizo lo contrario: permitió generalizar de animales a humanos con las debidas cautelas."
    ],
    seq: [
      "Obras de Darwin|On the Origin of Species (1859)>The Descent of Man (1871)>The Expression of the Emotions (1872)"
    ],
    cls: [
      "Postura sobre la mente animal|Cartesiana: discontinuidad; animales autómatas; no tiene sentido estudiar su mente|Darwiniana: continuidad; diferencias de grado; la conducta animal informa sobre la humana"
    ] },
  { t: "Romanes, Lloyd Morgan y el caso Clever Hans",
    tip: "Romanes (Animal Intelligence, 1882) documentó la continuidad con el método anecdótico, sin control y antropomórfico. Lloyd Morgan (1894) propuso su canon: no atribuir a una facultad superior lo explicable por una inferior, una regla de la psicología comparada que no equivale a la navaja de Ockham. Pfungst (1907) mostró con un diseño 2×2 que Clever Hans respondía a señales involuntarias del interrogador, y el caso está en el origen del procedimiento ciego.",
    v: [
      "Animal Intelligence (1882)=Obra de Romanes, considerada el primer tratado de psicología comparada",
      "Método anecdótico=Recopilación de relatos de conducta animal sin control, muchos de aficionados",
      "Canon de Lloyd Morgan=No atribuir a una facultad superior lo que explica una de nivel inferior",
      "Navaja de Ockham=Principio general de no multiplicar las entidades sin necesidad",
      "Comisión de 1904=Grupo presidido por Stumpf que no halló indicios de engaño deliberado",
      "Oskar Pfungst=Resolvió en 1907 el enigma del caballo con un diseño experimental 2×2",
      "Efecto Clever Hans=Acierto aparente debido a señales involuntarias de quien interroga",
      "Procedimiento ciego=Quien registra o interactúa no conoce la condición ni la respuesta esperada"
    ],
    g: [
      "Morgan expuso su canon en An Introduction to Comparative Psychology, de ___.|1894|1882|1907",
      "El canon ordena las explicaciones según el ___ psicológico que suponen.|nivel|número|origen",
      "Hans dejaba de golpear al detectar ___ involuntarias del interrogador.|señales|órdenes|palabras",
      "La comisión de 1904 que examinó a Hans estuvo presidida por ___.|Stumpf|Pfungst|Romanes",
      "Según el método anecdótico, el gato que abre una puerta tras ver a su dueño ___ el mecanismo del picaporte.|comprende|imita|ignora"
    ],
    tf: [
      "Lloyd Morgan negaba que los animales pudieran tener procesos psíquicos superiores.|F|No los negaba: pedía pruebas independientes antes de atribuírselos.",
      "El canon de Morgan es una regla específica de la psicología comparada y no equivale a la navaja de Ockham.|V",
      "Pfungst demostró que von Osten engañaba al público con señales pactadas con el caballo.|F|Las señales eran involuntarias. La comisión de 1904 ya no había hallado indicios de engaño deliberado.",
      "La habilidad de Hans era real, aunque consistía en una gran sensibilidad a indicios sutiles.|V"
    ],
    q: [
      "En el diseño de Pfungst, el interrogador está a la vista de Hans, pero no conoce la respuesta. ¿Qué ocurre?|Hans falla|Hans acierta|Hans acierta a medias|Solo acertaba si veía a alguien que conocía la respuesta. Sin ese conocimiento no había señales involuntarias que detectar.",
      "Un sistema de reconocimiento de imágenes acierta en las pruebas porque se fija en una marca ajena al objeto. ¿Cómo se describe?|Como un efecto Clever Hans|Como un caso de antropomorfismo|Como una aplicación del canon|Se habla de efecto Clever Hans cuando un animal o un sistema acierta por indicios ajenos a la tarea.",
      "Un etólogo explica que un perro abre la verja por tanteos sucesivos, no porque comprenda el pestillo. ¿Qué principio aplica?|El canon de Lloyd Morgan|La navaja de Ockham|El método anecdótico|Prefiere la explicación de nivel psicológico inferior, los tanteos, a una facultad superior, la comprensión del mecanismo.",
      "¿Qué herencia metodológica dejó el caso Clever Hans?|El procedimiento ciego|El grupo de control placebo|La medida del tiempo de reacción|Mostró que las expectativas del experimentador influyen sin intención: quien registra no debe conocer la condición."
    ],
    inc: [
      "Sobre el método anecdótico de Romanes|Controlaba bien las condiciones de observación|Seleccionaba relatos por ser llamativos|Solía interpretar desde la experiencia humana|Nadie controlaba las condiciones: las anécdotas se elegían por llamativas y se leían de forma antropomórfica."
    ],
    seq: [
      "Cronología de la psicología comparada|Animal Intelligence de Romanes (1882)>Canon de Lloyd Morgan (1894)>Comisión presidida por Stumpf (1904)>Diseño de Pfungst (1907)"
    ],
    cls: [
      "Condición del diseño de Pfungst|Hans acierta: interrogador visible que conoce la respuesta|Hans falla: interrogador oculto que la conoce; interrogador visible que no la conoce; interrogador oculto que no la conoce"
    ] },
  { t: "Séchenov y Pávlov: el reflejo condicionado",
    tip: "Séchenov (Reflejos del cerebro, 1863) propuso explicar toda la actividad mental como refleja, sin introspección. Pávlov, fisiólogo de la digestión y Nobel de 1904 por esos trabajos, observó en perros con fístula unas secreciones psíquicas que después llamó reflejos condicionales. El estímulo más característico era el metrónomo, junto a zumbadores y luces. Describió adquisición, extinción, recuperación espontánea, generalización, discriminación y neurosis experimental.",
    v: [
      "Reflejos del cerebro=Obra de Séchenov (1863): toda actividad mental, incluida la voluntaria, es refleja",
      "Fístula=Abertura quirúrgica que permitía recoger y medir la saliva con exactitud",
      "Secreciones psíquicas=Primer nombre de Pávlov para la salivación anticipada a la comida",
      "Estímulo incondicionado=Provoca la respuesta sin aprendizaje previo, como el alimento en la boca",
      "Estímulo condicionado=Estímulo antes neutro que provoca la respuesta tras emparejarse con el EI",
      "Extinción=Disminución de la RC al presentar el EC repetidamente sin el EI",
      "Recuperación espontánea=Reaparición parcial de una respuesta extinguida tras una pausa",
      "Neurosis experimental=Alteración grave de la conducta ante una discriminación demasiado difícil"
    ],
    g: [
      "Pávlov recibió el Nobel de Fisiología o Medicina en ___ por sus trabajos sobre la digestión.|1904|1903|1927",
      "El estímulo más característico del laboratorio de Pávlov era el ___.|metrónomo|diapasón|silbato",
      "Pávlov llamó a estas respuestas reflejos ___ porque dependían de las condiciones de la experiencia.|condicionales|asociados|psíquicos",
      "Si solo un estímulo va seguido del EI, la respuesta se restringe a él: es la ___.|discriminación|generalización|extinción",
      "La terminología se generalizó con la traducción inglesa Conditioned Reflexes, de ___.|1927|1904|1913"
    ],
    tf: [
      "Pávlov recibió el Nobel de 1904 por descubrir el reflejo condicionado.|F|El Nobel premió sus trabajos sobre fisiología digestiva, no el condicionamiento.",
      "Pávlov usó alguna vez una campana, aunque la citaba como poco eficaz.|V",
      "La recuperación espontánea indica que la extinción borra el aprendizaje original.|F|Indica lo contrario: la extinción inhibe el aprendizaje sin borrarlo, y por eso la RC reaparece en parte.",
      "En el dispositivo de Pávlov, el experimentador presentaba los estímulos desde una sala contigua.|V"
    ],
    q: [
      "Un perro condicionado al sonido de un metrónomo a cierto ritmo saliva también ante un ritmo algo distinto. ¿Qué fenómeno muestra?|Generalización|Discriminación|Recuperación espontánea|Los estímulos parecidos al EC también provocan la RC. Si solo uno fuera seguido del EI, habría discriminación.",
      "En el laboratorio de Pávlov, ¿qué es la salivación ante el metrónomo tras varios emparejamientos con el alimento?|Una respuesta condicionada|Una respuesta incondicionada|Un estímulo condicionado|El metrónomo es el EC, y la salivación que provoca por sí solo es la RC. La salivación ante el alimento es la RI.",
      "Se pide a un perro distinguir un círculo de una elipse casi circular y empieza a mostrar alteraciones graves de conducta. ¿Cómo lo llamó Pávlov?|Neurosis experimental|Recuperación espontánea|Extinción de la respuesta|Aparece cuando la discriminación se hace demasiado difícil. Pávlov intentó aplicarla a la psicopatología.",
      "¿Qué designa el término ruso zvonok, ligado al mito de la campana?|Un timbre o zumbador|Un metrónomo de laboratorio|Una campana de iglesia|Designa un timbre o zumbador. En cualquier caso, el estímulo más característico de Pávlov era el metrónomo."
    ],
    inc: [
      "Sobre Séchenov y Pávlov|Séchenov desarrolló el método de la fístula salival|Séchenov quiso explicar la mente sin introspección|Pávlov se dedicaba a la fisiología digestiva|Séchenov sentó las bases teóricas. Los métodos, como la fístula, los construyeron continuadores como Pávlov."
    ],
    seq: [
      "Fases del condicionamiento clásico|Adquisición con EC y EI>Extinción con solo el EC>Pausa>Recuperación espontánea parcial>Nueva extinción"
    ],
    cls: [
      "Elemento del condicionamiento en el laboratorio de Pávlov|Incondicionado: alimento en la boca; salivación ante el alimento|Condicionado: sonido del metrónomo tras los emparejamientos; salivación ante el sonido"
    ] },
  { t: "Béjterev, la reflexología y su balance",
    tip: "Béjterev, neurólogo y psiquiatra, desarrolló desde 1907 una psicología objetiva que llamó reflexología. Estudió reflejos motores de retirada ante descargas, los reflejos asociados, en animales y personas. La salivación es de Pávlov. La reflexología dio a Watson un método objetivo, inspiró a Mary Cover Jones (1924) y fundó el paradigma asociativo. Sus límites fueron la preparación biológica (Garcia y Koelling, 1966) y la insuficiencia ante el lenguaje y el pensamiento.",
    v: [
      "Reflexología=Nombre que Béjterev dio a su psicología objetiva, iniciada en 1907",
      "Reflejo asociado=Respuesta motora de retirada condicionada mediante una descarga leve",
      "Béjterev=Neurólogo y psiquiatra, gran rival de Pávlov",
      "Tipos de sistema nervioso=Explicación de Pávlov para las diferencias individuales",
      "Mary Cover Jones (1924)=Eliminó el miedo de un niño, precursora de la desensibilización",
      "Garcia y Koelling (1966)=Mostraron que no todo estímulo se asocia igual con toda consecuencia",
      "Preparación biológica=Disposición a asociar ciertos estímulos con ciertas consecuencias",
      "Little Albert=Condicionamiento pavloviano de Watson aplicado a una emoción humana"
    ],
    g: [
      "Béjterev emparejaba un estímulo neutro con una ___ en la pata o en el dedo.|descarga leve|presión fuerte|gota ácida",
      "Pávlov se consideró siempre ___ y desconfiaba de la psicología introspectiva.|fisiólogo|psiquiatra|neurólogo",
      "La ventaja metodológica del método de Béjterev era que resultaba fácil de aplicar en ___.|humanos|perros|palomas",
      "Watson encontró en el reflejo ___ el procedimiento objetivo que necesitaba.|condicionado|rotuliano|innato",
      "Pávlov explicó las diferencias individuales mediante tipos de sistema ___.|nervioso|endocrino|digestivo"
    ],
    tf: [
      "El condicionamiento salival se debe a Béjterev, que lo extendió después a personas.|F|La salivación es de Pávlov. Béjterev estudió reflejos motores de retirada ante descargas.",
      "Pávlov intentó aplicar los resultados de la neurosis experimental a la psicopatología.|V",
      "La reflexología suponía que cualquier estímulo podía asociarse con igual facilidad a cualquier respuesta.|V",
      "Béjterev era, como Pávlov, un fisiólogo dedicado a la digestión.|F|Béjterev era neurólogo y psiquiatra. El fisiólogo de la digestión era Pávlov."
    ],
    q: [
      "Un investigador hace sonar un tono antes de una descarga leve en el dedo de un voluntario, hasta que el tono provoca por sí solo la retirada de la mano. ¿Qué tradición sigue?|La de Béjterev|La de Pávlov|La de Séchenov|Es el reflejo asociado: una respuesta motora condicionada mediante descargas, aplicada también a personas.",
      "¿Qué estudio mostró que los organismos están preparados para asociar ciertos estímulos con ciertas consecuencias?|Garcia y Koelling (1966)|Mary Cover Jones (1924)|Watson y Little Albert|Garcia y Koelling desmintieron el supuesto reflexológico de que cualquier estímulo se asocia igual a cualquier respuesta.",
      "¿Qué ventaja metodológica tenía el método de Pávlov frente al de Béjterev?|Medida muy precisa y controlable|Fácil aplicación en seres humanos|Uso de descargas en lugar de comida|La salivación permitía una medida muy precisa. La facilidad de aplicación en humanos era la ventaja del método de Béjterev.",
      "¿En qué ámbito se mostró insuficiente la idea de explicar toda la vida mental como encadenamiento de reflejos?|El lenguaje y el pensamiento|La salivación y la digestión|La retirada ante descargas|La revolución cognitiva mostró que el modelo reflejo no bastaba para el lenguaje y el pensamiento."
    ],
    inc: [
      "Sobre Pávlov y Béjterev|Béjterev trabajó sobre todo con perros y fístulas|Pávlov llamó reflejo condicional a su fenómeno|Pávlov explicó las diferencias por tipos nerviosos|Béjterev estudió animales y personas mediante descargas. Las fístulas y la salivación en perros son de Pávlov."
    ],
    seq: [
      "Cronología de la reflexología y su legado|Reflejos del cerebro de Séchenov (1863)>Nobel de Pávlov por la digestión (1904)>Psicología objetiva de Béjterev (1907)>Manifiesto de Watson (1913)>Trabajo de Mary Cover Jones (1924)>Garcia y Koelling (1966)"
    ],
    cls: [
      "Rasgo de la reflexología rusa|Pávlov: fisiólogo de la digestión; salivación; reflejo condicional; sobre todo perros|Béjterev: neurólogo y psiquiatra; retirada ante una descarga; reflejo asociado; animales y personas"
    ] }
] },
{ n: 6, t: "Freud y el nacimiento del psicoanálisis", cap: 2, pir: "media", mods: [
  { t: "El contexto: Charcot, Breuer y la histeria",
    tip: "El psicoanálisis nació en la consulta médica, ante pacientes histéricos cuyos síntomas no explicaba ninguna lesión. Charcot estudiaba la histeria con hipnosis, Janet describió la disociación (1889) y Freud pasó por París en 1885-1886. Breuer trató a Anna O. (Bertha Pappenheim) con el método catártico, y ambos publicaron los Estudios sobre la histeria (1895). El movimiento creció fuera de la universidad, con la Asociación Psicoanalítica Internacional desde 1910.",
    v: [
      "Histeria=Diagnóstico de parálisis, cegueras o convulsiones sin daño nervioso detectable",
      "Anestesia en guante=Pérdida de sensibilidad que sigue la idea popular de mano, no los nervios",
      "Disociación=Partes de la vida mental que funcionan separadas de la conciencia (Janet, 1889)",
      "Bertha Pappenheim=Nombre real de la paciente Anna O., tratada por Breuer",
      "Método catártico=Revivir el recuerdo y descargar el afecto ligado a él (Breuer)",
      "Cura por la palabra=Expresión de la propia paciente para referirse al tratamiento de Breuer",
      "Estudios sobre la histeria=Obra de Breuer y Freud (1895): los histéricos sufren sobre todo de recuerdos",
      "Asociación Psicoanalítica Internacional=Institución fundada en 1910, al margen de la psicología universitaria"
    ],
    g: [
      "Freud pasó una temporada con Charcot en ___ entre 1885 y 1886.|París|Viena|Leipzig",
      "Charcot había convertido la histeria en un tema respetable de la ___.|neurología|psiquiatría forense|fisiología",
      "Los síntomas de Anna O. aparecieron mientras cuidaba a su ___ enfermo.|padre|hermano|marido",
      "Según los Estudios sobre la histeria, los histéricos sufren sobre todo de ___.|recuerdos|lesiones|fantasías",
      "Desde ___ Freud reunía en su casa al grupo que originó la Sociedad Psicoanalítica de Viena.|1902|1895|1910"
    ],
    tf: [
      "Charcot mostró que, mediante sugestión, podían provocarse y suprimirse síntomas muy parecidos a los histéricos.|V",
      "La disociación fue descrita por Breuer a partir del caso de Anna O.|F|La describió Janet (1889). A Breuer se debe el método catártico.",
      "El psicoanálisis creció dentro de la psicología universitaria, con el experimento como método.|F|Creció en la consulta privada y en instituciones propias. Sus datos eran casos clínicos, no experimentos.",
      "La anestesia en guante sugería que algo psicológico, y no anatómico, daba forma al síntoma.|V"
    ],
    q: [
      "Una paciente deja de sentir la mano justo hasta la muñeca, sin lesión nerviosa. ¿Por qué apuntaba esto a un origen psicológico?|El límite sigue la idea popular de mano|El límite coincide con un nervio concreto|La pérdida aparece solo bajo hipnosis|En la anestesia en guante, el límite coincide con la idea popular de «mano» y no con el recorrido real de los nervios.",
      "¿A quién se debe el método catártico aplicado en el caso de Anna O.?|A Breuer|A Charcot|A Janet|Breuer lo desarrolló. Charcot usaba la hipnosis, y Janet describió la disociación.",
      "¿Qué pregunta dio origen al psicoanálisis?|Qué les ocurre a pacientes sin lesión|Cómo funciona la mente normal|Cómo difieren unos individuos de otros|No surgió de preguntar por la mente normal, sino de pacientes cuyos síntomas no explicaba ninguna lesión.",
      "¿Por qué el psicoanálisis mantuvo una relación tensa con la psicología experimental?|Sus datos eran casos clínicos|Rechazaba el estudio de lo inconsciente|Nació en un laboratorio rival|Su procedencia clínica hizo que se apoyara en la interpretación de casos y no en experimentos."
    ],
    inc: [
      "Sobre los antecedentes del psicoanálisis|Janet desarrolló el método catártico con Anna O.|Charcot convirtió la histeria en un tema neurológico|Freud volvió de París convencido del poder de las ideas|El método catártico es de Breuer. Janet describió la disociación (1889)."
    ],
    seq: [
      "Del contexto clínico al movimiento psicoanalítico|Breuer trata a Anna O. (comienzos de los ochenta)>Freud con Charcot en París (1885-1886)>Janet describe la disociación (1889)>Estudios sobre la histeria (1895)>Reuniones en casa de Freud (1902)>Asociación Psicoanalítica Internacional (1910)"
    ],
    cls: [
      "Antecedente del psicoanálisis|Charcot: histeria como problema médico serio; hipnosis; Salpêtrière|Janet: disociación; procesos separados de la conciencia|Breuer: método catártico; Anna O."
    ] },
  { t: "Freud: teoría y método (1895‑1923)",
    tip: "Freud definió el psicoanálisis como procedimiento de investigación, método de tratamiento y conjunto de ideas. El inconsciente dinámico reúne contenidos activos apartados por la represión, de ahí el determinismo psíquico. Hacia 1897 dio más peso a las fantasías y a la sexualidad infantil, y cambió la hipnosis por la asociación libre. Propuso dos modelos del aparato psíquico: el topográfico (1900) y el estructural (1923), que no anula al primero.",
    v: [
      "Inconsciente dinámico=Contenidos activos apartados por la represión que siguen influyendo en la conducta",
      "Determinismo psíquico=Síntomas, sueños, olvidos y lapsus tienen un sentido",
      "Libido=Energía de las pulsiones sexuales, descrita en los Tres ensayos (1905)",
      "Asociación libre=Regla de decir todo lo que se le ocurre a uno, sin seleccionar",
      "Resistencia=Dificultades del paciente para decir todo lo que se le ocurre",
      "Transferencia=Traslado al analista de sentimientos de relaciones anteriores",
      "Contenido latente=Deseo que expresa el sueño, frente a lo que se recuerda de él",
      "Preconsciente=Lo que puede hacerse consciente, como el número de teléfono de casa"
    ],
    g: [
      "La interpretación de los sueños se publicó en noviembre de 1899, aunque la edición lleva fecha de ___.|1900|1905|1895",
      "En el modelo estructural, la instancia que recoge las normas y los ideales interiorizados es el ___.|superyó|ello|preconsciente",
      "El complejo de Edipo se sitúa en la fase ___.|fálica|anal|genital",
      "Hacia ___ Freud abandonó la idea de que las neurosis se debían siempre a abusos reales en la infancia.|1897|1905|1920",
      "En Más allá del principio del placer (1920), Freud situó la pulsión de ___ junto a las pulsiones de vida.|muerte|poder|placer"
    ],
    tf: [
      "El modelo estructural de 1923 sustituyó por completo al topográfico.|F|No lo anula: buena parte del yo y del superyó también es inconsciente.",
      "Para Freud, llamar a la pareja actual con el nombre de la anterior no es un simple error de memoria.|V",
      "Freud mantuvo la hipnosis como método central y la combinó con la asociación libre.|F|Dejó la hipnosis y adoptó la asociación libre como método.",
      "Las teorías de Freud se apoyaban en casos como Dora, Juanito, el Hombre de las Ratas o el Hombre de los Lobos.|V"
    ],
    q: [
      "Durante las sesiones, una paciente empieza a reaccionar ante su analista con el mismo enfado que sentía hacia su padre. ¿Qué concepto freudiano lo describe?|Transferencia|Resistencia|Racionalización|La transferencia es el traslado al analista de sentimientos procedentes de relaciones anteriores.",
      "¿Qué criterio divide la mente en el modelo topográfico de 1900?|El grado de acceso a la conciencia|Las funciones del aparato psíquico|Las fases del desarrollo sexual|Distingue consciente, preconsciente e inconsciente. El estructural (1923) divide por funciones: ello, yo y superyó.",
      "¿Qué obra describió la libido y las fases del desarrollo?|Tres ensayos sobre teoría sexual (1905)|La interpretación de los sueños (1900)|El yo y el ello (1923)|En los Tres ensayos describió las fases oral, anal, fálica, de latencia y genital.",
      "¿En qué se diferenciaba el inconsciente freudiano del uso anterior del término?|Era un conjunto de contenidos activos|Designaba lo que está bajo el umbral|Se refería a procesos fisiológicos|Antes significaba lo que queda bajo el umbral de la conciencia. Para Freud reúne deseos y recuerdos reprimidos que siguen activos."
    ],
    inc: [
      "Sobre el modelo estructural de Freud|El ello media entre las pulsiones y la realidad|El yo usa mecanismos de defensa contra la angustia|El superyó recoge normas e ideales interiorizados|El ello alberga las pulsiones y busca el placer. Es el yo el que media con la realidad."
    ],
    seq: [
      "Obras clave de Freud|Estudios sobre la histeria (1895)>La interpretación de los sueños (1899/1900)>Tres ensayos sobre teoría sexual (1905)>Más allá del principio del placer (1920)>El yo y el ello (1923)"
    ],
    cls: [
      "Modelo del aparato psíquico|Topográfico (1900): consciente; preconsciente; inconsciente|Estructural (1923): ello; yo; superyó"
    ] },
  { t: "Las disidencias: Adler y Jung",
    tip: "En 1909 Hall invitó a Freud y a Jung a Clark University, y las cinco conferencias de Freud difundieron el psicoanálisis en Estados Unidos. Freud toleraba mal las revisiones de sus ideas centrales, sobre todo la sexualidad. Adler se separó en 1911 con la psicología individual: inferioridad, compensación, estilo de vida e interés social. Jung rompió en 1913 con la psicología analítica: libido general, inconsciente colectivo, arquetipos, introversión y extraversión.",
    v: [
      "Psicología individual=Enfoque de Adler tras separarse de Freud en 1911",
      "Psicología analítica=Enfoque de Jung tras su ruptura con Freud en 1913",
      "Compensación=Esfuerzo por superar inferioridades reales o percibidas",
      "Complejo de inferioridad=Sentimiento de inferioridad excesivo y paralizante",
      "Estilo de vida=Forma propia de cada persona de perseguir sus metas, según Adler",
      "Interés social=Implicación con los demás, ligada a la salud psicológica para Adler",
      "Inconsciente colectivo=Inconsciente compartido por la especie cuyo contenido son los arquetipos",
      "Arquetipos=Predisposiciones a organizar la experiencia en imágenes universales"
    ],
    g: [
      "Las conferencias de Freud en Clark University se celebraron en ___.|1909|1911|1913",
      "Jung había sido el primer ___ de la Asociación Psicoanalítica Internacional.|presidente|secretario|tesorero",
      "Para Jung, la libido es una energía psíquica ___, no solo sexual.|general|reprimida|infantil",
      "Para Adler, el motor de la conducta es el esfuerzo por superar la ___.|inferioridad|sexualidad|angustia",
      "La madre, el héroe y la ___ son ejemplos de arquetipos junguianos.|sombra|libido|represión"
    ],
    tf: [
      "El complejo de inferioridad es un concepto central de la psicología analítica de Jung.|F|Es de Adler, de su psicología individual. Atribuirlo a Jung es una trampa típica.",
      "Las disidencias de Adler y Jung no acabaron con el movimiento, que se ramificó en muchas escuelas.|V",
      "Tras Clark University, la psicología académica estadounidense acogió el psicoanálisis con entusiasmo.|F|Se difundió sobre todo entre médicos e intelectuales. La psicología académica lo miró con escepticismo.",
      "Como los casos interpretados no permitían decidir entre teorías rivales, los desacuerdos solían acabar en escisiones.|V"
    ],
    q: [
      "Un adolescente bajito se vuelca en el baloncesto hasta destacar. ¿Cómo lo interpretaría Adler?|Como compensación de una inferioridad|Como expresión de un arquetipo heroico|Como sublimación de un conflicto edípico|Para Adler, las inferioridades reales o percibidas se compensan. Dio más peso a las metas futuras que al pasado sexual.",
      "¿Qué enfoque distingue un inconsciente personal y otro compartido por la especie?|La psicología analítica de Jung|La psicología individual de Adler|El psicoanálisis clásico de Freud|Jung añadió al inconsciente personal un inconsciente colectivo, cuyo contenido son los arquetipos.",
      "¿Qué ocurrió con los términos introversión y extraversión de Jung?|Pasaron a la personalidad con otro sentido|Quedaron fuera de la psicología académica|Los adoptó Adler para su estilo de vida|Jung describió estos tipos psicológicos, y la psicología de la personalidad los adoptó después con un sentido distinto.",
      "¿Qué rasgo diferencia a Adler de Freud?|Más peso a lo social y a las metas futuras|Más peso al inconsciente reprimido|Más peso a los conflictos sexuales pasados|Adler sustituyó la sexualidad por la superación de la inferioridad y atendió a las metas y al interés social."
    ],
    inc: [
      "Sobre las disidencias|Adler propuso el inconsciente colectivo|Jung rompió con Freud en el año 1913|Adler habló de estilo de vida|El inconsciente colectivo y los arquetipos son de Jung. Atribuirlos a Adler es una trampa típica."
    ],
    seq: [
      "Difusión y rupturas del psicoanálisis|Conferencias en Clark University (1909)>Ruptura de Adler (1911)>Ruptura de Jung (1913)>Muerte de Freud (1939)"
    ],
    cls: [
      "Disidencia|Adler: psicología individual; complejo de inferioridad; estilo de vida; interés social|Jung: psicología analítica; inconsciente colectivo; arquetipos; introversión y extraversión"
    ] },
  { t: "Balance científico: mitos y evidencia",
    tip: "Para valorar el psicoanálisis hay que separar tres planos. La metapsicología es poco contrastable, porque los datos clínicos están contaminados por la sugestión (Grünbaum, 1984). Los conceptos generales tienen apoyo indirecto, reformulado por la psicología cognitiva. Las terapias psicodinámicas tienen evidencia de eficacia (Shedler, 2010), pero no son la metapsicología freudiana. Mitos corregidos: la anestesia con cocaína fue de Koller, y Anna O. ingresó después en un sanatorio.",
    v: [
      "Metapsicología=Teoría general freudiana del aparato psíquico, el plano menos contrastable",
      "Grünbaum (1984)=Sostuvo que los datos clínicos están contaminados por la sugestión",
      "Conceptos generales=Plano con apoyo indirecto, reformulado por la psicología cognitiva",
      "Shedler (2010)=Revisó ocho metaanálisis con 160 estudios sobre terapia psicodinámica",
      "Abbass et al. (2006)=Metaanálisis de 23 ensayos y 1.431 pacientes con terapia psicodinámica breve",
      "Koller (1884)=Aplicó la cocaína como anestésico en la cirugía ocular",
      "Über Coca (1884)=Texto en el que Freud promovió la cocaína",
      "Historiografía crítica=Ellenberger y Borch-Jacobsen, que cuestionan la curación de Anna O."
    ],
    g: [
      "En Abbass et al. (2006), con seguimientos de nueve meses o más, el tamaño del efecto aumentaba hasta ___.|1,51|0,97|0,31",
      "Como referencia, el efecto de los antidepresivos en revisiones comparables ronda ___.|0,31|0,97|1,51",
      "Los procesos no conscientes que estudia la memoria ___ no son el inconsciente reprimido freudiano.|implícita|episódica|semántica",
      "Grünbaum sostuvo que los datos clínicos están contaminados por la ___.|sugestión|represión|resistencia",
      "La terapia psicodinámica actual es ___ y focalizada, no el análisis clásico de varias sesiones semanales durante años.|breve|intensiva|grupal"
    ],
    tf: [
      "Freud descubrió la anestesia local con cocaína en la cirugía ocular.|F|Fue su colega Koller (1884). Freud la consumió y la promovió en Über Coca (1884).",
      "Que la metapsicología sea difícil de contrastar no invalida la eficacia de las terapias derivadas.|V",
      "El apoyo a los conceptos generales del psicoanálisis procede sobre todo de los casos clínicos freudianos.|F|Procede de otras tradiciones, sobre todo de la psicología cognitiva, que los ha reformulado.",
      "Freud rompió la equivalencia entre mente y conciencia.|V"
    ],
    q: [
      "Además de la sugestión, ¿qué hace difícil contrastar la metapsicología?|Hipótesis en las que casi todo encaja|La falta de casos clínicos publicados|El rechazo de Freud a toda estadística|Muchas de sus hipótesis se formulan de manera que casi cualquier resultado encaja en ellas.",
      "¿En qué plano del psicoanálisis es más favorable la evidencia?|En las terapias psicodinámicas|En los conceptos amplios de Freud|En la teoría de las pulsiones|Shedler (2010) halló evidencia de eficacia. Los conceptos generales tienen apoyo indirecto, y la metapsicología es poco contrastable.",
      "¿Por qué Grünbaum (1984) consideraba que los datos clínicos no confirman la metapsicología?|Pueden estar contaminados por la sugestión|Proceden de grupos de control mal elegidos|Se obtienen solo con pacientes ingresados|El paciente puede acabar «recordando» o aceptando lo que el analista espera.",
      "¿Qué ocurrió con Bertha Pappenheim tras el tratamiento con Breuer?|Ingresó en un sanatorio|Se curó por completo|Se formó como analista|La historiografía crítica cuestiona la curación descrita en 1895. El caso vale por su papel histórico, no como prueba de eficacia."
    ],
    inc: [
      "Sobre la evidencia del psicoanálisis|Shedler revisó los casos clínicos de Freud|Hay apoyo indirecto a la existencia de defensas|La terapia actual no es el análisis clásico de años|Shedler (2010) revisó ocho metaanálisis que sumaban 160 estudios, no los casos clínicos freudianos."
    ],
    seq: [],
    cls: [
      "Plano del psicoanálisis|Metapsicología: pulsiones; energía libidinal; ello, yo y superyó; poco contrastable|Conceptos generales: procesos no conscientes; defensas; apoyo indirecto|Terapias psicodinámicas: Shedler (2010); Abbass et al. (2006); evidencia de eficacia"
    ] }
] },
{ n: 7, t: "La psicología de la Gestalt", cap: 2, pir: "alta", mods: [
  { t: "Wertheimer y el fenómeno phi",
    tip: "La Gestalt nació como crítica del elementalismo, que descomponía la experiencia en sensaciones. Tuvo raíces en las cualidades de forma de Ehrenfels (1890), en Brentano y Stumpf y en la física de campos. El artículo fundacional de Wertheimer (1912), con Köhler y Koffka como observadores, estudió el fenómeno phi: con un intervalo crítico entre dos luces se percibe movimiento puro. El todo es distinto de la suma de sus partes.",
    v: [
      "Gestalt=Forma o configuración, totalidad con propiedades que no tienen sus partes",
      "Elementalismo=Descomponer la experiencia en sensaciones combinadas por asociación",
      "Cualidad de forma=Propiedad del conjunto que se conserva aunque cambien sus elementos",
      "Ehrenfels (1890)=Una melodía transportada sigue siendo la misma aunque cambien sus notas",
      "Fenómeno phi=Movimiento puro percibido entre dos luces con un intervalo crítico",
      "Movimiento beta=Se ve un objeto que se desplaza de un lugar a otro, como en el cine",
      "Método fenomenológico=Describir la experiencia de forma ingenua, tal como aparece",
      "Síntesis creadora=Para Wundt, el todo tiene propiedades nuevas respecto a sus elementos"
    ],
    g: [
      "El artículo fundacional de Wertheimer sobre la percepción del movimiento es de ___.|1912|1913|1890",
      "Si el intervalo entre las dos luces es muy ___, se ven las dos a la vez.|breve|largo|variable",
      "Los observadores principales de Wertheimer fueron Köhler y ___.|Koffka|Lewin|Stumpf",
      "La Gestalt tomó de la física de la época la idea de ___ de fuerzas en interacción.|campos|partículas|elementos",
      "En el análisis gestáltico, la dirección va del ___ a las partes.|todo|estímulo|elemento"
    ],
    tf: [
      "En el fenómeno phi, en sentido estricto, se ve un objeto que se desplaza de un lugar a otro.|F|Eso es el movimiento beta. En el phi se percibe un movimiento puro, sin objeto que se desplace.",
      "El artículo de Wertheimer se publicó un año antes del manifiesto conductista de Watson.|V",
      "La Gestalt nació como una prolongación del programa asociacionista.|F|Nació como crítica radical del elementalismo asociacionista: la percepción organiza los estímulos, no los suma.",
      "Köhler y Koffka se formaron en la tradición de Brentano y Stumpf.|V"
    ],
    q: [
      "En un experimento, dos luces se encienden una tras otra con un intervalo muy largo. ¿Qué percibe el observador?|Dos destellos sucesivos|Un movimiento puro|Dos luces simultáneas|Con intervalos largos se ven dos destellos independientes. El movimiento solo aparece con el intervalo intermedio crítico.",
      "¿Por qué el fenómeno phi era demoledor para el elementalismo?|El movimiento no está en ninguna sensación|Las luces se percibían de forma simultánea|El movimiento aparecía con cualquier intervalo|Cada luz, por separado, está quieta: el movimiento surge de la relación entre los estímulos.",
      "Una melodía se reconoce aunque se toque en otra tonalidad y cambien todas sus notas. ¿Qué concepto ilustra?|La cualidad de forma|El movimiento aparente|La buena continuación|Ehrenfels (1890): la melodía no está en ninguna nota concreta, sino en la relación entre ellas.",
      "¿Qué método defendía la Gestalt frente a la introspección analítica?|La descripción fenomenológica|La medida de tiempos de reacción|El registro de reflejos motores|Describir la experiencia tal como se da: quien ve una cara amiga no suma manchas de color, ve directamente una cara."
    ],
    inc: [
      "Sobre los orígenes de la Gestalt|Adoptó la introspección analítica entrenada|Defendió que la percepción organiza los estímulos|Se inspiró en las cualidades de forma|Su método era fenomenológico: describir la experiencia tal como se da, sin descomponerla en sensaciones."
    ],
    seq: [
      "Fenómeno phi según el intervalo entre las luces|Intervalo muy breve: dos luces a la vez>Intervalo crítico: movimiento aparente>Intervalo muy largo: dos destellos sucesivos"
    ],
    cls: [
      "Enfoque|Elementalismo: sensaciones elementales; suma y asociación; de las partes al todo|Gestalt: configuraciones; organización del campo; del todo a las partes"
    ] },
  { t: "Las leyes de organización perceptiva",
    tip: "Las leyes de organización perceptiva determinan qué elementos se agrupan y cómo se separa lo que destaca: proximidad, semejanza, cierre, buena continuación, destino común y figura-fondo. Todas se resumen en la ley de la pregnancia o de la buena forma. Los gestaltistas las creían independientes del aprendizaje, tesis discutida, y se les critica que describen más de lo que explican. Wertheimer distinguió además el pensamiento reproductivo del productivo.",
    v: [
      "Proximidad=Los elementos cercanos tienden a agruparse",
      "Semejanza=Se agrupan los elementos parecidos en color, forma o tamaño",
      "Cierre=Tendencia a completar las figuras incompletas",
      "Buena continuación=Se perciben las trayectorias suaves antes que los cambios bruscos",
      "Destino común=Se agrupan los elementos que se mueven juntos en la misma dirección",
      "Ley de la pregnancia=Tendencia a la organización más simple, regular y estable posible",
      "Pensamiento productivo=Descubre una nueva organización del problema al captar su estructura",
      "Pensamiento reproductivo=Aplica de forma mecánica lo ya aprendido"
    ],
    g: [
      "Una bandada de pájaros se ve como una unidad por la ley de ___.|destino común|cierre|buena continuación",
      "En un formulario, cada etiqueta se coloca junto a su casilla aplicando la ley de ___.|proximidad|semejanza|cierre",
      "En la figura del jarrón y los dos perfiles se alternan la figura y el ___.|fondo|contorno|cierre",
      "Un círculo con un hueco se sigue viendo como círculo por la ley de ___.|cierre|semejanza|proximidad",
      "Wagemans et al. (___) revisaron un siglo de investigación sobre la organización perceptiva.|2012|2002|1935"
    ],
    tf: [
      "Dos líneas que se cruzan se ven como dos trazos continuos y no como cuatro segmentos, por la buena continuación.|V",
      "Que las leyes de organización no dependen del aprendizaje es hoy un hecho consensuado.|F|Lo defendieron los gestaltistas, pero sigue en debate si son innatas o dependen también del aprendizaje.",
      "Una crítica habitual es que las leyes explican poco qué ocurre cuando entran en conflicto entre sí.|V",
      "La ley de la pregnancia es una ley más, al mismo nivel que la proximidad o el cierre.|F|Es el principio general que las resume todas: tender a la organización más simple, regular y estable."
    ],
    q: [
      "En una cuadrícula de círculos y cruces que se alternan por filas, el observador ve filas y no columnas. ¿Qué ley actúa?|Semejanza|Proximidad|Destino común|Los elementos parecidos en forma se agrupan. Según cómo se alternen, se ven filas o columnas.",
      "Un estudiante deduce el área del paralelogramo recolocando sus partes como un rectángulo. ¿Qué pensamiento muestra, según Wertheimer?|Productivo|Reproductivo|Asociativo|Capta la estructura del problema. Aplicar la fórmula memorizada sin comprenderla sería pensamiento reproductivo.",
      "Los iconos del móvil se mueven a la vez cuando van a reorganizarse. ¿Qué ley se aprovecha?|Destino común|Semejanza|Buena continuación|Los elementos que se mueven juntos, en la misma dirección y velocidad, se agrupan.",
      "¿Qué crítica se hace habitualmente a las leyes de la Gestalt?|Describen mejor de lo que explican|Solo se cumplen con estímulos auditivos|Se basan en la introspección entrenada|Describen bien los fenómenos, pero explican poco por qué ocurren o qué pasa cuando entran en conflicto."
    ],
    inc: [
      "Sobre las leyes de organización|El fondo destaca con contornos definidos|Los elementos cercanos tienden a agruparse|Se completan las figuras incompletas|Es la figura la que destaca con contornos definidos. El fondo es difuso y parece continuar por detrás."
    ],
    seq: [],
    cls: [
      "Ley gestáltica|Proximidad: puntos con espacios desiguales vistos como parejas; etiqueta junto a su casilla|Semejanza: líneas de metro por colores; filas de círculos y cruces|Destino común: bandada de pájaros; iconos que se mueven a la vez"
    ] },
  { t: "Köhler en Tenerife: el insight",
    tip: "Entre 1913 y 1920 Köhler dirigió en Tenerife una estación con antropoides y publicó Intelligenzprüfungen an Anthropoiden (1917). Con las cañas de Sultán y las cajas apiladas describió el insight, una reestructuración súbita del campo perceptivo. La solución se repite sin errores, se transfiere y exige que todos los elementos estén a la vista, una crítica a las cajas problema de Thorndike. La hipótesis del espionaje (Ley, 1990) es especulativa.",
    v: [
      "Insight=Comprensión súbita por reestructuración del campo perceptivo (Einsicht)",
      "Sultán=Chimpancé que encajó una caña en otra para alcanzar la fruta",
      "Problema de las cajas=Colocar o apilar cajas bajo un plátano colgado del techo",
      "Reestructuración=Ver de pronto los elementos de la situación en una relación nueva",
      "Ensayo y error=Aprendizaje gradual de Thorndike cuando el mecanismo está oculto",
      "Intelligenzprüfungen an Anthropoiden=Obra de Köhler de 1917, traducida al inglés en 1925",
      "Ley (1990)=Autor de la hipótesis especulativa de que Köhler espiaba en Tenerife",
      "Transferencia del insight=Aplicación de la solución hallada a problemas parecidos"
    ],
    g: [
      "Köhler estudió a los chimpancés de Tenerife entre 1913 y ___.|1920|1917|1925",
      "Para Köhler, la caña dejaba de ser un palo y pasaba a ser una ___ del brazo.|prolongación|sustitución|imitación",
      "En el insight, el tiempo de solución cae de forma ___ cuando aparece la solución.|brusca|gradual|irregular",
      "En las cajas de Thorndike, el gato no podía ___ cómo funcionaba el mecanismo de apertura.|ver|tocar|oír",
      "La solución por insight aparece a menudo tras una ___ sin actividad aparente.|pausa|racha|prueba"
    ],
    tf: [
      "La Primera Guerra Mundial retuvo a Köhler en Tenerife más tiempo del previsto.|V",
      "Está demostrado que Köhler espiaba el paso de barcos para Alemania desde Tenerife.|F|La hipótesis de Ley (1990) es especulativa y se apoya en escasa evidencia. No debe presentarse como un hecho.",
      "Köhler interpretó las soluciones de los chimpancés como un fortalecimiento gradual de conexiones E-R.|F|Las interpretó como insight, una reestructuración súbita del campo. El fortalecimiento gradual es el ensayo y error.",
      "Hoy el insight se estudia como un fenómeno real, sin oponerlo de forma tan tajante al aprendizaje gradual.|V"
    ],
    q: [
      "Un chimpancé intenta en vano alcanzar un plátano, se queda quieto un rato y de pronto apila dos cajas y lo coge. Al día siguiente lo repite sin errores. ¿Qué describe?|Insight|Ensayo y error|Aprendizaje latente|Solución súbita tras una pausa, que luego se repite sin errores: son rasgos característicos del insight.",
      "¿Qué criticó Köhler de las cajas problema de Thorndike?|Ocultaban el mecanismo de apertura|Premiaban cada pequeña aproximación|Empleaban gatos y no antropoides|Sin ver el mecanismo, al gato solo le quedaba el ensayo y error: el diseño hacía imposible el insight.",
      "¿Qué curva de aprendizaje es típica del ensayo y error?|Descenso gradual e irregular|Caída brusca tras una pausa|Ascenso súbito y estable|En el ensayo y error, el tiempo de solución baja poco a poco. En el insight cae bruscamente al aparecer la solución.",
      "¿Qué aspecto de la interpretación de Köhler se ha debatido?|El peso de la experiencia previa con objetos|La existencia de la estación de Tenerife|La fecha de publicación de su obra|Se discute cuánto dependían las soluciones de la experiencia previa de los animales con objetos parecidos."
    ],
    inc: [
      "Sobre el insight según Köhler|Se transfiere poco a problemas parecidos|La solución aparece de forma súbita|Una vez hallada, se repite sin errores|El insight se transfiere ampliamente a problemas similares. La transferencia limitada es propia del ensayo y error."
    ],
    seq: [
      "Köhler y Tenerife|Comienzo de la estación de Tenerife (1913)>Intelligenzprüfungen an Anthropoiden (1917)>Fin de la estancia (1920)>Traducción al inglés (1925)"
    ],
    cls: [
      "Forma de aprendizaje|Ensayo y error: mecanismo oculto; descenso gradual; conexiones E-R; transferencia limitada|Insight: elementos visibles; caída brusca; reestructuración del campo; transferencia amplia"
    ] },
  { t: "Koffka, Lewin y la diáspora",
    tip: "Koffka difundió la Gestalt en inglés (Psychological Bulletin, 1922) y la sistematizó en Principles of Gestalt Psychology (1935), donde distinguió ambiente geográfico y conductual. Lewin llevó la idea de campo a la motivación y a la vida social: la conducta es función de la persona y del ambiente. De su grupo salieron el efecto Zeigarnik (1927) y los climas de liderazgo (1939). El nazismo forzó la emigración, pero las ideas se integraron en otros campos.",
    v: [
      "Ambiente geográfico=Mundo físico tal como es, según Koffka",
      "Ambiente conductual=Mundo tal como lo percibe cada persona, el que guía lo que hace",
      "Teoría de campo=La conducta es función de la persona y del ambiente en interacción",
      "Espacio vital=Campo de Lewin en el que objetos y metas tienen valencias",
      "Valencia=Cualidad de atracción o rechazo de un objeto o una meta",
      "Efecto Zeigarnik=Mejor recuerdo de las tareas interrumpidas que de las terminadas",
      "Climas de liderazgo=Grupos de niños con líder autoritario, democrático o laissez-faire (1939)",
      "Metzger=Uno de los pocos que mantuvieron viva parte de la tradición en Alemania"
    ],
    g: [
      "Koffka presentó la Gestalt al público de habla inglesa en Psychological Bulletin en ___.|1922|1935|1912",
      "El efecto Zeigarnik se explica porque se mantiene la ___ de la meta no resuelta.|tensión|valencia|imagen",
      "Lewin, Lippitt y White estudiaron grupos con líderes autoritarios, democráticos o ___.|permisivos|carismáticos|rotatorios",
      "Köhler, que no era ___, se opuso públicamente a la expulsión de colegas judíos.|judío|profesor|alemán",
      "En Estados Unidos, dominado por el ___, la Gestalt no llegó a cuajar como escuela.|conductismo|funcionalismo|psicoanálisis"
    ],
    tf: [
      "La fórmula de la conducta como función de la persona y del ambiente se debe a Köhler.|F|Es la teoría de campo de Lewin. Atribuirla a Köhler es una trampa típica, igual que con el efecto Zeigarnik.",
      "Koffka se había instalado en Estados Unidos ya en los años veinte.|V",
      "La Gestalt desapareció sin dejar rastro tras la emigración de sus fundadores.|F|Dejó de ser una escuela organizada, pero sus ideas pasaron a la percepción, la solución de problemas y la psicología social.",
      "Lewin es considerado uno de los fundadores de la psicología social experimental y de la dinámica de grupos.|V"
    ],
    q: [
      "Marta deja un correo a medio escribir y sigue pensando en él durante la cena, aunque ya ha olvidado los que envió. ¿Qué efecto ilustra?|Efecto Zeigarnik|Efecto Clever Hans|Efecto de recencia|Las tareas interrumpidas se recuerdan mejor que las terminadas porque se mantiene la tensión de la meta no resuelta.",
      "¿Qué autor distinguió el ambiente geográfico del ambiente conductual?|Koffka|Lewin|Wertheimer|Koffka contrapuso el mundo físico al mundo tal como lo percibe cada persona, que es el que guía su conducta.",
      "¿A qué campo pasó sobre todo la teoría de campo de Lewin?|A la psicología social|A la percepción visual|A la solución de problemas|La organización perceptiva pasó a la percepción, el insight a la solución de problemas y la teoría de campo a la psicología social.",
      "¿Qué truncó la Gestalt como escuela organizada en Alemania?|La llegada del nazismo en 1933|La refutación de sus leyes perceptivas|El auge del psicoanálisis en Berlín|Un factor externo: un programa en pleno desarrollo fue interrumpido por razones políticas."
    ],
    inc: [
      "Sobre la diáspora gestáltica|Metzger emigró a Estados Unidos con Köhler|Wertheimer y Lewin emigraron a Estados Unidos|Köhler se opuso a la expulsión de colegas judíos|Metzger fue uno de los pocos que mantuvieron viva parte de la tradición en Alemania."
    ],
    seq: [
      "De la difusión a la diáspora|Artículo de Koffka en Psychological Bulletin (1922)>Efecto Zeigarnik (1927)>Llegada del nazismo al poder (1933)>Principles of Gestalt Psychology (1935)>Climas de liderazgo (1939)"
    ],
    cls: [
      "Autor gestaltista|Wertheimer: fenómeno phi; pensamiento productivo|Koffka: ambiente geográfico y conductual; Principles of Gestalt Psychology|Lewin: teoría de campo; espacio vital; climas de liderazgo"
    ] }
] },
{ n: 8, t: "Estructuralismo y funcionalismo americanos", cap: 3, pir: "baja", mods: [
  { t: "Titchener y el estructuralismo",
    tip: "Titchener, británico doctorado con Wundt, dirigió desde 1892 el laboratorio de Cornell. Quería descomponer la conciencia en sensaciones, imágenes y afectos, estudiados por introspección de observadores entrenados que evitaran el error del estímulo. En 1898 acuñó la oposición entre psicología estructural y funcional. Limitó el campo a la mente humana, adulta y normal. Su escuela apenas le sobrevivió, aunque perduró su defensa del laboratorio.",
    v: [
      "Cornell=Universidad en la que Titchener dirigió su laboratorio desde 1892",
      "An Outline of Psychology=Manual de referencia de Titchener publicado en 1896",
      "Sensaciones=Elementos propios de la percepción, como un color o un sonido",
      "Imágenes=Elementos propios de las ideas y del recuerdo",
      "Afectos=Elementos propios de las emociones, como el agrado o el desagrado",
      "Error del estímulo=Describir el objeto observado en lugar de la experiencia que produce",
      "Introspección entrenada=Autoobservación de personas formadas para informar solo de lo inmediato",
      "Experimentalists=Grupo creado en 1904 que no admitió mujeres hasta la muerte de Titchener"
    ],
    g: [
      "Titchener llegó a la Universidad de Cornell en ___.|1892|1898|1896",
      "Para Titchener, la pregunta de partida era qué hay en la mente y no para qué ___.|sirve|existe|cambia",
      "Cada elemento se describía por atributos como la cualidad, la intensidad, la duración o la ___.|claridad|función|utilidad",
      "Titchener limitó la psicología a la mente humana, adulta y ___.|normal|consciente|educada",
      "En la Escuela de Würzburgo se defendían pensamientos sin ___, que Titchener negaba.|imágenes|afectos|palabras"
    ],
    tf: [
      "Titchener consideraba las aplicaciones de la psicología una técnica y no una ciencia.|V",
      "El error del estímulo consiste en describir la experiencia en lugar del objeto observado.|F|Es al revés: consiste en describir el objeto observado en lugar de la experiencia que produce.",
      "El estructuralismo tuvo muchos seguidores fuera de Cornell y dominó durante décadas la psicología estadounidense.|F|Tenía pocos seguidores fuera de Cornell y apenas sobrevivió a su fundador.",
      "De la escuela de Titchener perduró sobre todo la defensa del laboratorio y del control experimental.|V"
    ],
    q: [
      "Ante una manzana, un observador de Titchener dice «veo una manzana». ¿Qué le corregiría su instructor?|Que comete el error del estímulo|Que confunde imágenes con afectos|Que describe una función adaptativa|Describe el objeto y no la experiencia: debía hablar de una mancha rojiza, redondeada, de cierta claridad.",
      "¿Qué tres clases de elementos de la conciencia distinguía Titchener?|Sensaciones, imágenes y afectos|Sensaciones, actos y funciones|Imágenes, reflejos y motivos|Las sensaciones son propias de la percepción, las imágenes de las ideas y los afectos de las emociones.",
      "¿Por qué el estructuralismo apenas sobrevivió a Titchener?|Sus informes introspectivos no concordaban|Wundt rechazó en público su programa|Los Experimentalists lo dejaron en 1904|La introspección producía desacuerdos difíciles de resolver entre laboratorios, y el país pedía una psicología útil.",
      "¿Qué sostiene la historiografía actual sobre Titchener y Wundt?|Titchener ofreció una versión más estrecha|Titchener amplió la Völkerpsychologie|Ambos programas eran prácticamente iguales|Blumenthal (1975) y Danziger (1979) subrayan que su versión era más estrecha que la wundtiana, aunque compartían el laboratorio."
    ],
    inc: [
      "Sobre el estructuralismo de Titchener|Incluía la psicología animal e infantil|Estudiaba los contenidos de la conciencia|Usaba observadores entrenados|Dejaba fuera la psicología animal, la infantil, la patológica y las aplicaciones."
    ],
    seq: [
      "Trayectoria de Titchener|Doctorado con Wundt en Leipzig>Llegada a Cornell (1892)>An Outline of Psychology (1896)>The postulates of a structural psychology (1898)>Creación de los Experimentalists (1904)>Muerte de Titchener (1927)"
    ],
    cls: [
      "Elemento de la conciencia según Titchener|Sensaciones: un color; un sonido; percepción|Imágenes: ideas; recuerdo|Afectos: agrado; desagrado; emociones"
    ] },
  { t: "La Escuela de Chicago: Dewey, Angell y Carr",
    tip: "El funcionalismo fue más una actitud compartida que una escuela cerrada, con raíces en Darwin y en James: funciones adaptativas, sujetos y métodos plurales y aplicaciones. En Chicago, Dewey (1896) criticó dividir el arco reflejo en piezas y lo vio como un circuito coordinado. Angell (1907) propuso estudiar operaciones mentales que median con el ambiente, en una unidad psicofísica. Carr (1925) sistematizó la escuela con el acto adaptativo. Watson se doctoró con Angell.",
    v: [
      "Funcionalismo=Orientación que estudia los procesos mentales por su valor adaptativo",
      "Arco reflejo (Dewey)=Circuito coordinado de estímulo y respuesta, no una suma de piezas",
      "The reflex arc concept=Artículo de Dewey de 1896 en Psychological Review",
      "Angell (1907)=Expuso el programa funcional en su discurso presidencial ante la APA",
      "Unidad psicofísica=Para Angell, mente y cuerpo actúan juntos y no deben estudiarse por separado",
      "Acto adaptativo=Para Carr, motivo, situación estimular y respuesta que satisface el motivo",
      "Psychology (1925)=Manual con el que Carr sistematizó la Escuela de Chicago",
      "Operaciones mentales=Objeto de la psicología funcional según Angell, frente a los contenidos"
    ],
    g: [
      "El punto de partida de la Escuela de Chicago suele situarse en un artículo de Dewey de ___.|1896|1898|1907",
      "Angell pronunció su discurso presidencial ante la APA a finales de ___.|1906|1907|1896",
      "En el laboratorio de Angell se estudió cómo aprendían las ratas a recorrer ___.|laberintos|cajas problema|pistas rectas",
      "Para Carr, cuando una respuesta resuelve la necesidad, tiende a ___ en situaciones parecidas.|repetirse|inhibirse|extinguirse",
      "Para Angell, las operaciones mentales ___ entre las necesidades del organismo y su ambiente.|median|oscilan|compiten"
    ],
    tf: [
      "Dewey consideraba estímulo, proceso central y respuesta como tres piezas separadas del arco reflejo.|F|Criticaba esa división: para él eran fases de un circuito coordinado que solo tiene sentido por su fin.",
      "El funcionalismo amplió el objeto de estudio a animales, niños y personas con trastornos.|V",
      "Como era una escuela cerrada, el funcionalismo desapareció de forma abrupta al llegar el conductismo.|F|Nunca se cerró en un sistema: sus ideas pasaron sin etiqueta al conductismo y a la psicología aplicada.",
      "El esquema del acto adaptativo de Carr anticipa conceptos que desarrollaría el neoconductismo.|V"
    ],
    q: [
      "Una estudiante llega tarde por un atasco, prueba la bicicleta y llega a tiempo. La semana siguiente vuelve a usarla. ¿Cómo lo describiría Carr?|Como un acto adaptativo|Como un circuito reflejo|Como un error del estímulo|Hay un motivo, una situación estimular y una respuesta que satisface el motivo. Por eso tiende a repetirse.",
      "Según Dewey, el ruido del despertador…|cobra sentido según lo que se está haciendo|es un estímulo aislado que provoca un gesto|se descompone en sensaciones elementales|Su significado depende de la actividad en curso, y la respuesta cambia a su vez lo que se oye a continuación.",
      "¿Qué influencia fue central para el funcionalismo y escasa para el estructuralismo?|La de Darwin|La de Wundt|La de Boring|El funcionalismo, con raíces en Darwin y en James, entendía la conciencia como un recurso para la adaptación.",
      "¿Qué tres componentes tiene el acto adaptativo de Carr?|Motivo, situación estimular y respuesta|Estímulo, proceso central y respuesta|Sensaciones, imágenes y afectos|La segunda opción son las piezas del arco reflejo que criticó Dewey, y la tercera, los elementos de Titchener."
    ],
    inc: [
      "Sobre la Escuela de Chicago|Angell estudiaba contenidos, no operaciones|Dewey publicó su artículo en Psychological Review|Carr sistematizó la escuela en 1925|Angell propuso lo contrario: estudiar operaciones mentales, cómo y para qué funciona la mente, no de qué está hecha."
    ],
    seq: [
      "Del funcionalismo de Chicago al conductismo|Dewey y el arco reflejo (1896)>The province of functional psychology de Angell (1907)>Manifiesto de Watson (1913)>Psychology de Carr (1925)"
    ],
    cls: [
      "Escuela|Estructuralismo: contenidos de la conciencia; adulto humano normal; introspección entrenada; aplicaciones rechazadas|Funcionalismo: actos adaptativos; animales y niños; métodos plurales; aplicaciones buscadas"
    ] },
  { t: "Columbia: Cattell, Woodworth y Thorndike",
    tip: "Columbia puso el acento en la medida, las diferencias individuales y la conducta. Cattell, influido por Galton, acuñó «mental tests» (1890), aunque sus medidas simples apenas se relacionaban con el rendimiento académico. Woodworth (Dynamic Psychology, 1918) propuso el esquema E-O-R y difundió el concepto de impulso. Thorndike, formado con Cattell, pertenece al funcionalismo de Columbia y fue un puente hacia el conductismo, un paso que muchos ven como transición gradual.",
    v: [
      "Mental tests=Expresión acuñada por Cattell en un artículo de 1890 en Mind",
      "Cattell=Doctor con Wundt interesado en lo que diferencia a las personas",
      "Esquema E-O-R=El organismo media entre estímulo y respuesta (Woodworth, 1918)",
      "Dynamic Psychology=Obra de Woodworth de 1918 sobre las causas y los motivos de la conducta",
      "Impulso=Fuerza que activa la conducta (drive), difundida por Woodworth",
      "Animal Intelligence (1898)=Tesis de Thorndike, origen del estudio de laboratorio del aprendizaje animal",
      "Psicología de la educación=Campo al que Thorndike dedicó la mayor parte de su carrera",
      "Transición gradual=Visión del paso del funcionalismo al conductismo como algo no brusco"
    ],
    g: [
      "Las pruebas de Cattell medían el tiempo de reacción, la fuerza de presión de la mano o la ___ sensorial.|discriminación|memoria|atención",
      "Cattell estuvo influido por ___ en su interés por las diferencias individuales.|Galton|Binet|Wundt",
      "El camino de la medición de la inteligencia lo abrió después la escala de ___.|Binet|Cattell|Galton",
      "El mismo plato de comida provoca respuestas distintas según el estado del ___.|organismo|estímulo|ambiente",
      "Hull convertiría el concepto de ___ difundido por Woodworth en pieza central de su sistema.|impulso|hábito|refuerzo"
    ],
    tf: [
      "Las pruebas de Cattell predecían bien el rendimiento académico de los estudiantes.|F|Pronto se comprobó que apenas se relacionaban con el rendimiento académico.",
      "Thorndike debe situarse solo en el conductismo, porque inició el estudio de laboratorio del aprendizaje animal.|F|Por formación e intereses pertenece al funcionalismo de Columbia: fue más bien un puente entre ambos.",
      "Woodworth fue discípulo de Cattell en Columbia.|V",
      "Cuando Watson publicó su manifiesto en 1913, llevaba a su extremo una tendencia iniciada por el funcionalismo.|V"
    ],
    q: [
      "Dos personas ven el mismo plato: una no ha comido desde ayer y la otra sale de un banquete. Sus respuestas son muy distintas. ¿Qué esquema lo recoge?|El E-O-R de Woodworth|El arco reflejo de Dewey|El acto adaptativo de Carr|Entre el estímulo y la respuesta está el organismo, con sus necesidades, su historia y su estado en ese momento.",
      "¿Qué interesaba a Cattell, a diferencia de su maestro Wundt?|Aquello en lo que las personas difieren|Lo común a todas las mentes adultas|Los contenidos elementales de la conciencia|Influido por Galton, convirtió las diferencias individuales en un campo legítimo de estudio.",
      "¿A qué escuela pertenece Thorndike por formación e intereses?|Al funcionalismo de Columbia|Al estructuralismo de Cornell|Al conductismo de Watson|Situarlo solo en el conductismo es una trampa típica: se formó con Cattell y se dedicó sobre todo a la educación.",
      "¿Qué rasgo común une a Chicago y Columbia?|Una psicología práctica y aplicada|El rechazo del estudio de los animales|La descripción de contenidos conscientes|Ambas, abiertas a los animales y a las aplicaciones, se interesaron poco por describir los contenidos de la conciencia."
    ],
    inc: [
      "Sobre la Universidad de Columbia|Cattell acuñó el esquema E-O-R en 1890|Woodworth publicó Dynamic Psychology en 1918|Thorndike se formó con Cattell|El esquema E-O-R es de Woodworth (1918). Cattell acuñó en 1890 la expresión «mental tests»."
    ],
    seq: [
      "Hitos de Columbia|Mental tests de Cattell (1890)>Animal Intelligence de Thorndike (1898)>Dynamic Psychology de Woodworth (1918)"
    ],
    cls: [
      "Autor de Columbia|Cattell: mental tests; diferencias individuales; influencia de Galton|Woodworth: esquema E-O-R; Dynamic Psychology; impulso|Thorndike: Animal Intelligence (1898); ley del efecto; psicología de la educación"
    ] },
  { t: "Las pioneras: Calkins, Washburn y Hollingworth",
    tip: "La nueva historia (Furumoto, 1989) recuperó a las psicólogas que chocaron con barreras formales. Calkins creó el método de pares asociados, cumplió en 1895 los requisitos del doctorado de Harvard sin que se lo concedieran y fue la primera presidenta de la APA (1905). Washburn fue la primera doctora en psicología (Cornell, 1894) y escribió The Animal Mind (1908). Ladd-Franklin protestó por su exclusión de los Experimentalists. Hollingworth refutó con datos prejuicios sobre las mujeres.",
    v: [
      "Furumoto (1989)=Referencia de la nueva historia que recuperó a las mujeres de la disciplina",
      "Pares asociados=Aprender parejas y recordar el segundo miembro ante el primero",
      "Mary Whiton Calkins=Harvard le negó el doctorado en 1895 y presidió la APA en 1905",
      "Margaret Floy Washburn=Primera doctora en psicología, en Cornell (1894)",
      "The Animal Mind (1908)=Síntesis de Washburn sobre percepción, aprendizaje y conciencia animal",
      "Christine Ladd-Franklin=Autora de una teoría evolutiva del color, excluida de los Experimentalists",
      "Functional Periodicity (1914)=Obra de Hollingworth: el ciclo menstrual no reducía el rendimiento",
      "Hipótesis de la variabilidad=Los hombres variarían más y abundarían entre genios y en la discapacidad"
    ],
    g: [
      "Calkins estudió en Harvard como oyente con el apoyo de ___.|James|Titchener|Cattell",
      "Calkins enseñó en el ___ College, donde organizó un laboratorio.|Wellesley|Vassar|Barnard",
      "Washburn fue presidenta de la APA en ___.|1921|1905|1914",
      "Hollingworth explicó las diferencias observadas por las ___ sociales y no por la biología.|oportunidades|jerarquías|leyes",
      "El grupo de los Experimentalists solo admitió mujeres tras la muerte de Titchener en ___.|1927|1921|1904"
    ],
    tf: [
      "Calkins estudió en Harvard como alumna oficial con matrícula plena.|F|Estudió como oyente, con el apoyo de William James, porque Harvard no admitía mujeres.",
      "Washburn hizo de la psicología animal su campo principal, pese a que su director la rechazaba.|V",
      "Ladd-Franklin consiguió que los Experimentalists la admitieran en vida de Titchener.|F|Protestó durante años por su exclusión. El grupo solo admitió mujeres tras la muerte de Titchener en 1927.",
      "El método de pares asociados de Calkins sigue siendo habitual en la investigación sobre memoria.|V"
    ],
    q: [
      "Un experimento presenta parejas de color y número y, en la prueba, muestra el color para que se diga el número. ¿Qué método emplea y de quién es?|Pares asociados, de Calkins|Aprendizaje serial, de Ebbinghaus|Pares asociados, de Washburn|Calkins desarrolló este método de memoria. Washburn, la primera doctora, destacó por The Animal Mind.",
      "¿Quién dirigió la tesis de Washburn en Cornell?|Titchener|James|Cattell|Paradójicamente, Titchener rechazaba la psicología animal, que Washburn convirtió en su campo principal.",
      "¿Qué sostenía la «hipótesis de la variabilidad» que criticó Hollingworth?|Que los hombres variaban más que las mujeres|Que las mujeres variaban más que los hombres|Que el ciclo menstrual variaba el rendimiento|Por eso, se decía, abundaban entre los genios y entre las personas con discapacidad.",
      "¿Qué rasgo comparten las trayectorias de estas pioneras?|Aportaron desde los márgenes institucionales|Obtuvieron todas el doctorado en Harvard|Trabajaron en el laboratorio de Titchener|Hicieron aportaciones que siguen vigentes desde colegios femeninos o sin el título que les correspondía."
    ],
    inc: [
      "Sobre las pioneras|Washburn escribió Functional Periodicity|Calkins presidió la APA en 1905|Ladd-Franklin fue excluida de los Experimentalists|Functional Periodicity (1914) es de Hollingworth. Washburn escribió The Animal Mind (1908)."
    ],
    seq: [
      "Cronología de las pioneras|Doctorado de Washburn en Cornell (1894)>Harvard niega el doctorado a Calkins (1895)>Calkins preside la APA (1905)>The Animal Mind (1908)>Functional Periodicity (1914)>Washburn preside la APA (1921)"
    ],
    cls: [
      "Pionera|Calkins: pares asociados; doctorado negado por Harvard; Wellesley College|Washburn: primera doctora en psicología; The Animal Mind; Cornell|Hollingworth: Functional Periodicity; hipótesis de la variabilidad; Columbia"
    ] }
] }
);

// SAIMAP Psicología · Historia · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "El conductismo clásico: Thorndike y Watson", cap: 3, pir: "alta", mods: [
  { t: "Thorndike: cajas problema y ley del efecto",
    tip: "Thorndike llevó al laboratorio el aprendizaje animal en «Animal Intelligence» (1898), la primera teoría del aprendizaje basada en experimentos sistemáticos. En las cajas problema, sobre todo con gatos hambrientos, la latencia de escape bajaba de forma gradual e irregular: ensayo y error, no comprensión súbita. En 1911 formuló en su versión clásica la ley del efecto y la ley del ejercicio, que revisó a comienzos de los años treinta. La ley del efecto anticipa el refuerzo, pero no equivale al refuerzo de Skinner.",
    v: [
      "Caja problema=Jaula de la que el animal sale accionando un pestillo, una cuerda o una palanca",
      "Latencia de escape=Tiempo que tardaba el animal en salir de la jaula en cada ensayo",
      "Ensayo y error=Fortalecimiento gradual de la respuesta que tuvo éxito, sin comprensión súbita",
      "Ley del efecto=Las respuestas seguidas de satisfacción se conectan con más fuerza a la situación",
      "Ley del ejercicio=Las conexiones se fortalecen con el uso y se debilitan con el desuso",
      "Conexionismo de Thorndike=Aprender consiste en formar conexiones entre estímulos y respuestas",
      "Animal Intelligence=Monografía de 1898, primera teoría del aprendizaje basada en experimentos",
      "Revisión de los años treinta=La práctica sin consecuencias perdió peso y quedó sobre todo la satisfacción"
    ],
    g: [
      "Thorndike trabajó sobre todo con ___ hambrientos, aunque también con perros y pollos.|gatos|ratas|palomas",
      "La versión clásica de la ley del efecto y de la ley del ejercicio se formuló en ___.|1911|1898|1913",
      "Si el gato hubiera comprendido la solución, la curva de latencia habría caído ___.|de golpe|poco a poco|en meseta",
      "Según la ley del efecto, las respuestas seguidas de ___ se debilitan.|molestia|satisfacción|ejercicio",
      "Köhler opondría después a la conclusión de Thorndike la idea de ___.|insight|contigüidad|refuerzo"
    ],
    tf: [
      "En las cajas problema, la latencia de escape descendía de forma gradual e irregular.|V",
      "Thorndike se consideraba conductista y dedicó la mayor parte de su obra al aprendizaje animal.|F|No se consideró nunca conductista y dedicó la mayor parte de su obra al aprendizaje escolar y a la medida.",
      "La ley del efecto y el refuerzo skinneriano se definen igual, solo por su efecto sobre la frecuencia.|F|La ley del efecto habla de satisfacción y molestia, estados del animal. Solo el refuerzo se define por la frecuencia.",
      "Tras su revisión de comienzos de los años treinta, Thorndike restó peso a la ley del ejercicio.|V"
    ],
    q: [
      "En una réplica de las cajas problema, el tiempo de escape de un gato baja poco a poco, con ensayos rápidos seguidos de otros lentos. ¿Qué concluiría Thorndike?|Que aprende por ensayo y error|Que ha tenido un insight súbito|Que aprende por mera contigüidad|Un descenso gradual e irregular indica que la conexión se fortalece poco a poco, no que haya una comprensión súbita.",
      "¿Qué medida usaba Thorndike en las cajas problema?|El tiempo hasta escapar|El número de errores en el laberinto|La tasa de respuestas por minuto|Medía la latencia de escape en cada ensayo, una medida sencilla y objetiva. La tasa de respuesta es la medida de Skinner.",
      "¿Qué diferencia la ley del efecto del refuerzo de Skinner?|Se formula en satisfacción y molestia|Exige una respuesta libre y continua|Se define solo por la frecuencia|Thorndike alude a estados del animal. El refuerzo skinneriano se define solo por su efecto sobre la frecuencia de la conducta.",
      "¿Qué cambió en la revisión de Thorndike de comienzos de los años treinta?|La práctica sin consecuencias apenas fortalecía|La molestia debilitaba más que la satisfacción|El aprendizaje pasó a ser súbito y completo|La ley del ejercicio perdió peso, y la molestia no debilitaba tanto como la satisfacción reforzaba."
    ],
    inc: [
      "Sobre Thorndike|La ley del efecto equivale al refuerzo|Su método prescindía de la introspección|Su enfoque se llama a veces conexionismo|La ley del efecto anticipa el refuerzo, pero se formula en satisfacción y molestia, no solo por la frecuencia."
    ],
    seq: [],
    cls: [
      "Concepto|Ley del efecto: satisfacción o molestia; conexión entre situación y respuesta; ensayos discretos en la caja problema|Refuerzo de Skinner: aumento de la frecuencia; tasa de una conducta operante; respuesta libre en la caja operante"
    ] },
  { t: "El manifiesto conductista de Watson (1913)",
    tip: "Watson, doctorado en Chicago en el entorno de Angell, publicó en 1913 «Psychology as the behaviorist views it». Definió la psicología como ciencia natural objetiva cuya meta es la predicción y el control de la conducta, sin introspección y sin línea divisoria entre humanos y animales. En 1915 adoptó el reflejo condicionado de Pávlov y Béjterev y explicó el aprendizaje por contigüidad. El manifiesto tuvo una acogida discreta, y el conductismo solo se impuso en los años veinte.",
    v: [
      "Manifiesto conductista=Artículo de Watson (1913) que define la psicología como ciencia objetiva de la conducta",
      "Predicción y control=Meta teórica de la psicología según el artículo de 1913",
      "Habla subvocal=El pensamiento para Watson: pequeños movimientos de laringe y lengua",
      "Ambientalismo=Lo decisivo en la conducta humana es la historia de aprendizaje, no la herencia",
      "Periferalismo=Explicar la conducta por estímulos, músculos y glándulas, no por procesos centrales",
      "Contigüidad (Watson)=Principio con que explicaba el aprendizaje, frente a la ley del efecto",
      "Emociones básicas=Miedo, ira y amor, respuestas innatas a estímulos concretos",
      "Behaviorism (1924‑25)=Obra que radicalizó sus ideas como tecnología aplicable a crianza y educación"
    ],
    g: [
      "Watson publicó su manifiesto en la revista ___ en 1913.|Psychological Review|American Psychologist|Journal of Experimental Psychology",
      "En 1908 Watson pasó a la Universidad ___, donde dirigió el laboratorio de psicología.|Johns Hopkins|de Chicago|de Columbia",
      "En ___, como presidente de la APA, Watson adoptó el reflejo condicionado de los fisiólogos rusos.|1915|1913|1920",
      "Para Watson, las emociones básicas eran el miedo, la ira y el ___.|amor|asco|placer",
      "El conductismo solo se impuso en la década de ___.|1920|1910|1940"
    ],
    tf: [
      "El manifiesto atacaba al estructuralismo por su introspección, pero respetaba al funcionalismo.|F|Atacaba también al funcionalismo, por seguir hablando de conciencia aunque le atribuyera funciones.",
      "Watson desconfiaba de la ley del efecto y explicaba el aprendizaje por contigüidad.|V",
      "El manifiesto de 1913 transformó la psicología estadounidense de forma inmediata.|F|Tuvo una acogida discreta durante años. El conductismo solo se impuso en los años veinte.",
      "Para Watson no hay línea divisoria entre la conducta humana y la animal.|V"
    ],
    q: [
      "Una persona se pone muy nerviosa al hablar en público. ¿Qué preguntaría un conductista watsoniano?|Qué estímulos provocan la respuesta|Qué sensaciones componen su experiencia|Para qué le sirve esa emoción|Preguntaría por los estímulos, cómo se aprendió y cómo eliminarla. Las sensaciones son la pregunta estructuralista.",
      "¿De quiénes tomó Watson el reflejo condicionado en 1915?|De Pávlov y Béjterev|De Thorndike y Angell|De Wundt y Titchener|Adoptó el reflejo condicionado de los fisiólogos rusos para explicar la adquisición de conductas, también emocionales y patológicas.",
      "¿Qué es el periferalismo de Watson?|Explicar por estímulos, músculos y glándulas|Atribuir la conducta sobre todo a la herencia|Explicar por procesos cerebrales centrales|Watson buscaba la explicación en la periferia. Atribuirla a la herencia contradice además su ambientalismo.",
      "¿Qué crítica recibió pronto el programa de Watson?|Prometía un control muy superior a los datos|Usaba demasiado la introspección controlada|Ignoraba por completo la conducta animal|Se le criticó una visión simplista de la conducta compleja, el rechazo de todo proceso interno y promesas excesivas."
    ],
    inc: [
      "Sobre el manifiesto de 1913|Admitía la introspección como método auxiliar|Su meta era la predicción y el control|Situaba la psicología en las ciencias naturales|La introspección no formaba parte de sus métodos, y los datos no debían interpretarse en términos de conciencia."
    ],
    seq: [
      "Trayectoria de Watson|Doctorado en Chicago>Laboratorio de Johns Hopkins (1908)>Manifiesto conductista (1913)>Reflejo condicionado como presidente de la APA (1915)>Little Albert (1920)>Behaviorism (1924‑25)"
    ],
    cls: [] },
  { t: "Little Albert: diseño, resultados y ética",
    tip: "Watson y Rayner (1920) quisieron mostrar que las emociones se aprenden por condicionamiento. En la prueba basal Albert no temía a la rata, y el golpe sobre una barra metálica (EI) emparejado con la rata (EC) produjo una respuesta emocional condicionada. La generalización fue débil e inconsistente (Harris, 1979), y el estudio tiene graves problemas metodológicos y éticos. Mary Cover Jones (1924) eliminó después el miedo de Peter, antecedente de la desensibilización sistemática.",
    v: [
      "Watson y Rayner (1920)=Autores de «Conditioned emotional reactions»",
      "Harriet Lane Home=Hogar infantil vinculado al hospital Johns Hopkins donde estaba Albert",
      "Prueba basal=Fase a los ≈9 meses en la que Albert no mostró miedo ante la rata",
      "Estímulo condicionado=La rata blanca, neutra al principio, en el estudio de 1920",
      "Estímulo incondicionado=Golpe de martillo sobre una barra metálica a la espalda del niño",
      "Respuesta emocional condicionada=Reacción emocional ante un estímulo neutro emparejado con otro que la provoca",
      "Generalización=Aparición de la respuesta ante estímulos parecidos al condicionado",
      "Descondicionamiento=Eliminación de un miedo aprendido, como hizo Mary Cover Jones con Peter"
    ],
    g: [
      "Durante el condicionamiento, Albert tenía unos ___ meses.|11|9|14",
      "En la fase de generalización se le presentaron un conejo, un perro, un abrigo de piel y una máscara de ___.|Papá Noel|carnaval|payaso",
      "Albert salió del hospital sin que se intentara ___ el miedo.|eliminar|generalizar|medir",
      "Mary Cover Jones acercaba el conejo a Peter poco a poco mientras el niño ___.|comía|dormía|jugaba",
      "Juzgar el estudio de 1920 con las normas éticas de hoy sería caer en el ___.|presentismo|historicismo|externalismo"
    ],
    tf: [
      "En la prueba basal, Albert ya mostraba cierto miedo a la rata blanca.|F|No mostró miedo ante ninguno de los objetos. Solo el ruido fuerte de la barra le provocaba sobresalto y llanto.",
      "El registro de las respuestas de Albert fue informal, sin medidas estandarizadas.|V",
      "En las pruebas de generalización, Albert a menudo se calmaba chupándose el pulgar.|V",
      "El estudio contó con un grupo de control de bebés no condicionados.|F|Tuvo un solo participante y ningún grupo de control, uno de sus graves problemas metodológicos."
    ],
    q: [
      "Tras una intoxicación en un restaurante, alguien siente malestar durante meses con el olor de ese local. En términos del estudio de Albert, ¿qué papel tiene el olor?|Estímulo condicionado|Estímulo incondicionado|Respuesta condicionada|El olor, antes neutro, se asoció a la experiencia aversiva, como la rata blanca con el ruido de la barra.",
      "¿Qué estímulo fue el incondicionado en el estudio de Watson y Rayner?|El golpe sobre una barra metálica|La rata blanca presentada al niño|La máscara de Papá Noel|La rata fue el estímulo condicionado y la máscara, un estímulo de generalización. El ruido provocaba sobresalto y llanto sin aprendizaje.",
      "¿Qué problema metodológico se señala en el estudio de Albert?|El procedimiento cambió entre sesiones|Se usaron demasiados participantes|Las medidas eran fisiológicas y precisas|En algún momento se reforzó de nuevo el condicionamiento antes de las pruebas. Hubo un solo participante y un registro informal.",
      "¿De qué técnica es antecedente el trabajo de Mary Cover Jones (1924)?|De la desensibilización sistemática|Del análisis aplicado de la conducta|De la enseñanza programada|Eliminó el miedo de Peter acercando el conejo de forma gradual mientras comía: descondicionamiento y desensibilización."
    ],
    inc: [
      "Sobre el estudio de Little Albert|Albert generalizó el miedo a todo lo peludo|La rata blanca fue el estímulo condicionado|Hoy resultan evidentes sus problemas éticos|La generalización fue limitada e inconsistente. Los manuales posteriores la exageraron (Harris, 1979)."
    ],
    seq: [
      "Fases del estudio de Little Albert|Prueba basal sin miedo (≈9 meses)>Condicionamiento con la rata y el ruido (≈11 meses)>Pruebas de generalización>Última prueba y salida sin descondicionamiento"
    ],
    cls: [
      "Problema del estudio|Metodológico: un solo participante; registro informal; procedimiento cambiante; generalización débil|Ético: miedo provocado a un bebé; sin consentimiento en sentido moderno; no se le devolvió a su estado inicial"
    ] },
  { t: "¿Quién era Albert? Watson fuera de la academia y sus mitos",
    tip: "La identidad de Albert ilustra cómo trabaja la nueva historia, con archivos, censos y registros. Beck et al. (2009) propusieron a Douglas Merritte, muerto en 1925 por hidrocefalia, y Fridlund et al. (2012) añadieron un probable daño neurológico. Powell et al. (2014) propusieron a William Albert Barger por su nombre, su peso y su madre nodriza, y hoy el peso de la evidencia lo favorece. Watson dejó Johns Hopkins en 1920, pasó a la publicidad y su cita de la docena de niños suele citarse sin su continuación.",
    v: [
      "Douglas Merritte=Candidato de Beck et al. (2009), muerto en 1925 por hidrocefalia",
      "William Albert Barger=Candidato de Powell et al. (2014), que vivió hasta 2007",
      "Fridlund et al. (2012)=Añadieron que el primer candidato estaba probablemente afectado neurológicamente",
      "Griggs (2015)=Revisó el debate y apoyó a Barger por parsimonia",
      "Parsimonia=Preferir la explicación que encaja con más datos sin hipótesis adicionales",
      "Digdon et al. (2014)=Rebatieron el supuesto déficit neurológico del candidato Merritte",
      "Docena de niños sanos=Frase de «Behaviorism» que Watson admitía que iba más allá de sus datos",
      "Harris (1979)=Mostró que la generalización del miedo fue mucho más débil de lo difundido"
    ],
    g: [
      "Watson tuvo que dejar Johns Hopkins en ___ tras el escándalo por su relación con Rosalie Rayner.|1920|1913|1928",
      "Fuera de la academia, Watson se dedicó a la ___.|publicidad|psiquiatría|enseñanza",
      "En 1928 Watson publicó un manual de ___ de tono muy estricto.|crianza|publicidad|terapia",
      "Powell et al. identificaron a Barger por su nombre, su peso y su madre ___.|nodriza|enfermera|maestra",
      "La continuación de la cita dice: «Voy más allá de mis ___ y lo admito».|datos|teorías|métodos"
    ],
    tf: [
      "Hoy se sabe con certeza que Albert era Douglas Merritte.|F|Hay debate, y el peso de la evidencia favorece a William Albert Barger (Powell et al., 2014).",
      "Watson presentaba la frase de la docena de niños como una provocación frente al hereditarismo de su tiempo.|V",
      "Tras dejar Johns Hopkins, Watson siguió investigando en otra universidad.|F|Su carrera universitaria terminó en 1920. Se dedicó a la publicidad y a escribir para el gran público.",
      "Si Albert hubiera sido Douglas Merritte, se agravaría la dimensión ética del estudio.|V"
    ],
    q: [
      "Una historiadora encuentra en los registros de la institución a un niño llamado Albert, con apellido por B, un peso compatible con el del artículo y una madre que trabajaba allí como nodriza. ¿A qué propuesta corresponde?|A la de Powell et al. (2014)|A la de Beck et al. (2009)|A la de Fridlund et al. (2012)|Powell, Digdon, Harris y Smithson identificaron así a William Albert Barger, que vivió hasta 2007.",
      "¿Por qué apoyó Griggs (2015) la hipótesis de Barger?|Por parsimonia|Por su déficit neurológico|Por su muerte temprana|Es la explicación que encaja con más datos sin hipótesis adicionales. El déficit y la muerte en 1925 son de Merritte.",
      "¿Qué cambia al leer entera la cita de la docena de niños?|Watson admite ir más allá de sus datos|Watson la presenta como un resultado probado|Watson renuncia a su ambientalismo|Sigue siendo exagerada, pero era una provocación frente al hereditarismo, no un resultado demostrado.",
      "¿Qué ilustra el enigma de la identidad de Albert?|Cómo trabaja la nueva historia con archivos|Que la historia de la psicología es anecdótica|Que el estudio de Watson era fiable|Se contrastaron hipótesis con archivos, censos y registros, el modo de trabajo de la nueva historia."
    ],
    inc: [
      "Sobre Watson y sus mitos|Siguió investigando tras 1920|Escribió un manual de crianza en 1928|«Behaviorism» amplió su influencia|Dejó la universidad en 1920 y trabajó en publicidad, aunque «Behaviorism» (1924‑25) amplió su influencia."
    ],
    seq: [],
    cls: [
      "Candidato a ser Albert|Douglas Merritte: Beck et al. (2009); Fridlund et al. (2012); hidrocefalia; murió en 1925|William Albert Barger: Powell et al. (2014); Griggs (2015); madre nodriza; vivió hasta 2007"
    ] }
] },
{ n: 10, t: "El neoconductismo: Tolman, Hull y Guthrie", cap: 3, pir: "alta", mods: [
  { t: "Positivismo lógico y operacionismo",
    tip: "El neoconductismo conservó la conducta como objeto, el laboratorio animal y el aprendizaje como tema central, pero buscó una base filosófica más sólida. El positivismo lógico del Círculo de Viena solo daba sentido a los enunciados comprobables o lógicos, y el operacionismo (Bridgman, 1927, llevado a la psicología por Stevens, 1935) define un concepto por las operaciones con que se mide. De ahí nació la variable interviniente. Tolman y Hull fueron conductistas metodológicos, y Skinner, radical.",
    v: [
      "Positivismo lógico=Solo tienen sentido científico los enunciados comprobables o las verdades lógicas",
      "Círculo de Viena=Grupo de los años veinte y treinta que desarrolló esa filosofía de la ciencia",
      "Operacionismo=Un concepto se define por las operaciones con que se mide",
      "Percy Bridgman (1927)=Físico que propuso definir los conceptos por sus medidas",
      "S. S. Stevens (1935)=Llevó a la psicología la definición de conceptos por operaciones",
      "Variable interviniente=Concepto teórico que conecta variables independientes y dependientes sin observarse",
      "Conductismo metodológico=Acepta conceptos internos si se definen de forma operacional, como Tolman y Hull",
      "Conductismo radical=Rechaza las variables intervinientes y se limita a relaciones funcionales (Skinner)"
    ],
    g: [
      "Hacia los años treinta, el tema central del neoconductismo pasó a ser el ___.|aprendizaje|pensamiento|lenguaje",
      "Definir el hambre como horas de ___ de comida es una definición operacional.|privación|ingesta|búsqueda",
      "Definir el aprendizaje como reducción del número de ___ en un laberinto es una definición operacional.|errores|refuerzos|estímulos",
      "La fuerza de un hábito puede definirse como el número de ensayos ___.|reforzados|fallidos|libres",
      "La época de los grandes sistemas de aprendizaje fue entre los años treinta y los ___.|cincuenta|setenta|veinte"
    ],
    tf: [
      "El operacionismo lo propuso el psicólogo S. S. Stevens en 1927.|F|Lo propuso el físico Percy Bridgman (1927). Stevens lo llevó a la psicología en 1935.",
      "La variable interviniente no se observa directamente, pero se ancla a variables independientes y dependientes.|V",
      "El conductismo radical de Skinner acepta las variables intervinientes si son operacionales.|F|Esa es la postura del conductismo metodológico de Tolman y Hull. Skinner las rechazaba.",
      "Con el tiempo se aceptó que las definiciones operacionales anclan los conceptos, pero no agotan su significado.|V"
    ],
    q: [
      "Un equipo afirma que su programa de estudio mejora la «motivación» y la mide como minutos de estudio voluntario a la semana. ¿Qué ha hecho?|Una definición operacional|Una introspección controlada|Un análisis molar de la conducta|Al definir el concepto por la operación con que se mide, la afirmación se vuelve contrastable y replicable.",
      "Se registran las horas que lleva una rata sin comer y su velocidad al correr hacia la comida. ¿Qué es el «hambre»?|La variable interviniente|La variable independiente|La variable dependiente|Las horas de privación son la variable independiente y la velocidad, la dependiente. El hambre resume la relación entre ambas.",
      "¿Qué límite se señaló al operacionismo estricto?|Fragmenta la teoría en conceptos distintos|Impide contrastar empíricamente las teorías|Obliga a recurrir a la introspección|Si cada operación define un concepto, la inteligencia medida con dos pruebas serían dos conceptos diferentes.",
      "¿Qué problema del conductismo de Watson resolvía el operacionismo?|Hablar de lo interno sin introspección|Explicar la conducta solo por la herencia|Eliminar el laboratorio animal|Cada concepto interno se define por operaciones públicas, y así puede hablarse de él sin recurrir a la introspección."
    ],
    inc: [
      "Sobre el neoconductismo|Abandonó el laboratorio animal como escenario|Conservó la conducta como objeto de estudio|Buscó una base filosófica más sólida|Conservó la conducta como objeto y el laboratorio animal como escenario, pero con teorías más elaboradas."
    ],
    seq: [],
    cls: [
      "Orientación conductista|Metodológica: Tolman; Hull; variables intervinientes operacionales|Radical: Skinner; relaciones funcionales; sin variables intervinientes"
    ] },
  { t: "Tolman: conducta propositiva y mapas cognitivos",
    tip: "Tolman, desde Berkeley, defendió en «Purposive Behavior in Animals and Men» (1932) un conductismo molar y propositivo, con variables intervinientes como las expectativas. Los animales aprenden relaciones entre signos y significados y forman mapas cognitivos (1948). Tolman y Honzik (1930) demostraron el aprendizaje latente y la distinción entre aprendizaje y ejecución. Según la postura más aceptada, Tolman era cognitivo en sus constructos, pero no en su metodología.",
    v: [
      "Conducta molar=Acto completo dirigido a una meta, frente al análisis de movimientos y secreciones",
      "Nivel molecular=Análisis de contracciones musculares y secreciones, propio de Watson",
      "Conducta propositiva=Orientada a metas: persiste hasta alcanzarlas y cambia de medios si uno falla",
      "Mapa cognitivo=Representación del entorno que permite elegir la ruta más adecuada",
      "Aprendizaje latente=Se adquiere sin recompensa y no se muestra hasta que hay motivo",
      "Aprendizaje y ejecución=Distinción según la cual la recompensa solo da motivos para mostrar lo aprendido",
      "Tolman y Honzik (1930)=Experimento con un laberinto de 14 unidades y tres grupos de ratas",
      "Insight=Reorganización súbita de un problema que produce la solución de golpe (Köhler)"
    ],
    g: [
      "Tolman desarrolló su obra en la Universidad de California, en ___.|Berkeley|Yale|Harvard",
      "El laberinto de Tolman y Honzik tenía ___ unidades.|14|10|11",
      "El tercer grupo de Tolman y Honzik encontraba comida a partir del día ___.|11|14|7",
      "Tolman expuso la idea de mapa cognitivo en «Cognitive maps in rats and men» (___).|1948|1932|1930",
      "Tolman se inspiró en la Gestalt y en la teoría de campo de ___.|Lewin|Köhler|Hull"
    ],
    tf: [
      "En Tolman y Honzik, el grupo recompensado desde el día 11 redujo sus errores de forma lenta y gradual.|F|Los redujo de inmediato, hasta igualar al grupo siempre recompensado o incluso mejorarlo.",
      "Para Tolman, la recompensa no crea el aprendizaje, sino que da motivos para ejecutarlo.|V",
      "Según la postura más aceptada, Tolman era cognitivo en sus constructos y conductista en su metodología.|V",
      "El aprendizaje latente es la reorganización súbita del problema que da la solución de golpe.|F|Eso es el insight de Köhler. El aprendizaje latente se adquiere sin recompensa y queda oculto hasta que hay motivo."
    ],
    q: [
      "Alguien va cada día en autobús por un barrio sin fijarse en las calles. Un día necesita ir a pie a una farmacia de la zona y se orienta sin dudar. ¿Qué ilustra?|Aprendizaje latente|Insight súbito|Ley del ejercicio|Había aprendido el entorno sin ninguna recompensa inmediata y lo mostró cuando tuvo motivo para hacerlo.",
      "¿Qué grupo de Tolman y Honzik muestra mejor la distinción entre aprendizaje y ejecución?|El recompensado desde el día 11|El recompensado desde el primer día|El que nunca encontró comida|Sin comida se comportó como el nunca recompensado, y al aparecer la recompensa redujo sus errores de inmediato.",
      "¿Qué significa que la conducta sea molar, según Tolman?|Que la unidad es el acto dirigido a una meta|Que se analiza en contracciones musculares|Que se explica por reducción del impulso|El nivel molecular de Watson atendía a músculos y glándulas. La reducción del impulso es de Hull.",
      "Según Tolman, ¿qué aprenden los animales en el laberinto?|Relaciones entre signos y significados|Cadenas de respuestas reforzadas|Movimientos asociados por contigüidad|No aprenden cadenas de respuestas, sino qué lleva a qué, lo que forma un mapa cognitivo del entorno."
    ],
    inc: [
      "Sobre Tolman|Defendía un conductismo molecular|Introdujo variables intervinientes explícitas|Su enfoque anticipó la psicología cognitiva|Su conductismo era molar y propositivo. El análisis molecular es el de Watson."
    ],
    seq: [],
    cls: [
      "Concepto|Aprendizaje latente: sin recompensa; oculto hasta que hay motivo; Tolman y Honzik (1930)|Insight: reorganización súbita; solución de golpe; Köhler"
    ] },
  { t: "Hull: el sistema hipotético‑deductivo",
    tip: "Hull, en Yale, quiso una teoría con la estructura de la física: un sistema hipotético‑deductivo de postulados matemáticos, expuesto en «Principles of Behavior» (1943). Según la reducción del impulso, la respuesta que reduce el impulso queda reforzada y fortalece el hábito. El potencial excitatorio es el producto de la fuerza del hábito por el impulso (sEr igual a sHr × D), así que si un factor vale cero no hay respuesta. En 1952 añadió el incentivo (K), la intensidad del estímulo (V) y la inhibición.",
    v: [
      "Sistema hipotético‑deductivo=Postulados matemáticos de los que se deducen predicciones contrastables",
      "Impulso (D)=Estado de activación generado por una necesidad biológica",
      "Reducción del impulso=Mecanismo por el que una respuesta queda reforzada, según Hull",
      "Fuerza del hábito (sHr)=Conexión estímulo‑respuesta que crece con los ensayos reforzados",
      "Potencial excitatorio (sEr)=Tendencia a dar una respuesta, producto del hábito por el impulso",
      "Incentivo (K)=Variable añadida en 1952 que recoge la cantidad o calidad de la recompensa",
      "Inhibición=Explica por qué una respuesta repetida sin refuerzo se debilita",
      "Principles of Behavior=Obra principal de Hull, publicada en 1943"
    ],
    g: [
      "Hull desarrolló su sistema en la Universidad de ___.|Yale|Berkeley|Harvard",
      "En la ecuación de Hull, la fuerza del hábito y el impulso se ___.|multiplican|suman entre sí|compensan",
      "En 1952 Hull añadió la intensidad del estímulo, representada con la letra ___.|V|K|D",
      "El impulso depende de la ___, y la fuerza del hábito, del número de ensayos reforzados.|privación|recompensa|práctica",
      "El enfrentamiento entre Tolman y Hull dominó la psicología del aprendizaje entre 1930 y ___.|1950|1960|1943"
    ],
    tf: [
      "Una rata hambrienta que nunca ha aprendido la ruta recorrerá bien el laberinto gracias a su impulso.|F|Si la fuerza del hábito es casi nula, el producto también lo es: un factor no compensa la ausencia del otro.",
      "Para Hull, las variables intervinientes corresponderían en último término a procesos fisiológicos.|V",
      "Hull sostenía que el refuerzo afecta a la ejecución, pero no al aprendizaje.|F|Esa es la postura de Tolman. Para Hull el refuerzo, al reducir el impulso, es necesario para aprender.",
      "Las variables añadidas en 1952 hicieron la teoría más compleja y difícil de contrastar en su conjunto.|V"
    ],
    q: [
      "Una rata muy entrenada en un laberinto acaba de comer hasta saciarse. Según Hull, ¿qué hará?|Apenas recorrerá el laberinto|Lo recorrerá a máxima velocidad|Lo recorrerá a media velocidad|Con D próximo a cero, el producto sHr × D también lo es. Esperar media velocidad supone una suma, un error típico.",
      "¿Qué recoge la variable K añadida por Hull en 1952?|La cantidad o calidad de la recompensa|La intensidad del estímulo presentado|La inhibición por falta de refuerzo|K es el incentivo. La intensidad del estímulo es V, y la inhibición explica el debilitamiento sin refuerzo.",
      "¿Qué aprende el organismo según Hull, frente a Tolman?|Hábitos estímulo‑respuesta|Relaciones entre signos y metas|Mapas cognitivos del entorno|Para Hull se fortalecen conexiones estímulo‑respuesta por refuerzo. Signos, metas y mapas son conceptos de Tolman.",
      "¿Qué ocurre en un sistema hipotético‑deductivo cuando falla una predicción?|Se corrigen los postulados|Se abandona el laboratorio|Se recurre a la introspección|De los postulados se deducen predicciones que se contrastan en el laboratorio. Si fallan, se revisan los postulados."
    ],
    inc: [
      "Sobre el sistema de Hull|El potencial excitatorio suma hábito e impulso|La respuesta que reduce el impulso queda reforzada|Su obra principal es «Principles of Behavior» (1943)|La ecuación es multiplicativa. Escribirla como suma es un error típico, porque un factor compensaría la ausencia del otro."
    ],
    seq: [
      "Teoría de la reducción del impulso|Necesidad biológica>Impulso (D)>Respuesta que reduce el impulso>Refuerzo>Fortalecimiento del hábito (sHr)"
    ],
    cls: [
      "Autor|Tolman: mapas cognitivos; refuerzo que afecta a la ejecución; Purposive Behavior (1932)|Hull: hábitos estímulo‑respuesta; refuerzo necesario para aprender; Principles of Behavior (1943)"
    ] },
  { t: "Guthrie y el balance del neoconductismo",
    tip: "Guthrie («The Psychology of Learning», 1935) solo necesitaba la contigüidad: los estímulos presentes durante un movimiento tienden a provocarlo de nuevo, y la conexión alcanza su fuerza completa en un solo ensayo. Para romper un hábito, propuso lograr otra respuesta ante los mismos estímulos. El neoconductismo dominó la psicología académica estadounidense entre los años treinta y cincuenta y dejó definiciones operacionales, datos y la variable interviniente, pero sus grandes sistemas no sobrevivieron como teorías generales.",
    v: [
      "Contigüidad (Guthrie)=Los estímulos presentes durante un movimiento tienden a provocarlo de nuevo",
      "Aprendizaje en un ensayo=La conexión alcanza su fuerza completa la primera vez que se da",
      "The Psychology of Learning=Obra de Guthrie publicada en 1935",
      "Romper un hábito=Lograr que, ante los mismos estímulos, aparezca una respuesta diferente",
      "Papel del refuerzo (Guthrie)=Cambia la situación y protege el último movimiento de nuevas asociaciones",
      "Mejora gradual (Guthrie)=Se debe a los muchos movimientos que forman una conducta compleja",
      "Danziger (1990)=Mostró que buena parte del relato de revoluciones se construyó a posteriori",
      "Neoconductismo=Orientación dominante en la psicología académica estadounidense de los treinta a los cincuenta"
    ],
    g: [
      "Guthrie publicó «The Psychology of Learning» en ___.|1935|1932|1943",
      "Según Guthrie, el refuerzo solo actúa cambiando la ___.|situación|motivación|respuesta",
      "La teoría de Guthrie era difícil de poner a prueba porque explicaba casi ___ resultado.|cualquier|ningún|un solo",
      "La investigación neoconductista se concentró sobre todo en ___.|ratas|palomas|primates",
      "La carencia en el estudio del lenguaje la haría muy visible la crítica de ___ (1959).|Chomsky|Lashley|Neisser"
    ],
    tf: [
      "Para Guthrie, la mejora gradual con la práctica demuestra que cada conexión se fortalece poco a poco.|F|Cada conexión alcanza su fuerza en un solo ensayo. La mejora gradual se debe a los muchos movimientos de una conducta compleja.",
      "Guthrie no necesitaba refuerzo, ni impulso, ni mapas cognitivos para explicar el aprendizaje.|V",
      "Los grandes sistemas neoconductistas, sobre todo el de Hull, sobrevivieron como teorías generales.|F|Se volvieron tan complejos que sus predicciones eran difíciles de comprobar, y no sobrevivieron como teorías generales.",
      "Muchas ideas de Tolman se incorporaron sin ruptura a la psicología cognitiva.|V"
    ],
    q: [
      "Alguien coge el móvil en cuanto se sienta en el escritorio. Decide dejar un libro abierto a mano y empezar a leer al sentarse. ¿Qué principio aplica?|La contigüidad de Guthrie|La reducción del impulso de Hull|El aprendizaje latente de Tolman|Para romper un hábito, Guthrie proponía que ante los mismos estímulos apareciera una respuesta diferente.",
      "¿Qué tesis se sigue del principio de contigüidad de Guthrie?|El aprendizaje en un solo ensayo|La distinción aprendizaje y ejecución|El carácter multiplicativo del hábito|La conexión entre estímulos y movimiento alcanza su fuerza completa la primera vez que se dan juntos.",
      "¿Qué aportación del neoconductismo fue un paso clave hacia la psicología cognitiva?|La variable interviniente|El aprendizaje en un ensayo|Los grandes sistemas formales|Legitimó hablar de procesos internos siempre que estuvieran anclados en observaciones.",
      "¿Cómo se describe hoy el paso del neoconductismo al cognitivismo?|Sin sustitución súbita, con continuidades|Como una ruptura total en un solo año|Como la victoria definitiva de Hull|Skinner siguió activo tras la guerra y muchas ideas de Tolman pasaron sin ruptura a la psicología cognitiva."
    ],
    inc: [
      "Sobre el balance del neoconductismo|Explicó con solvencia el lenguaje humano|Exigió definiciones operacionales|Aportó datos sobre extinción y motivación|El lenguaje y el pensamiento humano quedaron poco explicados, una carencia que la crítica de Chomsky hizo visible."
    ],
    seq: [],
    cls: [
      "Balance del neoconductismo|Aportaciones: definiciones operacionales; datos experimentales; variable interviniente; terapia de conducta|Límites: sistemas demasiado complejos; pocas especies; lenguaje poco explicado"
    ] }
] },
{ n: 11, t: "Skinner y la crisis del conductismo", cap: 4, pir: "alta", mods: [
  { t: "El análisis experimental de la conducta",
    tip: "Skinner presentó en «The Behavior of Organisms» (1938) el análisis experimental de la conducta y un conductismo radical que prescinde de variables intervinientes y describe relaciones funcionales. Distinguió la conducta respondiente, provocada por estímulos, de la operante, emitida y controlada por sus consecuencias. El reforzador se define por su efecto, y el refuerzo negativo no es castigo. Con el registro acumulativo, Ferster y Skinner (1957) describieron los programas de refuerzo.",
    v: [
      "Conductismo radical=Explicar la conducta por sus relaciones con el ambiente, sin variables intervinientes",
      "Conducta respondiente=La provocan estímulos antecedentes, como estudió Pávlov",
      "Conducta operante=La emite el organismo y la controlan sus consecuencias",
      "Reforzador=Consecuencia que aumenta la frecuencia futura de la respuesta",
      "Refuerzo negativo=Retirar un estímulo aversivo, lo que aumenta la respuesta",
      "Castigo=Consecuencia que reduce la frecuencia de la respuesta",
      "Registro acumulativo=Gráfico de respuestas en el tiempo cuya pendiente indica la tasa",
      "Programa de refuerzo=Regla que fija qué respuestas se refuerzan"
    ],
    g: [
      "Skinner defendió en «Are theories of learning necessary?» (___) que bastan las relaciones funcionales.|1950|1938|1957",
      "En los programas de ___, el refuerzo depende del número de respuestas.|razón|intervalo|contigüidad",
      "El patrón ___ es característico del intervalo fijo.|festoneado|escalonado|constante",
      "Una tasa de respuesta alta y constante es propia del programa de ___.|razón variable|razón fija|intervalo variable",
      "En el registro acumulativo, la ___ de la línea indica la velocidad de respuesta.|pendiente|altura|longitud"
    ],
    tf: [
      "Lo «radical» del conductismo de Skinner alude a la raíz de la explicación, no a un tono extremista.|V",
      "Skinner negaba la existencia de sucesos privados como pensar o sentir.|F|No los negaba: los trataba como conducta, no como causas internas de la conducta.",
      "El refuerzo negativo reduce la frecuencia de la respuesta a la que sigue.|F|Es una trampa típica: el refuerzo negativo la aumenta al retirar un estímulo aversivo. La reduce el castigo.",
      "A diferencia de las cajas problema, en la caja de Skinner el animal puede responder de forma continua.|V"
    ],
    q: [
      "Un estudiante estudia sobre todo la semana anterior a cada parcial, que se celebra cada mes. ¿Qué programa ilustra?|Intervalo fijo|Razón fija|Intervalo variable|La respuesta se acelera al acercarse el final del intervalo: patrón festoneado. Atribuirlo a la razón fija es una trampa típica.",
      "Un conductor se pone el cinturón para que deje de sonar el aviso del coche, y cada vez lo hace antes. ¿Qué proceso actúa?|Refuerzo negativo|Castigo|Refuerzo positivo|Se retira un estímulo aversivo y la conducta aumenta. El castigo reduciría la frecuencia de la respuesta.",
      "¿Qué patrón produce la razón fija?|Tasa alta con pausa posrefuerzo|Aceleración al final del intervalo|Tasa moderada y constante|El festoneado es del intervalo fijo, y la tasa moderada y constante, del intervalo variable.",
      "¿Qué diferencia a Skinner de Tolman y Hull?|Rechaza las variables intervinientes|Estudia solo la conducta observable|Trabaja con animales de laboratorio|Los tres estudiaban conducta observable con animales, pero solo Skinner consideraba innecesarios el hábito, el impulso o los mapas."
    ],
    inc: [
      "Sobre la conducta operante|La provocan estímulos antecedentes|La controlan sus consecuencias|Continúa la línea de la ley del efecto|Eso define la conducta respondiente, la que estudió Pávlov. La operante la emite el organismo."
    ],
    seq: [],
    cls: [
      "Programa de refuerzo|Razón: depende del número de respuestas; RF con pausa posrefuerzo; RV con tasa alta y constante|Intervalo: depende del tiempo transcurrido; IF festoneado; IV con tasa moderada y constante"
    ] },
  { t: "Skinner fuera del laboratorio",
    tip: "Skinner sostuvo que los principios que controlan la conducta de una paloma permiten diseñar escuelas, instituciones y sociedades, y lo desarrolló en cuatro obras de 1948 a 1971. Aplicó el refuerzo a la educación con las máquinas de enseñar. La terapia de conducta surgió en los años cincuenta con Wolpe, Eysenck y el grupo de Skinner, y de su línea deriva el análisis aplicado de la conducta. El aircrib era una cuna climatizada, no una caja de condicionamiento.",
    v: [
      "Walden Two=Novela utópica de 1948 sobre una comunidad organizada por refuerzo",
      "Science and Human Behavior=Obra de 1953 que extiende el análisis operante a las instituciones",
      "Beyond Freedom and Dignity=Obra de 1971: libertad y dignidad estorban el diseño deliberado de la cultura",
      "Enseñanza programada=Pasos pequeños, respuesta activa, retroalimentación inmediata y ritmo propio",
      "Análisis aplicado de la conducta=Línea skinneriana (ABA) usada en educación especial, autismo y organizaciones",
      "Terapia de conducta=Surgió en los años cincuenta como rival científico de la psiquiatría psicoanalítica",
      "Aircrib=Cuna cerrada y climatizada que Skinner presentó en «Ladies' Home Journal» (1945)",
      "Deborah Skinner Buzan=Hija de Skinner que desmintió las leyendas en «The Guardian» (2004)"
    ],
    g: [
      "«Walden Two» se publicó en ___.|1948|1953|1971",
      "En Sudáfrica, la terapia de conducta apareció con ___.|Wolpe|Eysenck|Jones",
      "Skinner mantuvo un debate público con el humanista Carl ___.|Rogers|Maslow|Jung",
      "Skinner presentó el aircrib en un artículo de ___ (1945).|Ladies' Home Journal|The Guardian|Psychological Review",
      "Con la terapia de conducta, el psicólogo clínico pasó de evaluar a ___.|tratar|investigar|diagnosticar"
    ],
    tf: [
      "La terapia de conducta apareció casi a la vez en tres países, un caso de descubrimiento múltiple.|V",
      "El aircrib era una caja en la que Skinner reforzaba la conducta de su hija.|F|Era una cuna cerrada y climatizada para que el bebé estuviera cómodo con poca ropa, no un dispositivo de refuerzo.",
      "Ante las críticas, Skinner respondía que la conducta ya está siempre controlada por el ambiente.|V",
      "Tras la revolución cognitiva, Skinner moderó su posición y admitió causas internas.|F|No cambió de posición y siguió publicando hasta su muerte. Su programa siguió vivo mientras el movimiento se diluía."
    ],
    q: [
      "Una aplicación de estudio divide el temario en pasos pequeños, pide responder en cada uno, corrige al instante y deja avanzar a cada usuario a su ritmo. ¿Qué lógica sigue?|La enseñanza programada|La desensibilización sistemática|El aprendizaje latente|Son los rasgos de las máquinas de enseñar de Skinner: pasos pequeños, respuesta activa, retroalimentación inmediata y ritmo propio.",
      "¿Qué orden cronológico de obras de Skinner es correcto?|Walden Two, Verbal Behavior, Beyond Freedom|Verbal Behavior, Walden Two, Beyond Freedom|Walden Two, Beyond Freedom, Verbal Behavior|«Walden Two» es de 1948, «Verbal Behavior» de 1957 y «Beyond Freedom and Dignity» de 1971.",
      "¿En qué ámbitos se usa hoy el análisis aplicado de la conducta?|Educación especial, autismo y organizaciones|Psicoanálisis, hipnosis y psiquiatría forense|Neuroimagen, psicofísica y psicometría|De la línea skinneriana deriva el ABA, usado hoy en educación especial, autismo, organizaciones y salud.",
      "¿Qué obra convirtió a Skinner en una figura pública muy discutida?|Beyond Freedom and Dignity|The Behavior of Organisms|Science and Human Behavior|En 1971 sostuvo que las ideas de libertad y dignidad estorban el diseño deliberado de la cultura."
    ],
    inc: [
      "Sobre Skinner fuera del laboratorio|Su hija sufrió daños por el aircrib|Aplicó el refuerzo a la educación|De su línea deriva el análisis aplicado|Es un mito. Deborah Skinner Buzan desmintió las leyendas en «The Guardian» (2004)."
    ],
    seq: [
      "Obras de alcance social de Skinner|Walden Two (1948)>Science and Human Behavior (1953)>Verbal Behavior (1957)>Beyond Freedom and Dignity (1971)"
    ],
    cls: [] },
  { t: "La crítica de Chomsky (1959)",
    tip: "En «Verbal Behavior» (1957) Skinner explicó el lenguaje como conducta operante, con conceptos como el mando y el tacto, pero sin experimentos. Chomsky (1959, «Language») objetó que los términos del laboratorio pierden sentido fuera de él, que el lenguaje es productivo, que los niños aprenden deprisa con datos pobres y que hace falta una capacidad innata. MacCorquodale (1970) replicó que Chomsky no había entendido a Skinner. Su efecto histórico es indiscutible, pero la reseña no actuó sola.",
    v: [
      "Verbal Behavior=Obra de Skinner de 1957 que explica el lenguaje como conducta operante",
      "Mando=Petición que se refuerza cuando el oyente da lo pedido",
      "Tacto=Nombrar algo presente, reforzado por la aprobación social",
      "Lingüística generativa=Describe el lenguaje como un sistema de reglas productivo y sistemático",
      "Productividad=Comprender y producir sin esfuerzo oraciones nunca oídas",
      "Pobreza del estímulo=Los datos que recibe el niño no bastan para explicar la gramática adquirida",
      "MacCorquodale (1970)=Respondió que Chomsky criticaba un conductismo que no era el de Skinner",
      "Capacidad innata=Predisposición biológica específica para el lenguaje"
    ],
    g: [
      "Chomsky publicó su reseña en la revista ___.|Language|Mind|Science",
      "«Verbal Behavior» no contenía experimentos: era una ___.|interpretación|demostración|replicación",
      "Una niña dice «yo lo poní»: ha ___ la forma aplicando una regla general.|construido|imitado|repetido",
      "Tras la crisis, casi todos los conductistas admitieron procesos internos, con la excepción de ___.|Skinner|Tolman|Hull",
      "Lashley había advertido que las asociaciones encadenadas no explicaban las secuencias de acción ___.|rápidas|lentas|aisladas"
    ],
    tf: [
      "La reseña de Chomsky fue un experimento que refutó «Verbal Behavior».|F|Era una reseña crítica, no un experimento. Presentarla como experimento es una trampa típica.",
      "Según Chomsky, si cualquier cosa que siga a una frase puede llamarse refuerzo, el concepto ya no explica nada.|V",
      "La reseña de Chomsky bastó por sí sola para hundir el conductismo.|F|Es una simplificación: se sumaron la falta de una teoría compartida, el declive del positivismo lógico y los límites biológicos.",
      "La reseña legitimó hablar de reglas, representaciones y capacidades innatas.|V"
    ],
    q: [
      "Un niño de tres años dice «yo lo poní», una forma que nadie le ha enseñado ni reforzado. ¿Qué muestra, según Chomsky?|Que el niño extrae reglas|Que el refuerzo moldea el habla|Que el error se debe al tacto|Ha aplicado una regla general a un verbo irregular: productividad, no repetición de lo premiado.",
      "Un niño pide agua y se la dan. En términos de «Verbal Behavior», ¿qué ha emitido?|Un mando|Un tacto|Un reflejo|El mando es una petición que se refuerza cuando el oyente da lo pedido. El tacto nombra algo presente.",
      "¿Qué sostuvo MacCorquodale (1970)?|Que Chomsky malinterpretó a Skinner|Que Skinner sí había hecho experimentos|Que el lenguaje es una capacidad innata|Respondió que Chomsky criticaba una versión del conductismo que no era la de Skinner. El debate sigue abierto.",
      "¿Qué argumento de Chomsky se llamó después pobreza del estímulo?|Los niños aprenden deprisa con datos pobres|Los términos del laboratorio son metáforas|El lenguaje permite oraciones nunca oídas|El habla que oye el niño es limitada e imperfecta, y aun así adquiere en pocos años una gramática compleja."
    ],
    inc: [
      "Sobre la crítica de Chomsky|Fue un experimento con niños pequeños|Unió a lingüistas y psicólogos|Defendía una capacidad innata para el lenguaje|Era una reseña larga y muy dura de «Verbal Behavior» en «Language», no un experimento."
    ],
    seq: [
      "Debate sobre la conducta verbal|Verbal Behavior de Skinner (1957)>Reseña de Chomsky en Language (1959)>Respuesta de MacCorquodale (1970)"
    ],
    cls: [
      "Autor|Skinner: mando; tacto; lenguaje como conducta operante|Chomsky: pobreza del estímulo; productividad; capacidad innata"
    ] },
  { t: "Los límites biológicos: Breland y Garcia",
    tip: "El conductismo clásico suponía la equipotencialidad: cualquier respuesta se asocia con cualquier estímulo o consecuencia, con leyes iguales en todas las especies. Breland y Breland (1961) describieron la deriva instintiva en mapaches y cerdos adiestrados. Garcia y Koelling (1966) mostraron que el malestar se asocia con el sabor y la descarga con la luz y el sonido, no al revés. Seligman (1970) lo generalizó con el concepto de preparación.",
    v: [
      "Equipotencialidad=Cualquier respuesta se asocia con cualquier estímulo, con leyes iguales en todas las especies",
      "The misbehavior of organisms=Artículo de Breland y Breland (1961) que parodiaba el libro de Skinner",
      "Deriva instintiva=La conducta aprendida se desliza hacia pautas de la especie ligadas a la comida",
      "Agua brillante, ruidosa y sabrosa=Estímulo compuesto de sabor, luz y sonido de Garcia y Koelling",
      "Aversión al sabor=Se forma con muy pocos emparejamientos y tolera demoras largas",
      "Preparación=Predisposición de cada especie a aprender ciertas asociaciones con facilidad",
      "Contrapreparación=Predisposición en contra de aprender ciertas asociaciones (Seligman)",
      "Keller y Marian Breland=Antiguos colaboradores de Skinner que adiestraban animales para espectáculos"
    ],
    g: [
      "El mapache de los Breland, en lugar de soltar las monedas, las ___ entre sí.|frotaba|golpeaba|ordenaba",
      "Los cerdos de los Breland acababan ___ las monedas de madera.|hozando|frotando|lavando",
      "En Garcia y Koelling, la descarga eléctrica se asociaba sobre todo con los estímulos ___.|audiovisuales|gustativos|olfativos",
      "El malestar gastrointestinal se producía por radiación o por cloruro de ___.|litio|sodio|potasio",
      "Seligman propuso el concepto de preparación en ___.|1970|1961|1966"
    ],
    tf: [
      "En Garcia y Koelling, el malestar gastrointestinal se asociaba con la luz y el sonido.|F|Se asociaba con el sabor. La luz y el sonido se asociaban con la descarga eléctrica.",
      "La aversión al sabor puede formarse con un solo emparejamiento y con demoras largas.|V",
      "Los hallazgos de Breland y Garcia destruyeron el análisis de conducta.|F|No lo destruyeron, pero obligaron a incorporar la biología y la evolución.",
      "Los Breland describieron fracasos sistemáticos al adiestrar animales con técnicas operantes.|V"
    ],
    q: [
      "Tras intoxicarse con mejillones, alguien los evita durante años, aunque el malestar llegara horas después, pero no evita la música que sonaba en el restaurante. ¿Qué lo explica mejor?|La preparación para el sabor|La deriva instintiva del animal|La equipotencialidad de estímulos|Cada especie está preparada para asociar ciertos estímulos con ciertas consecuencias, como el sabor con el malestar.",
      "¿Por qué el resultado de Garcia y Koelling cuestiona la equipotencialidad?|La asociación depende del tipo de estímulo|El aprendizaje exige muchas repeticiones|Las ratas no aprenden con descargas|El malestar se asocia con el sabor y la descarga con lo audiovisual, no al revés. No todo estímulo se asocia igual.",
      "¿Qué es la deriva instintiva?|Conducta aprendida que vuelve a pautas innatas|Miedo aprendido que se extiende a estímulos|Respuesta que reaparece tras la extinción|Con la práctica, la conducta entrenada se desliza hacia pautas instintivas de la especie ligadas a la comida.",
      "¿Qué título parodiaba el artículo de Breland y Breland?|The Behavior of Organisms|Science and Human Behavior|Beyond Freedom and Dignity|«The misbehavior of organisms» (1961) parodiaba el primer gran libro de Skinner (1938)."
    ],
    inc: [
      "Sobre los límites biológicos|Las leyes del aprendizaje son iguales en todas las especies|El cerdo trata la moneda como algo que se busca escarbando|Lo que puede aprenderse está limitado por la biología|Esa es la equipotencialidad que estos trabajos refutaron. Seligman (1970) habló de asociaciones preparadas y contrapreparadas."
    ],
    seq: [
      "Procedimiento de Garcia y Koelling|Beber agua con sabor, luz y sonido>Malestar gastrointestinal o descarga eléctrica>Prueba por separado del agua con sabor y del agua con luz y sonido"
    ],
    cls: [
      "Combinación de Garcia y Koelling|Evitación fuerte: malestar con sabor; descarga con luz y sonido|Evitación débil: malestar con luz y sonido; descarga con sabor"
    ] }
] },
{ n: 12, t: "La revolución cognitiva y la psicología como ciencia hoy", cap: 4, pir: "alta", mods: [
  { t: "Los orígenes: Hixon, MIT y Miller",
    tip: "La psicología cognitiva surgió de la convergencia de disciplinas tras la guerra: la teoría de la información de Shannon, la cibernética de Wiener, el ordenador y la pregunta de Turing (1950). En el simposio Hixon (1948), Lashley defendió que las secuencias rápidas exigen un plan central jerárquico. El 11 de septiembre de 1956, en el MIT, coincidieron Newell y Simon, Chomsky y Miller. Miller (1956) situó el límite en siete más o menos dos y aportó el concepto de fragmento.",
    v: [
      "Teoría de la información=Herramienta conceptual de Shannon surgida en la posguerra",
      "Cibernética=Propuesta de Wiener basada en la retroalimentación y el control",
      "Simposio Hixon=Reunión de 1948 en Caltech con psicólogos, matemáticos y neurofisiólogos",
      "Problema del orden serial=Las secuencias rápidas exigen un plan central jerárquico (Lashley)",
      "Logic Theorist=Programa de Newell y Simon que demostraba teoremas imitando el razonamiento",
      "Fragmento (chunk)=Unidad con sentido en que se mide la capacidad de la memoria inmediata",
      "Amplitud del juicio absoluto=Categorías de un estímulo que se distinguen sin errores",
      "Miller, Galanter y Pribram=Autores de «Plans» (1960), con unidades de control y retroalimentación"
    ],
    g: [
      "Turing planteó en 1950, en la revista ___, si una máquina puede pensar.|Mind|Language|Science",
      "En el simposio Hixon, John von Neumann comparó el cerebro con el ___.|ordenador|telégrafo|termostato",
      "El encuentro de Dartmouth (1956) se considera el inicio de la ___ como campo.|inteligencia artificial|neurociencia cognitiva|teoría de la información",
      "Broadbent (___) propuso un modelo de la atención como canal limitado con un filtro.|1958|1956|1967",
      "En 1960, Bruner y ___ fundaron el Centro de Estudios Cognitivos de Harvard.|Miller|Neisser|Chomsky"
    ],
    tf: [
      "Lashley defendió en el simposio Hixon que hablar o tocar el piano son cadenas de estímulo y respuesta.|F|Defendió lo contrario: los movimientos son demasiado rápidos, así que tiene que haber un plan central jerárquico.",
      "El 11 de septiembre de 1956 coincidieron en el MIT Newell y Simon, Chomsky y Miller.|V",
      "Miller (1956) revisaba la amplitud del juicio absoluto y la de la memoria inmediata.|V",
      "Según Miller, la memoria inmediata se mide en unidades físicas, como letras o dígitos sueltos.|F|Se mide en fragmentos con sentido. Decir que Miller habla de ítems es una trampa típica."
    ],
    q: [
      "Una pianista toca una pieza tan deprisa que cada movimiento no puede ser el estímulo del siguiente. ¿Quién usó este argumento y contra qué?|Lashley, contra el asociacionismo|Miller, contra el innatismo|Chomsky, contra la cibernética|En el simposio Hixon (1948), Lashley señaló que las secuencias rápidas exigen un plan central organizado jerárquicamente.",
      "¿Qué estudiaba «A Study of Thinking» (1956), de Bruner, Goodnow y Austin?|Estrategias para formar conceptos|Límites del juicio absoluto|Demostración de teoremas lógicos|Trataba un tema mentalista que el conductismo había evitado: cómo forman conceptos las personas.",
      "¿Qué presentaron Newell y Simon en el simposio del MIT de 1956?|El Logic Theorist|El perceptrón|La prueba de Turing|Un programa que demostraba teoremas lógicos imitando el razonamiento humano.",
      "¿Cuál fue la aportación decisiva de Miller (1956)?|El concepto de fragmento|El límite de cuatro elementos|El modelo de filtro atencional|Recodificar en fragmentos mayores permite superar el límite aparente. El filtro es de Broadbent, y los cuatro, de Cowan."
    ],
    inc: [
      "Sobre los orígenes de la psicología cognitiva|Surgió en un solo día en el MIT|Se apoyó en la teoría de la información|Recibió el impulso del esfuerzo bélico|No nació en un día: surgió de la convergencia de varias disciplinas en los quince años posteriores a la guerra."
    ],
    seq: [
      "Hitos de la revolución cognitiva|Simposio Hixon (1948)>Simposio del MIT (1956)>Modelo de Broadbent (1958)>Reseña de Chomsky (1959)>Centro de Harvard y Plans (1960)"
    ],
    cls: [] },
  { t: "Consolidación: procesamiento de la información",
    tip: "Neisser (1967) dio nombre al campo y definió la cognición como los procesos que transforman, reducen, elaboran, almacenan, recuperan y usan la información sensorial. La metáfora del ordenador tenía una versión débil, el ordenador como modelo, y otra fuerte, la mente como cómputo de símbolos (Newell y Simon). Atkinson y Shiffrin (1968) propusieron el modelo modal, y Cowan (2001) rebajó el límite de Miller a unos cuatro fragmentos al controlar agrupación y repaso.",
    v: [
      "Cognitive Psychology=Libro de Neisser (1967) que dio nombre y forma al campo",
      "Versión débil=El ordenador sirve de modelo para describir procesos mentales",
      "Versión fuerte=La mente es un sistema de cómputo que manipula símbolos",
      "Diagrama de flujo=Cajas de almacenes o procesos y flechas que indican el paso de la información",
      "Mentalismo=La conducta no se explica sin representaciones y procesos mentales",
      "Capacidad limitada=Supuesto de límites de cantidad, de tiempo y de recursos del sistema",
      "Modelo modal=Registros sensoriales, almacén a corto y a largo plazo (Atkinson y Shiffrin, 1968)",
      "Cowan (2001)=Estimó la capacidad central a corto plazo en unos cuatro fragmentos"
    ],
    g: [
      "Neisser publicó «Cognitive Psychology» en ___.|1967|1956|1968",
      "La versión fuerte de la metáfora la sostenía la ciencia cognitiva clásica de Newell y ___.|Simon|Miller|Bruner",
      "El supuesto del ___ afirma que la mente puede estudiarse en su propio nivel, como un programa sin el circuito.|funcionalismo|mentalismo|conexionismo",
      "Un número de móvil de nueve cifras dividido en tres bloques ocupa ___ fragmentos.|tres|nueve|siete",
      "Autores como ___ ven el paso al cognitivismo más como una evolución acelerada que como una ruptura.|Leahey|Kuhn|Danziger"
    ],
    tf: [
      "En la versión débil de la metáfora, una simulación adecuada en el ordenador sí es pensamiento.|F|Eso afirma la versión fuerte. En la débil, el programa simula la mente, pero no es una mente.",
      "La psicología cognitiva heredó del conductismo el laboratorio y la búsqueda de leyes generales.|V",
      "Cowan (2001) demostró que Miller había descrito mal sus datos.|F|Miller no se equivocó al describirlos: Cowan midió otra cosa, la capacidad sin ayuda del repaso ni de la agrupación.",
      "A finales de los años setenta, la ciencia cognitiva se organizó como campo interdisciplinar propio.|V"
    ],
    q: [
      "Un investigador construye un programa que resuelve problemas y sostiene que, si su ejecución es adecuada, el programa piensa. ¿Qué postura defiende?|La versión fuerte de la metáfora|La versión débil de la metáfora|El conexionismo de redes|Identificar mente y cómputo de símbolos es la versión fuerte, propia de la ciencia cognitiva clásica (Newell y Simon).",
      "¿Qué método principal se asocia a la versión débil de la metáfora del ordenador?|Experimentos con personas|Programas y modelos formales|Registros de neuroimagen|La psicología cognitiva experimental (Miller, Bruner, Broadbent) usaba el laboratorio. Los modelos formales son de la versión fuerte.",
      "¿Por qué la estimación de Cowan (2001) es menor que la de Miller?|Controla la agrupación y el repaso|Mide la memoria a largo plazo activa|Usa solo material visual sin sentido|El siete de Miller mezclaba datos en los que se podía agrupar o repasar. Sin esa ayuda, la capacidad ronda cuatro fragmentos.",
      "¿Qué supuesto cognitivo afirma que los procesos mentales son operaciones sobre representaciones?|La computación|El mentalismo|El funcionalismo|El mentalismo exige recurrir a representaciones, y el funcionalismo permite estudiar la mente en su propio nivel."
    ],
    inc: [
      "Sobre la consolidación cognitiva|El modelo modal se propuso en 1958|Neisser dio nombre al campo en 1967|El modelo modal usaba cajas y flechas|El modelo modal es de Atkinson y Shiffrin (1968). En 1958 Broadbent propuso su modelo de filtro atencional."
    ],
    seq: [],
    cls: [
      "Metáfora del ordenador|Versión débil: Miller; Bruner; Broadbent; experimentos de laboratorio|Versión fuerte: Newell y Simon; cómputo de símbolos; modelos formales"
    ] },
  { t: "Conexionismo y neurociencia cognitiva",
    tip: "En los años ochenta, los programas simbólicos fallaban en tareas cotidianas y no se degradaban como el cerebro, que no parecía un procesador serial. El conexionismo, con precedentes en McCulloch y Pitts (1943) y Rosenblatt (1958), recibió su gran impulso con el grupo PDP (1986): unidades simples, pesos, conocimiento distribuido, aprendizaje y procesamiento paralelo. La neurociencia cognitiva se apoyó en la neuropsicología cognitiva, la neuroimagen y la «década del cerebro».",
    v: [
      "Conexionismo=Cognición surgida de redes de unidades simples con pesos ajustables",
      "Peso de conexión=Valor que determina cuánto influye una unidad en otra",
      "Conocimiento distribuido=Guardado en el patrón de pesos de toda la red, no en un lugar",
      "Degradación gradual=Pérdida progresiva de rendimiento al eliminar unidades, como en el cerebro",
      "Grupo PDP (1986)=Rumelhart, McClelland y colaboradores, gran impulso del procesamiento paralelo",
      "Perceptrón=Precedente de las redes propuesto por Rosenblatt (1958)",
      "Doble disociación=Un paciente conserva A y pierde B, y otro muestra el patrón inverso",
      "Década del cerebro=Nombre dado en Estados Unidos a los años noventa"
    ],
    g: [
      "La neurona formal de McCulloch y Pitts es de ___.|1943|1958|1986",
      "El cerebro no parecía un procesador ___ que sigue reglas paso a paso.|serial|paralelo|distribuido",
      "Desde los años noventa, la ___ permite observar la actividad cerebral durante una tarea.|resonancia magnética funcional|neuropsicología cognitiva|psicofísica de Fechner",
      "La idea de que «solo usamos el ___ del cerebro» es un mito sin base.|10 %|50 %|30 %",
      "Leer una imagen de activación como si localizara un proceso complejo en un punto recuerda a la ___.|frenología|psicofísica|cibernética"
    ],
    tf: [
      "En una red conexionista, alguien debe programar las reglas explícitas que sigue la red.|F|La red aprende ajustando los pesos a partir de la experiencia, sin reglas explícitas programadas.",
      "Una red entrenada con verbos en pasado puede aplicar la regularidad a verbos nuevos sin ninguna regla escrita.|V",
      "Los programas simbólicos clásicos fallaban sobre todo en problemas formales como el ajedrez.|F|Resolvían bien los problemas formales y fallaban en tareas cotidianas, como reconocer un objeto parcialmente oculto.",
      "Las redes neuronales profundas de la inteligencia artificial actual descienden de la tradición conexionista.|V"
    ],
    q: [
      "Un paciente conserva la lectura y pierde el cálculo, y otro pierde la lectura y conserva el cálculo. ¿Qué forman ambos casos?|Una doble disociación|Una disociación simple|Una degradación gradual|La neuropsicología cognitiva infiere la arquitectura de la mente a partir de patrones opuestos en pacientes distintos.",
      "¿Qué rasgo de las redes conexionistas se parece al cerebro dañado?|Se degradan de forma gradual|Se bloquean si falla una regla|Guardan cada concepto en una unidad|Al eliminar unidades, el rendimiento baja poco a poco. Un programa clásico se bloquea si falla una instrucción.",
      "¿Qué trabajo dio el gran impulso al conexionismo?|Los dos volúmenes del grupo PDP (1986)|El perceptrón de Rosenblatt (1958)|La neurona formal de McCulloch y Pitts|McCulloch y Pitts (1943) y Rosenblatt (1958) fueron precedentes. El impulso llegó con Rumelhart, McClelland y el grupo PDP.",
      "¿Qué riesgo se señala al interpretar imágenes de neuroimagen?|Creer que localizan un proceso complejo|Creer que el cerebro funciona en paralelo|Creer que hay disociaciones dobles|Leer una activación como si localizara un proceso complejo en un punto es una tentación que recuerda a la frenología."
    ],
    inc: [
      "Sobre el conexionismo|El conocimiento reside en una unidad concreta|Muchas unidades trabajan a la vez en paralelo|La red aprende ajustando los pesos de conexión|El conocimiento está distribuido en el patrón de pesos de toda la red, no guardado en un lugar."
    ],
    seq: [
      "Tradición conexionista|Neurona formal de McCulloch y Pitts (1943)>Perceptrón de Rosenblatt (1958)>Grupo PDP (1986)>Redes neuronales profundas actuales"
    ],
    cls: [
      "Modelo|Simbólico clásico: procesamiento serial; reglas explícitas; se bloquea si falla una instrucción|Conexionista: procesamiento paralelo; pesos ajustables; degradación gradual"
    ] },
  { t: "La crisis de replicación y la ciencia abierta",
    tip: "En la década de 2010, muchos hallazgos conocidos no se reproducían. La Open Science Collaboration (2015) repitió 100 estudios: solo el 36 % de las réplicas fue significativo, frente al 97 % de los originales, y el efecto medio bajó a la mitad, aunque una réplica fallida no prueba que el efecto fuera falso. Many Labs mostró efectos robustos, como el anclaje, y otros frágiles. Frente al sesgo de publicación, las muestras pequeñas y la flexibilidad analítica, la ciencia abierta propone prerregistro, informes registrados, datos abiertos y potencia suficiente.",
    v: [
      "Crisis de replicación=Muchos hallazgos publicados no se reproducían o eran menores de lo descrito",
      "Open Science Collaboration=Repitió en 2015 cien estudios publicados en 2008 en tres revistas",
      "Many Labs=Proyectos que repitieron los mismos estudios en muchos laboratorios a la vez",
      "Anclaje=Estimaciones numéricas sesgadas hacia un número presentado antes",
      "Sesgo de publicación=Preferencia de las revistas por resultados positivos y novedosos",
      "Flexibilidad analítica=Probar análisis o exclusiones hasta lograr un resultado significativo",
      "Prerregistro=Registro público de hipótesis, diseño y análisis antes de recoger los datos",
      "Informe registrado=La revista acepta el proyecto antes de conocer los resultados"
    ],
    g: [
      "En la Open Science Collaboration, el ___ de las réplicas dio un resultado significativo.|36 %|47 %|97 %",
      "El tamaño del efecto medio pasó de una r de 0,403 a una r de ___.|0,197|0,301|0,036",
      "En ___ de 99 estudios, el efecto original fue mayor que el de la réplica.|82|47|36",
      "El efecto original cayó dentro del intervalo de confianza del 95 % de la réplica en el ___ de los casos.|47 %|39 %|36 %",
      "Los datos y materiales abiertos se depositan en repositorios como el ___.|OSF|PDP|ABA"
    ],
    tf: [
      "Que una réplica no alcance significación demuestra que el efecto original era falso.|F|No lo demuestra: el efecto puede ser más pequeño de lo que se creía o depender de condiciones concretas.",
      "El 39 % de la Open Science Collaboration corresponde a la valoración subjetiva de los equipos.|V",
      "La lectura más aceptada es que la crisis de replicación es una autocorrección institucional en curso.|V",
      "Las causas señaladas de la crisis suponen mala fe de los investigadores.|F|Ninguna exige mala fe: basta con incentivos que premian publicar mucho y llamativo."
    ],
    q: [
      "En un trabajo de fin de grado se miden diez variables y solo se informa de la que salió significativa. ¿Qué práctica habría evitado el problema?|El prerregistro del plan|Una muestra más pequeña|Un análisis más flexible|Con hipótesis y análisis registrados de antemano, cualquiera puede comprobar qué se predijo y qué se encontró.",
      "Un titular afirma que «solo el 36 % de la psicología es verdad». ¿Qué error comete?|Confunde réplicas significativas con efectos ciertos|Confunde el 36 % con el tamaño del efecto medio|Ignora que el 97 % de las réplicas fue significativo|El 36 % son réplicas significativas, no el porcentaje de efectos verdaderos. Confundirlos es la trampa típica.",
      "¿Qué se ha visto en los proyectos Many Labs?|Efectos robustos y otros frágiles|Que no se replica ningún efecto|Que todos los efectos se replican|El anclaje resultó muy robusto, y varios efectos de priming social se mostraron frágiles.",
      "¿Qué caracteriza a un informe registrado?|Se acepta antes de conocer los resultados|Se publica solo si el efecto es significativo|Se registra tras analizar los datos|La revista evalúa y acepta el proyecto antes de los resultados, que se publican sean cuales sean."
    ],
    inc: [
      "Sobre la crisis de replicación|Milgram no se replica en absoluto|El anclaje se replicó en Many Labs|El sesgo de publicación es una causa señalada|La obediencia de Milgram se replica en parte. Lo muy discutido es la validez del experimento de la prisión de Stanford."
    ],
    seq: [],
    cls: [
      "Concepto|Causa: sesgo de publicación; muestras pequeñas; flexibilidad analítica|Remedio: prerregistro; informes registrados; datos abiertos; potencia estadística"
    ] }
] }
);

// SAIMAP Psicología · Historia · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "La segunda fuerza: el psicoanálisis después de Freud", cap: 4, pir: "media", mods: [
  { t: "La psicología del yo",
    tip: "Tras la muerte de Freud (Londres, 1939), el psicoanálisis se ramificó en varias orientaciones que conservaban el método clínico. La psicología del yo, dominante en el psicoanálisis estadounidense de posguerra, parte del modelo estructural de 1923 y da al yo un papel activo. Anna Freud (1936) sistematizó los mecanismos de defensa y Hartmann (1939) propuso una esfera del yo libre de conflicto centrada en la adaptación, lo que convirtió el psicoanálisis en una psicología general.",
    v: [
      "Psicología del yo=Orientación estadounidense de posguerra centrada en funciones adaptativas",
      "Mecanismos de defensa=Procesos con los que el yo maneja la angustia, sistematizados en 1936",
      "Esfera libre de conflicto=Funciones del yo que se desarrollan al margen del conflicto pulsional",
      "Adaptación=Concepto central de Hartmann: el yo ajusta a la persona a su entorno",
      "Modelo estructural=Propuesta freudiana de 1923 que distingue ello, yo y superyó",
      "Anna Freud=Autora de «El yo y los mecanismos de defensa» (1936)",
      "Heinz Hartmann=Autor que en 1939 dotó al yo de funciones propias desde el principio",
      "Estadios psicosociales=Etapas de Erikson a lo largo del ciclo vital, cada una con su crisis"
    ],
    g: [
      "Anna Freud publicó «El yo y los mecanismos de defensa» en ___.|1936|1939|1923",
      "Para Hartmann, el concepto central de la psicología del yo es la ___.|adaptación|represión|sublimación",
      "Erikson desplazó el acento desde la sexualidad infantil hacia el contexto ___.|social y cultural|biológico y pulsional|familiar y edípico",
      "La psicología del yo arraigó en Estados Unidos sobre todo en el ámbito ___.|médico y psiquiátrico|universitario y experimental|educativo y escolar",
      "Freud había descrito el yo sobre todo como un mediador ___.|débil|autónomo|innato"
    ],
    tf: [
      "Hartmann (1939) sostuvo que funciones como la percepción o la memoria se desarrollan en una esfera libre de conflicto.|V",
      "Anna Freud defendió una técnica de análisis infantil más audaz e interpretativa que la de Melanie Klein.|F|Fue al revés: Anna Freud defendió una técnica infantil más educativa y prudente que la de Klein.",
      "Al interesarse por el funcionamiento normal, la psicología del yo convirtió el psicoanálisis en una psicología general.|V",
      "Adler y Jung se separaron de Freud tras su muerte en 1939.|F|Fueron disidencias tempranas, en vida de Freud: Adler se separó en 1911 y Jung en 1913."
    ],
    q: [
      "Un estudiante se queda en blanco en cada examen oral, aunque prepara bien y escribe con soltura. ¿Qué añadiría un psicólogo del yo a la lectura freudiana clásica?|Sus recursos adaptativos y sus defensas|El deseo reprimido que el examen reactiva|La crisis psicosocial de su identidad|Sin abandonar el conflicto, la psicología del yo examina también las funciones que sí funcionan y cómo se defiende el paciente.",
      "¿Qué autor convirtió la adaptación en el concepto central de la psicología del yo?|Heinz Hartmann|Erik Erikson|Anna Freud|Hartmann (1939) concibió el yo como un órgano que ajusta a la persona a su entorno.",
      "¿Qué cambio introdujo Anna Freud en el foco del análisis?|Examinar cómo se defiende el paciente|Analizar a niños mediante el juego libre|Situar los conflictos en el primer año|Al sistematizar las defensas, el análisis dejó de centrarse solo en desenterrar contenidos inconscientes.",
      "¿Qué factor explica en parte que la psicología del yo arraigara en Estados Unidos?|La emigración de analistas centroeuropeos|El auge de la antropología cultural|La influencia de la lingüística francesa|Con el ascenso del nazismo, muchos analistas centroeuropeos emigraron a Estados Unidos."
    ],
    inc: [
      "Sobre la psicología del yo|Erikson centró el desarrollo en la sexualidad infantil|Hartmann la convirtió en una psicología general|Anna Freud sistematizó los mecanismos de defensa|Erikson desplazó el acento desde la sexualidad infantil hacia la relación con el contexto social y cultural."
    ],
    seq: [
      "Del primer Freud a la psicología del yo|Ruptura de Adler (1911)>Ruptura de Jung (1913)>Modelo estructural (1923)>Mecanismos de defensa de Anna Freud (1936)>Esfera libre de conflicto de Hartmann (1939)"
    ],
    cls: [] },
  { t: "La teoría de las relaciones de objeto",
    tip: "En psicoanálisis, objeto es la persona hacia la que se dirige un vínculo intenso o su representación interna. Esta tradición, sobre todo británica, explica la personalidad por las primeras relaciones con las figuras de cuidado. Klein describió las posiciones esquizoparanoide y depresiva, Winnicott el objeto transicional y la madre suficientemente buena, y Fairbairn (1952) sostuvo que la libido busca el objeto, no el placer.",
    v: [
      "Objeto=Persona hacia la que se dirige un vínculo intenso, o su representación interna",
      "Posición esquizoparanoide=El bebé divide a la madre en buena y mala y proyecta fuera su agresividad",
      "Posición depresiva=El bebé integra lo bueno y lo malo de la madre y aparecen culpa y reparación",
      "Objeto transicional=Mantita o peluche que ayuda a tolerar la separación de la madre",
      "Madre suficientemente buena=Atiende al bebé sin ser perfecta, y sus fallos tolerables le dan recursos",
      "Ronald Fairbairn=Autor de la versión más sistemática (1952): la libido busca relación",
      "Juego infantil=Equivalente kleiniano de la asociación libre del adulto",
      "Teoría del apego=Programa empírico de Bowlby sobre la separación real, apoyado en la etología"
    ],
    g: [
      "Klein habló de ___ y no de fases porque el adulto puede oscilar entre ellas toda la vida.|posiciones|estadios|etapas",
      "Fairbairn formuló su tesis central sobre la libido en ___.|1952|1936|1939",
      "Klein situó los conflictos decisivos ___ del complejo de Edipo.|antes|después|a la vez",
      "Winnicott era, además de analista, ___.|pediatra|neurólogo|etólogo",
      "Para Fairbairn, la libido busca ante todo ___.|la relación|el placer|la descarga"
    ],
    tf: [
      "Klein situó los conflictos decisivos en el primer año de vida, antes del complejo de Edipo.|V",
      "En la posición esquizoparanoide el bebé ya reconoce que el objeto bueno y el malo son la misma persona.|F|Ese reconocimiento define la posición depresiva. En la esquizoparanoide, el bebé divide a la madre en buena y mala.",
      "La madre suficientemente buena de Winnicott es la que evita cualquier fallo en la atención al bebé.|F|No es perfecta: sus pequeños fallos tolerables permiten que el niño desarrolle recursos propios.",
      "Bowlby, insatisfecho con explicaciones basadas solo en la fantasía, estudió la separación real de los niños.|V"
    ],
    q: [
      "Una adolescente pasa en pocos días de idealizar a una amiga a considerarla una traidora. ¿Con qué concepto lo relacionaría la teoría de las relaciones de objeto?|Con la posición esquizoparanoide|Con la ansiedad básica de Horney|Con la posición depresiva kleiniana|La dificultad para integrar lo bueno y lo malo de la misma persona remite a la posición esquizoparanoide de Klein.",
      "¿Qué técnica empleó Melanie Klein con niños muy pequeños?|El análisis del juego|La asociación libre|La interpretación de sueños|Klein trataba el juego infantil como equivalente de la asociación libre del adulto.",
      "¿Qué rasgo distingue las relaciones de objeto de la psicología del yo?|Su interés por la patología grave temprana|Su foco en la adaptación al entorno|Su arraigo en el psicoanálisis estadounidense|Las relaciones de objeto, británicas, privilegian los primeros meses y la psicopatología grave de origen temprano.",
      "¿Por qué el apego de Bowlby es un buen ejemplo para la historia del psicoanálisis?|Una idea analítica que halló vía experimental|Fundamentó la técnica infantil de Melanie Klein|Sustituyó la etología por la fantasía infantil|Nació en el clima psicoanalítico británico y se convirtió en un sólido programa de investigación empírica."
    ],
    inc: [
      "Sobre la teoría de las relaciones de objeto|Es sobre todo una tradición estadounidense|Klein y Anna Freud mantuvieron fuertes controversias|Fairbairn rompió con la idea freudiana del placer|Es sobre todo una tradición británica. La que dominó en Estados Unidos fue la psicología del yo."
    ],
    seq: [],
    cls: [
      "Concepto y autor|Klein: posición esquizoparanoide; posición depresiva; análisis del juego|Winnicott: objeto transicional; madre suficientemente buena|Fairbairn: la libido busca el objeto"
    ] },
  { t: "El psicoanálisis culturalista",
    tip: "El psicoanálisis culturalista, interpersonal o neofreudiano, se desarrolló en Estados Unidos entre los años treinta y cincuenta. Invierte el planteamiento freudiano: buena parte de lo que parece naturaleza humana es producto de la cultura y de las relaciones. Horney (1937) habló de ansiedad básica, Fromm (1941) del miedo a la libertad y Sullivan (1953) de una teoría interpersonal. No formaron una escuela con doctrina común.",
    v: [
      "Ansiedad básica=Soledad e indefensión ante un mundo hostil, origen de la neurosis según Horney",
      "Karen Horney=Autora de «La personalidad neurótica de nuestro tiempo» (1937)",
      "Erich Fromm=Autor de «El miedo a la libertad» (1941)",
      "Harry Stack Sullivan=Propuso en 1953 una teoría interpersonal de la psiquiatría",
      "Huida de la libertad=Autoritarismo, destructividad o conformismo ante el aislamiento moderno",
      "Personalidad según Sullivan=Patrón relativamente estable de las relaciones con los demás",
      "Neofreudianos=Otro nombre de los autores culturalistas o interpersonales",
      "Estrategias de Horney=Acercarse de forma sumisa, enfrentarse o alejarse para calmar la angustia"
    ],
    g: [
      "Fromm escribió «El miedo a la libertad» en ___, en pleno auge del nazismo.|1941|1937|1953",
      "Horney atribuyó a factores ___ lo que Freud explicaba por la anatomía femenina.|sociales|biológicos|pulsionales",
      "Los culturalistas restan peso a la teoría de la ___.|libido|adaptación|ansiedad",
      "Para Sullivan, la terapia examina cómo se repiten las relaciones, incluida la relación con el ___.|terapeuta|padre|grupo",
      "Los culturalistas dan más importancia al contexto ___ que a la reconstrucción del pasado infantil.|actual|biológico|edípico"
    ],
    tf: [
      "Los autores culturalistas formaron una escuela con una doctrina común bien definida.|F|No formaron una escuela con doctrina común. Los une la inversión del planteamiento freudiano a favor de la cultura.",
      "Para los culturalistas, buena parte de lo que parece naturaleza humana es producto de la cultura.|V",
      "La ansiedad básica es un concepto de Erich Fromm sobre la huida de la libertad.|F|La ansiedad básica es de Karen Horney (1937). Fromm analizó la huida de la libertad mediante autoritarismo o conformismo.",
      "Horney y Fromm figuran entre los precursores que reconocía la psicología humanista.|V"
    ],
    q: [
      "Una persona no se atreve a rechazar ningún encargo y repite el patrón con cada jefe. ¿Qué autor lo describiría como un patrón interpersonal aprendido?|Sullivan|Horney|Fromm|Sullivan concibe la personalidad como el patrón estable de relaciones. Horney hablaría de acercamiento sumiso ante la ansiedad básica.",
      "¿Qué autor analizó por qué tantas personas modernas renuncian a su autonomía?|Erich Fromm|Karen Horney|Alfred Adler|En «El miedo a la libertad» (1941), Fromm explica la huida de la libertad mediante autoritarismo, destructividad o conformismo.",
      "¿Qué inversión une a los autores culturalistas frente a Freud?|La cultura explica parte de la naturaleza humana|La naturaleza humana explica toda la cultura|El yo nace libre de todo conflicto pulsional|Para Freud la cultura se explica desde las pulsiones. Para los culturalistas, mucho de lo «natural» es producto cultural.",
      "Un examen atribuye el complejo de inferioridad a Karen Horney. ¿Dónde está el error?|El concepto es de Adler|El concepto es de Fromm|El concepto es de Sullivan|Es una trampa típica: el complejo de inferioridad es de Adler, disidente temprano, no de un posfreudiano."
    ],
    inc: [
      "Sobre el psicoanálisis culturalista|Concede un papel central a la sexualidad infantil|Atiende a las diferencias entre culturas y épocas|Prefiere una terapia centrada en conflictos presentes|Los culturalistas restan peso a la teoría de la libido y al papel central de la sexualidad."
    ],
    seq: [],
    cls: [
      "Orientación posfreudiana|Psicología del yo: Anna Freud; Hartmann; Erikson|Relaciones de objeto: Klein; Winnicott; Fairbairn|Culturalismo: Horney; Fromm; Sullivan"
    ] },
  { t: "El psicoanálisis hermenéutico y la herencia actual",
    tip: "Ricoeur (1965) y Habermas (1968) propusieron leer el psicoanálisis como un método de interpretación que busca sentidos, no como una ciencia natural que busca causas. Lacan (1966) sostuvo que el inconsciente está estructurado como un lenguaje. Grünbaum (1984) replicó que Freud hacía afirmaciones causales que deben contrastarse. Hoy se separan tres planos: metapsicología poco contrastable, conceptos generales con apoyo indirecto y terapias psicodinámicas con evidencia (Shedler, 2010).",
    v: [
      "Hermenéutica=Disciplina de la interpretación de textos",
      "Paul Ricoeur=Filósofo que en 1965 leyó a Freud como método de interpretación",
      "Jürgen Habermas=Autor de «Conocimiento e interés» (1968)",
      "Jacques Lacan=Analista que quedó fuera de la asociación internacional y fundó su escuela en París",
      "Retorno a Freud=Programa de Lacan que relee a Freud a través de la lingüística (1966)",
      "Grünbaum (1984)=Crítico que exige contrastar las afirmaciones causales de Freud",
      "Metapsicología=Teoría de la libido, pulsión de muerte y aparato psíquico, poco contrastable",
      "Terapia psicodinámica actual=Breve, focal y centrada en la relación"
    ],
    g: [
      "Para Lacan, el inconsciente está estructurado como un ___.|lenguaje|texto|sueño",
      "Grünbaum recordó que el propio Freud hacía afirmaciones ___ que deben someterse a prueba.|causales|interpretativas|literarias",
      "Lacan quedó fuera de la asociación psicoanalítica internacional y fundó su propia escuela en ___.|París|Londres|Viena",
      "Habermas expuso su lectura del psicoanálisis en «Conocimiento e ___» (1968).|interés|interpretación|sentido",
      "Los procesos no conscientes y las defensas pertenecen al plano de los conceptos ___.|generales|metapsicológicos|terapéuticos"
    ],
    tf: [
      "Para la lectura hermenéutica, la prueba de una interpretación es que tenga sentido para el paciente y le permita vivir mejor.|V",
      "La eficacia de la terapia psicodinámica breve valida por sí sola la metapsicología freudiana.|F|Es una trampa típica: la terapia actual es breve, focal y relacional, y su eficacia no valida la metapsicología.",
      "La influencia de Lacan ha sido mayor en la psicología académica anglosajona que en el mundo hispanohablante.|F|Fue al revés: grande en Francia y en buena parte del mundo hispanohablante, y menor en la academia anglosajona.",
      "Grünbaum (1984) sostuvo que una interpretación que convence al paciente no demuestra que sea verdadera.|V"
    ],
    q: [
      "Un compañero afirma que el psicoanálisis carece de toda base empírica. ¿Qué dato lo matiza mejor?|La evidencia de las terapias psicodinámicas|La crítica de Grünbaum a la hermenéutica|El retorno a Freud propuesto por Lacan|Shedler (2010) recoge, por ejemplo, un d de 0,97 en mejora general con terapia psicodinámica breve (Abbass et al., 2006).",
      "¿Qué estatuto atribuyen Ricoeur y Habermas al psicoanálisis?|Método de interpretación de sentidos|Ciencia natural que busca causas|Teoría lingüística del inconsciente|Proponen que el analista se parezca más a un lector de textos que a un físico.",
      "¿En qué plano sitúa la evaluación actual la pulsión de muerte?|Metapsicología poco contrastable|Concepto general con apoyo indirecto|Terapia con evidencia de eficacia|La pulsión de muerte, como la teoría de la libido, forma parte de la metapsicología, poco contrastable según Grünbaum.",
      "¿Qué precio tiene, según Grünbaum, la salida hermenéutica?|Elude contrastar afirmaciones causales|Renuncia a toda aplicación clínica|Reduce el análisis a la lingüística|Freud afirmaba que la represión causa los síntomas, y esas afirmaciones causales deben poder someterse a prueba."
    ],
    inc: [
      "Sobre la lectura hermenéutica|Busca causas como una ciencia natural|Lee el psicoanálisis como interpretación|La defendieron Ricoeur y Habermas|La lectura hermenéutica busca sentidos, no causas: el analista se parece más a un lector de textos que a un físico."
    ],
    seq: [
      "La discusión sobre el estatuto del psicoanálisis|Ricoeur (1965)>Lacan, «Escritos» (1966)>Habermas (1968)>Grünbaum (1984)>Shedler (2010)"
    ],
    cls: [
      "Lectura del psicoanálisis|Hermenéutica: Ricoeur; Habermas; búsqueda de sentidos; analista como lector de textos|Causal: Grünbaum; afirmaciones contrastables; la represión causa los síntomas"
    ] }
] },
{ n: 14, t: "La tercera fuerza: el movimiento humanista", cap: 4, pir: "media", mods: [
  { t: "El contexto: contracultura y crítica del reduccionismo",
    tip: "A comienzos de los sesenta, un grupo heterogéneo se presentó como tercera fuerza, expresión que usaron Maslow y Bugental, para completar al conductismo y al psicoanálisis más que para sustituirlos. Surgió en el clima de la contracultura. Reprochaba al conductismo su mecanicismo y reduccionismo, y al psicoanálisis su determinismo y pesimismo. Era un movimiento, no una escuela homogénea, holista, idiográfico y centrado en la experiencia de personas sanas.",
    v: [
      "Tercera fuerza=Nombre del humanismo como alternativa al conductismo y al psicoanálisis",
      "Holismo=La persona es un todo que no se entiende descomponiéndola en partes",
      "Contracultura=Clima juvenil de los sesenta que buscaba autenticidad, libertad y desarrollo",
      "Enfoque idiográfico=Atención al caso individual más que al promedio del grupo",
      "Mecanicismo=Reproche humanista al conductismo por tratar al ser humano como organismo reactivo",
      "Determinismo=Reproche humanista al psicoanálisis por ver a la persona movida por el inconsciente",
      "Método fenomenológico=Vía preferida por el humanismo para estudiar la experiencia vivida",
      "Gordon Allport=Teórico de la personalidad que inspiró el interés por el individuo concreto"
    ],
    g: [
      "La expresión «tercera fuerza» la usaron Maslow y ___.|Bugental|Rogers|Allport",
      "Del ___ europeo el humanismo tomó la atención a la libertad y la responsabilidad.|existencialismo|estructuralismo|positivismo",
      "De la Gestalt, el humanismo tomó el ___.|holismo|mecanicismo|asociacionismo",
      "Para el humanismo, el tiempo que importa es el presente y el ___.|proyecto futuro|pasado infantil|refuerzo previo",
      "Desde la historiografía ___, el humanismo muestra cómo el contexto social favorece unas preguntas y no otras.|externalista|internalista|presentista"
    ],
    tf: [
      "Los humanistas pretendían sobre todo sustituir al conductismo y al psicoanálisis.|F|No buscaban tanto sustituirlos como completarlos, ocupándose de lo que ambos dejaban fuera.",
      "El humanismo reprochaba al psicoanálisis describir a la persona a partir de pacientes y no de personas sanas.|V",
      "El humanismo era una escuela homogénea con un programa de investigación común.|F|Era un movimiento heterogéneo. Esa amplitud atrajo perfiles distintos, pero dificultó un programa de investigación común.",
      "La contracultura de los sesenta buscaba autenticidad, libertad y desarrollo personal.|V"
    ],
    q: [
      "Una persona lleva meses desmotivada en un trabajo estable. ¿Por dónde empezaría un psicólogo humanista?|Por cómo vive ella la situación|Por los refuerzos que ha perdido|Por el conflicto antiguo reactivado|El humanista parte de la experiencia subjetiva y del sentido. Los refuerzos perdidos serían la mirada conductista.",
      "¿Qué reproche dirigía el humanismo al conductismo?|Su mecanicismo reduccionista|Su pesimismo determinista|Su método idiográfico|Le criticaba estudiar al ser humano como un organismo que responde a estímulos, extrapolando desde ratas y palomas.",
      "¿Qué método caracteriza al humanismo?|Fenomenológico e idiográfico|Experimental y nomotético|Clínico e interpretativo|Experimental y nomotético es el método conductista, y clínico e interpretativo, el psicoanalítico.",
      "¿Qué fuente de datos privilegiaba el humanismo?|Experiencia de personas sanas|Clínica de pacientes neuróticos|Laboratorio, a menudo animal|El psicoanálisis partía de la clínica de pacientes y el conductismo, del laboratorio, a menudo animal."
    ],
    inc: [
      "Sobre el contexto del humanismo|Surgió en una época de crisis económica profunda|Conectó con el clima de la contracultura|Recogió influencias de la fenomenología|La sociedad de los sesenta vivía una prosperidad notable, junto a un malestar juvenil creciente."
    ],
    seq: [],
    cls: [
      "Fuerza|Conductismo: historia de refuerzo; predecir y controlar la conducta|Psicoanálisis: infancia; hacer consciente lo inconsciente|Humanismo: presente y proyecto futuro; favorecer el crecimiento"
    ] },
  { t: "Maslow y Rogers",
    tip: "Maslow (1943) ordenó las necesidades por su prepotencia: una necesidad muy insatisfecha domina la conducta y, satisfecha en grado suficiente, deja emerger la siguiente. El orden no era rígido y Maslow nunca dibujó una pirámide: la escalera es de Davis (1957) y la pirámide, de McDermid (1960). Rogers creó la terapia no directiva (1942), luego centrada en el cliente (1951), y en 1957 propuso empatía, aceptación positiva incondicional y congruencia.",
    v: [
      "Prepotencia=Dominio de una necesidad insatisfecha sobre la conducta hasta que se satisface",
      "Autorrealización=Llegar a ser aquello que uno es capaz de ser",
      "Necesidades de déficit=Se apagan al satisfacerse (Maslow, 1962)",
      "Necesidades de crecimiento=Se mantienen e incluso aumentan al satisfacerse",
      "Tendencia actualizante=Tendencia innata del organismo al crecimiento, base de Rogers",
      "Autoconcepto=Imagen de sí construida para ganarse la aprobación ajena",
      "Aceptación positiva incondicional=Aprecio al cliente sin condicionarlo a lo que haga o diga",
      "Congruencia=Autenticidad del terapeuta, que no se oculta tras su papel profesional"
    ],
    g: [
      "El primer gráfico de la jerarquía de Maslow fue una escalera de Keith Davis en ___.|1957|1960|1943",
      "En «Client-Centered Therapy» (1951), la terapia no directiva pasó a llamarse centrada en el ___.|cliente|paciente|presente",
      "El cuarto nivel de necesidades de Maslow es el de ___.|estima|pertenencia|seguridad",
      "En «Toward a Psychology of Being» (___), Maslow distinguió necesidades de déficit y de crecimiento.|1962|1954|1943",
      "Para describir la autorrealización, Maslow estudió ___ de personas que consideraba ejemplares.|biografías|encuestas|experimentos"
    ],
    tf: [
      "Maslow (1943) ya señaló excepciones al orden, como creadores que siguen su vocación aunque pasen penurias.|V",
      "La pirámide de necesidades aparece en «Motivation and Personality» (1954), dibujada por el propio Maslow.|F|Maslow nunca dibujó una pirámide. La primera fue de McDermid (1960), tras la escalera de Davis (1957).",
      "Rogers impulsó la grabación de sesiones y la investigación sistemática del proceso terapéutico.|V",
      "En la terapia centrada en el cliente, el terapeuta interpreta las resistencias para dirigir el cambio.|F|El terapeuta no interpreta ni dirige: crea un clima en el que el cliente pueda reorganizarse."
    ],
    q: [
      "Una estudiante eligió Medicina por su familia y se siente vacía al aprobar. ¿Cómo lo explicaría Rogers?|Choque entre experiencia y autoconcepto|Necesidad de déficit sin satisfacer|Conflicto pulsional infantil reprimido|Rogers vería la distancia entre su experiencia y el autoconcepto de «buena hija que estudia Medicina».",
      "Según Maslow (1943), ¿cuándo emerge una necesidad superior?|Cuando la anterior se satisface lo suficiente|Solo cuando la anterior se satisface del todo|Cuando lo decide el entorno social del sujeto|Las necesidades no tienen que satisfacerse por completo para que emerja la siguiente.",
      "¿Cuál es el orden de los niveles intermedios de Maslow?|Seguridad, pertenencia y estima|Pertenencia, seguridad y estima|Seguridad, estima y pertenencia|Tras las fisiológicas vienen seguridad, pertenencia y amor, y estima, antes de la autorrealización.",
      "¿Qué crítica se ha hecho al método con que Maslow estudió la autorrealización?|La subjetividad al elegir las biografías|El uso exclusivo de ratas y palomas|La dependencia de pacientes clínicos|Estudió biografías de personas que él consideraba ejemplares, y esa selección se ha criticado por subjetiva."
    ],
    inc: [
      "Sobre las condiciones de Rogers (1957)|Incluyen la interpretación de las resistencias|Incluyen la empatía con el mundo del cliente|Incluyen la congruencia del terapeuta|Interpretar resistencias es una técnica psicoanalítica. Las condiciones más citadas son empatía, aceptación y congruencia."
    ],
    seq: [
      "Jerarquía de necesidades de Maslow (1943)|Fisiológicas>Seguridad>Pertenencia y amor>Estima>Autorrealización"
    ],
    cls: [
      "Autor|Maslow: prepotencia; necesidades de déficit; autorrealización|Rogers: tendencia actualizante; congruencia; terapia no directiva"
    ] },
  { t: "La institucionalización: de la AHP a Old Saybrook",
    tip: "El humanismo siguió el patrón de institucionalización de revista, asociación, encuentros y presencia profesional. En 1961 apareció el Journal of Humanistic Psychology, en 1961‑1962 se fundó la AHP, en 1964 Bugental publicó su declaración programática y se celebró Old Saybrook, y en 1971 nació la División 32 de la APA. Su difusión práctica fue amplia, pero como ciencia dejó poco: criticó los métodos experimentales sin crear otros que los sustituyeran.",
    v: [
      "Journal of Humanistic Psychology=Revista cuyo primer número apareció en 1961",
      "AHP=Asociación de Psicología Humanista, fundada en 1961‑1962",
      "Old Saybrook=Conferencia de 1964 en Connecticut, presentación pública del movimiento",
      "División 32=Sección de la APA para la psicología humanista, creada en 1971",
      "James Bugental=Autor de «The third force in American psychology» (1964)",
      "Anthony Sutich=Colaborador de Maslow en la creación de la revista y la asociación",
      "Potencial humano=Movimiento de grupos de encuentro y técnicas de desarrollo personal",
      "Charlotte Bühler=Psicóloga evolutiva que se sumó a la asociación humanista"
    ],
    g: [
      "La División 32 de la APA, dedicada a la psicología humanista, se creó en ___.|1971|1964|1961",
      "La conferencia de Old Saybrook se celebró en ___.|Connecticut|California|Massachusetts",
      "Rollo May participó en el movimiento como psicólogo ___.|existencial|conductista|evolutivo",
      "Según Bugental, el ser humano es más que la ___ de sus partes.|suma|media|copia",
      "En su etapa tardía, Rogers dedicó buena parte de su trabajo a los grupos de ___.|encuentro|autoayuda|discusión"
    ],
    tf: [
      "La conferencia de Old Saybrook (1964) reunió a figuras como Maslow, Rogers y Rollo May.|V",
      "La División 32 de la APA se creó en 1964, el mismo año de Old Saybrook.|F|La División 32 llegó en 1971. En 1964 coinciden Old Saybrook y el artículo de Bugental.",
      "El humanismo creó métodos alternativos que sustituyeron con éxito a los experimentales.|F|Criticó los métodos experimentales, pero no creó otros que los sustituyeran, y muchas de sus tesis no eran contrastables.",
      "Entre los postulados de Bugental figura que el ser humano tiene capacidad de elección y, con ella, responsabilidad.|V"
    ],
    q: [
      "Una guía de atención primaria recomienda escuchar activamente, validar la experiencia del paciente y no juzgar. ¿De qué es ejemplo?|De la huella humanista en la práctica|De la psicología positiva de Seligman|De la técnica psicoanalítica clásica|Son principios que el humanismo convirtió en norma profesional, aunque casi nadie los atribuya ya a Rogers.",
      "¿Qué hito marcó el reconocimiento del humanismo dentro de la psicología organizada?|La División 32 de la APA|La conferencia de Old Saybrook|El primer número de su revista|Old Saybrook fue la presentación pública. La División 32 (1971) supuso el reconocimiento dentro de la APA.",
      "¿Qué consecuencia derivaba Bugental para la investigación?|Elegir problemas por su relevancia vital|Basarse sobre todo en la investigación animal|Priorizar los problemas cómodos de medir|Pedía no basarse solo en animales ni solo en la clínica y elegir problemas por su relevancia, no por su comodidad.",
      "¿Qué coste tuvo la difusión del humanismo fuera de la academia?|Lo alejó de la universidad|Lo enfrentó con la APA|Lo vinculó al conductismo|La mezcla con propuestas de muy diverso rigor alejó al humanismo de la universidad."
    ],
    inc: [
      "Sobre la institucionalización del humanismo|La AHP se fundó en 1971 dentro de la APA|El primer número de la revista salió en 1961|La conferencia de Old Saybrook fue en 1964|La AHP se fundó en 1961‑1962. En 1971 se creó la División 32 de la APA."
    ],
    seq: [
      "Institucionalización del humanismo|Journal of Humanistic Psychology (1961)>Fundación de la AHP (1961‑1962)>Conferencia de Old Saybrook (1964)>División 32 de la APA (1971)"
    ],
    cls: [] },
  { t: "Herencias: la psicología positiva y sus críticas",
    tip: "Seligman dedicó su discurso presidencial en la APA (1998) a reclamar el estudio de las fortalezas y el bienestar, y con Csikszentmihalyi presentó la psicología positiva en 2000. Comparte preguntas con el humanismo, pero usa métodos cuantitativos y experimentales. Los humanistas la acusan de ignorar sus antecedentes y ella critica el escaso rigor empírico del humanismo. Las tres fuerzas y la psicología cognitiva coexistieron, no se reemplazaron.",
    v: [
      "Psicología positiva=Estudio científico de las fortalezas y el bienestar",
      "Martin Seligman=Pidió en su discurso presidencial de la APA (1998) estudiar fortalezas",
      "Csikszentmihalyi=Coautor del número especial de 2000 y autor del concepto de flujo",
      "Flujo=Absorción total en una actividad con un reto ajustado a las propias capacidades",
      "Crítica humanista=Acusa a la psicología positiva de presentar como nuevo un programa antiguo",
      "Réplica de la psicología positiva=El humanismo tuvo buenas preguntas, pero escaso rigor empírico",
      "Relación terapéutica=Vínculo clínico cuya importancia actual es en gran parte herencia humanista",
      "Coexistencia de tradiciones=Lección historiográfica: las escuelas se critican y se toman ideas"
    ],
    g: [
      "Seligman y Csikszentmihalyi presentaron la psicología positiva en ___.|2000|1998|1964",
      "La psicología positiva prefiere un método cuantitativo y experimental, con ___.|escalas|biografías|entrevistas",
      "Según su diagnóstico, tras la II Guerra Mundial la psicología se había centrado casi solo en ___ daños.|reparar|prevenir|medir",
      "La psicología positiva presentó su programa en un número especial de «American ___».|Psychologist|Journal|Review",
      "El humanismo nunca ___ al conductismo ni al psicoanálisis.|sustituyó|criticó|cuestionó"
    ],
    tf: [
      "Csikszentmihalyi aportó el concepto de flujo: absorción total en una actividad con un reto ajustado a las capacidades.|V",
      "La psicología positiva nació en los años sesenta como rama de la psicología humanista.|F|Surgió a finales de los noventa (Seligman, 1998, y Seligman y Csikszentmihalyi, 2000), con métodos cuantitativos.",
      "Una crítica general a la psicología positiva es presentar la felicidad como responsabilidad individual olvidando las condiciones sociales.|V",
      "Según la historiografía actual, la psicología cognitiva reemplazó definitivamente a las tres fuerzas anteriores.|F|Las tres fuerzas y la psicología cognitiva coexistieron y se influyeron. No es una sucesión de escuelas que se reemplazan."
    ],
    q: [
      "Un programa escolar enseña a reconocer las propias fortalezas y mide sus efectos con cuestionarios antes y después. ¿Cómo se clasifica?|Psicología positiva con pregunta humanista|Psicología humanista con método clínico|Psicología cognitiva con base conexionista|El método cuantitativo es de psicología positiva. La pregunta por el desarrollo pleno del adolescente es muy humanista.",
      "¿Qué reprochan los humanistas a la psicología positiva?|Ignorar sus antecedentes|Usar demasiada estadística|Estudiar solo a pacientes|La acusan de presentar como nuevo un programa que Maslow y Rogers habían planteado décadas antes.",
      "¿Dónde es hoy más visible la herencia humanista?|En la importancia de la relación terapéutica|En los programas de condicionamiento operante|En los métodos de la neurociencia cognitiva|Sus principios están en la base del valor que hoy se da a la relación terapéutica y a la experiencia del paciente.",
      "¿En qué se diferencian sobre todo humanismo y psicología positiva?|En el método y en el tono|En las preguntas de fondo|En su crítica al déficit|Ambos critican una psicología del déficit y preguntan por el sentido. Difieren en el método y en el tono."
    ],
    inc: [
      "Sobre la psicología positiva|Rechaza el método experimental dominante|Estudia emociones positivas y fortalezas|Se presentó en «American Psychologist»|La psicología positiva está integrada en la ciencia dominante. Era el humanismo el que criticaba el método experimental."
    ],
    seq: [],
    cls: [
      "Corriente|Psicología humanista: años sesenta; método fenomenológico e idiográfico; psicoterapia|Psicología positiva: finales de los noventa; escalas cuantitativas; investigación del bienestar"
    ] }
] },
{ n: 15, t: "De la psicotecnia a la profesión sanitaria en España", cap: 5, pir: "alta", mods: [
  { t: "Psicotecnia y orientación profesional hasta 1939",
    tip: "En España la psicología llegó más tarde y entró sobre todo por su utilidad práctica, la psicotecnia: orientar, seleccionar y evaluar con pruebas y aparatos. El hito académico es la cátedra de Psicología Experimental de Madrid (1902), ocupada por Simarro, pero el crecimiento real se dio en los Institutos de Orientación Profesional de Barcelona y Madrid. La Guerra Civil frustró el título universitario que se preparaba y Mira i López se exilió en 1939.",
    v: [
      "Psicotecnia=Psicología aplicada de principios del siglo XX basada en pruebas y aparatos",
      "Psicotécnico=Técnico que aplica tests para tomar decisiones sobre personas",
      "Luis Simarro=Médico que ocupó la cátedra de Psicología Experimental de Madrid (1902)",
      "Institutos de Orientación Profesional=Centros de Barcelona y Madrid que evaluaban aptitudes para elegir oficio",
      "Emilio Mira i López=Creador del psicodiagnóstico miokinético, exiliado en 1939",
      "Psicodiagnóstico miokinético=Prueba de personalidad basada en el trazado de líneas",
      "José Germain=Gran impulsor de la disciplina antes y después de la guerra",
      "Conferencias de Psicotecnia=Encuentros internacionales celebrados en Barcelona en 1921 y 1930"
    ],
    g: [
      "La cátedra de Psicología Experimental de Madrid se creó en ___.|1902|1921|1930",
      "Barcelona acogió conferencias internacionales de Psicotecnia en 1921 y en ___.|1930|1939|1902",
      "Mira i López desarrolló una prueba de personalidad basada en el trazado de ___.|líneas|figuras|manchas",
      "En España, la psicología entró sobre todo por su utilidad ___.|práctica|teórica|clínica",
      "Simarro era ___ y representó el enlace entre la medicina y la nueva psicología científica.|médico|filósofo|ingeniero"
    ],
    tf: [
      "En España, como en Alemania, la psicología entró primero en la universidad como ciencia de laboratorio y después buscó aplicaciones.|F|En España el orden fue casi el inverso: llegó más tarde y entró sobre todo por la psicotecnia.",
      "Los Institutos de Orientación Profesional se organizaron en Barcelona y Madrid en las décadas de 1910 y 1920.|V",
      "A mediados de los años treinta llegó a implantarse en Madrid un título universitario de psicología.|F|Se preparaba, pero la Guerra Civil lo impidió y el proyecto se interrumpió.",
      "Los pioneros de la psicotecnia española eran médicos, pedagogos, ingenieros o juristas.|V"
    ],
    q: [
      "En los años veinte, a un aprendiz que quiere entrar en un taller se le mide la destreza manual y un informe le recomienda un oficio. ¿Qué práctica es?|Psicotecnia de orientación profesional|Psicología experimental de cátedra|Psicodiagnóstico de la personalidad|No se buscaba una teoría de la mente, sino una respuesta útil. Es la lógica de la psicotecnia.",
      "¿Dónde se produjo el crecimiento real de la psicología española antes de 1939?|En las instituciones de aplicación|En la cátedra de Simarro en Madrid|En las facultades de Filosofía|La cátedra de 1902 es el hito académico, pero el crecimiento real se dio en los institutos de orientación y selección.",
      "¿Qué objetivo distinguía a la psicotecnia de la psicología académica?|Tomar decisiones prácticas sobre personas|Conocer los procesos mentales básicos|Formar a los futuros catedráticos|La psicología académica buscaba conocer los procesos mentales, y la psicotecnia, decidir sobre personas.",
      "¿Qué ocurrió con Mira i López en 1939?|Marchó al exilio|Fundó la SEP|Ocupó la cátedra|Se exilió en 1939 y continuó su carrera fuera de España."
    ],
    inc: [
      "Sobre la psicotecnia española|La impulsaron sobre todo catedráticos de psicología|Se apoyaba en pruebas y aparatos de medida|Servía para orientar y seleccionar personas|Sus pioneros eran médicos, pedagogos, ingenieros o juristas que adoptaron pruebas en su trabajo."
    ],
    seq: [],
    cls: [
      "Rasgo|Psicología académica: cátedra universitaria; conocer los procesos mentales; investigación y docencia|Psicotecnia: institutos de orientación; decisiones prácticas; informes de aptitud"
    ] },
  { t: "La reconstrucción (1939‑1979)",
    tip: "Tras la guerra, la psicología quedó reducida a su faceta técnica en el Instituto Nacional de Psicología Aplicada y Psicotecnia, y la experimental despertaba recelos por materialista. Con el apoyo de Zaragüeta se levantó la infraestructura: revista (1946), Departamento del CSIC con Germain (1948), SEP (1952) y Escuelas de Madrid (1953‑54) y Barcelona (1964). Siguieron la especialidad en Filosofía y Letras (1968‑69) y el RD 1652/1979, que permitió crear facultades.",
    v: [
      "Juan Zaragüeta=Sacerdote y filósofo neoescolástico formado en Lovaina que facilitó el camino",
      "Departamento del CSIC=Centro de Psicología Experimental creado en 1948 con Germain al frente",
      "SEP=Sociedad Española de Psicología, fundada en 1952",
      "Escuelas de Psicología=Centros de posgrado de Madrid (1953‑54) y Barcelona (1964)",
      "Mariano Yela=Formador de las primeras generaciones junto a Pinillos y Siguán",
      "Sección clínica=La más elegida en las Escuelas, con cerca del 43 % de los diplomados",
      "RD 1652/1979=Norma que permitió crear facultades de Psicología, activas desde 1980",
      "Especialidad en Filosofía y Letras=Vía de entrada en la licenciatura desde el curso 1968‑69"
    ],
    g: [
      "La Revista de Psicología General y Aplicada apareció en ___.|1946|1948|1952",
      "El Departamento de Psicología Experimental del CSIC se creó con ___ al frente.|Germain|Zaragüeta|Pinillos",
      "Las Escuelas de Psicología tenían una parte común y tres secciones: clínica, pedagógica e ___.|industrial|social|forense",
      "Las Escuelas formaron a algo más de ___ diplomados.|1.500|5.000|500",
      "Desde el curso ___ se estableció una sección propia de Psicología en la licenciatura.|1969‑70|1968‑69|1953‑54"
    ],
    tf: [
      "La psicología experimental despertaba recelos en la posguerra porque se veía como materialista.|V",
      "La Sociedad Española de Psicología se fundó en 1948 con Germain al frente.|F|En 1948 se creó el Departamento del CSIC dirigido por Germain. La SEP se fundó en 1952.",
      "La Escuela de Psicología de Barcelona se puso en marcha antes que la de Madrid.|F|La de Madrid empezó en 1953‑54 y la de Barcelona, en 1964.",
      "Las facultades de Psicología empezaron a funcionar desde 1980, tras el RD 1652/1979.|V"
    ],
    q: [
      "¿Qué sección reunió a más diplomados de las Escuelas de Psicología?|Clínica, con cerca del 43 %|Pedagógica, con cerca del 43 %|Industrial, con cerca del 29 %|La sección clínica rondó el 43 %, la pedagógica el 29 % y la industrial el 28 %.",
      "¿Qué papel tuvo Juan Zaragüeta en la reconstrucción?|Facilitó una psicología afín a su tradición|Dirigió el Departamento de Psicología del CSIC|Fundó la Escuela de Psicología de Barcelona|Neoescolástico formado en Lovaina, vio con buenos ojos una psicología científica compatible con su tradición.",
      "¿Qué permitió el RD 1652/1979?|Crear facultades de Psicología|Crear el Colegio de Psicólogos|Crear la licenciatura en Psicología|Las facultades funcionaron desde 1980. El Colegio llegó con la Ley 43/1979 y la licenciatura, con el RD 1428/1990.",
      "¿Qué autores formaron a las primeras generaciones de psicólogos junto a Germain?|Yela, Pinillos y Siguán|Simarro, Mira y Zaragüeta|Zaragüeta, Yela y Simarro|Mariano Yela, José Luis Pinillos y Miquel Siguán conectaron la psicología española con la investigación internacional."
    ],
    inc: [
      "Sobre la reconstrucción (1939‑1979)|La psicotecnia desapareció por completo tras la guerra|La SEP permitió integrarse en asociaciones internacionales|Las Escuelas eran centros de posgrado|La psicotecnia continuó en el Instituto Nacional de Psicología Aplicada y Psicotecnia, haciendo casi lo mismo que antes."
    ],
    seq: [
      "Reconstrucción de posguerra|Revista de Psicología General y Aplicada (1946)>Departamento del CSIC (1948)>Sociedad Española de Psicología (1952)>Escuela de Madrid (1953‑54)>Escuela de Barcelona (1964)>Especialidad en Filosofía y Letras (1968‑69)>Facultades de Psicología (1980)"
    ],
    cls: [] },
  { t: "La definición legal de la profesión (1979‑2011)",
    tip: "La Ley 43/1979 creó el Colegio Oficial de Psicólogos y el RD 1428/1990, la licenciatura. La vía sanitaria se construyó con el primer PIR estatal (1993), el título de especialista en Psicología Clínica (RD 2490/1998) y la LOPS (Ley 44/2003), que solo reconoció como sanitario al especialista. La Ley 33/2011 creó el Psicólogo General Sanitario, al que se accede por grado y máster habilitante (Orden ECD/1070/2013).",
    v: [
      "Ley 43/1979=Norma que creó el Colegio Oficial de Psicólogos",
      "RD 1428/1990=Norma que estableció la licenciatura y la repartió en áreas de conocimiento",
      "RD 2490/1998=Norma que creó el título de Psicólogo Especialista en Psicología Clínica",
      "LOPS=Ley 44/2003, que solo reconoció como sanitario al especialista clínico",
      "Ley 33/2011=Ley General de Salud Pública que creó el Psicólogo General Sanitario",
      "Orden SAS/1620/2009=Norma que fijó el programa PIR de cuatro años",
      "Orden ECD/1070/2013=Norma que reguló el Máster en Psicología General Sanitaria",
      "Década del psicólogo=Nombre de los años ochenta, con miles de estudiantes y nuevas facultades"
    ],
    g: [
      "La primera convocatoria estatal del PIR se publicó en ___, con unas 52 plazas.|1993|1990|1998",
      "La Ley ___, de 13 de mayo, creó el Consejo General de Colegios Oficiales de Psicólogos.|7/2005|44/2003|33/2011",
      "El RD 1393/2007 convirtió las licenciaturas en grados de ___ ECTS.|240|300|180",
      "El COP creó sus divisiones profesionales en ___.|1996|1998|1999",
      "La primera convocatoria estatal del PIR tuvo un antecedente autonómico en ___.|Asturias|Cataluña|Andalucía"
    ],
    tf: [
      "La LOPS (2003) reconoció como profesionales sanitarios a todos los licenciados en Psicología colegiados.|F|Solo reconoció al especialista en Psicología Clínica. El problema se resolvió con la Ley 33/2011.",
      "El título de especialista del RD 2490/1998 era obligatorio para el sistema público, pero no para el ejercicio privado de entonces.|V",
      "La licenciatura en Psicología se creó con la misma ley que el Colegio Oficial de Psicólogos, en 1979.|F|Es una confusión típica: la Ley 43/1979 creó el COP, y la licenciatura llegó con el RD 1428/1990.",
      "La encuesta del COP de 1999 dibujó una profesión mayoritariamente femenina, con predominio del ámbito clínico y del ejercicio privado.|V"
    ],
    q: [
      "Lucía termina el grado y quiere optar a una plaza de psicología clínica en un hospital público. ¿Qué necesita?|Aprobar el PIR y hacer la residencia|Cursar el máster habilitante sanitario|Colegiarse y acreditar experiencia|El máster la haría Psicóloga General Sanitaria. Para la plaza pública de clínica necesita ser especialista vía PIR.",
      "¿Qué norma creó la figura del Psicólogo General Sanitario?|Ley 33/2011|Ley 44/2003|RD 2490/1998|Lo hizo una disposición adicional de la Ley General de Salud Pública. La LOPS fue el problema, y el RD 2490/1998, el especialista.",
      "¿Qué norma fijó el programa PIR de cuatro años?|Orden SAS/1620/2009|RD 183/2008|Orden ECD/1070/2013|El RD 183/2008 ordenó las especialidades, y la Orden ECD/1070/2013 reguló el máster sanitario.",
      "Según la encuesta del COP de 1999, ¿qué orientación predominaba?|Cognitivo‑conductual|Psicodinámica breve|Humanista existencial|Mostró una profesión femenina, joven, con predominio clínico, cognitivo‑conductual y privado."
    ],
    inc: [
      "Sobre la regulación de la profesión|El RD 2490/1998 creó el Psicólogo General Sanitario|La Ley 43/1979 creó el Colegio Oficial de Psicólogos|La Orden ECD/1070/2013 reguló el máster habilitante|El RD 2490/1998 creó el especialista en Psicología Clínica. El Psicólogo General Sanitario es de la Ley 33/2011."
    ],
    seq: [
      "Cronología legal de la profesión|Ley 43/1979, Colegio Oficial>RD 1428/1990, licenciatura>RD 2490/1998, especialista clínico>Ley 44/2003, LOPS>Ley 33/2011, Psicólogo General Sanitario"
    ],
    cls: [
      "Figura sanitaria|Especialista en Psicología Clínica: residencia PIR; RD 2490/1998; Orden SAS/1620/2009|Psicólogo General Sanitario: máster habilitante; Ley 33/2011; Orden ECD/1070/2013"
    ] },
  { t: "De la pandemia a hoy (2020‑2026)",
    tip: "La pandemia hizo crecer la demanda en salud mental y mostró la escasez de psicólogos públicos: unos 6 por 100.000 habitantes en 2018, frente a una media europea de 18. El Plan de Acción de Salud Mental 2025‑2027 promueve, pero no crea, una especialidad de Psicología Clínica de la Infancia y la Adolescencia. El RD 689/2021 creó una especialidad médica, la de Psiquiatría Infantil. El PIR 2026/27 ofrece 293 plazas.",
    v: [
      "RD 689/2021=Norma que creó la especialidad médica de Psiquiatría Infantil y de la Adolescencia",
      "Plan de Acción 2025‑2027=Aprobado en abril de 2025, promueve una especialidad clínica infantojuvenil",
      "División infantojuvenil del COP=Estructura colegial creada en diciembre de 2024, no título oficial",
      "RD 822/2021=Norma que sustituyó al RD 1393/2007 en la ordenación de las enseñanzas",
      "LOSU=Ley Orgánica 2/2023, que sustituyó a la LOU",
      "Orden SND/854/2026=Convocatoria PIR 2026/27, con 293 plazas",
      "Orden SND/928/2025=Convocatoria PIR 2025/26, con 280 plazas y examen el 24/01/2026",
      "Defensor del Pueblo (2020)=Informe que situó la ratio pública en unos 6 psicólogos por 100.000"
    ],
    g: [
      "En la convocatoria PIR 2026/27 se ofrecen ___ plazas.|293|280|269",
      "El informe del Defensor del Pueblo daba una media europea de ___ psicólogos por 100.000 habitantes.|18|6|4,3",
      "El Plan de Acción de Salud Mental 2025‑2027 se aprobó en ___ de 2025.|abril|enero|diciembre",
      "Del PIR 2026/27, ___ plazas son reservables al turno de discapacidad.|29|24|21",
      "Al estudiar la normativa conviene comprobar si una medida está aprobada, en tramitación o solo ___.|propuesta|derogada|publicada"
    ],
    tf: [
      "El RD 689/2021 creó en España la especialidad de Psicología Clínica de la Infancia y la Adolescencia.|F|Creó la especialidad médica de Psiquiatría Infantil y de la Adolescencia. La psicológica solo se promueve en el Plan 2025‑2027.",
      "La División de Psicología Clínica de la Infancia y la Adolescencia del COP es una estructura colegial, no una especialidad oficial.|V",
      "La cifra de unos 3,4 psicólogos clínicos por 100.000 habitantes procede de fuentes periodísticas de 2026 y debe tomarse como aproximada.|V",
      "En el PIR 2025/26 se presentó al examen prácticamente la totalidad de los admitidos.|F|De unos 4.028 admitidos se presentaron unos 3.340, alrededor del 83 %."
    ],
    q: [
      "Una estudiante lee en un foro que ya puede formarse vía PIR como especialista en Psicología Clínica infantojuvenil. ¿Qué le respondería?|Esa especialidad solo se ha promovido|La creó el RD 689/2021 para psicólogos|La creó el COP con su División en 2024|El Plan 2025‑2027 la promueve, pero no la crea. El RD 689/2021 es de Psiquiatría y la División del COP no es un título.",
      "¿Qué ratio de psicólogos públicos daba el Defensor del Pueblo para 2018?|Unos 6 por 100.000|Unos 18 por 100.000|Unos 3,4 por 100.000|18 es la media europea, y 3,4, la cifra periodística de 2026 para psicólogos clínicos del Sistema Nacional de Salud.",
      "¿Qué norma sustituyó a la LOU?|La LO 2/2023|El RD 822/2021|La LO 3/2018|La LOSU es la LO 2/2023. El RD 822/2021 sustituyó al RD 1393/2007, y la LO 3/2018 es la de protección de datos.",
      "¿Qué se debate sobre las cifras de psicólogos en el sistema público?|Varían según la fuente y lo que se cuente|Superan ya la media europea de 18|Coinciden en todas las fuentes oficiales|Unos 6 por 100.000 en 2018 frente a unos 3,4 clínicos en fuentes de 2026: no miden exactamente lo mismo."
    ],
    inc: [
      "Sobre la situación reciente|El Plan 2025‑2027 creó la especialidad infantojuvenil|El RD 689/2021 afecta a una especialidad médica|Las plazas PIR han crecido mucho desde 1993|El Plan de Acción promueve esa especialidad, pero no la crea por sí mismo."
    ],
    seq: [
      "Cronología reciente|RD 689/2021>LOSU (2023)>División infantojuvenil del COP (diciembre de 2024)>Plan de Acción de Salud Mental (abril de 2025)>Orden SND/854/2026 (agosto de 2026)"
    ],
    cls: [] }
] },
{ n: 16, t: "Ética y deontología profesional", cap: 5, pir: "alta", mods: [
  { t: "Ética, moral, deontología y bioética",
    tip: "La moral describe lo que un grupo considera correcto, la ética pregunta si lo es y por qué, la deontología recoge en un código los deberes de una profesión y la bioética aplica la ética a la vida y la salud. Beauchamp y Childress (1979) propusieron cuatro principios: autonomía, beneficencia, no maleficencia y justicia. A menudo chocan, y ese choque entre deberes legítimos es el dilema ético.",
    v: [
      "Moral=Normas y valores que comparte un grupo o una sociedad",
      "Ética=Reflexión filosófica sobre lo bueno y lo correcto, y sobre por qué lo es",
      "Deontología=Deberes de una profesión, decididos por ella y recogidos en un código",
      "Bioética=Ética aplicada a la vida y la salud, en la clínica y la investigación",
      "Autonomía=Respetar la capacidad de la persona para decidir sobre sí misma",
      "No maleficencia=No causar daño, ni por acción ni por negligencia",
      "Justicia=Repartir con equidad beneficios y cargas, sin discriminar",
      "Dilema ético=Dos deberes legítimos que apuntan en direcciones distintas"
    ],
    g: [
      "Beauchamp y Childress propusieron sus cuatro principios en ___.|1979|1987|1947",
      "Respetar la autonomía exige ___ bien a la persona.|informar|proteger|tratar",
      "Prometer resultados terapéuticos que no se pueden garantizar no es delito, pero es reprochable desde la ___.|deontología|legislación|psicometría",
      "Ante un dilema, consultar a la comisión ___ del colegio forma parte de la buena práctica.|deontológica|disciplinaria|científica",
      "Un buen código marca límites, pero sobre todo describe cómo actuar bien cuando no está ___ qué hacer.|claro|escrito|permitido"
    ],
    tf: [
      "La moral pregunta si lo que un grupo considera correcto lo es realmente y por qué.|F|Esa pregunta es propia de la ética. La moral describe las normas y valores que comparte un grupo.",
      "Hay conductas que no son delito y aun así son reprochables desde la deontología.|V",
      "Los códigos deontológicos resuelven de forma automática todos los dilemas éticos.|F|No los resuelven todos, pero ofrecen criterios. Ante la duda se consulta y se deja constancia del razonamiento.",
      "Muchas obligaciones deontológicas, como el secreto o la protección de datos, coinciden con obligaciones legales.|V"
    ],
    q: [
      "Andrés, de 30 años, cuenta que ha dejado la medicación que le pautó su psiquiatra porque le sienta mal. ¿Qué es lo más adecuado?|Informarle y animarle a hablar con su médico|Avisar a su psiquiatra sin pedirle permiso|Respetar su decisión sin comentar nada más|Se equilibran autonomía y beneficencia: explorar sus motivos, informar de los riesgos y animarle a consultarlo, sin imponer.",
      "¿Qué principios entran en conflicto cuando un paciente abandona por su cuenta la medicación?|Autonomía y beneficencia|Justicia y no maleficencia|Beneficencia y justicia|La autonomía pide respetar su decisión, y la beneficencia, intentar que la revise con su médico.",
      "Discutir si mentir es aceptable para evitar un daño es un ejemplo de…|ética|moral|deontología|La ética reflexiona sobre por qué algo es correcto. La moral solo describe lo que un grupo considera correcto.",
      "Decidir cómo pedir consentimiento a un paciente con demencia es un ejemplo de…|bioética|deontología|moral|Es ética aplicada a la vida y la salud, en este caso en el ámbito clínico."
    ],
    inc: [
      "Sobre los principios de Beauchamp y Childress|Incluyen la fidelidad y la integridad|Incluyen la no maleficencia|Incluyen la autonomía de la persona|Son autonomía, beneficencia, no maleficencia y justicia. Fidelidad e integridad aparecen en el código de la APA."
    ],
    seq: [],
    cls: [
      "Término|Moral: valores compartidos por un grupo; «No se miente a los amigos»|Ética: reflexión sobre por qué algo es correcto; discutir si mentir evita un daño|Deontología: deberes escritos de una profesión; «El psicólogo guardará el secreto»"
    ] },
  { t: "Los códigos: COP, EFPA, APA y Declaración Universal",
    tip: "El Código Deontológico del COP, aprobado el 22 de mayo de 1987 y reformado en 2010, 2014 y 2015, es el vigente en España y el que puede dar lugar a un expediente disciplinario. La Junta de Gobierno aprobó en febrero de 2026 el proyecto de nuevo código, pero no consta aprobado definitivamente. El Metacódigo EFPA (1995, rev. 2005) fija mínimos, el código de la APA (2002) tiene cinco principios y diez normas, y la Declaración Universal es de 2008.",
    v: [
      "Código Deontológico del COP=Aprobado el 22 de mayo de 1987, con reformas en 2010, 2014 y 2015",
      "Metacódigo EFPA=Mínimos europeos (1995, rev. 2005) que deben recoger los códigos nacionales",
      "Principios de la EFPA=Respeto, competencia, responsabilidad e integridad",
      "Código de la APA=Texto de 2002 con cinco principios orientadores y diez normas obligatorias",
      "Declaración Universal=Marco ético mundial de 2008 promovido por la IUPsyS y la IAAP",
      "INF/CNMC/130/26=Informe de julio de 2026 sobre el proyecto de nuevo código",
      "Ley Ómnibus=Motivo de la reforma del código del COP en 2010",
      "Comisión de renovación=Grupo creado en octubre de 2023 para elaborar el nuevo código"
    ],
    g: [
      "El Código Deontológico del COP fue aprobado por la Junta General el 22 de mayo de ___.|1987|1979|2010",
      "La Junta de Gobierno aprobó el proyecto del nuevo código el 21 de febrero de ___.|2026|2025|2023",
      "El código de la APA tiene cinco principios generales y ___ normas de obligado cumplimiento.|diez|cinco|doce",
      "Las enmiendas de 2010 y 2016 del código de la APA están vigentes desde ___.|2017|2016|2010",
      "La Declaración Universal de Principios Éticos para Psicólogos la promovieron la IUPsyS y la ___.|IAAP|EFPA|APA"
    ],
    tf: [
      "A finales de octubre de 2026, el nuevo Código Deontológico de la Psicología ya está vigente para los colegiados.|F|El proyecto no consta aprobado definitivamente. Sigue vigente el código de 1987 con sus reformas.",
      "El Metacódigo de la EFPA no sustituye a los códigos nacionales, sino que fija los mínimos que deben recoger.|V",
      "La CNMC recomendó aclarar si la colegiación obligatoria está justificada en todas las ramas de la psicología.|V",
      "Los principios generales del código de la APA son de obligado cumplimiento, y sus normas, orientadoras.|F|Es al revés: los cinco principios son orientadores y las diez normas, de obligado cumplimiento para sus miembros."
    ],
    q: [
      "Un psicólogo colegiado en España recibe una queja por su actuación. ¿Qué texto puede dar lugar a un expediente disciplinario?|El código vigente del COP|El Metacódigo de la EFPA|El código ético de la APA|Los cuatro textos coinciden en lo esencial, pero para un colegiado español obliga el código del COP vigente.",
      "¿Qué principios organizan el Metacódigo de la EFPA?|Respeto, competencia, responsabilidad e integridad|Autonomía, beneficencia, no maleficencia y justicia|Respeto a las personas, beneficencia y justicia|La segunda opción es de Beauchamp y Childress, y la tercera, del Informe Belmont.",
      "¿Qué fecha da un artículo de Papeles del Psicólogo para la aprobación del código del COP?|1993|1987|2015|Lo da como «concluido en 1987 y aprobado en 1993», aunque la fecha de referencia habitual es 1987.",
      "¿Cuál de estos es uno de los cinco principios generales de la APA?|Fidelidad y responsabilidad|Autonomía y consentimiento|Competencia y prudencia|Los principios de la APA son beneficencia y no maleficencia, fidelidad y responsabilidad, integridad, justicia y respeto."
    ],
    inc: [
      "Sobre los códigos éticos|El Metacódigo EFPA sustituye a los códigos nacionales|El código del COP se reformó en 2010, 2014 y 2015|La Declaración Universal de Principios Éticos es de 2008|El Metacódigo no sustituye a los códigos nacionales: fija los mínimos que todos deben recoger."
    ],
    seq: [
      "Renovación del código deontológico|Comisión de renovación (octubre de 2023)>Fase de alegaciones (marzo de 2025)>Proyecto aprobado por la Junta de Gobierno (febrero de 2026)>Informe de la CNMC (julio de 2026)"
    ],
    cls: [
      "Código|COP: España; 1987; obligatorio para los colegiados|EFPA: Europa; 1995; mínimos para los códigos nacionales|APA: Estados Unidos; 2002; cinco principios y diez normas"
    ] },
  { t: "La práctica: secreto, consentimiento, menores e informes",
    tip: "El secreto profesional es la base de la relación de ayuda, pero no es absoluto: sus límites son un riesgo grave para el paciente o terceros, un mandato judicial y la protección de un menor en riesgo. Aun entonces se revela lo mínimo imprescindible y se documenta. La Ley 41/2002 regula el consentimiento informado y fija la mayoría de edad sanitaria en 16 años. Deben evitarse las relaciones duales, y los informes han de ser claros, veraces y ajustados a su finalidad.",
    v: [
      "Secreto profesional=Confidencialidad limitada por riesgo grave, mandato judicial o menor en riesgo",
      "Consentimiento informado=Aceptación libre tras recibir información comprensible, revisable en el tiempo",
      "Ley 41/2002=Ley de autonomía del paciente, marco general del consentimiento",
      "Mayoría de edad sanitaria=Edad de 16 años para consentir por uno mismo, con excepciones legales",
      "Relación dual=Vínculo personal o económico con un cliente además del profesional",
      "Lo mínimo imprescindible=Criterio para revelar información cuando hay que romper la confidencialidad",
      "RGPD=Reglamento UE 2016/679 que rige el tratamiento de los datos de salud",
      "LOPDGDD=Ley Orgánica 3/2018 de protección de datos"
    ],
    g: [
      "La Ley 41/2002 fija la mayoría de edad sanitaria en los ___ años, con excepciones.|16|18|14",
      "Si un amigo pide terapia, lo adecuado es ___ a otro profesional.|derivarlo|atenderlo|evaluarlo",
      "Un informe psicológico debe distinguir los datos de las ___.|interpretaciones|mediciones|observaciones",
      "Ante un mandato judicial se aporta lo ___, sin añadir más.|requerido|disponible|archivado",
      "Consentir no es firmar un papel, sino un ___ de información y diálogo.|proceso|trámite|requisito"
    ],
    tf: [
      "El secreto profesional es absoluto y solo el paciente puede levantarlo.|F|No es absoluto: lo limitan un riesgo grave para el paciente o terceros, un mandato judicial y la protección de un menor.",
      "Por debajo de la mayoría de edad sanitaria consienten los representantes legales, pero se escucha la opinión del menor según su madurez.|V",
      "Según la Ley 41/2002, la mayoría de edad sanitaria se sitúa, con excepciones, en los 18 años.|F|Es una trampa típica: la Ley 41/2002 la sitúa en los 16 años, con excepciones previstas en la propia ley.",
      "Cuando hay que romper el secreto, se informa al paciente si es posible y se deja constancia de la decisión.|V"
    ],
    q: [
      "Marta, de 15 años, acude por ansiedad con permiso de sus padres. Un día relata que un adulto la maltrata y pide que no se diga. ¿Qué procede?|Actuar para proteger a la menor|Mantener el secreto que ella pide|Informar solo a sus padres|La protección del menor está por encima del secreto y del derecho de los padres a la información.",
      "Un paciente amenaza en consulta con dañar a una persona concreta. ¿Qué respuesta es adecuada?|Revelar lo mínimo y documentarlo|Mantener el secreto en todo caso|Entregar toda la historia clínica|Un riesgo grave para un tercero es un límite del secreto, pero se revela solo lo imprescindible y se deja constancia.",
      "La madre de una paciente adulta llama preocupada y pide saber de qué se habla en terapia. ¿Qué debe hacer el psicólogo?|Mantener la confidencialidad|Informar a la madre con detalle|Informarla solo de lo esencial|La petición de un familiar de una paciente adulta no levanta el secreto profesional.",
      "¿Qué normas rigen el tratamiento de los datos de salud mental?|RGPD y LOPDGDD|Ley 41/2002 y LOPS|RD 822/2021 y LOSU|El Reglamento UE 2016/679 y la LO 3/2018 exigen seguridad en la custodia de historias, grabaciones y tests."
    ],
    inc: [
      "Sobre la práctica profesional|El consentimiento se firma una vez y no se revisa|Las relaciones duales pueden comprometer la objetividad|El informe debe ser claro, veraz y ajustado a su fin|El consentimiento es un proceso de información y diálogo que puede revisarse a lo largo de la intervención."
    ],
    seq: [],
    cls: [
      "Situación|Límite del secreto: riesgo grave para un tercero; mandato judicial; menor en riesgo|No levanta el secreto: petición de un familiar adulto; solicitud de la empresa que paga"
    ] },
  { t: "La investigación con personas y los casos históricos",
    tip: "Las normas de ética de la investigación nacieron como respuesta a abusos: Núremberg (1947) exige el consentimiento voluntario, Helsinki (1964) desarrolló esos principios para la investigación médica y Belmont (1979) propuso respeto a las personas, beneficencia y justicia, en parte tras Tuskegee. Burger (2009) replicó parcialmente a Milgram deteniéndose a los 150 V. Stanford sigue en debate (Le Texier, 2019) y no hay prueba de los 38 testigos de Genovese.",
    v: [
      "Código de Núremberg=Documento de 1947 que hizo esencial el consentimiento voluntario",
      "Declaración de Helsinki=Principios de 1964 de la Asociación Médica Mundial, revisados en 2024",
      "Informe Belmont=Documento de 1979: respeto a las personas, beneficencia y justicia",
      "Estudio de Tuskegee=Observación de la sífilis sin tratamiento en hombres afroamericanos (1932‑1972)",
      "Debriefing=Explicación del estudio al terminar cuando ha habido engaño",
      "Burger (2009)=Réplica parcial de Milgram con 70 participantes, detenida a los 150 V",
      "Le Texier (2019)=Documentó instrucciones a los guardias y datos incompletos en Stanford",
      "Manning, Levine y Collins=Mostraron en 2007 que no hay prueba de 38 testigos de Genovese"
    ],
    g: [
      "En el experimento de Milgram (1963), ___ de 40 participantes llegaron a los 450 V.|26|38|24",
      "Burger detenía el procedimiento a los ___ porque la mayoría de quienes los superaban llegaban al final.|150 V|450 V|300 V",
      "El estudio de la prisión de Stanford se detuvo al ___ día.|sexto|tercer|décimo",
      "Haslam, Reicher y Van Bavel (2019) reinterpretan Stanford como un efecto de liderazgo ___.|identitario|autoritario|situacional",
      "La última revisión de la Declaración de Helsinki se aprobó en octubre de ___.|2024|2008|1964"
    ],
    tf: [
      "En la réplica de Burger (2009), el 70 % siguió pasados los 150 V, frente al 82,5 % de Milgram, sin diferencia significativa.|V",
      "Los tres principios del Informe Belmont coinciden con los cuatro de Beauchamp y Childress.|F|Belmont propone respeto a las personas, beneficencia y justicia. Beauchamp y Childress, autonomía, beneficencia, no maleficencia y justicia.",
      "Al desmontarse la anécdota de los 38 testigos, el efecto espectador de Darley y Latané (1968) quedó invalidado.|F|El efecto espectador sigue siendo sólido. Lo que estaba deformado era su anécdota fundacional.",
      "Investigar con personas exige hoy que el participante pueda abandonar el estudio en cualquier momento.|V"
    ],
    q: [
      "Un comité revisa un estudio que engañará a los participantes sobre su objetivo. ¿Qué debe exigir además del consentimiento?|Explicar el estudio al terminar|Eliminar el derecho a abandonar|Ocultar el engaño tras la prueba|Cuando ha habido engaño, el debriefing explica el estudio al terminar. El derecho a abandonar se mantiene siempre.",
      "¿Qué documento fue en parte una reacción al estudio de Tuskegee?|El Informe Belmont|El Código de Núremberg|La Declaración de Helsinki|Núremberg (1947) respondió a los experimentos nazis. Belmont (1979) reaccionó en parte a Tuskegee.",
      "¿Qué documentó Le Texier (2019) en los archivos de Stanford?|Instrucciones a los guardias|Una réplica con 70 participantes|Un efecto de liderazgo identitario|Usó archivos y entrevistas a 15 participantes. El liderazgo identitario es la reinterpretación de Haslam, Reicher y Van Bavel.",
      "¿Qué muestra la réplica de Burger frente a los datos de Milgram?|La obediencia se replicó en buena medida|La obediencia desapareció con la ética|La obediencia aumentó con las normas|Con un 70 % frente al 82,5 %, sin diferencia significativa, la ética obligó a rediseñar el estudio sin renunciar a él."
    ],
    inc: [
      "Sobre los casos históricos|Stanford prueba que el rol vuelve cruel a cualquiera|Stanford se detuvo al sexto día de dos semanas previstas|Zimbardo y Haney respondieron a las críticas en 2020|Los archivos muestran instrucciones, características de demanda y datos incompletos. No sirve como prueba sencilla."
    ],
    seq: [
      "Documentos de ética de la investigación|Código de Núremberg (1947)>Declaración de Helsinki (1964)>Informe Belmont (1979)>Última revisión de Helsinki (2024)"
    ],
    cls: [
      "Marco ético|Beauchamp y Childress: autonomía; no maleficencia; profesiones sanitarias|Informe Belmont: reacción a Tuskegee; ética de la investigación en Estados Unidos|Metacódigo EFPA: competencia; integridad; mínimos europeos"
    ] }
] }
);

SP.register(window.COURSE);
})({});
