(function(window){
// SAIMAP Psicología · Personalidad y Diferencias Individuales II
// Contenido alineado con el temario SAIMAP «Personalidad y Diferencias Individuales II» (v1.0, noviembre de 2026).
window.COURSE = {
  id: "personalidad-2",
  title: "Personalidad y Diferencias Individuales II",
  short: "Personalidad II",
  area: "Personalidad y evaluación",
  rutas: { grado: { curso: 2 }, pir: { bloque: "Evaluación y personalidad" } },
  temario: "Personalidad-y-Diferencias-Individuales-II_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "La inteligencia: qué es, cómo se mide y cómo se organiza", from: 1, to: 3 },
    { n: 2, t: "Dentro de la mente inteligente: procesos, teorías alternativas y cerebro", from: 4, to: 6 },
    { n: 3, t: "Cognición, emoción y control: de la inteligencia emocional a la indefensión", from: 7, to: 9 },
    { n: 4, t: "El yo: cómo nos conocemos y cómo nos valoramos", from: 10, to: 11 },
    { n: 5, t: "Diferencias entre grupos y su origen: sexo, edad, genes y ambiente", from: 12, to: 14 },
    { n: 6, t: "Para qué sirve todo esto: salud, aula y trabajo", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Personalidad II · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "Qué es la inteligencia y cómo empezó a medirse", cap: 1, pir: "media", mods: [
  { t: "Definir la inteligencia: acuerdos y desacuerdos",
    tip: "No hay una definición única de inteligencia, pero los simposios de 1921 y 1986 y la declaración de Gottfredson (1997) muestran un núcleo compartido: razonar, resolver problemas, pensar en abstracto y aprender de la experiencia. La frase de Boring (1923), «lo que miden los tests», era una definición operativa provisional, no una conclusión. Lo que sigue en debate es cuán amplia debe ser la definición y cuánto pesan las influencias ambientales.",
    v: [
      "Conductismo=Corriente que limitaba la psicología a la conducta observable",
      "Metáfora del ordenador=La mente recibe, transforma, almacena y recupera información",
      "Boring (1923)=Propuso que la inteligencia es «lo que miden los tests»",
      "Simposio de 1986=Reunión de especialistas recogida por Sternberg y Detterman",
      "Metacognición=Conocimiento y control de los propios procesos mentales",
      "Gottfredson (1997)=Definición de consenso firmada por 52 investigadores",
      "Neisser et al. (1996)=Informe encargado por la APA sobre lo que se sabía con seguridad",
      "Nisbett et al. (2012)=Actualización del informe de la APA con más peso del ambiente"
    ],
    g: [
      "El simposio de 1921 lo organizó el «Journal of ___ Psychology».|Educational|Experimental|Applied",
      "En el simposio de 1986 se añadió con fuerza la ___ a los elementos de la definición.|metacognición|creatividad|adaptación",
      "La declaración de Gottfredson (1997) la firmaron ___ investigadores.|52|25|100",
      "El manual de Neisser (___) dio nombre a la psicología cognitiva.|1967|1960|1923",
      "La frase de Boring era una definición ___ provisional, no una conclusión.|operativa|sustantiva|factorial"
    ],
    tf: [
      "Los especialistas coinciden en que las capacidades mentales correlacionan entre sí, aunque discuten si hay una inteligencia o varias.|V",
      "El informe de Nisbett et al. (2012) redujo el peso de las influencias ambientales respecto al de Neisser et al. (1996).|F|Fue al revés: Nisbett et al. (2012) dieron más peso a las influencias ambientales.",
      "Según los informes de la APA, las puntuaciones de CI predicen resultados fuera del test, como el rendimiento escolar.|V",
      "Que la definición de inteligencia deba incluir la creatividad o la emoción es un punto de acuerdo entre los especialistas.|F|Es un punto de desacuerdo. El acuerdo está en razonar, resolver problemas y aprender."
    ],
    q: [
      "Marta resuelve rápido los problemas de lógica, pero se bloquea en las discusiones de pareja. Su hermano saca notas medianas y organiza a la perfección una mudanza. ¿De qué depende que ambos sean «inteligentes»?|De la amplitud de la definición|Del baremo del test aplicado|De la edad mental de cada uno|El ejemplo ilustra el desacuerdo sobre cuán amplia debe ser la definición de inteligencia.",
      "¿Qué recoge mejor la definición de Gottfredson (1997)?|Una capacidad mental muy general|Un conjunto de ocho inteligencias|Lo que miden los tests de CI|Habla de una capacidad mental muy general que implica razonar, planificar, resolver problemas y aprender.",
      "¿Qué hecho reflejaba la frase de Boring (1923)?|Los tests funcionaban mejor que las teorías|La inteligencia no podía medirse bien|Los tests sensoriales eran los mejores|A principios de siglo, los tests funcionaban mejor que las teorías que intentaban explicarlos.",
      "¿Qué aportó el enfoque cognitivo a la tradición de los tests?|Una teoría de los procesos|La idea de edad mental|El análisis factorial|Los tests medían capacidades sin teoría de procesos. El enfoque cognitivo permitió preguntar qué hace la mente al puntuar."
    ],
    inc: [
      "Sobre la definición de inteligencia|El CI no dice nada fuera del test|Hay acuerdo en razonar y resolver problemas|Se debate si incluir la sabiduría|Es un mito: que el CI no lo abarque todo no significa que no mida nada. Predice, por ejemplo, el rendimiento escolar."
    ],
    seq: [],
    cls: [
      "Definición de inteligencia|Acuerdo: razonar; resolver problemas; aprender; capacidades que correlacionan|Desacuerdo: incluir creatividad o emoción; una o varias inteligencias; qué queda fuera del test"
    ] },
  { t: "De Galton a Binet: los primeros tests",
    tip: "Galton abrió en Londres en 1884 un laboratorio antropométrico con la idea de que una mente capaz depende de sentidos finos. Cattell acuñó «mental tests» en 1890, pero Wissler (1901) mostró que esas pruebas apenas correlacionaban entre sí ni con las notas. Binet y Simon (1905) cambiaron a tareas de juicio, comprensión y razonamiento y crearon la edad mental. En 1917, el grupo de Yerkes elaboró los tests colectivos Army Alpha y Army Beta.",
    v: [
      "Laboratorio antropométrico=Centro de Galton en Londres que medía capacidades sensoriales y físicas",
      "Mental tests=Expresión de Cattell (1890) para baterías de pruebas sensoriales y motoras",
      "Wissler (1901)=Mostró que las pruebas sensoriales apenas se relacionaban con las notas",
      "Escala Binet-Simon=Primera escala práctica, con tareas de juicio, comprensión y razonamiento",
      "Edad mental=Nivel de edad cuyas tareas típicas resuelve el niño",
      "Army Alpha=Test colectivo verbal de 1917 para reclutas",
      "Army Beta=Test colectivo no verbal para quienes no leían o no dominaban el inglés",
      "Yerkes=Dirigió el grupo que elaboró los tests del ejército en 1917"
    ],
    g: [
      "Galton abrió su laboratorio antropométrico en Londres en ___.|1884|1890|1905",
      "Binet y Simon publicaron su escala en ___.|1905|1901|1912",
      "La escala de Binet se revisó en 1908 y en ___.|1911|1916|1939",
      "Un niño de siete años que resuelve las tareas típicas de los nueve tiene una edad mental de ___ años.|nueve|siete|ocho",
      "Para Binet, la puntuación era una herramienta para ___ al niño.|ayudar|etiquetar|excluir"
    ],
    tf: [
      "Galton suponía que quien discrimina mejor los estímulos dispone de más material para pensar.|V",
      "Wissler (1901) comprobó que las pruebas sensoriales predecían bien las calificaciones universitarias.|F|Halló que apenas correlacionaban entre sí ni con las calificaciones de los estudiantes.",
      "Para Binet, la puntuación de su escala medía una cantidad fija e innata.|F|Para Binet era una herramienta para ayudar al niño, no la medida de algo fijo e innato.",
      "El tiempo de reacción volvió décadas después como posible indicador de la velocidad mental.|V"
    ],
    q: [
      "Un orientador necesita evaluar en una mañana a 300 reclutas, muchos de los cuales no saben leer. ¿Qué prueba histórica responde a esa necesidad?|El Army Beta|El Army Alpha|La escala Binet-Simon|El Army Beta era colectivo y no verbal, pensado para quienes no sabían leer o no dominaban el inglés.",
      "¿Qué problema práctico motivó la escala de Binet y Simon?|Detectar niños que no avanzaban|Clasificar reclutas del ejército|Medir la agudeza sensorial|Las autoridades francesas querían detectar a los niños que necesitaban una atención especial en la escuela.",
      "¿Qué cambio de enfoque introdujo Binet frente a Galton?|Tareas de juicio y razonamiento|Medidas de tiempo de reacción|Pruebas de discriminación de pesos|Binet sustituyó los procesos sensoriales simples por tareas parecidas a las que exige la escuela.",
      "¿Quién acuñó la expresión «mental tests»?|Cattell|Galton|Wissler|James McKeen Cattell la acuñó en 1890 en Estados Unidos para una batería de pruebas sensoriales."
    ],
    inc: [
      "Sobre los primeros tests|Las pruebas de Galton predijeron el rendimiento escolar|Binet ordenó las tareas por edad de resolución|Galton impulsó la estadística de las diferencias|Fueron los tests de Binet, no las pruebas sensoriales de Galton, los que predijeron el rendimiento escolar."
    ],
    seq: [
      "Primeros hitos de la medida de la inteligencia|Laboratorio de Galton (1884)>Mental tests de Cattell (1890)>Crítica de Wissler (1901)>Escala Binet-Simon (1905)>Army Alpha y Beta (1917)"
    ],
    cls: [
      "Tradición|Sensorial: Galton; Cattell; discriminación de pesos; tiempo de reacción|Práctica: Binet; Simon; edad mental; tareas de comprensión"
    ] },
  { t: "El cociente intelectual: de Stern a Wechsler",
    tip: "Stern (1912) propuso dividir la edad mental entre la cronológica, y Terman, en el Stanford-Binet (1916), multiplicó por 100 y popularizó el CI de razón. Falla en adultos y su dispersión cambia con la edad. Wechsler (1939) introdujo el CI de desviación: compara con el grupo de edad, con media 100 y desviación típica 15. Es una puntuación relativa que depende del baremo.",
    v: [
      "CI de razón=Edad mental dividida por la cronológica y multiplicada por 100",
      "Stern (1912)=Propuso dividir la edad mental entre la edad cronológica",
      "Terman=Adaptó la escala de Binet en Stanford y multiplicó el cociente por 100",
      "Stanford-Binet=Adaptación estadounidense de la escala de Binet publicada en 1916",
      "CI de desviación=Puntuación relativa al grupo de edad, con media 100 y DT 15",
      "Wechsler-Bellevue=Escala de 1939 pensada para adultos",
      "WISC=Escala heredera de la de Wechsler para niños",
      "Baremo=Grupo de referencia con el que se compara la puntuación de una persona"
    ],
    g: [
      "Una niña de ocho años con una edad mental de diez obtiene un CI de razón de ___.|125|80|120",
      "Un CI de 85 está a ___ por debajo de la media.|una desviación típica|media desviación típica|dos desviaciones típicas",
      "En torno al ___ de la población puntúa entre 85 y 115.|68 %|50 %|95 %",
      "Cerca del 95 % de la población puntúa entre 70 y ___.|130|115|145",
      "Aproximadamente el ___ de la población puntúa por debajo de 130.|98 %|84 %|95 %"
    ],
    tf: [
      "El CI de desviación fue propuesto por Stern y popularizado por Terman.|F|Stern y Terman corresponden al CI de razón. El de desviación es de Wechsler (1939).",
      "Con la fórmula de razón, un adulto parecería perder inteligencia con cada cumpleaños.|V",
      "Un CI de 115 significa que la persona tiene una edad mental adelantada.|F|En el CI de desviación no hay edad mental: 115 indica una desviación típica por encima de la media de su edad.",
      "Si la población mejora con los años, un baremo antiguo infla las puntuaciones de CI.|V"
    ],
    q: [
      "Luis, de 40 años, obtiene un CI de 100 en el WAIS. ¿Qué significa?|Que está en la media de su edad|Que tiene la edad mental de un adulto|Que supera al 84 % de su grupo|Un CI de desviación de 100 indica la media de los adultos de su edad en el baremo, no una edad mental.",
      "¿Cuál es el segundo problema del CI de razón, además de su falta de sentido en adultos?|Su dispersión cambia con la edad|Exige aplicarlo de forma colectiva|Solo mide tareas sensoriales|Un mismo CI de razón no indica la misma posición relativa a todas las edades.",
      "¿Qué proporción aproximada de la población puntúa por debajo de un CI de 115?|84 %|68 %|98 %|115 está a +1 DT. Por debajo queda el 50 % hasta la media más el 34 % hasta +1 DT.",
      "¿Quién popularizó la expresión «cociente intelectual»?|Terman|Stern|Wechsler|Terman, al adaptar la escala en Stanford (1916), multiplicó por 100 y popularizó la expresión CI."
    ],
    inc: [
      "Sobre el CI de desviación|Expresa una cantidad absoluta, como los centímetros|Compara a cada persona con su grupo de edad|Usa una escala de media 100 y DT 15|El CI es una puntuación relativa, no una cantidad absoluta, y depende del baremo."
    ],
    seq: [
      "Historia del cociente intelectual|Edad mental de Binet>Cociente de Stern (1912)>Stanford-Binet de Terman (1916)>CI de desviación de Wechsler (1939)"
    ],
    cls: [
      "Tipo de CI|De razón: Stern; Terman; edad mental; Stanford-Binet|De desviación: Wechsler; grupo de edad; media 100 y DT 15; WAIS y WISC"
    ] },
  { t: "Tres maneras de estudiarla: diferencial, cognitiva y biológica",
    tip: "El enfoque diferencial pregunta por la estructura de las diferencias y usa el análisis factorial: mide y predice, pero no explica procesos. El cognitivo pregunta qué procesos hay tras la puntuación, con dos estrategias: correlatos (Hunt) y componentes (Sternberg). El biológico busca bases cerebrales y genéticas. Los tres describen el mismo fenómeno a niveles distintos, y ninguno es «más real».",
    v: [
      "Enfoque diferencial=Pregunta por la estructura de las diferencias mediante análisis factorial",
      "Análisis factorial=Busca pocas dimensiones latentes que expliquen las correlaciones entre pruebas",
      "Enfoque cognitivo=Pregunta qué procesos mentales hay detrás de una puntuación",
      "Correlatos cognitivos=Estrategia de Hunt que relaciona el test con tareas elementales",
      "Componentes cognitivos=Estrategia de Sternberg que descompone los ítems en pasos",
      "Enfoque biológico=Pregunta qué bases cerebrales y genéticas tienen las diferencias",
      "Galton=Raíz histórica del enfoque biológico, ya suponía una base orgánica",
      "Niveles de explicación=Respuestas complementarias a un mismo hecho, sin que una sustituya a otra"
    ],
    g: [
      "La fuerza del enfoque diferencial está en la medida y la ___, pero no explica qué procesos producen las diferencias.|predicción|experimentación|neuroimagen",
      "La estrategia de los correlatos cognitivos se asocia a ___.|Hunt|Sternberg|Spearman",
      "Descomponer un ítem en codificar, inferir, aplicar y responder es la estrategia de los ___ cognitivos.|componentes|correlatos|factores",
      "El enfoque ___ estudia la red parieto-frontal y la heredabilidad.|biológico|cognitivo|diferencial",
      "Del enfoque diferencial salen el factor g, las aptitudes primarias y los modelos ___.|jerárquicos|genómicos|procesuales"
    ],
    tf: [
      "Los enfoques diferencial, cognitivo y biológico compiten por explicar la inteligencia, y solo uno puede ser correcto.|F|No compiten: describen el mismo fenómeno a niveles diferentes y se necesitan entre sí.",
      "Una correlación entre una medida cerebral y el CI no dice por sí sola qué causa qué.|V",
      "La estrategia de los correlatos cognitivos descompone los ítems de los tests en pasos de procesamiento.|F|Eso es la estrategia de componentes de Sternberg. La de correlatos, de Hunt, relaciona el test con tareas elementales.",
      "La relación entre memoria de trabajo e inteligencia fluida es un resultado típico del enfoque cognitivo.|V"
    ],
    q: [
      "Ana y Pablo difieren en 20 puntos de CI. Un investigador comprueba que Ana mantiene más información activa mientras razona. ¿Qué enfoque adopta?|El cognitivo|El diferencial|El biológico|Explicar la diferencia por un proceso, la memoria de trabajo, es propio del enfoque cognitivo.",
      "Un investigador relaciona las puntuaciones de un test con la rapidez para acceder al significado de una palabra. ¿Qué estrategia sigue?|Correlatos cognitivos|Componentes cognitivos|Análisis factorial|Relacionar el test con tareas elementales es la estrategia de correlatos, asociada a Hunt.",
      "¿Qué hecho empírico sirve de punto de partida al enfoque diferencial?|Quien rinde bien en una prueba rinde bien en otras|Quien es rápido en tareas simples puntúa más|Quien tiene más volumen cerebral razona mejor|De esas correlaciones positivas entre pruebas parte el análisis factorial.",
      "¿Qué método típico corresponde al enfoque biológico?|Estudios de gemelos y genómicos|Análisis factorial de baterías|Tareas experimentales elementales|El enfoque biológico usa neuroimagen, estudios de gemelos y estudios genómicos."
    ],
    inc: [
      "Sobre los enfoques de estudio|El nivel biológico es más real que los demás|El diferencial destaca en medida y predicción|El cognitivo usa tareas de la psicología experimental|Ningún nivel es «más real»: son niveles de explicación complementarios de un mismo hecho."
    ],
    seq: [],
    cls: [
      "Enfoque|Diferencial: análisis factorial; factor g; jerarquía de capacidades|Cognitivo: correlatos de Hunt; componentes de Sternberg; memoria de trabajo|Biológico: neuroimagen; gemelos; red parieto-frontal"
    ] }
] },
{ n: 2, t: "Los modelos factoriales clásicos", cap: 1, pir: "alta", mods: [
  { t: "Spearman y el factor g",
    tip: "Spearman (1904) observó que todas las correlaciones entre pruebas eran positivas, la variedad positiva. Su teoría bifactorial explica cada prueba por un factor general g y uno específico s, y usó las diferencias tetrádicas para comprobar que bastaba un factor común. Entendió g como «energía mental» y describió tres leyes noegenéticas. Su ley de rendimientos decrecientes (1927) dice que g explica menos varianza en los niveles altos, no que se pierda capacidad.",
    v: [
      "Variedad positiva=Patrón por el que todas las pruebas cognitivas correlacionan positivamente",
      "Teoría bifactorial=Cada prueba depende de un factor general y de uno específico",
      "Factor s=Factor propio de cada prueba, no compartido con las demás",
      "Saturación en g=Grado en que una prueba depende del factor general",
      "Diferencias tetrádicas=Criterio que, si es nulo, indica que basta un único factor común",
      "Educción de relaciones=Descubrir qué relación une a dos o más elementos",
      "Educción de correlatos=Dada una relación y un elemento, generar el que falta",
      "Factores de grupo=Comunes a varias pruebas parecidas, pero no a todas"
    ],
    g: [
      "Spearman describió g como una especie de «___ mental» general.|energía|velocidad|estructura",
      "Las tres leyes ___ de Spearman describen las operaciones de g.|noegenéticas|tetrádicas|factoriales",
      "«Caliente es a frío como alto es a…» exige educción de ___.|correlatos|relaciones|experiencia",
      "Tachar letras con rapidez es una prueba con ___ saturación en g.|baja|alta|nula",
      "Spearman formuló la ley de rendimientos decrecientes en ___.|1927|1904|1938"
    ],
    tf: [
      "La variedad positiva se ha repetido en prácticamente cualquier batería amplia de pruebas cognitivas.|V",
      "La ley de rendimientos decrecientes afirma que la capacidad intelectual disminuye en los niveles altos.|F|Es una trampa típica: dice que g explica menos varianza en los niveles altos, donde las capacidades se diferencian más.",
      "Las pruebas que más saturan en g son las que exigen educir relaciones y correlatos, como las matrices.|V",
      "Spearman mantuvo siempre que solo existían g y s, sin ningún factor intermedio.|F|Reconoció más adelante algunos factores de grupo, lo que abrió la puerta a los modelos jerárquicos."
    ],
    q: [
      "En un grupo con dificultades de aprendizaje, lectura, cálculo y razonamiento van muy unidos. En un grupo brillante abundan los perfiles desiguales. ¿Qué ilustra?|La ley de rendimientos decrecientes|La educción de correlatos|La estructura simple de Thurstone|En los niveles altos, g explica menos varianza y las capacidades se diferencian más.",
      "¿Qué tarea ilustra la educción de relaciones?|Decir qué tienen en común martillo y destornillador|Completar «caliente es a frío como alto es a…»|Comprender lo que se percibe en una lámina|Descubrir la relación entre dos elementos es educción de relaciones. Completar la analogía es educción de correlatos.",
      "¿Qué indicaban unas diferencias tetrádicas nulas?|Que bastaba un único factor común|Que había varios factores de grupo|Que las pruebas eran independientes|Si solo hay un factor común, ciertos productos cruzados de las correlaciones son iguales y su diferencia es cero.",
      "Spearman correlacionó notas escolares y pruebas de discriminación sensorial. ¿Qué encontró?|Todas las correlaciones eran positivas|Solo las notas correlacionaban entre sí|Las pruebas sensoriales eran independientes|Ese patrón, la variedad positiva, es uno de los hallazgos más sólidos de la psicología."
    ],
    inc: [
      "Sobre la teoría de Spearman|El factor s es común a las pruebas verbales|El factor g explica por qué las pruebas correlacionan|Las diferencias tetrádicas anticipan el análisis factorial|El factor s es propio de cada prueba concreta. Lo común a todas es g."
    ],
    seq: [
      "Leyes noegenéticas de Spearman|Aprehensión de la experiencia>Educción de relaciones>Educción de correlatos"
    ],
    cls: [] },
  { t: "Thurstone: siete capacidades en lugar de una",
    tip: "Thurstone desarrolló el análisis factorial múltiple y la rotación hacia una estructura simple, con la que g se repartía entre factores de grupo. En 1938 propuso siete aptitudes mentales primarias: V, W, N, S, M, P y R. Pero correlacionaban entre sí, y al aceptar una rotación oblicua surgió un g de segundo orden. Thurstone no demostró que g no existe: lo desplazó un nivel hacia arriba.",
    v: [
      "Análisis factorial múltiple=Método que extrae varios factores comunes a la vez",
      "Estructura simple=Cada prueba satura mucho en un factor y casi nada en los demás",
      "Rotación oblicua=Solución que permite que los factores correlacionen entre sí",
      "Factor de segundo orden=Factor que surge de las correlaciones entre factores primarios",
      "Comprensión verbal=Aptitud V, entender el significado de palabras y textos",
      "Fluidez verbal=Aptitud W, producir palabras con rapidez",
      "Rapidez perceptiva=Aptitud P, detectar detalles y semejanzas con rapidez",
      "Perfil de aptitudes=Puntos fuertes y débiles en lugar de un único número"
    ],
    g: [
      "Thurstone propuso sus siete aptitudes mentales primarias en ___.|1938|1904|1950",
      "Decir palabras que empiecen por «m» en un minuto mide la aptitud ___.|W|V|R",
      "Completar una serie de letras mide la aptitud de ___.|razonamiento|memoria|fluidez verbal",
      "Recordar pares nombre-cara mide la aptitud ___.|M|P|S",
      "Thurstone aplicó sus baterías sobre todo a ___.|estudiantes|reclutas|niños"
    ],
    tf: [
      "Spearman y Thurstone describían los mismos datos con criterios de rotación distintos.|V",
      "Thurstone mantuvo hasta el final que sus siete aptitudes eran independientes y que g no existía.|F|Al aceptar factores correlacionados, de sus correlaciones surgió un g de segundo orden que acabó aceptando.",
      "Con la rotación hacia una estructura simple, el factor general se reparte entre varios factores de grupo.|V",
      "Reconocer una figura girada es una tarea típica de la aptitud de rapidez perceptiva.|F|Es una tarea de aptitud espacial (S). La rapidez perceptiva (P) consiste en detectar detalles, como dos dibujos iguales."
    ],
    q: [
      "Un orientador recibe el informe de una alumna con puntuaciones altas en comprensión verbal y medias en aptitud espacial. ¿Qué aportación de Thurstone aprovecha?|El perfil de aptitudes|El factor de segundo orden|La ley de rendimientos decrecientes|Thurstone propuso describir a cada persona por un perfil de puntos fuertes y débiles, útil para orientar.",
      "¿Qué ocurrió cuando Thurstone permitió que sus aptitudes correlacionaran?|Surgió un g de segundo orden|Se redujeron a dos grandes factores|Se confirmó su independencia|Las correlaciones entre aptitudes primarias se analizaron a su vez y de ellas surgió un factor general.",
      "¿En qué discrepó Thurstone de Spearman?|En la interpretación de los datos|En los datos de correlación|En la existencia de la variedad positiva|Thurstone no discutía los datos, sino cómo interpretarlos: Spearman destacaba lo común, y él, lo diferenciado.",
      "Encontrar dos dibujos iguales entre varios parecidos es una tarea de…|rapidez perceptiva|aptitud espacial|razonamiento|La aptitud P consiste en detectar detalles y semejanzas con rapidez."
    ],
    inc: [
      "Sobre el modelo de Thurstone|Sus aptitudes primarias no correlacionaban|Desarrolló el análisis factorial múltiple|Su aportación duradera son capacidades diferenciables|Las aptitudes primarias correlacionaban positivamente, y de esas correlaciones surgió un g de segundo orden."
    ],
    seq: [],
    cls: [
      "Modelo factorial|Spearman: teoría bifactorial; diferencias tetrádicas; g como energía mental|Thurstone: análisis factorial múltiple; estructura simple; g de segundo orden"
    ] },
  { t: "Guilford y la estructura del intelecto",
    tip: "El modelo de la estructura del intelecto parte de una clasificación teórica con tres dimensiones: operaciones, contenidos y productos. Pasó de 120 capacidades (1967) a 150 (1977) y 180 (1988). Su aportación más influyente es separar producción divergente y convergente, que son operaciones. Guilford concebía las capacidades como independientes, pero correlacionaban, y Horn y Knapp (1973) mostraron que sus rotaciones procrusteanas ajustaban incluso estructuras al azar.",
    v: [
      "Estructura del intelecto=Modelo de Guilford basado en una clasificación teórica de tareas",
      "Operaciones=Dimensión de Guilford sobre qué hace la mente",
      "Contenidos=Dimensión de Guilford sobre el tipo de información con que se trabaja",
      "Productos=Dimensión de Guilford sobre la forma que toma el resultado",
      "Producción divergente=Operación que genera muchas respuestas posibles",
      "Producción convergente=Operación que busca la única respuesta correcta",
      "Rotación procrusteana=Fuerza los datos hacia una estructura definida de antemano",
      "Horn y Knapp (1973)=Mostraron que estructuras elegidas al azar también ajustaban"
    ],
    g: [
      "La versión de 1967 del modelo de Guilford tenía ___ capacidades.|120|150|180",
      "Guilford llegó a 150 capacidades al dividir el contenido figurativo en visual y ___.|auditivo|simbólico|conductual",
      "Al separar la memoria en dos operaciones, el total subió a 180 en ___.|1988|1977|1967",
      "Las implicaciones son un tipo de ___ en el modelo de Guilford.|producto|contenido|operación",
      "Elegir la única respuesta correcta en un problema de lógica es producción ___.|convergente|divergente|evaluativa"
    ],
    tf: [
      "En el modelo de Guilford, la producción divergente es un tipo de contenido.|F|Es una operación, junto con cognición, memoria, producción convergente y evaluación.",
      "Guilford rechazaba la existencia de un factor general de inteligencia.|V",
      "El buen ajuste obtenido con rotaciones procrusteanas probaba que el modelo de Guilford era correcto.|F|Horn y Knapp (1973) mostraron que también ajustaban estructuras al azar, así que el ajuste no probaba nada.",
      "Hoy el modelo de Guilford se valora sobre todo como una taxonomía de tareas.|V"
    ],
    q: [
      "En una prueba se pide pensar el mayor número posible de usos para un ladrillo. ¿Cómo se clasifica en el cubo de Guilford?|Producción divergente de unidades semánticas|Producción convergente de clases semánticas|Evaluación de implicaciones simbólicas|Generar muchas respuestas es producción divergente. El resultado son unidades con contenido semántico.",
      "¿Qué problema empírico contradice la independencia de las capacidades de Guilford?|Sus pruebas correlacionaban positivamente|Sus pruebas tenían fiabilidad nula|Sus contenidos no eran observables|Las correlaciones positivas entre pruebas vuelven a señalar un factor común.",
      "¿Qué investigación inspiró sobre todo la distinción entre producción divergente y convergente?|La de la creatividad|La de la velocidad mental|La de la memoria de trabajo|La producción divergente inspiró buena parte de la investigación sobre creatividad y de sus tests.",
      "¿Qué elemento es una operación en el modelo de Guilford?|La evaluación|Las transformaciones|Lo simbólico|Las operaciones son cognición, memoria, producción divergente, producción convergente y evaluación."
    ],
    inc: [
      "Sobre el modelo de Guilford|Se basó en las correlaciones observadas|Cada capacidad combina tres dimensiones|Usó rotaciones procrusteanas|No parte de las correlaciones observadas, sino de una clasificación teórica de las tareas intelectuales."
    ],
    seq: [
      "Número de capacidades en el modelo de Guilford|120 capacidades (1967)>150 capacidades (1977)>180 capacidades (1988)"
    ],
    cls: [
      "Dimensión de Guilford|Operaciones: cognición; memoria; producción divergente; producción convergente; evaluación|Contenidos: figurativo; simbólico; semántico; conductual|Productos: unidades; clases; relaciones; sistemas; transformaciones; implicaciones"
    ] },
  { t: "Burt y Vernon: la primera jerarquía",
    tip: "La escuela británica, con Burt y sobre todo Vernon (1950), propuso el primer modelo jerárquico. Tiene cuatro niveles: g en la cúspide, dos factores de grupo mayores (verbal-educativo y espacial-mecánico), factores de grupo menores y factores específicos. Mostró que Spearman y Thurstone tenían razón en niveles distintos y anticipó el modelo VPR. Su límite fue un nivel intermedio poco desarrollado.",
    v: [
      "Modelo jerárquico=Integra el factor general y los factores de grupo en una sola estructura",
      "Vernon (1950)=Autor principal del primer modelo jerárquico británico",
      "v:ed=Factor de grupo mayor verbal-educativo",
      "k:m=Factor de grupo mayor espacial-mecánico",
      "Factores de grupo menores=Aptitudes más concretas, como la numérica o la visualización",
      "Factores específicos=Nivel inferior, propio de cada prueba concreta",
      "Análisis por pasos=Extraer g y agrupar después las correlaciones que quedan",
      "Escuela británica=Siguió la vía jerárquica frente a los factores múltiples estadounidenses"
    ],
    g: [
      "Vernon publicó su modelo jerárquico en ___.|1950|1938|1993",
      "El factor ___ reúne capacidades verbales, numéricas y escolares.|v:ed|k:m|g",
      "La información mecánica es un factor de grupo menor dentro de ___.|k:m|v:ed|g",
      "El nivel intermedio del modelo de Vernon lo desarrolló mucho más la síntesis de ___.|Carroll|Thurstone|Guilford",
      "La distinción de Vernon reaparece en el modelo VPR de Johnson y Bouchard (___).|2005|1993|1973"
    ],
    tf: [
      "El modelo de Vernon fue el primero en integrar explícitamente g y los factores de grupo.|V",
      "En el modelo de Vernon, el factor k:m agrupa capacidades verbales, numéricas y escolares.|F|Eso es v:ed. El factor k:m reúne capacidades espaciales, mecánicas, prácticas y psicomotoras.",
      "El principal límite del modelo de Vernon fue un nivel intermedio poco desarrollado.|V",
      "Según Vernon, había que elegir entre el modelo de Spearman y el de Thurstone.|F|Mostró que no hacía falta elegir: ambos tenían parte de razón, en niveles distintos de la jerarquía."
    ],
    q: [
      "Irene y Sergio tienen una capacidad general parecida, pero ella destaca en vocabulario y él en rotación de figuras. Según Vernon, ¿qué explica la diferencia?|Los factores de grupo mayores|El factor general g|Los factores específicos|La semejanza se atribuye a g, y la diferencia, a v:ed (Irene) y k:m (Sergio).",
      "¿Qué factor de grupo menor pertenece a v:ed?|La aptitud numérica|La visualización espacial|La información mecánica|Lo verbal, numérico y escolar corresponde a v:ed. Lo espacial y mecánico, a k:m.",
      "¿Qué ocultaría un modelo con solo aptitudes primarias en el caso de dos personas de capacidad general parecida?|Su semejanza|Su diferencia|Su perfil|Un modelo solo con g ocultaría la diferencia, y uno solo con aptitudes primarias, la semejanza.",
      "¿Cuál es el orden de los niveles del modelo de Vernon, de lo general a lo específico?|g, grupo mayor, grupo menor, específico|g, grupo menor, grupo mayor, específico|Grupo mayor, g, grupo menor, específico|En la cúspide está g, luego v:ed y k:m, después los factores de grupo menores y al final los específicos."
    ],
    inc: [
      "Sobre el modelo de Vernon|k:m incluye capacidades verbales y escolares|g ocupa la cúspide de la jerarquía|Los factores específicos son propios de cada test|k:m es el factor espacial-mecánico. Lo verbal y escolar pertenece a v:ed."
    ],
    seq: [
      "Niveles del modelo de Vernon|Factor g>Factores de grupo mayores>Factores de grupo menores>Factores específicos"
    ],
    cls: [
      "Factor de grupo mayor de Vernon|Verbal-educativo: comprensión verbal; aptitud numérica; capacidades escolares|Espacial-mecánico: visualización espacial; información mecánica; capacidades psicomotoras"
    ] }
] },
{ n: 3, t: "La jerarquía actual de las capacidades", cap: 1, pir: "alta", mods: [
  { t: "Inteligencia fluida y cristalizada",
    tip: "Cattell (1963) dividió la capacidad general en inteligencia fluida (Gf), razonar con material nuevo, y cristalizada (Gc), el conocimiento adquirido por la cultura y la educación. Según la teoría de la inversión (1971), la Gf se invierte en aprendizaje y produce Gc. No envejecen igual: la Gf declina desde la adultez joven y la Gc se mantiene o crece hasta edades avanzadas. Gustafsson (1984) halló que la Gf correlaciona casi perfectamente con g.",
    v: [
      "Inteligencia fluida=Capacidad de razonar con material nuevo, sin apoyarse en lo aprendido",
      "Inteligencia cristalizada=Conocimientos y destrezas adquiridos por la cultura y la educación",
      "Teoría de la inversión=La Gf se aplica a experiencias de aprendizaje y produce Gc",
      "Matrices progresivas=Tarea típica de Gf, poco dependiente de lo aprendido",
      "Gustafsson (1984)=Halló que la Gf correlaciona de forma casi perfecta con g",
      "Horn=Amplió el modelo Gf-Gc con otras capacidades amplias y dudó de g",
      "Síntesis de Cattell=Aptitudes primarias en la base, Gf y Gc en medio y g en la cúspide",
      "Descenso tardío=Curso de la Gc, que se mantiene o crece hasta edades avanzadas"
    ],
    g: [
      "Cattell propuso la distinción entre Gf y Gc en ___.|1963|1971|1984",
      "La teoría de la inversión de Cattell es de ___.|1971|1963|1993",
      "La inteligencia ___ tiene una alta dependencia de la cultura.|cristalizada|fluida|general",
      "Para Cattell, la base principal de la Gf era más ___.|biológica|educativa|cultural",
      "En la infancia, Gf y Gc están muy ___.|unidas|separadas|diferenciadas"
    ],
    tf: [
      "La inteligencia cristalizada empieza a declinar desde la adultez joven.|F|Es la trampa típica: lo que declina desde la adultez joven es la Gf. La Gc se mantiene o crece hasta edades avanzadas.",
      "Dos niños con la misma Gf pueden acabar con niveles distintos de Gc según sus oportunidades de aprendizaje.|V",
      "Horn compartía con Cattell la defensa de un factor general en la cúspide.|F|Horn amplió el modelo con otras capacidades amplias y fue escéptico respecto a la existencia de g.",
      "El hallazgo de Gustafsson ayuda a explicar por qué las pruebas de razonamiento abstracto son las que más saturan en g.|V"
    ],
    q: [
      "Una abuela tarda más que su nieto en entender una aplicación nueva, pero le gana con holgura en un crucigrama. ¿Qué lo explica?|Gf y Gc no envejecen igual|Su inteligencia general ha bajado|La Gc depende de la velocidad|La Gf desciende desde la adultez joven, mientras la Gc se mantiene hasta edades avanzadas.",
      "Ante un juego de mesa con reglas extrañas, ¿qué capacidad permite entender rápido su lógica?|La inteligencia fluida|La inteligencia cristalizada|La velocidad perceptiva|Razonar con material nuevo, sin apoyo en lo aprendido, es propio de la Gf.",
      "Según la teoría de la inversión de Cattell…|la Gf se invierte y produce Gc|la Gc se transforma en Gf|Gf y Gc son independientes|La Gf se aplica a las experiencias de aprendizaje y, con el tiempo, da lugar a la Gc.",
      "¿Qué tarea mide sobre todo la inteligencia cristalizada?|Explicar qué es «idiosincrasia»|Completar una serie de figuras|Resolver una matriz progresiva|El vocabulario y la información general dependen del conocimiento adquirido, es decir, de Gc."
    ],
    inc: [
      "Sobre Gf y Gc|Con la edad se pierde la inteligencia en bloque|La Gf desciende desde la adultez joven|La Gc puede crecer hasta edades avanzadas|Es un mito: las capacidades no envejecen igual. La Gf declina pronto y la Gc se mantiene hasta tarde."
    ],
    seq: [],
    cls: [
      "Tipo de inteligencia|Fluida: razonar ante lo nuevo; matrices y series; declina desde la adultez joven|Cristalizada: conocimiento adquirido; vocabulario e información; se mantiene hasta tarde"
    ] },
  { t: "Los tres estratos de Carroll y el modelo CHC",
    tip: "Carroll (1993) reanalizó con un mismo procedimiento unos 460 conjuntos de datos y propuso la teoría de los tres estratos: g en el estrato III, ocho capacidades amplias en el II y decenas de aptitudes estrechas en el I. La Gf es la que más satura en g, y las de velocidad, las que menos. McGrew (2009) describió su integración con el modelo de Cattell y Horn en el modelo CHC, marco de la mayoría de las baterías actuales.",
    v: [
      "Teoría de los tres estratos=Jerarquía de Carroll con aptitudes estrechas, capacidades amplias y g",
      "Estrato III=Nivel superior de Carroll, ocupado por el factor general",
      "Estrato II=Nivel de las ocho capacidades amplias",
      "Estrato I=Nivel de decenas de aptitudes estrechas, como la memoria de dígitos",
      "Modelo CHC=Integración de Cattell, Horn y Carroll, marco de las baterías actuales",
      "McGrew (2009)=Describió la integración de los modelos en el CHC",
      "Gv=Sigla CHC del procesamiento visual",
      "Gs=Sigla CHC de la velocidad de procesamiento"
    ],
    g: [
      "Carroll reanalizó en torno a ___ conjuntos de datos.|460|160|1.200",
      "El estrato II de Carroll contiene ___ capacidades amplias.|ocho|siete|tres",
      "La comprensión lectora es una aptitud del estrato ___.|I|II|III",
      "La sigla Ga del modelo CHC corresponde al procesamiento ___.|auditivo|ampliado|abstracto",
      "Las capacidades amplias de ___ son las que menos saturan en g.|velocidad|memoria|percepción"
    ],
    tf: [
      "En la teoría de Carroll, el factor g se sitúa en el estrato I.|F|Es una trampa por el orden de numeración: g está en el estrato III. El estrato I contiene las aptitudes estrechas.",
      "La fuerza de la teoría de Carroll está en su base empírica, no en una batería concreta.|V",
      "En el modelo CHC, la interpretación de g queda abierta.|V",
      "La teoría de los tres estratos se construyó a partir de una sola batería amplia aplicada por Carroll.|F|Surge del reanálisis con un mismo procedimiento de unos 460 conjuntos de datos de orígenes muy diversos."
    ],
    q: [
      "Daniel obtiene un CI total en la media, pero su índice de velocidad de procesamiento está muy por debajo de su índice verbal. ¿Qué ventaja del modelo CHC muestra el caso?|Ofrece índices por capacidades amplias|Elimina la necesidad de un CI total|Sitúa la velocidad en el estrato III|Las baterías basadas en CHC dan índices por capacidades amplias que un solo número ocultaría.",
      "¿Qué capacidad amplia es la que más satura en g según Carroll?|La inteligencia fluida|La inteligencia cristalizada|La velocidad cognitiva|La Gf es la más cercana a g, lo que coincide con el hallazgo de Gustafsson (1984).",
      "¿Qué significan las siglas CHC?|Cattell-Horn-Carroll|Cattell-Horn-Cronbach|Carroll-Horn-Cattell-Hunt|El modelo integra la jerarquía de Carroll con la ampliación del modelo Gf-Gc de Cattell y Horn.",
      "¿Cuál de estas es una capacidad amplia del estrato II de Carroll?|Capacidad de recuperación|Comprensión lectora|Memoria de dígitos|La comprensión lectora y la memoria de dígitos son aptitudes estrechas del estrato I."
    ],
    inc: [
      "Sobre la teoría de Carroll|Todas las capacidades amplias saturan igual en g|El estrato III contiene el factor general|Reanalizó datos con un mismo procedimiento|Las capacidades amplias no están igual de cerca de g: la Gf satura más, y las de velocidad, menos."
    ],
    seq: [
      "Estratos de Carroll de lo específico a lo general|Estrato I, aptitudes estrechas>Estrato II, capacidades amplias>Estrato III, factor general"
    ],
    cls: [
      "Estrato de Carroll|Estrato III: factor general g|Estrato II: inteligencia fluida; inteligencia cristalizada; percepción visual; velocidad de procesamiento|Estrato I: comprensión lectora; visualización espacial; memoria de dígitos"
    ] },
  { t: "El modelo VPR y el balance de la vía factorial",
    tip: "Johnson y Bouchard (2005) compararon los modelos de Cattell y Horn, Vernon y Carroll, y ajustó mejor una variante de Vernon: g y, debajo, verbal, perceptivo y rotación de imágenes. La separación principal es de contenidos, no entre Gf y Gc. La vía factorial ha establecido la variedad positiva y la jerarquía, pero depende del método, describe sin explicar y trabaja con diferencias entre personas, no con mecanismos dentro de cada cabeza.",
    v: [
      "Modelo VPR=Jerarquía de Johnson y Bouchard con g sobre tres grandes factores",
      "Factor verbal=Comprensión y uso del lenguaje y conocimiento en el modelo VPR",
      "Factor perceptivo=Rapidez y precisión al analizar estímulos visuales",
      "Rotación de imágenes=Manipulación mental de objetos en el espacio",
      "Dependencia del método=El resultado depende de las pruebas, la muestra y la rotación",
      "Describir sin explicar=Límite del análisis factorial, que no dice qué procesos operan",
      "Diferencias entre personas=Base de los factores, que no implica un mecanismo en cada individuo",
      "Índice socioeconómico=Ejemplo de resumen de correlaciones que nadie tiene dentro"
    ],
    g: [
      "Johnson y Bouchard publicaron el modelo VPR en ___.|2005|1993|2009",
      "El modelo que mejor ajustó fue una variante de la jerarquía de ___.|Vernon|Carroll|Cattell",
      "En el VPR, la separación principal es entre ___ verbales, perceptivos y espaciales.|contenidos|procesos|estratos",
      "Si una batería no incluye pruebas auditivas, no aparecerá un factor ___.|auditivo|general|verbal",
      "El modelo VPR se probó en una muestra ___.|adulta|infantil|clínica"
    ],
    tf: [
      "En el modelo VPR, la letra R corresponde al razonamiento.|F|Corresponde a la rotación de imágenes. Las tres letras son verbal, perceptivo y rotación de imágenes.",
      "Que en una población aparezca un factor g no implica que haya un mecanismo único llamado g en cada cabeza.|V",
      "Los límites de la vía factorial restan valor práctico a la jerarquía de capacidades.|F|La jerarquía es estable, predice resultados escolares y laborales y ofrece un lenguaje común.",
      "El modelo VPR recupera la intuición británica de un bloque verbal y otro espacial-práctico.|V"
    ],
    q: [
      "Un equipo analiza una batería sin ninguna prueba auditiva y concluye que no existe capacidad auditiva. ¿Qué límite de la vía factorial ignora?|La dependencia del método|La descripción sin explicación|El error de lectura individual|El resultado está condicionado por las pruebas incluidas: sin pruebas auditivas no puede aparecer ese factor.",
      "¿Qué tres modelos compararon Johnson y Bouchard (2005)?|Cattell y Horn, Vernon y Carroll|Spearman, Thurstone y Guilford|Carroll, CHC y Gardner|Compararon cómo se ajustaban a los datos tres modelos jerárquicos rivales, y ganó una variante de Vernon.",
      "¿Qué cuestión NO resuelve la vía factorial?|Si g es real o un resumen estadístico|Si las pruebas correlacionan positivamente|Si existe una jerarquía con g arriba|La variedad positiva y la jerarquía están establecidas. La naturaleza de g sigue abierta.",
      "¿En qué se diferencia el VPR del modelo de Cattell y Horn?|En separar contenidos y no Gf y Gc|En negar la existencia del factor g|En reducir la jerarquía a un nivel|El VPR mantiene g, pero organiza el nivel intermedio por contenidos verbales, perceptivos y espaciales."
    ],
    inc: [
      "Sobre el balance de la vía factorial|Explica qué procesos producen las correlaciones|La estructura se repite en muestras distintas|Hay capacidades amplias diferenciables bajo g|El análisis factorial describe pero no explica: para los procesos hacen falta los enfoques cognitivo y biológico."
    ],
    seq: [],
    cls: [
      "Vía factorial|Establecido: variedad positiva; jerarquía con g arriba; estructura que se repite|No resuelto: procesos que producen las correlaciones; naturaleza de g; número exacto de capacidades"
    ] },
  { t: "¿Qué es g? Causa común, red o índice",
    tip: "Que existe un factor general estadístico está fuera de duda, y lo que se discute es qué es. Como causa común (Spearman, Jensen), es una capacidad latente que genera las correlaciones, en un modelo reflectivo. En el mutualismo (van der Maas et al., 2006), emerge de capacidades que se refuerzan durante el desarrollo. En la superposición de procesos (Kovacs y Conway, 2016), es un índice formativo de procesos ejecutivos compartidos. Ninguna lectura se ha impuesto.",
    v: [
      "Modelo reflectivo=Las pruebas reflejan una capacidad latente que las causa",
      "Jensen (1998)=Defensor de g como causa común con base cerebral",
      "Mutualismo=Las capacidades se refuerzan en el desarrollo y g emerge de la red",
      "Van der Maas (2006)=Autor principal, con colaboradores, del modelo de mutualismo",
      "Superposición de procesos=Las pruebas comparten procesos ejecutivos y por eso se solapan",
      "Kovacs y Conway (2016)=Proponen g como índice de procesos ejecutivos compartidos",
      "Índice formativo=Resumen de solapamientos entre pruebas, no su causa",
      "Teoría del muestreo=Propuesta de Thomson (1916) de procesos elementales compartidos"
    ],
    g: [
      "Como causa común, g se interpreta con un modelo ___.|reflectivo|formativo|mutualista",
      "En la superposición de procesos, g es un índice ___.|formativo|reflectivo|emergente",
      "Thomson propuso la teoría del muestreo en ___.|1916|1904|1927",
      "En el mutualismo, g ___ de la interacción entre capacidades.|emerge|se aísla|se desliga",
      "El control de la atención es un proceso ___ que interviene en muchas pruebas.|ejecutivo|específico|perceptivo"
    ],
    tf: [
      "El mutualismo niega la existencia de la variedad positiva.|F|La acepta como real. Lo que niega es que haya una causa común: g emergería de la interacción.",
      "Las tres interpretaciones de g aceptan que una puntuación general predice el rendimiento escolar y laboral.|V",
      "El problema de la interpretación de g como causa común es que no se ha identificado un mecanismo único.|V",
      "La teoría de la superposición de procesos explica mal la cercanía entre inteligencia fluida y g.|F|La explica bien: la Gf depende mucho del control ejecutivo, que es justo lo que comparten las pruebas."
    ],
    q: [
      "En un equipo, el buen pasador mejora al delantero y el buen delantero hace brillar al pasador, sin un «talento común» de equipo. ¿Qué interpretación de g ilustra?|El mutualismo|La causa común|La superposición de procesos|Las capacidades se refuerzan mutuamente y la correlación emerge de la red, sin causa común.",
      "Si g es una causa común, ¿qué línea de investigación tiene más sentido?|Buscar su base cerebral única|Estudiar procesos que se solapan|Analizar cómo interactúan en el desarrollo|Si g es una causa, conviene buscar su base cerebral. Las otras dos opciones encajan con el índice y la red.",
      "¿Qué antecedente clásico tiene la teoría de la superposición de procesos?|La teoría del muestreo de Thomson|La ley de rendimientos decrecientes|La teoría de la inversión de Cattell|Thomson (1916) ya sostenía que las correlaciones podían surgir de procesos elementales compartidos.",
      "Según Kovacs y Conway, ¿por qué correlacionan las pruebas?|Porque comparten procesos ejecutivos|Porque dependen de una capacidad latente|Porque se refuerzan en el desarrollo|Los procesos ejecutivos intervienen en muchas pruebas a la vez, que así se solapan y correlacionan."
    ],
    inc: [
      "Sobre las interpretaciones de g|Ya se ha impuesto la lectura como índice|Se discute qué es, no si aparece|Jensen defendió g como causa común|Ninguna de las tres lecturas se ha impuesto todavía. Los datos de procesos y redes encajan con las dos últimas."
    ],
    seq: [],
    cls: [
      "Interpretación de g|Causa común: Spearman; Jensen; modelo reflectivo|Mutualismo: van der Maas; propiedad emergente; refuerzo en el desarrollo|Superposición de procesos: Kovacs y Conway; índice formativo; procesos ejecutivos"
    ] }
] },
{ n: 4, t: "Los procesos tras la puntuación", cap: 2, pir: "media", mods: [
  { t: "Correlatos y componentes cognitivos",
    tip: "El enfoque cognitivo, con el marco del procesamiento de la información, busca por qué una persona resuelve mejor un test. Hunt impulsó los correlatos cognitivos: relacionar tareas elementales, como el acceso léxico, con el CI. Sternberg desarrolló los componentes cognitivos: descomponer ítems, como las analogías, en pasos. Ambos hallaron correlaciones fiables pero modestas, y ningún proceso aislado explica la inteligencia.",
    v: [
      "Procesamiento de la información=Marco en que la mente codifica, transforma y responde a estímulos",
      "Acceso léxico=Rapidez para recuperar el nombre almacenado de un estímulo",
      "Juicio por forma=Decidir si dos letras son iguales físicamente, como A-A",
      "Juicio por nombre=Decidir si dos letras se llaman igual, como A-a",
      "Codificación=Componente que identifica los atributos relevantes de cada término",
      "Inferencia=Componente que descubre la relación entre los dos primeros términos",
      "Mapeo=Componente que traslada la relación al segundo par",
      "Aplicación=Componente que genera el término que completa la analogía"
    ],
    g: [
      "El enfoque de correlatos cognitivos lo impulsó ___.|Hunt|Sternberg|Jensen",
      "El caso modelo del análisis componencial de Sternberg fueron las ___.|analogías|matrices|series",
      "Los más capaces dedicaban más tiempo a la ___ del problema.|codificación|aplicación|respuesta",
      "Quienes puntuaban más alto en aptitud ___ tendían a acceder algo más rápido al nombre.|verbal|espacial|numérica",
      "El análisis componencial fue la semilla de la teoría ___ de Sternberg.|triárquica|bifactorial|jerárquica"
    ],
    tf: [
      "Según Sternberg, los más capaces dedicaban menos tiempo a la codificación y más a los pasos siguientes.|F|Es al revés: dedicaban más tiempo a codificar, lo que les ahorraba trabajo en los pasos siguientes.",
      "Los procesos elementales correlacionan con el CI de forma fiable pero modesta.|V",
      "El riesgo del enfoque de componentes es que sus modelos quedan ligados a un tipo de ítem.|V",
      "El enfoque de correlatos parte de los ítems de los tests y los descompone en pasos.|F|Eso es el enfoque de componentes de Sternberg. El de correlatos, de Hunt, parte de tareas elementales de laboratorio."
    ],
    q: [
      "Ante la analogía «abogado es a cliente como médico es a…», una persona descubre que el abogado presta un servicio al cliente. ¿Qué componente ha ejecutado?|Inferencia|Mapeo|Aplicación|Descubrir la relación entre los dos primeros términos es la inferencia. El mapeo la traslada al segundo par.",
      "¿Qué estima la diferencia de tiempo entre juzgar A-A y A-a?|Lo que se tarda en recuperar el nombre|Lo que se tarda en codificar la forma|Lo que se tarda en mover el dedo|El juicio por nombre exige acceder al nombre almacenado, y la diferencia estima esa rapidez de acceso léxico.",
      "¿Por qué una correlación entre un proceso elemental y el CI no basta para hablar de causa?|Puede que los capaces aborden mejor cualquier tarea|Porque los procesos elementales no son fiables|Porque el CI no predice nada fuera del test|Puede que una mente rápida aprenda más, o que las personas capaces rindan mejor en cualquier tarea.",
      "¿A qué condujo que ningún proceso aislado explicara las diferencias?|A buscar procesos más generales|A abandonar el enfoque cognitivo|A volver a las pruebas sensoriales|Llevó a estudiar procesos más generales, como la velocidad mental y la memoria de trabajo."
    ],
    inc: [
      "Sobre correlatos y componentes|Un proceso aislado explica bien el CI|Hunt partió de tareas de laboratorio|Sternberg midió tiempos y errores por paso|Ambos enfoques mostraron correlaciones modestas: ningún proceso aislado explica las diferencias de inteligencia."
    ],
    seq: [
      "Componentes de Sternberg en una analogía|Codificación>Inferencia>Mapeo>Aplicación>Respuesta"
    ],
    cls: [
      "Enfoque cognitivo|Correlatos: Hunt; tareas elementales; acceso léxico|Componentes: Sternberg; ítems de los tests; analogías"
    ] },
  { t: "Velocidad mental: tiempo de reacción y de inspección",
    tip: "Hick (1952) halló que el tiempo de reacción crece de forma lineal con los bits, el log₂ del número de alternativas. Con el panel de Jensen se separan tiempo de decisión y de movimiento. Las personas con CI alto tienen TR más cortos y menos variables, y la relación crece con la complejidad, pero es débil con la pendiente. El tiempo de inspección elimina el componente motor y correlaciona con el CI en torno a −,50: los más capaces necesitan menos milisegundos.",
    v: [
      "Ley de Hick=El TR crece de forma lineal con el log₂ del número de alternativas",
      "Bit=Unidad de información, el logaritmo en base 2 de las alternativas",
      "Tiempo de decisión=En el panel de Jensen, tiempo hasta levantar el dedo del reposo",
      "Tiempo de movimiento=Tiempo desde levantar el dedo hasta pulsar el botón de la luz",
      "Variabilidad del TR=Inconstancia entre ensayos, tan ligada al CI como el TR medio",
      "Tiempo de inspección=Exposición mínima para discriminar con precisión dos estímulos simples",
      "Máscara=Estímulo posterior que limita el tiempo para captar las líneas",
      "Velocidad de procesamiento=Posible propiedad básica del sistema nervioso que facilita operaciones superiores"
    ],
    g: [
      "Con 8 alternativas hay ___ bits de información.|3|8|4",
      "La correlación del TR con el CI ___ con la complejidad de la tarea.|aumenta|disminuye|desaparece",
      "Corregida la falta de fiabilidad, la correlación entre tiempo de inspección y CI ronda ___.|−,50|−,20|−,80",
      "El tiempo de inspección lo estudiaron Nettelbeck y ___.|Deary|Hunt|Hick",
      "Las personas con CI más alto tienen TR más cortos, sobre todo en el tiempo de ___.|decisión|movimiento|inspección"
    ],
    tf: [
      "La relación más fuerte entre la ley de Hick y el CI se da con la pendiente de la recta.|F|Es la trampa típica: la relación con la pendiente es débil e irregular. Pesan más el TR medio y su variabilidad.",
      "El tiempo de inspección mide la rapidez con que se capta información, no la rapidez de respuesta.|V",
      "La correlación negativa entre tiempo de inspección y CI indica que los más capaces rinden peor.|F|Indica que necesitan menos milisegundos de exposición para discriminar: son más rápidos.",
      "La intuición de Galton no era del todo errónea: fallaron sus instrumentos, no la idea de que la rapidez mental importa.|V"
    ],
    q: [
      "En el panel de Jensen, Laura levanta el dedo del botón central 300 ms después de encenderse la luz y pulsa el botón 150 ms más tarde. ¿Qué indican los 300 ms?|El tiempo de decisión|El tiempo de movimiento|El tiempo de inspección|Hasta levantar el dedo es tiempo de decisión. El trayecto hasta pulsar es tiempo de movimiento.",
      "¿Qué rasgo del TR se relaciona con el CI tanto o más que el TR medio?|Su variabilidad entre ensayos|Su pendiente en la recta de Hick|Su tiempo de movimiento|Los más capaces son más constantes. La relación con la pendiente fue más débil de lo esperado.",
      "¿Qué ventaja tiene el tiempo de inspección sobre el tiempo de reacción?|Elimina el componente motor|Usa más alternativas de respuesta|Mide la variabilidad entre ensayos|La persona responde sin prisa, así que se mide la rapidez para captar información, no para responder.",
      "Según la ley de Hick, cada vez que se duplica el número de alternativas, el TR…|aumenta en una cantidad similar|se duplica también|no cambia|Cada duplicación añade un bit de información, y el TR crece de forma lineal con los bits."
    ],
    inc: [
      "Sobre la velocidad mental y el CI|La pendiente de Hick es el mejor predictor del CI|Los de CI alto muestran TR medios más cortos|La relación crece con más alternativas|La relación con la pendiente es más débil e irregular de lo esperado. Pesan más el TR medio y su variabilidad."
    ],
    seq: [
      "Ensayo de tiempo de inspección|Presentar brevemente dos líneas distintas>Presentar una máscara>Decir sin prisa cuál era más larga>Estimar la exposición mínima con acierto casi constante"
    ],
    cls: [
      "Medida de velocidad mental|Tiempo de reacción: ley de Hick; panel de Jensen; tiempo de decisión|Tiempo de inspección: Nettelbeck y Deary; máscara; sin componente motor"
    ] },
  { t: "Memoria de trabajo e inteligencia fluida",
    tip: "La memoria de trabajo mantiene información activa y la manipula a la vez, y se mide con tareas de amplitud compleja. Kyllonen y Christal (1990) hallaron una relación tan alta que el razonamiento sería «poco más que» memoria de trabajo, sobre todo con la Gf. Pero Ackerman, Beier y Boyle (2005) estimaron una correlación en torno a ,50: relacionadas, pero no isomorfas. Engle propuso que lo decisivo es el control atencional.",
    v: [
      "Memoria de trabajo=Sistema que mantiene información activa y la manipula a la vez",
      "Tarea de amplitud compleja=Recordar elementos mientras se realiza otra tarea entre ellos",
      "Kyllonen y Christal (1990)=Vieron el razonamiento como «poco más que» memoria de trabajo",
      "Ackerman, Beier y Boyle=Metaanálisis de 2005 con una correlación en torno a ,50",
      "No isomorfas=Relacionadas, pero no el mismo constructo con dos nombres",
      "Control atencional=Mantener activo lo relevante y resistir la interferencia",
      "Engle=Atribuyó la relación con la inteligencia al control atencional",
      "Varianza compartida=Con r de ,50, alrededor de una cuarta parte"
    ],
    g: [
      "A diferencia de repetir dígitos, las tareas de amplitud compleja exigen almacenar y ___ a la vez.|procesar|repasar|agrupar",
      "La relación de la memoria de trabajo es especialmente fuerte con la inteligencia ___.|fluida|cristalizada|emocional",
      "Con una correlación de ,50, dos medidas comparten aproximadamente una ___ parte de su varianza.|cuarta|media|tercera",
      "Mirar en dirección contraria a un estímulo repentino es una tarea de ___ que apenas exige memorizar.|atención|razonamiento|velocidad",
      "La idea de Engle encaja con la teoría de la superposición de procesos de Kovacs y ___.|Conway|Christal|Carroll"
    ],
    tf: [
      "Ackerman, Beier y Boyle (2005) concluyeron que memoria de trabajo e inteligencia son el mismo constructo.|F|Hallaron una correlación en torno a ,50: una relación fuerte, pero lejos de la identidad. No son isomorfas.",
      "Para Engle, lo decisivo de la memoria de trabajo no es cuántas cosas caben, sino el control atencional.|V",
      "Cuánto se solapan memoria de trabajo e inteligencia depende de cómo se midan.|V",
      "Repetir una serie de dígitos en orden es el ejemplo típico de tarea de amplitud compleja.|F|Repetir dígitos solo exige almacenar. La amplitud compleja exige almacenar y procesar otra tarea a la vez."
    ],
    q: [
      "Marta y Andrés conocen las fórmulas de estadística. Ante un problema nuevo, Andrés olvida qué pedía el enunciado mientras calcula y Marta no. ¿Dónde está la ventaja de Marta?|En gestionar información mientras razona|En conocer más fórmulas de estadística|En su mayor inteligencia cristalizada|Su ventaja no está en lo que sabe, sino en mantener el objetivo y los datos activos mientras razona.",
      "¿Qué dato apoya la propuesta de Engle?|Los de mayor amplitud rinden mejor en atención|La memoria de trabajo predice el vocabulario|La amplitud de dígitos explica toda la Gf|Rinden mejor incluso en tareas de atención que apenas exigen memorizar, lo que señala al control atencional.",
      "¿Por qué las matrices progresivas exigen memoria de trabajo?|Hay que mantener varias reglas en mente|Hay que recordar vocabulario aprendido|Hay que responder con mucha rapidez|Obligan a mantener varias reglas, comprobar si encajan y descartar las que no sirven.",
      "¿Qué frase resume la posición de Kyllonen y Christal (1990)?|El razonamiento es poco más que memoria de trabajo|La memoria de trabajo no se relaciona con g|La inteligencia es solo velocidad mental|Hallaron correlaciones tan altas que lo titularon con esa frase provocadora."
    ],
    inc: [
      "Sobre memoria de trabajo e inteligencia|Comparten casi toda su varianza|La relación es más fuerte con la Gf|Se discute si importa el almacenamiento o el control|Con r en torno a ,50 comparten aproximadamente una cuarta parte de la varianza: relacionadas, no idénticas."
    ],
    seq: [],
    cls: [] },
  { t: "¿Se puede entrenar la inteligencia?",
    tip: "Jaeggi et al. (2008) hallaron que entrenar con n-back dual mejoraba un test de Gf. Pero Melby-Lervåg y Hulme (2013) y Simons et al. (2016) mostraron mejoras en la tarea entrenada y en tareas parecidas (transferencia cercana), sin transferencia lejana fiable a la inteligencia ni a la vida diaria. Los primeros éxitos usaban controles pasivos, muestras pequeñas y un solo test. La escolarización, en cambio, sí parece elevar el CI.",
    v: [
      "N-back dual=Indicar si posición y letra coinciden con las de n pasos antes",
      "Jaeggi et al. (2008)=Estudio que sugirió mejorar la Gf entrenando con n-back",
      "Melby-Lervåg y Hulme=Metaanálisis de 2013 sin transferencia fiable a la inteligencia",
      "Simons et al. (2016)=Revisaron la evidencia citada por las empresas del sector",
      "Transferencia cercana=Mejora en tareas muy parecidas a la entrenada",
      "Transferencia lejana=Mejora en capacidades distintas, como razonar o rendir en clase",
      "Control pasivo=Grupo que no hace nada y no controla las expectativas",
      "Escolarización=Años de escuela, asociados con un aumento del CI"
    ],
    g: [
      "En el n-back dual, si la persona acierta, n ___.|aumenta|disminuye|se mantiene",
      "Cada año adicional de escuela se asocia con un aumento de entre uno y ___ puntos de CI.|cinco|diez|tres",
      "El estudio sobre escolarización y CI es de Ritchie y ___ (2018).|Tucker-Drob|Hulme|Simons",
      "En Jaeggi et al. (2008), la mejora era mayor cuantas más ___ se habían hecho.|sesiones|tareas|pruebas",
      "Según Melby-Lervåg y Hulme, la mejora en tareas parecidas tiende a ___.|desvanecerse|consolidarse|generalizarse"
    ],
    tf: [
      "Entrenar unos minutos al día con juegos de entrenamiento cerebral aumenta la inteligencia.|F|Es un mito: se mejora en la tarea entrenada y en otras parecidas, pero no hay transferencia lejana fiable.",
      "Quien practica el n-back mejora también en otras tareas de memoria de trabajo similares.|V",
      "Los resultados negativos del entrenamiento cognitivo demuestran que el ambiente no influye en el CI.|F|La escolarización sí parece elevar el CI, entre uno y cinco puntos por año según el diseño.",
      "Mejorar en un test no equivale a mejorar la capacidad que pretende medir.|V"
    ],
    q: [
      "Tras meses jugando a diario a emparejar cartas, Elena es muy buena en el juego, pero no recuerda mejor la lista de la compra. ¿Qué ilustra?|Ausencia de transferencia lejana|Ausencia de transferencia cercana|Un control pasivo mal diseñado|Se ha vuelto experta en la tarea, no más inteligente: no hay transferencia a capacidades distintas.",
      "¿Qué debilidad tenían a menudo los primeros estudios positivos?|Controles pasivos y muestras pequeñas|Demasiados tests de inteligencia|Grupos de control activos y grandes|Los controles pasivos no controlaban las expectativas, y además usaban muestras pequeñas y un solo test.",
      "¿Por qué la escuela sí parece elevar el CI y un juego no?|La escuela entrena muchas tareas durante años|La escuela entrena solo la memoria de trabajo|El juego no mejora ni la tarea entrenada|La escuela da conocimientos y práctica en muchas tareas durante años, y un juego, una sola durante semanas.",
      "¿Qué tipo de transferencia prometen los programas comerciales?|La lejana|La cercana|La específica|Prometen mejoras en razonamiento, rendimiento académico o vida diaria, que no se han demostrado."
    ],
    inc: [
      "Sobre el entrenamiento cognitivo|Produce una transferencia lejana fiable|Mejora la tarea que se entrena|Mejora tareas muy parecidas|Melby-Lervåg y Hulme (2013) y Simons et al. (2016) no hallaron transferencia lejana fiable."
    ],
    seq: [],
    cls: [
      "Tipo de transferencia|Cercana: mejora en el n-back; otras tareas de memoria de trabajo similares|Lejana: inteligencia fluida; rendimiento académico; vida cotidiana"
    ] }
] }
);

// SAIMAP Psicología · Personalidad II · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Más allá del CI: Sternberg y Gardner", cap: 2, pir: "alta", mods: [
  { t: "Sternberg: tres caras de la inteligencia",
    tip: "La teoría triárquica de Sternberg (1985) tiene tres subteorías. La componencial trata la relación con el mundo interno (metacomponentes, componentes de ejecución y de adquisición de conocimiento) y da lugar a la inteligencia analítica. La experiencial trata la novedad y la automatización y da lugar a la creativa. La contextual trata adaptarse, modelar o seleccionar el ambiente y da lugar a la práctica, ligada al conocimiento tácito.",
    v: [
      "Teoría triárquica=Propuesta de Sternberg (1985) con tres subteorías sobre la inteligencia",
      "Metacomponentes=Procesos ejecutivos que planifican, supervisan y evalúan la tarea",
      "Componentes de ejecución=Llevan a cabo lo decidido, como codificar, inferir o comparar",
      "Adquisición de conocimiento=Componentes que seleccionan, combinan y relacionan la información nueva",
      "Subteoría componencial=Relación con el mundo interno, base de la inteligencia analítica",
      "Subteoría experiencial=Afrontar la novedad y automatizar, base de la inteligencia creativa",
      "Subteoría contextual=Adaptarse, modelar o seleccionar el ambiente, base de la inteligencia práctica",
      "Conocimiento tácito=Saber necesario para desenvolverse en un medio que nadie enseña explícitamente"
    ],
    g: [
      "Sternberg presentó la teoría triárquica en «Beyond IQ», publicado en ___.|1985|1983|1997",
      "Decidir qué estrategia usar en un examen y cuándo cambiarla es tarea de los ___.|metacomponentes|componentes de ejecución|componentes de adquisición",
      "Conducir sin pensar en el cambio de marcha ilustra la capacidad de ___.|automatizar|afrontar la novedad|modelar el ambiente",
      "Según Sternberg, cambiar uno mismo para encajar en el ambiente es ___.|adaptarse|modelarlo|seleccionarlo",
      "La inteligencia ___ es la que mejor recogen los tests tradicionales.|analítica|práctica|creativa"
    ],
    tf: [
      "Según la subteoría experiencial, una misma tarea no mide lo mismo en todas las personas.|V",
      "Afrontar la novedad y automatizar pertenecen a la subteoría contextual.|F|Pertenecen a la experiencial. La contextual trata de adaptarse, modelar o seleccionar el ambiente.",
      "Codificar, inferir y comparar son ejemplos de metacomponentes.|F|Son componentes de ejecución, que llevan a cabo lo que han decidido los metacomponentes.",
      "La subteoría contextual sostiene que lo inteligente en un entorno puede no serlo en otro.|V"
    ],
    q: [
      "Lucía, recién llegada a una empresa, descubre que las decisiones importantes se toman en el café de media mañana y no en las reuniones. ¿Qué ha adquirido?|Conocimiento tácito|Un metacomponente nuevo|Capacidad de automatizar|Es saber práctico para desenvolverse en un medio que nadie enseña de forma explícita, propio de la inteligencia práctica.",
      "Una empleada que no logra adaptarse a su departamento pide el traslado a otro. ¿Qué está haciendo?|Seleccionar otro ambiente|Modelar su ambiente actual|Adaptarse a su ambiente|Seleccionar es marcharse cuando ni adaptarse ni modelar funciona. Modelar sería cambiar el ambiente actual.",
      "¿Con qué relación de la inteligencia se ocupa la subteoría componencial?|Con el mundo interno|Con la experiencia|Con el mundo externo|Describe los procesos mentales de la conducta inteligente y da lugar a la inteligencia analítica.",
      "¿De qué trabajo previo de Sternberg es herencia directa la subteoría componencial?|Del análisis de las analogías|De sus estudios de creatividad|De la eficiencia neural|Recoge los procesos mentales de la conducta inteligente, como había hecho su análisis de ítems de analogías."
    ],
    inc: [
      "Sobre la teoría triárquica|La subteoría contextual da lugar a la inteligencia creativa|La subteoría componencial da lugar a la analítica|La subteoría experiencial trata la novedad|La contextual da lugar a la inteligencia práctica. La creativa procede de la subteoría experiencial."
    ],
    seq: [],
    cls: [
      "Subteoría de Sternberg|Componencial: metacomponentes; mundo interno; inteligencia analítica|Experiencial: novedad; automatización; inteligencia creativa|Contextual: adaptar, modelar o seleccionar; conocimiento tácito; inteligencia práctica"
    ] },
  { t: "Inteligencia exitosa y sus críticas",
    tip: "Sternberg (1997) definió la inteligencia exitosa como alcanzar el éxito según los propios criterios y dentro del propio contexto, equilibrando capacidades analíticas, creativas y prácticas. El conocimiento tácito, un saber orientado a la acción, es central en la inteligencia práctica. Gottfredson (2003) calificó de débil la evidencia de que esta sea independiente de g. El balance es que la teoría es un marco valioso, pero no ha demostrado capacidades independientes de g.",
    v: [
      "Inteligencia exitosa=Lograr las propias metas en el propio contexto equilibrando tres capacidades",
      "Capacidades analíticas=En la inteligencia exitosa, sirven para evaluar las ideas",
      "Capacidades creativas=En la inteligencia exitosa, sirven para generar las ideas",
      "Capacidades prácticas=Sirven para aplicar las ideas y convencer a otros de su valor",
      "Inventarios de situaciones=Medida del saber práctico que pide valorar formas de actuar en una profesión",
      "Gottfredson (2003)=Calificó de débil la evidencia de una inteligencia práctica independiente de g",
      "Irrefutabilidad del modelo=Crítica de que es tan amplio que cuesta decir qué resultado lo contradiría",
      "Sternberg (1997)=Amplió la teoría triárquica con el concepto de éxito según los propios criterios"
    ],
    g: [
      "Sternberg amplió su teoría con el concepto de inteligencia exitosa en ___.|1997|1985|2003",
      "En la inteligencia exitosa, las capacidades creativas sirven para ___ las ideas.|generar|evaluar|aplicar",
      "La idea central de la inteligencia exitosa es el ___ entre las tres capacidades.|equilibrio|predominio|aislamiento",
      "Según Sternberg, los tests tradicionales predicen bien el rendimiento ___, pero peor el éxito fuera del aula.|escolar|laboral|social",
      "El conocimiento tácito es difícil de separar del conocimiento adquirido, cercano a la inteligencia ___.|cristalizada|fluida|creativa"
    ],
    tf: [
      "Que las medidas de las tres capacidades de Sternberg correlacionen entre sí encaja mejor con un factor general.|V",
      "Gottfredson (2003) concluyó que las pruebas de conocimiento tácito son independientes de la capacidad general.|F|Halló lo contrario: las pruebas de conocimiento tácito tendían a correlacionar con la capacidad general.",
      "Para Sternberg, tener inteligencia exitosa es destacar por igual en las tres capacidades.|F|Es aprovechar los puntos fuertes y corregir o compensar los débiles, buscando el equilibrio entre capacidades.",
      "Una aportación de la teoría fue unir el estudio de los procesos con el de las diferencias individuales.|V"
    ],
    q: [
      "Un ingeniero saca notas brillantes, pero fracasa al defender su proyecto ante la dirección. Según Sternberg, ¿qué capacidad le falla?|La práctica|La analítica|La creativa|Las capacidades prácticas sirven para llevar las ideas a la práctica y convencer a otros de su valor.",
      "¿Qué problema plantea definir el éxito «según los propios criterios»?|Complica comparar a las personas|Impide medir el conocimiento tácito|Anula la validez de los tests de CI|Si cada persona define su propio éxito, resulta difícil comparar a unas personas con otras.",
      "¿Cuál es el balance más extendido sobre la teoría de Sternberg?|Marco útil sin capacidades independientes de g|Teoría refutada por los datos psicométricos|Modelo validado de tres inteligencias separadas|Ha sido valiosa como marco conceptual, pero no ha demostrado capacidades analíticas, creativas y prácticas independientes de g.",
      "¿Qué problema señaló Gottfredson en los estudios sobre inteligencia práctica?|Muestras pequeñas y medidas poco fiables|Falta de grupos clínicos de comparación|Uso exclusivo de tareas de tiempo de reacción|Muchos estudios tenían muestras pequeñas o medidas poco fiables, y las medidas prácticas se relacionaban con g."
    ],
    inc: [
      "Sobre las críticas a Sternberg|Gottfredson halló la inteligencia práctica independiente de g|El conocimiento tácito se parece a la experiencia en un ámbito|El modelo es tan amplio que cuesta decir qué lo refutaría|Gottfredson (2003) calificó de débil esa evidencia: las medidas de inteligencia práctica se relacionan con g."
    ],
    seq: [],
    cls: [
      "Capacidad en la inteligencia exitosa|Analítica: evaluar las ideas; brillar en los exámenes|Creativa: generar las ideas|Práctica: aplicar las ideas; convencer a otros; conocimiento tácito"
    ] },
  { t: "Gardner: ocho inteligencias",
    tip: "Gardner (1983) propuso en «Frames of Mind» varias inteligencias relativamente independientes: siete al principio, y la naturalista, añadida en 1999. Fijó ocho criterios para aceptar una inteligencia, desde el aislamiento por lesión cerebral hasta la codificación en un sistema simbólico. La elección se basó en una revisión cualitativa, y el criterio psicométrico es el que peor se cumple. Visser, Ashton y Vernon (2006) hallaron que las inteligencias cognitivas saturan en g.",
    v: [
      "Inteligencia lingüística=Usar el lenguaje oral y escrito, como al redactar una reclamación",
      "Inteligencia espacial=Percibir y manipular imágenes mentales, como al orientarse sin mapa",
      "Inteligencia intrapersonal=Conocerse a uno mismo, como saber qué situaciones nos agobian",
      "Inteligencia interpersonal=Comprender a los demás, como notar que un amigo está molesto",
      "Inteligencia naturalista=Distinguir y clasificar seres vivos y objetos naturales",
      "Savants y prodigios=Criterio basado en un rendimiento excepcional en una sola capacidad",
      "Operaciones nucleares=Criterio que exige un conjunto de operaciones propias",
      "Frames of Mind=Obra de 1983 en la que Gardner presentó su teoría"
    ],
    g: [
      "Gardner añadió la inteligencia naturalista en ___.|1999|1983|2006",
      "Notar que un instrumento desafina es un ejemplo de inteligencia ___.|musical|espacial|lingüística",
      "La elección de las inteligencias se basó sobre todo en una revisión ___ de la literatura.|cualitativa|cuantitativa|metaanalítica",
      "De los ocho criterios de Gardner, el que peor se cumple es el ___.|psicométrico|evolutivo|simbólico",
      "Las capacidades corporal y musical, poco relacionadas con g, se prefieren llamar ___.|talentos|componentes|factores"
    ],
    tf: [
      "Gardner propuso ocho inteligencias en «Frames of Mind» (1983).|F|En 1983 propuso siete. La naturalista se añadió en 1999.",
      "En el estudio de Visser, Ashton y Vernon, las inteligencias lingüística, lógico-matemática y espacial saturaban en g.|V",
      "Uno de los criterios de Gardner es que la capacidad pueda codificarse en un sistema simbólico.|V",
      "Visser, Ashton y Vernon hallaron que la corporal y la musical eran las inteligencias más relacionadas con g.|F|Eran las que menos se relacionaban con g, porque dependen más de capacidades motoras o sensoriales."
    ],
    q: [
      "Tras una lesión cerebral, un paciente pierde el lenguaje, pero conserva intactas sus capacidades musicales. ¿Qué criterio de Gardner ilustra?|Aislamiento por lesión cerebral|Existencia de savants y prodigios|Historia evolutiva plausible|Que una lesión dañe una capacidad dejando intactas las demás es el criterio de aislamiento por lesión cerebral.",
      "Reconocer setas comestibles es un ejemplo de inteligencia…|naturalista|espacial|lógico-matemática|La naturalista consiste en distinguir y clasificar seres vivos y objetos naturales. Se añadió en 1999.",
      "¿Qué hallaron Visser, Ashton y Vernon (2006) al medir las ocho inteligencias?|Las cognitivas saturaban en g|Todas eran independientes de g|Solo la musical saturaba en g|Las inteligencias cognitivas correlacionaban entre sí y saturaban en g, lo contrario de su supuesta independencia.",
      "¿Por qué tuvo tanto éxito la teoría de Gardner en la escuela?|Dice que todo niño es inteligente de algún modo|Aporta un test estandarizado por inteligencia|Demuestra una base cerebral por inteligencia|Transmite un mensaje atractivo, pero ese éxito no se corresponde con la evidencia empírica."
    ],
    inc: [
      "Sobre la teoría de Gardner|Su criterio psicométrico es el que mejor se cumple|Propone inteligencias relativamente independientes|Incluye la inteligencia intrapersonal|El criterio psicométrico, el que permitiría comprobar la independencia de las inteligencias, es el que peor se cumple."
    ],
    seq: [],
    cls: [
      "Relación con g según Visser, Ashton y Vernon|Saturan en g: lingüística; lógico-matemática; espacial|Menos relacionadas con g: corporal-cinestésica; musical"
    ] },
  { t: "Dos neuromitos: inteligencias múltiples y estilos de aprendizaje",
    tip: "Un neuromito es una creencia sobre el cerebro o el aprendizaje que parece científica, se difunde mucho y no tiene apoyo empírico. Waterhouse (2023) calificó así las inteligencias múltiples: no hay medidas estándar, no se ha demostrado su independencia y no tienen base cerebral propia. Pashler et al. (2008) mostraron que la hipótesis del ajuste exigiría una interacción cruzada, y los pocos estudios bien diseñados no la apoyan. Lo que funciona es ajustar el formato al contenido, no a la persona.",
    v: [
      "Neuromito=Creencia sobre cerebro o aprendizaje, presentada como científica y sin apoyo empírico",
      "Waterhouse (2023)=Calificó de neuromito la teoría de las inteligencias múltiples",
      "Estilos de aprendizaje=Creencia de que cada persona aprende mejor por un canal, como el visual",
      "Hipótesis del ajuste=Enseñar en el estilo preferido de cada alumno mejoraría su aprendizaje",
      "Meshing=Término inglés de la idea de ajustar la enseñanza al estilo del alumno",
      "Interacción cruzada=Cada grupo aprende más con el método que coincide con su estilo",
      "Pashler et al. (2008)=Analizaron el diseño necesario para contrastar la hipótesis del ajuste",
      "Ajustar formato al contenido=Práctica con apoyo, como enseñar geografía con mapas a todos"
    ],
    g: [
      "Según Pashler et al., los alumnos deben asignarse ___ a los métodos de enseñanza.|al azar|por su estilo|por su nivel",
      "Las personas sí tienen ___ sobre cómo recibir la información, pero ajustarse a ellas no mejora el aprendizaje.|preferencias|aptitudes|necesidades",
      "Para contrastar la hipótesis del ajuste, el aprendizaje se mide con ___ prueba para todos.|la misma|una distinta|una adaptada",
      "La pronunciación de un idioma se aprende mejor ___, sea cual sea el supuesto estilo del alumno.|escuchándola|leyéndola|escribiéndola",
      "Gardner ha insistido en que las inteligencias múltiples y los estilos de aprendizaje son ideas ___.|distintas|equivalentes|complementarias"
    ],
    tf: [
      "Que un método de enseñanza sea mejor para todos los alumnos apoya la hipótesis del ajuste.|F|Solo la apoyaría una interacción cruzada: cada grupo aprendería más con el método ajustado a su estilo.",
      "Waterhouse (2023) señala que no se ha encontrado una base cerebral propia para cada inteligencia.|V",
      "Calificar de neuromito las inteligencias múltiples implica negar que existan capacidades musicales o corporales.|F|Lo que no se sostiene es que sean inteligencias independientes con base neural propia, no que existan.",
      "Pashler et al. (2008) hallaron muy pocos estudios con el diseño adecuado, y los que había no apoyaban la hipótesis.|V"
    ],
    q: [
      "Un estudio clasifica a los alumnos en visuales y verbales, los asigna al azar a dos métodos y usa la misma prueba. Ambos grupos aprenden más con el método visual. ¿Qué indica?|Que no apoya la hipótesis del ajuste|Que confirma la hipótesis del ajuste|Que revela una interacción cruzada|Un método mejor para todos es el patrón habitual y no apoya el ajuste, que exigiría una interacción cruzada.",
      "Un orientador etiqueta a un niño como «kinestésico» y reduce su práctica de lectura. ¿Qué ilustra?|El coste de un neuromito|Un ajuste al contenido|Una interacción cruzada|Etiquetar a un niño por su supuesto estilo puede privarle de práctica necesaria, como la lectura.",
      "¿Qué razón dio Waterhouse (2023) para calificar de neuromito las inteligencias múltiples?|No hay medidas estándar de ellas|Comparten una base genética común|Gardner no propuso criterios|Tampoco se ha demostrado su independencia ni se ha hallado una base cerebral propia para cada inteligencia.",
      "Según la evidencia, ¿a qué conviene ajustar el formato de la enseñanza?|Al contenido|Al estilo del alumno|A la inteligencia dominante|La geografía se aprende mejor con mapas para todos: se ajusta el formato al contenido, no a la persona."
    ],
    inc: [
      "Sobre los estilos de aprendizaje|Ajustar la enseñanza al estilo preferido mejora lo aprendido|Las personas tienen preferencias sobre cómo recibir información|A menudo se mezclan con las inteligencias múltiples|No hay apoyo para la hipótesis del ajuste: atender a las preferencias no mejora el aprendizaje (Pashler et al., 2008)."
    ],
    seq: [
      "Diseño para contrastar la hipótesis del ajuste|Clasificar a los alumnos por su estilo>Asignarlos al azar a los métodos>Medir con la misma prueba para todos>Buscar una interacción cruzada"
    ],
    cls: [
      "Patrón de resultados|Apoya el ajuste: visuales mejor con método visual; verbales mejor con método verbal|No apoya el ajuste: un método mejor para todos; ausencia de diferencias"
    ] }
] },
{ n: 6, t: "Cerebro, genes y generaciones", cap: 2, pir: "media", mods: [
  { t: "La red parieto-frontal y la eficiencia neural",
    tip: "La P-FIT de Jung y Haier (2007) sitúa las diferencias de inteligencia en una red distribuida de regiones sobre todo prefrontales y parietales, en la que importa la sustancia blanca que las conecta. La hipótesis de la eficiencia neural surgió cuando Haier et al. (1988) vieron con PET que quienes puntuaban mejor consumían menos glucosa. Se cumple sobre todo en tareas de dificultad baja o moderada, y varía según la tarea y, en algunos estudios, el sexo.",
    v: [
      "P-FIT=Teoría que sitúa la inteligencia en una red parietal y frontal (Jung y Haier, 2007)",
      "Eficiencia neural=Menor activación de los más capaces ante tareas de dificultad moderada",
      "Sustancia blanca=Haces de fibras que conectan con rapidez las regiones de la red",
      "Áreas temporales y occipitales=Procesan la información sensorial, como el aspecto de una matriz",
      "Áreas parietales=En la P-FIT, integran y abstraen la información sensorial",
      "Áreas prefrontales=Ponen a prueba hipótesis y comparan soluciones",
      "Cingulada anterior=Selecciona la respuesta e inhibe las alternativas",
      "Haier et al. (1988)=Midieron con PET el consumo de glucosa durante un test de razonamiento"
    ],
    g: [
      "Haier et al. (1988) midieron el consumo cerebral de ___ con tomografía por emisión de positrones.|glucosa|oxígeno|sodio",
      "Ante tareas muy difíciles, las personas más capaces pueden mostrar una activación cerebral ___.|mayor|menor|nula",
      "Según la P-FIT, las personas más inteligentes tienden a mostrar una conectividad más ___ entre las áreas de la red.|eficiente|lenta|escasa",
      "En la P-FIT, las áreas ___ integran y abstraen la información sensorial.|parietales|occipitales|prefrontales",
      "Cuando una tarea se ___, cualquier persona consume menos recursos al resolverla.|automatiza|complica|alarga"
    ],
    tf: [
      "Según la eficiencia neural, las personas más inteligentes activan más el cerebro ante tareas de dificultad moderada.|F|Es al revés: ante tareas moderadas muestran menor activación. Invertir la relación es una trampa típica.",
      "La P-FIT sostiene que la inteligencia reside en el lóbulo frontal.|F|Subraya que se trata de una red distribuida, sobre todo prefrontal y parietal, y de su integración.",
      "Las regiones de la P-FIT coinciden en buena parte con las que sostienen la memoria de trabajo y el control atencional.|V",
      "Los resultados sobre eficiencia neural varían según el tipo de tarea y, en algunos estudios, según el sexo.|V"
    ],
    q: [
      "En un estudio con PET, dos personas resuelven el mismo test de razonamiento de dificultad moderada. ¿Qué cabe esperar de la que puntúa más alto?|Menor consumo de glucosa|Mayor consumo de glucosa|Igual consumo de glucosa|Es el hallazgo de Haier et al. (1988): el cerebro más capaz resuelve la tarea con menos recursos.",
      "¿Qué estructura de la P-FIT participa en seleccionar la respuesta e inhibir las alternativas?|La cingulada anterior|La corteza parietal|La corteza occipital|La corteza cingulada anterior interviene al final: selecciona la respuesta e inhibe las alternativas.",
      "¿Qué límite se atribuye a la P-FIT?|Describe asociaciones, no causas|Depende del sexo de la muestra|Solo se cumple en tareas fáciles|La P-FIT recoge asociaciones. La dependencia de la dificultad, la tarea y el sexo es el límite de la eficiencia neural.",
      "¿Por qué es tan importante la sustancia blanca en la P-FIT?|Comunica rápido las regiones de la red|Procesa la información sensorial inicial|Compara las soluciones posibles|Para que la red funcione, sus regiones deben comunicarse rápido, y la sustancia blanca son los haces que las conectan."
    ],
    inc: [
      "Sobre la eficiencia neural|Se cumple igual en tareas de cualquier dificultad|Surgió de un estudio con PET de Haier et al.|La práctica también reduce la activación cerebral|Se cumple sobre todo en tareas de dificultad baja o moderada. Ante tareas muy difíciles, los más capaces pueden activar más."
    ],
    seq: [
      "Procesamiento de un problema según la P-FIT|Áreas temporales y occipitales procesan lo sensorial>Áreas parietales integran y abstraen>Áreas prefrontales ponen a prueba hipótesis>Cingulada anterior selecciona la respuesta"
    ],
    cls: [
      "Propuesta|P-FIT: Jung y Haier (2007); red parieto-frontal; asociaciones, no causas|Eficiencia neural: Haier et al. (1988); consumo de glucosa; depende de la dificultad"
    ] },
  { t: "Tamaño cerebral e inteligencia",
    tip: "Pietschnig et al. (2015) reunieron 88 estudios con más de 8.000 personas y hallaron una correlación de ,24 entre volumen cerebral e inteligencia, pequeña o moderada y con indicios de publicación selectiva. Gignac y Bates (2017) mostraron que con buenas medidas de inteligencia sube a ,30 o más, y Cox et al. (2019) obtuvieron en torno a ,28. La correlación no implica causalidad, el volumen es una medida gruesa y la relación es poblacional, no individual.",
    v: [
      "Pietschnig et al. (2015)=Metaanálisis de 88 estudios con una correlación de ,24",
      "Gignac y Bates (2017)=Hallaron ,30 o más al usar solo buenas medidas de inteligencia",
      "Cox et al. (2019)=Unas 29.000 personas del UK Biobank y una correlación en torno a ,28",
      "Publicación selectiva=Mayor probabilidad de publicar resultados llamativos, que infla las estimaciones",
      "Atenuación=Reducción de una correlación por medir mal una de las variables",
      "Medida gruesa=El volumen total, menos informativo que la organización y la conectividad",
      "Terceras variables=Factores como la nutrición que podrían influir en volumen e inteligencia",
      "Relación poblacional=Vale entre personas de una población, no como regla para un individuo"
    ],
    g: [
      "Una correlación de ,24 explica en torno al ___ de las diferencias de inteligencia.|6 %|24 %|50 %",
      "El metaanálisis de Pietschnig et al. (2015) reunió ___ estudios.|88|29|200",
      "Una medida poco fiable o incompleta de la inteligencia ___ cualquier correlación con ella.|atenúa|infla|invierte",
      "Cox et al. (2019) analizaron unas 29.000 personas del ___.|UK Biobank|ejército noruego|registro sueco",
      "El debate actual no está en si la relación existe, sino en su ___ exacto.|tamaño|sentido|origen"
    ],
    tf: [
      "Según Gignac y Bates (2017), la correlación entre volumen e inteligencia sube cuando se usan baterías amplias.|V",
      "Con una correlación de ,24, conocer el volumen cerebral de alguien permite predecir bien su CI.|F|La nube de puntos es muy dispersa: el volumen apenas permite predecir la inteligencia de una persona.",
      "Pietschnig et al. (2015) encontraron indicios de publicación selectiva que podrían inflar las estimaciones.|V",
      "El debate actual se centra en si existe o no relación entre volumen cerebral e inteligencia.|F|Que la relación existe está bien establecido. Se discute si se acerca más a ,24 o supera ,30."
    ],
    q: [
      "Un comentarista afirma que, por tener la cabeza grande, un concursante resolverá la prueba de lógica mejor que nadie. ¿Qué cautela se le aplica?|La relación es poblacional, no individual|El volumen no guarda relación con el CI|La correlación es negativa en adultos|Es una relación entre personas de una población, modesta y dispersa, que no sirve como regla para un individuo.",
      "¿Por qué la correlación de Gignac y Bates es mayor que la de Pietschnig et al.?|Usaron mejores medidas de inteligencia|Incluyeron muestras más jóvenes|Excluyeron los estudios no publicados|Un único test breve atenúa la correlación. Con baterías amplias, la relación sube a ,30 o más.",
      "¿Qué factor podría explicar a la vez un cerebro mayor y una inteligencia mayor?|La nutrición en la infancia|La práctica con tests|La publicación selectiva|La correlación no implica causalidad: terceras variables como la nutrición o la salud infantil podrían influir en ambos.",
      "¿Qué importa probablemente más que el volumen cerebral total?|La organización y la conectividad|El tamaño del lóbulo frontal|El perímetro del cráneo|El volumen es una medida gruesa: importan más la organización, la conectividad y la eficiencia de redes como la P-FIT."
    ],
    inc: [
      "Sobre volumen cerebral e inteligencia|La correlación supera ,70 con buenas medidas|La existencia de la relación está establecida|El volumen es una medida bastante gruesa|Con buenas medidas la correlación es de ,30 o más, no superior a ,70. Sigue siendo pequeña o moderada."
    ],
    seq: [],
    cls: [
      "Estudio|Pietschnig et al. (2015): ,24; 88 estudios; posible publicación selectiva|Gignac y Bates (2017): ,30 o más; buenas medidas de inteligencia|Cox et al. (2019): en torno a ,28; UK Biobank"
    ] },
  { t: "Lo que aportan los estudios genómicos",
    tip: "Los estudios de gemelos dicen cuánto de la variación se asocia con los genes, y los genómicos buscan qué variantes intervienen. Los GWAS exploran todo el genoma sin hipótesis previa, y Savage et al. (2018) hallaron unos 200 loci en unas 270.000 personas: la inteligencia es extremadamente poligénica. La heredabilidad con SNP, de ,20-,25, queda lejos de la de gemelos. Howe et al. (2022) mostraron que las asociaciones se reducen un 40-50 % entre hermanos.",
    v: [
      "GWAS=Busca variantes de todo el genoma asociadas con un rasgo en muestras grandes",
      "SNP=Polimorfismo de un solo nucleótido",
      "Genes candidatos=Enfoque antiguo de uno o pocos genes elegidos por hipótesis, poco replicado",
      "Poligenia=Influencia de muchísimas variantes genéticas, cada una de efecto minúsculo",
      "Heredabilidad perdida=Distancia entre la estimación con SNP y la de los estudios de gemelos",
      "Puntuación poligénica=Índice que suma efectos de miles de variantes para estimar la propensión",
      "Crianza genética=Efecto de los genes de los padres a través del ambiente que crean",
      "Emparejamiento selectivo=Emparejarse con personas de nivel parecido, lo que concentra variantes"
    ],
    g: [
      "Savage et al. (2018) identificaron alrededor de ___ loci asociados con la inteligencia.|200|20|2.000",
      "Con los SNP medidos directamente, la heredabilidad de la inteligencia ronda ___.|,20-,25|,50-,60|,05-,10",
      "Las mejores puntuaciones poligénicas, construidas para el nivel ___, explican un 12-16 % de su varianza.|educativo|cognitivo|socioeconómico",
      "Al comparar hermanos, Howe et al. (2022) vieron que las estimaciones se reducían en torno a un ___.|40-50 %|10-15 %|80-90 %",
      "Que grupos de población difieran a la vez en genes y en ambientes se llama estratificación ___.|poblacional|familiar|selectiva"
    ],
    tf: [
      "Los GWAS examinan uno o pocos genes elegidos por hipótesis previas.|F|Eso hacían los estudios de genes candidatos. Los GWAS exploran todo el genoma sin hipótesis previa.",
      "La varianza que explica una puntuación poligénica equivale a la heredabilidad estimada en gemelos.|F|No deben confundirse: las mejores PGS explican un 12-16 %, muy por debajo de la heredabilidad en gemelos.",
      "La heredabilidad perdida se atribuye en parte a variantes muy raras que los chips actuales no captan bien.|V",
      "Ninguna variante genética aislada sirve para predecir el CI de una persona.|V"
    ],
    q: [
      "Unos padres aficionados a la lectura llenan la casa de libros, y su hija, que hereda parte de esa propensión, puntúa alto en lectura. ¿Qué inflaría el efecto atribuido a sus genes?|La crianza genética|La estratificación poblacional|El emparejamiento selectivo|Los genes de los padres influyen en el ambiente que crean, y parte del efecto atribuido a los genes de la hija viene del hogar.",
      "¿Qué aportan los estudios genómicos que no dan los de gemelos?|Qué variantes del ADN intervienen|Cuánta variación es heredable|Cuánto pesa el ambiente compartido|Los de gemelos dicen cuánto de la variación se asocia con los genes, pero no qué variantes concretas intervienen.",
      "¿Cuál es el hallazgo principal de Savage et al. (2018)?|La poligenia extrema de la inteligencia|Un gen de gran efecto sobre el CI|La heredabilidad nula medida con SNP|Se identificaron unos 200 loci, cada uno con un efecto minúsculo. No existe un «gen de la inteligencia».",
      "¿Por qué se comparan las asociaciones genéticas entre hermanos?|Porque comparten la misma familia|Porque comparten todo su ADN|Porque así se captan variantes raras|Al compartir familia, se separa el efecto genético directo de la crianza genética, la estratificación y el emparejamiento."
    ],
    inc: [
      "Sobre los estudios genómicos|Los genes candidatos dieron resultados muy replicados|Los GWAS comparan cientos de miles de SNP|La inteligencia es extremadamente poligénica|Los resultados de los estudios de genes candidatos apenas se han replicado, a diferencia de los GWAS."
    ],
    seq: [],
    cls: [
      "Factor que infla las asociaciones genéticas|Crianza genética: genes de los padres; ambiente del hogar; casa llena de libros|Estratificación poblacional: grupos de población; genes y ambientes coincidentes|Emparejamiento selectivo: parejas de nivel parecido; concentra variantes y ambientes"
    ] },
  { t: "El efecto Flynn y su inversión",
    tip: "Flynn (1984, 1987) documentó una subida del CI entre generaciones de unos 3 puntos por década durante el siglo XX, mayor en inteligencia fluida que en vocabulario. Desde finales del siglo XX se ha frenado, e incluso invertido en algunos países. En Noruega, Bratsberg y Rogeberg (2018) hallaron la subida y la bajada también entre hermanos, lo que descarta las explicaciones disgenésicas y de composición: el origen es ambiental. Las causas concretas siguen en debate, y nada de ello implica baja heredabilidad.",
    v: [
      "Efecto Flynn=Aumento de las puntuaciones de CI entre generaciones durante el siglo XX",
      "Ganancia por década=En torno a 3 puntos de CI en muchos países",
      "Baremo antiguo=Norma con la que una persona actual obtendría un CI inflado",
      "Inversión del efecto=Descenso del CI medio en cohortes recientes de algunos países",
      "Bratsberg y Rogeberg (2018)=Analizaron reclutas noruegos nacidos entre 1962 y 1991",
      "Explicación disgenésica=Que las personas con menor CI tengan más hijos y bajen la media",
      "Composición de la población=Explicación por cambios demográficos, como la inmigración",
      "Pietschnig y Voracek (2015)=Documentaron el frenazo de las ganancias en países desarrollados"
    ],
    g: [
      "El efecto Flynn avanzó a un ritmo de en torno a ___ puntos de CI por década.|3|1|7",
      "Las ganancias fueron mayores en las pruebas de inteligencia ___.|fluida|cristalizada|verbal",
      "En Noruega, el CI medio alcanzó su máximo en torno a la cohorte nacida en ___.|1975|1962|1991",
      "Que el patrón aparezca entre hermanos indica que su origen es ___.|ambiental|genético|demográfico",
      "La estatura es muy heredable y, aun así, ha aumentado mucho gracias a la mejor ___.|alimentación|escolarización|tecnología"
    ],
    tf: [
      "El efecto Flynn fue mayor en vocabulario y conocimientos que en razonamiento fluido.|F|Fue al revés: las mayores ganancias se dieron en inteligencia fluida, como en las matrices de Raven.",
      "Si el CI cambia tanto entre generaciones, su heredabilidad tiene que ser baja.|F|La heredabilidad describe diferencias entre personas de una población y es compatible con grandes cambios de la media.",
      "Que el efecto Flynn sea ambiental es un consenso, pero sus causas concretas están en debate.|V",
      "En la fase de descenso noruega, los hermanos nacidos más tarde puntuaban más bajo que sus hermanos mayores.|V"
    ],
    q: [
      "Una psicóloga corrige hoy un test de inteligencia con un baremo elaborado hace cuarenta años. ¿Qué cabe esperar?|Un CI inflado|Un CI rebajado|Un CI exacto|Los tests se baremaban con la población de su época, y con un baremo antiguo una persona actual obtendría un CI inflado.",
      "Unos investigadores observan que el CI medio de un país baja desde los años noventa. ¿Qué dato permitiría atribuirlo al ambiente?|Que el descenso aparezca entre hermanos|Que coincida con la llegada de inmigrantes|Que los de menor CI tengan más hijos|Los hermanos comparten padres, así que el patrón entre hermanos descarta las explicaciones disgenésicas y de composición.",
      "¿Qué explicación de la inversión noruega queda descartada al darse el patrón entre hermanos?|La disgenésica|La nutricional|La escolar|Los hermanos comparten padres, así que la bajada no puede deberse a que los de menor CI tengan más hijos.",
      "¿Cuál de estas es una causa propuesta para el efecto Flynn?|Un entorno cognitivo más complejo|Una selección genética reciente|Un cambio en la composición étnica|Entre las propuestas figuran la nutrición, la escolarización, las familias más pequeñas y un entorno cognitivo más complejo."
    ],
    inc: [
      "Sobre el efecto Flynn|Demuestra que la inteligencia apenas es heredable|Obligó a actualizar periódicamente los baremos|Se ha frenado en varios países desarrollados|La heredabilidad describe diferencias entre personas y es compatible con grandes cambios de la media entre generaciones."
    ],
    seq: [
      "Trayectoria del efecto Flynn|Subida de unos 3 puntos por década en el siglo XX>Frenazo en países desarrollados desde finales de siglo>Inversión en algunos países, como Noruega"
    ],
    cls: [
      "Explicación del cambio del CI|Descartada por el patrón entre hermanos: disgenésica; composición de la población|Propuesta como causa ambiental: nutrición; escolarización; familias más pequeñas; entorno cognitivo más complejo"
    ] }
] },
{ n: 7, t: "Emoción, creatividad y estilos cognitivos", cap: 3, pir: "media", mods: [
  { t: "Inteligencia social: una idea difícil de medir",
    tip: "Thorndike (1920) distinguió la inteligencia abstracta, la mecánica y la social, la capacidad de comprender a los demás y de «actuar sabiamente en las relaciones humanas». En Guilford corresponde a las operaciones sobre el contenido conductual, y Cantor y Kihlstrom (1987) la entendieron como conocimiento social declarativo y procedimental al servicio de las propias metas. Su gran problema ha sido la medida: los primeros tests correlacionaban tanto con la inteligencia verbal que les faltaba validez discriminante.",
    v: [
      "Thorndike (1920)=Distinguió las inteligencias abstracta, mecánica y social",
      "Inteligencia abstracta=Para Thorndike, la que permite manejar ideas y símbolos",
      "Inteligencia mecánica=Para Thorndike, la que permite manejar objetos",
      "Contenido conductual=En Guilford, contenido cuyas operaciones equivalen a la inteligencia social",
      "Cantor y Kihlstrom (1987)=Entendieron la inteligencia social como conocimiento al servicio de metas",
      "Conocimiento social declarativo=Conceptos sobre personas y situaciones, normas y recuerdos de episodios sociales",
      "Conocimiento social procedimental=Reglas para usar el saber social, interpretar lo que ocurre y planificar",
      "Validez discriminante=Correlacionar menos con constructos diferentes que con el propio"
    ],
    g: [
      "Thorndike describió la inteligencia social como la capacidad de «actuar ___ en las relaciones humanas».|sabiamente|libremente|rápidamente",
      "Los primeros tests de inteligencia social correlacionaban demasiado con las pruebas de inteligencia ___.|verbal|espacial|mecánica",
      "Reconocer intenciones y actitudes a partir de gestos corresponde en Guilford al contenido ___.|conductual|semántico|simbólico",
      "Los autoinformes de inteligencia social miden la ___ que uno tiene de sí mismo, no su rendimiento real.|imagen|capacidad|conducta",
      "Desde una perspectiva ___, la complejidad de la vida en grupo habría favorecido el desarrollo de la inteligencia humana.|evolucionista|psicométrica|conductista"
    ],
    tf: [
      "La inteligencia social es más amplia que la emocional, porque incluye normas, roles y exigencias de cada contexto.|V",
      "Para Cantor y Kihlstrom, lo decisivo es cuánto conocimiento social se tiene, más que cómo se usa.|F|Importa no solo cuánto se sabe, sino cómo se usa: detectar las señales del contexto y actuar en consecuencia.",
      "Quien comprende bien a los demás tiende necesariamente a tratarlos bien.|F|Comprender a los demás no garantiza tratarlos bien: la misma habilidad puede servir para ayudar o para manipular.",
      "Una dificultad para medir la inteligencia social es que muchos problemas sociales no tienen una única respuesta correcta.|V"
    ],
    q: [
      "Un trabajador nuevo capta en pocos días que la jefa prefiere las dudas por escrito y que ciertas bromas no se hacen ante los clientes, y ajusta su conducta. ¿Qué muestra?|Inteligencia social|Inteligencia mecánica|Inteligencia abstracta|Captar las reglas implícitas de un contexto y ajustar la conducta es lo que esta tradición llama inteligencia social.",
      "¿Qué problema de medida tuvieron los primeros tests de inteligencia social?|Falta de validez discriminante|Falta de fiabilidad test-retest|Falta de baremos por edades|Correlacionaban tanto con la inteligencia verbal que no estaba claro que midieran algo distinto.",
      "Usar lo que se sabe de un compañero para interpretar su silencio y decidir qué decirle es, para Cantor y Kihlstrom, conocimiento social…|procedimental|declarativo|episódico|Las reglas para usar el saber, interpretar lo que ocurre y planificar qué hacer forman el conocimiento social procedimental.",
      "¿En qué se centra la inteligencia interpersonal de Gardner frente a la social?|En las relaciones cara a cara|En la información emocional|En normas, roles y contextos|La interpersonal se centra en las relaciones cara a cara. La social es más amplia e incluye normas, roles y exigencias del contexto."
    ],
    inc: [
      "Sobre la inteligencia social|Los autoinformes reflejan bien el rendimiento social real|En Guilford se liga al contenido conductual|Thorndike la distinguió de la abstracta y la mecánica|Los autoinformes miden la imagen que uno tiene de sí mismo, no su rendimiento real."
    ],
    seq: [],
    cls: [
      "Conocimiento social según Cantor y Kihlstrom|Declarativo: conceptos sobre personas; normas; recuerdos de episodios sociales|Procedimental: reglas para usar el saber; interpretar lo que ocurre; planificar qué hacer"
    ] },
  { t: "Inteligencia emocional: capacidad, rasgo y modelos mixtos",
    tip: "La inteligencia emocional se formuló con Salovey y Mayer (1990) y la popularizó Goleman (1995). El modelo de capacidad de Mayer y Salovey (1997) tiene cuatro ramas, percibir, usar, comprender y regular, y se mide con el MSCEIT, un test de rendimiento. Los modelos mixtos (Goleman, y Bar-On con el EQ-i) y el de rasgo (Petrides y Furnham, con el TEIQue) usan autoinformes que se solapan con la personalidad. La IE de capacidad añade poca validez incremental sobre el CI y la personalidad.",
    v: [
      "Salovey y Mayer (1990)=Formularon el término en un artículo académico",
      "Goleman (1995)=Popularizó el concepto como clave del éxito personal y laboral",
      "MSCEIT=Test de rendimiento máximo de la IE como capacidad",
      "EQ-i=Inventario de Bar-On, propio de los modelos mixtos",
      "TEIQue=Autoinforme de Petrides y Furnham para la IE de rasgo",
      "Regular emociones=Rama más compleja del modelo de capacidad, propias y ajenas",
      "Modelo en cascada=Percepción, comprensión, regulación y desempeño (Joseph y Newman, 2010)",
      "Validez incremental=Predicción que añade una medida sobre el CI y la personalidad"
    ],
    g: [
      "Aprovechar un estado de ánimo animado para generar ideas corresponde a la rama de ___ las emociones.|usar|percibir|regular",
      "En selección de personal, la validez de la IE es de ___ (Sackett et al., 2022).|,22|,51|,38",
      "Con el rendimiento académico, la IE muestra una relación modesta, en torno a ___.|,20|,50|,05",
      "Petrides y Furnham sitúan la IE de rasgo en los niveles ___ de la jerarquía de la personalidad.|bajos|altos|intermedios",
      "Las medidas de IE de capacidad y las de autoinforme correlacionan ___ entre sí.|poco|mucho|negativamente"
    ],
    tf: [
      "El TEIQue y el EQ-i son, como el MSCEIT, tests de rendimiento máximo.|F|Son autoinformes. Solo el MSCEIT, del modelo de capacidad, puntúa respuestas como más o menos correctas.",
      "La IE de rasgo se solapa mucho con rasgos como el neuroticismo bajo o la extraversión.|V",
      "Las medidas mixtas predicen algo más que la IE de capacidad, en buena parte por su solapamiento con rasgos ya conocidos.|V",
      "En el metaanálisis de Joseph y Newman (2010), la IE de capacidad aportó una validez incremental notable sobre el CI.|F|Aportó poca validez incremental sobre el CI y la personalidad."
    ],
    q: [
      "Marta se describe en un cuestionario como muy empática, pero falla al identificar emociones en las caras del MSCEIT. ¿Qué ilustra?|Que autoinforme y rendimiento difieren|Que el MSCEIT carece de validez|Que su IE de rasgo es muy baja|Preguntar si alguien reconoce emociones no es lo mismo que pedirle que las reconozca, y ambas medidas correlacionan poco.",
      "Saber que la irritación puede convertirse en ira si la ofensa continúa corresponde a la rama de…|comprender|percibir|regular|Comprender las emociones implica saber cómo se combinan, de qué surgen y cómo evolucionan.",
      "¿Qué modelo de IE combina capacidades emocionales con optimismo, autoestima y tolerancia al estrés?|El mixto|El de rasgo|El de capacidad|Los modelos mixtos de Goleman y Bar-On mezclan capacidades con rasgos de personalidad, competencias sociales y motivación.",
      "En el modelo en cascada de Joseph y Newman (2010), ¿qué precede directamente a la regulación emocional?|La comprensión emocional|La percepción emocional|El desempeño laboral|La percepción favorece la comprensión, esta la regulación, y la regulación el desempeño."
    ],
    inc: [
      "Sobre la inteligencia emocional|Importa más que el CI para tener éxito|El MSCEIT puntúa respuestas correctas|La IE de rasgo se mide por autoinforme|Es un mito de la divulgación: la IE de capacidad añade poca predicción, y en selección su validez es de ,22."
    ],
    seq: [
      "Ramas del modelo de capacidad, de menor a mayor complejidad|Percibir>Usar>Comprender>Regular"
    ],
    cls: [
      "Modelo de inteligencia emocional|Capacidad: Mayer y Salovey; MSCEIT; test de rendimiento|Mixto: Goleman; Bar-On; EQ-i|Rasgo: Petrides y Furnham; TEIQue; autopercepciones"
    ] },
  { t: "Creatividad: medida, modelos y relación con la inteligencia",
    tip: "Una producción es creativa si es original y adecuada. Guilford (1950) impulsó su estudio y propuso el pensamiento divergente, que se puntúa por fluidez, flexibilidad, originalidad y elaboración, aunque solo indica potencial. La correlación con la inteligencia es positiva pero baja, en torno a ,17 (Kim, 2005), y Jauk et al. (2013) hallaron umbral para el potencial, no para el logro. La apertura es el mejor predictor de personalidad, y la locura no es necesaria para crear.",
    v: [
      "Producción creativa=La que es a la vez original y útil o valiosa para algún fin",
      "Pensamiento divergente=Genera muchas respuestas ante un problema abierto, indicador de potencial",
      "Fluidez=Número de respuestas ante un problema abierto",
      "Flexibilidad=Número de categorías distintas de respuestas",
      "Originalidad=Respuestas poco frecuentes",
      "RAT=Test de Mednick: hallar una palabra relacionada con otras tres",
      "Hipótesis del umbral=Por encima de un CI de unos 120, la inteligencia dejaría de importar para crear",
      "Mini-c=Aprendizaje personalmente significativo en el modelo de las 4 C"
    ],
    g: [
      "El estudio moderno de la creatividad arranca con el discurso de Guilford ante la APA en ___.|1950|1926|1966",
      "En la tarea de usos de una pinza de la ropa, el grado de detalle de las respuestas mide la ___.|elaboración|fluidez|originalidad",
      "Wallas describió cuatro fases: preparación, incubación, ___ y verificación.|iluminación|evaluación|elaboración",
      "Según Feist (1998), los artistas creativos son, además, menos ___.|responsables|extravertidos|abiertos",
      "En el modelo de sistemas de Csikszentmihalyi, el ___ son los expertos que deciden qué novedad se incorpora.|campo|ámbito|individuo"
    ],
    tf: [
      "Jauk et al. (2013) hallaron un umbral de inteligencia para el logro creativo, pero no para el potencial.|F|Es al revés: hubo umbral para el potencial, y el logro siguió aumentando con la inteligencia.",
      "Improvisar una receta con lo que queda en la nevera es un ejemplo de mini-c.|F|Es little-c, la creatividad cotidiana. Mini-c es el aprendizaje personalmente significativo.",
      "Según Kyaga et al., en conjunto las profesiones creativas no presentaban más trastornos.|V",
      "Dentro de la apertura, la faceta de intelecto se asocia más al logro científico que al artístico.|V"
    ],
    q: [
      "Ante la consigna «diga todos los usos de una pinza de la ropa», Ana da 20 respuestas, todas para sujetar cosas. ¿Qué perfil muestra?|Alta fluidez y baja flexibilidad|Alta flexibilidad y baja fluidez|Alta originalidad y baja fluidez|Muchas respuestas indican fluidez, pero si pertenecen a una sola categoría la flexibilidad es baja.",
      "¿Qué modelo explica la creatividad como «comprar barato y vender caro»?|El de la inversión|El componencial|El de sistemas|En el modelo de Sternberg y Lubart, el creativo apuesta por ideas poco valoradas y combina seis recursos.",
      "Según Amabile, ¿qué elementos componen la creatividad?|Destrezas, procesos y motivación|Individuo, ámbito y campo|Inteligencia, conocimiento y ambiente|El modelo componencial combina destrezas del dominio, procesos creativos y motivación intrínseca.",
      "¿Qué relación halló Kim (2005) entre creatividad e inteligencia?|Positiva pero baja, en torno a ,17|Positiva y alta, en torno a ,50|Nula por encima de un CI de 100|La correlación es positiva pero baja, y algo mayor con modelos de variables latentes que corrigen el error de medida."
    ],
    inc: [
      "Sobre la creatividad|El pensamiento divergente equivale a la creatividad|La apertura es su mejor predictor de personalidad|El logro creativo exige además una fase convergente|El pensamiento divergente es un indicador del potencial creativo, no la creatividad misma."
    ],
    seq: [
      "Fases del proceso creativo según Wallas (1926)|Preparación>Incubación>Iluminación>Verificación"
    ],
    cls: [
      "Modelo de creatividad|Inversión: Sternberg y Lubart; comprar barato y vender caro; seis recursos|Componencial: Amabile; motivación intrínseca; destrezas del dominio|Sistemas: Csikszentmihalyi; ámbito; campo"
    ] },
  { t: "Maneras de procesar: los estilos cognitivos",
    tip: "Un estilo cognitivo es el modo preferido y habitual de procesar la información: describe cómo, no cuánto, se rinde. Witkin midió la dependencia-independencia de campo con el RFT, el BAT y el EFT, y Kagan, la reflexividad-impulsividad con el MFFT, por latencia y errores. Otros estilos son la nivelación-agudización, la complejidad cognitiva y el autogobierno mental de Sternberg. Se debate si son preferencias o capacidades disfrazadas, porque la independencia de campo correlaciona con la capacidad espacial y la inteligencia fluida.",
    v: [
      "Estilo cognitivo=Modo preferido y habitual de percibir, pensar, recordar y resolver problemas",
      "RFT=Poner vertical una varilla luminosa dentro de un marco inclinado",
      "BAT=Poner el propio cuerpo vertical en una habitación inclinada",
      "EFT=Localizar una figura simple escondida en un dibujo complejo",
      "MFFT=Elegir, entre figuras casi iguales, la idéntica a un modelo",
      "Nivelación=Tendencia a fundir los estímulos nuevos con los recuerdos previos",
      "Complejidad cognitiva=Número de dimensiones distintas con que se perciben las personas",
      "Autogobierno mental=Estilos de pensamiento descritos como formas de gobierno (Sternberg, 1997)"
    ],
    g: [
      "En el MFFT, los reflexivos responden con latencia larga y cometen ___ errores.|pocos|muchos|variables",
      "Witkin integró la dependencia de campo en su teoría de la diferenciación ___.|psicológica|cognitiva|perceptiva",
      "La nivelación-agudización se debe a Klein y a Riley ___, no al autor de las inteligencias múltiples.|Gardner|Kagan|Witkin",
      "La complejidad cognitiva se inspira en los constructos personales de ___ (1955).|Kelly|Witkin|Kagan",
      "En el autogobierno mental, las funciones son legislativa, ejecutiva y ___.|judicial|jerárquica|global"
    ],
    tf: [
      "En el MFFT, los participantes rápidos y exactos se clasifican como reflexivos.|F|Los reflexivos son lentos y exactos. Rápidos-exactos y lentos-inexactos forman otros dos cuadrantes.",
      "La independencia de campo correlaciona con la capacidad espacial y con la inteligencia fluida.|V",
      "En principio, los estilos cognitivos no son mejores ni peores, sino más o menos adecuados a cada tarea.|V",
      "El autogobierno mental es una propuesta de Howard Gardner.|F|Es de Sternberg (1997). Atribuirlo a Gardner es una trampa típica."
    ],
    q: [
      "En una sala oscura, una participante debe poner vertical una varilla luminosa dentro de un marco inclinado, y lo logra guiándose por la gravedad. ¿Qué indica?|Independencia de campo|Dependencia de campo|Estilo reflexivo|En el RFT, orientarse por la gravedad y el propio cuerpo, y no por el marco, indica independencia de campo.",
      "Un niño responde muy deprisa en el MFFT y comete muchos errores. ¿Cuál es su estilo?|Impulsivo|Reflexivo|Dependiente de campo|Rapidez con muchos errores define al impulsivo. El reflexivo es lento y exacto.",
      "Según Witkin, ¿cómo tienden a ser las personas dependientes de campo?|Atentas a lo social|Analíticas y autónomas|Lentas y exactas|Las dependientes son más sensibles a las claves sociales y atentas a los demás. Las independientes, más analíticas y autónomas.",
      "¿Por qué se discute que el GEFT mida solo una preferencia?|Correlaciona con aptitudes como la espacial|No distingue a reflexivos de impulsivos|Su fiabilidad es muy baja|La independencia de campo correlaciona con la capacidad espacial y la inteligencia fluida, así que el GEFT mide en parte una aptitud."
    ],
    inc: [
      "Sobre los estilos cognitivos|Describen cuánto rinde una persona|Suelen describirse como polos|Varían según la situación y la edad|Describen cómo se procesa la información, no cuánto se rinde: son propensiones, no capacidades."
    ],
    seq: [],
    cls: [
      "Prueba de Witkin|RFT: varilla luminosa; marco inclinado; sala oscura|BAT: propio cuerpo; habitación inclinada|EFT: figura simple escondida; dibujo complejo"
    ] }
] },
{ n: 8, t: "Expectativas y atribuciones", cap: 3, pir: "alta", mods: [
  { t: "La persona como intérprete: Rotter y el locus de control",
    tip: "El modelo cognitivo de la persona sostiene que la conducta depende de cómo se interpreta la situación y de qué se espera. Para Rotter (1954), el potencial de conducta depende de la expectativa y del valor del refuerzo en una situación psicológica. El locus de control (Rotter, 1966) es una expectativa generalizada, interna o externa, que se midió con la escala I-E. Es una expectativa previa a la acción, no una atribución posterior.",
    v: [
      "Locus externo=Creer que los refuerzos dependen de la suerte, el destino u otros poderosos",
      "Heurísticos=Reglas prácticas que ahorran tiempo a costa de equivocarse a veces",
      "Egocentricidad=Sesgo de verse como centro de los acontecimientos (Greenwald, 1980)",
      "Conservadurismo cognitivo=Resistirse a cambiar lo que ya se cree",
      "Potencial de conducta=Probabilidad de una conducta según la expectativa y el valor del refuerzo",
      "Valor del refuerzo=Cuánto se desea el resultado de una conducta",
      "Escala I-E=29 ítems de elección forzosa, 6 de relleno, de Rotter",
      "MHLC=Escala de Wallston del locus de control en la salud"
    ],
    g: [
      "La escala I-E tiene 29 ítems de elección forzosa, de los que ___ son de relleno.|6|9|4",
      "Levenson separó tres dimensiones del locus: internalidad, otros poderosos y ___.|azar|destino|esfuerzo",
      "Las expectativas ___ se forman a partir de muchas experiencias y se aplican a situaciones nuevas.|generalizadas|específicas|situacionales",
      "Greenwald (1980) llamó ___ al sesgo de verse de forma favorable.|benevolencia|egocentricidad|conservadurismo",
      "A diferencia de la atribución, el locus de control es una expectativa que se tiene ___ de actuar.|antes|después|además"
    ],
    tf: [
      "El locus de control es una atribución que se hace después de conocer el resultado.|F|Es una expectativa previa a la acción. La atribución es una explicación posterior al resultado.",
      "Según Rotter, el potencial de conducta depende de la expectativa y del valor del refuerzo.|V",
      "La asociación del locus interno con el bienestar demuestra que el locus interno causa más bienestar.|F|Son correlaciones que no prueban causalidad, y un locus interno extremo ante lo incontrolable puede llevar a culparse.",
      "Para Levenson, creer que la vida depende de personas con poder no equivale a creer que depende de la suerte.|V"
    ],
    q: [
      "Una estudiante desea sacar buena nota, pero cree que preguntar dudas en clase le servirá de poco, así que no pregunta. Según Rotter, ¿qué falla?|La expectativa|El valor del refuerzo|El locus interno|Desea la nota, así que el valor del refuerzo es alto. Falla la probabilidad subjetiva de que preguntar lleve al refuerzo.",
      "¿Qué dimensión tomó Weiner de Rotter?|Interno-externo|Estable-inestable|Global-específico|Weiner tomó la dimensión interno-externo, pero la aplicó a las causas percibidas de un resultado ya ocurrido.",
      "¿Con qué se asocia en general el locus interno?|Con valorar el estrés como un reto|Con menos conductas de prevención|Con más depresión y menos bienestar|Se asocia con más bienestar, afrontamiento activo y cuidado de la salud, y con valorar el estrés como reto más que como amenaza.",
      "¿Qué autores comparten el modelo cognitivo de la persona?|Kelly, Rotter, Bandura y Mischel|Galton, Binet, Terman y Wechsler|Thurstone, Guilford, Cattell y Carroll|Comparten que la conducta depende de interpretaciones y expectativas, y estudian variables cognitivas."
    ],
    inc: [
      "Sobre el locus de control|Los datos lo confirman como una dimensión única|Es la expectativa generalizada más estudiada|Puede medirse en ámbitos concretos como la salud|Pronto se vio que no era unidimensional: Levenson separó internalidad, otros poderosos y azar."
    ],
    seq: [],
    cls: [
      "Locus de control|Interno: propia conducta; propio esfuerzo|Externo: suerte; destino; otros poderosos"
    ] },
  { t: "Bandura y la autoeficacia",
    tip: "Bandura (1977) distinguió la expectativa de eficacia o autoeficacia, creer que uno podrá ejecutar una conducta, de la expectativa de resultado, creer que esa conducta producirá el resultado. Sus fuentes, de más a menos potente, son los logros de ejecución, la experiencia vicaria, la persuasión verbal y los estados fisiológicos y emocionales. Entre personas se relaciona con el desempeño, en torno a ,38, pero dentro de la misma persona puede tener efectos nulos o negativos. Es específica, a diferencia del locus de control, que es generalizado.",
    v: [
      "Autoeficacia=Creencia en la propia capacidad para ejecutar una conducta concreta",
      "Expectativa de resultado=Creencia de que una conducta producirá un determinado efecto",
      "Logros de ejecución=Experiencias de dominio, la fuente más potente",
      "Experiencia vicaria=Ver a alguien parecido a uno conseguirlo",
      "Persuasión verbal=Que otros digan que uno puede, débil sin logros",
      "Magnitud=Hasta qué nivel de dificultad llega una expectativa de eficacia",
      "Fuerza=Cuánto resiste una expectativa de eficacia las experiencias contrarias",
      "Determinismo recíproco=Persona, conducta y ambiente se influyen mutuamente"
    ],
    g: [
      "En el trabajo, la relación entre autoeficacia y desempeño ronda ___ (Stajkovic y Luthans, 1998).|,38|,22|,17",
      "La ___ de una expectativa de eficacia indica a cuántas situaciones se extiende.|generalidad|magnitud|fuerza",
      "Interpretar el corazón acelerado antes de hablar en público como señal de incapacidad es una fuente ___.|fisiológica|vicaria|verbal",
      "Vancouver et al. hallaron que, tras subir la autoeficacia, algunos reducían el esfuerzo por exceso de ___.|confianza|activación|persuasión",
      "La autoeficacia es ___ de una tarea, mientras que el locus de control es generalizado.|específica|independiente|previa"
    ],
    tf: [
      "Según Bandura, la persuasión verbal es la fuente más potente de autoeficacia.|F|La más potente son los logros de ejecución. La persuasión verbal es débil si no se acompaña de logros.",
      "Una persona con locus de control interno puede tener baja autoeficacia para las matemáticas.|V",
      "La autoeficacia depende sobre todo de las habilidades que uno posee objetivamente.|F|Cuenta la confianza en poder poner en juego las propias habilidades ante una exigencia, no las que se poseen objetivamente.",
      "Dentro de una misma persona, subir la autoeficacia puede no mejorar el rendimiento.|V"
    ],
    q: [
      "Un paciente sabe que caminar a diario mejoraría su tensión, pero cree que no será capaz de mantenerlo. ¿Qué presenta?|Baja autoeficacia y alta expectativa de resultado|Alta autoeficacia y baja expectativa de resultado|Locus externo y alta expectativa de resultado|Confía en que la conducta funcionaría, pero no en ser capaz de ejecutarla.",
      "Una entrenadora quiere aumentar la autoeficacia de un nadador. Según Bandura, ¿qué será más eficaz?|Que logre metas progresivas|Que vea vídeos de campeones|Que oiga que es capaz|Los logros de ejecución son la fuente más potente. La experiencia vicaria funciona mejor con modelos parecidos a uno.",
      "¿Qué pregunta corresponde a la expectativa de eficacia?|«¿Seré capaz de correr diez kilómetros?»|«¿Bajará mi tensión si corro a menudo?»|«¿Depende mi salud de la suerte?»|La autoeficacia se refiere a poder ejecutar la conducta. Si la conducta producirá el resultado es la expectativa de resultado.",
      "¿Qué hallaron Vancouver et al. (2001, 2002)?|Efectos nulos o negativos dentro de la persona|Ninguna relación con el rendimiento entre personas|Más peso de la persuasión que de los logros|Al estudiar a la misma persona en varios ensayos hallaron efectos nulos o incluso negativos por exceso de confianza."
    ],
    inc: [
      "Sobre la autoeficacia|Es una expectativa generalizada, como el locus|Influye en el esfuerzo y la persistencia|Varía en magnitud, fuerza y generalidad|Es específica de una tarea. El locus de control, en cambio, es una expectativa generalizada."
    ],
    seq: [
      "Fuentes de la autoeficacia, de más a menos potente|Logros de ejecución>Experiencia vicaria>Persuasión verbal>Estados fisiológicos y emocionales"
    ],
    cls: [
      "Tipo de expectativa|De eficacia: capacidad de ejecutar; específica de una tarea|De resultado: la conducta produce el resultado|Locus de control: generalizada; refuerzos que dependen o no de uno"
    ] },
  { t: "Explicar la conducta: Heider, Jones y Davis, Kelley",
    tip: "Las atribuciones son explicaciones causales que se hacen después de que algo ocurra. Heider (1958) distinguió fuerzas personales (capacidad y motivación, con intención y esfuerzo) y ambientales (dificultad de la tarea y suerte). Jones y Davis (1965) explicaron cuándo se hace una inferencia correspondiente: conducta libre, de efectos poco comunes y poco deseable socialmente. Kelley (1967) combinó consenso, distintividad y consistencia, y propuso los principios de descuento y aumento para una sola observación.",
    v: [
      "Psicología ingenua=Para Heider, actuar como científicos aficionados que buscan causas",
      "Fuerzas personales=Capacidad y motivación, que incluye intención y esfuerzo",
      "Fuerzas ambientales=Dificultad de la tarea, estable, y suerte, variable",
      "Inferencia correspondiente=Concluir que una conducta refleja una disposición estable de quien la hace",
      "Consenso=Si los demás reaccionan igual ante el mismo estímulo",
      "Distintividad=Si la persona reacciona así solo ante este estímulo",
      "Principio de aumento=Una causa gana peso si el efecto ocurrió pese a un factor contrario",
      "Error fundamental de atribución=Sobrestimar las causas personales de la conducta ajena"
    ],
    g: [
      "Según Heider, la capacidad frente a la dificultad determina si alguien ___ hacer algo.|puede|intenta|quiere",
      "Si hay varias causas posibles, cada una pierde peso según el principio de ___.|descuento|aumento|covariación",
      "Explicar lo propio por la situación y lo ajeno por la persona es el sesgo ___.|actor-observador|autosirviente|de benevolencia",
      "Atribuirse los éxitos y externalizar los fracasos es el sesgo ___.|autosirviente|actor-observador|de consenso",
      "Una inferencia correspondiente es más probable si la conducta es poco ___ socialmente.|deseable|conocida|visible"
    ],
    tf: [
      "Según Kelley, consenso alto, distintividad alta y consistencia alta llevan a atribuir la causa al estímulo.|V",
      "Según Kelley, con consistencia baja la explicación apunta a la persona.|F|Con consistencia baja apunta a las circunstancias. A la persona llevan consenso bajo, distintividad baja y consistencia alta.",
      "Si un camarero es amable con los clientes, inferimos con seguridad que es amable por carácter.|F|Es lo esperado: una conducta socialmente deseable dice poco de la disposición de quien la realiza.",
      "Para Heider, cuanto más pesa el entorno en un resultado, menos responsabilidad se atribuye a la persona.|V"
    ],
    q: [
      "Casi nadie se ríe con un humorista, pero Lucía se ríe con todos los humoristas y siempre con este. Según Kelley, ¿dónde está la causa?|En Lucía|En el humorista|En las circunstancias|Consenso bajo, distintividad baja y consistencia alta llevan a atribuir la causa a la persona: Lucía se ríe con facilidad.",
      "Una opositora aprueba pese a haber estado enferma durante la preparación. ¿Qué principio lleva a dar más peso a su capacidad?|El de aumento|El de descuento|El de consenso|Según el principio de aumento, una causa gana peso si el efecto se produjo pese a un factor que lo dificultaba.",
      "Un camarero es borde con los clientes sabiendo que puede perder la propina. ¿Por qué inferimos algo de su carácter?|La conducta es poco deseable|La conducta es muy frecuente|La conducta es poco libre|Según Jones y Davis, la inferencia correspondiente es más probable si la conducta es libre y poco deseable socialmente.",
      "En la psicología ingenua de Heider, ¿qué dos elementos incluye la motivación?|Intención y esfuerzo|Capacidad y suerte|Dificultad y esfuerzo|La motivación incluye la intención, hacia dónde se dirige la acción, y el esfuerzo, cuánto se empeña uno."
    ],
    inc: [
      "Sobre los sesgos atribucionales|El error fundamental sobrestima las causas situacionales|El sesgo autosirviente externaliza los fracasos|El estilo atribucional es una diferencia individual|El error fundamental de atribución sobrestima las causas personales, no las situacionales, de la conducta ajena."
    ],
    seq: [],
    cls: [
      "Fuerza según Heider|Personales: capacidad; intención; esfuerzo|Ambientales: dificultad de la tarea; suerte"
    ] },
  { t: "Weiner: dimensiones causales y emociones",
    tip: "Weiner (1979, 1985) organizó las cuatro causas de Heider en tres dimensiones: locus, estabilidad y controlabilidad. Cada una tiene su consecuencia: el locus afecta a la autoestima, con orgullo o vergüenza, la estabilidad a las expectativas de futuro y la controlabilidad a las emociones sociales, como culpa, ira o compasión. Atribuir un fracaso a la falta de capacidad es lo más desmotivador, y el reentrenamiento atribucional enseña a usar causas inestables y controlables.",
    v: [
      "Locus de causalidad=Si la causa de un resultado está en la persona o fuera de ella",
      "Estabilidad=Si la causa se mantiene en el tiempo o fluctúa",
      "Controlabilidad=Si la persona puede modificar la causa a voluntad",
      "Orgullo=Emoción ante un éxito atribuido a causas internas",
      "Vergüenza=Emoción ante un fracaso atribuido a causas internas",
      "Culpa=Emoción ante un fracaso propio por una causa controlable",
      "Compasión=Emoción ante el fracaso ajeno por una causa incontrolable",
      "Reentrenamiento atribucional=Enseñar a explicar los fracasos por causas inestables y controlables"
    ],
    g: [
      "La dimensión de Weiner que mueve las expectativas de futuro es la ___.|estabilidad|controlabilidad|internalidad",
      "En la tabla de Weiner, la dificultad de la tarea es externa, estable e ___.|incontrolable|inestable|interna",
      "El esfuerzo es una causa interna, inestable y ___.|controlable|incontrolable|externa",
      "Si creemos que alguien fracasó por algo que podía controlar, sentimos ___.|ira|compasión|culpa",
      "En la reformulación de la indefensión se añadió a las dimensiones de Weiner la ___.|globalidad|especificidad|intensidad"
    ],
    tf: [
      "Según Weiner, el locus de causalidad determina sobre todo las expectativas de futuro.|F|Es la estabilidad la que mueve las expectativas. El locus mueve la autoestima.",
      "La suerte es una causa externa, inestable e incontrolable.|V",
      "La capacidad se clasifica como interna, estable y controlable.|F|La capacidad es interna, estable e incontrolable. La causa interna y controlable es el esfuerzo.",
      "Para Weiner, las consecuencias de una atribución dependen de la posición de la causa en las dimensiones, no de la causa concreta.|V"
    ],
    q: [
      "Un profesor cree que un alumno suspendió porque tuvo un problema de salud. Según Weiner, ¿qué sentirá con más probabilidad?|Compasión|Enfado|Vergüenza|Si la causa del fracaso ajeno es incontrolable, se siente compasión y se tiende a ofrecer ayuda.",
      "Un alumno atribuye su suspenso a la falta de capacidad. ¿Por qué es la atribución más desmotivadora?|Es interna, estable e incontrolable|Es externa, inestable y controlable|Es interna, inestable y controlable|Baja la autoestima, reduce la expectativa de aprobar y no deja nada que cambiar.",
      "Una alumna suspende por no haber estudiado y espera aprobar la próxima vez. ¿Qué dimensión explica esa expectativa?|La estabilidad|El locus|La controlabilidad|No estudiar es una causa inestable, y la estabilidad es la dimensión que mueve las expectativas de futuro.",
      "¿Qué dimensión de Weiner afecta sobre todo a la autoestima?|El locus|La estabilidad|La controlabilidad|Un éxito atribuido a causas internas produce orgullo, y un fracaso interno, vergüenza o pérdida de autoestima."
    ],
    inc: [
      "Sobre el modelo de Weiner|El esfuerzo es una causa interna y estable|La suerte es una causa externa e inestable|La capacidad es una causa interna y estable|El esfuerzo es interno, inestable y controlable. La causa interna y estable es la capacidad."
    ],
    seq: [],
    cls: [
      "Dimensión de Weiner y su consecuencia|Locus: autoestima; orgullo; vergüenza|Estabilidad: expectativas de futuro|Controlabilidad: culpa; ira; compasión"
    ] }
] }
);

