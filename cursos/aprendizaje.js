(function(window){
// SAIMAP Psicología · Psicología del Aprendizaje
// Contenido alineado con el temario SAIMAP «Psicología del Aprendizaje» (v1.0, octubre de 2026).
window.COURSE = {
  id: "aprendizaje",
  title: "Psicología del Aprendizaje",
  short: "Aprendizaje",
  area: "Procesos psicológicos básicos",
  rutas: { grado: { curso: 1 }, pir: { bloque: "Procesos básicos" } },
  temario: "Psicologia-del-Aprendizaje_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Qué es aprender: historia, método y aprendizaje no asociativo", from: 1, to: 2 },
    { n: 2, t: "El condicionamiento clásico", from: 3, to: 7 },
    { n: 3, t: "El condicionamiento operante", from: 8, to: 12 },
    { n: 4, t: "Aprendizaje cognitivo: conceptos, problemas y reestructuración", from: 13, to: 14 },
    { n: 5, t: "Aprendizaje social", from: 15, to: 15 },
    { n: 6, t: "Aprendizaje perceptivo-motor y aplicaciones", from: 16, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Aprendizaje · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "Qué es aprender y cómo se estudia", cap: 1, pir: "media", mods: [
  { t: "Definición de aprendizaje: aprendizaje y ejecución",
    tip: "El aprendizaje es un cambio relativamente duradero en los mecanismos de la conducta producido por la experiencia, en la línea de Domjan (2015). No se observa directamente: se infiere a partir de la ejecución, y puede haber aprendizaje sin ejecución, como en el aprendizaje latente de Tolman y Honzik (1930). Para hablar de aprendizaje hay que descartar la maduración, la fatiga, la adaptación sensorial, los cambios motivacionales, las lesiones y las drogas.",
    v: [
      "Aprendizaje=Cambio relativamente duradero en los mecanismos de la conducta producido por la experiencia",
      "Ejecución=Conducta observable en un momento dado, a partir de la cual se infiere lo aprendido",
      "Aprendizaje latente=Lo adquirido no se manifiesta hasta que hay motivo para ejecutarlo",
      "Tolman y Honzik (1930)=Ratas que recorrían un laberinto sin comida y mejoraban al empezar a recibirla",
      "Kimble (1961)=Definición conductista clásica que ligaba el aprendizaje a la práctica reforzada",
      "Maduración=Cambio que depende del desarrollo y no de una experiencia concreta",
      "Adaptación sensorial=Reducción pasajera de la sensibilidad del receptor",
      "Fatiga=Pérdida de capacidad del efector que se recupera con el descanso"
    ],
    g: [
      "Según la definición de trabajo, el aprendizaje es un cambio relativamente duradero en los ___ de la conducta.|mecanismos|resultados|reflejos",
      "El aprendizaje no se observa directamente, sino que se ___ a partir de la ejecución.|infiere|ejercita|registra",
      "Dejar de notar el olor de la propia casa al rato de entrar es un caso de ___.|adaptación sensorial|fatiga del efector|maduración tardía",
      "Comer más deprisa cuando se tiene mucha hambre se debe a un cambio ___, no a un aprendizaje.|motivacional|madurativo|sensorial",
      "Que lo aprendido condicione cómo se aprende lo siguiente indica que el aprendizaje es ___.|acumulativo|incidental|adaptativo"
    ],
    tf: [
      "Puede haber aprendizaje sin que se refleje en la ejecución.|V",
      "Las definiciones conductistas clásicas, como la de Kimble (1961), separaban con nitidez aprendizaje y ejecución.|F|Tendían a identificar ambos y a ligar el aprendizaje a la práctica reforzada.",
      "El aprendizaje puede producir conductas desadaptativas, como una fobia o una adicción.|V",
      "Un sobresalto ante un portazo que desaparece en unos segundos cumple la definición de aprendizaje.|F|No es relativamente duradero: un cambio de unos segundos que desaparece no basta."
    ],
    q: [
      "Marta ha ido muchas veces de copiloto a casa de unos amigos y, el primer día que conduce, llega sin perderse. ¿Qué ilustra?|Aprendizaje latente|Aprendizaje por ensayo y error|Maduración de la orientación|Aprendió el camino sin practicarlo y lo muestra cuando hay motivo, como las ratas de Tolman y Honzik (1930).",
      "En el experimento de Tolman y Honzik (1930), ¿qué efecto tenía la comida al final del laberinto?|Hacía visible lo ya aprendido|Hacía posible el aprendizaje|Aceleraba la maduración motora|La comida afectaba a la ejecución, no al aprendizaje: las ratas ya conocían la disposición del laberinto.",
      "Tras una hora de flexiones, a un deportista le cuesta hacer una más. ¿Por qué no es aprendizaje?|Afecta al efector y se recupera|Depende de su calendario biológico|Cambia lo que el deportista sabe|Es fatiga: disminuye la capacidad del efector y se recupera con el descanso.",
      "¿Qué parte de la definición de aprendizaje descarta los cambios por maduración?|Producido por la experiencia|Relativamente duradero|En los mecanismos de la conducta|El cambio debe deberse a lo que le ha pasado al organismo, no a su calendario biológico."
    ],
    inc: [
      "Sobre la definición de aprendizaje|Se identifica con la ejecución observable|Admite una lectura en términos cognitivos|Puede ser intencional o incidental|El aprendizaje es un proceso inferido que debe distinguirse de la ejecución, lo que el organismo hace en un momento."
    ],
    seq: [],
    cls: [
      "¿Es aprendizaje?|Sí: saber llegar tras ir de copiloto; ratas de Tolman y Honzik; una fobia adquirida|No: andar a la edad esperada; dejar de notar el olor de casa; torpeza tras la anestesia"
    ] },
  { t: "Conducta no aprendida: reflejos, taxias, pautas de acción fija e impronta",
    tip: "Todo organismo nace con conductas fijadas por la evolución, sobre las que actúa el aprendizaje. El reflejo es una respuesta rápida, específica e involuntaria de una parte del cuerpo. Las taxias orientan a todo el organismo hacia el estímulo o en contra de él, las cinesis no están orientadas y los tropismos son crecimientos de plantas. Las pautas de acción fija son secuencias típicas de la especie que dispara un estímulo señal, y la impronta muestra que lo innato y lo aprendido no se separan de forma tajante.",
    v: [
      "Reflejo=Respuesta específica, rápida e involuntaria a un estímulo específico",
      "Arco reflejo=Receptor, vía aferente, interneuronas, vía eferente y efector",
      "Taxia=Movimiento orientado de todo el organismo hacia el estímulo o en contra de él",
      "Cinesis=Cambio de velocidad o de giro no orientado que lleva a zonas favorables",
      "Tropismo=Crecimiento orientado propio de las plantas",
      "Pauta de acción fija=Secuencia típica de la especie que dispara un estímulo señal y tiende a completarse",
      "Estímulo señal=Rasgo, a menudo aislado, que desencadena una secuencia innata",
      "Periodo sensible=Ventana temporal sin límites absolutos en la que un aprendizaje es especialmente fácil"
    ],
    g: [
      "La polilla que vuela hacia la luz es un ejemplo de fototaxia ___.|positiva|negativa|refleja",
      "El tallo que se curva hacia la ventana ilustra un caso de ___.|tropismo|taxia|cinesis",
      "Para subrayar que admiten cierta variación, las pautas de acción fija se llaman también pautas de acción ___.|modal|variable|típica",
      "Dentro de una pauta de acción fija, masticar y tragar pertenecen a la fase ___.|consumatoria|apetitiva|refleja",
      "En la impronta se prefiere hablar de periodo ___ porque sus límites no son absolutos.|sensible|crítico|refractario"
    ],
    tf: [
      "Las cinesis llevan al animal a zonas favorables sin estar orientadas hacia el estímulo.|V",
      "La cucaracha que huye de la luz al encender la cocina muestra un tropismo negativo.|F|Es una taxia negativa, un movimiento de todo el organismo. Los tropismos son crecimientos de plantas.",
      "Las pautas de acción fija dependen poco del estado motivacional del animal, igual que los reflejos.|F|A diferencia de los reflejos, dependen mucho de la motivación y de la conducta reciente.",
      "En la impronta, la tendencia a seguir es innata, pero a quién se sigue depende de la experiencia.|V"
    ],
    q: [
      "Un ganso gris empieza a recuperar con el pico un huevo que ha rodado fuera del nido y sigue con el movimiento aunque le retiren el huevo. ¿Qué conducta muestra?|Una pauta de acción fija|Un reflejo de prensión|Una taxia positiva|Una vez iniciada ante el estímulo señal, la secuencia tiende a completarse (Lorenz y Tinbergen, 1938).",
      "¿Qué rasgo distingue la fase apetitiva de la consumatoria?|Es más flexible y busca el estímulo|Es más estereotipada y cierra la secuencia|Es refleja e independiente del estado|La fase apetitiva es flexible y de búsqueda. La consumatoria, más estereotipada, cierra la secuencia.",
      "Un animal se mueve deprisa en zonas secas y despacio en las húmedas, y acaba acumulándose en estas. ¿Qué conducta es?|Una cinesis|Una taxia|Un tropismo|El cambio de velocidad no está orientado hacia el estímulo, pero lleva al animal a zonas favorables.",
      "¿Qué rasgo comparten las taxias y las pautas de acción fija frente a los reflejos?|Implican a todo el organismo|Son crecimientos orientados|Dependen de un arco reflejo|El reflejo afecta a una parte del cuerpo. Las taxias y las pautas implican al organismo completo."
    ],
    inc: [
      "Sobre la conducta no aprendida|El reflejo es una secuencia compleja y organizada|El arco reflejo termina en un músculo o una glándula|La impronta ocurre durante un periodo sensible|El reflejo es simple y afecta a una parte del cuerpo. La secuencia compleja y organizada es la pauta de acción fija."
    ],
    seq: [],
    cls: [
      "Conducta innata|Reflejo: retirar la mano de la sartén; parpadeo; succión|Taxia: polilla hacia la luz; cucaracha que huye de la luz|Pauta de acción fija: recuperar el huevo; estímulo señal; fase consumatoria"
    ] },
  { t: "Raíces de la disciplina y grandes modelos",
    tip: "Los empiristas británicos propusieron que las ideas se asocian por contigüidad, semejanza y frecuencia, el germen de los modelos asociativos. Darwin planteó la continuidad entre especies, Romanes cayó en el anecdotismo y el antropomorfismo, y Morgan (1894) respondió con su canon, un principio de prudencia. La disciplina nació de la psicología comparada con Ebbinghaus, Thorndike y Pavlov. Hoy se distinguen modelos asociativos, cognitivos, social-cognitivo y constructivistas, y se sabe que la equipotencialidad fuerte es falsa.",
    v: [
      "Empiristas británicos=Locke o Hume, para quienes la mente se forma con la experiencia y las ideas se asocian",
      "Canon de Morgan=No explicar por una facultad superior lo que puede explicar una inferior",
      "Antropomorfismo=Atribuir a los animales razonamientos humanos a partir de historias sueltas",
      "Romanes=Recopiló observaciones de conducta animal inteligente con un método anecdótico",
      "Ebbinghaus (1885)=Mostró que el aprendizaje verbal humano podía medirse con precisión",
      "Equipotencialidad=Supuesto de que cualquier estímulo se asocia con cualquier otro con igual facilidad",
      "Error de predicción=Desajuste entre lo que ocurre y lo que se esperaba, motor del aprendizaje",
      "Neoconductismo=Hull, Tolman, Guthrie y Skinner, con posturas distintas sobre las variables internas"
    ],
    g: [
      "Según los empiristas británicos, las ideas se asocian por contigüidad, semejanza y ___.|frecuencia|contraste|refuerzo",
      "El canon de Morgan es un principio de ___, no una ley de la naturaleza.|prudencia|economía|evolución",
      "La psicología del aprendizaje nació desde la psicología ___, con el objetivo de hallar principios generales.|comparada|evolutiva|clínica",
      "El modelo de Rescorla y Wagner (___) situó el error de predicción en el centro.|1972|1968|1913",
      "Tolman aparece también entre los precursores cognitivos porque habló de mapas ___.|cognitivos|conductuales|conceptuales"
    ],
    tf: [
      "Darwin planteó que entre los humanos y los demás animales hay diferencias de naturaleza, no de grado.|F|Es al revés: diferencias de grado, no de naturaleza, lo que justifica estudiar la mente animal.",
      "Pavlov recibió el Nobel de 1904 por sus trabajos sobre la digestión, antes de su programa sobre los reflejos condicionados.|V",
      "La equipotencialidad fuerte de los primeros conductistas se mantiene hoy como un principio válido.|F|Es falsa: hay restricciones biológicas al aprendizaje (Garcia y Koelling, 1966, Seligman, 1970).",
      "Piaget y Vygotski se sitúan entre los modelos constructivistas.|V"
    ],
    q: [
      "Un investigador ve que su perro abre la verja y concluye que ha razonado cómo funciona el pestillo, aunque basta un aprendizaje más simple para explicarlo. ¿Qué principio incumple?|El canon de Morgan|La ley de contigüidad|La equipotencialidad|No hay que recurrir a una facultad superior si una inferior basta para explicar la conducta.",
      "¿Qué autor reaccionó al método anecdótico de Romanes formulando un principio de prudencia?|Lloyd Morgan|Ebbinghaus|Thorndike|Morgan (1894) propuso no interpretar una conducta por una facultad superior si basta una inferior.",
      "¿Qué modelo sostiene que se aprende observando a otros y que las expectativas regulan la ejecución?|Social-cognitivo|Constructivista|Asociativo|Es el modelo de Bandura. El constructivista, de Piaget y Vygotski, subraya que quien aprende construye su conocimiento.",
      "¿Qué hallazgo desmintió la versión fuerte de la equipotencialidad?|Las restricciones biológicas|El error de predicción|El aprendizaje latente|No todos los estímulos se asocian igual de fácil: hay restricciones biológicas al aprendizaje (Unidad 6)."
    ],
    inc: [
      "Sobre los grandes modelos|Watson defendió una psicología con conceptos mentales|Tolman figura también entre los precursores cognitivos|Köhler se incluye entre los modelos cognitivos|El conductismo de Watson (1913) pretendía precisamente una psicología sin conceptos mentales."
    ],
    seq: [
      "Hitos de la psicología del aprendizaje|Ebbinghaus (1885)>Canon de Morgan (1894)>Cajas problema de Thorndike (1898)>Nobel de Pavlov (1904)>Conductismo de Watson (1913)>Rescorla y Wagner (1972)"
    ],
    cls: [
      "Gran modelo|Asociativos: Pavlov; Thorndike; Skinner|Cognitivos: Köhler; mapas cognitivos de Tolman|Constructivistas: Piaget; Vygotski"
    ] },
  { t: "El método: diseños, controles y modelos animales",
    tip: "Como el aprendizaje se infiere, hay que demostrar que el cambio se debe a la experiencia manipulada. Hans el Listo (Pfungst, 1907) mostró la necesidad de controlar las expectativas del experimentador. El control no apareado puede crear aprendizaje inhibitorio, por eso Rescorla (1967) propuso el control verdaderamente aleatorio. En la razón de supresión, 0 indica supresión total y 0,5, ninguna. Los modelos animales se valoran por su validez de apariencia, de constructo y predictiva.",
    v: [
      "Hans el Listo=Caballo que respondía a gestos involuntarios de quien le preguntaba (Pfungst, 1907)",
      "Control no apareado=Los mismos estímulos que el grupo experimental, pero nunca juntos",
      "Control verdaderamente aleatorio=Estímulos al azar, de modo que uno no informa sobre el otro (Rescorla, 1967)",
      "Diseño ABAB=Retirar la intervención y volver a aplicarla para comprobar si es la causa",
      "Línea base múltiple=La intervención empieza en momentos distintos en varias conductas o personas",
      "Criterio cambiante=El objetivo de la intervención se endurece por pasos",
      "Razón de supresión=A/(A + B), donde 0 indica supresión total y 0,5 ninguna",
      "Validez de constructo=El modelo animal comparte el mismo mecanismo que el fenómeno humano"
    ],
    g: [
      "Con una razón de supresión de ___, el estímulo no altera la conducta.|0,5|0|1",
      "La ___ de una respuesta es cuánto tarda en aparecer.|latencia|magnitud|tasa",
      "Un modelo animal en el que lo que funciona también funciona en humanos tiene validez ___.|predictiva|de apariencia|de constructo",
      "Reducir los cigarrillos diarios de 20 a 15 y luego a 10 sigue un diseño de criterio ___.|cambiante|múltiple|reversible",
      "Desde el caso de Hans el Listo se insiste en controlar las expectativas del ___.|experimentador|animal|público"
    ],
    tf: [
      "Una razón de supresión de 0 indica que el animal no tiene miedo al estímulo.|F|Es al revés: 0 indica supresión total, es decir, mucho miedo. El 0,5 indica que el estímulo no altera la conducta.",
      "El control no apareado explícito es neutral y no enseña nada sobre el estímulo.|F|Enseña que un estímulo predice la ausencia del otro y puede crear aprendizaje inhibitorio.",
      "Los diseños de caso único estudian a uno o pocos sujetos con medidas repetidas.|V",
      "Los principios asociativos básicos, como el error de predicción, tienen correlatos neurales comunes entre especies.|V"
    ],
    q: [
      "Una rata da 10 presiones de palanca durante el EC y 30 en el periodo previo de igual duración. ¿Qué indica su razón de supresión?|Supresión parcial (0,25)|Ausencia de supresión (0,5)|Supresión total (0)|10/(10 + 30) da 0,25, un valor entre la supresión total (0) y la ausencia de supresión (0,5).",
      "Si en un diseño ABAB la conducta empeora al retirar la intervención y mejora al reponerla, se concluye que…|la intervención es la causa probable|la línea base era inestable|el efecto se debe a la maduración|El empeoramiento al retirar y la mejora al reponer apuntan a la intervención como causa probable.",
      "Un fármaco mejora a las ratas en un modelo de ansiedad y después también a los pacientes. ¿Qué validez muestra el modelo?|Predictiva|De constructo|De apariencia|La validez predictiva consiste en que lo que funciona en el modelo funcione también en humanos.",
      "¿Por qué propuso Rescorla (1967) el control verdaderamente aleatorio?|El no apareado puede crear inhibición|El no apareado causa sensibilización|El aleatorio evita el efecto Hans|En el control no apareado, un estímulo pasa a predecir la ausencia del otro y puede volverse inhibidor."
    ],
    inc: [
      "Sobre el método|El control no apareado no descarta la sensibilización|La validez de apariencia exige parecido con el fenómeno|Pfungst mostró que Hans respondía a gestos involuntarios|El control no apareado sí descarta la sensibilización. Su problema es que puede crear aprendizaje inhibitorio."
    ],
    seq: [],
    cls: [
      "Diseño de caso único|AB: línea base seguida de intervención; registrar y luego elogiar|ABAB: reversión; retirar y reponer la intervención|Criterio cambiante: objetivo que se endurece; de 20 a 15 y luego a 10 cigarrillos"
    ] }
] },
{ n: 2, t: "Aprendizaje no asociativo", cap: 1, pir: "alta", mods: [
  { t: "Habituación y sus características",
    tip: "La habituación es el descenso de una respuesta provocada por la presentación repetida de un estímulo, sin aprender ninguna relación. Thompson y Spencer (1966), revisados por Rankin et al. (2009), describieron sus características: es más rápida con estímulos débiles y frecuentes, específica del estímulo, muestra recuperación espontánea y deshabituación, y con sesiones espaciadas dura días o semanas. La especificidad y la deshabituación la separan de la fatiga y de la adaptación sensorial.",
    v: [
      "Aprendizaje no asociativo=Cambio en la respuesta por la presentación repetida de un único estímulo",
      "Habituación=Descenso de una respuesta provocada por la presentación repetida del estímulo",
      "Deshabituación=Restauración de la respuesta habituada tras un estímulo distinto e intenso",
      "Recuperación espontánea=Reaparición parcial de la respuesta habituada tras un periodo sin el estímulo",
      "Especificidad del estímulo=Si el estímulo cambia lo suficiente, la respuesta habituada vuelve",
      "Habituación a largo plazo=La que producen las sesiones espaciadas y dura días o semanas",
      "Descenso progresivo=La respuesta cae más en las primeras repeticiones y menos después",
      "Thompson y Spencer (1966)=Describieron las características paramétricas de la habituación"
    ],
    g: [
      "La habituación es más rápida y profunda con estímulos ___ y frecuentes.|débiles|intensos|novedosos",
      "Ante estímulos muy ___, la habituación puede no aparecer.|intensos|débiles|frecuentes",
      "Las sesiones ___ producen una habituación que dura días o semanas.|espaciadas|masivas|breves",
      "La fatiga se localiza en el efector, y la adaptación sensorial, en el ___.|receptor|sistema de estado|músculo",
      "El modelo SOP explica la habituación a corto plazo porque el estímulo repetido ya está activo en la ___.|memoria|vía eferente|retina"
    ],
    tf: [
      "La habituación implica aprender una asociación nueva entre el estímulo y la ausencia de consecuencias.|F|Es un cambio en la respuesta a un solo estímulo, sin aprender una asociación nueva.",
      "La habituación se generaliza poco a estímulos distintos del habituado.|V",
      "Si un ruido distinto devuelve la respuesta al primer estímulo, el descenso previo no se debía a la fatiga.|V",
      "La recuperación espontánea consiste en que un estímulo nuevo e intenso restaura la respuesta habituada.|F|Eso es la deshabituación. En la recuperación espontánea basta con dejar pasar tiempo sin el estímulo."
    ],
    q: [
      "Alguien se ha habituado al tictac del reloj del salón y, al pasar una moto con el tubo de escape roto, vuelve a oírlo. ¿Qué fenómeno es?|Deshabituación|Recuperación espontánea|Sensibilización específica|La respuesta vuelve por otro estímulo, nuevo e intenso, no por el paso del tiempo.",
      "Tras dos semanas de vacaciones, una persona vuelve a oír el tictac al que se había habituado. ¿Qué fenómeno es?|Recuperación espontánea|Deshabituación|Adaptación sensorial|Basta el paso del tiempo sin el estímulo para que la respuesta habituada reaparezca en parte.",
      "¿Qué dos pruebas separan la habituación de la fatiga y de la adaptación sensorial?|Especificidad y deshabituación|Descenso y recuperación espontánea|Intensidad y frecuencia del estímulo|Si la respuesta es específica y un estímulo distinto la restaura, el efector y el receptor funcionaban.",
      "¿Dónde se sitúa el cambio responsable de la habituación?|En la vía estímulo-respuesta|En el músculo que responde|En el receptor que detecta|El organismo podía percibir y responder, pero había dejado de hacerlo: el cambio está en la conexión entre estímulo y respuesta."
    ],
    inc: [
      "Sobre la habituación|Es más rápida con estímulos intensos|Se generaliza poco a otros estímulos|Admite la deshabituación|Es más rápida y profunda con estímulos débiles y frecuentes. Ante estímulos muy intensos puede no aparecer."
    ],
    seq: [],
    cls: [
      "Proceso que reduce la respuesta|Fatiga: efector; afecta a cualquier estímulo; se recupera con descanso|Adaptación sensorial: receptor; olor de la propia casa|Habituación: conexión estímulo-respuesta; específica; admite deshabituación"
    ] },
  { t: "Sensibilización y teoría del proceso dual",
    tip: "La sensibilización es el aumento de una respuesta tras un estímulo intenso. Es poco específica y suele durar poco, y el pseudocondicionamiento se debe a ella. Según Groves y Thompson (1970), cada estímulo activa la habituación en la vía E-R y la sensibilización en el sistema de estado, y la conducta es su suma neta. Con estímulos débiles domina la habituación, y con intensos la respuesta puede subir antes de bajar. La deshabituación sería una sensibilización superpuesta, algo todavía en debate.",
    v: [
      "Sensibilización=Aumento poco específico de la respuesta tras la exposición a un estímulo intenso",
      "Pseudocondicionamiento=Un estímulo nunca emparejado provoca respuesta por el efecto de otro intenso",
      "Proceso dual=Teoría de Groves y Thompson (1970) de dos procesos independientes que se suman",
      "Vía E-R=Circuito más directo entre receptores y músculos, sede de la habituación",
      "Sistema de estado=Regula el nivel general de activación, sede de la sensibilización",
      "Suma neta=Resultado observable de combinar habituación y sensibilización",
      "Estímulo débil=Activa poco el sistema de estado, de modo que domina la habituación",
      "Deshabituación (proceso dual)=Sensibilización superpuesta que compensa la habituación sin borrarla"
    ],
    g: [
      "A diferencia de la habituación, la sensibilización es poco ___.|específica|intensa|frecuente",
      "Según Groves y Thompson, la habituación actúa en la vía ___.|E-R|de estado|aferente",
      "Según la teoría del proceso dual, el proceso de sensibilización lo activan sobre todo los estímulos ___.|intensos|débiles|repetidos",
      "Con un estímulo intenso, la respuesta puede ___ en los primeros ensayos antes de bajar.|aumentar|estabilizarse|desaparecer",
      "Los estudios de condicionamiento incluyen controles con estímulos sin emparejar para descartar el ___.|pseudocondicionamiento|precondicionamiento sensorial|condicionamiento hacia atrás"
    ],
    tf: [
      "La sensibilización aumenta la reactividad ante muchos estímulos, no solo ante el que la provoca.|V",
      "Según el proceso dual, la habituación actúa en el sistema de estado y la sensibilización, en la vía E-R.|F|Es al revés: la habituación actúa en la vía E-R y la sensibilización, en el sistema de estado.",
      "Según el proceso dual, la deshabituación borra la habituación previa.|F|No la borra: la compensa con una sensibilización superpuesta, una interpretación que sigue en debate.",
      "Con exposiciones repetidas, la sensibilización puede alargarse.|V"
    ],
    q: [
      "Tras un susto fuerte en la carretera, durante un rato cualquier ruido del coche sobresalta mucho a Pablo. ¿Qué fenómeno es?|Sensibilización|Deshabituación|Pseudocondicionamiento|El estímulo intenso aumenta la reactividad general ante muchos estímulos, no solo ante él mismo.",
      "Según la teoría del proceso dual, ¿qué curva se espera con un estímulo débil repetido?|Descenso ensayo a ensayo|Subida inicial y luego descenso|Respuesta estable sin cambios|Con estímulos débiles apenas se activa el sistema de estado y domina la habituación.",
      "¿Qué aspecto de la teoría del proceso dual sigue en debate?|Que la deshabituación sea sensibilización|Que la conducta sea una suma neta|Que la habituación actúe en la vía E-R|Se discute si la deshabituación es solo una sensibilización superpuesta a la respuesta habituada.",
      "Una descarga hace que un tono nunca emparejado con ella provoque un sobresalto. ¿Cómo se explica?|Por sensibilización|Por condicionamiento|Por deshabituación|Es pseudocondicionamiento: como no hay asociación, la respuesta se debe a la sensibilización."
    ],
    inc: [
      "Sobre la sensibilización|Es muy específica del estímulo intenso|Aumenta la respuesta ante muchos estímulos|Actúa en el sistema de estado|Es poco específica: el estímulo intenso aumenta la reactividad general. Creer lo contrario es una trampa típica."
    ],
    seq: [],
    cls: [
      "Proceso no asociativo|Habituación: disminuye la respuesta; estímulo débil y frecuente; vía E-R|Sensibilización: aumenta la respuesta; estímulo intenso; sistema de estado"
    ] },
  { t: "Teoría del proceso oponente",
    tip: "Solomon y Corbit (1974) propusieron que un estímulo emocional provoca un proceso a, rápido y estable, y un proceso b de signo contrario, lento en aparecer y en desaparecer, que se fortalece con la repetición. La emoción es a − b. Con muchas exposiciones, la reacción neta se debilita y la post-reacción se hace grande y duradera, lo que explica la tolerancia, la abstinencia y el cambio de motivo en la adicción. Parte del proceso b puede condicionarse al contexto (Siegel).",
    v: [
      "Proceso a=Reacción primaria al estímulo, rápida, estable y que desaparece enseguida",
      "Proceso b=Proceso oponente, lento y de signo contrario, que crece con la repetición",
      "Post-reacción=Reacción opuesta que aparece al terminar el estímulo",
      "Tolerancia=Necesidad de más dosis para el mismo efecto por un proceso b más fuerte",
      "Abstinencia=Malestar intenso cuando la droga desaparece y solo queda el proceso b",
      "Cambio de motivo=Consumir más para aliviar el malestar que para obtener placer",
      "Solomon y Corbit (1974)=Autores de la teoría del proceso oponente",
      "Emoción experimentada=Diferencia entre el proceso primario y el oponente"
    ],
    g: [
      "El proceso b es lento en aparecer y ___ en desaparecer.|lento|rápido|estable",
      "La emoción que se experimenta es la ___ entre los procesos a y b.|diferencia|suma|razón",
      "En los primeros saltos, el paracaidista siente terror y, al aterrizar, un alivio ___.|breve|intenso|duradero",
      "Lo que cambia con la experiencia, según Solomon y Corbit, es el proceso ___.|oponente|primario|reflejo",
      "Quien toma café a diario nota menos su efecto y sufre más el ___ los días que no lo toma.|bajón|estímulo|alivio"
    ],
    tf: [
      "Tras muchas exposiciones, la reacción neta durante el estímulo es más débil y la post-reacción, más intensa.|V",
      "El proceso b aparece rápido y desaparece rápido cuando termina el estímulo.|F|Eso describe el proceso a. El proceso b es lento en aparecer y lento en desaparecer.",
      "En la versión original de la teoría, el fortalecimiento del proceso b depende del condicionamiento al contexto.|F|En la versión original es no asociativo y depende de la repetición. El papel del contexto se mostró después.",
      "La teoría se ha aplicado al apego: la separación de una figura querida provoca una post-reacción de malestar.|V"
    ],
    q: [
      "Un consumidor habitual de una droga apenas siente ya placer y consume para aliviar el malestar. Según Solomon y Corbit, ¿qué ha ocurrido?|El proceso b se ha fortalecido|El proceso a se ha intensificado|Ambos procesos se han extinguido|Con el consumo repetido crece el proceso b, lo que explica la tolerancia, la abstinencia y el cambio de motivo.",
      "¿Cómo explica la teoría la abstinencia?|Al irse la droga queda solo b|El proceso a se vuelve negativo|El proceso b desaparece de golpe|Al desaparecer la droga, a se va enseguida y persiste b, una post-reacción intensa y desagradable.",
      "Un paracaidista veterano siente poco miedo durante el salto y una euforia larga al aterrizar. ¿Qué lo explica?|Un proceso b fortalecido|Una habituación del proceso b|Una sensibilización del proceso a|Con la experiencia, b crece: la reacción durante el estímulo se atenúa y la post-reacción es grande y duradera.",
      "¿Qué aspecto de la teoría del proceso oponente sigue en debate?|Si el fortalecimiento de b es asociativo|Si la emoción experimentada es a menos b|Si el proceso a es rápido y estable|Se discute hasta qué punto b depende de la repetición o del condicionamiento a las claves del contexto."
    ],
    inc: [
      "Sobre la teoría del proceso oponente|El proceso b se debilita con la repetición|El proceso b lo desencadena el proceso a|La emoción experimentada es a menos b|El proceso b se fortalece con la repetición, y eso explica la tolerancia y la abstinencia."
    ],
    seq: [
      "Curso de una experiencia emocional intensa|Reacción intensa al inicio del estímulo>Adaptación parcial mientras dura>Fin del estímulo>Post-reacción de signo opuesto"
    ],
    cls: [
      "Proceso de Solomon y Corbit|Proceso a: rápido; estable mientras dura el estímulo; desaparece enseguida|Proceso b: lento; signo contrario; se fortalece con la repetición"
    ] },
  { t: "Bases celulares: Kandel y Aplysia",
    tip: "Kandel estudió el reflejo de retirada del sifón y la branquia de Aplysia, un invertebrado con pocas neuronas, grandes e identificables, y recibió el Nobel en 2000. En la habituación, la neurona sensorial libera menos neurotransmisor en la sinapsis con la motora. En la sensibilización, interneuronas facilitadoras liberan serotonina y provocan una facilitación presináptica. Los cambios a largo plazo requieren síntesis de proteínas y modifican la estructura de las conexiones.",
    v: [
      "Aplysia=Babosa marina con pocas neuronas, grandes y fáciles de identificar",
      "Reflejo de retirada=Al tocar el sifón, el animal retrae el sifón y la branquia",
      "Facilitación presináptica=Más liberación de neurotransmisor por la serotonina, base de la sensibilización",
      "Interneuronas facilitadoras=Liberan serotonina sobre los terminales de las neuronas sensoriales",
      "Serotonina=Neurotransmisor que media la sensibilización del reflejo de retirada",
      "Cambio a corto plazo=Alteración de la eficacia de sinapsis ya existentes",
      "Cambio a largo plazo=Requiere síntesis de proteínas y modifica la estructura de las conexiones",
      "Eric Kandel=Premio Nobel de Medicina en 2000 por las bases celulares del aprendizaje"
    ],
    g: [
      "Kandel recibió el Premio Nobel de Medicina en ___.|2000|1904|1974",
      "En la habituación, la neurona sensorial libera ___ neurotransmisor en cada impulso.|menos|más|otro",
      "La sensibilización del reflejo de retirada se provoca con una descarga en la ___.|cola|branquia|cabeza",
      "Las interneuronas facilitadoras liberan ___ sobre los terminales sensoriales.|serotonina|dopamina|acetilcolina",
      "La habituación ocurre en la propia vía E-R, y la sensibilización depende de un sistema ___.|adicional|motor|sensorial"
    ],
    tf: [
      "En Aplysia, la habituación se debe a la fatiga de las neuronas motoras que retraen la branquia.|F|La motora sigue pudiendo responder. El cambio es una menor liberación de neurotransmisor en la sinapsis sensorial-motora.",
      "La sensibilización en Aplysia se debe a una menor liberación de neurotransmisor en la neurona sensorial.|F|Eso corresponde a la habituación. La sensibilización es una facilitación presináptica mediada por serotonina.",
      "Los hallazgos de Kandel encajan con la teoría del proceso dual.|V",
      "Los mecanismos de plasticidad sináptica de Aplysia tienen equivalentes en los mamíferos, como la potenciación a largo plazo.|V"
    ],
    q: [
      "En Aplysia, tocar suavemente el sifón una y otra vez debilita la retirada. ¿Dónde localizó Kandel el cambio?|En la sinapsis sensorial-motora|En la neurona motora de la branquia|En el receptor sensorial del sifón|La neurona sensorial libera menos neurotransmisor. La motora sigue pudiendo responder y el receptor detecta el contacto.",
      "¿Por qué eligió Kandel la Aplysia?|Pocas neuronas, grandes e identificables|Reflejos de retirada idénticos a los humanos|Un aprendizaje asociativo muy complejo|Su sistema nervioso tiene relativamente pocas neuronas, muy grandes y fáciles de identificar.",
      "¿Qué distingue los cambios a largo plazo de los de corto plazo, según Kandel?|Requieren síntesis de proteínas|Dependen solo de la serotonina|Afectan solo a la neurona motora|Los cambios a largo plazo modifican la estructura de las conexiones. Los de corto plazo alteran sinapsis ya existentes.",
      "Tras una descarga en la cola, un toque en el sifón provoca una retirada más intensa. ¿Qué mecanismo lo explica?|Facilitación presináptica por serotonina|Menor liberación de neurotransmisor|Fatiga de las interneuronas facilitadoras|Las interneuronas facilitadoras liberan serotonina y la neurona sensorial libera más neurotransmisor."
    ],
    inc: [
      "Sobre las bases celulares|La sensibilización ocurre en la propia vía E-R|La habituación cambia la eficacia de la conexión|La serotonina media la facilitación presináptica|La sensibilización depende de un sistema adicional, las interneuronas facilitadoras, que modula la vía desde fuera."
    ],
    seq: [],
    cls: [
      "Proceso en Aplysia|Habituación: toque suave repetido; menos neurotransmisor; sinapsis sensorial-motora|Sensibilización: descarga en la cola; serotonina; facilitación presináptica"
    ] }
] },
{ n: 3, t: "El condicionamiento clásico: Pavlov, Watson y los fenómenos básicos", cap: 2, pir: "media", mods: [
  { t: "Pavlov y la terminología del condicionamiento",
    tip: "Pavlov, fisiólogo, recibió el Nobel de 1904 por la digestión y convirtió las «secreciones psíquicas» en su programa. El EI provoca la RI sin aprendizaje y, tras los emparejamientos, el EC provoca la RC, parecida a la RI pero no idéntica. Los EC más documentados fueron el metrónomo, el zumbador, tonos, luces y estímulos táctiles, no la campana. La RC se mide por su magnitud, probabilidad, latencia y resistencia a la extinción, en preparaciones como el parpadeo o la supresión condicionada.",
    v: [
      "Estímulo incondicionado=Provoca una respuesta sin aprendizaje previo, como la comida en la boca",
      "Respuesta condicionada=Respuesta aprendida ante el EC, parecida a la innata pero no idéntica",
      "Estímulo condicionado=Estímulo inicialmente neutro que llega a provocar una RC",
      "Secreciones psíquicas=Salivación antes de que la comida llegara a la boca, según Pavlov",
      "Fístula=Abertura quirúrgica para recoger la saliva y contarla gota a gota",
      "Respuesta de orientación=Lo único que provoca el EC antes del condicionamiento",
      "Condicionamiento interoceptivo=El EC, el EI o ambos actúan sobre órganos internos",
      "Neurosis experimental=Alteración grave al tener que discriminar estímulos casi idénticos"
    ],
    g: [
      "Pavlov recibió el Nobel de Medicina en 1904 por sus trabajos sobre la ___.|digestión|circulación|conducta",
      "Pavlov hablaba de reflejos «___», porque dependían del emparejamiento.|condicionales|incondicionados|adquiridos",
      "Los conejos son la especie típica de la preparación de ___.|parpadeo|salivación|supresión condicionada",
      "Un condicionamiento con una descarga como EI se clasifica como ___.|aversivo|apetitivo|interoceptivo",
      "Pavlov propuso una tipología del sistema nervioso según la fuerza, el equilibrio y la ___.|movilidad|excitación|intensidad"
    ],
    tf: [
      "El estímulo característico del laboratorio de Pavlov fue una campana.|F|Es un icono divulgativo. Los EC más documentados son el metrónomo, el zumbador, tonos, luces y estímulos táctiles.",
      "La RC suele ser más débil que la RI y puede diferir en su forma.|V",
      "A veces se llama refuerzo al EI, porque sin él la RC no se forma y, si se retira, se extingue.|V",
      "Pavlov era psicólogo de formación y recibió el Nobel por sus estudios sobre los reflejos condicionados.|F|Era fisiólogo y recibió el Nobel de 1904 por la fisiología de la digestión."
    ],
    q: [
      "A un conejo se le presenta un tono seguido de un soplo de aire en el ojo y, tras varios ensayos, parpadea al oír el tono. ¿Qué es ese parpadeo ante el tono?|La respuesta condicionada|La respuesta incondicionada|El estímulo condicionado|El tono es el EC y el parpadeo que provoca por sí solo es la RC. El parpadeo ante el soplo es la RI.",
      "Antes del condicionamiento, ¿qué provoca el sonido del metrónomo?|Una respuesta de orientación|Una salivación débil y breve|Ninguna respuesta medible|Antes de los emparejamientos, el EC solo provoca una respuesta de orientación.",
      "¿Qué medida de la RC indica cuánto tarda en aparecer tras el EC?|La latencia|La magnitud|La probabilidad|La magnitud es cuánta respuesta hay, y la probabilidad, en qué porcentaje de ensayos aparece.",
      "Un perro se altera gravemente al discriminar un círculo de una elipse casi igual. ¿Cómo lo explicó Pavlov?|Choque entre excitación e inhibición|Generalización excesiva del EC|Extinción de la respuesta condicionada|Lo llamó neurosis experimental y lo atribuyó a un choque entre excitación e inhibición."
    ],
    inc: [
      "Sobre la terminología pavloviana|La RC es idéntica a la RI|«Condicional» y «condicionado» se usan como sinónimos|El EC es inicialmente neutro para esa respuesta|La RC se parece a la RI, pero suele ser más débil y puede diferir en su forma."
    ],
    seq: [],
    cls: [
      "Estímulo en el laboratorio de Pavlov|EI: comida en la boca; ácido en la boca|EC: metrónomo; zumbador; luces; estímulos táctiles"
    ] },
  { t: "Watson y Rayner: el caso del pequeño Albert",
    tip: "Watson y Rayner (1920) condicionaron a Albert, de unos 11 meses, emparejando una rata blanca con el ruido fuerte de una barra de acero. Se cita como prueba de que el miedo se aprende y se generaliza, pero las respuestas no fueron uniformes, hubo que volver a emparejar y no hubo grupo control. Albert nunca fue descondicionado. Su identidad se disputa entre Douglas Merritte y William Albert Barger, con más apoyo actual a Barger. Mary Cover Jones (1924) trató después el miedo de Peter.",
    v: [
      "Pequeño Albert=Niño estudiado por Watson y Rayner en 1920 para condicionar un miedo",
      "Rosalie Rayner=Colaboradora de Watson en el estudio de 1920",
      "Ruido de la barra=EI del estudio, producido al golpear acero con un martillo",
      "Douglas Merritte=Candidato de Beck, Levinson e Irons (2009), muerto a los 6 años de hidrocefalia",
      "William Albert Barger=Candidato de Powell et al. (2014), hoy con más apoyo, muerto en 2007",
      "Mary Cover Jones=Trató en 1924 el miedo de Peter a los conejos mientras comía",
      "Fridlund et al. (2012)=Sugirieron que el niño quizá ya tenía problemas neurológicos",
      "Respuesta emocional condicionada=Propuesta de Watson y Rayner para explicar muchas fobias"
    ],
    g: [
      "En la prueba inicial, con unos ___ meses, Albert no mostraba miedo ante la rata blanca.|9|11|6",
      "El condicionamiento se realizó cuando Albert tenía unos ___ meses.|11|9|14",
      "Albert salió del estudio porque su ___ se lo llevó del hospital.|madre|médico|padre",
      "El tratamiento de Peter por Mary Cover Jones es un antecedente directo de la desensibilización ___.|sistemática|encubierta|progresiva",
      "Digdon, Powell y Harris (2014) rebatieron la hipótesis del ___ neurológico.|deterioro|desarrollo|tratamiento"
    ],
    tf: [
      "Las respuestas de Albert ante los estímulos de prueba fueron uniformes en todas las sesiones.|F|Fueron inconsistentes, y en algunas sesiones hubo que volver a emparejar la rata con el ruido.",
      "Albert fue descondicionado al final del estudio por Watson y Rayner.|F|La madre se lo llevó antes de cualquier intento de eliminar el miedo: nunca se descondicionó.",
      "El estudio se hizo con un solo niño, sin grupo control y con medidas descriptivas.|V",
      "Entre los estímulos de las pruebas posteriores había un conejo, un perro, un abrigo de piel y algodón.|V"
    ],
    q: [
      "En clase, un compañero afirma que el pequeño Albert generalizó su miedo a todo lo peludo y después fue descondicionado. ¿Qué corrección es la adecuada?|Sus respuestas variaron y no se descondicionó|Generalizó a todo, pero no se descondicionó|Se descondicionó, pero sin generalizar|Según el propio artículo, las respuestas fueron inconsistentes, y la madre lo retiró antes de eliminar el miedo.",
      "En el estudio de Albert, ¿qué papel tenía la rata blanca tras el condicionamiento?|Estímulo condicionado|Estímulo incondicionado|Respuesta condicionada|La rata, inicialmente neutra, provocaba llanto y retirada tras emparejarse con el ruido, que era el EI.",
      "¿Qué candidato a ser Albert tiene hoy más apoyo?|William Albert Barger|Douglas Merritte|Peter, el de Jones|Su nombre, su peso y el trabajo de su madre en el hospital encajan (Powell et al., 2014). La disputa sigue abierta.",
      "¿Qué estudio documenta el primer descondicionamiento de este tipo?|El de Peter, de Mary Cover Jones|El de Albert, de Watson y Rayner|El de Hans, de Pfungst|Jones (1924) acercó poco a poco un conejo a Peter mientras comía algo que le gustaba."
    ],
    inc: [
      "Sobre el estudio de Watson y Rayner|Fue una prueba concluyente con grupo control|Hoy sería inaceptable por razones éticas|Se probó al niño en otra habitación|Es una demostración histórica: un solo niño, sin grupo control y con medidas descriptivas."
    ],
    seq: [
      "Fases del estudio de Watson y Rayner (1920)|Prueba inicial sin miedo>Condicionamiento con la rata y el ruido>Pruebas de generalización y de cambio de habitación>Salida del hospital sin descondicionamiento"
    ],
    cls: [
      "Propuesta sobre la identidad de Albert|Douglas Merritte: Beck, Levinson e Irons (2009); hidrocefalia; murió en 1925|William Albert Barger: Powell et al. (2014); más apoyo actual; murió en 2007"
    ] },
  { t: "Adquisición, extinción, generalización y discriminación",
    tip: "La adquisición sigue una curva negativamente acelerada hasta una asíntota. La extinción es presentar el EC sin el EI y el descenso de la RC que produce, pero no borra lo aprendido: lo muestran la recuperación espontánea y el efecto de ahorro en la readquisición. La generalización produce un gradiente según la semejanza con el EC, y la discriminación se entrena con reforzamiento diferencial entre un EC+ y un EC−.",
    v: [
      "Curva negativamente acelerada=Grandes incrementos al principio y cada vez menores hasta la asíntota",
      "Asíntota=Nivel máximo al que tiende la RC durante la adquisición",
      "Extinción=Presentar el EC sin el EI, con el consiguiente descenso de la RC",
      "Readquisición=Volver a emparejar un EC extinguido, con una RC más rápida que la primera vez",
      "Efecto de ahorro=Aprender de nuevo más deprisa porque algo de lo aprendido persiste",
      "Gradiente de generalización=Descenso de la RC a medida que los estímulos se alejan del EC original",
      "Reforzamiento diferencial=Emparejar un EC+ con el EI y presentar un EC− sin él",
      "EC−=En una discriminación, el estímulo que se presenta sin el EI"
    ],
    g: [
      "La curva de adquisición de la RC es ___ acelerada.|negativamente|positivamente|linealmente",
      "Tras un descanso después de la extinción, la RC reaparece, aunque más ___ que al final de la adquisición.|débil|intensa|rápida",
      "Hoy la extinción se entiende como un nuevo aprendizaje, no como un ___.|desaprendizaje|reaprendizaje|condicionamiento",
      "Que un perro distinga las llaves de su dueña de las de un vecino es un caso de ___.|discriminación|generalización|extinción",
      "El ritmo de la extinción depende, entre otros factores, de la fuerza de la RC y del ___ entre presentaciones.|intervalo|número|orden"
    ],
    tf: [
      "La extinción borra la asociación aprendida entre el EC y el EI.|F|Reduce la RC sin borrar lo aprendido: lo muestran la recuperación espontánea y el ahorro en la readquisición.",
      "Una generalización demasiado amplia resulta costosa, porque se responde ante estímulos que no anuncian nada.|V",
      "La recuperación espontánea devuelve la RC con la misma fuerza que al final de la adquisición.|F|La RC reaparece, pero más débil que al final de la adquisición.",
      "La forma de la curva de adquisición es la que predice el modelo de Rescorla-Wagner.|V"
    ],
    q: [
      "Tras una mala experiencia con un perro grande y negro, Lucía se sobresalta con cualquier perro grande, algo menos con uno mediano y apenas con uno pequeño y blanco. ¿Qué describe?|Un gradiente de generalización|Un entrenamiento discriminativo|Una recuperación espontánea|La RC es más fuerte cuanto más se parece el estímulo al EC original.",
      "Un EC extinguido se vuelve a emparejar con el EI y la RC aparece más deprisa que la primera vez. ¿Qué indica?|Que la extinción no borró lo aprendido|Que el EC se ha vuelto inhibidor|Que la RC era una respuesta de fatiga|Es un efecto de ahorro: algo de lo aprendido sigue ahí.",
      "¿Cómo se entrena una discriminación?|Emparejando un EC+ y no un EC−|Presentando el EC sin el EI|Emparejando estímulos parecidos|Con reforzamiento diferencial, la RC acaba apareciendo ante el EC+ y no ante el EC−.",
      "¿Qué sentido adaptativo tiene la generalización?|Una señal de peligro nunca se repite igual|Evita responder a estímulos irrelevantes|Hace que la RC se extinga antes|Responder a las variantes de una señal protege. Evitar respuestas irrelevantes es función de la discriminación."
    ],
    inc: [
      "Sobre la extinción|Borra la asociación aprendida|Es un procedimiento y también su resultado|Su ritmo depende de la fuerza de la RC|No borra lo aprendido: se entiende como un nuevo aprendizaje que se superpone al original."
    ],
    seq: [
      "Curso de la RC en la figura 3.2|Adquisición>Extinción>Recuperación espontánea>Readquisición"
    ],
    cls: [
      "Proceso|Generalización: gradiente; estímulos parecidos; sobresalto ante cualquier perro grande|Discriminación: EC+ y EC−; reforzamiento diferencial; llaves de la dueña"
    ] },
  { t: "Relaciones temporales, orden superior, precondicionamiento sensorial y controles",
    tip: "Lo que se aprende depende de cuándo se presentan el EC y el EI. La eficacia aproximada decrece del demorado al de huella, al simultáneo y al hacia atrás, que puede volver inhibidor al EC, aunque el intervalo óptimo depende de la preparación. En el segundo orden, un EC1 ya condicionado actúa como EI para un EC2. En el precondicionamiento sensorial, dos estímulos neutros se asocian antes de condicionar uno. El control verdaderamente aleatorio (Rescorla, 1967) es preferible al desapareado explícito.",
    v: [
      "Condicionamiento demorado=El EC empieza antes que el EI y se solapa con él",
      "Condicionamiento de huella=El EC termina antes del EI y entre ambos queda un intervalo vacío",
      "Condicionamiento simultáneo=EC y EI empiezan a la vez, de modo que el EC no anticipa nada",
      "Condicionamiento hacia atrás=El EI precede al EC, que puede volverse inhibidor",
      "Condicionamiento temporal=EI a intervalos fijos sin EC explícito, de modo que el tiempo actúa como señal",
      "Segundo orden=Un EC ya condicionado actúa como EI para otro estímulo",
      "Precondicionamiento sensorial=Asociación previa entre estímulos neutros que se revela tras condicionar uno",
      "Condicionamiento observacional=Adquirir una RC al ver a otro recibir el EI"
    ],
    g: [
      "El condicionamiento de huella funciona peor a medida que se ___ el intervalo de huella.|alarga|acorta|repite",
      "El intervalo óptimo es muy breve en el parpadeo y puede ser de ___ en la aversión al sabor.|horas|segundos|milisegundos",
      "En el condicionamiento hacia atrás, el EC puede volverse ___ porque señala que el EI ya ha pasado.|inhibidor|excitador|neutro",
      "Sentir inquietud al ver el cartel de la calle de la clínica dental ilustra un condicionamiento de ___.|segundo orden|tipo temporal|tipo simultáneo",
      "El control ___ explícito presenta EC y EI el mismo número de veces, pero nunca juntos.|desapareado|aleatorio|demorado"
    ],
    tf: [
      "El condicionamiento simultáneo suele ser más eficaz que el de huella, porque EC y EI coinciden.|F|Es débil porque el EC no anticipa nada. El orden aproximado es demorado, huella, simultáneo y hacia atrás.",
      "El segundo orden y el precondicionamiento sensorial solo se diferencian en el orden de las fases.|V",
      "En el precondicionamiento sensorial, el EC1 ya tiene valor biológico cuando se asocia con el EC2.|F|Eso ocurre en el segundo orden. En el precondicionamiento, los dos estímulos se asocian cuando aún son neutros.",
      "En el condicionamiento temporal, la RC aparece justo antes de cada EI.|V"
    ],
    q: [
      "Primero se empareja un tono con comida y después una luz con el tono, sin comida. Al final, la luz provoca salivación. ¿Qué procedimiento es?|Condicionamiento de segundo orden|Precondicionamiento sensorial|Condicionamiento hacia atrás|El tono ya tenía valor cuando se asoció con la luz. En el precondicionamiento, el orden de las fases es el inverso.",
      "En un experimento de parpadeo, un tono suena y se apaga, y medio segundo después llega el soplo de aire. ¿Qué relación temporal es?|De huella|Demorada|Simultánea|El EC termina antes del EI y queda un intervalo vacío entre ambos.",
      "¿Qué problema tiene el control desapareado explícito?|El EC puede volverse inhibidor|No permite descartar la sensibilización|Presenta los estímulos al azar|El EC pasa a señalar la ausencia del EI. Por eso el verdaderamente aleatorio es el control más adecuado.",
      "¿Qué relación temporal suele producir el condicionamiento menos eficaz?|Hacia atrás|Simultánea|De huella|El EI precede al EC, lo que produce poca excitación e incluso puede producir inhibición."
    ],
    inc: [
      "Sobre las relaciones temporales|El simultáneo es el más eficaz|El hacia atrás puede crear inhibición|El óptimo varía con la preparación|El más eficaz suele ser el demorado. El simultáneo produce un condicionamiento débil porque el EC no anticipa nada."
    ],
    seq: [
      "Relaciones temporales de mayor a menor eficacia|Demorado>De huella>Simultáneo>Hacia atrás"
    ],
    cls: [
      "Relación temporal|Demorado: el EC empieza antes y se solapa; el más eficaz|De huella: el EC termina antes del EI; intervalo vacío|Hacia atrás: el EI precede al EC; posible inhibición"
    ] }
] },
{ n: 4, t: "Qué se aprende y cuándo: contingencia, competición entre claves e inhibición", cap: 2, pir: "alta", mods: [
  { t: "Contingencia frente a contigüidad",
    tip: "Rescorla (1968) dio a todos los grupos el mismo número de emparejamientos tono-descarga y varió la probabilidad de descarga sin el tono. Si era igual con y sin tono, apenas había condicionamiento. Lo que importa es la contingencia, ΔP: la probabilidad del EI con el EC menos su probabilidad sin él. Un ΔP positivo produce excitación, y uno negativo, inhibición. Según Rescorla y Wagner, el contexto compite con el EC, sin que el animal calcule probabilidades.",
    v: [
      "Contigüidad=Proximidad temporal entre el EC y el EI",
      "Contingencia=Grado en que la presencia del EC cambia la probabilidad del EI",
      "ΔP=Probabilidad del EI con el EC menos su probabilidad sin el EC",
      "ΔP positivo=El EI es más probable con el EC, lo que da condicionamiento excitatorio",
      "ΔP nulo=El EI es igual de probable con y sin EC, y apenas hay condicionamiento",
      "ΔP negativo=El EI es menos probable con el EC, lo que da condicionamiento inhibitorio",
      "Espacio de contingencia=Gráfico que cruza la probabilidad del EI con y sin el EC",
      "Contexto experimental=La caja, presente en todos los ensayos, que compite con el EC"
    ],
    g: [
      "En el experimento de Rescorla (1968), todos los grupos recibían el mismo número de ___ tono-descarga.|emparejamientos|ensayos de prueba|presentaciones aisladas",
      "Las descargas que llegan sin el tono se asocian con el ___.|contexto|tono|animal",
      "En el espacio de contingencia, la diagonal corresponde a un ΔP ___.|nulo|positivo|negativo",
      "El control desapareado explícito crea una contingencia ___.|negativa|nula|positiva",
      "El condicionamiento clásico pasa a entenderse como aprendizaje de relaciones ___.|predictivas|temporales|espaciales"
    ],
    tf: [
      "Si la descarga es igual de probable con y sin el tono, el tono se convierte en un inhibidor condicionado.|F|Con ΔP nulo apenas hay condicionamiento. La inhibición aparece cuando el EI es menos probable con el EC.",
      "Para explicar los efectos de contingencia, el modelo de Rescorla-Wagner supone que el animal calcula ΔP.|F|Los explica ensayo a ensayo por la competición del contexto con el EC, sin suponer que el animal compute ΔP.",
      "Añadir descargas sin el tono reduce el condicionamiento aunque los emparejamientos sean los mismos.|V",
      "El control desapareado explícito exagera la diferencia con el grupo experimental.|V"
    ],
    q: [
      "El móvil de Ana suena con un aviso especial cuando le escribe su jefa, pero también con cada promoción del supermercado, y acaba ignorándolo. ¿Qué ha cambiado?|La contingencia del aviso|El número de emparejamientos|La contigüidad del aviso|Los emparejamientos con los mensajes de la jefa son los mismos, pero el sonido ya no informa sobre ellos.",
      "En un grupo, la probabilidad de descarga es de 0,4 con el tono y de 0,4 sin él. ¿Qué cabe esperar?|Apenas condicionamiento|Excitación moderada|Inhibición condicionada|Con ΔP igual a cero el tono no aporta información sobre la descarga, aunque haya emparejamientos.",
      "La descarga aparece en el 20 % de los ensayos con tono y en el 60 % de los periodos sin tono. ¿Qué se espera?|Condicionamiento inhibitorio|Condicionamiento excitatorio|Ausencia de condicionamiento|ΔP es negativo: el EI es menos probable con el EC, que pasa a señalar su ausencia.",
      "¿Cómo explica el modelo de Rescorla y Wagner (1972) los efectos de contingencia?|El contexto compite con el EC|El animal computa el valor de ΔP|El EC pierde atención con el tiempo|Las descargas sin tono condicionan el contexto, que resta valor predictivo al tono, ensayo a ensayo."
    ],
    inc: [
      "Sobre la contingencia|Basta la contigüidad para condicionar|El ΔP negativo produce inhibición|El contexto puede competir con el EC|La contigüidad no basta: con los mismos emparejamientos, el condicionamiento depende de la contingencia."
    ],
    seq: [],
    cls: [
      "Valor de ΔP|Positivo: EI más probable con el EC; excitación|Cero: EI igual de probable; apenas condicionamiento|Negativo: EI menos probable con el EC; inhibición"
    ] },
  { t: "Bloqueo, ensombrecimiento y sobreexpectativa",
    tip: "En el bloqueo (Kamin, 1968), un estímulo entrenado antes impide que otro añadido después en compuesto adquiera fuerza, porque el EI ya no sorprende. En el ensombrecimiento no hay entrenamiento previo: el elemento más saliente del compuesto se lleva el condicionamiento. En la sobreexpectativa, dos EC condicionados por separado pierden fuerza al reforzarse juntos con el mismo EI, una predicción de Rescorla-Wagner. El bloqueo es hoy un efecto clásico en revisión (Maes et al., 2016).",
    v: [
      "Bloqueo=Un EC ya condicionado impide que otro añadido después adquiera fuerza",
      "Ensombrecimiento=En un compuesto, el estímulo más saliente se condiciona más que el menos saliente",
      "Sobreexpectativa=Dos EC condicionados por separado pierden fuerza al reforzarse juntos",
      "Error de predicción=Sorpresa ante un EI no anticipado, que impulsa nuevo aprendizaje",
      "Saliencia=Grado en que un estímulo destaca y se impone dentro de un compuesto",
      "Maes et al. (2016)=Informaron de 15 fracasos de replicación del bloqueo en roedores",
      "Soto (2018)=Los fracasos de replicación informan de las condiciones del efecto",
      "Hipótesis del comparador=Sitúa el déficit de la competición entre claves en la ejecución"
    ],
    g: [
      "En el grupo de bloqueo, la razón de supresión ante la luz se acerca a ___.|0,5|0|0,25",
      "El ensombrecimiento fue descrito ya por ___.|Pavlov|Kamin|Rescorla",
      "Maes et al. (2016) informaron de ___ fracasos de replicación del bloqueo en roedores.|15|5|50",
      "Kamin interpretó que el EI no era ___, porque ya estaba predicho por el ruido.|sorprendente|intenso|contiguo",
      "En la sobreexpectativa, el error de predicción en los ensayos con el compuesto es ___.|negativo|positivo|nulo"
    ],
    tf: [
      "El bloqueo requiere entrenar antes uno de los elementos del compuesto.|V",
      "En el ensombrecimiento, el estímulo perjudicado es el que se añade después.|F|Eso define el bloqueo. En el ensombrecimiento, el compuesto se entrena desde el principio y sale perjudicado el menos saliente.",
      "La sobreexpectativa fue una predicción del modelo de Rescorla-Wagner antes de comprobarse.|V",
      "Los fracasos de replicación de Maes et al. (2016) han demostrado que el bloqueo no existe.|F|Es un efecto clásico en revisión: Soto (2018) entiende que esos fracasos informan de sus condiciones."
    ],
    q: [
      "Elena sabe que el olor a quemado anuncia que se pasa la comida. Su horno nuevo empieza a pitar a la vez que llega el olor, y ella apenas atiende al pitido. ¿Qué fenómeno es?|Bloqueo|Ensombrecimiento|Sobreexpectativa|El olor ya predecía el resultado, así que el pitido añadido apenas adquiere valor.",
      "Una luz tenue y un tono fuerte anuncian juntos la comida desde el primer ensayo, y el tono se lleva casi todo el condicionamiento. ¿Qué fenómeno es?|Ensombrecimiento|Bloqueo|Inhibición latente|Sin entrenamiento previo, decide la saliencia: el elemento más saliente se condiciona más.",
      "A y B se condicionan por separado hasta su máximo y luego se refuerzan juntos con el mismo EI. ¿Qué ocurre?|Ambos pierden fuerza|Ambos ganan fuerza|A bloquea a B|La expectativa sumada supera lo que el EI puede sostener y el error de predicción es negativo.",
      "¿Por qué sitúa la hipótesis del comparador el bloqueo en la ejecución?|Extinguir el bloqueador recupera la respuesta|El bloqueo no se replica en roedores|El estímulo bloqueado recibe poca atención|En algunas preparaciones, extinguir el estímulo que bloquea recupera la respuesta al estímulo perjudicado."
    ],
    inc: [
      "Sobre el bloqueo|Es más general de lo que dicen los manuales|Kamin lo descubrió con la supresión condicionada|Se explica por la falta de sorpresa del EI|Su generalidad es menor de lo que sugieren los manuales: es un efecto clásico en revisión."
    ],
    seq: [
      "Diseño de bloqueo de Kamin|Ruido seguido de descarga>Ruido y luz seguidos de descarga>Prueba con la luz sola>Razón de supresión cercana a 0,5"
    ],
    cls: [
      "Competición entre claves|Bloqueo: entrenamiento previo de A; EI ya predicho; perjudica al añadido después|Ensombrecimiento: compuesto desde el principio; saliencia; perjudica al menos saliente"
    ] },
  { t: "Inhibición latente y preexposición al EI",
    tip: "La inhibición latente (Lubow y Moore, 1959) es el retraso del condicionamiento de un estímulo preexpuesto sin consecuencias. Es específica del estímulo y del contexto. No es inhibición condicionada: el estímulo no supera la prueba de sumación y también tarda más en volverse inhibidor, porque se aprende peor sobre él. Rescorla-Wagner no la explica, pero sí Pearce-Hall y el SOP de Wagner. La preexposición al EI también retrasa el condicionamiento, quizá porque el contexto bloquea al EC.",
    v: [
      "Inhibición latente=Retraso del condicionamiento de un EC tras su preexposición sin consecuencias",
      "Lubow y Moore (1959)=Describieron el retraso del condicionamiento de un estímulo preexpuesto",
      "Preexposición al EI=Presentar solo el EI antes del condicionamiento, lo que lo retrasa",
      "Especificidad contextual=El efecto se reduce si la preexposición y el condicionamiento ocurren en sitios distintos",
      "Pearce-Hall=Modelo en que el estímulo sin consecuencias pierde atención y se asocia despacio",
      "SOP de Wagner=Modelo en que el estímulo esperado en el contexto se procesa menos",
      "Saliencia del EC=Intensidad del estímulo, que acelera la adquisición",
      "Relevancia=Ajuste de la combinación concreta de EC y EI que facilita el condicionamiento"
    ],
    g: [
      "La inhibición latente es específica del estímulo y del ___.|contexto|EI|organismo",
      "En la aversión al sabor, un alimento habitual tiende a condicionarse ___ que uno novedoso.|menos|más|igual",
      "Según Rescorla-Wagner, durante la preexposición el máximo de condicionamiento es ___.|cero|negativo|positivo",
      "La relevancia de la combinación EC-EI la mostraron Garcia y Koelling en ___.|1966|1959|1968",
      "Según una explicación, en la preexposición al EI el contexto se asocia con el EI y después ___ al EC.|bloquea|ensombrece|inhibe"
    ],
    tf: [
      "Un estímulo preexpuesto reduce la respuesta ante un excitador en la prueba de sumación.|F|No la reduce: el estímulo preexpuesto no es un inhibidor, simplemente se aprende peor sobre él.",
      "El modelo de Rescorla-Wagner predice la inhibición latente.|F|No la predice: sin EI y sin fuerza previa, el estímulo no cambia durante la preexposición.",
      "Un estímulo preexpuesto también tarda más en convertirse en inhibidor si se intenta.|V",
      "Preexponer un tono retrasa el condicionamiento de ese tono, pero no el de una luz.|V"
    ],
    q: [
      "Una investigadora quiere usar como señal de un aviso importante el pitido del microondas, oído cientos de veces sin consecuencias. ¿Qué cabe esperar?|Que se condicione más despacio|Que se condicione más deprisa|Que actúe como inhibidor|Es la inhibición latente: lo familiar e intrascendente cuesta más de convertir en señal que lo nuevo.",
      "¿Qué modelo explica la inhibición latente porque el estímulo sin consecuencias pierde atención?|Pearce-Hall|Rescorla-Wagner|SOP de Wagner|El SOP de Wagner apela a que el estímulo esperado se procesa menos, y Rescorla-Wagner no la predice.",
      "Se preexpone un tono en una caja y se condiciona en otra distinta. ¿Qué ocurre con la inhibición latente?|Se reduce|Se intensifica|No cambia|La inhibición latente es específica del contexto: si el contexto cambia entre las fases, el efecto se reduce.",
      "¿Por qué no se considera inhibidor al estímulo preexpuesto?|No señala la ausencia de un EI|Supera la prueba de sumación|Se condiciona más deprisa|Durante la preexposición no se esperaba ningún EI, así que el estímulo no puede señalar su ausencia."
    ],
    inc: [
      "Sobre la inhibición latente|Es un tipo de inhibición condicionada|Retrasa el condicionamiento posterior|Aparece en muchas especies|El nombre induce a error: el estímulo preexpuesto no es un inhibidor, solo se aprende peor sobre él."
    ],
    seq: [],
    cls: [
      "Efecto de la preexposición|Inhibición latente: preexposición del EC; Lubow y Moore (1959); pérdida de atención|Preexposición al EI: EI presentado solo; el contexto bloquea al EC"
    ] },
  { t: "Condicionamiento inhibitorio: procedimientos y pruebas de sumación y retraso",
    tip: "Un inhibidor condicionado señala que un EI esperado no va a llegar, así que hace falta una expectativa del EI. Se crea con la inhibición condicionada pavloviana (A+ / AX−), la discriminación, la contingencia negativa y, a veces, el condicionamiento hacia atrás o el control desapareado. Rescorla (1969) propuso las pruebas de sumación y retraso, y hacen falta las dos. Extinguir un inhibidor no lo debilita (Zimmer-Hart y Rescorla, 1974). Explica las señales de seguridad.",
    v: [
      "Inhibidor condicionado=EC que señala la ausencia de un EI esperado",
      "Expectativa del EI=Condición necesaria para que un estímulo se vuelva inhibidor",
      "A+ / AX−=Procedimiento pavloviano en que X junto a A anuncia que el EI no llega",
      "Prueba de sumación=X reduce la RC ante un excitador distinto si es un inhibidor",
      "Prueba de retraso=X tarda más que un estímulo neutro en volverse excitador",
      "Señal de seguridad=Estímulo que reduce el miedo porque anuncia que el peligro no llegará",
      "Zimmer-Hart y Rescorla (1974)=Mostraron que extinguir un inhibidor no lo debilita",
      "Contingencia negativa=El EI aparece en el contexto, pero nunca cerca del EC"
    ],
    g: [
      "Las pruebas de sumación y retraso las propuso Rescorla en ___.|1969|1967|1974",
      "Un estímulo nuevo y llamativo puede reducir la RC en la sumación por simple ___.|distracción|inhibición|extinción",
      "Un estímulo preexpuesto puede superar la prueba de ___ sin ser inhibidor.|retraso|sumación|extinción",
      "En el modelo de Rescorla-Wagner, un inhibidor tiene una fuerza asociativa ___.|negativa|nula|positiva",
      "Sin un contexto ___ no hay nada que inhibir.|excitatorio|inhibitorio|neutro"
    ],
    tf: [
      "Un estímulo solo se vuelve inhibidor si aparece en una situación en la que, sin él, el EI sería probable.|V",
      "Superar la prueba de retraso basta para concluir que un estímulo es un inhibidor condicionado.|F|Cada prueba admite otra explicación, en la de retraso, la falta de atención. Hacen falta sumación y retraso.",
      "Según Zimmer-Hart y Rescorla (1974), presentar solo un inhibidor lo devuelve a cero, como predice Rescorla-Wagner.|F|Extinguir un inhibidor no lo debilita, en contra de lo que se seguiría del modelo.",
      "La extinción tiene un componente inhibitorio, porque el EC pasa a señalar la ausencia del EI.|V"
    ],
    q: [
      "Un perro sale a pasear cuando su dueño coge la correa, salvo si la coge vestido con el traje del trabajo. ¿Qué papel acaba teniendo el traje?|Inhibidor condicionado|Excitador de segundo orden|Estímulo preexpuesto|Es el procedimiento A+ / AX−: la correa anuncia paseo y, con el traje, el paseo no llega.",
      "En la prueba de sumación, ¿qué resultado indica que X es un inhibidor?|Menos RC con X que con el excitador solo|Más RC con X que con el excitador solo|Retraso de X al emparejarlo con el EI|Si X es inhibidor, al presentarlo junto con un excitador distinto la RC disminuye respecto al excitador solo.",
      "¿Qué explicación alternativa deja abierta la prueba de retraso por sí sola?|Que X reciba poca atención|Que X distraiga la atención|Que X sea un excitador|Un estímulo con poca atención, como en la inhibición latente, también tarda en condicionarse sin ser inhibidor.",
      "El EI aparece en el contexto, pero nunca cerca del EC. ¿Qué procedimiento es?|Contingencia negativa|Control verdaderamente aleatorio|Preexposición al EC|El contexto actúa como excitador y el EC, como señal de seguridad. En el control aleatorio, EC y EI se presentan al azar."
    ],
    inc: [
      "Sobre el condicionamiento inhibitorio|Basta una de las pruebas de Rescorla|Ayuda a explicar las señales de seguridad|Requiere que se espere el EI|Cada prueba aislada admite otra explicación, como la distracción o la falta de atención. Hacen falta las dos."
    ],
    seq: [],
    cls: [
      "Prueba de Rescorla (1969)|Sumación: X junto a un excitador distinto; menos RC; alternativa de distracción|Retraso: emparejar X con el EI; tarda más en ser excitador; alternativa de poca atención"
    ] }
] }
);

// SAIMAP Psicología · Aprendizaje · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Modelos teóricos del condicionamiento clásico", cap: 2, pir: "alta", mods: [
  { t: "El modelo de Rescorla-Wagner",
    tip: "Rescorla y Wagner (1972) convirtieron en regla matemática la idea de que solo se aprende lo que sorprende: en cada ensayo, el cambio de fuerza asociativa depende del error de predicción (λ − ΣV), ponderado por α y β. De la regla se derivan la adquisición, la extinción, el bloqueo, el ensombrecimiento, la sobreexpectativa y la inhibición condicionada. No explica la inhibición latente, la extinción de un inhibidor, la recuperación espontánea, la renovación ni la revaluación retrospectiva.",
    v: [
      "Error de predicción=Diferencia entre el EI que ocurre y el que anuncian los estímulos presentes",
      "Fuerza asociativa (V)=Grado en que un EC predice el EI. Si es negativa, el EC es un inhibidor",
      "Parámetro α=Saliencia del EC, que fija la velocidad con que se aprende sobre él",
      "Parámetro β=Valor ligado al EI que también influye en la velocidad de aprendizaje",
      "Lambda (λ)=Máximo condicionamiento que puede sostener el EI, nulo si no hay EI",
      "ΣV=Suma de las fuerzas asociativas de todos los estímulos presentes en el ensayo",
      "Sobreexpectativa=Pérdida de fuerza de dos EC entrenados por separado al presentarse juntos con el EI",
      "Regla delta=Regla de Widrow-Hoff del conexionismo, formalmente equivalente al modelo"
    ],
    g: [
      "Al inicio de la adquisición ΣV vale 0, el error es grande y V crece ___.|deprisa|despacio|linealmente",
      "En los ensayos de extinción, λ vale ___ y el error de predicción es negativo.|0|1|ΣV",
      "En un compuesto, el estímulo con mayor ___ se queda con la mayor parte de λ.|saliencia|latencia|contingencia",
      "El error de predicción tiene un correlato en la actividad de las neuronas ___.|dopaminérgicas|serotoninérgicas|colinérgicas",
      "Que presentar un inhibidor solo no le quite su capacidad inhibitoria lo mostraron Zimmer-Hart y ___ (1974).|Rescorla|Wagner|Kamin"
    ],
    tf: [
      "Según el modelo, en la sobreexpectativa los dos EC pierden fuerza aunque sigan emparejándose con el EI.|V",
      "El modelo de Rescorla-Wagner explica la inhibición latente porque el EC preexpuesto adquiere un V negativo.|F|Con V y λ nulos el error es 0 y nada cambia. La inhibición latente queda fuera del modelo.",
      "El modelo trata el contexto como un estímulo más, que puede acumular fuerza y bloquear al EC.|V",
      "Según Rescorla-Wagner, la extinción deja intacta la asociación original y añade un aprendizaje nuevo.|F|Para el modelo, extinguir es desaprender: V baja. Por eso no explica la recuperación espontánea ni la renovación."
    ],
    q: [
      "Una rata aprende que un tono predice una descarga. Después recibe el tono junto con una luz, seguidos de la misma descarga. Según Rescorla-Wagner, ¿qué aprende la luz?|Casi nada, porque no queda error|Mucho, por ser un estímulo nuevo|Un valor negativo, como inhibidor|En los ensayos con el compuesto ΣV ya está cerca de λ, no hay error de predicción y la luz apenas gana fuerza: es el bloqueo.",
      "En la ecuación de Rescorla-Wagner, ¿qué representa el término λ − ΣV?|El error de predicción|La saliencia del EC|El máximo que sostiene el EI|Es la diferencia entre lo que ocurre y lo anunciado. α es la saliencia del EC, y λ, el máximo que sostiene el EI.",
      "A predice el EI, y el compuesto AX se presenta sin EI. ¿Qué predice el modelo para X?|V negativo, como inhibidor|V positivo, como excitador|V nulo, sin ningún cambio|El error negativo empuja a X por debajo de cero, y un V negativo define a un inhibidor condicionado.",
      "¿Cuál de estos fenómenos queda fuera del modelo de Rescorla-Wagner?|La renovación|La sobreexpectativa|El ensombrecimiento|Si la extinción fuera desaprender, la RC no volvería al cambiar de contexto. Los otros dos se derivan de la regla."
    ],
    inc: [
      "Sobre el modelo de Rescorla-Wagner|Actualiza también estímulos ausentes|Deriva la sobreexpectativa sin añadidos|Trata el contexto como un estímulo más|Solo actualiza los estímulos presentes, así que no explica la revaluación retrospectiva (desbloqueo hacia atrás)."
    ],
    seq: [],
    cls: [
      "Fenómeno según Rescorla-Wagner|Lo explica: adquisición; bloqueo; ensombrecimiento; sobreexpectativa; inhibición condicionada|No lo explica: inhibición latente; recuperación espontánea; renovación; extinción de un inhibidor"
    ] },
  { t: "Modelos atencionales: Mackintosh y Pearce-Hall",
    tip: "Los modelos atencionales convierten en variable la saliencia α, que Rescorla y Wagner trataban como fija. Para Mackintosh (1975), la atención aumenta para el mejor predictor del EI y disminuye para los peores. Para Pearce y Hall (1980), aumenta para los estímulos de consecuencias inciertas y cae cuando ya se sabe lo que anuncian. Ambos tienen apoyo, y una forma de reconciliarlos es suponer dos tipos de atención.",
    v: [
      "Modelo de Mackintosh=La atención crece para el mejor predictor del EI y baja para los peores (1975)",
      "Modelo de Pearce-Hall=La atención crece para los estímulos de consecuencias inciertas (1980)",
      "Saliencia variable=Supuesto atencional de que α cambia con la experiencia",
      "Saliencia fija=Supuesto de Rescorla y Wagner sobre α que los modelos atencionales rechazan",
      "Desbloqueo=X aprende si en la fase AX se cambia algo del EI, como su intensidad",
      "Primer ensayo del compuesto=Momento en que, según Mackintosh, X todavía puede aprender algo",
      "Dos tipos de atención=Propuesta que combina explotar las claves útiles y explorar las inciertas",
      "Inhibición latente=Retraso del condicionamiento de un EC preexpuesto, explicado por pérdida de atención"
    ],
    g: [
      "Según Mackintosh, la atención a un EC aumenta si es el ___ predictor disponible del EI.|mejor|peor|único",
      "Según Pearce y Hall, un estímulo que ya predice bien sigue provocando la RC, pero deja de recibir ___.|atención|refuerzo|respuesta",
      "En el desbloqueo se cambia en la fase AX algo del EI, por ejemplo su ___.|intensidad|saliencia|contigüidad",
      "La explicación más directa de la inhibición latente es la del modelo de ___.|Pearce-Hall|Mackintosh|Rescorla-Wagner",
      "Mackintosh publicó su modelo atencional en ___.|1975|1980|1972"
    ],
    tf: [
      "Para Pearce y Hall, la atención aumenta para el estímulo que mejor predice el EI.|F|Esa es la regla de Mackintosh. Para Pearce y Hall, la atención aumenta cuando las consecuencias son inciertas.",
      "Según Mackintosh, en el primer ensayo del compuesto AX el estímulo X todavía puede aprender algo.|V",
      "En los modelos atencionales cambian con la experiencia tanto V como α.|V",
      "Los modelos atencionales sitúan el error que importa solo en el procesamiento del EI.|F|Eso corresponde a Rescorla-Wagner. Los modelos atencionales lo sitúan en la atención al EC."
    ],
    q: [
      "El tono del primer correo del día anuncia siempre bien el humor de la jefa de Marta. Según Pearce-Hall, ¿adónde irá su atención?|A señales aún inciertas, como la hora|Al tono del primer correo, el mejor predictor|A todas las señales por igual|Mientras el correo acierte, dejará de vigilarse. Mackintosh predeciría lo contrario: atender sobre todo al mejor predictor.",
      "¿Cómo explica Mackintosh el bloqueo?|X pierde atención tras el primer ensayo AX|X no genera error por estar el EI predicho|X compara su fuerza con la de A en la prueba|A ya predice el EI, X no añade nada y su α baja. La falta de error es la explicación de Rescorla-Wagner.",
      "¿Qué fenómeno ilustra con más claridad que, para Pearce y Hall, la sorpresa aumenta la atención al EC?|El desbloqueo|La sobreexpectativa|El ensombrecimiento|Al cambiar la intensidad del EI en la fase AX reaparece la sorpresa, la atención a X sube y X aprende.",
      "¿Qué parámetro de Rescorla-Wagner convierten en variable los modelos atencionales?|α, la saliencia del EC|β, el parámetro del EI|λ, el máximo del EI|Rescorla y Wagner trataron α como fijo. Los modelos atencionales proponen que cambia porque el organismo aprende a qué atender."
    ],
    inc: [
      "Sobre los modelos atencionales|Mackintosh no puede explicar la inhibición latente|Pearce-Hall explica el bloqueo por falta de sorpresa|Ambos modelos tienen apoyo experimental|Mackintosh también la explica: un EC sin consecuencias no predice mejor que el contexto y pierde atención."
    ],
    seq: [],
    cls: [
      "Regla de atención|Mackintosh (1975): mejor predictor del EI; atención como inversión|Pearce y Hall (1980): consecuencias inciertas; sorpresa; desbloqueo"
    ] },
  { t: "SOP de Wagner e hipótesis del comparador",
    tip: "El SOP de Wagner (1981) describe en tiempo real los estados de los elementos de cada nodo: inactivo, A1 y A2. Hay asociación excitatoria cuando EC y EI están a la vez en A1, y lo esperado, que ya está en parte en A2, se procesa menos. La hipótesis del comparador (Miller y Matzel, 1988) sitúa la competición entre claves en la ejecución: el estímulo bloqueado aprendió, pero no lo muestra en la prueba.",
    v: [
      "SOP=Sometimes opponent process, modelo de Wagner (1981) en tiempo real",
      "Nodo de memoria=Representación de un estímulo compuesta por muchos elementos",
      "Estado A1=Procesamiento pleno y focal, solo con el estímulo realmente presente",
      "Estado A2=Procesamiento periférico, como un recuerdo, al decaer de A1 o al ser evocado",
      "Estado inactivo=Reposo: el estímulo no se está procesando",
      "Hipótesis del comparador=La RC depende de comparar el EC con otras claves asociadas al EI en la prueba",
      "Estímulo comparador=Otro elemento del compuesto o contexto presente durante el entrenamiento",
      "Miller y Matzel (1988)=Autores que situaron el déficit del estímulo bloqueado en la ejecución"
    ],
    g: [
      "En SOP, se forma una asociación excitatoria cuando el EC y el EI están a la vez en ___.|A1|A2|inactivo",
      "Si el EC está en A1 mientras el EI está en A2, se forma una asociación ___.|inhibitoria|excitatoria|de segundo orden",
      "Un estímulo presentado hace poco sigue en A2 y provoca menos respuesta, lo que SOP explica como habituación a ___ plazo.|corto|largo|medio",
      "Para SOP, el EC provoca la respuesta que corresponde al estado ___ del EI.|A2|A1|inactivo",
      "Según el comparador, extinguir el estímulo bloqueador debería ___ la respuesta al estímulo bloqueado.|recuperar|reducir|invertir"
    ],
    tf: [
      "Según SOP, un estímulo esperado se procesa más porque ya está activado en A2.|F|Se procesa menos: al estar en parte en A2, menos elementos pueden pasar a A1 cuando se presenta.",
      "SOP explica la inhibición latente porque el contexto anticipa el EC preexpuesto y lo lleva a A2.|V",
      "La hipótesis del comparador sostiene que el estímulo bloqueado aprende poco durante la adquisición.|F|Sostiene que sí aprende y que el déficit está en la ejecución, al compararlo en la prueba con otras claves.",
      "El proceso es «a veces» oponente porque la RC será opuesta a la RI cuando la respuesta A2 sea contraria a la A1.|V"
    ],
    q: [
      "Tras un procedimiento de bloqueo, un equipo extingue el estímulo bloqueador A y, sin más entrenamiento, la respuesta a X aumenta. ¿Qué enfoque lo predice?|La hipótesis del comparador|El modelo de Rescorla-Wagner|El modelo de Mackintosh|Al debilitar el comparador, la asociación que X sí había aprendido se expresa. Los modelos centrados en la adquisición no lo predicen.",
      "¿Cómo explica SOP el bloqueo?|A lleva el EI a A2 y no alcanza A1|X no recibe atención tras el primer ensayo|X se compara con A en el momento de la prueba|El EI ya está anticipado por A, no llega lo bastante a A1 y X no se asocia con él.",
      "En SOP, ¿qué estado alcanza solo un estímulo que se presenta realmente?|A1|A2|Inactivo|La activación primaria exige el estímulo físico. A2 se alcanza al decaer desde A1 o cuando otro estímulo lo evoca.",
      "¿En qué se diferencia la hipótesis del comparador de Rescorla-Wagner, Mackintosh y SOP?|Sitúa el déficit en la ejecución|Sitúa el déficit en el aprendizaje|Niega que exista competición entre claves|Los otros tres dicen que el estímulo bloqueado aprendió poco. El comparador, que aprendió, pero no lo muestra."
    ],
    inc: [
      "Sobre el modelo SOP|Los elementos pueden volver directamente de A2 a A1|La habituación a corto plazo se explica por el estado A2|Lo esperado se procesa menos que lo inesperado|De A2 se pasa al estado inactivo. No es posible volver directamente de A2 a A1."
    ],
    seq: [
      "Recorrido de un elemento en SOP al presentar un estímulo|Estado inactivo>Activación primaria (A1)>Activación secundaria (A2)>Vuelta al estado inactivo"
    ],
    cls: [
      "Dónde sitúa el déficit del estímulo bloqueado|Aprendizaje: Rescorla-Wagner; Mackintosh; Pearce-Hall; SOP|Ejecución: hipótesis del comparador"
    ] },
  { t: "Qué se asocia y qué es la RC",
    tip: "La RC no es siempre igual a la RI: puede parecerse a ella (sustitución del estímulo, Pavlov), prepararla (respuesta preparatoria, Kimble) o ser su contraria (respuesta compensatoria, Siegel). Para saber qué se asocia se usa la devaluación del EI: si la RC baja, el EC activaba una representación del EI, una asociación E-E, lo habitual en el primer orden. En el segundo orden, la asociación es más próxima a la E-R.",
    v: [
      "Sustitución del estímulo=Teoría de Pavlov: el EC activa los mismos centros nerviosos que el EI",
      "Respuesta preparatoria=La RC prepara al organismo para el EI que se avecina (Kimble, 1961)",
      "Respuesta compensatoria=RC opuesta a la RI que contrarresta su efecto (Siegel, 1975)",
      "Asociación E-E=El EC queda conectado con una representación del EI",
      "Asociación E-R=El EC queda conectado directamente con la respuesta",
      "Devaluación del EI=Reducir el valor del EI tras condicionar, en ausencia del EC",
      "Saciedad=Uno de los modos de devaluar el EI, junto con la habituación o el malestar",
      "Condicionamiento palpebral=Preparación en que el párpado se cierra justo antes del soplo de aire"
    ],
    g: [
      "El cierre del párpado justo antes del soplo de aire apoya la teoría de la respuesta ___.|preparatoria|compensatoria|sustitutiva",
      "La sustitución del estímulo encaja bien con la ___, en la que RC y RI se parecen mucho.|salivación|tolerancia|analgesia",
      "En el condicionamiento de ___ orden predomina la asociación E-E.|primer|segundo|tercer",
      "Una vez establecido el segundo orden, si se extingue el EC1 la respuesta al EC2 suele ___.|mantenerse|desaparecer|invertirse",
      "Tras empacharse de churros, el olor de la churrería deja de apetecer: el olor evocaba una ___ de los churros.|representación|consecuencia|evaluación"
    ],
    tf: [
      "La conclusión de consenso es que la RC es siempre una copia más débil de la RI.|F|La RC puede parecerse a la RI, ser una parte de ella, prepararla o ser su contraria.",
      "En la prueba de devaluación, el valor del EI se reduce en ausencia del EC.|V",
      "Si la RC disminuye tras devaluar el EI, el EC dispara la respuesta sin pasar por el EI.|F|Indica lo contrario: el EC activa una representación del EI cuyo valor actual importa, una asociación E-E.",
      "La idea de respuesta compensatoria es la base de la tolerancia condicionada a las drogas.|V"
    ],
    q: [
      "Se condiciona un tono con comida y, después, se sacia al animal fuera de la situación de condicionamiento. La RC ante el tono disminuye. ¿Qué indica?|Una asociación E-E|Una asociación E-R|Una asociación de segundo orden|El tono evoca una representación de la comida cuyo valor actual importa. Con una asociación E-R, la RC no cambiaría.",
      "¿Qué teoría sobre la RC deja de servir como explicación general ante el hallazgo de RC opuestas a la RI?|La sustitución del estímulo|La respuesta preparatoria|La respuesta compensatoria|Si la RC puede ser contraria a la RI, el EC no «sustituye» al EI. Por eso la sustitución no sirve como explicación general.",
      "¿Con qué autor se asocia la teoría de la respuesta preparatoria?|Kimble|Siegel|Pavlov|Kimble (1961) propuso que la RC prepara al organismo para el EI, como el cierre del párpado antes del soplo de aire.",
      "En el condicionamiento de segundo orden, ¿qué tipo de asociación parece formar el EC2?|Más próxima a la E-R|Más próxima a la E-E|Más bien inhibitoria|Extinguir el EC1 no suele afectar a la respuesta al EC2, que la provoca de forma directa."
    ],
    inc: [
      "Sobre la naturaleza de la RC|La RC reproduce siempre la RI|La RC puede ser contraria a la RI|La RC puede preparar para el EI|La RC no es siempre igual a la RI. La salivación encaja con la sustitución del estímulo, pero no es la norma general."
    ],
    seq: [],
    cls: [
      "Teoría sobre la RC|Sustitución del estímulo: Pavlov; RC parecida a la RI; salivación|Respuesta preparatoria: Kimble; cierre del párpado antes del soplo|Respuesta compensatoria: Siegel; RC opuesta a la RI; tolerancia"
    ] }
] },
{ n: 6, t: "Restricciones biológicas y condicionamiento en la vida real", cap: 2, pir: "alta", mods: [
  { t: "Aversión condicionada al sabor y relevancia",
    tip: "La aversión condicionada al sabor puede adquirirse en un solo ensayo, tolera demoras de horas y es muy selectiva. Garcia y Koelling (1966) hallaron un cruce: el sabor se asociaba con el malestar, y la luz y el ruido, con la descarga. Como los dos grupos bebieron el mismo compuesto, el resultado se debe a la combinación EC-EI (relevancia), no a la saliencia. Fue el fenómeno que más contribuyó a desmontar la equipotencialidad.",
    v: [
      "Equipotencialidad=Supuesto, hoy rechazado, de que cualquier EC se asocia igual de fácil con cualquier EI",
      "Aversión al sabor=Rechazo de un sabor seguido de malestar, posible en un ensayo y con horas de demora",
      "Relevancia=Mayor facilidad para asociar ciertos EC con ciertos EI (belongingness)",
      "Agua brillante y ruidosa=Compuesto de sabor, luz y clic que se presentaba al lamer el bebedero",
      "Cloruro de litio=EI que producía malestar, como la radiación X, en Garcia y Koelling",
      "Chivo expiatorio=Sabor novedoso antes de la quimioterapia para que la aversión recaiga en él",
      "Náuseas anticipatorias=Reacción ante las claves del hospital en pacientes de quimioterapia",
      "Garcia y Koelling (1966)=Experimento del cruce entre tipo de EC y tipo de EI en ratas"
    ],
    g: [
      "En Garcia y Koelling, las ratas que sufrieron malestar evitaron sobre todo el agua ___.|con sabor|con luz|con ruido",
      "La aversión al sabor tolera demoras de ___ entre el sabor y el malestar.|horas|segundos|semanas",
      "Para una rata, que es ___, lo que come es la causa más probable de un malestar digestivo.|omnívora|herbívora|carnívora",
      "La aversión al sabor aparece aunque la persona ___ que la comida no causó el malestar.|sepa|ignore|olvide",
      "En quimioterapia se propone ofrecer un sabor ___ y poco importante antes de cada sesión.|novedoso|familiar|habitual"
    ],
    tf: [
      "La diferencia entre grupos en Garcia y Koelling se debía a que el sabor era más saliente que la luz y el ruido.|F|Ambos grupos bebieron el mismo compuesto. La diferencia se debe a la combinación EC-EI, no a la saliencia.",
      "La aversión al sabor puede aparecer aunque la persona sepa que el malestar se debió a una gastroenteritis.|V",
      "En la aversión al sabor, como en el parpadeo, unos pocos segundos de intervalo ya dificultan el condicionamiento.|F|La aversión al sabor tolera demoras de horas. Los intervalos de segundos son críticos en el parpadeo.",
      "Lo que se aprende depende de la historia evolutiva de la especie y no solo de la relación temporal entre estímulos.|V"
    ],
    q: [
      "Tras una gastroenteritis, Pablo rechaza la paella que comió esa noche, aunque sabe que el virus no tuvo nada que ver. ¿Qué explica mejor su rechazo?|Una aversión al sabor por relevancia|Una creencia causal sobre la paella|Una RC compensatoria al malestar|El aprendizaje sabor-malestar no requiere creer en la relación causal y aparece aunque la persona conozca la causa real.",
      "¿Qué EI recibía el grupo de malestar en Garcia y Koelling?|Radiación o cloruro de litio|Descargas eléctricas en las patas|Una inyección de ciclofosfamida|Un grupo recibía radiación X o cloruro de litio, y el otro, descargas. La ciclofosfamida es del estudio de Ader y Cohen.",
      "La aversión al sabor fue el fenómeno que más contribuyó a desmontar un supuesto. ¿Cuál?|La equipotencialidad|La contingencia|La generalización|Mostró que no cualquier EC se asocia igual de fácil con cualquier EI.",
      "Según la relevancia, ¿qué combinación se aprende con más facilidad en la rata?|Sabor y malestar|Sabor y descarga|Luz y malestar|Sabor y malestar encajan entre sí, igual que luz y ruido con la descarga. Las combinaciones cruzadas apenas se aprendieron."
    ],
    inc: [
      "Sobre la aversión condicionada al sabor|Requiere muchos ensayos|Puede adquirirse en un solo ensayo|Muestra una selectividad muy marcada|Puede bastar un único ensayo. Los muchos ensayos caracterizan a preparaciones como la salivación o el parpadeo."
    ],
    seq: [
      "Diseño de Garcia y Koelling (1966)|Beber agua con sabor, luz y clic>Recibir malestar o descarga según el grupo>Probar por separado el sabor y el estímulo audiovisual>Comparar cuánto se evita cada tipo de agua"
    ],
    cls: [
      "Rasgo|Aversión al sabor: un ensayo; demoras de horas; selectividad muy marcada|Preparaciones clásicas: muchos ensayos; segundos o menos; selectividad menos marcada"
    ] },
  { t: "Preparación biológica y fobias",
    tip: "Seligman (1970) generalizó la relevancia en un continuo de preparación: asociaciones preparadas, no preparadas y contrapreparadas, que dependen de la especie. Lo aplicó a las fobias, mucho más frecuentes ante amenazas evolutivas que ante enchufes. Öhman y Mineka (2001) hallaron que esos miedos se adquieren con más facilidad y, en algunos estudios, se extinguen peor. Preparado no significa innato, y el concepto se critica por circularidad.",
    v: [
      "Preparación=Continuo de facilidad con que una especie aprende una asociación (Seligman, 1970)",
      "Asociación preparada=Se aprende muy deprisa, a veces en un solo ensayo",
      "No preparada=Se aprende de forma gradual, con muchos ensayos, como tono y comida",
      "Contrapreparada=Se aprende con gran dificultad o no se aprende, como sabor y descarga en la rata",
      "Fobia preparada=Miedo a estímulos evolutivamente relevantes que se condiciona con especial facilidad",
      "Öhman y Mineka (2001)=Estudiaron en laboratorio el miedo condicionado a serpientes y arañas",
      "Circularidad=Llamar preparado a lo que se condiciona fácil y usarlo para explicar esa facilidad",
      "Equipotencialidad fuerte=Idea, considerada falsa, de que todas las asociaciones se aprenden igual"
    ],
    g: [
      "Que una rata aprenda con gran dificultad a asociar sabor y descarga es una asociación ___.|contrapreparada|no preparada|preparada",
      "Las aves que buscan comida guiándose por la vista asocian con el malestar más fácilmente el ___ del alimento.|color|sabor|olor",
      "Son muy raras las fobias a ___, aunque causen más daños en la vida moderna.|enchufes|serpientes|alturas",
      "Lo preparado no es el miedo en sí, sino la ___ para aprenderlo.|facilidad|necesidad|ocasión",
      "Junto a la aversión al sabor, la deriva ___ del operante muestra que la equipotencialidad fuerte es falsa.|instintiva|conductual|genética"
    ],
    tf: [
      "Según Seligman, las fobias preparadas son miedos innatos que no requieren aprendizaje.|F|Lo preparado es la facilidad para aprender el miedo, no el miedo en sí. Confundir preparado con innato es una trampa típica.",
      "Una misma asociación puede estar preparada para una especie y no para otra.|V",
      "Todos los estudios con personas muestran que los miedos a serpientes y arañas se extinguen peor que otros.|F|La peor extinción aparece solo en algunos estudios, y el apoyo depende de la medida y del procedimiento.",
      "Además del condicionamiento directo, el miedo puede adquirirse por observación e información.|V"
    ],
    q: [
      "Ana recibió una pequeña descarga al enchufar un cargador y solo tuvo cuidado unos días. Su amigo vio una serpiente en una excursión, sin que le pasara nada, y desarrolló un miedo intenso. ¿Qué lo explica mejor?|La serpiente es un estímulo más preparado|La descarga fue una experiencia más leve|El miedo a las serpientes es innato|La experiencia aversiva fue mayor con el enchufe, pero la serpiente es una amenaza evolutiva preparada para asociarse con el miedo.",
      "¿Por qué se acusa de circular al concepto de preparación?|Define y explica con el mismo dato|Se basa en un solo experimento|Confunde lo preparado con lo innato|Si un estímulo es preparado porque se condiciona fácil, la preparación no puede explicar esa facilidad. Hacen falta criterios independientes.",
      "¿Qué criterio independiente se propone para evitar esa circularidad?|La relevancia evolutiva de la amenaza|La rapidez con que se adquiere el miedo|La intensidad de la experiencia aversiva|Se propone apoyarse en la relevancia evolutiva o en la comparación entre especies, no en la propia facilidad de condicionar.",
      "¿Qué patrón de las fobias apoya la idea de preparación?|No siguen la frecuencia de los accidentes|Son proporcionales al daño sufrido|Aparecen sobre todo ante objetos modernos|Son frecuentes ante serpientes, arañas o alturas y raras ante enchufes o martillos, aunque estos causen más daños hoy."
    ],
    inc: [
      "Sobre la preparación biológica|Es igual en todas las especies|Seligman la describió como un continuo|Las fobias a alturas son frecuentes|Depende de la especie: las aves que se guían por la vista asocian el color con el malestar más fácilmente que el sabor."
    ],
    seq: [],
    cls: [
      "Grado de preparación en la rata|Preparado: sabor y malestar; a veces un solo ensayo|No preparado: tono y comida; muchos ensayos|Contrapreparado: sabor y descarga; gran dificultad"
    ] },
  { t: "Tolerancia condicionada a las drogas",
    tip: "Siegel (1975) mostró que parte de la tolerancia es aprendida: las claves del consumo actúan como EC y llegan a provocar una RC compensatoria, opuesta al efecto de la droga. El efecto neto es la suma de ambas fuerzas, así que la tolerancia es específica del contexto. La misma dosis en un lugar nuevo no se compensa, lo que explica algunas sobredosis (Siegel et al., 1982). Este mecanismo se suma a los farmacológicos.",
    v: [
      "Tolerancia=Disminución del efecto de una droga con el consumo repetido",
      "Tolerancia condicionada=Menor efecto de una droga por RC compensatorias ante las claves del contexto",
      "RC compensatoria=Reacción anticipatoria y opuesta al efecto del fármaco",
      "Claves del contexto=Lugar, jeringuilla, ritual y personas que actúan como EC del consumo",
      "Siegel et al. (1982)=Mayor mortalidad con heroína en ratas tolerantes en un contexto nuevo",
      "Efecto neto=Suma del efecto del fármaco y de la RC compensatoria",
      "Extinción de la tolerancia=Reducción al presentar las claves del consumo sin la droga",
      "Proceso b=Proceso oponente de Solomon y Corbit que se fortalece con la repetición"
    ],
    g: [
      "Si una droga produce analgesia, la RC compensatoria ___ la sensibilidad al dolor.|aumenta|reduce|mantiene",
      "Si una droga produce hipotermia, la RC compensatoria ___ la temperatura.|eleva|baja|estabiliza",
      "Siegel et al. (1982) comprobaron el papel del contexto con ___ en ratas.|heroína|morfina|alcohol",
      "En el modelo de Siegel, el proceso compensatorio lo provocan claves ___.|asociadas|nuevas|innatas",
      "Si las claves del consumo provocan la RC sin que llegue la droga, aparecen reacciones parecidas a la ___.|abstinencia|intoxicación|sobredosis"
    ],
    tf: [
      "En la tolerancia condicionada, la RC se parece al efecto de la droga y lo potencia.|F|La RC es opuesta al efecto de la droga y lo contrarresta. Creer que se parece es una trampa típica.",
      "La tolerancia condicionada sustituye a las explicaciones farmacológicas de la tolerancia.|F|No las sustituye, sino que se suma a mecanismos como las adaptaciones de los receptores o del metabolismo.",
      "Según este modelo, volver al barrio o al grupo de consumo es un factor de riesgo de recaída.|V",
      "En animales se ha observado que la tolerancia se extingue presentando las claves sin la droga.|V"
    ],
    q: [
      "Un consumidor habitual de heroína se inyecta su dosis de siempre en un piso desconocido y sufre una sobredosis. Según Siegel, ¿por qué?|Faltan las claves de la RC compensatoria|El estrés del lugar potencia el fármaco|El fármaco se absorbe más rápido allí|Sin las claves habituales no aparece la compensación, y el organismo recibe el efecto completo del fármaco.",
      "¿En qué se diferencia el modelo de Siegel de la teoría de Solomon y Corbit?|En Siegel, lo provocan claves asociadas|En Siegel, el proceso es innato|En Siegel, el proceso b crece con la repetición|En Siegel la compensación la provocan claves asociadas. En Solomon y Corbit, el proceso b se fortalece con la repetición del estímulo.",
      "Según el modelo, ¿qué papel tienen la jeringuilla y el ritual de preparación?|Actúan como EC|Actúan como EI|Actúan como RC|Las claves del consumo son el EC, el efecto de la droga es el EI, y las reacciones compensatorias, la RC.",
      "¿Qué significa que la tolerancia sea específica del contexto?|Es menor fuera del lugar habitual|Es mayor en un lugar nuevo|Solo depende de los receptores|La RC compensatoria aparece ante las claves habituales. Fuera de ellas, el efecto neto del fármaco es mayor."
    ],
    inc: [
      "Sobre la tolerancia condicionada de Siegel|El efecto observado es solo el del fármaco|Cada consumo funciona como un ensayo de condicionamiento|La RC es anticipatoria y opuesta al fármaco|El efecto observado es la suma del efecto del fármaco y de la RC compensatoria."
    ],
    seq: [
      "Desarrollo de la tolerancia condicionada|Las claves acompañan a cada consumo>Las claves quedan asociadas al efecto de la droga>Las claves provocan una RC compensatoria>El efecto neto de la dosis disminuye"
    ],
    cls: [
      "Elemento del modelo de Siegel|EC: lugar; jeringuilla; ritual de preparación|EI: efecto de la droga|RC: reacción compensatoria; opuesta al fármaco"
    ] },
  { t: "Condicionamiento evaluativo e inmunitario",
    tip: "El condicionamiento evaluativo cambia la valencia de un estímulo neutro al emparejarlo con estímulos agradables o desagradables, como busca la publicidad. Es relativamente resistente a la extinción, y se debate si requiere consciencia de la contingencia. Ader y Cohen (1975) mostraron inmunosupresión condicionada al emparejar sacarina con ciclofosfamida. Fue el origen de la psiconeuroinmunología, y sus aplicaciones clínicas siguen en investigación.",
    v: [
      "Condicionamiento evaluativo=Cambio de agrado de un estímulo neutro por emparejarlo con otros agradables o no",
      "Valencia=Agrado o desagrado que provoca un estímulo",
      "Inmunosupresión condicionada=Supresión inmunitaria provocada por un EC asociado a un fármaco",
      "Ader y Cohen (1975)=Demostraron que las respuestas inmunitarias pueden condicionarse",
      "Sacarina=EC gustativo del estudio de Ader y Cohen",
      "Ciclofosfamida=Fármaco que produce malestar y suprime la respuesta inmunitaria",
      "Psiconeuroinmunología=Campo nacido de mostrar que el sistema inmunitario es sensible al aprendizaje",
      "Efecto placebo=Parte del efecto de un tratamiento producida por las claves asociadas a él"
    ],
    g: [
      "Asociar una marca con música alegre para que resulte agradable es condicionamiento ___.|evaluativo|inmunitario|de huella",
      "El condicionamiento evaluativo se mide con valoraciones de agrado y medidas ___.|implícitas|fisiológicas|motoras",
      "El objetivo inicial de Ader y Cohen era estudiar una ___ al sabor.|aversión|preferencia|habituación",
      "El hallazgo mostró que el sistema inmunitario, que se consideraba ___, se comunica con el sistema nervioso.|autónomo|innato|periférico",
      "Que la marca deje de aparecer con música alegre no significa que deje de ___.|gustar|anunciarse|venderse"
    ],
    tf: [
      "El condicionamiento evaluativo se extingue con la misma facilidad que la RC clásica típica.|F|Es relativamente resistente a la extinción: una vez adquirida, la valencia no se elimina con facilidad.",
      "Está establecido que el condicionamiento evaluativo requiere consciencia de la relación entre los estímulos.|F|El papel de la consciencia de la contingencia sigue en debate.",
      "En el estudio de Ader y Cohen, la sacarina presentada sola llegó a reducir la respuesta inmunitaria.|V",
      "Mantener el efecto de un fármaco con dosis menores mediante condicionamiento es una línea de investigación, no una práctica establecida.|V"
    ],
    q: [
      "Una canción que sonaba durante una ruptura dolorosa sigue desagradando a Irene años después, aunque la ha oído muchas veces en contextos neutros. ¿Qué rasgo ilustra?|La resistencia a la extinción|La recuperación espontánea de la RC|La inmunosupresión condicionada|Es condicionamiento evaluativo: la valencia adquirida resiste aunque el estímulo se presente solo muchas veces.",
      "¿Qué se transfiere en el condicionamiento evaluativo?|Una evaluación del estímulo|Una respuesta refleja concreta|Una expectativa sobre el EI|El estímulo empieza a gustar o a disgustar. En el condicionamiento clásico típico se aprende que el EC anuncia el EI.",
      "¿Qué papel tenía la sacarina en el estudio de Ader y Cohen?|Era el EC|Era el EI|Era la RI|La sacarina era el EC, y la ciclofosfamida, el EI que producía malestar e inmunosupresión.",
      "¿Con qué fenómeno se relaciona también el condicionamiento inmunitario?|El efecto placebo|La deriva instintiva|El ensombrecimiento|En el efecto placebo, las claves asociadas a un tratamiento pueden producir parte de su efecto."
    ],
    inc: [
      "Sobre el condicionamiento inmunitario|Ya es una práctica clínica establecida|Está en el origen de la psiconeuroinmunología|Se relaciona con el efecto placebo|Sus aplicaciones clínicas siguen en investigación, no son una práctica establecida."
    ],
    seq: [],
    cls: [
      "Tipo de condicionamiento|Clásico típico: el EC anuncia el EI; RC fisiológica o conductual; se extingue con el EC solo|Evaluativo: el estímulo resulta agradable o no; valoraciones de agrado; resistente a la extinción"
    ] }
] },
{ n: 7, t: "Extinción, recaída y terapia de exposición", cap: 2, pir: "alta", mods: [
  { t: "La extinción como nuevo aprendizaje",
    tip: "La extinción es presentar el EC sin el EI y el descenso resultante de la RC. Para Bouton no borra la asociación original, sino que añade un aprendizaje inhibitorio EC–no EI, y el EC queda con dos significados que el contexto desambigua. Lo aprendido en extinción depende más del contexto que lo aprendido en adquisición. El contexto incluye el lugar, el estado interno, las personas presentes y el paso del tiempo.",
    v: [
      "Extinción=Presentar el EC sin el EI y descenso resultante de la RC",
      "Desaprendizaje=Visión de la extinción como debilitamiento de la asociación hasta cero",
      "Aprendizaje inhibitorio=Asociación EC–no EI que se añade sin borrar la original",
      "Mark Bouton=Autor de la interpretación de consenso de la extinción como nuevo aprendizaje",
      "Dos significados=El EC significa «EI» y también «no EI», como una palabra ambigua",
      "Contexto=Lugar, estado interno, personas y paso del tiempo que acompañan al aprendizaje",
      "Asimetría de Bouton=La extinción depende más del contexto que la adquisición",
      "Error de predicción negativo=Omisión de un EI esperado, que impulsa el nuevo aprendizaje"
    ],
    g: [
      "Según Bouton, lo que decide qué significado del EC se expresa en cada momento es el ___.|contexto|reforzador|intervalo",
      "El aprendizaje de ___ se generaliza con facilidad a otros contextos.|adquisición|extinción|inhibición",
      "Un estado de ánimo o el efecto de una droga pueden actuar como contexto ___.|interno|físico|temporal",
      "Que la RC extinguida pueda volver ya lo conocía ___.|Pavlov|Bouton|Wolpe",
      "La omisión de un EI esperado genera un error de predicción ___.|negativo|positivo|nulo"
    ],
    tf: [
      "Según Bouton, tras la extinción la asociación EC-EI se conserva intacta.|V",
      "Lo aprendido en extinción depende del contexto menos que lo aprendido en adquisición.|F|Es al revés: la extinción queda más ligada al contexto, y la adquisición se generaliza con facilidad.",
      "El modelo de Rescorla-Wagner entiende la extinción como un debilitamiento de la asociación.|V",
      "Si un tratamiento de exposición tiene éxito, el miedo ya no puede volver.|F|La extinción no borra: el miedo puede volver con el tiempo, con un cambio de contexto o tras un nuevo encuentro con el EI."
    ],
    q: [
      "Lucía siente ansiedad con el sonido de las videollamadas tras una mala entrevista. Tras semanas de videollamadas con su familia desde su habitación, la ansiedad desaparece. Según Bouton, ¿qué ha ocurrido?|Ha aprendido que allí no traen nada malo|Ha olvidado la asociación con la entrevista|Se ha habituado a cualquier videollamada|Añadió un aprendizaje inhibitorio ligado a ese contexto. En la oficina, con un desconocido, la ansiedad puede volver.",
      "Según Bouton, ¿qué ocurre con la asociación EC-EI tras la extinción?|Se conserva junto a otra inhibitoria|Se debilita hasta volver a cero|Se transforma en una asociación E-R|La asociación original sigue intacta, y el contexto decide qué significado del EC se expresa.",
      "En el marco de Bouton, ¿qué puede actuar como contexto?|Lugar, estado interno, personas y tiempo|Solo el lugar físico del aprendizaje|Solo los estímulos presentes en la prueba|Contexto tiene un sentido amplio: todo lo que acompaña al aprendizaje, incluido el paso del tiempo.",
      "¿Qué objetivo clínico se deriva de que la extinción no borre?|Recuperar lo nuevo en muchos contextos|Borrar por completo la asociación original|Lograr que la ansiedad baje en cada sesión|Como el éxito no garantiza que el miedo no vuelva, se busca que el aprendizaje inhibitorio se recupere en el mayor número de situaciones."
    ],
    inc: [
      "Sobre la extinción según Bouton|Elimina la asociación EC-EI original|El EC queda con dos significados|El contexto desambigua el significado del EC|No la elimina: añade un aprendizaje inhibitorio EC–no EI que compite con la asociación original."
    ],
    seq: [],
    cls: [
      "Concepción de la extinción|Desaprendizaje: la asociación se debilita; no se añade nada; la RC no debería volver|Nuevo aprendizaje: la asociación se conserva; se añade EC–no EI; la RC puede volver"
    ] },
  { t: "Recuperación espontánea, renovación y restablecimiento",
    tip: "Los fenómenos de retorno prueban que la extinción no borra. La recuperación espontánea aparece al pasar el tiempo, un cambio de contexto temporal. La renovación aparece al cambiar el contexto físico: ABA es la más robusta, ABC también la produce y AAB, de forma más débil. El restablecimiento aparece al presentar el EI solo, y la readquisición rápida, al volver a emparejar EC y EI. Son modelos de laboratorio de la recaída.",
    v: [
      "Recuperación espontánea=Reaparición parcial de la RC extinguida tras el paso del tiempo",
      "Renovación=Reaparición de la RC extinguida al cambiar el contexto respecto al de extinción",
      "Restablecimiento=Reaparición de la RC extinguida tras presentar el EI solo",
      "Readquisición rápida=Recuperación de la RC más deprisa que al principio al volver a emparejar EC y EI",
      "Diseño ABA=Adquirir en A, extinguir en B y probar en A, la forma más robusta",
      "Diseño ABC=Probar en un contexto nuevo tras adquirir en A y extinguir en B",
      "Diseño AAB=Adquirir y extinguir en el mismo contexto y probar en otro",
      "Fenómenos de retorno=Reaparición de una RC extinguida sin volver a emparejar EC y EI"
    ],
    g: [
      "La renovación más robusta se obtiene con el diseño ___.|ABA|ABC|AAB",
      "En el marco de Bouton, la recuperación espontánea es un cambio de contexto ___.|temporal|físico|interno",
      "El restablecimiento suele ser mayor si el EI se presenta en el ___ contexto en que luego se prueba el EC.|mismo|otro|primer",
      "En el diseño ABC, la RC vuelve en un contexto ___.|nuevo|de extinción|de adquisición",
      "Que la RC vuelva incluso en el diseño ___ muestra que la extinción queda ligada al contexto aunque la adquisición ocurriera en él.|AAB|ABA|ABC"
    ],
    tf: [
      "El diseño AAB no produce renovación porque la adquisición y la extinción ocurrieron en el mismo contexto.|F|Sí la produce, aunque más débil. Creer que no la produce es una trampa típica.",
      "En el restablecimiento se vuelven a emparejar el EC y el EI tras la extinción.|F|Eso es la readquisición. En el restablecimiento se presenta el EI solo, sin el EC.",
      "La readquisición rápida es otro signo de que la asociación original seguía allí.|V",
      "Una explicación del restablecimiento es que el EI condiciona el contexto.|V"
    ],
    q: [
      "Jorge dejó de sentir deseo de fumar en casa, pero lo siente con fuerza al volver al bar donde fumaba. ¿Qué fenómeno es?|Renovación ABA|Restablecimiento|Recuperación espontánea|Adquirió el deseo en el bar (A), lo extinguió en casa (B) y vuelve a A: es la forma más robusta de renovación.",
      "Tras extinguir el miedo a un tono, se presentan varias descargas solas y el miedo al tono reaparece. ¿Qué fenómeno es?|Restablecimiento|Readquisición|Renovación AAB|En la readquisición se vuelven a emparejar EC y EI. Aquí solo se presenta el EI.",
      "Meses después del alta, un miedo bien tratado reaparece en parte sin causa aparente. ¿Qué fenómeno ilustra?|Recuperación espontánea|Renovación por contexto nuevo|Restablecimiento tras el EI|Es la reaparición parcial de la RC con el paso del tiempo, que Bouton entiende como un cambio de contexto temporal.",
      "¿Por qué el diseño ABA produce la renovación más fuerte?|Suma dos factores contextuales|Implica tres contextos distintos|Presenta el EI durante la prueba|Combina la ausencia del contexto de extinción con la presencia de un contexto asociado al EI."
    ],
    inc: [
      "Sobre los fenómenos de retorno|Requieren volver a emparejar el EC con el EI|Apoyan que la extinción no borra lo aprendido|Son modelos de laboratorio de la recaída|La RC reaparece sin volver a emparejar EC y EI. Si se reemparejan, se habla de readquisición."
    ],
    seq: [
      "Diseño de renovación ABA|Adquisición en el contexto A>Extinción en el contexto B>Prueba de vuelta en el contexto A"
    ],
    cls: [
      "Fenómeno tras la extinción|Recuperación espontánea: dejar pasar el tiempo; contexto temporal|Renovación: cambiar el contexto físico; ABA; ABC; AAB|Restablecimiento: presentar el EI solo; contexto asociado al EI"
    ] },
  { t: "De la desensibilización sistemática al aprendizaje inhibitorio",
    tip: "Mary Cover Jones (1924) redujo el miedo de Peter a los conejos con una aproximación gradual. Wolpe (1958) basó la desensibilización sistemática en la inhibición recíproca: relajación, jerarquía y presentación gradual. Después se vio que el componente activo es la exposición. Craske et al. (2008, 2014) mostraron que la reducción del miedo en la sesión no predice bien el resultado: el objetivo es un aprendizaje inhibitorio fuerte y recuperable.",
    v: [
      "Claves de recuperación=Recordatorios de lo aprendido en terapia que se llevan a otros contextos",
      "Inhibición recíproca=No se puede estar a la vez relajado y ansioso",
      "Desensibilización sistemática=Exposición gradual a una jerarquía temida en relajación (Wolpe, 1958)",
      "Inundación=Exposición desde el inicio a la máxima ansiedad, sin posibilidad de escape",
      "Exposición in vivo=Exposición con los estímulos reales, gradual o intensa",
      "Conducta de seguridad=Conducta que impide comprobar que lo temido no ocurre y mantiene el miedo",
      "Violación de expectativas=Diseñar la exposición para que contradiga lo que se teme",
      "Extinción profundizada=Extinguir varios EC por separado y luego juntos"
    ],
    g: [
      "Wolpe fundamentó la desensibilización sistemática en la inhibición ___.|recíproca|latente|condicionada",
      "Con el tiempo se comprobó que el componente activo principal de la desensibilización sistemática era la ___.|exposición|relajación|jerarquía",
      "Incluir de forma infrecuente algún emparejamiento con el EI es la extinción ___ ocasional.|reforzada|profundizada|variable",
      "Sentarse siempre junto a la puerta del metro es una conducta de ___.|seguridad|recuperación|exposición",
      "Poner palabras a la emoción durante la exposición se llama etiquetado ___.|afectivo|cognitivo|conductual"
    ],
    tf: [
      "Según Craske et al., terminar una sesión con mucha ansiedad indica que la exposición ha fracasado.|F|La reducción del miedo dentro de la sesión no predice bien el resultado: se puede acabar ansioso y mejorar.",
      "La jerarquía de la desensibilización sistemática se ordena de menor a mayor ansiedad.|V",
      "Todas las estrategias del modelo de aprendizaje inhibitorio tienen eficacia clínica añadida demostrada.|F|Varias proceden de la investigación básica y siguen en evaluación clínica.",
      "Los contextos múltiples y las claves de recuperación responden al problema de la renovación.|V"
    ],
    q: [
      "Elena teme desmayarse en el metro a los cinco minutos. Según el modelo de aprendizaje inhibitorio, ¿cómo debería ser su exposición?|Que dure hasta ver que no se desmaya|Que acabe en cuanto baje su ansiedad|Que la haga sentada junto a la puerta|Es la violación de expectativas: se aprende más si el resultado contradice lo temido. Sentarse junto a la puerta es una conducta de seguridad.",
      "¿En qué principio basó Wolpe la desensibilización sistemática?|Inhibición recíproca|Error de predicción|Inhibición latente|No se puede estar relajado y ansioso a la vez, así que una respuesta incompatible con la ansiedad puede debilitarla.",
      "Una terapeuta expone a un paciente desde el primer momento a la situación de máxima ansiedad, sin posibilidad de escapar. ¿Qué técnica usa?|Inundación|Desensibilización sistemática|Extinción profundizada|La inundación empieza por lo más temido. La desensibilización avanza por una jerarquía, en relajación.",
      "¿Qué antecedente de la desensibilización sistemática contrasta con el caso del pequeño Albert?|El caso de Peter (Jones)|El trabajo de Watson y Rayner|La inhibición recíproca de Wolpe|Mary Cover Jones (1924) redujo el miedo de Peter a los conejos con una aproximación gradual mientras comía algo que le gustaba."
    ],
    inc: [
      "Sobre el modelo de aprendizaje inhibitorio|El objetivo es que el miedo baje en cada sesión|El aprendizaje EC–no EI debe ser recuperable|Variar los estímulos es una de sus estrategias|El objetivo es un aprendizaje inhibitorio fuerte y recuperable, no la reducción del miedo dentro de la sesión."
    ],
    seq: [
      "Desensibilización sistemática de Wolpe|Entrenamiento en relajación>Construcción de la jerarquía de situaciones temidas>Presentación gradual de la jerarquía en relajación"
    ],
    cls: [
      "Técnica de exposición|Desensibilización sistemática: relajación; jerarquía; Wolpe (1958)|Inundación: máxima ansiedad desde el inicio; sin posibilidad de escape"
    ] },
  { t: "Reconsolidación: promesa y réplicas",
    tip: "Según la hipótesis de la reconsolidación, un recuerdo consolidado vuelve a ser inestable al reactivarse y necesita estabilizarse de nuevo. Nader, Schafe y LeDoux (2000) redujeron el miedo en ratas con anisomicina en la amígdala tras reactivarlo. Schiller et al. (2010) aplicaron en humanos un recordatorio y extinción unos 10 minutos después. Kindt y Soeter (2013) no lo replicaron. Es una línea prometedora, no una técnica clínica consolidada.",
    v: [
      "Consolidación=Estabilización de un recuerdo nuevo, frágil al principio",
      "Reconsolidación=Reestabilización de un recuerdo reactivado, durante la cual podría modificarse",
      "Reactivación=Presentación de una clave que vuelve inestable un recuerdo consolidado",
      "Anisomicina=Fármaco que bloquea la síntesis de proteínas",
      "Nader, Schafe y LeDoux=Reactivaron el miedo en ratas e inyectaron anisomicina en la amígdala (2000)",
      "Schiller et al. (2010)=Recordatorio y extinción unos 10 minutos después, en humanos y sin fármacos",
      "Kindt y Soeter (2013)=No replicaron en humanos el procedimiento de recordatorio y extinción",
      "Condiciones límite=Equilibrio para desestabilizar el recuerdo sin que el recordatorio sea extinción"
    ],
    g: [
      "Nader, Schafe y LeDoux inyectaron la anisomicina en la ___.|amígdala|hipocampo|corteza",
      "En Schiller et al. (2010), la extinción empezaba unos ___ después del recordatorio.|10 minutos|10 segundos|10 horas",
      "Sin ___, la anisomicina no reducía el miedo al tono.|reactivación|extinción|consolidación",
      "El recordatorio de Schiller et al. era una sola presentación del ___.|EC|EI|contexto",
      "Los resultados pueden diferir según se mida la respuesta fisiológica o el informe ___.|verbal|motor|neural"
    ],
    tf: [
      "La reconsolidación tiene apoyo sólido en la investigación animal.|V",
      "La reconsolidación es ya una técnica clínica probada para eliminar miedos en humanos.|F|Su aplicación en humanos no está establecida: hay una no réplica y réplicas parciales.",
      "Schiller et al. (2010) interpretaron que la extinción dentro de la ventana actualizaba el recuerdo original.|V",
      "Schiller et al. (2010) bloquearon la síntesis de proteínas con anisomicina en personas.|F|No usaron fármacos: aplicaron extinción tras un recordatorio. La anisomicina se usó en ratas (Nader et al., 2000)."
    ],
    q: [
      "Un equipo condiciona miedo a una imagen, la presenta una vez y, 10 minutos después, aplica extinción. Al día siguiente hay menos retorno del miedo que en un grupo sin recordatorio. ¿Qué estudio reproduce?|Schiller et al. (2010)|Kindt y Soeter (2013)|Nader et al. (2000)|Es el procedimiento de recordatorio y extinción en humanos. Nader et al. trabajaron con ratas y anisomicina.",
      "¿Qué encontraron Kindt y Soeter (2013)?|No hallaron el efecto|Un efecto mayor que el original|El efecto solo con anisomicina|Su no replicación del procedimiento de recordatorio y extinción en humanos es la base del debate actual.",
      "¿Qué dificultad se discute en las réplicas de la reconsolidación?|Distinguir modificación de aprendizaje nuevo|Medir la síntesis de proteínas en humanos|Encontrar recuerdos de miedo consolidados|Cuesta demostrar que se ha modificado el recuerdo original y no se ha creado un aprendizaje nuevo más resistente.",
      "¿Qué diferencia teórica hay entre la extinción y la reconsolidación?|Una compite y la otra modifica el original|Una borra y la otra refuerza el original|Una actúa en ratas y la otra en humanos|La extinción crea un aprendizaje que compite con el original. La reconsolidación permitiría modificar el propio recuerdo."
    ],
    inc: [
      "Sobre la reconsolidación|El efecto de Nader no exigía reactivar|Un recuerdo reactivado se vuelve inestable|Hay réplicas parciales en humanos|Sin reactivación, la anisomicina no reducía el miedo. La reactivación era imprescindible."
    ],
    seq: [
      "Procedimiento de Nader, Schafe y LeDoux (2000)|Condicionar el miedo emparejando tono y descarga>Esperar a que la memoria se consolide>Presentar el tono para reactivarla>Inyectar anisomicina en la amígdala>Probar el miedo al tono"
    ],
    cls: [
      "Estudio|Nader, Schafe y LeDoux (2000): ratas; anisomicina; miedo muy reducido|Schiller et al. (2010): humanos; recordatorio y extinción; menos retorno del miedo|Kindt y Soeter (2013): humanos; mismo procedimiento; no replicación"
    ] }
] },
{ n: 8, t: "El condicionamiento instrumental: de Thorndike a Skinner", cap: 3, pir: "alta", mods: [
  { t: "Thorndike y la ley del efecto",
    tip: "Thorndike (1898, 1911) sustituyó la anécdota por el experimento con cajas problema y midió la latencia de escape, que bajaba de forma gradual e irregular: ensayo y error, sin comprensión súbita. Su conexionismo es una teoría E-R regida por la ley del efecto y la del ejercicio. La consecuencia no se asocia con la respuesta, solo sella la conexión. En 1932 abandonó la ley del ejercicio y la mitad negativa de la ley del efecto.",
    v: [
      "Caja problema=Jaula de listones de la que el gato salía accionando un mecanismo",
      "Latencia de escape=Tiempo que tardaba el animal en salir de la caja",
      "Ensayo y error=Aprendizaje gradual sin comprensión súbita ni razonamiento",
      "Ley del efecto=Las respuestas seguidas de satisfacción se fortalecen y tienden a repetirse",
      "Ley del ejercicio=Las conexiones se fortalecen con el uso y se debilitan con el desuso",
      "Conexionismo=Teoría de Thorndike de conexiones entre situación y respuesta",
      "Estado satisfactorio=Estado que el animal no evita y que a menudo intenta mantener",
      "Animal Intelligence=Obra de 1911 que amplió la tesis doctoral de Thorndike"
    ],
    g: [
      "Thorndike presentó su tesis doctoral en ___.|1898|1911|1932",
      "La latencia de escape descendía de forma ___, con subidas ocasionales.|irregular|brusca|lineal",
      "Para Thorndike, la consecuencia no se asocia con la respuesta: solo ___ la conexión entre situación y respuesta.|sella|anula|sustituye",
      "Thorndike abandonó la ley del ___ porque la repetición sin consecuencias no fortalecía la conexión.|ejercicio|efecto|contraste",
      "La interpretación de Thorndike contrasta con el ___ que Köhler defendería con chimpancés.|insight|moldeamiento|ensayo y error"
    ],
    tf: [
      "Thorndike concluyó que el gato acababa entendiendo cómo funcionaba el mecanismo de la caja.|F|Concluyó que no lo entendía: el aprendizaje era gradual, por ensayo y error, y no requería razonamiento.",
      "Tras su revisión de 1932, Thorndike sostuvo que la satisfacción fortalece, pero el malestar no debilita de forma comparable.|V",
      "La investigación posterior confirmó que el castigo nunca suprime la conducta con eficacia.|F|La ha matizado: el castigo puede suprimir la conducta con eficacia en determinadas condiciones.",
      "Según Thorndike, el gato aprende a tirar de la cuerda cuando está en esa caja, no que tirar de ella produce comida.|V"
    ],
    q: [
      "Raúl estrena una cafetera con varios botones, prueba combinaciones hasta que sale el café y, en una semana, pulsa la secuencia correcta sin pensar. ¿Qué describe mejor su aprendizaje?|Ensayo y error|Insight súbito|Aprendizaje latente|Es un aprendizaje gradual regulado por la consecuencia, como el de los gatos de Thorndike en las cajas problema.",
      "¿Qué variable registraba Thorndike en cada ensayo?|La latencia de escape|La tasa de respuesta|El número de errores|Medía el tiempo que tardaba el animal en salir. La tasa de respuesta es la variable propia de la caja de Skinner.",
      "¿Qué parte de su teoría conservó Thorndike tras revisarla en 1932?|La mitad positiva de la ley del efecto|La ley del ejercicio completa|La mitad negativa de la ley del efecto|La satisfacción fortalece, pero el malestar no debilita de forma comparable. La ley del ejercicio la abandonó.",
      "¿Cómo definió Thorndike un estado «satisfactorio»?|De forma conductual|Por el placer subjetivo|Por la reducción del impulso|Es un estado que el animal no evita y que a menudo intenta mantener. La reducción del impulso es de Hull."
    ],
    inc: [
      "Sobre Thorndike|La consecuencia se asocia con la respuesta|Su teoría es de tipo estímulo-respuesta|Sustituyó la anécdota por el experimento|La consecuencia solo sella la conexión entre situación y respuesta. No se asocia con la respuesta."
    ],
    seq: [],
    cls: [
      "Ley de Thorndike|Ley del efecto: satisfacción y malestar; mitad positiva conservada|Ley del ejercicio: uso y desuso; abandonada en 1932"
    ] },
  { t: "Neoconductismo: Watson, Hull, Tolman y Guthrie",
    tip: "Watson (1913) propuso estudiar la conducta observable para predecirla y controlarla. El neoconductismo admitió variables intervinientes, y el esquema E-R pasó a ser E-O-R. Hull, con método hipotético-deductivo, definió el refuerzo como reducción del impulso y el potencial de reacción como D × H. Tolman, con su conductismo propositivo, habló de expectativas y mapas cognitivos y situó el efecto del refuerzo en la ejecución. Guthrie defendió la contigüidad en un solo ensayo.",
    v: [
      "Variable interviniente=Proceso interno no observable definido de forma operacional",
      "Método hipotético-deductivo=Postulados precisos de los que se derivan predicciones contrastables",
      "Reducción del impulso=Para Hull, lo que hace que una respuesta quede reforzada",
      "Fuerza del hábito (sHr)=Fuerza de la conexión E-R, que crece con los ensayos reforzados",
      "Potencial de reacción=Producto de impulso y hábito en la versión simplificada de Hull",
      "Conductismo propositivo=Enfoque de Tolman con conducta molar dirigida a metas",
      "Mapa cognitivo=Representación del entorno que forman los animales según Tolman (1948)",
      "Conductismo radical=El de Skinner, que rechaza las variables intervinientes como explicación"
    ],
    g: [
      "Con las variables intervinientes, el esquema E-R pasó a ser E-___-R.|O|C|S",
      "Para Tolman, la conducta es ___: se estudia en unidades con sentido, como «ir hacia la comida».|molar|molecular|refleja",
      "Según Guthrie, la asociación alcanza su fuerza plena en ___ ensayo.|un solo|el décimo|el último",
      "Hull publicó su teoría formalizada en ___.|1943|1948|1935",
      "Según Hull, sin ___ no hay conducta aunque el hábito sea fuerte.|impulso|refuerzo|estímulo"
    ],
    tf: [
      "Para Tolman, el refuerzo influye sobre todo en el aprendizaje, no en la ejecución.|F|Es al revés: para Tolman el refuerzo influye sobre todo en la ejecución, como mostró el aprendizaje latente.",
      "Para Guthrie, el refuerzo no fortalece nada: solo cambia la situación y evita que otra respuesta sustituya a la última.|V",
      "Hull y Tolman suelen situarse en el conductismo metodológico, que admite procesos internos inferidos.|V",
      "Skinner admitía las variables intervinientes como explicación de la conducta.|F|El conductismo radical las rechaza como explicación y se limita a las relaciones entre ambiente y conducta."
    ],
    q: [
      "Una rata con un hábito muy fuerte de recorrer un laberinto no lo recorre cuando está saciada. ¿Qué teoría lo predice de forma más directa?|La de Hull|La de Guthrie|La de Watson|Para Hull, el potencial de reacción es el producto de impulso y hábito: sin impulso no hay conducta aunque el hábito sea fuerte.",
      "¿Qué autor propuso que los animales forman mapas cognitivos del entorno?|Tolman|Hull|Guthrie|Tolman (1948) habló de expectativas y mapas cognitivos y fue un precursor del enfoque cognitivo.",
      "¿Cómo explicaba Guthrie la mejora gradual del aprendizaje?|Cada estímulo se asocia por separado|El hábito crece con cada refuerzo|Las expectativas se van confirmando|Cada situación incluye muchos estímulos, y cada uno debe asociarse con el movimiento por separado.",
      "¿Qué distingue al conductismo radical del metodológico?|Rechaza las variables intervinientes|Admite procesos internos inferidos|Estudia solo los reflejos innatos|Skinner se limita a las relaciones entre ambiente y conducta. Hull y Tolman admitían procesos internos inferidos."
    ],
    inc: [
      "Sobre el neoconductismo|Rechazó que los datos debieran ser conductuales|Muchos de sus autores admitían variables intervinientes|Se desarrolló entre los años treinta y cincuenta|Aceptaba que los datos debían ser conductuales, aunque muchos autores admitían procesos internos inferidos."
    ],
    seq: [],
    cls: [
      "Autor neoconductista|Hull: hipotético-deductivo; reducción del impulso; sHr|Tolman: conductismo propositivo; expectativas; mapas cognitivos|Guthrie: contigüidad; un solo ensayo; el refuerzo cambia la situación"
    ] },
  { t: "Skinner: conducta operante, caja y registro acumulativo; tipo S frente a tipo R",
    tip: "Skinner (1938) distinguió la conducta respondiente, provocada por un estímulo, de la operante, emitida y controlada por sus consecuencias. En el condicionamiento tipo S el reforzador depende de un estímulo, y en el tipo R, de una respuesta. Su caja permite el operante libre, con la tasa de respuesta como variable principal. En el registro acumulativo, la pendiente indica la tasa, y un tramo horizontal, que no hubo respuestas.",
    v: [
      "Conducta respondiente=Conducta provocada por un estímulo antecedente identificable",
      "Conducta operante=Conducta emitida cuya frecuencia depende de sus consecuencias",
      "Condicionamiento tipo S=El reforzador depende de un estímulo, como en el pavloviano",
      "Condicionamiento tipo R=El reforzador depende de una respuesta, como al pulsar una palanca",
      "Manipulando=Palanca para ratas o tecla iluminada para palomas",
      "Operante libre=Procedimiento en que el animal responde cuando quiere y cuantas veces quiere",
      "Registro acumulativo=Gráfica cuya pendiente indica la tasa de respuesta",
      "Ensayos discretos=El animal responde una vez y se le vuelve a colocar en la salida"
    ],
    g: [
      "En la caja de Skinner, la variable dependiente principal es la ___ de respuesta.|tasa|latencia|fuerza",
      "En el registro acumulativo, cuanto más ___ es la línea, más rápido se responde.|inclinada|horizontal|larga",
      "La conducta operante es ___ por el organismo, no provocada por un estímulo concreto.|emitida|elicitada|imitada",
      "Skinner prefirió los diseños de caso ___, con mediciones repetidas de pocos sujetos.|único|control|mixto",
      "La lógica de Skinner es la base del análisis ___ que se usa en modificación de conducta.|funcional|factorial|correlacional"
    ],
    tf: [
      "En un registro acumulativo, la línea baja cuando la tasa de respuesta disminuye.|F|La línea nunca baja: una tasa menor se ve como menos pendiente, y la ausencia de respuestas, como un tramo horizontal.",
      "En el operante, el estímulo discriminativo señala la ocasión, pero no provoca la respuesta.|V",
      "Las cajas de Thorndike y la caja de Skinner usan el mismo procedimiento de ensayos discretos.|F|Las cajas de Thorndike usan ensayos discretos. La de Skinner permite el procedimiento de operante libre.",
      "El condicionamiento clásico y el operante comparten fenómenos como la extinción y la generalización.|V"
    ],
    q: [
      "Un perro aprende a sentarse para recibir una golosina y, además, saliva al oír el ruido de la bolsa. ¿Qué ilustra?|Que ambos procesos se dan juntos|Que el operante es un tipo de clásico|Que la salivación es una conducta operante|Sentarse es una relación operante, y el sonido de la bolsa, un EC que provoca salivación: en la práctica se dan juntos.",
      "En un registro acumulativo aparece un tramo horizontal largo. ¿Qué significa?|No hubo respuestas|La tasa fue máxima|Se reforzó cada respuesta|La línea solo sube con cada respuesta. Si no hay respuestas, avanza en horizontal.",
      "¿Qué diferencia el condicionamiento tipo R del tipo S?|El reforzador depende de una respuesta|El reforzador depende de un estímulo|La respuesta es visceral o emocional|En el tipo R la comida llega solo si se pulsa la palanca. En el tipo S, el EI llega tras el EC haga lo que haga el animal.",
      "¿Qué permitió la caja de Skinner frente a los laberintos y las cajas problema?|Responder en cualquier momento|Medir la latencia de escape|Presentar ensayos discretos|El operante libre permite responder en cualquier momento y tantas veces como se quiera, y medir la tasa de respuesta."
    ],
    inc: [
      "Sobre la conducta operante|La provoca un estímulo concreto|Su frecuencia depende de sus consecuencias|Opera sobre el ambiente|Esa es la conducta respondiente. La operante es emitida, sin un estímulo concreto que la desencadene."
    ],
    seq: [],
    cls: [
      "Tipo de conducta|Respondiente: provocada; salivación ante la comida; parpadeo ante un soplo de aire|Operante: emitida; pulsar una palanca; controlada por sus consecuencias"
    ] },
  { t: "Contingencias, tipos de reforzadores, moldeamiento y encadenamiento",
    tip: "La triple contingencia es Ed, respuesta y consecuencia: el Ed señala la ocasión, y el EΔ, que no habrá refuerzo. Positivo y negativo significan añadir y quitar, y refuerzo y castigo, aumentar y reducir la conducta. Los reforzadores pueden ser primarios, secundarios o generalizados. El moldeamiento refuerza aproximaciones sucesivas, y en el encadenamiento cada eslabón es Ed del siguiente y reforzador condicionado del anterior.",
    v: [
      "Triple contingencia=Estímulo discriminativo, respuesta y consecuencia",
      "EΔ (ese delta)=Señal de que la respuesta no será reforzada",
      "Reforzamiento negativo=Retirar o evitar un aversivo tras la respuesta, lo que aumenta la conducta",
      "Coste de respuesta=Pérdida de un reforzador ya obtenido tras la conducta",
      "Tiempo fuera=Retirada del acceso a los reforzadores durante un periodo",
      "Reforzador generalizado=Condicionado asociado con muchos reforzadores, como el dinero",
      "Moldeamiento=Reforzamiento de aproximaciones sucesivas a una conducta nueva",
      "Entrenamiento de omisión=La respuesta cancela un reforzador que habría llegado"
    ],
    g: [
      "Abrocharse el cinturón para que se apague el pitido del coche es reforzamiento ___.|negativo|positivo|diferencial",
      "Perder puntos del carné por exceso de velocidad es castigo ___.|negativo|positivo|primario",
      "El sonido de un clicker en el adiestramiento de perros es un reforzador ___.|secundario|primario|generalizado",
      "El moldeamiento combina el reforzamiento diferencial y la ___.|extinción|evitación|recompensa",
      "El encadenamiento hacia atrás empieza por el eslabón ___, el más próximo al reforzador.|último|primero|central"
    ],
    tf: [
      "En el castigo negativo deja de llegar el reforzador que mantenía la conducta.|F|Eso es la extinción. En el castigo negativo se retira un reforzador distinto del que mantenía la conducta.",
      "El Ed provoca la respuesta de la misma forma que un EC provoca la RC.|F|El Ed no provoca la respuesta, solo señala la ocasión en que será reforzada. Confundirlo con un EC es una trampa típica.",
      "El reforzamiento negativo incluye el escape y la evitación.|V",
      "Incluso demoras cortas del refuerzo reducen mucho el aprendizaje.|V"
    ],
    q: [
      "Un adolescente pierde parte de la paga que ya tenía cada vez que llega tarde, y deja de hacerlo. ¿Qué procedimiento es?|Coste de respuesta|Tiempo fuera|Reforzamiento negativo|Pierde un reforzador ya obtenido: es castigo negativo en su modalidad de coste de respuesta.",
      "Laura toma un analgésico cuando le duele la cabeza, y cada vez lo hace antes. ¿Qué contingencia actúa?|Reforzamiento negativo|Reforzamiento positivo|Castigo negativo|La conducta aumenta porque retira un estímulo aversivo. Tomar el refuerzo negativo por castigo es la trampa más típica.",
      "En el encadenamiento, ¿qué función cumple cada eslabón intermedio?|Ed del siguiente y reforzador del anterior|Reforzador primario del siguiente eslabón|Estímulo incondicionado de toda la cadena|Es Ed del eslabón siguiente y reforzador condicionado del anterior. Solo el último recibe el reforzador final.",
      "¿Qué reforzador no depende de una privación concreta?|El generalizado|El primario|El de un clicker|Los generalizados, como el dinero o las fichas, se asocian con muchos reforzadores distintos."
    ],
    inc: [
      "Sobre refuerzo y castigo|Positivo significa agradable|Refuerzo y castigo se definen por su efecto|El tiempo fuera es un castigo negativo|Positivo y negativo significan añadir y quitar, no bueno y malo."
    ],
    seq: [
      "Moldeamiento de la presión de palanca|Reforzar que la rata se acerque a la palanca>Reforzar que la toque>Reforzar solo que la presione"
    ],
    cls: [
      "Efecto sobre la conducta|Aumenta: reforzamiento positivo; reforzamiento negativo; escape; evitación|Reduce: castigo positivo; coste de respuesta; tiempo fuera; entrenamiento de omisión"
    ] }
] }
);

