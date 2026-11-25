(function(window){
// SAIMAP Psicología · Psicología del Desarrollo. Edad Adulta y Vejez
// Contenido alineado con el temario SAIMAP «Psicología del Desarrollo. Edad Adulta y Vejez» (v1.0, noviembre de 2026).
window.COURSE = {
  id: "desarrollo-adulto",
  title: "Psicología del Desarrollo. Edad Adulta y Vejez",
  short: "Desarrollo: Adultez",
  area: "Psicología del desarrollo",
  rutas: { grado: { curso: 2 }, pir: { bloque: "Desarrollo y social" } },
  temario: "Psicologia-del-Desarrollo-Edad-Adulta-y-Vejez_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Qué significa desarrollarse en la adultez: bases, edades y métodos", from: 1, to: 2 },
    { n: 2, t: "Mapas de la vida adulta: de Erikson al pensamiento posformal", from: 3, to: 4 },
    { n: 3, t: "Cuando la vida cambia: transiciones, crisis y madurez", from: 5, to: 6 },
    { n: 4, t: "De los veinte a los sesenta: adultez emergente, cuerpo y salud", from: 7, to: 8 },
    { n: 5, t: "La mente adulta: inteligencia, cerebro y prevención", from: 9, to: 10 },
    { n: 6, t: "Quiénes somos a mitad de la vida: bienestar, personalidad y vínculos", from: 11, to: 12 },
    { n: 7, t: "Por qué y cómo envejecemos: biología, enfermedad y buen envejecer", from: 13, to: 14 },
    { n: 8, t: "Vivir la vejez hoy: transiciones, cuidados y retos de futuro", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Desarrollo: Adultez · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "La perspectiva del ciclo vital", cap: 1, pir: "alta", mods: [
  { t: "Desarrollarse siendo adulto: concepto y autores",
    tip: "La visión clásica en forma de montaña, con subida, meseta y bajada, ya no se acepta. Hoy se entiende por desarrollo adulto todo lo que sigue transformándose tras la adolescencia, en el cuerpo, la mente y la vida social, hasta la muerte, con crecimiento, mantenimiento o declive. La variabilidad entre personas aumenta con la edad, y por eso la edad funcional informa más que la cronológica (Baltes, 1987).",
    v: [
      "Desarrollo adulto=Todo lo que sigue transformándose tras la adolescencia, en cuerpo, mente y vida social",
      "Diferencias interindividuales=Variación entre personas de la misma edad, que aumenta con los años",
      "Diferencias intraindividuales=Distintos ritmos de cambio de las capacidades dentro de una misma persona",
      "Edad funcional=Lo que una persona puede hacer, más informativo que los años cumplidos",
      "Edad cronológica=Años que una persona ha cumplido",
      "Levinson (1978)=Vida adulta como estructuras que alternan estabilidad y transición",
      "Neugarten (1979)=Autora que destacó el tiempo social, a qué edad «toca» cada suceso",
      "Kegan (1982)=Autor para quien lo que era sujeto pasa a ser objeto"
    ],
    g: [
      "Según la visión clásica en forma de montaña, la adultez sería una etapa de ___.|mantenimiento|crecimiento|transición",
      "Que alguien de 60 años tarde más en aprender una aplicación, pero tenga más vocabulario que a los 30, ilustra las diferencias ___.|intraindividuales|interindividuales|generacionales",
      "Erikson extendió su teoría del desarrollo ___ hasta la vejez.|psicosocial|psicosexual|cognitivo",
      "Según Neugarten, no es lo mismo ser abuela a los 45 que a los 70 porque cambia el tiempo ___.|social|biológico|histórico",
      "Baltes reunió las intuiciones de los pioneros en la perspectiva del ___.|ciclo vital|reloj social|curso histórico"
    ],
    tf: [
      "La variabilidad entre personas de la misma edad disminuye con los años porque los cambios biológicos igualan a todos.|F|Aumenta con la edad, porque se acumulan decisiones, experiencias y circunstancias distintas.",
      "Para la psicología del desarrollo actual, los cambios adultos pueden suponer crecimiento, mantenimiento o declive.|V",
      "El estudio del tiempo social, a qué edad «toca» cada suceso, es la aportación central de Levinson.|F|Es de Neugarten (1979). Levinson describió estructuras de vida que alternan estabilidad y transición.",
      "Las aportaciones de los autores clásicos comparten la tesis de que el adulto no es un producto terminado.|V"
    ],
    q: [
      "Una enfermera de 50 años pasa del hospital a la docencia. Pierde rapidez en tareas técnicas, pero gana capacidad para explicar y anticipar problemas. ¿Qué ilustra?|Que su desarrollo ha cambiado de forma|Que su desarrollo se ha detenido del todo|Que solo mantiene lo que ya había logrado|El adulto sigue adaptándose a exigencias nuevas, y cada adaptación modifica lo que es.",
      "Dos personas de 70 años: una corre medias maratones y otra necesita ayuda para vestirse. ¿Qué concepto lo describe?|Diferencias interindividuales|Diferencias intraindividuales|Multidimensionalidad del desarrollo|Son diferencias entre personas de la misma edad, y esa variabilidad aumenta con los años.",
      "¿Por qué la edad funcional informa más que la cronológica?|Porque las personas difieren cada vez más|Porque refleja la cohorte de nacimiento|Porque mide los roles sociales ocupados|Con los años se acumulan experiencias distintas, y la misma edad cronológica oculta capacidades muy diferentes.",
      "¿Qué autor describió la vida adulta como una sucesión de estructuras que se construyen, se revisan y se sustituyen?|Levinson|Neugarten|Kegan|Neugarten se centró en el tiempo social, y Kegan, en cómo cambia la manera de construir el significado."
    ],
    inc: [
      "Sobre el concepto de desarrollo adulto|La adultez es solo mantenimiento y la vejez, pérdida|El desarrollo adulto continúa hasta la muerte|Unos cambios suponen crecimiento y otros, declive|Es la visión clásica en forma de montaña, que la psicología del desarrollo actual no acepta."
    ],
    seq: [],
    cls: [] },
  { t: "Los principios de Baltes",
    tip: "Baltes (1987) resumió el ciclo vital en proposiciones: desarrollo de por vida, multidimensionalidad, multidireccionalidad, ganancias y pérdidas, plasticidad, contextualismo, historicidad y enfoque multidisciplinar. Todo cambio combina ganancias y pérdidas, y con la edad cambia su proporción. La plasticidad existe siempre, pero es limitada y decreciente. Por la arquitectura incompleta (Baltes, 1997), al envejecer crece la necesidad de cultura y baja su eficacia.",
    v: [
      "Multidimensionalidad=El desarrollo afecta a la vez a lo biológico, lo cognitivo, lo emocional y lo social",
      "Multidireccionalidad=Dentro de un mismo ámbito, unas capacidades crecen y otras disminuyen",
      "Plasticidad=Capacidad de cambio con la experiencia, limitada y decreciente con la edad",
      "Contextualismo=Desarrollo como interacción entre la persona y unos contextos que también cambian",
      "Historicidad=El momento histórico en que se vive moldea las trayectorias",
      "Desarrollo de por vida=Ninguna edad tiene la primacía y cada etapa condiciona las siguientes",
      "Arquitectura incompleta=Con la edad baja la plasticidad biológica y crece la necesidad de cultura",
      "Inteligencia cristalizada=Gc, basada en el conocimiento, que se mantiene o mejora con la edad"
    ],
    g: [
      "Con la edad no desaparecen las ganancias: lo que cambia es la ___ entre ganancias y pérdidas.|proporción|naturaleza|dirección",
      "Según Baltes (1997), con la edad aumenta la necesidad de cultura, pero su ___ disminuye.|eficacia|variedad|presencia",
      "La selección natural ha favorecido sobre todo las primeras etapas de la vida, ligadas a la ___.|reproducción|socialización|escolarización",
      "Que no envejezca igual quien creció en la posguerra que quien creció con internet ilustra el principio de ___.|historicidad|contextualismo|plasticidad",
      "Aprender a usar un audífono cuesta más a los 85 que a los 60 porque la cultura rinde ___ en la vejez avanzada.|menos|más|igual"
    ],
    tf: [
      "Para Baltes, la plasticidad es ilimitada si la persona se entrena lo suficiente.|F|Es una trampa típica: la plasticidad existe en todas las edades, pero es limitada y disminuye con la edad.",
      "Incluso en la vejez avanzada sigue habiendo ganancias, por ejemplo en la regulación emocional.|V",
      "La multidireccionalidad indica que el desarrollo afecta a muchos ámbitos a la vez.|F|Eso es la multidimensionalidad. La multidireccionalidad son direcciones distintas dentro de un mismo ámbito.",
      "La vejez avanzada es la etapa en la que más falta hace el apoyo cultural y en la que menos rinde.|V"
    ],
    q: [
      "Un hombre de 78 años deja de conducir. Pierde autonomía, pero gana tiempo para caminar y relacionarse con sus vecinos. ¿Qué principio ilustra?|Ganancias y pérdidas|Multidimensionalidad|Historicidad|Todo cambio evolutivo combina ganancias y pérdidas en cualquier edad. Lo que cambia con los años es su proporción.",
      "Que el vocabulario mejore con la edad mientras disminuye la rapidez para resolver problemas nuevos ilustra la…|multidireccionalidad|multidimensionalidad|plasticidad limitada|Dentro del ámbito cognitivo, la inteligencia cristalizada se mantiene o mejora y la fluida pierde.",
      "Según la arquitectura incompleta de Baltes (1997), al envejecer…|crece la necesidad de cultura y baja su eficacia|baja la necesidad de cultura y crece su eficacia|crecen a la vez la plasticidad y la cultura|Disminuyen los beneficios de la selección evolutiva y la plasticidad biológica, y la cultura que se necesita rinde menos.",
      "¿Qué justifica intervenir a cualquier edad y obliga, a la vez, a ajustar las expectativas?|La plasticidad y sus límites|La historicidad del desarrollo|El enfoque multidisciplinar|La plasticidad justifica intervenir siempre, y sus límites obligan a ajustar lo que cabe esperar. El modelo SOC gestiona ese equilibrio."
    ],
    inc: [
      "Sobre los principios de Baltes|La juventud es solo ganancia y la vejez, pérdida|Ninguna edad tiene la primacía en el desarrollo|Ninguna disciplina basta por sí sola para explicarlo|Todo cambio combina ganancias y pérdidas en cualquier edad. Lo que cambia con los años es su proporción."
    ],
    seq: [],
    cls: [
      "Principio de Baltes|Multidimensionalidad: muchos ámbitos a la vez; biológico, cognitivo y social|Multidireccionalidad: direcciones distintas en un ámbito; Gc que mejora y Gf que pierde"
    ] },
  { t: "Edad, historia y azar: tres fuentes de influencia",
    tip: "La perspectiva del ciclo vital distingue tres influencias. Las normativas por edad afectan a casi todos a una edad parecida y son previsibles. Las normativas por historia afectan a una cohorte entera por coincidir con un momento histórico. Las no normativas son sucesos individuales e imprevisibles. Lo que decide es a cuántas personas afecta el suceso, no si fue inesperado, y las tres interactúan.",
    v: [
      "Normativa por edad=Influencia que afecta a casi todos a una edad parecida y es previsible",
      "Normativa por historia=Influencia común a una cohorte entera por coincidir con una época concreta",
      "No normativa=Suceso individual, poco previsible, que no sigue un calendario de edad",
      "Cohorte=Grupo de personas nacidas en el mismo periodo que comparten experiencias históricas",
      "Influencia biológica por edad=Cambio madurativo común, como la pubertad o la menopausia",
      "Influencia social por edad=Hito ligado a la edad por ley o costumbre, como jubilarse",
      "Normativo=Común a una edad o a una época, no necesariamente deseable",
      "Variabilidad entre adultos=Diferencias que crecen en buena parte por la acumulación de sucesos personales"
    ],
    g: [
      "Las influencias normativas por historia alcanzan su máximo peso en la adolescencia y la ___.|juventud|vejez|infancia",
      "Las influencias no normativas ___ con la edad.|aumentan|disminuyen|se mantienen",
      "Las influencias normativas por edad pesan mucho en la infancia y vuelven a ganar peso en la ___.|vejez|juventud|adolescencia",
      "Jubilarse a una edad fijada por ley es una influencia normativa por edad de tipo ___.|social|biológico|histórico",
      "Quien terminó la carrera en 2009 encontró otro mercado laboral por una influencia normativa por ___.|historia|edad|ocupación"
    ],
    tf: [
      "La pandemia de COVID-19 es una influencia no normativa porque fue inesperada.|F|Es normativa por historia: afectó a toda una cohorte. Que un suceso sea inesperado no lo hace no normativo.",
      "Un accidente de tráfico es una influencia no normativa aunque sea frecuente en la población.|V",
      "Que una influencia sea «normativa» significa que el suceso es deseable para la persona.|F|Solo indica que el suceso es común a una edad o en una época, no que sea deseable.",
      "Las influencias no normativas explican buena parte de la creciente variabilidad entre adultos.|V"
    ],
    q: [
      "Javier, de 58 años, pierde su empleo en plena crisis económica. ¿Qué se puede decir de este suceso?|Es no normativo y su efecto depende de la edad y la época|Es normativo por historia porque coincide con la crisis|Es normativo por edad porque ocurre cerca de la jubilación|Perder el empleo es no normativo, pero sus efectos dependen de la edad y del momento histórico: las influencias interactúan.",
      "¿Qué pregunta permite distinguir una influencia normativa por historia de una no normativa?|A cuántas personas afecta|Si era previsible o no|Si es positiva o negativa|Una pandemia afecta a una cohorte entera aunque sea imprevisible. Un accidente afecta a una persona concreta.",
      "Ganar un premio de lotería es una influencia…|no normativa|normativa por historia|normativa por edad|Es un suceso individual e imprevisible. Las influencias no normativas pueden ser negativas o positivas.",
      "¿En qué etapas pesan más las influencias normativas por edad?|En la infancia y la vejez|En la adolescencia y la juventud|En la adultez media|En la infancia marca el ritmo la maduración biológica, y en la vejez, los cambios biológicos más notables."
    ],
    inc: [
      "Sobre las tres influencias|Las normativas por historia pesan más en la vejez|Las no normativas pueden ser positivas o negativas|Las normativas por edad son previsibles|Las normativas por historia alcanzan su máximo en la adolescencia y la juventud, cuando la época deja una huella duradera."
    ],
    seq: [],
    cls: [
      "Tipo de influencia|Normativa por edad: menopausia; jubilación; pubertad|Normativa por historia: crisis de 2008; COVID-19; dificultad actual para emanciparse|No normativa: accidente grave; premio de lotería; despido inesperado"
    ] },
  { t: "Cómo se investiga el cambio adulto: diseños",
    tip: "Edad, cohorte y momento de medida tienden a mezclarse: conocidas dos, la tercera queda fijada. El diseño transversal confunde edad y cohorte y solo describe diferencias. El longitudinal confunde edad y momento de medida y sufre efectos de práctica y desgaste. Schaie propuso los diseños secuenciales y los aplicó en el Estudio Longitudinal de Seattle, iniciado en 1956.",
    v: [
      "Momento de medida=Año en que se recoge el dato, con lo que ocurre entonces en la sociedad",
      "Diseño transversal=Personas de distintas edades evaluadas en un mismo momento",
      "Diseño longitudinal=Seguimiento de una misma cohorte con evaluaciones repetidas durante años",
      "Efectos de práctica=Mejor rendimiento por haberse familiarizado con las pruebas",
      "Desgaste=Abandono de parte de la muestra, más frecuente con peor salud o menos recursos",
      "Diseño secuencial=Combinación de transversal y longitudinal con varias cohortes (Schaie)",
      "Cohorte-secuencial=Variante de Schaie que combina cohorte y edad",
      "Estudio de Seattle=Investigación de Schaie iniciada en 1956, con evaluaciones cada 7 años"
    ],
    g: [
      "El diseño transversal describe ___ de edad, no cambios.|diferencias|trayectorias|efectos",
      "El diseño ___ combina edad y momento de medida.|tiempo-secuencial|cruzado-secuencial|cohorte-secuencial",
      "El Estudio Longitudinal de Seattle evalúa a sus participantes cada ___ años.|7|5|10",
      "Salthouse (2009) sostiene que los datos longitudinales retrasan el declive por los efectos de ___.|práctica|cohorte|desgaste",
      "Los diseños secuenciales los propuso ___.|Schaie|Baltes|Salthouse"
    ],
    tf: [
      "Los diseños secuenciales de Schaie permiten estimar dos de los efectos suponiendo nulo o conocido el tercero.|V",
      "El diseño longitudinal elimina los efectos de cohorte.|F|Solo estudia una cohorte, así que sus resultados pueden no generalizarse a otras.",
      "La inteligencia en su conjunto empieza a declinar a partir de los 20 años.|F|Solo la velocidad y la Gf bajan pronto. Buena parte del supuesto declive temprano es un efecto de cohorte transversal.",
      "Con datos longitudinales de Seattle, la mayoría de las capacidades primarias no muestran declive fiable antes de los 60 años aproximadamente.|V"
    ],
    q: [
      "Un equipo evalúa en 2010 a grupos de 30, 50 y 70 años y halla que los de 70 rinden peor. ¿Qué variables confunde este diseño?|Edad y cohorte|Edad y momento de medida|Cohorte y momento de medida|Es transversal: el peor rendimiento puede deberse a la edad o a otra escolaridad, alimentación o experiencias.",
      "Un estudio sigue 20 años a la misma cohorte y observa que quienes quedan al final tienen mejor salud que quienes abandonaron. ¿Qué problema ilustra?|El desgaste de la muestra|El efecto de práctica|El efecto de cohorte|Suelen abandonar quienes tienen peor salud o menos recursos, y la muestra restante es cada vez más seleccionada.",
      "¿Qué confunde el diseño longitudinal?|Edad y momento de medida|Edad y cohorte|Cohorte y momento de medida|Lo que cambia entre evaluaciones puede deberse a la edad o a lo ocurrido en la sociedad entretanto.",
      "¿Cómo explican los defensores del enfoque longitudinal que los datos transversales muestren un declive temprano?|Por efectos de cohorte|Por efectos de práctica|Por el desgaste muestral|Los efectos de cohorte inflan las diferencias transversales. Salthouse, en cambio, culpa a la práctica de retrasar el declive longitudinal."
    ],
    inc: [
      "Sobre los diseños de investigación|El diseño transversal mide cambios intraindividuales|El longitudinal sufre efectos de práctica|El secuencial tiene un coste y una duración elevados|El transversal solo describe diferencias de edad. Los cambios intraindividuales los mide el longitudinal."
    ],
    seq: [],
    cls: [
      "Diseño|Transversal: distintas edades en un momento; confunde edad y cohorte|Longitudinal: una cohorte en varios momentos; práctica y desgaste|Secuencial: varias cohortes en varios momentos; Schaie; Estudio de Seattle"
    ] }
] },
{ n: 2, t: "Edades de la vida y sus determinantes", cap: 1, pir: "media", mods: [
  { t: "Periodizar la adultez",
    tip: "Las etapas adultas tienen límites difusos y aproximados, porque dependen más de expectativas sociales, roles e historia personal que de hitos biológicos. Se distinguen la adultez emergente (Arnett, 2000), la temprana, la media (40-65) y la tardía o vejez, desde los 65, una frontera más administrativa que biológica. La edad puede ser cronológica, biológica, psicológica o social, y la funcional las integra.",
    v: [
      "Adultez emergente=Periodo de exploración de 18 a 25 años, ampliado después hasta los 29 (Arnett)",
      "Adultez temprana=Etapa de consolidación profesional, pareja estable y, a menudo, crianza",
      "Adultez media=Etapa de 40 a 65 años de balance vital y responsabilidad entre generaciones",
      "Periodo pivote=Descripción de la adultez media que hace Lachman (2001, 2004)",
      "Edad biológica=Estado del organismo comparado con el de otras personas de la misma edad",
      "Edad psicológica=Capacidades de adaptación como la memoria, la regulación emocional o el aprendizaje",
      "Edad social=Roles que se ocupan y expectativas que la sociedad asocia a ellos",
      "Frontera de los 65=Inicio de la vejez, más administrativo que biológico"
    ],
    g: [
      "Arnett propuso la adultez emergente en el año ___.|2000|1978|2010",
      "La crisis eriksoniana de la adultez temprana es la de intimidad frente a ___.|aislamiento|estancamiento|desesperación",
      "Si la adultez emergente llega hasta los 29, la adultez temprana empieza hacia los ___.|30|25|20",
      "Lachman describe la adultez media como un periodo ___ entre generaciones.|pivote|de transición|de exploración",
      "La edad ___ integra las dimensiones cronológica, biológica, psicológica y social.|funcional|subjetiva|relativa"
    ],
    tf: [
      "En la adultez, como en la infancia, hay hitos biológicos que marcan con precisión el paso de una etapa a otra.|F|No hay ningún hito biológico que marque, por ejemplo, el paso de la adultez temprana a la media.",
      "Una persona de 32 años que cambia a menudo de trabajo y comparte piso puede tener más rasgos de adulta emergente que otra de 26 con hipoteca e hijos.|V",
      "En la periodización habitual, la adultez media abarca aproximadamente de los 30 a los 50 años.|F|Abarca aproximadamente de los 40 a los 65 años; de los 30 a los 40 se sitúa la adultez temprana.",
      "Situar el inicio de la vejez en los 65 años es una frontera más administrativa que biológica.|V"
    ],
    q: [
      "Ana, de 45 años, se ocupa a la vez de sus hijos adolescentes y de su madre mayor, y hace balance de lo conseguido. ¿En qué etapa encaja mejor?|Adultez media|Adultez temprana|Adultez emergente|Balance vital y responsabilidad hacia otras generaciones son rasgos de la adultez media, de 40 a 65 años aproximadamente.",
      "¿Por qué las edades de las etapas adultas son siempre aproximadas?|Dependen de roles y expectativas sociales|Las marca la maduración biológica|Cambian solo con la historia personal|Dependen sobre todo de expectativas sociales, roles e historia personal, no de hitos biológicos como en la infancia.",
      "Una persona de 70 años mantiene un organismo comparable al de alguien mucho más joven. ¿Qué tipo de edad se describe?|Biológica|Psicológica|Social|La edad biológica compara el estado del organismo con el de otras personas de la misma edad.",
      "¿Qué rasgos caracterizan la adultez emergente?|Exploración e inestabilidad|Consolidación y crianza|Balance y responsabilidad|Se prueban estudios, trabajos, relaciones y lugares antes de asumir compromisos estables (Arnett, 2000)."
    ],
    inc: [
      "Sobre la periodización de la adultez|Las etapas adultas tienen límites fijos y precisos|La vejez se divide en subetapas por su duración|Las etapas se solapan en la vida real|Tratar las edades de las etapas como límites fijos es una trampa típica: son aproximadas."
    ],
    seq: [
      "Grandes etapas de la vida adulta|Adultez emergente>Adultez temprana>Adultez media>Adultez tardía o vejez"
    ],
    cls: [
      "Forma de medir la edad|Biológica: estado del organismo; ritmo de envejecimiento|Psicológica: memoria; regulación emocional; capacidad de aprender|Social: roles que se ocupan; expectativas sociales"
    ] },
  { t: "Las edades de la vejez y los centenarios",
    tip: "La vejez es tan larga que se subdivide. Neugarten distinguió viejos-jóvenes (≈ 65-75) y viejos-viejos (≈ 75-85), y Baltes propuso la cuarta edad (desde ≈ 85), con pérdidas más acusadas y menor plasticidad según el BASE. Importan más la salud y el funcionamiento que los años. Los centenarios interesan para saber qué combinación de genética, hábitos y entorno se asocia a vivir mucho.",
    v: [
      "Viejos-jóvenes=Personas de ≈ 65-75 años, en su mayoría con buena salud y autonomía",
      "Viejos-viejos=Personas de ≈ 75-85 años, con más problemas de salud y demanda de ayuda",
      "Cuarta edad=Vejez desde ≈ 85 años con pérdidas más acusadas y menor plasticidad",
      "BASE=Estudio de Berlín con 516 personas de 70 a 103 años (1990-1993)",
      "Centenarios=Población creciente de interés para estudiar la longevidad",
      "Estudio de Nueva Inglaterra=Investigación de referencia sobre quienes llegan a los 100, con sede en Boston",
      "Compresión de la dependencia=Objetivo de reducir el periodo final de la vida con discapacidad",
      "Años sin discapacidad=Unos 10,3 a partir de los 65, el 47,5 % de la esperanza de vida a esa edad"
    ],
    g: [
      "Según el INE, en 2024 la esperanza de vida en España a los 65 años era de ___ años más.|21,87|84,01|10,3",
      "El BASE evaluó a sus participantes en ___ sesiones.|14|12|10",
      "La cuarta edad es la etapa en la que la arquitectura ___ se hace más visible.|incompleta|epigenética|acumulada",
      "El Estudio de Centenarios de Nueva Inglaterra tiene su sede en ___.|Boston|Berlín|Seattle",
      "Algo más de la ___ de los años que quedan a partir de los 65 se vive con alguna discapacidad.|mitad|cuarta parte|décima parte"
    ],
    tf: [
      "La distinción entre viejos-jóvenes y viejos-viejos se debe a Baltes.|F|Es de Neugarten. Baltes propuso la cuarta edad. Intercambiar las autorías es una trampa típica.",
      "Una persona de 80 años puede encajar mejor entre los viejos-jóvenes que entre los viejos-viejos.|V",
      "Según el BASE, en la cuarta edad la plasticidad es mayor que en la etapa anterior.|F|Mostró pérdidas más acusadas, en lo físico y en lo cognitivo, y menor plasticidad.",
      "La esperanza de vida no informa por sí sola de la calidad de los años vividos.|V"
    ],
    q: [
      "Rosa tiene 81 años, viaja, conduce y vive sola sin ayuda. ¿Cómo encaja en la distinción de Neugarten?|Más cerca de los viejos-jóvenes|Entre los viejos-viejos por su edad|En la cuarta edad de Baltes|La distinción importa más por la salud y el funcionamiento que por los años cumplidos.",
      "¿Quién propuso hablar de una cuarta edad?|Baltes|Neugarten|Arnett|Neugarten distinguió viejos-jóvenes y viejos-viejos, y Arnett propuso la adultez emergente.",
      "¿Qué rango de edad abarcaba la muestra nuclear del BASE?|De 70 a 103 años|De 65 a 85 años|De 85 a 100 años|Eran 516 personas de entre 70 y 103 años, evaluadas en 14 sesiones entre 1990 y 1993.",
      "¿Por qué interesa estudiar a los centenarios?|Para saber qué se asocia a vivir mucho|Porque ya son la mayoría de los mayores|Para medir el gradiente social de salud|Permiten averiguar qué combinación de genética, hábitos y entorno se asocia a la longevidad y a retrasar la discapacidad."
    ],
    inc: [
      "Sobre las edades de la vejez|Las personas mayores forman un grupo homogéneo|La cuarta edad empieza hacia los 85 años|Los centenarios son una población creciente|Lo que sirve a quien tiene 68 años y viaja a menudo no sirve a quien tiene 92 y vive con fragilidad avanzada."
    ],
    seq: [
      "Subetapas de la vejez|Viejos-jóvenes>Viejos-viejos>Cuarta edad>Centenarios"
    ],
    cls: [
      "Autor del término|Neugarten: viejos-jóvenes; viejos-viejos|Baltes: cuarta edad; arquitectura incompleta|Arnett: adultez emergente"
    ] },
  { t: "Biología, psicología y entorno",
    tip: "El enfoque biopsicosocial explica las trayectorias adultas por factores biológicos, psicológicos, sociales, ambientales y económicos que interactúan, no se suman. El Estudio Dunedin muestra ritmos de envejecimiento distintos ya en la mediana edad. Berkman y Syme (1979) y Holt-Lunstad, Smith y Layton (2010) ligaron las relaciones débiles a más mortalidad, y la OMS (2002) destacó los entornos favorables.",
    v: [
      "Enfoque biopsicosocial=Factores biológicos, psicológicos y sociales que actúan a la vez y se modifican",
      "Estudio Dunedin=Sigue desde el nacimiento a una cohorte de Nueva Zelanda y mide el ritmo de envejecer",
      "Estudio de Alameda=Berkman y Syme ligaron menos vínculos a mayor mortalidad en nueve años",
      "Holt-Lunstad et al. (2010)=Metaanálisis de 148 estudios sobre relaciones sociales y mortalidad",
      "Entornos favorables=Condición del envejecimiento activo según la OMS (2002)",
      "SHARE=Encuesta europea de salud, envejecimiento y jubilación que incluye a España",
      "ELSA=Estudio longitudinal inglés sobre el envejecimiento con muestra representativa",
      "Factores ambientales=Vivienda, accesibilidad, transporte, seguridad del barrio y distancia al centro de salud"
    ],
    g: [
      "La presbicia aparece hacia los ___ años.|40-45|50-55|30-35",
      "La menopausia aparece hacia los ___ años aproximadamente.|51|45|58",
      "En el estudio de Alameda, el seguimiento duró ___ años.|nueve|cinco|veinte",
      "El metaanálisis de Holt-Lunstad, Smith y Layton incluyó ___ estudios.|148|516|48",
      "Los factores del enfoque biopsicosocial no se suman sin más, sino que ___.|interactúan|se anulan|se ordenan"
    ],
    tf: [
      "Los factores biológicos actúan solo al final de la vida adulta.|F|Actúan durante toda la adultez: la presbicia aparece hacia los 40-45 años y la menopausia, hacia los 51.",
      "El Estudio Dunedin muestra diferencias en el ritmo de envejecimiento biológico ya en la mediana edad.|V",
      "ELSA es la encuesta europea de salud, envejecimiento y jubilación que incluye a España.|F|Esa es SHARE. ELSA es el estudio longitudinal inglés sobre el envejecimiento.",
      "SHARE permite comparar países con sistemas de pensiones, familias y servicios distintos.|V"
    ],
    q: [
      "Un hombre con artrosis de rodilla es autónomo en un piso con ascensor, pero queda aislado al mudarse a un cuarto sin él. ¿Qué factor ilustra?|Ambiental|Biológico|Psicológico|El entorno físico facilita o dificulta la vida diaria. La OMS (2002) considera los entornos favorables una condición del envejecimiento activo.",
      "¿Qué encontraron Berkman y Syme (1979) en el condado de Alameda?|Más mortalidad con menos vínculos|Menos mortalidad con más ingresos|Más discapacidad con menos educación|Las personas con menos vínculos sociales tenían una mortalidad mayor a lo largo de nueve años de seguimiento.",
      "Una predisposición genética a la hipertensión tendrá efectos distintos según el estrés, la dieta y el apoyo de la pareja. ¿Qué idea ilustra?|La interacción de factores|El gradiente social de la salud|La arquitectura incompleta|Los factores biológicos, psicológicos y sociales no se suman: se modifican entre sí.",
      "Carmen y Luisa, gemelas de 72 años, comparten genes, pero una vive en un barrio con centro de salud y la otra en un pueblo sin transporte, y su salud difiere mucho. ¿Qué ilustra?|Que ni biología ni entorno bastan solos|Que la genética determina la salud|Que el entorno lo explica por sí solo|La biología no explica la diferencia sola, y tampoco el entorno solo: los factores interactúan."
    ],
    inc: [
      "Sobre los factores del desarrollo adulto|Los factores se suman de forma independiente|Las relaciones predicen con solidez la salud|El estilo de vida modula el efecto biológico|Los factores interactúan. Por eso hay intervenciones que actúan sobre varios niveles a la vez, como el ensayo FINGER."
    ],
    seq: [],
    cls: [
      "Factor|Biológico: presbicia; menopausia; ritmo de envejecimiento|Social: vínculos; apoyo social; estudio de Alameda|Ambiental: vivienda; accesibilidad; transporte"
    ] },
  { t: "Desigualdad y ventaja acumulada",
    tip: "Las diferencias siguen la posición social. El Estudio Whitehall II mostró un gradiente social de la salud: cada escalón está algo peor que el superior. La ventaja y la desventaja acumuladas explican que las trayectorias se separen y que la variabilidad sea máxima en la vejez. Sigue en debate el peso de la causalidad social frente a la selección por salud, y separarlas exige datos longitudinales.",
    v: [
      "Gradiente social de la salud=La salud empeora en cada escalón de la jerarquía, no solo en el más bajo",
      "Whitehall II=Estudio con funcionarios británicos sobre posición social y salud",
      "Ventaja acumulada=Las ventajas iniciales facilitan obtener otras y las trayectorias se separan",
      "Desventaja acumulada=Encadenamiento de desventajas que se agravan con los años",
      "Causalidad social=Las condiciones de una posición baja dañan la salud",
      "Hipótesis de la selección=La mala salud empuja hacia posiciones sociales más bajas",
      "Comisión Lancet=Identifica la educación temprana como factor modificable de demencia",
      "Brecha de género al envejecer=Las mujeres viven más, pero pasan más años con discapacidad"
    ],
    g: [
      "El Estudio Whitehall II se realizó con ___ británicos.|funcionarios|universitarios|jubilados",
      "La dificultad actual para emanciparse retrasa la vivienda, la familia y la ___, con efectos décadas después.|cotización|formación básica|escolarización",
      "Según la ventaja acumulada, la variabilidad entre personas es máxima en la ___.|vejez|adultez media|juventud",
      "Separar causalidad y selección exige datos ___ que midan salud y posición en varios momentos.|longitudinales|transversales|cualitativos",
      "El gradiente aparece incluso con empleo estable y sanidad pública, así que no se reduce a la ___ extrema.|pobreza|enfermedad|vejez"
    ],
    tf: [
      "En el Estudio Whitehall II solo los funcionarios del escalón más bajo tenían peor salud.|F|En cada escalón la salud era algo peor que en el superior: es un gradiente, no un problema solo de los más pobres.",
      "La causalidad social y la selección probablemente se refuerzan entre sí, pero su peso relativo sigue en debate.|V",
      "La hipótesis de la selección sostiene que el estrés y los trabajos físicos de una posición baja dañan la salud.|F|Eso es la causalidad social. La selección dice que la mala salud lleva a posiciones sociales más bajas.",
      "Reducir el abandono escolar puede considerarse también una política de envejecimiento.|V"
    ],
    q: [
      "Pedro sufre desde joven una enfermedad crónica que le impide terminar sus estudios y mantener un empleo, y acaba con ingresos bajos. ¿Qué hipótesis ilustra?|La selección por salud|La causalidad social|El gradiente social|La mala salud dificulta estudiar y mantener un empleo y lleva hacia posiciones sociales más bajas.",
      "¿Qué explica, según la ventaja acumulada, que la variabilidad sea máxima en la vejez?|Las trayectorias se separan con los años|La genética pesa más al envejecer|Los sucesos históricos igualan a todos|Las ventajas iniciales facilitan obtener otras y las desventajas se encadenan, así que las trayectorias divergen.",
      "¿Qué factor modificable de demencia, ligado a la acumulación, identifica la Comisión Lancet (Livingston et al., 2024)?|La educación temprana|El nivel de pensiones|La edad de jubilación|La educación en las primeras etapas de la vida es uno de los factores de riesgo modificables de demencia.",
      "¿Qué indica que el gradiente social aparezca entre funcionarios con empleo estable y sanidad pública?|Que no se reduce a la pobreza extrema|Que se debe al acceso a la sanidad|Que solo afecta al escalón más bajo|Incluso con empleo y sanidad, cada escalón tiene algo peor salud que el superior."
    ],
    inc: [
      "Sobre la ventaja acumulada|Las diferencias sociales se distribuyen al azar|Un nivel educativo bajo se asocia a pensiones más bajas|Las mujeres viven más, pero con más años de discapacidad|No se distribuyen al azar: siguen la posición social, como mostró el gradiente del Estudio Whitehall II."
    ],
    seq: [],
    cls: [
      "Hipótesis|Causalidad social: estrés; trabajos físicos; peor vivienda|Selección: mala salud previa; dificultad para estudiar; pérdida del empleo"
    ] }
] },
{ n: 3, t: "Teorías clásicas de las etapas adultas", cap: 2, pir: "alta", mods: [
  { t: "Freud y Piaget: el legado de la infancia",
    tip: "Freud y Piaget construyeron teorías de etapas que terminan antes de la adultez y sirven de contraste. Para Freud, la etapa genital, desde la pubertad, es la última, y la adultez queda como etapa de llegada. Para Piaget, las operaciones formales de la adolescencia son el techo cognitivo, aunque la asimilación, la acomodación y el equilibrio siguen activos toda la vida.",
    v: [
      "Etapa genital=Última etapa psicosexual de Freud, alcanzada con la pubertad",
      "Teoría psicosexual=Etapas oral, anal, fálica, de latencia y genital (Freud, 1905)",
      "Asimilación=Incorporar lo nuevo a los esquemas que ya se tienen",
      "Acomodación=Modificar los esquemas cuando lo nuevo no encaja",
      "Equilibrio=Búsqueda de balance entre incorporar lo nuevo y modificar los esquemas",
      "Operaciones formales=Último estadio de Piaget: razonar sobre hipótesis y sobre lo posible",
      "Techo cognitivo=Idea de que el adulto no adquiere un pensamiento cualitativamente nuevo",
      "Imagen de meseta=Adultez como estado final estable y vejez como descenso"
    ],
    g: [
      "Freud publicó su teoría psicosexual en ___.|1905|1952|1950",
      "Para Piaget, el estadio de las operaciones formales aparece en la ___.|adolescencia|adultez temprana|infancia tardía",
      "Según Freud, los conflictos tempranos sin resolver pueden ___ en la forma de amar o de trabajar.|reaparecer|resolverse|extinguirse",
      "Una profesora que intenta encajar la docencia en línea en lo que ya sabe hacer está usando la ___.|asimilación|acomodación|equilibración",
      "Lo que el modelo de Freud deja sin explicar es el ___ propio de la vida adulta.|cambio|conflicto|equilibrio"
    ],
    tf: [
      "Para Piaget, el adulto puede ampliar sus conocimientos, pero no adquiere una forma de pensar cualitativamente nueva.|V",
      "Piaget describió un estadio posformal posterior a las operaciones formales.|F|Es una trampa típica: para Piaget las operaciones formales eran el techo. El posformal lo propusieron otros autores.",
      "Los mecanismos de adaptación de Piaget siguen activos durante toda la vida.|V",
      "En la teoría de Freud, la adultez tiene etapas propias posteriores a la genital.|F|La genital es la última. Después solo hay la expresión adulta de lo configurado en los primeros años."
    ],
    q: [
      "Una profesora pasa a la docencia en línea y, al ver que sus métodos habituales no funcionan, reorganiza su forma de trabajar. ¿Qué mecanismo piagetiano usa?|Acomodación|Asimilación|Equilibrio formal|Modifica sus esquemas cuando lo nuevo no encaja. El mecanismo es el de la infancia, con un material distinto.",
      "¿Qué comparten las teorías de Freud y Piaget sobre el desarrollo?|Un ascenso hacia un estado final temprano|Una secuencia de etapas hasta la muerte|Un cambio continuo durante la adultez|La vida adulta sería la meseta y la vejez, el descenso. Es la imagen que discuten las teorías posteriores.",
      "¿Qué capacidad aportan las operaciones formales?|Razonar sobre hipótesis y lo posible|Integrar la emoción en el razonamiento|Sintetizar posturas opuestas|Integrar emoción y sintetizar opuestos son rasgos del pensamiento posformal, no de las operaciones formales.",
      "¿Qué ámbito estudia la teoría de Freud, frente a la de Piaget?|Personalidad y vida afectiva|Inteligencia y razonamiento|Roles y expectativas sociales|Freud se ocupa de la personalidad y la vida afectiva, y Piaget, de la inteligencia y el razonamiento."
    ],
    inc: [
      "Sobre Freud y Piaget|Ambos describieron etapas propias de la vida adulta|La etapa genital se alcanza con la pubertad|Piaget situó el techo cognitivo en la adolescencia|Sus teorías terminan antes de la adultez. Se estudian por contraste con las teorías posteriores."
    ],
    seq: [
      "Etapas psicosexuales de Freud|Oral>Anal>Fálica>Latencia>Genital"
    ],
    cls: [
      "Autor|Freud: etapa genital; peso de las experiencias tempranas; personalidad|Piaget: operaciones formales; asimilación y acomodación; inteligencia"
    ] },
  { t: "Erikson: intimidad, generatividad e integridad",
    tip: "Erikson (1950, 1968) describió ocho etapas psicosociales, cada una con una tensión entre un polo sintónico y otro distónico, y de su resolución favorable surge una virtud. Las tres adultas son intimidad frente a aislamiento (amor), generatividad frente a estancamiento (cuidado) e integridad frente a desesperación (sabiduría). No fijó edades exactas, y por el principio epigenético las tensiones pueden volver.",
    v: [
      "Principio epigenético=Cada tensión tiene su momento central, pero todas actúan a lo largo de la vida",
      "Polo sintónico=Extremo favorable de cada tensión psicosocial",
      "Polo distónico=Extremo desfavorable de cada tensión psicosocial",
      "Virtud=Fuerza básica que surge de resolver bien una tensión",
      "Intimidad=Comprometerse en relaciones cercanas sin miedo a perderse en ellas",
      "Generatividad=Preocupación por guiar y cuidar a la generación siguiente y dejar un legado",
      "Integridad=Aceptar la vida vivida como algo con sentido, con aciertos y errores",
      "Novena etapa=Añadido de Joan Erikson (1997) para la vejez muy avanzada"
    ],
    g: [
      "La virtud que surge de la integridad frente a la desesperación es la ___.|sabiduría|esperanza|fidelidad",
      "La resolución desfavorable de la intimidad lleva al ___.|aislamiento|estancamiento|egocentrismo",
      "Resolver bien una tensión no es eliminar el polo negativo, sino lograr un equilibrio en el que ___ el positivo.|predomine|se diluya|se anule",
      "Joan Erikson añadió en ___ una novena etapa para la vejez muy avanzada.|1997|1968|1982",
      "Alguien puede volver a enfrentarse a la intimidad tras un divorcio a los cincuenta por el principio ___.|epigenético|psicosexual|normativo"
    ],
    tf: [
      "La generatividad exige tener hijos.|F|Es una trampa típica: se expresa también al enseñar, ser mentor, crear o cuidar de la comunidad.",
      "Erikson no fijó edades exactas para las etapas adultas.|V",
      "La sabiduría es la virtud asociada a la generatividad.|F|La sabiduría surge de la integridad. La virtud de la generatividad es el cuidado.",
      "Para Erikson, la intimidad incluye la amistad profunda y la colaboración estrecha, no solo la pareja.|V"
    ],
    q: [
      "Una mujer de 52 años sin hijos coordina un programa de lectura para los niños de su barrio. Según Erikson, ¿qué muestra?|Generatividad, con la virtud del cuidado|Integridad, con la virtud de la sabiduría|Estancamiento, al no tener descendencia|Cuidar de la generación siguiente es generatividad, y no depende de tener hijos.",
      "A los 80 años, Lucía repasa las fotos de su vida y, aunque lamenta algunas decisiones, siente que ha merecido la pena. ¿Qué tensión ha resuelto bien?|Integridad frente a desesperación|Generatividad frente a estancamiento|Intimidad frente a aislamiento|Aceptar la vida vivida con sus aciertos y errores es integridad. Su virtud es la sabiduría.",
      "¿Qué emparejamiento de tensión y virtud es correcto?|Intimidad y amor|Generatividad y sabiduría|Integridad y cuidado|La intimidad da el amor, la generatividad, el cuidado, y la integridad, la sabiduría.",
      "¿Qué crítica se dirige a la teoría de Erikson?|Parte de la experiencia occidental de clase media|Se basa en una muestra de 40 varones de Harvard|Fija edades exactas para cada etapa adulta|Se le reprocha ese sesgo y que sus conceptos son difíciles de medir. No fijó edades exactas."
    ],
    inc: [
      "Sobre las etapas adultas de Erikson|Se resuelven de una vez y no vuelven a plantearse|De cada resolución favorable surge una virtud|Cada tensión opone un polo sintónico y uno distónico|Por el principio epigenético, las tensiones pueden volver a plantearse, por ejemplo tras un divorcio."
    ],
    seq: [
      "Crisis adultas de Erikson|Intimidad frente a aislamiento>Generatividad frente a estancamiento>Integridad frente a desesperación"
    ],
    cls: [
      "Virtud de Erikson|Amor: intimidad; relaciones cercanas|Cuidado: generatividad; ser mentor|Sabiduría: integridad; balance de la vida"
    ] },
  { t: "Levinson y las estructuras de vida",
    tip: "Levinson (1978) partió de entrevistas biográficas a 40 varones de 35 a 45 años. La estructura de vida es el patrón de relaciones de la persona con su mundo, y la adultez alterna periodos de estabilidad, en que se construye, y de transición, en que se revisa. El Sueño y el mentor marcan la adultez temprana. La transición de la mitad de la vida no debe tomarse como una crisis universal.",
    v: [
      "Estructura de vida=Patrón de relaciones con el trabajo, la pareja, la familia o la comunidad",
      "Periodo de estabilidad=Fase en que se construye una estructura y se vive de acuerdo con ella",
      "Periodo de transición=Fase en que la estructura se revisa, se cuestiona y se modifica",
      "Sueño=Visión imaginada de la vida deseada que guía la adultez temprana",
      "Mentor=Persona algo mayor que apoya el proyecto vital y enseña el oficio",
      "Eras=Grandes periodos de unos veinte años separados por transiciones",
      "Transición de mitad de vida=Revisión de lo logrado frente a lo soñado, hacia los 40-45 años",
      "Muestra de Levinson=40 varones de 35 a 45 años de una sola cohorte"
    ],
    g: [
      "Levinson entrevistó a 40 varones de entre 35 y ___ años.|45|55|40",
      "La transición a la adultez temprana se sitúa aproximadamente entre los 17 y los ___ años.|22|25|30",
      "La estructura de vida no es un rasgo interno, sino la forma concreta en que se entrelazan el yo y el ___.|mundo|cuerpo|pasado",
      "Los datos de Levinson procedían de entrevistas ___, sin seguimiento longitudinal.|retrospectivas|grupales|estructuradas",
      "La transición a la adultez tardía se sitúa hacia los ___ años.|60-65|50-55|70-75"
    ],
    tf: [
      "La transición de la mitad de la vida de Levinson es una crisis universal confirmada en muestras amplias.|F|Describe lo que contaban los 40 varones de su muestra. La investigación posterior no la ha confirmado como norma.",
      "El reloj social, las expectativas sobre a qué edad «toca» cada suceso, es un concepto de Levinson.|F|Es de Neugarten. Atribuírselo a Levinson es una trampa típica del PIR.",
      "Según Levinson, la relación con el mentor suele terminar o transformarse con el tiempo.|V",
      "Levinson estudió más tarde a mujeres, pero el modelo se sigue citando sobre todo en su versión original.|V"
    ],
    q: [
      "Raúl, de 33 años, deja un empleo estable para montar un taller de cerámica. Según Levinson, ¿cómo puede entenderse?|Revisa una estructura que ya no encajaba|Atraviesa la crisis universal de los 30|Resuelve la tensión de la generatividad|En los periodos de transición la estructura de vida se revisa y se modifica para dar paso a la siguiente.",
      "¿Cuál es la principal limitación empírica de la teoría de Levinson?|Muestra pequeña de varones de una cohorte|Muestra nacional amplia sin entrevistas|Seguimiento longitudinal demasiado corto|Eran 40 varones de 35 a 45 años, con entrevistas retrospectivas y ningún seguimiento longitudinal.",
      "En la teoría de Levinson, ¿qué tarea es central en la adultez temprana?|Dar cabida al Sueño en la estructura|Hacer balance de la vida ya vivida|Revisar lo logrado frente a lo soñado|Construir una estructura que dé cabida al Sueño es central. Revisar lo logrado frente a lo soñado es propio de los 40-45.",
      "¿Qué alternan, según Levinson, los periodos de la vida adulta?|Estabilidad y transición|Crisis y resolución|Ganancias y pérdidas|En la estabilidad se construye una estructura de vida, y en la transición se revisa. Ganancias y pérdidas es un principio de Baltes."
    ],
    inc: [
      "Sobre Levinson|Su teoría se basó en un seguimiento longitudinal|La estructura de vida incluye trabajo, pareja y comunidad|El mentor apoya el Sueño y enseña el oficio|Se basó en entrevistas biográficas retrospectivas a 40 varones, sin seguimiento longitudinal."
    ],
    seq: [
      "Transiciones de Levinson|A la adultez temprana>De los 30>De la mitad de la vida>De los 50>A la adultez tardía"
    ],
    cls: [
      "Tipo de periodo|Estabilidad: se construye la estructura; se vive de acuerdo con ella|Transición: se revisa la estructura; se cuestiona y se modifica; mitad de la vida"
    ] },
  { t: "Poner a prueba las etapas: generatividad y Grant Study",
    tip: "Desde los noventa se intentó medir los conceptos de Erikson y Levinson. La Loyola Generativity Scale (McAdams y de St. Aubin, 1992) mostró que la generatividad es medible y se liga al bienestar, pero varía mucho a una misma edad. El Grant Study (Vaillant, 2012) halló que la calidad de las relaciones predice el buen envejecer, y en MIDUS solo un 26 % refirió una crisis de la mediana edad.",
    v: [
      "Loyola Generativity Scale=Autoinforme de la preocupación generativa (McAdams y de St. Aubin, 1992)",
      "Grant Study=Estudio longitudinal de varones universitarios de Harvard",
      "George Vaillant=Dirigió durante años el Grant Study y resumió sus conclusiones en 2012",
      "MIDUS=Estudio con una muestra nacional amplia de adultos estadounidenses",
      "McAdams (1993)=Ligó la alta generatividad a narrar la vida con secuencias de redención",
      "Calidad de las relaciones=Mejor predictor del envejecimiento satisfactorio en el Grant Study",
      "Sesgo de muestra=Límite del Grant Study, con varones de nivel educativo alto",
      "Temas de las etapas=Intimidad, cuidado de otros y revisión de la vida, aún útiles hoy"
    ],
    g: [
      "El Grant Study siguió durante décadas a una cohorte de varones universitarios de ___.|Harvard|Yale|Stanford",
      "George ___ dirigió el Grant Study durante muchos años y resumió sus conclusiones en 2012.|Vaillant|McAdams|Levinson",
      "Disponer de la Loyola Generativity Scale permitió pasar de la descripción a la ___.|investigación|intervención|terapia",
      "Las personas muy generativas tienden a contar su vida con secuencias de ___.|redención|contaminación|transición",
      "La Loyola Generativity Scale es un cuestionario de ___.|autoinforme|observación|entrevista"
    ],
    tf: [
      "La investigación con la Loyola Generativity Scale mostró que la generatividad empieza y termina a edades fijas.|F|Es medible y se liga al bienestar, pero varía mucho entre personas de la misma edad y según sus roles.",
      "El hallazgo del Grant Study sobre las relaciones es coherente con la importancia que Erikson daba a la intimidad y la generatividad.|V",
      "Las conclusiones del Grant Study se generalizan sin problemas porque su muestra es muy diversa.|F|Era una muestra de varones de Harvard con nivel educativo alto, lo que limita su generalización.",
      "La idea de una secuencia fija de etapas que todos atraviesan en el mismo orden no se sostiene.|V"
    ],
    q: [
      "Un amigo de 43 años afirma que «todo el mundo pasa por la crisis de los cuarenta». ¿Qué responde mejor la evidencia?|Solo una minoría la refiere, ligada a sucesos|La sufre la mayoría de los varones a esa edad|Es universal, pero más intensa en las mujeres|En MIDUS solo un 26 % la refirió, sin diferencias por sexo, y la atribuía a sucesos concretos (Wethington, 2000).",
      "¿Qué predijo mejor el envejecimiento satisfactorio en el Grant Study?|La calidad de las relaciones|El nivel educativo alcanzado|La ausencia de crisis vitales|La calidad de las relaciones lo predecía mejor que muchos factores que se suelen dar por decisivos.",
      "¿Qué aportó la Loyola Generativity Scale a la investigación?|Pasar de la descripción a la medida|Confirmar edades fijas de las etapas|Demostrar una crisis a los 40-45|Disponer de una medida permitió investigar la generatividad. Mostró que es medible, no que tenga edades fijas.",
      "¿Cuál es el balance actual de las teorías de Erikson y Levinson?|Sus temas son útiles, no su secuencia fija|Su secuencia fija de etapas se ha confirmado|Ambas teorías han quedado refutadas por completo|Los datos matizan las teorías más de lo que las confirman o refutan: los temas sirven, la secuencia universal no."
    ],
    inc: [
      "Sobre la contrastación de las etapas|La generatividad no se ha podido medir con fiabilidad|La generatividad se relaciona con mayor bienestar|El Grant Study siguió a una cohorte durante décadas|McAdams y de St. Aubin (1992) construyeron la Loyola Generativity Scale, que permitió medirla."
    ],
    seq: [],
    cls: [
      "Idea clásica según la evidencia|Apoyada con matices: generatividad medible; relaciones como eje del buen envejecer|No apoyada: crisis normativa a los 40-45; secuencia fija de etapas"
    ] }
] },
{ n: 4, t: "Teorías contemporáneas del desarrollo adulto", cap: 2, pir: "media", mods: [
  { t: "Kegan y los órdenes de conciencia",
    tip: "Kegan (1982) se centra en cómo organiza una persona su experiencia, no en qué piensa. Desarrollarse es que lo que era sujeto, aquello desde lo que miramos, pase a ser objeto, algo que podemos examinar. Los órdenes adultos son el socializado (3.º), el autoautoral (4.º) y el autotransformador (5.º). Según sus datos, una minoría alcanza plenamente el cuarto, y la replicación independiente es escasa.",
    v: [
      "Sujeto=Aquello desde lo que miramos y que no podemos ver ni controlar",
      "Objeto=Aquello que podemos mirar, examinar y cambiar",
      "Mente socializada=Tercer orden: la persona se define por sus relaciones y las expectativas ajenas",
      "Mente autoautoral=Cuarto orden: un sistema propio de valores evalúa las expectativas ajenas",
      "Mente autotransformadora=Quinto orden: se toma distancia del propio sistema de valores",
      "Orden de conciencia=Forma cada vez más compleja de organizar la experiencia",
      "Loevinger=Autora de estadios del yo evaluados con un test de frases incompletas",
      "Paso de sujeto a objeto=Lo que nos gobernaba sin verlo se vuelve examinable"
    ],
    g: [
      "En el tercer orden de Kegan, lo que es ___ son las relaciones y las expectativas compartidas.|sujeto|objeto|sistema",
      "En el cuarto orden, el sujeto es el propio sistema de ___.|valores|relaciones|roles",
      "El quinto orden se denomina también ___.|interindividual|institucional|interpersonal",
      "El cuarto orden se denomina también ___.|institucional|interpersonal|interindividual",
      "La teoría de Kegan ha influido mucho en la educación de adultos y en el desarrollo de ___.|liderazgo|la memoria|la pareja"
    ],
    tf: [
      "Según Kegan, el desarrollo consiste en que lo que era objeto se convierta en sujeto.|F|Es al revés: lo que era sujeto pasa a ser objeto y se puede examinar.",
      "Según los datos de Kegan, la mayoría de los adultos alcanza plenamente el cuarto orden.|F|Solo una minoría lo alcanza plenamente, y el quinto es aún más infrecuente.",
      "A la persona del tercer orden le cuesta decidir cuando quienes le importan esperan cosas distintas.|V",
      "Algunos textos numeran los órdenes adultos de Kegan de otra manera.|V"
    ],
    q: [
      "Un joven vive las expectativas de sus padres como si fueran sus deseos. Años después dice: «esto es lo que mi familia espera, y yo quiero otra cosa». ¿Qué ha ocurrido según Kegan?|Las expectativas han pasado a ser objeto|Las expectativas se han vuelto sujeto|Ha alcanzado el quinto orden de conciencia|Las expectativas siguen ahí, pero ya puede examinarlas: lo que era sujeto se ha convertido en objeto.",
      "Una directiva sostiene a la vez perspectivas que se contradicen, ve los límites de su propio sistema de valores y aprende de quien piensa distinto. ¿Qué orden refleja?|El quinto orden|El cuarto orden|El tercer orden|En el quinto orden, o mente autotransformadora, incluso el propio sistema de valores se vuelve objeto.",
      "¿Con qué autor se suele confundir a Kegan en los exámenes?|Loevinger|Levinson|Labouvie-Vief|Loevinger propuso estadios del desarrollo del yo evaluados con un test de frases incompletas.",
      "¿Por qué hay que tomar con cautela las cifras de Kegan?|Hay poca replicación independiente|Proceden de una muestra de varones|Se obtuvieron con escalas de rasgos|Proceden de sus propias entrevistas y la replicación independiente es escasa."
    ],
    inc: [
      "Sobre los órdenes de Kegan|En el cuarto orden las relaciones siguen siendo sujeto|La teoría se centra en cómo se organiza la experiencia|En el tercer orden la persona es capaz de lealtad|En el cuarto orden las relaciones ya son objeto, y el sujeto es el propio sistema de valores."
    ],
    seq: [
      "Órdenes de conciencia adultos de Kegan|Mente socializada>Mente autoautoral>Mente autotransformadora"
    ],
    cls: [
      "Orden de Kegan|Socializado: se define por sus relaciones; lealtad y empatía|Autoautoral: sistema propio de valores; evalúa una crítica sin romperse|Autotransformador: varias perspectivas a la vez; ve los límites de su sistema"
    ] },
  { t: "McAdams y la identidad narrativa",
    tip: "McAdams (1993) propone que desde la adolescencia se construye una identidad narrativa, una historia interiorizada y en evolución que da unidad y propósito a la vida. Se suma a otros dos niveles de la personalidad, los rasgos y las adaptaciones características, y se reescribe con cada cambio vital. Las secuencias de redención se asocian a la generatividad, aunque ese ideal redentor no es igual en todas las culturas.",
    v: [
      "Identidad narrativa=Historia interiorizada que reconstruye el pasado y anticipa el futuro",
      "Rasgos=Disposiciones amplias y relativamente estables de la personalidad",
      "Adaptaciones características=Metas, valores, estrategias y roles en un contexto",
      "Secuencia de redención=Episodio narrado en que algo malo da paso a algo bueno",
      "Secuencia de contaminación=Episodio narrado en que algo bueno se estropea",
      "McAdams (1993)=Autor que propuso que la persona se define también por su historia de vida",
      "Cinco Grandes=Modelo de rasgos que se estudia en la asignatura de Personalidad",
      "Codificación de relatos=Análisis de historias con criterios fiables, uno de los retos del enfoque"
    ],
    g: [
      "Según McAdams, la identidad narrativa se construye a partir de la ___.|adolescencia|infancia|adultez media",
      "Querer ascender en la empresa o ser cuidador de un padre son ejemplos de ___.|adaptaciones características|secuencias de redención|rasgos de personalidad",
      "«Conseguí el trabajo de mis sueños y ahí empezó todo a ir mal» es una secuencia de ___.|contaminación|redención|transición",
      "El modelo de historia redentora se valora especialmente en algunas ___ y puede no ser el ideal en otras.|culturas|edades|familias",
      "El enfoque narrativo explica cómo cambia la personalidad adulta sin que cambien necesariamente los ___.|rasgos|relatos|roles"
    ],
    tf: [
      "Para McAdams, conocer los rasgos de alguien basta para saber quién es.|F|Hace falta también conocer la historia que se cuenta sobre cómo llegó a ser quien es.",
      "Las personas con alta generatividad tienden a narrar su vida con más secuencias de redención.|V",
      "La identidad narrativa se fija al final de la adolescencia y no se revisa después.|F|Se revisa cada vez que la vida cambia: un despido, una enfermedad o un hijo obligan a reescribir capítulos.",
      "Para este enfoque, la generatividad es también una manera de entender la propia biografía.|V"
    ],
    q: [
      "Dos hermanos viven el cierre de la fábrica familiar. Uno lo cuenta como el inicio de su declive, y el otro, como el momento en que se atrevió a estudiar Enfermería. ¿Qué secuencia narra el segundo?|De redención|De contaminación|De estabilidad|Algo malo da paso a algo bueno. Según esta línea, estas historias se relacionan con el bienestar y el compromiso con los demás.",
      "¿Qué nivel de la personalidad es el más propio de McAdams?|La identidad narrativa|Los rasgos estables|Las adaptaciones características|Los rasgos se estudian con modelos como los Cinco Grandes. Lo propio de McAdams es la historia de vida.",
      "¿Qué limitación se señala al enfoque narrativo?|Exige codificar relatos con fiabilidad|No capta el sentido subjetivo de la vida|Ignora que la personalidad cambia|Además, hay que cuidar las diferencias culturales: el ideal redentor no es universal.",
      "¿Con qué concepto de Erikson conecta McAdams las secuencias de redención?|Generatividad|Integridad|Intimidad|Las personas muy generativas narran su vida con más secuencias de redención."
    ],
    inc: [
      "Sobre la identidad narrativa|Sustituye a los rasgos como nivel de la personalidad|Da unidad y propósito a la vida de la persona|Se reescribe cuando la vida cambia de forma notable|Es un tercer nivel que se suma a los rasgos y a las adaptaciones características y los integra."
    ],
    seq: [],
    cls: [
      "Nivel de McAdams|Rasgos: ser responsable; ser poco ansioso|Adaptaciones características: querer ascender; ser cuidador de un padre|Identidad narrativa: historia de vida; salir adelante tras perderlo todo"
    ] },
  { t: "Wilber y los modelos integrales",
    tip: "Wilber (2000) propuso el modelo integral AQAL, que pretende reunir psicología del desarrollo, filosofía y tradiciones contemplativas mediante cuadrantes, niveles, líneas, estados y tipos. La idea de las líneas, un desarrollo desigual según el terreno, es la más fácil de conectar con la psicología académica. Es un marco filosófico especulativo, no una teoría contrastada como la de Baltes.",
    v: [
      "AQAL=Todos los cuadrantes, todos los niveles",
      "Cuadrantes=Cuatro perspectivas según lo individual o colectivo y lo interior o exterior",
      "Niveles=Avance de la conciencia de lo prepersonal a lo personal y lo transpersonal",
      "Líneas=Terrenos de desarrollo con recorrido propio dentro de una misma persona",
      "Estados=Formas transitorias de conciencia, como la vigilia o la meditación",
      "Tipos=Estilos que se mantienen a lo largo de los niveles",
      "Interior colectivo=Cuadrante de la cultura y los significados compartidos",
      "Exterior colectivo=Cuadrante de los sistemas sociales y las instituciones"
    ],
    g: [
      "Lo que el entorno piensa de los jubilados pertenece al cuadrante de la ___.|cultura|conducta|vivencia",
      "Los cambios en el sueño y la actividad física al jubilarse pertenecen al cuadrante exterior ___.|individual|colectivo|subjetivo",
      "Según Wilber, el desarrollo de la conciencia culminaría en niveles ___.|transpersonales|personales|prepersonales",
      "Wilber comparte con Baltes la intuición de que el desarrollo es ___.|multidimensional|unidimensional|transpersonal",
      "Baltes se apoya en datos longitudinales, y Wilber, en una síntesis ___.|conceptual|empírica|estadística"
    ],
    tf: [
      "El modelo de Wilber es una teoría psicológica con amplio respaldo empírico.|F|Es un marco filosófico especulativo: no se ha formulado de forma contrastable y mezcla datos con supuestos espirituales.",
      "La idea de las líneas es la más fácil de conectar con la psicología académica.|V",
      "La jerarquía de niveles de Wilber, que culmina en estados transpersonales, cuenta con respaldo de la investigación psicológica.|F|No tiene ese respaldo. Forma parte de su síntesis especulativa.",
      "Saber distinguir un marco especulativo de una teoría contrastada es, en sí mismo, una competencia profesional.|V"
    ],
    q: [
      "Un ingeniero tiene un razonamiento lógico muy desarrollado, pero le cuesta manejar sus emociones y entender a los demás. ¿Qué elemento del modelo de Wilber lo describe?|Las líneas|Los estados|Los cuadrantes|Cada terreno sería una línea con su propio recorrido, y una persona puede estar muy desarrollada en una y poco en otra.",
      "¿Qué recoge el cuadrante interior individual?|La vivencia subjetiva|La conducta y la salud|Los sistemas sociales|El exterior individual recoge la conducta y el cuerpo, y el exterior colectivo, los sistemas e instituciones.",
      "¿Cuál es la valoración más adecuada del modelo AQAL?|Marco filosófico que organiza preguntas|Teoría contrastada con datos de Seattle|Ampliación empírica de los estadios de Piaget|No se ha formulado en términos contrastables y mezcla datos científicos con supuestos filosóficos y espirituales.",
      "¿Qué diferencia principal hay entre Wilber y Baltes?|El método en que se apoyan|La idea de varias líneas|El interés por la vejez|Ambos subrayan la multiplicidad, pero Baltes usa datos e hipótesis comprobables, y Wilber, una síntesis conceptual."
    ],
    inc: [
      "Sobre el modelo integral|Los estados son estilos estables a lo largo de los niveles|Los cuadrantes cruzan lo individual y lo colectivo con lo interior y lo exterior|Las líneas permiten un desarrollo desigual por terrenos|Eso son los tipos. Los estados son formas transitorias de conciencia, como la vigilia, el sueño o la meditación."
    ],
    seq: [
      "Niveles de conciencia según Wilber|Prepersonal>Personal>Transpersonal"
    ],
    cls: [
      "Perspectiva de Wilber|Individual: vivencia subjetiva; conducta y salud|Colectiva: cultura y valores; sistema de pensiones; servicios del barrio"
    ] },
  { t: "Más allá de Piaget: el pensamiento posformal",
    tip: "El pensamiento posformal va más allá de las operaciones formales ante problemas reales sin una única respuesta. Sus rasgos son el relativismo, la aceptación de la contradicción, la síntesis dialéctica y la integración de cognición y emoción. Lo estudiaron Perry, Labouvie-Vief, Sinnott y Commons. La evidencia lo describe mejor como un estilo que algunos adultos usan en algunos ámbitos que como un estadio universal.",
    v: [
      "Relativismo=Reconocer que la respuesta adecuada depende del contexto y del punto de vista",
      "Aceptación de la contradicción=Asumir que dos ideas opuestas pueden ser verdaderas en parte",
      "Síntesis dialéctica=Integrar posturas opuestas en una comprensión más amplia",
      "Integración cognición-emoción=Usar la emoción como información sin que sustituya al razonamiento",
      "Problema mal definido=Sin una única solución correcta ni datos completos, típico de la vida real",
      "Perry (1970)=Describió el paso de un pensamiento dualista a uno relativista en universitarios",
      "Commons=Propuso niveles sistemático, metasistemático y paradigmático",
      "Labouvie-Vief=Destacó la unión de razonamiento y afecto en el pensamiento adulto"
    ],
    g: [
      "Según Perry, tras el relativismo muchos estudiantes llegaban al ___ con una postura propia.|compromiso|dualismo|conflicto",
      "Sinnott se centró en los problemas ___ definidos, como los de la vida familiar o laboral.|mal|bien|parcialmente",
      "Commons describió niveles posteriores al formal: sistemático, metasistemático y ___.|paradigmático|dialéctico|transpersonal",
      "La evidencia favorece entender el pensamiento posformal como un ___ de pensamiento.|estilo|estadio|nivel",
      "Perry estudió estos cambios en estudiantes ___.|universitarios|adolescentes|jubilados"
    ],
    tf: [
      "Todos los adultos alcanzan el pensamiento posformal con la edad.|F|No todos lo alcanzan: depende de la educación y de la experiencia, y varía según el ámbito.",
      "Una misma persona puede razonar de forma posformal sobre su trabajo y de forma rígida sobre la política.|V",
      "En el pensamiento posformal, la emoción sustituye al razonamiento cuando el problema no tiene solución única.|F|La emoción se usa como información, pero sin que sustituya al razonamiento.",
      "Perry mostró que la universidad no solo amplía conocimientos, sino que cambia la forma de pensar.|V"
    ],
    q: [
      "Un mediador escucha a dos socios enfrentados y, en lugar de dar la razón a uno, construye una solución que integra lo valioso de ambas posturas. ¿Qué rasgo posformal usa?|Síntesis dialéctica|Relativismo|Integración de la emoción|Integrar posturas opuestas en una comprensión más amplia, en lugar de elegir una, es síntesis dialéctica.",
      "Un estudiante de primero cree que toda pregunta tiene una respuesta correcta que el profesor conoce. Según Perry, ¿en qué punto está?|Pensamiento dualista|Pensamiento relativista|Compromiso propio|Perry describió el paso del dualismo al relativismo y, después, al compromiso con una postura propia.",
      "¿Qué autor se centró en el razonamiento ante problemas mal definidos?|Sinnott|Commons|Perry|Labouvie-Vief subrayó la integración de cognición y emoción, y Commons describió niveles posteriores al formal.",
      "¿Qué se debate sobre el pensamiento posformal?|Si es un estadio o un estilo|Si existe la contradicción|Si Piaget lo describió|La evidencia favorece el estilo: no todos lo alcanzan, y depende de la educación, la experiencia y el ámbito."
    ],
    inc: [
      "Sobre el pensamiento posformal|Es un estadio universal con estructura de conjunto|Acepta que dos ideas opuestas sean verdaderas en parte|Reconoce que la respuesta depende del contexto|Esa es la lectura piagetiana. La evidencia lo describe mejor como un estilo que depende de la educación y del ámbito."
    ],
    seq: [
      "Recorrido descrito por Perry|Pensamiento dualista>Pensamiento relativista>Compromiso con una postura propia"
    ],
    cls: [
      "Tipo de pensamiento|Formal: única respuesta correcta; lógica hipotético-deductiva|Posformal: relativismo; síntesis dialéctica; integración de cognición y emoción"
    ] }
] }
);

// SAIMAP Psicología · Desarrollo: Adultez · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Transiciones, sucesos vitales y momentos de crisis", cap: 3, pir: "media", mods: [
  { t: "El modelo de las 4 S de Schlossberg",
    tip: "Una transición es cualquier suceso, o la ausencia de un suceso esperado, que cambia relaciones, rutinas, creencias y roles (Schlossberg, 1981). Puede ser anticipada, no anticipada o un no-suceso. Afrontarla depende del equilibrio entre recursos y carencias en las 4 S: situación, uno mismo, apoyo y estrategias. El modelo es un guion aplicado que describe, pero no hace predicciones precisas.",
    v: [
      "Transición=Suceso o no-suceso que cambia relaciones, rutinas, creencias y roles",
      "No-suceso=Algo esperado que no llega a ocurrir y también reorganiza la vida y la identidad",
      "Transición anticipada=Cambio esperado que puede prepararse, como jubilarse en la fecha prevista",
      "Transición no anticipada=Cambio que llega sin aviso, como un despido o un diagnóstico grave",
      "Situación=Desencadenante, momento, control, cambio de rol, duración y estrés concurrente",
      "Uno mismo=Salud, economía, personalidad, optimismo, valores y experiencia previa",
      "Apoyo=Ayuda emocional, práctica e informativa de pareja, familia, amigos e instituciones",
      "Estrategias=Modificar la situación, cambiar su significado y manejar el malestar"
    ],
    g: [
      "Para Schlossberg, lo decisivo de una transición es el ___ que produce el suceso.|cambio|estrés|sentido",
      "El ascenso que nunca llega es, según Schlossberg, un ___.|no-suceso|suceso fuera de tiempo|suceso anticipado",
      "El apoyo puede amortiguar el efecto del estrés, según Cohen y ___ (1985).|Wills|Folkman|Rahe",
      "Las versiones posteriores del modelo hablan de entrar en la transición, atravesarla y ___ de ella.|salir|aprender|recuperarse",
      "El valor del modelo de las 4 S es sobre todo ___, como guion en la orientación de adultos.|aplicado|predictivo|explicativo"
    ],
    tf: [
      "Según Schlossberg, una transición puede consistir en algo que no ocurre.|V",
      "El modelo de las 4 S permite predecir con precisión si una persona se adaptará bien a un cambio.|F|Describe dónde están los recursos y dónde conviene intervenir, pero no hace predicciones precisas.",
      "En el modelo de Schlossberg, la experiencia previa con cambios parecidos forma parte de la situación.|F|Forma parte de «uno mismo», junto con la salud, la economía, la personalidad, el optimismo y los valores.",
      "Mientras se atraviesa una transición, lo que parecía una pérdida puede integrarse después como un giro con sentido.|V"
    ],
    q: [
      "Marta, de 52 años, pierde su empleo y empieza a verlo como la ocasión de dejar un puesto que ya no le gustaba. ¿Qué función de las estrategias muestra?|Cambiar el significado|Modificar la situación|Manejar el malestar|Reinterpretar el despido cambia su significado. Apuntarse a un curso modificaría la situación, y caminar cada mañana manejaría el malestar.",
      "Que el despido de Marta coincida con la enfermedad de su madre se analiza en la S de…|situación|uno mismo|apoyo|La situación incluye si la transición coincide con otras fuentes de estrés, además del momento, el control y la duración.",
      "Un trabajador esperaba jubilarse en la fecha prevista, pero su jubilación se retrasa. Según Schlossberg, vive…|un no-suceso|una transición anticipada|una crisis situacional|Lo esperado que no llega, como la jubilación que se retrasa, también reorganiza la vida: es un no-suceso.",
      "¿Qué tipos de ayuda recoge la S de apoyo?|Emocional, práctica e informativa|Económica, sanitaria y jurídica|Familiar, laboral y comunitaria|El apoyo de pareja, familia, amigos, compañeros e instituciones puede ser emocional, práctico e informativo."
    ],
    inc: [
      "Sobre el modelo de Schlossberg|Las 4 S se evalúan por turnos, empezando por la situación|Una transición es un proceso que se extiende en el tiempo|Una transición puede ser algo esperado que no ocurre|Las cuatro S rodean a la transición y se evalúan a la vez, no una tras otra."
    ],
    seq: [
      "Momentos de una transición|Entrar en la transición>Atravesarla>Salir de ella"
    ],
    cls: [
      "Tipo de transición|Anticipada: terminar la carrera; casarse; jubilarse en la fecha prevista|No anticipada: despido; accidente; diagnóstico grave|No-suceso: ascenso que no llega; hijo que no se consigue; jubilación que se retrasa"
    ] },
  { t: "Sucesos vitales y estrés: de Holmes y Rahe a Lazarus",
    tip: "La SRRS de Holmes y Rahe (1967) reúne 43 sucesos vitales puntuados en unidades de cambio vital, con la muerte del cónyuge en 100. Mide cambio, no negatividad. Se le critica que ignora la valoración subjetiva y el contexto, y que deja fuera el estrés crónico. Para Lazarus y Folkman (1984), el estrés está en la relación entre persona y situación y depende de la valoración.",
    v: [
      "SRRS=Escala de 43 sucesos vitales puntuados en unidades de cambio vital",
      "Unidades de cambio vital=Peso asignado a cada suceso, con la muerte del cónyuge en 100",
      "Suceso vital=Acontecimiento concreto y fechable que altera la vida de una persona",
      "Reajuste=Esfuerzo de reorganización que, según Holmes y Rahe, exige todo cambio",
      "Modelo transaccional=El estrés no está en el suceso ni en la persona, sino en su relación",
      "Valoración primaria=Juicio sobre lo que está en juego: amenaza, pérdida o desafío",
      "Valoración secundaria=Evaluación de qué se puede hacer y con qué recursos se cuenta",
      "Afrontamiento centrado en la emoción=Intento de regular el malestar que produce una situación"
    ],
    g: [
      "El suceso de mayor peso en la SRRS es la muerte del cónyuge, con ___ unidades.|100|80|43",
      "En la SRRS, casarse suma puntos porque la escala mide el ___.|cambio|malestar|riesgo",
      "Cuidar durante años a un familiar dependiente es un estrés ___ que la SRRS deja fuera.|crónico|agudo|normativo",
      "El concepto central del modelo de Lazarus y Folkman es la ___.|valoración|adaptación|activación",
      "Ante una pérdida sin arreglo suele ayudar más el afrontamiento centrado en ___.|la emoción|el problema|la tarea"
    ],
    tf: [
      "La SRRS incluye acontecimientos felices, como casarse o irse de vacaciones.|V",
      "Para Lazarus y Folkman, el estrés reside en las características objetivas del suceso.|F|Está en la relación: hay estrés cuando la persona valora que las demandas superan sus recursos.",
      "El afrontamiento centrado en el problema es siempre más eficaz que el centrado en la emoción.|F|Ninguno es mejor en abstracto. Ante lo que no tiene arreglo, como una pérdida, suele ayudar más el centrado en la emoción.",
      "Una crítica a la SRRS es que suma por igual sucesos muy distintos.|V"
    ],
    q: [
      "Ante un traslado forzoso, Pedro piensa: «Puedo pedir teletrabajo dos días». Según Lazarus y Folkman, ¿qué proceso es?|Valoración secundaria|Valoración primaria|Afrontamiento emocional|Evaluar qué se puede hacer y con qué recursos se cuenta es la valoración secundaria.",
      "Para una persona su divorcio es una catástrofe, y para otra, un alivio. ¿Qué crítica a la SRRS ilustra?|Ignora la valoración subjetiva|Deja fuera el estrés crónico|Solo incluye sucesos negativos|Un mismo suceso no significa lo mismo para todos, algo que la escala no recoge.",
      "¿Cuántos sucesos incluye la SRRS de Holmes y Rahe (1967)?|43|100|36|La escala tiene 43 sucesos. El 100 es el peso de la muerte del cónyuge, el suceso de mayor valor.",
      "¿Qué idea de fondo sostenía la escala de Holmes y Rahe?|Acumular reajuste eleva el riesgo de enfermar|Solo los sucesos negativos causan enfermedad|El estrés depende de cómo se valora el suceso|Todo cambio exige reajuste, y acumular mucho en poco tiempo aumenta el riesgo de enfermar."
    ],
    inc: [
      "Sobre los sucesos vitales y el estrés|La SRRS recoge la valoración que la persona hace del suceso|La SRRS suma puntos de sucesos positivos y negativos|Lazarus y Folkman distinguen afrontamiento del problema y de la emoción|La SRRS ignora la valoración subjetiva: no recoge que un mismo suceso signifique cosas distintas para cada persona."
    ],
    seq: [],
    cls: [
      "Proceso según Lazarus y Folkman|Valoración primaria: qué está en juego; amenaza, pérdida o desafío|Valoración secundaria: qué puedo hacer; con qué recursos cuento"
    ] },
  { t: "Crisis y reloj social",
    tip: "Caplan (1964) definió la crisis como un desequilibrio transitorio que aparece cuando los recursos habituales de afrontamiento no bastan, y distinguió crisis de desarrollo y situacionales. Neugarten propuso el reloj social: los sucesos fuera de tiempo suelen ser más estresantes. El reloj cambia con la época y Hagestad (1990) subrayó las vidas interconectadas. La crisis universal de los cuarenta es un mito.",
    v: [
      "Crisis=Desequilibrio transitorio cuando los recursos habituales de afrontamiento no bastan",
      "Crisis de desarrollo=Ligada a cambios esperables del ciclo vital, como el primer hijo",
      "Crisis situacional=Desencadenada por un suceso imprevisto, como un accidente o un incendio",
      "Reloj social=Calendario compartido de expectativas sobre la edad adecuada para cada suceso",
      "Edad social=Posición que se ocupa según los roles que se desempeñan",
      "Suceso a tiempo=Ocurre cuando se espera y suele vivirse junto a personas de la misma edad",
      "Suceso fuera de tiempo=Llega antes o después de lo esperado y suele ser más estresante",
      "Vidas interconectadas=El suceso de un familiar repercute en el calendario de los demás"
    ],
    g: [
      "Caplan definió la crisis en ___.|1964|1973|1990",
      "El reloj social define la edad ___, distinta de la cronológica.|social|biológica|funcional",
      "Enviudar a los 35 años es, según Neugarten, un suceso ___.|fuera de tiempo|a tiempo|anticipado",
      "Según Caplan, una crisis termina en un nuevo ___, que puede ser mejor, igual o peor.|equilibrio|conflicto|estadio",
      "La idea de la crisis como oportunidad enlaza con ___, para quien resolver cada etapa fortalece el yo.|Erikson|Levinson|Neugarten"
    ],
    tf: [
      "El reloj social es un calendario fijo, igual en todas las épocas y países.|F|Cambia con la época y el país: en España la edad media de emancipación ronda los 30,2 años, frente a 26,3 en la UE.",
      "El concepto de reloj social se debe a Levinson.|F|Es de Bernice Neugarten. Levinson describió las estructuras de vida.",
      "Los sucesos fuera de tiempo suelen ser más estresantes porque no se han anticipado y faltan compañeros en la misma situación.|V",
      "Según Hagestad (1990), el retraso en la emancipación de un hijo retrasa también el «nido vacío» de sus padres.|V"
    ],
    q: [
      "Laura enviuda a los 35 años, con dos hijos pequeños. Según Neugarten, ¿por qué suele ser más duro que enviudar a los 80?|Porque es un suceso fuera de tiempo|Porque es una crisis de desarrollo|Porque es una transición anticipada|Llega antes de lo esperado: no se ha anticipado y no hay compañeros de edad con la misma experiencia.",
      "La llegada del primer hijo y un incendio en casa son, según Caplan, respectivamente…|crisis de desarrollo y situacional|crisis situacional y de desarrollo|sucesos a tiempo y no-sucesos|El primer hijo es un cambio esperable del ciclo vital, y el incendio, un suceso imprevisto.",
      "Según Caplan (1964), ¿qué define a una crisis?|Recursos habituales que no bastan|Un suceso que llega fuera de tiempo|Una suma alta de cambios vitales|Es un desequilibrio transitorio que aparece cuando los recursos habituales de afrontamiento no bastan.",
      "El divorcio de una hija convierte de forma imprevista a sus padres en cuidadores de sus nietos. ¿Qué concepto lo describe?|Vidas interconectadas|Reloj social desplazado|Crisis de desarrollo|Hagestad (1990) señaló que los relojes de una familia están sincronizados: el suceso de uno repercute en los demás."
    ],
    inc: [
      "Sobre los sucesos a tiempo y fuera de tiempo|Los sucesos a tiempo suelen vivirse sin compañeros de edad|Los fuera de tiempo llegan antes o después de lo esperado|Los sucesos a tiempo se anticipan y se preparan|Los sucesos a tiempo suelen vivirse junto a personas de la misma edad que pasan por lo mismo."
    ],
    seq: [],
    cls: [
      "Tipo de crisis según Caplan|De desarrollo: llegada del primer hijo; jubilación|Situacional: accidente; incendio; enfermedad repentina"
    ] },
  { t: "Havighurst: qué se espera de cada edad",
    tip: "Havighurst (1948, 1953) definió la tarea evolutiva como un reto propio de un periodo vital cuya resolución aporta bienestar y prepara para las siguientes. Las tareas proceden de la maduración física, la presión cultural y los valores personales. Su lista refleja la sociedad estadounidense de mediados del siglo XX. Havighurst es también autor de la teoría de la actividad, no de la desvinculación.",
    v: [
      "Tarea evolutiva=Reto de un periodo vital cuya resolución prepara para los siguientes",
      "Tarea no resuelta=Produce malestar, desaprobación social y dificultades posteriores",
      "Maduración física=Fuente de tareas como aprender a andar o aceptar el cuerpo en la mediana edad",
      "Presión cultural=Fuente de tareas basada en lo que la sociedad espera de cada edad",
      "Valores personales=Fuente de tareas como elegir una profesión o un estilo de vida propio",
      "Teoría de la actividad=Se envejece mejor manteniendo la actividad y los roles (Havighurst, 1961)",
      "Teoría de la desvinculación=Propuesta de Cumming y Henry (1961), que no es de Havighurst",
      "Generación sándwich=Adultos que atienden a la vez a hijos y a padres que envejecen"
    ],
    g: [
      "Según Havighurst, las tareas proceden de la maduración física, la presión cultural y los ___ personales.|valores|recursos|apoyos",
      "«Adaptarse a unos padres que envejecen» es una tarea de la adultez ___.|media|temprana|emergente",
      "«Adaptarse a la viudedad» es, para Havighurst, una tarea de la ___.|vejez|adultez media|adultez temprana",
      "«Elegir pareja y aprender a convivir» es una tarea de la adultez ___.|temprana|media|tardía",
      "La teoría de la desvinculación es de Cumming y ___ (1961).|Henry|Havighurst|Neugarten"
    ],
    tf: [
      "Havighurst es autor de la teoría de la desvinculación.|F|Es autor de la teoría de la actividad (1961). La desvinculación es de Cumming y Henry (1961).",
      "Las tareas evolutivas describen lo que una sociedad concreta espera que ocurra, no lo que debe ocurrir.|V",
      "La lista de Havighurst refleja trayectorias diversas, con cambios de profesión y vuelta a los estudios.|F|Refleja la sociedad estadounidense de mediados del siglo XX, con trayectoria lineal y roles de género tradicionales.",
      "Según Havighurst, no resolver una tarea evolutiva produce malestar y dificulta las tareas siguientes.|V"
    ],
    q: [
      "Jorge, de 46 años, cuida de su padre con alzhéimer mientras su hija empieza la universidad. ¿En qué periodo de Havighurst se sitúan sus tareas?|Adultez media|Adultez temprana|Vejez|«Ayudar a los hijos a hacerse adultos» y «adaptarse a unos padres que envejecen» son tareas de la adultez media.",
      "«Aprender a andar» y «adaptarse a los cambios del cuerpo en la mediana edad» proceden, según Havighurst, de…|la maduración física|la presión cultural|los valores personales|La maduración física es una de las tres fuentes de tareas, junto con la presión cultural y los valores personales.",
      "Un examen atribuye a Havighurst la idea de que envejecer bien exige retirarse de los roles sociales. ¿Qué error comete?|Confunde actividad y desvinculación|Confunde tareas y reloj social|Confunde Havighurst con Erikson|Havighurst defendió la teoría de la actividad. La retirada de roles es la desvinculación de Cumming y Henry.",
      "¿Qué explica, según Havighurst, que las personas de una misma cultura sigan trayectorias parecidas?|Comparten un calendario de tareas|Comparten la misma maduración|Comparten los mismos valores|Las tareas son en buena parte expectativas sociales compartidas, en la línea del reloj social."
    ],
    inc: [
      "Sobre las tareas evolutivas de Havighurst|Son universales e independientes de la época|Proceden de tres fuentes, una de ellas la cultura|Organizan el ciclo vital como logros esperados|Reflejan lo que una sociedad concreta espera, y esas expectativas cambian con la época."
    ],
    seq: [],
    cls: [
      "Periodo de Havighurst|Adultez temprana: elegir pareja; iniciar una ocupación; criar a los hijos|Adultez media: mantener un nivel de vida estable; aceptar los cambios físicos; adaptarse a padres que envejecen|Vejez: adaptarse a la jubilación; adaptarse a la viudedad; relacionarse con personas de la propia edad"
    ] }
] },
{ n: 6, t: "Qué es ser una persona madura", cap: 3, pir: "media", mods: [
  { t: "Tres maneras de entender la madurez",
    tip: "La madurez psicológica no coincide con la edad y es un proceso, no un punto de llegada. Se estudia desde tres perspectivas: la lega (teorías implícitas), la fenomenológica (experiencia subjetiva) y la científica (modelos y datos). Jahoda (1958) defendió que la salud mental es presencia de cualidades positivas. Zacarés y Serra propusieron una concepción integradora de las tres.",
    v: [
      "Perspectiva lega=Estudia las teorías implícitas de personas sin formación psicológica",
      "Perspectiva fenomenológica=Estudia cómo vive cada persona su propio proceso de maduración",
      "Perspectiva científica=Define la madurez con conceptos precisos y comprueba sus componentes",
      "Teorías implícitas=Ideas cotidianas que asocian la madurez a la responsabilidad y la sensatez",
      "Salud mental positiva=Tradición de Jahoda (1958): presencia de cualidades, no solo ausencia de trastorno",
      "Concepción integradora=Propuesta de Zacarés y Serra que combina las tres perspectivas",
      "Modelos cognitivo-evolutivos=Madurez como forma cada vez más compleja de dar sentido, como en Loevinger",
      "Modelos humanistas=Madurez como crecimiento y autorrealización, en la línea de Rogers y Maslow"
    ],
    g: [
      "Preguntar «¿cuándo y por qué sientes que has madurado?» es propio de la perspectiva ___.|fenomenológica|lega|científica",
      "La perspectiva fenomenológica enlaza con la identidad ___ de McAdams.|narrativa|social|moral",
      "Jahoda defendió en ___ que la salud psicológica no es solo ausencia de trastorno.|1958|1961|1976",
      "Los criterios de Allport y las dimensiones de Ryff pertenecen a los enfoques de ___ y dimensiones.|rasgos|etapas|valores",
      "La madurez no es un punto de llegada, sino un ___ que puede avanzar, estancarse o retroceder.|proceso|estado|rasgo"
    ],
    tf: [
      "La madurez psicológica avanza con la edad de forma lineal hasta alcanzar un estado final.|F|Es un proceso que puede avanzar, estancarse o retroceder, y no coincide con la edad.",
      "Las tres perspectivas compiten entre sí, y la científica acaba sustituyendo a las otras dos.|F|No compiten: una definición científica que ignore qué entiende la gente por madurar, o cómo lo vive, queda incompleta.",
      "Las creencias legas sobre la madurez importan porque orientan lo que cada uno espera de sí mismo y de los demás.|V",
      "Los momentos que las personas identifican como puntos de maduración suelen ser transiciones difíciles.|V"
    ],
    q: [
      "Un estudio pregunta a la población general qué entiende por ser una persona madura. ¿Qué perspectiva adopta?|Lega|Fenomenológica|Científica|Recoge las teorías implícitas sobre la madurez de personas sin formación psicológica.",
      "Un joven cree que madurar consiste en «no sufrir» y vive cada tristeza como un fracaso. ¿Qué ilustra?|El peso de las teorías implícitas|El sesgo de la perspectiva científica|Un estadio conformista del yo|Las creencias legas orientan lo que cada uno espera de sí mismo.",
      "¿Qué autores defendieron una concepción integradora de la madurez?|Zacarés y Serra|Ryff y Keyes|Costa y McCrae|Propusieron tener en cuenta a la vez las perspectivas lega, fenomenológica y científica.",
      "¿Qué enfoque entiende la madurez como resultado de resolver tensiones a lo largo de la vida?|Los modelos de etapas del yo|Los modelos de autorrealización|Los enfoques de rasgos medibles|Es el caso de Erikson, en el que cada etapa plantea una tensión que hay que resolver."
    ],
    inc: [
      "Sobre las perspectivas de la madurez|La lega se basa en modelos teóricos y datos empíricos|La fenomenológica se centra en la experiencia subjetiva|La científica incluye enfoques de rasgos y dimensiones|Los modelos y los datos definen la perspectiva científica. La lega recoge las creencias cotidianas."
    ],
    seq: [],
    cls: [
      "Perspectiva sobre la madurez|Lega: teorías implícitas; «sabe lo que quiere»|Fenomenológica: experiencia subjetiva; «maduré al cuidar de mi padre»|Científica: modelos y datos; dimensiones de Ryff"
    ] },
  { t: "Rasgos de la persona madura",
    tip: "Allport (1961) propuso siete criterios de madurez que combinan lo emocional, lo cognitivo y lo moral o existencial. Descripciones posteriores añaden autoconocimiento, autorregulación, responsabilidad, autonomía, empatía y flexibilidad. La madurez no es conformismo ni ausencia de malestar, y se juzga por cómo se decide. Con la edad aumentan por término medio la responsabilidad y la estabilidad emocional.",
    v: [
      "Extensión del sentido del yo=Implicarse en actividades, personas e ideas más allá de uno mismo",
      "Relación cálida con los demás=Capacidad de intimidad y de compasión, respetando al otro",
      "Seguridad emocional=Aceptarse y tolerar la frustración sin desbordarse",
      "Percepción realista=Ver las cosas como son, no como se desearía que fueran",
      "Autoobjetivación=Conocerse con realismo, con sentido del humor sobre uno mismo",
      "Filosofía unificadora de la vida=Conjunto de valores que da dirección y sentido",
      "Habilidades y dedicación a tareas=Tener competencias y comprometerse con un trabajo",
      "Autoconocimiento=Saber cuáles son las propias fortalezas, límites y valores"
    ],
    g: [
      "Allport propuso ___ criterios de madurez en 1961.|siete|seis|cinco",
      "Reírse de las propias manías ilustra el criterio de ___.|autoobjetivación|seguridad emocional|percepción realista",
      "Reconocer que un negocio no funciona y cerrarlo a tiempo ilustra la ___.|percepción realista|seguridad emocional|autoobjetivación",
      "El principio de madurez lo describieron Caspi, Roberts y ___ (2005).|Shiner|Walton|Viechtbauer",
      "La madurez se juzga por ___ se decide, no por qué se decide.|cómo|cuándo|dónde"
    ],
    tf: [
      "Para Allport, la madurez es un rasgo único que puede medirse con una sola escala.|F|Es un conjunto de cualidades que combinan lo emocional, lo cognitivo y lo moral o existencial.",
      "Ser maduro consiste en ajustarse a lo que se espera de cada edad.|F|Madurez no es conformismo: es manejar la propia vida con criterio, a veces en contra de lo esperado.",
      "Una persona madura también sufre, duda y se equivoca.|V",
      "La flexibilidad, adaptarse a los cambios y tolerar la incertidumbre, figura entre los componentes de la madurez propuestos tras Allport.|V"
    ],
    q: [
      "Lucía, de 34 años, rechaza un ascenso que la alejaría de su pareja y de su madre enferma, y sus compañeros lo ven como falta de ambición. Desde Allport, ¿qué muestra?|Percepción realista de sus prioridades|Falta de dedicación a sus tareas laborales|Poca extensión del sentido del yo|Muestra percepción realista y una filosofía de vida coherente. La madurez se juzga por cómo se decide, no por qué se decide.",
      "¿Qué componente de la madurez consiste en decidir con criterio propio sin depender en exceso de la aprobación ajena?|Autonomía|Autorregulación|Responsabilidad|La autorregulación es manejar emociones e impulsos, y la responsabilidad, asumir las consecuencias de las propias decisiones.",
      "¿Qué criterio de Allport se ilustra al escuchar a un amigo sin intentar arreglarle la vida?|Relación cálida con los demás|Extensión del sentido del yo|Seguridad emocional|Es capacidad de intimidad y de compasión, respetando al otro.",
      "Comprometerse con un voluntariado ilustra, en Allport, el criterio de…|extensión del sentido del yo|habilidades y dedicación a tareas|filosofía unificadora|Supone implicarse en actividades, personas e ideas más allá de uno mismo."
    ],
    inc: [
      "Sobre la persona madura|La madurez equivale a ausencia de malestar|La madurez no es conformismo con lo esperado|La madurez se juzga por cómo se decide|Una persona madura también sufre y se equivoca: lo que cambia es cómo integra esas experiencias."
    ],
    seq: [],
    cls: [
      "Componente en los criterios de Allport|Emocional: seguridad emocional; calidez|Cognitivo: percepción realista; autoconocimiento|Moral o existencial: valores; compromiso"
    ] },
  { t: "Medir la madurez y el bienestar",
    tip: "Ryff (1989) sintetizó descripciones de madurez y autorrealización en seis dimensiones del bienestar psicológico: autoaceptación, relaciones positivas, autonomía, dominio del entorno, propósito en la vida y crecimiento personal. Es bienestar eudaimónico, distinto del hedónico. En MIDUS el patrón con la edad es multidireccional. No debe confundirse con el bienestar social de Keyes.",
    v: [
      "Autoaceptación=Actitud positiva hacia uno mismo, aceptando lo bueno y lo malo",
      "Relaciones positivas=Vínculos cálidos, de confianza y con capacidad de intimidad",
      "Autonomía=Independencia y capacidad de guiarse por criterios propios",
      "Dominio del entorno=Sentirse capaz de gestionar las exigencias de la vida diaria",
      "Propósito en la vida=Tener metas y la sensación de que la existencia tiene dirección",
      "Crecimiento personal=Sentir que uno sigue desarrollándose, abierto a nuevas experiencias",
      "Bienestar eudaimónico=El que procede de funcionar bien y desarrollar el propio potencial",
      "Bienestar hedónico=Satisfacción con la vida y más emociones positivas que negativas"
    ],
    g: [
      "El modelo de Ryff tiene ___ dimensiones.|seis|siete|cinco",
      "La adaptación española de las escalas de Ryff es de Díaz et al. (___).|2006|1995|2008",
      "En MIDUS, la autonomía y el dominio del entorno tienden a ___ con la edad.|mantenerse|bajar|subir",
      "Integración, contribución y aceptación social pertenecen al bienestar social de ___.|Keyes|Ryff|Jahoda",
      "El descenso del propósito en la vejez puede reflejar menos ___ sociales más que un límite psicológico.|oportunidades|capacidades|necesidades"
    ],
    tf: [
      "En MIDUS, todas las dimensiones de Ryff descienden con la edad.|F|El patrón es multidireccional: propósito y crecimiento bajan, y autonomía y dominio del entorno se mantienen.",
      "Las escalas de Ryff se diseñaron como una medida de madurez.|F|Se diseñaron para medir el bienestar psicológico, a partir de descripciones de madurez y desarrollo adulto.",
      "Varios estudios hallan que las seis dimensiones de Ryff no siempre aparecen separadas en los datos.|V",
      "El modelo de Ryff partió de autores como Allport, Rogers, Maslow, Jahoda y Erikson.|V"
    ],
    q: [
      "Una mujer de 78 años siente que ya no tiene metas, aunque gestiona bien su vida diaria. Según Ryff y Singer (2008), ¿qué patrón refleja?|El esperable en MIDUS con la edad|Un declive general del bienestar|Un fallo en el dominio del entorno|El propósito tiende a bajar en la vejez, mientras que el dominio del entorno se mantiene.",
      "¿Cuál de estas es una dimensión del modelo de Ryff?|Dominio del entorno|Contribución social|Satisfacción vital|La contribución social es de Keyes, y la satisfacción con la vida corresponde al bienestar hedónico.",
      "¿Qué distingue al bienestar eudaimónico del hedónico?|Se basa en funcionar bien y desarrollarse|Se basa en la satisfacción con la vida|Se basa en el predominio de emociones positivas|El hedónico o subjetivo se refiere a la satisfacción y al balance emocional. Ryff representa el eudaimónico.",
      "¿Qué principio del ciclo vital ilustran los datos de MIDUS sobre las dimensiones de Ryff?|Multidireccionalidad|Multidimensionalidad|Plasticidad|Unas dimensiones del bienestar se conservan mientras otras disminuyen con la edad."
    ],
    inc: [
      "Sobre el modelo de Ryff|Incluye la integración y la contribución social|Representa el bienestar eudaimónico|Presenta problemas de estructura factorial|Integración y contribución pertenecen al bienestar social de Keyes, un modelo distinto."
    ],
    seq: [],
    cls: [
      "Trayectoria con la edad en MIDUS|Tienden a bajar: propósito en la vida; crecimiento personal|Tienden a mantenerse: autonomía; dominio del entorno"
    ] },
  { t: "Otros instrumentos y sus límites",
    tip: "El WUSCT de Loevinger (1976) evalúa el estadio de desarrollo del yo con frases incompletas y exige corrección experta: no es un cuestionario de rasgos. El NEO PI-R mide los cinco grandes y no la madurez, el PSYMAS se diseñó para adolescentes y jóvenes, y el CCM-2 y el CRPM-2 carecen de propiedades verificadas. Deseabilidad social, sesgo cultural, circularidad y solapamiento con el bienestar limitan estas medidas.",
    v: [
      "WUSCT=Prueba de frases incompletas que evalúa el estadio de desarrollo del yo",
      "Estadio conformista=Forma de desarrollo del yo que se guía por las normas del grupo",
      "NEO PI-R=Inventario de Costa y McCrae (1992) de los cinco grandes factores",
      "PSYMAS=Cuestionario de madurez psicosocial para adolescentes y jóvenes",
      "CCM-2=Cuestionario de Zacarés y Serra sobre las creencias acerca de la madurez",
      "CRPM-2=Cuestionario de Zacarés y Serra centrado en los rasgos de la persona madura",
      "Deseabilidad social=Tendencia a responder lo que se considera maduro",
      "Circularidad=Riesgo de que la escala mida solo lo que su autor entendía por madurez"
    ],
    g: [
      "El WUSCT es una prueba ___ que exige corrección experta.|semiproyectiva|de autoinforme|de rasgos",
      "El PSYMAS es de Graña, Andreu y ___.|Peña|Serra|Díaz",
      "La baja puntuación en ___ del NEO PI-R se relaciona con lo que suele llamarse personalidad madura.|neuroticismo|responsabilidad|amabilidad",
      "Que la autonomía se valore más en culturas individualistas es un ejemplo de sesgo ___.|cultural|social|factorial",
      "En la práctica se recomienda combinar los cuestionarios con entrevistas y ___.|observación|neuroimagen|autoinformes"
    ],
    tf: [
      "El WUSCT de Loevinger es un cuestionario de rasgos con opciones de respuesta.|F|Es una prueba semiproyectiva de frases incompletas cuyas respuestas se clasifican según el estadio del yo.",
      "El PSYMAS es adecuado para evaluar la madurez en adultos de mediana edad.|F|Se diseñó para adolescentes y jóvenes, no para adultos de mediana edad o mayores.",
      "El NEO PI-R no es una medida de madurez, aunque algunos de sus factores se relacionan con ella.|V",
      "Las propiedades psicométricas del CCM-2 y el CRPM-2 no se han podido verificar en la literatura revisada.|V"
    ],
    q: [
      "Una investigadora quiere conocer el estadio de desarrollo del yo de un grupo de adultos. ¿Qué instrumento le conviene?|El WUSCT de Loevinger|El NEO PI-R|Las escalas de Ryff|El WUSCT clasifica las respuestas a frases inacabadas según el estadio del yo que reflejan.",
      "Un participante se describe como «muy maduro» en todos los ítems de un autoinforme. ¿Qué límite conviene tener en cuenta?|La deseabilidad social|El solapamiento con bienestar|La circularidad de la escala|Es fácil responder lo que se considera maduro, y quien se describe así no siempre lo es.",
      "¿Qué explora el CCM-2 de Zacarés y Serra?|Las creencias sobre la madurez|Los rasgos de la persona madura|El estadio de desarrollo del yo|El CCM-2 corresponde a la perspectiva lega. El CRPM-2 se centra en los rasgos de la persona madura.",
      "¿Con qué teoría no debe confundirse la de Loevinger, aunque ambas describan una complejidad creciente?|Los órdenes de Kegan|Las dimensiones de Ryff|Los criterios de Allport|Los órdenes de conciencia de Kegan también describen una complejidad creciente, pero son una teoría distinta."
    ],
    inc: [
      "Sobre los instrumentos de madurez|El NEO PI-R es la medida de referencia de la madurez|El WUSCT exige corrección experta|El PSYMAS se diseñó para adolescentes y jóvenes|El NEO PI-R mide los cinco grandes factores, no la madurez, aunque algunos se relacionen con ella."
    ],
    seq: [],
    cls: [
      "Población del instrumento|Adultos: escalas de Ryff; NEO PI-R|Adolescentes y jóvenes: PSYMAS|Adolescentes y adultos: WUSCT"
    ] }
] },
{ n: 7, t: "Los años entre medias: la adultez emergente", cap: 4, pir: "media", mods: [
  { t: "Arnett y una nueva etapa vital",
    tip: "Arnett (2000) propuso en American Psychologist la adultez emergente, un periodo propio entre la adolescencia y la adultez temprana, de 18 a 25 años y ampliado después a 29. No es una adolescencia alargada ni una adultez incompleta. Detrás están la prolongación de los estudios y el retraso del matrimonio y del empleo estable. Los jóvenes definen la adultez por criterios individuales de autonomía.",
    v: [
      "Adultez emergente=Etapa propia entre la adolescencia y la adultez temprana (Arnett, 2000)",
      "Criterios individuales=Responsabilizarse de uno mismo, decidir solo y lograr independencia económica",
      "Hitos tradicionales=Casarse o tener hijos, poco valorados por los jóvenes para ser adulto",
      "Moratoria psicosocial=Margen social para probar papeles antes de comprometerse (Erikson, 1968)",
      "Estatus de identidad=Combinaciones de exploración y compromiso descritas por Marcia (1966)",
      "Roles provisionales=Papeles cambiantes de estos años, frente a los más estables que llegan después",
      "Prolongación de los estudios=Cambio social que, junto al retraso del matrimonio, explica la etapa",
      "Intimidad frente a aislamiento=Crisis eriksoniana propia de la adultez joven"
    ],
    g: [
      "Arnett publicó su propuesta en ___ en American Psychologist.|2000|2004|1968",
      "Arnett situó inicialmente la etapa entre los 18 y los ___ años.|25|29|21",
      "La adultez emergente es posterior a la adolescencia y anterior a la adultez ___.|temprana|media|plena",
      "Erikson llamó ___ psicosocial al margen para probar papeles antes de comprometerse.|moratoria|identidad|exploración",
      "Lo nuevo de Arnett fue situar la moratoria ___ de la adolescencia, no dentro de ella.|después|antes|en medio"
    ],
    tf: [
      "Para Arnett, la adultez emergente es una adolescencia alargada.|F|Es un periodo propio, distinto tanto de la adolescencia como de la adultez temprana.",
      "Los jóvenes consideran que casarse y tener hijos son los criterios más importantes para ser adulto.|F|Valoran criterios individuales: responsabilizarse de uno mismo, decidir de forma independiente y ser económicamente independiente.",
      "Arnett presenta los cambios demográficos como un tiempo con contenido psicológico propio, no como un simple retraso.|V",
      "Al preguntarles si se sienten adultos, muchos jóvenes responden que en algunos aspectos sí y en otros no.|V"
    ],
    q: [
      "Lucía, de 24 años, comparte piso y tiene un contrato temporal. Dice sentirse adulta porque paga sus gastos y decide por sí misma. ¿Qué ilustra?|Los criterios individuales de adultez|Los hitos tradicionales de adultez|Una adolescencia prolongada|Para muchos jóvenes, ser adulto es ser autónomo, no casarse.",
      "¿A quién se debe el concepto de adultez emergente?|A Arnett|A Erikson|A Levinson|Arnett lo propuso en 2000. Erikson habló de moratoria psicosocial, y Levinson, de estructuras de vida.",
      "Frente a la adultez temprana, la vivienda en la adultez emergente se caracteriza por ser…|variable, con idas y vueltas|el hogar propio con frecuencia|siempre el hogar de origen|Se vive con la familia, en piso compartido o con idas y vueltas. El hogar propio es más frecuente después.",
      "¿En qué se diferencia la propuesta de Arnett de la moratoria de Erikson?|La convierte en etapa tras la adolescencia|La sitúa dentro de la adolescencia tardía|La limita a la crisis de intimidad|Arnett convierte la moratoria en una etapa del ciclo vital con rasgos medibles, posterior a la adolescencia."
    ],
    inc: [
      "Sobre la adultez emergente según Arnett|Es la primera fase de la adultez temprana|Se sitúa entre la adolescencia y la adultez temprana|Su rango se ha ampliado hasta los 29 años|Arnett la distingue tanto de la adolescencia como de la adultez temprana: es un periodo propio."
    ],
    seq: [],
    cls: [
      "Etapa vital|Adolescencia: minoría de edad; roles escolares y familiares; no se siente adulto|Adultez emergente: roles provisionales; vivienda variable; se siente adulto en parte|Adultez temprana: roles más estables; hogar propio más frecuente; se siente adulto"
    ] },
  { t: "Cinco rasgos de los adultos emergentes",
    tip: "Arnett (2004) describió cinco rasgos: exploración de la identidad, inestabilidad, centrarse en uno mismo, sentirse entre medias y posibilidades. No son requisitos, sino tendencias más frecuentes en estos años. La exploración, rasgo nuclear, abarca el amor, el trabajo y la visión del mundo, y centrarse en uno mismo no es egoísmo. La etapa también conlleva conductas de riesgo e incertidumbre.",
    v: [
      "Exploración de la identidad=Probar opciones en amor, trabajo y visión del mundo antes de comprometerse",
      "Inestabilidad=Cambios frecuentes de pareja, empleo y residencia",
      "Centrarse en uno mismo=Periodo con pocas obligaciones hacia otros que permite aprender a valerse solo",
      "Sentirse entre medias=Percibirse adulto en unos aspectos y no en otros",
      "Posibilidades=Optimismo y sensación de que el futuro sigue abierto",
      "Visión del mundo=Creencias religiosas, políticas y morales que se revisan al salir del entorno familiar",
      "Cambiar de rumbo=Oportunidad de decidir distinto para quien creció en una familia con problemas",
      "Arnett (2004)=Obra en la que la etapa se concretó en cinco rasgos"
    ],
    g: [
      "Arnett concretó la etapa en cinco rasgos en ___.|2004|2000|1966",
      "El rasgo nuclear de la adultez emergente es la exploración de la ___.|identidad|autonomía|intimidad",
      "Vivir en tres pisos compartidos en cuatro años ilustra la ___.|inestabilidad|exploración|posibilidad",
      "Elegir destino de Erasmus sin consultar a nadie ilustra el rasgo de centrarse en ___.|uno mismo|el trabajo|el futuro",
      "En estos años el cuerpo alcanza su máximo rendimiento ___, pero abundan las conductas de riesgo.|físico|cognitivo|social"
    ],
    tf: [
      "En la descripción de Arnett, centrarse en uno mismo equivale a egoísmo.|F|Significa tener pocas obligaciones hacia otros, lo que permite aprender a valerse por uno mismo.",
      "Los cinco rasgos de Arnett son requisitos que debe cumplir cada adulto emergente.|F|Son tendencias que aparecen con más frecuencia en estos años que en cualquier otro momento, no requisitos.",
      "La inestabilidad de estos años no indica por sí misma un problema, porque es en buena parte consecuencia de explorar.|V",
      "La mayoría de los adultos emergentes mantiene expectativas altas sobre su futuro, incluso con un presente precario.|V"
    ],
    q: [
      "Rubén, de 23 años, paga su alquiler, pero cada domingo vuelve a comer a casa de sus padres y dice que «aún no es adulto del todo». ¿Qué rasgo ilustra?|Sentirse entre medias|Inestabilidad|Centrarse en uno mismo|Percibirse adulto en unos aspectos y no en otros define el rasgo de sentirse entre medias.",
      "Clara deja su carrera tras un año de prácticas porque no encaja con quien quiere ser. ¿Qué rasgo ilustra?|Exploración de la identidad|Centrarse en uno mismo|Sentirse entre medias|Probar opciones en el trabajo antes de comprometerse es exploración de la identidad, el rasgo nuclear.",
      "¿Qué tres ámbitos abarca la exploración de la identidad?|Amor, trabajo y visión del mundo|Familia, estudios y amistades|Pareja, vivienda y tiempo libre|La exploración abarca las relaciones de pareja, el trabajo y las creencias religiosas, políticas y morales.",
      "¿Qué rasgo ofrece a quienes crecieron en familias con problemas la oportunidad de cambiar de rumbo?|Posibilidades|Exploración de la identidad|Inestabilidad|Con el optimismo sobre el futuro, estos años permiten tomar decisiones distintas de las del entorno de origen."
    ],
    inc: [
      "Sobre los rasgos de Arnett|La inestabilidad indica por sí misma un problema|La exploración abarca la visión del mundo|La libertad de elegir puede generar malestar|La inestabilidad es en buena parte consecuencia de explorar y no indica por sí misma un problema."
    ],
    seq: [],
    cls: [] },
  { t: "Críticas: ¿etapa universal o efecto de época?",
    tip: "Se critica el sesgo de clase y de país rico, aunque el propio Arnett limita la etapa a culturas que permiten aplazar los roles adultos. Además, por la historicidad de Baltes (1987), podría ser un efecto de época propio de ciertas cohortes. Y llamar exploración a la precariedad puede embellecerla. Está establecido que las transiciones se han retrasado y desordenado, pero su interpretación se discute.",
    v: [
      "Sesgo de clase=Generalizar la experiencia de jóvenes de clase media, muchos universitarios",
      "Historicidad=Principio de Baltes: el desarrollo depende del momento histórico en que se vive",
      "Efecto de época=Cambio atribuible a las condiciones históricas de una cohorte, no a la edad",
      "Aplazar los roles adultos=Condición cultural que, según Arnett, permite que exista la etapa",
      "Estudio transversal=Compara grupos de edad en un único momento sin separar edad y generación",
      "Restricciones económicas=Retrasan las transiciones aunque los jóvenes quieran hacerlas",
      "Precariedad=Encadenar contratos temporales y no poder pagar un alquiler",
      "Transiciones desordenadas=Se suceden en un orden menos previsible que en generaciones anteriores"
    ],
    g: [
      "La crítica del efecto de cohorte se apoya en el principio de ___ de Baltes.|historicidad|plasticidad|multidimensionalidad",
      "Los estudios ___ no pueden separar el efecto de la edad del de la generación.|transversales|longitudinales|experimentales",
      "Las primeras descripciones de Arnett se basaban sobre todo en jóvenes de clase ___.|media|alta|obrera",
      "Cambiar de empleo cada pocos meses no es lo mismo cuando se elige que cuando se ___.|padece|planifica|aplaza",
      "Está establecido que, en los países ricos, las transiciones a la adultez se han retrasado y ___.|desordenado|acortado|acelerado"
    ],
    tf: [
      "Arnett presentó la adultez emergente como un rasgo universal de la especie.|F|La presentó como algo que solo existe en las culturas que permiten aplazar los roles adultos.",
      "Que las transiciones a la adultez se hayan retrasado en los países ricos es un dato bien establecido.|V",
      "Si la adultez emergente fuera un efecto de época, podría cambiar cuando cambien las condiciones que la producen.|V",
      "Hay consenso en que la adultez emergente es una etapa del desarrollo comparable a la adolescencia.|F|Se debate si es una etapa con entidad propia o un fenómeno de cohorte ligado a ciertas condiciones históricas."
    ],
    q: [
      "Andrés y Marta tienen 27 años y viven con sus padres. Él rechaza ofertas para probar suerte como diseñador, y ella encadena contratos de tres meses. ¿En quién cabe hablar con propiedad de exploración?|Solo en Andrés|Solo en Marta|En los dos|La inestabilidad de Marta responde a restricciones económicas, no a una búsqueda elegida.",
      "Una joven trabaja desde los 15 años y cuida de sus hermanos. ¿Qué crítica a Arnett ilustra su caso?|El sesgo de clase y de país rico|El efecto de cohorte o de época|La exploración como precariedad|En los sectores con menos recursos las responsabilidades adultas llegan pronto y el margen de exploración es estrecho.",
      "¿Qué postura sostiene que la etapa tiene rasgos psicológicos propios y medibles?|La favorable a la etapa|La crítica de la cohorte|La crítica de la clase social|La postura crítica replica que podría ser un efecto de cohorte o de época, y no una etapa del desarrollo.",
      "¿Por qué un estudio transversal no basta para decidir si la adultez emergente es una etapa?|No separa la edad de la generación|No mide los cinco rasgos de Arnett|No incluye a jóvenes de clase media|Compara grupos de edad en un único momento, de modo que confunde el efecto de la edad con el de la cohorte."
    ],
    inc: [
      "Sobre las críticas a la adultez emergente|Las críticas anulan por completo el concepto|Se discute qué parte es exploración y qué parte precariedad|Se discute si es una etapa o un fenómeno de cohorte|Las críticas no anulan el concepto, pero obligan a usarlo con cuidado."
    ],
    seq: [],
    cls: [
      "Postura sobre la adultez emergente|Favorable: aparece donde se aplazan los roles adultos; rasgos propios y medibles; más formación y búsqueda de identidad|Crítica: depende de la clase y del país; efecto de cohorte o de época; precariedad y falta de opciones"
    ] },
  { t: "Emanciparse en España",
    tip: "Según el CJE, la tasa de emancipación juvenil bajó del 15,2 % en el segundo semestre de 2024 al 14,5 % en el de 2025, mínimo histórico. La edad media de emancipación es de 30,2 años en España, frente a 26,3 en la UE. El alquiler en solitario absorbería el 98,7 % del salario joven. Es una influencia normativa por historia, no un signo de inmadurez.",
    v: [
      "Tasa de emancipación=Porcentaje de jóvenes que viven fuera del hogar de origen",
      "CJE=Consejo de la Juventud de España, con su Observatorio de Emancipación",
      "Mínimo histórico=14,5 % de jóvenes emancipados en el segundo semestre de 2025",
      "Edad media en España=30,2 años al emanciparse, frente a 26,3 en la Unión Europea",
      "Coste del alquiler=Absorbería el 98,7 % del salario de un joven que viviera solo",
      "Influencia normativa por historia=Afecta a toda una generación que comparte unas condiciones",
      "Autonomía sin emancipación=Sentirse adulto en casa de los padres: aportar a los gastos y decidir",
      "Reloj social desplazado=Vivir con los padres a los 27 deja de ser un suceso fuera de tiempo"
    ],
    g: [
      "La edad media de emancipación en la Unión Europea es de ___ años.|26,3|30,2|28,5",
      "La tasa de emancipación juvenil del segundo semestre de 2024 fue del ___.|15,2 %|14,5 %|18,7 %",
      "Según el CJE, el alquiler en solitario absorbería el ___ del salario de una persona joven.|98,7 %|59,1 %|45,3 %",
      "El retraso de la emancipación es una influencia normativa por ___.|historia|edad|género",
      "Cuando la mayoría se emancipa hacia los 30, vivir con los padres a los 27 deja de ser un suceso ___.|fuera de tiempo|no anticipado|no normativo"
    ],
    tf: [
      "La tasa de emancipación juvenil en España alcanzó su mínimo histórico en el segundo semestre de 2025.|V",
      "El retraso de la emancipación en España se explica sobre todo por la inmadurez de los jóvenes.|F|Se explica en gran medida por el coste: el alquiler en solitario absorbería el 98,7 % del salario joven.",
      "El retraso de la emancipación es una influencia no normativa, porque afecta a cada joven de forma individual.|F|Es normativa por historia: afecta a toda una generación que comparte unas condiciones económicas concretas.",
      "Como los jóvenes definen la adultez por la autonomía, es posible sentirse adulto sin haberse ido de casa.|V"
    ],
    q: [
      "Irene, de 28 años, vive con sus padres, contribuye a los gastos y toma sus propias decisiones. ¿Cómo se interpreta su situación?|Autonomía sin emancipación|Un suceso fuera de tiempo|Una adolescencia prolongada|Los jóvenes valoran la responsabilidad y la capacidad de decidir, así que se puede ser adulto sin emanciparse.",
      "¿Qué tipo de influencia del ciclo vital es el retraso de la emancipación en España?|Normativa por historia|Normativa por la edad|No normativa individual|Como la crisis de 2008 o la pandemia, afecta a una cohorte que comparte condiciones históricas.",
      "¿Cuántos años de diferencia hay entre la edad media de emancipación de España y la de la UE?|Casi cuatro|Algo más de dos|Casi seis|30,2 frente a 26,3 años: una diferencia de casi cuatro años.",
      "Los padres de Pablo, de 30 años, ven retrasado el momento de quedarse solos en casa porque él sigue viviendo con ellos. ¿Qué concepto lo explica?|Vidas interconectadas|Reloj social desplazado|Efecto de época|El calendario de los hijos condiciona el de los padres: la convivencia prolongada retrasa que se queden solos."
    ],
    inc: [
      "Sobre la emancipación en España|La tasa de emancipación subió entre 2024 y 2025|La edad media de emancipación supera a la europea|El coste del alquiler explica buena parte del retraso|Bajó del 15,2 % al 14,5 %, el mínimo histórico de la serie del CJE."
    ],
    seq: [],
    cls: [] }
] },
{ n: 8, t: "Cuerpo y salud en la mitad de la vida", cap: 4, pir: "media", mods: [
  { t: "Vista, oído y otros cambios sensoriales",
    tip: "Los cambios físicos de la adultez media son graduales y muy variables entre personas. La presbicia, por pérdida de elasticidad del cristalino, es casi universal desde los 40-45 años. La presbiacusia afecta primero a los agudos y dificulta entender el habla con ruido. Para la Comisión de la Lancet (Livingston et al., 2024), la pérdida auditiva es el factor modificable de demencia con más peso en la mediana edad.",
    v: [
      "Presbicia=Pérdida de la capacidad de enfocar de cerca por un cristalino menos elástico",
      "Acomodación=Capacidad del ojo para enfocar objetos cercanos",
      "Cristalino=Lente del ojo que cambia de forma para enfocar",
      "Presbiacusia=Pérdida auditiva asociada a la edad que afecta primero a los agudos",
      "Frecuencias altas=Sonidos agudos, como muchas consonantes del habla",
      "Tiempo de reacción=Aumenta ligeramente, ligado a la menor velocidad de procesamiento",
      "Comisión de la Lancet=Grupo de Livingston et al. (2024) sobre factores modificables de demencia",
      "Audífonos=Corrigen la pérdida auditiva y son, por tanto, una medida preventiva"
    ],
    g: [
      "La presbicia es casi universal desde los ___ años.|40-45|30-35|55-60",
      "La presbiacusia afecta primero a los sonidos ___.|agudos|graves|intensos",
      "Con presbiacusia, la persona oye que le hablan, pero le cuesta ___ las palabras.|entender|recordar|pronunciar",
      "La pérdida de olfato y gusto puede llevar a añadir más ___ o azúcar a la comida.|sal|aceite|grasa",
      "Con los años la pupila deja pasar menos ___, lo que dificulta ver con poca iluminación.|luz|imagen|color"
    ],
    tf: [
      "La presbicia es una enfermedad ocular que aparece en una minoría de adultos de mediana edad.|F|Es un proceso normal y casi universal desde los 40-45 años, que se corrige con gafas de cerca o lentes progresivas.",
      "Oír algo peor a los cincuenta es una molestia menor que se resuelve subiendo el volumen.|F|La pérdida auditiva en la mediana edad es el factor modificable de demencia con mayor peso de esa etapa.",
      "El mecanismo exacto que une la pérdida auditiva con la demencia sigue en estudio.|V",
      "Con la edad se toleran peor los deslumbramientos, por ejemplo al conducir de noche.|V"
    ],
    q: [
      "Rosa, de 52 años, deja de ir a cenas con sus amigas porque «hay mucho ruido y no me entero de nada». ¿Qué es lo más probable?|Presbiacusia|Presbicia|Catarata|La pérdida de agudos dificulta entender el habla con ruido de fondo. Corregirla le permite recuperar su vida social.",
      "¿Qué explicación plausible se da a la relación entre pérdida auditiva y demencia?|Más esfuerzo cognitivo y menos vida social|Daño directo del nervio auditivo al cerebro|Mayor consumo de fármacos por la sordera|Oír mal aumenta el esfuerzo para comprender y reduce la participación social, aunque el mecanismo sigue en estudio.",
      "¿Por qué cuesta entender el habla con presbiacusia?|Muchas consonantes son agudas|Los sonidos graves se pierden antes|El cristalino pierde elasticidad|Se pierden primero las frecuencias altas, y muchas consonantes del habla son agudas.",
      "¿Qué cambio explica la presbicia?|La menor elasticidad del cristalino|La pérdida de transparencia de la córnea|La menor entrada de luz por la pupila|Al perder elasticidad el cristalino, disminuye la acomodación para enfocar de cerca."
    ],
    inc: [
      "Sobre los cambios sensoriales de la mediana edad|Son bruscos y parecidos en todas las personas|La presbicia se corrige con lentes de cerca|El tiempo de reacción aumenta ligeramente|Son graduales, y la variabilidad entre personas es grande y aumenta con la edad."
    ],
    seq: [],
    cls: [
      "Cambio sensorial|Presbicia: cristalino; acomodación; gafas de cerca|Presbiacusia: sonidos agudos; ruido de fondo; audífonos"
    ] },
  { t: "Climaterio, menopausia y cambios hormonales",
    tip: "El climaterio es la transición de varios años en que la función ovárica disminuye hasta cesar. La perimenopausia rodea a la menopausia, que es el cese definitivo de la menstruación, diagnosticado tras 12 meses de amenorrea, hacia los 51 años. La bajada de estrógenos explica los sofocos y acelera la pérdida ósea. En los hombres la testosterona baja de forma gradual y se prefiere hablar de hipogonadismo de inicio tardío.",
    v: [
      "Climaterio=Transición de varios años en que la función ovárica disminuye hasta cesar",
      "Perimenopausia=Parte del climaterio con ciclos irregulares y los síntomas más intensos",
      "Menopausia=Cese definitivo de la menstruación tras 12 meses seguidos de amenorrea",
      "Amenorrea=Ausencia de menstruación",
      "Síntomas vasomotores=Sofocos y sudores nocturnos",
      "Estrógenos=Hormonas cuya disminución explica los síntomas del climaterio",
      "Andropausia=Término discutido que sugiere en el varón un cese que no existe",
      "Hipogonadismo de inicio tardío=Síntomas con testosterona baja en una parte de los hombres mayores"
    ],
    g: [
      "La menopausia se produce en promedio en torno a los ___ años.|51|45|55",
      "La menopausia se diagnostica de forma ___.|retrospectiva|analítica|inmediata",
      "En los varones, la testosterona desciende de forma lenta y gradual desde la adultez ___.|temprana|media|tardía",
      "Los sofocos y los sudores nocturnos son síntomas ___.|vasomotores|digestivos|cognitivos",
      "Con la edad, la respuesta sexual se vuelve más ___ en ambos sexos.|lenta|rápida|intensa"
    ],
    tf: [
      "Climaterio y menopausia son sinónimos.|F|El climaterio es la transición de varios años, y la menopausia, el cese definitivo de la menstruación.",
      "Los primeros sofocos y los ciclos irregulares bastan para diagnosticar la menopausia.|F|Aparecen ya en la perimenopausia. La menopausia exige 12 meses seguidos sin menstruación.",
      "La mayoría de los hombres conserva la capacidad reproductora durante toda la vida.|V",
      "Atribuir todo el malestar de una mujer de 50 años a las hormonas puede impedir ver otras causas.|V"
    ],
    q: [
      "Carmen, de 49 años, duerme mal y tiene ciclos irregulares, pero sigue menstruando. ¿En qué momento está?|Perimenopausia|Menopausia|Fin del climaterio|Con ciclos irregulares y síntomas intensos está en la perimenopausia. La menopausia exige 12 meses sin menstruación.",
      "¿Por qué se considera discutido el término «andropausia»?|Sugiere un cese que no existe|No hay descenso de testosterona|Se refiere solo a la sexualidad|La testosterona baja de forma lenta y gradual, y la mayoría conserva la capacidad reproductora.",
      "¿Qué exige el diagnóstico de hipogonadismo de inicio tardío?|Síntomas y testosterona baja|Solo niveles bajos de testosterona|Solo síntomas de la edad media|Exige a la vez síntomas y niveles bajos de testosterona, y solo afecta a una parte de los hombres mayores.",
      "Además de los sofocos, ¿qué efecto menos visible tiene la bajada de estrógenos?|Acelera la pérdida de masa ósea|Reduce la masa muscular de golpe|Detiene el remodelado del hueso|Acelera durante unos años la pérdida de masa ósea y cambia además el perfil de riesgo cardiovascular."
    ],
    inc: [
      "Sobre la menopausia|Se diagnostica cuando aparecen los primeros sofocos|Se produce en promedio hacia los 51 años|Su vivencia depende también de las expectativas|Se diagnostica de forma retrospectiva, tras 12 meses seguidos sin menstruación."
    ],
    seq: [],
    cls: [
      "Cambio hormonal|Mujeres: estrógenos; final definido; cesa la capacidad reproductora; climaterio y menopausia|Hombres: testosterona; descenso lento y continuo; se conserva la capacidad reproductora; hipogonadismo de inicio tardío"
    ] },
  { t: "Huesos y músculo: osteoporosis y sarcopenia",
    tip: "Hueso y músculo alcanzan su máximo en la adultez temprana. La osteoporosis es silenciosa y se diagnostica con densitometría: puntuación T de −2,5 o inferior (OMS). FRAX estima el riesgo de fractura a diez años. Para el EWGSOP2 (Cruz-Jentoft et al., 2019), la baja fuerza es el criterio primario de la sarcopenia: la masa confirma y el rendimiento físico indica la gravedad.",
    v: [
      "Remodelado óseo=Destrucción y reconstrucción continua del hueso",
      "Pico de masa ósea=Máximo de hueso, alcanzado en la adultez temprana",
      "Osteoporosis=Pérdida de masa y estructura ósea con fractura fácil, T de −2,5 o inferior",
      "Osteopenia=Masa ósea baja, con puntuación T entre −1 y −2,5",
      "Densitometría ósea=Compara la densidad del hueso con la de adultos jóvenes sanos",
      "FRAX=Herramienta que estima la probabilidad de fractura a diez años (Kanis et al., 2013)",
      "Sarcopenia=Pérdida progresiva y generalizada de fuerza y masa muscular asociada a la edad",
      "EWGSOP2=Consenso europeo de 2019 que sitúa la baja fuerza como criterio primario"
    ],
    g: [
      "Según la OMS, una puntuación T de −1 o superior indica densidad ___.|normal|baja|límite",
      "La osteoporosis suele ser ___: no da síntomas hasta la primera fractura.|silenciosa|dolorosa|incapacitante",
      "En el EWGSOP2, la baja fuerza muscular indica sarcopenia ___.|probable|confirmada|grave",
      "La fuerza de prensión de la mano se mide con un ___.|dinamómetro|densitómetro|audiómetro",
      "Si a la baja fuerza y masa se suma una marcha lenta, la sarcopenia se considera ___.|grave|probable|leve"
    ],
    tf: [
      "Según el EWGSOP2, el criterio primario de la sarcopenia es la baja masa muscular.|F|Es la baja fuerza, que predice mejor los problemas funcionales. La masa confirma el diagnóstico.",
      "Una puntuación T de −1,8 corresponde a osteoporosis según la OMS.|F|Entre −1 y −2,5 es osteopenia. La osteoporosis exige una puntuación de −2,5 o inferior.",
      "La herramienta FRAX combina la densidad ósea con factores clínicos como las fracturas previas o el tabaquismo.|V",
      "El músculo responde al entrenamiento de fuerza a cualquier edad.|V"
    ],
    q: [
      "A Luis, de 60 años, le cuesta abrir botes y su fuerza de prensión es baja. Aún no se ha medido su masa muscular. Según el EWGSOP2, ¿qué diagnóstico corresponde?|Sarcopenia probable|Sarcopenia confirmada|Sarcopenia grave|La baja fuerza es la puerta de entrada. Para confirmarla haría falta medir la cantidad o calidad muscular.",
      "Una mujer de 58 años obtiene una puntuación T de −2,5 en la densitometría. Según la OMS, ¿qué presenta?|Osteoporosis|Osteopenia|Densidad normal|El criterio es −2,5 o inferior, de modo que −2,5 ya corresponde a osteoporosis.",
      "¿Por qué la osteoporosis es más frecuente en las mujeres?|Los estrógenos caen tras la menopausia|Su pico de masa ósea es más tardío|Su remodelado óseo se detiene antes|La caída de estrógenos tras la menopausia acelera durante unos años la pérdida de masa ósea.",
      "¿Por qué el EWGSOP2 sitúa la fuerza como criterio principal de la sarcopenia?|Predice mejor los problemas funcionales|Es más fácil de medir que la masa|Refleja mejor la cantidad de músculo|La baja fuerza predice mejor los problemas funcionales que la cantidad de músculo."
    ],
    inc: [
      "Sobre hueso y músculo|La osteoporosis da dolor antes de la primera fractura|La fuerza es la puerta de entrada del EWGSOP2|Los ejercicios de fuerza ayudan a prevenir la sarcopenia|La osteoporosis suele ser silenciosa: no produce síntomas hasta que aparece la primera fractura."
    ],
    seq: [
      "Algoritmo EWGSOP2 de la sarcopenia|Baja fuerza muscular (sarcopenia probable)>Baja cantidad o calidad muscular (confirmada)>Bajo rendimiento físico (grave)"
    ],
    cls: [
      "Categoría de la OMS según la puntuación T|Densidad normal: T de 0; T de −1|Osteopenia: T de −1,8; T de −2,2|Osteoporosis: T de −2,5; T de −3"
    ] },
  { t: "Salud y prevención en la adultez media",
    tip: "En la adultez media aumentan la hipertensión, la diabetes, el colesterol alto, la obesidad y la enfermedad cardiovascular, ligados a hábitos acumulados. De los 14 factores modificables de demencia de la Lancet, diez son de la mediana edad, y la fracción evitable del 45,3 % es teórica. La prevención combina ejercicio, dieta, evitar tabaco y alcohol, revisiones y manejo del estrés. Whitehall II mostró un gradiente social de la salud.",
    v: [
      "Factores de riesgo modificables=14 riesgos de demencia, diez de ellos en la mediana edad (Lancet)",
      "Fracción atribuible conjunta=45,3 % de casos evitables, una estimación teórica",
      "Gradiente social de la salud=Peor salud cuanto más bajo el nivel socioeconómico, en todos los escalones",
      "Whitehall II=Estudio con funcionarios británicos sobre nivel socioeconómico y salud",
      "Estudio de Dunedin=Muestra que el ritmo de envejecimiento biológico varía a igual edad",
      "Ventaja y desventaja acumulada=Las diferencias de salud de la vejez se construyen durante décadas",
      "Revisiones periódicas=Detectan a tiempo hipertensión, diabetes o colesterol alto",
      "Ejercicio de fortalecimiento=Trabajo muscular varios días por semana que recomienda la OMS"
    ],
    g: [
      "La Comisión de la Lancet identificó ___ factores de riesgo modificables de demencia.|14|10|12",
      "De los 14 factores de la Lancet, ___ corresponden a la mediana edad.|diez|cuatro|siete",
      "La fracción de casos evitables, un ___, es una estimación teórica.|45,3 %|98,7 %|26 %",
      "El estudio ___ mostró un gradiente social de la salud en funcionarios británicos.|Whitehall II|Dunedin|MIDUS",
      "El estudio de ___ mostró que el ritmo de envejecimiento biológico varía entre personas de la misma edad.|Dunedin|Whitehall II|MIDUS"
    ],
    tf: [
      "En la adultez media, las enfermedades crónicas dependen poco de los hábitos y mucho de la herencia.|F|Dependen en gran parte de hábitos acumulados durante décadas: tabaco, alcohol, inactividad y dieta desequilibrada.",
      "Está demostrado que actuar sobre los 14 factores de la Lancet evitaría el 45,3 % de las demencias.|F|Es una estimación teórica, y se discute si los factores son causas o solo marcadores asociados.",
      "Muchos factores de riesgo de demencia de la mediana edad coinciden con los factores de riesgo cardiovascular.|V",
      "La OMS recomienda combinar ejercicio aeróbico con ejercicios de fortalecimiento muscular varios días por semana.|V"
    ],
    q: [
      "Javier, de 47 años, fuma, apenas camina y no trata su tensión alta porque «no le duele nada». Su hermana dejó de fumar y se hace revisiones. ¿Qué ilustra el caso?|Los hábitos pesan además de la herencia|La herencia determina cómo se envejece|El gradiente social de la salud|Comparten herencia familiar, pero no las mismas probabilidades de envejecer con buena salud.",
      "¿Cuál de estos es uno de los diez factores de demencia de la mediana edad según la Lancet?|Colesterol LDL alto|Colesterol HDL alto|Tensión arterial baja|Los diez incluyen el colesterol LDL alto, la hipertensión, la diabetes, la obesidad y la pérdida auditiva, entre otros.",
      "¿Por qué la prevención no es solo una cuestión de voluntad individual?|Con menos recursos cuesta más cuidarse|La genética determina la salud adulta|Los hábitos apenas influyen en la salud|Con menos recursos es más difícil comer bien, hacer ejercicio o descansar, como muestra el gradiente social.",
      "¿Qué se discute sobre los 14 factores de la Lancet?|Si son causas o solo marcadores|Si incluyen la pérdida auditiva|Si afectan a la mediana edad|La fracción atribuible del 45,3 % es teórica, y no está claro que todos los factores sean causas de la demencia."
    ],
    inc: [
      "Sobre la prevención en la adultez media|Los factores cardiovasculares no influyen en la demencia|La actividad física protege corazón, hueso y músculo|Las revisiones detectan a tiempo la hipertensión|Lo que vale para el corazón vale para el cerebro: muchos factores de demencia son también cardiovasculares."
    ],
    seq: [],
    cls: [] }
] }
);

