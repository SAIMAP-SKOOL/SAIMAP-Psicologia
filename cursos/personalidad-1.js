(function(window){
// SAIMAP Psicología · Personalidad y Diferencias Individuales I
// Contenido alineado con el temario SAIMAP «Personalidad y Diferencias Individuales I» (v1.0, noviembre de 2026).
window.COURSE = {
  id: "personalidad-1",
  title: "Personalidad y Diferencias Individuales I",
  short: "Personalidad I",
  area: "Personalidad y evaluación",
  rutas: { grado: { curso: 2 }, pir: { bloque: "Evaluación y personalidad" } },
  temario: "Personalidad-y-Diferencias-Individuales-I_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Qué entendemos por personalidad y cómo empezó a estudiarse", from: 1, to: 2 },
    { n: 2, t: "Tres miradas sobre la persona: psicoanálisis, humanismo y aprendizaje", from: 3, to: 6 },
    { n: 3, t: "Cómo se investiga la personalidad: datos, diseños y evidencia", from: 7, to: 8 },
    { n: 4, t: "Los mapas de rasgos: de Cattell a los Cinco Grandes", from: 9, to: 11 },
    { n: 5, t: "Raíces biológicas, coherencia y cambio", from: 12, to: 14 },
    { n: 6, t: "Lo que nos mueve: motivos, metas y autorregulación", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Personalidad I · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "Qué es la personalidad", cap: 1, pir: "media", mods: [
  { t: "Definir la personalidad: de Allport a hoy",
    tip: "En psicología todas las personas tienen personalidad y ningún perfil es en sí mejor que otro: interesa cómo es cada una y por qué. No hay una definición única. Allport subraya la organización interna y la singularidad, Cattell la predicción, Eysenck la estabilidad y la base biológica, y Pervin la integración. El núcleo compartido son los patrones relativamente estables y distintivos de pensar, sentir y actuar, con causas genéticas y ambientales.",
    v: [
      "Persona=Término latino para la máscara de los actores del teatro clásico",
      "Organización dinámica=En Allport, elementos relacionados entre sí que además cambian",
      "Sistemas psicofísicos=Expresión de Allport que rechaza separar mente y cuerpo",
      "Ajustes únicos=Final de la definición de Allport (1937) que recoge la singularidad",
      "Sector conativo=En el esquema de Eysenck, el carácter",
      "Sector afectivo=En el esquema de Eysenck, el temperamento",
      "Uso valorativo=Decir «tiene mucha personalidad» como elogio, como si fuera una cantidad",
      "Pervin=Autor que la define como organización de cogniciones, afectos y conductas"
    ],
    g: [
      "Para Cattell, la personalidad es lo que permite ___ lo que hará una persona en una situación dada.|predecir|explicar|describir",
      "En su revisión de ___, Allport cambió el final de su definición por «su conducta y pensamiento característicos».|1961|1937|1950",
      "Eysenck situó la inteligencia en el sector ___ de la personalidad.|cognitivo|conativo|afectivo",
      "La palabra latina persona designaba la ___ de los actores del teatro clásico.|máscara|voz|túnica",
      "En la definición de Allport, «dentro del individuo» sitúa la personalidad en la persona y no en la mirada de ___.|los demás|la cultura|la familia"
    ],
    tf: [
      "En psicología, decir que alguien «no tiene personalidad» describe técnicamente un perfil poco distintivo.|F|Ese uso es valorativo. En psicología todas las personas tienen personalidad y ningún perfil es en sí mejor que otro.",
      "Eysenck organizó la personalidad en cuatro sectores determinados por la herencia y el ambiente.|V",
      "La fórmula según la cual la respuesta es función de la situación y de la persona procede de Allport (1937).|F|Es de Cattell, que la resumió como R en función de S y P. La de Allport subraya la organización interna.",
      "En el núcleo actual del concepto, «relativamente estables» indica que los patrones se mantienen, pero no son inmutables.|V"
    ],
    q: [
      "Marta no habla en la cena de empresa de este viernes. ¿Qué concluiría un psicólogo de la personalidad solo con ese dato?|Que es una conducta suelta, no un patrón|Que es introvertida, porque no participó|Que tiene un temperamento poco reactivo|Una conducta aislada dice poco. Se estudian regularidades, como escuchar más que hablar en casi todas las reuniones con desconocidos.",
      "¿Qué subraya sobre todo la definición de Eysenck?|Estabilidad y base biológica|Organización interna y singularidad|Predicción de la conducta|Eysenck la definió como una organización más o menos estable del carácter, el temperamento, el intelecto y el físico.",
      "Pervin define la personalidad como una organización compleja de…|cogniciones, afectos y conductas|carácter, temperamento e intelecto|sistemas psicofísicos únicos|Para Pervin, esa organización da orientación y coherencia a la vida. La segunda opción remite a Eysenck, y la tercera, a Allport.",
      "En el núcleo actual de la definición, ¿qué aporta el término «distintivos»?|Que diferencian a unas personas de otras|Que se mantienen a lo largo del tiempo|Que abarcan cognición, emoción y conducta|«Relativamente estables» alude al tiempo, y «pensar, sentir y actuar», a los dominios. «Distintivos» remite a las diferencias entre personas."
    ],
    inc: [
      "Sobre la definición de Allport (1937)|La sitúa en la mirada de los demás|Rechaza separar mente y cuerpo|Atribuye a la personalidad un papel causal|«Dentro del individuo» sitúa la personalidad en la persona, no en la mirada de los demás."
    ],
    seq: [],
    cls: [
      "Definición y autor|Allport: Organización dinámica; Sistemas psicofísicos; Ajustes únicos|Cattell: R en función de S y P; Predicción de la conducta|Eysenck: Cuatro sectores; Carácter, temperamento, intelecto y físico"
    ] },
  { t: "Temperamento, carácter y dos formas de estudiar a las personas",
    tip: "El temperamento es el componente con base biológica más clara, aparición temprana y estilo emocional y energético. El carácter es valorativo y aprendido, y la constitución alude a lo físico. La personalidad los incluye a todos y además capacidades, motivos y metas. El enfoque nomotético busca leyes generales comparando a muchas personas, y el idiográfico estudia al individuo único: hoy se consideran complementarios.",
    v: [
      "Temperamento=Componente de base biológica, aparición temprana y estilo emocional y energético",
      "Carácter=Componente valorativo y aprendido: valores, hábitos y manera de conducirse",
      "Constitución=Aspectos físicos y fisiológicos, como la morfología corporal",
      "Enfoque nomotético=Búsqueda de leyes generales comparando a muchas personas en dimensiones comunes",
      "Enfoque idiográfico=Estudio en profundidad del individuo único y de cómo se organizan sus rasgos",
      "Disposición cardinal=Tendencia tan dominante que impregna casi toda la vida, poco frecuente",
      "Disposición secundaria=Preferencia limitada que solo aparece en ciertas situaciones",
      "Rasgo común=Tendencia compartida por muchas personas y comparable entre ellas"
    ],
    g: [
      "Los términos nomotético e idiográfico proceden del filósofo ___.|Windelband|Wundt|Popper",
      "Las disposiciones ___ son las que se mencionarían en una carta de recomendación.|centrales|cardinales|secundarias",
      "En el modelo de Cloninger, la autodirección y la cooperación son dimensiones del ___.|carácter|temperamento|físico",
      "La constitución corresponde al sector ___ de Eysenck.|somático|afectivo|conativo",
      "Los métodos de ___ de experiencias, que siguen a la misma persona durante días, combinan ambos enfoques.|muestreo|registro|análisis"
    ],
    tf: [
      "El temperamento tiene un matiz moral del que carece el carácter.|F|Es al revés: el carácter es valorativo y tiene matiz moral, y el temperamento es estilo emocional y energético.",
      "Temperamento y carácter son partes de la personalidad, no alternativas a ella.|V",
      "El enfoque idiográfico es exclusivo del psicoanálisis.|F|Lo defendió Allport, que situó el rasgo en el centro del estudio. Analizar las cartas de una persona es idiográfico.",
      "El temperamento tiene base biológica, pero la estabilidad de las diferencias entre niños es solo modesta.|V"
    ],
    q: [
      "Dos hermanos criados en la misma casa difieren desde bebés en lo fácil que es tranquilizarlos. Esa diferencia remite sobre todo al…|temperamento|carácter|ambiente compartido|El temperamento aparece en los primeros meses y se refiere al estilo emocional y energético, como la rapidez para calmarse.",
      "Una investigadora puntúa a mil personas en extraversión con un mismo cuestionario. Su enfoque es…|nomotético|idiográfico|clínico|Compara a muchas personas en una misma dimensión y las sitúa en una escala común para buscar leyes generales.",
      "Frente al mito del temperamento inmodificable, ¿cuánto vale la estabilidad de las diferencias entre personas en la infancia?|En torno a ,31|En torno a ,70|Prácticamente perfecta|Es modesta en la infancia y crece hasta la adultez sin llegar a ser perfecta (Roberts y DelVecchio, 2000).",
      "¿Qué distinguió Allport de las disposiciones personales?|Los rasgos comunes|Los tipos cerrados|Los factores de segundo orden|Rasgos comunes, compartidos y comparables entre personas, frente a disposiciones personales, propias de cada individuo."
    ],
    inc: [
      "Sobre temperamento, carácter y personalidad|El carácter tiene un origen sobre todo biológico|El temperamento aparece ya en los primeros meses|La personalidad incluye también capacidades y motivos|El carácter es el componente valorativo y aprendido, ligado a la educación y la cultura."
    ],
    seq: [],
    cls: [
      "Temperamento o carácter|Temperamento: Base biológica; Aparición muy temprana; Estilo emocional y energético; Reaccionar con intensidad a los cambios|Carácter: Valores y hábitos aprendidos; Matiz moral; Aparición progresiva; Ser cumplidor con los compromisos"
    ] },
  { t: "Las tres preguntas de toda teoría: estructura, proceso y determinantes",
    tip: "Toda teoría debe decir qué rasgos estables caracterizan a alguien (estructura), qué mecanismos ponen en marcha su conducta (proceso) y de dónde procede su forma de ser (determinantes). Rasgos y tipos son unidades estructurales, y motivos, metas y expectativas son unidades de nivel medio del proceso. Sigue abierto si los rasgos solo describen o también explican, y la postura causal debe evitar la circularidad.",
    v: [
      "Estructura=Elementos más estables de la personalidad, sus unidades básicas",
      "Rasgo=Tendencia inferida a responder de forma parecida en muchas situaciones",
      "Tipo=Hoy, dimensión amplia que agrupa varios rasgos",
      "Constructo=Concepto no observable que se infiere de conductas que tienden a aparecer juntas",
      "Proceso o dinámica=Parte explicativa: mecanismos que ponen en marcha la conducta",
      "Unidades de nivel medio=Motivos, metas o planes, más cercanos a la conducta y al contexto",
      "Determinantes=Causas genéticas y ambientales de la forma de ser que se llega a tener",
      "Circularidad=Explicar una conducta con un rasgo inferido de esa misma conducta"
    ],
    g: [
      "Un rasgo es ___: no está activo todo el tiempo.|disposicional|dimensional|observable",
      "Que todas las personas se sitúen en algún punto de un continuo indica que el rasgo es ___.|dimensional|disposicional|categorial",
      "En el modelo de Eysenck, la extraversión es un ___ que engloba sociabilidad, actividad, asertividad y búsqueda de sensaciones.|tipo|rasgo|motivo",
      "El componente heredable de la personalidad se reparte entre muchísimas variantes genéticas de efecto ___.|minúsculo|moderado|grande",
      "La teoría de rasgos completos, que une descripción y explicación, es de Fleeson y ___ (2015).|Jayawickreme|Roberts|DelVecchio"
    ],
    tf: [
      "Las metas y las expectativas son unidades estructurales, igual que los rasgos.|F|Son unidades de nivel medio del proceso: más cercanas a la conducta, ligadas al contexto y cambiantes.",
      "Un rasgo no se observa directamente, sino que se infiere de conductas que tienden a aparecer juntas.|V",
      "Hoy hay consenso en que los rasgos son causas reales de la conducta.|F|Es un debate abierto: para unos son descripciones y para otros causas, con el riesgo de la circularidad.",
      "Además de estructura, proceso y determinantes, las teorías abordan el desarrollo, la psicopatología y el cambio.|V"
    ],
    q: [
      "Lucía se bloquea en los exámenes porque espera fracasar y quiere evitar la vergüenza. ¿Qué componente describe esa explicación?|El proceso|La estructura|Los determinantes|Expectativas y motivos son unidades del proceso. Su neuroticismo alto sería estructura, y su familia exigente, un determinante.",
      "«Grita porque es agresivo», cuando se le llama agresivo porque grita. ¿Qué problema ilustra?|La circularidad|La falta de parsimonia|La falsabilidad|Si el rasgo se infiere de la misma conducta que pretende explicar, la explicación no añade nada.",
      "En el terreno de la inteligencia, las unidades estructurales se llaman…|aptitudes o capacidades|motivos o metas|tipos o temperamentos|Aptitud, capacidad o habilidad son las unidades estructurales de la inteligencia, que se estudia en Personalidad II.",
      "¿Qué cuatro determinantes ambientales de la personalidad se distinguen?|Cultura, clase, familia e iguales|Genes, temperamento y constitución|Rasgos, tipos y disposiciones|Los ambientales son la cultura, la clase social, la familia y el grupo de iguales. Los genéticos son variantes de efecto minúsculo."
    ],
    inc: [
      "Sobre las unidades estructurales|Un tipo es hoy una categoría cerrada|Un rasgo es disposicional y dimensional|Un rasgo es un constructo inferido|Eso valía para las clasificaciones antiguas. Hoy un tipo suele entenderse como una dimensión amplia que agrupa varios rasgos."
    ],
    seq: [],
    cls: [
      "Pregunta de la teoría|Estructura: Rasgos; Tipos; Neuroticismo alto|Proceso: Motivos; Metas; Expectativas; Proyectos personales|Determinantes: Variantes genéticas; Familia; Clase social; Cultura"
    ] },
  { t: "Psicología de sentido común y teoría científica",
    tip: "Todos usamos teorías implícitas o legas para entender y anticipar a los demás. Una teoría científica se distingue por ser explícita, sistemática, contrastable y basada en observación controlada. Para evaluarla se usan criterios como amplitud, parsimonia, coherencia, falsabilidad, apoyo empírico y valor heurístico y aplicado, que a menudo tiran en direcciones opuestas: la valoración es un balance, no un aprobado o un suspenso.",
    v: [
      "Teoría implícita=Creencia lega que se usa a diario para entender y anticipar a los demás",
      "Explícita=Con conceptos y supuestos formulados por escrito y definidos",
      "Sistemática=Con ideas relacionadas entre sí de forma lógica y coherente",
      "Amplitud=Cantidad de fenómenos que una teoría explica",
      "Parsimonia=Explicar los fenómenos con pocos conceptos",
      "Falsabilidad=Hacer predicciones que los datos podrían contradecir",
      "Valor heurístico=Capacidad de generar nuevas preguntas e investigación",
      "Valor aplicado=Utilidad para evaluar, intervenir o predecir"
    ],
    g: [
      "Una teoría que multiplica conceptos para cada caso falla en ___.|parsimonia|amplitud|coherencia",
      "Una teoría que no inspira estudios tiene poco valor ___.|heurístico|aplicado|empírico",
      "Al aplicar estos criterios, los modelos de rasgos destacan por su ___, pero se discute su capacidad explicativa.|apoyo empírico|valor heurístico|amplitud",
      "Las palabras cotidianas para describir a las personas fueron el punto de partida de la hipótesis ___.|léxica|implícita|cultural",
      "«Los hijos únicos son caprichosos» es, para la ciencia, solo una ___ que habría que poner a prueba.|hipótesis|teoría|ley"
    ],
    tf: [
      "Una buena teoría de la personalidad obtiene el máximo en todos los criterios a la vez.|F|Los criterios tiran en direcciones opuestas: más amplitud suele costar parsimonia y contrastabilidad. Se hace un balance.",
      "Una teoría que explica un resultado y su contrario no corre ningún riesgo y no informa de nada.|V",
      "Las teorías legas tienden a recordarse cuando aciertan y a olvidarse cuando fallan.|V",
      "La ciencia de la personalidad sustituye la intuición del sentido común y prescinde de ella.|F|La ciencia no sustituye la intuición, sino que la somete a prueba. Las palabras cotidianas iniciaron el estudio de los rasgos."
    ],
    q: [
      "Un amigo afirma: «si llega tarde a la primera cita, será un desastre organizando las vacaciones». ¿Qué tipo de teoría usa?|Una teoría implícita|Una teoría contrastada|Una teoría sistemática|Es una teoría lega: se apoya en pocos casos y no se ha puesto a prueba con observación controlada.",
      "Una teoría muy precisa y bien contrastada suele pagar el precio de…|explicar una parcela pequeña|perder apoyo empírico|carecer de coherencia interna|Los criterios tiran en direcciones opuestas: la precisión suele limitar la amplitud de lo que se explica.",
      "¿Qué rasgo de la teoría científica exige describir los métodos con detalle para que otros repliquen el estudio?|La observación controlada|La coherencia interna|La amplitud explicativa|La observación controlada incluye muestras amplias y variadas, medidas objetivas y métodos descritos para poder replicar.",
      "Una teoría que solo se apoya en casos llamativos o en la autoridad de su autor falla sobre todo en…|apoyo empírico|valor heurístico|coherencia interna|Esa es la señal de alarma del apoyo empírico: que los datos no hayan confirmado sus predicciones."
    ],
    inc: [
      "Sobre los criterios para evaluar teorías|La falsabilidad exige que la teoría acierte siempre|La parsimonia premia explicar con pocos conceptos|La amplitud mide cuántos fenómenos explica|La falsabilidad exige predicciones que puedan fallar. Si cualquier resultado confirma la teoría, no es contrastable."
    ],
    seq: [],
    cls: [
      "Teoría lega o científica|Lega: Pocos casos llamativos; Recuerda solo los aciertos; Supuestos sin formular|Científica: Conceptos definidos por escrito; Predicciones que pueden fallar; Muestras amplias y variadas; Métodos replicables"
    ] }
] },
{ n: 2, t: "Una historia con dos tradiciones", cap: 1, pir: "media", mods: [
  { t: "De los cuatro humores a las mediciones de Galton",
    tip: "Hipócrates propuso cuatro humores y Galeno relacionó el predominio de cada uno con un temperamento. La explicación fisiológica era falsa y los tipos eran categorías cerradas, pero las descripciones captaban diferencias reales que Wundt y Eysenck reinterpretaron como dimensiones. Galton, precursor del estudio cuantitativo de las diferencias, abrió en 1884 su laboratorio antropométrico y desarrolló la idea de correlación, aunque no acuñó el término «psicología diferencial».",
    v: [
      "Teoría humoral=Explicación antigua del temperamento por el predominio de un humor corporal",
      "Sanguíneo=Temperamento ligado a la sangre: alegre, sociable y optimista",
      "Colérico=Temperamento ligado a la bilis amarilla: irritable, impulsivo y enérgico",
      "Melancólico=Temperamento ligado a la bilis negra: triste, cavilador y pesimista",
      "Flemático=Temperamento ligado a la flema: calmado, lento y poco expresivo",
      "Tipología=Clasificación de las personas en categorías cerradas y excluyentes",
      "Teofrasto=Discípulo de Aristóteles que escribió treinta retratos breves de tipos humanos",
      "Hereditary Genius=Obra de Galton (1869) que rastreó familias con miembros eminentes"
    ],
    g: [
      "Galton abrió su laboratorio antropométrico en Londres en ___.|1884|1869|1890",
      "La idea de correlación de Galton la formalizó después su colaborador Karl ___.|Pearson|Spearman|Popper",
      "Galeno, en el siglo ___ d. C., relacionó el predominio de cada humor con un temperamento.|II|V|IV",
      "Wundt y Eysenck reinterpretaron los cuatro temperamentos con dos dimensiones: la extraversión y la estabilidad ___.|emocional|cognitiva|conductual",
      "Galton fue el impulsor de la ___, idea que sirvió después para justificar políticas discriminatorias.|eugenesia|frenología|psicometría"
    ],
    tf: [
      "Galton acuñó el término «psicología diferencial».|F|Galton es el precursor del estudio de las diferencias individuales, pero el término corresponde a Stern.",
      "El método de Hereditary Genius permitía separar la herencia de las ventajas del entorno familiar.|F|No permitía separarlas: la eminencia podía concentrarse en esas familias también por las ventajas de su entorno.",
      "Las descripciones de los cuatro temperamentos captaban diferencias reales, aunque su explicación fisiológica fuera falsa.|V",
      "Galton fue pionero en usar cuestionarios y en estudiar gemelos.|V"
    ],
    q: [
      "En la tipología de Galeno, una persona irritable, impulsiva y enérgica tendría predominio de…|bilis amarilla|bilis negra|flema|La bilis amarilla corresponde al colérico. La bilis negra, al melancólico, y la flema, al flemático.",
      "¿Cuál era el problema de fondo de la tipología antigua?|Sus tipos eran categorías cerradas|Ignoraba por completo la biología|Describía rasgos poco reales|Cada persona era sanguínea o melancólica, sin grados ni mezclas. La psicología moderna lo sustituyó por dimensiones continuas.",
      "En 1885, un visitante paga una pequeña cuota en Londres para que midan su estatura, su fuerza y su tiempo de reacción. ¿Dónde está?|En el laboratorio de Galton|En el laboratorio de Wundt|En la escuela de Binet|El laboratorio antropométrico de Galton, abierto en 1884, reunió datos de muchas personas con un mismo procedimiento.",
      "¿Cuál fue la aportación más duradera de Galton?|Que las diferencias pueden medirse|Que la eminencia es hereditaria|Que la especie puede mejorarse|Sus métodos sobrevivieron, pero no sus conclusiones sobre la eminencia ni sobre la «mejora» humana."
    ],
    inc: [
      "Sobre Galton|Acuñó la expresión «mental test»|Era primo de Charles Darwin|Popularizó naturaleza frente a crianza|La expresión «mental test» es de James McKeen Cattell (1890), que se formó con Wundt y conoció a Galton."
    ],
    seq: [
      "Cronología, de la Antigüedad a Galton|Cuatro humores de Hipócrates>Caracteres de Teofrasto>Temperamentos de Galeno>Hereditary Genius>Laboratorio antropométrico"
    ],
    cls: [] },
  { t: "Nace la psicología diferencial",
    tip: "La psicología de Wundt trataba las diferencias entre personas como ruido, y algunos alumnos influidos por Galton las convirtieron en objeto de estudio. J. McK. Cattell acuñó «mental test» en 1890 con pruebas de procesos simples que apenas predecían el rendimiento académico. Spearman (1904) propuso un factor general con un análisis factorial temprano, y Binet y Simon (1905) triunfaron midiendo procesos complejos. Stern dio nombre a la psicología diferencial, una tradición nomotética.",
    v: [
      "Test mental=Término de J. McK. Cattell (1890) para pruebas que miden diferencias psicológicas",
      "Psicología diferencial=Estudio sistemático de las diferencias psicológicas entre individuos y grupos",
      "William Stern=Autor alemán que dio nombre al campo a comienzos del siglo XX",
      "Factor general=Propuesta de Spearman (1904) ante la correlación entre tareas intelectuales",
      "Análisis factorial=Técnica que Spearman usó en forma temprana y que dio forma a los modelos de rasgos",
      "Binet y Simon=Autores de la primera escala práctica de inteligencia (París, 1905)",
      "James McKeen Cattell=Alumno de Wundt que midió tiempos de reacción y discriminación sensorial",
      "Raymond B. Cattell=Autor del 16PF, distinto del creador de los tests mentales"
    ],
    g: [
      "Las pruebas de J. McK. Cattell medían procesos ___, como el tiempo de reacción.|simples|complejos|implícitos",
      "Spearman propuso en ___ un factor general de inteligencia.|1904|1905|1890",
      "Binet y Simon construyeron su escala en ___ para identificar a los escolares que necesitaban apoyo.|París|Leipzig|Londres",
      "Para la psicología experimental de Wundt, las diferencias entre personas eran ___.|ruido|el objeto central|una ley general",
      "Durante la Primera Guerra Mundial, los ___ necesitaban clasificar con rapidez a grandes grupos de personas.|ejércitos|hospitales|tribunales"
    ],
    tf: [
      "Las pruebas de J. McK. Cattell predijeron bien el rendimiento académico.|F|Medían procesos simples, y esas medidas apenas se relacionaban con el rendimiento académico.",
      "Binet y Simon tuvieron éxito porque midieron procesos complejos, como el razonamiento, la comprensión y la memoria.|V",
      "La tradición diferencial fue, en términos de Allport, claramente idiográfica.|F|Fue nomotética: tests aplicados a muchas personas y dimensiones comunes a todos.",
      "Al ver que los tests de inteligencia no bastaban para predecir el rendimiento, creció el interés por medir el temperamento y los intereses.|V"
    ],
    q: [
      "¿Qué autor usó una forma temprana de análisis factorial a comienzos del siglo XX?|Spearman|Stern|Binet|Spearman (1904) observó que tareas intelectuales distintas correlacionan entre sí y propuso un factor general.",
      "Un compañero atribuye el 16PF al autor que acuñó «mental test». ¿Qué error comete?|Confunde a los dos Cattell|Confunde a Stern con Galton|Confunde a Binet con Spearman|«Mental test» es de James McKeen Cattell. El 16PF es de Raymond B. Cattell.",
      "¿Qué rasgo NO pertenece a la tradición diferencial o psicométrica?|Estudiar casos únicos en profundidad|Aplicar tests a muchas personas|Usar correlación y análisis factorial|El estudio de casos individuales en profundidad era propio de la clínica, con Freud, la otra corriente de la época.",
      "Con Stern, las diferencias entre personas pasaron de ser error a ser…|el objeto central de estudio|un factor general único|una medida antropométrica|Lo que para la psicología experimental era error se convirtió en el objeto central de una disciplina."
    ],
    inc: [
      "Sobre los inicios de la psicología diferencial|Binet y Simon midieron procesos simples|Spearman observó correlaciones entre tareas|Stern dio nombre al campo|Binet y Simon midieron procesos complejos. Los procesos simples, como el tiempo de reacción, eran los de J. McK. Cattell."
    ],
    seq: [
      "Hitos de la psicología diferencial|Laboratorio de Galton>Mental test de J. McK. Cattell>Factor general de Spearman>Escala de Binet y Simon"
    ],
    cls: [] },
  { t: "Allport, Murray y Lewin: la personalidad se hace disciplina",
    tip: "La disciplina se formalizó a finales de los años treinta, con la revista Character and Personality (1932) y los manuales de Lewin (1935), Allport (1937) y Murray (1938). Allport situó el rasgo como estructura real y, con Odbert, sentó la base de la hipótesis léxica. Murray explicó la conducta por necesidades y presiones y creó el TAT con Morgan. Lewin propuso que la conducta es función de la persona y del ambiente, antecedente del interaccionismo.",
    v: [
      "Character and Personality=Revista de 1932, más tarde llamada Journal of Personality",
      "Allport y Odbert=Autores que reunieron cerca de 18.000 términos descriptivos de un diccionario",
      "Necesidades=En Murray, fuerzas internas como el logro, la afiliación o la dominancia",
      "Presiones=En Murray, fuerzas del ambiente que interactúan con las necesidades",
      "TAT=Test en el que se inventan historias a partir de láminas ambiguas",
      "Espacio vital=Fuerzas personales y ambientales tal como la persona las vive en un momento dado",
      "Fórmula de Lewin=La conducta es función de la persona y del ambiente",
      "Hall y Lindzey=Autores de Theories of Personality (1957), sobre grandes teorías en competencia"
    ],
    g: [
      "Personality: A Psychological Interpretation, de Allport, se publicó en ___.|1937|1938|1935",
      "Explorations in Personality, de Murray, se publicó en ___.|1938|1937|1935",
      "Murray creó el TAT junto con ___ (1935).|Morgan|Odbert|Lewin",
      "A Dynamic Theory of Personality (1935) es la obra de referencia de ___.|Lewin|Murray|Allport",
      "Allport entendía el rasgo como una estructura ___ dentro de la persona, no solo como un resumen estadístico.|real|aparente|social"
    ],
    tf: [
      "La fórmula según la cual la conducta es función de la persona y del ambiente es de Allport.|F|Es de Lewin y es el antecedente directo del interaccionismo.",
      "Allport y Odbert revisaron un diccionario inglés y reunieron cerca de 18.000 términos que describían a las personas.|V",
      "Explorations in Personality es anterior al libro de Allport.|F|Murray la publicó en 1938, un año después del libro de Allport (1937).",
      "Para Lewin, no tiene sentido estudiar a la persona sin la situación, ni la situación sin la persona.|V"
    ],
    q: [
      "Un estudiante abandona su grupo de trabajo. Un psicólogo se pregunta qué necesidad está en juego y qué presión percibe en el grupo. ¿A qué autor sigue?|Murray|Lewin|Allport|Murray explicaba la conducta por la interacción de necesidades internas y presiones del ambiente. Allport buscaría disposiciones centrales.",
      "¿Qué obra se considera el punto de partida formal de la disciplina?|El libro de Allport (1937)|El de Murray (1938)|El de Hall y Lindzey (1957)|Personality: A Psychological Interpretation, de Allport, aportó además la definición de personalidad más citada.",
      "El trabajo léxico de Allport y Odbert (1936) está en el origen de…|la hipótesis léxica|el estudio de los motivos|el interaccionismo|Esa recopilación de términos originó la hipótesis léxica, base de los modelos de Cattell y de los Cinco Grandes.",
      "El manual de Hall y Lindzey (1957) difundió la idea de la psicología de la personalidad como…|grandes teorías en competencia|un campo de constructos medibles|una disciplina experimental pura|Reunió los modelos factoriales, las teorías clínicas y los intentos de unir psicoanálisis y aprendizaje."
    ],
    inc: [
      "Sobre la formalización de la disciplina|Lewin explicó la conducta por necesidades|Allport defendió el enfoque idiográfico|Murray estudió a un grupo con muchas técnicas|Necesidades y presiones son de Murray. Lewin habló del espacio vital y de la conducta como función de persona y ambiente."
    ],
    seq: [
      "Revista y primeros manuales|Character and Personality>A Dynamic Theory of Personality>Personality: A Psychological Interpretation>Explorations in Personality>Theories of Personality"
    ],
    cls: [
      "Autor y legado|Allport: Disposiciones personales; Hipótesis léxica; Enfoque idiográfico|Murray: Necesidades; Presiones ambientales; TAT|Lewin: Espacio vital; Interaccionismo; A Dynamic Theory of Personality"
    ] },
  { t: "Las dos disciplinas de Cronbach y el panorama actual",
    tip: "En 1957 Cronbach diagnosticó que la psicología se había dividido en una disciplina experimental, que trata las diferencias como error, y otra correlacional, que las estudia. No defendía una frente a otra: pedía integrarlas estudiando la interacción entre las características de las personas y los tratamientos. Tras Mischel (1968) llegó el debate persona-situación, y desde los noventa dominan los Cinco Grandes, el estudio de la estabilidad y el cambio, una biología sin genes únicos y más exigencia de replicación.",
    v: [
      "Disciplina experimental=Manipula condiciones y trata las diferencias individuales como error",
      "Disciplina correlacional=Mide variables tal como se dan y hace de las diferencias su objeto",
      "Dos disciplinas=Experimental y correlacional, que Cronbach (1957) propuso integrar",
      "Mischel (1968)=Sostuvo que los rasgos predecían mal la conducta en situaciones concretas",
      "Debate persona-situación=Crisis iniciada en 1968 que acabó reforzando el interaccionismo",
      "Modelo HEXACO=Alternativa a los Cinco Grandes como marco estructural de los rasgos",
      "Biología sin genes únicos=Los rasgos dependen de miles de variantes de efecto minúsculo",
      "Informe del King's College=Revisión de 2019 que calificó de inseguros trabajos de Eysenck y Grossarth-Maticek"
    ],
    g: [
      "Cronbach pronunció su conferencia sobre las dos disciplinas de la psicología científica en ___.|1957|1968|1992",
      "Los rasgos dependen de miles de variantes genéticas de efecto minúsculo (Lo et al., 2017, y ___ et al., 2018).|Nagel|Soto|Gurven",
      "Los Cinco Grandes se convirtieron en marco de referencia con instrumentos como el NEO-PI-R, de ___.|1992|1957|1968",
      "Gurven et al. (2013) no recuperaron los Cinco Grandes en los ___ de Bolivia.|tsimané|yanomami|aimaras",
      "El informe del King's College afecta a la línea sobre personalidad y cáncer, no al modelo ___ de Eysenck.|PEN|HEXACO|16PF"
    ],
    tf: [
      "Cronbach defendió que la psicología debía ser experimental y abandonar el método correlacional.|F|Cronbach criticó la separación y pidió integrar las dos disciplinas, estudiando la interacción persona-tratamiento.",
      "Para Cronbach, lo que el experimentalista considera varianza de error es justo lo que interesa al correlacionista.|V",
      "Desde los años noventa, el marco de referencia compartido para describir los rasgos es el modelo PEN de Eysenck.|F|Lo son los Cinco Grandes, con instrumentos como el NEO-PI-R (1992), aunque con alternativas como HEXACO.",
      "Tras la crisis abierta por Mischel, la disciplina dejó de buscar grandes teorías globales y se centró en constructos concretos y medibles.|V"
    ],
    q: [
      "Un equipo comprueba que un método de enseñanza funciona bien con unos alumnos y mal con otros según sus características. ¿Qué propuesta aplica?|La de Cronbach|La de Mischel|La de Galton|Cronbach (1957) pidió estudiar cómo interactúan las características de las personas con las condiciones o tratamientos.",
      "¿Cuál es la fortaleza de la disciplina experimental según Cronbach?|La inferencia causal|El estudio de variables no manipulables|La medida de las diferencias|La correlacional permite estudiar variables que no se pueden manipular. La experimental destaca por la inferencia causal.",
      "¿Qué afectó el informe del King's College de 2019?|Su línea sobre cáncer y cardiopatía|La validez del modelo PEN|Las réplicas del proyecto de Soto|Calificó de inseguros 26 registros de publicaciones de Eysenck con Grossarth-Maticek, y hubo retractaciones. No afecta al modelo PEN.",
      "¿Qué desencadenó Personality and Assessment (Mischel, 1968)?|El debate persona-situación|El modelo de los Cinco Grandes|La crisis de replicación|Mischel sostuvo que los rasgos predecían mal la conducta concreta. El debate acabó reforzando el interaccionismo de Lewin."
    ],
    inc: [
      "Sobre el panorama actual|Los rasgos dependen de unos pocos genes de efecto grande|Los Cinco Grandes tienen alternativas como el HEXACO|Hay estabilidad sustancial junto con cambios normativos|Los rasgos dependen de miles de variantes genéticas de efecto minúsculo (Lo et al., 2017, Nagel et al., 2018)."
    ],
    seq: [],
    cls: [
      "Dos disciplinas de Cronbach|Experimental: Manipulación de condiciones; Diferencias como error; Inferencia causal|Correlacional: Variables medidas tal como se dan; Diferencias como objeto; Variables no manipulables"
    ] }
] },
{ n: 3, t: "Freud y el psicoanálisis", cap: 2, pir: "media", mods: [
  { t: "Tres niveles de conciencia: el modelo topográfico",
    tip: "Freud partió de la consulta clínica, no del laboratorio. En La interpretación de los sueños (1900) propuso el modelo topográfico: lo consciente, lo preconsciente, accesible con un pequeño esfuerzo de atención, y lo inconsciente, bloqueado y conocido solo de forma indirecta. Su inconsciente es dinámico: los contenidos presionan para expresarse, funcionan por proceso primario y, según el determinismo psíquico, ninguna conducta es casual.",
    v: [
      "Consciente=Lo que se advierte en este momento, un estado pasajero",
      "Preconsciente=Lo accesible con un pequeño esfuerzo de atención, filtro entre sistemas",
      "Inconsciente dinámico=Contenidos activos que presionan para expresarse mientras otras fuerzas se oponen",
      "Proceso primario=Funcionamiento que ignora la contradicción y el tiempo y condensa significados",
      "Proceso secundario=Pensamiento lógico, ordenado y ajustado a la realidad",
      "Determinismo psíquico=Idea de que ninguna conducta es casual",
      "Asociación libre=Técnica en la que el paciente dice lo que se le ocurre, base del método freudiano",
      "Estudios sobre la histeria=Obra de 1895, escrita con Josef Breuer, punto de partida del psicoanálisis"
    ],
    g: [
      "La fundación del psicoanálisis se sitúa en La interpretación de los sueños, de ___.|1900|1895|1923",
      "Recordar el PIN del móvil cuando alguien lo pide es un ejemplo de contenido ___.|preconsciente|inconsciente|consciente",
      "Los pacientes de Freud presentaban síntomas entonces llamados «nerviosos», sobre todo ___.|histeria|psicosis|demencia",
      "Según Freud, el inconsciente solo se conoce de forma ___, interpretando sueños, lapsus y síntomas.|indirecta|directa|experimental",
      "El inconsciente funciona según el proceso ___, que condensa significados como en los sueños.|primario|secundario|racional"
    ],
    tf: [
      "El preconsciente guarda material apartado de la conciencia que no puede recuperarse a voluntad.|F|Eso es el inconsciente. Lo preconsciente puede llegar a la conciencia con un pequeño esfuerzo de atención.",
      "El inconsciente freudiano no es solo lo que no se sabe: sus contenidos están activos y presionan para expresarse.|V",
      "Freud elaboró su teoría a partir de experimentos de laboratorio con muestras amplias.|F|Partió de la consulta clínica, tratando a pacientes con síntomas «nerviosos», sobre todo histeria.",
      "El preconsciente funciona además como filtro entre el consciente y el inconsciente.|V"
    ],
    q: [
      "Marta llega siempre tarde a las comidas con sus suegros y lo atribuye al tráfico. Un psicoanalista sospecha un rechazo que ella no encuentra aunque se lo pregunten. ¿Dónde lo situaría?|En el inconsciente|En el preconsciente|En el consciente|Si no aparece ni con esfuerzo de atención, no es preconsciente: estaría bloqueado en el inconsciente.",
      "¿Qué caracteriza el pensamiento consciente según Freud?|El proceso secundario|La condensación de significados|La ausencia de tiempo|El proceso secundario es lógico y ordenado. Condensar e ignorar el tiempo son rasgos del proceso primario.",
      "¿Por qué el método freudiano es a la vez su gran aportación y su gran problema?|Desconfía de lo que la conciencia dice|Se basa en experimentos controlados|Rechaza interpretar los sueños|La asociación libre y la interpretación de los sueños desconfían del autoinforme, lo que luego dificulta contrastar la teoría.",
      "Para Freud, un lapsus es…|una huella del inconsciente|un fallo casual de la atención|un producto del preconsciente|Por el determinismo psíquico, detrás de cada olvido o equivocación hay un motivo."
    ],
    inc: [
      "Sobre el modelo topográfico|Lo consciente es un estado estable y duradero|Aparece en La interpretación de los sueños|Lo inconsciente no se hace consciente a voluntad|Lo consciente es pasajero: lo que ahora es consciente deja de serlo un instante después."
    ],
    seq: [],
    cls: [
      "Sistema del modelo topográfico|Consciente: Leer esta frase; Percepciones presentes; Estado pasajero|Preconsciente: El PIN del móvil al pedirlo; Lo que se cenó ayer; Filtro entre sistemas|Inconsciente: Resentimiento que se niega; Proceso primario; Acceso bloqueado"
    ] },
  { t: "Ello, yo y superyó",
    tip: "En El yo y el ello (1923) Freud propuso el modelo estructural, que completa el topográfico sin sustituirlo. El ello se rige por el principio de placer, el yo por el de realidad y media entre instancias, y el superyó, heredero del complejo de Edipo, juzga y castiga con culpa. Solo el ello es enteramente inconsciente: el yo y el superyó atraviesan los tres niveles. Del choque entre instancias nace el conflicto intrapsíquico.",
    v: [
      "Ello=Instancia más antigua, fuente de las pulsiones y de la energía psíquica",
      "Principio de placer=Búsqueda de descarga inmediata de la tensión",
      "Principio de realidad=Aplazamiento de la satisfacción según las condiciones reales",
      "Superyó=Instancia moral interiorizada, heredera del complejo de Edipo",
      "Conciencia moral=Parte de la instancia moral que juzga y castiga con culpa",
      "Ideal del yo=Parte de la instancia moral que marca lo que uno aspira a ser",
      "Conflicto intrapsíquico=Choque entre instancias con fines distintos, motor de la dinámica",
      "El yo y el ello=Obra de 1923 en la que aparece el modelo estructural"
    ],
    g: [
      "El yo es el «___» de la personalidad: percibe, planifica y media.|ejecutor|juez|motor",
      "Freud llama al superyó heredero del complejo de ___.|Edipo|inferioridad|superioridad",
      "El modelo estructural ___ al topográfico, sin sustituirlo.|completa|refuta|reproduce",
      "Para Freud, una personalidad sana tiene un yo lo bastante ___ para negociar el conflicto.|fuerte|rígido|consciente",
      "Un bebé que llora de hambre y no puede esperar ilustra un ___ casi sin contrapeso.|ello|yo|superyó"
    ],
    tf: [
      "El superyó es enteramente inconsciente, como el ello.|F|Solo el ello lo es. El superyó es sobre todo inconsciente, pero también tiene partes conscientes y preconscientes.",
      "Ello, yo y superyó carecen de localización cerebral concreta.|V",
      "La parte inconsciente del yo es la que activa las defensas.|V",
      "Para Freud, una personalidad sana es la que carece de conflicto intrapsíquico.|F|La personalidad sana no carece de conflicto: tiene un yo lo bastante fuerte para negociarlo."
    ],
    q: [
      "La víspera de un examen, a un estudiante le proponen salir de fiesta y decide estudiar hasta medianoche y salir un rato después. ¿Qué instancia propone esa salida?|El yo|El ello|El superyó|El yo busca una salida realista entre el empuje del ello a salir y el reproche del superyó.",
      "¿Por qué alguien puede sentirse culpable sin saber de qué?|Su superyó es en gran parte inconsciente|El ello es la instancia que castiga con culpa|El preconsciente bloquea el origen de la culpa|La conciencia moral castiga con culpa, y como el superyó es en gran medida inconsciente, el origen puede no advertirse.",
      "¿Qué tres etiquetas describen la teoría freudiana de la personalidad?|Internalista, hedonista y determinista|Situacionista, hedonista y determinista|Internalista, humanista y libre|Las causas están dentro de la persona, la conducta busca el placer y está determinada. Las etiquetas reaparecen en la Unidad 6.",
      "¿De dónde surge el yo según Freud?|Del ello, al chocar con la realidad|Del superyó, al interiorizar normas|De la resolución del Edipo|El ello es la instancia más antigua y de él surgen las demás. Es el superyó el que se consolida al resolver el Edipo."
    ],
    inc: [
      "Sobre el modelo estructural|Cada instancia ocupa un solo nivel de conciencia|El superyó puede ser tan exigente como el ello|El ello funciona por proceso primario|Los modelos no se corresponden uno a uno: solo el ello es todo inconsciente, y el yo y el superyó atraviesan los tres niveles."
    ],
    seq: [],
    cls: [
      "Instancia|Ello: Principio de placer; Fuente de las pulsiones; «Lo quiero ya»|Yo: Principio de realidad; Mediar y adaptarse; «Ahora no, pero luego sí»|Superyó: Conciencia moral; Ideal del yo; «Eso no se hace»"
    ] },
  { t: "Pulsiones y etapas psicosexuales",
    tip: "Freud concibe la mente como un sistema de energía cuya fuente son las pulsiones, con una fuente corporal, una meta y un objeto que puede cambiar. En 1920 propuso dos grandes pulsiones, Eros o pulsión de vida y Tánatos o pulsión de muerte. El desarrollo sigue las etapas oral, anal, fálica, de latencia y genital, y el Edipo se sitúa en la fálica. El exceso de frustración o de gratificación produce fijación, y ante el estrés aparece la regresión.",
    v: [
      "Pulsión=Fuerza con fuente corporal, meta de descarga y objeto que puede cambiar",
      "Libido=Energía de las pulsiones sexuales",
      "Eros=Pulsión de vida: tiende a unir, conservar y reproducir",
      "Tánatos=Pulsión de muerte, que dirigida hacia fuera se expresa como agresión",
      "Complejo de Edipo=Deseo hacia el progenitor del otro sexo y rivalidad con el del mismo sexo",
      "Fijación=Anclaje de parte de la libido en una etapa por exceso de frustración o gratificación",
      "Regresión=Vuelta a la etapa de fijación ante el estrés",
      "Síntoma=Satisfacción sustitutiva que expresa, disfrazados, el deseo prohibido y la defensa"
    ],
    g: [
      "La versión final con Eros y Tánatos aparece en Más allá del principio del placer, de ___.|1920|1923|1900",
      "El control de esfínteres es el conflicto típico de la etapa ___.|anal|oral|fálica",
      "Para Freud, al terminar la etapa ___ la estructura básica del carácter ya estaba formada.|fálica|genital|de latencia",
      "Pulsión traduce el término alemán ___, a menudo vertido como «instinto».|Trieb|Lust|Angst",
      "Para Freud, entre normalidad, neurosis y psicosis hay un ___.|continuo|corte|umbral"
    ],
    tf: [
      "En Freud, «sexual» tiene un sentido amplio: cualquier placer corporal.|V",
      "El complejo de Edipo es universal, como han confirmado los estudios posteriores.|F|El Edipo universal no ha recibido apoyo empírico, ni la idea de que las etapas causen el carácter adulto.",
      "En la latencia, que dura hasta la pubertad, la pulsión queda adormecida.|V",
      "La fijación se debe solo a un exceso de frustración en una etapa.|F|Puede deberse a un exceso de frustración o de gratificación, que deja parte de la libido anclada en la etapa."
    ],
    q: [
      "En épocas de mucha presión, Pablo fuma sin parar. Para un psicoanalista clásico, ¿qué le ocurre?|Una regresión a la etapa oral|Una fijación en la etapa anal|Una sublimación de la libido|Ante el estrés se vuelve a la etapa en la que quedó fijada parte de la libido, aquí la oral, centrada en la boca.",
      "Según Freud, ¿a qué tiende Tánatos?|A reducir del todo la tensión|A unir, conservar y reproducir|A aplazar la satisfacción|Tánatos tiende al retorno a lo inorgánico y, dirigido hacia fuera, se expresa como agresión. Unir y reproducir es propio de Eros.",
      "¿Qué relación tiene el complejo de Edipo con el superyó?|Su resolución da origen al superyó|Surge del superyó en la latencia|Ambos aparecen en la etapa oral|El temor al castigo lleva a reprimir el deseo y a identificarse con el rival, y de esa identificación nace el superyó.",
      "Para Freud, el síntoma es…|lo único observable del proceso|el origen del deseo prohibido|una defensa siempre madura|Es una satisfacción sustitutiva que expresa, disfrazados, el deseo prohibido y la defensa contra él."
    ],
    inc: [
      "Sobre la teoría de las pulsiones|Eros incluye solo la sexualidad|La pulsión tiene un objeto que puede cambiar|Tánatos dirigido hacia fuera es agresión|Eros, la pulsión de vida, incluye la sexualidad y también la autoconservación."
    ],
    seq: [
      "Etapas psicosexuales|Oral>Anal>Fálica>Latencia>Genital"
    ],
    cls: [] },
  { t: "La angustia y los mecanismos de defensa",
    tip: "La angustia es una señal de alarma: real ante un peligro externo, neurótica ante los impulsos del ello y moral ante el superyó. Para alejarla, el yo usa mecanismos de defensa en su mayoría inconscientes, que sistematizó Anna Freud (1936). Vaillant los ordenó en cuatro niveles de madurez: psicóticas, inmaduras, neuróticas y maduras. La represión es inconsciente y neurótica, y la supresión, consciente y madura.",
    v: [
      "Angustia real=Alarma ante un peligro del mundo exterior",
      "Angustia neurótica=Alarma ante el riesgo de que los impulsos del ello escapen al control",
      "Angustia moral=Alarma ante el superyó, vivida como culpa o vergüenza",
      "Proyección=Atribuir a otros un impulso propio inaceptable",
      "Formación reactiva=Mostrar con exageración el impulso contrario al rechazado",
      "Desplazamiento=Dirigir el impulso hacia un objeto menos peligroso",
      "Racionalización=Dar razones aceptables a una conducta con motivos menos confesables",
      "Sublimación=Canalizar el impulso hacia fines socialmente valorados"
    ],
    g: [
      "Anna Freud sistematizó las defensas en El yo y los mecanismos de defensa, de ___.|1936|1923|1957",
      "La ___ es la defensa básica, sobre la que se apoyan las demás.|represión|negación|proyección",
      "Freud consideraba la ___ la defensa más adaptativa.|sublimación|racionalización|supresión",
      "Prever un malestar futuro y prepararse para él de forma realista es la ___.|anticipación|intelectualización|racionalización",
      "Vaillant ordenó las defensas en una jerarquía de ___ niveles.|cuatro|tres|cinco"
    ],
    tf: [
      "La represión es consciente y se sitúa entre las defensas maduras de Vaillant.|F|Esa es la supresión. La represión es inconsciente y se sitúa entre las defensas neuróticas.",
      "Las defensas no son patológicas en sí: el problema aparece cuando se vuelven rígidas o deforman en exceso la realidad.|V",
      "Sigmund Freud fue quien sistematizó los mecanismos de defensa en una obra específica.|F|Freud los describió de forma dispersa. Los sistematizó su hija Anna Freud en 1936.",
      "En la jerarquía de Vaillant, la proyección figura entre las defensas inmaduras.|V"
    ],
    q: [
      "Tras un mal día con su jefe, Elena llega a casa y discute con su pareja por una tontería. ¿Qué defensa ilustra?|Desplazamiento|Proyección|Formación reactiva|El impulso se dirige hacia un objeto menos peligroso que su fuente original, el jefe.",
      "Tras no presentarse a una entrevista de trabajo, Íñigo dice: «ese puesto no me convenía». ¿Qué defensa ilustra?|Racionalización|Intelectualización|Negación|Da una razón aceptable a una conducta con motivos menos confesables. Intelectualizar es tratar algo doloroso solo en abstracto.",
      "La culpa por desear transgredir las propias normas es angustia…|moral|neurótica|real|Procede del superyó. La neurótica teme que los impulsos del ello escapen al control, y la real responde a peligros externos.",
      "¿En qué nivel de Vaillant se sitúa la formación reactiva?|Defensas neuróticas|Defensas inmaduras|Defensas maduras|Neuróticas: represión, formación reactiva, intelectualización y desplazamiento. Inmaduras: proyección y acting-out."
    ],
    inc: [
      "Sobre la jerarquía de Vaillant|La sublimación es una defensa neurótica|El humor y el altruismo son defensas maduras|La negación psicótica está en el nivel más bajo|La sublimación está entre las maduras, junto al humor, el altruismo, la supresión y la anticipación."
    ],
    seq: [
      "Escalera de Vaillant, de menor a mayor madurez|Psicóticas>Inmaduras>Neuróticas>Maduras"
    ],
    cls: [
      "Nivel de las defensas según Vaillant|Inmaduras: Proyección; Acting-out|Neuróticas: Represión; Formación reactiva; Intelectualización; Desplazamiento|Maduras: Sublimación; Humor; Altruismo; Supresión; Anticipación"
    ] }
] },
{ n: 4, t: "Qué queda hoy del psicoanálisis", cap: 2, pir: "media", mods: [
  { t: "Las críticas clásicas: método y falsabilidad",
    tip: "Para Popper, una teoría es científica si puede refutarse, y el psicoanálisis fallaba porque lo explica todo. Alimentan esa crítica los mecanismos que invierten el signo, la sobredeterminación, los conceptos difíciles de operativizar y la lectura del rechazo como resistencia. Además, Freud se basó en estudios de caso sin control. Aun así, su valor heurístico es muy alto, y algunas tesis aisladas y bien formuladas sí pueden contrastarse.",
    v: [
      "Falsabilidad=Posibilidad de que una teoría sea refutada por observaciones",
      "Karl Popper=Filósofo que hizo de la refutabilidad el criterio de ciencia",
      "Sobredeterminación=Varias causas a la vez para un mismo síntoma",
      "Operativizar=Traducir un concepto teórico en una medida concreta y observable",
      "Resistencia=Rechazo de una interpretación que se lee como confirmación de ella",
      "Estudio de caso=Análisis detallado de una persona, útil para generar hipótesis",
      "Reconstrucción retrospectiva=Inferir la infancia desde el diván del adulto, años después",
      "Datos contaminados=Observación difícil de separar de la sugestión entre analista y paciente"
    ],
    g: [
      "Si un hombre ama a su madre es el Edipo, y si la rechaza, una ___ contra el Edipo.|formación reactiva|sublimación|regresión",
      "Desde el humanismo se criticó la imagen ___ y reduccionista del ser humano que ofrece el psicoanálisis.|determinista|hedonista|idealista",
      "Para Popper, el problema del psicoanálisis no es que explique poco, sino que lo explica ___.|todo|mal|tarde",
      "Los pacientes de Freud eran adultos que acudían a consulta, lo que supone una muestra ___.|sesgada|aleatoria|amplia",
      "El estudio de caso tiene valor para ___ hipótesis, pero no para ponerlas a prueba.|generar|refutar|confirmar"
    ],
    tf: [
      "Para Popper, el problema del psicoanálisis era que explicaba muy pocas conductas.|F|Era lo contrario: lo explica todo, y como ningún resultado lo contradice, no predice nada.",
      "Ninguna afirmación psicoanalítica puede contrastarse empíricamente.|F|Algunas, separadas del conjunto y formuladas con precisión, sí pueden ponerse a prueba, con un balance desigual.",
      "La formación reactiva, la negación o la proyección permiten interpretar una conducta y la contraria como prueba de lo mismo.|V",
      "Pese a sus problemas de método, el psicoanálisis tiene un valor heurístico muy alto.|V"
    ],
    q: [
      "Un paciente rechaza la interpretación de su analista, y el analista ve en ese rechazo una confirmación. ¿Qué rasgo de la teoría ilustra?|La resistencia|La sobredeterminación|La proyección|Si el rechazo se lee como resistencia, la interpretación nunca puede ponerse en duda, lo que alimenta la crítica de falsabilidad.",
      "¿Qué problema del método freudiano señala que el paciente podía adaptar su relato a lo que esperaba el analista?|Datos contaminados|Muestra sesgada|Ausencia de control|Es difícil separar la observación de la sugestión cuando el analista interpreta y el paciente se ajusta a sus expectativas.",
      "¿Qué significa que la libido o la energía psíquica sean difíciles de operativizar?|Que no hay medida clara que los represente|Que carecen de cualquier valor heurístico|Que contradicen otras partes de la teoría|Operativizar es traducir un concepto en una medida concreta. Con conceptos vagos no está claro qué medida los representa.",
      "¿Qué requisito de una teoría científica cumple bien el psicoanálisis clásico?|Valor heurístico|Predicciones arriesgadas|Datos replicables|Ha sido una teoría muy fértil. Sus predicciones arriesgadas son escasas y sus datos son notas clínicas del propio analista."
    ],
    inc: [
      "Sobre la base empírica de Freud|Incluía grupos de comparación|Se apoyó en pocos pacientes|Reconstruía la infancia años después|No había grupo de comparación ni varios observadores independientes: es la ausencia de control."
    ],
    seq: [],
    cls: [
      "Crítica al psicoanálisis|Falsabilidad: Mecanismos que invierten el signo; Sobredeterminación; Conceptos vagos; Resistencia|Base empírica: Muestra sesgada; Datos contaminados; Reconstrucción retrospectiva; Ausencia de control"
    ] },
  { t: "El inconsciente que sí existe",
    tip: "Hay consenso en que gran parte de la actividad mental ocurre fuera de la conciencia, pero lo que tiene apoyo es sobre todo el inconsciente cognitivo: priming, memoria implícita y motivos implícitos, que no son conscientes porque no necesitan serlo. El inconsciente dinámico freudiano, con contenidos reprimidos por amenazantes, sigue muy discutido. Westen (1998) rescató cinco ideas generales, pero no la arquitectura específica de la teoría.",
    v: [
      "Inconsciente cognitivo=Procesos automáticos e implícitos fuera de la conciencia, sin función defensiva",
      "Priming=Facilitación del procesamiento por un estímulo previo relacionado",
      "Memoria implícita=Mejora del rendimiento por experiencia previa sin recuerdo consciente",
      "Motivos implícitos=Necesidades medidas con técnicas indirectas que predicen la conducta espontánea",
      "Inconsciente dinámico=Contenidos apartados activamente de la conciencia por ser amenazantes",
      "Ambivalencia=Sentimientos o motivos en conflicto hacia la misma persona o situación",
      "Drew Westen=Autor de una revisión de 1998 sobre el legado freudiano compatible con la ciencia",
      "Representaciones mentales=Imágenes de uno mismo y de los demás que guían las relaciones"
    ],
    g: [
      "Los motivos implícitos apenas se relacionan con lo que la persona ___ de sí misma.|dice|ignora|reprime",
      "Los pacientes con ___ pueden mejorar en una tarea que no recuerdan haber practicado.|amnesia|afasia|psicosis",
      "Los procesos del inconsciente cognitivo funcionan por debajo de la conciencia porque así resultan más rápidos y ___.|económicos|amenazantes|defensivos",
      "Según Westen, el desarrollo implica pasar de la dependencia a la ___ madura.|interdependencia|independencia|autonomía",
      "El inconsciente cognitivo se estudia con experimentos y medidas ___.|indirectas|clínicas|introspectivas"
    ],
    tf: [
      "El priming y la memoria implícita son pruebas del inconsciente dinámico freudiano.|F|Son procesos cognitivos no conscientes, sin función defensiva. No hace falta suponer que estén ocultos por amenazantes.",
      "Las cinco ideas de Westen son generales y hoy las comparten las teorías del apego, sociocognitivas o del desarrollo.|V",
      "Westen (1998) concluyó que las etapas psicosexuales causan el carácter adulto.|F|Westen rescata ideas generales, como la huella de la infancia, pero no las etapas como causa del carácter.",
      "Que la infancia importe no demuestra que importe a través del control de esfínteres o del Edipo.|V"
    ],
    q: [
      "En un experimento, una palabra presentada antes facilita reconocer otra relacionada, aunque el participante no recuerda haberla visto. ¿Qué fenómeno es?|Priming|Represión|Supresión|Es un proceso del inconsciente cognitivo: automático, sin función defensiva y con amplio consenso.",
      "¿Cuál es la diferencia principal entre el inconsciente cognitivo y el dinámico?|Por qué el contenido no es consciente|Si el contenido influye en la conducta|Si se estudia con tests de personalidad|En el cognitivo, porque no necesita serlo. En el freudiano, porque amenaza al yo y ha sido expulsado por la represión.",
      "¿Qué idea NO figura entre las cinco que, según Westen, conservan apoyo?|La catarsis|La ambivalencia|La huella de la infancia|La catarsis, el Edipo universal y las etapas como causa del carácter figuran entre las tesis sin apoyo.",
      "¿Qué predicen mejor los motivos implícitos, como el logro o el poder?|La conducta espontánea|Lo que la persona dice|Las defensas maduras|Se miden con técnicas indirectas y apenas se relacionan con lo que la persona dice de sí misma (Unidad 15)."
    ],
    inc: [
      "Sobre el inconsciente actual|El inconsciente dinámico tiene hoy consenso amplio|Buena parte de la vida mental es no consciente|El inconsciente cognitivo no tiene función defensiva|El consenso amplio es para el inconsciente cognitivo. El inconsciente dinámico freudiano sigue muy discutido."
    ],
    seq: [],
    cls: [
      "Inconsciente freudiano o cognitivo|Freudiano: Deseos y recuerdos reprimidos; No es consciente porque amenaza al yo; Interpretación clínica; Muy discutido|Cognitivo: Priming; Memoria implícita; Experimentos con medidas indirectas; Consenso amplio"
    ] },
  { t: "Represión y memoria: un debate abierto",
    tip: "La represión, piedra angular del psicoanálisis, es hoy uno de sus puntos más debatidos. Hay que distinguirla del olvido ordinario y de la supresión consciente. La memoria es reconstructiva y los traumas tienden más a recordarse que a olvidarse, pero eso no prueba que un recuerdo recuperado concreto sea falso. Lo que sí se sabe es que un recuerdo recuperado en terapia no basta como prueba por sí solo y que las técnicas sugestivas aumentan el riesgo de recuerdos falsos.",
    v: [
      "Olvido ordinario=Pérdida por desuso, interferencia o falta de claves, sin defensa alguna",
      "Supresión=Esfuerzo consciente por no pensar en algo",
      "Represión=Apartamiento inconsciente de un contenido amenazante",
      "Recuerdo recuperado=Suceso antiguo que aparece en la memoria tiempo después, a menudo en terapia",
      "Memoria reconstructiva=Recordar como rehacer el suceso a partir de huellas, conocimientos y expectativas",
      "Recuerdo falso=Recuerdo vivido con plena convicción y producido por sugestión o imaginación",
      "Recuerdos intrusivos=Problema típico del estrés postraumático: el suceso vuelve una y otra vez",
      "Imaginación guiada=Técnica sugestiva que aumenta el riesgo de crear recuerdos falsos"
    ],
    g: [
      "Para Freud, la represión era la ___ del psicoanálisis.|piedra angular|hipótesis menor|técnica clínica",
      "En el estrés postraumático, el problema típico no es la falta de recuerdo, sino los recuerdos ___.|intrusivos|reprimidos|implícitos",
      "La postura ___ subraya el riesgo de crear recuerdos falsos y acusaciones injustas.|escéptica|freudiana|clínica",
      "La postura favorable a la represión subraya el riesgo de desatender a víctimas ___.|reales|falsas|antiguas",
      "Recordar no es reproducir una ___, sino reconstruir el suceso.|grabación|vivencia|emoción"
    ],
    tf: [
      "Que una persona pueda evitar a propósito pensar en algo demuestra que existe la represión.|F|Eso es supresión, un proceso consciente. No prueba un mecanismo inconsciente que entierre los traumas.",
      "La investigación demuestra que los recuerdos recuperados en terapia son siempre falsos.|F|Nada demuestra que un recuerdo recuperado concreto sea falso. Lo que no puede es tomarse como prueba por sí solo.",
      "Una persona puede olvidar un suceso un tiempo y recordarlo ante una clave adecuada sin que haga falta suponer represión.|V",
      "Los sucesos traumáticos tienden más a recordarse que a olvidarse.|V"
    ],
    q: [
      "Tras varias sesiones de imaginación guiada, Lucía «ve» una escena de su infancia que nunca había recordado. ¿Qué pregunta es la adecuada desde el escepticismo actual?|De dónde procede y qué otras pruebas hay|Qué contenido reprimió y por qué motivo|En qué etapa psicosexual quedó fijada|Se trata de tomar en serio el relato sin inducirlo y de buscar pruebas independientes de la terapia.",
      "Decidir no pensar en una preocupación hasta mañana para poder dormir es…|supresión|represión|negación|Es consciente, y Vaillant la sitúa entre las defensas maduras. La represión es inconsciente y neurótica.",
      "¿Qué dato de la investigación sobre memoria pesa contra la idea de que los traumas se reprimen?|Los traumas tienden a recordarse|Los traumas se olvidan por desuso|La memoria es una copia fiel|En el estrés postraumático predominan los recuerdos intrusivos, no la falta de recuerdo.",
      "¿Por qué la represión tiene consecuencias clínicas y legales?|Implicaría recuperar traumas intactos|Es una defensa madura y consciente|Explica cualquier olvido ordinario|Si existiera como la describió Freud, un suceso doloroso podría olvidarse durante años y volver intacto en terapia."
    ],
    inc: [
      "Sobre los recuerdos recuperados|Bastan por sí solos como prueba del suceso|La sugestión puede crear recuerdos falsos convincentes|Las técnicas sugestivas aumentan el riesgo de error|Un recuerdo recuperado en terapia no puede tomarse como prueba por sí solo: hacen falta pruebas independientes."
    ],
    seq: [],
    cls: [
      "Olvido, supresión o represión|Olvido ordinario: Desuso; Interferencia; Falta de claves|Supresión: Proceso consciente; Defensa madura; No pensar en algo hasta mañana|Represión: Proceso inconsciente; Defensa neurótica; La más difícil de demostrar"
    ] },
  { t: "La terapia psicodinámica ante la evidencia",
    tip: "El análisis clásico usaba el diván, sesiones frecuentes durante años y la interpretación de sueños, transferencia y resistencias para hacer consciente lo inconsciente. Las terapias psicodinámicas son más breves, con un terapeuta más activo y centradas en los patrones de relación. Parecen comparables a otras en algunos trastornos, pero tienen menos ensayos y están expuestas al sesgo de lealtad. Además, la eficacia de una terapia no demuestra que su teoría sea cierta.",
    v: [
      "Transferencia=Sentimientos que el paciente dirige al terapeuta como a una figura de su pasado",
      "Terapia psicodinámica=Heredera más breve del psicoanálisis, centrada en patrones de relación",
      "Sesgo de lealtad=Tendencia de los ensayos a favorecer la terapia preferida por sus investigadores",
      "Análisis clásico=Tratamiento con diván y sesiones frecuentes durante años",
      "Patrones de relación=Formas de vincularse que se repiten y que la terapia actual examina",
      "Meta del análisis=Hacer consciente lo inconsciente",
      "Catarsis=Idea de que desahogarse descarga la agresividad, sin apoyo empírico",
      "Muñeco Bobo=Estudios de Bandura (1961-1963) en los que observar agresión la aumentaba"
    ],
    g: [
      "Las terapias psicodinámicas son más ___ que el análisis clásico y tienen objetivos más delimitados.|breves|largas|intensas",
      "En la terapia psicodinámica, el terapeuta adopta un papel más ___ y se sienta frente al paciente.|activo|neutral|distante",
      "Los estudios del muñeco Bobo mostraron que observar agresión la ___.|aumenta|descarga|reduce",
      "Frente a las terapias cognitivo-conductuales, la psicodinámica cuenta con ___ ensayos.|menos|más|tantos",
      "El sesgo de lealtad afecta a ___ las orientaciones terapéuticas.|todas|pocas|algunas"
    ],
    tf: [
      "Que la terapia psicodinámica funcione en un trastorno confirma la teoría freudiana de la personalidad.|F|Eficacia y validez de la teoría son cuestiones distintas: puede ayudar por ingredientes que no exigen el ello ni el Edipo.",
      "En algunos trastornos, los resultados de la terapia psicodinámica parecen comparables a los de otros tratamientos psicológicos.|V",
      "Golpear un cojín cuando se está enfadado reduce la agresión posterior, como predice la catarsis.|F|La catarsis no tiene apoyo. Observar agresión la aumenta, y la agresión se aprende y se refuerza como otras conductas.",
      "Hoy hay ensayos y revisiones que evalúan la terapia psicodinámica, aunque su eficacia sigue siendo objeto de debate.|V"
    ],
    q: [
      "Andrés mejora tras un año de terapia psicodinámica en la que entiende por qué repite la misma pelea con todas sus parejas. ¿Qué se puede concluir?|Que la mejora no prueba la teoría|Que su patrón nace de una fijación anal|Que la represión queda demostrada|La mejora es real, pero no prueba el origen que propone la teoría: puede deberse a la relación o a reconocer patrones.",
      "¿Qué ingrediente NO hace falta para explicar por qué ayuda una terapia psicodinámica?|La existencia del ello|Una relación de confianza|Hablar de emociones evitadas|Puede ayudar por la relación, por hablar de emociones evitadas o por reconocer patrones, sin que existan ello, libido o Edipo.",
      "¿Por qué el sesgo de lealtad obliga a leer con cautela las comparaciones entre terapias?|Los ensayos favorecen la terapia preferida|Las terapias breves exageran sus efectos|Los ensayos psicodinámicos son demasiado grandes|Los resultados tienden a favorecer la terapia que prefieren los investigadores que realizan el ensayo, en cualquier orientación.",
      "En el análisis clásico, ¿qué se interpretaba además de los sueños?|La transferencia y las resistencias|Los refuerzos y castigos del paciente|Las metas y expectativas conscientes|Con la asociación libre, se interpretaban los sueños, la transferencia y las resistencias para hacer consciente lo inconsciente."
    ],
    inc: [
      "Sobre la terapia psicodinámica actual|Mantiene el diván y sesiones de años|Es más breve que el análisis clásico|Se centra en los patrones de relación|El diván y las sesiones frecuentes durante años eran propios del análisis clásico. La terapia psicodinámica es más breve y activa."
    ],
    seq: [],
    cls: [
      "Análisis clásico o terapia psicodinámica|Análisis clásico: Diván; Sesiones frecuentes durante años; Asociación libre|Terapia psicodinámica: Más breve; Terapeuta activo frente al paciente; Objetivos más delimitados"
    ] }
] }
);

// SAIMAP Psicología · Personalidad I · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "La mirada humanista y los constructos personales", cap: 2, pir: "media", mods: [
  { t: "Rogers: el self y la tendencia actualizante",
    tip: "La psicología humanista se presentó como una tercera fuerza, holista, fenomenológica y optimista, cercana al polo idiográfico. Rogers parte de la tendencia actualizante y del campo fenoménico. Cuando el afecto es condicional, el niño interioriza condiciones de valía y aparece la incongruencia entre self y experiencia. La consideración positiva incondicional permite admitir la experiencia sin amenaza.",
    v: [
      "Tercera fuerza=Nombre de la psicología humanista frente al psicoanálisis y el conductismo",
      "Tendencia actualizante=Tendencia innata del organismo a mantenerse y desarrollar sus capacidades",
      "Campo fenoménico=Conjunto de lo que la persona experimenta en cada momento",
      "Self ideal=Lo que a la persona le gustaría ser",
      "Condiciones de valía=Requisitos interiorizados para sentirse valioso, aprendidos de un afecto condicional",
      "Incongruencia=Discrepancia entre el self y la experiencia, fuente de ansiedad y de defensa",
      "Consideración positiva incondicional=Aceptar a alguien como valioso con independencia de sus conductas concretas",
      "Técnica Q=Ordenar frases sobre uno mismo para el self real y el ideal y correlacionar ambas"
    ],
    g: [
      "Por su énfasis en la persona única, el humanismo se sitúa cerca del polo ___.|idiográfico|nomotético|situacionista",
      "Lo que no encaja con el self se niega o se ___.|distorsiona|desplaza|proyecta",
      "En la técnica Q, la ___ entre las ordenaciones del self real y del ideal indica la congruencia.|correlación|varianza|media",
      "Rogers construyó su teoría a partir de la práctica ___.|clínica|experimental|psicométrica",
      "La consideración positiva incondicional no equivale a ___ todas las conductas.|aprobar|ignorar|castigar"
    ],
    tf: [
      "Para Rogers, las personas reaccionan a la realidad tal como la perciben, más que a la realidad objetiva.|V",
      "La consideración positiva incondicional implica aprobar todas las conductas del cliente.|F|Es aceptar a la persona como valiosa con independencia de sus conductas, lo que no equivale a aprobarlo todo.",
      "Las tres actitudes del terapeuta rogeriano son autenticidad, consideración positiva incondicional y comprensión empática.|V",
      "En la técnica Q, la persona compara figuras de su vida en tríadas para obtener constructos.|F|Eso es la rejilla de Kelly. En la técnica Q se ordenan frases descriptivas para el self real y para el ideal."
    ],
    q: [
      "Lucía creció oyendo elogios a «la que nunca se queja». De adulta, cuando nota rabia, piensa «estoy un poco floja». ¿Qué concepto de Rogers lo ilustra mejor?|Incongruencia por condiciones de valía|Fijación en una necesidad de déficit|Falta de tendencia actualizante|El afecto condicional genera condiciones de valía, y la experiencia que no encaja con el self, la rabia, se distorsiona.",
      "Para Rogers, ¿de dónde nacen las condiciones de valía?|De un afecto condicionado a expectativas|De impulsos inconscientes frustrados|De constructos bipolares rígidos|Cuando el afecto de las personas importantes depende de cumplir expectativas, el niño interioriza requisitos para sentirse valioso.",
      "En la técnica Q, ¿qué indica una correlación alta entre el self real y el ideal?|Mayor congruencia|Mayor deseabilidad social|Menor apertura a la experiencia|La correlación entre ambas ordenaciones indica la congruencia y permite ver si la distancia se reduce durante la terapia.",
      "Dos conductores en el mismo atasco lo viven de forma muy distinta. ¿Qué concepto rogeriano lo explica?|El campo fenoménico|La tendencia actualizante|Las condiciones de valía|Cada persona reacciona a la realidad tal como la percibe dentro de su campo fenoménico."
    ],
    inc: [
      "Sobre la psicología humanista|Prefiere los métodos nomotéticos y experimentales|Estudia a la persona como un todo organizado|Le interesa la persona sana, no solo el trastorno|Por su énfasis en la persona única se sitúa cerca del polo idiográfico y prefiere los métodos cualitativos."
    ],
    seq: [],
    cls: [] },
  { t: "Maslow y la jerarquía de necesidades",
    tip: "Maslow (1943, 1954) ordena las necesidades por prepotencia: fisiológicas, seguridad, pertenencia y amor, estima y autorrealización. La estima va por encima de la pertenencia. Las cuatro primeras son de déficit y dejan de motivar al satisfacerse, y la autorrealización es una necesidad de ser que sigue motivando. El propio Maslow advirtió que la jerarquía no es rígida.",
    v: [
      "Prepotencia=Una necesidad inferior muy insatisfecha domina la conducta sobre las superiores",
      "Necesidades de déficit=Surgen de una carencia y dejan de motivar al satisfacerse",
      "Necesidades de ser=Impulso de desarrollarse que sigue motivando e incluso crece al satisfacerse",
      "Metanecesidades=Otro nombre de las necesidades de crecimiento",
      "Valores B=Verdad, belleza, justicia o bondad, que funcionan como necesidades al estar metamotivado",
      "Autorrealización=Desplegar el propio potencial y llegar a ser todo lo que uno puede ser",
      "Experiencia cumbre=Momento de plenitud intensa, como el de un músico absorto en un concierto",
      "Estima=Respeto por uno mismo y reconocimiento de los demás"
    ],
    g: [
      "En la jerarquía de Maslow, la estima se sitúa justo por encima de ___.|la pertenencia|la seguridad|la autorrealización",
      "Maslow presentó su teoría en el artículo «A theory of human motivation» en ___.|1943|1954|1970",
      "Vivir con un contrato que se renueva cada mes afecta sobre todo a las necesidades de ___.|seguridad|estima|pertenencia",
      "Para Maslow, la autorrealización es un ___ continuo que probablemente nunca se completa.|proceso|peldaño|estado",
      "Las necesidades ___ son las más poderosas cuando faltan.|fisiológicas|de estima|de seguridad"
    ],
    tf: [
      "Las necesidades de ser dejan de motivar en cuanto se satisfacen.|F|Eso ocurre con las de déficit. Las de ser siguen motivando e incluso crecen al satisfacerse.",
      "Según Maslow, una necesidad pierde fuerza cuando se satisface de forma razonable, no necesariamente por completo.|V",
      "La pertenencia y amor se sitúa por encima de la estima en la jerarquía de Maslow.|F|Es la trampa típica: la estima va por encima de la pertenencia y amor.",
      "Maslow admitió excepciones, como quien antepone sus ideales a su seguridad.|V"
    ],
    q: [
      "Ana aprende a tocar el violonchelo a los 50 años por puro interés, y cuanto más avanza, más le apetece seguir. ¿Qué tipo de necesidad muestra?|De ser o crecimiento|De estima o reconocimiento|De déficit superior|Las necesidades de ser surgen del impulso de desarrollarse y siguen motivando, e incluso crecen, al satisfacerse.",
      "¿Qué principio organiza la jerarquía de Maslow?|La prepotencia|La metamotivación|La autoeficacia|Mientras una necesidad inferior está muy insatisfecha domina la conducta. Al satisfacerse, gana peso la siguiente.",
      "¿Cuál es el orden correcto, de abajo arriba?|Seguridad, pertenencia, estima|Seguridad, estima, pertenencia|Pertenencia, seguridad, estima|Tras las fisiológicas vienen la seguridad, la pertenencia y amor, la estima y la autorrealización.",
      "¿A quiénes estudió Maslow para describir la autorrealización?|A personas que él consideraba autorrealizadas|A pacientes de terapia centrada en el cliente|A una muestra mundial de la encuesta Gallup|Eligió figuras como Lincoln o Einstein y les atribuyó percepción realista, aceptación, espontaneidad y autonomía."
    ],
    inc: [
      "Sobre la jerarquía de Maslow|Las de déficit son las cinco necesidades de la jerarquía|Los valores B funcionan como necesidades al estar metamotivado|La autorrealización es un proceso que quizá nunca se completa|Las de déficit son solo las cuatro primeras. La autorrealización es una necesidad de ser."
    ],
    seq: [
      "Jerarquía de Maslow de abajo arriba|Fisiológicas>Seguridad>Pertenencia y amor>Estima>Autorrealización"
    ],
    cls: [
      "Tipo de necesidad|Déficit: fisiológicas; seguridad; pertenencia y amor; estima|Ser: autorrealización; metanecesidades; valores B"
    ] },
  { t: "Qué dice la evidencia: la pirámide que Maslow no dibujó",
    tip: "Bridgman, Cummings y Ballard (2019) no hallaron ninguna pirámide en la obra ni en el archivo de Maslow: el triángulo escalonado es de Davis (1957) y la pirámide, de McDermid (1960). Tay y Diener (2011) vieron que cada necesidad se asocia con el bienestar con bastante independencia del orden. El humanismo aportó temas y prácticas valiosas, pero sus conceptos son vagos y están poco contrastados.",
    v: [
      "Bridgman, Cummings y Ballard=Revisaron en 2019 la obra y el archivo de Maslow sin hallar ninguna pirámide",
      "Davis (1957)=Autor del primer triángulo escalonado, en un texto de gestión",
      "McDermid (1960)=Autor de la pirámide propiamente dicha, en la revista Business Horizons",
      "Tay y Diener (2011)=Usaron la encuesta mundial de Gallup en más de un centenar de países",
      "Kenrick et al. (2010)=Propusieron una jerarquía evolutiva con la parentalidad en la cúspide",
      "Circularidad de Maslow=Elegir a personas por sus virtudes y luego descubrir que las tienen",
      "Teoría de la autodeterminación=Recoge el legado humanista con cuestionarios y diseños experimentales",
      "Pirámide divulgativa=Imagen que sugiere niveles completos y ascenso lineal, ideas que Maslow no defendió"
    ],
    g: [
      "El primer triángulo escalonado con las necesidades de Maslow es de ___ (1957).|Davis|McDermid|Bridgman",
      "La pirámide propiamente dicha apareció en un artículo de McDermid en ___.|1960|1943|1957",
      "Kenrick et al. (2010) situaron la ___ en la cúspide de su jerarquía evolutiva.|parentalidad|autorrealización|pertenencia",
      "Contrastar la jerarquía es difícil porque Maslow no definió cuándo una necesidad está ___ satisfecha.|suficientemente|completamente|parcialmente",
      "Tay y Diener (2011) usaron la encuesta mundial de ___.|Gallup|Eurostat|la OMS"
    ],
    tf: [
      "La pirámide sugiere que la autorrealización es un piso final reservado a unos pocos, una idea que Maslow no defendió.|V",
      "Tay y Diener (2011) hallaron que cada necesidad solo aporta bienestar si las inferiores están cubiertas.|F|Hallaron lo contrario: cada necesidad se asocia con el bienestar con bastante independencia del orden.",
      "Kenrick et al. (2010) abandonaron por completo la idea de una jerarquía de necesidades.|F|La conservaron, pero reformularon su contenido desde la psicología evolucionista, con la parentalidad en la cúspide.",
      "La teoría de la autodeterminación recoge la idea humanista de necesidades psicológicas básicas.|V"
    ],
    q: [
      "Un manual afirma que Maslow dibujó su pirámide en 1954. ¿Qué debería corregir un revisor?|Que la pirámide es de McDermid (1960)|Que la pirámide es de Maslow (1943)|Que la pirámide es de Davis (1970)|Bridgman, Cummings y Ballard (2019) no hallaron pirámide en Maslow. El triángulo es de Davis (1957) y la pirámide, de McDermid (1960).",
      "Una persona con ingresos precarios se siente plena en sus relaciones y en lo que aprende. ¿Con qué hallazgo encaja?|Con Tay y Diener (2011)|Con Kenrick et al. (2010)|Con McDermid (1960)|Las necesidades parecen universales, pero no funcionan como peldaños obligatorios.",
      "¿Qué limitación ilustra el estudio de Maslow sobre los autorrealizados?|La circularidad de la selección|El exceso de control experimental|La dependencia de datos de laboratorio|Si se eligen personas por tener ciertas virtudes, no sorprende descubrir que las tienen.",
      "¿Qué se considera una aportación del humanismo?|La importancia de la relación terapéutica|Un programa de investigación explícito|Conceptos operativos fáciles de medir|Su valor clínico es reconocido. En cambio, tuvo poco programa de investigación y conceptos vagos, difíciles de medir."
    ],
    inc: [
      "Sobre la pirámide de Maslow|Maslow la dibujó en Motivation and Personality|Sugiere que cada nivel se completa antes del siguiente|Se difundió desde los manuales de empresa|Maslow no dibujó ninguna pirámide. Aparece en textos de gestión de Davis (1957) y McDermid (1960)."
    ],
    seq: [
      "Del texto de Maslow a la pirámide|Maslow (1943)>Davis (1957)>McDermid (1960)>Bridgman, Cummings y Ballard (2019)"
    ],
    cls: [
      "Valoración del humanismo|Aportaciones: relación terapéutica; técnica Q; temas como el sentido y la elección|Limitaciones: conceptos vagos; poca contrastación; optimismo asumido"
    ] },
  { t: "Kelly: cada persona como científica",
    tip: "Kelly (1955) concibe a la persona como científica que formula hipótesis, las pone a prueba y las revisa. Su base es el alternativismo constructivo: la realidad siempre admite otra interpretación. La teoría tiene un postulado fundamental y 11 corolarios, y los constructos son bipolares. Para explorarlos creó el test de la rejilla (REP), idiográfico y cuantificable a la vez.",
    v: [
      "Alternativismo constructivo=Supuesto de que la realidad siempre admite otra interpretación",
      "Persona como científica=Metáfora de quien formula hipótesis, las prueba y las revisa",
      "Postulado fundamental=Los procesos se canalizan por las formas en que se anticipan los acontecimientos",
      "Corolario de dicotomía=Los constructos son bipolares y solo tienen sentido por su contraste",
      "Corolario de individualidad=Las personas difieren en cómo construyen los acontecimientos",
      "Corolario de comunalidad=Dos personas se parecen si construyen la experiencia de forma parecida",
      "Corolario de sociabilidad=Para relacionarse bien hay que entender cómo construye el otro las cosas",
      "Terapia de rol fijo=El paciente ensaya un personaje con constructos distintos de los suyos"
    ],
    g: [
      "Kelly publicó The Psychology of Personal Constructs en ___.|1955|1943|1968",
      "Para Kelly, la conducta se orienta a ___ los acontecimientos.|anticipar|recordar|evitar",
      "La teoría de Kelly consta de un postulado fundamental y ___ corolarios.|11|12|7",
      "Para Kelly, la ___ aparece cuando los acontecimientos quedan fuera del alcance de los constructos.|ansiedad|incongruencia|culpa",
      "La teoría de Kelly suele clasificarse entre las internalistas de tipo ___.|procesual|estructural|situacional"
    ],
    tf: [
      "Kelly necesitaba una teoría aparte de la motivación para explicar por qué actúa la persona.|F|No la necesitaba: la persona ya está activa por naturaleza y su conducta se orienta a anticipar.",
      "Dos personas pueden usar la palabra «simpático» con constructos distintos, porque el polo opuesto es personal.|V",
      "El corolario de sociabilidad exige compartir la forma en que el otro construye las cosas.|F|Basta con entender cómo construye el otro las cosas, no necesariamente compartirlo.",
      "La rejilla puede analizarse de forma numérica para ver qué constructos van juntos.|V"
    ],
    q: [
      "Una psicóloga pide a un cliente que diga en qué se parecen su hermana y su jefa y en qué se diferencian de su amigo. Responde «exigentes» frente a «relajado». ¿Qué técnica usa?|La rejilla de Kelly (REP)|La técnica Q de Stephenson|La terapia de rol fijo|Comparar tríadas de figuras para obtener constructos bipolares es la rejilla. La técnica Q ordena frases sobre el self real y el ideal.",
      "¿Por qué se suele considerar cognitivo el núcleo de la teoría de Kelly?|Importa cómo interpreta la persona los hechos|Importa cómo se refuerzan sus conductas|Importa cómo se satisfacen sus necesidades|Comparte con el humanismo el interés por la vivencia, pero lo central es cómo se interpretan los acontecimientos.",
      "Según el corolario de comunalidad, dos personas se parecen psicológicamente si…|construyen la experiencia de forma parecida|han vivido acontecimientos muy parecidos|comparten los mismos rasgos de temperamento|No importa que hayan vivido lo mismo, sino que lo construyan de forma parecida.",
      "¿Qué limitó la difusión de la teoría de Kelly?|Su lenguaje formal y escasa investigación|Su rechazo explícito de lo cognitivo|Su dependencia de experimentos con animales|Anticipó el enfoque cognitivo, pero su lenguaje formal y su poca investigación propia limitaron su difusión."
    ],
    inc: [
      "Sobre la teoría de Kelly|Los constructos son unipolares y absolutos|La realidad admite interpretaciones alternativas|La rejilla es idiográfica y cuantificable|Por el corolario de dicotomía, los constructos son bipolares: solo tienen sentido por su contraste."
    ],
    seq: [
      "Procedimiento de la rejilla|Nombrar figuras importantes de la propia vida>Comparar tríadas de figuras>Formular el constructo bipolar>Organizar la matriz de elementos por constructos"
    ],
    cls: [
      "Autor|Rogers: técnica Q; condiciones de valía; terapia centrada en el cliente|Kelly: rejilla; alternativismo constructivo; terapia de rol fijo"
    ] }
] },
{ n: 6, t: "Conducta, aprendizaje social y modelos explicativos", cap: 2, pir: "media", mods: [
  { t: "Dollard, Miller y Skinner: la personalidad como aprendizaje",
    tip: "Para las teorías del aprendizaje, la personalidad es un conjunto de conductas aprendidas. Dollard y Miller (1950) tradujeron a Freud al lenguaje de Hull: impulso, señal, respuesta y refuerzo, con el hábito como unidad. En el conflicto de aproximación-evitación, el gradiente de evitación crece más deprisa al acercarse a la meta. Skinner rechazó los constructos internos y explicó la conducta por sus contingencias de refuerzo.",
    v: [
      "Hábito=Conexión aprendida entre señal y respuesta, unidad estructural para Dollard y Miller",
      "Impulso=Estímulo intenso que activa la conducta",
      "Señal=Estímulo que indica cuándo y cómo responder",
      "Impulso secundario=Motivo aprendido, como el miedo, capaz de mantener conductas duraderas",
      "Aproximación-evitación=Conflicto en que una misma meta atrae y asusta a la vez",
      "Contingencias de refuerzo=Lo que sigue a una conducta y cambia la probabilidad de que se repita",
      "Análisis funcional=Búsqueda de las condiciones ambientales que mantienen una conducta",
      "Conductismo radical=Postura de Skinner que rechaza los constructos internos como explicación"
    ],
    g: [
      "Dollard y Miller tradujeron a Freud al lenguaje de la teoría del aprendizaje de ___.|Hull|Skinner|Rotter",
      "En el conflicto de aproximación-evitación, cerca de la meta domina la ___.|evitación|aproximación|indecisión",
      "Para Dollard y Miller, la represión consiste en aprender a no ___ en algo.|pensar|actuar|soñar",
      "Para Skinner, la personalidad es el ___ de conductas de una persona.|repertorio|resumen|sistema",
      "La economía de fichas es una técnica de ___ de conducta.|modificación|observación|regulación"
    ],
    tf: [
      "En el conflicto de aproximación-evitación, el gradiente de aproximación crece más deprisa al acercarse a la meta.|F|Es el de evitación el que crece más deprisa, por eso la persona retrocede cerca de la meta.",
      "Para Dollard y Miller, la neurosis es un conflicto aprendido del que la persona no es consciente.|V",
      "Skinner aceptaba explicar que alguien ayude por un rasgo de amabilidad, siempre que se midiera bien.|F|Para Skinner, decir «porque es amable» solo pone nombre a la conducta. Hay que buscar las condiciones que la mantienen.",
      "Para Skinner, la coherencia de la conducta procede de la regularidad de los ambientes y refuerzos.|V"
    ],
    q: [
      "Pablo planea durante días pedirle una cita a una compañera, pero se echa atrás justo cuando la tiene delante. ¿Cómo lo explicarían Dollard y Miller?|La evitación crece más deprisa cerca|La aproximación crece más deprisa cerca|Ambos gradientes bajan al acercarse|Lejos de la meta domina la aproximación. Cerca, el gradiente de evitación supera al de aproximación y la persona retrocede.",
      "Un alumno con miedo a hablar mira el móvil cuando la profesora pide voluntarios, y el miedo baja al pasar el turno. ¿Qué papel cumple esa bajada del miedo?|Refuerzo|Señal|Impulso|La consecuencia que reduce el impulso es el refuerzo. La petición de voluntarios es la señal, y el miedo, el impulso.",
      "¿Qué libro de Dollard y Miller (1950) traduce el psicoanálisis a la teoría del aprendizaje?|Personality and Psychotherapy|Personality and Assessment|Social Learning and Clinical Psychology|Personality and Assessment es de Mischel (1968), y Social Learning and Clinical Psychology, de Rotter (1954).",
      "Según Skinner, ¿cómo debe explicarse la conducta de alguien que ayuda a todo el mundo?|Por las contingencias que la mantienen|Por un rasgo estable de amabilidad|Por sus expectativas de refuerzo|Skinner rechazaba los constructos internos. Las expectativas son una variable cognitiva propia de Rotter."
    ],
    inc: [
      "Sobre Dollard y Miller|Su unidad estructural es el rasgo de personalidad|Distinguieron impulsos primarios y secundarios|Antes estudiaron la imitación desde la óptica de Hull|La unidad estructural es el hábito, una conexión aprendida entre señal y respuesta."
    ],
    seq: [],
    cls: [
      "Autor|Dollard y Miller: hábito; impulso secundario; conflicto de aproximación-evitación|Skinner: contingencias de refuerzo; análisis funcional; economía de fichas"
    ] },
  { t: "Rotter, Bandura y Mischel: entra la cognición",
    tip: "El aprendizaje social cognitivo añade lo que la persona piensa, espera y valora. Para Rotter (1954), el potencial de conducta depende de la expectativa y del valor del refuerzo en una situación psicológica, y suyo es el locus de control. Bandura mostró el aprendizaje observacional y formuló el determinismo recíproco. Mischel (1968) cuestionó los rasgos amplios y propuso cinco variables cognitivas de la persona (1973).",
    v: [
      "Potencial de conducta=Probabilidad de una conducta según la expectativa y el valor del refuerzo",
      "Situación psicológica=La situación tal como la persona la interpreta, según Rotter",
      "Locus de control=Expectativa generalizada descrita por Rotter (1966)",
      "Aprendizaje observacional=Adquirir conductas observando a un modelo, sin refuerzo directo",
      "Refuerzo vicario=Ver que el modelo es recompensado, lo que favorece ejecutar lo aprendido",
      "Autoeficacia=Creencia en la propia capacidad para realizar una conducta (Bandura, 1977)",
      "Determinismo recíproco=Persona, conducta y ambiente se influyen en las tres direcciones",
      "Estrategias de codificación=Cómo interpreta y categoriza la persona las situaciones, según Mischel"
    ],
    g: [
      "Los estudios del muñeco Bobo se realizaron entre 1961 y ___.|1963|1968|1977",
      "Bandura distinguió entre adquirir una conducta y ___.|ejecutarla|reforzarla|codificarla",
      "Mischel integró después sus variables en el sistema ___ (Mischel y Shoda, 1995).|CAPS|REP|LOOPR",
      "En Social Learning and Clinical Psychology, ___ propuso el potencial de conducta.|Rotter|Bandura|Mischel",
      "Las ___ son, para Mischel, lo que la persona sabe y puede hacer.|competencias|expectativas|codificaciones"
    ],
    tf: [
      "El locus de control es un concepto de Bandura derivado del aprendizaje observacional.|F|Es de Rotter (1966). Bandura formuló la autoeficacia (1977).",
      "Según Bandura, un niño puede adquirir una conducta observada y no ejecutarla si no espera consecuencias favorables.|V",
      "El modelado requiere atención, retención, reproducción y motivación.|V",
      "Para Rotter, el potencial de conducta depende solo del valor que la persona da al refuerzo.|F|Depende de la expectativa de que la conducta lleve al refuerzo y del valor de ese refuerzo, en una situación psicológica."
    ],
    q: [
      "Un estudiante valora mucho aprobar, pero cree que estudiar no cambiará su nota, y estudia poco. ¿Qué teoría lo explica mejor?|La de Rotter, por la baja expectativa|La de Skinner, por la falta de refuerzo|La de Bandura, por el refuerzo vicario|El potencial de conducta depende de la expectativa y del valor del refuerzo. Aquí el valor es alto, pero la expectativa es baja.",
      "Una chica que se cree buena en matemáticas se apunta a la olimpiada, donde encuentra retos que refuerzan esa creencia y la llevan a elegir nuevos entornos. ¿Qué concepto ilustra?|Determinismo recíproco|Aprendizaje observacional|Potencial de conducta|Persona, conducta y ambiente se influyen mutuamente: la creencia elige el entorno, y el entorno refuerza la creencia.",
      "¿Qué concepto NO forma parte de las variables cognitivas de la persona de Mischel (1973)?|La autoeficacia general|Los valores subjetivos|Las expectativas|Mischel propuso competencias, codificaciones, expectativas, valores subjetivos y autorregulación. La autoeficacia es de Bandura.",
      "¿Qué demostraron los estudios del muñeco Bobo?|Que se aprende sin refuerzo directo|Que la agresión es un impulso innato|Que el castigo impide la adquisición|Los niños reprodujeron conductas que solo habían observado en un adulto, sin recibir refuerzo directo."
    ],
    inc: [
      "Sobre el aprendizaje social cognitivo|Mantiene la exclusión skinneriana de la cognición|Añade expectativas y valores a la teoría del aprendizaje|Conserva el rigor de las teorías del aprendizaje|Añade justo lo que Skinner dejó fuera: lo que la persona piensa, espera y valora."
    ],
    seq: [
      "Procesos del modelado según Bandura|Atención>Retención>Reproducción>Motivación"
    ],
    cls: [
      "Autor|Rotter: potencial de conducta; locus de control; situación psicológica|Bandura: modelado; autoeficacia; determinismo recíproco|Mischel: variables cognitivas de la persona; demora de la gratificación; sistema CAPS"
    ] },
  { t: "Persona, situación o ambas: tres familias de modelos",
    tip: "Los modelos internalistas sitúan los determinantes de la conducta en la persona, los situacionistas en la situación y los interaccionistas en la interacción entre ambas, donde cuentan las variables cognitivas y el significado psicológico de la situación. Magnusson y Endler (1977) distinguieron la interacción mecanicista, un término P × S de un ANOVA, de la recíproca, en la que persona y situación se influyen a lo largo del tiempo.",
    v: [
      "Modelos internalistas=La conducta depende sobre todo de rasgos, impulsos, biología o constructos",
      "Modelos situacionistas=La conducta es aprendida y depende de las condiciones estimulares",
      "Modelos interaccionistas=La conducta resulta de cómo se combinan persona y situación",
      "Interacción mecanicista=Persona y situación se combinan como variables independientes, en un solo sentido",
      "Interacción recíproca=Persona y situación se influyen mutuamente a lo largo del tiempo",
      "Significado psicológico=Lo que cuenta de la situación para los interaccionistas",
      "Organismo reactivo=Imagen de la persona en los modelos situacionistas",
      "Agente activo e intencional=Imagen de la persona en los modelos interaccionistas"
    ],
    g: [
      "En los modelos ___, la consistencia de la conducta es alta entre situaciones y en el tiempo.|internalistas|situacionistas|interaccionistas",
      "El método preferido por los modelos situacionistas es el ___.|experimental|clínico|correlacional",
      "El determinismo recíproco de Bandura ilustra la interacción ___.|dinámica|mecanicista|estadística",
      "Magnusson y Endler distinguieron dos formas de interacción en ___.|1977|1968|1973",
      "El precedente de los modelos interaccionistas es la fórmula de ___.|Lewin|Allport|Skinner"
    ],
    tf: [
      "La teoría de Kelly se clasifica entre los modelos interaccionistas por su núcleo cognitivo.|F|Se clasifica entre los internalistas, como teoría cognitiva procesual.",
      "Para los situacionistas, si alguien se comporta igual en dos situaciones es porque esas situaciones se parecen.|V",
      "El término P × S de un análisis de varianza describe un proceso de influencia mutua a lo largo del tiempo.|F|Describe la combinación de dos efectos en un momento dado, es decir, la interacción mecanicista.",
      "Magnusson y Endler figuran entre los autores de los modelos interaccionistas.|V"
    ],
    q: [
      "Daniel es callado en reuniones con desconocidos y muy hablador con sus amigos. ¿Qué buscaría un interaccionista?|Cómo interpreta Daniel cada situación|Su nivel general de extraversión|Las contingencias de cada contexto|El internalista buscaría su extraversión, y el situacionista, las contingencias. El interaccionista atiende a interpretaciones y expectativas.",
      "¿Qué modelo concibe a la persona como un organismo activo y prefiere el método clínico o correlacional?|El internalista|El situacionista|El interaccionista|El situacionista ve un organismo reactivo y prefiere el experimento. El interaccionista combina ambos métodos.",
      "Un investigador analiza con un ANOVA el efecto conjunto de la ansiedad y del tipo de tarea sobre el rendimiento. ¿Qué interacción estudia?|Mecanicista|Recíproca|Dinámica|El término P × S combina dos efectos en un momento dado. La recíproca o dinámica implica influencia mutua en el tiempo.",
      "¿En qué familia de modelos se sitúa el conductismo radical de Skinner?|Situacionista|Internalista|Interaccionista|Para el conductismo radical, personalidad y conducta son prácticamente lo mismo y dependen de las condiciones estimulares."
    ],
    inc: [
      "Sobre la clasificación de modelos|Bandura y Mischel son situacionistas radicales|Los rasgos de Eysenck son un modelo internalista|Skinner representa el modelo situacionista|Bandura y Mischel son interaccionistas. Clasificarlos como situacionistas radicales es una trampa típica."
    ],
    seq: [],
    cls: [
      "Familia de modelos|Internalistas: psicoanálisis; humanismo; Kelly; rasgos de Eysenck|Situacionistas: conductismo radical de Skinner|Interaccionistas: Rotter; Bandura; Mischel; Magnusson y Endler"
    ] },
  { t: "Balance de los enfoques del aprendizaje",
    tip: "Las teorías del aprendizaje aportaron rigor metodológico, atención a la situación, aplicaciones y optimismo sobre el cambio, y las sociocognitivas añadieron cognición, agencia y autorregulación. Se les critica dejar fuera la cognición y la biología (conductismo radical) y la poca integración (enfoque sociocognitivo). El debate persona-situación acabó sin vencedores, y la teoría de rasgos completos combina ambos niveles.",
    v: [
      "Rigor metodológico=Conceptos operativos e hipótesis contrastadas en el laboratorio",
      "Optimismo sobre el cambio=Si la conducta se aprende, también se puede reaprender",
      "Teoría de rasgos completos=Une rasgos descriptivos y una parte explicativa sociocognitiva",
      "Crítica biológica=El temperamento aparece pronto y los rasgos tienen una parte heredable",
      "Sistema CAPS=Respuesta de Mischel y Shoda al debate persona-situación",
      "Watts, Duncan y Quan=Réplica de 2018 del test del malvavisco con una muestra amplia y diversa",
      "Demora de la gratificación=Tema estudiado por Mischel que dio origen al test del malvavisco",
      "Crítica a Dollard y Miller=Heredaron conceptos de Freud con poco apoyo propio"
    ],
    g: [
      "Dollard y Miller heredaron conceptos de ___ con poco apoyo empírico propio.|Freud|Hull|Skinner",
      "En la réplica del malvavisco, la asociación con el logro a los 15 años era de la ___ de tamaño que la original.|mitad|tercera parte|décima parte",
      "Al controlar el entorno familiar y la capacidad temprana, esa asociación bajaba unos ___.|dos tercios|tres cuartos|nueve décimos",
      "Al conductismo radical se le critica que ignora las bases ___ de las diferencias individuales.|biológicas|culturales|situacionales",
      "Al enfoque sociocognitivo se le critica tener muchas variables y poca ___.|integración|precisión|validez"
    ],
    tf: [
      "El test del malvavisco demostró que el autocontrol a los 4 años predice el éxito en la vida.|F|La réplica de Watts, Duncan y Quan (2018) halló un efecto menor, que bajaba mucho al controlar el entorno familiar.",
      "Hoy se acepta que tanto la persona como la situación importan y que su peso depende de la conducta y del contexto.|V",
      "La crítica biológica a las teorías del aprendizaje pesa hoy menos que en los años cincuenta.|F|Pesa más: el temperamento aparece pronto y los rasgos tienen una parte heredable.",
      "Una crítica al aprendizaje en general es que generaliza desde tareas de laboratorio sencillas, a menudo con animales.|V"
    ],
    q: [
      "Tras un accidente, una mujer evita conducir y piensa «volverá a pasar», mientras que a su acompañante apenas le afectó. ¿Qué exige explicar esa diferencia?|Diferencias estables de temperamento|La historia de refuerzos posterior|Las expectativas sobre conducir|El aprendizaje explica la adquisición del miedo y la cognición, sus expectativas, pero la diferencia entre ambos exige atender al temperamento.",
      "¿Qué negó realmente Mischel en el debate persona-situación?|La consistencia entre situaciones|La existencia de la personalidad|El papel de las variables cognitivas|Mischel no negó la personalidad, sino la consistencia de la conducta entre situaciones muy distintas.",
      "¿Qué aportación es propia de las teorías sociocognitivas frente al conductismo radical?|La agencia y la autorregulación|El análisis funcional de la conducta|La definición operativa de conceptos|El rigor operativo ya lo aportaban las teorías del aprendizaje. Las sociocognitivas añadieron cognición, agencia y autorregulación.",
      "¿Cómo terminó el debate persona-situación abierto por Mischel (1968)?|Sin vencedores claros|Con la victoria de los rasgos|Con la victoria de la situación|Se acepta que importan ambas y que su peso relativo depende de la conducta y del contexto."
    ],
    inc: [
      "Sobre el balance del aprendizaje|Su punto fuerte es explicar la parte heredable de los rasgos|La modificación de conducta se usa en clínica y educación|Si la conducta se aprende, también se puede reaprender|Al conductismo radical se le critica justo ignorar las bases biológicas y la parte heredable de los rasgos."
    ],
    seq: [],
    cls: [
      "Valoración del aprendizaje|Aportaciones: rigor metodológico; atención a la situación; modificación de conducta|Limitaciones: olvido de la biología; poca integración sociocognitiva; generalizar desde el laboratorio"
    ] }
] },
{ n: 7, t: "De dónde salen los datos", cap: 3, pir: "media", mods: [
  { t: "Las tres fuentes de Cattell: datos L, Q y T",
    tip: "Cattell ordenó las fuentes en datos L (vida, con registros vitales y valoraciones de observadores), datos Q (autoinformes) y datos T (tests objetivos cuya finalidad no es evidente). Un rasgo auténtico debía aparecer en las tres. Los datos T son difíciles de falsear, pero caros y artificiales, y no deben confundirse con las pruebas proyectivas.",
    v: [
      "Datos L de Cattell=Registros vitales y valoraciones de observadores sobre la vida cotidiana",
      "Datos Q=Autoinformes obtenidos con cuestionarios o inventarios",
      "Datos T=Conducta en situaciones estandarizadas cuya finalidad no es evidente",
      "Registro vital=Expediente, historial laboral o número de cambios de domicilio",
      "Test objetivo=Se puntúa con reglas fijas a partir de la conducta registrada",
      "Prueba proyectiva=Rorschach o TAT, muy dependiente de la interpretación del evaluador",
      "Validez externa=Generalización fuera de la prueba, limitada en los datos T por su artificialidad",
      "Rasgo auténtico=Para Cattell, el que deja huella en las tres fuentes de datos"
    ],
    g: [
      "La valoración de un tutor sobre un estudiante es, para Cattell, un dato ___.|L|Q|T",
      "El punto débil principal de los datos Q son los ___.|sesgos de respuesta|costes de aplicación|problemas de estandarización",
      "En los datos T, la puntuación se obtiene de la ___ de la persona, no de su opinión sobre sí misma.|conducta|biografía|reputación",
      "Cattell buscaba los rasgos en las tres fuentes mediante el análisis ___.|factorial|funcional|de varianza",
      "Los datos T son resistentes al ___ porque la persona desconoce el objetivo.|falseamiento|aprendizaje|cansancio"
    ],
    tf: [
      "Los tests proyectivos como el Rorschach son el ejemplo típico de datos T.|F|Objetivo y proyectivo no son sinónimos: el test objetivo se puntúa con reglas fijas, y el proyectivo depende del evaluador.",
      "En la clasificación de Cattell, las valoraciones de padres o profesores son datos L.|V",
      "Los datos Q son caros y difíciles de falsear, aunque artificiales.|F|Ese es el perfil de los datos T. Los datos Q son baratos y rápidos, y su punto débil son los sesgos de respuesta.",
      "Medir cuánto insiste alguien en un rompecabezas sin solución, sin decirle qué se evalúa, es un dato T.|V"
    ],
    q: [
      "Un equipo cuenta las veces que cada estudiante entregó tarde los trabajos. Según Cattell, ¿qué dato obtiene?|Un dato L|Un dato Q|Un dato T|Es un registro de la vida cotidiana, es decir, un dato L de tipo registro vital.",
      "Para Cattell, ¿qué condición debía cumplir un rasgo auténtico?|Aparecer en las tres fuentes|Aparecer en los datos T|Superar la escala de mentiras|Si la sociabilidad es real, debe dejar huella en los registros, en el autoinforme y en la conducta en el laboratorio.",
      "¿Cuál es el principal punto débil de los datos L de Cattell?|Son difíciles de reunir y estandarizar|Son fáciles de falsear por la persona|Dependen de la interpretación del evaluador|Recogen conducta real en su contexto, pero son difíciles de reunir y de estandarizar.",
      "Se mide cuántos errores comete cada estudiante al revisar una tarea larga y monótona, sin que sepa que se evalúa su minuciosidad. ¿Qué dato es?|Dato T|Dato Q|Dato L|Es una situación estandarizada cuya finalidad desconoce la persona y que se puntúa por su conducta."
    ],
    inc: [
      "Sobre los datos de Cattell|Los datos Q proceden de tests objetivos|Los datos L incluyen valoraciones de observadores|Los datos T son difíciles de falsear|Los datos Q son autoinformes de cuestionarios. Los tests objetivos dan datos T."
    ],
    seq: [],
    cls: [
      "Fuente de Cattell|Datos L: expediente académico; valoración de un tutor|Datos Q: inventario de personalidad; autoinforme|Datos T: persistencia en un rompecabezas; errores en una tarea monótona"
    ] },
  { t: "La clasificación actual: datos S, I, L y B",
    tip: "Block propuso el esquema LOTS (L, O, T y S), y Funder popularizó la versión S, I, L y B. Las correspondencias con Cattell son casi directas, salvo una: las valoraciones de observadores eran datos L en Cattell y son datos I en Funder. Los datos S son los más frecuentes. Conviene combinar fuentes, porque parte de su discrepancia es varianza de método.",
    v: [
      "Datos S=Lo que la persona dice de sí misma en cuestionarios, entrevistas o diarios",
      "Datos I=Lo que dicen quienes conocen a la persona, como familia o compañeros",
      "Datos L de Funder=Resultados vitales objetivos y verificables, sin opiniones de nadie",
      "Datos B=Conducta observada y registrada directamente con un procedimiento definido",
      "Esquema LOTS=Propuesta de Block que separa los datos de observadores como datos O",
      "Varianza de método=Lo que una fuente aporta por su forma de recoger información, no por el rasgo",
      "Muestreo de experiencias=Registros repetidos en la vida diaria, por ejemplo con el móvil",
      "David Funder=Autor de la clasificación más usada hoy en la investigación internacional"
    ],
    g: [
      "La valoración de una compañera de piso sobre la responsabilidad de alguien es, para Funder, un dato ___.|I|L|S",
      "En el esquema LOTS de Block, los datos Q pasaron a llamarse datos ___.|S|O|B",
      "Un divorcio o el historial de multas son, para Funder, datos ___.|L|B|I",
      "Los datos ___ son, con diferencia, los más frecuentes.|S|I|B",
      "La matriz multirrasgo-multimétodo busca separar la varianza del rasgo de la varianza de ___.|método|error|respuesta"
    ],
    tf: [
      "En Funder, los datos L incluyen las valoraciones de observadores que conocen a la persona.|F|En Funder esas valoraciones son datos I. Eran datos L en Cattell.",
      "Una multa dice algo de la impulsividad, pero también de cuánto se conduce.|V",
      "Las distintas fuentes de datos suelen concordar casi por completo.|F|Concuerdan solo en parte, en buena medida por la varianza de método.",
      "Una ventaja de los datos I es que se pueden promediar varios informantes.|V"
    ],
    q: [
      "Una investigadora registra con el móvil, a intervalos, cuánto habla cada participante en su vida diaria. Según Funder, ¿qué datos obtiene?|Datos B|Datos S|Datos I|Es conducta observada y registrada directamente con un procedimiento definido, aunque sea fuera del laboratorio.",
      "¿Cuál es la principal excepción en la correspondencia entre Cattell y Funder?|Los observadores pasan de L a I|Los cuestionarios pasan de Q a B|Los tests pasan de T a L|Las valoraciones de observadores eran datos L en Cattell y son datos I en Funder. Los datos Q pasan a S y los T, a B.",
      "¿Cuál es el problema principal de los datos I?|Cada informante ve solo una parte|Dependen de muchas causas externas|Son caros y poco representativos|Cada informante ve a la persona en contextos parciales. Depender de muchas causas es el problema de los datos L.",
      "¿Por qué los datos L de Funder son difíciles de interpretar?|Tienen muchas causas además del rasgo|Son autoinformes con mucho sesgo|Dependen de lo que ve un informante|Son hechos verificables, pero un mismo resultado vital depende de muchas causas además de la personalidad."
    ],
    inc: [
      "Sobre los datos S|Son los menos usados por su coste elevado|Dan acceso a pensamientos que nadie más ve|Su riesgo son los sesgos y límites del autoconocimiento|Son, con diferencia, los más frecuentes, y además muy baratos."
    ],
    seq: [],
    cls: [
      "Dato de Funder|I: valoración de un amigo; opinión de la pareja|L: expediente académico; historial de multas|B: conducta grabada en el laboratorio; habla registrada con el móvil"
    ] },
  { t: "Cuando responder engaña: los sesgos de respuesta",
    tip: "Los sesgos de respuesta son tendencias sistemáticas a contestar de un modo con independencia del contenido del ítem. La deseabilidad social incluye autoengaño y manejo de la impresión (Paulhus) y en parte puede ser contenido válido. La aquiescencia se controla con ítems invertidos, y la falta de sinceridad, con escalas de mentiras e ítems repetidos. La escala L del EPI no tiene nada que ver con los datos L.",
    v: [
      "Sesgo de respuesta=Tendencia sistemática a contestar de un modo con independencia del contenido",
      "Autoengaño=Visión favorable de uno mismo, pero sincera",
      "Manejo de la impresión=Intento más o menos consciente de quedar bien ante otros",
      "Aquiescencia=Tendencia a decir «sí» o «de acuerdo» sea cual sea el ítem",
      "Ítems invertidos=Redactar en ambos sentidos para que decir siempre sí no infle la puntuación",
      "Escala L del EPI=Escala de sinceridad o de mentiras de Eysenck (1964)",
      "Elección forzosa=Elegir entre frases igual de deseables para reducir el margen de quedar bien",
      "Falseamiento=Distorsión deliberada con un fin concreto, como en un peritaje"
    ],
    g: [
      "Paulhus distinguió en la deseabilidad social el autoengaño y el ___.|manejo de la impresión|falseamiento deliberado|sesgo de aquiescencia",
      "El manejo de la impresión aumenta cuando hay algo en ___.|juego|duda|común",
      "La solución clásica a la aquiescencia es el ___ de los ítems.|contrabalanceo|acortamiento|agrupamiento",
      "Marcar siempre el punto medio de la escala es un sesgo de respuesta ___.|central|aquiescente|deseable",
      "La escala L del EPI de Eysenck es de ___.|1964|1957|1975"
    ],
    tf: [
      "La escala L del EPI recoge datos de la vida de la persona, como los datos L de Cattell.|F|Es una escala de sinceridad o de mentiras. La coincidencia de la letra con los datos L es una trampa clásica.",
      "Quien puntúa alto en deseabilidad social suele ser, de hecho, más responsable y amable.|V",
      "El autoengaño es un intento deliberado de quedar bien ante otros cuando hay algo en juego.|F|Eso es el manejo de la impresión. El autoengaño es una visión favorable pero sincera de uno mismo.",
      "Contestar de forma contradictoria a ítems repetidos indica respuestas descuidadas o poco sinceras.|V"
    ],
    q: [
      "Una candidata a un puesto de atención al cliente marca «nunca me he impacientado con nadie» y la opción más favorable en casi todo. ¿Qué sugiere?|Manejo de la impresión|Sesgo de aquiescencia|Autoengaño sincero|Negar pequeños defectos casi universales en una selección alerta de un intento de quedar bien ante otros.",
      "Un participante acepta a la vez «me gustan las fiestas» y «prefiero quedarme en casa». ¿Qué sesgo muestra y cómo se controla?|Aquiescencia, con ítems invertidos|Deseabilidad, con elección forzosa|Falseamiento, con escalas de control|Decir «sí» a ítems opuestos es aquiescencia. Con ítems en ambos sentidos, decir siempre que sí no infla la puntuación.",
      "¿Por qué es discutible eliminar la deseabilidad social de las puntuaciones?|Porque en parte es contenido válido|Porque solo afecta a la aquiescencia|Porque no aparece en las selecciones|En parte es ruido, pero en parte es contenido: quitarla puede eliminar varianza válida de la responsabilidad o la amabilidad.",
      "¿En qué ítems pesa más la deseabilidad social?|En los muy cargados de normas sociales|En los redactados en sentido inverso|En los de formato de elección forzosa|Pesa más en ítems sobre honradez, agresividad o conductas mal vistas, en ciertas personas y cuando hay consecuencias."
    ],
    inc: [
      "Sobre el control de sesgos|La elección forzosa controla sobre todo la aquiescencia|Las escalas de mentiras usan pequeños defectos comunes|Los ítems invertidos neutralizan el decir siempre sí|La elección forzosa ofrece frases igual de deseables y reduce el margen para quedar bien, no la aquiescencia."
    ],
    seq: [],
    cls: [
      "Sesgo y su control|Deseabilidad social: escalas de sinceridad; elección forzosa|Aquiescencia: ítems invertidos; contrabalanceo|Respuestas descuidadas: ítems repetidos o equivalentes"
    ] },
  { t: "Quién nos conoce mejor: uno mismo o los demás",
    tip: "Connelly y Ones (2010) mostraron que las valoraciones de otros tienen validez incremental sobre el autoinforme y que su exactitud crece con la intimidad y la observabilidad del rasgo. El modelo SOKA de Vazire (2010) predice que uno mismo acierta más en rasgos poco observables y poco evaluativos, como la ansiedad, los demás en los muy evaluativos, como la inteligencia, y ambos por igual en los observables y poco evaluativos, como la extraversión.",
    v: [
      "Validez incremental=Predicción de la conducta más allá de lo que ya predice el autoinforme",
      "Modelo SOKA=Asimetría de conocimiento entre uno mismo y los otros (Vazire, 2010)",
      "Observabilidad=Cuánto se manifiesta un rasgo en conducta visible",
      "Carga evaluativa=Cuánto se juzga un rasgo como bueno o malo y afecta a la autoestima",
      "Connelly y Ones (2010)=Metaanálisis sobre la exactitud de las valoraciones de otras personas",
      "Criterio de exactitud=Acuerdo con quienes conocen a la persona o predicción de conductas y resultados",
      "Varios informantes=Promediarlos compensa sus errores individuales",
      "Intimidad de la relación=Factor que aumenta el acuerdo y la exactitud de los informantes"
    ],
    g: [
      "Según el modelo SOKA, en la ansiedad acierta más ___.|uno mismo|un amigo íntimo|cualquier observador",
      "Según el modelo SOKA, en la extraversión aciertan ___.|ambos por igual|más los demás|más uno mismo",
      "En los rasgos muy evaluativos, el autoinforme se distorsiona por el deseo de ___.|verse bien|ser sincero|ser coherente",
      "Según Connelly y Ones, un amigo íntimo o la pareja aciertan ___ que un conocido.|más|menos|igual",
      "La locuacidad es un rasgo muy ___, y la preocupación, no.|observable|evaluativo|interno"
    ],
    tf: [
      "Según Vazire (2010), en la creatividad suele acertar más la propia persona.|F|Es un rasgo muy evaluativo: aciertan más los demás, porque el deseo de verse bien distorsiona el autoinforme.",
      "Las valoraciones de otras personas predicen el rendimiento más allá de lo que predice el autoinforme.|V",
      "Según Connelly y Ones, la exactitud de los informantes no depende del tipo de relación.|F|Aumenta con la intimidad: la pareja o un amigo íntimo aciertan más que un conocido.",
      "En el neuroticismo, el modelo SOKA predice ventaja para el autoinforme.|V"
    ],
    q: [
      "Marta pasa las noches antes de los exámenes dándole vueltas a todo, pero sus compañeros de piso la creen tranquila. Según el modelo SOKA, ¿quién acierta más sobre su ansiedad?|Marta|Sus compañeros|Ambos por igual|La ansiedad es poco observable y poco evaluativa: la propia persona tiene información interna que los demás no ven.",
      "Según el modelo SOKA, ¿qué dos propiedades del rasgo determinan quién acierta más?|Observabilidad y carga evaluativa|Estabilidad y heredabilidad|Intimidad y número de informantes|La intimidad influye en la exactitud según Connelly y Ones, pero SOKA se basa en la observabilidad y la carga evaluativa.",
      "¿Por qué se recomienda promediar varios informantes?|Sus errores individuales se compensan|Así se elimina la varianza del rasgo|Así se evita la validez incremental|Cada informante tiene aciertos y puntos ciegos. Al promediar, los errores individuales tienden a compensarse.",
      "Un estudiante se define como «muy inteligente». Según el modelo SOKA, ¿qué fuente es probablemente más exacta?|Quienes le conocen|Él mismo|Ambas por igual|La inteligencia es un rasgo muy evaluativo, y el deseo de verse bien distorsiona el autoinforme más que el juicio de otros."
    ],
    inc: [
      "Sobre quién nos conoce mejor|El autoinforme es siempre la mejor medida|El autoinforme es una perspectiva con puntos ciegos|La exactitud crece con la observabilidad del rasgo|Depende del rasgo: en los muy evaluativos aciertan más los demás (Vazire, 2010)."
    ],
    seq: [],
    cls: [
      "Quién acierta más según SOKA|Uno mismo: ansiedad; neuroticismo|Los demás: inteligencia; creatividad|Ambos por igual: extraversión"
    ] }
] },
{ n: 8, t: "Estrategias de investigación", cap: 3, pir: "alta", mods: [
  { t: "El estudio de casos y la vía clínica",
    tip: "La estrategia clínica estudia a una persona de forma global, sistemática y en profundidad, y no se limita a pacientes. De ella nacieron las teorías de Freud, Rogers y Kelly, y encaja con el enfoque idiográfico de Allport. Ofrece riqueza, genera hipótesis y sirve de prueba de realidad, pero sin control no permite inferir causas y es difícil de replicar y de generalizar.",
    v: [
      "Estrategia clínica=Estudio global, sistemático y en profundidad de una persona",
      "Estudio de casos=Lo que define la vía clínica, sea un paciente, un personaje histórico o cualquiera",
      "Documentos personales=Cartas, diarios o mensajes usados como fuente en un caso",
      "Generación de hipótesis=Un caso sugiere una idea que luego se contrasta en muestras amplias",
      "Prueba de realidad=Un modelo que no sirve para entender ningún caso real queda en entredicho",
      "Sesgo del observador=Quien estudia el caso decide qué preguntar, anotar e interpretar",
      "Enfoque idiográfico=Comprender la organización única de cada persona, como defendía Allport",
      "Seguimiento intensivo=Diarios o muestreo de experiencias que analizan la variabilidad de un individuo"
    ],
    g: [
      "El estudio de casos no permite establecer relaciones ___.|causales|teóricas|descriptivas",
      "De la vía clínica nacieron las teorías de Freud, Rogers y ___.|Kelly|Cattell|Eysenck",
      "El sesgo del observador es una de las críticas clásicas al método de ___.|Freud|Cattell|Skinner",
      "Hoy los estudios de casos se combinan con diarios y con el muestreo de ___.|experiencias|conductas|situaciones",
      "La información de un caso procede de una vida que no se repite, y por eso es difícil de ___.|replicar|describir|interpretar"
    ],
    tf: [
      "La estrategia clínica se limita, por definición, al estudio de pacientes.|F|Lo que la define es el estudio de casos: un paciente, un personaje histórico o una persona corriente.",
      "Un caso real bien estudiado puede poner en entredicho un modelo general.|V",
      "Un caso seguido durante años permite concluir qué causa el patrón observado.|F|Sin manipulación ni grupo de comparación, el estudio de casos no puede establecer relaciones causales.",
      "Con diarios y muestreo de experiencias, lo idiográfico y lo nomotético dejan de ser enfoques enfrentados.|V"
    ],
    q: [
      "Una psicóloga sigue durante dos años a un joven que se retira cada vez que recibe un elogio. ¿Qué puede aportar legítimamente el caso?|Una hipótesis para contrastar|Una prueba causal del patrón|Una estimación de su frecuencia|El caso sugiere una hipótesis sobre autoestima y evitación. Su frecuencia y su causa exigen muchas personas y comparación controlada.",
      "¿Qué limitación del estudio de casos se debe a que el investigador no manipula nada?|La falta de control|El sesgo del observador|La dificultad de replicar|Sin manipulación ni grupo de comparación no hay control, y por eso no pueden establecerse relaciones causales.",
      "¿Con qué enfoque encaja la vía clínica?|Con el idiográfico de Allport|Con el nomotético de Cattell|Con el situacionista de Skinner|Busca comprender la organización única de cada persona, no solo situarla en un punto de una escala común.",
      "¿Qué ventaja del estudio de casos no ofrece un cuestionario aplicado a mil personas?|Información rica y contextualizada|Mayor validez interna de los datos|Facilidad para generalizar|Muestra cómo se combinan en una vida concreta los motivos, los recuerdos, las relaciones y las circunstancias."
    ],
    inc: [
      "Sobre la vía clínica|Permite generalizar con seguridad|Genera hipótesis que luego se contrastan|Ofrece información rica y contextualizada|Un caso, por bien estudiado que esté, puede ser excepcional: es difícil de generalizar."
    ],
    seq: [],
    cls: [
      "Estudio de casos|Ventajas: riqueza; generación de hipótesis; prueba de realidad|Limitaciones: falta de control; difícil de replicar; sesgo del observador"
    ] },
  { t: "Correlacionar y experimentar",
    tip: "La estrategia correlacional mide variables tal como se presentan: r indica dirección y magnitud, y r al cuadrado por 100 da la varianza compartida, pero no implica causalidad por la direccionalidad y la tercera variable. El experimento manipula una VI y asigna al azar, lo que le da validez interna, aunque le afectan el efecto del experimentador y las características de la demanda. En personalidad se mide el rasgo y se manipula la situación.",
    v: [
      "Dirección de r=Positiva si ambas variables suben juntas, negativa si una sube y la otra baja",
      "Magnitud de r=Cuanto más se aleja de cero, más estrecha es la relación",
      "Varianza compartida=Correlación al cuadrado multiplicada por 100",
      "Problema de la direccionalidad=No saber qué variable influye en la otra",
      "Tercera variable=Factor ajeno que influye en las dos variables correlacionadas",
      "Asignación aleatoria=Reparto al azar entre condiciones para que los grupos sean equivalentes",
      "Efecto del experimentador=Influencia de las expectativas de quien investiga (Rosenthal, 1966)",
      "Características de la demanda=Pistas que llevan a adivinar qué se espera (Orne, 1962)"
    ],
    g: [
      "Con una correlación de ,30, las variables comparten un ___ de su varianza.|9 %|30 %|3 %",
      "Una correlación de −,40 es ___ que una de +,20.|más fuerte|más débil|igual de fuerte",
      "Las características de la demanda las describió ___ (1962).|Orne|Rosenthal|Cronbach",
      "El experimento tiene mayor validez ___ que el estudio correlacional.|interna|externa|ecológica",
      "Los diseños ___ siguen a las mismas personas durante años.|longitudinales|transversales|experimentales"
    ],
    tf: [
      "Las características de la demanda son las expectativas del investigador que influyen en los resultados.|F|Eso es el efecto del experimentador (Rosenthal, 1966). La demanda son pistas para adivinar qué se espera (Orne, 1962).",
      "El estudio correlacional tiene mayor validez externa que el experimento.|V",
      "Con una muestra suficiente, la asignación aleatoria hace los grupos equivalentes en todo salvo en la manipulación.|V",
      "En personalidad, la solución habitual es asignar al azar a los participantes a niveles de un rasgo.|F|Los rasgos no se pueden asignar al azar. Se mide el rasgo y se manipula la situación."
    ],
    q: [
      "Un estudio halla que los estudiantes más responsables sacan mejores notas, y el apoyo familiar podría influir en ambas cosas. ¿Qué problema se plantea?|El de la tercera variable|El de la direccionalidad|El de la demanda|Una tercera variable, el apoyo familiar, podría explicar la asociación. La direccionalidad sería que las notas hicieran más organizado.",
      "Se comparan personas con alta y baja ansiedad ante una tarea presentada como evaluación o como simple ensayo. ¿Qué lógica sigue el diseño?|Mide el rasgo y manipula la situación|Manipula el rasgo y mide la situación|Mide el rasgo y la situación sin manipular|Combina las dos disciplinas de Cronbach para estudiar la interacción entre persona y situación.",
      "¿Qué permite atribuir a la VI las diferencias halladas en un experimento?|La asignación aleatoria|El tamaño de la muestra|La medición repetida|El azar iguala los grupos en todo salvo en la manipulación.",
      "¿Qué mostraron Rosenthal (1966) y Orne (1962)?|Que la validez interna era menor de lo supuesto|Que la correlación implica causalidad|Que la validez externa del experimento es alta|El efecto del experimentador y las características de la demanda mostraron que el experimento no es inmune al error."
    ],
    inc: [
      "Sobre la estrategia correlacional|Manipula las variables para conocer su relación|Su coeficiente r va de −1 a +1|Permite asociación y predicción, no causalidad|Estudia las variables tal como se presentan, sin manipularlas."
    ],
    seq: [],
    cls: [
      "Estrategia|Correlacional: mide sin manipular; mayor validez externa; problema de la tercera variable|Experimental: manipula una VI; asignación aleatoria; mayor validez interna"
    ] },
  { t: "Medir bien: fiabilidad, validez y análisis factorial",
    tip: "La fiabilidad es la ausencia de error aleatorio y se estima por test-retest, consistencia interna o acuerdo interjueces. La validez puede ser de contenido, de criterio (concurrente o predictiva) y de constructo (convergente y discriminante). La fiabilidad es necesaria, pero no suficiente, para la validez. El AFE explora la estructura y el AFC contrasta un modelo previo. Cattell usó rotación oblicua y Eysenck, ortogonal.",
    v: [
      "Fiabilidad=Ausencia de error aleatorio en la medida",
      "Test-retest=Correlación entre dos aplicaciones separadas en el tiempo",
      "Consistencia interna=Grado en que los ítems de una escala miden lo mismo, estimado con el alfa",
      "Fiabilidad interjueces=Acuerdo entre observadores que puntúan a la misma persona",
      "Validez predictiva=Relación con un criterio externo medido más tarde",
      "Validez discriminante=No correlacionar demasiado con medidas de rasgos distintos",
      "Matriz multirrasgo-multimétodo=Varios rasgos medidos con varios métodos para separar rasgo y método",
      "Rotación oblicua=Permite que los factores correlacionen entre sí"
    ],
    g: [
      "El índice de consistencia interna más usado es el alfa de ___.|Cronbach|Pearson|Spearman",
      "Cronbach y Meehl (1955) describieron la validez de constructo como una ___ de relaciones esperadas.|red|lista|suma",
      "Cattell usó rotación ___ y obtuvo dieciséis factores relacionados.|oblicua|ortogonal|confirmatoria",
      "El análisis factorial ___ examina los datos sin un modelo previo.|exploratorio|confirmatorio|ortogonal",
      "La fiabilidad ___ es la propia de los datos I y B.|interjueces|test-retest|interna"
    ],
    tf: [
      "Una báscula que marca siempre tres kilos de más es fiable, pero no válida.|V",
      "Una medida poco fiable puede ser, aun así, muy válida.|F|Si no es fiable no puede ser válida: su error aleatorio tapa cualquier relación.",
      "Eysenck usó rotación oblicua y obtuvo pocas dimensiones relacionadas.|F|Eysenck usó rotación ortogonal, con pocas dimensiones independientes. La oblicua es la de Cattell.",
      "El test-retest supone que el rasgo es estable en el intervalo entre aplicaciones.|V"
    ],
    q: [
      "Una escala de responsabilidad predice la puntualidad en el trabajo un año después. ¿Qué validez demuestra?|Predictiva|Concurrente|De contenido|Es validez de criterio con un criterio medido más tarde. Si se midiera a la vez, sería concurrente.",
      "En una matriz multirrasgo-multimétodo, los rasgos medidos por autoinforme correlacionan más entre sí que cada rasgo consigo mismo medido por informantes. ¿Qué indica?|Que pesa más el método|Que hay validez convergente|Que la fiabilidad es baja|Si lo que más pesa es el método, el instrumento mide sobre todo la forma de preguntar, es decir, varianza de método.",
      "Un equipo comprueba si sus datos se ajustan a un modelo de cinco factores definido de antemano. ¿Qué técnica usa?|Análisis factorial confirmatorio|Análisis factorial exploratorio|Rotación oblicua sin modelo|El AFC contrasta un modelo previo. El AFE explora la estructura sin modelo previo.",
      "Una escala de ansiedad correlaciona alto con otra escala de ansiedad y poco con una de extraversión. ¿Qué muestra?|Validez convergente y discriminante|Fiabilidad test-retest e interjueces|Validez de contenido y predictiva|Correlacionar con medidas del mismo rasgo es convergente, y no hacerlo con rasgos distintos, discriminante."
    ],
    inc: [
      "Sobre fiabilidad y validez|Una medida fiable es necesariamente válida|La validez concurrente usa un criterio medido a la vez|La consistencia interna se estima con el alfa|La fiabilidad es necesaria, pero no suficiente, para la validez."
    ],
    seq: [],
    cls: [
      "Concepto psicométrico|Fiabilidad: test-retest; consistencia interna; interjueces|Validez: de contenido; de criterio; de constructo"
    ] },
  { t: "Replicación y tamaño del efecto",
    tip: "Muchos efectos publicados estaban inflados por el sesgo de publicación, las prácticas cuestionables y las muestras pequeñas. La respuesta fue el prerregistro, los datos abiertos y las réplicas multilaboratorio. Soto (2019) replicó el 87 % de 78 asociaciones entre rasgos y resultados vitales, con efectos del 77 % del original. Según Funder y Ozer (2019), un r de ,10 es pequeño, de ,20 medio y de ,30 grande, y los efectos pequeños se acumulan.",
    v: [
      "Crisis de replicación=Revisión que mostró que muchos efectos publicados estaban inflados",
      "Sesgo de publicación=Publicar sobre todo resultados significativos y dejar los nulos en el cajón",
      "Prácticas cuestionables=Probar análisis, añadir participantes o excluir datos hasta lograr significación",
      "Prerregistro=Fijar hipótesis y análisis antes de recoger los datos",
      "Réplica multilaboratorio=Muchos equipos repiten un estudio con un protocolo común",
      "Proyecto LOOPR=Réplica de Soto (2019) de 78 asociaciones entre rasgos y resultados vitales",
      "Tamaño del efecto=Magnitud de una relación, independiente de su significación",
      "Coeficiente de personalidad=Techo de unos ,30 entre rasgo y conducta señalado por Mischel (1968)"
    ],
    g: [
      "En el proyecto LOOPR, el ___ de los intentos fue significativo en la dirección esperada.|87 %|77 %|50 %",
      "Los efectos replicados por Soto alcanzaron típicamente el ___ del tamaño original.|77 %|87 %|50 %",
      "Según Funder y Ozer (2019), una correlación en torno a ,20 es un efecto ___.|medio|pequeño|grande",
      "Richard et al. (2003) estimaron una correlación media en torno a ___ en psicología social.|,21|,10|,40",
      "Un efecto famoso que no sobrevivió a las réplicas es el agotamiento del ___.|ego|esfuerzo|deseo"
    ],
    tf: [
      "Una correlación de ,30 es trivial porque solo explica el 9 % de la varianza.|F|Con las referencias actuales es un efecto grande, y los efectos pequeños se acumulan en muchas situaciones.",
      "Que un efecto sea significativo indica que probablemente no es cero, no que sea importante.|V",
      "En el proyecto LOOPR, la mediana de las muestras fue de 1.504 personas.|V",
      "Soto (2019) halló que las asociaciones entre rasgos y resultados vitales apenas se replicaban.|F|El 87 % de los intentos fue significativo en la dirección esperada, con efectos algo menores, pero reales."
    ],
    q: [
      "La responsabilidad correlaciona ,20 con llegar puntual a una cita. ¿Qué conclusión es más adecuada?|Su ventaja se acumula en muchas citas|Es irrelevante para predecir conducta|Predice con precisión cada cita concreta|Apenas sirve para adivinar qué hará alguien mañana, pero a lo largo de cientos de citas produce diferencias visibles.",
      "¿Qué causa NO figura entre las de los efectos inflados?|La asignación aleatoria|El sesgo de publicación|Las muestras pequeñas|Las causas fueron el sesgo de publicación, las prácticas de investigación cuestionables y las muestras pequeñas.",
      "Mischel (1968) presentó el techo de ,30 como una debilidad de los rasgos. ¿Cómo se lee hoy?|Como un efecto grande|Como un efecto pequeño|Como un efecto nulo|Con las referencias actuales es grande y comparable a muchos efectos clásicos de la situación (Funder y Ozer, 1983).",
      "¿Qué medida forma parte de la respuesta a la crisis de replicación?|El prerregistro de hipótesis|El aumento del sesgo de publicación|La reducción del tamaño muestral|Se respondió con prerregistro, datos abiertos y réplicas multilaboratorio con un protocolo común."
    ],
    inc: [
      "Sobre la replicación en personalidad|Los efectos replicados superaron el tamaño original|El 87 % de los intentos de LOOPR fue significativo|Las muestras de LOOPR eran mucho mayores que las originales|Alcanzaron típicamente el 77 % del tamaño original: algo menores, pero reales."
    ],
    seq: [
      "Referencias de Funder y Ozer (2019) de menor a mayor|Muy pequeño (,05)>Pequeño (,10)>Medio (,20)>Grande (,30)>Muy grande (,40)"
    ],
    cls: [
      "Crisis de replicación|Causas: sesgo de publicación; prácticas cuestionables; muestras pequeñas|Respuestas: prerregistro; datos abiertos; réplicas multilaboratorio"
    ] }
] }
);

