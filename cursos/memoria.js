(function(window){
// SAIMAP Psicología · Psicología de la Memoria
// Contenido alineado con el temario SAIMAP «Psicología de la Memoria» (v1.0, octubre de 2026).
window.COURSE = {
  id: "memoria",
  title: "Psicología de la Memoria",
  short: "Memoria",
  area: "Procesos psicológicos básicos",
  rutas: { grado: { curso: 1 }, pir: { bloque: "Procesos básicos" } },
  temario: "Psicologia-de-la-Memoria_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Introducción histórica y metodológica", from: 1, to: 2 },
    { n: 2, t: "Estructuras de la memoria", from: 3, to: 7 },
    { n: 3, t: "Procesos de codificación", from: 8, to: 10 },
    { n: 4, t: "Procesos de recuperación", from: 11, to: 13 },
    { n: 5, t: "Procesos de olvido", from: 14, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Memoria · Unidades 1–4
window.COURSE.units.push(
{ n: 1, t: "Qué es la memoria y cómo se estudia", cap: 1, pir: "baja", mods: [
  { t: "Definición: sistemas y procesos",
    tip: "La memoria es el conjunto de sistemas y procesos que permiten codificar, almacenar y recuperar información y que hacen que la conducta cambie con la experiencia. Un fallo de memoria puede originarse en cualquiera de las tres fases. Hablar de sistemas implica que no es una facultad única, y recordar no es reproducir una copia, sino reconstruir (Bartlett, 1932).",
    v: [
      "Memoria=Sistemas y procesos que codifican, almacenan y recuperan información y cambian la conducta",
      "Codificación=Transformación de lo percibido en una representación que puede guardarse",
      "Almacenamiento=Mantenimiento de la información codificada a lo largo del tiempo",
      "Recuperación=Acceso a lo almacenado, de forma deliberada o sin proponérselo",
      "Aprendizaje=Adquisición de un cambio a partir de la experiencia",
      "Sistemas de memoria=Mecanismos distintos, con reglas propias y bases cerebrales en parte diferentes",
      "Recuerdo reconstructivo=Lo recuperado se rehace con conocimientos previos, expectativas y claves",
      "Bartlett (1932)=Autor que defendió que recordar no es reactivar una copia"
    ],
    g: [
      "Al leer un apunte se puede atender a su forma, a su sonido o a su significado, y cada opción produce una ___ distinta.|huella|clave|fase",
      "Contestar una pregunta de examen es un ejemplo de recuperación ___.|deliberada|involuntaria|sensorial",
      "Si un nombre aparece más tarde sin buscarlo, el fallo inicial estaba en la ___.|recuperación|codificación|percepción",
      "La memoria es la ___ de un cambio adquirido con la experiencia y su uso posterior.|conservación|adquisición|percepción",
      "Condicionamiento y habituación interesan en esta asignatura como formas de memoria ___.|no declarativa|declarativa|episódica"
    ],
    tf: [
      "Un fallo de memoria puede originarse en la codificación, en el almacenamiento o en la recuperación.|V",
      "Recordar qué se cenó ayer y montar en bicicleta dependen del mismo mecanismo, con distinto grado de práctica.|F|Dependen de sistemas diferentes, con reglas propias y bases cerebrales en parte distintas.",
      "Memoria y aprendizaje se consideran dos caras del mismo fenómeno.|V",
      "El aprendizaje es la conservación de un cambio, y la memoria, su adquisición.|F|Es al revés: el aprendizaje es la adquisición del cambio, y la memoria, su conservación y uso posterior."
    ],
    q: [
      "A un estudiante le presentan a un compañero nuevo mientras piensa en otra cosa, y luego no recuerda su nombre. ¿Dónde está el fallo más probable?|En la codificación|En el almacenamiento|En la recuperación|Si no atendió al nombre al oírlo, lo más probable es que nunca llegara a codificarse.",
      "¿Qué parte de la definición de memoria apoyan los pacientes que pierden un tipo de memoria y conservan otro?|Que está formada por sistemas|Que incluye tres procesos|Que cambia la conducta|Las disociaciones en pacientes son la prueba más clara de que la memoria no es una facultad única.",
      "Según la definición psicológica, la memoria permite…|codificar, almacenar y recuperar|percibir, atender y responder|adquirir, olvidar y reaprender|Son los tres procesos o fases de la memoria. El olvido puede aparecer como un fallo en cualquiera de ellos.",
      "¿Qué idea de Bartlett explica muchas distorsiones del recuerdo?|Que recordar es reconstruir|Que la huella decae con el tiempo|Que el recuerdo es una copia fiel|Lo recuperado se reconstruye en parte a partir de conocimientos previos, expectativas y claves presentes."
    ],
    inc: [
      "Sobre la definición de memoria|Es una facultad única que guarda todo de la misma forma|La recuperación puede ser deliberada o involuntaria|El almacenamiento va de fracciones de segundo a décadas|La memoria es un conjunto de sistemas con reglas y bases cerebrales en parte distintas, no una facultad única."
    ],
    seq: [
      "Fases de la memoria|Codificación>Almacenamiento>Recuperación"
    ],
    cls: [] },
  { t: "Para qué sirve la memoria (y el olvido)",
    tip: "La función principal de la memoria es guiar la conducta de forma adaptativa. Sostiene la identidad, el conocimiento, el lenguaje, las habilidades y la planificación, como muestran por contraste los casos de H. M. y Clive Wearing. El olvido también es adaptativo: descartar lo irrelevante facilita generalizar y actualizar, y se estudia como un proceso activo y en parte regulado.",
    v: [
      "Memoria autobiográfica=Historia personal continua que sostiene la identidad",
      "Memoria prospectiva=Recordar hacer algo en el futuro, como tomar una pastilla a las nueve",
      "Memoria semántica=Hechos, conceptos y vocabulario que permiten entender lo que se lee",
      "Amnesia anterógrada=Dificultad para formar recuerdos nuevos a partir de la lesión",
      "Amnesia retrógrada=Pérdida de recuerdos de lo ocurrido antes de la lesión",
      "Henry Molaison=Paciente H. M., operado en 1953 de la parte medial de ambos lóbulos temporales",
      "Clive Wearing=Músico con amnesia muy grave por encefalitis que conservó su habilidad musical",
      "Olvido adaptativo=Descartar lo irrelevante para generalizar y actualizar la información"
    ],
    g: [
      "H. M. fue operado en ___ para tratar una epilepsia grave.|1953|1957|1985",
      "La operación de H. M. la describieron Scoville y ___ en 1957.|Milner|Warrington|Shallice",
      "Clive Wearing sufrió en 1985 una ___ por herpes simple.|encefalitis|epilepsia|meningitis",
      "Mantener las primeras palabras de una frase larga mientras llegan las últimas es la función de ___.|lenguaje|identidad|planificación",
      "Olvidar los detalles irrelevantes de muchas experiencias facilita ___ lo que tienen en común.|generalizar|codificar|reconstruir"
    ],
    tf: [
      "H. M. podía mejorar en el dibujo en espejo aunque no recordara haberlo practicado.|V",
      "H. M. tenía dañada la memoria inmediata, pero formaba recuerdos nuevos con normalidad.|F|Fue al revés: conservaba la memoria inmediata y sufría una amnesia anterógrada grave.",
      "Una memoria que lo conservara todo con el mismo peso sería poco útil.|V",
      "Clive Wearing perdió también su habilidad musical, en consonancia con su amnesia grave.|F|Su habilidad musical siguió intacta pese a una amnesia anterógrada y retrógrada muy graves."
    ],
    q: [
      "Tras una cirugía, un paciente no recuerda a quien le visitó hace una hora, pero mejora día a día en una tarea motora sin recordar haberla practicado. ¿A qué caso se parece?|Al de H. M.|Al de K. F.|Al de Linton|H. M. tenía una amnesia anterógrada grave, pero mejoraba en tareas motoras como el dibujo en espejo.",
      "Acordarse de tomar una pastilla a las nueve corresponde a la función de…|planificación|identidad|conocimiento|Es memoria prospectiva: recordar hacer algo en el futuro.",
      "¿Por qué conviene que, tras cambiar una contraseña, la antigua deje de aparecer?|Porque el olvido facilita actualizar|Porque la antigua nunca se codificó|Porque la memoria lo guarda todo igual|Olvidar lo desfasado permite actualizar la información, una de las funciones adaptativas del olvido.",
      "¿Qué amnesia retrógrada presentaba H. M.?|Graduada, para los años previos|Total, de toda su vida anterior|Nula, sin ninguna pérdida previa|Además de la amnesia anterógrada grave, H. M. tenía una amnesia retrógrada graduada para los años previos a la operación."
    ],
    inc: [
      "Sobre las funciones de la memoria|Teclear sin mirar es un caso de memoria prospectiva|La identidad depende de la memoria autobiográfica|Entender un artículo requiere memoria semántica|Teclear sin mirar es una habilidad automatizada. La memoria prospectiva consiste en recordar hacer algo en el futuro."
    ],
    seq: [],
    cls: [
      "Caso clínico|H. M.: cirugía en 1953; lóbulos temporales mediales; dibujo en espejo|Clive Wearing: encefalitis por herpes simple; músico británico; habilidad musical intacta"
    ] },
  { t: "Fuentes de datos",
    tip: "Como la memoria no es observable, se estudia combinando fuentes. Los experimentos permiten conclusiones causales, pero tienen poca validez ecológica. Los estudios neuropsicológicos se basan en la disociación. La neuroimagen muestra dónde y cuándo, pero es correlacional. Los diarios de Linton y Wagenaar tienen alta validez ecológica y poco control. Las conclusiones más firmes surgen de la convergencia.",
    v: [
      "Validez ecológica=Grado en que los resultados se aplican a situaciones de la vida real",
      "Disociación simple=Un paciente falla en una tarea A y rinde con normalidad en una B",
      "Doble disociación=Un paciente falla en A y no en B, y otro muestra el patrón inverso",
      "Paciente K. F.=Caso de Shallice y Warrington con la memoria inmediata verbal dañada",
      "Neuroimagen=RMf, TEP o potenciales evocados, que muestran dónde y cuándo se activa el cerebro",
      "Estudios de diario=Registro de sucesos reales y evaluación posterior de lo que se recuerda",
      "Wagenaar (1986)=Registró en cada suceso quién, qué, dónde y cuándo",
      "Convergencia=Varias fuentes de datos que apuntan a la misma conclusión"
    ],
    g: [
      "Los datos de neuroimagen son ___: una activación no prueba que la región sea necesaria.|correlacionales|causales|ecológicos",
      "Linton (___) anotó durante años sucesos de su propia vida y se evaluó periódicamente.|1975|1986|1970",
      "Los estudios ___ trabajan con otras especies y permiten intervenciones imposibles en humanos.|comparados|evolutivos|farmacológicos",
      "Los estudios ___ siguen los cambios de la memoria desde la infancia hasta la vejez.|evolutivos|comparados|neuropsicológicos",
      "El control experimental y la validez ecológica tienden a ___.|oponerse|coincidir|sumarse"
    ],
    tf: [
      "La separación entre memoria a corto y a largo plazo se apoya a la vez en la posición serial, en pacientes y en neuroimagen.|V",
      "Una disociación simple basta para afirmar que existen dos sistemas de memoria.|F|Es una trampa típica: la prueba fuerte es la doble disociación, en la que otro paciente muestra el patrón inverso.",
      "Los estudios experimentales de laboratorio proporcionan la mayor parte del conocimiento sobre la memoria.|V",
      "Los estudios de diario combinan una alta validez ecológica con un control experimental elevado.|F|Tienen poco control: no se puede decidir qué ocurre ni cómo se codifica."
    ],
    q: [
      "Un estudio de RMf muestra que una región se activa al recordar caras. ¿Qué puede concluirse con seguridad?|Que se activa durante la tarea|Que es necesaria para recordar caras|Que su lesión impide recordar caras|La neuroimagen es correlacional: muestra actividad, pero no prueba que la región sea imprescindible.",
      "H. M. tenía dañada la memoria a largo plazo y conservada la inmediata, y K. F. mostraba lo contrario. ¿Qué forman juntos?|Una doble disociación|Una disociación simple|Una convergencia de fuentes|Dos patrones opuestos en pacientes distintos forman una doble disociación y sugieren sistemas separables.",
      "¿Qué fuente de datos permite con más claridad conclusiones causales?|El experimento de laboratorio|La resonancia magnética funcional|El registro de sucesos cotidianos|Al manipular una variable y mantener constante lo demás, el experimento permite conclusiones causales.",
      "¿Qué estrategia ofrece las conclusiones más firmes sobre la memoria?|La convergencia de fuentes|Un único experimento bien controlado|La neuroimagen de alta resolución|Ninguna fuente basta por sí sola. Cuando experimentos, pacientes y neuroimagen coinciden, la conclusión gana credibilidad."
    ],
    inc: [
      "Sobre las fuentes de datos|La neuroimagen prueba qué regiones son necesarias|Los experimentos tienen límites de validez ecológica|Los estudios de diario registran sucesos reales|La neuroimagen es correlacional: muestra dónde y cuándo se activa el cerebro, no que una región sea necesaria."
    ],
    seq: [],
    cls: [
      "Fuente de datos|Neuropsicológica: H. M. y K. F.; doble disociación|Neuroimagen: RMf; TEP; potenciales evocados|Diario: Linton (1975); Wagenaar (1986)"
    ] },
  { t: "Niveles de análisis",
    tip: "Una misma pregunta puede responderse a tres niveles: conductual o cognitivo, de sistemas neurales y celular-molecular. Ningún nivel sustituye a los demás, pero se restringen mutuamente, y la neurociencia cognitiva intenta conectarlos. Ruiz-Vargas (1994) propuso los niveles intencional, de la representación y el algoritmo y de la implementación. No deben confundirse con los niveles de procesamiento de Craik y Lockhart (1972).",
    v: [
      "Niveles de análisis=Escalas a las que se describe la memoria, de la conducta a las moléculas",
      "Nivel conductual=Pregunta qué tareas, procesos y representaciones intervienen",
      "Sistemas neurales=Nivel que pregunta qué regiones y circuitos participan",
      "Nivel celular y molecular=Pregunta qué cambia en las neuronas y sus conexiones",
      "Nivel intencional=Qué hace la memoria y para qué, en relación con el entorno",
      "Representación y algoritmo=Nivel de las estructuras y procesos que logran la función y cómo operan",
      "Nivel de implementación=Cómo se realiza la función en el sistema nervioso",
      "Niveles de procesamiento=Teoría de Craik y Lockhart sobre la profundidad de la codificación"
    ],
    g: [
      "Explicar la práctica distribuida por cambios en la eficacia sináptica corresponde al nivel ___.|celular y molecular|de sistemas neurales|conductual o cognitivo",
      "Ruiz-Vargas propuso su clasificación de niveles en ___.|1994|1972|1985",
      "La ___ cognitiva intenta conectar los distintos niveles de análisis.|neurociencia|psicofísica|psicometría",
      "En la clasificación de Ruiz-Vargas, el nivel de la ___ trata cómo se realiza la memoria en el sistema nervioso.|implementación|representación|intención",
      "Si una pregunta menciona el procesamiento fonológico o semántico, se refiere a los niveles de ___.|procesamiento|análisis|implementación"
    ],
    tf: [
      "Un modelo cognitivo de dos sistemas gana fuerza si se hallan circuitos cerebrales distintos para cada uno.|V",
      "Los niveles de análisis y los niveles de procesamiento de Craik y Lockhart son dos nombres de la misma idea.|F|Los primeros son escalas de descripción. Los segundos, una teoría sobre la profundidad de la codificación.",
      "Un hallazgo celular basta para explicar por qué un estudiante aprueba.|F|Ningún nivel sustituye a los demás: un hallazgo celular no explica por sí solo la conducta.",
      "Las dos clasificaciones de niveles coinciden en que la memoria se describe por su función, sus mecanismos o su base biológica.|V"
    ],
    q: [
      "Un titular anuncia el descubrimiento de «la molécula del recuerdo». Antes de extraer consejos para estudiar, ¿qué convendría comprobar?|Si el efecto aparece en la conducta|Si la molécula está en el hipocampo|Si se replica con otras moléculas|El titular habla del nivel molecular. Hay que comprobar si el efecto se observa también en la conducta de las personas.",
      "«Cada sesión obliga a recuperar lo anterior y añade claves de contexto distintas.» ¿A qué nivel corresponde esta explicación?|Conductual o cognitivo|Sistemas neurales|Celular y molecular|Habla de tareas, procesos y representaciones, propios del nivel conductual o cognitivo.",
      "¿Qué pregunta plantea el nivel intencional de Ruiz-Vargas?|Qué hace la memoria y para qué|Cómo funcionan sus algoritmos|Cómo se realiza en el cerebro|El nivel intencional o experiencial se ocupa de qué hace la memoria y para qué, en relación con el entorno.",
      "Una pregunta de examen trata sobre la profundidad semántica al codificar. ¿De qué se habla?|De niveles de procesamiento|De niveles de análisis|Del nivel de implementación|La profundidad de la codificación es la teoría de Craik y Lockhart (1972), no una escala de análisis."
    ],
    inc: [
      "Sobre los niveles de análisis|Un efecto conductual indica qué región lo produce|Ningún nivel sustituye por completo a los demás|Un modelo cognitivo gana fuerza con circuitos distintos|Un efecto conductual no indica qué región lo produce: para eso hace falta el nivel de sistemas neurales."
    ],
    seq: [],
    cls: [
      "Clasificación de niveles|Tres escalas: conductual o cognitivo; sistemas neurales; celular y molecular|Ruiz-Vargas (1994): intencional; representación y algoritmo; implementación"
    ] }
] },
{ n: 2, t: "De Ebbinghaus a la neurociencia", cap: 1, pir: "baja", mods: [
  { t: "Ebbinghaus y el método del ahorro",
    tip: "Ebbinghaus (1885) fue su propio participante y usó sílabas sin sentido consonante-vocal-consonante para reducir la influencia del significado. Aprendía cada lista hasta dos repeticiones seguidas sin error y la reaprendía tras un intervalo. El ahorro mide los ensayos ahorrados respecto al aprendizaje original. La curva es negativamente acelerada y no llega a cero, como confirmaron Murre y Dros (2015).",
    v: [
      "Sílaba sin sentido=Trío consonante-vocal-consonante sin significado, como «KEF»",
      "Método del ahorro=Porcentaje de ensayos ahorrados al reaprender respecto al aprendizaje original",
      "Criterio de Ebbinghaus=Dos repeticiones seguidas sin error",
      "Curva del olvido=Pérdida rápida al principio y cada vez más lenta, sin llegar a cero",
      "Sobreaprendizaje=Seguir repasando tras dominar una lista, lo que aumenta el ahorro posterior",
      "Práctica distribuida=Repartir las repeticiones en varios días en lugar de concentrarlas",
      "Murre y Dros (2015)=Réplica moderna con un repunte a las 24 horas atribuible al sueño",
      "Über das Gedächtnis=Obra de 1885, primer estudio experimental sistemático de la memoria"
    ],
    g: [
      "Según la tabla de Ebbinghaus, el ahorro a los 31 días era de alrededor del ___.|21 %|58 %|0 %",
      "Si una lista costó 30 repeticiones y al reaprenderla bastan 12, el ahorro es del ___.|60 %|40 %|18 %",
      "La curva del olvido de Ebbinghaus es ___ acelerada.|negativamente|positivamente|linealmente",
      "Repartir las repeticiones en varios días es ___ eficaz que concentrarlas en una sesión.|más|igual de|menos",
      "En la réplica de Murre y Dros, el pequeño repunte a las 24 horas se atribuye probablemente al ___.|sueño|repaso|azar"
    ],
    tf: [
      "El método del ahorro puede detectar memoria aunque la persona no recuerde nada de forma consciente.|V",
      "Según la curva de Ebbinghaus, en pocos días se olvida todo lo estudiado.|F|La pérdida es rápida al principio, pero se estabiliza: a los 31 días aún había un ahorro de alrededor del 21 %.",
      "Ebbinghaus aprendía las listas a la misma hora del día y con un ritmo de lectura fijo.|V",
      "La principal crítica a Ebbinghaus es que usó muchos participantes poco entrenados.|F|Fue su único participante, entrenado y muy motivado, lo que plantea dudas sobre la generalización."
    ],
    q: [
      "Un estudiante necesitó 25 repeticiones para aprender una lista de vocabulario y, una semana después, 15 para reaprenderla. ¿Cuál es su ahorro?|40 %|60 %|10 %|(25 − 15) / 25 × 100 da un 40 %. El 60 % confunde los ensayos de reaprendizaje con el ahorro.",
      "¿Por qué eligió Ebbinghaus sílabas sin sentido?|Para reducir el peso del significado|Para estudiar la influencia cultural|Para aumentar la validez ecológica|Buscaba un material homogéneo que no dependiera de lo que ya sabía.",
      "¿Qué ahorro aproximado obtuvo Ebbinghaus a los 20 minutos?|58 %|44 %|34 %|Alrededor del 58 % a los 20 minutos, del 44 % a la hora y del 34 % al día.",
      "¿Qué límite se señala al material sin sentido de Ebbinghaus?|Eliminaba el uso de lo ya sabido|Impedía medir el reaprendizaje|Exigía muchos participantes|Al controlar el significado eliminaba lo que caracteriza a la memoria cotidiana, el uso de lo que ya se sabe."
    ],
    inc: [
      "Sobre el trabajo de Ebbinghaus|La curva de ahorro desciende de forma lineal hasta cero|Seguir repasando tras dominar la lista aumenta el ahorro|Repartir las repeticiones en días supera a concentrarlas|La curva es negativamente acelerada: pierde mucho al principio y luego se estabiliza sin llegar a cero."
    ],
    seq: [
      "Procedimiento de Ebbinghaus|Aprender la lista hasta el criterio>Intervalo de retención>Reaprender la lista hasta el mismo criterio>Calcular el porcentaje de ahorro"
    ],
    cls: [] },
  { t: "Bartlett y la memoria reconstructiva",
    tip: "Bartlett (1932) estudió material con significado, como el relato «La guerra de los fantasmas», mediante reproducción repetida y reproducción serial. Con ambos métodos aparecieron acortamiento, normalización y racionalización. Los explicó con el esquema, una estructura de conocimiento moldeada por la cultura. Su memoria reconstructiva es hoy la base para entender las falsas memorias y el testimonio.",
    v: [
      "Remembering=Obra de Bartlett publicada en 1932",
      "La guerra de los fantasmas=Relato tradicional nativo norteamericano usado por Bartlett",
      "Reproducción repetida=La misma persona cuenta la historia tras intervalos cada vez más largos",
      "Reproducción serial=Cada persona transmite la historia a la siguiente, en cadena",
      "Acortamiento=Versiones cada vez más breves que pierden detalles",
      "Normalización=Sustitución de elementos extraños por otros familiares de la propia cultura",
      "Racionalización=Añadir explicaciones para que la historia tenga sentido",
      "Esquema=Estructura de conocimiento moldeada por la cultura que guía la interpretación"
    ],
    g: [
      "Los participantes de Bartlett eran estudiantes ___.|británicos|norteamericanos|alemanes",
      "Un rumor que circula por el grupo de mensajería de clase se parece a la reproducción ___.|serial|repetida|literal",
      "Convertir objetos poco conocidos del relato en otros cotidianos es un ejemplo de ___.|normalización|racionalización|acortamiento",
      "En su época, la psicología conductista y ___ prestó poca atención a Bartlett.|asociacionista|cognitiva|gestáltica",
      "«Recordar» que se pidió la cuenta en una cena en la que pagó otra persona se explica por el ___ del restaurante.|guion|ahorro|filtro"
    ],
    tf: [
      "Bartlett usó sílabas sin sentido para observar cómo influye el conocimiento previo.|F|Es al revés: rechazó ese material y estudió relatos significativos para observar la influencia del conocimiento previo.",
      "Las mismas transformaciones aparecieron con la reproducción repetida y con la reproducción serial.|V",
      "Desde la revolución cognitiva, la influencia de Bartlett no ha dejado de crecer.|V",
      "En la racionalización, los elementos que no encajan se conservan intactos porque llaman la atención.|F|Se suprimen o reinterpretan, y se añaden explicaciones para que la historia tenga sentido."
    ],
    q: [
      "Al contar varias veces un relato extraño, una participante va añadiendo motivos que justifican lo que hacen los personajes. ¿Qué transformación muestra?|Racionalización|Normalización|Acortamiento|Añadir explicaciones para dar sentido es racionalización. La normalización sustituye lo extraño por lo familiar.",
      "¿Qué método consiste en que la misma persona reproduzca la historia tras intervalos cada vez más largos?|Reproducción repetida|Reproducción serial|Recuerdo libre|En la reproducción serial, en cambio, cada participante transmite el relato al siguiente, en cadena.",
      "¿Con qué concepto explicó Bartlett las transformaciones del relato?|Esquema|Interferencia|Ahorro|Lo nuevo se asimila a los esquemas existentes, y lo que no encaja se olvida o se transforma.",
      "¿Qué tensión, todavía vigente, representan Ebbinghaus y Bartlett?|Control frente a significado|Asociación frente a interferencia|Laboratorio frente a neuroimagen|Ebbinghaus prima el control del laboratorio, y Bartlett, el significado y la validez ecológica."
    ],
    inc: [
      "Sobre Bartlett|Para Bartlett recordar era reactivar una copia|Bartlett eligió relatos y dibujos con significado|Bartlett describió acortamiento y normalización|Para Bartlett recordar es reconstruir el pasado a partir de fragmentos y conocimientos, no reactivar una copia."
    ],
    seq: [],
    cls: [
      "Método de Bartlett|Reproducción repetida: misma persona; intervalos crecientes; contar un viaje a lo largo de los años|Reproducción serial: transmisión en cadena; rumor en un grupo de clase"
    ] },
  { t: "Asociacionismo y aprendizaje verbal",
    tip: "Aristóteles propuso que un recuerdo evoca otro por contigüidad, semejanza y contraste, y los empiristas británicos retomaron la idea. Entre 1930 y 1960, la tradición del aprendizaje verbal estudió el aprendizaje serial y el de pares asociados. Su aportación más duradera fue la teoría de la interferencia: con el diseño A-B / A-C, McGeoch (1932) y Underwood (1957) atribuyeron el olvido a otros aprendizajes y no al paso del tiempo.",
    v: [
      "Contigüidad=Asociación entre cosas que ocurrieron juntas",
      "Contraste=Asociación entre cosas opuestas",
      "Empiristas británicos=Retomaron los principios asociativos para explicar las ideas complejas",
      "Aprendizaje serial=Aprender una lista en un orden fijo y reproducirla en ese orden",
      "Pares asociados=Ante el primer elemento de un par estudiado se produce el segundo",
      "Diseño A-B / A-C=Aprender pares y luego otros con los mismos estímulos y respuestas nuevas",
      "McGeoch (1932)=Defendió que el olvido se debe a la interferencia y no al paso del tiempo",
      "Underwood (1957)=Mostró que las listas aprendidas antes explican buena parte del olvido"
    ],
    g: [
      "Oír «sal» y pensar en «pimienta» es una asociación por ___.|contigüidad|semejanza|contraste",
      "La tradición del aprendizaje verbal se desarrolló aproximadamente entre 1930 y ___.|1960|1985|1945",
      "Con palabras reales se recordaban mejor las ___, frecuentes y fáciles de imaginar.|concretas|abstractas|infrecuentes",
      "Desde el asociacionismo, la persona es un receptor relativamente ___.|pasivo|activo|selectivo",
      "Buscar los ajustes del móvil nuevo donde estaban en el anterior es un caso de interferencia ___.|proactiva|retroactiva|semántica"
    ],
    tf: [
      "El enfoque de Ebbinghaus encajaba en el asociacionismo y dominó buena parte del siglo XX.|V",
      "El diseño A-B / A-C se usó sobre todo para estudiar los esquemas y la memoria reconstructiva.|F|Se usó para estudiar la interferencia. Confundirlo con un estudio de esquemas es una trampa típica.",
      "Underwood atribuyó buena parte del olvido de una lista a las listas aprendidas después en el laboratorio.|F|Lo atribuyó a las listas aprendidas antes, lo que hoy se llama interferencia proactiva.",
      "La tradición del aprendizaje verbal prestó poca atención a cómo organiza el material quien aprende.|V"
    ],
    q: [
      "Unos participantes aprenden «llave-nube» y después «llave-silla». Al pedirles la respuesta a «llave» de la primera lista, cometen errores. ¿Qué se estudia?|La interferencia entre aprendizajes|La reconstrucción por esquemas|El decaimiento de la huella|Es el diseño A-B / A-C: aprender respuestas nuevas para los mismos estímulos perjudica el recuerdo de las anteriores.",
      "¿Qué principios de asociación propuso Aristóteles?|Contigüidad, semejanza y contraste|Contigüidad, repetición y refuerzo|Semejanza, frecuencia y novedad|Según Aristóteles, un recuerdo evoca otro por contigüidad, semejanza y contraste.",
      "En la tarea de pares asociados, durante la prueba el participante…|recibe el estímulo y da la respuesta|repite la lista en su orden fijo|reconoce los pares ya estudiados|Se presenta la primera palabra (estímulo) y hay que producir la segunda (respuesta). Repetir en orden es aprendizaje serial.",
      "¿Por qué se considera la tradición del aprendizaje verbal un puente?|Sus métodos pasaron a la psicología cognitiva|Recuperó el material significativo de Bartlett|Introdujo la neuroimagen en la memoria|Sus métodos rigurosos y sus tareas pasaron a la psicología cognitiva, que los reinterpretó en términos de almacenes y procesos."
    ],
    inc: [
      "Sobre el aprendizaje verbal|Mantuvo siempre las sílabas sin sentido como único material|Estudió el aprendizaje serial y el de pares asociados|Su aportación más duradera fue la teoría de la interferencia|Con el tiempo pasó a palabras reales y halló ventajas para las concretas, frecuentes y con significado."
    ],
    seq: [],
    cls: [
      "Tarea del aprendizaje verbal|Aprendizaje serial: orden fijo; abecedario; meses del año|Pares asociados: estímulo y respuesta; llave-nube; diseño A-B / A-C"
    ] },
  { t: "Psicología cognitiva y neurociencia cognitiva",
    tip: "La revolución cognitiva cuajó desde los años cincuenta: Miller (1956) mostró una capacidad inmediata limitada y ampliable por agrupamiento, y Neisser (1967) dio nombre a la disciplina. El procesamiento de la información se apoya en la metáfora del ordenador. Entre 1968 y 1974 surgieron casi todos los grandes modelos, y en los ochenta ganó fuerza el conexionismo. La neurociencia cognitiva relaciona sistemas y procesos con sus bases neurales.",
    v: [
      "Revolución cognitiva=Cambio de los años cincuenta impulsado por ordenadores, información y lingüística",
      "Neisser (1967)=Dio nombre a la psicología cognitiva y acuñó memoria icónica y ecoica",
      "Metáfora del ordenador=La mente recibe, transforma, almacena y recupera con capacidad limitada",
      "Conexionismo=Memoria como patrón de activación distribuido en una red de unidades simples",
      "Atkinson y Shiffrin (1968)=Modelo modal con almacenes sensoriales, a corto y a largo plazo",
      "Tulving (1972)=Distinguió la memoria episódica de la semántica",
      "Baddeley y Hitch (1974)=Propusieron el modelo de memoria de trabajo",
      "Neurociencia cognitiva=Convergencia que relaciona sistemas y procesos de memoria con bases neurales"
    ],
    g: [
      "Neisser publicó «Cognitive Psychology» en ___.|1967|1956|1972",
      "Loftus y Palmer (1974) recuperaban la idea ___ de Bartlett.|reconstructiva|asociativa|conexionista",
      "En los años ochenta ganó fuerza el ___, más cercano a la organización del cerebro.|conexionismo|conductismo|estructuralismo",
      "Pacientes como H. M. revelaron la importancia del lóbulo temporal ___ para formar recuerdos nuevos.|medial|lateral|anterior",
      "Miller (1956) mostró que la capacidad inmediata puede ampliarse ___ la información.|agrupando|repitiendo|ordenando"
    ],
    tf: [
      "Uno de los supuestos de la psicología cognitiva es que la conducta no puede explicarse sin estados mentales internos.|V",
      "Los niveles de procesamiento de Craik y Lockhart son anteriores al modelo modal de Atkinson y Shiffrin.|F|El modelo modal es de 1968, y los niveles de procesamiento, de 1972.",
      "La metáfora del ordenador se considera útil para formular modelos, aunque alejada de cómo funciona el cerebro.|V",
      "La neurociencia cognitiva ha reforzado la idea de que la memoria es un sistema unitario.|F|Ha reforzado lo contrario: la memoria es un conjunto de sistemas con funciones y bases cerebrales en parte distintas."
    ],
    q: [
      "Un investigador describe la memoria como un patrón de activación distribuido en una red de unidades interconectadas. ¿Qué enfoque adopta?|Conexionismo|Asociacionismo|Modelo modal|El conexionismo, que ganó fuerza en los ochenta, se acerca más a la organización del cerebro que la metáfora del ordenador.",
      "¿Qué autor acuñó los términos memoria icónica y memoria ecoica?|Neisser|Miller|Sperling|Los acuñó Neisser (1967). Sperling estudió experimentalmente la memoria icónica, pero no le dio nombre.",
      "¿Qué orden cronológico es el correcto?|Miller, Neisser, Atkinson y Shiffrin|Neisser, Miller, Atkinson y Shiffrin|Miller, Atkinson y Shiffrin, Neisser|Miller es de 1956, Neisser de 1967 y Atkinson y Shiffrin de 1968.",
      "¿Qué dos fuentes principales usa la neurociencia cognitiva para relacionar la memoria con el cerebro?|Pacientes con lesiones y neuroimagen|Diarios y estudios farmacológicos|Pares asociados y sílabas sin sentido|Las lesiones, como la de H. M., y la neuroimagen en personas sanas muestran qué regiones intervienen."
    ],
    inc: [
      "Sobre la psicología cognitiva|Estudia solo la conducta observable, sin estados mentales|Adopta el enfoque del procesamiento de la información|Supone que el sistema tiene límites de capacidad|Estudia procesos mentales no observables a partir de la conducta, frente al conductismo."
    ],
    seq: [
      "Hitos en la historia de la memoria|Ebbinghaus (1885)>Bartlett (1932)>Miller (1956)>Neisser (1967)>Atkinson y Shiffrin (1968)>Craik y Lockhart (1972)>Baddeley y Hitch (1974)"
    ],
    cls: [] }
] },
{ n: 3, t: "Modelos estructurales y niveles de procesamiento", cap: 2, pir: "media", mods: [
  { t: "Memoria primaria y secundaria (Waugh y Norman)",
    tip: "William James (1890) distinguió la memoria primaria, aún presente en la conciencia, de la secundaria. Waugh y Norman (1965) cruzaron en la tarea de sonda el número de elementos interpuestos con la velocidad de presentación. El recuerdo dependía del número de elementos y apenas de la velocidad, así que el olvido en la memoria primaria se explica más por interferencia que por decaimiento.",
    v: [
      "Memoria primaria=Lo que aún está en la conciencia, con capacidad muy limitada",
      "Memoria secundaria=Lo que hay que traer de vuelta desde fuera de la conciencia",
      "William James (1890)=Autor que introdujo los términos primaria y secundaria",
      "Decaimiento=Pérdida de la huella por el simple paso del tiempo",
      "Desplazamiento=Pérdida de la huella porque otros elementos ocupan su lugar",
      "Tarea de sonda=Se presenta un dígito de la serie y hay que decir cuál lo siguió",
      "Elementos interpuestos=Ítems presentados entre el dígito buscado y el final de la serie",
      "Broadbent (1958)=Incluyó un almacén breve previo a la atención en su modelo de filtro"
    ],
    g: [
      "En la tarea de sonda se pedía a los participantes que no ___ los dígitos.|repasaran|escucharan|agruparan",
      "Si el olvido se debiera al tiempo, las series ___ producirían más olvido con los mismos elementos interpuestos.|lentas|rápidas|largas",
      "El recuerdo dependía sobre todo del número de elementos ___.|interpuestos|repasados|agrupados",
      "Según Waugh y Norman, el ___ mantiene la información en la memoria primaria y favorece su paso a la secundaria.|repaso|decaimiento|filtro",
      "Al leer una frase, sus primeras palabras siguen en la memoria ___.|primaria|secundaria|sensorial"
    ],
    tf: [
      "En el modelo de Waugh y Norman, un elemento puede estar a la vez en la memoria primaria y en la secundaria.|V",
      "Waugh y Norman concluyeron que el olvido en la memoria primaria se debe sobre todo al paso del tiempo.|F|Concluyeron lo contrario: dependía del número de elementos interpuestos, es decir, de la interferencia.",
      "La velocidad se manipuló para que el mismo número de elementos interpuestos correspondiera a más o menos tiempo.|V",
      "Waugh y Norman acuñaron los términos memoria primaria y memoria secundaria.|F|Los introdujo William James (1890). Waugh y Norman los recuperaron en un modelo formal de dos almacenes."
    ],
    q: [
      "Alguien memoriza un número de teléfono que le dictan y, a mitad, otra persona dice otro número. El primero se pierde. Según Waugh y Norman, ¿por qué?|Por interferencia de la información nueva|Por decaimiento con el paso del tiempo|Por falta de codificación semántica|No se pierde porque haya pasado mucho tiempo, sino porque entra información nueva que compite con él.",
      "En la tarea de sonda, ¿qué resultado habría apoyado la hipótesis del decaimiento?|Más olvido en las series lentas|Más olvido en las series rápidas|Igual olvido con ambas velocidades|Con el mismo número de elementos interpuestos, las series lentas dejan pasar más tiempo. No ocurrió así.",
      "¿Qué dos variables combinaba el diseño de Waugh y Norman?|Elementos interpuestos y velocidad|Tarea distractora y demora|Informe total e informe parcial|Al cruzarlas, podía separarse el efecto del número de elementos del efecto del tiempo transcurrido.",
      "¿Qué capacidad atribuían Waugh y Norman a la memoria primaria?|Unos pocos elementos|Unos 7 ± 2 fragmentos|Prácticamente ilimitada|La memoria primaria tiene una capacidad muy limitada. La capacidad prácticamente ilimitada es la de la memoria secundaria."
    ],
    inc: [
      "Sobre el modelo de Waugh y Norman|La velocidad de presentación determinaba el olvido|La memoria primaria tiene una capacidad muy limitada|El repaso favorece el paso a la memoria secundaria|La velocidad apenas importaba: el olvido dependía del número de elementos interpuestos."
    ],
    seq: [],
    cls: [
      "Explicación del olvido|Decaimiento: paso del tiempo; huella que se desvanece|Interferencia: elementos interpuestos; información nueva que compite"
    ] },
  { t: "El modelo modal de Atkinson y Shiffrin",
    tip: "Atkinson y Shiffrin (1968) dividen la memoria en registros sensoriales, almacén a corto plazo (ACP) y almacén a largo plazo (ALP). Su aportación más original es separar las estructuras, fijas, de los procesos de control que elige la persona, como el repaso. El ACP es la puerta de entrada obligatoria al ALP y la transferencia depende de la cantidad de repaso, dos supuestos que resultaron problemáticos.",
    v: [
      "Modelo modal=Reunía la propuesta típica o más frecuente entre los modelos de su época",
      "Registro sensorial=Copia literal y breve del estímulo en cada modalidad",
      "ACP=Almacén de capacidad limitada que dura segundos si no se repasa",
      "ALP=Almacén de capacidad prácticamente ilimitada, organizado sobre todo por significado",
      "Estructuras=Almacenes, rasgos fijos que no cambian de una tarea a otra",
      "Procesos de control=Operaciones que la persona elige y adapta, como repasar o codificar",
      "Retén de repaso=Parte del ACP donde la información se mantiene repitiéndola",
      "Código acústico=Formato verbal típico del ACP, causa de confundir letras que suenan parecido"
    ],
    g: [
      "El modelo se llama ___ porque divide la memoria en tres almacenes conectados.|multialmacén|modal|unitario",
      "En el ACP, la información se pierde por ___ y desvanecimiento.|desplazamiento|consolidación|elaboración",
      "En el ALP, la información se pierde por interferencia y por fallos de ___.|recuperación|repaso|atención",
      "Cuanto más tiempo permanece un elemento en el retén de ___, más probable es que se copie en el ALP.|repaso|registro|recuperación",
      "Al copiar una matrícula se confunden letras que suenan parecido porque el ACP usa un código ___.|acústico|visual|semántico"
    ],
    tf: [
      "En el modelo modal, el repaso es una estructura fija del almacén a corto plazo.|F|El repaso es un proceso de control elegido por la persona. Las estructuras son los almacenes.",
      "El modelo modal atribuía la primacía al ALP y la recencia al ACP.|V",
      "En el modelo modal, la recuperación trae la información del ALP al ACP para poder usarla.|V",
      "Los registros sensoriales tienen una capacidad limitada a unos pocos elementos.|F|Su capacidad es grande. La capacidad limitada a unos pocos elementos corresponde al ACP."
    ],
    q: [
      "Una estudiante busca el nombre de un actor mientras habla de una película. Según el modelo modal, ¿qué ocurre?|La información pasa del ALP al ACP|La información pasa del ACP al ALP|La información pasa al registro sensorial|La recuperación funciona en sentido inverso a la transferencia: lo almacenado se trae al ACP para poder usarlo.",
      "¿Cuál es la aportación más original del modelo de Atkinson y Shiffrin?|Separar estructuras y procesos de control|Proponer un registro para cada modalidad|Organizar el ALP por el significado|Las estructuras son fijas, y los procesos de control, como el repaso, los elige y adapta la persona.",
      "¿Qué supuestos centrales del modelo modal resultaron problemáticos?|ACP obligatorio y repaso como transferencia|ALP ilimitado y registro sensorial breve|Código acústico y organización semántica|K. F. cuestionó el paso obligatorio por el ACP, y los datos sobre repaso de mantenimiento, su papel en la transferencia.",
      "¿Qué dato encajaba con el modelo modal?|La memoria inmediata intacta de H. M.|La amplitud verbal reducida de K. F.|La ventaja fonológica en la prueba de rimas|H. M. conservaba la memoria inmediata pero no consolidaba recuerdos nuevos. Los otros dos datos son críticas al modelo."
    ],
    inc: [
      "Sobre los almacenes del modelo modal|El ACP dura horas aunque no se repase|El ALP es relativamente permanente|Los registros sensoriales duran muy poco|Sin repaso, la información del ACP se mantiene solo unos segundos."
    ],
    seq: [
      "Recorrido de la información en el modelo modal|Estímulo>Registros sensoriales>Atención>Almacén a corto plazo>Repaso>Almacén a largo plazo"
    ],
    cls: [
      "Componente del modelo modal|Estructuras: registros sensoriales; ACP; ALP|Procesos de control: repaso; dirigir la atención; estrategias de recuperación"
    ] },
  { t: "Niveles de procesamiento (Craik y Lockhart)",
    tip: "Craik y Lockhart (1972) sostienen que la retención depende de la profundidad del procesamiento al codificar: estructural, fonológico o semántico. Craik y Tulving (1975) lo comprobaron con aprendizaje incidental y preguntas orientadoras. Lo semántico se recordó mejor, sobre todo con respuesta «sí», lo que llevó a hablar de elaboración. El repaso de mantenimiento aporta poco, y el elaborativo mejora la retención.",
    v: [
      "Profundidad=Continuo de lo superficial a lo semántico con que se procesa un estímulo",
      "Nivel estructural=Procesamiento de rasgos físicos, como el tipo de letra",
      "Nivel fonológico=Procesamiento de cómo suena la palabra",
      "Nivel semántico=Procesamiento del significado y de su relación con lo ya sabido",
      "Aprendizaje incidental=Se procesa el material sin saber que luego habrá que recordarlo",
      "Tarea de orientación=Pregunta sobre el estímulo que induce un tipo de procesamiento",
      "Repaso de mantenimiento=Repetición al mismo nivel, sin profundizar (tipo I)",
      "Repaso elaborativo=Procesamiento más profundo que relaciona la información con otras ideas (tipo II)"
    ],
    g: [
      "La pregunta «¿Está escrita en mayúsculas?» induce un procesamiento ___.|estructural|fonológico|semántico",
      "En la condición semántica se recordaban mejor las palabras con respuesta ___.|afirmativa|negativa|ambigua",
      "Craik y Tulving evaluaron el recuerdo con una prueba sorpresa de ___.|reconocimiento|recuerdo serial|amplitud",
      "Repetir el código de verificación del móvil hasta teclearlo es repaso de ___.|mantenimiento|elaboración|recuperación",
      "Craik y Lockhart presentaron su propuesta como un ___ para orientar la investigación.|marco|modelo completo|almacén nuevo"
    ],
    tf: [
      "En el estudio de Craik y Tulving (1975), los participantes sabían desde el principio que tendrían que recordar las palabras.|F|Se usó aprendizaje incidental: respondían a preguntas sin saber que luego habría una prueba sorpresa.",
      "Leer los apuntes una y otra vez es sobre todo repaso de mantenimiento.|V",
      "La ventaja de las respuestas «sí» en la condición semántica llevó a añadir la idea de elaboración.|V",
      "Craik y Lockhart propusieron un nuevo almacén para la información procesada en profundidad.|F|Desplazaron la atención de los almacenes a los procesos: lo que importa es qué se hace con la información."
    ],
    q: [
      "Se pregunta a tres grupos por la palabra «GATO»: si va en mayúsculas, si rima con «pato» o si encaja en una frase sobre maullidos. En una prueba sorpresa, ¿qué grupo recordará más?|El que juzga si encaja en la frase|El que juzga si rima con «pato»|El que juzga si va en mayúsculas|La pregunta sobre la frase induce procesamiento semántico, el más profundo, que dio el mejor reconocimiento.",
      "¿Qué orden de retención obtuvieron Craik y Tulving?|Semántico, fonológico, estructural|Fonológico, semántico, estructural|Semántico, estructural, fonológico|Las palabras semánticas se recordaron mucho mejor que las fonológicas, y estas mejor que las estructurales.",
      "¿Qué tipo de repaso mejora la retención a largo plazo?|El elaborativo|El de mantenimiento|El fonológico|El repaso elaborativo (tipo II) procesa a un nivel más profundo y relaciona la información con otras ideas.",
      "Un estudiante explica los apuntes con ejemplos propios y los relaciona con otros temas. ¿Qué está haciendo?|Repaso elaborativo|Repaso de mantenimiento|Procesamiento estructural|Relacionar lo estudiado con otros conocimientos es repaso elaborativo. Releer sin más sería repaso de mantenimiento."
    ],
    inc: [
      "Sobre los niveles de procesamiento|La retención depende del almacén en que esté la información|La profundidad va de lo superficial a lo semántico|El procesamiento profundo conecta lo nuevo con lo sabido|El marco sostiene que la retención depende de la profundidad del procesamiento, no del almacén."
    ],
    seq: [
      "Niveles de procesamiento de menor a mayor profundidad|Estructural>Fonológico>Semántico"
    ],
    cls: [
      "Tipo de repaso|Mantenimiento: tipo I; mismo nivel; repetir un código hasta teclearlo|Elaborativo: tipo II; relacionar con otras ideas; explicar con ejemplos propios"
    ] },
  { t: "Críticas: K. F. y el procesamiento apropiado para la transferencia",
    tip: "K. F. (Shallice y Warrington, 1970) tenía muy reducida la amplitud verbal inmediata y aprendía a largo plazo con normalidad, así que el ACP no puede ser paso obligatorio. Su déficit verbal y auditivo sugería varios componentes, lo que llevó a la memoria de trabajo. A los niveles de procesamiento se les critica la circularidad, y Morris, Bransford y Franks (1977) mostraron que el mejor procesamiento depende de la prueba.",
    v: [
      "K. F.=Paciente con amplitud verbal inmediata muy reducida y aprendizaje a largo plazo normal",
      "Shallice y Warrington (1970)=Autores que describieron el caso del paciente con ACP dañado",
      "Circularidad=Definir lo profundo por el buen recuerdo y explicar el recuerdo por la profundidad",
      "Transferencia apropiada=Mejor recuerdo cuando los procesos al codificar coinciden con los de la prueba",
      "Prueba de rimas=Reconocer palabras que riman con las estudiadas",
      "Morris, Bransford y Franks=Mostraron en 1977 que la ventaja semántica depende del tipo de prueba",
      "Memoria de trabajo=Modelo de Baddeley y Hitch (1974) con varios componentes a corto plazo",
      "Repaso sin transferencia=Mantener una palabra más tiempo apenas mejora su recuerdo posterior"
    ],
    g: [
      "El déficit de K. F. era sobre todo verbal y ___.|auditivo|visual|espacial",
      "Con una prueba de reconocimiento estándar, ganaba la codificación ___.|semántica|fonológica|estructural",
      "Con una prueba de rimas, ganaba la codificación ___.|fonológica|semántica|estructural",
      "A los niveles de procesamiento se les criticó la falta de una medida ___ de la profundidad.|independiente|fisiológica|semántica",
      "Del modelo modal se abandona la idea de un ACP ___ y de paso obligatorio.|unitario|limitado|acústico"
    ],
    tf: [
      "K. F. tenía dañada la memoria a largo plazo y conservada la memoria inmediata.|F|Es al revés: amplitud verbal inmediata muy reducida y aprendizaje a largo plazo normal, el patrón inverso al de H. M.",
      "Según Morris, Bransford y Franks, el procesamiento semántico es siempre superior al fonológico.|F|Depende de la prueba: con una prueba de rimas gana la codificación fonológica.",
      "Del modelo modal se conserva la distinción entre memoria a corto y a largo plazo.|V",
      "El caso K. F. contribuyó a la propuesta del modelo de memoria de trabajo de Baddeley y Hitch.|V"
    ],
    q: [
      "Un estudiante que se examinará resolviendo problemas duda entre memorizar definiciones o practicar con problemas. Según el procesamiento apropiado para la transferencia, ¿qué le conviene?|Practicar resolviendo problemas|Memorizar las definiciones a fondo|Elaborar el significado de cada término|El recuerdo es mejor cuando los procesos usados al estudiar coinciden con los que exige la prueba.",
      "¿Qué supuesto del modelo modal contradice K. F.?|Que el ACP sea paso obligatorio al ALP|Que el ALP tenga capacidad ilimitada|Que existan registros sensoriales|Si el ACP fuera la puerta obligatoria, un ACP tan dañado impediría a K. F. aprender a largo plazo.",
      "Un conductor repite muchas veces las indicaciones del navegador y al día siguiente las ha olvidado. ¿Qué crítica ilustra?|El repaso no garantiza la transferencia|La profundidad no se mide de forma independiente|La memoria a corto plazo tiene varios componentes|El repaso de mantenimiento apenas mejora el recuerdo posterior: importa el tipo de procesamiento, no la cantidad.",
      "¿Por qué se acusa de circular al marco de los niveles de procesamiento?|Define la profundidad por el propio recuerdo|Ignora la influencia de la prueba de rimas|Atribuye el olvido a un almacén concreto|Sin una medida independiente, lo profundo se define como lo que se recuerda mejor y luego se usa para explicarlo."
    ],
    inc: [
      "Sobre el balance de las críticas|La eficacia de la codificación no depende de la prueba|Se conserva la importancia de la elaboración y el significado|Se abandona la idea de un ACP unitario y de paso obligatorio|Se añade justo lo contrario: la eficacia de la codificación depende de cómo se va a recuperar."
    ],
    seq: [],
    cls: [
      "Crítica|Al modelo modal: caso K. F.; repaso sin transferencia|A los niveles de procesamiento: circularidad; procesamiento apropiado para la transferencia"
    ] }
] },
{ n: 4, t: "Memorias sensoriales y memoria a corto plazo", cap: 2, pir: "media", mods: [
  { t: "La memoria icónica (Sperling)",
    tip: "Sperling (1960) presentó unos 50 ms una matriz de 12 letras. Con informe total se decían 4 o 5. Con informe parcial, un tono señalaba la fila y se recordaban unas 3 de 4, de modo que había unas 9 de 12 disponibles. Si el tono se demoraba alrededor de 1 s, la ventaja desaparecía. El icono tiene gran capacidad, dura menos de un segundo, es precategorial y lo borra una máscara.",
    v: [
      "Memoria icónica=Registro sensorial visual de gran capacidad y duración inferior a un segundo",
      "Informe total=Decir todas las letras posibles de la matriz",
      "Informe parcial=Informar solo de la fila que señala un tono tras el estímulo",
      "Ventaja del informe parcial=Unas 9 letras disponibles inferidas frente a las 4 o 5 que se dicen",
      "Formato precategorial=Conserva rasgos físicos como posición y forma, no significados",
      "Máscara=Estímulo visual posterior que borra el contenido del icono",
      "Persistencia visible=El estímulo se sigue viendo un instante tras desaparecer",
      "Persistencia informativa=La información sigue disponible para informar de ella"
    ],
    g: [
      "En el experimento de Sperling, la matriz se presentaba durante unos ___.|50 ms|500 ms|5 ms",
      "Un tono ___ indicaba que había que informar de la fila inferior.|grave|agudo|medio",
      "Con una demora del tono de alrededor de ___, la ventaja del informe parcial desaparecía.|1 s|5 s|100 ms",
      "La matriz de Sperling tenía 12 letras en tres filas de ___.|cuatro|tres|seis",
      "El término memoria icónica lo acuñó ___ en 1967.|Neisser|Sperling|Miller"
    ],
    tf: [
      "Cuando la señal indicaba una categoría, como letras frente a números, la ventaja del informe parcial se mantenía.|F|Desaparecía: el icono es precategorial y conserva posición y forma, no significados.",
      "El icono da continuidad a la percepción entre fijaciones oculares.|V",
      "Con informe parcial se infiere que había disponibles unas 9 de las 12 letras.|V",
      "Las 4 o 5 letras del informe total reflejan la capacidad de la memoria icónica.|F|Reflejan lo que se alcanza a informar. El informe parcial muestra que había unas 9 letras disponibles."
    ],
    q: [
      "En una réplica de Sperling, el tono que indica la fila suena un segundo después de la matriz. ¿Qué rendimiento cabe esperar?|Similar al del informe total|Unas 3 de 4 letras por fila|Superior al informe parcial inmediato|Con una demora de alrededor de 1 s, el icono se ha desvanecido y el rendimiento cae al nivel del informe total.",
      "¿Qué propiedad del icono demuestra que una máscara visual borre su contenido?|Su fragilidad|Su gran capacidad|Su formato precategorial|Un estímulo visual presentado justo después borra el icono: es un registro frágil.",
      "¿Qué tipo de persistencia mide el procedimiento de informe parcial?|La informativa|La visible|La categorial|Mide la información disponible para informar. La persistencia visible es seguir «viendo» el estímulo un instante.",
      "¿Qué objeción se ha planteado al concepto de memoria icónica?|Que no es un almacén único|Que su capacidad es de 4 elementos|Que dura varios segundos|Se distingue entre persistencia visible e informativa. También se cuestiona su validez ecológica."
    ],
    inc: [
      "Sobre la memoria icónica|Codifica las letras por su categoría|Tiene una capacidad muy grande|Su duración es inferior a un segundo|Su formato es precategorial: conserva posición y forma, no significados."
    ],
    seq: [
      "Procedimiento de informe parcial de Sperling|Presentar la matriz unos 50 ms>Retirar la matriz>Sonar el tono que señala la fila>Informar de la fila indicada"
    ],
    cls: [
      "Procedimiento de Sperling|Informe total: todas las letras posibles; unas 4 o 5 letras|Informe parcial: tono que señala la fila; unas 9 letras disponibles"
    ] },
  { t: "La memoria ecoica",
    tip: "La memoria ecoica, también nombrada por Neisser (1967), es el registro auditivo. Como el sonido se extiende en el tiempo, hay que conservar los primeros sonidos mientras llegan los últimos. Darwin, Turvey y Crowder (1972) hallaron una ventaja del informe parcial menor que la visual, pero que se mantenía con demoras más largas: dura unos pocos segundos. Explica también la ventaja de oír los últimos elementos de una lista.",
    v: [
      "Memoria ecoica=Registro sensorial auditivo de unos pocos segundos que ayuda a comprender el habla",
      "Darwin, Turvey y Crowder=Versión auditiva del informe parcial con tres localizaciones (1972)",
      "Moray, Bates y Barnett=Mensajes simultáneos desde varias posiciones con señal visual (1965)",
      "Señal visual=Indicaba qué localización auditiva había que informar",
      "Estímulo auditivo=Se extiende en el tiempo y llega de forma secuencial",
      "Ventaja auditiva final=Los últimos elementos se recuerdan mejor si se oyen que si se leen",
      "Palabra irrelevante final=Sonido añadido al final de la lista que reduce la ventaja auditiva",
      "Potenciales evocados=Respuestas cerebrales automáticas ante sonidos que se desvían de los anteriores"
    ],
    g: [
      "La memoria ecoica dura del orden de unos pocos ___.|segundos|milisegundos|minutos",
      "En el estudio de Darwin, Turvey y Crowder, una de las secuencias parecía venir del ___.|centro|fondo|techo",
      "Comparada con la visual, la ventaja del informe parcial auditivo fue ___.|menor|mayor|idéntica",
      "Los estímulos auditivos se extienden en el ___ y llegan de forma secuencial.|tiempo|espacio|campo",
      "Una palabra irrelevante dicha al final de la lista ___ la ventaja de la presentación auditiva.|reduce|aumenta|mantiene"
    ],
    tf: [
      "La memoria ecoica dura menos que la icónica porque los sonidos se procesan más deprisa.|F|Dura más, unos pocos segundos, porque el habla necesita más tiempo para integrarse que una imagen.",
      "En recuerdo inmediato, los últimos elementos se recuerdan mejor si se oyen que si se leen.|V",
      "La ventaja del informe parcial auditivo se mantenía con demoras más largas que la visual.|V",
      "En el estudio de Darwin, Turvey y Crowder, un tono indicaba qué localización había que informar.|F|La señal era visual. El tono era la señal en la versión visual de Sperling."
    ],
    q: [
      "Mientras mira el móvil, Lucía responde «¿qué?» a una pregunta, pero la contesta antes de que se la repitan. ¿Qué lo explica?|La memoria ecoica|La memoria icónica|La memoria secundaria|La pregunta seguía disponible unos segundos en el registro auditivo y la atención la recuperó a tiempo.",
      "¿Qué función principal se atribuye a la memoria ecoica?|Integrar sonidos que llegan en secuencia|Dar continuidad entre fijaciones oculares|Guardar sonidos de forma permanente|Permite comprender el habla. La continuidad entre fijaciones es función del icono.",
      "¿Por qué una palabra irrelevante dicha al final de una lista oída empeora el recuerdo de los últimos elementos?|Porque el nuevo sonido ocupa el registro|Porque interfiere con la memoria a largo plazo|Porque impide el repaso de los primeros|El eco de los últimos elementos ya no está disponible, porque el sonido añadido ocupa el registro auditivo.",
      "¿Qué datos electrofisiológicos apoyan la existencia de un registro auditivo breve?|Respuestas ante sonidos que se desvían|Activación del hipocampo al recordar|Respuestas solo ante sonidos muy intensos|Los potenciales evocados muestran respuestas automáticas ante sonidos que se desvían de los inmediatamente anteriores."
    ],
    inc: [
      "Sobre la memoria ecoica|Su ventaja de informe parcial supera a la visual|Dura más que la memoria icónica, unos segundos|Ayuda a comprender el habla que llega en secuencia|La ventaja del informe parcial auditivo es menor que la visual, aunque se mantiene con demoras más largas."
    ],
    seq: [],
    cls: [
      "Registro sensorial|Icónico: visual; menos de 1 s; tono de Sperling|Ecoico: auditivo; unos pocos segundos; señal visual de Darwin, Turvey y Crowder"
    ] },
  { t: "La amplitud: de Miller a Cowan",
    tip: "La amplitud de memoria es el máximo de elementos que se repiten en orden correcto tras oírlos. Miller (1956) la situó en 7 ± 2, pero destacó que el límite se aplica a fragmentos, y el agrupamiento depende del conocimiento previo. Cowan (2001), controlando agrupamiento y repaso, estimó unos 4 ± 1 fragmentos y propuso que la memoria a corto plazo es la parte activada de la memoria a largo plazo.",
    v: [
      "Amplitud de memoria=Máximo de elementos que se repiten en orden correcto tras una presentación",
      "Amplitud de dígitos=Series cada vez más largas hasta que la persona falla de forma sistemática",
      "Fragmento=Unidad con sentido en la que se agrupa la información (chunk)",
      "Agrupamiento=Recodificar elementos en unidades mayores para superar el límite",
      "Miller (1956)=Estimó la memoria inmediata en 7 ± 2 elementos",
      "Cowan (2001)=Estimó unos 4 ± 1 fragmentos al controlar agrupamiento y repaso",
      "Foco atencional=Mantiene unos cuatro elementos accesibles a la vez",
      "Procesos integrados=Modelo en que la MCP es la parte activada de la memoria a largo plazo"
    ],
    g: [
      "Las siglas «ONU, DGT, IVA» son nueve letras, pero solo tres ___.|fragmentos|sílabas|códigos",
      "Cowan controló el repaso, por ejemplo, pidiendo que se ___ una palabra en voz alta.|repita|lea|escriba",
      "Un ajedrecista experto agrupa las posiciones gracias a su memoria a ___ plazo.|largo|corto|medio",
      "La cifra de Miller se considera hoy ___, aunque útil para describir la amplitud de dígitos.|histórica|exacta|refutada",
      "Según Cowan, un foco ___ mantiene unos cuatro elementos accesibles a la vez.|atencional|sensorial|fonológico"
    ],
    tf: [
      "La memoria a corto plazo guarda exactamente siete elementos.|F|El 7 ± 2 describe la amplitud con agrupamiento y repaso. Si se controlan, la capacidad ronda los 4 ± 1 fragmentos.",
      "El propio Miller destacó que el límite de capacidad se aplica a fragmentos y no a elementos sueltos.|V",
      "Como se puede agrupar y repasar durante la tarea, la amplitud observada no refleja la capacidad pura del sistema.|V",
      "Que la memoria a corto plazo sea la parte activada de la memoria a largo plazo es hoy un hecho consensuado.|F|Es la propuesta de Cowan (2001), pero sigue en debate si es un almacén separado o la parte activada del ALP."
    ],
    q: [
      "Para su dueño, la contraseña «Valencia2009» ocupa apenas dos unidades en la memoria a corto plazo, aunque tenga doce caracteres. ¿Qué lo explica?|El agrupamiento en fragmentos|La persistencia ecoica de la clave|El repaso de mantenimiento|Recodificar los caracteres en unidades con sentido permite meter mucha más información en el mismo espacio.",
      "¿Por qué la estimación de Cowan es menor que la de Miller?|Controla el agrupamiento y el repaso|Usa material visual en lugar de verbal|Mide la memoria icónica, no la MCP|El 7 ± 2 incluye agrupamiento y repaso. Al impedirlos o controlarlos, el límite real ronda los 4 ± 1 fragmentos.",
      "¿Qué concepción de la capacidad se debate frente a la de un número fijo de casillas?|Un recurso continuo que se reparte|Un registro sensorial ilimitado|Una red de pares asociados|Se discute si la capacidad es un número fijo de casillas o un recurso continuo que se reparte.",
      "Una persona repite sin error series de 7 dígitos, pero falla de forma sistemática con 8. ¿Cuál es su amplitud de dígitos?|7|8|4|La amplitud es el máximo de elementos repetidos en orden correcto. El 4 ± 1 de Cowan es una estimación de capacidad, no esta medida."
    ],
    inc: [
      "Sobre la capacidad de la memoria a corto plazo|El 7 ± 2 de Miller es el límite actual aceptado|El agrupamiento depende del conocimiento previo|Miller destacó la importancia de los fragmentos|Dar el 7 ± 2 como límite actual es una trampa típica: si se controlan agrupamiento y repaso, ronda 4 ± 1."
    ],
    seq: [],
    cls: [
      "Estimación de capacidad|Miller (1956): 7 ± 2 elementos; agrupamiento y repaso posibles; amplitud observada|Cowan (2001): 4 ± 1 fragmentos; agrupamiento y repaso controlados; foco atencional"
    ] },
  { t: "Peterson y Peterson y el efecto de posición serial",
    tip: "Peterson y Peterson (1959) presentaban un trigrama y hacían contar hacia atrás de tres en tres. Hacia los 18 s el recuerdo era muy bajo y lo atribuyeron al decaimiento. Keppel y Underwood (1962) vieron que en el primer ensayo apenas había olvido, lo que apunta a interferencia proactiva, y Wickens mostró su liberación al cambiar de categoría. En la curva de posición serial, la primacía depende de la memoria a largo plazo y la recencia, de la de corto plazo.",
    v: [
      "Trigrama de consonantes=Tres consonantes sin sentido, como «KZB»",
      "Tarea distractora=Contar hacia atrás de tres en tres para impedir el repaso",
      "Keppel y Underwood (1962)=Hallaron que en el primer ensayo de Peterson apenas había olvido",
      "Liberación de la interferencia=Mejora del recuerdo al cambiar la categoría del material",
      "Recuerdo libre=Recordar los elementos de una lista en cualquier orden",
      "Efecto de primacía=Buen recuerdo de los primeros elementos, ligado al repaso y la MLP",
      "Efecto de recencia=Mejor recuerdo inmediato de los últimos elementos, atribuido a la MCP",
      "Glanzer y Cunitz (1966)=Mostraron una doble disociación experimental entre primacía y recencia"
    ],
    g: [
      "En el paradigma de Peterson, hacia los ___ el recuerdo era ya muy bajo.|18 s|3 s|60 s",
      "Peterson y Peterson interpretaron el olvido rápido como ___.|decaimiento|interferencia|desplazamiento",
      "Pasar de nombres de frutas a nombres de profesiones produce una ___ de la interferencia proactiva.|liberación|acumulación|inversión",
      "Presentar la lista más despacio mejora la ___.|primacía|recencia|interferencia",
      "Los pacientes amnésicos suelen mostrar una recencia normal y una primacía ___.|reducida|normal|aumentada"
    ],
    tf: [
      "La primacía se atribuye a la memoria a corto plazo, y la recencia, a la de largo plazo.|F|Es al revés: la primacía se relaciona con el repaso y la memoria a largo plazo, y la recencia, con la de corto plazo.",
      "La liberación de la interferencia proactiva muestra que la memoria a corto plazo usa información semántica.|V",
      "Una demora de unos 30 s con tarea distractora elimina la recencia y deja intacta la primacía.|V",
      "En el paradigma de Peterson y Peterson, el olvido era ya máximo en el primer ensayo.|F|En el primer ensayo apenas había olvido. Aparecía en los siguientes, por interferencia proactiva."
    ],
    q: [
      "Tras varios ensayos recordando nombres de frutas, el recuerdo de una participante ha empeorado. En el siguiente ensayo se presentan nombres de profesiones. ¿Qué cabe esperar?|Que el recuerdo se recupere|Que el recuerdo empeore más|Que el recuerdo no cambie|Es la liberación de la interferencia proactiva descrita por Wickens: al cambiar de categoría, el recuerdo mejora.",
      "¿Qué dato de Keppel y Underwood cuestionó la interpretación de Peterson y Peterson?|Apenas había olvido en el primer ensayo|El olvido crecía con la velocidad de la serie|La tarea distractora no impedía el repaso|Sin ensayos previos no hay interferencia proactiva, y tampoco olvido. El decaimiento no explica ese patrón.",
      "¿Qué manipulación afecta solo a la primacía?|Presentar la lista más despacio|Demorar el recuerdo unos 30 s|Pedir el recuerdo inmediato|Una presentación más lenta permite más repaso y mejora la primacía sin cambiar la recencia.",
      "Quien hace la compra sin lista recuerda lo primero que pensó comprar y lo último que le dijeron por teléfono. ¿Qué olvidará con más probabilidad?|Lo intermedio|Lo primero|Lo último|Es la curva de posición serial: primacía y recencia dejan en peor lugar los elementos intermedios."
    ],
    inc: [
      "Sobre la curva de posición serial|La primacía desaparece con una demora de 30 s|La recencia desaparece con una demora de 30 s|La curva de recuerdo libre tiene forma de U|Con una demora de unos 30 s con tarea distractora desaparece la recencia, y la primacía se mantiene."
    ],
    seq: [
      "Ensayo del paradigma de Peterson y Peterson|Presentar un trigrama de consonantes>Dar un número de tres cifras>Contar hacia atrás de tres en tres>Recordar el trigrama"
    ],
    cls: [
      "Efecto de posición serial|Primacía: memoria a largo plazo; más repaso; reducida en amnésicos|Recencia: memoria a corto plazo; prueba inmediata; normal en amnésicos"
    ] }
] }
);

// SAIMAP Psicología · Memoria · Unidades 5–8
window.COURSE.units.push(
{ n: 5, t: "La memoria de trabajo", cap: 2, pir: "media", mods: [
  { t: "El modelo de Baddeley y Hitch",
    tip: "Baddeley y Hitch (1974) no preguntaron cuánto cabe en la memoria a corto plazo, sino para qué sirve, y la reconcibieron como un espacio de trabajo que mantiene información activa mientras se usa para comprender, razonar o aprender. Les empujaron los pacientes como K. F., con amplitud verbal muy reducida y aprendizaje a largo plazo normal, y los experimentos de doble tarea, en los que retener dígitos solo enlentecía algo el razonamiento. El modelo tuvo tres componentes y Baddeley (2000) añadió un cuarto, el retén episódico.",
    v: [
      "Memoria de trabajo=Sistema que mantiene y manipula información temporal al servicio de tareas complejas",
      "Memoria operativa=Otro nombre del espacio de trabajo propuesto por Baddeley y Hitch",
      "Doble tarea=Método que infiere componentes compartidos según cuánto interfieren dos tareas",
      "Paciente K. F.=Amplitud verbal muy reducida con aprendizaje a largo plazo normal",
      "Shallice y Warrington (1970)=Autores que describieron al paciente K. F.",
      "Baddeley y Hitch (1974)=Autores que sustituyeron el almacén a corto plazo unitario por varios componentes",
      "Baddeley (2000)=Trabajo que añadió el retén episódico al modelo",
      "Memoria a corto plazo=Para muchos autores, simple mantenimiento de información sin procesarla"
    ],
    g: [
      "Baddeley y Hitch no preguntaron cuánto cabe en el almacén a corto plazo, sino para qué ___.|sirve|dura|existe",
      "En los experimentos de doble tarea, retener dígitos produjo en el razonamiento un ___ moderado.|enlentecimiento|aumento de errores|bloqueo",
      "Si dos tareas simultáneas apenas interfieren entre sí, se infiere que usan componentes ___.|distintos|compartidos|idénticos",
      "El paciente K. F. tenía una amplitud ___ muy reducida.|verbal|espacial|visual",
      "Para muchos autores, repetir dígitos al revés es una tarea de memoria de ___.|trabajo|corto plazo|largo plazo"
    ],
    tf: [
      "Los pacientes como K. F. cuestionaban que un único almacén a corto plazo fuera la puerta obligada de la memoria a largo plazo.|V",
      "En los experimentos de Baddeley y Hitch, la carga de dígitos más alta hundía el razonamiento verbal.|F|Solo hubo un enlentecimiento moderado con pocos errores añadidos: razonar no dependía del recurso que retenía los dígitos.",
      "El modelo multicomponente de la memoria de trabajo fue propuesto por Atkinson y Shiffrin.|F|Es de Baddeley y Hitch (1974). Atkinson y Shiffrin propusieron el modelo modal, con un almacén a corto plazo unitario.",
      "El modelo de Baddeley no niega el almacenamiento breve: lo divide en componentes especializados y le añade un sistema de control.|V"
    ],
    q: [
      "Una participante retiene seis dígitos mientras resuelve problemas de razonamiento verbal y solo se vuelve algo más lenta. Según la lógica de la doble tarea…|ambas tareas usan recursos en buena parte distintos|ambas tareas dependen del mismo almacén único|la carga de dígitos era demasiado pequeña|Si dos tareas apenas interfieren, se infiere que no comparten el mismo componente. Fue la conclusión de Baddeley y Hitch.",
      "¿Por qué el caso de K. F. cuestionaba el modelo modal?|Aprendía a largo plazo con una amplitud verbal mínima|Tenía amplitud normal pero no aprendía a largo plazo|Perdía recuerdos antiguos pero conservaba los recientes|Si un almacén a corto plazo único fuera la puerta de la MLP, su daño debería impedir el aprendizaje duradero.",
      "¿Qué componente añadió Baddeley al modelo en el año 2000?|El retén episódico|El ejecutivo central|La agenda visoespacial|El modelo de 1974 tenía bucle fonológico, agenda visoespacial y ejecutivo central. El retén episódico llegó en 2000.",
      "Según la distinción terminológica más habitual, ¿qué tarea mide memoria de trabajo y no solo memoria a corto plazo?|Repetir una serie de dígitos al revés|Repetir una serie de dígitos en orden|Repetir una serie de letras en orden|La memoria de trabajo implica mantenimiento más procesamiento. Repetir en el mismo orden es mantenimiento simple."
    ],
    inc: [
      "Sobre el modelo de Baddeley y Hitch|El ejecutivo central es el almacén principal del modelo|La doble tarea es su herramienta metodológica central|Los subsistemas se comunican con la memoria a largo plazo|El ejecutivo central dirige y coordina, pero no almacena. Almacenan el bucle, la agenda y el retén episódico."
    ],
    seq: [],
    cls: [
      "Origen del componente|Modelo inicial de 1974: bucle fonológico; agenda visoespacial; ejecutivo central|Añadido en 2000: retén episódico"
    ] },
  { t: "El bucle fonológico y sus efectos",
    tip: "El bucle fonológico tiene un almacén fonológico, cuyas huellas se desvanecen en un par de segundos, y un proceso de control articulatorio que repasa lo almacenado y recodifica en sonido el material escrito, mientras que lo oído accede directamente al almacén. Lo revelan cuatro efectos: similitud fonológica, longitud de la palabra, supresión articulatoria y habla no atendida. La supresión elimina el efecto de longitud y, solo con presentación visual, el de similitud. El bucle parece crucial para aprender vocabulario nuevo.",
    v: [
      "Almacén fonológico=Guarda la información en código sonoro y sus huellas duran un par de segundos",
      "Control articulatorio=Voz interior que repasa lo almacenado y recodifica lo escrito en sonido",
      "Similitud fonológica=Peor recuerdo serial de elementos que suenan parecido (Conrad, 1964)",
      "Efecto de longitud=Se recuerdan menos palabras largas que cortas por su tiempo de articulación",
      "Supresión articulatoria=Repetir algo irrelevante en voz alta para bloquear el repaso subvocal",
      "Habla no atendida=Habla de fondo ignorada que empeora el recuerdo serial visual",
      "Recodificación fonológica=Traducción del material escrito a código sonoro para que entre en el almacén",
      "Aprendizaje de vocabulario=Función crucial del bucle según Baddeley, Gathercole y Papagno (1998)"
    ],
    g: [
      "La amplitud equivale aproximadamente a lo que se puede articular en unos ___.|dos segundos|diez segundos|medio segundo",
      "El efecto de longitud depende del tiempo de pronunciación más que del número de ___.|letras|acepciones|categorías",
      "Según Baddeley (1966), la semejanza de ___ apenas afecta al recuerdo inmediato.|significado|sonido|pronunciación",
      "El efecto del habla no atendida aparece incluso con habla en un idioma ___.|desconocido|materno|cercano",
      "Lo oído entra en el almacén fonológico de forma ___, sin pasar por la articulación.|directa|diferida|voluntaria"
    ],
    tf: [
      "Con presentación auditiva, la supresión articulatoria elimina también el efecto de similitud fonológica.|F|Lo oído entra directamente en el almacén fonológico, así que la similitud se mantiene. Solo desaparece con presentación visual.",
      "La supresión articulatoria hace desaparecer el efecto de longitud de la palabra.|V",
      "El ruido sin estructura perjudica el recuerdo serial tanto como el habla no atendida.|F|El ruido sin estructura perjudica mucho menos: el habla, aunque se ignore, tiene acceso obligatorio al almacén fonológico.",
      "El perfil de K. F. se interpreta como un daño selectivo del almacén fonológico.|V"
    ],
    q: [
      "Un participante lee series de letras mientras repite «la, la, la». ¿Qué ocurre con los efectos del bucle?|Desaparecen el de longitud y el de similitud|Desaparece el de longitud y se mantiene el de similitud|Se mantienen ambos, aunque baja la amplitud|Sin repaso no hay efecto de longitud, y lo escrito no se recodifica en sonido, así que la similitud deja de influir.",
      "Las series B, C, D, P, T se recuerdan peor en orden que F, K, Q, R, X, incluso escritas. ¿Qué muestra?|Que el almacén trabaja con un código sonoro|Que el almacén trabaja con un código visual|Que el almacén trabaja con un código semántico|Es el efecto de similitud fonológica (Conrad, 1964): los errores son confusiones entre elementos que suenan igual.",
      "Una estudiante prepara Estadística con una emisora hablada de fondo y rinde peor que con ruido de tráfico. ¿Qué efecto lo explica?|El del habla no atendida|El de la supresión articulatoria|El de la similitud fonológica|El habla, aunque se ignore, tiene acceso obligatorio al almacén fonológico. El ruido sin estructura perjudica mucho menos.",
      "¿Por qué se recuerdan menos palabras largas que cortas?|El repaso tarda más y las primeras se desvanecen|Tienen más letras y ocupan más casillas del almacén|Su significado es más difícil de procesar|Depende del tiempo de pronunciación, no del número de letras: el repaso es más lento y las huellas se desvanecen antes."
    ],
    inc: [
      "Sobre el bucle fonológico|El material escrito accede directamente al almacén fonológico|El proceso articulatorio repasa lo almacenado|Las huellas del almacén se desvanecen en un par de segundos|Lo que accede directamente es lo oído. Lo escrito debe recodificarse en sonido mediante el proceso de control articulatorio."
    ],
    seq: [],
    cls: [
      "Parte del bucle fonológico|Almacén fonológico: código sonoro; huellas de un par de segundos; acceso directo de lo oído|Control articulatorio: repaso subvocal; recodificación de lo escrito; bloqueado por la supresión"
    ] },
  { t: "La agenda visoespacial, el ejecutivo central y el retén episódico",
    tip: "La agenda visoespacial mantiene y manipula formas, colores y posiciones. Logie la divide en una caché visual (forma y color) y un escriba interno (secuencias de posiciones y movimientos). El ejecutivo central es un sistema de control atencional, relacionado con el sistema atencional supervisor de Norman y Shallice, que focaliza, divide y cambia la atención y conecta con la MLP, pero no almacena. El retén episódico (Baddeley, 2000) es un almacén multimodal de unos cuatro fragmentos que integra información en episodios.",
    v: [
      "Agenda visoespacial=Componente que mantiene y manipula información visual y espacial",
      "Caché visual=Almacén visual pasivo que guarda la forma y el color",
      "Escriba interno=Mecanismo de repaso de secuencias de posiciones y movimientos",
      "Cubos de Corsi=Tocar en orden bloques dispersos, prueba de la parte espacial de la agenda",
      "Ejecutivo central=Sistema de control atencional que coordina los subsistemas sin almacenar",
      "Sistema atencional supervisor=Control de Norman y Shallice (1986) para cuando las rutinas no bastan",
      "Retén episódico=Almacén multimodal de unos cuatro fragmentos que integra información en episodios",
      "Generación aleatoria=Decir números al azar evitando secuencias rutinarias"
    ],
    g: [
      "Logie dividió la agenda en una caché visual y un ___ interno.|escriba|bucle|foco",
      "Mover la mano siguiendo un recorrido interfiere sobre todo con la retención de ___.|posiciones|formas|colores",
      "Miyake et al. (2000) separaron tres funciones ejecutivas: actualización, inhibición y ___.|cambio|repaso|codificación",
      "El retén episódico tiene una capacidad limitada de unos ___ fragmentos.|cuatro|siete|dos",
      "Con palabras sueltas la amplitud ronda las cinco o seis, pero una frase con sentido de unas ___ palabras se recuerda sin esfuerzo.|quince|diez|treinta"
    ],
    tf: [
      "Se puede repetir una lista de palabras mientras se recuerda una ruta, pero cuesta mucho recordar dos rutas a la vez.|V",
      "El ejecutivo central almacena temporalmente la información que coordina.|F|Es un sistema de control atencional que no almacena. Almacenan el bucle, la agenda y el retén episódico.",
      "El retén episódico se considera accesible a la conciencia.|V",
      "Mirar imágenes irrelevantes interfiere sobre todo con la retención de secuencias de posiciones.|F|Interfiere sobre todo con la retención de formas. Mover la mano siguiendo un recorrido es lo que afecta a las posiciones."
    ],
    q: [
      "¿Qué tarea mide sobre todo la parte espacial de la agenda visoespacial?|Los cubos de Corsi|La memoria de patrones visuales|La generación aleatoria|Tocar en orden bloques dispersos exige retener secuencias de posiciones. Los patrones visuales miden la parte visual.",
      "Al decir números al azar, una persona acaba produciendo «1, 2, 3». ¿Qué componente no ha frenado la rutina?|El ejecutivo central|El bucle fonológico|El retén episódico|La generación aleatoria exige vigilar e inhibir secuencias rutinarias, una función de control propia del ejecutivo central.",
      "¿Qué problema llevó a añadir el retén episódico?|Integrar sonido e imagen de una palabra en un solo objeto|Explicar por qué las palabras largas se recuerdan peor|Explicar por qué el habla de fondo perjudica el recuerdo|Hacía falta un lugar donde integrar información de varias fuentes y combinarla con el conocimiento a largo plazo.",
      "¿Con qué propuesta relacionó Baddeley el ejecutivo central?|El sistema supervisor de Norman y Shallice|Los procesos integrados de Cowan|El modelo modal de Atkinson y Shiffrin|El sistema atencional supervisor interviene cuando las rutinas automáticas no bastan: situaciones nuevas, peligrosas o que exigen frenar un hábito."
    ],
    inc: [
      "Sobre la agenda, el ejecutivo y el retén|El ejecutivo central guarda unos cuatro fragmentos|La caché visual guarda la forma y el color de los objetos|El retén episódico integra información de varias fuentes|Unos cuatro fragmentos es la capacidad del retén episódico. El ejecutivo central no almacena información."
    ],
    seq: [],
    cls: [
      "Función en el modelo|Almacena: bucle fonológico; agenda visoespacial; retén episódico|Solo controla: ejecutivo central"
    ] },
  { t: "Capacidad, modelos alternativos y entrenamiento",
    tip: "Las tareas de amplitud simple miden sobre todo almacenamiento, y las de amplitud compleja, como la de amplitud lectora de Daneman y Carpenter (1980), combinan almacenamiento y procesamiento y predicen mejor la comprensión lectora y el razonamiento. La capacidad ronda los cuatro fragmentos (Cowan, 2001) y se discute si funciona como casillas o como recurso continuo. Para Cowan, la memoria de trabajo es la parte activada de la MLP con un foco atencional. El entrenamiento mejora lo entrenado, pero no muestra transferencia lejana convincente.",
    v: [
      "Amplitud simple=Tarea de repetir elementos en orden que mide sobre todo almacenamiento",
      "Amplitud compleja=Tarea que combina almacenamiento y procesamiento de información",
      "Amplitud lectora=Leer frases en voz alta y recordar al final la última palabra de cada una",
      "Enfoque de casillas=Número fijo de huecos: los elementos sobrantes se pierden por completo",
      "Recursos continuos=Recurso repartido entre elementos: con más, menos precisión en cada uno",
      "Procesos integrados=Modelo de Cowan en que la memoria de trabajo es la parte activada de la MLP",
      "Foco atencional=Mantiene en primer plano unos cuatro elementos en el modelo de Cowan",
      "Control activo=Grupo de comparación que realiza otra actividad en lugar de no hacer nada"
    ],
    g: [
      "Cowan (2001) estimó la capacidad en torno a ___ fragmentos cuando se controlan agrupamiento y repaso.|cuatro|siete|nueve",
      "En la tarea de amplitud lectora de Daneman y Carpenter, se recuerda la ___ palabra de cada frase.|última|primera|central",
      "Para Cowan, la diferencia entre memoria a corto y a largo plazo es de estado de ___, no de lugar.|activación|consolidación|codificación",
      "El metaanálisis de Melby-Lervåg y Hulme (2013) reunió ___ estudios.|23|12|48",
      "Según el enfoque de recursos continuos, con más elementos cada uno se recuerda con menos ___.|precisión|frecuencia|rapidez"
    ],
    tf: [
      "Las puntuaciones en amplitud compleja predicen la comprensión lectora mejor que las de amplitud simple.|V",
      "Los datos han dado una victoria clara al enfoque de casillas frente al de recursos continuos.|F|Ninguno ha obtenido una victoria clara y existen propuestas mixtas. Es una cuestión en debate.",
      "Melby-Lervåg y Hulme (2013) hallaron transferencia generalizable del entrenamiento a la comprensión lectora.|F|Hallaron mejoras a corto plazo en lo entrenado y en tareas muy parecidas, pero no transferencia generalizable.",
      "En el modelo de Cowan, la memoria de trabajo es la parte activada de la memoria a largo plazo.|V"
    ],
    q: [
      "Un niño entrena seis semanas con una aplicación de secuencias de casillas y mejora mucho en ella. ¿Qué cabe esperar en su comprensión lectora?|Que no haya transferencia convincente|Que mejore tanto como en la aplicación|Que mejore al cabo de unos meses|Las mejoras se limitan a lo entrenado y a tareas muy parecidas. No hay transferencia lejana convincente frente a controles activos.",
      "Por encima del límite de capacidad, los elementos sobrantes se pierden por completo. ¿Qué enfoque lo predice?|El de casillas|El de recursos continuos|El de procesos integrados|En el enfoque de casillas cada elemento ocupa un hueco o no entra. El de recursos predice una pérdida gradual de precisión.",
      "¿Por qué es importante el control activo en los estudios de entrenamiento?|Descarta que la mejora se deba a hacer cualquier actividad|Permite entrenar a muchos más participantes en menos tiempo|Asegura que ambos grupos partan de igual capacidad|Frente a controles activos, Melby-Lervåg, Redick y Hulme (2016) no hallaron evidencia convincente de transferencia lejana.",
      "¿Qué tipo de tarea predice mejor el razonamiento y el rendimiento académico?|La amplitud compleja|La amplitud simple de dígitos|La amplitud simple de letras|Las tareas que combinan almacenamiento y procesamiento predicen mejor que las de mero almacenamiento."
    ],
    inc: [
      "Sobre la capacidad y el entrenamiento|El entrenamiento muestra transferencia lejana frente a controles activos|El modelo de Cowan propone un foco atencional de unos cuatro elementos|La tarea de amplitud lectora combina almacenamiento y procesamiento|Melby-Lervåg, Redick y Hulme (2016) no encontraron ninguna evidencia convincente de transferencia lejana frente a controles activos."
    ],
    seq: [],
    cls: [
      "Enfoque sobre la capacidad|Casillas: número fijo de huecos; pérdida total de los sobrantes|Recursos continuos: reparto entre los elementos; menor precisión con más elementos"
    ] }
] },
{ n: 6, t: "Sistemas de memoria a largo plazo", cap: 2, pir: "alta", mods: [
  { t: "Episódica y semántica (Tulving)",
    tip: "Tulving (1972) distinguió la memoria episódica, de sucesos vividos situados en un lugar y un momento (qué, dónde y cuándo), de la semántica, de conocimiento general sin referencia a cuándo se aprendió. En 1985 asoció a cada sistema un tipo de conciencia: autonoética (episódica), noética (semántica) y anoética (procedimental). La episódica es la que más se resiente con la edad. La doble disociación entre K. C. o la amnesia del desarrollo y la demencia semántica es el argumento más fuerte para separarlas.",
    v: [
      "Memoria episódica=Recuerdo de sucesos vividos situados en un lugar y un momento concretos",
      "Memoria semántica=Conocimiento general sobre el mundo sin referencia a cuándo se aprendió",
      "Viaje mental en el tiempo=Volver a situarse en un momento pasado y revivirlo en parte",
      "Conciencia autonoética=Revivir el suceso y saberse protagonista de él",
      "Conciencia noética=Saber algo sin revivir cómo se aprendió",
      "Conciencia anoética=Ejecutar algo sin darse cuenta de estar recordando",
      "Semantización=Pérdida de detalles que convierte los episodios en conocimiento general",
      "Demencia semántica=Pérdida progresiva del significado con sucesos recientes relativamente conservados"
    ],
    g: [
      "Recordar un episodio supone un viaje mental en el ___.|tiempo|espacio|significado",
      "Según Tulving (1985), la memoria procedimental se acompaña de conciencia ___.|anoética|noética|autonoética",
      "La memoria que más se resiente con la edad es la ___.|episódica|semántica|procedimental",
      "El paciente ___ perdió el recuerdo de episodios de su propia vida, pero conservó buena parte de su conocimiento general.|K. C.|K. F.|A. J.",
      "Vargha-Khadem et al. (1997) describieron la amnesia del desarrollo en niños con lesiones ___ tempranas.|hipocampales|cerebelosas|estriatales"
    ],
    tf: [
      "La repetición de vivencias parecidas fortalece el conocimiento semántico, pero tiende a fundir los recuerdos episódicos.|V",
      "La conciencia noética es la propia de la memoria episódica.|F|La episódica se acompaña de conciencia autonoética. La noética corresponde a la memoria semántica.",
      "En la demencia semántica se conserva el significado de las palabras y se pierde el recuerdo de sucesos recientes.|F|Ocurre lo contrario: se pierde el significado de palabras y conceptos, y los sucesos recientes se conservan relativamente.",
      "Con el envejecimiento, la memoria semántica se mantiene mucho mejor que la episódica e incluso puede crecer.|V"
    ],
    q: [
      "Una estudiante recuerda que repasó un tema en la biblioteca, con lluvia y un café frío al lado. ¿Qué memoria usa?|Episódica|Semántica|Procedimental|Recuerda un suceso situado en un lugar y un momento. Saber el contenido del tema sería conocimiento semántico.",
      "¿Qué se considera el argumento más fuerte para separar memoria episódica y semántica?|La doble disociación neuropsicológica|Las diferencias en neuroimagen|Las diferencias con el envejecimiento|Casos como K. C. y la demencia semántica muestran patrones inversos. La neuroimagen solo añade activaciones parcialmente distintas.",
      "Alguien sabe que fue de campamento a los diez años, pero apenas recuerda escenas concretas. ¿Qué proceso lo explica?|La semantización|La amnesia infantil|El pico de reminiscencia|Con el tiempo, muchos recuerdos episódicos pierden sus detalles y quedan como conocimiento general.",
      "¿En qué se diferencia la adquisición de ambos sistemas?|El episodio se registra con una sola vivencia|El conocimiento semántico requiere una sola vivencia|Ambos requieren muchas repeticiones espaciadas|El conocimiento semántico suele construirse con repeticiones a lo largo del tiempo."
    ],
    inc: [
      "Sobre la distinción de Tulving|La memoria semántica depende mucho de las claves del momento|La memoria episódica responde a qué, dónde y cuándo|La conciencia autonoética acompaña al recuerdo episódico|Es el recuerdo episódico el que depende mucho de las claves del contexto. El semántico es más estable."
    ],
    seq: [],
    cls: [
      "Sistema de Tulving|Episódica: conciencia autonoética; viaje mental en el tiempo; muy sensible al contexto|Semántica: conciencia noética; conocimiento general; mayor estabilidad"
    ] },
  { t: "La clasificación de Squire",
    tip: "Squire clasificó los sistemas de memoria según qué se conserva y qué se pierde en la amnesia. La memoria declarativa (episódica y semántica) depende del lóbulo temporal medial y el diencéfalo. La no declarativa reúne la procedimental (estriado), el priming (neocorteza), el condicionamiento clásico simple (amígdala si la respuesta es emocional, cerebelo si es musculoesquelética) y el aprendizaje no asociativo (vías reflejas). Schacter y Tulving propusieron cinco sistemas, y el enfoque de procesos explica las disociaciones por el procesamiento que exige cada tarea.",
    v: [
      "Memoria declarativa=Memoria que se puede traer a la conciencia y expresar, sea un suceso o un dato",
      "Memoria no declarativa=Capacidades heterogéneas que se expresan en la ejecución, no en el recuerdo",
      "Disociación=Lesión que afecta a una función y deja intacta otra",
      "Cohen y Squire (1980)=Distinción inicial entre conocimiento declarativo y procedimental",
      "Estriado=Estructura de los ganglios basales asociada a la memoria procedimental",
      "Neocorteza=Estructura asociada al priming en la clasificación de Squire",
      "Vías reflejas=Base del aprendizaje no asociativo",
      "Representación perceptiva=Sistema de Schacter y Tulving responsable del priming perceptivo"
    ],
    g: [
      "En la clasificación de Squire, el condicionamiento de respuestas emocionales se asocia sobre todo a ___.|la amígdala|el cerebelo|el estriado",
      "Schacter y Tulving distinguieron ___ grandes sistemas de memoria.|cinco|tres|siete",
      "Squire organizó los sistemas según qué se conserva y qué se pierde en la ___.|amnesia|demencia|afasia",
      "Según el enfoque de ___, muchas disociaciones reflejan el tipo de procesamiento que exige cada tarea.|procesos|sistemas|almacenes",
      "Parpadear ante un tono asociado a un soplo de aire depende sobre todo ___.|del cerebelo|de la amígdala|del estriado"
    ],
    tf: [
      "La distinción entre memoria declarativa y no declarativa es de Tulving.|F|Es de Squire. La distinción de Tulving es entre memoria episódica y semántica.",
      "En la clasificación de Squire, la memoria episódica y la semántica forman parte de la memoria declarativa.|V",
      "El priming depende sobre todo del hipocampo y se pierde en la amnesia.|F|Depende de la neocorteza y se conserva en las personas amnésicas. El hipocampo sostiene la memoria declarativa.",
      "Las clasificaciones de Squire y de Schacter y Tulving separan lo que se recuerda conscientemente de lo que se manifiesta sin recuerdo consciente.|V"
    ],
    q: [
      "Una paciente siente miedo al oír el torno del dentista sin recordar cuándo lo aprendió. ¿Qué estructura se asocia a esta respuesta?|La amígdala|El cerebelo|El estriado|Es condicionamiento clásico con respuesta emocional. El cerebelo interviene en respuestas musculoesqueléticas como el parpadeo.",
      "Dejar de oír el zumbido de la nevera es un ejemplo de…|aprendizaje no asociativo|condicionamiento clásico simple|priming perceptivo|Es habituación, una forma de aprendizaje no asociativo que Squire asocia a las vías reflejas.",
      "¿Qué caso fue el punto de partida de la lógica de disociación en la clasificación de Squire?|H. M.|K. C.|Clive Wearing|H. M. perdió la capacidad de formar nuevos recuerdos declarativos y, sin embargo, aprendía habilidades nuevas.",
      "Según el enfoque de procesos, ¿qué explica muchas disociaciones entre recuerdo consciente y priming?|El tipo de procesamiento que exige cada tarea|La existencia de sistemas cerebrales separados|La distinta intención de aprender en cada caso|El recuerdo consciente suele pedir procesamiento conceptual y muchas tareas de priming, perceptivo. Importa el ajuste entre estudio y prueba."
    ],
    inc: [
      "Sobre las estructuras de la clasificación de Squire|El aprendizaje no asociativo depende del estriado|La memoria procedimental depende del estriado|El priming depende sobre todo de la neocorteza|El aprendizaje no asociativo depende de las vías reflejas. El estriado (ganglios basales) sostiene la memoria procedimental."
    ],
    seq: [],
    cls: [
      "Rama de la clasificación de Squire|Declarativa: memoria episódica; memoria semántica|No declarativa: memoria procedimental; priming; condicionamiento clásico simple; aprendizaje no asociativo"
    ] },
  { t: "La memoria declarativa",
    tip: "La memoria declarativa tiene acceso consciente, aprendizaje rápido (basta una experiencia), flexibilidad y carácter relacional. Depende del lóbulo temporal medial (hipocampo y cortezas entorrinal, perirrinal y parahipocampal) y del diencéfalo. H. M., operado en 1953, mostró amnesia anterógrada grave, amnesia retrógrada graduada, memoria a corto plazo conservada y aprendizaje procedimental conservado. Según la teoría clásica de la consolidación, los recuerdos dependen cada vez menos del hipocampo y más de la neocorteza.",
    v: [
      "Flexibilidad=Uso de lo aprendido en situaciones distintas de la original, combinado con otros datos",
      "Carácter relacional=Unión de elementos presentados juntos en una representación conjunta",
      "Lóbulo temporal medial=Hipocampo y cortezas entorrinal, perirrinal y parahipocampal",
      "Amnesia anterógrada=Incapacidad de formar nuevos recuerdos declarativos tras una lesión",
      "Amnesia retrógrada graduada=Pérdida de recuerdos previos a la lesión que respeta los más antiguos",
      "Scoville y Milner (1957)=Describieron las consecuencias de la operación de H. M.",
      "Consolidación=Proceso por el que los recuerdos dependen cada vez menos del hipocampo",
      "Clive Wearing=Amnesia muy grave tras una encefalitis herpética, con habilidad musical conservada"
    ],
    g: [
      "A H. M. se le extirpó en 1953, de forma bilateral, la parte medial de los lóbulos ___.|temporales|frontales|parietales",
      "H. M. leía la misma revista sin recordar haberla leído, signo de amnesia ___.|anterógrada|retrógrada|infantil",
      "La amnesia retrógrada de H. M. era ___: conservaba muchos recuerdos de su infancia y juventud.|graduada|global|completa",
      "Clive Wearing sufrió su amnesia tras una encefalitis por herpes ___ en 1985.|simple|zóster|genital",
      "Según la teoría clásica de la consolidación, con el tiempo los recuerdos declarativos dependen cada vez más ___.|de la neocorteza|del hipocampo|del estriado"
    ],
    tf: [
      "H. M. tenía dañada la memoria a corto plazo: no podía repetir una serie de dígitos.|F|La conservaba: mantenía una conversación o repetía dígitos mientras no se distrajera.",
      "El caso de H. M. mostró que el lóbulo temporal medial no es el almacén definitivo de los recuerdos antiguos.|V",
      "La memoria declarativa requiere muchas repeticiones para formarse, como las habilidades.|F|Basta una sola experiencia, como recordar dónde se ha aparcado hoy. La adquisición gradual es propia de la memoria procedimental.",
      "Clive Wearing conservaba su habilidad musical pese a una amnesia anterógrada y retrógrada muy graves.|V"
    ],
    q: [
      "Si se sabe que Ana es hermana de Luis y que Luis es padre de Marta, se deduce que Ana es tía de Marta. ¿Qué propiedad ilustra?|La flexibilidad|El aprendizaje rápido|El acceso consciente|Lo aprendido se combina con otros conocimientos y se usa en situaciones distintas de la original.",
      "¿Qué conclusión se derivó del caso de H. M.?|La memoria es separable de la inteligencia y la percepción|El hipocampo es el almacén definitivo de los recuerdos|La MCP y la MLP dependen del mismo mecanismo|H. M. conservaba inteligencia y percepción. Además, MCP y MLP resultaron disociables, y el hipocampo, necesario para formar recuerdos.",
      "¿Qué explica el gradiente de la amnesia retrógrada según la teoría clásica de la consolidación?|Los recuerdos antiguos dependen menos del hipocampo|Los recuerdos antiguos se repasaron menos veces|Los recuerdos recientes se codificaron con menos emoción|Con el tiempo, los recuerdos declarativos dependen menos del hipocampo y más de la neocorteza, así que resisten mejor la lesión.",
      "Tras su primer día en un trabajo nuevo, alguien recuerda el nombre del encargado y se lo cuenta a otra persona. ¿Qué dos propiedades ilustra?|Aprendizaje rápido y acceso consciente|Aprendizaje gradual y acceso consciente|Aprendizaje rápido y expresión motora|Basta un ensayo para aprender el nombre y se puede expresar de palabra. La adquisición gradual es propia de lo procedimental."
    ],
    inc: [
      "Sobre H. M.|Perdió todos sus recuerdos de infancia y juventud|Mostraba una amnesia anterógrada grave|Mejoraba con la práctica en el dibujo en espejo|Su amnesia retrógrada era graduada: perdió recuerdos de los años previos a la operación, pero conservaba muchos de su infancia y juventud."
    ],
    seq: [],
    cls: [
      "Situación en H. M.|Conservado: memoria a corto plazo; aprendizaje procedimental; recuerdos de infancia|Alterado: formación de nuevos recuerdos declarativos; recuerdos de los años previos a la operación"
    ] },
  { t: "La memoria no declarativa",
    tip: "La memoria no declarativa se expresa en la conducta sin recordar el episodio de aprendizaje. Incluye la memoria procedimental, gradual y duradera, basada sobre todo en el estriado, el priming perceptivo y conceptual (neocorteza), el condicionamiento clásico simple (amígdala o cerebelo) y el aprendizaje no asociativo, es decir, habituación y sensibilización (vías reflejas). H. M. mejoró en el dibujo en espejo sin recordar haberlo practicado. Fitts (1964) describió tres fases en la adquisición de una habilidad: cognitiva, asociativa y autónoma.",
    v: [
      "Dibujo en espejo=Trazar una estrella viendo la propia mano solo a través de un espejo",
      "Fase cognitiva=Se siguen reglas explícitas, con esfuerzo y muchos errores",
      "Fase asociativa=Los pasos se encadenan y los errores disminuyen",
      "Fase autónoma=Ejecución rápida, automática y difícil de verbalizar",
      "Priming perceptivo=Identificar antes un estímulo ya visto, aunque esté degradado",
      "Priming conceptual=Pensar en un concepto facilita responder después con otro relacionado",
      "Habituación=Dejar de responder a un estímulo inocuo que se repite",
      "Sensibilización=Responder más a estímulos tras uno intenso"
    ],
    g: [
      "La memoria procedimental se adquiere de forma ___, con la práctica.|gradual|inmediata|explícita",
      "En la fase ___ de Fitts, la ejecución es rápida y difícil de verbalizar.|autónoma|asociativa|cognitiva",
      "Sobresaltarse con cualquier ruido tras un susto es un ejemplo de ___.|sensibilización|habituación|condicionamiento",
      "Además del estriado, en la memoria procedimental participan el cerebelo y la corteza ___.|motora|visual|auditiva",
      "Lo que tienen en común las formas no declarativas es ___: no requieren recuerdo consciente.|negativo|anatómico|evolutivo"
    ],
    tf: [
      "Al comenzar cada sesión de dibujo en espejo, H. M. recordaba haber hecho antes la tarea.|F|Mejoraba como cualquier persona, pero al empezar cada sesión no recordaba haberla practicado.",
      "El priming se conserva en las personas amnésicas.|V",
      "La habituación y la sensibilización son formas de condicionamiento clásico.|F|Son formas de aprendizaje no asociativo: cambios en la respuesta a un único estímulo por exposición repetida.",
      "Teclear una contraseña a toda velocidad sin poder dictarla de memoria indica que está guardada como hábito motor.|V"
    ],
    q: [
      "Un alumno de autoescuela se repite «embrague, punto muerto, arranque» y comete muchos errores. ¿En qué fase de Fitts está?|Cognitiva|Asociativa|Autónoma|La fase cognitiva sigue reglas explícitas con esfuerzo y errores. En la asociativa los pasos ya se encadenan.",
      "Tras pensar en «hospital», alguien responde antes «médico» en una tarea de asociación. ¿Qué es?|Priming conceptual|Priming perceptivo|Condicionamiento clásico|La facilitación procede del significado. El perceptivo consiste en identificar antes un estímulo ya visto.",
      "¿Qué muestra el aprendizaje de H. M. en el dibujo en espejo?|Que recordar y haber aprendido no siempre coinciden|Que su amnesia anterógrada era en realidad solo parcial|Que el estriado necesita al hipocampo para aprender|La habilidad se aprendía y el episodio de aprenderla, no. Por eso la memoria no declarativa fue tan importante para la teoría.",
      "¿Por qué se agrupan formas tan distintas bajo la memoria no declarativa?|Ninguna requiere recuerdo consciente|Todas dependen del cerebelo y del estriado|Todas se adquieren de forma gradual|Lo común es negativo: no exigen recuerdo consciente y se conservan, en mayor o menor grado, tras una lesión temporal medial."
    ],
    inc: [
      "Sobre la memoria no declarativa|La memoria procedimental depende sobre todo del hipocampo|El priming perceptivo se da con estímulos degradados|La habituación depende de las vías reflejas|La base principal de la memoria procedimental es el estriado, con participación del cerebelo y la corteza motora."
    ],
    seq: [
      "Fases de Fitts en la adquisición de una habilidad|Fase cognitiva con reglas explícitas>Fase asociativa con pasos encadenados>Fase autónoma con ejecución automática"
    ],
    cls: [
      "Forma no declarativa|Procedimental: dibujo en espejo; teclear sin mirar|Priming: identificar antes una palabra vista; responder «médico» tras «hospital»|No asociativa: habituación; sensibilización"
    ] }
] },
{ n: 7, t: "Memoria autobiográfica, implícita y prospectiva", cap: 2, pir: "alta", mods: [
  { t: "La memoria autobiográfica: amnesia infantil y pico de reminiscencia",
    tip: "La memoria autobiográfica combina recuerdos episódicos y conocimiento semántico sobre uno mismo y sostiene la identidad, y Conway y Pleydell-Pearce la organizan en periodos vitales, sucesos generales y conocimiento específico. Se estudia con diarios (Linton, Wagenaar) y con la técnica de palabras clave de Crovitz y Schiffman. Su curva muestra amnesia infantil (pocos recuerdos antes de los tres o cuatro años), pico de reminiscencia (de 10 a 30 años) y recencia. La HSAM no es memoria fotográfica.",
    v: [
      "Memoria autobiográfica=Memoria de la propia vida: episodios y conocimiento semántico sobre uno mismo",
      "Periodos vitales=Nivel más amplio de la jerarquía, como «cuando vivía en Valencia»",
      "Técnica de palabras clave=Evocar y fechar el primer recuerdo personal asociado a una palabra",
      "Estudios de diario=Anotar durante años sucesos propios y comprobar después cuántos se recuerdan",
      "Amnesia infantil=Escasez de recuerdos autobiográficos anteriores a los tres o cuatro años",
      "Pico de reminiscencia=Exceso de recuerdos de entre los 10 y los 30 años en mayores de unos 40",
      "Guion de vida=Sucesos esperables y su edad típica transmitidos por cada cultura",
      "HSAM=Capacidad de recordar lo ocurrido en casi cualquier fecha propia desde la adolescencia"
    ],
    g: [
      "Howe y Courage (1993) relacionaron la amnesia infantil con la aparición de un yo ___.|cognitivo|corporal|social",
      "Fivush y Nelson (2004) subrayan que los niños aprenden a recordar mediante la ___ compartida con los adultos.|narración|imitación|lectura",
      "El pico de reminiscencia abarca sucesos ocurridos entre los 10 y los ___ años.|30|20|40",
      "Berntsen y Rubin (2004) explicaron el pico de reminiscencia con el ___ de vida que transmite cada cultura.|guion|ciclo|estilo",
      "Los estudios de diario tienen alta validez ___, pero poco control.|ecológica|interna|predictiva"
    ],
    tf: [
      "La memoria autobiográfica equivale a la memoria episódica.|F|Se solapa con ella, pero incluye también conocimiento semántico sobre uno mismo, y no todo episodio se integra en la historia vital.",
      "La amnesia infantil es un rasgo normal del desarrollo, no un trastorno.|V",
      "Las personas con HSAM rinden muy por encima de lo normal en las tareas de laboratorio corrientes.|F|Su rendimiento en esas tareas era normal. No es memoria fotográfica y también producen recuerdos falsos.",
      "El pico de reminiscencia aparece también con la música, los libros o las películas favoritas.|V"
    ],
    q: [
      "Una mujer de 70 años evoca y fecha recuerdos ante palabras como «perro» o «tren», y abundan los de su juventud. ¿Qué técnica y qué fenómeno?|Palabras clave y pico de reminiscencia|Estudio de diario y pico de reminiscencia|Palabras clave y amnesia infantil|La técnica de Crovitz y Schiffman muestra un exceso de recuerdos de entre los 10 y los 30 años.",
      "¿Qué explicación de la amnesia infantil subraya el estilo con que las familias conversan sobre lo vivido?|Lenguaje y narración|Maduración cerebral|Concepto de sí mismo|Fivush y Nelson (2004) sostienen que los niños aprenden a recordar contando su pasado con los adultos.",
      "¿Qué explicación del pico de reminiscencia se apoya en sucesos más distintivos?|Es una etapa con muchas primeras veces|Es cuando termina de madurar el hipocampo|Es cuando aparece el yo cognitivo|Primer trabajo, primer viaje solo o primera pareja son sucesos distintivos y mejor recordados.",
      "¿Cómo se relacionan entre sí las explicaciones de la amnesia infantil?|Se complementan más que competir|Una de ellas ya se ha impuesto|Se excluyen mutuamente|Maduración cerebral, concepto de sí mismo y lenguaje se complementan. Su peso relativo sigue en debate."
    ],
    inc: [
      "Sobre la memoria autobiográfica|Se recuerdan bien sucesos de los dos primeros años|Su función principal es sostener la propia identidad|La recencia se debe a que ha pasado menos tiempo|Los adultos recuerdan muy pocos sucesos anteriores a los tres o cuatro años: es la amnesia infantil."
    ],
    seq: [
      "Jerarquía de Conway y Pleydell-Pearce, de lo general a lo concreto|Periodos vitales>Sucesos generales>Conocimiento específico del suceso"
    ],
    cls: [
      "Tramo de la curva autobiográfica|Amnesia infantil: antes de los tres o cuatro años; yo cognitivo|Pico de reminiscencia: entre los 10 y los 30 años; primeras veces; guion de vida|Recencia: sucesos más recientes"
    ] },
  { t: "Los recuerdos flash",
    tip: "Brown y Kulik (1977) propusieron que un suceso sorprendente, importante y emocional activa un mecanismo de «imprimir ahora» que fija el contexto personal de recepción. Los diseños de prueba y reprueba lo desmienten: Neisser y Harsch (1992) con el Challenger y Talarico y Rubin (2003) con el 11 de septiembre hallaron que los recuerdos flash no son más consistentes que los cotidianos, aunque mantienen una confianza y una viveza altas. Hirst et al. (2015) vieron olvido rápido el primer año y confianza alta durante diez años.",
    v: [
      "Recuerdo flash=Recuerdo vívido y confiado del contexto en que se conoció una noticia impactante",
      "Imprimir ahora=Mecanismo especial que, según Brown y Kulik, fijaría la escena como una foto",
      "Contexto de recepción=Lugar, actividad, fuente y reacción propia al conocer la noticia",
      "Prueba y reprueba=Diseño que registra el recuerdo poco después y vuelve a preguntar más tarde",
      "Neisser y Harsch (1992)=Estudio sobre cómo se supo la explosión del Challenger",
      "Talarico y Rubin (2003)=Compararon recuerdos del 11 de septiembre con un suceso cotidiano reciente",
      "Hirst et al. (2015)=Seguimiento de diez años de los recuerdos del 11 de septiembre en miles de personas",
      "Consistencia=Coincidencia entre el relato inicial y el posterior de un mismo recuerdo"
    ],
    g: [
      "Lo que se recuerda en un recuerdo flash es sobre todo el contexto personal de ___.|recepción|codificación|consolidación",
      "En el estudio de Talarico y Rubin, la ___ distinguía a los recuerdos flash de los cotidianos.|confianza|consistencia|exactitud",
      "Neisser y Harsch preguntaron a estudiantes al día siguiente de la explosión del ___.|Challenger|Columbia|Discovery",
      "Hirst et al. (2015) hallaron un olvido rápido durante el primer ___ y después una estabilización.|año|mes|trimestre",
      "La emoción favorece algunos detalles centrales, pero no protege a los ___.|periféricos|recientes|nucleares"
    ],
    tf: [
      "Los recuerdos flash son más consistentes a lo largo del tiempo que los recuerdos cotidianos.|F|Talarico y Rubin (2003) hallaron que ambos pierden consistencia al mismo ritmo. Solo la confianza se mantiene alta en los flash.",
      "En el estudio del Challenger, algunas personas insistían en que su versión nueva era la correcta al ver su propio texto.|V",
      "En el estudio de Hirst et al. (2015), la confianza fue bajando a la par que la exactitud.|F|La confianza se mantuvo alta durante los diez años, aunque el olvido fue rápido durante el primer año.",
      "Cada vez que se comenta un suceso impactante, el recuerdo puede reconstruirse e incorporar detalles nuevos.|V"
    ],
    q: [
      "Un hombre relee el mensaje que escribió el día de una noticia impactante y ve que no coincide con lo que hoy recuerda con seguridad. ¿Qué ilustra?|La confianza no garantiza la exactitud|La emoción protege los detalles periféricos|El mecanismo de «imprimir ahora»|Los recuerdos flash cambian como los cotidianos. Lo que se mantiene es la sensación de recordar con claridad.",
      "¿Qué patrón encontraron Talarico y Rubin (2003) en los recuerdos flash frente a los cotidianos?|Igual consistencia y más confianza|Más consistencia y más confianza|Menos consistencia y menos confianza|Ambos tipos perdieron detalles al mismo ritmo. La confianza y la viveza solo se mantenían altas en los recuerdos flash.",
      "¿Por qué hace falta un diseño de prueba y reprueba para estudiar los recuerdos flash?|Permite contrastar con un registro inicial|Permite medir la emoción durante el suceso|Permite evitar el olvido del primer año|La única forma de comprobar su exactitud es registrar el recuerdo poco después y volver a preguntar más tarde.",
      "¿Qué factor se propone para explicar la alta confianza de los recuerdos flash?|Parece obligado recordar bien algo tan importante|La emoción protege todos los detalles del contexto|Un mecanismo neural fija la escena como una foto|Se proponen la emoción, el repaso frecuente y la importancia del suceso. La emoción no protege los detalles periféricos."
    ],
    inc: [
      "Sobre los recuerdos flash|Su rasgo especial es la exactitud de los detalles|Se repasan muchas veces en conversaciones y aniversarios|Se recuerdan con mucha viveza y confianza|Lo especial no es su exactitud, sino la seguridad con que se viven. Cambian tanto como los recuerdos cotidianos."
    ],
    seq: [
      "Diseño de Talarico y Rubin (2003)|Suceso impactante y suceso cotidiano>Primer registro al día siguiente>Nuevas preguntas tras distintos intervalos>Comparación de consistencia y confianza"
    ],
    cls: [
      "Recuerdos flash frente a cotidianos|Igual en ambos: pérdida de consistencia; cambios acumulados|Mayor en los flash: confianza; viveza"
    ] },
  { t: "Memoria implícita y explícita",
    tip: "Graf y Schacter (1985) distinguieron la memoria explícita, recuperación intencional y consciente medida con tareas directas (recuerdo libre, con claves, reconocimiento), de la implícita, influencia de la experiencia sin recuerdo consciente medida con tareas indirectas (completar raíces o fragmentos, identificación perceptiva, decisión léxica). Los amnésicos conservan el priming (Warrington y Weiskrantz, 1970). El nivel de procesamiento afecta sobre todo a lo explícito, y el cambio de modalidad, al priming perceptivo. Implícita no equivale a procedimental.",
    v: [
      "Memoria explícita=Recuperación intencional y consciente de experiencias previas",
      "Memoria implícita=Influencia de una experiencia previa sin recuerdo consciente de ella",
      "Tarea directa=Prueba en la que se pide expresamente a la persona que recuerde",
      "Tarea indirecta=Prueba en la que no se menciona que se trate de memoria",
      "Priming de repetición=Facilitación en tareas indirectas por haber encontrado antes el estímulo",
      "Decisión léxica=Decidir si una serie de letras es una palabra",
      "Identificación perceptiva=Reconocer palabras presentadas durante milisegundos",
      "Criptomnesia=Reaparición de una frase leída hace tiempo como si fuera una idea propia"
    ],
    g: [
      "Warrington y Weiskrantz (1970) vieron que los amnésicos completaban ___ de palabras estudiadas con normalidad.|fragmentos|listas|definiciones",
      "Cambiar la ___ entre estudio y prueba reduce el priming perceptivo.|modalidad|velocidad|intención",
      "El nivel de procesamiento influye mucho en el recuerdo ___ y poco en el priming perceptivo.|explícito|implícito|procedimental",
      "La paciente amnésica de ___ se negaba a dar la mano tras un pinchazo sin saber explicar por qué.|Claparède|Korsakoff|Tulving",
      "Los términos implícito y explícito describen sobre todo cómo se ___ la memoria.|manifiesta|almacena|consolida"
    ],
    tf: [
      "El reconocimiento es una tarea de memoria implícita porque no exige recuerdo libre.|F|Es una tarea directa y, por tanto, explícita: se pide a la persona que juzgue si vio el elemento.",
      "La memoria implícita incluye el priming, pero también las habilidades y el condicionamiento.|V",
      "Memoria implícita y memoria procedimental son términos equivalentes.|F|La implícita incluye el priming, que no es procedimental. Hay que evitar identificarlas sin más.",
      "Cambiar de modalidad entre estudio y prueba apenas afecta al recuerdo explícito.|V"
    ],
    q: [
      "Un paciente amnésico no reconoce ninguna palabra de una lista, pero al completar fragmentos usa más las estudiadas. ¿Qué muestra?|Priming conservado con memoria explícita alterada|Memoria explícita conservada con priming alterado|Recuerdo con claves conservado sin reconocimiento|Es el patrón de Warrington y Weiskrantz (1970): las tareas indirectas revelan lo estudiado sin recuerdo consciente.",
      "¿Cuál de estas tareas es indirecta?|Decisión léxica|Recuerdo con claves|Reconocimiento|En la decisión léxica no se pide recordar, pero las respuestas son más rápidas a las palabras ya vistas.",
      "Estudiar palabras pensando en su significado, y no en sus letras, mejora sobre todo…|el recuerdo explícito|el priming perceptivo|la identificación perceptiva|El nivel de procesamiento influye mucho en lo explícito y poco en el priming perceptivo.",
      "Una marca vista de pasada en un anuncio parece después más familiar en el supermercado. ¿Qué memoria actúa?|Memoria implícita|Memoria prospectiva|Memoria explícita|La experiencia previa influye en la conducta sin que haya recuerdo consciente del anuncio."
    ],
    inc: [
      "Sobre memoria implícita y explícita|Implícita y explícita son dos sistemas cerebrales|El recuerdo libre es una tarea directa de memoria|Completar raíces de palabras es una tarea indirecta|Los términos describen sobre todo cómo se manifiesta y se mide la memoria. La implícita abarca procesos con bases cerebrales distintas."
    ],
    seq: [],
    cls: [
      "Tipo de tarea|Directa (explícita): recuerdo libre; recuerdo con claves; reconocimiento|Indirecta (implícita): completar raíces; completar fragmentos; identificación perceptiva; decisión léxica"
    ] },
  { t: "La memoria prospectiva",
    tip: "La memoria prospectiva es recordar hacer algo en el futuro, con un componente prospectivo (que hay que hacer algo) y otro retrospectivo (qué hay que hacer), y se estudia con la tarea en curso de Einstein y McDaniel (1990). La basada en el tiempo es más autoiniciada y costosa que la basada en sucesos y más sensible al envejecimiento, aunque en la vida diaria los mayores a veces rinden igual o mejor. Depende de la corteza prefrontal, y ayudan las intenciones de implementación (Gollwitzer, 1999), las ayudas externas y las rutinas.",
    v: [
      "Memoria prospectiva=Memoria para realizar una acción prevista en el momento adecuado del futuro",
      "Memoria retrospectiva=Recordar lo que ya ocurrió o se aprendió",
      "Componente prospectivo=Recordar que hay que hacer algo en el momento adecuado",
      "Componente retrospectivo=Recordar qué es lo que hay que hacer",
      "Tarea en curso=Actividad que se realiza mientras debe recuperarse la intención",
      "Basada en sucesos=Acción desencadenada por un estímulo externo del entorno",
      "Basada en el tiempo=Acción desencadenada por un momento o un intervalo",
      "Intención de implementación=Plan del tipo «cuando ocurra X, haré Y» (Gollwitzer, 1999)"
    ],
    g: [
      "Formular una intención de implementación convierte la tarea en una basada en ___.|sucesos|tiempo|rutinas",
      "La memoria prospectiva depende sobre todo de la corteza ___.|prefrontal|occipital|temporal",
      "La memoria prospectiva basada en el tiempo es más ___, porque no hay señal externa.|autoiniciada|automática|inconsciente",
      "El paradigma estándar de laboratorio lo propusieron Einstein y ___ (1990).|McDaniel|Gollwitzer|Kulik",
      "Tomar dos veces la misma pastilla es un error típico que consiste en ___ algo ya hecho.|repetir|omitir|anticipar"
    ],
    tf: [
      "Quien entra en la cocina y no recuerda a qué venía ha fallado en el componente retrospectivo.|V",
      "La memoria prospectiva basada en sucesos es la más autoiniciada y costosa.|F|La más autoiniciada es la basada en el tiempo: no hay señal externa y hay que vigilar el reloj por iniciativa propia.",
      "En la vida diaria, las personas mayores siempre rinden peor que las jóvenes en memoria prospectiva.|F|A veces rinden igual o mejor, probablemente porque usan más ayudas externas y organizan mejor sus rutinas.",
      "Una persona con lesión frontal puede saber qué tenía que hacer y no hacerlo en el momento oportuno.|V"
    ],
    q: [
      "Una estudiante decide: «cuando salga de clase, enviaré el correo a la profesora». ¿Qué estrategia usa?|Una intención de implementación|Una ayuda externa|Asociar la acción a una rutina|Vincular la intención a una situación concreta la convierte en una tarea basada en sucesos, más fácil de recordar.",
      "«Sacar la pizza del horno a los 15 minutos» es un ejemplo de memoria prospectiva…|basada en el tiempo|basada en sucesos|retrospectiva|Depende de un intervalo y no hay señal externa: hay que acordarse de mirar el reloj.",
      "Dar un recado a un compañero cuando se le vea suele ser más fácil que una tarea basada en el tiempo porque…|la clave externa ayuda a recordarla|no tiene componente retrospectivo|no requiere recordar qué hacer|En la basada en sucesos un estímulo del entorno ayuda a recuperar la intención. La basada en el tiempo es autoiniciada.",
      "En el paradigma de Einstein y McDaniel (1990), ¿qué función tiene la tarea en curso?|Imita recuperar la intención estando ocupado|Mide el componente retrospectivo por separado|Comprueba la capacidad de la memoria de trabajo|Como en la vida cotidiana, la intención debe recuperarse mientras se está ocupado en otra cosa."
    ],
    inc: [
      "Sobre la memoria prospectiva|La basada en el tiempo es la menos sensible al envejecimiento|Depende sobre todo de la corteza prefrontal y de la atención|Los pastilleros semanales son ayudas externas útiles|La basada en el tiempo es más costosa y más sensible al envejecimiento que la basada en sucesos."
    ],
    seq: [],
    cls: [
      "Tipo de memoria prospectiva|Basada en sucesos: dar un recado al ver a un compañero; clave del entorno|Basada en el tiempo: sacar la pizza a los 15 minutos; más autoiniciada; más sensible al envejecimiento"
    ] }
] },
{ n: 8, t: "Codificar bien", cap: 3, pir: "media", mods: [
  { t: "Procesos de memoria: repaso de mantenimiento y repaso elaborativo",
    tip: "La codificación transforma lo percibido en una huella de memoria, y si falla, el resto no lo compensa. Lo decisivo no es la intención de aprender, sino las operaciones mentales: en el aprendizaje incidental de Hyde y Jenkins (1969), procesar el significado rendía como memorizar a propósito. Craik y Lockhart (1972) distinguieron el repaso de mantenimiento (tipo I), que mantiene activa la información, del elaborativo (tipo II), que la relaciona con lo sabido. En Craik y Watkins (1973), el tiempo de repaso no influyó en el recuerdo final.",
    v: [
      "Codificación=Transformación de lo percibido en una huella de memoria integrada con su contexto",
      "Huella de memoria=Representación que el sistema nervioso puede conservar",
      "Aprendizaje incidental=Procesar un material sin saber que luego habrá que recordarlo",
      "Repaso de mantenimiento=Repetir la información tal cual, sin elaborarla (tipo I)",
      "Repaso elaborativo=Relacionar la información con su significado y con lo ya sabido (tipo II)",
      "Hyde y Jenkins (1969)=Mostraron que importa el tipo de procesamiento y no la intención de aprender",
      "Craik y Watkins (1973)=Hallaron que el tiempo de repaso no influía en el recuerdo final",
      "Craik y Lockhart (1972)=Distinguieron dos tipos de repaso dentro de los niveles de procesamiento"
    ],
    g: [
      "Craik y Lockhart llamaron de tipo ___ al repaso elaborativo.|II|I|III",
      "En Craik y Watkins, los participantes retenían la última palabra que empezaba por una ___ determinada.|letra|sílaba|categoría",
      "El repaso de mantenimiento mejora algo el ___ posterior, aunque poco el recuerdo libre.|reconocimiento|razonamiento|aprendizaje",
      "En el aprendizaje incidental, buscar ciertas letras en las palabras producía un recuerdo mucho ___.|menor|mayor|similar",
      "Para recordar no es decisiva la intención de aprender, sino las ___ mentales que se realizan.|operaciones|imágenes|repeticiones"
    ],
    tf: [
      "Repetir mucho tiempo una palabra garantiza que se recuerde a largo plazo.|F|En Craik y Watkins (1973), el tiempo de repaso de mantenimiento no influyó en el recuerdo final por sorpresa.",
      "En los estudios de Hyde y Jenkins, procesar el significado sin intención de aprender rendía más o menos igual que memorizar a propósito.|V",
      "El resultado de Craik y Watkins debilitó la idea del modelo modal de que el mero repaso transfiere la información al largo plazo.|V",
      "Repetir y recuperar son equivalentes: ambos apenas mejoran el recuerdo a largo plazo.|F|Intentar recordar sin mirar el material es una de las formas más eficaces de consolidarlo. Repetir tal cual apenas ayuda."
    ],
    q: [
      "Dos estudiantes dedican el mismo tiempo a los pares craneales: una los lee diez veces y otra se pregunta su función y los relaciona con síntomas. ¿Quién recordará más?|La segunda, por el repaso elaborativo|La primera, por el repaso de mantenimiento|Ambas por igual, por el mismo tiempo de estudio|Lo decisivo no es el tiempo, sino las operaciones: relacionar con lo que ya se sabe produce huellas duraderas.",
      "En Craik y Watkins (1973), ¿qué efecto tuvo repasar una palabra durante más tiempo?|Apenas influyó en su recuerdo final|Mejoró mucho su recuerdo final por sorpresa|Empeoró su recuerdo final|La mera repetición no mejoró el recuerdo posterior, lo que debilitó la idea de transferencia por simple repaso.",
      "¿Qué concluye la investigación sobre aprendizaje incidental?|Importa más el procesamiento que la intención|Importa más la intención que el procesamiento|Solo se aprende lo que se intenta memorizar|Quien procesaba el significado sin saber que habría prueba rendía como quien memorizaba a propósito (Hyde y Jenkins, 1969).",
      "Repetir un código de verificación hasta teclearlo es un ejemplo de…|repaso de mantenimiento|repaso elaborativo|práctica de recuperación|Se repite tal cual para mantenerlo activo mientras se necesita. Relacionar los dígitos con fechas sería repaso elaborativo."
    ],
    inc: [
      "Sobre la codificación y el repaso|La codificación es una copia fiel del estímulo|Al codificar se selecciona e interpreta la información|El repaso elaborativo produce huellas duraderas|No es una copia: se selecciona una parte de la información, se interpreta y se une a su contexto."
    ],
    seq: [
      "Experimento de Craik y Watkins (1973)|Oír listas de palabras>Retener la última palabra con la letra indicada>Repasarla hasta que aparece otra con esa letra>Recuerdo final por sorpresa"
    ],
    cls: [
      "Tipo de repaso|Mantenimiento: repetir sin elaborar; mantener activo a corto plazo; repetir un código de verificación|Elaborativo: relacionar con lo sabido; huellas duraderas; asociar un PIN a fechas conocidas"
    ] },
  { t: "Elaboración: autorreferencia y generación",
    tip: "Elaborar es enriquecer la huella con significado, relaciones, imágenes o ejemplos. Con las preguntas orientadoras de Craik y Tulving (1975), las semánticas daban el mejor recuerdo, pero además las respuestas «sí» superaban a las «no» (congruencia) y las frases complejas a las simples (grado de elaboración). Rogers, Kuiper y Kirker (1977) hallaron que juzgar si un adjetivo describe a uno mismo supera incluso al juicio semántico. Slamecka y Graf (1978) mostraron que lo generado se recuerda mejor que lo leído.",
    v: [
      "Elaboración=Enriquecimiento de la huella con significado, relaciones, imágenes o ejemplos",
      "Preguntas orientadoras=Preguntas previas sobre el aspecto, el sonido o el significado de cada palabra",
      "Congruencia=Ajuste de la palabra con su contexto de codificación, que mejora el recuerdo",
      "Grado de elaboración=Lo que marca la diferencia entre frases simples y complejas en el nivel semántico",
      "Efecto de autorreferencia=Mejor recuerdo de la información relacionada con uno mismo",
      "Efecto de generación=Mejor recuerdo de lo que uno produce frente a lo que solo lee",
      "Rogers, Kuiper y Kirker=Autores del estudio de autorreferencia con adjetivos de personalidad",
      "Slamecka y Graf (1978)=Compararon leer pares de palabras con generarlos mediante una regla"
    ],
    g: [
      "En Craik y Tulving (1975), las palabras con respuesta ___ se recordaban mejor.|afirmativa|negativa|rápida",
      "En el estudio de autorreferencia, juzgar si el adjetivo describía al participante superó incluso a la condición ___.|semántica|fonológica|estructural",
      "En la condición de generación se daba la primera palabra, una regla y la ___ de la segunda.|inicial|definición|traducción",
      "Las palabras generadas se recordaron mejor tanto en recuerdo como en ___.|reconocimiento|priming|razonamiento",
      "Una vez alcanzado el nivel semántico, marca la diferencia el grado de ___.|elaboración|profundidad|repetición"
    ],
    tf: [
      "En Craik y Tulving (1975), las palabras con respuesta «no» se recordaban igual que las de respuesta «sí» si se procesaban al mismo nivel.|F|Las de respuesta «sí» se recordaban mejor: encajan en la frase y se integran con ella en una unidad coherente.",
      "En Slamecka y Graf (1978), el efecto de generación apareció con todas las reglas usadas, incluida la rima.|V",
      "Ya se ha demostrado que el efecto de generación se debe solo al mayor esfuerzo de procesamiento.|F|Se proponen esfuerzo, procesamiento múltiple e implicación activa, que no se excluyen, y ninguna se ha impuesto.",
      "Dentro del nivel semántico, las palabras que completaban frases complejas se recordaban mejor que las de frases simples.|V"
    ],
    q: [
      "Un estudiante, al estudiar un sesgo cognitivo, se pregunta si alguna vez lo ha cometido él mismo. ¿Qué efecto aprovecha?|Autorreferencia|Generación|Distintividad|Relacionar la información con uno mismo es una elaboración muy potente, por la riqueza y organización del autoconocimiento.",
      "En Slamecka y Graf (1978), ante «caliente – f…» con la regla de antónimo, el participante…|produce la palabra y la recuerda mejor|lee el par y lo recuerda mejor|produce la palabra y la recuerda igual|Es la condición de generación: producir la palabra deja más huella que leer el par completo.",
      "¿Qué resultado de Craik y Tulving (1975) obligó a hablar de grado de elaboración y no solo de profundidad?|Las frases complejas superaban a las simples|Las preguntas semánticas superaban a las fonológicas|Las respuestas «sí» superaban a las «no»|Dentro del mismo nivel semántico había diferencias según la complejidad de la frase. El efecto del «sí» se explicó por congruencia.",
      "¿Por qué relacionar la información con uno mismo favorece tanto el recuerdo, según la explicación más probable?|El autoconocimiento es amplio, organizado y de uso diario|El autoconocimiento es emocional y activa la amígdala|El autoconocimiento es procedimental e inconsciente|Por eso la autorreferencia es una forma de elaboración muy potente. Si es un proceso especial o no sigue en debate."
    ],
    inc: [
      "Sobre la elaboración|La generación solo mejora el recuerdo, no el reconocimiento|La autorreferencia superó incluso a la condición semántica|Generar implica más implicación activa que leer el par|Las palabras generadas se recordaron mejor tanto en recuerdo como en reconocimiento."
    ],
    seq: [],
    cls: [
      "Efecto de elaboración|Autorreferencia: Rogers, Kuiper y Kirker; adjetivos de personalidad; juzgar si describe a uno mismo|Generación: Slamecka y Graf; producir la palabra; reglas de antónimo y rima"
    ] },
  { t: "Distintividad",
    tip: "La distintividad es el grado en que una huella se diferencia de las demás: la elaboración añade información y la distintividad hace que esa información sirva para separar la huella del resto. Jacoby y Craik (1979) atribuyeron a esto buena parte de la ventaja del procesamiento elaborado. En el efecto von Restorff (1933) se recuerda mejor el elemento diferente en su contexto. Conviene procesar las diferencias y combinar procesamiento relacional y específico: una clave que apunta a muchas huellas parecidas pierde eficacia.",
    v: [
      "Distintividad=Grado en que una huella se diferencia de las demás almacenadas",
      "Efecto von Restorff=Mejor recuerdo del elemento que difiere del resto de una lista homogénea",
      "Jacoby y Craik (1979)=Atribuyeron la ventaja de la elaboración a huellas más particulares",
      "Procesamiento relacional=Procesamiento que organiza lo común entre los elementos",
      "Procesamiento específico=Procesamiento que destaca lo que hace único a cada elemento",
      "Sobrecarga de la clave=Pérdida de eficacia de una clave que apunta a muchas huellas parecidas",
      "Recuerdo genérico=Fusión de días rutinarios parecidos en un solo recuerdo",
      "Subrayado excesivo=Marcar media página, con lo que el resaltado deja de distinguir nada"
    ],
    g: [
      "La elaboración añade información a la huella y la distintividad la ___ del resto.|separa|integra|copia",
      "El efecto de aislamiento fue descrito por von Restorff en ___.|1933|1953|1972",
      "Un apellido español destaca en una lista de apellidos ___.|ingleses|españoles|comunes",
      "Al estudiar dos conceptos fáciles de confundir, es más útil preguntarse en qué se ___.|diferencian|parecen|definen",
      "Una contraseña distinta y significativa para cada servicio se recuerda mejor que variaciones ___ de la misma palabra.|mínimas|largas|aleatorias"
    ],
    tf: [
      "El efecto von Restorff depende de que el elemento sea raro en sí mismo, con independencia de la lista.|F|Depende de que sea diferente en su contexto: el mismo apellido destaca entre ingleses y pasa desapercibido entre españoles.",
      "Según Jacoby y Craik (1979), procesar en profundidad es útil en buena parte porque genera huellas únicas.|V",
      "Lo más eficaz es procesar solo lo que tienen en común los elementos que se estudian.|F|Lo más eficaz es combinar el procesamiento relacional, que organiza lo común, con el específico, que destaca lo único.",
      "El problema de las contraseñas parecidas es la semejanza entre las huellas, no la cantidad de contraseñas.|V"
    ],
    q: [
      "En una lista de sílabas aparece un número, y es lo que mejor se recuerda. ¿Qué efecto actúa?|Von Restorff|Autorreferencia|Generación|El elemento que difiere del resto de una lista homogénea se recuerda mucho mejor.",
      "¿Qué diferencia la distintividad de la elaboración?|La distintividad separa la huella de las demás|La distintividad añade información a la huella|La distintividad solo opera a corto plazo|La elaboración añade información. La distintividad hace que esa información sirva para diferenciar la huella.",
      "Una estudiante subraya en fosforito media página de cada tema. ¿Por qué le sirve de poco?|El subrayado deja de distinguir nada|El subrayado reduce el procesamiento relacional|El subrayado sobrecarga la memoria de trabajo|Si casi todo está marcado, nada difiere del resto y se pierde la ventaja del efecto von Restorff.",
      "¿Por qué el primer día en la universidad se recuerda mejor que los días rutinarios?|Rompe la rutina y queda como episodio separado|Se repasa más veces que los demás días|Se codifica con más repaso de mantenimiento|Lo que se repite de forma parecida se funde en un recuerdo genérico. Lo que rompe la rutina se conserva aparte."
    ],
    inc: [
      "Sobre la distintividad|Una clave que apunta a muchas huellas parecidas gana eficacia|Procesar las diferencias mejora el recuerdo|Una huella muy rica puede costar recuperarla si se parece a muchas|Una clave que apunta a muchas huellas parecidas pierde eficacia: es la sobrecarga de la clave."
    ],
    seq: [],
    cls: [
      "Proceso de codificación|Elaboración: añade información a la huella; preguntas orientadoras; grado de elaboración|Distintividad: separa la huella del resto; efecto von Restorff; procesar las diferencias"
    ] },
  { t: "Organización, mnemotecnias y construcción",
    tip: "Organizar mejora el recuerdo porque proporciona claves de recuperación: Bousfield (1953) observó agrupamiento categorial y Tulving (1962), organización subjetiva con palabras sin relación. Las mnemotecnias (loci, palabra clave, rimas, acrónimos) imponen un código, pero no sustituyen la comprensión. Bransford y Johnson (1972) mostraron que el título ayuda solo si se da antes del texto. Dunlosky et al. (2013) dieron utilidad alta a la práctica de recuperación y a la distribuida, y baja a releer, subrayar y resumir.",
    v: [
      "Agrupamiento categorial=Recordar por categorías palabras presentadas mezcladas (Bousfield, 1953)",
      "Organización objetiva=Estructura que viene dada por el propio material",
      "Organización subjetiva=Estructura propia impuesta a un material sin relación (Tulving, 1962)",
      "Método de los loci=Colocar cada elemento en un punto de un recorrido conocido imaginado",
      "Palabra clave=Unir un término extranjero y otro de sonido parecido mediante una imagen",
      "Práctica de recuperación=Hacerse preguntas o tests, técnica de utilidad alta",
      "Práctica distribuida=Repartir el estudio en varias sesiones",
      "Efecto de testeo=Mejor retención tras intentar recuperar el material (Roediger y Karpicke, 2006)"
    ],
    g: [
      "En el estudio de Bransford y Johnson, el título «lavar la ropa» ayudaba si se daba ___ del texto.|antes|después|en medio",
      "Dunlosky et al. (2013) dieron a la palabra clave una utilidad ___ como técnica general.|baja|alta|moderada",
      "El metaanálisis de Adesope et al. (2017) halló un tamaño del efecto global del testeo de ___.|0,61|0,51|0,21",
      "Recordar un número de móvil como tres bloques de tres cifras es un ejemplo de ___.|agrupamiento|jerarquización|categorización",
      "Releer da sensación de dominio porque el texto resulta ___.|familiar|distintivo|elaborado"
    ],
    tf: [
      "Tulving (1962) observó que, con listas sin relación presentadas en órdenes distintos, los participantes imponían un orden propio cada vez más estable.|V",
      "Según Dunlosky et al. (2013), la palabra clave es una técnica general de estudio de utilidad alta.|F|Obtuvo utilidad baja como técnica general. Funciona con listas y vocabulario, pero no sustituye la comprensión.",
      "En el estudio de Bransford y Johnson, recibir el título después del texto mejoraba el recuerdo tanto como recibirlo antes.|F|Solo ayudaba antes, porque activaba el conocimiento necesario mientras se codificaba. Después ya era tarde.",
      "Enseñar a cada estudiante en su estilo de aprendizaje preferido no tiene apoyo empírico como forma de mejorar su aprendizaje.|V"
    ],
    q: [
      "Para aprender el inglés «shelf» («estante»), alguien imagina un chelo en una estantería. ¿Qué mnemotecnia usa?|Palabra clave|Método de los loci|Acrónimo|Se busca una palabra de sonido parecido en la propia lengua y se forma una imagen que las una.",
      "Según Dunlosky et al. (2013), ¿qué par de técnicas obtuvo utilidad alta?|Práctica de recuperación y práctica distribuida|Práctica de recuperación y subrayado del texto|Relectura del tema y práctica distribuida|Releer, subrayar y resumir, las favoritas de muchos estudiantes, quedaron en utilidad baja.",
      "Un estudiante dice: «aprendo mejor si me lo explican de forma visual, así que solo uso esquemas». ¿Qué indica la evidencia?|No hay apoyo para la hipótesis del ajuste|Debe estudiar solo con material visual|Le conviene alternar estilos según el tema|Pashler et al. (2008) no hallaron apoyo. Lo que mejora el recuerdo de todos es elaborar, organizar y practicar la recuperación.",
      "¿Por qué funciona la organización?|Proporciona claves de recuperación|Aumenta el tiempo de repaso|Elimina la necesidad de comprensión|Recordar la categoría «limpieza» trae consigo el lavavajillas y la lejía."
    ],
    inc: [
      "Sobre organización y técnicas de estudio|Subrayar y releer tienen utilidad alta según Dunlosky et al.|Bousfield observó agrupamiento categorial espontáneo|El efecto de testeo es mayor frente a no hacer nada que frente a reestudiar|Releer, subrayar y resumir obtuvieron utilidad baja. Las de utilidad alta son la práctica de recuperación y la distribuida."
    ],
    seq: [],
    cls: [
      "Utilidad según Dunlosky et al. (2013)|Alta: práctica de recuperación; práctica distribuida|Baja: releer; subrayar; resumir; palabra clave"
    ] }
] }
);

// SAIMAP Psicología · Memoria · Unidades 9–12
window.COURSE.units.push(
{ n: 9, t: "Categorizar el mundo", cap: 3, pir: "baja", mods: [
  { t: "Cómo se representa el conocimiento",
    tip: "Un concepto es la representación mental de una clase de cosas, la categoría es el conjunto de entidades que agrupa y la categorización es el proceso de decidir que un elemento pertenece a ella. Categorizar aporta economía cognitiva, inferencia, comunicación y organización del recuerdo. Gran parte del conocimiento declarativo se guardaría en forma de proposiciones, unidades abstractas de significado, y el procedimental, en reglas «si… entonces…».",
    v: [
      "Concepto=Representación mental de una clase de cosas, con sus propiedades y relaciones",
      "Categoría=Conjunto de entidades, reales o posibles, agrupadas bajo una misma representación",
      "Categorización=Proceso de decidir que un elemento concreto pertenece a una clase",
      "Inferencia=Atribuir propiedades no observadas a algo por saber a qué clase pertenece",
      "Organización del recuerdo=Función por la que las categorías sirven como claves de recuperación",
      "Proposición=Unidad abstracta de significado que expresa una relación entre conceptos",
      "Conocimiento procedimental=Saber cómo se hacen las cosas, representado con reglas «si… entonces…»",
      "Redes semánticas=Modelos sobre cómo se conectan los conceptos y cómo se accede a ellos"
    ],
    g: [
      "Ver un objeto con cuatro patas y respaldo en una cafetería y saber que es una silla es un caso de ___.|categorización|proposición|abstracción",
      "Saber que algo es un perro permite atribuirle propiedades que no se han observado, gracias a la ___.|inferencia|comunicación|percepción",
      "«El gato está en el sofá» y «en el sofá está el gato» expresan la misma ___.|proposición|categoría|imagen",
      "Los esquemas y los guiones intentan explicar cómo se representan las ___ complejas.|situaciones|definiciones|palabras",
      "Las categorías organizan el recuerdo porque funcionan como claves de ___.|recuperación|consolidación|percepción"
    ],
    tf: [
      "Una proposición no es ni una frase ni una imagen.|V",
      "Al cabo de unos minutos solemos recordar las palabras exactas de lo que nos dijeron mejor que su sentido.|F|Es al revés: se recuerda mucho mejor el sentido, porque se guarda la proposición y no la forma literal.",
      "Las redes semánticas son los modelos que explican cómo se decide si algo pertenece a una categoría.|F|Eso lo explican los modelos de categorización. Las redes explican cómo se conectan los conceptos y cómo se accede a ellos.",
      "Los modelos de categorización, las redes semánticas y los esquemas no son excluyentes entre sí.|V"
    ],
    q: [
      "Un niño de dos años llama «perro» a todos los animales de cuatro patas que ve. ¿Qué ilustra?|Que las categorías se ajustan con la experiencia|Que el modelo clásico describe bien sus conceptos|Que todavía no forma proposiciones abstractas|Las categorías se forman desde la primera infancia y se van ajustando hasta separar perros, gatos y vacas.",
      "¿Qué distingue un concepto de una categoría?|El concepto es una representación mental|La categoría es un proceso de decisión|El concepto es el conjunto de entidades|El concepto es la representación mental de una clase. La categoría es el conjunto de entidades y la categorización, el proceso.",
      "¿Qué modelo integra el conocimiento declarativo y el procedimental en una sola arquitectura?|El modelo ACT de Anderson|La red de Collins y Quillian|La teoría de los prototipos|ACT (Unidad 10) combina una memoria declarativa de fragmentos y una procedimental de reglas de producción.",
      "La discusión sobre la categorización gira en torno a con qué se compara lo percibido. ¿Qué opciones se contemplan?|Definición, ejemplar ideal o casos concretos|Proposición, imagen o regla de producción|Nodo, enlace o activación propagada|Se compara con una definición (modelo clásico), con un prototipo o con los ejemplares concretos que se recuerdan."
    ],
    inc: [
      "Sobre las funciones de categorizar|Obliga a recordar cada objeto por separado|Permite inferir propiedades no observadas|Facilita la comunicación con pocas palabras|Es al contrario: por economía cognitiva basta con saber a qué clase pertenece un objeto."
    ],
    seq: [],
    cls: [
      "Familia de modelos|Categorización: modelo clásico; prototipos; ejemplares|Redes semánticas: Collins y Quillian; Collins y Loftus|Esquemas: guiones; situaciones y sucesos complejos"
    ] },
  { t: "El modelo clásico y los prototipos",
    tip: "El modelo clásico define un concepto por rasgos necesarios y suficientes y predice límites nítidos, miembros igual de buenos y definiciones enunciables, algo que falla con la mayoría de los conceptos cotidianos. Rosch propuso que las categorías naturales se organizan en torno a un prototipo, el miembro más típico, y que pertenecer es cuestión de grado de semejanza. La tipicidad predice la velocidad de verificación, el orden al enumerar ejemplos y el aprendizaje infantil.",
    v: [
      "Modelo clásico=Categorías definidas por rasgos necesarios y suficientes, con límites nítidos",
      "Prototipo=Representación del miembro más típico, con los rasgos más frecuentes",
      "Tipicidad=Grado en que un miembro se considera buen representante de su clase",
      "Parecido de familia=Cada miembro comparte muchos rasgos con algunos y pocos con otros",
      "Wittgenstein (1953)=Filósofo que señaló lo difícil que es definir «juego»",
      "Posner y Keele (1968)=Se clasificaba bien un patrón de puntos original que nunca se mostró",
      "Gradiente de tipicidad=Orden de los miembros desde el centro hasta la periferia de la categoría",
      "Límites difusos=Existencia de casos dudosos en los que la gente no se pone de acuerdo"
    ],
    g: [
      "Para Rosch, la pertenencia a una categoría natural es ___.|graduada|absoluta|arbitraria",
      "El modelo clásico funciona bien con conceptos ___, como triángulo o número par.|formales|naturales|ad hoc",
      "«Un gorrión es un pájaro» se verifica más ___ que «un pingüino es un pájaro».|rápido|lento|exacto",
      "Rosch y Mervis (1975) describieron el ___ de familia entre los miembros de una categoría.|parecido|prototipo|gradiente",
      "Un prototipo único pierde información sobre la ___ de la categoría.|variabilidad|tipicidad|pertenencia"
    ],
    tf: [
      "Según Rosch (1975), las personas coinciden bastante al juzgar lo típico que es cada miembro.|V",
      "Los efectos de tipicidad son una predicción del modelo clásico.|F|El modelo clásico predice miembros igual de buenos. La tipicidad la explica la teoría de los prototipos.",
      "Para un niño que va cada día al colegio en autobús, el vehículo típico puede ser el autobús.|V",
      "En Posner y Keele (1968), el patrón original se clasificaba peor que las distorsiones porque nunca se había visto.|F|Se clasificaba muy bien, como si se hubiera visto: los participantes habían abstraído el prototipo."
    ],
    q: [
      "Un grupo discute si el tomate es una fruta y algunos cambian de opinión al día siguiente. ¿Qué modelo tiene más problemas con este hecho?|El modelo clásico|El modelo de prototipos|El de parecido de familia|El modelo clásico supone límites nítidos y no admite casos dudosos.",
      "Al pedir ejemplos de «fruta», casi todos dicen antes «manzana» que «aguacate». ¿Qué efecto ilustra?|Tipicidad|Economía cognitiva|Nivel básico|Los miembros típicos aparecen antes y con más frecuencia cuando se pide enumerar ejemplos de una categoría.",
      "¿Qué limitación de la teoría de los prototipos impulsó los modelos de ejemplares?|Pierde la variabilidad y las correlaciones|No explica los efectos de tipicidad|Exige rasgos necesarios y suficientes|Un prototipo único no conserva cuánto difieren los miembros ni qué rasgos aparecen juntos, como tamaño pequeño y canto.",
      "¿Cuál de estas predicciones corresponde al modelo clásico?|Todos los miembros son igual de buenos|Los miembros típicos se verifican antes|La pertenencia depende de la semejanza|El modelo clásico predice límites nítidos, miembros equivalentes y definiciones enunciables."
    ],
    inc: [
      "Sobre la teoría de los prototipos|Los límites entre categorías son nítidos|Los miembros típicos se aprenden antes|La pertenencia es cuestión de grado|Los límites nítidos son una predicción del modelo clásico. Para los prototipos, los límites son difusos."
    ],
    seq: [],
    cls: [
      "Modelo de categorización|Clásico: rasgos necesarios y suficientes; límites nítidos; miembros equivalentes|Prototipos: miembro más típico; pertenencia graduada; límites difusos"
    ] },
  { t: "Los modelos de ejemplares",
    tip: "Según los modelos de ejemplares no hay ningún resumen de la categoría: se almacenan casos concretos, y un estímulo nuevo se asigna a la categoría cuyos ejemplares se le parecen más en conjunto. El modelo de contexto de Medin y Schaffer (1978), formalizado por Nosofsky, combina los rasgos de forma multiplicativa. Explican la tipicidad, la variabilidad, las correlaciones entre rasgos y los casos atípicos, pero se les critica el coste y la falta de abstracción. No hay un modelo ganador único.",
    v: [
      "Ejemplar=Caso concreto de una categoría con el que se ha tenido experiencia",
      "Modelo de contexto=Propuesta de Medin y Schaffer (1978) basada en la semejanza con casos concretos",
      "Nosofsky=Autor que desarrolló y formalizó el modelo de Medin y Schaffer",
      "Semejanza multiplicativa=Combinación de rasgos que favorece la coincidencia casi total con un caso",
      "Variabilidad=Cuánto pueden diferir entre sí los miembros de una categoría",
      "Correlación entre rasgos=Tendencia de ciertas propiedades a aparecer juntas en una categoría",
      "Crítica de economía=Parece costoso guardar y comparar todos los casos de cada categoría",
      "Modelos híbridos=Combinan representaciones abstractas y casos concretos"
    ],
    g: [
      "En el modelo de contexto, los rasgos se combinan de manera ___.|multiplicativa|aditiva|jerárquica",
      "Que una pizza pueda tener tamaños muy diferentes y una moneda de un euro no es información sobre la ___.|variabilidad|tipicidad|abstracción",
      "Según los modelos de ejemplares, un pingüino se reconoce como pájaro porque se recuerda haber visto ___.|pingüinos|gorriones|prototipos",
      "Al principio del aprendizaje y con pocos casos pesan más los ___.|ejemplares|prototipos|esquemas",
      "Saber que «todos los mamíferos tienen pulmones» plantea a los ejemplares puros un problema de ___.|abstracción|economía|variabilidad"
    ],
    tf: [
      "Los modelos de ejemplares explican los efectos de tipicidad sin necesidad de un prototipo.|V",
      "Los modelos de ejemplares no pueden explicar el resultado de Posner y Keele, porque el patrón original nunca se vio.|F|Sí lo explican: el patrón original se parece, por construcción, a todos los ejemplos estudiados.",
      "En el modelo de contexto, coincidir a medias con muchos ejemplares siempre pesa más que coincidir casi del todo con uno.|F|Al ser multiplicativa, la coincidencia casi total con un ejemplar concreto puede pesar más que muchas coincidencias parciales.",
      "Con categorías artificiales, los modelos de ejemplares e híbridos suelen ajustarse mejor que los de prototipos puros.|V"
    ],
    q: [
      "Alguien que solo ha tenido gatos negros de pelo corto ve un gato persa blanco y lo compara con el persa de su tía. ¿Qué modelo describe el proceso?|El de ejemplares|El de prototipos|El modelo clásico|Según los ejemplares, se compara con los gatos concretos que se recuerdan, no con un gato promedio abstracto.",
      "¿Qué se almacena según los modelos de ejemplares?|Casos concretos experimentados|Un resumen abstracto de rasgos|Una lista de rasgos necesarios|No existe representación resumida: se guardan los ejemplares concretos con los que se ha tenido experiencia.",
      "¿Qué postura recoge mejor el estado actual del debate?|Ambas representaciones coexisten|Los ejemplares han refutado a los prototipos|Los prototipos explican todos los datos|Con pocos casos pesan los ejemplares y con mucha experiencia se forman representaciones abstractas. No hay un ganador único.",
      "¿Por qué un estímulo muy parecido a un caso conocido se clasifica rápido aunque se aleje del promedio?|Por la semejanza multiplicativa|Por su cercanía al prototipo|Por cumplir la definición|La combinación multiplicativa de rasgos da mucho peso a la coincidencia casi total con un ejemplar concreto."
    ],
    inc: [
      "Sobre los modelos de ejemplares|Pierden la información sobre la variabilidad|Conservan las correlaciones entre rasgos|Explican bien las categorías pequeñas|Es al revés: al guardar todos los casos, conservan la variabilidad. Perderla es un límite de los prototipos."
    ],
    seq: [],
    cls: [
      "Modelo de semejanza|Prototipos: resumen abstracto; explica la tipicidad con sencillez; pierde la variabilidad|Ejemplares: casos concretos; conservan la variabilidad; coste de almacenamiento"
    ] },
  { t: "El nivel básico y las categorías basadas en teorías",
    tip: "Rosch et al. (1976) mostraron que, entre el nivel superordinado y el subordinado, hay un nivel básico privilegiado, con el mejor equilibrio entre informatividad y distintividad. Es el primer nombre que se usa, el que se identifica más rápido, el más alto con forma y movimientos comunes y el que se aprende antes, aunque cambia con la pericia. Murphy y Medin (1985) defendieron que las categorías se apoyan también en teorías causales, que explican además las categorías ad hoc de Barsalou (1983).",
    v: [
      "Nivel básico=Nivel intermedio, informativo y distintivo, que se usa por defecto",
      "Nivel superordinado=Nivel más general, cuyos miembros comparten pocos rasgos",
      "Nivel subordinado=Nivel más específico, con categorías que se parecen demasiado entre sí",
      "Informatividad=Cantidad de rasgos que comparten los miembros de una categoría",
      "Distintividad=Grado en que una categoría se diferencia bien de las demás",
      "Pericia=Experiencia que hace más informativo el nivel subordinado",
      "Categoría ad hoc=Agrupación formada sobre la marcha para cumplir un objetivo",
      "Murphy y Medin (1985)=Defendieron que las categorías se apoyan en conocimientos causales"
    ],
    g: [
      "En la jerarquía animal, perro, caniche, el nivel básico es ___.|perro|animal|caniche",
      "Barsalou (1983) estudió categorías como «cosas que salvar en caso de ___».|incendio|mudanza|naufragio",
      "Una ballena se clasifica como mamífero porque el conocimiento ___ pesa más que el aspecto.|biológico|perceptivo|léxico",
      "Para un aficionado a la ornitología, «carbonero» puede funcionar como categoría ___.|básica|superordinada|ad hoc",
      "En el nivel ___ los miembros comparten pocos rasgos: puede ser una hormiga o una ballena.|superordinado|subordinado|básico"
    ],
    tf: [
      "El nivel básico es el que los niños aprenden primero.|V",
      "El nivel básico es el más general de la jerarquía, porque abarca más miembros.|F|Es un nivel intermedio. El más general es el superordinado, cuyos miembros comparten pocos rasgos.",
      "Las categorías ad hoc no muestran tipicidad graduada, porque sus miembros no se parecen entre sí.|F|Sí la muestran: hay ejemplos mejores que otros según su adecuación al objetivo.",
      "El enfoque basado en teorías completa a los modelos de semejanza en lugar de sustituirlos.|V"
    ],
    q: [
      "Una ornitóloga ve un pájaro y dice espontáneamente «un herrerillo», mientras su amigo dice «un pájaro». ¿Qué ilustra?|Que el nivel básico depende de la pericia|Que el nivel básico es siempre el subordinado|Que la ornitóloga usa una categoría ad hoc|La experiencia hace más informativo el nivel subordinado, que puede funcionar como básico para quien es experto.",
      "¿Por qué el nivel subordinado no suele ser el básico?|Sus categorías se distinguen mal entre sí|Sus miembros comparten muy pocos rasgos|Sus miembros tienen formas muy distintas|Un caniche y un bichón se parecen demasiado: falta distintividad. Compartir pocos rasgos es el problema del superordinado.",
      "En la jerarquía «fruta, manzana, manzana reineta», ¿cuál es el nivel básico?|Manzana|Fruta|Manzana reineta|Es el nivel intermedio, el que ofrece el mejor equilibrio entre informatividad y distintividad.",
      "Un animal idéntico a un perro, pero de origen distinto, plantea dudas sobre si es un perro. ¿Qué enfoque lo explica mejor?|Las categorías basadas en teorías|El modelo de prototipos|El modelo de ejemplares|La semejanza sería máxima, así que la duda procede del conocimiento causal sobre qué rasgos importan (Murphy y Medin, 1985)."
    ],
    inc: [
      "Sobre las ventajas del nivel básico|Es el nivel en que más tarda la identificación|Es el primer nombre que se usa espontáneamente|Sus miembros se manejan con movimientos parecidos|Los objetos se identifican más rápido en el nivel básico, no más despacio."
    ],
    seq: [],
    cls: [
      "Nivel de categorización|Superordinado: animal; mueble; fruta|Básico: perro; silla; manzana|Subordinado: caniche; silla de oficina; manzana reineta"
    ] }
] },
{ n: 10, t: "Redes, ACT y esquemas", cap: 3, pir: "baja", mods: [
  { t: "La red jerárquica de Collins y Quillian",
    tip: "Una red semántica se compone de nodos (conceptos) y enlaces (relaciones como «es un» o «tiene»). Collins y Quillian (1969) propusieron una jerarquía con economía cognitiva: cada propiedad se guarda una vez, en el nivel más alto al que se aplica, y las excepciones, en el nivel inferior. Predice que, cuantos más niveles hay que recorrer, más se tarda en verificar una frase. La tipicidad, las inversiones de la jerarquía, la familiaridad y las respuestas negativas la cuestionaron.",
    v: [
      "Nodo=Elemento de una red que representa un concepto",
      "Enlace=Conexión entre conceptos que representa una relación, como «es un» o «tiene»",
      "Economía cognitiva=Cada propiedad se guarda una vez, en el nivel más alto al que se aplica",
      "Herencia=Atribuir a un concepto las propiedades guardadas en niveles superiores",
      "Verificación de frases=Tarea de decidir lo antes posible si una afirmación es verdadera",
      "Inversión de la jerarquía=Verificar «un perro es un animal» antes que «un perro es un mamífero»",
      "Rips, Shoben y Smith=Mostraron en 1973 que importa la relación entre conceptos, no su posición lógica",
      "Excepción=Propiedad guardada en el nivel inferior que anula la heredada, como «no vuela»"
    ],
    g: [
      "Según Collins y Quillian, la propiedad «respira» se guarda en el nodo ___.|animal|pájaro|canario",
      "Para verificar «un canario tiene piel» hay que recorrer ___ niveles de la red.|dos|cero|tres",
      "El modelo se inspiró en un programa informático diseñado para ___ el lenguaje.|comprender|traducir|producir",
      "El avestruz lleva asociada la propiedad «no vuela», que ___ la heredada del nodo «pájaro».|anula|refuerza|duplica",
      "Que se rechace antes «un canario es un pez» que «un murciélago es un pájaro» es un problema de las respuestas ___.|negativas|afirmativas|típicas"
    ],
    tf: [
      "En la tarea de verificación, los tiempos aumentaban con los niveles tanto en frases de pertenencia como de propiedades.|V",
      "Que «un petirrojo es un pájaro» se verifique antes que «un avestruz es un pájaro» apoya la red jerárquica.|F|La contradice: ambos están a la misma distancia del nodo «pájaro» y la red no prevé diferencias entre miembros del mismo nivel.",
      "Quizá «un canario tiene piel» es lento porque casi nunca se piensa en la piel de los canarios.|V",
      "Los datos críticos invalidaron la idea misma de red semántica.|F|No invalidaron la idea de red, sino la organización estrictamente jerárquica y la economía cognitiva tal como se formularon."
    ],
    q: [
      "Según Collins y Quillian, ¿qué frase debería verificarse más rápido?|«Un canario canta»|«Un canario respira»|«Un canario tiene alas»|«Canta» se guarda en el propio nodo «canario». «Tiene alas» exige subir un nivel y «respira», dos.",
      "Una participante verifica «un perro es un animal» antes que «un perro es un mamífero». ¿Cómo se denomina este hallazgo?|Inversión de la jerarquía|Efecto de tipicidad|Efecto abanico|Lo hallaron Rips, Shoben y Smith (1973): importa la relación entre los conceptos, no su posición lógica.",
      "¿Qué dato contradice la red jerárquica?|El efecto de tipicidad|El priming semántico|La herencia de propiedades|La red no prevé diferencias entre miembros del mismo nivel, como petirrojo y avestruz respecto a «pájaro».",
      "¿Dónde se almacena la propiedad «tiene alas» en la red?|En el nodo «pájaro»|En el nodo «canario»|En el nodo «animal»|Por economía cognitiva, se guarda en el nivel más alto al que se aplica, el de los pájaros."
    ],
    inc: [
      "Sobre la red de Collins y Quillian|Cada propiedad se repite en todos los nodos a los que se aplica|Las excepciones se guardan en el nivel inferior|Predice más tiempo cuantos más niveles se recorren|Por economía cognitiva, cada propiedad se guarda una sola vez, en el nivel más alto al que se aplica."
    ],
    seq: [
      "Frases de la más rápida a la más lenta según Collins y Quillian|«Un canario es amarillo»>«Un canario puede volar»>«Un canario tiene piel»"
    ],
    cls: [] },
  { t: "La propagación de la activación (Collins y Loftus)",
    tip: "Collins y Loftus (1975) abandonaron la jerarquía estricta: los enlaces son de muchos tipos y de longitud variable según la distancia semántica, que depende de la experiencia. Al procesar un concepto, la activación se extiende por los enlaces, se debilita con la distancia y el tiempo y facilita después los nodos que alcanza. Su prueba más directa es el priming semántico (Meyer y Schvaneveldt, 1971). Su punto débil es la flexibilidad, que lo hace difícil de someter a prueba.",
    v: [
      "Distancia semántica=Grado de relación entre dos conceptos, reflejado en la longitud del enlace",
      "Propagación de la activación=Extensión de la activación a los nodos conectados, debilitándose con la distancia",
      "Priming semántico=Procesamiento más rápido de una palabra precedida por otra relacionada",
      "Decisión léxica=Tarea de decidir si una cadena de letras es una palabra",
      "Meyer y Schvaneveldt=Mostraron en 1971 que «pan» acelera la respuesta a «mantequilla»",
      "Suma de activación=Un nodo alcanzado por varios caminos a la vez se activa más",
      "Modelos conexionistas=Representan los conceptos como patrones distribuidos en muchas unidades",
      "Flexibilidad=Crítica de que el modelo puede ajustarse para explicar casi cualquier resultado"
    ],
    g: [
      "En el modelo de Collins y Loftus, cuanto más relacionados están dos conceptos, más ___ es el enlace.|corto|largo|débil",
      "Pensar en «camión de bomberos» apenas activa «cereza», a la que se llega solo a través de «___».|rojo|fuego|sirena",
      "En la tarea de Meyer y Schvaneveldt había que decidir si dos cadenas de letras eran ___.|palabras|sinónimos|antónimos",
      "La activación se debilita con la distancia y con el ___.|tiempo|uso|aprendizaje",
      "Por su flexibilidad, el modelo se considera más un ___ útil que una teoría con predicciones precisas.|marco|algoritmo|experimento"
    ],
    tf: [
      "La red de cada persona depende de su experiencia, y los conceptos que se piensan juntos a menudo quedan cerca.|V",
      "La economía cognitiva es el principio central del modelo de Collins y Loftus.|F|La economía cognitiva es de Collins y Quillian. Collins y Loftus se basan en la distancia semántica y la propagación de la activación.",
      "Oír a la vez «rojo» y «sirena» activa «camión de bomberos» más que cada palabra por separado.|V",
      "La principal crítica al modelo es que sus predicciones son tan precisas que los datos las refutan a menudo.|F|Es lo contrario: como la longitud y el número de enlaces se ajustan casi a voluntad, explica casi todo y es difícil de probar."
    ],
    q: [
      "En una decisión léxica, «enfermera» se reconoce antes tras «médico» que tras «silla». ¿Qué lo explica?|La preactivación por propagación|La herencia desde un nodo superior|El efecto abanico de Anderson|Es priming semántico: «médico» preactiva a «enfermera» por propagación de la activación.",
      "¿Cómo explica el modelo que «perro» se verifique antes como animal que como mamífero?|Porque se usan juntos más a menudo|Porque «animal» está más arriba|Porque «mamífero» tiene excepciones|«Perro» está más cerca de «animal» en la red porque ambos conceptos se piensan juntos con más frecuencia.",
      "En el paradigma DRM, alguien estudia «cama», «almohada» y «descanso» y luego «recuerda» «dormir». ¿Qué lo explica según este modelo?|La activación propagada a «dormir»|La economía cognitiva de la red|La herencia de una propiedad general|Estudiar las palabras asociadas activa con fuerza el concepto «dormir», que acaba recordándose aunque no se presentó.",
      "¿Qué conservaron los modelos conexionistas del de Collins y Loftus?|La activación que se propaga|Los nodos como conceptos aislados|La jerarquía estricta de niveles|Mantienen la idea de activación que se propaga, pero representan los conceptos como patrones distribuidos en muchas unidades."
    ],
    inc: [
      "Sobre la propagación de la activación|La activación llega con igual fuerza a todos los nodos|Un nodo preactivado se procesa después con más facilidad|Los miembros típicos están más cerca de su categoría|La activación se debilita con la distancia y llega con más fuerza a los nodos cercanos."
    ],
    seq: [
      "Propagación de la activación|Se procesa un concepto>Su nodo se activa>La activación se extiende por los enlaces>Se debilita con la distancia y el tiempo>Los nodos alcanzados se procesan mejor"
    ],
    cls: [] },
  { t: "El modelo ACT de Anderson",
    tip: "ACT (Adaptive Control of Thought) es una arquitectura cognitiva de Anderson con una memoria declarativa de fragmentos en red, una procedimental de reglas de producción «si… entonces…» y una memoria de trabajo donde ambas se encuentran. Tuvo varias versiones: ACT (1976), ACT∗ (1983) y ACT-R (1998). Con la práctica, el conocimiento declarativo se compila en reglas rápidas y automáticas. En la red declarativa aparece el efecto abanico, y su limitación es el gran número de parámetros.",
    v: [
      "ACT=Arquitectura de Anderson que integra conocimiento declarativo y procedimental",
      "Fragmento=Unidad de la memoria declarativa en ACT, organizada en red (chunk)",
      "Regla de producción=Unidad procedimental con la forma «si condición, entonces acción»",
      "Memoria de trabajo=En ACT, la información activa en cada momento, donde se encuentran ambas memorias",
      "Compilación=Paso de instrucciones declarativas a reglas que se ejecutan de forma automática",
      "Efecto abanico=Más hechos sobre un concepto hacen más lenta la verificación de cada uno",
      "ACT-R=Versión de Anderson y Lebiere (1998) que se sigue usando en simulaciones",
      "Memoria declarativa=Hechos y conceptos, el «saber qué», de acceso consciente"
    ],
    g: [
      "En ACT, el conocimiento procedimental se representa mediante reglas de ___.|producción|asociación|inferencia",
      "Anderson describió el efecto abanico en ___.|1974|1983|1998",
      "Al principio, quien aprende a conducir usa conocimiento ___.|declarativo|procedimental|automático",
      "La facilidad para recuperar un fragmento depende de lo a menudo y lo ___ que se ha usado.|recientemente|lentamente|conscientemente",
      "La principal limitación de ACT es el gran número de ___ que necesita.|parámetros|participantes|experimentos"
    ],
    tf: [
      "En ACT, la acción de una regla de producción puede crear el objetivo de la siguiente.|V",
      "En ACT, las reglas de producción forman parte del conocimiento declarativo.|F|Las reglas de producción son la unidad del conocimiento procedimental. El declarativo se organiza en fragmentos.",
      "Un conductor experto puede cambiar de marcha mientras conversa, pero le cuesta explicar con detalle lo que hace.|V",
      "Según el efecto abanico, cuantos más hechos se conocen sobre un concepto, más rápido se verifica cada uno.|F|Es al revés: la activación se reparte entre más enlaces y cada hecho se verifica más despacio."
    ],
    q: [
      "Una persona aprende muchos datos nuevos sobre un mismo personaje histórico y tarda más en verificar cualquiera de ellos. ¿Qué efecto muestra?|Efecto abanico|Priming semántico|Efecto de tipicidad|Al aumentar los hechos asociados a un concepto, la activación se reparte y la verificación se enlentece (Anderson, 1974).",
      "«SI el objetivo es no mojarme Y llueve, ENTONCES coger el paraguas.» ¿Qué representa en ACT?|Una regla de producción|Un fragmento declarativo|Un guion de situación|Tiene una condición y una acción, que es la forma de las unidades del conocimiento procedimental.",
      "Un aprendiz de conductor recita «primero el embrague, luego la marcha» y lo aplica paso a paso. ¿En qué fase está según ACT?|Usa conocimiento declarativo|Ya ha compilado las reglas|Usa solo la memoria procedimental|Al principio se aplican instrucciones declarativas, de forma lenta y consciente. Con la práctica se compilan en reglas.",
      "¿Qué rasgo corresponde a la memoria procedimental de ACT?|Acceso en gran parte automático|Formato de fragmentos en red|Contenido de hechos y conceptos|La procedimental es «saber cómo», en reglas de producción y en gran parte automática. Los fragmentos son declarativos."
    ],
    inc: [
      "Sobre el modelo ACT|Su versión más reciente es ACT∗, de 1998|Distingue una memoria declarativa y otra procedimental|Incluye una memoria de trabajo con la información activa|ACT∗ es de 1983. La versión de 1998 es ACT-R, de Anderson y Lebiere."
    ],
    seq: [
      "Adquisición de una habilidad según ACT|Instrucciones declarativas>Aplicación lenta y consciente paso a paso>Compilación en reglas de producción>Ejecución rápida y automática"
    ],
    cls: [
      "Memoria a largo plazo en ACT|Declarativa: fragmentos en red; saber qué; acceso consciente|Procedimental: reglas de producción; saber cómo; acceso automático"
    ] },
  { t: "Esquemas y guiones",
    tip: "Un esquema es una estructura genérica de conocimiento sobre un tipo de situación, con huecos y valores por defecto, que se anida en otros y se activa de forma automática. La idea procede de Bartlett (1932). Un guion es un esquema de una secuencia ordenada de acciones (Schank y Abelson, 1977). Los esquemas actúan al codificar, almacenar y recuperar. Brewer y Treyens (1981) mostraron su doble cara: ayudan a comprender y a recordar lo esencial, pero producen intrusiones de lo esperado.",
    v: [
      "Esquema=Estructura genérica de conocimiento sobre un tipo de situación, objeto o suceso",
      "Guion=Esquema de una secuencia ordenada de acciones habituales",
      "Valor por defecto=Dato que se asume en un hueco si no se dice lo contrario",
      "Hueco=Variable del esquema que se rellena con los datos de cada situación",
      "Bartlett (1932)=Usó la idea de esquema para explicar distorsiones en «La guerra de los fantasmas»",
      "Schank y Abelson=Ilustraron en 1977 el guion del restaurante",
      "Intrusión=Recuerdo de elementos esperados que no estaban presentes",
      "Normalización=Ajuste en el recuerdo de lo que no encaja con lo esperado"
    ],
    g: [
      "El esquema de «compra» incluye siempre un comprador, un vendedor, un objeto y un ___.|precio|recibo|regalo",
      "Bower, Black y Turner (1979) vieron que, al recordar historias basadas en guiones, se ___ acciones típicas no mencionadas.|añaden|omiten|invierten",
      "En el estudio de Brewer y Treyens, varios participantes «recordaban» ___ que no estaban en el despacho.|libros|sillas|mesas",
      "Tener hambre y tener dinero son las ___ de entrada del guion del restaurante.|condiciones|consecuencias|acciones",
      "Recordar el argumento de una película y no sus diálogos refleja el papel del esquema en el ___.|almacenamiento|reconocimiento|aprendizaje"
    ],
    tf: [
      "Los esquemas se anidan unos dentro de otros y se activan de forma automática al reconocer una situación.|V",
      "Un esquema es un tipo de guion limitado a secuencias ordenadas de acciones.|F|Es al revés: el guion es un tipo de esquema, el que representa una secuencia ordenada de acciones.",
      "En Brewer y Treyens (1981), los participantes sabían de antemano que tendrían que recordar los objetos de la sala.|F|El recuerdo se pidió sin aviso previo, tras una breve espera en lo que se presentaba como el despacho de un investigador.",
      "En Brewer y Treyens también se recordaban algunos objetos llamativos que no encajaban en el esquema.|V"
    ],
    q: [
      "Un amigo cuenta que se ha comprado un coche y el oyente da por hecho que pagó y que le dieron las llaves. ¿Qué rasgo del esquema actúa?|Los valores por defecto|La normalización del recuerdo|La anidación de esquemas|Los huecos del esquema se rellenan con valores por defecto si no se dice lo contrario.",
      "Lucía recuerda haber pagado con tarjeta en un restaurante, aunque pagó en efectivo, porque es lo que suele hacer. ¿En qué fase actuó el esquema?|En la recuperación|En la codificación|En el almacenamiento|Al recuperar, el esquema rellena los huecos con lo esperado, lo que produce errores coherentes con lo habitual.",
      "¿Qué distingue un guion de otros esquemas?|Representa acciones en un orden fijo|Carece de huecos y de valores por defecto|Se aplica solo a objetos y lugares|El guion, como el del restaurante, es un esquema de acciones ordenadas, con papeles, condiciones de entrada y resultados.",
      "¿Qué muestra el estudio de Brewer y Treyens (1981) sobre los esquemas?|Que ayudan y a la vez generan errores|Que solo facilitan el recuerdo exacto|Que impiden recordar objetos llamativos|Se recordaban bien los objetos coherentes con un despacho, pero también se «recordaban» libros inexistentes."
    ],
    inc: [
      "Sobre los esquemas|Impiden recordar lo esencial de una situación|Guían la atención y la interpretación al codificar|Producen intrusiones de lo esperado|Los esquemas permiten recordar lo esencial con poco esfuerzo. Su coste son las intrusiones y la normalización."
    ],
    seq: [
      "Guion del restaurante|Entrar>Esperar a que asignen mesa>Mirar la carta>Pedir>Comer>Pedir la cuenta>Pagar>Salir"
    ],
    cls: [
      "Fase de la memoria y efecto del esquema|Codificación: guía la atención; da sentido al texto de Bransford y Johnson|Almacenamiento: guarda lo esencial; integra con lo conocido|Recuperación: rellena huecos con lo esperado; pago con tarjeta supuesto"
    ] }
] },
{ n: 11, t: "Tareas y tipos de recuperación", cap: 4, pir: "media", mods: [
  { t: "Recuerdo libre, recuerdo con claves y reconocimiento",
    tip: "La recuperación es la única fase de la memoria que se observa directamente. Tulving distinguió disponibilidad y accesibilidad: en Tulving y Pearlstone (1966), dar los nombres de las categorías hacía aparecer palabras que no salían en recuerdo libre. El rendimiento suele ser mayor en reconocimiento que en recuerdo con claves, y en este que en recuerdo libre, pero no es una ley, y la frecuencia de las palabras disocia recuerdo y reconocimiento. Recuperar también fortalece la memoria (efecto de testeo).",
    v: [
      "Disponibilidad=Que una información esté almacenada, se pueda recuperar o no",
      "Accesibilidad=Posibilidad de llegar a lo almacenado en un momento y con unas claves dados",
      "Recuerdo libre=Reproducir el material sin ayuda y en cualquier orden",
      "Recuerdo serial=Reproducir el material en el orden original",
      "Recuerdo con claves=Reproducir el material con una pista asociada, como la categoría",
      "Reconocimiento=Identificar el material estudiado mezclado con distractores",
      "Falsa alarma=Responder «antiguo» ante un elemento nuevo",
      "Efecto de testeo=Mejora de la memoria por el propio acto de recuperar (Roediger y Karpicke, 2006)"
    ],
    g: [
      "En Tulving y Pearlstone (1966), las palabras que salían con claves estaban disponibles, pero no ___.|accesibles|almacenadas|codificadas",
      "En recuerdo libre se recuerdan mejor las palabras ___.|frecuentes|infrecuentes|abstractas",
      "Las palabras poco frecuentes se ___ mejor, porque destacan cuando aparecen en la prueba.|reconocen|recuerdan|repasan",
      "Escoger el elemento antiguo entre varias opciones es reconocimiento de ___.|elección forzada|sí o no|recuerdo libre",
      "Una parte importante del olvido cotidiano es un fallo de ___ y no una pérdida de la huella.|acceso|codificación|consolidación"
    ],
    tf: [
      "La recuperación es la única fase de la memoria que se observa directamente.|V",
      "El rendimiento es siempre mayor en reconocimiento que en cualquier forma de recuerdo.|F|Es la tendencia general, pero no una ley: con claves adecuadas el recuerdo puede superar al reconocimiento.",
      "Quien respondiera siempre «sí» en un reconocimiento sí/no acertaría todos los elementos estudiados.|V",
      "En Tulving y Pearlstone (1966), las palabras olvidadas en recuerdo libre se habían borrado del almacén.|F|Muchas aparecieron al dar los nombres de las categorías: estaban disponibles, pero no accesibles sin ayuda."
    ],
    q: [
      "Un estudiante que solo ha releído los apuntes cree dominar el tema, pero se bloquea en una pregunta de desarrollo. ¿Qué lo explica mejor?|Reconoce el material, pero no lo produce|Ha perdido la huella de lo estudiado|El desarrollo es una prueba implícita|Releer prepara para reconocer. Una pregunta de desarrollo exige producir la información sin ayuda.",
      "«¿Quién estudió la memoria icónica con el informe parcial?» ¿Qué tipo de tarea es?|Recuerdo con claves|Reconocimiento|Recuerdo libre|La pregunta aporta una pista asociada al material, no la respuesta. Un test con opciones sería reconocimiento.",
      "¿Qué disociación sugirió que recuerdo y reconocimiento no miden exactamente lo mismo?|El efecto de la frecuencia léxica|El efecto de la longitud de la lista|El efecto del orden de presentación|Las palabras frecuentes se recuerdan mejor en recuerdo libre y las infrecuentes se reconocen mejor.",
      "¿Por qué el reconocimiento sí/no se analiza a menudo con la teoría de detección de señales?|Para combinar aciertos y falsas alarmas|Para registrar solo los aciertos posibles|Porque elimina el sesgo de respuesta|Alguien podría acertarlo todo diciendo siempre «sí», así que la medida correcta combina ambas tasas."
    ],
    inc: [
      "Sobre las tareas explícitas|El recuerdo serial permite responder en cualquier orden|El reconocimiento mezcla el material con distractores|El recuerdo con claves da una pista asociada|En el recuerdo serial hay que respetar el orden original. Responder en cualquier orden es propio del recuerdo libre."
    ],
    seq: [
      "Tareas explícitas según la ayuda que ofrecen, de menos a más|Recuerdo libre>Recuerdo con claves>Reconocimiento"
    ],
    cls: [
      "Tarea de recuperación|Recuerdo: libre; serial; con claves|Reconocimiento: sí o no; elección forzada"
    ] },
  { t: "La recuperación implícita",
    tip: "En las pruebas implícitas no se pide recordar: la memoria se infiere del priming, la facilitación que produce la experiencia previa (término popularizado por Graf y Schacter, 1985). Completar raíces o fragmentos, la identificación perceptiva y la decisión léxica miden sobre todo priming perceptivo, y la generación de ejemplares, priming conceptual. La profundidad apenas afecta al priming perceptivo, que se reduce con cambios de modalidad y se conserva en la amnesia y el envejecimiento. Hay que controlar la contaminación explícita.",
    v: [
      "Prueba implícita=Tarea sin instrucción de recordar en la que la memoria se infiere por facilitación",
      "Priming=Cambio en el rendimiento producido por la experiencia previa",
      "Completar raíces=Escribir la primera palabra que venga a la mente con un inicio dado",
      "Completar fragmentos=Rellenar los huecos de una palabra incompleta",
      "Priming perceptivo=Facilitación basada en la forma del estímulo",
      "Priming conceptual=Facilitación basada en el significado del estímulo",
      "Contaminación explícita=Recordar a propósito durante una tarea que debería ser indirecta",
      "Disociación de procesos=Método de Jacoby (1991) que separa los componentes consciente y automático"
    ],
    g: [
      "La generación de ejemplares de una categoría mide sobre todo priming ___.|conceptual|perceptivo|motor",
      "El término «memoria implícita» se popularizó a partir de Graf y ___ (1985).|Schacter|Squire|Tulving",
      "Cambiar de modalidad entre el estudio y la prueba ___ el priming perceptivo.|reduce|aumenta|mantiene",
      "Para la interpretación de ___, el priming depende de un sistema no declarativo apoyado en la neocorteza.|sistemas|procesamiento|niveles",
      "El procedimiento de disociación de procesos lo propuso ___ en 1991.|Jacoby|Roediger|Mandler"
    ],
    tf: [
      "Los amnésicos completan raíces con palabras estudiadas tanto como los controles si se les pide escribir lo primero que se les ocurra.|V",
      "La profundidad de procesamiento mejora el priming perceptivo tanto como el recuerdo explícito.|F|Tiene gran efecto en las pruebas explícitas y poco o ninguno en el priming perceptivo. Es una trampa típica.",
      "El reconocimiento es una prueba implícita porque resulta más fácil que el recuerdo.|F|Es una prueba explícita: se pide decidir si el elemento se estudió. Ser más fácil no la convierte en implícita.",
      "Hoy se acepta que tanto la interpretación de sistemas como la de procesamiento captan parte del fenómeno.|V"
    ],
    q: [
      "Alguien apunta «mandarinas» en la lista de la compra y al día siguiente completa MAN_ _ _ _ _ _ con «mandarina», sin recordar la lista. ¿Qué muestra?|Priming en una prueba implícita|Recuerdo con claves de la lista|Contaminación explícita de la tarea|La experiencia previa facilita la respuesta sin que se haga referencia a ella ni se recuerde de forma consciente.",
      "Un participante nota que las raíces corresponden a palabras estudiadas y empieza a recordarlas a propósito. ¿Qué problema metodológico aparece?|Contaminación explícita|Priming conceptual|Sobrecarga de la clave|La prueba deja de ser implícita. Se controla preguntando al final, con tareas de orientación o con la disociación de procesos.",
      "¿Qué variable apenas afecta al priming perceptivo pero sí al recuerdo?|La profundidad de procesamiento|El cambio de tipografía|El cambio de modalidad|El procesamiento semántico mejora mucho el recuerdo y poco el priming perceptivo, que sí se reduce con cambios de forma.",
      "¿Cuál de estas tareas mide sobre todo priming perceptivo?|Identificación perceptiva|Generación de ejemplares|Asociación libre|La identificación de estímulos breves o degradados se basa en la forma. La generación y la asociación miden priming conceptual."
    ],
    inc: [
      "Sobre las disociaciones entre pruebas|El envejecimiento empeora mucho el priming perceptivo|La amnesia afecta mucho a las pruebas explícitas|El cambio de modalidad reduce el priming perceptivo|Con el envejecimiento normal empeoran las pruebas explícitas, mientras que el priming perceptivo se conserva bastante."
    ],
    seq: [],
    cls: [
      "Tipo de prueba|Explícita: recuerdo libre; recuerdo con claves; reconocimiento|Implícita: completar raíces; completar fragmentos; identificación perceptiva"
    ] },
  { t: "Familiaridad y recolección",
    tip: "Los modelos de doble proceso (Mandler, 1980, y Yonelinas, 2002) separan la familiaridad, una sensación rápida y gradual de que algo es conocido, de la recolección, más lenta y controlada, que recupera detalles del episodio y funciona más bien por umbral. Las apoyan la velocidad, el reconocimiento asociativo, el envejecimiento y la neuroimagen: en una simplificación muy usada, la familiaridad depende de la corteza perirrinal y la recolección, del hipocampo. Los modelos de un solo proceso hablan de una única fuerza de la huella.",
    v: [
      "Familiaridad=Sensación rápida y gradual de que algo es conocido, sin detalles del episodio",
      "Recolección=Recuperación de detalles del episodio, como el lugar o el momento",
      "Corteza perirrinal=Estructura del lóbulo temporal medial anterior asociada a la sensación de «me suena»",
      "Hipocampo=Estructura asociada sobre todo a la recuperación de detalles del episodio",
      "Reconocimiento asociativo=Distinguir pares estudiados de pares recombinados con palabras estudiadas",
      "Modelo de un solo proceso=El reconocimiento depende de una única dimensión de fuerza de la huella",
      "Funcionamiento por umbral=O se recupera algún detalle del episodio o no se recupera",
      "Modelos de doble proceso=Separan una sensación de conocido y una recuperación de detalles"
    ],
    g: [
      "Con muy poco tiempo para responder, el reconocimiento se apoya sobre todo en la ___.|familiaridad|recolección|búsqueda",
      "Con la edad se deteriora más la ___ que la familiaridad.|recolección|fluidez|repetición",
      "Distinguir «perro-nube» de «perro-mesa», si ambas palabras se estudiaron, depende sobre todo de la ___.|recolección|familiaridad|fluidez",
      "La familiaridad es más sensible a la repetición y a la fluidez ___.|perceptiva|semántica|emocional",
      "En recuerdo libre la familiaridad apenas sirve, porque no hay ningún elemento presente que pueda ___.|sonar|olvidarse|codificarse"
    ],
    tf: [
      "La familiaridad varía de forma gradual, de «me suena un poco» a «me suena muchísimo».|V",
      "La familiaridad se asocia sobre todo al hipocampo y la recolección, a la corteza perirrinal.|F|Es al revés: la recolección se asocia al hipocampo y la familiaridad, a la corteza perirrinal. Es una trampa típica.",
      "La familiaridad puede hacer que un nombre leído hace poco en una lista parezca el de una persona famosa.|V",
      "Los casos de lesiones selectivas coinciden siempre con la división entre hipocampo y corteza perirrinal.|F|No todos los resultados encajan con esa división, y la discusión sigue abierta."
    ],
    q: [
      "En el metro, alguien nos resulta conocido sin saber de qué, y segundos después caemos en que es el camarero de la facultad. ¿Qué secuencia describe?|Familiaridad seguida de recolección|Recolección seguida de familiaridad|Recolección en dos fases distintas|Primero surge la sensación rápida de algo conocido y después se recuperan detalles del contexto en que se conoció.",
      "Una persona mayor reconoce una cara, pero duda de dónde la conoce. ¿Qué patrón encaja?|Recolección más afectada que familiaridad|Familiaridad más afectada que recolección|Ambos procesos igual de conservados|Con la edad se deteriora más la recolección, que aporta el contexto, que la familiaridad.",
      "¿Qué rasgo corresponde a la recolección?|Es más lenta y depende de la atención|Varía de forma gradual y automática|Se asocia a la corteza perirrinal|La recolección es más lenta, controlada y por umbral, y se asocia al hipocampo.",
      "¿Qué sostienen los modelos de un solo proceso?|Que hay una única dimensión de fuerza|Que solo interviene la recolección|Que la familiaridad depende del hipocampo|«Recordar con detalle» sería el extremo alto de la fuerza de la huella, no un proceso distinto."
    ],
    inc: [
      "Sobre la familiaridad|Recupera detalles del episodio de estudio|Es rápida y relativamente automática|Puede bastar en una prueba de reconocimiento|Recuperar detalles del episodio es propio de la recolección. La familiaridad no informa del origen."
    ],
    seq: [],
    cls: [
      "Proceso de reconocimiento|Familiaridad: rápida; gradual; corteza perirrinal; «me suena»|Recolección: más lenta; por umbral; hipocampo; detalles del episodio"
    ] },
  { t: "Recordar y saber",
    tip: "En el paradigma recordar/saber (Tulving, 1985), tras cada acierto la persona indica si revive algo del estudio («recordar», conciencia autonoética) o solo sabe que el elemento estaba («saber», conciencia noética). A menudo se añade «adivinar». El procesamiento semántico, la generación y la atención aumentan sobre todo «recordar», que disminuye con el daño hipocampal y la edad. Usarlas como medidas de recolección y familiaridad tiene límites: «recordar» no garantiza exactitud y la distinción depende de las instrucciones.",
    v: [
      "Paradigma recordar/saber=Clasificar cada acierto según se reviva el episodio o solo se tenga certeza",
      "Respuesta «recordar»=Revivir algo del momento del estudio, como un pensamiento propio",
      "Respuesta «saber»=Seguridad de que el elemento estaba sin recuperar ningún detalle",
      "Conciencia autonoética=Conciencia propia de la memoria episódica, que permite «viajar» al pasado",
      "Conciencia noética=Conciencia propia de la memoria semántica, sin revivir el episodio",
      "Opción «adivinar»=Categoría añadida para separar las respuestas al azar",
      "Tulving (1985)=Autor que propuso clasificar la experiencia subjetiva de cada acierto",
      "Palabra crítica=Elemento nunca presentado del DRM que muchos dicen revivir"
    ],
    g: [
      "La respuesta «recordar» se relaciona con la conciencia ___.|autonoética|noética|semántica",
      "Para que las respuestas al azar no se mezclen con «saber», muchos estudios añaden la opción ___.|adivinar|olvidar|dudar",
      "La generación activa durante el estudio aumenta sobre todo las respuestas ___.|«recordar»|«saber»|«adivinar»",
      "En las personas mayores y con daño ___ disminuyen sobre todo las respuestas «recordar».|hipocampal|perirrinal|cerebeloso",
      "Si al repasar casi todo se «sabe» y nada se «recuerda», el material está poco ___.|elaborado|repetido|leído"
    ],
    tf: [
      "Una respuesta «recordar» garantiza que el recuerdo es exacto.|F|En el paradigma DRM muchos dicen «recordar» la palabra crítica nunca presentada. Revivir es una construcción.",
      "Pequeños cambios en la explicación de la distinción modifican las proporciones de cada respuesta.|V",
      "Una respuesta «saber» equivale siempre a una sensación de familiaridad.|F|A veces se «sabe» que algo estaba porque se deduce, por ejemplo porque encaja con el tema de la lista, sin familiaridad.",
      "Desde una interpretación de un solo proceso, «recordar» reflejaría una confianza muy alta y «saber», una intermedia.|V"
    ],
    q: [
      "En un test, una estudiante elige una opción sobre la memoria ecoica porque recuerda que estaba junto a la figura de Sperling y a un comentario del profesor. ¿Qué respuesta daría?|«Recordar»|«Saber»|«Adivinar»|Revive detalles del momento del estudio, lo que corresponde a la conciencia autonoética.",
      "¿Qué manipulación durante el estudio aumenta sobre todo las respuestas «recordar»?|La atención completa|La repetición sin atención|Ciertos cambios perceptivos|El procesamiento semántico, la generación y la atención completa aumentan «recordar». Las otras afectan más a «saber».",
      "Un participante del DRM dice «recordar» haber visto «dormir», que nunca se presentó. ¿Qué límite del paradigma ilustra?|«Recordar» no garantiza exactitud|«Saber» no es solo familiaridad|Las instrucciones no influyen|La experiencia de revivir es una construcción, no un sello de autenticidad.",
      "¿Cuál es la principal ventaja del paradigma recordar/saber?|Su sencillez|Su independencia de las instrucciones|Su correspondencia exacta con el hipocampo|Basta una pregunta más tras cada respuesta de reconocimiento para conocer la calidad del recuerdo, no solo su exactitud."
    ],
    inc: [
      "Sobre el paradigma recordar/saber|Las respuestas «recordar» aumentan con el daño hipocampal|«Recordar» se relaciona con la conciencia autonoética|Se ha usado para estimar recolección y familiaridad|Con el daño hipocampal y en las personas mayores disminuyen sobre todo las respuestas «recordar»."
    ],
    seq: [],
    cls: [
      "Respuesta del paradigma|Recordar: conciencia autonoética; revivir el episodio|Saber: conciencia noética; seguridad sin detalles|Adivinar: respuesta al azar"
    ] }
] },
{ n: 12, t: "Contexto y claves", cap: 4, pir: "alta", mods: [
  { t: "Especificidad de la codificación y sobrecarga de la clave",
    tip: "Según la especificidad de la codificación (Tulving y Thomson, 1973), una clave es eficaz si su información se codificó junto con el elemento, tal como se interpretó. Por eso un asociado débil estudiado supera a uno fuerte no estudiado, y una palabra puede no reconocerse y luego recordarse con su clave. Según la sobrecarga de la clave, una clave pierde eficacia cuantos más elementos tiene asociados (Nairne, 2002). La mejor clave coincide con lo codificado y distingue ese recuerdo de los demás.",
    v: [
      "Clave de recuperación=Información presente al recuperar que facilita el acceso a una huella",
      "Especificidad de la codificación=Una pista es eficaz si su información se guardó junto con el elemento",
      "Sobrecarga de la clave=Pérdida de eficacia a medida que una pista se asocia a más elementos",
      "Fallo de reconocimiento=No identificar una palabra que luego se recuerda con la pista estudiada",
      "Clave diagnóstica=Pista que apunta a pocos elementos",
      "Asociado débil=Palabra poco ligada a la diana en el lenguaje, estudiada junto a ella",
      "Barclay et al. (1974)=«Algo pesado» recupera «piano» si se estudió en una frase sobre una mudanza",
      "Nairne (2002)=Subrayó que coincidir con el estudio no ayuda si la pista apunta a muchos recuerdos"
    ],
    g: [
      "Si «piano» se estudió en una frase sobre un concierto, la mejor clave es «algo que ___».|suena|pesa|brilla",
      "Para Tulving y Thomson, un asociado ___ estudiado era mejor clave que uno fuerte no estudiado.|débil|frecuente|nuevo",
      "Con la clave «fruta» se recupera una proporción ___ de las frutas estudiadas si la lista incluía muchas.|menor|mayor|idéntica",
      "Usar «el nombre de mi perro con un número» en todas las cuentas convierte esa pista en una clave ___.|sobrecargada|específica|distintiva",
      "Según la especificidad de la codificación, se guarda la palabra tal como se ___.|interpretó|pronunció|escribió"
    ],
    tf: [
      "Según la especificidad de la codificación, basta con que la clave esté relacionada con el elemento en general.|F|Tiene que estar relacionada con la forma concreta en que se procesó el elemento, no solo con él en general.",
      "Una clave asociada a muchos elementos es más eficaz, porque abre más caminos hacia el recuerdo.|F|Es al revés: compite por todos ellos y baja la probabilidad de llegar a uno concreto. Es la sobrecarga de la clave.",
      "En el fallo de reconocimiento de palabras recordables, el recuerdo con una buena clave superaba al reconocimiento.|V",
      "El efecto abanico de Anderson puede entenderse como un caso de sobrecarga de la clave.|V"
    ],
    q: [
      "Una persona aparca cada semana en el mismo centro comercial y nunca recuerda dónde ha dejado el coche. ¿Qué principio lo explica mejor?|Sobrecarga de la clave|Especificidad de la codificación|Dependencia del contexto|«En el centro comercial» se asocia a muchos episodios. «Junto a la columna verde» apuntaría a uno solo.",
      "En el estudio de Tulving y Thomson (1973), ¿qué clave funcionaba mejor en la prueba?|El asociado débil estudiado|El asociado fuerte no estudiado|Cualquier asociado semántico|La clave eficaz es la que se codificó con la diana, aunque esté menos ligada a ella en el lenguaje.",
      "¿Qué caracteriza a la mejor clave según ambos principios?|Coincide y además es distintiva|Se asocia a muchos recuerdos|Es un asociado fuerte del lenguaje|Debe coincidir con lo codificado y, a la vez, distinguir ese recuerdo de los demás.",
      "Unos participantes no reconocen una diana entre sus asociaciones libres, pero la recuerdan después con el asociado débil estudiado. ¿Cómo se llama el fenómeno?|Fallo de reconocimiento|Eclipsamiento contextual|Sobrecarga de la clave|Tulving y Thomson (1973) mostraron que el recuerdo con una buena clave puede superar al reconocimiento."
    ],
    inc: [
      "Sobre los principios de la recuperación|Una clave asociada a muchos elementos es más diagnóstica|La clave eficaz es la que se codificó con el elemento|La sobrecarga conecta con la interferencia|Una clave asociada a muchos elementos es poco diagnóstica: compite por todos ellos y pierde eficacia."
    ],
    seq: [
      "Fallo de reconocimiento de palabras recordables|Estudio de dianas con asociados débiles>Asociación libre a partir de asociados fuertes>No reconocer las dianas generadas>Recordar las dianas con el asociado débil"
    ],
    cls: [
      "Principio|Especificidad de la codificación: Tulving y Thomson; coincidencia entre estudio y prueba; piano en una mudanza|Sobrecarga de la clave: Nairne; clave poco diagnóstica; aparcamiento semanal; efecto abanico"
    ] },
  { t: "El procesamiento apropiado para la transferencia",
    tip: "El rendimiento depende del ajuste entre las operaciones al estudiar y las que exige la prueba, no de la profundidad en sí. Morris, Bransford y Franks (1977) lo mostraron con un diseño cruzado: la codificación semántica ganaba en el reconocimiento estándar y la fonológica, en la prueba de rimas. Roediger lo aplicó a la memoria implícita (procesos guiados por los datos frente a guiados conceptualmente). Sus límites son que la profundidad sigue importando y el riesgo de circularidad.",
    v: [
      "Procesamiento apropiado para la transferencia=Rendimiento según el ajuste entre lo hecho al estudiar y lo que pide la prueba",
      "Morris, Bransford y Franks=Autores del diseño cruzado de 1977 con una prueba de rimas",
      "Prueba de rimas=Reconocer palabras que riman con las estudiadas",
      "Procesos guiados por datos=Operaciones basadas en la forma visual o sonora del estímulo",
      "Guiados conceptualmente=Procesos basados en el significado, propios de la mayoría de pruebas explícitas",
      "Circularidad=Definir lo «apropiado» a partir del resultado, de modo que el principio no puede fallar",
      "Roediger=Aplicó el principio a las disociaciones de la memoria implícita",
      "Craik y Lockhart (1972)=Su predicción de ventaja semántica se cumplía con la prueba estándar"
    ],
    g: [
      "En Morris, Bransford y Franks (1977), la codificación fonológica rindió más en la prueba de ___.|rimas|reconocimiento estándar|recuerdo libre",
      "Para evitar la circularidad hay que especificar de ___ qué operaciones exige cada prueba.|antemano|inmediato|repente",
      "Las pruebas implícitas conceptuales, como la generación de ejemplares, sí mejoran con el procesamiento ___.|semántico|fonológico|perceptivo",
      "Quien aprende vocabulario de italiano solo leyendo tendrá problemas para entender las palabras ___.|al oído|por escrito|en una lista",
      "La mayoría de las pruebas implícitas dependen de procesos guiados por los ___.|datos|conceptos|objetivos"
    ],
    tf: [
      "Con una prueba de reconocimiento estándar, la codificación semántica dio mejores resultados que la fonológica.|V",
      "Según este principio, el procesamiento fonológico es intrínsecamente peor que el semántico.|F|No es peor, sino menos útil para una prueba sobre el significado. Con la prueba de rimas rindió más.",
      "Con frecuencia, la codificación semántica que además coincide con la prueba supera a cualquier otra combinación.|V",
      "Releer los apuntes es la mejor preparación para un examen de desarrollo, porque reproduce el material.|F|Releer prepara para reconocer, no para producir. Conviene practicar la redacción sin apuntes y la recuperación."
    ],
    q: [
      "Una estudiante prepara Estadística leyendo ejercicios resueltos, llega segura al examen y se bloquea ante un enunciado nuevo. ¿Qué lo explica?|Practicó comprender, no generar soluciones|Su codificación fue demasiado profunda|Sufrió sobrecarga de la clave de examen|Ha practicado comprender soluciones, no generarlas, y el examen pide lo segundo.",
      "En el diseño de Morris, Bransford y Franks, ¿qué resultado contradice una lectura absoluta de los niveles de procesamiento?|La ventaja fonológica en la prueba de rimas|La ventaja semántica en la prueba estándar|La igualdad de ambas en las dos pruebas|Si la profundidad fuera una virtud absoluta, lo semántico ganaría siempre. Con la prueba de rimas ganó lo fonológico.",
      "¿Qué crítica señala que el principio podría no fallar nunca?|El riesgo de circularidad|El efecto de eclipsamiento|La sobrecarga de la clave|Si lo «apropiado» se define por el resultado obtenido, no hay forma de refutar el principio.",
      "Para preparar un examen de problemas, ¿qué estrategia se ajusta mejor a este principio?|Resolver problemas sin mirar la solución|Releer varias veces los problemas resueltos|Subrayar los pasos de cada solución|Practicar las operaciones que exige la prueba mejora el rendimiento y añade el efecto de testeo."
    ],
    inc: [
      "Sobre el procesamiento apropiado para la transferencia|Afirma que la profundidad deja de importar por completo|Explica parte de las disociaciones de la memoria implícita|Pone el foco en el ajuste entre estudio y prueba|La profundidad sigue importando: el significado ofrece más claves y más distintivas."
    ],
    seq: [],
    cls: [
      "Diseño de Morris, Bransford y Franks (1977)|Gana la codificación semántica: reconocimiento estándar; «¿estaba esta palabra?»|Gana la codificación fonológica: prueba de rimas; «¿rimaba con alguna estudiada?»"
    ] },
  { t: "El contexto ambiental: los buceadores y su réplica",
    tip: "Godden y Baddeley (1975) cruzaron el lugar de aprendizaje y el de recuerdo (en tierra o bajo el agua) y hallaron mejor recuerdo libre cuando coincidían. Con reconocimiento, el efecto desapareció en ese estudio (Godden y Baddeley, 1980). El metaanálisis de Smith y Vela (2001) halló un efecto pequeño (d de 0,28), que se reduce por eclipsamiento y con la reinstauración mental, y Murre (2021) no replicó el estudio de los buceadores. El efecto es real pero pequeño.",
    v: [
      "Dependencia del contexto=Mejor recuerdo cuando el entorno de la prueba coincide con el del estudio",
      "Godden y Baddeley (1975)=Estudio con buceadores que aprendían en tierra o bajo el agua",
      "Diseño factorial 2 × 2=Cruce del lugar de aprendizaje con el lugar de recuerdo",
      "Eclipsamiento=Reducción del efecto del entorno cuando hay claves más potentes",
      "Reinstauración mental=Imaginar el entorno original antes de la prueba",
      "Smith y Vela (2001)=Metaanálisis de 93 tamaños del efecto con un efecto global pequeño",
      "Murre (2021)=Réplica con 16 buceadores en Ámsterdam que no halló el efecto",
      "Entrevista cognitiva=Técnica con testigos que incorpora la recreación mental del entorno"
    ],
    g: [
      "El metaanálisis de Smith y Vela (2001) halló un efecto global del contexto ___.|pequeño|grande|nulo",
      "Godden y Baddeley (1980) repitieron la situación con una prueba de ___ y el efecto desapareció.|reconocimiento|recuerdo libre|recuerdo serial",
      "Que una buena clave verbal reduzca el efecto del entorno se denomina ___.|eclipsamiento|reinstauración|interferencia",
      "La réplica de Murre (2021) se hizo con 16 buceadores en ___.|Ámsterdam|Cambridge|Londres",
      "En Smith y Vela, el efecto en reconocimiento fue ___ al del recuerdo.|similar|muy inferior|muy superior"
    ],
    tf: [
      "En Godden y Baddeley (1975), el recuerdo era mejor en las dos condiciones de coincidencia, fuera cual fuera el entorno.|V",
      "En el estudio de los buceadores, el efecto del contexto se mantenía igual en reconocimiento.|F|Godden y Baddeley (1980) usaron reconocimiento y el efecto desapareció. Es una trampa típica del PIR.",
      "El efecto del contexto también disminuye cuando la persona imagina el entorno original antes de la prueba.|V",
      "El estudio de los buceadores se ha replicado con éxito y es la prueba más sólida del efecto del contexto.|F|Murre (2021) lo replicó con 16 buceadores y no halló mejor recuerdo en el mismo contexto."
    ],
    q: [
      "Un estudiante pregunta si debe examinarse en la misma habitación donde estudió. ¿Qué recomendación es más coherente con la evidencia?|Recrear mentalmente el lugar de estudio|Estudiar siempre en el aula del examen|Ignorar el contexto, que no tiene efecto|El efecto es real pero pequeño, y la reinstauración mental lo aprovecha sin necesidad de estar físicamente allí.",
      "¿Por qué el efecto del contexto desapareció en el reconocimiento de Godden y Baddeley (1980)?|El elemento presente ya sirve de clave|El reconocimiento impide el eclipsamiento|Bajo el agua no se forman huellas|Las claves importan más cuanto menos información ofrece la prueba. Con el propio elemento delante, el contexto añade poco.",
      "¿Qué conclusión resume mejor la evidencia actual sobre el contexto ambiental?|Efecto real pero pequeño|Efecto grande y muy robusto|Efecto inexistente en todos los casos|Smith y Vela (2001) hallaron un d de 0,28, y el estudio de los buceadores no se replicó (Murre, 2021).",
      "Alguien va a la cocina, olvida a qué iba y lo recuerda al volver al salón. ¿Qué interpretación es coherente con la evidencia?|El contexto funcionó como clave|La huella se borró y se rehízo|Hubo un fallo de reconocimiento|Volver al lugar original reinstaura una clave, aunque el efecto del contexto ambiental sea modesto."
    ],
    inc: [
      "Sobre la evidencia del contexto ambiental|El efecto aumenta cuando hay buenas claves verbales|El efecto se reduce con la reinstauración mental|El metaanálisis halló un efecto global pequeño|Las buenas claves verbales eclipsan al contexto y reducen su efecto, no lo aumentan."
    ],
    seq: [
      "Historia del efecto de los buceadores|Godden y Baddeley (1975), recuerdo libre>Godden y Baddeley (1980), reconocimiento>Metaanálisis de Smith y Vela (2001)>Réplica fallida de Murre (2021)"
    ],
    cls: [] },
  { t: "Estado interno y estado de ánimo",
    tip: "En la memoria dependiente del estado, lo aprendido bajo un estado farmacológico o fisiológico se recupera mejor al volver a él, sobre todo en recuerdo libre, sin que la sustancia mejore la memoria. En la dependencia del estado de ánimo coinciden el ánimo al codificar y al recuperar, y en la congruencia, la valencia del material y el ánimo actual. Bower (1981) propuso una red asociativa. La dependencia es frágil (Eich, 1995), y la congruencia, más robusta y con relevancia clínica.",
    v: [
      "Contexto interno=Estado fisiológico, farmacológico y emocional que funciona como clave",
      "Dependencia del estado=Mejor recuerdo al volver al mismo estado farmacológico o fisiológico",
      "Congruencia con el ánimo=Mejor recuperación del material cuya valencia coincide con el ánimo actual",
      "Dependencia del ánimo=Mejor recuerdo si el ánimo al recordar coincide con el ánimo al aprender",
      "Red asociativa de Bower=Cada emoción es un nodo conectado con los recuerdos vividos con ella",
      "Técnica de Velten=Lectura de frases progresivamente alegres o tristes para inducir el ánimo",
      "Eich (1995)=Concluyó que el efecto aparece mejor con estados intensos y estables",
      "Valencia=Carácter positivo o negativo del contenido emocional del material"
    ],
    g: [
      "La memoria dependiente del estado es más clara en recuerdo libre que en ___.|reconocimiento|recuerdo serial|completar raíces",
      "Bower (1981) explicó los efectos del ánimo con una red ___.|asociativa|jerárquica|procedimental",
      "Según Eich (1995), muchos fracasos de la dependencia del estado de ánimo se debían a inducciones ___.|débiles|intensas|estables",
      "En la depresión se observa un sesgo hacia la recuperación de recuerdos ___.|negativos|neutros|positivos",
      "En la ___ del estado de ánimo, el contenido emocional del material es indiferente.|dependencia|congruencia|valencia"
    ],
    tf: [
      "La memoria dependiente del estado implica que aprender bajo los efectos del alcohol mejora la memoria.|F|Aprender bajo los efectos del alcohol produce, en general, peor recuerdo en cualquier condición.",
      "La congruencia con el estado de ánimo consiste en que coincidan el ánimo al estudiar y el ánimo al recordar.|F|Eso es la dependencia. En la congruencia coinciden la valencia del material y el ánimo actual.",
      "El propio Bower tuvo dificultades para reproducir sus primeros resultados sobre la dependencia del estado de ánimo.|V",
      "En estados tristes leves, algunas personas recuperan a propósito recuerdos positivos para mejorar su ánimo.|V"
    ],
    q: [
      "Marta repasa muy nerviosa la noche antes del examen y, igual de nerviosa en el examen, le viene un ejemplo que pensó esa noche. ¿Qué ilustra?|Dependencia del estado de ánimo|Congruencia con el estado de ánimo|Eclipsamiento por el estado interno|Coinciden el ánimo al codificar y al recuperar, con independencia del contenido emocional del ejemplo.",
      "Al salir de un examen que cree haber suspendido, a Marta solo le vienen a la mente fallos de exámenes anteriores. ¿Qué ilustra?|Congruencia con el estado de ánimo|Dependencia del estado de ánimo|Memoria dependiente del estado|Coincide la valencia negativa de los recuerdos con su ánimo actual. Es el más robusto de los dos efectos.",
      "Alguien esconde dinero estando ebrio, no lo encuentra sobrio y lo recuerda al volver a beber. ¿Qué fenómeno es?|Memoria dependiente del estado|Congruencia con el estado de ánimo|Procesamiento apropiado para la transferencia|El estado farmacológico en que se aprendió actúa como clave cuando se vuelve a él.",
      "Según Eich (1995), ¿en qué condiciones aparece de forma más fiable la dependencia del estado de ánimo?|Ánimos intensos y recuerdo libre|Ánimos leves y reconocimiento|Ánimos breves y material ajeno|También ayuda el material que genera la propia persona. Muchos fracasos se debían a inducciones débiles."
    ],
    inc: [
      "Sobre los efectos del estado de ánimo|La dependencia es más robusta que la congruencia|La congruencia tiene relevancia clínica en la depresión|Bower propuso que cada emoción es un nodo de una red|Es al revés: la dependencia es frágil y difícil de replicar, y la congruencia es más robusta."
    ],
    seq: [],
    cls: [
      "Efecto del estado de ánimo|Dependencia: coinciden el ánimo al codificar y al recuperar; evidencia frágil|Congruencia: coinciden la valencia y el ánimo actual; evidencia robusta; sesgo negativo en la depresión"
    ] }
] }
);

// SAIMAP Psicología · Memoria · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Búsqueda y reconstrucción", cap: 4, pir: "alta", mods: [
  { t: "La búsqueda en la memoria",
    tip: "Cuando la recuperación no es inmediata funciona como una búsqueda: está guiada por claves, depende de la prueba, es iterativa (cada elemento recuperado es una clave nueva) e incluye una decisión final. El modelo SAM (Raaijmakers y Shiffrin, 1981) propone que la probabilidad de muestrear una huella depende de su fuerza con las claves en relación con la de las demás huellas, y explica así la desventaja de las claves de parte de la lista.",
    v: [
      "Búsqueda en la memoria=Recuperación deliberada que genera claves, explora y evalúa lo encontrado",
      "Generación-reconocimiento=Modelo que divide el recuerdo en generar candidatos y reconocer el correcto",
      "Modelo SAM=Modelo formal de búsqueda asociativa de Raaijmakers y Shiffrin (1981)",
      "Muestreo=Selección de una huella según su fuerza con las claves respecto a las demás",
      "Búsqueda iterativa=Cada elemento recuperado sirve de nueva clave para seguir buscando",
      "Efecto de Slamecka (1968)=Dar algunas palabras estudiadas como pista empeora el recuerdo del resto",
      "Propagación de la activación=Activar un concepto prepara a los relacionados y abre caminos al recuerdo",
      "Final de la búsqueda=En SAM, se produce tras un número de intentos fallidos seguidos"
    ],
    g: [
      "En SAM, la probabilidad de muestrear una huella depende de su fuerza con las claves en relación con la de las ___ huellas.|demás|primeras|recientes",
      "Atkinson y Shiffrin (1968) incluyeron las estrategias de recuperación entre los procesos de ___.|control|almacenamiento|codificación",
      "En recuerdo libre la persona debe ___ las claves, mientras que en reconocimiento las aporta la prueba.|generar|inhibir|olvidar",
      "Según SAM, dar parte de la lista como pista perjudica porque esas palabras se ___ una y otra vez.|muestrean|inhiben|olvidan",
      "SAM expresa en forma matemática la ___ de la clave.|sobrecarga|especificidad|independencia"
    ],
    tf: [
      "Los modelos de generación-reconocimiento dividen el recuerdo en una fase de generar candidatos y otra de reconocer el correcto.|V",
      "Según SAM, basta con muestrear una huella para poder producirla en la respuesta.|F|Una huella muestreada debe además recuperarse con suficiente detalle para producirla.",
      "En SAM, las huellas se guardan asociadas entre sí y con el contexto en que se estudiaron.|V",
      "Dar como pista algunas palabras de la lista estudiada mejora el recuerdo de las restantes, como predice SAM.|F|Lo empeora (Slamecka, 1968). Según SAM, esas palabras se muestrean una y otra vez y desplazan a las demás."
    ],
    q: [
      "Para recordar a sus compañeros de clase, Lucía empieza por los que se sentaban cerca y, a partir de ellos, recuerda a los del equipo de baloncesto. ¿Qué rasgo de la búsqueda ilustra?|Su carácter iterativo|Su dependencia de la prueba|La fase de reconocimiento|Cada elemento recuperado sirve como clave nueva para seguir buscando: la búsqueda es iterativa.",
      "Según SAM, ¿por qué cuesta recordar un elemento concreto de una categoría con muchos miembros?|Su fuerza relativa con la clave es menor|La huella decae antes en categorías grandes|La categoría impide generar candidatos|El muestreo depende de la fuerza respecto a todas las huellas asociadas a la clave: con muchos miembros, a cada uno le toca menos.",
      "¿Cuándo se detiene la búsqueda según el modelo SAM?|Tras varios intentos fallidos seguidos|Cuando se agota el contexto de estudio|Al recuperar el primer elemento de la lista|El modelo supone que la búsqueda termina tras un número de intentos fallidos consecutivos.",
      "¿Qué estrategia aprovecha mejor la lógica de la búsqueda para recuperar un nombre que no sale?|Repasar el abecedario y probar sonidos iniciales|Repetir mentalmente la pregunta sin variarla|Concentrarse solo en el primer nombre que surge|Las estrategias cotidianas generan claves nuevas cuando las disponibles no bastan, y probar sonidos iniciales es una de ellas."
    ],
    inc: [
      "Sobre los rasgos de la búsqueda en la memoria|Recorre la memoria al azar hasta dar con la huella|Cada elemento recuperado sirve como nueva clave|Incluye decidir si lo encontrado es lo buscado|No se recorre al azar: la búsqueda está guiada por claves y, sin una clave útil, suele fracasar."
    ],
    seq: [
      "Supuestos del modelo SAM|Huellas asociadas al contexto de estudio>Sonda con el contexto y lo ya recuperado>Muestreo según la fuerza relativa>Recuperación con detalle suficiente>Parada tras varios fallos seguidos"
    ],
    cls: [] },
  { t: "La punta de la lengua",
    tip: "En la punta de la lengua se está seguro de conocer una palabra sin poder producirla, con fuerte sensación de saber. Brown y McNeill (1966) mostraron un acceso parcial: primera letra, número de sílabas, acento y palabras parecidas. El fenómeno separa disponibilidad de accesibilidad y significado de forma. La evidencia favorece el déficit de transmisión fonológica sobre el bloqueo, y su aumento con la edad no indica por sí solo patología.",
    v: [
      "Punta de la lengua=Seguridad de conocer una palabra sin poder producirla en ese momento",
      "Acceso parcial=Recuperar rasgos de la forma, como la primera letra, sin la palabra completa",
      "Sensación de saber=Impresión de que una información está almacenada aunque no salga",
      "Déficit de transmisión=Activación insuficiente desde la representación de la palabra hasta sus sonidos",
      "Hipótesis del bloqueo=Una palabra parecida que se impone interfiere con la buscada",
      "Palabra intrusa=Término de sonido o significado parecido que acude en lugar del buscado",
      "Brown y McNeill (1966)=Provocaron el fenómeno leyendo definiciones de palabras poco frecuentes",
      "Anomia=Fallo muy frecuente para encontrar palabras comunes, estudiado en Neuropsicología"
    ],
    g: [
      "En estado de punta de la lengua se suele acertar el número de ___ de la palabra buscada.|sílabas|significados|sinónimos",
      "La punta de la lengua demuestra que la palabra está ___ aunque no sea accesible.|disponible|inhibida|perdida",
      "Según el déficit de transmisión, el fallo está en el paso de la palabra a sus ___.|sonidos|significados|referentes",
      "Dar la primera sílaba ayuda a resolver el estado más que las pistas de ___.|significado|sonido|acento",
      "La punta de la lengua aumenta con la edad, sobre todo con los nombres ___.|propios|comunes|abstractos"
    ],
    tf: [
      "En la punta de la lengua no se recupera nada de la forma de la palabra buscada.|F|Hay acceso parcial: a menudo se acierta la primera letra, el número de sílabas o la posición del acento.",
      "La evidencia favorece sobre todo el déficit de transmisión fonológica, aunque el bloqueo puede contribuir en algunos casos.|V",
      "La punta de la lengua frecuente en personas mayores sanas indica por sí misma un deterioro patológico.|F|Es una queja habitual en mayores sanos. Solo fallos muy frecuentes con palabras comunes hacen pensar en una anomia.",
      "Según el déficit de transmisión, el fallo se produce en el paso de la palabra a sus sonidos, no en el del significado a la palabra.|V"
    ],
    q: [
      "Buscando «astrolabio», Marta dice que empieza por «as», que tiene cuatro sílabas y que le viene «sextante». ¿Qué ilustra?|Un acceso parcial a la forma|Un fallo de monitorización de la fuente|Una anomia por lesión cerebral|Es la punta de la lengua: se conocen el significado y parte de la forma sonora, y acuden palabras de sonido o significado parecido.",
      "¿Qué dato apoya la hipótesis del déficit de transmisión?|Es más frecuente con palabras poco usadas|Las palabras intrusas aparecen a menudo|Las pistas de significado lo resuelven mejor|Predice más fallos con la edad y con palabras poco usadas o sin uso reciente, y que ayuden los sonidos relacionados.",
      "¿Qué consejo es más útil cuando un nombre no sale?|Dejar de buscar o repasar sonidos iniciales|Insistir en la palabra intrusa que aparece|Pedir pistas sobre el significado del nombre|Insistir en la intrusa suele prolongar el bloqueo, y las pistas de significado ayudan menos que las de sonido.",
      "Que en la punta de la lengua se sepa que se sabe la palabra sin poder recuperarla muestra sobre todo…|La metamemoria|El efecto de recencia|La amnesia de la fuente|Saber que se sabe, aunque no se pueda recuperar, es un juicio de metamemoria."
    ],
    inc: [
      "Sobre la punta de la lengua|La resuelven mejor las pistas de significado|Separa la disponibilidad de la accesibilidad|Se acompaña de una fuerte sensación de saber|Ayudan más la primera sílaba o leer palabras con sonidos parecidos. Las pistas de significado ayudan menos."
    ],
    seq: [],
    cls: [
      "Hipótesis de la punta de la lengua|Déficit de transmisión: conexiones débiles con los sonidos; más frecuente con la edad; se resuelve al oír sonidos relacionados|Bloqueo: palabra intrusa que se impone; persiste mientras la intrusa sigue activa"
    ] },
  { t: "Procesos reconstructivos y monitorización de la fuente",
    tip: "Recordar no es reproducir una copia: los fragmentos almacenados se completan con conocimiento previo, esquemas e inferencias (Bartlett, 1932). Los esquemas rellenan huecos, guían lo que se busca y normalizan. Según el marco de la monitorización de la fuente (Johnson, Hashtroudi y Lindsay, 1993), el origen de un recuerdo no va etiquetado: se atribuye al recuperar, y cuando la atribución falla aparecen la confusión y la amnesia de la fuente, la falsa fama o la criptomnesia.",
    v: [
      "Memoria reconstructiva=Recuerdo elaborado con fragmentos, esquemas e inferencias, no copia fiel",
      "Monitorización de la fuente=Atribución del origen de un recuerdo según sus características",
      "Monitorización de la realidad=Distinguir lo ocurrido de lo solo pensado, imaginado o soñado",
      "Confusión de fuente=Atribuir un recuerdo a un origen equivocado entre varios posibles",
      "Amnesia de la fuente=Recordar un dato sin recordar dónde se aprendió",
      "Falsa fama=Juzgar célebre un nombre solo porque resulta familiar por haberlo visto antes",
      "Criptomnesia=Creer propia una idea que en realidad se oyó o se leyó antes",
      "Brewer y Treyens (1981)=Estudio del despacho en que se recordaban libros que no estaban"
    ],
    g: [
      "En Brewer y Treyens (1981), el esquema de despacho ___ huecos con objetos que no estaban.|rellenaba|borraba|ordenaba",
      "Un recuerdo con muchos detalles perceptivos tiende a atribuirse a algo ___.|percibido|imaginado|soñado",
      "Un recuerdo con muchas huellas de operaciones mentales tiende a atribuirse a algo ___.|imaginado|percibido|leído",
      "La monitorización de la fuente depende en buena medida de la corteza ___.|prefrontal|occipital|temporal",
      "En la falsa fama, la familiaridad se atribuye a la fama y no a la ___ vista el día anterior.|lista|prensa|televisión"
    ],
    tf: [
      "Según Johnson, Hashtroudi y Lindsay (1993), los recuerdos llevan una etiqueta que indica de dónde proceden.|F|No la llevan: la fuente se atribuye al recuperar, a partir de las características del recuerdo.",
      "En el estudio de Anderson y Pichert (1978), recordar desde una perspectiva nueva permitió recuperar información antes no dada.|V",
      "La criptomnesia consiste en recordar un dato sin recordar dónde se aprendió.|F|Eso es la amnesia de la fuente. En la criptomnesia se cree propia una idea que se oyó o se leyó antes.",
      "Las atribuciones de la fuente suelen ser rápidas y heurísticas, y solo a veces se comprueban con un razonamiento sistemático.|V"
    ],
    q: [
      "Tras leer la descripción de una casa como si fuera un ladrón, se pide recordarla de nuevo como comprador y surgen detalles nuevos. ¿Por qué?|La perspectiva aporta claves nuevas|El esquema de ladrón se ha olvidado|La segunda lectura añade información|Anderson y Pichert (1978): la perspectiva en la recuperación funcionó como un conjunto de claves nuevo para la búsqueda.",
      "Un estudiante no sabe si un dato se lo contó una compañera o lo leyó en el grupo de clase. ¿Qué error es?|Confusión de fuente|Amnesia de la fuente|Criptomnesia|Recuerda el dato y duda entre dos orígenes posibles. En la amnesia de la fuente no se recuerda ningún origen.",
      "¿En quién cabe esperar más errores de monitorización de la fuente?|En personas con lesiones frontales|En personas con lesiones occipitales|En adultos jóvenes sin lesiones|Depende en buena medida de la corteza prefrontal: se afecta con lesiones frontales, en la vejez y en los niños pequeños.",
      "¿Qué ventaja tiene el carácter reconstructivo de la memoria?|Recordar lo importante sin todos los detalles|Reproducir con exactitud los detalles vistos|Evitar los errores coherentes con el esquema|Permite recordar lo importante sin almacenar todo. El precio son errores coherentes que se viven como recuerdos verdaderos."
    ],
    inc: [
      "Sobre la influencia de los esquemas en la recuperación|Conservan intacto lo que no encaja con ellos|Rellenan huecos con lo típico de la situación|Guían qué información se busca al recordar|Los esquemas normalizan: lo que no encaja se olvida o se transforma para que tenga sentido."
    ],
    seq: [],
    cls: [
      "Atribución según las características del recuerdo|Hacia lo percibido: detalles perceptivos; detalles contextuales de lugar y momento|Hacia lo imaginado: huellas de operaciones cognitivas; haber razonado"
    ] },
  { t: "Los testigos y la confianza",
    tip: "El testimonio exige codificar un suceso breve y estresante y recuperarlo tras conversaciones, noticias y entrevistas. Las variables de estimación (estrés, focalización en el arma, efecto de otra raza) no las controla la justicia, y las del sistema (preguntas, rueda, comentarios al testigo), sí. Según Wixted y Wells (2017), solo la confianza inicial en condiciones prístinas predice la exactitud, y la posterior se infla. La entrevista cognitiva ayuda y la hipnosis no.",
    v: [
      "Variables de estimación=Factores del testimonio que el sistema judicial no puede controlar",
      "Variables del sistema=Factores controlables, como el diseño de la rueda o las preguntas",
      "Focalización en el arma=Un arma presente atrae la atención del testigo durante el suceso",
      "Efecto de otra raza=Peor identificación de personas de otro grupo étnico",
      "Condiciones prístinas=Procedimientos en que la confianza inicial del testigo predice la exactitud",
      "Administrador ciego=Quien dirige la rueda sin saber quién es el sospechoso",
      "Rueda justa=Un solo sospechoso y relleno con personas que encajan con la descripción",
      "Entrevista cognitiva=Técnica de Fisher y Geiselman (1992) basada en principios de la recuperación"
    ],
    g: [
      "La confianza que predice la exactitud es la ___, registrada en la primera identificación.|inicial|posterior|judicial",
      "Un comentario como «bien, ha identificado al sospechoso» ___ la seguridad del testigo.|infla|reduce|estabiliza",
      "El tiempo de exposición o el estrés del testigo son variables de ___.|estimación|sistema|control",
      "La entrevista cognitiva pide reinstaurar mentalmente el ___ del suceso.|contexto|orden|desenlace",
      "La hipnosis aumenta la confianza y la ___ más que la exactitud.|sugestibilidad|precisión|recolección"
    ],
    tf: [
      "La confianza que muestra un testigo meses después en el juicio es un buen indicador de exactitud.|F|La confianza posterior sube con el tiempo y la retroalimentación sin que suba la exactitud (Wixted y Wells, 2017).",
      "Advertir al testigo de que el culpable puede no estar en la rueda es una de las condiciones prístinas.|V",
      "La forma de construir la rueda de reconocimiento es una variable de estimación.|F|Es una variable del sistema, porque la justicia puede controlarla. Las de estimación, como el estrés, no.",
      "La entrevista cognitiva obtiene más información correcta que la entrevista estándar sin aumentar mucho los errores.|V"
    ],
    q: [
      "Un testigo identifica al sospechoso al instante y dice estar «completamente seguro», en una rueda justa, con administrador ciego y advertencia previa. ¿Qué valor tiene esa confianza?|Indica una probabilidad alta de acierto|Carece de valor, como cualquier confianza|Solo vale si la repite en el juicio|En condiciones prístinas, una confianza inicial alta registrada de inmediato tiende a acompañar a identificaciones exactas.",
      "Un testigo ve al sospechoso en una foto y días después lo elige en la rueda. ¿Qué riesgo hay?|Confundir familiaridad con recuerdo del delito|Reducir su confianza en la identificación|Aumentar el efecto de otra raza en la rueda|La identificación repetida vuelve familiar al sospechoso, y esa familiaridad se confunde con el recuerdo del delito: un error de fuente.",
      "¿Qué mostraron Wells y Bradfield (1998)?|La retroalimentación infla la confianza|La confianza inicial predice la exactitud|La hipnosis aumenta la sugestibilidad|Un comentario confirmatorio infla la seguridad del testigo y la de su recuerdo de las condiciones de visión.",
      "¿Qué es correcto sobre la hipnosis en el testimonio?|No es un método válido para recuperar recuerdos|Mejora la exactitud si el testigo es sugestionable|Es útil para reinstaurar el contexto del suceso|Aumenta la confianza y la sugestibilidad más que la exactitud. La reinstauración del contexto es propia de la entrevista cognitiva."
    ],
    inc: [
      "Sobre las condiciones prístinas de identificación|El administrador conoce al sospechoso|La rueda incluye un solo sospechoso|La confianza se registra de inmediato|El administrador debe ser ciego: no sabe quién es el sospechoso y no puede dar pistas sin querer."
    ],
    seq: [],
    cls: [
      "Variable del testimonio|Estimación: estrés; focalización en el arma; efecto de otra raza; tiempo transcurrido|Sistema: formulación de las preguntas; construcción de la rueda; comentarios al testigo"
    ] }
] },
{ n: 14, t: "Por qué olvidamos", cap: 5, pir: "media", mods: [
  { t: "Qué es olvidar: decaimiento",
    tip: "Técnicamente solo hay olvido si la información llegó a codificarse, y como no puede demostrarse que una huella desaparezca, se entiende como un fallo de recuperación en un momento dado. Tulving y Pearlstone (1966) distinguieron disponibilidad y accesibilidad. El decaimiento es la explicación intuitiva, pero no puede aislarse: Keppel y Underwood (1962) y Waugh y Norman (1965) mostraron que pesa más lo que ocurre durante el intervalo que el tiempo en sí.",
    v: [
      "Olvido=Fallo para recuperar en un momento dado algo que llegó a codificarse",
      "Disponibilidad=Estado de una información que está almacenada en la memoria",
      "Accesibilidad=Posibilidad de recuperar lo almacenado con las claves presentes",
      "Decaimiento=Debilitamiento pasivo de la huella por el mero paso del tiempo",
      "Olvido incidental=Pérdida de acceso que ocurre sin ninguna intención de olvidar",
      "Olvido motivado=Olvido en el que la persona quiere dejar de recordar algo",
      "Método del ahorro=Medir lo retenido por los ensayos que se ahorran al reaprender",
      "Fallo de recuperación=Teoría que atribuye el olvido a la falta de la clave adecuada"
    ],
    g: [
      "Según Tulving y Pearlstone (1966), mucho de lo que parece perdido está disponible pero no ___.|accesible|almacenado|codificado",
      "La curva de Ebbinghaus es negativamente ___: se olvida mucho al principio y cada vez menos después.|acelerada|asimétrica|sesgada",
      "Murre y Dros (2015) hallaron un repunte a las 24 horas que atribuyen probablemente al ___.|sueño|repaso|ahorro",
      "Keppel y Underwood (1962) mostraron que en el ___ ensayo apenas había olvido.|primer|último|segundo",
      "Waugh y Norman (1965) hallaron que el olvido dependía sobre todo del número de elementos ___.|interpuestos|repetidos|estudiados"
    ],
    tf: [
      "Si nunca se prestó atención a la matrícula de un coche, no recordarla es un caso de olvido.|F|Solo hay olvido si la información llegó a codificarse. Si no se atendió, simplemente no se aprendió.",
      "La mayoría de los investigadores entiende el olvido como un fallo de recuperación más que como un borrado.|V",
      "Peterson y Peterson (1959) demostraron de forma concluyente el decaimiento en la memoria a corto plazo.|F|Lo interpretaron como decaimiento, pero Keppel y Underwood (1962) mostraron que era interferencia proactiva.",
      "Los estudios clásicos no demuestran que el decaimiento no exista, sino que es difícil separarlo de la interferencia.|V"
    ],
    q: [
      "Al pasar por su antiguo colegio, Andrés huele el comedor y recuerda escenas que no lograba evocar. ¿Qué ilustra?|Una información disponible pero no accesible|Una huella que había decaído por completo|Una información accesible pero no disponible|La huella estaba almacenada y una buena clave la devolvió: era un problema de accesibilidad, no de disponibilidad.",
      "¿Cuál es el principal problema de la teoría del decaimiento?|No puede aislarse el tiempo de lo que lo llena|Contradice la forma de la curva de Ebbinghaus|Es difícil de refutar con cualquier olvido|Habría que dejar pasar el tiempo sin ninguna actividad mental, y eso no sucede nunca.",
      "¿Qué indica el método del ahorro sobre una lista que ya no se puede recitar?|Que algo de ella quedó almacenado|Que la huella decayó por completo|Que nunca llegó a codificarse|Se reaprende con menos ensayos que la primera vez, señal de que algo quedó.",
      "¿Cuál es el problema principal de la teoría del fallo de recuperación?|Es difícil de refutar|Explica mal el material sin competidores|No puede aislar el tiempo|Casi cualquier olvido puede atribuirse a una clave ausente. Explicar mal el material sin competidores es el problema de la interferencia."
    ],
    inc: [
      "Sobre los estudios clásicos de la memoria a corto plazo|Waugh y Norman hallaron que pesaba más el tiempo|Keppel y Underwood vieron poco olvido en el primer ensayo|Peterson y Peterson lo interpretaron como decaimiento|Waugh y Norman (1965) hallaron que el olvido dependía sobre todo del número de elementos interpuestos, no del tiempo."
    ],
    seq: [
      "Cronología de estudios sobre el olvido|Ebbinghaus y la curva del olvido>Peterson y Peterson y el decaimiento>Keppel y Underwood y la interferencia proactiva>Waugh y Norman y los elementos interpuestos>Murre y Dros y la réplica de Ebbinghaus"
    ],
    cls: [] },
  { t: "Interferencia proactiva y retroactiva",
    tip: "La interferencia atribuye el olvido a la competencia entre recuerdos semejantes. En la proactiva, lo aprendido antes estorba a lo nuevo, y en la retroactiva, lo nuevo estorba a lo antiguo: basta preguntarse qué se intenta recordar. Se estudia con pares asociados A-B y A-C y un grupo control sin lista competidora. Es mayor con materiales semejantes que comparten clave, y hoy se explica sobre todo por la competencia al recuperar (sobrecarga de la clave, efecto abanico).",
    v: [
      "Interferencia proactiva=Lo aprendido antes dificulta recordar lo aprendido después",
      "Interferencia retroactiva=Lo aprendido después dificulta recordar lo aprendido antes",
      "Pares asociados=Procedimiento con listas en que cada estímulo va unido a una respuesta",
      "Lista A-C=Mismos estímulos de la primera lista unidos a respuestas nuevas",
      "Desaprendizaje=Debilitamiento de las asociaciones antiguas durante el nuevo aprendizaje",
      "Competencia de respuestas=Varias respuestas asociadas a una clave rivalizan al recordar",
      "Efecto abanico=Más hechos sobre una misma clave hacen más lenta la recuperación de cada uno",
      "Liberación de la IP=Recuperación del rendimiento al cambiar de categoría de material"
    ],
    g: [
      "McGeoch (1932) defendía que el olvido se debe más a lo aprendido en el ___ que al tiempo mismo.|intervalo|pasado|examen",
      "Underwood (1957) halló más olvido a las 24 horas cuantas más listas se habían aprendido ___.|antes|después|juntas",
      "En el diseño de interferencia proactiva, ambos grupos recuerdan la lista ___.|A-C|A-B|neutra",
      "En el efecto abanico, se tardaba más en reconocer una frase cuantos más hechos se sabían sobre el mismo ___.|personaje|día|color",
      "La interferencia es mayor cuando los materiales comparten la misma ___ con respuestas distintas.|clave|respuesta|duración"
    ],
    tf: [
      "Tras cambiar el PIN de la tarjeta, que en el cajero salga el antiguo es interferencia retroactiva.|F|Es proactiva: lo aprendido antes (el PIN antiguo) estorba a recordar lo aprendido después.",
      "En el diseño retroactivo, el grupo control aprende A-B, realiza una tarea neutra y recuerda A-B.|V",
      "Estudiar Historia y luego Química produce más interferencia que estudiar dos periodos históricos con fechas parecidas.|F|Ocurre al revés: la interferencia es mayor con materiales semejantes que comparten claves.",
      "Las explicaciones actuales de la interferencia dan más peso a la competencia en la recuperación que al desaprendizaje.|V"
    ],
    q: [
      "Tras un mes usando el portátil de otra persona, Ana duda al volver al suyo con atajos que hacía sin pensar. ¿Qué tipo de olvido es?|Interferencia retroactiva|Interferencia proactiva|Decaimiento de la huella|Se intenta recordar lo antiguo (sus atajos) y estorba lo aprendido después: interferencia retroactiva.",
      "En el diseño de interferencia proactiva, ¿qué hace el grupo control?|Tarea neutra, luego A-C y prueba de A-C|A-B, luego tarea neutra y prueba de A-B|A-B, luego A-C y prueba de A-C|El control no aprende la lista previa competidora. A-B, tarea neutra y prueba de A-B es el control del diseño retroactivo.",
      "Según las explicaciones actuales, ¿por qué una clave muy cargada guía peor a un recuerdo concreto?|Sus respuestas compiten al recuperar|Las asociaciones antiguas se borran|La huella decae con más rapidez|Es la sobrecarga de la clave: cuando una clave se asocia a varias respuestas, cada una pierde parte de su eficacia.",
      "¿Qué recomendación para el estudio se deriva de la interferencia?|Contrastar lo que diferencia temas parecidos|Estudiar seguidos los temas más parecidos|Evitar los materiales de categorías distintas|Como la interferencia crece con la semejanza, conviene contrastar de forma explícita lo que diferencia dos temas parecidos."
    ],
    inc: [
      "Sobre la interferencia|La proactiva actúa hacia atrás, de lo nuevo a lo viejo|La retroactiva perjudica el recuerdo de lo antiguo|Es mayor si los materiales comparten la misma clave|Es al revés: la proactiva actúa hacia delante (lo viejo estorba a lo nuevo) y la retroactiva, hacia atrás."
    ],
    seq: [
      "Diseño de interferencia retroactiva, grupo experimental|Aprender la lista A-B>Aprender la lista A-C>Prueba de la lista A-B"
    ],
    cls: [
      "Tipo de interferencia|Proactiva: el PIN antiguo sale en el cajero; se recuerda peor la lista A-C; lo viejo estorba a lo nuevo|Retroactiva: se dudan los atajos del portátil propio; se recuerda peor la lista A-B; lo nuevo estorba a lo viejo"
    ] },
  { t: "Sueño y consolidación",
    tip: "La consolidación estabiliza una huella con el tiempo y la vuelve resistente a la interferencia y al daño (Müller y Pilzecker, 1900). Hay consolidación sináptica, en horas y con síntesis de proteínas, y de sistemas, de semanas a años, con menor dependencia del hipocampo. Jenkins y Dallenbach (1924) hallaron más recuerdo tras dormir. Hay consenso en que el sueño favorece la consolidación declarativa, con reactivación en ondas lentas, pero los mecanismos finos siguen en debate.",
    v: [
      "Consolidación=Estabilización progresiva de una huella frente a la interferencia y el daño",
      "Consolidación sináptica=Cambios en las conexiones neuronales con síntesis de proteínas, en horas",
      "Consolidación de sistemas=Reorganización lenta por la que el recuerdo depende menos del hipocampo",
      "Müller y Pilzecker (1900)=Origen de la idea de que una huella recién formada es frágil",
      "Gradiente temporal=Mejor conservación de lo antiguo que de lo inmediatamente previo a una lesión",
      "Jenkins y Dallenbach (1924)=Más retención de sílabas tras un intervalo de sueño que de vigilia",
      "Sueño de ondas lentas=Fase en que se reactivan las huellas adquiridas durante el día",
      "Explicación pasiva del sueño=Dormir protege porque en ese intervalo no hay aprendizaje que interfiera"
    ],
    g: [
      "La consolidación de sistemas hace que los recuerdos declarativos dependan más de la ___.|neocorteza|hipocampo|amígdala",
      "La consolidación sináptica requiere síntesis de ___.|proteínas|hormonas|lípidos",
      "La interpretación inicial de Jenkins y Dallenbach fue que dormir reduce la interferencia ___.|retroactiva|proactiva|semántica",
      "Durante el sueño de ondas ___ se reactivan las huellas adquiridas durante el día.|lentas|rápidas|alfa",
      "Dormir bien no compensa una ___ pobre: el sueño consolida lo que se codificó.|codificación|recuperación|motivación"
    ],
    tf: [
      "Hay consenso sobre qué fases del sueño consolidan cada tipo de material.|F|Hay consenso en que el sueño favorece la consolidación declarativa, pero los mecanismos finos siguen en debate.",
      "Las explicaciones pasiva y activa del efecto del sueño no son excluyentes y probablemente contribuyen las dos.|V",
      "La consolidación sináptica dura de semanas a años y hace que el recuerdo dependa menos del hipocampo.|F|Eso describe la de sistemas. La sináptica ocurre en las horas siguientes y requiere síntesis de proteínas.",
      "En la amnesia retrógrada suelen conservarse mejor los recuerdos más antiguos que los inmediatamente anteriores a la lesión.|V"
    ],
    q: [
      "Un estudiante pasa la noche en vela repasando antes del examen. Según el temario, ¿qué problema principal tiene?|Recorta el periodo de consolidación|Aumenta la interferencia proactiva|Impide la codificación de lo leído|Pasar la noche en vela recorta justo el periodo en que se consolida lo estudiado durante el día.",
      "¿Qué predice la explicación activa del efecto del sueño?|Dormir aporta algo más que el descanso|Cualquier periodo tranquilo protege igual|Dormir solo evita aprender cosas nuevas|Atribuye al sueño la reactivación de huellas en ondas lentas, algo más que un intervalo sin interferencia.",
      "¿Qué observaron Müller y Pilzecker (1900)?|Aprender algo nuevo poco después perjudicaba más|El sueño mejoraba el recuerdo de las sílabas|La huella reciente resistía mejor la interferencia|Aprender material nuevo poco después de una lista la perjudicaba más que hacerlo más tarde: la huella reciente es frágil.",
      "El gradiente temporal de la amnesia retrógrada se considera compatible con…|Una consolidación incompleta de lo reciente|Un decaimiento más rápido de lo antiguo|Una mayor interferencia de lo antiguo|Tras una lesión temporal medial, lo antiguo se conserva mejor que lo inmediatamente anterior, aún no consolidado del todo."
    ],
    inc: [
      "Sobre las implicaciones prácticas del sueño para el estudio|Dormir bien compensa una codificación pobre|Estudiar de forma distribuida aprovecha varias noches|Repasar antes de dormir reduce la interferencia|El sueño consolida lo que se codificó, no lo que no llegó a entrar."
    ],
    seq: [],
    cls: [
      "Nivel de consolidación|Sináptica: horas tras el aprendizaje; síntesis de proteínas; conexiones entre neuronas|De sistemas: semanas a años; menor dependencia del hipocampo; mayor papel de la neocorteza"
    ] },
  { t: "La reconsolidación",
    tip: "Según la reconsolidación, un recuerdo consolidado que se reactiva vuelve a un estado lábil y debe reestabilizarse, y en ese intervalo puede reforzarse, debilitarse o modificarse. Nader, Schafe y LeDoux (2000) lo mostraron en ratas con un inhibidor de la síntesis de proteínas en la amígdala. Hay consenso en animales, con condiciones límite. En humanos la evidencia es inconsistente (Schiller et al., 2010, frente a Chalkia et al., 2020), y la reconsolidación no borra recuerdos.",
    v: [
      "Reconsolidación=Reestabilización de un recuerdo que se ha vuelto lábil al reactivarse",
      "Estado lábil=Fase en que un recuerdo reactivado puede reforzarse, debilitarse o modificarse",
      "Reactivación=Puesta en marcha de un recuerdo consolidado mediante un recordatorio",
      "Nader, Schafe y LeDoux=Estudio de 2000 con ratas, tono, descarga e inhibidor en la amígdala",
      "Condiciones límite=Casos en que el recuerdo no se desestabiliza, como si es muy antiguo o fuerte",
      "Schiller et al. (2010)=Extinción en la ventana de reconsolidación sin reaparición del miedo",
      "Chalkia et al. (2020)=Estudio de verificación que no reprodujo el efecto en humanos",
      "Extinción convencional=Nuevo aprendizaje que compite con el original sin borrarlo"
    ],
    g: [
      "En Nader et al. (2000), el inhibidor de la síntesis de proteínas se inyectaba en la ___.|amígdala|neocorteza|cerebelo",
      "Si la inyección se aplicaba sin ___ previa, el recuerdo de miedo se mantenía.|reactivación|extinción|consolidación",
      "Una reactivación que no aporta nada nuevo o ___ puede no desestabilizar el recuerdo.|inesperado|aversivo|reciente",
      "En humanos, la evidencia sobre la reconsolidación es ___.|inconsistente|concluyente|inexistente",
      "La extinción convencional crea un aprendizaje nuevo que ___ con el original.|compite|coincide|acaba"
    ],
    tf: [
      "Hay consenso en que la reconsolidación existe en animales.|V",
      "La verificación de Chalkia et al. (2020) reprodujo con claridad el resultado de Schiller et al. (2010).|F|Varias réplicas fallaron y Chalkia et al. (2020) no reprodujo el efecto. En humanos la evidencia es inconsistente.",
      "En las ratas de Nader et al. (2000), bloquear la reconsolidación borró el recuerdo original.|F|Ni siquiera en animales se habla de borrado, sino de atenuación de la respuesta.",
      "La reconsolidación encaja con la idea de que cada recuperación puede dejar el recuerdo algo distinto de como estaba.|V"
    ],
    q: [
      "En un estudio con ratas condicionadas a un tono, el inhibidor de la síntesis de proteínas se aplica varias horas después de reactivar el recuerdo. ¿Qué cabe esperar?|Que el recuerdo de miedo se mantenga|Que el miedo desaparezca al día siguiente|Que el recuerdo se borre por completo|Pasada la ventana de labilidad, el recuerdo ya se ha reestabilizado, igual que ocurría sin reactivación previa.",
      "¿Qué hicieron Schiller et al. (2010)?|Aplicar la extinción tras un recordatorio|Inyectar un fármaco tras reactivar el miedo|Reactivar recuerdos muy antiguos sin fármacos|Presentaron un recordatorio del estímulo temido y aplicaron la extinción dentro de la ventana de reconsolidación.",
      "¿Por qué puede reaparecer el miedo tras una extinción convencional?|El recuerdo original sigue intacto|La extinción borra solo parte del recuerdo|El recuerdo se reconsolida más fuerte|La extinción crea un aprendizaje nuevo que compite con el original, sin borrarlo.",
      "¿Qué recuerdos pueden no desestabilizarse al reactivarse?|Los muy antiguos o muy fuertes|Los recién adquiridos y débiles|Los que reciben información nueva|Son condiciones límite: recuerdos muy antiguos o fuertes, o reactivaciones que no aportan nada nuevo o inesperado."
    ],
    inc: [
      "Sobre la reconsolidación|Permite ya borrar recuerdos traumáticos en personas|Se ha reproducido en distintas especies y tareas|Presenta la memoria como un ciclo, no como una línea|En humanos los resultados son inconsistentes y, aun en animales, se habla de atenuación, no de borrado."
    ],
    seq: [
      "Ciclo de consolidación y reconsolidación|Aprendizaje inicial>Consolidación>Recuerdo estable>Reactivación>Estado lábil>Reconsolidación"
    ],
    cls: [] }
] },
{ n: 15, t: "El olvido activo", cap: 5, pir: "media", mods: [
  { t: "La inhibición en la memoria",
    tip: "Parte del olvido es resultado de un control activo: para recordar dónde se aparcó ayer, las ubicaciones anteriores, que comparten clave, deben perder accesibilidad. La inhibición reduce la activación de una representación concreta que compite, la hace menos accesible desde cualquier clave y es reversible. Slamecka (1968) describió la inhibición por claves de parte del conjunto. Olvidar puede ser adaptativo, aunque cuánto aporta la inhibición se debate.",
    v: [
      "Inhibición=Reducción activa y reversible de la accesibilidad de una huella competidora",
      "Control ejecutivo=Selección que favorece al candidato buscado y frena a los demás",
      "Olvido activo=Pérdida de accesibilidad producida por un control sobre lo que compite",
      "Olvido pasivo=La huella compite con otras y queda tapada por interferencia",
      "Olvido intencional=La persona decide no recordar algo",
      "Claves de parte del conjunto=Dar parte de la lista como claves empeora el recuerdo del resto",
      "Reversibilidad=Rasgo de la inhibición: la huella pierde accesibilidad pero no se destruye",
      "Slamecka (1968)=Estudio con listas categorizadas en que dar parte de la lista perjudicaba"
    ],
    g: [
      "Según la explicación inhibitoria, la inhibición actúa sobre una representación ___, no sobre la memoria en general.|concreta|global|antigua",
      "Una representación inhibida es menos accesible desde ___ clave.|cualquier|su propia|una sola",
      "Recordar dónde está el coche hoy exige que las ubicaciones ___ pierdan accesibilidad.|antiguas|recientes|correctas",
      "En Slamecka (1968), dar parte de la lista como clave ___ el recuerdo de las palabras restantes.|empeoró|mejoró|no alteró",
      "El control sobre la recuperación se relaciona con las funciones de la corteza ___.|prefrontal|occipital|parietal"
    ],
    tf: [
      "Según sus defensores, la inhibición destruye la huella de los recuerdos competidores.|F|El efecto es reversible: la huella se vuelve menos accesible, pero no se destruye.",
      "Olvidar puede ser adaptativo: muchos olvidos cotidianos son el precio de una recuperación eficaz.|V",
      "Según el consenso actual, todo olvido cotidiano se debe a inhibición.|F|No todo olvido es inhibición. Cuánto aporta la inhibición es, precisamente, una cuestión debatida.",
      "Una explicación de la inhibición por claves de parte del conjunto es que la búsqueda se abandona antes porque las claves dadas compiten con el resto.|V"
    ],
    q: [
      "Antes de un examen, Pablo procura no pensar en una discusión que tuvo por la mañana. ¿Qué fuente de olvido ilustra?|Intencional|Pasiva|Incidental|La persona decide no recordar algo: es olvido intencional, distinto del pasivo por interferencia.",
      "Un amigo intenta recordar el nombre de un actor y los demás le sugieren nombres equivocados que bloquean el buscado. ¿Con qué fenómeno se relaciona?|La inhibición por claves de parte del conjunto|La interferencia retroactiva de una lista|El olvido dirigido por el método de listas|Como en Slamecka (1968), las claves dadas se activan con fuerza y compiten con el elemento buscado.",
      "¿Por qué recordar bien la contraseña actual exige que las anteriores pierdan accesibilidad?|Comparten clave con la actual|Ya no están almacenadas|Se codificaron con menos atención|Todas comparten la misma clave. Si fueran igual de accesibles, la búsqueda de la actual sería un caos.",
      "¿Qué ejemplo corresponde al olvido activo?|Las ubicaciones antiguas del coche pierden fuerza|El PIN antiguo se impone al nuevo al teclearlo|Evitar pensar en una discusión antes de un examen|Un control ejecutivo reduce la accesibilidad de lo que compite. El PIN es olvido pasivo y la discusión, intencional."
    ],
    inc: [
      "Rasgos que la explicación inhibitoria atribuye a la inhibición|Destruye la huella inhibida|Actúa sobre una representación concreta|Reduce su nivel de activación|El efecto es reversible: la huella no se destruye, solo se vuelve menos accesible desde cualquier clave."
    ],
    seq: [],
    cls: [
      "Fuente del olvido|Pasiva: interferencia; la huella queda tapada|Activa: control ejecutivo; ubicaciones antiguas del coche|Intencional: decidir no recordar; evitar pensar en una discusión"
    ] },
  { t: "El olvido inducido por la recuperación",
    tip: "Recordar unos elementos puede empeorar el recuerdo de otros relacionados: es el olvido inducido por la recuperación (Anderson, Bjork y Bjork, 1994). Tras estudiar pares categoría-ejemplar y practicar la recuperación de algunos, los Rp− se recuerdan peor que la línea base, los Nrp. El efecto es moderado y deja de ser significativo con pruebas a 24 horas o más (Murayama et al., 2014). Se debate si se debe a inhibición o a interferencia y bloqueo.",
    v: [
      "Olvido inducido por la recuperación=Recuperar unos elementos empeora el recuerdo de otros relacionados",
      "Rp+=Ejemplar practicado de una categoría practicada",
      "Rp−=Ejemplar no practicado de una categoría practicada",
      "Nrp=Ejemplar de una categoría no practicada, que sirve de línea base",
      "Independencia de la clave=El déficit aparece también al probar el elemento con una clave nueva",
      "Práctica de recuperación=Fase en que se recuerdan algunos ejemplares con claves como FRUTA-na",
      "Murayama et al. (2014)=Metaanálisis con un efecto moderado que se pierde a las 24 horas",
      "Explicación por bloqueo=Lo practicado se fortalece y en la prueba impide acceder a lo demás"
    ],
    g: [
      "En el olvido inducido por la recuperación, la línea base la forman los elementos ___.|Nrp|Rp+|Rp−",
      "Según Murayama et al. (2014), el tamaño global del efecto es ___.|moderado|grande|nulo",
      "El efecto es menor o desaparece si en la segunda fase los ejemplares se vuelven a ___ sin recuperarlos.|estudiar|olvidar|clasificar",
      "Anderson y Spellman (1995) defendieron la inhibición con el argumento de la ___ de la clave.|independencia|sobrecarga|especificidad",
      "En la fase de práctica se recupera la mitad de los ejemplares de la ___ de las categorías.|mitad|totalidad|cuarta parte"
    ],
    tf: [
      "El dato clave del olvido inducido es que los elementos Rp+ se recuerdan mejor que los Rp−.|F|El olvido se define frente a la línea base: lo decisivo es que Rp− queda por debajo de Nrp.",
      "Según Murayama et al. (2014), el efecto deja de ser significativo cuando la prueba final se hace 24 horas o más después.|V",
      "Que los Rp− se recuerden peor está aceptado, pero el mecanismo que lo produce sigue en debate.|V",
      "Desde la postura de la interferencia, los resultados de independencia de la clave se reproducen siempre.|F|Desde esa postura se señala que no siempre se reproducen y que admiten otras lecturas."
    ],
    q: [
      "Tras estudiar FRUTA-naranja, FRUTA-plátano, BEBIDA-vodka y BEBIDA-ron, se practica FRUTA-na. ¿Qué palabra se recordará peor en la prueba final?|Plátano|Naranja|Ron|Plátano es Rp−: no se practicó pero compitió con naranja. Ron es Nrp, la línea base, y naranja, Rp+.",
      "¿Qué ocurre con el olvido inducido cuando la prueba final se hace al día siguiente?|Deja de ser significativo|Se hace mayor que a corto plazo|Se mantiene con el mismo tamaño|Murayama et al. (2014): g de 0,35 en conjunto, pero solo 0,09, no significativo, con demoras de 24 horas o más.",
      "¿Qué dato apoya la explicación inhibitoria del olvido inducido?|El efecto requiere recuperación competitiva|Los Rp+ mejoran por efecto de la práctica|El efecto se mantiene más allá de 24 horas|Aparece con recuperación competitiva y es menor o desaparece si los ejemplares solo se vuelven a estudiar.",
      "¿Qué recomendación para el estudio se deriva de este fenómeno?|Practicar la recuperación de todo el temario|Repasar a fondo solo las preguntas más probables|Evitar la práctica de recuperación|Repasar solo algunas preguntas puede dificultar a corto plazo recordar otras relacionadas."
    ],
    inc: [
      "Sobre el olvido inducido por la recuperación|Es un olvido intencional|Fue descrito por Anderson, Bjork y Bjork (1994)|Su efecto es robusto a corto plazo|Es no intencional: la persona solo quería recuperar unos elementos y, aun así, olvida los relacionados."
    ],
    seq: [
      "Paradigma del olvido inducido por la recuperación|Estudio de pares categoría-ejemplar>Práctica de recuperación de algunos ejemplares>Intervalo>Prueba de todos los ejemplares"
    ],
    cls: [
      "Tipo de elemento|Rp+: naranja; mejor recuerdo por la práctica|Rp−: plátano; por debajo de la línea base|Nrp: vodka; ron; línea base"
    ] },
  { t: "Olvido dirigido y pensar/no pensar",
    tip: "El olvido dirigido estudia el olvido intencional. En el método de ítems, lo marcado «olvidar» se recuerda peor por repaso selectivo en la codificación. En el de listas, olvidar la primera lista reduce su recuerdo y suele mejorar el de la segunda, y se explica por inhibición de la recuperación o cambio de contexto mental. En pensar/no pensar (Anderson y Green, 2001), suprimir la respuesta ante su clave la deja por debajo de la línea base, con efectos modestos y material neutro.",
    v: [
      "Olvido dirigido=Peor recuerdo de lo que se ha indicado olvidar, por ítems o por listas",
      "Método de ítems=Tras cada palabra aparece la instrucción «recordar» u «olvidar»",
      "Método de listas=Se indica olvidar una lista ya aprendida antes de estudiar otra",
      "Repaso selectivo=Elaborar lo que hay que recordar y dejar de procesar lo demás",
      "Cambio de contexto mental=Propuesta de que la primera lista queda menos accesible por un nuevo estado",
      "Pensar/no pensar=Paradigma en que suprimir un recuerdo ante su clave reduce su recuerdo posterior",
      "Supresión=Impedir que la respuesta llegue a la mente mirando la clave",
      "Anderson y Green (2001)=Autores del paradigma de evitar evocar un recuerdo ante su recordatorio"
    ],
    g: [
      "En el método de ítems, la diferencia entre palabras se produce sobre todo en la ___.|codificación|recuperación|consolidación",
      "En el método de listas, quienes reciben la instrucción de olvidar suelen recordar ___ de la segunda lista.|más|menos|nada",
      "La segunda lista se beneficia porque sufre menos interferencia ___.|proactiva|retroactiva|semántica",
      "En pensar/no pensar, el olvido aumentaba con el ___ de veces que se había suprimido el recuerdo.|número|orden|ritmo",
      "La neuroimagen ha asociado la supresión con una reducción de la actividad ___.|hipocampal|prefrontal|occipital"
    ],
    tf: [
      "En el método de listas basta con el repaso selectivo para explicar el olvido, igual que en el de ítems.|F|La primera lista ya estaba aprendida al llegar la instrucción. Se propone inhibición de la recuperación o cambio de contexto.",
      "En pensar/no pensar, el déficit apareció también con claves nuevas, lo que se interpretó como inhibición de la propia huella.|V",
      "Los pares suprimidos en pensar/no pensar se recordaban igual que los de la línea base.|F|Se recordaban peor que la línea base, y el olvido crecía con el número de supresiones (Anderson y Green, 2001).",
      "Estos paradigmas trabajan con palabras neutras aprendidas minutos antes y producen efectos modestos.|V"
    ],
    q: [
      "Un profesor dicta mal la fecha del examen y dice «olvidad esa, la correcta es esta». ¿A qué paradigma de laboratorio se parece la situación?|Olvido dirigido|Olvido inducido por la recuperación|Inhibición por claves de parte del conjunto|Se pide de forma expresa olvidar una información ya recibida para que no estorbe a la correcta: es olvido dirigido.",
      "En pensar/no pensar, ¿qué papel tienen los pares que no aparecen en la segunda fase?|Sirven de línea base|Son los pares suprimidos|Se usan como claves nuevas|Un tercer grupo de pares no aparece en la fase pensar/no pensar y sirve de comparación para los pensados y los suprimidos.",
      "¿Qué diferencia al olvido inducido por la recuperación del olvido dirigido?|El primero es un olvido no intencional|El primero solo afecta al material emocional|El primero se explica por repaso selectivo|En el olvido inducido la persona solo quería recordar unos elementos. En el olvido dirigido se pide de forma expresa olvidar.",
      "¿Qué patrón de actividad cerebral se ha asociado a la supresión en pensar/no pensar?|Más prefrontal y menos hipocampal|Menos prefrontal y más hipocampal|Más hipocampal y más prefrontal|Encaja con la idea de un control ejecutivo prefrontal sobre la recuperación."
    ],
    inc: [
      "Sobre el olvido dirigido por listas|Se explica sobre todo por repaso selectivo|Reduce el recuerdo de la primera lista|Suele mejorar el recuerdo de la segunda lista|El repaso selectivo explica el método de ítems. En el de listas, la primera ya estaba aprendida al recibir la instrucción."
    ],
    seq: [
      "Paradigma pensar/no pensar|Aprender pares de palabras>Pensar o suprimir la respuesta ante la clave>Prueba con la clave original o con claves nuevas"
    ],
    cls: [
      "Método de olvido dirigido|Ítems: instrucción tras cada palabra; repaso selectivo; efecto en la codificación|Listas: instrucción tras toda la lista; inhibición de la recuperación; cambio de contexto mental"
    ] },
  { t: "El estado de la evidencia",
    tip: "Conviene separar fenómenos, mecanismos y extrapolaciones. Hay consenso en que el olvido inducido, el olvido dirigido y la supresión en pensar/no pensar existen en laboratorio. El mecanismo inhibitorio está en debate frente a interferencia, bloqueo o cambio de contexto. El olvido inducido pierde fuerza a partir de las 24 horas. Estos efectos no demuestran la represión clínica, y los sucesos emocionales tienden a consolidarse mejor y a volver de forma intrusiva.",
    v: [
      "Represión=Supuesto mecanismo inconsciente que guarda intacto durante años un recuerdo traumático",
      "Persistencia=Recuerdos no deseados que vuelven de forma intrusiva (Schacter, 2001)",
      "Fenómenos del olvido activo=Efectos de laboratorio cuya existencia goza de consenso",
      "Mecanismos del olvido activo=Explicaciones, como inhibición o interferencia, que siguen en debate",
      "Extrapolación clínica=Salto de los efectos de laboratorio a la supresión de traumas reales",
      "Límite temporal=Pérdida de significación del olvido inducido con pruebas a 24 horas o más",
      "Material neutro=Palabras sin carga emocional aprendidas minutos antes en el laboratorio",
      "Lagunas tras un trauma=Faltas de recuerdo distintas de un recuerdo intacto que se esconde"
    ],
    g: [
      "Que estos efectos se deban a inhibición y no a interferencia es una cuestión en ___.|debate|consenso|desuso",
      "El problema clínico más frecuente tras un trauma son los recuerdos ___.|intrusivos|reprimidos|borrados",
      "Los sucesos con mucha carga emocional tienden a consolidarse ___.|mejor|peor|igual",
      "La supresión produce un olvido fiable, aunque más ___ que en la demostración original de Anderson y Green.|modesto|duradero|intenso",
      "La pérdida del efecto a las 24 horas encaja con la ___ de la inhibición.|reversibilidad|especificidad|intensidad"
    ],
    tf: [
      "Los paradigmas de laboratorio de olvido activo demuestran la represión clínica.|F|No tienen apoyo para eso: sus efectos son conscientes, pequeños, con material neutro y reversibles.",
      "Hay consenso en que el olvido dirigido, con ambos métodos, es un hallazgo replicado.|V",
      "La inhibición está demostrada como causa única del olvido activo.|F|Hay buenos argumentos a favor de un control activo, pero compite con interferencia, bloqueo y cambio de contexto.",
      "Proponer pensar/no pensar como modelo de laboratorio de la supresión voluntaria es razonable como hipótesis.|V"
    ],
    q: [
      "Un artículo divulgativo afirma que pensar/no pensar prueba que la mente guarda intactos los traumas hasta que una técnica los recupera. ¿Qué objeción es más sólida?|Sus efectos son pequeños, conscientes y con palabras neutras|El paradigma no ha logrado replicarse en ningún laboratorio|La supresión mejora el recuerdo en vez de empeorarlo|Nada de eso apoya recuerdos traumáticos guardados intactos durante años. La supresión sí produce un olvido fiable, aunque modesto.",
      "¿Qué estado tiene la afirmación «el olvido inducido se mantiene días después»?|Poco apoyo|Consenso|Debate|No es significativo con pruebas a 24 horas o más (Murayama et al., 2014).",
      "Según Schacter (2001), ¿cómo se llama el pecado de los recuerdos no deseados que vuelven una y otra vez?|Persistencia|Sugestibilidad|Transitoriedad|Muestra que el problema tras un trauma suele ser recordar demasiado, no la ausencia de recuerdo.",
      "¿Qué afirmación tiene consenso en laboratorio, con un efecto modesto?|Reducir el acceso a un recuerdo esforzándose en no evocarlo|Estos efectos se deben a inhibición y no a interferencia ni bloqueo|Los paradigmas de laboratorio demuestran la represión clínica|Así figura en el balance. El mecanismo inhibitorio está en debate y la represión clínica no tiene apoyo."
    ],
    inc: [
      "Sobre el balance del olvido activo|Los traumas suelen dejar una ausencia total de recuerdo|El olvido activo es una herramienta normal, no un síntoma|La recuperación modela la memoria|Lo más frecuente tras un trauma son recuerdos intrusivos. Puede haber lagunas, pero distintas de un recuerdo intacto escondido."
    ],
    seq: [],
    cls: [
      "Estado de la evidencia|Consenso: olvido inducido a corto plazo; olvido dirigido; supresión en laboratorio|Debate: inhibición frente a interferencia; extrapolación a recuerdos emocionales reales|Poco o ningún apoyo: represión clínica demostrada en laboratorio; olvido inducido mantenido días después"
    ] }
] },
{ n: 16, t: "Memorias falsas y otras distorsiones", cap: 5, pir: "alta", mods: [
  { t: "El paradigma DRM",
    tip: "Una memoria falsa es el recuerdo vivido como real de algo que no ocurrió o que ocurrió de otra manera. En el paradigma DRM (Deese, 1959, Roediger y McDermott, 1995), una lista de asociados de un señuelo crítico ausente hace que este se recuerde casi como las palabras estudiadas, a menudo con respuestas «recordar». Se explica por activación con fallo de monitorización de la fuente y por la huella del significado, explicaciones compatibles entre sí.",
    v: [
      "Memoria falsa=Recuerdo vivido como real de algo que no ocurrió u ocurrió de otro modo",
      "Señuelo crítico=Palabra asociada a toda la lista DRM que nunca se presentó",
      "Paradigma DRM=Procedimiento de Deese (1959) recuperado por Roediger y McDermott (1995)",
      "Memoria falsa espontánea=Error que surge del funcionamiento normal de la memoria",
      "Memoria falsa implantada=Error que procede de información engañosa externa",
      "Huella del significado=Representación del sentido general de la lista, más duradera que la literal",
      "Activación y monitorización=El señuelo se activa al oír sus asociados y luego no se discrimina su origen",
      "Respuesta «recordar»=Juicio de evocar el momento concreto en que se oyó la palabra"
    ],
    g: [
      "En la lista cama, descanso, almohada, noche…, el señuelo crítico es ___.|dormir|soñar|cansado",
      "Muchos participantes dan respuestas de «___» para el señuelo crítico.|recordar|saber|adivinar",
      "Advertir del efecto DRM lo reduce, pero no lo ___.|elimina|explica|aumenta",
      "Según la explicación de activación, el fallo final es de monitorización de la ___.|fuente|atención|codificación",
      "Las memorias falsas no son mentiras: son consecuencia del carácter ___ de la memoria.|reconstructivo|reproductivo|limitado"
    ],
    tf: [
      "En el paradigma DRM, el señuelo crítico se rechaza casi siempre porque nunca se presentó.|F|Se recuerda o se reconoce con una frecuencia parecida a la de las palabras realmente estudiadas.",
      "El señuelo crítico suele aceptarse por una vaga sensación de familiaridad, sin recolección.|F|Muchos dan respuestas «recordar»: dicen evocar el momento en que lo oyeron, con sensación de recolección.",
      "Las explicaciones de activación-monitorización y de huella del significado son compatibles entre sí.|V",
      "El paradigma DRM muestra que las memorias falsas pueden surgir sin engaño ni sugestión.|V"
    ],
    q: [
      "Al repasar de memoria la lista de la compra, Elena está segura de haber apuntado «leche» porque iban «galletas», «cereales» y «café». ¿Qué ilustra?|Una memoria falsa espontánea|Un efecto de desinformación|Una memoria falsa implantada|Surge del funcionamiento normal de una memoria basada en el significado y las asociaciones, sin información engañosa externa.",
      "¿Qué implica que el señuelo se acepte con respuestas «recordar»?|Que la seguridad no garantiza la exactitud|Que el efecto se debe solo a familiaridad|Que la advertencia lo elimina por completo|La persona no distingue el señuelo de un recuerdo verdadero: la seguridad subjetiva no garantiza la exactitud.",
      "Según la explicación de activación y monitorización, ¿por qué se acepta el señuelo?|No se distingue si se oyó o se pensó|Se presentó de forma muy breve|Se pierde la huella del significado|«Dormir» recibe mucha activación por propagación y en la prueba no se discrimina si se oyó o solo se pensó.",
      "¿A quién se debe el paradigma DRM?|Deese, recuperado por Roediger y McDermott|Loftus, recuperado por Roediger y McDermott|Deese, recuperado por Johnson y Raye|Lo ideó Deese (1959) y lo recuperaron y popularizaron Roediger y McDermott (1995)."
    ],
    inc: [
      "Sobre el paradigma DRM|Requiere información engañosa externa|El señuelo nunca aparece en la lista|Advertir del efecto lo reduce|Produce memorias falsas espontáneas. La información engañosa externa es propia de la desinformación y la implantación."
    ],
    seq: [
      "Procedimiento y resultado del paradigma DRM|Presentar asociados de una palabra ausente>Activación del señuelo crítico>Prueba de recuerdo o reconocimiento>Aceptación del señuelo con respuestas «recordar»"
    ],
    cls: [
      "Tipo de memoria falsa|Espontánea: paradigma DRM; lista de la compra|Implantada o sugerida: efecto de desinformación; perdido en el centro comercial"
    ] },
  { t: "El efecto de desinformación",
    tip: "La información engañosa recibida después de un suceso se incorpora a su recuerdo. Loftus y Palmer (1974) mostraron que el verbo de la pregunta cambiaba la velocidad estimada y, una semana después, los cristales rotos «vistos» (cerca del 32 % con smashed frente al 14 % con hit). El paradigma tiene tres fases: suceso, información posterior y prueba. Se explica por sustitución, por coexistencia o, con peso central, por confusión de la fuente.",
    v: [
      "Efecto de desinformación=Incorporación al recuerdo de información engañosa recibida después",
      "Loftus y Palmer (1974)=Estudio en que el verbo de la pregunta alteraba la velocidad estimada",
      "Smashed=Verbo con la mayor velocidad estimada, unas 40,8 millas por hora",
      "Contacted=Verbo con la menor velocidad estimada, unas 31,8 millas por hora",
      "Cristales rotos=Detalle inexistente que cerca del 32 % del grupo smashed dijo haber visto",
      "Loftus, Miller y Burns (1978)=Estudio en que una señal de stop se sugería como ceda el paso",
      "Hipótesis de la sustitución=La información nueva reemplaza a la original, que se pierde",
      "Coexistencia y competencia=Ambas huellas se mantienen y rivalizan al recuperar"
    ],
    g: [
      "En Loftus y Palmer (1974), entre los verbos extremos la estimación variaba unas ___ millas por hora.|nueve|cuatro|veinte",
      "Con hit, alrededor del ___ % dijo haber visto cristales rotos.|14|32|25",
      "El segundo experimento descartó que el efecto fuera un simple sesgo de ___.|respuesta|atención|codificación",
      "Pedir a los testigos que identifiquen el ___ de cada detalle reduce el efecto.|origen|tamaño|color",
      "En Loftus, Miller y Burns (1978), la pregunta engañosa mencionaba una señal de ___.|ceda el paso|stop|prohibido"
    ],
    tf: [
      "En Loftus y Palmer (1974), el grupo control sin pregunta de velocidad vio más cristales rotos que el grupo smashed.|F|Fue al revés: alrededor del 32 % con smashed frente a cerca del 12 % en el grupo control.",
      "Muchos autores conceden un peso central a la confusión de la fuente para explicar la desinformación.|V",
      "La hipótesis de la coexistencia sostiene que el recuerdo original se pierde.|F|Eso es la sustitución. Según la coexistencia, ambas huellas se mantienen y el original puede recuperarse con buenas claves.",
      "Hablar con otros testigos o leer la noticia puede introducir desinformación en el recuerdo.|V"
    ],
    q: [
      "Tras ver un vídeo de un robo, un grupo lee un relato que menciona un detalle falso y otro lee un relato neutro. ¿Qué fase del paradigma es?|Información posterior|Suceso original|Prueba de recuerdo|Es la segunda fase: un grupo recibe información engañosa y el control, neutra. Después se prueba el recuerdo del detalle.",
      "¿Por qué es decisivo el dato de los cristales rotos?|Muestra que se alteró el recuerdo posterior|Muestra que se estimaba mal la velocidad|Muestra un sesgo de respuesta inmediato|Una semana después, el verbo no solo había cambiado la respuesta del momento: había alterado lo que se recordaba.",
      "Según la explicación por confusión de la fuente, el detalle sugerido…|Se recuerda, pero se atribuye al suceso|Reemplaza por completo al detalle visto|Compite con el original sin recordarse|El detalle sí se ha leído u oído, pero en la pregunta, no en la escena. Es un error de monitorización de la fuente.",
      "¿Qué recomendación se deriva del efecto de desinformación?|Tomar declaración pronto con preguntas abiertas|Esperar a que el testigo hable con otros|Usar preguntas que den por supuesto un detalle|Cuanto antes y menos sugestiva sea la entrevista, menos ocasiones hay de que la información posterior se incorpore."
    ],
    inc: [
      "Sobre el estudio de Loftus y Palmer (1974)|Con hit se dio la estimación de velocidad más alta|Los participantes veían grabaciones de accidentes|La pregunta crítica cambiaba el verbo según el grupo|La estimación más alta se dio con smashed, unas 40,8 millas por hora. Con hit fue de unas 34,0."
    ],
    seq: [
      "Paradigma clásico de desinformación|Suceso original>Información posterior engañosa o neutra>Prueba del recuerdo del detalle"
    ],
    cls: [] },
  { t: "La implantación de recuerdos y las «guerras de la memoria»",
    tip: "Loftus y Pickrell (1995) implantaron el recuerdo de haberse perdido en un centro comercial en cerca del 25 % (6 de 24). Scoboria et al. (2017) estimaron un 30,4 % de memorias falsas completas, y Brewin y Andrews (2017), en torno al 15 %: el debate es sobre la cifra, no sobre el fenómeno. Favorecen la implantación la autoridad, la plausibilidad, la repetición y la imaginación. Hay consenso en que las técnicas sugestivas pueden crear recuerdos falsos y en que la hipnosis no es válida.",
    v: [
      "Implantación de recuerdos=Creación por sugestión del recuerdo de un suceso completo que no ocurrió",
      "Perdido en el centro comercial=Estudio de Loftus y Pickrell (1995) con un suceso falso de la infancia",
      "Scoboria et al. (2017)=Reanálisis de ocho estudios que estima un 30,4 % de memorias falsas completas",
      "Brewin y Andrews (2017)=Con criterios más estrictos, sitúan las memorias falsas completas en torno al 15 %",
      "Guerras de la memoria=Polémica de los noventa sobre recuerdos de abuso recuperados en terapia",
      "Técnicas sugestivas=Hipnosis, imaginación guiada o interpretación de sueños en terapia",
      "Hipnosis=Técnica que aumenta la confianza y la sugestibilidad más que la exactitud",
      "Plausibilidad=Rasgo de un suceso verosímil que facilita que se implante su recuerdo"
    ],
    g: [
      "En Loftus y Pickrell (1995), aproximadamente el ___ % recordó total o parcialmente el suceso falso.|25|50|10",
      "Scoboria et al. (2017) reanalizaron ___ estudios de implantación con criterios comunes.|ocho|tres|veinte",
      "El debate sobre la implantación es sobre la ___, no sobre el fenómeno.|cifra|técnica|ética",
      "Imaginar repetidamente cómo pudo ser un suceso genera imágenes que luego se confunden con ___.|recuerdos|sueños|deseos",
      "La hipnosis produce más «recuerdos», incluidos más ___.|errores|aciertos|olvidos"
    ],
    tf: [
      "El debate actual se centra en si es posible implantar el recuerdo de un suceso completo.|F|Eso se acepta. Se discute qué porcentaje lo desarrolla y con qué criterio se decide que alguien «recuerda».",
      "En Loftus y Pickrell (1995), algunos participantes añadían detalles que no figuraban en el relato inicial.|V",
      "Según el consenso actual, todo recuerdo tardío de abuso es falso.|F|Los abusos reales existen y pueden no recordarse o contarse durante años. Lo que importa es cómo se recupera el recuerdo.",
      "Un recuerdo surgido en un contexto sugestivo no puede tomarse por sí solo como prueba de lo ocurrido.|V"
    ],
    q: [
      "Un terapeuta pide a una paciente que imagine varias veces un suceso de su infancia que no recuerda e insiste en que sus síntomas lo indican. ¿Qué riesgo hay?|Crear un recuerdo falso del suceso|Bloquear un recuerdo verdadero|Mejorar la exactitud del recuerdo|La imaginación repetida y la insistencia de una figura de autoridad favorecen la implantación de recuerdos.",
      "¿Qué estimación dieron Brewin y Andrews (2017) de las memorias falsas completas?|En torno al 15 %|En torno al 30 %|En torno al 25 %|Con criterios más estrictos que Scoboria et al. (2017), que habían estimado un 30,4 %.",
      "¿Qué diferencia la implantación del efecto de desinformación?|Crea un suceso entero que no ocurrió|Altera detalles de un suceso real|Solo afecta a la confianza del testigo|La desinformación altera detalles de un suceso real. La implantación crea el recuerdo de un suceso completo.",
      "¿Cuál de estos factores favorece la implantación de recuerdos?|Una fuente de autoridad o de confianza|Un suceso poco plausible y extraño|Una sola entrevista sin repetición|Favorecen la implantación la autoridad, la plausibilidad, las entrevistas repetidas, imaginar el suceso y la presión."
    ],
    inc: [
      "Sobre las «guerras de la memoria»|La hipnosis demostró recuperar recuerdos|Se dieron sobre todo en los años noventa|Algunas terapias usaban técnicas sugestivas|La hipnosis aumenta la confianza y la sugestibilidad más que la exactitud: no es válida para recuperar recuerdos."
    ],
    seq: [
      "Estudio de Loftus y Pickrell (1995)|Cuadernillo con tres sucesos reales y uno falso>Entrevistas en que se pide recordar cada suceso>Recuerdo total o parcial del suceso falso"
    ],
    cls: [] },
  { t: "Los siete pecados de la memoria y las amnesias",
    tip: "Schacter (2001) agrupó los errores de la memoria en siete pecados: de omisión (transitoriedad, distractibilidad, bloqueo), de comisión (atribución errónea, sugestibilidad, sesgo) y la persistencia como categoría propia. La criptomnesia es una idea ajena vivida como propia. En la amnesia anterógrada no se forman nuevos recuerdos declarativos, y en la retrógrada se pierden los anteriores con gradiente temporal. H. M. y Clive Wearing conservaban la memoria a corto plazo y la no declarativa.",
    v: [
      "Transitoriedad=Pérdida de accesibilidad con el paso del tiempo",
      "Distractibilidad=Fallo por falta de atención al codificar o al recordar",
      "Bloqueo=Información disponible que no sale en el momento",
      "Atribución errónea=Recordar algo pero asignarlo a una fuente equivocada",
      "Sesgo=El presente y las creencias reescriben el pasado",
      "Criptomnesia=Idea ajena, de fuente olvidada, que se vive como propia y original",
      "Amnesia anterógrada=Incapacidad para formar nuevos recuerdos declarativos desde un momento",
      "Amnesia funcional=Pérdida retrógrada brusca sin lesión que la explique, a veces de la identidad"
    ],
    g: [
      "Para Schacter, los pecados no son defectos de diseño, sino el ___ de rasgos que hacen eficaz a la memoria.|reverso|origen|resultado",
      "La punta de la lengua es un ejemplo del pecado de ___.|bloqueo|transitoriedad|sesgo",
      "H. M. mejoró en la tarea de dibujo en ___ sin recordar haberla practicado.|espejo|serie|cuadrícula",
      "Clive Wearing, tras una encefalitis por herpes simple, conservó su habilidad ___.|musical|lingüística|espacial",
      "La amnesia infantil supone pocos recuerdos antes de los ___ años.|3–4|7–8|10–12"
    ],
    tf: [
      "Según Schacter (2001), la persistencia es un pecado de omisión.|F|Es una categoría propia. Omisión agrupa transitoriedad, distractibilidad y bloqueo.",
      "La criptomnesia equivale a un plagio deliberado.|F|No es deliberada: se olvida la fuente y la idea ajena se vive sinceramente como propia y original.",
      "H. M. conservaba la memoria a corto plazo y la capacidad de aprendizaje procedimental.|V",
      "La amnesia retrógrada suele seguir un gradiente temporal, con mejor conservación de lo más antiguo.|V"
    ],
    q: [
      "En una reunión, Jorge propone convencido una idea que oyó a una compañera semanas antes, sin recordar que no es suya. ¿Qué le ocurre?|Criptomnesia|Sugestibilidad|Plagio deliberado|Es una forma de atribución errónea: se olvida la fuente y una idea ajena se vive como propia y original.",
      "Creer que se leyó en el libro algo que en realidad dijo un compañero es un pecado de…|Atribución errónea|Sugestibilidad|Distractibilidad|Se recuerda el contenido, pero se atribuye a una fuente equivocada. Es un pecado de comisión.",
      "¿Qué se pregunta como «perfil del amnésico»?|Declarativa dañada, corto plazo y no declarativa conservadas|Corto plazo dañada, declarativa y procedimental conservadas|Procedimental dañada, declarativa y corto plazo conservadas|Es el perfil de H. M. y Clive Wearing: daño declarativo con memoria a corto plazo y no declarativa conservadas.",
      "Tras un traumatismo craneoencefálico con pérdida de conciencia, un paciente presenta una laguna en torno al golpe y confusión que mejora. ¿Qué amnesia es?|Postraumática|Disociativa|Anterógrada pura|Es el rasgo de la postraumática. La disociativa o funcional no tiene una lesión que la explique."
    ],
    inc: [
      "Sobre la clasificación de Schacter (2001)|La sugestibilidad es un pecado de omisión|La transitoriedad es un pecado de omisión|La atribución errónea es de comisión|La sugestibilidad, incorporar información sugerida por otros, es de comisión, como la atribución errónea y el sesgo."
    ],
    seq: [],
    cls: [
      "Pecado de la memoria|Omisión: transitoriedad; distractibilidad; bloqueo|Comisión: atribución errónea; sugestibilidad; sesgo|Categoría propia: persistencia"
    ] }
] }
);

SP.register(window.COURSE);
})({});