// SAIMAP Psicología · Desarrollo: Adultez · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "La inteligencia en la adultez", cap: 5, pir: "alta", mods: [
  { t: "Inteligencia fluida y cristalizada",
    tip: "Cattell (1963) y Horn y Cattell (1967) separaron la inteligencia fluida (Gf), que permite razonar ante problemas nuevos, de la cristalizada (Gc), el conocimiento acumulado por la educación, la cultura y la experiencia. La Gf declina de forma lenta y continua desde la adultez temprana, mientras que la Gc se mantiene o sube hasta los 60-70 años. Son curvas promedio, con una variabilidad que aumenta con la edad, y un ejemplo de la multidireccionalidad de Baltes (1987).",
    v: [
      "Inteligencia fluida=Razonar ante problemas nuevos y detectar relaciones sin una respuesta aprendida",
      "Inteligencia cristalizada=Conocimiento acumulado por la educación, la cultura y la experiencia",
      "Matrices y series=Tareas típicas para medir el razonamiento ante problemas nuevos",
      "Pruebas de vocabulario=Tareas típicas para medir el conocimiento adquirido",
      "Cattell (1963)=Propuso separar el razonamiento ante lo nuevo del conocimiento acumulado",
      "Horn y Cattell (1967)=Desarrollaron la distinción Gf-Gc y sus trayectorias con la edad",
      "Multidireccionalidad=Ganancias y pérdidas a la vez en la misma persona y la misma década (Baltes)",
      "Variabilidad interindividual=Diferencias entre personas de la misma edad, que crecen con los años"
    ],
    g: [
      "La inteligencia ___ depende poco de la escolarización y mucho de la eficiencia del procesamiento.|fluida|cristalizada|verbal",
      "La Gc se mantiene o incluso sube hasta los ___ años.|60-70|40-50|80-90",
      "Que en la misma década se pierda Gf y se gane Gc ilustra la ___ del desarrollo.|multidireccionalidad|multidimensionalidad|discontinuidad",
      "Las curvas de Gf y Gc son ___, de modo que muchos adultos de 70 superan a otros de 40 en razonamiento.|promedios|universales|individuales",
      "En edades muy avanzadas, la Gc también tiende a ___.|bajar|subir|estabilizarse"
    ],
    tf: [
      "La Gf desciende desde la adultez temprana de forma lenta y continua.|V",
      "La inteligencia cristalizada es inmune a la edad y no baja ni siquiera en edades muy avanzadas.|F|Su estabilidad llega hasta los 60-70 años. En edades muy avanzadas también tiende a bajar.",
      "Parte de la curva de la Gf procede de estudios transversales, que pueden exagerar el declive.|V",
      "La pérdida de Gf se nota en el día a día tanto como sugieren las pruebas de laboratorio.|F|Se nota menos, porque casi ningún problema real es puramente fluido: la mayoría combina razonar con lo que ya se sabe."
    ],
    q: [
      "Marta, de 58 años, tarda más que su hijo de 22 en entender una aplicación del banco recién cambiada, pero redacta una reclamación impecable. ¿Qué patrón refleja?|Menor Gf con buena Gc|Menor Gc con buena Gf|Declive de Gf y de Gc|La tarea nueva y sin pistas pone a prueba la Gf. Redactar y saber a quién acudir dependen de la Gc, y ahí la ventaja es suya.",
      "¿Qué tarea mide sobre todo la inteligencia cristalizada?|Información general|Series de figuras|Problemas abstractos|Vocabulario, información general y comprensión miden lo adquirido. Series, matrices y problemas abstractos miden la Gf.",
      "Un enunciado afirma que «la Gf se mantiene hasta los 60-70 años y la Gc declina pronto». ¿Qué error contiene?|Invierte las dos trayectorias|Confunde la Gf con la velocidad|Atribuye la distinción a Baltes|Es la trampa típica del Clave PIR: la que se mantiene o sube es la Gc, y la que desciende pronto, la Gf.",
      "¿De qué depende sobre todo la inteligencia fluida?|Del procesamiento nervioso|De la escolarización|De la experiencia laboral|La Gf depende de la eficiencia con que el sistema nervioso procesa la información, y poco de lo aprendido."
    ],
    inc: [
      "Sobre la Gf y la Gc|La Gc depende sobre todo de la eficiencia nerviosa|La Gf se mide con matrices y series de figuras|La Gc se alimenta del trabajo y de la lectura|La eficiencia del procesamiento es la base de la Gf. La Gc depende de la educación, la cultura y la experiencia."
    ],
    seq: [],
    cls: [
      "Tipo de inteligencia|Fluida: series y matrices; problemas nuevos; desciende desde la adultez temprana|Cristalizada: vocabulario; información general; estable o en ascenso hasta los 60-70"
    ] },
  { t: "El Estudio Longitudinal de Seattle",
    tip: "Schaie dirige desde 1956 el Estudio Longitudinal de Seattle, con un diseño secuencial: reevaluaba cada 7 años e incorporaba muestras nuevas para separar los efectos de edad, cohorte y momento de medida. Con datos longitudinales, la mayoría de las capacidades mentales primarias no muestran un declive fiable antes de los 60 años, y el descenso claro llega hacia los 74-80. Los efectos de cohorte son grandes y explican que los estudios transversales hallen declives más precoces.",
    v: [
      "Diseño secuencial=Reevaluar cada 7 años y añadir muestras nuevas para separar edad y cohorte",
      "Diseño transversal=Compara edades distintas en un mismo año y confunde edad y cohorte",
      "Diseño longitudinal=Sigue a las mismas personas y confunde edad y momento de medida",
      "Efecto de cohorte=Diferencia debida a la generación de nacimiento y no a la edad",
      "Efecto de práctica=Mejora en una prueba por haberla realizado antes",
      "Desgaste muestral=Abandono selectivo, sobre todo de quienes tienen peor salud",
      "Capacidades mentales primarias=Aptitudes en la línea de Thurstone, como el significado verbal",
      "K. Warner Schaie=Dirige desde 1956 la investigación de referencia sobre la inteligencia adulta"
    ],
    g: [
      "Schaie volvía a evaluar a los participantes cada ___ años.|7|5|10",
      "El Estudio Longitudinal de Seattle comenzó en ___.|1956|1963|1978",
      "Las pruebas de Seattle medían capacidades primarias en la línea de ___.|Thurstone|Wechsler|Spearman",
      "Las capacidades que dependen de la rapidez, como la velocidad ___, bajan antes que las verbales.|perceptiva|numérica|inductiva",
      "Con datos longitudinales, el descenso claro aparece hacia los ___ años, en cifras aproximadas.|74-80|50-55|60-65"
    ],
    tf: [
      "El diseño secuencial del Estudio de Seattle se debe a Baltes.|F|Es de Schaie. Atribuirlo a Baltes es una de las trampas típicas del Clave PIR.",
      "Las generaciones nacidas más tarde rinden más en varias capacidades, sobre todo por más escolarización y mejor salud.|V",
      "Los datos longitudinales están libres de sesgos, a diferencia de los transversales.|F|Sufren efectos de práctica y desgaste muestral, y confunden edad y momento de medida.",
      "Entre los factores asociados a conservar las capacidades figuran la salud cardiovascular y vivir en entornos complejos.|V"
    ],
    q: [
      "Una mujer de 80 años que dejó la escuela a los doce rinde menos en razonamiento que su nieta universitaria de 25. ¿Qué concluiría Schaie?|Que influyen edad y cohorte|Que todo se debe a la edad|Que es un efecto de práctica|La diferencia refleja la edad, pero también setenta años de cambios en educación y tipo de trabajo: un efecto de cohorte.",
      "¿Por qué los estudios transversales encuentran declives más precoces que los longitudinales?|Por los efectos de cohorte|Por los efectos de práctica|Por el desgaste muestral|Comparan generaciones con distinta escolarización y salud. La práctica y el desgaste afectan, en cambio, a los longitudinales.",
      "¿Qué cabe afirmar de los factores que Schaie asoció a mantener las capacidades?|Son asociaciones, no causas|Demuestran la causa del buen envejecer|Solo importa el nivel educativo|Salud cardiovascular, nivel educativo y socioeconómico y entornos complejos se asocian al mantenimiento, sin probar causalidad.",
      "¿Qué ventaja principal tiene el diseño de Schaie?|Separar edad y cohorte|Eliminar los efectos de práctica|Evaluar una sola generación|Al añadir muestras nuevas, compara personas de la misma edad nacidas en épocas distintas y sigue cada cohorte en el tiempo."
    ],
    inc: [
      "Sobre el Estudio de Seattle|Todas las capacidades primarias declinan al mismo ritmo|Las diferencias individuales son enormes|Los efectos de cohorte son grandes|No todas se comportan igual: las que dependen de la rapidez bajan antes que las verbales."
    ],
    seq: [],
    cls: [
      "Problema del diseño|Transversal: confunde edad y cohorte; declive más precoz|Longitudinal: confunde edad y momento de medida; efectos de práctica; desgaste muestral"
    ] },
  { t: "Velocidad de procesamiento y el debate sobre el declive",
    tip: "La velocidad de procesamiento es el marcador más sensible del envejecimiento cognitivo. Salthouse (1996) explicó buena parte de las diferencias de edad en tareas complejas por el enlentecimiento, con dos mecanismos: tiempo limitado y simultaneidad. El inicio del declive se debate: Salthouse (2009), con datos transversales, lo sitúa hacia los 20-30 años, y Schaie, con datos longitudinales, hacia los 60. La postura prudente reconoce que ambos tienen parte de razón.",
    v: [
      "Velocidad de procesamiento=Rapidez para percibir estímulos, compararlos, decidir y responder",
      "Tiempo limitado=Las primeras operaciones lentas no dejan tiempo para completar las últimas",
      "Simultaneidad=Al llegar a las operaciones finales, los resultados iniciales ya se han perdido",
      "Salthouse (1996)=Teoría que atribuye las diferencias de edad al enlentecimiento del sistema",
      "Salthouse (2009)=Sitúa el inicio del declive hacia los 20-30 años con datos transversales",
      "Park et al. (2002)=Velocidad y memoria de trabajo bajan desde los 20, y el conocimiento verbal se mantiene",
      "Mediación de la velocidad=Al controlarla, muchas diferencias entre jóvenes y mayores se reducen",
      "Compensación=Suplir la lentitud con experiencia, estrategias y apoyos del entorno"
    ],
    g: [
      "La velocidad de procesamiento es el marcador más ___ del envejecimiento cognitivo.|sensible|tardío|estable",
      "Según Salthouse, la velocidad ___ gran parte de la varianza ligada a la edad.|mediaba|anulaba|duplicaba",
      "Park et al. (2002) hallaron que el conocimiento ___ se mantiene estable.|verbal|espacial|numérico",
      "Salthouse sostiene que los efectos de ___ inflan los datos longitudinales.|práctica|cohorte|periodo",
      "Desde el lado longitudinal se responde que los efectos de ___ inflan el declive transversal.|cohorte|práctica|techo"
    ],
    tf: [
      "El descenso de la velocidad de procesamiento aparece tanto en estudios transversales como longitudinales.|V",
      "Salthouse (2009) sitúa el inicio del declive hacia los 60 años en la mayoría de las capacidades.|F|Esa es la postura de Schaie. Salthouse, con datos transversales, lo sitúa hacia los 20-30 años.",
      "Para Salthouse, el desgaste muestral contribuye a la estabilidad longitudinal, porque en el estudio siguen los más sanos.|V",
      "El enlentecimiento con la edad se traduce sin más en peor rendimiento en la vida diaria.|F|La lentitud puede compensarse con experiencia, estrategias y apoyos, y el resultado final puede ser igual o mejor."
    ],
    q: [
      "Un conductor de 62 años reacciona algo más despacio que uno de 25, pero anticipa los cruces peligrosos y guarda más distancia. ¿Qué ilustra?|Compensación de la lentitud|Ausencia de enlentecimiento|Un efecto de cohorte|La lentitud existe, pero la experiencia y las estrategias la compensan, y el rendimiento final puede ser igual o mejor.",
      "En una tarea compleja, un mayor llega a las últimas operaciones cuando ya ha perdido los resultados de las primeras. ¿Qué mecanismo de Salthouse describe?|Simultaneidad|Tiempo limitado|Efecto de práctica|En el tiempo limitado, las operaciones lentas impiden completar las últimas. En la simultaneidad, los resultados previos ya se han perdido.",
      "¿Qué tipo de datos usa Salthouse (2009) para defender un declive temprano?|Transversales|Longitudinales|Secuenciales|Usa muestras transversales amplias. Los datos longitudinales y secuenciales son la base de la postura de Schaie.",
      "¿Cuál es la postura más prudente en el debate sobre el inicio del declive?|Ambos tienen parte de razón|Solo Salthouse tiene razón|Solo Schaie tiene razón|Velocidad y razonamiento abstracto bajan pronto, aunque despacio. Las capacidades apoyadas en el conocimiento se mantienen mucho más."
    ],
    inc: [
      "Sobre la velocidad de procesamiento|Es la capacidad que más tarde empieza a cambiar|Media gran parte de la varianza ligada a la edad|Desciende de forma continua desde los veinte años|Es la que cambia de forma más temprana y consistente con la edad."
    ],
    seq: [],
    cls: [
      "Postura en el debate|Salthouse (2009): datos transversales; declive hacia los 20-30; sesgo de práctica en el otro|Schaie: datos longitudinales y secuenciales; declive hacia los 60; sesgo de cohorte en el otro"
    ] },
  { t: "Memoria, atención y conocimiento en la mediana edad",
    tip: "Lachman (2004) describe la mediana edad como un periodo pivote, con el pico de muchas competencias prácticas y los primeros cambios en lo que depende de la rapidez. La memoria de trabajo y la episódica descienden de forma gradual, mientras que la semántica se mantiene o crece y la procedimental es muy resistente. Dividir la atención o cambiar de tarea cuesta más. La pericia compensa en buena medida la pérdida de velocidad.",
    v: [
      "Periodo pivote=Etapa con el pico de competencias prácticas y los primeros cambios por rapidez",
      "Memoria de trabajo=Información activa que se manipula en el momento",
      "Memoria episódica=Sucesos concretos con su contexto, que bajan sobre todo en el recuerdo libre",
      "Memoria semántica=Conocimiento general, vocabulario y conceptos, estable o en aumento",
      "Memoria procedimental=Habilidades y rutinas automatizadas, muy resistentes a la edad",
      "Pericia=Conocimiento experto que permite resolver problemas con menos pasos",
      "Atención dividida=Repartir recursos entre varias fuentes, más costoso con la edad",
      "Práctica distribuida=Repartir el estudio en el tiempo, lo que favorece aprender en la madurez"
    ],
    g: [
      "Las quejas del tipo «¿a qué he venido a la cocina?» suelen afectar a la memoria de trabajo y a los ___.|nombres propios|hábitos motores|conceptos generales",
      "En la memoria episódica, el descenso es lento y se nota sobre todo en el recuerdo ___.|libre|con claves|implícito",
      "Las habilidades y rutinas automatizadas forman la memoria ___, muy resistente.|procedimental|declarativa|prospectiva",
      "La diferencia de edad se nota más en una reunión con conversaciones ___ que en una lectura tranquila.|cruzadas|pausadas|breves",
      "En el Estudio de Seattle, varias capacidades alcanzaron su mejor nivel en la ___.|mediana edad|adultez temprana|vejez"
    ],
    tf: [
      "Una persona de 50 años suele conocer más palabras, conceptos y relaciones que a los 25.|V",
      "La atención sostenida en tareas conocidas es la que más se deteriora en la mediana edad.|F|Se conserva bien. Lo que se vuelve más costoso es dividir la atención, cambiar de tarea o ignorar distracciones.",
      "Olvidar un nombre propio en la mediana edad anuncia por sí mismo una patología.|F|Estas quejas suelen afectar a la memoria de trabajo y a los nombres propios, y no anuncian por sí mismas una patología.",
      "La producción creativa puede mantenerse o crecer cuando se basa en un dominio profundo de un campo.|V"
    ],
    q: [
      "Elena, enfermera de urgencias desde hace 25 años, aprende peor que los recién llegados un programa informático nuevo, pero sabe en seguida qué signos vigilar. ¿Qué explica su buen rendimiento global?|El conocimiento organizado|La velocidad conservada|La memoria de trabajo intacta|La pericia sustituye a la rapidez bruta: permite reconocer patrones y llegar a la solución con menos pasos.",
      "¿Qué sistema de memoria se mantiene estable o aumenta en la mediana edad?|La semántica|La episódica|La de trabajo|El conocimiento general sigue creciendo. La memoria de trabajo y la episódica descienden de forma gradual.",
      "¿Qué cambia sobre todo en el aprendizaje durante la mediana edad?|El ritmo al que se aprende|La posibilidad de aprender|El interés por lo nuevo|La capacidad no desaparece: se aprende mejor con más tiempo, apoyándose en lo sabido y con práctica distribuida.",
      "¿Cómo describe Lachman (2004) la mediana edad en lo cognitivo?|Como un periodo pivote|Como el inicio del declive|Como una etapa estable|Conviven el pico de muchas competencias prácticas con los primeros cambios en las capacidades más dependientes de la rapidez."
    ],
    inc: [
      "Sobre la cognición en la mediana edad|La memoria semántica desciende desde la adultez temprana|La memoria procedimental es muy resistente|Cambiar rápido de tarea se vuelve más costoso|La memoria semántica se mantiene o aumenta. La que desciende desde la adultez temprana es la de trabajo."
    ],
    seq: [],
    cls: [
      "Tendencia en la mediana edad|Descenso gradual: memoria de trabajo; memoria episódica; atención dividida|Estable, en aumento o muy resistente: memoria semántica; memoria procedimental; pericia"
    ] }
] },
{ n: 10, t: "El cerebro adulto y la prevención del declive", cap: 5, pir: "media", mods: [
  { t: "Cómo cambia el cerebro con la edad",
    tip: "Los cambios cerebrales normativos son graduales, desiguales entre regiones y muy variables entre personas. Raz et al. (2005) hallaron más atrofia en el caudado, el cerebelo, el hipocampo y la corteza prefrontal, y mucha menos en la corteza visual primaria. Para Hedden y Gabrieli (2004), el declive frontoestriatal y de la sustancia blanca es normativo, y la pérdida marcada del hipocampo, más propia de la patología. No hay muerte neuronal masiva.",
    v: [
      "Sistemas frontoestriatales=Circuitos entre prefrontal y ganglios basales que dependen de la dopamina",
      "Sustancia blanca=Tejido que une regiones distantes y pierde integridad con la edad",
      "Hipocampo=Estructura temporal medial clave para la memoria episódica",
      "Corteza visual primaria=Región con mucha menos atrofia en el estudio de Raz et al. (2005)",
      "Raz et al. (2005)=Siguieron a adultos varios años y describieron una atrofia desigual por regiones",
      "Hedden y Gabrieli (2004)=Separaron el patrón cerebral normativo del patológico",
      "Plasticidad=Capacidad de reforzar conexiones con la actividad, menor que en la juventud",
      "Envejecimiento patológico=Atrofia temporal medial marcada, progresiva y con pérdida de funcionalidad"
    ],
    g: [
      "Las regiones que maduran más ___ tienden a ser también las más sensibles al paso del tiempo.|tarde|pronto|deprisa",
      "Los circuitos frontoestriatales dependen sobre todo de la ___.|dopamina|serotonina|acetilcolina",
      "En el envejecimiento normal cambian más las conexiones que el número de ___.|neuronas|sinapsis|ramificaciones",
      "Con la edad, el volumen cerebral se pierde de forma ___ y desigual entre zonas.|moderada|masiva|brusca",
      "Una atrofia intensa del hipocampo es una señal de ___, no un destino común.|alerta|madurez|reserva"
    ],
    tf: [
      "A partir de cierta edad perdemos miles de neuronas al día.|F|En el envejecimiento normal no hay muerte neuronal masiva, sino cambios en sinapsis, ramificaciones y sustancia blanca.",
      "El volumen del hipocampo disminuye algo con la edad en casi todas las personas.|V",
      "Según Raz et al. (2005), la corteza visual primaria es una de las regiones que más se atrofian.|F|Fue de las que menos. Las más afectadas fueron el caudado, el cerebelo, el hipocampo y la corteza prefrontal.",
      "El declive frontoestriatal encaja con menos velocidad y más dificultad con la memoria de trabajo.|V"
    ],
    q: [
      "Antonio, de 68 años, tarda más en encontrar palabras y se despista con ruido, pero recuerda lo que le contaron ayer y vive sin ayuda. ¿Qué perfil presenta?|Cambios normativos|Atrofia temporal marcada|Inicio de demencia|Su perfil es normativo. Olvidar conversaciones enteras o perderse en lugares conocidos sí aconsejaría consultar.",
      "¿Qué funciones se resienten sobre todo en el envejecimiento normativo?|Velocidad y control ejecutivo|Memoria episódica y orientación|Lenguaje y percepción visual|Velocidad, memoria de trabajo y control ejecutivo. La memoria episódica y la orientación se afectan de forma marcada en la patología.",
      "¿Qué cambio es más propio del envejecimiento patológico, sobre todo de la enfermedad de Alzheimer?|Pérdida marcada del hipocampo|Declive frontoestriatal|Menor integridad de la sustancia blanca|Según Hedden y Gabrieli (2004), el declive frontoestriatal y de la sustancia blanca forma parte del envejecimiento normativo.",
      "¿Por qué importa que predominen los cambios en las conexiones y no la muerte celular?|Porque conservan cierta plasticidad|Porque se regeneran por completo|Porque no afectan a la cognición|Las conexiones se pueden reforzar con la actividad, aunque esa plasticidad sea menor que en la juventud (Baltes, 1987)."
    ],
    inc: [
      "Sobre el cerebro que envejece|Dos personas de 75 años suelen tener cerebros casi idénticos|La atrofia es mayor en el caudado y el cerebelo|La sustancia blanca pierde integridad con la edad|La variabilidad es grande: depende de la salud cardiovascular, la educación, la actividad física y la enfermedad."
    ],
    seq: [],
    cls: [
      "Tipo de envejecimiento cerebral|Normativo: prefrontal y frontoestriatal; sustancia blanca; velocidad y control ejecutivo|Patológico: hipocampo de forma marcada; lóbulo temporal medial; memoria episódica y orientación"
    ] },
  { t: "Compensación, mantenimiento y reserva",
    tip: "El modelo STAC (Park y Reuter-Lorenz, 2009) propone que el cerebro construye andamios compensatorios, favorecidos por el enriquecimiento y debilitados por el agotamiento. Nyberg et al. (2012) defienden el mantenimiento cerebral: rinden mejor quienes conservan un cerebro de perfil joven. Stern (2002) explica con la reserva cognitiva por qué el mismo daño produce síntomas distintos. Las tres ideas no se excluyen, y STAC no debe confundirse con HAROLD ni con CRUNCH.",
    v: [
      "Modelo STAC=Andamios neurales compensatorios que sostienen el rendimiento (Park y Reuter-Lorenz)",
      "HAROLD=Menor asimetría prefrontal en mayores, que activan los dos hemisferios (Cabeza, 2002)",
      "CRUNCH=Más reclutamiento con poca carga y agotamiento precoz de recursos al subir la exigencia",
      "Mantenimiento cerebral=Conservar un cerebro de perfil joven como clave del rendimiento (Nyberg et al.)",
      "Reserva cognitiva=Tolerar más daño sin síntomas gracias a educación, trabajo complejo y ocio (Stern)",
      "Enriquecimiento=Educación, actividad física, aprendizaje y vida social que favorecen los andamios",
      "Agotamiento=Enfermedad, estrés y sedentarismo, que debilitan los andamios",
      "Estudio de las Monjas=Snowdon et al. (1996): la densidad de ideas a los 22 años predijo la demencia"
    ],
    g: [
      "En el modelo STAC, los andamios se apoyan sobre todo en una activación adicional ___.|prefrontal|occipital|hipocampal",
      "En el Estudio de las Monjas, la ___ de ideas de las autobiografías predijo la demencia.|densidad|cantidad|claridad",
      "Las autobiografías del Estudio de las Monjas se escribieron hacia los ___ años.|22|35|18",
      "Según Nyberg et al., la clave es ___ el deterioro, más que repararlo.|evitar|compensar|tolerar",
      "Hertzog et al. (2008) revisaron la hipótesis del ___.|enriquecimiento|mantenimiento|agotamiento"
    ],
    tf: [
      "El andamiaje compensatorio aparece solo en la vejez.|F|También aparece en jóvenes ante tareas nuevas o difíciles, pero con la edad se vuelve más necesario.",
      "Según CRUNCH, cuando aumenta la exigencia los mayores agotan antes los recursos y su rendimiento cae.|V",
      "Reducir la asimetría prefrontal activando ambos hemisferios es la idea central del modelo STAC.|F|Ese patrón describe HAROLD (Cabeza, 2002). STAC habla de andamios compensatorios moderados por la experiencia.",
      "Se discute si la activación extra de los mayores es una compensación útil o un signo de menor eficiencia.|V"
    ],
    q: [
      "Dos mujeres tienen un daño cerebral parecido, pero solo una, con estudios superiores y un trabajo complejo, no muestra síntomas. ¿Qué concepto lo explica mejor?|Reserva cognitiva|Mantenimiento cerebral|Modelo HAROLD|La reserva (Stern, 2002) responde a por qué el mismo daño produce síntomas distintos, gracias a redes más eficientes o flexibles.",
      "Un estudio halla que los mayores que mejor rinden apenas muestran cambios cerebrales respecto a los jóvenes. ¿Qué propuesta apoya?|Mantenimiento cerebral|Andamiaje compensatorio|Reserva cognitiva|Para Nyberg et al. (2012), no compensan más, sino que conservan un cerebro más parecido al de los jóvenes.",
      "¿Qué autores propusieron el modelo CRUNCH?|Reuter-Lorenz y Cappell|Park y Reuter-Lorenz|Cabeza|CRUNCH es de Reuter-Lorenz y Cappell (2008). STAC es de Park y Reuter-Lorenz (2009), y HAROLD, de Cabeza (2002).",
      "Según el modelo STAC, ¿qué efecto tiene el sedentarismo sobre el andamiaje?|Lo debilita|Lo refuerza|No lo modifica|Enfermedad, estrés y sedentarismo son agotamiento. Educación, actividad física, aprendizaje y vida social son enriquecimiento."
    ],
    inc: [
      "Sobre compensación, mantenimiento y reserva|Las tres ideas son incompatibles entre sí|La reserva se apoya en el Estudio de las Monjas|El STAC está moderado por la experiencia|No son excluyentes: una persona puede conservar su cerebro, tener reserva y compensar los cambios que aparezcan."
    ],
    seq: [],
    cls: [
      "Modelo de activación en mayores|STAC: Park y Reuter-Lorenz; andamios compensatorios|HAROLD: Cabeza; menor asimetría hemisférica|CRUNCH: Reuter-Lorenz y Cappell; agotamiento al aumentar la carga"
    ] },
  { t: "Ejercicio, sueño, estrés y vida social",
    tip: "El ejercicio es la intervención con mejor evidencia biológica: en el ensayo de Erickson et al. (2011), caminar a ritmo aeróbico aumentó el volumen del hipocampo, aunque sin diferencias claras entre grupos en memoria. Los factores cardiovasculares se asocian al riesgo de demencia en la mediana edad. El efecto inmediato del sueño es claro, y el de largo plazo sigue en estudio. La depresión en la mediana edad y el aislamiento social en la vejez son factores de riesgo de la Lancet.",
    v: [
      "Erickson et al. (2011)=Ensayo aleatorizado de un año con 120 mayores: caminar frente a estiramientos",
      "Ensayo controlado aleatorizado=Asignación al azar a grupos para comparar una intervención",
      "Grupo aeróbico=Ganó un 2,12 % de hipocampo en el izquierdo y un 1,97 % en el derecho",
      "Grupo de estiramientos=Perdió en torno a un 1,4 % del volumen del hipocampo",
      "Factores cardiovasculares=Hipertensión, diabetes, LDL alto, obesidad y tabaco",
      "Cohen y Wills (1985)=Mostraron que las relaciones amortiguan el impacto del estrés",
      "Aislamiento social=Factor de riesgo de demencia de la Lancet situado en la vejez",
      "Sueño insuficiente=Empeora de inmediato la atención, la memoria de trabajo y la consolidación"
    ],
    g: [
      "En el ensayo de Erickson et al., el grupo control hacía estiramientos y ___.|tonificación|natación|meditación",
      "El ensayo de Erickson et al. duró ___.|un año|seis meses|dos años",
      "Una carta crítica señaló que no hubo diferencias claras entre grupos en la mejora de ___.|memoria|volumen|forma física",
      "La ___ en la mediana edad es uno de los factores de riesgo de demencia de la Lancet.|depresión|ansiedad|soledad",
      "Lo que daña los ___ daña el cerebro.|vasos|músculos|huesos"
    ],
    tf: [
      "En el ensayo de Erickson et al., el grupo aeróbico no solo frenó la pérdida de volumen del hipocampo, sino que la invirtió.|V",
      "El ensayo de Erickson et al. demostró una mejora de memoria claramente mayor en el grupo aeróbico.|F|El cambio cerebral está bien documentado, pero no hubo diferencias claras entre grupos en la mejora de memoria.",
      "La relación del sueño con el riesgo de demencia a largo plazo ya está establecida como causal.|F|Sigue en estudio y no está claro qué es causa y qué consecuencia. Lo claro es su efecto inmediato.",
      "Controlar la hipertensión y la diabetes es a la vez prevención cardiovascular y cognitiva.|V"
    ],
    q: [
      "Rosa, de 55 años, trabaja muchas horas sentada, duerme seis horas y ha dejado de ver a sus amigas. ¿Qué tiene más respaldo para proteger su cognición?|Caminar y recuperar su vida social|Una aplicación de entrenamiento mental|Resolver crucigramas cada noche|Caminar a buen ritmo, controlar tensión y azúcar, cuidar el sueño y la vida social es el enriquecimiento de Hertzog et al. (2008).",
      "¿Qué se puede afirmar del ejercicio aeróbico en los ensayos?|Cambio cerebral claro, efecto cognitivo modesto|Gran efecto cognitivo y escaso cambio cerebral|Ningún efecto medible en los ensayos|Los cambios cerebrales son claros, pero su traducción a mejor rendimiento cognitivo está menos documentada.",
      "¿Por qué la vida social se considera un ejercicio cognitivo constante?|Exige recordar y planificar|Reduce la carga de memoria|Sustituye al ejercicio físico|Mantener relaciones exige conversar, recordar, interpretar a otros y planificar. El aislamiento es, además, un factor de riesgo.",
      "¿Cuántos adultos mayores participaron en el ensayo de Erickson et al. (2011)?|120|1.260|2.832|Fueron 120. Las 1.260 personas corresponden a FINGER, y las 2.832, a ACTIVE."
    ],
    inc: [
      "Sobre los hábitos y la cognición|El estrés crónico no se asocia a peor cognición|La inactividad física es un factor de la Lancet|Dormir mal empeora de inmediato la atención|El estrés crónico y sostenido se asocia a peor funcionamiento cognitivo y a peor salud en general."
    ],
    seq: [],
    cls: [] },
  { t: "Lo que dicen los ensayos: ACTIVE, FINGER y la Lancet",
    tip: "ACTIVE (2.832 mayores, 10 sesiones) mostró a los diez años efectos mantenidos en razonamiento y velocidad, no en memoria, y menos dificultad en las AIVD en los tres grupos. Simons et al. (2016) concluyen que el entrenamiento mejora la tarea practicada, con poca transferencia lejana. FINGER halló un efecto multidominio significativo pero pequeño. La Lancet (2024) cuenta 14 factores modificables y una fracción atribuible teórica del 45,3 %.",
    v: [
      "ACTIVE=Ensayo de entrenamiento en memoria, razonamiento o velocidad con 2.832 mayores",
      "Rebok et al. (2014)=Publicaron los resultados del ensayo ACTIVE a los diez años",
      "Transferencia cercana=Mejora en tareas parecidas a la entrenada",
      "Transferencia lejana=Mejora en tareas distintas o en la vida diaria, escasa en estos programas",
      "FINGER=Ensayo finlandés multidominio de dos años con 1.260 personas de riesgo elevado",
      "Intervención multidominio=Combina dieta, ejercicio, entrenamiento cognitivo y control vascular",
      "Fracción atribuible=Proporción teórica de casos evitables si se eliminara un factor",
      "Pérdida auditiva=Factor modificable de mayor peso, situado en la mediana edad"
    ],
    g: [
      "En ACTIVE, el efecto mantenido a diez años en la habilidad entrenada fue mayor en ___.|velocidad|razonamiento|memoria",
      "La Comisión de la Lancet (2024) amplió a ___ los factores de riesgo modificables de demencia.|14|12|10",
      "Los dos factores añadidos en 2024 fueron el LDL alto y la pérdida de ___.|visión|audición|memoria",
      "La etapa vital que concentra la mayoría de los factores de la Lancet es la ___.|mediana edad|vejez tardía|adultez joven",
      "En FINGER participaron personas de 60 a ___ años con riesgo elevado.|77|70|85"
    ],
    tf: [
      "En ACTIVE, los tres grupos entrenados referían menos dificultad en las actividades instrumentales a los diez años.|V",
      "En ACTIVE, el efecto del entrenamiento en memoria sobre la habilidad entrenada se mantenía a los diez años.|F|En memoria no se mantenía. Sí en razonamiento (0,23) y, sobre todo, en velocidad (0,66).",
      "La cifra del 45,3 % de la Lancet indica que casi la mitad de las demencias desaparecería con un buen estilo de vida.|F|Es una estimación teórica que supone que todos los factores son causales, y su réplica en otras cohortes ha sido parcial.",
      "El resultado de FINGER fue estadísticamente significativo, pero pequeño.|V"
    ],
    q: [
      "Un hombre de 72 años practica a diario un juego de memoria en el móvil y mejora mucho su puntuación. Según Simons et al. (2016), ¿qué cabe esperar?|Que mejore sobre todo en ese juego|Que recuerde mejor dónde deja las llaves|Que reduzca su riesgo de demencia|Hay mucha evidencia de mejora en la tarea entrenada y poca de transferencia a tareas distintas o a la vida diaria.",
      "¿Qué factor modificable de la Lancet corresponde a la etapa temprana de la vida?|La educación|El aislamiento social|La pérdida auditiva|La educación es de la etapa temprana. La pérdida auditiva, de la media. El aislamiento social, de la tardía.",
      "¿Qué entrenamiento de ACTIVE obtuvo el mayor efecto sobre las AIVD a los diez años?|Memoria|Velocidad|Razonamiento|Memoria 0,48, razonamiento 0,38 y velocidad 0,36, aunque la pérdida de participantes obliga a la prudencia.",
      "¿Qué caracteriza la intervención de FINGER?|Actuar sobre varios frentes a la vez|Entrenar solo la velocidad mental|Aplicar fármacos contra la demencia|Combinó dieta, ejercicio, entrenamiento cognitivo y control vascular durante dos años en 1.260 personas de 60 a 77 años."
    ],
    inc: [
      "Sobre los ensayos de prevención|La cifra del 45,3 % se ha replicado en todas las cohortes|La pérdida auditiva es el factor modificable de mayor peso|El entrenamiento mejora sobre todo la tarea practicada|Es teórica, y su réplica en cohortes como el Wisconsin Longitudinal Study ha sido solo parcial."
    ],
    seq: [],
    cls: [
      "Etapa vital del factor de la Lancet|Temprana: educación|Media: pérdida auditiva; LDL alto; hipertensión; diabetes; inactividad física|Tardía: aislamiento social; contaminación; pérdida de visión"
    ] }
] },
{ n: 11, t: "Bienestar y personalidad a mitad de la vida", cap: 6, pir: "alta", mods: [
  { t: "Bienestar psicológico y la curva en U",
    tip: "El bienestar subjetivo es hedónico (satisfacción y afecto), y el psicológico, eudaimónico, con las seis dimensiones de Ryff (1989). En MIDUS, el propósito y el crecimiento personal bajan hacia la vejez, mientras que la autonomía y el dominio del entorno se mantienen. Blanchflower y Oswald (2008) describieron una curva en U con mínimo en la mediana edad, pero Galambos et al. (2020) señalan datos transversales, resultados longitudinales mixtos y efectos pequeños.",
    v: [
      "Bienestar subjetivo=Satisfacción con la vida y balance entre afecto positivo y negativo",
      "Bienestar psicológico=Funcionamiento pleno en seis dimensiones, como propósito y crecimiento",
      "Enfoque eudaimónico=Mirar si la persona funciona bien, tiene metas y sigue creciendo",
      "Enfoque hedónico=Mirar cuánto satisface la vida y cuánto afecto positivo se experimenta",
      "MIDUS=Estudio estadounidense Midlife in the United States",
      "Curva en U=Mínimo de satisfacción vital en la mediana edad (Blanchflower y Oswald, 2008)",
      "Periodo pivote=Mediana edad que acumula roles y enlaza generaciones (Lachman)",
      "Galambos et al. (2020)=Revisión crítica de la U por sus datos transversales y longitudinales mixtos"
    ],
    g: [
      "Ryff (1989) organizó el bienestar psicológico en ___ dimensiones.|seis|cinco|cuatro",
      "En MIDUS, el ___ en la vida tiende a bajar, sobre todo hacia la vejez.|propósito|dominio|control",
      "Lachman, Teshale y Agrigoroaei (___) subrayan que la mediana edad condiciona la salud y el bienestar de la vejez.|2015|2004|2020",
      "Blanchflower y ___ (2021) replicaron defendiendo la curva en U.|Graham|Oswald|Galambos",
      "Si existe, la curva en U es poco ___ y esconde una gran variabilidad individual.|profunda|frecuente|conocida"
    ],
    tf: [
      "Se puede atravesar una etapa dura con un fuerte sentido de propósito.|V",
      "Galambos et al. (2020) concluyen que la curva en U describe bien lo que le ocurre a cada persona.|F|La curva promedio esconde una gran variabilidad individual: unas trayectorias suben, otras bajan y otras se mantienen.",
      "Los estudios longitudinales confirman de forma unánime la curva en U.|F|Dan resultados mixtos: unos encuentran la U y otros trayectorias estables o crecientes.",
      "La forma de la curva en U depende de qué variables se controlen en el análisis.|V"
    ],
    q: [
      "Marta, de 47 años, dice que nunca ha estado mejor, y su hermano, de 45, atraviesa una mala racha tras perder el trabajo. ¿Qué explica mejor la diferencia?|Sus circunstancias|Su edad exacta|Su generación|Más allá de la edad, pesan la salud, los ingresos, la sensación de control y el apoyo social.",
      "¿Qué relación describieron Blanchflower y Oswald (2008) entre edad y satisfacción vital?|Una U con mínimo en la mediana edad|Una U invertida con máximo a los 45|Un descenso continuo desde la juventud|Con grandes encuestas de varios países, el bienestar sería mayor en la juventud, mínimo en la mediana edad y subiría después.",
      "¿Qué problema señalaron Galambos et al. (2020) en los datos de la curva en U?|Confunden edad y cohorte|Solo incluyen a mayores|Miden mal el afecto|Buena parte son transversales. Además, los longitudinales son mixtos y los efectos, pequeños.",
      "Una persona tiene metas que le importan y sigue creciendo, aunque su satisfacción diaria sea baja. ¿Qué tipo de bienestar tiene alto?|El psicológico|El subjetivo|El hedónico|El bienestar psicológico es eudaimónico (Ryff). El subjetivo, de enfoque hedónico, refleja satisfacción y afecto."
    ],
    inc: [
      "Sobre el bienestar en la mediana edad|Hay un declive general del bienestar con la edad|La curva en U, si existe, es poco profunda|El bienestar psicológico tiene seis dimensiones|No hay declive general: las dimensiones cambian en direcciones distintas, en la línea del desarrollo multidireccional."
    ],
    seq: [],
    cls: [
      "Tipo de bienestar|Subjetivo o hedónico: satisfacción con la vida; balance de afecto positivo y negativo|Psicológico o eudaimónico: propósito en la vida; crecimiento personal; autonomía"
    ] },
  { t: "¿Existe la crisis de los cuarenta?",
    tip: "La expresión «crisis de la mediana edad» se atribuye a Elliott Jaques (1965). Levinson (1978) describió una transición hacia los 40-45 años, pero con 40 varones de una sola cohorte, y una transición no equivale a una crisis. En MIDUS, Wethington (2000) halló que solo en torno al 26 % decía haberla vivido, en proporción similar en ambos sexos y ligada a sucesos concretos. Suele ser una crisis situacional, no de desarrollo.",
    v: [
      "Elliott Jaques (1965)=Psicoanalista al que se atribuye la expresión de la crisis de los cuarenta",
      "Wethington (2000)=Preguntó en MIDUS si se había vivido una crisis de la mediana edad",
      "Transición de Levinson=Revisión del Sueño juvenil y la estructura de vida hacia los 40-45 años",
      "Crisis según Caplan=Desequilibrio transitorio que aparece cuando fallan los recursos de afrontamiento",
      "Crisis situacional=Malestar ligado a sucesos concretos que coinciden con una edad",
      "Crisis de desarrollo=Desequilibrio que la propia edad produciría de forma inevitable",
      "Reloj social=Calendario de Neugarten que hace ver ciertos cambios como «fuera de tiempo»",
      "Balance vital=Comparar metas con lo logrado y ajustar prioridades sin ruptura"
    ],
    g: [
      "Según Wethington (2000), solo en torno al ___ dijo haber tenido una crisis de la mediana edad.|26 %|62 %|46 %",
      "La muestra de Levinson era de 40 varones de una sola ___.|cohorte|ciudad|empresa",
      "Levinson situó la transición de la mitad de la vida hacia los ___ años.|40-45|35-40|50-55",
      "Quienes referían la crisis la atribuían sobre todo a ___ concretos.|sucesos|rasgos|síntomas",
      "El reloj ___ de Neugarten explica que algunos cambios llamen la atención por estar fuera de tiempo.|social|biológico|vital"
    ],
    tf: [
      "En MIDUS, la crisis de la mediana edad era más frecuente en los hombres que en las mujeres.|F|La proporción era similar en ambos sexos, frente al estereotipo de que es un fenómeno masculino.",
      "Revisar la propia vida puede hacerse sin desorganización emocional.|V",
      "Levinson demostró que la crisis de los cuarenta es universal.|F|Describió una transición, no una crisis, con una muestra de 40 varones de una sola cohorte.",
      "La mediana edad concentra sucesos estresantes que pueden coincidir en el tiempo, lo que ayuda a que el mito persista.|V"
    ],
    q: [
      "Javier deja a los 44 años la consultoría para dar clases en un instituto y explica que lo llevaba años planeando. ¿Cómo lo interpreta mejor la investigación?|Como un balance sin ruptura|Como una crisis inevitable|Como un trastorno adaptativo|Es más exacto ver la mediana edad como una etapa de balance. Desde fuera parece crisis porque el cambio se percibe fuera de tiempo.",
      "Un paciente de 45 años refiere malestar persistente y su médico lo atribuye a «la edad». ¿Qué riesgo tiene esa lectura?|Pasar por alto una depresión|Retrasar la transición vital|Exagerar el reloj social|Atribuir el malestar a la edad puede hacer que se pase por alto una depresión o un problema concreto.",
      "¿A qué atribuían la crisis quienes la referían en MIDUS?|A sucesos concretos|A la propia edad|Al hecho de ser varón|Divorcio, enfermedad, pérdida del empleo o muerte de un padre: una crisis situacional que coincide con esa edad.",
      "¿Qué trampa típica del Clave PIR contiene «la transición de Levinson es una crisis obligatoria»?|Igualar transición y crisis|Atribuir el estudio a Jaques|Confundir Levinson con Erikson|Una transición supone revisar la estructura de vida. No equivale a desorganización emocional ni es universal."
    ],
    inc: [
      "Sobre la crisis de la mediana edad|Tres de cada cuatro adultos la refieren en MIDUS|Su expresión se atribuye a Elliott Jaques|Suele ser situacional y no de desarrollo|Es al revés: unas tres de cada cuatro personas no la reconocían, y solo la refería en torno al 26 %."
    ],
    seq: [],
    cls: [] },
  { t: "Estabilidad y cambio de la personalidad",
    tip: "Hay que distinguir la estabilidad de rango, que mantiene la posición relativa de cada persona y se mide con correlaciones test-retest, de la estabilidad de nivel medio, que mantiene la puntuación media del grupo. La de rango es alta pero no perfecta, en torno a 0,60, y baja en la vejez avanzada. Según Roberts, Walton y Viechtbauer (2006), suben la responsabilidad, la estabilidad emocional y la dominancia social, sobre todo de los 20 a los 40 años.",
    v: [
      "Estabilidad de rango=Se mantiene la posición relativa de cada persona dentro del grupo",
      "Estabilidad de nivel medio=Se mantiene la puntuación media del grupo en un rasgo",
      "Correlación test-retest=Medida de la estabilidad diferencial entre dos momentos",
      "Cambio normativo=Cambio de rasgos compartido por la mayoría de las personas",
      "Roberts et al. (2006)=Metaanálisis de 92 muestras longitudinales sobre el cambio de rasgos",
      "Dominancia social=Faceta de la extraversión que sube de los 20 a los 40 años",
      "Vitalidad social=Faceta de la extraversión que baja en la vejez",
      "Bleidorn et al. (2022)=Revisión que sitúa la estabilidad de rango en torno a 0,60"
    ],
    g: [
      "El metaanálisis de Roberts, Walton y Viechtbauer reunió ___ muestras longitudinales.|92|62|152",
      "La estabilidad de rango ___ en la vejez avanzada.|baja|sube|culmina",
      "La apertura a la experiencia tiende a ___ en la vejez.|bajar|subir|fijarse",
      "La estabilidad emocional es el inverso del ___.|neuroticismo|psicoticismo|introversión",
      "Buena parte del cambio de personalidad ocurre en la adultez ___.|temprana|media|tardía"
    ],
    tf: [
      "Una correlación test-retest alta prueba que los rasgos no cambian.|F|Indica que se mantiene el orden entre personas, no la puntuación. Es una trampa típica del Clave PIR.",
      "La extraversión se comporta de forma distinta según la faceta.|V",
      "La responsabilidad aumenta sobre todo después de los 60 años.|F|Sube sobre todo de los 20 a los 40 años, y el cambio continúa después más despacio.",
      "La tendencia media de cambio no implica que todas las personas cambien igual.|V"
    ],
    q: [
      "Lucía era desordenada a los 22 años y a los 38 es puntual, pero sigue siendo «la más despistada» de sus amigas, que también han cambiado. ¿Qué muestra?|Estabilidad de rango con cambio de nivel medio|Estabilidad de nivel medio con cambio de rango|Ausencia de cualquier tipo de cambio|Todas son más responsables (cambio de nivel medio), pero Lucía conserva su posición relativa (estabilidad de rango).",
      "¿Qué rasgo baja en la vejez según Roberts et al. (2006)?|La apertura|La responsabilidad|La dominancia social|Apertura y vitalidad social bajan en la vejez. Responsabilidad y dominancia social suben, sobre todo de los 20 a los 40.",
      "¿En torno a qué valor sitúa la estabilidad de rango la revisión de Bleidorn et al. (2022)?|0,60|0,90|0,30|Es alta pero no perfecta (cifra aproximada, citada en fuentes secundarias) y baja en la vejez avanzada.",
      "¿Con qué se mide la estabilidad de rango?|Correlaciones test-retest|Diferencias de medias|Tamaños del efecto|La correlación indica si se conserva el orden. Las diferencias de medias reflejan la estabilidad de nivel medio."
    ],
    inc: [
      "Sobre el cambio de personalidad|La dominancia social baja en la vejez|La responsabilidad sube de los 20 a los 40|La estabilidad de rango es alta pero no perfecta|La dominancia social sube, sobre todo de los 20 a los 40. La faceta que baja en la vejez es la vitalidad social."
    ],
    seq: [],
    cls: [
      "Cambio medio de los rasgos|Sube de los 20 a los 40: responsabilidad; estabilidad emocional; dominancia social|Baja en la vejez: apertura a la experiencia; vitalidad social"
    ] },
  { t: "El principio de madurez",
    tip: "El principio de madurez (Caspi, Roberts y Shiner, 2005) describe que con la edad las personas tienden a ser más responsables, más estables emocionalmente y más amables, rasgos que facilitan los roles adultos. Es una madurez funcional, no el ideal de Allport. Se discute si se debe a una maduración intrínseca (McCrae y Costa) o a la inversión en roles sociales. Describe un cambio de nivel medio y desaconseja el fatalismo.",
    v: [
      "Principio de madurez=Aumento con la edad de responsabilidad, estabilidad emocional y amabilidad",
      "Caspi, Roberts y Shiner=Autores que formularon en 2005 el aumento normativo de rasgos adaptativos",
      "Madurez funcional=Cambio de rasgos que favorece adaptarse a las demandas sociales adultas",
      "Maduración intrínseca=Cambio por procesos biológicos internos, poco dependiente de la experiencia",
      "Inversión en roles=Asumir trabajo, pareja o crianza consolida conductas responsables como rasgos",
      "Teoría de los cinco factores=Rasgos como tendencias básicas con fuerte base biológica (McCrae y Costa)",
      "Ideal de Allport (1961)=Madurez entendida como meta de desarrollo, distinta de la funcional",
      "Generatividad=Cuidado y transmisión a las generaciones siguientes (Erikson)"
    ],
    g: [
      "Según el principio de madurez, con la edad aumenta la ___.|amabilidad|apertura|extraversión",
      "Para McCrae y Costa, los rasgos son tendencias ___ con una fuerte base biológica.|básicas|adquiridas|situacionales",
      "Si el ritmo del cambio sigue al de las transiciones vitales, se apoya la explicación de los ___.|roles sociales|genes heredados|procesos internos",
      "La regularidad de la dirección ___ del cambio sugiere que no todo depende del entorno.|media|individual|social",
      "Muchos roles que impulsan la madurez de los rasgos son de cuidado, en línea con la ___ de Erikson.|generatividad|integridad|intimidad"
    ],
    tf: [
      "El principio de madurez fue formulado por Costa y McCrae.|F|Se atribuye a Caspi, Roberts y Shiner (2005). Atribuirlo a Costa y McCrae es una trampa típica.",
      "El principio de madurez describe un cambio de nivel medio, no una pérdida de la estabilidad de rango.|V",
      "La «madurez» de este principio es el ideal de desarrollo de Allport (1961).|F|Es una madurez funcional: un cambio de rasgos que facilita adaptarse a las demandas sociales de la adultez.",
      "Las diferencias individuales en el cambio apoyan un papel de la experiencia.|V"
    ],
    q: [
      "Raúl, de 52 años, cree que su irritabilidad «no tiene arreglo, porque ya es tarde para cambiar». ¿Qué dato le resulta útil?|Que la estabilidad emocional suele subir|Que los rasgos quedan fijados a los 30|Que la estabilidad de rango es perfecta|Los rasgos siguen cambiando en la mediana edad, y saberlo cambia las expectativas del propio paciente frente al fatalismo.",
      "Según la explicación de los roles sociales, ¿qué causa el cambio de rasgos?|El compromiso con roles adultos|Los procesos biológicos internos|La pérdida de estabilidad de rango|Un trabajo estable, una pareja o la crianza exigen conductas responsables que, repetidas, se consolidan como rasgos.",
      "¿Qué predicción caracteriza la explicación de la maduración intrínseca?|Cambio parecido aunque varíen las experiencias|Cambio al ritmo de las transiciones vitales|Ningún cambio de rasgos tras los 30 años|Si el cambio es madurativo, debería ser parecido aunque cambien las experiencias. Seguir a las transiciones es la predicción de los roles.",
      "¿Qué rasgos aumentan con la edad según el principio de madurez?|Responsabilidad, estabilidad y amabilidad|Apertura, extraversión y amabilidad|Neuroticismo, apertura y responsabilidad|Son rasgos que facilitan trabajar, cuidar a otros, mantener una pareja o participar en la comunidad."
    ],
    inc: [
      "Sobre el principio de madurez|Implica que los rasgos dejan de cambiar en la madurez|Encaja con una mediana edad que no se vive como crisis|Conecta con la generatividad de Erikson|Los rasgos siguen cambiando: «yo soy así» no es una descripción definitiva a ninguna edad."
    ],
    seq: [],
    cls: [
      "Explicación del principio de madurez|Maduración intrínseca: procesos biológicos internos; McCrae y Costa; cambio parecido pese a experiencias distintas|Roles sociales: compromiso con roles adultos; trabajo, pareja y crianza; ritmo ligado a las transiciones"
    ] }
] },
{ n: 12, t: "Vínculos, trabajo y ocio en la adultez media", cap: 6, pir: "media", mods: [
  { t: "Pareja, hijos y padres mayores",
    tip: "En la mediana edad la familia mira hacia abajo, a los hijos que se hacen adultos, y hacia arriba, a los padres que envejecen: son las vidas interconectadas de Hagestad (1990). La generación sándwich apoya a la vez a hijos y padres, con sentido pero también con sobrecarga. El nido vacío no suele ser un trauma, y la satisfacción conyugal tiende a mantenerse o mejorar. En España, con una emancipación muy tardía, es más frecuente el nido lleno.",
    v: [
      "Vidas interconectadas=Lo que vive un miembro de la familia repercute en los demás (Hagestad, 1990)",
      "Generación sándwich=Adultos que a la vez apoyan a sus hijos y cuidan de sus padres",
      "Nido vacío=Salida de los hijos del hogar, que no suele causar malestar duradero",
      "Nido lleno=Hijos adultos que siguen viviendo en casa, frecuente en España",
      "Hipogonadismo de inicio tardío=Término que se prefiere a «andropausia» en los hombres",
      "Tareas evolutivas=Metas de cada etapa, como ayudar a los hijos adolescentes (Havighurst)",
      "Cuidado familiar=Ayuda a los padres mayores, que recae con más frecuencia en las mujeres",
      "Reencuentro de pareja=Mayor cercanía de la pareja al reducirse la crianza"
    ],
    g: [
      "La satisfacción conyugal suele ___ cuando los hijos se marchan.|mantenerse o mejorar|empeorar de forma clara|caer de forma duradera",
      "Cuando los hijos se independizan, la relación con ellos tiende a hacerse más ___.|recíproca|distante|conflictiva",
      "En los hombres, el término «andropausia» es ___.|discutido|consensuado|universal",
      "Havighurst incluía entre las tareas de la adultez media adaptarse al ___ de los propios padres.|envejecimiento|nuevo trabajo|nuevo hogar",
      "El concepto de vidas interconectadas se debe a ___ (1990).|Hagestad|Havighurst|Neugarten"
    ],
    tf: [
      "El cuidado de los padres mayores recae con más frecuencia en las mujeres.|V",
      "La evidencia confirma que la salida de los hijos suele ser un trauma duradero para las madres.|F|La tristeza inicial no suele convertirse en un problema duradero, y la satisfacción conyugal tiende a mantenerse o mejorar.",
      "Que la salida de los hijos se produzca «a tiempo» influye en la adaptación de los padres.|V",
      "Cuidar de los padres se asocia a más ansiedad y depresión con independencia de la carga y de los apoyos.|F|El riesgo aumenta sobre todo cuando la carga es alta y faltan apoyos, y el cuidado también puede dar propósito."
    ],
    q: [
      "Elena, de 52 años, trabaja a jornada completa, su hijo de 26 sigue en casa y su madre necesita ayuda con la medicación. ¿Qué concepto la describe?|Generación sándwich|Síndrome del nido vacío|Crisis de los cuarenta|Apoya a su hijo y empieza a cuidar de su madre. Ninguna situación es excepcional, pero su coincidencia explica buena parte del estrés.",
      "¿Qué factores influyen en la adaptación al nido vacío?|Relación previa y calendario|Sexo y edad de los padres|Número de hijos y renta|Influyen la calidad de la relación previa con los hijos y que la salida se produzca «a tiempo».",
      "Un padre sigue fijando a su hijo de 30 años la hora de volver a casa y discuten a menudo. ¿Qué explica mejor el conflicto?|Límites mal ajustados|Emancipación tardía|El nido vacío|Los conflictos aparecen sobre todo cuando no se ajustan expectativas y límites, como al tratar como adolescente a un hijo adulto.",
      "¿Qué riesgo principal se asocia a la pareja en la mediana edad?|Conflictos acumulados|Sobrecarga del cuidador|Límites mal ajustados|Para unas parejas es un reencuentro, y en otras salen a la luz conflictos que la rutina tapaba."
    ],
    inc: [
      "Sobre la familia en la mediana edad|En España predomina el problema del nido vacío|La relación con los hijos adultos se vuelve recíproca|La sexualidad sigue siendo importante|Con una emancipación muy tardía, en España es más frecuente el nido lleno, con hijos adultos que siguen en casa."
    ],
    seq: [],
    cls: [
      "Relación familiar|Pareja: reencuentro al reducirse la crianza; conflictos acumulados|Hijos adultos: relación más recíproca; límites mal ajustados|Padres mayores: inicio del cuidado; sobrecarga del cuidador"
    ] },
  { t: "Convoy social y apoyo social",
    tip: "Kahn y Antonucci (1980) describen la red de relaciones como un convoy de tres círculos concéntricos que acompaña a la persona y cambia con sus transiciones. Cohen y Wills (1985) distinguen el efecto principal, que beneficia en cualquier circunstancia, del amortiguador, que protege sobre todo ante el estrés. Holt-Lunstad et al. (2010) hallaron una OR de 1,50 de supervivencia con relaciones fuertes, con datos observacionales que no prueban por sí solos la causalidad.",
    v: [
      "Convoy social=Red de relaciones en círculos concéntricos que acompaña a la persona",
      "Círculo interior=Íntimos sin los que cuesta imaginar la propia vida",
      "Círculo exterior=Vínculos ligados a un rol, como compañeros de trabajo o vecinos",
      "Efecto principal=Las relaciones benefician la salud en cualquier circunstancia",
      "Efecto amortiguador=El apoyo protege sobre todo cuando hay estrés",
      "Integración en la red=Número de vínculos que se tienen, más ligado al beneficio general",
      "Apoyo percibido=Sentir que habrá ayuda si hace falta",
      "Berkman y Syme (1979)=Hallaron en Alameda más mortalidad en nueve años con menos vínculos"
    ],
    g: [
      "El convoy social se representa con ___ círculos concéntricos.|tres|dos|cuatro",
      "Las personas de los círculos ___ cambian con más facilidad, por ejemplo al cambiar de empleo.|externos|internos|centrales",
      "El apoyo ___ se asocia más al efecto amortiguador.|percibido|recibido|estructural",
      "Uchino (2004) revisó las vías ___ que podrían explicar los efectos del apoyo.|fisiológicas|cognitivas|culturales",
      "En Holt-Lunstad et al. (2010), con medidas multidimensionales la OR llegó a ___.|1,91|1,50|1,29"
    ],
    tf: [
      "El modelo del convoy social fue propuesto por Carstensen.|F|Es de Kahn y Antonucci (1980). Carstensen explica la selectividad de las amistades. Es una trampa típica.",
      "El núcleo interior del convoy suele ser más estable que los círculos externos.|V",
      "En Holt-Lunstad et al. (2015), la soledad se asoció a mayor mortalidad, con una OR de 1,26.|V",
      "Ensayos experimentales han probado que la relación entre vínculos y mortalidad es causal.|F|Los estudios son observacionales: la asociación es robusta, pero no prueba por sí sola la causalidad."
    ],
    q: [
      "Un estudio halla que sentirse respaldado protege la salud de unos trabajadores en las épocas de mucha presión, pero no en las tranquilas. ¿Qué hipótesis apoya?|Efecto amortiguador|Efecto principal|Convoy social|El efecto amortiguador actúa sobre todo ante el estrés. El principal beneficiaría en cualquier circunstancia.",
      "¿Dónde situaría el modelo del convoy a un compañero con el que solo se coincide en la oficina?|En el círculo exterior|En el círculo interior|En el círculo intermedio|El exterior reúne vínculos ligados a un rol, que cambian con más facilidad al cambiar de empleo o de ciudad.",
      "¿Qué indicador se asoció a una OR de 1,32 de mayor mortalidad en Holt-Lunstad et al. (2015)?|Vivir solo|La soledad|El aislamiento social|Vivir solo 1,32, aislamiento social 1,29 y soledad 1,26, en un metaanálisis de 70 estudios.",
      "¿Por qué el efecto de las relaciones crece con medidas multidimensionales?|Importa también lo que aportan|Incluyen más participantes|Eliminan los sesgos de selección|Importa tanto tener vínculos como lo que aportan. Con estas medidas, la OR pasa de 1,50 a 1,91."
    ],
    inc: [
      "Sobre el apoyo social|El efecto principal solo actúa en situaciones de estrés|La integración en la red se liga al efecto principal|El convoy se mueve con la persona y sus transiciones|El efecto principal actúa en cualquier circunstancia. El que protege sobre todo ante el estrés es el amortiguador."
    ],
    seq: [],
    cls: [
      "Círculo del convoy social|Interior: pareja; hijos; amigo íntimo|Intermedio: personas cercanas pero menos centrales|Exterior: compañeros de trabajo; vecinos"
    ] },
  { t: "Trabajo, carrera y desgaste profesional",
    tip: "En la teoría de Super, la mediana edad corresponde a la etapa de mantenimiento: conservar la posición, actualizarse y transmitir, un terreno de generatividad. El burnout de Maslach tiene tres dimensiones, agotamiento emocional, despersonalización y baja realización personal, y se mide con el MBI. La CIE-11 lo clasifica como fenómeno ocupacional (QD85), no como enfermedad, y debe diferenciarse de la depresión. La prevención combina el nivel individual y el organizacional.",
    v: [
      "Etapa de mantenimiento=Fase de Super en la que se conserva y actualiza la posición alcanzada",
      "Agotamiento emocional=Sensación de estar vaciado, sin energía para otro día de trabajo",
      "Despersonalización=Distanciamiento frío del trabajo o de las personas atendidas",
      "Baja realización personal=Sensación de ineficacia y de que el esfuerzo no sirve de nada",
      "MBI=Instrumento clásico de Maslach para medir el desgaste profesional",
      "QD85=Código de la CIE-11 para el burnout como fenómeno ocupacional",
      "Conflicto trabajo-familia=Choque entre exigencias laborales y familiares, en ambas direcciones",
      "Formación continua=Aprendizaje a lo largo de la carrera que sostiene motivación y empleabilidad"
    ],
    g: [
      "La CIE-11 incluye el burnout entre los factores que influyen en el estado de ___.|salud|ánimo|alerta",
      "El burnout se refiere solo al contexto ___.|laboral|familiar|social",
      "En la teoría de Super, tras explorar y ___, la persona trata de conservar su posición.|establecerse|jubilarse|formarse",
      "Formar a compañeros jóvenes es una forma de ___ en el trabajo.|generatividad|intimidad|integridad",
      "Insistir solo en la resiliencia individual ante condiciones nocivas desplaza la responsabilidad hacia el ___.|trabajador|sindicato|cliente"
    ],
    tf: [
      "La CIE-11 considera el burnout un trastorno mental de origen laboral.|F|Lo clasifica como fenómeno ocupacional (QD85), no como enfermedad ni trastorno mental.",
      "El burnout comparte síntomas con la depresión, pero esta afecta a todos los ámbitos de la vida.|V",
      "La prevención del burnout debe centrarse sobre todo en la resiliencia individual del trabajador.|F|Conviene combinar el nivel individual y el organizacional, con carga razonable, autonomía y reconocimiento.",
      "Los cambios de carrera en la mediana edad, por elección o por necesidad, son hoy habituales.|V"
    ],
    q: [
      "Pilar, enfermera de 49 años, termina cada turno exhausta, habla de los pacientes como «la cama 12» y duda de que su trabajo sirva de algo. ¿Qué presenta?|Burnout completo|Depresión mayor|Estrés puntual|Están las tres dimensiones de Maslach: agotamiento emocional, despersonalización y baja realización, ligadas a su trabajo.",
      "¿Qué dimensión del burnout refleja hablar de los pacientes como «la cama 12»?|Despersonalización|Agotamiento emocional|Baja realización|Es el distanciamiento frío de las personas atendidas. El agotamiento es estar vaciado, y la baja realización, sentirse ineficaz.",
      "¿Qué rasgo distingue el burnout del estrés laboral puntual?|Es crónico, de meses o años|Se extiende a toda la vida|Se basa en la activación|El estrés puntual es transitorio y puede extenderse a otros ámbitos. El burnout es crónico y específico del trabajo.",
      "¿Con qué se relaciona la satisfacción laboral?|Logro, autonomía y conciliación|Salario, horario y estabilidad|Antigüedad, cargo y jerarquía|Se relaciona con la sensación de logro, la autonomía y la posibilidad de conciliar."
    ],
    inc: [
      "Sobre el burnout|Puede aplicarse a otras áreas de la vida|Su instrumento clásico es el MBI|Maslach lo describió con tres dimensiones|Se refiere solo al contexto laboral y no debe aplicarse a otras áreas de la vida."
    ],
    seq: [
      "Etapas de la carrera según Super|Exploración>Establecimiento>Mantenimiento"
    ],
    cls: [
      "Tipo de estrés laboral|Burnout: crónico; específico del trabajo; fenómeno ocupacional|Estrés laboral puntual: transitorio; picos de demanda; puede extenderse a otros ámbitos"
    ] },
  { t: "Ocio, flow y crecimiento personal",
    tip: "El ocio son actividades elegidas por sí mismas, y en la mediana edad tiende a quedar reducido a lo pasivo. Csikszentmihalyi (1990) llamó flow a la absorción total en una actividad, que exige equilibrio entre un reto alto y una habilidad alta. Si el reto supera a la habilidad aparece ansiedad, y si la habilidad supera al reto, aburrimiento. El ocio activo y serio es una vía de crecimiento personal y actúa sobre factores modificables de demencia.",
    v: [
      "Flow=Absorción total en una actividad con reto y habilidad altos y equilibrados",
      "Experiencia óptima=Otro nombre del estado de fluir descrito por Csikszentmihalyi",
      "Ansiedad=Estado que aparece cuando el reto supera a la habilidad",
      "Aburrimiento=Estado que aparece cuando la habilidad supera al reto",
      "Ocio serio=Actividad de desarrollo, como aprender un idioma o tocar un instrumento",
      "Ocio pasivo=Televisión o redes sociales, que aportan sobre todo descanso",
      "Autorrealización=Desarrollo del propio potencial, cima de la jerarquía de Maslow (1970)",
      "Identidad narrativa=Dar sentido a lo vivido en un relato coherente (McAdams)"
    ],
    g: [
      "Las metas claras y la ___ inmediata favorecen el flow.|retroalimentación|recompensa económica|supervisión externa",
      "El voluntariado y las asociaciones vecinales aportan sobre todo pertenencia y ___.|generatividad|descanso|competencia",
      "Para mantener el flow, a medida que crece la habilidad hay que ___ el reto.|subir|bajar|mantener",
      "Maslow situó la ___ en lo alto de su jerarquía de necesidades.|autorrealización|autoafirmación|autodeterminación",
      "El ocio activo y social actúa sobre factores de demencia como la inactividad física o el ___ social.|aislamiento|rechazo|conflicto"
    ],
    tf: [
      "El flow aparece con más facilidad en tareas fáciles que no exigen esfuerzo.|F|Exige retos altos equilibrados con la habilidad. Si la habilidad supera al reto, aparece aburrimiento.",
      "El flow puede aparecer en el trabajo, en el deporte o en la cocina.|V",
      "Las actividades de ocio pasivo son perjudiciales en sí mismas.|F|No lo son, pero suelen aportar menos que las que exigen implicación, como el deporte o el voluntariado.",
      "Cultivar el ocio en la mediana edad facilita la jubilación.|V"
    ],
    q: [
      "Andrés, contable de 50 años, restaura muebles y, cuando una pieza le resulta demasiado fácil, busca otra más difícil. ¿Por qué lo hace, según Csikszentmihalyi?|Para mantener el reto equilibrado|Para reducir la ansiedad inicial|Para evitar la absorción total|Si la habilidad supera al reto aparece aburrimiento. Subir el reto conserva el flow y empuja a seguir aprendiendo.",
      "Una persona afronta una tarea cuyo reto supera claramente su habilidad. ¿Qué experimentará?|Ansiedad|Aburrimiento|Flow|Cuando el reto supera a la habilidad aparece ansiedad. El flow exige reto y habilidad altos y equilibrados.",
      "¿Qué forma de crecimiento personal corresponde a la identidad narrativa de McAdams?|Revisar lo vivido|Cuidar y transmitir|Aprender algo nuevo|Consiste en dar sentido a lo vivido en un relato coherente. Cuidar y transmitir corresponde a la generatividad de Erikson.",
      "¿Por qué el ocio activo y serio es una vía de crecimiento personal?|Obliga a seguir aprendiendo|Ofrece sobre todo descanso|Evita cualquier esfuerzo|El flow exige subir el reto al crecer la habilidad. El crecimiento personal es una dimensión de Ryff que tiende a bajar con la edad."
    ],
    inc: [
      "Sobre el ocio y el flow|El flow surge cuando la habilidad supera con holgura al reto|El flow implica perder la noción del tiempo|El ocio son actividades elegidas por sí mismas|Cuando la habilidad supera al reto aparece aburrimiento. El flow exige reto y habilidad altos y equilibrados."
    ],
    seq: [],
    cls: [
      "Tipo de ocio|Pasivo: televisión; redes sociales|Serio o de desarrollo: tocar un instrumento; aprender un idioma|Social y comunitario: voluntariado; asociaciones vecinales"
    ] }
] }
);