// SAIMAP Psicología · Personalidad II · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Cuando se pierde el control", cap: 3, pir: "alta", mods: [
  { t: "Reactancia: resistirse a perder libertad",
    tip: "La reactancia (Brehm, 1966) es un estado motivacional que aparece cuando se siente amenazada o eliminada una libertad que se creía tener, y que impulsa a restaurarla. Su intensidad depende de la expectativa de libertad, su importancia, la magnitud de la amenaza, la implicación de otras libertades y la legitimidad de quien restringe. Se manifiesta en más atractivo de lo prohibido y en restauración directa, como el efecto bumerán, o indirecta.",
    v: [
      "Reactancia=Estado motivacional que impulsa a restaurar una libertad amenazada o eliminada",
      "Expectativa de libertad=Solo se reacciona ante la pérdida de algo que se creía poder elegir",
      "Efecto bumerán=Un mensaje que presiona demasiado produce el cambio contrario al buscado",
      "Restauración directa=Hacer precisamente lo que se prohíbe",
      "Restauración indirecta=Recuperar la sensación de libertad por otra vía, como saltarse otra norma menor",
      "Amenaza vicaria=Ver que a alguien parecido le quitan una libertad hace sentir amenazada la propia",
      "Implicación de otras libertades=Temor a que ceder en algo lleve a perder más cosas",
      "Reactancia como rasgo=Diferencia individual asociada sobre todo con baja amabilidad"
    ],
    g: [
      "La reactancia es máxima cuando la libertad se ___ por completo.|elimina|limita|cuestiona",
      "Una nevada que cierra la carretera es una amenaza procedente de condiciones ___.|impersonales|personales|vicarias",
      "Tras elegir un piso y renunciar a los demás, la amenaza a la libertad procede de ___.|uno mismo|otra persona|la situación",
      "La legitimidad de quien impone la restricción a veces calma la reacción y a veces la ___.|aviva|anula|retrasa",
      "Como rasgo, la reactancia se asocia sobre todo con una baja ___ en los Cinco Grandes.|amabilidad|responsabilidad|apertura"
    ],
    tf: [
      "Las personas con locus de control externo muestran más reactancia que las internas.|F|Es al revés: las internas reaccionan más, porque perciben más como una pérdida que se les impida controlar.",
      "A quien nunca ha elegido su horario le molesta menos que se lo impongan.|V",
      "La legitimidad de quien impone la restricción siempre reduce la reactancia.|F|No actúa siempre en el mismo sentido: a veces calma la reacción y a veces la aviva.",
      "La reactancia puede aumentar cuando la misma restricción vuelve una y otra vez.|V"
    ],
    q: [
      "Unos padres prohíben de forma tajante a su hijo adolescente ver a un amigo, y él empieza a valorar más esa amistad. ¿Qué manifestación de la reactancia muestra?|Aumento del atractivo de lo prohibido|Restauración indirecta de la libertad|Efecto bumerán de un mensaje persuasivo|Valorar más lo prohibido es una respuesta subjetiva. Buscar más ocasiones de verle sería ya restauración directa.",
      "A un empleado le prohíben usar el móvil en las reuniones y empieza a saltarse otra norma menor de la oficina. ¿Qué respuesta muestra?|Restauración indirecta|Restauración directa|Amenaza vicaria|Recupera la sensación de libertad por otra vía. Usar el móvil en la reunión, lo prohibido, sería restauración directa.",
      "¿Cuál de estos factores es un determinante de la intensidad de la reactancia?|La importancia de la libertad amenazada|La frecuencia con que se ejerce la libertad|El número de personas que la comparten|Los determinantes son expectativa de libertad, importancia, magnitud de la amenaza, implicación de otras libertades y legitimidad.",
      "¿Qué predice la teoría de la reactancia ante una pérdida de control?|Un aumento de la actividad|Una reducción de la actividad|Ningún cambio en la actividad|La reactancia predice más esfuerzo por restaurar la libertad. La indefensión predice lo contrario, la pasividad."
    ],
    inc: [
      "Sobre la reactancia|Solo aparece si la amenaza procede de otra persona|Puede surgir al ver que restringen la libertad de alguien parecido|Puede originarse al elegir una opción y renunciar a otras|La amenaza puede venir de otra persona, de condiciones impersonales o de uno mismo, y también puede ser vicaria."
    ],
    seq: [],
    cls: [
      "Manifestación de la reactancia|Respuesta subjetiva: atractivo de lo prohibido; hostilidad hacia quien amenaza|Restauración directa: hacer lo prohibido; efecto bumerán|Restauración indirecta: saltarse otra norma menor; mostrar que podría hacer lo prohibido"
    ] },
  { t: "Aprender a no actuar: medio siglo de indefensión",
    tip: "Seligman y Maier (1967) y Overmier y Seligman (1967) usaron con perros un diseño triádico: solo el grupo acoplado, con las mismas descargas que el escapable pero sin control, quedaba pasivo en la caja lanzadera. La reformulación de 1978 añadió las atribuciones: la interna explica la pérdida de autoestima, la estable, la cronicidad, y la global, la generalización. Maier y Seligman (2016) invirtieron la explicación: la pasividad es la respuesta por defecto y lo que se aprende es el control.",
    v: [
      "Diseño triádico=Grupos escapable, acoplado y sin descarga para aislar el efecto de la falta de control",
      "Grupo acoplado=Recibe las mismas descargas que el escapable, pero sin poder cortarlas",
      "Caja lanzadera=Dispositivo de prueba en el que basta saltar una barrera para escapar",
      "Déficit motivacional=El animal no inicia respuestas",
      "Déficit cognitivo=Cuesta aprender que una respuesta sí funciona",
      "Indefensión personal=El resultado no depende de mí, aunque sí de otros",
      "Desesperanza=Expectativa de que lo deseado no ocurrirá y no se puede hacer nada",
      "Núcleo dorsal del rafe=Su activación serotoninérgica media la pasividad por defecto ante el estrés"
    ],
    g: [
      "Hiroto (1974) obtuvo efectos parecidos en humanos con ___ incontrolable.|ruido|descargas|calor",
      "En la reformulación de 1978, una atribución ___ explica la cronicidad de los déficits.|estable|global|interna",
      "Solo la indefensión ___ daña la autoestima.|personal|universal|vicaria",
      "La teoría de la desesperanza (Abramson, Metalsky y Alloy, 1989) sigue un modelo de ___.|diátesis-estrés|aprendizaje vicario|doble proceso",
      "Según Maier y Seligman (2016), la corteza prefrontal ___ detecta que una respuesta funciona e inhibe el rafe.|ventromedial|dorsolateral|orbitofrontal"
    ],
    tf: [
      "En el diseño triádico, el grupo acoplado recibía descargas más intensas que el escapable.|F|Recibía exactamente las mismas descargas. Lo que marcaba la diferencia era la falta de control, no el dolor.",
      "En la teoría de la desesperanza, la estabilidad y la globalidad han recibido más apoyo que la internalidad.|V",
      "Según la revisión de 2016, lo que aprende el grupo acoplado es la pasividad.|F|La pasividad es la respuesta por defecto ante el estrés prolongado. Lo que se aprende es el control.",
      "Según Maier y Seligman (2016), la experiencia de control protege frente a situaciones incontrolables posteriores.|V"
    ],
    q: [
      "Tras suspender Estadística, un estudiante concluye que le irá igual de mal en todas las asignaturas. Según la reformulación de 1978, ¿qué predice sobre todo esta atribución?|Generalización a otras situaciones|Cronicidad de los déficits en el tiempo|Pérdida de la propia autoestima|Una causa global («me pasa en todo») lleva a generalizar. La estabilidad explica la cronicidad, y la internalidad, la autoestima.",
      "En el diseño triádico, ¿qué grupos aprendían enseguida a escapar en la caja lanzadera?|El escapable y el que no recibió descargas|El acoplado y el que no recibió descargas|Solo el que había podido cortar las descargas|Solo el grupo acoplado, sin control sobre las mismas descargas, se quedaba quieto y las soportaba.",
      "¿Qué distingue la indefensión personal de la universal?|Si el resultado depende de otros|Si la causa es estable o inestable|Si afecta a una o a varias áreas|En la personal el resultado no depende de mí, pero sí de otros. En la universal no depende de nadie.",
      "¿Qué déficit de la indefensión consiste en que cuesta aprender que una respuesta sí funciona?|Cognitivo|Motivacional|Emocional|El motivacional es no iniciar respuestas, y el emocional, miedo, ansiedad y estado depresivo."
    ],
    inc: [
      "Sobre la revisión de Maier y Seligman (2016)|La pasividad se aprende al comprobar que nada funciona|La corteza prefrontal ventromedial detecta el control|La pasividad la media el núcleo dorsal del rafe|Esa es la explicación de 1967. Según la revisión, la pasividad es la respuesta por defecto y lo que se aprende es el control."
    ],
    seq: [
      "Evolución de la teoría de la indefensión|Seligman y Maier (1967)>Abramson, Seligman y Teasdale (1978)>Abramson, Metalsky y Alloy (1989)>Maier y Seligman (2016)"
    ],
    cls: [
      "Atribución depresógena|Interna: «es culpa mía»; pérdida de autoestima|Estable: «siempre será así»; cronicidad de los déficits|Global: «me pasa en todo»; generalización a otras situaciones"
    ] },
  { t: "Primero resistir, luego rendirse: Wortman y Brehm",
    tip: "Wortman y Brehm (1975) integraron reactancia e indefensión como dos fases de un mismo proceso. Con poca experiencia de incontrolabilidad, quien esperaba tener control redobla el esfuerzo (reactancia). Si los fracasos se acumulan, aparece la indefensión. La importancia del resultado amplifica ambas fases, y sin expectativa previa de control se puede pasar directamente a la pasividad.",
    v: [
      "Modelo integrador=Propuesta de 1975 que une reactancia e indefensión en un mismo proceso",
      "Fase de reactancia=Pocos fracasos en quien esperaba control llevan a redoblar el esfuerzo",
      "Fase de indefensión=Tras muchos fracasos, la lucha se apaga y aparece la pasividad",
      "Experiencia de incontrolabilidad=Variable decisiva que determina en qué fase se encuentra la persona",
      "Importancia del resultado=Variable que amplifica la reacción inicial y la caída posterior",
      "Expectativa previa de control=Condición para que aparezca la fase de lucha inicial",
      "Mikulincer (1988)=Halló más reactancia y más indefensión en personas con locus interno",
      "Línea base=Nivel de motivación por debajo del cual se cae en la indefensión"
    ],
    g: [
      "La variable decisiva del modelo es la ___ de experiencia de incontrolabilidad.|cantidad|calidad|intensidad",
      "Cuanto más importa el resultado, mayor es la reacción inicial y más ___ la caída posterior.|profunda|breve|tardía",
      "Quien nunca esperó controlar la situación puede pasar directamente a la ___.|pasividad|reactancia|hostilidad",
      "Según Mikulincer (1988), las personas con locus ___ muestran más reactancia y más indefensión.|interno|externo|mixto",
      "Para Wortman y Brehm, reactancia e indefensión no son teorías rivales, sino dos ___ de un mismo proceso.|fases|causas|versiones"
    ],
    tf: [
      "En el modelo de Wortman y Brehm, la importancia del resultado decide si aparece reactancia o indefensión.|F|Eso lo decide la cantidad de experiencia de incontrolabilidad. La importancia amplifica ambas fases.",
      "Las personas con locus externo sufren más indefensión que las internas, porque ya creen que su vida depende de otros.|F|Mikulincer (1988) halló más reactancia y también más indefensión en las personas con locus interno.",
      "Tanto la reactancia como la indefensión tienen apoyo experimental.|V",
      "El modelo sugiere ofrecer experiencias reales de control antes de que la falta de control se prolongue.|V"
    ],
    q: [
      "Una persona en paro rehace su currículo y amplía la búsqueda tras unas semanas sin respuesta. Meses después deja de buscar y se siente sin salida. ¿Qué describe esta secuencia?|Reactancia seguida de indefensión|Indefensión seguida de reactancia|Desesperanza seguida de reactancia|Pocas experiencias sin control aumentan el esfuerzo. Si se prolongan, aparecen la pasividad y la sensación de no tener salida.",
      "Un parado busca un empleo que le importa poco. Según Wortman y Brehm, frente a quien busca un empleo muy deseado…|ambas reacciones serán más débiles|solo desaparecerá la reactancia|la indefensión llegará antes|La importancia del resultado amplifica las dos fases, así que con poca importancia ambas reacciones son más débiles.",
      "¿Qué condición es necesaria para que aparezca la fase de reactancia?|Una expectativa previa de control|Una atribución interna del fracaso|Un resultado de poca importancia|Sin expectativa previa de control, la persona puede pasar directamente a la pasividad.",
      "¿Por qué es coherente con el modelo el hallazgo de Mikulincer (1988)?|Quien espera controlar reacciona y cae más|Quien espera controlar evita la indefensión|Quien no espera controlar reacciona más|Las personas internas reaccionan con más fuerza al principio y sufren más cuando aceptan que no pueden controlar."
    ],
    inc: [
      "Sobre el modelo de Wortman y Brehm|Muchos fracasos sin control aumentan la reactancia|Pocas experiencias sin control producen reactancia|La importancia del resultado amplifica ambas fases|Muchas experiencias de incontrolabilidad producen indefensión. La reactancia aparece con pocas."
    ],
    seq: [
      "Modelo de Wortman y Brehm|Expectativa de control>Primeros fracasos>Reactancia>Fracasos acumulados>Indefensión"
    ],
    cls: [
      "Fase del modelo de Wortman y Brehm|Reactancia: pocos fracasos; más esfuerzo; sentir que arrebatan algo propio|Indefensión: fracasos acumulados; pasividad; concluir que nada cambiará"
    ] },
  { t: "Optimismo, ilusiones y formas de control",
    tip: "El optimismo disposicional (Scheier y Carver, 1985) es una expectativa generalizada de resultados positivos y se mide con el LOT-R. El estilo explicativo, en cambio, mira a las causas de lo ya ocurrido. Taylor y Brown (1988) defendieron las ilusiones positivas, que Colvin y Block (1994) discutieron. Rothbaum, Weisz y Snyder (1982) distinguieron el control primario del secundario, que no equivale a carecer de control.",
    v: [
      "Optimismo disposicional=Expectativa generalizada de resultados positivos (Scheier y Carver, 1985)",
      "LOT-R=Escala de 10 ítems, de los que 6 puntúan y 4 son de relleno",
      "Estilo explicativo pesimista=Explica los sucesos negativos por causas internas, estables y globales",
      "CAVE=Técnica que analiza las explicaciones causales en textos escritos o hablados",
      "Ilusión de control=Creencia de que se influye en resultados que dependen del azar",
      "Control primario=Cambiar el mundo para ajustarlo a uno",
      "Control secundario=Ajustarse uno mismo a la realidad",
      "Sentido de coherencia=Constructo de Antonovsky con comprensibilidad, manejabilidad y significatividad"
    ],
    g: [
      "El efecto del optimismo sobre la salud física es pequeño, en torno a ___ (Rasmussen et al., 2009).|,15|,35|,51",
      "En el metaanálisis de Rozanski et al. (2019), los más optimistas tenían alrededor de un ___ menos de riesgo cardiovascular.|35 %|15 %|50 %",
      "En el estudio de Langer (1975), quienes ___ su billete de lotería pedían más dinero por venderlo.|elegían|recibían|perdían",
      "El control secundario ___ consiste en aliarse con otros poderosos.|vicario|predictivo|ilusorio",
      "La personalidad resistente de Kobasa (1979) incluye compromiso, control y ___.|reto|manejabilidad|coherencia"
    ],
    tf: [
      "Optimismo disposicional y estilo explicativo son dos nombres del mismo constructo.|F|El primero mira a los resultados futuros, y el segundo, a las causas de lo ya ocurrido.",
      "Aceptar un diagnóstico grave y darle sentido equivale a carecer de control.|F|Es control secundario interpretativo: quien da sentido a lo ocurrido también se adapta activamente.",
      "Retirar el control concedido al acabar el estudio empeoraba la situación de los residentes (Schulz y Hanusa, 1978).|V",
      "El estilo explicativo optimista explica los sucesos negativos por causas externas, inestables y específicas.|V"
    ],
    q: [
      "En una residencia, a un grupo de ancianos se le da responsabilidad sobre una planta y sobre decisiones cotidianas. ¿Qué cautela exige el llamativo resultado de mortalidad?|Viene de un solo centro y muestras pequeñas|Se midió solo a los tres meses del inicio|No incluyó ningún grupo de comparación|A los 18 meses había fallecido en torno al 15 % frente al 30 %, pero en un solo centro y con muestras pequeñas.",
      "¿Qué defendieron Taylor y Brown (1988)?|Que la salud mental se apoya en ilusiones moderadas|Que la salud mental exige percibir con exactitud|Que una autoimagen inflada es costosa a largo plazo|La tercera es la postura de Colvin y Block (1994). El debate sigue abierto.",
      "Según el metaanálisis de Moore y Fresco (2012), ¿qué ocurre con el llamado realismo depresivo?|Su efecto global es diminuto|Su efecto global es moderado|Solo aparece en universitarios|Hallaron un efecto en torno a d de −0,07. Dev et al. (2022) tampoco hallaron relación con el control ilusorio.",
      "¿Con qué instrumentos se mide el estilo explicativo?|El ASQ y la técnica CAVE|El LOT-R y la técnica CAVE|El ASQ y la escala LOT-R|El LOT-R mide el optimismo disposicional. El estilo explicativo se mide con el ASQ o analizando textos con la técnica CAVE."
    ],
    inc: [
      "Sobre las formas de control|El control secundario es ausencia de control|El control primario cambia el mundo para ajustarlo a uno|Anticipar lo que pasará es control secundario predictivo|El control secundario consiste en ajustarse uno al mundo. Es una forma activa de adaptación, no falta de control."
    ],
    seq: [],
    cls: [
      "Constructo|Personalidad resistente (Kobasa): compromiso; control; reto|Sentido de coherencia (Antonovsky): comprensibilidad; manejabilidad; significatividad"
    ] }
] },
{ n: 10, t: "El self: contenido y estructura", cap: 4, pir: "alta", mods: [
  { t: "Los clásicos: James, Cooley, Mead y Rogers",
    tip: "El self es a la vez objeto, lo que uno sabe y siente de sí, y sujeto, el proceso que da unidad a la experiencia. James (1890) separó el yo conocedor del yo conocido, con sus componentes material, social y espiritual, y definió la autoestima como el cociente entre éxitos y pretensiones. Cooley (1902) acuñó el yo espejo, y Mead (1934), el otro generalizado. Rogers situó el malestar en la incongruencia y en la distancia entre el yo real y el ideal.",
    v: [
      "Yo conocedor=Sujeto que conoce, el «I» de James",
      "Yo conocido=Todo lo que una persona puede considerar suyo, el «me» de James",
      "Yo material=Cuerpo, ropa, familia, casa y posesiones",
      "Yo social=Imagen que se cree tener ante cada grupo cuya opinión importa",
      "Yo espiritual=Capacidades, valores, disposiciones y vida interior",
      "Yo espejo=Vernos según cómo imaginamos que nos ven y nos juzgan los demás (Cooley)",
      "Otro generalizado=Expectativas y normas interiorizadas de la comunidad en conjunto (Mead)",
      "Incongruencia=Desajuste entre autoconcepto y experiencia, fuente de malestar para Rogers"
    ],
    g: [
      "Para James, la autoestima es el cociente entre los éxitos y las ___.|pretensiones|capacidades|expectativas",
      "Según James, tenemos tantos yoes ___ como grupos cuya opinión nos importa.|sociales|materiales|espirituales",
      "Mead fue una figura central del ___ simbólico.|interaccionismo|conductismo|funcionalismo",
      "Con el ___, el self perdió protagonismo durante décadas por ser difícil de observar.|conductismo|psicoanálisis|cognitivismo",
      "A partir de los años ___, con la psicología cognitiva, el self volvió a la investigación.|setenta|cincuenta|noventa"
    ],
    tf: [
      "El yo espejo es una aportación de Mead dentro del interaccionismo simbólico.|F|Es de Cooley (1902). Lo propio de Mead es el otro generalizado.",
      "Según la fórmula de James, la autoestima puede subir logrando más o aspirando a menos.|V",
      "El otro generalizado de Mead son las expectativas de una persona concreta muy significativa para el niño.|F|Son las expectativas y normas de la comunidad en conjunto, no las de una persona concreta.",
      "Para Rogers, el malestar aparece cuando hay incongruencia entre el autoconcepto y la experiencia.|V"
    ],
    q: [
      "Un adolescente cree que sus amigos lo consideran gracioso y acaba viéndose a sí mismo como gracioso. ¿Qué concepto ilustra?|El yo espejo de Cooley|El otro generalizado de Mead|El yo social de James|Nos vemos a través de cómo imaginamos que nos ven y nos juzgan los demás. Atribuirlo a Mead es la trampa típica.",
      "Alguien que no pretende tocar bien la guitarra no se siente peor por tocarla mal. ¿Qué lo explica según James?|La autoestima depende de las pretensiones|El yo material no incluye las aficiones|La autoestima depende del yo espejo|La autoestima es el cociente entre éxitos y pretensiones. Sin pretensión en ese ámbito, el fracaso no la reduce.",
      "¿Qué distinción introdujo James en el estudio del self?|Yo conocedor y yo conocido|Yo real y yo ideal|Yo independiente e interdependiente|El yo conocedor («I») es el sujeto, y el yo conocido («me»), todo lo que la persona puede considerar suyo.",
      "¿A qué componente del yo conocido de James pertenecen los valores y la vida interior?|Yo espiritual|Yo social|Yo material|El yo material incluye cuerpo, posesiones y familia, y el social, la imagen ante los demás."
    ],
    inc: [
      "Sobre los clásicos del self|Mead acuñó la idea del yo espejo|James distinguió el yo material, el social y el espiritual|Rogers definió el self ideal como lo que uno querría ser|El yo espejo es de Cooley (1902). Mead aportó el otro generalizado."
    ],
    seq: [
      "Historia del estudio del self|James (1890)>Cooley (1902)>Mead (1934)>Recuperación con Allport y Rogers>Estructura de conocimiento (años setenta)"
    ],
    cls: [
      "Componente del yo conocido de James|Yo material: cuerpo; ropa; posesiones|Yo social: imagen ante los demás; un yo por cada grupo relevante|Yo espiritual: capacidades; valores; vida interior"
    ] },
  { t: "Autoesquemas y yoes posibles",
    tip: "Para Markus (1977), el self está formado por autoesquemas, generalizaciones sobre uno mismo que organizan el procesamiento. Frente a los aesquemáticos, los esquemáticos juzgan más rápido, recuerdan más ejemplos, predicen mejor su conducta y se resisten a la información contraria. Los yoes posibles (Markus y Nurius, 1986) pueden ser esperados, deseados o temidos, y no equivalen al self ideal de Rogers.",
    v: [
      "Autoesquema=Generalización cognitiva sobre uno mismo que organiza el procesamiento",
      "Persona esquemática=Considera importante una dimensión y se describe claramente en un extremo",
      "Persona aesquemática=La dimensión no forma parte de cómo se ve",
      "Self operativo=Parte del autoconcepto accesible en cada momento según la situación",
      "Yoes posibles=Representaciones de lo que uno podría llegar a ser",
      "Yo temido=Lo que da miedo llegar a ser, como quedarse sin trabajo",
      "Representaciones periféricas=Aspectos del self menos elaborados y más situacionales",
      "Self interdependiente=Definido por relaciones y papeles, como «soy la hermana mayor»"
    ],
    g: [
      "En sus estudios, Markus usó la dimensión ___.|independencia-dependencia|extraversión-introversión|estabilidad-neuroticismo",
      "Los esquemáticos se ___ a la información que contradice el esquema.|resisten|adaptan|abren",
      "Sentirse sobre todo «madre» en la reunión del colegio y «ingeniera» en la oficina ilustra el self ___.|operativo|ideal|periférico",
      "Los yoes posibles cambian con ___ facilidad que el yo actual cuando llega información nueva.|más|menos|la misma",
      "Oyserman et al. (2002) hallaron diferencias entre países en individualismo y colectivismo ___.|pequeñas e inconsistentes|grandes y consistentes|moderadas y estables"
    ],
    tf: [
      "Los yoes posibles de Markus y Nurius equivalen al self ideal de Rogers.|F|Incluyen también los yoes temidos, que no tienen nada de ideal.",
      "Los autoesquemas son estables, pero pueden cambiar si la experiencia contraria persiste.|V",
      "Frente a los aesquemáticos, los esquemáticos aceptan con más facilidad la información que contradice su esquema.|F|Se resisten a ella. Además juzgan más rápido, recuerdan más ejemplos y predicen mejor su conducta.",
      "Un 6 se vive distinto si el yo deseado es «sacar plaza» o «aprobar», por la función evaluativa de los yoes posibles.|V"
    ],
    q: [
      "Una opositora estudia más porque le asusta la idea de «suspender la oposición». ¿Qué tipo de yo posible y qué función intervienen?|Un yo temido con función motivacional|Un yo deseado con función evaluativa|Un yo esperado con función motivacional|El yo temido orienta la conducta actual a evitar ese futuro, que es la función motivacional.",
      "Frente a una persona aesquemática, ¿qué hace una persona esquemática en independencia?|Recuerda más conductas propias que lo confirman|Juzga más despacio los adjetivos de esa dimensión|Acepta mejor la información que contradice el esquema|Los esquemáticos recuerdan más ejemplos, juzgan más rápido y se resisten a la información contraria.",
      "¿Por qué los yoes posibles cambian con más facilidad que el yo actual?|Apenas se basan en experiencias reales|Son representaciones periféricas del self|Dependen solo de la opinión de otros|Se refieren a algo que aún no ha ocurrido, así que tienen poca base en la experiencia y la información nueva los modifica.",
      "Según Markus y Kitayama (1991), ¿qué descripción corresponde a un self independiente?|«Soy creativo»|«Soy la hermana mayor»|«Soy de mi pueblo»|El self independiente se define por atributos internos y únicos, y el interdependiente, por relaciones y papeles."
    ],
    inc: [
      "Sobre los yoes posibles|Solo incluyen lo que uno desea llegar a ser|Pueden ser esperados, deseados o temidos|Ofrecen un patrón para juzgar lo que se hace ahora|También incluyen los yoes esperados y los temidos, por eso no equivalen al self ideal de Rogers."
    ],
    seq: [],
    cls: [
      "Tipo de yo posible|Esperado: «seguramente acabaré la carrera»; «trabajaré en un hospital»|Deseado: «me encantaría tener mi propia consulta»; «ojalá saque plaza»|Temido: «me da miedo quedarme sin trabajo»; «suspender la oposición»"
    ] },
  { t: "Autocomplejidad y organización evaluativa",
    tip: "Para Linville, la autocomplejidad combina el número de aspectos del self y su grado de diferenciación: un self complejo tiene muchos aspectos poco solapados, y su contenido y valoración no cuentan. Su hipótesis del amortiguador apenas tiene apoyo (Rafaeli-Mor y Steinberg, 2002). Showers (1992) añadió la valoración y distinguió compartimentalización e integración. La más favorable depende de si los aspectos importantes son positivos o negativos.",
    v: [
      "Autocomplejidad=Número de aspectos del self y grado de diferenciación entre ellos",
      "Diferenciación=Grado en que los atributos de cada aspecto no se solapan con los de otros",
      "Hipótesis del amortiguador=Un golpe en un aspecto poco conectado se propaga menos a los demás",
      "Cesta cognitiva=Imagen de Linville sobre no poner todos los huevos en el mismo sitio",
      "Compartimentalización=Cada aspecto contiene solo atributos positivos o solo negativos",
      "Integración=Cada aspecto mezcla atributos positivos y negativos",
      "Rafaeli-Mor y Steinberg (2002)=Metaanálisis que halló un efecto amortiguador débil o nulo",
      "Aspectos del self=Facetas ligadas a papeles, relaciones o actividades"
    ],
    g: [
      "Para calcular la autocomplejidad no cuentan ni el contenido ni la ___ de los aspectos.|valoración|cantidad|diferenciación",
      "Según Linville, las personas con ___ autocomplejidad mostrarían cambios emocionales más intensos tras los acontecimientos vitales.|baja|alta|media",
      "El metaanálisis de 2002 halló, si acaso, una ligera relación ___ entre autocomplejidad y bienestar.|negativa|positiva|curvilínea",
      "Si los aspectos importantes del self son negativos, la organización más favorable es la ___.|integración|compartimentalización|diferenciación",
      "Para Showers, la diferencia no está en cuántos atributos negativos se tienen, sino en ___ se colocan.|dónde|cuándo|por qué"
    ],
    tf: [
      "Quien tiene muchos aspectos en su self tiene alta autocomplejidad aunque los describa con los mismos adjetivos.|F|Hacen falta dos condiciones: muchos aspectos y, además, poco solapados entre sí.",
      "Según Showers, la compartimentalización es siempre peor que la integración.|F|Depende: favorece si los aspectos importantes son positivos, e integrar conviene cuando son negativos.",
      "Se ha propuesto que la integración protege la estabilidad del bienestar porque una compartimentalización positiva es difícil de mantener.|V",
      "Linville y Showers ven el self como múltiple, pero difieren en qué rasgo de su organización es decisivo.|V"
    ],
    q: [
      "Javier vive su faceta de trabajador como positiva y la de pareja como negativa. Tras una ruptura, la pareja pasa al centro de su vida. Según Showers, ¿qué le favorecería?|Una visión integrada de esa faceta|Mantener la compartimentalización|Aumentar el número de aspectos|Si el aspecto importante es negativo, integrar permite que lo positivo matice lo negativo («discuto mucho, pero soy cariñoso»).",
      "Marta solo se define como deportista y se lesiona. ¿Qué predice la hipótesis del amortiguador de Linville?|Que todo su autoconcepto se tambalee|Que solo se afecte una faceta aislada|Que su autoestima quede protegida|Con un self poco complejo el golpe se propaga a todo. Aun así, la evidencia de este efecto es débil o nula.",
      "¿Qué halló el metaanálisis de Rafaeli-Mor y Steinberg (2002)?|Un efecto amortiguador débil o nulo|Un efecto amortiguador moderado y estable|Un efecto amortiguador solo en mujeres|Además, la autocomplejidad mostró, si acaso, una ligera relación negativa con el bienestar.",
      "¿Qué añadió Showers (1992) a la propuesta de Linville?|La valoración de los atributos|El número de aspectos del self|El solapamiento entre aspectos|Linville se fijó en el número y la diferenciación. Showers añadió si los atributos de cada faceta son positivos o negativos."
    ],
    inc: [
      "Sobre la autocomplejidad|Tener más facetas protege siempre frente al estrés|Exige muchos aspectos y poca superposición entre ellos|No tiene en cuenta la valoración de los aspectos|Es un mito: el efecto amortiguador es débil o nulo, y según Showers importa cómo se reparte lo positivo y lo negativo."
    ],
    seq: [],
    cls: [
      "Organización evaluativa de Showers|Compartimentalización: facetas solo positivas o solo negativas; favorable si lo importante es positivo|Integración: mezcla de atributos positivos y negativos; favorable si lo importante es negativo"
    ] },
  { t: "Autodiscrepancias y claridad del autoconcepto",
    tip: "Higgins (1987) distingue el yo real, el ideal y el debido, desde la perspectiva propia o la de otros significativos. La discrepancia real-ideal, ausencia de resultados positivos, produce abatimiento (tristeza, decepción), y la real-debido, presencia esperada de negativos, agitación (ansiedad, culpa). Su especificidad está en debate (Tangney et al., 1998). Campbell propuso la claridad del autoconcepto, cuya falta se asocia con una autoestima más baja.",
    v: [
      "Yo real=Atributos que uno cree tener",
      "Yo ideal=Atributos que a uno le gustaría tener, sus esperanzas y aspiraciones",
      "Yo debido=Atributos que uno cree que debería tener, sus deberes y obligaciones",
      "Guías del self=Patrones ideal y debido con los que se compara el yo real",
      "Discrepancia real-ideal=Ausencia de resultados positivos que produce abatimiento",
      "Discrepancia real-debido=Temor a la sanción por incumplir, que produce agitación",
      "Perspectiva de otro significativo=Cómo cree una persona importante que uno debería o querría ser",
      "Claridad del autoconcepto=Creencias sobre uno mismo claras, seguras, coherentes y estables"
    ],
    g: [
      "La discrepancia real-ideal se asocia con emociones de ___.|abatimiento|agitación|vergüenza",
      "La discrepancia real-debido se asocia con ansiedad, culpa y ___.|miedo|tristeza|decepción",
      "Higgins sistematizó una idea que ya aparecía en ___.|Rogers|Cooley|Markus",
      "En los datos de Tangney et al. (1998), la separación limpia entre abatimiento y agitación ___ aparece.|apenas|siempre|claramente",
      "En los trabajos de Campbell, la baja claridad del autoconcepto se asocia con una autoestima más ___.|baja|alta|inestable"
    ],
    tf: [
      "La discrepancia entre el yo real y el yo ideal se asocia sobre todo con ansiedad y culpa.|F|Es la trampa típica: real-ideal produce abatimiento (tristeza), y real-debido, agitación (ansiedad, culpa).",
      "No es posible tener un autoconcepto a la vez claro y negativo.|F|Se puede tener un autoconcepto claro y negativo. Aun así, la baja claridad se asocia con menor autoestima.",
      "En la teoría de Higgins, cada dominio del self puede verse desde la perspectiva propia o desde la de otra persona significativa.|V",
      "Que las autodiscrepancias se asocian con malestar emocional tiene amplio apoyo.|V"
    ],
    q: [
      "Lucía no entró en Medicina y lo que más le pesa es haber fallado a lo que su familia esperaba de ella. Según Higgins, ¿qué emoción predominará?|Ansiedad o culpa|Tristeza o decepción|Vergüenza o ira|Es una discrepancia real-debido, que produce agitación. Si le pesara no alcanzar su sueño, sería real-ideal y tristeza.",
      "¿Qué representa la discrepancia real-ideal según Higgins?|Ausencia de resultados positivos|Presencia esperada de sanciones|Conflicto entre dos guías del self|Es no lograr lo que se desea. La real-debido, en cambio, implica esperar resultados negativos por incumplir.",
      "¿Qué aspecto de la teoría de Higgins está en debate?|La especificidad emocional de cada discrepancia|La asociación de las discrepancias con malestar|La existencia de guías ideal y debida|Tangney et al. (1998) hallaron que ambas discrepancias se relacionan con muchas emociones negativas a la vez.",
      "Ante la pregunta «¿eres paciente?», Ana duda, se contradice y cambia de respuesta según el día. ¿Qué tiene baja?|La claridad del autoconcepto|La autocomplejidad|La discrepancia real-ideal|La claridad (Campbell) es el grado en que las creencias sobre uno son claras, seguras, coherentes y estables en el tiempo."
    ],
    inc: [
      "Sobre la teoría de la autodiscrepancia|El yo debido recoge esperanzas y aspiraciones|El yo ideal y el debido funcionan como guías|Las discrepancias presionan para cambiar la conducta|Las esperanzas y aspiraciones definen el yo ideal. El yo debido recoge deberes, obligaciones y responsabilidades."
    ],
    seq: [],
    cls: [
      "Discrepancia de Higgins|Real-ideal: abatimiento; tristeza; decepción; insatisfacción|Real-debido: agitación; ansiedad; culpa; miedo"
    ] }
] },
{ n: 11, t: "El self en acción: autoestima y motivos", cap: 4, pir: "media", mods: [
  { t: "La autoestima: medida, teorías y trayectoria vital",
    tip: "La autoestima es la valoración global, positiva o negativa, que una persona hace de sí misma. Se mide sobre todo con la escala de Rosenberg (1965), de autoestima explícita, y además del nivel importan su contingencia (Crocker) y su estabilidad (Kernis). Para el sociómetro (Leary et al., 1995) indica la aceptación social, y para la gestión del terror amortigua la ansiedad ante la muerte. De media sube hasta los 60-70 años y desciende en la vejez avanzada.",
    v: [
      "Autoestima=Valoración global, positiva o negativa, que una persona hace de sí misma",
      "Escala de Rosenberg=Diez ítems de autoinforme, la mitad en sentido positivo y la mitad en negativo",
      "Autoestima implícita=Valoración automática de uno mismo inferida de tareas de tiempo de reacción",
      "Autoestima contingente=Depende de cumplir condiciones, como sacar buenas notas o recibir aprobación",
      "Estabilidad de la autoestima=Cuánto fluctúa la valoración de uno mismo de un día a otro (Kernis)",
      "Teoría del sociómetro=La valoración de uno mismo indica el grado de aceptación social",
      "Gestión del terror=Teoría en la que sentirse valioso amortigua la ansiedad ante la propia muerte",
      "Saliencia de la mortalidad=Recordar la propia muerte haría defender más la visión del mundo"
    ],
    g: [
      "Una autoestima alta pero ___ se comporta de forma más defensiva que una alta y estable.|inestable|contingente|implícita",
      "La autoestima implícita ___ correlaciona con la explícita.|apenas|fuertemente|moderadamente",
      "El efecto básico de saliencia de la mortalidad no se replicó en ___.|Many Labs 4|Many Labs 1|Many Labs 3",
      "Según Orth, Erol y Luciano (2018), en la adolescencia la autoestima media sufre un ___.|estancamiento|hundimiento|repunte",
      "Según Orth, Erol y Luciano (2018), el máximo de la autoestima media llega hacia los ___ años.|60-70|20-30|40-50"
    ],
    tf: [
      "Una persona puede verse como mala estudiante y tener, aun así, una autoestima global alta.|V",
      "Baumeister et al. (2003) concluyeron que la autoestima alta causa un mejor rendimiento académico y laboral.|F|Vieron beneficios causales escasos: se asocia con bienestar e iniciativa, pero no parece causar mejor rendimiento.",
      "Según Orth, Erol y Luciano (2018), la autoestima media se desploma en la adolescencia.|F|La adolescencia supone un estancamiento, no un desplome. El máximo llega hacia los 60-70 años.",
      "Orth y Robins (2022) encuentran efectos prospectivos pequeños o moderados de la autoestima sobre las relaciones, el trabajo y la salud.|V"
    ],
    q: [
      "Tras no ser invitada a una cena de sus compañeros, Elena nota que su autoestima baja. ¿Qué teoría lo explica mejor?|La del sociómetro|La de la gestión del terror|La de la autoafirmación|Para Leary et al. (1995), la autoestima indica la aceptación social y baja ante señales de rechazo, como un indicador de combustible.",
      "Un estudiante basa su valía en las notas y vive cada examen como un juicio sobre sí mismo. ¿Qué rasgo de su autoestima describe?|Autoestima contingente|Autoestima implícita|Autoestima inestable|Crocker describió la autoestima contingente, que depende de cumplir condiciones como sacar buenas notas o recibir aprobación.",
      "¿Qué ocurre con el apoyo empírico a la teoría de la gestión del terror?|Su efecto básico no se replicó en Many Labs 4|Su efecto se replicó en muchos laboratorios|Solo se ha estudiado con autoestima implícita|La saliencia de la mortalidad no se replicó en Many Labs 4, por lo que la solidez de la teoría está en duda.",
      "¿Qué tipo de medida es la escala de Rosenberg?|Autoinforme de autoestima explícita|Tarea de tiempo de reacción implícita|Registro diario de estabilidad|Son diez ítems de autoinforme sobre la autoestima global. La implícita se infiere de tareas de tiempo de reacción."
    ],
    inc: [
      "Sobre la trayectoria de la autoestima|Alcanza su máximo al final de la adolescencia|Crece durante la adultez hasta la madurez tardía|Desciende de media en la vejez avanzada|El máximo llega hacia los 60-70 años. En la adolescencia, la autoestima media se estanca."
    ],
    seq: [
      "Trayectoria media de la autoestima|Sube en la infancia>Se estanca en la adolescencia>Crece en la adultez>Máximo hacia los 60-70 años>Desciende en la vejez avanzada"
    ],
    cls: [
      "Teoría sobre la función de la autoestima|Sociómetro: Leary et al. (1995); indicador de aceptación social; señales de rechazo|Gestión del terror: Greenberg, Solomon y Pyszczynski; ansiedad ante la muerte; saliencia de la mortalidad"
    ] },
  { t: "Los motivos del self",
    tip: "El self busca información según cuatro motivos: autoensalzamiento (sentirse bien), autoverificación (Swann, confirmar lo que se cree de sí, aunque sea negativo), autoevaluación (Trope, información diagnóstica) y automejora. Sedikides (1993) halló que el autoensalzamiento pesa más que la autoverificación, y esta, más que la autoevaluación. Tesser explicó la reflexión y la comparación según la relevancia del dominio, y Steele (1988), la autoafirmación.",
    v: [
      "Autoensalzamiento=Buscar información que mantenga o eleve la propia valía",
      "Autoverificación=Buscar información que confirme lo que uno cree de sí, aunque sea negativo",
      "Autoevaluación=Buscar información exacta y diagnóstica sobre las propias capacidades",
      "Automejora=Buscar información útil para llegar a ser mejor",
      "Fuego cruzado cognitivo-afectivo=Choque entre preferir el elogio y preferir la confirmación",
      "Reflexión=Orgullo por el éxito de alguien cercano en un dominio no relevante para uno",
      "Comparación=Malestar por el éxito de alguien cercano en un dominio relevante para uno",
      "Autoafirmación=Afirmar un valor importante en otro ámbito para reducir la actitud defensiva"
    ],
    g: [
      "La autoverificación responde a la necesidad de coherencia y de ___ el mundo.|predecir|controlar|mejorar",
      "Trope estudió la preferencia por tareas ___, que informan de verdad sobre la propia capacidad.|diagnósticas|agradables|sencillas",
      "En el estudio de Sedikides (1993), el motivo más fuerte fue ___.|el autoensalzamiento|la autoverificación|la autoevaluación",
      "Según Tesser, para proteger la autoestima se puede cambiar la cercanía, la relevancia o el propio ___.|rendimiento|carácter|origen",
      "La autoafirmación fue propuesta por ___ (1988).|Steele|Tesser|Swann"
    ],
    tf: [
      "La autoverificación lleva siempre a buscar información positiva sobre uno mismo.|F|Busca confirmar el autoconcepto, aunque sea negativo. Es la trampa típica al confundirla con el autoensalzamiento.",
      "En una persona con un autoconcepto negativo, el autoensalzamiento y la autoverificación chocan.|V",
      "Según Tesser, el éxito de un hermano en un dominio relevante para uno mismo produce reflexión y orgullo.|F|Si el dominio es relevante hay comparación y el éxito duele. La reflexión aparece cuando no es relevante.",
      "Quien acaba de recibir una crítica la acepta con menos actitud defensiva si antes ha escrito sobre un valor importante para él.|V"
    ],
    q: [
      "Ana se ve poco atractiva. Disfruta cuando su pareja la elogia, pero le cuesta creerlo. ¿Cómo llamó Swann a este conflicto?|Fuego cruzado cognitivo-afectivo|Reflexión en el modelo de Tesser|Mantenimiento de la autoevaluación|El sistema afectivo prefiere el elogio, que hace sentir bien, y el cognitivo, la confirmación, que resulta creíble.",
      "Un hermano de Luis gana un premio de pintura. Luis no pinta y se siente orgulloso. Según Tesser, ¿qué proceso actúa?|Reflexión|Comparación|Autoafirmación|Con un dominio no relevante para uno mismo hay reflexión. Si Luis también pintara, habría comparación y el éxito le dolería.",
      "Un opositor hace un simulacro de examen para conocer su nivel real, aunque pueda salirle mal. ¿Qué motivo lo guía?|Autoevaluación|Autoensalzamiento|Autoverificación|Busca información exacta y diagnóstica sobre su capacidad, como en los trabajos de Trope.",
      "¿Qué motivo funciona igual con un autoconcepto positivo que con uno negativo?|La autoverificación|El autoensalzamiento|La automejora|Busca coherencia con el autoconcepto. Por eso quien se ve torpe prefiere a alguien que también lo vea así."
    ],
    inc: [
      "Sobre los motivos del self|Sedikides halló que la autoevaluación era el motivo más fuerte|La automejora busca información útil para llegar a ser mejor|La autoverificación responde a la necesidad de coherencia|El orden de Sedikides (1993) fue autoensalzamiento, después autoverificación y, por último, autoevaluación."
    ],
    seq: [],
    cls: [
      "Motivo del self|Autoensalzamiento: fijarse en los comentarios positivos; sentirse bien con uno mismo|Autoverificación: Swann; confirmar lo que se cree de sí|Autoevaluación: Trope; tareas diagnósticas; simulacro de examen"
    ] },
  { t: "El self al procesar información y al relacionarse",
    tip: "Rogers, Kuiper y Kirker (1977) hallaron que lo juzgado en relación con uno mismo se recuerda mejor, el efecto de autorreferencia, que confirmaron Symons y Johnson (1997). Los esquemáticos procesan mejor la información congruente con su autoesquema. Se distinguen la autoconciencia objetiva, la privada y la pública, y la automonitorización de Snyder. La autoobstaculización (Berglas y Jones, 1978) consiste en crearse obstáculos antes de una tarea.",
    v: [
      "Efecto de autorreferencia=Mejor recuerdo de lo que se juzga en relación con uno mismo",
      "Autoconciencia objetiva=Al atender a uno mismo, la persona se compara con sus normas",
      "Autoconciencia privada=Tendencia a atender a los propios pensamientos y sentimientos",
      "Autoconciencia pública=Atención a uno mismo como objeto social, ligada a la ansiedad social",
      "Alto automonitorizador=Ajusta su conducta a lo que pide cada situación, como un camaleón social",
      "Bajo automonitorizador=Actúa según sus actitudes y estados internos en contextos distintos",
      "Autoobstaculización=Crearse obstáculos antes de una tarea para proteger la atribución del resultado",
      "Desacreditar la fuente=Responder «qué sabrá él» a una información que no encaja con el autoconcepto"
    ],
    g: [
      "El metaanálisis de Symons y Johnson (1997) reunió ___ estudios.|129|165|246",
      "La ventaja de la autorreferencia es sólida frente al procesamiento semántico y ___ frente a pensar en otra persona.|menor|mayor|nula",
      "Con poca información sobre otra persona, los esquemáticos tienden a verla ___ a sí mismos.|parecida|opuesta|ajena",
      "La autoconciencia ___ se relaciona con la ansiedad social.|pública|privada|objetiva",
      "La automonitorización fue propuesta por ___ (1974).|Snyder|Duval|Fenigstein"
    ],
    tf: [
      "Inventar una excusa después de suspender es un caso de autoobstaculización.|F|La clave es que el obstáculo es previo a la tarea. Una excusa inventada después no es autoobstaculización.",
      "Según Duval y Wicklund (1972), si al atender a uno mismo se detecta una discrepancia con las normas, se tiende a ajustar la conducta.|V",
      "Los bajos automonitorizadores cambian mucho su conducta de un contexto a otro.|F|Son los altos quienes se ajustan a cada situación. Los bajos actúan según sus actitudes y se comportan de forma parecida.",
      "Con más información sobre el otro, los esquemáticos perciben con más finura las diferencias.|V"
    ],
    q: [
      "Un estudiante sale de fiesta la víspera de un examen importante. Si suspende dirá «no dormí», y si aprueba, «y aun así aprobé». ¿Qué conducta muestra?|Autoobstaculización|Automonitorización alta|Autoafirmación|Crea un obstáculo previo a la tarea que protege la atribución del resultado (Berglas y Jones, 1978).",
      "Ante una información que no encaja con su autoconcepto, ¿de qué depende la respuesta de la persona?|De la importancia del aspecto y la credibilidad de la fuente|Del nivel de autoconciencia privada de la persona que la recibe|Del número de facetas que tiene su autoconcepto|Puede filtrarla o reinterpretarla, desacreditar la fuente o, si eso falla, reajustar su autoconcepto.",
      "¿Por qué se recuerda mejor la información referida a uno mismo?|El conocimiento sobre uno mismo es amplio y organizado|Despierta más emoción y por eso se repasa más a menudo|Se procesa de forma más superficial y mucho más rápida|Al estar el conocimiento sobre uno mismo tan organizado, la información nueva se elabora mejor.",
      "¿Qué describieron Fenigstein, Scheier y Buss (1975)?|La autoconciencia privada y la pública|La autoconciencia objetiva ante un espejo|La alta y la baja automonitorización|La autoconciencia objetiva es de Duval y Wicklund (1972), y la automonitorización, de Snyder (1974)."
    ],
    inc: [
      "Sobre el self en las relaciones|Solemos buscar a quienes nos ven distinto de como nos vemos|La imagen que queremos transmitir guía nuestras estrategias|Ante información incongruente se puede reajustar el autoconcepto|Tendemos a relacionarnos con personas que nos ven como nos vemos, lo que valida el autoconcepto."
    ],
    seq: [],
    cls: [
      "Atención al propio self|Duval y Wicklund (1972): autoconciencia objetiva; espejo o cámara|Fenigstein, Scheier y Buss (1975): autoconciencia privada; autoconciencia pública|Snyder (1974): automonitorización; camaleón social"
    ] },
  { t: "Narcisismo y autocompasión",
    tip: "En personalidad, el narcisismo es un rasgo de la población general: grandiosidad, necesidad de admiración, sentirse merecedor de un trato especial y poca empatía. Se mide con el NPI, tiene una forma grandiosa y otra vulnerable y no equivale a autoestima alta. Wetzel et al. (2017) hallaron un ligero descenso, no una «generación narcisista». La autocompasión de Neff (2003) une amabilidad con uno mismo, humanidad compartida y atención plena.",
    v: [
      "NPI=Cuestionario de narcisismo en el que se elige entre pares de frases",
      "Narcisismo grandioso=Forma segura y dominante del rasgo",
      "Narcisismo vulnerable=Forma insegura e hipersensible a la crítica",
      "Tríada oscura=Narcisismo, maquiavelismo y psicopatía subclínica",
      "Autocompasión=Forma sana de tratarse a uno mismo ante el fracaso o el sufrimiento",
      "Humanidad compartida=Reconocer que a mucha gente le pasa, frente al aislamiento",
      "Atención plena=Notar el malestar sin darle vueltas sin parar, frente a la sobreidentificación",
      "SCS=Escala de autocompasión de Neff, con estructura factorial en debate"
    ],
    g: [
      "Ante la crítica, la persona narcisista tiende a reaccionar con hostilidad o ___.|retirada|aceptación|humor",
      "Wetzel et al. (2017) analizaron datos de unas ___ personas.|50.000|165.000|5.000",
      "En la autocompasión, el polo opuesto de la amabilidad con uno mismo es la ___.|autocrítica dura|sobreidentificación|soledad",
      "Las respuestas no compasivas de la SCS se solapan en gran parte con el ___.|neuroticismo|narcisismo|perfeccionismo",
      "A diferencia de la autoestima, la autocompasión no depende de ___.|compararse|sufrir|cuidarse"
    ],
    tf: [
      "Autoestima alta y narcisismo son dos grados del mismo constructo.|F|Son constructos distintos: la autoestima alta implica sentirse valioso, y el narcisismo, superior a los demás.",
      "Wetzel et al. (2017) confirmaron el aumento del narcisismo en las generaciones jóvenes descrito por Twenge.|F|Con una medida más cuidadosa de la equivalencia de los ítems hallaron un ligero descenso del narcisismo.",
      "La autocompasión se mantiene precisamente cuando las cosas van mal, porque no exige haber tenido éxito.|V",
      "En personalidad, el narcisismo se estudia como un rasgo que varía en la población general, no como trastorno clínico.|V"
    ],
    q: [
      "Tras un suspenso, Irene piensa: «A mucha gente le pasa, no soy la única». ¿Qué componente de la autocompasión expresa?|Humanidad compartida|Amabilidad con una misma|Atención plena|Su polo opuesto es el aislamiento. La amabilidad se opone a la autocrítica dura, y la atención plena, a la sobreidentificación.",
      "¿Qué caracteriza a una persona con autoestima alta frente a una narcisista?|Se ve valiosa, igual que los demás|Se ve superior a todos los que la rodean|Necesita admiración constante|La autoestima alta permite valorar a otros sin sentirse amenazado. El narcisismo implica superioridad y necesidad de admiración.",
      "¿Qué mejoraron Wetzel et al. (2017) respecto a los datos usados por Twenge?|La equivalencia de los ítems entre cohortes|El uso de muestras de muchos otros países|La medida específica del narcisismo vulnerable|Midiendo con más cuidado la equivalencia de los ítems, hallaron un ligero descenso en las cohortes recientes.",
      "¿Qué se discute sobre la escala de autocompasión de Neff?|Su estructura factorial|Su fiabilidad test-retest|Su validez transcultural|Se debate si basta con una puntuación total o si conviene separar las respuestas compasivas de las no compasivas."
    ],
    inc: [
      "Sobre el narcisismo|Equivale a tener una autoestima muy alta|Suele distinguirse una forma grandiosa y otra vulnerable|Forma parte de la tríada oscura|El narcisismo implica sentirse superior y necesitar admiración. La autoestima alta implica sentirse valioso, igual que los demás."
    ],
    seq: [],
    cls: [
      "Constructo|Autoestima alta: sentirse valioso; encajar la crítica|Narcisismo: sentirse superior; necesidad de admiración; hostilidad ante la crítica|Autocompasión: amabilidad con uno mismo; humanidad compartida; atención plena"
    ] }
] },
{ n: 12, t: "Diferencias entre sexos y género", cap: 5, pir: "media", mods: [
  { t: "Cómo leer una diferencia entre grupos",
    tip: "Al comparar grupos se comparan medias, y lo importante es el tamaño de la diferencia, no su significación. La d de Cohen expresa cuántas desviaciones típicas separan las medias: con una d de 0,20, las distribuciones comparten en torno al 92 % del área. La variabilidad dentro de cada grupo supera la diferencia entre grupos, y una media no predice a un individuo. Hyde (2005) y Zell, Krizan y Teeter (2015) mostraron que la mayoría de las diferencias entre sexos son pequeñas.",
    v: [
      "d de Cohen=Diferencia entre dos medias expresada en desviaciones típicas",
      "Solapamiento=Proporción del área que comparten dos distribuciones",
      "Efecto pequeño=d en torno a 0,20, con distribuciones casi superpuestas",
      "Efecto grande=d de 0,80 o más, con diferencia clara pero aún con solapamiento",
      "Sexo=Características biológicas como cromosomas, gónadas y hormonas",
      "Género=Rasgos, roles y conductas que una cultura asocia a ser hombre o mujer",
      "Similitudes de género=Hipótesis de Hyde (2005) de que casi todas las diferencias son pequeñas o nulas",
      "Maccoby y Jacklin (1974)=Revisión con diferencias claras en lo verbal, visoespacial, matemático y agresión"
    ],
    g: [
      "Con muestras enormes, cualquier diferencia mínima resulta estadísticamente ___.|significativa|irrelevante|moderada",
      "Hyde (2005) halló que en torno al ___ de las diferencias entre sexos eran pequeñas o casi nulas.|78 %|46 %|92 %",
      "En el análisis de Zell, Krizan y Teeter (2015), el d absoluto medio fue ___.|0,21|0,50|0,93",
      "Una d en torno a 0,50 se considera convencionalmente un efecto ___.|moderado|pequeño|grande",
      "Zell, Krizan y Teeter (2015) reunieron ___ metaanálisis.|106|46|386"
    ],
    tf: [
      "Si un grupo tiene una media más alta, cualquier persona de ese grupo tiende a puntuar más que una del otro.|F|Una media de grupo no predice a un individuo: la variabilidad dentro de cada grupo supera la diferencia entre grupos.",
      "Dos grupos con la misma media pueden diferir en cuántos miembros tienen en los extremos.|V",
      "Una diferencia entre sexos indica por sí sola que su origen es biológico.|F|No indica su origen, que puede ser biológico, social o, casi siempre, una mezcla de ambos.",
      "Incluso con una diferencia grande, muchas personas de un grupo superan la media del otro.|V"
    ],
    q: [
      "Un artículo informa de una diferencia entre sexos muy significativa, obtenida con una muestra de un millón de personas. ¿Qué conviene preguntar antes de sacar conclusiones?|De qué tamaño es la diferencia|Si la muestra era suficiente|Si la p era menor de 0,05|Con muestras enormes cualquier diferencia mínima es significativa. La pregunta útil es el tamaño, por ejemplo con la d de Cohen.",
      "Si la diferencia entre dos grupos es una d de 0,20, ¿cuánto se solapan sus distribuciones?|En torno al 92 %|En torno al 50 %|En torno al 20 %|Una diferencia pequeña deja casi toda el área compartida.",
      "En una clase de 30 personas, la diferencia media de altura entre chicos y chicas es grande. ¿Qué cabe esperar?|Que haya chicas más altas que muchos chicos|Que todos los chicos superen a las chicas|Que las distribuciones no se solapen|Incluso una diferencia grande deja solapamiento. Además, casi todas las diferencias psicológicas son menores que la de altura.",
      "¿Qué concluyeron las grandes síntesis metaanalíticas sobre las diferencias entre sexos?|Que la imagen de sexos opuestos no se sostiene|Que no existe ninguna diferencia psicológica|Que la mayoría de diferencias son grandes|No niegan que haya diferencias, pero las claras se concentran en unas pocas variables."
    ],
    inc: [
      "Sobre la lectura de diferencias entre grupos|Una mayor variabilidad implica una media más alta|La significación sirve de poco con muestras enormes|La d de Cohen se basa en la desviación típica|Media y variabilidad son distintas: un grupo puede estar más representado en los extremos sin ser mejor en promedio."
    ],
    seq: [],
    cls: [
      "Tamaño del efecto según d|Pequeño: en torno a 0,20; solapamiento casi completo|Moderado: en torno a 0,50; diferencia visible con mucho solapamiento|Grande: 0,80 o más; diferencia clara con solapamiento"
    ] },
  { t: "Capacidades cognitivas y amenaza del estereotipo",
    tip: "No hay una diferencia consistente entre sexos en g: Colom et al. (2000) la hallaron nula frente a la ventaja que defendía Lynn, y los sexos difieren en perfiles, no en nivel (Halpern et al., 2007). La diferencia más robusta es la rotación mental, favorable a los varones. En matemáticas la brecha es casi nula en EE. UU. y varía con la igualdad de género. La amenaza del estereotipo puede darse en algunas situaciones, pero no explica la brecha.",
    v: [
      "Rotación mental=Imaginar cómo queda una figura tridimensional al girarla",
      "Perfiles de capacidades=En lo que difieren los sexos según Halpern et al. (2007), no en nivel general",
      "Mayor variabilidad masculina=Dispersión algo mayor en varones que eleva su presencia en ambos extremos",
      "Razón de varianzas=Cociente de dispersiones entre sexos, en torno a 1,1-1,2",
      "Amenaza del estereotipo=Peor rendimiento por temor a confirmar una imagen negativa del propio grupo",
      "Sesgo de publicación=Problema hallado por Flore y Wicherts (2015) en los estudios con niñas",
      "Flore et al. (2018)=Réplica registrada con algo más de 2.000 participantes que no halló efecto",
      "Else-Quest et al. (2010)=Hallaron que la brecha en matemáticas varía con la igualdad de género"
    ],
    g: [
      "Lynn defendió una ventaja de unos ___ puntos de CI para los varones adultos.|4 o 5|10 o 12|1 o 2",
      "La diferencia en rotación mental es de tamaño moderado a grande, con d en torno a ___.|0,5-0,9|0,1-0,2|1,1-1,2",
      "La velocidad perceptiva muestra una pequeña diferencia favorable a ___.|las mujeres|los varones|ningún sexo",
      "Spencer, Steele y Quinn (1999) estudiaron la amenaza del estereotipo en mujeres ante pruebas de ___ difíciles.|matemáticas|lectura|rotación",
      "Según Stoet y Geary (2012), las réplicas de la amenaza del estereotipo con un diseño adecuado eran ___.|escasas|numerosas|concluyentes"
    ],
    tf: [
      "Mayor variabilidad masculina significa que los varones tienen una media más alta.|F|Con la misma media, más dispersión solo implica más varones en ambos extremos, en lo alto y en lo bajo.",
      "La diferencia entre sexos en tareas espaciales es igual de grande en todas ellas.|F|La rotación mental muestra el efecto más robusto. En otras, como la visualización espacial compleja, es mucho menor.",
      "Una diferencia que cambia tanto de un país a otro difícilmente puede ser fija.|V",
      "Flore y Wicherts (2015) hallaron que el efecto de la amenaza del estereotipo en niñas se reducía mucho al corregir el sesgo de publicación.|V"
    ],
    q: [
      "Un centro educativo elimina de los exámenes la casilla de «sexo» confiando en que así desaparecerá la brecha en matemáticas. ¿Qué cabe esperar según la evidencia?|Que apenas cambien los resultados|Que la brecha desaparezca del todo|Que la brecha se invierta|La medida es inocua, pero la evidencia apunta más a la elección de asignaturas, la confianza en las capacidades o la práctica.",
      "¿Qué hallaron Colom, Juan-Espinosa y colaboradores (2000)?|Una diferencia nula en g|Una ventaja masculina de 4 puntos|Una ventaja femenina en g|Al separar la inteligencia general de las aptitudes concretas, la diferencia en g fue nula.",
      "¿Cuál es la diferencia cognitiva entre sexos más robusta?|La rotación mental, favorable a los varones|La fluidez verbal, favorable a los varones|La inteligencia general, favorable a los varones|No hay diferencias consistentes en g, y la fluidez verbal favorece a las mujeres.",
      "¿Qué concluye la evidencia sobre la amenaza del estereotipo como explicación de la brecha en matemáticas?|Su tamaño es incierto y no la explica|Es la explicación principal de la brecha|Explica la brecha solo en las niñas|Puede darse en algunas situaciones, pero hay sesgo de publicación y la réplica registrada de 2018 no halló efecto."
    ],
    inc: [
      "Sobre las diferencias cognitivas entre sexos|Los sexos difieren sobre todo en el nivel de g|La razón de varianzas ronda el 1,1-1,2|La brecha en matemáticas varía entre países|Según Halpern et al. (2007), los sexos difieren en perfiles de capacidades, no en el nivel general."
    ],
    seq: [
      "Auge y caída de la amenaza del estereotipo|Steele y Aronson (1995)>Spencer, Steele y Quinn (1999)>Stoet y Geary (2012)>Flore y Wicherts (2015)>Flore et al. (2018)"
    ],
    cls: [
      "Dirección de la diferencia|Favorable a los varones: rotación mental|Favorable a las mujeres: fluidez verbal y escritura; velocidad perceptiva|Sin diferencia apreciable: inteligencia general; matemáticas en población general de EE. UU."
    ] },
  { t: "Personalidad, intereses y agresión",
    tip: "Feingold (1994) halló más asertividad en varones y más ansiedad, confianza y ternura en mujeres. Costa, Terracciano y McCrae (2001) y Schmitt et al. (2008) confirmaron más neuroticismo y amabilidad en mujeres, con diferencias pequeñas o moderadas, que paradójicamente son mayores en los países más ricos e igualitarios. La mayor diferencia está en los intereses cosas-personas (d en torno a 0,9), y la agresión física es claramente mayor en varones.",
    v: [
      "Paradoja de la igualdad=Diferencias de personalidad mayores en los países más ricos e igualitarios",
      "D de Mahalanobis=Medida multivariada de distancia que combina muchos rasgos a la vez",
      "Grupo de referencia local=Compararse con los del propio entorno, lo que atenúa diferencias en autoinforme",
      "Interés por las cosas=Inclinación por máquinas, herramientas y sistemas, mayor en varones",
      "Interés por las personas=Inclinación por enseñar, cuidar y ayudar, mayor en mujeres",
      "Agresión relacional=Difundir rumores o excluir a alguien, con diferencia mínima entre sexos",
      "Agresividad=Tendencia que puede ser adaptativa en ciertas situaciones, a diferencia de la violencia",
      "Feingold (1994)=Metaanálisis con más asertividad en varones y más ansiedad y ternura en mujeres"
    ],
    g: [
      "Costa, Terracciano y McCrae (2001) analizaron datos de ___ culturas.|26|55|76",
      "Con los 16 factores del 16PF, Del Giudice et al. (2012) obtuvieron una D en torno a ___.|2,7|0,9|0,21",
      "La diferencia en intereses cosas-personas tiene una d en torno a ___.|0,9|0,2|2,7",
      "En la agresión ___ la diferencia entre sexos es mínima.|relacional|física|violenta",
      "Feingold (1994) halló que los varones puntuaban más en ___.|asertividad|ansiedad|confianza"
    ],
    tf: [
      "Las diferencias de personalidad entre sexos son menores en los países más ricos e igualitarios.|F|Son mayores, justo donde cabría esperar lo contrario. Es la paradoja de la igualdad de género, cuya interpretación se debate.",
      "Una D de Mahalanobis alta puede compararse directamente con una d univariada.|F|No deben compararse: la D acumula pequeñas diferencias de muchas escalas y es sensible a la elección de variables.",
      "La diferencia más grande en este ámbito está en los intereses vocacionales, no en los rasgos.|V",
      "La agresión física es claramente mayor en los varones (Archer, 2004).|V"
    ],
    q: [
      "En un test vocacional de 4.º de ESO, Andrés puntúa alto en intereses técnicos y Lucía en sociales, como la tendencia media. ¿Qué debe hacer la orientadora?|Orientar según el perfil de cada alumno|Orientar según la tendencia media de su sexo|Repetir el test por coincidir con el estereotipo|La tendencia de grupo describe distribuciones, no destinos: hay chicas con intereses técnicos más altos que la mayoría de los chicos.",
      "¿Qué explicación de la paradoja de la igualdad de género apela a un problema de medida?|Cada persona se compara con su grupo local|Hay más recursos para expresar inclinaciones|Los roles se igualan en países más ricos|En culturas tradicionales una mujer se compara con otras mujeres, y la diferencia queda atenuada en el autoinforme.",
      "¿Qué critican Hyde y otros autores a la D de Mahalanobis?|Acumula pequeñas diferencias de muchas escalas|Solo puede calcularse con los factores del 16PF|Subestima siempre las diferencias entre los sexos|Además es sensible a la elección de variables y a los errores de medida, y no se interpreta como una d univariada.",
      "¿En qué variable puntúan más las mujeres según los estudios transculturales?|Neuroticismo|Asertividad|Agresión física|Costa et al. (2001) y Schmitt et al. (2008) hallaron más neuroticismo y amabilidad en mujeres, con diferencias pequeñas o moderadas."
    ],
    inc: [
      "Sobre las diferencias en agresión|La agresión relacional es muy superior en mujeres|La agresión física es claramente mayor en los varones|La agresividad se distingue de la violencia destructiva|En la agresión indirecta o relacional, como difundir rumores o excluir, la diferencia entre sexos es mínima."
    ],
    seq: [],
    cls: [
      "Dirección de la diferencia|Mayor en mujeres: neuroticismo; amabilidad; interés por las personas|Mayor en varones: asertividad; agresión física; interés por las cosas|Prácticamente igual: agresión indirecta o relacional"
    ] },
  { t: "El género: Bem, Spence y las explicaciones rivales",
    tip: "Durante el siglo XX, masculinidad y feminidad se midieron como polos de una sola dimensión. Bem (1974) las trató como independientes en el BSRI: la androginia es puntuar alto en ambas, no una puntuación intermedia, y en 1981 propuso la teoría del esquema de género. Spence y Helmreich (PAQ) hablaron de instrumentalidad y expresividad. La teoría del rol social (Eagly) y la psicología evolucionista compiten, y hoy predomina una postura interaccionista.",
    v: [
      "BSRI=Inventario de Bem con masculinidad y feminidad como dimensiones independientes",
      "Androginia=Puntuación alta tanto en masculinidad como en feminidad",
      "Indiferenciado=Puntuación baja en masculinidad y en feminidad",
      "Esquema de género=Filtro cognitivo con el que las personas muy tipificadas organizan la información",
      "Instrumentalidad=Rasgos orientados a la acción y al logro, como decisión e independencia",
      "Expresividad=Rasgos orientados a las relaciones, como calidez y comprensión",
      "Teoría del rol social=Las diferencias surgen de la división del trabajo y sus expectativas (Eagly)",
      "Postura interaccionista=Predisposiciones biológicas modestas que la cultura amplifica, reduce o redirige"
    ],
    g: [
      "Buss (1989) recogió datos de ___ culturas.|37|26|55",
      "Bem consideraba la androginia la opción más ___, porque permite usar conductas de ambos repertorios.|flexible|estable|madura",
      "El cuestionario de Spence y Helmreich se llama ___.|PAQ|BSRI|NPI",
      "Según Buss (1989), las mujeres daban más importancia a los ___ de la pareja.|recursos|rasgos físicos|valores",
      "La teoría del rol social predice que, si los roles se igualan, las diferencias deberían ___.|reducirse|mantenerse|invertirse"
    ],
    tf: [
      "En el modelo de Bem, la androginia es una puntuación intermedia en masculinidad y feminidad.|F|Es la trampa típica: la androginia es una puntuación alta en ambas dimensiones.",
      "Para Spence, los cuestionarios medían la identidad de género completa de la persona.|F|Medían dos conjuntos de rasgos, instrumentalidad y expresividad, lo que ayudó a no sobreinterpretar sus puntuaciones.",
      "La paradoja de la igualdad de género es difícil de encajar en una versión simple de la teoría del rol social.|V",
      "La variación de la brecha en matemáticas entre países es difícil de explicar desde una postura puramente evolucionista.|V"
    ],
    q: [
      "Carmen es firme en las negociaciones de su trabajo y muy tierna con su hijo enfermo. En el BSRI puntúa alto en masculinidad y en feminidad. ¿Qué tipo le corresponde?|Andrógino|Indiferenciado|Masculino|Puntuar alto en ambas dimensiones es androginia, que permite usar conductas de los dos repertorios según la situación.",
      "¿Qué sostiene la teoría del esquema de género (Bem, 1981)?|Los muy tipificados usan el género como filtro cognitivo|Los andróginos usan más el género como filtro cognitivo|El género apenas influye en cómo se procesa la información|Las personas muy tipificadas organizan la información sobre sí y sobre los demás a través del género. Las poco tipificadas lo usan menos.",
      "Buss (1989) halló en 37 culturas que los varones valoraban más el atractivo y la juventud de la pareja. ¿Qué explicación apoya sobre todo?|La psicología evolucionista|La teoría del rol social|El esquema de género|Predice que ciertas diferencias aparezcan en culturas muy distintas, como adaptaciones a problemas reproductivos.",
      "Según la teoría del rol social, ¿de dónde surgen las diferencias entre sexos?|De la división del trabajo en cada sociedad|De adaptaciones a problemas reproductivos|Del filtro cognitivo del esquema de género|Las expectativas de esos roles moldean conductas y rasgos. Diferencias físicas como la fuerza influyen según la economía y la cultura."
    ],
    inc: [
      "Sobre la medida de masculinidad y feminidad|Bem las midió como polos de una misma dimensión|El PAQ las concreta como instrumentalidad y expresividad|El BSRI permite puntuar alto en las dos|Bem rompió con esa idea: en el BSRI son dimensiones independientes. Los polos opuestos eran la visión clásica del siglo XX."
    ],
    seq: [
      "Concepción de masculinidad y feminidad|Polos de una misma dimensión>Dimensiones independientes en el BSRI (1974)>Teoría del esquema de género (1981)"
    ],
    cls: [
      "Explicación de las diferencias entre sexos|Teoría del rol social: Eagly; división del trabajo; igualar los roles reduce diferencias|Psicología evolucionista: Buss (1989); problemas reproductivos; diferencias en culturas muy distintas"
    ] }
] }
);

