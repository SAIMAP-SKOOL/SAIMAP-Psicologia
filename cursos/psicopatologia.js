(function(window){
// SAIMAP Psicología · Psicopatología
// Contenido alineado con el temario SAIMAP «Psicopatología» (v1.0, noviembre de 2026).
window.COURSE = {
  id: "psicopatologia",
  title: "Psicopatología",
  short: "Psicopatología",
  area: "Psicopatología, clínica y salud",
  rutas: { grado: { curso: 2 }, pir: { bloque: "Psicopatología" } },
  temario: "Psicopatologia_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Qué es la psicopatología: concepto, historia y enfoques explicativos", from: 1, to: 2 },
    { n: 2, t: "Clasificar y diagnosticar: del DSM-5-TR y la CIE-11 a las dimensiones", from: 3, to: 4 },
    { n: 3, t: "Psicopatología descriptiva: cuando fallan las funciones psíquicas", from: 5, to: 6 },
    { n: 4, t: "Miedo, obsesiones y estrés: la ansiedad y sus trastornos afines", from: 7, to: 9 },
    { n: 5, t: "Estado de ánimo y psicosis", from: 10, to: 11 },
    { n: 6, t: "Personalidad, sueño y sexualidad", from: 12, to: 13 },
    { n: 7, t: "Disociación, cuerpo, adicciones e impulsos", from: 14, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Psicopatología · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "Lo normal y lo patológico: concepto, historia y métodos", cap: 1, pir: "media", mods: [
  { t: "Qué entendemos por trastorno mental: criterios de anormalidad",
    tip: "Ningún criterio de anormalidad basta por sí solo: el estadístico califica de anormal lo infrecuente aunque sea deseable, el social cae en el relativismo, el subjetivo falla sin conciencia de enfermedad y el biológico tiende al reduccionismo. Wakefield (1992) propuso la disfunción perjudicial, con un componente científico y otro valorativo. La definición del DSM-5-TR recoge ambas piezas.",
    v: [
      "Psicopatología=Ciencia básica que estudia naturaleza, causas, curso y manifestaciones de la conducta anormal",
      "Criterio estadístico=Considera anormal lo que se aleja de la media de una población de referencia",
      "Validación consensual=Idea de Sullivan: la comunidad acuerda qué conducta resulta aceptable",
      "Criterio subjetivo=La propia persona juzga su malestar, y falla si no hay conciencia de enfermedad",
      "Criterio biológico=Disfunción de un sistema del organismo, según el esquema del modelo médico",
      "Disfunción perjudicial=Fallo de una función natural que causa daño según los valores sociales",
      "Componente valorativo=Pieza de la propuesta de Wakefield que exige un daño según la sociedad",
      "Trastorno mental (DSM-5-TR)=Síndrome clínicamente significativo que refleja una disfunción y suele causar malestar"
    ],
    g: [
      "En una distribución normal, en torno al ___ de las personas queda a menos de dos desviaciones típicas de la media.|95 %|68 %|99,7 %",
      "La «homosexualidad egodistónica» se mantuvo en el manual hasta el ___.|DSM-III-R|DSM-II|DSM-IV",
      "El criterio ___ falla cuando falta conciencia de enfermedad, algo frecuente en la manía o la anorexia.|subjetivo|social|biológico",
      "El principal riesgo del criterio biológico es el ___.|reduccionismo|relativismo|subjetivismo",
      "En la propuesta de Wakefield, que un mecanismo falle en su función natural es el componente ___.|científico|valorativo|social"
    ],
    tf: [
      "Una capacidad intelectual muy alta sería anormal según el criterio estadístico.|V",
      "El criterio estadístico y el normativo coinciden, porque lo frecuente es lo que está bien visto.|F|El estadístico habla de frecuencia y el normativo, de normas: algo puede ser frecuente y estar mal visto.",
      "La definición del DSM-5-TR excluye las respuestas esperables o culturalmente aceptadas, como el duelo normal.|V",
      "Según Wakefield, basta con que una conducta cause daño según los valores sociales para hablar de trastorno.|F|Hace falta además una disfunción: un mecanismo que falla en la función que tiene por naturaleza."
    ],
    q: [
      "Un hombre se asusta cuando le ladra un perro suelto. Otra persona siente un miedo que se dispara en cada autobús y ha dejado su empleo. Según Wakefield, ¿qué los distingue?|Solo en el segundo hay disfunción y daño|Solo en el primero se activa una alarma|Ambos tienen un trastorno de igual grado|En el primero la alarma hace su trabajo. En el segundo falla una función natural y hay un daño según los valores sociales.",
      "¿Qué limitación es propia del criterio social o consensual?|El relativismo cultural e histórico|La falta de marcadores biológicos|La ausencia de conciencia de enfermedad|Lo aceptable cambia entre culturas y épocas: la homosexualidad figuró como trastorno en el DSM hasta 1973-1974.",
      "¿Cuál de estos indicadores se añade en la práctica a los cuatro criterios clásicos?|La conducta desproporcionada a la situación|La validación consensual del grupo|La distancia a la media del grupo|Se añaden malestar, deterioro, peligrosidad y conducta inesperada o desproporcionada. Las otras opciones son los criterios social y estadístico.",
      "¿Qué dos piezas de Wakefield recoge la definición del DSM-5-TR?|Disfunción y malestar o deterioro|Rareza estadística y desviación social|Lesión cerebral y conciencia de enfermedad|El síndrome refleja una disfunción y suele asociarse a malestar o deterioro. La desviación social sin disfunción queda fuera."
    ],
    inc: [
      "Sobre los criterios de anormalidad|Quien consulta por malestar siempre tiene un trastorno|El criterio estadístico no indica dónde fijar el corte|El criterio biológico sigue el esquema del modelo médico|No todo el que consulta tiene un trastorno, y el criterio subjetivo falla cuando falta conciencia de enfermedad."
    ],
    seq: [],
    cls: [
      "Criterio de anormalidad|Estadístico: alejarse de la media; ignora si lo infrecuente es deseable|Social: validación consensual; relativismo cultural e histórico|Subjetivo: juicio del propio malestar; falla sin conciencia de enfermedad"
    ] },
  { t: "De la trepanación al Renacimiento",
    tip: "La trepanación se practica desde el Neolítico y muchas personas sobrevivieron, pero que sirviera para «liberar espíritus» es solo una hipótesis. Hipócrates defendió causas naturales y la teoría de los cuatro humores, que Galeno sistematizó. La Edad Media no fue solo demonología: la medicina árabe y hospitales como el de Valencia (1409) convivieron con ella. En el Renacimiento, Vives y Weyer defendieron un trato humano.",
    v: [
      "Trepanación=Apertura de orificios en el cráneo, practicada ya en el Neolítico",
      "Teoría humoral=Salud como equilibrio de sangre, flema, bilis amarilla y bilis negra",
      "Galeno=Médico del s. II d. C. que sistematizó la doctrina humoral y los temperamentos",
      "Avicena=Autor de la medicina árabe que conservó y amplió la tradición griega",
      "Gilabert Jofré=Fraile que impulsó en Valencia el Hospital de los Inocentes en 1409",
      "Malleus maleficarum=Manual de Kramer y Sprenger (1486/1487) para perseguir la brujería",
      "Johann Weyer=Autor de De praestigiis daemonum (1563), que vio enfermas a muchas acusadas",
      "Bethlem=Hospital londinense apodado «Bedlam», símbolo de los asilos de reclusión"
    ],
    g: [
      "En la teoría humoral, el exceso de bilis negra dio nombre a la ___.|melancolía|manía|histeria",
      "Los textos hipocráticos atribuían la histeria a un «útero ___».|errante|herido|vacío",
      "La llamada «enfermedad sagrada», que los textos hipocráticos trataron como natural, era la ___.|epilepsia|melancolía|manía",
      "En los siglos XVII y XVIII se extendieron los asilos de ___, pensados más para apartar que para curar.|reclusión|tratamiento|beneficencia",
      "El humanista valenciano ___ defendió un trato humano y digno para las personas con trastornos mentales.|Juan Luis Vives|Johann Weyer|Avicena"
    ],
    tf: [
      "Los bordes cicatrizados de muchos cráneos trepanados indican que la persona sobrevivió.|V",
      "Está demostrado que la trepanación prehistórica servía para liberar espíritus.|F|Es una hipótesis, no un hecho: también pudo tener fines terapéuticos, por ejemplo tras un traumatismo en la cabeza.",
      "En el mundo islámico medieval hubo hospitales que atendían a enfermos mentales.|V",
      "El Malleus maleficarum es un texto de comienzos de la Edad Media.|F|Es de finales del siglo XV (1486/1487): la demonología más dura llega al final del periodo."
    ],
    q: [
      "Un divulgador afirma que en la Edad Media la locura se explicaba solo como posesión y se trataba con exorcismos. ¿Qué dato lo desmiente mejor?|El hospital valenciano de 1409|El Malleus maleficarum de 1486|La teoría humoral de Hipócrates|Las explicaciones naturales y las instituciones de cuidado, como el Hospital de los Inocentes, convivieron con la demonología medieval.",
      "¿Qué defendió Hipócrates sobre las enfermedades?|Que tienen causas naturales|Que dependen de los temperamentos|Que se deben a fuerzas sobrenaturales|Hipócrates propuso causas naturales y los cuatro humores. Relacionar la doctrina humoral con los temperamentos fue obra de Galeno.",
      "¿Qué sostuvo Johann Weyer en De praestigiis daemonum (1563)?|Que muchas acusadas de brujería eran enfermas|Que la locura procedía de la bilis negra|Que había que recluir a los enfermos en asilos|Weyer defendió que muchas de las mujeres acusadas de brujería padecían en realidad una enfermedad.",
      "En una lámina de Hogarth (1735), un joven internado aparece entre otros internos y dos visitantes elegantes. ¿Qué rasgo de los asilos refleja?|Los internos como espectáculo|El tratamiento moral de Pinel|La medicina árabe medieval|En Bethlem («Bedlam») los internos podían convertirse en espectáculo para los visitantes."
    ],
    inc: [
      "Sobre la Antigüedad y la Edad Media|Avicena fundó el hospital valenciano|Galeno sistematizó la doctrina humoral|Hipócrates propuso causas naturales|El Hospital de los Inocentes de Valencia lo impulsó fray Gilabert Jofré en 1409. Avicena conservó y amplió la medicina griega."
    ],
    seq: [
      "Del mundo antiguo a los asilos|Hipócrates y los cuatro humores>Galeno sistematiza la doctrina humoral>Hospital de los Inocentes de Valencia (1409)>Malleus maleficarum (1486/1487)>De praestigiis daemonum de Weyer (1563)>Asilos de reclusión (s. XVII-XVIII)"
    ],
    cls: [] },
  { t: "El nacimiento de la psicopatología científica",
    tip: "Pinel impulsó el tratamiento moral en Bicêtre y la Salpêtrière, con un papel clave de Pussin, y en el siglo XIX Griesinger situó la enfermedad mental en el cerebro. Kraepelin clasificó por curso y pronóstico y separó en 1899 la dementia praecox de la locura maníaco-depresiva. Bleuler acuñó «esquizofrenia» (1911) y Jaspers distinguió comprender de explicar. El DSM-III (1980) trajo criterios operativos y el DSM-5 (2013) eliminó los ejes.",
    v: [
      "Tratamiento moral=Trato humano, orden y actividad en lugar de cadenas y castigos",
      "Jean-Baptiste Pussin=Supervisor con un papel clave en la reforma atribuida a Pinel",
      "William Tuke=Fundó el York Retreat en 1796 con principios parecidos a los de Pinel",
      "Griesinger=Autor de la frase «las enfermedades mentales son enfermedades del cerebro»",
      "Parálisis general progresiva=Cuadro con síntomas psiquiátricos y demencia, consecuencia tardía de la sífilis",
      "Cuatro A de Bleuler=Asociaciones laxas, afecto alterado, ambivalencia y autismo",
      "Comprender y explicar=Captar relaciones de sentido frente a establecer relaciones causales",
      "Desinstitucionalización=Proceso del siglo XX que en España se apoyó en la Ley General de Sanidad de 1986"
    ],
    g: [
      "Pinel dirigió el hospital de Bicêtre desde ___.|1793|1796|1813",
      "Kraepelin clasificó los trastornos según su curso y su ___.|pronóstico|causa|síntoma",
      "En 1913, Noguchi y Moore hallaron el ___ en el cerebro de pacientes con parálisis general progresiva.|Treponema|bacilo de Koch|virus del herpes",
      "El DSM-I (1952) y el DSM-II (1968) tenían una fuerte influencia ___.|psicodinámica|conductista|biológica",
      "La OMS incluyó por primera vez un capítulo de trastornos mentales en la ___ (1948).|CIE-6|CIE-8|CIE-9"
    ],
    tf: [
      "La separación entre dementia praecox y locura maníaco-depresiva se debe a Bleuler.|F|Es de Kraepelin (6.ª edición, 1899). Bleuler acuñó después el término «esquizofrenia» (1911).",
      "Para Bleuler, los delirios y las alucinaciones eran síntomas accesorios de la esquizofrenia.|V",
      "El DSM-5 mantuvo el sistema multiaxial de cinco ejes introducido por el DSM-III.|F|El DSM-5 (2013) eliminó los ejes que había introducido el DSM-III (1980).",
      "La escena de Pinel liberando de las cadenas a los internos es en parte leyenda.|V"
    ],
    q: [
      "Un psiquiatra no logra captar ninguna relación de sentido entre la convicción de su paciente y su biografía, y solo puede buscarle causas. ¿Qué distinción de Jaspers aplica?|Comprender frente a explicar|Fundamental frente a accesorio|Curso frente a pronóstico|Comprender es captar relaciones de sentido, y explicar, establecer causas. De ahí el delirio primario, incomprensible.",
      "¿Qué hallazgo reforzó el modelo médico en el siglo XIX?|La causa sifilítica de la parálisis general|La eficacia de la clorpromazina en 1952|El tratamiento moral en el York Retreat|La parálisis general progresiva era una consecuencia tardía de la sífilis. La clorpromazina ya es del siglo XX.",
      "¿Qué autor describió los síntomas de primer rango?|Kurt Schneider|Eugen Bleuler|Karl Jaspers|Los describió Schneider, después de Jaspers. Bleuler propuso las cuatro A y Jaspers fundó el método fenomenológico.",
      "¿Qué aportó el DSM-III (1980)?|Criterios operativos y enfoque ateórico|Descripciones en prosa de corte psicodinámico|La eliminación de los ejes diagnósticos|Introdujo criterios explícitos, un enfoque descriptivo y ateórico y cinco ejes. La prosa psicodinámica es del DSM-I y el DSM-II."
    ],
    inc: [
      "Sobre Kraepelin, Bleuler y Jaspers|Bleuler clasificó los trastornos por su curso y pronóstico|Jaspers fundó el método fenomenológico (1913)|Bleuler distinguió síntomas fundamentales y accesorios|Clasificar por curso y pronóstico fue el criterio de Kraepelin. Bleuler acuñó «esquizofrenia» y propuso las cuatro A."
    ],
    seq: [
      "Hitos de la psicopatología científica|Pinel en Bicêtre (1793)>Kraepelin separa la dementia praecox (1899)>Bleuler acuña «esquizofrenia» (1911)>Psicopatología general de Jaspers (1913)>Clorpromazina (1952)>DSM-III (1980)"
    ],
    cls: [] },
  { t: "Cómo se investiga en psicopatología",
    tip: "La prevalencia es la proporción de personas con un trastorno (puntual, anual o vital), y la incidencia, el número de casos nuevos en un periodo. Según McGrath et al. (2023), la prevalencia vital ronda el 29 % y el pico de inicio está hacia los 15 años. Los estudios de familias no separan genes y ambiente compartido, mientras que los de gemelos y adopción ayudan a hacerlo. El estudio de Rosenhan (1973) es hoy polémico.",
    v: [
      "Prevalencia vital=Proporción que ha tenido el trastorno en algún momento de la vida",
      "Incidencia=Número de casos nuevos de un trastorno en un periodo",
      "Prevalencia puntual=Proporción de personas con el trastorno en un momento dado",
      "Estudio de adopción=Separa la herencia biológica de la influencia de la crianza",
      "GWAS=Búsqueda de variantes comunes asociadas a un trastorno en todo el genoma",
      "Puntuación poligénica=Índice de riesgo calculado a partir de muchas variantes comunes",
      "Diseño de casos y controles=Compara a quienes tienen el trastorno con quienes no, con riesgo de sesgos",
      "Estudio análogo=Examina el proceso en población subclínica o inducido en laboratorio"
    ],
    g: [
      "En las World Mental Health Surveys, la prevalencia vital de cualquier trastorno en mujeres fue del ___.|29,8 %|19,5 %|53,1 %",
      "En ESEMeD-España, la fobia específica fue el ___ trastorno en prevalencia vital.|segundo|primer|tercer",
      "Según la carga mundial de enfermedad (GBD 2021), la depresión es la ___ causa de años vividos con discapacidad.|segunda|primera|sexta",
      "Los estudios de ___ no permiten separar el efecto de los genes del ambiente compartido.|familias|adopción|gemelos",
      "El diseño ___ es caro y lento, como la cohorte de Dunedin.|longitudinal|transversal|análogo"
    ],
    tf: [
      "Si en un instituto hay 30 estudiantes con depresión en marzo y 5 empezaron ese mes, la incidencia mensual es 30.|F|30 es la prevalencia. La incidencia mensual son los 5 casos nuevos de ese mes.",
      "Según McGrath et al. (2023), el riesgo acumulado de algún trastorno a los 75 años ronda la mitad de la población.|V",
      "En ESEMeD-España, el abuso de alcohol resultó más frecuente en mujeres.|F|Es más frecuente en hombres. La ansiedad y la depresión son más del doble de frecuentes en mujeres.",
      "Los gemelos dicigóticos comparten en promedio la mitad de sus genes.|V"
    ],
    q: [
      "Un equipo quiere saber qué factores de la infancia preceden a la aparición de la depresión adulta. ¿Qué diseño es el adecuado?|Un estudio de cohorte|Un estudio transversal|Un estudio análogo|El diseño longitudinal o de cohorte muestra qué factores preceden al trastorno. El transversal no establece qué fue antes.",
      "¿Cuál es la mediana de edad de inicio de los trastornos según McGrath et al. (2023)?|19-20 años|15 años|25-26 años|El pico de inicio está en torno a los 15 años, pero la mediana se sitúa en los 19-20 años.",
      "¿Qué limitación principal tiene el diseño de casos y controles?|Sesgos de selección y de recuerdo|No reproduce la experiencia humana|Dudas sobre su extrapolación clínica|Quienes tienen el trastorno pueden recordar su pasado de otra forma. Las otras limitaciones son del modelo animal y del diseño análogo.",
      "¿Cómo se valora hoy el estudio de Rosenhan (1973)?|Como un estudio influyente pero polémico|Como la prueba de que el diagnóstico no sirve|Como un ensayo controlado bien replicado|Cahalan (2019) planteó serias dudas sobre sus datos. Sirve para reflexionar sobre la fiabilidad, no como prueba de que el diagnóstico no sirve."
    ],
    inc: [
      "Sobre la epidemiología de referencia|La ansiedad es la segunda causa mundial de años vividos con discapacidad|En ESEMeD-España la prevalencia anual fue del 8,4 %|La depresión es la segunda causa mundial de años vividos con discapacidad|La ansiedad es la sexta, con unos 42,5 millones. La depresión, con unos 56,3 millones, es la segunda (GBD 2021)."
    ],
    seq: [],
    cls: [
      "Diseño de investigación|Transversal: cuántos lo tienen ahora; no establece qué fue antes|Longitudinal: qué factores preceden; cohorte de Dunedin; caro y lento|Casos y controles: en qué se diferencian; sesgo de recuerdo"
    ] }
] },
{ n: 2, t: "Modelos explicativos de la conducta anormal", cap: 1, pir: "media", mods: [
  { t: "El modelo biomédico",
    tip: "El modelo biomédico entiende el trastorno como una enfermedad con base orgánica, diagnostica de forma categorial y espera un tratamiento biológico. Sus éxitos incluyen la sífilis como causa de la parálisis general y los psicofármacos. La heredabilidad media de los rasgos ronda el 49 % (Polderman et al., 2015) y describe diferencias en una población, no a un individuo. Sus límites son el reduccionismo, la falta de marcadores y las explicaciones simplificadas.",
    v: [
      "Modelo biomédico=Trastorno como enfermedad con base orgánica y tratamiento biológico",
      "Diagnóstico categorial=Decide si se tiene o no la enfermedad a partir de signos y síntomas",
      "Heredabilidad=Proporción de la variabilidad entre personas de una población asociada a los genes",
      "Arquitectura poligénica=Intervención de muchas variantes genéticas, cada una con un efecto pequeño",
      "Polderman et al. (2015)=Revisión de gemelos que estimó una heredabilidad media de ≈49 %",
      "Trubetskoy et al. (2022)=Identificaron 287 regiones del genoma asociadas a la esquizofrenia",
      "Reduccionismo=Explicar la experiencia solo por la biología, sin historia ni contexto",
      "Falta de marcadores=Ausencia de una prueba biológica que diagnostique casi ningún trastorno mental"
    ],
    g: [
      "La revisión de Polderman et al. (2015) incluyó 17.804 rasgos y más de 14,5 millones de pares de ___.|gemelos|hermanos|familias",
      "En la esquizofrenia se han identificado ___ regiones del genoma asociadas.|287|49|108",
      "La clorpromazina, introducida en ___, cambió el pronóstico de muchas personas.|1952|1913|1977",
      "Según el modelo biomédico, el diagnóstico debe predecir el ___ y orientar el tratamiento.|curso|origen|contexto",
      "Que todo lo psicológico ocurra en un cerebro no implica que la mejor explicación sea siempre la ___.|biológica|social|psicológica"
    ],
    tf: [
      "La parálisis general progresiva resultó ser una infección cerebral por sífilis, un éxito del modelo biomédico.|V",
      "La heredabilidad indica la probabilidad de que un individuo concreto desarrolle el trastorno.|F|Es la proporción de la variabilidad entre personas de una población asociada a los genes, no un riesgo individual.",
      "La genética ha mostrado que la esquizofrenia depende de un gen principal de gran efecto.|F|Su arquitectura es poligénica: muchas variantes de efecto pequeño, con 287 regiones asociadas (Trubetskoy et al., 2022).",
      "Para casi ningún trastorno mental existe una prueba biológica que lo diagnostique.|V"
    ],
    q: [
      "Una paciente dice: «Mi madre tuvo depresión y es muy heredable, así que no puedo hacer nada». ¿Qué respuesta es correcta?|Heredable no significa inevitable ni inmodificable|Tiene razón si la heredabilidad supera el 50 %|Solo los trastornos poco heredables son tratables|La heredabilidad describe diferencias en una población, no el destino de una persona, y los factores no genéticos pesan de forma parecida.",
      "¿Qué supuesto pertenece al modelo biomédico?|El diagnóstico es categorial|La conducta anormal se aprende|Las creencias median la emoción|El modelo biomédico decide si se tiene o no la enfermedad. Las otras opciones son supuestos conductuales y cognitivos.",
      "¿Cuál de estas es una crítica principal al modelo biomédico?|La falta de marcadores diagnósticos|La dificultad para falsar sus conceptos|Dejar fuera la experiencia subjetiva|La infalsabilidad se critica al modelo psicodinámico, y dejar fuera la experiencia subjetiva, al conductual.",
      "¿Qué plantea el debate de la «enfermedad cerebral»?|Si son enfermedades o constructos prácticos|Si los psicofármacos tienen eficacia real|Si la heredabilidad se mide con gemelos|Se discute si los trastornos son enfermedades del cerebro o constructos que agrupan problemas de origen diverso."
    ],
    inc: [
      "Sobre la heredabilidad|Indica qué parte del trastorno de una persona viene de los genes|Se refiere a la variabilidad entre personas de una población|La heredabilidad media de los rasgos ronda el 49 %|Es una medida poblacional: no dice qué parte del trastorno de un individuo procede de los genes."
    ],
    seq: [],
    cls: [] },
  { t: "El modelo psicodinámico",
    tip: "Para Freud, gran parte de la vida mental es inconsciente y los síntomas expresan conflictos entre ello, yo y superyó. El yo se protege de la angustia con mecanismos de defensa, normales salvo cuando son rígidos. El síntoma es una formación de compromiso con un sentido que el análisis debe descubrir. Se critica que sus conceptos son difíciles de falsar, pero dejó el valor de la relación terapéutica y la idea de un procesamiento no consciente.",
    v: [
      "Ello=Fuente de impulsos y deseos, regida por el principio del placer",
      "Yo=Instancia que media entre los impulsos, las normas y la realidad",
      "Superyó=Normas e ideales interiorizados que actúan como conciencia moral",
      "Represión=Mantener fuera de la conciencia un contenido amenazante",
      "Proyección=Atribuir a otros los propios impulsos",
      "Racionalización=Justificar una conducta con una razón aceptable que oculta el motivo real",
      "Formación de compromiso=Síntoma que satisface a la vez un deseo y la defensa contra él",
      "Inconsciente cognitivo=Procesamiento automático que la psicología estudia con métodos experimentales"
    ],
    g: [
      "El yo se rige por el principio de ___.|realidad|placer|exigencia moral",
      "Freud publicó con Breuer los Estudios sobre la histeria en ___.|1895|1913|1899",
      "Las etapas psicosexuales son oral, anal, fálica, ___ y genital.|latencia|pubertad|edípica",
      "Para el modelo psicodinámico hay ___ entre salud y enfermedad: la diferencia es de grado.|continuidad|ruptura|oposición",
      "Las defensas se vuelven problemáticas cuando son ___ o distorsionan mucho la realidad.|rígidas|conscientes|frecuentes"
    ],
    tf: [
      "Para el modelo psicodinámico, los mecanismos de defensa son siempre patológicos.|F|Las defensas son normales. Se vuelven problemáticas cuando son rígidas o distorsionan mucho la realidad.",
      "Una crítica al modelo es que sus explicaciones se construyen a posteriori y permiten predecir poco.|V",
      "La psicología cognitiva entiende el inconsciente como un depósito de deseos reprimidos.|F|Lo estudia como procesamiento automático, con métodos experimentales, no como un depósito de deseos reprimidos.",
      "Las hipótesis sobre las etapas psicosexuales tienen poca evidencia empírica.|V"
    ],
    q: [
      "Sergio llega tarde a una cita importante y lo achaca al tráfico, aunque en realidad no quería ir. ¿Qué mecanismo de defensa describe el modelo?|Racionalización|Proyección|Desplazamiento|Justifica la conducta con una razón aceptable que oculta el motivo real. La proyección atribuye a otros los propios impulsos.",
      "Una mujer que no se permite reconocer su enfado con un padre exigente sufre dolores de cabeza que le impiden ir a las comidas familiares. ¿Cómo interpreta el síntoma este modelo?|Como formación de compromiso|Como conducta reforzada|Como esquema disfuncional|El síntoma la aleja del conflicto sin que admita el enfado. Es un ejemplo para entender la lógica del modelo, no una prueba.",
      "¿Qué instancia actúa como conciencia moral?|Superyó|Yo|Ello|El superyó contiene normas e ideales interiorizados. El yo media con la realidad y el ello es la fuente de los impulsos.",
      "¿Cuál es la crítica metodológica principal al modelo psicodinámico?|Sus conceptos son difíciles de falsar|Ignora la historia personal del paciente|Reduce la experiencia a la biología|Casi cualquier conducta puede interpretarse como deseo o como defensa. Atender a la historia personal es, de hecho, parte de su legado."
    ],
    inc: [
      "Sobre el legado psicodinámico|Las etapas psicosexuales están bien probadas|Destacó el valor de la relación terapéutica|Subrayó la importancia de la historia personal|Las hipótesis específicas, como las etapas psicosexuales, tienen poca evidencia empírica."
    ],
    seq: [],
    cls: [
      "Instancia de la mente|Ello: impulsos y deseos; principio del placer|Yo: mediación con la realidad; principio de realidad|Superyó: normas interiorizadas; conciencia moral"
    ] },
  { t: "Modelos conductual, cognitivo y sociocultural",
    tip: "El modelo conductual explica la conducta anormal por aprendizaje (condicionamiento clásico, operante y vicario) y propone el análisis funcional. El cognitivo añade que el procesamiento de la información media entre situación y emoción, como en Beck (1967) y en el modelo ABC de Ellis. El sociocultural destaca la pobreza, la discriminación y la cultura. La antipsiquiatría de Szasz y Laing se estudia hoy como crítica histórica.",
    v: [
      "Condicionamiento clásico=Un estímulo neutro asociado a otro que da miedo acaba provocándolo",
      "Condicionamiento operante=Las consecuencias de una conducta la mantienen",
      "Aprendizaje vicario=Adquirir una conducta o un miedo observando a otros",
      "Análisis funcional=Estudio de antecedentes, conducta y consecuencias que la mantienen",
      "Modelo ABC=Ellis: las creencias sobre un acontecimiento determinan sus consecuencias",
      "Pensamientos automáticos=Cogniciones negativas que generan los esquemas disfuncionales activados (Beck)",
      "Thomas Szasz=Sostuvo que la «enfermedad mental» es un mito que medicaliza problemas vitales",
      "R. D. Laing=Interpretó la psicosis como respuesta comprensible a situaciones insoportables"
    ],
    g: [
      "Evitar lo temido produce alivio, y ese alivio ___ la evitación.|refuerza|extingue|castiga",
      "Watson y Rayner publicaron su estudio sobre el miedo condicionado en ___.|1920|1913|1967",
      "En el modelo ABC de Ellis, la letra C corresponde a las ___.|consecuencias|creencias|conductas",
      "Beck formuló su modelo cognitivo de la depresión en ___.|1967|1977|1956",
      "La principal crítica al modelo sociocultural es que no explica por qué solo ___ enferman.|algunos|los pobres|las mujeres"
    ],
    tf: [
      "Para el modelo conductual, la conducta anormal se aprende con principios distintos de los de la normal.|F|Se aprende con los mismos principios que la normal: la diferencia es cuantitativa.",
      "Según Ellis, suspender un examen no causa directamente las consecuencias emocionales, sino las creencias sobre ello.|V",
      "Las tesis más radicales de la antipsiquiatría han recibido un sólido apoyo empírico.|F|No lo han recibido. Se estudia como crítica histórica que ayudó a denunciar abusos e impulsar la reforma psiquiátrica.",
      "Una crítica al modelo cognitivo es la duda de si la cognición es causa o síntoma.|V"
    ],
    q: [
      "Un niño tiene rabietas al salir del parque y consigue quedarse más tiempo. ¿Qué enfoque analiza esta relación en lugar de buscar una etiqueta?|El análisis funcional|El diagnóstico categorial|La formación de compromiso|Identifica antecedentes, conducta y consecuencias: quedarse más tiempo refuerza la rabieta.",
      "Una niña aprende a temer a las arañas al ver cómo reacciona su padre ante ellas. ¿Qué mecanismo actúa?|Aprendizaje vicario|Condicionamiento operante|Condicionamiento clásico|Se aprende observando a otros. En el condicionamiento clásico, el estímulo se asocia directamente a otro que provoca miedo.",
      "¿Qué autor interpretó la psicosis como una respuesta comprensible a situaciones familiares insoportables?|R. D. Laing|Thomas Szasz|Aaron Beck|Szasz, también antipsiquiatra, sostuvo que la enfermedad mental es un mito que convierte problemas vitales en enfermedades.",
      "¿Qué unidad de análisis caracteriza al modelo sociocultural?|Familia, comunidad y cultura|Relación entre conducta y ambiente|Pensamientos, esquemas y sesgos|Mira el entorno cercano y la sociedad. La relación conducta-ambiente es propia del modelo conductual, y los esquemas, del cognitivo."
    ],
    inc: [
      "Sobre el modelo cognitivo|Sostiene que la situación causa directamente la emoción|Los esquemas activados generan pensamientos automáticos|Hoy se integra en el modelo cognitivo-conductual|Entre la situación y la emoción media el procesamiento de la información: esquemas, creencias, sesgos y distorsiones."
    ],
    seq: [],
    cls: [
      "Modelo explicativo|Conductual: aprendizaje; análisis funcional; condicionamiento operante|Cognitivo: esquemas; modelo ABC; pensamientos automáticos|Sociocultural: pobreza; discriminación; antipsiquiatría"
    ] },
  { t: "Integración: biopsicosocial, vulnerabilidad-estrés y psicopatología del desarrollo",
    tip: "Engel (1977) propuso el modelo biopsicosocial, hoy marco general aunque criticado por vago. Zubin y Spring (1977) plantearon el de vulnerabilidad-estrés: hay episodio cuando el estrés supera un umbral, más bajo cuanto mayor es la vulnerabilidad, y los episodios son temporales. La psicopatología del desarrollo estudia trayectorias: equifinalidad es llegar al mismo resultado por vías distintas, y multifinalidad, que un mismo factor lleve a resultados distintos.",
    v: [
      "Modelo biopsicosocial=Factores biológicos, psicológicos y sociales en interacción (Engel, 1977)",
      "Vulnerabilidad=Característica relativamente estable de la persona que baja su umbral",
      "Umbral=Nivel de estrés a partir del cual aparece un episodio",
      "Episodio temporal=Al bajar el estrés, la persona puede volver a su nivel previo",
      "Equifinalidad=Distintas vías de desarrollo conducen a un mismo resultado",
      "Multifinalidad=Un mismo factor de riesgo conduce a resultados distintos",
      "Psicopatología del desarrollo=Estudio de los trastornos como trayectorias en relación con el desarrollo normal",
      "Zubin y Spring (1977)=Propusieron el modelo de vulnerabilidad-estrés para la esquizofrenia"
    ],
    g: [
      "Engel publicó su crítica al modelo biomédico en la revista ___.|Science|Nature|The Lancet",
      "Zubin y Spring propusieron su modelo inicialmente para la ___.|esquizofrenia|depresión mayor|agorafobia",
      "Cuanto mayor es la vulnerabilidad, más ___ es el umbral para presentar un episodio.|bajo|alto|estable",
      "La crítica habitual al modelo biopsicosocial es que resulta ___.|vago|reduccionista|determinista",
      "Entre niños que han sufrido negligencia, unos desarrollan ansiedad, otros problemas de conducta y otros ningún trastorno. Es un caso de ___.|multifinalidad|equifinalidad|comorbilidad"
    ],
    tf: [
      "El modelo de vulnerabilidad-estrés fue propuesto por Engel en 1977.|F|Es de Zubin y Spring (1977). Engel propuso ese mismo año el modelo biopsicosocial.",
      "Según Zubin y Spring, una persona poco vulnerable puede presentar un episodio si el estrés es muy alto.|V",
      "En el modelo de vulnerabilidad-estrés, el episodio se vuelve permanente una vez superado el umbral.|F|Los episodios son temporales: cuando el estrés baja, la persona puede volver a su nivel previo.",
      "Los manuales diagnósticos son descriptivos, y la causa solo define algunas categorías, como las de sustancias o estrés.|V"
    ],
    q: [
      "Dos adolescentes llegan a la depresión, uno tras sufrir acoso escolar y otro tras la enfermedad grave de su madre. ¿Qué concepto ilustran?|Equifinalidad|Multifinalidad|Comorbilidad|Distintas vías llevan al mismo resultado. La multifinalidad es lo contrario: un mismo factor con resultados distintos.",
      "Una estudiante con antecedentes familiares y episodios previos recae con la presión de una mudanza. ¿Cómo lo explica el modelo de Zubin y Spring?|Su alta vulnerabilidad baja el umbral|El estrés de la mudanza fue extremo|Su episodio previo nunca remitió|Con mucha vulnerabilidad, un estrés moderado basta para superar el umbral.",
      "¿Cómo se caracteriza la vulnerabilidad en el modelo de Zubin y Spring?|Relativamente estable|Siempre de origen genético|Variable según el día|Es relativamente estable y puede tener raíces genéticas, biológicas o de la historia de aprendizaje.",
      "¿Cómo refleja la CIE-11 el enfoque de ciclo vital?|Suprime el capítulo infantil|Ordena capítulos por edad de inicio|Añade un eje del desarrollo|La CIE-11 no tiene capítulo de trastornos infantiles. Ordenar los capítulos según el momento de aparición es propio del DSM-5-TR."
    ],
    inc: [
      "Sobre el modelo biopsicosocial|Precisa el peso de cada factor en cada caso|Es hoy el marco de referencia general|Lo propuso Engel (1977) en la revista Science|Esa es justo su crítica: afirma que todo influye, pero no dice cuánto pesa cada factor ni cómo interactúan."
    ],
    seq: [],
    cls: [
      "Concepto evolutivo|Equifinalidad: distintas vías; un mismo resultado; acoso y pérdida que llevan a depresión|Multifinalidad: un mismo factor; resultados distintos; negligencia con desenlaces diversos"
    ] }
] },
{ n: 3, t: "Los sistemas de clasificación: DSM-5-TR y CIE-11", cap: 2, pir: "alta", mods: [
  { t: "Para qué sirve diagnosticar y cómo han evolucionado los sistemas",
    tip: "Clasificar ordena la información, pero no explica por qué alguien sufre. El diagnóstico sirve para comunicar, investigar, pronosticar, decidir el tratamiento y hacer estadística sanitaria. La fiabilidad es el acuerdo entre clínicos (kappa), y la validez, que la categoría corresponda a algo real y útil: la fiabilidad es necesaria, pero no suficiente. El DSM-III (1980) introdujo criterios operativos, enfoque ateórico y cinco ejes, y el DSM-5 (2013) eliminó los ejes.",
    v: [
      "Nosología=Disciplina que estudia cómo construir las clasificaciones",
      "Diagnóstico=Acto de aplicar una clasificación a un caso concreto",
      "Fiabilidad=Grado de acuerdo entre clínicos que evalúan a la misma persona",
      "Kappa de Cohen=Índice de acuerdo que descuenta el acuerdo esperable por azar",
      "Validez=Que la categoría agrupe a personas con causas, curso o respuesta parecidos",
      "Enfoque ateórico=Definir los trastornos por lo observable, con neutralidad entre escuelas",
      "Criterios de Feighner=Antecedente del DSM-III junto a los RDC del grupo de Spitzer",
      "Eje II del DSM-III=Registro de los trastornos de la personalidad y el retraso mental"
    ],
    g: [
      "El DSM-I y el DSM-II estaban influidos por el concepto de «reacción» de Adolf ___.|Meyer|Kraepelin|Spitzer",
      "El DSM-II se alineó con la ___ (1965).|CIE-8|CIE-9|CIE-6",
      "En el sistema multiaxial, el eje ___ recogía la evaluación global del funcionamiento.|V|IV|III",
      "La fiabilidad es necesaria para la validez, pero no ___.|suficiente|relevante|medible",
      "La CIE-10 se aprobó en ___ y su volumen de trastornos mentales apareció en 1992.|1990|1975|1994"
    ],
    tf: [
      "Un sistema en el que todos los clínicos aplican la misma etiqueta equivocada es fiable pero poco válido.|V",
      "«Ateórico» significa que el DSM-III está libre de cualquier supuesto.|F|Significa neutral respecto a las escuelas teóricas, no libre de supuestos.",
      "Con el DSM-III mejoró la fiabilidad y quedó resuelto el problema de la validez.|F|La fiabilidad mejoró mucho, pero la validez sigue siendo el problema central.",
      "La CIE abarca todas las enfermedades, no solo las mentales.|V"
    ],
    q: [
      "Dos psicólogas evalúan a los mismos 50 pacientes y casi siempre coinciden en el diagnóstico, pero los pacientes de una misma categoría difieren en curso y respuesta al tratamiento. ¿Qué indica?|Alta fiabilidad y validez dudosa|Alta validez y fiabilidad dudosa|Alta fiabilidad y alta validez|El acuerdo entre jueces es fiabilidad. Si la categoría no predice el curso ni el tratamiento, su validez es baja.",
      "¿Qué función del diagnóstico ilustra que los servicios de salud planifiquen recursos con códigos?|Estadística sanitaria|Decisión terapéutica|Comunicación|Los códigos permiten contar casos y planificar recursos. La comunicación consiste en resumir información para otro profesional.",
      "¿Qué recogía el eje IV del sistema multiaxial?|Problemas psicosociales|Enfermedades médicas|Funcionamiento global|Recogía problemas psicosociales y ambientales. El eje III recogía las enfermedades médicas, y el V, la evaluación global del funcionamiento.",
      "¿Qué caracterizaba al DSM-I y al DSM-II?|Descripciones en prosa poco fiables|Criterios operativos con duraciones|Un sistema multiaxial de cinco ejes|Eran manuales breves, influidos por Meyer y el psicoanálisis. Los criterios operativos y los ejes llegaron con el DSM-III."
    ],
    inc: [
      "Sobre las funciones del diagnóstico|Una etiqueta explica por qué la persona sufre|Facilita comparar estudios con los mismos criterios|Ayuda a prever el curso más probable|Clasificar ordena la información y orienta, pero no explica por qué alguien sufre."
    ],
    seq: [
      "Cronología del DSM|DSM-I (1952)>DSM-II (1968)>DSM-III (1980)>DSM-III-R (1987)>DSM-IV (1994)>DSM-IV-TR (2000)>DSM-5 (2013)>DSM-5-TR (2022)"
    ],
    cls: [] },
  { t: "El DSM-5-TR (2022): organización, novedades y Sección III",
    tip: "El DSM-5-TR (18 de marzo de 2022) es una revisión del texto del DSM-5 que mantiene su estructura. Tiene tres secciones: fundamentos, criterios y Sección III. Sus novedades incluyen el trastorno de duelo prolongado (12 meses, 6 en menores), el trastorno del estado de ánimo no especificado, códigos de síntoma para la conducta suicida y la autolesión y varios cambios de nombre. No recupera el sistema multiaxial.",
    v: [
      "Sección I=Fundamentos: uso del manual, definición de trastorno y advertencias forenses",
      "Sección II=Criterios diagnósticos y códigos, en capítulos organizados por espectros",
      "Sección III=Medidas, formulación cultural, AMPD y afecciones que requieren más estudio",
      "Duelo prolongado (DSM-5-TR)=Exige al menos 12 meses desde la muerte, 6 en menores",
      "Códigos de síntoma=Registran conducta suicida o autolesión aunque no haya otro diagnóstico",
      "Trastorno depresivo persistente=Nombre actual, sin «distimia» como sinónimo",
      "Revisión de equidad=Revisión del texto para evitar sesgos etnorraciales y estereotipos",
      "Afecciones para estudio=Propuestas de la Sección III que no son diagnósticos oficiales"
    ],
    g: [
      "El DSM-5-TR se publicó el 18 de ___ de 2022.|marzo|mayo|enero",
      "El trastorno de duelo prolongado se sitúa en el capítulo de trastornos relacionados con traumas y factores de ___.|estrés|ansiedad|ánimo",
      "El DSM-5-TR llama al trastorno de conversión trastorno de síntomas neurológicos ___.|funcionales|disociativos|somáticos",
      "El trastorno por juego en internet figura en la Sección ___ del DSM-5-TR.|III|II|I",
      "Los síntomas subumbrales ante un estresor se codifican como trastorno de ___.|adaptación|estrés agudo|ansiedad"
    ],
    tf: [
      "El DSM-5-TR recupera el sistema multiaxial para registrar los factores psicosociales.|F|No lo recupera: se registran con los códigos de otras afecciones que pueden ser objeto de atención clínica.",
      "Los códigos de conducta suicida del DSM-5-TR pueden usarse sin otro diagnóstico.|V",
      "En el DSM-5-TR, «fobia social» se mantiene como sinónimo de trastorno de ansiedad social.|F|El nombre es trastorno de ansiedad social, sin «fobia social» como alternativa.",
      "Que una afección esté en la Sección III significa que no es un diagnóstico oficial del manual.|V"
    ],
    q: [
      "Marta, de 34 años, tuvo un intento de suicidio hace meses y hoy no cumple criterios de ningún trastorno. ¿Qué permite el DSM-5-TR?|Anotar el antecedente con un código de síntoma|Diagnosticar un trastorno depresivo no especificado|Registrarlo en el eje IV del sistema multiaxial|Los códigos de conducta suicida, actual o como antecedente, se usan sin otro diagnóstico. Los ejes desaparecieron en 2013.",
      "¿Cuál de estas es una novedad del DSM-5-TR?|El trastorno de duelo prolongado|El diagnóstico de TEPT complejo|El trastorno de distrés corporal|El TEPT complejo y el trastorno de distrés corporal son categorías de la CIE-11, no del DSM-5-TR.",
      "¿Qué cambio de nombre introduce el DSM-5-TR?|«Antipsicóticos» en lugar de «neurolépticos»|«Fobia social» en lugar de «ansiedad social»|«Distimia» en lugar de «depresión persistente»|El DSM-5-TR adopta «antipsicóticos», «trastorno de ansiedad social» y «trastorno depresivo persistente», sin los nombres antiguos.",
      "¿Qué exige el DSM-5-TR para diagnosticar un trastorno de duelo prolongado en un adulto?|Al menos 12 meses desde la muerte|Más de 6 meses desde la muerte|Al menos 2 semanas de síntomas|Son 12 meses, o 6 en menores. Los más de 6 meses corresponden a la CIE-11, una trampa típica."
    ],
    inc: [
      "Sobre la Sección III del DSM-5-TR|Contiene los criterios y códigos oficiales|Incluye la entrevista de formulación cultural|Contiene el modelo alternativo de la personalidad|Los criterios y códigos están en la Sección II. La Sección III recoge medidas, formulación cultural, AMPD y afecciones para estudio."
    ],
    seq: [],
    cls: [
      "Sección del DSM-5-TR|Sección I: uso del manual; definición de trastorno mental; advertencias forenses|Sección II: criterios diagnósticos; códigos; capítulos por espectros|Sección III: formulación cultural; AMPD; trastorno por juego en internet"
    ] },
  { t: "La CIE-11 (vigente desde 2022)",
    tip: "La CIE-11 se aprobó en mayo de 2019 y está en vigor desde el 1 de enero de 2022. Los trastornos mentales están en el capítulo 6, y sus CDDR se publicaron en 2024. Describe características esenciales con juicio clínico y evita los recuentos arbitrarios. Suprime el capítulo infantil, introduce dimensiones en personalidad y psicosis, y saca del capítulo la reacción de estrés agudo y la incongruencia de género.",
    v: [
      "CDDR=Descripciones clínicas y requisitos diagnósticos de la CIE-11, publicadas en 2024",
      "Características esenciales=Rasgos que deben estar presentes, aplicados con juicio clínico",
      "Capítulo 6=Trastornos mentales, del comportamiento y del neurodesarrollo de la CIE-11",
      "Enfoque de ciclo vital=Cada trastorno describe su presentación en la niñez, la adolescencia y la vejez",
      "Distrés corporal=Categoría que sustituye a la mayoría de los antiguos trastornos somatomorfos",
      "Reacción de estrés agudo=En la CIE-11, respuesta esperable incluida entre los factores que influyen en la salud",
      "Incongruencia de género=Situada en el capítulo de salud sexual, fuera de los trastornos mentales",
      "Síndrome de referencia olfativa=Categoría nueva del grupo obsesivo-compulsivo en la CIE-11"
    ],
    g: [
      "La Asamblea Mundial de la Salud aprobó la CIE-11 en mayo de ___.|2019|2022|2013",
      "En personalidad, la CIE-11 sustituye los tipos por un diagnóstico de ___.|gravedad|grupo|estilo",
      "En la CIE-11, la esquizofrenia pierde los ___ y gana descriptores de síntomas.|subtipos|criterios|episodios",
      "En la CIE-11, la hipocondría pasa al grupo ___.|obsesivo-compulsivo|de distrés corporal|disociativo",
      "En la CIE-11, el episodio depresivo mantiene una duración mínima de dos ___.|semanas|meses|días"
    ],
    tf: [
      "La CIE-11 fija para cada trastorno una lista cerrada de síntomas, un número mínimo y un plazo exacto.|F|Describe características esenciales con flexibilidad clínica y en general evita los recuentos, salvo justificación empírica.",
      "La CIE-11 incorpora el bipolar II y el TEPT complejo.|V",
      "En la CIE-11, la incongruencia de género sigue en el capítulo de trastornos mentales para garantizar la atención.|F|Pasa al capítulo de salud sexual, fuera de los trastornos mentales, para reducir el estigma sin perder el acceso a la atención.",
      "Los trastornos del sueño-vigilia tienen en la CIE-11 un capítulo propio.|V"
    ],
    q: [
      "Ante un adolescente con preocupación constante, tensión e insomnio desde hace meses, una clínica usa la CIE-11. ¿Cómo procede?|Valora si están las características esenciales|Cuenta si cumple un número mínimo de síntomas|Comprueba que dure exactamente seis meses|La CIE-11 no cuenta síntomas: valora las características esenciales de la ansiedad generalizada y si causan malestar o deterioro.",
      "¿Por qué la CIE-11 saca la reacción de estrés agudo del capítulo de trastornos mentales?|Por ser una respuesta esperable|Por solaparse con el TEPT complejo|Por su baja prevalencia|Se entiende como respuesta esperable ante un suceso extremo y pasa a los factores que influyen en el estado de salud.",
      "¿Qué categoría pertenece al grupo obsesivo-compulsivo de la CIE-11?|La acumulación|El distrés corporal|La catatonía|Incluye dismórfico corporal, referencia olfativa, acumulación, excoriación e hipocondría. La catatonía es una agrupación propia.",
      "¿Qué añade la CIE-11 a la gravedad en el diagnóstico de la personalidad?|Cinco dominios y un patrón límite|Diez tipos agrupados en tres grupos|Un criterio A de funcionamiento|Añade especificadores de cinco dominios de rasgos y de patrón límite. El criterio A pertenece al AMPD del DSM."
    ],
    inc: [
      "Sobre la CIE-11|Conserva el capítulo de trastornos infantiles|Está en vigor desde el 1 de enero de 2022|Incluye el trastorno por videojuegos y el atracón|Desaparece el capítulo infantil: con el enfoque de ciclo vital, cada trastorno describe su presentación según la edad."
    ],
    seq: [],
    cls: [
      "Clasificación de la OMS|CIE-10: capítulo infantil propio; esquizofrenia con subtipos; estrés agudo como trastorno|CIE-11: enfoque de ciclo vital; descriptores de síntomas; personalidad por gravedad"
    ] },
  { t: "DSM frente a CIE, uso en España y críticas al modelo categorial",
    tip: "Ambos sistemas son categoriales: el DSM-5-TR usa criterios operativos, y la CIE-11, características esenciales. Las duraciones son una fuente habitual de confusiones. En el SNS español se codifica con la CIE-10-ES desde 2016, sin fecha para la CIE-11. Al modelo categorial se le critican la comorbilidad masiva, la heterogeneidad, los umbrales arbitrarios y el uso masivo de categorías residuales, pero se completa con dimensiones en lugar de abandonarse.",
    v: [
      "CIE-10-ES=Clasificación con la que se codifican los diagnósticos en el SNS desde 2016",
      "Comorbilidad masiva=Cumplir criterios de varios trastornos a la vez, sobre todo ansiedad y depresión",
      "Heterogeneidad=Dos personas con el mismo diagnóstico pueden parecerse poco",
      "Umbral arbitrario=Corte convencional, como exigir cinco síntomas y no cuatro",
      "Categoría residual=Etiqueta «no especificado» u «otro especificado»",
      "Cosificación=Tratar una etiqueta diagnóstica como una entidad natural",
      "Esquizofreniforme=Trastorno del DSM-5-TR de 1 a 6 meses que no existe en la CIE-11",
      "Psicótico agudo y transitorio=Categoría de la CIE-11 que dura hasta 3 meses"
    ],
    g: [
      "En el DSM-5-TR, el TEPT exige síntomas durante ___.|más de 1 mes|3 días-1 mes|varias semanas",
      "Para el trastorno delirante, la CIE-11 exige ___ o más.|3 meses|1 mes|6 meses",
      "En el DSM-5-TR, la esquizofrenia exige 6 meses o más, con al menos ___ de fase activa.|1 mes|1 semana|3 meses",
      "La hipomanía exige en el DSM-5-TR al menos ___.|4 días|7 días|2 semanas",
      "Las etiquetas «no especificado» se usan tanto porque muchos cuadros reales no ___ en las categorías.|encajan|aparecen|progresan"
    ],
    tf: [
      "En el Sistema Nacional de Salud ya hay fecha oficial para implantar la CIE-11.|F|No hay fecha oficial. La codificación sigue siendo la CIE-10-ES, vigente desde 2016.",
      "En el DSM-5-TR, el trastorno psicótico breve dura de 1 día a 1 mes.|V",
      "Que una persona con cuatro síntomas quede fuera del diagnóstico ilustra la crítica de los umbrales arbitrarios.|V",
      "Las críticas al modelo categorial han llevado a abandonar las categorías por completo.|F|No llevan a abandonarlas, sino a completarlas con dimensiones. Siguen siendo útiles para decidir tratar o ingresar."
    ],
    q: [
      "Dos pacientes con depresión mayor solo coinciden en un criterio: uno duerme muy poco y el otro, en exceso. ¿Qué crítica ilustra?|La heterogeneidad|La comorbilidad|La cosificación|Con cinco de nueve síntomas, dos personas pueden parecerse poco, e incluso un mismo criterio puede ir en sentidos opuestos.",
      "Un paciente presenta síntomas psicóticos desde hace tres meses, con más de un mes de fase activa. ¿Qué diagnóstico corresponde en el DSM-5-TR?|Esquizofreniforme|Esquizofrenia|Psicótico breve|Entre 1 y 6 meses es esquizofreniforme. La esquizofrenia exige 6 meses o más, y el psicótico breve dura como máximo 1 mes.",
      "¿Qué duración exige la CIE-11 para la manía?|1 semana o más|4 días o más|2 semanas o más|La CIE-11 pide 1 semana o más para la manía y varios días para la hipomanía. Los 4 días son la hipomanía del DSM-5-TR.",
      "¿Qué ventaja real conservan las categorías?|Decisiones sencillas de sí o no|Recoger los casos subumbral|Conservar la intensidad del síntoma|Facilitan la comunicación y decisiones como tratar o ingresar. Registrar los casos subumbral y la intensidad es ventaja de las dimensiones."
    ],
    inc: [
      "Sobre las duraciones del DSM-5-TR y la CIE-11|El esquizofreniforme dura 1-6 meses en la CIE-11|El estrés agudo dura 3 días-1 mes en el DSM-5-TR|El episodio depresivo exige 2 semanas en ambos|El trastorno esquizofreniforme no existe en la CIE-11: es una categoría del DSM-5-TR."
    ],
    seq: [],
    cls: [
      "Sistema que lo recoge|DSM-5-TR: trastorno esquizofreniforme; estrés agudo como trastorno; duelo prolongado de 12 meses|CIE-11: TEPT complejo; trastorno por videojuegos; duelo prolongado de más de 6 meses"
    ] }
] },
{ n: 4, t: "Más allá de las categorías: modelos dimensionales y transdiagnósticos", cap: 2, pir: "media", mods: [
  { t: "Problemas del modelo categorial y argumentos dimensionales",
    tip: "El modelo categorial decide presencia o ausencia, y el dimensional sitúa a cada persona en un continuo. El consenso es que la psicopatología es mayoritariamente dimensional. La comorbilidad, la heterogeneidad, los umbrales y las categorías residuales apoyan las dimensiones, y faltan las «zonas de rareza» entre trastornos (Öngür et al., 2026). Como decidir exige puntos de corte, la propuesta es combinar categorías y dimensiones.",
    v: [
      "Modelo categorial=Decide si un trastorno está presente o ausente",
      "Modelo dimensional=Sitúa a cada persona en un continuo de intensidad",
      "Zonas de rareza=Escasez de casos intermedios que cabría esperar entre categorías naturales",
      "Comorbilidad=Presencia simultánea de dos o más trastornos en la misma persona",
      "Punto de corte=Valor acordado a partir del cual conviene tratar o intervenir",
      "Caso subumbral=Queda justo por debajo del corte y puede necesitar ayuda igualmente",
      "Especificador de gravedad=Elemento dimensional que el DSM-5-TR añade en muchos trastornos",
      "Dominios de síntomas=En el DSM-5-TR, cinco dimensiones que definen el espectro psicótico"
    ],
    g: [
      "Si los trastornos fueran categorías naturales, cabría esperar ___ entre ellos.|zonas de rareza|alta comorbilidad|gradación continua",
      "La tensión arterial es una variable ___, y la hipertensión, un corte acordado.|continua|categorial|nominal",
      "En la CIE-11, la personalidad se valora con la gravedad y cinco ___ de rasgos.|dominios|espectros|factores",
      "Para decidir si se ingresa a alguien, un modelo dimensional necesita al final un ___.|punto de corte|factor general|perfil de rasgos",
      "Una desventaja del modelo dimensional es que la comunicación resulta más ___.|compleja|sencilla|directa"
    ],
    tf: [
      "El consenso actual es que la psicopatología es mayoritariamente dimensional.|V",
      "Los análisis para el futuro DSM han hallado zonas de rareza claras entre los trastornos.|F|Concluyen que no aparecen con claridad: lo habitual es una gradación continua (Öngür et al., 2026).",
      "En el DSM-5-TR, el modelo dimensional de la personalidad es el sistema oficial de diagnóstico.|F|El AMPD está solo en la Sección III. Lo oficial siguen siendo los diez TP categoriales.",
      "Las propuestas actuales buscan combinar categorías y dimensiones en lugar de eliminar las primeras.|V"
    ],
    q: [
      "Laura cumple cuatro de los cinco síntomas exigidos y sufre casi tanto como quien cumple cinco. ¿Qué ventaja del modelo dimensional ilustra su caso?|Registra los casos subumbral|Simplifica las decisiones clínicas|Facilita la comunicación clínica|En un modelo categorial Laura queda fuera. Las decisiones directas y la comunicación sencilla son ventajas de las categorías.",
      "¿Qué argumento de fondo apoya los modelos dimensionales?|La ausencia de zonas de rareza|La existencia de biomarcadores|La baja comorbilidad observada|No aparecen pocos casos intermedios entre trastornos ni con la normalidad: lo habitual es una gradación continua.",
      "¿Cómo trata la comorbilidad un modelo dimensional?|Como perfiles en varias dimensiones|Como varios diagnósticos a la vez|Como un error de medida del clínico|El modelo categorial acumula diagnósticos. El dimensional describe un perfil en varias dimensiones.",
      "¿Qué elemento dimensional incluye el DSM-5-TR en su sistema oficial?|Dominios de síntomas en la psicosis|Cinco dominios de rasgos de personalidad|Descriptores de síntomas en la esquizofrenia|Cinco dominios de síntomas definen el espectro psicótico. Los dominios de personalidad y los descriptores son de la CIE-11."
    ],
    inc: [
      "Sobre categorías y dimensiones|Las categorías tienen límites nítidos y naturales|Las categorías facilitan decisiones directas|Las dimensiones conservan la información de intensidad|Las categorías son herramientas útiles, no entidades naturales con límites nítidos."
    ],
    seq: [],
    cls: [
      "Tipo de modelo|Categorial: presencia o ausencia; decisiones directas; comunicación sencilla|Dimensional: continuo de intensidad; casos subumbral; perfiles en varias dimensiones"
    ] },
  { t: "El factor p y la taxonomía jerárquica HiTOP",
    tip: "Caspi et al. (2014), con la cohorte de Dunedin y un modelo bifactorial, hallaron un factor general p y tres específicos: internalizante, externalizante y de trastorno del pensamiento. Se compara con el factor g, y se debate si es sustantivo o en parte un artefacto estadístico. HiTOP (Kotov et al., 2017) organiza los síntomas según su covariación, del factor p a los síntomas y rasgos, con seis espectros. Su fortaleza es la validez estructural, y su punto débil, la utilidad clínica.",
    v: [
      "Factor p=Factor general que explica la covariación entre trastornos",
      "Modelo bifactorial=Un factor general más factores específicos para lo que comparte cada grupo",
      "Cohorte de Dunedin=Muestra de Nueva Zelanda seguida durante décadas por Caspi et al.",
      "Factor g=Medida general de la inteligencia con la que se compara p",
      "HiTOP=Taxonomía jerárquica construida a partir de cómo covarían los síntomas",
      "Superespectros=Agrupaciones amplias de espectros situadas bajo el factor p",
      "Desapego=Espectro de HiTOP con retraimiento social y afecto restringido",
      "Validez estructural=Fortaleza de HiTOP: refleja cómo se agrupan de verdad los síntomas"
    ],
    g: [
      "Caspi et al. publicaron su estudio sobre el factor p en ___.|2014|2017|2010",
      "Además de p, Caspi et al. hallaron factores internalizante, externalizante y de trastorno del ___.|pensamiento|ánimo|control",
      "En HiTOP, la hostilidad y la manipulación pertenecen al espectro ___.|externalizante antagonista|externalizante desinhibido|de desapego",
      "En la base de la jerarquía de HiTOP están los síntomas y los ___.|rasgos|síndromes|espectros",
      "Si buena parte del riesgo es general, será difícil hallar ___ específicos de cada trastorno.|biomarcadores|tratamientos|síntomas"
    ],
    tf: [
      "Que el factor p sea una dimensión sustantiva es hoy un hecho establecido.|F|Está en debate: para otros autores es en parte un artefacto del modelo bifactorial (Caspi et al., 2024).",
      "HiTOP agrupa los síntomas según la tradición clínica de los manuales.|F|Los agrupa según cómo covarían realmente en los datos, no según la tradición clínica.",
      "La impulsividad y el consumo de sustancias pertenecen al espectro externalizante desinhibido.|V",
      "La utilidad clínica de HiTOP sigue en debate.|V"
    ],
    q: [
      "Quien rinde bien en una prueba cognitiva suele rendir bien en otras, y quien presenta un trastorno tiende a presentar otros. ¿Qué concepto se apoya en esta analogía?|El factor p|El criterio A del AMPD|El neuroticismo|Igual que g explica la correlación entre pruebas cognitivas, p explica la covariación entre trastornos (Caspi et al., 2014).",
      "¿Qué crítica se hace al factor p?|Puede ser en parte un artefacto estadístico|Se basa en una muestra clínica muy pequeña|Ignora los factores específicos de grupo|El modelo bifactorial tiende a ajustar bien casi cualquier conjunto de datos correlacionados.",
      "¿Qué nivel de HiTOP se parece más a los trastornos tradicionales?|Los síndromes|Los superespectros|Los espectros|Los subfactores y síndromes recuerdan a los trastornos clásicos. Por encima están los espectros y los superespectros.",
      "Un paciente presenta síntomas corporales sin explicación médica suficiente. ¿En qué espectro de HiTOP se sitúan?|Somatomorfo|Internalizante|Desapego|El espectro somatomorfo agrupa los síntomas corporales sin explicación médica suficiente."
    ],
    inc: [
      "Sobre HiTOP|Es un marco de investigación del NIMH|La propusieron Kotov et al. en 2017|Su fortaleza es la validez estructural|El marco de investigación del NIMH es RDoC. HiTOP es una taxonomía empírica basada en la covariación de los síntomas."
    ],
    seq: [
      "Niveles de HiTOP de lo general a lo específico|Factor p>Superespectros>Espectros>Subfactores y síndromes>Síntomas y rasgos"
    ],
    cls: [] },
  { t: "RDoC y el modelo alternativo de los trastornos de la personalidad",
    tip: "RDoC (Insel et al., 2010) es un marco de investigación del NIMH, no un sistema diagnóstico. Es una matriz de dominios funcionales por unidades de análisis, de los genes al autoinforme. El AMPD, en la Sección III del DSM, combina el criterio A (funcionamiento del self e interpersonal) y el criterio B (25 facetas en cinco dominios: afectividad negativa, desapego, antagonismo, desinhibición y psicoticismo).",
    v: [
      "RDoC=Marco de investigación del NIMH basado en funciones psicológicas y biológicas",
      "Unidades de análisis=Columnas de la matriz: de genes y circuitos a conducta y autoinforme",
      "Sistemas de valencia negativa=Dominio de RDoC que incluye la amenaza aguda o miedo",
      "Sistemas sensoriomotores=Dominio añadido después a la matriz de RDoC",
      "Criterio A del AMPD=Deterioro del funcionamiento del self e interpersonal",
      "LPFS=Escala de nivel de funcionamiento de la personalidad",
      "Criterio B del AMPD=25 facetas de rasgos patológicos agrupadas en cinco dominios",
      "Rasgos especificados=Diagnóstico del AMPD para los casos fuera de sus seis trastornos"
    ],
    g: [
      "RDoC lo propusieron Insel et al. en ___.|2010|2014|2017",
      "En RDoC, la memoria de trabajo pertenece a los sistemas ___.|cognitivos|de arousal|sensoriomotores",
      "En el AMPD, la identidad y la autodirección son áreas del funcionamiento del ___.|self|grupo|afecto",
      "El AMPD conserva ___ trastornos de la personalidad definidos con su lógica.|seis|diez|cinco",
      "En RDoC, la respuesta a la recompensa se estudia en circuitos como el estriado ___.|ventral|dorsal|lateral"
    ],
    tf: [
      "RDoC es el sistema diagnóstico dimensional que sustituye al DSM en la clínica.|F|Es un marco de investigación del NIMH. Por ahora no ofrece herramientas para el diagnóstico clínico.",
      "RDoC parte de funciones básicas y no de los trastornos del DSM.|V",
      "La empatía y la intimidad forman parte del área interpersonal del criterio A del AMPD.|V",
      "La anancastia y la disocialidad son dominios del criterio B del AMPD.|F|Son dominios de la CIE-11. Los del AMPD son afectividad negativa, desapego, antagonismo, desinhibición y psicoticismo."
    ],
    q: [
      "Un equipo estudia la sensibilidad a la amenaza en personas con pánico, TEPT y fobias, sin agruparlas por diagnóstico. ¿Qué marco sigue?|RDoC|HiTOP|AMPD|RDoC estudia constructos como la amenaza aguda, que pueden estar alterados en personas con diagnósticos distintos.",
      "¿Qué pareja corresponde a dominios de rasgos del criterio B del AMPD?|Antagonismo y psicoticismo|Disocialidad y anancastia|Identidad y autodirección|Disocialidad y anancastia son dominios de la CIE-11, e identidad y autodirección, áreas del self del criterio A.",
      "¿Qué paradigma se usa en RDoC para estudiar la memoria de trabajo?|La tarea n-back|La actigrafía|El sobresalto|La memoria de trabajo se estudia con la tarea n-back y se asocia a la corteza prefrontal dorsolateral.",
      "¿Cuál es el principal límite de RDoC?|No ofrece herramientas diagnósticas|Ignora el nivel de los circuitos|Solo usa medidas de autoinforme|Es útil para investigar, pero por ahora no ofrece herramientas para el diagnóstico clínico."
    ],
    inc: [
      "Sobre el AMPD|Es el sistema oficial de la Sección II del DSM-5-TR|Valora el funcionamiento con la escala LPFS|Sus rasgos se evalúan, por ejemplo, con el PID-5|Está en la Sección III del DSM-5 y del DSM-5-TR, como alternativa al modelo categorial de diez trastornos."
    ],
    seq: [],
    cls: [
      "Componente del AMPD|Criterio A: identidad; autodirección; empatía; intimidad|Criterio B: antagonismo; desinhibición; psicoticismo; desapego"
    ] },
  { t: "Procesos transdiagnósticos y el futuro del DSM",
    tip: "Un proceso transdiagnóstico es un mecanismo presente en varios trastornos que contribuye a mantenerlos, como la rumiación, la evitación experiencial o la intolerancia a la incertidumbre, con el neuroticismo en la base. Inspira tratamientos como el protocolo unificado de Barlow. El comité estratégico de la APA (2024) propone cuatro dominios interactivos, un «documento vivo» y combinar categorías y dimensiones. Son propuestas: no existe un DSM-6.",
    v: [
      "Proceso transdiagnóstico=Mecanismo presente en varios trastornos que contribuye a mantenerlos",
      "Rumiación=Pensamiento negativo repetitivo sobre el pasado",
      "Preocupación=Pensamiento negativo repetitivo sobre el futuro",
      "Evitación experiencial=Intentos de no sentir emociones, pensamientos o sensaciones molestas",
      "Intolerancia a la incertidumbre=Vivir lo incierto como inaceptable y amenazante",
      "Neuroticismo=Tendencia estable a experimentar emociones negativas",
      "Documento vivo=DSM actualizado de forma continua en lugar de por ediciones",
      "Protocolo unificado=Tratamiento de Barlow basado en la lógica transdiagnóstica"
    ],
    g: [
      "La APA aprobó el comité estratégico para el futuro del DSM en marzo de ___.|2024|2022|2025",
      "El comité estratégico para el futuro del DSM está presidido por Maria ___.|Oquendo|Insel|Kotov",
      "El subcomité de Estructura y Dimensiones propone diagnosticar en un nivel amplio, como «___», o en uno más concreto.|psicosis|esquizofrenia|delirio",
      "Se ha propuesto cambiar la «S» de Statistical por ___ en el nombre del manual.|Scientific|Standard|Systematic",
      "El perfeccionismo, con autocrítica intensa ante los fallos, aparece en los TCA, el TOC y la ___.|depresión|esquizofrenia|manía"
    ],
    tf: [
      "El DSM-5-TR es el DSM-6, y el próximo manual ya se ha publicado con un sistema dimensional.|F|El DSM-5-TR es una revisión del texto del DSM-5. Para el futuro solo hay propuestas y no existe un DSM-6.",
      "Las propuestas del comité estratégico incluyen un dominio de factores contextuales.|V",
      "Los sesgos atencionales consisten en atender de forma preferente a lo amenazante o negativo.|V",
      "La evitación experiencial es un proceso exclusivo de los trastornos de ansiedad.|F|Aparece también en el TOC y en el consumo de sustancias, y por eso es transdiagnóstica."
    ],
    q: [
      "Lucía tiene ansiedad social y Andrés, depresión. Ambos dan vueltas durante horas a lo que hicieron mal y evitan situaciones por miedo a sentirse peor. ¿Qué propone la lógica transdiagnóstica?|Tratar la rumiación y la evitación|Tratar primero el trastorno más grave|Tratar cada diagnóstico por separado|Comparten procesos que mantienen el malestar, y actuar sobre ellos puede ayudar a los dos.",
      "¿Qué proceso transdiagnóstico aparece de forma típica en el TAG, el TOC y la ansiedad social?|Intolerancia a la incertidumbre|Déficit de regulación emocional|Perfeccionismo|Vivir lo incierto como inaceptable aparece en TAG, TOC y ansiedad social. Los déficits de regulación emocional se asocian sobre todo al TLP.",
      "¿Qué cuatro dominios interactivos se proponen para el futuro DSM?|Contextuales, diagnósticos, biológicos y rasgos|Sociales, cognitivos, conductuales y afectivos|Genes, circuitos, conducta y autoinforme|Son factores contextuales, diagnósticos, biológicos y rasgos transdiagnósticos. Genes, circuitos y conducta son unidades de análisis de RDoC.",
      "¿Qué rasgo se sitúa en la base de muchos procesos transdiagnósticos?|El neuroticismo|El psicoticismo|La extraversión|El neuroticismo es la tendencia estable a experimentar emociones negativas."
    ],
    inc: [
      "Sobre el futuro del DSM|Ya hay fecha de publicación para el nuevo manual|El manual vigente sigue siendo el DSM-5-TR (2022)|Se propone combinar categorías y dimensiones|Solo hay propuestas del comité creado en 2024. No hay un DSM-6 ni fecha para un nuevo manual."
    ],
    seq: [],
    cls: [
      "Proceso transdiagnóstico|Rumiación y preocupación: pensamiento repetitivo; insomnio; TEPT|Intolerancia a la incertidumbre: lo incierto como amenaza; ansiedad social; TOC|Regulación emocional: modular la intensidad; TLP; sustancias"
    ] }
] }
);

// SAIMAP Psicología · Psicopatología · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Conciencia, atención, memoria y psicomotricidad", cap: 3, pir: "media", mods: [
  { t: "Conciencia y orientación",
    tip: "En psicopatología, la conciencia es el estado que permite darse cuenta de uno mismo y del entorno, y se explora en su nivel y en su campo. Las alteraciones cuantitativas descienden de la obnubilación al coma, y las cualitativas cambian la organización de lo que se capta. El delirium es un síndrome agudo y fluctuante con causa médica o tóxica, y en los cuadros orgánicos la orientación se pierde primero en el tiempo, luego en el espacio y por último en la propia identidad.",
    v: [
      "Obnubilación=Despierto, pero lento, poco claro y con dificultad para captar lo que ocurre",
      "Somnolencia=Tendencia a dormirse sin estímulos, aunque se despierta con facilidad",
      "Estupor=Solo responde a estímulos intensos, de forma breve e incompleta",
      "Coma=Ausencia de respuesta voluntaria incluso ante estímulos dolorosos",
      "Estado crepuscular=Campo de conciencia estrechado, conducta ordenada en apariencia y amnesia posterior",
      "Estado oniroide=Vivencia parecida a un sueño que mezcla percepciones reales y escenas imaginadas",
      "Delirium=Alteración aguda y fluctuante de la atención y la conciencia con causa médica o tóxica",
      "Doble orientación=Saber dónde se está y, a la vez, dar al lugar una interpretación delirante"
    ],
    g: [
      "El nivel en que solo se responde a estímulos intensos, de forma breve e incompleta, se llama ___.|estupor|coma|somnolencia",
      "Preguntar «¿cómo se llama?» explora la orientación ___.|autopsíquica|alopsíquica|temporal",
      "En el delirium y las demencias suele perderse primero la orientación ___.|temporal|espacial|autopsíquica",
      "El estado crepuscular aparece en la epilepsia y en cuadros ___.|disociativos|depresivos|maníacos",
      "El delirium se instaura de forma ___, en horas o días.|aguda|insidiosa|progresiva"
    ],
    tf: [
      "Las alteraciones cuantitativas de la conciencia forman un continuo que va de la obnubilación al coma.|V",
      "En las psicosis suele perderse pronto la orientación temporal, igual que en el delirium.|F|En las psicosis la orientación suele conservarse, aunque puede aparecer una doble orientación.",
      "El delirium tiene siempre una causa médica, una sustancia o su abstinencia.|V",
      "En el estado oniroide, el campo de conciencia se estrecha y la conducta parece ordenada, con amnesia posterior.|F|Eso describe el estado crepuscular. El oniroide es una vivencia parecida a un sueño, a menudo con alucinaciones visuales."
    ],
    q: [
      "Un hombre de 80 años operado de cadera intenta arrancarse el gotero la segunda noche, cree estar en su casa y ve insectos en la pared. Por la mañana está tranquilo y por la tarde empeora. ¿Qué cuadro sugiere?|Delirium|Delirio|Estado crepuscular|El inicio brusco y el curso fluctuante orientan al delirium, un síndrome confusional que obliga a buscar la causa médica.",
      "Una paciente sabe que está en un hospital, pero afirma a la vez que es un cuartel secreto donde la vigilan, sin inquietarse por la contradicción. ¿Qué presenta?|Doble orientación|Desorientación alopsíquica|Estado oniroide|Conviven la orientación real y la interpretación delirante. Aparece en las psicosis, donde la orientación suele conservarse.",
      "¿Qué estado se sitúa por encima de la vigilia normal en el eje cuantitativo?|La hipervigilancia|La obnubilación|El estado crepuscular|La hipervigilancia es una alerta aumentada, propia de la ansiedad intensa, la manía o algunos tóxicos estimulantes.",
      "¿Qué orden de pérdida de la orientación es típico de los cuadros orgánicos?|Tiempo, espacio y persona|Persona, espacio y tiempo|Espacio, tiempo y persona|Primero se pierde la orientación temporal, luego la espacial y, por último, la autopsíquica."
    ],
    inc: [
      "Sobre el delirium|Se instaura de forma lenta, a lo largo de meses|Fluctúa a lo largo del día|Altera la atención y la conciencia del entorno|El delirium se instaura de forma aguda, en horas o días. No debe confundirse con el delirio, que es una idea delirante."
    ],
    seq: [
      "Descenso del nivel de conciencia|Obnubilación>Somnolencia>Estupor>Coma"
    ],
    cls: [
      "Alteración de la conciencia|Cuantitativa: obnubilación; somnolencia; estupor; coma|Cualitativa: estado crepuscular; estado oniroide; confusión"
    ] },
  { t: "Atención",
    tip: "La atención permite seleccionar estímulos, mantenerse en ellos y desplazarla, y la terminología clásica usa la raíz prosexia. Hay alteraciones cuantitativas, como la hipoprosexia, la aprosexia y la hiperprosexia, y cualitativas, como la distraibilidad, la inatención selectiva y la fijación. En la ansiedad se describe un sesgo atencional hacia la amenaza, medido con el Stroop emocional y el dot-probe, mientras que en la esquizofrenia predominan déficits atencionales generales.",
    v: [
      "Prosexia=Raíz griega con la que la terminología clásica designa la atención",
      "Hipoprosexia=Disminución de la capacidad de atender, frecuente en la depresión y la fatiga",
      "Aprosexia=Ausencia total de atención, propia del estupor o del delirium avanzado",
      "Hiperprosexia=Aumento de la atención, casi siempre hacia un foco concreto",
      "Distraibilidad=La atención salta con facilidad a estímulos irrelevantes, típica de la manía",
      "Inatención selectiva=Se dejan de atender aspectos amenazantes o incómodos",
      "Fijación atencional=Atención atrapada en un contenido del que cuesta salir",
      "Sesgo atencional=Captación preferente y rápida de la atención por estímulos de peligro"
    ],
    g: [
      "En el Stroop emocional, la persona ansiosa tarda más en nombrar el ___ de las palabras amenazantes.|color|significado|tamaño",
      "En el dot-probe, la respuesta es más rápida cuando la sonda sustituye al estímulo ___.|amenazante|neutro|central",
      "En la rumiación depresiva, la atención queda ___ en un contenido.|atrapada|dispersa|dividida",
      "La hipervigilancia es la forma más relevante de la ___.|hiperprosexia|hipoprosexia|distraibilidad",
      "Los sesgos atencionales se consideran un proceso ___ porque aparecen en varios trastornos.|transdiagnóstico|específico|categorial"
    ],
    tf: [
      "En sentido estricto, la persona ansiosa atiende demasiado bien a ciertos estímulos, y eso le resta recursos para lo demás.|V",
      "En la esquizofrenia predomina un sesgo atencional hacia la amenaza, igual que en los trastornos de ansiedad.|F|En la esquizofrenia predominan déficits generales: mantener la atención, filtrar lo irrelevante y procesar con rapidez.",
      "La aprosexia es una disminución leve de la atención, típica de la fatiga.|F|Eso es la hipoprosexia. La aprosexia es la ausencia total de atención, propia del estupor o del delirium avanzado.",
      "Quien atiende sobre todo al peligro encuentra más confirmaciones de que el mundo es peligroso, lo que podría mantener el trastorno.|V"
    ],
    q: [
      "En mitad de una frase, un paciente se fija en el reloj del entrevistador y cambia de tema, y poco después hace lo mismo con un ruido del pasillo. ¿Qué alteración muestra?|Distraibilidad|Hiperprosexia|Inatención selectiva|La atención salta con demasiada facilidad a estímulos irrelevantes. Es característica de la manía.",
      "Una persona con ansiedad social tarda más en decir «azul» ante la palabra «ridículo» escrita en azul que ante «ventana». ¿Qué paradigma se usa?|Stroop emocional|Dot-probe|Escucha dicótica|Se nombra el color de la tinta, y el significado amenazante de la palabra interfiere y enlentece la respuesta.",
      "En el dot-probe, ¿qué indica la rapidez ante la sonda que ocupa el lugar de la cara enfadada?|Que la atención ya estaba allí|Que la cara se procesó como neutra|Que la atención evitó la amenaza|La detección es más rápida porque la atención ya se había dirigido al estímulo amenazante.",
      "¿En qué cuadros es frecuente la hipoprosexia?|Depresión, fatiga y ansiedad intensa|Manía e intoxicación por estimulantes|Estupor grave y delirium avanzado|La hipoprosexia es una disminución. La ausencia total de atención, o aprosexia, corresponde al estupor y al delirium avanzado."
    ],
    inc: [
      "Sobre las alteraciones de la atención|La distraibilidad es típica de la rumiación depresiva|La fijación aparece en el TOC y en la rumiación|La hipervigilancia es típica de la ansiedad y del TEPT|La distraibilidad es característica de la manía. En la rumiación depresiva la atención queda atrapada, es decir, hay fijación."
    ],
    seq: [],
    cls: [
      "Alteración de la atención|Cuantitativa: hipoprosexia; aprosexia; hiperprosexia|Cualitativa: distraibilidad; inatención selectiva; fijación"
    ] },
  { t: "Memoria",
    tip: "Las alteraciones de la memoria se agrupan en amnesias, hipermnesias y paramnesias. La amnesia anterógrada impide fijar información nueva y la retrógrada borra lo anterior, a menudo con el gradiente de Ribot: lo reciente se pierde antes. La amnesia orgánica afecta sobre todo a lo nuevo, y la disociativa, a información autobiográfica importante. La confabulación rellena lagunas sin intención de engañar, a diferencia de la pseudología fantástica.",
    v: [
      "Amnesia anterógrada=Incapacidad de fijar información nueva desde el inicio del problema",
      "Amnesia retrógrada=Pérdida de recuerdos anteriores al inicio del problema",
      "Ley de Ribot=En la amnesia retrógrada orgánica, lo reciente se pierde antes que lo antiguo",
      "Criptomnesia=Un recuerdo se vive como una idea nueva y propia",
      "Ecmnesia=Revivir sucesos pasados como si estuvieran ocurriendo en el presente",
      "Jamais vu=Sensación de no haber vivido nunca algo conocido",
      "Confabulación=Relleno de lagunas de memoria con contenidos inventados sin intención de engañar",
      "Pseudología fantástica=Mentira patológica con relatos elaborados, sin déficit de memoria que la explique"
    ],
    g: [
      "La confabulación es típica del síndrome de ___, asociado al consumo crónico de alcohol.|Korsakoff|Cotard|Capgras",
      "La forma clínica más relevante de hipermnesia son los recuerdos intrusivos del ___.|TEPT|TOC|TAG",
      "Quien «inventa» una melodía que en realidad escuchó hace años presenta una ___.|criptomnesia|ecmnesia|confabulación",
      "El déjà vu puede aparecer en la epilepsia del lóbulo ___.|temporal|frontal|occipital",
      "En la amnesia disociativa, la fijación de información nueva suele ___.|conservarse|alterarse|agravarse"
    ],
    tf: [
      "Según la ley de Ribot, los recuerdos más antiguos son los primeros en perderse.|F|Es al revés: en la amnesia retrógrada orgánica lo reciente se pierde antes y lo antiguo se conserva mejor.",
      "El déjà vu es frecuente en la población general y no es patológico por sí mismo.|V",
      "Quien confabula miente de forma deliberada para ocultar sus fallos de memoria.|F|La confabulación rellena lagunas sin intención de engañar: la persona cree lo que cuenta.",
      "En la amnesia orgánica, la identidad personal se pierde tarde y solo en casos graves.|V"
    ],
    q: [
      "Tras un traumatismo craneal, un hombre no recuerda los meses previos al accidente, pero conserva con detalle su boda y su infancia. ¿Qué ilustra?|La ley de Ribot|Una amnesia disociativa|Una amnesia anterógrada|En la amnesia retrógrada orgánica, lo reciente se pierde antes y lo antiguo se conserva mejor.",
      "Un paciente ingresado, con consumo crónico de alcohol, cuenta con naturalidad que esa mañana ha ido al mercado. ¿Qué presenta?|Confabulación|Pseudología fantástica|Criptomnesia|Rellena una laguna de memoria con un contenido inventado y lo cree. Es típica del síndrome de Korsakoff.",
      "¿Qué pregunta clínica separa la confabulación de la pseudología fantástica?|Si hay una laguna de memoria|Si el relato es fantasioso|Si la persona cree lo que dice|En la confabulación, el relato tapa una laguna de memoria. En la pseudología fantástica no hay un déficit que lo explique.",
      "Tras un suceso muy estresante, una mujer olvida información personal importante, pero aprende cosas nuevas sin dificultad. ¿Qué amnesia sugiere?|Disociativa|Anterógrada|Orgánica retrógrada|La amnesia disociativa afecta a información autobiográfica relevante y suele conservar la fijación de información nueva."
    ],
    inc: [
      "Sobre las paramnesias|La ecmnesia es sentir que algo conocido nunca se vivió|La criptomnesia hace vivir un recuerdo como idea propia|El déjà vu no es patológico por sí mismo|Sentir que algo conocido nunca se ha vivido es el jamais vu. La ecmnesia es revivir el pasado como si fuera presente."
    ],
    seq: [],
    cls: [
      "Alteración de la memoria|Amnesia: anterógrada; retrógrada|Hipermnesia: recuerdos intrusivos del TEPT|Paramnesia: déjà vu; jamais vu; criptomnesia; ecmnesia"
    ] },
  { t: "Psicomotricidad, conciencia del yo e insight",
    tip: "La psicomotricidad incluye la agitación, la inhibición, la catatonía y la acatisia, y estereotipia, manierismo, tic y compulsión se diferencian por su finalidad y su voluntariedad. En la despersonalización y la desrealización el juicio de realidad se conserva («es como si»), a diferencia de las psicosis. Los síntomas de primer rango de Schneider tienen hoy menos peso diagnóstico, y el insight es una dimensión, no un todo o nada.",
    v: [
      "Catalepsia=Mantenimiento de las posturas impuestas",
      "Flexibilidad cérea=El cuerpo se deja moldear como si fuera de cera",
      "Estereotipia=Movimiento repetitivo sin finalidad, como balancearse durante horas",
      "Manierismo=Movimiento con finalidad, pero hecho de forma extravagante",
      "Tic=Movimiento involuntario, súbito y breve",
      "Acatisia=Inquietud subjetiva y necesidad de moverse por efecto de los antipsicóticos",
      "Desrealización=El entorno parece irreal, lejano o de cartón piedra, con el juicio conservado",
      "Insight=Reconocer el problema, atribuirle los síntomas y aceptar que puede necesitar ayuda"
    ],
    g: [
      "Saludar con un giro teatral de muñeca es un ejemplo de ___.|manierismo|estereotipia|tic",
      "En la despersonalización se conserva el juicio de ___.|realidad|valor|identidad",
      "En el DSM-5-TR, la catatonía exige al menos ___ de 12 síntomas.|3|5|2",
      "El insight suele ser ___ en las psicosis y en la manía.|pobre|bueno|variable",
      "La inhibición psicomotriz es típica de la ___ grave.|depresión|manía|ansiedad"
    ],
    tf: [
      "Una compulsión es un acto intencional que reduce el malestar, aunque se vive como forzado.|V",
      "Los síntomas de primer rango de Schneider siguen siendo la base del diagnóstico de esquizofrenia en el DSM-5-TR.|F|Hoy tienen menos peso porque aparecen en otros cuadros, y el DSM-5 retiró el trato especial a las voces que comentan o dialogan.",
      "El insight es una dimensión y no un fenómeno de todo o nada.|V",
      "El tic es un movimiento con finalidad, ejecutado de forma extravagante.|F|Eso es el manierismo. El tic es un movimiento involuntario, súbito y breve."
    ],
    q: [
      "Una persona con manía duerme dos horas, gasta sus ahorros y afirma estar «mejor que nunca». ¿Qué cabe decir de su insight?|Que es muy bajo|Que es variable|Que es aceptable|Un insight bajo, frecuente en la manía y en las psicosis, complica la búsqueda de ayuda y la adherencia al tratamiento.",
      "Una joven dice sentirse como si se observara desde fuera, como un autómata, pero sabe que sigue siendo ella. ¿Qué presenta?|Despersonalización|Desrealización|Inserción del pensamiento|La extrañeza recae sobre uno mismo y el juicio de realidad se conserva. En la desrealización, lo extraño es el entorno.",
      "¿Cuál de estos fenómenos formaba parte de la lista de Schneider?|La percepción delirante|La alucinación visual|La doble orientación|La lista incluía el eco del pensamiento, las voces que dialogan o comentan, la inserción, el robo y la difusión del pensamiento y la percepción delirante.",
      "¿Qué distingue la acatisia de la agitación psicomotriz?|Es un efecto adverso de los antipsicóticos|Es un aumento desorganizado de la actividad|Aparece en la manía y en el delirium|La acatisia es inquietud subjetiva con necesidad de moverse por los antipsicóticos. La agitación aparece en la manía, el delirium o las psicosis."
    ],
    inc: [
      "Sobre los movimientos repetitivos|La estereotipia tiene una finalidad reconocible|El tic es involuntario, súbito y breve|La compulsión reduce el malestar|La estereotipia es un movimiento repetitivo sin finalidad. El movimiento con finalidad hecho de forma extravagante es el manierismo."
    ],
    seq: [],
    cls: [
      "Movimiento repetitivo|Estereotipia: sin finalidad; balancearse durante horas|Manierismo: con finalidad; saludo teatral|Tic: involuntario; parpadeo repentino"
    ] }
] },
{ n: 6, t: "Percepción, pensamiento, lenguaje y afectividad", cap: 3, pir: "alta", mods: [
  { t: "Percepción e imaginación",
    tip: "Las alteraciones perceptivas se dividen en distorsiones, en las que un objeto real se percibe alterado, y engaños perceptivos. La ilusión interpreta mal un estímulo real. La alucinación es una percepción sin objeto, en el espacio externo, con corporeidad y convicción, y la pseudoalucinación se localiza en el espacio interno. La alucinosis es una alucinación que se reconoce como irreal, típica de causas orgánicas o tóxicas.",
    v: [
      "Ilusión=Interpretación errónea de un estímulo real",
      "Pareidolia=Imagen con sentido formada a partir de un estímulo real, como caras en las nubes",
      "Alucinación=Percepción sin objeto, en el espacio externo, con corporeidad y convicción",
      "Pseudoalucinación=Percepción sin objeto en el espacio interno y sin corporeidad (Kandinsky, Jaspers)",
      "Alucinosis=Alucinación que la persona reconoce como irreal",
      "Formicación=Sensación de bichos bajo la piel, en la abstinencia o el consumo de cocaína",
      "Dismegalopsia=Ver los objetos más grandes o más pequeños de lo que son",
      "Alucinación refleja=Un estímulo en una modalidad sensorial produce un engaño perceptivo en otra"
    ],
    g: [
      "Oír voces en el ruido del agua, solo mientras suena, es una alucinación ___.|funcional|refleja|extracampina",
      "«Ver» a alguien detrás de la propia cabeza es una alucinación ___.|extracampina|autoscópica|negativa",
      "Las alucinaciones ___ apuntan más a causas orgánicas, al delirium o al consumo de sustancias.|visuales|auditivas|cenestésicas",
      "«Tengo los órganos podridos» describe una alucinación ___.|cenestésica|cinestésica|táctil",
      "La pseudoalucinación la describió Kandinsky y la precisó ___.|Jaspers|Schneider|Bleuler"
    ],
    tf: [
      "En la alucinación funcional, el estímulo real y la alucinación son de distinta modalidad.|F|Son de la misma modalidad y coexisten. Si la modalidad cambia, se trata de una alucinación refleja.",
      "Las alucinaciones auditivas son las más frecuentes en la esquizofrenia.|V",
      "Oír o ver brevemente a un ser querido fallecido durante el duelo indica un trastorno psicótico.|F|Una alucinación no implica psicosis, y en el duelo es frecuente. Importan el contexto, la convicción y el resto de la clínica.",
      "Las imágenes eidéticas y las postimágenes no implican, por sí solas, un trastorno.|V"
    ],
    q: [
      "Una persona con consumo crónico de alcohol oye voces amenazantes nítidas que suenan en la habitación, pero sabe que no son reales. ¿Qué presenta?|Una alucinosis|Una pseudoalucinación|Una ilusión|La persona reconoce la irrealidad de la percepción, algo típico de causas orgánicas o tóxicas como la alucinosis alcohólica.",
      "De noche, el abrigo colgado en la puerta parece una persona hasta que se enciende la luz. ¿Qué fenómeno es?|Una ilusión|Una alucinación|Una alucinosis|Un estímulo real se interpreta mal. En la alucinación no habría ningún objeto que percibir.",
      "Un paciente dice que la voz «suena dentro de la cabeza», sin la nitidez de una voz real, y la reconoce como extraña. ¿Qué describe?|Una pseudoalucinación|Una alucinación funcional|Una alucinosis|Se localiza en el espacio subjetivo interno y carece de corporeidad, los rasgos que describieron Kandinsky y Jaspers.",
      "Una mujer con pérdida de visión ve escenas nítidas que sabe que no existen, sin ningún otro síntoma. ¿Qué cuadro lo explica?|Síndrome de Charles Bonnet|Síndrome de Clérambault|Síndrome de Korsakoff|Las alucinaciones visuales en personas con pérdida de visión no indican psicosis. Son el síndrome de Charles Bonnet."
    ],
    inc: [
      "Sobre las formas especiales de alucinación|La negativa consiste en verse a uno mismo|La refleja cambia de modalidad sensorial|Las hipnagógicas aparecen al dormirse|Verse a uno mismo es la alucinación autoscópica. La negativa consiste en no percibir algo que está presente."
    ],
    seq: [],
    cls: [
      "Engaño perceptivo|Ilusión: estímulo real mal interpretado; pareidolia|Alucinación: sin objeto; espacio externo; corporeidad|Pseudoalucinación: espacio interno; sin corporeidad"
    ] },
  { t: "Pensamiento: forma y curso",
    tip: "Los trastornos formales del pensamiento se infieren del discurso, y la referencia para describirlos es la escala TLC de Andreasen (1979). La circunstancialidad da rodeos pero llega a la meta, y la tangencialidad no llega. La fuga de ideas, típica de la manía, salta con conexiones superficiales, mientras que el descarrilamiento, propio de la esquizofrenia, salta sin conexión comprensible. Ningún síntoma aislado basta para diagnosticar.",
    v: [
      "Escala TLC=Instrumento de Andreasen (1979) que define cada trastorno formal con ejemplos",
      "Taquipsiquia=Pensamiento acelerado, a menudo con presión del habla",
      "Bradipsiquia=Pensamiento lento, con respuestas tardías y escasas",
      "Circunstancialidad=Discurso con rodeos y detalles innecesarios que acaba llegando a la meta",
      "Tangencialidad=La respuesta se aleja de la pregunta desde el principio y no la contesta",
      "Descarrilamiento=Ideas sucesivas sin relación comprensible entre ellas",
      "Bloqueo=Interrupción brusca del curso del pensamiento a mitad de frase",
      "Pobreza del contenido=Se habla lo suficiente, pero se transmite muy poca información"
    ],
    g: [
      "«Vengo de la playa, playa de arena, arena de reloj» ilustra la ___.|fuga de ideas|perseveración|incoherencia",
      "Cuando la desorganización alcanza a la propia frase, que pierde la gramática, se habla de ___.|incoherencia|tangencialidad|descarrilamiento",
      "Repetir la misma idea o palabra ante preguntas diferentes se denomina ___.|perseveración|verbigeración|bloqueo",
      "En el DSM-5-TR, el discurso ___ es uno de los cinco síntomas de la esquizofrenia.|desorganizado|circunstancial|acelerado",
      "La pobreza del lenguaje forma parte de los síntomas ___ de la esquizofrenia.|negativos|positivos|cognitivos"
    ],
    tf: [
      "En la tangencialidad, el discurso da un rodeo, pero termina respondiendo a la pregunta.|F|Eso es la circunstancialidad. En la tangencialidad, la respuesta se aleja desde el principio y no llega a contestar.",
      "En la fuga de ideas se conserva cierta conexión entre una idea y la siguiente.|V",
      "La pobreza del lenguaje solo aparece en la esquizofrenia, como síntoma negativo.|F|También aparece en la depresión grave. Lo que orienta el diagnóstico es el conjunto, no un síntoma aislado.",
      "Los trastornos formales del pensamiento se infieren a partir del discurso.|V"
    ],
    q: [
      "Ante «¿cómo ha dormido?», un paciente habla del colchón, de la vecina y del calor, y acaba diciendo «al final, mal». ¿Qué presenta?|Circunstancialidad|Tangencialidad|Descarrilamiento|El discurso da rodeos con detalles innecesarios, pero llega a la meta. En la tangencialidad no llegaría.",
      "Un paciente con esquizofrenia pasa de una idea a otra sin que se entienda la relación entre ellas, aunque cada frase es gramatical. ¿Qué alteración es?|Descarrilamiento|Fuga de ideas|Incoherencia|Las ideas se suceden sin relación comprensible. En la incoherencia se perdería también la gramática de la frase.",
      "¿Qué pregunta permite distinguir la fuga de ideas del descarrilamiento?|Si se entiende el paso entre ideas|Si el discurso llega a la meta|Si el habla es rápida y abundante|En la fuga de ideas, los saltos tienen una conexión superficial. En el descarrilamiento no se entiende el paso de una idea a otra.",
      "Una paciente se queda en blanco a mitad de frase y no sabe cómo seguir. ¿Qué alteración describe?|Bloqueo|Perseveración|Pobreza del lenguaje|Es una interrupción brusca del curso del pensamiento. La perseveración repite la misma idea ante preguntas distintas."
    ],
    inc: [
      "Sobre los trastornos formales del pensamiento|La fuga de ideas es característica de la esquizofrenia|La circunstancialidad acaba llegando a la meta|El bloqueo interrumpe el curso de forma brusca|La fuga de ideas es típica de la manía. En la esquizofrenia es característico el descarrilamiento."
    ],
    seq: [],
    cls: [
      "Alteración del pensamiento|Velocidad: taquipsiquia; bradipsiquia|Dirección y conexión: circunstancialidad; tangencialidad; descarrilamiento; bloqueo|Producción: neologismos; pobreza del lenguaje; pobreza del contenido"
    ] },
  { t: "Pensamiento: contenido",
    tip: "Una idea delirante es una creencia falsa, firme, incorregible y no compartida por el grupo cultural. Jaspers propuso la certeza subjetiva, la incorregibilidad y la imposibilidad del contenido, este último criterio hoy matizado. El delirio primario es incomprensible y adopta tres formas, y el secundario deriva de otra vivencia. La idea sobrevalorada es aceptable en sí misma, y la obsesión se vive como propia, a diferencia de la inserción del pensamiento.",
    v: [
      "Idea delirante=Creencia falsa, firme, incorregible y no compartida por el grupo cultural",
      "Percepción delirante=Un estímulo percibido con normalidad recibe un significado anómalo e incorregible",
      "Ocurrencia delirante=La idea surge de golpe, sin percepción previa",
      "Humor delirante=Sensación inquietante de que algo extraño está pasando, sin saber qué",
      "Delirio secundario=Creencia comprensible a partir de otra vivencia, como el ánimo depresivo",
      "Síndrome de Cotard=Contenido nihilista: «estoy muerto», «no tengo órganos»",
      "Síndrome de Frégoli=Personas desconocidas son en realidad la misma persona disfrazada",
      "Idea sobrevalorada=Creencia aceptable sostenida con intensidad desproporcionada que domina la vida"
    ],
    g: [
      "La convicción de que la pareja es infiel recibe el nombre de síndrome de ___.|Otelo|Clérambault|Capgras",
      "Capgras y Frégoli son síndromes de ___ errónea.|identificación|percepción|atribución",
      "Cuando dos personas que conviven comparten un delirio se habla de ___.|folie à deux|delirio secundario|humor delirante",
      "El tema delirante más frecuente es el de ___.|persecución|grandeza|referencia",
      "En el DSM-5-TR, el trastorno delirante exige una duración de al menos ___.|1 mes|3 meses|6 meses"
    ],
    tf: [
      "Un delirio celotípico deja de serlo si se descubre que la pareja es infiel de verdad.|F|Sigue siendo delirio porque la convicción no se basa en razones. Por eso se matiza el criterio de imposibilidad.",
      "El humor delirante suele preceder a la percepción y a la ocurrencia delirantes.|V",
      "La convicción de estar gorda en la anorexia es un ejemplo de idea sobrevalorada.|V",
      "En la CIE-11, el trastorno delirante exige una duración mínima de 1 mes, como en el DSM-5-TR.|F|La CIE-11 exige 3 meses o más, y el DSM-5-TR, 1 mes o más."
    ],
    q: [
      "Un hombre afirma que un vecino le introduce pensamientos con una antena y que esas ideas no son suyas. ¿Qué presenta?|Inserción del pensamiento|Una obsesión de daño|Difusión del pensamiento|El pensamiento se vive como ajeno, metido desde fuera. La obsesión, en cambio, se reconoce como propia.",
      "«La farola parpadeó y supe que me habían elegido.» ¿Qué forma de delirio primario ilustra?|Percepción delirante|Ocurrencia delirante|Humor delirante|Una percepción normal recibe un significado delirante. Schneider la incluyó entre los síntomas de primer rango.",
      "Una mujer está convencida de que un presentador famoso está enamorado de ella y le envía señales. ¿Qué tipo de delirio es?|Erotomaníaco|Celotípico|Nihilista|Es el síndrome de Clérambault: alguien, a menudo de mayor estatus, está enamorado de uno.",
      "Un paciente con depresión grave está convencido de haber arruinado a su familia, una idea que encaja con su ánimo. ¿Cómo se clasifica según Jaspers?|Delirio secundario|Delirio primario|Idea sobrevalorada|Es comprensible a partir de otra vivencia, el ánimo depresivo. El primario es incomprensible y no deriva de otra vivencia."
    ],
    inc: [
      "Sobre el delirio|El delirio primario es comprensible a partir del ánimo|Jaspers propuso el criterio de incorregibilidad|El tema más frecuente es el de persecución|El delirio primario es incomprensible. El que se comprende a partir de otra vivencia, como el ánimo, es el secundario."
    ],
    seq: [],
    cls: [
      "Pensamiento no deseado|Obsesión: propia; egodistónica y resistida; TOC|Inserción del pensamiento: ajena; vivencia psicótica; esquizofrenia"
    ] },
  { t: "Lenguaje y afectividad",
    tip: "En psicopatología interesan alteraciones del habla como la logorrea, el mutismo, la ecolalia, la palilalia, la verbigeración o la coprolalia. La afectividad incluye el humor de fondo y las emociones concretas. El aplanamiento afecta a la cantidad de expresión emocional, y la paratimia, a su congruencia con el contenido. La anhedonia afecta a la capacidad de sentir placer, y la apatía, al interés y la iniciativa.",
    v: [
      "Logorrea=Habla excesiva y difícil de frenar, típica de la manía",
      "Palilalia=Repetir las propias palabras o sílabas finales",
      "Verbigeración=Repetición monótona de palabras o frases sin sentido",
      "Coprolalia=Emisión involuntaria de palabras obscenas, propia del síndrome de Tourette",
      "Mussitación=Murmullo en voz muy baja, casi sin mover los labios",
      "Paratimia=Afecto incongruente con el contenido de lo que se piensa o se dice",
      "Alexitimia=Dificultad para identificar y describir las propias emociones (Sifneos, 1973)",
      "Ambivalencia=Sentimientos opuestos simultáneos hacia lo mismo"
    ],
    g: [
      "Bleuler consideró la ___ un rasgo fundamental de la esquizofrenia.|ambivalencia|anhedonia|alexitimia",
      "Repetir las palabras del interlocutor se denomina ___.|ecolalia|palilalia|glosolalia",
      "Un humor malhumorado y desagradable se describe como ___.|disfórico|eufórico|lábil",
      "La disartria es una dificultad para articular de causa ___.|neurológica|psicógena|afectiva",
      "La belle indifférence se describió en la ___.|conversión|catatonía|depresión"
    ],
    tf: [
      "La alexitimia es un trastorno de la afectividad con criterios diagnósticos propios.|F|Es un rasgo dimensional, no un diagnóstico (Sifneos, 1973).",
      "Alguien sin ganas de salir con sus amigos que, si lo arrastran, disfruta, muestra apatía sin anhedonia.|V",
      "La belle indifférence se considera hoy un signo muy específico de la conversión.|F|Es una aparente despreocupación ante un síntoma grave que hoy se considera poco específica.",
      "El sentimiento de falta de sentimientos es típico de la depresión grave.|V"
    ],
    q: [
      "Un paciente sonríe mientras describe el accidente en el que murió su hermano. ¿Qué alteración muestra?|Paratimia|Aplanamiento afectivo|Labilidad afectiva|Falla la congruencia entre el afecto y el contenido. En el aplanamiento fallaría la cantidad de expresión.",
      "Una paciente cuenta una buena noticia sin ningún cambio en la cara, con voz monótona y casi sin gestos. ¿Qué presenta?|Aplanamiento afectivo|Incontinencia afectiva|Labilidad afectiva|Se reduce la cantidad de expresión emocional, un síntoma negativo de la esquizofrenia.",
      "Tras una lesión cerebral, un hombre llora ante estímulos mínimos y no puede contener el llanto aunque quiera. ¿Qué describe?|Incontinencia afectiva|Paratimia|Ambivalencia afectiva|No puede contener la expresión emocional aunque quiera, algo que ocurre tras algunas lesiones cerebrales.",
      "¿Qué alteración del habla es propia del síndrome de Tourette?|Coprolalia|Verbigeración|Glosolalia|Es la emisión involuntaria de palabras obscenas. La verbigeración repite frases sin sentido de forma monótona."
    ],
    inc: [
      "Sobre las alteraciones del lenguaje|El mutismo exige una lesión que lo explique|La ecolalia aparece en la catatonía y en el autismo|La logorrea es típica de la manía|El mutismo es la ausencia de habla sin lesión que la explique. Aparece en la catatonía, la depresión grave y algunos cuadros disociativos."
    ],
    seq: [],
    cls: [
      "Alteración afectiva|Aplanamiento: cantidad de expresión; rostro inexpresivo; síntoma negativo|Paratimia: congruencia con el contenido; sonreír ante un accidente"
    ] }
] },
{ n: 7, t: "Trastornos de ansiedad", cap: 4, pir: "alta", mods: [
  { t: "Miedo, ansiedad y fobia específica",
    tip: "El miedo responde a una amenaza presente, y la ansiedad anticipa una amenaza futura, y ambos se expresan en el triple sistema de respuesta de Lang (1968). La fobia específica dura típicamente 6 meses o más, y la de sangre-inyecciones-heridas tiene una respuesta bifásica que se trata con la tensión aplicada de Öst. Mowrer (1947) explica la adquisición por condicionamiento y el mantenimiento por evitación, y Seligman (1971) añadió la preparación.",
    v: [
      "Triple sistema de respuesta=Expresión cognitiva, fisiológica y motora de la ansiedad (Lang, 1968)",
      "Ley de Yerkes-Dodson=Rendimiento en U invertida, máximo con una activación moderada",
      "Respuesta bifásica=Subida de la frecuencia cardiaca y la tensión seguida de una caída vasovagal",
      "Tensión aplicada=Técnica de Öst que tensa los músculos para evitar la caída de la presión arterial",
      "Teoría bifactorial=Miedo adquirido por condicionamiento clásico y mantenido por evitación (Mowrer)",
      "Preparación=Facilidad biológica para condicionar miedos con relevancia evolutiva (Seligman)",
      "Aprendizaje vicario=Adquirir un miedo al ver la reacción de otro, como la madre ante una cucaracha",
      "Teorías no asociativas=Defienden que algunos miedos son innatos (Menzies y Clarke)"
    ],
    g: [
      "Watson y Rayner emparejaron una rata blanca con un ___.|ruido metálico|destello de luz|soplo de aire",
      "La fobia específica dura típicamente ___ o más.|6 meses|1 mes|12 meses",
      "Ver a la madre gritar ante una cucaracha es una vía de adquisición ___.|vicaria|directa|informativa",
      "La heredabilidad de los trastornos de ansiedad se sitúa aproximadamente entre el 30 y el ___.|50 %|70 %|40 %",
      "La exposición actúa por aprendizaje ___ más que por borrado del miedo.|inhibitorio|vicario|latente"
    ],
    tf: [
      "En la fobia a la sangre-inyecciones-heridas, la frecuencia cardiaca aumenta de forma sostenida, como en otras fobias.|F|Es una respuesta bifásica: subida inicial seguida de una caída vasovagal que puede acabar en desmayo.",
      "El caso de Albert fue un caso único, sin control ni medidas objetivas.|V",
      "Según la ley de Yerkes-Dodson, el rendimiento aumenta de forma lineal con la activación.|F|Sigue una U invertida: es máximo con una activación moderada y cae con poca o con demasiada.",
      "Desde el DSM-5, el TOC y el TEPT ya no forman parte del capítulo de trastornos de ansiedad.|V"
    ],
    q: [
      "Una estudiante de enfermería se marea y llega a desmayarse cada vez que ve una extracción de sangre. ¿Qué técnica está indicada de forma específica?|La tensión aplicada|La relajación muscular|La respiración lenta|La tensión aplicada de Öst evita la caída de la tensión arterial propia de la respuesta bifásica.",
      "Según Mowrer, ¿qué explica que un miedo condicionado no se extinga?|La evitación reforzada negativamente|La generalización a otros estímulos|La preparación biológica del estímulo|En la segunda fase, la evitación reduce la ansiedad, se refuerza negativamente e impide que el miedo se extinga.",
      "Un niño que nunca ha tenido un mal encuentro con perros les teme porque sus padres repiten que muerden. ¿Qué vía de Rachman ilustra?|Transmisión de información|Aprendizaje vicario|Condicionamiento directo|Rachman (1977) describió tres vías: condicionamiento directo, aprendizaje vicario y transmisión de información.",
      "¿Qué tipo de fobia específica suele empezar más tarde?|La situacional|La de animales|La de alturas|Las fobias a animales empiezan pronto, y las situacionales, como a los aviones o los ascensores, más tarde."
    ],
    inc: [
      "Sobre la fobia específica|Se especifica el tipo entre tres categorías|Suele empezar en la infancia|En el ESEMeD-España fue el segundo en prevalencia vital|Se especifican cinco tipos: animal, entorno natural, sangre-inyecciones-heridas, situacional y otros."
    ],
    seq: [
      "Teoría bifactorial de Mowrer|Condicionamiento clásico del miedo>Evitación de la situación temida>Reducción de la ansiedad>Refuerzo negativo de la evitación>Ausencia de extinción del miedo"
    ],
    cls: [
      "Tipo de fobia específica|Entorno natural: alturas; tormentas; agua|Situacional: aviones; ascensores|Animal: serpientes; arañas; perros"
    ] },
  { t: "Trastorno de ansiedad social",
    tip: "El trastorno de ansiedad social es un miedo intenso a situaciones en las que la persona puede ser examinada, cuyo núcleo es el miedo a la evaluación negativa, y dura típicamente 6 meses o más. La timidez es un rasgo frecuente, y la mayoría de las personas tímidas no tiene el trastorno. Clark y Wells (1995) destacan el procesamiento de uno mismo como objeto social y las conductas de seguridad, y Rapee y Heimberg (1997), la comparación con el estándar que se cree que esperan los demás.",
    v: [
      "Evaluación negativa=Temor a que la actuación o los síntomas lleven a la humillación o al rechazo",
      "Solo actuación=Especificador cuando el miedo se limita a hablar o actuar en público",
      "Timidez=Rasgo dimensional muy frecuente que no implica un trastorno",
      "Inhibición conductual=Tendencia infantil a retraerse ante lo nuevo, descrita por Kagan",
      "Conductas de seguridad=Acciones para prevenir lo temido que impiden comprobar que no ocurre",
      "Procesamiento posterior=Rumiación post-evento que refuerza la idea de fracaso",
      "Yo como objeto social=Imagen de cómo se cree que le ven a uno, construida desde sensaciones internas",
      "Estándar de la audiencia=Lo que la persona cree que los demás esperan de su actuación"
    ],
    g: [
      "La prevalencia anual del trastorno de ansiedad social en Estados Unidos ronda el ___.|7 %|2 %|12 %",
      "El trastorno de ansiedad social suele empezar en la ___.|adolescencia|infancia|adultez",
      "No mirar a los ojos durante una conversación es una conducta de ___.|seguridad|escape|comprobación",
      "El DSM-5-TR ya no usa «fobia ___» como sinónimo del trastorno de ansiedad social.|social|simple|escolar",
      "El solapamiento con el trastorno de la personalidad ___ es grande, aunque este es más generalizado.|evitativa|dependiente|esquizoide"
    ],
    tf: [
      "La mayoría de las personas tímidas cumple criterios del trastorno de ansiedad social.|F|La timidez es un rasgo frecuente. La diferencia está en la intensidad, la evitación, el malestar y el deterioro.",
      "En el modelo de Clark y Wells, las conductas de seguridad pueden empeorar la actuación.|V",
      "Según los modelos cognitivos, el problema central de la ansiedad social es la falta de habilidades sociales.|F|El problema es la atención autocentrada y las conductas que impiden desmentir las predicciones negativas.",
      "Entre los síntomas fisiológicos de la ansiedad social, preocupan sobre todo los visibles, como el rubor o el temblor.|V"
    ],
    q: [
      "Nuria tarda en soltarse en una cena con gente nueva, pero acaba disfrutando. Marcos ha rechazado un ascenso para no hablar en reuniones y repasa cada frase durante días. ¿Quién tiene un trastorno?|Solo Marcos|Ambos, en distinto grado|Solo Nuria|La timidez de Nuria no implica un trastorno. En Marcos hay evitación, malestar intenso y deterioro.",
      "«Me noto rojo, así que se me ve rojísimo.» ¿Qué proceso del modelo de Clark y Wells ilustra?|Procesarse como objeto social|Comparación con el estándar|Interpretación catastrófica|La persona construye la imagen de cómo la ven desde sus sensaciones internas. La comparación con el estándar es de Rapee y Heimberg.",
      "Según Rapee y Heimberg (1997), ¿qué aumenta la probabilidad estimada de evaluación negativa?|La distancia con el estándar esperado|El procesamiento anticipatorio previo|La falta de habilidades sociales|Cuanto mayor es la distancia entre la imagen que vería la audiencia y el estándar esperado, más ansiedad aparece.",
      "Una persona solo siente ansiedad intensa al dar conferencias, y no en otras situaciones sociales. ¿Qué especificador corresponde?|Solo actuación|Generalizado|Con inhibición conductual|El especificador «solo actuación» se usa cuando el miedo se limita a hablar o actuar en público."
    ],
    inc: [
      "Sobre la ansiedad social|Sin tratamiento tiende a remitir en la adultez|Suele empezar en la adolescencia|Su núcleo es el miedo a la evaluación negativa|Sin tratamiento, el trastorno de ansiedad social tiende a la cronicidad."
    ],
    seq: [
      "Procesamiento en la ansiedad social (Clark y Wells)|Procesamiento anticipatorio>Atención autocentrada y conductas de seguridad en la situación>Procesamiento posterior"
    ],
    cls: [
      "Modelo cognitivo de la ansiedad social|Clark y Wells (1995): objeto social; conductas de seguridad; procesamiento posterior|Rapee y Heimberg (1997): representación ante la audiencia; estándar esperado"
    ] },
  { t: "Trastorno de pánico y agorafobia",
    tip: "Una crisis de pánico alcanza su máximo en minutos con al menos 4 de 13 síntomas. El trastorno de pánico exige crisis inesperadas y recurrentes, seguidas de un mes o más de inquietud o de un cambio desadaptativo de la conducta. Clark (1986) sitúa la clave en la interpretación catastrófica de sensaciones corporales, y la crisis no es peligrosa en sí misma. Desde el DSM-5, pánico y agorafobia son diagnósticos independientes.",
    v: [
      "Crisis de pánico=Miedo súbito que alcanza su máximo en minutos con al menos 4 de 13 síntomas",
      "Interpretación catastrófica=Lectura de sensaciones corporales como signo de peligro inminente",
      "Sensibilidad a la ansiedad=Creencia de que las sensaciones de nerviosismo son dañinas (Reiss y McNally)",
      "Falsa alarma=Reacción de miedo sin peligro real, según Barlow",
      "Alarma aprendida=Reacción de miedo que queda condicionada a señales",
      "Condicionamiento interoceptivo=Las sensaciones corporales se vuelven señales de una nueva crisis",
      "Detector de asfixia=Mecanismo que Klein (1993) supuso demasiado sensible en el pánico",
      "Pruebas de provocación=CO₂, hiperventilación o lactato para estudiar las hipótesis del pánico"
    ],
    g: [
      "La agorafobia exige miedo en al menos ___ de 5 situaciones.|2|3|4",
      "La prevalencia anual del trastorno de pánico ronda el ___.|2-3 %|7 %|0,5 %",
      "La sensibilidad a la ansiedad se mide con el ___.|ASI|Y-BOCS|TLC",
      "El ataque de pánico es, además, un ___ aplicable a cualquier trastorno.|especificador|criterio|subtipo",
      "Hasta el ___ se hablaba de trastorno de pánico con o sin agorafobia.|DSM-IV|DSM-III|DSM-5"
    ],
    tf: [
      "Una crisis de pánico muy intensa puede provocar un infarto por sí misma.|F|La crisis es muy intensa, pero no es peligrosa en sí misma. La mantiene la interpretación catastrófica de las sensaciones.",
      "Las crisis esperadas, ligadas a una situación temida, también existen.|V",
      "Para diagnosticar agorafobia es necesario que existan crisis de pánico previas.|F|Desde el DSM-5, la agorafobia puede existir sin pánico. Si se cumplen ambos, se diagnostican los dos.",
      "La sensibilidad a la ansiedad predice de forma prospectiva la aparición de crisis.|V"
    ],
    q: [
      "Ana ha tenido varias crisis inesperadas, vive pendiente de que se repitan y desde hace más de 6 meses evita el metro y las colas o solo sale acompañada. ¿Qué se diagnostica según el DSM-5-TR?|Pánico y agorafobia por separado|Pánico con agorafobia, en uno|Solo agorafobia con crisis|Desde el DSM-5 son diagnósticos independientes: si se cumplen ambos, se diagnostican los dos.",
      "Tras subir la escalera, un hombre nota palpitaciones, piensa que le va a dar un infarto y su ansiedad se dispara. ¿Qué modelo lo explica mejor?|El de Clark (1986)|El de Clark y Wells (1995)|El de Wells (1995)|Clark (1986) sitúa la clave del pánico en la interpretación catastrófica. Clark y Wells (1995) es el modelo de la ansiedad social.",
      "¿Qué propuso Klein (1993) para explicar el pánico?|Un detector de asfixia hipersensible|La interpretación catastrófica|El condicionamiento interoceptivo|Es la hipótesis de la falsa alarma de asfixia, que se estudia con pruebas de provocación como el CO₂, la hiperventilación o el lactato.",
      "¿Cuánto tiempo de inquietud persistente tras una crisis exige el trastorno de pánico?|Un mes o más|Seis meses o más|Dos semanas o más|Al menos una crisis debe ir seguida de un mes o más de inquietud por nuevas crisis o de un cambio desadaptativo de la conducta."
    ],
    inc: [
      "Sobre la agorafobia|Solo se teme estar fuera de casa solo|Las situaciones pueden exigir un acompañante|Su prevalencia ronda el 1-2 %|Exige miedo en al menos 2 de 5 situaciones, como el transporte público, las multitudes o los espacios abiertos."
    ],
    seq: [
      "Círculo vicioso del pánico (Clark, 1986)|Desencadenante interno o externo>Amenaza percibida>Aprensión>Sensaciones corporales>Interpretación catastrófica"
    ],
    cls: [
      "Modelo del pánico|Barlow: falsa alarma; alarma aprendida; condicionamiento interoceptivo|Klein (1993): falsa alarma de asfixia; pruebas de provocación|Reiss y McNally (1985): sensibilidad a la ansiedad; ASI"
    ] },
  { t: "Trastorno de ansiedad generalizada y otros trastornos de ansiedad",
    tip: "El TAG se define por ansiedad y preocupación excesivas sobre diversos temas, la mayoría de los días durante 6 meses o más, con al menos 3 de 6 síntomas. Borkovec ve la preocupación como evitación cognitiva, Dugas destaca la intolerancia a la incertidumbre y Wells (1995) distingue la preocupación tipo 1 de la metapreocupación o tipo 2. La ansiedad por separación puede diagnosticarse en adultos, y el mutismo selectivo dura al menos un mes.",
    v: [
      "Evitación cognitiva=Preocupación verbal que reduce la activación somática y las imágenes aversivas",
      "Intolerancia a la incertidumbre=Vivir lo incierto como inaceptable y preocuparse para reducirlo (Dugas)",
      "Preocupación tipo 1=Pensamiento anticipatorio sobre sucesos externos y síntomas no cognitivos",
      "Metapreocupación=Preocupación tipo 2, sobre la propia preocupación (Wells, 1995)",
      "Creencias positivas=Ideas como «preocuparme me prepara», que activan la preocupación tipo 1",
      "Triple vulnerabilidad=Modelo de Barlow: diátesis biológica general, psicológica general y psicológica específica",
      "Ansiedad por separación=Miedo excesivo a separarse de las figuras de apego, diagnosticable en adultos",
      "Mutismo selectivo=No hablar en situaciones sociales concretas pese a hacerlo en otras"
    ],
    g: [
      "En adultos, el TAG exige al menos ___ de 6 síntomas asociados.|3|4|2",
      "En los niños, el TAG exige solo ___ síntoma asociado.|1|2|3",
      "Para Borkovec, la preocupación es una actividad sobre todo ___.|verbal|visual|motora",
      "La prevalencia anual del TAG ronda el ___.|3 %|7 %|1 %",
      "El mutismo selectivo exige al menos ___, sin contar el primero de escolarización.|un mes|seis meses|dos semanas"
    ],
    tf: [
      "En el modelo de Wells, la preocupación tipo 2 trata sobre sucesos externos de la vida diaria.|F|Esa es la tipo 1. La tipo 2, o metapreocupación, trata sobre la propia preocupación.",
      "La CIE-11 permite que el TAG coexista con la depresión.|V",
      "El TAG suele empezar antes que otros trastornos de ansiedad y tiene un curso breve.|F|Empieza más tarde que otros trastornos de ansiedad y tiene un curso crónico y fluctuante.",
      "Según Borkovec, el alivio que produce la preocupación la refuerza negativamente.|V"
    ],
    q: [
      "Laura se preocupa a diario por el trabajo, la salud de sus hijos y el dinero, y ahora piensa: «si sigo así, me voy a volver loca». ¿Qué expresa esta última idea?|Preocupación tipo 2|Preocupación tipo 1|Intolerancia a la incertidumbre|Es una creencia negativa sobre la propia preocupación (Wells, 1995). La tipo 1 trata de sucesos externos y síntomas no cognitivos.",
      "¿Qué componente de la triple vulnerabilidad de Barlow orienta la ansiedad hacia ciertos temas?|La psicológica específica|La psicológica general|La biológica general|Es aprendida. La psicológica general es la sensación de que los acontecimientos son incontrolables.",
      "¿En qué sitúa la CIE-11 el núcleo del TAG?|En la preocupación o aprensión general|En un recuento fijo de seis síntomas|En la evitación de situaciones sociales|La CIE-11 usa características esenciales, sin recuentos, y exige una duración de «varios meses».",
      "Una persona se preocupa para intentar reducir una incertidumbre que vive como inaceptable. ¿Qué modelo lo describe?|Dugas et al. (1998)|Borkovec|Rapee y Heimberg|Es el modelo de la intolerancia a la incertidumbre. Borkovec entiende la preocupación como evitación cognitiva."
    ],
    inc: [
      "Sobre los otros trastornos de ansiedad|La ansiedad por separación solo se diagnostica en niños|El mutismo selectivo se da en situaciones concretas|La CIE-11 no usa recuentos de síntomas|Desde el DSM-5, la ansiedad por separación puede diagnosticarse también en adultos."
    ],
    seq: [
      "Modelo metacognitivo del TAG (Wells, 1995)|Detonante>Creencias positivas>Preocupación tipo 1>Creencias negativas>Preocupación tipo 2"
    ],
    cls: [
      "Duración en el DSM-5-TR|6 meses o más: fobia específica; ansiedad social; agorafobia; TAG|1 mes o más: inquietud tras una crisis de pánico; mutismo selectivo"
    ] }
] },
{ n: 8, t: "Trastorno obsesivo-compulsivo y trastornos relacionados", cap: 4, pir: "alta", mods: [
  { t: "El TOC: clínica, dimensiones, insight y epidemiología",
    tip: "El TOC se define por obsesiones, compulsiones o ambas, y las compulsiones pueden ser actos mentales. Los síntomas deben consumir más de una hora al día o causar malestar o deterioro, y el trastorno es egodistónico. Se describen dimensiones combinables y se especifica el insight: con insight ausente y creencias delirantes se mantiene el TOC. El inicio es bimodal, con una mediana en torno a los 19-20 años.",
    v: [
      "Obsesión=Pensamiento, impulso o imagen recurrente, intrusivo y no deseado que genera malestar",
      "Compulsión=Conducta o acto mental repetitivo para reducir el malestar o evitar algo temido",
      "Neutralización=Acción manifiesta o mental que intenta anular una intrusión",
      "Egodistonía=Vivir un pensamiento o conducta como ajeno y contrario a uno mismo",
      "Insight pobre=La persona cree que sus creencias obsesivas probablemente son ciertas",
      "Relacionado con tics=Especificador por historia actual o pasada de un trastorno de tics",
      "Inicio bimodal=Un pico en la infancia, más en varones, y otro en la adultez temprana",
      "Y-BOCS=Instrumento para evaluar la gravedad del TOC"
    ],
    g: [
      "Para el diagnóstico, los síntomas deben consumir más de ___ al día o causar malestar significativo.|una hora|media hora|dos horas",
      "Contar o rezar en silencio para anular un pensamiento es una compulsión ___.|mental|motora|verbal",
      "La prevalencia anual del TOC se sitúa aproximadamente entre el 1,1 y el ___.|1,8 %|3,5 %|0,8 %",
      "La mediana de inicio del TOC ronda los ___ años.|19-20|12-13|30-35",
      "Hoy, la ___ se considera un trastorno separado y no una dimensión del TOC.|acumulación|simetría|comprobación"
    ],
    tf: [
      "Si el insight es ausente y hay creencias delirantes, se diagnostica un trastorno psicótico en lugar de TOC.|F|Se mantiene el diagnóstico de TOC con el especificador de insight ausente, y no se diagnostica un trastorno psicótico.",
      "Puede haber TOC sin rituales visibles, con compulsiones solo mentales.|V",
      "Tener TOC equivale a ser muy ordenado y maniático con la limpieza.|F|El TOC es egodistónico y causa malestar. Muchas obsesiones, como las de daño o las religiosas, no tienen que ver con el orden.",
      "Las dimensiones de síntomas pueden combinarse en la misma persona.|V"
    ],
    q: [
      "Raúl, padre reciente, tiene la imagen intrusiva de hacer daño a su bebé al pasar junto a un cuchillo. Le horroriza, esconde los cuchillos y repasa mentalmente el día. ¿Por qué le angustia tanto?|Porque choca con sus valores|Porque en el fondo lo desea|Porque no reconoce la idea como suya|El TOC es egodistónico: el contenido choca con sus valores y por eso angustia. La idea se reconoce como propia.",
      "Una paciente está convencida de que, si no se lava las manos, su familia enfermará, y ninguna prueba la hace dudar. ¿Qué especificador corresponde?|Insight ausente con creencias delirantes|Insight pobre por creencias probables|Insight aceptable con dudas parciales|Está convencida de que sus creencias son ciertas. Se mantiene el diagnóstico de TOC y no se diagnostica una psicosis.",
      "¿Qué rasgo tienen las compulsiones, según el DSM-5-TR?|Sin conexión realista con lo temido|Siempre son conductas observables|Generan placer al realizarlas|No están conectadas de forma realista con lo que pretenden evitar o son claramente excesivas, y pueden ser actos mentales.",
      "¿Por qué muchas personas con TOC tardan años en consultar?|Por vergüenza del contenido|Porque no sufren malestar|Porque los síntomas son leves|Muchas personas tardan años en pedir ayuda por la vergüenza que les produce el contenido de sus obsesiones."
    ],
    inc: [
      "Sobre las obsesiones|Se viven como deseadas y acordes con uno mismo|Son recurrentes y persistentes|La persona intenta neutralizarlas|Las obsesiones se viven como intrusivas y no deseadas: el TOC es egodistónico."
    ],
    seq: [],
    cls: [
      "Dimensión del TOC|Contaminación y limpieza: miedo a los gérmenes; lavados|Comprobación y daño: miedo a un incendio; revisar el gas|Simetría y orden: exactamente bien; alinear objetos"
    ] },
  { t: "Por qué se mantiene el TOC: modelos explicativos",
    tip: "En el modelo conductual, la compulsión reduce la ansiedad y se refuerza negativamente, lo que fundamenta la exposición con prevención de respuesta. Salkovskis (1985) parte de que las intrusiones son normales: lo patológico es valorarlas como señal de responsabilidad excesiva. Rachman describió la fusión pensamiento-acción, y el OCCWG, seis dominios de creencias. El efecto rebote de Wegner existe, pero es pequeño-moderado.",
    v: [
      "Exposición con prevención de respuesta=Tratamiento psicológico de elección del TOC, basado en el modelo conductual",
      "Intrusiones normales=Casi toda la población tiene pensamientos parecidos a las obsesiones",
      "Responsabilidad excesiva=Creencia de poder causar o tener que impedir daños graves (Salkovskis)",
      "Fusión moral=Creer que pensar algo es tan malo como hacerlo",
      "Fusión de probabilidad=Creer que pensar algo hace más probable que ocurra",
      "OCCWG=Grupo de trabajo que identificó seis dominios de creencias obsesivas",
      "Efecto rebote=Aumento de un pensamiento tras intentar suprimirlo (Wegner et al., 1987)",
      "Circuitos CSTC=Vías corticoestriado-talamocorticales implicadas en el TOC"
    ],
    g: [
      "Rachman y De Silva (___) mostraron que casi toda la población tiene intrusiones.|1978|1985|1997",
      "El efecto rebote parece relacionarse con la carga ___.|cognitiva|emocional|motora",
      "El metaanálisis de Abramowitz, Tolin y Street (2001) halló un rebote ___.|pequeño-moderado|grande y constante|prácticamente nulo",
      "La neuroimagen implica la corteza orbitofrontal, el cingulado anterior y el núcleo ___.|caudado|accumbens|rojo",
      "La neutralización alivia a corto plazo y, a la larga, ___ la creencia de responsabilidad.|confirma|debilita|extingue"
    ],
    tf: [
      "Según Salkovskis, lo patológico en el TOC es la mera presencia de pensamientos intrusivos.|F|Las intrusiones son normales. Lo patológico es valorarlas como señal de responsabilidad y neutralizarlas.",
      "Durante la propia supresión no se ha hallado un efecto inmediato consistente.|V",
      "Los seis dominios de creencias del OCCWG son exclusivos del TOC.|F|Ninguno es exclusivo del TOC, aunque juntos describen bien su terreno cognitivo.",
      "En el TOC, los modelos cognitivos y los neurobiológicos se complementan.|V"
    ],
    q: [
      "Un hombre cree que pensar en un accidente de su hermana hace más probable que ocurra. ¿Qué presenta?|Fusión de probabilidad|Fusión moral|Intolerancia a la incertidumbre|Supone que pensar algo lo hace más probable. La fusión moral equipara pensar algo con hacerlo.",
      "Una mujer piensa que, si la puerta está abierta y entran a robar, será culpable, así que vuelve a comprobarla. ¿Qué modelo destaca esa valoración?|Salkovskis (1985)|Wegner et al. (1987)|Mowrer (1947)|La valoración de responsabilidad excesiva motiva la neutralización, que alivia y, a la larga, confirma la creencia.",
      "En el estudio del oso blanco, ¿qué grupo mostró más pensamientos en la fase de expresión?|El que primero suprimía|El que expresaba desde el inicio|Ambos por igual|Es el efecto rebote, aunque el metaanálisis posterior lo sitúa en un tamaño pequeño-moderado.",
      "Según el modelo conductual, ¿por qué la compulsión mantiene el TOC?|Se refuerza negativamente al reducir la ansiedad|Se refuerza positivamente porque produce placer|Se extingue sola si no hay exposición al estímulo|Cada ritual impide comprobar que el malestar habría bajado solo y que lo temido no ocurre."
    ],
    inc: [
      "Sobre la supresión del pensamiento|Intentar no pensar en algo siempre lo multiplica|El efecto rebote es pequeño-moderado|Controlar las intrusiones no las elimina|La versión popular exagera: el rebote es pequeño-moderado y no hay efecto inmediato consistente durante la supresión."
    ],
    seq: [
      "Modelo cognitivo de Salkovskis|Intrusión normal>Valoración de responsabilidad>Malestar>Neutralización>Alivio que refuerza la creencia>Aumento de las intrusiones"
    ],
    cls: [
      "Fusión pensamiento-acción|Moral: pensarlo es tan malo como hacerlo|Probabilidad: pensarlo hace más probable que ocurra"
    ] },
  { t: "Trastorno dismórfico corporal, referencia olfativa e hipocondría en la CIE-11",
    tip: "El trastorno dismórfico corporal es la preocupación por defectos percibidos en el aspecto que los demás no ven o ven leves, con conductas repetitivas y un riesgo de suicidio elevado. El síndrome de referencia olfativa, nuevo en la CIE-11, es la creencia de desprender un olor corporal desagradable. La CIE-11 sitúa la hipocondría en el grupo obsesivo-compulsivo, y el DSM-5-TR la reparte entre ansiedad por enfermedad y síntomas somáticos.",
    v: [
      "Trastorno dismórfico corporal=Preocupación por defectos percibidos en el aspecto que otros no ven o ven leves",
      "Dismorfia muscular=Especificador del TDC: creer que el cuerpo es pequeño o poco musculoso",
      "Referencia olfativa=Creencia de desprender un olor corporal desagradable que otros no perciben",
      "Hipocondría=Miedo persistente a padecer una o más enfermedades graves o progresivas",
      "Ansiedad por enfermedad=Categoría del DSM-5-TR que recoge parte de la antigua hipocondría",
      "Camuflaje=Ocultar la zona del defecto percibido, una conducta repetitiva del TDC",
      "Ideas de referencia=Creer que los demás reaccionan a uno, como «se han apartado porque huelo»",
      "Grupo obsesivo-compulsivo=Capítulo que reúne preocupaciones y conductas repetitivas"
    ],
    g: [
      "La prevalencia del trastorno dismórfico corporal ronda el ___.|2 %|7 %|0,5 %",
      "La dismorfia muscular es más frecuente en ___.|varones|mujeres|niños",
      "Si la preocupación se refiere al peso dentro de un trastorno alimentario, se diagnostica ___.|este último|un TDC|ambos",
      "En el DSM-5-TR, el síndrome de referencia olfativa se incluiría entre los otros trastornos ___.|especificados|somáticos|psicóticos",
      "La CIE-11 ___ el trastorno dismórfico corporal en el grupo obsesivo-compulsivo.|reubicó|excluyó|dividió"
    ],
    tf: [
      "En el TDC el insight suele ser bueno, porque la persona sabe que el defecto es imaginario.|F|El insight a menudo es pobre, y se especifica su grado igual que en el TOC.",
      "El TDC no debe tomarse como simple vanidad, porque el riesgo de suicidio es elevado.|V",
      "El DSM-5-TR y la CIE-11 sitúan la hipocondría en el mismo capítulo.|F|La CIE-11 la sitúa en el grupo obsesivo-compulsivo. El DSM-5-TR la reparte entre ansiedad por enfermedad y síntomas somáticos.",
      "El síndrome de referencia olfativa no tiene categoría propia en el DSM-5-TR.|V"
    ],
    q: [
      "Iván, de 19 años, está convencido de que tiene la mandíbula torcida, pasa horas comparando su perfil y ha pedido presupuesto para dos cirugías. Sus amigos no ven nada raro. ¿Qué diagnóstico es más probable?|Trastorno dismórfico corporal|Trastorno de ansiedad social|Hipocondría|Hay preocupación por un defecto percibido que otros no ven, con conductas repetitivas como compararse.",
      "Una mujer se ducha varias veces al día y evita el contacto social porque cree que huele mal, aunque nadie lo nota. ¿Qué categoría de la CIE-11 corresponde?|Síndrome de referencia olfativa|Trastorno dismórfico corporal|Hipocondría|Es una categoría nueva de la CIE-11, dentro del grupo obsesivo-compulsivo, sin equivalente propio en el DSM-5-TR.",
      "¿Qué debate refleja la distinta ubicación de la hipocondría?|Si se parece al TOC o a lo somático|Si es un cuadro psicótico o afectivo|Si debe durar seis meses o solo uno|Sus comprobaciones y su búsqueda de seguridad la acercan al TOC, y su foco en el cuerpo, a los síntomas somáticos.",
      "¿Qué tendencia comparten ambos sistemas al formar el grupo obsesivo-compulsivo?|Reunir cuadros con conductas repetitivas|Agrupar los cuadros con ansiedad intensa|Separar los cuadros con insight pobre|Reúnen cuadros con preocupaciones y conductas repetitivas que buscan reducir el malestar. La CIE-11 lleva esta lógica más lejos."
    ],
    inc: [
      "Sobre la clasificación en la CIE-11|La hipocondría se sitúa en el distrés corporal|La referencia olfativa es una categoría nueva|La acumulación forma parte del grupo|La CIE-11 coloca la hipocondría dentro del grupo de trastornos obsesivo-compulsivos o relacionados."
    ],
    seq: [],
    cls: [
      "Grupo obsesivo-compulsivo|Solo en la CIE-11: referencia olfativa; hipocondría|En ambos sistemas: TOC; dismórfico corporal; acumulación; tricotilomanía"
    ] },
  { t: "Acumulación, tricotilomanía y excoriación; TOC frente a TPOC, rumiación y preocupación",
    tip: "El trastorno de acumulación es la dificultad persistente para desprenderse de posesiones, que congestiona los espacios vitales y empeora con la edad. La tricotilomanía y la excoriación son conductas repetitivas centradas en el cuerpo que no suelen ir precedidas de una obsesión. El TOC es egodistónico, y los rasgos del TPOC son egosintónicos. La rumiación da vueltas a lo ocurrido, y la preocupación anticipa problemas reales posibles.",
    v: [
      "Trastorno de acumulación=Dificultad persistente para desprenderse de posesiones, sea cual sea su valor",
      "Adquisición excesiva=Especificador por comprar o recoger cosas que no se necesitan",
      "Tricotilomanía=Arrancarse el pelo de forma repetida",
      "Excoriación=Pellizcarse o rascarse la piel hasta producir lesiones",
      "Conducta centrada en el cuerpo=Acto repetitivo sobre el propio cuerpo, por lo general sin obsesión previa",
      "Egosintonía=Vivencia de una conducta o idea como propia y correcta",
      "Rumiación depresiva=Pensamiento repetitivo sobre pérdidas, culpa y fracasos del pasado",
      "Pensamiento repetitivo=Proceso transdiagnóstico que comparten el TOC, la rumiación y la preocupación"
    ],
    g: [
      "La prevalencia del trastorno de acumulación se estima aproximadamente entre el 2 y el ___.|6 %|3 %|10 %",
      "El trastorno de acumulación ___ con la edad.|empeora|mejora|remite",
      "La tricotilomanía y la excoriación son más frecuentes en ___.|mujeres|varones|niños",
      "La preocupación del TAG se orienta sobre todo al ___.|futuro|pasado|presente",
      "Los rasgos del TPOC se viven de forma ___.|egosintónica|egodistónica|intrusiva"
    ],
    tf: [
      "En el trastorno de acumulación, guardar suele vivirse como absurdo e impuesto, igual que una compulsión.|F|A diferencia del TOC, guardar no suele vivirse como absurdo ni como algo impuesto.",
      "Si en casa de una persona con acumulación hay zonas despejadas, suele ser porque otras personas han intervenido.|V",
      "La tricotilomanía suele estar precedida por una obsesión, como las compulsiones del TOC.|F|No suele ir precedida por una obsesión. A menudo aparece con aburrimiento o tensión, de forma casi automática.",
      "El TOC y el TPOC pueden coexistir, aunque no son lo mismo.|V"
    ],
    q: [
      "Elena revisa diez veces que el gas está cerrado aunque sabe que lo cerró, y sufre al hacerlo. Su jefe exige un formato rígido en cada informe, no delega y no sufre por ello. ¿Qué describe mejor a cada uno?|Elena, TOC, y su jefe, rasgos de TPOC|Ambos, TOC de comprobación y orden|Elena, TPOC, y su jefe, TOC de simetría|Elena vive su conducta como egodistónica. El jefe la considera correcta, de forma egosintónica, lo propio del TPOC.",
      "Una mujer no puede cocinar porque la cocina está llena de periódicos, sufre al intentar tirarlos y no ve el problema que ven sus hijos. ¿Qué diagnóstico es más probable?|Trastorno de acumulación|TOC de contaminación|Rasgos de TPOC|Hay dificultad para desprenderse de posesiones, que congestiona los espacios vitales, a menudo con insight pobre.",
      "Un paciente da vueltas una y otra vez a sus fracasos pasados, en sintonía con su tristeza. ¿Qué fenómeno es?|Rumiación depresiva|Obsesión del TOC|Preocupación del TAG|La rumiación gira en torno a lo ocurrido y es congruente con el ánimo bajo. La preocupación anticipa problemas futuros.",
      "¿Qué distingue la tricotilomanía de una compulsión del TOC?|Que no suele seguir a una obsesión|Que no causa malestar ni deterioro|Que no hay intentos de dejarla|Exige intentos repetidos de dejarla y causa malestar, pero no suele estar precedida por una obsesión."
    ],
    inc: [
      "Sobre el diagnóstico diferencial del TOC|La preocupación del TAG se vive como egodistónica|La obsesión obliga a neutralizar|La rumiación es congruente con el ánimo bajo|La preocupación del TAG es egosintónica y se vive como útil. La egodistonía es propia de la obsesión."
    ],
    seq: [],
    cls: [
      "Fenómeno parecido al TOC|Obsesión: egodistónica; intrusiones; neutralización|Rasgos del TPOC: egosintónicos; perfeccionismo; rigidez generalizada|Rumiación depresiva: pasado; culpa; congruente con el ánimo"
    ] }
] }
);