// SAIMAP Psicología · Desarrollo: Adultez · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Envejecimiento normal y patológico", cap: 7, pir: "media", mods: [
  { t: "Por qué envejecemos: teorías biológicas",
    tip: "El envejecimiento es universal, progresivo, individual e irreversible pero modificable, y la variabilidad entre personas aumenta con la edad. Las teorías de daño, como los radicales libres de Harman, y las programadas se consideran hoy complementarias. López-Otín et al. integraron los mecanismos en nueve marcas del envejecimiento en 2013 y en doce en 2023.",
    v: [
      "Teorías de daño=Atribuyen el envejecimiento a errores y lesiones que se acumulan al azar",
      "Teorías programadas=Proponen mecanismos internos que marcan el ritmo del declive",
      "Radicales libres=Moléculas reactivas de oxígeno que, según Harman (1956), dañan proteínas y ADN",
      "Límite de Hayflick=Número limitado de divisiones de una célula humana antes de la senescencia",
      "Telómeros=Extremos protectores de los cromosomas que se acortan en cada división",
      "Telomerasa=Enzima que alarga los extremos cromosómicos, muy activa en muchas células tumorales",
      "Inmunosenescencia=Pérdida de eficacia del sistema inmunitario con la edad (Pawelec, 2006)",
      "Marcas del envejecimiento=Red de procesos interrelacionados que integra las teorías (López-Otín et al.)"
    ],
    g: [
      "Harman propuso la teoría de los radicales libres en ___.|1956|1961|1987",
      "Cuando los telómeros son demasiado cortos, la célula deja de dividirse y entra en ___.|senescencia|apoptosis|mitosis",
      "En su revisión de 2023, López-Otín et al. ampliaron las marcas del envejecimiento de nueve a ___.|doce|diez|quince",
      "Que cada órgano envejezca a su propio ritmo ilustra que el envejecimiento es ___.|individual|universal|irreversible",
      "La disbiosis, añadida a las marcas en 2023, es una alteración de la ___.|microbiota|proteostasis|telomerasa"
    ],
    tf: [
      "Los suplementos antioxidantes han demostrado alargar la vida humana, lo que confirma la versión simple de Harman.|F|No lo han demostrado, y las moléculas reactivas también cumplen funciones de señalización.",
      "Las teorías de daño y las teorías programadas se consideran hoy complementarias.|V",
      "La telomerasa es muy activa en algunas células madre y en muchas células tumorales.|V",
      "Como el envejecimiento es irreversible, no puede acelerarse ni frenarse.|F|Es irreversible, pero modificable: no se detiene, aunque puede acelerarse o frenarse."
    ],
    q: [
      "En un laboratorio, unas células humanas cultivadas dejan de dividirse tras un número limitado de divisiones. ¿Qué fenómeno se observa?|El límite de Hayflick|La inmunosenescencia|La disbiosis intestinal|Las células humanas no se dividen indefinidamente y entran en senescencia. Una explicación es el acortamiento de los telómeros.",
      "¿Qué rasgo del envejecimiento explica que la variabilidad entre personas aumente con la edad?|Que es individual|Que es universal|Que es progresivo|Cada persona y cada órgano envejecen a su ritmo, por lo que las diferencias crecen con los años (Baltes, 1987).",
      "¿Cuál de estas marcas añadieron López-Otín et al. en la revisión de 2023?|La inflamación crónica|La senescencia celular|La disfunción mitocondrial|En 2023 se añadieron la macroautofagia deshabilitada, la inflamación crónica y la disbiosis. Las otras ya figuraban en 2013.",
      "Un hombre de 80 años responde peor a una vacuna que su hijo y mantiene una inflamación de bajo grado. ¿Qué lo explica mejor?|La inmunosenescencia|El acortamiento telomérico|El límite de Hayflick|El sistema inmunitario pierde eficacia con la edad y se acompaña de una inflamación de bajo grado (Pawelec, 2006)."
    ],
    inc: [
      "Sobre las teorías biológicas del envejecimiento|Una sola teoría explica hoy el envejecimiento|Los telómeros se acortan en cada división celular|Las moléculas reactivas también tienen funciones de señalización|Ninguna teoría basta por sí sola. El marco de las marcas lo presenta como una red de procesos que se refuerzan entre sí."
    ],
    seq: [],
    cls: [
      "Marcas del envejecimiento|Lista de 2013: inestabilidad genómica; desgaste de los telómeros; senescencia celular; disfunción mitocondrial|Añadidas en 2023: macroautofagia deshabilitada; inflamación crónica; disbiosis"
    ] },
  { t: "Sentidos y cerebro en la vejez normal",
    tip: "La presbicia continúa en la vejez y a menudo se suma la catarata. La presbiacusia afecta sobre todo a las frecuencias altas y dificulta entender el habla con ruido. El cerebro pierde volumen de forma moderada, sin muerte neuronal masiva. El declive frontoestriatal y de sustancia blanca es normativo, mientras que un declive marcado del hipocampo apunta a patología.",
    v: [
      "Presbicia=Dificultad visual de cerca que aparece hacia los 40-45 años y sigue en la vejez",
      "Catarata=Opacidad progresiva del cristalino que se trata sustituyéndolo por una lente",
      "Presbiacusia=Pérdida auditiva ligada a la edad, sobre todo en frecuencias altas",
      "Sustancia blanca=Vías que comunican regiones cerebrales, con cambios normativos en la vejez",
      "Circuito frontoestriatal=Sistema cuyo declive es normativo según Hedden y Gabrieli (2004)",
      "Atrofia marcada del hipocampo=Cambio cerebral que se asocia más a la patología, sobre todo al alzhéimer",
      "Raz et al. (2005)=Mostraron que la atrofia cerebral con la edad no es uniforme",
      "Velocidad de procesamiento=Marcador cognitivo más sensible de la edad (Salthouse, 1996)"
    ],
    g: [
      "La presbiacusia afecta sobre todo a las frecuencias ___.|altas|bajas|medias",
      "Según Raz et al. (2005), la atrofia con la edad es menor en ___.|el área visual primaria|la corteza prefrontal|el núcleo caudado",
      "En la vejez normal, la memoria semántica y el vocabulario se mantienen o ___.|aumentan|descienden|desaparecen",
      "La Comisión de la Lancet sitúa la pérdida auditiva en la ___ como el factor modificable de demencia de mayor peso.|mediana edad|vejez avanzada|adultez temprana",
      "En la vejez normal, la memoria episódica desciende sobre todo en el ___.|recuerdo libre|reconocimiento|vocabulario"
    ],
    tf: [
      "La catarata se trata con fármacos que devuelven la transparencia al cristalino.|F|Se trata con cirugía, sustituyendo el cristalino opaco por una lente artificial.",
      "La memoria procedimental se conserva bastante bien en la vejez normal.|V",
      "El debilitamiento del olfato en la vejez apenas tiene consecuencias prácticas.|F|Reduce el placer de comer, puede influir en el apetito y dificulta detectar alimentos en mal estado o un escape de gas.",
      "La Comisión de la Lancet incluye la pérdida de visión no corregida entre los factores modificables de demencia.|V"
    ],
    q: [
      "En las comidas familiares ruidosas, un hombre de 78 años oye que le hablan, pero responde con vaguedades y acaba aislándose. ¿Qué es lo más probable?|Una presbiacusia|Un desinterés por la familia|Un inicio de demencia|La presbiacusia afecta a las frecuencias altas: se oye que alguien habla, pero cuesta entender qué dice con ruido de fondo.",
      "¿Qué función se considera el marcador cognitivo más sensible de la edad?|La velocidad de procesamiento|La memoria episódica reciente|La memoria de trabajo verbal|Según Salthouse (1996), la velocidad de procesamiento es el marcador más sensible, aunque las otras también descienden.",
      "¿Qué síntomas produce de forma característica una catarata?|Visión borrosa, colores apagados y deslumbramiento|Pérdida brusca de la visión lateral|Dificultad exclusiva para enfocar de cerca|Es una opacidad progresiva del cristalino. La dificultad para enfocar de cerca es propia de la presbicia.",
      "Una mujer de 72 años tarda más en recordar nombres y en aprender a usar su móvil nuevo. ¿Cómo se interpreta?|Como un cambio esperable|Como un signo de demencia|Como un deterioro leve|Son cambios normales. Lo que no es normal es perderse en el propio barrio u olvidar conversaciones enteras de forma repetida."
    ],
    inc: [
      "Sobre la cognición en la vejez normal|El vocabulario desciende desde la mediana edad|La memoria de trabajo desciende de forma gradual|Las funciones ejecutivas descienden en planificación|La memoria semántica y el vocabulario se mantienen o aumentan en la vejez normal (Park et al., 2002)."
    ],
    seq: [],
    cls: [
      "Tendencia en la vejez normal|Desciende: velocidad de procesamiento; memoria de trabajo; recuerdo libre episódico; planificación y control|Se conserva o aumenta: memoria semántica; vocabulario; memoria procedimental"
    ] },
  { t: "Demencias, deterioro cognitivo leve y Parkinson",
    tip: "La demencia es un síndrome: un deterioro cognitivo adquirido, en varias funciones, que interfiere en la autonomía. El alzhéimer es su causa más frecuente. El deterioro cognitivo leve de Petersen es un descenso mayor del esperable, confirmado en pruebas, que no impide la autonomía y no siempre progresa. El Parkinson combina síntomas motores y no motores, que pueden aparecer años antes.",
    v: [
      "Demencia=Síndrome de deterioro cognitivo adquirido y múltiple que interfiere en la autonomía",
      "Enfermedad de Alzheimer=Causa más frecuente de demencia, con placas de β-amiloide y ovillos de tau",
      "Deterioro cognitivo leve=Descenso mayor del esperable, confirmado en pruebas, sin pérdida de autonomía",
      "DCL amnésico=Subtipo con predominio de memoria, el más ligado a una evolución hacia alzhéimer",
      "DCL no amnésico=Subtipo que afecta sobre todo al lenguaje o a las funciones ejecutivas",
      "Bradicinesia=Lentitud de movimientos, uno de los síntomas motores del Parkinson",
      "Sustancia negra=Región que pierde neuronas dopaminérgicas en el Parkinson",
      "Biomarcadores sanguíneos=p-tau, NfL y GFAP, que detectan en sangre procesos neurodegenerativos"
    ],
    g: [
      "El deterioro cognitivo leve como estado intermedio fue descrito por ___.|Petersen|Poewe|Folstein",
      "En el alzhéimer, la atrofia suele afectar pronto al ___.|hipocampo|cerebelo|caudado",
      "El temblor típico del Parkinson es un temblor ___.|en reposo|de intención|al escribir",
      "Los primeros síntomas del alzhéimer suelen afectar a la memoria episódica ___.|reciente|remota|infantil",
      "El DCL que más se asocia a una evolución hacia el alzhéimer es el ___.|amnésico|no amnésico|ejecutivo"
    ],
    tf: [
      "Diagnosticar un deterioro cognitivo leve equivale a anunciar una futura demencia.|F|El DCL no siempre progresa: en algunas personas se mantiene estable y en otras mejora.",
      "La demencia es un síndrome que puede deberse a varias enfermedades.|V",
      "Los síntomas no motores del Parkinson pueden aparecer años antes que los motores.|V",
      "En la demencia, la autonomía para la vida diaria se conserva en lo esencial.|F|Eso describe el DCL. En la demencia el deterioro es lo bastante intenso como para interferir en la autonomía."
    ],
    q: [
      "Pilar, de 76 años, repite las mismas preguntas en una tarde y ya necesita ayuda para pagar sus recibos. ¿Qué rasgo la aleja de un DCL?|La afectación de su autonomía|La presencia de quejas de memoria|Un rendimiento bajo en pruebas|En el DCL hay quejas y bajo rendimiento, pero la autonomía se conserva en lo esencial. Necesitar ayuda exige valoración.",
      "¿Qué combinación define el deterioro cognitivo leve?|Descenso confirmado y autonomía conservada|Quejas subjetivas sin alteración en pruebas|Descenso en varias áreas y dependencia|Petersen lo describió como un descenso mayor del esperable que se confirma en pruebas y no impide la autonomía.",
      "¿Cuál de estos síntomas del Parkinson es no motor?|La pérdida de olfato|La inestabilidad postural|El temblor en reposo|Entre los no motores están la pérdida de olfato, las alteraciones del sueño, la depresión, la ansiedad y el estreñimiento.",
      "¿Qué rasgo describe la evolución típica del alzhéimer?|Inicio insidioso y curso progresivo|Inicio brusco ligado a un ictus|Temblor en reposo desde el inicio|Su inicio es insidioso y su curso, progresivo. La demencia ligada a lesiones cerebrovasculares es la vascular."
    ],
    inc: [
      "Sobre el deterioro cognitivo leve|Siempre evoluciona a demencia en pocos años|El rendimiento en pruebas está por debajo de lo esperable|El subtipo amnésico es el más ligado al alzhéimer|Creer que el DCL siempre progresa es una trampa típica: puede mantenerse estable o incluso mejorar."
    ],
    seq: [],
    cls: [
      "Cuadro clínico|Envejecimiento normal: quejas leves y ocasionales; rendimiento acorde con edad y educación|DCL: quejas confirmadas en pruebas; autonomía conservada en lo esencial|Demencia: varias áreas claramente alteradas; autonomía afectada"
    ] },
  { t: "Fragilidad y osteoporosis en la vejez",
    tip: "La fragilidad es un síndrome de vulnerabilidad por baja reserva fisiológica. Fried et al. (2001) la definen con cinco criterios: ninguno indica robustez, uno o dos, prefragilidad, y tres o más, fragilidad. No equivale a discapacidad ni a comorbilidad, y anticipa caídas, hospitalización y mortalidad. La osteoporosis se diagnostica con un T-score de −2,5 o menos.",
    v: [
      "Fragilidad=Vulnerabilidad por reserva escasa ante estresores menores como una gripe",
      "Prefragilidad=Presencia de uno o dos criterios de Fried, ventana para intervenir",
      "Discapacidad=Dificultad o necesidad de ayuda para actividades de la vida diaria",
      "Comorbilidad=Presencia de dos o más enfermedades a la vez",
      "Osteoporosis=Baja masa ósea y microarquitectura deteriorada con riesgo de fractura",
      "T-score=Desviaciones típicas de la densidad ósea respecto a la media de adultos jóvenes",
      "FRAX=Herramienta que estima el riesgo de fractura con la densidad ósea y otros factores",
      "Densitometría=Prueba que mide la densidad mineral ósea"
    ],
    g: [
      "Una persona que cumple dos criterios de Fried se clasifica como ___.|prefrágil|frágil|robusta",
      "La fractura osteoporótica más grave es la de ___.|cadera|muñeca|vértebra",
      "La herramienta FRAX se atribuye a ___ et al. (2013).|Kanis|Fried|Pawelec",
      "En España, a los 65 años se viven de media unos ___ años sin discapacidad.|10,3|21,9|5,2",
      "Según la OMS, hay osteoporosis con un T-score igual o inferior a ___.|−2,5|−1,0|+2,5"
    ],
    tf: [
      "Una persona frágil es, por definición, dependiente para las actividades de la vida diaria.|F|Se puede ser frágil sin discapacidad: la persona aún se vale por sí misma, pero está en riesgo.",
      "La debilidad de prensión es uno de los cinco criterios de Fried.|V",
      "Tener varias enfermedades crónicas bien controladas implica ser frágil.|F|Comorbilidad y fragilidad son distintas: se pueden tener varias enfermedades controladas sin ser frágil.",
      "El riesgo de osteoporosis es mayor en las mujeres tras la menopausia.|V"
    ],
    q: [
      "Carmen, de 82 años, ha perdido peso sin proponérselo, se cansa al subir la compra y anda más despacio, pero se viste y cocina sola. ¿Cómo se clasifica?|Frágil sin discapacidad|Prefrágil y dependiente|Robusta con comorbilidad|Cumple tres criterios de Fried, así que es frágil, aunque conserva su autonomía para la vida diaria.",
      "¿Qué criterio NO forma parte del fenotipo de fragilidad de Fried?|Deterioro cognitivo|Baja actividad física|Debilidad de prensión|Los cinco criterios son pérdida de peso no intencionada, agotamiento, debilidad de prensión, marcha lenta y baja actividad física.",
      "¿Por qué interesa detectar la prefragilidad?|Abre una ventana para intervenir|Confirma una discapacidad ya instaurada|Equivale a una comorbilidad múltiple|La fragilidad anticipa discapacidad, caídas y hospitalización, y la prefragilidad permite intervenir con ejercicio y nutrición.",
      "¿Qué estima la herramienta FRAX?|El riesgo de fractura|La densidad mineral ósea|El grado de fragilidad|Combina la densidad ósea con factores como la edad, el sexo o las fracturas previas (Kanis et al., 2013)."
    ],
    inc: [
      "Sobre la fragilidad|Equivale a tener dos o más enfermedades a la vez|Anticipa caídas, hospitalización y mortalidad|Supone una reserva fisiológica escasa|Tener dos o más enfermedades a la vez es comorbilidad, un concepto distinto de la fragilidad."
    ],
    seq: [],
    cls: [
      "Concepto|Fragilidad: reserva escasa; vulnerabilidad ante estresores menores|Discapacidad: necesidad de ayuda en la vida diaria; dificultad en actividades cotidianas|Comorbilidad: dos o más enfermedades a la vez"
    ] }
] },
{ n: 14, t: "Envejecer bien: modelos y evidencia", cap: 7, pir: "alta", mods: [
  { t: "Actividad, desvinculación y continuidad",
    tip: "Havighurst (1961) defendió mantenerse activo y sustituir los roles perdidos. Cumming y Henry (1961) propusieron una retirada mutua natural, universal e inevitable, cuya universalidad está refutada. Atchley (1989) sostuvo que se envejece manteniendo la continuidad interna y externa. Riley y Riley (1994) situaron el problema en el desfase entre capacidades y oportunidades.",
    v: [
      "Teoría de la actividad=Envejecer bien es mantener y sustituir actividades y roles (Havighurst)",
      "Teoría de la desvinculación=Retirada mutua y supuestamente universal de persona y sociedad",
      "Teoría de la continuidad=Se envejece manteniendo la coherencia con lo que uno ha sido (Atchley)",
      "Continuidad interna=Mantenimiento de la identidad, las creencias y los recuerdos",
      "Continuidad externa=Mantenimiento de los entornos, actividades y personas habituales",
      "Desfase estructural=Vidas que cambian más deprisa que los roles que ofrece la sociedad",
      "Proactividad=Anticiparse a las pérdidas planificando y construyendo apoyos (Kahana y Kahana)",
      "Cumming y Henry (1961)=Vieron la retirada en la vejez como funcional e inevitable"
    ],
    g: [
      "La teoría de la actividad fue formulada por ___.|Havighurst|Atchley|Riley",
      "Para Cumming y Henry, la retirada mutua preparaba para la muerte y facilitaba el relevo de ___.|generaciones|roles|amistades",
      "Según una crítica a la teoría de la actividad, importa más el ___ de las actividades que su cantidad.|significado|número|ritmo",
      "Mantener la identidad, las creencias y los recuerdos es continuidad ___.|interna|externa|social",
      "Riley y Riley (1994) situaron el problema en el ___ entre capacidades y oportunidades.|desfase|vínculo|equilibrio"
    ],
    tf: [
      "La teoría de la desvinculación es de Havighurst, autor también de las tareas evolutivas.|F|La desvinculación es de Cumming y Henry (1961). Havighurst es el autor de la teoría de la actividad.",
      "Para Atchley, adaptarse bien no es ser más activo ni retirarse, sino adaptar lo que uno ya era.|V",
      "Para Cumming y Henry, la retirada en la vejez dependía sobre todo de la salud y de las barreras sociales.|F|Para ellos era natural, universal e inevitable. Atribuirla a la salud o a las barreras es la crítica a su teoría.",
      "El campo evolucionó desde modelos descriptivos del buen envejecer hacia modelos procesuales.|V"
    ],
    q: [
      "Un hombre muy casero se jubila y sigue disfrutando de la lectura sin buscar actividades nuevas, y está satisfecho. ¿Qué teoría lo describe mejor?|La de la continuidad|La de la desvinculación|La de la actividad|Mantiene la coherencia con lo que ha sido. No se retira de forma universal ni sustituye roles: es una forma válida de continuidad.",
      "Una mujer deja de ir a su asociación porque no puede subir las escaleras de su casa. ¿Qué crítica a la desvinculación ilustra?|Que la retirada depende de barreras|Que la retirada es natural y funcional|Que la actividad debe sustituirse|Retirarse por una barrera física no demuestra que se desee desvincularse. La universalidad de la teoría no se sostiene.",
      "¿Qué idea añadieron Kahana y Kahana al estudio del buen envejecer?|La proactividad ante las pérdidas|El desfase entre vidas e instituciones|La continuidad interna y externa|Las personas mayores no solo reaccionan a las pérdidas: pueden anticiparse planificando, cuidando la salud y construyendo apoyos.",
      "¿Qué crítica principal recibe la teoría de la actividad?|Ignora el significado de la actividad|Defiende una retirada universal|Carece de cualquier apoyo empírico|Tiene apoyo parcial, pero no toda actividad vale lo mismo y no todas las personas pueden o quieren estar muy activas."
    ],
    inc: [
      "Sobre las teorías psicosociales clásicas|La desvinculación es una retirada universal confirmada|Atchley distinguió continuidad interna y externa|Havighurst propuso sustituir los roles que se pierden|La universalidad de la desvinculación está refutada: muchas personas mayores siguen implicadas y satisfechas."
    ],
    seq: [],
    cls: [
      "Teoría|Actividad: Havighurst (1961); mantener y sustituir roles|Desvinculación: Cumming y Henry (1961); retirada mutua e inevitable|Continuidad: Atchley (1989); coherencia interna y externa"
    ] },
  { t: "Rowe y Kahn, el modelo SOC y sus críticas",
    tip: "Rowe y Kahn (1997) definieron el envejecimiento con éxito con tres componentes: baja probabilidad de enfermedad y discapacidad, alto funcionamiento y compromiso activo con la vida. El SOC de Baltes y Baltes (1990) es procesual: selección, optimización y compensación, como en el caso de Rubinstein. Las críticas añaden criterios, piden lo subjetivo y señalan la desigualdad estructural.",
    v: [
      "Envejecimiento habitual=Pérdidas que se suponían propias de la edad, en el modelo de Rowe y Kahn",
      "Envejecimiento con éxito=Baja enfermedad y discapacidad, alto funcionamiento y compromiso con la vida",
      "Selección=Elegir y priorizar metas y ámbitos cuando los recursos se reducen",
      "Optimización=Invertir práctica, esfuerzo y tiempo para rendir mejor en lo elegido",
      "Compensación=Usar medios alternativos cuando se pierde un recurso",
      "Modelo procesual=Explica estrategias para gestionar ganancias y pérdidas, no un estado final",
      "Capacidad funcional=Resultado de la capacidad intrínseca, el entorno y su interacción (OMS)",
      "Capacidad intrínseca=Conjunto de capacidades físicas y mentales de la persona"
    ],
    g: [
      "Rowe y Kahn formularon los tres componentes del envejecimiento con éxito en ___.|1997|1987|1990",
      "Que Rubinstein tocara un repertorio más reducido es un ejemplo de ___.|selección|optimización|compensación",
      "Una mujer de 78 años que usa un carrito para llevar el peso de la compra aplica la ___.|compensación|selección|optimización",
      "La OMS propuso el envejecimiento activo en 2002 y el envejecimiento ___ en 2015.|saludable|productivo|con éxito",
      "La crítica de la desigualdad ___ señala que los criterios dependen de ingresos, educación y género.|estructural|individual|cognitiva"
    ],
    tf: [
      "Los tres criterios del envejecimiento con éxito proceden del modelo SOC de Baltes y Baltes.|F|Son de Rowe y Kahn. El SOC es un modelo procesual de selección, optimización y compensación.",
      "Para la OMS, una persona en silla de ruedas puede tener una capacidad funcional alta si vive en un barrio accesible.|V",
      "La selección del SOC equivale a la selectividad socioemocional de Carstensen.|F|Son conceptos distintos: la selección prioriza metas con recursos limitados, y la selectividad depende del tiempo percibido.",
      "El SOC es uno de los modelos con más apoyo empírico sobre envejecer bien.|V"
    ],
    q: [
      "Un pianista mayor toca más despacio justo antes de los pasajes rápidos para que parezcan más veloces. ¿Qué componente del SOC aplica?|Compensación|Optimización|Selección|Usa un medio alternativo para disimular su menor velocidad. Reducir el repertorio sería selección, y practicar más, optimización.",
      "¿Qué línea crítica recoge que muchas personas con enfermedades crónicas consideran que envejecen bien?|Incluir criterios subjetivos|Añadir criterios de sentido|Rechazar el término éxito|Es la crítica que pide incluir criterios subjetivos (Katz y Calasanti, 2015, y Martinson y Berridge, 2015).",
      "¿Por qué el envejecimiento saludable de la OMS responde a críticas hechas a Rowe y Kahn?|No exige estar libre de enfermedad|Mide solo la capacidad intrínseca|Define tres criterios objetivos|Su objetivo es mantener la capacidad funcional, y pone parte de la responsabilidad en el entorno.",
      "¿Qué tipo de modelo es el SOC de Baltes y Baltes?|Procesual|Descriptivo|Estructural|No describe un estado final, sino las estrategias con las que se gestionan ganancias y pérdidas a lo largo de la vida."
    ],
    inc: [
      "Sobre el modelo SOC|Define tres criterios del éxito al envejecer|Optimizar es invertir recursos en lo elegido|Compensar es usar medios alternativos|Los tres criterios del envejecimiento con éxito son de Rowe y Kahn, no de Baltes."
    ],
    seq: [],
    cls: [
      "Componente del SOC|Selección: repertorio más reducido; comprar en la tienda del barrio|Optimización: practicar más cada obra; caminar cada día|Compensación: ralentizar antes de los pasajes rápidos; usar un carrito"
    ] },
  { t: "Selectividad socioemocional y efecto de positividad",
    tip: "Según Carstensen, el tiempo percibido orienta las metas: con un horizonte amplio predominan las de conocimiento y con uno limitado, las emocionales. Lo causal no es la edad cronológica. La teoría explica la poda selectiva de la red social y el efecto de positividad, fiable según Reed, Chan y Mikels (2014). El bienestar se mantiene hasta el declive terminal (Gerstorf).",
    v: [
      "Metas de conocimiento=Buscar información, novedad y contactos útiles para el futuro",
      "Metas emocionales=Buscar sentido, satisfacción y relaciones cercanas en el presente",
      "Horizonte temporal=Tiempo que la persona percibe que le queda",
      "Poda selectiva=Reducción de la red por la periferia conservando los vínculos íntimos",
      "Efecto de positividad=Más atención y memoria relativas para lo positivo en la vejez",
      "Paradoja del bienestar=Bienestar que se mantiene o mejora pese a las pérdidas de la vejez",
      "Declive terminal=Descenso acusado del bienestar poco antes de la muerte (Gerstorf)",
      "Procesamiento no restringido=Condición en que se elige libremente a qué atender"
    ],
    g: [
      "Según la selectividad socioemocional, lo que orienta las metas es el tiempo ___.|percibido|cronológico|vivido",
      "En el metaanálisis de Reed, Chan y Mikels (2014), el efecto de positividad sin restricciones alcanzó una d de ___.|0,482|0,044|0,820",
      "Con la edad, las redes sociales se reducen sobre todo por la ___.|periferia|familia|pareja",
      "El efecto de positividad se interpreta como fruto de una ___ emocional activa, no de un declive.|regulación|pérdida|saturación",
      "El metaanálisis de Reed, Chan y Mikels reunió ___ estudios.|100|25|54"
    ],
    tf: [
      "Según la SST, una persona joven que afronta una enfermedad grave tiende a priorizar las metas emocionales.|V",
      "La selectividad socioemocional depende de la edad cronológica más que del tiempo percibido.|F|Lo causal es el tiempo percibido: un joven con horizonte limitado muestra el mismo patrón que una persona mayor.",
      "El efecto de positividad es igual de intenso cuando la tarea obliga a procesar toda la información.|F|Con el procesamiento restringido el efecto es bastante menor. Es más claro cuando se elige libremente a qué atender.",
      "El bienestar emocional de la mayoría de las personas mayores se mantiene hasta poco antes de la muerte.|V"
    ],
    q: [
      "A los 30 años, Julia acudía a todos los eventos del sector para conocer gente. A los 72 prefiere comer con sus dos amigas de siempre. ¿Qué lo explica mejor?|Un horizonte temporal más corto|Una pérdida pasiva de contactos|Un declive de su memoria de trabajo|Con un horizonte limitado predominan las metas emocionales: es una poda selectiva, no una pérdida pasiva.",
      "Si a una persona mayor se le plantea un futuro amplio, ¿qué predice la selectividad socioemocional?|Que recupere metas de conocimiento|Que refuerce sus metas emocionales|Que mantenga sus metas por la edad|Lo que orienta las metas es el tiempo percibido. Con un horizonte amplio vuelven a predominar las metas de conocimiento.",
      "¿Qué es el declive terminal descrito por Gerstorf?|Un descenso del bienestar poco antes de morir|Una caída del bienestar justo tras jubilarse|Un declive cognitivo propio de los 60 años|El bienestar suele mantenerse en la vejez hasta poco antes de la muerte, cuando aparece un descenso acusado.",
      "¿Qué dato sobre las redes sociales en la vejez explica la selectividad socioemocional?|Se reducen, pero conservan los vínculos íntimos|Se amplían con contactos nuevos y útiles|Se reducen de forma pasiva por las pérdidas|Se prescinde de los contactos poco gratificantes de la periferia y se refuerzan los íntimos: es una poda selectiva."
    ],
    inc: [
      "Sobre la paradoja del bienestar|Implica que ninguna persona mayor sufre soledad|El bienestar emocional suele mantenerse o mejorar|La SST ofrece una de sus explicaciones|No niega la soledad ni la depresión, que requieren atención. Significa que la imagen triste de la vejez no describe a la mayoría."
    ],
    seq: [],
    cls: [
      "Tipo de meta social|De conocimiento: información; novedad; contactos útiles para el futuro; horizonte amplio|Emocionales: sentido; satisfacción emocional; relaciones cercanas; horizonte limitado"
    ] },
  { t: "Sabiduría y gerotrascendencia",
    tip: "El paradigma de Berlín (Baltes y Staudinger, 2000) define la sabiduría como conocimiento experto sobre la vida, evaluado con dilemas y cinco criterios. Ardelt (2003) la entiende como un rasgo con tres dimensiones, medidas con la 3D-WS. La sabiduría no aumenta automáticamente con la edad. La gerotrascendencia de Tornstam es un desarrollo hacia una perspectiva cósmica, con menos apoyo empírico que el SOC o la SST.",
    v: [
      "Paradigma de Berlín=Sabiduría como conocimiento experto sobre los problemas fundamentales de la vida",
      "Contextualismo del ciclo vital=Tener en cuenta la edad, la historia y las circunstancias de cada persona",
      "Relativismo de valores=Reconocer que las personas tienen prioridades legítimas distintas",
      "Manejo de la incertidumbre=Aceptar que el futuro no se conoce del todo",
      "3D-WS=Escala de autoinforme de Ardelt con dimensiones cognitiva, reflexiva y afectiva",
      "Dimensión reflexiva=Mirar las cosas desde varias perspectivas, también a uno mismo",
      "Gerotrascendencia=Paso de una visión materialista y racional a otra cósmica y trascendente",
      "Joan Erikson (1997)=Añadió una novena etapa centrada en la vida muy avanzada"
    ],
    g: [
      "La escala 3D-WS mide la sabiduría según el modelo de ___.|Ardelt|Tornstam|Staudinger",
      "En el paradigma de Berlín, las respuestas a los dilemas se valoran con ___ criterios.|cinco|tres|cuatro",
      "En la dimensión ___ de la gerotrascendencia, la muerte se teme menos.|cósmica|del self|social",
      "La dimensión afectiva de Ardelt consiste en la ___ y la preocupación por los demás.|compasión|reflexión|curiosidad",
      "Erikson situó la sabiduría como virtud de la crisis de integridad frente a ___.|desesperación|estancamiento|aislamiento"
    ],
    tf: [
      "El paradigma de Berlín mide la sabiduría con una escala de autoinforme.|F|Usa respuestas a dilemas vitales pensadas en voz alta y valoradas por jueces. El autoinforme 3D-WS es de Ardelt.",
      "La sabiduría aumenta de forma automática con los años vividos.|F|Solo algunas personas convierten la experiencia en sabiduría. La reflexión, la apertura y ciertos entornos pesan más que los años.",
      "La gerotrascendencia se presenta como un desarrollo, no como una retirada universal impuesta por la edad.|V",
      "La gerotrascendencia tiene menos apoyo empírico que el SOC o la selectividad socioemocional.|V"
    ],
    q: [
      "Tomás, de 88 años, ha dejado los actos del pueblo, pasa más tiempo en silencio en el huerto y dice temer menos a la muerte. ¿Qué concepto lo describe?|La gerotrascendencia|La desvinculación|La continuidad|Tornstam lo presenta como un desarrollo hacia una perspectiva cósmica, no como una retirada universal impuesta por la edad.",
      "Cuando su nieta le pide consejo, un abuelo le pregunta qué valora y le recuerda que nadie sabe cómo saldrá. ¿Qué criterios de Berlín muestra?|Relativismo y manejo de la incertidumbre|Conocimiento factual y procedimental|Contextualismo y conocimiento factual|Preguntar qué valora reconoce prioridades distintas, y recordar que el futuro es incierto es manejar la incertidumbre.",
      "¿Qué diferencia el modelo de Ardelt del paradigma de Berlín?|La entiende como rasgo de personalidad|La mide con dilemas valorados por jueces|La define con cinco criterios expertos|Ardelt la ve como un rasgo con tres dimensiones medido por autoinforme. Dilemas, jueces y cinco criterios son de Berlín.",
      "¿Qué dimensión de la gerotrascendencia incluye relaciones más selectivas y menos interés por el estatus?|La dimensión social|La dimensión cósmica|La dimensión del self|La social y personal incluye además más necesidad de soledad positiva. La del self supone menos egocentrismo."
    ],
    inc: [
      "Sobre la sabiduría|Aumenta con la edad en casi todas las personas|Berlín la define como conocimiento experto|Ardelt la mide con la escala 3D-WS|No aumenta automáticamente con la edad: solo algunas personas convierten sus experiencias en sabiduría."
    ],
    seq: [],
    cls: [
      "Modelo de sabiduría|Berlín: conocimiento experto; dilemas valorados por jueces; cinco criterios|Ardelt: rasgo de personalidad; autoinforme 3D-WS; tres dimensiones"
    ] }
] },
{ n: 15, t: "Transiciones de la vejez", cap: 8, pir: "alta", mods: [
  { t: "Jubilarse: fases y efectos en la salud",
    tip: "La jubilación es una transición anticipada en el sentido de Schlossberg. Atchley (1976) describió seis fases, de la prejubilación a la terminación, que no son universales ni obligatorias. Los metaanálisis muestran un efecto medio casi nulo sobre la depresión. Lo decisivo son los moderadores: la voluntariedad, lo penoso del trabajo, los ingresos y la red social.",
    v: [
      "Transición anticipada=Cambio que se sabe que llegará y casi siempre cuándo (Schlossberg)",
      "Prejubilación=Fase en que se imagina la vida sin trabajo y se hacen planes",
      "Luna de miel=Fase de libertad, viajes y proyectos aplazados tras dejar el trabajo",
      "Desencanto=Fase en que algunas personas notan vacío o falta de estructura",
      "Reorientación=Revisión de expectativas y búsqueda de rutinas más realistas",
      "Estabilidad=Consolidación de un estilo de vida de jubilado satisfactorio y predecible",
      "Terminación=Pérdida de relevancia del papel de jubilado por enfermedad o dependencia",
      "Jubilación involuntaria=Moderador que aumenta algo más los síntomas depresivos (d ≈ 0,18)"
    ],
    g: [
      "Atchley describió las fases de la jubilación en ___.|1976|1989|1961",
      "Li et al. (2021) hallaron que, tras jubilarse, los síntomas depresivos aumentan ___.|muy ligeramente|de forma clara|de forma intensa",
      "Odone et al. (2021) hallaron un efecto protector, pero con una heterogeneidad muy ___ entre estudios.|alta|baja|escasa",
      "Una jubilación anticipada por un despido es un suceso ___ y suele vivirse peor.|«fuera de tiempo»|«a tiempo»|«normativo por edad»",
      "Atchley formuló más tarde la teoría de la ___, según la cual mantener hábitos favorece la adaptación.|continuidad|actividad|desvinculación"
    ],
    tf: [
      "Todas las personas jubiladas atraviesan las seis fases de Atchley en el mismo orden.|F|Las fases no son universales ni obligatorias: quien se jubila por enfermedad puede no vivir luna de miel.",
      "Según los metaanálisis, el efecto medio de la jubilación sobre la depresión es casi nulo.|V",
      "En Li et al. (2021), el aumento de síntomas depresivos fue mayor cuando la jubilación era voluntaria.|F|Fue mayor cuando era involuntaria (d ≈ 0,18), frente a un efecto medio muy ligero.",
      "Havighurst incluía adaptarse a la jubilación entre las tareas evolutivas de la vejez.|V"
    ],
    q: [
      "Julián, conductor de autobús, se jubila antes de lo previsto por un problema de espalda, y su vida social giraba en torno a la cochera. ¿Qué factor predice peor adaptación?|Que la jubilación sea forzada|Que deje un trabajo físico duro|Que conserve sus rutinas previas|La involuntariedad y la pérdida de la red laboral empeoran la transición. Dejar un trabajo agotador puede aliviar.",
      "Una persona que llevaba años preparándose pasa directamente a una vida de jubilada satisfactoria y predecible. ¿Qué fase de Atchley alcanza?|La estabilidad|La reorientación|La luna de miel|Las fases describen recorridos frecuentes, no una secuencia obligatoria, y se pueden saltar.",
      "¿Qué conclusión se extrae de los metaanálisis de Li et al. y de Odone et al.?|El efecto medio es casi nulo|La jubilación protege a todos|La jubilación causa depresión|Uno halla un aumento muy ligero y otro un efecto protector muy heterogéneo. Lo importante son los moderadores.",
      "¿En qué fase de Atchley algunas personas notan vacío y pérdida de papel social?|El desencanto|La terminación|La prejubilación|Tras la luna de miel puede llegar el desencanto, y después la reorientación de expectativas y rutinas."
    ],
    inc: [
      "Sobre la jubilación|Es una transición imprevista según Schlossberg|Puede suponer la pérdida de parte de la identidad|Conviene prepararla en varios frentes|Es una transición anticipada: se sabe que llegará y casi siempre cuándo."
    ],
    seq: [
      "Fases de la jubilación de Atchley|Prejubilación>Luna de miel>Desencanto>Reorientación>Estabilidad>Terminación"
    ],
    cls: [] },
  { t: "Ser abuelo o abuela hoy",
    tip: "La mayor esperanza de vida ha alargado la abuelidad, y las vidas de las generaciones están interconectadas (Hagestad, 1990). Neugarten y Weinstein (1964) describieron cinco estilos, y Cherlin y Furstenberg (1986), tres: distante, de compañía e implicado. En el patrón mediterráneo el cuidado intensivo de los nietos es frecuente, y su efecto sobre la salud está en debate.",
    v: [
      "Vidas interconectadas=Lo que pasa a una generación cambia el papel de las otras (Hagestad)",
      "Estilo formal=Interés por los nietos sin intervenir en la crianza",
      "Buscador de diversión=Relación lúdica e informal, como compañero de juego",
      "Padre sustituto=Asume tareas de cuidado y crianza, a menudo porque los padres trabajan",
      "Depositario de la sabiduría=Transmite conocimientos y tradiciones desde una posición de autoridad",
      "Abuelo de compañía=Relación afectuosa y frecuente sin funciones de padre",
      "Abuelo implicado=Participación activa en la crianza (Cherlin y Furstenberg)",
      "Generación sándwich=Cuidar a la vez de los nietos y de los propios padres mayores"
    ],
    g: [
      "Neugarten y Weinstein describieron ___ estilos de abuelidad.|cinco|tres|cuatro",
      "Cherlin y Furstenberg propusieron su clasificación de tres estilos en ___.|1986|1964|1990",
      "Los datos de la encuesta ___ describen un patrón mediterráneo de cuidado intensivo de los nietos.|SHARE|ELSA|MIDUS",
      "Algunos trabajos describen una relación en ___ entre la intensidad del cuidado y la salud de los abuelos.|U|J|S",
      "Un abuelo con contacto escaso, solo en fechas señaladas, tiene un estilo ___.|distante|formal|de compañía"
    ],
    tf: [
      "El cuidado muy intensivo de los nietos se asocia siempre con mejor salud en los abuelos.|F|El cuidado moderado se asocia a beneficios, pero el muy intensivo, a cansancio y sobrecarga. El tema está en debate.",
      "Un mismo abuelo puede ser implicado con un nieto y distante con otro.|V",
      "Que las personas más sanas cuiden más complica atribuir los beneficios al cuidado en sí.|V",
      "La clasificación de cinco estilos de abuelidad es de Cherlin y Furstenberg.|F|Los cinco estilos son de Neugarten y Weinstein (1964). Cherlin y Furstenberg (1986) propusieron tres."
    ],
    q: [
      "Rosa, de 67 años, recoge a sus nietos cuatro tardes a la semana y ha dejado el senderismo y a sus amigas. ¿Qué se le aconseja?|Pactar límites con sus hijos|Dejar de cuidar a los nietos|Aumentar las horas de cuidado|El riesgo no está en cuidar, sino en que el cuidado absorba todo lo demás. Conviene reservar tiempo para su salud y relaciones.",
      "Un abuelo tiene una relación afectuosa y frecuente con sus nietos, pero no asume funciones de crianza. ¿Qué estilo es según Cherlin y Furstenberg?|De compañía|Implicado|Distante|El estilo de compañía combina afecto y frecuencia sin funciones de padre. El implicado participa activamente en la crianza.",
      "Una abuela recoge cada día a su nieta, le da de comer y la acuesta porque los padres trabajan hasta tarde. ¿Qué estilo de Neugarten y Weinstein muestra?|Padre sustituto|Formal|Buscador de diversión|Asume tareas de cuidado y crianza. El estilo formal muestra interés sin intervenir en la crianza.",
      "¿Qué concepto de Hagestad explica que el divorcio de un hijo cambie el papel de los abuelos?|Las vidas interconectadas|El convoy social|La generación sándwich|Las vidas de varias generaciones están interconectadas (linked lives), de modo que lo que les ocurre a los hijos afecta a los abuelos."
    ],
    inc: [
      "Sobre la abuelidad|Sus estilos son tipos fijos de persona|Es una vía clara de generatividad (Erikson)|Forma parte del convoy social del mayor|Ninguna clasificación describe tipos fijos: el estilo puede variar según el nieto y la distancia."
    ],
    seq: [],
    cls: [
      "Clasificación de estilos|Neugarten y Weinstein (1964): formal; buscador de diversión; padre sustituto; depositario de la sabiduría familiar|Cherlin y Furstenberg (1986): de compañía; implicado"
    ] },
  { t: "Duelo y pérdida en la vejez",
    tip: "Kübler-Ross (1969) describió cinco etapas en enfermos terminales y sin método sistemático, y no hay una secuencia universal. Worden (2009) propone cuatro tareas activas, y Stroebe y Schut (1999), oscilar entre la orientación a la pérdida y a la restauración. La trayectoria más frecuente es la resiliencia. El trastorno de duelo prolongado exige 12 meses en el DSM-5-TR y 6 en la CIE-11.",
    v: [
      "Duelo=Reacción ante la pérdida de alguien querido",
      "Tareas de Worden=Aceptar la pérdida, elaborar el dolor, adaptarse y recolocar al fallecido",
      "Modelo de doble proceso=Oscilación entre orientación a la pérdida y a la restauración",
      "Orientación a la restauración=Nuevas tareas y roles, distraerse del dolor y nueva identidad",
      "Resiliencia=Malestar moderado y pasajero sin alterar la vida diaria, la trayectoria más común",
      "Duelo anticipado=El que aparece cuando la pérdida se espera, como en una enfermedad larga",
      "Duelo desautorizado=Pérdida que el entorno no reconoce socialmente (Doka, 1989)",
      "Trastorno de duelo prolongado=Anhelo o preocupación persistente por el fallecido tras un plazo mínimo"
    ],
    g: [
      "Kübler-Ross describió sus etapas a partir de su trabajo con ___.|enfermos terminales|personas viudas|cuidadores familiares",
      "Según el metaanálisis de Galatzer-Levy et al. (2018), la trayectoria de resiliencia corresponde al ___.|65,7 %|20,8 %|10,6 %",
      "En la CIE-11, el trastorno de duelo prolongado exige al menos ___ desde la pérdida.|6 meses|12 meses|24 meses",
      "El estudio prospectivo ___ contaba con datos previos a la viudedad.|CLOC|BASE|SHARE",
      "La cuarta tarea de Worden no consiste en olvidar, sino en ___ emocionalmente al fallecido.|recolocar|sustituir|idealizar"
    ],
    tf: [
      "Las tareas del duelo fueron propuestas por Kübler-Ross como alternativa a sus etapas.|F|Las tareas son de Worden (2009). Kübler-Ross (1969) propuso las cinco etapas.",
      "Quien no muestra un dolor intenso tras una pérdida suele estar incubando un duelo retrasado.|F|Lo más probable es que sea resiliente, la trayectoria más frecuente según Galatzer-Levy et al. (2018).",
      "En el modelo de doble proceso ninguna orientación es mejor que la otra: lo adaptativo es alternar.|V",
      "Con los criterios del DSM-5-TR, la prevalencia estimada del duelo prolongado es menor.|V"
    ],
    q: [
      "Un viudo relee por las mañanas cartas antiguas y por las tardes aprende a usar la banca en línea. ¿Qué modelo interpreta mejor su conducta?|El de doble proceso|El de las cinco etapas|El de las cuatro tareas|Oscilar entre la pérdida y la restauración es adaptativo según Stroebe y Schut (1999). No está negando su duelo.",
      "Una residente sufre en silencio la muerte de una compañera con quien tenía un vínculo estrecho, pero nadie lo reconoce. ¿Qué duelo vive?|Desautorizado|Anticipado|Complicado|El entorno no reconoce la pérdida (Doka, 1989). El anticipado aparece cuando la pérdida se espera.",
      "¿Qué trayectoria tras una pérdida es la segunda más frecuente según Galatzer-Levy et al. (2018)?|La recuperación|La cronicidad|La aparición demorada|Resiliencia 65,7 %, recuperación 20,8 %, cronicidad 10,6 % y aparición demorada 8,9 %.",
      "Según el DSM-5-TR, ¿qué plazo mínimo exige el trastorno de duelo prolongado en menores?|6 meses|12 meses|3 meses|En adultos el DSM-5-TR exige 12 meses y en menores, 6. La CIE-11 fija 6 meses."
    ],
    inc: [
      "Sobre el modelo de Kübler-Ross|Se basó en un método sistemático con personas en duelo|Describe negación, ira, negociación, depresión y aceptación|Su valor es hoy histórico y divulgativo|Lo describió con enfermos terminales que afrontaban su propia muerte y sin método sistemático."
    ],
    seq: [
      "Tareas del duelo de Worden|Aceptar la realidad de la pérdida>Elaborar el dolor>Adaptarse a un mundo sin la persona fallecida>Recolocarla emocionalmente y seguir viviendo"
    ],
    cls: [
      "Orientación en el modelo de doble proceso|Pérdida: llorar; recordar; recolocar el vínculo|Restauración: nuevas tareas y roles; distraerse del dolor; nueva identidad"
    ] },
  { t: "Dependencia, soledad y edadismo",
    tip: "La autonomía es decidir sobre la propia vida, y la independencia funcional, hacer las tareas cotidianas sin ayuda. Las ABVD se evalúan con Barthel y Katz, y las AIVD, con Lawton y Brody. La Ley 39/2006 distingue tres grados de dependencia. La soledad es aislamiento percibido y el aislamiento, objetivo, y ambos predicen mortalidad. El edadismo afecta a una de cada dos personas y también se interioriza.",
    v: [
      "Autonomía=Capacidad de decidir sobre la propia vida",
      "Independencia funcional=Capacidad de realizar las actividades cotidianas sin ayuda",
      "ABVD=Actividades de autocuidado como comer, asearse o vestirse",
      "AIVD=Actividades complejas para vivir de forma independiente, como compras o dinero",
      "Índice de Barthel=Evalúa 10 actividades básicas con una puntuación de 0 a 100",
      "Escala de Lawton y Brody=Evalúa 8 actividades instrumentales (1969)",
      "Aislamiento social=Situación objetiva de pocos contactos o vivir solo",
      "Edadismo=Estereotipos, prejuicios y discriminación por razón de edad"
    ],
    g: [
      "El índice de Barthel evalúa 10 ABVD con una puntuación de 0 a ___.|100|30|10",
      "El MoCA suma 1 punto cuando la escolaridad es de ___ años o menos.|12|8|16",
      "En la Ley 39/2006, el Grado ___ corresponde a la gran dependencia.|III|II|I",
      "Según la OMS (2021), una de cada ___ personas tiene actitudes edadistas.|dos|cinco|diez",
      "En el estudio de Levy et al. (2002), las autopercepciones positivas del envejecimiento se asociaron a ___ años más de vida.|7,5|2,5|12,5"
    ],
    tf: [
      "El índice de Barthel es el instrumento de referencia para evaluar las AIVD.|F|Barthel evalúa 10 ABVD. Las AIVD se evalúan con la escala de Lawton y Brody.",
      "Se puede vivir rodeado de familia y sentirse solo.|V",
      "El MoCA es más sensible al deterioro cognitivo leve que el MMSE.|V",
      "Los metaanálisis hallan un efecto de las autopercepciones de la edad tan grande como el de Levy et al. (2002).|F|Dan un efecto robusto, pero pequeño (Westerhof et al., 2014), mucho menor que en ese estudio único."
    ],
    q: [
      "Un hombre de 84 años necesita ayuda para ducharse y vestirse. ¿Qué instrumento se ajusta a esa evaluación?|El índice de Barthel|La escala de Lawton y Brody|El MoCA|Ducharse y vestirse son ABVD, que se evalúan con Barthel o Katz. Lawton y Brody evalúa AIVD, y el MoCA es un cribado cognitivo.",
      "Una persona necesita ayuda dos o tres veces al día, pero no un cuidador permanente. ¿Qué grado de la Ley 39/2006 le corresponde?|Grado II, severa|Grado I, moderada|Grado III, gran dependencia|El Grado I exige ayuda al menos una vez al día, y el III, apoyo indispensable y continuo.",
      "Una viuda vive con su hija y sus nietos, pero siente que nadie la entiende. ¿Qué describe mejor su situación?|Soledad sin aislamiento|Aislamiento sin soledad|Aislamiento y soledad|La soledad es aislamiento percibido (Hawkley y Cacioppo, 2010). Ella tiene contactos, así que no está aislada objetivamente.",
      "¿Qué sugiere el estudio de Levy et al. (2002) sobre el edadismo?|Que se interioriza y afecta a la salud|Que solo existe en los países ricos|Que afecta sobre todo a los jóvenes|Las autopercepciones del envejecimiento más positivas se asociaron a vivir más; los metaanálisis dan un efecto robusto, pero pequeño."
    ],
    inc: [
      "Sobre autonomía y dependencia|Necesitar ayuda para ducharse implica perder autonomía|La dependencia no es un destino inevitable|El índice de Katz ordena las ABVD de forma jerárquica|Se puede necesitar ayuda para ducharse y seguir decidiendo sobre todo lo demás: autonomía no es independencia funcional."
    ],
    seq: [
      "Grados de dependencia de la Ley 39/2006 de menor a mayor|Grado I, moderada>Grado II, severa>Grado III, gran dependencia"
    ],
    cls: [
      "Tipo de actividad|ABVD: comer; asearse; vestirse; continencia; índice de Barthel|AIVD: teléfono; compras; medicación; dinero; escala de Lawton y Brody"
    ] }
] },
{ n: 16, t: "Nuevas miradas sobre el envejecimiento", cap: 8, pir: "baja", mods: [
  { t: "Ciencia del envejecimiento: integrar disciplinas",
    tip: "Ninguna disciplina explica sola el envejecimiento: una caída puede tener causas biológicas, médicas, psicológicas, sociales y ambientales. La colaboración puede ser multidisciplinar, interdisciplinar o transdisciplinar, que es la tendencia actual. El modelo biopsicosocial se ha ampliado al entorno, y para la OMS (2015) la capacidad funcional combina la capacidad intrínseca, el entorno y sus interacciones.",
    v: [
      "Multidisciplinar=Varias disciplinas estudian el mismo problema, cada una por su cuenta",
      "Interdisciplinar=Las disciplinas comparten datos y coordinan sus conclusiones",
      "Transdisciplinar=Se construyen preguntas, métodos y modelos comunes",
      "Geronciencia=Conecta mecanismos biológicos del envejecimiento con enfermedad y funcionamiento",
      "Capacidad funcional=Capacidad intrínseca más el entorno y sus interacciones (OMS, 2015)",
      "Berlin Aging Study=Muestra nuclear de 516 personas de 70 a 103 años evaluadas en 14 sesiones",
      "Estudio Dunedin=Muestra que el ritmo de envejecimiento biológico se ve ya en la mediana edad",
      "SHARE=Encuesta de envejecimiento con datos de salud, economía y relaciones que incluye a España"
    ],
    g: [
      "El Handbook of the Psychology of Aging, obra de referencia de este enfoque, es de Schaie y ___.|Willis|Baltes|Salthouse",
      "Un programa de prevención de caídas diseñado en conjunto desde el principio es un ejemplo ___.|transdisciplinar|interdisciplinar|multidisciplinar",
      "Baltes (___) ya incluyó el enfoque multidisciplinar entre las proposiciones del ciclo vital.|1987|1990|2000",
      "Una reunión de equipo para decidir un plan de cuidados es un ejemplo de trabajo ___.|interdisciplinar|transdisciplinar|multidisciplinar",
      "El modelo biopsicosocial se ha ampliado al ___ físico y social.|entorno|sistema|nivel"
    ],
    tf: [
      "En el enfoque multidisciplinar, las disciplinas construyen preguntas y métodos comunes.|F|Eso define lo transdisciplinar. En lo multidisciplinar cada disciplina estudia el problema por su cuenta.",
      "Dos personas con la misma artrosis de rodilla pueden tener distinta capacidad funcional según su vivienda.|V",
      "La capacidad funcional de la OMS depende solo de las capacidades físicas y mentales de la persona.|F|Eso es la capacidad intrínseca. La capacidad funcional incluye también el entorno y sus interacciones.",
      "SHARE es una encuesta de envejecimiento que incluye a España.|V"
    ],
    q: [
      "Una mujer de 82 años se cae en casa. Toma un fármaco que marea, se mueve menos por miedo a caer y tiene una alfombra mal colocada. ¿Qué enseña el caso?|Que ninguna disciplina basta sola|Que la causa es sobre todo biológica|Que el entorno no influye en el riesgo|Biología, medicina, psicología, sociología y entorno contribuyen a la caída. Si cada profesional mira solo su parte, la prevención falla.",
      "Un médico, una psicóloga y una trabajadora social redactan informes separados sobre el mismo paciente. ¿Qué nivel de colaboración es?|Multidisciplinar|Interdisciplinar|Transdisciplinar|Cada disciplina estudia el problema por su cuenta. Compartir datos sería interdisciplinar, y crear modelos comunes, transdisciplinar.",
      "¿Qué consecuencia práctica tiene para la psicología el enfoque transdisciplinar?|Detectar orígenes médicos o ambientales|Dejar la evaluación a la medicina|Centrarse solo en lo psicológico|Hay que saber cuándo un cambio de conducta puede tener un origen médico, farmacológico o ambiental.",
      "¿Qué intenta la geronciencia?|Conectar biología, enfermedad y funcionamiento|Sustituir la psicología por la biología celular|Estudiar solo los marcadores celulares del daño|Conecta mecanismos como las marcas del envejecimiento con las enfermedades crónicas y el funcionamiento psicológico y social."
    ],
    inc: [
      "Sobre la capacidad funcional|Depende solo de la capacidad intrínseca|Puede mejorarse interviniendo en la casa y el barrio|Combina persona, entorno y sus interacciones|Creer que depende solo de la persona es una trampa típica: el entorno forma parte de la capacidad funcional."
    ],
    seq: [],
    cls: [
      "Nivel de colaboración|Multidisciplinar: cada disciplina por su cuenta; informes separados|Interdisciplinar: datos compartidos; reunión de equipo|Transdisciplinar: preguntas y métodos comunes; programa diseñado en conjunto"
    ] },
  { t: "Género, diversidad y cultura al envejecer",
    tip: "La variabilidad interindividual aumenta con la edad, y parte procede de la posición social, el género, la orientación sexual y la cultura. Las mujeres viven más, pero con más años de discapacidad, más viudedad, pensiones más bajas y más papel de cuidadoras. La desventaja acumulada sostiene una crítica al envejecimiento con éxito. Las personas mayores LGTBI afrontan estrés de minorías, invisibilidad y duelo desautorizado.",
    v: [
      "Desventaja acumulada=Desigualdades que se suman a lo largo de la vida y se reflejan en la vejez",
      "Estrés de minorías=Efecto acumulado del estigma y la discriminación sobre la salud",
      "Invisibilidad en residencias=Volver a ocultar la orientación o identidad por miedo al rechazo",
      "Patrón mediterráneo=Fuertes lazos familiares y gran papel de la familia en el cuidado",
      "Variabilidad interindividual=Diferencias entre personas, que aumentan con la edad",
      "Vejez mayoritariamente femenina=Predominio de mujeres, sobre todo en las edades más avanzadas",
      "Mujeres a los 65 años=Esperanza de vida de 23,64 años según el INE (2024)",
      "Hombres a los 65 años=Esperanza de vida de 19,87 años según el INE (2024)"
    ],
    g: [
      "Según el INE (2024), la esperanza de vida a los 65 años es de 23,64 años en las mujeres y de ___ en los hombres.|19,87|21,87|17,64",
      "Las mujeres viven más que los hombres, pero pasan más años con ___.|discapacidad|pareja|empleo",
      "Muchas mujeres mayores tienen pensiones más bajas por trayectorias laborales ___.|interrumpidas|continuas|tardías",
      "El efecto acumulado de décadas de estigma sobre la salud se llama estrés de ___.|minorías|aculturación|rol",
      "Se recomienda ___ las intervenciones al contexto y contar con las personas mayores en su diseño.|adaptar|unificar|imponer"
    ],
    tf: [
      "Las desigualdades de la vejez aparecen de golpe a los 65 años con la jubilación.|F|Se suman a lo largo de la vida: quien tuvo menos estudios y trabajos más duros llega con más enfermedades y menos recursos.",
      "El patrón mediterráneo aporta apoyo, pero también carga a las cuidadoras familiares.|V",
      "En el patrón mediterráneo, el cuidado de los mayores dependientes recae sobre todo en los servicios públicos.|F|Recae en buena parte en la familia, sobre todo en cuidadoras mujeres, con lazos fuertes y cercanía entre generaciones.",
      "Más mujeres que hombres enviudan y viven solas al final de la vida.|V"
    ],
    q: [
      "Antonio, de 74 años, pierde a Luis, su pareja durante 40 años, y la familia de este organiza el funeral sin contar con él. ¿Qué tipo de duelo vive?|Desautorizado|Anticipado|Complicado|El entorno no reconoce su pérdida (Doka, 1989). El caso reúne además el estrés de minorías y la invisibilidad.",
      "¿Qué crítica al envejecimiento con éxito se apoya en la desventaja acumulada?|Que ignora que no todos parten igual|Que olvida criterios como el sentido|Que no incluye criterios subjetivos|Presentar la buena vejez como fruto de elecciones individuales ignora las desigualdades de partida (Katz y Calasanti, 2015).",
      "Una intervención comunitaria que funcionó en un barrio fracasa en otro. ¿Cuál es la causa más probable?|Que ignorase las costumbres locales|Que los mayores no quieran participar|Que el segundo barrio fuera más rico|Una intervención puede fracasar si ignora las costumbres del lugar. Por eso se adapta al contexto y se cuenta con los mayores.",
      "¿Qué afirmación sobre el género en la vejez es correcta?|Más mujeres asumen el papel de cuidadoras|Los hombres pasan más años con discapacidad|Las mujeres tienen pensiones más altas|Las mujeres cuidan con más frecuencia a su pareja o a sus padres, también en la vejez, y suelen tener pensiones más bajas."
    ],
    inc: [
      "Sobre las personas mayores LGTBI|Reciben más apoyo familiar en el duelo|Sufren el efecto del estrés de minorías|Pueden volver a ocultar su orientación|La muerte de una pareja no reconocida por la familia puede vivirse sin apoyo social: es un duelo desautorizado."
    ],
    seq: [],
    cls: [
      "Problema de las personas mayores LGTBI|Estrés de minorías: décadas de estigma; efecto sobre la salud física y mental|Invisibilidad: ocultar la orientación en residencias; miedo al rechazo de profesionales|Duelo desautorizado: pareja no reconocida por la familia; pérdida sin apoyo social"
    ] },
  { t: "Tecnología y personas mayores",
    tip: "La gerontecnología (Czaja y Lee, 2007) estudia cómo la tecnología favorece la salud, la seguridad, la autonomía y la participación. En España, el 75,0 % de las personas de 65 a 74 años usaba internet a diario en 2025, aunque persiste una brecha digital. Los juegos cerebrales mejoran sobre todo la tarea entrenada (Simons et al., 2016). Peine y Neven (2019) proponen que tecnología y envejecimiento se construyen mutuamente.",
    v: [
      "Gerontecnología=Estudio de la tecnología para la salud, la autonomía y la participación al envejecer",
      "Brecha digital=Desigualdad de uso, mayor en edades avanzadas, con menos estudios y en lo rural",
      "Teleasistencia=Ejemplo de tecnología orientada a la seguridad",
      "Co-constitución=Tecnología y envejecimiento se transforman mutuamente (Peine y Neven)",
      "Simons et al. (2016)=Revisión que halló escasa transferencia del entrenamiento cognitivo",
      "Edadismo en el diseño=Suponer torpeza tecnológica y crear interfaces infantilizadas",
      "Diseñar con las personas mayores=Contar con ellas en el proceso, no solo crear para ellas",
      "Alternativas presenciales=Evitan que la brecha digital se convierta en exclusión"
    ],
    g: [
      "En España, el uso diario de internet entre los 65 y 74 años pasó del 70,5 % en 2024 al ___ en 2025.|75,0 %|80,5 %|65,0 %",
      "Según Simons et al. (2016), el entrenamiento cognitivo mejora sobre todo la tarea ___.|entrenada|cotidiana|distinta",
      "Los recordatorios de medicación son tecnología orientada a la ___.|salud|seguridad|participación",
      "La videollamada puede reducir el ___ de quien tiene la familia lejos, pero no garantiza acabar con la soledad.|aislamiento|edadismo|deterioro",
      "Peine y Neven (2019) critican ver la tecnología como una ___ que se aplica a los mayores.|intervención|construcción|relación"
    ],
    tf: [
      "Las aplicaciones de juegos cerebrales han demostrado prevenir la demencia.|F|La evidencia no lo respalda: mejoran sobre todo la tarea entrenada y muy poco la vida diaria (Simons et al., 2016).",
      "La brecha digital es mayor en las edades más avanzadas, con menos estudios y en el medio rural.|V",
      "Instalar un sensor que avisa a los hijos de cada movimiento debe decidirlo la familia por seguridad.|F|La decisión debe ser de la propia persona: el sensor da seguridad, pero también puede hacerla sentir vigilada.",
      "Para Peine y Neven, las personas mayores adaptan, rechazan o transforman los dispositivos.|V"
    ],
    q: [
      "Una mujer recibe un botón de alarma, pero lo guarda en un cajón porque dice que «eso es de viejos». ¿Qué principio se ha descuidado?|Diseñar con las personas mayores|Mantener alternativas presenciales|Proteger la privacidad de datos|Un dispositivo que la persona vive como estigma acaba sin usarse. Hay que diseñar con ella, no solo para ella.",
      "Frente a lo que prometen los juegos cerebrales, ¿qué sí reduce el riesgo de demencia?|El ejercicio físico|Una aplicación de memoria|El entrenamiento en una tarea|Una aplicación puede entretener, pero no sustituye al ejercicio, al tratamiento de la pérdida auditiva o a la vida social.",
      "¿Qué riesgo tiene que un trámite solo pueda hacerse en línea?|Que la brecha digital excluya|Que aumente el edadismo en el diseño|Que se vulnere la privacidad|Sin alternativas presenciales, la brecha digital se convierte en exclusión.",
      "¿A quién se atribuye la definición de gerontecnología?|Czaja y Lee|Peine y Neven|Simons et al.|Czaja y Lee (2007). Peine y Neven proponen la co-constitución, y Simons et al. revisaron el entrenamiento cognitivo."
    ],
    inc: [
      "Sobre tecnología y personas mayores|El grupo de 65 a 74 años apenas usa internet|La videollamada no garantiza eliminar la soledad|Las interfaces infantilizadas son edadismo en el diseño|El grupo de 65 a 74 años ya está mayoritariamente conectado: el 75,0 % usaba internet a diario en 2025."
    ],
    seq: [],
    cls: [
      "Objetivo de la tecnología|Seguridad: teleasistencia; detectores de caídas; alarmas de gas|Salud: recordatorios de medicación; seguimiento de la tensión; teleconsulta|Relaciones: videollamadas; mensajería; grupos en línea"
    ] },
  { t: "Una década para envejecer con salud y la demografía española",
    tip: "La ONU y la OMS declararon 2021-2030 la Década del Envejecimiento Saludable, con cuatro áreas: combatir el edadismo, comunidades amigables, atención integrada y cuidados de larga duración. En 2025 el 20,7 % de la población española tenía 65 años o más, y el INE prevé un máximo del 30,9 % en 2076. A los 65 años se viven unos 10,3 años sin discapacidad, y la demanda de cuidados crece.",
    v: [
      "Década del Envejecimiento Saludable=Plan ONU y OMS 2021-2030 vinculado a la Agenda 2030",
      "Comunidades amigables=Entornos que favorecen las capacidades y la participación de los mayores",
      "Atención integrada=Servicios de salud adaptados y centrados en la persona",
      "Cuidados de larga duración=Área de acción que garantiza ayuda continuada a quien la necesita",
      "SAAD=Sistema creado por la Ley 39/2006 para la atención a la dependencia",
      "Edad media de la población=44,55 años en España en 2025 (CSIC)",
      "Años sin discapacidad=Unos 10,3 a los 65, el 47,5 % de la esperanza de vida restante",
      "Centenarios=Grupo que aumentó un 7,1 % en un solo año en España"
    ],
    g: [
      "La Década del Envejecimiento Saludable abarca el periodo ___.|2021-2030|2015-2025|2020-2029",
      "Según el INE, el máximo de población de 65 años o más se alcanzaría en 2076, con el ___.|30,9 %|20,7 %|21,1 %",
      "La esperanza de vida al nacer en España era de ___ años en 2024.|84,01|81,38|86,53",
      "Según el CSIC, la edad media de la población española era de ___ años en 2025.|44,55|41,25|48,05",
      "El número de centenarios en España aumentó un ___ en un solo año.|7,1 %|20,7 %|47,5 %"
    ],
    tf: [
      "Retrasar la edad legal de jubilación es una de las cuatro áreas de acción de la Década.|F|Las áreas son combatir el edadismo, comunidades amigables, atención integrada y cuidados de larga duración.",
      "A 30 de septiembre de 2026, 134.734 personas llevaban más de seis meses en la lista de espera del SAAD.|V",
      "Hacia 2046 habrá en España más de 16 millones de personas mayores, en torno al 30 % de la población.|V",
      "La lista de espera del SAAD a 30 de septiembre de 2026 era de 1.748.901 personas.|F|Esa cifra son las personas con prestación. La lista de espera total era de 236.736 personas."
    ],
    q: [
      "Un ayuntamiento adapta aceras, bancos y transporte para que sus mayores participen en la vida del barrio. ¿Qué área de la Década aplica?|Comunidades amigables|Atención integrada|Cuidados de larga duración|Crear comunidades amigables favorece las capacidades y la participación de las personas mayores.",
      "¿Qué concepto de la OMS sirve de base a la Década del Envejecimiento Saludable?|La capacidad funcional|El envejecimiento activo|El envejecimiento con éxito|Se apoya en la capacidad funcional. Confundir el envejecimiento activo (2002) con el saludable (2015) es una trampa típica.",
      "¿Qué porcentaje de la población española tenía 65 años o más a 1 de enero de 2025?|20,7 %|30,9 %|47,5 %|Eran 10.178.625 personas. El 30,9 % es el máximo previsto para 2076 por el INE.",
      "¿Qué objetivo de las políticas se desprende de los datos sobre años sin discapacidad?|Sumar años con capacidad funcional|Alargar solo la esperanza de vida|Reducir el número de centenarios|Vivir más no es vivir esos años con buena salud: el objetivo es añadir años con capacidad funcional."
    ],
    inc: [
      "Sobre la Década del Envejecimiento Saludable|Es un plan exclusivo de la Unión Europea|Está vinculada a la Agenda 2030 y sus ODS|Incluye como área combatir el edadismo|La declararon la ONU y la OMS como plan de acción mundial, vinculado a la Agenda 2030 y sus Objetivos de Desarrollo Sostenible."
    ],
    seq: [
      "Población de 65 años o más en España|20,7 % en 2025>21,1 % estimado en 2026>En torno al 30 % hacia 2046>Máximo del 30,9 % en 2076"
    ],
    cls: [] }
] }
);

SP.register(window.COURSE);
})({});
