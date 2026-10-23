(function(window){
// SAIMAP Psicología · Bases Biológicas del Comportamiento
// Contenido alineado con el temario SAIMAP «Bases Biológicas del Comportamiento» (v1.0, octubre de 2026).
window.COURSE = {
  id: "bases-biologicas",
  title: "Bases Biológicas del Comportamiento",
  short: "Bases Biológicas",
  area: "Bases biológicas",
  rutas: { grado: { curso: 1 }, pir: { bloque: "Psicobiología" } },
  temario: "Bases-Biologicas-del-Comportamiento_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "La psicobiología y su objeto de estudio", from: 1, to: 3 },
    { n: 2, t: "Anatomía del sistema nervioso", from: 4, to: 9 },
    { n: 3, t: "Las células del sistema nervioso", from: 10, to: 12 },
    { n: 4, t: "La transmisión sináptica", from: 13, to: 14 },
    { n: 5, t: "Genética de la conducta", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Bases Biológicas · Unidades 1–4
window.COURSE.units.push(
{ n: 1, t: "Qué es la psicobiología", cap: 1, pir: "baja", mods: [
  { t: "Definición y disciplinas",
    tip: "La psicobiología estudia la conducta y los procesos mentales desde sus bases biológicas: evolución, genes, sistema nervioso y sistema endocrino. No reduce la conducta a la biología, pero exige que toda explicación psicológica sea compatible con ella. Forma parte de las neurociencias, junto a otras disciplinas que se distinguen sobre todo por su objeto y su método.",
    v: [
      "Psicobiología=Estudio de la conducta y la mente a partir de sus bases biológicas",
      "Psicología fisiológica=Mecanismos neurales de la conducta mediante manipulación directa, sobre todo en animales",
      "Psicofisiología=Relación entre procesos psicológicos y respuestas corporales registradas de forma no invasiva",
      "Neuropsicología=Efectos del daño cerebral sobre la conducta y la cognición, estudiados en pacientes",
      "Neurociencia cognitiva=Bases neurales de la cognición, investigadas sobre todo con neuroimagen funcional",
      "Psicofarmacología=Efectos de los fármacos sobre la conducta y el sistema nervioso",
      "Genética de la conducta=Contribución de genes y ambiente a las diferencias conductuales",
      "Psicología comparada=Conducta de distintas especies y su evolución"
    ],
    g: [
      "La psicofisiología se caracteriza por el registro ___ en humanos, como el EEG o la actividad electrodermal.|no invasivo|invasivo|farmacológico",
      "La psicobiología forma parte de las ___, un campo interdisciplinar con varias especialidades.|neurociencias|ciencias sociales|humanidades",
      "La disciplina que estudia la conducta de distintas especies y su evolución es la psicología ___.|comparada|diferencial|fisiológica",
      "Los estudios de familias, gemelos y adopción son el método típico de la ___.|genética de la conducta|psicología comparada|psicofarmacología",
      "Que la conducta dependa del encéfalo no significa que se ___ a la biología, sino que debe ser compatible con ella.|reduzca|oponga|anticipe"
    ],
    tf: [
      "La neurociencia cognitiva estudia las bases neurales de la cognición sobre todo mediante neuroimagen funcional en humanos.|V",
      "La psicología fisiológica se basa sobre todo en registros no invasivos en humanos, como el EEG.|F|Eso define a la psicofisiología; la psicología fisiológica manipula directamente el sistema nervioso, sobre todo en animales.",
      "La psicobiología incluye el sistema endocrino entre las bases biológicas de la conducta.|V",
      "Para la psicobiología, la conducta se reduce a la actividad biológica del encéfalo.|F|No se trata de reducirla: la explicación psicológica debe ser compatible con lo que sabemos del cuerpo."
    ],
    q: [
      "Un equipo administra de forma controlada una sustancia a ratas y mide cambios en su actividad exploratoria. ¿En qué disciplina encaja mejor?|Psicofarmacología|Psicofisiología|Psicología comparada|La administración controlada de sustancias para observar sus efectos sobre la conducta es el método típico de la psicofarmacología.",
      "¿Qué distingue principalmente a la psicología fisiológica de la psicofisiología?|Que manipula el sistema nervioso|Que estudia solo a pacientes con lesiones|Que se centra en las respuestas endocrinas|La psicología fisiológica interviene sobre el sistema nervioso, sobre todo en animales; la psicofisiología registra de forma no invasiva en humanos.",
      "Una neuropsicóloga evalúa con tests a un paciente tras un traumatismo craneal. ¿Cuál es el objetivo propio de su disciplina?|Describir los efectos del daño cerebral|Localizar la actividad cerebral normal|Explicar el origen evolutivo del déficit|La neuropsicología estudia cómo el daño cerebral afecta a la conducta y la cognición, mediante el estudio de pacientes y tests.",
      "¿Qué afirmación recoge mejor la idea central de la psicobiología?|Lo mental depende de la actividad del organismo|Lo psicológico es independiente de lo biológico|Toda conducta se explica solo por los genes|Sentir, pensar y actuar dependen del organismo, sobre todo del encéfalo, sin que ello implique reducir la conducta a la biología."
    ],
    inc: [
      "Sobre las disciplinas de las neurociencias|La neurociencia cognitiva se basa en pacientes con lesiones|La psicofisiología usa registros no invasivos en humanos, como el EEG|La psicología comparada estudia la conducta de distintas especies|Estudiar pacientes con daño cerebral es lo propio de la neuropsicología; la neurociencia cognitiva usa sobre todo neuroimagen funcional."
    ],
    seq: [],
    cls: [
      "Método típico de cada disciplina|Psicofisiología: EEG en humanos; actividad electrodermal|Neuropsicología: estudio de pacientes; evaluación con tests|Genética de la conducta: estudios de gemelos; estudios de adopción"
    ] },
  { t: "Niveles de explicación",
    tip: "Tinbergen propuso cuatro preguntas sobre cualquier conducta: mecanismo y desarrollo (causas próximas), y función y evolución (causas últimas). Son complementarias, no rivales. También se puede ordenar la explicación por niveles de análisis, del molecular al conductual; un buen modelo psicobiológico conecta varios.",
    v: [
      "Nikolaas Tinbergen=Etólogo que propuso cuatro preguntas complementarias sobre la conducta",
      "Mecanismo=Procesos fisiológicos que producen una conducta en el momento actual",
      "Ontogenia=Aparición y cambio de una conducta a lo largo de la vida del individuo",
      "Función=Ventaja o valor adaptativo que aporta una conducta",
      "Filogenia=Origen de una conducta en la historia de la especie",
      "Causa próxima=Explicación por mecanismos o por desarrollo",
      "Causa última=Explicación por valor adaptativo o por historia evolutiva",
      "Niveles de análisis=Escalas ordenadas del molecular al conductual para explicar la conducta"
    ],
    g: [
      "Explicar el miedo a las serpientes por la activación de la amígdala es una explicación de ___.|mecanismo|función|filogenia",
      "Según Tinbergen, el desarrollo de una conducta corresponde a una causa ___.|próxima|última|adaptativa",
      "Las cuatro preguntas de Tinbergen se consideran ___, no excluyentes entre sí.|complementarias|jerárquicas|redundantes",
      "Entre el nivel celular y el de sistemas se sitúa el nivel de los ___.|circuitos|genes|iones",
      "El aprendizaje temprano que explica un miedo concreto se sitúa en el plano de la ___.|ontogenia|filogenia|función"
    ],
    tf: [
      "La función y la evolución de una conducta son causas últimas.|V",
      "El desarrollo de una conducta a lo largo de la vida es una causa última, porque explica su origen.|F|El desarrollo (ontogenia) es causa próxima; las causas últimas son la función adaptativa y la evolución.",
      "Un buen modelo psicobiológico conecta varios niveles de análisis.|V",
      "Si se conoce el mecanismo de una conducta, la pregunta por su función queda respondida.|F|Las cuatro preguntas son complementarias: conocer el mecanismo no dice qué ventaja adaptativa aporta la conducta."
    ],
    q: [
      "Un equipo estudia cómo cambia el miedo a los desconocidos a lo largo de la infancia. ¿Qué pregunta de Tinbergen aborda?|Desarrollo|Función|Filogenia|Cómo aparece y cambia una conducta durante la vida del individuo es la pregunta por el desarrollo u ontogenia.",
      "¿Qué par de explicaciones pertenece a las causas próximas?|Mecanismo y desarrollo|Función y evolución|Mecanismo y función|Mecanismo y desarrollo son causas próximas; función y evolución (filogenia), causas últimas.",
      "Decir que el miedo a las serpientes protege frente a un peligro real es una explicación…|última, de función|próxima, de mecanismo|última, de filogenia|La ventaja que aporta una conducta es su función, una causa última; la filogenia remite a la historia de la especie.",
      "¿Qué secuencia de niveles de análisis está ordenada de menor a mayor escala?|Molecular, celular, circuitos, sistemas|Celular, molecular, sistemas, circuitos|Molecular, circuitos, celular, sistemas|Se va de genes, proteínas e iones a neuronas, circuitos, redes cerebrales y, por último, la conducta."
    ],
    inc: [
      "Sobre las preguntas de Tinbergen|La filogenia es una causa próxima|El mecanismo es una causa próxima|La función alude al valor adaptativo|La filogenia, la historia evolutiva de la especie, es una causa última, igual que la función."
    ],
    seq: [
      "Niveles de análisis, de menor a mayor escala|Molecular>Celular>Circuitos>Sistemas>Conductual"
    ],
    cls: [
      "Tipo de causa según Tinbergen|Causa próxima: mecanismo; desarrollo|Causa última: función; evolución"
    ] },
  { t: "Breve historia",
    tip: "Broca (1861) y Wernicke (1874) ligaron lesiones concretas a trastornos del lenguaje. Cajal formuló la doctrina de la neurona frente a la teoría reticular de Golgi; Sherrington acuñó el término sinapsis; Loewi demostró la transmisión química, y Hodgkin y Huxley explicaron el potencial de acción. El caso H. M. y los pacientes de cerebro dividido marcaron la neuropsicología.",
    v: [
      "Paul Broca=Relacionó en 1861 una lesión frontal izquierda con la pérdida de producción del habla",
      "Carl Wernicke=Describió en 1874 un trastorno de la comprensión del lenguaje por lesión temporal",
      "Ramón y Cajal=Formuló la tesis de que el sistema nervioso está formado por células independientes",
      "Camillo Golgi=Defendió la teoría reticular y compartió el Nobel de 1906",
      "Charles Sherrington=Introdujo en 1897 el término para la zona de contacto entre neuronas",
      "Otto Loewi=Demostró en 1921 la transmisión química en el corazón de la rana",
      "Hodgkin y Huxley=Explicaron el potencial de acción con el axón gigante del calamar",
      "Caso H. M.=Amnesia anterógrada grave tras extirpación bilateral del temporal medial"
    ],
    g: [
      "Otto Loewi llamó «Vagusstoff» a la sustancia que después se identificó como ___.|acetilcolina|noradrenalina|adrenalina",
      "Hodgkin y Huxley estudiaron el potencial de acción en el axón gigante del ___.|calamar|pulpo|cangrejo",
      "La extirpación bilateral del lóbulo temporal medial en el caso H. M. causó una amnesia ___ grave.|anterógrada|retrógrada|disociativa",
      "La microscopía ___ confirmó en los años cincuenta la existencia de la hendidura sináptica.|electrónica|óptica|confocal",
      "Los estudios con pacientes de cerebro dividido valieron el Nobel de 1981 a Roger ___.|Sperry|Gazzaniga|Penfield"
    ],
    tf: [
      "Cajal recibió el Nobel de 1906 compartido con Golgi, defensor de la teoría reticular.|V",
      "Wernicke describió en 1861 un trastorno de la producción del habla por lesión frontal.|F|Eso corresponde a Broca (1861); Wernicke describió en 1874 un trastorno de la comprensión por lesión temporal.",
      "El término «sinapsis» lo introdujo Ramón y Cajal al formular la doctrina de la neurona.|F|El término lo introdujo Charles Sherrington en 1897.",
      "La teoría reticular concebía el sistema nervioso como una red continua.|V"
    ],
    q: [
      "Tras una lesión temporal, un paciente tiene graves dificultades para comprender el lenguaje. ¿Qué autor describió por primera vez este tipo de trastorno?|Carl Wernicke|Paul Broca|Roger Sperry|Wernicke describió en 1874 un trastorno de la comprensión por lesión temporal; Broca, uno de la producción por lesión frontal.",
      "¿Qué demostró el experimento de Loewi de 1921?|Que la transmisión entre células es química|Que el potencial de acción depende de corrientes iónicas|Que entre las neuronas existe un espacio físico|La «Vagusstoff» liberada por el nervio vago frenaba otro corazón: la señal la transmitía una sustancia química.",
      "¿Qué hallazgo confirmó la doctrina de la neurona frente a la teoría reticular?|La observación de la hendidura sináptica|El registro del potencial de acción axónico|La identificación de la acetilcolina|La microscopía electrónica mostró en los años cincuenta un espacio entre neuronas, como predecía la doctrina de Cajal.",
      "¿Qué orden cronológico es correcto?|Broca, Sherrington, Loewi|Sherrington, Broca, Loewi|Broca, Loewi, Sherrington|Broca es de 1861, Sherrington introdujo «sinapsis» en 1897 y Loewi hizo su experimento en 1921."
    ],
    inc: [
      "Sobre los hitos históricos de la psicobiología|Sperry y Gazzaniga describieron la amnesia del caso H. M.|Broca relacionó una lesión frontal izquierda con el habla|Loewi demostró la transmisión química en el corazón de rana|Sperry y Gazzaniga estudiaron pacientes de cerebro dividido; el caso H. M. (1953) es un hito distinto."
    ],
    seq: [
      "Hitos en orden cronológico|Broca y la producción del habla>Wernicke y la comprensión del lenguaje>Sherrington introduce el término sinapsis>Loewi demuestra la transmisión química>Hodgkin y Huxley explican el potencial de acción>Caso H. M.>Estudios de cerebro dividido"
    ],
    cls: [] },
  { t: "Mitos generales sobre el cerebro",
    tip: "Dos mitos frecuentes: que solo usamos el 10 % del cerebro y que hay personas «de cerebro izquierdo» o «de cerebro derecho». La neuroimagen muestra actividad en todo el encéfalo, casi cualquier lesión produce algún déficit y el cerebro es muy costoso en energía. Algunas funciones están lateralizadas, pero nadie tiene un hemisferio globalmente dominante.",
    v: [
      "Mito del 10 %=Creencia falsa de que solo usamos una pequeña parte del encéfalo",
      "Neuromito=Idea falsa sobre el cerebro muy extendida por la divulgación",
      "Peso relativo del cerebro=En torno al 2 % del peso corporal",
      "Gasto energético en reposo=Alrededor del 20 % de la energía del organismo",
      "Argumento evolutivo=No sería viable mantener infrautilizado un órgano tan costoso",
      "Lateralización=Mayor dependencia de una función respecto de uno de los hemisferios",
      "Dominancia hemisférica global=Supuesto predominio general de un hemisferio en una persona; no existe",
      "Nielsen et al. (2013)=Estudio con más de mil personas que no halló cerebros «izquierdos» o «derechos»"
    ],
    g: [
      "El cerebro supone en torno al 2 % del peso corporal, pero consume alrededor del ___ de la energía en reposo.|20 %|10 %|50 %",
      "Que el lenguaje dependa sobre todo de un hemisferio es un ejemplo de ___.|lateralización|dominancia global|plasticidad",
      "La neuroimagen ___ muestra actividad en todo el encéfalo a lo largo del día, lo que contradice el mito del 10 %.|funcional|estructural|anatómica",
      "Mantener infrautilizado un órgano tan ___ no sería evolutivamente viable.|costoso|pequeño|antiguo",
      "Existen funciones lateralizadas, pero no individuos con un hemisferio globalmente ___.|dominante|inhibido|desconectado"
    ],
    tf: [
      "El cerebro gasta en reposo una fracción de energía similar a su peso relativo.|F|Supone en torno al 2 % del peso corporal, pero consume alrededor del 20 % de la energía en reposo.",
      "Que el lenguaje dependa sobre todo del hemisferio izquierdo es compatible con negar que haya personas «de cerebro izquierdo».|V",
      "La neuroimagen muestra que la mayor parte del encéfalo permanece inactiva durante el día.|F|Muestra actividad en todo el encéfalo a lo largo del día.",
      "El daño en casi cualquier región cerebral produce algún déficit.|V"
    ],
    q: [
      "Un curso de «entrenamiento cerebral» promete activar el 90 % del cerebro que «no usamos». ¿Qué dato lo refuta mejor?|Casi cualquier lesión produce algún déficit|El cerebro solo pesa un 2 % del cuerpo|El lenguaje depende del hemisferio izquierdo|Si hubiera regiones sin uso, dañarlas no tendría consecuencias; además, la neuroimagen muestra actividad en todo el encéfalo.",
      "Una persona afirma ser «de cerebro derecho» porque es muy creativa. ¿Qué es lo más preciso?|Hay lateralización, no dominancia global|Es cierto si además es zurda o ambidiestra|Es cierto solo en personas muy creativas|Algunas funciones se lateralizan, pero Nielsen et al. (2013) no hallaron personas con un hemisferio dominante en conjunto.",
      "¿Por qué el coste energético del cerebro contradice el mito del 10 %?|Porque mantener un órgano tan caro sin usar no sería viable|Porque su gasto se concentra solo en la parte que sí se usa|Porque prueba que todas las neuronas se activan a la vez|Consume en reposo cerca del 20 % de la energía con un 2 % del peso: infrautilizarlo no sería evolutivamente viable.",
      "¿Qué observó el estudio de Nielsen et al. (2013)?|Nadie usaba más una red hemisférica en conjunto|Los creativos usaban más el hemisferio derecho|Los analíticos usaban más el hemisferio izquierdo|Con más de mil personas, no encontraron que unas usaran globalmente más una red hemisférica que la otra."
    ],
    inc: [
      "Sobre el cerebro y sus mitos|El cerebro consume energía solo en las regiones que están activas|El cerebro supone en torno al 2 % del peso corporal|El lenguaje depende sobre todo del hemisferio izquierdo en la mayoría|El encéfalo muestra actividad en todas sus regiones y consume en reposo alrededor del 20 % de la energía corporal."
    ],
    seq: [],
    cls: [] }
] },
{ n: 2, t: "Técnicas I: neuroimagen y registro", cap: 1, pir: "baja", mods: [
  { t: "Neuroimagen estructural",
    tip: "Las técnicas estructurales muestran la anatomía, no la actividad. La TC combina imágenes de rayos X: es rápida y útil en urgencias, pero irradia y distingue mal la sustancia gris de la blanca. La RM ofrece mucha más resolución sin radiación ionizante. El DTI, una modalidad de RM, reconstruye los tractos de sustancia blanca.",
    v: [
      "Tomografía computarizada=Cortes del encéfalo obtenidos combinando múltiples imágenes de rayos X",
      "Resonancia magnética=Imagen basada en los protones de hidrógeno dentro de un campo magnético intenso",
      "Tensor de difusión=Modalidad de RM que mide la dirección en que difunde el agua",
      "Tractografía=Reconstrucción de los grandes tractos de sustancia blanca",
      "Conectómica=Intento de cartografiar todas las conexiones de un sistema nervioso",
      "Radiación ionizante=Inconveniente de la TC del que carece la RM",
      "C. elegans=Gusano cuyas conexiones se conocen a escala sináptica completa",
      "Neuroimagen estructural=Técnicas que muestran la anatomía del encéfalo, no su actividad"
    ],
    g: [
      "La TC se usa en urgencias porque es rápida y detecta bien ___ y fracturas.|hemorragias|placas de amiloide|tractos axónicos",
      "El DTI se basa en que el agua difunde preferentemente a lo largo de los ___.|axones|somas|ventrículos",
      "La RM está contraindicada en personas con algunos implantes ___.|metálicos|plásticos|biológicos",
      "Un inconveniente de la TC es que diferencia mal la sustancia gris de la ___.|blanca|negra|reticular",
      "En humanos, la conectómica trabaja sobre todo a escala ___.|macroscópica|sináptica|molecular"
    ],
    tf: [
      "La TC ofrece mayor resolución espacial que la RM, y por eso se usa en urgencias.|F|La RM tiene mucha más resolución; la TC se usa en urgencias por su rapidez y disponibilidad.",
      "La RM no emplea radiación ionizante.|V",
      "El DTI es una técnica funcional que mide la actividad de los tractos de sustancia blanca.|F|Es una modalidad estructural de RM: mide la dirección de difusión del agua para reconstruir tractos.",
      "El conectoma completo a escala sináptica solo se ha logrado en organismos pequeños, como la mosca del vinagre.|V"
    ],
    q: [
      "Llega a urgencias una persona con sospecha de hemorragia cerebral tras un golpe. ¿Qué prueba es la opción habitual?|Tomografía computarizada|Tensor de difusión|Resonancia magnética funcional|La TC es rápida, está disponible en cualquier hospital y detecta bien hemorragias y fracturas.",
      "Un equipo quiere estudiar la integridad del cuerpo calloso y de otros tractos de sustancia blanca. ¿Qué técnica elegiría?|Tensor de difusión|Tomografía computarizada|Tomografía por emisión de positrones|El DTI sigue la difusión del agua a lo largo de los axones y permite reconstruir los tractos (tractografía).",
      "¿Qué propiedad física aprovecha la resonancia magnética?|El comportamiento de los protones de hidrógeno|La absorción diferencial de los rayos X por el tejido|La emisión de positrones de un trazador|La RM se basa en cómo se comportan los protones de hidrógeno dentro de un campo magnético intenso.",
      "¿Qué ventaja tiene la TC sobre la RM?|Su rapidez y disponibilidad|Su mejor contraste entre sustancias|La ausencia de radiación ionizante|La TC es rápida y está en todos los hospitales; la RM la supera en resolución y no irradia."
    ],
    inc: [
      "Sobre la neuroimagen estructural|La TC distingue bien sustancia gris y blanca|La RM supera a la TC en resolución espacial|El DTI es una modalidad de resonancia magnética|La TC diferencia mal la sustancia gris de la blanca; es uno de sus inconvenientes."
    ],
    seq: [],
    cls: [
      "¿Rayos X o resonancia?|TC: rayos X; útil en urgencias; radiación ionizante|RM (incluido el DTI): protones de hidrógeno; contraindicada con algunos implantes; tractografía"
    ] },
  { t: "Neuroimagen funcional",
    tip: "La fMRI mide la señal BOLD: al activarse, una región recibe más sangre oxigenada de la que consume. Es indirecta y lenta (pico a los 4–6 s), pero con resolución de milímetros. La PET usa trazadores radiactivos y destaca por su especificidad química (receptores, amiloide, tau), con resolución temporal de minutos. La SPECT es parecida, más barata y menos resolutiva.",
    v: [
      "Señal BOLD=Cambio en la proporción de hemoglobina oxigenada y desoxigenada",
      "Respuesta hemodinámica=Cambio del aporte sanguíneo que alcanza su pico unos 4–6 s tras la actividad",
      "Campo ultraalto=Escáneres de 7 teslas o más, capaces de distinguir capas corticales",
      "PET=Técnica con trazadores emisores de positrones que miden metabolismo o receptores",
      "Especificidad química=Principal ventaja de la PET frente a otras técnicas",
      "Glucosa marcada=Trazador que se acumula según el metabolismo de cada región",
      "SPECT=Técnica similar a la PET, más barata y con menor resolución",
      "Neuroimagen funcional=Registro de cambios asociados a la actividad del encéfalo"
    ],
    g: [
      "La fMRI es una medida ___ de la actividad neural, porque registra cambios en la sangre.|indirecta|directa|eléctrica",
      "La respuesta hemodinámica alcanza su pico unos ___ después de la actividad neural.|4–6 segundos|40–60 milisegundos|4–6 minutos",
      "Con trazadores de amiloide y tau, la PET detecta depósitos propios de la enfermedad de ___.|Alzheimer|Parkinson|Huntington",
      "La resolución temporal de la PET es pobre, del orden de ___.|minutos|milisegundos|segundos",
      "Cuando una región se activa, recibe más sangre oxigenada de la que ___.|consume|libera|filtra"
    ],
    tf: [
      "La señal BOLD registra directamente la actividad eléctrica de las neuronas.|F|Es una medida indirecta: refleja cambios en la oxigenación de la sangre.",
      "Los escáneres de 7 teslas o más pueden distinguir incluso capas de la corteza.|V",
      "La SPECT es más cara que la PET, pero ofrece mejor resolución.|F|Es al revés: la SPECT es más barata y tiene menor resolución que la PET.",
      "La PET puede medir la ocupación de receptores por un fármaco.|V"
    ],
    q: [
      "Un laboratorio quiere saber qué proporción de receptores de dopamina ocupa un nuevo antipsicótico. ¿Qué técnica es la más adecuada?|PET|fMRI|DTI|Los trazadores de la PET pueden unirse a receptores concretos y medir cuántos ocupa un fármaco.",
      "¿Por qué la fMRI tiene una resolución temporal limitada?|Porque la respuesta hemodinámica es lenta|Porque requiere inyectar un trazador radiactivo|Porque localiza mal el origen de la señal|La señal BOLD depende de la respuesta hemodinámica, que alcanza su pico unos 4–6 s después de la actividad neural.",
      "Al activarse una región, ¿qué cambio da lugar a la señal BOLD?|Aumenta la proporción de hemoglobina oxigenada|Disminuye el flujo sanguíneo de la región|Aumenta la proporción de hemoglobina desoxigenada|La región recibe más sangre oxigenada de la que consume, así que sube la proporción de hemoglobina oxigenada.",
      "¿Qué ventaja distingue a la PET de la fMRI?|Su especificidad química|Su mejor resolución temporal|Su mejor resolución espacial|La PET puede medir metabolismo o receptores concretos; la fMRI la supera en resolución espacial y temporal."
    ],
    inc: [
      "Sobre la neuroimagen funcional|La PET destaca por su resolución temporal|La fMRI tiene una resolución espacial de milímetros|La SPECT es similar a la PET y más barata|La resolución temporal de la PET es pobre, de minutos; su ventaja es la especificidad química."
    ],
    seq: [],
    cls: [
      "¿Qué técnica funcional?|fMRI: señal BOLD; escáneres de campo ultraalto; respuesta hemodinámica|PET: trazadores radiactivos; ocupación de receptores; depósitos de amiloide"
    ] },
  { t: "Registro neurofisiológico",
    tip: "El EEG registra desde el cuero cabelludo la actividad sincronizada de grandes poblaciones corticales: resolución de milisegundos, pero mala localización. Los potenciales evocados se obtienen promediando ensayos (P300, N400). La MEG mide campos magnéticos, con la misma resolución temporal y mejor localización; los OPM-MEG funcionan a temperatura ambiente. Ninguna técnica es la mejor en todo.",
    v: [
      "Electroencefalografía=Registro desde el cuero cabelludo de la actividad eléctrica cortical sincronizada",
      "Potencial evocado=Cambio del EEG ligado a un estímulo, obtenido promediando ensayos",
      "P300=Componente relacionado con la detección de estímulos relevantes",
      "N400=Componente relacionado con el procesamiento semántico",
      "Magnetoencefalografía=Registro de los campos magnéticos que genera la actividad neural",
      "OPM-MEG=Magnetómetros de bombeo óptico que funcionan a temperatura ambiente",
      "Ritmos cerebrales=Oscilaciones alfa, beta, theta y delta estudiadas con EEG",
      "Helio líquido=Refrigerante que necesitan los sensores de la MEG clásica"
    ],
    g: [
      "El EEG tiene una resolución temporal de ___, pero localiza mal el origen de la señal.|milisegundos|segundos|minutos",
      "Los potenciales evocados se obtienen ___ muchos ensayos ligados a un estímulo.|promediando|filtrando|descartando",
      "La MEG tiene la misma resolución temporal que el EEG y ___ mejor las fuentes.|localiza|amplifica|sincroniza",
      "El componente N400 se relaciona con el procesamiento ___.|semántico|fonológico|motor",
      "A diferencia de la MEG clásica, los OPM-MEG no necesitan refrigeración con ___.|helio líquido|nitrógeno líquido|agua destilada"
    ],
    tf: [
      "El EEG refleja sobre todo la actividad sincronizada de grandes poblaciones de neuronas corticales.|V",
      "La MEG tiene mejor resolución temporal que el EEG, pero peor localización de las fuentes.|F|Tiene la misma resolución temporal que el EEG y localiza mejor las fuentes.",
      "La P300 se relaciona con el procesamiento semántico de las palabras.|F|La P300 se asocia a la detección de estímulos relevantes; el procesamiento semántico corresponde a la N400.",
      "Los OPM-MEG se consideran todavía una técnica emergente.|V"
    ],
    q: [
      "En un experimento, los participantes leen frases como «tomó café con calcetines». ¿Qué componente se espera ante la palabra incongruente?|N400|P300|Ritmo alfa|La N400 se relaciona con el procesamiento semántico, que una palabra sin sentido en su contexto pone a prueba.",
      "Un investigador necesita seguir un proceso milisegundo a milisegundo y, además, localizar bien su origen. ¿Qué técnica le conviene más?|MEG|EEG|fMRI|La MEG iguala al EEG en resolución temporal y localiza mejor las fuentes; la fMRI es demasiado lenta.",
      "¿Para qué se usa típicamente el EEG?|Estudiar el sueño y la epilepsia|Medir la ocupación de receptores|Reconstruir tractos de sustancia blanca|Por su resolución de milisegundos, el EEG se usa para el sueño, la epilepsia y los ritmos cerebrales.",
      "¿Qué emparejamiento entre técnica y ventaja es correcto?|EEG y MEG: resolución temporal|fMRI: mejor especificidad química|PET: mejor resolución espacial|EEG y MEG ganan en resolución temporal; la fMRI, en espacial; la PET, en especificidad química."
    ],
    inc: [
      "Sobre el registro neurofisiológico|Los potenciales evocados se obtienen de un único ensayo|El EEG permite estudiar los ritmos alfa, beta, theta y delta|La MEG registra los campos magnéticos de la actividad neural|Los potenciales evocados se obtienen promediando muchos ensayos vinculados al estímulo."
    ],
    seq: [],
    cls: [
      "Resolución en la que destaca cada técnica|Temporal: EEG; MEG|Espacial: fMRI; resonancia magnética|Química: PET"
    ] },
  { t: "Registro psicofisiológico",
    tip: "Estas técnicas miden respuestas periféricas, sobre todo del sistema nervioso autónomo, que acompañan a los procesos psicológicos: actividad electrodermal (sudoración), EMG (músculos), ECG (corazón), EOG (movimientos oculares) y pupilometría (diámetro pupilar).",
    v: [
      "Actividad electrodermal=Conductancia de la piel debida a la sudoración",
      "Electromiografía=Actividad eléctrica de los músculos",
      "Electrocardiografía=Actividad eléctrica del corazón",
      "Electrooculografía=Registro de los movimientos de los ojos",
      "Pupilometría=Medida del diámetro de la pupila",
      "Variabilidad cardíaca=Índice derivado del ECG, además de la frecuencia cardíaca",
      "Sistema nervioso autónomo=Origen principal de las respuestas periféricas registradas",
      "Registro psicofisiológico=Medición de respuestas periféricas que acompañan a procesos psicológicos"
    ],
    g: [
      "La actividad electrodermal mide la ___ de la piel.|conductancia|temperatura|elasticidad",
      "La electrooculografía es útil para estudiar el sueño ___.|REM|profundo|lento",
      "La pupilometría se usa como índice de ___ mental y de activación.|esfuerzo|reposo|deterioro",
      "La electromiografía registra la tensión muscular y las ___ faciales.|expresiones|sensaciones|temperaturas",
      "Estos registros miden sobre todo respuestas del sistema nervioso ___.|autónomo|central|entérico"
    ],
    tf: [
      "La actividad electrodermal se usa como índice de activación emocional y de orientación.|V",
      "La electromiografía registra los movimientos oculares durante el sueño REM.|F|Eso corresponde a la electrooculografía; la EMG registra la actividad eléctrica muscular.",
      "La pupilometría se relaciona con el esfuerzo mental.|V",
      "El ECG mide la conductancia de la piel para estimar la activación emocional.|F|El ECG registra la actividad eléctrica cardíaca; la conductancia de la piel es la actividad electrodermal."
    ],
    q: [
      "En un estudio sobre carga de trabajo, se busca un índice de esfuerzo mental mientras se resuelven problemas cada vez más difíciles. ¿Qué registro encaja?|Pupilometría|Electrooculografía|Electromiografía|La pupilometría mide el diámetro pupilar, que se usa como índice de esfuerzo mental y de activación.",
      "Un investigador presenta imágenes amenazantes y mide la sudoración de las palmas. ¿Qué registro emplea?|Actividad electrodermal|Electromiografía facial|Electrocardiografía|La sudoración modifica la conductancia de la piel, que es lo que mide la actividad electrodermal.",
      "¿Qué tienen en común la actividad electrodermal, el ECG y la pupilometría frente al EEG?|Miden respuestas periféricas|Miden la actividad cortical|Usan trazadores radiactivos|Registran respuestas periféricas, sobre todo autónomas, no la actividad eléctrica del encéfalo.",
      "¿Qué emparejamiento entre registro y uso típico es correcto?|EOG: sueño REM y atención|EMG: frecuencia cardíaca|ECG: expresiones faciales|La EOG registra movimientos oculares; la frecuencia cardíaca es del ECG y las expresiones faciales, de la EMG."
    ],
    inc: [
      "Sobre los registros psicofisiológicos|La electrooculografía mide el diámetro pupilar|La EMG registra la actividad eléctrica muscular|El ECG permite estudiar la variabilidad cardíaca|La EOG registra movimientos oculares; el diámetro pupilar se mide con pupilometría."
    ],
    seq: [],
    cls: [
      "¿Qué tipo de respuesta se registra?|Respuestas autónomas: conductancia de la piel; frecuencia cardíaca; diámetro pupilar|Respuestas motoras: tensión muscular; movimientos oculares; expresiones faciales"
    ] }
] },
{ n: 3, t: "Técnicas II: manipulación y evaluación", cap: 1, pir: "baja", mods: [
  { t: "Lesión y estimulación",
    tip: "La neuroimagen es correlacional: no prueba que una región sea necesaria. Para inferir causalidad hay que manipular, lesionando (por aspiración, electrolítica, neurotóxica o reversible) o estimulando. El registro unicelular y la microdiálisis miden actividad y neurotransmisores. En humanos sanos se usan la EMT, capaz de producir una «lesión virtual», y la tDCS, de efectos más modestos y discutidos.",
    v: [
      "Lesión electrolítica=Destrucción de tejido mediante corriente eléctrica",
      "Lesión neurotóxica=Destrucción de somas que respeta los axones de paso",
      "Lesión reversible=Inactivación temporal por enfriamiento o anestésicos locales",
      "Ácido iboténico=Ejemplo de sustancia empleada para producir lesiones neurotóxicas",
      "Registro unicelular=Captación de la actividad de una sola neurona con un microelectrodo",
      "Microdiálisis=Muestreo del líquido extracelular para medir neurotransmisores",
      "Lesión virtual=Interferencia temporal con una región cortical mediante EMT",
      "Estimulación cerebral profunda=Electrodos implantados que se usan hoy para tratar el párkinson"
    ],
    g: [
      "Penfield usó la estimulación eléctrica en la cirugía de la ___ para cartografiar la corteza.|epilepsia|esquizofrenia|depresión",
      "Gracias al registro unicelular se descubrieron las células de ___ del hipocampo.|lugar|rejilla|dirección",
      "La EMT tiene usos terapéuticos en la depresión ___.|resistente|leve|posparto",
      "La tDCS modifica la ___ cortical mediante una corriente débil.|excitabilidad|estructura|irrigación",
      "Las técnicas de neuroimagen son ___: muestran asociaciones, no causas.|correlacionales|experimentales|causales"
    ],
    tf: [
      "Que una región se active en fMRI durante una tarea demuestra que es necesaria para realizarla.|F|La neuroimagen es correlacional; para afirmar que una región es necesaria hay que manipularla.",
      "La microdiálisis permite medir la liberación de neurotransmisores en el líquido extracelular.|V",
      "La tDCS tiene efectos robustos y bien replicados, por lo que su uso clínico está consolidado.|F|Sus efectos son pequeños y poco replicables en muchos estudios; su utilidad clínica sigue en evaluación.",
      "En humanos se estudian lesiones naturales, como ictus, traumatismos o tumores.|V"
    ],
    q: [
      "Tras ver en fMRI que una zona parietal se activa en una tarea espacial, un equipo aplica EMT sobre ella y el rendimiento empeora de forma pasajera. ¿Qué aporta la EMT?|Evidencia causal sobre esa región|Una medida más precisa de su actividad|Una lesión permanente y localizada|La EMT interfiere de forma transitoria con la región: al manipularla permite inferir causalidad, cosa que la fMRI no permite.",
      "Se quiere eliminar las neuronas de un núcleo sin dañar los axones que lo atraviesan. ¿Qué tipo de lesión conviene?|Neurotóxica|Electrolítica|Por aspiración|Las neurotoxinas, como el ácido iboténico, destruyen somas pero respetan los axones de paso.",
      "¿Qué técnica serviría para medir la liberación de dopamina en el estriado de una rata durante una tarea?|Microdiálisis|Registro unicelular|tDCS|La sonda de microdiálisis recoge líquido extracelular para medir neurotransmisores; el registro unicelular mide actividad eléctrica.",
      "¿Qué diferencia a la EMT de la tDCS?|La EMT induce corrientes con un campo magnético|La tDCS requiere implantar electrodos en el cerebro|La tDCS produce efectos más intensos y estables|La EMT usa un campo magnético sobre el cráneo; la tDCS, una corriente débil, con efectos más modestos y variables."
    ],
    inc: [
      "Sobre las técnicas de lesión|Las lesiones electrolíticas respetan los axones de paso|El enfriamiento produce una lesión reversible|Las lesiones naturales humanas incluyen ictus y tumores|Respetar los axones de paso es propio de las lesiones neurotóxicas, como las del ácido iboténico."
    ],
    seq: [],
    cls: [
      "Técnicas invasivas y no invasivas|Invasivas: lesión electrolítica; registro unicelular; microdiálisis; estimulación cerebral profunda|No invasivas: EMT; tDCS"
    ] },
  { t: "Optogenética y quimiogenética",
    tip: "Desarrolladas en la década de 2000, permiten controlar tipos celulares concretos, no regiones enteras. La optogenética introduce opsinas y usa luz por fibra óptica, con precisión de milisegundos. La quimiogenética (DREADDs) usa receptores que solo responden a un ligando de diseño inerte: es menos precisa en el tiempo, pero no requiere fibra óptica. Ambas permiten demostrar causalidad, sobre todo en roedores.",
    v: [
      "Optogenética=Control de neuronas seleccionadas con luz mediante proteínas fotosensibles",
      "Opsinas=Proteínas sensibles a la luz que se introducen en neuronas",
      "Fibra óptica=Vía por la que se lleva la luz hasta el tejido",
      "Quimiogenética=Control de neuronas mediante receptores modificados y un ligando de diseño",
      "DREADDs=Receptores de diseño activados solo por un ligando inerte",
      "Ligando de diseño=Sustancia inerte para el organismo que activa el receptor modificado",
      "Selectividad celular=Capacidad de actuar sobre un tipo concreto de neuronas, no sobre una región",
      "Precisión de milisegundos=Resolución temporal propia del control mediante luz"
    ],
    g: [
      "En optogenética, las neuronas que expresan opsinas se activan o se silencian con un pulso de ___.|luz|corriente|fármaco",
      "La quimiogenética es ___ precisa en el tiempo que la optogenética.|menos|más|igual de",
      "Ambas técnicas se aplican sobre todo en ___.|roedores|primates|humanos",
      "La optogenética requiere implantar ___ para llevar la luz al tejido.|fibra óptica|un microelectrodo|una sonda de diálisis",
      "El valor de estas técnicas es demostrar que un grupo concreto de neuronas ___ una conducta.|causa|acompaña|refleja"
    ],
    tf: [
      "La optogenética actúa sobre regiones enteras, mientras que la quimiogenética actúa sobre tipos celulares.|F|Ambas permiten controlar tipos celulares concretos, no regiones enteras.",
      "El ligando usado en quimiogenética es inerte para el resto del organismo.|V",
      "La quimiogenética supera a la optogenética en precisión temporal.|F|Es al revés: la optogenética tiene precisión de milisegundos y la quimiogenética es menos precisa en el tiempo.",
      "Con optogenética se puede tanto activar como silenciar neuronas.|V"
    ],
    q: [
      "Se quiere inhibir un tipo concreto de neurona en ratones sin implantarles fibra óptica. ¿Qué técnica es la más adecuada?|Quimiogenética|Optogenética|Lesión electrolítica|Los DREADDs se activan con un ligando administrado, sin fibra óptica; la lesión no selecciona tipos celulares.",
      "Un equipo necesita activar neuronas concretas justo cuando el ratón ve un estímulo, con precisión de milisegundos. ¿Qué técnica elige?|Optogenética|Quimiogenética|Microdiálisis|Solo la optogenética ofrece control de tipos celulares con precisión de milisegundos.",
      "¿Qué propiedad de las opsinas las hace útiles en investigación?|Son sensibles a la luz|Responden a un ligando inerte|Destruyen somas de forma selectiva|Las opsinas son proteínas fotosensibles; responder a un ligando inerte es propio de los DREADDs.",
      "¿Qué aporta la optogenética que no aporta la neuroimagen funcional?|Evidencia causal sobre tipos celulares|Mayor resolución espacial en humanos sanos|Registro no invasivo de la actividad cortical|Al manipular tipos celulares concretos, la optogenética permite demostrar causalidad; la neuroimagen solo muestra asociaciones."
    ],
    inc: [
      "Sobre la optogenética y la quimiogenética|Ambas se emplean habitualmente en humanos sanos|Ambas permiten controlar tipos celulares concretos|La quimiogenética usa receptores modificados|Se aplican sobre todo en roedores; en humanos sanos se usan técnicas no invasivas como la EMT o la tDCS."
    ],
    seq: [],
    cls: [
      "Rasgos de cada técnica|Optogenética: opsinas; pulsos de luz; fibra óptica; precisión de milisegundos|Quimiogenética: DREADDs; ligando de diseño; sin fibra óptica"
    ] },
  { t: "Técnicas genéticas",
    tip: "Los animales modificados genéticamente muestran qué ocurre cuando falta o cambia un gen: knock-out (gen inactivado), knock-in (gen modificado o sustituido) y transgénicos (gen añadido). CRISPR-Cas9 edita el ADN de forma precisa y barata; en neurociencia se usa en modelos animales y celulares, no para modificar rasgos conductuales humanos. Los GWAS buscan variantes asociadas a un rasgo.",
    v: [
      "Ratón knock-out=Animal con un gen inactivado",
      "Ratón knock-in=Animal con un gen modificado o sustituido",
      "Transgénico=Organismo al que se le ha añadido un gen",
      "CRISPR-Cas9=Sistema que corta el ADN en un punto elegido para modificar genes",
      "Origen de CRISPR=Mecanismo de defensa de las bacterias",
      "Charpentier y Doudna=Premio Nobel de Química de 2020 por la edición génica",
      "GWAS=Comparación de millones de variantes genéticas entre miles de personas",
      "Variante genética=Diferencia en la secuencia de ADN entre individuos"
    ],
    g: [
      "Un ratón ___ tiene un gen inactivado.|knock-out|knock-in|transgénico",
      "CRISPR-Cas9 deriva de las defensas de las ___.|bacterias|levaduras|plantas",
      "Los GWAS comparan millones de variantes genéticas para buscar las ___ a un rasgo.|asociadas|opuestas|ajenas",
      "En neurociencia, CRISPR-Cas9 se usa en modelos animales y ___.|celulares|humanos|vegetales",
      "CRISPR-Cas9 permite modificar genes de forma precisa y ___.|barata|lenta|aleatoria"
    ],
    tf: [
      "Un ratón knock-in es aquel en el que se ha inactivado un gen.|F|Inactivar un gen define al knock-out; el knock-in tiene un gen modificado o sustituido.",
      "CRISPR-Cas9 se emplea actualmente para modificar rasgos conductuales en humanos.|F|En neurociencia se usa en modelos animales y celulares; no se emplea para modificar rasgos conductuales humanos.",
      "El Nobel de Química de 2020 premió a Charpentier y Doudna por CRISPR-Cas9.|V",
      "Los animales knock-out permiten estudiar qué ocurre cuando falta un gen.|V"
    ],
    q: [
      "Para estudiar la función de un receptor, se crían ratones en los que se ha inactivado el gen que lo codifica. ¿Qué son?|Ratones knock-out|Ratones knock-in|Ratones transgénicos|Un gen inactivado define al knock-out; el knock-in lo tiene modificado o sustituido y el transgénico, añadido.",
      "¿Qué describe mejor a CRISPR-Cas9?|Un sistema que corta el ADN en un punto elegido|Un método para comparar variantes entre personas|Una técnica que añade genes al azar en el genoma|CRISPR-Cas9 corta el ADN en un lugar elegido y permite editar genes; comparar variantes entre personas es propio de los GWAS.",
      "¿Qué permiten los estudios GWAS?|Buscar variantes asociadas a un rasgo|Inactivar un gen concreto en un animal|Editar el ADN de forma precisa y barata|Comparan millones de variantes entre miles de personas para hallar las asociadas a un rasgo.",
      "¿Qué distingue a un animal transgénico de un knock-in?|El transgénico tiene un gen añadido|El transgénico tiene un gen inactivado|El knock-in tiene un gen inactivado|El transgénico incorpora un gen añadido; el knock-in tiene un gen modificado o sustituido."
    ],
    inc: [
      "Sobre las técnicas genéticas|Los GWAS estudian un único gen en pocas familias|CRISPR-Cas9 corta el ADN en un punto elegido|Los ratones knock-out tienen un gen inactivado|Los GWAS comparan millones de variantes genéticas entre miles de personas."
    ],
    seq: [],
    cls: [
      "Tipo de animal modificado|Knock-out: gen inactivado|Knock-in: gen modificado; gen sustituido|Transgénico: gen añadido"
    ] },
  { t: "Evaluación neuropsicológica y conducta animal",
    tip: "La evaluación neuropsicológica usa tests estandarizados para describir el perfil cognitivo tras un daño cerebral o en una enfermedad neurodegenerativa (Wechsler, Wisconsin, Stroop, Trail Making Test, figura de Rey). En animales se usan pruebas como el laberinto de Morris, el radial, la cruz elevada, el campo abierto o el condicionamiento del miedo, con límites de validez.",
    v: [
      "Escalas de Wechsler=Pruebas estandarizadas de inteligencia",
      "Test de Wisconsin=Clasificación de tarjetas que evalúa la flexibilidad cognitiva",
      "Test de Stroop=Prueba de control inhibitorio",
      "Trail Making Test=Prueba de atención y flexibilidad",
      "Figura compleja de Rey=Prueba de memoria y praxias visoconstructivas",
      "Laberinto acuático de Morris=Memoria espacial dependiente del hipocampo",
      "Laberinto en cruz elevado=Conducta de tipo ansioso por evitación de los brazos abiertos",
      "Campo abierto=Actividad locomotora y exploración"
    ],
    g: [
      "El laberinto radial evalúa la memoria ___ espacial.|de trabajo|semántica|procedimental",
      "El condicionamiento del miedo evalúa el aprendizaje emocional, que depende de la ___.|amígdala|ínsula|corteza visual",
      "El test de Stroop evalúa sobre todo el control ___.|inhibitorio|motor|perceptivo",
      "En el laberinto de Morris, el animal debe recordar la posición de una plataforma ___.|oculta|móvil|iluminada",
      "En el laberinto en cruz elevado, la conducta de tipo ansioso se manifiesta como evitación de los brazos ___.|abiertos|cerrados|centrales"
    ],
    tf: [
      "Una conducta de tipo ansioso en un ratón equivale a un trastorno de ansiedad humano.|F|No equivale: estos modelos tienen límites y algunas pruebas clásicas se discuten por su validez.",
      "El test de Wisconsin evalúa la flexibilidad cognitiva.|V",
      "La figura compleja de Rey evalúa sobre todo el control inhibitorio.|F|Evalúa memoria y praxias visoconstructivas; el control inhibitorio se mide con el test de Stroop.",
      "La evaluación neuropsicológica se usa también en enfermedades neurodegenerativas.|V"
    ],
    q: [
      "Una paciente con lesión frontal sigue clasificando tarjetas por el color aunque el criterio ya ha cambiado a la forma. ¿Qué función está alterada?|La flexibilidad cognitiva|La memoria espacial|Las praxias visoconstructivas|El test de Wisconsin evalúa la flexibilidad cognitiva: mantener un criterio que ya no sirve indica rigidez.",
      "Un ratón con lesión hipocampal no mejora con los ensayos en la búsqueda de una plataforma sumergida. ¿Qué prueba y función se evalúan?|Laberinto de Morris: memoria espacial|Campo abierto: actividad locomotora|Cruz elevada: conducta de tipo ansioso|El laberinto acuático de Morris evalúa la memoria espacial, que depende del hipocampo.",
      "Un fármaco reduce el tiempo que las ratas pasan en los brazos abiertos del laberinto en cruz elevado. ¿Qué sugiere este resultado?|Más conducta de tipo ansioso|Mejor memoria espacial del animal|Peor aprendizaje emocional|Evitar los brazos abiertos es el indicador de conducta de tipo ansioso, sin equivaler a un trastorno de ansiedad humano.",
      "¿Qué prueba neuropsicológica se relaciona con el control inhibitorio?|Test de Stroop|Trail Making Test|Escalas de Wechsler|El Stroop mide control inhibitorio; el Trail Making Test, atención y flexibilidad; el Wechsler, inteligencia."
    ],
    inc: [
      "Sobre las pruebas de evaluación|El campo abierto evalúa la memoria de trabajo|El laberinto de Morris depende del hipocampo|El Trail Making Test evalúa atención y flexibilidad|El campo abierto mide actividad locomotora y exploración; la memoria de trabajo espacial se evalúa con el laberinto radial."
    ],
    seq: [],
    cls: [
      "¿Prueba neuropsicológica o animal?|Evaluación neuropsicológica: test de Wisconsin; test de Stroop; figura de Rey; Trail Making Test|Conducta animal: laberinto de Morris; laberinto radial; campo abierto; cruz elevada"
    ] }
] },
{ n: 4, t: "Desarrollo del sistema nervioso", cap: 2, pir: "media", mods: [
  { t: "Neurulación y vesículas cerebrales",
    tip: "El sistema nervioso procede del ectodermo. Hacia la tercera semana se forma la placa neural, que se pliega hasta formar el tubo neural, cerrado hacia el final de la cuarta semana. La cresta neural origina gran parte del sistema nervioso periférico. El extremo anterior forma tres vesículas primarias y luego cinco secundarias; la cavidad del tubo da los ventrículos y su parte posterior, la médula espinal.",
    v: [
      "Ectodermo=Capa externa del embrión de la que procede el sistema nervioso",
      "Placa neural=Franja engrosada de ectodermo dorsal hacia la tercera semana",
      "Neurulación=Formación del tubo a partir de la placa neural",
      "Cresta neural=Células de los bordes de la placa que originan gran parte del SNP",
      "Espina bífida=Defecto por cierre incompleto en la parte caudal del tubo",
      "Anencefalia=Defecto por fallo del cierre en la parte rostral del tubo",
      "Ácido fólico=Su aporte antes y durante el embarazo reduce los defectos del tubo",
      "Mielencéfalo=Vesícula secundaria que origina el bulbo raquídeo"
    ],
    g: [
      "El tubo neural se cierra hacia el final de la ___ semana de gestación.|cuarta|tercera|octava",
      "El rombencéfalo origina el metencéfalo y el ___.|mielencéfalo|mesencéfalo|diencéfalo",
      "El metencéfalo da lugar a la protuberancia y al ___.|cerebelo|bulbo raquídeo|tálamo",
      "De la cresta neural derivan, entre otras, las células de ___.|Schwann|Purkinje|Betz",
      "La cavidad del tubo neural da lugar al sistema ___.|ventricular|límbico|reticular"
    ],
    tf: [
      "El hipocampo y la amígdala derivan del telencéfalo.|V",
      "El tálamo y el hipotálamo derivan del mesencéfalo.|F|Derivan del diencéfalo, una vesícula secundaria del prosencéfalo.",
      "El mesencéfalo es la única vesícula primaria que no se divide en dos vesículas secundarias.|V",
      "El sistema nervioso procede del mesodermo, la capa media del embrión.|F|Procede del ectodermo, la capa externa del embrión."
    ],
    q: [
      "Un recién nacido presenta un defecto por cierre incompleto de la parte caudal del tubo neural. ¿Qué es y qué habría reducido su riesgo?|Espina bífida; ácido fólico|Anencefalia; ácido fólico|Espina bífida; suplementos de hierro|El fallo caudal produce espina bífida (el rostral, anencefalia); el aporte de ácido fólico antes y durante el embarazo reduce su riesgo.",
      "¿De qué vesícula secundaria deriva el bulbo raquídeo?|Mielencéfalo|Metencéfalo|Mesencéfalo|El mielencéfalo origina el bulbo; el metencéfalo, la protuberancia y el cerebelo.",
      "¿Qué estructuras proceden del mesencéfalo?|El tectum y el tegmento|La protuberancia y el cerebelo|El tálamo y el subtálamo|El mesencéfalo da el tectum (colículos) y el tegmento; protuberancia y cerebelo son del metencéfalo.",
      "¿Qué parte del sistema nervioso deriva en gran medida de la cresta neural?|Los ganglios sensitivos y autónomos|La corteza cerebral y el hipocampo|La médula espinal y sus raíces motoras|La cresta neural origina gran parte del sistema nervioso periférico: ganglios sensitivos y autónomos y células de Schwann."
    ],
    inc: [
      "Sobre las vesículas cerebrales|El cerebelo deriva del mielencéfalo|El prosencéfalo da el telencéfalo y el diencéfalo|Los ganglios basales derivan del telencéfalo|El cerebelo, como la protuberancia, deriva del metencéfalo; el mielencéfalo origina el bulbo raquídeo."
    ],
    seq: [
      "Del ectodermo al tubo neural|Engrosamiento del ectodermo dorsal en placa neural>Elevación de los bordes de la placa>Plegamiento de la placa>Fusión de los bordes>Cierre completo del tubo neural"
    ],
    cls: [
      "Derivados de cada vesícula primaria|Prosencéfalo: corteza cerebral; tálamo; hipotálamo; ganglios basales|Mesencéfalo: colículos; tegmento|Rombencéfalo: protuberancia; cerebelo; bulbo raquídeo"
    ] },
  { t: "Proliferación y migración",
    tip: "Las células madre neurales se dividen en la zona ventricular. Las nuevas neuronas migran de forma radial, trepando por la glía radial, o tangencial, como muchas interneuronas inhibitorias. La corteza se construye de dentro afuera. Después, las neuronas se agregan en capas y núcleos gracias a moléculas de adhesión. Los fallos de migración causan malformaciones como la lisencefalia.",
    v: [
      "Zona ventricular=Región junto a la cavidad del tubo donde se dividen las células madre",
      "Células madre neurales=Células que generan neuronas y glía durante la proliferación",
      "Glía radial=Células cuyas prolongaciones guían la migración de las neuronas",
      "Migración radial=Desplazamiento de neuronas trepando por prolongaciones gliales",
      "Migración tangencial=Desplazamiento paralelo a la superficie, típico de interneuronas inhibitorias",
      "De dentro afuera=Patrón por el que las neuronas tardías ocupan las capas superficiales",
      "Agregación=Agrupamiento de neuronas del mismo tipo en capas y núcleos",
      "Lisencefalia=Corteza lisa, sin circunvoluciones, por fallo en la migración"
    ],
    g: [
      "Muchas interneuronas inhibitorias llegan a la corteza mediante migración ___.|tangencial|radial|axonal",
      "En la corteza, las neuronas que llegan más tarde ocupan las capas más ___.|superficiales|profundas|internas",
      "La agregación de neuronas en capas y núcleos depende de moléculas de ___.|adhesión celular|transporte axónico|reserva energética",
      "La proliferación de las células madre neurales tiene lugar en la zona ___.|ventricular|cortical|marginal",
      "La lisencefalia se debe a un fallo en la ___ neuronal.|migración|proliferación|mielinización"
    ],
    tf: [
      "La corteza se construye de fuera adentro: las primeras neuronas en llegar ocupan las capas superficiales.|F|Se construye de dentro afuera: las neuronas tardías atraviesan a las anteriores y ocupan las capas superficiales.",
      "En la migración radial, las neuronas se desplazan por las prolongaciones de la glía radial.|V",
      "Las interneuronas inhibitorias corticales llegan a su destino sobre todo por migración radial.|F|Muchas interneuronas inhibitorias migran de forma tangencial, en paralelo a la superficie.",
      "La proliferación produce tanto neuronas como células gliales.|V"
    ],
    q: [
      "En la resonancia de un niño se observa una corteza lisa, sin circunvoluciones. ¿En qué proceso del desarrollo se originó el problema?|Migración|Proliferación|Mielinización|La lisencefalia es una malformación causada por fallos en la migración neuronal.",
      "Si se marcan las neuronas corticales según el momento en que se generan, ¿dónde estarán las más tardías?|En las capas más superficiales|En las capas más profundas|Repartidas por igual en todas las capas|La corteza se forma de dentro afuera: las neuronas tardías atraviesan a las anteriores y se sitúan más arriba.",
      "¿Qué papel cumple la glía radial durante el desarrollo cortical?|Guía la migración de las neuronas|Produce la mielina de los axones corticales|Elimina las sinapsis sobrantes|Sus prolongaciones sirven de vía por la que trepan las neuronas en la migración radial.",
      "¿Qué orden de procesos es el correcto?|Proliferación, migración, agregación|Migración, proliferación, agregación|Agregación, proliferación, migración|Primero se generan las células en la zona ventricular, después migran y, por último, se agrupan en capas y núcleos."
    ],
    inc: [
      "Sobre la proliferación y la migración|Las neuronas tardías ocupan las capas profundas|Las células madre neurales se dividen en la zona ventricular|Muchas interneuronas inhibitorias migran de forma tangencial|Las neuronas tardías atraviesan a las anteriores y ocupan las capas superficiales: la corteza se forma de dentro afuera."
    ],
    seq: [],
    cls: [
      "Tipo de migración|Radial: trepa por la glía radial; perpendicular a la superficie|Tangencial: paralela a la superficie; muchas interneuronas inhibitorias"
    ] },
  { t: "Conexiones, muerte neuronal y mielinización",
    tip: "El cono de crecimiento orienta el axón siguiendo moléculas guía. La sinaptogénesis produce más sinapsis de las que se mantendrán. Muchas neuronas mueren por apoptosis: sobreviven las que reciben neurotrofinas, como el NGF. La poda, con participación de la microglía, elimina las sinapsis poco usadas. La mielinización avanza de áreas sensoriales y motoras a asociativas y en la prefrontal dura hasta la tercera década.",
    v: [
      "Cono de crecimiento=Extremo del axón en desarrollo que sigue moléculas guía",
      "Moléculas guía=Señales que atraen o repelen al axón en crecimiento",
      "Sinaptogénesis=Formación de sinapsis, acelerada al final del embarazo y en los primeros años",
      "Apoptosis=Muerte celular programada",
      "Neurotrofinas=Factores de las células diana que favorecen la supervivencia neuronal",
      "NGF=Primera neurotrofina identificada, descubierta por Rita Levi-Montalcini",
      "Poda sináptica=Eliminación de las conexiones menos usadas y refuerzo de las activas",
      "Sistema del complemento=Proteínas que marcan las sinapsis que eliminará la microglía"
    ],
    g: [
      "La microglía elimina sinapsis marcadas por proteínas del sistema del ___.|complemento|interferón|glutatión",
      "La mielinización avanza de las regiones sensoriales y motoras a las ___.|asociativas|subcorticales|límbicas",
      "Al nacer, el encéfalo pesa alrededor de ___ de su peso adulto.|una cuarta parte|la mitad|tres cuartas partes",
      "Las neuronas que no reciben suficientes neurotrofinas mueren por ___.|apoptosis|necrosis|excitotoxicidad",
      "En algunas regiones muere por apoptosis cerca de ___ de las neuronas generadas.|la mitad|la décima parte|las tres cuartas partes"
    ],
    tf: [
      "Durante el desarrollo se producen más sinapsis de las que finalmente se mantendrán.|V",
      "El crecimiento del encéfalo tras el nacimiento se debe sobre todo a la producción de nuevas neuronas.|F|Se debe sobre todo al aumento de conexiones, glía y mielina, no a la generación de nuevas neuronas.",
      "La mielinización de la corteza prefrontal se completa hacia los dos años de edad.|F|Continúa hasta la tercera década de vida, lo que se relaciona con la maduración tardía del control ejecutivo.",
      "La microglía participa activamente en la poda sináptica.|V"
    ],
    q: [
      "Un adolescente de 16 años muestra un control de impulsos todavía inmaduro. ¿Qué dato del desarrollo encaja con esta observación?|La mielinización prefrontal sigue en curso|La migración cortical aún no ha terminado|La apoptosis prefrontal aún no ha empezado|La mielinización prefrontal continúa hasta la tercera década y se relaciona con la maduración tardía del control ejecutivo.",
      "¿De qué depende que una neurona en desarrollo sobreviva?|De recibir neurotrofinas de sus dianas|De que su axón esté ya completamente mielinizado|De haber migrado por la glía radial|Sobreviven las neuronas que reciben suficientes neurotrofinas de sus células diana; las demás mueren por apoptosis.",
      "¿Qué estructura del axón en crecimiento responde a las moléculas guía?|El cono de crecimiento|El segmento inicial|La vaina de mielina|El cono de crecimiento, en el extremo del axón, se orienta según moléculas guía que lo atraen o lo repelen.",
      "¿Qué orden es el correcto?|Proliferación, migración, sinaptogénesis, poda|Migración, proliferación, poda, sinaptogénesis|Proliferación, sinaptogénesis, migración, poda|Primero se generan las neuronas, luego migran, después se conectan y, por último, se eliminan las sinapsis sobrantes."
    ],
    inc: [
      "Sobre la muerte neuronal y la poda|La poda elimina las sinapsis más activas|La apoptosis es una muerte celular programada|El NGF fue la primera neurotrofina identificada|La poda elimina las sinapsis menos usadas y refuerza las activas."
    ],
    seq: [
      "Fases del desarrollo del sistema nervioso|Neurulación>Proliferación>Migración>Agregación>Crecimiento axónico>Sinaptogénesis>Poda sináptica"
    ],
    cls: [] },
  { t: "Plasticidad y neurogénesis adulta",
    tip: "La plasticidad neural, la capacidad de cambiar estructura y función con la experiencia, se mantiene en el adulto: se forman y eliminan sinapsis, cambia su eficacia y se reorganizan los mapas corticales. La neurogénesis adulta está bien demostrada en roedores (giro dentado y zona subventricular). En humanos se debate cuánta hay en el hipocampo y qué función tiene.",
    v: [
      "Plasticidad neural=Capacidad del sistema nervioso de cambiar estructura y función con la experiencia",
      "Potenciación a largo plazo=Aumento duradero de la eficacia sináptica, base del aprendizaje",
      "Reorganización cortical=Cambio de los mapas de la corteza tras un aprendizaje intenso o una lesión",
      "Neurogénesis adulta=Nacimiento de nuevas neuronas en el cerebro maduro",
      "Giro dentado=Zona del hipocampo con neurogénesis adulta demostrada en roedores",
      "Zona subventricular=Origen de neuronas adultas que migran al bulbo olfatorio en roedores",
      "Sorrells et al. (2018)=No hallaron neurogénesis hipocampal detectable más allá de la infancia",
      "Moreno-Jiménez et al. (2019)=Hallaron neurogénesis hipocampal hasta la novena década, reducida en alzhéimer"
    ],
    g: [
      "En roedores, las neuronas nacidas en la zona subventricular migran al ___.|bulbo olfatorio|giro dentado|cuerpo estriado",
      "Hoy el debate sobre la neurogénesis hipocampal humana se centra en cuánta hay y qué ___ tiene.|función|origen|antigüedad",
      "La plasticidad sináptica en el adulto se considera un hecho firmemente ___.|establecido|discutido|refutado",
      "Moreno-Jiménez y colaboradores atribuyeron los resultados negativos a problemas en la ___ del tejido.|conservación|tinción|obtención",
      "La neurogénesis adulta en el hipocampo de los roedores se localiza en el ___.|giro dentado|asta de Ammon|subículo"
    ],
    tf: [
      "La plasticidad neural se limita a los primeros años de vida.|F|Persiste en el adulto: se forman y eliminan sinapsis, cambia su eficacia y se reorganizan los mapas corticales.",
      "La neurogénesis adulta está bien demostrada en roedores en el giro dentado y en la zona subventricular.|V",
      "Está demostrado que el hipocampo humano adulto no genera neuronas nuevas.|F|Es una cuestión en debate: unos estudios no la detectan y otros la hallan hasta la vejez.",
      "Moreno-Jiménez y colaboradores hallaron la neurogénesis hipocampal reducida en la enfermedad de Alzheimer.|V"
    ],
    q: [
      "Tras años de práctica con un instrumento, el mapa cortical de los dedos de un músico se ha ampliado. ¿Qué fenómeno ilustra?|Plasticidad neural en el adulto|Neurogénesis en la zona subventricular|Mielinización prefrontal tardía|La reorganización de los mapas corticales tras un aprendizaje intenso es una forma de plasticidad que persiste en el adulto.",
      "¿Qué afirmación refleja mejor el estado actual del debate sobre la neurogénesis hipocampal humana?|Se discute sobre todo su cantidad y su función|Quedó descartada tras los estudios de 2018|Se ha confirmado igual de abundante que en roedores|Los estudios siguen discrepando; la discusión ya no es tanto si existe como cuánta hay y qué función tiene.",
      "¿Qué hallaron Sorrells y colaboradores en 2018?|Sin neurogénesis detectable tras la infancia|Neurogénesis hipocampal hasta edades avanzadas|Neurogénesis reducida en la enfermedad de Alzheimer|No encontraron neurogénesis detectable más allá de la infancia; Boldrini y colaboradores la describieron hasta la vejez.",
      "¿Qué se considera firmemente establecido?|La plasticidad sináptica en el adulto|La neurogénesis hipocampal humana abundante|La neurogénesis cortical en el adulto|La plasticidad sináptica adulta es un hecho consolidado; la neurogénesis hipocampal humana sigue en debate."
    ],
    inc: [
      "Sobre la plasticidad y la neurogénesis adulta|En roedores, la neurogénesis adulta se da en la prefrontal|Los mapas corticales pueden reorganizarse tras una lesión|En el adulto se siguen formando y eliminando sinapsis|En roedores está demostrada en el giro dentado del hipocampo y en la zona subventricular, no en la prefrontal."
    ],
    seq: [],
    cls: [
      "¿Consenso o debate?|Consenso: plasticidad sináptica adulta; poda mediada por microglía en animales; neurogénesis adulta en roedores|Debate: cantidad de neurogénesis hipocampal humana; función de las nuevas neuronas hipocampales humanas"
    ] }
] }
);

// SAIMAP Psicología · Bases Biológicas · Unidades 5–8
window.COURSE.units.push(
{ n: 5, t: "Protección y vascularización", cap: 2, pir: "media", mods: [
{ t: "Meninges",
  tip: "Tres meninges envuelven el sistema nervioso central: la duramadre (externa, gruesa, con pliegues como la hoz y la tienda, y con los senos venosos), la aracnoides (intermedia y delgada) y la piamadre (interna, sigue todos los surcos). Bajo la aracnoides está el espacio subaracnoideo, con LCR. Las hemorragias se nombran según su posición respecto a estas capas.",
  v: [
    "Duramadre=Meninge externa, gruesa y resistente, que contiene los senos venosos",
    "Aracnoides=Meninge intermedia y delgada, bajo la cual circula el LCR",
    "Piamadre=Meninge interna y fina, adherida al encéfalo y que sigue todos sus surcos",
    "Espacio subaracnoideo=Espacio lleno de LCR y atravesado por vasos sanguíneos",
    "Hoz del cerebro=Pliegue de la duramadre que se introduce entre los dos hemisferios",
    "Tienda del cerebelo=Pliegue de la duramadre que separa el cerebro del cerebelo",
    "Meningitis=Inflamación de las membranas que envuelven el sistema nervioso central",
    "Hematoma epidural=Sangrado entre el cráneo y la duramadre, habitualmente arterial"
  ],
  g: [
    "El hematoma ___ se sitúa bajo la duramadre y suele ser de origen venoso.|subdural|epidural|subaracnoideo",
    "Los senos venosos se encuentran en la ___.|duramadre|aracnoides|piamadre",
    "La ___ es la meninge que sigue al encéfalo en todos sus surcos.|piamadre|aracnoides|duramadre",
    "La hemorragia subaracnoidea se asocia a menudo a la rotura de un ___.|aneurisma|seno venoso|plexo coroideo",
    "El líquido cefalorraquídeo ocupa el espacio situado justo por debajo de la ___.|aracnoides|duramadre|piamadre"
  ],
  tf: [
    "La piamadre está adherida a la superficie del encéfalo y se introduce en sus surcos.|V",
    "El hematoma epidural se localiza bajo la duramadre y suele ser venoso.|F|El epidural está entre cráneo y duramadre y suele ser arterial; bajo la duramadre y venoso es el subdural.",
    "El espacio subaracnoideo está atravesado por vasos sanguíneos.|V",
    "La hoz del cerebro y la tienda del cerebelo son pliegues de la aracnoides.|F|Son pliegues de la duramadre, la meninge más externa y resistente."
  ],
  q: [
    "¿Entre qué estructuras se acumula la sangre en un hematoma epidural?|Entre el cráneo y la duramadre|Entre la duramadre y la aracnoides|Entre la aracnoides y la piamadre|El epidural queda por encima de la duramadre, entre ella y el hueso, y suele ser arterial.",
    "Tras un traumatismo craneal, el TAC muestra sangre de origen venoso justo bajo la duramadre. ¿Qué diagnóstico encaja mejor?|Hematoma subdural|Hematoma epidural|Hemorragia subaracnoidea|El hematoma subdural se sitúa bajo la duramadre y suele ser venoso; el epidural suele ser arterial.",
    "¿Qué caracteriza al espacio subaracnoideo?|Contiene LCR y lo cruzan vasos|Separa el cráneo de la duramadre|Aloja los senos venosos durales|Está bajo la aracnoides, lleno de líquido cefalorraquídeo y atravesado por vasos sanguíneos.",
    "Una paciente sufre una cefalea súbita por la rotura de un aneurisma. ¿Qué tipo de hemorragia es más probable?|Subaracnoidea|Epidural|Subdural|La hemorragia subaracnoidea se asocia a menudo a la rotura de un aneurisma."
  ],
  inc: [
    "Sobre las meninges, señala la afirmación INCORRECTA.|La aracnoides es la más gruesa y resistente|La piamadre es la más interna y fina|La duramadre forma pliegues como la hoz|La más gruesa y resistente es la duramadre; la aracnoides es intermedia y delgada."
  ],
  seq: [
    "Del hueso al encéfalo: ordena de fuera adentro|Cráneo>Duramadre>Aracnoides>Espacio subaracnoideo>Piamadre"
  ],
  cls: [] },

{ t: "Sistema ventricular y líquido cefalorraquídeo",
  tip: "El LCR lo producen sobre todo los plexos coroideos. Amortigua golpes, hace que el encéfalo «flote» y ayuda a eliminar sustancias. Hay unos 150 ml y se producen unos 500 ml al día, así que se renueva varias veces. Recorrido: ventrículos laterales, agujeros de Monro, tercer ventrículo, acueducto de Silvio, cuarto ventrículo, agujeros de Luschka y Magendie, espacio subaracnoideo y granulaciones aracnoideas.",
  v: [
    "Plexos coroideos=Estructuras ventriculares que producen la mayor parte del LCR",
    "Ventrículos laterales=Cavidades, una por hemisferio, donde comienza el recorrido del LCR",
    "Agujeros de Monro=Orificios interventriculares entre los ventrículos laterales y el tercero",
    "Tercer ventrículo=Cavidad situada en el diencéfalo",
    "Acueducto de Silvio=Conducto del mesencéfalo que une el tercer y el cuarto ventrículo",
    "Cuarto ventrículo=Cavidad situada entre la protuberancia, el bulbo y el cerebelo",
    "Granulaciones aracnoideas=Estructuras por las que el LCR se reabsorbe en la sangre venosa",
    "Hidrocefalia=Dilatación ventricular por LCR que no circula o no se reabsorbe"
  ],
  g: [
    "Los agujeros de ___ son laterales y el de Magendie, medial.|Luschka|Monro|Silvio",
    "Un adulto tiene en torno a ___ de LCR en un momento dado.|150 ml|500 ml|50 ml",
    "El acueducto cerebral atraviesa el ___.|mesencéfalo|diencéfalo|bulbo raquídeo",
    "Al hacer que el encéfalo «flote», el LCR reduce su ___ efectivo.|peso|volumen|metabolismo",
    "Desde el cuarto ventrículo, el LCR sale al espacio ___.|subaracnoideo|subdural|epidural"
  ],
  tf: [
    "El LCR se produce sobre todo en las granulaciones aracnoideas.|F|Lo producen sobre todo los plexos coroideos; en las granulaciones aracnoideas se reabsorbe.",
    "Como se producen unos 500 ml al día y hay unos 150 ml, el LCR se renueva varias veces al día.|V",
    "Los agujeros de Monro comunican el tercer ventrículo con el cuarto.|F|Comunican los ventrículos laterales con el tercero; el tercero y el cuarto se unen por el acueducto.",
    "Además de reabsorberse en la sangre venosa, el LCR drena en parte por vías linfáticas.|V"
  ],
  q: [
    "¿Qué estructura conecta directamente el tercer ventrículo con el cuarto?|El acueducto cerebral|El agujero de Magendie|El agujero interventricular|El acueducto de Silvio atraviesa el mesencéfalo y une el tercer y el cuarto ventrículo.",
    "Un tumor del mesencéfalo comprime el acueducto de Silvio. ¿Qué ventrículos se dilatarán?|Los laterales y el tercero|Solo el cuarto ventrículo|El cuarto y los laterales|El LCR no puede pasar al cuarto ventrículo y se acumula por encima del bloqueo: laterales y tercero.",
    "¿Por dónde pasa el LCR del cuarto ventrículo al espacio subaracnoideo?|Por los agujeros de Luschka y Magendie|Por los agujeros interventriculares de Monro|Por las granulaciones aracnoideas|Luschka (laterales) y Magendie (medial) abren el cuarto ventrículo al espacio subaracnoideo.",
    "¿Cuál de estas funciones corresponde al LCR?|Reducir el peso efectivo del encéfalo|Aportar la glucosa que usan las neuronas|Formar las uniones estrechas capilares|Al hacer flotar al encéfalo reduce su peso efectivo; además amortigua golpes y ayuda a eliminar sustancias."
  ],
  inc: [
    "Sobre el LCR, señala la INCORRECTA.|Su volumen total ronda los 500 ml en el adulto|Lo producen sobre todo los plexos coroideos|Amortigua los golpes que recibe el encéfalo|Hay unos 150 ml; lo que ronda los 500 ml es la producción diaria."
  ],
  seq: [
    "Recorrido del líquido cefalorraquídeo|Ventrículos laterales>Agujeros de Monro>Tercer ventrículo>Acueducto de Silvio>Cuarto ventrículo>Agujeros de Luschka y Magendie>Espacio subaracnoideo>Granulaciones aracnoideas"
  ],
  cls: [] },

{ t: "Barrera hematoencefálica",
  tip: "La BHE se debe a las uniones estrechas entre las células endoteliales de los capilares cerebrales; la mantienen los pericitos y los pies terminales de los astrocitos. Pasan con facilidad las moléculas pequeñas y liposolubles; la glucosa y algunos aminoácidos necesitan transportadores. Los órganos circunventriculares (área postrema, eminencia media, neurohipófisis, órgano subfornical) carecen de ella.",
  v: [
    "Uniones estrechas=Contactos entre células endoteliales que impiden el paso entre ellas",
    "Pericitos=Células que, junto con los astrocitos, mantienen y regulan la barrera",
    "Pies terminales astrocitarios=Prolongaciones gliales que rodean los capilares cerebrales",
    "Transportadores específicos=Proteínas que permiten la entrada de glucosa y algunos aminoácidos",
    "Órganos circunventriculares=Zonas del encéfalo que carecen de barrera hematoencefálica",
    "Área postrema=Zona sin barrera que detecta toxinas en la sangre e induce el vómito",
    "Órgano subfornical=Zona sin barrera que detecta señales de sed",
    "Eminencia media=Zona sin barrera que, como la neurohipófisis, libera hormonas a la sangre"
  ],
  g: [
    "La barrera se debe sobre todo a las uniones ___ del endotelio capilar.|estrechas|comunicantes|sinápticas",
    "La glucosa atraviesa la barrera gracias a ___ específicos.|transportadores|canales iónicos|receptores",
    "Las moléculas pequeñas y ___ atraviesan la barrera con facilidad.|liposolubles|hidrosolubles|ionizadas",
    "La detección de toxinas en sangre que induce el vómito depende de ___.|el área postrema|el órgano subfornical|la eminencia media",
    "La ___ libera hormonas a la sangre y por eso carece de barrera.|neurohipófisis|amígdala|ínsula"
  ],
  tf: [
    "El alcohol, la nicotina y muchos psicofármacos atraviesan la barrera con facilidad.|V",
    "La barrera se debe principalmente a la mielina que envuelve los capilares cerebrales.|F|Se debe a las uniones estrechas entre células endoteliales; la mielina envuelve axones, no capilares.",
    "El hipocampo es uno de los órganos circunventriculares, carentes de barrera.|F|Lo son el área postrema, la eminencia media, la neurohipófisis y el órgano subfornical.",
    "Una molécula grande o con carga puede entrar en el encéfalo si dispone de un transportador.|V"
  ],
  q: [
    "¿Qué tipo de sustancia atraviesa con más facilidad la barrera hematoencefálica?|Pequeña y liposoluble|Grande y liposoluble|Pequeña y con carga|Pasan con facilidad las moléculas pequeñas y liposolubles, como el oxígeno, el alcohol o la nicotina.",
    "Un fármaco grande y con carga apenas entra en el encéfalo, pero aun así provoca vómitos por una acción central. ¿Qué estructura lo explica mejor?|El área postrema|El órgano subfornical|El hipocampo|El área postrema carece de barrera, detecta toxinas en la sangre e induce el vómito.",
    "¿Qué células rodean los capilares y ayudan a mantener la barrera?|Pericitos y astrocitos|Oligodendrocitos y microglía|Ependimocitos y neuronas|Los pericitos y los pies terminales de los astrocitos rodean los capilares y regulan la barrera.",
    "¿Qué función se relaciona con la ausencia de barrera en el órgano subfornical?|Detectar señales de sed en la sangre|Liberar oxitocina a la circulación|Producir el líquido cefalorraquídeo|Sin barrera puede «leer» la composición de la sangre: el órgano subfornical detecta señales de sed."
  ],
  inc: [
    "Señala la INCORRECTA sobre el paso de sustancias por la barrera.|La glucosa la atraviesa por difusión libre|El oxígeno y el CO2 pasan con facilidad|Las moléculas grandes suelen quedar fuera|La glucosa necesita transportadores específicos; no difunde libremente entre las células endoteliales."
  ],
  seq: [],
  cls: [
    "Clasifica según cómo cruzan la barrera|Pasan con facilidad: oxígeno; dióxido de carbono; alcohol; nicotina|Necesitan transportador: glucosa; algunos aminoácidos"
  ] },

{ t: "Vascularización y sistema de drenaje",
  tip: "Dos carótidas internas y dos vertebrales (que se unen en la basilar) se conectan en el polígono de Willis, que compensa en parte la obstrucción de una arteria. Cerebral anterior: cara medial de frontal y parietal; media: cara lateral, con las áreas del lenguaje; posterior: occipital y temporal inferior. Los linfáticos meníngeos están demostrados; el sistema glinfático es una propuesta aún en debate.",
  v: [
    "Carótidas internas=Par de arterias que, junto con las vertebrales, irriga el encéfalo",
    "Arteria basilar=Vaso formado por la unión de las dos arterias vertebrales",
    "Polígono de Willis=Anillo arterial de la base que compensa en parte una obstrucción",
    "Cerebral anterior=Arteria de la cara medial de los lóbulos frontal y parietal",
    "Cerebral media=Arteria de la cara lateral, con las áreas del lenguaje del lado dominante",
    "Cerebral posterior=Arteria del lóbulo occipital y de la parte inferior del temporal",
    "Ictus isquémico=Interrupción del riego por obstrucción; la forma más frecuente",
    "Linfáticos meníngeos=Vasos que drenan líquido y células inmunitarias a ganglios del cuello"
  ],
  g: [
    "Las arterias vertebrales se unen para formar la arteria ___.|basilar|carótida|cerebral media",
    "La arteria cerebral ___ irriga las áreas del lenguaje del hemisferio dominante.|media|anterior|posterior",
    "Según la hipótesis glinfática, el LCR se mezclaría con el líquido intersticial gracias a la ___ de los astrocitos.|acuaporina-4|conexina-43|panexina-1",
    "El ictus ___ se produce por la rotura de un vaso.|hemorrágico|isquémico|trombótico",
    "La existencia de vasos linfáticos en las ___ está hoy demostrada.|meninges|comisuras|circunvoluciones"
  ],
  tf: [
    "El polígono de Willis garantiza que la obstrucción de una carótida interna no produzca daño cerebral.|F|Permite una compensación parcial; según la anatomía de cada persona puede no evitar el daño.",
    "La arteria cerebral posterior irriga el lóbulo occipital.|V",
    "Está demostrado en humanos que durante el sueño aumenta la eliminación de beta-amiloide.|F|Es una hipótesis prometedora basada sobre todo en estudios con animales.",
    "El ictus isquémico es más frecuente que el hemorrágico.|V"
  ],
  q: [
    "Un paciente diestro sufre un ictus con afasia y debilidad de la cara y el brazo derechos. ¿Qué arteria es más probable que esté afectada?|La cerebral media izquierda|La cerebral anterior izquierda|La cerebral posterior derecha|La cerebral media irriga la cara lateral del hemisferio, con las áreas del lenguaje del hemisferio dominante.",
    "¿Qué territorio irriga la arteria cerebral anterior?|Cara medial de frontal y parietal|Cara lateral de ambos hemisferios|Lóbulo occipital y temporal inferior|La anterior irriga la cara medial; la media, la lateral; la posterior, el occipital y el temporal inferior.",
    "¿Qué afirmación sobre el drenaje del encéfalo refleja mejor el estado actual?|Los linfáticos meníngeos están demostrados|El glinfático está confirmado en humanos|El encéfalo carece de vías linfáticas|Los linfáticos meníngeos tienen apoyo consistente; el sistema glinfático y su magnitud en humanos siguen en debate.",
    "¿Qué arterias forman la arteria basilar?|Las dos vertebrales|Las dos carótidas internas|Las cerebrales posteriores|Las vertebrales se unen en la basilar; las carótidas internas completan el aporte al polígono de Willis."
  ],
  inc: [
    "Sobre el sistema glinfático, señala la INCORRECTA.|Su papel limpiador durante el sueño está probado|Se propone que el LCR entra por espacios periarteriales|Su magnitud en humanos sigue siendo objeto de debate|La limpieza durante el sueño es una hipótesis basada sobre todo en animales, no un hecho probado."
  ],
  seq: [],
  cls: [
    "Territorio de cada arteria cerebral|Anterior: cara medial del frontal; cara medial del parietal|Media: cara lateral de los hemisferios; áreas del lenguaje|Posterior: lóbulo occipital; parte inferior del temporal"
  ] }
] },

{ n: 6, t: "Telencéfalo y corteza cerebral", cap: 2, pir: "alta", mods: [
{ t: "Lóbulos y cisuras",
  tip: "La corteza es sustancia gris de unos 2–4 mm, plegada en circunvoluciones y surcos para multiplicar su superficie; casi toda es neocorteza de seis capas. La cisura central (Rolando) separa frontal y parietal; la lateral (Silvio), el temporal del frontal y el parietal; la longitudinal, los hemisferios. La ínsula queda oculta en la cisura lateral.",
  v: [
    "Cisura longitudinal=Surco profundo que separa los dos hemisferios",
    "Cisura de Rolando=Surco que separa el lóbulo frontal del parietal",
    "Cisura de Silvio=Surco que separa el temporal del frontal y el parietal",
    "Circunvoluciones=Pliegues de la corteza, también llamados giros, separados por surcos",
    "Neocorteza=Tipo mayoritario de corteza, organizado en seis capas",
    "Ínsula=Lóbulo oculto en la cisura lateral, ligado a interocepción, gusto y asco",
    "Lóbulo occipital=Región cortical dedicada principalmente a la visión",
    "Lóbulo parietal=Región de la sensibilidad somática, la integración espacial y la atención"
  ],
  g: [
    "La corteza cerebral tiene un grosor de unos ___.|2–4 mm|2–4 cm|0,2–0,4 mm",
    "El plegamiento de la corteza multiplica la ___ que cabe en el cráneo.|superficie|profundidad|densidad",
    "La neocorteza se organiza en ___ capas.|seis|tres|cuatro",
    "La comprensión del lenguaje y el reconocimiento de caras se asocian al lóbulo ___.|temporal|parietal|occipital",
    "La planificación y el control de la conducta social dependen sobre todo del lóbulo ___.|frontal|parietal|temporal"
  ],
  tf: [
    "La cisura central separa el lóbulo temporal del frontal.|F|La central (Rolando) separa frontal y parietal; la lateral (Silvio) separa el temporal del frontal y el parietal.",
    "La ínsula no es visible en la superficie lateral porque queda oculta en la cisura lateral.|V",
    "La mayor parte de la corteza cerebral es neocorteza de seis capas.|V",
    "El lóbulo parietal es el principal responsable de la audición.|F|La audición corresponde al lóbulo temporal; el parietal se ocupa de la sensibilidad somática y la integración espacial."
  ],
  q: [
    "¿Qué estructura queda oculta en la profundidad de la cisura lateral?|La ínsula|El hipocampo|La corteza cingulada|La ínsula está oculta en la cisura de Silvio y se relaciona con interocepción, gusto, dolor y asco.",
    "Tras una lesión, un paciente muestra problemas de atención e integración espacial, sin déficits visuales ni auditivos primarios. ¿Qué lóbulo es más probable que esté afectado?|El parietal|El occipital|El temporal|El lóbulo parietal se ocupa de la sensibilidad somática, la integración espacial y la atención.",
    "¿Qué función se atribuye a la ínsula?|Conciencia del estado corporal|Reconocimiento visual de caras|Planificación de la conducta|La ínsula se relaciona con interocepción, gusto, dolor, asco y conciencia del estado corporal.",
    "¿Qué cisura separa el lóbulo temporal del frontal y el parietal?|La lateral|La central|La longitudinal|La cisura lateral o de Silvio delimita el temporal; la central separa frontal y parietal."
  ],
  inc: [
    "Sobre el telencéfalo, señala la INCORRECTA.|Su corteza es sustancia blanca plegada|Es la parte más voluminosa del encéfalo|Su plegamiento multiplica la superficie|La corteza cerebral es sustancia gris; la sustancia blanca queda por debajo de ella."
  ],
  seq: [],
  cls: [
    "Asigna cada función a su lóbulo|Frontal: planificación; funciones ejecutivas; producción del lenguaje|Parietal: sensibilidad somática; integración espacial; atención|Temporal: audición; reconocimiento de caras; comprensión del lenguaje"
  ] },

{ t: "Áreas funcionales",
  tip: "Brodmann dividió la corteza en unas cincuenta áreas según su estructura celular. Claves: 4 motora primaria (precentral); 6 premotora y motora suplementaria; 3, 1 y 2 somatosensorial primaria (poscentral); 17 visual primaria (calcarina); 41 y 42 auditiva primaria (Heschl); 44 y 45 Broca; 22 posterior Wernicke; 9 y 46 prefrontal dorsolateral. Motora y somatosensorial son somatotópicas.",
  v: [
    "Área 4=Corteza motora primaria, en el giro precentral",
    "Área 6=Corteza premotora y motora suplementaria, por delante de la motora primaria",
    "Áreas 3, 1 y 2=Corteza somatosensorial primaria, en el giro poscentral",
    "Área 17=Corteza visual primaria, junto a la cisura calcarina",
    "Áreas 41 y 42=Corteza auditiva primaria, en los giros de Heschl",
    "Áreas 44 y 45=Región de Broca, en el giro frontal inferior izquierdo",
    "Áreas 9 y 46=Corteza prefrontal dorsolateral: memoria de trabajo y planificación",
    "Homúnculo de Penfield=Mapa corporal en que manos, labios y lengua ocupan más superficie"
  ],
  g: [
    "El área de Wernicke corresponde a la parte posterior del área ___.|22|41|44",
    "La corteza motora primaria se sitúa en el giro ___.|precentral|poscentral|temporal superior",
    "La representación ordenada del cuerpo en la corteza se denomina ___.|somatotopía|tonotopía|retinotopía",
    "Brodmann dividió la corteza según su estructura ___.|celular|funcional|vascular",
    "La corteza ___ es la más desarrollada en los humanos y la que madura más tarde.|prefrontal|occipital|somatosensorial"
  ],
  tf: [
    "La corteza auditiva primaria corresponde al área 17 de Brodmann.|F|El área 17 es la visual primaria; la auditiva primaria son las áreas 41 y 42, en los giros de Heschl.",
    "El área 6 incluye la corteza premotora y el área motora suplementaria.|V",
    "En el homúnculo, el tronco ocupa más superficie cortical que la mano.|F|Las zonas más finas, como manos, labios y lengua, ocupan más superficie que otras como el tronco.",
    "Phineas Gage es un ejemplo clásico del papel del lóbulo frontal en la conducta social.|V"
  ],
  q: [
    "¿Qué áreas de Brodmann forman la corteza somatosensorial primaria?|3, 1 y 2|4 y 6|41 y 42|Las áreas 3, 1 y 2 están en el giro poscentral; las 4 y 6 son motoras y las 41 y 42, auditivas.",
    "Un paciente con una lesión del giro frontal inferior izquierdo comprende bien, pero habla con gran esfuerzo. ¿Qué área está dañada?|Las áreas 44 y 45|La parte posterior del área 22|Las áreas 9 y 46|Las áreas 44 y 45 forman el área de Broca, implicada en la producción del lenguaje.",
    "Phineas Gage se convirtió en un caso clásico porque, tras su lesión frontal,…|cambió notablemente su conducta social|perdió la capacidad de formar recuerdos|dejó de comprender el lenguaje hablado|La barra le atravesó el lóbulo frontal y alteró sobre todo su conducta social.",
    "¿Dónde se localiza el área 17 de Brodmann?|En el polo occipital|En el giro de Heschl|En el giro poscentral|El área 17 es la corteza visual primaria, en torno a la cisura calcarina del polo occipital."
  ],
  inc: [
    "Señala la correspondencia INCORRECTA entre área y función.|Áreas 9 y 46: corteza auditiva primaria|Área 4: corteza motora primaria|Área 17: corteza visual primaria|Las áreas 9 y 46 son la prefrontal dorsolateral; la auditiva primaria son las 41 y 42."
  ],
  seq: [],
  cls: [
    "Áreas de Brodmann por lóbulo|Frontal: área 4; área 6; áreas 44 y 45; áreas 9 y 46|Parietal: áreas 3, 1 y 2|Temporal: áreas 41 y 42; área 22"
  ] },

{ t: "Lateralización",
  tip: "El lenguaje depende sobre todo del hemisferio izquierdo en alrededor del 95 % de los diestros y en aproximadamente el 70 % de los zurdos. El derecho destaca en lo visoespacial, el reconocimiento de caras y la prosodia emocional. Cada hemisferio controla el lado opuesto del cuerpo. La lateralización es relativa y no define personas «lógicas» o «creativas».",
  v: [
    "Lateralización=Especialización relativa de cada hemisferio en funciones concretas",
    "Control contralateral=Cada hemisferio maneja la sensibilidad y el movimiento del lado opuesto",
    "Prosodia emocional=Entonación que transmite emoción, con papel destacado del lado derecho",
    "Hemisferio dominante=Lado cerebral que sostiene el lenguaje, normalmente el izquierdo",
    "Procesamiento visoespacial=Análisis de relaciones espaciales, con mayor peso del lado derecho",
    "Lenguaje en diestros=Lateralizado a la izquierda en alrededor del 95 % de los casos",
    "Lenguaje en zurdos=Lateralizado a la izquierda en aproximadamente el 70 % de los casos",
    "Mito lógico-creativo=Creencia infundada de que cada hemisferio define un tipo de persona"
  ],
  g: [
    "En aproximadamente el ___ de las personas zurdas, el lenguaje depende sobre todo del hemisferio izquierdo.|70 %|95 %|30 %",
    "La ___ emocional, es decir, la entonación, tiene un papel destacado del hemisferio derecho.|prosodia|sintaxis|semántica",
    "Cada hemisferio controla el movimiento del lado ___ del cuerpo.|opuesto|homolateral|dominante",
    "La lateralización de funciones es ___: ambos hemisferios participan en casi todas las tareas.|relativa|absoluta|exclusiva",
    "El reconocimiento de caras implica de forma más destacada al hemisferio ___.|derecho|izquierdo|dominante"
  ],
  tf: [
    "La mayoría de las personas zurdas también tienen el lenguaje lateralizado en el hemisferio izquierdo.|V",
    "Las personas creativas se caracterizan por un predominio del hemisferio derecho.|F|La creatividad depende de redes que implican a ambos hemisferios; la lateralización no define tipos de personas.",
    "El procesamiento visoespacial tiene un papel más destacado en el hemisferio derecho.|V",
    "En las personas zurdas, el lenguaje depende sobre todo del hemisferio derecho.|F|En la mayoría de las zurdas (≈ 70 %) también depende sobre todo del izquierdo."
  ],
  q: [
    "Tras un ictus en el hemisferio derecho, un paciente habla con fluidez y comprende, pero su entonación es plana y no transmite emoción. ¿Qué función está alterada?|La prosodia emocional|La producción del lenguaje|La comprensión verbal|El hemisferio derecho tiene un papel destacado en la prosodia emocional, la entonación del habla.",
    "Una persona zurda va a ser operada cerca de áreas del lenguaje. ¿Qué es lo más probable?|Lenguaje en el hemisferio izquierdo|Lenguaje en el hemisferio derecho|Lenguaje repartido por igual|En aproximadamente el 70 % de los zurdos, el lenguaje depende sobre todo del hemisferio izquierdo.",
    "Una lesión de la corteza motora del hemisferio izquierdo producirá debilidad…|del lado derecho del cuerpo|del lado izquierdo del cuerpo|de ambos lados por igual|Cada hemisferio controla el movimiento del lado opuesto del cuerpo (control contralateral).",
    "¿Qué describe mejor la lateralización cerebral?|Especialización relativa con colaboración constante|Separación estricta de funciones entre hemisferios|Diferencias que definen estilos de personalidad|Los hemisferios se especializan en funciones concretas, pero ambos participan en casi todas las tareas."
  ],
  inc: [
    "Sobre la lateralización, señala la INCORRECTA.|El reconocimiento de caras destaca en el izquierdo|El lenguaje predomina en el izquierdo|La prosodia emocional destaca en el derecho|El reconocimiento de caras tiene un papel más destacado en el hemisferio derecho."
  ],
  seq: [],
  cls: [
    "Función con papel más destacado de cada hemisferio|Izquierdo: producción del lenguaje; comprensión del lenguaje|Derecho: procesamiento visoespacial; reconocimiento de caras; prosodia emocional"
  ] },

{ t: "Comisuras y síndromes de desconexión",
  tip: "Las comisuras son haces de axones que cruzan la línea media; la mayor es el cuerpo calloso (unos 200 millones de axones), y hay además comisura anterior y posterior. En el cerebro dividido, lo que ve el campo visual izquierdo llega al hemisferio derecho: se puede señalar con la mano izquierda, pero no nombrar. La afasia de conducción, por lesión del fascículo arqueado, impide repetir.",
  v: [
    "Comisuras=Haces de axones que cruzan la línea media entre hemisferios",
    "Cuerpo calloso=Mayor vía interhemisférica, con unos 200 millones de axones",
    "Callosotomía=Sección quirúrgica de la principal comisura para frenar crisis epilépticas",
    "Cerebro dividido=Estado tras la sección callosa, estudiado por Sperry y Gazzaniga",
    "Síndrome de desconexión=Déficit por interrupción de vías entre regiones que funcionan bien",
    "Fascículo arqueado=Haz que une las áreas de Wernicke y de Broca",
    "Afasia de conducción=Habla fluida y comprensión conservada, pero incapacidad de repetir",
    "Campo visual izquierdo=Mitad del campo visual cuya información llega al hemisferio derecho"
  ],
  g: [
    "El cuerpo calloso contiene unos ___ de axones.|200 millones|20 millones|2000 millones",
    "En la afasia de conducción, el paciente no puede ___ lo que oye.|repetir|comprender|escuchar",
    "La callosotomía se realizaba para evitar que las crisis ___ se propagaran.|epilépticas|migrañosas|psicóticas",
    "Además del cuerpo calloso, los hemisferios se comunican por las comisuras anterior y ___.|posterior|lateral|inferior",
    "Los pacientes de cerebro dividido fueron estudiados por Sperry y ___.|Gazzaniga|Brodmann|Penfield"
  ],
  tf: [
    "Un paciente con callosotomía puede nombrar un objeto presentado solo al campo visual izquierdo.|F|Esa información llega al hemisferio derecho, que no produce el habla: puede señalarlo con la mano izquierda, no nombrarlo.",
    "En un síndrome de desconexión, las regiones aisladas pueden funcionar bien por separado.|V",
    "La afasia de conducción se debe a una lesión del cuerpo calloso.|F|Se debe a la lesión del fascículo arqueado, que une las áreas de Wernicke y Broca.",
    "El cuerpo calloso es la mayor de las comisuras interhemisféricas.|V"
  ],
  q: [
    "A una paciente con callosotomía se le muestra una llave solo en el campo visual izquierdo. ¿Qué podrá hacer?|Señalarla con la mano izquierda, sin nombrarla|Nombrarla, pero no señalarla con ninguna mano|Nombrarla y señalarla con la mano derecha|El campo visual izquierdo llega al hemisferio derecho, que controla la mano izquierda pero no produce el habla.",
    "Un paciente comprende lo que se le dice y habla con fluidez, pero falla al repetir frases. ¿Qué estructura es la sospechosa?|El fascículo arqueado|El cuerpo calloso|El giro precentral|Es una afasia de conducción, por lesión del fascículo arqueado que une Wernicke y Broca.",
    "¿Por qué la afasia de conducción se considera un síndrome de desconexión?|Porque se interrumpe la vía entre dos áreas intactas|Porque se destruye el área que comprende el lenguaje|Porque se pierde la comunicación entre hemisferios|Wernicke y Broca funcionan, pero el fascículo arqueado que las une está dañado.",
    "¿Con qué fin se practicaba la callosotomía?|Evitar la propagación de crisis epilépticas|Estudiar la lateralización del lenguaje|Tratar la afasia de conducción grave|Se seccionaba el cuerpo calloso en epilepsias graves; Sperry y Gazzaniga estudiaron después a esos pacientes."
  ],
  inc: [
    "Sobre las comisuras, señala la INCORRECTA.|Unen regiones de un mismo hemisferio|Cruzan la línea media del encéfalo|El cuerpo calloso es la mayor de ellas|Las comisuras unen ambos hemisferios; una vía dentro de uno, como el fascículo arqueado, no es una comisura."
  ],
  seq: [
    "Cerebro dividido: del estímulo a la respuesta|Objeto en el campo visual izquierdo>Llega al hemisferio derecho>No cruza al izquierdo por la callosotomía>Se señala con la mano izquierda sin poder nombrarlo"
  ],
  cls: [] }
] },

{ n: 7, t: "Estructuras subcorticales", cap: 2, pir: "alta", mods: [
{ t: "Ganglios basales",
  tip: "Caudado y putamen forman el estriado; con el globo pálido son los ganglios basales, y funcionalmente se suman la sustancia negra y el núcleo subtalámico. La vía directa (D1, la dopamina la excita) facilita el movimiento; la indirecta (D2, la dopamina la inhibe) frena lo que no interesa. Efecto neto de la dopamina: favorecer el movimiento. Parkinson: sustancia negra compacta; Huntington: estriado.",
  v: [
    "Estriado=Conjunto formado por el núcleo caudado y el putamen",
    "Globo pálido=Núcleo basal que, con caudado y putamen, forma los ganglios basales clásicos",
    "Vía directa=Circuito estriatal con receptores D1 que facilita el movimiento deseado",
    "Vía indirecta=Circuito estriatal con receptores D2 que frena movimientos no deseados",
    "Sustancia negra compacta=Origen de la dopamina nigroestriatal, cuya pérdida causa el Parkinson",
    "Bradicinesia=Lentitud de los movimientos, típica del Parkinson",
    "Corea=Movimientos involuntarios característicos de la enfermedad de Huntington",
    "Temblor en reposo=Signo motor del Parkinson que aparece sin movimiento voluntario"
  ],
  g: [
    "Las neuronas de la vía directa expresan receptores dopaminérgicos ___.|D1|D2|D3",
    "En la vía indirecta, la dopamina ___ a las neuronas estriatales.|inhibe|excita|sensibiliza",
    "La enfermedad de Huntington afecta sobre todo al núcleo ___.|caudado|subtalámico|rojo",
    "El efecto neto de la dopamina de la sustancia negra es ___ el movimiento.|favorecer|frenar|desorganizar",
    "Funcionalmente, la ___ del mesencéfalo se incluye entre los ganglios basales.|sustancia negra|área tegmental ventral|formación reticular"
  ],
  tf: [
    "La dopamina excita las neuronas de la vía indirecta.|F|Las de la vía indirecta tienen receptores D2 y la dopamina las inhibe; excita las de la vía directa (D1).",
    "El estriado está formado por el núcleo caudado y el putamen.|V",
    "La enfermedad de Parkinson se debe a la degeneración del núcleo caudado.|F|Se debe a la pérdida de neuronas dopaminérgicas de la sustancia negra compacta; el caudado degenera en Huntington.",
    "Los ganglios basales participan también en el aprendizaje de hábitos y en la motivación.|V"
  ],
  q: [
    "Un hombre de 65 años presenta temblor en reposo, rigidez y dificultad para iniciar la marcha. ¿Qué estructura es más probable que haya degenerado?|La sustancia negra compacta|El núcleo caudado|El globo pálido|Temblor en reposo, rigidez y bradicinesia sugieren Parkinson: pérdida dopaminérgica de la sustancia negra compacta.",
    "Una mujer con antecedentes familiares desarrolla movimientos involuntarios bruscos, cambios psiquiátricos y deterioro cognitivo. ¿Dónde está la degeneración principal?|En el estriado|En la sustancia negra|En el cerebelo|Corea, síntomas cognitivos y psiquiátricos y herencia apuntan a Huntington: degeneración del estriado, sobre todo del caudado.",
    "Si la dopamina excita la vía directa e inhibe la indirecta, su pérdida en el Parkinson provoca…|menos facilitación y más freno del movimiento|más facilitación y menos freno del movimiento|ningún cambio neto sobre el movimiento|Sin dopamina, la vía directa pierde excitación y la indirecta pierde inhibición: el balance frena el movimiento.",
    "¿Qué receptor dopaminérgico caracteriza a la vía que frena los movimientos no deseados?|D2|D1|D4|La vía indirecta expresa receptores D2; la dopamina inhibe estas neuronas."
  ],
  inc: [
    "Sobre los ganglios basales, señala la INCORRECTA.|El putamen y el globo pálido forman el estriado|El núcleo subtalámico se incluye funcionalmente|Se sitúan en la profundidad de los hemisferios|El estriado lo forman el caudado y el putamen; el globo pálido es otro núcleo."
  ],
  seq: [],
  cls: [
    "Vía directa o vía indirecta|Vía directa: receptores D1; la dopamina la excita; facilita el movimiento deseado|Vía indirecta: receptores D2; la dopamina la inhibe; frena los movimientos no deseados"
  ] },

{ t: "El «sistema límbico» y su crítica",
  tip: "Papez (1937) propuso un circuito de la emoción: hipocampo, fórnix, cuerpos mamilares, núcleo anterior del tálamo, corteza cingulada y vuelta al hipocampo. MacLean (1952) acuñó «sistema límbico». El término sigue usándose para designar estas estructuras, pero como teoría de la emoción está superado: no hay criterio acordado, el hipocampo es sobre todo memoria y la emoción depende de redes distribuidas.",
  v: [
    "Circuito de Papez=Circuito propuesto en 1937 para la emoción, del hipocampo al cingulado",
    "Fórnix=Haz que lleva del hipocampo a los cuerpos mamilares en el circuito de 1937",
    "Cuerpos mamilares=Relevo del circuito de Papez entre el fórnix y el tálamo anterior",
    "Paul MacLean=Autor que en 1952 acuñó el término «sistema límbico»",
    "Cerebro triuno=Modelo de capas reptiliana, límbica y racional, hoy descartado",
    "Redes distribuidas=Base actual de la emoción, que incluye corteza prefrontal e ínsula",
    "Sistema de la emoción=Según Rolls, amígdala, corteza orbitofrontal y cingulado anterior",
    "Sistema de la memoria=Según Rolls, hipocampo y sus conexiones"
  ],
  g: [
    "En el circuito de Papez, el fórnix conecta el hipocampo con los ___.|cuerpos mamilares|núcleos del rafe|colículos superiores",
    "El término «sistema límbico» fue introducido por ___ en 1952.|MacLean|Papez|Rolls",
    "El hipocampo, pieza central del sistema límbico, se relaciona sobre todo con la ___.|memoria|emoción|motivación",
    "Según Rolls (2015), no existe un único sistema límbico, sino al menos ___.|dos|tres|cuatro",
    "Desde el núcleo anterior del tálamo, el circuito de Papez se proyecta a la corteza ___.|cingulada|insular|orbitofrontal"
  ],
  tf: [
    "El término «sistema límbico» se sigue usando para designar un grupo de estructuras, aunque como teoría esté superado.|V",
    "Existe un criterio anatómico acordado para decidir qué estructuras forman el sistema límbico.|F|No hay un criterio anatómico ni funcional acordado; es una de las razones de la crítica al concepto.",
    "La teoría del cerebro triuno está respaldada por la neuroanatomía comparada.|F|Está descartada: el cerebro no evolucionó añadiendo capas nuevas sobre otras antiguas.",
    "LeDoux llegó a una conclusión parecida a la de Rolls sobre el sistema límbico.|V"
  ],
  q: [
    "¿Cuál es el orden correcto de este tramo del circuito de Papez?|Fórnix, mamilares, tálamo anterior|Fórnix, tálamo anterior, mamilares|Mamilares, fórnix, tálamo anterior|Hipocampo, fórnix, cuerpos mamilares, núcleo anterior del tálamo, cingulado y de nuevo hipocampo.",
    "¿Qué estructuras forman el sistema de la emoción según Rolls?|Amígdala, orbitofrontal y cingulado anterior|Hipocampo, fórnix y cuerpos mamilares|Núcleo anterior del tálamo, septum e hipocampo|Rolls separa un sistema para la emoción (amígdala, orbitofrontal, cingulado anterior) y otro para la memoria.",
    "Un divulgador afirma que la ira la produce nuestro «cerebro reptiliano». ¿Qué responderías según la neuroanatomía actual?|Que el modelo triuno está descartado|Que la ira depende solo del sistema límbico|Que el tronco encefálico genera la emoción|El cerebro no evolucionó por capas superpuestas; la emoción depende de redes distribuidas.",
    "¿Por qué el hipocampo debilita la idea de un «cerebro emocional» límbico?|Porque se relaciona sobre todo con la memoria|Porque carece de conexiones con la amígdala|Porque no pertenece al lóbulo temporal|Siendo la pieza central del sistema, su función principal es la memoria, no la emoción."
  ],
  inc: [
    "Sobre la crítica al sistema límbico, señala la INCORRECTA.|La emoción depende solo de estructuras límbicas|No hay un criterio acordado para delimitarlo|La corteza prefrontal participa en la emoción|La emoción depende de redes distribuidas que incluyen la corteza prefrontal y la ínsula."
  ],
  seq: [
    "Circuito de Papez|Hipocampo>Fórnix>Cuerpos mamilares>Núcleo anterior del tálamo>Corteza cingulada"
  ],
  cls: [] },

{ t: "Hipocampo y amígdala",
  tip: "El hipocampo, en el lóbulo temporal medial, es esencial para formar recuerdos declarativos y para la memoria espacial. H. M. no pudo formar nuevos recuerdos conscientes (amnesia anterógrada), pero aprendía habilidades motoras. Células de lugar (O'Keefe, hipocampo) y de rejilla (Moser, corteza entorrinal): Nobel 2014. La amígdala evalúa la relevancia emocional, sobre todo de amenazas, y es clave en el condicionamiento del miedo.",
  v: [
    "Memoria declarativa=Recuerdo consciente de hechos y episodios",
    "Amnesia anterógrada=Incapacidad de formar nuevos recuerdos conscientes",
    "Paciente H. M.=Henry Molaison, operado de ambos lóbulos temporales mediales en 1953",
    "Células de lugar=Neuronas hipocampales activas cuando el animal ocupa una posición concreta",
    "Células de rejilla=Neuronas de la corteza entorrinal que forman un sistema de coordenadas",
    "Condicionamiento del miedo=Asociación de un estímulo neutro con uno aversivo",
    "Síndrome de Urbach-Wiethe=Enfermedad que puede lesionar ambas amígdalas y reducir el reconocimiento del miedo",
    "Amígdala=Estructura anterior al hipocampo que evalúa la relevancia emocional"
  ],
  g: [
    "Las células de lugar fueron descubiertas por ___ en el hipocampo de la rata.|O'Keefe|Edvard Moser|Brodmann",
    "Las células de rejilla se encuentran en la corteza ___.|entorrinal|cingulada|orbitofrontal",
    "H. M. conservó la capacidad de aprender habilidades ___.|motoras|verbales|espaciales",
    "La amígdala modula la ___ de los recuerdos con carga emocional.|consolidación|lateralización|percepción",
    "La amígdala se sitúa ___ del hipocampo.|delante|detrás|encima"
  ],
  tf: [
    "H. M. podía formar recuerdos nuevos, aunque perdió los de su infancia.|F|Fue al revés en lo esencial: no pudo formar nuevos recuerdos declarativos (amnesia anterógrada).",
    "La lesión bilateral de la amígdala reduce el reconocimiento del miedo en las caras ajenas.|V",
    "Las células de rejilla se descubrieron en el hipocampo.|F|Se descubrieron en la corteza entorrinal; en el hipocampo están las células de lugar.",
    "O'Keefe, May-Britt Moser y Edvard Moser recibieron el Nobel en 2014.|V"
  ],
  q: [
    "Tras una cirugía, un paciente no recuerda a quien conoció ayer, pero mejora día a día en una tarea de dibujo en espejo. ¿Qué patrón muestra?|Amnesia anterógrada con aprendizaje motor intacto|Amnesia retrógrada con pérdida de habilidades motoras|Déficit motor con memoria declarativa intacta|Como H. M.: no forma nuevos recuerdos declarativos, pero conserva el aprendizaje de habilidades motoras.",
    "Una rata oye un sonido seguido de una descarga; después se paraliza solo con oír el sonido. ¿Qué estructura es clave en este aprendizaje?|La amígdala|El hipocampo|El núcleo caudado|El condicionamiento del miedo asocia un estímulo neutro a uno aversivo y depende de la amígdala.",
    "Según el caso H. M., ¿qué capacidad depende de forma esencial del hipocampo?|La formación de recuerdos declarativos|El aprendizaje de habilidades motoras|La memoria de trabajo inmediata|H. M. no formaba nuevos recuerdos declarativos, pero sí aprendía habilidades motoras.",
    "¿Qué hacen las células de lugar?|Se activan en una posición concreta|Forman una cuadrícula de coordenadas|Detectan amenazas en el entorno|Las de lugar (hipocampo) codifican una posición; las de rejilla (entorrinal) forman un sistema de coordenadas."
  ],
  inc: [
    "Sobre la amígdala, señala la INCORRECTA.|Es esencial para aprender habilidades motoras|Evalúa la relevancia emocional de estímulos|Es clave en el condicionamiento del miedo|La amígdala evalúa la relevancia emocional; el aprendizaje de habilidades motoras no es su función."
  ],
  seq: [],
  cls: [
    "Hipocampo o amígdala|Hipocampo: recuerdos declarativos; memoria espacial; células de lugar|Amígdala: condicionamiento del miedo; detección de amenazas; reconocimiento del miedo en caras"
  ] },

{ t: "Diencéfalo: tálamo, hipotálamo y epitálamo",
  tip: "El tálamo es el gran relevo hacia la corteza: toda la información sensorial pasa por él salvo la olfativa, y la filtra y modula. El hipotálamo regula la homeostasis y controla la hipófisis: la neurohipófisis libera oxitocina y vasopresina, producidas en los núcleos supraóptico y paraventricular; la adenohipófisis libera sus propias hormonas. Supraquiasmático: reloj circadiano. Pineal: melatonina. Lesión subtalámica: hemibalismo.",
  v: [
    "Geniculado lateral=Núcleo talámico de relevo visual",
    "Geniculado medial=Núcleo talámico de relevo auditivo",
    "Ventral posterior=Núcleo talámico de la sensibilidad somática",
    "Mediodorsal=Núcleo talámico conectado con la corteza prefrontal",
    "Núcleo supraquiasmático=Reloj biológico que sincroniza los ritmos circadianos con la luz",
    "Glándula pineal=Estructura epitalámica que segrega melatonina en la oscuridad",
    "Hemibalismo=Movimientos bruscos involuntarios de un lado por lesión subtalámica",
    "Eje HHA=Secuencia CRH, ACTH y cortisol que organiza la respuesta al estrés"
  ],
  g: [
    "La única información sensorial que llega a la corteza sin relevo talámico previo es la ___.|olfativa|gustativa|auditiva",
    "La oxitocina y la vasopresina se producen en los núcleos supraóptico y ___ del hipotálamo.|paraventricular|supraquiasmático|mediodorsal",
    "La adenohipófisis libera sus hormonas cuando el hipotálamo se lo ordena mediante hormonas ___.|liberadoras|esteroideas|tiroideas",
    "Los núcleos ventral anterior y ventral lateral del tálamo tienen una función ___.|motora|auditiva|visual",
    "La vasopresina también se conoce como hormona ___.|antidiurética|adrenocorticotropa|luteinizante"
  ],
  tf: [
    "La neurohipófisis produce la oxitocina y la vasopresina que libera.|F|Solo las libera; se producen en los núcleos supraóptico y paraventricular del hipotálamo.",
    "El tálamo no es un simple repetidor: filtra y modula la información que transmite.|V",
    "La ACTH se libera en la neurohipófisis en respuesta a la CRH.|F|La ACTH la libera la adenohipófisis; la neurohipófisis libera oxitocina y vasopresina.",
    "La glándula pineal pertenece al epitálamo, junto con la habénula.|V"
  ],
  q: [
    "¿Qué secuencia describe el eje hipotálamo-hipófiso-adrenal?|CRH, luego ACTH, luego cortisol|ACTH, luego CRH, luego cortisol|CRH, luego cortisol, luego ACTH|El hipotálamo libera CRH, la adenohipófisis ACTH y la corteza suprarrenal cortisol.",
    "Tras un pequeño infarto, un paciente presenta movimientos bruscos e involuntarios del brazo y la pierna de un solo lado. ¿Qué núcleo está lesionado?|El subtalámico|El supraquiasmático|El geniculado lateral|La lesión del núcleo subtalámico produce hemibalismo, movimientos bruscos involuntarios de un lado del cuerpo.",
    "¿Qué núcleo talámico forma parte del circuito de Papez?|El anterior|El mediodorsal|El geniculado medial|El núcleo anterior del tálamo se relaciona con la memoria y es un eslabón del circuito de Papez.",
    "¿Qué hormona libera la adenohipófisis?|Prolactina|Oxitocina|Melatonina|La adenohipófisis libera GH, prolactina, ACTH, TSH, FSH y LH; la oxitocina sale de la neurohipófisis."
  ],
  inc: [
    "Sobre el hipotálamo, señala la INCORRECTA.|Es el relevo de casi toda la información sensorial|Regula temperatura, hambre, sed y sueño|Controla el sistema endocrino vía hipófisis|El relevo sensorial hacia la corteza es función del tálamo, no del hipotálamo."
  ],
  seq: [
    "Eje hipotálamo-hipófiso-adrenal|Hipotálamo libera CRH>Adenohipófisis libera ACTH>Corteza suprarrenal libera cortisol"
  ],
  cls: [
    "Hormonas según el lóbulo de la hipófisis|Neurohipófisis: oxitocina; vasopresina|Adenohipófisis: hormona de crecimiento; prolactina; ACTH; TSH; FSH; LH"
  ] }
] },

{ n: 8, t: "Tronco encefálico, cerebelo y médula espinal", cap: 2, pir: "media", mods: [
{ t: "Tronco encefálico",
  tip: "Tres partes: mesencéfalo, protuberancia y bulbo. Mesencéfalo: tectum dorsal (colículos superiores, visuales; inferiores, auditivos) y tegmento ventral (sustancia negra, área tegmental ventral, sustancia gris periacueductal). Protuberancia: relevo corteza-cerebelo, sueño, respiración y locus coeruleus. Bulbo: respiración, frecuencia cardíaca y presión arterial; su lesión puede ser mortal.",
  v: [
    "Tectum=Parte dorsal del mesencéfalo, con los colículos",
    "Tegmento=Parte ventral del mesencéfalo, con la sustancia negra",
    "Colículos superiores=Núcleos de reflejos visuales y orientación de la mirada",
    "Colículos inferiores=Núcleos de relevo auditivo del mesencéfalo",
    "Área tegmental ventral=Región mesencefálica de origen de vías dopaminérgicas",
    "Sustancia gris periacueductal=Región que controla el dolor y las conductas defensivas",
    "Protuberancia=Parte media del tronco, relevo entre la corteza y el cerebelo",
    "Bulbo raquídeo=Parte del tronco que controla la respiración y la presión arterial"
  ],
  g: [
    "Los colículos ___ son un relevo auditivo.|inferiores|superiores|laterales",
    "El locus coeruleus se encuentra en la ___.|protuberancia|médula espinal|corteza insular",
    "La sustancia gris periacueductal forma parte del ___ del mesencéfalo.|tegmento|tectum|acueducto",
    "La lesión del ___ puede ser mortal por afectar a la respiración y a la función cardiovascular.|bulbo raquídeo|colículo inferior|tectum",
    "En el tronco encefálico se encuentran los núcleos de la ___ de los pares craneales.|mayoría|totalidad|minoría"
  ],
  tf: [
    "Los colículos superiores participan en los reflejos visuales y la orientación de la mirada.|V",
    "La sustancia negra se localiza en el tectum del mesencéfalo.|F|Está en el tegmento (parte ventral); el tectum, dorsal, contiene los colículos.",
    "El bulbo raquídeo es la parte del tronco que actúa como relevo entre la corteza y el cerebelo.|F|Ese relevo corresponde a la protuberancia; el bulbo controla respiración, frecuencia cardíaca y presión.",
    "El área tegmental ventral es origen de vías dopaminérgicas.|V"
  ],
  q: [
    "¿Qué estructura mesencefálica controla el dolor y las conductas defensivas?|La sustancia gris periacueductal|El área tegmental ventral|La sustancia negra compacta|La sustancia gris periacueductal, en el tegmento, controla el dolor y las conductas defensivas.",
    "Un paciente sufre una lesión que compromete la respiración y la frecuencia cardíaca y pone en riesgo su vida. ¿Dónde es más probable que esté?|En el bulbo raquídeo|En el colículo inferior|En el tectum mesencefálico|El bulbo controla funciones vitales como la respiración, la frecuencia cardíaca y la presión arterial.",
    "¿En qué parte del tronco se sitúa el locus coeruleus?|En la protuberancia|En el bulbo raquídeo|En el tectum|La protuberancia contiene núcleos del sueño y la respiración, y el locus coeruleus.",
    "¿Qué diferencia el tectum del tegmento mesencefálico?|El tectum es dorsal y aloja los colículos|El tectum es ventral y aloja la sustancia negra|El tectum es bulbar y regula la respiración|Tectum dorsal: colículos; tegmento ventral: sustancia negra, área tegmental ventral y gris periacueductal."
  ],
  inc: [
    "Sobre el mesencéfalo, señala la INCORRECTA.|Los colículos inferiores orientan la mirada|El tegmento contiene la sustancia negra|El tectum se sitúa en su parte dorsal|La orientación de la mirada depende de los colículos superiores; los inferiores son un relevo auditivo."
  ],
  seq: [
    "Del diencéfalo a la médula: ordena de arriba abajo|Diencéfalo>Mesencéfalo>Protuberancia>Bulbo raquídeo>Médula espinal"
  ],
  cls: [
    "Partes del tronco encefálico|Mesencéfalo: colículos; sustancia negra; sustancia gris periacueductal|Protuberancia: locus coeruleus; relevo corteza-cerebelo|Bulbo raquídeo: control de la frecuencia cardíaca; control de la presión arterial"
  ] },

{ t: "Formación reticular",
  tip: "La formación reticular es una red de núcleos que recorre el centro del tronco. Su parte ascendente, el sistema activador reticular ascendente, regula la vigilia y la alerta proyectando al tálamo y la corteza; su lesión puede causar coma. La descendente interviene en el tono muscular, la postura y la modulación del dolor. En ella o junto a ella nacen el locus coeruleus (noradrenalina) y los núcleos del rafe (serotonina).",
  v: [
    "Formación reticular=Red de núcleos que recorre el centro del tronco encefálico",
    "Sistema activador reticular ascendente=Componente que regula vigilia y alerta proyectando al tálamo y la corteza",
    "Coma=Posible consecuencia de la lesión del sistema activador ascendente",
    "Reticular descendente=Parte que interviene en el tono muscular, la postura y el dolor",
    "Locus coeruleus=Núcleo de origen del sistema noradrenérgico",
    "Núcleos del rafe=Núcleos de origen del sistema serotoninérgico",
    "Tálamo y corteza=Destinos de la proyección ascendente que mantiene la vigilia",
    "Vigilia y alerta=Estados cuyo nivel regula la proyección reticular ascendente"
  ],
  g: [
    "El sistema activador reticular ascendente proyecta hacia el tálamo y la ___.|corteza|médula|hipófisis",
    "Los núcleos del rafe originan el sistema de la ___.|serotonina|noradrenalina|dopamina",
    "La lesión del sistema activador reticular ascendente puede producir un ___.|coma|temblor|hemibalismo",
    "La parte descendente de la formación reticular participa en el tono muscular, la postura y la modulación del ___.|dolor|hambre|lenguaje",
    "La formación reticular recorre el ___ del tronco encefálico.|centro|dorso|exterior"
  ],
  tf: [
    "El locus coeruleus es el origen principal de la serotonina cerebral.|F|El locus coeruleus origina el sistema noradrenérgico; la serotonina procede de los núcleos del rafe.",
    "La parte ascendente de la formación reticular regula el nivel de vigilia y alerta.|V",
    "La formación reticular es un núcleo único y compacto situado en el bulbo.|F|Es una red de núcleos que recorre el centro de todo el tronco encefálico.",
    "La formación reticular también participa en la modulación del dolor.|V"
  ],
  q: [
    "Tras un traumatismo del tronco encefálico, un paciente queda en coma sin lesiones corticales extensas. ¿Qué sistema es más probable que esté dañado?|El activador reticular ascendente|La vía reticular descendente|La vía directa estriatal|El sistema activador reticular ascendente mantiene la vigilia proyectando al tálamo y la corteza; su lesión puede causar coma.",
    "¿Qué función corresponde a la parte descendente de la formación reticular?|Tono muscular y postura|Vigilia y alerta|Relevo auditivo|La parte descendente participa en el tono muscular, la postura y la modulación del dolor.",
    "¿Qué par núcleo-neuromodulador es correcto?|Rafe y serotonina|Rafe y noradrenalina|Locus coeruleus y dopamina|El locus coeruleus origina la noradrenalina y los núcleos del rafe, la serotonina.",
    "¿Hacia dónde proyecta el sistema activador reticular ascendente para regular la vigilia?|Al tálamo y la corteza|A la médula y los músculos|Al cerebelo y el bulbo|Su proyección al tálamo y la corteza regula el nivel de vigilia y alerta."
  ],
  inc: [
    "Sobre la formación reticular, señala la INCORRECTA.|Su parte ascendente controla la postura|Recorre el centro del tronco encefálico|Su lesión ascendente puede causar coma|La postura y el tono dependen de la parte descendente; la ascendente regula la vigilia."
  ],
  seq: [],
  cls: [
    "Parte ascendente o descendente|Ascendente: vigilia; alerta; proyección al tálamo y la corteza|Descendente: tono muscular; postura; modulación del dolor"
  ] },

{ t: "Cerebelo",
  tip: "El cerebelo alberga unos 69 000 millones de neuronas (cerca del 80 % del encéfalo) en torno al 10 % del volumen. Coordina el movimiento comparando lo pretendido con lo ejecutado, e interviene en el equilibrio y el aprendizaje motor; su lesión causa ataxia, temblor intencional, dismetría y alteraciones del habla. Está firmemente establecido que participa en cognición y emoción: el lóbulo posterior se asocia al síndrome de Schmahmann.",
  v: [
    "Ataxia=Falta de coordinación de los movimientos",
    "Temblor intencional=Temblor que aparece al intentar un movimiento",
    "Dismetría=Dificultad para medir distancias en los movimientos",
    "Síndrome de Schmahmann=Alteración cognitiva y afectiva por lesión del lóbulo cerebeloso posterior",
    "Lóbulo anterior cerebeloso=Parte que concentra el procesamiento sensoriomotor",
    "Aprendizaje motor=Mejora de la ejecución de movimientos en la que interviene el cerebelo",
    "Neuronas cerebelosas=Unos 69 000 millones, cerca del 80 % de todas las del encéfalo",
    "Coordinación motora=Función clásica: comparar el movimiento pretendido con el ejecutado"
  ],
  g: [
    "El cerebelo ocupa en torno al ___ del volumen del encéfalo.|10 %|50 %|80 %",
    "Las lesiones del lóbulo ___ del cerebelo pueden producir el síndrome cognitivo-afectivo.|posterior|anterior|medio",
    "El temblor típico de la lesión cerebelosa aparece al ___ un movimiento.|intentar|terminar|imaginar",
    "La dificultad para medir distancias en los movimientos se denomina ___.|dismetría|disartria|bradicinesia",
    "El síndrome cerebeloso cognitivo-afectivo fue descrito por Schmahmann y ___.|Sherman|Sperry|Papez"
  ],
  tf: [
    "El cerebelo contiene cerca del 80 % de las neuronas del encéfalo pese a ocupar alrededor del 10 % de su volumen.|V",
    "La participación del cerebelo en la cognición es una hipótesis aún sin apoyo sólido.|F|Hoy está firmemente establecido que el cerebelo participa en la cognición y la emoción.",
    "El temblor de la lesión cerebelosa aparece típicamente en reposo.|F|Es un temblor intencional, al intentar un movimiento; el temblor en reposo es típico del Parkinson.",
    "El lóbulo anterior del cerebelo concentra el procesamiento sensoriomotor.|V"
  ],
  q: [
    "Una paciente con un tumor en el lóbulo posterior del cerebelo presenta problemas de planificación, alteraciones visoespaciales y desregulación emocional. ¿Qué diagnóstico encaja mejor?|Síndrome de Schmahmann|Afasia de conducción|Síndrome de Urbach-Wiethe|El síndrome cerebeloso cognitivo-afectivo afecta a funciones ejecutivas, visoespaciales, lenguaje y regulación emocional.",
    "Al pedirle que se toque la nariz con el dedo, un paciente se pasa de largo y tiembla al acercarse. ¿Dónde es más probable la lesión?|En el cerebelo|En la sustancia negra|En el núcleo subtalámico|Dismetría y temblor intencional son signos de lesión cerebelosa; el temblor del Parkinson es de reposo.",
    "¿Cuál es la función clásica del cerebelo?|Comparar el movimiento pretendido con el real|Iniciar los movimientos voluntarios del cuerpo|Seleccionar qué movimiento se va a ejecutar|Coordina comparando el movimiento que se pretende con el que se ejecuta y lo corrige.",
    "¿Cuántas neuronas contiene aproximadamente el cerebelo?|Unos 69 000 millones|Unos 16 000 millones|Unos 8600 millones|Alrededor de 69 000 millones, cerca del 80 % de las neuronas del encéfalo (Azevedo et al., 2009)."
  ],
  inc: [
    "Sobre el cerebelo, señala la INCORRECTA.|Su lesión produce típicamente hemibalismo|Interviene en el equilibrio y el aprendizaje motor|Su lesión puede alterar el habla|El hemibalismo se debe a la lesión del núcleo subtalámico; la del cerebelo produce ataxia y dismetría."
  ],
  seq: [],
  cls: [
    "Signos de lesión cerebelosa|Motores: ataxia; temblor intencional; dismetría|Cognitivo-afectivos: disfunción ejecutiva; alteración visoespacial; desregulación emocional"
  ] },

{ t: "Médula espinal y reflejos",
  tip: "La médula termina hacia la primera o segunda vértebra lumbar; por debajo, las raíces forman la cola de caballo. En corte: sustancia gris central en mariposa (astas dorsales sensitivas, ventrales con motoneuronas) y blanca alrededor con los tractos. Ley de Bell-Magendie: raíces dorsales sensitivas, ventrales motoras. El reflejo miotático (rotuliano) es monosináptico; el de retirada ante el dolor, polisináptico.",
  v: [
    "Cola de caballo=Raíces nerviosas que continúan por debajo del final de la médula",
    "Astas dorsales=Zona de sustancia gris que recibe información sensitiva",
    "Astas ventrales=Zona de sustancia gris que contiene las motoneuronas",
    "Sustancia blanca medular=Región periférica con los tractos ascendentes y descendentes",
    "Ley de Bell-Magendie=Raíces dorsales sensitivas y ventrales motoras",
    "Reflejo miotático=Reflejo monosináptico de estiramiento, como el rotuliano",
    "Reflejo de retirada=Respuesta polisináptica ante un estímulo doloroso",
    "Interneuronas=Neuronas intercaladas que hacen polisináptico un reflejo"
  ],
  g: [
    "La médula espinal termina hacia la primera o segunda vértebra ___.|lumbar|torácica|sacra",
    "En un corte transversal, la sustancia gris medular tiene forma de ___.|mariposa|anillo|media luna",
    "Las raíces ___ de los nervios espinales son motoras.|ventrales|dorsales|laterales",
    "El reflejo rotuliano es ___: la neurona sensitiva conecta directamente con la motoneurona.|monosináptico|polisináptico|disináptico",
    "En la médula, la sustancia ___ rodea a la gris y contiene los tractos.|blanca|negra|reticular"
  ],
  tf: [
    "La médula espinal recorre todo el canal vertebral hasta el sacro.|F|Termina hacia la primera o segunda vértebra lumbar; por debajo continúan las raíces de la cola de caballo.",
    "Las motoneuronas se sitúan en las astas ventrales de la sustancia gris.|V",
    "El reflejo de retirada ante el dolor es monosináptico.|F|Implica interneuronas, por lo que es polisináptico; el monosináptico típico es el miotático.",
    "La médula no es solo una vía de paso: organiza reflejos por sí misma.|V"
  ],
  q: [
    "Un paciente pierde la sensibilidad de una zona de la pierna, pero conserva la fuerza. ¿Qué es más probable que esté dañado?|Una raíz dorsal|Una raíz ventral|Un asta ventral|Por la ley de Bell-Magendie, las raíces dorsales son sensitivas: su daño quita sensibilidad sin afectar a la fuerza.",
    "¿Qué caracteriza al reflejo miotático?|Sinapsis directa entre sensitiva y motoneurona|Interneuronas entre la entrada y la salida|Paso obligado por la corteza motora primaria|La neurona sensitiva que detecta el estiramiento conecta directamente con la motoneurona: es monosináptico.",
    "En un corte de médula, ¿dónde discurren los tractos que suben y bajan información?|En la sustancia blanca|En las astas dorsales|En las astas ventrales|La sustancia gris central contiene las astas; los tractos ascendentes y descendentes van por la sustancia blanca.",
    "¿Qué es la cola de caballo?|Raíces que siguen tras el fin medular|La parte final de la médula sacra|Un haz de la sustancia blanca|La médula termina hacia L1-L2 y por debajo continúan las raíces nerviosas, que forman la cola de caballo."
  ],
  inc: [
    "Sobre la médula espinal, señala la INCORRECTA.|Las raíces dorsales son motoras|Las astas ventrales tienen motoneuronas|La sustancia gris ocupa el centro|Por la ley de Bell-Magendie, las raíces dorsales son sensitivas y las ventrales, motoras."
  ],
  seq: [
    "Arco del reflejo rotuliano|Golpe en el tendón rotuliano>Estiramiento del músculo>Activación de la neurona sensitiva>Sinapsis con la motoneurona>Contracción del músculo"
  ],
  cls: [
    "Dorsal o ventral|Dorsal: raíces sensitivas; recepción de información sensitiva|Ventral: raíces motoras; motoneuronas"
  ] }
] }
);

// SAIMAP Psicología · Bases Biológicas · Unidades 9–12
window.COURSE.units.push(
{ n: 9, t: "Sistema nervioso periférico", cap: 2, pir: "alta", mods: [
  { t: "Nervios raquídeos",
    tip: "El SNP comprende los nervios y ganglios situados fuera del encéfalo y la médula, con un componente somático y otro autónomo. De la médula salen 31 pares de nervios raquídeos, todos mixtos: cada uno une una raíz dorsal sensitiva, con su ganglio, y una raíz ventral motora.",
    v: [
      "Sistema nervioso periférico=Nervios y ganglios situados fuera del encéfalo y la médula espinal",
      "SNP somático=Componente que conecta con piel, músculo esquelético y articulaciones",
      "SNP autónomo=Componente que regula de forma involuntaria los órganos internos",
      "Raíz dorsal=Vía de entrada sensitiva que llega a la médula por su cara posterior",
      "Raíz ventral=Vía de salida motora que abandona la médula por su cara anterior",
      "Ganglio raquídeo=Agrupación de somas de neuronas sensitivas junto a la médula",
      "Dermatoma=Zona de piel inervada por un único nervio raquídeo",
      "Nervio mixto=Contiene a la vez fibras sensitivas y fibras motoras"
    ],
    g: [
      "De la médula espinal salen ___ pares de nervios raquídeos.|31|12|33",
      "Los somas de las neuronas sensitivas de un nervio raquídeo están en el ganglio de la raíz ___.|dorsal|ventral|lateral",
      "Todos los nervios raquídeos son ___, porque unen una raíz sensitiva y otra motora.|mixtos|motores|sensitivos",
      "La zona de piel inervada por un nervio raquídeo se denomina ___.|dermatoma|miotoma|ganglio",
      "El componente ___ del SNP conecta con la piel, los músculos esqueléticos y las articulaciones.|somático|autónomo|entérico"
    ],
    tf: [
      "Hay 8 pares de nervios raquídeos cervicales y solo 1 coccígeo.|V",
      "La raíz ventral de un nervio raquídeo es sensitiva y contiene el ganglio.|F|La raíz dorsal es la sensitiva y la que tiene el ganglio. La ventral es motora.",
      "Los ganglios situados fuera del encéfalo y la médula forman parte del SNP.|V",
      "Los nervios raquídeos son sensitivos o motores según el segmento medular del que salen.|F|Todos son mixtos: cada uno une una raíz dorsal sensitiva y una ventral motora."
    ],
    q: [
      "¿Cuántos pares de nervios raquídeos lumbares hay?|5|12|8|Son 8 cervicales, 12 torácicos, 5 lumbares, 5 sacros y 1 coccígeo.",
      "Una lesión destruye solo las raíces dorsales de varios segmentos medulares contiguos. ¿Qué se pierde en la zona que inervan?|La sensibilidad de la zona|La motricidad de la zona|Sensibilidad y motricidad|La raíz dorsal es sensitiva. La ventral, motora, queda intacta.",
      "¿Qué estructura alberga los somas de las neuronas sensitivas de los nervios raquídeos?|El ganglio de la raíz dorsal|El asta ventral de la médula|La cadena paravertebral simpática|La raíz dorsal, sensitiva, tiene un ganglio con los somas de esas neuronas.",
      "¿Qué define un dermatoma?|La piel inervada por un nervio raquídeo|Los músculos que mueve un nervio raquídeo|La piel inervada por una raíz ventral|Es la zona de piel que inerva cada nervio raquídeo."
    ],
    inc: [
      "Sobre los nervios raquídeos, ¿cuál es INCORRECTA?|Son 12 pares, igual que los craneales|Son 31 pares que salen de la médula|Todos ellos son nervios mixtos|Son 31 pares. Doce es el número de pares craneales (y de pares torácicos)."
    ],
    seq: [
      "Grupos de nervios raquídeos, de arriba abajo|Cervicales>Torácicos>Lumbares>Sacros>Coccígeo"
    ],
    cls: [] },

  { t: "Pares craneales",
    tip: "Los 12 pares craneales salen directamente del encéfalo y se numeran con romanos de delante atrás. Son sensitivos (I, II, VIII), motores (III, IV, VI, XI, XII) o mixtos (V, VII, IX, X). Llevan fibras parasimpáticas el III, el VII, el IX y el X.",
    v: [
      "Nervio oculomotor=Par III: casi todos los movimientos oculares, párpado y constricción pupilar",
      "Nervio troclear=Par IV, inerva el músculo oblicuo superior del ojo",
      "Nervio trigémino=Par V, mixto: sensibilidad de la cara y masticación",
      "Nervio abducens=Par VI, mueve el recto lateral para dirigir la mirada hacia fuera",
      "Nervio facial=Par VII: expresión de la cara, gusto anterior de la lengua, lágrimas y saliva",
      "Nervio glosofaríngeo=Par IX: gusto del tercio posterior de la lengua y deglución",
      "Nervio vago=Par X, principal vía parasimpática de las vísceras torácicas y abdominales",
      "Nervio hipogloso=Par XII, motor de los movimientos de la lengua"
    ],
    g: [
      "El músculo oblicuo superior del ojo está inervado por el par ___.|IV|III|VI",
      "El gusto de los dos tercios anteriores de la lengua depende del nervio ___.|facial|glosofaríngeo|trigémino",
      "El nervio accesorio inerva los músculos esternocleidomastoideo y ___.|trapecio|masetero|deltoides",
      "Los pares craneales I y II son, en realidad, prolongaciones del sistema nervioso ___.|central|autónomo|periférico",
      "El par VIII, vestibulococlear, es un nervio ___.|sensitivo|mixto|motor"
    ],
    tf: [
      "El nervio trigémino es mixto: lleva la sensibilidad de la cara y controla la masticación.|V",
      "La expresión facial depende del nervio trigémino.|F|Depende del facial (VII). El trigémino (V) lleva la sensibilidad de la cara y controla la masticación.",
      "El nervio oculomotor, además de mover el ojo, interviene en la constricción de la pupila.|V",
      "El nervio hipogloso es mixto porque también recoge el gusto de la lengua.|F|El hipogloso (XII) es motor. El gusto lo llevan el facial (VII) y el glosofaríngeo (IX)."
    ],
    q: [
      "Tras una lesión, un paciente no puede desviar el ojo derecho hacia fuera, pero lo mueve bien en las demás direcciones. ¿Qué par está dañado?|El abducens (VI)|El troclear (IV)|El oculomotor (III)|El abducens inerva el recto lateral, que dirige la mirada hacia fuera.",
      "Una paciente presenta el párpado caído y la pupila dilatada en un ojo. ¿Qué nervio sospecharías?|El oculomotor (III)|El abducens (VI)|El facial (VII)|El III eleva el párpado y contrae la pupila. Su lesión explica la caída del párpado y la midriasis.",
      "¿Cuál de estos pares craneales NO lleva fibras parasimpáticas?|El trigémino (V)|El facial (VII)|El glosofaríngeo (IX)|Solo el III, el VII, el IX y el X llevan fibras parasimpáticas.",
      "¿Qué grupo contiene solo pares craneales motores?|IV, VI y XII|III, V y XI|I, VI y XII|Son motores el III, IV, VI, XI y XII. El V es mixto y el I, sensitivo."
    ],
    inc: [
      "Sobre los pares craneales, ¿cuál es INCORRECTA?|El glosofaríngeo lleva el gusto de los dos tercios anteriores|El vago es el principal nervio parasimpático visceral|El accesorio inerva el trapecio y el esternocleidomastoideo|El IX lleva el gusto del tercio posterior. Los dos tercios anteriores corresponden al facial (VII)."
    ],
    seq: [
      "Pares craneales del VII al XII, en orden|Facial>Vestibulococlear>Glosofaríngeo>Vago>Accesorio>Hipogloso"
    ],
    cls: [
      "Pares craneales según su tipo|Sensitivos: Olfatorio (I); Óptico (II); Vestibulococlear (VIII)|Motores: Oculomotor (III); Troclear (IV); Abducens (VI); Accesorio (XI); Hipogloso (XII)|Mixtos: Trigémino (V); Facial (VII); Glosofaríngeo (IX); Vago (X)"
    ] },

  { t: "Sistema nervioso autónomo: simpático y parasimpático",
    tip: "El SNA regula de forma involuntaria corazón, vasos, glándulas y músculo liso mediante vías de dos neuronas: preganglionar (soma en el SNC) y posganglionar (soma en un ganglio). El simpático, de salida toracolumbar, moviliza energía; el parasimpático, craneosacro, la conserva. La mayoría de los órganos reciben ambos y dependen de su equilibrio.",
    v: [
      "Neurona preganglionar=Primera célula de la vía autónoma, con su soma en el SNC",
      "Neurona posganglionar=Segunda célula de la vía autónoma, con su soma en un ganglio",
      "Salida toracolumbar=Origen del simpático en la médula torácica y lumbar",
      "Salida craneosacra=Origen del parasimpático en el tronco encefálico y la médula sacra",
      "Cadena paravertebral=Fila de ganglios simpáticos situada cerca de la médula",
      "Médula suprarrenal=Ganglio simpático especial que libera adrenalina a la sangre",
      "Lucha o huida=Respuesta de movilización de energía propia del simpático",
      "Reposo y digestión=Estado de conservación de energía propio del parasimpático"
    ],
    g: [
      "En el simpático, las fibras preganglionares son ___ porque los ganglios están cerca de la médula.|cortas|largas|mixtas",
      "El neurotransmisor posganglionar simpático es la noradrenalina, salvo en las glándulas ___.|sudoríparas|salivales|lagrimales",
      "La médula suprarrenal recibe directamente fibras ___ y libera adrenalina a la sangre.|preganglionares|posganglionares|parasimpáticas",
      "El parasimpático sale del tronco encefálico y de la médula ___.|sacra|lumbar|cervical",
      "En ambas divisiones, el neurotransmisor de la neurona preganglionar es la ___.|acetilcolina|noradrenalina|adrenalina"
    ],
    tf: [
      "Las fibras preganglionares parasimpáticas son largas porque sus ganglios están cerca o dentro del órgano.|V",
      "La médula suprarrenal libera sobre todo noradrenalina a la sangre.|F|Libera sobre todo adrenalina (y algo de noradrenalina).",
      "Simpático y parasimpático funcionan como un interruptor: cuando uno se activa, el otro se apaga.|F|La mayoría de los órganos reciben ambos y su estado depende del equilibrio entre los dos.",
      "En la vía autónoma, la neurona posganglionar tiene el soma en un ganglio, fuera del SNC.|V"
    ],
    q: [
      "¿Qué neurotransmisor liberan las neuronas posganglionares simpáticas de las glándulas sudoríparas?|Acetilcolina|Noradrenalina|Adrenalina|Es la excepción: en el resto del simpático, la neurona posganglionar libera noradrenalina.",
      "¿Qué rasgo comparten el simpático y el parasimpático?|El neurotransmisor preganglionar|La longitud de las fibras preganglionares|El nivel de salida del SNC|Ambos usan acetilcolina en la sinapsis preganglionar. Difieren en salida, ganglios y fibras.",
      "Un fármaco impide la acción de la acetilcolina en la sinapsis entre neurona preganglionar y posganglionar. ¿Qué división se vería afectada?|Las dos divisiones|Solo la simpática|Solo la parasimpática|La sinapsis preganglionar usa acetilcolina tanto en el simpático como en el parasimpático.",
      "¿Dónde se sitúan los ganglios parasimpáticos?|Cerca o dentro del órgano|En la cadena paravertebral|En la médula suprarrenal|Por eso las fibras preganglionares parasimpáticas son largas y las posganglionares, cortas."
    ],
    inc: [
      "Sobre el sistema simpático, ¿cuál es INCORRECTA?|Sus ganglios están cerca o dentro del órgano|Su salida del SNC es toracolumbar|Su posganglionar suele liberar noradrenalina|Los ganglios simpáticos están cerca de la médula. Los situados junto al órgano son parasimpáticos."
    ],
    seq: [],
    cls: [
      "¿Simpático o parasimpático?|Simpático: Salida toracolumbar; Fibras preganglionares cortas; Cadena paravertebral; Posganglionar noradrenérgico|Parasimpático: Salida craneosacra; Fibras preganglionares largas; Ganglios junto al órgano; Posganglionar colinérgico"
    ] },

  { t: "Efectos autónomos y sistema entérico",
    tip: "El simpático dilata la pupila y los bronquios, acelera el corazón, inhibe la digestión y relaja la vejiga; el parasimpático hace lo contrario y favorece la micción. Las glándulas sudoríparas solo reciben efecto simpático. El sistema entérico, en la pared del tubo digestivo, se considera la tercera división del SNA.",
    v: [
      "Midriasis=Dilatación de la pupila, efecto simpático",
      "Miosis=Contracción de la pupila, efecto parasimpático",
      "Sistema nervioso entérico=Red de cientos de millones de neuronas en la pared del tubo digestivo",
      "Retención urinaria=Resultado de que el simpático relaje la pared de la vejiga",
      "Micción=Vaciado favorecido por el parasimpático al contraer la pared vesical",
      "Broncodilatación=Ensanchamiento de las vías aéreas por activación simpática",
      "Saliva escasa y espesa=Secreción de las glándulas bucales bajo activación simpática",
      "Nervio vago=Principal enlace entre el sistema entérico y el encéfalo"
    ],
    g: [
      "La activación simpática produce en la pupila ___.|midriasis|miosis|ptosis",
      "Las glándulas sudoríparas solo reciben inervación funcional ___.|simpática|parasimpática|entérica",
      "Sobre el corazón, el parasimpático ___ la frecuencia.|disminuye|aumenta|mantiene",
      "En la vejiga, el simpático ___ la pared y favorece la retención.|relaja|contrae|engrosa",
      "El sistema entérico se comunica con el encéfalo sobre todo a través del nervio ___.|vago|glosofaríngeo|facial"
    ],
    tf: [
      "La activación parasimpática produce una saliva abundante y fluida.|V",
      "El parasimpático reduce la sudoración porque inhibe las glándulas sudoríparas.|F|El parasimpático no tiene efecto sobre las glándulas sudoríparas. Solo las estimula el simpático.",
      "El parasimpático contrae los bronquios.|V",
      "El sistema entérico necesita órdenes constantes del encéfalo para controlar la motilidad intestinal.|F|Puede controlar la motilidad y la secreción de forma bastante autónoma, aunque se comunica con el encéfalo."
    ],
    q: [
      "Antes de un examen, una estudiante nota el corazón acelerado y la boca seca, con saliva escasa y espesa. ¿Qué división predomina?|La simpática|La parasimpática|La entérica|El aumento de la frecuencia cardíaca y la saliva escasa y espesa son efectos simpáticos.",
      "¿Cuál de estos efectos es parasimpático?|Contracción de la pared vesical|Dilatación de los bronquios|Aumento de la fuerza cardíaca|El parasimpático contrae la vejiga (micción). Los otros dos efectos son simpáticos.",
      "¿Qué estructura recibe efecto simpático pero no parasimpático?|Las glándulas sudoríparas|Las glándulas salivales|La musculatura bronquial|El simpático estimula las sudoríparas. El parasimpático no tiene efecto sobre ellas.",
      "¿Cómo se considera hoy el sistema nervioso entérico?|La tercera división del SNA|Una rama del nervio vago|Parte del SNP somático|Es una red propia de la pared digestiva, considerada la tercera división del SNA."
    ],
    inc: [
      "Sobre los efectos parasimpáticos, ¿cuál es INCORRECTA?|Dilata la pupila|Estimula la digestión|Contrae los bronquios|La dilatación pupilar (midriasis) es simpática. El parasimpático produce miosis."
    ],
    seq: [],
    cls: [
      "Efectos simpáticos y parasimpáticos|Simpático: Midriasis; Broncodilatación; Inhibición digestiva; Relajación de la vejiga; Estimulación sudorípara|Parasimpático: Miosis; Broncoconstricción; Estimulación digestiva; Contracción de la vejiga; Saliva abundante y fluida"
    ] }
] },

{ n: 10, t: "Neuronas y glía", cap: 3, pir: "media", mods: [
  { t: "La neurona: partes y tipos",
    tip: "La neurona recibe señales sobre todo por las dendritas y las transmite por el axón, que nace en el cono axónico. El potencial de acción se genera en el segmento inicial. Las neuronas se clasifican por su número de prolongaciones, por su función y por la longitud del axón (Golgi tipo I y tipo II).",
    v: [
      "Espina dendrítica=Protuberancia donde se forman sinapsis y que cambia con el aprendizaje",
      "Cono axónico=Zona del soma de la que nace el axón",
      "Segmento inicial=Primer tramo del axón, donde se genera el potencial de acción",
      "Botón terminal=Extremo del axón con vesículas de neurotransmisor",
      "Nodo de Ranvier=Interrupción periódica de la vaina de mielina",
      "Transporte retrógrado=Desplazamiento de sustancias de los terminales al soma, mediante dineína",
      "Cinesina=Proteína motora del transporte anterógrado",
      "Golgi tipo II=Neurona de axón corto que forma circuitos locales"
    ],
    g: [
      "El transporte anterógrado, del soma a los terminales, depende de la proteína ___.|cinesina|dineína|miosina",
      "Las neuronas de la retina con un axón y una dendrita son ___.|bipolares|multipolares|seudounipolares",
      "Las neuronas Golgi tipo ___ tienen un axón largo que proyecta a distancia.|I|II|III",
      "La gran mayoría de las neuronas son ___.|interneuronas|neuronas motoras|neuronas sensitivas",
      "Las dendritas reciben la ___ de las señales procedentes de otras neuronas.|mayoría|totalidad|minoría"
    ],
    tf: [
      "Las neuronas multipolares son las más frecuentes.|V",
      "El potencial de acción se genera normalmente en las dendritas, que es donde llegan las señales.|F|Se genera en el segmento inicial del axón. Las dendritas reciben la mayoría de las señales.",
      "El transporte retrógrado lleva sustancias de los terminales al soma mediante la dineína.|V",
      "Las neuronas sensitivas de los ganglios raquídeos son bipolares.|F|Son seudounipolares: una prolongación que se divide en dos. Las bipolares típicas están en la retina."
    ],
    q: [
      "¿Qué combinación describe correctamente el transporte axónico hacia el soma?|Retrógrado, mediante dineína|Retrógrado, mediante cinesina|Anterógrado, mediante dineína|Hacia el soma es retrógrado y usa dineína. La cinesina mueve en sentido anterógrado.",
      "Una neurona tiene una sola prolongación que se divide en dos ramas. ¿Cómo se clasifica?|Seudounipolar|Bipolar|Golgi tipo II|Es la forma típica de las neuronas sensitivas de los ganglios raquídeos.",
      "¿Qué criterio separa las neuronas Golgi tipo I y Golgi tipo II?|La longitud del axón|El número de dendritas|La dirección de la señal|Tipo I: axón largo, proyección a distancia. Tipo II: axón corto, circuitos locales.",
      "¿Dónde se almacenan las vesículas con neurotransmisores?|En los botones terminales|En el cono axónico|En las espinas dendríticas|Los botones terminales, extremos del axón, contienen las vesículas."
    ],
    inc: [
      "Sobre las partes de la neurona, ¿cuál es INCORRECTA?|Las espinas dendríticas son estructuras fijas|El axón nace en el cono axónico|La mielina se interrumpe en los nodos|Las espinas dendríticas cambian con el aprendizaje. En ellas se forman sinapsis."
    ],
    seq: [],
    cls: [
      "Clasificación de las neuronas|Por prolongaciones: Multipolar; Bipolar; Seudounipolar|Por función: Sensitiva; Motora; Interneurona|Por longitud del axón: Golgi tipo I; Golgi tipo II"
    ] },

  { t: "Astrocitos y sinapsis tripartita",
    tip: "La glía no es un simple pegamento: cumple funciones activas. Los astrocitos, muy abundantes en el encéfalo, retiran el exceso de potasio, recaptan glutamato, aportan soporte metabólico, participan en la barrera hematoencefálica y forman cicatrices. La sinapsis tripartita (Araque y cols., 1999) incluye al astrocito, que detecta la actividad sináptica y puede modificarla.",
    v: [
      "Glía=Conjunto de células no neuronales del sistema nervioso",
      "Astrocito=Glía estrellada cuyas prolongaciones envuelven sinapsis y vasos",
      "Sinapsis tripartita=Presináptica, postsináptica y astrocito como un conjunto",
      "Recaptación de glutamato=Función astrocitaria que evita la acumulación tóxica de este neurotransmisor",
      "Pies terminales=Prolongaciones astrocitarias que participan en la barrera hematoencefálica",
      "Lactato=Fuente de energía que los astrocitos aportan a las neuronas",
      "Cicatriz glial=Tejido que forman los astrocitos tras una lesión",
      "Gliotransmisión=Liberación de sustancias por los astrocitos, de papel aún discutido"
    ],
    g: [
      "Los astrocitos mantienen el equilibrio iónico retirando el exceso de ___ extracelular.|potasio|sodio|calcio",
      "El concepto de sinapsis tripartita se atribuye a Araque y colaboradores, en ___.|1999|1952|2009",
      "Las células gliales del SNC con forma de estrella se llaman ___.|astrocitos|oligodendrocitos|ependimocitos",
      "Los astrocitos aportan soporte metabólico a las neuronas, por ejemplo en forma de ___.|lactato|glutamato|mielina",
      "Con sus pies terminales, los astrocitos participan en la ___.|barrera hematoencefálica|vaina de mielina|poda sináptica"
    ],
    tf: [
      "En la sinapsis tripartita, el astrocito detecta la actividad sináptica y puede modificarla.|V",
      "Está demostrado que la gliotransmisión es un componente esencial de la comunicación sináptica normal.|F|Se discute cuánto contribuye. Lo consensuado es que los astrocitos responden a la actividad sináptica y la modulan.",
      "Los astrocitos regulan el flujo sanguíneo local.|V",
      "Formar la vaina de mielina en el SNC es una de las funciones de los astrocitos.|F|La mielina del SNC la forman los oligodendrocitos. Los astrocitos regulan el medio, recaptan glutamato o forman cicatrices."
    ],
    q: [
      "¿Por qué es importante que los astrocitos recapten glutamato?|Evitan su acumulación tóxica|Facilitan su difusión a otras sinapsis|Prolongan su efecto excitador|Si el glutamato se acumula en el espacio extracelular, resulta tóxico.",
      "En un experimento se impide que los astrocitos retiren potasio del medio extracelular. ¿Qué función queda alterada?|El equilibrio iónico extracelular|La formación de mielina central|La poda de sinapsis|Los astrocitos retiran el exceso de potasio y mantienen el equilibrio iónico del medio.",
      "¿Qué tres elementos forman la sinapsis tripartita?|Presináptica, postsináptica y astrocito|Presináptica, postsináptica y microglía|Axón, dendrita y oligodendrocito|Araque y cols. (1999) incluyeron al astrocito que envuelve la sinapsis.",
      "¿Qué afirmación sobre la glía refleja la visión actual?|Tiene funciones activas y variadas|Actúa solo como pegamento estructural|Supera diez veces a las neuronas|La idea del simple «pegamento» está superada, y la proporción glía-neurona es cercana a 1:1."
    ],
    inc: [
      "Sobre los astrocitos, ¿cuál es INCORRECTA?|Fagocitan restos y realizan la poda sináptica|Recaptan glutamato del medio extracelular|Forman cicatrices tras una lesión|La fagocitosis de restos y la poda sináptica son funciones de la microglía."
    ],
    seq: [],
    cls: [] },

  { t: "Oligodendrocitos, células de Schwann y microglía",
    tip: "En el SNC, cada oligodendrocito mieliniza segmentos de varios axones; en el SNP, cada célula de Schwann mieliniza un solo segmento de un axón y facilita la regeneración. La microglía, de origen inmunitario, defiende, fagocita restos y poda sinapsis. La destrucción de la mielina causa la esclerosis múltiple (SNC) y el síndrome de Guillain-Barré (SNP).",
    v: [
      "Oligodendrocito=Glía del SNC que mieliniza segmentos de varios axones",
      "Célula de Schwann=Glía del SNP que mieliniza un solo segmento de un axón",
      "Microglía=Glía de origen inmunitario que fagocita restos y poda sinapsis",
      "Células ependimarias=Glía que reviste los ventrículos y ayuda a mover el LCR",
      "Células NG2=Precursores que generan oligodendrocitos también en el adulto",
      "Mielina=Vaina de membrana rica en lípidos que aísla el axón",
      "Esclerosis múltiple=Enfermedad por destrucción de la vaina aislante en el SNC",
      "Síndrome de Guillain-Barré=Enfermedad por destrucción de la vaina aislante en el SNP"
    ],
    g: [
      "Cada célula de Schwann mieliniza ___ de un axón.|un solo segmento|varios segmentos|toda la longitud",
      "La microglía procede de células ___ que colonizan el encéfalo durante el desarrollo embrionario.|inmunitarias|neuroepiteliales|endoteliales",
      "Las células ependimarias forman parte de los ___ y ayudan a mover el LCR.|plexos coroideos|nodos de Ranvier|ganglios basales",
      "En la esclerosis múltiple se pierde la mielina del sistema nervioso ___.|central|periférico|autónomo",
      "Los axones ___ pueden regenerarse en parte tras una lesión, gracias sobre todo a las células de Schwann.|periféricos|centrales|corticales"
    ],
    tf: [
      "Un solo oligodendrocito puede mielinizar segmentos de varios axones.|V",
      "La microglía es la principal responsable de la mielina en el SNC.|F|La mielina del SNC la forman los oligodendrocitos. La microglía tiene funciones inmunitarias y de poda.",
      "En el encéfalo adulto ya no se generan nuevos oligodendrocitos.|F|Los precursores de oligodendrocitos (células NG2) generan nuevos oligodendrocitos también en el adulto.",
      "El síndrome de Guillain-Barré afecta a la mielina del sistema nervioso periférico.|V"
    ],
    q: [
      "Una mujer de 30 años presenta visión borrosa y hormigueos. La resonancia muestra pérdida de mielina en el encéfalo y la médula. ¿Qué células formaban esa mielina?|Los oligodendrocitos|Las células de Schwann|Los astrocitos|Encéfalo y médula son SNC, donde mielinizan los oligodendrocitos. Es el cuadro de la esclerosis múltiple.",
      "¿Por qué un nervio periférico seccionado tiene más posibilidades de recuperarse que un tracto central?|Por el apoyo de las células de Schwann|Por la abundancia de microglía|Porque carece de vaina de mielina|Los axones periféricos pueden regenerarse en parte, gracias en gran medida a las células de Schwann.",
      "¿Qué célula glial interviene en la poda sináptica durante el desarrollo?|La microglía|El oligodendrocito|La célula ependimaria|La microglía elimina sinapsis durante el desarrollo, además de su papel inmunitario.",
      "¿Qué diferencia a la célula de Schwann del oligodendrocito?|Mieliniza un único segmento de un axón|Forma una mielina pobre en lípidos|Se localiza en el sistema nervioso central|El oligodendrocito, del SNC, mieliniza segmentos de varios axones. Ambas mielinas son ricas en lípidos."
    ],
    inc: [
      "Sobre la glía del SNC, ¿cuál es INCORRECTA?|Las células de Schwann forman su mielina|La microglía vigila el tejido|Las células NG2 generan oligodendrocitos|Las células de Schwann están en el SNP. La mielina del SNC la forman los oligodendrocitos."
    ],
    seq: [],
    cls: [
      "Mielina central o periférica|Sistema nervioso central: Oligodendrocito; Mieliniza varios axones; Esclerosis múltiple|Sistema nervioso periférico: Célula de Schwann; Mieliniza un solo segmento; Síndrome de Guillain-Barré; Facilita la regeneración"
    ] },

  { t: "Cuántas neuronas y cuánta glía",
    tip: "Las cifras de 100 000 millones de neuronas y diez veces más glía nunca tuvieron un recuento fiable detrás. Con el fraccionador isotrópico, Azevedo y cols. (2009) estimaron unos 86 000 millones de neuronas y una cantidad similar de células no neuronales: la proporción glía-neurona es de aproximadamente 1:1. La cifra procede de solo cuatro cerebros y su precisión está en debate.",
    v: [
      "Fraccionador isotrópico=Método de recuento celular más preciso que las estimaciones antiguas",
      "86 000 millones=Estimación actual de neuronas en el encéfalo humano adulto",
      "Proporción 1:1=Relación aproximada actual entre células gliales y neuronas",
      "Mito del 10:1=Idea de que hay diez veces más glía que neuronas",
      "Cerebelo=Estructura con unos 69 000 millones de neuronas",
      "Corteza cerebral=Estructura con unos 16 000 millones de neuronas",
      "Azevedo y cols. (2009)=Estudio que aplicó un recuento preciso a cuatro cerebros de varones adultos",
      "Von Bartheld y cols. (2016)=Revisión según la cual los datos histológicos nunca apoyaron el 10:1"
    ],
    g: [
      "Azevedo y cols. (2009) estimaron en el encéfalo humano adulto unos ___ millones de neuronas.|86 000|100 000|69 000",
      "El cerebelo contiene unos ___ millones de neuronas, más que la corteza cerebral.|69 000|16 000|86 000",
      "La revisión de von Bartheld y cols. (2016) situó la proporción entre glía y neuronas en torno a ___.|1:1|10:1|1:10",
      "La cifra de 86 000 millones procede del análisis de solo ___ cerebros.|cuatro|cuarenta|cuatrocientos",
      "El recuento de Azevedo y cols. se basó en un método llamado fraccionador ___.|isotrópico|estereológico|anisotrópico"
    ],
    tf: [
      "La corteza cerebral contiene la mayoría de las neuronas del encéfalo.|F|El cerebelo tiene unos 69 000 millones, frente a unos 16 000 millones en la corteza.",
      "La idea de que hay diez veces más glía que neuronas nunca estuvo respaldada por datos histológicos.|V",
      "La cifra de 86 000 millones de neuronas es un recuento exacto y cerrado, válido para cualquier persona.|F|Es una estimación basada en cuatro cerebros, con variabilidad individual y precisión debatida en 2025.",
      "Según Azevedo y cols., el encéfalo tiene una cantidad de células no neuronales similar a la de neuronas.|V"
    ],
    q: [
      "¿Cómo debe presentarse la cifra de 86 000 millones de neuronas?|Como estimación con variabilidad|Como recuento exacto y definitivo|Como cifra refutada en 2025|Procede de cuatro cerebros de varones. En 2025 se debatió su precisión, pero no se refutó.",
      "¿Qué estructura concentra más neuronas?|El cerebelo|La corteza cerebral|El tronco encefálico|El cerebelo tiene unos 69 000 millones de neuronas, y la corteza, unos 16 000 millones.",
      "Un divulgador afirma que «solo una de cada diez células del cerebro es una neurona». ¿Qué le responderías con los datos actuales?|Que la proporción es cercana a 1:1|Que hay diez veces más neuronas que glía|Que es correcto según Azevedo (2009)|El 10:1 es un mito: glía y neuronas están en proporción aproximada de 1:1.",
      "¿Qué aportó el trabajo de Azevedo y cols. (2009)?|Un recuento con un método más preciso|La primera descripción de la glía|La confirmación del 10:1|Usaron el fraccionador isotrópico y estimaron unos 86 000 millones de neuronas."
    ],
    inc: [
      "Sobre el número de células del encéfalo, ¿cuál es INCORRECTA?|La glía supera a las neuronas en proporción 10:1|La corteza tiene unos 16 000 millones de neuronas|El cerebelo tiene unos 69 000 millones de neuronas|La proporción entre glía y neuronas es de aproximadamente 1:1. El 10:1 es un mito."
    ],
    seq: [],
    cls: [
      "Dato actual o cifra antigua|Dato actual: Unos 86 000 millones de neuronas; Tanta glía como neuronas; Fraccionador isotrópico|Cifra antigua: Unos 100 000 millones de neuronas; Diez veces más glía que neuronas"
    ] }
] },

{ n: 11, t: "El potencial de membrana", cap: 3, pir: "alta", mods: [
  { t: "Iones dentro y fuera de la neurona",
    tip: "La membrana separa dos medios con una composición iónica muy distinta. El potasio abunda dentro (≈ 140 mM frente a ≈ 5 mM fuera); el sodio, el cloruro y el calcio abundan fuera. Dentro hay además aniones orgánicos que no pueden salir. Los valores son aproximados y varían según el tipo de neurona.",
    v: [
      "Potasio (K⁺)=Ion con ≈ 140 mM dentro y ≈ 5 mM fuera",
      "Sodio (Na⁺)=Ion con ≈ 145 mM fuera y ≈ 5–15 mM dentro",
      "Cloruro (Cl⁻)=Anión inorgánico con ≈ 110 mM fuera y ≈ 4–30 mM dentro",
      "Calcio (Ca²⁺)=Ion con ≈ 0,0001 mM dentro y ≈ 1–2 mM fuera",
      "Aniones orgánicos=Proteínas y otras moléculas negativas que no pueden salir de la célula",
      "Medio intracelular=Compartimento rico en potasio y en aniones orgánicos",
      "Medio extracelular=Compartimento rico en sodio, cloruro y calcio",
      "Membrana neuronal=Límite que separa dos medios de composición iónica muy distinta"
    ],
    g: [
      "El ion más concentrado dentro de la neurona que fuera es el ___.|potasio|sodio|cloruro",
      "La concentración extracelular de sodio es de unos ___ mM.|145|140|110",
      "Los aniones orgánicos del interior de la neurona ___ salir de la célula.|no pueden|tienden a|necesitan",
      "La concentración intracelular de ___ es de apenas ≈ 0,0001 mM.|calcio|sodio|cloruro",
      "El cloruro abunda ___ de la neurona.|fuera|dentro|a ambos lados"
    ],
    tf: [
      "El sodio está más concentrado dentro que fuera de la neurona.|F|Es al revés: el sodio abunda fuera (≈ 145 mM) y el potasio, dentro (≈ 140 mM).",
      "De los cuatro iones principales, el potasio es el único que abunda más dentro que fuera.|V",
      "El calcio es más abundante dentro de la neurona que en el medio extracelular.|F|El calcio abunda fuera: ≈ 1–2 mM frente a ≈ 0,0001 mM dentro.",
      "Dentro de la neurona hay proteínas con carga negativa que no pueden atravesar la membrana.|V"
    ],
    q: [
      "¿Qué ion presenta la mayor diferencia relativa entre fuera y dentro?|El calcio|El sodio|El potasio|Calcio ≈ 1–2 mM fuera frente a ≈ 0,0001 mM dentro: una diferencia de miles de veces.",
      "¿Qué pareja de iones abunda en el medio extracelular?|Sodio y cloruro|Potasio y sodio|Potasio y calcio|Regla: el potasio está dentro, y el sodio, el cloruro y el calcio, fuera.",
      "¿Qué caracteriza a los aniones orgánicos intracelulares?|No pueden salir de la célula|Salen por canales siempre abiertos|La bomba los expulsa al exterior|Son proteínas y otras moléculas con carga negativa atrapadas en el interior.",
      "Si el potasio intracelular está a ≈ 140 mM, ¿cuál es su concentración extracelular aproximada?|5 mM|145 mM|110 mM|El potasio está ≈ 140 mM dentro y ≈ 5 mM fuera. 145 mM es el sodio de fuera."
    ],
    inc: [
      "Sobre la distribución de los iones, ¿cuál es INCORRECTA?|El cloruro abunda dentro de la neurona|El sodio abunda fuera de la neurona|El potasio abunda dentro de la neurona|El cloruro abunda fuera (≈ 110 mM). De los iones principales, solo el potasio abunda dentro."
    ],
    seq: [],
    cls: [
      "¿Dónde abunda cada ion?|Dentro: Potasio (K⁺); Aniones orgánicos|Fuera: Sodio (Na⁺); Cloruro (Cl⁻); Calcio (Ca²⁺)"
    ] },

  { t: "Fuerzas que mueven los iones",
    tip: "Sobre cada ion actúan el gradiente químico (de concentración) y el eléctrico; su suma es el gradiente electroquímico. El potencial en que ambas fuerzas se equilibran es el potencial de equilibrio, que da la ecuación de Nernst (≈ −90 mV para el K⁺ y ≈ +60 mV para el Na⁺). Con varios iones a la vez, el potencial real lo describe la ecuación de Goldman-Hodgkin-Katz.",
    v: [
      "Gradiente químico=Tendencia a moverse de donde hay más concentración a donde hay menos",
      "Gradiente eléctrico=Fuerza por la que las cargas opuestas se atraen y las iguales se repelen",
      "Gradiente electroquímico=Suma de las fuerzas química y eléctrica sobre un ion",
      "Potencial de equilibrio=Valor en que no hay movimiento neto de un ion",
      "Ecuación de Nernst=Calcula el valor de equilibrio de un ion concreto",
      "Goldman-Hodgkin-Katz=Ecuación del potencial según concentración y permeabilidad de varios iones",
      "−90 mV=Valor de equilibrio aproximado del potasio",
      "+60 mV=Valor de equilibrio aproximado del sodio"
    ],
    g: [
      "La suma del gradiente químico y del eléctrico se llama gradiente ___.|electroquímico|osmótico|iónico",
      "El potencial de equilibrio de un ion se calcula con la ecuación de ___.|Nernst|Goldman|Hodgkin",
      "El potencial de equilibrio del sodio es de unos ___.|+60 mV|−90 mV|−70 mV",
      "Cuando la membrana es permeable a varios iones, el potencial se describe con la ecuación de ___.|Goldman-Hodgkin-Katz|Nernst|Hodgkin-Huxley",
      "Por su gradiente de concentración, el potasio tiende a ___ de la neurona.|salir|entrar|no moverse"
    ],
    tf: [
      "La ecuación de Nernst describe el potencial de membrana cuando son permeables varios iones a la vez.|F|Nernst da el potencial de equilibrio de un solo ion. Para varios iones se usa Goldman-Hodgkin-Katz.",
      "En el potencial de equilibrio de un ion, las fuerzas química y eléctrica que actúan sobre él se compensan.|V",
      "El potencial de equilibrio del potasio es de unos −90 mV.|V",
      "El gradiente electroquímico de un ion depende solo de su diferencia de concentración.|F|Es la suma del gradiente químico (concentración) y del eléctrico (cargas)."
    ],
    q: [
      "¿Qué ocurre cuando la membrana está en el potencial de equilibrio de un ion?|No hay movimiento neto de ese ion|El ion deja de atravesar la membrana|Se igualan sus concentraciones a ambos lados|Las fuerzas química y eléctrica se compensan: puede haber paso, pero no flujo neto.",
      "¿Qué tiene en cuenta la ecuación de Goldman-Hodgkin-Katz que no recoge la de Nernst?|La permeabilidad a cada ion|La concentración del ion|La carga del ion|El potencial real depende de la concentración de cada ion y de lo permeable que sea la membrana a él.",
      "En un experimento, una membrana solo deja pasar potasio. ¿Hacia qué valor tenderá su potencial?|Unos −90 mV|Unos −70 mV|Unos +60 mV|Si solo pasa K⁺, el potencial se acerca a su potencial de equilibrio (≈ −90 mV).",
      "En reposo, ¿cómo actúan las dos fuerzas sobre el potasio?|La química lo saca, la eléctrica lo frena|Las dos lo empujan hacia fuera de la célula|La química lo mete, la eléctrica lo saca|Sale por su gradiente de concentración, pero el interior negativo atrae su carga positiva."
    ],
    inc: [
      "Sobre los gradientes iónicos, ¿cuál es INCORRECTA?|El equilibrio del sodio está en ≈ −90 mV|Nernst calcula el equilibrio de un ion|Las cargas iguales se repelen entre sí|El potencial de equilibrio del sodio es ≈ +60 mV. Los −90 mV corresponden al potasio."
    ],
    seq: [],
    cls: [] },

  { t: "Potencial de reposo y bomba de sodio-potasio",
    tip: "En reposo, el interior es negativo: unos −65 a −70 mV. La membrana es mucho más permeable al potasio, que sale por canales siempre abiertos y deja dentro un exceso de cargas negativas; el reposo se acerca al equilibrio del K⁺ (−90 mV) sin alcanzarlo porque entra algo de sodio. La bomba Na⁺/K⁺-ATPasa saca 3 Na⁺ e introduce 2 K⁺ por cada ATP y mantiene los gradientes a largo plazo.",
    v: [
      "Potencial de reposo=Diferencia de potencial de la neurona inactiva, de unos −65 a −70 mV",
      "Canales siempre abiertos=Vía por la que sale potasio en reposo",
      "Na⁺/K⁺-ATPasa=Enzima de membrana que mantiene a largo plazo los gradientes de Na⁺ y K⁺",
      "ATP=Molécula cuya energía consume la bomba en cada ciclo",
      "Permeabilidad al potasio=Propiedad de la membrana en reposo, muy superior a la del sodio",
      "Entrada de sodio=Causa de que el reposo no llegue a los −90 mV",
      "Interior negativo=Estado del citoplasma respecto al exterior en reposo",
      "Relación 3:2=Iones de Na⁺ y K⁺ que mueve la bomba por cada ATP"
    ],
    g: [
      "El potencial de reposo de la neurona es de unos ___.|−65 a −70 mV|−90 mV|−55 mV",
      "En reposo, la permeabilidad de la membrana es máxima para el ___.|potasio|sodio|calcio",
      "Por cada ATP, la bomba de sodio-potasio saca ___ iones de sodio.|3|2|1",
      "El potencial de reposo no llega a −90 mV porque ___ algo de sodio.|entra|sale|se bombea",
      "Sin la bomba de sodio-potasio, los gradientes se disiparían ___.|poco a poco|de inmediato|en un milisegundo"
    ],
    tf: [
      "El potencial de reposo coincide exactamente con el potencial de equilibrio del potasio.|F|Se acerca a él (−90 mV), pero no lo alcanza porque entra algo de sodio.",
      "La bomba de sodio-potasio introduce 3 Na⁺ y saca 2 K⁺ por cada ATP.|F|Es al revés: saca 3 Na⁺ e introduce 2 K⁺.",
      "La bomba de sodio-potasio consume una parte importante de la energía del encéfalo.|V",
      "La salida de potasio por canales siempre abiertos deja un exceso de cargas negativas en el interior.|V"
    ],
    q: [
      "¿Cuál es la causa principal del potencial de reposo?|La alta permeabilidad al potasio|La entrada masiva de sodio|La salida de aniones orgánicos|El potasio sale por canales abiertos en reposo y deja dentro cargas negativas.",
      "¿Por qué el potencial de reposo es algo menos negativo que −90 mV?|Porque entra algo de sodio|Porque la bomba introduce potasio|Porque salen aniones orgánicos|El reposo se acerca al equilibrio del K⁺, pero la pequeña entrada de Na⁺ lo aleja de él.",
      "Se bloquea con un fármaco la bomba de sodio-potasio de una neurona. ¿Qué cabe esperar?|Los gradientes se disiparán poco a poco|El potencial de reposo desaparecerá al instante|La neurona quedará hiperpolarizada para siempre|La bomba mantiene los gradientes a largo plazo. Sin ella se disipan de forma gradual.",
      "¿Qué efecto neto tiene cada ciclo de la bomba sobre las cargas?|Saca una carga positiva más de las que mete|Mete una carga positiva más de las que saca|No altera el balance de cargas|Saca 3 Na⁺ e introduce 2 K⁺: sale una carga positiva neta por ciclo."
    ],
    inc: [
      "Sobre el potencial de reposo, ¿cuál es INCORRECTA?|Se debe sobre todo a la entrada de sodio|Su valor ronda los −65 a −70 mV|El interior es negativo respecto al exterior|Se debe a la alta permeabilidad al potasio, que sale. La entrada de sodio es escasa."
    ],
    seq: [
      "Cómo se establece el potencial de reposo|Los canales de potasio están abiertos en reposo>El potasio sale siguiendo su gradiente>Queda dentro un exceso de cargas negativas>El potencial se acerca a −90 mV>La pequeña entrada de sodio lo deja en unos −70 mV"
    ],
    cls: [] },

  { t: "Potenciales graduados y sumación",
    tip: "Los potenciales graduados son cambios locales cuyo tamaño es proporcional al estímulo y que se debilitan al alejarse. Una despolarización sináptica es un PEPS y acerca la neurona al disparo; una hiperpolarización es un PIPS y la aleja. La neurona integra sus entradas en el segmento inicial por sumación espacial (distintas sinapsis a la vez) y temporal (la misma sinapsis en rápida sucesión). Si se alcanza el umbral, unos −55 mV, dispara.",
    v: [
      "Potencial graduado=Cambio local proporcional al estímulo que se debilita con la distancia",
      "Despolarización=Cambio que hace el interior menos negativo",
      "Hiperpolarización=Cambio que hace el interior más negativo",
      "PEPS=Despolarización postsináptica que acerca la neurona al umbral",
      "PIPS=Hiperpolarización postsináptica que aleja la neurona del umbral",
      "Sumación espacial=Suma de potenciales de distintas sinapsis al mismo tiempo",
      "Sumación temporal=Suma de potenciales de una misma sinapsis en rápida sucesión",
      "Umbral=Valor de unos −55 mV a partir del cual la neurona dispara"
    ],
    g: [
      "El tamaño de un potencial graduado es ___ a la intensidad del estímulo.|proporcional|independiente|ajeno",
      "La sumación de potenciales que llegan a la vez desde distintas sinapsis es ___.|espacial|temporal|saltatoria",
      "Un PIPS ___ la neurona del umbral de disparo.|aleja|acerca|aísla",
      "La neurona integra sus entradas en el ___ del axón.|segmento inicial|botón terminal|nodo de Ranvier",
      "El umbral de disparo en el segmento inicial ronda los ___.|−55 mV|−70 mV|+40 mV"
    ],
    tf: [
      "Los potenciales graduados mantienen su amplitud a medida que se alejan del punto de origen.|F|Se debilitan al alejarse del punto de origen. Mantener la amplitud es propio del potencial de acción.",
      "Un PEPS es una despolarización que acerca la neurona al disparo.|V",
      "Dos PEPS generados en rápida sucesión por la misma sinapsis se suman por sumación espacial.|F|Es sumación temporal: misma sinapsis, rápida sucesión. La espacial suma sinapsis distintas a la vez.",
      "Una neurona puede recibir miles de entradas sinápticas que integra antes de disparar.|V"
    ],
    q: [
      "Tres sinapsis distintas producen a la vez PEPS pequeños que, juntos, llevan el segmento inicial a −55 mV. ¿Qué ha ocurrido?|Sumación espacial|Sumación temporal|Conducción saltatoria|Entradas simultáneas desde distintas sinapsis: sumación espacial que alcanza el umbral.",
      "Un neurotransmisor hace que el interior de la neurona pase de −70 a −75 mV. ¿Qué se ha producido?|Un PIPS|Un PEPS|Un potencial de acción|El interior se vuelve más negativo: es una hiperpolarización, que aleja del umbral.",
      "¿Qué rasgo distingue a un potencial graduado?|Su tamaño varía con el estímulo|Siempre tiene la misma amplitud|Se propaga sin debilitarse|Es proporcional a la intensidad del estímulo y se debilita al alejarse del origen.",
      "¿Dónde se decide si la suma de entradas dispara un potencial de acción?|En el segmento inicial del axón|En las espinas dendríticas|En los botones terminales|La neurona integra sus entradas en el segmento inicial, donde se compara con el umbral."
    ],
    inc: [
      "Sobre la sumación, ¿cuál es INCORRECTA?|La temporal suma entradas de sinapsis distintas|La espacial suma entradas simultáneas|Se integra en el segmento inicial|La temporal suma entradas de la misma sinapsis en rápida sucesión."
    ],
    seq: [],
    cls: [
      "¿PEPS o PIPS?|PEPS: Despolarización; Interior menos negativo; Acerca al umbral|PIPS: Hiperpolarización; Interior más negativo; Aleja del umbral"
    ] }
] },

{ n: 12, t: "Potencial de acción y conducción", cap: 3, pir: "alta", mods: [
  { t: "Fases del potencial de acción",
    tip: "El potencial de acción es una inversión breve (≈ 1–2 ms) del potencial de membrana, explicada por Hodgkin y Huxley en 1952. Al llegar al umbral (≈ −55 mV) se abren los canales de Na⁺ dependientes de voltaje y el interior llega a +30 a +40 mV. Después, los canales de Na⁺ se inactivan y sale K⁺ por canales más lentos. Sigue una breve hiperpolarización y la vuelta al reposo.",
    v: [
      "Potencial de acción=Inversión breve y rápida del potencial de membrana que se propaga por el axón",
      "Umbral=Valor de ≈ −55 mV que desencadena el disparo",
      "Despolarización=Fase en que entra sodio y el interior se vuelve positivo",
      "Repolarización=Fase en que sale potasio y el potencial vuelve a ser negativo",
      "Hiperpolarización posterior=Descenso breve bajo el reposo porque los canales de K⁺ tardan en cerrarse",
      "Canales de Na⁺ voltaje-dependientes=Se abren al llegar al umbral y después se inactivan",
      "Hodgkin y Huxley=Explicaron el mecanismo del disparo neuronal en 1952",
      "Pico=Valor máximo de unos +30 a +40 mV"
    ],
    g: [
      "Durante la despolarización, el interior alcanza un pico de unos ___.|+30 a +40 mV|+60 a +70 mV|−55 a −60 mV",
      "En la repolarización, los canales de sodio se ___ y se abren los de potasio.|inactivan|activan|hiperpolarizan",
      "Los canales de potasio dependientes de voltaje son más ___ que los de sodio.|lentos|rápidos|precoces",
      "Hodgkin y Huxley explicaron el mecanismo del potencial de acción en ___.|1952|1963|1999",
      "Un potencial de acción dura alrededor de ___.|1–2 ms|10–20 ms|100 ms"
    ],
    tf: [
      "Durante un potencial de acción cambian mucho las concentraciones iónicas a ambos lados de la membrana.|F|Solo se mueve una fracción mínima de iones. Las concentraciones apenas cambian.",
      "La hiperpolarización posterior se debe a que los canales de potasio tardan en cerrarse.|V",
      "La repolarización se produce porque la bomba de sodio-potasio expulsa rápidamente el sodio que ha entrado.|F|Se debe a la inactivación de los canales de Na⁺ y a la salida de K⁺. La bomba actúa a largo plazo.",
      "Hodgkin y Huxley recibieron el Nobel en 1963 por explicar el mecanismo del potencial de acción.|V"
    ],
    q: [
      "¿Qué ocurre en la fase de repolarización?|Se inactivan los canales de Na⁺ y sale K⁺|Entra cloruro y el interior se vuelve negativo|La bomba expulsa el Na⁺ que ha entrado|Los canales de sodio se inactivan y los de potasio, más lentos, se abren: sale K⁺.",
      "Una toxina bloquea los canales de sodio dependientes de voltaje de un axón. ¿Qué fase del potencial de acción se impide?|La despolarización|La hiperpolarización posterior|La repolarización|Sin entrada de Na⁺ no hay despolarización y, por tanto, no hay potencial de acción.",
      "¿Por qué el potencial baja por debajo del reposo al final del potencial de acción?|Los canales de K⁺ tardan en cerrarse|Los canales de Na⁺ vuelven a abrirse|Entra cloruro en exceso|El potasio sigue saliendo un momento: es la hiperpolarización posterior.",
      "¿Qué repone los gradientes iónicos a largo plazo tras muchos potenciales de acción?|La bomba de sodio-potasio|Los canales de potasio|Los canales de sodio|Cada potencial mueve muy pocos iones, y la bomba de sodio-potasio repone los gradientes."
    ],
    inc: [
      "Sobre las fases del potencial de acción, ¿cuál es INCORRECTA?|El pico alcanza el equilibrio del sodio|Comienza al llegar a unos −55 mV|La repolarización depende de la salida de K⁺|El pico ronda +30 a +40 mV, sin llegar al equilibrio del Na⁺ (≈ +60 mV)."
    ],
    seq: [
      "Fases del potencial de acción|Llegada al umbral>Despolarización>Repolarización>Hiperpolarización posterior>Vuelta al reposo"
    ],
    cls: [] },

  { t: "Ley del todo o nada y períodos refractarios",
    tip: "Si se alcanza el umbral, el potencial de acción se produce completo y con la misma amplitud; si no, no se produce. Por eso la intensidad se codifica por la frecuencia de disparo y por el número de neuronas activadas. En el período refractario absoluto ningún estímulo genera otro potencial (canales de Na⁺ inactivados); en el relativo hace falta un estímulo más intenso.",
    v: [
      "Ley del todo o nada=El disparo se produce completo o no se produce",
      "Período refractario absoluto=Intervalo en que ningún estímulo genera otro potencial de acción",
      "Período refractario relativo=Intervalo en que hace falta un estímulo más intenso de lo normal",
      "Código de frecuencia=Expresión de la intensidad mediante los disparos por segundo",
      "Reclutamiento=Activación de más neuronas para señalar un estímulo más intenso",
      "Inactivación de canales de Na⁺=Causa del período refractario absoluto",
      "Conducción unidireccional=Avance en un solo sentido gracias a los períodos refractarios",
      "Frecuencia máxima de disparo=Tope de potenciales por segundo que fijan los períodos refractarios"
    ],
    g: [
      "El período refractario absoluto se debe a que los canales de sodio están ___.|inactivados|abiertos|recuperados",
      "La intensidad de un estímulo se codifica por la ___ de los potenciales de acción.|frecuencia|amplitud|duración",
      "En el período refractario relativo, la membrana está ___.|hiperpolarizada|despolarizada|en reposo",
      "Gracias a los períodos refractarios, el potencial de acción avanza de forma ___.|unidireccional|bidireccional|aleatoria",
      "Si un estímulo no alcanza el umbral, el potencial de acción ___.|no se produce|es más pequeño|se retrasa"
    ],
    tf: [
      "Un estímulo más intenso produce potenciales de acción de mayor amplitud.|F|La amplitud es siempre la misma (todo o nada). La intensidad se codifica por frecuencia y número de neuronas.",
      "Durante el período refractario relativo puede generarse un potencial de acción con un estímulo más intenso de lo normal.|V",
      "Un estímulo muy intenso puede generar un potencial de acción durante el período refractario absoluto.|F|En el absoluto ningún estímulo lo consigue, por intenso que sea: los canales de Na⁺ están inactivados.",
      "Los períodos refractarios limitan la frecuencia máxima de disparo de una neurona.|V"
    ],
    q: [
      "Al apretar con más fuerza un objeto, ¿cómo cambian las señales de los receptores del tacto?|Más disparos por segundo y más neuronas|Potenciales de acción de mayor amplitud|Potenciales de acción más duraderos|La amplitud no varía (todo o nada). La intensidad se codifica por frecuencia y número de neuronas.",
      "¿Por qué la zona del axón que acaba de disparar no puede volver a excitarse de inmediato?|Sus canales de Na⁺ están inactivados|Se ha quedado sin sodio extracelular|La bomba bloquea sus canales de K⁺|Es el período refractario absoluto, que además hace que el impulso avance en un solo sentido.",
      "¿Qué explica el período refractario relativo?|Membrana hiperpolarizada y Na⁺ sin recuperar|Todos los canales de Na⁺ inactivados|Canales de cloruro y de calcio abiertos|La membrana está hiperpolarizada y algunos canales de sodio aún no se han recuperado.",
      "¿Qué se mantiene constante en todos los potenciales de acción de una neurona?|La amplitud|La frecuencia|El número de neuronas activas|Por la ley del todo o nada, la amplitud es siempre la misma. Lo que varía es la frecuencia."
    ],
    inc: [
      "Sobre los períodos refractarios, ¿cuál es INCORRECTA?|En el relativo es imposible disparar|En el absoluto los canales de Na⁺ están inactivados|Hacen que el impulso avance en un solo sentido|En el relativo sí puede generarse un potencial de acción, pero hace falta un estímulo más intenso."
    ],
    seq: [],
    cls: [
      "Período refractario absoluto o relativo|Absoluto: Canales de Na⁺ inactivados; Ningún estímulo basta; Inmediatamente tras el disparo|Relativo: Membrana hiperpolarizada; Hace falta un estímulo más intenso; Algunos canales de Na⁺ sin recuperar"
    ] },

  { t: "Conducción continua y saltatoria",
    tip: "El potencial de acción se propaga porque la despolarización de una zona lleva a la vecina hasta el umbral. En los axones sin mielina la conducción es continua y lenta; en los mielinizados es saltatoria: la corriente viaja por dentro hasta el siguiente nodo de Ranvier, donde se concentran los canales de Na⁺ y el potencial se regenera. Es más rápida y gasta menos energía. En la esclerosis múltiple, la pérdida de mielina central ralentiza o bloquea la conducción.",
    v: [
      "Conducción continua=Regeneración punto a punto en axones sin mielina",
      "Conducción saltatoria=Propagación de nodo de Ranvier en nodo de Ranvier",
      "Nodo de Ranvier=Zona sin vaina aislante donde se concentran los canales de Na⁺",
      "Mielina=Aislante que hace que la corriente viaje por dentro hasta el nodo",
      "Esclerosis múltiple=Pérdida de mielina central que ralentiza o bloquea la conducción",
      "Propagación=Avance porque cada zona despolarizada lleva a la vecina al umbral",
      "Ahorro energético=Ventaja de la conducción saltatoria frente a la continua",
      "Axón amielínico=Fibra sin vaina aislante, de conducción lenta y continua"
    ],
    g: [
      "En los axones sin mielina, la conducción es ___.|continua|saltatoria|bidireccional",
      "En la conducción saltatoria, el potencial se regenera en los ___.|nodos de Ranvier|segmentos mielinizados|botones terminales",
      "La conducción saltatoria es más rápida y gasta ___ energía.|menos|más|la misma",
      "En la esclerosis múltiple se pierde la mielina del sistema nervioso ___.|central|periférico|entérico",
      "Bajo la vaina de mielina, la corriente viaja rápidamente por ___ del axón.|el interior|el exterior|la superficie"
    ],
    tf: [
      "En la conducción saltatoria, el potencial de acción se regenera en cada segmento cubierto de mielina.|F|Se regenera solo en los nodos de Ranvier. Bajo la mielina, la corriente viaja por dentro.",
      "La conducción continua es más lenta que la saltatoria.|V",
      "Los síntomas de la esclerosis múltiple varían según las zonas del SNC que pierden mielina.|V",
      "La conducción saltatoria es más rápida, pero a cambio consume más energía que la continua.|F|Es más rápida y, además, gasta menos energía."
    ],
    q: [
      "Una paciente con esclerosis múltiple sufre alteraciones visuales y hormigueos. ¿Cuál es el mecanismo de sus síntomas?|Conducción frenada por pérdida de mielina|Destrucción de las células de Schwann|Exceso de canales de Na⁺ en los nodos|La desmielinización del SNC ralentiza o bloquea la conducción. Las células de Schwann son del SNP.",
      "¿Qué función cumplen los canales de sodio concentrados en los nodos de Ranvier?|Regenerar el potencial de acción|Retirar el potasio extracelular|Liberar el neurotransmisor|En la conducción saltatoria, el potencial de acción se regenera en cada nodo gracias a esos canales.",
      "¿Qué mecanismo explica la propagación del potencial de acción?|La despolarización lleva la zona vecina al umbral|La bomba arrastra el sodio a lo largo del axón|El potasio fluye por dentro hasta el terminal|La despolarización de una zona lleva a la zona vecina hasta el umbral.",
      "¿Qué propiedad del impulso NO se debe a la mielina?|Su avance en un solo sentido|Su mayor velocidad|Su menor gasto energético|La mielina aporta velocidad y ahorro de energía. El sentido único depende de los períodos refractarios."
    ],
    inc: [
      "Sobre la conducción del impulso, ¿cuál es INCORRECTA?|La saltatoria ocurre en axones sin mielina|La continua es propia de axones sin mielina|La saltatoria es más rápida que la continua|La conducción saltatoria es propia de los axones mielinizados."
    ],
    seq: [],
    cls: [
      "Conducción continua o saltatoria|Continua: Axones sin mielina; Regeneración punto a punto; Lenta|Saltatoria: Axones mielinizados; Salto de nodo en nodo; Rápida; Menor gasto energético"
    ] },

  { t: "Velocidad de conducción",
    tip: "La velocidad aumenta con el diámetro del axón y con la mielinización. Las fibras Aα (gruesas, mielinizadas) conducen a 70–120 m/s; las Aδ (mielina fina), a 5–30 m/s, y llevan dolor agudo y temperatura; las C (finas, sin mielina), a 0,5–2 m/s, y llevan dolor sordo. Por eso un golpe produce primero un dolor agudo y localizado y luego uno sordo y difuso.",
    v: [
      "Fibras Aα=Gruesas y mielinizadas, de 70–120 m/s, como las motoneuronas",
      "Fibras Aδ=Con mielina fina, 5–30 m/s, dolor agudo y temperatura",
      "Fibras C=Finas y sin mielina, 0,5–2 m/s, dolor sordo y lento",
      "Diámetro del axón=Grosor que, al aumentar, acelera la conducción",
      "Mielinización=Recubrimiento lipídico que aísla el axón y acelera la conducción",
      "Primer dolor=Sensación aguda y localizada tras un golpe, transmitida por fibras Aδ",
      "Segundo dolor=Sensación sorda y difusa que llega después, por fibras C",
      "Velocidad de conducción=Rapidez con que el impulso recorre el axón"
    ],
    g: [
      "Las fibras C conducen a unos ___.|0,5–2 m/s|5–30 m/s|70–120 m/s",
      "Las fibras ___ transmiten el dolor agudo y la temperatura.|Aδ|Aα|C",
      "La velocidad de conducción aumenta con el diámetro del axón y con la ___.|mielinización|ramificación|longitud",
      "Las motoneuronas y la información de los músculos utilizan fibras ___.|Aα|Aδ|C",
      "Las fibras Aδ están recubiertas de una capa ___ de mielina.|fina|gruesa|doble"
    ],
    tf: [
      "A igualdad de mielinización, un axón más grueso conduce más deprisa que uno fino.|V",
      "Las fibras Aδ son las más rápidas porque transmiten el dolor agudo.|F|Las más rápidas son las Aα (70–120 m/s). Las Aδ conducen a 5–30 m/s.",
      "Las fibras C son finas y carecen de mielina.|V",
      "Tras un golpe, el dolor sordo llega antes que el agudo porque viaja por fibras C.|F|Llega después: las fibras C son las más lentas (0,5–2 m/s). Primero se nota el dolor agudo (Aδ)."
    ],
    q: [
      "Te golpeas un dedo del pie: primero notas un dolor agudo y localizado y, poco después, uno sordo y difuso. ¿Qué fibras explican el segundo dolor?|Las fibras C|Las fibras Aδ|Las fibras Aα|Las fibras C, finas y sin mielina (0,5–2 m/s), conducen el dolor sordo y llegan más tarde.",
      "¿Qué combinación de rasgos da la conducción más rápida?|Axón grueso y mielinizado|Axón fino y mielinizado|Axón grueso sin mielina|La velocidad aumenta con el diámetro y con la mielinización: las fibras Aα reúnen ambos.",
      "¿Qué fibras conducen a 5–30 m/s?|Aδ|Aα|C|Son las Aδ, con mielina fina. Las Aα van a 70–120 m/s y las C, a 0,5–2 m/s.",
      "¿Qué información transmiten típicamente las fibras Aα?|Motora y muscular|Dolor sordo y lento|Dolor agudo y temperatura|Son fibras gruesas y mielinizadas de las motoneuronas y de la información de los músculos."
    ],
    inc: [
      "Sobre la velocidad de conducción, ¿cuál es INCORRECTA?|Las fibras C son las más rápidas|Las fibras Aα alcanzan 70–120 m/s|La mielina aumenta la velocidad|Las fibras C, finas y sin mielina, son las más lentas (0,5–2 m/s)."
    ],
    seq: [
      "Fibras de la más rápida a la más lenta|Aα>Aδ>C"
    ],
    cls: [] }
] }
);

// SAIMAP Psicología · Bases Biológicas · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "La sinapsis", cap: 4, pir: "alta", mods: [
  { t: "Sinapsis eléctricas y químicas",
    tip: "En la sinapsis eléctrica, uniones en hendidura formadas por conexinas comunican directamente los citoplasmas: la transmisión es casi instantánea, suele ser bidireccional y es poco modulable. En la química, un neurotransmisor cruza una hendidura de 20–40 nm con un retraso de alrededor de 1 ms, en un solo sentido y con gran capacidad de modulación, base de la plasticidad.",
    v: [
      "Sinapsis=Zona donde una neurona transmite información a otra célula",
      "Unión en hendidura=Canal que une directamente el citoplasma de dos células contiguas",
      "Conexinas=Proteínas que forman los canales de las sinapsis eléctricas",
      "Hendidura sináptica=Espacio de unos 20–40 nm entre las dos células de una sinapsis química",
      "Retraso sináptico=Demora de alrededor de 1 ms o menos propia de la transmisión química",
      "Sinapsis axodendrítica=Contacto de un axón con una dendrita, a menudo sobre una espina; la más frecuente",
      "Sinapsis axosomática=Contacto de un axón con el cuerpo celular; suele ser inhibitorio",
      "Sinapsis axoaxónica=Contacto sobre otro axón que modula la liberación de este"
    ],
    g: [
      "Los canales de las uniones en hendidura están formados por proteínas llamadas ___.|conexinas|integrinas|sinapsinas",
      "En la sinapsis química, la hendidura sináptica mide aproximadamente ___.|20–40 nm|2–4 nm|200–400 nm",
      "A diferencia de la química, la transmisión en una sinapsis eléctrica suele ser ___.|bidireccional|unidireccional|retrógrada",
      "Las sinapsis eléctricas resultan útiles sobre todo para ___ grupos de neuronas.|sincronizar|inhibir|modular",
      "Las sinapsis ___ suelen ser inhibitorias.|axosomáticas|axodendríticas|axoaxónicas"
    ],
    tf: [
      "Las sinapsis químicas son más modulables que las eléctricas y constituyen la base de la plasticidad.|V",
      "La sinapsis eléctrica tiene un retraso de alrededor de 1 ms por el paso de iones a través de las conexinas.|F|Ese retraso es propio de la sinapsis química; la eléctrica es prácticamente instantánea.",
      "La inmensa mayoría de las sinapsis del encéfalo son químicas.|V",
      "Las sinapsis axoaxónicas contactan con el soma de la neurona postsináptica y suelen ser excitadoras.|F|Las axoaxónicas contactan con otro axón y modulan su liberación; las que actúan sobre el soma son las axosomáticas."
    ],
    q: [
      "¿Qué rasgo caracteriza a la sinapsis química frente a la eléctrica?|Su alta capacidad de modulación|Su transmisión casi instantánea|Su conducción en ambos sentidos|La química es muy modulable (base de la plasticidad); la eléctrica es rápida, suele ser bidireccional y poco flexible.",
      "Un investigador quiere que un grupo de neuronas dispare de forma sincrónica y casi sin retraso. ¿Qué tipo de contacto es más adecuado?|Uniones en hendidura entre ellas|Sinapsis axoaxónicas moduladoras|Sinapsis químicas axodendríticas|Las uniones en hendidura permiten el paso directo de corriente, sin retraso sináptico, y sirven para sincronizar grupos de neuronas.",
      "Una sinapsis axoaxónica se caracteriza por…|regular la liberación de otro axón|ser el tipo más frecuente del encéfalo|contactar sobre espinas dendríticas|Se sitúa sobre otro axón y modula cuánto neurotransmisor libera; la más frecuente es la axodendrítica.",
      "¿Qué ocurre en una sinapsis eléctrica?|Pasa corriente iónica directamente|Se liberan vesículas por el calcio|Un transmisor cruza la hendidura|En la eléctrica no interviene un neurotransmisor: la corriente pasa por canales de conexinas de citoplasma a citoplasma."
    ],
    inc: [
      "Sobre las sinapsis eléctricas, ¿cuál es INCORRECTA?|Son unidireccionales y muy modulables|Unen directamente los citoplasmas|Su transmisión es casi instantánea|Suelen ser bidireccionales y poco flexibles; la unidireccionalidad y la alta modulación son propias de la química."
    ],
    seq: [],
    cls: [
      "Sinapsis eléctrica o química|Eléctrica: conexinas; paso directo de corriente; normalmente bidireccional; escasa flexibilidad|Química: hendidura de 20–40 nm; retraso sináptico; unidireccional; base de la plasticidad"
    ] },

  { t: "Pasos de la transmisión química",
    tip: "La transmisión química sigue una secuencia: síntesis, almacenamiento en vesículas, llegada del potencial de acción, entrada de Ca²⁺ por canales dependientes de voltaje, exocitosis mediada por proteínas SNARE, unión a receptores, respuesta postsináptica, inactivación y reciclaje de las vesículas. El calcio desencadena la liberación; la toxina botulínica la impide destruyendo las SNARE.",
    v: [
      "Vesícula sináptica=Saco membranoso en el que se almacena el neurotransmisor en el terminal",
      "Exocitosis=Fusión de la vesícula con la membrana y liberación de su contenido a la hendidura",
      "Proteínas SNARE=Proteínas que permiten la fusión de las vesículas con la membrana presináptica",
      "Canal de calcio=Se abre por voltaje al llegar el potencial de acción al terminal",
      "Botón terminal=Extremo del axón al que llega el potencial de acción y desde el que se libera el transmisor",
      "Toxina botulínica=Destruye proteínas SNARE e impide la liberación de acetilcolina, causando parálisis",
      "Reciclaje vesicular=Recuperación de la membrana de las vesículas tras la exocitosis",
      "Respuesta postsináptica=PEPS o PIPS que genera la unión del transmisor a sus receptores"
    ],
    g: [
      "La liberación del neurotransmisor la desencadena la entrada de ___ en el terminal.|calcio|sodio|potasio",
      "Los canales de calcio del botón terminal son dependientes de ___.|voltaje|ligando|proteína G",
      "A diferencia de los transmisores clásicos, los péptidos se sintetizan en el ___.|soma|terminal|axón",
      "La toxina botulínica impide la liberación de ___.|acetilcolina|glutamato|dopamina",
      "Tras la exocitosis, la membrana de las vesículas se ___ para formar vesículas nuevas.|recicla|degrada|recapta"
    ],
    tf: [
      "La llegada del potencial de acción provoca la fusión de las vesículas sin necesidad de calcio.|F|El potencial de acción abre canales de calcio dependientes de voltaje; es la entrada de Ca²⁺ la que desencadena la exocitosis.",
      "Los neurotransmisores peptídicos se sintetizan en el soma y no en el terminal.|V",
      "La toxina botulínica produce parálisis porque bloquea los receptores nicotínicos de acetilcolina.|F|Actúa en el terminal presináptico: destruye proteínas SNARE e impide que se libere la acetilcolina.",
      "En la secuencia de la transmisión química, la inactivación del neurotransmisor sigue a la respuesta postsináptica.|V"
    ],
    q: [
      "Un paciente recibe una dosis mínima de toxina botulínica en un músculo. ¿Qué paso de la transmisión se altera?|La exocitosis de la acetilcolina|La unión de la ACh al receptor|La degradación de la acetilcolina|Destruye proteínas SNARE: las vesículas no pueden fusionarse con la membrana y no se libera acetilcolina.",
      "Si se bloquean experimentalmente los canales de calcio dependientes de voltaje del terminal, ¿qué cabe esperar?|Menor liberación del transmisor|Ausencia de potencial de acción|Bloqueo de la recaptación|El potencial de acción llega igual, pero sin entrada de Ca²⁺ no se desencadena la exocitosis.",
      "¿Qué función cumplen las proteínas SNARE?|Fusionar vesículas con la membrana|Abrir los canales de calcio|Devolver el transmisor al terminal|Intervienen en la fusión de las vesículas con la membrana durante la exocitosis.",
      "¿Qué paso precede inmediatamente a la exocitosis?|La entrada de Ca²⁺ en el terminal|La unión al receptor postsináptico|El almacenamiento en vesículas|Tras la llegada del potencial de acción se abren canales de calcio; la entrada de Ca²⁺ desencadena entonces la exocitosis."
    ],
    inc: [
      "Sobre la liberación del neurotransmisor, ¿cuál es INCORRECTA?|La desencadena la entrada de sodio|Requiere la fusión de vesículas|Intervienen las proteínas SNARE|El ion que desencadena la exocitosis es el calcio, que entra por canales dependientes de voltaje."
    ],
    seq: [
      "Pasos de la transmisión química|Síntesis del neurotransmisor>Almacenamiento en vesículas>Llegada del potencial de acción>Entrada de Ca²⁺>Exocitosis>Unión a los receptores>Respuesta postsináptica>Inactivación>Reciclaje de las vesículas"
    ],
    cls: [] },

  { t: "Receptores ionotrópicos y metabotrópicos",
    tip: "El efecto de un neurotransmisor depende del receptor, no de la molécula. Los ionotrópicos son canales iónicos: efecto rápido y breve. Los metabotrópicos actúan mediante proteína G y segundos mensajeros (AMPc, IP3, DAG): efecto más lento, duradero y amplio, que puede llegar a la expresión génica. Los autorreceptores suelen frenar la liberación de la propia neurona.",
    v: [
      "Receptor ionotrópico=Receptor que es a la vez un canal iónico; efecto rápido y breve",
      "Receptor metabotrópico=Receptor acoplado a proteína G; efecto lento, duradero y amplio",
      "Proteína G=Intermediario que activa cadenas de segundos mensajeros tras la unión del transmisor",
      "Segundo mensajero=Molécula intracelular, como el IP3 o el DAG, que propaga la señal del receptor",
      "AMP cíclico=Mensajero intracelular que puede activar CREB y modificar la expresión de genes",
      "Autorreceptor=Receptor de la propia neurona que libera el transmisor; suele frenar su liberación",
      "Heterorreceptor=Receptor sensible a un transmisor distinto del que libera esa neurona",
      "Receptor 5-HT3=Receptor de serotonina que, a diferencia del resto, es ionotrópico"
    ],
    g: [
      "De los receptores de serotonina, solo el ___ es ionotrópico.|5-HT3|5-HT1|5-HT2",
      "El receptor GABA-A es un canal de ___.|cloruro|calcio|sodio",
      "Los receptores metabotrópicos actúan a través de una ___.|proteína G|proteína SNARE|conexina",
      "Los ___ suelen frenar la liberación o la síntesis del propio neurotransmisor.|autorreceptores|heterorreceptores|receptores AMPA",
      "Todos los receptores de ___ son metabotrópicos.|dopamina|glutamato|acetilcolina"
    ],
    tf: [
      "Un mismo neurotransmisor puede excitar o inhibir según el receptor al que se una.|V",
      "El receptor de glicina es metabotrópico y actúa mediante proteína G.|F|El receptor de glicina es ionotrópico: un canal de cloruro.",
      "Los receptores metabotrópicos pueden llegar a modificar la expresión de genes.|V",
      "Los receptores D2 de dopamina son ionotrópicos, a diferencia de los D1.|F|Todos los receptores dopaminérgicos, de D1 a D5, son metabotrópicos."
    ],
    q: [
      "Un fármaco bloquea selectivamente los receptores muscarínicos. ¿Qué respuesta colinérgica queda afectada?|La mediada por proteína G|La del canal iónico rápido|La de la unión neuromuscular|Los muscarínicos son metabotrópicos; los nicotínicos, ionotrópicos, son los de la unión neuromuscular.",
      "¿Qué par está formado solo por receptores ionotrópicos?|AMPA y 5-HT3|NMDA y mGluR|GABA-A y GABA-B|mGluR y GABA-B son metabotrópicos; AMPA y 5-HT3 son canales iónicos.",
      "Un autorreceptor presináptico se activa por el propio transmisor liberado. ¿Qué efecto típico tendrá?|Reducir la liberación posterior|Aumentar la síntesis del transmisor|Despolarizar la célula postsináptica|Los autorreceptores suelen ejercer retroalimentación negativa: frenan la liberación o la síntesis.",
      "Comparados con los ionotrópicos, los receptores metabotrópicos producen efectos…|más lentos y duraderos|más rápidos y breves|exclusivamente inhibidores|Actúan por segundos mensajeros: tardan más, duran más y pueden tener efectos amplios, incluida la expresión génica."
    ],
    inc: [
      "Sobre los receptores de la noradrenalina, ¿cuál es INCORRECTA?|Sus receptores α son ionotrópicos|Sus receptores β son metabotrópicos|Todos actúan mediante proteína G|Todos los receptores adrenérgicos, α y β, son metabotrópicos; la noradrenalina no tiene receptores ionotrópicos."
    ],
    seq: [],
    cls: [
      "Ionotrópico o metabotrópico|Ionotrópicos: AMPA; NMDA; GABA-A; nicotínico; 5-HT3; receptor de glicina|Metabotrópicos: mGluR; GABA-B; muscarínico; D1 a D5; adrenérgicos α y β"
    ] },

  { t: "Inactivación y cotransmisión",
    tip: "La señal termina cuando el neurotransmisor se retira de la hendidura: por recaptación (monoaminas, glutamato, GABA), degradación enzimática (acetilcolina, por la acetilcolinesterasa) o difusión. Muchas neuronas liberan más de una sustancia (cotransmisión); lo que se mantiene, en la formulación de Eccles del principio de Dale, es que liberan la misma combinación en todos sus terminales.",
    v: [
      "Recaptación=Retorno del transmisor al terminal o a los astrocitos mediante transportadores",
      "Degradación enzimática=Destrucción del neurotransmisor por una enzima en la hendidura",
      "Acetilcolinesterasa=Enzima responsable de inactivar la acetilcolina",
      "Difusión=Alejamiento del neurotransmisor de la sinapsis",
      "Cotransmisión=Liberación de más de una sustancia por una misma neurona",
      "Principio de Dale (Eccles)=Una neurona libera las mismas sustancias en todos sus terminales",
      "Transmisión de volumen=Acción a distancia de un neuromodulador sobre muchas neuronas a la vez",
      "ISRS=Antidepresivos que bloquean el transportador de recaptación de serotonina"
    ],
    g: [
      "La acetilcolina se inactiva principalmente por la acción de la ___.|acetilcolinesterasa|monoamino oxidasa|colina acetiltransferasa",
      "La cocaína actúa bloqueando los ___ de las monoaminas.|transportadores|receptores|autorreceptores",
      "En algunas neuronas que proyectan al núcleo accumbens se coliberan dopamina y ___.|glutamato|serotonina|acetilcolina",
      "La formulación de ___ del principio de Dale es compatible con la cotransmisión.|Eccles|Cajal|Golgi",
      "Algunos neuromoduladores, como la serotonina, actúan a distancia mediante la transmisión de ___.|volumen|contacto|hendidura"
    ],
    tf: [
      "La recaptación es el principal mecanismo de inactivación del glutamato y del GABA.|V",
      "Una neurona que libera dopamina y glutamato incumple el principio de Dale tal como lo formuló Eccles.|F|Eccles afirma que una neurona libera las mismas sustancias en todos sus terminales, lo que es compatible con la cotransmisión.",
      "Los transportadores pueden devolver el neurotransmisor al terminal presináptico o a los astrocitos.|V",
      "La acetilcolina se retira de la hendidura sobre todo por recaptación, como las monoaminas.|F|La acetilcolina se inactiva sobre todo por degradación enzimática, mediante la acetilcolinesterasa."
    ],
    q: [
      "Una paciente empieza a tomar un ISRS. ¿Cuál es el efecto sináptico inmediato del fármaco?|Más serotonina en la hendidura|Más síntesis de serotonina|Menos degradación por la MAO|Bloquea el transportador de recaptación, de modo que la serotonina permanece más tiempo en la hendidura.",
      "Un inhibidor de la acetilcolinesterasa produce, en las sinapsis colinérgicas,…|más ACh disponible en la hendidura|menor liberación de acetilcolina|bloqueo de los receptores nicotínicos|Al impedir su degradación, la acetilcolina permanece y actúa más tiempo sobre sus receptores.",
      "¿Qué afirmación recoge mejor el estado actual del principio de Dale?|Una neurona libera igual mezcla en todos sus terminales|Una neurona libera un único neurotransmisor clásico|Cada terminal de una neurona libera una sustancia distinta|La versión «una neurona, un neurotransmisor» es incorrecta; la de Eccles (mismas sustancias en todos los terminales) se mantiene.",
      "La transmisión de volumen se caracteriza por…|afectar a muchas neuronas a la vez|requerir uniones en hendidura|limitarse a una única sinapsis concreta|Neuromoduladores como la dopamina o la serotonina difunden a distancia y actúan sobre muchas neuronas a la vez."
    ],
    inc: [
      "Sobre los mecanismos de inactivación, ¿cuál es INCORRECTA?|La MAO degrada la acetilcolina|La cocaína bloquea transportadores|Los ISRS bloquean la recaptación|La acetilcolina la degrada la acetilcolinesterasa; la MAO degrada monoaminas."
    ],
    seq: [],
    cls: [
      "Mecanismo principal de inactivación|Recaptación: dopamina; noradrenalina; serotonina; glutamato; GABA|Degradación enzimática: acetilcolina"
    ] }
] },

{ n: 14, t: "Neurotransmisores y sistemas de neurotransmisión", cap: 4, pir: "alta", mods: [
  { t: "Aminoácidos y acetilcolina",
    tip: "El glutamato es el principal excitador del sistema nervioso central: los receptores AMPA median la excitación rápida y los NMDA, bloqueados por magnesio en reposo, son clave en la potenciación a largo plazo. El GABA es el principal inhibidor del encéfalo y la glicina, de la médula espinal. La acetilcolina actúa en la unión neuromuscular y, desde el núcleo basal de Meynert, en la atención y la memoria.",
    v: [
      "Glutamato=Principal neurotransmisor excitador del sistema nervioso central",
      "GABA=Principal neurotransmisor inhibidor del encéfalo; se sintetiza a partir del glutamato",
      "Glicina=Principal neurotransmisor inhibidor de la médula espinal y del tronco encefálico",
      "Receptor NMDA=Receptor de glutamato bloqueado por magnesio en reposo que deja pasar calcio",
      "Excitotoxicidad=Daño neuronal por exceso de glutamato, como el que ocurre en el ictus",
      "Estricnina=Bloquea los receptores de glicina y causa convulsiones",
      "Núcleo basal de Meynert=Origen de proyecciones colinérgicas a la corteza; degenera en el Alzheimer",
      "Benzodiacepinas=Fármacos que potencian la inhibición actuando sobre receptores GABA-A"
    ],
    g: [
      "En reposo, el canal del receptor NMDA está bloqueado por un ion de ___.|magnesio|calcio|cloruro",
      "Los receptores ___ median la excitación glutamatérgica rápida.|AMPA|mGluR|GABA-B",
      "La estricnina provoca convulsiones porque bloquea los receptores de ___.|glicina|dopamina|glutamato",
      "El GABA se sintetiza a partir del ___.|glutamato|triptófano|aspartato",
      "La acetilcolina es el neurotransmisor de las sinapsis posganglionares ___.|parasimpáticas|simpáticas|sensitivas"
    ],
    tf: [
      "El receptor NMDA se abre con la sola unión del glutamato, aunque la membrana esté en reposo.|F|Necesita además que la membrana esté despolarizada, para retirar el magnesio que bloquea el canal en reposo.",
      "Las benzodiacepinas, los barbitúricos y el alcohol potencian la inhibición mediada por receptores GABA-A.|V",
      "La glicina es el principal neurotransmisor inhibidor de la corteza cerebral.|F|Lo es de la médula espinal y del tronco encefálico; en el encéfalo, el principal inhibidor es el GABA.",
      "Los inhibidores de la acetilcolinesterasa son un tratamiento sintomático, no curativo, del Alzheimer.|V"
    ],
    q: [
      "Tras un ictus, el tejido que rodea la lesión sufre daño adicional por exceso de un neurotransmisor. ¿Cuál?|Glutamato|Dopamina|Acetilcolina|Es la excitotoxicidad: en exceso, el glutamato resulta tóxico para las neuronas.",
      "¿Qué dos condiciones necesita el receptor NMDA para abrirse?|Glutamato y membrana despolarizada|Glutamato y entrada previa de calcio|Glicina y membrana hiperpolarizada|Sin despolarización previa, el magnesio bloquea el canal aunque el glutamato se haya unido.",
      "Una persona toma una benzodiacepina. ¿Cuál es el mecanismo de su efecto ansiolítico y sedante?|Potencia la entrada de cloruro por GABA-A|Bloquea los receptores NMDA del glutamato|Activa los receptores GABA-B metabotrópicos|Actúa sobre el receptor GABA-A, un canal de cloruro, y potencia la inhibición de la neurona.",
      "Las neuronas colinérgicas que proyectan a la corteza y degeneran en el Alzheimer se encuentran en…|el núcleo basal de Meynert|el núcleo tuberomamilar hipotalámico|el locus coeruleus de la protuberancia|El núcleo basal de Meynert aporta acetilcolina a la corteza; su pérdida justifica los inhibidores de la acetilcolinesterasa."
    ],
    inc: [
      "Sobre la acetilcolina, ¿cuál es INCORRECTA?|Usa receptores muscarínicos en la placa motora|Actúa en las preganglionares autónomas|La sintetiza la colina acetiltransferasa|En la unión neuromuscular, los receptores de acetilcolina son nicotínicos, es decir, ionotrópicos."
    ],
    seq: [],
    cls: [
      "Aminoácidos neurotransmisores|Excitador: glutamato; receptores AMPA; receptores NMDA|Inhibidor: GABA; glicina; receptores GABA-A"
    ] },

  { t: "Catecolaminas: síntesis y vías",
    tip: "Las catecolaminas se sintetizan a partir de la tirosina: la tirosina hidroxilasa (paso limitante) forma L-DOPA, la DOPA descarboxilasa forma dopamina, la dopamina beta-hidroxilasa forma noradrenalina y la PNMT, sobre todo en la médula suprarrenal, forma adrenalina. Hay cuatro vías dopaminérgicas (nigroestriatal, mesolímbica, mesocortical y tuberoinfundibular); la noradrenalina encefálica procede del locus coeruleus.",
    v: [
      "Tirosina hidroxilasa=Enzima del paso limitante: convierte tirosina en L-DOPA",
      "DOPA descarboxilasa=Enzima del segundo paso de la síntesis de catecolaminas",
      "Dopamina beta-hidroxilasa=Enzima del tercer paso: forma noradrenalina",
      "PNMT=Enzima que forma adrenalina, sobre todo en la médula suprarrenal",
      "MAO y COMT=Enzimas que degradan las monoaminas",
      "Vía nigroestriatal=Proyección de la sustancia negra al estriado; degenera en el Parkinson",
      "Vía mesocortical=Proyección del área tegmental ventral a la corteza prefrontal",
      "Locus coeruleus=Núcleo de la protuberancia, principal fuente de noradrenalina encefálica"
    ],
    g: [
      "El paso limitante de la síntesis de catecolaminas es la conversión de tirosina en ___.|L-DOPA|dopamina|noradrenalina",
      "La L-DOPA se usa en el Parkinson porque, a diferencia de la dopamina, atraviesa la ___.|barrera hematoencefálica|membrana postsináptica|hendidura sináptica",
      "La vía dopaminérgica ___ inhibe la secreción de prolactina.|tuberoinfundibular|nigroestriatal|mesocortical",
      "La vía mesolímbica va del área tegmental ventral al ___ y la amígdala.|núcleo accumbens|estriado dorsal|hipotálamo",
      "La conversión de noradrenalina en adrenalina ocurre sobre todo en la ___.|médula suprarrenal|corteza suprarrenal|sustancia negra"
    ],
    tf: [
      "La DOPA descarboxilasa cataliza el paso limitante de la síntesis de catecolaminas.|F|El paso limitante lo cataliza la tirosina hidroxilasa, que convierte la tirosina en L-DOPA.",
      "La noradrenalina se sintetiza a partir de la dopamina.|V",
      "La vía mesocortical nace en la sustancia negra y se relaciona sobre todo con el movimiento.|F|Nace en el área tegmental ventral, llega a la corteza prefrontal y participa en funciones ejecutivas.",
      "El locus coeruleus proyecta a casi todo el sistema nervioso central y regula la alerta y la respuesta al estrés.|V"
    ],
    q: [
      "Un paciente con Parkinson recibe L-DOPA en lugar de dopamina. ¿Por qué?|Solo la L-DOPA cruza la barrera hematoencefálica|La L-DOPA evita la degradación por la MAO y la COMT|La L-DOPA activa directamente los receptores D2|La dopamina no atraviesa la barrera hematoencefálica; la L-DOPA sí, y en el encéfalo se convierte en dopamina.",
      "Un fármaco bloquea la dopamina beta-hidroxilasa. ¿Qué cabe esperar?|Menos noradrenalina, no menos dopamina|Menos dopamina y menos noradrenalina|Menos L-DOPA disponible en el terminal|Esa enzima convierte dopamina en noradrenalina; los pasos previos (L-DOPA y dopamina) no se ven afectados.",
      "Una paciente que toma un fármaco que bloquea los receptores D2 presenta un aumento de prolactina. ¿Qué proyección explica este efecto?|Hipotálamo-hipófisis|ATV-accumbens|Sustancia negra-estriado|La vía tuberoinfundibular (hipotálamo-hipófisis) inhibe la prolactina; si se bloquea su acción, la prolactina aumenta.",
      "¿Qué núcleo es el principal origen de la noradrenalina del encéfalo?|Locus coeruleus|Núcleos del rafe|Sustancia negra|Está en la protuberancia y proyecta a casi todo el sistema nervioso central."
    ],
    inc: [
      "Sobre la síntesis de catecolaminas, ¿cuál es INCORRECTA?|La adrenalina precede a la noradrenalina|La tirosina es el aminoácido de partida|La dopamina precede a la noradrenalina|El orden es tirosina, L-DOPA, dopamina, noradrenalina y, por último, adrenalina."
    ],
    seq: [
      "Síntesis de las catecolaminas|Tirosina>L-DOPA>Dopamina>Noradrenalina>Adrenalina"
    ],
    cls: [
      "Origen de cada vía dopaminérgica|Sustancia negra: vía nigroestriatal|Área tegmental ventral: vía mesolímbica; vía mesocortical|Hipotálamo: vía tuberoinfundibular"
    ] },

  { t: "Serotonina, histamina, péptidos y otros mensajeros",
    tip: "La serotonina se sintetiza a partir del triptófano y procede de los núcleos del rafe; la histamina, del núcleo tuberomamilar, favorece la vigilia. Los neuropéptidos (opioides, sustancia P, oxitocina, neuropéptido Y) suelen actuar como neuromoduladores. La adenosina favorece el sueño y la cafeína bloquea sus receptores. El óxido nítrico y los endocannabinoides pueden actuar de forma retrógrada.",
    v: [
      "Triptófano hidroxilasa=Enzima del paso limitante en la síntesis de serotonina",
      "Núcleos del rafe=Origen de la serotonina del encéfalo, en el tronco encefálico",
      "Núcleo tuberomamilar=Núcleo hipotalámico de origen de la histamina; favorece la vigilia",
      "Opioides endógenos=Endorfinas, encefalinas y dinorfinas: analgesia y recompensa",
      "Sustancia P=Neuropéptido que interviene en la transmisión del dolor",
      "Adenosina=Purina que se acumula durante la vigilia y favorece el sueño",
      "Óxido nítrico=Gas que no se almacena en vesículas y puede actuar de forma retrógrada",
      "Anandamida=Endocannabinoide que reduce la liberación de transmisores en el terminal presináptico"
    ],
    g: [
      "La serotonina se sintetiza a partir del aminoácido ___.|triptófano|tirosina|glutamato",
      "La cafeína favorece la vigilia porque bloquea los receptores de ___.|adenosina|histamina|serotonina",
      "El THC del cannabis actúa sobre los receptores ___.|CB1|5-HT3|GABA-A",
      "El neuropéptido Y se relaciona sobre todo con el ___.|apetito|dolor|sueño",
      "Los endocannabinoides actúan de forma ___, de la neurona postsináptica a la presináptica.|retrógrada|anterógrada|recíproca"
    ],
    tf: [
      "El óxido nítrico se almacena en vesículas y se libera por exocitosis, como los transmisores clásicos.|F|Se produce cuando hace falta y atraviesa las membranas; no se almacena en vesículas.",
      "Los antihistamínicos clásicos causan somnolencia porque atraviesan la barrera hematoencefálica y bloquean la histamina, que favorece la vigilia.|V",
      "La mayoría de los receptores de serotonina son ionotrópicos.|F|Solo el 5-HT3 es ionotrópico; la mayoría de los receptores de serotonina son metabotrópicos.",
      "Los neuropéptidos a menudo se coliberan con un neurotransmisor clásico.|V"
    ],
    q: [
      "Un estudiante toma mucho café para no dormirse antes de un examen. ¿Sobre qué sistema actúa la cafeína?|Bloquea receptores de adenosina|Activa receptores de histamina|Inhibe la recaptación de serotonina|La adenosina se acumula durante la vigilia y favorece el sueño; la cafeína bloquea sus receptores.",
      "¿Qué tienen en común el óxido nítrico y los endocannabinoides?|Pueden actuar de forma retrógrada|Se almacenan en vesículas grandes|Son péptidos sintetizados en el soma|Ambos pueden actuar desde la neurona postsináptica sobre la presináptica.",
      "¿Dónde se encuentra el núcleo de origen de la histamina cerebral?|En el hipotálamo|En el tronco encefálico|En el prosencéfalo basal|El núcleo tuberomamilar es hipotalámico; la histamina que libera favorece la vigilia.",
      "¿Cuál de estos neuropéptidos interviene en la analgesia endógena?|La dinorfina|La sustancia P|El neuropéptido Y|Las dinorfinas son opioides endógenos; la sustancia P participa en la transmisión del dolor."
    ],
    inc: [
      "Sobre la serotonina, ¿cuál es INCORRECTA?|Su paso limitante es la tirosina hidroxilasa|Procede de los núcleos del rafe|Interviene en el sueño y el apetito|El paso limitante de la serotonina lo realiza la triptófano hidroxilasa; la tirosina hidroxilasa es de las catecolaminas."
    ],
    seq: [],
    cls: [
      "Tipo de mensajero|Neuropéptidos: endorfinas; sustancia P; oxitocina; neuropéptido Y|Purinas: ATP; adenosina|Mensajeros retrógrados: óxido nítrico; anandamida"
    ] },

  { t: "Dopamina y serotonina sin simplificaciones",
    tip: "La dopamina mesolímbica se relaciona más con el «querer» (saliencia de incentivo) y con el error de predicción de la recompensa que con el «gustar»; el placer depende de puntos calientes hedónicos con opioides y endocannabinoides. La depresión no se explica por «falta de serotonina»: la revisión de Moncrieff et al. (2022), con críticas metodológicas, no halló evidencia consistente, y el consenso es que es multifactorial.",
    v: [
      "Saliencia de incentivo=Valor motivacional de una recompensa, el «querer»",
      "Error de predicción=Diferencia entre la recompensa esperada y la obtenida",
      "Puntos calientes hedónicos=Pequeñas zonas cerebrales de las que depende el placer, el «gustar»",
      "Opioides y endocannabinoides=Mensajeros químicos con más peso que la dopamina en el placer en sí",
      "Dopamina mesolímbica=Proyección del ATV al accumbens ligada al «querer» y al error de predicción",
      "Moncrieff et al. (2022)=Revisión sin evidencia consistente de que la depresión se deba a poca serotonina",
      "Desequilibrio químico=Teoría simple de la depresión que la comunidad científica considera no válida",
      "Berridge y Robinson=Autores que separan el «querer» dopaminérgico del «gustar»"
    ],
    g: [
      "Según Berridge y Robinson, la dopamina mesolímbica se relaciona más con el querer que con el ___.|gustar|buscar|desear",
      "El placer depende sobre todo de puntos calientes en los que intervienen opioides y ___.|endocannabinoides|catecolaminas|aminoácidos",
      "La diferencia entre la recompensa esperada y la obtenida se denomina error de ___.|predicción|saliencia|refuerzo",
      "La revisión de Moncrieff et al. no halló evidencia ___ de que la depresión se deba a niveles bajos de serotonina.|consistente|alguna|previa",
      "Según el consenso actual, la depresión es un trastorno ___.|multifactorial|serotoninérgico|dopaminérgico"
    ],
    tf: [
      "Que los ISRS sean eficaces en muchos casos demuestra que la depresión se debe a un déficit de serotonina.|F|La eficacia de un fármaco no demuestra la causa; la teoría simple del desequilibrio químico no es válida.",
      "La dopamina mesolímbica se relaciona con el error de predicción de la recompensa.|V",
      "La revisión de Moncrieff et al. recibió críticas metodológicas, pero se comparte que la teoría simple del desequilibrio químico no es válida.|V",
      "El placer que produce una recompensa depende sobre todo de la dopamina del núcleo accumbens.|F|El «gustar» depende de puntos calientes con opioides y endocannabinoides; la dopamina se asocia al «querer»."
    ],
    q: [
      "Una persona con una adicción busca la droga con intensidad, aunque dice que ya apenas disfruta al consumirla. ¿Qué concepto encaja mejor?|Saliencia de incentivo|Error de predicción negativo|Puntos calientes hedónicos|Ilustra la disociación entre el «querer», ligado a la dopamina mesolímbica, y el «gustar» o placer en sí.",
      "Un mono recibe un zumo inesperado y, en otra prueba, un zumo totalmente anunciado por una señal. ¿Qué concepto describe la diferencia en la respuesta dopaminérgica?|Error de predicción|Gustar hedónico|Transmisión de volumen|La señal dopaminérgica refleja la diferencia entre lo esperado y lo obtenido, mayor ante una recompensa inesperada.",
      "¿Qué conclusión se ajusta mejor al estado actual sobre serotonina y depresión?|La hipótesis simple del déficit no se sostiene|Está demostrado que la serotonina no interviene|La depresión se debe a un exceso de serotonina|No hay evidencia consistente de un déficit; la depresión es multifactorial, lo que no excluye que la serotonina participe.",
      "¿Qué sistemas intervienen sobre todo en el «gustar», según la investigación actual?|Opioides y endocannabinoides|Dopamina mesolímbica y noradrenalina|Serotonina y dopamina|Los puntos calientes hedónicos dependen sobre todo de opioides y endocannabinoides (Berridge y Robinson, 2016)."
    ],
    inc: [
      "Sobre la dopamina mesolímbica, ¿cuál es INCORRECTA?|Es la molécula del placer en sí|Se asocia a la motivación|Codifica errores de predicción|El placer depende sobre todo de puntos calientes con opioides y endocannabinoides; la dopamina se asocia al «querer»."
    ],
    seq: [],
    cls: [
      "«Querer» o «gustar»|Querer: dopamina mesolímbica; saliencia de incentivo; búsqueda de la recompensa|Gustar: puntos calientes hedónicos; opioides; endocannabinoides"
    ] }
] },

{ n: 15, t: "Bases moleculares, genoma y epigenética", cap: 5, pir: "media", mods: [
  { t: "Evolución y la falsa pregunta «¿heredado o aprendido?»",
    tip: "La conducta resulta de la historia evolutiva de la especie y del desarrollo de cada individuo. Preguntar si una conducta es innata o aprendida está mal planteado: los genes se expresan siempre en un ambiente. Se habla de interacción genotipo-ambiente (el efecto de uno depende del otro) y de correlación genotipo-ambiente (los genes influyen en los ambientes que se reciben o se buscan).",
    v: [
      "Selección natural=Proceso que acumula rasgos que favorecen la supervivencia y la reproducción",
      "Adaptación=Rasgo que aumenta la supervivencia o la reproducción en un ambiente dado",
      "Darwin y Wallace=Proponentes de la teoría de la selección natural",
      "Interacción genotipo-ambiente=El efecto del ambiente depende del genotipo, y viceversa",
      "Correlación genotipo-ambiente=Influencia de los genes en los ambientes que alguien recibe o busca",
      "Búsqueda de sensaciones=Ejemplo de tendencia que lleva a elegir actividades de riesgo",
      "Historia evolutiva=Pasado de la especie que, junto al desarrollo, explica la conducta",
      "Desarrollo individual=Historia de cada organismo que, junto a la evolución, explica la conducta"
    ],
    g: [
      "La selección natural fue propuesta por Charles Darwin y Alfred Russel ___.|Wallace|Mendel|Crick",
      "Que alguien con tendencia a la búsqueda de sensaciones elija actividades de riesgo ilustra la ___ genotipo-ambiente.|correlación|interacción|dependencia",
      "En la interacción genotipo-ambiente, el efecto de un ambiente depende del ___.|genotipo|fenotipo|cariotipo",
      "Los rasgos que aumentan la supervivencia y la reproducción en un ambiente se denominan ___.|adaptaciones|mutaciones|polimorfismos",
      "La pregunta útil es cuánto explica cada factor de las diferencias ___ en una población.|entre personas|dentro de cada persona|entre culturas"
    ],
    tf: [
      "Según los genetistas de la conducta, la pregunta «¿innato o aprendido?» está mal planteada.|V",
      "La correlación genotipo-ambiente significa que el efecto de un ambiente varía según el genotipo.|F|Eso es la interacción; la correlación es la influencia de los genes en los ambientes que se reciben o se buscan.",
      "Los genes pueden influir en los ambientes que una persona busca activamente.|V",
      "Si una conducta tiene una base genética, el ambiente ya no puede influir en ella.|F|Los genes se expresan siempre en un ambiente, y el ambiente actúa sobre una dotación genética concreta."
    ],
    q: [
      "Un fármaco mejora la memoria en ratones de una cepa, pero no en los de otra. Este resultado ilustra…|una interacción genotipo-ambiente|una correlación genotipo-ambiente|una adaptación por selección natural|El efecto del factor ambiental (el fármaco) depende del genotipo de cada cepa.",
      "Unos padres aficionados a la lectura transmiten sus genes a su hija y, además, llenan la casa de libros. ¿Qué fenómeno describe?|Correlación genotipo-ambiente|Interacción genotipo-ambiente|Transmisión independiente|Los genes se asocian con el ambiente que la niña recibe: es una correlación genotipo-ambiente.",
      "¿Cuál es la forma científicamente útil de plantear la relación entre genes y conducta?|Cuánto explica cada factor de la variación|Qué porcentaje de cada conducta es heredado|Si cada conducta es innata o aprendida|La pregunta útil es cuánto explica cada factor de las diferencias entre personas en una población y cómo interactúan.",
      "¿Qué explica la selección natural?|La acumulación de rasgos adaptativos|La transmisión de lo aprendido|La aparición dirigida de mutaciones|Explica cómo se acumulan los rasgos que aumentan la supervivencia y la reproducción en un ambiente determinado."
    ],
    inc: [
      "Sobre genes y ambiente, ¿cuál es INCORRECTA?|Los genes actúan con independencia del ambiente|El ambiente actúa sobre una dotación genética|Los genes influyen en los ambientes buscados|Los genes no actúan en el vacío: se expresan siempre en un ambiente."
    ],
    seq: [],
    cls: [
      "Interacción o correlación genotipo-ambiente|Interacción: un fármaco eficaz solo en una cepa; un ambiente que afecta distinto según el genotipo|Correlación: elegir actividades de riesgo por buscar sensaciones; padres lectores con casa llena de libros"
    ] },

  { t: "El dogma central de la biología molecular",
    tip: "El ADN es una doble hélice cuyas bases se emparejan A con T y G con C. Según el dogma central (Crick, 1958), el ADN se replica, se transcribe en el núcleo a ARN mensajero (con uracilo en lugar de timina), madura eliminando intrones y se traduce en los ribosomas leyendo codones de tres bases. La transcriptasa inversa de algunos virus es una excepción a ese flujo.",
    v: [
      "Replicación=Copia del ADN antes de la división celular",
      "Transcripción=Copia de un gen de ADN en ARN mensajero, en el núcleo",
      "Traducción=Síntesis de una proteína a partir del ARN mensajero en los ribosomas",
      "Codón=Secuencia de tres bases que corresponde a un aminoácido",
      "Intrón=Fragmento que se elimina del ARN durante la maduración",
      "Splicing alternativo=Combinación distinta de exones que permite obtener varias proteínas de un gen",
      "Transcriptasa inversa=Enzima de algunos virus que fabrica ADN a partir de ARN",
      "ARN de transferencia=Molécula que aporta los aminoácidos durante la síntesis de proteínas"
    ],
    g: [
      "En el ARN, el ___ sustituye a la timina.|uracilo|citosina|adenina",
      "La traducción tiene lugar en los ___ del citoplasma.|ribosomas|núcleos|lisosomas",
      "Durante la maduración del ARN se eliminan los ___ y se unen los exones.|intrones|codones|anticodones",
      "En el ADN, la guanina se empareja con la ___.|citosina|timina|adenina",
      "Watson y Crick describieron la estructura del ADN a partir de los datos de Maurice Wilkins y Rosalind ___.|Franklin|Wallace|Nurk"
    ],
    tf: [
      "La transcripción tiene lugar en los ribosomas del citoplasma.|F|La transcripción ocurre en el núcleo; en los ribosomas tiene lugar la traducción.",
      "Un mismo gen puede dar lugar a varias proteínas gracias al splicing alternativo.|V",
      "Durante la traducción, el ARN mensajero se lee de tres en tres bases.|V",
      "El flujo de información ADN → ARN → proteína no admite ninguna excepción conocida.|F|Hay excepciones: la transcriptasa inversa de algunos virus fabrica ADN a partir de ARN."
    ],
    q: [
      "¿Qué etapa del dogma central se produce en el núcleo y genera ARN mensajero?|Transcripción|Traducción|Replicación|La transcripción copia un gen en ARN mensajero; la traducción, en los ribosomas, sintetiza la proteína.",
      "Un virus introduce su ARN en una célula y esta acaba con ADN viral. ¿Qué lo hace posible?|La transcriptasa inversa|El ribosoma del citoplasma|El ARN de transferencia|La transcriptasa inversa de algunos virus fabrica ADN a partir de ARN, una excepción al flujo habitual.",
      "¿Qué papel cumple el ARN de transferencia en la traducción?|Aportar aminoácidos al ribosoma|Copiar el gen de ADN en el núcleo|Eliminar los intrones del ARN|Cada codón del ARN mensajero indica un aminoácido, que aporta el ARN de transferencia.",
      "¿Por qué el número de genes no basta para conocer el número de proteínas distintas?|Por el splicing alternativo|Por la replicación del ADN|Por el emparejamiento A-T|Combinando exones de distintas formas, un mismo gen puede dar lugar a varias proteínas."
    ],
    inc: [
      "Sobre el ADN y el ARN, ¿cuál es INCORRECTA?|La adenina se empareja con la citosina|El ARN usa uracilo en lugar de timina|El ADN es una doble hélice|La adenina se empareja con la timina, y la guanina con la citosina."
    ],
    seq: [
      "Del gen a la proteína|Transcripción en el núcleo>Maduración del ARN>Llegada del ARN mensajero al ribosoma>Lectura de codones>Proteína sintetizada"
    ],
    cls: [] },

  { t: "Cromosomas y genoma humano",
    tip: "Las células humanas tienen 46 cromosomas: 22 pares de autosomas y un par sexual; los gametos, 23, gracias a la meiosis. El Proyecto Genoma Humano publicó en 2003 una secuencia que cubría en torno al 92 %; el consorcio T2T publicó en 2022 la primera completa, y en 2023 llegó el primer borrador del pangenoma. Hay unos 19 000–20 000 genes codificantes, y solo el 1–2 % del genoma codifica proteínas.",
    v: [
      "Autosomas=Los 22 pares de cromosomas no sexuales",
      "Cariotipo=Representación ordenada de los cromosomas de una persona",
      "Meiosis=División celular que reduce a la mitad el número de cromosomas",
      "Gametos=Células reproductoras humanas, con 23 cromosomas",
      "Proyecto Genoma Humano=Secuencia publicada en 2003 que cubría en torno al 92 % del genoma",
      "Consorcio T2T=Publicó en 2022 la primera secuencia completa, sin huecos, del genoma humano",
      "Pangenoma humano=Borrador de 2023 que reúne genomas de 47 personas de orígenes diversos",
      "Genes codificantes=Unos 19 000–20 000 en el genoma humano"
    ],
    g: [
      "Las células humanas tienen 46 cromosomas, de los cuales ___ pares son autosomas.|22|23|21",
      "En 2003, la secuencia del Proyecto Genoma Humano cubría alrededor del ___ del genoma.|92 %|99 %|75 %",
      "Solo en torno al ___ del genoma humano codifica proteínas.|1–2 %|10–12 %|25–30 %",
      "La primera secuencia completa del genoma humano la publicó en 2022 el consorcio ___.|T2T|ENCODE|HapMap",
      "El primer borrador del pangenoma humano reunió genomas de ___ personas de orígenes diversos.|47|23|470"
    ],
    tf: [
      "La secuencia del genoma publicada en 2003 era completa y no tenía huecos.|F|Cubría en torno al 92 %; la primera secuencia completa la publicó el consorcio T2T en 2022.",
      "El genoma humano contiene muchos menos genes codificantes de lo que se esperaba antes de secuenciarlo.|V",
      "Gran parte del genoma no codificante incluye secuencias reguladoras, genes de ARN no codificante y secuencias repetidas.|V",
      "Los gametos humanos tienen 46 cromosomas, igual que el resto de las células.|F|Los gametos tienen la mitad, 23 cromosomas, gracias a la meiosis."
    ],
    q: [
      "Un cariotipo muestra 44 autosomas y dos cromosomas X. ¿Cómo se describe?|46,XX, cariotipo femenino normal|47,XX, con un autosoma de más|45,X, con un cromosoma sexual menos|44 autosomas más 2 cromosomas sexuales suman 46: es el cariotipo femenino normal.",
      "¿Por qué el Proyecto Genoma Humano no logró en 2003 una secuencia completa?|Por las regiones muy repetitivas|Por la falta de genes codificantes|Por la variación entre las personas|Quedaban sin resolver regiones muy repetitivas, que el consorcio T2T completó en 2022.",
      "¿Qué aporta el pangenoma humano frente a una única secuencia de referencia?|Recoge mejor la diversidad humana|Cierra por primera vez los huecos|Fija la cifra exacta de genes codificantes|Reúne genomas de 47 personas de orígenes diversos para representar mejor la variación humana.",
      "La cifra de genes codificantes humanos (unos 19 000–20 000) varía ligeramente porque…|depende del catálogo de referencia|el genoma cambia de una célula a otra|aún falta secuenciar el 8 % del genoma|La cifra exacta varía según el catálogo de referencia; el genoma completo está secuenciado desde 2022."
    ],
    inc: [
      "Sobre los cromosomas humanos, ¿cuál es INCORRECTA?|Hay 23 pares de autosomas|Hay un par de cromosomas sexuales|El cariotipo detecta anomalías|Hay 22 pares de autosomas y un par de cromosomas sexuales, 46 en total."
    ],
    seq: [],
    cls: [] },

  { t: "Epigenética: lo establecido y lo exagerado",
    tip: "La epigenética estudia cambios en la expresión génica que no alteran la secuencia del ADN y se mantienen en la división celular: metilación del ADN, modificación de histonas y ARN no codificantes. Es consenso que explica la diferenciación celular y la impronta genómica. Su relación con la conducta en humanos tiene evidencia limitada, y la herencia transgeneracional de traumas no está establecida.",
    v: [
      "Epigenética=Estudio de cambios en la expresión génica sin alteración de la secuencia del ADN",
      "Metilación del ADN=Adición de grupos metilo, generalmente en citosinas, que suele silenciar un gen",
      "Histonas=Proteínas alrededor de las que se enrolla el ADN",
      "Impronta genómica=Expresión de un gen según proceda del padre o de la madre",
      "Síndrome de Prader-Willi=Pérdida de una región del cromosoma 15 de origen paterno",
      "Síndrome de Angelman=Pérdida de una región del cromosoma 15 de origen materno",
      "Weaver et al. (2004)=Cuidado materno en ratas asociado a la metilación del receptor de glucocorticoides",
      "Heijmans et al. (2008)=Exposición prenatal a la hambruna holandesa asociada a menor metilación"
    ],
    g: [
      "La metilación del ADN suele ___ el gen afectado.|silenciar|activar|duplicar",
      "Si falta la copia paterna de una región del cromosoma 15, aparece el síndrome de ___.|Prader-Willi|Angelman|Williams",
      "Una limitación de los estudios epigenéticos humanos es que suelen analizar tejidos como la ___.|sangre|corteza|amígdala",
      "En ratas, el cuidado materno se ha asociado a la metilación del gen del receptor de ___.|glucocorticoides|dopamina|oxitocina",
      "Que una neurona y una célula del hígado sean tan distintas con el mismo ADN se explica por la ___.|epigenética|mutación|meiosis"
    ],
    tf: [
      "La herencia de traumas a través de varias generaciones por vía epigenética está demostrada en humanos.|F|No está establecida; la evidencia sobre epigenética y conducta en humanos es limitada.",
      "Los cambios epigenéticos modifican la secuencia de bases del ADN.|F|Modifican la expresión de los genes sin cambiar la secuencia del ADN.",
      "Es un hecho de consenso que los mecanismos epigenéticos regulan la diferenciación celular y la impronta genómica.|V",
      "El estudio de la hambruna holandesa halló una asociación de efecto pequeño, no una demostración causal sobre la conducta.|V"
    ],
    q: [
      "Un niño presenta una deleción en el cromosoma 15 heredada de su madre. ¿Qué cuadro cabe esperar?|Síndrome de Angelman|Síndrome de Prader-Willi|Síndrome de Williams|Por impronta genómica, la falta de la copia materna produce Angelman; la de la paterna, Prader-Willi.",
      "Un titular afirma: «Tus traumas se heredarán epigenéticamente en tus nietos». ¿Cómo valorarlo según la evidencia actual?|Como algo no establecido|Como un hecho bien replicado en humanos|Como una idea refutada por completo|La herencia transgeneracional epigenética en humanos no está establecida, aunque tampoco se ha descartado por completo.",
      "¿Qué limita la extrapolación del estudio de Weaver et al. (2004) a la conducta humana?|Se realizó en ratas|Midió solo secuencias de ADN|No halló cambios de metilación|Mostró en ratas una asociación entre cuidado materno, metilación y respuesta al estrés; no se traslada sin más a humanos.",
      "¿Qué mecanismo NO se considera epigenético?|Una mutación puntual|La metilación del ADN|Un ARN no codificante|Una mutación cambia la secuencia del ADN; los mecanismos epigenéticos alteran la expresión sin cambiarla."
    ],
    inc: [
      "Sobre la evidencia en epigenética, ¿cuál es INCORRECTA?|Explica bien la conducta humana en general|Explica la diferenciación de las células|Explica la impronta genómica|Usar la epigenética como explicación general de la conducta no está establecido."
    ],
    seq: [],
    cls: [
      "Grado de evidencia en epigenética|Consenso: diferenciación celular; impronta genómica; regulación de la expresión génica|Evidencia limitada: experiencias tempranas y conducta humana; estudio de la hambruna holandesa|No establecido: herencia transgeneracional de traumas; explicación general de la conducta"
    ] }
] },

{ n: 16, t: "Herencia, anomalías genéticas y heredabilidad", cap: 5, pir: "media", mods: [
  { t: "Leyes de Mendel y patrones de herencia",
    tip: "Mendel (1866) formuló la ley de la segregación (cada individuo transmite uno de sus dos alelos) y la de la transmisión independiente (válida si los genes están en cromosomas distintos o muy alejados). El Huntington es autosómico dominante; la fenilcetonuria, autosómica recesiva y evitable con una dieta; Duchenne y el X frágil están ligados al X y afectan más a los varones.",
    v: [
      "Alelo=Cada una de las versiones de un gen",
      "Homocigoto=Individuo con dos alelos iguales de un gen",
      "Heterocigoto=Individuo con dos alelos distintos de un gen",
      "Fenotipo=Rasgo observable de un individuo",
      "Genotipo=Dotación genética de un individuo",
      "Ley de la segregación=Cada individuo transmite solo una de sus dos copias de un gen a cada descendiente",
      "Recesivo=Que solo se manifiesta si hay dos copias",
      "Fenilcetonuria=Enfermedad autosómica recesiva que impide metabolizar la fenilalanina"
    ],
    g: [
      "La enfermedad de Huntington se hereda de forma autosómica ___.|dominante|recesiva|codominante",
      "La ley de la transmisión independiente solo se cumple si los genes están en cromosomas ___ o muy alejados.|diferentes|homólogos|sexuales",
      "La fenilcetonuria se detecta al nacer mediante la prueba del ___.|talón|sudor|cariotipo",
      "Las enfermedades ligadas al X afectan más a los varones porque tienen un solo ___.|cromosoma X|cromosoma 21|alelo recesivo",
      "Mendel publicó sus experimentos con guisantes en ___.|1866|1859|1953"
    ],
    tf: [
      "Cada hijo de un portador de la enfermedad de Huntington tiene un 25 % de probabilidad de heredarla.|F|Es autosómica dominante: cada hijo de un portador tiene un 50 % de probabilidad.",
      "En la herencia autosómica recesiva, los padres suelen ser portadores sanos.|V",
      "Una dieta baja en fenilalanina desde el nacimiento evita el daño de la fenilcetonuria.|V",
      "La distrofia muscular de Duchenne se hereda de forma autosómica recesiva.|F|Está ligada al cromosoma X; por eso afecta más y con más gravedad a los varones."
    ],
    q: [
      "Dos padres sanos tienen un hijo con fenilcetonuria. ¿Qué es lo más probable?|Ambos son portadores heterocigotos|Uno tiene un alelo dominante afectado|La enfermedad está ligada al cromosoma X|Es autosómica recesiva: hacen falta dos copias, y los padres suelen ser portadores sanos.",
      "Un hombre portador de la mutación de Huntington tiene hijos con una mujer no portadora. ¿Qué probabilidad tiene cada hijo de heredarla?|50 %|25 %|100 %|Es autosómica dominante: basta una copia, y cada hijo de un portador tiene un 50 % de probabilidad.",
      "¿Por qué la fenilcetonuria ilustra que «genético» no significa «inevitable»?|Una dieta adecuada evita el daño|El gen se silencia con la edad|Solo se manifiesta en los varones|Una dieta baja en fenilalanina desde el nacimiento evita la discapacidad intelectual.",
      "¿Cuándo deja de cumplirse la ley de la transmisión independiente?|Si los genes están próximos en un cromosoma|Si los dos alelos de cada gen son recesivos|Si el individuo es homocigoto para ambos genes|Solo se cumple si los genes están en cromosomas diferentes o muy alejados."
    ],
    inc: [
      "Sobre los patrones de herencia, ¿cuál es INCORRECTA?|El X frágil es autosómico dominante|El Huntington es autosómico dominante|La fenilcetonuria es autosómica recesiva|El síndrome del X frágil está ligado al cromosoma X."
    ],
    seq: [],
    cls: [
      "Patrón de herencia|Autosómico dominante: enfermedad de Huntington|Autosómico recesivo: fenilcetonuria|Ligado al X: distrofia de Duchenne; síndrome del X frágil"
    ] },

  { t: "Mutación y polimorfismo",
    tip: "Una mutación es un cambio en la secuencia del ADN: puntual, inserción, deleción o expansión de tripletes. Un polimorfismo es una variante frecuente (por convención, en al menos el 1 % de la población), como los SNP y las CNV. La enfermedad de Huntington (CAG en el gen HTT, cromosoma 4) y el síndrome del X frágil (CGG en el gen FMR1) se deben a expansiones de tripletes.",
    v: [
      "Mutación=Cambio en la secuencia del ADN",
      "Expansión de tripletes=Repetición anormal de una secuencia de tres bases",
      "Polimorfismo=Variante genética presente en al menos el 1 % de la población",
      "SNP=Variante frecuente que afecta a un solo nucleótido",
      "CNV=Variación en el número de copias de un fragmento de ADN",
      "Gen HTT=Gen del cromosoma 4 cuya expansión CAG causa la enfermedad de Huntington",
      "Gen FMR1=Gen del cromosoma X cuya expansión CGG causa el síndrome del X frágil",
      "Penetrancia incompleta=Variante que no siempre produce la enfermedad, como 36–39 repeticiones CAG"
    ],
    g: [
      "La enfermedad de Huntington se debe a una expansión del triplete ___.|CAG|CGG|CTG",
      "Por convención, un polimorfismo está presente en al menos el ___ de la población.|1 %|5 %|10 %",
      "El gen FMR1, implicado en el síndrome del X frágil, se encuentra en el cromosoma ___.|X|4|21",
      "En el Huntington, con ___ o más repeticiones CAG la enfermedad aparece con seguridad si la persona vive lo suficiente.|40|36|200",
      "En la mutación completa del X frágil hay más de ___ repeticiones CGG.|200|40|36"
    ],
    tf: [
      "Entre 36 y 39 repeticiones CAG, la enfermedad de Huntington tiene penetrancia incompleta.|V",
      "Un polimorfismo es, por definición, una variante rara que causa enfermedad.|F|Un polimorfismo es una variante frecuente, presente en al menos el 1 % de la población.",
      "El síndrome del X frágil es la causa hereditaria más frecuente de discapacidad intelectual.|V",
      "La expansión responsable de la enfermedad de Huntington se localiza en el cromosoma X.|F|Está en el gen HTT del cromosoma 4; la del X frágil (CGG, gen FMR1) es la que está en el cromosoma X."
    ],
    q: [
      "El análisis genético de una persona sana de 30 años detecta 42 repeticiones CAG en el gen HTT. ¿Qué cabe concluir?|Desarrollará Huntington si vive lo suficiente|Puede no desarrollarla: penetrancia incompleta|Tiene un polimorfismo sin consecuencias|Con 40 o más repeticiones la enfermedad aparece con seguridad si la persona vive lo suficiente; la penetrancia incompleta es de 36 a 39.",
      "¿Qué distingue un polimorfismo de otras variantes genéticas?|Su frecuencia en la población|Su tamaño en número de bases|Su localización en el cromosoma|Un polimorfismo es una variante frecuente: por convención, presente en al menos el 1 % de las personas.",
      "¿Qué tienen en común la enfermedad de Huntington y el síndrome del X frágil?|Son expansiones de tripletes|Se heredan de forma autosómica|Se deben a no disyunción meiótica|Huntington es una expansión CAG en HTT y el X frágil, una expansión CGG en FMR1.",
      "Los SNP son…|polimorfismos de un nucleótido|mutaciones raras de una sola base|variaciones en el número de copias|Son polimorfismos de un solo nucleótido, frecuentes en la población; las variaciones de copias son las CNV."
    ],
    inc: [
      "Sobre el síndrome del X frágil, ¿cuál es INCORRECTA?|Se debe a una trisomía del X|Se debe a una expansión CGG|Afecta al gen FMR1|Es una expansión de tripletes CGG en el gen FMR1, no una trisomía."
    ],
    seq: [],
    cls: [
      "Huntington o X frágil|Huntington: triplete CAG; gen HTT; cromosoma 4; herencia autosómica dominante|X frágil: triplete CGG; gen FMR1; cromosoma X; más de 200 repeticiones"
    ] },

  { t: "Anomalías cromosómicas",
    tip: "Las anomalías numéricas suelen deberse a una no disyunción en la meiosis: trisomías 21 (Down), 18 (Edwards) y 13 (Patau), y anomalías de los cromosomas sexuales como Turner (45,X), Klinefelter (47,XXY), XYY y triple X. Las estructurales afectan a una parte de un cromosoma: deleciones (maullido de gato, Williams, 22q11.2), duplicaciones, inversiones y translocaciones.",
    v: [
      "No disyunción=Fallo en la separación de los cromosomas durante la meiosis",
      "Trisomía 21=Base cromosómica de la mayoría de los casos de síndrome de Down",
      "Síndrome de Turner=Cariotipo 45,X: mujeres de baja estatura con disfunción ovárica",
      "Síndrome de Klinefelter=Cariotipo 47,XXY: varones altos con hipogonadismo",
      "Síndrome de Williams=Deleción en 7q11.23: buen lenguaje social y dificultades visoespaciales",
      "Maullido de gato=Síndrome por deleción en el brazo corto del cromosoma 5",
      "Deleción 22q11.2=Anomalía estructural asociada a un riesgo elevado de psicosis",
      "Translocación=Intercambio de fragmentos entre cromosomas"
    ],
    g: [
      "El síndrome de Edwards corresponde a la trisomía ___.|18|13|21",
      "El síndrome de Turner se asocia a inteligencia generalmente normal, con posibles dificultades ___.|visoespaciales|de lenguaje|motoras",
      "Una pequeña parte de los casos de síndrome de Down se debe a una translocación ___.|robertsoniana|recíproca|inversa",
      "El riesgo de síndrome de Down por no disyunción aumenta con la edad ___.|materna|paterna|gestacional",
      "El síndrome de Williams se debe a una deleción en el cromosoma ___.|7|5|22"
    ],
    tf: [
      "El síndrome de Klinefelter afecta a mujeres con cariotipo 45,X.|F|Klinefelter es 47,XXY y afecta a varones; 45,X corresponde al síndrome de Turner.",
      "Las personas con síndrome XYY o triple X a menudo no llegan a ser diagnosticadas.|V",
      "La mayoría de los casos de síndrome de Down se deben a una translocación robertsoniana.|F|La mayoría se deben a no disyunción; la translocación explica solo una pequeña parte de los casos.",
      "El síndrome del maullido de gato es una anomalía estructural y no numérica.|V"
    ],
    q: [
      "Una adolescente de baja estatura consulta por ausencia de desarrollo puberal; su inteligencia es normal, aunque tiene dificultades visoespaciales. ¿Qué cariotipo es más probable?|45,X|47,XXY|47,XXX|Turner (45,X): mujeres de baja estatura con disfunción ovárica, inteligencia generalmente normal y posibles dificultades visoespaciales.",
      "Un niño muestra buen lenguaje social y marcadas dificultades visoespaciales. ¿Qué alteración es más probable?|Deleción en 7q11.23|Deleción en 22q11.2|Deleción del brazo 5p|Es el perfil del síndrome de Williams; 5p es el maullido de gato y 22q11.2 se asocia sobre todo a riesgo de psicosis.",
      "¿Qué mecanismo explica la mayoría de las anomalías cromosómicas numéricas?|La no disyunción meiótica|La expansión de tripletes|La translocación recíproca|Un par de cromosomas no se separa en la meiosis y un gameto recibe una copia de más o de menos.",
      "Un varón alto, con hipogonadismo y dificultades de lenguaje y aprendizaje, tiene probablemente un cariotipo…|47,XXY|47,XYY|45,X|Es el perfil del síndrome de Klinefelter; el XYY no cursa con hipogonadismo y 45,X corresponde a mujeres con Turner."
    ],
    inc: [
      "Sobre las trisomías, ¿cuál es INCORRECTA?|La trisomía 13 es el síndrome de Edwards|La trisomía 21 es el síndrome de Down|La trisomía 13 es el síndrome de Patau|Edwards corresponde a la trisomía 18; Patau, a la 13."
    ],
    seq: [],
    cls: [
      "Numérica o estructural|Numéricas: síndrome de Edwards; síndrome de Turner; síndrome de Klinefelter; síndrome de Patau|Estructurales: maullido de gato; síndrome de Williams; deleción 22q11.2; translocación robertsoniana"
    ] },

  { t: "Heredabilidad, GWAS y puntuaciones poligénicas",
    tip: "La heredabilidad es la proporción de la variabilidad de un rasgo en una población concreta asociada a diferencias genéticas: no se aplica a individuos, depende del ambiente y no implica que el rasgo sea inmodificable. Los GWAS muestran que los rasgos psicológicos son muy poligénicos. Las puntuaciones poligénicas predicen poco a nivel individual, se reducen al comparar hermanos y funcionan peor fuera de poblaciones de ascendencia europea.",
    v: [
      "Heredabilidad=Proporción de la variabilidad de un rasgo en una población asociada a diferencias genéticas",
      "Gemelos monocigóticos=Hermanos que comparten casi todo su ADN",
      "Gemelos dicigóticos=Hermanos que comparten en promedio la mitad de sus variantes",
      "GWAS=Estudios de asociación del genoma completo",
      "Rasgo poligénico=Característica que depende de miles de variantes de efecto minúsculo",
      "Puntuación poligénica=Resumen de la carga genética de una persona para un rasgo",
      "Polderman et al. (2015)=Metaanálisis de gemelos con una heredabilidad media en torno al 49 %",
      "Comparación entre hermanos=Diseño en el que las asociaciones poligénicas se reducen mucho"
    ],
    g: [
      "Si el ambiente se iguala para todos, la heredabilidad de un rasgo tiende a ___.|aumentar|disminuir|anularse",
      "La mejor puntuación poligénica para el nivel educativo explica en torno al ___ de sus diferencias.|12–16 %|40–50 %|2–4 %",
      "Los gemelos dicigóticos comparten en promedio ___ de sus variantes genéticas.|la mitad|la cuarta parte|casi todas",
      "El metaanálisis de Polderman et al. estimó una heredabilidad media de en torno al ___.|49 %|80 %|20 %",
      "La mayoría de los datos de los GWAS procede de personas de ascendencia ___.|europea|asiática|africana"
    ],
    tf: [
      "Una heredabilidad del 50 % significa que la mitad del rasgo de cada persona se debe a sus genes.|F|La heredabilidad es poblacional: se refiere a la variabilidad entre personas, no al rasgo de cada individuo.",
      "Un rasgo muy heredable puede modificarse mediante intervenciones ambientales.|V",
      "Al comparar hermanos de una misma familia, las asociaciones de las puntuaciones poligénicas aumentan mucho.|F|Se reducen mucho, porque parte de su efecto refleja el ambiente familiar y otros factores de confusión.",
      "La heredabilidad de un rasgo puede cambiar si cambian las condiciones ambientales de la población.|V"
    ],
    q: [
      "Un estudio estima que la heredabilidad de un rasgo es del 60 % en una población, y un periodista concluye que, en cada persona, el 60 % del rasgo es genético. ¿Qué error comete?|Aplica a individuos un dato poblacional|Confunde la heredabilidad con la penetrancia|Supone que el rasgo es inmodificable|La heredabilidad describe la variabilidad en una población; no indica qué parte del rasgo de una persona se debe a sus genes.",
      "La miopía es muy heredable y se corrige con gafas. ¿Qué idea ilustra?|Heredable no significa inmodificable|La heredabilidad depende de la población|Los rasgos son altamente poligénicos|Que un rasgo sea muy heredable no impide que el ambiente lo modifique o lo corrija.",
      "Una empresa ofrece predecir el nivel educativo de un bebé con su puntuación poligénica. ¿Qué objeción es más sólida?|Predicen poco a nivel individual|Se basan en un único gen|Aún no existen GWAS de ese rasgo|La mejor explica en torno al 12–16 % de las diferencias, parte no es efecto directo y rinde peor fuera de la ascendencia europea.",
      "En una sociedad en la que todos reciben una educación muy similar, ¿qué cabe esperar de la heredabilidad del rendimiento académico?|Que aumente|Que disminuya|Que no varíe|Si el ambiente se iguala, la variabilidad restante se asocia más a diferencias genéticas y la heredabilidad aumenta."
    ],
    inc: [
      "Sobre los GWAS y las puntuaciones poligénicas, ¿cuál es INCORRECTA?|Identifican genes únicos de gran efecto|Muestran rasgos muy poligénicos|Rinden peor en otras ascendencias|Los GWAS revelan miles de variantes de efecto minúsculo; los genes únicos de gran efecto, como en el Huntington, son la excepción."
    ],
    seq: [],
    cls: [] }
] }
);

SP.register(window.COURSE);
})({});