// SAIMAP Psicología · Psicopatología · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Trastornos relacionados con el trauma y el estrés", cap: 4, pir: "alta", mods: [
  { t: "Trastorno de estrés postraumático",
    tip: "El TEPT del DSM-5-TR exige exposición a muerte, lesión grave o violencia sexual, real o como amenaza, por vivirla, presenciarla, saber que le ocurrió a un allegado o exponerse a detalles aversivos por trabajo. Pide intrusión (1), evitación (1), alteraciones cognitivas y del ánimo (2) y de la activación (2) durante más de un mes. La mayoría de las personas expuestas no lo desarrolla, y lo mantienen la evitación y una memoria del trauma mal elaborada.",
    v: [
      "Criterio A=Exposición a muerte, lesión grave o violencia sexual, real o como amenaza",
      "Intrusión=Recuerdos involuntarios, pesadillas o flashbacks disociativos ligados al suceso",
      "Expresión retardada=Especificador si los criterios completos aparecen 6 meses o más tras el suceso",
      "Con síntomas disociativos=Especificador por despersonalización o desrealización persistentes",
      "Estructura de miedo=Red de memoria del trauma que cambia al activarla con información incompatible",
      "Amenaza actual=Sensación de peligro presente que mantiene el TEPT según Ehlers y Clark",
      "Representación dual=Modelo de Brewin con memorias sensoriales y memorias verbales contextualizadas",
      "Disociación peritraumática=Factor de riesgo de TEPT presente durante el propio suceso"
    ],
    g: [
      "En el DSM-5-TR, el grupo D de alteraciones cognitivas y del ánimo exige al menos ___ síntomas.|dos|uno|tres",
      "Ver un atentado en los medios no cumple el criterio A, salvo que se haga por ___.|trabajo|repetición|duelo",
      "Si la muerte de un familiar se conoce de forma indirecta, debe haber sido violenta o ___.|accidental|repentina|prematura",
      "En menores de 6 años, los recuerdos intrusivos pueden expresarse en el ___.|juego|dibujo|lenguaje",
      "El modelo del procesamiento emocional de Foa y Kozak fundamenta la ___ prolongada.|exposición|relajación|activación"
    ],
    tf: [
      "Saber que un amigo íntimo murió por causas naturales cumple el criterio A del TEPT.|F|Si una muerte se conoce de forma indirecta, debe haber sido violenta o accidental.",
      "En el TEPT con expresión retardada pueden aparecer algunos síntomas antes de los 6 meses.|V",
      "La prevalencia vital del TEPT en países de renta alta ronda el 20-25 %.|F|Se estima en un 4-8 %, porque la mayoría de las personas expuestas a un trauma no desarrolla TEPT.",
      "En el modelo de representación dual, las memorias sensoriales explican los flashbacks.|V"
    ],
    q: [
      "Tres meses después de un atropello, Sara revive el golpe al oír un frenazo, evita esa calle, se culpa, cree que ningún lugar es seguro, se sobresalta con cualquier ruido y duerme mal. ¿Qué diagnóstico es compatible?|TEPT|Trastorno de estrés agudo|Trastorno de adaptación|Hay intrusión, evitación, alteraciones cognitivas y activación durante más de un mes, tras un suceso que cumple el criterio A.",
      "Según Ehlers y Clark (2000), ¿por qué persiste el TEPT?|Porque el trauma se vive como amenaza actual|Porque la estructura de miedo no se activa|Porque las señales quedan condicionadas al miedo|Las valoraciones negativas y una memoria mal elaborada hacen que el peligro se sienta presente. El condicionamiento es el modelo de Mowrer.",
      "¿Cuántos síntomas de activación y reactividad exige como mínimo el DSM-5-TR en adultos?|Dos|Uno|Tres|Intrusión y evitación piden uno cada uno, y las alteraciones cognitivas y del ánimo y las de activación, dos cada una.",
      "Un bombero sufre síntomas tras recoger restos humanos en varios siniestros. ¿Qué vía del criterio A cumple?|Exposición repetida a detalles aversivos|Experiencia directa del suceso|Conocimiento de lo ocurrido a un allegado|Los primeros intervinientes pueden cumplir el criterio A por exposición repetida o extrema a detalles aversivos."
    ],
    inc: [
      "Sobre el TEPT en el DSM-5-TR|Basta un síntoma de cada uno de los grupos|La alteración debe durar más de un mes|Hay criterios adaptados para menores de 6 años|Los grupos D y E exigen al menos dos síntomas cada uno. Solo la intrusión y la evitación se cumplen con uno."
    ],
    seq: [
      "Diagnóstico según el tiempo transcurrido tras un trauma|Reacción esperable en los primeros días>Trastorno de estrés agudo hasta el mes>TEPT a partir del mes>Expresión retardada desde los 6 meses"
    ],
    cls: [
      "Modelo explicativo del TEPT|Foa y Kozak: estructura de miedo patológica; información incompatible; exposición prolongada|Ehlers y Clark: amenaza actual; valoraciones negativas; memoria poco contextualizada|Brewin: memorias sensoriales; memorias verbales; flashbacks ante señales"
    ] },
  { t: "El TEPT complejo de la CIE-11 y el debate sobre la memoria traumática",
    tip: "La CIE-11 define el TEPT con tres núcleos: reexperimentación en el presente, evitación y sensación de amenaza actual, durante al menos varias semanas. El TEPT complejo, que solo existe en la CIE-11, aparece tras sucesos prolongados o repetidos de los que es difícil escapar y añade alteraciones de la autoorganización. El apoyo a la represión inconsciente es débil, y un recuerdo recuperado sin corroboración no debe aceptarse sin reservas.",
    v: [
      "Reexperimentación en el presente=Recuerdos vívidos, flashbacks o pesadillas vividos como si ocurrieran ahora",
      "TEPT complejo=Diagnóstico de la CIE-11 que suma alteraciones de la autoorganización al TEPT",
      "Alteraciones de la autoorganización=Desregulación afectiva, autoconcepto negativo y dificultades relacionales",
      "Desregulación afectiva=Reacciones emocionales intensas, dificultad para calmarse o embotamiento",
      "Autoconcepto negativo=Sentirse inútil, derrotado o sin valor, con culpa o vergüenza ligadas al trauma",
      "Represión inconsciente=Supuesto olvido activo del trauma, con débil apoyo científico (Otgaar et al., 2019)",
      "Recuerdo falso=Evocación vivida con total convicción que pueden generar las técnicas sugestivas",
      "Brewin (2021)=Autor que matizó algunos argumentos críticos sobre la memoria traumática"
    ],
    g: [
      "En la CIE-11, los síntomas del TEPT deben durar al menos varias ___.|semanas|meses|días",
      "El TEPT complejo sustituye a la «transformación persistente de la personalidad tras experiencia catastrófica» de la ___.|CIE-10|CIE-9|DSM-IV",
      "En la muestra de Otgaar et al., alrededor del ___ creía en la represión de los recuerdos.|58 %|28 %|85 %",
      "El solapamiento del TEPT complejo con el trastorno ___ de la personalidad es objeto de discusión clínica.|límite|antisocial|evitativo",
      "Los supervivientes de un trauma suelen recordarlo demasiado, no demasiado ___.|poco|pronto|tarde"
    ],
    tf: [
      "El TEPT complejo puede diagnosticarse junto con el TEPT en la misma persona.|F|Incluye los requisitos del TEPT más un segundo bloque de síntomas: se diagnostica uno u otro, no ambos.",
      "El TEPT complejo aparece típicamente tras sucesos prolongados o repetidos de los que es difícil escapar.|V",
      "Brewin (2021) y Otgaar et al. (2019) coinciden en la cautela ante los recuerdos recuperados sin corroboración.|V",
      "La CIE-11 define el TEPT de forma más amplia que el DSM-5-TR, con cuatro grupos de síntomas.|F|La CIE-11 adopta una definición más estrecha, con tres núcleos: reexperimentación, evitación y amenaza actual."
    ],
    q: [
      "Tras años de violencia doméstica, una mujer revive las agresiones, evita lo que las recuerda, vive en alerta, se siente sin valor y no logra mantener vínculos. Según la CIE-11, ¿qué corresponde?|TEPT complejo|TEPT y TLP|Reacción de estrés agudo|Se cumplen los núcleos del TEPT y además hay alteraciones de la autoorganización tras un trauma prolongado.",
      "¿Qué síntoma pertenece a la autoorganización del TEPT complejo y no a los núcleos del TEPT?|Autoconcepto negativo|Sensación de amenaza|Evitación de señales|La amenaza actual y la evitación son núcleos del TEPT. El autoconcepto negativo forma parte del segundo bloque del TEPT complejo.",
      "¿Qué se concluye hoy sobre un recuerdo de abuso recuperado mediante hipnosis?|Que no debe aceptarse sin reservas|Que es fiel si se vive con convicción|Que demuestra una represión previa|Las técnicas sugestivas pueden crear recuerdos falsos vividos con total convicción. Esto no implica negar el trauma.",
      "¿Qué diferencia de duración del TEPT hay entre ambos sistemas?|DSM-5-TR más de un mes, CIE-11 varias semanas|DSM-5-TR varias semanas, CIE-11 más de un mes|Ambos exigen al menos seis meses|El DSM-5-TR exige más de un mes, y la CIE-11, al menos varias semanas."
    ],
    inc: [
      "Sobre el TEPT complejo|Lo recogen tanto la CIE-11 como el DSM-5-TR|Exige cumplir antes los criterios del TEPT|Incluye dificultades en las relaciones|Es una categoría que solo existe en la CIE-11. Creer que está en el DSM-5-TR es una trampa típica."
    ],
    seq: [],
    cls: [
      "Sistema diagnóstico|DSM-5-TR: cuatro grupos de síntomas; más de un mes; sin TEPT complejo|CIE-11: tres núcleos; al menos varias semanas; con TEPT complejo"
    ] },
  { t: "Estrés agudo y trastornos de adaptación",
    tip: "El trastorno de estrés agudo del DSM-5-TR exige la misma exposición que el TEPT y al menos 9 de 14 síntomas, entre 3 días y 1 mes tras el trauma, aunque no predice bien quién tendrá TEPT. En la CIE-11, la reacción de estrés agudo no es un trastorno mental. Los trastornos de adaptación responden a un estresor identificable, no necesariamente traumático, empiezan en 3 meses y remiten en 6. El apego reactivo y la relación social desinhibida se ligan a la privación de cuidados.",
    v: [
      "Trastorno de estrés agudo=Al menos 9 de 14 síntomas postraumáticos entre 3 días y 1 mes tras el suceso",
      "Reacción de estrés agudo=Respuesta esperable ante un suceso extremo, que la CIE-11 no considera trastorno",
      "Trastorno de adaptación=Malestar desproporcionado ante un estresor, con inicio en 3 meses",
      "Estresor identificable=Despido, ruptura, mudanza o enfermedad, no necesariamente traumáticos",
      "Fallo de adaptación=Rasgo de la CIE-11 en que el malestar interfiere en la vida diaria",
      "Síntomas subumbrales=Ante un estresor, el DSM-5-TR los codifica como trastorno de adaptación",
      "Apego reactivo=Patrón inhibido en que el niño rara vez busca consuelo ni responde a él",
      "Relación social desinhibida=El niño interactúa con extraños sin reticencia y podría irse con ellos"
    ],
    g: [
      "El trastorno de estrés agudo exige al menos 9 de ___ síntomas.|14|12|20",
      "Los síntomas del trastorno de adaptación deben iniciarse en los ___ meses siguientes al estresor.|3|6|2",
      "El trastorno de adaptación remite en los ___ meses siguientes al fin del estresor o de sus consecuencias.|6|3|12",
      "Las cinco categorías del TEA son intrusión, ánimo negativo, ___, evitación y alerta.|disociación|culpa|anhedonia",
      "En la CIE-11, la reacción de estrés agudo figura entre los factores que influyen en el estado de ___.|salud|ánimo|alerta"
    ],
    tf: [
      "El trastorno de estrés agudo predice bien qué personas desarrollarán un TEPT.|F|Muchas personas con TEA se recuperan, y otras desarrollan TEPT sin haber tenido TEA.",
      "Un trastorno de adaptación puede aparecer tras un estresor no traumático, como una mudanza.|V",
      "Si los síntomas de un TEA persisten más de un mes, hay que valorar un TEPT.|V",
      "En el trastorno de relación social desinhibida, el niño es retraído y rara vez busca consuelo.|F|Eso describe el apego reactivo. En la relación social desinhibida, el niño se acerca a extraños sin reticencia."
    ],
    q: [
      "Dos semanas después de que anuncien el cierre de su empresa, Pablo duerme mal, se irrita con su pareja y falta al trabajo, sin síntomas suficientes para una depresión. ¿Qué diagnóstico corresponde?|Trastorno de adaptación|Trastorno de estrés agudo|Episodio depresivo leve|El estresor no es traumático y el malestar es desproporcionado y le impide funcionar. Es un trastorno de adaptación mixto.",
      "Diez días después de un terremoto, un vecino presenta diez síntomas de intrusión, ánimo negativo, disociación, evitación y alerta. Según el DSM-5-TR, ¿qué es lo más adecuado?|Trastorno de estrés agudo|TEPT con síntomas disociativos|Trastorno de adaptación|Han pasado entre 3 días y 1 mes, así que no puede ser TEPT, que exige más de un mes de duración.",
      "En la CIE-11, sentirse aturdido y dormir mal los primeros días tras una catástrofe se considera…|una reacción esperable|un trastorno de estrés agudo|un trastorno de adaptación|La reacción de estrés agudo no es un trastorno mental en la CIE-11, sino una respuesta esperable ante un suceso extremo.",
      "Un niño criado en una institución con pocos adultos se va de la mano con cualquier desconocido sin mirar si su cuidador está cerca. ¿Qué diagnóstico sugiere?|Relación social desinhibida|Trastorno de apego reactivo|Trastorno de adaptación|Acercarse a extraños sin la reticencia habitual tras una privación de cuidados es propio de la relación social desinhibida."
    ],
    inc: [
      "Sobre los trastornos de adaptación|Exigen un estresor de tipo traumático|Remiten en 6 meses tras el fin del estresor|No deben corresponder a un duelo normal|Basta un estresor identificable, no necesariamente traumático, como un despido, una ruptura o una enfermedad."
    ],
    seq: [
      "Curso del trastorno de adaptación|Aparece un estresor identificable>Inicio de los síntomas en 3 meses>Fin del estresor o de sus consecuencias>Remisión en los 6 meses siguientes"
    ],
    cls: [
      "Trastorno ligado a la privación de cuidados|Apego reactivo: patrón inhibido; retraimiento emocional; rara vez busca consuelo|Relación social desinhibida: se acerca a desconocidos; no comprueba dónde está el cuidador; podría irse con un extraño"
    ] },
  { t: "El trastorno de duelo prolongado",
    tip: "El duelo es la reacción normal a la muerte de un ser querido y puede ser intenso y largo sin ser patológico. El DSM-5-TR incorporó en 2022 el trastorno de duelo prolongado, que exige al menos 12 meses desde la muerte (6 en niños y adolescentes), anhelo o preocupación por el fallecido y al menos 3 síntomas. La CIE-11 pide más de 6 meses y que la respuesta supere claramente las normas culturales. Solo una minoría de las personas en duelo lo desarrolla.",
    v: [
      "Duelo=Reacción normal a la muerte de un ser querido, que puede ser intensa y larga",
      "Anhelo intenso=Deseo persistente de la persona fallecida, núcleo del cuadro prolongado",
      "Duelo prolongado DSM-5-TR=12 meses o más tras la muerte, 6 en niños y adolescentes",
      "Duelo prolongado CIE-11=Más de 6 meses y una respuesta que supera las normas culturales",
      "Alteración de la identidad=Sentir que una parte de uno mismo murió con el fallecido",
      "Exclusión por duelo=Criterio que impedía diagnosticar depresión tras una pérdida, eliminado en el DSM-5",
      "Duelo en oleadas=Dolor centrado en la pérdida que alterna con momentos de alivio",
      "Patologizar el duelo=Riesgo de tratar como trastorno un dolor normal ante la pérdida"
    ],
    g: [
      "El DSM-5-TR incorporó el trastorno de duelo prolongado en ___.|2022|2013|2019",
      "Además del anhelo o la preocupación, el DSM-5-TR exige al menos ___ síntomas de su lista.|3|5|2",
      "La prevalencia del duelo prolongado se estima entre el 4 y el ___ % de las personas en duelo.|10|25|40",
      "En el episodio depresivo, el foco del malestar es ___: uno mismo, el mundo y el futuro.|generalizado|interpersonal|corporal",
      "En el duelo normal, la autoestima suele estar ___.|conservada|alterada|aumentada"
    ],
    tf: [
      "La CIE-11 exige que hayan pasado al menos 12 meses desde la pérdida.|F|Ese es el plazo del DSM-5-TR en adultos. La CIE-11 exige más de 6 meses.",
      "En la CIE-11, la respuesta de duelo debe superar claramente las normas sociales, culturales o religiosas de la persona.|V",
      "En niños y adolescentes, el DSM-5-TR reduce a 6 meses el plazo del duelo prolongado.|V",
      "Desde el DSM-5 no puede diagnosticarse depresión si los síntomas aparecen tras una pérdida.|F|Desapareció la exclusión por duelo: si se cumplen los criterios, puede diagnosticarse y el clínico juzga el contexto."
    ],
    q: [
      "Hace año y medio que murió la hija de Carmen. Sigue poniendo la mesa para dos, ha dejado de ver a sus amigas, siente que una parte de ella murió y no imagina un futuro. ¿Qué cuadro es compatible?|Trastorno de duelo prolongado|Trastorno depresivo persistente|Duelo normal intenso|Hay anhelo persistente, alteración de la identidad y retirada de la vida durante más de 12 meses.",
      "¿Qué rasgo distingue mejor el duelo normal de un episodio depresivo?|El dolor llega en oleadas con alivio|El malestar dura más de dos semanas|Aparecen tristeza y llanto frecuentes|En el duelo normal el dolor llega en oleadas centradas en la pérdida. En la depresión, el ánimo bajo es persistente.",
      "Una viuda lleva ocho meses con un anhelo intenso que no cede, muy por encima de lo esperable en su comunidad. ¿Qué sistema permitiría ya el diagnóstico de duelo prolongado?|La CIE-11|El DSM-5-TR|Ninguno de los dos|La CIE-11 exige más de 6 meses, y el DSM-5-TR, al menos 12 en adultos.",
      "¿Por qué ambos sistemas exigen duraciones largas y respeto a las normas culturales?|Para no patologizar el dolor normal|Para separarlo del TEPT complejo|Porque el anhelo tarda en aparecer|El duelo intenso es normal y solo una minoría desarrolla un duelo prolongado, así que se busca no convertir el dolor en trastorno."
    ],
    inc: [
      "Sobre el duelo prolongado en el DSM-5-TR|Exige al menos 6 meses en adultos|Requiere anhelo o preocupación por el fallecido|Incluye la soledad intensa entre sus síntomas|En adultos exige al menos 12 meses. Los 6 meses son el plazo para menores o el umbral de la CIE-11."
    ],
    seq: [],
    cls: [
      "Cuadro tras una pérdida|Duelo normal: dolor en oleadas; autoestima conservada; placer posible con recuerdos|Episodio depresivo: ánimo bajo persistente; culpa e inutilidad generalizadas; anhedonia amplia|Duelo prolongado: anhelo que no cede; foco en el fallecido; alteración de la identidad"
    ] }
] },
{ n: 10, t: "Depresión y trastorno bipolar", cap: 5, pir: "alta", mods: [
  { t: "Los trastornos depresivos: clínica, especificadores y epidemiología",
    tip: "El episodio depresivo mayor exige 5 o más de 9 síntomas durante al menos 2 semanas, y uno debe ser el ánimo deprimido o la anhedonia. En niños y adolescentes el ánimo puede ser irritable. El trastorno depresivo persistente dura al menos 2 años (1 en menores). La CIE-11 añade la desesperanza como décimo síntoma. En el ESEMeD-España fue el trastorno más frecuente, y desde la adolescencia es el doble de frecuente en mujeres.",
    v: [
      "Anhedonia=Pérdida de interés o de capacidad para disfrutar de casi todas las actividades",
      "Episodio depresivo mayor=Al menos 5 de 9 síntomas durante 2 semanas, con ánimo bajo o pérdida de placer",
      "Trastorno depresivo persistente=Ánimo deprimido la mayoría de los días durante al menos 2 años",
      "Características atípicas=Reactividad del ánimo, hiperfagia, hipersomnia y sensibilidad al rechazo",
      "Parálisis plúmbea=Sensación de pesadez en brazos o piernas propia del especificador atípico",
      "Trastorno disfórico premenstrual=Síntomas afectivos en la semana previa a la menstruación que mejoran al empezar",
      "Desregulación disruptiva del ánimo=Rabietas graves e irritabilidad persistente entre los 6 y los 18 años",
      "Trastorno del ánimo no especificado=Categoría nueva del DSM-5-TR cuando no se decide entre depresivo y bipolar"
    ],
    g: [
      "El cambio de peso relevante en el episodio depresivo supera el ___ del peso en un mes.|5 %|10 %|2 %",
      "En niños y adolescentes, el ánimo del episodio depresivo puede ser ___.|irritable|expansivo|eufórico",
      "En el trastorno depresivo persistente no puede haber periodos libres de más de ___ meses.|2|6|3",
      "En la desregulación disruptiva del ánimo, el inicio debe darse antes de los ___ años.|10|6|12",
      "Según el ESEMeD-España, la prevalencia anual del episodio depresivo mayor fue del ___.|3,9 %|10,5 %|1,9 %"
    ],
    tf: [
      "Desde el DSM-5, los trastornos depresivos y los bipolares ocupan capítulos separados.|V",
      "La CIE-11 exige 5 de 9 síntomas para el episodio depresivo, igual que el DSM-5-TR.|F|La CIE-11 exige 5 de 10, porque añade la desesperanza, y los organiza en tres grupos.",
      "El trastorno de depresión mayor puede diagnosticarse aunque haya habido un episodio hipomaníaco previo.|F|Exige que nunca haya habido un episodio maníaco o hipomaníaco. Si lo hubo, se valora un trastorno bipolar.",
      "Según el Global Burden of Disease, la depresión es la segunda causa mundial de años vividos con discapacidad.|V"
    ],
    q: [
      "Desde hace tres semanas, Marta no disfruta de nada, se despierta a las cinco, ha perdido el apetito, le cuesta concentrarse y piensa que estarían mejor sin ella. ¿Qué cuadro es más probable?|Episodio depresivo mayor|Trastorno depresivo persistente|Tristeza normal pasajera|Hay al menos 5 síntomas, con anhedonia, durante más de 2 semanas. El trastorno persistente exige 2 años.",
      "¿Qué síntoma es imprescindible para un episodio depresivo mayor en el DSM-5-TR?|Ánimo deprimido o anhedonia|Insomnio o hipersomnia|Inutilidad o culpa excesiva|Al menos uno de los cinco síntomas debe ser el ánimo deprimido o la pérdida de interés o de placer.",
      "¿Qué combinación forma parte del especificador con características atípicas?|Reactividad del ánimo e hiperfagia|Insomnio tardío y anorexia|Culpa excesiva y anhedonia total|Incluye reactividad del ánimo, hiperfagia, hipersomnia, parálisis plúmbea y sensibilidad al rechazo.",
      "Un niño de 8 años tiene rabietas graves cuatro veces por semana e irritabilidad persistente desde hace más de un año. ¿Qué diagnóstico encaja?|Desregulación disruptiva del ánimo|Trastorno depresivo persistente|Trastorno bipolar de inicio infantil|Se exige inicio antes de los 10 años, rabietas al menos 3 veces por semana e irritabilidad durante al menos 12 meses."
    ],
    inc: [
      "Sobre el trastorno depresivo persistente|En menores exige al menos 3 años|Requiere al menos 2 de 6 síntomas|En menores el ánimo puede ser irritable|En menores basta 1 año, frente a los 2 años que se exigen en adultos."
    ],
    seq: [],
    cls: [
      "Episodio depresivo según el sistema|DSM-5-TR: 9 síntomas; lista única; especificador con ansiedad|CIE-11: 10 síntomas; desesperanza; grupos afectivo, cognitivo-conductual y neurovegetativo; trastorno mixto de ansiedad y depresión"
    ] },
  { t: "Modelos psicológicos de la depresión",
    tip: "En el diseño triádico, solo los perros con descargas inescapables no aprendían después a escapar: la clave era la incontrolabilidad. Maier y Seligman (2016) revisaron la explicación: la pasividad es la respuesta por defecto y lo que se aprende es la detección del control. La reformulación atribucional destaca las atribuciones internas, estables y globales, y Beck, la tríada cognitiva y los esquemas latentes. Lewinsohn, Nolen-Hoeksema, Rehm y Coyne completan el panorama.",
    v: [
      "Diseño triádico=Descarga escapable, inescapable acoplada y ausencia de descarga",
      "Grupo acoplado=Recibe las mismas descargas que otro grupo, pero sin poder controlarlas",
      "Detección del control=Lo aprendido según Maier y Seligman, que inhibe la pasividad por defecto",
      "Tríada cognitiva=Visión negativa de uno mismo, del mundo y del futuro (Beck, 1967)",
      "Esquemas depresógenos=Estructuras latentes que un suceso activa y que sesgan el procesamiento",
      "Teoría de la desesperanza=Estilo inferencial negativo que se activa ante sucesos estresantes",
      "Rumiación=Centrarse de forma repetitiva en los síntomas y en sus causas",
      "Lewinsohn (1974)=Baja tasa de refuerzo positivo contingente a la respuesta"
    ],
    g: [
      "La clave del diseño triádico no era la cantidad de descarga, sino su ___.|incontrolabilidad|intensidad|predictibilidad",
      "Hiroto (1974) obtuvo efectos parecidos en personas con ___ inescapable.|ruido|descarga|calor",
      "Según Maier y Seligman (2016), la pasividad por defecto está mediada por el núcleo dorsal del ___.|rafe|tálamo|vago",
      "Sacar una conclusión general a partir de un único hecho es una ___.|sobregeneralización|personalización|abstracción selectiva",
      "Según Coyne, la búsqueda insistente de apoyo puede acabar generando ___ en el entorno.|rechazo|empatía|refuerzo"
    ],
    tf: [
      "Según la teoría original de la indefensión, lo que se aprendía era que las propias respuestas no servían de nada.|V",
      "Maier y Seligman (2016) concluyeron que lo que se aprende en la indefensión es la pasividad.|F|La pasividad es la respuesta por defecto. Lo que se aprende es la detección del control, que la inhibe.",
      "Rehm atribuyó la depresión a déficits de autocontrol en la autoobservación, la autoevaluación y el autorrefuerzo.|V",
      "Según Nolen-Hoeksema, los hombres rumian más, lo que explica su mayor riesgo de depresión.|F|Las mujeres rumian más, lo que explicaría parte de su mayor frecuencia de depresión."
    ],
    q: [
      "Tras ser rechazado en una entrevista, Iván piensa: «es culpa mía, siempre me pasará y me sale mal todo». Según la reformulación atribucional, ¿qué estilo muestra?|Interno, estable y global|Interno, inestable y específico|Externo, estable y global|«Culpa mía» es interna, «siempre» es estable y «todo» es global, el patrón de mayor vulnerabilidad.",
      "En el diseño triádico, ¿qué grupo no aprendía a escapar en la caja de lanzadera?|El de descarga inescapable|El de descarga escapable|El que no recibió descargas|Solo el grupo sin control se quedaba quieto, aunque recibía exactamente las mismas descargas que el grupo escapable.",
      "¿Qué estructura cerebral se asocia a la detección del control según Maier y Seligman?|Corteza prefrontal ventromedial|Núcleo dorsal del rafe|Corteza orbitofrontal lateral|El rafe dorsal media la pasividad por defecto, y la corteza prefrontal ventromedial, la detección del control que la inhibe.",
      "Una persona deprimida apenas hace actividades gratificantes y tiene pocas habilidades sociales. ¿Qué modelo lo explica mejor?|El de Lewinsohn|El de Nolen-Hoeksema|El de Abramson|La baja tasa de refuerzo positivo contingente a la respuesta es la base de la activación conductual."
    ],
    inc: [
      "Sobre el modelo de Beck|Los esquemas actúan siempre, sin activarse|La tríada abarca uno mismo, el mundo y el futuro|Un suceso crítico activa los esquemas latentes|Los esquemas depresógenos permanecen latentes hasta que un suceso los activa."
    ],
    seq: [
      "Modelo cognitivo de Beck|Experiencias tempranas>Esquemas disfuncionales latentes>Suceso crítico que los activa>Pensamientos automáticos y distorsiones>Síntomas depresivos"
    ],
    cls: [
      "Modelo de la depresión|Lewinsohn: refuerzo positivo contingente; activación conductual|Nolen-Hoeksema: rumiación; estilos de respuesta|Abramson: atribuciones internas, estables y globales; desesperanza"
    ] },
  { t: "Bases biológicas de la depresión y mitos",
    tip: "La heredabilidad de la depresión mayor ronda el 37 % y su arquitectura es poligénica: no hay un gen de la depresión. La interacción del 5-HTTLPR con el estrés (Caspi et al., 2003) no se replicó con 38.802 participantes (Culverhouse et al., 2018). La revisión de Moncrieff et al. (2022) no halló una asociación consistente con la serotonina, aunque no demuestra que los ISRS sean ineficaces. El eje HHA, la inflamación y el sueño aportan datos, pero ninguno basta solo.",
    v: [
      "Heredabilidad de la depresión=Alrededor del 37 %, moderada y menor que la del bipolar (Sullivan et al., 2000)",
      "Arquitectura poligénica=Muchas variantes genéticas de efecto muy pequeño que se suman",
      "5-HTTLPR=Polimorfismo del gen del transportador de serotonina estudiado por Caspi et al.",
      "Culverhouse et al. (2018)=Estudio con 38.802 participantes que no replicó la interacción con el estrés",
      "Border et al. (2019)=Mostraron que 18 genes candidatos no superaban a genes elegidos al azar",
      "Moncrieff et al. (2022)=Revisión paraguas de 17 estudios sin asociación consistente con la serotonina",
      "Hipercortisolemia=Exceso de cortisol presente en parte de las personas con depresión",
      "Latencia REM acortada=Entrada más rápida en la fase REM descrita en la depresión"
    ],
    g: [
      "Schildkraut (1965) atribuyó la depresión a un déficit de ___.|catecolaminas|serotonina|cortisol",
      "La revisión de Moncrieff no halló diferencias consistentes en el metabolito ___.|5-HIAA|MHPG|HVA",
      "En parte de los pacientes falla la supresión del cortisol en la prueba de la ___.|dexametasona|insulina|melatonina",
      "El estudio de Caspi et al. (2003) tenía aproximadamente ___ participantes.|850|8.500|38.802",
      "La depresión se entiende hoy como un cuadro ___, en línea con el modelo de vulnerabilidad-estrés.|multicausal|monoaminérgico|hereditario"
    ],
    tf: [
      "La revisión de Moncrieff et al. (2022) demuestra que los ISRS son ineficaces.|F|No lo demuestra: solo no halla apoyo consistente al déficit de serotonina, y ha recibido críticas (Kasper, 2023).",
      "Que un fármaco alivie un síntoma no prueba que la causa sea la falta de lo que el fármaco aporta.|V",
      "La heredabilidad de la depresión mayor es mayor que la del trastorno bipolar.|F|Ronda el 37 %, una cifra moderada y menor que la del trastorno bipolar o la esquizofrenia.",
      "Hoy ningún marcador inflamatorio funciona como prueba diagnóstica de la depresión.|V"
    ],
    q: [
      "Un paciente dice: «el psiquiatra me ha explicado que me falta serotonina y por eso estoy deprimido». ¿Qué responde mejor la evidencia actual?|No hay apoyo consistente a ese déficit|Es cierto, lo confirma el 5-HIAA bajo|Es cierto en el alelo corto del 5-HTTLPR|Moncrieff et al. (2022) no hallaron asociación consistente, aunque eso no implica que los antidepresivos no funcionen.",
      "¿Qué concluyeron Border et al. (2019) sobre 18 genes candidatos clásicos?|No se asociaban más que genes al azar|Explicaban la mitad de la heredabilidad|Solo actuaban junto con el estrés vital|Los estudios pequeños de genes candidatos producen muchos falsos positivos. La lección es metodológica.",
      "¿Qué ejemplo usa el temario para ilustrar el error de deducir la causa a partir del tratamiento?|El ibuprofeno y el dolor de cabeza|La insulina y la diabetes de tipo 1|El paracetamol y la fiebre alta|El ibuprofeno quita el dolor de cabeza y nadie diría que este se debe a un déficit de ibuprofeno.",
      "¿Qué hallazgo del sueño se ha descrito en la depresión?|Latencia REM acortada|Ausencia de sueño REM|Exceso de sueño profundo|Además del insomnio o la hipersomnia, se ha descrito una latencia REM acortada."
    ],
    inc: [
      "Sobre las bases biológicas de la depresión|Existe un gen de gran efecto que la explica|La arquitectura genética es poligénica|Hay hipercortisolemia en parte de los casos|No existe un gen de la depresión: hay muchas contribuciones pequeñas que se suman."
    ],
    seq: [],
    cls: [
      "Estudio|Caspi et al. (2003): unos 850 participantes; alelo corto del 5-HTTLPR; interacción con el estrés|Culverhouse et al. (2018): 38.802 participantes; no replicó la interacción|Moncrieff et al. (2022): revisión paraguas; 17 estudios; serotonina y 5-HIAA"
    ] },
  { t: "Trastornos bipolares",
    tip: "La manía es un ánimo elevado, expansivo o irritable con aumento de la actividad durante al menos 7 días, o cualquier duración si hay hospitalización, y causa deterioro marcado o incluye psicosis. La hipomanía dura al menos 4 días, la notan los demás y no causa deterioro marcado: con psicosis, el episodio es maníaco. El bipolar I solo exige una manía, el II exige hipomanía y depresión mayor sin manía, y la ciclotimia, 2 años de síntomas subumbral.",
    v: [
      "Episodio maníaco=Ánimo elevado o irritable con más energía durante 7 días o con hospitalización",
      "Episodio hipomaníaco=Al menos 4 días de síntomas maníacos, sin deterioro marcado ni psicosis",
      "Bipolar I=Basta un episodio maníaco, con o sin episodios depresivos",
      "Bipolar II=Hipomanía y depresión mayor, sin ningún episodio maníaco",
      "Ciclotimia=Oscilaciones hipomaníacas y depresivas subumbral durante al menos 2 años",
      "Ciclos rápidos=Especificador con al menos 4 episodios en 12 meses",
      "Características mixtas=Síntomas del polo contrario durante un episodio del estado de ánimo",
      "Grandiosidad=Autoestima exagerada, uno de los síntomas del episodio maníaco"
    ],
    g: [
      "Si el ánimo en la manía es solo irritable, se exigen al menos ___ síntomas.|4|3|5",
      "El especificador con ciclos rápidos exige al menos 4 episodios en ___ meses.|12|6|24",
      "En menores, la ciclotimia exige al menos ___ de duración.|1 año|2 años|6 meses",
      "La heredabilidad del trastorno bipolar se sitúa aproximadamente entre el 60 % y el ___.|85 %|70 %|95 %",
      "En la CIE-11, el episodio mixto implica un trastorno bipolar de ___.|tipo I|tipo II|tipo mixto"
    ],
    tf: [
      "Para diagnosticar un trastorno bipolar I es necesario haber tenido al menos un episodio depresivo mayor.|F|Basta un episodio maníaco. Los episodios depresivos son frecuentes, pero no necesarios.",
      "Un episodio hipomaníaco con síntomas psicóticos pasa a considerarse, por definición, maníaco.|V",
      "Una manía que aparece con un antidepresivo y persiste más allá de su efecto fisiológico cuenta para el bipolar I.|V",
      "Cambiar de humor varias veces al día es lo que define el trastorno bipolar.|F|Los episodios duran días o semanas, y entre ellos el ánimo puede ser normal."
    ],
    q: [
      "Durante cinco días, Nuria duerme tres horas, habla sin parar y emprende muchos proyectos. Sus compañeros lo notan, pero sigue trabajando con normalidad y no hay psicosis. ¿Qué episodio presenta?|Hipomaníaco|Maníaco leve|Depresivo mixto|Dura al menos 4 días, es observable por otros y no hay deterioro marcado, hospitalización ni psicosis.",
      "Una paciente ha tenido dos episodios depresivos mayores y un episodio hipomaníaco, nunca manía. ¿Qué diagnóstico corresponde?|Trastorno bipolar II|Trastorno bipolar I|Ciclotimia|El bipolar II exige al menos una hipomanía y una depresión mayor, sin manía nunca. Con una sola manía sería bipolar I.",
      "¿Qué duración mínima exige el DSM-5-TR para la manía si no hay hospitalización?|7 días|4 días|14 días|La manía exige al menos 7 días, o cualquier duración si requiere hospitalización. Los 4 días son de la hipomanía.",
      "Durante tres años, Hugo alterna temporadas algo eufóricas y otras algo bajas, sin cumplir nunca criterios de episodio. ¿Qué diagnóstico encaja?|Ciclotimia|Bipolar II|Trastorno depresivo persistente|Las oscilaciones subumbral durante al menos 2 años definen la ciclotimia. El bipolar II exige episodios completos."
    ],
    inc: [
      "Sobre los trastornos bipolares|La hipomanía causa deterioro marcado|El bipolar I tiene una frecuencia similar en ambos sexos|El riesgo de suicidio es alto|La hipomanía no causa deterioro marcado ni requiere hospitalización. Si lo hace, el episodio es maníaco."
    ],
    seq: [],
    cls: [
      "Trastorno bipolar|Bipolar I: al menos un episodio maníaco; depresión no necesaria|Bipolar II: hipomanía de al menos 4 días; episodio depresivo mayor; nunca manía|Ciclotimia: síntomas subumbral; al menos 2 años; 1 año en menores"
    ] }
] },
{ n: 11, t: "Esquizofrenia y otros trastornos psicóticos", cap: 5, pir: "alta", mods: [
  { t: "La esquizofrenia: síntomas, dimensiones y curso",
    tip: "Kraepelin (1899) habló de dementia praecox, y Bleuler (1911) acuñó «esquizofrenia» para la escisión entre pensamiento, afecto y voluntad, con las cuatro A como síntomas fundamentales. El DSM-5-TR exige 2 o más síntomas durante 1 mes, al menos uno entre delirios, alucinaciones y discurso desorganizado, y 6 meses de signos continuos. Eliminó los subtipos clásicos. Crow, Andreasen y Liddle ordenaron sus dimensiones, y el aumento de violencia depende sobre todo del consumo de sustancias.",
    v: [
      "Psicosis=Pérdida del contacto con la realidad, con delirios, alucinaciones o desorganización",
      "Dementia praecox=Nombre de Kraepelin para un cuadro de inicio temprano y curso deteriorante",
      "Las cuatro A=Asociaciones, afecto, ambivalencia y autismo, síntomas fundamentales de Bleuler",
      "Síntomas accesorios=Delirios y alucinaciones en la concepción de Bleuler",
      "Tipo II de Crow=Síntomas negativos, peor respuesta, dilatación ventricular y deterioro",
      "Síndromes de Liddle=Distorsión de la realidad, desorganización y pobreza psicomotriz",
      "Síntomas negativos=Pérdida de funciones normales como alogia, abulia, anhedonia o aplanamiento",
      "Fase prodrómica=Periodo previo a la fase activa que cuenta para los 6 meses del DSM-5-TR"
    ],
    g: [
      "Bleuler acuñó el término esquizofrenia en ___.|1911|1899|1980",
      "El DSM-5-TR exige signos continuos durante al menos ___, contando las fases prodrómica y residual.|6 meses|1 mes|2 años",
      "Andreasen evaluó los síntomas positivos y negativos con las escalas SAPS y ___.|SANS|PANSS|BPRS",
      "El inicio de la esquizofrenia es unos 3 a 5 años más temprano en ___.|los varones|las mujeres|los migrantes",
      "Según Fazel et al. (2009), la odds ratio de violencia en la esquizofrenia sin consumo de sustancias ronda ___.|2,1|8,9|0,5"
    ],
    tf: [
      "Para Bleuler, los delirios y las alucinaciones eran los síntomas fundamentales de la esquizofrenia.|F|Eran accesorios. Los fundamentales eran las cuatro A: asociaciones, afecto, ambivalencia y autismo.",
      "El DSM-5 eliminó los subtipos paranoide, desorganizado, catatónico, indiferenciado y residual.|V",
      "La «escisión» de Bleuler alude a la coexistencia de varias personalidades en la misma persona.|F|Alude a la desconexión entre pensamiento, afecto y voluntad. Varias identidades remiten al trastorno de identidad disociativo.",
      "Con consumo de sustancias, el riesgo de violencia en la esquizofrenia es similar al de quienes consumen sin psicosis.|V"
    ],
    q: [
      "Un joven presenta desde hace dos meses aplanamiento afectivo y abulia, sin delirios, alucinaciones ni discurso desorganizado. ¿Cumple el criterio A del DSM-5-TR?|No, falta uno de los tres primeros|Sí, porque reúne dos síntomas negativos|Sí, porque dura más de un mes|Al menos uno de los síntomas debe ser delirios, alucinaciones o discurso desorganizado.",
      "¿Qué caracteriza al tipo I de Crow?|Síntomas positivos y buena respuesta|Síntomas negativos y deterioro|Desorganización y pobreza psicomotriz|El tipo I se relaciona con la dopamina y responde bien a los antipsicóticos. El tipo II reúne síntomas negativos y deterioro.",
      "¿Qué factor explica sobre todo el mayor riesgo de violencia asociado a la esquizofrenia?|El consumo de sustancias|Los delirios persecutorios|Los síntomas negativos|La odds ratio pasa de 2,1 sin consumo a 8,9 con consumo, y el riesgo absoluto es bajo (Fazel et al., 2009).",
      "¿Quién propuso los síndromes de distorsión de la realidad, desorganización y pobreza psicomotriz?|Liddle|Crow|Andreasen|Liddle propuso tres síndromes. Crow distinguió los tipos I y II, y Andreasen, los síntomas positivos y negativos."
    ],
    inc: [
      "Sobre la esquizofrenia en el DSM-5-TR|Conserva el subtipo paranoide|Exige al menos 1 mes de fase activa|Exige 6 meses de signos continuos|El DSM-5 eliminó los subtipos clásicos y el privilegio de los síntomas schneiderianos."
    ],
    seq: [
      "Fases del curso de la esquizofrenia|Premórbida>Prodrómica>Activa>Residual"
    ],
    cls: [
      "Tipo de Crow (1980)|Tipo I: síntomas positivos; buena respuesta a los antipsicóticos; relación con la dopamina|Tipo II: síntomas negativos; peor respuesta; dilatación ventricular; deterioro"
    ] },
  { t: "Etiología biológica",
    tip: "La esquizofrenia es muy heredable, en torno al 81 % según Sullivan, Kendler y Neale (2003), y poligénica: el Psychiatric Genomics Consortium identificó 287 loci. La hipótesis dopaminérgica revisada liga la hiperactividad mesolímbica y estriatal a los síntomas positivos, y la hipoactividad mesocortical, a los negativos y cognitivos. La hipótesis glutamatérgica propone una hipofunción NMDA. Intervienen además factores del neurodesarrollo y ambientales como el cannabis de alta potencia.",
    v: [
      "Heston (1966)=Estudio de adopción con hijos de madres con esquizofrenia separados al nacer",
      "Psychiatric Genomics Consortium=Identificó 287 loci asociados a la esquizofrenia (Trubetskoy et al., 2022)",
      "Deleción 22q11.2=Variante rara de mayor efecto asociada al riesgo de esquizofrenia",
      "Hiperactividad mesolímbica=Exceso dopaminérgico ligado a los síntomas positivos",
      "Hipoactividad mesocortical=Déficit dopaminérgico ligado a los síntomas negativos y cognitivos",
      "Saliencia aberrante=Importancia atribuida a estímulos irrelevantes por exceso de dopamina (Kapur, 2003)",
      "Hipofunción NMDA=Base de la hipótesis glutamatérgica, apoyada por fenciclidina y ketamina",
      "Poda sináptica excesiva=Proceso adolescente que ayudaría a explicar la edad de inicio"
    ],
    g: [
      "La potencia de los antipsicóticos se relaciona con su afinidad por los receptores ___.|D2|D1|NMDA",
      "Howes y Kapur (2009) situaron el problema en una hiperactividad ___ estriatal.|presináptica|postsináptica|cortical",
      "La fenciclidina y la ___ bloquean los receptores NMDA.|ketamina|anfetamina|dopamina",
      "Como diferencia de grupo, en la esquizofrenia se observan ventrículos laterales ___.|aumentados|reducidos|asimétricos",
      "Nacer en invierno o ___ tiene un efecto pequeño sobre el riesgo de esquizofrenia.|primavera|verano|otoño"
    ],
    tf: [
      "En los gemelos monocigóticos, la concordancia para la esquizofrenia llega al 100 %.|F|El riesgo es máximo en el gemelo monocigótico, pero no llega al 100 %, lo que deja espacio a factores no genéticos.",
      "En el estudio de Heston (1966) no hubo ningún caso de esquizofrenia en el grupo de adoptados control.|V",
      "La anfetamina, que aumenta la dopamina, puede inducir psicosis.|V",
      "La dilatación ventricular es una prueba diagnóstica útil de la esquizofrenia.|F|Es una diferencia de grupo, no una prueba diagnóstica para una persona concreta."
    ],
    q: [
      "Al inicio de su psicosis, Javier nota que una matrícula y la mirada de un viajero en el metro «significan algo», y después concluye que le vigilan. ¿Qué teoría describe mejor este proceso?|Saliencia aberrante|Hipofunción NMDA|Poda sináptica|La dopamina carga de importancia estímulos irrelevantes y el delirio aparece como intento de explicarlos (Kapur, 2003).",
      "¿Qué datos apoyaron la hipótesis dopaminérgica clásica?|Afinidad D2 y psicosis por anfetamina|Efectos de la ketamina y la fenciclidina|Dilatación ventricular y menos sustancia gris|La potencia antipsicótica se relaciona con la afinidad por D2, y la anfetamina, que aumenta la dopamina, puede inducir psicosis.",
      "¿Qué sugiere que dos gemelos monocigóticos discordantes difieran en el tamaño de sus ventrículos?|Que intervienen factores no genéticos|Que la dilatación es solo hereditaria|Que la esquizofrenia no es heredable|Al compartir los mismos genes, la diferencia apunta a la intervención de factores no genéticos.",
      "¿Qué heredabilidad estimaron Sullivan, Kendler y Neale (2003) para la esquizofrenia?|Alrededor del 81 %|Alrededor del 37 %|Alrededor del 50 %|El 37 % corresponde a la depresión mayor. La esquizofrenia es uno de los trastornos más heredables."
    ],
    inc: [
      "Sobre la etiología biológica de la esquizofrenia|La hipoactividad mesocortical explica los síntomas positivos|Los genes implicados participan en la biología sináptica|El cannabis potente se asocia a más riesgo de psicosis|La hipoactividad mesocortical se liga a los síntomas negativos y cognitivos. Los positivos, a la hiperactividad mesolímbica y estriatal."
    ],
    seq: [],
    cls: [
      "Hipótesis etiológica|Dopaminérgica: receptores D2; anfetamina; saliencia aberrante|Glutamatérgica: receptores NMDA; fenciclidina; ketamina|Neurodesarrollo: complicaciones obstétricas; infecciones prenatales; poda sináptica excesiva"
    ] },
  { t: "Factores psicosociales",
    tip: "Que la esquizofrenia sea muy heredable no significa que el ambiente no importe. En el estudio finlandés de Tienari et al. (2004), el riesgo genético se expresaba más en familias adoptivas disfuncionales, una interacción gen-ambiente. La emoción expresada alta (críticas, hostilidad y sobreimplicación) predice recaídas, pero no causa el trastorno. Zubin y Spring (1977) propusieron el modelo de vulnerabilidad-estrés, y la madre esquizofrenógena y el doble vínculo carecen de apoyo empírico.",
    v: [
      "Interacción gen-ambiente=Ni los genes ni la familia bastan por separado para explicar el resultado",
      "Emoción expresada=Índice del clima afectivo de la familia hacia la persona afectada",
      "Comentarios críticos=Componente ilustrado por «te pasas el día tirado, no haces nada»",
      "Hostilidad=Rechazo dirigido a la persona, no solo a una conducta concreta",
      "Sobreimplicación emocional=Protección excesiva, autosacrificio o dramatización",
      "Camberwell Family Interview=Entrevista con la que se evalúa el clima emocional familiar",
      "Vulnerabilidad-estrés=Los episodios aparecen cuando el estrés supera el umbral de cada persona",
      "Doble vínculo=Teoría de Bateson sobre mensajes parentales contradictorios, sin apoyo empírico"
    ],
    g: [
      "El metaanálisis de Butzlaff y ___ (1998) confirmó la asociación entre emoción expresada y recaídas.|Hooley|Leff|Wing",
      "La teoría de la madre esquizofrenógena se atribuye a ___.|Fromm-Reichmann|Brown y Birley|Vaughn y Leff",
      "La emoción expresada influye en el ___ del trastorno y en las recaídas.|curso|origen|inicio",
      "El modelo de vulnerabilidad-estrés lo propusieron Zubin y ___ en 1977.|Spring|Leff|Vaughn",
      "La emoción expresada se trabaja con intervenciones familiares ___.|psicoeducativas|psicodinámicas|hipnóticas"
    ],
    tf: [
      "La emoción expresada alta es una de las causas de la esquizofrenia.|F|Influye en el curso y en las recaídas, no en el origen del trastorno.",
      "En el estudio de Tienari et al. (2004), el riesgo genético se expresaba igual con cualquier familia adoptiva.|F|Se expresaba más cuando la familia adoptiva funcionaba mal, un ejemplo de interacción gen-ambiente.",
      "Vaughn y Leff (1976) observaron más recaídas en quienes volvían a un hogar con emoción expresada alta.|V",
      "La emoción expresada puede entenderse como una reacción comprensible de familias que conviven con un problema grave.|V"
    ],
    q: [
      "Tras su primer ingreso, Andrés vuelve a casa. Su padre le recuerda a cada rato la medicación y le dice «desde que estás así no vivo». ¿Qué componente de la emoción expresada predomina?|Sobreimplicación emocional|Comentarios críticos|Hostilidad hacia la persona|La protección excesiva y la dramatización son sobreimplicación. Los comentarios críticos censuran conductas concretas.",
      "¿Qué estado tiene hoy la teoría del doble vínculo de Bateson?|Sin apoyo empírico|Apoyada como factor de curso|Apoyada como causa parcial|Como la madre esquizofrenógena, se recuerda como ejemplo histórico, no como explicación válida.",
      "Según Zubin y Spring, ¿por qué una misma situación desencadena un episodio en una persona y no en otra?|Porque difiere su grado de vulnerabilidad|Porque difiere su emoción expresada|Porque difiere su estilo atribucional|Cada persona tiene una vulnerabilidad relativamente estable, y el episodio aparece cuando el estrés supera su umbral.",
      "¿Qué separa la emoción expresada de la teoría de la madre esquizofrenógena?|No atribuye a la familia la causa|Se evalúa solo con observación|Se centra en la figura del padre|La emoción expresada atribuye a la familia una influencia sobre la evolución, no la causa del trastorno."
    ],
    inc: [
      "Sobre la emoción expresada|Causa el trastorno en personas vulnerables|Predice más recaídas cuando es alta|Incluye comentarios críticos y hostilidad|No causa el trastorno: influye en su curso y en las recaídas (Butzlaff y Hooley, 1998)."
    ],
    seq: [],
    cls: [
      "Teoría sobre la familia|Sin apoyo empírico: madre esquizofrenógena; doble vínculo; Fromm-Reichmann; Bateson|Apoyada como factor de curso: emoción expresada; Butzlaff y Hooley; Vaughn y Leff"
    ] },
  { t: "Otros trastornos psicóticos y catatonía",
    tip: "La duración es el primer criterio para distinguir los trastornos psicóticos: el breve dura de 1 día a menos de 1 mes, el esquizofreniforme de 1 a 6 meses y la esquizofrenia 6 meses o más. El delirante exige delirios durante al menos 1 mes (3 en la CIE-11) sin criterio A. El esquizoafectivo combina un episodio afectivo con el criterio A y 2 semanas de psicosis sin episodio afectivo. La catatonía exige 3 de 12 síntomas y no es exclusiva de la esquizofrenia.",
    v: [
      "Trastorno psicótico breve=Delirios, alucinaciones o desorganización de 1 día a menos de 1 mes, con vuelta al nivel previo",
      "Esquizofreniforme=Criterio A de la esquizofrenia durante 1 a 6 meses, sin exigir deterioro",
      "Psicótico agudo y transitorio=Nombre en la CIE-11 del cuadro breve, de inicio brusco y hasta 3 meses",
      "Trastorno delirante=Delirios durante al menos 1 mes sin cumplir el criterio A de la esquizofrenia",
      "Esquizoafectivo=Episodio afectivo con criterio A más 2 semanas de psicosis sin síntomas afectivos",
      "Catatonía=Síndrome psicomotor con al menos 3 de 12 síntomas",
      "Flexibilidad cérea=Síntoma catatónico en que el cuerpo se deja moldear como si fuera de cera",
      "Folie à deux=Antiguo trastorno psicótico compartido, hoy en «otro especificado»"
    ],
    g: [
      "La CIE-11 exige para el trastorno delirante al menos ___.|3 meses|1 mes|6 meses",
      "El trastorno esquizofreniforme no existe en la ___.|CIE-11|DSM-5-TR|DSM-IV",
      "El trastorno psicótico breve puede especificarse si empieza en el ___.|posparto|climaterio|invierno",
      "Los tipos del trastorno delirante incluyen el erotomaníaco, el celotípico y el ___.|somático|catatónico|desorganizado",
      "En el esquizoafectivo, los síntomas afectivos deben estar presentes la mayor parte de la duración ___.|total|activa|residual"
    ],
    tf: [
      "En el DSM-5-TR, la catatonía solo puede diagnosticarse en el contexto de la esquizofrenia.|F|Puede asociarse a otros trastornos mentales o a una afección médica. La CIE-11 le dedica una agrupación propia.",
      "En el trastorno delirante, si hay alucinaciones, no son prominentes y se relacionan con el tema del delirio.|V",
      "El trastorno esquizofreniforme exige deterioro funcional, igual que la esquizofrenia.|F|No exige deterioro funcional, y puede especificarse si tiene características de buen pronóstico.",
      "En el DSM-5-TR, el trastorno esquizotípico figura en el espectro de la esquizofrenia y también entre los trastornos de la personalidad.|V"
    ],
    q: [
      "Ana tiene delirios y alucinaciones desde hace cuatro meses y mantiene su trabajo. Según el DSM-5-TR, ¿qué diagnóstico es más probable?|Esquizofreniforme|Esquizofrenia|Psicótico breve|Dura entre 1 y 6 meses y no exige deterioro. Con menos de 1 mes sería breve, y con 6 meses o más, esquizofrenia.",
      "Desde hace meses, Rosa está convencida de que su vecino la espía con micrófonos, pero trabaja y cuida de su casa con normalidad. No tiene alucinaciones ni desorganización. ¿Qué diagnóstico encaja?|Trastorno delirante|Esquizofrenia paranoide|Trastorno esquizotípico|Un delirio de al menos 1 mes sin criterio A y con buen funcionamiento fuera de él define el trastorno delirante.",
      "En el esquizoafectivo, ¿cuánto deben durar como mínimo los delirios o alucinaciones sin episodio afectivo?|2 semanas|1 mes|6 meses|Se exigen al menos 2 semanas de psicosis sin episodio afectivo, además de su coincidencia con el criterio A.",
      "¿Qué duración máxima admite la CIE-11 para el trastorno psicótico agudo y transitorio?|3 meses|1 mes|6 meses|Tiene inicio brusco, síntomas cambiantes y una duración de hasta 3 meses. El breve del DSM-5-TR dura menos de 1 mes."
    ],
    inc: [
      "Sobre la catatonía|Se diagnostica con 2 de 12 síntomas|Incluye mutismo, negativismo y ecolalia|La CIE-11 le dedica una agrupación propia|Exige al menos 3 de 12 síntomas, como estupor, catalepsia o flexibilidad cérea."
    ],
    seq: [
      "Umbrales de duración en el DSM-5-TR|Psicótico breve, de 1 día a menos de 1 mes>Esquizofreniforme, de 1 a 6 meses>Esquizofrenia, 6 meses o más"
    ],
    cls: [] }
] },
{ n: 12, t: "Trastornos de la personalidad", cap: 6, pir: "media", mods: [
  { t: "Concepto y los diez trastornos del DSM-5-TR",
    tip: "Un trastorno de la personalidad es un patrón perdurable de experiencia y conducta que se aparta de lo que espera la cultura, se manifiesta en al menos dos de cuatro áreas, es inflexible y estable y causa malestar o deterioro. Sus rasgos suelen ser egosintónicos. El DSM-5-TR agrupa los diez TP en los grupos A, B y C, cada uno con su umbral. El antisocial exige 18 años, y el esquizotípico es el más próximo a la esquizofrenia.",
    v: [
      "Trastorno de la personalidad=Patrón perdurable, inflexible y generalizado que se aparta de lo culturalmente esperado",
      "Egosintonía=Vivencia de los rasgos como propios y aceptables, no como ajenos o molestos",
      "Grupo A=TP raros o excéntricos: paranoide, esquizoide y esquizotípico",
      "Grupo B=TP dramáticos, emocionales o erráticos: antisocial, límite, histriónico y narcisista",
      "Grupo C=TP ansiosos o temerosos: evitativo, dependiente y obsesivo-compulsivo",
      "TP paranoide=Desconfianza y suspicacia, con atribución de malicia a los demás",
      "TP esquizoide=Desapego de las relaciones y expresión emocional restringida",
      "TP dependiente=Necesidad excesiva de que se ocupen de uno, sumisión y miedo a la separación"
    ],
    g: [
      "El patrón de un TP debe manifestarse en al menos ___ de cuatro áreas.|dos|tres|una",
      "El TP antisocial exige al menos 3 de ___ criterios.|7|9|8",
      "El umbral del TP límite es de al menos 5 de ___ criterios.|9|7|8",
      "En menores de 18 años, un TP puede diagnosticarse si los rasgos están presentes desde hace al menos ___.|un año|dos años|seis meses",
      "Las cuatro áreas son cognición, afectividad, funcionamiento interpersonal y control de los ___.|impulsos|afectos|hábitos"
    ],
    tf: [
      "El TP evitativo pertenece al grupo B por su hipersensibilidad a la crítica.|F|Pertenece al grupo C, el de los TP ansiosos o temerosos, junto con el dependiente y el obsesivo-compulsivo.",
      "Muchas personas con un TP consultan por un problema asociado, como una depresión, y no por su personalidad.|V",
      "El TP esquizotípico incluye ideas de referencia y pensamiento mágico, pero sin psicosis franca persistente.|V",
      "En el TPOC hay obsesiones y compulsiones, aunque se viven como egosintónicas.|F|En el TPOC no hay obsesiones ni compulsiones, sino un estilo perfeccionista y rígido que la persona considera correcto."
    ],
    q: [
      "Jorge cree notar lo que piensan sus compañeros, viste de forma muy peculiar y evita las relaciones cercanas por una incomodidad que no cede con el trato. No tiene delirios ni alucinaciones. ¿Qué TP sugiere?|Esquizotípico|Evitativo|Esquizoide|Ideas de referencia, excentricidad y malestar en las relaciones íntimas, sin psicosis franca persistente, definen el esquizotípico.",
      "¿Qué rasgo clínico explica que muchas personas con un TP no consulten por su personalidad?|La egosintonía|La egodistonía|La comorbilidad|Los rasgos se viven como parte de uno mismo («yo soy así»), y el malestar se atribuye a los demás o a las circunstancias.",
      "¿Qué TP del DSM-5-TR tiene el umbral más bajo, 3 de 7 criterios?|Antisocial|Paranoide|Evitativo|El paranoide y el evitativo exigen 4 de 7. El antisocial basta con 3 de 7, además de los requisitos de edad.",
      "¿Qué diferencia principal hay entre el TP evitativo y la ansiedad social?|El evitativo es más generalizado|El evitativo exige ataques de pánico|El evitativo pertenece al grupo A|El solapamiento es grande, pero el evitativo suele ser más generalizado y afecta a la propia imagen."
    ],
    inc: [
      "Sobre la definición de TP en el DSM-5-TR|Se inicia típicamente en la edad adulta tardía|Es inflexible y aparece en muchas situaciones|Causa malestar o deterioro clínicamente significativo|Se inicia en la adolescencia o al principio de la edad adulta, y es estable y de larga duración."
    ],
    seq: [],
    cls: [
      "Grupo de TP del DSM-5-TR|Grupo A: paranoide; esquizoide; esquizotípico|Grupo B: antisocial; límite; histriónico; narcisista|Grupo C: evitativo; dependiente; obsesivo-compulsivo"
    ] },
  { t: "Modelos dimensionales: el AMPD y la CIE-11",
    tip: "Las diez categorías tienen comorbilidad alta, heterogeneidad y umbrales arbitrarios. El AMPD, en la Sección III, combina el nivel de funcionamiento de la personalidad (criterio A) con 25 facetas en 5 dominios (criterio B) y conserva seis TP. La CIE-11 abandona los tipos: gradúa la gravedad en leve, moderado o grave y describe rasgos con cinco dominios, más el especificador patrón límite. Antagonismo y psicoticismo son del AMPD, y disocialidad y anancastia, de la CIE-11.",
    v: [
      "AMPD=Modelo alternativo del DSM-5, situado en la Sección III",
      "Criterio A del AMPD=Nivel de funcionamiento propio e interpersonal, valorado con la LPFS",
      "Criterio B del AMPD=25 facetas de rasgos patológicos agrupadas en 5 dominios",
      "Funcionamiento propio=Identidad y autodirección",
      "Funcionamiento interpersonal=Empatía e intimidad",
      "Dificultad de la personalidad=Categoría de la CIE-11 por debajo del umbral, que no es un TP",
      "Anancastia=Dominio de la CIE-11 de perfeccionismo, rigidez y control de la conducta y las emociones",
      "Patrón límite=Especificador de la CIE-11 que conserva la continuidad con el TLP"
    ],
    g: [
      "El AMPD evalúa los rasgos patológicos, entre otros instrumentos, con el inventario ___.|PID-5|PCL-R|LPFS",
      "La CIE-11 gradúa la gravedad del TP en leve, moderado o ___.|grave|extremo|crónico",
      "En la CIE-11, el TP esquizotípico pasa al grupo de la ___.|esquizofrenia|disociación|ansiedad",
      "El dominio de desapego se relaciona con baja ___ de los Cinco Grandes.|extraversión|amabilidad|responsabilidad",
      "Según Winsper et al. (2020), la prevalencia de cualquier TP fue del ___.|7,8 %|3,8 %|12,5 %"
    ],
    tf: [
      "La anancastia y la disocialidad son dominios del modelo alternativo del DSM-5.|F|Son dominios de la CIE-11. Los dominios propios del AMPD son el antagonismo y el psicoticismo.",
      "El AMPD conserva seis TP y añade un TP con rasgos especificados para el resto.|V",
      "En la CIE-11, la dificultad de la personalidad se considera un TP leve.|F|Está por debajo del umbral y no se considera trastorno. El TP leve ya es un trastorno.",
      "En el metaanálisis de Winsper et al. (2020), el grupo C fue el más prevalente.|V"
    ],
    q: [
      "Un clínico decide primero si hay TP y su gravedad, y luego describe rasgos de disocialidad y anancastia, sin asignar un tipo. ¿Qué sistema usa?|La CIE-11|El AMPD|La Sección II|La CIE-11 abandona los tipos de TP. La disocialidad y la anancastia son dominios exclusivos suyos.",
      "¿Qué dominios comparten el AMPD y la CIE-11?|Afectividad negativa, desapego y desinhibición|Antagonismo, desapego y afectividad negativa|Psicoticismo, disocialidad y desinhibición|El AMPD añade antagonismo y psicoticismo, y la CIE-11, disocialidad y anancastia.",
      "Con un umbral de 5 de 9, dos personas con TLP pueden compartir un único criterio. ¿Qué problema del sistema categorial ilustra?|La heterogeneidad|La comorbilidad|La egosintonía|Un mismo diagnóstico agrupa perfiles muy distintos. La comorbilidad es la coexistencia frecuente de varios TP.",
      "¿Con qué rasgo de los Cinco Grandes se relaciona el antagonismo?|Baja amabilidad|Baja responsabilidad|Alto neuroticismo|La baja responsabilidad corresponde a la desinhibición, y el neuroticismo, a la afectividad negativa."
    ],
    inc: [
      "Sobre la CIE-11|Mantiene el TP esquizotípico entre los TP|Incluye el especificador patrón límite|Abandona los tipos de TP|El esquizotípico sale de la personalidad y pasa al grupo de la esquizofrenia y otros trastornos psicóticos primarios."
    ],
    seq: [],
    cls: [
      "Dominio de rasgos|Solo AMPD: antagonismo; psicoticismo|Solo CIE-11: disocialidad; anancastia|Comunes: afectividad negativa; desapego; desinhibición"
    ] },
  { t: "El trastorno límite de la personalidad",
    tip: "El TLP es un patrón de inestabilidad de las relaciones, la autoimagen y los afectos, con impulsividad marcada, y exige 5 de 9 criterios. Linehan (1993) lo explica por una vulnerabilidad emocional unida a un ambiente invalidante, base de la TDC, y Fonagy y Bateman, por un fallo de mentalización, base del TBM. La mayoría alcanza una remisión sostenida (Zanarini et al., 2010), y la TDC y el TBM reducen la gravedad, las autolesiones o la suicidabilidad, con evidencia de calidad baja (Storebø et al., 2020).",
    v: [
      "Vulnerabilidad emocional=Alta sensibilidad, reactividad intensa y retorno lento a la línea base",
      "Ambiente invalidante=Entorno que ignora, castiga o trivializa la expresión de las emociones",
      "Desregulación emocional=Fallo generalizado para modular las emociones, según Linehan",
      "Mentalización=Entender la conducta propia y ajena en términos de estados mentales",
      "TDC=Terapia dialéctica conductual, derivada del modelo biosocial",
      "TBM=Tratamiento derivado del modelo de Fonagy y Bateman",
      "Zanarini et al. (2010)=Estudio McLean en que la mayoría logró una remisión sostenida",
      "Storebø et al. (2020)=Revisión Cochrane que halló útiles las psicoterapias específicas"
    ],
    g: [
      "Los cambios de ánimo del TLP duran ___, lo que los distingue de los episodios bipolares.|horas|semanas|meses",
      "El criterio de impulsividad exige al menos ___ áreas potencialmente dañinas.|dos|tres|cuatro",
      "Crowell, Beauchaine y Linehan (2009) ampliaron el modelo biosocial en clave ___.|evolutiva|cognitiva|sistémica",
      "La calidad de la evidencia de la revisión de Storebø et al. se valoró como ___.|baja|alta|moderada",
      "Las relaciones del TLP oscilan entre la idealización y la ___.|devaluación|dependencia|evitación"
    ],
    tf: [
      "En el estudio de Zanarini et al. (2010), la mayoría de los pacientes con TLP alcanzó una recuperación funcional plena.|F|La mayoría logró una remisión sostenida de los síntomas, pero la recuperación funcional plena fue menos frecuente.",
      "Frente al tratamiento habitual, la TDC redujo la gravedad del TLP y las autolesiones.|V",
      "Según Linehan, un ambiente invalidante basta por sí solo para producir el TLP.|F|El TLP surge de la interacción entre ese ambiente y una vulnerabilidad emocional de base biológica.",
      "Según Fonagy y Bateman, la mentalización falla sobre todo bajo activación emocional intensa.|V"
    ],
    q: [
      "Laura, de 26 años, pasa en pocas horas de idealizar a su pareja a sentirse despreciada porque tarda en contestar, y ese día se corta para calmar la angustia. Sus cambios de ánimo duran horas. ¿Qué diagnóstico es más probable?|Trastorno límite|Trastorno bipolar II|Ciclotimia|Inestabilidad relacional, autolesiones y reactividad del ánimo de horas apuntan al TLP. Los episodios bipolares duran días o semanas.",
      "Según el modelo biosocial, ¿qué respuesta de un adulto ante el llanto de un niño es invalidante?|«No es para tanto»|«Cuéntame qué te pasa»|«Entiendo que estés triste»|Trivializar la emoción es invalidante. Ignorarla o castigarla también lo serían.",
      "¿Qué tratamiento deriva del modelo de Fonagy y Bateman?|El basado en la mentalización|La terapia dialéctica conductual|La activación conductual|La TDC deriva del modelo biosocial de Linehan, y la activación conductual, del modelo de Lewinsohn.",
      "Un familiar dice que no merece la pena tratar el TLP porque la personalidad no cambia. ¿Qué responde mejor la evidencia?|La mayoría logra una remisión sostenida|Solo mejora con fármacos específicos|Mejora solo si no hay autolesiones|La mayoría alcanza remisión sostenida, y la TDC y el TBM reducen autolesiones o gravedad (Storebø et al., 2020)."
    ],
    inc: [
      "Sobre el TLP en el DSM-5-TR|Exige al menos 7 de 9 criterios|Incluye la sensación crónica de vacío|Incluye ideación paranoide transitoria|Exige al menos 5 de 9 criterios, por lo que dos personas pueden recibir el diagnóstico con perfiles muy distintos."
    ],
    seq: [],
    cls: [
      "Modelo del TLP|Biosocial de Linehan: vulnerabilidad emocional; ambiente invalidante; TDC|Mentalización: Fonagy y Bateman; estados mentales; TBM"
    ] },
  { t: "Trastorno antisocial y psicopatía",
    tip: "El TAP es un patrón de desprecio y violación de los derechos de los demás desde los 15 años, con al menos 3 de 7 manifestaciones. Exige tener al menos 18 años y evidencia de un trastorno de la conducta antes de los 15. La psicopatía, descrita por Cleckley (1941) y medida con la PCL-R de Hare, añade rasgos interpersonales y afectivos. La relación es asimétrica: la mayoría de los psicópatas cumpliría criterios de TAP, pero solo una minoría con TAP es psicópata.",
    v: [
      "Trastorno antisocial=Desprecio y violación de los derechos de los demás desde los 15 años",
      "The Mask of Sanity=Obra de Cleckley (1941) que describió el concepto clínico de psicopatía",
      "PCL-R=Escala de Hare de 20 ítems, 2 factores y 4 facetas",
      "Factor 1 de la PCL-R=Interpersonal-afectivo: encanto superficial, mentira patológica, falta de empatía",
      "Factor 2 de la PCL-R=Estilo de vida antisocial: impulsividad, irresponsabilidad, conducta temprana",
      "Con rasgos psicopáticos=Especificador del AMPD para el TAP que recoge lo interpersonal y afectivo",
      "Emociones prosociales limitadas=Especificador del trastorno de la conducta con frialdad e insensibilidad",
      "Disocialidad=Dominio de la CIE-11 con el que se describen los rasgos antisociales"
    ],
    g: [
      "Para el TAP se exige evidencia de un trastorno de la conducta antes de los ___ años.|15|18|12",
      "Cleckley publicó The Mask of Sanity en ___.|1941|1991|1911",
      "Los criterios del TAP coinciden sobre todo con el factor ___ de la PCL-R.|2|1|3",
      "Cada factor de la PCL-R se divide en dos ___.|facetas|dominios|subescalas",
      "«Psicópata» no es un diagnóstico del DSM-5-TR, sino un constructo de investigación y de evaluación ___.|forense|clínica|escolar"
    ],
    tf: [
      "La mayoría de las personas con TAP cumple criterios de psicopatía.|F|Solo una minoría de quienes tienen un TAP son psicópatas. Es la mayoría de los psicópatas la que cumpliría criterios de TAP.",
      "El TAP es más frecuente en varones y tiende a atenuarse con la edad.|V",
      "Una puntuación alta en el factor 1 de la PCL-R es requisito para diagnosticar un TAP.|F|La PCL-R no forma parte de los criterios. El TAP exige 18 años y un trastorno de la conducta antes de los 15.",
      "En la CIE-11, el TAP no existe como tipo y sus rasgos se describen con el dominio de disocialidad.|V"
    ],
    q: [
      "Raúl acumula robos y peleas desde la adolescencia, actúa por impulso y luego se arrepiente, aunque reincide. ¿Qué perfil presenta?|TAP sin perfil psicopático|Psicopatía con los dos factores|TAP con rasgos psicopáticos|Sus conductas encajan en el factor 2, pero el arrepentimiento y la ausencia de frialdad afectiva descartan el factor 1.",
      "Marcos estafa con un trato encantador, planifica con calma y habla de sus víctimas sin el menor afecto. ¿Qué perfil muestra?|Los rasgos de ambos factores|Solo los rasgos del factor 2|Solo un TAP sin psicopatía|Al estilo antisocial se suman el encanto superficial y la pobreza afectiva del factor interpersonal-afectivo.",
      "Un joven de 17 años cumple cinco manifestaciones antisociales y tuvo un trastorno de la conducta a los 12. ¿Puede diagnosticarse un TAP?|No, exige tener 18 años|Sí, porque cumple más de tres|Sí, porque hubo trastorno previo|El TAP exige tener al menos 18 años, además de un trastorno de la conducta antes de los 15.",
      "¿Qué especificador del trastorno de la conducta equivale en la infancia a la dimensión psicopática?|Con emociones prosociales limitadas|Con rasgos psicopáticos tempranos|Con inicio en la infancia temprana|Describe falta de remordimiento y de empatía, despreocupación por el rendimiento y afecto superficial."
    ],
    inc: [
      "Sobre la psicopatía|Es un diagnóstico del DSM-5-TR|La describió Cleckley en 1941|Hare la operativizó con la PCL-R|No es un diagnóstico del DSM-5-TR, sino un constructo de investigación y de evaluación forense."
    ],
    seq: [],
    cls: [
      "Factor de la PCL-R|Factor 1 interpersonal-afectivo: encanto superficial; mentira patológica; falta de remordimiento|Factor 2 estilo de vida antisocial: impulsividad; irresponsabilidad; conducta antisocial temprana; falta de metas realistas"
    ] }
] }
);