// SAIMAP Psicología · Personalidad I · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Cattell y los dieciséis factores", cap: 4, pir: "alta", mods: [
  { t: "Del diccionario a los rasgos: la hipótesis léxica",
    tip: "Cattell combinó la hipótesis léxica, según la cual las diferencias individuales importantes quedan codificadas en el lenguaje, con el análisis factorial. Partió de los casi 18.000 términos de Allport y Odbert (1936) y los redujo de forma inductiva hasta los 16 factores primarios del 16PF. Esperaba la misma estructura con datos L, Q y T, pero los tests objetivos no convergieron con los otros dos.",
    v: [
      "Hipótesis léxica=Las diferencias individuales que importan quedan codificadas en el lenguaje cotidiano",
      "Esfera de la personalidad=Conjunto completo de descriptores de una lengua que una taxonomía debe cubrir",
      "Allport y Odbert (1936)=Reunieron casi 18.000 términos de un diccionario inglés",
      "Enfoque nomotético=Busca dimensiones comunes en las que cada persona ocupa una posición",
      "Método inductivo=Dejar que los datos sugieran la estructura, sin una teoría previa del número",
      "171 variables=Lo que quedó tras eliminar sinónimos y términos raros del listado léxico",
      "Factores primarios=Los 16 rasgos fuente que recoge el cuestionario 16PF (1949)",
      "Índices numéricos=Designación de los factores obtenidos con tests objetivos"
    ],
    g: [
      "De los casi 18.000 términos, Allport y Odbert separaron unos ___ referidos a rasgos estables.|4.500|1.700|16.000",
      "Tras eliminar sinónimos y términos raros, Cattell se quedó con unas ___ variables descriptivas.|171|46|450",
      "Los modelos de rasgos son ___: suponen que características estables de la persona explican su conducta.|internalistas|situacionistas|conductistas",
      "Los factores de los tests objetivos se identificaron con índices ___ en lugar de nombres.|numéricos|alfabéticos|bipolares",
      "La tarea básica de los modelos de rasgos es ___: cuántas dimensiones hacen falta y cuáles son.|taxonómica|terapéutica|idiográfica"
    ],
    tf: [
      "Las valoraciones de observadores y los cuestionarios dieron a Cattell factores bastante parecidos.|V",
      "Cattell partió de una teoría que fijaba de antemano cuántos rasgos debía haber.|F|Su método era inductivo: dejaba que los datos sugirieran la estructura. Atribuirle un método deductivo es una trampa PIR.",
      "Cattell esperaba encontrar la misma estructura de rasgos con cualquier tipo de dato.|V",
      "Allport y Odbert clasificaron como rasgos estables la mayor parte de los casi 18.000 términos que reunieron.|F|Solo unos 4.500 se referían a rasgos estables. El resto eran estados pasajeros, juicios valorativos u otros usos."
    ],
    q: [
      "Un equipo valora a sus compañeros y halla que «puntual», «ordenado» y «perseverante» van juntos y «despistado» va en contra. ¿Qué hará el análisis factorial?|Agruparlos en una sola dimensión|Separarlos en cuatro rasgos únicos|Ponerles nombre automáticamente|El análisis agrupa los términos que covarían en una dimensión. El nombre lo pone después el investigador.",
      "¿Qué tipo de datos no convergió con claridad con los demás en la obra de Cattell?|Los tests objetivos|Los cuestionarios|Las valoraciones de observadores|Los datos T dieron factores difíciles de casar con los de datos L y Q, una pieza del balance crítico del modelo.",
      "Según la hipótesis léxica, ¿por qué existe una palabra como «rencoroso»?|Porque esa diferencia importa a los hablantes|Porque refleja una causa biológica concreta|Porque la acuñaron los psicólogos de rasgos|La lengua acaba codificando las diferencias individuales que importan en la vida diaria.",
      "¿Qué obtuvo Cattell al agrupar sus variables correlacionadas?|Entre 35 y 46 agrupaciones|Los 16 factores primarios|Cinco factores globales|Las agrupaciones se usaron después como escalas y sobre ellas se aplicaron análisis factoriales sucesivos."
    ],
    inc: [
      "Sobre el punto de partida de Cattell|Aplicó un método deductivo a partir de la teoría|Usó el análisis factorial para ordenar los descriptores|Su enfoque buscaba dimensiones comunes a todos|El método de Cattell era inductivo: dejaba que los datos sugirieran cuántos factores había."
    ],
    seq: [
      "Embudo léxico de Allport y Odbert a Cattell|Casi 18.000 términos>Unos 4.500 rasgos estables>Unas 171 variables>Entre 35 y 46 agrupaciones>16 factores primarios>5 factores globales"
    ],
    cls: [
      "Fuente de datos de Cattell|Datos L: registros vitales; valoraciones de observadores|Datos Q: cuestionarios; autoinforme|Datos T: tests objetivos; finalidad poco evidente; índices numéricos"
    ] },
  { t: "Rasgos fuente y el cuestionario 16PF",
    tip: "Para Cattell el rasgo es la unidad básica de la personalidad. Por su profundidad distingue rasgos superficiales y fuente, por su alcance comunes y únicos, y por su modalidad de temperamento, aptitud y dinámicos. El 16PF recoge 16 factores primarios bipolares designados con letras. Con rotación oblicua, los primarios se refactorizan en cinco factores globales en el 16PF-5.",
    v: [
      "Rasgo superficial=Conjunto de conductas observables que tienden a aparecer juntas",
      "Rasgo fuente=Causa subyacente de la covariación, hallada solo con análisis factorial",
      "Rasgo común=Característica que poseen todas las personas en distinto grado",
      "Rasgo único=Característica propia de un individuo que escapa a la comparación",
      "Rasgo de temperamento=Describe el estilo con que se actúa, como la rapidez o la emotividad",
      "Rasgo de aptitud=Eficacia con que se resuelven las tareas, como la inteligencia",
      "Rasgo dinámico=Describe la motivación, es decir, por qué se actúa",
      "Factor de segundo orden=Dimensión amplia obtenida al refactorizar los primarios"
    ],
    g: [
      "Cattell designó los factores con ___ para que un nombre corriente no sesgara su interpretación.|letras|números|colores",
      "Los factores que solo aparecían con cuestionarios llevan la letra ___ y un número.|Q|T|L",
      "El factor ___ del 16PF es una medida breve de razonamiento abstracto.|B|A|M",
      "En el 16PF-5, la mentalidad firme, objetiva y poco receptiva corresponde al factor global de ___.|dureza|autocontrol|independencia",
      "Un rasgo superficial puede deberse a la combinación de varios rasgos ___.|fuente|únicos|dinámicos"
    ],
    tf: [
      "Cada factor primario del 16PF es bipolar y describe un continuo entre dos extremos.|V",
      "Cattell usó una rotación ortogonal para que los dieciséis factores fueran independientes.|F|Usó una rotación oblicua. Por eso los primarios correlacionan y pueden refactorizarse en factores globales.",
      "Extraversión y ansiedad son factores globales del 16PF-5 que reaparecen en casi todos los modelos posteriores.|V",
      "Cattell centró su trabajo en los rasgos únicos porque escapan a la comparación entre personas.|F|Reconocía los únicos, pero se centró en los comunes, que todas las personas poseen en distinto grado."
    ],
    q: [
      "Marta puntúa alto en A y F, pero también en O y Q4. ¿Cómo aparecerá en el nivel global del 16PF?|Extravertida y ansiosa|Introvertida y estable|Extravertida y estable|A y F (afable, animada) alimentan la extraversión, y O y Q4 (aprensiva, tensa), la ansiedad. El primario conserva matices.",
      "¿Qué factor primario del 16PF describe en su polo alto a alguien vigilante y suspicaz?|L|N|O|El factor L es vigilancia. N es reservado y calculador, y O, aprensivo e inseguro.",
      "Para Cattell, la inteligencia es un ejemplo de rasgo…|de aptitud|de temperamento|dinámico|Los rasgos de aptitud describen la eficacia con que se resuelven las tareas. Los dinámicos, por qué se actúa.",
      "¿Cuántos factores globales tiene la quinta edición del 16PF?|Cinco|Seis|Tres|Son extraversión, ansiedad, dureza, independencia y autocontrol, obtenidos al refactorizar los 16 primarios."
    ],
    inc: [
      "Sobre los rasgos de Cattell|Los rasgos superficiales se descubren solo por análisis factorial|Los rasgos fuente explican la covariación de conductas|Los rasgos dinámicos explican por qué se actúa|Lo que solo se descubre por análisis factorial son los rasgos fuente. Los superficiales son conductas observables."
    ],
    seq: [],
    cls: [
      "Tipo de rasgo según su modalidad|Temperamento: rapidez; energía; emotividad|Aptitud: inteligencia; razonamiento abstracto (factor B)|Dinámico: ergios; sentimientos; actitudes"
    ] },
  { t: "Predecir la conducta: ecuación de especificación y rasgos dinámicos",
    tip: "Cattell definió la personalidad como lo que permite predecir lo que hará una persona en una situación dada. La ecuación de especificación suma las puntuaciones en rasgos ponderadas por índices de situación, una forma temprana de interaccionismo. Los rasgos dinámicos son ergios innatos, sentimientos aprendidos y actitudes concretas, unidos por subsidiación en el entramado dinámico.",
    v: [
      "Ecuación de especificación=Predice la respuesta sumando rasgos ponderados según la situación",
      "Índice de situación=Peso que indica cuánto importa un rasgo en una situación concreta",
      "Ergio=Motivación básica e innata, como la curiosidad o la seguridad",
      "Sentimiento=Estructura motivacional aprendida en torno a un objeto importante de la vida",
      "Actitud=Interés por hacer algo determinado en una situación determinada",
      "Entramado dinámico=Red de rasgos motivacionales en la que unas metas sirven a otras",
      "Subsidiación=Relación por la que actitudes sirven a sentimientos y estos a ergios",
      "Interaccionismo temprano=Lectura de la ecuación: la respuesta depende a la vez de persona y situación"
    ],
    g: [
      "En la ecuación de especificación, los pesos los aporta la ___.|situación|persona|cultura",
      "En la ecuación de especificación, cada T es la ___ de la persona en un rasgo.|puntuación|fiabilidad|motivación",
      "Los ___ proporcionan la energía del entramado dinámico.|ergios|sentimientos|índices",
      "El límite práctico de la ecuación es que estimar los pesos de cada situación exige muchos ___.|datos|factores|ergios",
      "La medición de los rasgos dinámicos tuvo ___ desarrollo y difusión que la del 16PF.|menos|más|igual"
    ],
    tf: [
      "Con las mismas puntuaciones en rasgos, una persona puede dar respuestas distintas porque cambian los pesos de la situación.|V",
      "Los sentimientos son, para Cattell, motivaciones básicas e innatas.|F|Los innatos son los ergios. Los sentimientos son estructuras aprendidas en torno a objetos como la profesión o la familia.",
      "Una misma actitud puede alimentar varios ergios a la vez.|V",
      "Los índices de situación de la ecuación de especificación son las puntuaciones de la persona en cada rasgo.|F|Las puntuaciones son las T. Los índices s son pesos que indican cuánto importa cada rasgo en esa situación."
    ],
    q: [
      "Para predecir cómo irá una entrevista de trabajo pesan mucho el atrevimiento social y la estabilidad emocional, y para un problema de diseño, la imaginación. ¿Qué ilustra?|Que cambian los índices de situación|Que cambian las puntuaciones en rasgos|Que cambian los rasgos fuente|La persona conserva sus puntuaciones. Lo que varía de una situación a otra son los pesos s de la ecuación.",
      "En el entramado dinámico, «mi carrera profesional» es un ejemplo de…|sentimiento|ergio|actitud|Es una estructura motivacional aprendida que sirve a ergios como la seguridad o la curiosidad.",
      "Luis estudia la noche antes del examen porque «quiere aprobar este examen». En la terminología de Cattell, eso es…|una actitud|un sentimiento|un ergio|Es el nivel más concreto: el interés por hacer algo determinado en una situación determinada.",
      "¿Qué valor tiene sobre todo el entramado dinámico?|Conceptual, al integrar la motivación|Psicométrico, por su amplia medición|Clínico, como prueba diagnóstica|Integra la motivación en una teoría de rasgos que sería solo descriptiva, pero su medición se desarrolló poco."
    ],
    inc: [
      "Sobre los rasgos dinámicos de Cattell|Los sentimientos son motivaciones básicas e innatas|Las actitudes están subordinadas a sentimientos|Un ergio puede expresarse en muchas actitudes|Los innatos son los ergios. Confundir ergios (innatos) con sentimientos (aprendidos) es una trampa típica."
    ],
    seq: [
      "Subsidiación en el entramado dinámico|Actitud (aprobar este examen)>Sentimiento (mi carrera profesional)>Ergio (seguridad o curiosidad)"
    ],
    cls: [
      "Rasgo dinámico|Ergio: innato; curiosidad; seguridad; sociabilidad|Sentimiento: aprendido; profesión; familia; religión|Actitud: concreta; interés por algo en una situación"
    ] },
  { t: "Luces y sombras del modelo de Cattell",
    tip: "Cattell planteó cubrir toda la esfera de la personalidad desde el lenguaje, combinó varias fuentes de datos y creó el 16PF. Pero los dieciséis primarios replican mal: Tupes y Christal (1961) hallaron cinco factores al reanalizar sus variables. El número de factores depende del procedimiento, la validación fue escasa y los datos T no convergieron. El nivel global ha resistido mejor que el primario.",
    v: [
      "Tupes y Christal (1961)=Reanalizaron variables de Cattell y hallaron cinco factores amplios",
      "Problema de replicación=Los dieciséis primarios se recuperan mal en muestras independientes",
      "Dependencia del procedimiento=El número de factores cambia con el método, la rotación y la muestra",
      "Términos evaluativos=Palabras que mezclan descripción y juicio moral, como «insoportable»",
      "Sesgo de deseabilidad=Inflación de dimensiones por el carácter evaluativo del lenguaje",
      "Validación escasa=Poco trabajo independiente sobre lo que predice cada primario",
      "Nivel global=Nivel de análisis del 16PF que mejor ha resistido el paso del tiempo",
      "Dependencia cultural=Las taxonomías léxicas varían según la lengua de partida"
    ],
    g: [
      "Lo que se recupera con regularidad del 16PF son cinco o ___ factores globales.|seis|siete|ocho",
      "El enfoque léxico de Cattell es la base sobre la que se construyeron después los ___.|Cinco Grandes|tres de Eysenck|tipos MBTI",
      "Al reanalizar variables de Cattell, Tupes y Christal hallaron ___ factores amplios.|cinco|tres|dieciséis",
      "El 16PF se ha usado mucho en selección de personal, orientación y ___.|clínica|genética|neuroimagen",
      "Para muchos investigadores, dieciséis factores primarios son ___.|demasiados|insuficientes|ortogonales"
    ],
    tf: [
      "El nivel global del 16PF ha resistido mucho mejor que el nivel primario.|V",
      "Una crítica bien apoyada a Cattell es que solo usó cuestionarios.|F|Combinó datos L, Q y T. Insistir en varias fuentes de datos es, de hecho, una de sus aportaciones.",
      "Con decisiones técnicas distintas de factorización, rotación o muestra, el mapa de factores cambia.|V",
      "Los dieciséis factores de Cattell aparecen siempre que se analizan bien los datos.|F|Es un mito: replican mal en estudios independientes, y lo que se recupera con regularidad son cinco o seis globales."
    ],
    q: [
      "Un grupo reanaliza un 16PF en otro país y solo recupera con claridad seis dimensiones amplias. ¿Qué reflejan sus datos?|La mala replicación de los primarios|Un error en la traducción del cuestionario|La superioridad de los datos T|Es el resultado habitual: los dieciséis primarios replican mal y lo que aparece son cinco o seis factores globales.",
      "¿Qué crítica a la hipótesis léxica señala que «encantador» mezcla descripción y juicio moral?|El carácter evaluativo del lenguaje|La dependencia del procedimiento|La falta de convergencia de datos T|Los términos evaluativos pueden inflar dimensiones de deseabilidad en las taxonomías léxicas.",
      "¿Qué factores globales de Cattell tienen equivalentes claros en Eysenck y en los Cinco Grandes?|Extraversión y ansiedad|Dureza e independencia|Autocontrol y dureza|Extraversión y ansiedad reaparecen en casi todos los modelos posteriores.",
      "¿Qué aportación de Cattell sigue siendo hoy central en la evaluación de la personalidad?|Combinar varias fuentes de datos|Usar dieciséis factores primarios|Designar los factores con letras|No confiar solo en el autoinforme y combinar fuentes sigue siendo una idea central."
    ],
    inc: [
      "Sobre el balance del modelo de Cattell|Extrajo muy pocos factores para describir a las personas|Sus primarios replican mal en estudios independientes|El número de factores depende de decisiones técnicas|La crítica es la contraria: para muchos, dieciséis primarios son demasiados."
    ],
    seq: [],
    cls: [
      "Balance del modelo de Cattell|Aportación: esfera de la personalidad; varias fuentes de datos; 16PF; ecuación de especificación|Crítica: mala replicación; dependencia del procedimiento; validación escasa; datos T sin convergencia"
    ] }
] },
{ n: 10, t: "Eysenck y el modelo PEN", cap: 4, pir: "alta", mods: [
  { t: "Un método deductivo y una jerarquía",
    tip: "Eysenck usó el análisis factorial con una lógica opuesta a la de Cattell: método hipotético-deductivo, análisis factorial criterial y rotación ortogonal. Exigía que cada dimensión tuviera un mecanismo causal y predicciones de laboratorio. Organizó la personalidad en cuatro niveles: respuestas específicas, respuestas habituales, rasgos y tipos. El tipo es una dimensión continua, y las diferencias son de grado, no de clase.",
    v: [
      "Método hipotético-deductivo=Proponer primero las dimensiones y contrastarlas después con datos",
      "Análisis factorial criterial=Validar un factor comprobando que separa a grupos que deben diferir en él",
      "Grupo criterio=Muestra que, según la hipótesis, debe puntuar distinto en el factor",
      "Rotación ortogonal=Obliga a que los factores sean independientes entre sí",
      "Respuesta específica=Conducta puntual observada una vez, característica o no de la persona",
      "Respuesta habitual=Conducta que se repite en situaciones parecidas",
      "Rasgo (Eysenck)=Agrupación de respuestas habituales correlacionadas, factor de primer orden",
      "Tipo (Eysenck)=Dimensión continua de segundo orden que agrupa rasgos correlacionados"
    ],
    g: [
      "Contar chistes en casi todas las cenas con amigos es, en la jerarquía de Eysenck, una respuesta ___.|habitual|específica|típica",
      "Para Eysenck, las diferencias entre personas son de ___, no de clase.|grado|tipo|origen",
      "La parte ___ del modelo de Eysenck trata de las bases biológicas de las dimensiones.|explicativa|descriptiva|criterial",
      "En la jerarquía de Eysenck, los rasgos equivalen a factores de ___ orden.|primer|segundo|tercer",
      "En cada dimensión, casi todo el mundo se sitúa cerca del ___.|centro|extremo|polo alto"
    ],
    tf: [
      "Para Eysenck, una dimensión solo era aceptable si además podía vincularse a un mecanismo causal.|V",
      "En Eysenck, como en la tradición clásica, un tipo es una categoría cerrada a la que se pertenece o no.|F|En Eysenck el tipo es una dimensión continua en la que cada persona ocupa un punto. Las diferencias son de grado.",
      "Por la rotación ortogonal, saber que alguien es muy extravertido no dice nada sobre su neuroticismo.|V",
      "Cuanto más se asciende en la jerarquía de Eysenck, más detalle se conserva sobre situaciones concretas.|F|Es al revés: la descripción gana estabilidad y generalidad, pero pierde detalle sobre situaciones concretas."
    ],
    q: [
      "Un investigador propone un factor de vulnerabilidad neurótica y comprueba que los pacientes con trastornos neuróticos puntúan mucho más alto que personas sin diagnóstico. ¿Qué técnica usa?|El análisis factorial criterial|La rotación oblicua de factores|La ecuación de especificación|El grupo criterio sirve para validar el significado del factor, rasgo distintivo del método de Eysenck.",
      "En el ejemplo de la extraversión, ¿en qué nivel de la jerarquía está la sociabilidad?|Rasgo|Tipo|Respuesta habitual|La sociabilidad reúne respuestas habituales que correlacionan, y junto con actividad o asertividad forma la extraversión.",
      "¿Qué diferencia de método separa a Eysenck de Cattell?|Eysenck es deductivo y Cattell, inductivo|Eysenck es inductivo y Cattell, deductivo|Solo Eysenck usó el análisis factorial|Cattell dejaba que la estructura emergiera de los datos, y Eysenck proponía primero las dimensiones y las contrastaba.",
      "¿A qué equivalen los tipos de Eysenck en términos factoriales?|A factores de segundo orden|A factores de primer orden|A factores primarios oblicuos|Los rasgos son factores de primer orden, y los tipos, agrupaciones de rasgos, de segundo orden."
    ],
    inc: [
      "Sobre el método de Eysenck|Usó una rotación oblicua, como Cattell|Partía de hipótesis sobre qué dimensiones debían existir|Validaba los factores con grupos criterio|Usó una rotación ortogonal. Atribuirle una rotación oblicua es una trampa PIR típica."
    ],
    seq: [
      "Jerarquía de Eysenck de lo concreto a lo general|Respuestas específicas>Respuestas habituales>Rasgos>Tipos"
    ],
    cls: [] },
  { t: "Extraversión, neuroticismo y psicoticismo",
    tip: "Eysenck partió de los cuatro temperamentos de Hipócrates y Galeno, de los dos continuos de Wundt y de los términos de Jung. Al cruzar extraversión y neuroticismo, los temperamentos reaparecen como cuadrantes. El psicoticismo se añadió hacia 1975-1976. Un P alto no indica psicosis: se parece más a baja amabilidad y baja responsabilidad. La introversión no es timidez.",
    v: [
      "Extraversión=Sociabilidad, actividad, asertividad y búsqueda de estimulación",
      "Neuroticismo=Tendencia a la emoción negativa y a reaccionar intensamente ante el estrés",
      "Psicoticismo=Dureza, frialdad e impulsividad, cercano a baja amabilidad y responsabilidad",
      "Estabilidad emocional=Polo opuesto del neuroticismo",
      "Colérico=Cuadrante inestable y extravertido",
      "Melancólico=Cuadrante inestable e introvertido",
      "Sanguíneo=Cuadrante estable y extravertido",
      "Flemático=Cuadrante estable e introvertido"
    ],
    g: [
      "___ propuso ordenar los cuatro temperamentos según dos continuos de intensidad y rapidez del cambio emocional.|Wundt|Jung|Galeno",
      "___ había popularizado los términos introversión y extraversión.|Jung|Wundt|Hipócrates",
      "El psicoticismo se añadió al modelo hacia ___.|1975-1976|1959-1960|1985-1986",
      "La creatividad figura entre los rasgos del polo alto de ___.|psicoticismo|neuroticismo|extraversión",
      "El primer modelo de Eysenck tenía dos dimensiones ___: extraversión y neuroticismo.|ortogonales|oblicuas|categoriales"
    ],
    tf: [
      "Un introvertido puede relacionarse con soltura y, aun así, preferir una tarde de lectura a una fiesta.|V",
      "Un neuroticismo alto equivale a padecer un trastorno emocional.|F|No equivale a un trastorno, aunque sí se asocia a mayor vulnerabilidad a los trastornos emocionales.",
      "En el modelo PEN, cualquier combinación de las tres dimensiones es posible.|V",
      "Una puntuación alta en psicoticismo indica una vulnerabilidad psicótica bien establecida.|F|Su relación con la psicosis no se confirmó. P se parece más a la combinación de baja amabilidad y baja responsabilidad."
    ],
    q: [
      "Elena se angustia mucho antes de cada examen, prefiere estudiar sola y evita las fiestas. ¿Qué cuadrante ocupa?|Melancólico|Colérico|Flemático|Neuroticismo alto e introversión (N+ E−) corresponden al melancólico. Situarlo en el cuadrante estable es una trampa típica.",
      "Un camarero se lleva bien con todos los clientes y no pierde la calma un sábado a mediodía. ¿Qué cuadrante describe mejor su perfil?|Sanguíneo|Colérico|Flemático|Estable y extravertido (N− E+) es el sanguíneo. El colérico es extravertido pero inestable.",
      "¿Qué cambió Eysenck respecto a los temperamentos clásicos?|Cada persona ocupa un punto en el plano|Añadió un quinto temperamento intermedio|Los ligó de nuevo a los cuatro humores|Los temperamentos reaparecen como cuadrantes, pero cada persona tiene una posición precisa, no una etiqueta.",
      "¿Qué rasgo pertenece al polo alto del neuroticismo?|Sentimientos de culpa|Búsqueda de sensaciones|Frialdad emocional|Ansiedad, ánimo deprimido, tensión, culpa y baja autoestima son rasgos de N. La frialdad es de P."
    ],
    inc: [
      "Sobre las dimensiones del modelo PEN|La introversión equivale a la timidez|El polo bajo de P describe personas empáticas|El polo opuesto del neuroticismo es la estabilidad|La introversión no es timidez: implica preferir ambientes tranquilos, no necesariamente dificultad para relacionarse."
    ],
    seq: [],
    cls: [
      "Dimensión del modelo PEN|Extraversión: sociable; activa; asertiva; buscadora de sensaciones|Neuroticismo: ansiosa; tensa; con culpa; baja autoestima|Psicoticismo: agresiva; fría; egocéntrica; impulsiva"
    ] },
  { t: "Los cuestionarios: del MPI al EPQ-R",
    tip: "Cada versión del modelo tuvo su cuestionario: MPI (1959) con E y N, EPI (1964) que añade la escala L de disimulo, EPQ (1975) que incorpora el psicoticismo y EPQ-R (1985), revisión centrada en mejorar la escala P. La escala L es un indicador de validez de las respuestas, no una dimensión de personalidad, y no tiene relación con los datos L de Cattell.",
    v: [
      "MPI=Cuestionario de 1959 que medía extraversión y neuroticismo",
      "EPI=Cuestionario de 1964 que añadió la escala de disimulo",
      "EPQ=Cuestionario de 1975 que incorporó el psicoticismo",
      "EPQ-R=Versión revisada de 1985, de referencia hoy",
      "Escala L=Detecta la tendencia a dar una imagen favorable de uno mismo",
      "Hospital Maudsley=Centro de Londres que da nombre al primer cuestionario de Eysenck",
      "Indicador de validez=Escala que controla la calidad de las respuestas, no un rasgo",
      "Deseabilidad social=Tendencia que controla la escala de disimulo"
    ],
    g: [
      "La escala L llega en ___ con el EPI.|1964|1959|1975",
      "La revisión del EPQ-R se dirigió sobre todo a mejorar la escala ___.|P|L|N",
      "La «L» de la escala de disimulo viene del inglés «lie», que significa ___.|mentira|vida|registro",
      "El MPI recibe su nombre del hospital ___ de Londres, donde trabajó Eysenck.|Maudsley|Bethlem|Tavistock",
      "El ___ es el cuestionario del modelo PEN completo.|EPQ|EPI|MPI"
    ],
    tf: [
      "El EPQ-R tiene adaptación española y se usa en investigación y en evaluación.|V",
      "El psicoticismo apareció por primera vez en el EPI de 1964.|F|Llegó con el EPQ en 1975. El EPI de 1964 añadió la escala L. Es un error frecuente en exámenes.",
      "Quien responde que nunca le han pasado muchas pequeñas faltas comunes probablemente está disimulando.|V",
      "Los ítems de los cuestionarios de Eysenck suelen responderse en una escala de acuerdo de cinco puntos.|F|Suelen ser preguntas breves de respuesta «sí» o «no»."
    ],
    q: [
      "En un EPQ-R, una candidata a un puesto responde que nunca ha llegado tarde a una cita ni ha dicho una mentira. ¿Qué escala se elevará?|La escala L|La escala N|La escala P|Negar pequeñas faltas casi universales sugiere disimulo, que detecta la escala L como indicador de validez.",
      "¿Qué orden cronológico de los cuestionarios es correcto?|MPI, EPI, EPQ, EPQ-R|EPI, MPI, EPQ, EPQ-R|MPI, EPQ, EPI, EPQ-R|MPI (1959), EPI (1964), EPQ (1975) y EPQ-R (1985). Cada cambio en la teoría se tradujo en un instrumento.",
      "¿Qué dimensiones medía el MPI?|Extraversión y neuroticismo|Extraversión y psicoticismo|Neuroticismo y disimulo|El MPI (1959) fue el primer instrumento para las dos dimensiones básicas, E y N.",
      "¿Por qué la escala L no se considera una dimensión de personalidad?|Indica la validez de las respuestas|Su fiabilidad es demasiado baja|Coincide con el neuroticismo|La escala L de disimulo o sinceridad funciona como indicador de validez, no como rasgo."
    ],
    inc: [
      "Sobre los cuestionarios de Eysenck|El MPI ya incluía la escala L de disimulo|El EPQ conservó E, N y la escala L|La escala P era la más débil psicométricamente|El MPI medía solo E y N. La escala L llegó en 1964 con el EPI. Atribuirla al MPI es un error frecuente."
    ],
    seq: [
      "Evolución de los cuestionarios de Eysenck|MPI (1959)>EPI (1964)>EPQ (1975)>EPQ-R (1985)"
    ],
    cls: [] },
  { t: "Valoración del modelo y una polémica reciente",
    tip: "Extraversión y neuroticismo son de las dimensiones más sólidas de la personalidad, y el modelo es parsimonioso y contrastable. Sus debilidades son el psicoticismo, la ausencia de apertura y el apoyo irregular a la activación cortical. El informe del King's College (2019) declaró inseguros 26 registros de publicaciones sobre personalidad y enfermedad con Grossarth-Maticek, pero no afecta al modelo PEN.",
    v: [
      "Parsimonia=Virtud de explicar con tres dimensiones amplias en lugar de dieciséis",
      "Teoría contrastable=Genera predicciones de laboratorio que podrían fallar",
      "Grossarth-Maticek=Coautor de los estudios de personalidad y enfermedad cuestionados",
      "Informe del KCL=Calificó de inseguros 26 registros de publicaciones en mayo de 2019",
      "Marks y Buchanan (2020)=Analizaron el caso en el Journal of Health Psychology",
      "Expresión de preocupación=Aviso que publicó Personality and Individual Differences",
      "Apertura a la experiencia=Dimensión básica sin equivalente en el modelo PEN",
      "Activación cortical=Parte explicativa del modelo, con apoyo irregular"
    ],
    g: [
      "Tras el informe del KCL, tres revistas retractaron ___ artículos.|14|26|19",
      "Los estudios cuestionados trataban la relación de la personalidad con el cáncer y la ___.|cardiopatía|psicosis|depresión",
      "En octubre de ___, el KCL añadió que otras publicaciones del mismo conjunto de datos probablemente eran inseguras.|2025|2020|2019",
      "El instrumento de referencia de Eysenck es el ___.|EPQ-R|16PF|MPI",
      "Los resultados de la activación cortical con electroencefalograma y respuesta electrodérmica son ___.|inconsistentes|concluyentes|inexistentes"
    ],
    tf: [
      "Las retractaciones de 2019 demostraron que el modelo de personalidad de Eysenck era un fraude.|F|Es un mito: afectaron a estudios de personalidad y salud con Grossarth-Maticek. E y N se han replicado de forma independiente.",
      "El modelo PEN influyó en otros modelos temperamentales, como los de Gray y Cloninger.|V",
      "El psicoticismo tiene una fiabilidad y una estructura factorial similares a las de E y N.|F|Son peores. El psicoticismo es la dimensión más discutida del modelo.",
      "Un autor puede tener una parte de su obra muy sólida y otra muy problemática, y cada una se juzga por su evidencia.|V"
    ],
    q: [
      "Un compañero afirma que, tras el informe del King's College, ya no tiene sentido estudiar la extraversión de Eysenck. ¿Qué responderías?|Que el informe no afecta al modelo PEN|Que solo quedó invalidado el neuroticismo|Que el informe retiró el EPQ-R de la clínica|El informe afecta a los estudios de personalidad y enfermedad con Grossarth-Maticek, no a E y N, replicadas de forma independiente.",
      "¿Qué aspecto básico de la personalidad no tiene equivalente en el modelo PEN?|La apertura a la experiencia|La estabilidad emocional|La búsqueda de sensaciones|Con solo tres dimensiones faltan aspectos que otros modelos consideran básicos, como la apertura.",
      "¿Por qué se considera el modelo de Eysenck una teoría contrastable?|Propuso bases biológicas con predicciones|Usó muchas muestras y culturas distintas|Redujo los factores a solo tres|Al proponer bases biológicas concretas generó predicciones de laboratorio que podían fallar.",
      "¿Qué equivalentes de E y N hay en Cattell?|Extraversión y ansiedad|Dureza y autocontrol|Independencia y ansiedad|Los factores globales de extraversión y ansiedad de Cattell equivalen a la E y la N de Eysenck."
    ],
    inc: [
      "Sobre la valoración del modelo PEN|Su base de activación cortical tiene un apoyo sólido y uniforme|Extraversión y neuroticismo se han replicado ampliamente|Su parsimonia se considera una virtud|El apoyo a la activación cortical es irregular: los resultados con EEG y respuesta electrodérmica son inconsistentes."
    ],
    seq: [],
    cls: [
      "Comparación de autores|Cattell: inductivo; rotación oblicua; 16PF; ecuación de especificación|Eysenck: hipotético-deductivo; rotación ortogonal; EPQ-R; bases biológicas"
    ] }
] },
{ n: 11, t: "Los Cinco Grandes y sus alternativas", cap: 4, pir: "alta", mods: [
  { t: "De Tupes y Christal a Costa y McCrae",
    tip: "Los Cinco Grandes son el punto de llegada de dos tradiciones. La léxica va de Fiske (1949) a Tupes y Christal (1961), Norman (1963) y Goldberg, que acuñó «Big Five» (1981). La de cuestionarios es la de Costa y McCrae, con el NEO-PI (1985) y el NEO-PI-R (1992), de 240 ítems y 30 facetas. Su Teoría de los Cinco Factores separa tendencias básicas de adaptaciones características.",
    v: [
      "Fiske (1949)=Encontró por primera vez cinco factores en valoraciones de personalidad",
      "Norman (1963)=Confirmó la estructura de cinco factores con escalas de valoración",
      "Goldberg=Acuñó «Big Five» en 1981 y publicó adjetivos marcadores en 1992",
      "NEO-PI-R=Cuestionario de 1992 con 240 ítems, cinco dominios y 30 facetas",
      "NEO-FFI=Versión breve de 60 ítems que solo da puntuaciones de dominio",
      "Tendencias básicas=Los cinco rasgos, de base biológica y muy estables",
      "Adaptaciones características=Hábitos, metas y roles que surgen al combinarse rasgos y ambiente",
      "Apertura como intelecto=Lectura léxica del quinto dominio, más cercana a la inteligencia"
    ],
    g: [
      "El nombre del NEO-PI recoge sus tres primeros factores: neuroticismo, extraversión y ___.|apertura|amabilidad|actividad",
      "En el NEO-PI-R, cada dominio tiene ___ facetas.|seis|tres|cinco",
      "La crítica de ___ (1968) a la consistencia de los rasgos frenó la tradición léxica en los setenta.|Mischel|Allport|Norman",
      "En algunas traducciones, la amabilidad aparece como ___.|cordialidad|sociabilidad|franqueza",
      "La C de los Cinco Grandes procede del inglés «___».|conscientiousness|cooperativeness|control"
    ],
    tf: [
      "La convergencia entre la vía léxica y la de cuestionarios fue lo que dio credibilidad a los Cinco Grandes.|V",
      "La expresión «Big Five» la acuñaron Costa y McCrae al publicar el NEO-PI.|F|La acuñó Goldberg (1981). Costa y McCrae construyeron el NEO-PI y el NEO-PI-R. Es una trampa PIR típica.",
      "Se puede puntuar alto en apertura sin destacar en los tests de inteligencia.|V",
      "Para McCrae y Costa, los hábitos y roles de una persona son tendencias básicas de base biológica.|F|Son adaptaciones características, que surgen cuando las tendencias básicas se encuentran con un ambiente concreto."
    ],
    q: [
      "Dos hermanos muy extravertidos emigran a países distintos: uno acaba de comercial y el otro de monitor de tiempo libre. Según la Teoría de los Cinco Factores, ¿qué difiere entre ellos?|Sus adaptaciones características|Sus tendencias básicas|Sus facetas de extraversión|La tendencia es la misma. Lo que cambia es la adaptación que surge al encontrarse con un ambiente concreto.",
      "¿Qué faceta del NEO-PI-R pertenece al dominio de responsabilidad?|Deliberación|Franqueza|Gregarismo|Competencia, orden, sentido del deber, necesidad de logro, autodisciplina y deliberación son facetas de C.",
      "¿Qué faceta del NEO-PI-R pertenece al neuroticismo?|Impulsividad|Búsqueda de emociones|Actitud conciliadora|Ansiedad, hostilidad, depresión, ansiedad social, impulsividad y vulnerabilidad son facetas de N.",
      "¿Qué crítica se ha hecho al modelo de los Cinco Grandes?|Describe mejor de lo que explica|Exige demasiados factores primarios|Carece de un cuestionario propio|Depende de un origen léxico y correlacional y deja fuera motivos, metas y proyectos."
    ],
    inc: [
      "Sobre la historia de los Cinco Grandes|Costa y McCrae los hallaron por vía léxica|Tupes y Christal reanalizaron variables de Cattell|Fiske encontró cinco factores en 1949|Costa y McCrae llegaron a la estructura comparando cuestionarios existentes, no por la vía léxica."
    ],
    seq: [
      "Tradición léxica de los Cinco Grandes|Fiske (1949)>Tupes y Christal (1961)>Norman (1963)>Goldberg acuña «Big Five» (1981)>Adjetivos marcadores de Goldberg (1992)"
    ],
    cls: [
      "Facetas del NEO-PI-R|Extraversión: cordialidad; gregarismo; asertividad; emociones positivas|Apertura: fantasía; estética; ideas; valores|Amabilidad: confianza; franqueza; altruismo; modestia"
    ] },
  { t: "Nuevos instrumentos y un sexto factor: BFI-2 y HEXACO",
    tip: "El BFI-2 de Soto y John (2017) mide cinco dominios y 15 facetas en 60 ítems y llama emocionalidad negativa y mentalidad abierta al neuroticismo y la apertura. El modelo HEXACO de Ashton y Lee añade la Honestidad-Humildad y reparte de otro modo los contenidos: la irritabilidad pasa a la baja Amabilidad y la sentimentalidad a la Emocionalidad, que por eso no equivale al neuroticismo.",
    v: [
      "BFI-2=Cuestionario de Soto y John (2017) con 60 ítems y 15 facetas",
      "Emocionalidad negativa=Nombre que el BFI-2 da al neuroticismo",
      "Mentalidad abierta=Nombre que el BFI-2 da a la apertura",
      "HEXACO=Modelo de seis factores de Ashton y Lee",
      "Honestidad-Humildad=Sinceridad, juego limpio, desinterés por el lujo y modestia",
      "Emocionalidad=Factor HEXACO de miedo, ansiedad, dependencia emocional y sentimentalidad",
      "Amabilidad (HEXACO)=Paciencia, tolerancia y facilidad para perdonar",
      "Sentimentalidad=Tendencia a emocionarse y a sentir apego"
    ],
    g: [
      "En el BFI-2, la volatilidad emocional es una faceta de la emocionalidad ___.|negativa|abierta|positiva",
      "En el BFI-2, el nivel de energía es una faceta de la ___.|extraversión|responsabilidad|amabilidad",
      "Según Ashton y Lee, la sexta dimensión aparece al repetir los estudios léxicos en varias ___.|lenguas|edades|muestras clínicas",
      "En los Cinco Grandes, no aprovecharse de los demás queda disperso sobre todo dentro de la ___.|amabilidad|responsabilidad|extraversión",
      "La Emocionalidad de HEXACO se parece al neuroticismo en la ansiedad y el ___.|miedo|mal genio|retraimiento"
    ],
    tf: [
      "En HEXACO, la irritabilidad y el mal genio se sitúan en el polo bajo de la Amabilidad.|V",
      "La Emocionalidad de HEXACO equivale al neuroticismo de los Cinco Grandes.|F|No incluye la ira e incluye la sentimentalidad. Confundirlas es una trampa típica del PIR.",
      "Con tres facetas por dominio, el BFI-2 sacrifica detalle a cambio de brevedad.|V",
      "El BFI-2 mide seis facetas por dominio, como el NEO-PI-R.|F|Mide tres facetas por dominio, 15 en total, frente a las seis por dominio del NEO-PI-R."
    ],
    q: [
      "Dos compañeras de piso puntúan igual en amabilidad de los Cinco Grandes. Una es cálida pero se queda con la mejor habitación sin decir nada, y la otra es seca pero nunca se aprovecha de nadie. ¿Qué factor las distinguiría?|Honestidad-Humildad|Emocionalidad|Responsabilidad|HEXACO separa como factor propio la sinceridad y el juego limpio, que en los Cinco Grandes quedan dentro de la amabilidad.",
      "Un equipo con poco tiempo de aplicación necesita medir los cinco dominios dentro de una encuesta larga. ¿Qué instrumento conviene más?|El BFI-2|El NEO-PI-R|El EPQ-R|El BFI-2 es breve (60 ítems), de libre uso en investigación y con una estructura jerárquica clara.",
      "¿A qué factor HEXACO pasa la sentimentalidad?|A la Emocionalidad|A la Amabilidad|A la Honestidad-Humildad|La sentimentalidad, repartida en los Cinco Grandes, pasa en HEXACO a la Emocionalidad.",
      "¿Qué faceta del BFI-2 pertenece a la amabilidad?|Respeto|Productividad|Asertividad|Las facetas de amabilidad del BFI-2 son compasión, respeto y confianza. Productividad es de responsabilidad."
    ],
    inc: [
      "Sobre el modelo HEXACO|La Emocionalidad incluye la ira y el mal genio|Añade la Honestidad-Humildad como factor propio|Su Amabilidad incluye la facilidad para perdonar|La ira pasa en HEXACO al polo bajo de la Amabilidad. La Emocionalidad no la incluye."
    ],
    seq: [],
    cls: [
      "Facetas del BFI-2|Extraversión: sociabilidad; asertividad; nivel de energía|Responsabilidad: organización; productividad; responsabilidad|Mentalidad abierta: curiosidad intelectual; sensibilidad estética; imaginación creativa"
    ] },
  { t: "Metarrasgos y validez entre culturas",
    tip: "Digman (1997) halló dos factores superiores, alfa y beta, que DeYoung (2006) reinterpretó como metarrasgos: Estabilidad (N bajo, A y C) y Plasticidad (E y O). Por debajo, cada dominio tiene dos aspectos. El factor general de personalidad refleja sobre todo deseabilidad y varianza del evaluador. Los Cinco Grandes se replican bien en muestras WEIRD, pero no entre los tsimané ni en muchos países de renta baja y media.",
    v: [
      "Estabilidad=Metarrasgo que reúne neuroticismo bajo, amabilidad y responsabilidad",
      "Plasticidad=Metarrasgo que reúne extraversión y apertura",
      "Aspectos=Dos subdivisiones por dominio, entre dominios y facetas",
      "Factor general de personalidad=Supuesto factor único en el vértice, de interpretación discutida",
      "Varianza del evaluador=Tendencia de cada persona a valorar de forma más o menos favorable",
      "WEIRD=Muestras occidentales, con estudios, industrializadas, ricas y democráticas",
      "Tsimané=Horticultores y forrajeadores de la Amazonía boliviana estudiados por Gurven",
      "Digman (1997)=Halló dos factores de orden superior a los cinco, que llamó alfa y beta"
    ],
    g: [
      "Digman (1997) llamó ___ y beta a los dos factores de orden superior.|alfa|gamma|delta",
      "Entusiasmo y asertividad son los dos aspectos de la ___.|extraversión|amabilidad|apertura",
      "Laboriosidad y orden son los dos aspectos de la ___.|responsabilidad|apertura|amabilidad",
      "DeYoung (2006) reinterpretó los factores alfa y beta como ___.|metarrasgos|aspectos|facetas",
      "Entre los tsimané aparecieron sobre todo dos factores: prosocialidad e ___.|industriosidad|intelecto|introversión"
    ],
    tf: [
      "Estabilidad y Plasticidad son dos dominios nuevos que se añaden a los cinco.|F|No son dominios: son un nivel más abstracto, por encima de los cinco. Tratarlos como dominios es una trampa PIR.",
      "La interpretación dominante del factor general de personalidad es que refleja en buena medida deseabilidad y varianza del evaluador.|V",
      "Volatilidad y retraimiento son los dos aspectos del neuroticismo.|V",
      "Laajaj et al. (2019) confirmaron la buena validez de los cuestionarios breves de los Cinco Grandes en países de renta baja y media.|F|Hallaron baja validez en muchos de ellos: la estructura esperada se recuperaba mal."
    ],
    q: [
      "Un estudio aplica un cuestionario breve traducido a una población rural poco familiarizada con ese formato y no recupera los cinco factores. ¿Qué interpretación es más prudente?|La estructura puede depender de la forma de medir|El modelo de los Cinco Grandes queda refutado|Esa población carece de rasgos de personalidad|Estos resultados no anulan el modelo, pero la estructura puede depender de la forma de medir y de la ecología social.",
      "¿Qué dominios agrupa el metarrasgo Plasticidad?|Extraversión y apertura|Amabilidad y responsabilidad|Neuroticismo y apertura|Plasticidad refleja la tendencia a explorar e implicarse con lo nuevo. Estabilidad agrupa N bajo, A y C.",
      "¿Quiénes propusieron el nivel de los aspectos entre dominios y facetas?|DeYoung, Quilty y Peterson|Digman, Costa y McCrae|Ashton, Lee y Goldberg|Lo propusieron DeYoung, Quilty y Peterson (2007), y se miden con las Big Five Aspect Scales.",
      "Compasión y cortesía son los aspectos de…|la amabilidad|la responsabilidad|la extraversión|Los diez aspectos incluyen compasión y cortesía para la amabilidad, y laboriosidad y orden para la responsabilidad."
    ],
    inc: [
      "Sobre la validez de los Cinco Grandes|Se han replicado igual de bien en todas las culturas|Se replican bien en muestras WEIRD|Sus asociaciones con resultados vitales se replican bien|La universalidad está en discusión, a la vista de los tsimané y de los países de renta baja y media."
    ],
    seq: [
      "Jerarquía de los Cinco Grandes de lo amplio a lo concreto|Metarrasgos>Dominios>Aspectos>Facetas"
    ],
    cls: [
      "Metarrasgo|Estabilidad: estabilidad emocional; amabilidad; responsabilidad|Plasticidad: extraversión; apertura"
    ] },
  { t: "Equivalencias entre modelos, tipos y el caso del MBTI",
    tip: "Los modelos de rasgos se solapan: la extraversión es común a todos, el neuroticismo equivale a la ansiedad del 16PF y el psicoticismo a baja amabilidad y baja responsabilidad. Gerlach et al. (2018) hallaron cuatro zonas de mayor densidad, no tipos separados. El MBTI dicotomiza continuos, tiene baja estabilidad de tipo, no añade validez a los Cinco Grandes y no mide el neuroticismo.",
    v: [
      "Correspondencia aproximada=Solapamiento parcial porque cada modelo corta el espacio de forma distinta",
      "Gerlach et al. (2018)=Analizaron cuatro bases con más de 1,5 millones de participantes",
      "Zona de mayor densidad=Región donde se concentran perfiles dentro de un continuo",
      "MBTI=Indicador de Myers-Briggs que asigna 16 tipos a partir de la tipología de Jung",
      "Dicotomizar=Partir en dos una dimensión continua y crear grupos artificiales",
      "Estabilidad de tipo=Grado en que se recibe el mismo tipo al repetir el cuestionario",
      "Punto de corte=Valor central cuyo cruce por poco cambia la letra asignada",
      "Dureza invertida=Aproximación a la apertura en el 16PF"
    ],
    g: [
      "El autocontrol del 16PF se aproxima a la ___ de los Cinco Grandes.|responsabilidad|amabilidad|apertura",
      "La independencia del 16PF se acerca a la baja ___.|amabilidad|apertura|extraversión",
      "Gerlach et al. hallaron las regiones promedio, reservado, modelo a seguir y ___.|egocéntrico|sociable|ansioso",
      "El MBTI combina ___ dicotomías para asignar un tipo.|cuatro|cinco|dos",
      "Las puntuaciones de cada dimensión del MBTI se distribuyen de forma aproximadamente ___.|normal|bimodal|uniforme"
    ],
    tf: [
      "El MBTI es un modelo científico que clasifica a las personas en 16 tipos de personalidad.|F|Es un mito: dicotomiza rasgos continuos, su estabilidad de tipo es baja y no añade validez sobre los Cinco Grandes.",
      "Las cuatro regiones de Gerlach et al. eran zonas de mayor densidad dentro de un continuo, con muchas personas entre ellas.|V",
      "El MBTI incluye una escala de neuroticismo derivada de la tipología de Jung.|F|No mide el neuroticismo, una de las dimensiones más importantes para la salud y el bienestar.",
      "La personalidad se describe mejor con dimensiones continuas que con tipos.|V"
    ],
    q: [
      "Ana y Pablo puntúan casi igual en extraversión, pero ella queda justo por encima del corte y él justo por debajo. ¿Qué ocurre en el MBTI?|Reciben letras distintas|Reciben la misma letra|Quedan sin tipo asignado|El corte central trata como opuestas a personas casi idénticas y como iguales a personas muy distintas.",
      "¿Con qué combinación de los Cinco Grandes se corresponde el psicoticismo de Eysenck?|Baja amabilidad y baja responsabilidad|Alta apertura y bajo neuroticismo|Baja extraversión y alta apertura|Olvidar que P equivale a baja amabilidad y baja responsabilidad a la vez es una trampa PIR típica.",
      "¿A qué factor global del 16PF se aproxima la apertura de los Cinco Grandes?|A la dureza invertida|Al autocontrol|A la independencia|La apertura falta en el modelo PEN. En el 16PF se aproxima a la dureza invertida, es decir, a la receptividad.",
      "¿Por qué una parte considerable de quienes repiten el MBTI recibe otro tipo?|Basta un pequeño cambio cerca del corte|Sus escalas no se solapan con los cinco|Sus preguntas cambian en cada versión|Al dicotomizar, un pequeño cambio cerca del punto de corte basta para cambiar la letra y el tipo."
    ],
    inc: [
      "Sobre las equivalencias entre modelos|La Emocionalidad de HEXACO equivale plenamente a la ansiedad del 16PF|La extraversión es prácticamente común a todos los modelos|La Honestidad-Humildad solo está en HEXACO|La ansiedad del 16PF equivale al neuroticismo, y la Emocionalidad de HEXACO solo coincide con él en parte."
    ],
    seq: [],
    cls: [
      "Crítica al MBTI|Problema de medida: dicotomiza continuos; baja estabilidad de tipo|Problema de contenido: no añade validez a los Cinco Grandes; no mide el neuroticismo"
    ] }
] },
{ n: 12, t: "Biología del temperamento", cap: 5, pir: "alta", mods: [
  { t: "Eysenck y la activación cortical",
    tip: "Eysenck pasó de la teoría de la inhibición (1957) a la de la activación (1967), apoyada en el SARA. Su hipótesis contraintuitiva es que los introvertidos tienen más arousal cortical basal: se condicionan antes, tienen umbrales más bajos y prefieren menos estimulación. Atribuyó el neuroticismo a la labilidad del sistema límbico. El EEG y la respuesta electrodérmica dan resultados inconsistentes, y hoy se habla más de arousabilidad.",
    v: [
      "Teoría de la inhibición=Propuesta de 1957 basada en la excitación e inhibición de Pavlov y Hull",
      "SARA=Sistema activador reticular ascendente, que regula la alerta de la corteza",
      "Arousal cortical=Nivel de alerta de la corteza, según Eysenck más alto en introvertidos",
      "Nivel óptimo de estimulación=Punto en que el tono hedónico o el rendimiento es máximo",
      "Ley de Yerkes-Dodson=Relación en U invertida entre activación y rendimiento",
      "Inhibición transmarginal=Inhibición protectora de la corteza cuando la estimulación supera un umbral",
      "Arousabilidad=Reactividad a la estimulación, frente a un nivel basal crónico",
      "Cerebro visceral=Sistema límbico cuya labilidad explicaría el neuroticismo"
    ],
    g: [
      "La teoría de la activación de Eysenck es de ___.|1967|1957|1984",
      "Según Eysenck, los introvertidos tienen umbrales sensoriales más ___.|bajos|altos|estables",
      "En el test de la gota de ___, los introvertidos tenderían a salivar más.|limón|vinagre|naranja",
      "Para el psicoticismo, Eysenck propuso hipótesis hormonales y ___.|dopaminérgicas|serotoninérgicas|colinérgicas",
      "La conducta de los extravertidos sería una forma de ___ la activación.|autorregular|inhibir|disipar"
    ],
    tf: [
      "Según Eysenck (1967), los extravertidos tienen un arousal cortical basal más alto que los introvertidos.|F|Es al revés: los introvertidos tienen más arousal basal. Creer lo contrario es la trampa PIR más típica.",
      "Según la teoría de la activación, los introvertidos se condicionan con más facilidad.|V",
      "Los registros de EEG muestran de forma consistente diferencias de arousal en reposo entre introvertidos y extravertidos.|F|Los resultados son inconsistentes: con frecuencia no aparecen diferencias en reposo ni durante el sueño.",
      "La teoría de la activación atiende a la intensidad de los estímulos y dice poco sobre su significado.|V"
    ],
    q: [
      "En un estudio, cada participante elige el volumen del ruido de fondo mientras aprende una tarea. ¿Qué cabe esperar según Geen (1984)?|Rendimiento parecido en ambos grupos|Mejor rendimiento de los extravertidos|Mejor rendimiento de los introvertidos|Con su nivel elegido, ambos grupos rinden y se activan de forma parecida. Con el nivel del otro grupo, el rendimiento empeora.",
      "¿Por qué abandonó Eysenck la teoría de la inhibición?|Sus procesos no se localizaban en el cerebro|Contradecía el condicionamiento pavloviano|Predecía más arousal en los extravertidos|La teoría de la activación sí se apoyaba en un sistema cerebral identificado, el SARA.",
      "Según Eysenck, ¿qué estructura explicaría el neuroticismo?|El sistema límbico|El sistema reticular|La corteza prefrontal|Atribuyó el neuroticismo a la labilidad del sistema límbico o cerebro visceral, que gobierna la activación autonómica.",
      "¿Por qué una fiesta ruidosa resulta desagradable a muchos introvertidos según Eysenck?|Los lleva por encima de su nivel óptimo|Les falta estimulación cortical basal|Su sistema límbico es más estable|Parten de un arousal alto, así que la estimulación intensa los sitúa más allá de su punto óptimo."
    ],
    inc: [
      "Sobre la teoría de la activación|Los introvertidos toleran mejor el dolor intenso|Los introvertidos detectan antes estímulos débiles|Los introvertidos prefieren menos estimulación|Por sus umbrales más bajos, los introvertidos toleran peor el dolor intenso."
    ],
    seq: [
      "Respuesta de la corteza al aumentar la estimulación|Desgana por poca activación>Nivel óptimo de rendimiento>Deterioro por exceso de activación>Inhibición transmarginal"
    ],
    cls: [
      "Base biológica propuesta por Eysenck|Extraversión: SARA; arousal cortical|Neuroticismo: sistema límbico; activación autonómica|Psicoticismo: hipótesis hormonales; hipótesis dopaminérgicas"
    ] },
  { t: "Gray y la sensibilidad al refuerzo",
    tip: "Gray situó las diferencias en la sensibilidad al refuerzo. En la versión original, el BIS responde al castigo y genera ansiedad, y el BAS responde a la recompensa y se asocia a la impulsividad, con ejes rotados unos 30° sobre los de Eysenck. En la teoría revisada (Gray y McNaughton, 2000), el FFFS se encarga del miedo y el BIS pasa a detectar conflictos entre metas, con ansiedad.",
    v: [
      "RST=Teoría de la sensibilidad al refuerzo de Gray",
      "BAS=Sistema de activación conductual, sensible a la recompensa y ligado a la impulsividad",
      "BIS original=Responde a castigo, ausencia de recompensa y novedad, y genera ansiedad",
      "BIS revisado=Detecta conflictos entre metas, sobre todo entre aproximarse y evitar",
      "FFFS=Sistema de lucha, huida y bloqueo ante estímulos aversivos, base del miedo",
      "Rotación de 30°=Giro de los ejes de Gray respecto a extraversión y neuroticismo",
      "Escalas BIS/BAS=Autoinforme breve de Carver y White (1994)",
      "Extraversión agéntica=Búsqueda de incentivos, energía y logro, ligada a la dopamina"
    ],
    g: [
      "En la versión original, Gray situó el BIS en el sistema ___.|septohipocámpico|límbico lateral|reticular ascendente",
      "Según Gray, la ansiedad apunta hacia la combinación de neuroticismo alto y extraversión ___.|baja|alta|media",
      "Gray partió de la investigación con animales y de los efectos de los fármacos ___.|ansiolíticos|antipsicóticos|estimulantes",
      "En la teoría revisada, el BAS se activa ante todos los estímulos ___.|apetitivos|aversivos|novedosos",
      "Depue y Collins (1999) vinculan la ___ con la extraversión agéntica.|dopamina|serotonina|noradrenalina"
    ],
    tf: [
      "En la teoría revisada, el FFFS y el BIS son dos nombres del mismo sistema.|F|Son distintos: el FFFS se encarga del miedo ante lo aversivo, y el BIS, de la ansiedad ante conflictos entre metas.",
      "Las escalas BIS/BAS miden autopercepciones, no la actividad de ningún circuito.|V",
      "El BAS se asocia sobre todo con el neuroticismo.|F|Se asocia con la impulsividad o la extraversión. Asociarlo con el neuroticismo es una trampa PIR típica.",
      "Gray fue discípulo de Eysenck.|V"
    ],
    q: [
      "Un paseante quiere acariciar a un perro desconocido que gruñe un poco: se queda quieto, lo observa y calcula el riesgo. Según la teoría revisada, ¿qué sistema actúa?|El BIS|El FFFS|El BAS|La situación atrae y amenaza a la vez. Ese conflicto activa el BIS y produce ansiedad.",
      "Un perro se abalanza de repente sobre un corredor, que sale huyendo. ¿Qué sistema se activa?|El FFFS|El BIS|El BAS|Ante un estímulo aversivo claro se activa el FFFS, con miedo y lucha, huida o bloqueo.",
      "Según la versión original de Gray, ¿cómo es un introvertido inestable?|Muy sensible al castigo|Muy sensible a la recompensa|Poco sensible al refuerzo|El eje de ansiedad (BIS) apunta hacia N+ E−. El extravertido inestable sería muy sensible a la recompensa.",
      "¿Qué cambia en el BIS en la teoría revisada de Gray y McNaughton?|Pasa a detectar conflictos entre metas|Pasa a responder a la recompensa|Pasa a encargarse del miedo|La respuesta a cualquier señal aversiva pasa al FFFS. El BIS detecta conflictos y genera ansiedad."
    ],
    inc: [
      "Sobre la teoría de Gray|La impulsividad apunta hacia N+ E−|Los ejes están rotados unos 30° sobre los de Eysenck|El BAS responde a las señales de recompensa|La impulsividad apunta hacia N+ E+. La combinación N+ E− corresponde a la ansiedad (BIS)."
    ],
    seq: [],
    cls: [
      "Sistema de la teoría revisada|BAS: estímulos apetitivos; aproximación; esperanza|FFFS: estímulos aversivos; lucha o huida; miedo|BIS: conflicto entre metas; evaluación del riesgo; ansiedad"
    ] },
  { t: "Zuckerman y Cloninger: sensaciones, temperamento y carácter",
    tip: "Zuckerman estudió la búsqueda de sensaciones con la SSS-V, de cuatro subescalas, y la ligó a niveles bajos de MAO plaquetaria, con evidencia débil. Cloninger distinguió con el TCI cuatro dimensiones de temperamento, heredables y tempranas, y tres de carácter, que maduran con la experiencia. La persistencia es temperamento. La correspondencia entre temperamentos y neurotransmisores no se ha confirmado.",
    v: [
      "Búsqueda de sensaciones=Buscar experiencias nuevas, variadas e intensas asumiendo riesgos",
      "SSS-V=Forma V de la escala de Zuckerman, con cuatro subescalas",
      "Desinhibición=Subescala de fiestas, alcohol y variedad social y sexual",
      "Susceptibilidad al aburrimiento=Rechazo de la rutina y de las personas previsibles",
      "MAO plaquetaria=Enzima que degrada monoaminas, ligada por Zuckerman a la búsqueda de sensaciones",
      "ZKPQ=Cuestionario del modelo de Cinco Alternativos de Zuckerman",
      "Temperamento (Cloninger)=Respuestas automáticas a estímulos emocionales, heredables y tempranas",
      "Carácter (Cloninger)=Conceptos de uno mismo, objetivos y valores que maduran con la experiencia"
    ],
    g: [
      "En la hipótesis original de Cloninger, la búsqueda de novedad se ligaba a la ___.|dopamina|serotonina|noradrenalina",
      "En la hipótesis original de Cloninger, la evitación del daño se ligaba a la ___.|serotonina|dopamina|noradrenalina",
      "El primer cuestionario de Cloninger, el ___, medía tres dimensiones de temperamento.|TPQ|TCI|ZKPQ",
      "La persistencia era inicialmente una faceta de la ___.|dependencia de la recompensa|evitación del daño|búsqueda de novedad",
      "Viajes, música, arte y estilos de vida poco convencionales definen la búsqueda de ___.|experiencias|aventura|emoción"
    ],
    tf: [
      "La Escala de Búsqueda de Sensaciones de Zuckerman es una medida de extraversión.|F|No la mide: la búsqueda de sensaciones se relaciona también con baja responsabilidad e impulsividad y tiene entidad propia.",
      "En el TCI, la persistencia es una dimensión de carácter.|F|Es una dimensión de temperamento. Situarla en el carácter es una trampa PIR típica.",
      "Los cuestionarios de Eysenck, Gray, Zuckerman y Cloninger han sobrevivido mejor que sus hipótesis neuroquímicas.|V",
      "Cloninger usó la falta de madurez del carácter para describir los trastornos de la personalidad.|V"
    ],
    q: [
      "Un paciente con alta evitación del daño es temeroso de entrada, pero con los años aprende a gestionar su miedo y a actuar según sus metas. Según Cloninger, ¿qué ha cambiado?|Su autodirección|Su persistencia|Su búsqueda de novedad|El temperamento es heredable y temprano, pero el carácter, como la autodirección, madura con la experiencia.",
      "¿Qué dimensión del TCI pertenece al carácter?|Cooperación|Persistencia|Evitación del daño|Las de carácter son autodirección, cooperación y autotrascendencia. Persistencia y evitación del daño son temperamento.",
      "¿Qué valoración merece hoy el hallazgo de la MAO plaquetaria baja en buscadores de sensaciones?|Es clásico, pero de evidencia débil|Está firmemente replicado en GWAS|Fue refutado por el propio Zuckerman|Aparece en muchos manuales, pero su evidencia es débil.",
      "¿Por qué fracasaron las hipótesis neuroquímicas de estos modelos?|Eran demasiado simples|No se midieron los rasgos|Faltaban teorías de partida|Cada neurotransmisor interviene en muchos procesos y cada rasgo depende de muchos sistemas a la vez."
    ],
    inc: [
      "Sobre el modelo de Cloninger|Los neurotransmisores propuestos se han confirmado|La dependencia de la recompensa es temperamento|El carácter madura con el aprendizaje|La promesa de unir cada temperamento con un neurotransmisor no se ha confirmado."
    ],
    seq: [],
    cls: [
      "Dimensión del TCI de Cloninger|Temperamento: búsqueda de novedad; evitación del daño; dependencia de la recompensa; persistencia|Carácter: autodirección; cooperación; autotrascendencia"
    ] },
  { t: "Neuroimagen y genética molecular: lo que no se replicó",
    tip: "DeYoung et al. (2010) relacionaron los Cinco Grandes con el volumen de regiones cerebrales con algo más de un centenar de personas, pero Avinun et al. (2020), con 1.107, no lo replicaron. Los genes candidatos DRD4 y 5-HTTLPR también fracasaron en muestras grandes. Los GWAS muestran que los rasgos son poligénicos. Una base biológica no hace al temperamento innato e inmodificable.",
    v: [
      "DeYoung et al. (2010)=Ligaron cada uno de los Cinco Grandes al volumen de regiones concretas",
      "Avinun et al. (2020)=No replicaron con 1.107 universitarios las asociaciones estructurales",
      "Chen y Canli (2022)=Metaanálisis titulado «Nothing to see here»",
      "DRD4=Variante del receptor de dopamina asociada a la búsqueda de novedad",
      "5-HTTLPR=Polimorfismo del transportador de serotonina ligado al neuroticismo",
      "Culverhouse et al. (2018)=No confirmaron la interacción entre transportador de serotonina y estrés",
      "GWAS=Estudios que examinan millones de variantes en cientos de miles de personas",
      "Poligenia=Influencia de miles de variantes, cada una de efecto minúsculo, sobre un rasgo"
    ],
    g: [
      "Avinun et al. solo hallaron una asociación débil, entre la corteza temporal superior y una menor ___.|responsabilidad|extraversión|apertura",
      "Con muestras pequeñas, los efectos significativos son a menudo falsos positivos o están muy ___.|inflados|atenuados|sesgados a cero",
      "Davidson et al. (1990) vinculan la asimetría de la actividad ___ con la aproximación y la evitación.|frontal|occipital|temporal",
      "Border et al. (2019) vieron que los genes candidatos de la depresión no se asocian con ella más que genes ___.|elegidos al azar|dominantes|recesivos",
      "Culverhouse et al. (2018) no confirmaron la interacción entre 5-HTTLPR y estrés en la ___.|depresión|esquizofrenia|psicopatía"
    ],
    tf: [
      "Existe un gen de la búsqueda de novedad (DRD4) y otro del neuroticismo (5-HTTLPR).|F|Es un mito: los genes candidatos no resistieron las réplicas con muestras grandes. Los rasgos dependen de miles de variantes.",
      "Que los rasgos sean poligénicos no contradice que sean en parte heredables.|V",
      "Si el temperamento tiene base biológica, es innato e inmodificable.|F|Una base biológica no fija el resultado: los rasgos cambian a lo largo de la vida.",
      "Muchos manuales en español siguen presentando los correlatos de los años dos mil como hallazgos establecidos.|V"
    ],
    q: [
      "Un estudio con 90 participantes informa de que el neuroticismo se asocia con el volumen de una región sensible a la amenaza. ¿Qué cautela es más pertinente?|Con muestras pequeñas el efecto suele inflarse|La neuroimagen no mide el volumen cerebral|El neuroticismo no tiene base biológica|Las asociaciones estructurales, si existen, son muy pequeñas y exigen muestras enormes, como mostraron Avinun et al. (2020).",
      "¿Qué concluyeron Avinun et al. (2020)?|Las asociaciones, si existen, son muy pequeñas|El volumen de la amígdala predice el neuroticismo|Se replicaron la mayoría de las de DeYoung|Con 1.107 participantes no replicaron las asociaciones de DeYoung et al. (2010) y solo hallaron una, débil.",
      "¿Qué modelo encajaba con los genes candidatos DRD4 y 5-HTTLPR?|El de Cloninger|El de Zuckerman|El de Gray|DRD4 se asoció a la búsqueda de novedad y 5-HTTLPR al neuroticismo, en línea con las hipótesis de Cloninger.",
      "¿Qué muestran los estudios de asociación del genoma completo sobre los rasgos?|Que son poligénicos|Que dependen de un gen mayor|Que no son heredables|Dependen de miles de variantes, cada una de efecto minúsculo (Lo et al., 2017, Nagel et al., 2018)."
    ],
    inc: [
      "Sobre neuroimagen y genética de la personalidad|DRD4 explica una parte apreciable de la búsqueda de novedad|Las réplicas con muestras grandes de genes candidatos fracasaron|Chen y Canli no hallaron asociaciones estructurales simples|Ningún gen aislado explica una parte apreciable de la personalidad. DRD4 no resistió las réplicas."
    ],
    seq: [],
    cls: [
      "Situación del hallazgo|No replicado: genes candidatos DRD4 y 5-HTTLPR; correlatos estructurales de DeYoung et al. (2010)|Establecido: poligenia de los rasgos; heredabilidad parcial; GWAS con miles de variantes"
    ] }
] }
);