// SAIMAP Psicología · Aprendizaje · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Programas de refuerzo y conducta de elección", cap: 3, pir: "alta", mods: [
  { t: "Programas simples: razón e intervalo",
    tip: "Un programa de refuerzo es la regla que determina qué respuestas se refuerzan. Los intermitentes simples exigen un número de respuestas (razón) o la primera respuesta tras un tiempo (intervalo), fijo o variable. La razón produce tasas más altas que el intervalo, y los programas variables, una respuesta más uniforme que los fijos. El festoneo es propio del intervalo fijo, no de la razón fija.",
    v: [
      "Programa de refuerzo=Regla que determina qué respuestas se refuerzan",
      "Reforzamiento continuo=Se refuerzan todas las respuestas, lo más útil para adquirir una conducta",
      "Programa de razón=Refuerza tras un número fijo o variable de respuestas",
      "Programa de intervalo=Refuerza la primera respuesta tras un tiempo fijo o variable",
      "Festoneo=Tasa que crece a medida que se acerca el final del intervalo fijo",
      "Pausa post-refuerzo=Parada tras cada refuerzo en la razón fija, más larga con razones altas",
      "RDO=Refuerza que la conducta objetivo no aparezca durante un intervalo",
      "Programa concurrente=Dos o más respuestas disponibles a la vez, cada una con su propio programa"
    ],
    g: [
      "En los programas de intervalo se refuerza la ___ respuesta tras cumplirse el intervalo.|primera|última|única",
      "Las máquinas tragaperras funcionan con un programa de razón ___.|variable|fija|continua",
      "En el programa ___, los componentes se alternan sin ninguna señal.|mixto|múltiple|encadenado",
      "Para enseñar a responder despacio se usa el programa ___.|RDB|RDA|RDO",
      "La pausa post-refuerzo de la razón fija tiende a ___ cuanto mayor es la razón exigida.|alargarse|acortarse|desaparecer"
    ],
    tf: [
      "En un programa de intervalo fijo basta con esperar a que pase el tiempo para recibir el refuerzo.|F|Se refuerza la primera respuesta emitida tras cumplirse el intervalo: sin responder no hay refuerzo.",
      "Los programas de razón producen tasas más altas que los de intervalo porque responder más deprisa adelanta el refuerzo.|V",
      "El festoneo es el patrón característico de la razón fija.|F|Es propio del intervalo fijo. La razón fija produce una pausa post-refuerzo seguida de una carrera rápida.",
      "En un programa encadenado, solo el último componente entrega el reforzador.|V"
    ],
    q: [
      "Un trabajador cobra por cada diez cajas montadas. Tras cada cobro se detiene un rato y luego trabaja muy deprisa. ¿Qué programa y qué patrón muestra?|Razón fija con pausa post-refuerzo|Intervalo fijo con festoneo|Razón variable con tasa constante|Un número fijo de respuestas produce pausas tras cada refuerzo seguidas de carreras a tasa alta.",
      "Quien espera un mensaje importante consulta el móvil a un ritmo moderado y estable. ¿Qué programa lo describe mejor?|Intervalo variable|Intervalo fijo|Razón variable|El mensaje llega tras un tiempo impredecible y solo se detecta al mirar. El intervalo variable produce una tasa moderada y estable.",
      "¿Por qué los programas variables producen una respuesta más uniforme que los fijos?|Porque el refuerzo puede llegar en todo momento|Porque entregan más reforzadores en cada sesión|Porque exigen menos respuestas por cada refuerzo|No hay un punto en el que «no merezca la pena» responder, así que la respuesta se mantiene uniforme.",
      "¿Qué programa compuesto es el procedimiento básico para estudiar la elección?|Concurrente|Encadenado|Múltiple|En el programa concurrente hay dos o más respuestas disponibles a la vez, cada una con su propio programa."
    ],
    inc: [
      "Sobre los programas simples|El intervalo produce tasas más altas que la razón|La razón variable genera una tasa alta y constante|El reforzamiento continuo es útil para adquirir|Es al revés: la razón produce tasas más altas, porque responder más deprisa adelanta el refuerzo."
    ],
    seq: [],
    cls: [
      "Programa y patrón|Razón fija: pausa post-refuerzo; cobrar por cada diez cajas montadas|Razón variable: tasa alta sin pausas; máquinas tragaperras|Intervalo fijo: festoneo; mirar el horno cada vez más a menudo"
    ] },
  { t: "Refuerzo parcial y resistencia a la extinción",
    tip: "En la extinción operante la respuesta deja de reforzarse y su tasa baja, a veces tras un aumento breve de la respuesta y de su variabilidad. La extinción no borra lo aprendido. Según el EREP, lo adquirido con refuerzo intermitente resiste más la extinción que lo adquirido con refuerzo continuo. Lo explican la teoría de la frustración (Amsel, 1958) y la secuencial (Capaldi, 1966), que no se excluyen.",
    v: [
      "Extinción operante=La respuesta deja de ir seguida del reforzador y su tasa disminuye",
      "EREP=Mayor resistencia a la extinción tras refuerzo intermitente que tras continuo",
      "Amsel (1958)=La frustración anticipada se condiciona como señal para seguir respondiendo",
      "Capaldi (1966)=El recuerdo de los ensayos sin refuerzo se vuelve Ed de la respuesta",
      "Frustración=Reacción aversiva ante la falta de un refuerzo esperado",
      "Teoría secuencial=Predice que influye el orden de los ensayos y no solo su proporción",
      "Recuperación espontánea=Vuelta de la respuesta extinguida tras un descanso",
      "Reforzamiento intermitente=Solo se refuerzan algunas respuestas, lo habitual fuera del laboratorio"
    ],
    g: [
      "Al comienzo de la extinción puede aparecer un aumento breve de la respuesta y de su ___.|variabilidad|latencia|demora",
      "Según Capaldi, lo que importa es el ___ de los ensayos anteriores.|recuerdo|número|valor",
      "Para instaurar una conducta nueva conviene el refuerzo ___.|continuo|intermitente|demorado",
      "La teoría secuencial predice que influye el ___ de los ensayos, y no solo su proporción.|orden|ritmo|valor",
      "Según la teoría de Amsel, para que haya frustración el refuerzo debe ___.|esperarse|demorarse|duplicarse"
    ],
    tf: [
      "Una conducta adquirida con refuerzo intermitente resiste más la extinción aunque haya recibido menos refuerzos.|V",
      "Según la teoría secuencial de Capaldi, la frustración anticipada se condiciona como señal para seguir respondiendo.|F|Esa es la teoría de Amsel. Para Capaldi, el recuerdo de los ensayos sin refuerzo se convierte en Ed de la respuesta.",
      "Las teorías de Amsel y de Capaldi son incompatibles: aceptar una obliga a rechazar la otra.|F|No se excluyen: ambas sostienen que en el entrenamiento parcial se aprende a responder en condiciones parecidas a la extinción.",
      "Tras la extinción operante, la respuesta puede volver al cambiar de contexto.|V"
    ],
    q: [
      "Unos padres deciden no ceder ya ante las rabietas de su hijo, que antes solo conseguían lo que quería de vez en cuando. ¿Qué cabe esperar?|Que las rabietas persistan mucho tiempo|Que desaparezcan en pocos días|Que se extingan antes que con refuerzo continuo|Por el EREP, una conducta reforzada solo a veces resiste mucho la extinción.",
      "Una máquina de café que siempre funcionaba a la primera se traga la moneda, y casi nadie insiste. ¿Qué lo explica?|La historia de refuerzo continuo|La frustración anticipada condicionada|El recuerdo de ensayos sin refuerzo|Quien solo ha recibido refuerzo continuo nunca ha aprendido a responder sin refuerzo y abandona pronto.",
      "¿Qué idea comparten las teorías de Amsel y de Capaldi?|Se responde en condiciones parecidas a la extinción|El refuerzo intermitente tiene mayor magnitud|La extinción borra la asociación aprendida antes|En el entrenamiento parcial se aprende a responder en condiciones parecidas a las de la extinción.",
      "¿Qué predicción distingue a la teoría secuencial de la de la frustración?|Que influye el orden de los ensayos|Que se requiere esperar el refuerzo|Que influye la proporción de ensayos|Capaldi predice efectos del orden de los ensayos. La teoría de Amsel requiere que se espere el refuerzo."
    ],
    inc: [
      "Sobre la extinción operante|Borra la asociación entre respuesta y consecuencia|Puede empezar con un aumento breve de la respuesta|Tras un descanso aparece la recuperación espontánea|La extinción no borra lo aprendido: la respuesta vuelve tras un descanso o al cambiar de contexto."
    ],
    seq: [],
    cls: [
      "Teoría del EREP|Amsel (1958): frustración anticipada; requiere que se espere el refuerzo|Capaldi (1966): recuerdo del no refuerzo; depende del orden de los ensayos"
    ] },
  { t: "Ley de igualación",
    tip: "La elección se estudia con programas concurrentes. Herrnstein (1961) halló que la proporción de respuestas a cada alternativa iguala la proporción de refuerzos obtenidos en ella. La ley generalizada de Baum (1974) añade la sensibilidad (s) y el sesgo (b), y la infraigualación (s menor que 1) es la desviación más frecuente. Con el reforzamiento extraño, una conducta puede disminuir si mejora el refuerzo de las alternativas.",
    v: [
      "Ley de igualación=La proporción de respuestas iguala la proporción de refuerzos",
      "Herrnstein (1961)=Formuló la ley con palomas en programas IV concurrentes",
      "Baum (1974)=Propuso la ley generalizada con sensibilidad y sesgo",
      "Sensibilidad (s)=Cuánto cambia la elección con los refuerzos",
      "Sesgo (b)=Preferencia por una alternativa que no se debe a los refuerzos",
      "Infraigualación=Preferencia menos extrema de lo que predice la ley (s menor que 1)",
      "Sobreigualación=Preferencia más extrema de lo que predicen los refuerzos",
      "Reforzamiento extraño=Refuerzo de otras fuentes que entra en la tasa de una sola respuesta"
    ],
    g: [
      "Si una tecla proporciona tres de cada cuatro refuerzos, la paloma le dirige unas ___ de cada cuatro respuestas.|tres|dos|cuatro",
      "Herrnstein usó pares de programas de intervalo ___ concurrentes.|variable|fijo|continuo",
      "Con s igual a 1 hay igualación ___.|perfecta|parcial|inversa",
      "La desviación más frecuente de la ley de igualación es la ___.|infraigualación|sobreigualación|indiferencia",
      "Acudir más a la cafetería que queda de camino, aunque las dos acierten igual con el pedido, refleja el parámetro de ___.|sesgo|sensibilidad|igualación"
    ],
    tf: [
      "Según la ley de igualación, la paloma elige siempre la alternativa que más refuerzos proporciona.|F|No elige siempre la mejor: reparte su conducta en proporción a lo que obtiene de cada alternativa.",
      "En la ley generalizada, la preferencia por una tecla más cómoda se recoge en el parámetro de sensibilidad.|F|Una preferencia que no se debe a los refuerzos, como una tecla más cómoda, es sesgo (b).",
      "Una conducta puede disminuir sin intervenir sobre ella si aumenta el refuerzo de las alternativas.|V",
      "La ley de igualación llevó el análisis operante de las respuestas aisladas a la distribución de la conducta entre opciones.|V"
    ],
    q: [
      "Un adolescente reduce las horas de videojuegos al empezar un deporte que le gusta, sin que nadie limite el juego. ¿Qué concepto lo explica?|El reforzamiento extraño|El sesgo hacia el deporte|La infraigualación del juego|La tasa de una conducta depende de su refuerzo en relación con todo el refuerzo disponible, incluido el de otras fuentes.",
      "En la ley generalizada de Baum, ¿qué indica un valor de s mayor que 1?|Sobreigualación|Infraigualación|Sesgo|Con s mayor que 1 las preferencias son más extremas de lo que predicen los refuerzos. Con s menor que 1, menos extremas.",
      "En varias condiciones, una paloma prefiere la tecla más rica, pero siempre menos de lo que predicen sus refuerzos, sea cual sea el lado. ¿Qué muestra?|Infraigualación|Sobreigualación|Sesgo|La preferencia es menos extrema de lo previsto en ambos lados. El sesgo favorecería siempre la misma alternativa.",
      "¿Qué procedimiento se usa para estudiar la conducta de elección?|Programas concurrentes|Programas encadenados|Programas múltiples|Dos teclas, cada una con su propio programa, están disponibles a la vez."
    ],
    inc: [
      "Sobre la ley de igualación|La infraigualación y el sesgo son el mismo parámetro|La infraigualación aplana la curva hacia la indiferencia|El sesgo desplaza la curva hacia una de las opciones|Confundirlos es una trampa típica: la infraigualación depende de s, y el sesgo es el parámetro b."
    ],
    seq: [],
    cls: [
      "Parámetro de la ley generalizada|Sensibilidad (s): infraigualación; sobreigualación; igualación perfecta|Sesgo (b): tecla más cómoda; lado preferido; cafetería de camino"
    ] },
  { t: "Autocontrol y descuento por demora; el test de la golosina",
    tip: "El autocontrol es elegir una recompensa mayor y demorada frente a una menor e inmediata. El valor cae con la demora según una función hiperbólica (Mazur, 1987), lo que predice la inversión de preferencias (Ainslie, 1975) y justifica el compromiso previo. El test de la golosina predice poco: con controles, la asociación se redujo en unos dos tercios (Watts, Duncan y Quan, 2018), y la espera depende también de la fiabilidad del adulto.",
    v: [
      "Autocontrol=Elegir una recompensa mayor y demorada frente a una menor e inmediata",
      "Impulsividad=Elegir la recompensa menor e inmediata frente a la mayor y demorada",
      "Descuento por demora=Pérdida de valor subjetivo de una recompensa cuanto más tarde llega",
      "Parámetro k=Cuanto mayor es, más rápido pierde valor lo demorado",
      "Inversión de preferencias=Cambio hacia lo pequeño e inmediato cuando se aproxima (Ainslie, 1975)",
      "Compromiso previo=Decidir con antelación y eliminar la tentación antes de que llegue",
      "Rachlin y Green (1972)=Mostraron con palomas la elección anticipada que elimina la tentación",
      "Kidd, Palmeri y Aslin (2013)=Hallaron unas cuatro veces más espera si el adulto había sido fiable"
    ],
    g: [
      "Mazur (1987) describió el descuento por demora con una función ___.|hiperbólica|exponencial|lineal",
      "Una función ___, con tasa de descuento constante, no predice el cruce de preferencias.|exponencial|hiperbólica|logarítmica",
      "Un parámetro de descuento elevado se asocia con las ___.|adicciones|fobias|obsesiones",
      "Watts, Duncan y Quan (2018) replicaron el test con una muestra de ___ niños.|918|128|75",
      "En esa réplica, casi toda la asociación procedía de distinguir a quienes esperaban al menos ___ segundos.|20|15|60"
    ],
    tf: [
      "Según Watts, Duncan y Quan (2018), la asociación entre espera y rendimiento desaparecía por completo con controles.|F|Se redujo en unos dos tercios: quedó una asociación pequeña, no nula.",
      "Sin controles, la réplica de Watts, Duncan y Quan halló aproximadamente la mitad de la asociación original.|V",
      "Una función exponencial de descuento predice la inversión de preferencias.|F|La predice la función hiperbólica. Una exponencial, con tasa constante, no produce el cruce de las curvas.",
      "Sigue en debate si el parámetro k es un rasgo estable o depende del contexto.|V"
    ],
    q: [
      "El domingo, Álex decide madrugar el lunes para correr, pero al sonar el despertador se queda en la cama. ¿Qué lo explica mejor?|La inversión de preferencias|La ley de igualación con sesgo|El efecto del refuerzo parcial|Al acercarse la recompensa inmediata, su valor supera al de la demorada, como predice el descuento hiperbólico.",
      "Antes de ponerse a estudiar, Irene deja el móvil en otra habitación. ¿Qué estrategia aplica?|Compromiso previo|Descuento exponencial|Reforzamiento extraño|Decide cuando ambas opciones están lejos y elimina la tentación antes de que llegue, como las palomas de Rachlin y Green.",
      "En la función de Mazur, ¿qué implica un valor de k más alto?|Una elección más impulsiva|Una elección con más autocontrol|Una demora percibida más corta|Cuanto mayor es k, más rápido pierde valor lo demorado y más impulsiva es la elección.",
      "¿Qué concluyó la réplica de Watts, Duncan y Quan (2018) sobre el test de la golosina?|Que la asociación es pequeña con controles|Que la espera predice bien el éxito vital|Que la asociación se duplica con controles|Al controlar el entorno familiar y la capacidad cognitiva, la asociación se redujo en unos dos tercios."
    ],
    inc: [
      "Sobre el test de la golosina|La espera depende solo del autocontrol del niño|La asociación original se halló en estudios de seguimiento|Sin controles, la réplica halló la mitad de la asociación|Esperar es también una decisión sobre si la recompensa llegará: depende de la fiabilidad del adulto."
    ],
    seq: [],
    cls: [
      "Tipo de elección|Autocontrol: recompensa mayor y demorada; seguir estudiando; ahorrar|Impulsividad: recompensa menor e inmediata; mirar el móvil; gastar hoy"
    ] }
] },
{ n: 10, t: "Qué hace que algo refuerce: teorías del refuerzo", cap: 3, pir: "alta", mods: [
  { t: "La reducción del impulso (Hull) y sus problemas",
    tip: "Definir el reforzador solo por su efecto es circular, y las teorías del refuerzo intentan predecir de antemano qué reforzará. Para Hull, la privación crea una necesidad que genera un impulso, y el reforzamiento primario es la reducción de ese impulso. El potencial de reacción depende del impulso por el hábito (D × H). La sacarina, la estimulación cerebral (Olds y Milner, 1954) y la curiosidad llevaron a abandonar la teoría como explicación general.",
    v: [
      "Homeostasis=Tendencia de los organismos a mantener un equilibrio interno",
      "Impulso=Estado de activación generado por una necesidad que pone en marcha la conducta",
      "Reforzamiento primario=Para Hull, la reducción de un impulso",
      "Reforzador secundario=Estímulo que acompaña con regularidad a la reducción del impulso",
      "Potencial de reacción=Depende del producto del impulso por la fuerza del hábito",
      "Olds y Milner (1954)=Ratas que presionaban una palanca para recibir estimulación cerebral",
      "Definición circular=Algo refuerza porque aumenta la conducta, y la aumenta porque refuerza",
      "Estado satisfactorio=Criterio de Thorndike para lo que refuerza, difícil de medir"
    ],
    g: [
      "Para Hull, la privación crea una ___, que genera un impulso.|necesidad|expectativa|asociación",
      "Olds y Milner (1954) vieron que las ratas presionaban una palanca para recibir estimulación ___ en ciertas zonas del cerebro.|eléctrica|química|táctil",
      "La ___ es dulce y refuerza respuestas aunque no reduce ninguna necesidad.|sacarina|glucosa|sal",
      "El ruido del comedero se convierte en reforzador ___ al acompañar a la reducción del impulso.|secundario|primario|natural",
      "Quien se aburre en la sala de espera y abre el móvil busca ___ la estimulación.|aumentar|reducir|mantener"
    ],
    tf: [
      "Según Hull, si el impulso es nulo, ni el hábito más fuerte se traduce en conducta.|V",
      "La estimulación cerebral de Olds y Milner apoyó la teoría de la reducción del impulso.|F|La cuestionó: no había ninguna necesidad que reducir y el animal parecía buscar activarse.",
      "Tras los datos críticos, el concepto de impulso desapareció también del estudio de la motivación.|F|Se abandonó como teoría general del refuerzo, pero el concepto de impulso sigue presente en el estudio de la motivación.",
      "La distinción de Hull entre lo aprendido y lo que activa su ejecución fue una de sus aportaciones más duraderas.|V"
    ],
    q: [
      "Unas ratas aprenden a presionar una palanca para obtener agua con sacarina, que no aporta nutrientes. ¿Qué teoría queda en apuros?|La reducción del impulso|El principio de Premack|La privación de respuesta|La sacarina no reduce ninguna necesidad y, aun así, refuerza, lo que contradice a Hull.",
      "Según Hull, ¿de qué depende el potencial de reacción?|Del impulso por la fuerza del hábito|De la probabilidad de la respuesta|De la restricción bajo la línea base|Es un producto (D × H): si el impulso es nulo, el hábito no se traduce en conducta.",
      "¿Qué problema intentan resolver las teorías del refuerzo?|La circularidad de definir por el efecto|La extinción de la conducta reforzada|La generalización entre estímulos|Si solo se sabe que algo refuerza tras ver que funciona, la explicación es circular. Se busca predecir de antemano.",
      "Tras abandonar la reducción del impulso, ¿qué cambio de pregunta se produjo?|Mirar qué actividades refuerzan|Mirar qué estímulos reducen necesidades|Mirar qué señales predicen comida|En lugar de buscar qué estímulos refuerzan, se pasó a fijarse en qué actividades refuerzan, como hizo Premack."
    ],
    inc: [
      "Sobre la teoría de Hull|Explica bien el refuerzo de la curiosidad|Distingue lo aprendido de lo que activa su ejecución|Se integró en una teoría hipotético-deductiva|La exploración busca aumentar la estimulación, no reducirla, y es uno de los datos que cuestionan a Hull."
    ],
    seq: [
      "Cadena motivacional según Hull|Privación>Necesidad>Impulso>Conducta>Reducción del impulso"
    ],
    cls: [] },
  { t: "El principio de Premack",
    tip: "Premack (1959, 1965) señaló que los reforzadores son en realidad actividades: de dos respuestas, la más probable refuerza a la menos probable si el acceso a la primera depende de la segunda. La probabilidad se mide en una línea base libre. El reforzamiento es relativo y puede predecirse de antemano. Su límite es que a veces refuerza una actividad menos probable, lo que llevó a la privación de respuesta.",
    v: [
      "Principio de Premack=La respuesta más probable refuerza a la menos probable",
      "Línea base libre=Reparto del tiempo entre actividades cuando se puede elegir sin restricciones",
      "Reforzamiento relativo=Ninguna actividad refuerza en términos absolutos",
      "Regla de la abuela=Primero la verdura, luego el postre o el juego",
      "Premack (1959, 1965)=Planteó que lo que refuerza es una respuesta, no un estímulo",
      "Predicción de antemano=Saber qué reforzará midiendo la línea base, sin definición circular",
      "Actividad más probable=La que ocupa más tiempo en la línea base libre",
      "Conducta instrumental=Actividad que hay que realizar para acceder a la otra"
    ],
    g: [
      "Según Premack, no refuerza la comida como objeto, sino la actividad de ___.|comer|buscar|desear",
      "La probabilidad de cada respuesta se mide en una línea ___ libre.|base|media|temporal",
      "Con 120 minutos de videojuegos, 60 de series y 5 de ordenar, ver series puede reforzar ___.|ordenar el cuarto|jugar a videojuegos|ambas actividades",
      "Según Premack, el reforzamiento es ___: depende de con qué conducta se compare.|relativo|absoluto|innato",
      "En modificación de conducta se recurre a Premack cuando no hay reforzadores ___ adecuados.|materiales|sociales|verbales"
    ],
    tf: [
      "Según Premack, ninguna actividad es un reforzador en términos absolutos.|V",
      "Para el principio de Premack, el reforzador es un estímulo cuya presentación se hace contingente.|F|El reforzador es una respuesta: lo contingente es la oportunidad de realizar una actividad.",
      "Según Premack, una actividad menos probable puede reforzar a otra más probable si se restringe lo suficiente.|F|Esa es la predicción de la privación de respuesta. Según Premack, solo la más probable refuerza a la menos probable.",
      "El principio obliga a observar qué hace realmente cada persona, en lugar de suponer qué le gusta.|V"
    ],
    q: [
      "Hugo dedica 50 minutos a dibujar, 30 a leer y 10 a hacer deberes. Según Premack, ¿qué podrá reforzar leer?|Hacer los deberes|Dibujar|Dibujar y hacer los deberes|La actividad más probable refuerza a la menos probable: leer (30 minutos) solo puede reforzar los deberes (10).",
      "¿Qué ventaja práctica tiene el principio de Premack?|Predecir el reforzador midiendo la línea base|Evitar medir la conducta antes de intervenir|Usar siempre reforzadores materiales tangibles|Basta con medir la línea base libre para saber qué actividad podrá reforzar a cuál.",
      "Una maestra deja salir al patio solo a quien termine las fichas. ¿Qué principio aplica?|El principio de Premack|La reducción del impulso|La ley de igualación|Una actividad preferida, salir al patio, se usa como consecuencia de otra menos preferida.",
      "¿Qué limitación del principio de Premack condujo a la hipótesis de privación de respuesta?|A veces refuerza la actividad menos probable|Su definición del reforzador resulta circular|No permite medir la línea base libre|Hay casos en que una actividad menos probable refuerza y otra más probable no refuerza nada."
    ],
    inc: [
      "Sobre el principio de Premack|La actividad preferida refuerza a cualquier otra conducta|El reforzador es la oportunidad de realizar una actividad|La probabilidad se mide en una línea base libre|El reforzamiento es relativo: una actividad solo refuerza a las que son menos probables que ella."
    ],
    seq: [],
    cls: [] },
  { t: "Privación de respuesta y regulación conductual",
    tip: "Timberlake y Allison (1974) propusieron que una actividad refuerza cuando el programa la restringe por debajo de su línea base, sea o no la más probable. Forma parte de la regulación conductual: el organismo redistribuye su conducta para acercarse al punto de bienestar y suele quedarse en un compromiso. La economía conductual trata los reforzadores como bienes, con un precio y una demanda elástica o inelástica.",
    v: [
      "Privación de respuesta=Una actividad refuerza si el programa la restringe bajo su línea base",
      "Timberlake y Allison (1974)=Autores de la hipótesis que se centra en la restricción",
      "Punto de bienestar=Distribución preferida de actividades que el organismo intenta mantener",
      "Regulación conductual=Enfoque en que el refuerzo resulta de redistribuir la conducta",
      "Demanda inelástica=El consumo apenas baja aunque cueste más obtener el reforzador",
      "Demanda elástica=Al subir el precio, el consumo cae mucho",
      "Sustitutos=Reforzadores que pueden reemplazarse entre sí, como dos plataformas de series",
      "Complementarios=Reforzadores que se consumen juntos, como las palomitas y el cine"
    ],
    g: [
      "En economía conductual, la cantidad de respuesta que exige el programa equivale al ___.|precio|bien|consumo",
      "La elasticidad de la demanda depende sobre todo de las ___.|alternativas|necesidades|preferencias",
      "Normalmente la redistribución termina en un ___: más conducta instrumental, sin recuperar todo lo perdido.|compromiso|abandono|bloqueo",
      "Una actividad más probable no reforzará si el programa la permite al menos tanto como en la ___.|línea base|extinción|privación",
      "En las adicciones se insiste en aumentar el acceso a reforzadores ___ a la droga.|alternativos|complementarios|secundarios"
    ],
    tf: [
      "Según la privación de respuesta, una actividad menos probable puede reforzar a otra más probable si se restringe lo suficiente.|V",
      "Según la regulación conductual, el organismo abandona su punto de bienestar en cuanto se impone un programa.|F|Redistribuye su conducta para quedarse lo más cerca posible del punto de bienestar.",
      "Si una plataforma de series sube de precio y se pasa a otra, ambas son reforzadores complementarios.|F|Son sustitutos, que se reemplazan entre sí. Los complementarios se consumen juntos, como palomitas y cine.",
      "En la hipótesis de privación de respuesta, lo decisivo es la restricción respecto a la línea base.|V"
    ],
    q: [
      "Una estudiante estudia 60 minutos y juega 15 en línea base. Sus padres le dan 1 minuto de juego por cada 8 de estudio. ¿Qué cabe esperar?|Que estudie algo más de 60 minutos|Que estudie menos, pues jugar es menos probable|Que no cambie, porque estudiar es más probable|Con 60 minutos solo obtendría 7,5 de juego. Restringido bajo su línea base, el juego refuerza el estudio.",
      "¿Qué predice la privación de respuesta si una actividad más probable no queda restringida por el programa?|Que no reforzará|Que reforzará siempre|Que reforzará más|Si el programa permite realizarla tanto o más que en la línea base, no hay privación y no refuerza.",
      "¿Qué diferencia a Timberlake y Allison de Premack?|Lo decisivo es la restricción, no la probabilidad|Lo decisivo es la probabilidad, no la restricción|Lo decisivo es la necesidad, no la actividad|Para la privación de respuesta, refuerza la actividad restringida bajo su línea base, sea o no la más probable.",
      "Un fumador sigue comprando tabaco aunque su precio suba mucho. En términos de economía conductual, su demanda es…|inelástica|elástica|complementaria|El consumo apenas baja aunque cueste más obtener el reforzador."
    ],
    inc: [
      "Sobre la regulación conductual|El efecto reforzador es independiente de la restricción|El programa impide alcanzar el punto de bienestar|El organismo redistribuye su conducta tras la restricción|El aumento de la conducta instrumental es justo el resultado del reajuste ante la restricción."
    ],
    seq: [],
    cls: [
      "Teoría del refuerzo|Premack: probabilidad relativa; la actividad más probable refuerza|Privación de respuesta: restricción bajo la línea base; punto de bienestar"
    ] },
  { t: "Contraste, aprendizaje latente, acciones frente a hábitos y sobrejustificación",
    tip: "El valor de un reforzador se juzga respecto a lo esperado: el contraste negativo (Crespi, 1942) es más robusto que el positivo. El aprendizaje latente (Tolman y Honzik, 1930) muestra aprendizaje sin refuerzo. Tras la devaluación, las acciones dependen del valor de la consecuencia y los hábitos sobreentrenados no. Según Deci, Koestner y Ryan (1999), las recompensas tangibles y esperadas reducen la motivación intrínseca y el elogio verbal la aumenta, aunque el alcance del efecto se debate.",
    v: [
      "Contraste negativo=Peor ejecución al pasar de un reforzador grande a uno pequeño que con el pequeño siempre",
      "Crespi (1942)=Cambió la cantidad de comida a ratas que recorrían un corredor",
      "Aprendizaje latente=Aprendizaje sin refuerzo que solo se manifiesta cuando hay motivo",
      "Tolman y Honzik (1930)=Laberinto con un grupo que recibía comida solo desde el día 11",
      "Devaluación=Emparejar la comida con malestar por cloruro de litio",
      "Acción dirigida a meta=Respuesta R-C sensible al valor actual de la consecuencia",
      "Hábito=Respuesta E-R insensible a la devaluación, surgida con sobreentrenamiento",
      "Sobrejustificación=Menos tiempo libre dedicado a una tarea tras premiarla"
    ],
    g: [
      "El contraste ___ es menos robusto que el negativo.|positivo|latente|inverso",
      "Las acciones dependen del estriado dorsomedial y los hábitos, del ___.|dorsolateral|ventral|ventromedial",
      "En el metaanálisis de Deci, Koestner y Ryan (1999), el elogio verbal ___ la motivación intrínseca.|aumentó|redujo|no alteró",
      "Lepper, Greene y Nisbett (1973) prometían un premio a niños de preescolar por ___.|dibujar|leer|cantar",
      "Con entrenamiento moderado, tras la devaluación la respuesta ___.|disminuía|aumentaba|se mantenía"
    ],
    tf: [
      "En el estudio de Tolman y Honzik, el grupo recompensado desde el día 11 mejoró de forma gradual a partir de ese día.|F|Sus errores cayeron casi de golpe hasta igualar al grupo siempre recompensado: ya había aprendido.",
      "Tras sobreentrenar una respuesta, devaluar la comida apenas reduce la presión de palanca.|V",
      "Según Deci, Koestner y Ryan (1999), cualquier recompensa reduce la motivación intrínseca.|F|Las tangibles y esperadas la reducían, las inesperadas no mostraron efecto fiable y el elogio verbal la aumentó.",
      "Cameron y Pierce (1994) defendieron que el efecto de sobrejustificación es limitado.|V"
    ],
    q: [
      "Tras una subida de sueldo grande, una trabajadora recibe al año siguiente una pequeña y rinde peor que quien siempre las recibió pequeñas. ¿Qué fenómeno muestra?|Contraste negativo|Aprendizaje latente|Sobrejustificación|El valor de un reforzador se juzga en relación con lo que se esperaba.",
      "Unas ratas sobreentrenadas siguen presionando la palanca tras devaluar la comida con cloruro de litio. ¿Qué indica?|Que la respuesta es un hábito E-R|Que es una acción dirigida a meta|Que la devaluación no tuvo efecto|Con sobreentrenamiento la respuesta pasa a control E-R y no depende del valor actual de la consecuencia.",
      "¿Qué concluyeron Tolman y Honzik a partir del grupo recompensado desde el día 11?|La recompensa afecta sobre todo a la ejecución|La recompensa es imprescindible para el aprendizaje|El aprendizaje empieza al recibir la comida|Las ratas habían aprendido el laberinto sin refuerzo, y la recompensa solo cambió la ejecución.",
      "Según el metaanálisis de Deci, Koestner y Ryan, ¿qué recompensas no mostraron un efecto fiable sobre la motivación intrínseca?|Las inesperadas|Las tangibles esperadas|El elogio verbal|Las tangibles esperadas la reducían y el elogio verbal la aumentaba. Las inesperadas no tuvieron efecto fiable."
    ],
    inc: [
      "Sobre la sobrejustificación|El elogio verbal reduce la motivación intrínseca|Las recompensas tangibles y esperadas la reducen|Su alcance sigue siendo objeto de debate|Según Deci, Koestner y Ryan (1999), el elogio verbal aumentó la motivación intrínseca."
    ],
    seq: [],
    cls: [
      "Forma de control|Acción dirigida a meta: asociación R-C; entrenamiento moderado; estriado dorsomedial|Hábito: asociación E-R; sobreentrenamiento; estriado dorsolateral"
    ] }
] },
{ n: 11, t: "Control aversivo: evitación, castigo e indefensión", cap: 3, pir: "alta", mods: [
  { t: "Escape y evitación: la teoría bifactorial y sus problemas",
    tip: "El escape termina un aversivo presente, y la evitación impide que llegue. Ambos se mantienen por reforzamiento negativo. Para Mowrer (1947), la señal provoca miedo por condicionamiento pavloviano y la respuesta se refuerza al reducirlo. La teoría explica mal la evitación persistente sin miedo aparente (Solomon y Wynne, 1953) y la de Sidman, sin señal externa. Otras propuestas son las señales de seguridad y las expectativas.",
    v: [
      "Escape=Respuesta que termina un estímulo aversivo ya presente",
      "Evitación=Respuesta que impide que el estímulo aversivo llegue a presentarse",
      "Caja lanzadera=Aparato de dos compartimentos usado en la evitación señalada",
      "Evitación de Sidman=Sin señal externa, cada respuesta pospone la siguiente descarga",
      "Teoría bifactorial=La señal provoca miedo y la respuesta se refuerza al reducirlo",
      "Solomon y Wynne (1953)=Perros que evitaban cientos de ensayos sin descargas ni apenas miedo",
      "Señales de seguridad=Estímulos tras la respuesta que anuncian un periodo sin peligro",
      "Teoría cognitiva=El animal aprende expectativas que nunca llega a corregir"
    ],
    g: [
      "Según Mowrer, el animal no evita la descarga futura, sino que escapa del ___.|miedo|dolor|ruido",
      "En la teoría bifactorial, el primer factor es ___.|pavloviano|instrumental|vicario",
      "En la evitación de Sidman, las descargas llegan a intervalos ___ si el animal no responde.|fijos|variables|crecientes",
      "Coger el paraguas antes de salir es un ejemplo de ___.|evitación|escape|castigo",
      "Para salvar la teoría bifactorial ante la evitación de Sidman se propuso que el ___ desde la última respuesta actúa como señal interna.|paso del tiempo|número de descargas|cambio de contexto"
    ],
    tf: [
      "En la caja lanzadera, lo habitual es que el animal evite desde el primer ensayo.|F|Lo habitual es que escape en los primeros ensayos y aprenda a evitar después.",
      "En la evitación de Sidman, los animales acaban respondiendo con regularidad y reciben muy pocas descargas.|V",
      "Según la teoría bifactorial, la evitación debería extinguirse, porque cada evitación presenta la señal sin descarga.|V",
      "Solomon y Wynne observaron que la evitación se extinguía pronto al retirar las descargas.|F|Los perros siguieron evitando durante cientos de ensayos sin descargas y con pocos signos de miedo."
    ],
    q: [
      "Quien evita los ascensores por miedo nunca comprueba que no son peligrosos. ¿Qué explicación de la evitación ilustra mejor?|La teoría cognitiva de las expectativas|La teoría de las señales de seguridad|La teoría de la preparación biológica|Como sigue evitando, nunca comprueba que el aversivo ya no llega, y la expectativa no se corrige.",
      "Marta se quita unos zapatos que le aprietan. ¿Qué tipo de conducta es?|Escape|Evitación|Castigo negativo|La respuesta termina un estímulo aversivo que ya está presente. Evitar sería impedir que llegue.",
      "En la teoría bifactorial de Mowrer, ¿en qué consiste el segundo factor?|Reforzamiento negativo al reducir el miedo|Condicionamiento pavloviano del miedo|Castigo positivo de las respuestas de huida|El primer factor es pavloviano. El segundo es instrumental: la respuesta que termina la señal reduce el miedo.",
      "¿Qué problema plantea la evitación de Sidman a la teoría bifactorial?|No hay un EC externo que provoque miedo|Los animales reciben demasiadas descargas|La respuesta se aprende en un solo ensayo|Sin señal no hay nada que provoque miedo condicionado. Los defensores apelaron a una señal interna temporal."
    ],
    inc: [
      "Sobre la evitación|Se refuerza porque la descarga sigue a la respuesta|Plantea cómo puede reforzar algo que no ocurre|La teoría bifactorial combina los dos condicionamientos|En la evitación la respuesta impide la descarga. El enigma es precisamente reforzar con una ausencia."
    ],
    seq: [
      "Teoría bifactorial de Mowrer|La señal se empareja con la descarga>La señal provoca miedo>La respuesta termina la señal>El miedo se reduce y la respuesta se refuerza"
    ],
    cls: [
      "Conducta controlada por un aversivo|Escape: quitarse unos zapatos que aprietan; salir de una sala ruidosa|Evitación: coger el paraguas; adelantar la salida para no encontrar atasco"
    ] },
  { t: "Reacciones de defensa específicas de la especie",
    tip: "La facilidad de la evitación depende de la respuesta exigida: las ratas evitan pronto corriendo o saltando y muy despacio presionando una palanca. Bolles (1970) lo explicó con las reacciones de defensa específicas de la especie: huir, inmovilizarse y luchar. Una presa no puede aprender por ensayo y error, así que las defensas deben estar disponibles desde el principio. Es otra restricción biológica frente a la equipotencialidad.",
    v: [
      "RDEE=Respuestas defensivas innatas propias de cada especie ante una amenaza",
      "Bolles (1970)=Explicó la evitación por las reacciones defensivas innatas",
      "Congelación=Inmovilidad que reduce la probabilidad de ser detectado",
      "Huida=Alejarse de la fuente de peligro",
      "Lucha=Amenazar o atacar cuando no hay otra salida",
      "Equipotencialidad=Cualquier respuesta se asocia igual de fácil a cualquier consecuencia",
      "Restricciones biológicas=Límites al aprendizaje que dependen de la historia evolutiva",
      "Medida del miedo=Tiempo que la rata permanece inmóvil ante un EC"
    ],
    g: [
      "Ante una amenaza, el repertorio del animal se ___ a unas pocas respuestas defensivas.|reduce|amplía|invierte",
      "Presionar una palanca es ___ con las reacciones defensivas de la rata.|incompatible|compatible|idéntico",
      "La congelación se usa como medida del miedo ___ en las ratas.|condicionado|innato|vicario",
      "Según Bolles, aprender a evitar consiste más en ___ la respuesta defensiva que funciona.|seleccionar|fortalecer|inventar",
      "La deriva instintiva de los Breland también cuestionó la ___.|equipotencialidad|contigüidad|contingencia"
    ],
    tf: [
      "Las ratas aprenden con dificultad a presionar una palanca incluso cuando se refuerza con comida.|F|La adquieren sin problemas con comida. La dificultad aparece cuando se exige para evitar una descarga.",
      "Para Bolles, una presa no puede aprender por ensayo y error a librarse de un depredador.|V",
      "La teoría bifactorial ya predecía que la facilidad de la evitación depende de la respuesta exigida.|F|Era un dato que la teoría no preveía, y Bolles lo explicó con las reacciones de defensa de cada especie.",
      "Quedarse paralizado un instante ante un estruendo es una reacción defensiva que no ha tenido que aprenderse.|V"
    ],
    q: [
      "Un investigador quiere que unas ratas aprendan cuanto antes a evitar una descarga. ¿Qué respuesta debería exigir?|Saltar fuera del compartimento|Presionar una palanca con la pata|Pulsar un botón dentro de la caja|Saltar o correr coincide con la huida, una reacción defensiva de la rata, y se aprende en pocos ensayos.",
      "¿Por qué, según Bolles, aprenden tan despacio las ratas a evitar presionando una palanca?|La rata asustada tiende a inmovilizarse|La palanca está asociada a la comida|La descarga es demasiado débil|Presionar una palanca es incompatible con sus reacciones defensivas, sobre todo con la congelación.",
      "¿Qué tres reacciones de defensa principales se describen en la rata?|Huir, inmovilizarse y luchar|Huir, explorar y esconderse|Luchar, vocalizar y huir|Ante una amenaza, el repertorio de la rata se reduce a huir, inmovilizarse (congelación) y luchar.",
      "¿Qué tipo de argumento sostiene la propuesta de Bolles?|Evolutivo|Cognitivo|Fisiológico|El primer error ante un depredador puede ser el último, así que las defensas eficaces deben ser innatas."
    ],
    inc: [
      "Sobre las RDEE|Se adquieren por ensayo y error ante cada amenaza|Reducen el repertorio a unas pocas respuestas|Son innatas y propias de cada especie|Son innatas: deben estar disponibles desde el principio, porque el primer error puede ser el último."
    ],
    seq: [],
    cls: [
      "Respuesta exigida a la rata|Evitación rápida: correr; saltar fuera del compartimento|Evitación muy lenta: presionar una palanca"
    ] },
  { t: "El castigo: cuándo funciona y el castigo físico infantil",
    tip: "El castigo reduce la conducta: es positivo si se presenta algo aversivo y negativo si se retira algo apetitivo, como en el tiempo fuera o el coste de respuesta. No debe confundirse con el reforzamiento negativo, que la aumenta. Azrin y Holz (1966) mostraron que funciona si es intenso desde el principio, inmediato, continuo y sin señal que lo restrinja. El castigo físico infantil se asocia a peores resultados (Gershoff y Grogan-Kaylor, 2016).",
    v: [
      "Castigo=Consecuencia que reduce la probabilidad de la respuesta a la que sigue",
      "Castigo positivo=Presentar algo aversivo tras la conducta",
      "Castigo negativo=Retirar algo apetitivo tras la conducta",
      "Tiempo fuera=Retirar durante un rato el acceso a los reforzadores del entorno",
      "Coste de respuesta=Retirar una cantidad de un reforzador ya obtenido, como fichas",
      "Azrin y Holz (1966)=Revisaron las condiciones que hacen eficaz el castigo",
      "Gershoff y Grogan-Kaylor=Metaanálisis de 2016 sobre el azote con 160.927 niños",
      "Modelado de la agresión=Quien castiga con violencia muestra cómo resolver conflictos con ella"
    ],
    g: [
      "Si la intensidad del castigo sube poco a poco, el organismo se ___.|acostumbra|sensibiliza|desinhibe",
      "El castigo intermitente es ___ eficaz que el continuo.|menos|más|igual de",
      "En el metaanálisis de 2016, el tamaño del efecto medio del azote fue de d ___.|0,33|0,12|0,50",
      "De 17 resultados analizados, ___ fueron significativos, todos en la dirección perjudicial.|13|17|9",
      "Retirar puntos por mal comportamiento es un ejemplo de ___.|coste de respuesta|tiempo fuera|castigo positivo"
    ],
    tf: [
      "El reforzamiento negativo es un tipo de castigo que consiste en retirar algo agradable.|F|El reforzamiento negativo aumenta la conducta, y el castigo la reduce. Confundirlos es la trampa más repetida.",
      "En el laboratorio, un castigo que cumple las condiciones de Azrin y Holz suprime la conducta de forma eficaz.|V",
      "En el metaanálisis de Gershoff y Grogan-Kaylor, el azote se asoció con más obediencia a largo plazo.|F|Ningún resultado se asoció con más obediencia a largo plazo: los significativos fueron todos perjudiciales.",
      "Los datos sobre castigo físico infantil son correlacionales y longitudinales, y hay reanálisis críticos sobre su magnitud.|V"
    ],
    q: [
      "Un niño solo recibe reprimendas cuando está su padre, y aprende a portarse bien únicamente delante de él. ¿Qué condición de Azrin y Holz se ha incumplido?|Que no haya una señal discriminativa|Que el castigo sea inmediato|Que haya una alternativa reforzada|Si solo se castiga ante una señal, la conducta se suprime solo en su presencia.",
      "Al reñir a un niño por una rabieta, sus padres acaban dándole lo que pedía. ¿Por qué falla el castigo?|La conducta sigue obteniendo su reforzador|El castigo no es lo bastante intenso|El castigo no se aplica de forma inmediata|Si la conducta castigada sigue obteniendo su reforzador, se mantiene.",
      "A una adolescente le retiran el móvil una semana por llegar tarde. ¿Qué es?|Castigo negativo|Castigo positivo|Reforzamiento negativo|Se retira algo apetitivo para reducir una conducta. El reforzamiento negativo la aumentaría.",
      "¿Por qué no hay experimentos sobre el castigo físico infantil?|No sería ético asignar niños a recibir azotes|El efecto es demasiado pequeño para medirse|Los padres no informan bien de sus castigos|Por eso los datos son correlacionales y longitudinales, aunque su convergencia apoya una interpretación causal considerable."
    ],
    inc: [
      "Sobre la eficacia del castigo|Conviene aumentar su intensidad de forma gradual|Debe aplicarse cada vez que aparece la conducta|Ayuda ofrecer una alternativa reforzada|Debe ser intenso desde el principio. Si sube poco a poco, el organismo se acostumbra."
    ],
    seq: [],
    cls: [
      "Consecuencia|Castigo positivo: multa; reprimenda|Castigo negativo: tiempo fuera; coste de respuesta|Reforzamiento negativo: escape; evitación"
    ] },
  { t: "Indefensión aprendida y su reformulación",
    tip: "En el diseño triádico, los perros acoplados recibían las mismas descargas que los escapables, pero sin control, y después no aprendían a escapar: lo crítico es la incontrolabilidad. Una experiencia previa de control inmuniza. Abramson, Seligman y Teasdale (1978) añadieron las atribuciones. Maier y Seligman (2016) concluyeron que la pasividad es la respuesta por defecto y que lo que se aprende es el control.",
    v: [
      "Diseño triádico=Comparación de grupos escapable, acoplado y sin descarga",
      "Grupo acoplado=Recibe las mismas descargas que el escapable sin poder controlarlas",
      "Inmunización=Protección gracias a una experiencia previa de control",
      "Reformulación atribucional=Importa cómo explica la persona su falta de control (1978)",
      "Atribución global=Explicación del tipo «me pasa en todo»",
      "Núcleo dorsal del rafe=Se activa ante un aversivo prolongado y produce pasividad",
      "Prefrontal ventromedial=Corteza que detecta el control e inhibe el rafe",
      "Maier y Seligman (2016)=Concluyeron que la teoría original lo había entendido al revés"
    ],
    g: [
      "En el diseño triádico, el grupo clave para comparar con el escapable es el ___.|acoplado|no tratado|de control",
      "Según la reformulación de 2016, el rafe actúa mediante la liberación de ___.|serotonina|dopamina|noradrenalina",
      "En la segunda fase, los perros podían escapar en una caja ___.|lanzadera|de Skinner|problema",
      "Las atribuciones internas, estables y ___ se asocian a un mayor riesgo de depresión.|globales|específicas|externas",
      "Según Maier y Seligman (2016), la pasividad es la respuesta por ___ ante un aversivo prolongado.|defecto|aprendizaje|imitación"
    ],
    tf: [
      "El déficit del grupo acoplado se debe a que recibió más descargas que el escapable.|F|Ambos recibieron las mismas descargas: la causa era la incontrolabilidad, no el dolor sufrido.",
      "Según Maier y Seligman (2016), lo que se aprende en la indefensión es la pasividad.|F|Según la reformulación, la pasividad es la respuesta por defecto. Lo que se aprende es la detección del control.",
      "La inmunización encaja con la reformulación de 2016, porque el control previo deja preparado el circuito que inhibe el rafe.|V",
      "Seligman y Maier (1967) y Overmier y Seligman (1967) descubrieron la indefensión trabajando con perros.|V"
    ],
    q: [
      "Dos perros reciben descargas idénticas: uno puede terminarlas presionando un panel y el otro no. Después, en la caja lanzadera, solo el segundo no escapa. ¿Qué explica el déficit?|La incontrolabilidad|La intensidad del dolor|La extinción del miedo|Ambos recibieron la misma cantidad de descargas, así que la causa no puede ser el dolor, sino la falta de control.",
      "Según la reformulación de 2016, ¿qué hace la corteza prefrontal ventromedial cuando hay control?|Inhibe el núcleo dorsal del rafe|Activa el núcleo dorsal del rafe|Libera serotonina en el estriado|Registra que la respuesta influye en el resultado e inhibe el rafe, que de otro modo produciría pasividad.",
      "Tras suspender, Pablo piensa «soy torpe, siempre será así y me pasa en todo». Según la reformulación atribucional, ¿qué patrón muestra?|Interno, estable y global|Externo, inestable y específico|Interno, inestable y global|Las atribuciones internas, estables y globales se asocian a un mayor riesgo de depresión.",
      "¿Qué explicación ofrecía la teoría original (1967) de la indefensión?|Una expectativa de incontrolabilidad aprendida|Una respuesta pasiva por defecto del rafe|Una falta de detección del control prefrontal|Los animales aprendían que sus respuestas no influían, y esa expectativa producía los déficits."
    ],
    inc: [
      "Sobre la reformulación de 2016|El grupo acoplado aprende a ser pasivo|La pasividad es la respuesta por defecto|El mecanismo implica al núcleo dorsal del rafe|El grupo acoplado no aprende a ser pasivo: simplemente no aprende el control que le permitiría dejar de serlo."
    ],
    seq: [],
    cls: [
      "Teoría de la indefensión|Original (1967): pasividad aprendida; expectativa de incontrolabilidad|Reformulación (2016): pasividad por defecto; se aprende el control; rafe y prefrontal ventromedial"
    ] }
] },
{ n: 12, t: "Control de estímulos, límites biológicos y bases neurales", cap: 3, pir: "media", mods: [
  { t: "Generalización, discriminación y desplazamiento del vértice",
    tip: "La generalización sigue un gradiente: la respuesta es máxima ante el estímulo entrenado y baja al alejarse de él (Guttman y Kalish, 1956). La discriminación entre E+ y E− agudiza el gradiente. Tras ella, el máximo se desplaza lejos del E− (Hanson, 1959), lo que Spence (1937) explicó por la interacción de un gradiente excitatorio y otro inhibitorio. Terrace (1963) logró el aprendizaje sin errores introduciendo el E− de forma gradual.",
    v: [
      "Control de estímulos=La conducta cambia según los estímulos presentes",
      "Gradiente de generalización=Descenso de la respuesta al alejarse el estímulo de prueba del entrenado",
      "Guttman y Kalish (1956)=Gradiente simétrico en palomas con distintas longitudes de onda",
      "Desplazamiento del vértice=Tras discriminar E+ y E−, el máximo de respuesta se aleja del E−",
      "Interacción de gradientes=Respuesta neta como diferencia entre excitación e inhibición",
      "Transposición=Volver a elegir el gris más claro ante una pareja nueva",
      "Aprendizaje sin errores=Introducir el E− de forma gradual para casi no responder ante él",
      "Hanson (1959)=Descubrió el desplazamiento del vértice tras una discriminación con palomas"
    ],
    g: [
      "Hanson (1959) entrenó a palomas con un E+ de ___.|550 nm|500 nm|600 nm",
      "Con un E− de longitud de onda mayor, el vértice se desplazó hacia longitudes de onda ___.|menores|mayores|iguales",
      "El entrenamiento discriminativo ___ el gradiente de generalización.|agudiza|aplana|invierte",
      "Köhler interpretó la transposición como aprendizaje de una ___.|relación|asociación|respuesta",
      "Para lograr el aprendizaje sin errores, Terrace introducía el E− mediante ___.|desvanecimiento|moldeamiento|encadenamiento"
    ],
    tf: [
      "Tras la discriminación entre E+ y E−, el nuevo vértice se desplaza hacia el E−.|F|Se desplaza lejos del E−. Situarlo hacia el E− es una trampa típica.",
      "En el desplazamiento del vértice, la tasa en el nuevo máximo es mayor que la del grupo control.|V",
      "Spence explicó la transposición suponiendo que el animal aprende relaciones entre estímulos.|F|Spence mostró que la interacción de gradientes produce el mismo resultado sin suponer aprendizaje de relaciones.",
      "El gradiente de Guttman y Kalish descendía de forma simétrica a ambos lados del estímulo entrenado.|V"
    ],
    q: [
      "Unas palomas aprenden a picotear ante una luz de 550 nm (E+) y no ante otra cercana de longitud de onda mayor (E−). ¿Dónde responderán más en la prueba?|Por debajo de 550 nm|Justo en 550 nm|Entre el E+ y el E−|Es el desplazamiento del vértice: el máximo se aleja del E−, hacia longitudes de onda menores.",
      "Según Spence, ¿por qué la respuesta ante el E+ puede ser menor que ante un estímulo cercano?|En el E+ aún actúa bastante inhibición|El E+ pierde excitación con la práctica|El E+ se generaliza hacia el E−|El E+ está cerca del E−. Un estímulo algo más alejado conserva la excitación y recibe menos inhibición.",
      "Para enseñar a distinguir la «b» de la «d», una maestra destaca mucho la diferencia al principio y retira las ayudas después. ¿Qué técnica aplica?|Aprendizaje sin errores|Moldeamiento|Desplazamiento del vértice|Reduce los errores introduciendo la dificultad de forma gradual, como en el desvanecimiento de Terrace.",
      "¿Qué ventaja tiene el aprendizaje sin errores?|Evita efectos emocionales del no refuerzo|Aumenta la generalización al E− cercano|Elimina la necesidad de un E+ estable|Además de reducir los errores, evita los efectos emocionales que suelen acompañar al no reforzamiento."
    ],
    inc: [
      "Sobre el control de estímulos|El entrenamiento discriminativo aplana el gradiente|El Ed señala que la respuesta será reforzada|El gradiente es máximo ante el estímulo entrenado|El entrenamiento discriminativo agudiza el gradiente: el animal responde menos a los estímulos alejados del E+."
    ],
    seq: [],
    cls: [
      "Explicación de la transposición|Spence (1937): interacción de gradientes; excitación e inhibición|Köhler: aprendizaje de relaciones; elegir el más claro"
    ] },
  { t: "Deriva instintiva",
    tip: "Keller y Marian Breland, discípulos de Skinner, describieron en «The misbehavior of organisms» (1961) cómo algunas conductas adiestradas se deterioraban. Los mapaches frotaban las monedas y los cerdos las hozaban, aunque eso retrasaba la comida. Las monedas, emparejadas con la comida, activaban pautas instintivas de alimentación. La deriva instintiva cuestiona la arbitrariedad de las respuestas y revela procesos pavlovianos en el operante.",
    v: [
      "Deriva instintiva=Las pautas de alimentación de la especie se imponen a la contingencia de refuerzo",
      "Keller y Marian Breland=Discípulos de Skinner que adiestraban animales con fines comerciales",
      "The misbehavior of organisms=Artículo de 1961 cuyo título juega con un libro de Skinner",
      "Hozar=Pauta natural del cerdo al buscar comida con el hocico",
      "Frotar el alimento=Pauta natural del mapache que reaparecía con las monedas",
      "Arbitrariedad de las respuestas=Supuesto de que cualquier respuesta sirve con cualquier reforzador",
      "Monedas emparejadas=Señales de comida que provocan respuestas propias de la alimentación",
      "Repertorio instintivo=Lo que, según los Breland, hay que conocer para entender la conducta"
    ],
    g: [
      "Los mapaches debían depositar monedas en una ___ para obtener comida.|hucha|charca|madriguera",
      "Los cerdos debían llevar monedas de ___ hasta una hucha.|madera|metal|plástico",
      "Frotar o hozar las monedas ___ la llegada del reforzador.|retrasaba|adelantaba|aseguraba",
      "Según la ley del efecto, esas conductas no reforzadas deberían haberse ___.|debilitado|fortalecido|generalizado",
      "Las monedas provocaban respuestas de alimentación, igual que un ___ provoca una RC.|EC|EI|Ed"
    ],
    tf: [
      "Los Breland fracasaron con la mayoría de las especies que intentaron adiestrar.|F|En general tuvieron éxito. El deterioro apareció solo en algunos casos.",
      "La conducta de frotar las monedas persistía e iba a más aunque retrasaba la comida.|V",
      "La deriva instintiva demuestra que los principios del condicionamiento no son válidos.|F|No los invalida, pero obliga a aplicarlos teniendo en cuenta la especie.",
      "La deriva instintiva sigue la misma lógica pavloviana que el automoldeamiento.|V"
    ],
    q: [
      "Un cerdo adiestrado para llevar monedas a una hucha empieza a dejarlas caer y a lanzarlas con el hocico. ¿Qué fenómeno muestra?|Deriva instintiva|Automoldeamiento|Superstición|La conducta deriva hacia la pauta natural de alimentación de la especie: hozar en busca de comida.",
      "¿Por qué las conductas de los mapaches desafiaban la ley del efecto?|Persistían aunque retrasaban la comida|Se reforzaban de forma accidental|Desaparecían al reforzarlas con comida|No se reforzaban, sino que demoraban el reforzador, y aun así iban a más.",
      "¿Qué explica la aparición de esas conductas instintivas?|La asociación de las monedas con la comida|El refuerzo directo de frotar las monedas|El cansancio tras un adiestramiento largo|Las monedas, emparejadas una y otra vez con la comida, activaban las conductas de alimentación de la especie.",
      "¿Con qué otros hallazgos se agrupa la deriva instintiva como restricción biológica?|Aversión al sabor y RDEE|Ley de igualación y EREP|Contraste y aprendizaje latente|Se suma a la aversión al sabor, la preparación biológica y las reacciones de defensa específicas de la especie."
    ],
    inc: [
      "Sobre la deriva instintiva|Las conductas que aparecían se reforzaban directamente|Cuestiona que cualquier respuesta sirva con cualquier reforzador|Revela procesos pavlovianos en el condicionamiento operante|Esas conductas no se reforzaban: al contrario, demoraban el reforzador."
    ],
    seq: [],
    cls: [
      "Especie de los Breland|Mapache: depositar monedas en una hucha; frotar y retener las monedas|Cerdo: llevar monedas de madera; dejarlas caer y hozarlas"
    ] },
  { t: "Automoldeamiento y superstición",
    tip: "Brown y Jenkins (1968) vieron que las palomas picotean una tecla iluminada que precede a la comida aunque el picoteo no tenga consecuencias. Es un proceso pavloviano: con entrenamiento de omisión, el picoteo persiste aunque cancele la comida (Williams y Williams, 1969). Skinner (1948) atribuyó la superstición al refuerzo accidental, pero Staddon y Simmelhag (1971) hallaron conductas terminales comunes, propias del forrajeo.",
    v: [
      "Automoldeamiento=Picoteo de una tecla que predice comida sin contingencia respuesta-comida",
      "Entrenamiento de omisión=Si la paloma picotea, se cancela la comida de ese ensayo",
      "Sign-trackers=Animales que se dirigen a la señal que predice la comida",
      "Goal-trackers=Animales que se dirigen al lugar donde aparecerá la comida",
      "Refuerzo accidental=Coincidencia azarosa de una conducta con la comida, según Skinner",
      "Conductas interinas=Variadas, al principio del intervalo y lejos de la comida",
      "Conductas terminales=Comunes al final del intervalo, propias del forrajeo",
      "Staddon y Simmelhag (1971)=Reinterpretaron la superstición como anticipación de la comida"
    ],
    g: [
      "En su experimento de superstición, Skinner daba comida cada unos ___ segundos.|15|30|60",
      "En el automoldeamiento, la luz de la tecla funciona como ___.|EC|EI|Ed",
      "En modelos animales, los sign-trackers son más sensibles a las claves asociadas a las ___.|drogas|tareas|parejas",
      "Las conductas terminales aparecían al ___ del intervalo.|final|principio|centro",
      "Según Staddon y Simmelhag, las conductas terminales se explican mejor por la ___ de la comida.|anticipación|privación|devaluación"
    ],
    tf: [
      "El automoldeamiento es una conducta operante adquirida sin necesidad de moldeamiento.|F|El procedimiento es pavloviano: la luz es un EC, la comida el EI y el picoteo una RC dirigida a la señal.",
      "Con entrenamiento de omisión, las palomas seguían picoteando en muchos ensayos aunque perdían la comida.|V",
      "Las conductas terminales de Staddon y Simmelhag eran idiosincrásicas y distintas en cada paloma.|F|Eran comunes a todas las palomas. Las idiosincrásicas son las supersticiosas que describió Skinner.",
      "La coincidencia accidental puede contribuir a los rituales humanos, pero no basta para explicarlos.|V"
    ],
    q: [
      "Si una paloma picotea la tecla iluminada, se cancela la comida de ese ensayo, y aun así sigue picoteando en muchos ensayos. ¿Qué demuestra?|Que el automoldeamiento es pavloviano|Que el picoteo es una conducta operante|Que el picoteo es supersticioso|La relación entre la señal y la comida pesa más que la consecuencia de la propia respuesta (Williams y Williams, 1969).",
      "¿Cómo explicó Skinner (1948) las conductas supersticiosas?|Por refuerzo accidental|Por anticipación de la comida|Por deriva instintiva|La conducta que coincidía por azar con la comida se fortalecía, se repetía y volvía a coincidir con ella.",
      "Ante una señal que predice comida, una rata se acerca al comedero y no a la señal. ¿Cómo se clasifica?|Como goal-tracker|Como sign-tracker|Como conducta interina|Se dirige al lugar donde aparecerá la comida. Los sign-trackers se dirigen a la señal.",
      "¿Qué diferencia a las conductas interinas de las terminales?|Aparecen lejos de la comida y son variadas|Aparecen cerca de la comida y son comunes|Aparecen al final y son idiosincrásicas|Las interinas surgen al principio del intervalo y varían. Las terminales, al final, son comunes y propias del forrajeo."
    ],
    inc: [
      "Sobre el automoldeamiento|Requiere moldear el picoteo por aproximaciones sucesivas|Lo describieron Brown y Jenkins (1968)|Revela diferencias individuales con interés clínico|No hace falta moldear: basta emparejar la tecla iluminada con la comida."
    ],
    seq: [
      "Procedimiento de automoldeamiento|Iluminar la tecla unos segundos>Dar comida sea cual sea la conducta>Repetir los emparejamientos>La paloma picotea la tecla iluminada"
    ],
    cls: [
      "Interpretación de la superstición|Skinner (1948): refuerzo accidental; conductas idiosincrásicas|Staddon y Simmelhag (1971): anticipación de la comida; conductas terminales comunes"
    ] },
  { t: "Bases neurales: LTP, amígdala, cerebelo y dopamina",
    tip: "La LTP, descrita por Bliss y Lømo (1973) en el hipocampo, es un aumento duradero de la eficacia sináptica y un mecanismo candidato del aprendizaje. En el miedo condicionado, el núcleo lateral de la amígdala forma la asociación y el central coordina las respuestas. El núcleo interpósito del cerebelo es esencial en el parpadeo condicionado. Las neuronas dopaminérgicas codifican un error de predicción (Schultz, Dayan y Montague, 1997).",
    v: [
      "LTP=Aumento duradero de la eficacia sináptica tras estimulación de alta frecuencia",
      "Bliss y Lømo (1973)=Describieron en el hipocampo la potenciación a largo plazo",
      "Idea de Hebb=Las conexiones entre neuronas que se activan juntas se refuerzan",
      "Núcleo lateral=Parte de la amígdala donde convergen EC y EI y se forma la asociación",
      "Núcleo central=Parte de la amígdala que coordina la congelación y las reacciones autónomas",
      "Núcleo interpósito=Estructura del cerebelo esencial en el parpadeo condicionado",
      "Error de predicción=Diferencia entre la recompensa obtenida y la esperada",
      "Estriado ventral=Región que, junto a la dopamina, ocupa un lugar central en el refuerzo"
    ],
    g: [
      "McCormick y Thompson (1984) estudiaron el condicionamiento palpebral en el ___.|conejo|perro|mono",
      "Schultz registró neuronas dopaminérgicas del ___ en monos.|mesencéfalo|hipocampo|cerebelo",
      "Tras el aprendizaje, la descarga dopaminérgica se traslada al ___.|EC|EI|Ed",
      "El error de predicción explica el ___: si la recompensa ya está predicha por otro estímulo, no hay nuevo aprendizaje.|bloqueo|contraste|automoldeamiento",
      "Los trabajos que situaron en la amígdala el circuito básico del miedo condicionado son de ___.|LeDoux|Kandel|Thompson"
    ],
    tf: [
      "Si se omite una recompensa esperada, las neuronas dopaminérgicas aumentan su actividad en ese momento.|F|Su actividad cae por debajo de la línea base: es un error de predicción negativo.",
      "Ante una recompensa bien predicha, las neuronas dopaminérgicas dejan de descargar en el momento de la recompensa.|V",
      "La lesión del núcleo interpósito elimina tanto la RC de parpadeo como el parpadeo reflejo ante el soplo de aire.|F|Elimina la RC ante el EC, pero no el parpadeo reflejo ante el soplo de aire.",
      "La LTP se considera un mecanismo candidato del aprendizaje por ser un cambio duradero producido por la actividad.|V"
    ],
    q: [
      "Un mono ha aprendido que una luz anuncia zumo. Un día, tras la luz, el zumo no llega. ¿Qué harán sus neuronas dopaminérgicas cuando debía llegar?|Caer bajo la línea base|Descargar con más fuerza|Mantenerse sin cambios|Es un error de predicción negativo, análogo a un valor negativo de (λ − ΣV) en Rescorla-Wagner.",
      "¿Dónde se forma la asociación EC-EI en el miedo condicionado?|En el núcleo lateral de la amígdala|En el núcleo central de la amígdala|En el núcleo interpósito del cerebelo|En el núcleo lateral convergen el EC y el EI. El central coordina las respuestas de miedo.",
      "Antes del aprendizaje, ¿cuándo descargan las neuronas dopaminérgicas?|Con la recompensa inesperada|Con el EC que la anuncia|Al omitirse la recompensa|Al principio descargan con la recompensa inesperada. Tras aprender, la descarga se traslada al EC.",
      "¿Qué es la LTP?|Un aumento duradero de la eficacia sináptica|Una reducción breve de la eficacia sináptica|Un aumento duradero del número de neuronas|Tras una estimulación breve de alta frecuencia, la misma señal produce después una respuesta mayor."
    ],
    inc: [
      "Sobre las bases neurales|El núcleo central forma la asociación EC-EI|La LTP se describió en el hipocampo|El estriado dorsolateral interviene en los hábitos|La asociación se forma en el núcleo lateral. El central coordina las respuestas de miedo."
    ],
    seq: [],
    cls: [
      "Estructura|Amígdala: miedo condicionado; núcleos lateral y central|Cerebelo: parpadeo condicionado; núcleo interpósito|Estriado: dopamina; acciones y hábitos"
    ] }
] }
);

