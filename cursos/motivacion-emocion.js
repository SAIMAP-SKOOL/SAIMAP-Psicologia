(function(window){
// SAIMAP Psicología · Motivación y Emoción
// Contenido alineado con el temario SAIMAP «Motivación y Emoción» (v1.0, octubre de 2026).
window.COURSE = {
  id: "motivacion-emocion",
  title: "Motivación y Emoción",
  short: "Motivación y Emoción",
  area: "Procesos psicológicos básicos",
  rutas: { grado: { curso: 1 }, pir: { bloque: "Procesos básicos" } },
  temario: "Motivacion-y-Emocion_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "La motivación y sus determinantes", from: 1, to: 4 },
    { n: 2, t: "Teorías cognitivas y humanistas de la motivación", from: 5, to: 6 },
    { n: 3, t: "Los motivos", from: 7, to: 10 },
    { n: 4, t: "Psicología de la emoción", from: 11, to: 14 },
    { n: 5, t: "Aplicaciones de la motivación y la emoción", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Motivación y Emoción · Unidades 1–4
window.COURSE.units.push(
{ n: 1, t: "Introducción a la motivación y la emoción", cap: 1, pir: "media", mods: [
  { t: "Concepto de motivación y sus parámetros",
    tip: "La motivación es el conjunto de procesos que dan energía y dirección a la conducta. No se observa: es un constructo hipotético que se infiere de lo que el organismo hace, dice y experimenta. Se describe con cuatro parámetros (activación, dirección, intensidad y persistencia), y se distingue la conducta instrumental, que acerca a la meta, de la consumatoria, que satisface el motivo.",
    v: [
      "Motivación=Procesos que dan energía y dirección a la conducta",
      "Constructo hipotético=Concepto no observable que se infiere a partir de indicadores",
      "Activación=Parámetro que indica si la conducta llega a iniciarse",
      "Dirección=Parámetro que indica hacia qué meta se orienta la conducta entre varias",
      "Intensidad=Energía y esfuerzo con que se realiza la conducta",
      "Persistencia=Mantenimiento de la conducta en el tiempo, sobre todo ante obstáculos",
      "Conducta instrumental=Conducta apetitiva que acerca al organismo a la meta",
      "Conducta consumatoria=Conducta que satisface el motivo y cierra el ciclo"
    ],
    g: [
      "La palabra motivación procede del latín movere, que significa «___».|mover|elegir|desear",
      "La activación y la intensidad forman el componente ___ de la motivación.|energético|direccional|consumatorio",
      "La intensidad que se mantiene en un nivel sostenido se denomina ___.|tónica|fásica|refleja",
      "Un motivo es una disposición concreta; la ___ es el proceso que resulta de su interacción con la situación.|motivación|emoción|activación",
      "Seguir intentando un problema tras varios fallos ilustra el parámetro de ___.|persistencia|intensidad|dirección"
    ],
    tf: [
      "La motivación es un constructo hipotético que se infiere a partir de indicadores.|V",
      "La persistencia expresa a lo largo del tiempo tanto el componente energético como el direccional.|V",
      "Preparar un examen es un ejemplo de conducta consumatoria, porque se orienta a la meta de aprobar.|F|Preparar el examen acerca a la meta: es conducta instrumental. La consumatoria satisface el motivo (recibir la nota).",
      "Elegir estudiar en lugar de ver una serie ilustra el parámetro de intensidad.|F|Elegir una meta entre varias posibles es la dirección; la intensidad es la energía o el esfuerzo invertidos."
    ],
    q: [
      "Marta corre un día a ritmo suave y otro al máximo, siempre hacia la misma meta. ¿Qué parámetro varía?|La intensidad|La dirección|La activación|Cambia la energía y el esfuerzo invertidos, no la meta elegida ni el inicio de la conducta.",
      "Un pico breve de energía ante un estímulo concreto corresponde a una intensidad…|fásica|tónica|persistente|La intensidad fásica son picos breves ante un estímulo; la tónica, un nivel sostenido.",
      "Una rata recorre un laberinto buscando comida y, al encontrarla, come. ¿Cómo se clasifican ambas conductas, en ese orden?|Instrumental y consumatoria|Consumatoria e instrumental|Apetitiva y refleja|Buscar acerca a la meta (instrumental o apetitiva); comer satisface el motivo y cierra el ciclo (consumatoria).",
      "¿Qué diferencia hay entre motivo y motivación?|El motivo es una disposición concreta|El motivo es un proceso más amplio|No hay diferencia conceptual entre ambos|El motivo (hambre, logro) es una disposición; la motivación resulta de su interacción con la situación."
    ],
    inc: [
      "Sobre los parámetros de la motivación|La dirección forma parte del componente energético|La activación se refiere a si la conducta se inicia|La persistencia se observa sobre todo ante obstáculos|La dirección es el componente direccional; el energético lo forman la activación y la intensidad."
    ],
    seq: [],
    cls: [
      "Componente al que pertenece cada parámetro|Energético: activación; intensidad|Direccional: dirección"
    ] },
  { t: "Motivación, cognición y emoción: la cognición como elemento de unión",
    tip: "Motivación y emoción comparten funciones: ambas energizan y dirigen la conducta. Se diferencian en duración, desencadenante, función y componentes. La cognición (expectativas, planes, valoraciones) las conecta, y la relación es bidireccional: la motivación también modifica la atención, la memoria y la persistencia.",
    v: [
      "Emoción=Respuesta breve ante un acontecimiento evaluado como relevante",
      "Cognición=Expectativas, planes y valoraciones que conectan motivación y emoción",
      "Expectativa=Creencia sobre lo que se puede conseguir, como aprobar",
      "Teorías de la valoración=Sitúan la evaluación cognitiva en el origen de la emoción",
      "Tendencia de acción=Componente emocional que prepara una respuesta concreta",
      "Atención selectiva=Efecto de la motivación sobre la cognición: se atiende a lo relevante para la meta",
      "Relación bidireccional=La motivación modifica la cognición y la cognición, la motivación",
      "Emociones como motivos=Fuentes breves de energía y dirección: el miedo empuja a evitar"
    ],
    g: [
      "Las emociones son breves, de ___, mientras que una meta vital puede mantenerse años.|segundos o minutos|horas o días|semanas o meses",
      "Según las teorías de la ___, la evaluación cognitiva está en el origen de la emoción.|valoración|activación|homeostasis",
      "La función central de la emoción es preparar una respuesta rápida y ___.|comunicarla|prolongarla|inhibirla",
      "Las teorías de expectativa-valor, autoeficacia y atribución desarrollan la influencia de la cognición sobre la ___.|motivación|percepción|memoria",
      "El miedo empuja a evitar y el interés, a ___.|explorar|descansar|competir"
    ],
    tf: [
      "Motivación y emoción comparten la función de energizar y dirigir la conducta.|V",
      "La motivación depende de la cognición, aunque no modifica a su vez procesos como la atención o la memoria.|F|La relación es bidireccional: una persona motivada atiende de forma selectiva y recuerda mejor lo que le interesa.",
      "Los desencadenantes típicos de la emoción son las necesidades, las metas y los incentivos.|F|Esos desencadenan la motivación; la emoción surge ante un acontecimiento evaluado como relevante.",
      "Si motivación y emoción son procesos distintos o dos caras de un mismo sistema es una cuestión en debate.|V"
    ],
    q: [
      "Dos estudiantes suspenden el mismo examen: uno siente vergüenza y otro, enfado. Según el temario, ¿qué explica mejor la diferencia?|Cómo atribuye cada uno el suspenso|La nota concreta que ha obtenido cada uno|El nivel de activación fisiológica previo|El mismo suspenso produce vergüenza si se atribuye a falta de capacidad y enfado si se atribuye a un examen injusto.",
      "¿Qué rasgo es propio de la motivación y no de la emoción?|Puede mantenerse días o años|Surge ante un acontecimiento relevante|Incluye una expresión comunicativa|La motivación puede durar mucho (una meta vital); la emoción es breve, se desencadena por un acontecimiento y se expresa.",
      "En una sala de escape, la alegría tras hallar una pista hace que el grupo redoble el esfuerzo. ¿Qué relación ilustra?|Emoción que reajusta la motivación|Motivación que reajusta la cognición|Cognición que genera una emoción|La emoción que sigue a cada hallazgo vuelve a ajustar el esfuerzo: la emoción actúa sobre la motivación.",
      "¿Qué cuatro componentes se atribuyen a la emoción?|Experiencia, fisiología, expresión y acción|Activación, dirección, intensidad y persistencia|Necesidad, impulso, hábito y refuerzo|La emoción incluye experiencia, fisiología, expresión y tendencia de acción; activación, dirección, etc., son parámetros motivacionales."
    ],
    inc: [
      "Sobre la cognición como elemento de unión|La motivación no influye en la memoria ni en la atención|Las expectativas influyen en el esfuerzo que se invierte|La valoración de un resultado influye en la emoción sentida|La relación es bidireccional: la motivación favorece la atención selectiva y el recuerdo de lo relevante."
    ],
    seq: [],
    cls: [
      "Rasgos de la motivación y de la emoción|Motivación: puede durar días o años; surge de necesidades y metas; sostiene el esfuerzo|Emoción: dura segundos o minutos; surge de un acontecimiento relevante; prepara una respuesta rápida"
    ] },
  { t: "Cómo se estudian",
    tip: "La motivación se infiere desde cuatro tipos de indicadores: autoinforme, conducta, psicofisiología y neuroimagen. Cada uno capta una faceta distinta y sus resultados no siempre coinciden, por lo que conviene combinarlos. Los estudios con animales en privación fundaron las primeras teorías. Deckers ordena las causas en motivos internos que empujan e incentivos externos que tiran.",
    v: [
      "Autoinforme=Cuestionarios y entrevistas sobre metas, interés o estados emocionales",
      "Latencia=Indicador conductual: tiempo que tarda en iniciarse la respuesta",
      "Conductancia de la piel=Indicador psicofisiológico de un proceso que la persona no controla",
      "Neuroimagen=Registro de la actividad de regiones cerebrales, por ejemplo ante una recompensa",
      "Privación=Periodo sin comida o sin agua usado en estudios con animales",
      "Deseabilidad social=Sesgo principal de los cuestionarios y entrevistas",
      "Motivo interno=Fuente que empuja desde dentro, como el hambre o la competencia",
      "Incentivo=Objeto o situación cuyas propiedades anticipadas atraen o repelen"
    ],
    g: [
      "Según Deckers, los motivos internos ___ desde dentro y los incentivos tiran desde fuera.|empujan|frenan|ceden",
      "La principal limitación de la psicofisiología es que sus respuestas son poco ___ de cada motivo.|específicas|sensibles|fiables",
      "Una limitación de la neuroimagen es que es cara y sus datos son ___.|correlacionales|subjetivos|inaccesibles",
      "Una limitación de los indicadores conductuales es que una misma conducta puede tener motivos ___.|distintos|idénticos|biológicos",
      "El mismo pastel atrae mucho más con hambre: la conducta resulta de la ___ de fuentes internas y externas.|interacción|independencia|alternancia"
    ],
    tf: [
      "Se recomienda combinar varios tipos de indicadores porque sus resultados no siempre coinciden.|V",
      "La latencia, la persistencia y la elección entre alternativas son indicadores psicofisiológicos.|F|Son indicadores conductuales; los psicofisiológicos son, por ejemplo, la frecuencia cardíaca o la conductancia de la piel.",
      "El cortisol y la actividad eléctrica muscular se cuentan entre los indicadores psicofisiológicos.|V",
      "Una ventaja del autoinforme es que registra procesos que la persona no controla.|F|Eso es propio de la psicofisiología; el autoinforme accede a la experiencia subjetiva, pero sufre deseabilidad social."
    ],
    q: [
      "Un equipo quiere medir la motivación de unos opositores sin depender de lo que estos deseen contar. ¿Qué método se ajusta mejor?|Registros psicofisiológicos|Una entrevista estructurada|Un cuestionario de metas|La psicofisiología registra procesos que la persona no controla; el autoinforme depende de lo que sabe y quiere decir.",
      "Según Deckers, la aprobación de los demás que atrae hacia una tarea es…|un incentivo externo|un motivo social interno|una necesidad psicológica|Los incentivos son objetos, personas o situaciones externas que «tiran»; la aprobación de otros es uno de los ejemplos.",
      "¿Cuál de estos indicadores es conductual?|La latencia de respuesta|La conductancia de la piel|La frecuencia cardíaca|La latencia es conductual, como el esfuerzo, la persistencia o la elección; las otras dos son psicofisiológicas.",
      "¿Qué aportaron sobre todo los estudios con animales en privación?|La base de las primeras teorías|La medida de motivos implícitos|El estudio de la experiencia subjetiva|Fundaron las primeras teorías y siguen siendo clave para conocer los circuitos del hambre, la sed o la recompensa."
    ],
    inc: [
      "Sobre los métodos de estudio de la motivación|La neuroimagen permite establecer relaciones causales|El autoinforme es barato y accede a la experiencia subjetiva|La conducta es observable y cuantificable|La neuroimagen es correlacional y exige cautela al interpretar."
    ],
    seq: [],
    cls: [
      "Tipo de indicador|Conductual: latencia; persistencia; elección entre alternativas|Psicofisiológico: frecuencia cardíaca; conductancia de la piel; cortisol"
    ] },
  { t: "Ciencia y mitos en el área",
    tip: "Varias ideas populares del área son simplificaciones o no se han replicado: la pirámide de Maslow, el bolígrafo entre los dientes, la ratio de 2,9013 o la U invertida de Yerkes-Dodson como ley general. Tras la crisis de replicación se generalizaron el prerregistro, las réplicas a gran escala, los metaanálisis y los datos abiertos. Conviene preguntar por el tamaño del efecto y separar consenso, debate y refutación.",
    v: [
      "Crisis de replicación=Revisión de resultados clásicos de la psicología desde la década de 2010",
      "Prerregistro=Publicar hipótesis y análisis antes de recoger los datos",
      "Réplica a gran escala=Muchos laboratorios repiten el mismo protocolo",
      "Metaanálisis=Combinación de todos los estudios disponibles para estimar el efecto real",
      "Tamaño del efecto=Magnitud de un resultado, más allá de su significación",
      "Datos abiertos=Puesta a disposición pública de datos y materiales",
      "Wagenmakers et al. (2016)=Réplica en 17 laboratorios que no reprodujo el efecto del bolígrafo",
      "Ratio de 2,9013=Proporción de emociones positivas por negativa cuyo modelo fue retirado"
    ],
    g: [
      "La réplica prerregistrada del efecto del bolígrafo entre los dientes se realizó en ___ laboratorios.|17|7|27",
      "La pirámide de Maslow no la dibujó Maslow: procede de manuales de ___ posteriores.|gestión|psicoanálisis|pedagogía",
      "Ante un hallazgo, conviene preguntar por el tamaño del efecto y no solo por su ___.|significación|replicabilidad|originalidad",
      "Distinguir correlación de ___ es una de las reglas de cautela del temario.|causalidad|covarianza|regresión",
      "El temario marca en cada unidad lo que es consenso, lo que está en debate y lo que se ha ___.|refutado|replicado|publicado"
    ],
    tf: [
      "El modelo matemático de la ratio de 2,9013 emociones positivas por cada negativa se demostró infundado y fue retirado.|V",
      "El experimento original de Yerkes y Dodson ya formulaba una «U invertida» entre activación y rendimiento humano.|F|El experimento original trataba de otra cosa; la U invertida como ley general es una simplificación posterior.",
      "Un hallazgo apoyado en un único estudio con muestra pequeña merece cautela.|V",
      "El efecto del bolígrafo entre los dientes quedó confirmado por una réplica prerregistrada en varios laboratorios.|F|La réplica prerregistrada en 17 laboratorios (Wagenmakers et al., 2016) no lo reprodujo."
    ],
    q: [
      "Un artículo divulgativo afirma, a partir de un único estudio con 30 personas, que una técnica duplica la motivación. ¿Qué actitud es más adecuada?|Cautela hasta conocer réplicas y efecto|Aceptarlo si el resultado es significativo|Rechazarlo porque la motivación no se mide|Un estudio único con muestra pequeña merece cautela: hay que preguntar por el tamaño del efecto y por las réplicas.",
      "¿Qué práctica combina todos los estudios disponibles para estimar el tamaño real del efecto?|El metaanálisis|El prerregistro|La réplica directa|El metaanálisis combina estudios; el prerregistro fija hipótesis y análisis antes de recoger datos.",
      "Según el temario, ¿de dónde procede la pirámide de Maslow?|De manuales de gestión posteriores|De la obra original de Maslow|De un estudio de Rogers sobre crecimiento|Maslow no la dibujó; la representación piramidal procede de manuales de gestión posteriores (Unidad 6).",
      "¿Cuál de estas prácticas NO se generalizó tras la crisis de replicación?|Publicar solo los resultados significativos|Publicar datos y materiales abiertos|Replicar un protocolo en muchos laboratorios|Se generalizaron prerregistro, réplicas a gran escala, metaanálisis y datos abiertos; publicar solo lo significativo es parte del problema."
    ],
    inc: [
      "Sobre la crisis de replicación|Llevó a abandonar el uso de metaanálisis|Generalizó el prerregistro de hipótesis|Impulsó réplicas en muchos laboratorios|El metaanálisis es precisamente una de las prácticas que se adoptaron como estándar."
    ],
    seq: [],
    cls: [
      "Ideas populares del área|Simplificación o atribución errónea: pirámide de Maslow; U invertida como ley general|No replicado o retirado: efecto del bolígrafo; ratio de 2,9013"
    ] }
] },
{ n: 2, t: "Determinantes de la motivación", cap: 1, pir: "alta", mods: [
  { t: "Motivación intrínseca y extrínseca",
    tip: "La motivación intrínseca lleva a actuar por la satisfacción inherente a la actividad; la extrínseca, por una consecuencia separable de ella. La extrínseca no es un bloque negativo: la teoría de la autodeterminación la ordena desde la más controlada a la más autónoma. Tanto la intrínseca como la extrínseca bien interiorizada predicen buenos resultados, y ambas se fomentan apoyando autonomía, competencia y relación.",
    v: [
      "Motivación intrínseca=Actuar por la satisfacción inherente a la propia actividad",
      "Motivación extrínseca=Actuar por una consecuencia separable de la actividad",
      "Incentivo=Estímulo presente antes de la conducta que la atrae o la aleja",
      "Recompensa=Consecuencia atractiva posterior que aumenta la probabilidad de la conducta",
      "Castigo=Consecuencia aversiva posterior que reduce la probabilidad de la conducta",
      "Flujo=Estado de concentración plena descrito por Csikszentmihalyi",
      "Extrínseca autónoma=Actuar por una consecuencia cuyo valor se comprende y se comparte",
      "Necesidades psicológicas básicas=Autonomía, competencia y relación, según Ryan y Deci"
    ],
    g: [
      "El niño que monta una y otra vez el mismo rompecabezas sin que nadie se lo pida muestra motivación ___.|intrínseca|extrínseca|introyectada",
      "A diferencia de la recompensa, el incentivo está presente ___ de la conducta.|antes|después|al final",
      "La teoría de la autodeterminación fue propuesta por Deci y ___ en 1985.|Ryan|Weiner|Bandura",
      "Estudiar Estadística porque se considera útil para el futuro profesional es motivación extrínseca, pero ___.|autónoma|controlada|intrínseca",
      "Según Ryan y Deci (2020), la motivación extrínseca bien ___ predice buenos resultados, igual que la intrínseca.|interiorizada|recompensada|controlada"
    ],
    tf: [
      "La motivación extrínseca es, por definición, de tipo controlado, ya que persigue una consecuencia externa.|F|La extrínseca va de la más controlada a la más autónoma; la identificada y la integrada son autónomas.",
      "Una consecuencia aversiva que llega después de la conducta y reduce su probabilidad es un castigo.|V",
      "La motivación intrínseca se asocia a interés, sensación de competencia y percepción de elección.|V",
      "La motivación intrínseca se fomenta con autonomía y la extrínseca, en cambio, con control y supervisión.|F|Ambas se fomentan apoyando las mismas tres necesidades psicológicas: autonomía, competencia y relación."
    ],
    q: [
      "Lucía estudia Estadística porque la considera útil para su futura profesión, aunque no le divierte. ¿Qué tipo de motivación muestra?|Extrínseca autónoma|Intrínseca|Extrínseca controlada|Busca una consecuencia separable (es extrínseca), pero comparte su valor: es autónoma (regulación identificada).",
      "El anuncio de un premio antes de empezar una tarea es, en sentido técnico…|un incentivo|una recompensa|un refuerzo negativo|El incentivo está presente antes de la conducta; la recompensa es una consecuencia que llega después.",
      "¿Qué tres necesidades fomentan la motivación según Ryan y Deci (2020)?|Autonomía, competencia y relación|Logro, afiliación y poder|Seguridad, estima y autorrealización|Logro, afiliación y poder son motivos sociales adquiridos; autonomía, competencia y relación, las necesidades psicológicas.",
      "¿Qué estado se asocia en ocasiones a la motivación intrínseca?|El flujo, de concentración plena|La carga alostática acumulada|La reducción del impulso|Csikszentmihalyi describió el flujo como un estado de concentración plena que acompaña a veces a la motivación intrínseca."
    ],
    inc: [
      "Sobre la motivación intrínseca y extrínseca|La recompensa es un estímulo previo a la conducta|La motivación extrínseca puede ser autónoma|La intrínseca se basa en interés, curiosidad o reto|La recompensa llega después de la conducta; el estímulo previo que atrae o aleja es el incentivo."
    ],
    seq: [],
    cls: [
      "Momento respecto a la conducta|Antes: incentivo|Después: recompensa; castigo"
    ] },
  { t: "Necesidades, cogniciones y emociones como fuentes",
    tip: "Reeve agrupa los motivos internos en necesidades, cogniciones y emociones, a los que se suman los acontecimientos externos. Las necesidades pueden ser fisiológicas, psicológicas (universales e innatas según la autodeterminación) o sociales (adquiridas y variables). Los manuales españoles dividen los determinantes en internos y externos; ambas clasificaciones son compatibles.",
    v: [
      "Necesidad=Condición que debe satisfacerse para la vida, el crecimiento y el bienestar",
      "Necesidades fisiológicas=Hambre, sed, sueño y sexo, en buena parte de lógica homeostática",
      "Necesidades psicológicas=Autonomía, competencia y relación, universales e innatas",
      "Necesidades sociales=Logro, afiliación, intimidad y poder, adquiridas con la experiencia",
      "Cogniciones=Metas, expectativas, atribuciones, valores y autoconcepto como fuente motivacional",
      "Acontecimientos externos=Incentivos, recompensas, castigos, normas, cultura y contexto",
      "Aprendizaje=Determinante externo más amplio, que modela incluso los motivos internos",
      "Hedonismo=Búsqueda de placer y evitación de dolor como determinante externo"
    ],
    g: [
      "Según la teoría de la autodeterminación, las necesidades psicológicas son universales e ___.|innatas|adquiridas|variables",
      "Las necesidades sociales, como el logro o el poder, se ___ con la experiencia.|adquieren|heredan|extinguen",
      "Pedir perdón movido por la culpa ilustra la ___ como fuente de motivación.|emoción|necesidad|cognición",
      "En la clasificación de los manuales españoles, el temperamento es un determinante ___.|interno|externo|social",
      "Las ___ explican por qué dos personas con las mismas necesidades actúan de forma distinta.|cogniciones|emociones|hormonas"
    ],
    tf: [
      "Según Reeve, las creencias de autoeficacia y las atribuciones son fuentes cognitivas de motivación.|V",
      "Las necesidades sociales, como el logro o la afiliación, son innatas y apenas varían entre personas.|F|Se adquieren con la experiencia y varían mucho entre personas; las universales e innatas son las psicológicas.",
      "En la clasificación de los manuales españoles, el aprendizaje es un determinante interno, porque modela los motivos.|F|Es el determinante externo más amplio, precisamente porque modela incluso los motivos internos.",
      "Las emociones son a la vez un resultado y una fuente de motivación.|V"
    ],
    q: [
      "Tras varios días aislado en un refugio de montaña, Pablo busca compañía en cuanto llega al pueblo. Según Reeve, ¿qué fuente predomina?|Una necesidad|Una cognición|Un incentivo externo|El temario pone este ejemplo entre las necesidades: un estado que debe satisfacerse y que motiva buscar compañía.",
      "Matricularse porque se espera aprobar y se valora el título es un ejemplo de motivación basada en…|cogniciones|emociones|necesidades|Expectativas y valores son cogniciones, según la clasificación de Reeve.",
      "¿Qué necesidad se considera social o adquirida?|La intimidad|La competencia|La autonomía|La intimidad, con el logro, la afiliación y el poder, es social; competencia y autonomía son necesidades psicológicas.",
      "¿Qué determinante incluyen los manuales españoles entre los externos?|La interacción social|La regulación homeostática|La tendencia al crecimiento|Externos: aprendizaje, hedonismo e interacción social; internos: disposiciones heredadas, homeostasis, crecimiento y cognición."
    ],
    inc: [
      "Sobre las fuentes de la motivación|Las necesidades fisiológicas se adquieren con la experiencia|Las necesidades fisiológicas siguen en buena parte una lógica homeostática|La conducta motivada no depende de una sola fuente|Las que se adquieren con la experiencia son las sociales; las fisiológicas responden en buena parte a la homeostasis."
    ],
    seq: [],
    cls: [
      "Fuentes de motivación según Reeve|Necesidades: sed; competencia; afiliación|Cogniciones: expectativas; atribuciones; autoeficacia|Emociones: interés; culpa; miedo"
    ] },
  { t: "Incentivos y recompensas: efecto de socavamiento y su debate",
    tip: "El efecto de socavamiento es la posible reducción de la motivación intrínseca al introducir una recompensa externa. La teoría de la evaluación cognitiva lo explica por el aspecto controlador de la recompensa, frente al informativo. Hoy se considera que existe en condiciones concretas (recompensa tangible, esperada, contingente y percibida como controladora), no como ley general.",
    v: [
      "Efecto de socavamiento=Reducción de la motivación intrínseca tras introducir una recompensa externa",
      "Recompensa contingente=Recompensa que depende de hacer la tarea o de alcanzar un nivel",
      "Aspecto controlador=Componente de la recompensa que transmite presión y reduce la autonomía",
      "Aspecto informativo=Componente de la recompensa que informa sobre la propia competencia",
      "Teoría de la evaluación cognitiva=Miniteoría de la autodeterminación que explica el socavamiento",
      "Deci (1971)=Estudio en que pagar por resolver rompecabezas redujo el tiempo libre dedicado",
      "Lepper, Greene y Nisbett=Estudio con preescolares que esperaban un diploma por dibujar",
      "Cerasoli, Nicklin y Ford=Metaanálisis: lo intrínseco predice calidad y los incentivos, cantidad"
    ],
    g: [
      "En Deci (1971), quienes recibieron dinero dedicaron después menos ___ a los rompecabezas.|tiempo libre|esfuerzo físico|atención visual",
      "Si en una recompensa predomina el aspecto ___, disminuye la autonomía percibida.|controlador|informativo|inesperado",
      "El elogio sincero y ___ suele mantener o aumentar la motivación intrínseca.|específico|frecuente|material",
      "Según Cerasoli, Nicklin y Ford (2014), los incentivos predicen mejor la ___ del rendimiento.|cantidad|calidad|variabilidad",
      "El metaanálisis de Deci, Koestner y Ryan (1999) confirmó el efecto para recompensas tangibles y ___.|esperadas|inesperadas|verbales"
    ],
    tf: [
      "En el estudio de Lepper, Greene y Nisbett, los niños que recibieron el diploma por sorpresa mostraron después menos interés por dibujar.|F|El interés disminuyó en los que esperaban el diploma; los que lo recibieron por sorpresa no mostraron esa caída.",
      "Cameron y Pierce (1994) concluyeron que el efecto de socavamiento era mínimo y limitado a condiciones muy concretas.|V",
      "Según la síntesis actual, el socavamiento afecta por igual a las recompensas tangibles y al elogio verbal.|F|Aparece con recompensas tangibles, esperadas, contingentes y controladoras; el elogio informativo puede aumentar el interés.",
      "Según Cerasoli y colaboradores, el desplazamiento de la motivación intrínseca aparece sobre todo cuando el incentivo está ligado directamente al rendimiento.|V"
    ],
    q: [
      "Una empresa empieza a pagar un plus por cada informe a una analista a la que ya le apasionaba escribirlos, y ella lo vive como un control. ¿Qué cabe esperar según la evaluación cognitiva?|Que disminuya su interés intrínseco|Que aumente su sensación de competencia|Que su interés no cambie en absoluto|Recompensa tangible, esperada, contingente y percibida como controladora: es la condición típica del socavamiento.",
      "Un entrenador felicita a una jugadora explicándole con detalle qué hizo bien en una jugada. ¿Qué aspecto de la recompensa predomina?|El informativo|El controlador|El contingente|El elogio sincero y específico informa sobre la competencia y suele mantener o aumentar la motivación intrínseca.",
      "Según Cerasoli, Nicklin y Ford (2014), la motivación intrínseca predice mejor…|la calidad del trabajo|la cantidad de trabajo|la rapidez del trabajo|La intrínseca predice mejor la calidad y los incentivos, la cantidad; ambos predicen el rendimiento a la vez.",
      "¿Qué condición favorece más el efecto de socavamiento?|Una recompensa tangible y esperada|Un elogio sincero e inesperado|Una recompensa verbal informativa|Deci, Koestner y Ryan (1999) confirmaron el efecto sobre todo para recompensas tangibles, esperadas y contingentes a la tarea."
    ],
    inc: [
      "Sobre el efecto de socavamiento|Aparece sobre todo con recompensas inesperadas|Es una predicción de la evaluación cognitiva|Su alcance sigue siendo objeto de debate|El efecto aparece con recompensas esperadas; las inesperadas no producían la caída en el estudio de Lepper y colaboradores."
    ],
    seq: [],
    cls: [
      "Estudios sobre recompensas e interés|Estudios clásicos del efecto: Deci (1971); Lepper, Greene y Nisbett (1973)|Metaanálisis: Deci, Koestner y Ryan (1999); Cerasoli, Nicklin y Ford (2014)"
    ] },
  { t: "Motivos implícitos y explícitos (introducción)",
    tip: "McClelland, Koestner y Weinberger (1989) propusieron que los motivos implícitos y explícitos son dos sistemas distintos. Los implícitos se miden codificando historias (TAT, hoy PSE) y predicen conducta espontánea a largo plazo; los explícitos se miden con cuestionarios y predicen elecciones deliberadas. Su baja correlación no es un fallo de los instrumentos, sino prueba de que son sistemas diferentes.",
    v: [
      "Motivo implícito=Motivo no consciente que predice conducta espontánea y mantenida",
      "Motivo explícito=Motivo autoatribuido que predice elecciones deliberadas",
      "PSE=Picture Story Exercise: codificación de historias a partir de imágenes",
      "TAT=Antecesor del PSE para medir motivos implícitos con imágenes",
      "Cuestionario=Instrumento habitual para medir los motivos explícitos",
      "Köllner y Schultheiss (2014)=Metaanálisis que halló una r de 0,130 entre ambas medidas",
      "Incentivos de la actividad=Activan los motivos implícitos, como el placer de hacer bien una tarea",
      "Incentivos sociales=Activan los motivos explícitos: lo que otros esperan o valoran"
    ],
    g: [
      "Los motivos implícitos se activan sobre todo con incentivos ___ a la propia actividad.|inherentes|ajenos|posteriores",
      "Los motivos explícitos predicen sobre todo las elecciones ___.|deliberadas|espontáneas|impulsivas",
      "En el metaanálisis de Köllner y Schultheiss, la correlación más baja, y no significativa, se dio en el motivo de ___.|poder|logro|afiliación",
      "Según el temario, los motivos implícitos se originan en experiencias ___ tempranas.|afectivas|escolares|verbales",
      "Cuando los motivos implícitos y explícitos de una persona ___, es más probable el malestar.|divergen|coinciden|se miden"
    ],
    tf: [
      "El TAT y el PSE son instrumentos para medir motivos explícitos mediante el relato de historias.|F|Miden los motivos implícitos; los explícitos se miden con cuestionarios.",
      "La correlación global entre medidas implícitas y explícitas en el metaanálisis de Köllner y Schultheiss fue de r 0,130.|V",
      "La baja correlación entre motivos implícitos y explícitos se interpreta como un fallo de fiabilidad de los instrumentos.|F|Se interpreta como prueba de que son dos sistemas motivacionales diferentes.",
      "La coincidencia entre motivos implícitos y explícitos suele asociarse a más bienestar.|V"
    ],
    q: [
      "Andrés se declara muy ambicioso en un cuestionario, pero en el PSE puntúa bajo en logro y no disfruta de los retos. ¿Qué cabe esperar?|Más probabilidad de malestar|Un error de medida del PSE|Más bienestar por su ambición|Cuando los motivos implícitos y explícitos divergen es más probable el malestar; la discrepancia no es un error de medida.",
      "¿Qué predice mejor un motivo implícito de logro alto?|Conducta espontánea mantenida en el tiempo|La elección deliberada de una carrera|Respuestas a situaciones muy estructuradas|Los implícitos predicen conducta espontánea a largo plazo; los explícitos, elecciones deliberadas y respuestas a situaciones estructuradas.",
      "¿Qué tipo de incentivos activa sobre todo los motivos explícitos?|Los sociales|Los de la propia actividad|Los fisiológicos|Los explícitos responden a lo que otros esperan o valoran; los implícitos, a los incentivos de la propia actividad.",
      "¿Cómo se interpreta la baja correlación entre medidas implícitas y explícitas de un mismo motivo?|Como prueba de dos sistemas distintos|Como un fallo de validez de los cuestionarios|Como un fallo de fiabilidad del PSE|La baja relación no se atribuye a los instrumentos, sino a que se trata de sistemas motivacionales diferentes."
    ],
    inc: [
      "Sobre los motivos implícitos|Se describen con fiabilidad mediante autoinforme|Se miden codificando historias a partir de imágenes|Se originan en experiencias afectivas tempranas|Su acceso consciente es escaso y no se pueden describir con fiabilidad; por eso se miden con el PSE y no con cuestionarios."
    ],
    seq: [],
    cls: [
      "Motivos implícitos y explícitos|Implícitos: PSE; conducta espontánea; incentivos de la actividad|Explícitos: cuestionarios; elecciones deliberadas; incentivos sociales"
    ] }
] },
{ n: 3, t: "Historia I: de la filosofía al modelo biológico", cap: 1, pir: "media", mods: [
  { t: "De la filosofía a la psicología",
    tip: "Antes de la psicología científica dominaron tres ideas: hedonismo, voluntad e instinto. La teoría de la evolución de Darwin abrió paso a las teorías del instinto de James y McDougall, la primera gran teoría psicológica de la motivación. Decayeron por su circularidad, por ignorar el aprendizaje y por ser descriptivas; el concepto sobrevivió con más rigor en la etología.",
    v: [
      "Hedonismo=Principio según el cual la conducta busca el placer y evita el dolor",
      "Voluntad=En Descartes, facultad de la mente racional que decide",
      "Pasiones=En Descartes, fuerzas que mueven mecánicamente el cuerpo",
      "Instinto=Tendencia heredada a actuar de cierta forma ante determinados estímulos",
      "William James=Atribuyó al ser humano más instintos que a otros animales",
      "William McDougall=Hizo del instinto el motor de toda la conducta, con una emoción asociada",
      "Circularidad=Explicar una conducta con un instinto cuya única prueba es esa conducta",
      "Patrón de acción fija=Secuencia propia de la especie desencadenada por un estímulo concreto"
    ],
    g: [
      "Hobbes convirtió el ___ en un principio general de la conducta en el siglo XVII.|hedonismo|instinto|racionalismo",
      "Descartes separó el cuerpo, movido por las pasiones, de la mente racional, cuya ___ decide.|voluntad|memoria|percepción",
      "La teoría de la evolución de ___ mostró la continuidad entre los animales y el ser humano.|Darwin|Descartes|Hobbes",
      "Para McDougall, el instinto de huida se acompaña de la emoción de ___.|miedo|ira|asombro",
      "El concepto de instinto sobrevivió, con más rigor, en la ___ de Lorenz y Tinbergen.|etología|psicofísica|reflexología"
    ],
    tf: [
      "Para William James, el ser humano tiene menos instintos que otros animales, porque depende más del aprendizaje.|F|James atribuyó al ser humano más instintos que a otros animales, aunque modificables por la experiencia.",
      "Para William James, tras la primera vez, la conducta instintiva deja de ser ciega.|V",
      "En la teoría de McDougall, el instinto de combate se asocia a la emoción de ira.|V",
      "La crítica principal a las teorías del instinto fue que se centraban demasiado en el aprendizaje.|F|Al contrario: se les reprochó ignorar el aprendizaje, además de su circularidad y su carácter descriptivo."
    ],
    q: [
      "Un autor sostiene que una persona agrede porque tiene un instinto de agresión, y lo prueba con sus propias agresiones. ¿Qué crítica merece?|Circularidad|Reduccionismo fisiológico|Exceso de aprendizaje|La única prueba del instinto es la propia conducta que pretende explicar: el razonamiento es circular.",
      "¿Qué obra y año corresponden a la teoría de la evolución de Darwin?|El origen de las especies, 1859|The Wisdom of the Body, 1932|Principles of Psychology, 1890|Darwin publicó El origen de las especies en 1859; James, Principles of Psychology (1890), y Cannon, The Wisdom of the Body (1932).",
      "¿Qué tres elementos incluía cada instinto según McDougall?|Percepción, emoción e impulso a actuar|Necesidad, impulso y reducción del impulso|Detector, comparador y efectores|Cada instinto incluía una disposición a percibir ciertos estímulos, una emoción asociada y un impulso a actuar hacia una meta.",
      "¿Qué aportó la teoría de la evolución al estudio de la motivación?|Llevó la motivación hacia la biología|Situó la voluntad racional en el centro|Introdujo el concepto de medio interno|Al mostrar la continuidad entre animales y humanos, la motivación pasó de la mente al cuerpo y a la biología."
    ],
    inc: [
      "Sobre las teorías del instinto|Fueron explicativas, no meramente descriptivas|Ignoraban las diferencias culturales e individuales|Sus listas crecieron hasta perder valor explicativo|Una de sus críticas fue justamente que eran descriptivas, no explicativas."
    ],
    seq: [
      "Ideas sobre la motivación, por orden de aparición|Hedonismo de Epicuro>Voluntad y pasiones en Descartes>Evolución de Darwin>Instintos de William James>Instintos de McDougall"
    ],
    cls: [] },
  { t: "Homeostasis (Bernard, Cannon)",
    tip: "Claude Bernard describió la estabilidad del medio interno y Walter B. Cannon acuñó el término homeostasis (The Wisdom of the Body, 1932): mantener las variables internas dentro de un margen mediante retroalimentación negativa. Un sistema homeostático tiene variable regulada, punto de ajuste, detector, comparador y efectores, que también pueden ser conductuales. Sus límites son las conductas que no corrigen ningún déficit y las que se anticipan a la necesidad.",
    v: [
      "Homeostasis=Mantenimiento de las variables internas en un margen por retroalimentación negativa",
      "Medio interno=Concepto de Bernard sobre la estabilidad interna del organismo",
      "Variable regulada=Lo que el sistema mantiene estable, como la temperatura",
      "Punto de ajuste=Valor de referencia, en torno a 37 °C para la temperatura",
      "Detector=Elemento que mide el valor real, como los termorreceptores",
      "Comparador=Calcula la diferencia entre valor real y de referencia, como el hipotálamo",
      "Efectores=Corrigen la desviación: sudor, tiritona o también conducta",
      "Retroalimentación negativa=Mecanismo en que la corrección se opone a la desviación"
    ],
    g: [
      "El término homeostasis lo propuso ___ en The Wisdom of the Body.|Walter B. Cannon|Claude Bernard|William James",
      "En la regulación de la temperatura, el papel de comparador lo cumple el ___.|hipotálamo|tálamo|cerebelo",
      "En la retroalimentación ___, la corrección se opone a la desviación detectada.|negativa|positiva|anticipatoria",
      "Cuando los ajustes internos no bastan, aparece un estado de ___ que impulsa a actuar.|necesidad|saciedad|habituación",
      "Beber durante una comida salada antes de tener sed muestra que algunas conductas se ___ a la necesidad.|anticipan|oponen|reducen"
    ],
    tf: [
      "Claude Bernard acuñó el término homeostasis en The Wisdom of the Body.|F|Bernard habló del medio interno; el término homeostasis y esa obra (1932) son de Walter B. Cannon.",
      "En un sistema homeostático, los efectores pueden ser conductuales, como abrigarse o beber.|V",
      "Comer sin hambre o explorar por curiosidad son conductas que el modelo homeostático explica bien.|F|Son límites del modelo: muchas conductas no corrigen ningún déficit.",
      "La homeostasis fue la base de las teorías biológicas de la motivación y de la teoría del impulso.|V"
    ],
    q: [
      "Un excursionista siente frío y, como la tiritona no basta, se pone el abrigo. ¿Qué papel cumple ponerse el abrigo?|Efector conductual|Detector térmico|Punto de ajuste|Los efectores corrigen la desviación y no son solo fisiológicos: abrigarse es un efector conductual.",
      "En el sistema homeostático de la temperatura, los termorreceptores actúan como…|detector|comparador|efector|Miden el valor real; el hipotálamo compara, y el sudor o la tiritona corrigen.",
      "¿Qué observación pone en evidencia un límite de la homeostasis?|Beber antes de tener sed|Sudar cuando sube la temperatura|Tiritar cuando baja la temperatura|Algunas conductas se anticipan a la necesidad en lugar de responder a ella; sudar y tiritar son correcciones homeostáticas.",
      "¿Qué hace el comparador de un sistema homeostático?|Calcula la desviación respecto a la referencia|Establece el valor de referencia que se defiende|Corrige la desviación mediante sudor o conducta|El comparador (el hipotálamo, en la temperatura) calcula la diferencia; el punto de ajuste es la referencia y los efectores corrigen."
    ],
    inc: [
      "Sobre la homeostasis|La retroalimentación negativa amplía la desviación|Cannon lo desarrolló en The Wisdom of the Body|El punto de ajuste actúa como valor de referencia|En la retroalimentación negativa la corrección se opone a la desviación y se detiene al volver al margen."
    ],
    seq: [
      "Funcionamiento de un sistema homeostático|El detector mide el valor real>El comparador calcula la diferencia con el punto de ajuste>Los efectores corrigen la desviación>La corrección se detiene al volver al margen"
    ],
    cls: [] },
  { t: "Alostasis y carga alostática",
    tip: "Sterling y Eyer (1988) definieron la alostasis como «estabilidad mediante el cambio»: el cerebro ajusta los parámetros por anticipación a las demandas previstas. Es complementaria de la homeostasis, que es reactiva y local. McEwen y Stellar (1993) añadieron la carga alostática: el coste acumulado de activar en exceso los sistemas de estrés o de no desactivarlos cuando la demanda termina.",
    v: [
      "Alostasis=Estabilidad mediante el cambio, por ajuste anticipado de los parámetros",
      "Carga alostática=Coste acumulado de activar repetida o prolongadamente los sistemas de estrés",
      "Sterling y Eyer=Autores que propusieron la alostasis en 1988",
      "McEwen y Stellar=Autores que añadieron en 1993 el coste acumulado del estrés",
      "Lógica reactiva=Corrección tras el desequilibrio, propia de la homeostasis",
      "Lógica anticipatoria=Ajuste antes de la demanda, propio de la alostasis",
      "Control coordinado=Regulación dirigida por el cerebro, característica de la alostasis",
      "Cortisol al despertar=Ejemplo alostático: preparar la actividad del día"
    ],
    g: [
      "La alostasis ajusta el valor de ___ según las demandas previstas.|referencia|activación|saciedad",
      "En la homeostasis el control es ___; en la alostasis, coordinado por el cerebro.|local|central|voluntario",
      "Acelerar el corazón antes de salir a escena es un ejemplo de ___.|alostasis|homeostasis|habituación",
      "A corto plazo la respuesta alostática es ___; mantenida, tiene costes.|adaptativa|perjudicial|inespecífica",
      "La carga alostática es un puente entre el estrés ___ y la enfermedad.|crónico|agudo|positivo"
    ],
    tf: [
      "La alostasis sustituye a la homeostasis, que hoy se considera un concepto superado.|F|Son complementarias: la alostasis describe la anticipación y muchos sistemas siguen funcionando con lógica homeostática.",
      "Que la presión arterial suba antes de levantarse de la cama es un ejemplo de ajuste alostático.|V",
      "La carga alostática incluye el coste de no desactivar los sistemas de estrés cuando la demanda termina.|V",
      "Hay acuerdo general en que la alostasis aporta algo nuevo frente a una homeostasis entendida de forma amplia.|F|Es una cuestión en debate: se discute hasta qué punto aporta algo nuevo frente a esa homeostasis amplia."
    ],
    q: [
      "Una enfermera lleva años con turnos de noche y estrés sostenido, y empieza a presentar hipertensión y fallos de memoria. ¿Qué concepto lo describe mejor?|Carga alostática|Alostasis adaptativa|Punto de ajuste|Activar repetida o prolongadamente los sistemas de estrés tiene un coste acumulado asociado a hipertensión y problemas de memoria.",
      "¿Qué rasgo distingue la alostasis de la homeostasis?|Actúa antes del desequilibrio|Corrige tras la desviación|Depende de cada sistema local|La alostasis es anticipatoria y coordinada por el cerebro; la homeostasis es reactiva y local.",
      "¿Qué ejemplo corresponde a la homeostasis y no a la alostasis?|Sudar cuando sube la temperatura|Subir el cortisol al despertar|Movilizar energía ante una amenaza|Sudar corrige una desviación ya producida (reactivo); las otras dos son ajustes anticipados.",
      "¿Qué problemas se asocian a la carga alostática según el temario?|Hipertensión y alteraciones metabólicas|Pérdida del punto de ajuste térmico|Falta total de respuesta al estrés|Se asocia a hipertensión, alteraciones metabólicas, cambios inmunitarios y problemas de memoria."
    ],
    inc: [
      "Sobre alostasis y carga alostática|La alostasis es reactiva, como la homeostasis|McEwen y Stellar propusieron la carga alostática|La alostasis está coordinada por el cerebro|La alostasis es anticipatoria; actuar tras el desequilibrio es lo propio de la homeostasis."
    ],
    seq: [],
    cls: [
      "Homeostasis o alostasis|Homeostasis: reactiva; control local; sudar ante el calor|Alostasis: anticipatoria; coordinada por el cerebro; acelerar el corazón antes de actuar"
    ] },
  { t: "Bases neurales de la recompensa (dopamina)",
    tip: "Olds y Milner (1954) descubrieron la autoestimulación intracraneal, primera prueba de que existen sistemas cerebrales de recompensa. La vía dopaminérgica mesolímbica (del área tegmental ventral al núcleo accumbens) se relaciona con el «querer», no con el «gustar», que depende de puntos calientes opioides y endocannabinoides. El grupo de Schultz mostró además que la dopamina responde al error de predicción de la recompensa.",
    v: [
      "Autoestimulación intracraneal=Presionar una palanca para recibir estimulación cerebral (Olds y Milner)",
      "Vía mesolímbica=Proyección dopaminérgica del área tegmental ventral al accumbens",
      "«Querer»=Saliencia del incentivo: atractivo motivacional de la recompensa y sus señales",
      "«Gustar»=Impacto hedónico o placer al consumir la recompensa",
      "Puntos calientes hedónicos=Zonas pequeñas con sistemas opioides y endocannabinoides",
      "Sensibilización del incentivo=Aumento del deseo por consumo repetido sin aumento del placer",
      "Error de predicción=Diferencia entre la recompensa esperada y la obtenida",
      "Núcleo accumbens=Diana de la vía mesolímbica, situada en el estriado ventral"
    ],
    g: [
      "Olds y Milner descubrieron en ___ la autoestimulación intracraneal en ratas.|1954|1932|1988",
      "Las neuronas de la vía mesolímbica parten del área ___ ventral.|tegmental|preóptica|septal",
      "Las ratas con la dopamina casi eliminada siguen mostrando reacciones de ___ ante el azúcar.|agrado|búsqueda|esfuerzo",
      "Según el grupo de Schultz, cuando la recompensa esperada no llega, las neuronas dopaminérgicas ___ su actividad.|reducen|aumentan|mantienen",
      "La teoría de la sensibilización del incentivo aplica la distinción entre «querer» y «gustar» a la ___.|adicción|depresión|obesidad"
    ],
    tf: [
      "La dopamina mesolímbica es la responsable principal del placer que produce consumir una recompensa.|F|El placer («gustar») depende de puntos calientes opioides y endocannabinoides; la dopamina se relaciona con el «querer».",
      "Aumentar la dopamina incrementa el esfuerzo por conseguir una recompensa sin aumentar el agrado.|V",
      "Según la sensibilización del incentivo, el consumo repetido de drogas aumenta a la vez el deseo y el placer obtenido.|F|Sensibiliza el «querer»: el deseo crece aunque el «gustar» no aumente o incluso disminuya.",
      "Muchos autores consideran complementarias la hipótesis de la saliencia del incentivo y la del error de predicción, aunque el papel preciso de la dopamina se debate.|V"
    ],
    q: [
      "Un hombre con una larga historia de consumo de cocaína dice que ya apenas disfruta, pero ver a sus antiguos compañeros le despierta un deseo intenso. ¿Qué teoría lo explica mejor?|Sensibilización del incentivo|Reducción del impulso|Error de predicción negativo|Las señales asociadas a la droga desencadenan un fuerte «querer» aunque el «gustar» no aumente o incluso disminuya.",
      "Un mono recibe zumo de forma inesperada. ¿Qué cabe esperar en sus neuronas dopaminérgicas según el grupo de Schultz?|Que aumenten su actividad|Que apenas cambien|Que reduzcan su actividad|La dopamina responde al error de predicción: se activa ante la recompensa inesperada y apenas cambia si ya estaba prevista.",
      "¿Qué sistemas sustentan el «gustar» según Berridge?|Opioides y endocannabinoides|Dopamina mesolímbica|Noradrenalina y cortisol|El placer depende de pequeños puntos calientes hedónicos con sistemas opioides y endocannabinoides, no principalmente de la dopamina.",
      "¿Qué muestran las ratas con la dopamina casi eliminada?|Dejan de esforzarse pero muestran agrado|Se esfuerzan más y muestran menos agrado|Dejan de esforzarse y rechazan el azúcar|Sin dopamina pierden el «querer» (esfuerzo y búsqueda), pero conservan el «gustar» (reacciones de agrado al azúcar)."
    ],
    inc: [
      "Sobre los sistemas de recompensa|El núcleo accumbens se sitúa en el estriado dorsal|Olds y Milner aportaron la primera prueba de sistemas de recompensa|La dopamina participa en aprender qué señales predicen recompensas|El núcleo accumbens forma parte del estriado ventral, diana principal de la vía mesolímbica."
    ],
    seq: [],
    cls: [
      "«Querer» o «gustar»|«Querer»: dopamina mesolímbica; esfuerzo y búsqueda; saliencia del incentivo|«Gustar»: sistemas opioides; reacciones faciales de agrado; impacto hedónico"
    ] }
] },
{ n: 4, t: "Historia II: conductismo y activación", cap: 1, pir: "alta", mods: [
  { t: "Hull y la teoría del impulso",
    tip: "Hull (Principles of Behavior, 1943) propuso que una necesidad biológica genera un impulso, un estado energizante inespecífico que activa sin dirigir; la reducción del impulso refuerza la conducta y forma un hábito. El potencial de reacción es el producto de la fuerza del hábito por el impulso: sin impulso no hay conducta. Las críticas (sacarina, curiosidad, búsqueda de estimulación, peso del incentivo) llevaron a Hull a añadir el factor K.",
    v: [
      "Impulso=Estado energizante inespecífico producido por una necesidad biológica",
      "Necesidad=En Hull, déficit fisiológico como la falta de agua o de alimento",
      "Reducción del impulso=Mecanismo que, según Hull, refuerza la conducta",
      "Hábito=Asociación aprendida entre estímulo y respuesta que aporta dirección",
      "Potencial de reacción=Producto de la fuerza del hábito por el impulso",
      "Factor K=Término de incentivo que Hull añadió después a su fórmula",
      "Woodworth=Introdujo en 1918 el término drive",
      "Impulso adquirido=Impulso aprendido, como el miedo condicionado"
    ],
    g: [
      "Para Hull, el impulso es ___: activa la conducta, pero no la dirige.|inespecífico|selectivo|direccional",
      "En la fórmula de Hull, la fuerza del hábito se ___ por el impulso.|multiplica|suma|divide",
      "Según Hull, lo que refuerza la conducta es la ___ del impulso.|reducción|intensificación|anticipación",
      "Si no hay hábito, el impulso solo produce actividad ___.|desorganizada|consumatoria|dirigida",
      "Que los monos manipulen rompecabezas mecánicos sin recibir nada a cambio lo observó ___.|Harlow|Hull|Spence"
    ],
    tf: [
      "En la teoría de Hull, cada impulso dirige la conducta hacia la meta que satisface su necesidad.|F|El impulso es inespecífico: solo activa. La dirección la aporta el hábito, y los impulsos se suman en uno general.",
      "Según la fórmula de Hull, si el impulso es cero no hay conducta, por muy aprendido que esté el hábito.|V",
      "Que las ratas consuman agua con sacarina, sin valor nutritivo, es coherente con la teoría del impulso de Hull.|F|Es una crítica: muestra conducta motivada por el incentivo sin un déficit que reducir.",
      "El propio Hull acabó añadiendo a su fórmula un factor de incentivo.|V"
    ],
    q: [
      "Una rata ha aprendido perfectamente a recorrer un laberinto, pero está saciada y sin sed. Según la fórmula de Hull, ¿qué ocurrirá?|No recorrerá el laberinto|Lo recorrerá por hábito|Lo recorrerá de forma desorganizada|La relación es multiplicativa: con impulso cero el potencial de reacción es cero, aunque el hábito sea fuerte.",
      "En la teoría de Hull, ¿qué aporta cada factor?|El hábito, dirección; el impulso, energía|El hábito, energía; el impulso, dirección|Ambos aportan energía y dirección|El impulso es inespecífico y solo energiza; el hábito aprendido da dirección a la conducta.",
      "Una persona practica puenting y disfruta de las películas de terror. ¿Qué crítica a la teoría del impulso ilustra?|La búsqueda activa de estimulación|La circularidad de los instintos|La inespecificidad del impulso|Los organismos no siempre buscan reducir la tensión: muchas veces la aumentan, lo que contradice la reducción del impulso.",
      "¿Qué obra recoge la formulación más influyente de la teoría del impulso?|Principles of Behavior (1943)|Principles of Psychology (1890)|The Wisdom of the Body (1932)|Hull la formuló en Principles of Behavior (1943); las otras dos obras son de James y de Cannon."
    ],
    inc: [
      "Sobre la teoría del impulso de Hull|Los distintos impulsos no se suman entre sí|El impulso deriva de una necesidad biológica|La teoría generó predicciones comprobables|Los impulsos, al ser inespecíficos, se suman en un impulso general."
    ],
    seq: [
      "Secuencia de la teoría del impulso de Hull|Necesidad biológica>Impulso>Conducta>Reducción del impulso>Refuerzo"
    ],
    cls: [] },
  { t: "Teorías del incentivo",
    tip: "Las teorías del incentivo sostienen que la conducta está motivada por la atracción de las propiedades anticipadas de la meta: el incentivo tira desde fuera. Las impulsaron los efectos de contraste de Crespi y el comer sin hambre; Spence habló de la anticipación de la recompensa y Bolles, de expectativas. Hoy se acepta que impulso e incentivo interactúan, y la saliencia del incentivo de Berridge es su versión neurobiológica.",
    v: [
      "Incentivo=Propiedades anticipadas de la meta que atraen la conducta",
      "Efecto de contraste=Cambio de conducta al pasar a una recompensa de distinto tamaño",
      "Crespi (1942)=Autor de los experimentos de contraste con ratas",
      "Kenneth Spence=Discípulo de Hull que destacó la anticipación de la recompensa",
      "Robert Bolles=Situó la motivación en expectativas de consecuencias valiosas",
      "Respuesta anticipatoria de meta=Anticipación de la recompensa al aproximarse, que aporta motivación",
      "Saliencia del incentivo=Versión neurobiológica actual de las teorías del incentivo",
      "Comer sin hambre=Consumo de comida apetecible sin déficit, como el postre"
    ],
    g: [
      "Los efectos de contraste fueron descritos por ___ en 1942.|Crespi|Spence|Bolles",
      "Según las teorías del incentivo, lo que refuerza es la ___ de algo valioso.|obtención|reducción|privación",
      "Spence propuso que el animal emite una respuesta anticipatoria de ___.|meta|impulso|hábito",
      "La sal resulta más atractiva cuando falta ___: el estado interno modula el valor del incentivo.|sodio|agua|glucosa",
      "La teoría del impulso usa la metáfora de empujar; la del incentivo, la de ___.|tirar|frenar|guiar"
    ],
    tf: [
      "Las teorías del incentivo explican bien la curiosidad, el consumo de sacarina y los efectos de contraste.|V",
      "Kenneth Spence, discípulo de Hull, rechazó que la anticipación de la recompensa aportara motivación.|F|Spence propuso que, al aproximarse a la meta, el animal anticipa la recompensa y esa anticipación aporta motivación.",
      "Hoy se considera que el impulso y el incentivo son explicaciones excluyentes de la conducta.|F|Se acepta que interactúan: el estado interno modula el valor de los incentivos.",
      "Según los efectos de contraste, el valor de un incentivo depende de la comparación con el anterior.|V"
    ],
    q: [
      "Tras una comida abundante, Elena pide postre al ver el carro de dulces. ¿Qué enfoque lo explica mejor?|La teoría del incentivo|La teoría del impulso|La homeostasis térmica|Comer sin hambre muestra que las propiedades anticipadas de la meta atraen aunque no exista déficit.",
      "Unas ratas entrenadas con una recompensa grande pasan a recibir una pequeña. ¿Cómo corren frente a las que siempre recibieron la pequeña?|Más despacio|Más deprisa|A la misma velocidad|Es un efecto de contraste (Crespi, 1942): el valor de un incentivo depende de la comparación con el anterior.",
      "¿Qué autor situó la motivación en las expectativas de que una conducta lleve a consecuencias valiosas?|Robert Bolles|Kenneth Spence|Clark L. Hull|Bolles dio así un paso hacia las teorías cognitivas; Spence destacó la anticipación de la recompensa.",
      "¿Qué concepto actual es la versión neurobiológica de las teorías del incentivo?|La saliencia del incentivo|El error de predicción dopaminérgico|La autoestimulación intracraneal|La saliencia del incentivo («querer») de Berridge actualiza en clave neurobiológica las teorías del incentivo."
    ],
    inc: [
      "Sobre las teorías del incentivo|Sitúan el origen en una necesidad interna|Usan la metáfora de que la meta tira de la conducta|Destacan las propiedades anticipadas de la meta|La necesidad interna es el origen según la teoría del impulso; el incentivo atrae desde fuera."
    ],
    seq: [],
    cls: [
      "Impulso o incentivo|Teoría del impulso: necesidad interna; empuja; conducta tras privación|Teoría del incentivo: propiedades anticipadas de la meta; tira; efectos de contraste"
    ] },
  { t: "Activación y Yerkes-Dodson: historia y crítica",
    tip: "Las teorías de la activación entendían la motivación como un nivel de energía regulado por el sistema activador reticular ascendente; Hebb (1955) propuso un nivel óptimo intermedio. El experimento de Yerkes y Dodson (1908) se hizo con ratones, descargas y una tarea de discriminación; la U invertida popular es un híbrido posterior y casi infalsable. Como heurística: en tareas difíciles o nuevas, el óptimo de activación es más bajo.",
    v: [
      "Activación=Nivel de energía del organismo, del sueño profundo a la excitación máxima",
      "Sistema activador reticular ascendente=Estructura del tronco del encéfalo que regula la vigilia cortical",
      "Hebb (1955)=Propuso un nivel óptimo intermedio que los organismos buscan",
      "Yerkes y Dodson (1908)=Estudio con ratones, descargas y una tarea de discriminación",
      "U invertida=Curva popular entre activación y rendimiento, híbrido posterior",
      "Teigen (1994)=Mostró que la curva popular combinaba datos de 1908 e ideas de Hebb",
      "Corbett (2015)=Describió el paso de Yerkes-Dodson «de ley a folclore»",
      "Infalsabilidad=Imposibilidad de refutar una idea porque cualquier resultado encaja"
    ],
    g: [
      "Yerkes y Dodson entrenaron ___ en una tarea de discriminación según la luminosidad.|ratones|palomas|monos",
      "En la discriminación difícil, el mejor resultado se obtenía con descargas ___.|intermedias|intensas|débiles",
      "Según Hebb, si un organismo está poco activado, ___ estimulación.|busca|evita|ignora",
      "Corbett (2015) describió la evolución de Yerkes-Dodson como el paso «de ley a ___».|folclore|teoría|hipótesis",
      "Los indicadores corticales, autonómicos y conductuales a menudo no se mueven a la vez: la activación no es ___.|unitaria|medible|fisiológica"
    ],
    tf: [
      "En las tareas difíciles o nuevas, el nivel óptimo de activación es más alto que en las sencillas.|F|Es al revés: en las tareas difíciles o nuevas el nivel óptimo de activación es más bajo.",
      "El experimento original de Yerkes y Dodson no medía activación ni rendimiento humano.|V",
      "La U invertida popular puede acomodar casi cualquier resultado, lo que la hace difícilmente refutable.|V",
      "En la discriminación fácil, Yerkes y Dodson hallaron el aprendizaje más rápido con descargas intermedias.|F|En la fácil, cuanto más intensa la descarga, más rápido el aprendizaje; el óptimo intermedio apareció en la difícil."
    ],
    q: [
      "Una opositora va a enfrentarse por primera vez a un examen muy complejo. Según la heurística que se puede enseñar con rigor, ¿qué nivel de activación le conviene?|Más bajo que en una tarea sencilla|Más alto que en una tarea sencilla|El máximo que pueda alcanzar|En tareas difíciles o nuevas, el nivel óptimo de activación es más bajo que en las sencillas o muy practicadas.",
      "¿Qué se manipulaba en el experimento de Yerkes y Dodson (1908)?|La intensidad de las descargas|El nivel de estrés de estudiantes|La dosis de un estimulante|Se aplicaban a ratones descargas de distinta intensidad cuando se equivocaban en una discriminación.",
      "¿Por qué Corbett considera casi infalsable la U invertida popular?|Cualquier resultado encaja con ella|Se apoya en estudios con animales|No incluye ninguna medida de rendimiento|Cualquier resultado puede explicarse suponiendo que la activación estaba por encima o por debajo del óptimo.",
      "¿Qué estructura constituía la base fisiológica de las teorías de la activación?|El sistema activador reticular|El núcleo accumbens|El eje hipotálamo-hipófisis|El sistema activador reticular ascendente, en el tronco del encéfalo, regula el estado de vigilia de la corteza."
    ],
    inc: [
      "Sobre Yerkes-Dodson|Su U invertida procede del experimento de 1908|Hebb propuso un nivel óptimo intermedio de activación|El óptimo interactúa con la dificultad de la tarea|La U invertida es un híbrido posterior que combinó los datos de 1908 con las ideas de Hebb (Teigen, 1994)."
    ],
    seq: [],
    cls: [
      "Yerkes-Dodson, original frente a versión popular|Experimento de 1908: ratones; descargas eléctricas; tarea de discriminación|Versión popular: activación frente a rendimiento; U invertida; óptimo único"
    ] },
  { t: "Del declive de las grandes teorías a las miniteorías",
    tip: "Reeve señala tres grandes teorías que intentaron explicar toda la conducta con un único principio: voluntad, instinto e impulso. Desde los años sesenta, la revolución cognitiva, la psicología humanista, la neurociencia y la atención al contexto llevaron a las miniteorías, modelos precisos y contrastables de fenómenos concretos. No son rivales excluyentes: el reto es integrarlas.",
    v: [
      "Miniteoría=Modelo que explica con precisión un fenómeno motivacional concreto",
      "Gran teoría=Intento de explicar toda la conducta con un único principio",
      "Revolución cognitiva=Giro hacia expectativas, metas, valores y atribuciones",
      "Psicología humanista=Enfoque de Maslow y Rogers centrado en el crecimiento personal",
      "Expectativa-valor=Motivación según lo que se espera conseguir y cuánto se valora",
      "Autoeficacia=Miniteoría propuesta por Bandura en 1977",
      "Establecimiento de metas=Miniteoría de Locke y Latham",
      "Flujo=Miniteoría de Csikszentmihalyi sobre la concentración plena"
    ],
    g: [
      "La teoría del impulso decayó por la conducta motivada sin ___ y por la importancia del incentivo.|déficit|hábito|refuerzo",
      "La teoría de la autodeterminación reúne ___ miniteorías.|seis|tres|cuatro",
      "Maslow y ___ destacaron la tendencia al crecimiento personal.|Rogers|Hull|Weiner",
      "La teoría de expectativa-valor se asocia a Atkinson (1957) y a ___.|Eccles|Bandura|Locke",
      "El estudio de circuitos concretos sustituyó a conceptos globales como el ___.|impulso|flujo|autoconcepto"
    ],
    tf: [
      "Las miniteorías se consideran rivales excluyentes, por lo que hay que elegir una de ellas.|F|No son rivales excluyentes: cada una ilumina una parte de la motivación y el reto es integrarlas.",
      "La teoría de la autodeterminación de Deci y Ryan reúne a su vez varias miniteorías.|V",
      "Según Reeve, las tres grandes teorías fueron la voluntad, el instinto y el impulso.|V",
      "La teoría del instinto decayó sobre todo porque no explicaba de dónde procede la voluntad.|F|Ese fue el problema de la teoría de la voluntad; el instinto decayó por circularidad y por ignorar el aprendizaje."
    ],
    q: [
      "Una investigadora estudia cómo influyen las metas que se fija un trabajador en su rendimiento, sin aspirar a explicar toda la conducta. ¿Qué enfoque representa?|Una miniteoría|Una gran teoría|Una teoría del instinto|Explica con precisión un fenómeno concreto y contrastable, como el establecimiento de metas de Locke y Latham.",
      "¿Qué autores se asocian a la teoría del establecimiento de metas?|Locke y Latham|Deci y Ryan|Atkinson y Eccles|Locke y Latham (1990, 2002); Deci y Ryan, a la autodeterminación; Atkinson y Eccles, a expectativa-valor.",
      "¿Qué factor contribuyó al paso hacia las miniteorías?|La revolución cognitiva|El auge de los instintos|La ley de Yerkes-Dodson|Revolución cognitiva, psicología humanista, neurociencia y atención al contexto impulsaron el cambio desde los años sesenta.",
      "¿Por qué decayó la gran teoría del impulso según Reeve?|Conducta sin déficit y peso del incentivo|Circularidad y olvido del aprendizaje|No explicaba el origen de la voluntad|La circularidad fue el problema del instinto, y el origen de la voluntad, el de la teoría de la voluntad."
    ],
    inc: [
      "Sobre las miniteorías|Buscan un único principio explicativo|Explican con precisión un fenómeno concreto|Se pueden contrastar empíricamente|Explicar toda la conducta con un único principio era la ambición de las grandes teorías."
    ],
    seq: [
      "Etapas del estudio de la motivación, por orden histórico|Voluntad>Instinto>Impulso>Miniteorías"
    ],
    cls: [
      "Grandes teorías y miniteorías|Grandes teorías: voluntad; instinto; impulso|Miniteorías: autoeficacia; atribución; flujo"
    ] }
] }
);

// SAIMAP Psicología · Motivación y Emoción · Unidades 5–8
window.COURSE.units.push(
{ n: 5, t: "Teorías cognitivas de la motivación", cap: 2, pir: "alta", mods: [
  { t: "Teorías de expectativa-valor: Atkinson y Eccles",
    tip: "Las teorías de expectativa-valor sostienen que el esfuerzo depende de lo probable que parece el éxito (expectativa) y de lo que importa lograrlo (valor), combinados de forma multiplicativa. Atkinson aplicó esta lógica a la motivación de logro: como el incentivo vale 1 − Ps, quien tiene un motivo de éxito dominante prefiere tareas de dificultad intermedia, y quien teme el fracaso, las muy fáciles o muy difíciles. Eccles desglosó el valor en logro, interés, utilidad y coste, sin deducirlo de la dificultad.",
    v: [
      "Expectativa-valor=Enfoque en que la motivación es el producto de la probabilidad de éxito y su valor",
      "Motivo de éxito=Disposición estable a sentir orgullo por lograr algo",
      "Probabilidad subjetiva de éxito=Estimación personal, de 0 a 1, de conseguir el resultado",
      "Incentivo de éxito=Valor del logro según Atkinson, igual a 1 − Ps",
      "Miedo al fracaso=Motivo de evitación que lleva a eludir las tareas de dificultad intermedia",
      "Valor de logro=Importancia de hacer bien la tarea por lo que confirma de la propia identidad",
      "Valor de utilidad=Lo que sirve una tarea para alcanzar otras metas",
      "Coste=Lo que se sacrifica al implicarse en una tarea: tiempo, esfuerzo o riesgo emocional"
    ],
    g: [
      "Para Atkinson, el incentivo de éxito es mayor cuanto más ___ es la tarea.|difícil|fácil|breve",
      "Con un motivo de éxito dominante, la tendencia resultante es máxima cuando Ps vale ___.|0,5|0,9|0,1",
      "En las teorías de expectativa-valor, expectativa y valor se combinan de forma ___.|multiplicativa|aditiva|proporcional",
      "Eccles llamó valor ___ al disfrute que produce la propia actividad.|intrínseco|de utilidad|de logro",
      "Quien teme el fracaso evita las tareas ___ y prefiere las extremas.|intermedias|novedosas|colectivas"
    ],
    tf: [
      "En el modelo de Atkinson, si la probabilidad de éxito o el incentivo es nulo, la tendencia a buscar el éxito también lo es.|V",
      "Según Atkinson, quien tiene más miedo al fracaso que motivo de éxito prefiere tareas de dificultad intermedia, por ser las menos arriesgadas.|F|Es al revés: evita las intermedias y elige tareas muy fáciles o muy difíciles.",
      "En el modelo de Eccles, el valor de una tarea se deduce de su dificultad, igual que en el de Atkinson.|F|En Eccles el valor no depende de la dificultad: una tarea fácil puede ser muy importante para alguien.",
      "El coste es uno de los componentes del valor subjetivo de la tarea en el modelo de Eccles.|V"
    ],
    q: [
      "Marta, con un motivo de éxito alto y poco miedo al fracaso, elige rival de ajedrez. Según Atkinson, ¿cuál preferirá?|Uno con quien gana la mitad de las veces|Uno al que vence casi siempre sin esfuerzo|Uno muy superior al que nunca ha ganado|Con motivo de éxito dominante, la tendencia es máxima con Ps de 0,5: la dificultad intermedia ofrece un reto realista.",
      "Un estudiante con mucho miedo al fracaso se apunta a un concurso casi imposible de ganar. ¿Cómo lo explica Atkinson?|Fracasar en algo muy difícil no dice nada de uno mismo|La tarea difícil maximiza su tendencia a buscar el éxito|Su motivo de éxito supera al miedo al fracaso en ese momento|Quien teme fracasar elige tareas extremas: en las muy difíciles, el fracaso no dice nada de la propia valía.",
      "Lucía estudia Estadística sin interés porque la necesita para acceder a un máster. ¿Qué componente del valor de Eccles pesa más?|Valor de utilidad|Valor intrínseco|Valor de logro|El valor de utilidad recoge lo que la tarea sirve para otras metas, como acceder a un máster.",
      "¿Por qué el producto Ps × (1 − Ps) alcanza su máximo con Ps de 0,5?|Porque el incentivo baja al subir la probabilidad|Porque la expectativa y el valor se suman entre sí|Porque el motivo de éxito crece con la dificultad|Como el incentivo vale 1 − Ps, al aumentar la probabilidad baja el incentivo; el producto es máximo en el punto medio."
    ],
    inc: [
      "Sobre los modelos de expectativa-valor|En Atkinson, el motivo de éxito depende de la dificultad|En Atkinson, el incentivo de éxito es mayor en las tareas difíciles|En Eccles, una tarea fácil puede tener mucho valor de logro|El motivo de éxito es una disposición estable de la persona; lo que depende de la dificultad es el incentivo (1 − Ps)."
    ],
    seq: [],
    cls: [
      "Preferencia de dificultad según Atkinson|Domina el motivo de éxito: Ps cercana a 0,5; reto realista|Domina el miedo al fracaso: éxito casi seguro; tarea casi imposible"
    ] },
  { t: "La autoeficacia de Bandura",
    tip: "Bandura (1977) definió la autoeficacia como la creencia en la propia capacidad para organizar y ejecutar las acciones necesarias, y la distinguió de la expectativa de resultado, la creencia de que una conducta llevará a cierto resultado. Es específica de cada ámbito, no un rasgo global como la autoestima. Sus fuentes, de más a menos influyentes, son las experiencias de dominio, las vicarias, la persuasión verbal y los estados fisiológicos y emocionales.",
    v: [
      "Autoeficacia=Creencia en la propia capacidad para organizar y ejecutar las acciones necesarias",
      "Expectativa de resultado=Creencia de que una conducta llevará a cierto resultado",
      "Experiencias de dominio=Éxitos propios, sobre todo logrados con esfuerzo; la fuente más potente",
      "Experiencias vicarias=Ver tener éxito a otras personas parecidas a uno mismo",
      "Persuasión verbal=Ánimos y confianza que transmiten otros; efecto frágil si los hechos lo contradicen",
      "Estados fisiológicos y emocionales=Interpretación de la propia activación como señal de capacidad o incapacidad",
      "Especificidad de ámbito=Rasgo por el que la autoeficacia varía de una actividad a otra",
      "Albert Bandura=Autor que en 1977 formuló el concepto de autoeficacia"
    ],
    g: [
      "La fuente más potente de autoeficacia son las experiencias ___.|de dominio|vicarias|verbales",
      "La autoeficacia es ___ de cada ámbito, a diferencia de la autoestima.|específica|independiente|previa",
      "«Si practico la entrevista, me darán el trabajo» expresa una expectativa de ___.|resultado|eficacia|dominio",
      "Ver a una compañera parecida aprobar un examen difícil es una experiencia ___.|vicaria|de dominio|fisiológica",
      "El efecto de la persuasión verbal es más ___ y se desvanece si los hechos lo contradicen.|frágil|duradero|intenso"
    ],
    tf: [
      "Una persona puede tener una alta expectativa de resultado y, a la vez, una autoeficacia baja.|V",
      "La autoeficacia es un rasgo global de la personalidad, equivalente a la autoestima.|F|Es específica de cada ámbito: se puede tener mucha para programar y poca para hablar en público.",
      "Según Bandura, la persuasión verbal es una fuente de autoeficacia más potente que las experiencias vicarias.|F|En el orden de Bandura pesan más las experiencias vicarias; la persuasión verbal ocupa el tercer lugar.",
      "Con autoeficacia alta, un fracaso tiende a interpretarse como señal de que hace falta otra estrategia.|V"
    ],
    q: [
      "Pablo sabe que estudiar a diario lleva al aprobado, pero no se cree capaz de mantener ese ritmo. ¿Qué le ocurre?|Baja autoeficacia con alta expectativa de resultado|Baja expectativa de resultado con alta autoeficacia|Alta autoeficacia y alta expectativa de resultado|Confía en que la conducta funciona (resultado), pero no en su capacidad para realizarla (autoeficacia): su motivación será baja.",
      "Antes de un examen, a Ana le tiemblan las manos y piensa «no estoy preparada». ¿Qué fuente de autoeficacia actúa?|Estados fisiológicos y emocionales|Experiencias vicarias de sus compañeros|Persuasión verbal de su profesora|Interpretar la propia activación como señal de incapacidad rebaja la autoeficacia; leerla como preparación, no tanto.",
      "¿Qué orden de las fuentes de autoeficacia, de mayor a menor influencia, es correcto?|Dominio, vicaria, persuasión, estados fisiológicos|Vicaria, dominio, estados fisiológicos, persuasión|Dominio, persuasión, vicaria, estados fisiológicos|Bandura sitúa primero los éxitos propios, después la observación de modelos, luego los ánimos y por último la activación interpretada.",
      "¿Sobre qué influye la autoeficacia, según Bandura?|Elección, esfuerzo y persistencia en la tarea|La autoestima global y estable de la persona|La dificultad objetiva de la tarea|Influye en qué actividades se eligen, cuánto esfuerzo se invierte, cuánto se persiste y cómo se viven las dificultades."
    ],
    inc: [
      "Sobre la autoeficacia|Las experiencias vicarias son su fuente más potente|Se distingue de la expectativa de que la conducta funcione|Es específica de cada ámbito de actividad|La fuente más potente son las experiencias de dominio, los éxitos propios; las vicarias ocupan el segundo lugar."
    ],
    seq: [
      "Fuentes de autoeficacia, de mayor a menor influencia|Experiencias de dominio>Experiencias vicarias>Persuasión verbal>Estados fisiológicos y emocionales"
    ],
    cls: [] },
  { t: "La teoría atribucional de Weiner",
    tip: "Las atribuciones causales son las explicaciones que damos a nuestros resultados; la idea procede de Heider, y Weiner la convirtió en una teoría de la motivación y la emoción. Lo que importa no es la causa concreta, sino su posición en tres dimensiones: locus, estabilidad y controlabilidad. La estabilidad afecta sobre todo a la expectativa futura; el locus y la controlabilidad, a las emociones. Ojo: la capacidad es interna y estable, pero incontrolable.",
    v: [
      "Atribución causal=Explicación que una persona da a sus propios resultados",
      "Fritz Heider=Autor de la psicología del sentido común, origen de la teoría atribucional",
      "Locus=Dimensión que sitúa la causa dentro o fuera de la persona",
      "Estabilidad=Dimensión que indica si la causa se mantiene o cambia con el tiempo",
      "Controlabilidad=Dimensión que indica si la persona puede modificar la causa a voluntad",
      "Capacidad=Causa interna, estable e incontrolable",
      "Esfuerzo=Causa interna, inestable y controlable",
      "Reentrenamiento atribucional=Programa que enseña a explicar los fracasos con causas inestables y controlables"
    ],
    g: [
      "En la teoría de Weiner, la estabilidad de la causa afecta sobre todo a la ___.|expectativa futura|emoción de orgullo|ira hacia los demás",
      "La dificultad de la tarea es una causa externa, ___ e incontrolable.|estable|inestable|personal",
      "Un fracaso atribuido a una causa interna e incontrolable, como la falta de capacidad, genera ___.|vergüenza|culpa|compasión",
      "El daño causado por otro con una causa que él podía controlar provoca ___.|ira|compasión|gratitud",
      "Weiner partió de la psicología del sentido común de ___.|Heider|Bandura|Atkinson"
    ],
    tf: [
      "La capacidad es una causa interna, estable y controlable por la persona.|F|Es la trampa clásica: la capacidad es interna y estable, pero incontrolable.",
      "Según Weiner, el locus y la controlabilidad afectan sobre todo a las emociones que siguen al resultado.|V",
      "Atribuir un fracaso propio a la falta de esfuerzo suele generar vergüenza y reducir la expectativa futura.|F|El esfuerzo es interno, inestable y controlable: genera culpa y permite mantener la expectativa.",
      "Según Weiner, la búsqueda de causas es más probable cuando el resultado es inesperado, negativo o importante.|V"
    ],
    q: [
      "Raúl atribuye su suspenso a la mala suerte con las preguntas. ¿Cómo se clasifica esa causa?|Externa, inestable e incontrolable|Externa, estable e incontrolable|Interna, inestable y controlable|La suerte está fuera de la persona, cambia de una ocasión a otra y no puede modificarse a voluntad.",
      "Irene suspende y piensa «no valgo para las matemáticas». ¿Qué patrón predice Weiner?|Vergüenza y menor expectativa de aprobar|Culpa y expectativa de aprobar intacta|Ira hacia el profesor y más esfuerzo|La falta de capacidad es interna, estable e incontrolable: combina vergüenza y baja expectativa, el patrón más perjudicial.",
      "Un compañero suspende por una enfermedad que no podía evitar. Según Weiner, ¿qué emoción suele despertar en los demás?|Compasión|Ira|Gratitud|El fracaso de otro por una causa que no podía controlar suscita compasión; la ira aparece si la causa era controlable por él.",
      "¿Qué busca el reentrenamiento atribucional?|Atribuir los fracasos a causas inestables y controlables|Atribuir los éxitos a la suerte para reducir la presión|Atribuir los fracasos a la dificultad estable de la tarea|Enseña a explicar los fracasos por el esfuerzo o la estrategia: se mantiene la expectativa y la culpa empuja a corregir."
    ],
    inc: [
      "Sobre la clasificación de causas de Weiner|La dificultad de la tarea es una causa inestable|El esfuerzo es una causa interna y controlable|La suerte es una causa externa e incontrolable|La dificultad de la tarea es externa, estable e incontrolable; la causa externa e inestable es la suerte."
    ],
    seq: [],
    cls: [
      "Clasifica cada causa por su estabilidad|Estable: capacidad; dificultad de la tarea|Inestable: esfuerzo; suerte"
    ] },
  { t: "Metas de logro y establecimiento de metas",
    tip: "Dweck, Nicholls y Ames distinguieron metas de dominio (aprender y mejorar) y de rendimiento (demostrar competencia frente a otros). Elliot y McGregor las cruzaron con aproximación y evitación en un modelo 2 × 2; las de rendimiento-evitación son las que peor se asocian con aprendizaje y bienestar. Locke y Latham mostraron que las metas específicas y difíciles superan al «haz lo que puedas», aunque en tareas complejas y nuevas conviene usar metas de aprendizaje.",
    v: [
      "Metas de dominio=Orientación a aprender y mejorar; el criterio es el progreso personal",
      "Metas de rendimiento=Orientación a demostrar competencia o superar a otros; criterio social",
      "Rendimiento-evitación=Meta de evitar hacerlo peor que los demás, ligada a ansiedad",
      "Dominio-evitación=Meta de evitar no aprender o perder habilidad",
      "Modelo 3 × 2=Propuesta de Elliot, Murayama y Pekrun con tres criterios de competencia",
      "Mediadores de las metas=Dirección de la atención, esfuerzo, persistencia y búsqueda de estrategias",
      "Moderadores de las metas=Compromiso, retroalimentación, complejidad de la tarea y autoeficacia",
      "Locke y Latham=Autores de la teoría del establecimiento de metas"
    ],
    g: [
      "En el modelo 2 × 2, «hacerlo mejor que los demás» es una meta de rendimiento-___.|aproximación|evitación|dominio",
      "Según Locke y Latham, las metas específicas y ___ producen mejor rendimiento.|difíciles|fáciles|flexibles",
      "El compromiso con la meta es un ___ de su efecto sobre el rendimiento.|moderador|mediador|resultado",
      "En las metas de dominio, el criterio de éxito es el ___ personal.|progreso|prestigio|rango",
      "En tareas complejas y nuevas, una meta difícil de resultado puede ___ el rendimiento.|empeorar|duplicar|estabilizar"
    ],
    tf: [
      "Las metas de rendimiento-evitación son las que peor se asocian con el aprendizaje y el bienestar.|V",
      "Las metas de rendimiento-aproximación se asocian de forma consistente con ansiedad y estrategias superficiales.|F|Su papel sigue en debate: en unos estudios se asocian con mejores notas y en otros con ansiedad.",
      "Ponerse una meta difícil de resultado mejora el rendimiento también en tareas complejas y nuevas para la persona.|F|En tareas complejas y nuevas puede empeorarlo; ahí funcionan mejor las metas de aprendizaje.",
      "La retroalimentación sobre el progreso modula el efecto de las metas en el rendimiento.|V"
    ],
    q: [
      "Sergio estudia sobre todo para no quedar el último de la clase. ¿Qué meta tiene, según Elliot y McGregor?|Rendimiento-evitación|Dominio-evitación|Rendimiento-aproximación|Usa la comparación con otros (rendimiento) y busca evitar un resultado negativo (evitación).",
      "Una jefa pide a un equipo novato que resuelva un problema técnico complejo y nuevo. ¿Qué meta conviene?|Descubrir tres formas de resolverlo|Resolverlo en la mitad de tiempo habitual|Hacerlo lo mejor que puedan, sin más|En tareas complejas y nuevas, las metas difíciles de resultado pueden empeorar el rendimiento; conviene una meta de aprendizaje.",
      "¿Qué introduce el modelo 3 × 2 de Elliot, Murayama y Pekrun?|Tres criterios de competencia: tarea, yo y otros|Tres metas: dominio, rendimiento y evitación|Tres moderadores: compromiso, retroalimentación y tarea|Separa como criterios de competencia la tarea, el yo pasado y los otros, y los cruza con aproximación y evitación.",
      "¿Cuál es un mecanismo (mediador) por el que las metas mejoran el rendimiento?|El aumento de la persistencia|El compromiso con la meta|La complejidad de la tarea|Las metas orientan la atención, aumentan esfuerzo y persistencia y estimulan estrategias; compromiso y complejidad son moderadores."
    ],
    inc: [
      "Sobre las metas de logro|Las metas de dominio usan la comparación social como criterio|Las metas de dominio se asocian con persistencia ante el error|Las metas de rendimiento buscan demostrar competencia ante otros|El criterio de las metas de dominio es el progreso personal; la comparación social es propia de las de rendimiento."
    ],
    seq: [],
    cls: [
      "Criterio de competencia en el modelo 2 × 2|Dominio: aprender y dominar la tarea; evitar perder habilidad|Rendimiento: superar a los compañeros; evitar quedar por debajo de los demás"
    ] }
] },
{ n: 6, t: "Teorías organísmicas y humanistas", cap: 2, pir: "alta", mods: [
  { t: "Maslow: la teoría original",
    tip: "Maslow, dentro de la psicología humanista, describió en 1943 y 1954 cinco grupos de necesidades: fisiológicas, seguridad, pertenencia y amor, estima y autorrealización. Las cuatro primeras son de déficit (D) y dejan de motivar al satisfacerse; la autorrealización es de crecimiento (B) y no se agota. Las inferiores son prepotentes cuando faltan, pero Maslow no planteó un orden rígido: admitió excepciones y una satisfacción parcial y solapada.",
    v: [
      "Psicología humanista=Corriente alternativa al conductismo y al psicoanálisis, centrada en el crecimiento",
      "Prepotencia=Dominio de las necesidades inferiores sobre la conducta cuando no están satisfechas",
      "Necesidades de déficit=Las que motivan por carencia y dejan de hacerlo al satisfacerse",
      "Necesidad de crecimiento=La autorrealización, que se busca más cuanto más se desarrolla",
      "Autorrealización=Llegar a ser lo que uno puede ser, desarrollando el propio potencial",
      "Estima=Respeto de los demás, reconocimiento y sensación de competencia y valía",
      "Pertenencia y amor=Afecto, aceptación y formar parte de un grupo",
      "Experiencias cumbre=Rasgo que Maslow describió en las personas que consideraba autorrealizadas"
    ],
    g: [
      "Maslow expuso su teoría primero en un artículo de ___ en Psychological Review.|1943|1954|1960",
      "La letra B de la necesidad de crecimiento procede de being, «___».|ser|bien|básico",
      "Que alguien con hambre intensa no se preocupe por su reconocimiento ilustra la ___.|prepotencia|autorrealización|pertenencia",
      "Según Maslow, las necesidades se satisfacen de forma ___ y solapada.|parcial|completa|sucesiva",
      "El estudio de Maslow sobre personas autorrealizadas se basó en una selección personal de ___.|biografías|encuestas|experimentos"
    ],
    tf: [
      "Las necesidades de estima son necesidades de déficit en la teoría de Maslow.|V",
      "Maslow sostuvo que un nivel debe estar satisfecho al 100 % para que aparezca el siguiente.|F|Afirmó que las necesidades se satisfacen de forma parcial y solapada, y admitió excepciones.",
      "La necesidad de autorrealización deja de motivar en cuanto se satisface, igual que las de déficit.|F|Es la necesidad de crecimiento (B): no se agota, sino que se busca más cuanto más se desarrolla.",
      "Las conclusiones de Maslow sobre las personas autorrealizadas están limitadas porque no usó una muestra sistemática.|V"
    ],
    q: [
      "Un artista sigue pintando aunque vive en la pobreza y sin estabilidad. ¿Cómo lo trata la teoría de Maslow?|Como una excepción admitida por el propio Maslow|Como prueba de que la teoría queda refutada|Como un caso de necesidad de seguridad satisfecha|Maslow no planteó un orden rígido: admitió excepciones, como quien antepone sus ideales o el artista que crea en la pobreza.",
      "¿Qué necesidades son de déficit según Maslow?|De las fisiológicas a la estima|Las fisiológicas y la de seguridad|De la seguridad a la autorrealización|Las cuatro inferiores, de las fisiológicas a la estima, son de déficit; la autorrealización es de crecimiento.",
      "¿Qué idea pertenece realmente a la teoría de Maslow?|Las necesidades inferiores dominan cuando faltan|Cada piso debe completarse antes del siguiente|Solo unos pocos alcanzan la cima de la pirámide|La prepotencia es suya; exigir completar cada nivel y la imagen de la pirámide son añadidos posteriores.",
      "¿Qué distingue a la autorrealización del resto de necesidades de Maslow?|No se agota al satisfacerse|Es la más urgente cuando falta|Depende solo del reconocimiento ajeno|Es la necesidad de crecimiento (B): cuanto más se desarrolla, más se busca; las de déficit dejan de motivar al cubrirse."
    ],
    inc: [
      "Sobre la teoría original de Maslow|Representó sus cinco necesidades en forma de pirámide|Distinguió necesidades de déficit y de crecimiento|Admitió excepciones al orden de las necesidades|La pirámide no aparece en su obra; se difundió después en manuales de gestión."
    ],
    seq: [
      "Necesidades de Maslow, de la más básica a la de crecimiento|Fisiológicas>Seguridad>Pertenencia y amor>Estima>Autorrealización"
    ],
    cls: [] },
  { t: "La pirámide que Maslow no dibujó y la evidencia actual",
    tip: "La pirámide no aparece en la obra de Maslow: Bridgman, Cummings y Ballard (2019) la rastrearon hasta los manuales de gestión, con la escalera de Davis (1957) y la pirámide de McDermid (1960). Wahba y Bridwell (1976) hallaron poco apoyo al orden jerárquico, y Tay y Diener (2011), con datos de 123 países, vieron que la satisfacción de necesidades se asocia al bienestar en todas las culturas, pero sin un orden estricto. La jerarquía debe entenderse como una tendencia flexible.",
    v: [
      "Bridgman, Cummings y Ballard=Autores que en 2019 rastrearon el origen de la pirámide en manuales de gestión",
      "Keith Davis=Presentó las necesidades de Maslow como una escalera en 1957",
      "Charles McDermid=Dibujó las necesidades como una pirámide en 1960",
      "Wahba y Bridwell=Revisión de 1976 que halló poco apoyo al orden jerárquico",
      "Tay y Diener=Estudio de 2011 con datos de la Gallup World Poll en 123 países",
      "Jerarquía flexible=Lectura actual del orden de Maslow como tendencia, no como secuencia estricta",
      "Necesidades universales=Necesidades humanas ligadas al bienestar en todas las culturas",
      "Pirámide de necesidades=Imagen popular de cinco pisos, posterior a la obra de Maslow"
    ],
    g: [
      "Keith Davis presentó las necesidades de Maslow como una ___ en 1957.|escalera|pirámide|rueda",
      "Tay y Diener analizaron datos de ___ países de la Gallup World Poll.|123|57|43",
      "Wahba y Bridwell (1976) encontraron ___ apoyo para el orden jerárquico.|poco|sólido|creciente",
      "La pirámide se difundió sobre todo en los cursos de ___ de empresas.|dirección|contabilidad|derecho",
      "Según Tay y Diener, las necesidades sociales se asociaban a emociones positivas aunque las ___ no estuvieran cubiertas.|básicas|de estima|de dominio"
    ],
    tf: [
      "La pirámide de cinco pisos la dibujó Charles McDermid en 1960, no Maslow.|V",
      "Tay y Diener (2011) confirmaron que las necesidades se satisfacen en el orden estricto que propone la pirámide.|F|Hallaron relación con el bienestar en todas las culturas, pero el orden no era estricto.",
      "Que las necesidades fisiológicas y de seguridad tiendan a ser más urgentes cuando faltan es razonable como tendencia.|V",
      "Wahba y Bridwell (1976) encontraron que las necesidades se agrupaban limpiamente en las cinco categorías de Maslow.|F|Hallaron poco apoyo: las necesidades no se agrupaban limpiamente ni aparecían en la secuencia prevista."
    ],
    q: [
      "Un manual afirma que «nadie piensa en sus amigos hasta tener cubiertas al completo la comida y la seguridad». ¿Qué cabe responder?|Que ni Maslow ni los datos apoyan ese orden|Que es correcto según el artículo de Maslow de 1943|Que Tay y Diener lo confirmaron en 123 países|Maslow admitió una satisfacción parcial y solapada, y Tay y Diener hallaron que el orden no era estricto.",
      "Según Bridgman, Cummings y Ballard (2019), ¿dónde se originó la pirámide de Maslow?|En manuales de gestión empresarial|En el libro Motivation and Personality|En un artículo de Psychological Review|Davis la presentó como escalera en 1957 y McDermid como pirámide en 1960, en el ámbito de la gestión.",
      "¿Qué afirmación sobre las necesidades de Maslow tiene hoy apoyo empírico?|Hay necesidades universales ligadas al bienestar|Cada nivel se satisface antes que el siguiente|La autorrealización solo llega tras los demás|Las necesidades universales relacionadas con el bienestar están apoyadas; la secuencia estricta no lo está.",
      "¿Qué transmite la pirámide que Maslow no defendió?|Que cada nivel debe cubrirse del todo|Que existen necesidades fisiológicas|Que la estima es una necesidad humana|La pirámide sugiere completar cada piso y ver la autorrealización como cima de unos pocos; Maslow no lo sostuvo."
    ],
    inc: [
      "Sobre la evidencia acerca de Maslow|Tay y Diener hallaron un orden estricto|Wahba y Bridwell hallaron poco apoyo a la jerarquía|La satisfacción de necesidades se asocia al bienestar|Tay y Diener vieron que el orden no era estricto, aunque la satisfacción de necesidades se asociaba al bienestar."
    ],
    seq: [
      "Historia de la pirámide de necesidades|Artículo de Maslow (1943)>Motivation and Personality (1954)>Escalera de Davis (1957)>Pirámide de McDermid (1960)>Análisis de Bridgman y colaboradores (2019)"
    ],
    cls: [
      "Estado actual de cada afirmación sobre Maslow|Apoyada o razonable: necesidades universales ligadas al bienestar; mayor urgencia de las básicas cuando faltan|No apoyada o posterior: satisfacción completa de cada nivel; pirámide de cinco pisos"
    ] },
  { t: "Teoría de la autodeterminación: miniteorías y continuo",
    tip: "La TAD de Deci y Ryan es organísmica: concibe a la persona como un organismo activo que tiende a crecer e integrar experiencias si el entorno lo apoya. Tiene seis miniteorías, entre ellas la evaluación cognitiva, la integración organísmica y la de necesidades básicas (autonomía, competencia y relación). El continuo de regulación va de la amotivación a la motivación intrínseca; la regulación introyectada, aunque interna, sigue siendo controlada.",
    v: [
      "Evaluación cognitiva=Miniteoría sobre el aspecto informativo y controlador de las recompensas",
      "Integración organísmica=Miniteoría que describe el continuo de regulación de la motivación extrínseca",
      "Orientaciones de causalidad=Diferencias individuales: orientación autónoma, controlada o impersonal",
      "Contenido de metas=Miniteoría: las metas intrínsecas favorecen el bienestar más que las extrínsecas",
      "Regulación introyectada=Motivación extrínseca controlada por culpa, ansiedad u orgullo",
      "Regulación identificada=Motivación extrínseca autónoma: se valora la actividad como importante",
      "Regulación integrada=Motivación extrínseca que encaja con quién es uno",
      "Amotivación=Ausencia de motivación; extremo menos autodeterminado del continuo"
    ],
    g: [
      "En la TAD, la regulación introyectada se considera motivación extrínseca ___.|controlada|autónoma|integrada",
      "Las tres necesidades psicológicas básicas de la TAD son autonomía, competencia y ___.|relación|seguridad|estima",
      "Si predomina el aspecto ___ de una recompensa, baja la motivación intrínseca.|controlador|informativo|social",
      "La TAD se califica de ___ porque concibe a la persona como un organismo activo que tiende a crecer.|organísmica|conductual|psicoanalítica",
      "Las metas de riqueza, fama e imagen son, según la TAD, metas ___.|extrínsecas|intrínsecas|autónomas"
    ],
    tf: [
      "La regulación introyectada es una forma de motivación autónoma porque la presión procede de la propia persona.|F|Está interiorizada solo en parte y cuenta como controlada: la regulan la culpa, la ansiedad o el orgullo.",
      "Según Ryan y Deci (2020), la motivación extrínseca bien interiorizada predice buenos resultados en educación.|V",
      "El efecto de socavamiento se sitúa en la miniteoría de la integración organísmica.|F|Se sitúa en la evaluación cognitiva, que analiza el aspecto informativo y controlador de las recompensas.",
      "Que las tres necesidades de la TAD agoten todas las necesidades psicológicas básicas sigue en discusión.|V"
    ],
    q: [
      "Carla estudia porque se sentiría culpable si no lo hiciera. ¿Qué regulación muestra?|Introyectada|Identificada|Externa|La culpa es un regulador interno pero controlador: corresponde a la regulación introyectada.",
      "Daniel estudia porque cree que le servirá para ser buen psicólogo, aunque el temario no le apasiona. ¿Qué regulación muestra?|Identificada|Integrada|Intrínseca|Valora la actividad como importante para sus metas: regulación identificada, una forma autónoma de motivación extrínseca.",
      "¿Qué miniteoría de la TAD distingue las orientaciones autónoma, controlada e impersonal?|Orientaciones de causalidad|Integración organísmica|Necesidades psicológicas básicas|Las orientaciones de causalidad recogen diferencias individuales en cómo se regula la conducta.",
      "¿Qué regulaciones forman la motivación extrínseca autónoma?|Identificada e integrada|Introyectada e identificada|Externa e introyectada|Identificada e integrada son autónomas; externa e introyectada forman la motivación extrínseca controlada."
    ],
    inc: [
      "Sobre la teoría de la autodeterminación|Opone sin más la motivación intrínseca a la extrínseca|Propone autonomía, competencia y relación como necesidades|Incluye seis miniteorías sobre la calidad de la motivación|La TAD distingue varios tipos de motivación extrínseca según su grado de interiorización, en lugar de oponerlas sin más."
    ],
    seq: [
      "Continuo de autodeterminación, de menor a mayor|Amotivación>Regulación externa>Regulación introyectada>Regulación identificada>Regulación integrada>Motivación intrínseca"
    ],
    cls: [
      "Tipo de motivación extrínseca según la TAD|Controlada: regulación externa; regulación introyectada|Autónoma: regulación identificada; regulación integrada"
    ] },
  { t: "Flow y motivación de crecimiento",
    tip: "Csikszentmihalyi llamó flow al estado de implicación total en una actividad. Su condición principal es que el desafío y la habilidad sean altos y estén equilibrados; si se desequilibran aparecen ansiedad, aburrimiento o apatía. El flow es una forma intensa de motivación intrínseca y un ejemplo de motivación de crecimiento, porque exige retos cada vez mayores para mantenerse.",
    v: [
      "Flow=Estado de implicación total con desafío y habilidad altos y equilibrados",
      "Mihaly Csikszentmihalyi=Autor que estudió la experiencia óptima en escaladores, músicos o cirujanos",
      "Actividad autotélica=La que se realiza por sí misma",
      "Ansiedad=Estado con desafío alto y habilidad baja",
      "Aburrimiento=Estado con desafío bajo y habilidad alta",
      "Apatía=Estado con desafío y habilidad bajos",
      "Distorsión temporal=Sensación de que las horas parecen minutos durante la implicación total",
      "Motivación de crecimiento=Impulso a ampliar lo que uno es capaz de hacer, no a cubrir una carencia"
    ],
    g: [
      "Con desafío alto y habilidad baja, Csikszentmihalyi predice ___.|ansiedad|aburrimiento|apatía",
      "En el flow, la actividad se vuelve ___: se hace por sí misma.|autotélica|instrumental|controlada",
      "Durante el flow se produce una pérdida de la ___: uno deja de preocuparse por cómo lo ven.|autoconciencia|concentración|motivación",
      "El flow es una forma intensa de motivación ___.|intrínseca|extrínseca|introyectada",
      "Para favorecer el flow conviene dar metas claras y retroalimentación ___.|inmediata|diferida|anual"
    ],
    tf: [
      "Con desafío bajo y habilidad alta, Csikszentmihalyi predice ansiedad.|F|Con desafío bajo y habilidad alta aparece aburrimiento (o relajación); la ansiedad surge con desafío alto y habilidad baja.",
      "Para que haya flow no basta con que desafío y habilidad estén equilibrados: ambos deben ser altos.|V",
      "En el flow, la persona necesita esforzarse continuamente para mantener la sensación de control.|F|Una de sus características es la sensación de control sin tener que esforzarse por mantenerlo.",
      "El flow empuja a mejorar las propias habilidades porque exige retos cada vez mayores para mantenerse.|V"
    ],
    q: [
      "Un jugador experto gana sin esfuerzo a rivales novatos en un videojuego. ¿Qué estado predice Csikszentmihalyi?|Aburrimiento|Ansiedad|Experiencia óptima|Habilidad alta con desafío bajo produce aburrimiento o relajación; el flow exige que ambos sean altos y equilibrados.",
      "Una profesora quiere que sus alumnos entren en flow con un nuevo programa. ¿Qué medida es más coherente con el modelo?|Ajustar la dificultad al nivel de cada alumno|Reducir el reto para que nadie se frustre|Premiar con notas extra cada tarea completada|Ajustar la dificultad, dar metas claras y retroalimentación rápida y reducir interrupciones favorece el flow.",
      "¿Qué característica forma parte de la experiencia de flow?|Metas claras y retroalimentación inmediata|Atención repartida entre varias tareas a la vez|Preocupación por cómo lo ven los demás|El flow incluye metas claras, retroalimentación inmediata, concentración completa y pérdida de la autoconciencia.",
      "¿Por qué el flow es un ejemplo de motivación de crecimiento?|Busca ampliar lo que uno es capaz de hacer|Reduce una carencia del organismo|Depende de recompensas externas crecientes|En el flow no se cubre un déficit: los retos crecientes empujan a desarrollar nuevas habilidades."
    ],
    inc: [
      "Sobre el flow|Surge con desafío alto aunque falte habilidad|Implica concentración completa en la tarea|Suele acompañarse de distorsión temporal|Con desafío alto y habilidad baja aparece ansiedad; el flow requiere que ambos sean altos y estén equilibrados."
    ],
    seq: [],
    cls: [
      "Estados según el desafío de la tarea|Desafío alto: flow; ansiedad|Desafío bajo: aburrimiento; apatía"
    ] }
] },
{ n: 7, t: "Hambre", cap: 3, pir: "media", mods: [
  { t: "Señales periféricas",
    tip: "El hambre depende de señales a corto plazo (si hay comida ahora en el tubo digestivo) y a largo plazo (cuánta energía hay almacenada). La grelina, del estómago, es la única hormona periférica orexígena; CCK, PYY, GLP-1 y la distensión gástrica producen saciedad a corto plazo. La leptina, de los adipocitos, informa de las reservas de grasa; en la obesidad común está alta, pero hay resistencia a ella.",
    v: [
      "Grelina=Hormona del estómago que aumenta el hambre y sube antes de las comidas",
      "CCK=Hormona intestinal de saciedad liberada al llegar grasas y proteínas",
      "PYY=Hormona de la porción final del intestino que produce saciedad tras comer",
      "GLP-1=Hormona intestinal que enlentece el vaciado gástrico y favorece la insulina",
      "Leptina=Hormona de los adipocitos que informa de las reservas de grasa",
      "Hipótesis glucostática=El hambre aparece cuando baja la glucosa disponible para las células",
      "Hipótesis lipostática=El cerebro vigila la grasa corporal y ajusta la ingesta para mantenerla",
      "Resistencia a la leptina=Menor respuesta cerebral a la hormona adiposa pese a niveles altos"
    ],
    g: [
      "La grelina es la única hormona periférica ___ conocida.|orexígena|anorexígena|lipostática",
      "Las señales a corto plazo llegan por el nervio vago al núcleo del tracto ___.|solitario|óptico|arqueado",
      "La leptina es una señal de ___ que actúa a largo plazo.|adiposidad|distensión|glucemia",
      "La CCK se libera en el intestino delgado al llegar grasas y ___.|proteínas|azúcares|fibras",
      "Los fármacos como la semaglutida imitan la acción del ___ y reducen el apetito.|GLP-1|PYY|CCK"
    ],
    tf: [
      "En la obesidad común, los niveles de leptina suelen estar bajos, por lo que administrarla es un tratamiento eficaz.|F|Están altos, pero el cerebro responde menos a ella; por eso administrarla no sirve como tratamiento general.",
      "La insulina actúa como señal de adiposidad y también de saciedad.|V",
      "La grelina se produce en el intestino delgado y aumenta tras las comidas.|F|Se produce en el estómago, sube antes de las comidas y baja tras comer.",
      "La hipótesis lipostática anticipó el descubrimiento de la leptina.|V"
    ],
    q: [
      "Tras una dieta, Elena ha perdido grasa y nota más hambre de lo habitual. ¿Qué señal lo explica mejor?|La bajada de la leptina|El aumento de la CCK intestinal|El aumento del PYY tras comer|La leptina es proporcional a la grasa: al perder peso baja, el cerebro lo interpreta como escasez y aumenta el hambre.",
      "¿Qué problema tiene la hipótesis glucostática como explicación general?|La glucosa apenas varía antes de comer|La glucosa solo regula el peso a largo plazo|La glucosa no llega al hipotálamo|En condiciones normales la glucosa en sangre apenas varía antes de comer, así que solo explica en parte el corto plazo.",
      "¿Qué combinación incluye solo señales anorexígenas?|CCK, PYY y GLP-1|Grelina, CCK y leptina|Leptina, grelina y PYY|La grelina es la única hormona periférica orexígena; CCK, PYY y GLP-1 reducen el apetito.",
      "¿Por qué vías llegan al cerebro las señales de hambre y saciedad a corto plazo?|La sangre y el nervio vago|La médula espinal y la linfa|El nervio óptico y la sangre|Las hormonas actúan por la sangre sobre el hipotálamo, y el vago informa al núcleo del tracto solitario."
    ],
    inc: [
      "Sobre las señales periféricas del hambre|La leptina regula sobre todo el hambre de comida en comida|La distensión gástrica produce saciedad por el nervio vago|El GLP-1 enlentece el vaciado gástrico|La leptina es una señal a largo plazo que informa de las reservas de grasa, no de cada comida."
    ],
    seq: [],
    cls: [
      "Escala temporal de cada señal|Corto plazo: grelina; CCK; PYY; GLP-1; distensión gástrica|Largo plazo: leptina"
    ] },
  { t: "El hipotálamo",
    tip: "El modelo clásico de dos centros situaba la saciedad en el hipotálamo ventromedial (su lesión causa hiperfagia) y el hambre en el lateral (su lesión causa afagia), pero quedó superado: las lesiones dañaban fibras de paso y alteraban el metabolismo. Hoy el punto de partida es el núcleo arqueado, con neuronas NPY/AgRP (orexígenas) y POMC/CART (anorexígenas). Proyectan al núcleo paraventricular, donde la α-MSH activa los receptores MC4R, y al hipotálamo lateral (orexina, MCH).",
    v: [
      "Hipotálamo ventromedial=Región cuya lesión produce hiperfagia y obesidad en el modelo clásico",
      "Hipotálamo lateral=Región cuya lesión produce afagia; contiene neuronas de orexina y MCH",
      "Núcleo arqueado=Núcleo junto al tercer ventrículo que integra las señales periféricas",
      "NPY/AgRP=Neuronas orexígenas del núcleo arqueado activadas por la grelina",
      "POMC/CART=Neuronas anorexígenas activadas por la leptina y la insulina",
      "Receptor MC4R=Receptor del núcleo paraventricular cuya activación produce saciedad",
      "α-MSH=Derivado de la proopiomelanocortina que activa los receptores MC4R",
      "Orexina=Péptido del hipotálamo lateral, también llamado hipocretina, que estimula la ingesta"
    ],
    g: [
      "En el modelo clásico, la lesión del hipotálamo ventromedial produce ___.|hiperfagia|afagia|adipsia",
      "El AgRP ___ los receptores MC4R, lo que favorece el hambre.|bloquea|activa|sensibiliza",
      "El núcleo arqueado está junto a la base del tercer ventrículo, donde la barrera hematoencefálica es más ___.|permeable|gruesa|selectiva",
      "La lesión del HVM aumenta la secreción de ___, de modo que más energía se almacena como grasa.|insulina|grelina|leptina",
      "La α-MSH, que activa los receptores MC4R, deriva de un precursor llamado ___.|proopiomelanocortina|hormona concentradora de melanina|péptido relacionado con agutí"
    ],
    tf: [
      "La lesión del hipotálamo lateral produce hiperfagia y obesidad.|F|Es la trampa clásica: la lesión del lateral produce afagia; la del ventromedial, hiperfagia.",
      "Las neuronas NPY/AgRP aumentan la ingesta y reducen el gasto energético.|V",
      "Las neuronas POMC/CART del núcleo arqueado son activadas por la grelina.|F|La grelina activa las NPY/AgRP; las POMC/CART se activan con la leptina y la insulina.",
      "Parte del efecto de las lesiones clásicas se debía a la destrucción de haces de fibras que pasaban por la zona.|V"
    ],
    q: [
      "En un experimento clásico, una rata con una lesión del hipotálamo ventromedial come en exceso y engorda. ¿Qué explicación actual es más completa?|La lesión altera el metabolismo y también daña fibras de paso|Se ha destruido el único centro de la saciedad del cerebro|Se ha activado el centro del hambre del hipotálamo lateral|El modelo de dos centros quedó superado: la lesión aumenta la insulina, afecta a fibras de paso y la regulación implica muchas regiones.",
      "¿Qué efecto tiene la leptina sobre las neuronas del núcleo arqueado?|Inhibe NPY/AgRP y activa POMC/CART|Activa NPY/AgRP e inhibe POMC/CART|Activa ambas poblaciones por igual|La leptina inhibe las neuronas orexígenas y activa las anorexígenas; la grelina, en cambio, activa las NPY/AgRP.",
      "¿Dónde actúa la α-MSH liberada por las neuronas POMC para producir saciedad?|En los receptores MC4R del núcleo paraventricular|En las neuronas de orexina del hipotálamo lateral|En el núcleo del tracto solitario del tronco|La α-MSH activa los receptores MC4R del núcleo paraventricular; el AgRP bloquea esos mismos receptores.",
      "¿Qué neuropéptidos del hipotálamo lateral estimulan la búsqueda de comida?|Orexina y MCH|NPY y α-MSH|CART y AgRP|El hipotálamo lateral contiene neuronas de orexina (hipocretina) y de MCH, que estimulan la búsqueda de comida y la ingesta."
    ],
    inc: [
      "Sobre el circuito hipotalámico del hambre|El hipotálamo lateral es un interruptor autónomo del hambre|El núcleo arqueado contiene dos poblaciones de efecto opuesto|El AgRP favorece el hambre bloqueando los receptores MC4R|El HL y el NPV son estaciones de un circuito que integra señales periféricas, no interruptores independientes."
    ],
    seq: [],
    cls: [
      "Neuronas del núcleo arqueado|NPY/AgRP: orexígenas; activadas por la grelina|POMC/CART: anorexígenas; activadas por la leptina"
    ] },
  { t: "Punto de ajuste y punto de asentamiento",
    tip: "La teoría del punto de ajuste supone un peso de referencia defendido como un termostato: si el peso baja, aumenta el hambre y baja el gasto. La del punto de asentamiento sostiene que el peso se estabiliza donde se equilibran genética, dieta, actividad, sueño y entorno, y explica mejor el aumento de peso en entornos de abundancia. El debate sigue abierto y muchos autores combinan ambas ideas. Los modelos de incentivo positivo añaden que comemos también por el placer anticipado.",
    v: [
      "Punto de ajuste=Peso de referencia fijado que el organismo defiende activamente",
      "Punto de asentamiento=Peso que resulta del equilibrio entre todos los factores que influyen en él",
      "Termostato=Analogía del peso de referencia defendido por el organismo",
      "Depósito con grifo y desagüe=Analogía del peso que se estabiliza sin valor de referencia",
      "Incentivo positivo=Modelo según el cual comemos por el placer anticipado de la comida",
      "Querer=Impulso dopaminérgico a buscar alimentos apetecibles sin necesidad energética",
      "Nuevo equilibrio=Peso al que se desplaza el cuerpo cuando un factor cambia de forma duradera",
      "Comer por déficit=Comer para cubrir una necesidad energética, idea que los modelos de incentivo matizan"
    ],
    g: [
      "Según el punto de ajuste, si el peso baja, el hambre aumenta y el gasto de energía ___.|disminuye|aumenta|se mantiene",
      "El punto de asentamiento explica mejor el aumento de peso en entornos de ___.|abundancia|escasez|altitud",
      "La teoría del punto de ___ compara la regulación del peso con un termostato.|ajuste|asentamiento|saciedad",
      "Los modelos de incentivo positivo subrayan que comemos también por el placer ___ de la comida.|anticipado|olvidado|compartido",
      "Según el punto de asentamiento, si un factor cambia de forma duradera, el peso se desplaza a un nuevo ___.|equilibrio|termostato|umbral"
    ],
    tf: [
      "Según la teoría del punto de asentamiento, el peso se defiende activamente en torno a un valor de referencia.|F|Eso es el punto de ajuste; en el asentamiento el peso resulta del equilibrio de factores, sin valor fijado.",
      "Ambas teorías pueden explicar la recuperación del peso tras una dieta, aunque de forma distinta.|V",
      "Está demostrado que el organismo defiende un peso fijo, como sostiene la teoría del punto de ajuste.|F|Es una cuestión en debate; muchos autores combinan el punto de ajuste y el de asentamiento.",
      "Muchos autores sostienen que el organismo se defiende más contra la pérdida de peso que contra la ganancia.|V"
    ],
    q: [
      "Tras años estable, Luis pasa a un trabajo sedentario con comida rápida a diario, y su peso sube hasta estabilizarse en un valor nuevo. ¿Qué teoría lo explica con más facilidad?|Punto de asentamiento|Punto de ajuste|Hipótesis glucostática|Si un factor cambia de forma duradera, el peso se desplaza a un nuevo equilibrio sin necesidad de un valor de referencia.",
      "Según el punto de asentamiento, ¿cuándo se recupera el peso tras una dieta?|Si se vuelve a los hábitos previos|Cuando el cuerpo defiende su peso de referencia|Cuando la glucosa en sangre baja de forma brusca|El peso vuelve si regresan los factores previos; no hace falta suponer un valor de referencia defendido.",
      "¿Qué hecho le cuesta explicar a la teoría del punto de ajuste?|El aumento del peso en sociedades de abundancia|La bajada de la leptina tras una pérdida de peso|La escasa variación del peso adulto de un año a otro|Un peso fijado no explica por qué sube en sociedades con comida abundante y barata, ni sus cambios con dieta o estrés.",
      "Sin hambre, tras cenar, Nuria siente ganas de un pastel que ve en un escaparate. ¿Qué enfoque lo explica mejor?|Modelos de incentivo positivo|Hipótesis lipostática|Teoría del punto de ajuste|No comemos solo por déficit: el placer anticipado de la comida, con la dopamina, impulsa a buscarla sin necesidad energética."
    ],
    inc: [
      "Sobre la regulación del peso corporal|El punto de asentamiento supone un peso fijado de antemano|El punto de ajuste predice más hambre tras perder peso|En condiciones estables el peso adulto varía poco cada año|El punto de asentamiento no supone un valor de referencia: el peso resulta del equilibrio de factores."
    ],
    seq: [],
    cls: [
      "Rasgos de cada teoría del peso|Punto de ajuste: valor de referencia defendido; analogía del termostato|Punto de asentamiento: equilibrio entre factores; analogía del depósito"
    ] },
  { t: "Factores sociales, ambientales y culturales",
    tip: "Las señales fisiológicas no explican por sí solas cuánto, qué y cuándo comemos. En compañía se come más (facilitación social) y se imita a los demás (modelado); las raciones grandes, la variedad y las señales aprendidas aumentan la ingesta, y la saciedad sensorial específica explica que quepa el postre. Las normas culturales y el ideal de delgadez también influyen; la restricción mantenida es un factor de riesgo de trastornos alimentarios.",
    v: [
      "Facilitación social=Tendencia a comer más en compañía que a solas",
      "Modelado=Ajuste de lo que uno come a lo que comen los demás",
      "Saciedad sensorial específica=Pérdida de atractivo del alimento que se está comiendo frente a otros",
      "Aversión gustativa aprendida=Rechazo de un sabor asociado a malestar digestivo, a veces tras una vez",
      "Señales aprendidas=Hora, olor o anuncios que desencadenan hambre por condicionamiento clásico",
      "Tamaño de la ración=Factor por el que los envases y platos grandes aumentan lo ingerido",
      "Restricción alimentaria=Factor de riesgo de trastornos alimentarios cuando se mantiene",
      "Ideal de delgadez=Asociación cultural entre estar delgado, éxito y atractivo"
    ],
    g: [
      "La facilitación social es mayor en comidas ___ y con personas conocidas.|largas|rápidas|formales",
      "La ___ en una misma comida aumenta la ingesta total.|variedad|soledad|lentitud",
      "El hambre que despierta el olor de la comida o un anuncio se explica por condicionamiento ___.|clásico|operante|vicario",
      "La grelina sube antes de la hora ___ de comer, porque el organismo anticipa la comida.|habitual|nocturna|teórica",
      "El entorno actual favorece comer de más porque los mecanismos contra la ___ son más potentes que los que frenan el exceso.|escasez|saciedad|variedad"
    ],
    tf: [
      "La saciedad sensorial específica explica que tras un plato principal todavía apetezca un postre.|V",
      "Las aversiones gustativas requieren muchas asociaciones repetidas entre un sabor y el malestar.|F|Pueden aprenderse tras una sola experiencia de malestar digestivo asociado al sabor.",
      "En compañía se suele comer menos que a solas, porque se cuida más la imagen.|F|Por facilitación social se suele comer más en compañía, sobre todo en comidas largas y con conocidos.",
      "Los trastornos de la conducta alimentaria combinan factores biológicos, psicológicos y socioculturales.|V"
    ],
    q: [
      "En un bufé con muchos platos distintos, Jorge come bastante más que en casa con un único plato. ¿Qué factor actúa sobre todo?|La variedad de alimentos|Una aversión gustativa|El modelado social|La variedad aumenta la ingesta total, porque el atractivo baja sobre todo para el alimento que ya se ha comido.",
      "Tras una intoxicación con mejillones, Marta rechaza su sabor durante años. ¿Qué explica este rechazo?|Una aversión aprendida por condicionamiento|La saciedad sensorial específica del marisco|Una norma cultural sobre el marisco|Un sabor asociado a un malestar digestivo se rechaza después, a veces tras una sola experiencia.",
      "Las personas tienden a terminar lo que se les sirve. ¿Qué factor de la ingesta se apoya en esa tendencia?|El tamaño de la ración|La saciedad sensorial específica|La facilitación social|Las raciones y los envases grandes aumentan la cantidad ingerida, porque se tiende a terminar lo servido.",
      "¿Por qué el entorno actual favorece comer más de lo necesario?|Lo que protege de la escasez supera a lo que frena el exceso|Las señales intestinales de saciedad han perdido eficacia|La grelina se libera hoy en mayor cantidad que antes|Con comida apetecible, barata y siempre disponible, los mecanismos que protegen de la escasez se imponen a los que frenan el exceso."
    ],
    inc: [
      "Sobre los factores no fisiológicos de la ingesta|Lo que se considera comida es igual en todas las culturas|La hora habitual puede desencadenar hambre|En compañía se ajusta lo que se come a lo que comen los demás|Las normas culturales determinan qué se considera comida: lo que en una cultura es un manjar puede producir rechazo en otra."
    ],
    seq: [],
    cls: [] }
] },
{ n: 8, t: "Sed", cap: 3, pir: "media", mods: [
  { t: "El agua del organismo y su regulación",
    tip: "El agua supone en torno al 60 % del peso de un adulto joven: unos dos tercios son intracelulares y un tercio extracelular (intersticial y plasma). Se desplaza por ósmosis hacia el compartimento más concentrado. El riñón la ahorra con la vasopresina, producida en los núcleos supraóptico y paraventricular y liberada en la neurohipófisis, y con la aldosterona, que retiene sodio; pero solo beber repone el agua perdida.",
    v: [
      "Compartimento intracelular=Agua dentro de las células; unos dos tercios del total",
      "Compartimento extracelular=Líquido intersticial y plasma; alrededor de un tercio del agua corporal",
      "Ósmosis=Paso del agua hacia el compartimento más concentrado",
      "Medio hipertónico=Líquido extracelular más concentrado, que hace salir agua de las células",
      "Medio hipotónico=Líquido extracelular más diluido, que hace que las células se hinchen",
      "Agua metabólica=La que se produce al oxidar los nutrientes",
      "Vasopresina=Hormona antidiurética que hace que el riñón reabsorba agua",
      "Aldosterona=Hormona de la corteza suprarrenal que hace que el riñón retenga sodio"
    ],
    g: [
      "En un adulto joven, el agua supone en torno al ___ del peso corporal.|60 %|30 %|90 %",
      "La vasopresina se libera en la ___, o hipófisis posterior.|neurohipófisis|adenohipófisis|corteza suprarrenal",
      "Si el líquido extracelular se vuelve hipertónico, las células ___.|se encogen|se hinchan|se dividen",
      "La vasopresina la producen neuronas de los núcleos supraóptico y ___ del hipotálamo.|paraventricular|arqueado|ventromedial",
      "Las respuestas renales ___ agua, pero no la reponen.|ahorran|eliminan|producen"
    ],
    tf: [
      "La mayor parte del agua del organismo se encuentra en el compartimento extracelular.|F|Unos dos tercios del agua total son intracelulares; el extracelular supone alrededor de un tercio.",
      "El plasma sanguíneo forma parte del líquido extracelular.|V",
      "La aldosterona se libera en la neurohipófisis y hace que el riñón reabsorba agua.|F|La aldosterona procede de la corteza suprarrenal y retiene sodio; reabsorber agua es la acción de la vasopresina.",
      "Las pérdidas de agua por la piel y la respiración no se pueden evitar.|V"
    ],
    q: [
      "Un paciente recibe un suero muy diluido y su líquido extracelular se vuelve hipotónico. ¿Qué les ocurre a sus células?|Entra agua y se hinchan|Sale agua y se encogen|No cambia su volumen|En un medio extracelular más diluido, el agua entra por ósmosis en las células, más concentradas, y estas se hinchan.",
      "¿Por qué, al retener sodio, el organismo retiene también agua?|El agua sigue a los solutos por ósmosis|El sodio se transforma en agua metabólica|El sodio estimula la producción de orina|Las membranas dejan pasar el agua pero no el sodio: el agua se desplaza por ósmosis hacia donde hay más solutos.",
      "¿Qué efecto tiene la vasopresina sobre la orina?|Orina más concentrada y en menor cantidad|Orina más diluida y en una cantidad mayor|Orina con más sodio y más volumen|La vasopresina hace que el riñón reabsorba agua: la orina sale más concentrada y en menor cantidad.",
      "¿Cuál de estas es una vía de entrada de agua al organismo?|El agua metabólica de los nutrientes|La sudoración en un ambiente caluroso|La liberación de aldosterona|Se gana agua con la bebida, los alimentos y el agua metabólica que produce la oxidación de los nutrientes."
    ],
    inc: [
      "Sobre la regulación hídrica|El riñón basta para reponer el agua perdida|La vasopresina se libera en la neurohipófisis|La aldosterona hace que el riñón retenga sodio|El riñón ahorra agua pero no la repone: para recuperarla hace falta beber, conducta que impulsa la sed."
    ],
    seq: [],
    cls: [
      "Compartimentos del agua corporal|Intracelular: agua dentro de las células|Extracelular: líquido intersticial; plasma sanguíneo"
    ] },
  { t: "Sed osmótica",
    tip: "La sed osmótica aparece cuando aumenta la concentración de solutos del líquido extracelular, por ejemplo tras comer algo salado. El agua sale de las células (deshidratación celular) y lo detectan los osmorreceptores del OVLT y del órgano subfornical, órganos circunventriculares sin barrera hematoencefálica. Estos provocan liberación de vasopresina y sed; lo que se necesita es agua sin sal.",
    v: [
      "Sed osmótica=Sed causada por el aumento de la concentración de solutos extracelulares",
      "Deshidratación celular=Salida de agua de las células por un medio extracelular hipertónico",
      "Osmorreceptores=Neuronas que detectan la concentración del medio o su propio volumen",
      "OVLT=Órgano vasculoso de la lámina terminal, sede de osmorreceptores",
      "Órgano subfornical=Órgano circunventricular sensible a la concentración y a la angiotensina II",
      "Órganos circunventriculares=Regiones cerebrales que carecen de barrera hematoencefálica",
      "Agua sin sal=Lo que hay que beber para diluir el líquido extracelular en la sed osmótica",
      "Respirar en ambiente seco=Pérdida de agua sin sales que puede provocar sed osmótica"
    ],
    g: [
      "En la sed osmótica, el compartimento que pierde agua es el ___.|intracelular|plasmático|intersticial",
      "Los osmorreceptores están en órganos ___, que carecen de barrera hematoencefálica.|circunventriculares|periventriculares|subcorticales",
      "Los aperitivos salados aumentan la concentración de ___ y, con ella, las ganas de beber.|sodio|glucosa|agua",
      "Los osmorreceptores activan la liberación de ___ para que el riñón ahorre agua.|vasopresina|aldosterona|renina",
      "En la sed osmótica, lo que el organismo necesita es agua ___.|sin sal|con sal|con azúcar"
    ],
    tf: [
      "La sed osmótica se debe sobre todo a una pérdida de volumen de sangre.|F|Es la trampa típica: se debe a un aumento de la concentración de solutos que deshidrata las células.",
      "Los órganos circunventriculares detectan directamente la composición de la sangre porque carecen de barrera hematoencefálica.|V",
      "Perder agua sin perder sales, como al respirar en un ambiente seco, puede provocar sed osmótica.|V",
      "En la sed osmótica, lo más adecuado es beber líquidos con algo de sal para reponer los solutos.|F|Se necesita agua sin sal, que diluya el líquido extracelular; la sal se busca en la sed hipovolémica."
    ],
    q: [
      "Tras comer un plato de jamón muy salado, Andrés tiene mucha sed. ¿Qué tipo de sed y qué detectores intervienen?|Osmótica, por osmorreceptores del OVLT|Hipovolémica, por barorreceptores cardíacos|Osmótica, por barorreceptores del riñón|La sal aumenta la concentración extracelular, deshidrata las células y activa los osmorreceptores del OVLT y del órgano subfornical.",
      "¿Qué dos respuestas activan los osmorreceptores?|Liberación de vasopresina y sed|Liberación de renina y apetito de sal|Liberación de aldosterona y diuresis|Los osmorreceptores provocan la liberación de vasopresina (el riñón ahorra agua) y la sed (la persona busca agua).",
      "¿Por qué los principales osmorreceptores se sitúan en el OVLT y el órgano subfornical?|Carecen de barrera hematoencefálica|Reciben aferencias del nervio vago|Contienen neuronas de orexina|Al no tener barrera hematoencefálica, estas regiones «ven» directamente la composición de la sangre.",
      "Un excursionista pasa horas respirando aire muy seco en alta montaña, casi sin sudar. ¿Qué tipo de sed es más probable?|Osmótica|Hipovolémica|Anticipatoria|Pierde agua sin perder sales, de modo que aumenta la concentración extracelular y aparece la sed osmótica."
    ],
    inc: [
      "Sobre la sed osmótica|Las células se hinchan al entrar agua en ellas|Los osmorreceptores están en órganos circunventriculares|Provoca la liberación de vasopresina|En la sed osmótica el medio extracelular es hipertónico: el agua sale de las células y estas se encogen."
    ],
    seq: [
      "Mecanismo de la sed osmótica|Aumenta el sodio extracelular>El agua sale de las células>Los osmorreceptores detectan el cambio>Se libera vasopresina y aparece la sed"
    ],
    cls: [] },
  { t: "Sed hipovolémica",
    tip: "La sed hipovolémica aparece cuando baja el volumen del líquido extracelular por pérdida de agua y sales (hemorragia, vómitos, diarrea, sudoración intensa). Las células no se deshidratan: bajan el volumen de sangre y la presión arterial. Los barorreceptores y el riñón (renina, angiotensina II) activan la sed a través del órgano subfornical, junto con la vasopresina y la aldosterona, que despierta apetito de sal. Ambos tipos de sed convergen en el núcleo preóptico mediano.",
    v: [
      "Sed hipovolémica=Sed causada por la pérdida de volumen de líquido extracelular",
      "Barorreceptores=Detectores de presión y volumen situados en el corazón y los grandes vasos",
      "Renina=Sustancia que libera el riñón cuando se reduce el flujo sanguíneo",
      "Angiotensina II=Producto de la cascada de la renina que provoca sed y vasoconstricción",
      "Apetito de sal=Búsqueda de sodio favorecida por la aldosterona tras perder volumen",
      "Núcleo preóptico mediano=Región que integra las señales de ambos tipos de sed",
      "Solución de rehidratación oral=Líquido con algo de sal usado en las diarreas para recuperar volumen",
      "Vasoconstricción=Contracción de los vasos sanguíneos que produce la angiotensina II"
    ],
    g: [
      "La angiotensina II activa la sed actuando sobre el ___.|órgano subfornical|núcleo supraóptico|núcleo arqueado",
      "En la sed hipovolémica la concentración apenas cambia, de modo que las células ___.|no se deshidratan|se encogen mucho|se hinchan",
      "Cuando el riñón detecta menos flujo sanguíneo, libera ___.|renina|vasopresina|aldosterona",
      "El núcleo preóptico mediano se sitúa entre el OVLT y el ___.|órgano subfornical|núcleo arqueado|tercer ventrículo",
      "La sed hipovolémica aparece cuando se pierden agua y ___ a la vez.|sales|grasas|proteínas"
    ],
    tf: [
      "En la sed hipovolémica, la angiotensina II estimula también la secreción de aldosterona y la liberación de vasopresina.|V",
      "La angiotensina II activa la sed actuando sobre los osmorreceptores del núcleo arqueado.|F|Actúa sobre el órgano subfornical, un órgano circunventricular; el núcleo arqueado regula el hambre.",
      "Tras una hemorragia, beber solo agua en abundancia basta para restablecer el volumen extracelular.|F|Al perderse agua y sales, el agua sola diluiría el medio; se prefieren líquidos con algo de sal.",
      "En la vida real, la sed osmótica y la hipovolémica suelen combinarse, por ejemplo tras un ejercicio con mucho sudor.|V"
    ],
    q: [
      "Un niño con diarrea intensa tiene sed y prefiere bebidas algo saladas. ¿Qué explica esa preferencia?|Ha perdido agua y sales a la vez|Sus células se han deshidratado|Su sodio extracelular ha subido mucho|En la sed hipovolémica se pierden agua y sales; la aldosterona y otras señales despiertan un apetito de sal.",
      "¿Qué detecta la caída de presión en la sed hipovolémica?|Barorreceptores del corazón y los grandes vasos|Osmorreceptores del órgano vasculoso de la lámina terminal|Neuronas del núcleo preóptico mediano|Los barorreceptores informan al tronco del encéfalo y al hipotálamo; el preóptico mediano integra, no detecta la presión.",
      "¿Qué hormonas intervienen en la sed hipovolémica y no en la osmótica?|Angiotensina II y aldosterona|Vasopresina y angiotensina II|Vasopresina y aldosterona|La vasopresina participa en ambas; la angiotensina II y la aldosterona son propias de la sed hipovolémica.",
      "Tras correr una maratón con calor y sudar mucho, Laura tiene sed. ¿Qué tipo de sed presenta?|Osmótica e hipovolémica a la vez|Osmótica, por el aumento de la concentración|Hipovolémica, por la pérdida de volumen|Con mucho sudor se pierde volumen y a la vez aumenta la concentración: ambos tipos de sed suelen combinarse."
    ],
    inc: [
      "Sobre la sed hipovolémica|Se debe a la deshidratación de las células|Puede deberse a vómitos o hemorragias|La angiotensina II produce vasoconstricción|En la hipovolémica la concentración apenas cambia y las células no se deshidratan; lo que baja es el volumen del plasma."
    ],
    seq: [
      "Mecanismo de la sed hipovolémica|Pérdida de agua y sales>Bajan el volumen y la presión>El riñón libera renina>Se produce angiotensina II>La angiotensina II actúa sobre el órgano subfornical"
    ],
    cls: [
      "Rasgos de cada tipo de sed|Osmótica: osmorreceptores; deshidratación celular; se busca agua|Hipovolémica: barorreceptores; renina y angiotensina II; se busca agua y sal"
    ] },
  { t: "Saciedad y factores sociales de la bebida",
    tip: "Una persona sedienta deja de beber antes de que se corrijan la concentración y el volumen, gracias a señales que anticipan la rehidratación: orofaríngeas, gastrointestinales y, después, las posteriores a la absorción. Gran parte de lo que bebemos no responde a un déficit: influyen los hábitos, el sabor y la temperatura, el contexto social, el alcohol, la edad y las normas culturales. El alcohol inhibe la vasopresina, y en las personas mayores la sed suele estar atenuada.",
    v: [
      "Saciedad anticipatoria=Cese de la bebida antes de corregirse la concentración y el volumen",
      "Señales orofaríngeas=Paso del agua por boca y garganta, que reduce pronto la sed",
      "Señales gastrointestinales=Distensión del estómago y detección de agua en el intestino",
      "Señales posteriores a la absorción=Corrección de concentración y volumen que consolida la saciedad",
      "Alcohol=Sustancia que inhibe la vasopresina y aumenta la producción de orina",
      "Sed atenuada=Rasgo frecuente en personas mayores, que pueden beber menos de lo necesario",
      "Función social de la bebida=Uso de las bebidas para relacionarse, como el café con un compañero",
      "Hábitos de bebida=Beber con las comidas o en pausas habituales, haya o no sed"
    ],
    g: [
      "Tragar agua reduce rápidamente la sed y la liberación de ___.|vasopresina|aldosterona|renina",
      "El alcohol ___ la liberación de vasopresina y puede favorecer la deshidratación.|inhibe|estimula|duplica",
      "Si una persona esperara a corregir del todo la concentración, bebería ___.|de más|de menos|lo justo",
      "En las personas mayores, la sensación de sed suele estar ___.|atenuada|aumentada|intacta",
      "Las bebidas frías o ___ se consumen en mayor cantidad.|agradables|amargas|templadas"
    ],
    tf: [
      "Una persona sedienta deja de beber cuando el agua ingerida ya ha corregido por completo su concentración y volumen.|F|Deja de beber antes, gracias a señales orofaríngeas y gastrointestinales que anticipan la rehidratación.",
      "La variedad de sabores aumenta la cantidad de bebida ingerida.|V",
      "El alcohol estimula la liberación de vasopresina, por lo que reduce la producción de orina.|F|La inhibe: aumenta la producción de orina y puede favorecer la deshidratación.",
      "En adultos sanos, la sed es una buena guía de cuánto beber.|V"
    ],
    q: [
      "Un hombre de 85 años bebe muy poco en pleno verano, aunque empieza a deshidratarse. ¿Qué factor es más probable?|La sed atenuada propia de la edad|Un exceso de liberación de vasopresina|Una saciedad orofaríngea más intensa|En las personas mayores la sed suele estar atenuada y pueden beber menos de lo necesario, sobre todo con calor o enfermedad.",
      "¿Qué señal de saciedad hídrica actúa primero?|Las orofaríngeas, al tragar|Las posteriores a la absorción|La corrección del volumen plasmático|El paso del agua por la boca y la garganta reduce pronto la sed; las señales posteriores a la absorción solo consolidan la saciedad.",
      "¿Qué responde mejor al mito de beber un número fijo de vasos al día?|Las necesidades varían con clima y actividad|Hay que beber ocho vasos aunque no haya sed|La sed no es una guía fiable en adultos sanos|Las necesidades dependen del clima, la actividad, la dieta y la salud; parte del agua procede de alimentos y otras bebidas.",
      "En una cena, Sara bebe al ritmo de sus amigos aunque no tiene sed. ¿Qué factor explica sobre todo su conducta?|El contexto social|La sed hipovolémica|La saciedad anticipatoria|Muchas bebidas cumplen una función social, y la cantidad se ajusta a lo que hace el grupo."
    ],
    inc: [
      "Sobre la saciedad de la sed|La saciedad solo aparece cuando el agua llega a la sangre|La distensión gástrica informa del líquido ingerido|Tragar agua reduce pronto la liberación de vasopresina|Las señales orofaríngeas y gastrointestinales anticipan la rehidratación; las posteriores a la absorción consolidan la saciedad."
    ],
    seq: [
      "Señales de saciedad de la sed, en orden temporal|Señales orofaríngeas>Señales gastrointestinales>Señales posteriores a la absorción"
    ],
    cls: [] }
] }
);

// SAIMAP Psicología · Motivación y Emoción · Unidades 9–12
window.COURSE.units.push(
{ n: 9, t: "Sueño", cap: 3, pir: "media", mods: [
  { t: "Regulación del sueño",
    tip: "El modelo de dos procesos de Borbély (1982) explica el sueño con un proceso homeostático (S), ligado a la acumulación de adenosina, y uno circadiano (C), regulado por el núcleo supraquiasmático. Dormimos con facilidad cuando la presión de sueño es alta y la alerta circadiana es baja. El paso entre sueño y vigilia funciona como un interruptor biestable, que la orexina estabiliza del lado de la vigilia.",
    v: [
      "Proceso S=Presión homeostática que crece durante la vigilia y se disipa al dormir",
      "Proceso C=Ritmo de alerta de periodo cercano a 24 horas, independiente del sueño previo",
      "Adenosina=Subproducto del consumo energético neuronal que se acumula despierto y favorece el sueño",
      "Núcleo supraquiasmático=Reloj circadiano principal, situado en el hipotálamo",
      "Melatonina=Hormona de la glándula pineal que señala al organismo que es de noche",
      "Núcleo preóptico ventrolateral=Grupo neuronal que libera GABA y galanina e inhibe los sistemas de vigilia",
      "Orexina=Neuropéptido del hipotálamo lateral, también llamado hipocretina, que estabiliza la vigilia",
      "Narcolepsia de tipo 1=Trastorno por pérdida de neuronas de orexina, con somnolencia y cataplejía"
    ],
    g: [
      "La cafeína reduce la somnolencia porque es un ___ de los receptores de adenosina.|antagonista|agonista|precursor",
      "El ritmo espontáneo del núcleo supraquiasmático dura ___ de 24 horas y debe ajustarse cada día con la luz.|algo más|algo menos|bastante menos",
      "La luz llega al reloj circadiano a través de células ganglionares de la retina con ___.|melanopsina|rodopsina|melatonina",
      "Saper describió la relación entre los sistemas de vigilia y de sueño como un interruptor ___.|biestable|gradual|unidireccional",
      "Las neuronas de orexina se sitúan en el hipotálamo ___.|lateral|ventromedial|anterior"
    ],
    tf: [
      "La luz intensa por la noche retrasa la liberación de melatonina.|V",
      "La cafeína elimina la presión de sueño acumulada durante la vigilia.|F|Solo bloquea temporalmente la señal de la adenosina; cuando pasa su efecto, la presión acumulada sigue ahí.",
      "Según el modelo de Borbély, el proceso C depende sobre todo de cuántas horas llevamos despiertos.|F|Eso describe el proceso S; el proceso C es un ritmo circadiano independiente del sueño previo.",
      "Mientras crece la presión de sueño durante el día, la alerta circadiana también aumenta y nos mantiene despiertos.|V"
    ],
    q: [
      "Un estudiante toma un café doble a las 23:00 para seguir estudiando y deja de notar sueño. ¿Qué ocurre con su presión homeostática?|Sigue acumulada aunque no se perciba|Se disipa gracias a la cafeína|Pasa a depender del proceso circadiano|La cafeína bloquea los receptores de adenosina, pero no elimina la presión de sueño, que reaparece cuando pasa su efecto.",
      "Un paciente presenta somnolencia diurna intensa y pierde de golpe el tono muscular al reírse. ¿Qué alteración es más probable?|Pérdida de neuronas de orexina|Exceso de adenosina cerebral|Lesión de la glándula pineal|Es el cuadro de la narcolepsia de tipo 1: somnolencia, entradas bruscas en sueño y cataplejía desencadenada por emociones.",
      "¿Qué combinación favorece dormirse con facilidad según el modelo de dos procesos?|Presión de sueño alta y alerta circadiana baja|Presión de sueño baja y alerta circadiana alta|Presión de sueño alta y alerta circadiana alta|Dormimos con facilidad cuando la presión homeostática es alta y el ritmo circadiano de alerta está en su punto bajo.",
      "¿Qué significa que el sistema sueño-vigilia funcione como un interruptor biestable?|Se pasa rápido de un estado a otro|Se mantienen estados intermedios largos|Un solo sistema controla ambos estados|Vigilia y núcleo preóptico ventrolateral se inhiben mutuamente, así que el cerebro cambia con rapidez, sin quedarse a medias."
    ],
    inc: [
      "Sobre la regulación del sueño|La melatonina se libera cuando la luz llega a la retina|La adenosina se acumula durante la vigilia y favorece el sueño|El proceso S baja sobre todo durante el sueño de ondas lentas|Al anochecer el núcleo supraquiasmático deja de frenar a la pineal, que libera melatonina; la luz intensa retrasa esa liberación."
    ],
    seq: [],
    cls: [
      "Proceso del modelo de Borbély|Proceso S: adenosina; presión de sueño; vigilia prolongada|Proceso C: núcleo supraquiasmático; luz; melatonina"
    ] },
  { t: "Fases y ciclos del sueño",
    tip: "La clasificación vigente de la AASM (2007) distingue tres fases NREM (N1, N2 y N3) y la fase R; N3 une las antiguas fases 3 y 4 de Rechtschaffen y Kales. El REM o sueño paradójico combina un EEG parecido al de la vigilia con atonía muscular. Cada ciclo dura unos 90 minutos y se repite entre 4 y 6 veces; N3 predomina en la primera mitad de la noche y el REM, en la segunda.",
    v: [
      "Polisomnografía=Registro simultáneo de EEG, movimientos oculares y tono muscular",
      "Fase N1=Transición de la vigilia al sueño, con ondas theta y despertar fácil",
      "Fase N2=Sueño ligero consolidado, con husos y complejos K; la que más tiempo ocupa",
      "Fase N3=Sueño profundo de ondas lentas delta de gran amplitud",
      "Sueño paradójico=Fase con actividad cortical parecida a la vigilia y músculos inhibidos",
      "Husos de sueño=Ráfagas breves de ondas rápidas propias de la fase N2",
      "Complejos K=Ondas amplias y aisladas características de la fase N2",
      "Atonía muscular=Inhibición del tono de la musculatura esquelética durante el REM"
    ],
    g: [
      "En 2007, la AASM unió las antiguas fases 3 y 4 en una sola fase, la ___.|N3|N2|R",
      "Un ciclo de sueño dura unos ___ minutos y se repite entre 4 y 6 veces por noche.|90|60|120",
      "El sueño N3 se concentra en los ___ ciclos de la noche.|primeros|últimos|centrales",
      "En la fase N1 desaparece el ritmo ___ propio de la vigilia relajada.|alfa|delta|theta",
      "En un adulto joven, el sueño REM ocupa aproximadamente ___ de la noche.|una quinta parte|la mitad|tres cuartas partes"
    ],
    tf: [
      "La clasificación vigente de la AASM distingue cuatro fases NREM además de la fase R.|F|Esa era la de Rechtschaffen y Kales (1968); la AASM (2007) distingue tres fases NREM: N1, N2 y N3.",
      "Durante el sueño REM se mantienen activos los músculos oculares y el diafragma.|V",
      "El último tercio de la noche es el más rico en sueño REM.|V",
      "Con el envejecimiento disminuye sobre todo el sueño REM, mientras el sueño N3 se mantiene estable.|F|Con la edad disminuye sobre todo el N3 y aumentan los despertares; la mayor proporción de REM es propia del recién nacido."
    ],
    q: [
      "En un registro polisomnográfico aparecen husos de sueño y complejos K. ¿En qué fase está el durmiente?|N2|N3|N1|Los husos (ráfagas de ondas rápidas) y los complejos K (ondas amplias aisladas) son los grafoelementos de la fase N2.",
      "Despiertan a una voluntaria a la media hora de dormirse y pasa unos minutos confusa, sin reaccionar bien. ¿En qué fase estaba con más probabilidad?|N3|R|N1|Al principio de la noche predomina el N3, del que cuesta mucho despertar y tras el que puede haber confusión unos minutos.",
      "¿Por qué se llama «paradójico» al sueño REM?|Une EEG de vigilia y atonía muscular|Une ondas lentas y movimientos oculares|Une despertar fácil y ensoñación intensa|El cerebro muestra una actividad parecida a la de la vigilia mientras los músculos esqueléticos están inhibidos.",
      "¿Por qué unió la AASM las antiguas fases 3 y 4?|Faltaban razones fisiológicas para separarlas|Ambas carecían de ondas lentas en el registro EEG|La antigua fase 4 resultó ser un tipo de sueño REM|La AASM (2007) las fusionó en N3, el sueño de ondas lentas, porque no había motivos fisiológicos sólidos para distinguirlas."
    ],
    inc: [
      "Sobre la arquitectura del sueño|Los periodos REM son más largos al principio de la noche|N2 ocupa aproximadamente la mitad de la noche en adultos jóvenes|También se sueña en NREM, aunque con relatos más breves|Los periodos REM se alargan en la segunda mitad de la noche; al principio predomina el sueño N3."
    ],
    seq: [
      "Recorrido del primer ciclo de sueño|N1>N2>N3>N2>REM"
    ],
    cls: [] },
  { t: "Funciones del sueño",
    tip: "Hoy no se busca una función única del sueño, sino varias con distinto apoyo. La consolidación de la memoria es de las mejor documentadas, con dos hipótesis compatibles: la consolidación activa y la homeostasis sináptica. El sueño participa también en la regulación emocional, inmunitaria y metabólica. La limpieza glinfática es una hipótesis influyente, pero con resultados contradictorios.",
    v: [
      "Consolidación activa=Reactivación nocturna de recuerdos y transferencia del hipocampo a la corteza",
      "Homeostasis sináptica=Hipótesis de que el sueño de ondas lentas reajusta a la baja las sinapsis",
      "Tononi y Cirelli=Autores de la hipótesis del reajuste sináptico durante el sueño",
      "Sistema glinfático=Lavado cerebral por líquido cefalorraquídeo que elimina productos de desecho",
      "β-amiloide=Producto de desecho cuya eliminación se estudia en la hipótesis glinfática",
      "Xie et al. (2013)=Estudio en ratones que halló más eliminación de desechos durante el sueño",
      "Miao et al. (2024)=Estudio en ratones que halló menos eliminación de sustancias durante el sueño",
      "Conservación de energía=Función plausible del sueño que no explica por sí sola el REM"
    ],
    g: [
      "Según la consolidación activa, los recuerdos del día se reactivan sobre todo durante la fase ___.|N3|N1|R",
      "La homeostasis sináptica propone que el sueño mejora la relación ___.|señal-ruido|vigilia-sueño|carga-descanso",
      "La falta de sueño aumenta la reactividad a los estímulos ___.|negativos|positivos|neutros",
      "Dormir poco se asocia a alteraciones del metabolismo de la ___.|glucosa|melatonina|adenosina",
      "Se ha propuesto que el sueño ___ ayuda a procesar las experiencias emocionales.|REM|N1|N2"
    ],
    tf: [
      "La consolidación activa y la homeostasis sináptica son hipótesis que se excluyen mutuamente.|F|Son compatibles: una explica la reactivación y transferencia de recuerdos y la otra el reajuste de las sinapsis.",
      "Está demostrado que la función principal del sueño es limpiar el cerebro de desechos.|F|Es una hipótesis influyente: Xie et al. (2013) la apoyaron, pero Miao et al. (2024) hallaron lo contrario.",
      "La conservación de energía es una función plausible del sueño, aunque no explica por sí sola el sueño REM.|V",
      "Dormir poco se asocia a una peor respuesta inmunitaria.|V"
    ],
    q: [
      "¿Qué afirmación sobre la función glinfática del sueño es más ajustada a la evidencia?|Es una hipótesis con resultados contradictorios|Es la función principal demostrada del sueño|Quedó descartada tras los estudios de 2013|Xie et al. (2013) la apoyaron en ratones; Miao et al. (2024) hallaron menos eliminación durante el sueño y el debate sigue abierto.",
      "Un compañero afirma que mientras dormimos el cerebro se apaga. ¿Qué responde mejor la evidencia?|Cambia su modo de funcionamiento|Se apaga solo durante el sueño N3|Solo se activa durante las ensoñaciones|En REM la actividad cortical se parece a la vigilia, y en ondas lentas hay consolidación de la memoria y reajuste sináptico.",
      "Según Tononi y Cirelli, ¿qué ocurre con las sinapsis durante el sueño de ondas lentas?|Se reajustan a la baja|Se fortalecen en bloque|Se reactivan en el hipocampo|La vigilia fortalece muchas sinapsis y el sueño de ondas lentas las reajusta a la baja, lo que ahorra energía.",
      "Una estudiante aprende una lista de palabras por la tarde y la recuerda mejor tras dormir. ¿Qué lo explica según la consolidación activa?|Reactivación del recuerdo en el sueño N3|Bloqueo de la adenosina durante el REM|Eliminación glinfática del β-amiloide|Durante el N3 se reactivan los recuerdos del día y se transfieren del hipocampo a redes corticales más estables."
    ],
    inc: [
      "Sobre las funciones del sueño|Miao et al. (2024) confirmaron la limpieza glinfática durante el sueño|La consolidación de la memoria es de las funciones mejor documentadas|No hay acuerdo sobre la función específica del sueño REM|Miao et al. (2024) hallaron que la eliminación de sustancias se reducía durante el sueño, en contra de Xie et al. (2013)."
    ],
    seq: [],
    cls: [
      "Grado de apoyo de cada propuesta|Bien documentada: consolidación de la memoria; efecto de la privación sobre la regulación emocional|En debate: limpieza glinfática; función específica del REM"
    ] },
  { t: "Privación de sueño y recomendaciones",
    tip: "Se distinguen la privación total, la parcial crónica y la selectiva. Lo que más sufre es la atención sostenida, y en la restricción crónica el rendimiento sigue empeorando aunque la persona crea haberse adaptado. Para adultos se recomiendan 7 horas o más (AASM y SRS) o 7–9 horas (NSF), y 8–10 para adolescentes; la higiene del sueño se deriva del modelo de dos procesos.",
    v: [
      "Privación total=Permanecer despierto una o varias noches seguidas",
      "Privación parcial crónica=Dormir menos de lo necesario durante muchos días",
      "Privación selectiva=Despertar a la persona cada vez que entra en una fase concreta",
      "Microsueño=Episodio de sueño de pocos segundos que pasa inadvertido",
      "Efecto rebote=Aumento de una fase suprimida cuando se permite volver a dormir",
      "Atención sostenida=Capacidad más afectada por la falta de sueño, sobre todo en tareas monótonas",
      "Higiene del sueño=Pautas como horarios regulares, luz matinal y evitar cafeína por la noche",
      "National Sleep Foundation=Entidad que recomienda 7–9 horas en adultos y 8–10 en adolescentes"
    ],
    g: [
      "En la privación parcial crónica, la persona tiende a ___ sus déficits de atención y memoria de trabajo.|infravalorar|exagerar|anticipar",
      "Si se suprime selectivamente el REM, al dejar dormir aparece un efecto ___.|rebote|techo|suelo",
      "La AASM y la Sleep Research Society recomiendan a los adultos dormir ___ de forma regular.|7 horas o más|entre 5 y 6 horas|9 horas o más",
      "Recuperar sueño el fin de semana compensa de forma ___ y además desplaza el horario circadiano.|parcial|completa|inmediata",
      "En tareas monótonas, la falta de sueño aumenta sobre todo los errores por ___.|omisión|comisión|perseveración"
    ],
    tf: [
      "En la restricción crónica de sueño, la somnolencia percibida se estabiliza mientras el rendimiento sigue empeorando.|V",
      "La National Sleep Foundation recomienda a los adolescentes de 14 a 17 años entre 7 y 9 horas.|F|Para adolescentes de 14 a 17 años recomienda 8–10 horas; las 7–9 horas son para adultos de 18 a 64.",
      "Tras varias semanas durmiendo poco, el rendimiento atencional se adapta y vuelve a su nivel previo.|F|La persona cree haberse adaptado, pero sus déficits de atención y memoria de trabajo siguen acumulándose.",
      "Las recomendaciones de duración del sueño son valores poblacionales, con variación individual.|V"
    ],
    q: [
      "Un camionero que duerme 5 horas cada noche asegura que ya se ha acostumbrado. ¿Qué es lo más probable?|Su rendimiento sigue empeorando sin que lo note|Su atención se ha adaptado por completo|Su somnolencia y su rendimiento mejoran juntos|En la restricción crónica la somnolencia percibida se estabiliza, pero los déficits atencionales se acumulan y se infravaloran.",
      "En un experimento se despierta a los participantes cada vez que entran en N3. ¿Qué se espera la noche en que se les deja dormir?|Más sueño N3 del habitual|Menos sueño N3 del habitual|Más fase N1 en lugar de N3|Es el efecto rebote de la privación selectiva: aumenta la cantidad de la fase que se había suprimido.",
      "¿Qué pauta de higiene del sueño se apoya directamente en el proceso circadiano?|Luz natural por la mañana|Evitar la cafeína nocturna|Hacer siestas largas|La luz es la principal señal que ajusta el núcleo supraquiasmático; la cafeína actúa sobre la señal homeostática de adenosina.",
      "¿Qué efecto es característico de la privación total más que de la parcial crónica?|Microsueños y alteraciones perceptivas|Déficits que la persona infravalora|Efecto rebote de una fase concreta|Con noches sin dormir aparecen microsueños y, si se prolonga varios días, alteraciones perceptivas y del pensamiento."
    ],
    inc: [
      "Sobre la privación de sueño|La capacidad que más sufre es la memoria a largo plazo|Empeoran el estado de ánimo y la regulación emocional|También se alteran la toma de decisiones y el metabolismo|La capacidad más afectada es la atención sostenida, sobre todo en tareas monótonas como conducir por autopista."
    ],
    seq: [],
    cls: [
      "Tipo de privación y efecto característico|Total: microsueños; alteraciones perceptivas|Parcial crónica: déficits acumulativos; infravaloración del deterioro|Selectiva: efecto rebote; aumento de la fase suprimida"
    ] }
] },
{ n: 10, t: "Motivos sociales", cap: 3, pir: "media", mods: [
  { t: "Murray, McClelland y su medida",
    tip: "Los motivos sociales son disposiciones aprendidas que llevan a buscar ciertos incentivos; los más estudiados son el logro, la afiliación (con la intimidad) y el poder. Morgan y Murray crearon el TAT, y McClelland y Atkinson lo convirtieron en un método de codificación cuantitativo, hoy llamado PSE. Las historias miden motivos implícitos y los cuestionarios, explícitos: correlacionan poco porque son sistemas distintos.",
    v: [
      "Motivo social=Disposición aprendida y estable a buscar ciertos incentivos con otros o en tareas",
      "Presión ambiental=Situación que facilita o dificulta satisfacer una necesidad, según Murray",
      "TAT=Test de láminas ambiguas sobre las que se inventan historias (Morgan y Murray, 1935)",
      "Picture Story Exercise=Versión actual del método de historias, con láminas modernas y normas estandarizadas",
      "Motivo implícito=Motivo poco accesible a la conciencia que predice la conducta espontánea",
      "Motivo explícito=Motivo autoatribuido, medido por autoinforme, que predice elecciones deliberadas",
      "n Ach=Necesidad de logro puntuada a partir de la codificación de historias",
      "Köllner y Schultheiss (2014)=Metaanálisis que halló una correlación media de 0,130 entre medidas"
    ],
    g: [
      "Murray propuso que las necesidades interactúan con las ___ del ambiente.|presiones|recompensas|carencias",
      "McClelland y Atkinson validaron sus sistemas de codificación ___ experimentalmente un motivo.|activando|suprimiendo|midiendo",
      "Los motivos implícitos se originan en experiencias afectivas tempranas, en gran parte ___.|preverbales|conscientes|normativas",
      "Los motivos explícitos se activan sobre todo con incentivos ___.|sociales|de la actividad|fisiológicos",
      "En el metaanálisis de Köllner y Schultheiss, la correlación más baja, no significativa, fue la del motivo de ___.|poder|logro|afiliación"
    ],
    tf: [
      "La baja correlación entre el TAT y los cuestionarios indica que el TAT carece de validez.|F|Se interpreta como prueba de que miden sistemas distintos (implícito y explícito), no como un fallo de validez.",
      "Los motivos implícitos predicen mejor la conducta espontánea y sostenida a largo plazo.|V",
      "El TAT y el PSE miden motivos explícitos, porque la persona describe conscientemente sus metas.|F|Miden motivos implícitos: se codifican historias inventadas ante láminas y la persona no accede directamente a esos motivos.",
      "Cuando las metas conscientes no encajan con los motivos implícitos, se ha observado menor bienestar.|V"
    ],
    q: [
      "Una empresa quiere predecir qué empleados buscarán retos por iniciativa propia durante años. ¿Qué medida es más adecuada?|Codificar historias ante láminas|Un cuestionario de autoinforme|Una entrevista sobre sus valores|La conducta espontánea a largo plazo la predicen mejor los motivos implícitos, que se miden con historias codificadas (TAT, PSE).",
      "¿Cómo validaron McClelland y Atkinson la codificación del motivo de logro?|Activando el motivo y viendo si aumentaban sus imágenes|Correlacionando las historias con cuestionarios de logro|Pidiendo a los participantes que explicaran sus historias|Hicieron creer que una prueba medía la inteligencia y comprobaron que las historias posteriores tenían más imágenes de logro.",
      "¿Qué predicen mejor los motivos explícitos?|Las elecciones deliberadas|La conducta espontánea|La persistencia a largo plazo|Los motivos explícitos, autoatribuidos, predicen elecciones deliberadas y respuestas a demandas explícitas.",
      "¿Qué rasgo distingue a los motivos sociales del hambre o la sed?|Se adquieren con la experiencia|Responden a un déficit fisiológico|Son iguales en todas las personas|No responden a un déficit fisiológico: se aprenden con la experiencia, la crianza y la cultura."
    ],
    inc: [
      "Sobre la medida de los motivos sociales|La correlación media implícito-explícito fue alta, cercana a 0,60|El PSE es la versión actual del procedimiento basado en historias|Los cuestionarios miden los motivos autoatribuidos|Köllner y Schultheiss (2014) hallaron una correlación media de 0,130, interpretada como prueba de sistemas distintos."
    ],
    seq: [],
    cls: [
      "Motivos implícitos frente a explícitos|Implícitos: TAT y PSE; conducta espontánea; experiencias preverbales|Explícitos: cuestionarios; elecciones deliberadas; normas aprendidas"
    ] },
  { t: "Motivo de logro",
    tip: "El motivo de logro es la disposición a buscar el éxito frente a un criterio de excelencia. Quien lo tiene alto prefiere la dificultad moderada, busca retroalimentación y responsabilidad personal, innova y persiste. Atkinson lo explica: la tendencia al éxito es máxima con una probabilidad cercana a 0,5, mientras que el miedo al fracaso lleva a elegir tareas muy fáciles o muy difíciles.",
    v: [
      "Motivo de logro=Disposición a buscar el éxito frente a un criterio de excelencia",
      "Criterio de excelencia=Estándar para evaluar el resultado: el propio rendimiento previo, otros o una norma",
      "Miedo al fracaso=Tendencia opuesta que lleva a evitar situaciones en las que se puede fracasar",
      "Dificultad moderada=Nivel de tarea preferido por quien tiene alto motivo de logro",
      "Valor de incentivo del éxito=Atractivo del éxito, mayor cuanto más difícil es la tarea",
      "The Achieving Society=Obra de McClelland (1961) que vinculó logro social y desarrollo económico",
      "Responsabilidad personal=Situación en la que el resultado puede atribuirse a uno mismo",
      "Retroalimentación=Información concreta y rápida sobre el rendimiento propio"
    ],
    g: [
      "Según Atkinson, la tendencia a buscar el éxito es máxima con una probabilidad de éxito cercana a ___.|0,5|0,9|0,1",
      "Quien está dominado por el miedo al fracaso evita sobre todo las tareas de dificultad ___.|intermedia|mínima|extrema",
      "Las personas con alto motivo de logro atribuyen sus fracasos a la falta de ___.|esfuerzo|capacidad|suerte",
      "McClelland estimó el motivo de logro de una sociedad codificando cuentos y textos ___.|escolares|científicos|legales",
      "Lo que mejor se mantiene de la tesis de McClelland es la relación individual entre logro y conducta ___.|emprendedora|cooperativa|altruista"
    ],
    tf: [
      "Para Atkinson, el valor de incentivo del éxito es mayor cuanto más difícil es la tarea.|V",
      "Las personas con alto motivo de logro prefieren tareas muy difíciles, porque el éxito en ellas es más valioso.|F|Prefieren dificultad moderada, donde el resultado depende de su esfuerzo; la probabilidad de éxito ronda 0,5.",
      "Un alto motivo de logro es la mejor garantía de éxito al dirigir equipos grandes.|F|Al dirigir equipos grandes, querer hacerlo todo uno mismo es un inconveniente; resulta más relevante el motivo de poder.",
      "Los análisis históricos de The Achieving Society se han discutido por razones metodológicas.|V"
    ],
    q: [
      "En un juego de lanzar aros, Marta elige siempre la distancia mínima o la máxima. ¿Qué perfil motivacional sugiere?|Predominio del miedo al fracaso|Alto motivo de logro implícito|Predominio del motivo de afiliación|Quien teme fracasar evita las tareas intermedias y prefiere el éxito seguro o un fracaso disculpable.",
      "Una persona con alto motivo de logro suspende un examen. ¿Qué atribución es más típica de su perfil?|Le faltó esfuerzo|Le faltó capacidad|Tuvo mala suerte|Atribuye los fracasos a la falta de esfuerzo, una causa controlable que invita a volver a intentarlo.",
      "¿Por qué quien tiene alto motivo de logro prefiere la dificultad moderada?|El producto de probabilidad e incentivo es máximo|Es donde el riesgo de fracasar resulta mínimo|Es donde el valor del incentivo alcanza su máximo|Con una probabilidad de éxito cercana a 0,5, el producto de probabilidad y valor de incentivo alcanza su máximo.",
      "¿Qué tipo de situación buscan las personas con alto motivo de logro?|Con resultado atribuible a sí mismas|Con resultado dependiente del azar|Con resultado decidido por el grupo|Prefieren situaciones de responsabilidad personal, en las que el resultado se les pueda atribuir."
    ],
    inc: [
      "Sobre el perfil de alto motivo de logro|Evita la retroalimentación sobre su rendimiento|Tiende a innovar y buscar formas más eficientes|Persiste ante el fracaso si la meta es alcanzable|Busca retroalimentación concreta y rápida sobre su rendimiento."
    ],
    seq: [],
    cls: [
      "Elección de tareas según Atkinson|Alto motivo de logro: dificultad moderada; probabilidad de éxito cercana a 0,5|Miedo al fracaso: tareas muy fáciles; tareas muy difíciles"
    ] },
  { t: "Afiliación e intimidad",
    tip: "El motivo de afiliación busca establecer, mantener o restaurar relaciones positivas, pero tiene un fuerte componente de evitación: miedo al rechazo y a la soledad. McAdams propuso el motivo de intimidad para recoger la vertiente de aproximación: cercanía, calidez y comunicación recíproca. La necesidad de relación de la teoría de la autodeterminación es universal; afiliación e intimidad son diferencias individuales.",
    v: [
      "Motivo de afiliación=Disposición a establecer, mantener o restaurar relaciones afectivas positivas",
      "Motivo de intimidad=Preferencia por la cercanía y la comunicación cálida y recíproca",
      "McAdams=Autor que desarrolló el motivo de intimidad",
      "Miedo al rechazo=Componente de evitación presente en buena parte de lo que mide n Aff",
      "Schachter (1959)=Mostró que ante una amenaza se prefiere esperar acompañado",
      "Teoría del apego=Propuesta de Bowlby sobre cómo los primeros vínculos configuran las relaciones",
      "Necesidad de relación=Necesidad psicológica básica y universal según la autodeterminación",
      "n Aff=Medida de la necesidad de afiliación a partir de historias codificadas"
    ],
    g: [
      "La afiliación tiene un componente importante de ___, centrado en el miedo al rechazo.|evitación|aproximación|dominancia",
      "En el estudio de Schachter, ante una experiencia temida se prefería esperar con personas en la ___ situación.|misma|distinta|mejor",
      "Las personas con alto motivo de afiliación pueden rendir peor cuando se sienten ___.|observadas|ignoradas|aisladas",
      "La asociación de la afiliación con el bienestar es ___, porque su parte de evitación se asocia a ansiedad.|ambivalente|positiva|nula",
      "La relación es una necesidad universal; la afiliación es una diferencia ___ en la fuerza con que se busca.|individual|cultural|evolutiva"
    ],
    tf: [
      "El motivo de afiliación tiene una orientación de aproximación pura, centrada en buscar cercanía.|F|Incluye un fuerte componente de evitación (miedo al rechazo y a la soledad); la aproximación pura es propia de la intimidad.",
      "La afiliación aumenta en situaciones de amenaza.|V",
      "La necesidad de relación de la teoría de la autodeterminación y el motivo de afiliación son el mismo constructo.|F|La necesidad de relación es universal; el motivo de afiliación es una diferencia individual en la fuerza con que se busca.",
      "El motivo de intimidad valora la cercanía por sí misma, no como defensa frente a la soledad.|V"
    ],
    q: [
      "Luis acumula muchos contactos, evita cualquier discusión y se angustia si alguien parece molesto con él. ¿Qué motivo describe mejor su perfil?|Alto motivo de afiliación|Alto motivo de intimidad|Alto motivo de poder|Buscar aprobación y muchos contactos y evitar conflictos por miedo al rechazo es el perfil de la afiliación, no el de la intimidad.",
      "Ana prefiere pocas amistades profundas, escucha con interés y se implica en el bienestar de los demás. ¿Qué motivo encaja mejor?|Intimidad|Afiliación|Logro|La intimidad busca relaciones cálidas, profundas y recíprocas, desde una orientación de aproximación.",
      "¿Por qué McAdams propuso el motivo de intimidad?|Para recoger la vertiente de aproximación|Para medir mejor el miedo al rechazo social|Para sustituir la teoría del apego de Bowlby|n Aff recogía sobre todo evitación; la intimidad capta la búsqueda de cercanía valorada por sí misma.",
      "¿Qué observó Schachter (1959) en personas a las que se anunciaba una experiencia temida?|Preferían esperar acompañadas|Preferían esperar a solas|Rendían mejor si estaban en grupo|La amenaza aumenta la afiliación, sobre todo hacia otras personas que están en la misma situación."
    ],
    inc: [
      "Sobre afiliación e intimidad|La intimidad se asocia sobre todo a ansiedad social|La afiliación busca aceptación, aprobación y contactos|Ambos motivos se relacionan con la teoría del apego|La intimidad se asocia más bien positivamente al bienestar; la ansiedad se vincula a la parte de evitación de la afiliación."
    ],
    seq: [],
    cls: [
      "Afiliación o intimidad|Afiliación: miedo al rechazo; búsqueda de aprobación; evitar conflictos|Intimidad: comunicación recíproca; escucha y apertura; relaciones profundas"
    ] },
  { t: "Motivo de poder",
    tip: "El motivo de poder es la disposición a tener impacto, control o influencia sobre otros. McClelland distinguió el poder personalizado (dominar en beneficio propio, con poco autocontrol) del socializado (influir para metas colectivas, con autocontrol). El patrón de motivo de liderazgo combina alto poder, baja afiliación y alta inhibición, y se asoció a mejor progresión en puestos de gestión no técnicos.",
    v: [
      "Motivo de poder=Disposición a tener impacto, control o influencia sobre otros o el mundo",
      "Necesidad de dominancia=Formulación original de Murray de lo que hoy se llama motivo de poder",
      "Poder personalizado=Uso del poder para dominar en beneficio propio, con bajo autocontrol",
      "Poder socializado=Uso del poder para metas colectivas, con normas y responsabilidad interiorizadas",
      "Inhibición de la actividad=Autocontrol que encauza el poder hacia formas socializadas",
      "Patrón de motivo de liderazgo=Alto poder, baja afiliación y alta inhibición de la actividad",
      "Símbolos de prestigio=Signos de estatus que suelen acumular quienes tienen alto motivo de poder",
      "Activación simpática=Respuesta asociada al motivo de poder cuando se frustra o se ve amenazado"
    ],
    g: [
      "En el patrón de motivo de liderazgo, la baja ___ permite tomar decisiones impopulares.|afiliación|inhibición|necesidad de poder",
      "El poder ___ busca influir para conseguir metas colectivas.|socializado|personalizado|dominante",
      "El patrón de motivo de liderazgo se asoció a mejor progresión en puestos de gestión ___.|no técnicos|técnicos|individuales",
      "Las personas con alto motivo de poder reaccionan con fuerza ante la ___ y los desafíos a su estatus.|rivalidad|soledad|incertidumbre",
      "En el poder personalizado, los demás se ven como instrumentos o ___.|rivales|aliados|modelos"
    ],
    tf: [
      "El patrón de motivo de liderazgo combina alto poder, alta afiliación y baja inhibición.|F|Combina alto poder, baja afiliación y alta inhibición de la actividad, que encauza el poder hacia formas socializadas.",
      "Ayudar a alguien sin que lo pida puede ser una expresión del motivo de poder.|V",
      "El poder socializado se caracteriza por impulsividad y bajo autocontrol.|F|Eso describe el poder personalizado; el socializado implica alto autocontrol y normas y responsabilidad interiorizadas.",
      "Las personas con alto motivo de poder buscan puestos de visibilidad, como la docencia o el periodismo.|V"
    ],
    q: [
      "Una directora quiere influir mucho, no necesita caer bien a todos y controla sus impulsos. ¿Qué patrón muestra?|Patrón de motivo de liderazgo|Patrón de poder personalizado|Patrón de alto motivo de logro|Alto poder, baja afiliación y alta inhibición forman el patrón de motivo de liderazgo, asociado a mejor progresión directiva.",
      "Un jefe usa su cargo para imponerse, trata a su equipo como rivales y actúa de forma impulsiva. ¿Qué forma de poder expresa?|Personalizado|Socializado|Inhibido|Dominar en beneficio propio, ver a los otros como rivales y tener bajo autocontrol definen el poder personalizado.",
      "¿Qué aporta la alta inhibición de la actividad en el patrón de motivo de liderazgo?|Encauza el poder hacia formas socializadas|Reduce el interés por influir en los demás|Permite tomar decisiones impopulares|La inhibición (autocontrol) canaliza el poder; tomar decisiones impopulares se debe a la baja afiliación.",
      "¿Por qué un alto motivo de logro puede ser un inconveniente al dirigir equipos grandes?|Lleva a querer hacerlo todo uno mismo|Lleva a evitar las tareas desafiantes|Lleva a buscar la aprobación de todos|Querer hacerlo todo uno mismo es un inconveniente al dirigir a muchos; ahí resulta más relevante el motivo de poder."
    ],
    inc: [
      "Sobre el motivo de poder|Murray lo describió como necesidad de afiliación|Incluye persuadir, dirigir o impresionar a otros|Se asocia a buscar símbolos de prestigio|Murray lo describió como necesidad de dominancia; después se amplió a cualquier forma de impacto sobre otros."
    ],
    seq: [],
    cls: [
      "Formas de poder según McClelland|Personalizado: dominar en beneficio propio; impulsividad; los otros como rivales|Socializado: metas colectivas; alto autocontrol; fortalecer a los demás"
    ] }
] },
{ n: 11, t: "La emoción: definición e historia", cap: 4, pir: "alta", mods: [
  { t: "Emoción, afecto, estado de ánimo y sentimiento",
    tip: "Una emoción es una respuesta breve ante un desencadenante concreto valorado como relevante. Según el modelo de procesos componentes de Scherer, implica evaluación cognitiva, cambios fisiológicos, expresión motora, tendencias de acción y sentimiento subjetivo, sincronizados durante un tiempo breve. El estado de ánimo dura más y tiene un desencadenante difuso; el sentimiento es la vivencia consciente, y el afecto, el término más amplio.",
    v: [
      "Emoción=Respuesta breve y multicomponente ante un desencadenante valorado como relevante",
      "Estado de ánimo=Estado afectivo difuso que dura horas o días, sin desencadenante claro",
      "Sentimiento=Componente de experiencia subjetiva consciente de la emoción",
      "Afecto=Término general que engloba emociones y estados de ánimo",
      "Rasgo emocional=Tendencia estable y habitual a experimentar cierta emoción",
      "Tendencia de acción=Preparación para acercarse, huir, atacar o detenerse",
      "Expresión motora=Componente formado por gestos, postura, voz y expresión facial",
      "Sincronización=Coordinación breve de los componentes que, para Scherer, define la emoción"
    ],
    g: [
      "Para Scherer, hablamos de emoción cuando sus componentes se ___ durante un tiempo breve.|sincronizan|disocian|alternan",
      "El ___ es el término más amplio, que engloba emociones y estados de ánimo.|afecto|sentimiento|temperamento",
      "A diferencia de la emoción, el estado de ánimo tiene un desencadenante ___.|difuso|concreto|externo",
      "El primer componente del modelo de Scherer es la evaluación ___ del estímulo.|cognitiva|fisiológica|motora",
      "Una emoción puede desencadenarse por un estímulo externo o por uno ___, como un recuerdo.|interno|neutro|ambiguo"
    ],
    tf: [
      "Una emoción dura típicamente segundos o minutos.|V",
      "El sentimiento es un estado afectivo duradero sin desencadenante claro.|F|Eso es el estado de ánimo; el sentimiento es el componente de experiencia subjetiva consciente de la emoción.",
      "En el modelo de Scherer, las tendencias de acción son uno de los cinco componentes de la emoción.|V",
      "La tendencia habitual a la ansiedad es un ejemplo de estado de ánimo.|F|Es un rasgo emocional, estable; el estado de ánimo dura horas o días."
    ],
    q: [
      "Pedro está de mal humor toda la tarde sin saber muy bien por qué. ¿Qué término lo describe mejor?|Estado de ánimo|Emoción|Rasgo emocional|Dura horas y tiene un desencadenante difuso o desconocido, rasgos propios del estado de ánimo frente a la emoción.",
      "Al ver que alguien rompe su bicicleta, Sara siente ira, se le acelera el pulso y frunce el ceño. El ceño fruncido corresponde al componente de…|expresión motora|cambio fisiológico|sentimiento subjetivo|Gestos, postura, voz y expresión facial forman la expresión motora del modelo de Scherer.",
      "¿Qué pregunta forma parte del componente de evaluación cognitiva de Scherer?|¿Puedo afrontarlo?|¿Cómo se mueve mi cara?|¿Qué siento ahora?|La evaluación incluye si el estímulo es relevante, si es bueno o malo para mí y si puedo afrontarlo.",
      "¿Qué distingue principalmente una emoción de un estado de ánimo?|Brevedad y desencadenante concreto|Mayor duración y menor intensidad|Ausencia de cambios fisiológicos|La emoción dura segundos o minutos y tiene un desencadenante concreto; el estado de ánimo, horas o días y uno difuso."
    ],
    inc: [
      "Sobre los términos afectivos|El afecto equivale a la vivencia consciente|El estado de ánimo puede durar horas o días|El rasgo emocional es una tendencia estable|El componente subjetivo es el sentimiento; el afecto es el término general que engloba emociones y estados de ánimo."
    ],
    seq: [],
    cls: [
      "Componentes de la emoción según Scherer|Expresión motora: gesto; postura; voz|Cambios fisiológicos: sistema nervioso autónomo; sistema endocrino|Tendencias de acción: huir; atacar; detenerse"
    ] },
  { t: "Teorías evolucionistas y biológicas",
    tip: "Darwin defendió la continuidad filogenética de la expresión emocional y la explicó con tres principios. James y Lange propusieron una teoría periférica: la experiencia emocional es la percepción de los cambios corporales. Cannon y Bard respondieron con una teoría central: el tálamo activa a la vez la experiencia y los cambios corporales, que son simultáneos e independientes. La investigación sobre interocepción ha matizado a Cannon.",
    v: [
      "Continuidad filogenética=Idea de Darwin de que las expresiones humanas tienen precursores animales",
      "Hábitos útiles asociados=Movimientos antes útiles que se repiten ante estados similares",
      "Principio de antítesis=Estados opuestos producen movimientos opuestos",
      "Acción directa del sistema nervioso=Principio que explica expresiones como el temblor por descarga nerviosa",
      "Teoría periférica=Propuesta de que la emoción se origina en los cambios corporales",
      "Teoría central=Propuesta de Cannon y Bard de que la emoción surge en el cerebro, vía tálamo",
      "Interocepción=Percepción de las señales internas del cuerpo",
      "Walter Cannon=Crítico de James que defendió la simultaneidad de experiencia y cambio corporal"
    ],
    g: [
      "Según James, el miedo al resbalar sería la ___ del acelerón cardiaco y la tensión corporal.|percepción|causa|inhibición",
      "En la teoría de Cannon-Bard, el estímulo llega primero al ___.|tálamo|hipotálamo|cerebelo",
      "Cannon argumentó que las vísceras responden con demasiada ___ para explicar emociones rápidas.|lentitud|intensidad|precisión",
      "La postura del perro sumiso frente a la del amenazante ilustra el principio de ___.|antítesis|hábitos útiles|acción directa",
      "Para Cannon y Bard, la experiencia y los cambios corporales son ___ e independientes.|simultáneos|sucesivos|opuestos"
    ],
    tf: [
      "Según Cannon-Bard, los cambios corporales preceden y causan la experiencia emocional.|F|Esa es la secuencia periférica de James-Lange; para Cannon-Bard, experiencia y cambios corporales son simultáneos e independientes.",
      "Lange propuso de forma independiente una teoría similar a la de James.|V",
      "Uno de los argumentos de Cannon es que inyectar adrenalina no produce una emoción genuina.|V",
      "La investigación sobre interocepción ha reforzado la tesis de Cannon de que los cambios corporales no influyen en lo que se siente.|F|La interocepción ha matizado a Cannon: lo que ocurre en el cuerpo sí contribuye a la experiencia emocional."
    ],
    q: [
      "Unos animales a los que se separan quirúrgicamente las vísceras del sistema nervioso central siguen mostrando conducta emocional. ¿Qué teoría cuestiona este dato?|James-Lange|Cannon-Bard|Darwin|Fue uno de los argumentos de Cannon: si la conducta emocional persiste sin retroalimentación visceral, no puede depender solo de ella.",
      "¿Qué argumento de Cannon apunta a que los cambios viscerales no explican qué emoción se siente?|Son parecidos en emociones distintas|Las vísceras responden con lentitud|No se producen sin el tálamo|Miedo, ira e incluso fiebre producen cambios viscerales parecidos, así que no pueden determinar la cualidad emocional.",
      "¿Qué afirmación sobre la polémica entre James-Lange y Cannon-Bard es más ajustada?|Cannon no zanjó la cuestión|Cannon refutó a James por completo|James demostró el papel del tálamo|Las críticas de Cannon dieron un papel central al cerebro, pero la interocepción recupera parte de la intuición de James.",
      "Al ver un perro que gruñe, a Elena se le acelera el corazón y se tensa, y al notarlo se da cuenta de que tiene miedo. ¿Con qué teoría encaja esta secuencia?|James-Lange|Cannon-Bard|Lazarus|Primero el cambio corporal y después la experiencia, que es la percepción de ese cambio: es la secuencia periférica de James-Lange."
    ],
    inc: [
      "Sobre Darwin y la expresión emocional|Explicó el temblor como un hábito útil asociado|Defendió la continuidad filogenética de la expresión|Propuso tres principios para explicar las expresiones|El temblor se explica por la acción directa del sistema nervioso, no por un hábito útil asociado."
    ],
    seq: [
      "Secuencia según James-Lange|Estímulo>Percepción del estímulo>Cambios viscerales y motores>Experiencia emocional"
    ],
    cls: [
      "Teoría periférica o central|James-Lange: emoción originada en el cuerpo; cambios corporales primero|Cannon-Bard: papel del tálamo; experiencia y cambios simultáneos"
    ] },
  { t: "Teorías conductistas y triple sistema de respuesta",
    tip: "Watson propuso tres emociones innatas (miedo, ira y amor) y explicó las demás por condicionamiento clásico, como en el caso del pequeño Albert. Mowrer explicó el mantenimiento de los miedos con su modelo bifactorial: condicionamiento clásico más evitación reforzada negativamente. Lang describió tres sistemas de respuesta (cognitivo, fisiológico y motor); su aportación clave es que correlacionan poco entre sí, la desincronía.",
    v: [
      "Pequeño Albert=Bebé al que Watson y Rayner condicionaron miedo a una rata blanca",
      "Generalización=Extensión del miedo condicionado a objetos parecidos al original",
      "Modelo bifactorial de Mowrer=Miedo adquirido por condicionamiento clásico y mantenido por evitación",
      "Refuerzo negativo=Mantenimiento de la evitación porque reduce el malestar",
      "Desincronía=Baja correlación entre los sistemas cognitivo, fisiológico y motor",
      "Sistema cognitivo-subjetivo=Pensamientos y experiencia, medidos con autoinformes y escalas",
      "Teoría bioinformacional=Propuesta de Lang de que las emociones se guardan como redes de información",
      "IAPS=Banco de imágenes estandarizadas por valencia y activación"
    ],
    g: [
      "Watson propuso tres emociones innatas: miedo, ira y ___.|amor|alegría|asco",
      "En el modelo de Mowrer, la evitación se mantiene por condicionamiento ___.|operante|clásico|vicario",
      "Al evitar, la persona nunca comprueba que el estímulo ya no es peligroso; de ahí la utilidad de la ___.|exposición|relajación|distracción",
      "El sistema fisiológico de Lang se evalúa con registros ___.|psicofisiológicos|observacionales|de autoinforme",
      "Lang propuso el triple sistema de respuesta en ___, trabajando con la ansiedad.|1968|1920|1979"
    ],
    tf: [
      "La aportación clave de Lang es la división de la respuesta emocional en tres sistemas.|F|Lo clave es que los tres sistemas correlacionan poco entre sí (desincronía), no solo su existencia.",
      "Por la desincronía, un tratamiento puede cambiar un sistema de respuesta antes que otro.|V",
      "En el modelo de Mowrer, el estímulo neutro adquiere capacidad de provocar miedo por condicionamiento operante.|F|Eso ocurre por condicionamiento clásico (primer factor); el operante mantiene la evitación (segundo factor).",
      "El experimento del pequeño Albert tiene graves limitaciones, entre ellas que se estudió a un solo niño.|V"
    ],
    q: [
      "Un paciente con fobia a volar dice no sentir miedo, pero su frecuencia cardiaca se dispara al ver un avión. ¿Qué concepto lo ilustra?|Desincronía de respuesta|Generalización del miedo|Refuerzo negativo|Lang mostró que los sistemas cognitivo, fisiológico y motor correlacionan poco: alguien puede negar el miedo con el corazón disparado.",
      "Tras un accidente, Lucía evita los ascensores y cada vez que sube por la escalera siente alivio. ¿Qué mantiene la evitación según Mowrer?|Refuerzo negativo|Condicionamiento clásico|Castigo positivo|La evitación se mantiene porque reduce el malestar: es el refuerzo negativo, segundo factor del modelo bifactorial.",
      "¿Con qué se mide el sistema motor de Lang?|Observación y pruebas conductuales|Autoinformes y escalas|Registros de frecuencia cardiaca|El sistema motor incluye evitación, huida, expresión y postura, que se evalúan observando la conducta.",
      "En el experimento del pequeño Albert, ¿con qué se asoció la rata blanca?|Un ruido fuerte|Una descarga leve|Un rostro enfadado|Watson y Rayner la asociaron varias veces con un ruido fuerte, y el miedo se generalizó a objetos parecidos."
    ],
    inc: [
      "Sobre el triple sistema de respuesta|Los tres sistemas suelen correlacionar mucho entre sí|La sudoración pertenece al sistema fisiológico|Para evaluar la ansiedad hay que medir los tres sistemas|Lang halló que correlacionan poco: es la desincronía o fraccionamiento de respuesta."
    ],
    seq: [
      "Modelo bifactorial de Mowrer|Estímulo neutro asociado a uno aversivo>El estímulo provoca miedo>Evitación del estímulo>Reducción del malestar>Mantenimiento de la evitación"
    ],
    cls: [
      "Triple sistema de respuesta de Lang|Cognitivo-subjetivo: preocupaciones; valoración de lo que se siente|Fisiológico: frecuencia cardiaca; tensión muscular|Motor: huida; evitación observable"
    ] },
  { t: "Teorías cognitivas",
    tip: "Schachter y Singer propusieron que la emoción combina una activación fisiológica inespecífica, que da la intensidad, y una etiqueta cognitiva, que da la cualidad; las réplicas no confirmaron la versión original y solo sobrevive la atribución errónea de la activación. Las teorías de la valoración (Arnold, Lazarus, Scherer) sitúan el origen de la emoción en el significado de la situación. Zajonc defendió frente a Lazarus la primacía del afecto.",
    v: [
      "Teoría bifactorial=Activación inespecífica más etiqueta cognitiva basada en el contexto",
      "Atribución errónea de la activación=Atribuir a una fuente equivocada la activación procedente de otra",
      "Magda Arnold=Autora de la primera teoría de la valoración (1960)",
      "Evaluación primaria=Valoración de si un suceso es relevante para las metas o el bienestar",
      "Evaluación secundaria=Valoración de los recursos disponibles para afrontar la situación",
      "Tema relacional nuclear=Significado típico de cada emoción, como la ofensa en la ira",
      "Controles de evaluación=Secuencia de Scherer: relevancia, implicaciones, afrontamiento y norma",
      "Primacía del afecto=Tesis de Zajonc de que el afecto puede preceder a la cognición"
    ],
    g: [
      "En la teoría de Schachter y Singer, la activación fisiológica es ___ y la cualidad la da la etiqueta.|inespecífica|específica|irrelevante",
      "En el experimento de 1962, los participantes no informados tendían a adoptar el estado del ___.|cómplice|experimentador|grupo",
      "Reisenzein (1983) concluyó que la activación sobre todo ___ la intensidad de la emoción.|modula|suprime|retrasa",
      "Para Lazarus, la ___ es el tema relacional nuclear de la tristeza.|pérdida irrevocable|ofensa recibida|amenaza inminente",
      "Zajonc apoyó la primacía del afecto en el efecto de mera ___.|exposición|repetición|atribución"
    ],
    tf: [
      "Las réplicas de Marshall y Zimbardo y de Maslach confirmaron la euforia inducida por el cómplice.|F|No la reprodujeron: la activación sin explicación tendía a vivirse como desagradable, hiciera lo que hiciera el cómplice.",
      "Para Lazarus, la valoración puede ser automática y muy rápida, sin necesidad de ser consciente.|V",
      "En el estudio del puente de Dutton y Aron, parte de la activación parecía atribuirse a la atracción por la entrevistadora.|V",
      "En la teoría de Schachter y Singer, cada emoción tiene un patrón de activación fisiológica específico.|F|La activación es inespecífica y aporta la intensidad; qué emoción se siente depende de la etiqueta cognitiva del contexto."
    ],
    q: [
      "Tras cruzar un puente colgante, un hombre se siente muy atraído por la entrevistadora que le espera al final. ¿Qué concepto lo explica mejor?|Atribución errónea de la activación|Evaluación secundaria de Lazarus|Retroalimentación visceral de James|Parte de la activación por cruzar el puente parece atribuirse a la atracción (Dutton y Aron, 1974).",
      "Antes de una entrevista de trabajo, Raúl se pregunta si tiene preparación suficiente para superarla. ¿Qué proceso de Lazarus describe?|Evaluación secundaria|Evaluación primaria|Reevaluación|La evaluación secundaria valora los recursos disponibles para afrontar la situación; la primaria, su relevancia.",
      "¿Qué se mantiene hoy de la teoría bifactorial de Schachter y Singer?|La atribución errónea de la activación|La euforia contagiada por el cómplice|La especificidad de cada activación|No se replicó en su forma original; sobrevive en versiones moderadas la idea de que la activación puede atribuirse mal.",
      "¿Cómo se interpreta hoy el debate entre Zajonc y Lazarus?|Como un desacuerdo sobre qué es cognición|Como una victoria clara de la tesis de Zajonc|Como una refutación de la valoración|Lazarus respondió que la valoración puede ser automática; el desacuerdo depende en gran parte de qué se entiende por cognición."
    ],
    inc: [
      "Sobre las teorías de la valoración|Lazarus defendió la primacía del afecto sobre la cognición|Arnold formuló la primera teoría de la valoración|Scherer describió una secuencia de controles de evaluación|La primacía del afecto es la tesis de Zajonc; para Lazarus, la valoración, aunque sea automática, precede a la emoción."
    ],
    seq: [
      "Controles de evaluación de Scherer|Relevancia>Implicaciones>Potencial de afrontamiento>Significación normativa"
    ],
    cls: [] }
] },
{ n: 12, t: "La naturaleza de la emoción: debates actuales", cap: 4, pir: "alta", mods: [
  { t: "Emociones básicas",
    tip: "Las teorías de las emociones básicas proponen un número reducido de emociones seleccionadas por la evolución, cada una con desencadenante, expresión, fisiología y tendencia de acción propios. Ekman propuso seis (alegría, tristeza, ira, miedo, asco y sorpresa) y añadió después el desprecio; Izard, unas diez, con el interés, la vergüenza y la culpa; Plutchik, ocho primarias en pares opuestos. La falta de acuerdo entre listas es ya un dato relevante.",
    v: [
      "Paul Ekman=Autor que propuso seis emociones básicas y estudió a los fore de Nueva Guinea",
      "Fore=Población de Nueva Guinea con poco contacto con medios occidentales",
      "FACS=Sistema de codificación facial en unidades de acción musculares (Ekman y Friesen)",
      "Unidad de acción=Movimiento facial elemental ligado a un músculo concreto",
      "Emociones diferenciales=Teoría de Izard con unas diez emociones fundamentales",
      "Rueda de Plutchik=Ocho emociones primarias en pares opuestos, con intensidades y díadas",
      "Díada=Combinación de dos emociones adyacentes que da una emoción compleja",
      "Sonrisa de Duchenne=Sonrisa que implica el músculo orbicular de los ojos además de los labios"
    ],
    g: [
      "Ekman añadió a sus seis emociones básicas el ___.|desprecio|interés|amor",
      "En la rueda de Plutchik, la emoción opuesta a la confianza es el ___.|asco|miedo|desprecio",
      "En la rueda de Plutchik, la alegría y la confianza se combinan para formar el ___.|amor|orgullo|optimismo",
      "El FACS es ___ de cualquier teoría y se sigue usando en investigación.|independiente|derivado|inseparable",
      "En la rueda de Plutchik, la serenidad es la forma más ___ de la alegría.|suave|intensa|compleja"
    ],
    tf: [
      "La culpa y la vergüenza figuran entre las seis emociones básicas originales de Ekman.|F|Las seis de Ekman son alegría, tristeza, ira, miedo, asco y sorpresa; vergüenza y culpa aparecen en la lista de Izard.",
      "En la rueda de Plutchik, el miedo y la ira forman un par opuesto.|V",
      "Entre los criterios de Ekman para considerar básica una emoción están tener una señal expresiva distintiva y surgir de forma rápida y automática.|V",
      "En la rueda de Plutchik, la sorpresa se opone a la tristeza.|F|La sorpresa se opone a la anticipación; la tristeza es el par opuesto de la alegría."
    ],
    q: [
      "¿Qué lista corresponde a las seis emociones básicas originales de Ekman?|Alegría, tristeza, ira, miedo, asco y sorpresa|Alegría, tristeza, ira, miedo, asco y culpa|Alegría, tristeza, ira, miedo, desprecio e interés|El desprecio se añadió después; el interés y la culpa pertenecen a la lista de Izard.",
      "Una investigadora codifica en vídeos qué músculos faciales se contraen, sin presuponer qué emoción expresan. ¿Qué herramienta usa?|FACS|IAPS|TAT|El FACS descompone cualquier expresión en unidades de acción musculares y es independiente de cualquier teoría.",
      "¿Qué dato usó Ekman para defender la universalidad de las expresiones?|Los fore las asociaban a historias por encima del azar|Los fore mostraban idéntica activación autonómica|Los fore usaban las mismas palabras emocionales|Una población con poco contacto con medios occidentales asociaba expresiones e historias emocionales por encima del azar.",
      "¿Qué indica el desacuerdo entre las listas de emociones básicas de distintos autores?|Que no son unidades naturales evidentes|Que todas las listas son equivalentes|Que Ekman tenía razón frente a Izard|Si las emociones básicas fueran unidades naturales evidentes, cabría esperar más consenso sobre cuáles son."
    ],
    inc: [
      "Sobre la rueda de Plutchik|Las emociones opuestas se combinan en díadas|Hay ocho emociones primarias en pares opuestos|Cada emoción varía en intensidad|Las díadas surgen de combinar emociones adyacentes, no opuestas; por ejemplo, alegría y confianza forman el amor."
    ],
    seq: [],
    cls: [
      "Emociones según el autor|Básicas de Ekman: asco; sorpresa; desprecio|Añadidas por Izard: interés; vergüenza; culpa"
    ] },
  { t: "Modelos dimensionales",
    tip: "Los modelos dimensionales describen cualquier estado afectivo con unas pocas dimensiones; Wundt ya propuso tres ejes. El modelo circunflejo de Russell (1980) organiza los estados en un círculo según valencia y activación, y Russell (2003) definió el afecto nuclear como el estado neurofisiológico elemental que se siente como un punto de ese espacio. Los modelos discretos y dimensionales no son incompatibles.",
    v: [
      "Modelo circunflejo=Organización circular de los estados afectivos según valencia y activación",
      "Valencia=Dimensión que va de desagradable a agradable",
      "Activación=Dimensión de arousal que va de baja a alta",
      "Afecto nuclear=Estado neurofisiológico elemental y siempre presente de valencia y activación",
      "Wundt=Precursor que describió los sentimientos con tres ejes",
      "Tensión-relajación=Uno de los tres ejes de Wundt, junto a agrado y excitación",
      "Modelos discretos=Enfoques que tratan las emociones como unidades separadas con límites claros",
      "James Russell=Autor del modelo circunflejo y del concepto de afecto nuclear"
    ],
    g: [
      "En el modelo circunflejo, la serenidad es agradable y de ___ activación.|baja|alta|media",
      "Russell obtuvo el modelo pidiendo valorar la ___ entre numerosos términos emocionales.|semejanza|intensidad|frecuencia",
      "Para Russell, las emociones concretas son interpretaciones de cambios en el ___ a la luz de la situación.|afecto nuclear|estado de ánimo|rasgo emocional",
      "Una limitación de los modelos dimensionales es que distinguen mal el miedo de la ___.|ira|tristeza|serenidad",
      "Wundt propuso describir los sentimientos con ___ ejes.|tres|dos|cuatro"
    ],
    tf: [
      "En el modelo circunflejo, la ira y el miedo ocupan cuadrantes distintos porque difieren en valencia.|F|Ambos son desagradables y de alta activación, por lo que ocupan la misma zona del círculo.",
      "La tristeza y el aburrimiento son estados desagradables y poco activados.|V",
      "Los modelos discretos y dimensionales se consideran incompatibles, por lo que hay que elegir uno.|F|No son incompatibles: muchos investigadores usan dimensiones para el afecto general y categorías para emociones concretas.",
      "Los modelos dimensionales describen bien los autoinformes y los estados mixtos o difusos.|V"
    ],
    q: [
      "Antes de un concierto, Nuria se siente entusiasmada. ¿Dónde se situaría en el modelo circunflejo?|Agradable y alta activación|Agradable y baja activación|Desagradable y alta activación|El entusiasmo es agradable y activado; la serenidad sería agradable y poco activada.",
      "¿Qué estado afectivo comparte zona con el miedo en el modelo circunflejo?|La tensión|La serenidad|El aburrimiento|Tensión y miedo son desagradables y activados; el aburrimiento es desagradable, pero poco activado.",
      "¿Qué fortaleza se atribuye a los modelos discretos frente a los dimensionales?|Explican tendencias de acción concretas|Describen bien estados mixtos y difusos|Distinguen mejor los autoinformes globales|Los discretos explican tendencias de acción y son la base del FACS; los dimensionales describen mejor los estados mixtos.",
      "¿Qué es el afecto nuclear según Russell (2003)?|Un estado elemental siempre presente|Una emoción básica de origen evolutivo|Un rasgo estable de personalidad|Es el estado neurofisiológico elemental, siempre presente, que se siente como un punto en el espacio de valencia y activación."
    ],
    inc: [
      "Sobre los modelos dimensionales|Russell usó intensidad y duración como ejes|Buscan dimensiones, no un catálogo de emociones|Tienen un antecedente en los tres ejes de Wundt|Las dos dimensiones del modelo circunflejo son la valencia (desagradable-agradable) y la activación (baja-alta)."
    ],
    seq: [],
    cls: [
      "Activación en el modelo circunflejo|Alta activación: entusiasmo; tensión; miedo|Baja activación: serenidad; tristeza; aburrimiento"
    ] },
  { t: "Emoción construida y universalidad facial",
    tip: "Barrett propone que no hay programas emocionales innatos ni huellas neurales específicas: cada emoción se construye con afecto nuclear, conceptos emocionales aprendidos y predicción. La revisión de Barrett et al. (2019) concluyó que las configuraciones faciales no son indicadores fiables ni específicos, mientras Keltner y Cowen defienden decenas de expresiones reconocibles. El reconocimiento supera el azar, pero no es universal ni perfecto y depende del contexto y del formato.",
    v: [
      "Emoción construida=Teoría de Barrett: afecto nuclear, conceptos aprendidos y predicción",
      "Huella neural específica=Región o circuito propio de una emoción, cuya existencia niega Barrett",
      "Conceptos emocionales=Categorías aprendidas en la propia cultura para dar sentido a las sensaciones",
      "Predicción=Anticipación continua del cerebro sobre qué significan sus sensaciones",
      "Elección forzada=Formato con una lista corta de etiquetas, que eleva las tasas de reconocimiento",
      "Keltner y Cowen=Defensores de decenas de expresiones distinguibles entre culturas",
      "How Emotions Are Made=Libro de Barrett (2017) que expone su teoría sobre la emoción",
      "Respuesta libre=Formato en el que se nombra la emoción sin opciones, con tasas más bajas"
    ],
    g: [
      "Según Barrett, las categorías emocionales son reales, pero como categorías ___, no como especies naturales.|sociales|biológicas|universales",
      "Para Barrett, el afecto nuclear se percibe mediante la ___.|interocepción|introspección|propiocepción",
      "Las tasas de reconocimiento facial aumentan cuando se juzgan rostros del ___ grupo cultural.|propio|ajeno|vecino",
      "Según Barrett et al. (2019), la gente frunce el ceño al enfadarse más de lo esperado por azar, pero mucho ___ de lo que se suponía.|menos|más|antes",
      "Los programas que dicen detectar emociones en la cara con alta precisión descansan en un supuesto que la evidencia no ___.|respalda|cuestiona|matiza"
    ],
    tf: [
      "La revisión de Barrett et al. (2019) concluyó que las configuraciones faciales son indicadores fiables y específicos de cada emoción.|F|Concluyó lo contrario: no son fiables ni específicas, aunque aparecen más de lo esperado por azar y varían con contexto y cultura.",
      "Según la teoría de la emoción construida, no existe un circuito cerebral propio del miedo.|V",
      "El reconocimiento de expresiones prototípicas supera el azar, pero baja con formatos de respuesta libre.|V",
      "Keltner y Cowen defienden que las expresiones reconocibles entre culturas se reducen a las seis clásicas de Ekman.|F|Defienden que hay decenas de expresiones distinguibles, más de las seis clásicas, que transmiten información de forma consistente."
    ],
    q: [
      "La misma aceleración cardiaca se vive como miedo antes de un examen y como entusiasmo antes de un concierto. ¿Qué teoría lo explica así?|Emoción construida|Emociones básicas|Retroalimentación facial|Barrett propone que el cerebro construye la emoción con el afecto nuclear, los conceptos aprendidos y la predicción según el contexto.",
      "Una empresa anuncia un programa que detecta emociones en la cara con un 95 % de acierto. ¿Qué valoración es más coherente con la evidencia?|Su supuesto de partida no está respaldado|Es fiable si usa expresiones prototípicas|Es válido para rostros occidentales|Las configuraciones faciales no son indicadores fiables ni específicos de la emoción, y el contexto influye mucho en su interpretación.",
      "¿Qué síntesis sobre la universalidad facial es más ajustada al estado actual?|Reconocimiento superior al azar pero imperfecto|Reconocimiento universal y casi perfecto|Reconocimiento similar al azar en otras culturas|Las expresiones prototípicas se reconocen por encima del azar, sin universalidad ni perfección, y con gran peso del contexto.",
      "¿Qué condición eleva las tasas de reconocimiento de expresiones faciales?|Elegir entre una lista corta de etiquetas|Nombrar libremente la emoción observada|Juzgar rostros de otro grupo cultural|El formato de elección forzada y los rostros del propio grupo cultural elevan las tasas; la respuesta libre las reduce."
    ],
    inc: [
      "Sobre la teoría de la emoción construida|Propone huellas neurales específicas para cada emoción|Incluye la predicción como ingrediente de la emoción|Atribuye un papel a los conceptos aprendidos en la cultura|Barrett niega que existan huellas neurales específicas: no hay una región ni un circuito propio de cada emoción."
    ],
    seq: [],
    cls: [
      "Posturas en el debate sobre la emoción|Barrett: afecto nuclear; conceptos emocionales; predicción|Ekman y Keltner: programas evolutivos; expresiones reconocibles entre culturas"
    ] },
  { t: "Retroalimentación facial y réplicas",
    tip: "La hipótesis de la retroalimentación facial sostiene que la expresión influye en la experiencia emocional. El clásico experimento del bolígrafo de Strack, Martin y Stepper (1988) no se replicó en 17 laboratorios (Wagenmakers et al., 2016). El metaanálisis de Coles, Larsen y Lench (2019) halló efectos pequeños y heterogéneos, y la Many Smiles Collaboration (2022) encontró un ligero aumento de felicidad con sonrisas imitadas o voluntarias, pero no con el bolígrafo.",
    v: [
      "Retroalimentación facial=Hipótesis de que la expresión facial influye en la experiencia emocional",
      "Experimento del bolígrafo=Estudio de Strack, Martin y Stepper (1988) sobre la valoración de viñetas",
      "Bolígrafo con los dientes=Condición que activa los músculos de la sonrisa",
      "Bolígrafo con los labios=Condición que impide sonreír",
      "Wagenmakers et al. (2016)=Réplica prerregistrada en 17 laboratorios con diferencia prácticamente nula",
      "Many Smiles Collaboration=Proyecto con 3 878 participantes de 19 países y procedimientos acordados",
      "Coles, Larsen y Lench (2019)=Metaanálisis que halló efectos pequeños y heterogéneos",
      "Noah, Schul y Mayo (2018)=Autores que señalaron que en la réplica se grababa a los participantes"
    ],
    g: [
      "En la réplica de Wagenmakers et al., la diferencia entre condiciones fue de ___.|0,03|0,30|0,13",
      "Noah, Schul y Mayo señalaron que en la réplica se ___ a los participantes, a diferencia del original.|grababa|pagaba|engañaba",
      "En la Many Smiles Collaboration, la técnica del bolígrafo resultó poco ___.|fiable|ética|frecuente",
      "Imitar fotografías de sonrisas aumentó ___ la felicidad informada.|ligeramente|notablemente|duraderamente",
      "La hipótesis de la retroalimentación facial tiene raíces en Darwin y en ___.|James|Cannon|Watson"
    ],
    tf: [
      "La réplica multilaboratorio de Wagenmakers et al. (2016) confirmó el efecto del experimento del bolígrafo.|F|La diferencia fue de 0,03, con un IC del 95 % de −0,11 a 0,16: prácticamente nula; la réplica fracasó.",
      "La conclusión actual es que la retroalimentación facial existe, pero es pequeña y depende del procedimiento.|V",
      "La explicación de Noah, Schul y Mayo rehabilita el estudio del bolígrafo como prueba sólida.|F|Es plausible que grabar a los participantes anulara el efecto, pero eso no convierte el estudio original en prueba sólida.",
      "En el experimento original, quienes sujetaban el bolígrafo con los dientes valoraron las viñetas como más graciosas.|V"
    ],
    q: [
      "Un amigo con depresión lee que sonreír a la fuerza le hará feliz. ¿Qué es lo más ajustado a la evidencia?|Puede subir algo la felicidad momentánea|Es un tratamiento eficaz de la depresión|Carece de cualquier efecto sobre el ánimo|Forzar una sonrisa aumenta un poco la felicidad informada (Coles et al., 2022), pero no trata la tristeza persistente ni la depresión.",
      "¿Qué diseño tuvo la Many Smiles Collaboration (Coles et al., 2022)?|3 878 participantes de 19 países|17 laboratorios con el bolígrafo|Metaanálisis de estudios previos|Los 17 laboratorios corresponden a la réplica de Wagenmakers et al. (2016), y el metaanálisis, a Coles, Larsen y Lench (2019).",
      "¿Qué ilustra el caso del experimento del bolígrafo sobre la ciencia?|Su capacidad de autocorrección|La falta de valor de las réplicas|La solidez de los efectos clásicos|Un resultado llamativo, repetido durante décadas, se ha sustituido por una estimación más modesta y mejor fundada.",
      "¿Qué función cumplía sujetar el bolígrafo con los labios en el estudio de Strack, Martin y Stepper?|Impedir activar los músculos de la sonrisa|Activar con fuerza los músculos de la sonrisa|Reducir la atención prestada a las viñetas|Con los dientes se activan los músculos de la sonrisa; con los labios se impide, y así se comparan ambas condiciones."
    ],
    inc: [
      "Sobre las réplicas de la retroalimentación facial|El metaanálisis de 2019 halló efectos grandes|La réplica de 2016 se hizo en 17 laboratorios|La Many Smiles Collaboration incluyó 19 países|Coles, Larsen y Lench (2019) encontraron efectos pequeños y heterogéneos."
    ],
    seq: [
      "Historia del experimento del bolígrafo|Strack, Martin y Stepper (1988)>Wagenmakers et al. (2016)>Noah, Schul y Mayo (2018)>Coles, Larsen y Lench (2019)>Many Smiles Collaboration (2022)"
    ],
    cls: [] }
] }
);

// SAIMAP Psicología · Motivación y Emoción · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Funciones y clasificación de las emociones", cap: 4, pir: "alta", mods: [
  { t: "Funciones adaptativa, social y motivacional",
    tip: "Desde Darwin (1872), las emociones se entienden como respuestas seleccionadas por su utilidad. Sus funciones se agrupan en tres: adaptativa (preparar una acción rápida y coordinada), social (comunicar y regular la interacción) y motivacional (dar energía y dirección a la conducta). Una emoción es adaptativa cuando su tipo, intensidad y duración se ajustan a la situación.",
    v: [
      "Función adaptativa=Preparación del organismo para una acción rápida y coordinada ante algo relevante",
      "Función social=Comunicación del estado emocional y regulación de la interacción con otros",
      "Función motivacional=Aporte de energía y dirección a la conducta hacia un objetivo",
      "Darwin (1872)=Entendió las emociones como respuestas seleccionadas por su utilidad",
      "Tendencia de acción=Impulso a actuar de un modo concreto que acompaña a cada emoción",
      "Experiencia subjetiva=Componente de la emoción que responde a cómo se siente",
      "Emoción adaptativa=La que se ajusta a la situación en tipo, intensidad y duración",
      "Clasificación didáctica=Agrupación por el problema que resuelven, no una taxonomía cerrada"
    ],
    g: [
      "Una sonrisa que invita a acercarse ilustra la función ___ de la emoción.|social|adaptativa|motivacional",
      "La emoción no sustituye al pensamiento, sino que lo ___ cuando no hay tiempo para deliberar.|adelanta|bloquea|inhibe",
      "La emoción aporta el «por qué ahora» y la ___ de la conducta motivada.|intensidad|latencia|precisión",
      "El problema clínico aparece cuando la respuesta emocional es desproporcionada o ___.|persistente|breve|anticipada",
      "El asco aleja de lo que puede ___, un ejemplo de función adaptativa.|contaminar|sorprender|frustrar"
    ],
    tf: [
      "La vergüenza contribuye a apaciguar a los demás en la interacción social.|V",
      "La función motivacional consiste sobre todo en comunicar a los demás lo que probablemente vamos a hacer.|F|Eso es la función social; la motivacional da energía a la conducta y la dirige hacia un objetivo.",
      "La clasificación en emociones de urgencia, de bienestar y de autoevaluación asigna cada emoción a un grupo exclusivo.|F|Es una clasificación didáctica, no una taxonomía cerrada: algunas emociones podrían figurar en más de un grupo.",
      "Los términos «positiva» y «negativa» aplicados a una emoción aluden a su valencia, no a su utilidad.|V"
    ],
    q: [
      "Al ver que su compañero de piso frunce el ceño y aprieta los labios, Laura decide no pedirle un favor ese día. ¿Qué función de la emoción ilustra?|Social|Adaptativa|Motivacional|La expresión de enfado comunica el estado y la probable conducta del otro y regula la interacción: es la función social.",
      "¿Cuándo deja una emoción de ser adaptativa?|Cuando no se ajusta a la situación|Cuando su valencia es desagradable|Cuando aparece sin deliberación previa|Lo problemático es que el tipo, la intensidad o la duración no se ajusten a la situación, no la valencia de la emoción.",
      "¿Qué componente del esquema descriptivo de una emoción responde a «¿a qué empuja y cómo se maneja?»?|Tendencia de acción y afrontamiento|Desencadenante y evaluación|Respuesta fisiológica y somática|El desencadenante responde a qué la provoca; la respuesta fisiológica, a qué cambia en el sistema nervioso.",
      "Un excursionista ve una serpiente y retrocede de un salto antes de pensarlo. ¿Qué hace aquí la emoción respecto al pensamiento?|Lo adelanta con una respuesta rápida|Lo sustituye de forma permanente|Lo bloquea hasta que pasa el peligro|La emoción ofrece una respuesta por defecto cuando no hay tiempo para deliberar; no sustituye al pensamiento."
    ],
    inc: [
      "Sobre las funciones de la emoción|La gratitud tiende a dificultar la cooperación|La ira dirige la conducta hacia el obstáculo|El miedo moviliza energía para huir|La gratitud refuerza la cooperación: es un ejemplo de cómo las emociones regulan la interacción social."
    ],
    seq: [],
    cls: [
      "Función de la emoción que ilustra cada ejemplo|Adaptativa: el miedo moviliza energía para huir; el asco aleja de lo contaminado|Social: la sonrisa invita a acercarse; la tristeza atrae ayuda|Motivacional: la ira dirige hacia el obstáculo; el interés orienta hacia lo nuevo"
    ] },
  { t: "Emociones de urgencia",
    tip: "Miedo, ira, asco y sorpresa responden a situaciones que exigen una reacción inmediata: activación intensa, comienzo rápido, duración breve y tendencia de acción definida. El miedo responde a un peligro presente; la ansiedad, a la anticipación de una amenaza posible y difusa. La ira, aunque desagradable, es una emoción de aproximación. La sorpresa se considera neutra.",
    v: [
      "Miedo=Respuesta ante un peligro presente y concreto, con huida, evitación o inmovilidad",
      "Ansiedad=Respuesta de anticipación ante una amenaza posible y difusa",
      "Ira=Emoción ante un obstáculo o un daño valorado como intencionado o injusto",
      "Asco=Rechazo de lo que puede contaminar, de origen probablemente gustativo",
      "Sorpresa=Reacción brevísima ante lo inesperado, considerada hedónicamente neutra",
      "Hostilidad=Actitud estable de desconfianza y valoración negativa de los demás",
      "Emoción de aproximación=La que empuja hacia el estímulo, como hace la ira con el obstáculo",
      "Inmovilidad=Respuesta defensiva conocida como «quedarse helado»"
    ],
    g: [
      "Aunque se vive como desagradable, la ira es una emoción de ___.|aproximación|evitación|retirada",
      "La palidez del miedo se debe a que la sangre se desvía hacia los ___.|músculos|intestinos|pulmones",
      "La expresión del asco imita el gesto de ___ algo de la boca.|expulsar|saborear|retener",
      "La ___ es la más breve de las emociones básicas y da paso enseguida a otra emoción.|sorpresa|ira|alegría",
      "Con la evolución cultural, el asco se ha extendido a dominios sociales y ___.|morales|estéticos|económicos"
    ],
    tf: [
      "La ansiedad moderada puede ser adaptativa porque prepara para lo que puede venir.|V",
      "La hostilidad es una emoción de urgencia parecida a la ira, pero de menor intensidad.|F|La hostilidad no es una emoción, sino una actitud estable de desconfianza y valoración negativa de los demás.",
      "El repertorio del miedo incluye la huida, la inmovilidad y, si no hay salida, la defensa.|V",
      "Como se vive como desagradable, la ira es una emoción de evitación que aleja del obstáculo.|F|La ira es de aproximación: empuja hacia el obstáculo, no lejos de él."
    ],
    q: [
      "Marta siente una inquietud difusa los días previos a una revisión médica, aunque no hay nada concreto que temer. ¿Qué describe mejor su estado?|Ansiedad|Miedo|Sorpresa|La ansiedad responde a la anticipación de una amenaza posible y difusa; el miedo, a un peligro presente y concreto.",
      "¿Por qué algunos autores acercan la sorpresa a las emociones positivas?|Porque las que se recuerdan suelen ser gratas|Porque su expresión se parece a la de la alegría|Porque activa el sistema nervioso parasimpático|Otros la acercan a las negativas por su expresión; en los manuales españoles se considera neutra.",
      "Un conductor ve que otro coche le cierra el paso a propósito y siente el impulso de encararse con él. ¿Qué rasgo de su emoción ilustra?|Es una emoción de aproximación|Es una emoción de evitación|Es una emoción hedónicamente neutra|La ira surge ante un daño valorado como intencionado y empuja hacia el obstáculo, no lejos de él.",
      "¿Qué cambio corporal se asocia de forma característica al asco?|Náuseas y sensaciones gastrointestinales|Desvío de la sangre hacia los músculos|Elevación marcada de la presión arterial|El desvío de sangre a los músculos y la subida de la presión son propios del miedo; el asco se asocia a náuseas."
    ],
    inc: [
      "Sobre las emociones de urgencia|La sorpresa es la emoción básica más duradera|El miedo eleva la conductancia de la piel|La ira se acompaña de adrenalina y noradrenalina|La sorpresa es la más breve: dura un instante y da paso a otra emoción según lo que se descubra."
    ],
    seq: [],
    cls: [
      "Desencadenante típico de cada emoción|Miedo: peligro presente y concreto|Ira: ofensa percibida como injusta; obstáculo a una meta|Asco: alimento en mal estado; transgresión moral"
    ] },
  { t: "Emociones de bienestar y de pérdida",
    tip: "Alegría, amor, humor e interés aparecen al alcanzar una meta, reducir un malestar o disfrutar de algo valioso; exigen menos recursos que las de urgencia y favorecen la exploración y el vínculo. La felicidad es un estado más estable que la alegría. La tristeza, emoción de pérdida, ralentiza la actividad, vuelve la atención hacia uno mismo y pide ayuda; no es depresión.",
    v: [
      "Alegría=Emoción ante un acontecimiento positivo o el alivio de uno negativo",
      "Felicidad=Estado estable de satisfacción con la propia vida, no un episodio",
      "Tristeza=Emoción de pérdida, de baja activación conductual y duración larga",
      "Interés=Emoción que orienta la atención a lo nuevo y sostiene la exploración",
      "Humor=Emoción ante incongruencias no amenazantes, expresada con la risa",
      "Amor y afecto=Cariño, ternura y apego que crean y mantienen vínculos",
      "Cigomático mayor=Músculo que eleva las comisuras de los labios al sonreír",
      "Sonrisa de Duchenne=Sonrisa genuina en la que participa además el orbicular de los ojos"
    ],
    g: [
      "En el esquema de Ekman, la ___ es la única emoción básica claramente positiva.|alegría|sorpresa|interés",
      "Fredrickson propuso que las emociones positivas ___ el repertorio de pensamientos y acciones.|amplían|estrechan|fijan",
      "La tristeza se incluye junto a las emociones de bienestar porque es su ___.|reverso|origen|antecedente",
      "La expresión de tristeza, con las cejas elevadas en el centro, provoca ___ en los demás.|empatía|rechazo|sorpresa",
      "El interés está muy ligado a la motivación ___ y a la curiosidad.|intrínseca|extrínseca|introyectada"
    ],
    tf: [
      "La felicidad se distingue de la alegría sobre todo por su duración.|V",
      "La tristeza es una emoción de alta activación conductual que moviliza energía para recuperar lo perdido.|F|Es de baja activación: ralentiza la actividad y ahorra energía cuando no hay un plan eficaz para recuperar lo perdido.",
      "Las emociones de bienestar exigen más recursos que las de urgencia.|F|Exigen menos recursos que las de urgencia y favorecen la exploración y el vínculo.",
      "La tristeza normal tiene un desencadenante identificable y remite con el tiempo.|V"
    ],
    q: [
      "Tras romper con su pareja, Andrés está más lento, revisa qué quiere a partir de ahora y busca a sus amigos. ¿Qué cabe concluir?|Son funciones normales de la tristeza|Son síntomas que confirman una depresión|Es una reacción de urgencia ante un peligro|Ralentizar la actividad, revisar metas y pedir ayuda son funciones de la tristeza; la depresión exige criterios propios.",
      "¿Qué distingue la sonrisa genuina de otras sonrisas?|Que participa el orbicular de los ojos|La elevación de las comisuras labiales|La activación del cigomático mayor|El cigomático mayor eleva las comisuras en toda sonrisa; en la de Duchenne participa además el orbicular de los ojos.",
      "¿Ante qué surge típicamente el humor?|Incongruencias no amenazantes|Estímulos inesperados y novedosos|Metas alcanzadas con esfuerzo|Lo inesperado provoca sorpresa y la meta alcanzada, alegría; el humor aparece ante incongruencias no amenazantes.",
      "¿Qué función se atribuye a la tristeza?|Volver la atención hacia uno mismo|Movilizar energía para atacar la causa|Señalar un peligro presente y concreto|La tristeza vuelve la atención hacia uno mismo para revisar metas y planes; atacar es propio de la ira."
    ],
    inc: [
      "Sobre las emociones de bienestar|La felicidad es un episodio breve ante un logro|El amor suele ser un estado prolongado ligado a una relación|La alegría facilita el contacto y reduce la hostilidad ajena|La felicidad no es un episodio, sino un estado más estable de satisfacción con la propia vida."
    ],
    seq: [],
    cls: [
      "Tristeza normal o depresión|Tristeza normal: desencadenante identificable; respuesta proporcionada; remite con el tiempo|Depresión: trastorno con criterios propios; criterios de duración e intensidad; interferencia"
    ] },
  { t: "Emociones de autoevaluación e interacción social",
    tip: "Vergüenza, culpa y orgullo requieren autoconciencia y normas interiorizadas y aparecen hacia los dos o tres años. Según Tangney, la vergüenza evalúa el yo global («soy malo») y lleva a esconderse; la culpa evalúa una conducta («hice algo malo») y lleva a reparar. Tracy y Robins distinguen orgullo auténtico y arrogante. Los celos implican tres personas y miedo a perder; la envidia, dos y deseo de tener.",
    v: [
      "Vergüenza=Evaluación negativa del yo global con tendencia a esconderse",
      "Culpa=Evaluación negativa de una conducta concreta con tendencia a reparar",
      "Orgullo auténtico=Satisfacción por un logro atribuido al esfuerzo, ligada a la autoestima sana",
      "Orgullo arrogante=Satisfacción por un logro atribuido a una superioridad global y estable",
      "Celos=Miedo a perder una relación ante un rival; implica tres personas",
      "Envidia=Deseo de tener lo que otro posee; implica dos personas",
      "Emociones autoconscientes=Requieren autoconciencia y normas interiorizadas; surgen hacia los 2–3 años",
      "Tangney=Sitúa la diferencia entre vergüenza y culpa en el foco de la evaluación"
    ],
    g: [
      "Las emociones autoconscientes aparecen hacia los ___ años, cuando el niño se reconoce distinto de los demás.|dos o tres|seis o siete|cuatro o cinco",
      "Su expresión facial es poco específica, por lo que se reconocen mejor por la ___.|postura|voz|respiración",
      "La culpa se asocia a una empatía ___, porque la atención se centra en el daño causado.|alta|baja|nula",
      "Los celos mezclan sobre todo miedo, ira y ___.|tristeza|admiración|vergüenza",
      "Según la relación con Weiner, atribuir el éxito a causas ___ produce orgullo.|internas|externas|situacionales"
    ],
    tf: [
      "La tendencia a disculparse y compensar el daño es propia de la vergüenza.|F|Es propia de la culpa; la vergüenza tiende a esconderse, huir o, a veces, culpar a otros.",
      "La vergüenza se asocia más al malestar psicológico y la culpa, a la conducta prosocial.|V",
      "La envidia implica tres personas: uno mismo, la persona querida y un rival.|F|Esa estructura de tres personas es la de los celos; la envidia implica dos y el deseo de tener lo que otro posee.",
      "El orgullo arrogante se asocia al narcisismo y a la agresividad.|V"
    ],
    q: [
      "Tras olvidar el cumpleaños de una amiga, Sara piensa «hice algo mal» y la llama para disculparse. ¿Qué emoción describe mejor su reacción?|Culpa|Vergüenza|Envidia|Se centra en una conducta concreta y la empuja a reparar: es culpa. La vergüenza evalúa el yo global.",
      "Pablo suspende, piensa «soy un desastre como persona» y evita a sus compañeros durante días. ¿Qué emoción predomina?|Vergüenza|Culpa|Envidia|La evaluación negativa del yo global y la tendencia a esconderse son propias de la vergüenza.",
      "Lucía siente malestar cada vez que elogian a una compañera por un logro que ella querría para sí. ¿Qué emoción experimenta?|Envidia|Celos|Culpa|Hay dos personas y deseo de tener lo que otro posee: envidia. Los celos implican tres personas y miedo a perder.",
      "Según Tracy y Robins (2007), pensar «lo logré porque soy superior» refleja…|orgullo arrogante|orgullo auténtico|vergüenza encubierta|Atribuir el logro a cualidades globales y estables es orgullo arrogante; atribuirlo al esfuerzo, orgullo auténtico."
    ],
    inc: [
      "Sobre las emociones autoconscientes|Aparecen antes que las emociones básicas|Requieren normas interiorizadas|Indican si se cumple lo que se espera de uno|Aparecen más tarde que las básicas, hacia los dos o tres años, cuando el niño se reconoce y empieza a interiorizar reglas."
    ],
    seq: [],
    cls: [
      "Vergüenza o culpa|Vergüenza: «soy malo»; esconderse o huir; empatía baja|Culpa: «hice algo malo»; reparar el daño; empatía alta"
    ] }
] },
{ n: 14, t: "Neurociencia afectiva y regulación emocional", cap: 4, pir: "alta", mods: [
  { t: "El cerebro emocional",
    tip: "Papez (1937) propuso un circuito emocional y MacLean popularizó el «sistema límbico», hoy un concepto histórico sin límites anatómicos claros. La neurociencia afectiva habla de redes distribuidas: amígdala, hipotálamo, ínsula, cingulada anterior y corteza prefrontal. LeDoux describió una vía corta tálamo-amígdala y una vía larga cortical. La amígdala se describe mejor como detector de relevancia que como «centro del miedo».",
    v: [
      "Sistema límbico=Etiqueta histórica para estructuras mediales asociadas a la emoción",
      "Circuito de Papez=Hipocampo, cuerpos mamilares, tálamo anterior y giro cingulado (1937)",
      "Amígdala=Detector de relevancia clave en el aprendizaje del miedo condicionado",
      "Ínsula=Corteza de la interocepción, asociada al asco",
      "Hipotálamo=Coordina las respuestas autónomas y endocrinas de la emoción",
      "Vía corta de LeDoux=Ruta del tálamo a la amígdala, rápida y poco detallada",
      "Marcador somático=Hipótesis de Damasio sobre estados corporales pasados que guían decisiones",
      "Paciente S. M.=Lesión amigdalina bilateral con dificultad para reconocer el miedo en caras"
    ],
    g: [
      "MacLean popularizó el término sistema límbico, que consideró el «cerebro ___».|emocional|racional|motor",
      "La vía corta de LeDoux va del ___ a la amígdala sin pasar por la corteza.|tálamo|hipocampo|hipotálamo",
      "La corteza prefrontal ___ interviene en la regulación deliberada, como la reevaluación.|lateral|ventromedial|orbitofrontal",
      "El estriado ventral se relaciona más con el «___» que con el placer.|querer|gustar|evitar",
      "Damasio (1994) propuso la hipótesis del marcador ___.|somático|afectivo|cognitivo"
    ],
    tf: [
      "La amígdala responde también a estímulos positivos, novedosos o ambiguos.|V",
      "La vía larga de LeDoux, a través de la corteza, es más rápida pero menos precisa que la vía corta.|F|Es al revés: la vía corta tálamo-amígdala es rápida y poco detallada; la larga cortical, más lenta y precisa.",
      "El sistema límbico es hoy un sistema funcional bien delimitado que explica por sí mismo la emoción.|F|Es un concepto histórico sin criterio anatómico claro; la emoción depende de redes distribuidas.",
      "Las mismas regiones cerebrales participan en procesos emocionales y no emocionales.|V"
    ],
    q: [
      "Una paciente con lesión bilateral de la amígdala apenas reconoce el miedo en las caras y se expone a situaciones peligrosas. ¿Qué conclusión es más ajustada?|La amígdala detecta amenazas relevantes|La amígdala es el único centro del miedo|La amígdala almacena la memoria episódica|Como S. M., muestra el papel de la amígdala como detector de relevancia; no es un «centro del miedo» exclusivo.",
      "¿Por qué se considera el «sistema límbico» un concepto histórico?|Carece de un criterio anatómico claro|Sus estructuras no intervienen en la emoción|Lo sustituyó el concepto de circuito de Papez|Además, el hipocampo participa sobre todo en la memoria y quedan fuera regiones clave como la prefrontal y la ínsula.",
      "Un paciente con lesión prefrontal ventromedial resuelve bien problemas lógicos, pero arruina su economía con malas elecciones. ¿Qué hipótesis lo explica mejor?|Marcador somático de Damasio|Vía corta tálamo-amígdala de LeDoux|Circuito emocional de Papez|Sin los estados corporales asociados a recompensas y castigos pasados, razona en abstracto pero decide mal en su vida.",
      "¿Qué estructura se asocia a la interocepción y al asco?|Ínsula|Amígdala|Cingulada anterior|La ínsula representa el estado del cuerpo; la cingulada anterior se relaciona con conflicto, dolor y malestar."
    ],
    inc: [
      "Sobre el cerebro emocional|Cada emoción tiene su estructura cerebral propia|La ínsula representa el estado del cuerpo|El hipotálamo coordina las respuestas endocrinas|No hay una estructura por emoción: las regiones forman redes que se combinan según la situación."
    ],
    seq: [
      "Evolución de las ideas sobre el cerebro emocional|Cannon y Bard destacan tálamo e hipotálamo>Papez propone su circuito>MacLean populariza el sistema límbico>LeDoux describe dos vías hacia la amígdala>Redes distribuidas de la neurociencia afectiva"
    ],
    cls: [] },
  { t: "El modelo procesual de Gross",
    tip: "La regulación emocional influye en qué emociones se tienen, cuándo y cómo se experimentan y expresan. Gross (1998) parte de la secuencia situación, atención, valoración y respuesta, y distingue cinco familias: selección y modificación de la situación, despliegue atencional, cambio cognitivo y modulación de la respuesta. Las cuatro primeras se centran en los antecedentes; la quinta, en la respuesta.",
    v: [
      "Regulación emocional=Procesos por los que se influye en qué emociones se tienen y cómo se expresan",
      "Selección de la situación=Elegir a qué situaciones exponerse",
      "Modificación de la situación=Cambiar las circunstancias para alterar su impacto emocional",
      "Despliegue atencional=Dirigir la atención hacia o lejos de aspectos de la situación",
      "Cambio cognitivo=Modificar el significado dado a la situación; su forma típica es la reevaluación",
      "Modulación de la respuesta=Actuar sobre la emoción ya generada, como en la supresión expresiva",
      "ERQ=Cuestionario de Gross y John (2003) con escalas de reevaluación y supresión",
      "Gross (2015)=Etapas de identificación, selección e implementación de la regulación"
    ],
    g: [
      "Las cuatro primeras familias del modelo de Gross son estrategias centradas en los ___.|antecedentes|consecuentes|resultados",
      "Pedir que se aplace una reunión tensa es un ejemplo de ___ de la situación.|modificación|selección|evaluación",
      "Según Gross, la emoción surge en la secuencia situación, atención, ___ y respuesta.|valoración|activación|expresión",
      "En la ampliación de 2015, darse cuenta de que hay que regular corresponde a la etapa de ___.|identificación|selección|implementación",
      "La regulación emocional puede servir para disminuir, aumentar o ___ una emoción.|mantener|anticipar|clasificar"
    ],
    tf: [
      "Distraerse pensando en otra cosa es un ejemplo de cambio cognitivo.|F|Es despliegue atencional; el cambio cognitivo modifica el significado que se da a la situación.",
      "La regulación emocional puede aplicarse tanto a emociones negativas como positivas.|V",
      "Respirar hondo o hacer ejercicio para calmarse son formas de modulación de la respuesta.|V",
      "En el modelo de Gross, la reevaluación cognitiva es una estrategia centrada en la respuesta.|F|Es una forma de cambio cognitivo, centrada en los antecedentes; la supresión expresiva es la centrada en la respuesta."
    ],
    q: [
      "Elena no acude a una cena porque sabe que estará su exsocio, con quien discutió. ¿Qué estrategia usa?|Selección de la situación|Modificación de la situación|Despliegue atencional|Elige no exponerse a la situación; modificarla sería cambiarla una vez dentro, por ejemplo, pedir que se aplace.",
      "Antes de un examen, Iván se dice que es una oportunidad para comprobar lo que ha aprendido. ¿Qué familia de estrategias aplica?|Cambio cognitivo|Despliegue atencional|Modulación de la respuesta|Cambia el significado de la situación (amenaza frente a oportunidad): es reevaluación, la forma más estudiada de cambio cognitivo.",
      "Un paciente elige bien la estrategia, pero no sabe ponerla en práctica. Según Gross (2015), ¿en qué etapa falla?|Implementación|Identificación|Selección|Detectar que hay que regular es identificación y elegir estrategia es selección; aplicarla con una táctica es implementación.",
      "¿Qué distingue las estrategias centradas en los antecedentes de las centradas en la respuesta?|El momento en que actúan|El tipo de emoción que regulan|La intensidad de la emoción|La distinción es temporal: las primeras actúan antes de que la emoción se despliegue; las segundas, cuando ya está en marcha."
    ],
    inc: [
      "Sobre el modelo procesual de Gross|La supresión expresiva es una forma de despliegue atencional|Concentrarse en lo positivo es despliegue atencional|La reevaluación es la forma más estudiada de cambio cognitivo|La supresión expresiva es la forma más estudiada de modulación de la respuesta, la quinta familia."
    ],
    seq: [
      "Familias de estrategias según el modelo de Gross|Selección de la situación>Modificación de la situación>Despliegue atencional>Cambio cognitivo>Modulación de la respuesta"
    ],
    cls: [
      "Estrategias centradas en los antecedentes o en la respuesta|Antecedentes: selección de la situación; despliegue atencional; reevaluación|Respuesta: supresión expresiva; respirar hondo"
    ] },
  { t: "Reevaluación frente a supresión",
    tip: "La reevaluación reinterpreta la situación antes de que la emoción se despliegue y reduce tanto la experiencia como la expresión. La supresión expresiva inhibe lo que se muestra, apenas cambia lo que se siente, aumenta la activación simpática y empeora el recuerdo. Dos matices: la reevaluación exige recursos cognitivos, y la supresión no siempre es perjudicial; su coste aparece sobre todo con un uso habitual y rígido.",
    v: [
      "Reevaluación cognitiva=Reinterpretar una situación para cambiar su impacto emocional",
      "Supresión expresiva=Inhibir la expresión visible de una emoción que ya se siente",
      "Webb, Miles y Sheeran=Metaanálisis de 2012 que comparó la eficacia de estrategias de regulación",
      "Distracción=Estrategia con efecto algo menor que el cambio cognitivo (d+ de 0,27)",
      "Supresión de la experiencia=Intentar no sentir; sin efecto en el metaanálisis (−0,04)",
      "Coste de memoria=Peor recuerdo de lo ocurrido mientras se inhibe la expresión",
      "Corteza prefrontal lateral=Región de control que se activa durante la reevaluación",
      "Coste social de suprimir=Interacciones menos fluidas en las que el otro percibe distancia"
    ],
    g: [
      "La supresión expresiva aumenta la activación ___.|simpática|parasimpática|vagal",
      "En el metaanálisis de Webb et al. (2012), el cambio cognitivo obtuvo un d+ de ___.|0,36|0,27|−0,04",
      "La reevaluación suele acompañarse de menor respuesta de la ___ ante el estímulo emocional.|amígdala|ínsula|hipófisis",
      "Ante emociones muy intensas o con poco tiempo, la ___ puede funcionar mejor a corto plazo.|distracción|reevaluación|rumiación",
      "El coste de la supresión aparece sobre todo cuando se usa de forma habitual y ___.|rígida|flexible|ocasional"
    ],
    tf: [
      "La supresión expresiva reduce la expresión, pero apenas reduce la emoción sentida.|V",
      "El efecto de la supresión de la expresión en Webb et al. (2012) indica que reduce lo sentido tanto como la reevaluación.|F|Su efecto (0,32) se debe sobre todo a que reduce lo que se muestra, no lo que se siente.",
      "Ocultar el enfado ante un cliente o una autoridad puede ser lo más adecuado en ese momento.|V",
      "La reevaluación apenas consume recursos cognitivos, por lo que resulta fácil ante emociones muy intensas.|F|Exige recursos cognitivos; ante emociones muy intensas o con poco tiempo cuesta aplicarla."
    ],
    q: [
      "En una reunión, Jorge disimula su enfado ante un cliente y después recuerda mal lo que se habló. ¿Qué explica mejor ese olvido?|El coste de memoria de la supresión|Un efecto típico de la reevaluación|La baja activación simpática del enfado|La supresión expresiva empeora el recuerdo de lo ocurrido mientras se aplica; la reevaluación no deteriora la memoria.",
      "¿Qué estrategia no tuvo efecto en el metaanálisis de Webb et al. (2012)?|Suprimir la experiencia|Distraerse de la situación|Suprimir la expresión|Intentar no sentir obtuvo −0,04; la distracción, 0,27, y la supresión de la expresión, 0,32.",
      "Comparada con la supresión expresiva, la reevaluación…|reduce también la experiencia emocional|aumenta la activación simpática del organismo|empeora el recuerdo de la situación|Ambas reducen la expresión, pero solo la reevaluación reduce de forma clara lo que se siente.",
      "¿Por qué se considera, en general, la reevaluación más adaptativa que la supresión?|Reduce lo sentido sin elevar la activación|Actúa cuando la emoción ya está en marcha|Elimina por completo la emoción negativa|La reevaluación actúa sobre los antecedentes, reduce la experiencia y no aumenta la activación fisiológica."
    ],
    inc: [
      "Sobre la reevaluación y la supresión|La supresión mejora el recuerdo de lo ocurrido|La reevaluación activa regiones prefrontales de control|El uso habitual de la supresión se asocia a más afecto negativo|La supresión empeora el recuerdo de lo ocurrido mientras se aplica."
    ],
    seq: [],
    cls: [
      "Efectos propios de cada estrategia|Reevaluación: reduce la emoción sentida; no aumenta la activación; no deteriora la memoria|Supresión expresiva: aumenta la activación simpática; peor recuerdo; interacciones menos fluidas"
    ] },
  { t: "Flexibilidad regulatoria",
    tip: "La pregunta ya no es qué estrategia es mejor, sino cuándo funciona cada una. La flexibilidad regulatoria combina sensibilidad al contexto, repertorio y retroalimentación. Ante lo controlable conviene actuar sobre la situación; ante lo incontrolable, la reevaluación tiene más sentido. La rigidez, la rumiación y la evitación generalizada se asocian a depresión y ansiedad.",
    v: [
      "Flexibilidad regulatoria=Capacidad de ajustar la regulación emocional al contexto",
      "Sensibilidad al contexto=Leer bien qué exige la situación, quién está y qué está en juego",
      "Repertorio=Disponer de varias estrategias de regulación, no de una sola",
      "Retroalimentación=Comprobar si la estrategia funciona y cambiarla si no lo hace",
      "Rumiación=Dar vueltas una y otra vez a lo negativo",
      "Evitación sistemática=Alivio a corto plazo que mantiene los miedos y la ansiedad",
      "Rigidez regulatoria=Usar siempre la misma estrategia, sea cual sea la situación",
      "Situación controlable=La que puede cambiarse, por lo que conviene actuar sobre ella"
    ],
    g: [
      "Ante una situación ___, como la enfermedad de un familiar, la reevaluación tiene más sentido.|incontrolable|controlable|novedosa",
      "La evitación reduce el malestar a corto plazo, pero, usada de forma sistemática, ___ los miedos.|mantiene|extingue|reduce",
      "Algunos estudios sugieren que el coste social de la supresión es menor en culturas que valoran la ___ emocional.|contención|expresión|intensidad",
      "Comprobar si una estrategia funciona y cambiarla si no lo hace es el componente de ___.|retroalimentación|repertorio|sensibilidad al contexto",
      "Muchas terapias actuales incluyen el entrenamiento en regulación emocional como componente ___.|central|opcional|secundario"
    ],
    tf: [
      "Ante un conflicto que se puede resolver hablando, reinterpretarlo suele ser mejor que actuar sobre la situación.|F|Ante una situación controlable, actuar sobre ella suele ser mejor que reinterpretarla.",
      "Disponer de varias estrategias es uno de los componentes de la flexibilidad regulatoria.|V",
      "La rumiación se asocia a problemas como la depresión y la ansiedad.|V",
      "Lo que más se asocia a la salud mental es usar con frecuencia la estrategia más eficaz en promedio.|F|Se asocia a usar un repertorio variado y elegir según la situación; la rigidez se asocia a problemas."
    ],
    q: [
      "Nuria evita sistemáticamente el ascensor porque le angustia; el malestar baja, pero el miedo no desaparece con los meses. ¿Qué lo explica?|La evitación mantiene el miedo|Le falta suprimir más su expresión|Su miedo es una ansiedad incontrolable|La evitación reduce el malestar a corto plazo, pero, usada de forma sistemática, mantiene los miedos y la ansiedad.",
      "Un estudiante discute con su compañero de piso por las tareas, un conflicto que podrían resolver hablando. ¿Qué sugiere la flexibilidad regulatoria?|Actuar sobre la situación|Reevaluar el conflicto|Distraerse del malestar|Ante una situación controlable conviene actuar sobre ella; la reevaluación tiene más sentido ante lo incontrolable.",
      "¿Qué componente de la flexibilidad regulatoria consiste en leer qué exige la situación?|Sensibilidad al contexto|Repertorio de estrategias|Retroalimentación|El repertorio es disponer de varias estrategias y la retroalimentación, comprobar si funcionan.",
      "¿Hacia dónde ha desplazado su pregunta la investigación reciente en regulación emocional?|Hacia cuándo funciona cada estrategia|Hacia qué estrategia es mejor siempre|Hacia qué emociones conviene suprimir|Ya no se pregunta qué estrategia es mejor, sino cuándo funciona cada una: no hay estrategias buenas o malas en abstracto."
    ],
    inc: [
      "Sobre la flexibilidad regulatoria|La rigidez protege frente a la ansiedad|La evitación alivia el malestar a corto plazo|El contexto cambia el valor de cada estrategia|La rigidez (usar siempre la misma estrategia) se asocia a problemas como la depresión y la ansiedad."
    ],
    seq: [],
    cls: [
      "Patrones de regulación y salud mental|Asociado a mejor salud mental: repertorio variado; elegir según la situación|Asociado a problemas: rigidez; rumiación; evitación generalizada"
    ] }
] },
{ n: 15, t: "Educación, trabajo e inteligencia emocional", cap: 5, pir: "media", mods: [
  { t: "Motivación en el aula",
    tip: "Reeve muestra que el estilo docente que apoya la autonomía (explicaciones razonadas, reconocimiento de sentimientos, lenguaje no controlador, opciones) favorece la motivación de calidad. Pekrun explica las emociones de logro por el control y el valor percibidos. Las intervenciones de mentalidad de crecimiento tienen efectos pequeños y heterogéneos. Las aulas centradas en el progreso fomentan metas de dominio.",
    v: [
      "Apoyo a la autonomía=Estilo docente con explicaciones razonadas, opciones y lenguaje no controlador",
      "Estilo controlador=Estilo docente basado en presiones, amenazas y recompensas condicionadas",
      "Teoría del control-valor=Teoría de Pekrun sobre el origen de las emociones de logro",
      "Control percibido=Creencia de poder influir en el resultado de una actividad",
      "Valor=Importancia que se da a una actividad o a su resultado",
      "Mentalidad de crecimiento=Creencia de que la capacidad puede desarrollarse con esfuerzo y estrategias",
      "Metas de dominio=Orientación al progreso y la comprensión, que trata el error como aprendizaje",
      "Retroalimentación informativa=Comentario que explica qué está bien hecho y por qué"
    ],
    g: [
      "Según Pekrun, bajo control con alto valor produce ___.|ansiedad|aburrimiento|disfrute",
      "Decir «puedes probar…» en lugar de «tienes que…» es un ejemplo de lenguaje no ___.|controlador|informativo|evaluativo",
      "En Yeager et al. (2019), la intervención elevó la nota media de los alumnos de bajo rendimiento en ___ puntos.|0,10|0,50|1,00",
      "Las aulas que comparan públicamente los resultados fomentan metas de ___.|rendimiento|dominio|aprendizaje",
      "Las recompensas socavan la motivación intrínseca sobre todo si son tangibles, esperadas y se perciben como ___.|controladoras|informativas|merecidas"
    ],
    tf: [
      "Según la TAD, la regulación identificada y la integrada son formas autónomas de motivación extrínseca.|V",
      "Según Pekrun, un estudiante que da poco valor a una asignatura tenderá a sentir sobre todo ansiedad.|F|El bajo valor produce aburrimiento; la ansiedad aparece con bajo control y alto valor.",
      "Las intervenciones breves de mentalidad de crecimiento transforman por sí solas el rendimiento académico.|F|Sus efectos son pequeños y heterogéneos: reales y baratos, pero modestos.",
      "Reconocer los sentimientos negativos del alumnado forma parte del estilo que apoya la autonomía.|V"
    ],
    q: [
      "Carla estudia una asignatura que considera clave para su futuro, pero cree que, haga lo que haga, suspenderá. Según Pekrun, ¿qué emoción es más probable?|Ansiedad|Aburrimiento|Disfrute|Alto valor con bajo control produce ansiedad y desesperanza; el aburrimiento procede del bajo valor.",
      "Un alumno atribuye su suspenso a que «no vale para las matemáticas». Según Weiner, ¿cómo es esta atribución?|Interna, estable e incontrolable|Externa, inestable e incontrolable|Interna, inestable y controlable|La falta de capacidad es interna, estable e incontrolable, y reduce la expectativa y la persistencia.",
      "¿Qué conducta es propia de un docente que apoya la autonomía?|Explica por qué una tarea es útil|Fija plazos y premios condicionados|Evita mencionar los sentimientos negativos|Plazos impuestos y recompensas condicionadas son propios del estilo controlador; el apoyo a la autonomía reconoce los sentimientos.",
      "¿Qué dos vías de intervención se derivan de la teoría del control-valor?|Aumentar el control percibido y el valor|Reducir las tareas y aumentar los premios|Comparar resultados y fijar metas altas|Se aumenta el control (tareas ajustadas, estrategias) y el valor (mostrar la utilidad y conectar con intereses)."
    ],
    inc: [
      "Sobre la motivación en el aula|El objetivo es eliminar las notas y los premios|Las normas claras forman parte de la estructura|La retroalimentación informativa suele fortalecer la motivación intrínseca|No se trata de eliminar notas ni premios: socavan la motivación sobre todo si son tangibles, esperados y controladores."
    ],
    seq: [],
    cls: [
      "Emociones de logro según Pekrun|Alto control y alto valor: disfrute; esperanza|Bajo control y alto valor: ansiedad; desesperanza|Bajo valor: aburrimiento"
    ] },
  { t: "Motivación laboral, engagement y burnout",
    tip: "Herzberg separa factores higiénicos, que evitan la insatisfacción, y motivadores; Vroom multiplica expectativa, instrumentalidad y valencia; Adams se basa en la equidad, y Hackman y Oldham, en las características del puesto. El engagement (vigor, dedicación, absorción) y el burnout (agotamiento, cinismo, ineficacia) se integran en el modelo de demandas y recursos. La CIE-11 trata el burnout como fenómeno ocupacional (QD85), no como enfermedad.",
    v: [
      "Factores higiénicos=En Herzberg, salario o condiciones que evitan la insatisfacción sin motivar",
      "Factores motivadores=En Herzberg, logro, reconocimiento o responsabilidad, que producen satisfacción",
      "Instrumentalidad=Creencia de que el rendimiento llevará a un resultado, según Vroom",
      "Valencia=Valor que tiene un resultado para la persona, según Vroom",
      "Teoría de la equidad=Comparación de lo que uno aporta y recibe con lo de otros (Adams)",
      "Engagement=Estado positivo y persistente hacia el trabajo con vigor, dedicación y absorción",
      "Burnout=Agotamiento emocional, cinismo y reducida realización personal en el trabajo",
      "Modelo demandas-recursos=Modelo de Bakker y Demerouti (2007) que integra burnout y engagement"
    ],
    g: [
      "En la teoría de Vroom, si cualquiera de los tres factores es ___, la motivación es nula.|cero|bajo|medio",
      "La CIE-11 trata el burnout como un fenómeno ___ y no como una enfermedad.|ocupacional|psiquiátrico|endocrino",
      "En el engagement, la concentración plena en la que el tiempo pasa rápido se denomina ___.|absorción|dedicación|vigor",
      "Según Bakker y Demerouti, los ___ motivan y además amortiguan el efecto de las demandas.|recursos|motivadores|retos",
      "Hackman y Oldham señalaron la variedad, la identidad, la significación, la autonomía y la ___ del puesto.|retroalimentación|remuneración|estabilidad contractual"
    ],
    tf: [
      "Para Herzberg, el salario es un factor motivador que produce satisfacción.|F|El salario es un factor higiénico: evita la insatisfacción, pero no motiva por sí mismo.",
      "La absorción es una de las dimensiones del burnout según Maslach.|F|La absorción pertenece al engagement; el burnout incluye agotamiento, despersonalización y reducida realización personal.",
      "Según Adams, la inequidad motiva a restablecer el equilibrio aunque favorezca a la propia persona.|V",
      "Engagement y burnout no son simples opuestos, porque dependen en parte de procesos distintos.|V"
    ],
    q: [
      "Rubén sabe que si se esfuerza rendirá más y que eso le dará un ascenso, pero el ascenso no le interesa nada. Según Vroom, ¿qué ocurre?|Su motivación es nula por la valencia|Le motiva su alta expectativa|Le falta instrumentalidad en su puesto|La teoría es multiplicativa: con valencia cero, la motivación es nula aunque la expectativa y la instrumentalidad sean altas.",
      "Una enfermera se siente agotada, trata con frialdad a los pacientes y cree que no logra nada. ¿Qué describe?|Las tres dimensiones del burnout|Un trastorno mental según la CIE-11|Las tres dimensiones del engagement|Agotamiento, despersonalización y reducida realización personal; la CIE-11 lo trata como fenómeno ocupacional, no como trastorno.",
      "¿Cómo clasifica la CIE-11 el burnout?|Como un fenómeno ocupacional|Como un trastorno mental laboral|Como una enfermedad del estrés|Aparece en el capítulo de factores que influyen en el estado de salud y se refiere solo al contexto laboral.",
      "¿Qué crítica recibe la teoría bifactorial de Herzberg?|Poco apoyo a la división estricta|Que trata el salario como un motivador|Que reduce la motivación a un producto|Ha sido muy influyente en la gestión, pero su división estricta entre dos tipos de factores tiene poco apoyo empírico."
    ],
    inc: [
      "Sobre la motivación laboral|Según Bakker y Demerouti, los recursos llevan al burnout|El reconocimiento es un factor motivador en Herzberg|La UWES es la escala que mide el engagement laboral|Las demandas crónicas llevan al burnout; los recursos motivan y llevan al engagement."
    ],
    seq: [],
    cls: [
      "Dimensiones de cada fenómeno|Engagement: vigor; dedicación; absorción|Burnout: agotamiento emocional; cinismo; reducida realización personal"
    ] },
  { t: "Inteligencia emocional: modelos y medida",
    tip: "Salovey y Mayer (1990) introdujeron el concepto y Goleman (1995) lo popularizó. El modelo de habilidad de Mayer y Salovey (1997) propone cuatro ramas (percepción, facilitación, comprensión y manejo) y se mide con pruebas de rendimiento como el MSCEIT. Los modelos mixtos (Goleman, Bar-On) y la IE rasgo (Petrides) usan autoinformes, igual que el TMMS-24 de IE percibida. Rendimiento y autoinforme correlacionan poco.",
    v: [
      "Salovey y Mayer=Introdujeron en 1990 el concepto en un artículo académico",
      "Goleman=Popularizó la IE en 1995 con un libro divulgativo",
      "MSCEIT=Prueba de rendimiento del modelo de habilidad, puntuada por consenso o expertos",
      "EQ-i=Autoinforme del modelo mixto de Bar-On",
      "TEIQue=Autoinforme de la IE rasgo de Petrides",
      "TMMS-24=Autoinforme de IE percibida con atención, claridad y reparación",
      "Facilitación emocional=Uso de las emociones para pensar, como el ánimo positivo en tareas creativas",
      "IE rasgo=Conjunto de autopercepciones emocionales que forman parte de la personalidad"
    ],
    g: [
      "La rama más básica del modelo de Mayer y Salovey es la ___ emocional.|percepción|comprensión|regulación",
      "En el MSCEIT, las respuestas se puntúan según el consenso de una muestra amplia o el criterio de ___.|expertos|pacientes|docentes",
      "El TMMS-24 evalúa la atención a los sentimientos, la claridad emocional y la ___ de las emociones.|reparación|expresión|percepción",
      "Las correlaciones entre medidas de rendimiento y de autoinforme de IE son ___.|bajas|altas|moderadas",
      "Entender cómo se pasa de la irritación a la ira corresponde a la rama de ___.|comprensión|percepción|facilitación"
    ],
    tf: [
      "El origen académico del concepto de inteligencia emocional se debe a Goleman (1995).|F|Lo introdujeron Salovey y Mayer (1990); Goleman lo popularizó con un libro divulgativo.",
      "El MSCEIT es un autoinforme en el que la persona valora sus propias habilidades emocionales.|F|Es una prueba de rendimiento: se resuelven problemas emocionales y se puntúa por consenso o por expertos.",
      "El modelo de Goleman combina habilidades emocionales con rasgos de personalidad y competencias sociales.|V",
      "Extremera y Fernández-Berrocal han trabajado en la adaptación española del MSCEIT.|V"
    ],
    q: [
      "Un test pide identificar la emoción que expresa una serie de caras y puntúa las respuestas según expertos. ¿Qué modelo de IE evalúa?|El de habilidad|El mixto de Bar-On|El de rasgo|Resolver problemas emocionales puntuados por expertos o consenso es una prueba de rendimiento, propia del modelo de habilidad.",
      "¿Qué orden de las ramas de Mayer y Salovey va de la más básica a la más compleja?|Percepción, facilitación, comprensión, manejo|Facilitación, percepción, manejo, comprensión|Percepción, comprensión, facilitación, manejo|Primero se identifican las emociones, luego se usan para pensar, se comprenden y, por último, se regulan.",
      "Una psicóloga quiere medir la IE rasgo de Petrides. ¿Qué instrumento usará?|TEIQue|EQ-i|MSCEIT|El TEIQue es el autoinforme de la IE rasgo; el EQ-i corresponde a Bar-On y el MSCEIT, al modelo de habilidad.",
      "¿Por qué no miden lo mismo «¿se le da bien entender a los demás?» y una tarea de reconocer emociones en caras?|Uno es autoinforme y otro rendimiento|Uno mide rasgos y el otro estados|Ambos son autoinformes de habilidad|Preguntar por la propia habilidad no equivale a demostrarla; por eso ambos tipos de medida correlacionan poco."
    ],
    inc: [
      "Sobre los modelos de inteligencia emocional|El EQ-i es una prueba de rendimiento|El TEIQue es un autoinforme|El MSCEIT pertenece al modelo de habilidad|El EQ-i de Bar-On es un autoinforme del modelo mixto."
    ],
    seq: [
      "Ramas del modelo de Mayer y Salovey, de la más básica a la más compleja|Percepción>Facilitación>Comprensión>Manejo"
    ],
    cls: [
      "Tipo de medida de cada instrumento|Prueba de rendimiento: MSCEIT|Autoinforme: EQ-i; TEIQue; TMMS-24"
    ] },
  { t: "Críticas y validez incremental",
    tip: "La IE se critica por solaparse con la personalidad (autoinformes) y con la capacidad cognitiva general (habilidad), por los problemas de la puntuación por consenso y por la distancia entre divulgación y datos. Joseph y Newman (2010) hallaron escasa validez incremental de la IE de habilidad, salvo en trabajos con alta carga emocional; la mixta añade más, pero porque incluye constructos ya conocidos.",
    v: [
      "Validez incremental=Capacidad de un constructo para predecir por encima de otros ya conocidos",
      "Joseph y Newman=Metaanálisis de 2010 sobre IE y rendimiento laboral",
      "Solapamiento=Coincidencia de la IE con constructos que ya miden otras pruebas",
      "Neuroticismo=Rasgo con el que el autoinforme de IE correlaciona en sentido inverso",
      "Capacidad cognitiva general=Constructo con el que correlacionan las medidas de IE de habilidad",
      "Alta carga emocional=Tipo de trabajo donde la IE de habilidad aporta algo más de predicción",
      "Puntuación por consenso=Criterio de acierto basado en lo que responde una muestra amplia",
      "Educación emocional=Programas que pueden mejorar el clima y el bienestar, evaluados con rigor"
    ],
    g: [
      "Las medidas de autoinforme de IE correlacionan en sentido inverso con ___.|el neuroticismo|la extraversión|la responsabilidad",
      "Según Joseph y Newman, la IE de habilidad aporta más en trabajos con alta carga ___.|emocional|cognitiva|física",
      "La IE ___ muestra más validez incremental, pero en parte porque incluye elementos de personalidad.|mixta|de habilidad|percibida",
      "En situaciones emocionales complejas puede no existir una única respuesta ___.|correcta|emocional|breve",
      "La capacidad cognitiva general sigue siendo uno de los mejores ___ del rendimiento laboral y académico.|predictores|efectos|criterios"
    ],
    tf: [
      "Fuera de los trabajos con alta carga emocional, la IE de habilidad aporta poca predicción sobre la capacidad cognitiva y los cinco grandes.|V",
      "Que la IE predice el éxito más que el CI es una conclusión consolidada de los metaanálisis.|F|Procede de la divulgación; la capacidad cognitiva general sigue siendo uno de los mejores predictores del rendimiento.",
      "La mayor validez incremental de la IE mixta demuestra que mide un constructo más original que la de habilidad.|F|Se debe en buena parte a que incluye personalidad, autoeficacia y otros constructos ya conocidos.",
      "Los programas de educación emocional pueden mejorar el clima y el bienestar, pero deben evaluarse con rigor.|V"
    ],
    q: [
      "Una empresa de atención al cliente pregunta si medir la IE de habilidad mejorará su selección de personal. ¿Qué respuesta es más ajustada?|Puede aportar algo en ese tipo de puesto|No aporta nada en ningún tipo de puesto|Predice más que la capacidad cognitiva|Joseph y Newman (2010): su validez incremental es escasa, salvo en trabajos con alta carga emocional, como la atención al público.",
      "¿Con qué correlacionan sobre todo las medidas de IE de habilidad?|Con la capacidad cognitiva general|Con el neuroticismo en sentido inverso|Con la extraversión y la responsabilidad|Neuroticismo inverso, extraversión y responsabilidad corresponden a las medidas de autoinforme.",
      "¿Qué problema de puntuación se atribuye al MSCEIT?|Lo correcto se define por consenso|Depende de la sinceridad del evaluado|No permite comparar con una muestra|En tareas complejas puede no haber una única respuesta correcta, aunque el consenso o los expertos fijen una.",
      "¿Cuál es la conclusión equilibrada sobre la IE de habilidad?|Es distinguible, con utilidad limitada pero real|Es redundante con la personalidad y no aporta|Es el mejor predictor del rendimiento laboral|Su validez incremental sigue en debate, pero es un constructo distinguible con utilidad en ciertos contextos."
    ],
    inc: [
      "Sobre las críticas a la IE|La IE de habilidad se solapa con la extraversión|El autoinforme de IE se solapa con la personalidad|La validez incremental de la IE sigue en debate|La IE de habilidad correlaciona con la capacidad cognitiva general; el autoinforme, con los cinco grandes."
    ],
    seq: [],
    cls: [
      "Con qué se solapa cada tipo de medida de IE|Autoinforme: neuroticismo en sentido inverso; extraversión; responsabilidad|Prueba de habilidad: capacidad cognitiva general"
    ] }
] },
{ n: 16, t: "Emociones y salud", cap: 5, pir: "alta", mods: [
  { t: "Estrés: Selye, Lazarus y el eje HHA",
    tip: "El estrés se ha entendido como respuesta (el síndrome general de adaptación de Selye, con alarma, resistencia y agotamiento), como estímulo (sucesos vitales de Holmes y Rahe, contrariedades diarias) y como proceso (modelo transaccional de Lazarus y Folkman). Fisiológicamente actúan el sistema simpático-adrenomedular, rápido, y el eje HHA, más lento: CRH, ACTH y cortisol, con retroalimentación negativa.",
    v: [
      "Síndrome general de adaptación=Respuesta inespecífica al estrés en alarma, resistencia y agotamiento",
      "Eustrés=Activación que estimula y ayuda a rendir",
      "Distrés=Activación que desborda y perjudica",
      "SRRS=Escala de Holmes y Rahe con 43 sucesos vitales puntuados",
      "Contrariedades diarias=Molestias cotidianas que predicen el malestar tanto o más que los grandes sucesos",
      "Evaluación primaria=Valorar si algo es relevante y si es amenaza, daño o desafío",
      "Evaluación secundaria=Valorar qué se puede hacer y con qué recursos se cuenta",
      "ACTH=Hormona de la hipófisis anterior que estimula la liberación de cortisol"
    ],
    g: [
      "En el eje HHA, el hipotálamo libera ___, que actúa sobre la hipófisis anterior.|CRH|ACTH|cortisol",
      "La médula suprarrenal libera ___, responsables de la respuesta de lucha o huida.|catecolaminas|glucocorticoides|corticotropinas",
      "En la SRRS, la muerte del cónyuge, el suceso más grave, vale ___ unidades de cambio vital.|100|50|43",
      "En la fase de ___ el organismo mantiene la activación mientras persiste el estresor.|resistencia|alarma|agotamiento",
      "El afrontamiento centrado en el ___ consiste en actuar sobre la situación.|problema|síntoma|resultado"
    ],
    tf: [
      "El cortisol lo libera la médula suprarrenal por orden directa del sistema simpático.|F|El cortisol procede de la corteza suprarrenal; la médula libera adrenalina y noradrenalina.",
      "Para Holmes y Rahe, también los cambios positivos, como casarse, exigen adaptación.|V",
      "La ACTH se libera en el hipotálamo y actúa directamente sobre la corteza suprarrenal.|F|La ACTH procede de la hipófisis anterior; el hipotálamo libera CRH.",
      "El propio cortisol frena la liberación de CRH y ACTH por retroalimentación negativa.|V"
    ],
    q: [
      "Ante el mismo examen, Ana se agobia y Luis apenas se inmuta. ¿Qué modelo explica mejor esta diferencia?|El transaccional de Lazarus|El síndrome de Selye|La escala de Holmes y Rahe|El estrés depende de cómo cada persona evalúa las demandas frente a sus recursos, no del estímulo en sí.",
      "Un opositor se pregunta si tiene tiempo y estrategias suficientes para afrontar el temario. ¿Qué proceso realiza según Lazarus?|Evaluación secundaria|Evaluación primaria|Afrontamiento emocional|La secundaria valora qué se puede hacer y con qué recursos; la primaria, si la situación es amenaza, daño o desafío.",
      "¿Qué orden del eje HHA es correcto?|CRH, ACTH, cortisol|ACTH, CRH, cortisol|CRH, cortisol, ACTH|El hipotálamo libera CRH, la hipófisis anterior ACTH y la corteza suprarrenal cortisol.",
      "¿Qué diferencia el sistema simpático-adrenomedular del eje HHA?|Actúa en segundos y no en minutos|Libera cortisol en lugar de adrenalina|Depende de la hipófisis anterior|El simpático-adrenomedular libera catecolaminas en segundos; el eje HHA actúa en minutos y sus efectos duran más."
    ],
    inc: [
      "Sobre el estrés|En la alarma, la resistencia sube desde el primer instante|Selye halló una respuesta común ante agentes muy distintos|Kanner et al. estudiaron las contrariedades diarias|En la alarma hay un choque inicial en el que la resistencia baja y, enseguida, se movilizan recursos."
    ],
    seq: [
      "Síndrome general de adaptación de Selye|Choque inicial con caída de la resistencia>Movilización de recursos>Resistencia mantenida mientras dura el estresor>Agotamiento de recursos, daño y enfermedad"
    ],
    cls: [
      "Sistema fisiológico del estrés|Simpático-adrenomedular: adrenalina; noradrenalina; actúa en segundos|Eje HHA: CRH; ACTH; cortisol"
    ] },
  { t: "Carga alostática y psiconeuroinmunología",
    tip: "La alostasis es mantener la estabilidad cambiando; la carga alostática (McEwen y Stellar, 1993) es el coste acumulado de activar los sistemas de estrés de forma repetida o prolongada, y hace de puente entre el estrés crónico y la enfermedad. La psiconeuroinmunología muestra que la inmunosupresión puede condicionarse (Ader y Cohen) y que el estrés crónico suprime la inmunidad, mientras que el agudo y breve activa parte de la natural.",
    v: [
      "Alostasis=Mantener la estabilidad cambiando los parámetros para anticiparse a las demandas",
      "Carga alostática=Coste acumulado de activar repetida o prolongadamente los sistemas de estrés",
      "Falta de habituación=La respuesta no disminuye ante un estresor que se repite",
      "Respuesta insuficiente=Un sistema que no responde lo bastante deja sin control a otros",
      "Psiconeuroinmunología=Estudio de lo psicológico en relación con los sistemas nervioso, endocrino e inmunitario",
      "Ader y Cohen (1975)=Mostraron en ratas que la inmunosupresión puede condicionarse",
      "Kiecolt-Glaser et al. (1995)=Cicatrización más lenta en cuidadoras sometidas a estrés crónico",
      "Segerstrom y Miller (2004)=Metaanálisis sobre los efectos inmunitarios del estrés agudo y crónico"
    ],
    g: [
      "El concepto de carga alostática lo propusieron McEwen y ___ en 1993.|Stellar|Eyer|Sterling",
      "En el estudio de Cohen, Tyrrell y Smith (1991), los voluntarios se expusieron a virus del ___.|resfriado|herpes|sarampión",
      "Según Segerstrom y Miller, el estrés agudo y breve ___ parte de la inmunidad natural.|activa|suprime|anula",
      "Poco cortisol puede permitir una ___ excesiva, un ejemplo de respuesta insuficiente.|inflamación|activación|habituación",
      "Además de la vía fisiológica, el estrés empeora el sueño, la alimentación y el ___.|ejercicio|olfato|equilibrio"
    ],
    tf: [
      "Ader y Cohen demostraron que un sabor asociado a un inmunosupresor podía reducir por sí solo la respuesta inmunitaria.|V",
      "Según Segerstrom y Miller (2004), tanto el estrés agudo como el crónico suprimen de forma general la inmunidad.|F|El agudo y breve activa parte de la inmunidad natural; es el crónico el que la suprime de forma general.",
      "La respuesta de estrés es, en principio, un ejemplo adaptativo de alostasis.|V",
      "La carga alostática se debe a respuestas excesivas, no a respuestas insuficientes del sistema de estrés.|F|La respuesta insuficiente es una de sus cuatro situaciones: deja sin control a otros sistemas, como la inflamación."
    ],
    q: [
      "Un trabajador sigue con el corazón acelerado y en tensión horas después de que termine una discusión. ¿Qué situación de carga alostática ilustra?|Respuesta que no se apaga|Falta de habituación|Respuesta insuficiente|El sistema sigue activo cuando el estresor ya ha pasado; la falta de habituación exige un estresor que se repite.",
      "Una cuidadora de un familiar con demencia tarda más que otras personas en cicatrizar una herida. ¿Con qué estudio encaja?|Kiecolt-Glaser et al. (1995)|Ader y Cohen (1975)|Cohen, Tyrrell y Smith (1991)|Kiecolt-Glaser et al. hallaron que las heridas cicatrizaban más despacio en cuidadoras sometidas a estrés crónico.",
      "¿Por qué tiene sentido evolutivo que el estrés breve active parte de la inmunidad?|Prepara ante una posible herida|Evita que se forme la carga alostática|Reduce la producción de cortisol|El estrés breve prepara al organismo para una posible herida o infección; lo perjudicial es la activación sostenida.",
      "¿Qué demostró el estudio de Ader y Cohen (1975)?|Que el cerebro influye en la inmunidad|Que el estrés crónico frena la cicatrización|Que el estrés previo favorece el resfriado|Al condicionar la inmunosupresión con un sabor, mostraron que el cerebro puede modificar la respuesta inmunitaria."
    ],
    inc: [
      "Sobre la carga alostática|Es un concepto equivalente a la alostasis|Se refleja en la presión arterial o la inflamación|Puede deberse a una falta de habituación|La alostasis es mantener la estabilidad cambiando; la carga alostática es el coste acumulado de esa activación."
    ],
    seq: [],
    cls: [
      "Efecto del estrés sobre la inmunidad|Agudo y breve: activa parte de la inmunidad natural|Crónico: suprime la inmunidad de forma general; cicatrización más lenta"
    ] },
  { t: "Patrón de conducta tipo A, hostilidad y tipo D",
    tip: "Friedman y Rosenman (1959) describieron el patrón tipo A: competitividad, urgencia temporal, implicación laboral excesiva y hostilidad. Su relación global con la cardiopatía no se replicó de forma consistente (MRFIT); el componente que mantiene apoyo es la hostilidad junto con la ira, con una asociación modesta y en parte explicada por los hábitos. El tipo D de Denollet combina afectividad negativa e inhibición social.",
    v: [
      "Patrón de conducta tipo A=Competitividad, urgencia temporal, implicación laboral excesiva y hostilidad",
      "Tipo B=Patrón contrario al tipo A, más relajado",
      "Friedman y Rosenman=Cardiólogos que describieron en 1959 el patrón tipo A",
      "Western Collaborative Group Study=Estudio prospectivo inicial que asoció el tipo A con la cardiopatía",
      "MRFIT=Estudio posterior que no replicó de forma consistente la relación del tipo A con la cardiopatía",
      "Hostilidad=Actitud cínica y desconfiada hacia los demás",
      "Tipo D=Combinación de afectividad negativa e inhibición social (Denollet)",
      "Inhibición social=Tendencia a no expresar las emociones negativas por miedo al rechazo"
    ],
    g: [
      "El componente del patrón tipo A que mantiene más apoyo como factor de riesgo es la ___.|hostilidad|competitividad|urgencia temporal",
      "En Chida y Steptoe (2009), el cociente de riesgos en personas sanas fue de ___.|1,19|1,24|1,42",
      "La «D» del tipo D procede de «distressed», es decir, con ___.|malestar|depresión|desconfianza",
      "En población sana, la asociación con la hostilidad pierde significación al controlar covariables ___.|conductuales|genéticas|demográficas",
      "El tipo D se ha estudiado sobre todo en pacientes ___.|cardíacos|oncológicos|psiquiátricos"
    ],
    tf: [
      "El patrón tipo A global se considera hoy un factor de riesgo cardiovascular establecido.|F|Estudios como el MRFIT no replicaron la relación de forma consistente; la hostilidad y la ira son las que mantienen apoyo.",
      "Parte del efecto de la hostilidad sobre la cardiopatía parece pasar por hábitos como el tabaco.|V",
      "El tipo D combina afectividad negativa con una expresión intensa de las emociones.|F|Combina afectividad negativa con inhibición social: tendencia a no expresar esas emociones por miedo al rechazo.",
      "Entre los mecanismos propuestos para la hostilidad está una mayor reactividad cardiovascular.|V"
    ],
    q: [
      "Un directivo es muy competitivo, impaciente y desconfía con cinismo de sus colegas. ¿Qué rasgo suyo se asocia, según la evidencia actual, a más riesgo coronario?|La hostilidad cínica|La urgencia temporal|La competitividad|La competitividad y la urgencia no parecen dañinas por sí mismas; la hostilidad mantiene una asociación modesta.",
      "Una paciente cardíaca se preocupa y se irrita con frecuencia, pero no lo expresa por miedo al rechazo. ¿Qué perfil describe?|Tipo D|Tipo A|Tipo B|Afectividad negativa combinada con inhibición social define el tipo D de Denollet.",
      "¿Cómo es la asociación de la ira y la hostilidad con la cardiopatía en Chida y Steptoe (2009)?|Modesta, en parte explicada por hábitos|Fuerte e independiente de los hábitos|Nula al controlar la edad y el sexo|Cocientes de 1,19 en sanos y 1,24 en pacientes; en sanos pierde significación al controlar covariables conductuales.",
      "¿Cuál es la explicación más aceptada del fracaso del tipo A global como factor de riesgo?|Mezcla componentes con efectos distintos|Su medida era una entrevista poco fiable|Solo afecta a personas con cardiopatía previa|El patrón agrupa competitividad, urgencia y hostilidad; solo esta última, junto con la ira, mantiene apoyo."
    ],
    inc: [
      "Sobre el tipo A y la hostilidad|La competitividad es el componente con más apoyo empírico|La hostilidad se asocia a riesgo también en pacientes coronarios|El Western Collaborative Group Study halló asociación con el tipo A|La competitividad no parece dañina por sí misma; el componente con apoyo es la hostilidad."
    ],
    seq: [],
    cls: [
      "Componentes de cada patrón|Tipo A: competitividad; urgencia temporal; hostilidad|Tipo D: afectividad negativa; inhibición social"
    ] },
  { t: "Emociones positivas y salud",
    tip: "Fredrickson propone que las emociones positivas amplían el repertorio momentáneo de pensamiento y acción y construyen recursos duraderos; la hipótesis de deshacer añade que aceleran la recuperación cardiovascular tras las negativas. Sus vínculos con la salud son asociaciones, sin causalidad clara. La ratio de positividad de 2,9013 (Fredrickson y Losada, 2005) fue retirada tras la crítica de Brown, Sokal y Friedman (2013).",
    v: [
      "Ampliación=Efecto de abrir la atención y el repertorio momentáneo de pensamiento y acción",
      "Construcción=Efecto de generar recursos personales que perduran tras la emoción",
      "Hipótesis de deshacer=Las positivas aceleran la recuperación de la activación causada por las negativas",
      "Ratio de positividad=Proporción de 2,9013 propuesta en 2005 y retirada después",
      "Brown, Sokal y Friedman=Demostraron en 2013 que el modelado matemático de la ratio era infundado",
      "Florecimiento=Estado asociado, dentro de ciertos límites, a más emociones positivas",
      "Autocorrección científica=Revisión por la propia ciencia de errores ya publicados",
      "Recursos construidos=Físicos, intelectuales, sociales y psicológicos, como resiliencia y relaciones"
    ],
    g: [
      "Mientras las emociones negativas ___ la atención, las positivas la abren.|estrechan|amplían|desplazan",
      "La ratio de positividad derivaba de ecuaciones de la dinámica de ___.|fluidos|sistemas|poblaciones",
      "Los autores ___ formalmente el componente matemático de la ratio de positividad.|retiraron|confirmaron|ampliaron",
      "La relación entre emociones positivas y salud debe describirse como ___, no como causa demostrada.|asociación|mecanismo|efecto",
      "Intentar ___ las emociones negativas puede ser contraproducente.|suprimir|reevaluar|expresar"
    ],
    tf: [
      "Las emociones positivas construyen recursos que siguen disponibles cuando la emoción ha pasado.|V",
      "La ratio de 2,9013 se mantiene como umbral del florecimiento, aunque se ha simplificado su cálculo.|F|Fue retirada: Brown, Sokal y Friedman (2013) mostraron que su modelado matemático era infundado.",
      "Que las emociones positivas se asocien a mejor salud demuestra que el optimismo ayuda a curar enfermedades.|F|Son asociaciones con dirección causal poco clara: estar sano también hace sentirse mejor.",
      "Fredrickson (2013) mantuvo que, dentro de ciertos límites, más emociones positivas se asocian al florecimiento.|V"
    ],
    q: [
      "Un taller promete que bastan «tres emociones positivas por cada negativa» para florecer. ¿Qué es lo más ajustado?|La cifra procede de un modelo retirado|Es un umbral confirmado por metaanálisis|Se aplica a pacientes con depresión|La ratio de 2,9013 se retiró por su modelado matemático infundado; solo se mantiene una idea más modesta.",
      "Según la hipótesis de deshacer, las emociones positivas…|aceleran la recuperación cardiovascular|estrechan la atención hacia la acción|eliminan las emociones negativas|Ayudarían a recuperarse antes de la activación cardiovascular producida por las emociones negativas.",
      "¿Qué ejemplo ilustra mejor el efecto de construcción de Fredrickson?|Amistades forjadas jugando en grupo|Mayor atención a un único estímulo|Huida rápida ante un peligro|Construir es generar recursos duraderos, como relaciones; centrar la atención y huir son propios de las negativas.",
      "¿Por qué conviene hablar de asociaciones entre emociones positivas y salud?|La causalidad puede ir en ambos sentidos|Los estudios son todos experimentales|Las emociones positivas no influyen nada|Los datos son correlacionales y prospectivos, y estar sano también hace sentirse mejor."
    ],
    inc: [
      "Sobre las emociones positivas|Las negativas son prescindibles para la salud|Favorecen la exploración, el juego y la creatividad|Se asocian a mejor recuperación del estrés|Las negativas también son necesarias; intentar suprimirlas puede ser contraproducente."
    ],
    seq: [
      "Historia de la ratio de positividad|Fredrickson y Losada proponen 2,9013>La cifra se difunde en la divulgación>Brown, Sokal y Friedman critican el modelado>Retirada formal del componente matemático"
    ],
    cls: [] }
] }
);

SP.register(window.COURSE);
})({});
