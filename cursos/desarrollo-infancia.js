(function(window){
// SAIMAP Psicología · Psicología del Desarrollo. Infancia y Adolescencia
// Contenido alineado con el temario SAIMAP «Psicología del Desarrollo. Infancia y Adolescencia» (v1.0, octubre de 2026).
window.COURSE = {
  id: "desarrollo-infancia",
  title: "Psicología del Desarrollo. Infancia y Adolescencia",
  short: "Desarrollo: Infancia",
  area: "Psicología del desarrollo",
  rutas: { grado: { curso: 1 }, pir: { bloque: "Desarrollo y social" } },
  temario: "Psicologia-del-Desarrollo-Infancia-y-Adolescencia_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Fundamentos, historia y teorías del desarrollo", from: 1, to: 4 },
    { n: 2, t: "Métodos de investigación y diseños evolutivos", from: 5, to: 6 },
    { n: 3, t: "Desarrollo prenatal, nacimiento y percepción", from: 7, to: 9 },
    { n: 4, t: "Desarrollo psicomotor y físico", from: 10, to: 11 },
    { n: 5, t: "Desarrollo cognitivo", from: 12, to: 13 },
    { n: 6, t: "Desarrollo del lenguaje", from: 14, to: 14 },
    { n: 7, t: "Desarrollo social y afectivo", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Desarrollo: Infancia · Unidades 1–4
window.COURSE.units.push(
{ n: 1, t: "Qué es la psicología del desarrollo y cómo nació", cap: 1, pir: "media", mods: [
  { t: "Objeto de estudio y grandes debates del desarrollo",
    tip: "La psicología del desarrollo estudia los cambios sistemáticos y las continuidades desde la concepción, fruto de la interacción entre biología y experiencia. Todo desarrollo combina maduración y aprendizaje, y la disciplina se propone describir, explicar y optimizar. Las teorías se distinguen por su postura en cuatro debates (herencia-ambiente, continuidad-discontinuidad, activo-pasivo y universal-contextual), que hoy se entienden como continuos.",
    v: [
      "Psicología del desarrollo=Estudio de los cambios sistemáticos y las continuidades desde la concepción",
      "Maduración=Cambios guiados por el programa biológico de la especie y del individuo",
      "Aprendizaje=Cambios relativamente permanentes producidos por la experiencia",
      "Optimizar=Objetivo de aplicar lo sabido para prevenir problemas y favorecer el bienestar",
      "Desarrollo holístico=Cuerpo, pensamiento, emociones y relaciones cambian a la vez y se condicionan",
      "Visión mecanicista=El ser humano como máquina que reacciona, base de las teorías del aprendizaje",
      "Visión organicista=Un todo activo que avanza por etapas, base del psicoanálisis y de Piaget",
      "Teoría heurística=La que genera nuevas preguntas e investigaciones"
    ],
    g: [
      "La aparición de los dientes o la pubertad son ejemplos de ___.|maduración|aprendizaje|plasticidad",
      "Una teoría es ___ si permite hacer predicciones que puedan fallar.|verificable|parsimoniosa|heurística",
      "Que la experiencia pueda reorientar el desarrollo significa que este es ___.|plástico|holístico|acumulativo",
      "Hoy predomina una postura ___ y contextual ante los grandes debates.|ecléctica|organicista|mecanicista",
      "En el debate continuidad-discontinuidad, la respuesta actual depende del dominio y de la ___ de análisis.|escala|teoría|edad"
    ],
    tf: [
      "Un resfriado que altera la conducta de un niño durante unos días es un ejemplo de desarrollo.|F|No todo cambio es desarrollo: hace falta un cambio sistemático, ordenado y duradero.",
      "A la psicología del desarrollo también le interesa lo que se mantiene, no solo lo que cambia.|V",
      "La visión organicista inspiró a las teorías del aprendizaje.|F|Las teorías del aprendizaje se inspiraron en la mecanicista. La organicista inspiró al psicoanálisis y a Piaget.",
      "Los cuatro grandes debates se entienden hoy como continuos y no como opciones excluyentes.|V"
    ],
    q: [
      "Una niña de dos años empieza a unir dos palabras. Un investigador se pregunta si es un salto cualitativo o una suma gradual. ¿Qué debate plantea?|Continuidad-discontinuidad|Herencia-ambiente|Universal-contextual|Preguntar si el cambio es cualitativo, por estadios, o gradual y cuantitativo es el debate continuidad-discontinuidad.",
      "¿Qué postura actual corresponde al debate activo-pasivo?|El niño influye en su entorno y este en él|El ambiente moldea al niño casi por completo|El niño construye su desarrollo sin el entorno|Hoy se acepta una influencia mutua: el niño influye en su entorno y el entorno influye en él.",
      "¿Qué criterio cumple una teoría que explica mucho con pocos supuestos?|Parsimonia|Verificabilidad|Heurística|La parsimonia es explicar mucho con pocos supuestos. La verificabilidad exige predicciones que puedan fallar.",
      "Leer requiere cierta madurez cerebral, pero nadie lee sin que alguien le enseñe. ¿Qué ilustra?|La combinación de maduración y aprendizaje|Que leer depende solo de la maduración|Que leer es un aprendizaje sin base biológica|Todo desarrollo combina maduración, guiada por el programa biológico, y aprendizaje, producido por la experiencia."
    ],
    inc: [
      "Sobre los rasgos del desarrollo|Es independiente del contexto cultural|Es continuo y acumulativo en sus logros|Es plástico, porque la experiencia lo reorienta|Depende del contexto histórico y cultural: lo típico en una época o un grupo no tiene por qué serlo en otro."
    ],
    seq: [],
    cls: [
      "Visión del ser humano|Mecanicista: máquina que reacciona; teorías del aprendizaje|Organicista: todo activo que avanza por etapas; psicoanálisis; Piaget"
    ] },
  { t: "La infancia y la adolescencia como construcciones históricas",
    tip: "Ariès (1960) defendió que el «sentimiento de infancia» es una invención moderna y que en la Edad Media los niños eran adultos en miniatura. Hoy su tesis se considera exagerada, porque se apoyó sobre todo en fuentes iconográficas. En los siglos XVII y XVIII se enfrentaron tres visiones del niño: pecado original (Hobbes), tabula rasa (Locke) y bondad natural (Rousseau). La adolescencia se reconoció con la industrialización.",
    v: [
      "Ariès (1960)=Historiador que presentó el sentimiento de infancia como una invención moderna",
      "Adultos en miniatura=Imagen medieval del niño según Ariès, integrado pronto en la vida adulta",
      "Fuentes iconográficas=Pinturas en las que se apoyó Ariès, base de la principal crítica a su tesis",
      "Tabula rasa=Idea de Locke (1690): la mente nace en blanco y la experiencia lo forma todo",
      "Pecado original=Visión de Hobbes: un niño egoísta por naturaleza al que hay que disciplinar",
      "Bondad natural=Visión de Rousseau: un niño bueno y curioso que sigue un plan natural",
      "Emilio (1762)=Obra de Rousseau que defiende dejar explorar al niño y proteger su desarrollo",
      "Juegos de niños (1560)=Cuadro de Bruegel que sirve de contraejemplo a la tesis de Ariès"
    ],
    g: [
      "La idea de la mente infantil como hoja en blanco se debe a ___.|Locke|Rousseau|Hobbes",
      "Rousseau publicó el Emilio en ___.|1762|1690|1882",
      "Locke es un antecedente del ___ de las teorías del aprendizaje.|ambientalismo|innatismo|organicismo",
      "La adolescencia empezó a reconocerse como etapa entre finales del siglo ___ y comienzos del XX.|XIX|XVIII|XVII",
      "Rousseau es un antecedente de las teorías ___ y de la idea del niño activo.|madurativas|conductistas|ambientalistas"
    ],
    tf: [
      "Hoy se acepta que en la Edad Media no existía ninguna sensibilidad hacia la infancia.|F|La tesis de Ariès se considera exagerada: otras fuentes muestran cuidados, juegos y objetos propios de la infancia.",
      "La principal crítica a Ariès es metodológica: dedujo demasiado de la pintura de la época.|V",
      "Rousseau defendió que el niño nace como una mente en blanco que la experiencia llena.|F|Esa es la tabula rasa de Locke. Rousseau defendía una naturaleza infantil propia, buena y activa.",
      "Considerar la infancia una construcción histórica no supone negar la biología.|V"
    ],
    q: [
      "Una profesora afirma que, como el niño es egoísta por naturaleza, hay que frenarlo con disciplina. ¿Qué visión adopta?|La del pecado original|La de la bondad natural|La de la tabula rasa|Es la visión asociada a Hobbes. Rousseau defendía la bondad natural, y Locke, la mente en blanco.",
      "¿Qué conclusión equilibrada se extrae del debate sobre Ariès?|Cambió la forma de concebir la infancia|La infancia se inventó en la Edad Moderna|La infancia no existía en la Edad Media|La forma de concebir la infancia ha cambiado mucho, pero no puede afirmarse que antes no existiera.",
      "¿Qué cambio favoreció que la adolescencia se viera como un grupo con identidad propia?|La escuela obligatoria alargó la dependencia|La pintura empezó a retratar a los jóvenes|La edad de la pubertad se fijó por ley|Cuando las leyes apartaron a los menores de las fábricas, la escuela obligatoria alargó los años de dependencia.",
      "¿Qué diferencia a Locke de Rousseau?|Locke niega las tendencias innatas|Locke defiende el niño activo|Locke propone la bondad natural|Locke concibe una mente en blanco, sin tendencias innatas. El niño activo y la bondad natural son ideas de Rousseau."
    ],
    inc: [
      "Sobre las visiones del niño|Rousseau propuso la tabula rasa en el Emilio|Hobbes veía al niño egoísta por naturaleza|Locke confiaba en la experiencia y los hábitos|La tabula rasa es de Locke (1690). Rousseau defendía una naturaleza infantil propia y activa que la sociedad puede corromper."
    ],
    seq: [],
    cls: [
      "Visión filosófica del niño|Pecado original: Hobbes; frenarlo con disciplina|Tabula rasa: Locke (1690); experiencia y buenos hábitos|Bondad natural: Rousseau (1762); dejarle explorar"
    ] },
  { t: "Orígenes científicos: de los diarios de bebés a las primeras teorías",
    tip: "El estudio científico del niño empezó en el siglo XIX con las biografías de bebés, como la de Darwin (1877). Preyer (1882) escribió la obra fundacional, El alma del niño. Hall introdujo los cuestionarios y describió la adolescencia como Sturm und Drang, Binet y Simon (1905) crearon la primera escala de inteligencia y Gesell elaboró normas madurativas. Watson aplicó el conductismo a la crianza.",
    v: [
      "Biografía de bebés=Diario en el que un progenitor anotaba día a día los progresos de su hijo",
      "Darwin (1877)=Publicó el diario más célebre sobre el desarrollo temprano de su hijo",
      "Preyer (1882)=Autor de El alma del niño, obra fundacional de la disciplina",
      "Método de cuestionarios=Técnica con la que Hall llevó el estudio del niño a gran escala",
      "Sturm und Drang=«Tormenta e ímpetu», imagen de la adolescencia según Hall (1904)",
      "Binet y Simon (1905)=Crearon la primera escala de inteligencia para detectar escolares con necesidad de apoyo",
      "Normas madurativas=Tablas de la edad típica de cada logro elaboradas por Gesell",
      "ManyBabies=Consorcio de ciencia abierta que replica con muchos laboratorios resultados clásicos con bebés"
    ],
    g: [
      "La obra fundacional de la psicología del desarrollo es El alma del niño, de ___.|Preyer|Darwin|Hall",
      "Hall es considerado el fundador de la psicología del niño en ___.|Estados Unidos|Alemania|Francia",
      "Gesell representa la visión ___ del desarrollo.|madurativa|ambientalista|psicoanalítica",
      "Watson publicó sus consejos conductistas de crianza en ___.|1928|1904|1920",
      "Darwin interpretaba algunos rasgos infantiles como huellas de la historia ___ de la especie.|evolutiva|cultural|social"
    ],
    tf: [
      "Pese a sus límites, las biografías de bebés convirtieron al niño en objeto legítimo de la ciencia.|V",
      "La escala de Binet y Simon se creó para seleccionar a los escolares más dotados.|F|Se pensó para detectar a los escolares que necesitaban apoyo.",
      "Hall es el autor de la obra considerada fundacional de la psicología del desarrollo.|F|Es El alma del niño, de Preyer (1882). Hall fundó la psicología del niño en Estados Unidos y estudió la adolescencia.",
      "Los consejos de crianza de Watson, con disciplina estricta y poco afecto, hoy están descartados.|V"
    ],
    q: [
      "Un padre con formación científica anota cada día los progresos de su única hija durante dos años. ¿Qué límite tiene este método?|Se basa en un solo niño|No registra datos diarios|Exige muchos laboratorios|Las biografías de bebés estudiaban a un solo niño, con observadores implicados y criterios distintos en cada diario.",
      "¿Qué aportación se asocia a Gesell?|Normas de la edad típica de cada logro|Cuestionarios aplicados a gran escala|La primera escala de inteligencia|Gesell elaboró normas madurativas. Los cuestionarios son de Hall, y la primera escala, de Binet y Simon.",
      "¿Qué pionero trabajó desde la clínica con adultos y situó en la infancia el origen de muchos conflictos?|Freud|Gesell|Preyer|Freud partió de la clínica. Preyer y Gesell se basaron en la observación de niños.",
      "¿Qué orden cronológico es el correcto?|Darwin, Preyer, Hall, Binet y Simon|Preyer, Darwin, Binet y Simon, Hall|Darwin, Hall, Preyer, Binet y Simon|Darwin es de 1877, Preyer de 1882, la obra de Hall sobre la adolescencia de 1904 y la escala de Binet y Simon de 1905."
    ],
    inc: [
      "Sobre los pioneros|Preyer usó cuestionarios a gran escala|Hall estudió la adolescencia en 1904|Gesell describió normas madurativas|Los cuestionarios a gran escala son de Hall. Preyer sistematizó la observación de su propio hijo."
    ],
    seq: [
      "Hitos de la disciplina|Locke (1690)>Rousseau (1762)>Darwin (1877)>Preyer (1882)>Hall (1904)>Binet y Simon (1905)>Piaget (1936)>Bowlby (1969)>Bronfenbrenner (1979)"
    ],
    cls: [] },
  { t: "La perspectiva del ciclo vital y la superación del dilema herencia-ambiente",
    tip: "Baltes (1987) sostuvo que el desarrollo dura toda la vida y que es multidimensional, multidireccional, plástico, histórico y contextual, y multidisciplinar. Distinguió influencias normativas por edad, normativas por historia y no normativas, y propuso el modelo SOC. Preguntar cuánto se debe a los genes y cuánto al ambiente se considera hoy mal planteado: interactúan de forma continua, con correlación gen-ambiente y epigenética (Lerner, 2015).",
    v: [
      "Ciclo vital=Perspectiva de Baltes (1987): ninguna edad es el final del cambio",
      "Multidireccionalidad=Ganancias y pérdidas en todas las edades",
      "Normativa por edad=Influencia que afecta a casi todos a una edad parecida, como la pubertad",
      "Normativa por historia=Influencia que afecta a toda una generación, como una guerra",
      "No normativa=Suceso individual e impredecible, como un accidente",
      "SOC=Selección, optimización y compensación, modelo de Baltes",
      "Correlación gen-ambiente=Los genes influyen en los ambientes que el niño recibe y busca",
      "Epigenética=La experiencia modifica qué genes se expresan sin cambiar la secuencia del ADN"
    ],
    g: [
      "Que el bebé gane precisión en su lengua y pierda sensibilidad a sonidos de otras ilustra que el desarrollo es ___.|multidireccional|multidimensional|multidisciplinar",
      "La entrada en primaria es una influencia normativa por ___.|edad|historia|cohorte",
      "La llegada de los teléfonos inteligentes es una influencia normativa por ___.|historia|edad|cultura",
      "La recuperación tras una adopción temprana ilustra que el desarrollo es ___.|plástico|acumulativo|normativo",
      "Un niño muy sociable provoca más interacción en los adultos, un ejemplo de ___ gen-ambiente.|correlación|interacción|epigénesis"
    ],
    tf: [
      "Un confinamiento que afecta a toda una cohorte es una influencia no normativa, porque no es habitual.|F|Es normativa por historia: afecta a toda una generación, aunque no sea habitual.",
      "Según Baltes, en la adultez el desarrollo se vuelve estable o solo de declive.|F|Para Baltes el desarrollo continúa toda la vida, con ganancias y pérdidas en todas las edades.",
      "Hay consenso en que genes y ambiente interactúan de forma continua.|V",
      "La epigenética estudia cómo la experiencia cambia la expresión de los genes sin alterar la secuencia del ADN.|V"
    ],
    q: [
      "A los nueve años, Pablo pierde a su madre en un accidente de tráfico. ¿Qué tipo de influencia es?|No normativa|Normativa por edad|Normativa por historia|Es un suceso individual e impredecible, sin calendario de edad: una influencia no normativa.",
      "Al perder capacidades, una persona elige menos metas, invierte en ellas sus recursos y busca rodeos. ¿Qué modelo lo describe?|El modelo SOC de Baltes|La epigénesis probabilística|La correlación gen-ambiente|Es el modelo de selección, optimización y compensación (SOC) de Baltes.",
      "Dos niños con distinta dotación responden de forma distinta al mismo ambiente. ¿Qué concepto lo explica?|Interacción gen-ambiente|Correlación gen-ambiente|Epigenética|En la interacción, el mismo ambiente afecta distinto según la dotación. En la correlación, los genes influyen en el ambiente recibido.",
      "¿Qué se dice hoy de la pregunta «¿cuánto se debe a los genes y cuánto al ambiente?»?|Está mal planteada para un individuo|Ya se ha respondido con precisión|Solo vale para la edad adulta|Para explicar el desarrollo de una persona se considera mal planteada: genes y ambiente interactúan de forma continua."
    ],
    inc: [
      "Sobre los principios de Baltes|El desarrollo termina en la adolescencia|El desarrollo es multidimensional|Las trayectorias pueden modificarse|Para Baltes ninguna edad es el final del cambio: el desarrollo se produce a lo largo de toda la vida."
    ],
    seq: [],
    cls: [
      "Influencia según Baltes|Normativa por edad: pubertad; entrada en primaria|Normativa por historia: guerra; crisis económica; teléfonos inteligentes|No normativa: muerte temprana de un progenitor; accidente"
    ] }
] },
{ n: 2, t: "Teorías psicoanalíticas y del aprendizaje", cap: 1, pir: "alta", mods: [
  { t: "Freud y los estadios psicosexuales",
    tip: "Freud construyó el psicoanálisis desde la clínica con adultos y sostuvo que muchos conflictos adultos se originan en la infancia. En el modelo estructural distinguió ello, yo y superyó. La libido se concentra en zonas sucesivas que definen los estadios oral, anal, fálico, latencia y genital, y la fijación liga parte de la energía a un estadio. Como teoría del desarrollo tiene escaso respaldo empírico.",
    v: [
      "Ello=Fuente de las pulsiones, presente desde el nacimiento, que busca satisfacción inmediata",
      "Yo=Instancia que media entre deseos y realidad y permite aplazar la satisfacción",
      "Superyó=Conciencia moral que interioriza las normas de los padres",
      "Modelo topográfico=Distinción entre lo consciente, lo preconsciente y lo inconsciente",
      "Libido=Energía sexual entendida en sentido amplio como búsqueda de placer",
      "Fijación=Parte de la energía queda ligada a un estadio por frustración o por exceso",
      "Complejo de Edipo=Conflicto central del estadio fálico, de 3 a 6 años",
      "Latencia=Estadio que va de los 6 años a la pubertad, con la pulsión sexual en calma"
    ],
    g: [
      "El control de esfínteres es el conflicto central del estadio ___.|anal|oral|fálico",
      "El destete es el conflicto central del estadio ___.|oral|anal|genital",
      "Un niño espera su turno porque sabe que, si quita el juguete, se lo retirarán. Actúa su ___.|yo|ello|superyó",
      "El inconsciente colectivo y los arquetipos son conceptos de ___.|Jung|Adler|Klein",
      "La inferioridad y la rivalidad entre hermanos son temas centrales de ___.|Adler|Jung|Hartmann"
    ],
    tf: [
      "Freud basó su teoría del desarrollo en la observación sistemática de niños.|F|Se basó en recuerdos de pacientes adultos, no en la observación directa de niños.",
      "En el estadio fálico se produce la identificación con el progenitor del mismo sexo.|V",
      "Según Freud, una fijación puede deberse tanto a la frustración como al exceso de satisfacción.|V",
      "En el estadio de latencia la libido se concentra en los genitales.|F|En la latencia la pulsión sexual está en calma. Los genitales son la zona del estadio fálico y del genital."
    ],
    q: [
      "Un psicoanalista atribuye un rasgo de su paciente a un conflicto no resuelto con el control de esfínteres. ¿Qué concepto usa?|Fijación en el estadio anal|Fijación en el estadio oral|Fijación en la latencia|Si las necesidades de un estadio se frustran o se satisfacen en exceso, la energía queda fijada. Los esfínteres son del anal.",
      "¿Qué instancia está presente desde el nacimiento según Freud?|El ello|El yo|El superyó|El ello, fuente de las pulsiones, existe desde el nacimiento. El yo y el superyó se forman después.",
      "¿Qué valoración actual del psicoanálisis clásico es correcta?|Acertó al valorar lo no consciente|Sus estadios están bien verificados|Se basó en observar a niños|Acertó al valorar la infancia, lo no consciente y las relaciones tempranas, pero tiene escaso respaldo empírico.",
      "¿En qué estadio psicosexual sitúa Freud a un niño de cuatro años?|Fálico|Anal|Latencia|El fálico abarca aproximadamente de 3 a 6 años. El anal va de 1 a 3, y la latencia, de 6 a la pubertad."
    ],
    inc: [
      "Sobre las escuelas psicoanalíticas|Jung fundó la psicología del yo con Hartmann|Klein y Winnicott estudiaron los vínculos tempranos|Adler destacó la rivalidad entre hermanos|La psicología del yo es de Anna Freud y Hartmann. Jung fundó su propia escuela, con el inconsciente colectivo."
    ],
    seq: [
      "Estadios psicosexuales de Freud|Oral>Anal>Fálico>Latencia>Genital"
    ],
    cls: [
      "Instancia del modelo estructural|Ello: pulsiones; satisfacción inmediata|Yo: mediación con la realidad; aplazar la satisfacción|Superyó: conciencia moral; normas de los padres"
    ] },
  { t: "Erikson y las nuevas teorías analíticas",
    tip: "Erikson (1950) dio más peso a la sociedad y la cultura que a la sexualidad, concibió un niño activo y extendió el desarrollo a toda la vida. Cada estadio psicosocial plantea una crisis entre dos polos que, bien resuelta, deja una virtud. Iniciativa frente a culpa es preescolar, y laboriosidad frente a inferioridad, escolar. Spitz describió el hospitalismo, Mahler la separación-individuación y Winnicott la madre «suficientemente buena».",
    v: [
      "Childhood and Society=Obra de Erikson publicada en 1950",
      "Crisis psicosocial=Conflicto entre dos polos propio de cada estadio de Erikson",
      "Virtud=Fortaleza que deja una crisis resuelta de forma favorable",
      "Esperanza=Virtud de la crisis confianza frente a desconfianza",
      "Hospitalismo=Deterioro de bebés institucionalizados con escaso contacto afectivo (Spitz, 1945)",
      "Separación-individuación=Paso de una relación casi fusionada con la madre a sentirse un individuo",
      "Madre suficientemente buena=Cuidado que responde lo bastante y deja tolerar pequeñas frustraciones",
      "Objeto transicional=Mantita o peluche que ayuda a pasar de la dependencia a la autonomía"
    ],
    g: [
      "La virtud de la crisis autonomía frente a vergüenza y duda es la ___.|voluntad|esperanza|competencia",
      "La virtud de la crisis laboriosidad frente a inferioridad es la ___.|competencia|fidelidad|voluntad",
      "La crisis identidad frente a confusión de rol deja como virtud la ___.|fidelidad|voluntad|esperanza",
      "Un niño de cinco años que inventa juegos y planes atraviesa la crisis de iniciativa frente a ___.|culpa|inferioridad|vergüenza",
      "Marcia (1966) convirtió en un modelo evaluable el concepto eriksoniano de ___ adolescente.|identidad|latencia|autonomía"
    ],
    tf: [
      "Iniciativa frente a culpa es la crisis propia de los años escolares, de 6 a 12 años.|F|Corresponde a los años preescolares (3–6). La crisis escolar es laboriosidad frente a inferioridad.",
      "Según Erikson, una crisis mal resuelta dificulta las etapas siguientes, pero puede revisarse más adelante.|V",
      "Los estadios de Erikson terminan, como los de Freud, al llegar la adultez.|F|Erikson extendió el desarrollo a toda la vida: propuso tres crisis adultas, la última en la vejez.",
      "Las observaciones de Spitz anticiparon la investigación sobre privación y apego.|V"
    ],
    q: [
      "Un bebé de una institución tiene la alimentación y la higiene cubiertas, pero apenas recibe contacto afectivo, y su desarrollo se retrasa. ¿Qué describió Spitz?|Hospitalismo|Fijación oral|Impronta tardía|Spitz (1945) llamó hospitalismo al retraso y deterioro de bebés institucionalizados con cuidados físicos y poco afecto.",
      "Una niña de diez años se compara con sus compañeros del colegio y teme ser menos capaz. ¿Qué crisis atraviesa?|Laboriosidad frente a inferioridad|Iniciativa frente a culpa|Identidad frente a confusión de rol|Es la crisis de los 6 a los 12 años, cuya virtud es la competencia. Iniciativa frente a culpa es preescolar.",
      "¿Con qué estadio de Freud se superpone la crisis autonomía frente a vergüenza y duda?|Anal|Oral|Fálico|Los cinco primeros estadios de Erikson se superponen a los de Freud: la autonomía, de 1 a 3 años, coincide con el anal.",
      "Un niño no se separa de su peluche cuando duerme en casa de sus abuelos. ¿Qué concepto de Winnicott se aplica?|Objeto transicional|Separación-individuación|Madre suficientemente buena|El objeto transicional ayuda a pasar de la dependencia a la autonomía. La separación-individuación es de Mahler."
    ],
    inc: [
      "Sobre Erikson|Primó la sexualidad sobre la cultura|Concibió al niño como un agente activo|Extendió el desarrollo a toda la vida|Erikson dio más peso a la sociedad y la cultura que a la sexualidad, de ahí que sus estadios sean psicosociales."
    ],
    seq: [
      "Crisis de Erikson en la infancia y la adolescencia|Confianza frente a desconfianza>Autonomía frente a vergüenza y duda>Iniciativa frente a culpa>Laboriosidad frente a inferioridad>Identidad frente a confusión de rol"
    ],
    cls: [
      "Autor|Spitz: hospitalismo; bebés institucionalizados|Mahler: separación-individuación; alejarse y volver en busca de seguridad|Winnicott: madre suficientemente buena; objeto transicional"
    ] },
  { t: "El condicionamiento operante de Skinner aplicado al desarrollo",
    tip: "Las teorías del aprendizaje son mecanicistas y ambientalistas, y conciben el desarrollo como un cambio continuo. Para Skinner, una operante se vuelve más o menos probable según sus consecuencias. Todo refuerzo aumenta la conducta y todo castigo la disminuye. «Positivo» indica que se añade un estímulo, y «negativo», que se retira, así que el refuerzo negativo no es un castigo.",
    v: [
      "Operante=Conducta voluntaria cuya probabilidad depende de sus consecuencias",
      "Refuerzo positivo=Añadir algo agradable para que una conducta aumente",
      "Refuerzo negativo=Retirar algo desagradable, con lo que la conducta aumenta",
      "Castigo positivo=Añadir algo desagradable para que una conducta disminuya",
      "Castigo negativo=Retirar algo agradable, con lo que la conducta disminuye",
      "Extinción=Disminución de una conducta que deja de reforzarse",
      "Refuerzo intermitente=Programa que hace lo aprendido más resistente a la extinción",
      "Moldeamiento=Reforzar aproximaciones sucesivas a la conducta final"
    ],
    g: [
      "Quitarle la tableta a un niño por mentir es un castigo ___.|negativo|positivo|vicario",
      "Ceder a una rabieta solo de vez en cuando la mantiene, porque el refuerzo es ___.|intermitente|continuo|negativo",
      "Cuando una rabieta deja de conseguir la golosina, al principio suele ___.|intensificarse|desaparecer|estabilizarse",
      "Watson rechazaba los estadios y concebía el desarrollo como un cambio ___.|continuo|cualitativo|discontinuo",
      "Elogiar primero que meta un brazo en la manga y luego que se ponga la camiseta entera es ___.|moldeamiento|extinción|modelado"
    ],
    tf: [
      "El refuerzo negativo disminuye la probabilidad de la conducta, igual que el castigo.|F|Todo refuerzo aumenta la conducta. «Negativo» solo indica que se retira un estímulo desagradable.",
      "El metaanálisis de Gershoff y Grogan-Kaylor (2016) asoció el castigo físico con 13 de 17 resultados perjudiciales.|V",
      "La teoría de Skinner explica bien que los niños aprendan mucho solo mirando a otros.|F|Es uno de sus límites: no explica bien el aprendizaje sin refuerzo directo, el punto que desarrolló Bandura.",
      "Lo aprendido con refuerzo intermitente resiste más la extinción que lo aprendido con refuerzo continuo.|V"
    ],
    q: [
      "Una niña llora en el supermercado hasta que su padre le compra una golosina, y el llanto cesa. ¿Qué recibe el padre por comprarla?|Un refuerzo negativo|Un castigo positivo|Un refuerzo positivo|Deja de oír el llanto, un estímulo desagradable que se retira, y su conducta de comprar aumenta.",
      "Un padre deja de insistir a su hijo en cuanto este empieza los deberes, y el niño cada día empieza antes. ¿Qué procedimiento es?|Refuerzo negativo|Castigo negativo|Refuerzo positivo|Se retira un estímulo desagradable y la conducta aumenta. El castigo negativo retira algo agradable y la reduce.",
      "Una regañina por pegar a su hermana reduce esa conducta en un niño. ¿Qué procedimiento es?|Castigo positivo|Castigo negativo|Refuerzo negativo|Se añade un estímulo desagradable, la regañina, y la conducta disminuye: castigo positivo.",
      "¿Qué crítica se hace a la teoría de Skinner como teoría del desarrollo?|Presenta un niño pasivo|Carece de aplicaciones|Usa conceptos imprecisos|Tiene conceptos precisos y aplicaciones eficaces, pero presenta un niño pasivo y deja fuera los procesos cognitivos."
    ],
    inc: [
      "Sobre el castigo físico|Enseña al niño qué hacer en su lugar|Puede frenar la conducta en el momento|Ofrece un modelo de agresión imitable|Un castigo puede frenar una conducta, pero no enseña qué hacer en su lugar y ofrece un modelo de agresión."
    ],
    seq: [],
    cls: [
      "Procedimiento operante|Refuerzo: aumenta la conducta; elogiar al recoger los juguetes; dejar de insistir con los deberes|Castigo: disminuye la conducta; regañina por pegar; quitar la tableta por mentir"
    ] },
  { t: "El aprendizaje social de Bandura",
    tip: "Bandura sostuvo que gran parte de lo que aprenden los niños se adquiere observando modelos, sin refuerzo directo. En el experimento del muñeco Bobo (Bandura, Ross y Ross, 1961), los niños imitaron la agresión física y verbal del modelo. Bandura (1965) distinguió adquisición y ejecución: el refuerzo actúa sobre todo en la ejecución. Después añadió la autoeficacia (1977) y el determinismo recíproco (1986).",
    v: [
      "Aprendizaje observacional=Adquirir conductas viendo a otras personas y las consecuencias de sus actos",
      "Modelo=Persona cuya conducta observa e imita el niño",
      "Adquisición=Aprender una conducta observada, aunque todavía no se muestre",
      "Ejecución=Mostrar lo aprendido cuando hay motivos para hacerlo",
      "Autoeficacia=Creencia en la propia capacidad para lograr algo (Bandura, 1977)",
      "Determinismo recíproco=Influencia mutua entre persona, conducta y ambiente (Bandura, 1986)",
      "Retención=Proceso de guardar lo observado en imágenes o palabras",
      "Motivación=Tener razones para ejecutar lo observado, por refuerzo directo, vicario o propio"
    ],
    g: [
      "En el experimento del muñeco Bobo participaron ___ niños de la guardería de Stanford.|72|36|52",
      "Los niños del estudio de Bandura, Ross y Ross tenían entre 37 y ___ meses.|69|52|60",
      "Los niños imitaron más agresión física que las niñas, sobre todo cuando el modelo era ___.|un hombre|una mujer|otro niño",
      "Cuando el modelo era castigado, el castigo reducía la ___, no el aprendizaje.|ejecución|atención|retención",
      "Fijarse más en un modelo competente o parecido a uno mismo corresponde al proceso de ___.|atención|retención|motivación"
    ],
    tf: [
      "En el experimento del muñeco Bobo, los niños solo imitaron la agresión cuando se les premió.|F|El aprendizaje se produjo sin que nadie reforzara a los niños.",
      "Si el modelo es castigado, los niños no aprenden su conducta.|F|La aprenden, pero la ejecutan menos: con un incentivo posterior la reproducían sin dificultad (Bandura, 1965).",
      "Con el tiempo, la teoría de Bandura se hizo cada vez más cognitiva.|V",
      "Se discute si golpear un muñeco diseñado para ello equivale a agresión real.|V"
    ],
    q: [
      "Un niño tímido evita el patio, sus compañeros dejan de invitarle y su timidez aumenta. ¿Qué concepto de Bandura lo describe?|Determinismo recíproco|Aprendizaje vicario|Autoeficacia|Persona, conducta y ambiente se influyen mutuamente. Si un profesor le encarga organizar un juego, el ciclo puede invertirse.",
      "Tras ver castigado al modelo, unos niños apenas lo imitan, pero lo reproducen al ofrecerles un incentivo. ¿Qué demuestra?|Habían aprendido sin ejecutar|No habían aprendido la conducta|El incentivo creó el aprendizaje|Es la distinción entre adquisición y ejecución (Bandura, 1965): el castigo al modelo redujo la ejecución, no el aprendizaje.",
      "Una niña cree que no es capaz de aprender a nadar y abandona tras el primer intento. ¿Qué concepto interviene?|Autoeficacia|Moldeamiento|Extinción|La autoeficacia, creencia en la propia capacidad, influye en qué tareas se emprenden y cuánto se persiste en ellas.",
      "Un niño ha atendido al modelo y recuerda lo que hizo, pero aún no tiene las capacidades para imitarlo. ¿Qué proceso falla?|Reproducción|Motivación|Atención|La reproducción exige tener las capacidades para hacer lo observado. La motivación aporta razones para ejecutarlo."
    ],
    inc: [
      "Sobre el aprendizaje social|Exige refuerzo directo para aprender|Los niños aprenden observando a modelos|El refuerzo actúa sobre todo en la ejecución|Es la trampa típica: Bandura mostró aprendizaje sin refuerzo directo. El refuerzo motiva a mostrar lo aprendido."
    ],
    seq: [
      "Procesos del aprendizaje observacional|Atención>Retención>Reproducción>Motivación"
    ],
    cls: [
      "Teoría del aprendizaje|Skinner: refuerzo directo; niño pasivo; moldeamiento|Bandura: aprendizaje observacional; determinismo recíproco; autoeficacia"
    ] }
] },
{ n: 3, t: "Teorías cognitivo-evolutivas", cap: 1, pir: "alta", mods: [
  { t: "Piaget: constructivismo, esquemas y equilibración",
    tip: "Piaget, biólogo de formación, llamó a su proyecto epistemología genética y vio la inteligencia como adaptación. Para el constructivismo, el niño construye el conocimiento actuando sobre los objetos. Los esquemas cambian por asimilación, que incorpora lo nuevo sin modificar el esquema, y por acomodación, que lo modifica. La equilibración resuelve el conflicto cognitivo con un equilibrio más estable, y los estadios siguen una secuencia invariante.",
    v: [
      "Epistemología genética=Estudio de la génesis u origen del conocimiento, no de los genes",
      "Constructivismo=El niño elabora el conocimiento actuando sobre los objetos y reflexionando",
      "Esquema=Pauta organizada de acción o pensamiento que se aplica a situaciones parecidas",
      "Asimilación=Incorporar una experiencia nueva a un esquema sin modificarlo",
      "Acomodación=Modificar un esquema, o crear otro, cuando lo nuevo no encaja",
      "Organización=Tendencia a integrar los esquemas en sistemas cada vez más coherentes",
      "Invariantes funcionales=Adaptación y organización, que funcionan igual a cualquier edad",
      "Conflicto cognitivo=Desequilibrio que surge cuando un dato contradice lo esperado"
    ],
    g: [
      "Para Piaget, el motor del cambio cognitivo es la ___.|equilibración|maduración|transmisión social",
      "Asimilación y acomodación forman juntas la ___.|adaptación|organización|equilibración",
      "Un niño que llama «pato» a un cisne la primera vez que lo ve hace una ___.|asimilación|acomodación|equilibración",
      "El estadio de las operaciones concretas va aproximadamente de los 7 a los ___ años.|11 o 12|14 o 15|9 o 10",
      "En sus obras sobre el bebé, Piaget se basó en la observación detallada de ___.|sus propios hijos|niños de guardería|bebés en instituciones"
    ],
    tf: [
      "En la epistemología genética, «genética» se refiere a los genes que heredan los niños.|F|Se refiere a la génesis, al origen del conocimiento, no a los genes.",
      "Tras un desequilibrio, la equilibración devuelve al niño a su punto de partida.|F|No vuelve al punto de partida: alcanza un equilibrio más estable y amplio, que abarca casos antes contradictorios.",
      "Los estadios de Piaget siguen un orden invariante, aunque las edades varíen.|V",
      "La idea de que cada estadio forma una estructura de conjunto es la más discutida de Piaget.|V"
    ],
    q: [
      "Una niña de quince meses que sabe lanzar la pelota tira una naranja, ve que no bota y empieza a apretarla y olerla. ¿Qué proceso muestra al final?|Acomodación|Asimilación|Organización|Primero asimila la naranja al esquema de lanzar. Cuando no encaja, modifica su forma de tratar la fruta: acomodación.",
      "¿Qué factor coordina, según Piaget, a los otros tres factores del desarrollo?|La equilibración|La maduración|La transmisión social|Piaget citó maduración, experiencia con los objetos, transmisión social y equilibración, que coordina los demás.",
      "¿Qué postura rechaza Piaget al decir que el conocimiento no se imprime en el niño desde fuera?|El empirismo|El organicismo|El constructivismo|Rechaza el empirismo (y también el innatismo, que supone un conocimiento escrito de antemano). Su postura es constructivista y organicista.",
      "¿Qué rasgo central corresponde al estadio preoperacional?|La función simbólica|La lógica reversible|El razonamiento hipotético|El preoperacional (2–7 años) se define por la función simbólica. La lógica reversible es de las operaciones concretas."
    ],
    inc: [
      "Sobre la equilibración y las invariantes|Las invariantes funcionales cambian con cada estadio|La organización integra los esquemas en sistemas|El conflicto cognitivo surge ante un dato inesperado|Las invariantes funcionales funcionan igual a cualquier edad. Lo que cambia son las estructuras que producen."
    ],
    seq: [
      "Estadios de Piaget|Sensoriomotor>Preoperacional>Operaciones concretas>Operaciones formales"
    ],
    cls: [
      "Proceso de Piaget|Asimilación: el esquema no cambia; llamar «pato» a un cisne; tirar la naranja como una pelota|Acomodación: el esquema cambia; crear la categoría «cisne»; apretar y oler la fruta"
    ] },
  { t: "Vygotsky: mediación, doble formación y zona de desarrollo próximo",
    tip: "Para el enfoque sociocultural de Vygotsky, las funciones psicológicas superiores están mediadas por herramientas y signos culturales, sobre todo el lenguaje. Según la ley de doble formación, toda función aparece primero entre personas y después dentro del niño, por interiorización. La ZDP es la distancia entre lo que el niño resuelve solo, su nivel real, y lo que resuelve con ayuda, su nivel potencial.",
    v: [
      "Enfoque sociocultural=Perspectiva de Vygotsky, también llamada histórico-cultural",
      "Funciones superiores=Atención voluntaria, memoria deliberada y razonamiento, mediados por la cultura",
      "Signos=Herramientas psicológicas como el lenguaje, los números o los mapas",
      "Plano interpsicológico=Plano social, entre personas, donde aparece primero toda función",
      "Plano intrapsicológico=Plano individual, dentro del niño, al que pasa después la función",
      "Interiorización=Paso de una función del plano social al individual",
      "Nivel de desarrollo real=Lo que el niño resuelve solo",
      "Nivel de desarrollo potencial=Lo que el niño resuelve con ayuda de alguien más capaz"
    ],
    g: [
      "Pensamiento y lenguaje, de Vygotsky, se publicó en ___.|1934|1978|1962",
      "Hacer un nudo en un pañuelo para acordarse de algo es usar un ___.|signo|esquema|andamio",
      "Para Vygotsky, la enseñanza eficaz trabaja un poco por ___ del desarrollo.|delante|detrás|encima",
      "Para Vygotsky, el lenguaje es una herramienta que ___ el pensamiento.|transforma|refleja|sustituye",
      "Como las herramientas culturales varían, el desarrollo no tiene por qué seguir un único camino ___.|universal|individual|biológico"
    ],
    tf: [
      "La ZDP es la distancia entre el nivel de desarrollo real y la edad cronológica del niño.|F|Es la distancia entre lo que resuelve solo (nivel real) y lo que resuelve con ayuda (nivel potencial).",
      "Dos niños con el mismo nivel de desarrollo real pueden tener ZDP muy distintas.|V",
      "La ZDP es un rasgo fijo del niño que se mantiene a lo largo de la infancia.|F|Es una zona que se desplaza: lo que hoy se hace con ayuda, mañana se hará solo.",
      "Para Vygotsky, las funciones superiores no son simples prolongaciones de las elementales.|V"
    ],
    q: [
      "Marta, de siete años, no monta sola un puzle de cien piezas, pero lo termina cuando su hermano le sugiere empezar por los bordes. ¿Qué ilustra?|Que la tarea está en su ZDP|Que la tarea supera su ZDP|Que es su nivel de desarrollo real|Lo logra con ayuda de alguien más capaz, pero no sola: la tarea está entre su nivel real y su nivel potencial.",
      "Un padre guía a su hijo al recoger: «primero los coches, luego los cuentos». Meses después, el niño se da esas instrucciones en voz baja. ¿Qué ilustra?|La ley de doble formación|La asimilación de un esquema|La equilibración cognitiva|La regulación aparece primero entre personas y después dentro del niño: la regulación compartida se ha interiorizado.",
      "¿Qué diferencia a Vygotsky de Piaget respecto al papel de la enseñanza?|Para Vygotsky va por delante|Para Vygotsky acompaña al desarrollo|Para Vygotsky es irrelevante|Para Piaget la enseñanza acompaña al desarrollo. Para Vygotsky va por delante y lo impulsa.",
      "¿Qué consecuencia tiene la ZDP para evaluar a un niño?|Lo que hace solo da una imagen incompleta|Basta con medir lo que el niño hace solo|La ayuda del adulto invalida la evaluación|Dos niños con el mismo nivel real pueden tener ZDP muy distintas, así que medir solo lo que hacen sin ayuda es incompleto."
    ],
    inc: [
      "Sobre Vygotsky|El lenguaje solo refleja el pensamiento ya hecho|Las funciones superiores están mediadas por signos|El desarrollo está ligado a la cultura|Esa es la postura de Piaget. Para Vygotsky el lenguaje es una herramienta que transforma el pensamiento."
    ],
    seq: [
      "Ley de doble formación|Plano interpsicológico>Interiorización>Plano intrapsicológico"
    ],
    cls: [
      "Autor|Piaget: equilibración; estadios universales; el lenguaje refleja el pensamiento|Vygotsky: interacción social; desarrollo ligado a la cultura; el lenguaje transforma el pensamiento"
    ] },
  { t: "Andamiaje, participación guiada y habla privada",
    tip: "El andamiaje lo propusieron Wood, Bruner y Ross (1976), no Vygotsky: es una ayuda ajustada y temporal, contingente a los fallos y aciertos del niño, que se retira cuando gana dominio. Rogoff (1990) describió la participación guiada en actividades culturales cotidianas. Piaget vio en el habla egocéntrica un signo de egocentrismo, y Vygotsky, en el habla privada, una herramienta de autorregulación, interpretación que apoya más la investigación.",
    v: [
      "Andamiaje=Ayuda ajustada y temporal que se retira cuando el niño gana dominio",
      "Wood, Bruner y Ross=Autores que propusieron el andamiaje en 1976",
      "Contingencia=La ayuda aumenta cuando el niño falla y disminuye cuando acierta",
      "Participación guiada=Aprender colaborando con expertos en actividades culturales cotidianas",
      "Rogoff (1990)=Autora que llevó la ayuda experta a la vida cotidiana y a la cultura",
      "Habla egocéntrica=Para Piaget, muestra la incapacidad de adoptar la perspectiva del oyente",
      "Habla privada=Para Vygotsky, lenguaje dirigido a uno mismo para planificar y autorregularse",
      "Pensamiento verbal=Destino del habla privada una vez interiorizada"
    ],
    g: [
      "Wood, Bruner y Ross observaron a una tutora que ayudaba a niños a construir una ___ con bloques.|pirámide|torre|casa",
      "Según Vygotsky, el habla privada debería aumentar cuando la tarea es ___.|difícil|fácil|rutinaria",
      "Con la edad, el habla privada se hace más breve y ___, hasta volverse interna.|susurrada|egocéntrica|social",
      "Para Piaget, el habla egocéntrica ___ al superar el egocentrismo.|desaparece|se interioriza|aumenta",
      "Una ayuda que nunca se retira crea ___.|dependencia|autonomía|contingencia"
    ],
    tf: [
      "El concepto de andamiaje lo introdujo Vygotsky en Pensamiento y lenguaje.|F|Es de Wood, Bruner y Ross (1976). Encaja muy bien con la ZDP, pero no es de Vygotsky.",
      "En la participación guiada el adulto no siempre instruye: a menudo deja que el niño observe y colabore.|V",
      "La investigación posterior apoya más la interpretación de Piaget sobre el habla que la de Vygotsky.|F|Apoya más la de Vygotsky: el habla privada aumenta ante tareas difíciles, como haría una herramienta autorreguladora.",
      "No hay pruebas de que enseñar a cada alumno en su estilo visual, auditivo o kinestésico mejore su aprendizaje.|V"
    ],
    q: [
      "Una monitora sujeta primero todo el cuerpo del niño en el agua, luego solo la barriga, después le da un churro y al final se aparta. ¿Qué aplica?|Andamiaje|Moldeamiento|Participación guiada|La ayuda se ajusta y se retira a medida que el niño gana dominio. El moldeamiento refuerza aproximaciones sucesivas.",
      "Un niño de cuatro años dice en voz alta «el rojo no cabe, pues el azul» mientras hace un puzle difícil. Según Vygotsky, ¿qué función cumple?|Guiar su propia acción|Comunicarse con el adulto|Ninguna en especial|Es habla privada: usa el lenguaje para planificar y autorregularse. Para Piaget, en cambio, no tendría una función especial.",
      "¿Qué autora describió la participación guiada?|Rogoff|Mahler|Diamond|Barbara Rogoff (1990) amplió la idea de ayuda experta a la participación en actividades culturales cotidianas.",
      "Según la investigación, ¿qué conviene hacer para enseñar bien a un niño?|Ajustar la ayuda a su dominio|Adaptarse a su estilo de aprendizaje|Darle siempre la máxima ayuda|No hay pruebas a favor de los estilos de aprendizaje (Pashler et al., 2008). Sí las hay para ajustar la ayuda y retirarla."
    ],
    inc: [
      "Sobre el andamiaje|La cantidad de ayuda importa más que su calidad|La ayuda debe retirarse cuando el niño progresa|Incluye controlar la frustración del niño|Importa más la calidad de la ayuda que su cantidad, y una ayuda que no se retira crea dependencia."
    ],
    seq: [],
    cls: [
      "Habla del niño|Egocéntrica (Piaget): perspectiva del oyente; desaparece; sin función especial|Privada (Vygotsky): autorregulación; se interioriza; aumenta con tareas difíciles"
    ] },
  { t: "El procesamiento de la información y las funciones ejecutivas",
    tip: "El procesamiento de la información describe paso a paso las operaciones entre estímulo y conducta y pregunta qué cambia con la edad: la capacidad y la rapidez del sistema o las estrategias. Frente a Piaget, describe un cambio gradual y continuo. Siegler (1996) mostró que a una misma edad compiten varias estrategias. Las funciones ejecutivas, según Miyake et al. (2000), son inhibición, actualización y flexibilidad cognitiva.",
    v: [
      "Velocidad de procesamiento=Rapidez que aumenta con la edad en tareas muy distintas (Kail, 1991)",
      "Metacognición=Conocer y vigilar el propio pensamiento",
      "Olas superpuestas=Modelo de Siegler: varias estrategias compiten a una misma edad",
      "Método microgenético=Registro de cerca de un cambio mientras ocurre",
      "Inhibición=Frenar una respuesta automática o una distracción",
      "Actualización=Mantener y renovar la información activa en la memoria de trabajo",
      "Flexibilidad cognitiva=Cambiar de regla o de perspectiva",
      "Neopiagetianos=Combinaron los estadios de Piaget con la capacidad de la memoria de trabajo"
    ],
    g: [
      "Siegler propuso el modelo de las olas superpuestas en ___.|1996|1991|2000",
      "Contar a partir del número mayor para resolver 3 + 5 es una ___ de suma.|estrategia|estructura|metáfora",
      "Las funciones ejecutivas siguen madurando en la adolescencia junto con la corteza ___.|prefrontal|occipital|temporal",
      "Kail (1991) atribuyó la mejora general de la velocidad de procesamiento a un cambio ligado a la ___.|maduración|enseñanza|cultura",
      "Diamond (2013) sitúa las funciones ejecutivas como ___ de capacidades más complejas, como planificar.|base|resultado|sustituto"
    ],
    tf: [
      "El procesamiento de la información describe el desarrollo como grandes reorganizaciones por estadios.|F|Describe un cambio gradual y continuo, sin grandes reorganizaciones por estadios, frente a Piaget.",
      "Según Siegler, un niño de seis años usa una sola estrategia para sumar hasta que la sustituye por otra mejor.|F|Usa varias estrategias que compiten, y las más eficaces ganan peso con la práctica, como olas superpuestas.",
      "Las funciones ejecutivas mejoran mucho en los años preescolares y siguen madurando en la adolescencia.|V",
      "Al procesamiento de la información se le critica que atiende poco a la emoción y al contexto social.|V"
    ],
    q: [
      "En una tarea, un niño clasifica tarjetas por color y después debe pasar a clasificarlas por forma. ¿Qué componente ejecutivo se evalúa?|Flexibilidad cognitiva|Inhibición de respuestas|Memoria de trabajo|Cambiar de regla o de perspectiva es flexibilidad cognitiva. Frenar una respuesta automática sería inhibición.",
      "En «Simón dice», una niña no toca la pelota porque no se ha dicho «Simón dice». ¿Qué función usa sobre todo?|Inhibición|Flexibilidad|Metamemoria|Frenar una respuesta automática es la función ejecutiva de inhibición.",
      "¿Qué crítica se hace al enfoque del procesamiento de la información?|Fragmenta la mente en procesos aislados|Carece de tareas bien definidas|Sus modelos no pueden ponerse a prueba|Ha aportado tareas bien definidas y modelos contrastables, pero fragmenta la mente y usa tareas alejadas de la vida diaria.",
      "Para observar cómo un niño pasa de contar con los dedos a recordar el resultado de una suma, ¿qué método conviene?|El microgenético|El transversal|El clínico|Para ver el cambio de estrategias hay que registrarlo de cerca mientras ocurre: es el método microgenético."
    ],
    inc: [
      "Sobre las funciones ejecutivas|Son un único proceso indivisible|Incluyen inhibición, actualización y flexibilidad|Son la base de planificar y razonar|Miyake et al. (2000) distinguen tres componentes relacionados pero separables."
    ],
    seq: [],
    cls: [
      "Componente ejecutivo|Inhibición: «Simón dice»; frenar una respuesta automática|Actualización: recordar los ingredientes que faltan en la lista|Flexibilidad: pasar de clasificar por color a clasificar por forma"
    ] }
] },
{ n: 4, t: "Teorías etológicas, ecológicas y sistémicas", cap: 1, pir: "alta", mods: [
  { t: "Etología: impronta, periodos críticos y periodos sensibles",
    tip: "La etología, fundada por Lorenz y Tinbergen, estudia la conducta en el medio natural desde la teoría de la evolución. La impronta es el ejemplo clásico de periodo crítico: una ventana breve en la que la experiencia es imprescindible. En el desarrollo humano es más útil el periodo sensible, de límites graduales, que admite aprendizajes posteriores. Los estudios ERA y BEIP muestran que lo temprano importa mucho, pero no lo decide todo.",
    v: [
      "Etología=Estudio de la conducta animal en su medio natural desde la teoría de la evolución",
      "Impronta=Vínculo rápido de una cría con el primer objeto móvil que ve tras nacer",
      "Periodo crítico=Ventana en la que una experiencia es imprescindible para adquirir una capacidad",
      "Periodo sensible=Ventana de especial receptividad que admite aprendizajes posteriores",
      "Tinbergen=Propuso preguntar qué desencadena una conducta, cómo se desarrolla y para qué sirve",
      "Psicología evolucionista del desarrollo=Busca la función adaptativa de rasgos infantiles, como el juego",
      "Estudio ERA=Seguimiento de niños adoptados tras salir de orfanatos rumanos",
      "BEIP=Ensayo aleatorizado sobre los efectos de la acogida familiar temprana"
    ],
    g: [
      "Lenneberg (1967) propuso un periodo crítico para el ___.|lenguaje|apego|andar",
      "Los teratógenos dañan sobre todo durante el periodo ___, cuando se forman los órganos.|embrionario|fetal|germinal",
      "En el estudio ERA, los niños que salieron antes de los ___ meses eran casi indistinguibles de los adoptados británicos.|6|12|24",
      "En el BEIP, los efectos de la acogida familiar seguían presentes a los ___ años.|18|6|12",
      "La capacidad de distinguir sonidos de otras lenguas se estrecha hacia el final del primer ___.|año|mes|trimestre"
    ],
    tf: [
      "En el estudio ERA, los niños que salieron tarde de las instituciones no recuperaron un CI normal.|F|Mostraron problemas persistentes, pero recuperaron un CI normal (Sonuga-Barke et al., 2017).",
      "La impronta se produce con muy poca experiencia y sin refuerzo aparente.|V",
      "Fuera de un periodo sensible, la experiencia ya no produce ningún efecto.|F|Eso define el periodo crítico. En el sensible la experiencia posterior tiene efecto, aunque menor o más costoso.",
      "Una crítica a la etología es que sus explicaciones adaptativas son fáciles de construir a posteriori.|V"
    ],
    q: [
      "Unas crías de ganso ven moverse a un investigador poco después de salir del huevo y desde entonces lo siguen. ¿Qué fenómeno muestran?|Impronta|Habituación|Moldeamiento|Lorenz observó que las crías siguen al primer objeto en movimiento que ven tras la eclosión, aunque sea él mismo.",
      "¿Qué rasgo distingue al periodo sensible del crítico?|Sus límites son graduales|Su reversibilidad es muy baja|Se limita a los animales|El periodo sensible tiene límites graduales y reversibilidad parcial. Límites nítidos y reversibilidad muy baja son del crítico.",
      "Un niño sale a los dos años de una institución muy deficiente y es adoptado. Según los estudios ERA y BEIP, ¿qué cabe esperar?|Mejora, aunque puede tener problemas persistentes|No podrá recuperar nada de lo perdido|Será indistinguible de los no institucionalizados|Los que salieron más tarde mostraron problemas persistentes, pero recuperaron un CI normal: lo temprano no lo decide todo.",
      "¿Qué autor aplicó las ideas etológicas al vínculo entre el bebé y quien lo cuida?|Bowlby|Lorenz|Tinbergen|Bowlby vio el llanto, la sonrisa o el aferrarse como conductas preparadas para mantener cerca al adulto: la teoría del apego."
    ],
    inc: [
      "Sobre la impronta|Puede producirse en cualquier momento de la vida|Una vez establecida, es difícil de revertir|Se produce con muy poca experiencia|Solo ocurre en una ventana temporal muy breve tras la eclosión: es el ejemplo clásico de periodo crítico."
    ],
    seq: [],
    cls: [
      "Tipo de periodo|Crítico: límites nítidos; reversibilidad muy baja; impronta en gansos|Sensible: límites graduales; reversibilidad parcial; discriminación de sonidos del habla"
    ] },
  { t: "El modelo ecológico de Bronfenbrenner",
    tip: "Bronfenbrenner (1979) propuso estudiar el desarrollo en contexto, con un ambiente formado por sistemas anidados: microsistema, mesosistema, exosistema, macrosistema y cronosistema. La distinción más preguntada es que el mesosistema es la relación entre dos entornos en los que el niño está, y el exosistema, un entorno en el que no está pero que le afecta. El modelo bioecológico (PPCT) sitúa los procesos proximales como motor del desarrollo.",
    v: [
      "Microsistema=Entornos en que el niño participa directamente, con relaciones cara a cara",
      "Mesosistema=Relaciones entre los entornos en que participa el niño, como familia y escuela",
      "Exosistema=Entorno en el que el niño no participa, pero que le afecta de forma indirecta",
      "Macrosistema=Marco cultural de valores, creencias, leyes y condiciones económicas",
      "Cronosistema=Dimensión temporal: cambios en la vida del niño y cambios históricos",
      "Procesos proximales=Interacciones regulares y cada vez más complejas que impulsan el desarrollo",
      "PPCT=Proceso, persona, contexto y tiempo, siglas del modelo bioecológico",
      "Bronfenbrenner y Morris (2006)=Autores de la formulación del modelo bioecológico"
    ],
    g: [
      "Las reuniones entre la tutora y la familia de un niño forman parte del ___.|mesosistema|microsistema|exosistema",
      "El cambio de turno laboral del padre, que reduce el tiempo con su hija, pertenece al ___.|exosistema|mesosistema|macrosistema",
      "La duración de los permisos parentales es un elemento del ___.|macrosistema|exosistema|cronosistema",
      "El nacimiento de un hermano es un acontecimiento del ___.|cronosistema|microsistema|mesosistema",
      "En el microsistema las influencias son ___: el niño también influye en sus padres.|bidireccionales|unidireccionales|indirectas"
    ],
    tf: [
      "La comunicación entre la familia y el profesorado es un ejemplo de exosistema.|F|Es una relación entre dos microsistemas del niño: mesosistema. El exosistema es un entorno en el que el niño no está.",
      "En el modelo bioecológico, los procesos proximales son el motor del desarrollo.|V",
      "Las decisiones del ayuntamiento sobre los comedores escolares forman parte del macrosistema.|F|Son un entorno en el que el niño no participa pero que le afecta de forma indirecta: exosistema.",
      "Al modelo ecológico se le critica que describe dónde actúan las influencias mejor que cómo actúan.|V"
    ],
    q: [
      "A la madre de Hugo, de ocho años, la empresa le amplía la jornada y ya no puede recogerlo del colegio. ¿En qué sistema se sitúa el cambio?|Exosistema|Mesosistema|Macrosistema|El trabajo de la madre es un entorno en el que Hugo no participa, pero que le afecta de forma indirecta.",
      "El pediatra y la escuela de una niña con asma se coordinan para seguir su tratamiento. ¿Qué sistema es?|Mesosistema|Microsistema|Exosistema|Es una relación entre dos microsistemas en los que la niña está presente, la consulta y la escuela.",
      "¿Qué impresión corrigió Bronfenbrenner con el modelo bioecológico?|Que pareciera hablar solo del ambiente|Que olvidara el nivel cultural del niño|Que no tuviera sistemas anidados|Añadió la persona y los procesos proximales (PPCT) para corregir la impresión de que su modelo solo hablaba del ambiente.",
      "¿Qué criticó Bronfenbrenner de gran parte de la investigación evolutiva?|Sus situaciones artificiales y breves|Su exceso de estudios en la escuela|Su desinterés por la biología|Criticó que se estudiara a los niños en situaciones artificiales, con adultos desconocidos y durante poco tiempo."
    ],
    inc: [
      "Sobre el modelo PPCT|El contexto es el motor del desarrollo|La persona incluye temperamento y edad|El tiempo abarca hasta la época histórica|El motor del desarrollo son los procesos proximales. El contexto son los sistemas anidados."
    ],
    seq: [],
    cls: [
      "Sistema de Bronfenbrenner|Mesosistema: tutorías con la familia; coordinación familia-escuela|Exosistema: trabajo de los padres; decisiones del ayuntamiento; servicios sociales del barrio|Macrosistema: valores y creencias; leyes; duración de los permisos parentales"
    ] },
  { t: "Sistemas dinámicos, modelo transaccional y epigénesis probabilística",
    tip: "Los enfoques sistémicos explican el desarrollo por la interacción continua de muchos elementos. Para Thelen y Smith (1994), habilidades como andar surgen por autoorganización de varios componentes. Sameroff propuso que el niño y su entorno se transforman mutuamente a lo largo del tiempo. Gottlieb distinguió la epigénesis predeterminada de la probabilística, con influencias en ambas direcciones entre genes, actividad neural, conducta y ambiente.",
    v: [
      "Autoorganización=Nuevas formas que surgen de la interacción de componentes sin estar programadas",
      "Thelen y Smith (1994)=Autoras de la teoría de los sistemas dinámicos",
      "Modelo transaccional=El niño y su entorno se transforman mutuamente a lo largo del tiempo",
      "Epigénesis=Aparición progresiva de nuevas estructuras y funciones",
      "Epigénesis probabilística=Influencias en ambas direcciones entre genes, actividad neural, conducta y ambiente",
      "Epigénesis predeterminada=Influencia en una sola dirección, de los genes a la conducta",
      "Correlación evocativa=Las características del niño provocan respuestas en los demás",
      "Correlación activa=El niño busca ambientes que encajan con sus inclinaciones"
    ],
    g: [
      "El modelo transaccional se debe a ___.|Sameroff|Gottlieb|Thelen",
      "La epigénesis probabilística se debe a ___.|Gottlieb|Sameroff|Lerner",
      "La teoría de los sistemas dinámicos explica bien la ___: cada niño encuentra su camino hacia la misma habilidad.|variabilidad|continuidad|universalidad",
      "Una familia lectora que transmite genes y llena la casa de libros ilustra la correlación gen-ambiente ___.|pasiva|evocativa|activa",
      "Scarr y McCartney distinguieron tres tipos de correlación gen-ambiente en ___.|1983|1994|2015"
    ],
    tf: [
      "Para los sistemas dinámicos, andar aparece cuando se activa un programa madurativo.|F|Aparece porque se ensamblan componentes como la fuerza, el equilibrio, el peso, la motivación y el suelo.",
      "En la epigénesis probabilística, la experiencia participa en la construcción del programa y no se limita a activarlo.|V",
      "El modelo transaccional se limita a afirmar que niño y entorno influyen los dos en el desarrollo.|F|Va más allá: cada uno cambia al otro, y ese cambio altera la influencia siguiente.",
      "La epigénesis probabilística anticipó lo que hoy estudia la epigenética molecular.|V"
    ],
    q: [
      "Un bebé difícil de calmar agota a su madre, ya ansiosa, que responde con menos paciencia, y el bebé se irrita aún más. ¿Qué modelo lo describe?|El transaccional de Sameroff|El de sistemas dinámicos|La epigénesis predeterminada|Niño y entorno se transforman mutuamente: al cabo de un año la relación es tensa, aunque ninguno lo era tanto al principio.",
      "Una adolescente con facilidad para la música se apunta al conservatorio. ¿Qué correlación gen-ambiente ilustra?|Activa|Pasiva|Evocativa|En la correlación activa el niño busca ambientes acordes con sus inclinaciones. En la evocativa provoca respuestas en los demás.",
      "Un bebé muy sonriente recibe más atención de los adultos. ¿Qué tipo de correlación gen-ambiente es?|Evocativa|Activa|Pasiva|Las características del niño provocan respuestas en los demás: correlación evocativa.",
      "¿Qué concepto se asocia a Thelen y Smith?|Autoorganización|Transacción|Epigénesis probabilística|La autoorganización es de Thelen y Smith, la transacción de Sameroff y la epigénesis probabilística de Gottlieb."
    ],
    inc: [
      "Sobre la epigénesis predeterminada|Admite influencias bidireccionales entre niveles|La influencia va de los genes a la conducta|Su resultado es previsible a partir de los genes|Las influencias bidireccionales son propias de la epigénesis probabilística. La predeterminada va en una sola dirección."
    ],
    seq: [],
    cls: [
      "Tipo de correlación gen-ambiente|Pasiva: familia lectora con la casa llena de libros|Evocativa: bebé sonriente que recibe más atención|Activa: adolescente musical que se apunta al conservatorio"
    ] },
  { t: "Comparación de teorías y marco integrador actual",
    tip: "Cada teoría mira un aspecto distinto del desarrollo, y compararlas con los cuatro grandes debates ayuda a situarlas. Las clásicas tienden a los extremos, como Skinner en el ambiente y la continuidad, y las recientes ocupan posiciones intermedias e interactivas. Casi todas conciben al niño como activo. Como el eclecticismo corre el riesgo de que todo explique todo, el campo tiende a los modelos relacionales y de sistemas (Lerner, 2015).",
    v: [
      "Eclecticismo=Tomar de cada teoría lo que mejor explica un aspecto concreto",
      "Modelos relacionales=Marco de Lerner (2015) con relaciones mutuas entre persona y contexto",
      "Desarrollo probabilístico=Una misma situación de partida puede llevar a resultados distintos",
      "Bidireccionalidad=El niño cambia su entorno y es cambiado por él",
      "Punto débil de Piaget=Infravalora las competencias tempranas",
      "Punto débil de Vygotsky=Presta poca atención a lo biológico",
      "Punto débil de la etología=Ofrece explicaciones construidas a posteriori",
      "Punto débil de Bronfenbrenner=Describe más que explica"
    ],
    g: [
      "En la comparación de teorías, Skinner ocupa el extremo del ambiente y de la ___.|continuidad|discontinuidad|interacción",
      "Para la teoría psicoanalítica de Freud, el niño es ___ ante sus pulsiones.|pasivo|activo|neutral",
      "La perspectiva del ciclo vital se considera más un marco ___ que una teoría concreta.|general|clínico|aplicado",
      "Según el marco integrador, hay plasticidad durante toda la vida, aunque con periodos ___.|sensibles|críticos|normativos",
      "El punto débil de los sistemas dinámicos es que son difíciles de formalizar en lo ___.|cognitivo|motor|social"
    ],
    tf: [
      "Las teorías clásicas tienden a ocupar posiciones intermedias en los grandes debates.|F|Tienden a los extremos. Las posiciones intermedias e interactivas son propias de las teorías más recientes.",
      "Casi todas las teorías actuales conciben al niño como activo.|V",
      "El marco relacional actual elimina las teorías clásicas y las sustituye.|F|No las elimina: las sitúa como piezas útiles dentro de una visión más amplia.",
      "Se debate si la integración actual es una teoría propiamente dicha o un marco general que orienta la investigación.|V"
    ],
    q: [
      "¿Qué teoría sitúa el desarrollo en el extremo de la continuidad y del peso del ambiente?|Condicionamiento operante|Teoría psicoanalítica|Constructivismo piagetiano|Skinner concibe un cambio continuo producido por el ambiente. Freud y Piaget defienden estadios.",
      "Para entender las rabietas de un niño de cinco años, una psicóloga examina su temperamento, si las rabietas obtienen recompensa y la relación entre familia y escuela. ¿Qué enfoque adopta?|Ecléctico|Conductista|Ecológico|Toma de cada teoría lo que mejor explica un aspecto: temperamento, refuerzo (Skinner) y familia-escuela (Bronfenbrenner).",
      "¿Qué riesgo tiene el eclecticismo?|Que todo explique todo|Que ignore las teorías clásicas|Que solo valga para la infancia|Puede acabar en un catálogo de explicaciones parciales que no se contrastan entre sí.",
      "¿Qué punto débil se atribuye a la teoría de Bandura en la comparación de teorías?|Poca atención a la maduración|Escasa verificación empírica|Explicaciones a posteriori|La escasa verificación empírica se atribuye a Freud, y las explicaciones a posteriori, a la etología."
    ],
    inc: [
      "Sobre los modelos relacionales|El desarrollo está fijado por la situación de partida|Las influencias son bidireccionales|El desarrollo implica varios niveles, de genes a cultura|El desarrollo es probabilístico: una misma situación de partida puede llevar a resultados distintos."
    ],
    seq: [],
    cls: [
      "Postura ante continuidad-discontinuidad|Continuidad: Skinner; Bandura; procesamiento de la información|Estadios: Freud; Erikson; Piaget"
    ] }
] }
);

// SAIMAP Psicología · Desarrollo: Infancia · Unidades 5–8
window.COURSE.units.push(
{ n: 5, t: "Métodos de recogida de datos y diseños generales", cap: 2, pir: "media", mods: [
  { t: "Observación, entrevista clínica y cuestionarios",
    tip: "Todo método se juzga por su fiabilidad, la consistencia de la medida, y por su validez, si capta el constructo que se quiere estudiar. La observación naturalista registra la conducta real, pero sufre reactividad y no permite inferir causas, y la estructurada gana comparabilidad a costa de naturalidad. La entrevista clínica de Piaget sigue el razonamiento, pero cuesta estandarizarla, y los cuestionarios exigen comprensión y sufren deseabilidad social.",
    v: [
      "Fiabilidad=Consistencia de una medida entre ocasiones u observadores",
      "Validez=Grado en que una medida capta realmente el constructo que se quiere estudiar",
      "Reactividad=Cambio de la conducta porque la persona sabe que está siendo observada",
      "Muestreo de tiempo=Registrar si aparece una conducta en intervalos breves y fijos",
      "Fiabilidad interjueces=Grado de acuerdo entre dos observadores independientes",
      "Entrevista clínica=Preguntas flexibles en las que cada una depende de la respuesta anterior (Piaget)",
      "Deseabilidad social=Tendencia a inclinar las respuestas hacia lo que se considera aceptable",
      "Etnografía=Convivencia prolongada con un grupo cultural para entender sus prácticas desde dentro"
    ],
    g: [
      "Anotar cada 30 segundos de recreo si un niño juega solo o con otros es un muestreo de ___.|tiempo|casos|sucesos",
      "La Situación Extraña, con la que se evalúa el apego, es un ejemplo de observación ___.|estructurada|naturalista|participante",
      "Un test puede ser muy ___ y, aun así, medir otro constructo.|fiable|válido|reactivo",
      "Los diarios de bebés de Darwin y Preyer son el antecedente del estudio de ___.|casos|campo|cohortes",
      "Hall ya usó los ___ para estudiar a niños y adolescentes.|cuestionarios|experimentos|diarios"
    ],
    tf: [
      "La observación naturalista permite saber qué causó la conducta registrada.|F|Capta la conducta real, pero no permite inferir causas: solo registra lo que ocurre.",
      "Como cada conversación toma un rumbo propio, los datos de la entrevista clínica son difíciles de estandarizar.|V",
      "Con niños pequeños, el cuestionario es el método más útil porque se aplica a muestras grandes.|F|Con niños pequeños apenas sirve, porque exige leer y entender las preguntas.",
      "El niño, la familia y el profesorado, preguntados como informantes, no siempre coinciden.|V"
    ],
    q: [
      "Una investigadora pregunta a una niña por qué cree que ahora hay más agua y, según lo que contesta, le plantea nuevas preguntas. ¿Qué método usa?|La entrevista clínica|El cuestionario estructurado|La observación estructurada|Las preguntas se ajustan a cada respuesta para seguir el razonamiento infantil, como hacía Piaget.",
      "Unos niños juegan de otra forma en el patio cuando ven al investigador con su cuaderno. ¿Qué límite de la observación naturalista ilustra?|La reactividad|La deseabilidad social|La fiabilidad interjueces|La conducta cambia porque el niño se sabe observado. La deseabilidad social afecta sobre todo a los cuestionarios.",
      "¿Qué ventaja tiene la observación estructurada frente a la naturalista?|Permite comparar a unos niños con otros|Capta la conducta tal como ocurre en casa|Evita tener que definir las categorías|Prepara una situación igual para todos, útil para conductas poco frecuentes, a cambio de un escenario menos natural.",
      "¿Qué riesgo principal se atribuye a la etnografía?|Que las ideas previas tiñan la interpretación|Que los participantes respondan lo aceptable|Que la conducta cambie al saberse observada|Exige convivir meses con la comunidad, y la subjetividad del investigador puede teñir lo que interpreta."
    ],
    inc: [
      "Sobre los métodos de recogida de datos|El estudio de casos permite generalizar con facilidad|La etnografía comprende las prácticas desde dentro|El cuestionario aporta mucha información con rapidez|El estudio de casos aporta riqueza de datos, pero su límite es lo difícil que resulta generalizar."
    ],
    seq: [],
    cls: [
      "Tipo de observación|Naturalista: casa, patio o aula; conducta real; reactividad|Estructurada: laboratorio; Situación Extraña; menor naturalidad"
    ] },
  { t: "Cómo se estudia a los bebés: paradigmas infantiles y medidas psicofisiológicas",
    tip: "Los paradigmas infantiles aprovechan lo que el bebé controla pronto: mirar, chupar y girar la cabeza. Si responde de forma distinta a dos estímulos, los distingue, pero mirar lo mismo ambos no prueba que no los distinga. La violación de expectativas admite una lectura «rica» y otra «austera» y está en debate. Las medidas psicofisiológicas rara vez indican por sí solas qué proceso psicológico las produce.",
    v: [
      "Preferencia visual=Paradigma de Fantz (1961) que mide el tiempo de mirada a pares de estímulos",
      "Habituación=Descenso del tiempo de mirada ante un estímulo que se repite",
      "Deshabituación=Recuperación de la mirada al aparecer un estímulo nuevo",
      "Violación de expectativas=Mirar más un suceso físicamente imposible que uno posible",
      "Giro de cabeza=Tiempo con la cabeza orientada hacia el altavoz lateral que suena",
      "Succión no nutritiva=Chupar una tetina con sensor, cuyo ritmo pone en marcha un sonido u otro",
      "fNIRS=Registro de la oxigenación cortical con un gorro ligero que tolera algo de movimiento",
      "Seguimiento ocular=Registro de dónde y cuánto mira el bebé sin depender de un observador humano"
    ],
    g: [
      "En el paradigma de Fantz, los bebés miraban más los estímulos con patrón, con el ___ en cabeza.|rostro|texto|color",
      "La frecuencia cardiaca suele ___ cuando el bebé presta atención.|desacelerarse|acelerarse|estabilizarse",
      "En los bebés, el cortisol, marcador de estrés, se recoge de forma no invasiva en muestras de ___.|saliva|sangre|plasma",
      "Con la succión no nutritiva se comprobó que los recién nacidos prefieren la voz ___.|materna|paterna|infantil",
      "Los potenciales evocados registran la actividad eléctrica cerebral con precisión de ___.|milisegundos|segundos|minutos"
    ],
    tf: [
      "Si un bebé mira lo mismo dos estímulos, queda demostrado que no los distingue.|F|Mirar más uno indica discriminación, pero mirar por igual no prueba que no los distinga. Es una trampa típica.",
      "La lectura «austera» de la violación de expectativas atribuye al bebé un conocimiento de la solidez de los objetos.|F|Esa es la lectura «rica». La austera sostiene que el bebé solo reacciona a lo perceptivamente nuevo.",
      "Una aceleración del pulso puede indicar miedo, interés o simple movimiento.|V",
      "Como muchos bebés lloran o se duermen, conviene informar de cuántos se excluyeron y por qué.|V"
    ],
    q: [
      "Se muestra a un bebé la misma cara alegre hasta que su mirada baja y después una cara triste, ante la que vuelve a mirar más. ¿Qué paradigma se ha usado?|Habituación-deshabituación|Violación de expectativas|Preferencia visual simple|Tras habituarse al estímulo repetido, la recuperación de la mirada ante el nuevo indica que distingue ambas caras.",
      "Un bebé mira más un suceso en el que un objeto atraviesa una pared que otro posible. ¿Qué se discute sobre este resultado?|Si refleja conocimiento o solo novedad|Si el bebé distingue los dos sucesos|Si la mirada mide de verdad la atención|Se debate entre la lectura rica (sabe que los objetos son sólidos) y la austera (reacciona a lo perceptivamente nuevo).",
      "¿Qué medida psicofisiológica registra cambios en la oxigenación de la corteza?|La fNIRS|El EEG|El cortisol|La espectroscopia funcional de infrarrojo cercano usa un gorro ligero que tolera algo de movimiento.",
      "¿Cuál es el límite común de las medidas psicofisiológicas?|Su interpretación psicológica|Su escasa precisión temporal|Que exigen que el bebé hable|La señal fisiológica rara vez dice por sí sola qué proceso psicológico la ha producido."
    ],
    inc: [
      "Sobre los paradigmas infantiles|La succión no nutritiva mide el tiempo de mirada|El giro de cabeza indica el interés por un sonido|La habituación se ve en el descenso de la mirada|En la succión no nutritiva es la forma de chupar del bebé la que pone en marcha un sonido u otro; no se mide la mirada."
    ],
    seq: [
      "Procedimiento de habituación-deshabituación|Presentar un estímulo repetidamente>Descenso del tiempo de mirada>Presentar un estímulo nuevo>Recuperación de la mirada"
    ],
    cls: [
      "Tipo de medida|Paradigma conductual: preferencia visual; giro de cabeza; succión no nutritiva|Medida psicofisiológica: frecuencia cardiaca; fNIRS; cortisol en saliva"
    ] },
  { t: "Diseños correlacional, experimental, cuasi-experimental y transcultural",
    tip: "El diseño determina qué se puede concluir. El correlacional mide la asociación sin intervenir y no permite inferir causas, por la dirección y las terceras variables. Solo el experimental, con manipulación y asignación aleatoria, tiene alta validez interna, aunque puede tener poca validez ecológica. El cuasi-experimental compara grupos no formados al azar, y el transcultural busca qué es universal y qué específico de un contexto.",
    v: [
      "Coeficiente de correlación=Índice de −1 a +1 cuyo signo da la dirección y su valor absoluto, la fuerza",
      "Tercera variable=Factor que influye a la vez en las dos variables asociadas",
      "Asignación aleatoria=Reparto al azar de los participantes entre condiciones para igualar los grupos",
      "Validez interna=Seguridad con la que se puede concluir que A causa B",
      "Validez ecológica=Grado en que lo observado en el laboratorio refleja la conducta cotidiana",
      "Experimento de campo=Manipulación de una variable en un entorno real, como unas aulas",
      "Experimento natural=Comparación de grupos creados por un suceso que el investigador no controla",
      "BEIP=Ensayo que asignó al azar a 136 niños institucionalizados a seguir así o a acogimiento familiar"
    ],
    g: [
      "El estudio ERA, con niños adoptados tras vivir en orfanatos rumanos, es un experimento ___.|natural|de campo|aleatorizado",
      "La crítica clásica al experimento de laboratorio afecta a su validez ___.|ecológica|interna|predictiva",
      "Comparar a niños que fueron a escuela infantil con niños que no fueron es un diseño ___.|cuasi-experimental|de campo aleatorizado|transcultural",
      "En el diseño correlacional, el signo del coeficiente indica la ___ de la relación.|dirección|fuerza|causa",
      "El diseño ___ es imprescindible cuando la variable, como la pobreza, no se puede manipular.|correlacional|experimental|microgenético"
    ],
    tf: [
      "Una correlación alta entre pantallas y vocabulario demuestra que las pantallas reducen el vocabulario.|F|Correlación no implica causalidad: la dirección puede ser la inversa o pueden influir terceras variables.",
      "El experimento de Bandura, Ross y Ross (1961) sobre la imitación de la agresión es un ejemplo de diseño experimental.|V",
      "El estudio ERA es un ensayo aleatorizado sobre los efectos de la institucionalización.|F|Es un experimento natural: la privación no la asignó el investigador. El ensayo aleatorizado es el BEIP.",
      "En un diseño cuasi-experimental se manipula a veces la variable, pero los grupos no se forman al azar.|V"
    ],
    q: [
      "Un equipo aplica un programa de lectura en unas aulas elegidas al azar y compara su rendimiento con el de otras. ¿Qué diseño es?|Un experimento de campo|Un cuasi-experimento|Un estudio correlacional|Manipula la variable y asigna al azar, pero en un entorno real, lo que responde a la crítica de artificialidad.",
      "Un estudio compara a los alumnos de dos colegios con métodos de lectura distintos. ¿Por qué sus conclusiones causales son débiles?|Los grupos no se formaron al azar|No se mide ninguna variable dependiente|Solo se compara un único grupo|Es cuasi-experimental: los colegios pueden diferir en muchas otras cosas además del método.",
      "¿Qué rasgo distingue al diseño experimental del cuasi-experimental?|La asignación aleatoria|La medida de una VD|La comparación de grupos|Ambos comparan grupos y miden una variable dependiente. Solo el experimento reparte al azar a los participantes.",
      "¿Cuál es la principal dificultad del diseño transcultural?|Que un instrumento no signifique lo mismo|Que la cultura se asigne a los niños|Que no permita comparar países|Busca si un fenómeno es universal o específico, pero un mismo instrumento puede no ser equivalente entre culturas."
    ],
    inc: [
      "Sobre los diseños generales|El cuasi-experimental permite inferir causas con seguridad|El correlacional no permite inferir causas por sí solo|El experimental asigna al azar a las condiciones|El cuasi-experimental solo permite conclusiones causales con cautela, porque sus grupos no se formaron al azar."
    ],
    seq: [],
    cls: [
      "Diseño|Correlacional: no manipula; asociación entre variables; pantallas y vocabulario|Experimental: manipula la VI; asignación aleatoria; Bandura, Ross y Ross|Cuasi-experimental: grupos no aleatorios; estudio ERA; colegios con métodos distintos"
    ] },
  { t: "Ética y ciencia abierta en la investigación con menores",
    tip: "Como los niños no siempre entienden lo que se les pide, un comité de ética revisa cada estudio. Hacen falta consentimiento de los padres, asentimiento del menor, derecho a retirarse, riesgo mínimo, confidencialidad e información posterior. La ciencia abierta responde a los fallos de réplica con prerregistro, estudios multilaboratorio y metaanálisis abiertos. El efecto Mozart muestra por qué un hallazgo llamativo necesita réplicas independientes.",
    v: [
      "Asentimiento=Aceptación del propio menor a participar, además del permiso de sus padres",
      "Consentimiento informado=Permiso de padres o tutores tras explicarles objetivos, procedimientos y riesgos",
      "Riesgo mínimo=Riesgos no superiores a los de la vida cotidiana o una exploración rutinaria",
      "Información posterior=Explicar después a la familia un engaño o una situación desagradable",
      "Prerregistro=Publicar hipótesis, diseño y plan de análisis antes de recoger los datos",
      "Estudio multilaboratorio=Muchos grupos aplican el mismo protocolo y reúnen sus datos",
      "ManyBabies 1 (2020)=Estudio en 67 laboratorios y con 2.329 bebés sobre el habla dirigida al bebé",
      "Efecto Mozart=Supuesta mejora de la inteligencia infantil por escuchar a ese compositor"
    ],
    g: [
      "ManyBabies 1 halló una preferencia por el habla dirigida al bebé con un efecto de aproximadamente la ___ de lo que se creía.|mitad|tercera parte|cuarta parte",
      "Watson y Rayner (1920) condicionaron el miedo a un bebé conocido como el pequeño ___.|Albert|Hans|Peter",
      "Harlow sometió a crías de ___ a una privación social severa.|macaco|chimpancé|rata",
      "Según Pietschnig, Voracek y Formann (2010), el efecto Mozart estaba inflado por el sesgo de ___.|publicación|selección|deseabilidad",
      "Publicar el plan de análisis antes de recoger los datos evita ___ el análisis a lo que «sale».|ajustar|replicar|registrar"
    ],
    tf: [
      "Si un niño de cinco años dice que no quiere seguir, se continúa siempre que los padres hayan firmado.|F|El asentimiento del menor y su derecho a retirarse prevalecen: si dice que no, se para.",
      "Un estudio aislado con pocos bebés tiende a sobrestimar el tamaño de los efectos.|V",
      "El efecto Mozart es exclusivo de la música de Mozart y se ha confirmado con réplicas independientes.|F|El efecto pequeño hallado era igual con cualquier otra música y estaba inflado por el sesgo de publicación.",
      "Someter a niños a procedimientos que no darán resultados fiables también es un problema ético.|V"
    ],
    q: [
      "En un estudio se separa brevemente a un bebé de su cuidador. Al terminar, el equipo lo explica a la familia y se asegura de que el niño acaba tranquilo. ¿Qué principio aplica?|La información posterior|El riesgo mínimo|El asentimiento del menor|Cuando hay un engaño o una situación desagradable, se explica después a la familia y se asegura el bienestar del niño.",
      "¿Qué concluyó ManyBabies 1 sobre la preferencia por el habla dirigida al bebé?|Que existía, con un efecto menor|Que no existía en ningún laboratorio|Que era el doble de lo que se creía|Con 2.329 bebés en 67 laboratorios, la preferencia existía, pero el efecto era la mitad de lo que se creía.",
      "¿Por qué la investigación con bebés es especialmente sensible a los problemas de réplica?|Muestras pequeñas y pocos ensayos válidos|Uso exclusivo de medidas fisiológicas|Ausencia de comités de ética previos|Además, los efectos suelen ser modestos, lo que favorece resultados que luego no se repiten.",
      "¿Qué criterio actual no cumplirían los estudios de Watson y Rayner y de Harlow?|El de riesgo mínimo y bienestar|El de muestras multilaboratorio|El de prerregistro de hipótesis|Aportaron conocimiento, pero sometieron a un bebé y a crías de macaco a daños que hoy no se permitirían."
    ],
    inc: [
      "Sobre la ética con menores|Basta el consentimiento de los padres para seguir|El menor debe aceptar participar, según su edad|Los vídeos de niños exigen especial confidencialidad|Además del consentimiento parental hace falta el asentimiento del niño, que puede retirarse cuando quiera."
    ],
    seq: [],
    cls: [
      "Garantía|Principio ético: asentimiento del menor; riesgo mínimo; confidencialidad|Respuesta de ciencia abierta: prerregistro; estudios multilaboratorio; metaanálisis aumentados por la comunidad"
    ] }
] },
{ n: 6, t: "Diseños evolutivos", cap: 2, pir: "alta", mods: [
  { t: "Edad, cohorte y momento de medida",
    tip: "La edad no es una causa: es el tiempo durante el que actúan la maduración y la experiencia. Al comparar edades se mezclan la cohorte, la generación de nacimiento, y el momento de medida, la fecha de recogida. Los tres están ligados de forma exacta: si se conocen dos, el tercero queda fijado. Por eso el transversal confunde edad y cohorte, el longitudinal edad y momento, y el desfase temporal cohorte y momento.",
    v: [
      "Edad=Tiempo transcurrido desde el nacimiento",
      "Cohorte=Personas nacidas en un mismo periodo que comparten experiencias históricas",
      "Momento de medida=Fecha en la que se recogen los datos",
      "Efecto de cohorte=Diferencia debida a la generación de nacimiento y sus experiencias históricas",
      "Efecto de momento=Influencia de las circunstancias del año en que se recogen los datos",
      "Efecto de edad=Diferencia atribuible al tiempo de maduración y experiencia acumulado",
      "Desfase temporal=Misma edad evaluada en distintos años, que confunde generación y fecha",
      "Schaie (1965)=Formuló la distinción de forma sistemática al estudiar la inteligencia adulta"
    ],
    g: [
      "Un niño nacido en 2012 y evaluado en 2024 tiene, necesariamente, ___ años.|12|10|14",
      "En la matriz edad-cohorte, una columna corresponde a un estudio ___.|transversal|longitudinal|de desfase",
      "Un estudio sobre ansiedad hecho durante un confinamiento mide, en parte, un efecto de ___.|momento|cohorte|edad",
      "Que los nacidos en 2018 vivieran la pandemia en plena escuela infantil puede producir un efecto de ___.|cohorte|momento|práctica",
      "En la diagonal de la matriz, el diseño de desfase temporal mantiene constante la ___.|edad|cohorte|fecha"
    ],
    tf: [
      "Edad, cohorte y momento de medida pueden variar de forma independiente en un mismo diseño.|F|Están ligados de forma exacta: si se conocen dos, el tercero queda fijado.",
      "La edad es, por sí misma, la causa del cambio evolutivo.|F|La edad no es una causa: es el tiempo durante el que han actuado la maduración y la experiencia.",
      "El diseño de desfase temporal responde a preguntas como si los adolescentes de hoy duermen menos que los de hace una década.|V",
      "La distinción entre edad y cohorte tiene especial peso en la adultez y la vejez.|V"
    ],
    q: [
      "En un estudio, los niños de 6 años leen peor que los de 10, y los mayores aprendieron con otro método en infantil. ¿Qué explicación alternativa a la edad se plantea?|Un efecto de cohorte|Un efecto de momento|Un efecto de práctica|Los mayores no solo tienen más edad: pertenecen a otra generación, con otra experiencia escolar.",
      "Un equipo evalúa a adolescentes de 16 años en 2024, 2028, 2032 y 2036. ¿Qué factores quedan confundidos?|Cohorte y momento de medida|Edad y cohorte|Edad y momento de medida|Es un diseño de desfase temporal: la edad se mantiene y varían a la vez la generación y el año de medida.",
      "¿Qué diseño recorre una fila de la matriz edad-cohorte?|El longitudinal|El transversal|El de desfase temporal|Una fila sigue a una misma cohorte en distintos momentos, por lo que confunde la edad con el momento de medida.",
      "¿Por qué no basta con observar la edad para explicar un cambio?|Porque se mezcla con cohorte o momento|Porque la edad no puede medirse con precisión|Porque el cambio no depende de la experiencia|Al comparar personas de distinta edad intervienen otros dos factores que se mezclan con ella."
    ],
    inc: [
      "Sobre edad, cohorte y momento|El transversal confunde edad con momento de medida|El longitudinal confunde edad con momento de medida|El desfase temporal confunde cohorte y momento|Es la trampa típica: el transversal se hace en un solo momento y confunde la edad con la cohorte."
    ],
    seq: [],
    cls: [
      "Diseño y factores confundidos|Transversal: columna de la matriz; momento constante; edad con cohorte|Longitudinal: fila de la matriz; cohorte constante; edad con momento|Desfase temporal: diagonal de la matriz; edad constante; cohorte con momento"
    ] },
  { t: "Diseños transversal y longitudinal",
    tip: "El transversal evalúa a la vez a grupos de distinta edad: es rápido y barato y no pierde participantes, pero confunde edad y cohorte y describe medias, no cambios individuales. El longitudinal sigue a las mismas personas y es el único diseño simple que estudia el cambio intraindividual y la estabilidad. Sus amenazas son la mortalidad experimental no aleatoria, los efectos de práctica, el coste y una generalización limitada.",
    v: [
      "Diseño transversal=Grupos de distinta edad evaluados en un mismo momento",
      "Diseño longitudinal=Mismas personas evaluadas varias veces a lo largo del tiempo",
      "Cambio intraindividual=Forma en que cambia cada persona con el paso del tiempo",
      "Mortalidad experimental=Pérdida no aleatoria de participantes a lo largo del estudio",
      "Efectos de práctica=Mejora por repetir las pruebas sin que haya desarrollo real",
      "Estudio de Dunedin=Cohorte neozelandesa de 1.037 nacidos en 1972–1973 con un 96 % de retención",
      "NYLS=Estudio de Thomas y Chess, iniciado en 1956, sobre el temperamento",
      "NICHD SECCYD=Seguimiento de 1.364 niños desde 1991 sobre el cuidado infantil no materno"
    ],
    g: [
      "Dunedin retenía al ___ de la muestra a los 32 años.|96 %|76 %|86 %",
      "El NYLS lo iniciaron Thomas y Chess en ___.|1956|1972|1991",
      "Los datos de Dunedin relacionaron el ___ infantil con la salud, las finanzas y la conducta adulta.|autocontrol|temperamento|apego",
      "En un longitudinal, las familias que abandonan suelen ser las que tienen ___ dificultades.|más|menos|escasas",
      "El transversal no sufre ___ de participantes, a diferencia del longitudinal.|pérdida|selección|asignación"
    ],
    tf: [
      "El diseño longitudinal confunde la edad con la cohorte.|F|Sigue a una sola cohorte, que queda constante: confunde la edad con el momento de medida. Es una trampa típica.",
      "Si comparamos niños de 6 y de 10 años en el mismo curso, vemos cómo cambia cada niño al crecer.|F|El transversal solo muestra diferencias entre grupos medidos a la vez, no el cambio dentro de cada persona.",
      "Por el abandono no aleatorio, la muestra final de un longitudinal puede ser más favorecida que la inicial.|V",
      "El longitudinal permite saber si el niño tímido llega a ser un adolescente tímido.|V"
    ],
    q: [
      "Para saber si los niños que leen pronto son mejores lectores a los 12 años, se mide a los mismos niños a los 5 y a los 12. Abandona el 30 % de las familias, sobre todo las de menos recursos. ¿Qué ocurre?|El resultado reflejará a los más favorecidos|Aparecerá un efecto de cohorte en los datos|El diseño pasará a ser transversal|La mortalidad experimental no es aleatoria: la muestra final queda sesgada hacia las familias con más recursos.",
      "¿Qué amenaza es propia del longitudinal y no del transversal?|Los efectos de práctica|La confusión edad-cohorte|La falta de comparación entre edades|Solo en el longitudinal se repiten las pruebas a las mismas personas, lo que mejora la puntuación sin desarrollo real.",
      "¿Qué no puede decir un estudio transversal?|Si cada niño mejora gradualmente o a saltos|Si hay diferencias medias entre los grupos de edad|Cómo rinden los grupos en un mismo momento|Describe medias de grupo: no informa del cambio individual ni de si los que destacan a los 4 años siguen destacando.",
      "¿Qué límite de generalización tiene un longitudinal clásico?|Describe a una única cohorte|Mezcla la edad y la cohorte|Exige muy pocos participantes|Sus resultados describen a una generación que creció en unas circunstancias concretas."
    ],
    inc: [
      "Sobre el diseño longitudinal|Permite generalizar sin problema a otras generaciones|Permite estudiar la estabilidad de los rasgos|Confunde la edad con el momento de medida|Describe a una cohorte concreta, por lo que generalizar a otras generaciones es un error típico."
    ],
    seq: [],
    cls: [
      "Diseño simple|Transversal: rápido y barato; sin abandono; confunde edad y cohorte|Longitudinal: cambio intraindividual; efectos de práctica; mortalidad experimental"
    ] },
  { t: "Diseños secuenciales, longitudinal acelerado y microgenético",
    tip: "Schaie (1965) propuso combinar los diseños simples en diseños secuenciales, que permiten comprobar si hay efecto de cohorte, aunque no eliminan la dependencia lineal entre edad, cohorte y momento. El longitudinal acelerado sigue poco tiempo a cohortes de edades escalonadas cuyos tramos se solapan. El microgenético (Siegler y Crowley, 1991) observa de forma densa a los mismos niños durante un cambio rápido, a costa de su validez ecológica.",
    v: [
      "Secuencia de cohortes=Varias cohortes seguidas longitudinalmente a lo largo de las mismas edades",
      "Transversal-secuencial=Repetir un mismo estudio transversal en varios momentos con muestras nuevas",
      "Longitudinal-secuencial=Seguir a la vez varias cohortes de distintas edades en varios momentos",
      "Longitudinal acelerado=Varias cohortes de edades escalonadas seguidas poco tiempo con tramos solapados",
      "Edades de solapamiento=Edades compartidas por dos cohortes que sirven para unir los tramos",
      "Método microgenético=Observación densa de los mismos niños durante un periodo de cambio rápido",
      "Siegler y Crowley (1991)=Autores que definieron el método de observación densa del cambio",
      "Olas superpuestas=Modelo de Siegler (1996) en el que coexisten estrategias y gana la más eficaz"
    ],
    g: [
      "En el esquema del longitudinal acelerado, tres cohortes que empiezan con 6, 10 y 14 años se siguen durante ___ años.|4|12|6",
      "Con ese diseño se cubre en 4 años el tramo de los 6 a los ___ años.|18|14|22",
      "La gran ventaja de los diseños secuenciales es comprobar si existe un efecto de ___.|cohorte|práctica|edad",
      "El diseño transversal-secuencial evita los efectos de ___.|práctica|cohorte|momento",
      "El límite del método microgenético es su validez ___.|ecológica|interna|predictiva"
    ],
    tf: [
      "Los diseños secuenciales eliminan la dependencia lineal entre edad, cohorte y momento de medida.|F|No la eliminan: para separar los tres efectos hay que suponer que alguno es despreciable o añadir información.",
      "En un longitudinal acelerado, nadie es seguido durante todo el periodo estudiado.|V",
      "El método microgenético consiste en observar una vez al año a muchos niños distintos.|F|Observa muchas veces y con mucho detalle a los mismos niños durante el periodo en que se espera el cambio.",
      "En el método microgenético, la densidad de observaciones es alta en relación con la rapidez del cambio.|V"
    ],
    q: [
      "Durante unas semanas de sesiones frecuentes se registra cada intento de un niño de cinco años que aprende a sumar, y se ve que usa varias estrategias a la vez. ¿Qué modelo apoya este hallazgo?|Las olas superpuestas de Siegler|Los estadios generales de Piaget|La secuencia de cohortes de Schaie|El niño no abandona de golpe el conteo con los dedos: las estrategias coexisten y la más eficaz gana terreno.",
      "En un longitudinal acelerado, la cohorte que termina a los 10 años y la que empieza a esa edad puntúan muy distinto. ¿Qué sugiere?|Un posible efecto de cohorte|Un efecto de práctica intensa|Un fallo de la asignación aleatoria|Si las cohortes no coinciden en el solapamiento, no es razonable unir los tramos en una sola curva.",
      "Se sigue a niños nacidos en 2010 y en 2014, medidos ambos grupos a los 6, 8 y 10 años. ¿Qué diseño es?|Secuencia de cohortes|Transversal-secuencial|Desfase temporal simple|Varias cohortes seguidas longitudinalmente a lo largo de las mismas edades permiten compararlas a igual edad.",
      "¿Qué riesgo tiene el método microgenético?|Que la práctica altere el ritmo del cambio|Que confunda la edad con la cohorte de nacimiento|Que tarde décadas enteras en dar resultados|La práctica intensa puede acelerar o alterar el cambio, y el ritmo del laboratorio quizá no sea el natural."
    ],
    inc: [
      "Sobre el longitudinal acelerado|Sigue a una sola cohorte durante muchos años|Sus cohortes tienen edades escalonadas|Las edades de solapamiento sirven de control|Sigue a varias cohortes de edades escalonadas durante poco tiempo, con tramos que se solapan."
    ],
    seq: [],
    cls: [
      "Variante de diseño secuencial|Secuencia de cohortes: mismas edades; cohortes comparadas a igual edad|Transversal-secuencial: muestras nuevas; sin efectos de práctica|Longitudinal acelerado: edades escalonadas; tramos solapados; seguimiento breve"
    ] },
  { t: "Análisis modernos y errores frecuentes",
    tip: "El modelo de paneles con efectos cruzados retardados (CLPM) comprueba si A predice B en el momento siguiente, pero mezcla las diferencias estables entre personas con los cambios dentro de cada una. El RI-CLPM (Hamaker et al., 2015) separa ambas cosas. Aun así, que A preceda a B no prueba que lo cause, y una media de grupo puede ocultar trayectorias individuales muy distintas.",
    v: [
      "CLPM=Modelo de paneles con efectos cruzados retardados",
      "RI-CLPM=Variante con interceptos aleatorios que separa lo estable de las fluctuaciones",
      "Hamaker et al. (2015)=Propusieron separar los efectos dentro de la persona de los efectos entre personas",
      "Diferencias entre personas=Algunos niños tienen de forma estable más de A y más de B que otros",
      "Cambio dentro de la persona=Variación de un niño respecto a lo que es habitual en él",
      "Madigan et al. (2019)=Siguieron a 2.441 niños y vieron que la pantalla predecía peor desarrollo",
      "Predicción=Que una variable anteceda a otra en el tiempo, sin probar que la cause",
      "Trayectoria individual=Curso del cambio de cada niño, que una media de grupo puede ocultar"
    ],
    g: [
      "Madigan et al. (2019) midieron a los niños a los 24, 36 y ___ meses.|60|48|72",
      "En Madigan et al. (2019), los efectos eran ___ y el estudio era observacional.|pequeños|grandes|nulos",
      "El RI-CLPM separa la parte ___ de cada persona de sus fluctuaciones.|estable|variable|residual",
      "Unir los tramos de un longitudinal acelerado sin comprobar los ___ es un error típico.|solapamientos|abandonos|supuestos",
      "Atribuir a la «generación» lo que puede deberse al año de medida es un error típico del diseño ___.|de desfase temporal|de secuencia de cohortes|transversal"
    ],
    tf: [
      "El estudio de Madigan et al. (2019) demuestra que las pantallas causan peor desarrollo.|F|Era observacional y los efectos eran pequeños: descarta algunas explicaciones alternativas, pero no prueba causalidad.",
      "El CLPM clásico puede confundir diferencias estables entre familias con efectos de una variable sobre otra.|V",
      "Una curva media que sube de forma suave demuestra que cada niño cambia de forma gradual.|F|Puede estar formada por niños que cambian a saltos en momentos diferentes.",
      "Que A preceda a B en el tiempo no basta para afirmar que A produce B.|V"
    ],
    q: [
      "Un estudio de panel halla que los niños con más lectura compartida a los 3 años tienen más vocabulario a los 5. Una revisora objeta que las familias difieren de forma estable en ambas cosas. ¿Qué análisis responde mejor?|El RI-CLPM|El CLPM clásico|Un transversal|Separa las diferencias estables entre familias de los cambios dentro de cada niño, que son los que interesan.",
      "¿Qué pregunta interesa cuando se habla de la influencia de una variable sobre otra?|Si un niño con más A de lo habitual tiene luego más B|Si los niños con más A tienen de forma estable más B|Si A y B se miden en el mismo momento|La influencia se refiere al cambio dentro de la persona, no a las diferencias estables entre personas.",
      "¿Qué error de interpretación es típico del diseño longitudinal?|Ignorar quién abandonó el estudio|Hablar del cambio de cada niño sin seguirlo|Unir tramos sin comprobar solapamientos|El abandono no es aleatorio: si se ignora quién se fue, se sacan conclusiones de una muestra sesgada.",
      "¿Qué riesgo es propio de un correlacional longitudinal?|Las terceras variables estables|La confusión entre edad y cohorte|La práctica intensa y artificial|Pueden hacer que se confundan las diferencias entre personas con efectos dentro de la persona."
    ],
    inc: [
      "Sobre el RI-CLPM|Convierte un estudio observacional en experimental|Separa lo estable de las fluctuaciones de cada persona|Lo propusieron Hamaker et al. en 2015|Distingue lo estable de cada persona de sus fluctuaciones, pero no convierte el estudio en experimental."
    ],
    seq: [],
    cls: [
      "Información en un estudio de panel|Entre personas: diferencias estables; entorno familiar; mezclada en el CLPM|Dentro de la persona: fluctuaciones respecto a lo habitual; pregunta por la influencia; aislada en el RI-CLPM"
    ] }
] },
{ n: 7, t: "Desarrollo prenatal y nacimiento", cap: 3, pir: "media", mods: [
  { t: "Periodos del desarrollo prenatal",
    tip: "El desarrollo prenatal tiene tres periodos desiguales, contados aquí desde la fecundación. El germinal (0–2 semanas) acaba con la implantación. El embrionario (3–8) es el de la organogénesis y la máxima vulnerabilidad estructural. El fetal (de la semana 9 al nacimiento) es de crecimiento y maduración, con riesgos sobre todo funcionales. La viabilidad se sitúa hacia las 22–24 semanas, contadas desde la última menstruación.",
    v: [
      "Periodo germinal=De la fecundación a la implantación del blastocisto (0–2 semanas)",
      "Periodo embrionario=Semanas 3–8: organogénesis y máxima vulnerabilidad estructural",
      "Periodo fetal=De la semana 9 al nacimiento: crecimiento y maduración funcional",
      "Blastocisto=Esfera hueca cuya masa celular interna dará lugar al embrión",
      "Organogénesis=Formación de las estructuras básicas de casi todos los órganos",
      "Tubo neural=Estructura que origina el encéfalo y la médula espinal",
      "Edad de viabilidad=Momento desde el que el bebé puede sobrevivir fuera del útero con cuidados intensivos",
      "Ectodermo=Capa embrionaria que dará lugar al sistema nervioso y a la piel"
    ],
    g: [
      "Si el tubo neural no se cierra bien aparecen defectos como la ___.|espina bífida|microcefalia|anoxia",
      "Para prevenir defectos del tubo neural se recomienda tomar ___ antes de la concepción.|ácido fólico|hierro|vitamina C",
      "La capa externa del blastocisto contribuirá sobre todo a la ___.|placenta|médula|piel",
      "El ___ dará lugar a los músculos, los huesos y el sistema circulatorio.|mesodermo|endodermo|ectodermo",
      "En obstetricia las semanas se cuentan desde la última menstruación, lo que añade unas ___ semanas.|dos|cuatro|seis"
    ],
    tf: [
      "El periodo fetal es el de mayor riesgo de malformaciones por ser el más largo.|F|Es el embrionario: en las semanas 3–8 se forma casi todo. En el fetal los daños suelen ser funcionales.",
      "El periodo embrionario coincide con semanas en que muchas mujeres aún no saben que están embarazadas.|V",
      "El endodermo da lugar al sistema nervioso y a la piel.|F|Eso corresponde al ectodermo. El endodermo origina el aparato digestivo, los pulmones y otras vísceras.",
      "Muchos cigotos no llegan a implantarse y el embarazo termina sin que nadie lo note.|V"
    ],
    q: [
      "Una mujer que busca un embarazo pregunta por qué debe cuidar su salud antes incluso de saber si está embarazada. ¿Qué lo justifica mejor?|El periodo embrionario empieza muy pronto|El periodo fetal es el más vulnerable|La implantación ocurre hacia el tercer mes|La máxima vulnerabilidad estructural, semanas 3–8, coincide con semanas en que el embarazo puede no conocerse.",
      "¿Qué tipo de daño predomina cuando un agente actúa en el periodo fetal?|Funcional y del crecimiento|Malformaciones graves|Fallo de la implantación|Los órganos ya existen: el daño afecta a su crecimiento o funcionamiento más que a su estructura básica.",
      "¿Qué estructura sigue siendo sensible durante todo el embarazo?|El sistema nervioso central|El corazón|Los brazos y las piernas|Cada órgano tiene su ventana. El corazón termina pronto, y el sistema nervioso central es sensible todo el embarazo.",
      "¿Qué hecho marca el final del periodo germinal?|La implantación en el útero|La formación del tubo neural|El primer latido del corazón|Tras la fecundación y las divisiones del cigoto, el blastocisto se implanta en la pared del útero."
    ],
    inc: [
      "Sobre los periodos prenatales|En el periodo germinal se forma el tubo neural|En el periodo embrionario empieza a latir el corazón|En el periodo fetal se diferencian los genitales externos|El tubo neural se forma en el periodo embrionario. El germinal abarca las divisiones del cigoto y la implantación."
    ],
    seq: [
      "Del cigoto al feto|Fecundación>Divisiones del cigoto>Blastocisto>Implantación>Organogénesis>Crecimiento y maduración fetal"
    ],
    cls: [
      "Capa embrionaria|Ectodermo: sistema nervioso; piel|Mesodermo: músculos; huesos; sistema circulatorio|Endodermo: aparato digestivo; pulmones"
    ] },
  { t: "Teratógenos y periodos sensibles",
    tip: "Un teratógeno es un agente ambiental que, durante la gestación, puede causar malformaciones o alterar el desarrollo: drogas, infecciones, contaminantes y radiaciones. Su efecto depende de la dosis, el momento, la vulnerabilidad genética y las interacciones, y puede aparecer años después. La talidomida mostró que existen periodos sensibles por órgano. No se conoce ninguna dosis segura de alcohol en el embarazo.",
    v: [
      "Teratógeno=Agente ambiental que en la gestación puede causar malformaciones o alterar el desarrollo",
      "Periodo sensible=Ventana en la que un órgano o función es especialmente vulnerable o receptivo",
      "Principio de dosis=Cuanto mayor y más prolongada es la exposición, más probable y grave es el daño",
      "Efectos tardíos=Daños que no se ven al nacer y aparecen años después",
      "Talidomida=Sedante que causó malformaciones de las extremidades según los días de exposición",
      "TEAF=Trastornos causados por la exposición prenatal al alcohol",
      "Síndrome alcohólico fetal=Rasgos faciales característicos, menor crecimiento y daño del sistema nervioso",
      "Virus del Zika=Infección materna leve que pudo causar microcefalia en la epidemia de 2015–2016"
    ],
    g: [
      "Según Lange et al. (2017), el TEAF afecta a 7,7 de cada 1.000 niños en el mundo y a ___ en la Región Europea de la OMS.|19,8|11,7|4,9",
      "Aproximadamente 1 de cada ___ embarazadas que beben alcohol tiene un hijo con TEAF.|13|30|100",
      "Fumar durante el embarazo se asocia con bajo peso al nacer y ___.|prematuridad|microcefalia|espina bífida",
      "Que el alcohol y la mala nutrición juntos multipliquen sus efectos ilustra el principio de ___.|interacción|dosis|momento",
      "Las formas de TEAF sin rasgos faciales son las más ___.|frecuentes|graves|raras"
    ],
    tf: [
      "Unas copas de vez en cuando durante el embarazo no hacen daño.|F|No se conoce ninguna dosis segura de alcohol, y también importa el consumo de las primeras semanas.",
      "La talidomida demostró que la placenta no es una barrera que proteja de todo.|V",
      "Si dos hermanas fuman lo mismo en el embarazo, sus bebés tendrán necesariamente el mismo peso al nacer.|F|Dosis, momento, genes e interacciones explican que la misma exposición no produzca siempre el mismo efecto.",
      "La lista de teratógenos no está cerrada, como mostró la epidemia de Zika.|V"
    ],
    q: [
      "Un niño expuesto al alcohol antes de nacer no tiene rasgos faciales característicos, pero en primaria muestra problemas de atención y de control de la conducta. ¿Qué es compatible con este cuadro?|Una forma de TEAF sin rasgos faciales|Un síndrome alcohólico fetal completo|Una anoxia leve sin secuelas|Las formas sin rasgos faciales son las más frecuentes y pasan más desapercibidas: atención, memoria, aprendizaje y conducta.",
      "El caso de la talidomida ilustra sobre todo que el efecto de un teratógeno depende…|del momento de la exposición|de la vulnerabilidad genética|de la interacción con la dieta|El tipo de malformación dependía de los días concretos de exposición, y fuera de esa ventana no aparecía ese daño.",
      "¿Por qué llama la atención la prevalencia estimada de TEAF en Europa?|Duplica con creces la media mundial|Es la más baja de todas las regiones|Coincide con la media de todo el mundo|Es de 19,8 por 1.000, frente a 7,7 por 1.000 en el mundo (Lange et al., 2017).",
      "¿Qué principio describe que algunos daños prenatales aparezcan como problemas de aprendizaje años después?|Efectos tardíos|Periodo sensible|Principio de dosis|No todos los daños son visibles al nacer: algunos se manifiestan años más tarde."
    ],
    inc: [
      "Sobre los teratógenos|Su acción es de todo o nada|El genotipo modula la resistencia ante una exposición|El mismo agente actúa distinto según la semana|La acción no es de todo o nada: depende de la dosis, el momento, la vulnerabilidad genética y las interacciones."
    ],
    seq: [],
    cls: [
      "Grupo de teratógenos|Drogas: alcohol; tabaco; talidomida|Infecciones maternas: rubeola; virus del Zika|Contaminación: contaminantes ambientales; radiaciones"
    ] },
  { t: "El parto y sus complicaciones: anoxia, prematuridad y bajo peso",
    tip: "El parto pasa por dilatación, expulsión y alumbramiento. La anoxia es la falta de oxígeno y la hipoxia su disminución, y si se prolongan pueden causar daño cerebral. Es prematuro quien nace antes de las 37 semanas, el bajo peso es menos de 2.500 g, y es pequeño para la edad gestacional quien pesa menos de lo esperado para sus semanas, aunque nazca a término. Según Sameroff, el pronóstico depende también del entorno.",
    v: [
      "Anoxia=Falta de oxígeno durante el parto, capaz de producir daño cerebral si se prolonga",
      "Hipoxia=Disminución del aporte de oxígeno",
      "Prematuro=Nacido antes de las 37 semanas de gestación",
      "Bajo peso al nacer=Menos de 2.500 g",
      "Muy bajo peso=Menos de 1.500 g",
      "Pequeño para la edad gestacional=Pesa menos de lo esperado para las semanas que ha durado la gestación",
      "Método canguro=Contacto piel con piel con los padres cuando el estado del bebé lo permite",
      "Alumbramiento=Fase final del parto, en la que se expulsan la placenta y las membranas"
    ],
    g: [
      "La fase más larga del parto es la ___.|dilatación|expulsión|alumbramiento",
      "Se habla de extremadamente bajo peso por debajo de ___.|1.000 g|1.500 g|2.500 g",
      "Una anoxia prolongada puede causar daño cerebral, por ejemplo ___.|parálisis cerebral|conmoción cerebral|meningitis vírica",
      "Según el modelo ___ de Sameroff, el desarrollo resulta del intercambio continuo entre el niño y su entorno.|transaccional|ecológico|dinámico",
      "Un bebé pequeño para la edad gestacional nacido a término puede indicar un mal funcionamiento de la ___.|placenta|tiroides|médula"
    ],
    tf: [
      "Un bebé pequeño para la edad gestacional es, por definición, prematuro.|F|Puede haber nacido a término: ha crecido poco en el útero, lo que no equivale a nacer antes.",
      "Un bebé prematuro puede tener un peso adecuado para su edad gestacional.|V",
      "Las formas leves y breves de anoxia suelen dejar secuelas duraderas.|F|Las formas leves y breves no suelen dejar secuelas. El daño cerebral aparece con la anoxia prolongada.",
      "Los efectos de una complicación perinatal son mayores en contextos de pobreza o de estrés familiar.|V"
    ],
    q: [
      "Un bebé nace a las 39 semanas con un peso muy inferior al esperado para esa edad. ¿Cómo se clasifica?|Pequeño para la edad gestacional|Prematuro con muy bajo peso al nacer|Prematuro de peso adecuado a su edad|Ha nacido a término, así que no es prematuro, pero ha crecido menos de lo esperado en el útero.",
      "Dos bebés nacen igual de prematuros. Uno tiene padres con apoyo y recursos, y el otro, padres agotados y sin apoyo. Según Sameroff, ¿qué cabe esperar?|Pronósticos distintos por la interacción|Pronósticos idénticos por igual prematuridad|Un pronóstico fijado solo por el peso|El desarrollo resulta del intercambio continuo entre el niño y su entorno, y esa interacción se acumula con los años.",
      "¿Por qué se favorece hoy el contacto piel con piel en las unidades neonatales?|Porque la incubadora también aísla|Porque sustituye a la incubadora|Porque eleva la puntuación Apgar|La incubadora resuelve problemas físicos, pero aísla. Por eso se busca el contacto con los padres y menos luz y ruido.",
      "¿Qué riesgo a largo plazo se asocia a una menor edad gestacional y un menor peso?|Dificultades de atención y aprendizaje|Ausencia de reflejos de supervivencia|Más sueño REM en la vida adulta|A corto plazo hay problemas respiratorios, infecciones y de temperatura, y a largo plazo más dificultades de atención y aprendizaje."
    ],
    inc: [
      "Sobre la anoxia y la hipoxia|Solo pueden deberse a la inmadurez de los pulmones|Pueden deberse a un cordón comprimido o enrollado|El encéfalo es muy sensible a la falta de oxígeno|También pueden deberse al cordón, a un desprendimiento prematuro de la placenta o a un parto muy prolongado."
    ],
    seq: [
      "Fases del parto|Dilatación>Expulsión>Alumbramiento"
    ],
    cls: [
      "Clasificación del recién nacido|Prematuro: antes de las 37 semanas; puede tener peso adecuado|Pequeño para la edad gestacional: puede nacer a término; poco crecimiento en el útero; tabaco o mal funcionamiento de la placenta"
    ] },
  { t: "Evaluación del recién nacido (Apgar, Brazelton) y mito vacunas-autismo",
    tip: "La escala Apgar (1953) valora al minuto 1 y a los 5 minutos cinco signos de 0 a 2: frecuencia cardiaca, esfuerzo respiratorio, tono, irritabilidad refleja y color. De 7 a 10 es normal, y no predice el desarrollo psicológico. La NBAS de Brazelton (1973) evalúa reflejos, estados, habituación y orientación y describe el estilo de cada bebé. El estudio de Wakefield fue retractado, y la triple vírica no aumenta el riesgo de autismo.",
    v: [
      "Escala Apgar=Valoración de cinco signos vitales del recién nacido al minuto 1 y a los 5 minutos",
      "Virginia Apgar=Anestesióloga que propuso en 1953 una valoración rápida del recién nacido",
      "NBAS=Escala de Evaluación del Comportamiento Neonatal de Brazelton (1973)",
      "Irritabilidad refleja=Signo que va de la falta de respuesta a la mueca y al llanto, la tos o el estornudo",
      "Prueba del talón=Cribado neonatal para detectar enfermedades metabólicas",
      "Wakefield (1998)=Estudio con muy pocos niños, retractado en 2010, que ligaba triple vírica y autismo",
      "Hviid et al. (2019)=Cohorte danesa de 657.461 niños sin mayor riesgo de autismo tras la triple vírica",
      "Coincidencia temporal=Las primeras señales de autismo se notan cuando se aplican varias vacunas"
    ],
    g: [
      "La escala Apgar se aplica al minuto 1 y a los ___ minutos.|5|10|3",
      "Una puntuación Apgar aproximada de 7 a ___ se considera normal.|10|9|8",
      "Un cuerpo rosado con extremidades azuladas puntúa ___ en el signo de color de la escala Apgar.|1|0|2",
      "La NBAS también se ha usado como ___: hacerla delante de los padres les ayuda a conocer a su hijo.|intervención|cribado|diagnóstico",
      "El artículo de Wakefield fue retractado en ___.|2010|2019|1998"
    ],
    tf: [
      "Una puntuación Apgar alta predice un buen desarrollo psicológico futuro.|F|La Apgar no predice el desarrollo psicológico: sirve para tomar decisiones médicas en los primeros minutos.",
      "La escala de Brazelton evalúa la capacidad del bebé para habituarse a estímulos repetidos.|V",
      "Según Hviid et al. (2019), la triple vírica aumentaba el riesgo de autismo en niños con hermanos autistas.|F|No halló mayor riesgo, ni siquiera en subgrupos con hermanos autistas u otros factores de riesgo.",
      "El autismo tiene un fuerte componente genético y un origen en gran parte prenatal.|V"
    ],
    q: [
      "Al minuto de nacer, un bebé tiene 130 latidos por minuto, llanto fuerte, cierta flexión de las extremidades, una mueca al estimularlo y el cuerpo rosado con las extremidades azuladas. ¿Qué Apgar obtiene?|7|8|6|Suma 2 por el pulso, 2 por la respiración y 1 por el tono, la mueca y el color: un 7, dentro del rango normal.",
      "¿Qué signo NO forma parte de la escala Apgar?|La capacidad de habituación|El esfuerzo respiratorio|La irritabilidad refleja|La habituación se evalúa en la escala de Brazelton. La Apgar valora cinco signos físicos.",
      "¿Qué distingue a la escala de Brazelton de la Apgar?|Describe el estilo individual del bebé|Se aplica en el primer minuto de vida|Valora el color y la frecuencia cardiaca|La NBAS tiene interés psicológico: no se limita a detectar problemas, describe cómo es cada bebé.",
      "¿Por qué persiste la creencia de que las vacunas causan autismo?|Por coincidir en el tiempo con las primeras señales|Porque Hviid et al. hallaron un riesgo pequeño|Porque el estudio de Wakefield nunca se retractó|Las primeras señales suelen notarse en el segundo año, cuando se aplican varias vacunas. Coincidir no es causar."
    ],
    inc: [
      "Sobre la evaluación del recién nacido|La Apgar puntúa cada signo de 0 a 3|La Apgar se aplica al minuto 1 y a los 5|El cribado de la audición permite intervenir pronto|Cada uno de los cinco signos se puntúa de 0 a 2, con un total máximo de 10."
    ],
    seq: [],
    cls: [
      "Escala neonatal|Apgar: cinco signos de 0 a 2; minuto 1 y minuto 5; decisiones médicas inmediatas|Brazelton: habituación; orientación hacia caras y voces; estilo individual del bebé"
    ] }
] },
{ n: 8, t: "El recién nacido: reflejos, estados y sentidos", cap: 3, pir: "media", mods: [
  { t: "Reflejos del recién nacido",
    tip: "Los reflejos de supervivencia, como búsqueda, succión y deglución, tienen un valor adaptativo claro y se mantienen o se transforman. Los primitivos, como el Moro, la prensión palmar o el Babinski, desaparecen en los primeros meses, y el Babinski es el que más dura. En el Moro el bebé abre los brazos y luego los recoge, mientras que en el sobresalto los flexiona, y este dura toda la vida. Su ausencia, asimetría o persistencia puede indicar un problema neurológico.",
    v: [
      "Reflejo=Respuesta automática e involuntaria ante un estímulo concreto",
      "Reflejo de búsqueda=Giro de la cabeza y apertura de la boca al rozar la mejilla del bebé",
      "Reflejo de Moro=Extensión y apertura de los brazos ante una pérdida brusca de apoyo",
      "Reflejo de Babinski=Apertura de los dedos del pie en abanico al rozar la planta",
      "Prensión palmar=Cierre fuerte de la mano ante la presión en la palma",
      "Marcha automática=Movimientos alternos de las piernas al sostener al bebé erguido sobre una superficie",
      "Tónico-cervical asimétrico=Extiende el brazo del lado de la cara al girarle la cabeza boca arriba",
      "Reflejo de sobresalto=Flexión de los brazos y el cuerpo ante un ruido brusco, que se conserva de por vida"
    ],
    g: [
      "El reflejo de Moro desaparece hacia los ___ meses.|4–6|1–2|8–12",
      "La marcha automática desaparece hacia los ___.|2 meses|6 meses|12 meses",
      "El reflejo de Babinski desaparece entre los 8 meses y los ___.|1–2 años|4–6 meses|3–4 años",
      "Según Thelen, la marcha automática deja de verse porque las piernas ganan ___ más deprisa que fuerza.|peso|longitud|tono",
      "La explicación clásica es que los reflejos primitivos dependen de estructuras ___.|subcorticales|corticales|periféricas"
    ],
    tf: [
      "El reflejo de Babinski desaparece en las primeras semanas de vida.|F|Es el que más dura: desaparece entre los 8 meses y los 1–2 años.",
      "El reflejo de sobresalto se conserva durante toda la vida.|V",
      "La ausencia de un reflejo es el único signo que justifica una valoración neurológica.|F|También la asimetría y la persistencia mucho más allá de la edad esperada pueden indicar un problema.",
      "La escala de Brazelton incluye la exploración de los reflejos.|V"
    ],
    q: [
      "Una niña de 9 meses todavía extiende un brazo cada vez que se le gira la cabeza estando boca arriba. ¿Qué procede?|Valorarla neurológicamente|Darlo por normal a esa edad|Diagnosticar un trastorno|Persiste el tónico-cervical asimétrico, que desaparece hacia 4–6 meses. No es un diagnóstico, pero sí motivo de valoración.",
      "Ante un ruido brusco, un bebé flexiona los brazos y el cuerpo sin abrirlos. ¿Qué reflejo es?|De sobresalto|De Moro|Tónico-cervical|En el Moro el bebé abre los brazos y luego los recoge. En el sobresalto los flexiona sin abrirlos.",
      "¿Qué reflejo pertenece al grupo de supervivencia?|La deglución|La natación|La prensión palmar|Búsqueda, succión y deglución tienen un valor adaptativo claro. La natación y la prensión palmar son primitivos.",
      "¿Qué propone Thelen sobre la desaparición de la marcha automática?|Que cambia el cuerpo, no el patrón|Que la corteza inhibe el reflejo|Que el reflejo se vuelve voluntario|Las piernas ganan peso más deprisa que fuerza y el movimiento deja de verse, aunque el patrón siga ahí."
    ],
    inc: [
      "Sobre los reflejos primitivos|El reflejo de natación persiste hasta los 2 años|La prensión palmar desaparece hacia 3–4 meses|El Moro desaparece hacia los 4–6 meses|La natación desaparece hacia los 4–6 meses. El reflejo primitivo que más dura es el de Babinski."
    ],
    seq: [
      "Desaparición de reflejos primitivos, de antes a después|Marcha automática>Prensión palmar>Moro>Babinski"
    ],
    cls: [
      "Tipo de reflejo|De supervivencia: búsqueda; succión; deglución|Primitivo: Moro; prensión palmar; Babinski"
    ] },
  { t: "Estados del recién nacido y llanto",
    tip: "Wolff (1966) describió seis estados: sueño regular, sueño irregular o REM, somnolencia, inactividad alerta, actividad alerta y llanto. Cerca de la mitad del sueño neonatal es REM. La inactividad alerta es el estado clave para aprender y para investigar, y un ritmo organizado de estados indica buena regulación neurológica. Wolff distinguió además el llanto básico, el de enfado y el de dolor.",
    v: [
      "Sueño regular=Ojos cerrados, respiración lenta y regular y cuerpo quieto",
      "Sueño REM=Fase irregular con movimientos oculares, en torno a la mitad del descanso neonatal",
      "Somnolencia=Estado de transición al dormirse o despertarse, con los ojos entreabiertos",
      "Inactividad alerta=Ojos abiertos y cuerpo quieto mientras el bebé atiende a su entorno",
      "Actividad alerta=Ojos abiertos con movimientos frecuentes y descoordinados de brazos y piernas",
      "Llanto básico=Patrón rítmico de llanto, pausa y toma de aire, típico del hambre",
      "Llanto de enfado=Parecido al básico, pero más intenso por el aire forzado en las cuerdas vocales",
      "Llanto de dolor=Grito largo repentino, pausa conteniendo la respiración y nuevo llanto"
    ],
    g: [
      "Wolff describió en ___ los seis estados del recién nacido.|1966|1973|1980",
      "Aproximadamente la ___ del sueño neonatal es REM.|mitad|cuarta parte|décima parte",
      "Con la edad, el sueño se concentra en la ___ y disminuye el REM.|noche|tarde|mañana",
      "Para calmar al bebé suele funcionar lo que imita el entorno ___ o le da contacto.|prenatal|escolar|familiar",
      "Lo que más ayuda a interpretar el llanto es el ___.|contexto|tono|volumen"
    ],
    tf: [
      "Los paradigmas de preferencia visual se aplican durante la actividad alerta.|F|Se aplican en la inactividad alerta, con los ojos abiertos y el cuerpo quieto.",
      "La inactividad alerta ocupa al principio poco tiempo del día, pero aumenta con rapidez.|V",
      "Los adultos con experiencia distinguen de forma infalible los tipos de llanto.|F|Los distinguen en parte, no de forma infalible. Lo que más ayuda es el contexto.",
      "Una alternancia organizada y predecible de estados se interpreta como señal de buena regulación neurológica.|V"
    ],
    q: [
      "Un bebé empieza a llorar de repente con un grito largo, después contiene la respiración un momento y vuelve a llorar. ¿Qué tipo de llanto es?|De dolor|De enfado|Básico|El llanto de dolor empieza de golpe con un grito largo, seguido de una pausa en la que el bebé no respira.",
      "Un recién nacido tiene los ojos cerrados, respira de forma irregular y hace muecas y pequeñas sacudidas. ¿En qué estado está?|Sueño irregular|Sueño regular|Somnolencia|Es el sueño REM, con movimientos oculares, respiración irregular, sacudidas y muecas.",
      "¿Qué interpretación habitual se da a la gran proporción de sueño REM neonatal?|Que estimula al encéfalo|Que indica una inmadurez dañina|Que favorece la habituación|Esa actividad cerebral intensa aporta estimulación cuando el bebé pasa poco tiempo despierto.",
      "¿Por qué el apoyo a las familias de bebés que lloran mucho se considera prevención?|El agotamiento dificulta responder con calma|Reduce la proporción de sueño REM del bebé|Acelera la maduración del sistema nervioso|Un llanto frecuente sin causa aparente supone un estrés importante, y el cansancio complica responder con calma."
    ],
    inc: [
      "Sobre el llanto|El llanto aumenta tras los primeros meses|Es la primera herramienta de comunicación|Cogerlo en brazos y mecerlo suele calmarlo|Es más frecuente en los primeros meses y luego disminuye, al aparecer la sonrisa, los gestos o el balbuceo."
    ],
    seq: [],
    cls: [
      "Tipo de llanto|Básico: hambre; patrón rítmico regular|Enfado: aire forzado por las cuerdas vocales; más intenso|Dolor: comienzo repentino; grito largo; pausa sin respirar"
    ] },
  { t: "Capacidades sensoriales al nacer",
    tip: "El recién nacido llega con todos los sentidos funcionando, aunque con distinto grado de madurez. Tacto, dolor, gusto y olfato están muy maduros: prefiere lo dulce y aprende pronto el olor de su madre. Oye desde el último trimestre, y DeCasper mostró que prefiere la voz materna y el cuento oído antes de nacer. La visión es el sentido menos maduro, con una agudeza de unos 20/400 a 20/600.",
    v: [
      "Sensación=Detección de un estímulo",
      "Percepción=Interpretación de un estímulo ya detectado",
      "Audición prenatal=Capacidad del feto de oír en el último trimestre, que deja preferencias tras nacer",
      "Agudeza visual=Capacidad de distinguir detalles, de unos 20/400 a 20/600 al nacer",
      "DeCasper y Fifer (1980)=Mostraron que el recién nacido prefiere la voz de su madre a la de otra mujer",
      "DeCasper y Spence (1986)=Hallaron preferencia por el cuento que la madre había leído en el embarazo",
      "Alto contraste=Rasgo de los estímulos que el recién nacido percibe mejor",
      "Preferencia por lo dulce=Inclinación con sentido adaptativo, porque la leche materna lo es"
    ],
    g: [
      "El sentido menos maduro al nacer es la ___.|visión|audición|olfacción",
      "El recién nacido rechaza lo amargo y lo ___.|ácido|dulce|lácteo",
      "El feto oye durante el último ___ del embarazo.|trimestre|mes|semestre",
      "En DeCasper y Fifer (1980), los bebés modificaban su ritmo de ___ para escuchar la voz materna.|succión|respiración|llanto",
      "El recién nacido percibe mejor los objetos cercanos, grandes y de alto ___.|contraste|brillo|color"
    ],
    tf: [
      "El recién nacido no siente dolor porque su sistema nervioso es inmaduro.|F|Siente dolor: llora, hace muecas y cambia su frecuencia cardiaca ante un pinchazo.",
      "En DeCasper y Spence (1986), los bebés preferían el cuento leído en el embarazo aunque lo leyera otra persona.|V",
      "La visión del color del recién nacido es completa desde el primer día.|F|Es limitada en las primeras semanas y mejora con rapidez en los primeros meses.",
      "Las expresiones faciales del recién nacido ante los sabores se parecen a las de los adultos.|V"
    ],
    q: [
      "En las últimas semanas de embarazo, una mujer lee cada día el mismo cuento en voz alta. Tras el parto, su bebé lo prefiere a otro nuevo aunque lo lea otra persona. ¿Qué aprendió?|Propiedades sonoras como el ritmo|El timbre concreto de la voz materna|El significado de las palabras|DeCasper y Spence (1986) mostraron que aprendía propiedades sonoras del cuento, como el ritmo y la entonación.",
      "Un bebé amamantado de dos semanas se orienta hacia una gasa con el olor de su madre y no hacia la de otra mujer. ¿Qué muestra?|Un aprendizaje temprano ligado al vínculo|Una preferencia innata por olores femeninos|Que el olfato es el sentido menos maduro|En las primeras semanas el bebé amamantado aprende a reconocer el olor de su madre y a distinguirlo del de otras mujeres.",
      "¿Qué significa una agudeza visual de 20/400?|Ve a 20 pies lo que un adulto a 400|Ve a 400 pies lo que un adulto a 20|Distingue 20 de cada 400 detalles|Lo que un adulto con visión normal distingue a 400 pies, el bebé solo lo distingue a 20.",
      "¿Qué idea contradicen las capacidades sensoriales del recién nacido?|La del bebé pasivo que lo recibe todo|La de un aprendizaje que empieza en el útero|La de una visión menos madura que el oído|Llega con sentidos preparados, con preferencias y con aprendizajes que empezaron antes de nacer."
    ],
    inc: [
      "Sobre los sentidos al nacer|El gusto apenas funciona y no hay preferencias|El tacto es uno de los sentidos más maduros|El bebé presta especial atención al habla|Al nacer ya distingue sabores: prefiere lo dulce y rechaza lo amargo y lo ácido."
    ],
    seq: [],
    cls: [
      "Estudio de audición prenatal|DeCasper y Fifer (1980): voz de la madre frente a otra mujer; ritmo de succión|DeCasper y Spence (1986): cuento leído en el embarazo; preferencia aunque lo lea otra persona"
    ] },
  { t: "¿Imitan los recién nacidos? Un debate abierto",
    tip: "Meltzoff y Moore (1977) informaron de que bebés de pocas semanas imitaban gestos faciales, algo que chocaba con Piaget. Oostenbroek et al. (2016), con 106 bebés evaluados a las 1, 3, 6 y 9 semanas, no hallaron pruebas de imitación, y Meltzoff et al. (2018) defendieron en un reanálisis la imitación de la protrusión lingual. Es un debate abierto: la imitación neonatal no debe presentarse como un hecho establecido.",
    v: [
      "Imitación neonatal=Supuesta reproducción de gestos faciales por recién nacidos, hoy en debate",
      "Meltzoff y Moore (1977)=Informaron de que bebés de pocas semanas imitaban gestos faciales",
      "Oostenbroek et al. (2016)=Estudio longitudinal con 106 bebés que no halló pruebas de imitación",
      "Meltzoff et al. (2018)=Reanálisis que defiende la imitación de la protrusión lingual",
      "Protrusión lingual=Sacar la lengua, el gesto con más apoyos en este debate",
      "Imitación diferida=Reproducción en ausencia del modelo, hacia los 18–24 meses según Piaget",
      "Hipótesis de activación=Sacar la lengua como respuesta general ante estímulos interesantes",
      "Condición de control=Comparar la respuesta ante un gesto con la respuesta ante otros modelos"
    ],
    g: [
      "Oostenbroek et al. evaluaron a los bebés a la 1, 3, 6 y ___ semanas de vida.|9|12|8",
      "El estudio de Oostenbroek et al. (2016) incluyó a ___ bebés.|106|136|60",
      "Para Piaget, la imitación diferida aparece hacia los ___ meses.|18–24|8–12|4–6",
      "Imitar un gesto facial exige relacionar lo que se ve con algo que se hace y no se ___.|ve|oye|siente",
      "Hoy se responde a estas dudas con estudios multilaboratorio y ___.|prerregistrados|transversales|retractados"
    ],
    tf: [
      "Está demostrado que los recién nacidos imitan las caras de los adultos desde las primeras horas.|F|Es un debate abierto: Oostenbroek et al. (2016) no hallaron imitación, aunque un reanálisis defiende la de la lengua.",
      "Que los bebés imiten acciones a partir de la segunda mitad del primer año no se discute.|V",
      "En Oostenbroek et al. (2016), sacar la lengua aparecía también ante otros modelos.|V",
      "Para sostener que el bebé es social desde el principio es imprescindible demostrar la imitación neonatal.|F|No es necesaria: su preferencia por las caras y por las voces ya lo demuestra."
    ],
    q: [
      "En un estudio, un recién nacido saca la lengua tras ver a un adulto sacarla, pero también ante una luz llamativa. ¿Qué conclusión es más prudente?|Puede ser activación, no imitación|Demuestra una imitación selectiva|Prueba que no percibe al adulto|Si el gesto aparece también ante otros estímulos llamativos, hacerlo ante el adulto no demuestra que esté copiando.",
      "¿Por qué tenía tanto interés teórico el hallazgo de Meltzoff y Moore?|Uniría percepción y acción entre modalidades|Confirmaría los plazos de imitación de Piaget|Probaría que el bebé carece de vínculo social|Imitar exige vincular lo que se ve en el otro con lo que uno hace sin verse, y eso chocaba con Piaget.",
      "¿Qué postura defiende el reanálisis de Meltzoff et al. (2018)?|Hay imitación al sacar la lengua|No hay ninguna imitación neonatal|Hay imitación de todos los gestos|Reanalizaron los datos de Oostenbroek et al. y defendieron que mostraban imitación de la protrusión lingual.",
      "¿Qué lección metodológica deja este debate?|Un hallazgo influyente requiere réplicas amplias|Un estudio pequeño basta si el efecto es llamativo|Los bebés no pueden estudiarse con rigor|Con bebés es fácil confundir una conducta frecuente con una respuesta específica si faltan condiciones de control."
    ],
    inc: [
      "Sobre la imitación neonatal|Oostenbroek et al. la hallaron desde la semana 6|Meltzoff y Moore la describieron en 1977, con gran impacto|El debate se centra sobre todo en la protrusión lingual|Oostenbroek et al. no hallaron pruebas de imitación en ninguna de las semanas evaluadas."
    ],
    seq: [],
    cls: [
      "Postura sobre la imitación neonatal|Hay imitación: Meltzoff y Moore (1977); gestos faciales concretos|No hay pruebas sólidas: Oostenbroek et al. (2016); 106 bebés|Imitación de la lengua: Meltzoff et al. (2018); reanálisis"
    ] }
] }
);

// SAIMAP Psicología · Desarrollo: Infancia · Unidades 9–12
window.COURSE.units.push(
{ n: 9, t: "La percepción en la infancia", cap: 3, pir: "media", mods: [
  { t: "Percepción visual: patrones, rostros y constancias",
    tip: "Fantz (1961) mostró con el paradigma de preferencia visual que los bebés miran más los estímulos con patrón que las superficies lisas. Hasta los dos meses exploran sobre todo los bordes externos, y entre los dos y los seis meses, el interior de las figuras. Johnson y Morton (1991) propusieron CONSPEC, subcortical y presente al nacer, y CONLERN, cortical y que aprende las caras concretas. Las constancias existen en forma rudimentaria al nacer y se afinan durante el primer año.",
    v: [
      "Preferencia visual=Paradigma que mide qué estímulo mira más el bebé para saber si los distingue",
      "Fantz (1961)=Presentaba dos estímulos a la vez y medía cuánto tiempo miraba cada uno el bebé",
      "CONSPEC=Mecanismo subcortical presente al nacer que orienta la atención hacia rostros",
      "CONLERN=Mecanismo cortical que madura después y aprende las caras concretas",
      "Constancia perceptiva=Percibir propiedades estables aunque cambie la imagen en la retina",
      "Constancia del tamaño=Una pelota que se aleja no parece encogerse",
      "Constancia de la forma=Una puerta que se abre sigue pareciendo rectangular",
      "Johnson y Morton (1991)=Propusieron dos mecanismos para explicar la atención temprana a las caras"
    ],
    g: [
      "En los dos primeros meses, el bebé tiende a fijarse en los ___ de una cara, como el contorno del pelo.|bordes externos|ojos y la boca|rasgos internos",
      "CONSPEC es un mecanismo ___ que orienta la atención hacia la estructura general de un rostro.|subcortical|cortical|aprendido",
      "Entre los dos y los ___ meses, el bebé recorre el interior de las figuras y distingue caras conocidas.|seis|doce|tres",
      "Los bebés de Fantz miraban más los estímulos con patrón que las superficies de color ___.|liso|vivo|claro",
      "Los estudios con ___ sugieren que las constancias ya existen en forma rudimentaria al nacer.|habituación|neuroimagen|condicionamiento"
    ],
    tf: [
      "El rostro esquemático estaba entre los estímulos que más atraían a los bebés en los estudios de Fantz.|V",
      "CONLERN es el mecanismo subcortical presente desde el nacimiento.|F|Ese es CONSPEC. CONLERN es cortical, madura en los meses siguientes y aprende las caras concretas.",
      "Las constancias perceptivas exigen meses de visión binocular y no existen al nacer.|F|Así se creyó, pero la habituación sugiere que existen en forma rudimentaria al nacer y se afinan en el primer año.",
      "A lo largo del primer año, el bebé aprende a percibir como un solo objeto lo que está parcialmente tapado.|V"
    ],
    q: [
      "Un bebé de tres semanas mira a su padre, que se inclina hacia él. ¿En qué se fijará sobre todo?|En el borde del pelo y la barbilla|En los ojos y la boca de su padre|En la expresión emocional del rostro|Hasta los dos meses explora los bordes externos. Los ojos y la boca atraen su mirada entre los dos y los seis meses.",
      "¿Qué ilustra el modelo CONSPEC-CONLERN de Johnson y Morton (1991)?|Predisposición y experiencia juntas|Un aprendizaje puramente cultural|Una capacidad madura desde el inicio|CONSPEC asegura que el bebé mire caras y CONLERN aprovecha esa experiencia para especializarse en ellas.",
      "En el paradigma de Fantz, ¿qué indica que un bebé mire más un estímulo de forma sistemática?|Que distingue los dos estímulos|Que prefiere los colores vivos|Que ya reconoce ese estímulo|Una preferencia sistemática indica que el bebé discrimina los dos estímulos presentados a la vez.",
      "Una pelota que se aleja no parece encogerse aunque su imagen en la retina disminuya. ¿Qué constancia actúa?|La del tamaño|La de la forma|La de la posición|La constancia del tamaño mantiene el tamaño real del objeto aunque cambie su imagen retiniana."
    ],
    inc: [
      "Sobre la percepción visual temprana|CONSPEC aprende las caras que el bebé ve a diario|Los recién nacidos siguen más las configuraciones de cara|La exploración visual madura con rapidez en el primer año|Aprender las caras concretas es función de CONLERN, cortical. CONSPEC es subcortical y solo orienta hacia la estructura de un rostro."
    ],
    seq: [
      "Exploración visual en el primer año|Bordes externos de la figura>Interior de la figura, ojos y boca>Objetos parcialmente tapados como uno solo"
    ],
    cls: [
      "Mecanismo de Johnson y Morton|CONSPEC: subcortical; presente al nacer; estructura general de un rostro|CONLERN: cortical; madura en los meses siguientes; caras concretas"
    ] },
  { t: "Percepción de la profundidad: el abismo visual",
    tip: "El bebé aprovecha primero los indicios cinéticos (desde el primer mes), después los binoculares (≈3–5 meses) y por último los pictóricos (≈6–7 meses). Gibson y Walk (1960) mostraron con el abismo visual que los bebés que gatean perciben la profundidad y la evitan. El experimento no demuestra que sea innata ni mide la permanencia del objeto, y percibir la profundidad no equivale a temer la altura.",
    v: [
      "Indicios cinéticos=Información de profundidad que procede del movimiento del objeto o del observador",
      "Indicios binoculares=Diferencia entre las imágenes que recibe cada ojo",
      "Estereopsis=Percepción de la profundidad basada en la diferencia entre las imágenes de ambos ojos",
      "Indicios pictóricos=Tamaño relativo, superposición y perspectiva de una imagen plana",
      "Abismo visual=Dispositivo de Gibson y Walk (1960) con un lado superficial y otro profundo",
      "Lado superficial=Dibujo de cuadros justo bajo el vidrio que parece suelo firme",
      "Lado profundo=El mismo dibujo bastante más abajo, que crea la ilusión de un desnivel",
      "Grupo de Campos=Relacionó la experiencia de gatear con la aparición del miedo a la altura"
    ],
    g: [
      "Hacia las ___ semanas, el bebé parpadea o echa la cabeza atrás si algo se aproxima rápido a su cara.|cuatro|doce|veinte",
      "Los indicios ___ son los últimos en aprovecharse, hacia los 6–7 meses.|pictóricos|binoculares|cinéticos",
      "En el estudio de Gibson y Walk participaron ___ bebés de 6 a 14 meses.|36|27|48",
      "De los bebés que gatearon al lado superficial, solo ___ avanzaron también hacia el profundo.|3|9|12",
      "Que bebés más pequeños detecten el desnivel sin mostrar miedo indica que percibir la profundidad y temer la altura ___.|no son lo mismo|son equivalentes|aparecen a la vez"
    ],
    tf: [
      "La sensibilidad a los indicios binoculares aparece hacia los 3–5 meses.|V",
      "El abismo visual demuestra que la percepción de la profundidad es innata.|F|Los bebés tenían al menos seis meses de experiencia visual y motora, así que no prueba que sea innata.",
      "El abismo visual es una prueba clásica de la permanencia del objeto.|F|Mide la percepción de la profundidad y la reacción emocional ante ella. La permanencia del objeto es otro fenómeno.",
      "En el abismo visual, un vidrio grueso impedía cualquier caída real.|V"
    ],
    q: [
      "Una bebé de 8 meses que gatea se acerca al borde del lado profundo, mira hacia abajo y llora cuando su madre la llama. ¿Qué indica su conducta?|Que percibe la profundidad|Que tiene permanencia del objeto|Que su miedo a la altura es innato|Los bebés que gatean perciben la profundidad y la evitan. No prueba que sea innato ni mide la permanencia del objeto.",
      "¿Qué tipo de indicio de profundidad empieza a funcionar antes?|Los cinéticos|Los pictóricos|Los binoculares|Funcionan desde el primer mes. Los binoculares llegan hacia los 3–5 meses y los pictóricos hacia los 6–7.",
      "Según las investigaciones del grupo de Campos, ¿con qué se relaciona la aparición del miedo a la altura?|Con la experiencia de gatear|Con la estereopsis completa|Con la edad cronológica|El bebé necesita desplazarse por sí mismo para descubrir qué significan en la práctica las distancias y los desniveles.",
      "En el abismo visual, ¿qué creaba la ilusión de un desnivel en el lado profundo?|El mismo dibujo colocado más abajo|Un vidrio más fino que en el otro lado|Una luz más tenue sobre ese lado|El dibujo de cuadros estaba justo bajo el vidrio en el lado superficial y bastante más abajo en el profundo."
    ],
    inc: [
      "Sobre el abismo visual|La mayoría de los bebés cruzó al lado profundo|Muchos miraban abajo y lloraban o se apartaban|La madre llamaba al bebé desde uno u otro lado|Solo 3 de los 27 bebés que gatearon hacia el lado superficial avanzaron también hacia el profundo."
    ],
    seq: [
      "Indicios de profundidad por orden de aparición|Cinéticos>Binoculares>Pictóricos"
    ],
    cls: [
      "Indicio de profundidad|Cinéticos: movimiento del observador; objeto que se aproxima|Binoculares: estereopsis; imágenes de los dos ojos|Pictóricos: tamaño relativo; superposición; perspectiva"
    ] },
  { t: "Percepción intermodal",
    tip: "La percepción intermodal combina lo que aportan varios sentidos sobre un mismo objeto o suceso. Se apoya en propiedades amodales como la sincronía, el ritmo, el tempo o la intensidad. Spelke (1976) y Meltzoff y Borton (1979) mostraron que aparece muy pronto. Bahrick y Lickliter (2000) propusieron que la redundancia intersensorial capta la atención del bebé, y se discute si el desarrollo es sobre todo integración (Piaget) o diferenciación (Gibson).",
    v: [
      "Percepción intermodal=Integración de lo que aportan varios sentidos sobre un mismo suceso",
      "Propiedad amodal=Información que puede captarse por varios sentidos",
      "Sincronía=Dos sucesos que empiezan y acaban a la vez",
      "Spelke (1976)=Dos películas a la vez con la banda sonora de solo una de ellas",
      "Meltzoff y Borton (1979)=Chupete liso o con protuberancias explorado sin verlo",
      "Redundancia intersensorial=Hipótesis de que la información amodal simultánea capta la atención",
      "Visión de la integración=Los sentidos empiezan separados y la experiencia los coordina",
      "Visión de la diferenciación=Los sentidos están unidos y se aprende a distinguir lo propio de cada uno"
    ],
    g: [
      "En el estudio de Spelke (1976), los bebés tenían ___ meses.|4|1|9",
      "En el estudio de Meltzoff y Borton, los bebés tenían ___.|un mes|cuatro meses|seis meses",
      "La hipótesis de la redundancia intersensorial la propusieron Bahrick y ___ (2000).|Lickliter|Borton|Walk",
      "La teoría de la ___, asociada a Gibson, sostiene que los sentidos están unidos desde el principio.|diferenciación|integración|asimilación",
      "El ritmo de una mano que golpea la mesa es más fácil de detectar cuando se ve y se ___.|oye|toca|imagina"
    ],
    tf: [
      "En el estudio de Spelke, los bebés miraban más la película que coincidía con el sonido.|V",
      "En el estudio de Meltzoff y Borton, los bebés miraban más el chupete que nunca habían tenido en la boca.|F|Miraban más el que habían explorado con la boca: reconocían por la vista lo que solo conocían por el tacto.",
      "Piaget defendía que los sentidos están unidos al nacer y después se diferencian.|F|Esa es la visión de Gibson. Piaget sostenía que funcionan por separado y que la experiencia los coordina.",
      "Los datos de Spelke y de Meltzoff y Borton favorecen una integración temprana que se perfecciona con la experiencia.|V"
    ],
    q: [
      "Una bebé de cinco meses oye el pitido del microondas y mira hacia él. ¿Qué capacidad ilustra?|La percepción intermodal|El estrechamiento perceptivo|La constancia de la forma|Usa la coincidencia entre lo que ve y lo que oye para localizar el origen del sonido.",
      "¿Cuál de estas es una propiedad amodal?|El tempo|El color|El tono|El tempo puede captarse por la vista y por el oído. El color es propio de la vista y el tono, del oído.",
      "Según Bahrick y Lickliter (2000), ¿por qué la información amodal facilita el aprendizaje?|Porque capta la atención del bebé|Porque madura antes en la corteza|Porque solo llega por un sentido|La redundancia entre sentidos guía la atención hacia lo que de verdad pertenece a un mismo suceso.",
      "Un investigador cree que el bebé parte de una experiencia unificada y aprende a reconocer de qué canal llega cada dato. ¿Qué visión defiende?|La de la diferenciación|La de la integración|La de la asimilación|Es la visión de Gibson. Para Piaget, los sentidos empiezan separados y se coordinan con la experiencia."
    ],
    inc: [
      "Sobre la percepción intermodal|Aparece hacia el final del primer año|Se apoya en propiedades amodales como el ritmo|Permite reconocer con la vista algo solo tocado|Aparece muy pronto: Meltzoff y Borton la hallaron en bebés de un mes y Spelke, a los 4 meses."
    ],
    seq: [],
    cls: [
      "Visión del desarrollo intermodal|Integración (Piaget): sentidos separados al inicio; la experiencia los coordina|Diferenciación (Gibson): sentidos unidos desde el principio; se aprende a distinguir cada canal"
    ] },
  { t: "Estrechamiento perceptivo e influencias culturales",
    tip: "Madurar también es dejar de hacer distinciones que el entorno no exige. Werker y Tees (1984) hallaron que la mayoría de los bebés anglófonos discriminaban contrastes no nativos a los 6–8 meses y pocos lo hacían a los 10–12. Con las caras ocurre algo parecido (Pascalis et al., 2002). Kuhl, Tsao y Liu (2003) mostraron que solo la exposición en vivo al mandarín invierte el declive: el estrechamiento es una sintonización dependiente de la experiencia, no una pérdida irreversible.",
    v: [
      "Estrechamiento perceptivo=Especialización en las distinciones del entorno y pérdida de las no usadas",
      "Werker y Tees (1984)=Estudio con contrastes del hindi y del nthlakampx en bebés anglófonos",
      "Nthlakampx=Lengua salish de Canadá usada en el estudio de Werker y Tees",
      "Pascalis et al. (2002)=Los bebés pequeños distinguen caras de monos mejor que los mayores",
      "Kuhl, Tsao y Liu (2003)=Mandarín en vivo, en vídeo o solo en audio a bebés de 9 meses",
      "Sintonización perceptiva=Ajuste dependiente de la experiencia, no una pérdida irreversible",
      "Habituación fetal=El feto deja de reaccionar poco a poco a una vibración repetida",
      "Contraste no nativo=Diferencia de sonidos que la lengua del entorno no utiliza"
    ],
    g: [
      "La mayoría de los bebés anglófonos de ___ meses discriminaban los contrastes no nativos.|6–8|10–12|12–14",
      "En el estudio de Kuhl et al. (2003), los bebés recibieron ___ sesiones de 25 minutos durante cuatro semanas.|12|25|5",
      "Los bebés de Kuhl et al. tenían ___ meses y no habían tenido contacto previo con el mandarín.|9|6|12",
      "Con la experiencia, la percepción de caras se ___ en las que el bebé ve a diario.|especializa|diversifica|generaliza",
      "El condicionamiento clásico y el operante se observan desde los primeros días, sobre todo con la ___.|succión|prensión|marcha"
    ],
    tf: [
      "En la submuestra longitudinal de Werker y Tees, a los 8–10 meses los 6 bebés seguían distinguiendo el contraste del hindi.|V",
      "En Kuhl et al. (2003), la recuperación exigió varios meses de exposición diaria al mandarín.|F|Bastaron 12 sesiones de 25 minutos en cuatro semanas, unas 5 horas en total, siempre que fueran en vivo.",
      "Con el estrechamiento perceptivo, el bebé pierde parte de su capacidad auditiva general.|F|No pierde la capacidad de oír: se especializa en los contrastes de la lengua que le rodea.",
      "La habituación puede observarse ya antes del nacimiento.|V"
    ],
    q: [
      "Unos padres ponen a su bebé de 9 meses vídeos en chino para que aprenda los sonidos de esa lengua. Según Kuhl et al. (2003), ¿qué cabe esperar?|Ningún efecto en la discriminación|El mismo efecto que la exposición en vivo|Un efecto menor que en vivo, pero real|Solo la exposición en vivo recuperó la discriminación del mandarín. En vídeo o solo en audio no hubo efecto.",
      "¿Qué concluyen Kuhl, Tsao y Liu (2003) sobre el estrechamiento perceptivo?|Que depende de la experiencia|Que es una pérdida irreversible|Que solo afecta a los rostros|El declive se invirtió con la exposición en vivo, lo que indica una sintonización dependiente de la experiencia.",
      "Un bebé de 6 meses distingue dos caras de mono mejor que su padre. ¿Qué fenómeno explica la diferencia?|El estrechamiento perceptivo|La constancia perceptiva|La percepción intermodal temprana|Con la experiencia, la percepción de caras se especializa en las del entorno (Pascalis et al., 2002).",
      "Según Werker y Tees (1984), ¿qué ocurre con los adultos anglófonos ante esos contrastes del hindi?|Tampoco los distinguen|Los distinguen igual que a los 6 meses|Los distinguen mejor que los bebés|Los adultos anglófonos tampoco discriminaban los contrastes no nativos, como los bebés de 10–12 meses."
    ],
    inc: [
      "Sobre el estrechamiento perceptivo|Supone una pérdida irreversible de capacidades|Se ha descrito con sonidos del habla y con caras|Concentra recursos en lo que importa para la lengua|Es una sintonización dependiente de la experiencia: la exposición en vivo puede invertir el declive (Kuhl et al., 2003)."
    ],
    seq: [],
    cls: [
      "Condición en Kuhl et al. (2003)|Recupera la discriminación: mandarín en vivo|Sin efecto: mandarín en vídeo; mandarín solo en audio; control en inglés"
    ] }
] },
{ n: 10, t: "Desarrollo psicomotor en la infancia", cap: 4, pir: "baja", mods: [
  { t: "Principios del desarrollo motor",
    tip: "El desarrollo psicomotor es el control progresivo del propio cuerpo y depende también de la percepción, la motivación y la comprensión del mundo. Sigue tres leyes: cefalocaudal (de la cabeza a los pies), próximo-distal (del eje a la periferia) y de lo general a lo específico. Frente a los enfoques madurativo (Gesell, McGraw) y experiencial, la teoría de los sistemas dinámicos (Thelen, 1995) es hoy el marco de referencia porque integra ambos.",
    v: [
      "Desarrollo psicomotor=Adquisición progresiva del control del propio cuerpo y de los movimientos",
      "Ley cefalocaudal=El control motor progresa de la cabeza hacia los pies",
      "Ley próximo-distal=El control avanza del eje del cuerpo hacia las extremidades y los dedos",
      "General a específico=Paso de movimientos globales a movimientos diferenciados",
      "Enfoque madurativo=Programa biológico con normas de edad para cada conducta (Gesell)",
      "Enfoque experiencial=Sin negar la maduración, subraya el papel de la práctica",
      "Sistemas dinámicos=Cada habilidad se ensambla con maduración, cuerpo, motivación y entorno",
      "Dennis (1960)=Observó retrasos motores en niños institucionalizados con pocas ocasiones de moverse"
    ],
    g: [
      "Sostener la cabeza antes de sentarse ilustra la ley ___.|cefalocaudal|próximo-distal|madurativa",
      "Gesell elaboró ___ de edad para cada conducta motora.|normas|ventanas|estadios",
      "Según Thelen, la desaparición de la marcha automática podría deberse al aumento de ___ de las piernas.|peso|fuerza|longitud",
      "El crecimiento físico se vuelve más pausado en la niñez ___ y se acelera con el estirón puberal.|intermedia|temprana|tardía",
      "Según los sistemas dinámicos, las primeras versiones de una habilidad son inestables y ___.|torpes|fluidas|automáticas"
    ],
    tf: [
      "Controlar el hombro y el codo antes que los dedos ilustra la ley cefalocaudal.|F|Es la ley próximo-distal, del eje hacia la periferia. La cefalocaudal es vertical, de la cabeza hacia los pies.",
      "El enfoque madurativo explica bien la regularidad de la secuencia motora entre culturas.|V",
      "La explicación de Thelen sobre la desaparición de la marcha automática es hoy un hecho aceptado.|F|Sigue en discusión: es una de las explicaciones de los sistemas dinámicos que se debaten.",
      "El cerebro crece mucho al principio, mientras que el sistema reproductor apenas cambia hasta la pubertad.|V"
    ],
    q: [
      "Hugo, de once meses, se pone de pie agarrado al sofá. Que dé sus primeros pasos depende de su fuerza, su equilibrio, el suelo y que quiera alcanzar algo. ¿Qué enfoque describe mejor el caso?|El de los sistemas dinámicos|El madurativo de Gesell|El experiencial de Dennis|Ningún componente basta por sí solo: la habilidad se ensambla a partir de varios (Thelen, 1995).",
      "Un bebé agita todo el cuerpo ante un juguete y, meses después, solo estira el brazo. ¿Qué principio ilustra?|De lo general a lo específico|La progresión próximo-distal|La progresión cefalocaudal|Pasa de movimientos globales a movimientos diferenciados, la tercera ley del desarrollo motor.",
      "¿Qué aportan los estudios de Dennis (1960) al debate sobre el desarrollo motor?|El peso de la práctica|El orden fijo de los hitos|La base genética de la marcha|Observó retrasos motores en niños criados en instituciones con muy pocas oportunidades de moverse.",
      "¿Por qué la teoría de los sistemas dinámicos es hoy el marco de referencia?|Porque integra maduración y experiencia|Porque demuestra un programa genético|Porque niega el papel de la maduración|Recoge la maduración del enfoque madurativo y la práctica del experiencial, junto con el cuerpo y el entorno."
    ],
    inc: [
      "Sobre los principios del desarrollo motor|La ley próximo-distal va de la cabeza hacia los pies|Según Thelen, cada habilidad se ensambla con varios componentes|El enfoque experiencial no niega la maduración|De la cabeza a los pies es la ley cefalocaudal. La próximo-distal va del eje del cuerpo hacia la periferia."
    ],
    seq: [],
    cls: [
      "Ley del desarrollo motor|Cefalocaudal: sostener la cabeza antes de sentarse; sentarse antes de andar|Próximo-distal: hombro antes que muñeca; brazo antes que dedos|General a específico: agitar todo el cuerpo y después solo estirar el brazo"
    ] },
  { t: "Hitos de la motricidad gruesa y su variabilidad",
    tip: "La motricidad gruesa sigue una secuencia cefalocaudal: control de la cabeza, volteo, sedestación, desplazamiento, bipedestación y marcha. Lo que ha cambiado es la idea de edad normal. El Estudio Multicéntrico de la OMS (2006), con 816 niños sanos de cinco países, situó andar solo entre 8,2 y 17,6 meses (percentiles 1 y 99). Las diferencias culturales son modestas, y lo que merece consulta es salir claramente de las ventanas o perder habilidades.",
    v: [
      "Motricidad gruesa=Movimientos con grandes grupos musculares y el cuerpo entero",
      "Sedestación=Mantenerse sentado, primero con apoyo y después sin él",
      "Bipedestación=Estar de pie, agarrado a los muebles y después solo",
      "Estudio de la OMS (2006)=816 niños sanos de cinco países y ventanas para seis hitos motores",
      "Ventana de logro=Intervalo entre los percentiles 1 y 99 para alcanzar un hito",
      "Andar solo=Hito con una ventana normal de 8,2 a 17,6 meses",
      "Sentarse sin apoyo=Hito con una ventana normal de 3,8 a 9,2 meses",
      "Edad media de un hito=Referencia estadística que no debe leerse como un plazo"
    ],
    g: [
      "El estudio de la OMS (2006) siguió a ___ niños sanos de cinco países.|816|618|1.600",
      "Según la OMS, la ventana para andar solo, del percentil 1 al 99, dura unos ___ meses.|nueve|cuatro|quince",
      "Entre los países del estudio de la OMS estaban Ghana, India, Noruega, Omán y ___.|EE. UU.|España|Brasil",
      "La secuencia típica de la motricidad gruesa sigue la ley ___.|cefalocaudal|próximo-distal|madurativa",
      "Lo que merece consulta es estar claramente fuera de las ventanas o ___ habilidades ya adquiridas.|perder|retrasar|alternar"
    ],
    tf: [
      "En el estudio de la OMS (2006), algunos niños sanos no llegaron a gatear antes de andar.|V",
      "La OMS observó que el orden de los hitos motores es idéntico en todos los niños.|F|El orden es parecido en la mayoría de los niños, pero no idéntico.",
      "Las diferencias culturales en la edad de algunos hitos alteran la secuencia motora básica.|F|Son modestas, se relacionan con prácticas de crianza y no alteran la secuencia básica.",
      "La ventana normal para sentarse sin apoyo va de 3,8 a 9,2 meses.|V"
    ],
    q: [
      "Lola anda sola a los 10 meses y su primo Marcos, a los 16. ¿Qué cabe concluir?|Ambos están dentro de lo esperable|Marcos presenta un retraso motor|Lola tendrá un desarrollo más avanzado|La ventana normal de andar solo va de 8,2 a 17,6 meses (OMS, 2006). Las edades medias no son plazos.",
      "¿Qué hito aparece antes en la secuencia típica de la motricidad gruesa?|El volteo|La sedestación|La bipedestación|El orden típico es control de la cabeza, volteo, sedestación, desplazamiento, bipedestación y marcha.",
      "¿Qué situación motora sí merece una valoración profesional?|Perder habilidades ya adquiridas|Andar solo por primera vez a los 16 meses|Pasar a andar sin haber gateado antes|Andar a los 16 meses o no gatear entran en lo normal. Merecen consulta la pérdida de habilidades o una desviación clara.",
      "¿Con qué se relacionan las diferencias culturales en la edad media de algunos hitos?|Con las prácticas de crianza|Con el clima de cada país|Con la edad de la madre|Estimular activamente al bebé o limitar su tiempo en el suelo se asocia a diferencias modestas en algunos hitos."
    ],
    inc: [
      "Sobre los hitos de la motricidad gruesa|Andar a los 12 meses es un plazo obligado|La ventana de la marcha supera los nueve meses|Correr y saltar llegan en el segundo y tercer año|Las edades medias son referencias estadísticas, no plazos: andar solo va de 8,2 a 17,6 meses en niños sanos."
    ],
    seq: [
      "Secuencia de la motricidad gruesa|Control de la cabeza>Volteo>Sedestación>Desplazamiento>Bipedestación>Marcha"
    ],
    cls: [] },
  { t: "Motricidad fina: alcance, prensión y pinza",
    tip: "La motricidad fina sigue la ley próximo-distal: brazo, mano y, al final, dedos. Von Hofsten (1982) describió el prealcance del recién nacido, y hacia los 3–4 meses aparece el alcance voluntario. Clifton et al. (1993) mostraron que los bebés alcanzan en la oscuridad, porque la propiocepción guía buena parte del movimiento. La prensión pasa de cubito-palmar a palmar, pinza inferior y pinza superior, hacia los 9–12 meses.",
    v: [
      "Motricidad fina=Movimientos precisos de manos y dedos coordinados con la vista",
      "Prealcance=Movimientos del brazo del recién nacido hacia un objeto, sin agarre",
      "Von Hofsten (1982)=Describió los movimientos de brazo del recién nacido hacia lo que mira",
      "Clifton et al. (1993)=Bebés que alcanzan en la oscuridad objetos que solo oyen o ven brillar",
      "Información propioceptiva=Datos de músculos y articulaciones sobre la posición del propio brazo",
      "Prensión cubito-palmar=Atrapar el objeto contra la palma con el lado del meñique",
      "Pinza inferior=Sujetar entre el pulgar y el lateral del índice",
      "Pinza superior=Coger objetos diminutos con las yemas del pulgar y del índice"
    ],
    g: [
      "El alcance voluntario y dirigido aparece hacia los ___ meses.|3–4|6–7|9–12",
      "La pinza ___ permite coger una miga de pan o una pasa.|superior|inferior|palmar",
      "Clifton et al. comprobaron que los bebés alcanzan en la ___ con una eficacia parecida a la de plena luz.|oscuridad|silla alta|cuna",
      "Cuando el bebé se sienta solo, sus ___ quedan libres para explorar objetos.|manos|piernas|rodillas",
      "En el segundo año llegan apilar bloques, comer con cuchara y los primeros ___.|garabatos|renacuajos|planos"
    ],
    tf: [
      "Los prealcances del recién nacido suelen terminar en un agarre eficaz.|F|Son toscos, rara vez tocan el objeto y no terminan en agarre, aunque muestran una base temprana de coordinación ojo-mano.",
      "El alcance depende solo de la guía visual, como sugiere la expresión «alcance guiado por la vista».|F|Clifton et al. (1993) mostraron que alcanzan en la oscuridad: la propiocepción guía buena parte del movimiento.",
      "A lo largo del primer año, el agarre se desplaza desde el borde de la mano hacia los dedos.|V",
      "En la segunda mitad del primer año, el bebé adapta la exploración a cada objeto, por ejemplo sacude lo que suena.|V"
    ],
    q: [
      "Una bebé de 11 meses coge una pasa del suelo con las yemas del pulgar y del índice. ¿Qué forma de prensión usa?|Pinza superior|Pinza inferior|Prensión palmar|Usar las yemas del pulgar y del índice para objetos diminutos es la pinza superior, hacia los 9–12 meses.",
      "¿Qué forma de prensión aparece antes?|La cubito-palmar|La pinza inferior|La palmar|El orden es cubito-palmar, palmar, pinza inferior y pinza superior.",
      "¿Qué mostraron Clifton et al. (1993) sobre el alcance?|Que no depende solo de la vista|Que aparece al final del primer año|Que solo funciona con plena luz|Los bebés alcanzaban en la oscuridad casi igual de bien: la información propioceptiva guía buena parte del movimiento.",
      "¿Qué ley siguen los cambios que van del alcance con el brazo a la pinza con los dedos?|La próximo-distal|La cefalocaudal|La de la experiencia|Primero se controla el brazo, después la mano y al final los dedos: del eje hacia la periferia."
    ],
    inc: [
      "Sobre la motricidad fina|La pinza inferior usa las yemas de pulgar e índice|El prealcance no termina en agarre|Hacia los 3–4 meses aparece el alcance voluntario|Usar las yemas del pulgar y del índice es la pinza superior. La inferior sujeta entre el pulgar y el lateral del índice."
    ],
    seq: [
      "Del prealcance a la pinza superior|Prealcance>Alcance voluntario>Prensión cubito-palmar>Prensión palmar>Pinza inferior>Pinza superior"
    ],
    cls: [] },
  { t: "Motricidad en la niñez: dibujo, lateralidad y mitos",
    tip: "Entre los 2 y los 12 años el movimiento gana velocidad, precisión, equilibrio y coordinación. El dibujo pasa del garabato a las formas y a la representación, con el «renacuajo» como primera figura humana típica. Luquet (1927) describió el realismo intelectual, dibujar lo que se sabe, antes del realismo visual. Una de cada diez personas es zurda: es una variante normal que no debe corregirse.",
    v: [
      "Garabato=Trazos sin intención de representar, por el placer del movimiento",
      "Renacuajo=Primera figura humana típica, un círculo del que salen las piernas",
      "Realismo intelectual=El niño dibuja lo que sabe del objeto, no lo que ve",
      "Realismo visual=Dibujo que respeta el punto de vista y la perspectiva",
      "Luquet (1927)=Describió el paso de dibujar lo que se sabe a dibujar lo que se ve",
      "Lateralidad=Preferencia por usar un lado del cuerpo, sobre todo una mano",
      "Zurdera=Variante normal presente en una de cada diez personas",
      "Tijeras para zurdos=Ayuda práctica que respeta la mano preferida"
    ],
    g: [
      "Aproximadamente una de cada ___ personas es zurda.|diez|cinco|veinte",
      "Las preferencias manuales se consolidan en la etapa ___.|preescolar|escolar|puberal",
      "Una mesa dibujada con sus cuatro patas visibles es un ejemplo de realismo ___.|intelectual|visual|simbólico",
      "El paso al realismo visual enlaza con la ___ cognitiva de la niñez.|descentración|centración|imitación",
      "Antes de la pubertad, las diferencias entre niños y niñas en rendimiento motor son ___.|pequeñas|grandes|crecientes"
    ],
    tf: [
      "El garabato del segundo año ya tiene intención de representar algo.|F|Son trazos sin intención de representar, por el placer del movimiento y de dejar marca.",
      "Forzar a un niño zurdo a escribir con la derecha mejora su aprendizaje de la escritura.|F|La zurdera es una variante normal. Forzar el cambio solo añade dificultad y frustración.",
      "Entre los 2 y los 12 años no aparecen grandes hitos nuevos, pero el movimiento gana velocidad y precisión.|V",
      "En la fase de representación, la primera figura humana típica es el «renacuajo».|V"
    ],
    q: [
      "Una niña de cinco años dibuja un coche con las cuatro ruedas a la vista, aunque desde ese ángulo solo se verían dos. ¿Qué ilustra?|El realismo intelectual|El realismo visual|La fase de las formas|Dibuja lo que sabe del objeto y no lo que ve desde su punto de vista (Luquet, 1927).",
      "Un maestro quiere que un alumno zurdo de 6 años escriba con la derecha. ¿Qué se recomienda?|Respetar la mano preferida|Cambiarla antes de los 7 años|Alternar las dos manos|Ser zurdo es una variante normal. Lo adecuado es respetar la mano preferida y ayudar con detalles prácticos.",
      "¿Cuál es el orden de las fases del dibujo infantil?|Garabato, formas, representación|Formas, garabato, representación|Garabato, representación, formas|Primero trazos sin intención, después formas controladas y, por último, la intención de representar algo.",
      "¿Qué creencia corrige el dato de que algunos niños sanos andan sin haber gateado?|Que todo bebé debe gatear|Que hay que corregir zurdos|Que los hitos son fijos|Algunos niños sanos no gatean y andan con normalidad, como recogió la OMS (2006)."
    ],
    inc: [
      "Sobre la motricidad en la niñez|La preferencia manual es firme desde el nacimiento|El renacuajo es la primera figura humana típica|El realismo visual respeta la perspectiva|Las preferencias manuales aparecen como tendencias en los primeros años y se consolidan en la etapa preescolar."
    ],
    seq: [
      "Evolución del dibujo infantil|Garabato>Formas controladas>Representación"
    ],
    cls: [
      "Fase del dibujo según Luquet|Realismo intelectual: paredes transparentes; mesa con las cuatro patas visibles|Realismo visual: respeta el punto de vista; usa la perspectiva"
    ] }
] },
{ n: 11, t: "Pubertad, crecimiento y cerebro adolescente", cap: 4, pir: "media", mods: [
  { t: "La pubertad: cambios hormonales y físicos",
    tip: "La pubertad es el conjunto de cambios biológicos que llevan a la madurez sexual, y la adolescencia, un periodo psicológico y social más amplio. Se inicia al activarse el eje hipotálamo-hipófiso-gonadal: GnRH, después LH y FSH y, por último, hormonas gonadales. La adrenarquia la precede. El primer signo en las chicas es la telarquia, no la menarquia, y su estirón se adelanta unos 2 años al de los chicos.",
    v: [
      "Pubertad=Cambios biológicos que llevan a la madurez sexual y reproductiva",
      "Adolescencia=Periodo psicológico y social que empieza con la pubertad y acaba con los papeles adultos",
      "Eje HHG=Cadena hipotálamo, hipófisis y gónadas que pone en marcha la pubertad",
      "GnRH=Hormona liberadora de gonadotropinas, segregada por el hipotálamo",
      "Adrenarquia=Aumento de andrógenos suprarrenales previo a la activación gonadal",
      "Estadios de Tanner=Cinco niveles, de prepuberal a adulto, para valorar el avance puberal",
      "Telarquia=Aparición del botón mamario, primer signo puberal en las chicas",
      "Espermarquia=Primera eyaculación en los chicos"
    ],
    g: [
      "La hipófisis responde a la GnRH segregando las gonadotropinas ___.|LH y FSH|GnRH y LH|estrógenos",
      "El primer signo puberal en los chicos es el aumento del volumen de los ___.|testículos|músculos|huesos",
      "La ___ contribuye al vello púbico y axilar y al olor corporal adulto antes de la pubertad gonadal.|adrenarquia|telarquia|menarquia",
      "Los estadios de Tanner van del 1, prepuberal, al ___, adulto.|5|4|6",
      "Por término medio, el estirón de las chicas se adelanta unos ___ años al de los chicos.|2|4|0,5"
    ],
    tf: [
      "La menarquia es el primer signo de la pubertad femenina.|F|El primer signo es la telarquia. La menarquia llega con la pubertad avanzada, después del pico de crecimiento.",
      "La menarquia suele producirse después del momento de máxima velocidad de crecimiento.|V",
      "Los estadios de Tanner permiten valorar la maduración con independencia de la edad cronológica.|V",
      "Los ovarios producen sobre todo testosterona y los testículos, sobre todo estrógenos.|F|Es al revés: los ovarios producen sobre todo estrógenos y los testículos, sobre todo testosterona."
    ],
    q: [
      "Una niña de 9 años presenta vello axilar y olor corporal adulto, sin botón mamario. ¿Qué proceso lo explica mejor?|La adrenarquia|La telarquia|La menarquia|Las suprarrenales aumentan los andrógenos en la niñez intermedia, antes de que se active el eje gonadal.",
      "¿Qué segrega el hipotálamo al activarse el eje hipotálamo-hipófiso-gonadal?|GnRH|LH y FSH|Estrógenos|El hipotálamo libera GnRH, la hipófisis segrega LH y FSH y las gónadas producen sus hormonas.",
      "¿En qué se diferencia la pubertad de la adolescencia?|La pubertad es solo biológica|La adolescencia es más breve|La pubertad dura más años|La adolescencia es más amplia, psicológica y social, y su final depende de la cultura y de la época.",
      "En sexto de primaria, una alumna tiene un desarrollo mamario avanzado y otra no muestra cambios visibles. ¿Qué cabe concluir?|Ambas situaciones pueden ser normales|La segunda tiene un retraso puberal|La primera tiene una pubertad precoz|La variabilidad individual de la pubertad es tan grande como la de los hitos motores."
    ],
    inc: [
      "Sobre los cambios puberales|El estirón llega temprano en la secuencia de los chicos|La pubertad empieza antes en las chicas, por término medio|El cambio de voz es un carácter sexual secundario|En los chicos el estirón es más tardío dentro de la secuencia. En las chicas llega temprano."
    ],
    seq: [
      "Activación del eje hipotálamo-hipófiso-gonadal|El hipotálamo libera GnRH>La hipófisis segrega LH y FSH>Las gónadas producen sus hormonas"
    ],
    cls: [
      "Cambio puberal|Chicas: telarquia; menarquia; ensanchamiento de caderas|Chicos: aumento del volumen testicular; espermarquia; vello facial"
    ] },
  { t: "Crecimiento, desarrollo motor adolescente y tendencia secular",
    tip: "El estirón puberal no afecta a todo el cuerpo a la vez: primero crecen manos y pies, después brazos y piernas y al final el tronco. La edad ósea refleja la maduración mejor que la cronológica. Tras la pubertad, los chicos mejoran más en fuerza, velocidad y resistencia, por razones biológicas y sociales. La tendencia secular ha adelantado la telarquia unos 0,24 años por década (Eckert-Lind et al., 2020), con causas todavía en debate.",
    v: [
      "Estirón puberal=Aceleración notable de la talla y del peso con la pubertad",
      "Edad ósea=Estimación radiográfica del grado de maduración física",
      "Asincronía del crecimiento=Manos y pies crecen antes que brazos, piernas y tronco",
      "Tendencia secular=Cambio de una característica física a lo largo de generaciones",
      "Eckert-Lind et al. (2020)=Revisión de 30 estudios sobre el adelanto de la telarquia",
      "Explicación biológica=Más masa muscular y menos proporción de grasa en los chicos",
      "Explicación social=Expectativas de género y menos oportunidades reducen la actividad de las chicas",
      "Disruptores endocrinos=Una de las causas candidatas del adelanto puberal reciente"
    ],
    g: [
      "Según Eckert-Lind et al., la telarquia se adelantó unos ___ años por década entre 1977 y 2013.|0,24|0,86|2,4",
      "En el estirón, lo último en crecer suele ser ___.|el tronco|la mano|el pie",
      "El crecimiento se detiene cuando se cierran las zonas de crecimiento de los ___.|huesos|músculos|tendones",
      "Eckert-Lind et al. (2020) revisaron ___ estudios.|30|24|13",
      "Las chicas que mantienen el ___ siguen mejorando su rendimiento motor en la adolescencia.|entrenamiento|crecimiento|descanso"
    ],
    tf: [
      "La causa de la tendencia secular reciente está establecida: es el aumento de la adiposidad infantil.|F|Está en debate: se citan adiposidad, estrés psicosocial temprano y disruptores endocrinos, y ninguna lo explica sola.",
      "La actualización de 2025, con unos 0,26 años por década, ya está publicada como artículo completo.|F|Se presentó como resumen de congreso y todavía no se ha publicado como artículo completo.",
      "En la motricidad fina y la coordinación, las diferencias entre sexos en la adolescencia son pequeñas.|V",
      "La edad ósea refleja el grado de maduración física mejor que la edad cronológica.|V"
    ],
    q: [
      "Un chico de 13 años se queja de que las zapatillas del curso pasado ya no le valen, aunque su talla apenas ha cambiado. ¿Qué lo explica?|La asincronía del estirón|La tendencia secular|La adrenarquia temprana|En el estirón crecen primero las manos y los pies, después brazos y piernas y por último el tronco.",
      "¿Cuánto se adelantó en total la telarquia entre 1977 y 2013, según Eckert-Lind et al. (2020)?|Unos 0,86 años|Unos 0,24 años|Unos 2,4 años|Con −0,24 años por década, el efecto acumulado en todo el periodo se acerca a −0,86 años.",
      "Tras la pubertad, el rendimiento motor medio de muchas chicas se estanca. ¿Qué indica que parte de esa diferencia no es inevitable?|Que las que entrenan siguen mejorando|Que la masa muscular es parecida|Que la diferencia es previa a la pubertad|Si las chicas que mantienen el entrenamiento siguen mejorando, parte de la diferencia es social y no solo biológica.",
      "¿Qué cambio ha acompañado a la tendencia secular de los dos últimos siglos?|El aumento de la talla adulta|El retraso de la menarquia|La estabilidad de la telarquia|La talla adulta ha aumentado y la pubertad se ha adelantado, en paralelo a la mejora de la nutrición y de la salud."
    ],
    inc: [
      "Sobre el crecimiento adolescente|Tras la pubertad, las chicas ganan más masa muscular|El estirón tiene un pico de velocidad y luego se frena|Las proporciones corporales cambian durante un tiempo|Son los chicos quienes ganan más masa muscular y capacidad cardiorrespiratoria. Las chicas acumulan más grasa."
    ],
    seq: [
      "Orden del estirón puberal|Manos y pies>Brazos y piernas>Tronco"
    ],
    cls: [
      "Explicación de la diferencia motora adolescente|Biológica: mayor masa muscular en los chicos; menor proporción de grasa|Social: expectativas de género; menos oportunidades para las chicas"
    ] },
  { t: "El cerebro adolescente y el modelo de sistemas duales",
    tip: "La adolescencia es un periodo de reorganización cerebral intensa: poda sináptica, mielinización prolongada y maduración prefrontal tardía. El modelo de sistemas duales (Steinberg, 2008, y Casey et al., 2008) explica el riesgo por un sistema socioemocional que se activa con la pubertad antes de que madure el control cognitivo: el acelerador madura antes que el freno. La presencia de iguales aumenta el riesgo. Es un modelo útil, pero simplificador y en debate.",
    v: [
      "Poda sináptica=Eliminación de las conexiones menos usadas y conservación de las más utilizadas",
      "Mielinización prolongada=Aumento de sustancia blanca que acelera la comunicación entre regiones",
      "Corteza prefrontal=Región de planificación y control de impulsos que madura de las últimas",
      "Sistemas duales=Desfase entre un sistema socioemocional precoz y un control cognitivo tardío",
      "Sistema socioemocional=Muy sensible a la recompensa y a la evaluación social desde la pubertad",
      "Control cognitivo=Sistema apoyado en la prefrontal que madura despacio hasta la adultez temprana",
      "Steinberg (2008)=Autor del modelo de sistemas duales, junto con Casey et al. (2008)",
      "Periodo de oportunidad=La plasticidad adolescente vista como ocasión para aprender y explorar"
    ],
    g: [
      "Con la poda sináptica, el volumen de sustancia ___ de la corteza disminuye.|gris|blanca|negra",
      "La mielinización prolongada aumenta la sustancia ___.|blanca|gris|cortical",
      "En el modelo de sistemas duales, el problema es que el ___ madura antes que el freno.|acelerador|volante|retrovisor",
      "La presencia de ___ aumenta la asunción de riesgos en la adolescencia.|amigos|padres|profesores",
      "La corteza prefrontal sigue cambiando al final de la adolescencia y en la adultez ___.|temprana|media|tardía"
    ],
    tf: [
      "En la adolescencia, la reducción de sustancia gris refleja un deterioro de los circuitos.|F|Refleja la poda sináptica: se eliminan conexiones poco usadas y los circuitos se vuelven más eficientes.",
      "Según el modelo de sistemas duales, el adolescente carece de freno.|F|El freno existe, pero madura despacio: el problema es que el acelerador madura antes que el freno.",
      "Los adolescentes pueden razonar sobre riesgos casi como un adulto en una situación tranquila.|V",
      "Al modelo de sistemas duales se le critica que no todos los adolescentes asumen más riesgos.|V"
    ],
    q: [
      "Álex, de quince años, conduce el patinete con prudencia cuando va solo, pero hace maniobras arriesgadas si le graban sus amigos. ¿Qué lo explica mejor?|La recompensa social del momento|La falta de conocimiento del riesgo|Una corteza prefrontal ya madura|No le falta conocimiento sobre el peligro. La recompensa social, en presencia de iguales, pesa más.",
      "Según el modelo de sistemas duales, ¿qué sistema se activa con fuerza a partir de la pubertad?|El socioemocional|El de control cognitivo|El sensoriomotor|El sistema socioemocional, sensible a la recompensa, se activa pronto. El control cognitivo madura lentamente.",
      "¿Cuál de estas es una crítica al modelo de sistemas duales?|Reduce a dos sistemas un cerebro interconectado|Ignora la sensibilidad adolescente a la recompensa|Atribuye el riesgo a una prefrontal ya madura|Se le critica que simplifica un cerebro muy interconectado y que olvida el peso del contexto y las oportunidades.",
      "¿Qué otra cara tiene la alta plasticidad del cerebro adolescente?|Es un periodo de oportunidad|Es un periodo crítico cerrado|Es un periodo de estabilidad|No es solo vulnerabilidad: también favorece aprender, explorar intereses y construir relaciones e identidad."
    ],
    inc: [
      "Sobre el cerebro adolescente|La prefrontal es de las primeras regiones en madurar|La poda hace más eficientes los circuitos|La mielinización acelera la comunicación entre regiones|La corteza prefrontal es de las últimas en madurar y sigue cambiando en la adultez temprana."
    ],
    seq: [],
    cls: [
      "Sistema del modelo dual|Socioemocional: sensible a la recompensa; evaluación social; activación fuerte con la pubertad|Control cognitivo: corteza prefrontal; maduración lenta; hasta la adultez temprana"
    ] },
  { t: "Maduración temprana y tardía; ¿es la adolescencia una etapa tormentosa?",
    tip: "Lo que pesa psicológicamente no es solo el cambio corporal, sino estar desfasado respecto al grupo. La maduración temprana es un factor de riesgo en las chicas, mientras que en los chicos los resultados son mixtos. Hall (1904) describió la adolescencia como Sturm und Drang, y Arnett (1999) lo matizó: aumentan los conflictos con los padres, la inestabilidad emocional y las conductas de riesgo, pero no de forma universal ni inevitable.",
    v: [
      "Maduración temprana=Iniciar la pubertad antes que la mayoría de los compañeros",
      "Maduración tardía=Iniciar la pubertad después que la mayoría del grupo",
      "Sturm und Drang=«Tormenta e ímpetu», visión de la adolescencia de Hall (1904)",
      "Hall (1904)=Autor de la obra Adolescence, origen de la visión tormentosa",
      "Arnett (1999)=Revisión que matizó la idea de una adolescencia tormentosa",
      "Conflicto con los padres=Aumenta al principio de la adolescencia por asuntos cotidianos",
      "Inestabilidad del ánimo=Más emociones negativas y cambios más rápidos",
      "Conductas de riesgo=Más frecuentes al final de la adolescencia y en la adultez temprana"
    ],
    g: [
      "Los conflictos con los padres aumentan sobre todo al ___ de la adolescencia.|principio|final|centro",
      "Las conductas de riesgo son más frecuentes al ___ de la adolescencia y en la adultez temprana.|final|principio|centro",
      "En los chicos de maduración temprana, los resultados son ___.|mixtos|negativos|positivos",
      "El apoyo familiar y escolar ___ el efecto de la maduración temprana.|reduce|aumenta|anula",
      "Hall publicó su obra Adolescence en ___.|1904|1999|1924"
    ],
    tf: [
      "Arnett (1999) defendió que la adolescencia es una etapa de crisis universal e inevitable.|F|Esa visión procede de Hall (1904). Arnett la matizó: los cambios aumentan, pero no de forma universal ni inevitable.",
      "Las chicas de maduración temprana presentan más síntomas emocionales y peor imagen corporal.|V",
      "La mayoría de los adolescentes mantiene una buena relación con su familia y comparte sus valores básicos.|V",
      "Una tristeza intensa y persistente en un adolescente puede considerarse «cosa de la edad».|F|Normalizarla es un riesgo del tópico tormentoso: la tristeza persistente o el aislamiento merecen atención."
    ],
    q: [
      "Una niña de diez años con aspecto de catorce empieza a salir con amigas mayores. ¿Qué explicación del riesgo de la maduración temprana ilustra?|El entorno responde al cuerpo y no a la edad|Su prefrontal madura antes que la de otras|La adrenarquia aumenta su búsqueda de riesgo|A una niña con aspecto mayor se la trata como mayor y es más probable que se relacione con amigos de más edad.",
      "¿Qué aumenta en la adolescencia según la revisión de Arnett (1999)?|Conflictos, inestabilidad y riesgo|Solo los conflictos con los padres|Una crisis universal en todo joven|Aumentan los conflictos con los padres, la inestabilidad del ánimo y las conductas de riesgo, pero no en todos.",
      "Unos padres temen que su hijo de 12 años se vuelva inevitablemente conflictivo. ¿Qué responde mejor la evidencia?|Puede haber más conflicto, pero no es inevitable|Será conflictivo si madura antes que sus amigos|No habrá ningún aumento del conflicto familiar|Hay grandes diferencias individuales y culturales, y las discusiones cotidianas conviven con el cariño y la confianza.",
      "¿Qué grupo muestra los resultados más consistentes de mayor riesgo?|Chicas de maduración temprana|Chicos de maduración temprana|Chicas de maduración tardía|Los datos son bastante consistentes en las chicas que maduran pronto y más dispares en los chicos."
    ],
    inc: [
      "Sobre la maduración temprana y tardía|Afecta igual a chicos y chicas|El contexto modula su efecto|Lo que cuenta es estar desfasado del grupo|Los resultados son bastante consistentes en las chicas, con mayor riesgo, y más dispares en los chicos."
    ],
    seq: [],
    cls: [
      "Visión de la adolescencia|Hall (1904): Sturm und Drang; tormenta universal; conflicto inevitable|Arnett (1999): aumento no universal; diferencias individuales y culturales; buena relación familiar mayoritaria"
    ] }
] },
{ n: 12, t: "Los estadios de Piaget", cap: 5, pir: "alta", mods: [
  { t: "El estadio sensoriomotor y la permanencia del objeto",
    tip: "Para Piaget, los estadios forman una secuencia invariante, con edades que varían entre niños. En el sensoriomotor el bebé conoce actuando, y el motor del cambio es la reacción circular: primaria (el propio cuerpo), secundaria (efectos en el entorno) y terciaria (variaciones deliberadas). La permanencia del objeto se construye durante todo el estadio: el error A-no-B es del subestadio 4, los desplazamientos visibles se resuelven en el 5 y los invisibles, en el 6.",
    v: [
      "Epistemología genética=Estudio de cómo se origina y se transforma el conocimiento",
      "Método clínico=Preguntas flexibles que siguen el razonamiento del niño",
      "Reacción circular=Repetir una acción para reproducir un resultado obtenido por azar",
      "Reacción circular primaria=Hábito centrado en el propio cuerpo, como chuparse el dedo",
      "Reacción circular terciaria=Variaciones deliberadas para ver qué pasa, entre 12 y 18 meses",
      "Permanencia del objeto=Comprender que los objetos existen aunque no se perciban",
      "Error A-no-B=Buscar donde se encontró antes y no donde se acaba de esconder",
      "Imitación diferida=Reproducir un modelo ausente, propia del subestadio 6"
    ],
    g: [
      "El subestadio de las reacciones circulares secundarias abarca aproximadamente de los ___ meses.|4 a 8|1 a 4|8 a 12",
      "En el subestadio 4 aparece la ___: un esquema actúa como medio y otro como fin.|intencionalidad|imitación diferida|representación",
      "El subestadio de ejercicio de los reflejos abarca aproximadamente de 0 a ___ mes.|1|4|8",
      "Tirar objetos desde distintas alturas para ver cómo caen es una reacción circular ___.|terciaria|secundaria|primaria",
      "En el subestadio 6 aparecen la imitación diferida y el juego ___.|simbólico|motor|reglado"
    ],
    tf: [
      "Agitar el sonajero para que suene es una reacción circular primaria.|F|Produce un efecto en el entorno, así que es secundaria (4–8 meses). Las primarias se centran en el propio cuerpo.",
      "Según Piaget, el orden de los estadios no cambia, aunque la edad de acceso varía de un niño a otro.|V",
      "En el subestadio 5, el bebé ya resuelve los desplazamientos invisibles.|F|En el 5 resuelve los visibles. Los invisibles, en los que debe inferir dónde está el objeto, llegan en el 6.",
      "Los datos de Piaget procedían en parte de la observación de sus tres hijos.|V"
    ],
    q: [
      "Un bebé de 9 meses busca su sonajero bajo la manta donde lo halló varias veces, aunque acaba de verlo esconder bajo el cojín. ¿En qué subestadio está?|Coordinación de esquemas secundarios|Reacciones circulares secundarias|Reacciones circulares terciarias|Es el error A-no-B, propio del subestadio 4 (8–12 meses). Situarlo en el subestadio 3 es la trampa típica.",
      "Un bebé de 2 meses se chupa el dedo una y otra vez tras haberlo descubierto por azar. ¿Qué tipo de reacción circular es?|Primaria|Secundaria|Terciaria|Es un hábito centrado en el propio cuerpo, típico del subestadio 2 (1–4 meses).",
      "Una niña de 20 meses imita una rabieta que vio ayer a su primo. ¿Qué capacidad muestra?|Imitación diferida|Reacción circular terciaria|Coordinación de esquemas|Reproducir un modelo ausente es propio del subestadio 6, junto con la representación mental y el juego simbólico.",
      "Según Piaget, ¿qué ocurre en los primeros meses cuando se tapa un objeto?|Deja de interesar al bebé|Lo busca en el último lugar visto|Lo busca donde lo halló antes|Al principio el objeto tapado deja de interesar. Buscarlo donde se encontró antes es el error A-no-B, del subestadio 4."
    ],
    inc: [
      "Sobre el estadio sensoriomotor|El error A-no-B aparece en el subestadio 3|La imitación diferida surge en el subestadio 6|Apartar un cojín para coger un juguete es del subestadio 4|El error A-no-B es del subestadio 4 (8–12 meses). Situarlo en el 3 es una trampa típica del PIR."
    ],
    seq: [
      "Subestadios sensoriomotores|Ejercicio de los reflejos>Reacciones circulares primarias>Reacciones circulares secundarias>Coordinación de esquemas secundarios>Reacciones circulares terciarias>Representación mental"
    ],
    cls: [
      "Reacción circular|Primaria: chuparse el dedo; centrada en el propio cuerpo|Secundaria: agitar el sonajero; efecto sobre el entorno|Terciaria: tirar objetos desde distintas alturas; variación deliberada"
    ] },
  { t: "El estadio preoperacional",
    tip: "Hacia los dos años se generaliza la función simbólica: lenguaje, juego simbólico, imitación diferida y dibujo. El niño aún no dispone de operaciones, acciones mentales reversibles. Piaget distinguió un subperiodo preconceptual (hasta unos 4 años) y otro intuitivo (de 4 a 7). Sus limitaciones típicas son el egocentrismo, el animismo, la centración, la irreversibilidad, el razonamiento transductivo y la confusión entre apariencia y realidad.",
    v: [
      "Función simbólica=Capacidad de usar una cosa para representar otra",
      "Representación dual=Tratar un objeto a la vez como cosa y como símbolo de otra",
      "DeLoache (1987)=Estudio con una maqueta para encontrar un juguete en la habitación real",
      "Animismo=Atribuir vida e intenciones a lo inanimado",
      "Centración=Atender a un solo rasgo del problema",
      "Razonamiento transductivo=Enlazar dos hechos particulares como causa y efecto",
      "Tres montañas=Tarea de Piaget e Inhelder (1956) para estudiar el egocentrismo",
      "Inclusión de clases=Comparar una subclase con la clase total que la contiene"
    ],
    g: [
      "El subperiodo ___ va aproximadamente de los 4 a los 7 años.|intuitivo|preconceptual|simbólico",
      "DeLoache mostró que usar la maqueta resulta mucho más fácil a los ___ años.|tres|dos|cinco",
      "Ante siete perros y tres gatos de juguete, el preoperacional suele responder que hay más ___.|perros|animales|gatos",
      "«La luna nos sigue porque quiere venir a casa» es un ejemplo de ___.|animismo|centración|transducción",
      "Egocentrismo no significa egoísmo: es una limitación ___, no moral.|cognitiva|afectiva|social"
    ],
    tf: [
      "El egocentrismo preoperacional es una forma de egoísmo moral.|F|Es una limitación cognitiva para adoptar un punto de vista distinto del propio, no una limitación moral.",
      "En la tarea de las tres montañas, los preoperacionales tendían a elegir la foto de su propia vista.|V",
      "Con tareas más sencillas y materiales familiares, los preescolares rinden mejor de lo que describía Piaget.|V",
      "En la inclusión de clases, el preoperacional compara la subclase con la clase total.|F|Compara las dos subclases, perros y gatos, y pierde de vista la clase total de animales."
    ],
    q: [
      "Un niño de cuatro años dice: «Me he portado mal y por eso ha llovido». ¿Qué rasgo preoperacional muestra?|Razonamiento transductivo|Confusión apariencia-realidad|Centración en la apariencia|Enlaza dos hechos particulares como si uno causara el otro, sin una relación lógica entre ellos.",
      "Un niño de cinco años ve a su gato con una careta de perro y afirma que ahora es un perro. ¿Qué limitación ilustra?|Apariencia-realidad|Animismo infantil|Irreversibilidad|Confunde lo que algo parece con lo que es, una limitación típica del pensamiento preoperacional.",
      "Una niña de cuatro años se tapa los ojos y cree que nadie puede verla. ¿Qué rasgo muestra?|Egocentrismo|Animismo|Centración|Le cuesta adoptar un punto de vista distinto del propio: si ella no ve, cree que no la ven.",
      "¿Por qué llamó Piaget «preoperacional» a este estadio?|Porque aún no hay operaciones|Porque aún no usa símbolos|Porque solo domina reflejos|El niño ya usa símbolos, pero todavía no dispone de acciones mentales reversibles organizadas en sistemas."
    ],
    inc: [
      "Sobre el estadio preoperacional|El subperiodo intuitivo va de los 2 a los 4 años|La función simbólica se generaliza hacia los dos años|La seriación de diez palitos le resulta difícil|El intuitivo va de los 4 a los 7 años. Hasta unos 4 años se habla del subperiodo preconceptual o simbólico."
    ],
    seq: [],
    cls: [
      "Rasgo preoperacional|Egocentrismo: taparse los ojos y creer que nadie lo ve; elegir su propia vista en las tres montañas|Animismo: la luna nos sigue porque quiere venir a casa|Centración: juzgar la cantidad de zumo solo por la altura"
    ] },
  { t: "Las operaciones concretas y los decalajes",
    tip: "Hacia los siete años el pensamiento se vuelve operatorio, gracias a la reversibilidad (por inversión o por compensación) y a la descentración. La conservación se justifica por identidad, inversión y compensación, y no se adquiere de golpe: número, masa, peso y volumen. Ese desfase dentro del estadio es el decalaje horizontal. El vertical, en cambio, repite una adquisición en niveles distintos del desarrollo. El límite es que estas operaciones funcionan sobre lo concreto.",
    v: [
      "Operación=Acción interiorizada, reversible y coordinada con otras en un sistema",
      "Inversión=La acción contraria anula la primera",
      "Compensación=El cambio en una dimensión se equilibra con el de otra",
      "Descentración=Tener en cuenta varios rasgos de un problema a la vez",
      "Conservación=Comprender que una cantidad no cambia aunque cambie su aspecto",
      "Decalaje horizontal=Desfase dentro de un estadio al aplicar una estructura a contenidos distintos",
      "Decalaje vertical=Una misma adquisición se repite en niveles diferentes del desarrollo",
      "Transitividad=Si Ana es más alta que Bea y Bea más que Carla, Ana es más alta que Carla"
    ],
    g: [
      "La conservación del ___ es la primera en adquirirse, hacia los 6–7 años.|número|peso|volumen",
      "La conservación del volumen se adquiere hacia los ___ años.|11–12|9–10|7–8",
      "«Está más alto, pero el vaso es más estrecho» es una justificación por ___.|compensación|inversión|identidad",
      "«No has quitado ni añadido nada» es una justificación por ___.|identidad|inversión|compensación",
      "Ante premisas contrarias a la realidad, el niño de operaciones concretas tiende a ___ la premisa.|rechazar|aceptar|deducir"
    ],
    tf: [
      "Las conservaciones se adquieren todas a la vez al entrar en las operaciones concretas.|F|Se escalonan: número hacia 6–7 años, masa 7–8, peso 9–10 y volumen 11–12. Es el decalaje horizontal.",
      "Conservar la masa antes que el peso es un ejemplo de decalaje vertical.|F|Es decalaje horizontal: dentro de un mismo estadio, una estructura se aplica antes a unos contenidos que a otros.",
      "La transitividad es uno de los logros del estadio de las operaciones concretas.|V",
      "En las operaciones concretas, el niño comprende que hay más animales que perros.|V"
    ],
    q: [
      "Mario, de ocho años, dice que el agua del vaso alto es la misma porque «si la vuelves a echar en el otro vaso, queda igual». ¿Qué argumento usa?|Inversión|Compensación|Identidad|Recorre mentalmente la acción en sentido contrario. La identidad sería «no has quitado ni añadido nada».",
      "Un niño de 8 años afirma que la bola aplastada tiene la misma plastilina, pero que ya no ocupa el mismo espacio en el agua. ¿Qué ilustra?|Un decalaje horizontal|Un decalaje vertical|Una falta de identidad|Conserva la masa, pero no el volumen: la misma estructura se aplica antes a unos contenidos que a otros.",
      "Un bebé domina el espacio al gatear por casa y, años después, debe reconstruirlo al dibujar un plano. ¿Qué concepto ilustra?|Decalaje vertical|Decalaje horizontal|Realismo intelectual|Una misma adquisición se repite en niveles distintos: primero en la acción y después en la representación.",
      "Se le pide a un niño de nueve años: «Supón que los perros son más grandes que los elefantes». ¿Qué cabe esperar?|Que rechace la premisa|Que razone desde ella|Que combine las opciones|Las operaciones concretas funcionan sobre lo real o fácilmente imaginable, no sobre premisas contrarias a la realidad."
    ],
    inc: [
      "Sobre las operaciones concretas|La conservación del peso precede a la de la masa|La seriación sistemática es un logro del estadio|La reversibilidad puede ser por inversión o compensación|El orden es número, masa, peso y volumen: la masa se conserva antes que el peso."
    ],
    seq: [
      "Orden de adquisición de las conservaciones|Número>Masa>Peso>Volumen"
    ],
    cls: [
      "Tipo de decalaje|Horizontal: dentro de un mismo estadio; masa antes que peso|Vertical: entre niveles del desarrollo; moverse por el espacio y luego representarlo"
    ] },
  { t: "Las operaciones formales y el egocentrismo adolescente",
    tip: "Desde los 11 o 12 años puede aparecer el pensamiento formal, en el que lo real pasa a ser un caso dentro de lo posible: es hipotético-deductivo, proposicional y combinatorio. Inhelder y Piaget (1955) lo estudiaron con el péndulo y la combinación de líquidos, y Piaget lo describió con el grupo INRC. No todos lo alcanzan ni lo usan en todos los ámbitos. Elkind (1967), no Piaget, describió el egocentrismo adolescente: audiencia imaginaria y fábula personal.",
    v: [
      "Hipotético-deductivo=Formular hipótesis y deducir qué debería observarse si fueran ciertas",
      "Pensamiento proposicional=Razonar sobre enunciados con independencia de su contenido",
      "Pensamiento combinatorio=Generar de forma sistemática todas las combinaciones de factores",
      "Tarea del péndulo=Descubrir qué factor determina la rapidez de oscilación",
      "Grupo INRC=Identidad, negación, reciprocidad y correlativa",
      "Audiencia imaginaria=Creencia de que los demás están muy pendientes de uno",
      "Fábula personal=Creer que las propias experiencias son únicas y que uno es invulnerable",
      "Elkind (1967)=Autor que describió el egocentrismo adolescente"
    ],
    g: [
      "En la tarea del péndulo, solo importa la ___ del hilo.|longitud|tensión|textura",
      "Inhelder y Piaget estudiaron el pensamiento formal con tareas científicas en ___.|1955|1966|1967",
      "El grupo INRC integra en un solo sistema la inversión y la ___.|compensación|seriación|centración",
      "En la tarea de combinación de líquidos había que conseguir un color ___.|amarillo|violeta|azul",
      "La fábula personal se ha relacionado con la asunción de ___.|riesgos|roles|normas"
    ],
    tf: [
      "La audiencia imaginaria y la fábula personal las describió Piaget en sus estudios del estadio formal.|F|Las describió Elkind (1967). Atribuirlas a Piaget es una trampa típica.",
      "Según Piaget, a los 12 años todos los adolescentes piensan ya de forma abstracta.|F|Piaget defendía una secuencia invariante, no un calendario fijo, y parte de los adultos no razona de forma formal.",
      "Piaget admitió que el pensamiento formal podía aparecer sobre todo en los campos de especialización de cada persona.|V",
      "El pensamiento proposicional permite aceptar una premisa absurda y sacar de ella una conclusión válida.|V"
    ],
    q: [
      "En la tarea del péndulo, una adolescente cambia la longitud del hilo y mantiene fijos el peso, la altura y el impulso. ¿Qué muestra?|Control sistemático de variables|Reversibilidad por inversión|Decalaje horizontal de tareas|Variar un factor cada vez y mantener constantes los demás es propio del razonamiento hipotético-deductivo.",
      "Lucas, de catorce años, no quiere ir al instituto porque está seguro de que todos se fijarán en su corte de pelo. ¿Qué manifiesta?|Audiencia imaginaria|Fábula personal|Animismo adolescente|Es la sensación de que los demás están tan pendientes de uno como uno mismo (Elkind, 1967).",
      "Una adolescente está convencida de que nadie ha sentido nunca lo que ella siente. ¿Qué fenómeno ilustra?|La fábula personal|La audiencia imaginaria|El realismo intelectual|La fábula personal es creer que las propias experiencias son únicas y, a veces, que uno es invulnerable.",
      "Un adolescente prueba con orden todas las mezclas posibles de varios líquidos incoloros hasta dar con la que amarillea. ¿Qué rasgo del pensamiento formal usa?|Combinatorio|Proposicional|Transductivo|Generar de forma sistemática todas las combinaciones posibles de los factores es el rasgo combinatorio del pensamiento formal."
    ],
    inc: [
      "Sobre el pensamiento formal|Elkind lo describió con el grupo INRC|Es hipotético-deductivo, proposicional y combinatorio|Depende de la escolarización y la cultura|El grupo INRC lo propuso Piaget. Elkind (1967) describió el egocentrismo adolescente."
    ],
    seq: [],
    cls: [
      "Egocentrismo adolescente según Elkind|Audiencia imaginaria: sentirse observado por todos; el grano que verá todo el instituto|Fábula personal: experiencias únicas; sensación de invulnerabilidad"
    ] }
] }
);

// SAIMAP Psicología · Desarrollo: Infancia · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Más allá de Piaget: el bebé competente y la teoría de la mente", cap: 5, pir: "alta", mods: [
  { t: "Aportaciones de Piaget",
    tip: "Piaget fundó el estudio del desarrollo cognitivo, presentó al niño como constructor activo, propuso la equilibración como mecanismo de cambio, aportó el método clínico y un repertorio de tareas e influyó en la educación. Además, generó la investigación que lo corrigió. La primera crítica se apoya en distinguir competencia de ejecución: fallar una tarea no prueba que falte la estructura mental.",
    v: [
      "Constructor activo=Visión del niño que elabora su propio conocimiento, hoy de consenso",
      "Equilibración=Mecanismo de cambio cognitivo propuesto por Piaget",
      "Método clínico=Procedimiento de indagación que Piaget usó junto a sus tareas clásicas",
      "Competencia=Lo que el niño sabe, aunque no logre mostrarlo",
      "Ejecución=Lo que el niño consigue mostrar en una tarea concreta",
      "Tarea del péndulo=Prueba piagetiana clásica, como la conservación o las tres montañas",
      "Conflicto cognitivo=Desajuste cuyo valor educativo procede de la tradición piagetiana",
      "Aprendizaje por descubrimiento=Práctica educativa con raíces piagetianas"
    ],
    g: [
      "Según Piaget, el mecanismo que explica el cambio cognitivo es la ___.|equilibración|maduración|imitación",
      "La crítica de que Piaget prestó poca atención a lo social y cultural se asocia sobre todo a ___.|Vygotsky|Baillargeon|Pascual-Leone",
      "Piaget tendía a interpretar el fracaso en una tarea como ausencia de la ___ mental correspondiente.|estructura|motivación|atención",
      "Para buscar un juguete bajo una tela, el bebé debe recordar dónde está, planificar y ___ los movimientos.|coordinar|nombrar|observar",
      "Las tareas clásicas pueden ___ lo que el niño sabe porque exigen lenguaje, memoria o motricidad.|subestimar|sobrestimar|invalidar"
    ],
    tf: [
      "Piaget presentó al niño como un receptor pasivo de la enseñanza adulta.|F|Lo presentó como constructor activo, frente a la idea del receptor pasivo y a la de un conocimiento que solo madura.",
      "Buena parte de lo que se sabe hoy sobre la teoría de la mente nació de intentar comprobar afirmaciones de Piaget.|V",
      "Una crítica a Piaget es que dejó en segundo plano el papel de las emociones y las relaciones en la cognición.|V",
      "Si un niño falla una tarea piagetiana, queda demostrado que carece de la estructura mental correspondiente.|F|La tarea puede fallar por exigir lenguaje, memoria o motricidad. Es la distinción entre competencia y ejecución."
    ],
    q: [
      "Una bebé no aparta la tela para coger su juguete escondido, aunque en otra prueba parece esperar que siga allí. ¿Qué distinción ilustra?|Competencia frente a ejecución|Asimilación frente a acomodación|Decalaje horizontal frente a vertical|Puede saber que el objeto existe y no lograr organizar la acción de buscarlo, que exige memoria y coordinación.",
      "¿Qué crítica a Piaget se apoya en que el rendimiento varía mucho según el dominio y la tarea?|Sobrevaloró la generalidad de los estadios|Infravaloró las competencias tempranas|Dejó en segundo plano lo afectivo|La variación entre dominios y tareas cuestiona que los estadios afecten por igual a todo el pensamiento.",
      "Ajustar la enseñanza al nivel del alumno es una idea educativa con raíces…|piagetianas|conductistas|nativistas|Junto al aprendizaje por descubrimiento y el valor del conflicto cognitivo, procede de la influencia de Piaget.",
      "¿Qué métodos revelaron que bebés y preescolares muestran más de lo que Piaget esperaba?|Los que no exigen respuestas verbales ni motoras|Los basados en entrevistas clínicas extensas|Los que exigen buscar y manipular objetos|Al reducir las demandas de la tarea, aparecen competencias que las pruebas clásicas ocultaban."
    ],
    inc: [
      "Sobre las aportaciones de Piaget|Se limitó a describir qué hace el niño a cada edad|Aportó el método clínico y tareas como la del péndulo|Planteó cómo se construyen el número y la causalidad|Además de describir, propuso un mecanismo de cambio: la equilibración."
    ],
    seq: [],
    cls: [
      "Valoración de Piaget|Aportación: método clínico; equilibración; niño como constructor activo|Crítica: poca atención a la cultura; lo afectivo en segundo plano; generalidad de los estadios"
    ] },
  { t: "El bebé competente: violación de expectativas y núcleo de conocimiento",
    tip: "El paradigma de violación de expectativas parte de la habituación: si el bebé mira más un suceso imposible, se infiere que tenía una expectativa. Baillargeon (1987) lo aplicó a la permanencia del objeto con el puente levadizo y Wynn (1992), al número. De ahí surgió la hipótesis del núcleo de conocimiento (Spelke y Kinzler, 2007), aunque el debate entre interpretaciones ricas y austeras sigue abierto.",
    v: [
      "Violación de expectativas=Paradigma en que mirar más un suceso imposible revela una expectativa",
      "Suceso imposible=Suceso de prueba que contradice las leyes físicas",
      "Puente levadizo=Estudio de Baillargeon (1987) con una pantalla que parecía atravesar una caja",
      "Wynn (1992)=Aplicó la violación de expectativas al número con muñecos tras una pantalla",
      "Núcleo de conocimiento=Sistemas innatos especializados en objetos, número, agentes y espacio",
      "Interpretación rica=Atribuye al bebé conocimiento conceptual a partir de su mirada",
      "Interpretación austera=Explica la mirada por procesos simples, como preferencias perceptivas",
      "Agentes=Dominio nuclear de los seres que actúan con metas"
    ],
    g: [
      "Baillargeon (1987) estudió el puente levadizo con bebés de ___ meses.|3½ y 4½|5 y 6|8 y 10",
      "A los 3½ meses, el efecto del puente levadizo apareció solo en los bebés que se ___ más rápido.|habituaban|movían|calmaban",
      "Wynn (1992) estudió a 32 bebés de ___ meses con sumas y restas de muñecos.|5|8|12",
      "En el núcleo de conocimiento, el dominio del ___ permite estimar cantidades sin contar.|número|espacio|objeto",
      "El paradigma de violación de expectativas deriva del método de ___.|habituación|condicionamiento|imitación"
    ],
    tf: [
      "Los estudios de violación de expectativas han demostrado que el bebé tiene un conocimiento conceptual de la permanencia del objeto.|F|Es una trampa típica: si la mirada refleja conocimiento conceptual o procesos más simples sigue en debate.",
      "Algunos resultados de violación de expectativas se han replicado con dificultad, y el campo respondió con estudios multilaboratorio.|V",
      "En el estudio de Wynn, los bebés miraban más tiempo el resultado posible de la suma.|F|Miraban más los resultados imposibles, tanto en la suma 1 + 1 como en la resta 2 − 1.",
      "Una explicación de que el bebé mire bien pero no busque es que la acción exige memoria de trabajo y control inhibitorio.|V"
    ],
    q: [
      "Unos bebés de 5 meses ven ocultar un muñeco tras una pantalla y añadir otro, y miran más cuando al retirarla aparece uno solo. ¿Qué estudio reproduce?|El de Wynn|El de Baillargeon|El de Wimmer y Perner|Wynn (1992) aplicó la violación de expectativas al número con sumas y restas de muñecos.",
      "Una investigadora sostiene que los bebés miran más el suceso imposible solo por diferencias perceptivas entre los sucesos. ¿Qué interpretación defiende?|La austera|La rica|La nativista|La interpretación austera atribuye la mirada a procesos más simples que el conocimiento conceptual.",
      "¿Qué ventaja principal ofrece el paradigma de violación de expectativas?|No exige buscar, señalar ni hablar|Permite estimar el CI del bebé|Elimina la preferencia por lo nuevo|El bebé solo tiene que mirar, lo que reduce las demandas motoras y verbales de las tareas clásicas.",
      "Según Spelke y Kinzler (2007), sobre los núcleos de conocimiento se construye lo posterior con ayuda de…|el lenguaje y la cultura|la imitación diferida|el refuerzo de los padres|Los núcleos son el punto de partida, y el lenguaje y la cultura ayudan a construir sobre ellos."
    ],
    inc: [
      "Sobre el núcleo de conocimiento|Incluye un dominio innato dedicado al lenguaje|Los objetos se representan como cuerpos cohesionados|El dominio del espacio sirve para orientarse|Los cuatro dominios son objetos, número, agentes y espacio. El lenguaje ayuda a construir sobre ellos, pero no es un núcleo."
    ],
    seq: [],
    cls: [
      "Interpretación de la mirada|Rica: conocimiento conceptual; el bebé sabe que el objeto es permanente|Austera: preferencia por lo nuevo; diferencias perceptivas; cambio en la cantidad de material visible"
    ] },
  { t: "La teoría de la mente",
    tip: "La teoría de la mente es la capacidad de atribuir estados mentales a uno mismo y a los demás para explicar y predecir la conducta. Tiene precursores como la atención conjunta y el juego de ficción. La falsa creencia de primer orden se consolida hacia los 4–5 años y la de segundo orden hacia los 6–7. La falsa creencia implícita en bebés (Onishi y Baillargeon, 2005) sigue en debate.",
    v: [
      "Teoría de la mente=Capacidad de atribuir estados mentales para explicar y predecir la conducta",
      "Atención conjunta=Precursor de los 9–12 meses: seguir la mirada y señalar para compartir",
      "Juego de ficción=Precursor que exige distinguir lo que algo es de lo que se finge que es",
      "Tarea de Maxi=Prueba de falsa creencia de Wimmer y Perner (1983) con un chocolate",
      "Sally y Anne=Versión con una canica de Baron-Cohen, Leslie y Frith (1985)",
      "Falsa creencia de segundo orden=Entender lo que alguien cree sobre la creencia de otro, hacia los 6–7 años",
      "Wellman et al. (2001)=Metaanálisis de 178 estudios sobre la falsa creencia",
      "Falsa creencia implícita=Comprensión temprana y no verbal de las creencias, hoy en debate"
    ],
    g: [
      "En el estudio de Baron-Cohen et al. (1985), fallaron la tarea de Sally y Anne el ___ de los niños autistas.|80 %|85 %|86 %",
      "El metaanálisis de Wellman, Cross y Watson (2001) reunió ___ estudios.|178|591|285",
      "A los 3 años, los niños rinden en la tarea de falsa creencia ___ del azar.|por debajo|por encima|en torno",
      "Onishi y Baillargeon (2005) estudiaron la falsa creencia implícita con bebés de ___ meses.|15|9|24",
      "La comprensión de la falsa creencia de segundo orden se sitúa hacia los ___ años.|6–7|4–5|3–4"
    ],
    tf: [
      "La falsa creencia de primer orden se supera de forma general a los 3 años.|F|Es una trampa típica: a los 3 años se falla por debajo del azar, y se consolida hacia los 4–5.",
      "El cambio en la falsa creencia entre los 3 y los 5 años aparece en todos los países y tipos de tarea estudiados.|V",
      "La comprensión de falsas creencias a los 15 meses está bien establecida con medidas de mirada anticipatoria.|F|Varios intentos de replicarla con mirada anticipatoria han fracasado, y la cuestión sigue abierta.",
      "La teoría de la mente se relaciona con el lenguaje y con las conversaciones familiares sobre estados mentales.|V"
    ],
    q: [
      "Lucas, de 3 años, ve que su hermana guarda galletas en una caja y sale. Su padre las cambia de sitio. Preguntado dónde buscará ella, señala el nuevo sitio. ¿Qué indica?|Responde según lo que él sabe|Domina la falsa creencia de primer orden|Ha superado la de segundo orden|A los 3 años se responde de forma sistemática según el propio conocimiento, sin separarlo de lo que cree el otro.",
      "¿Qué resultado obtuvo el estudio de Sally y Anne de Baron-Cohen, Leslie y Frith (1985)?|Fallaron casi todos los niños autistas|Fallaron casi todos los niños con Down|Todos los grupos rindieron por igual|Fallaron 16 de los 20 niños autistas, mientras que acertaron el 85 % con desarrollo típico y el 86 % con síndrome de Down.",
      "¿Por qué se habla de «teoría» de la mente?|Porque los estados mentales se infieren|Porque se adquiere con instrucción formal|Porque la formuló un único autor|Deseos, intenciones y creencias no se observan directamente: se infieren a partir de la conducta.",
      "Señalar para compartir el interés por algo, hacia los 9–12 meses, se considera…|un precursor de la teoría de la mente|una falsa creencia de primer orden|un indicio de comprensión irónica|La atención conjunta precede a la teoría de la mente explícita, igual que el juego de ficción."
    ],
    inc: [
      "Sobre la teoría de la mente|La falsa creencia de segundo orden se consolida hacia los 4–5 años|La tarea de Maxi la crearon Wimmer y Perner en 1983|Comprender la ironía es un refinamiento posterior|La de segundo orden se sitúa hacia los 6–7 años. Hacia los 4–5 se consolida la de primer orden."
    ],
    seq: [
      "Desarrollo de la teoría de la mente|Atención conjunta>Falsa creencia de primer orden>Falsa creencia de segundo orden>Comprensión de la ironía y la metedura de pata"
    ],
    cls: [] },
  { t: "Neopiagetianos y balance crítico de la teoría",
    tip: "Los neopiagetianos conservan los estadios y la construcción activa, pero los combinan con el procesamiento de la información. Pascual-Leone propuso el poder M, Case las estructuras conceptuales centrales, Fischer las habilidades dinámicas y Karmiloff-Smith la redescripción representacional. El balance es que Piaget infravaloró lo temprano y sobrevaloró la generalidad de los estadios y la universalidad del pensamiento formal, pero ninguna teoría lo ha sustituido.",
    v: [
      "Poder M=Capacidad mental creciente que limita los esquemas coordinables (Pascual-Leone)",
      "Estructuras conceptuales centrales=Redes de conceptos de grandes dominios, como número o espacio (Case)",
      "Habilidades dinámicas=Nivel que varía según el dominio, el contexto y el apoyo (Fischer)",
      "Redescripción representacional=Paso de lo implícito a formatos más explícitos (Karmiloff-Smith)",
      "Olas superpuestas=Uso simultáneo de varias estrategias que compiten (Siegler, 1996)",
      "Método microgenético=Método con el que se estudia el cambio de estrategias descrito por Siegler",
      "Velocidad de procesamiento=Factor cuyo aumento explica el desarrollo según Kail (1991)",
      "Neopiagetianos=Autores que unen ideas piagetianas y procesamiento de la información"
    ],
    g: [
      "Karmiloff-Smith propuso la redescripción representacional en ___.|1992|1998|1996",
      "Según Fischer y Bidell (1998), con ayuda una persona puede rendir en un nivel más ___ que sola.|alto|estable|general",
      "Para Case, las estructuras conceptuales progresan al crecer la capacidad de la memoria de ___.|trabajo|largo plazo|reconocimiento",
      "Kail (1991) explicó el desarrollo por el aumento de la ___ de procesamiento.|velocidad|profundidad|amplitud",
      "Según el balance actual, que el pensamiento formal sea la meta universal es una idea ___.|corregida|confirmada|matizada"
    ],
    tf: [
      "El poder M de Pascual-Leone describe cómo el conocimiento implícito se vuelve explícito.|F|Eso es la redescripción representacional de Karmiloff-Smith. El poder M limita cuántos esquemas se coordinan a la vez.",
      "La idea de Fischer de que con apoyo se rinde más conecta con la zona de desarrollo próximo.|V",
      "La secuencia ordenada de adquisiciones descrita por Piaget se mantiene en gran medida.|V",
      "Las teorías neopiagetianas han sustituido por completo a la de Piaget.|F|Ninguna teoría posterior lo ha sustituido del todo. Se combina su idea de construcción con nuevos hallazgos."
    ],
    q: [
      "Una niña resuelve un problema cuando su profesor le da pistas, pero no sola, y su nivel cambia de una materia a otra. ¿Qué propuesta lo describe mejor?|Las habilidades dinámicas de Fischer|El poder M de Pascual-Leone|La redescripción de Karmiloff-Smith|Para Fischer, el nivel no es fijo: varía con el dominio, el contexto y el apoyo recibido.",
      "Un niño de 7 años alterna, para sumar, contar con los dedos y recuperar el resultado de memoria. ¿Qué modelo lo describe?|Las olas superpuestas de Siegler|Las estructuras centrales de Case|El poder M de Pascual-Leone|Siegler mostró que los niños usan a la vez varias estrategias que compiten entre sí.",
      "Según el balance actual, la idea de estadios generales que afectan a todo el pensamiento está…|matizada|confirmada|corregida|Se matiza porque el rendimiento depende mucho del dominio y de la tarea.",
      "¿Qué tienen en común los neopiagetianos?|Unen estadios y procesamiento de la información|Rechazan la existencia de estadios evolutivos|Atribuyen el cambio solo a la cultura|Conservan estadios, niño activo y construcción, y añaden límites de procesamiento como la memoria de trabajo."
    ],
    inc: [
      "Sobre los neopiagetianos|Case propuso el poder M como capacidad mental|Fischer defendió que el nivel varía con el contexto|Karmiloff-Smith integra conocimiento temprano y construcción|El poder M es de Pascual-Leone. Case describió las estructuras conceptuales centrales."
    ],
    seq: [],
    cls: [
      "Autor neopiagetiano|Pascual-Leone: poder M; esquemas coordinables|Case: estructuras conceptuales centrales; dominios como número y espacio|Karmiloff-Smith: redescripción representacional; de lo implícito a lo explícito"
    ] }
] },

{ n: 14, t: "Desarrollo del lenguaje", cap: 6, pir: "alta", mods: [
  { t: "Componentes del lenguaje y teorías de la adquisición",
    tip: "Aprender una lengua exige dominar fonología, morfología, sintaxis, semántica y pragmática, y en todos los componentes la comprensión precede a la producción. Skinner explicó el lenguaje por refuerzo e imitación, pero no la gramática. Chomsky propuso un dispositivo innato (LAD), y Bruner respondió con el LASS: formatos interactivos en los que el adulto ajusta su ayuda al niño.",
    v: [
      "Fonología=Componente de los fonemas y su combinación, como distinguir «pato» de «gato»",
      "Morfología=Formación de palabras a partir de unidades con significado",
      "Sintaxis=Orden de las palabras en las oraciones",
      "Pragmática=Uso del lenguaje adaptado al contexto social",
      "Morfema ligado=Unidad con significado que solo aparece unida a otra, como «-ito»",
      "LAD=Dispositivo innato de adquisición del lenguaje propuesto por Chomsky",
      "LASS=Sistema de apoyo adulto a la adquisición, respuesta de Bruner a Chomsky",
      "Formatos=Rutinas repetidas y predecibles en que niño y adulto se turnan"
    ],
    g: [
      "Skinner expuso su explicación del lenguaje en «Verbal Behavior» en ___.|1957|1959|1967",
      "Chomsky criticó a Skinner en ___ argumentando que el habla que oye el niño es incompleta.|1959|1957|1983",
      "Lenneberg (1967) vinculó la adquisición a un periodo ___ ligado a la maduración cerebral.|crítico|sensible|operante",
      "Los padres suelen responder a si lo que dice el niño es ___, no a si está bien construido.|verdad|educado|claro",
      "Hablar más bajo en la consulta del médico es un ejemplo de ___.|pragmática|semántica|fonología"
    ],
    tf: [
      "En el desarrollo del lenguaje, la producción suele preceder a la comprensión.|F|Es al revés: la comprensión precede a la producción en todos los componentes.",
      "Bruner propuso el LASS como respuesta al LAD de Chomsky.|V",
      "La crítica principal al nativismo es que nombra el mecanismo sin explicar cómo funciona.|V",
      "El LASS es un dispositivo innato que contiene principios comunes a todas las lenguas.|F|Eso describe el LAD de Chomsky. El LASS es el apoyo de los adultos mediante formatos interactivos."
    ],
    q: [
      "Una madre mira cada noche con su hijo el mismo libro de animales y le pregunta «¿y esto qué es?». Para Bruner, esta rutina es…|un formato del LASS|un efecto del LAD|un refuerzo operante|Es una rutina predecible en la que niño y adulto se turnan, de modo que el niño se concentra en la palabra nueva.",
      "¿Qué problema plantea la gramática a la teoría del aprendizaje?|Los niños producen formas que no han oído|Los padres refuerzan la gramática correcta|Los niños imitan solo frases completas|Formas como «yo cabo» no pueden ser imitación, y los padres refuerzan la verdad más que la corrección.",
      "En «gatos», la «-s» es un morfema…|ligado|libre|léxico|Solo aparece unido a otro elemento. «Casa» sería un morfema libre.",
      "El ajuste de la ayuda del adulto en los formatos se emparenta con el andamiaje, propuesto por…|Wood, Bruner y Ross|Vygotsky|Chomsky y Lenneberg|Trampa típica: el andamiaje es de Wood, Bruner y Ross (1976), no de Vygotsky."
    ],
    inc: [
      "Sobre las teorías de la adquisición|Lenneberg propuso el LASS como sistema de apoyo|Skinner atribuyó el lenguaje al refuerzo|Hoy se prefiere hablar de periodos sensibles|El LASS es de Bruner (1983). Lenneberg propuso un periodo crítico ligado a la maduración cerebral."
    ],
    seq: [],
    cls: [
      "Teoría de la adquisición|Aprendizaje: Skinner; refuerzo; imitación|Nativista: Chomsky; LAD; Lenneberg|Interaccionista: Bruner; LASS; formatos"
    ] },
  { t: "Aprendizaje estadístico y habla dirigida al bebé",
    tip: "El bebé extrae regularidades del habla calculando qué sílabas suelen ir juntas. Saffran, Aslin y Newport (1996) mostraron que bebés de 8 meses segmentaban en 2 minutos un flujo sin pausas gracias a la probabilidad de transición. El habla dirigida al bebé capta su atención, pero ManyBabies 1 halló una preferencia solo moderada. El cálculo estadístico parece necesitar un contexto social.",
    v: [
      "Aprendizaje estadístico=Extracción de regularidades según qué sonidos aparecen juntos",
      "Probabilidad de transición=Frecuencia con que una sílaba va seguida de otra concreta",
      "Parte-palabras=Final de una palabra del flujo unido al principio de otra",
      "No palabras=Sílabas del flujo en un orden que nunca había aparecido",
      "Segmentación=Descubrir dónde empieza cada palabra en el habla continua",
      "Habla dirigida al bebé=Tono agudo, entonación exagerada, ritmo lento y frases cortas",
      "ManyBabies 1=Estudio de 67 laboratorios sobre la preferencia por el habla infantil",
      "Habla continua=Flujo de sonido sin pausas entre las palabras"
    ],
    g: [
      "En el estudio de Saffran, la probabilidad de transición dentro de una palabra era ___.|1,0|0,33|0,50",
      "Los bebés del estudio de Saffran escucharon el flujo de sílabas durante ___ minutos.|2|10|20",
      "ManyBabies 1 reunió a ___ bebés de 67 laboratorios.|2.329|2.441|5.947",
      "La preferencia por el habla dirigida al bebé fue mayor con estímulos en la lengua ___.|nativa|extranjera|segunda",
      "Distinguir las parte-palabras demuestra que el bebé registra la frecuencia ___ con que se siguen las sílabas.|relativa|absoluta|acústica"
    ],
    tf: [
      "En el flujo de Saffran, las palabras se separaban con pausas breves y acentos.|F|No había pausas ni acentos: la única pista era la probabilidad de transición entre sílabas.",
      "ManyBabies 1 halló una preferencia por el habla dirigida al bebé de aproximadamente la mitad del tamaño sugerido por estudios previos.|V",
      "El estudio de Saffran, Aslin y Newport resolvió cómo se adquiere la sintaxis.|F|Muestra un mecanismo potente para segmentar palabras, pero no explica cómo se adquiere la sintaxis.",
      "A medida que el niño progresa, los adultos alargan y complican sus frases.|V"
    ],
    q: [
      "Tras escuchar un flujo de sílabas, un bebé reacciona distinto a «tupiro» que a «rogola», formada por el final de una palabra y el inicio de otra. ¿Qué es «rogola»?|Una parte-palabra|Una no palabra|Una palabra|Sí había sonado, pero con menos regularidad. Distinguirla exige registrar la frecuencia relativa.",
      "¿Qué pista permitía segmentar el flujo en el estudio de Saffran?|La probabilidad de transición|La entonación de la voz sintética|Las pausas breves entre palabras|Valía 1,0 dentro de las palabras y 0,33 en las fronteras entre ellas.",
      "¿Qué tamaño de efecto halló ManyBabies 1 para la preferencia por el habla dirigida al bebé?|d de 0,35|d de 0,80|d de 0,08|Un efecto moderado, mayor en bebés de más edad y con estímulos en su lengua nativa.",
      "¿Qué implicación teórica tiene el hallazgo de Saffran?|Parte de lo atribuido a lo innato se aprende|La gramática se adquiere solo por refuerzo|El LAD explica la segmentación de palabras|Muestra un mecanismo general de aprendizaje que explica parte de lo que Chomsky atribuía al conocimiento innato."
    ],
    inc: [
      "Sobre el habla dirigida al bebé|La preferencia fue mayor en los bebés más pequeños|Usa un tono agudo y una entonación exagerada|Capta la atención y resalta las palabras clave|ManyBabies 1 halló una preferencia mayor en los bebés de más edad y con estímulos en su lengua nativa."
    ],
    seq: [],
    cls: [
      "Secuencia de prueba de Saffran|Palabra: tres sílabas de una palabra del flujo; transición interna de 1,0|No palabra: orden de sílabas nunca oído|Parte-palabra: final de una palabra y principio de otra"
    ] },
  { t: "Del llanto a la oración: periodos de adquisición",
    tip: "La secuencia es muy parecida en todos los niños, con edades aproximadas: llanto, arrullo hacia los 2 meses, balbuceo canónico hacia los 6–7, atención conjunta a los 9–12, holofrase hacia el año, explosión del vocabulario hacia los 18 meses y habla telegráfica. En el periodo preescolar llegan los morfemas gramaticales y la sobrerregularización, indicio de que el niño ha extraído una regla.",
    v: [
      "Arrullo=Sonidos suaves vocálicos que el bebé emite tranquilo, hacia los 2 meses",
      "Balbuceo canónico=Sílabas de consonante y vocal repetidas, hacia los 6–7 meses",
      "Gesto protoimperativo=Señalar para usar al adulto y conseguir algo",
      "Gesto protodeclarativo=Señalar para compartir la atención con el adulto",
      "Holofrase=Palabra aislada con el sentido de una oración completa",
      "Mapeo rápido=Aprender una palabra tras oírla pocas veces junto a su referente",
      "Sobreextensión=Usar una palabra para una categoría más amplia que la adulta",
      "Habla telegráfica=Dos o tres palabras de contenido sin artículos ni preposiciones"
    ],
    g: [
      "La explosión del vocabulario suele llegar cuando el niño produce alrededor de ___ palabras.|50|10|200",
      "Llamar «perro» solo al perro de casa es un caso de ___.|infraextensión|sobreextensión|holofrase",
      "Decir «poní» en lugar de «puse» indica que el niño ha extraído una ___.|regla|holofrase|excepción",
      "Las preguntas y las negaciones aparecen de forma aproximada hacia los ___ años.|3|5|1",
      "En el habla telegráfica, el niño conserva sobre todo nombres y ___.|verbos|artículos|preposiciones"
    ],
    tf: [
      "La sobrerregularización es un retroceso que conviene corregir pronto.|F|Indica que el niño ha extraído la regla y la aplica a todo. Más tarde aprende las excepciones.",
      "El balbuceo se va ajustando a los sonidos y al ritmo de la lengua que el bebé oye.|V",
      "En el habla telegráfica, el orden de las palabras todavía no sigue reglas.|F|El orden ya suele seguir reglas: «mamá aúpa» no equivale a «aúpa mamá».",
      "En el periodo preescolar, el niño simplifica su habla cuando se dirige a un bebé.|V"
    ],
    q: [
      "Un bebé de 11 meses señala la galleta del armario mirando a su padre hasta que se la da. ¿Qué gesto es?|Protoimperativo|Protodeclarativo|Holofrásico|Usa al adulto para conseguir algo. Señalar para compartir el interés sería protodeclarativo.",
      "Una niña de 20 meses llama «luna» a la luna, a las naranjas y a los platos redondos. ¿Qué error comete?|Sobreextensión|Infraextensión|Sobrerregularización|Usa la palabra para una categoría más amplia que la adulta. La infraextensión sería la contraria.",
      "«¡Agua!» puede significar «quiero agua» o «mira, la piscina», según el gesto y la situación. Es…|una holofrase|un mapeo rápido|un arrullo|Una sola palabra transmite el sentido de una oración completa, típico hacia el año.",
      "¿Qué caracteriza la comunicación referencial que avanza en el periodo preescolar?|Producir mensajes claros y detectar los ambiguos|Pensar sobre el lenguaje y juzgar si una frase es correcta|Seguir la mirada del adulto y señalar para compartir|Juzgar frases es conciencia metalingüística, y seguir la mirada, atención conjunta."
    ],
    inc: [
      "Sobre los periodos de adquisición|El balbuceo canónico aparece hacia los 2 meses|La primera palabra suele llegar hacia el año|La explosión del vocabulario se sitúa hacia los 18 meses|Hacia los 2 meses aparece el arrullo. El balbuceo canónico llega hacia los 6–7 meses."
    ],
    seq: [
      "Periodos del lenguaje|Llanto>Arrullo>Balbuceo canónico>Holofrase>Explosión del vocabulario>Habla telegráfica>Preguntas y negaciones"
    ],
    cls: [
      "Gesto de señalar|Protoimperativo: señalar la galleta para que se la den; pedir algo al adulto|Protodeclarativo: señalar un perro para que papá lo vea; compartir la atención"
    ] },
  { t: "El lenguaje en la niñez intermedia y la adolescencia; bilingüismo y pantallas",
    tip: "Desde los 6 años el lenguaje se perfecciona: vocabulario, oraciones complejas como las pasivas y comunicación referencial. El logro característico es la conciencia metalingüística, ligada a la lectura. En la adolescencia mejoran la ironía y la metáfora. Los bilingües alcanzan los hitos a edades comparables si se cuentan ambas lenguas, y el efecto de las pantallas es pequeño y observacional (Madigan et al., 2019).",
    v: [
      "Conciencia metalingüística=Capacidad de pensar sobre el lenguaje como objeto",
      "Comunicación referencial=Producir mensajes claros para el oyente y detectar los ambiguos",
      "Oración pasiva=Estructura como «el ratón fue perseguido por el gato»",
      "Mezcla de códigos=Usar recursos de dos lenguas en una frase, como «quiero more agua»",
      "Análisis de las partes=Deducir una palabra nueva como «deshacer» a partir de otras conocidas",
      "Ironía=Sentido implícito, como elogiar el día bajo una tormenta, que capta el adolescente",
      "RI-CLPM=Modelo que separa diferencias entre niños de cambios dentro de cada niño",
      "ASQ-3=Prueba de cribado del desarrollo usada por Madigan et al. (2019)"
    ],
    g: [
      "La conciencia metalingüística empieza a despuntar hacia los ___ años.|5|8|12",
      "Madigan et al. (2019) siguieron a ___ niños a los 24, 36 y 60 meses.|2.441|2.329|918",
      "En el estudio de Madigan, los coeficientes del tiempo de pantalla rondaban β ≈ ___.|−0,06 a −0,08|−0,35 a −0,40|−0,60 a −0,80",
      "Si se mide cada lengua por ___, el vocabulario del bilingüe puede parecer menor.|separado|completo|igual",
      "La conciencia metalingüística está muy ligada al aprendizaje de la ___.|lectura|música|geometría"
    ],
    tf: [
      "En Madigan et al. (2019), un desarrollo más lento predecía más tiempo de pantalla después.|F|La relación inversa no se observó: más pantalla predecía peores puntuaciones posteriores, no al revés.",
      "Los datos de Madigan et al. (2019) prueban que las pantallas causan retrasos del desarrollo.|F|Son datos observacionales con efectos pequeños, de modo que no prueban causalidad.",
      "Si se cuenta el vocabulario en ambas lenguas juntas, los bilingües alcanzan los hitos a edades comparables a los monolingües.|V",
      "En la adolescencia mejora mucho la comprensión de la metáfora y de los significados implícitos.|V"
    ],
    q: [
      "Iker, de 3 años, se cría en español e inglés y dice «quiero more agua». Sus padres temen que esté confundido. ¿Qué indica la evidencia?|Es una conducta normal del bilingüe|Muestra un retraso del lenguaje|Indica confusión entre las lenguas|La mezcla de códigos es normal: el niño usa los recursos de las dos lenguas que domina.",
      "¿Qué capacidad muestra un niño que explica por qué tiene gracia un chiste de palabras?|Conciencia metalingüística|Comunicación referencial|Mapeo rápido|Pensar sobre el lenguaje como objeto, juzgarlo o explicar un chiste es conciencia metalingüística.",
      "Al explicar por teléfono cómo llegar a su casa, un niño de 9 años da detalles en lugar de decir «por ahí». ¿Qué ha mejorado?|La comunicación referencial|La conciencia fonológica|La sobrerregularización|Da más información al oyente que no conoce la situación, rasgo de la niñez intermedia.",
      "¿Por qué es difícil saber si las pantallas perjudican el desarrollo?|Los que más las usan viven en otros contextos|Las pruebas de cribado no miden el lenguaje|Los efectos se observan solo en adolescentes|Las diferencias de contexto confunden la relación, y por eso Madigan et al. separaron efectos entre y dentro de cada niño."
    ],
    inc: [
      "Sobre el lenguaje adolescente|La ironía ya se domina en el periodo preescolar|Incorpora términos abstractos como «justicia»|Mejora la comprensión de los significados implícitos|La comprensión de la ironía mejora mucho en la adolescencia, de la mano del pensamiento formal."
    ],
    seq: [],
    cls: [
      "Etapa del lenguaje|Niñez intermedia: oraciones pasivas; deducir palabras por sus partes; mensajes más informativos|Adolescencia: términos abstractos como «justicia»; ironía; metáfora"
    ] }
] },

{ n: 15, t: "El yo, la identidad y el apego", cap: 7, pir: "alta", mods: [
  { t: "Diferenciación del yo, autorreconocimiento e identidad adolescente",
    tip: "El yo empieza implícito, ligado al cuerpo, y se hace explícito con el autorreconocimiento en el test de la marca hacia los 18–24 meses, seguido de las emociones autoconscientes. El autoconcepto pasa de rasgos concretos a comparaciones con los iguales y luego a rasgos abstractos. Marcia cruzó exploración y compromiso en cuatro estatus de identidad: logro, moratoria, hipotecada y difusa.",
    v: [
      "Yo implícito=Sentido temprano ligado al cuerpo y a los efectos de los propios movimientos",
      "Test de la marca=Mancha de colorete en la nariz ante un espejo para evaluar el autorreconocimiento",
      "Emociones autoconscientes=Vergüenza, orgullo y culpa, que exigen un yo evaluable",
      "Yo categórico=Descripción de uno mismo con etiquetas sociales como «soy mayor»",
      "Autoestima=Componente evaluativo del autoconcepto",
      "Logro de identidad=Estatus de quien ha explorado alternativas y se ha comprometido",
      "Moratoria=Estatus de quien explora sin haber adoptado aún un compromiso",
      "Identidad hipotecada=Compromiso adoptado sin exploración, por lo general asumido de otros"
    ],
    g: [
      "Lewis y Brooks-Gunn (1979) situaron el autorreconocimiento hacia los ___ meses.|18–24|9–12|30–36",
      "Marcia propuso su modelo de estatus de identidad en ___.|1966|1950|1979",
      "En el modelo de Marcia, la identidad difusa combina ausencia de exploración y de ___.|compromiso|autoestima|moratoria",
      "La separación-individuación, salida gradual de la fusión con la madre, es un concepto de ___.|Mahler|Marcia|Lewis",
      "Compararse con los iguales en capacidades estables es típico del autoconcepto en la niñez ___.|intermedia|temprana|primera"
    ],
    tf: [
      "Los estatus de Marcia son estadios fijos que se atraviesan en un orden invariable.|F|No son estadios fijos: se puede pasar de uno a otro o estar en estatus distintos en terrenos distintos.",
      "Las emociones autoconscientes aparecen poco después del autorreconocimiento.|V",
      "La identidad hipotecada supone explorar alternativas sin llegar a comprometerse.|F|Es una trampa típica: eso es la moratoria. La hipotecada es compromiso sin exploración.",
      "En la adolescencia, el autoconcepto integra rasgos psicológicos abstractos y contradicciones.|V"
    ],
    q: [
      "Nerea, de 18 años, duda entre tres carreras, va a jornadas de puertas abiertas y aún no ha decidido. ¿Cuál es su estatus de identidad?|Moratoria|Identidad hipotecada|Logro de identidad|Está explorando, pero todavía sin compromiso.",
      "Un chico de 17 años dice «ya veré qué hago, me da igual» y no se plantea opciones. ¿Qué estatus muestra?|Identidad difusa|Moratoria|Identidad hipotecada|Ni explora ni se compromete.",
      "En el test del espejo con marca, ¿qué conducta indica autorreconocimiento?|Tocarse la propia nariz|Tocar la nariz del reflejo|Sonreír ante el espejo|Si se toca la nariz y no el reflejo, entiende que la imagen es él mismo.",
      "«Tengo una bici roja y corro muy rápido» es una autodescripción típica de…|la etapa preescolar|la niñez intermedia|la adolescencia|En preescolar el niño se describe por rasgos concretos y observables: aspecto, posesiones y acciones."
    ],
    inc: [
      "Sobre el yo y la identidad|La autoestima es el componente descriptivo del autoconcepto|El yo categórico usa etiquetas sociales|Marcia evaluaba los estatus mediante entrevistas|La autoestima es el componente evaluativo: lo satisfecho que está el niño con lo que cree ser."
    ],
    seq: [],
    cls: [
      "Estatus de Marcia|Logro: explora y se compromete; elige tras probar varias opciones|Moratoria: explora sin compromiso; duda entre varias carreras|Hipotecada: se compromete sin explorar; asume lo que esperaban otros"
    ] },
  { t: "La teoría del apego: Bowlby, Harlow y las fases del apego",
    tip: "El apego es un vínculo afectivo intenso y duradero con quienes cuidan al niño. Harlow (1958) refutó la teoría del impulso secundario: las crías preferían la madre de felpa sin alimento. Bowlby lo concibió como un sistema conductual seleccionado por la evolución, con base segura, modelos operativos internos y cuatro fases. Schaffer y Emerson (1964) mostraron que los apegos múltiples aparecen muy pronto.",
    v: [
      "Apego=Vínculo afectivo intenso y duradero con quienes cuidan al niño",
      "Impulso secundario=Teoría que derivaba el vínculo de la reducción del hambre",
      "Contacto reconfortante=Factor que, según Harlow, explicaba la búsqueda de seguridad",
      "Base segura=Figura desde la que explorar y a la que volver ante una amenaza",
      "Modelos operativos internos=Expectativas sobre la disponibilidad de otros y la propia valía",
      "Sistema conductual=Conductas seleccionadas por la evolución para mantener cerca al protector",
      "Preapego=Fase de 0–6 semanas con señales dirigidas a cualquiera",
      "Apegos múltiples=Vínculos tempranos con padre, abuelos o hermanos (Schaffer y Emerson)"
    ],
    g: [
      "En el experimento de Harlow, las crías corrían a la madre de ___ cuando se asustaban.|felpa|alambre|madera",
      "Bowlby, de formación psicoanalítica, estuvo influido por la ___.|etología|psicometría|reflexología",
      "La fase de apego definido va aproximadamente de los 6/8 a los ___ meses.|18/24|12/14|30/36",
      "Para las teorías del aprendizaje, la madre adquiere valor de reforzador ___.|secundario|primario|negativo",
      "Según Schaffer y Emerson, la figura principal era quien respondía con más ___ a las señales del bebé.|sensibilidad|frecuencia|rapidez"
    ],
    tf: [
      "El experimento de Harlow apoyó que el apego deriva de la alimentación.|F|Lo refutó: las crías preferían la madre de felpa sin alimento, lo que destaca el contacto reconfortante.",
      "En la fase de formación del apego, el bebé prefiere a las personas conocidas, pero acepta a extraños.|V",
      "La ansiedad de separación es característica de la fase de preapego.|F|Aparece en la fase de apego definido, desde los 6/8 meses aproximadamente.",
      "El apego definido exige saber que las personas siguen existiendo aunque no se vean.|V"
    ],
    q: [
      "Una niña de 3 años acepta que su madre se vaya a trabajar tras acordar que la recogerá después de la merienda. ¿En qué fase de Bowlby está?|Relación recíproca corregida por objetivos|Apego definido con ansiedad de separación|Formación del apego con preferencia por conocidos|Desde los 2 años, aproximadamente, entiende metas y horarios del cuidador y negocia.",
      "¿Qué teoría del vínculo refutó directamente el experimento de Harlow?|La del impulso secundario|La de la base segura|La de los modelos internos|Las crías buscaban el contacto reconfortante, no a quien las alimentaba.",
      "Según Bowlby, ¿por qué se seleccionó el apego en la evolución?|Aumentaba la supervivencia de las crías|Garantizaba la alimentación del bebé|Facilitaba el aprendizaje del lenguaje|Mantener cerca a un adulto protector aumentaba la supervivencia, y llorar o sonreír sirven a ese fin.",
      "Un bebé de 10 meses protesta cuando se va su padre y se calma en brazos de su abuela. Según Schaffer y Emerson (1964), ¿qué refleja?|Apegos múltiples tempranos|Un apego inseguro con la madre|Una fase de preapego tardía|Muchos bebés formaban muy pronto apegos con el padre, los abuelos o los hermanos, no solo con la madre."
    ],
    inc: [
      "Sobre la teoría de Bowlby|El vínculo aparece completo desde el nacimiento|La figura de apego funciona como refugio|El niño construye modelos operativos internos|Bowlby defendió que el vínculo se forma de manera gradual, en fases."
    ],
    seq: [
      "Fases del apego de Bowlby|Preapego>Formación del apego>Apego definido>Relación recíproca corregida por objetivos"
    ],
    cls: [] },
  { t: "La Situación Extraña y los tipos de apego",
    tip: "La Situación Extraña de Ainsworth et al. (1978) consta de 8 episodios breves con separaciones y reuniones, y el apego se clasifica sobre todo por la conducta del bebé en las reuniones. Hay tres tipos organizados, B seguro, A evitativo y C ambivalente, y el D desorganizado, añadido por Main y Solomon (1990). Según Madigan et al. (2023), el 51,6 % de los bebés es seguro y el 23,5 % desorganizado.",
    v: [
      "Situación Extraña=Procedimiento de 8 episodios con separaciones y reuniones (Ainsworth et al., 1978)",
      "Apego seguro (B)=En la reunión busca contacto, se calma y vuelve a jugar",
      "Apego evitativo (A)=Poca protesta y, en la reunión, ignora o evita al cuidador",
      "Apego ambivalente (C)=Angustia intensa y, en la reunión, busca y rechaza al cuidador a la vez",
      "Apego desorganizado (D)=Conductas contradictorias sin estrategia coherente ante el estrés",
      "Cuidado sensible=Cuidado disponible que se asocia al apego seguro",
      "Disponibilidad inconsistente=Cuidado asociado al apego ambivalente o resistente",
      "Variación intracultural=Diferencias dentro de cada cultura, unas 1,5 veces mayores que entre culturas"
    ],
    g: [
      "Cada episodio de la Situación Extraña dura unos ___ minutos.|3|10|1",
      "La categoría D la añadieron Main y Solomon en ___.|1990|1978|1988",
      "En el metaanálisis de Madigan et al. (2023), el apego evitativo supone el ___.|14,7 %|10,2 %|23,5 %",
      "Van IJzendoorn y Kroonenberg hallaron más apego ambivalente en Israel y ___.|Japón|Alemania|Estados Unidos",
      "La muestra original de Baltimore daba alrededor de un ___ de bebés seguros.|70 %|50 %|90 %"
    ],
    tf: [
      "Un bebé que llora mucho al quedarse solo debe clasificarse como inseguro.|F|Es una trampa típica: se clasifica por la conducta en la reunión. Puede llorar mucho y ser seguro.",
      "La categoría desorganizada formaba parte del esquema original de Ainsworth.|F|La añadieron Main y Solomon (1990) para los bebés que no encajaban en A, B ni C.",
      "Los apegos A y C son estrategias organizadas, aunque inseguras.|V",
      "Madigan et al. (2023) observaron menos evitación en las cohortes más recientes.|V"
    ],
    q: [
      "En la Situación Extraña, Hugo apenas protesta cuando su madre sale y, al volver ella, sigue jugando y le da la espalda. ¿Qué apego sugiere?|Evitativo (A)|Ambivalente (C)|Desorganizado (D)|Poca protesta y evitación del cuidador en la reunión definen el tipo A.",
      "Al volver su padre, una bebé se acerca a él caminando de espaldas y luego se queda paralizada. ¿Qué apego sugiere?|Desorganizado (D)|Ambivalente (C)|Evitativo (A)|Las conductas contradictorias o extrañas, sin estrategia coherente, definen el tipo D.",
      "Según Madigan et al. (2023), ¿cuál es el segundo tipo de apego más frecuente en el mundo?|El desorganizado|El evitativo|El ambivalente|Tras el seguro (51,6 %) va el desorganizado (23,5 %), por delante del evitativo (14,7 %).",
      "¿Qué concluyeron Van IJzendoorn y Kroonenberg (1988) sobre la variación del apego?|Era mayor dentro de las culturas que entre ellas|Era mayor entre culturas que dentro de ellas|Era igual dentro y entre las culturas|La variación dentro de cada cultura era aproximadamente 1,5 veces mayor que entre culturas."
    ],
    inc: [
      "Sobre la Situación Extraña|Un apego inseguro equivale a un trastorno|El D se asocia con un cuidador atemorizante o con maltrato|Se diseñó para bebés de alrededor de un año|Un apego inseguro no es un trastorno. A y C son estrategias organizadas, aunque inseguras."
    ],
    seq: [],
    cls: [
      "Tipo de apego|B seguro: busca contacto en la reunión; se calma y vuelve a jugar|A evitativo: apenas protesta; ignora al cuidador al volver|C ambivalente: angustia intensa; busca y rechaza al cuidador a la vez"
    ] },
  { t: "Apego, privación y recuperación",
    tip: "El apego inseguro se asocia con más problemas externalizantes, pero con un efecto pequeño-moderado (Fearon et al., 2010): es un factor de riesgo, no un destino. La Entrevista de Apego Adulto predice el apego del hijo, aunque queda una brecha de transmisión. Los estudios ERA y BEIP muestran que la privación institucional temprana deja huella, que el momento importa y que la recuperación es amplia.",
    v: [
      "Problemas externalizantes=Conducta desafiante y agresividad, asociadas al apego inseguro",
      "Entrevista de Apego Adulto=Clasifica cómo narra un adulto sus propias experiencias de vínculo",
      "Brecha de transmisión=Parte de la relación entre generaciones que la sensibilidad no explica",
      "Hospitalismo=Efectos de la crianza institucional descritos por Spitz",
      "ERA=Estudio de niños de orfanatos rumanos adoptados por familias británicas",
      "BEIP=Ensayo aleatorizado de acogida familiar frente a institución en Bucarest",
      "Compromiso social desinhibido=Irse con cualquier desconocido sin reparo",
      "Estudio NICHD=Estudio longitudinal sobre el cuidado no materno y el apego"
    ],
    g: [
      "Fearon et al. (2010) hallaron un efecto del apego inseguro sobre los problemas externalizantes de d ≈ ___.|0,31|0,08|0,80",
      "En el ERA, quienes salieron antes de los ___ meses eran indistinguibles de los adoptados sin privación.|6|24|18",
      "En el BEIP se asignaron al azar ___ niños institucionalizados.|136|58|918",
      "A los 18 años, el grupo de acogida del BEIP superaba al institucionalizado en ___ puntos de CI.|9|5|15",
      "En el ERA, el ___ % del grupo con más de 6 meses de privación no tuvo problemas de salud mental.|21|51|8"
    ],
    tf: [
      "En el estudio NICHD, el cuidado no materno predecía por sí solo un apego inseguro.|F|El riesgo aparecía sobre todo cuando se combinaba con una baja sensibilidad de la madre.",
      "En el ERA, el CI de los niños con más de 6 meses de privación se recuperó hasta valores normales.|V",
      "El BEIP es un caso excepcional de ensayo aleatorizado en el estudio de la privación.|V",
      "La sensibilidad del cuidador explica por completo la transmisión intergeneracional del apego.|F|Solo explica una parte. Lo que queda sin explicar se llama brecha de transmisión."
    ],
    q: [
      "Ana fue adoptada por una familia británica tras pasar sus primeros 4 meses en un orfanato rumano muy deficiente. Según el ERA, ¿qué es lo más probable?|Que sea indistinguible de otros adoptados|Que presente síntomas cuasiautistas persistentes|Que muestre compromiso social desinhibido|Quienes salieron antes de los 6 meses eran prácticamente indistinguibles de adoptados británicos sin privación.",
      "En el BEIP, ¿cuándo fueron mayores las ganancias de la acogida familiar?|Cuanto antes, sobre todo antes de los 24 meses|Solo si se produjo después de los 42 meses|Igual con independencia de la edad de salida|Las ganancias fueron mayores cuanto antes se produjo la acogida, sobre todo antes de los 24 meses.",
      "¿Cómo debe interpretarse el efecto hallado por Fearon et al. (2010)?|Como un factor de riesgo entre muchos|Como un predictor casi determinante|Como un efecto nulo tras los controles|Con d de 0,31, el apego importa, pero es un factor de riesgo entre muchos, no un destino.",
      "¿Qué concepto apoyan los estudios ERA y BEIP, aunque sin entenderlo como rígido?|Los periodos sensibles|El impulso secundario|La brecha de transmisión|El momento importa, pero la recuperación es amplia en muchos niños y la variabilidad es enorme."
    ],
    inc: [
      "Sobre los estudios de privación|En el BEIP, el momento de la acogida no influyó en el CI|El ERA siguió a los adoptados británicos hasta la adultez joven|La variabilidad en la recuperación entre los niños es enorme|A los 42 meses, salir antes de los 18 meses daba un CI de unos 94, frente a unos 89 al salir entre los 18 y los 24."
    ],
    seq: [],
    cls: [
      "Estudio de privación|ERA: adopción en el Reino Unido; Sonuga-Barke et al. (2017); corte en los 6 meses|BEIP: ensayo aleatorizado; Nelson et al. (2007); acogida familiar en Bucarest"
    ] }
] },

{ n: 16, t: "Temperamento, moral y sociabilidad", cap: 7, pir: "alta", mods: [
  { t: "El temperamento",
    tip: "El temperamento son diferencias individuales tempranas, en parte biológicas, en reactividad y autorregulación, relativamente estables pero modulables por la experiencia. Thomas y Chess (NYLS) describieron los perfiles fácil, difícil y lento en reaccionar, y la idea clave de bondad de ajuste. Rothbart propuso surgencia, afectividad negativa y control esforzado, Kagan distinguió inhibidos y desinhibidos, y Buss y Plomin, el modelo EAS.",
    v: [
      "Temperamento=Diferencias tempranas, en parte biológicas, en reactividad y autorregulación",
      "NYLS=Estudio longitudinal de Thomas y Chess iniciado en 1956",
      "Bondad de ajuste=Encaje entre el temperamento del niño y las exigencias del entorno",
      "Niño difícil=Hábitos irregulares, reacciones intensas y negativas, adaptación lenta",
      "Lento en reaccionar=Poco activo, reacciones suaves y algo negativas, se adapta despacio",
      "Control esforzado=Inhibir una respuesta dominante, focalizar la atención y planificar",
      "Surgencia=Actividad, búsqueda de estímulos y afecto positivo (Rothbart)",
      "Niño inhibido=Ante lo desconocido se retrae, calla y busca al cuidador (Kagan)"
    ],
    g: [
      "El NYLS evaluó ___ dimensiones del temperamento mediante entrevistas a los padres.|9|3|5",
      "Según Thomas y Chess, el perfil fácil supone alrededor del ___ de los niños.|40 %|10 %|15 %",
      "En el NYLS, alrededor del ___ de los niños no encajaba en ningún perfil.|35 %|15 %|10 %",
      "El modelo EAS de Buss y Plomin incluye emocionalidad, actividad y ___.|sociabilidad|surgencia|ritmicidad",
      "En el modelo de Rothbart, el control esforzado conecta con las funciones ___.|ejecutivas|motoras|sensoriales"
    ],
    tf: [
      "Según Thomas y Chess, un temperamento difícil predice por sí mismo una mala adaptación.|F|Lo que predice la adaptación es la bondad de ajuste entre el temperamento y las exigencias del entorno.",
      "El temperamento es relativamente estable, pero la experiencia y la crianza lo modulan.|V",
      "El control esforzado madura sobre todo a partir de los años preescolares.|V",
      "Las tipologías de Jung forman parte de la investigación empírica actual sobre el temperamento infantil.|F|La investigación actual se apoya en dimensiones medidas con cuestionarios y observación."
    ],
    q: [
      "Marco tarda en adaptarse a lo nuevo. Su tutora le anticipa los cambios y le deja observar antes de participar, y se integra. ¿Qué concepto ilustra?|La bondad de ajuste|El control esforzado|La desinhibición|Su temperamento no cambia. Cambia el encaje entre ese temperamento y lo que le exige el entorno.",
      "¿Qué autor distinguió entre niños inhibidos y desinhibidos ante lo desconocido?|Kagan|Rothbart|Thomas|Kagan halló cierta estabilidad en los extremos, aunque muchos niños cambiaban con el tiempo.",
      "En el modelo de Rothbart, el miedo, la frustración y la dificultad para calmarse forman parte de…|la afectividad negativa|la surgencia|el control esforzado|La surgencia agrupa actividad y afecto positivo, y el control esforzado, la inhibición y la atención.",
      "¿Qué porcentaje aproximado de niños clasificaron Thomas y Chess como difíciles?|10 %|40 %|35 %|El 40 % eran fáciles, el 15 % lentos en reaccionar y el 35 % no clasificables."
    ],
    inc: [
      "Sobre el temperamento|El perfil lento en reaccionar supone el 40 % de los niños|Kagan halló cierta estabilidad en los extremos|El NYLS empezó en 1956 con unos 133 niños|El 40 % corresponde al perfil fácil. El lento en reaccionar ronda el 15 %."
    ],
    seq: [],
    cls: [
      "Perfil de Thomas y Chess|Fácil: hábitos regulares; buen humor; adaptación rápida|Difícil: hábitos irregulares; reacciones intensas y negativas|Lento en reaccionar: poco activo; reacciones suaves; adaptación lenta"
    ] },
  { t: "El desarrollo moral",
    tip: "Piaget (1932) describió el paso de la moral heterónoma, que juzga por las consecuencias, a la autónoma, que atiende a las intenciones. Kohlberg clasificó el razonamiento ante dilemas como el de Heinz en tres niveles y seis estadios: importa la justificación, no la respuesta. Colby et al. (1983) confirmaron el orden sin saltos. Gilligan opuso la ética del cuidado y Turiel distinguió los dominios moral, convencional y personal.",
    v: [
      "Moral heterónoma=Reglas impuestas e inmutables, gravedad juzgada por las consecuencias",
      "Moral autónoma=Reglas como acuerdos modificables, con atención a las intenciones",
      "Dilema de Heinz=Historia sobre robar un medicamento para salvar a la esposa",
      "Nivel preconvencional=Estadios de castigo y obediencia y de hedonismo instrumental",
      "Nivel postconvencional=Estadios de contrato social y de principios éticos universales",
      "Ética del cuidado=Moral centrada en las relaciones y la responsabilidad (Gilligan)",
      "Dominio convencional=Normas sociales arbitrarias, como llamar de usted a la profesora",
      "Colby et al. (1983)=Longitudinal de 20 años con 58 varones que apoyó a Kohlberg"
    ],
    g: [
      "Piaget estudió el juicio moral a partir de las reglas del juego de las ___.|canicas|cartas|damas",
      "En el estudio de Colby et al. (1983), el estadio ___ no apareció en la muestra.|6|5|4",
      "«Un buen marido haría lo posible por ella» corresponde al estadio ___ de Kohlberg.|3|2|4",
      "Gilligan (1982) contrapuso la ética del cuidado a la ética de la ___.|justicia|autonomía|obediencia",
      "Para Turiel, elegir la propia ropa pertenece al dominio ___.|personal|convencional|moral"
    ],
    tf: [
      "En el dilema de Heinz, el estadio se determina por si la persona responde que debe robar o no.|F|Es una trampa típica: lo que importa es el razonamiento que justifica la respuesta.",
      "Según Colby et al. (1983), los estadios de Kohlberg se sucedían en el orden previsto y sin saltos.|V",
      "En la moral heterónoma, romper una taza a propósito se juzga peor que romper quince sin querer.|F|En la heterónoma se juzga por las consecuencias: romper quince tazas sin querer parece peor.",
      "Las diferencias de sexo halladas después en el razonamiento moral parecen pequeñas.|V"
    ],
    q: [
      "«Heinz debe robarlo porque las leyes deben proteger derechos como la vida». ¿Qué estadio refleja?|5, contrato social|4, ley y orden|6, principios universales|La justificación apela a que las leyes protejan derechos, propio del contrato social.",
      "«No debe robar porque irá a la cárcel». ¿A qué estadio corresponde?|1, castigo y obediencia|2, hedonismo instrumental|4, ley y orden|Se justifica por evitar el castigo, nivel preconvencional.",
      "Un niño de preescolar dice que pegar estaría mal aunque la maestra lo permitiera, pero que hablar sin levantar la mano solo está mal si hay una norma. ¿Qué propuesta apoya?|Los dominios de Turiel|La heteronomía de Piaget|El estadio 1 de Kohlberg|Distingue el dominio moral del convencional, lo que sugiere una comprensión moral temprana mayor de la supuesta.",
      "¿Qué crítica hizo Gilligan (1982) a Kohlberg?|Partió de muestras masculinas y de la justicia|Ignoró el papel de los modelos y del castigo|Situó el estadio 6 demasiado pronto|Kohlberg privilegió una ética de la justicia frente a una ética del cuidado centrada en las relaciones."
    ],
    inc: [
      "Sobre el desarrollo moral|Según Colby, el estadio 5 era frecuente en la adolescencia|Turiel distinguió los dominios moral, convencional y personal|En la moral autónoma las reglas pueden cambiarse por acuerdo|El estadio 5 era poco frecuente y solo aparecía en la adultez."
    ],
    seq: [
      "Estadios de Kohlberg|Castigo y obediencia>Hedonismo instrumental>Buen chico, buena chica>Ley y orden>Contrato social>Principios éticos universales"
    ],
    cls: [
      "Nivel de Kohlberg|Preconvencional: castigo y obediencia; hedonismo instrumental|Convencional: buen chico, buena chica; ley y orden|Postconvencional: contrato social; principios éticos universales"
    ] },
  { t: "Agresividad, estilos parentales y castigo físico",
    tip: "La agresión puede ser instrumental u hostil, y física o relacional. La física alcanza su máximo hacia los 2 años y luego disminuye, mientras gana peso la relacional. El modelo de coerción de Patterson explica cómo la familia refuerza la agresión. Maccoby y Martin cruzaron afecto y exigencia en cuatro estilos, y el autoritativo se asocia con mejores resultados en contextos occidentales.",
    v: [
      "Agresión instrumental=El daño es un medio para conseguir algo",
      "Agresión hostil=Conducta cuyo objetivo es precisamente dañar a otro",
      "Agresión relacional=Daño a las relaciones o la reputación mediante exclusión o rumores",
      "Modelo de coerción=Ciclo en que ceder ante los gritos del niño refuerza su agresividad (Patterson)",
      "Estilo autoritativo=Afecto alto y exigencia alta, también llamado democrático",
      "Estilo autoritario=Afecto bajo con exigencia alta",
      "Estilo permisivo=Afecto alto y exigencia baja, también llamado indulgente",
      "Estilo negligente=Afecto bajo con exigencia baja"
    ],
    g: [
      "La agresión física alcanza su máximo hacia los ___ años.|2|5|8",
      "Baumrind describió tres estilos, y Maccoby y Martin añadieron un cuarto en ___.|1983|1971|1966",
      "En el modelo de coerción, el adulto que cede queda reforzado por el ___ que logra.|silencio|respeto|control",
      "En Gershoff y Grogan-Kaylor (2016), el efecto medio de los azotes rondaba d ≈ ___.|0,33|0,08|0,80",
      "En contextos occidentales, el estilo ___ se asocia con los peores resultados.|negligente|autoritario|permisivo"
    ],
    tf: [
      "El estilo permisivo combina afecto alto y exigencia alta.|F|Es una trampa típica: el permisivo tiene exigencia baja. Afecto y exigencia altos definen el autoritativo.",
      "Con la edad, la agresión relacional gana peso frente a la física.|V",
      "La relación entre estilo parental e hijo es unidireccional: la crianza moldea al hijo, pero no al revés.|F|Es bidireccional: el temperamento del hijo también influye en cómo lo crían.",
      "En Gershoff y Grogan-Kaylor (2016), los efectos longitudinales del castigo físico eran similares a los transversales.|V"
    ],
    q: [
      "Ante una nota baja, un padre dice: «Castigado sin móvil un mes, y no quiero excusas». ¿Qué estilo refleja?|Autoritario|Autoritativo|Negligente|Exigencia alta con afecto bajo. El autoritativo diría «vamos a ver qué pasó y cómo organizas el estudio».",
      "Un niño empuja a otro para quitarle un juguete. ¿Qué tipo de agresión es?|Instrumental|Hostil|Relacional|El daño es un medio para conseguir algo. En la hostil, el objetivo es dañar.",
      "Un niño grita al recibir una orden, su madre cede para que pare, y ambos escalan con el tiempo. ¿Qué modelo lo explica?|El de coerción de Patterson|El de Bandura, Ross y Ross|El de Maccoby y Martin|Ceder refuerza la conducta agresiva del niño, y el silencio logrado refuerza al adulto.",
      "¿Qué limita las conclusiones del metaanálisis de Gershoff y Grogan-Kaylor (2016)?|Son datos observacionales|Incluyó muy pocos niños|Solo halló efectos transversales|No prueban causalidad por sí solos, aunque su coherencia apunta a que el castigo físico se asocia con daños."
    ],
    inc: [
      "Sobre los estilos parentales|El estilo autoritativo combina afecto bajo y exigencia alta|Maccoby y Martin usaron las dimensiones afecto y exigencia|El significado del control estricto puede variar según la cultura|Afecto bajo y exigencia alta definen el autoritario. El autoritativo tiene ambos altos."
    ],
    seq: [],
    cls: [
      "Tipo de agresión|Instrumental: empujar para quitar un juguete; el daño es un medio|Hostil: pegar a quien se ha reído de uno; el objetivo es dañar"
    ] },
  { t: "Motivación de logro, autocontrol y relaciones con iguales",
    tip: "Dweck distinguió la mentalidad fija de la de crecimiento, pero su relación con el rendimiento es débil y las intervenciones tienen efectos muy pequeños. En el test de la golosina, la réplica de Watts, Duncan y Quan (2018) halló la mitad de la asociación original, que se reducía en dos tercios al controlar el contexto familiar. La sociometría de Coie y Dodge distingue populares, rechazados, ignorados, controvertidos y promedio.",
    v: [
      "Mentalidad fija=Creencia de que la capacidad es una cantidad dada",
      "Mentalidad de crecimiento=Creencia de que la capacidad mejora con esfuerzo y estrategias",
      "Test de la golosina=Comer un dulce ya o esperar y recibir dos (Mischel)",
      "Sociometría=Preguntar a cada alumno con quién le gusta y no le gusta jugar",
      "Niño rechazado=Pocas nominaciones positivas y muchas negativas",
      "Niño controvertido=Muchas nominaciones positivas y muchas negativas",
      "Niño ignorado=Pocas nominaciones de ambos tipos, suele mejorar al cambiar de grupo",
      "Adopción de perspectivas=Coordinar el propio punto de vista con el ajeno y el del grupo (Selman)"
    ],
    g: [
      "Sisk et al. (2018) hallaron una relación ___ entre mentalidad y rendimiento.|débil|fuerte|negativa",
      "Watts, Duncan y Quan (2018) replicaron el test de la golosina con ___ niños.|918|552|2.441",
      "En esa réplica, casi todo el efecto lo marcaba llegar a esperar ___ segundos.|20|60|5",
      "Yeager et al. (2019) hallaron efectos concentrados en el alumnado de ___ rendimiento.|bajo|alto|medio",
      "Tras un fracaso, los niños elogiados por su ___ persistían menos.|inteligencia|esfuerzo|estrategia"
    ],
    tf: [
      "En la réplica de Watts et al. (2018), la asociación entre esperar y el rendimiento a los 15 años duplicó la original.|F|Fue la mitad de la original y se redujo en dos tercios al controlar el contexto familiar.",
      "En la cohorte de Dunedin, un menor autocontrol infantil se asociaba con peor salud y más delincuencia en la adultez.|V",
      "En sociometría, el niño ignorado es el que más preocupa por sus problemas posteriores.|F|El que más preocupa es el rechazado. El ignorado suele mejorar al cambiar de grupo.",
      "Macnamara y Burgoyne (2023) atribuyen buena parte de los efectos de la mentalidad de crecimiento a problemas de diseño y sesgos.|V"
    ],
    q: [
      "En una clase, Sara recibe muchas nominaciones como compañera de juego favorita y también muchas como compañera no deseada. ¿Qué categoría tiene?|Controvertida|Popular|Rechazada|Muchas nominaciones positivas y muchas negativas definen la categoría controvertida.",
      "¿Qué conclusión se mantiene tras la réplica del test de la golosina?|El autocontrol importa, pero la prueba no basta|Esperar a los 4 años garantiza el éxito adulto|El contexto familiar no influye en la espera|El autocontrol infantil predice resultados adultos (Moffitt et al., 2011), pero una prueba breve no lo predice todo.",
      "Un profesor dice a una alumna «qué lista eres» tras un buen examen. Según Mueller y Dweck (1998), ¿qué es esperable tras un fracaso?|Que persista menos y rinda peor|Que persista más que si la elogiaran por esfuerzo|Que su rendimiento no se vea afectado|Tras un fracaso, los elogiados por su inteligencia persistían menos y rendían peor.",
      "Según Selman, el avance en la adopción de perspectivas se relaciona con…|la teoría de la mente|el control esforzado|la moral heterónoma|Coordinar varios puntos de vista se apoya en atribuir estados mentales a los demás."
    ],
    inc: [
      "Sobre la mentalidad de crecimiento|Las intervenciones tienen un efecto medio grande|Dweck distinguió mentalidad fija y de crecimiento|Su relación con el rendimiento es débil (r de 0,10)|El efecto medio de las intervenciones es muy pequeño: d de 0,08 (Sisk et al., 2018)."
    ],
    seq: [],
    cls: [
      "Tipo de elogio|A la inteligencia: «qué lista eres»; mentalidad fija|Al esfuerzo: «cuánto te has esforzado»; mentalidad de crecimiento"
    ] }
] }
);

SP.register(window.COURSE);
})({});