// SAIMAP Psicología · Aprendizaje · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Aprendizaje cognitivo I: mapas, insight y conceptos", cap: 4, pir: "media", mods: [
  { t: "Mapas cognitivos e insight",
    tip: "Tolman defendía una conducta propositiva y molar: la rata no aprende una cadena de giros, sino un mapa cognitivo del espacio (Tolman, 1948). Lo apoyan el aprendizaje latente, el aprendizaje de lugar frente a respuesta y los rodeos y atajos. Köhler llamó insight a la solución súbita de sus chimpancés por reestructuración del campo perceptivo, aunque Birch (1945) mostró que se apoya en la experiencia previa.",
    v: [
      "Mapa cognitivo=Representación de la disposición del espacio que permite llegar a la meta por rutas nuevas",
      "Conducta propositiva=Conducta orientada a metas, según Tolman",
      "Análisis molar=Estudio de la conducta por su meta, como ir hacia la comida, no por contracciones",
      "Rodeos y atajos=Rutas nuevas que eligen los animales cuando se bloquea el camino habitual",
      "Tolman y Honzik (1930)=Ratas sin recompensa que igualaron a las recompensadas al introducir comida",
      "Laberinto en cruz=Tarea de Tolman, Ritchie y Kalish (1946) para separar lugar y respuesta",
      "Insight=Comprensión súbita por reestructuración del campo perceptivo (Köhler)",
      "Sultán=Chimpancé de Köhler que encajaba dos cañas para alcanzar la fruta"
    ],
    g: [
      "Con sobreentrenamiento, en el laberinto en cruz pasa a dominar el aprendizaje de ___.|respuesta|lugar|meta",
      "Según Packard y McGaugh (1996), el aprendizaje de lugar depende del ___.|hipocampo|estriado dorsal|cerebelo",
      "Köhler estudió a un grupo de chimpancés en ___.|Tenerife|Berlín|Gran Canaria",
      "Birch (1945) mostró que la experiencia previa manipulando ___ facilitaba el problema de la caña.|palos|cajas|cuerdas",
      "En el aprendizaje latente, el refuerzo influye sobre todo en la ___.|ejecución|adquisición|asociación"
    ],
    tf: [
      "Que los animales tomen atajos nunca recorridos es difícil de explicar con una jerarquía fija de hábitos.|V",
      "Packard y McGaugh (1996) mostraron que el aprendizaje de respuesta domina desde el principio del entrenamiento.|F|Al principio domina el de lugar (hipocampo) y con sobreentrenamiento, el de respuesta (estriado dorsal). Ambos coexisten.",
      "Frente al ensayo y error, la solución por insight se conserva tras una sola solución.|V",
      "Parte de la diferencia entre Thorndike y Köhler se debe a que los gatos veían el mecanismo de la caja.|F|Es al revés: los gatos no veían el mecanismo, y los chimpancés sí veían la estructura del problema."
    ],
    q: [
      "En un laberinto en cruz, una rata entrenada a encontrar comida sale ahora desde el brazo opuesto y repite el mismo giro, de modo que acaba en el brazo equivocado. ¿Qué ha aprendido?|Una respuesta|Un lugar|Un mapa cognitivo|Si hubiera aprendido el lugar, iría a la comida. Repetir el giro indica aprendizaje de respuesta.",
      "¿Qué rasgo distingue el insight del ensayo y error de Thorndike?|La solución aparece completa|La mejora es gradual|Se seleccionan respuestas sueltas|En el insight la solución aparece completa, a menudo tras una pausa. Lo gradual y las respuestas sueltas son propios del ensayo y error.",
      "Un conductor encuentra cortada su avenida habitual y toma sin dudar una calle paralela que nunca había usado para ese trayecto. ¿Qué lo explica mejor?|Un mapa cognitivo del barrio|Una jerarquía fija de hábitos|Un aprendizaje de respuesta|No tiene un hábito para esa ruta. Los rodeos y atajos nuevos apoyan la idea de mapa cognitivo.",
      "¿A qué atribuyó Köhler la solución súbita de Sultán?|A una reestructuración perceptiva|A respuestas reforzadas al azar|A un aprendizaje latente previo|El animal captaba de pronto la relación entre los elementos: una reestructuración del campo perceptivo."
    ],
    inc: [
      "Sobre el insight|Surge sin relación con la experiencia previa|Suele aparecer tras intentos fallidos y pausas|Se transfiere a problemas de igual estructura|Es un mito: Birch (1945) mostró que la experiencia previa con palos facilitaba mucho resolver el problema de la caña."
    ],
    seq: [
      "Aprendizaje latente en Tolman y Honzik (1930)|Explorar el laberinto sin recompensa>Introducir comida en la meta>Caída rápida de los errores>Igualar a las ratas recompensadas"
    ],
    cls: [
      "Forma de resolver problemas|Ensayo y error: mejora gradual e irregular; respuestas sueltas; transferencia limitada|Insight: solución súbita; aparece completa; se aplica a problemas con la misma estructura"
    ] },
  { t: "La revolución cognitiva: aprender por asociación o por reestructuración",
    tip: "La revolución cognitiva de los años cincuenta y sesenta reunió la teoría de la información, la cibernética, Newell y Simon, Chomsky y Miller (1956), y Neisser (1967) le dio nombre. El procesamiento de la información usa la analogía del ordenador. Pozo (1989) ordenó las teorías cognitivas según entiendan aprender como acumular (asociación) o reorganizar (reestructuración), y las consideró complementarias.",
    v: [
      "Analogía del ordenador=Descripción de la mente como sistema que transforma representaciones con límites",
      "Representaciones internas=Símbolos, reglas e imágenes necesarios para explicar la conducta",
      "Computar=Transformar representaciones mediante procedimientos",
      "Nivel funcional=Estudio de la mente sin reducirla a la descripción neurológica",
      "Aprendizaje por asociación=Cambio cuantitativo en que se añaden o fortalecen conexiones",
      "Reestructuración=Cambio cualitativo en la organización del conocimiento",
      "Pozo (1989)=Ordenó las teorías cognitivas según entiendan aprender como acumular o reorganizar",
      "Tradición organicista=Gestalt, Piaget y Vygotski, con un sujeto que construye e interpreta"
    ],
    g: [
      "El libro de ___ (1967) dio nombre y forma a la psicología cognitiva.|Neisser|Miller|Chomsky",
      "En el aprendizaje por asociación, la unidad de análisis son los ___.|elementos|esquemas|sistemas",
      "La crisis del conductismo se aceleró con la importancia de la ___ mostrada por Rescorla (1968).|contingencia|contigüidad|frecuencia",
      "El modelo ACT y las redes conexionistas son teorías cognitivas y, a la vez, ___.|asociativas|organicistas|gestálticas",
      "Para la tradición mecanicista, el sujeto ___ regularidades del ambiente.|registra|construye|interpreta"
    ],
    tf: [
      "La distinción de Pozo (1989) separa las teorías conductistas de las cognitivas.|F|ACT y las redes conexionistas son cognitivas y asociativas. Lo que separa es entender aprender como acumular o reorganizar.",
      "Las restricciones biológicas de Garcia y Koelling (1966) contribuyeron a la crisis del enfoque conductista.|V",
      "Pozo (1989) consideró la asociación y la reestructuración formas excluyentes de aprender.|F|Las consideró complementarias: la asociación explica lo gradual, y la reestructuración, los cambios conceptuales profundos.",
      "Pese a su vocabulario nuevo, buena parte de la psicología cognitiva conservó un núcleo asociacionista.|V"
    ],
    q: [
      "Una estudiante que aplicaba cada fórmula de física al reconocer el tipo de ejercicio entiende un día que varias son casos de una misma ley, y ya puede deducir las que olvida. ¿Qué ha ocurrido?|Una reestructuración|Un crecimiento asociativo|Un fortalecimiento de reglas|Su conocimiento no tiene más piezas, pero se ha reorganizado. Es un cambio cualitativo, propio de la reestructuración.",
      "¿Qué supuesto NO forma parte del enfoque del procesamiento de la información?|Que la mente se reduce a lo neurológico|Que el sistema tiene límites de capacidad|Que la mente computa representaciones|Supone lo contrario: la mente puede estudiarse en un nivel funcional, sin reducirla a la descripción neurológica.",
      "¿Qué ejemplo corresponde al aprendizaje por reestructuración?|La equilibración|El conexionismo|El modelo ACT|Insight, equilibración y zona de desarrollo próximo son ejemplos de reestructuración. ACT y el conexionismo son asociativos.",
      "¿Qué mostraban la contingencia y las restricciones biológicas sobre el condicionamiento?|Que importa la información|Que basta la coincidencia|Que el refuerzo es esencial|El animal no registra simples coincidencias, sino relaciones informativas entre sucesos."
    ],
    inc: [
      "Sobre la clasificación de Pozo (1989)|La asociación produce cambios cualitativos|La reestructuración trabaja con totalidades|La Gestalt pertenece a la tradición organicista|El cambio por asociación es cuantitativo: se añaden o fortalecen conexiones. El cualitativo es propio de la reestructuración."
    ],
    seq: [],
    cls: [
      "Tipo de aprendizaje según Pozo|Asociación: modelo ACT; teoría de los esquemas; conexionismo; cambio cuantitativo|Reestructuración: insight; equilibración; zona de desarrollo próximo; cambio cualitativo"
    ] },
  { t: "Conceptos, prototipos y jerarquías; conceptos naturales y artificiales",
    tip: "Un concepto representa una clase de objetos y permite inferir propiedades no observadas. La visión clásica, de rasgos necesarios y suficientes, guió el estudio de conceptos artificiales (Bruner, Goodnow y Austin, 1956). Rosch mostró que los conceptos naturales tienen estructura graduada en torno a un prototipo y se organizan en niveles, de los que el básico ofrece la máxima información con el mínimo esfuerzo.",
    v: [
      "Categorización=Proceso de asignar un caso a un concepto",
      "Focalización conservadora=Tomar el primer ejemplo positivo como hipótesis y cambiar un atributo cada vez",
      "Focalización arriesgada=Cambiar varios atributos a la vez para acertar antes",
      "Estructura graduada=Unos miembros de la categoría son más típicos que otros",
      "Prototipo=Miembro más representativo o conjunto de rasgos más frecuentes (Rosch)",
      "Parecido de familia=Semejanza sin un rasgo común a todos los miembros, idea de Wittgenstein",
      "Modelos de ejemplares=El caso nuevo se compara con casos concretos almacenados (Medin y Schaffer)",
      "Colores focales=Mejores ejemplos de cada término de color, muy coincidentes entre culturas"
    ],
    g: [
      "Bruner, Goodnow y Austin publicaron su estudio con tarjetas en ___.|1956|1975|1969",
      "Los niños aprenden antes el nivel ___ de una jerarquía de conceptos.|básico|supraordinado|subordinado",
      "En la jerarquía de la figura, «mecedora» pertenece al nivel ___.|subordinado|básico|supraordinado",
      "Rosch estudió a los ___ de Nueva Guinea, cuya lengua tiene solo dos términos básicos de color.|dani|hopi|inuit",
      "Las reglas con más atributos se aprenden más ___ y con más errores.|despacio|deprisa|fácilmente"
    ],
    tf: [
      "El nivel básico es el más general de la jerarquía, y por eso se usa por defecto al nombrar.|F|Es el nivel intermedio: sus miembros comparten muchos rasgos y se distinguen bien de las categorías vecinas.",
      "Los miembros típicos de una categoría natural se verifican antes, se nombran primero y se aprenden antes.|V",
      "Que los dani recordaran mejor los colores focales cerró el debate sobre la relatividad lingüística.|F|Se interpretó como base perceptiva de ciertos prototipos, pero el debate sobre la relatividad lingüística sigue abierto.",
      "En la focalización arriesgada, un fallo obliga a recordar los ejemplos anteriores.|V"
    ],
    q: [
      "En una tarea de tarjetas, un participante toma todo el primer ejemplo positivo como hipótesis y cambia un solo atributo en cada prueba. ¿Qué estrategia usa?|Focalización conservadora|Focalización arriesgada|Parecido de familia|Es lenta pero segura. Cambiar varios atributos a la vez sería focalización arriesgada.",
      "Según Rosch et al. (1976), ¿por qué el nivel básico es privilegiado?|Da más información con menos esfuerzo|Es el más general de la jerarquía|Sus miembros comparten pocos rasgos|Sus miembros comparten muchos rasgos y se distinguen bien de las vecinas. Es el que se usa por defecto y se aprende antes.",
      "¿Qué proponen los modelos de ejemplares frente a la idea de prototipo?|Comparar con casos concretos guardados|Comparar con el miembro más típico|Aplicar rasgos necesarios y suficientes|Medin y Schaffer (1978) proponen comparar cada caso nuevo con los ejemplares concretos almacenados, no con un prototipo.",
      "¿Qué rasgo corresponde a los conceptos naturales?|Límites difusos|Regla definida|Rasgos necesarios|Los naturales tienen estructura graduada y límites difusos. La regla con rasgos necesarios y suficientes define los artificiales."
    ],
    inc: [
      "Sobre los conceptos naturales|Se aprenden comprobando hipótesis|Tienen una estructura graduada|Se organizan en torno a un prototipo|La comprobación de hipótesis es típica de los conceptos artificiales. Los naturales se aprenden por exposición a ejemplos y semejanza."
    ],
    seq: [],
    cls: [
      "Nivel de la jerarquía|Supraordinado: mueble|Básico: silla; mesa; lámpara|Subordinado: silla de oficina; mecedora"
    ] },
  { t: "Conceptos en animales y equivalencia de estímulos",
    tip: "Herrnstein y Loveland (1964) mostraron que las palomas aprenden a picotear ante fotos con personas y generalizan a fotos nuevas: la categorización no exige lenguaje, aunque se debate si es concepto o semejanza con ejemplares. Sidman (1971) halló que, tras entrenar A→B y B→C, emergen reflexividad, simetría, transitividad y equivalencia. La teoría de los marcos relacionales amplió estas ideas y fundamenta la terapia de aceptación y compromiso.",
    v: [
      "Herrnstein y Loveland (1964)=Palomas que picoteaban ante fotos con personas y generalizaban a fotos nuevas",
      "Emparejamiento con la muestra=Procedimiento con el que Sidman enseñó a unir palabra hablada y escrita",
      "Reflexividad=Cada estímulo se empareja consigo mismo (A→A)",
      "Simetría=La relación entrenada se invierte (B→A)",
      "Transitividad=Se enlazan dos relaciones entrenadas (A→C)",
      "Equivalencia=Combinación de simetría y transitividad (C→A)",
      "Clase de equivalencia=Estímulos que funcionan como intercambiables, como si significaran lo mismo",
      "Marcos relacionales=Teoría de Hayes, Barnes-Holmes y Roche (2001) sobre relaciones derivadas"
    ],
    g: [
      "Lo que distingue un concepto de la memorización de casos es la transferencia a ___ nuevos.|ejemplares|reforzadores|programas",
      "El joven de Sidman (1971) sabía emparejar palabras habladas con dibujos, pero no ___.|leía|nombraba|escuchaba",
      "Tras entrenar A→B y B→C, la relación emergente B→A es un caso de ___.|simetría|transitividad|equivalencia",
      "La teoría de los marcos relacionales es la base de la terapia de ___ y compromiso.|aceptación|activación|exposición",
      "La equivalencia ha sido difícil de demostrar en animales no humanos, sobre todo la ___.|simetría|transitividad|reflexividad"
    ],
    tf: [
      "En el estudio de Herrnstein y Loveland, las personas aparecían siempre en la misma posición y con el mismo tamaño.|F|Aparecían en posiciones, tamaños y fondos muy distintos, sin un rasgo físico simple que sirviera de pista.",
      "Tras entrenar A→B y B→C, la relación emergente C→A se denomina transitividad.|F|Eso es equivalencia, que combina simetría y transitividad. La transitividad es la relación A→C.",
      "Según los marcos relacionales, una palabra puede provocar malestar sin haberse emparejado nunca con la experiencia temida.|V",
      "La terapia de aceptación y compromiso y el modelo de Anderson comparten las siglas ACT, pero nada más.|V"
    ],
    q: [
      "Se entrena a un niño a elegir la foto de un perro al oír «perro» (A→B) y la palabra escrita PERRO ante la foto (B→C). Sin más entrenamiento, ante PERRO escrita elige la palabra hablada. ¿Qué relación muestra?|Equivalencia|Simetría|Transitividad|Elegir A ante C (C→A) combina simetría y transitividad. La simetría sería B→A, y la transitividad, A→C.",
      "¿Qué se debate sobre las palomas de Herrnstein y Loveland?|Si forman conceptos o usan la semejanza|Si generalizaban a fotografías nuevas|Si aprendían la discriminación entrenada|Generalizaron a fotos nuevas, pero queda abierto si tienen algo parecido a un concepto o clasifican por semejanza con ejemplares.",
      "¿Por qué interesa la equivalencia de estímulos para entender el conocimiento simbólico?|Explica relaciones no entrenadas|Prueba que el lenguaje es innato|Aparece en todas las especies|Explica cómo crece el conocimiento más allá de lo entrenado. En animales no humanos ha sido difícil de demostrar.",
      "¿Qué añade la teoría de los marcos relacionales a la equivalencia?|Relaciones de oposición o de orden|La reflexividad de cada estímulo|El emparejamiento con la muestra|Las personas relacionan estímulos también como opuestos, mayores o anteriores, y esas relaciones transfieren funciones psicológicas."
    ],
    inc: [
      "Sobre la equivalencia de estímulos|Exige entrenar cada relación por separado|Se usa para enseñar lectura y vocabulario|Su relación con el lenguaje sigue en discusión|Su interés es el contrario: emergen relaciones que nadie ha enseñado. Se aplica con personas con discapacidad intelectual."
    ],
    seq: [],
    cls: [
      "Relación tras entrenar A→B y B→C|Entrenada: A→B; B→C|Emergente: A→A; B→A; A→C; C→A"
    ] }
] },
{ n: 14, t: "Aprendizaje cognitivo II: modelos computacionales y constructivismo", cap: 4, pir: "baja", mods: [
  { t: "El modelo ACT y el aprendizaje de habilidades",
    tip: "El modelo ACT de Anderson distingue una memoria de trabajo, una declarativa (saber qué) y una procedimental, con reglas de producción del tipo SI… ENTONCES…. Una destreza pasa por una fase declarativa, la compilación (proceduralización y composición) y el ajuste (generalización, discriminación y fortalecimiento). Explica la automatización y por qué leer instrucciones no basta. Es difícil de refutar y, para Pozo, asociativo.",
    v: [
      "Memoria declarativa=Red de hechos, el «saber qué», a la que se accede por propagación de activación",
      "Memoria procedimental=Habilidades, el «saber cómo», guardadas como reglas de producción",
      "Regla de producción=Par condición-acción del tipo SI… ENTONCES…",
      "Fase declarativa=Instrucciones aplicadas como hechos, de forma lenta, consciente y con errores",
      "Proceduralización=Incorporar el conocimiento declarativo a reglas específicas",
      "Composición=Fundir en una sola varias producciones que se ejecutan seguidas",
      "Discriminación=Restringir una regla a los casos en que funciona",
      "ACT-R (1993)=Versión que intentó acercar el modelo a las estructuras cerebrales"
    ],
    g: [
      "La versión ACT∗ del modelo de Anderson es de ___.|1983|1993|1976",
      "Una producción se ejecuta cuando su condición coincide con el contenido de la ___.|memoria de trabajo|memoria declarativa|memoria procedimental",
      "Que las reglas útiles ganen fuerza y se apliquen antes se llama ___.|fortalecimiento|generalización|composición",
      "La compilación del conocimiento exige ___, no basta con leer instrucciones.|práctica|motivación|atención",
      "En la clasificación de Pozo (1989), ACT es una teoría ___.|asociativa|organicista|constructivista"
    ],
    tf: [
      "En la fase declarativa es típico repetirse las instrucciones en voz baja.|V",
      "La composición consiste en que una regla amplíe su campo de aplicación.|F|Eso es generalización, parte del ajuste. La composición funde en una sola varias producciones que se ejecutan seguidas.",
      "Con la práctica, una destreza se vuelve más fácil de verbalizar.|F|Se vuelve más difícil: una mecanógrafa experta puede tener que mover los dedos en el aire para saber dónde está una letra.",
      "La crítica principal a ACT es que resulta tan global, flexible y complejo que es difícil refutarlo.|V"
    ],
    q: [
      "Un aprendiz de mecanografía empieza a teclear «que» como una sola unidad, sin pensar en cada letra. ¿Qué proceso de ACT lo explica?|La composición|La discriminación|La fase declarativa|Varias producciones que se ejecutaban seguidas se han fundido en una. Forma parte de la compilación del conocimiento.",
      "¿Qué dos procesos forman la compilación del conocimiento?|Proceduralización y composición|Generalización y discriminación|Asimilación y acomodación|Generalización y discriminación pertenecen al ajuste, junto con el fortalecimiento. Asimilación y acomodación son de Piaget.",
      "Al cambiar a un teclado distinto, una mecanógrafa experta adapta sus reglas y gana velocidad. ¿En qué fase de ACT está?|Ajuste|Compilación|Declarativa|En el ajuste, las reglas se generalizan, se discriminan y se fortalecen. Adaptarse a otro teclado es un caso típico de ajuste.",
      "¿Con qué fases del aprendizaje motor se corresponden las de ACT?|Las de Fitts y Posner|Las de Rumelhart y Norman|Los estadios de Piaget|Declarativa, compilación y ajuste se corresponden con las fases cognitiva, asociativa y autónoma de Fitts y Posner."
    ],
    inc: [
      "Sobre el modelo ACT|La memoria procedimental guarda hechos|Es a la vez teoría y programa de simulación|La declarativa usa propagación de activación|La memoria procedimental guarda habilidades como reglas de producción. Los hechos están en la memoria declarativa."
    ],
    seq: [
      "Fases del aprendizaje de habilidades en ACT|Fase declarativa>Compilación del conocimiento>Ajuste"
    ],
    cls: [
      "Proceso de ACT|Compilación: proceduralización; composición|Ajuste: generalización; discriminación; fortalecimiento"
    ] },
  { t: "Esquemas y modelos conexionistas",
    tip: "Un esquema es una estructura genérica con variables y valores por defecto. Rumelhart y Norman (1978) distinguieron crecimiento, ajuste y reestructuración. Las redes conexionistas del grupo PDP (1986) aprenden ajustando pesos con la regla delta, equivalente a Rescorla-Wagner. Generalizan y se degradan de forma gradual, pero la retropropagación no parece biológicamente plausible y sufren interferencia catastrófica.",
    v: [
      "Valores por defecto=Lo que se asume en un esquema si no se dice lo contrario",
      "Crecimiento=Acumular datos en esquemas existentes sin modificarlos",
      "Ajuste=Modificar las variables de un esquema o los valores que se asumen",
      "Generación pautada=Crear un esquema copiando uno anterior con modificaciones",
      "Inducción=Extraer un esquema nuevo de la repetición de casos semejantes",
      "Regla delta=Cambia cada peso en proporción a la diferencia entre salida deseada y obtenida",
      "Retropropagación=Envío del error hacia atrás en redes con capas ocultas",
      "Interferencia catastrófica=Olvidar la tarea anterior al entrenar la red en una nueva"
    ],
    g: [
      "Rumelhart, McClelland y el grupo PDP presentaron sus modelos en ___.|1986|1978|1972",
      "Descubrir que en ciertos restaurantes se paga antes de comer es un caso de ___.|ajuste|crecimiento|inducción",
      "La forma más frecuente de aprendizaje de esquemas es ___.|el crecimiento|el ajuste|la reestructuración",
      "En una red conexionista, un concepto está en un ___ de activación de muchas unidades.|patrón|peso|umbral",
      "La regla delta y el modelo de Rescorla-Wagner aprenden más cuanto mayor es el ___ de predicción.|error|peso|umbral"
    ],
    tf: [
      "Entender por primera vez una hipoteca a interés variable es un ejemplo de crecimiento.|F|Es reestructuración: se crea un esquema nuevo. El crecimiento solo añade datos a esquemas existentes.",
      "Las redes conexionistas se degradan de forma gradual cuando se dañan algunas unidades.|V",
      "El conexionismo de Thorndike y las redes PDP comparten el mismo modelo de aprendizaje.|F|Comparten el nombre, no el modelo: Thorndike hablaba de conexiones estímulo-respuesta.",
      "Las redes conexionistas pueden extraer algo parecido a un prototipo a partir de ejemplos, sin reglas explícitas.|V"
    ],
    q: [
      "Una red entrenada para reconocer letras se entrena después en reconocer números y deja de reconocer las letras. ¿Qué problema muestra?|Interferencia catastrófica|Degradación gradual|Falta de generalización|Al entrenarla en una tarea nueva olvida la anterior, algo que no ocurre en las personas.",
      "¿Por qué la retropropagación no parece biológicamente plausible?|Las neuronas no envían el error hacia atrás|Las neuronas no tienen conexiones inhibitorias|Las neuronas no trabajan en paralelo|No envían el error hacia atrás por las mismas conexiones. Las conexiones inhibitorias y el paralelismo sí son rasgos de las redes.",
      "Añadir otra capital europea a lo que ya se sabe de geografía es un caso de…|crecimiento|ajuste|generación pautada|Se acumulan datos en un esquema existente sin modificarlo. El ajuste cambia variables, y la generación pautada crea esquemas.",
      "¿En qué consiste aprender en una red conexionista?|Ajustar los pesos de las conexiones|Crear reglas de producción nuevas|Añadir unidades a la red|La regla delta cambia cada peso en proporción al error. Las reglas de producción son propias de ACT."
    ],
    inc: [
      "Sobre la teoría de los esquemas|La reestructuración es la forma más frecuente|La idea de esquema procede de Bartlett (1932)|Los esquemas tienen variables que se rellenan|La forma más frecuente es el crecimiento. La reestructuración es la más difícil y la que más cambia la comprensión."
    ],
    seq: [],
    cls: [
      "Forma de aprendizaje de esquemas|Crecimiento: añadir datos; otra capital europea|Ajuste: cambiar valores por defecto; pagar antes de comer|Reestructuración: crear esquemas nuevos; hipoteca a interés variable"
    ] },
  { t: "Piaget: equilibración y aprendizaje; resolución de problemas",
    tip: "Piaget subordinó el aprendizaje en sentido estricto al aprendizaje en sentido amplio, la construcción de estructuras. La equilibración coordina asimilación y acomodación y resuelve el conflicto cognitivo con una reequilibración maximizadora. En resolución de problemas, la fijación funcional (Duncker, 1945) muestra que la experiencia puede estorbar, y el procesamiento de la información describió el espacio del problema, los algoritmos y los heurísticos.",
    v: [
      "Asimilación=Interpretar la información nueva con los esquemas que ya se tienen",
      "Acomodación=Modificar los esquemas cuando no bastan para incorporar la realidad",
      "Conflicto cognitivo=Desequilibrio que surge cuando la realidad no encaja con los esquemas",
      "Reequilibración maximizadora=Resolver el conflicto alcanzando un equilibrio mejor que el anterior",
      "Respuesta gamma=Reorganizar el sistema para que la perturbación sea una transformación prevista",
      "Pensamiento productivo=Comprender la estructura del problema, según Wertheimer (1945)",
      "Heurístico=Atajo que suele funcionar pero no garantiza la solución",
      "Análisis medios-fines=Reducir paso a paso la diferencia entre el estado actual y la meta"
    ],
    g: [
      "Para Piaget, el aprendizaje en sentido ___ queda subordinado a la construcción de estructuras.|estricto|amplio|social",
      "Ignorar o neutralizar la perturbación es la respuesta ___ descrita por Piaget.|alfa|beta|gamma",
      "En el problema de la vela, pocas personas ven que la caja de las chinchetas sirve de soporte si se presenta ___.|llena|vacía|abierta",
      "Probar todas las combinaciones de un candado es un ___.|algoritmo|heurístico|operador",
      "Gick y Holyoak (1980) usaron la historia de un ___ que divide sus tropas para atacar una fortaleza.|general|médico|rey"
    ],
    tf: [
      "En la acomodación se interpreta la información nueva con los esquemas que ya se tienen.|F|Eso es asimilación. La acomodación modifica los esquemas cuando no bastan para asimilar la realidad.",
      "Una crítica de consenso a Piaget es que subestimó las competencias tempranas.|V",
      "En Gick y Holyoak (1980), las personas detectaban la analogía igual de bien con aviso que sin él.|F|Ayudaba sobre todo si se avisaba de que la historia podía servir: no siempre se detecta la semejanza profunda.",
      "Los desfases entre tareas con la misma estructura indican que los estadios son menos discretos de lo que Piaget propuso.|V"
    ],
    q: [
      "Una niña cree que los animales que nadan son peces. Al saber que el delfín respira aire y da de mamar, dice que «es un pez raro». ¿Qué proceso muestra?|Asimilación|Acomodación|Reestructuración|Interpreta el caso nuevo con su esquema previo. Si toma conciencia del conflicto y cambia el esquema, habrá acomodación.",
      "¿Qué describe el espacio del problema de Newell y Simon (1972)?|Estado inicial, meta y operadores|Atajos que no garantizan la solución|Soluciones transferidas de otro problema|Es el conjunto de estados y operadores, como las posiciones posibles de un cubo de Rubik. Los atajos son heurísticos.",
      "Alguien planifica un viaje largo dividiéndolo en tramos y resolviendo cada uno para acercarse al destino. ¿Qué usa?|Análisis medios-fines|Un algoritmo|Pensamiento reproductivo|Es un heurístico que reduce paso a paso la diferencia entre el estado actual y la meta.",
      "Según Piaget, integrar una perturbación modificando parte del sistema es una respuesta…|beta|alfa|gamma|Alfa ignora o neutraliza la perturbación. Gamma reorganiza el sistema para que pase a ser una transformación prevista."
    ],
    inc: [
      "Sobre Piaget|El aprendizaje concreto limita las estructuras|La equilibración coordina asimilación y acomodación|Prestó poca atención a la cultura y la instrucción|Es al revés: lo que un niño puede aprender está limitado por las estructuras de que dispone."
    ],
    seq: [
      "Estadios de Piaget|Sensoriomotor>Preoperatorio>Operaciones concretas>Operaciones formales"
    ],
    cls: [
      "Proceso de Piaget|Asimilación: interpretar con esquemas previos; «es un pez raro»|Acomodación: modificar los esquemas; cambiar el esquema de pez y de mamífero"
    ] },
  { t: "Vygotski, zona de desarrollo próximo y andamiaje; aprendizaje implícito",
    tip: "Para Vygotski, las funciones superiores tienen origen social: según la ley de la doble formación, aparecen primero en el plano interpsicológico y después en el intrapsicológico, con los signos como mediadores. El aprendizaje precede al desarrollo, y la enseñanza se dirige a la ZDP. El andamiaje es de Wood, Bruner y Ross (1976). En el aprendizaje implícito (Reber, 1967) se adquieren regularidades sin poder verbalizarlas.",
    v: [
      "Doble formación=Toda función aparece primero entre personas y después dentro del niño",
      "Signos=Mediadores, sobre todo el lenguaje, que actúan sobre la propia persona",
      "Conceptos científicos=Llegan por la enseñanza ya definidos y relacionados con otros",
      "Conceptos espontáneos=Los forma el niño a partir de su experiencia cotidiana",
      "Zona de desarrollo próximo=Distancia entre lo que se logra solo y lo que se logra con ayuda",
      "Andamiaje=Ayuda ajustada de un tutor que se retira a medida que el aprendiz gana competencia",
      "Gramática artificial=Reglas que generaban las cadenas de letras de Reber (1967)",
      "Tiempo de reacción serial=Tarea en que las respuestas a una secuencia repetida se aceleran"
    ],
    g: [
      "Wood, Bruner y Ross propusieron el concepto de andamiaje en ___.|1976|1934|1967",
      "Simplificar la tarea para que sea abordable es la reducción de los grados de ___.|libertad|dificultad|exigencia",
      "Para Vygotski, a diferencia de Piaget, el aprendizaje ___ al desarrollo.|precede|sigue|sustituye",
      "Las ___ actúan sobre los objetos, y los signos, sobre la propia persona.|herramientas|palabras|imágenes",
      "En la tarea de Nissen y Bullemer (1987) también mejoraban los pacientes ___.|amnésicos|afásicos|apráxicos"
    ],
    tf: [
      "El término andamiaje lo acuñó Vygotski para describir la ayuda dentro de la ZDP.|F|Procede de Wood, Bruner y Ross (1976), más de cuarenta años después de la muerte de Vygotski en 1934.",
      "Según la ZDP, la enseñanza eficaz se dirige a lo que el aprendiz ya domina solo.|F|Se dirige a la zona entre lo que logra solo y lo que logra con ayuda, no a lo ya dominado ni a lo inalcanzable.",
      "En el estudio de Reber (1967), los participantes clasificaban cadenas nuevas por encima del azar sin saber explicar las reglas.|V",
      "Se debate si parte del conocimiento implícito es consciente pero fragmentario.|V"
    ],
    q: [
      "Un niño dice en voz alta «primero las piezas del borde» mientras hace un puzle. Según Vygotski, ¿qué está haciendo?|Usar un signo para regular su conducta|Repetir una regla sin función reguladora|Aplicar un concepto científico aprendido|El lenguaje actúa como mediador sobre la propia persona, y con el tiempo esa habla se vuelve interna.",
      "Una madre lee primero la lista de la compra con su hijo, después solo le señala el pasillo y al final revisa el carro. ¿Qué ilustra?|Un andamiaje que se retira|Una ZDP que se amplía sola|Un aprendizaje implícito|La ayuda se ajusta y se retira a medida que el niño gana competencia, como describieron Wood, Bruner y Ross (1976).",
      "¿Cuál es la crítica habitual a Vygotski?|La falta de precisión|El exceso de formalismo|El olvido de lo social|No especifica cómo se mide la ZDP ni cómo interactúan asociación y reestructuración.",
      "¿Qué función del andamiaje consiste en destacar lo relevante y las discrepancias?|Señalización de rasgos críticos|Mantenimiento de la dirección|Reducción de grados de libertad|Mantener la dirección orienta hacia la meta, y reducir los grados de libertad simplifica la tarea."
    ],
    inc: [
      "Sobre Vygotski|El desarrollo precede al aprendizaje y lo limita|Las funciones superiores tienen origen social|Los conceptos espontáneos surgen de la experiencia|Esa idea es de Piaget. Para Vygotski, el aprendizaje precede al desarrollo y tira de él."
    ],
    seq: [
      "Ley de la doble formación|Plano interpsicológico>Interiorización>Plano intrapsicológico"
    ],
    cls: [
      "Paradigma de aprendizaje implícito|Gramática artificial: Reber (1967); cadenas de letras; clasificar cadenas nuevas|Tiempo de reacción serial: Nissen y Bullemer (1987); secuencia de posiciones; mejora también en amnésicos"
    ] }
] },
{ n: 15, t: "Aprendizaje social: modelado y aprendizaje vicario", cap: 5, pir: "media", mods: [
  { t: "Bandura y el muñeco Bobo: aprendizaje frente a ejecución",
    tip: "Frente a Miller y Dollard (1941), Bandura sostuvo que basta con observar, sin hacer ni recibir refuerzo. En Bandura, Ross y Ross (1961), los niños imitaron conductas agresivas nuevas. En Bandura (1965), el grupo del modelo castigado imitó menos, pero con incentivo reprodujo lo observado como los demás: había aprendido y no ejecutaba. Las críticas de diseño no anulan el hallazgo central.",
    v: [
      "Aprendizaje observacional=Adquirir conductas o reglas viendo a otro, sin ejecutarlas ni recibir refuerzo",
      "Modelo=Persona observada, cuya conducta puede ser prosocial o agresiva",
      "Miller y Dollard (1941)=Trataron la imitación como una conducta operante reforzada",
      "Muñeco Bobo=Muñeco hinchable al que golpeaba el adulto en los estudios de Bandura",
      "Consecuencias vicarias=Lo que le ocurre al modelo, que afecta sobre todo a la ejecución",
      "Prueba con incentivo=Premio por reproducir lo observado que reveló lo aprendido por el grupo castigado",
      "Características de la demanda=Los niños pudieron entender qué esperaba de ellos el adulto",
      "Bandura, Ross y Ross (1963)=Mostraron imitación con modelos filmados y dibujos animados"
    ],
    g: [
      "Antes de la prueba de 1961, a los niños se les provocaba una leve ___.|frustración|recompensa|fatiga",
      "En la prueba libre de Bandura (1965), imitaron menos los niños del modelo ___.|castigado|premiado|elogiado",
      "Las consecuencias vicarias afectan sobre todo a la ___.|ejecución|atención|adquisición",
      "El muñeco Bobo está diseñado para ser golpeado y vuelve a ___.|levantarse|inflarse|sonar",
      "Una sesión breve de laboratorio no equivale a años de exposición, lo que limita la validez ___.|ecológica|interna|predictiva"
    ],
    tf: [
      "En Bandura (1965), el grupo del modelo castigado no llegó a aprender la conducta agresiva.|F|Sí la aprendió: con incentivo la reprodujo como los demás. El castigo del modelo solo frenó su ejecución espontánea.",
      "En Bandura, Ross y Ross (1961), muchos niños reproducían golpes y frases concretas del adulto.|V",
      "Para Bandura, la imitación se aprende solo si la conducta imitada ha sido reforzada.|F|Esa era la postura de Miller y Dollard (1941). Bandura sostuvo que basta con observar, sin hacer y sin refuerzo.",
      "En el estudio de 1961 influyeron también el sexo del modelo y el del niño.|V"
    ],
    q: [
      "Un adolescente ve que multan a su hermano por ir en patinete por una zona peatonal y no lo hace en meses. En vacaciones, donde está permitido, reproduce sus giros sin dudar. ¿Qué ilustra?|Aprendizaje sin ejecución previa|Adquisición por refuerzo directo|Facilitación de una respuesta|Lo había aprendido observando. La consecuencia vicaria frenó la ejecución hasta que hubo ocasión y motivo.",
      "¿Qué crítica a los estudios del muñeco Bobo señala que muchos niños no conocían el juguete?|La novedad favorece la exploración|El muñeco está hecho para golpearse|Los niños captaban lo esperado|La novedad favorece la exploración. Las otras opciones son críticas distintas: el diseño del muñeco y las características de la demanda.",
      "¿Qué grupo de Bandura (1965) imitó menos en la prueba libre y luego reprodujo lo observado como el resto?|El del modelo castigado|El del modelo sin consecuencias|El del modelo recompensado|El castigo del modelo frenó la ejecución espontánea, pero con incentivo los tres grupos reprodujeron lo observado de forma parecida.",
      "¿Qué mostraron Bandura, Ross y Ross (1963)?|Que se imitan modelos filmados|Que solo se imitan modelos presentes|Que no se imitan dibujos animados|Los modelos filmados, e incluso los personajes de dibujos animados, también producían imitación."
    ],
    inc: [
      "Sobre los estudios del muñeco Bobo|Las críticas anulan el hallazgo central|Golpear el muñeco se parece más a un juego|La validez ecológica es limitada|Las críticas no anulan el hallazgo: se pueden adquirir conductas nuevas solo por observación."
    ],
    seq: [
      "Procedimiento de Bandura (1965)|Ver la película del modelo agresivo>Ver la consecuencia que recibe el modelo>Prueba libre de imitación>Prueba con incentivo por reproducir lo observado"
    ],
    cls: [
      "Condición de Bandura (1965)|Imitación espontánea mayor: modelo recompensado; modelo sin consecuencias|Imitación espontánea menor: modelo castigado"
    ] },
  { t: "El modelo, el observador y los procesos",
    tip: "Bandura (1977, 1986) describió cuatro procesos: atención, retención (codificación simbólica en imágenes y palabras), reproducción (capacidades motoras y retroalimentación) y motivación (refuerzo directo, vicario y autorrefuerzo). Los dos primeros explican la adquisición, y los dos últimos, la ejecución. Se imita más a modelos con prestigio, competencia, calidez y semejanza. Observar puede producir adquisición, inhibición o desinhibición, o facilitación de respuesta.",
    v: [
      "Codificación simbólica=Representación de lo observado en imágenes y palabras",
      "Refuerzo vicario=Consecuencia positiva del modelo que aumenta la imitación del observador",
      "Autorrefuerzo=Satisfacción de cumplir los propios criterios",
      "Modelo simbólico=Modelo presentado en vídeo o en dibujos",
      "Desinhibición=Aumento de una conducta conocida y frenada al ver que el modelo no sufre castigo",
      "Inhibición=Descenso de una conducta conocida tras ver consecuencias negativas en el modelo",
      "Facilitación de respuesta=La conducta del modelo sirve de señal para una conducta conocida y no prohibida",
      "Adquisición de conductas nuevas=Aparece una conducta que no estaba en el repertorio"
    ],
    g: [
      "Ponerle nombre a cada paso de una secuencia mejora sobre todo la ___.|retención|atención|motivación",
      "Ver muchas veces a un pianista no basta para tocar como él porque falla la ___.|reproducción|retención|atención",
      "Quien está muy ___ aprende menos, aunque el modelo sea excelente.|ansioso|motivado|atento",
      "La reproducción y la motivación explican sobre todo la ___.|ejecución|adquisición|retención",
      "En el experimento de 1965, el castigo del modelo actuó sobre la ___.|motivación|retención|atención"
    ],
    tf: [
      "La atención y la retención explican sobre todo la ejecución de lo aprendido.|F|Explican sobre todo la adquisición. La reproducción y la motivación controlan la ejecución.",
      "Mirar hacia arriba cuando varias personas miran al cielo es un caso de facilitación de respuesta.|V",
      "El aprendizaje observacional es una copia automática de lo que hace el modelo.|F|No es automático: quien observa selecciona, codifica y decide si ejecuta lo aprendido.",
      "El modelo puede llegar como una descripción verbal, en unas instrucciones o un relato.|V"
    ],
    q: [
      "Una estudiante que no pregunta en clase ve que el profesor responde con interés a un compañero, y a la semana siguiente levanta la mano. ¿Qué efecto del modelado muestra?|Desinhibición|Facilitación de respuesta|Adquisición de una conducta nueva|Ya sabía preguntar, pero el temor a quedar mal la frenaba. El modelo eliminó ese freno.",
      "Varias personas miran al cielo en la calle y un transeúnte también levanta la vista. ¿Qué efecto es?|Facilitación de respuesta|Desinhibición de una conducta|Adquisición de una conducta|Mirar arriba no estaba frenado por miedo: el modelo solo indica cuándo hacerlo. Por eso no es desinhibición.",
      "¿Cuál es el orden de los procesos del aprendizaje observacional?|Atención, retención, reproducción y motivación|Atención, motivación, retención y reproducción|Retención, atención, motivación y reproducción|Bandura (1977, 1986) los describió en ese orden. Los dos primeros explican la adquisición, y los dos últimos, la ejecución.",
      "¿Qué rasgo del modelo aumenta la probabilidad de que se le imite?|Que se perciba como semejante|Que reciba consecuencias negativas|Que sea muy distinto del observador|Se imita más a modelos con prestigio, competencia y calidez, semejantes al observador y con consecuencias positivas."
    ],
    inc: [
      "Sobre los procesos de Bandura|La motivación solo incluye el refuerzo directo|La retención se apoya en imágenes y palabras|La reproducción exige capacidades motoras|La motivación incluye el refuerzo directo, el refuerzo vicario y el autorrefuerzo."
    ],
    seq: [
      "Procesos del aprendizaje observacional|Atención>Retención>Reproducción>Motivación"
    ],
    cls: [
      "Efecto del modelado|Adquisición: aprender un paso de baile viendo un vídeo|Inhibición o desinhibición: dejar de saltarse un semáforo tras ver una multa; cruzar en rojo porque otros lo hacen sin problema|Facilitación de respuesta: mirar al cielo cuando otros miran"
    ] },
  { t: "Teoría social cognitiva: autoeficacia y determinismo recíproco",
    tip: "Bandura (1986) llamó a su enfoque teoría social cognitiva: pensamientos, expectativas y metas influyen causalmente en la conducta. Propuso un determinismo recíproco triádico entre persona, conducta y ambiente, y una autorregulación basada en criterios propios. La autoeficacia, distinta de la expectativa de resultado y específica de cada tarea, tiene cuatro fuentes, y los logros de ejecución son la más potente.",
    v: [
      "Determinismo recíproco=Influencia mutua entre persona, conducta y ambiente",
      "Autoeficacia=Creencia en la propia capacidad para ejecutar las acciones que llevan a un resultado",
      "Expectativa de resultado=Creencia de que una conducta conduce a un resultado",
      "Autorregulación=Fijarse criterios, observar la propia conducta, compararla y premiarse o criticarse",
      "Logros de ejecución=Experiencias propias de éxito, la fuente más potente de autoeficacia",
      "Experiencia vicaria=Ver a alguien parecido conseguirlo",
      "Persuasión verbal=Que otros digan que uno es capaz",
      "Estados fisiológicos=Interpretación de las propias reacciones corporales y emocionales"
    ],
    g: [
      "Bandura llamó teoría social cognitiva a su enfoque en ___.|1986|1977|1965",
      "Que alguien siga estudiando un sábado sin que nadie lo vea se explica por el ___.|autorrefuerzo|refuerzo vicario|modelado",
      "La autoeficacia es ___ de cada tarea: se puede ser muy capaz al volante y nada al hablar en público.|específica|general|externa",
      "La experiencia vicaria funciona mejor cuanto más ___ es el modelo.|semejante|experto|famoso",
      "Leer el corazón acelerado como nervios normales actúa sobre la fuente de los estados ___.|fisiológicos|vicarios|verbales"
    ],
    tf: [
      "En el determinismo recíproco, el ambiente es la causa última de la conducta.|F|Ningún factor es la causa última: persona, conducta y ambiente se influyen mutuamente, en todas direcciones.",
      "Se puede saber que estudiar a diario aprueba la asignatura y, a la vez, dudar de ser capaz de hacerlo.|V",
      "Según Bandura (1977), la experiencia vicaria es la fuente más potente de autoeficacia.|F|La más potente son los logros de ejecución, porque aportan la prueba más directa de la propia capacidad.",
      "La autoeficacia influye en la elección de tareas, el esfuerzo, la persistencia y la ansiedad.|V"
    ],
    q: [
      "Un chico cree que no se le dan bien los deportes, evita los partidos y sus compañeros dejan de contar con él, lo que confirma su creencia. ¿Qué concepto ilustra?|Determinismo recíproco|Expectativa de resultado|Refuerzo vicario|Persona, conducta y ambiente se influyen mutuamente y se alimentan entre sí. Ningún factor es la causa última.",
      "Una estudiante aprueba el primer parcial de Estadística y se siente más capaz para el segundo. ¿Qué fuente de autoeficacia actúa?|Logros de ejecución|Experiencia vicaria|Persuasión verbal|Es una experiencia propia de éxito, la fuente más potente según Bandura (1977).",
      "¿Por qué en terapia cambian más la autoeficacia las técnicas en que la persona actúa con éxito?|Aportan logros de ejecución|Aumentan la persuasión verbal|Ofrecen modelos semejantes|Hacer y tener éxito es la prueba más directa de capacidad. Informar o animar cambia menos la autoeficacia.",
      "¿Qué diferencia la autoeficacia de la expectativa de resultado?|Se refiere a la capacidad propia|Se refiere a lo que logra el modelo|Se refiere a la conducta del grupo|La autoeficacia es creerse capaz de ejecutar las acciones. La expectativa de resultado es creer que esas acciones llevan al resultado."
    ],
    inc: [
      "Sobre la autoeficacia|Es una capacidad general igual en todas las tareas|Influye en cuánto se persiste ante dificultades|Ver a un experto hacerlo fácil anima poco|Es específica de cada tarea: alguien puede sentirse muy capaz al volante y nada capaz al hablar en público."
    ],
    seq: [],
    cls: [
      "Fuente de autoeficacia|Logros de ejecución: aprobar el primer parcial de Estadística|Experiencia vicaria: ver aprobar a una compañera con un método|Persuasión verbal: el tutor asegura que el trabajo va bien encaminado"
    ] },
  { t: "Imitación, neuronas espejo y aplicaciones del modelado",
    tip: "Meltzoff y Moore (1977) informaron de imitación neonatal, pero Oostenbroek et al. (2016) no la hallaron en 106 bebés, y el debate sigue. Las neuronas espejo se activan al hacer y al ver una acción, pero eso no prueba que permitan comprenderla (Hickok, 2014), y podrían adquirirse por asociación (Heyes, 2010). En la fobia a las serpientes, el modelado participante superó al simbólico y a la desensibilización sistemática.",
    v: [
      "Meltzoff y Moore (1977)=Informaron de que bebés de pocos días reproducían gestos del adulto",
      "Oostenbroek et al. (2016)=No hallaron imitación en 106 bebés observados con 11 gestos",
      "Área F5=Región premotora de macacos donde se describieron las neuronas espejo",
      "Hickok (2014)=Activarse al observar no demuestra que esas neuronas permitan comprender la acción",
      "Heyes (2010)=Las propiedades espejo se adquieren por aprendizaje asociativo entre ver y hacer",
      "Modelado participante=Demostración seguida de práctica guiada con ayudas que se retiran",
      "Modelo de afrontamiento=Empieza con dificultades parecidas a las del observador y las supera",
      "Modelo de maestría=Ejecuta bien la conducta desde el principio"
    ],
    g: [
      "Oostenbroek et al. observaron a los bebés a la 1, 3, 6 y ___ semanas de vida.|9|12|8",
      "Meltzoff et al. (2018) defienden que sí hay imitación de la ___ de la lengua.|protrusión|retracción|rotación",
      "Bandura, Blanchard y Ritter (1969) aplicaron el modelado participante a la fobia a las ___.|serpientes|arañas|alturas",
      "El modelo de ___ suele favorecer más la identificación del observador.|afrontamiento|competencia|excelencia",
      "Entre violencia mediática y agresión, la investigación encuentra asociaciones ___.|pequeñas|nulas|enormes"
    ],
    tf: [
      "Que las neuronas espejo se activen al observar una acción demuestra que son las que permiten comprenderla.|F|Hickok (2014) señaló que activarse al observar no demuestra que sean las responsables de comprender la acción.",
      "Según Heyes (2010), las neuronas espejo podrían ser producto del aprendizaje más que su causa.|V",
      "Oostenbroek et al. (2016) dejaron cerrada la cuestión de la imitación neonatal.|F|Meltzoff et al. (2018) reanalizaron sus datos y defienden la imitación de la lengua. La cuestión sigue en debate.",
      "El modelado participante combina observación, práctica guiada y experiencias de éxito.|V"
    ],
    q: [
      "Para tratar el miedo a los perros, una terapeuta acaricia primero a uno, luego guía a la paciente para que lo haga con ayudas y las retira poco a poco. ¿Qué técnica usa?|Modelado participante|Modelado simbólico|Desensibilización sistemática|Combina demostración, práctica guiada y retirada de ayudas, lo que aporta logros de ejecución.",
      "Para preparar a un niño ante una operación, se le muestra un vídeo de otro niño en esa situación. ¿Qué técnica es?|Modelado simbólico|Modelado participante|Facilitación de respuesta|El modelo se presenta en vídeo. En el modelado participante, la persona practica con ayudas que se retiran.",
      "¿Qué propone Heyes (2010) sobre las neuronas espejo?|Que se forman al coincidir ver y hacer|Que explican por sí solas la empatía|Que son la base innata de la imitación|Sus propiedades espejo se adquirirían por aprendizaje asociativo, porque ver un movimiento y hacerlo suelen ocurrir juntos.",
      "¿En qué se diferencia el modelo de afrontamiento del de maestría?|Supera dificultades poco a poco|Lo hace bien desde el principio|Tiene más prestigio y competencia|Empieza con dificultades parecidas a las del observador y las supera, lo que suele favorecer más la identificación."
    ],
    inc: [
      "Sobre las neuronas espejo|Explican la imitación, la empatía y el autismo|Se describieron en la corteza premotora de macacos|Se activan al ejecutar y al observar una acción|Es un mito que va mucho más allá de los datos. La imitación depende de atención, retención, reproducción y motivación."
    ],
    seq: [
      "Modelado participante|El terapeuta demuestra la conducta>La persona la realiza con ayudas>Se retiran las ayudas poco a poco>La persona la realiza sola"
    ],
    cls: [
      "Postura sobre la imitación neonatal|A favor: Meltzoff y Moore (1977); Meltzoff et al. (2018)|En contra: Oostenbroek et al. (2016)"
    ] }
] },
{ n: 16, t: "Aprendizaje perceptivo-motor y aplicaciones del aprendizaje", cap: 6, pir: "media", mods: [
  { t: "Aprendizaje motor y factores de la práctica",
    tip: "El aprendizaje motor son procesos ligados a la práctica que producen cambios duraderos en la capacidad de actuar con destreza (Schmidt). La ejecución durante la práctica engaña: el aprendizaje se mide con retención y transferencia. En Shea y Morgan (1979), la práctica aleatoria fue peor en la adquisición y mejor en la retención. La retroalimentación muy frecuente puede crear dependencia, aunque el beneficio de reducirla es incierto.",
    v: [
      "Tarea serial=Secuencia de movimientos encadenados, como una coreografía",
      "Tarea abierta=Se realiza en un entorno cambiante, como driblar a un defensa",
      "Retención=Rendimiento tras una demora sin práctica",
      "Transferencia=Rendimiento en una variante nueva de la tarea",
      "Interferencia contextual=La práctica aleatoria empeora la adquisición y mejora la retención",
      "Esquema motor=Regla general que permite ajustar el movimiento a condiciones nuevas (Schmidt, 1975)",
      "Conocimiento de la ejecución=Retroalimentación extrínseca sobre el movimiento, no sobre el resultado",
      "Hipótesis de guía=La retroalimentación muy frecuente guía la ejecución, pero crea dependencia"
    ],
    g: [
      "Shea y Morgan (1979) estudiaron el aprendizaje de varios movimientos de ___.|brazo|pierna|tronco",
      "«El balón se ha ido a la derecha» es conocimiento de ___.|resultados|la ejecución|la tarea",
      "Lo que se siente y se ve al moverse es retroalimentación ___.|intrínseca|extrínseca|aumentada",
      "En el metaanálisis de Brunmair y Richter (2019), la práctica intercalada fue negativa con listas de ___.|palabras|imágenes|números",
      "Practicar un lanzamiento a varias distancias es práctica ___.|variable|masiva|en bloques"
    ],
    tf: [
      "En Shea y Morgan (1979), la práctica en bloques fue mejor durante la práctica y también en la retención.|F|En la retención la ventaja se invertía: la práctica aleatoria retuvo mejor. Es la interferencia contextual.",
      "La práctica distribuida suele favorecer la retención frente a la práctica masiva.|V",
      "Las revisiones que corrigen el sesgo de publicación muestran un beneficio claro de reducir la retroalimentación.|F|McKay et al. (2022) encuentran que el beneficio de reducir su frecuencia es débil o incierto.",
      "En el metaanálisis de Brunmair y Richter, la práctica intercalada tuvo más efecto con estilos de pintura que en matemáticas.|V"
    ],
    q: [
      "Un entrenador valora el progreso de sus jugadores por cómo lanzan al final de cada sesión de práctica en bloques. ¿Qué error comete?|Toma la ejecución por aprendizaje|Usa la práctica distribuida|Mide la transferencia y no la retención|El aprendizaje se mide con retención tras una demora y con transferencia. La ejecución durante la práctica puede engañar.",
      "¿Por qué la práctica aleatoria mejora la retención, según la interferencia contextual?|Obliga a reconstruir el plan en cada ensayo|Reduce los errores durante la adquisición|Permite repetir el mismo movimiento seguido|Alternar tareas obliga a reconstruir el plan de cada movimiento, y ese esfuerzo deja una huella más sólida.",
      "Una entrenadora corrige a su alumno: «Has girado el tronco antes de tiempo». ¿Qué tipo de retroalimentación da?|Conocimiento de la ejecución|Conocimiento de resultados|Retroalimentación intrínseca|Informa sobre el movimiento, no sobre el resultado. Es extrínseca, porque la aporta otra persona.",
      "¿Qué efecto medio obtuvo la práctica intercalada en el metaanálisis de Brunmair y Richter (2019)?|g de 0,42|g de 0,67|g de 0,34|El efecto medio fue de 0,42. El de 0,67 corresponde a estilos de pintura, y el de 0,34, a matemáticas."
    ],
    inc: [
      "Sobre el aprendizaje motor|Se observa directamente durante la práctica|Depende de la práctica y no de la maduración|Sus cambios son relativamente permanentes|Es un proceso interno que se infiere, no se observa. Por eso se mide con retención y transferencia."
    ],
    seq: [],
    cls: [
      "Tipo de retroalimentación extrínseca|Conocimiento de resultados: el balón se ha ido a la derecha; resultado respecto a la meta|Conocimiento de la ejecución: has girado el tronco antes de tiempo; cómo es el movimiento"
    ] },
  { t: "Fases del aprendizaje motor y práctica deliberada",
    tip: "Fitts y Posner (1967) describieron una fase cognitiva, una asociativa y una autónoma, en las que la demanda atencional disminuye hasta permitir la doble tarea. La práctica deliberada (Ericsson, Krampe y Tesch-Römer, 1993) es esforzada, con retroalimentación y poco placentera. Según Macnamara et al. (2014), explica en torno al 12 % de las diferencias de rendimiento, y la regla de las 10.000 horas es de Gladwell, no de Ericsson.",
    v: [
      "Fase cognitiva=Se entiende qué hay que hacer, con errores grandes y atención muy alta",
      "Fase asociativa=Se refina el movimiento y se unen sus partes",
      "Fase autónoma=Ejecución automática, con poca atención y compatible con otra tarea",
      "Doble tarea=Realizar dos actividades a la vez, posible cuando la destreza se automatiza",
      "Práctica deliberada=Práctica esforzada y con retroalimentación para mejorar aspectos concretos",
      "Macnamara et al. (2014)=Metaanálisis de 88 estudios: la práctica explicaba un 12 % de la varianza",
      "Macnamara y Maitra (2019)=Réplica con violinistas en que la práctica explicó un 26 % de la varianza",
      "Regla de las 10.000 horas=Popularización de Gladwell, no un umbral propuesto por Ericsson"
    ],
    g: [
      "Ericsson, Krampe y Tesch-Römer (1993) estudiaron a ___.|violinistas|ajedrecistas|pianistas",
      "Según Macnamara et al. (2014), la práctica deliberada explicó un 26 % de la varianza en ___.|juegos|música|deportes",
      "En profesiones, la práctica deliberada explicó menos del ___ de la varianza.|1 %|4 %|12 %",
      "En la fase ___, quien aprende detecta por sí mismo sus errores.|autónoma|asociativa|cognitiva",
      "Pensar en cada componente mientras se ejecuta una destreza automatizada puede ___.|empeorarla|mejorarla|acelerarla"
    ],
    tf: [
      "Ericsson propuso las 10.000 horas como umbral para alcanzar la pericia.|F|Es una popularización de Gladwell. Ericsson no propuso ese umbral.",
      "Tocar el violín por diversión cuenta como práctica deliberada.|F|La práctica deliberada busca mejorar aspectos concretos, exige esfuerzo, lleva retroalimentación y no suele ser placentera.",
      "En la fase autónoma, la destreza ya admite la doble tarea.|V",
      "En la réplica de Macnamara y Maitra (2019), la práctica deliberada explicó menos varianza que en el estudio original.|V"
    ],
    q: [
      "Una aprendiz de conducir ya no se repite «embrague, marcha, soltar despacio» y comete menos errores, pero aún no puede conversar mientras conduce. ¿En qué fase está?|Asociativa|Cognitiva|Autónoma|Ya no se da instrucciones en voz baja, propio de la cognitiva, pero aún no admite la doble tarea, propia de la autónoma.",
      "Según Macnamara et al. (2014), ¿qué porcentaje de las diferencias de rendimiento explicaba en conjunto la práctica deliberada?|Alrededor del 12 %|Alrededor del 48 %|Alrededor del 26 %|El 48 % es la estimación original con violinistas, y el 26 %, el dato de los juegos y de la réplica de 2019.",
      "¿Qué actividad se ajusta mejor a la práctica deliberada?|Repetir despacio el compás que falla|Tocar por diversión las piezas favoritas|Interpretar el repertorio ante amigos|Se dirige a un aspecto concreto, exige concentración y suele hacerse con la retroalimentación de un profesor.",
      "¿En qué dominios pesa más la práctica deliberada?|Con reglas estables, como la música|En la educación y las profesiones|En todos los dominios por igual|Pesa más en dominios con reglas estables, como el ajedrez o la música, y mucho menos en educación y profesiones."
    ],
    inc: [
      "Sobre las fases de Fitts y Posner|En la fase cognitiva la atención es baja|En la asociativa los errores son menores|En la autónoma la ejecución es fluida|En la fase cognitiva la demanda atencional es muy alta. Disminuye a lo largo de las fases."
    ],
    seq: [
      "Fases de Fitts y Posner|Cognitiva>Asociativa>Autónoma"
    ],
    cls: [
      "Varianza explicada por la práctica deliberada|Más del 15 %: juegos; música; deportes|Menos del 5 %: educación; profesiones"
    ] },
  { t: "Aprendizaje observacional de destrezas motoras",
    tip: "En las destrezas motoras, el análisis de Bandura da un peso especial a la reproducción, y la demostración es útil sobre todo en la fase cognitiva. El modelo aprendiz que corrige sus errores puede ser tan útil como el experto o más. La práctica mental ayuda algo, pero no sustituye a la física. El foco externo (OPTIMAL) es razonable, pero tras corregir el sesgo de publicación su efecto es nulo o pequeño (McKay et al., 2024).",
    v: [
      "Demostración=Muestra de un movimiento que transmite ritmo y coordinación difíciles de explicar",
      "Modelo experto=Muestra la ejecución correcta",
      "Modelo aprendiz=Comete errores y los corrige, lo que obliga a fijarse en qué falla",
      "Práctica mental=Imaginar la ejecución sin moverse",
      "Foco interno=Instrucción que orienta la atención al propio cuerpo, como «mueve la muñeca»",
      "Foco externo=Instrucción que orienta la atención al efecto del movimiento",
      "Teoría OPTIMAL=Foco externo, expectativas positivas y autonomía mejorarían el aprendizaje motor",
      "McKay et al. (2024)=Hallaron sesgo de publicación y efectos nulos o pequeños del foco externo"
    ],
    g: [
      "La demostración es especialmente útil en la fase ___, cuando el problema es entender qué hacer.|cognitiva|asociativa|autónoma",
      "«Manda la pelota al aro» es una instrucción con foco ___.|externo|interno|visual",
      "La teoría OPTIMAL la propusieron Wulf y ___ (2016).|Lewthwaite|Schmidt|McKay",
      "La práctica mental funciona mejor como ___ de la práctica física.|complemento|sustituto|requisito",
      "Chua et al. (2021) estimaron un efecto del foco externo de 0,26 sin corregir el sesgo de ___.|publicación|selección|medida"
    ],
    tf: [
      "El modelo aprendiz siempre es menos útil que el experto porque muestra errores.|F|Puede ser tan útil como el experto o más: obliga a fijarse en qué falla y cómo se arregla, y mejora la autoeficacia.",
      "Según McKay et al. (2024), tras corregir el sesgo, el efecto del foco externo en la retención fue de 0,15.|V",
      "La práctica mental sustituye con eficacia a la práctica física.|F|Suele mejorar algo el rendimiento frente a no practicar, pero no sustituye a la práctica física.",
      "En el aprendizaje observacional de destrezas motoras, el proceso de reproducción tiene un peso especial.|V"
    ],
    q: [
      "Una entrenadora hace la demostración de un tiro y pide que miren solo el codo y la muñeca. ¿Sobre qué proceso de Bandura actúa con esa indicación?|Atención|Retención|Motivación|Una indicación breve dirige la atención al detalle que importa. Poner nombre a los pasos actuaría sobre la retención.",
      "¿Por qué el modelo aprendiz puede mejorar la autoeficacia del observador?|Muestra progresar a alguien de nivel parecido|Muestra la ejecución correcta desde el inicio|Evita que el observador vea errores|Ver progresar a alguien de un nivel parecido refuerza la autoeficacia. La ejecución correcta desde el inicio es la del experto.",
      "¿Qué concluyeron McKay et al. (2024) sobre el foco externo?|Su beneficio es mucho menor de lo creído|Su efecto supera al de la práctica física|Perjudica el aprendizaje en la retención|Tras corregir el sesgo de publicación, los efectos fueron nulos o pequeños. La recomendación es razonable, pero modesta.",
      "Antes de una competición, una gimnasta repasa la secuencia imaginándola sin moverse. ¿Qué dice la evidencia sobre esta práctica?|Es útil como complemento|Sustituye a la práctica física|Empeora la ejecución real|La práctica mental mejora algo el rendimiento frente a no practicar, pero no sustituye a la práctica física."
    ],
    inc: [
      "Sobre la demostración de destrezas|Basta verla para poder ejecutarla|Transmite ritmo y coordinación de golpe|El vídeo permite ralentizar y comparar|Ver no basta: la reproducción exige capacidades motoras, práctica física pronto y retroalimentación."
    ],
    seq: [],
    cls: [
      "Tipo de instrucción|Foco interno: «mueve la muñeca»; atención al propio cuerpo|Foco externo: «manda la pelota al aro»; atención al efecto del movimiento"
    ] },
  { t: "Aplicaciones: análisis aplicado de conducta y técnicas de estudio",
    tip: "El análisis aplicado de la conducta (Baer, Wolf y Risley, 1968) usa los principios del aprendizaje para cambiar conductas socialmente relevantes. El tiempo fuera y el coste de respuesta son castigo negativo, y la economía de fichas falla en el mantenimiento. El manejo de contingencias es muy eficaz en adicciones. Según Dunlosky et al. (2013), la práctica de recuperación y la distribuida tienen utilidad alta, y los estilos de aprendizaje carecen de apoyo.",
    v: [
      "Economía de fichas=Reforzadores generalizados canjeables por otros reforzadores",
      "Contrato de contingencias=Acuerdo escrito que fija conductas y sus consecuencias",
      "Tiempo fuera=Retirada breve del acceso a reforzadores, una forma de castigo negativo",
      "Coste de respuesta=Castigo negativo aplicado, como perder puntos por llegar tarde",
      "RDI=Reforzar conductas incompatibles con la conducta problema",
      "Manejo de contingencias=Incentivos contingentes a la abstinencia verificada con análisis",
      "EIBI=Intervención conductual intensiva y temprana propuesta por Lovaas (1987)",
      "Práctica de recuperación=Hacerse preguntas sin mirar, de utilidad alta según Dunlosky et al."
    ],
    g: [
      "La economía de fichas se aplicó en hospitales psiquiátricos (Ayllon y ___, 1968).|Azrin|Lovaas|Risley",
      "Retirar puntos a un alumno cada vez que interrumpe la clase es castigo ___.|negativo|positivo|vicario",
      "En el metaanálisis de Prendergast et al. (2006), el manejo de contingencias tuvo menos efecto con ___.|tabaco|cocaína|opiáceos",
      "Según Dunlosky et al. (2013), el subrayado tiene una utilidad ___.|baja|moderada|alta",
      "La «pirámide del aprendizaje» se atribuye al cono de ___ (1946), que no contenía cifras.|Dale|Bruner|Pashler"
    ],
    tf: [
      "El tiempo fuera es un castigo positivo porque añade una consecuencia desagradable.|F|Es castigo negativo: retira de forma breve el acceso a reforzadores.",
      "El punto débil de la economía de fichas es el mantenimiento cuando se retiran las fichas.|V",
      "Según Reichow et al. (2018), la intervención EIBI redujo de forma significativa la gravedad de los síntomas del autismo.|F|No halló efecto significativo en la gravedad, sí en conducta adaptativa, CI y lenguaje, con evidencia de calidad baja.",
      "El efecto del manejo de contingencias se reduce al retirar los incentivos, pero no desaparece.|V"
    ],
    q: [
      "Un niño que pega a sus compañeros pasa unos minutos fuera del juego cada vez que lo hace. ¿Qué técnica se aplica?|Tiempo fuera|Coste de respuesta|Castigo positivo|Retira de forma breve el acceso a reforzadores: es castigo negativo. El coste de respuesta quitaría un reforzador ya obtenido.",
      "¿Qué técnicas de estudio tienen utilidad alta según Dunlosky et al. (2013)?|Recuperación y práctica distribuida|Autoexplicación y práctica intercalada|Resumen y relectura|La autoexplicación y la práctica intercalada tienen utilidad moderada, y el resumen y la relectura, baja.",
      "Una profesora decide enseñar con vídeos a los alumnos «visuales» y con audios a los «auditivos». ¿Qué dice la evidencia?|Esa adaptación no tiene apoyo|Mejora el rendimiento de todos|Solo funciona con los visuales|Adaptar la enseñanza a un estilo visual, auditivo o kinestésico carece de apoyo (Pashler et al., 2008).",
      "Elogiar a un niño cuando juega sin pegar es un ejemplo de…|RDO|tiempo fuera|coste de respuesta|Se refuerzan conductas distintas de la conducta problema. El tiempo fuera y el coste de respuesta son castigo negativo."
    ],
    inc: [
      "Sobre la práctica distribuida|Su intervalo óptimo es siempre el mismo|Tiene utilidad alta según Dunlosky et al.|Supera a concentrar el estudio en una sesión|El intervalo óptimo entre sesiones crece cuanto más tiempo se quiere recordar (Cepeda et al., 2006)."
    ],
    seq: [],
    cls: [
      "Técnica operante|Castigo negativo: tiempo fuera; coste de respuesta|Reforzamiento: economía de fichas; RDO; RDI"
    ] }
] }
);

SP.register(window.COURSE);
})({});