// SAIMAP Psicología · Psicopatología · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Trastornos del sueño-vigilia y de la sexualidad", cap: 6, pir: "media", mods: [
  { t: "El sueño normal, el insomnio y las hipersomnias",
    tip: "La noche se organiza en ciclos de unos 90 minutos: el N3 de ondas lentas predomina en la primera mitad y el REM, con atonía, en la segunda. El insomnio exige insatisfacción con el sueño al menos 3 noches por semana durante 3 meses, pese a una oportunidad adecuada para dormir, y con el tiempo lo mantienen sobre todo los factores perpetuantes del modelo 3P (Spielman et al., 1987). La narcolepsia añade a la somnolencia cataplejía, déficit de hipocretina o una latencia REM muy corta.",
    v: [
      "Polisomnografía=Registro simultáneo durante el sueño de EEG, EOG, EMG y otros canales fisiológicos",
      "Hipnograma=Resumen gráfico de las fases de sueño a lo largo de una noche",
      "Fase N2=Sueño NREM con husos de sueño y complejos K en el EEG",
      "Fase N3=Sueño de ondas lentas, el más profundo, propio de la primera mitad de la noche",
      "Modelo 3P=Predisponentes, precipitantes y perpetuantes del insomnio (Spielman et al., 1987)",
      "Factor perpetuante=Mantiene el insomnio cuando el desencadenante ya ha pasado",
      "Cataplejía=Pérdida brusca del tono muscular desencadenada por emociones, con la conciencia conservada",
      "Hipocretina=Orexina, cuyo déficit en el líquido cefalorraquídeo apoya el diagnóstico de narcolepsia"
    ],
    g: [
      "Los ciclos de sueño de una noche duran unos ___ minutos.|90|60|120",
      "El trastorno de insomnio exige síntomas al menos 3 noches por semana durante al menos ___.|3 meses|1 mes|6 meses",
      "La narcolepsia tipo ___ cursa con cataplejía o con déficit de hipocretina.|1|2|3",
      "La hipersomnia es una somnolencia excesiva pese a dormir al menos ___ horas.|7|9|5",
      "El modelo cognitivo de Harvey (2002) subraya la ___ por el sueño.|preocupación|hiperactivación|restricción"
    ],
    tf: [
      "El sueño REM predomina en la segunda mitad de la noche.|V",
      "Para diagnosticar insomnio basta con dormir pocas horas, aunque no haya malestar diurno.|F|Exige insatisfacción con el sueño, oportunidad adecuada para dormir y malestar o deterioro diurno.",
      "Aproximadamente un tercio de los adultos tiene síntomas de insomnio, pero solo en torno al 6-10 % cumple criterios del trastorno.|V",
      "Con el tiempo, el insomnio se mantiene sobre todo por los factores precipitantes.|F|Lo mantienen sobre todo los perpetuantes, que siguen actuando cuando el desencadenante ya ha pasado."
    ],
    q: [
      "Tras un despido, Marta duerme mal. Meses después tiene trabajo nuevo, pero sigue acostándose antes «para recuperar» y mirando el reloj en la cama. En el modelo 3P, ¿qué mantiene ahora su insomnio?|Los factores perpetuantes|Los factores precipitantes|Los factores predisponentes|El despido fue el precipitante. Pasar más tiempo en la cama y vigilar el reloj son perpetuantes que convierten la cama en señal de vigilia.",
      "¿Qué rasgo define la cataplejía?|Pérdida de tono con conciencia conservada|Pérdida de conciencia con caída brusca|Rigidez muscular durante el sueño REM|Es una pérdida brusca del tono muscular desencadenada por emociones como la risa, sin pérdida de conciencia.",
      "¿Qué elementos forman la tétrada clásica de la narcolepsia?|Somnolencia, cataplejía, parálisis y alucinaciones|Somnolencia, ronquidos, pausas respiratorias y cataplejía|Insomnio, cataplejía, parálisis del sueño y pesadillas|Somnolencia, cataplejía, parálisis del sueño y alucinaciones hipnagógicas o hipnopómpicas.",
      "Una persona ve figuras justo al quedarse dormida, sin ningún otro síntoma. ¿Cómo se interpreta?|Alucinación hipnagógica no psicótica|Primer signo de un trastorno psicótico|Pseudoalucinación propia de la narcolepsia|Las alucinaciones hipnagógicas aparecen en personas sin trastorno. No toda alucinación es psicótica."
    ],
    inc: [
      "Sobre el sueño normal y el insomnio|El N3 predomina en la segunda mitad de la noche|El REM cursa con atonía muscular|El insomnio puede ser episódico o recurrente|El N3, de ondas lentas, predomina en la primera mitad de la noche. El REM es el que predomina en la segunda."
    ],
    seq: [
      "Fases del primer ciclo de sueño de la noche|Vigilia>N1>N2>N3>REM"
    ],
    cls: [
      "Factor del modelo 3P|Predisponente: tendencia a la hiperactivación; rasgos ansiosos|Precipitante: estrés laboral; una enfermedad; un duelo|Perpetuante: siestas; asociación cama-vigilia; más tiempo en la cama"
    ] },
  { t: "Trastornos respiratorios, circadianos y parasomnias",
    tip: "En la apnea obstructiva la vía aérea se cierra aunque el esfuerzo respiratorio continúa, y en la central desaparece el esfuerzo. Los trastornos circadianos son desajustes entre el reloj biológico y el horario exigido. Las parasomnias NREM, como el sonambulismo y los terrores nocturnos, surgen del N3, en la primera mitad de la noche y con amnesia. Las pesadillas y el trastorno de conducta del sueño REM aparecen en REM y con recuerdo del sueño.",
    v: [
      "Apnea obstructiva=Cierre de la vía aérea superior mientras continúa el esfuerzo por respirar",
      "Apnea central=Desaparece el esfuerzo respiratorio por un fallo del control de la respiración",
      "Índice de apnea-hipopnea=Pausas por hora de sueño, con umbral de 5 si hay síntomas o de 15 sin ellos",
      "Fase de sueño retrasada=Dormirse y despertarse muy tarde, típica de adolescentes",
      "Terror nocturno=Incorporarse gritando con gran activación vegetativa y sin recuerdo posterior",
      "Pesadilla=Sueño angustioso que despierta a la persona, orientada y con recuerdo vívido",
      "Trastorno de conducta REM=Pérdida de la atonía con conductas que escenifican los sueños",
      "Piernas inquietas=Urgencia de mover las extremidades inferiores que empeora en reposo y cede al moverse"
    ],
    g: [
      "El trastorno de conducta del sueño REM es un marcador prodrómico de ___.|sinucleinopatías|taupatías|demencias vasculares",
      "La fase de sueño ___ es más propia de las personas mayores.|avanzada|retrasada|irregular",
      "El ___ no figura como trastorno específico en el DSM-5.|jet lag|trabajo por turnos|sueño irregular",
      "Sin síntomas, la apnea obstructiva exige un índice de apnea-hipopnea de ___ o más por hora.|15|5|30",
      "El síndrome de piernas inquietas empeora en reposo y por la ___.|tarde-noche|mañana|madrugada"
    ],
    tf: [
      "En la apnea central, el tórax y el abdomen siguen intentando respirar mientras cesa el flujo.|F|Eso define la apnea obstructiva. En la central desaparece también el esfuerzo respiratorio.",
      "El sonambulismo y los terrores nocturnos surgen del sueño N3.|V",
      "Las pesadillas suelen aparecer en la primera mitad de la noche y se olvidan al despertar.|F|Aparecen en REM, en la segunda mitad, y la persona despierta orientada y con recuerdo vívido.",
      "El trastorno de conducta del sueño REM es más típico de varones mayores.|V"
    ],
    q: [
      "Un niño se incorpora chillando a las dos horas de dormirse, sudoroso y con taquicardia, y por la mañana no recuerda nada. ¿Qué es lo más probable?|Un terror nocturno|Una pesadilla|Un trastorno de conducta REM|Primera mitad de la noche, gran activación vegetativa y amnesia apuntan a un terror nocturno, una parasomnia del N3.",
      "Un hombre de 68 años da patadas y grita dormido mientras sueña que se defiende, y al despertar está alerta y recuerda el sueño. ¿Qué conviene vigilar?|Una posible sinucleinopatía|Una apnea central del sueño|Un trastorno de pesadillas|El trastorno de conducta del sueño REM es un marcador prodrómico de la enfermedad de Parkinson y de la demencia con cuerpos de Lewy.",
      "Una adolescente se duerme hacia las cuatro de la madrugada y no logra levantarse para ir a clase. ¿Qué trastorno sugiere?|Fase de sueño retrasada|Trastorno de insomnio|Fase de sueño avanzada|Dormirse y despertarse muy tarde es la fase retrasada, típica de adolescentes: un desajuste entre el reloj biológico y el horario.",
      "En la hipoventilación relacionada con el sueño, ¿qué se observa?|Respiración insuficiente con más CO2|Cierre total de la vía aérea|Ausencia de esfuerzo con flujo normal|La respiración es insuficiente y aumenta el CO2. El cierre de la vía aérea define la apnea obstructiva."
    ],
    inc: [
      "Sobre las parasomnias|El sonámbulo despierta con facilidad y orientado|La pesadilla deja un recuerdo vívido del sueño|El trastorno de conducta REM pierde la atonía|En los trastornos del despertar NREM el despertar es difícil y confuso, con amnesia total o parcial."
    ],
    seq: [],
    cls: [
      "Parasomnia|NREM: sonambulismo; terrores nocturnos; amnesia del episodio|REM: pesadillas; trastorno de conducta del sueño REM; recuerdo del sueño"
    ] },
  { t: "La respuesta sexual y las disfunciones sexuales",
    tip: "Masters y Johnson (1966) propusieron un modelo lineal de cuatro fases sin deseo, Kaplan (1979) añadió el deseo en un modelo trifásico y Basson (2000) planteó un modelo circular en el que la excitación puede preceder al deseo. Barlow describió la interferencia cognitiva: atender a señales de amenaza y rendimiento reduce la excitación. Las disfunciones del DSM-5-TR exigen unos 6 meses, presencia en la mayoría de las ocasiones y malestar significativo, y la CIE-11 las saca de los trastornos mentales.",
    v: [
      "Masters y Johnson (1966)=Modelo lineal de excitación, meseta, orgasmo y resolución",
      "Kaplan (1979)=Añadió la fase de deseo en un modelo trifásico",
      "Basson (2000)=Modelo circular en que intimidad y receptividad pueden llevar a la excitación",
      "Interferencia cognitiva=Atender a señales de amenaza y rendimiento en lugar de a las eróticas (Barlow)",
      "Spectatoring=Observarse desde fuera durante la relación en lugar de implicarse",
      "Ansiedad de desempeño=Temor a fallar que reduce la excitación y confirma el miedo",
      "Eyaculación prematura=Ocurre en torno al minuto siguiente a la penetración y antes de desearlo",
      "Disfunción situacional=Aparece solo en ciertas situaciones o con ciertas parejas"
    ],
    g: [
      "Masters y Johnson describieron un periodo ___ en los varones.|refractario|de meseta|de resolución",
      "Las disfunciones sexuales del DSM-5-TR exigen una duración mínima de unos ___.|6 meses|3 meses|12 meses",
      "Deben presentarse en la mayoría de las ocasiones, en torno al ___ de ellas.|75-100 %|50-75 %|25-50 %",
      "En el modelo de Basson, la excitación subjetiva puede ___ al deseo.|preceder|sustituir|anular",
      "La CIE-11 no divide las disfunciones sexuales según su causa orgánica o ___.|psicógena|relacional|farmacológica"
    ],
    tf: [
      "El modelo de Masters y Johnson incluía la fase de deseo al inicio de la respuesta sexual.|F|No incluía el deseo. Lo añadió Kaplan (1979) en su modelo trifásico.",
      "Según Barlow, las personas con una disfunción atienden más a señales de amenaza y rendimiento que a las eróticas.|V",
      "En la CIE-11, las disfunciones sexuales siguen dentro del capítulo de trastornos mentales.|F|Pasan a un capítulo de afecciones relacionadas con la salud sexual, fuera de los trastornos mentales.",
      "Una disfunción sexual se especifica como de toda la vida o adquirida, y como generalizada o situacional.|V"
    ],
    q: [
      "Tras un fallo de erección una noche de cansancio, Andrés vigila su cuerpo en cada encuentro. Desde entonces falla con su pareja, pero tiene erecciones al despertar. ¿Cómo se especifica su trastorno eréctil?|Adquirido y situacional|De toda la vida y generalizado|Adquirido y generalizado|Empezó tras un episodio concreto y solo aparece en ciertas situaciones. Ilustra además la interferencia cognitiva.",
      "¿Qué modelo ayuda a no considerar patológica, sin más, la falta de deseo espontáneo al inicio?|El circular de Basson|El trifásico de Kaplan|El lineal de Masters y Johnson|En Basson la motivación puede partir de la intimidad y la receptividad, y la excitación puede preceder al deseo.",
      "¿Qué aportó principalmente el modelo de Kaplan?|Describir los problemas de deseo como disfunciones|Observar en laboratorio la respuesta fisiológica|Situar la intimidad como origen del ciclo sexual|Al añadir la fase de deseo, permitió describir los problemas de deseo como disfunciones propias.",
      "¿Qué impide diagnosticar una disfunción sexual aunque cumpla duración y frecuencia?|Que lo explique un conflicto grave de pareja|Que sea de toda la vida en lugar de adquirida|Que aparezca solo con una pareja determinada|Se exige que no haya una explicación mejor: otro trastorno, conflicto grave de pareja, estresores, sustancias o afección médica."
    ],
    inc: [
      "Sobre los modelos de la respuesta sexual|Kaplan propuso un modelo lineal de cuatro fases|Basson propuso un modelo circular de la respuesta femenina|Masters y Johnson no incluían la fase de deseo|El modelo lineal de cuatro fases es de Masters y Johnson. Kaplan propuso un modelo trifásico con deseo."
    ],
    seq: [
      "Fases de la respuesta sexual según Masters y Johnson|Excitación>Meseta>Orgasmo>Resolución"
    ],
    cls: [
      "Modelo de la respuesta sexual|Masters y Johnson: lineal; cuatro fases; sin deseo|Kaplan: trifásico; deseo al inicio|Basson: circular; intimidad y receptividad; excitación antes del deseo"
    ] },
  { t: "Trastornos parafílicos y disforia o incongruencia de género",
    tip: "Una parafilia es un interés sexual atípico, intenso y persistente. Solo es un trastorno parafílico si causa malestar o deterioro, implica daño o riesgo para otros o se ha llevado a cabo con personas que no consienten, durante al menos 6 meses. La disforia de género del DSM-5-TR se centra en el malestar, no en la identidad, y la CIE-11 traslada la incongruencia de género al capítulo de salud sexual, fuera de los trastornos mentales.",
    v: [
      "Parafilia=Interés sexual atípico, intenso y persistente",
      "Trastorno parafílico=Interés atípico con malestar o deterioro, o que implica daño o falta de consentimiento",
      "Voyeurismo=Interés por observar a una persona desprevenida desnuda o en actividad sexual",
      "Frotteurismo=Interés por tocar o rozarse con una persona que no consiente",
      "Fetichismo=Interés por objetos inanimados o partes del cuerpo no genitales",
      "Disforia de género=Malestar por la incongruencia entre el género experimentado y el asignado al nacer",
      "Incongruencia de género=Categoría de la CIE-11 en salud sexual, fuera de los trastornos mentales",
      "Despatologización=Mantener un código para la atención sanitaria sin connotación de trastorno mental"
    ],
    g: [
      "Un trastorno parafílico debe durar al menos ___.|6 meses|3 meses|12 meses",
      "El DSM-5-TR recoge ___ trastornos parafílicos.|ocho|seis|diez",
      "Del sadismo, la CIE-11 solo conserva el trastorno de sadismo sexual ___.|coercitivo|consentido|fetichista",
      "La disforia de género del DSM-5-TR exige un malestar de al menos ___.|6 meses|3 meses|2 años",
      "El DSM-5-TR habla de género experimentado y de género ___ al nacer.|asignado|biológico|declarado"
    ],
    tf: [
      "Tener una parafilia basta, por sí sola, para diagnosticar un trastorno parafílico.|F|Además debe causar malestar o deterioro, implicar daño a otros o haberse llevado a cabo sin consentimiento.",
      "La CIE-11 elimina el fetichismo y el sadomasoquismo consentido como trastornos.|V",
      "El diagnóstico de disforia de género considera patológica la identidad trans en sí misma.|F|Se centra en el malestar clínicamente significativo, no en la identidad: ser una persona trans no es un trastorno.",
      "La disforia de género tiene criterios distintos para la infancia y para la adolescencia y la edad adulta.|V"
    ],
    q: [
      "Dos adultos practican sadomasoquismo de mutuo acuerdo, sin malestar ni deterioro. Según la CIE-11, ¿cómo se considera?|No es un trastorno|Trastorno de sadismo coercitivo|Trastorno de masoquismo sexual|El criterio decisivo es la falta de consentimiento o el malestar. Entre adultos que consienten y sin malestar no es patológico.",
      "¿Cuál es el foco del exhibicionismo?|Exponer los genitales a alguien desprevenido|Observar a alguien desprevenido y desnudo|Rozarse con una persona que no consiente|Observar a alguien desprevenido es voyeurismo, y rozarse con quien no consiente, frotteurismo.",
      "¿Qué hizo la CIE-11 con la incongruencia de género?|La trasladó al capítulo de salud sexual|La mantuvo entre los trastornos mentales|La eliminó sin conservar ningún código|Sale de los trastornos mentales, pero conserva un código para facilitar el acceso a la atención sanitaria.",
      "¿Qué tendencia guía hoy el diagnóstico en el ámbito sexual?|Reservarlo para malestar, deterioro o daño|Basarlo en la frecuencia del interés atípico|Ampliarlo a toda conducta poco habitual|Lo considerado trastorno ha dependido de las normas de cada época. Hoy se reserva para malestar, deterioro o daño a otros."
    ],
    inc: [
      "Sobre parafilias y género|La CIE-11 mantiene el travestismo fetichista|El DSM-5 distinguió parafilia de trastorno parafílico|La CIE-11 da prioridad a la falta de consentimiento|La CIE-11 elimina el fetichismo, el travestismo fetichista y el sadomasoquismo consentido como trastornos."
    ],
    seq: [],
    cls: [
      "Sistema|DSM-5-TR: disforia de género; ocho trastornos parafílicos; disfunciones sexuales como trastornos mentales|CIE-11: incongruencia de género; sadismo sexual coercitivo; capítulo de salud sexual"
    ] }
] },
{ n: 14, t: "Trastornos disociativos y de síntomas somáticos", cap: 7, pir: "baja", mods: [
  { t: "Trastorno de identidad disociativo y amnesia disociativa",
    tip: "La disociación es una discontinuidad en la integración de conciencia, memoria, identidad, percepción y control motor. El TID exige dos o más estados de personalidad diferenciados, con alteración del sentido del yo y de la agencia, y amnesias recurrentes incompatibles con el olvido ordinario. La amnesia disociativa puede ser localizada, selectiva o generalizada, y la fuga es un especificador. Su origen enfrenta al modelo postraumático con el sociocognitivo.",
    v: [
      "Disociación=Discontinuidad en la integración de conciencia, memoria, identidad, percepción y motricidad",
      "Agencia=Sensación de ser el autor de los propios actos",
      "Amnesia localizada=Incapacidad de recordar un periodo concreto, como las horas tras un accidente",
      "Amnesia selectiva=Solo se olvidan algunos aspectos de un periodo concreto",
      "Amnesia generalizada=Pérdida de toda la identidad y la historia vital, mucho más rara",
      "Fuga disociativa=Viaje o vagabundeo aparentemente intencionado con amnesia de la identidad",
      "Modelo postraumático=Trauma infantil grave que impide integrar la identidad (Dalenberg et al., 2012)",
      "Modelo sociocognitivo=Sugestión, expectativas e influencia terapéutica y cultural (Spanos, 1994)"
    ],
    g: [
      "El antiguo nombre del TID era trastorno de personalidad ___.|múltiple|escindida|dividida",
      "A diferencia de las amnesias orgánicas, la disociativa no suele seguir la ley de ___.|Ribot|Jost|Hebb",
      "En el DSM-5-TR, la fuga disociativa es un ___ de la amnesia disociativa.|especificador|subtipo|criterio",
      "Las propuestas integradoras añaden al trauma las alteraciones del sueño y la propensión a la ___.|fantasía|sugestión|ansiedad",
      "En algunas culturas, los estados de personalidad del TID se viven como una experiencia de ___.|posesión|revelación|iluminación"
    ],
    tf: [
      "Los estados de identidad del TID son personas independientes que conviven en el mismo cuerpo.|F|Son partes fragmentadas de la identidad de una misma persona, no individuos independientes.",
      "La amnesia disociativa generalizada es la forma más frecuente de amnesia disociativa.|F|La generalizada, que abarca toda la identidad y la historia vital, es mucho más rara que la localizada o la selectiva.",
      "La amnesia disociativa no suele afectar a la capacidad de aprender información nueva.|V",
      "La prevalencia del TID varía mucho según el método de evaluación y el entorno de estudio.|V"
    ],
    q: [
      "Un hombre aparece en una estación de otra provincia, bien vestido y con billete, sin saber cómo ha llegado ni poder decir su nombre. ¿Qué diagnóstico del DSM-5-TR encaja?|Amnesia disociativa con fuga|Trastorno de identidad disociativo|Amnesia disociativa localizada|La fuga es un especificador de la amnesia disociativa: viaje aparentemente intencionado con amnesia de la identidad.",
      "Una mujer encuentra a menudo en su armario ropa que no recuerda haber comprado, y otras personas notan en ella cambios marcados de conducta y de afecto. ¿Qué sugiere?|Un trastorno de identidad disociativo|Una amnesia disociativa selectiva|Un trastorno de despersonalización|Las amnesias recurrentes de sucesos cotidianos y los estados de personalidad diferenciados son rasgos esenciales del TID.",
      "¿Qué autores representan el modelo sociocognitivo del TID?|Spanos y Lilienfeld|Dalenberg y Brewin|Bleuler y Otgaar|Spanos (1994) y Lilienfeld et al. (1999) lo atribuyen a sugestión y expectativas. Dalenberg et al. (2012) defienden el postraumático.",
      "En niños, ¿qué hay que descartar antes de diagnosticar un TID?|Compañeros imaginarios o juegos de fantasía|Un cuadro de despersonalización transitoria|Un trastorno negativista desafiante|En la infancia, el cuadro no debe explicarse mejor por compañeros imaginarios o juegos de fantasía."
    ],
    inc: [
      "Sobre el TID|Basta con un estado de personalidad muy cambiante|Las amnesias son incompatibles con el olvido ordinario|Puede vivirse como una experiencia de posesión|Exige dos o más estados de personalidad diferenciados, con discontinuidad del sentido del yo y de la agencia."
    ],
    seq: [],
    cls: [
      "Modelo del TID|Postraumático: Dalenberg et al. (2012); trauma infantil grave; defensa frente a lo insoportable|Sociocognitivo: Spanos (1994); sugestión y expectativas; papel aprendido y reforzado"
    ] },
  { t: "Despersonalización, desrealización y disociación en la CIE-11",
    tip: "La despersonalización es la vivencia de irrealidad o de ser observador de uno mismo, y la desrealización, la de que el entorno es irreal. El rasgo decisivo es que el juicio de realidad se conserva («es como si»), por lo que no es psicosis. La CIE-11 amplía el grupo disociativo con el trastorno de síntomas neurológicos disociativos, el trance, el trance de posesión y el TID parcial.",
    v: [
      "Despersonalización=Irrealidad o sensación de ser observador externo de uno mismo",
      "Desrealización=El entorno se vive como irreal, lejano o detrás de un cristal",
      "Juicio de realidad=Saber que la vivencia es una sensación y describirla con un «es como si»",
      "Trastorno de trance=Estrechamiento de la conciencia del entorno sin sustitución por otra identidad",
      "Trance de posesión=La identidad habitual se sustituye por otra externa, como un espíritu o una deidad",
      "TID parcial=Un estado dominante dirige la vida y otros irrumpen sin tomar el control",
      "Síntomas neurológicos disociativos=Equivalente de la conversión en el grupo disociativo de la CIE-11",
      "Delirio de transformación corporal=Afirmar que el propio cuerpo ha cambiado de verdad"
    ],
    g: [
      "La prevalencia del trastorno de despersonalización/desrealización es aproximadamente del ___.|1-2 %|5-7 %|0,1 %",
      "«Veo la calle como un decorado» es un ejemplo de ___.|desrealización|despersonalización|alucinación",
      "En la CIE-11, la conversión se clasifica en el grupo ___.|disociativo|somático|neurológico",
      "En el DSM-5-TR, el trance de posesión solo aparece como otro trastorno disociativo ___.|especificado|parcial|inducido",
      "Los trastornos de trance exigen que la experiencia sea involuntaria y ___.|no deseada|breve|reiterada"
    ],
    tf: [
      "Quien sufre despersonalización pierde el juicio de realidad y cree que su cuerpo ha cambiado.|F|Conserva el juicio de realidad. Afirmar que el cuerpo ha cambiado de verdad sería una idea delirante.",
      "Las experiencias breves de despersonalización son frecuentes en población general con cansancio o falta de sueño.|V",
      "El DSM-5-TR incluye el TID parcial como categoría propia.|F|Es una categoría de la CIE-11. En el DSM-5-TR las formas incompletas son otro trastorno disociativo especificado.",
      "Despersonalización y desrealización pueden darse juntas o por separado.|V"
    ],
    q: [
      "Carlos dice desde hace meses: «Me oigo hablar como si fuera otro», y añade que sabe que es una sensación. ¿Qué describe?|Una despersonalización con juicio conservado|Una inserción del pensamiento de tipo psicótico|Una desrealización acompañada de delirio|Habla del propio yo y lo describe con un «es como si»: es despersonalización, no un síntoma psicótico.",
      "¿Qué diferencia el trastorno de trance de posesión del trastorno de trance?|La sustitución por una identidad externa|El estrechamiento de la conciencia del entorno|El carácter involuntario de la experiencia|En el trance no hay sustitución por otra identidad. El estrechamiento y la involuntariedad son comunes a ambos.",
      "¿Qué cuadro forma parte del diagnóstico diferencial de la despersonalización?|La epilepsia|La narcolepsia|La cleptomanía|Se incluyen el pánico, el TEPT con síntomas disociativos, sustancias como el cannabis y afecciones neurológicas como la epilepsia.",
      "¿Dónde clasifican ambos sistemas el trastorno de despersonalización/desrealización?|Entre los disociativos en los dos|Entre los disociativos solo en la CIE-11|Entre los de síntomas somáticos en el DSM|Es disociativo en el DSM-5-TR y en la CIE-11. Lo que cambia de grupo entre sistemas es la conversión."
    ],
    inc: [
      "Sobre la despersonalización|Es un síntoma psicótico por la irrealidad que implica|La persona la describe con un «es como si»|Para el trastorno debe ser persistente o recurrente|No es psicótica: el juicio de realidad se conserva y la persona sabe que se trata de una sensación."
    ],
    seq: [],
    cls: [
      "Categoría disociativa de la CIE-11|Trance: estrechamiento de la conciencia; sin otra identidad|Trance de posesión: identidad posesora externa; actos vividos como controlados por ella|TID parcial: estado dominante; otros estados irrumpen sin tomar el control"
    ] },
  { t: "Síntomas somáticos, distrés corporal y ansiedad por enfermedad",
    tip: "El trastorno de síntomas somáticos se define por pensamientos, emociones o conductas excesivos ante síntomas presentes durante al menos 6 meses, y ya no exige que carezcan de explicación médica. En la ansiedad por enfermedad, antes hipocondría, los síntomas son ausentes o leves y preocupa la enfermedad que se podría tener. La CIE-11 crea el trastorno de distrés corporal y sitúa la hipocondría en el grupo obsesivo-compulsivo.",
    v: [
      "Trastorno de síntomas somáticos=Respuesta excesiva a síntomas corporales molestos durante 6 meses o más",
      "Ansiedad por enfermedad=Miedo a padecer una dolencia grave con síntomas ausentes o leves",
      "Trastorno de distrés corporal=Categoría de la CIE-11 con síntomas angustiantes y atención excesiva a ellos",
      "Con predominio de dolor=Especificador del trastorno de síntomas somáticos",
      "Con evitación de asistencia=Tipo en que la persona evita al médico y los programas sobre enfermedades",
      "Conducta de comprobación=Buscar bultos o tomarse la tensión a diario para tranquilizarse",
      "Disforia de integridad corporal=Deseo intenso y persistente de ser físicamente discapacitado",
      "Sobrediagnóstico=Riesgo de etiquetar a personas con enfermedades reales y preocupación comprensible"
    ],
    g: [
      "El trastorno de síntomas somáticos exige una persistencia de al menos ___.|6 meses|3 meses|2 años",
      "La prevalencia del trastorno de síntomas somáticos ronda aproximadamente el ___.|5-7 %|1-2 %|15-20 %",
      "En la CIE-11, la hipocondría se clasifica en el grupo ___.|obsesivo-compulsivo|de distrés corporal|disociativo",
      "El trastorno de distrés corporal sustituye a la somatización y a los trastornos ___.|somatomorfos|facticios|conversivos",
      "La ansiedad por enfermedad se especifica con solicitud o con ___ de asistencia.|evitación|rechazo|exceso"
    ],
    tf: [
      "El trastorno de síntomas somáticos exige que los síntomas carezcan de explicación médica.|F|Ya no lo exige: se basa en la respuesta excesiva al síntoma, no en la ausencia de causa orgánica.",
      "En el trastorno de síntomas somáticos, el síntoma concreto puede ir cambiando a lo largo de los 6 meses.|V",
      "La ansiedad por enfermedad se caracteriza por síntomas somáticos intensos y muy molestos.|F|Los síntomas son ausentes o leves. Lo central es el miedo a tener una enfermedad grave.",
      "Según los modelos cognitivo-conductuales, las conductas de seguridad alivian a corto plazo pero mantienen el problema.|V"
    ],
    q: [
      "Pablo teme desde hace meses tener un problema cardiaco por una molestia mínima en el pecho, y tres electrocardiogramas normales solo lo tranquilizan unos días. ¿Qué diagnóstico del DSM-5-TR encaja mejor?|Trastorno de ansiedad por enfermedad|Trastorno de síntomas somáticos con dolor|Trastorno facticio aplicado a uno mismo|Síntomas mínimos y miedo a una enfermedad grave apuntan a ansiedad por enfermedad. En el somático, el foco es el síntoma presente.",
      "Una mujer con artritis diagnosticada dedica casi todo su tiempo a sus dolores y piensa de forma persistente que son gravísimos. ¿Puede tener un trastorno de síntomas somáticos?|Sí, por su respuesta excesiva|No, porque el dolor tiene causa médica|No, porque el dolor es su único síntoma|Desde el DSM-5 no se exige ausencia de explicación médica, aunque se critica el riesgo de sobrediagnóstico.",
      "¿Qué cuadro de la CIE-11 equivale en gran parte al trastorno de síntomas somáticos?|El trastorno de distrés corporal|La hipocondría obsesivo-compulsiva|La disforia de integridad corporal|Ambos exigen síntomas corporales presentes y una respuesta o atención excesiva a ellos.",
      "¿Por qué la CIE-11 sitúa la hipocondría junto al TOC?|Por sus pensamientos repetitivos y comprobaciones|Por la presencia de síntomas corporales intensos|Por su origen en un conflicto psíquico convertido|Comparte con el TOC los pensamientos repetitivos sobre la enfermedad y la comprobación o búsqueda de tranquilización."
    ],
    inc: [
      "Sobre el foco de cada cuadro|En la ansiedad por enfermedad preocupa el síntoma|En el somático preocupa el síntoma que se tiene|En el distrés corporal hay atención excesiva al síntoma|En la ansiedad por enfermedad preocupa la enfermedad que se podría tener, y en el somático, el síntoma presente."
    ],
    seq: [],
    cls: [
      "Cuadro|Síntomas somáticos (DSM): síntomas presentes y molestos; respuesta excesiva al síntoma|Ansiedad por enfermedad (DSM): síntomas ausentes o leves; miedo a una enfermedad grave|Distrés corporal (CIE-11): síntomas angustiantes; atención excesiva a ellos"
    ] },
  { t: "Síntomas neurológicos funcionales, trastorno facticio y factores psicológicos que influyen en otras afecciones",
    tip: "La conversión, hoy trastorno de síntomas neurológicos funcionales, afecta al movimiento o la sensibilidad y se diagnostica por signos positivos de incompatibilidad, como el signo de Hoover. Ya no exige un factor psicológico ni descartar el fingimiento, y la belle indifférence no es específica. Facticio y simulación comparten la producción intencionada de síntomas, pero solo la simulación tiene incentivo externo y no es un trastorno mental.",
    v: [
      "Histeria=Término de origen hipocrático, antecedente histórico de este grupo de trastornos",
      "Charcot=Hizo de la Salpêtrière un centro de estudio de la histeria y la hipnosis",
      "Conversión=Paso de un conflicto psíquico a un síntoma corporal, según Freud y Breuer (1895)",
      "Signo de Hoover=La cadera «paralizada» recupera fuerza al flexionar la otra pierna contra resistencia",
      "Signos positivos=Hallazgos incompatibles con las enfermedades neurológicas conocidas",
      "Belle indifférence=Aparente despreocupación ante un síntoma grave, sin valor diagnóstico",
      "Facticio aplicado a otro=Provocar o inventar síntomas en otra persona, a menudo un menor",
      "Simulación=Síntomas falsos o exagerados producidos a propósito por un incentivo externo"
    ],
    g: [
      "Freud y Breuer publicaron «Estudios sobre la histeria» en ___.|1895|1887|1911",
      "En el cuadro de Brouillet, la paciente de Charcot aparece sostenida por ___.|Babinski|Freud|Breuer",
      "El trastorno facticio aplicado a uno mismo se llamaba antes síndrome de ___.|Münchausen|Korsakoff|Charles Bonnet",
      "La simulación no es un trastorno mental, sino una ___ que se registra con un código V/Z.|afección|enfermedad|disfunción",
      "En el facticio aplicado a otro, el diagnóstico se asigna a quien ___ el engaño.|causa|sufre|denuncia"
    ],
    tf: [
      "El DSM-5-TR exige identificar un factor psicológico desencadenante para diagnosticar síntomas neurológicos funcionales.|F|Ya no lo exige, aunque puede especificarse si lo hay.",
      "En los síntomas neurológicos funcionales, los síntomas no se producen de forma intencionada.|V",
      "El trastorno facticio se distingue de la simulación por buscar un beneficio económico.|F|Es al revés: el incentivo externo define la simulación. En el facticio no hay incentivo externo evidente.",
      "Los factores psicológicos que influyen en otras afecciones exigen una enfermedad médica presente.|V"
    ],
    q: [
      "Un hombre con una demanda por accidente laboral refiere una ceguera que no coincide con lo observado y no colabora con la evaluación. ¿Qué hay que sospechar?|Simulación|Trastorno facticio|Síntomas neurológicos funcionales|Contexto médico-legal, discrepancia entre quejas y hallazgos y falta de colaboración orientan a una simulación por incentivo externo.",
      "Una enfermera se inyecta sustancias para provocarse fiebre y acude a urgencias sin buscar dinero ni bajas. ¿Qué diagnóstico encaja?|Facticio aplicado a uno mismo|Simulación por incentivo externo|Trastorno de síntomas somáticos|Induce la enfermedad con engaño y sin incentivo externo evidente: es un trastorno facticio aplicado a uno mismo.",
      "Una persona con diabetes deja la insulina en épocas de estrés y su enfermedad empeora. ¿Qué diagnóstico corresponde?|Factores psicológicos en otra afección médica|Trastorno de síntomas somáticos persistente|Trastorno facticio aplicado a uno mismo|Hay una enfermedad médica y un factor conductual que interfiere con el tratamiento y empeora su curso.",
      "¿En qué se basa el diagnóstico del trastorno de síntomas neurológicos funcionales?|En signos positivos de incompatibilidad|En la belle indifférence del paciente|En un conflicto psíquico identificado|Se exigen hallazgos clínicos incompatibles con las enfermedades neurológicas conocidas, no solo un diagnóstico por exclusión."
    ],
    inc: [
      "Sobre la conversión|La belle indifférence confirma el diagnóstico|Puede cursar con crisis no epilépticas psicógenas|Ya no exige descartar que el paciente finja|La belle indifférence no es específica y no sirve para diagnosticar."
    ],
    seq: [
      "Historia del grupo de la conversión|Histeria hipocrática>Charcot en la Salpêtrière>Freud y Breuer (1895)>Síntomas neurológicos funcionales del DSM-5-TR"
    ],
    cls: [
      "Cuadro|Síntomas neurológicos funcionales: no intencionados; signos positivos de incompatibilidad|Trastorno facticio: engaño identificado; sin incentivo externo evidente|Simulación: incentivo externo; código V/Z"
    ] }
] },
{ n: 15, t: "Sustancias y conductas adictivas", cap: 7, pir: "media", mods: [
  { t: "Conceptos y modelos de la adicción",
    tip: "El DSM-5 unificó abuso y dependencia en un continuo con 11 criterios: 2 o más en 12 meses, con gravedad leve (2-3), moderada (4-5) o grave (6 o más). Eliminó los problemas legales y añadió el craving, y la tolerancia y la abstinencia no cuentan con fármacos bajo supervisión médica. La CIE-11 mantiene consumo nocivo y dependencia. Entre los modelos destacan el proceso oponente, la sensibilización del incentivo, la alostasis y el aprendizaje.",
    v: [
      "Intoxicación=Síndrome reversible propio de cada sustancia durante el consumo o poco después",
      "Tolerancia=Necesidad de más dosis para el mismo efecto, o menor efecto con la misma dosis",
      "Craving=Deseo intenso o urgencia de consumir, criterio añadido en el DSM-5",
      "Proceso oponente=La reacción b, contraria al placer, se fortalece con la repetición (Solomon y Corbit)",
      "Sensibilización del incentivo=El «querer» crece con el consumo aunque el «gustar» no (Robinson y Berridge)",
      "Alostasis=Desplazamiento del equilibrio hedónico con reclutamiento de sistemas de estrés como el CRF",
      "Tolerancia condicionada=Respuesta compensatoria provocada por el contexto habitual de consumo (Siegel)",
      "Violación de la abstinencia=Un consumo aislado se vive como fracaso total y facilita la recaída"
    ],
    g: [
      "Un trastorno por consumo con 4 criterios en 12 meses es de gravedad ___.|moderada|leve|grave",
      "El DSM-5 eliminó el criterio de problemas ___.|legales|sociales|físicos",
      "La dependencia de la CIE-11 exige 2 o más de ___ rasgos en 12 meses.|3|4|11",
      "Koob y Le Moal describen el «lado oscuro» de la adicción, dominado por el refuerzo ___.|negativo|positivo|intermitente",
      "Según Siegel, consumir en un lugar nuevo eleva el riesgo de ___.|sobredosis|abstinencia|craving"
    ],
    tf: [
      "El DSM-5-TR mantiene la distinción entre abuso y dependencia del DSM-IV.|F|El DSM-5 unificó abuso y dependencia en un único trastorno por consumo con 11 criterios.",
      "Un paciente con opioides pautados para el dolor no tiene un trastorno por su tolerancia y abstinencia.|V",
      "Según el proceso oponente, con el tiempo el consumo deja de buscar placer y pasa a evitar malestar.|V",
      "El modelo de enfermedad cerebral de Volkow, Koob y McLellan (2016) es hoy un consenso sin críticas.|F|Lo critican los modelos de aprendizaje, elección y contexto. Es uno de los debates abiertos."
    ],
    q: [
      "Miguel, que consume cocaína, sigue deseándola con intensidad aunque reconoce que ya apenas disfruta de ella. ¿Qué modelo lo explica mejor?|La sensibilización del incentivo|El modelo de tolerancia condicionada|La prevención de recaídas de Marlatt|El «querer» se sensibiliza y se disocia del «gustar» (Robinson y Berridge, 1993).",
      "Tras seis meses sin beber, Ana toma una copa en una boda, piensa «ya lo he estropeado todo» y esa noche bebe sin control. ¿Qué fenómeno describe Marlatt?|El efecto de violación de la abstinencia|La tolerancia condicionada por el contexto|El proceso b del modelo oponente|Un consumo aislado vivido como fracaso total facilita la recaída completa.",
      "¿Cuáles son los tres rasgos de la dependencia en la CIE-11?|Control deficitario, prioridad y rasgos fisiológicos|Craving, deterioro social y consumo en situaciones de riesgo|Tolerancia, abstinencia y problemas legales repetidos|Control deficitario, prioridad creciente del consumo y rasgos fisiológicos como la tolerancia y la abstinencia.",
      "¿Qué incluye el DSM-5-TR entre los trastornos inducidos por sustancias?|La intoxicación y la abstinencia|El trastorno por juego|El trastorno por consumo leve|Los inducidos incluyen intoxicación, abstinencia y cuadros psicóticos, depresivos, de ansiedad o del sueño."
    ],
    inc: [
      "Sobre el trastorno por consumo del DSM-5-TR|Se diagnostica con 3 o más criterios en 12 meses|Tiene 11 criterios repartidos en cuatro grupos|La forma grave exige 6 o más criterios|Se diagnostica con 2 o más criterios en 12 meses. Leve es 2-3, moderado 4-5 y grave 6 o más."
    ],
    seq: [
      "Recaída según Marlatt|Abstinencia mantenida>Consumo aislado>Efecto de violación de la abstinencia>Recaída completa"
    ],
    cls: [
      "Sistema|DSM-5-TR: continuo con 11 criterios; leve, moderado o grave; videojuegos en la Sección III|CIE-11: consumo nocivo y dependencia; 2 de 3 rasgos; videojuegos como diagnóstico oficial"
    ] },
  { t: "Alcohol, tabaco y cafeína",
    tip: "El alcohol es un depresor que potencia el GABA y reduce el glutamato, y es la sustancia que causa más trastornos por consumo. Su abstinencia cursa con hiperactividad autonómica, temblor y posibles convulsiones, y su forma más grave, el delirium tremens, es una urgencia. El déficit de tiamina causa el síndrome de Wernicke-Korsakoff. El DSM-5-TR no reconoce intoxicación por tabaco y solo recoge el trastorno por consumo de cafeína en la Sección III.",
    v: [
      "Delirium tremens=Forma más grave de la abstinencia alcohólica, con alteración de la conciencia",
      "Encefalopatía de Wernicke=Cuadro agudo con confusión, ataxia y alteraciones de los movimientos oculares",
      "Síndrome de Korsakoff=Amnesia anterógrada grave con confabulaciones",
      "Tiamina=Vitamina B1, cuyo déficit causa el síndrome de Wernicke-Korsakoff",
      "Nistagmo=Movimiento ocular anómalo típico de la intoxicación alcohólica",
      "Refuerzo negativo=Alivio por suprimir la abstinencia, que el fumador vive como calma",
      "Abstinencia de cafeína=Cefalea, fatiga, disforia y síntomas parecidos a los de la gripe",
      "Nicotina=Sustancia responsable de la mayor carga de mortalidad"
    ],
    g: [
      "La heredabilidad del trastorno por consumo de alcohol es aproximadamente del ___.|50 %|20 %|80 %",
      "Si los síntomas persisten en torno a ___ o más tras dejar de beber, hay que pensar en un trastorno independiente.|un mes|una semana|un año",
      "El DSM-5-TR no reconoce la ___ por tabaco.|intoxicación|abstinencia|tolerancia",
      "El trastorno por consumo de cafeína solo figura en la Sección ___ del DSM-5-TR.|III|II|I",
      "El alcohol potencia la acción del ___ y reduce la del glutamato.|GABA|CRF|THC"
    ],
    tf: [
      "Gran parte de la calma que siente el fumador al fumar consiste en suprimir la abstinencia.|V",
      "El delirium tremens es la forma más grave de la intoxicación alcohólica.|F|Es la forma más grave de la abstinencia, con alteración de la conciencia y alucinaciones.",
      "El síndrome de Wernicke-Korsakoff se debe a un déficit de tiamina.|V",
      "La cefalea del fin de semana en quien toma mucho café entre semana suele ser una intoxicación leve.|F|Suele ser una abstinencia leve de cafeína."
    ],
    q: [
      "Ramón, de 50 años, bebe a diario desde hace años. Ingresa por una fractura y a los dos días tiembla, suda y ve insectos en la pared. ¿Qué ocurre?|Una abstinencia alcohólica|Una intoxicación alcohólica|Una encefalopatía de Wernicke|Temblor, hiperactividad autonómica y alucinaciones al dejar de beber indican abstinencia, que hay que tratar como urgencia.",
      "¿Qué combina la encefalopatía de Wernicke?|Confusión, ataxia y alteraciones oculares|Amnesia anterógrada, confabulaciones y apatía|Temblor, sudoración, taquicardia y convulsiones|Es el cuadro agudo. La amnesia con confabulaciones corresponde al síndrome de Korsakoff, y el temblor, a la abstinencia.",
      "¿Qué síntoma forma parte de la intoxicación por cafeína?|Rubor|Cefalea|Somnolencia|La intoxicación cursa con nerviosismo, insomnio, rubor y taquicardia. La cefalea y la somnolencia son de abstinencia.",
      "¿Qué sustancia causa más trastornos por consumo?|El alcohol|Los opiáceos|El cannabis|El alcohol causa más trastornos por consumo. El tabaco es el responsable de la mayor carga de mortalidad."
    ],
    inc: [
      "Sobre tabaco y cafeína|El DSM-5-TR reconoce la intoxicación por tabaco|La abstinencia de tabaco aumenta el apetito|La cafeína es la sustancia de uso más cotidiano|El DSM-5-TR reconoce el trastorno por consumo y la abstinencia de tabaco, pero no la intoxicación."
    ],
    seq: [],
    cls: [
      "Sustancia|Alcohol: habla farfullante; nistagmo; delirium tremens|Tabaco: sin intoxicación en el DSM-5-TR; irritabilidad al dejarlo; refuerzo negativo|Cafeína: rubor; cefalea de fin de semana; trastorno por consumo en la Sección III"
    ] },
  { t: "Cannabis, opiáceos, estimulantes, sedantes, alucinógenos e inhalantes",
    tip: "El DSM-5 incorporó la abstinencia de cannabis, que presenta el 47 % de los consumidores regulares o dependientes (Bahji et al., 2020). Los opiáceos producen miosis y, en sobredosis, depresión respiratoria, y su abstinencia es en buena parte la imagen opuesta de la intoxicación. La abstinencia de benzodiacepinas es peligrosa por las convulsiones. Los alucinógenos no tienen abstinencia en el DSM-5-TR, pero sí un trastorno perceptivo persistente.",
    v: [
      "THC=Principal componente psicoactivo del cannabis",
      "Inyección conjuntival=Ojos rojos propios de la intoxicación por cannabis",
      "Receptores µ=Diana principal de los opiáceos",
      "Miosis=Pupilas puntiformes de la intoxicación por opiáceos",
      "Depresión respiratoria=Riesgo mortal de la sobredosis de opiáceos",
      "Trastorno perceptivo persistente=Reexperimentación de alteraciones perceptivas mucho después de usar alucinógenos",
      "Patología dual=Coexistencia de un trastorno adictivo y otro trastorno mental",
      "Inhalantes=Disolventes, pegamentos o gasolina, de consumo más propio de adolescentes"
    ],
    g: [
      "En el metaanálisis de Bahji et al. (2020), presentaba abstinencia el ___ de los consumidores regulares o dependientes.|47 %|17 %|87 %",
      "En muestras de población general, la abstinencia de cannabis aparecía en el ___.|17 %|47 %|54 %",
      "La abstinencia de estimulantes cursa con ___, fatiga y sueños vívidos y desagradables.|disforia|euforia|miosis",
      "La retirada de las benzodiacepinas debe ser gradual por el riesgo de ___.|convulsiones|miosis|hipersomnia",
      "La ___ tiene categoría propia, separada de los demás alucinógenos.|fenciclidina|psilocibina|mescalina"
    ],
    tf: [
      "El cannabis no produce síndrome de abstinencia, solo una dependencia psicológica.|F|El DSM-5 lo incorporó, y el 47 % de los consumidores regulares o dependientes lo presenta (Bahji et al., 2020).",
      "La abstinencia de opiáceos es muy desagradable, aunque rara vez peligrosa en sí misma.|V",
      "La abstinencia de benzodiacepinas suele ser leve y la retirada puede hacerse de golpe.|F|Es peligrosa, con riesgo de convulsiones, y la retirada debe ser gradual y supervisada.",
      "Combinar benzodiacepinas con alcohol u opioides aumenta el riesgo de depresión respiratoria.|V"
    ],
    q: [
      "Llega a urgencias un joven somnoliento, con pupilas puntiformes, habla farfullante y respiración muy lenta. ¿Qué hay que sospechar?|Sobredosis de opiáceos|Intoxicación por cocaína|Abstinencia de benzodiacepinas|Miosis, somnolencia y depresión respiratoria orientan a una sobredosis de opiáceos, que puede ser mortal.",
      "Un paciente que dejó la heroína presenta lagrimeo, rinorrea, bostezos, piloerección y pupilas dilatadas. ¿Qué principio ilustra?|Abstinencia opuesta a la intoxicación|Tolerancia condicionada al contexto|Sensibilización del incentivo|Los signos de abstinencia son en buena parte los opuestos a los de la intoxicación, como predice el proceso oponente.",
      "¿Qué cuadro cursa con flashbacks perceptivos mucho después del consumo?|Trastorno perceptivo por alucinógenos|Abstinencia tardía de alucinógenos|Intoxicación crónica por inhalantes|El DSM-5-TR no recoge abstinencia de alucinógenos, pero sí el trastorno perceptivo persistente por alucinógenos.",
      "Un hombre desarrolla una psicosis tras consumir cocaína. ¿Qué hay que distinguir?|Si es inducida o independiente|Si es intoxicación o abstinencia|Si es leve, moderada o grave|Los cuadros inducidos deben distinguirse de los trastornos independientes que se agravan con el consumo."
    ],
    inc: [
      "Sobre los estimulantes|Su intoxicación produce miosis e hipotensión|Aumentan la actividad dopaminérgica|A dosis altas pueden dar ideas paranoides|La intoxicación por estimulantes produce midriasis e hipertensión. La miosis es propia de los opiáceos."
    ],
    seq: [],
    cls: [
      "Signo en los opiáceos|Intoxicación: miosis; somnolencia; depresión respiratoria|Abstinencia: midriasis; piloerección; lagrimeo y rinorrea"
    ] },
  { t: "Juego y videojuegos",
    tip: "El DSM-5 trasladó el juego patológico al capítulo de adicciones como trastorno por juego, el único adictivo sin sustancia. Exige 4 o más de 9 criterios en 12 meses, con gravedad leve (4-5), moderada (6-7) o grave (8-9), y hay que descartar un episodio maníaco. Volver a jugar para recuperar lo perdido es uno de los criterios más característicos. El trastorno por videojuegos es diagnóstico oficial en la CIE-11, y en el DSM-5-TR el juego en internet sigue en la Sección III.",
    v: [
      "Chasing=Volver a jugar para «recuperar» lo perdido",
      "Refuerzo de razón variable=Premios impredecibles que hacen la conducta muy resistente a la extinción",
      "Ilusión de control=Creer que la habilidad o un ritual influyen en un resultado aleatorio",
      "Falacia del jugador=Pensar que tras varias pérdidas «toca» ganar",
      "Casi aciertos=Resultados casi premiados que se viven como señal de estar cerca",
      "Trastorno por videojuegos=Control deficitario, prioridad creciente y continuación pese a daños (CIE-11)",
      "Sección III=Lugar del DSM-5-TR para afecciones que requieren más estudio",
      "Juego patológico=Antiguo nombre del trastorno, antes en el capítulo de control de impulsos"
    ],
    g: [
      "Un jugador que cumple 6 criterios tiene un trastorno por juego de gravedad ___.|moderada|leve|grave",
      "Los criterios 1 y 2 del trastorno por juego equivalen a la tolerancia y la ___.|abstinencia|recaída|ilusión de control",
      "El trastorno por videojuegos suele exigir un periodo de al menos ___.|12 meses|6 meses|3 meses",
      "En la CIE-11 se especifica si el trastorno por videojuegos es predominantemente en línea o ___.|fuera de línea|competitivo|grupal",
      "Antes de diagnosticar el trastorno por juego hay que descartar un episodio ___.|maníaco|depresivo|psicótico"
    ],
    tf: [
      "El trastorno por juego es el único trastorno adictivo sin sustancia del DSM-5-TR.|V",
      "El trastorno por videojuegos es diagnóstico oficial tanto en el DSM-5-TR como en la CIE-11.|F|Solo en la CIE-11. En el DSM-5-TR el trastorno por juego en internet está en la Sección III.",
      "Jugar muchas horas basta para diagnosticar un trastorno por videojuegos.|F|Lo que lo define es la pérdida de control y el deterioro, no el número de horas.",
      "En la CIE-11, el periodo de 12 meses del trastorno por videojuegos puede ser menor si los síntomas son graves.|V"
    ],
    q: [
      "Hugo, de 25 años, apuesta cada noche en el móvil, sube la apuesta cuando pierde «para recuperar», ha pedido préstamos a escondidas de su pareja y se irrita si no puede jugar. ¿Qué se concluye?|Cumple al menos 4 criterios del trastorno|Solo cumple criterios de juego problemático|Necesita 6 criterios para el diagnóstico|Irritabilidad, chasing, mentir y pedir dinero suman al menos 4 de 9 criterios, suficientes para el diagnóstico.",
      "Una jugadora de tragaperras está convencida de que, tras perder diez veces seguidas, «le toca» ganar. ¿Qué sesgo muestra?|Falacia del jugador|Ilusión de control|Efecto de casi acierto|Pensar que tras varias pérdidas toca ganar es la falacia del jugador. La ilusión de control atribuye el resultado a la habilidad.",
      "¿Por qué el DSM-5 trasladó el juego al capítulo de adicciones?|Por sus semejanzas con las sustancias|Por su origen en un conflicto psíquico|Por su frecuencia en la adolescencia|Se apoyó en la pérdida de control, la tolerancia, síntomas parecidos a la abstinencia y la activación de la recompensa.",
      "¿Qué tipo de refuerzo hace la conducta de juego tan resistente a la extinción?|Intermitente de razón variable|Continuo de razón fija|Intermitente de intervalo fijo|Los premios impredecibles del refuerzo intermitente de razón variable hacen la conducta muy resistente a la extinción."
    ],
    inc: [
      "Sobre el trastorno por juego|Exige 2 o más de 11 criterios en 12 meses|Es grave con 8 o 9 criterios|El chasing es uno de sus criterios característicos|Exige 4 o más de 9 criterios. Los 2 de 11 corresponden al trastorno por consumo de sustancias."
    ],
    seq: [],
    cls: [
      "Diagnóstico|Trastorno por juego (DSM-5-TR): 4 de 9 criterios; leve, moderado o grave|Trastorno por videojuegos (CIE-11): control deficitario; prioridad creciente; en línea o fuera de línea"
    ] }
] },
{ n: 16, t: "Conducta alimentaria, conducta disruptiva y control de impulsos", cap: 7, pir: "alta", mods: [
  { t: "Anorexia, bulimia, atracones y ARFID",
    tip: "La anorexia combina restricción con peso significativamente bajo, miedo a engordar y alteración de la percepción del peso o la figura, y la amenorrea dejó de ser criterio en el DSM-5. La bulimia exige atracones y conductas compensatorias al menos una vez por semana durante 3 meses, con peso normal o sobrepeso. El trastorno por atracón no tiene conductas compensatorias regulares, y el ARFID restringe la ingesta sin preocupación por el peso ni la figura.",
    v: [
      "Anorexia nerviosa=Restricción con peso muy bajo, miedo a engordar y alteración de la imagen corporal",
      "Atracón=Comer mucho más de lo habitual en un periodo determinado con sensación de pérdida de control",
      "Conducta compensatoria=Vómito, laxantes, ayuno o ejercicio excesivo para contrarrestar lo comido",
      "Trastorno por atracón=Ingestas recurrentes con pérdida de control, malestar intenso y sin compensaciones regulares",
      "ARFID=Restricción por desinterés, sensorialidad o miedo, sin preocupación por la figura",
      "Anorexia extrema=IMC inferior a 15 en adultos, según el DSM-5-TR",
      "Bajo peso en la CIE-11=IMC inferior a 18,5, y peligrosamente bajo si es inferior a 14",
      "Subtipo restrictivo=Forma de anorexia sin atracones ni purgas"
    ],
    g: [
      "En adultos, la anorexia es moderada con un IMC de ___.|16-16,99|15-15,99|17-17,99",
      "La bulimia exige atracones y compensaciones al menos una vez por semana durante ___.|3 meses|1 mes|6 meses",
      "El trastorno por atracón exige al menos ___ rasgos, como comer muy rápido o a solas por vergüenza.|tres|dos|cuatro",
      "En la CIE-11, la frecuencia orientativa de la bulimia es de una vez por semana durante al menos ___.|1 mes|3 meses|6 meses",
      "Un niño que tras atragantarse con una espina solo acepta purés encaja en el ___.|ARFID|trastorno por atracón|subtipo restrictivo"
    ],
    tf: [
      "La amenorrea sigue siendo criterio de anorexia nerviosa en el DSM-5-TR.|F|Dejó de ser criterio en el DSM-5, y tampoco lo es en la CIE-11.",
      "El trastorno por atracón es aproximadamente el trastorno alimentario más frecuente en adultos.|V",
      "Si una persona no está muy delgada ni ha perdido la regla, se descarta un trastorno alimentario.|F|La bulimia y el atracón suelen cursar con peso normal o sobrepeso. Lo común es la sobrevaloración del peso y la figura.",
      "La anorexia tiene una de las mortalidades más altas entre los trastornos mentales en muchos estudios.|V"
    ],
    q: [
      "Una paciente adulta tiene un IMC de 15,5, miedo intenso a engordar y vómitos frecuentes tras comer. ¿Qué diagnóstico corresponde?|Anorexia con purgas, grave|Bulimia nerviosa con peso bajo|Anorexia restrictiva, moderada|El bajo peso orienta a anorexia aunque haya purgas. Un IMC de 15-15,99 corresponde a gravedad grave.",
      "¿Qué distingue la bulimia nerviosa de la anorexia con atracones/purgas?|El peso|Los vómitos|El miedo a engordar|En la bulimia el peso suele ser normal o con sobrepeso. Los vómitos y el miedo a engordar pueden darse en ambas.",
      "¿Qué rasgo distingue el ARFID de la anorexia?|No hay preocupación por la figura|Hay una pérdida de peso marcada|Exige un IMC inferior a 17|En el ARFID la restricción no responde al deseo de adelgazar, aunque puede haber pérdida de peso.",
      "Un hombre tiene atracones semanales desde hace 4 meses, come a solas por vergüenza y siente culpa, pero no vomita ni ayuna. ¿Qué diagnóstico encaja?|Trastorno por atracón|Bulimia nerviosa no purgativa|Anorexia con atracones|Atracones sin conductas compensatorias regulares, con malestar y rasgos asociados, definen el trastorno por atracón."
    ],
    inc: [
      "Sobre los trastornos alimentarios|La bulimia suele cursar con peso muy bajo|El ARFID puede causar déficit nutricional|La anorexia tiene dos subtipos en el DSM-5-TR|En la bulimia el peso suele ser normal o con sobrepeso, y eso la distingue de la anorexia con purgas."
    ],
    seq: [],
    cls: [
      "Trastorno alimentario|Anorexia: peso significativamente bajo; miedo a engordar|Bulimia: atracones con compensaciones; peso normal o sobrepeso|ARFID: miedo a atragantarse; rechazo por la textura; sin preocupación por la figura"
    ] },
  { t: "Modelos de los trastornos alimentarios",
    tip: "Fairburn (2003) propuso un modelo transdiagnóstico con un núcleo común: la sobrevaloración del peso, la figura y su control como base de la autoevaluación. Ese núcleo lleva a una dieta estricta, que favorece los atracones, y estos a conductas compensatorias que refuerzan el núcleo. Se añaden cuatro mantenedores: perfeccionismo clínico, baja autoestima nuclear, intolerancia emocional y dificultades interpersonales. Ningún factor de riesgo basta por sí solo.",
    v: [
      "Modelo transdiagnóstico=Núcleo común compartido por anorexia, bulimia y cuadros atípicos (Fairburn, 2003)",
      "Sobrevaloración del peso=Valor personal casi dependiente de comer poco, pesar poco y tener cierta figura",
      "Dieta estricta=Reglas rígidas como «nada de pan» o un límite de calorías",
      "Intolerancia emocional=Comer, purgarse o restringir para regular emociones intensas",
      "TCC-E=Terapia cognitivo-conductual mejorada derivada del modelo de Fairburn",
      "Idea sobrevalorada=Creencia intensa, cargada de afecto y coherente con valores culturales, no delirante",
      "Insatisfacción corporal=Factor sociocultural ligado al ideal de delgadez y la presión sobre el cuerpo",
      "Mantenimiento por bajo peso=La desnutrición aumenta la preocupación por la comida, el aislamiento y la rigidez"
    ],
    g: [
      "En el modelo de Fairburn, la dieta estricta favorece la pérdida de control y los ___.|atracones|vómitos|ayunos",
      "La convicción de estar gorda con un peso muy bajo suele considerarse una idea ___.|sobrevalorada|delirante|obsesiva",
      "La heredabilidad de los trastornos alimentarios es ___.|moderada-alta|baja-moderada|muy baja",
      "Entre los factores de personalidad destacan el perfeccionismo y el ___.|neuroticismo|psicoticismo|antagonismo",
      "Hacer ___ es uno de los antecedentes más habituales de los trastornos alimentarios.|dieta|deporte|terapia"
    ],
    tf: [
      "Para Fairburn, la anorexia y la bulimia tienen núcleos psicopatológicos distintos.|F|Comparten un mismo núcleo: la sobrevaloración del peso, la figura y su control.",
      "Las conductas compensatorias alivian a corto plazo, pero refuerzan el núcleo y la dieta.|V",
      "La convicción de estar gorda con muy bajo peso es un delirio, signo de trastorno psicótico.|F|Suele considerarse una idea sobrevalorada. El insight puede ser pobre, pero no es un trastorno psicótico.",
      "Los trastornos alimentarios en varones existen y probablemente se detectan menos.|V"
    ],
    q: [
      "Lucía, de 15 años, sigue reglas alimentarias cada vez más rígidas. Un día rompe una, se siente «un fracaso total», come sin control y al día siguiente ayuna. Según Fairburn, ¿qué paso es el ayuno?|Una conducta compensatoria|La sobrevaloración del peso|Un mantenedor interpersonal|Tras el atracón llegan la culpa y las compensaciones, como el ayuno, que refuerzan el núcleo y reinician el ciclo.",
      "¿Qué mantenedor adicional describe Fairburn cuando se come o se purga para regular emociones intensas?|Intolerancia emocional|Perfeccionismo clínico|Baja autoestima nuclear|La intolerancia emocional consiste en comer, purgarse o restringir para regular emociones intensas.",
      "¿Qué mantiene de forma específica la anorexia, además del núcleo común?|El bajo peso|Los atracones|Las purgas|La desnutrición aumenta la preocupación por la comida, el aislamiento y la rigidez.",
      "¿En qué marco se sitúan los factores de riesgo de los trastornos alimentarios?|Modelo de vulnerabilidad-estrés|Modelo de enfermedad cerebral|Modelo del proceso oponente|Ningún factor basta por sí solo: los socioculturales, biológicos, de personalidad y demográficos se combinan."
    ],
    inc: [
      "Sobre el modelo de Fairburn|Explica solo la bulimia, no la anorexia|El núcleo es la sobrevaloración del peso|Incluye el perfeccionismo clínico como mantenedor|Es transdiagnóstico: anorexia, bulimia y cuadros atípicos comparten el mismo núcleo."
    ],
    seq: [
      "Ciclo del modelo de Fairburn|Sobrevaloración del peso y la figura>Dieta estricta>Pérdida de control y atracones>Conductas compensatorias"
    ],
    cls: [
      "Factor de riesgo|Sociocultural: ideal de delgadez; insatisfacción corporal; hacer dieta|De personalidad: perfeccionismo; neuroticismo|Demográfico: adolescencia; sexo femenino"
    ] },
  { t: "Trastorno negativista desafiante y trastorno de la conducta",
    tip: "El TND combina ánimo irritable, conducta desafiante y vengatividad: al menos 4 síntomas durante 6 meses, con alguien que no sea un hermano. El trastorno de la conducta viola derechos ajenos o normas sociales importantes y exige 3 de 15 criterios en 12 meses, con al menos 1 en los últimos 6. El inicio infantil, antes de los 10 años, y el especificador «con emociones prosociales limitadas» señalan peor pronóstico.",
    v: [
      "Vengatividad=Categoría de síntomas del TND junto al ánimo irritable y la conducta desafiante",
      "Inicio infantil=Al menos un síntoma del trastorno de la conducta antes de los 10 años",
      "Emociones prosociales limitadas=Especificador con rasgos de insensibilidad-frialdad",
      "Insensibilidad-frialdad=Falta de remordimientos y de empatía, con afecto superficial",
      "Trastorno de conducta disocial=Denominación de la CIE-11 para el patrón persistente de violación de derechos y normas",
      "Desregulación disruptiva del ánimo=Irritabilidad crónica con arrebatos graves",
      "Incumplimiento grave de normas=Salir de noche pese a la prohibición, hacer novillos o escaparse de casa",
      "Gravedad del TND=Se especifica por el número de entornos en que aparece"
    ],
    g: [
      "El TND exige al menos 4 síntomas durante al menos ___.|6 meses|12 meses|3 meses",
      "A partir de los 5 años, los síntomas del TND deben darse al menos una vez por ___.|semana|día|mes",
      "El trastorno de la conducta exige al menos 3 de ___ criterios en 12 meses.|15|11|9",
      "Si la persona tiene 18 años o más y cumple criterios de trastorno de la personalidad ___, se diagnostica este último.|antisocial|límite|paranoide",
      "Provocar incendios se incluye en la categoría de ___ de la propiedad.|destrucción|engaño|robo"
    ],
    tf: [
      "La agresión física y el robo son criterios centrales del TND.|F|No forman parte del TND. Son criterios centrales del trastorno de la conducta.",
      "Para el TND, los síntomas deben mostrarse con al menos una persona que no sea un hermano.|V",
      "El trastorno de la conducta de inicio adolescente tiene peor pronóstico que el de inicio infantil.|F|Es al revés: el inicio infantil, antes de los 10 años, tiene peor pronóstico y se asocia más al antisocial.",
      "El TND puede preceder al trastorno de la conducta.|V"
    ],
    q: [
      "Un niño de 8 años se enfada con facilidad, discute con los adultos, desafía las normas y es rencoroso desde hace 7 meses, en casa y en el colegio, pero no agrede ni roba. ¿Qué diagnóstico encaja?|Trastorno negativista desafiante|Trastorno de la conducta infantil|Desregulación disruptiva del ánimo|Enfado, desafío y vengatividad durante más de 6 meses, sin agresión ni robo, apuntan al TND.",
      "Un adolescente de 14 años roba en coches, intimida a compañeros y se escapa de casa desde hace un año, y su primer síntoma apareció a los 9. ¿Qué subtipo tiene?|De inicio infantil|De inicio adolescente|No especificado|Al menos un síntoma antes de los 10 años define el inicio infantil, con peor pronóstico.",
      "¿Qué recoge el especificador «con emociones prosociales limitadas»?|Rasgos de insensibilidad-frialdad|Irritabilidad crónica con arrebatos|Agresión dirigida a animales|Falta de remordimientos, de empatía y de preocupación por el rendimiento, y afecto superficial. Identifica un subgrupo más grave.",
      "En la CIE-11, ¿dónde se sitúan el TND y el trastorno de conducta disocial?|En un grupo de comportamiento disruptivo|Junto a los trastornos de los impulsos|Entre los trastornos de la personalidad|Forman un grupo de comportamiento disruptivo o disocial, separado de los trastornos del control de los impulsos."
    ],
    inc: [
      "Sobre el trastorno de la conducta|Se diagnostica con 4 síntomas en 6 meses|Puede preceder al trastorno antisocial|El inicio infantil es más frecuente en varones|El umbral es de al menos 3 de 15 criterios en 12 meses. Los 4 síntomas en 6 meses son del TND."
    ],
    seq: [],
    cls: [
      "Trastorno|TND: ánimo irritable; conducta desafiante; vengatividad|Trastorno de la conducta: agresión a personas y animales; destrucción de la propiedad; engaño o robo"
    ] },
  { t: "Explosivo intermitente, piromanía, cleptomanía y conducta sexual compulsiva",
    tip: "Muchos trastornos del control de los impulsos siguen un ciclo de tensión, acto, alivio o placer y, a veces, culpa. A diferencia de la compulsión del TOC, el acto resulta gratificante en el momento. El explosivo intermitente cursa con arrebatos desproporcionados y no premeditados. La piromanía y la cleptomanía carecen del motivo instrumental del incendiario o del ladrón común. La conducta sexual compulsiva es una categoría de la CIE-11 que el DSM-5-TR no incluye.",
    v: [
      "Explosivo intermitente=Arrebatos agresivos recurrentes, desproporcionados y no premeditados",
      "Piromanía=Incendios deliberados por tensión y fascinación por el fuego, sin motivo instrumental",
      "Cleptomanía=Impulso irresistible de llevarse objetos innecesarios, con tensión previa y alivio",
      "Incendiario=Quien quema con un motivo instrumental, como cobrar un seguro",
      "Conducta sexual compulsiva=Fracaso persistente en controlar impulsos eróticos intensos y repetitivos, según la CIE-11",
      "Ciclo impulsivo=Tensión creciente, acto, alivio o placer y, a veces, culpa",
      "Tricotilomanía=Salió del control de impulsos en el DSM-5 y pasó al grupo obsesivo-compulsivo",
      "Arrebatos sin daños=Agresión verbal o física de media 2 veces por semana durante 3 meses"
    ],
    g: [
      "Para diagnosticar el trastorno explosivo intermitente, la persona debe tener al menos ___ años.|6|10|18",
      "Otra forma del explosivo intermitente son ___ arrebatos con daños o lesiones en 12 meses.|3|2|5",
      "La cleptomanía es rara y más frecuente en ___.|mujeres|varones|adolescentes",
      "A diferencia de la compulsión del TOC, el acto impulsivo suele resultar ___ en el momento.|gratificante|neutralizador|indiferente",
      "El malestar que procede solo de juicios ___ no basta para diagnosticar la conducta sexual compulsiva.|morales|clínicos|médicos"
    ],
    tf: [
      "Quemar un bosque para recalificar el terreno es un caso típico de piromanía.|F|Es un incendio con motivación instrumental. La piromanía excluye motivos económicos, ideológicos o de venganza.",
      "En la cleptomanía, los objetos robados a menudo se regalan, se tiran o se devuelven a escondidas.|V",
      "El DSM-5-TR incluye la conducta sexual compulsiva entre los trastornos del control de los impulsos.|F|Es una categoría de la CIE-11. El DSM-5-TR no la incluye como diagnóstico.",
      "En el explosivo intermitente, los arrebatos no son premeditados ni instrumentales.|V"
    ],
    q: [
      "Un hombre rompe el móvil contra la pared porque el tren llega cinco minutos tarde y luego se avergüenza. Le pasa varias veces al mes. ¿Qué diagnóstico se plantea?|Trastorno explosivo intermitente|Trastorno de la conducta|Trastorno negativista desafiante|Arrebatos recurrentes, desproporcionados y no premeditados son el núcleo del trastorno explosivo intermitente.",
      "Una mujer roba en tiendas objetos baratos que no necesita, siente tensión antes y alivio durante el robo, y luego los tira. ¿Qué sugiere?|Cleptomanía|Robo instrumental|Trastorno de la conducta|Objetos innecesarios, tensión previa y alivio, sin ira ni venganza, definen la cleptomanía.",
      "¿Dónde clasifica la CIE-11 la conducta sexual compulsiva?|Entre los trastornos de los impulsos|Entre las conductas adictivas|Entre los trastornos parafílicos|La CIE-11 la sitúa en el control de los impulsos y no en las adicciones, y el DSM-5-TR no la reconoce.",
      "¿Qué trastorno salió del capítulo de impulsos en el DSM-5 para pasar a las adicciones?|El juego patológico|La tricotilomanía|La cleptomanía|El juego patológico pasó a las adicciones, y la tricotilomanía, al grupo obsesivo-compulsivo."
    ],
    inc: [
      "Sobre la piromanía|Puede responder a una venganza|Implica fascinación por el fuego|Hay tensión o activación previa|La piromanía excluye motivos económicos, ideológicos o de venganza."
    ],
    seq: [
      "Ciclo del control de los impulsos|Tensión o activación creciente>Acto>Alivio, placer o gratificación>Culpa posterior"
    ],
    cls: [
      "Cuadro|Piromanía: fascinación por el fuego; tensión previa; sin motivo instrumental|Incendiario: cobrar un seguro; recalificar un terreno; venganza"
    ] }
] }
);

SP.register(window.COURSE);
})({});