// SAIMAP Psicología · Personalidad II · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Lo que cambia con los años", cap: 5, pir: "media", mods: [
  { t: "Diseños para estudiar el cambio con la edad",
    tip: "Edad, cohorte y momento de medida están ligados: conocidos dos, el tercero queda fijado. El diseño transversal confunde edad y cohorte y tiende a sobrestimar el declive. El longitudinal confunde edad y momento de medida, sufre mortalidad experimental y efectos de práctica, y tiende a subestimarlo. Los diseños secuenciales, como el Seattle Longitudinal Study de Schaie, siguen a varias cohortes a lo largo del tiempo.",
    v: [
      "Cohorte=Grupo nacido en el mismo periodo, con una historia educativa, sanitaria y cultural común",
      "Momento de medida=Año en que se evalúa, con sus circunstancias propias",
      "Diseño transversal=Evaluación de personas de distintas edades en un mismo momento",
      "Diseño longitudinal=Evaluación repetida de las mismas personas a lo largo de los años",
      "Mortalidad experimental=Abandono selectivo que deja una muestra más sana y capaz",
      "Efectos de práctica=Mejora de la puntuación por haber hecho ya el test",
      "Diseño secuencial=Seguimiento de varias cohortes a lo largo del tiempo",
      "Seattle Longitudinal Study=Estudio de Schaie iniciado en 1956 que añadía muestras nuevas"
    ],
    g: [
      "Quien tiene 70 años en 2020 nació en 1950: conocidos dos de los factores, el tercero queda ___.|fijado|anulado|duplicado",
      "Como las cohortes recientes puntúan más, el diseño transversal tiende a ___ el declive.|sobrestimar|subestimar|anular",
      "El diseño longitudinal confunde la edad con el ___.|momento de medida|nivel educativo|efecto de cohorte",
      "El Seattle Longitudinal Study de Schaie comenzó en ___.|1956|1932|1921",
      "Para separar los efectos de edad y de momento de medida, Schaie propuso el diseño secuencial de ___.|tiempo|cohorte|edad"
    ],
    tf: [
      "El diseño longitudinal elimina la confusión con la cohorte, pero no está libre de confusiones.|V",
      "El diseño longitudinal tiende a sobrestimar el declive por la mortalidad experimental.|F|El abandono selectivo y la práctica hacen que tienda a subestimarlo. El que lo sobrestima es el transversal.",
      "En la rejilla de edad, cohorte y momento de medida, una columna equivale a un diseño transversal.|V",
      "Schaie concluyó que el declive de la mayoría de las aptitudes empieza antes de lo que sugerían los estudios transversales.|F|Concluyó lo contrario: empieza más tarde y es más gradual, y buena parte de las diferencias son de cohorte."
    ],
    q: [
      "Una empresa compara el manejo del móvil de sus empleados de 25 y de 60 años y concluye que con la edad se pierde habilidad tecnológica. ¿Cuál es el problema principal?|Confunde la edad con la cohorte|Confunde la edad con el momento|Sufre mortalidad experimental|Es un diseño transversal: el grupo de 60 años no creció con teléfonos inteligentes.",
      "¿Por qué ningún diseño simple puede separar a la vez edad, cohorte y momento de medida?|Porque están ligados entre sí|Porque exigen muestras enormes|Porque dependen del test usado|Conocidos dos de los tres factores, el tercero queda fijado: quien tiene 70 años en 2020 nació en 1950.",
      "Un estudio sigue durante 30 años a las mismas personas y halla un declive cognitivo muy leve. ¿Qué puede haberlo atenuado?|La práctica con el test|La diferencia entre cohortes|La deseabilidad social|Los efectos de práctica y el abandono selectivo hacen que el diseño longitudinal tienda a subestimar el declive.",
      "¿Qué variante del diseño secuencial de Schaie estima mejor los efectos de cohorte frente a momento de medida?|La transversal|La de cohorte|La de tiempo|Cruza varias cohortes en varios momentos. La de cohorte separa edad y cohorte, y la de tiempo, edad y momento."
    ],
    inc: [
      "Sobre los diseños evolutivos|El diseño longitudinal está libre de confusiones|El transversal confunde la edad con la cohorte|El secuencial sigue a varias cohortes en el tiempo|Es la trampa típica: el longitudinal confunde edad y momento de medida y sufre abandono selectivo y efectos de práctica."
    ],
    seq: [],
    cls: [
      "Diseño|Transversal: confunde edad y cohorte; tiende a sobrestimar el declive; rápido y barato|Longitudinal: confunde edad y momento de medida; tiende a subestimar el declive; caro y lento|Secuencial: varias cohortes seguidas en el tiempo; Schaie; Seattle Longitudinal Study"
    ] },
  { t: "Qué declina y qué se mantiene",
    tip: "Siguiendo a Cattell y Horn, la inteligencia fluida alcanza su máximo en la adultez joven y desciende desde entonces, mientras la cristalizada se mantiene o aumenta hasta los 60-70 años. Baltes distingue una mecánica vulnerable al envejecimiento y una pragmática que puede seguir creciendo. Salthouse (1996) atribuye buena parte del declive al enlentecimiento del procesamiento. La variabilidad entre personas aumenta con la edad.",
    v: [
      "Inteligencia fluida=Razonamiento con material nuevo, que desciende desde la adultez joven",
      "Inteligencia cristalizada=Vocabulario y conocimiento acumulado, que se mantiene hasta los 60-70 años",
      "Mecánica de la inteligencia=Componente más biológico según Baltes, vulnerable al envejecimiento",
      "Pragmática de la inteligencia=Componente basado en la cultura y la experiencia que puede seguir creciendo",
      "Salthouse (1996)=Atribuyó buena parte del declive al enlentecimiento de las operaciones elementales",
      "Reserva cognitiva=Capacidad para compensar el daño cerebral, asociada a educación y actividad",
      "Desdiferenciación=Mayor correlación entre aptitudes en la vejez, como si dependieran de un recurso común",
      "Caída terminal=Descenso acelerado en los años previos a la muerte, ligado a la salud"
    ],
    g: [
      "La inteligencia ___ alcanza su máximo en la adultez joven y desciende desde entonces.|fluida|cristalizada|pragmática",
      "Para Salthouse, buena parte de la pérdida en tareas complejas se explica estadísticamente por la pérdida de ___.|velocidad|vocabulario|motivación",
      "El concepto de reserva cognitiva se asocia a ___ (2002).|Stern|Baltes|Schaie",
      "Con la edad, la variabilidad entre personas ___.|aumenta|disminuye|se mantiene",
      "La caída terminal se relaciona más con el deterioro de la ___ que con la edad cronológica.|salud|memoria|cohorte"
    ],
    tf: [
      "La memoria de trabajo desciende de forma gradual con la edad.|V",
      "Para Baltes, la pragmática de la inteligencia es el componente más vulnerable al envejecimiento.|F|La vulnerable es la mecánica, más biológica. La pragmática, basada en la cultura y la experiencia, puede seguir creciendo.",
      "En la vejez, las distintas aptitudes tienden a correlacionar más entre sí.|V",
      "El promedio de un grupo de 80 años describe bien a la mayoría de sus miembros.|F|La variabilidad aumenta: hay octogenarios con rendimiento de mediana edad y otros con un deterioro marcado."
    ],
    q: [
      "Una jubilada de 75 años tarda en memorizar una contraseña nueva, pero aconseja con acierto a su sobrina en un conflicto laboral. ¿Qué distinción de Baltes lo ilustra?|Mecánica frente a pragmática|Fluida frente a velocidad|Nivel frente a orden|La mecánica, más biológica, es vulnerable al envejecimiento. La pragmática, basada en la experiencia, puede seguir creciendo.",
      "Dos personas con un daño cerebral parecido muestran distinto deterioro. Una tuvo estudios superiores y una ocupación exigente. ¿Qué concepto lo explica?|La reserva cognitiva|La desdiferenciación|La caída terminal|La educación y la actividad intelectual y social se asocian con mayor capacidad para compensar el daño (Stern, 2002).",
      "¿Qué capacidad se mantiene o aumenta hasta los 60-70 años?|El vocabulario|La memoria de trabajo|La velocidad de procesamiento|El vocabulario y el conocimiento general son inteligencia cristalizada. Las otras dos descienden con la edad.",
      "Según Salthouse, ¿qué dos efectos tiene el enlentecimiento?|Tareas sin terminar y datos perdidos|Menos motivación y peor vocabulario|Más errores y menor reserva|Las operaciones tardías no se completan a tiempo y los resultados de las primeras se pierden antes de usarse."
    ],
    inc: [
      "Sobre el envejecimiento cognitivo|Con la edad disminuye la variabilidad entre personas|La velocidad desciende desde la adultez joven|La caída terminal se liga a la salud más que a la edad|La variabilidad entre personas aumenta, por eso el promedio de los mayores describe mal a cada uno."
    ],
    seq: [],
    cls: [
      "Tendencia con la edad|Desciende desde la adultez joven: velocidad de procesamiento; razonamiento con material nuevo; inteligencia fluida|Se mantiene o aumenta hasta los 60-70 años: vocabulario; conocimiento general; inteligencia cristalizada"
    ] },
  { t: "La estabilidad del CI a lo largo de la vida",
    tip: "Hay que distinguir la estabilidad del nivel, si se mantiene la puntuación media, de la del orden, si se conserva la posición relativa, que se mide con una correlación. Las cohortes escocesas del Scottish Mental Survey de 1932, reevaluadas por el equipo de Deary, dan correlaciones de ,63 a los 77 años, ,66 hacia los 80 y ,54 a los 90, más altas al corregir la restricción de rango. La estabilidad es notable, pero no completa.",
    v: [
      "Estabilidad del nivel=Si se mantiene la puntuación media a lo largo del tiempo",
      "Estabilidad del orden=Si siguen por delante quienes estaban por delante, medida con una correlación",
      "Scottish Mental Survey=Test aplicado en 1932 a casi todos los niños escoceses nacidos en 1921",
      "Cohorte de Aberdeen=101 personas evaluadas a los 11 y a los 77 años, con una correlación de ,63",
      "Cohorte de Lothian=Reevaluada hacia los 80 años, con una correlación de ,66 y de ,73 corregida",
      "Restricción de rango=Menor variabilidad de la muestra que rebaja la correlación observada",
      "Ian Deary=Investigador cuyo equipo volvió a evaluar a las cohortes escocesas décadas después",
      "Envejecimiento cognitivo=Cambio que estas cohortes permiten estudiar con un punto de partida conocido"
    ],
    g: [
      "En la cohorte de Lothian, la correlación entre los 11 años y los 80 aproximadamente fue de ___.|,66|,33|,95",
      "A los 90 años, la correlación con el CI de los 11 fue de ,54, y de ___ corregida.|,67|,73|,86",
      "La estabilidad del ___ se mide con la correlación entre dos evaluaciones.|orden|nivel|promedio",
      "Se corrige la restricción de rango porque quienes siguen participando suelen ser los más ___.|sanos y capaces|jóvenes y activos|ancianos y frágiles",
      "Una correlación de ,66, elevada al cuadrado, indica que se comparte algo menos de la ___ de la varianza.|mitad|tercera parte|cuarta parte"
    ],
    tf: [
      "Que la puntuación bruta media baje en la vejez implica que las personas cambian de posición relativa.|F|Estabilidad del orden no es igualdad del nivel: la media puede bajar y el orden conservarse bastante bien.",
      "En la cohorte de Aberdeen, la corrección por restricción de rango eleva la correlación de ,63 a ,73.|V",
      "La estructura jerárquica de la inteligencia, con g en la cúspide, se mantiene con la edad.|V",
      "Una correlación de ,66 entre la infancia y la vejez indica una estabilidad prácticamente completa.|F|Es notable pero no completa: al cuadrado, comparten algo menos de la mitad de la varianza y queda margen de cambio."
    ],
    q: [
      "Carmen puntuó muy alto a los 11 años. A los 80, su puntuación bruta es menor, pero sigue por encima de la mayoría de su cohorte. ¿Qué describe su caso?|Cambio de nivel con orden estable|Cambio de orden con nivel estable|Pérdida de nivel y de posición|Ha cambiado su nivel, pero no su posición relativa: estabilidad del orden no es igualdad del nivel.",
      "¿Por qué las cohortes escocesas son tan valiosas para estudiar el envejecimiento cognitivo?|Ofrecen un punto de partida conocido|Evalúan cada año a toda la población|Eliminan la mortalidad experimental|Sin el test de la infancia sería imposible saber si una persona mayor ha declinado o siempre puntuó así.",
      "¿Qué hizo el equipo de Deary con parte de los niños del Scottish Mental Survey?|Volvió a pasarles la misma prueba|Les aplicó una batería distinta|Comparó sus resultados con sus hijos|Los localizó décadas después y les volvió a pasar el mismo test que hicieron en 1932.",
      "¿Qué ocurre con la correlación observada si en la vejez solo siguen participando los más sanos y capaces?|Baja por restricción de rango|Sube por selección de casos|No cambia porque es relativa|La menor variabilidad de la muestra rebaja la correlación observada, y por eso se corrige."
    ],
    inc: [
      "Sobre la estabilidad del CI|Los mayores pierden su posición relativa en CI|A los 90 años la correlación observada fue de ,54|La estructura con g en la cúspide se mantiene|El orden relativo en CI es muy estable desde los 11 años hasta la vejez (Deary et al., 2004)."
    ],
    seq: [
      "Reevaluaciones de las cohortes escocesas por edad|Scottish Mental Survey a los 11 años>Cohorte de Aberdeen a los 77 años>Cohorte de Lothian hacia los 80 años>Reevaluación a los 90 años"
    ],
    cls: [
      "Tipo de estabilidad|Del nivel: estabilidad absoluta; puntuación media|Del orden: estabilidad relativa; correlación entre evaluaciones; posición respecto a los demás"
    ] },
  { t: "Personalidad, edad y cohortes",
    tip: "Roberts, Walton y Viechtbauer (2006), Soto et al. (2011) y Bleidorn et al. (2022) coinciden: responsabilidad, amabilidad y estabilidad emocional aumentan en la adultez, sobre todo entre la adolescencia tardía y los 30-40 años. Es el principio de madurez. La teoría de la selectividad socioemocional de Carstensen describe cambios en las metas. Una diferencia entre jóvenes y mayores puede deberse a la edad, a la cohorte o al momento de medida.",
    v: [
      "Principio de madurez=Aumento con la edad de responsabilidad, amabilidad y estabilidad emocional",
      "Roberts, Walton y Viechtbauer=Metaanálisis de 2006 sobre el cambio medio de la personalidad",
      "Soto et al. (2011)=Datos transversales masivos sobre personalidad y edad",
      "Bleidorn et al. (2022)=Revisión reciente que coincide en el patrón de maduración",
      "Roles adultos=Trabajo, pareja y crianza, a los que suele ligarse la maduración",
      "Selectividad socioemocional=Con un horizonte temporal corto se priorizan las metas emocionales",
      "Efecto de cohorte=Diferencia debida a la generación de nacimiento, no a la edad",
      "Efecto Flynn=Cada generación del siglo XX puntuó más que la anterior a la misma edad"
    ],
    g: [
      "Los cambios de personalidad más intensos se producen entre la adolescencia tardía y los ___ años.|30-40|20-25|60-70",
      "En el principio de madurez, la estabilidad emocional aumenta, es decir, el ___ disminuye.|neuroticismo|psicoticismo|narcisismo",
      "Según Carstensen, cuando el horizonte temporal se percibe más corto se priorizan las metas ___.|emocionales|de exploración|informativas",
      "El efecto Flynn es un efecto de ___ en inteligencia.|cohorte|edad|momento de medida",
      "El principio de madurez suele relacionarse con la adopción de ___ adultos.|roles|valores|hábitos"
    ],
    tf: [
      "Las diferencias medias de personalidad entre grupos de edad son grandes en comparación con las que hay entre personas de la misma edad.|F|Son pequeñas en comparación con las diferencias entre personas de la misma edad.",
      "La media de un rasgo puede cambiar con la edad mientras cada persona conserva bastante bien su posición relativa.|V",
      "Los cambios de personalidad con la edad se detienen por completo hacia los 30 años.|F|Los más intensos se dan entre la adolescencia tardía y los 30-40 años, pero continúan después.",
      "Las afirmaciones sobre generaciones enteras más narcisistas han resultado débiles con datos amplios y comparables.|V"
    ],
    q: [
      "Una encuesta transversal concluye que los jóvenes son menos responsables que sus padres. ¿Cuál es la explicación más simple?|La responsabilidad aumenta con la edad|Es una generación menos responsable|El momento de medida es desfavorable|Por el principio de madurez, los jóvenes de hoy probablemente serán más responsables dentro de veinte años.",
      "Tras un confinamiento, todos los grupos de edad rinden peor en una evaluación. ¿Qué tipo de efecto es?|De momento de medida|De cohorte|De edad|Afecta a todos a la vez por las circunstancias del año de evaluación, no por la edad ni por la generación.",
      "¿Qué propone la teoría de la selectividad socioemocional?|Un cambio de metas según el horizonte|Un aumento de la apertura en la vejez|Un descenso de la amabilidad tras los 40|Con un horizonte percibido más corto se priorizan las metas emocionales. Es una diferencia de motivaciones, no solo de rasgos.",
      "¿Qué rasgos aumentan durante la adultez según el principio de madurez?|Responsabilidad, amabilidad y estabilidad emocional|Responsabilidad, extraversión y apertura a la experiencia|Extraversión, amabilidad y estabilidad emocional|El patrón es coincidente en Roberts et al. (2006), Soto et al. (2011) y Bleidorn et al. (2022). El neuroticismo disminuye."
    ],
    inc: [
      "Sobre personalidad y edad|La amabilidad disminuye durante la adultez|La responsabilidad aumenta durante la adultez|La estabilidad emocional aumenta con los años|Según el principio de madurez, la amabilidad aumenta en la adultez, junto con la responsabilidad y la estabilidad emocional."
    ],
    seq: [],
    cls: [
      "Tipo de efecto|Edad: principio de madurez; responsabilidad entre los 20 y los 40 años|Cohorte: efecto Flynn; generaciones nacidas más tarde|Momento de medida: evaluación tras un confinamiento; crisis que afecta a todos"
    ] }
] },
{ n: 14, t: "Genes y ambiente", cap: 5, pir: "alta", mods: [
  { t: "El vocabulario de la genética de la conducta",
    tip: "La genética de la conducta pregunta qué parte de las diferencias entre personas de una población se asocia a diferencias genéticas y qué parte a ambientales. La heredabilidad habla de varianza, de una población y de un momento, no de individuos. El modelo ACE separa genética aditiva, ambiente compartido y ambiente no compartido más error, y las fórmulas de Falconer los estiman con gemelos. La correlación genotipo-ambiente puede ser pasiva, evocadora o activa.",
    v: [
      "Heredabilidad=Proporción de la varianza fenotípica de una población atribuida a diferencias genéticas",
      "Sentido amplio (H²)=Toda la varianza genética, también dominancia e interacciones entre genes",
      "Sentido estricto (h²)=Solo la varianza genética aditiva, que explica el parecido entre padres e hijos",
      "Ambiente compartido (C)=Lo que hace parecidos a los hermanos criados juntos",
      "Ambiente no compartido (E)=Lo que hace diferentes a los hermanos, más el error de medida",
      "Emparejamiento selectivo=Parecido entre los miembros de la pareja, en inteligencia en torno a ,40",
      "Supuesto de ambientes iguales=Que los MZ no compartan más ambiente relevante que los DZ",
      "Interacción G×E=Que el efecto de un ambiente dependa del genotipo, o al revés"
    ],
    g: [
      "Si los MZ correlacionan ,70 y los DZ ,45, la heredabilidad estimada con Falconer es de ___.|,50|,25|,70",
      "Con rMZ de ,70 y rDZ de ,45, el ambiente compartido estimado es de ___.|,20|,30|,45",
      "El emparejamiento selectivo lleva a ___ la heredabilidad en los estudios de gemelos.|infraestimar|sobrestimar|anular",
      "Un bebé risueño que recibe más interacción ilustra la correlación genotipo-ambiente ___.|evocadora|pasiva|activa",
      "Según Scarr y McCartney, con la edad gana peso la correlación genotipo-ambiente ___.|activa|pasiva|evocadora"
    ],
    tf: [
      "La heredabilidad en sentido estricto incluye los efectos de dominancia y las interacciones entre genes.|F|Eso corresponde a la heredabilidad en sentido amplio (H²). La estricta (h²) recoge solo la varianza aditiva.",
      "En el modelo ACE, el componente E incluye el error de medida.|V",
      "Los gemelos dicigóticos comparten en promedio la mitad de la variación genética, como cualquier par de hermanos.|V",
      "La correlación genotipo-ambiente y la interacción genotipo-ambiente son el mismo fenómeno.|F|La rGE es que los ambientes no se reciben al azar. La G×E, que el efecto de un ambiente dependa del genotipo."
    ],
    q: [
      "Unos padres muy lectores transmiten a su hija sus genes y una casa llena de libros. ¿Qué tipo de correlación genotipo-ambiente es?|Pasiva|Evocadora|Activa|Los padres transmiten a la vez genes y un ambiente afín. Según Scarr y McCartney, es la que pierde peso con la edad.",
      "En un rasgo, rMZ vale ,70 y rDZ ,40. ¿Cuánto vale c² según Falconer?|,10|,30|,60|c² ≈ 2rDZ − rMZ, es decir, ,80 − ,70. El ,60 es h² y el ,30 es e², que suman 1 con c².",
      "¿Por qué el emparejamiento selectivo sesga los estudios de gemelos?|Eleva el parecido genético de los DZ|Reduce el parecido genético de los MZ|Iguala el ambiente de MZ y DZ|Si las parejas se parecen, los DZ comparten más de la mitad supuesta y h² se infraestima.",
      "¿Qué tres rasgos de la definición de heredabilidad son esenciales?|Varianza, población y momento|Individuo, rasgo y genotipo|Media, familia y generación|No describe a un individuo ni es una constante biológica: habla de diferencias en una población y un momento."
    ],
    inc: [
      "Sobre el diseño de gemelos|El sesgo por ambientes iguales es muy grande|Los MZ comparten prácticamente todo su genoma|Se combina con estudios familiares y de adopción|El supuesto de ambientes iguales se ha criticado, pero los estudios que lo han comprobado sugieren que el sesgo no es grande."
    ],
    seq: [],
    cls: [
      "Correlación genotipo-ambiente|Pasiva: padres lectores y casa con libros; pierde peso con la edad|Evocadora: bebé risueño que recibe más interacción; también llamada reactiva|Activa: adolescente curiosa en el club de ciencias; selección de nichos"
    ] },
  { t: "Genes, familia y CI",
    tip: "Bouchard y McGue (1981) mostraron que las correlaciones de CI aumentan con el parentesco genético, y los MZ criados por separado del MISTRA correlacionan en torno a ,70. En la adopción, el parecido con los padres adoptivos tiende a cero en la adultez, aunque un hogar adoptivo más educado eleva el CI. Según el efecto Wilson, la heredabilidad del CI aumenta con la edad. Según el efecto Scarr-Rowe, es menor en contextos pobres, algo que sigue en debate.",
    v: [
      "Bouchard y McGue (1981)=Resumieron 111 estudios de correlaciones familiares en CI",
      "MISTRA=Estudio de Minnesota con gemelos MZ separados en la infancia y criados aparte",
      "Adopción cruzada=Diseño de Capron y Duyme con orígenes y hogares de nivel alto o bajo",
      "Kendler et al. (2015)=Con registros suecos, el hermano adoptado puntuó unos 4 puntos más",
      "Efecto Wilson=Aumento de la heredabilidad del CI con la edad, con descenso del ambiente compartido",
      "Efecto Scarr-Rowe=Menor heredabilidad del CI en contextos socioeconómicos desfavorecidos",
      "Turkheimer et al. (2003)=A los 7 años, heredabilidad del CI de ,10 en familias pobres y ,70 en acomodadas",
      "Cyril Burt=Publicó correlaciones de gemelos idénticas aunque cambiaba el número de casos"
    ],
    g: [
      "Según Bouchard y McGue, la correlación de CI entre gemelos MZ criados juntos ronda ___.|,86|,60|,47",
      "En el MISTRA, los gemelos MZ criados por separado correlacionaban en CI en torno a ___.|,70|,47|,86",
      "La correlación de los adoptados con sus padres adoptivos tiende a ___ en la adultez.|desaparecer|aumentar|estabilizarse",
      "Según Haworth et al. (2010), la heredabilidad del CI en la adultez joven ronda ___.|,66|,41|,80",
      "Tucker-Drob y Bates (2016) no encontraron el efecto Scarr-Rowe en Europa occidental ni en ___.|Australia|Texas|Minnesota"
    ],
    tf: [
      "La heredabilidad del CI disminuye con la edad porque se acumula el efecto de la experiencia.|F|Es al revés: aumenta con la edad (efecto Wilson), y el ambiente compartido cae casi a cero en la adultez.",
      "Capron y Duyme (1989) hallaron efectos tanto del origen biológico como del nivel del hogar adoptivo.|V",
      "El caso de Cyril Burt invalida la investigación posterior sobre gemelos criados por separado.|F|No la invalida: la investigación posterior se apoya en estudios independientes. Es una advertencia sobre verificar datos.",
      "En Kendler et al. (2015), la ventaja del hermano adoptado era mayor cuanto más educado era el hogar adoptivo.|V"
    ],
    q: [
      "De dos hermanos biológicos suecos, uno se crio con sus padres y otro fue adoptado por una familia con alto nivel educativo. ¿Qué cabe esperar según Kendler et al. (2015)?|Que el adoptado puntúe algo más|Que ambos puntúen igual|Que el adoptado puntúe algo menos|Los adoptados puntuaron en torno a 4 puntos más, y la ventaja crecía con la educación del hogar adoptivo.",
      "¿Qué explicación se da con más probabilidad al efecto Wilson?|La correlación genotipo-ambiente activa|La correlación genotipo-ambiente pasiva|El emparejamiento selectivo de los padres|Con los años, cada uno elige ambientes acordes con sus inclinaciones, que amplifican las diferencias genéticas iniciales.",
      "Según Turkheimer et al. (2003), ¿por qué la heredabilidad del CI era muy baja en familias pobres?|El ambiente limitante pesa más|Hay menos variabilidad genética|Los tests eran poco fiables allí|Cuando el ambiente es muy limitante, las diferencias ambientales pesan más. Cuando basta para todos, quedan sobre todo las genéticas.",
      "¿Qué anomalía señaló Kamin (1974) en los datos de Burt?|Correlaciones idénticas con distinto número de casos|Gemelos que en realidad no se separaron en la infancia|Correlaciones de CI muy inferiores a las de otros estudios|Burt repetía una correlación de ,771 entre MZ separados aunque cambiara la muestra. Hearnshaw (1979) concluyó que no eran fiables."
    ],
    inc: [
      "Sobre los estudios de adopción|El parecido con los padres adoptivos aumenta con la edad|El parecido con los padres biológicos se mantiene o aumenta|La adopción en hogares más educados eleva el CI|La correlación con los padres adoptivos tiende a cero en la adultez, mientras la de los biológicos se mantiene o aumenta."
    ],
    seq: [
      "Heredabilidad aproximada del CI según la etapa (efecto Wilson)|Infancia, en torno a ,41>Adolescencia, en torno a ,55>Adultez joven, en torno a ,66"
    ],
    cls: [] },
  { t: "Genes, familia y rasgos",
    tip: "Los grandes rasgos tienen heredabilidades en torno a ,40-,50, con un ambiente compartido prácticamente nulo. Vukasović y Bratko (2015) estimaron ,40 de media: ,47 en gemelos y ,22 en familia y adopción. Plomin y Daniels (1987) preguntaron por qué los hermanos son tan distintos: el ambiente relevante es el no compartido, aunque las variables concretas medidas explican muy poco. El orden de nacimiento apenas influye en la personalidad.",
    v: [
      "Vukasović y Bratko (2015)=Metaanálisis con más de 100.000 personas y heredabilidad media de ,40",
      "Plomin y Daniels (1987)=Preguntaron por qué los hermanos criados juntos son tan distintos",
      "Turkheimer y Waldron (2000)=Las variables medidas de ambiente no compartido explicaban en torno al 2 %",
      "Socialización grupal=Teoría de Harris (1998) que sitúa lo decisivo en el grupo de iguales",
      "Born to Rebel=Obra de Sulloway (1996) sobre primogénitos conservadores y segundones rebeldes",
      "Rohrer, Egloff y Schmukle=Más de 20.000 personas sin efectos del orden de nacimiento en personalidad",
      "Damian y Roberts (2015)=Cientos de miles de estudiantes con efectos prácticamente nulos en personalidad",
      "Efectos no aditivos=Efectos genéticos que comparten los MZ y apenas otros parientes"
    ],
    g: [
      "En Vukasović y Bratko, la heredabilidad era de ,47 en gemelos y de ___ en familia y adopción.|,22|,40|,50",
      "Los hermanos ___, que comparten casa pero no genes, apenas se parecen en personalidad.|adoptivos|gemelos|biológicos",
      "Para Harris, el ambiente decisivo no es la familia, sino el grupo de ___.|iguales|hermanos|vecinos",
      "Rohrer et al. (2015) solo hallaron una ligera ventaja de los primogénitos en ___.|inteligencia|responsabilidad|extraversión",
      "Según Turkheimer y Waldron, las variables concretas de ambiente no compartido explicaban en torno al ___ de la varianza.|2 %|20 %|40 %"
    ],
    tf: [
      "En Vukasović y Bratko, la heredabilidad no variaba según el modelo de personalidad ni según el sexo.|V",
      "En personalidad, el ambiente compartido explica buena parte de la varianza no genética.|F|Es prácticamente nulo: la varianza no genética corresponde casi toda al ambiente no compartido.",
      "La mayor heredabilidad en los estudios de gemelos suele atribuirse a efectos genéticos no aditivos.|V",
      "Los grandes estudios de 2015 confirmaron que los segundones son más abiertos y rebeldes.|F|Rohrer et al. y Damian y Roberts (2015) no hallaron efectos del orden de nacimiento en los grandes rasgos."
    ],
    q: [
      "Marta es ordenada y tímida, y su hermano Pablo, sociable y desorganizado, aunque crecieron en la misma casa. ¿Qué lectura propone la genética de la conducta?|Genes y experiencias propias de cada uno|El estilo de crianza común de los padres|El orden de nacimiento de cada hermano|Comparten solo parte de la variación genética, y el resto se debe sobre todo a experiencias propias difíciles de identificar.",
      "¿Qué parte de la varianza explican las variables concretas de ambiente no compartido que se han medido?|Muy poca, en torno al 2 %|Casi la mitad, en torno al 40 %|Toda la varianza no genética|El ambiente no compartido pesa, pero identificarlo es difícil (Turkheimer y Waldron, 2000). Parte es azar y error de medida.",
      "¿Por qué la heredabilidad estimada en personalidad depende del diseño?|Los gemelos captan efectos no aditivos|Las familias comparten más ambiente|Las adopciones son siempre tardías|Los MZ comparten efectos genéticos no aditivos que apenas comparten otros parientes, y eso eleva la estimación en gemelos.",
      "¿Qué concluyeron Rohrer, Egloff y Schmukle (2015) sobre el orden de nacimiento?|Sin efecto en los grandes rasgos|Más responsabilidad en primogénitos|Ningún efecto ni en inteligencia|Solo hallaron una ligera ventaja de los primogénitos en inteligencia y en intelecto autoinformado."
    ],
    inc: [
      "Sobre el ambiente no compartido|Incluye el nivel económico del hogar|Incluye amigos, sucesos y trato diferente|Incluye también el error de medida|El nivel económico y el estilo general de crianza son ambiente compartido, que es casi nulo en personalidad."
    ],
    seq: [],
    cls: [
      "Tipo de ambiente|Compartido: hogar; barrio; nivel económico; estilo general de crianza|No compartido: amigos distintos; trato diferente; azar; error de medida"
    ] },
  { t: "La era molecular y los errores de interpretación",
    tip: "Polderman et al. (2015) hallaron una heredabilidad media de ,488 en 17.804 rasgos, en línea con las tres leyes de Turkheimer, y Chabris et al. añadieron una cuarta: muchísimas variantes de efecto minúsculo. Los GWAS permiten construir puntuaciones poligénicas, pero hay heredabilidad perdida, las estimaciones se reducen dentro de las familias y los genes candidatos fracasaron. La heredabilidad no describe a un individuo, no implica inmutabilidad ni explica diferencias entre grupos.",
    v: [
      "Polderman et al. (2015)=Revisión de 17.804 rasgos con una heredabilidad media de ,488",
      "Cuarta ley=Un rasgo típico se asocia con muchísimas variantes de efecto minúsculo",
      "GWAS=Estudios de asociación del genoma completo que buscan SNP en muestras enormes",
      "Puntuación poligénica=Suma ponderada de muchas variantes genéticas para predecir un rasgo",
      "Heredabilidad perdida=En inteligencia, ,20-,25 a partir de SNP frente a ,50 o más en gemelos",
      "Tres leyes de Turkheimer=Todo es heredable, la familia pesa menos que los genes y queda variación sin explicar",
      "Genes candidatos=Interacciones de un solo gen con el ambiente que no se replicaron a gran escala",
      "Semillas de Lewontin=Heredabilidad alta dentro de grupos con una diferencia ambiental entre ellos"
    ],
    g: [
      "Polderman et al. (2015) reunieron datos de gemelos de ___ países.|39|17|106",
      "El GWAS del nivel educativo de Lee et al. (2018) incluyó a más de un ___ de personas.|millón|centenar|millar",
      "La cuarta ley de la genética de la conducta la añadieron ___ et al. (2015).|Chabris|Polderman|Savage",
      "La fenilcetonuria es genética y se trata con ___.|dieta|terapia génica|psicoterapia",
      "Según la segunda ley de Turkheimer, el efecto de criarse en la misma familia es ___ que el de los genes.|menor|mayor|igual"
    ],
    tf: [
      "Las réplicas a gran escala confirmaron la interacción entre el gen 5-HTTLPR y el estrés descrita por Caspi et al. (2003).|F|No la confirmaron de forma fiable (Culverhouse et al., 2018, y Border et al., 2019).",
      "La heredabilidad estimada a partir de los SNP en inteligencia es menor que la obtenida con gemelos.|V",
      "Si c² es aproximadamente cero, puede concluirse que la familia no importa.|F|Depende del rango de ambientes estudiados, y la familia puede tener efectos distintos en cada hermano.",
      "Además de inteligencia y nivel educativo, también se han realizado GWAS de rasgos de personalidad.|V"
    ],
    q: [
      "Un estudiante afirma: «Como la heredabilidad del CI es de ,50, la mitad de mi inteligencia viene de mis genes». ¿Qué error comete?|Aplicar a una persona un dato poblacional|Confundir heredabilidad y ambiente compartido|Ignorar la heredabilidad perdida de los SNP|h² describe la varianza en una población, no la composición de la inteligencia de un individuo.",
      "Unas semillas genéticamente variadas se reparten en dos macetas, una con tierra rica y otra con tierra pobre. ¿De dónde procede la diferencia media entre macetas?|Del ambiente por completo|De los genes en su mayor parte|De genes y ambiente a partes iguales|Dentro de cada maceta las diferencias son genéticas, pero entre macetas son enteramente ambientales (Lewontin).",
      "¿Qué vías, además del efecto genético directo, inflan la asociación de las PGS?|Crianza genética y estratificación|Mutaciones nuevas y efecto Flynn|Error de medida y práctica|Parte del efecto pasa por la crianza genética, la estratificación poblacional y el emparejamiento selectivo (Howe et al., 2022).",
      "¿Qué ejemplo refuta que heredable signifique inmutable?|La altura, que aumentó en un siglo|La heredabilidad perdida de los SNP|El fracaso de los genes candidatos|La altura es muy heredable y ha aumentado mucho en un siglo. La fenilcetonuria, genética, se trata con dieta."
    ],
    inc: [
      "Sobre los errores de interpretación|Una h² alta en cada grupo prueba que la diferencia entre grupos es genética|El componente E incluye también el error de medida|Un rasgo muy heredable puede cambiar por el ambiente|La heredabilidad dentro de un grupo no dice nada del origen de las diferencias entre grupos (semillas de Lewontin)."
    ],
    seq: [],
    cls: [
      "Motivo de prudencia en la era molecular|Heredabilidad perdida: SNP ,20-,25 en inteligencia; gemelos ,50 o más|Reducción dentro de familias: Howe et al. (2022); crianza genética; estratificación poblacional|Genes candidatos: MAOA y maltrato; 5-HTTLPR y estrés; Caspi et al."
    ] }
] },
{ n: 15, t: "Rasgos, estrés y enfermedad", cap: 6, pir: "alta", mods: [
  { t: "Cómo se relacionan personalidad y enfermedad",
    tip: "Que dos variables se asocien no dice por qué. Suls y Rittenhouse (1990) y Smith (2006) ordenaron las vías: hiperreactividad fisiológica, conductas de salud, modelo transaccional, predisposición constitucional y enfermedad que cambia la personalidad, a las que se añade la conducta de enfermedad. Las vías no se excluyen entre sí. Casi todos los datos son correlacionales y de tamaño pequeño o moderado.",
    v: [
      "Hiperreactividad fisiológica=Respuestas cardiovasculares y hormonales más intensas o duraderas",
      "Conductas de salud=Vía indirecta: fumar, beber, hacer ejercicio, dormir o seguir un tratamiento",
      "Modelo transaccional=La personalidad modula la exposición, la evaluación y el afrontamiento del estrés",
      "Predisposición constitucional=Tercera variable biológica que produce a la vez el rasgo y la enfermedad",
      "Conducta de enfermedad=Modo de percibir y comunicar síntomas y de buscar ayuda",
      "Watson y Pennebaker (1989)=Neuroticismo ligado a quejas somáticas más que a enfermedad objetiva",
      "Vulnerabilidad general=Propensión común a enfermar en la que el neuroticismo sería un factor",
      "Lahey (2009)=Defendió el neuroticismo como problema de salud pública por sus costes"
    ],
    g: [
      "En el modelo transaccional, el estrés actúa como ___ entre personalidad y enfermedad.|mediador|moderador|confusor",
      "Las conductas de salud son una vía ___, pero muy potente.|indirecta|directa|inversa",
      "Si un infarto vuelve a alguien más irritable, la flecha va de la enfermedad a la ___.|personalidad|conducta|evaluación",
      "En la predisposición constitucional, la asociación entre rasgo y enfermedad sería real, pero no ___.|causal|fiable|significativa",
      "Un estudio que mide la salud solo con ___ puede confundir sentirse enfermo con estar enfermo.|autoinforme|analíticas|diagnósticos"
    ],
    tf: [
      "El neuroticismo se asocia con más quejas somáticas y, en la misma medida, con indicadores objetivos de enfermedad.|F|Se asocia mucho menos con indicadores objetivos: refleja en parte conducta de enfermedad (Watson y Pennebaker, 1989).",
      "Un mismo rasgo puede actuar a la vez por varias vías hacia la enfermedad.|V",
      "En la vía de predisposición constitucional, el rasgo causa la enfermedad a través de las hormonas.|F|Una tercera variable biológica produce a la vez rasgo y enfermedad: la asociación es real, pero no causal.",
      "Un rasgo eleva o reduce el riesgo medio de un grupo, pero no decide el destino de una persona.|V"
    ],
    q: [
      "Marta, muy hostil, interpreta como ataques los comentarios neutros de sus compañeros. ¿Qué componente del modelo transaccional ilustra?|La evaluación|La exposición|El afrontamiento|Interpretar como ataque lo neutro es evaluación. Vivir más discusiones en el trabajo sería exposición.",
      "Un paciente ansioso acude a menudo al médico por molestias leves, aunque las pruebas salen normales. ¿Qué vía lo explica mejor?|La conducta de enfermedad|La hiperreactividad fisiológica|La predisposición constitucional|La personalidad influye en cómo se perciben y comunican los síntomas y en cuándo se busca ayuda.",
      "¿Qué vía supone que la personalidad causa la enfermedad mediante respuestas cardiovasculares y hormonales repetidas?|La hiperreactividad|Las conductas de salud|La conducta de enfermedad|Esas respuestas intensas o duraderas, repetidas durante años, desgastarían el organismo.",
      "¿Qué defendió Lahey (2009) sobre el neuroticismo?|Que es un problema de salud pública|Que solo predice la cardiopatía coronaria|Que protege frente al cáncer|Se asocia con muchos trastornos mentales y físicos y con costes sanitarios altos, como otros factores de riesgo clásicos."
    ],
    inc: [
      "Sobre personalidad y enfermedad|Los datos son sobre todo experimentales|Las vías propuestas no se excluyen entre sí|La enfermedad puede cambiar la personalidad|Casi todos los datos son correlacionales y de tamaño pequeño o moderado."
    ],
    seq: [],
    cls: [] },
  { t: "El estrés: estímulo, respuesta o transacción",
    tip: "La palabra estrés tiene tres sentidos. Para Selye (1956) es una respuesta inespecífica del organismo, el síndrome general de adaptación. Para Holmes y Rahe (1967) es un estímulo: los sucesos vitales que exigen reajuste. Para Lazarus y Folkman (1984) es una relación entre persona y ambiente que la persona evalúa como amenazante o desbordante para sus recursos, y es el enfoque que da sentido a las diferencias individuales.",
    v: [
      "Síndrome general de adaptación=Respuesta de estrés en tres fases descrita por Selye (1956)",
      "Agotamiento=Fase en que los recursos se acaban y aparecen el daño y la enfermedad",
      "SRRS=Escala de Reajuste Social de Holmes y Rahe, con 43 sucesos vitales",
      "Unidades de cambio vital=Valor de cada suceso según el reajuste que exige, con 100 como máximo",
      "Contrariedades cotidianas=Atascos o discusiones menores, tan ligados a la salud como los grandes sucesos",
      "Evaluación primaria=Juicio de qué significa la situación: irrelevante, benigna o estresante",
      "Evaluación secundaria=Valoración de los recursos y opciones disponibles para afrontar",
      "Reevaluación=Nueva valoración de la situación con la información que llega"
    ],
    g: [
      "En la Escala de Reajuste Social, la ___ recibió el valor máximo de 100.|muerte del cónyuge|pérdida del empleo|ruptura de pareja",
      "La SRRS incluye sucesos positivos, como casarse, porque lo que pesa es el ___.|cambio|significado|malestar",
      "Las contrariedades cotidianas se relacionan con la salud tanto o más que los grandes sucesos, según ___ et al. (1981).|Kanner|Rahe|Selye",
      "En la evaluación primaria, una situación estresante vista como oportunidad de ganar algo es un ___.|desafío|daño|amenaza",
      "Ante lo incontrolable suele servir más el afrontamiento centrado en la ___.|emoción|problema|evaluación"
    ],
    tf: [
      "Selye concibió el estrés como una relación entre la persona y el ambiente evaluada por la persona.|F|Es la visión transaccional de Lazarus y Folkman. Selye lo concibió como una respuesta inespecífica del organismo.",
      "Según Lazarus y Folkman, la evaluación secundaria va siempre después de la primaria.|F|Interactúan y no siguen necesariamente un orden: saber que se tienen recursos puede hacer ver un reto donde había amenaza.",
      "El enfoque de Holmes y Rahe trata igual a todas las personas ante un mismo suceso.|V",
      "En la fase de resistencia, el organismo mantiene la activación para hacer frente al agente, con un coste.|V"
    ],
    q: [
      "Dos opositores reciben la misma fecha de examen. Uno la vive como amenaza y otro como desafío porque confía en su preparación. ¿Qué enfoque explica la diferencia?|La transacción de Lazarus|La respuesta de Selye|El estímulo de Holmes y Rahe|El mismo estímulo se evalúa de forma distinta según la persona y sus recursos, algo que solo recoge el enfoque transaccional.",
      "¿Qué límite principal tiene el enfoque del estrés como respuesta?|Ignora las diferencias entre personas|Supone el mismo impacto para todos|Es difícil de medir de forma objetiva|No explica por qué una misma situación agota a unos y apenas afecta a otros. Los otros límites son de Holmes y Rahe y de Lazarus.",
      "Tras un despido, una persona se pregunta si tiene ahorros, contactos y opciones para salir adelante. ¿Qué proceso realiza?|La evaluación secundaria|La evaluación primaria|El afrontamiento|La secundaria valora los recursos y opciones disponibles. La primaria valora qué supone la situación para uno.",
      "Ante un problema que no puede cambiar, un estudiante se centra en regular su malestar. ¿Qué afrontamiento usa?|Centrado en la emoción|Centrado en el problema|Centrado en la evaluación|Ante lo incontrolable suele servir más regular la emoción. Ante lo controlable, actuar sobre el problema."
    ],
    inc: [
      "Sobre las concepciones del estrés|La SRRS solo incluye sucesos negativos|Selye describió alarma, resistencia y agotamiento|Lazarus distingue evaluación primaria y secundaria|La SRRS incluye sucesos positivos, como casarse, porque lo que pesa es el cambio."
    ],
    seq: [
      "Síndrome general de adaptación de Selye|Alarma>Resistencia>Agotamiento"
    ],
    cls: [
      "Concepción del estrés|Respuesta: Selye (1956); síndrome general de adaptación|Estímulo: Holmes y Rahe (1967); Escala de Reajuste Social; sucesos vitales|Transacción: Lazarus y Folkman (1984); evaluación primaria y secundaria; reevaluación"
    ] },
  { t: "Los tipos A, C y D",
    tip: "El tipo A de Friedman y Rosenman (1959) combina competitividad, urgencia temporal e impaciencia, y hostilidad. Tras el apoyo inicial del WCGS llegaron resultados negativos, y los metaanálisis señalaron que solo la hostilidad conserva valor predictivo. El tipo C, cooperador e inhibidor de la ira, se asoció al cáncer, pero no tiene apoyo prospectivo. El tipo D de Denollet, afectividad negativa más inhibición social, está en debate porque sus efectos se reducen.",
    v: [
      "Tipo A=Competitividad, urgencia temporal e impaciencia, y hostilidad",
      "Hostilidad=Componente del tipo A que conserva valor predictivo de la cardiopatía",
      "WCGS=3.154 varones seguidos 8,5 años, con el doble de riesgo coronario en los tipo A",
      "Jenkins Activity Survey=Cuestionario usado, junto a la entrevista, para evaluar el tipo A",
      "Tipo C=Perfil cooperador, apaciguador, poco asertivo y que inhibe las emociones negativas",
      "Tipo D=Afectividad negativa más inhibición social, según Denollet",
      "DS14=Escala breve con la que se mide la personalidad «distressed»",
      "Inhibición social=No expresar las emociones negativas por miedo al rechazo"
    ],
    g: [
      "Chida y Steptoe (2009) estimaron que la hostilidad y la ira elevan el riesgo coronario en torno a un ___.|19 %|50 %|100 %",
      "El seguimiento a 22 años del WCGS lo publicaron Ragland y ___ en 1988.|Brand|Rosenman|Steptoe",
      "Petticrew, Lee y McKee (2012) documentaron financiación de la industria ___ en la investigación sobre el tipo A.|tabaquera|farmacéutica|alimentaria",
      "El metaanálisis de ___ et al. (2012) halló efectos del tipo D menores en los estudios más recientes.|Grande|Miller|Chida",
      "El patrón tipo C se asoció sobre todo con el ___.|cáncer|infarto|ictus"
    ],
    tf: [
      "La urgencia temporal es el componente del tipo A con mayor valor predictivo de la cardiopatía.|F|Es la trampa típica: los metaanálisis señalan la hostilidad (Miller et al., 1996), no la prisa ni la competitividad.",
      "El estudio MRFIT, con varones de alto riesgo, no encontró la asociación entre el tipo A y la cardiopatía.|V",
      "Los grandes estudios prospectivos confirman que el tipo C predispone al cáncer.|F|No lo apoyan: Nakaya et al. (2010) y Jokela et al. (2014) no hallaron que la personalidad predijera el cáncer.",
      "En la entrevista estructurada del tipo A importaba tanto lo que se decía como el modo de decirlo.|V"
    ],
    q: [
      "Un directivo habla deprisa, interrumpe, compite en todo y reacciona con irritación y desconfianza. ¿Qué rasgo suyo se asocia más al riesgo coronario?|La hostilidad|La prisa|La competitividad|Del patrón tipo A, solo la hostilidad conserva valor predictivo (Miller et al., 1996).",
      "Un paciente cardiaco tiende a preocuparse y a sentirse triste, pero no lo expresa por miedo al rechazo. ¿Qué patrón describe?|Tipo D|Tipo C|Tipo A|Afectividad negativa más inhibición social es el tipo D de Denollet. El tipo C inhibe sobre todo la ira y se estudió con el cáncer.",
      "¿Qué sugiere que los efectos del tipo D sean menores en los estudios más recientes y grandes?|Que la asociación estaba sobreestimada|Que el tipo D ha cambiado con el tiempo|Que la DS14 ha perdido fiabilidad|Las muestras pequeñas y los primeros estudios tienden a exagerar los efectos (Grande et al., 2012).",
      "¿Qué lección metodológica común dejan los tipos A, C y D?|Un patrón amplio puede mezclar componentes|Los patrones amplios predicen mejor|Los primeros estudios suelen subestimar|Un patrón amplio puede mezclar componentes inocuos con uno tóxico, y los primeros estudios tienden a exagerar los efectos."
    ],
    inc: [
      "Sobre los patrones de conducta|El tipo D se asoció con el cáncer en estudios prospectivos|El tipo A se evaluaba con una entrevista estructurada|El tipo C inhibe las emociones negativas, sobre todo la ira|El tipo D se estudió sobre todo en pacientes cardiacos, en relación con su pronóstico."
    ],
    seq: [],
    cls: [
      "Patrón|Tipo A: competitividad; urgencia temporal; hostilidad; cardiopatía coronaria|Tipo C: cooperación; inhibición de la ira; desesperanza; cáncer|Tipo D: afectividad negativa; inhibición social; DS14; pronóstico cardiaco"
    ] },
  { t: "Rasgos que protegen: responsabilidad, optimismo y bienestar",
    tip: "La responsabilidad es el rasgo protector mejor documentado: se asocia con la longevidad (en torno a ,11) sobre todo a través de las conductas de salud, y sus efectos son comparables a los del nivel socioeconómico y el CI. Kobasa propuso la personalidad resistente (compromiso, control y reto), y Antonovsky, el sentido de coherencia. El optimismo se asocia con mejor salud, y la personalidad explica una parte importante del bienestar.",
    v: [
      "Friedman et al. (1993)=Con el estudio de Terman, los niños más responsables vivieron más años",
      "Kern y Friedman (2008)=Metaanálisis con una correlación de ,11 entre responsabilidad y longevidad",
      "Bogg y Roberts (2004)=194 estudios: los responsables fuman, beben y conducen con menos riesgo",
      "The power of personality=Revisión de Roberts et al. (2007) sobre el peso de los rasgos en la vida",
      "Personalidad resistente=Compromiso, control y reto como actitud protectora (Kobasa, 1979)",
      "Sentido de coherencia=Percibir la vida como comprensible, manejable y con significado",
      "Optimismo disposicional=Expectativa general de que las cosas saldrán bien",
      "Anglim et al. (2020)=Más de 300.000 personas: patrón de rasgos según el tipo de bienestar"
    ],
    g: [
      "Jokela et al. (2013), con unas 76.000 personas, confirmaron que la baja responsabilidad predice más ___.|mortalidad|longevidad|bienestar",
      "En la personalidad resistente, ver el cambio como oportunidad es el componente de ___.|reto|control|compromiso",
      "Una explicación del efecto del optimismo es que los optimistas afrontan los problemas con más ___.|flexibilidad|intensidad|rapidez",
      "Según Anglim et al. (2020), el predictor positivo más fuerte del bienestar subjetivo es la ___.|extraversión|responsabilidad|apertura",
      "La correlación de ,11 entre responsabilidad y longevidad es pequeña para una persona, pero relevante en una ___.|población|familia|consulta"
    ],
    tf: [
      "La personalidad resistente, de Antonovsky, se compone de comprensibilidad, manejabilidad y significado.|F|Es la trampa típica: la resistencia es de Kobasa (compromiso, control y reto). Eso describe el sentido de coherencia.",
      "Roberts et al. (2007) concluyeron que los efectos de los rasgos sobre la mortalidad son comparables a los del nivel socioeconómico y el CI.|V",
      "Está bien comprobado que la personalidad resistente predice indicadores objetivos de salud.|F|Las personas resistentes informan de mejor salud, pero falta comprobar que eso se traduzca en indicadores objetivos.",
      "En el bienestar psicológico, la responsabilidad es un predictor destacado.|V"
    ],
    q: [
      "Una investigadora quiere saber por qué los adultos responsables viven más. Según Bogg y Roberts (2004), ¿qué vía conviene medir?|Sus conductas de salud|Su reactividad cardiovascular|Su sentido de coherencia|Las personas responsables fuman, beben y conducen con menos riesgo, y hacen más ejercicio y comen mejor.",
      "Un trabajador se implica en lo que hace, cree poder influir en los acontecimientos y ve los cambios como oportunidades. ¿Qué concepto lo describe?|Personalidad resistente|Sentido de coherencia|Optimismo disposicional|Compromiso, control y reto forman la personalidad resistente de Kobasa (1979). No hay que confundirla con Antonovsky.",
      "¿Por qué el neuroticismo se asocia con más riesgo y menos longevidad?|Más exposición al estrés y peor afrontamiento|Más reactividad ante conflictos interpersonales|Peores conductas de salud por impulsividad|Por la mayor exposición al estrés y el afrontamiento centrado en la emoción menos eficaz. La reactividad se atribuye a la hostilidad.",
      "¿Qué rasgo es el predictor negativo más fuerte del bienestar subjetivo según Anglim et al. (2020)?|El neuroticismo|La introversión|La baja responsabilidad|El neuroticismo es el predictor negativo más fuerte, y la extraversión, el positivo más fuerte."
    ],
    inc: [
      "Sobre los rasgos protectores|La correlación entre responsabilidad y longevidad ronda ,50|Los niños de Terman más responsables vivieron más|El optimismo se asocia con mejor salud de forma consistente|Kern y Friedman (2008) estimaron en torno a ,11: pequeña para una persona, relevante en una población."
    ],
    seq: [],
    cls: [
      "Relación con la salud y la longevidad|Rasgo protector: responsabilidad; optimismo disposicional|Rasgo de riesgo: neuroticismo; hostilidad"
    ] }
] },
{ n: 16, t: "En el aula y en el trabajo", cap: 6, pir: "media", mods: [
  { t: "Qué predice el rendimiento académico",
    tip: "La capacidad cognitiva es el mejor predictor individual del rendimiento académico: en torno a ,8 a nivel latente en Deary et al. (2007) y ,54 con las notas en Roth et al. (2015). La responsabilidad es el rasgo más asociado (en torno a ,22) y en la universidad se acerca a la inteligencia por restricción de rango. El grit apenas se distingue de la responsabilidad, el autocontrol tiene un apoyo más sólido y la interacción aptitud-tratamiento dio pocos resultados replicables.",
    v: [
      "Deary et al. (2007)=Unos 70.000 escolares ingleses: g a los 11 y exámenes a los 16, en torno a ,8",
      "Roth et al. (2015)=Metaanálisis con una correlación de ,54 entre inteligencia y notas escolares",
      "Poropat (2009)=Correlación de en torno a ,22 entre responsabilidad y rendimiento",
      "Grit=Perseverancia en el esfuerzo y consistencia de intereses a largo plazo",
      "Credé, Tynan y Harms=Metaanálisis de 2017 con 66.807 personas que rebajó las expectativas del grit",
      "Cohorte de Dunedin=1.037 personas seguidas desde el nacimiento por Moffitt et al. (2011)",
      "Autorregulación=Planificar, supervisar y ajustar el propio estudio (Zimmerman, 2000)",
      "Aptitud-tratamiento=Interacción en que la eficacia de un método depende de las aptitudes del alumno"
    ],
    g: [
      "Según Credé, Tynan y Harms, la correlación del grit con la responsabilidad fue de ___.|,84|,18|,54",
      "De los dos componentes del grit, predice mejor el rendimiento la ___.|perseverancia|consistencia|motivación",
      "En la universidad, la responsabilidad se acerca a la inteligencia como predictor por la ___ de rango.|restricción|ampliación|inversión",
      "Duckworth y Seligman (2005) hallaron que la ___ de adolescentes predecía sus notas más allá del CI.|autodisciplina|apertura|extraversión",
      "La interacción aptitud-tratamiento más sólida es que los alumnos con menos conocimientos previos se benefician de una enseñanza más ___.|estructurada|abierta|individual"
    ],
    tf: [
      "En el metaanálisis de Credé et al. (2017), la consistencia de intereses predijo mejor que la perseverancia.|F|Es al revés: la perseverancia en el esfuerzo predice mejor que la consistencia de intereses.",
      "La apertura a la experiencia muestra una relación positiva con el rendimiento, menor que la de la responsabilidad.|V",
      "En la cohorte de Dunedin, el autocontrol infantil predijo la salud, la situación económica y la delincuencia a los 32 años.|V",
      "Cronbach y Snow hallaron muchas interacciones aptitud-tratamiento replicables, en línea con los estilos de aprendizaje.|F|Se hallaron pocas interacciones replicables, y la idea es muy distinta de los estilos de aprendizaje, que no tienen apoyo."
    ],
    q: [
      "En una facultad muy selectiva, la responsabilidad predice las notas casi tanto como la inteligencia. ¿Qué lo explica sobre todo?|Los alumnos varían menos en capacidad|La inteligencia deja de influir a los 18|La responsabilidad sube al entrar|A la universidad llegan sobre todo estudiantes capaces: es restricción de rango, y pesa más quién estudia con constancia.",
      "Un colegio quiere seleccionar alumnos para un programa porque «el grit predice el éxito mejor que el CI». ¿Qué dice la evidencia?|Que el grit predice menos que el CI|Que el grit y el CI predicen igual|Que el grit supera al CI en la universidad|El grit correlacionó ,18 con el rendimiento, muy por debajo de la inteligencia, y ,84 con la responsabilidad.",
      "¿Qué correlación aproximada estimaron Roth et al. (2015) entre inteligencia y notas escolares?|,54|,22|,18|La de ,22 corresponde a la responsabilidad (Poropat, 2009), y la de ,18, al grit (Credé et al., 2017).",
      "¿Qué concluyeron Credé, Tynan y Harms sobre la estructura del grit?|No se confirmó su orden superior|Se confirmó su orden superior|Es independiente de la responsabilidad|No se confirmó la estructura de orden superior propuesta, y el grit se solapa mucho con la responsabilidad."
    ],
    inc: [
      "Sobre los predictores del rendimiento|El grit es claramente distinto de la responsabilidad|La capacidad cognitiva es el mejor predictor individual|El autocontrol predice las notas más allá del CI|El grit correlacionó ,84 con la responsabilidad: parece en gran parte responsabilidad con otro nombre."
    ],
    seq: [],
    cls: [] },
  { t: "Autoconcepto, altas capacidades y efecto de la escuela",
    tip: "Shavelson, Hubner y Stanton (1976) describieron un autoconcepto multidimensional y jerárquico. Marsh lo desarrolló con el modelo de efectos recíprocos y el efecto del pez grande en un estanque pequeño, que afecta al autoconcepto y no directamente a la capacidad. Terman y el SMPY estudiaron las altas capacidades. Ritchie y Tucker-Drob (2018) mostraron que cada año de escuela aumenta el CI, y el efecto Pigmalión es real pero pequeño.",
    v: [
      "Shavelson, Hubner y Stanton=Propusieron en 1976 un autoconcepto multidimensional y jerárquico",
      "Efectos recíprocos=Autoconcepto académico y rendimiento se influyen mutuamente en el tiempo",
      "Pez grande, estanque pequeño=A igual capacidad, peor autoconcepto académico en centros de alto nivel",
      "Genetic Studies of Genius=Estudio de Terman iniciado en 1921 con unos 1.500 niños de CI muy alto",
      "SMPY=Seguimiento de adolescentes con capacidad matemática excepcional (Lubinski y Benbow)",
      "Edad de corte=Diseño que compara niños de casi la misma edad con un curso más o menos",
      "Efecto Pigmalión=Mejora de los alumnos de quienes se dijo al profesorado que florecerían",
      "Jussim y Harber (2005)=Efectos de las expectativas reales pero pequeños, que tienden a disiparse"
    ],
    g: [
      "Con la edad de corte de entrada a la escuela, un año más de escolarización supone unos ___ puntos de CI.|5,2|1,2|2",
      "Ritchie y Tucker-Drob (2018) reunieron 142 efectos con más de ___ personas.|600.000|60.000|6.000",
      "Según Jussim y Harber, las expectativas docentes suelen ser ___.|exactas|erróneas|negativas",
      "El SMPY lo inició ___ y lo continuaron Lubinski y Benbow.|Stanley|Terman|Marsh",
      "El efecto del pez grande en un estanque pequeño se debe a la ___ con compañeros muy capaces.|comparación|competición|convivencia"
    ],
    tf: [
      "El efecto del pez grande en un estanque pequeño reduce directamente el rendimiento del alumno.|F|Es la trampa típica: afecta al autoconcepto académico, no directamente a la capacidad ni al rendimiento.",
      "El estudio de Terman desmintió el estereotipo del niño brillante e inadaptado.|V",
      "Según el SMPY, dentro del grupo de alta capacidad las diferencias de capacidad ya no importan.|F|Siguen importando: incluso entre los más capaces, más capacidad se asocia con más logros.",
      "Queda abierto si las ganancias de CI por escolarización reflejan cambios en g o en capacidades más específicas.|V"
    ],
    q: [
      "Lucía, la mejor en matemáticas de su clase, pasa a un instituto muy selectivo, queda a mitad de la tabla y empieza a pensar que no se le dan bien. ¿Qué ha cambiado sobre todo?|Su autoconcepto académico|Su capacidad matemática|Su rendimiento real|Es el efecto del pez grande en un estanque pequeño: la comparación con compañeros muy buenos rebaja el autoconcepto.",
      "¿Por qué las reformas que alargan la escolaridad obligatoria sirven para estudiar el efecto de la escuela?|Afectan a todos, no solo a los capaces|Comparan a niños de casi la misma edad|Controlan el CI medido antes de la escuela|Evitan que la relación se deba a que los más capaces estudian más años. Comparar niños de casi la misma edad es la edad de corte.",
      "¿Qué informaron Rosenthal y Jacobson (1968) sobre las expectativas del profesorado?|Mejoraban más los alumnos señalados como prometedores|Las expectativas docentes no tenían ningún efecto|Empeoraban los alumnos señalados como prometedores|Es el efecto Pigmalión. Jussim y Harber (2005) lo ven real pero pequeño y con tendencia a disiparse.",
      "¿Qué afirma el modelo de efectos recíprocos de Marsh?|Notas y autoconcepto se influyen mutuamente|Solo las notas determinan el autoconcepto académico|Solo el autoconcepto determina las notas siguientes|Sacar buenas notas mejora el autoconcepto, y un autoconcepto más alto favorece las notas siguientes."
    ],
    inc: [
      "Sobre las expectativas del profesor|Crean el rendimiento más que reflejarlo|Sus efectos tienden a disiparse con el tiempo|Sus efectos son reales pero pequeños|Las expectativas suelen ser exactas: predicen el rendimiento porque reflejan lo que el profesor ve, no porque lo creen."
    ],
    seq: [],
    cls: [
      "Diseño de Ritchie y Tucker-Drob|Control del CI previo: unos 1,2 puntos por año|Reformas de la escolaridad obligatoria: unos 2 puntos por año; afectan a todos|Edad de corte: unos 5,2 puntos por año; niños de casi la misma edad"
    ] },
  { t: "Selección de personal: qué predice el desempeño",
    tip: "La validez operativa es la correlación corregida entre un método y el desempeño posterior. Schmidt y Hunter (1998) dieron ,51 a las pruebas de capacidad mental general, pero Sackett et al. (2022) mostraron correcciones excesivas por restricción de rango: la entrevista estructurada queda en ,42 y las pruebas cognitivas en ,31, un dato todavía discutido. La responsabilidad predice en todas las ocupaciones, y la inteligencia emocional obtiene solo ,22.",
    v: [
      "Validez operativa=Correlación corregida entre la puntuación en un método y el desempeño",
      "Schmidt y Hunter (1998)=Metaanálisis que dio ,51 a las pruebas de capacidad mental general",
      "Sackett et al. (2022)=Reanálisis que halló excesivas las correcciones por restricción de rango",
      "Entrevista estructurada=Preguntas fijas ligadas al puesto y puntuadas con criterios previos",
      "Barrick y Mount (1991)=La responsabilidad predice el desempeño en todas las ocupaciones",
      "Falseamiento=Presentarse en un autoinforme mejor de lo que uno es",
      "Elección forzosa=Formato en el que se elige entre afirmaciones igual de deseables",
      "Judge, Heller y Mount (2002)=Neuroticismo como predictor negativo más claro de la satisfacción laboral"
    ],
    g: [
      "Según Sackett et al. (2022), la validez de las pruebas de capacidad cognitiva es de ___.|,31|,51|,42",
      "Según Sackett et al. (2022), la validez de los tests de integridad baja de ,41 a ___.|,31|,22|,42",
      "Con la nueva estimación, el método de selección más válido es la entrevista ___.|estructurada|libre|grupal",
      "Barrick y Mount hallaron que la extraversión predice el desempeño en puestos de ventas y de ___.|dirección|contabilidad|investigación",
      "Revisiones recientes sitúan la validez de la responsabilidad en torno a ___.|,20-,28|,40-,50|,05-,10"
    ],
    tf: [
      "La validez de ,51 de las pruebas cognitivas es hoy un dato indiscutible.|F|Sackett et al. (2022) la rebajan a ,31, y Ones y otros cuestionan esas correcciones: lo prudente es hablar de validez moderada.",
      "Sackett et al. (2022) señalaron que se corregía como si los candidatos se hubieran seleccionado con el propio test.|V",
      "La extraversión es el mejor predictor general del desempeño en todas las ocupaciones.|F|Es la responsabilidad (Barrick y Mount, 1991). La extraversión predice solo en puestos concretos, como ventas y dirección.",
      "Incluso tras la revisión de 2022, la inteligencia emocional queda por debajo de la capacidad cognitiva en selección.|V"
    ],
    q: [
      "Una empresa duda entre una entrevista libre y otra con preguntas fijas ligadas al puesto y criterios de puntuación previos. Según Sackett et al. (2022), ¿qué le conviene?|La entrevista con preguntas fijas|La entrevista libre y espontánea|Ambas tienen la misma validez|La entrevista estructurada es, con ,42, el método más válido según la revisión de 2022.",
      "En un cuestionario de selección, los candidatos tienden a presentarse más responsables de lo que son. ¿Qué respuesta técnica existe?|Formatos de elección forzosa|Aumentar el número de ítems|Corregir por restricción de rango|En la elección forzosa hay que elegir entre afirmaciones igual de deseables, lo que dificulta el falseamiento.",
      "¿Por qué Sackett et al. (2022) rebajaron la validez de las pruebas cognitivas?|Por correcciones de rango excesivas|Por usar muestras más pequeñas|Por cambios en los tests actuales|Las correcciones por restricción de rango de los metaanálisis anteriores eran excesivas.",
      "Según Sackett et al. (2022), ¿qué método iguala la validez de las pruebas de capacidad cognitiva?|Los tests de integridad|La entrevista estructurada|La inteligencia emocional|Ambos quedan en ,31. La entrevista estructurada obtiene ,42, y la inteligencia emocional, ,22."
    ],
    inc: [
      "Sobre la selección de personal|La extraversión predice en todas las ocupaciones|La responsabilidad predice en todas las ocupaciones|El neuroticismo predice menos satisfacción laboral|La extraversión solo predice en puestos concretos, como ventas y dirección (Barrick y Mount, 1991)."
    ],
    seq: [],
    cls: [
      "Validez según Sackett et al. (2022)|,42: entrevista estructurada|,31: pruebas de capacidad cognitiva; tests de integridad|,22: inteligencia emocional"
    ] },
  { t: "Liderazgo, tríada oscura y malos usos de los tests",
    tip: "En Judge et al. (2002), los Cinco Grandes alcanzan una correlación múltiple de ,48 con el liderazgo, y la extraversión es el rasgo más asociado, más con surgir como líder que con ser eficaz. La tríada oscura de Paulhus y Williams (2002) reúne narcisismo, maquiavelismo y psicopatía subclínica. Entre los malos usos de los tests destacan el MBTI para seleccionar, dar por cerrados datos discutidos, ignorar el falseamiento y aplicar resultados de grupo a una persona.",
    v: [
      "Judge et al. (2002)=Metaanálisis sobre Cinco Grandes y liderazgo, con correlación múltiple de ,48",
      "Surgir como líder=Que el grupo te vea como tal, más ligado a la extraversión que ser eficaz",
      "Paulhus y Williams (2002)=Agruparon tres rasgos socialmente aversivos de nivel subclínico",
      "Subclínico=Presente en la población general sin llegar a trastorno",
      "Maquiavelismo=Manipulación fría y estratégica de los demás",
      "Psicopatía subclínica=Impulsividad, búsqueda de sensaciones y escasa empatía o remordimiento",
      "Narcisismo=Grandiosidad, sensación de merecer más y necesidad de admiración",
      "MBTI=Tipología de 16 tipos sin validez para predecir el desempeño"
    ],
    g: [
      "En Judge et al. (2002), la extraversión correlacionó con el liderazgo en torno a ___.|,31|,48|,11",
      "El MBTI clasifica en tipos a partir de dimensiones que en realidad son ___.|continuas|discretas|cerradas",
      "La tríada oscura fue propuesta por Paulhus y ___ en 2002.|Williams|Judge|Mount",
      "La personalidad resistente se ha estudiado como protector frente al ___ profesional.|desgaste|ascenso|absentismo",
      "Una correlación de ,30 mejora las decisiones sobre muchos candidatos, pero se equivoca a menudo en cada caso ___.|individual|grupal|extremo"
    ],
    tf: [
      "La relación de los rasgos con el liderazgo es más fuerte con ser eficaz que con surgir como líder.|F|Es al revés: es más fuerte con surgir como líder. Hablar mucho y con seguridad ayuda a que te elijan, no a dirigir bien.",
      "El neuroticismo mostró una relación negativa con el liderazgo en Judge et al. (2002).|V",
      "El neuroticismo forma parte de la tríada oscura junto con el narcisismo y el maquiavelismo.|F|El tercer componente es la psicopatía subclínica (Paulhus y Williams, 2002), no el neuroticismo.",
      "Las propias guías de la editorial del MBTI desaconsejan usarlo para decidir contrataciones.|V"
    ],
    q: [
      "Una empresa descarta a una candidata a un puesto comercial porque su tipo MBTI es «introvertido». ¿Qué error principal comete?|Usar una prueba sin validez predictiva|Ignorar el falseamiento del autoinforme|Fiarse de una entrevista estructurada|Ha usado una prueba sin validez predictiva, ha convertido una dimensión continua en etiqueta e ignorado métodos mejores.",
      "¿Por qué interesa la tríada oscura en la empresa?|Ayuda a ascender y perjudica la conducta|Predice el desempeño en todos los puestos|Indica trastornos de personalidad graves|Puede favorecer el ascenso a corto plazo y, a la vez, conductas contraproducentes: ayuda a surgir y perjudica a ser eficaz.",
      "Un compañero habla mucho y con seguridad en las reuniones y el equipo lo propone como coordinador. ¿Qué predice mejor su extraversión?|Que surja como líder|Que dirija con eficacia|Que evite el desgaste|La extraversión se asocia más con surgir como líder que con ser eficaz en el liderazgo.",
      "¿Qué problema del MBTI explica que una persona pueda cambiar de tipo al repetir la prueba?|Convierte dimensiones continuas en tipos|Mide la tríada oscura y no los rasgos normales|Exige un entrevistador con formación clínica|Dos personas casi iguales pueden recibir tipos opuestos, y una misma persona puede cambiar de tipo al repetir la prueba."
    ],
    inc: [
      "Sobre los malos usos de los tests|Una correlación de ,30 acierta en cada caso individual|El MBTI no ha mostrado validez para predecir el desempeño|Clasificar por estilos de aprendizaje carece de apoyo|Mejora las decisiones sobre muchos candidatos, pero se equivoca a menudo en cada caso individual."
    ],
    seq: [],
    cls: [
      "Rasgo de la tríada oscura|Narcisismo: grandiosidad; necesidad de admiración|Maquiavelismo: manipulación fría; estrategia|Psicopatía subclínica: impulsividad; escasa empatía o remordimiento"
    ] }
] }
);

SP.register(window.COURSE);
})({});