// SAIMAP Psicología · Personalidad I · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "¿Somos coherentes? El debate persona-situación", cap: 5, pir: "alta", mods: [
  { t: "Hartshorne, May y el desafío de Mischel",
    tip: "Hartshorne y May (1928) observaron a unos 11.000 escolares y hallaron correlaciones de solo ,20 a ,30 entre conductas honestas en situaciones distintas. Mischel (1968) concluyó que la consistencia entre situaciones era escasa, la estabilidad temporal aceptable y la validez predictiva de los rasgos limitada, con un techo de en torno a ,30: el coeficiente de personalidad. De ahí surge la paradoja de la consistencia.",
    v: [
      "Consistencia transituacional=Semejanza de la conducta de una persona en situaciones distintas",
      "Estabilidad temporal=Semejanza de la conducta o del rasgo a lo largo del tiempo",
      "Coeficiente de personalidad=Techo aproximado de ,30 en la correlación entre rasgo y conducta concreta",
      "Paradoja de la consistencia=Choque entre la coherencia que intuimos y la de las conductas puntuales",
      "Hartshorne y May (1928)=Estudio sobre la Naturaleza del Carácter con unos 11.000 escolares",
      "Personality and Assessment=Obra de Mischel (1968) que abrió una crisis en la disciplina",
      "Disposición descontextualizada=Rasgo general que pretende predecir conductas aisladas, blanco de Mischel",
      "Validez predictiva=Capacidad de un rasgo para anticipar una conducta concreta, limitada según Mischel"
    ],
    g: [
      "Hartshorne y May estudiaron sobre todo conductas relacionadas con la ___.|honestidad|agresividad|sociabilidad",
      "Las correlaciones de Hartshorne y May entre situaciones iban de ,20 a ___.|,30|,50|,70",
      "Mischel publicó Personality and Assessment en ___.|1968|1928|1974",
      "Según Mischel, la consistencia aparecía más en autoinformes y valoraciones que en la conducta ___.|observada|agregada|recordada",
      "Mischel sugirió que la consistencia percibida podía deberse en parte a ___ de quien juzga.|sesgos|métodos|aciertos"
    ],
    tf: [
      "Mischel consideró aceptable la estabilidad temporal de la conducta en una misma situación.|V",
      "La crítica principal de Mischel se dirigía a la estabilidad de la conducta a lo largo del tiempo.|F|Cuestionó sobre todo la consistencia entre situaciones. La estabilidad temporal la consideró aceptable.",
      "Mischel negó que existieran diferencias individuales en la conducta.|F|No las negó: criticaba las disposiciones generales y descontextualizadas que pretendían predecir conductas aisladas.",
      "En Hartshorne y May, que un niño copiara en clase apenas permitía predecir si mentiría en otra situación.|V"
    ],
    q: [
      "Una investigadora comprueba que devolver un cambio de más apenas correlaciona con no copiar en un examen en los mismos alumnos. ¿Qué pone en duda?|La consistencia transituacional|La estabilidad temporal|La estabilidad estructural|Compara conductas en situaciones distintas, no a lo largo del tiempo. Es la consistencia que cuestionó Mischel.",
      "¿Qué es el coeficiente de personalidad de Mischel?|El techo de ,30 entre rasgo y conducta|La varianza que explica la situación|La estabilidad de un rasgo en 7 años|Es la correlación aproximada que los rasgos rara vez superaban al predecir una conducta en una situación concreta.",
      "¿Qué recomendó Mischel en 1968 ante el escaso poder predictivo de los rasgos?|Estudiar la situación y sus contingencias|Agregar conductas en muchas ocasiones|Identificar a las personas consistentes|Si los rasgos predecían tan poco, convenía estudiar la situación. Las otras dos son respuestas posteriores a Mischel.",
      "¿Qué expresa la paradoja de la consistencia?|Intuimos una coherencia que los estudios no hallan|Los rasgos son estables, pero no se heredan|La conducta cambia más con la edad que con la situación|Todos percibimos a los demás como coherentes, pero los estudios de conductas puntuales mostraban una consistencia baja."
    ],
    inc: [
      "Sobre las conclusiones de Mischel (1968)|La conducta observada era muy consistente entre situaciones|La estabilidad temporal de la conducta era aceptable|Los rasgos rara vez superaban una correlación de ,30|Mischel halló una consistencia escasa entre situaciones cuando se observaba la conducta directamente."
    ],
    seq: [],
    cls: [
      "Concepto|Consistencia: entre situaciones; Hartshorne y May; cuestionada por Mischel|Estabilidad: a lo largo del tiempo; aceptable para Mischel; estudiada en la Unidad 14"
    ] },
  { t: "Respuestas clásicas a la paradoja",
    tip: "Unas respuestas a Mischel buscaron mejores métodos para hallar la consistencia, y otras reformularon el problema como interacción. Destacan la agregación (Epstein, 1979), las variables moderadoras (Bem y Allen, 1974), las plantillas (Bem y Funder, 1978), el interaccionismo (Magnusson y Endler, 1977) y el hallazgo de Funder y Ozer (1983) de que la situación tampoco predice más. La agregación mejora la fiabilidad del criterio agregado, no la predicción de una conducta aislada.",
    v: [
      "Agregación=Promediar conductas en muchas ocasiones para aumentar la fiabilidad del criterio",
      "Variables moderadoras=Condiciones que hacen a unas personas más consistentes que otras en un rasgo",
      "Autoobservación=Self-monitoring de Snyder: ajustar la conducta a las señales de la situación",
      "Plantillas=Describen situaciones con el perfil de quien actuaría de cierto modo en ellas",
      "Interacción mecanicista=Efecto estadístico P × S en un análisis de varianza, unidireccional",
      "Interacción recíproca=Influencia mutua y continua entre persona y situación",
      "Coherencia=Patrón de cambios ordenado y predecible entre situaciones",
      "Situación fuerte=Impone una conducta casi uniforme y reduce las diferencias individuales"
    ],
    g: [
      "Buss y Craik (1983) propusieron medir los rasgos por la ___ de actos de una categoría en un periodo.|frecuencia|intensidad|duración",
      "El lema de Bem y Allen fue «algunas personas algunas ___».|veces|situaciones|culturas",
      "Un funeral o un semáforo en rojo son ejemplos de situaciones ___.|fuertes|débiles|ambiguas",
      "Funder y Ozer hallaron que los efectos situacionales clásicos equivalían a correlaciones de en torno a ___.|,30-,40|,10-,20|,60-,70",
      "El interaccionismo sustituyó la búsqueda de consistencia por la de ___.|coherencia|estabilidad|agregación"
    ],
    tf: [
      "La agregación permite predecir mucho mejor una conducta aislada a partir de un rasgo.|F|Es la trampa típica: mejora la fiabilidad del criterio agregado, no la predicción de una conducta puntual.",
      "Quienes puntúan alto en autoobservación son menos predecibles a partir de sus rasgos.|V",
      "Las plantillas de Bem y Funder describen a las personas con el perfil de las situaciones que suelen elegir.|F|Es al revés: describen las situaciones con el perfil de la persona que actuaría de un modo determinado en ellas.",
      "Según Kenrick y Funder (1988), los rasgos predicen mejor con observadores que conocen bien a la persona.|V"
    ],
    q: [
      "Una estudiante ansiosa evita hablar en clase, el profesor deja de preguntarle y su ansiedad se mantiene. ¿Qué ilustra?|Interacción recíproca|Interacción mecanicista|Situación fuerte|Persona y situación se influyen continuamente. El efecto estadístico P × S sería la interacción mecanicista.",
      "Bem y Allen (1974) hallaron que la conducta relacionada con un rasgo era más consistente en quienes…|se describían consistentes en ese rasgo|puntuaban alto en autoobservación|encajaban con una plantilla|Quienes se describían como consistentes en un rasgo lo eran más. La autoobservación alta predice lo contrario.",
      "¿Qué autor propuso la agregación como respuesta a la paradoja?|Epstein|Snyder|Magnusson|Epstein (1979) promedió la conducta en muchas ocasiones. Snyder estudió la autoobservación, y Magnusson, el interaccionismo.",
      "En una fiesta informal se esperan más diferencias de conducta entre personas que en un funeral porque la fiesta es una situación…|débil|fuerte|normativa|Las situaciones débiles dejan espacio para que se exprese la personalidad. Las fuertes imponen una conducta casi uniforme."
    ],
    inc: [
      "Sobre las respuestas clásicas a Mischel|Bem y Funder propusieron medir rasgos por frecuencia de actos|Epstein mostró que agregar conductas eleva las correlaciones|Funder y Ozer vieron que la situación tampoco predice más|La medida por frecuencia de actos es de Buss y Craik (1983). Bem y Funder propusieron las plantillas persona-situación."
    ],
    seq: [],
    cls: [
      "Autor|Epstein (1979): agregación; promediar conductas; fiabilidad del criterio|Bem y Allen (1974): variables moderadoras; algunas personas algunas veces|Magnusson y Endler (1977): interaccionismo; interacción recíproca; coherencia"
    ] },
  { t: "Perfiles «si… entonces» y densidad de estados",
    tip: "Mischel y Shoda (1995) propusieron el CAPS: la personalidad es una red de unidades cognitivo-afectivas que se activan según la situación, y la variabilidad no es ruido, sino información. Cada persona muestra perfiles «si… entonces» estables, su firma conductual, de modo que el CAPS no niega la estabilidad: la sitúa en los perfiles. Fleeson (2001) halló que los estados varían mucho, pero la media y la dispersión de cada distribución son muy estables.",
    v: [
      "CAPS=Sistema cognitivo-afectivo de la personalidad de Mischel y Shoda (1995)",
      "Codificaciones=Cómo interpreta la persona las situaciones y a los demás",
      "Expectativas y creencias=Sobre los resultados de la propia conducta y la propia capacidad",
      "Perfil «si… entonces»=Patrón estable de respuesta de una persona a distintas situaciones",
      "Firma conductual=Patrón propio de respuesta a las situaciones que identifica a cada persona",
      "Estado de personalidad=Cómo se comporta alguien en un momento, descrito con adjetivos de los Cinco Grandes",
      "Densidad de estados=Distribución de los estados de una persona a lo largo del tiempo",
      "Rasgos completos=Teoría con una parte descriptiva y otra explicativa (Fleeson y Jayawickreme, 2015)"
    ],
    g: [
      "La evidencia del CAPS procede del campamento de verano ___.|Wediko|Bing|Lothian",
      "En el CAPS, la variabilidad de la conducta entre situaciones no es ___, sino información.|ruido|perfil|estado",
      "Fleeson pidió describir la conducta varias veces al día durante dos ___.|semanas|meses|días",
      "En la teoría de los rasgos completos, la distribución de estados es la parte ___ del rasgo.|descriptiva|explicativa|situacional",
      "Shoda, Mischel y Wright publicaron el estudio del campamento en ___.|1994|1995|2001"
    ],
    tf: [
      "El CAPS niega que la personalidad sea estable, porque la conducta cambia de una situación a otra.|F|No la niega: la sitúa en los perfiles «si… entonces», que se repiten de forma estable.",
      "En el estudio de Fleeson, las distribuciones de estados de personas distintas se solapaban mucho.|V",
      "Según Fleeson, la media de la distribución de estados de cada persona variaba mucho de una semana a otra.|F|La conducta puntual variaba mucho, pero la media y la dispersión de cada distribución eran muy estables.",
      "Las metas y valores y las competencias y planes de autorregulación forman parte de las unidades del CAPS.|V"
    ],
    q: [
      "Dos niños del campamento tienen la misma agresividad total, pero uno agrede cuando un igual se burla y otro cuando un adulto le castiga. Según el CAPS, ¿qué conviene hacer?|Describir el perfil de cada uno|Tratarlos como igual de agresivos|Promediar más conductas de ambos|Tratarlos como iguales pierde la información más útil: cada perfil «si… entonces» se repite de forma estable.",
      "Según Fleeson (2001), ¿qué caracteriza mejor a una persona?|Su distribución de estados|Su conducta en un momento|Su estado más extremo|La conducta puntual es muy variable, pero la media y la dispersión de la distribución de cada persona son muy estables.",
      "Según la teoría de los rasgos completos, ¿qué constituye la parte explicativa del rasgo?|Los procesos sociocognitivos|La distribución de estados|La media de los estados|Los procesos sociocognitivos hacen que en cada situación se produzca un estado u otro. La distribución es la parte descriptiva.",
      "¿Qué unidad del CAPS recoge cómo interpreta la persona una situación?|Las codificaciones|Las expectativas|Las competencias|Las codificaciones son la interpretación de situaciones y personas. Las expectativas se refieren a los resultados de la conducta."
    ],
    inc: [
      "Sobre la densidad de estados de Fleeson (2001)|Un introvertido apenas tiene momentos extravertidos|La dispersión de cada distribución es muy estable|La conducta puntual varía mucho dentro de cada persona|La variabilidad dentro de cada persona es enorme: un introvertido tiene momentos muy extravertidos, y al revés."
    ],
    seq: [],
    cls: [
      "Propuesta|CAPS de Mischel y Shoda: perfiles «si… entonces»; firma conductual; campamento Wediko|Fleeson (2001): estados de personalidad; densidad de estados; rasgos completos"
    ] },
  { t: "Cuánto pesa la situación y qué pasó con el test del malvavisco",
    tip: "Una correlación de ,30 explica en torno al 9 % de la varianza, pero se considera grande para efectos psicológicos (Funder y Ozer, 2019), supera la media de la psicología social, en torno a ,21, y se acumula a lo largo de miles de situaciones. La conducta depende a la vez de persona y situación. La réplica de Watts, Duncan y Quan (2018) del test del malvavisco halló una asociación con el logro que era la mitad de la original y bajaba en dos tercios con controles.",
    v: [
      "Demora de la gratificación=Esperar para obtener una recompensa mayor en lugar de una inmediata",
      "Guardería Bing=Centro de Stanford donde se hicieron los estudios originales con golosinas",
      "Mischel, Ebbesen y Zeiss=Autores de los estudios de los años setenta sobre esperar una golosina",
      "Shoda, Mischel y Peake (1990)=Seguimiento que asoció más espera con mejores resultados años después",
      "Watts, Duncan y Quan (2018)=Réplica con 918 niños, centrada en 552 hijos de madres sin estudios universitarios",
      "Benjamin et al. (2020)=Siguieron a los participantes originales hasta los 40-50 años",
      "Richard et al. (2003)=Situaron la correlación media en psicología social en torno a ,21",
      "Funder y Ozer (2019)=Referencias según las cuales una correlación de ,30 es grande"
    ],
    g: [
      "Benjamin et al. (2020) siguieron a los participantes originales hasta los ___ años.|40-50|20-30|60-70",
      "En la réplica de 2018, casi todo el efecto procedía de esperar los primeros ___.|20 segundos|5 minutos|2 minutos",
      "Un minuto más de espera a los 4 años se asociaba con ___ desviaciones típicas más de logro a los 15.|0,1|0,5|1,0",
      "El coeficiente estandarizado entre espera y logro pasó de 0,24 a ___ al añadir controles.|0,08|0,16|0,12",
      "Watts, Duncan y Quan centraron su análisis en 552 hijos de madres sin estudios ___.|universitarios|primarios|secundarios"
    ],
    tf: [
      "Watts, Duncan y Quan hallaron una asociación entre la espera y el logro mayor que la de los estudios originales.|F|Fue la mitad de la original y bajó en dos tercios al controlar la familia y la capacidad cognitiva temprana.",
      "Con la conducta a los 15 años, la espera en preescolar apenas mostraba asociación.|V",
      "La conclusión actual es que la situación pesa claramente más que la persona en la conducta.|F|Dependen a la vez de ambas y preguntar cuál pesa más tiene poco sentido. Además, las personas eligen sus situaciones.",
      "Las muestras pequeñas y poco diversas ayudan a entender por qué el efecto del malvavisco parecía mayor.|V"
    ],
    q: [
      "Un colegio propone usar una prueba de espera con golosinas a los 4 años para predecir qué alumnos triunfarán. ¿Qué indica la evidencia?|Que predice poco al controlar la familia|Que es el mejor predictor del éxito adulto|Que predice bien la conducta a los 15 años|La asociación bajó en dos tercios con controles, apenas había relación con la conducta a los 15 y poca con los resultados adultos.",
      "¿Por qué tiene poco sentido preguntar si pesa más la persona o la situación?|Las personas eligen y modifican sus situaciones|La situación explica siempre más varianza|Los rasgos no predicen ninguna conducta|La conducta depende a la vez de ambas, y como las personas eligen y modifican sus situaciones, los dos factores no son independientes.",
      "¿Qué lección deja la reevaluación del test del malvavisco?|Una conducta aislada indica mal un rasgo|El autocontrol infantil no tiene importancia|La familia determina por completo el logro|La lección no es que el autocontrol no importe, sino que una conducta en una situación concreta es un indicador pobre.",
      "¿Qué hallaron Benjamin et al. (2020) al seguir a los participantes originales hasta los 40-50 años?|Que la espera predecía poco|Que la espera predecía mucho|Que el efecto se duplicaba|La espera en preescolar predecía poco los resultados adultos, en línea con la réplica de Watts, Duncan y Quan (2018)."
    ],
    inc: [
      "Sobre la réplica de Watts, Duncan y Quan (2018)|Usó una muestra menor que los estudios originales|La asociación bajó en dos tercios con controles|Casi todo el efecto venía de los primeros 20 segundos|Usó una muestra mucho mayor y más diversa: 918 niños, con un análisis centrado en 552."
    ],
    seq: [],
    cls: [
      "Estudio del malvavisco|Estudios originales: guardería Bing; Mischel, Ebbesen y Zeiss; Shoda, Mischel y Peake (1990)|Reevaluación: Watts, Duncan y Quan (2018); 918 niños; Benjamin et al. (2020)"
    ] }
] },
{ n: 14, t: "Estabilidad y cambio a lo largo de la vida", cap: 5, pir: "alta", mods: [
  { t: "Cuatro maneras de ser estable",
    tip: "«Ser estable» puede significar cuatro cosas: conservar la posición relativa (orden de rango), mantener la media del grupo (nivel medio), conservar la forma del perfil individual (ipsativa) o mantener la organización de los rasgos (estructural). El orden de rango y el nivel medio son independientes: todos pueden cambiar en la misma dirección y conservar su posición. Solo los estudios longitudinales permiten estudiar el orden de rango, y los transversales confunden edad y cohorte.",
    v: [
      "Estabilidad de orden de rango=Conservación de la posición relativa de las personas en un rasgo",
      "Estabilidad de nivel medio=Constancia de la puntuación media de un grupo en un rasgo con el tiempo",
      "Estabilidad ipsativa=Conservación de la forma del perfil de rasgos de una persona",
      "Estabilidad estructural=Mantenimiento de la organización de los rasgos en distintas edades",
      "Cambio normativo=Cambio de nivel medio típico de una edad, compartido por la mayoría",
      "Estudio longitudinal=Evalúa a las mismas personas en varios momentos",
      "Estudio transversal=Compara a personas de distintas edades en un mismo momento",
      "Efecto de cohorte=Diferencias debidas a haber crecido en épocas distintas, no a la edad"
    ],
    g: [
      "La estabilidad de orden de rango se mide con la correlación ___ en estudios longitudinales.|test-retest|entre perfiles|entre ítems",
      "La estabilidad ___ se estudia con análisis factorial en distintas edades.|estructural|ipsativa|absoluta",
      "La estabilidad de orden de rango también se llama diferencial o ___.|relativa|absoluta|ipsativa",
      "El enfoque de la estabilidad ipsativa es más ___.|idiográfico|nomotético|transversal",
      "Los estudios transversales confunden la edad con la ___.|cohorte|muestra|maduración"
    ],
    tf: [
      "Aunque las medias y las correlaciones sean estables, en cualquier muestra hay personas que cambian en dirección contraria a la media.|V",
      "Una alta estabilidad de orden de rango impide que haya un cambio importante de nivel medio.|F|Son independientes: basta con que todos cambien en la misma dirección para que cada uno conserve su posición.",
      "La estabilidad estructural es una condición previa para comparar medias entre edades.|V",
      "Los estudios transversales permiten estudiar la estabilidad de orden de rango sin los costes de los longitudinales.|F|Solo los longitudinales, que evalúan a las mismas personas, permiten estudiar el orden de rango y el cambio individual."
    ],
    q: [
      "Lucía era a los 20 años más responsable que casi toda su clase y a los 40 sigue siéndolo, aunque toda la clase ha ganado en responsabilidad. ¿Qué se observa?|Estabilidad de orden de rango y cambio de nivel medio|Cambio de orden de rango y estabilidad de nivel medio|Estabilidad ipsativa y cambio estructural|Lucía conserva su posición relativa y la media del grupo sube: ambos tipos de estabilidad son independientes.",
      "Una persona tiene la apertura como rasgo más alto y la extraversión como el más bajo, y mantiene ese perfil aunque todas sus puntuaciones suban. ¿Qué estabilidad muestra?|Ipsativa|Estructural|De nivel medio|La estabilidad ipsativa se fija en la forma del perfil de cada persona, no en sus niveles absolutos.",
      "¿Por qué un estudio transversal puede atribuir a la edad diferencias que no son de edad?|Confunde la edad con la cohorte|Sufre muchos abandonos de la muestra|Evalúa a las mismas personas dos veces|Jóvenes y mayores crecieron en épocas distintas. Los abandonos son un problema de los estudios longitudinales.",
      "¿Qué pregunta responde la estabilidad de nivel medio?|Si sube o baja la media del grupo|Si cada persona conserva su posición|Si se repiten los mismos factores|Se refiere a si el grupo en conjunto cambia. La posición relativa es el orden de rango, y los factores, la estructural."
    ],
    inc: [
      "Sobre los tipos de estabilidad|La consistencia se refiere a los rasgos a lo largo del tiempo|La estructural pregunta si se mantienen los mismos factores|La ipsativa correlaciona los perfiles de una persona|La consistencia se refiere a la conducta entre situaciones, y la estabilidad, a los rasgos a lo largo del tiempo."
    ],
    seq: [],
    cls: [
      "Tipo de diseño|Longitudinal: mismas personas; orden de rango; abandonos|Transversal: distintas edades; rapidez; confusión con la cohorte"
    ] },
  { t: "El orden entre personas: lo que muestran los metaanálisis",
    tip: "Roberts y DelVecchio (2000) reunieron 152 estudios longitudinales con un intervalo fijado en 6,7 años: la estabilidad de orden de rango sube de ,31 en la infancia a ,54 en la universidad, ,64 hacia los 30 y ,74 entre los 50 y los 70. Bleidorn et al. (2022) la sitúan en una meseta en la adultez joven, con poca evidencia de aumentos tras los 25. Nunca es perfecta y baja con intervalos más largos o edades de partida más tempranas.",
    v: [
      "Roberts y DelVecchio (2000)=Metaanálisis de 152 estudios longitudinales sobre la estabilidad de orden de rango",
      "Bleidorn et al. (2022)=Síntesis de 189 muestras y 178.503 participantes",
      "Meseta en la adultez joven=Punto en que la estabilidad deja de subir, con poca evidencia de aumento tras los 25",
      "Damian et al. (2019)=Siguieron durante 50 años a estudiantes de secundaria del Project Talent",
      "Harris et al. (2016)=Compararon en la cohorte de Lothian valoraciones a los 14 y a los 77 años",
      "Intervalo entre mediciones=Moderador: cuanto más tiempo pasa, más baja la correlación",
      "Edad de partida=Moderador: cuanto más joven en la primera evaluación, menor estabilidad",
      "Selección de entornos=Buscar contextos que refuerzan la propia forma de ser"
    ],
    g: [
      "El metaanálisis de Roberts y DelVecchio (2000) reunió ___ estudios longitudinales.|152|189|207",
      "Hacia los 30 años, la estabilidad de orden de rango ronda ___.|,64|,54|,74",
      "Bleidorn et al. hallaron poca evidencia de que la estabilidad siga subiendo tras los ___ años.|25|50|40",
      "En el Project Talent, tras 50 años, la estabilidad rondaba ___.|,30|,74|,64",
      "Que la identidad se consolide y guíe la conducta ayuda a explicar que la estabilidad ___ con la edad.|aumente|disminuya|oscile"
    ],
    tf: [
      "Según los datos actuales, la estabilidad de orden de rango sigue aumentando de forma clara hasta los 50 años.|F|Es una trampa típica: Bleidorn et al. (2022) sitúan la meseta en la adultez joven, con poca evidencia de aumento tras los 25.",
      "Incluso en la infancia, la posición relativa de los niños se conserva en parte.|V",
      "Una correlación de ,74 en casi siete años implica una estabilidad semejante a lo largo de cincuenta años.|F|Cuanto más largo es el intervalo, más baja la correlación. En el Project Talent, tras 50 años, rondaba ,30.",
      "Las influencias genéticas figuran entre las razones propuestas para el aumento de la estabilidad con la edad.|V"
    ],
    q: [
      "Un equipo evalúa la responsabilidad de 500 personas a los 18 años y de nuevo a los 25, y otro hace lo mismo entre los 55 y los 62. ¿Qué cabe esperar?|Más estabilidad en el segundo grupo|Igual estabilidad en ambos grupos|Estabilidad perfecta en el segundo|La estabilidad aumenta con la edad, de ,54 en la universidad a ,74 entre los 50 y los 70, pero nunca es perfecta.",
      "¿Por qué fijaron Roberts y DelVecchio el intervalo entre mediciones en 6,7 años?|Para comparar correlaciones entre edades|Para evitar el efecto de la cohorte|Para reducir los abandonos de muestra|Como la correlación baja al alargar el intervalo, fijarlo permitía que las correlaciones de distintas edades fueran comparables.",
      "¿Qué hallaron Harris et al. (2016) al comparar valoraciones de los mismos participantes a los 14 y a los 77 años?|Una estabilidad casi nula|Una estabilidad de ,74|Una estabilidad perfecta|Con una muestra pequeña, de algo menos de dos centenares, la estabilidad fue casi nula, lo que ilustra el efecto del intervalo.",
      "¿Qué explicación del aumento de la estabilidad ilustra un introvertido que elige un trabajo tranquilo?|La elección de entornos que la refuerzan|La consolidación de la identidad|La mayor estabilidad de los entornos adultos|Las personas eligen entornos que refuerzan su forma de ser: el trabajo tranquilo mantiene la introversión."
    ],
    inc: [
      "Sobre la estabilidad de orden de rango|Se vuelve perfecta a partir de los 30 años|Aumenta desde la infancia hasta la adultez joven|Disminuye cuanto más largo es el intervalo|Ninguna edad alcanza una estabilidad perfecta: incluso en la madurez queda margen para cambiar de posición."
    ],
    seq: [
      "Estabilidad de orden de rango según la edad (Roberts y DelVecchio)|Infancia, ,31>Años de universidad, ,54>Hacia los 30, ,64>De 50 a 70 años, ,74"
    ],
    cls: [
      "Seguimiento muy largo|Project Talent: Damian et al. (2019); 50 años; en torno a ,30|Cohorte de Lothian: Harris et al. (2016); de 14 a 77 años; estabilidad casi nula"
    ] },
  { t: "Madurar: cambios de nivel medio e inversión social",
    tip: "Roberts, Walton y Viechtbauer (2006) describieron los cambios de nivel medio: responsabilidad, estabilidad emocional y dominancia social suben sobre todo entre los 20 y los 40, la amabilidad sube más tarde, y la vitalidad social y la apertura suben en la juventud y bajan en la vejez. Es el principio de madurez. La versión fuerte de la hipótesis de la escayola está refutada. La inversión social atribuye la maduración al compromiso con roles adultos.",
    v: [
      "Principio de madurez=Tendencia a ser más responsable, estable y amable con la edad",
      "Dominancia social=Componente de la extraversión que sube sobre todo entre los 20 y los 40",
      "Vitalidad social=Componente de la extraversión que sube en la juventud y baja en la vejez",
      "Hipótesis de la escayola=Idea de que la personalidad queda fijada hacia los 30 años",
      "Versión débil de la escayola=El cambio se hace menor con la edad, algo compatible con la evidencia",
      "Inversión social=Compromiso con roles adultos de trabajo, pareja y familia que impulsa la maduración",
      "Roberts, Wood y Smith (2005)=Autores del principio que liga la maduración a los roles adultos",
      "Roberts, Walton y Viechtbauer=Metaanálisis de unas 90 muestras longitudinales sobre cambios de nivel medio"
    ],
    g: [
      "La expresión «como en escayola» la tomaron Costa y McCrae de ___.|William James|Gordon Allport|Henry Murray",
      "La ___ también aumenta con la edad, pero sobre todo en la madurez.|amabilidad|responsabilidad|apertura",
      "Buena parte de la maduración ocurre en la ___, es decir, no se detiene al terminar la adolescencia.|adultez joven|vejez|infancia",
      "Roberts, Walton y Viechtbauer dividieron la extraversión en dominancia social y ___ social.|vitalidad|deseabilidad|competencia",
      "Según la inversión social, los roles adultos exigen y ___ la puntualidad, el control emocional y la cordialidad.|premian|castigan|ignoran"
    ],
    tf: [
      "La apertura a la experiencia aumenta de forma continuada hasta la vejez.|F|Sube en la adolescencia y la juventud y baja en la vejez, igual que la vitalidad social.",
      "Los datos refutan la versión fuerte de la hipótesis de la escayola, pero no la débil.|V",
      "Los datos sobre inversión social son sobre todo experimentales y excluyen un origen biológico de la maduración.|F|Son sobre todo correlacionales y no excluyen que parte de la maduración sea biológica, como defendían Costa y McCrae.",
      "Roberts, Walton y Viechtbauer dividieron la extraversión en dos componentes porque siguen trayectorias distintas.|V"
    ],
    q: [
      "Pablo empieza su primer trabajo con contrato a los 26 años y, un año después, planifica mejor y se enfada menos. Según la inversión social, ¿cuándo cambiará más?|Si se implica de verdad en el rol|Si vive el trabajo como algo ajeno|Si cambia de empleo cada pocos meses|La inversión social predice cambios mayores cuando la persona se compromete con el rol que cuando lo vive como ajeno.",
      "¿Qué rasgos aumentan sobre todo entre los 20 y los 40 años?|Responsabilidad y estabilidad emocional|Amabilidad y apertura a la experiencia|Vitalidad social y apertura|También sube la dominancia social. La amabilidad sube más tarde, y la apertura y la vitalidad social bajan en la vejez.",
      "¿En qué apoyaban Costa y McCrae la hipótesis de la escayola?|En la base biológica de los rasgos|En la inversión en roles sociales|En la estabilidad de los entornos|Si los rasgos son tendencias básicas de base biológica, deberían madurar como el resto del organismo y estabilizarse.",
      "¿Qué dato apoya la explicación de la inversión social?|La maduración coincide con los roles adultos|La amabilidad deja de cambiar tras los 30|La estabilidad de rango es ya perfecta a los 30|El momento de la maduración coincide con la entrada en los roles adultos, aunque los datos son sobre todo correlacionales."
    ],
    inc: [
      "Sobre el principio de madurez|La personalidad deja de cambiar hacia los 30 años|Las personas se vuelven más organizadas y tranquilas|Los rasgos cambian en la dirección del funcionamiento adulto|Hay cambios de nivel medio después de los 30, y la amabilidad sigue aumentando en la madurez."
    ],
    seq: [],
    cls: [
      "Trayectoria de nivel medio|Sube sobre todo entre los 20 y los 40: responsabilidad; estabilidad emocional; dominancia social|Sube sobre todo en la madurez: amabilidad|Sube en la juventud y baja en la vejez: apertura; vitalidad social"
    ] },
  { t: "Cambiar a propósito: intervenciones y sucesos vitales",
    tip: "Roberts et al. (2017) reunieron 207 estudios de intervenciones y hallaron un cambio medio de d ,37 en unas 24 semanas, mayor en estabilidad emocional y después en extraversión, que se mantenía en seguimientos de más de un año. El cambio volitivo es posible mediante la práctica repetida de estados (Hudson y Fraley, 2015, y Stieger et al., 2021). Los sucesos vitales tienen efectos pequeños y heterogéneos.",
    v: [
      "Roberts et al. (2017)=Metaanálisis de 207 estudios de intervenciones con medidas de personalidad",
      "Cambio volitivo=Cambio de un rasgo en la dirección que la propia persona desea",
      "PEACH=Aplicación móvil con tareas para practicar el rasgo que se quiere cambiar",
      "Hudson y Fraley (2015)=Quienes deseaban cambiar un rasgo tendían a hacerlo en esa dirección",
      "Práctica de estados=Comportarse a menudo de cierto modo para desplazar la distribución y el rasgo",
      "Sucesos vitales=Acontecimientos como casarse o enviudar, con efectos pequeños y heterogéneos",
      "Estabilidad emocional=Rasgo que más cambió con las intervenciones según Roberts et al. (2017)",
      "Abuso de sustancias=Diagnóstico de los pacientes que menos cambiaban con las intervenciones"
    ],
    g: [
      "En el metaanálisis de Roberts et al. (2017), el cambio se producía en unas ___ semanas de media.|24|8|52",
      "El cambio no aumentaba más allá de unas ___ semanas de terapia.|8|24|52",
      "Tras la estabilidad emocional, el rasgo que más cambiaba con las intervenciones era la ___.|extraversión|amabilidad|apertura",
      "Los pacientes con trastornos de ___ eran los que más cambiaban.|ansiedad|personalidad|sueño",
      "Stieger et al. (___) obtuvieron cambios en la dirección deseada con una aplicación móvil.|2021|2015|2017"
    ],
    tf: [
      "Los cambios producidos por las intervenciones desaparecían en los seguimientos de más de un año.|F|Se mantenían en los seguimientos de más de un año, según Roberts et al. (2017).",
      "Mejorar la ansiedad puede hacer que la persona se describa con menos neuroticismo sin que el rasgo cambie en el mismo grado.|V",
      "Casarse o tener un hijo produce cambios de personalidad grandes y en la misma dirección en casi todas las personas.|F|Los efectos de los sucesos vitales son pequeños y heterogéneos: dos personas que tienen un hijo pueden cambiar en direcciones opuestas.",
      "La mayoría de los estudios del metaanálisis de intervenciones aplicaban tratamientos por otros motivos, como ansiedad o depresión.|V"
    ],
    q: [
      "Marta quiere ser más extravertida y, durante semanas, se propone hablar en clase y saludar a desconocidos. ¿Qué mecanismo explicaría su cambio?|La práctica repetida de estados|El efecto de un suceso vital|La maduración por inversión social|Comportarse a menudo de forma más extravertida desplaza la distribución de estados y, con el tiempo, el rasgo.",
      "Según Roberts et al. (2017), ¿qué rasgo cambiaba más con las intervenciones?|La estabilidad emocional|La apertura a la experiencia|La amabilidad hacia los demás|Le seguía la extraversión. El cambio medio fue de d ,37 en unas 24 semanas y se mantenía más de un año.",
      "¿Qué determina sobre todo el efecto de un suceso vital en la personalidad?|Cómo cambia la vida diaria y se vive|La mera ocurrencia del acontecimiento|La edad a la que se produce el suceso|Importa menos el suceso que la manera en que cambia la vida diaria y cómo lo vive cada persona.",
      "¿Qué cuestión sigue abierta sobre el cambio inducido?|Si cambian los rasgos o la autodescripción|Si las intervenciones producen algún cambio|Si la estabilidad emocional puede cambiar|Se debate qué mecanismos explican el cambio, si coincide en conducta observada y autoinforme y cuánto persiste."
    ],
    inc: [
      "Sobre el metaanálisis de Roberts et al. (2017)|El cambio crecía sin límite con más semanas de terapia|Los cambios se mantenían más de un año|Los pacientes con abuso de sustancias cambiaban menos|El cambio no aumentaba más allá de unas 8 semanas de terapia."
    ],
    seq: [],
    cls: [
      "Fuente de cambio|Intervenciones: Roberts et al. (2017); d ,37; estabilidad emocional|Cambio volitivo: Hudson y Fraley (2015); aplicación PEACH; práctica de estados|Sucesos vitales: efectos pequeños; efectos heterogéneos; Bleidorn et al. (2018)"
    ] }
] },
{ n: 15, t: "Los motivos: logro, poder y afiliación", cap: 6, pir: "media", mods: [
  { t: "Instinto, impulso e incentivo",
    tip: "Las teorías de empuje explican la conducta por una tensión interna, como el instinto, la pulsión o el impulso, y las de atracción, por un objetivo externo, como el incentivo o las metas. El instinto de McDougall cayó por circular. Hull definió el potencial de reacción como el producto del impulso por la fuerza del hábito y añadió después el incentivo K. Los modelos de expectativa × valor son multiplicativos: si un factor es nulo, la tendencia desaparece.",
    v: [
      "Teorías de empuje=Un estado interno de tensión impulsa a actuar hasta que se reduce",
      "Teorías de atracción=Un objetivo externo deseado atrae al organismo",
      "McDougall=Explicó la conducta social con una lista de instintos innatos, cada uno con su emoción",
      "Impulso (drive)=Activación por una necesidad biológica que la conducta tiende a reducir",
      "Potencial de reacción=En Hull, producto del impulso por la fuerza del hábito",
      "Incentivo=Valor anticipado de un resultado que atrae la conducta desde fuera",
      "Expectativa × valor=La tendencia depende de la probabilidad y del atractivo del resultado",
      "Motivos secundarios=Motivos sociales adquiridos en la interacción, que nadie sacia del todo"
    ],
    g: [
      "Hull añadió a su fórmula un término de incentivo representado con la letra ___.|K|D|H",
      "Las teorías del instinto cayeron porque su explicación era ___.|circular|mecanicista|cognitiva",
      "Según Hull, una rata ___ no recorre el laberinto por mucho que lo conozca.|saciada|hambrienta|entrenada",
      "Tolman y Spence subrayaron que los organismos actúan en función de lo que ___.|anticipan|necesitan|recuerdan",
      "La psicología de la personalidad ha estudiado sobre todo los motivos ___.|secundarios|primarios|fisiológicos"
    ],
    tf: [
      "En la fórmula de Hull, un hábito muy bien aprendido produce conducta aunque el impulso sea cero.|F|La fórmula es multiplicativa: si el impulso es cero, ni el hábito mejor aprendido produce conducta.",
      "La pulsión freudiana se incluye entre las teorías de empuje.|V",
      "El principal problema atribuido a la teoría del impulso es que requiere procesos cognitivos internos.|F|Ese problema se atribuye al incentivo. Al impulso se le reprocha no explicar bien la búsqueda activa de estímulos.",
      "En un modelo de expectativa × valor, nadie se esfuerza por algo seguro que no le importa.|V"
    ],
    q: [
      "Andrés considera imposible aprobar unas oposiciones, aunque la plaza le parece muy deseable, y no se presenta. ¿Qué lo explica mejor?|El producto expectativa × valor|La reducción del impulso de Hull|Un instinto innato de evitación|Como el producto es multiplicativo, si la expectativa es nula la tendencia desaparece, por mucho valor que tenga el resultado.",
      "«Es agresivo porque tiene un instinto de agresión, y lo sabemos porque es agresivo.» ¿Qué crítica ilustra?|La circularidad del instinto|La falta de base biológica|El exceso de cognición|El instinto solo se infería de la misma conducta que pretendía explicar, y las listas crecieron sin control.",
      "Según Hull, la conducta que reduce el impulso queda reforzada y se convierte en…|hábito|incentivo|instinto|Hull lo resumió en el potencial de reacción, producto del impulso por la fuerza del hábito.",
      "¿Qué familia de teorías comparte la lógica de las metas?|Las de atracción|Las de empuje|Las del instinto|Las teorías de atracción explican la conducta por un objetivo externo deseado, como el incentivo y, más tarde, las metas."
    ],
    inc: [
      "Sobre las teorías clásicas de la motivación|El incentivo es una teoría de empuje basada en la tensión|El instinto de McDougall llevaba una emoción asociada|Hull añadió el incentivo porque la recompensa importaba|El incentivo es una teoría de atracción: lo que mueve es el valor de lo que se espera conseguir."
    ],
    seq: [],
    cls: [
      "Familia de teorías|Empuje: instinto; pulsión freudiana; impulso de Hull|Atracción: incentivo; expectativa × valor; metas"
    ] },
  { t: "Murray: necesidades, presión y TAT",
    tip: "Murray (1938) llamó personología a su sistema. Su unidad es la necesidad, en parte inconsciente, que puede ser viscerogénica o psicogénica, como logro, afiliación o dominancia. La presión es el aspecto del ambiente que facilita u obstaculiza la necesidad: alfa, la objetiva, y beta, la percibida, a la que responde sobre todo la conducta. Necesidad y presión forman un tema. Morgan y Murray (1935) crearon el TAT para evaluar las necesidades a partir de historias.",
    v: [
      "Personología=Nombre que dio Murray a su sistema en Explorations in Personality",
      "Necesidad=Fuerza que organiza percepción, pensamiento y acción en una dirección",
      "Necesidad viscerogénica=De origen corporal, como el alimento, el agua o evitar el daño",
      "Necesidad psicogénica=De origen psicológico, como el logro, la afiliación o la dominancia",
      "Presión alfa=Ambiente tal como es objetivamente",
      "Presión beta=Ambiente tal como lo percibe e interpreta la persona",
      "Tema=Combinación de una necesidad y una presión, unidad de interacción persona-ambiente",
      "PSE=Ejercicio de historias con imágenes, versión actual del TAT"
    ],
    g: [
      "Murray llamó ___ a su sistema de la personalidad.|personología|personalismo|caracterología",
      "La lista de necesidades psicogénicas de Murray recogía unas ___.|veinte|cinco|cien",
      "La conducta responde sobre todo a la presión ___.|beta|alfa|objetiva",
      "El TAT fue creado por Morgan y Murray en ___.|1935|1938|1961",
      "Ante las críticas al TAT, el grupo de McClelland desarrolló ___ de codificación precisos.|sistemas|ejercicios|cuestionarios"
    ],
    tf: [
      "Según Murray, las necesidades actúan siempre de forma consciente y con la misma fuerza en todos.|F|Actúan en buena parte fuera de la conciencia, y cada persona las tiene con distinta fuerza.",
      "El concepto de tema de Murray anticipa el interaccionismo.|V",
      "La presión alfa es el ambiente tal como lo percibe e interpreta la persona.|F|Esa es la presión beta. La presión alfa es el ambiente tal como es objetivamente.",
      "El TAT ha recibido críticas por su baja consistencia interna.|V"
    ],
    q: [
      "El mismo jefe revisa cada informe de dos empleados: uno lo vive como interés y otro como desconfianza. ¿Qué concepto de Murray ilustra?|Presión beta|Presión alfa|Necesidad|La conducta responde sobre todo al ambiente percibido, la presión beta. El jefe objetivo, igual para ambos, es la presión alfa.",
      "¿Cuál es la lógica del TAT?|Al dar sentido a lo ambiguo se proyectan necesidades|Al describirse uno mismo se revelan las necesidades|Al elegir láminas se muestran las preferencias|Al interpretar escenas ambiguas, cada persona proyecta sus necesidades y preocupaciones en la historia que inventa.",
      "Una estudiante con fuerte necesidad de logro percibe que su departamento premia la iniciativa y propone proyectos. En términos de Murray, ¿qué se describe?|Un tema|Una presión alfa|Una necesidad viscerogénica|El tema combina una necesidad, el logro, con una presión percibida, el departamento que premia la iniciativa.",
      "¿Qué necesidad es viscerogénica según Murray?|Evitar el daño|Ayuda a otros|Orden|Las viscerogénicas son de origen corporal. La ayuda a otros y el orden figuran entre las psicogénicas."
    ],
    inc: [
      "Sobre el TAT|Se responde marcando el grado de acuerdo con frases|Se inventan historias ante láminas con escenas ambiguas|Sus versiones actuales se llaman PSE|En el TAT la persona inventa historias ante láminas ambiguas, no contesta a un cuestionario."
    ],
    seq: [],
    cls: [
      "Concepto de Murray|Necesidad: viscerogénica; psicogénica; en parte inconsciente|Presión: alfa u objetiva; beta o percibida; facilita u obstaculiza"
    ] },
  { t: "Logro, poder y afiliación",
    tip: "McClelland estudió el logro, el poder y la afiliación como motivos sociales aprendidos y los midió con el TAT. Atkinson (1957) formalizó el logro como T igual a Ms × Ps × Is, con Is igual a 1 − Ps, así que la tendencia es máxima con Ps de 0,5. Quien tiene alto motivo de logro prefiere la dificultad intermedia, y quien tiene más miedo al fracaso, los extremos. El poder busca causar impacto, y la afiliación, relaciones positivas.",
    v: [
      "Motivo de logro=Interés recurrente por hacer las cosas mejor y alcanzar un estándar de excelencia",
      "Ms=En Atkinson, motivo de logro como disposición estable de la persona",
      "Incentivo del éxito (Is)=Valor del éxito, igual a 1 − Ps: mayor cuanto más difícil es la tarea",
      "Miedo al fracaso=Tendencia a evitar las tareas de logro, con preferencia por los extremos",
      "Motivo de poder=Interés por causar impacto en los demás: influir, persuadir o controlar",
      "Síndrome del motivo de liderazgo=Poder alto, afiliación baja e inhibición de la actividad alta",
      "Motivo de intimidad=Preferencia por relaciones cálidas, cercanas y comunicativas (McAdams)",
      "The Achieving Society=Obra de McClelland (1961) que ligó el logro social al desarrollo económico"
    ],
    g: [
      "Según Atkinson, el producto Ps × Is es máximo cuando Ps vale ___.|0,5|0,9|0,1",
      "Con Ps de 0,9, el producto Ps × Is vale solo ___.|0,09|0,25|0,81",
      "Winter (___) estudió con detalle el motivo de poder.|1973|1957|1961",
      "En The Achieving Society, McClelland relacionó la motivación de logro de una sociedad con su desarrollo ___.|económico|cultural|político",
      "La afiliación se ha asociado más a evitar el rechazo, y la ___, al disfrute del vínculo en sí.|intimidad|dominancia|aprobación"
    ],
    tf: [
      "En el modelo de Atkinson, el incentivo del éxito crece cuando aumenta la probabilidad de éxito.|F|Es la trampa típica: Is es 1 − Ps, así que el incentivo es mayor cuanto más difícil es la tarea.",
      "Quien tiene más miedo al fracaso que motivo de logro prefiere tareas muy fáciles o muy difíciles.|V",
      "El síndrome del motivo de liderazgo combina poder alto, afiliación alta e inhibición baja.|F|Combina poder alto, afiliación baja e inhibición alta: deseo de influir, poca necesidad de agradar y buen autocontrol.",
      "Quien tiene alto motivo de logro asume la responsabilidad de sus resultados y busca información sobre cómo lo ha hecho.|V"
    ],
    q: [
      "Un estudiante elige siempre la optativa más sencilla o la más temida, nunca la de resultado incierto. Según Atkinson, ¿qué predomina en él?|El miedo al fracaso|El motivo de logro|El motivo de poder|Quien tiene más miedo al fracaso prefiere los extremos: en lo fácil el éxito está asegurado, y fracasar en lo difícil no dice nada malo de uno.",
      "En el modelo de Atkinson, si Ps vale 0,2, ¿cuánto vale Is?|0,8|0,2|0,16|Is es 1 − Ps, así que vale 0,8. El 0,16 es el producto Ps × Is.",
      "¿Qué interés define el motivo de poder?|Causar impacto en los demás|Mantener relaciones positivas|Superar un estándar de excelencia|El poder busca influir, persuadir, controlar o destacar. Las relaciones positivas son la afiliación, y el estándar, el logro.",
      "Una directiva tiene un motivo de poder alto, pero un sentido de responsabilidad bajo. ¿Hacia dónde tenderá a canalizarlo?|Hacia conductas impulsivas o de explotación|Hacia el liderazgo y la negociación|Hacia la búsqueda de aprobación ajena|Con responsabilidad alta, el poder se canaliza hacia el liderazgo y la negociación. Con responsabilidad baja, hacia la impulsividad o la explotación."
    ],
    inc: [
      "Sobre los motivos sociales de McClelland|Quien tiene alto logro prefiere tareas muy fáciles|La afiliación busca aprobación y evita el conflicto|El poder alto lleva a buscar autoridad y prestigio|Quien tiene alto motivo de logro prefiere tareas desafiantes pero posibles, de dificultad intermedia."
    ],
    seq: [],
    cls: [
      "Motivo|Logro: dificultad intermedia; estándar de excelencia; modelo de Atkinson|Poder: causar impacto; Winter (1973); autoridad y prestigio|Afiliación: relaciones positivas; búsqueda de aprobación; evitar el conflicto"
    ] },
  { t: "Motivos implícitos y explícitos",
    tip: "Las puntuaciones del TAT y de los cuestionarios sobre el mismo motivo apenas correlacionan, en torno a ,11 (Köllner y Schultheiss, 2014). McClelland, Koestner y Weinberger (1989) propusieron que miden sistemas distintos y reales: los motivos implícitos, no conscientes, predicen la conducta espontánea y sostenida, y los explícitos, parte del autoconcepto, las elecciones deliberadas. La falta de congruencia entre ambos parece asociarse con menos bienestar.",
    v: [
      "Motivo implícito=Preferencia afectiva no consciente, medida con historias, que predice conducta espontánea",
      "Motivo explícito=Motivo autoatribuido, medido con autoinforme y parte del autoconcepto",
      "Conducta operante=Conducta espontánea y sostenida a largo plazo",
      "Conducta respondiente=Respuesta deliberada en situaciones estructuradas",
      "Spangler (1992)=Metaanálisis en que TAT y cuestionarios predecían el logro con r de ,19 y ,15",
      "Köllner y Schultheiss (2014)=Estimaron en ,11 la correlación media entre los dos sistemas de motivos",
      "Congruencia motivacional=Encaje entre lo implícito y lo explícito, asociado al bienestar",
      "Incentivos de la actividad=Placer de dominar una tarea, emoción de influir o calidez del contacto"
    ],
    g: [
      "La correlación media entre motivos implícitos y explícitos ronda ___.|,11|,30|,50",
      "Los motivos implícitos responden a incentivos propios de la ___.|actividad|sociedad|norma",
      "Los motivos explícitos responden a incentivos ___, ligados a normas y valores.|sociales|afectivos|fisiológicos",
      "En Spangler (1992), el TAT predecía conductas de logro con una correlación de en torno a ___.|,19|,15|,11",
      "La distinción recupera la idea psicoanalítica de que hay procesos motivacionales fuera de la ___.|conciencia|cultura|conducta"
    ],
    tf: [
      "El TAT y los cuestionarios miden el mismo motivo con métodos distintos.|F|Es la trampa típica: miden sistemas distintos, que correlacionan en torno a ,11 y predicen criterios diferentes.",
      "Los motivos implícitos se aprenden pronto y son preferencias afectivas no conscientes.|V",
      "Los motivos implícitos equivalen al inconsciente dinámico freudiano.|F|Son uno de los procesos no conscientes con apoyo empírico actual, no el inconsciente dinámico freudiano.",
      "En Spangler (1992), cada medida funcionaba mejor con el tipo de criterio que la teoría le asignaba.|V"
    ],
    q: [
      "Dos compañeras puntúan alto en un cuestionario de logro y se apuntan a un curso cuando se lo ofrecen, pero solo una mejora por iniciativa propia un procedimiento. ¿Qué la distingue?|Un motivo de logro implícito alto|Un motivo de logro explícito alto|Un motivo de afiliación más bajo|El explícito orienta las decisiones conscientes, como apuntarse al curso. El implícito, la energía espontánea que se mantiene.",
      "¿Qué predicen mejor los motivos explícitos?|Las elecciones deliberadas|La conducta espontánea sostenida|La energía a largo plazo|Predicen elecciones deliberadas y respuestas en situaciones estructuradas. La conducta espontánea corresponde a los implícitos.",
      "Un directivo lidera su equipo «porque toca», sin un motivo de poder implícito que lo sostenga. ¿Qué cabe esperar según la investigación?|Menos bienestar|Más rendimiento|Más motivación|Perseguir metas que encajan con lo declarado pero no con los motivos implícitos parece asociarse con menos bienestar.",
      "¿Con qué instrumentos se miden los motivos implícitos?|TAT y PSE|Autoinformes|Escalas de logro|Se miden con historias ante imágenes, el TAT o el PSE. Los autoinformes miden los motivos explícitos."
    ],
    inc: [
      "Sobre los motivos implícitos y explícitos|Los explícitos predicen la conducta espontánea a largo plazo|Los implícitos se miden con historias ante imágenes|Los explícitos forman parte del autoconcepto|La conducta espontánea a largo plazo la predicen los implícitos. Los explícitos predicen las elecciones deliberadas."
    ],
    seq: [],
    cls: [
      "Tipo de motivo|Implícito: TAT y PSE; no consciente; conducta operante|Explícito: autoinforme; autoconcepto; conducta respondiente"
    ] }
] },
{ n: 16, t: "Metas y autorregulación", cap: 6, pir: "media", mods: [
  { t: "Las metas como unidad de análisis",
    tip: "Una meta es la imagen de un estado futuro deseado con la que la persona se compromete, y tiene componentes cognitivo, afectivo y conductual. Las metas se organizan de forma jerárquica y son muy idiográficas. Little (1983) estudió los proyectos personales, Emmons (1989) los afanes, Cantor (1990) las tareas vitales y Klinger las preocupaciones actuales. Según Locke y Latham (1990), las metas específicas y difíciles mejoran el rendimiento si hay compromiso y retroalimentación.",
    v: [
      "Meta=Representación de un estado futuro deseado con el que la persona se compromete",
      "Proyecto personal=Secuencia de acción que la persona organiza, lleva a cabo y termina (Little)",
      "Afán personal=Lo que alguien intenta lograr de forma característica en su día a día (Emmons)",
      "Tarea vital=Reto propio de cada etapa o transición de la vida (Cantor)",
      "Preocupación actual=Meta pendiente que ocupa la mente hasta resolverse o abandonarse (Klinger)",
      "Componente afectivo=Lo que se siente al acercarse a la meta o al alejarse de ella",
      "Componente cognitivo=Imagen del estado deseado y planes para llegar a él",
      "Meta de evitación=Formulada como algo que no debe ocurrir, como «no suspender»"
    ],
    g: [
      "Si a una meta le falta el plan, se queda en un deseo o una ___.|fantasía|opinión|obligación",
      "Las metas son muy ___: dos personas con el mismo rasgo pueden perseguir metas distintas.|idiográficas|nomotéticas|jerárquicas",
      "Cantor propuso las tareas vitales en ___.|1990|1983|1989",
      "Según Locke y Latham, las metas que mejor funcionan son específicas y ___.|difíciles|fáciles|flexibles",
      "Las metas forman parte de las unidades cognitivo-afectivas del sistema ___.|CAPS|TAT|PSE"
    ],
    tf: [
      "Un afán personal es algo que se hace y se termina, y un proyecto es una tendencia estable.|F|Es al revés: el proyecto se hace y se termina, y el afán es una tendencia estable que se expresa en muchos proyectos.",
      "Si falta la carga afectiva, una meta se queda en una opinión sobre lo que estaría bien hacer.|V",
      "Según Locke y Latham, «haz lo que puedas» produce mejor rendimiento que una meta específica y difícil.|F|Las metas específicas y difíciles superan a las vagas o fáciles, siempre que haya compromiso y retroalimentación.",
      "Las preocupaciones actuales recuerdan que muchas metas no se eligen, sino que las imponen los acontecimientos.|V"
    ],
    q: [
      "Elena dice «intento que los demás se sientan cómodos», y eso se nota en muchas actividades distintas. ¿Qué unidad describe mejor esta meta?|Un afán personal|Un proyecto personal|Una tarea vital|Es lo que intenta lograr de forma característica en su día a día (Emmons). Un proyecto se hace y se termina (Little).",
      "«No dejo de pensar en la entrevista del lunes» ejemplifica…|una preocupación actual|un proyecto personal|una tarea vital|Klinger, Barta y Maxeiner (1981) la describen como una meta pendiente que ocupa la mente hasta resolverse o abandonarse.",
      "¿Qué autor propuso los proyectos personales?|Little|Emmons|Cantor|Little (1983) propuso los proyectos, Emmons (1989), los afanes, y Cantor (1990), las tareas vitales.",
      "¿Qué condiciones exige la teoría de Locke y Latham para que las metas difíciles mejoren el rendimiento?|Compromiso y retroalimentación|Libertad total y sin plazos|Recompensas tangibles esperadas|Las metas específicas y difíciles funcionan si hay compromiso con la meta y retroalimentación sobre el progreso."
    ],
    inc: [
      "Sobre las metas|La evitación se asocia con menos malestar|Se organizan de forma jerárquica|Tienen componentes cognitivo, afectivo y conductual|Las metas de evitación, como «no suspender», se asocian con más malestar que las de aproximación."
    ],
    seq: [
      "Jerarquía de metas, de lo abstracto a lo concreto|Ser buena psicóloga>Terminar el grado>Hacer hoy los ejercicios del tema 4"
    ],
    cls: [
      "Unidad de análisis|Little (1983): proyectos personales; reformar la cocina este verano|Emmons (1989): afanes personales; que los demás se sientan cómodos|Cantor (1990): tareas vitales; independizarse tras la universidad"
    ] },
  { t: "Regular la acción: control, planes y focos",
    tip: "Carver y Scheier (1998) describen la autorregulación como un bucle de retroalimentación negativa: valor de referencia, comparador y acción que reduce la discrepancia. El afecto depende del ritmo de progreso, no de la distancia a la meta. Gollwitzer (1999) distinguió la intención de meta de la de implementación, del tipo «si X, entonces Y», con un efecto de d 0,65 sobre el logro. Higgins (1997) separó el foco de promoción del de prevención, que no equivale a una meta de evitación.",
    v: [
      "Autorregulación=Procesos para dirigir la conducta hacia las metas y corregirla si se desvía",
      "Bucle de retroalimentación negativa=Comparar el estado actual con la meta y actuar para reducir la diferencia",
      "Valor de referencia=La meta con la que el comparador contrasta el estado actual",
      "Ritmo de progreso=Según Carver y Scheier, determina el afecto más que la distancia a la meta",
      "Intención de meta=Formulación del tipo «quiero hacer X»",
      "Intención de implementación=Plan «si ocurre X, entonces haré Y» que liga la acción a una señal",
      "Foco de promoción=Orientación a ideales y avances, sensible a las ganancias",
      "Foco de prevención=Orientación a deberes y seguridad, sensible a la presencia o ausencia de pérdidas"
    ],
    g: [
      "Carver y Scheier tomaron de la ___ la idea del bucle de retroalimentación.|cibernética|etología|psicofísica",
      "El modelo de control funciona como un ___.|termostato|semáforo|péndulo",
      "El metaanálisis de Gollwitzer y Sheeran (2006) reunió ___ pruebas independientes.|94|128|207",
      "Ante el fracaso, el foco de prevención produce sobre todo ___.|inquietud|desánimo|tristeza",
      "La estrategia preferida del foco de promoción es el ___.|entusiasmo|cuidado|control"
    ],
    tf: [
      "Según Carver y Scheier, el afecto positivo depende sobre todo de lo cerca que se esté de la meta.|F|Depende del ritmo de progreso: avanzar más deprisa de lo esperado da afecto positivo aunque la meta esté lejos.",
      "Las intenciones de implementación delegan el inicio de la acción en una señal situacional.|V",
      "El foco de prevención de Higgins equivale a las metas de evitación de Elliot.|F|Es una trampa frecuente: la prevención puede perseguirse acercándose a un estado seguro, como revisar dos veces un contrato.",
      "Gollwitzer y Sheeran hallaron un efecto medio-grande de las intenciones de implementación sobre el logro de metas.|V"
    ],
    q: [
      "A una opositora le quedan dos temas, pero avanza mucho más despacio de lo previsto y está angustiada. ¿Qué explica su malestar según Carver y Scheier?|El ritmo de progreso|La distancia a la meta|El foco de promoción|Avanzar más despacio de lo esperado produce afecto negativo aunque la meta esté cerca.",
      "¿Cuál de estas frases es una intención de implementación?|«Si son las cinco, me siento a estudiar»|«Quiero estudiar más este cuatrimestre»|«Intento aprender algo nuevo cada día»|Liga la acción a una señal con la forma «si… entonces». «Quiero estudiar más» es una intención de meta.",
      "Una persona revisa dos veces un contrato antes de firmarlo para no cometer errores. ¿Qué orientación muestra?|Foco de prevención|Foco de promoción|Meta de evitación|Se orienta a la seguridad y a evitar errores, pero acercándose a un estado seguro: no es una meta de evitación.",
      "¿A qué es sensible el foco de promoción?|A la presencia o ausencia de ganancias|A la presencia o ausencia de pérdidas|Al ritmo de progreso hacia la meta|Se centra en ideales y avances. La sensibilidad a las pérdidas es propia del foco de prevención."
    ],
    inc: [
      "Sobre el modelo de control de Carver y Scheier|El afecto depende de la distancia a la meta|Un comparador contrasta el estado y la meta|Las metas se encadenan en jerarquías de bucles|El afecto depende sobre todo del ritmo de progreso respecto al esperado, no de la distancia."
    ],
    seq: [
      "Bucle de retroalimentación negativa|Valor de referencia>Comparación con el estado actual>Acción para reducir la discrepancia>Cambio del estado actual"
    ],
    cls: [
      "Foco regulatorio|Promoción: ideales; ganancias; entusiasmo; desánimo|Prevención: deberes; pérdidas; vigilancia; ansiedad"
    ] },
  { t: "La teoría de la autodeterminación",
    tip: "La teoría de la autodeterminación de Deci y Ryan pregunta de qué tipo es la motivación y parte de tres necesidades básicas: autonomía, competencia y relación. La motivación extrínseca forma un continuo de regulación externa, introyectada, identificada e integrada, entre la desmotivación y la motivación intrínseca. La identificada es extrínseca pero autónoma. Las recompensas tangibles esperadas reducen la motivación intrínseca y el elogio informativo la aumenta (Deci, Koestner y Ryan, 1999).",
    v: [
      "Autonomía=Sentir que la propia conducta nace de uno mismo y no de presiones ajenas",
      "Competencia=Sentirse eficaz al interactuar con el entorno",
      "Relación=Sentirse conectado con otras personas y aceptado por ellas",
      "Regulación introyectada=Actuar por culpa, orgullo o presión interna",
      "Regulación identificada=Extrínseca pero autónoma: se actúa porque se valora el resultado como propio",
      "Regulación integrada=La conducta encaja con el resto de los valores de la persona",
      "Internalización=Paso de las formas externas de regulación a otras más autónomas",
      "Sobrejustificación=Descenso de la motivación intrínseca tras recibir recompensas esperadas"
    ],
    g: [
      "Lepper, Greene y Nisbett estudiaron a preescolares a los que les gustaba dibujar con ___.|rotuladores|ceras|acuarelas",
      "Deci observó el efecto de sobrejustificación en adultos en ___.|1971|1973|1985",
      "El elogio informativo aumenta la motivación intrínseca porque refuerza la sensación de ___.|competencia|autonomía|relación",
      "El metaanálisis de Deci, Koestner y Ryan (1999) reunió ___ estudios.|128|92|94",
      "La teoría asocia con más bienestar las metas ___, como el crecimiento personal.|intrínsecas|extrínsecas|de ejecución"
    ],
    tf: [
      "Según la teoría de la autodeterminación, toda motivación extrínseca es controlada.|F|La regulación identificada es extrínseca, porque se actúa por el resultado, pero autónoma.",
      "En Lepper, Greene y Nisbett, los niños con diploma esperado dibujaron después menos que los que lo recibieron por sorpresa.|V",
      "Según Deci, Koestner y Ryan (1999), el elogio informativo reduce la motivación intrínseca igual que las recompensas tangibles.|F|El elogio informativo la aumenta, porque refuerza la competencia. Son las recompensas tangibles esperadas las que la reducen.",
      "Cameron y Pierce (1994) defendieron que el efecto negativo de las recompensas es limitado.|V"
    ],
    q: [
      "Iván va al gimnasio porque, si no va, se siente fatal consigo mismo. ¿Qué tipo de regulación muestra?|Introyectada|Identificada|Externa|Actúa por culpa o presión interna. La identificada sería ir porque valora cuidar su salud.",
      "Una estudiante repasa porque valora lo que aprende, aunque la tarea no le resulte placentera. ¿Qué regulación es?|Identificada|Intrínseca|Introyectada|Es extrínseca, porque actúa por el resultado, pero autónoma, porque lo valora como propio.",
      "¿Qué tamaño tuvo el efecto de las recompensas tangibles sobre la motivación intrínseca medida por libre elección?|d de −0,34|d de 0,34|d de −0,05|En los 92 estudios con recompensas tangibles, d fue de −0,34. El elogio informativo, en cambio, la aumentaba.",
      "Un entrenador explica el porqué de cada ejercicio, deja elegir y trata con calidez. ¿Qué favorece según la teoría?|La internalización|La sobrejustificación|La desmotivación|Los ambientes que apoyan autonomía, competencia y relación favorecen el paso a formas de regulación más autónomas."
    ],
    inc: [
      "Sobre la teoría de la autodeterminación|La regulación identificada es una forma de motivación intrínseca|Parte de tres necesidades psicológicas básicas|La internalización lleva hacia formas más autónomas|La regulación identificada es extrínseca, porque se actúa por el resultado, aunque sea autónoma."
    ],
    seq: [
      "Continuo de la autodeterminación, de menos a más autonomía|Desmotivación>Regulación externa>Regulación introyectada>Regulación identificada>Regulación integrada>Motivación intrínseca"
    ],
    cls: [
      "Efecto sobre la motivación intrínseca|La reduce: recompensas tangibles esperadas; diploma esperado por dibujar|La aumenta: elogio informativo; ambientes que apoyan las tres necesidades"
    ] },
  { t: "Mentalidades, metas de logro y fuerza de voluntad",
    tip: "Dweck y Leggett (1988) ligaron la teoría de entidad a metas de ejecución y patrón de indefensión, y la incremental a metas de aprendizaje y patrón de dominio. Elliot y McGregor (2001) cruzaron criterio y valencia en un modelo 2 × 2 en el que la meta de rendimiento-evitación es la más perjudicial. La evidencia sobre la mentalidad es débil: d 0,05 en Macnamara y Burgoyne (2023). El agotamiento del ego no se replicó en estudios multilaboratorio.",
    v: [
      "Teoría de entidad=Creencia de que la capacidad es fija, que orienta a metas de ejecución",
      "Teoría incremental=Creencia de que la inteligencia puede desarrollarse",
      "Patrón de indefensión=Interpretar el fracaso como falta de capacidad y abandonar",
      "Patrón de dominio=Ver el fracaso como señal de cambiar de estrategia y persistir",
      "Modelo 2 × 2=Cruza el criterio, dominio o rendimiento, con la valencia, aproximación o evitación",
      "Rendimiento-evitación=Meta de que no se note que uno es de los peores, la más perjudicial",
      "Agotamiento del ego=Idea de que el autocontrol se fatiga como un músculo tras usarlo",
      "Hagger et al. (2016)=Réplica en 23 laboratorios con 2.141 participantes y d de 0,04"
    ],
    g: [
      "Las réplicas de Hagger et al. y Vohs et al. eran multilaboratorio y ___.|prerregistradas|retrospectivas|transversales",
      "Sisk et al. (2018) estimaron la relación entre mentalidad y rendimiento en torno a r de ___.|,10|,30|,50",
      "Yeager et al. (2019) hallaron un efecto pequeño, concentrado en estudiantes de ___ rendimiento.|bajo|alto|medio",
      "Una versión muy difundida atribuyó el agotamiento del ego al consumo de ___.|glucosa|oxígeno|dopamina",
      "Vohs et al. (2021) reunieron ___ laboratorios.|36|23|13"
    ],
    tf: [
      "Quien tiene una teoría incremental tiende a mostrar un patrón de indefensión ante el fracaso.|F|El patrón de indefensión se asocia a la teoría de entidad. La incremental se asocia al patrón de dominio.",
      "En Macnamara y Burgoyne (2023), el efecto de las intervenciones de mentalidad dejaba de ser significativo al corregir el sesgo de publicación.|V",
      "Las réplicas multilaboratorio confirmaron un agotamiento del ego de tamaño medio.|F|Obtuvieron d de 0,04 y d de 0,06, sin significación. Es un caso emblemático de la crisis de replicación.",
      "Tipton et al. (2023) y Burnette et al. (2023) defienden efectos de la mentalidad en subgrupos de riesgo.|V"
    ],
    q: [
      "Tras suspender, Nuria piensa «no valgo para esto» y deja la asignatura. Según Dweck y Leggett, ¿qué creencia es más probable?|Una teoría de entidad|Una teoría incremental|Una meta de aprendizaje|Interpretar el fracaso como falta de capacidad y abandonar es el patrón de indefensión, propio de la teoría de entidad.",
      "¿Qué meta del modelo 2 × 2 de Elliot y McGregor es la más perjudicial?|Rendimiento-evitación|Dominio-aproximación|Rendimiento-aproximación|La de rendimiento-evitación, como que no se note que uno es de los peores, es la más perjudicial para aprender y para el bienestar.",
      "Un centro quiere mejorar las notas con un taller breve de mentalidad de crecimiento. ¿Qué indica la evidencia?|Un efecto medio mínimo|Una mejora de tamaño grande|Un efecto solo en buenos alumnos|El metaanálisis de 2023 obtuvo d de 0,05. Yeager et al. hallaron un efecto pequeño, concentrado en alumnos de bajo rendimiento.",
      "¿Qué conclusión sobre el autocontrol se desprende de las réplicas del agotamiento del ego?|El autocontrol importa, pero no se gasta así|El autocontrol carece de valor predictivo|El autocontrol depende de la glucosa|Sus diferencias estables forman parte de la responsabilidad. Lo que no se sostiene es que se gaste como un depósito."
    ],
    inc: [
      "Sobre la mentalidad y las metas de logro|Las creencias sobre la capacidad son iguales en todo dominio|La teoría de entidad orienta a metas de ejecución|La teoría incremental orienta a metas de aprendizaje|Las creencias sobre la capacidad pueden variar de un dominio a otro."
    ],
    seq: [],
    cls: [
      "Teoría implícita|Entidad: capacidad fija; metas de ejecución; patrón de indefensión|Incremental: capacidad modificable; metas de aprendizaje; patrón de dominio"
    ] }
] }
);

SP.register(window.COURSE);
})({});
